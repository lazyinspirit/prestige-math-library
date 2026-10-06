# Step 3a scope review — `weak-elliptic-maximum-principles-and-holder-regularity`

- Run: `frontier-39-analysis-30`
- A page: `weak-elliptic-maximum-principles-and-holder-regularity` (order 458.037, `pde`, batch 14, 22 items)
- B page: `weak-elliptic-maximum-principles-and-holder-regularity-examples` (order 458.038, batch 14, 9 items)
- Owned pair only; no other pair, scaffold, manifest, prose or coverage file edited.
- Decision: **insufficient** (one confirmed scope/coverage conflict on the A page, plus one confirmed
  B-page statement defect flagged for repair; the planned scope itself is otherwise complete).
  Receipt: `research/frontier-39-analysis-30-step3a-review-weak-elliptic-maximum-principles-and-holder-regularity.json`
  (`sha256 df81193de050511026fea364b7b449b10d97dbcf8489e062cb58150bbf45620a`, recorded
  2026-10-04T19:13:03Z).
  Until the owner records `proceed` for the resulting scope, `tools/step3-decisions.mjs check --phase scope`
  reports this pair owner-held.

## Inputs read

- Manifests `research/frontier-39-analysis-30-batch-14.pages.json` (A 22 items, B 9 items) and
  `research/plan-spec.json` orders 458.037/458.038 (item lists empty pre-splice; `requires` edges
  `A -> schauder-and-lp-elliptic-estimates`, `B -> A`).
- Prose design `research/plan-pde-track.md` PDE-20 (L1878–1929), PDE-20 additions table
  (L3711–3729) and the relevant harvest rows (L3025–3033, L2862). Construction handoff
  `research/frontier-39-analysis-30-batch-14.notes.md` (design crosswalk, choice ledger,
  unresolved Step-3 findings, replay repairs).
- Coverage `research/frontier-39-analysis-30-batch-14.coverage.json`; cross-batch input
  `research/frontier-39-analysis-30-batch-14.cross-batch-dependencies.json` (33 rows: 1 page +
  32 item) and the run-level aggregate.
- Alpha drift verdict for this page: **no-drift**
  (`research/frontier-39-analysis-30-alpha-step1-drift.md` L195–205; directs the build to Simon
  Lecture 17 and requires scalar, coefficient, forcing and exponent hypotheses at each
  Harnack/regularity conclusion).
- Owner decisions: no `step3a-owner` receipt and no `owner-authoring-direction.md` exist for this
  run/page (checked); no prior review receipt existed for this pair.

## Design crosswalk (scope vs prose plan)

- A page: **14/14** design items present with matching IDs and kinds (`def-weak-subsolution-…`,
  `lem-positive-part-is-an-admissible-weak-test-by-truncation`,
  `thm-weak-maximum-principle-for-coercive-divergence-form-equations`,
  `cor-weak-comparison-and-uniqueness`, `lem-caccioppoli-…`,
  `lem-sobolev-level-set-iteration-step`, `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions`,
  `lem-de-giorgi-oscillation-reduction`, `thm-de-giorgi-nash-interior-holder-regularity`,
  `lem-moser-iteration-for-positive-supersolutions`,
  `thm-weak-harnack-inequality-for-nonnegative-supersolutions`,
  `thm-harnack-inequality-for-nonnegative-weak-solutions`,
  `cor-strong-maximum-principle-for-weak-elliptic-solutions`,
  `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems`).
- Plus **8/8** A additions from the PDE-20 additions table
  (`lem-positive-part-of-a-zero-trace-function-has-zero-trace`,
  `lem-nonlinear-geometric-iteration-sequence-converges-to-zero`,
  `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term`,
  `lem-geometric-oscillation-decay-implies-a-holder-modulus`,
  `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions`,
  `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range`,
  `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds`,
  `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution`); the ninth additions row
  `lem-de-giorgi-measure-decay-from-energy-and-sobolev` is subsumed in design item 6 with the
  reason recorded in the batch note. That is 22 A items.
