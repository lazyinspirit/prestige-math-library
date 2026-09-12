# Step 5A Alpha group b — authored-content review (batch 2)

Run: `phase-2-next-17`. Group `b` covers batch 2 (`covers: 2`), the pair
`weak-and-weak-star-topologies` (19 A items + 9 examples) and the pair
`distributions-test-functions-and-differentiation` (49 A items + 8 examples).
89 `authored:2:*` obligations were decided — 85 items and 4 pages — all
`accepted`, with no repairs, no escalations, no local suppliers and no
shared-plan or Phase-2 amendment requested. One record-only edit was made: 66
complete `risk_review` entries added to the owning contract (details below);
no item text, page, manifest order, contract scope or dependency record changed.

## Method

Every manifest item and all four pages were read on disk at the post-splice
authored state (hashes frozen in `research/phase-2-next-17-step5-hash-2-pre-5a.json`).
For each proof-bearing item every numbered step was checked against the exact
clause of the dependency it cites, and the boundary, well-definedness and choice
hypotheses declared in the item and its contract row were tested against the
actual argument. Computations that carry real risk were recomputed by hand
(listed per page below). Dependency statements consumed by this batch were read
on disk — in particular `cor-relative-hahn-banach-dual-norming`,
`thm-relative-hahn-banach-geometric-separation`,
`def-hahn-banach-extension-principle-relative`,
`thm-sequential-uniform-boundedness-under-countable-choice`,
`thm-arzela-ascoli-for-real-ck`, `thm-metric-compactness-equivalences`,
`thm-baire-category-for-complete-metric-spaces`,
`thm-banach-space-no-countably-infinite-hamel-basis`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`lem-complex-integration-by-parts-on-intervals-and-decaying-lines`,
`cor-greens-second-identity-for-glued-elementary-solid-regions` and
`prop-mollifier-families-are-l-one-approximate-identities`. No external fetch was
needed: the mathematics is standard and each step was verified directly rather
than accepted from a source; where an item leans on a library supplier, the
supplier's own statement (not a citation summary) was matched against the use.

## Weak and weak-star topologies (19 items, page 1)

Read step by step; accepted. Checks that carried risk:

- Initial-topology bookkeeping (`def-weak-topology-on-a-normed-space`,
  `lem-basic-weak-neighborhoods`, `def-weak-convergence-of-nets-and-sequences`,
  `def-weak-star-convergence`, `lem-basic-weak-star-neighborhoods`): the finite
  disk sets are weakly (weak-star) open and every open neighborhood of a point
  contains one by shrinking each scalar disk to a common radius; the seminorm
  `p = max_j |f_j|` gives addition and joint scalar continuity with the
  `|a-a0| < min(1, eps/(2(p(v0)+1)))` bookkeeping, which is correct at
  `a0 = 0` and `v0 = 0`. The equivalence with coordinate-wise eventual
  convergence for arbitrary nets uses finite directedness only; the empty
  neighborhood family is the whole space.
- Norming and separation (`thm-weak-topology-is-hausdorff`,
  `thm-continuous-dual-of-a-weak-star-topology`,
  `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm`,
  `lem-annihilators-are-weak-and-weak-star-closed`,
  `thm-transpose-is-weak-star-to-weak-star-continuous`): each HB use is a single
  norming/separation functional; the weak-star duality existence half is the
  finite-dimensional factorization (`l(Af) = L(f)`, basis extension by standard
  vectors, `x = sum c_j x_j`) and is choice-free, while uniqueness is exactly the
  point separation HB supplies. The annihilator proof correctly observes that
  real-part boundedness of a linear functional on a real subspace forces
  vanishing by scaling, with the complex case handled through `ik`.
