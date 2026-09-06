# Step-6a reader report — Batch 2

## Scope opened

- Dispatch, recovery routing, manifest, notes, and proof contract:
  `research/frontier-31a-reader.task.md`,
  `research/frontier-31a-reader-recover-2.task.md`,
  `research/frontier-31a-batch-2.pages.json`,
  `research/frontier-31a-batch-2.notes.md`, and
  `research/frontier-31a-batch-2.proof-contracts.json`.
- Current A and B pages:
  `library/measure-theory/absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus.md`
  and
  `library/measure-theory/absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples.md`.
- Every current assigned item body (30 A items and 6 B items), including all
  proof-bearing entries, false statements, and examples.
- Published dependency statements needed for the review: the AC and BV
  definitions; AC/BV hierarchy; Jordan decomposition; monotone/BV
  differentiability and derivative-integrability theorems; Vitali covering;
  outer regularity; absolute continuity of the integral; the first $L^1$ FTC;
  classical FTCs; Fubini; bounded-derivative Lipschitzness; countable-null;
  and the listed HK comparison/FTC items.
- I independently opened the cited Heil and Srivastava source PDFs at the
  relevant sections. Srivastava's one-dimensional substitution result is
  explicitly only for a $C^1$ bijection; Heil's PDF gives the
  Banach--Zarecki/growth material but not the arbitrary-AC composition
  chain-rule result claimed by the local lemma.

## Inventory and verdicts

| Page | Items opened | Verdict |
| --- | --- | --- |
| A: `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | `def-luzin-property-n-on-a-compact-interval`; `def-indefinite-lebesgue-integral-on-a-compact-interval`; `def-total-variation-function-on-a-compact-interval`; `rem-absolute-continuity-conventions-and-hierarchy-agreement`; `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant`; `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous`; `thm-absolutely-continuous-functions-have-integrable-derivatives`; `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`; `rem-sharp-and-classical-fundamental-theorems-of-calculus-agreement`; `thm-absolutely-continuous-functions-have-luzin-property-n`; `lem-luzin-property-n-gives-an-integral-growth-estimate`; `thm-banach-zarecki-characterisation-of-absolute-continuity`; `thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity`; `lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous`; `thm-integration-by-parts-for-absolutely-continuous-functions`; `thm-change-of-variables-for-an-increasing-absolutely-continuous-function`; `lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition`; `thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis`; `thm-total-variation-function-of-an-absolutely-continuous-function`; `thm-lipschitz-characterisation-within-absolutely-continuous-functions`; `thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous`; `thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous`; `cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous`; `rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval`; five `fs-*` items; and `rem-bounded-derivative-design-correction` | **Blocked:** all locally checked claims are coherent after the repairs below, but the arbitrary-AC chain-rule lemma has an unresolved source/proof gap. |
| B: `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` | `cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous`; `ex-integration-by-parts-for-absolutely-continuous-functions`; `ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set`; `cex-the-cantor-function-fails-luzin-property-n`; `cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous`; `cex-luzin-property-n-does-not-imply-absolute-continuity` | **Locally passes; transitively blocked** by the unresolved A-page lemma and its change-of-variables consequence. |

## Repairs made

- Preserved the explicit choice costs of the published Vitali, monotone
  derivative, and first-$L^1$-FTC dependencies. The zero-derivative theorem
  now assumes Dependent Choice; the derivative theorem assumes Countable
  Choice; and the sharp FTC and all directly reliant assigned results/examples
  now state their Countable- and Dependent-Choice hypotheses. Their direct
  dependency arrays and proof-contract derivation claims were updated.
- Replaced the oscillatory $x^2\sin(1/x^2)$ counterexample's invalid
  “not AC, consequently not BV” inference with explicit alternating-extrema
  partition sums proving infinite variation, then cited AC $\Rightarrow BV$.
- Repaired the integration-by-parts theorem: the product rule now follows at
  the common a.e. differentiability set, and compact-interval boundedness plus
  $L^1$ derivatives establish integrability. Fubini is no longer asserted to
  prove the product rule.
- Repaired the integration-by-parts example: it now exhibits $\sqrt{x}$ and
  $x$ as indefinite $L^1$ integrals before invoking the formula.
- Repaired the fat-Cantor substitution example: it now cites the indefinite
  integral AC corollary and first $L^1$ FTC for $g$ and $g'$.
- Added the missing explicit Jordan-decomposition citation in the
  Banach--Zarecki proof.
- Updated the affected entries in
  `research/frontier-31a-batch-2.proof-contracts.json`. No changed item had a
  `verification.judge` record, so none required removal.

## Remaining blocker

`lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition`,
step 1.1, invokes an arbitrary-AC inverse-null/area estimate: for the null set
where the primitive is not differentiable, it asserts that $g'=0$ almost
everywhere on its preimage. That is a substantive one-dimensional area-formula
result, not an immediate consequence of the displayed dependencies. The
current cited Heil source does not supply it, and the checked Srivastava
substitution theorem assumes a $C^1$ bijection. The item therefore needs a
complete local proof or a newly verified, exact external source/carrier before
the downstream nonmonotone change-of-variables theorem can be accepted. This
is an assigned in-flight defect, so it is recorded here rather than in the
uneditable-findings JSON.

## Validation

- Reflow and focused precheck passed for each changed item: 16 initial repairs,
  then the two subsequent citation repairs.
- `node tools/proof-contract.mjs research/frontier-31a-batch-2.proof-contracts.json --strict`:
  `29/29` contracts checked, zero errors and warnings.
- `node tools/content-policy.mjs research/frontier-31a-batch-2.pages.json`:
  36 scoped items, zero errors and warnings.
- `node tools/depcheck.mjs --quiet`: no errors; it emitted the repository's
  pre-existing global warnings.

## Uneditable findings

None. The sole remaining confirmed issue is carried by an assigned in-flight
item and is therefore not duplicated in the findings artifact.
