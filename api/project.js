import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Akses file data JSON di dalam folder "api/data"
    const filePath = path.join(process.cwd(), 'api', 'data', 'projects.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(jsonData);

    // Hanya izinkan method GET
    if (req.method === 'GET') {
      res.status(200).json(projects);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error loading projects:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