- Finite-dimensionality and first countability
  (`thm-weak-and-norm-topologies-agree-iff-finite-dimensional`,
  `thm-infinite-dimensional-weak-topology-is-not-first-countable`): the
  `m+1` independent vectors exist by finite induction, their images in `K^m` are
  dependent, and the resulting nonzero common-kernel vector makes every basic
  zero-neighborhood norm unbounded. The first-countability proof applies
  Countable Choice once (finite defining lists), shows `X*` is the algebraic
  span of the chosen functionals through the finite-order factorization, scans
  for a Hamel basis and rules out the countably infinite case with the published
  ZF theorem; HB enters only in the final injectivity step. I read
  `thm-banach-space-no-countably-infinite-hamel-basis` and verified that its
  proof is an explicit least-index/nested-ball construction rather than a Baire
  argument requiring DC, so the "choice-free" citation is sound.
- Sequential boundedness (`thm-weakly-convergent-sequences-are-norm-bounded`):
  pointwise boundedness of `J_X x_n` on the Banach dual `X*` is the standard
  head-plus-convergent-tail estimate; sequential uniform boundedness under
  Countable Choice gives `sup ||x_n|| < infinity` through the canonical
  isometry. The weak-star half applies the same theorem directly on the Banach
  predual, with no bidual or completeness step for the first half.
- Closure results (`thm-norm-closed-convex-iff-weakly-closed`,
  `cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball`): the norm
  closure of a convex set is convex (approximation in both variables, endpoints
  included); separation of an exterior point gives `{Re f > a}`, which is weakly
  open by weak continuity of `f`. For the sphere, the segment
  `x + t v` with `T = (2 + ||x||)/||v||` satisfies `h(0) < 1` and `h(T) >= 2`, so
  the intermediate value theorem gives a sphere point inside any prescribed
  basic neighborhood of any point of the closed ball, while the closed ball is
  weakly closed.
- Transpose and operator topologies (`thm-transpose-is-weak-to-weak-continuous`,
  `def-strong-and-weak-operator-topologies`,
  `lem-norm-implies-strong-implies-weak-operator-convergence`): subbasis
  computations are correct; the second transpose clause is continuity of `T*`
  for the weak topologies `sigma(Y*,Y**) -> sigma(X*,X**)`, obtained by
  applying the same argument to the bounded map `T*` with `Phi o T*` bounded.
  The operator-topology convergence hierarchy is immediate and uniform in `x`
  is correctly not claimed.

## Weak and weak-star topologies — examples (9 items, page 2)

Read and accepted. `e_n -> 0` weakly in `ell^p` (`1 < p < infinity`) is derived
without a duality theorem: testing `F` on `v = sum conj(b_k)|b_k|^{q-2} e_k`
gives `sum_{k<N} |b_k|^q <= ||F|| (sum_{k<N}|b_k|^q)^{1/p}`, hence
`b in ell^q` and `F(e_n) -> 0`. The `ell^1` failure uses the bounded summation
functional; the weak-star/weak distinction on `(c_0)*` uses the same functional
against a predual-weak-star-null sequence. For
`cex-weak-closure-can-exceed-sequential-weak-closure` I checked both halves: a
basic zero-neighborhood that missed `{sqrt(n) e_n}` would give
`sum_j |F_j(e_n)|^2 >= eps^2/n` for every `n`, contradicting square-summability
by the harmonic series; and a weakly convergent sequence has bounded norms by
the uniform boundedness theorem, so its indices lie in a finite set whose weak
closure is itself. The shift-power examples have the correct witnesses
(`R^n e_0`, `L^n e_n`), the incomplete-domain counterexample is genuinely
Cauchy without a limit in `c_00`, and the unbounded weakly null net carries its
own witnesses in the index set (no choice function).

## Distributions, test functions and differentiation (49 items, page 3)

Read step by step; accepted. Checks that carried risk:

- LF topology (`def-test-function-topology`,
  `lem-test-function-lf-topology-universal-property`,
  `lem-fixed-support-test-function-spaces-are-complete`,
  `thm-test-function-operations-are-continuous`,
  `lem-bounded-test-function-sets-have-common-compact-support`,
  `thm-sequential-convergence-in-test-function-space`): the seminorm family
  (all seminorms continuous on every `D_K`) generates a locally convex topology
  that induces the prescribed topology on each `D_K`; the finest-topology claim
  is the identity map criterion in the other direction. Completeness is proved
  from uniform Cauchyness of zero extensions with derivatives identified by the
  uniform-derivative-limit theorem. Boundedness equals common compact support
  plus derivative bounds: the shell weights `j/a_j` (zero on empty shells) form
  an admissible seminorm whose finiteness forces only finitely many occupied
  shells; the sup over the pair set is exactly `j` on an occupied shell, which I
  checked is what makes `sup_B q = infinity` correct as written. The sequence
  criterion (not a definition) collects the finitely many initial supports into
  one compact `L` and then uses stage convergence.
