# Frontier 39 analysis 30, batch 5: Step 1 construction notes

Owned pair: `real-hardy-spaces-maximal-functions-and-atoms` (A page, order
458.02607) and `real-hardy-spaces-maximal-functions-and-atoms-examples` (B page,
order 458.02608), both `fourier-analysis`. No published item, shared plan,
engine state or verdict was edited. `research/frontier-39-analysis-30-owner-authoring-direction.md`
does not exist for this run; `research/frontier-39-analysis-30-step1-owner-resolution.md`
was read instead and concerns four other pairs (PDE-17/18, Hamilton-Jacobi,
Kostant, Bochner/LCA), none in this batch. This batch is an input consumer of the
published FR-7 and FR-8 pages and of the published distribution and
maximal-function pages; it is a supplier of batch 6 (BMO) and batch 7
(Littlewood-Paley), whose consumer owners own those review rows.

## Design, plan, and conflicts

- The controlling design is section FR-9 of `research/plan-fourier-analysis-track.md`
  (heading at line 756, per-pair row at line 38): it fixes the A/B inventory, the
  radial/nontangential/grand maximal conventions, the cube-supported atoms with
  moment order `floor(n(1/p-1))`, the Whitney + local polynomial + Calderon
  reproducing route to the atomic decomposition, the CZ-to-`L^1` endpoint, and
  the "hard proof/boundary obligations" (atoms have nonempty finite cubes; the
  moment order changes exactly at the integer thresholds; atomic sums converge
  in `S'` and no pointwise or `L^1` claim is added; `p=1` is Banach, `p<1` is not).
- `research/plan-spec.json` carries the pair at orders 458.02607/.02608 with the
  same `requires` list (`hilbert-and-riesz-transforms`,
  `calderon-zygmund-decomposition-and-singular-integrals`,
  `distributions-test-functions-and-differentiation`,
  `tempered-distributions-and-the-fourier-transform`,
  `the-maximal-function-and-lebesgue-differentiation`) and empty `items` arrays.
  No page-level plan conflict exists.
- Recorded design defects, not escalated: the FR-9 table repeats row numbers
  (`4`, `11`, `13` twice) but its IDs are unique; the design was read by ID, not
  by row number. The FR-9 "sources read" range for W is "pp. 40–47" while section
  7.6 ends on p. 46 (section 7.7 begins there); the harvest uses pp. 40–46 for
  section 7.6 and records section 7.7 as out of scope. The design row for item 15
  (`rem-riesz-transform-characterisation-of-real-hone`) numbers it twice (`11`
  and `15`); the item is minted once.
- Recorded design/plan observation: FR-9 requires the published FR-7 and FR-8 A
  pages; both are now published (FR-8 was completed by run
  `frontier-38-owner-30`), so no in-run supplier edge exists and batch 5's own
  cross-batch input is legitimately empty. `research/frontier-39-analysis-30-batch-5.cross-batch-dependencies.json`
  is `[]`; the two supplier edges into batches 6 and 7 are declared by those
  batches' `requires` lists and are reviewed by their owners.

## Inventory

28 items: 23 on the A page and 5 on the B page.

- A page: the eighteen designed FR-9 IDs plus five necessary local
  prerequisites found by the closure audit:
  1. `lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin`
     — the reproducing pair needs a compactly supported test function with
     flat Fourier transform at the origin to arbitrary order; complete proof in
     DKKP Lemma 1.
  2. `lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions`
     — the telescoping identity and the `L^p` identification both need
     `Phi_t * f -> f` in `S'`; asserted (unproved) in DKKP section 2.
  3. `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`
     — `L^p` membership of the maximal functions and the openness of the level
     sets `Omega_r = {M_N f > 2^r}` are implicit well-definedness steps; DKKP
     uses the openness without proof and MT-17 proves the analogous
     measurability theorem for the Hardy-Littlewood maximal function.
  4. `lem-whitney-type-ball-cover-of-a-proper-open-set` — the complete level
     decomposition needs the ball form of DKKP Lemma 3 (disjoint small balls,
     bounded overlap), which the designed cube-only Whitney lemma does not
     literally provide; the item derives it from a rational-grid selection
     without a maximality principle.
  5. `thm-fourier-transform-decay-of-real-hardy-space-elements` — the designed
     vanishing-moments corollary is proved on the Fourier side, which needs the
     atom Fourier decay and its little-o refinement; complete anisotropic proof
     in the fetched Bownik-Wang offprint, specialized to the isotropic case.
