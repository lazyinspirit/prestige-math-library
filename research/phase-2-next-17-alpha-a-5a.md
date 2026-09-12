# Phase 2 next-17 — Step 5A group `a` report

Run: `phase-2-next-17` (stage `5a-adjudicate`, verified from
`.autopilot/phase-2-next-17/state.json` and `git log`, not from any `RESUME` file).
Group: `a`, covering batches **1** (`measure-preserving-transformations-and-poincare-recurrence`
plus its examples page, 45 items) and **3** (`central-limit-theorems` plus its examples
page, 23 items). Label `5a-a`.

Outcome: **72/72 obligations accepted, 0 repaired, 0 escalated.**
`research/phase-2-next-17-alpha-a-5a-decisions.json` carries one decision per item and
page (45 + 2 and 23 + 2), each with `verdict: "accepted"` and `defect_ids: []`.
No item text, manifest, contract scope, page, dependency record or published item was
edited, so no reflow or re-precheck of changed items was required. The only carriers I
wrote are the two batch proof contracts (Alpha `risk_review` dispositions) and the
canonical published-consumer ledger (one impact-reconciliation section).

## How the review was performed

Every item was read in full from `items/<id>.md` (statement, facts, and each numbered
step), not from the Step-3 scaffold or the manifest summary. For each item I checked the
actual inference steps, the hypotheses of every cited fact, the direction of each
implication, the endpoint/cut/null/zero-variance boundary cases the statement exposes,
and the declared choice strength against the AC ledger rules in `CLAUDE.md`. Where a
proof's crux is an algebraic identity I recomputed it locally (e.g. the induced-measure
pullback splitting, the Kac telescope, the excursion finite identity, the exact
`I_{r,k}` correlation count, the Gauss partial-sum telescoping, the cosine-deficit
converse, and both numerical values in the binomial example). Citation fidelity was also
checked mechanically: every `citations[].quote` in both batch contracts still occurs
verbatim in the current supplier text (0 stale quotes across 45 + 23 contracts).

Both `phase-2-next-17-step5-scope-1.json` and `-3.json` (version 3) list exactly the
manifest items and pages; there are no extra scope arrays, touched lists, reader
findings, refuter findings or gate obligations for this group, so no supplemental gate
decision was required or invented.

## Batch 1 — measure-preserving transformations and recurrence

All 45 items accepted. Points verified in detail:

- Tower recurrence: `W`'s tower levels are pairwise disjoint because a shared point
  would return from `W` to `E`; equal masses plus finiteness force `mu(W)=0`, and the
  largest-visit argument identifies the finite-return exceptional set exactly.
- Induced system: `E_infinity` is conull in `E` and `T_E` maps it into itself; the
  pullback/split identities `R_{N+1}=T^{-1}R_N cap E^c`, `H_{N+1}=T^{-1}R_N cap E`
  give `mu(B)=sum_{n<=N}mu(H_n)+mu(R_N)`; the complement argument with
  `T_E^{-1}E_infinity=E_infinity` closes the reverse inequality, so preservation
  needs neither invertibility nor ergodicity. First-entrance extension of an
  everywhere invariant function is measurable on the conull entrance set and gives
  induced ergodicity.
- Kac: `mu(E cap {r_E>j})=mu(C_j)-mu(C_{j+1})`, telescope of `min(r_E,N)`, sweep-out
  for `mu(C_N)->0`, monotone convergence for the value one including `r_E=+infinity`
  on the null complement of the core; the excursion identity was verified step by step
  in both its bounded and integrable forms.
- Circle and integer-base maps: inverse-image (never forward-image) preservation,
  exact `b^{n-r}` cell counts giving `lambda(I cap D_b^{-n}J)=b^{-r}b^{-s}` for all
  `n>=r`, dyadic-density ergodicity, and the fair-coin cylinder construction
  (compactness in ZF via the deterministic child recursion, premeasure by compactness,
  Caratheodory extension, uniqueness and completion under the declared `AC_omega`).
- Compact metric dynamics: the countable dense family (rational polynomials in distance
  functions to a countable dense set, with all cover selections finite), the Riesz
  representation construction (`rho`, `mu*`, explicit finite partition of unity,
  Caratheodory measurability of opens, compact formula, inner/outer regularity,
  layer-cake equality), the deterministic bisection subsequence rule and diagonal
  extraction, and Krylov–Bogolyubov via telescoping orbit averages and closed-set
  determination of the pushforward.