- Finite-order criterion and support (`thm-local-finite-order-characterization-of-distributions`,
  `def-order-of-a-distribution-on-a-compact-set`,
  `thm-compactly-supported-distributions-have-global-finite-order`,
  `thm-distributions-supported-at-one-point`): the scaling argument
  `|u(phi)| <= (2/eps) p_m(phi)` and the zero-seminorm case are correct. The
  compact-support transfer uses a cutoff equal to one near the support, where
  `(1-chi)phi` vanishes near the support. For point-supported distributions I
  recomputed the Taylor annihilation: a test with vanishing jet through order
  `m` has `partial^gamma phi(a+h) = o(|h|^{m-|gamma|})`, so the rescaled cutoff
  product has `p_m -> 0` and pairs to zero; the monomial tests `q_alpha` isolate
  the coefficients. The multi-index Leibniz identity in the sheaf proof
  (`theta d^alpha w` expanded with alternating signs) was verified by the
  `(1-1)`-type coordinate sum.
- Sheaf and extension (`thm-distributions-form-a-sheaf`,
  `def-support-of-a-distribution`,
  `thm-extension-by-zero-for-distributions-with-ambient-closed-support`): glueing
  uses a locally finite partition with compact supports, so each test is
  decomposed by finitely many summands; independence of the containing member is
  compatibility on overlaps, and the finite-order estimate sums the finitely
  many relevant member bounds with the Leibniz constant. No cover labels are
  selected.
- Regular distributions and topologies (`def-regular-distribution-from-a-locally-integrable-function`,
  `def-weak-and-strong-topologies-on-distributions`,
  `lem-strong-distribution-convergence-implies-weak-convergence`,
  `thm-locally-integrable-functions-embed-in-distributions`): the strong
  seminorm `p_B(u_f)` is bounded by `(sup_B p_0) int_K |f|`, giving continuity
  from the local `L^1` topology; injectivity convolves `chi f` with a normalized
  bump, uses the `L^1` approximate identity under Countable Choice and covers
  `Omega` by countably many rational balls, then unions the null sets. The
  choice cost is isolated in the cited mollifier theorem and stated in the
  statement.
- Differentiation (`def-distributional-derivative`,
  `thm-distributional-differentiation-is-continuous-and-commutes`,
  `thm-leibniz-rule-for-distributions`): mixed distributional derivatives
  commute because test partials do; weak and strong continuity are the
  identities `p_{alpha-set}(u)` and `p_B(d^alpha u) = p_{d^alpha B}(u)`; the
  classical-compatibility clause reduces to one-coordinate integration by parts
  on a box with Riemann-to-Lebesgue comparison under Countable Choice and then
  iterates. Signs in `(d^alpha u)*phi = u*(d^alpha phi)` were checked twice.
- Smooth parameter pairings and their consequences
  (`lem-distribution-pairing-with-smooth-parameter-families`,
  `thm-convolution-with-a-test-function-is-smooth`,
  `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions`,
  `thm-sequential-convergence-of-smooth-multipliers-and-distributions`,
  `def-convolution-of-distributions-when-one-has-compact-support`,
  `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`,
  `thm-mollifier-approximation-in-distributions`,
  `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`,
  `cor-smooth-functions-are-weakly-dense-in-distributions`,
  `thm-associativity-of-distribution-convolution-under-compact-support`): the
  parameter-smoothness clause uses uniform continuity on a compact parameter set
  with one common slice support; the integral clause approximates by explicit
  grid sums that are tests, uses completeness of `D_K`, and identifies the limit
  and its derivatives. The pointwise-bounded theorem is the Baire argument on
  `D_K` under Dependent Choice, and the statement is honest that a general
  convergent net need not be bounded. Convolution is made well defined by cutoff
  independence (the difference vanishes on a neighborhood of the tensor
  support); the associativity proof splits the possibly noncompact factor with a
  cutoff whose remainder support avoids each target compact. The constant-theorem
  and smooth-density corollary were checked including the nonempty-domain
  proviso and the finite union of derivative constraints.