- B page: exactly the five designed leaves. All consume A-page or published
  items; none depends on another B-page item, and no B-page item is a
  dependency target anywhere in the run.
- Dependency labels were computed from the batch manifests (no out-of-run item
  raises a level) and validated locally: 28 items, 0 errors, maximum level 7
  (the chain A->...->moments corollary->B counterexample). The whole-run
  `item-dependency-levels check --run frontier-39-analysis-30` reports only
  other batches' "empty scaffold inventory" errors and no error naming any
  batch-5 item.

## Sources (all full text fetched and stamped)

`source-fetch-check --stamp --coverage research/frontier-39-analysis-30-batch-5.coverage.json`
reports `12/12 source(s) fetch-verified`; check mode reports `12/12 resolved`.

| source | locator read | supports |
|---|---|---|
| W, Mark Williams, Notes on Harmonic Analysis | section 6.2 pp. 24–26; section 7.6 pp. 40–46; Appendix Theorem 14.5 p. 84 | `H^1` characterisations, `p=1` atomic decomposition, Whitney theorem |
| Wa, Li-An Daniel Wang, thesis | ch. I section 1.1, printed pp. 2–13 | definitions, maximal characterisation statement, `H^p=L^p` for `p>1`, atoms, SIO table |
| H, Martin Hiserote, thesis | ch. I section 1.1, printed pp. 1–6 | nontangential definition, bounded-distribution equivalence, atoms, atomic decomposition |
| DKKP, Dekel-Kerkyacharian-Kyriazis-Petrushev | complete article pp. 59–73 | flat test function, reproducing identity, maximal equivalence statement, level decomposition, Whitney-type cover |
| MSV, Meda-Sjogren-Vallarino | section 1 pp. 15–18, section 3 pp. 18–22 | grand maximal normalization `N>1+n/p`, atoms, quasinorm caveat, split-ball example, Whitney-cube variant |
| CUW, Cruz-Uribe-Wang, Variable Hardy Spaces | section 3, printed pp. 7–14 | complete proof of the maximal characterisation via the deconvolution identity and inequalities (3.1)–(3.4) |
| Kinnunen, Harmonic Analysis | ch. 1 pp. 12–13; ch. 2 pp. 27–29 | dyadic Whitney decomposition with proof; published CZ/Marcinkiewicz seams |
| INS, Izuki-Nakai-Sawano | section 8.1 p. 128 | polynomial projection with vanishing moments |
| BW, Bownik-Wang, PAMS 2013 offprint | section 3, pp. 2302–2304 | atom Fourier decay, theorem, little-o corollary |

Coverage harvest: 77 source-anchored rows, each disposed. The Wang §1.1.2
Littlewood-Paley row is split precisely: the isotropic homogeneous $H^1$
square-function characterization is deferred as an external record to
FR-11 item `rem-square-function-characterisation-of-real-hone`; the remaining
exponent and anisotropic generalizations are out of scope, because no current
item or consumer requires them. `already-published` rows name the published FR-8
items `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two`,
`lem-calderon-zygmund-decomposition-at-height-lambda` and
`lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`.

## Published-supplier check (no defects found)

The actual supplier items used here were opened and their statements compared
with the hypotheses this page needs: FR-7 `def-riesz-transforms-on-euclidean-space`,
`def-truncated-hilbert-transform-and-principal-value`,
`lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds`;
FR-8 `def-calderon-zygmund-kernel-and-principal-value-operator`,
`def-standard-holder-calderon-zygmund-kernel`,
`def-maximal-truncated-singular-integral`,
`thm-maximal-truncations-are-weak-one-one-and-strong-lp` (standard delta-Holder
kernel class with `A_1,A_2',A_3,B`, weak `(1,1)` and `L^p`, Countable Choice),
`cor-principal-value-truncations-converge-almost-everywhere`; the functional-analysis
distribution items; the measure-theory `L^p` and duality items; MT-17 maximal
items. No defective actual prerequisite was found, so no published defect is
recorded for the canonical ledger from this batch.

## Residual uncertainty recorded honestly

