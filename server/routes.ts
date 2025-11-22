import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Pure function to attach routes to the Express app (for both Replit and Vercel)
export function attachRoutes(app: Express): void {
  // Put application routes here
  // Prefix all routes with /api
  // Use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  
  // Example route (currently commented out):
  // app.get('/api/example', async (req, res) => {
  //   res.json({ message: 'Example API route' });
  // });
}

// Create HTTP server (only used for Replit development server)
export async function registerRoutes(app: Express): Promise<Server> {
  // First attach all routes
  attachRoutes(app);
  
  // Then create and return HTTP server (for Replit)
  const httpServer = createServer(app);
  return httpServer;
}
