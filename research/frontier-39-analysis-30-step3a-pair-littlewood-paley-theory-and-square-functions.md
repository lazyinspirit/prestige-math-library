# Step 3a scope review — pair `littlewood-paley-theory-and-square-functions`

- Run: `frontier-39-analysis-30` (stage `3a-scope`), dispatch label
  `step3a-pair-littlewood-paley-theory-and-square-functions-a0ec3335394ccc5f`
- Role: alpha scope reviewer (not owner, not item author)
- A page: `littlewood-paley-theory-and-square-functions` (batch 7, order
  458.02611, category `fourier-analysis`, 18 items: 4 definitions, 8 lemmas,
  3 theorems, 1 corollary, 2 remarks)
- B page: `littlewood-paley-theory-and-square-functions-examples` (batch 7,
  order 458.02612, `requires` only the A page; 5 items: 3 examples,
  1 counterexample, 1 remark)
- Decision: **`sufficient`**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
  --page littlewood-paley-theory-and-square-functions --decision sufficient`
  (receipt `research/frontier-39-analysis-30-step3a-review-littlewood-paley-theory-and-square-functions.json`)
- Date: 2026-10-05.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
plan or engine artifact was edited; the only writes are this report and the
scope receipt.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-fourier-analysis-track.md` FR-11,
lines 849–889, with the A inventory at lines 860–873, the B inventory at
lines 879–883, the declared requirements at lines 853–854, and the hard
obligations at lines 885–889. The design's supporting records are the
step-1 drift verdict for this pair
(`research/frontier-39-analysis-30-alpha-step1-drift.md` lines 103–113,
`no-drift`), its declared `requires` list in `research/plan-spec.json`
(pages 590–591), the batch-7 manifest and coverage
(`research/frontier-39-analysis-30-batch-7.pages.json`,
`…-batch-7.coverage.json`), the six cross-batch rows in
`…-batch-7.cross-batch-dependencies.json`, and the canonical-coverage
crosswalk rows 30–32 (plan lines 1501–1503) with the audit-added
factorisations at plan lines 1554 and 1558.

Intended subject: the Euclidean inhomogeneous Littlewood–Paley theory — a
fixed smooth dyadic frequency partition with a retained low-frequency block,
the operators $\Delta_j,\tilde\Delta_j$ with their rescaled kernels and
cancellation, $L^2$ almost-orthogonality, the square function
$Sf=(\sum_{j\ge0}|\Delta_jf|^2)^{1/2}$, Rademacher randomisation with
Khintchine's inequality, uniform Mihlin bounds for arbitrary signed dyadic
sums, the reproducing formula $f=\sum_j\tilde\Delta_j\Delta_jf$ in
$\mathcal S'$, the two-sided strict-range theorem
$\|Sf\|_p\asymp_p\|f\|_p$ for $1<p<\infty$, independence of the admissible
partition, the Hilbert–Sobolev characterisation
$\|f\|_{H^s}^2\asymp\sum_j2^{2js}\|\Delta_jf\|_2^2$, and honest recorded
endpoint material (Lusin area function; the $H^1$ and $\mathrm{BMO}$
replacements at $p=1,\infty$).

Role in the library: the pair sits in the Fourier track after FR-4, FR-6,
FR-8, FR-9, FR-10 and the Plancherel/maximal-function pages, and is a leaf of
the current architecture — no other page in this run's 60 page manifests
references it, and no published item or page does either. Later function-space
consumers are explicitly postponed: the PDE plan defers the general
Besov/Triebel–Lizorkin scales to a future function-spaces/harmonic-analysis
track (`research/plan-pde-track.md` line 312), matching the pair's recorded
out-of-scope boundary. The endpoint scales it records are supplied by the
earlier in-run pages FR-9 (batch 5) and FR-10 (batch 6), exactly as the design
says.

## 2. Design coverage

Every id named by the FR-11 design is present in the batch-7 manifest:

