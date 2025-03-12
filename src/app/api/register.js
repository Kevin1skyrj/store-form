export default function handler(req, res) {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
      }
  
      const { name, email } = req.body;
  
      if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
      }
  
      // Simulate database insertion (or replace with real DB logic)
      console.log("User registered:", { name, email });
  
      return res.status(200).json({ message: "User registered successfully!" });
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }