// Separate entrypoint avoids a top-level-await import cycle with the guarded CLI.
// This process is launched only inside the kernel-held flock slot.
import { computeStatus } from './autopilot-status.mjs';
await computeStatus(JSON.parse(process.argv[2]));