1. `thm-maximal-function-characterisations-of-real-hardy-spaces`: the statement
   (with the order caveat) is quoted by five fetched sources; the only fetched
   source that writes the proof down is CUW sections 3.1–3.2, and one line of
   that proof, the pointwise estimate (3.4) on
   `F = {M_N f <= lambda M_{Phi,1} f}`, is cited there to Stein, Harmonic
   Analysis, p. 96, which was not fetched. The item is recorded ready with a
   complete strategy (domination + deconvolution + Hardy-Littlewood splitting +
   truncated-family reduction) and this one estimate explicitly flagged for
   Step 3 reconstruction and Step 5 verification.
2. The level-decomposition proof now follows the DKKP distance-set construction
   directly, without citing its theorem as a black box. It handles f=0
   separately, partitions only the nonzero reproducing integrands up to null
   sets, proves the two-boundary depth split and local convolution bounds, and
   supplies finite overlap for the actual Whitney localization neighborhoods.
   The false pairwise-disjoint claim for the covering balls was repaired to
   bounded multiplicity K(n)=785^n, which suffices for the coefficient sum.
   Cube-supported atom normalization includes the fixed ball-to-cube volume
   factor. The local-polynomial-projection item remains a separate dependency
   for its other consumers; this proof does not use it.
3. `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range`:
   the design's rationale says "atomic approximation"; the scaffolded proof goes
   through the Fourier decay theorem instead, because the atomic-sum route needs
   an `L^1`-convergence statement that is false for `p<1`. The designed statement
   is preserved exactly.
4. `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation`: the
   design's phrase "when its atom images have the sourced cancellation control"
   is made precise as the published standard `delta`-Holder kernel class
   (pointwise size plus standard first-difference bound plus cancellation
   `A_3` plus `L^2` bound), because that is the class for which the published
   FR-8 maximal-truncation weak `(1,1)` theorem is available for the extension
   argument. Countable Choice is declared and inherited from that theorem.

## Commands actually run (results recorded from output)

- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-5.coverage.json --require-destination`
  — `2 page(s), 76 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-5.coverage.json --stamp`
  — `12/12 source(s) fetch-verified (12 newly stamped)`; check mode `12/12 resolved`.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  — `215 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  — `215 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK.
- `node tools/extcheck.mjs` — OK.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — whole-run failure caused only by 48 not-yet-scaffolded pages in other
  batches; a local `dependencyLevels` validation of batch 5 alone reports
  `items 28 errors 0 max level 7`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30 --require-reviewed`
  — run-wide "Cross-batch review incomplete" because most batch inputs are not
  yet written; the refreshed ledger shows only two edges involving batch 5, both
  with batch 5 as supplier (consumers batch 6 and batch 7), and their review
  rows belong to those consumer batches. No batch-5 consumer edge exists.
- 28 Step-1 readiness records written with `node tools/step1-decisions.mjs record`
  (`ready`, with the examined dependency IDs and source evidence); no record was
  overwritten and no record is owner-held.

Owner/operator reconciliation and the full engine gate follow construction;
neither this worker exit nor these readiness records is independent mathematical
approval. Step 3 and Step 5 provide that review.

## Post-construction repair (same worker, after the first readiness pass)

A final closure re-read of `lem-an-hp-atom-has-uniform-hp-quasinorm` found two
soundness defects in the drafted item text; both were repaired in the manifest
and the item and its transitive consumers were re-recorded.

1. **Part (b) did not imply its declared use.** The old bound was
   `C sup_{|beta|<=s+1} ||d^beta psi||_{L^inf(2Q)} (1+|x_Q|/l(Q))^{s+1}
   min(1,|Q|^{1-1/p+(s+1)/n})`, whose factor `(1+|x_Q|/l(Q))^{s+1}` is
   unbounded as `l(Q) -> 0` with `x_Q != 0` and which omitted the plain size
   bound; it therefore did not give the stated consequence
   `sup_j |<a_j,psi>| < infinity` needed by
   `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` for the
   `S'`-absolute convergence step. Part (b) is now exactly the minimum of the
   two bounds that the atom hypotheses yield:
   `C min(|Q|^{1-1/p+(s+1)/n}, |Q|^{1-1/p}) max(||psi||_{L^inf(Q)},
   ||psi||_{C^{s+1}(Q)})`. The first entry is the Taylor remainder about the
   cube centre (the vanishing moments through `s` kill the degree-`s` Taylor
   polynomial, and `Q` is convex so only `C^{s+1}(Q)` enters); the second is
   the plain size bound `||a||_1 ||psi||_{L^inf(Q)} <= |Q|^{1-1/p}
   ||psi||_{L^inf(Q)}`. Since `1-1/p <= 0 <= 1-1/p+(s+1)/n` the minimum of
   the two cube factors is at most one for every cube, so
   `sup_j |<a_j,psi>| <= C max(||psi||_{L^inf}, ||psi||_{C^{s+1}}) < infinity`
   for every fixed Schwartz `psi`, which is what the summation item consumes.

