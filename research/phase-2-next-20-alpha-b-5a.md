# Step 5A Alpha group b — authored-content review (batches 2 and 15)

Run: `phase-2-next-20`. Group `b` covers batch 2 (locally convex spaces and
continuous separation, 13 items / 2 pages) and batch 15 (Fourier transform,
convolution and approximate identities; Schwartz space and Plancherel, 57 items /
4 pages). 76 `authored` obligations decided: 70 items and 6 pages, all
`accepted`, no repairs, no escalations, no local suppliers, no shared-plan
amendment requested.

Method: every manifest item and both pages of every pair were read on disk at the
post-splice authored state; each numbered proof step, its cited `[F#]` fact and
the exact clause of the cited dependency were checked, together with the
boundary/AC hypotheses (HB, countable choice, AC) that the contracts declare.
The 12 HIGH/CRITICAL items of batch 2 received a specific `risk_review` in
`research/phase-2-next-20-batch-2.proof-contracts.json` during this same read
(the 47 HIGH/CRITICAL items of batch 15 already carry complete Step-5A
`risk_review` records imported from the source run; each was re-read against the
current text and left unchanged because it matched it). No mathematics was
altered, so no defect row was opened and no published item was re-paired. A
sound acceptance needs no defect row.

## Batch 2 — locally-convex-spaces-and-continuous-separation

Items accepted with their exact content checked:

- `def-topological-vector-space-for-local-convexity`, `lem-topological-vector-space-translation-scaling-and-absorption`:
  joint continuity of the structure maps, homeomorphism inverses, absorption by
  `(1/t)x in U` for `t>1/delta`, the symmetric `W` with `W+W` inside `U`, the
  modulus-bound criterion with `c=eps/(M+1)`, and the scalar joint-continuity
  estimate; no choice or separation axiom.
- `def-locally-convex-topological-vector-space`: convex-hull minimality by finite
  induction, balance/symmetry, the equivalence with an open convex zero-base, the
  seminorms, and the continuous dual as a pointwise subspace; restriction of
  scalars declared.
- `lem-locally-convex-closures-and-finite-compact-convex-hulls`: convex closure,
  convex interior with `C` inside `closure(int C)`, balance of closures, and the
  compact finite hull `co(K_1 cup ... cup K_n)` proved as the continuous image of
  `Delta x prod K_j`; the two descriptions are identified by least-index
  labelling and finite choice only for the finitely many zero label groups.
- `lem-balanced-convex-zero-neighborhood-refinement`: explicit construction of
  `B` and `V=co(B)`, openness of `V` by varying one positive-coefficient open
  summand, and `closure V` inside `U` through `V+O` (using `0 in O`).
- `def-minkowski-gauge-of-an-open-convex-zero-neighborhood` and
  `lem-continuous-gauge-of-an-open-convex-zero-neighborhood`: well-defined finite
  infimum, upper-ray admissible sets, subadditivity, positive homogeneity, the
  strict-sublevel identity `U={p<1}` in both directions, the two-signed
  continuity estimate, and the balanced case; the `R`/`R^2` boundary computations
  are correct (`p_U(0,1)=0` for the strip).
- `thm-locally-convex-open-convex-separation`: one HB application through the
  published relative dominated-extension theorem, `H(v)=1`, continuity of `H`,
  the `A-B` reduction, `alpha=sup H(A)` with strictness on both open sides, and
  the complex conversion `f=H-iH(ix)`.
- `thm-locally-convex-continuous-dual-separates-points`, `thm-locally-convex-strict-separation`:
  Hausdorff refinement, the separation step, the kernel identity both ways, the
  property-defined admissible-cover family, finite choice for the witnesses, the
  open convex `K+W`, and the maximum `d=u(k_*)<beta` giving the uniform gap.
- `ex-product-scalar-topology-is-locally-convex`, `ex-locally-convex-separation-by-a-coordinate`,
  `cex-convex-maximum-set-need-not-be-a-face`: coordinatewise vector axioms and
  joint continuity, `N(F,eps)` convex balanced base and Hausdorffness, the
  explicit coordinate separator with a unit scalar, and the exact identity
  `(1-r)s^2+rt^2-((1-r)s+rt)^2=r(1-r)(s-t)^2` with the maximizer set `{-1,1}`.