- B page: **5/5** design items (`ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions`,
  `ex-measurable-coefficients-with-a-holder-regular-weak-solution`,
  `cex-weak-maximum-principle-needs-the-zero-order-sign`, `cex-harnack-requires-nonnegativity`,
  `ex-oscillation-decay-implies-a-holder-modulus`) plus **4/4** B additions
  (`cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets`,
  `cex-harnack-estimate-needs-an-additive-forcing-term`,
  `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory`,
  `cex-global-harnack-comparison-needs-connectedness`). That is 9 B items.
- No design claim is dropped or moved without a written reason. Conventions honoured: the De
  Giorgi–Nash–Moser block is stated for the principal-part operator with bounded measurable
  symmetric uniformly elliptic coefficients (design item 9); lower-order terms appear in the
  maximum-principle items under their explicit sign hypotheses; the weak boundary order is
  `(u-k)^+ in H^1_0`; the forcing class is `L^q`, `q>n/2` (`q>1` for `n=2`).

## Source coverage

- Six full texts back the pair, each with a `fetch_verified` stamp; all 12 stubs re-verified
  (`source-fetch-check`: 12/12 fetch-verified, 0 drops) and the byte counts on disk match the
  stamps ([Si] 940975, [K1] 202547, [K2] 170987, [V] 242906, [T] 2912992, [S] 1635832).
  66 harvested results receive 0 errors / 0 warnings from `coverage-checklist
  --require-destination`: A 31 included + 9 inline + 3 already-published + 3 deferred +
  4 out-of-scope; B 13 included + 3 inline.
- Load-bearing statements were re-opened in the fetched texts and agree with the scaffold:
  Simon Lecture 13 Theorem 4 (weak maximum principle under the sign condition (1), with the
  `b=c=0` equality clause verbatim); Lecture 17 Theorem 1 (local boundedness, all `p>0`,
  scale-invariant) and Theorem 2 (weak Harnack with the exact range `0<p<n/(n-2)`); Lecture 18
  Theorems 1–3 (Harnack; `sup|u|` bound with `f_0 in L^{q/2}`, `q>n`, i.e. `f in L^q`,
  `q>n/2`, no sign restriction; interior Hölder, boundary clause declined). Krummel [K1]
  Theorems 1–2 (range `1<=p<n/(n-2)`, smallness (2)) and Corollary 1 with the finite ball-chain
  proof; [K2] Theorems 3–5, Corollary 1 and the oscillation inequality (7). Teschl Chapter 10
  Section 1 confirms the boundary convention `v<=u on ∂U iff (v-u)^+ in H^1_0(U)` and Lemma 10.2
  comparison. Schikorra §II.2 confirms Theorems II.2.1 (c=0) and II.2.2 (`c<0` favourable sign)
  and Example II.2.3, the worked counterexample for the adverse sign.
- Coverage-record bookkeeping: three items carry no row naming them.
  `lem-geometric-oscillation-decay-implies-a-holder-modulus` and
  `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range` are
  substantively covered by the [K2] "oscillation-to-modulus conversion" and [Si] L17 T2 rows
  attached to other item IDs; a row pointing at each would make the record exact. The third is
  the substantive gap recorded below.

## Intended role in the library

- PDE-20 owns the interior maximum-principle / De Giorgi–Nash–Moser theory of scalar
  divergence-form uniformly elliptic operators with bounded measurable principal coefficients:
  weak maximum principle, comparison and uniqueness, local boundedness, weak Harnack, Harnack and
  strong maximum principle. The plan harvest rows confirm the boundary: Laugesen §5.3–5.4 and
  ACM Ch. 1–2 scalar machinery are assigned here; boundary Hölder and boundary Dirichlet theory
  are declined and belong elsewhere.
- Downstream consumers resolve: PDE-21 `the-direct-method-and-euler-lagrange-equations` declares
  the page `requires` edge; PDE-22 (batch 16) consumes `lem-positive-part-of-a-zero-trace-…`
  (4 rows) and `lem-positive-part-is-an-admissible-weak-test-by-truncation` (1 row), all recorded
  as open reviews of this batch's suppliers in the run-level dependency input. No consumer row is
  unsatisfied.

