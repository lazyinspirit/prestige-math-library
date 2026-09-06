# Frontier-31a Alpha e Step 6b

Run: `frontier-31a`  
Group: `e`  
Owned batches: `2`, `5`, `6`  
Date: Sunday, September 6, 2026

## Scope and evidence

The live queues are `research/frontier-31a-step6-scope-{2,5,6}.json`. I read
the current reader reports and findings JSON, refuter reports, all routed item
carriers, both Batch 2 page carriers, the current Batch 5/6 pages needed to
check placement and rendering, proof contracts, manifests, and the cited
dependencies bearing on the disputed or HIGH/CRITICAL claims. Historical
reports were used only to identify prior repairs and append-only ledger rows;
they were checked against the current files before any decision was retained.

The live queue has 74 routed obligations: 72 `touched:` obligations, no
`page:` obligations, no reader findings, and two refuter findings. Batch 2
contributes 29 touched carriers and one refuter finding, Batch 5 contributes
five touched carriers and one refuter finding, and Batch 6 contributes 38
touched carriers. The complete one-decision-per-live-obligation record is
`research/frontier-31a-alpha-e-6b-decisions.json`.

The decisions artifact also contains four `gate:` decisions. These bind the
four append-only false-positive rows created under the superseded unauthored
Batch 2 retry scope. They are not additional live reader/refuter verdicts; the
supplemental route preserves ledger ownership while the current authored retry
is adjudicated from its own scope.

## Batch 2 findings and repairs

- `refuter:2:1`,
  `lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition`:
  **confirmed fatal**. The prior proof asserted a weighted inverse-image
  null-set fact not supplied by property `(N)`, the sharp FTC, or any declared
  dependency. The repaired proof first makes the primitive absolutely
  continuous and verifies property `(N)` and all a.e.-differentiability
  hypotheses, then invokes Christopher Heil, *Introduction to Real Analysis*,
  Theorem 6.5.2. That theorem gives the exact a.e. chain rule for an arbitrary
  representative equal to the outer derivative a.e., including the exceptional
  pullback. The source is recorded by DOI and the primitive-AC dependency is
  declared in the item and page manifest.
- `thm-change-of-variables-for-an-increasing-absolutely-continuous-function`:
  the interval-indicator calculation did not by itself justify the claim for
  arbitrary Lebesgue representatives. The proof now extends through the
  monotone-class theorem, uses outer regularity to control changes on null sets
  after composition, and applies monotone convergence to nonnegative functions.
  Applying the formula to `|f|` proves the required integrability. The exact
  source is Heil, Corollary 6.5.8; constant and singleton cases are explicit.
- `thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis`:
  the local derivation from the repaired chain lemma and sharp FTC is valid,
  but its survey citation did not state this theorem. It now cites Heil,
  Theorem 6.5.6, which gives the precise conditional formula.
- `thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity`:
  the phrase “the growth proof” hid a load-bearing undeclared inference. The
  integral-growth lemma is now declared and applied separately: first to show
  property `(N)` after adding the countable exceptional image, then to bound
  every endpoint increment and partition sum. Banach--Zarecki and the sharp FTC
  then give absolute continuity and the formula at every endpoint.
