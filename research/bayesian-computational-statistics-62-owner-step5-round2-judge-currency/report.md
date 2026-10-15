# Step5 round2 currency mismatch

Confirmed a generic spend/receipt policy mismatch. Round2selects9items. Eight received new exact-context Sol61verdicts; the particle-Gibbs theorem was skipped because its item hash is unchanged68bf66… while its certified current contextffba02… differs from the prior accepted contextd5f2b8…. The sweepcache already holdsffba02…, so clearing it or retrying unchanged code cannot fix this.

The proposed three-file patch adds shared optional exact-context currency, retains the legacy context-or-item default, and makes Step5 pass the strict mode explicitly. Receipt construction still requires both exact hashes. judge.mts performs no secondary history/cache skip, so no change is needed there. Preserve all real original verdicts, attempt logs and frozen evidence.

After root integration, the existing native failed-lane retry can resume5.4; exact-context currency preserves the eight completed calls and schedules only the remaining theorem under its current prompt. No ad hoc judge/gate/model call, live edit, verdict rewrite or fabricated receipt was made. Documentation and exact before-code guards accompany the patch. Root owns implementation, native dispatch and subsequent full batteries.
