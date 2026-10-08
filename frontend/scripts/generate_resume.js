import fs from 'fs';
import path from 'path';

// Synchronize verified authentic resume PDF to public assets
function syncResume() {
  const rootResumePath = path.resolve('../updated_resume_2026.pdf');
  const targetPath = path.resolve('public/resume.pdf');

  if (fs.existsSync(rootResumePath)) {
    fs.copyFileSync(rootResumePath, targetPath);
    console.log('Successfully synchronized authentic resume to:', targetPath);
  } else if (fs.existsSync(targetPath)) {
    console.log('Resume already exists at:', targetPath);
  } else {
    console.warn('Warning: updated_resume_2026.pdf not found at root path:', rootResumePath);
  }
}

syncResume();