- Four unmatched interval math delimiters were repaired in the Facts &
  Assumptions of
  `cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous`,
  `ex-integration-by-parts-for-absolutely-continuous-functions`,
  `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, and
  `thm-integration-by-parts-for-absolutely-continuous-functions`.

The Batch 2 provenance coverage was synchronized with these repairs: Heil's
book and exact locators are now recorded for the three chain/substitution
results, while Srivastava §4.16 and Corollary 4.52 are explicitly declined as
the narrower `C1`-bijection route rather than left as support for a stronger
claim.

The remaining Batch 2 reader repairs were checked and accepted against the
current dependencies: propagation of Countable and Dependent Choice; the
alternating-extrema proof of infinite variation for the oscillatory example;
the product-rule and bounded-times-`L1` integration-by-parts proof; the two
example repairs; and the explicit Jordan-decomposition step in Banach--Zarecki.

## Batches 5 and 6

`refuter:5:1` remains **confirmed fatal and repaired**. Grafakos Theorem
3.3.16 has the strict upper range `alpha<1`, whereas the item includes
`alpha=1`; the current source list adds Michael Taylor, *Fourier Analysis,
Distributions, and Constant-Coefficient Linear PDE*, Exercise 3, for that
endpoint. The local weighted-`l2` proof covers the full written range.

All five Batch 5 and 38 Batch 6 touched carriers were reread in their current
form. The earlier substantive Alpha repairs remain present: the noncircular
periodization proof of Poisson summation; the analytic-continuation dependency
for trivial zeros; the clearing-denominators dependency for the rank of
`O_K`; distinct embeddings and determinant nonvanishing in the discriminant
formula; and the `K=Q(alpha)` hypothesis in the power-basis theorem. The reader
repairs for Wiener-algebra choice scope, the unit-circle character argument,
the normalized holomorphic contour, the finite-double-sum Gauss norm proof,
the `f^h` trace/norm calculation, and the narrowed conductor examples are also
mathematically coherent. Two stale Batch 6 risk notes were synchronized with
the current individual-character and `cuberoot(2)` carriers.

## Risk review

`tools/risk-report.mjs` was run without `--require-reviewed` before closure.
Specific mathematical `risk_review` records are complete for all eleven Batch 2,
four Batch 5, and fifteen Batch 6 HIGH/CRITICAL contracts. The new Batch 2
records address the exceptional-set chain rule, measure-extension and
representative issues in substitution, the conditional endpoint formula, the
reverse total-variation inequality, the singular integration-by-parts
example, the positive-measure flat-set example, and the countably-exceptional
growth argument. Re-running every owned contract with `--require-reviewed`
reports zero errors.

## Decisions and append-only ledger

The decisions file contains 78 uniquely keyed decisions: 74 for the exact live
queue and four supplemental historical gate bindings. It records 19
`accepted_repair`, 53 `amended_repair`, two `confirmed_fatal`, and four
historical `false_positive` verdicts. Every decision has a nonempty evidence
record, a unique defect-ledger reference, and a current carrier hash produced
by `tools/step6-scope.mjs stamp --group e`.

Thirty new closed Batch 2 rows were appended through
`tools/defect-ledger.mjs append`: one per touched carrier and one for the live
refuter finding. The append regenerated `research/DEFECT-LEDGER.md`, and
`tools/defect-ledger.mjs validate --run frontier-31a` checks all 403 run rows
with zero errors.

## Validation

- Reflow and focused precheck pass for all eight Batch 2 item amendments.
- Focused rendercheck passes on those eight items and all eight current owned
  page carriers, including real KaTeX and renderer YAML parsing.
- Strict proof-contract checks pass at `29/29`, `15/15`, and `38/38` for
  batches 2, 5, and 6, with no errors or warnings.
- Citation fidelity checks 59 contract citations across 82 authored items with
  no missing quote or widening candidate.
- Manifest dependency checks pass for all 103 scoped items, and ordinary
  content policy passes at 36, 17, and 50 items with no errors or warnings.
- The Batch 2 coverage checklist has zero errors; its low-yield warning is
  accounted for by explicit `included`, `inline`, `already-published`, or
  reasoned `out-of-scope` dispositions for all 74 harvested results.
- `validate-plan` reports an acyclic, consistent page order with no item-level
  cycle, forward reference, B-page dependency, or unresolved id; `depcheck`
  exits zero with only the repository's pre-existing global warnings.
- The reviewed-risk gate passes on all three owned contracts.
- The focused Step-6 adjudication checker accepts every group-e obligation,
  verdict, ledger reference, and current subject hash.

The checker still exits nonzero on two repository-global Batch 14 publication
records outside this dispatch:
`published-claim-extra: lem-sheaf-condition-check-on-basis` and
`published-repair-extra: reader:14:1`. They are the only reported gate blocker
for each owned-batch invocation and were not edited.

No judge outcome or stage transition was decided or stamped by this group.