- Boundaries: `E=empty`, `mu(X)=0`, `mu(E)=0`, `r_E=+infinity`, `sigma=0`,
  `E` closed with a null endpoint, depth-zero cells, empty and single-entry rows.

One wording observation, recorded but **not** treated as a defect: in
`thm-circle-rotation-is-ergodic-iff-angle-is-irrational` step 2.1 the sentence
"subtracting the two exceptional portions, this intersection would contain points in
both `A` and its complement on a set of measure at least `19r/10-2r/5`" is compressed.
The underlying argument is correct and complete: `S=R^mI cap J` has measure at least
`19r/10`, while `S setminus ((R^mI setminus A) union (J cap A))` is empty — every point
of `S` lies in `J cap A` or in `R^mI setminus A`, each of measure below `r/5` — so
`lambda(S)<2r/5`, a contradiction. No inference is missing, so acceptance is honest.

## Batch 3 — central limit theorems

All 23 items accepted. Points verified in detail:

- Normal transform: `E|Z|=2g(0)`, `EZ=0`, `EZ^2=1` by parts with `2Rg(R)->0`,
  `phi'=-t phi` on finite intervals with dominated convergence, then
  `H(t)=e^{t^2/2}phi_Z(t)=1`; affine case and `sigma=0` included.
- Second-order expansion: `|r(u)|<=min(|u|^3/3,4u^2)` and `|e^{iu}-1-iu|<=u^2` from
  bounded Taylor remainders, with the majorant `X^2 min(|X|/(3n),4)` giving a genuine
  two-sided `o(t^2)` under only a finite second moment.
- Near-one products, iid CLT, de Moivre–Laplace: the `e^M sum|w|^2` telescoping bound,
  `n w_n -> -t^2/2`, and the Lévy criterion with the limit `e^{-t^2/2}` continuous at
  zero.
- Lindeberg–Feller sufficiency and Feller's converse: the sufficiency estimate
  `|sum_k E r(tY_{n,k})| <= |t|^3 epsilon/3 + 4t^2 L_n(epsilon)` with limsup-then-
  epsilon order, and the converse's exact `Re sum w = -t^2/2 + D_n(t)`,
  `|exp(sum w)| = e^{-t^2/2+D_n(t)}`, `D_n(t)->0`, and fixed frequency `t=4/epsilon`
  giving `d_t(x)>=t^2x^2/4` on `|x|>epsilon`. The converse does not run sufficiency
  backwards and uses no complex logarithm.
- Multivariate theory: `X=m+Sigma^{1/2}Z`, projection target vectors
  `N(u dot m, u^T Sigma u)`, transform uniqueness including `t^T Sigma t=0`,
  projection-wise CLT with the `v=0` case handled by `E Y_k^2=0`, and Cramér–Wold
  without claiming a common null set.
- Examples/counterexamples: the two binomial approximation numbers recomputed
  (`0.68268949` raw, `0.72866788` half-unit corrected at endpoints `89/2`, `111/2`);
  `EU=1/2`, `EU^2=1/3`; `s_n^{-3}sum E|X|^3<=8^{3/2}/sqrt n`; `s_n^2>=n/8` with the
  tail event eventually empty; the rank-one Gaussian limit; the Cauchy transform
  `e^{-|u|}` with `int_1^R x^2c>=(R-1)/(2pi)` and the discontinuous limit
  `e^{-sqrt n|t|}`; and the single-Gaussian array whose Lindeberg quantity is a fixed
  positive normal tail moment.

## Local suppliers created

None. No missing prerequisite, no unproved local dependency and no gap requiring a new
definition or lemma was found in either batch, so no item was added to the manifest, the
page, or the contracts' scope. There are consequently no auditor-created items for the
engine to certify and no `authored` decision for new items.

## Shared-plan and Phase-2 amendments required

None. Both scope files (version 3) equal the current manifests item for item and page
for page; the authored strength of each item matches the design intent preserved in the
manifests (e.g. induced preservation and Kac without invertibility or ergodicity;
fair-coin and compact-probability constructions under explicit `AC_omega`; multivariate
CLT with singular covariance). No page order, no pair, no dependency edge and no
provenance needs to change. The Step-4 splice evidence (`phase-2-next-17-splice-1.json`,
`-3.json`) needs no correction from this group.

## Published findings

