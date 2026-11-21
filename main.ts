// Copies the committed front page render into the grader's output directory.
//
// The program is deterministic: it only ever copies a fixed byte sequence, so two
// runs over the same entry.png produce identical output. The output directory may be
// a mount point on a read-only root, so it is emptied entry by entry rather than
// removed and recreated.

import { copyFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');

mkdirSync(outDir, { recursive: true });

for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

copyFileSync(source, join(outDir, 'entry.png'));
