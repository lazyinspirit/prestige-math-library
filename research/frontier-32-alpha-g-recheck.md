# frontier-32 — Alpha group `g` Step 3 scaffold recheck

Scope: batch `13`, covering `co-e-free-comb-structure` (A, order 437) and
`co-e-free-comb-structure-examples` (B, order 438).

I rechecked the current 17-item batch manifest, coverage, Step-3 fix-pass
notes, plan entries, and published interfaces. I also reread Huang--Ju--Zhou,
*Erdős-Hajnal beyond the five-vertex path*, arXiv HTML v2, Lemma 5.1 and its
proof (lines 859--915) and §6.1 (lines 962--1022). The source distinction
between the universal statement of Lemma 5.1 and its proof's arbitrary
special-vertex comb is preserved.

## Dispositions

1. **`Blocking mathematical finding`: closed by the source-faithful local route.**
   The original objection was correct: Lemma 6.4 is not a proof of the
   universal published `def-structural-comb-partition-hypothesis`. The repair
   leaves that interface unchanged and adds
   `thm-special-vertex-local-structural-partition-criterion-implies-property-star`.
   Its hypothesis is exactly the one needed after Lemma 5.1's proof starts
   with a special-vertex comb (lines 882--893); the remaining argument uses
   only that comb's partition (lines 894--915). This is sufficient for the
   local route and does not assert the unavailable universal theorem.

2. **`Restored Claims 6.4.1 and 6.4.2 to their exact general form`: closed.**
   The current manifest retains arbitrary nonadjacent vertices $x,y$ complete
   to the relevant path or $H_5$, with $u\in N(x)\setminus N(y)$; it makes the
   comb-specific $(v,a_i)$ substitution only afterwards. This agrees with
   source Claims 6.4.1--6.4.2 (lines 998--1022).

3. **`Made the special-vertex hypothesis explicit in the Claim 6.4.3 scaffold and in the final theorem`: closed.**
   `lem-co-e-free-external-purity-survives-h-five-overlap-quotients` and
   `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`
   explicitly require the outside vertex complete to every block and
   anticomplete to every tooth, exactly as Lemma 6.4 does (lines 975--995).

4. **`Repaired the boundary case in which no vertex of $B_i$ lies in an induced $H_5$`: closed.**
   The final structural theorem moves one vertex of a nonempty $B_i$ into a
   singleton $X_i$ when the source-defined overlap set is empty. The singleton
   blockade is nonempty and pure, its one-vertex pattern is
   $\{H_5,\mathrm{co}\text{-}E\}$-free, and the residual $Y_i$ remains
   $H_5$-free and co-$E$-free.

5. **`Added def-comb-in-a-graph to the overlap-relation definition's dependencies`: closed.**
   `def-h-five-overlap-chain-relation-in-a-comb-block` now explicitly depends
   on both `def-h-zero-through-h-five` and `def-comb-in-a-graph`; all 17
   current manifest items have explicit dependency arrays.

6. **`Added the missing coverage carrier for the terminal-pattern argument ... and corrected ... special-vertex qualification`: closed.**
   The coverage now has exact included rows for the local criterion (Lemma
   5.1 proof, lines 882--915), the special-vertex Lemma 6.4 theorem, and the
   `{E}` application. It retains the terminal-pattern carrier and accurately
   qualifies Lemma 6.4. All 37 harvested rows have a valid disposition and
   destination where required.

7. **`scaffold-closure/co-e-free-comb-structure`: closed.**
   The pushback against an unsound universalization stands, but it no longer
   blocks the pair. The new local criterion and
   `cor-the-singleton-family-containing-e-has-property-star` compose the
   batch's exact special-vertex structural theorem with the
   $\{H_5,\mathrm{co}\text{-}E\}$ Erdős--Hajnal lemma to prove property (*)
   for $\{E\}$. Their dependency arrays are complete and do not invoke the
   universal structural-hypothesis definition.

8. **B-page closure: closed.**
   The three examples remain dependency-closed against the repaired A page.
   In particular, the four-tooth example explicitly includes the outside
   special vertex required by the structural theorem; its displayed graph is
   bipartite, hence co-$E$-free because co-$E$ contains a triangle.

## Current verdict

- `co-e-free-comb-structure`: **sufficient**. The A page has a
  source-faithful, dependency-closed local proof route to property (*) for
  $\{E\}$; it neither depends on nor falsely establishes the universal
  published structural-comb hypothesis.
- `co-e-free-comb-structure-examples`: closed with its A companion.

## Checks on current bytes

- `node tools/scope-decisions.mjs refresh --run frontier-32 --group g` and
  `check`: 6 current declines, 0 pending, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-13.coverage.json --require-destination`:
  1 page, 37 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-13.coverage.json`:
  2/2 source receipts fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-32-batch-13.pages.json` and
  `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-13.pages.json`:
  17 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-integrity.mjs --run frontier-32`: all 46 owed pages
  remain present with no scope drift.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; the reported
  redundant-prerequisite advisories are repository-wide and unrelated to this
  batch.
