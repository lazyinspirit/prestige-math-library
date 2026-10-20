# Final review: consolidated repair set

The six revision-2 candidate files match their advertised after hashes and live before hashes. They were copied into the reviewer's own isolated `/tmp/initial-recovery-review-final-bwbttpqq` snapshot before independent verification, avoiding concurrent author edits. `final-reviewed-hashes.json` records that exact inventory. The author's focused 68-test selection passes on this snapshot.

Three additional independent adversarial tests fail on these frozen bytes, so this version is not approved:

1. A later explicit pending claim about an already reviewed recovery-floor consumer closes using an earlier pass's review. Reproduction: fresh pass reviews consumer x; next genuine pass reviews a different newly pending trigger and declares x pending again without reviewing x; advance returns complete. The recovery-target shortcut must require coverage from the declaring wave or a later genuine current owner wave, as ordinary native pending work requires.
2. After a valid paused/drained record, changing the live state to unpaused with a new unfinished writer still permits first scheduling when source bytes are unchanged. The first scheduling operation must recheck the actual 5.2 hold and writer drain, not only the archived creation state. Later ordinary native passes may keep their existing unpaused execution semantics.
3. An original uncertain review with an additional malformed field is admitted. A short invalid reason produces the same generic `invalid review 3/id` diagnostic as uncertainty alone, so equality of error strings cannot prove that uncertainty is the sole defect. All other ordinary review fields must be independently validated while preserving the exact original uncertainty and zero historical review credit.

All three cases are in `final-independent.test.mjs`. They have been sent together as the bounded final review's repair set. No live code, native state, sources, reports or gates were changed by this reviewer. Final approval remains withheld pending exact repaired bytes and a focused independent rerun.