## Unmet prerequisites

**None confirmed.** Transitive closure of the 31 pair items over run manifests, published items
and `plan-spec.json`: **110 nodes = 65 published + 45 in-run scaffold items, 0 unresolved IDs,
0 plan-only nodes**; the only non-pair in-run inputs are 14 items of batches 4, 10, 12 and 13
(`sobolev-poincare-and-morrey-inequalities`: `thm-poincare-…`,
`cor-sobolev-inequality-for-w-one-p-zero`, `thm-critical-sobolev-embedding-into-every-finite-lq`,
`def-sobolev-conjugate-exponent` and two Gagliardo–Nirenberg suppliers;
`lax-milgram-and-weak-elliptic-solutions`: `def-uniformly-elliptic-divergence-form-operator`,
`def-weak-dirichlet-solution-…`, `lem-elliptic-form-is-well-defined-and-bounded`,
`lem-classical-solutions-satisfy-the-weak-formulation`, `def-h-minus-one-…`;
`interior-and-boundary-sobolev-elliptic-regularity`: `def-local-weak-solution-…`;
`schauder-and-lp-elliptic-estimates`: `def-holder-spaces-c-k-alpha-and-their-scaled-norms`). Each
was read and supports its use: the divergence-form/ellipticity/coefficient conventions, the
local-weak-solution formalism (`L^2_loc` data, no boundary condition), the Hölder scale of the
regularity conclusion, and the Poincaré/Sobolev interfaces.

- The batch note's Step-3 flag on the `n=2` clause is resolved: the supplier
  `thm-critical-sobolev-embedding-into-every-finite-lq` states the embedding on bounded extension
  domains, so every ball used by `lem-sobolev-level-set-iteration-step` and the `n=2` clauses of
  the local-boundedness/Harnack items satisfies its hypothesis.
- Advisory (declaration, not a gap): the page `requires` list names only
  `schauder-and-lp-elliptic-estimates`; the batch-4/10/12 item edges are licensed transitively via
  458.035 -> … -> 458.025 and `splice-plan --verify` reports the 31 item-level edges into those
  pages. Step 4 either adds the direct backward edges or keeps the transitive licence.
- Remaining authoring obligations from the batch note stay with Step 3b (forcing clause of the
  weak maximum principle has no verbatim boundary-form source; Moser constants; in-run suppliers'
  choice ledgers). They are recording/discharge duties, not missing scaffolds.

## Confirmed scope/coverage conflict (owner decision required)

**Item.** A22 `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems`.

**Design direction.** `research/plan-pde-track.md` L3031–3033, after declining the ACM headings
`Interior regularity for nonlinear equations`, `Regularity for systems` and `Viscosity solutions`:
"PDE-20's final remark records the scalar/system boundary **without importing a system
counterexample**."

**Scaffolded statement (exact quote).** "… for uniformly elliptic systems with bounded measurable
coefficients the corresponding interior regularity is false, **as De Giorgi's counterexample
exhibits a weak solution of a uniformly convex (hence uniformly elliptic and Legendre–Hadamard
elliptic) system on the unit ball that is not locally bounded near the origin**."

