# Independent proposal review — ROUND1: REJECT

Scope: operational packaging only; no mathematical rereview, live code/source/state/authority/control/gate changes. Proposed files were read from `research/machine-learning-all-101-2026-10-19-owner-closeout-symlink-context-fix/your-proposal/tools/`.

## Blocking finding

**R1-1: native evidence closure silently ignored actual absolute repository-local paths.** In the first inspected proposal, `nativeProtectedPathClosure.add` immediately returned unless the string matched `^(?:research|items|library|tools|briefs)/`. Actual native Step5 evidence keys use `/home/lazyinspirit/Projects/prestige-math-library/research/...`, including the current 575-path certificate. A genuinely bound context symlink, or an absolute intermediate JSON path that led to a context symlink, therefore did not enter the protected set. The new selection could omit a native bound input instead of refusing it.

The requested bounded repair is lexical normalization of the exact absolute current-root prefix to a safe relative path before selector checks, without following filesystem links or treating foreign absolute paths as local. Add direct absolute certificate-link and absolute intermediate-JSON/transitive-descendant regressions. Preserve existing required/frozen/explicit protection and symlink-parent refusal.

This request was sent to author and root immediately. Root requires separately frozen complete revision2 and one final ROUND2 review; no third external cycle.

## Evidence and timing

The initial defect was observed in the first full diff returned by the read-only tool. The author then repaired the proposal in-place before the reviewer finished copying it into an isolated `/tmp` tree. **No original revision1 raw hash or frozen preimage was captured by this reviewer; no initial failing test run is claimed.** Do not reconstruct/backdate one. The author/root may separately retain a genuine original archive if one exists.

`observed-repaired-pins.json` records the subsequently observed repaired file hashes, explicitly not original revision1 pins. Preliminary isolated tests of those repaired bytes passed **17/17**: the author's then-current 15 cases plus two reviewer-added direct/transitive absolute native evidence cases. These are preliminary repair evidence, not ROUND1 approval or a substitute for final ROUND2 review. All test fixtures and code copies lived in `/tmp/closeout-context-review-r1.sn26mL`; no research symlink overlay was created. Live native preflight/gates were not invoked.

## Other code assessment pending final review

The inspected design retains ordinary regular files, hashes opaque context entries without dereferencing link targets, uses exact symlink-entry membership for exclusion, preserves absent-selection V1 behavior, checks root/evidence state, and refuses protected descendants under directory links. The original 12-root manifest remains a research inventory, not an installed authority. In particular, the 23 real proposal/checker files and accepted local-unit/page-preview artifacts must remain ordinary selected regular files.

Final ROUND2 must inspect frozen complete repaired files, unknown/malformed selection modes, overlap/external evidence checks, absolute/relative current and historical native closure, ancestor conflicts, and realistic 12-root reference effects. A failure on a genuinely authoritative historical symbolic input must remain a blocker, never be hidden to make the packaging test pass. Opaque link text remains operational state, not authenticated old target content or mathematical acceptance.

Subsequent author archive clarification: the author reports a genuinely retained pre-fix `/tmp` copy and restored it to the original proposal path, separately freezing revision1 inventory. Reviewer subsequently verified the restored original module raw SHA256 `dfc201f97566c916a32cacb85f0ec14d249f4b76e5e32660fe75d2581cb62991`; its original absolute-path omission matches the first inspected diff. The separately frozen complete revision2 is under `your-proposal/revision2/tools/`, module SHA256 reported by author `275b647a597276906e726f574ee8837f392e9363191ac00a2248099f67f4ae74`. Author reports two real regression failures against retained revision1 and 34/34 passing against revision2; those author results are not presented as reviewer-run tests. ROUND1 remains REJECT; final ROUND2 is separate.