2. **Part (a)'s strategy used more test-class regularity than the page
   fixes.** The original strategy truncated the Taylor expansion of
   `varphi_t(x-.)` only at the atom's full order `s` and quoted far decay
   `r^{-(n+s+1)}`, which requires `N >= n+s+1` in the test class; but
   `def-grand-maximal-test-class-of-order-n` fixes the admissible order
   `N_0(n,p) = floor(n/p)+1`, which may be smaller than `n+s+1` for large `s`.
   The strategy now expands only to the fixed minimal order
   `s_bar = floor(n(1/p-1)) <= s` (available since `s >= s_bar`), so only
   `s_bar+1 <= N+1` derivatives of `varphi` occur, the admissible order
   `N >= n+s_bar+1 = floor(n/p)+1` suffices, and the far decay
   `r^{-(n+s_bar+1)}` still satisfies `p(n+s_bar+1) > n`; the near-field bound
   on the fixed dilate, the grand-domination conversion and the statement of
   (a) are unchanged. The same pass fixed the outer-dilate constant: the
   complement used for the far field is now `Q^* = {r < C_n l(Q)}` with
   `C_n >= 4 sqrt n`, chosen so that `|x-y| >= r/2` for every `y in Q` and
   `x` off `Q^*`; this is what keeps the factor `(1+r/t)^{-N}` in the Taylor
   remainder valid for every dimension `n`.

Effects recorded:

- `lem-an-hp-atom-has-uniform-hp-quasinorm` was re-recorded `ready` with the
  same five examined dependencies, a refreshed item hash and the
  truncation-order/minimum-form argument in the reason
  (final record `2026-10-04T05:02:25Z`, after the dilate-constant edit).
- The item hash closes over dependency content, so the nine transitive
  consumers became stale and each was re-recorded `ready` with its own
  unchanged reason and dependency list:
  `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`,
  `thm-atomic-characterisation-of-real-hp`,
  `thm-fourier-transform-decay-of-real-hardy-space-elements`,
  `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range`,
  `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation`,
  `rem-real-hp-is-quasi-banach-below-one`,
  `ex-a-normalised-mean-zero-hone-atom`,
  `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone`,
  `ex-hilbert-transform-of-a-hone-atom-is-integrable`. No escalation or
  owner-held record was overwritten, and no dependency list changed.
- Fresh commands after the repair: `manifest-deps` over all batch files
  (`215 item(s), 0 error(s)`); `content-policy --manifest-only` run-wide
  (`215 scoped item(s), 0 error(s), 0 warning(s)`); `validate-plan` and
  `extcheck` OK (`validate-plan` adds only run-wide notes about other pages;
  the 40 `extcheck` `unproved-on-published` warnings are all for other,
  already-published items, and no line names a batch-5 item);
  `coverage-checklist` both forms (`2 page(s), 76 harvested
  result(s), 0 error(s), 0 warning(s)`); `source-fetch-check`
  (`12/12 fetch-verified`, `12/12 resolved`); local `dependencyLevels` on
  batch 5 (`items 28, errors 0, max level 7`); whole-run
  `item-dependency-levels check` (only the 44 empty-inventory errors of other,
  not-yet-scaffolded pages; no line names a batch-5 item); and
  `step1-decisions check --run frontier-39-analysis-30` (`215 items, 191
  ready, 0 batch-5 pending`; every remaining pending entry belongs to another,
  unfinished batch). No `*.scaffold-incomplete` sentinel is authored by this
  batch.

## Countable-choice repair and the (0<p<1) norm claim

