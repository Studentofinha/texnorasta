import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
      
        // Set JWT as HTTP-only cookie
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        });
      
        return token; // Optional: return token for logging or other uses
    } catch (error) {
        console.error("Error generating token:", error);
        throw error;
    }
};

export default generateToken;