Both pages were read: `locally-convex-spaces-and-continuous-separation` and its
examples companion accurately describe the ten A and three B items, including
which results assume HB and that finite selections are ZF.

Edit made (record edit only, mathematics unchanged): 12 complete `risk_review`
records added to the owning batch contract for the 12 HIGH/CRITICAL items;
`cex-convex-maximum-set-need-not-be-a-face` is MODERATE and needs none.

## Batch 15 — Fourier transform, convolution, Schwartz space and Plancherel

All 20 A items of `fourier-transform-convolution-and-approximate-identities`,
its 8-item examples page, all 20 A items of
`schwartz-space-and-the-plancherel-theorem` and its 9-item examples page were
read step by step. Selected checks that carried real risk:

- Normalization: `F(e^{-pi t|x|^2})(xi)=t^{-n/2}e^{-pi|xi|^2/t}` was recomputed
  twice — from the integrating-factor ODE `G'=-2pi xi G` with `G(0)=1`, and by
  the `sqrt(t)` substitution; the Poisson kernel identity
  `F(a/(pi(a^2+x^2)))=e^{-2pi a|xi|}` was verified by the two half-line
  integrals `1/(2pi(a+-i xi))`.
- Uniform continuity of the `L^1` transform: the only abbreviated step is "one
  delta on `|x|<=R`"; it follows from the elementary bound
  `|e^{iu}-1|<=|u|<=2pi R|h|` (equivalently uniform continuity on the compact
  ball), so the step is sound as written.
- Inversion ladder: `lem-radial-majorized-kernels-recover-lebesgue-point-values`
  was checked in full (annulus bound `r^n Phi(r)->0`, central ball `eta Phi(0)`,
  dyadic shells bounded by `eta 2^n 2^{jn}Phi(2^j)`, outside terms vanishing);
  Gaussian summability then gives `L^1` and Lebesgue-point inversion, and
  `F(fg)=f-hat*g-hat` follows by Fubini on `L^1 cap L^1`.
- Schwartz topology: the metric `d` defines the same topology as the seminorm
  family in both directions; completeness identifies the limit through uniform
  limits of derivatives; `L^p` bounds come from the `W(x)^{-1}` weight with
  `int W^{-1}<=6^n`.
- Fourier on Schwartz space: the derivative identities were re-derived
  (`F(d_j f)=2pi i xi_j f-hat`; `d_j f-hat=F(-2pi i x_j f)`), inversion is
  everywhere by continuity at Lebesgue points, and the automorphism, convolution
  and Parseval corollaries follow from them.
- Plancherel: both the extension and the surjectivity argument were read, as
  were the `L^1/L^2` agreement (a.e. convergent subsequence plus uniform
  convergence), the `L^2` inversion by truncated integrals, the
  multiplier/transport lemma (`M* = M` by the `w_N=1_{E_N}(mg-h)` argument,
  DCT/Fatou for the exact generator domain, unitary transport of `P`), Poisson
  summation and the periodic uniqueness lemma (complex Stone-Weierstrass and the
  null-cover upgrade to everywhere).
- Examples: Hermite eigenfunctions (checked `[a,a-dagger]=I`,
  `F(a-dagger v)=-i a-dagger v-hat` with the item's signs, `||u_m||^2=m!`, and
  the moment/exp-series completeness argument), the sharp Heisenberg inequality
  with equality case, the theta functional equation, the Poisson-summation
  Gaussian example, and the momentum operator with the `+t` translation sign
  appropriate to `e^{itP}`.
- Counterexamples: the sinc tails, the null singleton indicator, the explicit
  no-rate modulated-Gaussian series (least-integer recursion, no choice), the
  smooth-integrable non-Schwartz function, and the noncompact-support Schwartz
  Gaussian.

Hypotheses were checked per item: countable choice is stated exactly where the
Euclidean measure, mollification, subsequence or completion interfaces need it;
the two Radon-Nikodym-based measure items and the measure-uniqueness corollary
declare full AC and `def-axiom-of-choice`; the Wiener remark is `proved_here:
false` with its exact external statement and supplies no proof edge.

## Sources

