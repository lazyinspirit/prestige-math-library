# format-06 candidate report

Scope: the 26 suppliers and 55 alert instances in `assignment.json`, run `machine-learning-all-101-2026-10-19`. One repair/review cycle completed. No live source, metadata, digest, native attempt, engine state, publication, or Step 3 closure was edited.

## Frozen evidence and changes

`before/items/` contains the exact assignment-bound preimages; all 26 raw SHA256 values match assignment.json. `candidate/items/` contains 26 proposed carriers. `inventory.json` freezes every before/candidate SHA256 and link count; `alert-dispositions.json` records the exact alert text, batch/group/index, digest path/hash, disposition and consumer impact for each of the 55 alert instances.

Moved 100 inline wikilink occurrences from the complete Definition or Statement sections into immediately following correctly named references sections. Left each original link's exact label (the ID when no display label was supplied) at its original position. Each retained unique wikilink occupies one source line and its own blank-separated paragraph. Repeated occurrences retain their original labels in prose and use one reference paragraph per unique original wikilink.

All 55 inline-link findings are confirmed, with no false inline-link alerts. The non-link clause in one alert remains an unresolved existing issue, detailed below.

## Independent comparison and consumer impact

A fresh comparison pass verified all 26 candidate complete defining/statement sections equal their preimages after only label expansion of wikilinks, ignoring trailing section whitespace; all frontmatter and every other section are byte-identical. Formulae, algorithm instructions, hypotheses, qualifiers, explanatory prose, proofs, dependencies, verification/status and source metadata are preserved. `independent-comparison.json` records the results. Live source hashes were rechecked unchanged.

No Statement/Definition meaning changes were made. Consequently these candidates trigger no direct or indirect consumer repairs. This is a presentation comparison, not a new whole-item mathematical audit or gate acceptance.

## Explicit candidate proof-layout

After the final candidate edits, ran `node tools/proof-layout.mjs` with all 26 explicit candidate paths in isolated `/tmp/format06-candidate-3qb66l6n/items/`. Exact command, output and exit status are in `proof-layout-result.json`; output is also in `proof-layout.log`. Result: 26 items, 99 steps, 2 defects, exit 1.

Both defects concern existing Proof step 1.1 in `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`: `missing-or-invalid-tags` and `rendered-chip-mismatch`. The unchanged proof places `[L2, L3]` before its display rather than at the end of the complete argument. An explicit isolated preimage proof-layout run reproduces the same two defects (1 item, 5 steps), recorded in `preimage-proof-layout.log`. No claim of proof-layout pass is made. Focused proposed presentation repair: move that existing justification group to the end of step 1.1, after “well defined.”, leaving all mathematical text and the display intact. Root was informed; no proof edits were made under this link-only candidate brief.

No corpus validators or native gates were run.

## Existing prose inconsistency requiring owner disposition

Batch 23/group h/alert 3 for `thm-continuous-implies-integrable` additionally identifies the Statement's assertion that uniform continuity is “the only place where the compactness of [a,b] is used.” This is confirmed: Proof 1.1 invokes compactness through [L1] and the boundedness theorem [L2], while Proof 2.1 invokes it through Heine-Cantor [L3]. Existing Remarks already explicitly say compactness is used twice. The established boundedness/integrability theorem and partition estimate are unaffected; no missing mathematical prerequisite was found for this discrepancy.

The candidate preserves this prose exactly. A smallest focused correction proposal for owner review is to replace the last clause with “compactness of $[a,b]$ also supplies boundedness in step 1.1.” This would change explanatory Statement prose and therefore requires the owner's applicable consumer-ownership protocol; it was not silently folded into this presentation-only candidate. Root was notified. This alert is only partially resolved pending that decision.