- Tensor machinery (`def-tensor-product-of-distributions`,
  `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`,
  `thm-tensor-product-distributions-and-iterated-pairings`): the inner pairing is
  a test because the slice supports share one compact set; the density lemma's
  diagonal construction was checked (derivative integrals as uniform limits of
  tagged sums, least grid level per scale, all supports in one compact product),
  and the tensor theorem's compactwise estimate, support equality and two-stage
  density argument are correct.
- Structure theory (`def-pullback-of-a-distribution-by-a-diffeomorphism`,
  `lem-compactly-supported-distributions-extend-to-smooth-functions`,
  `thm-translation-invariant-test-function-operators-are-convolutions`,
  `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities`,
  `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions`,
  `lem-compact-support-continuous-primitive-representation`,
  `thm-global-locally-finite-structure-of-distributions`,
  `thm-closed-bounded-test-function-sets-are-compact`): I recomputed the
  pullback change of variables (`F^* u_f = u_{f o F}`), the level-set argument
  giving `|g| <= 2||Lambda||` for complex `L^1` functionals, the repeated
  integration kernel `(x-t)^{q-1}/(q-1)!` and the injectivity of `T = d^k`
  on `D(B)`, the Hahn-Banach-by-Zorn extension step with
  `L_z = sup (h(d) - p(d-z))`, and the final `(-1)^n` sign transfer through the
  cube primitive. The compact-support primitive lemma's multiplier identity
  `theta d^alpha w = sum (-1)^{|alpha-beta|} C(alpha,beta) d^beta((d^{alpha-beta} theta) w)`
  was verified by the same `(1-1)`-type sum. The global structure theorem's
  local finiteness of the coefficient supports was checked through the
  `min(1/i, dist/2)` enlargements. The Montel-type theorem
  (`closed bounded test sets are compact`) applies Arzela-Ascoli to finitely
  many derivative families and builds a finite net by fixed labels under the
  declared Countable Choice and Dependent Choice.

## Distributions — examples (8 items, page 4)

Read and accepted. The Heaviside sign cancels correctly
(`-int_0^R phi' = phi(0)`); the jump formula has the right-minus-left sign at
each break point with the delta sum locally finite; the Newtonian example was
checked at its three risky points — local integrability of `1/|x|` by shell
sums, the regularization `Delta N_eps = 3 eps^2/(4 pi (|x|^2+eps^2)^{5/2})`
with `int_{B_R} Delta N_eps = R^3/(R^2+eps^2)^{3/2} -> 1`, and the geometry: I
read `def-simple-solid-region-in-a-coordinate-direction`,
`def-adapted-outward-boundary-presentation-of-a-simple-solid-region` and the
surface-patch definitions and confirmed that the eight-octant parametrization
supplies, for each of the three directions, one upper and one lower sublist of
four patches whose projected interiors are the four open quarter discs, with the
k-th area-vector coordinate strictly signed (it is
`R^2 sin^2(phi) cos(theta)`, `R^2 sin^2(phi) sin(theta)`, `R^2 sin(phi) cos(phi)`
for `k = x, y, z` respectively) and the two diameters and boundary circle of
content zero. The principal-value example's reduction
`(phi(t) - phi(-t))/t -> 2 phi'(0)` and order-one bound were recomputed; the
Dirac counterexample uses injectivity on the punctured domain correctly; the
concentration counterexample has pointwise limit zero with pairings tending to
`phi(0)`; the sharp-order example's rescaled monomial witnesses give `p_q -> 0`
for `q < m`.

## Edit made (record enrichment only)