No new published-item defect was found, and no evidence was found that any published
supplier in the audited closure is mathematically wrong. The impact read did confirm the
consumer side of the existing Frontier-22 common-repair cluster: 15 direct published
suppliers cited by these draft items already carry A-P rows
(`def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`def-moments-variance-and-covariance`, `def-standard-normal-and-normal-laws`,
`lem-normal-density-has-total-mass-one`,
`prop-order-and-scalar-rules-for-the-nonnegative-integral`,
`thm-dominated-convergence`,
`thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`,
`thm-integral-triangle-inequality`,
`thm-integrals-are-invariant-under-measure-preserving-maps`,
`thm-integration-against-a-density`,
`thm-linearity-of-the-lebesgue-integral-on-l-one`,
`thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
`thm-portmanteau-theorem`, `thm-continuous-mapping-theorem`,
`prop-mixing-correlations-extend-to-l-two`), together with the U-C/A-P
`def-metric-topology` neighbourhood-convention finding. For each I recorded the exact
consumer items and proof steps, and the reason it does not block this batch: every use is
of the published statement with an explicit canonical representation and finite scalars,
no consumer exhibits two competing simple-function representations or forms the
zero-scalar `0*(+infinity)` product, and the neighbourhood users refine through an open
subset before applying a basis member. This was written into
`research/published-consumer-supplier-ledger.md` under
"Step-5a group-a published-supplier impact reconciliation — 2026-09-12" (one section,
inserted under the ledger lock `research/.published-consumer-ledger.lock`, released with
`rmdir` after the merge; classification counts and index rows unchanged, no duplicate
defect rows created). Those obligations are therefore impact-reviewed rather than
blocking for this group.

`briefs/tasks/frontier-dependency-ledger.md`: the owned inputs
`phase-2-next-17-batch-1.cross-batch-dependencies.json` and
`phase-2-next-17-batch-3.cross-batch-dependencies.json` remain the reviewed empty arrays.
I re-verified that no item in these 68 has a *direct* dependency on any of the 502 items
of the other nine batches of this run (0 edges), so no ledger refresh or row edit is
owed from this group; the missing cross-group edges, if any, are 5B's object.

## Checks actually executed

- Whole-file reads of all 68 items and the four page carriers (A and B pages of both
  pairs), plus the relevant contract entries.
- Citation-fidelity script over both batch contracts: 0 stale quotes (every quoted
  supplier passage still appears verbatim in the current supplier item).
- `node tools/depcheck.mjs --quiet`: 0 findings on any of the 68 items (repository-wide
  `cited-not-in-deps` diagnostics are pre-existing and none touches this group);
  exits with the repository's standing summary.
- `node tools/tsx-run.mjs tools/precheck.mts items/<all proof-bearing owned items>.md`:
  `61 checked, 0 failing — all clean` (the seven definition/remark items carry no phase
  body).
- `node tools/extcheck.mjs --quiet`: 0 warnings on any owned item (the 55
  repository-wide `unproved-on-published` warnings are outside this group's closure).
- `node tools/risk-report.mjs research/phase-2-next-17-batch-1.proof-contracts.json
  --require-reviewed`: `0 error(s), 45 item(s) routed`.
- `node tools/risk-report.mjs research/phase-2-next-17-batch-3.proof-contracts.json
  --require-reviewed`: `0 error(s), 23 item(s) routed`.
  Both runs were preceded by `node tools/apply-risk-reviews.mjs --run phase-2-next-17
  --file …`, which wrote 32 + 22 complete Alpha `risk_review` dispositions
  (`status: "complete"`, reviewer and substantive notes) into the two batch contracts,
  which is where the records must live for the gate re-merge.
- `node tools/step5-scope.mjs stamp --run phase-2-next-17 --group a`: `stamped 72
  current carrier hash(es)` (the engine re-stamps after this dispatch anyway).
- `node tools/step5-scope.mjs check --run phase-2-next-17 --batch 1 --phase
  adjudicate`: `45 item(s) routed, 47 adjudication obligation(s), 0 error(s)`.
- `node tools/step5-scope.mjs check --run phase-2-next-17 --batch 3 --phase
  adjudicate`: `23 item(s) routed, 25 adjudication obligation(s), 0 error(s)`.

These are local, single-reviewer checks and are not represented as an independent audit,
a judge verdict or a whole-closure certification.

## Blockers

None for batches 1 and 3. No decision in this group is `escalated`, no defect row is
claimed, no repair confidence is asserted, and no owner decision is requested. The
pending Frontier-22 common finite foundation repair (published content, Phase 3) remains
tracked in the canonical ledger; it does not block these draft items and needs no Phase-2
scope change.