- A page, 14/14 designed ids (design rows lines 860–873):
  `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition`,
  `def-inhomogeneous-dyadic-frequency-partition`,
  `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds`,
  `lem-ltwo-almost-orthogonality-of-dyadic-pieces`,
  `def-littlewood-paley-square-function`,
  `lem-rademacher-randomisation-converts-square-functions-to-multipliers`,
  `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds`,
  `lem-littlewood-paley-reproducing-formula-in-tempered-distributions`,
  `thm-littlewood-paley-square-function-equivalence-on-lp`,
  `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space`,
  `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces`,
  `def-lusin-area-function-for-a-fixed-admissible-kernel`,
  `rem-square-function-characterisation-of-real-hone`,
  `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements`.
- B page, 5/5 designed ids (design rows lines 879–883):
  `ex-square-function-of-one-frequency-localised-function`,
  `ex-dyadic-square-function-of-two-separated-frequency-packets`,
  `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels`,
  `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control`,
  `ex-sobolev-weight-on-a-single-dyadic-annulus`.

The design's duplicated row numbers (two rows numbered 2, 9, 12; row 11
absent) resolve by id, and every id is realized exactly once.

Four non-design items are locally justified:

1. `def-rademacher-functions-on-the-unit-interval`,
   `lem-finite-rademacher-blocks-are-equidistributed`,
   `thm-khintchine-inequality-for-finite-rademacher-sums` — the design assumed
   FR-4 supplies Khintchine ("FR-4 supplies the actual Khintchine theorem",
   plan line 854; FR-4 design row 3 at plan line 472 says the theorem is
   "later consumed by FR-11"). The published FR-4 page does not contain it:
   its front-matter item list has nine items and no Rademacher/Khintchine
   item, and no file in `items/` mentions Khintchine or Khinchine at all. The
   A page must therefore build the chain its randomised route consumes. The
   chain is sourced to Grafakos Appendix C.1–C.3, Tao note 4 §5.5 and
   Williams Proposition 5.1, all of which I re-read (section 3).
2. `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded` — makes
   the extension of each $\Delta_j$ to an honest $L^p$ operator a proved
   clause of the local inventory rather than an implicit consequence of the
   theorem under proof.

The design's hard obligations (plan lines 885–889) are preserved in the
scaffold: the low-frequency block is never assigned mean zero (definition
item and kernel lemma), convergence is first in $\mathcal S'$ (reproducing
lemma) and then in the norm supplied by the theorem (extension clause of the
main theorem), the randomisation constants are stated to depend on $p$ but not
on the number of pieces, and no sharp-cutoff analogue is inferred from the
smooth theorem (the counterexample shows the uniform $L^1$ kernel bound is
lost). The vector-valued Calderón–Zygmund route, the periodic analogue, the
Besov/Triebel–Lizorkin scales, the weak-type Khintchine refinement, the Haar
martingale model and the continuous-scale exercise Q13 are all declined with
result-specific reasons in the coverage, consistent with the design.

## 3. Source coverage

Two pages are backed by five source rows (Tao note 4 and Grafakos and Williams
for the A page; Grafakos and Williams for the B page), harvested into 40
source-anchored results: 20 `included`, 7 `inline`, 1 `already-published`
(`thm-lacunary-lp-norm-equivalence`), 3 `deferred`, 9 `out-of-scope`. The
re-run of the checks on the batch-7 coverage passes:

```
coverage-checklist: 2 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)
source-fetch-check: 5/5 source(s) fetch-verified
source-fetch-check: 5/5 source(s) resolved (0 documented drops; not fetch stamps)
```

I independently re-fetched all three full texts and matched the recorded
stamps exactly: Tao note 4, 287706 bytes, 30 pp, sha256-16
`0c200b34c1c6c625`; Grafakos, 5349812 bytes, 647 pp, sha256-16
`38c219d3c9013a85`; Williams, 736373 bytes, 85 pp, sha256-16
`05c37240004db213`. I then re-read the load-bearing locators rather than
trusting the harvest table:

- Tao §5 and §5.5: Proposition 5.3 (upper inequality, vector-valued CZ proof
  — the declined route), Corollary 5.4 (two-sided inequality), the
  reconstruction identity $f=\sum_j\phi_j(D)\psi_j(D)f$ for Schwartz $f$ and
  the paragraph naming the square function, Lemma 5.6 (Khinchine for scalars,
  $0<p<\infty$, exponential-moment proof), Remark 5.7 (even moments),
  Corollary 5.8 (Khinchine for functions, pointwise-then-integrate), the
  §5.5 alternate proof ("arbitrary choices of signs … obeys the homogeneous
  symbol estimates of order 0. Thus by the Hörmander–Mikhlin theorem …"), and
  Exercise Q4 (lacunary exponential sums lie in BMO). All match the
  dispositions claimed, including the declined vector-valued route and the
  deferred Q4.
- Grafakos §6.1.1–6.1.3 (printed pp. 419–437, PDF pp. 434–452): Definition
  6.1.1's annular, convolution-represented $\Delta_j$; Theorem 6.1.2's
  strict-range upper bound with the weak $(1,1)$ endpoint and the converse
  with the unique polynomial $Q$; the (6.1.23) sharp-cutoff discussion with
  Theorems 6.1.5–6.1.6 and the $n\ge2$ ball-indicator failure. Appendix
  C.1–C.3 (printed pp. 585–590): the Rademacher definition
  $r_j(t)=\operatorname{sgn}(\sin 2^j\pi t)$, independence via the
  dyadic-interval correspondence, Khintchine's inequalities for complex
  coefficients, and the exponential-distribution derivation.
- Williams: Proposition 5.1 (Khinchine-type inequality), Theorems 5.3 and 5.5,
  Lemma 5.14, Theorem 6.6 (Sobolev characterisation with the $2^{js}$
  weight), Theorem 7.19 (dyadic $L^p$ equivalence via Burkholder plus
  Khinchine), Proposition 7.22 (Carleson condition), Remark 7.20, and
  Proposition 7.30(a) (the $H^1$ square-function identity
  $\|f\|_{H^1}\asymp\|f\|_{L^1}+\|Sf\|_{L^1}$ with $\int f=0$). All match.

The two source re-pointings recorded by the scaffolding role (UW lecture 22
dropped in favour of Williams §7.4–7.5, and the Mihlin attribution moved from
FR-6 to its actual home on the published Calderón–Zygmund page) are honest and
verified: the published `thm-mihlin-fourier-multiplier-theorem` is on
`calderon-zygmund-decomposition-and-singular-integrals` and its statement
$\|m\|_{M_p}\le C_n\max(p,(p-1)^{-1})(A+\|m\|_\infty)$, $1<p<\infty$,
matches the uniform-constant use in both local Mihlin lemmas.

## 4. Prerequisites and dependency audit

Page-level `requires` all resolve: five published pages
(`lacunary-fourier-series-and-sidon-sets`,
`fourier-multipliers-and-sobolev-characterisations`,
`calderon-zygmund-decomposition-and-singular-integrals`,
`schwartz-space-and-the-plancherel-theorem`,
`the-maximal-function-and-lebesgue-differentiation`, which is MT-17 and owns
Marcinkiewicz) and two in-run pages in earlier batches
(`real-hardy-spaces-maximal-functions-and-atoms`, batch 5;
`bmo-john-nirenberg-and-h1-duality`, batch 6).

Item-level dependencies: a full closure over both pages' `deps` against the
published `items/` corpus plus this run's manifests found zero unresolved ids.
The only in-run suppliers are the batch-5 definition
`def-real-hardy-space-by-a-radial-maximal-function`, the batch-6 items
`def-bmo-seminorm-and-quotient-by-constants` and `thm-real-hone-bmo-duality`,
and same-batch items; everything else is published. I read the three earlier-batch
supplier statements and they carry the interface clauses the two endpoint
remarks use (the $H^1$ space with a norm at $p=1$; the BMO quotient by
constants with its seminorm; the isomorphism $(H^1)^*\cong\mathrm{BMO}/\mathbb C$
with equivalent norms). The six cross-batch dependency rows are all
`verified`. Management checks re-run on the full run manifests:
`manifest-deps: 899 item(s), 0 error(s)` and
`content-policy: 899 scoped item(s), 0 error(s), 0 warning(s)`.

Unmet prerequisites: none confirmed for this pair. The single near-miss is
Khintchine: the design (plan line 854) and the step-1 drift record (line 108)
say FR-4 supplies it, but the published FR-4 page does not. The prerequisite
is nevertheless present in the current scaffold, on this A page, under the id
`thm-khintchine-inequality-for-finite-rademacher-sums`, so no consuming
planned item of this pair is missing a required claim. What remains is
bookkeeping for the owner (finding F1 below), not a scaffold addition.

## 5. Findings for the owner

None of these blocks the scope decision; all are stated with exact evidence.

- **F1 (confirmed, published-page coverage gap).** FR-4's design promised
  `thm-khintchine-inequalities-for-finite-rademacher-sums` on the published
  `lacunary-fourier-series-and-sidon-sets` page (plan line 472: "Supplies the
  named randomisation theorem later consumed by FR-11"; crosswalk row 9, plan
  line 1475). The published page's front-matter item list contains nine items
  and no such theorem, and no item anywhere in `items/` mentions Khintchine.
  The FR-11 scaffold supplies the same content locally under the singular id.
  Recommended owner action: reconcile the plan/FR-4 text and the step-1 drift
  note (line 108) with disk, and decide whether a later run re-homes the
  theorem to FR-4 (a published-content change outside this batch's write
  scope).
- **F2 (confirmed, stale plan text).** Canonical-coverage crosswalk rows 30–32
  (plan lines 1501–1503) still name `thm-square-function-characterisation-of-real-hone`,
  `cex-the-lp-square-function-equivalence-does-not-extend-as-stated-to-linfinity`
  and `cex-a-bounded-symbol-need-not-be-an-lp-multiplier-away-from-two`. The
  plan's own audit-added factorisation table (plan lines 1554, 1558) supersedes
  these for rows 15–17 and 30–32 with exactly the items the scaffold and the
  published FR-6 pair realize: the recorded remarks
  `rem-square-function-characterisation-of-real-hone`,
  `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` and
  `rem-fefferman-ball-multiplier-obstruction`. The scaffold follows the
  design table and the factorisation table. Recommended owner action: textual
  reconciliation of the crosswalk rows; no scaffold change.
- **F3 (confirmed, cross-pair deferral dead-end).** The batch-7 coverage
  defers Tao Exercise Q4 (lacunary exponential sums lie in BMO) to
  `bmo-john-nirenberg-and-h1-duality`. The batch-6 scaffold's 24 items contain
  no lacunary/BMO statement and its coverage contains no Q4 row, so the
  deferral currently has no home. The exercise is corroborative for this pair
  (it is not consumed by any item here), but the deferral should be closed.
  Recommended owner action: the FR-10 scope review or the owner adds a
  planned remark/example or records an explicit owner decision dropping it.
- **F4 (observation).** The design's "MT-17 interpolation" is declared through
  the maximal-function page in `requires` but is not consumed by any
  scaffolded dependency; the adopted route is Khinchine randomisation plus the
  published Mihlin theorem. Harmless; no action.

## 6. Honest limits

This is a scope review, not proof verification: I checked that the planned
definitions, results, examples, sources and prerequisites are present and
correctly located, and I re-read the cited source passages, but I did not
re-derive the item proofs. The batch-7 notes themselves flag the most
delicate steps for Step 3b/5: the Khintchine chain is new local material, the
$L^p$ extension clause of the main theorem hinges on simultaneous
approximation plus a diagonal argument, the $n\ge2$ sharp-annulus failure is
cited orientation only, and the two endpoint items are recorded leaves
(`not-supplied`/`proved_here: false`) that must never be used as dependency
targets. Those are consistent with the design's own instructions
("Honest record of the tent/atomic theorem, never a dependency target").

## 7. Decision and recording

Scope is **sufficient**: the pair's planned definitions, results and examples
cover the intended subject as designed (the inhomogeneous dyadic
Littlewood–Paley theory and square functions, strict range, with recorded
endpoints), the source coverage is fetch-verified and faithful at the
locators I re-read, all declared prerequisites resolve in the published
library or in earlier in-run batches, and the only outstanding matters are
the owner bookkeeping findings F1–F4 above, which require no change to this
pair's scaffold.

```
node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30 \
  --page littlewood-paley-theory-and-square-functions \
  --decision sufficient --reason "<scope evidence; report path>"
```