`research/phase-2-next-17-batch-2.proof-contracts.json` gained a complete
`risk_review` (`{status: complete, reviewer: "alpha-5a-b", notes}`) for each of
the 66 items that `tools/risk-report.mjs` routes as high or critical risk. Every
note states the specific risk this read actually examined and how the authored
text resolves it; none is a template. No other contract field, item, page,
manifest, provenance, page order or dependency record was modified, and the 19
ordinary/moderate items keep their reviewed boundary rows unchanged.

## Sources

No external fetch was performed because no step was left uncertain by direct
verification. Exact statements and hypotheses were checked against the on-disk
dependency items named above (their own `## Statement` sections, read in full
where consumed), not against the coverage summaries. The two library claims
whose status mattered most for this batch — the choice-free Hamel-basis theorem
used by the non-first-countability argument, and the elementary-solid ball
presentation used by the Newtonian example — were read in full on disk and
matched clause by clause against the local use.

## Local suppliers, shared plan, dependencies

No missing dependency was found, so no definition or lemma was created and no
page, pair, plan edge, manifest order or dependency record changed. The owned
input `research/phase-2-next-17-batch-2.cross-batch-dependencies.json` remains the
correct empty array: recomputing over the 85-item manifest shows every
non-manifest dependency is a published item (143 consumer/supplier uses, all
resolving to `status: published`), with no draft item from another batch
consumed. No shared-plan or Phase-2 amendment is requested from the serial lead.
`briefs/tasks/frontier-dependency-ledger.md` needs no new row from this group for
the same reason.

## Published findings

No new defective published item was found; no defect row was opened and the
published-consumer ledger was not edited (the lock was not taken). I checked the
consumed clauses of the published suppliers named in the items — the relative
Hahn-Banach family, the sequential uniform boundedness and Baire/Arzela-Ascoli
choice-cost items, the `ell^1`/`c0` duality items, the Riemann/Lebesgue and
Fubini interfaces, the mollifier/approximate-identity items and the elementary
solid/Green interface — and each supplies exactly the clause its consumer cites.
This is a use-level check inside an authored-batch read, not an audit of those
published items and not a claim about their whole closures; their existing
ledger rows are untouched.

## Local checks run (before handing off; the engine re-runs the full battery)

- `node tools/risk-report.mjs research/phase-2-next-17-batch-2.proof-contracts.json --require-reviewed`
  → 0 errors, 85 items routed (66 risk reviews added).
- `node tools/proof-contract.mjs .../phase-2-next-17-batch-2.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 85/85 items checked.
- `node tools/boundary-audit.mjs <batch-2 contract> --fail-on-contradicted --fail-on-template --json`
  → no contradicted rows, no template rows, 0 not-yet-authored.
- `node tools/citation-fidelity.mjs <batch-2 contract> --fail-on-missing-quote`
  → 283 citations over 85 authored items; no missing quote, no widening
  candidates.
- `node tools/finite-smoke.mjs <batch-2 contract>` → 0 errors (no item carries a
  smoke obligation).
- `node tools/tsx-run.mjs tools/precheck.mts <85 item paths>` → 65 checked,
  0 failing, all clean.
- `node tools/depcheck.mjs` → exit 0, "OK — no cycles, all references resolve,
  no draft items on published pages"; no diagnostic names an owned item.
- `node tools/step5-scope.mjs check --run phase-2-next-17 --phase adjudicate --batch 2`
  → before the engine's mechanical stamp: 89 decision-stale rows only; after
  `stamp --group b`: 85 items routed, 89 adjudication obligations, 0 errors.
- Files written by this dispatch: the batch-2 proof contract (66 `risk_review`
  records appended), this report and
  `research/phase-2-next-17-alpha-b-5a-decisions.json` (89 decisions, stamped by
  the engine's mechanical hash step). The batch artifacts are new, untracked
  files in this run; no item or library page file was touched.

## Blockers and next action

None. No escalation is open, no defect row is open on an owned carrier and no
`repair_confidence` below 1 was recorded. The serial lead needs no amendment
from this group; 5B sees only the batch-2 contract enrichment (66 `risk_review`
records) as a post-5a change to those carriers, with item and page text
byte-identical to the pre-5a baseline.