The shared Schwartz/Fourier route already depends on results whose statements
explicitly assume Countable Choice: the Fourier automorphism, the
differentiation identities, and the Schwartz convolution laws. The dyadic
deconvolution proof uses all three, and its local inverse-Fourier rewrite would
also need choice-free differentiation, integral interchange, and convolution
results throughout this chain. Rebuilding those common suppliers to remove
Countable Choice would be a substantial scope expansion with many unrelated
consumers. The least-change sound repair is therefore to state Countable
Choice for `lem-schwartz-deconvolution-along-dyadic-dilations`, remove its
unsupported “No choice principle is needed” claim, and make the same premise
explicit for the Schwartz approximate-identity lemma that uses COV, integrable
Schwartz bounds, and parameter-pairing interchange. The finite-difference
construction of compactly supported kernels with prescribed Fourier
flatness also now states Countable Choice, since its proof uses the Fourier
differentiation identity and the change-of-variables/Fubini chain.

The (H^p) membership set remains defined without a choice principle. Its
(p\ge1) norm property is now explicitly conditional on Countable Choice:
sublinearity and the (L^p) norm give the triangle inequality, while radial
lower semicontinuity and the approximate-identity lemma give definiteness. For
(0<p<1), the functional is stated to be (p)-subadditive. We retain the
stronger and mathematically informative claim that this particular radial
maximal (H^p) functional fails the triangle inequality: a direct witness is
a compactly supported smooth function with cancellation through
(s=\lfloor n(1/p-1)\rfloor), whose radial maximal function has the tail
(|x|^{-n-s-1}), followed by two widely separated translates. The proof shows
the witness is in this (H^p) directly and uses approximate-identity
positivity; it does not cite the later uniform atom estimate, so the argument
does not create a dependency cycle. Countable Choice is propagated to the
deconvolution/approximate-identity consumers in DAG order. These are the exact
claim changes for owner re-proceed; the final scope hash is reported separately
after contracts and live manifests are synchronized.

## Calderon low-frequency limit repair

The p<1 branch of the two-sided Calderon reproducing identity previously
claimed a concave-power Jensen estimate in the wrong direction. The repair
keeps the identity and the p>=1 Holder argument unchanged: for p<1, choose an
admissible order N with G=M_N f in Lp, use the measurable finite-measure
superlevel set {G>2^r}, and observe that sufficiently large balls cannot be
contained in it. Every point y is then within aperture 2 of a point x with
G(x)<=2^r, so grand-maximal domination bounds |phi_j*f(y)| uniformly by
C_N 2^r for all sufficiently negative j. The invariant L1 norm of phi_j
therefore bounds ||phi_j*phi_j*f||_infinity by ||phi||_1 C_N 2^r. Choosing r
first and j second proves uniform convergence to zero and hence convergence
in S'. This uses existing maximal-characterisation, grand-domination,
measurability and measure-scaling suppliers, so no new analytic helper or atom
rebuild is needed. The item Statement remains unchanged; the new direct proof
dependencies are reflected in the source and B5 manifest. The B7 endpoint
remark already declares the full Axiom of Choice through its H1-BMO duality
dependency, which covers the inherited Countable Choice premise; its
qualitative Statement and its proof-free contract need no edit.

A final audit of the unchanged p>=1 branch identified that its displayed
$L^{p'}$ dilation scaling needed an explicit measure supplier. The proof now
cites `thm-lebesgue-measure-under-dilations-and-reflections` and records the
change of variables: for $1<p<infty$,
$\int|\varphi_j|^{p'}=2^{jnp'}2^{-jn}\int|\varphi|^{p'}$, hence
$\|\varphi_j\|_{p'}=2^{jn(1-1/p')}\|\varphi\|_{p'}=2^{jn/p}\|\varphi\|_{p'}$;
for $p=1$ the corresponding supremum scales by $2^{jn}$. This closes the
p>=1 decay estimate without altering its Holder argument.

The measure bound for each superlevel set is also explicit: since
$\Omega_r\subseteq\{G^p\ge2^{rp}\}$, apply the published Chebyshev-Markov
inequality to $G^p$ at threshold $2^{rp}$, giving
$|\Omega_r|\le2^{-rp}\|G\|_p^p$. The theorem is now a direct dependency and
its use is included in the B5 proof contract.

The independent H^p-definition audit also made the positive-measure step in its
Countable-Choice-conditional definiteness argument explicit: a nonempty open
superlevel set contains a Euclidean ball, and the published positive-ball
measure lemma applies. The membership condition itself remains choice-free;
only the stated norm/definiteness property carries Countable Choice. Its B5
manifest dependency and the boundary note in the strict proof contract are
synchronized.
