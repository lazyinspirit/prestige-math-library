# Batch 20 notes — `em-experiment-analysis-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **317**, B page order **318**, category
`classical-electromagnetism-mathematics`, library `mathematics`. Final inventory:
**1 A item + 1 B item**, both recorded `ready` with current dependency hashes.
No item file, page, plan, published item, engine state or verdict was edited.
Files written: the batch manifest, coverage (with two stamped full-text sources),
the cross-batch dependency input, the two `step1-*` readiness records, the
tool-refreshed unified ledger, this note, and the derived frontier-gate selector
files (rewritten by the shared gate wrapper).

The binding owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
and the Step-1 drift verdict for this page (`research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`:
"statistical analysis prerequisites remain mathematical ... no-drift") were read first.

## Design vs plan, exact source inventory, and the one specification decision

Design section `research/plan-classical-electromagnetism-track.md` L791–L852 ("Em
Experiment Analysis Prerequisites", quoting `proposed-inventory.json`). Compared with
`research/plan-spec.json` entries 317/318: page ids, kind, orders (317/318), category,
library `mathematics`, titles, companion links and the declared `requires`
(`em-expanded-analysis-prerequisites`) agree exactly. **No plan conflict** on page
metadata, and the design's A/B inventory is identical to the source inventory
(`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`,
`mathematical_pages[5]`). No published item was moved, re-homed or re-scoped.

**The one specification decision (recorded, not silent).** The design gives no
statement text: it gives the item id, the dep array
(`def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`,
`thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`,
`lem-em-bounded-error-model-comparison`), the reference
`completed-expansion-arguments.md#U1; primary accounts E1-E3 impose no unstated
sampling law`, and the state `complete-exact-declared-branch-conditional-research-argument`.
The referenced U1 argument is a one-variable deterministic comparison, and its
mathematical carrier is `lem-em-bounded-error-model-comparison`, already scaffolded
in batch 16 on `em-expanded-analysis-prerequisites` (order 310, level 0). Since the
design attaches the Euclidean-calculus framework explicitly (C^1 maps on open subsets
of R^n, the Euclidean inner product, the algebra of derivatives and the chain rule),
this scaffold states the pair's theorem as the **Euclidean transport of the U1
comparison**: bounded-error data confine the parameter of a C^1 prediction along a
declared unit direction `u` in an open configuration domain, with the response
derivative computed as the gradient pairing `<grad F(theta_0 + theta u), u>` and the
conclusion obtained by applying the U1 lemma to the composite
`g(theta) = F(theta_0 + theta u)` on an open parameter interval. Scope, conventions,
caveats and the proof route of the source design are preserved: the statement is a
deterministic conditional statement about user-supplied bounds, it asserts no
sampling law and no empirical precision, and it agrees with the U2 reading ("the data
restrict theta as U1 states"). The B item is the source's exact example content
(`mathematical-example-verifications.md#ex-em-experiment-analysis-prerequisites-hypothesis-boundaries`):
sharpness of the bound for `F(theta) = m theta` with `yhat = 0, s = 0`, attainment at
`theta = ±delta/m`, and failure of any finite bound once the response lower bound is
dropped (`F = 0`), with the source's own caveat that these are mathematical
observations about a hypothetical model, not fabricated experimental data.

Two consequences of that decision are stated so they are not read into the source:
(a) the theorem is formulated with an **open** parameter interval because the chain
rule is applied on open domains; the fully general one-variable statement (closed or
one-sided intervals, endpoints as centre) remains exactly with
`lem-em-bounded-error-model-comparison` on page 310, unchanged; (b) the theorem is a
strict transport, not a new statistical claim: it introduces no likelihood, estimator,
test, error rate or probability of any kind.

## Inventory decisions (recorded)

1. **A item `thm-em-uncertainty-analysis`.** All five design dependencies are kept,
   each with a genuine use: `def-ck-euclidean-maps-and-diffeomorphisms` (C^1 meaning;
   continuity of the partial derivatives of `F`), `def-euclidean-inner-product`
   (the gradient pairing and `||u||_2 = 1`), `thm-algebra-of-derivatives` and
   `lem-derivative-of-a-power` (derivative of the affine components
   `theta -> (theta_0)_j + theta u_j`), `thm-chain-rule-for-total-derivatives` (the
   derivative of `g = F o gamma`), and `lem-em-bounded-error-model-comparison` (the
   final interval conclusion). Eleven further published suppliers were added because
   the transported route consumes them: `thm-continuous-partial-derivatives-imply-total-differentiability`
   and `def-jacobian-matrix-and-gradient` (total derivative of the affine path),
   `def-directional-and-partial-derivatives`, `thm-total-derivative-computes-directional-and-partial-derivatives`
   and `thm-gradient-represents-directional-derivatives-and-steepest-ascent` (chain of
   identifications of the response derivative), and `def-metric-continuity`,
   `thm-metric-continuity-characterisations`, `thm-cauchy-schwarz-and-the-euclidean-norm`,
   `lem-real-and-metric-notions-agree`, `thm-algebra-of-continuous-functions`
   (continuity of the response derivative, needed for the lemma's C^1 hypothesis).
   No claim was weakened and no design dependency was dropped.
2. **B item `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries`.** Keeps
   the design's single dependency `thm-em-uncertainty-analysis` and adds the five
   published items its two explicit computations use (`lem-derivative-of-a-power`,
   `thm-algebra-of-derivatives`, `def-jacobian-matrix-and-gradient`,
   `def-euclidean-inner-product`, `def-abs-value`, `lem-of-abs-value`). It is homed on
   the B page; no A item depends on it.
3. **Labels.** `item-dependency-levels --check` computes level **1** for the theorem
   (sole in-run dependency: the level-0 lemma) and level **2** for the example,
   matching the design's labels exactly; the whole-run check reported no cycle and no
   label mismatch (its other errors are the empty inventories of batches still in
   flight — see the check log below).
4. Hard cap: 1 ≤ 100 items on the A page; no split needed.

## Dependency verification (actual uses, not declared edges)

All 22 distinct dep targets resolve: 21 published imported items on disk and 1 in-run
item (`lem-em-bounded-error-model-comparison`, batch 16, level 0, recorded ready). The
published suppliers were read for statement, hypotheses, conventions and direction
before use. Points checked in particular:

- `thm-continuous-partial-derivatives-imply-total-differentiability` needs the
  partials to exist on a neighbourhood and be continuous **at the point** — for the
  affine map `gamma` the partials are the constants `u_j`, so the hypothesis holds
  everywhere on the open interval.
- `thm-total-derivative-computes-directional-and-partial-derivatives` is the bridge
  `D_v f(a) = Df(a) v`, used both ways (to read `g'(theta)` as the total derivative
  applied to `1`, and to read `DF(gamma(theta))u` as the directional derivative).
- `thm-gradient-represents-directional-derivatives-and-steepest-ascent` requires only
  total differentiability of the scalar `F`, which `F in C^1` supplies.
- `thm-metric-continuity-characterisations` supplies the choice-free
  open-preimage criterion used to compose continuities; `lem-real-and-metric-notions-agree`
  converts the resulting metric continuity of `g'` back to the real-function
  continuity used by `thm-algebra-of-continuous-functions`.
- `lem-em-bounded-error-model-comparison` (batch 16) requires a function differentiable
  everywhere on an interval with continuous derivative, a one-sided bound `f' >= m > 0`,
  `f(theta_0) = 0`, and nonnegative `s, delta`; the pair verifies each and asserts no
  sampling law, matching the recorded U1 text.
- No choice principle is invoked by either item (the choice-free branch of
  `thm-metric-continuity-characterisations` is used); no missing, circular, forward or
  inadequate dependency was found.

Cross-batch edges (recorded with review rows in
`research/physics-em-sr-40-2026-10-08-batch-20.cross-batch-dependencies.json`, 2 rows):

| consumer | supplier | supplier home |
|---|---|---|
| page `em-experiment-analysis-prerequisites` | page `em-expanded-analysis-prerequisites` | batch 16 |
| `thm-em-uncertainty-analysis` | `lem-em-bounded-error-model-comparison` | batch 16 (ready, level 0) |

## Sources (two independent treatments, both full-text stamped)

1. J. Lebl, *Basic Analysis I: Introduction to Real Analysis, Volume I*, Chapter 4
   "The Derivative", version 6.3 (May 15, 2026), printed pp. 154–168 —
   `https://www.jirka.org/ra/realanal.pdf`, stamped 2026-10-08
   (sha256_16 `9c204ae1f1ee1641`, 1 901 622 bytes, 312 pages). Read: §4.1.1
   Definition 4.1.1; §4.1.2 Propositions 4.1.7 and 4.1.10 with the proof of the
   chain rule; Exercise 4.1.3 (power rule); §4.2.3 Theorem 4.2.4 (MVT) with its
   Rolle-based proof; §4.2.4 Propositions 4.2.6–4.2.8 with the MVT proof of
   Proposition 4.2.7; §4.2.5 Theorem 4.2.11 (Darboux). Dispositions: the derivative,
   linearity, chain rule, power rule, MVT, monotonicity and Darboux headings are all
   `already-published` against the corresponding library items, which are the forms
   the pair cites.
2. G. L. Luke, *Notes of lectures on Multivariable Calculus* (Oxford course notes
   hosted at `people.maths.ox.ac.uk/~tillmann`), October 14, 2007, PDF pp. 1–3 and
   5–6 and 9–13 — `https://people.maths.ox.ac.uk/~tillmann/background-multvar.pdf`,
   stamped 2026-10-08 (sha256_16 `a7ee4d7785961ae3`, 256 375 bytes, 28 pages). Read:
   §2 "The Total Derivative" (Definition 3; the relation between total and directional
   derivatives; the "Beware" example; matrix/Jacobian and gradient conventions),
   §3 "Properties of Total Derivatives" (linearity; the Chain Rule Theorem 2 with its
   proof), §7 "Mean Value Theorem" (Theorem 5; the scalar gradient form; Theorem 6).
   Dispositions: total-derivative definition, directional-derivative identity,
   Jacobian/gradient, linearity of the total derivative and the chain rule are
   `already-published` against the library items the pair cites; the scalar gradient
   mean-value form and the inverse/implicit-function and Lagrange-multiplier material
   are `out-of-scope` with written reasons (equivalent alternative route not consumed
   by this pair; no consumer in this run). Every source's own heading over the range
   read has an explicit disposition; the two pair results themselves are recorded as
   `included` rows in the page-level `canonical` list, since they are the pair's own
   constructions and are not headings of either source.

The source's recorded research argument (`completed-expansion-arguments.md#U1`, U1–U2;
`mathematical-example-verifications.md#ex-em-experiment-analysis-prerequisites-hypothesis-boundaries`)
is the in-repo reference for both items via the manifest `reference` fields; the two
external treatments above back the standard calculus ingredients the items consume.

## Checks run (actual results)

- `manifest-deps` (batch-20 manifest alone: 2 items, 0 errors; all 40 manifests together:
  155 items, 0 missing, 0 errors).
- `content-policy --manifest-only` (all 40 batch manifests): 155 scoped items, 0 errors,
  0 warnings.
- `item-dependency-levels check --run`: 58 errors, **all** `empty scaffold inventory`
  for pages of batches still in flight (4–12, 17, 19, 21–40 …); zero errors for
  batch 20, no cycle, no label mismatch (`thm-em-uncertainty-analysis` = 1,
  `ex-…-hypothesis-boundaries` = 2).
- `coverage-checklist --require-destination` (batch-20 coverage): 1 page, 18 harvested
  results, 0 errors, 1 advisory warning (`coverage-low-yield`, 2/18 built): the pair
  consumes published library forms for 16 harvested headings and records two
  out-of-scope declines with reasons; the two pair results are new constructions, so
  the low-yield advisory is expected and is for Alpha to confirm at Step 5.
- `source-fetch-check --coverage … --stamp` then check mode: 2/2 sources fetch-verified;
  2/2 resolved.
- `url-sweep --coverage … --recover --fail-on-dead` (output redirected to /tmp to avoid
  clobbering the run's shared liveness file): 2/2 live, 0 failed, 2 citation decisions.
- `source-backing --coverage … --liveness …`: 0 errors; 0 `included` rows sit in a
  source's own `contents` list (the pair's backing is through published library forms),
  so this batch contributes no rows to that gate's counting — recorded, not hidden.
- `step1-decisions check --run`: both batch-20 items closed/ready; the 58 remaining
  work rows are the empty pages of in-flight batches.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `drift-review-check --run`: 40 pages reviewed, 0 blocked edges; this page's verdict
  is `no-drift`.
- `frontier-dependency-ledger refresh --run` (no flag): refreshed; both batch-20 edges
  carry one review row each. With `--require-reviewed` it fails only because other
  batches' inputs are not yet written (run-level state, not a batch-20 defect).
- `frontier-item-gate validate-plan` FAILs on `em-boundary-and-spectral-prerequisites`
  and `em-wave-equation-prerequisites` pages (batches 17/18 class): `undeclared-prereq`
  findings for published analysis items not in those pages' declared `requires`
  closures, plus two `redundant-prereq` warnings on page 310. **No finding names
  either batch-20 page or item.** `frontier-item-gate extcheck --manifest-only` cannot
  run at all while any batch manifest has an empty page (it aborts on
  `batch-10.pages.json`); this is likewise a run-level state.
- `frontier-dependency-ledger`/`gates` beyond the above are stage-level and run over
  every batch, so their remaining failures are owned by batches still in flight.

## Findings for owner reconciliation (none blocking this pair)

- Published defects: none found in the 21 published suppliers this pair uses; no
  supplier statement was found false, mistyped or directionally wrong, and no repair
  is proposed.
- Other-batch findings observed while running whole-run checks (recorded for the
  owner/operator, not repaired here): the `validate-plan` `undeclared-prereq` findings
  on pages 313/311-class (batches 17/18) and the inability of `frontier-item-gate`
  item selectors to run before every batch manifest is populated.
- No new pair, split or cross-batch prerequisite is required: the pair's closure
  needs only the single in-run supplier already scaffolded at level 0 on page 310.

## Honest uncertainty

- The theorem's mathematical content beyond the recorded U1 argument (its Euclidean
  transport, the chain-rule computation of the response derivative and the C^1
  verification of the composite) is specified by this scaffold, not written in the
  source research files; the batch notes above state exactly what was added and why.
  Step-3 authoring and Steps 5–8 review must check the written proof against that
  specification, including whether the continuity-of-composite step is cited from the
  listed suppliers as intended.
- The two source treatments were read in the ranges named above from the stamped PDFs
  fetched on 2026-10-08; the stamps bind the bytes (sha256_16 `9c204ae1f1ee1641` and
  `a7ee4d7785961ae3`). Neither the OCR-free PDF extraction nor this reading is an
  independent mathematical review of the two items; Step 3 provides that review.