No new external fetch was needed for this read and none was performed. Every
numbered step was checked against the current on-disk dependency statements and
by direct computation where the mathematics is elementary (the two Gaussian
evaluations, the Poisson half-line integrals, the commutation relations, the
uncertainty constant, the `W^{-1}` integral `<=6^n`, the dyadic sums). The
item-level declared references (Teschl, Dyatlov, Buehler-Salamon,
Hanche-Olsen, Elkies, Stroock, Teschl QM, Dall'Ara) remain the items' own source
anchors; I did not re-verify print locators, and this report claims no such
reading.

## Local suppliers, shared plan, dependencies

No missing dependency was found, so no definition or lemma was created and no
page, pair, plan edge, manifest order or dependency record changed. Both owned
cross-batch inputs (`research/phase-2-next-20-batch-2.cross-batch-dependencies.json`,
`...-batch-15.cross-batch-dependencies.json`) remain the correct empty arrays: a
recomputation over both manifests shows every non-manifest dependency is a
published item and the only draft dependencies are intra-batch. No shared-plan or
Phase-2 amendment is requested from the serial lead.

## Published findings

No new defective published item was found. The published suppliers this batch
consumes already carry the relevant open Phase-3 rows in
`research/published-consumer-supplier-ledger.md` and need no new entry:

- `thm-rmk-uniqueness-among-radon-measures` (missing Dependent-Choice hypothesis;
  A-P) — the live consumer `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`
  is AC-qualified, so the debt does not block it.
- `lem-complex-translation-and-approximate-identity-interfaces` (Young-branch
  convolution-existence debt) — the consumed clauses are translation isometry,
  approximate-identity convergence and the Borel representative interface only.
- `thm-total-variation-is-a-measure`, `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value`,
  `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities`,
  `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`,
  `lem-euclidean-balls-have-positive-finite-lebesgue-measure` — recorded
  assumption/interface debt, consumed only through the clauses the items supply
  or through the declared AC hypothesis.

The ledger edit lock was not taken because no entry required a change.

## Local checks run (before handing off; engine re-runs the full battery)

- `node tools/risk-report.mjs research/phase-2-next-20-batch-2.proof-contracts.json --require-reviewed` → 0 errors, 13 items routed (12 risk_reviews added).
- `node tools/risk-report.mjs research/phase-2-next-20-batch-15.proof-contracts.json --require-reviewed` → 0 errors, 57 items routed.
- `node tools/proof-contract.mjs ...-batch-2... --strict` → 0 errors, 0 warnings, 13/13; batch 15 → 0 errors, 1 warning (`shotgun-bracket` on `thm-schwartz-space-is-frechet`), unchanged and non-blocking.
- `node tools/finite-smoke.mjs` → batch 2: 0 errors, 0 obligations; batch 15: 1 smoke check passed (`ex-gaussians-...`, 2184 exact Taylor coefficients), 0 errors.
- `node tools/merge-proof-contracts.mjs` (batches 2+15) + `citation-fidelity --fail-on-missing-quote` → no missing quote, no widening candidates; `boundary-audit` emitted only reviewed dispositions.
- `node tools/content-policy.mjs <both manifests>` → 70 scoped items, 0 errors, 0 warnings.
- `node tools/url-sweep.mjs --coverage <both coverage files> --recover --fail-on-dead` → 8/8 live, 0 failed, 9 citation decisions (1 documented source drop).
- Repo-wide: `precheck` 13630 checked / 0 failing; `depcheck` 0 errors and no diagnostic naming an owned item; `rendercheck` 18195 files clean; `fwdcheck` and `extcheck` clean; `prosecheck` 0 errors (heuristic warnings only).
- `node tools/step5-scope.mjs check --run phase-2-next-20 --phase adjudicate --batch 2|15` → decisions cover 15/61 obligations with no extra, duplicate or missing obligation; the only diagnostics are the expected `decision-stale` rows, which the engine's own stamp gate replaces with the current item/contract/manifest hashes.

## Blockers and next action

None. No escalation is open, no defect row is open on an owned carrier, and no
`repair_confidence` below 1 was recorded. The serial lead needs no amendment from
this group; 5B sees only the batch-2 contract enrichment (12 `risk_review`
records) as a post-5a change to those twelve carriers.