**Evidence of conflict and of missing coverage.** The statement imports exactly the system
counterexample the plan excludes. No row of
`research/frontier-39-analysis-30-batch-14.coverage.json` asserts or sources De Giorgi's system
counterexample (the six harvested treatments cover only the scalar theory; [E] and [ACM] are
recorded as not read, and ACM's system heading is `out-of-scope`). A `remark` statement cannot be
`ai-generated` under SCHEMA ("an `ai-generated` statement is allowed only for a corollary,
example, or counterexample") and needs a `sources.references` URL, so the item cannot be authored
as scaffolded without a scope change.

**Proposed owner action (owner decides; the pair stays blocked until `proceed`).** Either
(a) trim the remark to the plan's shape — scalar-only statement of the De Giorgi–Nash–Moser
theorem, no item of the page may be applied componentwise, systems need extra structure — and
delete the counterexample assertion (a statement change, reported for re-review); or
(b) enrich: add a fetched, authoritative source for De Giorgi's counterexample (or a standard
system-regularity reference, e.g. Giaquinta–Giusti) to the pair's coverage with its exact
statement and keep the assertion cited.

## Additional defect flagged for repair (not itself a scope omission)

**Item.** B3 `cex-weak-maximum-principle-needs-the-zero-order-sign`.

**Defect.** The witness is `u(x)=sin x_1` on `Omega=(0,\pi)^2` with `L=-Delta-1`, and the item
asserts "`u=0` on `partial Omega`, so … `sup_{partial Omega}u^+=0`". On the two edges
`{x_2=0}`, `{x_2=\pi}` the function equals `sin x_1>0`; hence `(u-k)^+ notin H^1_0` for every
`k<1`, so `sup_{partial Omega}u^+=1`, while `ess sup_Omega u=1`. The refuted inequality
`ess sup_Omega u <= sup_{partial Omega}u^+` therefore **holds** for this witness and the
counterexample does not refute anything (the statement text is internally false too: `u` is not
zero on all of `partial Omega`).

**Recommended repair (author/owner).** Use `u(x)=sin x_1 sin x_2` on `(0,\pi)^2` with
`c=-2`: then `Lu=-Delta u-2u=0`, `u>0` in `Omega`, `u=0` on `partial Omega`,
`ess sup_Omega u=1 > sup_{partial Omega}u^+=0` refutes the claim, and
`lem-classical-solutions-satisfy-the-weak-formulation` still applies (`n>=2`, `u in C^2(bar Omega)
cap H^1_0`, `c in C(bar Omega)`). Alternatively use the source's own [S] §II.2 Example II.2.3,
`u=3-|x|^2` on `(-1,1)^2` with `c=-5` in the divergence-form sign convention (`4-5u<=-1<=0` makes
it a weak subsolution, `ess sup=3 > sup_{partial Omega}u^+=1`), verified directly by the first
Green identity. Either fix changes the item statement, so the owner must confirm the resulting
scope.

## Further observations (no scope verdict)

- The `out-of-scope` reason for the [Si] Lecture 18 Theorem 3 boundary clause says it "belongs to
  a later boundary-regularity page"; the PDE plan contains no such page (PDE-18 owns boundary
  Sobolev regularity, not boundary Hölder continuity for divergence-form equations). The decline
  itself matches the design's interior-only scope; only the destination wording overstates the
  plan. Same for the [K2] Theorems 6–7 row, which is phrased as a run-level exclusion.
- The A-page forcing clause of `thm-weak-maximum-principle-…` is stated under `b=0`, `c>=0` rather
  than under the full sign condition; the design's item 3 wording ("controlled by its positive
  boundary trace and forcing" under the sign condition) is thereby covered by the conjunction of
  clause 1 (homogeneous, full sign condition) and clause 2 (forcing, explicit sign), with the
  batch note's Step-3 obligation to display the `L^q`–`L^{q'}` step and the `q>n/2` threshold.
  No omitted topic was found; recorded so the owner sees the weakening.

## Checks actually run (read-only)

- `node tools/coverage-checklist.mjs --require-destination research/frontier-39-analysis-30-batch-14.coverage.json`
  -> exit 0, "2 page(s), 66 harvested result(s), 0 error(s), 0 warning(s)".
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-14.coverage.json`
  -> exit 0, "12/12 source(s) fetch-verified".
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-14.pages.json`
  -> exit 0, "31 item(s), 0 normalized, 0 error(s)".
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope`
  -> pair listed as "current scope review required" before recording; no owner receipt.
- Transitive-closure and link-resolution scripts over run manifests + `items/` (0 missing IDs;
  every `[[…]]` in the 31 statements resolves).

## Decision

`insufficient` recorded for the A page via `tools/step3-decisions.mjs record-scope`, citing
(i) the plan-excluded, uncovered system-counterexample claim in
`rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems` and the two owner options
(trim per plan L3032–3033, or enrich coverage with a fetched source), and (ii) the exact B3
witness defect with its two source-compatible repairs. This report is the evidence artifact.
