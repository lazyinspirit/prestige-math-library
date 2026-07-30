# Frontier 4 topology — judge and final-Alpha adjudication

Date: 2026-07-31
Judge: `z-ai/glm-5.2` through OfoxAI
Context: the complete A/B pair plus exactly the source page's declared
prerequisite pages that it actually cites.

## Final accounting

- 234 distinct draft items on 12 pages.
- 249 verdict records: 239 passes, 10 historical rejections, no null verdicts
  and no transport failures.
- The 10 rejections affected nine ids; the compactness-equivalence theorem was
  rejected twice for distinct defects.
- Every id's final verdict is pass.
- Usage ledger: 14,652,476 prompt tokens and 1,401,834 completion tokens across
  249 nonzero-usage calls.
- All 10 rejections were true positives. No result was dropped, deferred, or
  added solely to answer a rejection.

## Judge rejections and dispositions

1. `lem-euclidean-polygonal-paths-are-continuous` — `[L3]` attributed
   componentwise continuity to a definition that did not state it. The
   dependency and fact were corrected to
   `thm-componentwise-limits-and-continuity`; rejudge passed.
2. `thm-compactness-via-nets-filters-and-ultrafilters` — the five-way
   equivalence omitted a route from net/filter cluster points back to the other
   compactness conditions. The derived-net implication \(2\Rightarrow4\) was
   added; the first rejudge then exposed the separate defect below.
3. `thm-compactness-via-nets-filters-and-ultrafilters` — `[L1]` did not state
   the FIP-to-filter clause used in Step 1.5. The exact equivalence was restored
   and cited at the use; rejudge passed.
4. `thm-compact-hausdorff-open-cover-uniformity` — the proof invoked a
   uniform-cover star-refinement result before proving that the cover family was
   a uniform-cover structure. The proof was reordered and the earlier finite
   open star-refinement lemma cited; rejudge passed.
5. `lem-normalizing-a-locally-finite-positive-family` — `[F1]` stated only one
   direction of the partition-of-unity definition, while the proof used the
   converse and had not recorded continuity or the range condition. The exact
   biconditional was restored and the range proved; rejudge passed.
6. `thm-subordinate-partitions-of-unity-exist` — Urysohn's lemma was used
   without establishing normality. The dependency
   `thm-paracompact-hausdorff-implies-normal` and an explicit normality step were
   added; rejudge passed.
7. `fs-paracompactness-is-hereditary` — the ordinal witness was recorded as
   \(T_1\), but the cited paracompactness result required Hausdorffness. The
   exact Hausdorff ordinal fact was restored and cited; rejudge passed.
8. `lem-lindelof-degree-is-well-defined` — the existence of a least bounding
   cardinal was misattributed to the well-ordering theorem. Cardinal existence
   under choice was separated from the ZF least-ordinal fact supplied by
   `lem-ordinal-trichotomy`; rejudge passed.
9. `lem-density-is-well-defined` — the same cardinal-minimum
   misattribution was corrected in the same way; rejudge passed.
10. `ex-cardinal-functions-of-the-real-line` — the upper bound
    \(c(\mathbb R)\leq\aleph_0\) had no dependency. The basic cardinal-function
    inequalities were added and both bounds made explicit; rejudge passed.

## Final Alpha blockers caught after judge passes

The narrow final Alpha audit found two judge-passed dependency defects.

- `thm-subordinate-partitions-of-unity-exist`: `[L4]` omitted the domain,
  continuity, local-finiteness, positivity, and support-preservation clauses
  used in Step 4.1. The exact normalization lemma was restored in `[L4]`;
  rejudge passed.
- `ex-cardinal-functions-of-the-real-line`: countability of \(\mathbb Q\) was
  cited for density and the rational-interval basis. The exact earlier theorem
  `thm-rational-points-and-boxes-in-rn`, specialized to \(n=1\), replaced that
  dependency; the B-page context now declares the Euclidean A page; rejudge
  passed.

Alpha also identified a nonfatal formal gap in
`lem-lindelof-degree-is-well-defined`: “all bounding cardinals” is a proper
class. The proof now takes the nonempty set of bounding cardinals at most
\(|\mathcal T|\), proves its least member is globally least, and rejudged pass.

## Twice-touched personal audit

The verification-only hash normalization bug in `tools/touchlog.mjs` was fixed:
both inline and block `verification` forms are now excluded. The active ledger
was rebased with mechanically preserved repair counts and retains the six
original snapshots under `legacy_snapshots`. The final escalation set has 14
items.

No escalated repair changed a public Statement after its final form, so all
existing consumers remain semantically compatible. Dropping ramifications were
checked as follows:

| id | final fault audited | direct consumers lost if dropped |
|---|---|---:|
| `thm-compactness-via-nets-filters-and-ultrafilters` | missing implication and FIP fact; full five-way proof now passes | 4 |
| `ex-cardinal-functions-of-the-real-line` | missing two upper-bound dependencies; no Statement change | 0 |
| `fs-paracompactness-is-hereditary` | missing ordinal separation facts; refutation now passes | 0 |
| `lem-euclidean-polygonal-paths-are-continuous` | wrong continuity citation; proof now passes | 6 |
| `lem-lindelof-degree-is-well-defined` | wrong minimum source and proper-class wording; proof now passes | 4 |
| `thm-compact-hausdorff-open-cover-uniformity` | incomplete topology comparison and premature star-refinement citation; proof now passes | 2 |
| `thm-subordinate-partitions-of-unity-exist` | missing normality and insufficient normalization fact; proof now passes | 4 |
| `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` | product-net convergence citation narrowed to the exact direction used | 0 |
| `lem-character-is-well-defined` | cardinal supremum/minimum dependencies repaired | 3 |
| `lem-density-is-well-defined` | cardinal minimum dependency repaired | 4 |
| `lem-metric-open-covers-have-point-finite-refinements` | least-index inference, dyadic decay dependency, and primary-source chain repaired | 3 |
| `lem-normalizing-a-locally-finite-positive-family` | partition-of-unity biconditional and continuity/range restored | 1 |
| `lem-pseudometric-from-a-normal-entourage-sequence` | Frink compression and its exact real/set-theoretic dependencies rebuilt | 3 |
| `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity` | both uniformity-comparison inclusions and topology recovery completed | 3 |

All 14 were retained. Dropping the compactness-equivalence theorem would also
remove three transitive results and overstate two page summaries; dropping any
of the other results with consumers would break the listed dependency closure
without mathematical cause.
