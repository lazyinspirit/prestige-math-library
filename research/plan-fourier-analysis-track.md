# Fourier analysis track — subjects-02 prose scaffold

> **Commission:** prefix `FR`; anchor
> `itos-formula-and-brownian-martingales-examples`; twenty-two A/B
> pairs: FR-1 through FR-20 plus the two deep suppliers FR-4K and FR-4C.
> This is a scaffold, not authored
> content.  No page or item below is established merely by appearing here.

## Summary for the orchestrator

This track begins with the five already published classical-series pairs, resumes
after the PDE Sobolev foundation with real-variable Fourier analysis through
restriction, and finishes immediately after RG-18 Haar measure with the LCA,
finite, lattice, and uncertainty pairs.  The split placement is forced by actual
suppliers: FR-6 needs PDE-14F, while FR-15--FR-20 need RG-18.  The dependency
order is:

**Placement.** FR-1--FR-4 retain their published orders 288.14002--288.14016.
Insert FR-4K at 288.140165/288.14017 and FR-4C at
288.140175/288.1401775, before published FR-5 at 288.14018/288.14020.
FR-6--FR-14 occupy the interval after PDE-14F and before PDE-15.  FR-15--FR-20
must be spliced after RG-18 `haar-measure-existence-and-uniqueness` and before
RG-19 `the-modular-function-and-l1-group-algebras`.  No A page uses a companion
page as a sequencing edge: every B page requires only its own A page and no page
or item depends on a B-page item.

| pair | A page | purpose |
|---|---|---|
| FR-1 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | partial sums, localisation, Dirichlet/Dini/Jordan criteria |
| FR-2 | `fejer-and-poisson-summability-of-fourier-series` | Cesàro/Abel summability and Gibbs behaviour |
| FR-3 | `absolute-convergence-and-the-wiener-algebra` | Bernstein absolute convergence and Wiener inversion |
| FR-4 | `lacunary-fourier-series-and-sidon-sets` | gap series, Khintchine comparison, Sidon sets |
| FR-4K | `kolmogorov-block-construction-and-almost-everywhere-divergence` | the block/gliding-hump proof supplying Kolmogorov divergence |
| FR-4C | `carleson-hunt-time-frequency-theorem` | tiles, trees, size/density, and the Carleson--Hunt maximal bound |
| FR-5 | `divergence-and-almost-everywhere-convergence-of-fourier-series` | du Bois-Reymond, Kolmogorov, Carleson–Hunt |
| FR-6 | `fourier-multipliers-and-sobolev-characterisations` | multiplier language, Hausdorff–Young, and Fourier descriptions of PDE-owned Sobolev spaces |
| FR-7 | `hilbert-and-riesz-transforms` | conjugate functions, principal values, exact endpoints |
| FR-8 | `calderon-zygmund-decomposition-and-singular-integrals` | CZ decomposition, weak type, maximal truncations, and the Mihlin application |
| FR-9 | `real-hardy-spaces-maximal-functions-and-atoms` | $H^p$, $0<p\leq1$, maximal and atomic descriptions |
| FR-10 | `bmo-john-nirenberg-and-h1-duality` | BMO, exponential tails, $H^1$–BMO duality |
| FR-11 | `littlewood-paley-theory-and-square-functions` | dyadic frequency pieces and square functions |
| FR-12 | `muckenhoupt-weights-and-weighted-estimates` | $A_p$, reverse Hölder, weighted maximal/CZ bounds |
| FR-13 | `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality` | fractional integration and the load-bearing Stein–Tomas input |
| FR-14 | `fourier-restriction-and-the-stein-tomas-theorem` | restriction obstruction, Knapp test, Stein–Tomas |
| FR-15 | `character-groups-and-elementary-lca-duals` | compact-open character groups, joint evaluation, and concrete duals |
| FR-16 | `bochner-inversion-and-plancherel-on-lca-groups` | LCA Fourier analysis, Bochner, inversion, and the Plancherel isometry |
| FR-17 | `pontryagin-duality-for-locally-compact-abelian-groups` | inversion-based biduality, character separation, annihilators, exactness, and full Plancherel |
| FR-18 | `finite-fourier-analysis-and-the-fast-fourier-transform` | DFT, inversion, convolution, radix-two FFT correctness |
| FR-19 | `poisson-summation-sampling-and-lattice-duality` | Poisson hypotheses, scaled lattices, sampling |
| FR-20 | `uncertainty-principles-for-fourier-analysis` | Heisenberg, Hardy, and finite-support uncertainty |

### Exact `plan-spec` reconciliation ledger

The JSON is intentionally not edited in this pass.  The orchestrator must make
the following page/order changes.  Each listed B page has the same order suffix
as shown and has exactly `[its A page]` as `requires`; no other page requires it.

| pair | exact A/B orders | exact A-page `requires` additions/replacement |
|---|---|---|
| FR-1 | retain 288.14002/.14004 | replace the probability edge by `density-separability-and-convolution-in-lp`, `bounded-variation-and-riemann-stieltjes` |
| FR-2 | retain 288.14006/.14008 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `the-maximal-function-and-lebesgue-differentiation` |
| FR-3 | retain 288.14010/.14012 | FR-1 A, FR-2 A, `orthonormal-bases-parseval-and-fourier-series`, `banach-algebras-spectrum-and-holomorphic-functional-calculus` |
| FR-4 | retain 288.14014/.14016 | FR-1 A, FR-2 A, FR-3 A, `finite-probability-spaces-and-random-variables`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| FR-4K | add 288.140165/.14017 | FR-1 A, FR-2 A, `orthonormal-bases-parseval-and-fourier-series`, `measures-and-their-basic-properties` |
| FR-4C | add 288.140175/.1401775 | FR-1 A, `schwartz-space-and-the-plancherel-theorem`, `the-maximal-function-and-lebesgue-differentiation` |
| FR-5 | retain 288.14018/.14020 | FR-1 A, FR-2 A, FR-4K A, FR-4C A, `the-baire-principles-of-functional-analysis` |
| FR-6 | 458.02601/.02602 | `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform`, `weak-derivatives-and-sobolev-spaces`, `bessel-potential-completions-and-real-order-sobolev-spaces`, `the-maximal-function-and-lebesgue-differentiation`, `complex-lp-spaces-and-test-function-conventions`, `complex-riesz-thorin-endpoint-interpolation` |
| FR-7 | 458.02603/.02604 | FR-1 A, FR-6 A, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform` |
| FR-8 | 458.02605/.02606 | FR-6 A, FR-7 A, `the-maximal-function-and-lebesgue-differentiation` |
| FR-9 | 458.02607/.02608 | FR-7 A, FR-8 A, `distributions-test-functions-and-differentiation`, `tempered-distributions-and-the-fourier-transform`, `the-maximal-function-and-lebesgue-differentiation` |
| FR-10 | 458.02609/.02610 | FR-8 A, FR-9 A, `the-baire-principles-of-functional-analysis`, `orthonormal-bases-parseval-and-fourier-series` |
| FR-11 | 458.02611/.02612 | FR-4 A, FR-6 A, FR-8 A, FR-9 A, FR-10 A, `schwartz-space-and-the-plancherel-theorem`, `the-maximal-function-and-lebesgue-differentiation` |
| FR-12 | 458.02613/.02614 | FR-8 A, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| FR-13 | add 458.02615/.02616 | FR-6 A, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-maximal-function-and-lebesgue-differentiation` |
| FR-14 | move to 458.02617/.02618 | FR-6 A, FR-13 A, `schwartz-space-and-the-plancherel-theorem`, `product-measures-and-the-fubini-tonelli-theorems`, `regular-surfaces-and-surface-integrals` |
| FR-15 | add 510.06501/.06502 | `uniform-spaces`, `subspaces-products-and-quotients`, FR-6 A, `haar-measure-existence-and-uniqueness` |
| FR-16 | move to 510.06503/.06504 | FR-15 A, `fourier-transform-convolution-and-approximate-identities`, `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `haar-measure-existence-and-uniqueness` |
| FR-17 | move to 510.06505/.06506 | FR-15 A, FR-16 A, `uniform-spaces`, `subspaces-products-and-quotients` |
| FR-18 | move to 510.06507/.06508 | FR-15 A, FR-16 A, FR-17 A |
| FR-19 | move to 510.06509/.06510 | FR-1 A, FR-2 A, FR-15 A, FR-17 A, FR-18 A, `tempered-distributions-and-the-fourier-transform` |
| FR-20 | move to 510.06511/.06512 | FR-18 A, `schwartz-space-and-the-plancherel-theorem`, `the-identity-theorem-and-the-open-mapping-theorem` |

Delete all eighteen current A-page sequencing edges whose target ends in
`-examples`; add the two new FR-4K pages, the two new FR-4C pages, the two new
FR-13 pages, and the two new FR-15 pages.  Preserve existing page ids while
moving them: old FR-13 restriction becomes FR-14; old FR-14 Pontryagin becomes
FR-17; old FR-15 Bochner/inversion becomes FR-16; and old FR-16--FR-18 become
FR-18--FR-20 respectively.  Page ids, rather than the human FR labels, are the
stable reconciliation key.  Move RG-18 A/B to 506.1/506.2 as required by the
repaired Differential Geometry scaffold.  FR-15--FR-20 remain at
510.06501--510.06512: they are after RG-18 A and before RG-19 A at 510.067.

Every A page has its same-id `-examples` B companion.  B pages are dependency
leaves.  No A page depends on a B page, no B-page item is a dependency target,
and no generated example is a dependency target.  These are graph constraints,
not merely authoring preferences.

### Ownership and amendments owed

The published files are read-only during this audit.  After the prerequisite
pages above are published, the following exact migrations/amendments are owed;
none licenses an edit to a current library page or item now.

- FR-1: move `thm-lebesgue-constants-grow-logarithmically` from the B page to
  the A page, preserving its statement and proof, so it is an ordinary supplier
  rather than an example-leaf theorem.  Make the JSON dependency list for
  `thm-dirichlet-jordan-pointwise-convergence` match the published proof:
  remove `thm-dini-pointwise-convergence-criterion-for-fourier-series` and add
  `lem-symmetric-difference-formula-for-fourier-partial-sums`,
  `thm-riemann-lebesgue-lemma-for-fourier-coefficients`, and
  `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel`.  The published
  item already has the correct non-Dini proof; this is a plan-spec repair.
- FR-2: replace its page edge to FR-1 B by FR-1 A.  Its published item proofs
  otherwise have their mathematical suppliers.
- FR-3: add the transferred FA-17 A theorem
  `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra` to
  `thm-wiener-lemma-for-absolutely-convergent-fourier-series`; step 2.1 uses
  precisely that result but its current `deps` omit it.  Once FA-17 is
  published, rewrite `cor-holomorphic-functional-calculus-in-the-wiener-algebra`
  to target FA-17's proved calculus, eliminating its current complex-analysis
  `forward_refs`.  Preserve the two published B-page counterexamples
  `cex-continuity-does-not-imply-absolute-fourier-convergence` and
  `cex-the-bernstein-holder-one-half-endpoint-can-fail`, but replace their
  externally assumed square-root exponential-sum estimate `[F1]` by a dependency
  on the new A-page
  `lem-square-root-bound-for-k-log-k-exponential-sums`; that lemma in turn must
  prove the discrete van der Corput estimate it uses.
- FR-4: replace the page edge to FR-3 B by the A-page edges in the ledger.
  The published Riesz-product lemma already performs the finite residue-class
  split for arbitrary $q>1$ and its Sidon theorem records the needed numerical
  condition; do not discard that mathematics.  The named dissociation/splitting
  lemmas and Khintchine theorem here are future factorisations and an FR-11
  supplier, not a claim that the published Riesz-product argument is invalid.
- FR-5: after FR-4K/FR-4C publish, retain the already-published
  `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence` on
  FR-5 A and add FR-4C's maximal inequality as its missing supplier. Do not
  duplicate or temporarily move that stable ID during Phase 2. Add
  `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere`
  and `thm-carleson-hunt-maximal-inequality-on-the-torus` as dependencies of
  the corresponding endpoint discussion.  Strengthen the currently
  conditional `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one`
  by discharging its displayed maximal-bound hypothesis from the latter
  theorem.  Retarget the external references of
  `rem-lone-fourier-series-can-diverge-almost-everywhere`,
  `rem-proof-cost-of-the-carleson-hunt-theorem`, and
  `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` to the proved FR-4K/FR-4C
  suppliers.  Until then, these four published items remain correctly flagged
  as resting on recorded-not-proved mathematics.
- All five published A pages: remove their sequencing-only B-page `requires`
  edges as tabulated above.  All published B pages continue to require only
  their own A page, and no mathematical item outside its own B page currently
  targets a published Fourier B item.

- **S-1 applied.** Functional analysis retains the torus, Fourier coefficients, trigonometric
  orthogonality, Hilbert-basis completeness, Parseval, and Riesz–Fischer on
  `orthonormal-bases-parseval-and-fourier-series`.  Its exact items
  `def-dirichlet-and-fejer-kernels`,
  `lem-fejer-kernel-is-a-positive-approximate-identity`,
  `thm-fejer-uniform-convergence-for-continuous-periodic-functions`,
  `thm-dirichlet-jordan-pointwise-convergence`,
  `cex-continuous-function-with-divergent-fourier-series-at-a-point`, and
  `rem-gibbs-phenomenon` are owned by FR-1/FR-2/FR-5.  FA now obtains
  trigonometric density from Stone–Weierstrass, so this transfer does not make
  FA cite forward.  FA's expressly reserved reuse id
  `ex-fourier-partial-sum-operators-and-uniform-boundedness` is consumed
  on FR-5.  The exact id
  `thm-wiener-lemma-for-absolutely-convergent-fourier-series` is owned by FR-3,
  where its circle-algebra hypotheses and consequences are developed together;
  FA-18 retains the broader Gelfand theory but does not duplicate this theorem.
- Functional analysis retains the transform, Schwartz space, distributions,
  tempered distributions, and Plancherel.  Its Schwartz Poisson formula and
  Schwartz Heisenberg theorem retain their exact ids and are cited by FR-19
  and FR-20; FR supplies hypotheses/extensions and applications rather than a
  duplicate basic transform theorem.
- **S-2 applied.** PDE retains Hölder/Sobolev spaces, elliptic regularity, and the
  $W^{2,p}$ consequences.  The eight generic harmonic-analysis items formerly
  proposed on PDE-19 — the CZ kernel definition, decomposition, weak endpoint,
  interpolation/duality split, generic $L^p$ theorem, precise endpoint remark,
  and two endpoint counterexamples — are owned by FR-8 under their exact ids.
  PDE-19 cites FR-8 and retains the Newtonian-Hessian seed and elliptic
  applications.
- Measure theory remains the owner of convolution/density in $L^p$, the
  Hardy–Littlewood maximal theorem with differentiation, Marcinkiewicz, and
  Riesz–Thorin interpolation.  MT-16c supplies complex $L^p$ conventions and
  MT-CA-1 supplies the endpoint interpolation interface after Hadamard
  three-lines. FR cites those A pages and proves no duplicate.
- Representation theory owns Haar measure and noncommutative unitary
  representation theory.  RG-18 now has the concrete page id
  `haar-measure-existence-and-uniqueness`.  FR-15--FR-17 are therefore moved
  immediately after that A page (not its B companion) and before RG-19.  The
  LCA pages use the sourced Ko/Lo order: Bochner and inversion precede
  Pontryagin biduality; full Plancherel surjectivity follows biduality.  FR
  mints no Haar theorem.  This also removes the former unresolved `RG-?` label.
- The dispatch asks FR to cite PDE for Strichartz estimates, but the current
  PDE scaffold contains no Strichartz page.  Under S-5 no new supplier is
  commissioned: FR-14 retains the sourced interface remark as a non-load-bearing
  leaf with `proved_here: false` at build and invents no PDE page id.

### Forward-reference policy

No proof-bearing Fourier item has a forward reference.  FR-6 is after PDE-11,
PDE-14, and PDE-14F, and FR-15--FR-20 are after RG-18.  The sole orientation-only
future mention is FR-14's
`rem-restriction-estimates-and-the-missing-strichartz-interface`; it has no
target id because no Strichartz page is planned, is emitted as a cited
`proved_here: false` remark, and is absent from `deps`.

## Prerequisite and notation contract

All pages cite the planned analysis pages only after those pages have been
authored.  The common spine is
`density-separability-and-convolution-in-lp`,
`the-maximal-function-and-lebesgue-differentiation`,
`orthonormal-bases-parseval-and-fourier-series`,
`fourier-transform-convolution-and-approximate-identities`,
`schwartz-space-and-the-plancherel-theorem`,
`distributions-test-functions-and-differentiation`, and
`tempered-distributions-and-the-fourier-transform`.  FR-6 additionally cites
PDE-11 and PDE-14F, so it characterises the already defined spaces rather than
creating a second $H^s$ convention.

We use $\mathbb T=\mathbb R/\mathbb Z$ with normalised Haar measure and
$e_k(x)=e^{2\pi ikx}$.  Thus
\[
 \widehat f(k)=\int_{\mathbb T}f(x)e^{-2\pi ikx}\,dx,
 \qquad
 \widehat f(\xi)=\int_{\mathbb R^n}f(x)e^{-2\pi i x\cdot\xi}\,dx.
\]
Convolution uses $(f*g)(x)=\int f(x-y)g(y)\,dy$.  The real-line Hilbert
transform is $Hf(x)=\pi^{-1}\operatorname{p.v.}\int f(y)/(x-y)\,dy$ and
has multiplier $-i\operatorname{sgn}\xi$.  On $\mathbb T$, the conjugate
operator kills the zero mode and has multiplier $-i\operatorname{sgn}k$.
Finite groups use the unitary $N^{-1/2}$ DFT; the FFT section also names the
unnormalised engineering transform and proves the conversion.  LCA transforms
use $\widehat f(\gamma)=\int_G f(x)\overline{\gamma(x)}\,dm_G(x)$.

### Convention audit

| disagreement found | adopted convention and reason |
|---|---|
| Sources use either $\mathbb R/2\pi\mathbb Z$ with $(2\pi)^{-1}dx$ or $\mathbb R/\mathbb Z$ with $dx$. | Use $\mathbb R/\mathbb Z$ to match `orthonormal-bases-parseval-and-fourier-series`; translate kernels by $2\pi$. |
| Williams suppresses some $2\pi$ constants; Grafakos and Wolff use the $e^{-2\pi ix\cdot\xi}$ transform. | Restore all constants to the functional-analysis convention; multiplier and Heisenberg constants are checked under it. |
| “Dirichlet kernel” sometimes includes a factor $(2\pi)^{-1}$. | $D_N=\sum_{|k|\le N}e_k$; normalised Haar measure carries no further factor. |
| Some sources call only the arithmetic means “Fejér means,” while others include general Cesàro order. | “Fejér” means $(C,1)$; higher-order Cesàro methods are named explicitly and not developed here. |
| A “lacunary” sequence may mean $n_{j+1}/n_j\ge q>1$ or merely gaps tending to infinity. | “Hadamard lacunary” means the ratio condition; weaker gap notions are not silently substituted. |
| Hardy space notation may mean holomorphic boundary spaces or real-variable $H^p(\mathbb R^n)$. | FR-9 always says “real Hardy”; complex analysis may cite it but owns holomorphic Hardy theory. |
| BMO may use balls, cubes, or dyadic cubes and is a seminorm until constants are factored out. | Use all axis-parallel cubes; build the quotient modulo constants.  Dyadic BMO appears only as a proof device and is not identified with BMO. |
| CZ kernels appear with pointwise Hölder regularity or the integral Hörmander condition. | FR-8 first uses the integral Hörmander condition needed for weak $(1,1)$; the stronger standard-kernel condition is a sufficient hypothesis, not the definition. |
| $A_p$ weights are sometimes required positive everywhere. | Require locally integrable $w>0$ a.e.; null-set changes are immaterial, matching measure-theory $L^p(w)$. |
| Restriction is written as $\widehat f\vert_S$ or dually as extension $(g\,d\sigma)^\vee$. | State both and prove their equivalence by duality; Stein–Tomas is given in both exponent forms. |
| LCA authors use additive or multiplicative character notation and differing dual Haar scales. | Groups are additive, characters multiplicative, and the dual Haar measure is the unique scale making inversion/Plancherel true. |
| DFT sign and normalisation vary. | Use unitary negative-sign forward DFT; record the unnormalised forward transform only at the algorithm interface. |
| Hardy’s theorem is sensitive to Gaussian normalisation. | Under $e^{-2\pi ix\xi}$, the threshold is $ab=1$ for bounds $e^{-\pi a x^2}$ and $e^{-\pi b\xi^2}$. |

## Choice-strength ledger

All analytic selections are made from countable/dyadic families or by explicit
minimisation.  CZ maximal cubes use the countable dyadic grid.  Atomic
decompositions choose countably many stopping cubes generation by generation.
LCA biduality and Haar measure inherit whatever choice strength RG records;
FR makes no sharper claim.  Banach–Steinhaus in du Bois-Reymond and
Hahn–Banach in $H^1$–BMO duality cite the functional-analysis pages and their
existing choice ledger.  No item below asserts an equivalence with a choice
principle.

## Source corpus actually read

Abbreviations below are used only in this scaffold.

| key | full treatment and URL | exact range read |
|---|---|---|
| L | Richard S. Laugesen, *Harmonic Analysis Lecture Notes*, [arXiv PDF](https://arxiv.org/pdf/0903.3845) | chs. 1–13, pp. 9–74; chs. 14–24, pp. 79–146; appendices A–C, pp. 161–175 |
| G | Loukas Grafakos, *Classical Fourier Analysis*, 3rd ed., [course-hosted full PDF](https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf) | §§1.3, 2.5, 3.1–3.6, 4.1–4.3, 5.1–5.4, 6.1–6.3, 7.1–7.5, pp. 33–47, 146–159, 173–289, 313–384, 419–461, 499–558 |
| TaoA | Terence Tao, Math 247A [notes 2](https://www.math.ucla.edu/~tao/247a.1.06f/notes2.pdf), [3](https://www.math.ucla.edu/~tao/247a.1.06f/notes3.pdf), [4](https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf), [5](https://www.math.ucla.edu/~tao/247a.1.06f/notes5.pdf) | notes 2 pp. 1–31; notes 3 pp. 1–27; notes 4 pp. 1–30; notes 5 pp. 1–24 |
| W | Mark Williams, *Notes on Harmonic Analysis*, [author PDF](https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf) | chs. 3–7, 11, and 13, pp. 6–47, 71–77, and 81–85 |
| Gu | Larry Guth, *Hardy--Littlewood--Sobolev Inequality*, [MIT OpenCourseWare full lecture PDF](https://ocw.mit.edu/courses/18-s997-the-polynomial-method-fall-2012/214a7e215cfb9c3bdd3507e528b8db3c_MIT18_S997F12_lec30.pdf) | complete lecture, §§1--3, pp. 1--4 |
| LC | Michael T. Lacey, *Carleson's Theorem: Proof, Complements, Variations*, [author arXiv PDF](https://arxiv.org/pdf/math/0307008) | §§1--7, pp. 2--29 |
| Fr | D. H. Fremlin, *Measure Theory*, vol. 2, §286, [author full chapter PDF](https://www1.essex.ac.uk/maths/people/fremlin/chap28.pdf) | §286A--§286V, printed pp. 493--521 |
| Ko23 | A. N. Kolmogorov, *Une série de Fourier--Lebesgue divergente presque partout*, [journal scan](http://matwbn.icm.edu.pl/ksiazki/fm/fm4/fm4127.pdf) | complete paper, pp. 324--328 |
| K | Juha Kinnunen, *Harmonic Analysis*, [author PDF](https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf) | chs. 1–5, pp. 1–111 |
| Wo | Thomas H. Wolff, *Lectures in Harmonic Analysis*, [editor-hosted full notes](https://www.math.ubc.ca/~ilaba/wolff/notes_march2002.pdf) | §§1–7, pp. 1–46; §10, pp. 72–81 |
| T | Michael E. Taylor, *Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE*, [author PDF](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf) | §§1, 3, 7, 11–12, PDF pp. 1–18, 24–38, 59–68, 86–100 |
| Lo | Lynn H. Loomis, *Introduction to Abstract Harmonic Analysis*, [Harvard-hosted scan](https://people.math.harvard.edu/~shlomo/212a/loomis.pdf) | §§28–37, pp. 108–152, especially §§34–37, pp. 134–152 |
| Ko | T. W. Körner, *Topological Groups*, [author PDF](https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf) | §§2–14, pp. 5–30, especially characters §9, Bochner/inversion/Plancherel §§ 10–12, inversion-based duality §13, and structure/exactness §14 |
| EW | Manfred Einsiedler and Thomas Ward, *Ergodic Theory with a View Towards Number Theory*, Appendix C, [author-course PDF](https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf) | Appendix C.1–C.3, printed pp. 429–439 |
| Taob | Terence Tao, Math 247B [notes 8](https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf) and [notes 9](https://www.math.ucla.edu/~tao/247b.1.07w/notes9.pdf) | notes 8 pp. 1–22; notes 9 pp. 1–14 |
| H | Martin Hiserote, *A Characterization of Anisotropic $H^1(\mathbb R^n)$ by Smooth Homogeneous Multipliers*, [University of Oregon PDF](https://scholarsbank.uoregon.edu/server/api/core/bitstreams/2549164c-324f-46dc-9a42-07e76fc68fc0/content) | ch. I §1.1, pp. 1–6 (PDF pp. 8–13) |
| Wa | Li-An Daniel Wang, *Multiplier Theorems on Anisotropic Hardy Spaces*, [University of Oregon PDF](https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download) | ch. I §1.1, printed pp. 2–13 (PDF pp. 10–21) |
| UW | Brooke Wilson, Math 581A [course index and lecture PDFs](https://sites.math.washington.edu/~blwilson/581AFall2024/schedule.html) | lectures 18–22: John–Nirenberg, dyadic square function, $H^1$–BMO duality, atoms, and Carleson condition, 35 PDF pages total |
| PS | J. R. Patadia, *Lacunary Fourier Series and Sidon Sets*, [author-uploaded full paper](https://www.researchgate.net/publication/268998052_Lacunary_Fourier_series_and_Sidon_sets) | §§1–6, PDF pp. 1–18 |
| FM | A. Fernández-Bertolin and E. Malinnikova, *Dynamical Versions of Hardy's Uncertainty Principle: A Survey*, [arXiv](https://arxiv.org/abs/2210.03369) | §§1–2, pp. 1–8 |
| S | Calder Sheagren, *Uncertainty Principles with Fourier Analysis*, [University of Chicago PDF](https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf) | §§1–5, pp. 1–13 |
| MITF | MIT 18.310, lecture 23, *The Finite Fourier Transform and the Fast Fourier Transform Algorithm*, [course page](https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html) | complete unpaginated lecture, headings 1–4, through “The Cooley–Tukey Fast Fourier Transform Algorithm” |
| MITP | Andrew Sutherland, MIT 18.785 lecture 16, *The functional equation*, [course PDF](https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf) | §§16.1–16.1.1, pp. 1–3 (Poisson summation, Gaussian transform, theta reciprocity) |

## Per-pair source matrix

The keys expand to the independent full treatments and URLs in the preceding
table.  A lecture devoted to the entire pair counts as a full treatment; a
passing mention does not.  Every pair has at least two independent treatments;
a dash in the supplementary column means that no third source was needed.

| pair | full treatment A — exact range read | full treatment B — exact range read | supplementary verification |
|---|---|---|---|
| FR-1 | L, chs. 1 and 8, pp. 9–14 and 47–52 | G, §§3.1.3, 3.3.1, 3.4.3–3.5.3, pp. 178–180, 193–194, 210–221 | — |
| FR-2 | L, chs. 2–3 and 7, pp. 15–26 and 43–46 | G, §§3.4.1–3.5.4, pp. 204–225 | T, §1, PDF pp. 2–8 |
| FR-3 | L, ch. 4, pp. 27–30 | G, §3.3.3, pp. 200–202 | T, §1, PDF pp. 2–8 |
| FR-4 | G, §3.6.1–3.6.3, pp. 227–237 | PS, §§1–6, PDF pp. 1–18 | — |
| FR-4K | G, §4.2.1, pp. 255–270 | Ko23, complete paper, pp. 324–328 | L, ch. 8, pp. 47–52, for endpoint context |
| FR-4C | LC, §§1–7, pp. 2–29 | Fr, §286A–§286V, pp. 493–521 | L, ch. 8, pp. 47–52, for the torus conclusion |
| FR-5 | L, ch. 8, pp. 47–52 | G, §§3.4.3 and 4.2.1, pp. 210–212 and 255–270 | — |
| FR-6 | G, §§2.5 and 6.2, pp. 146–159 and 437–450 | W, §§3.9 and 6.1–6.4, pp. 12 and 23–28 | TaoA note 5 §3, pp. 15–23 |
| FR-7 | L, chs. 10–12 and 20–21, pp. 57–74 and 113–126 | G, §5.1.1–5.1.4, pp. 314–329 | W, §§3.1–3.4, pp. 6–8 |
| FR-8 | G, §§5.3–5.4, pp. 355–384 | TaoA note 3 §4, pp. 20–24, and note 4 §2, pp. 4–10 | W, §§3.3–3.9, pp. 7–12; G, §6.2.3, pp. 445–450 |
| FR-9 | Wa, ch. I §1.1, printed pp. 2–13 | W, §§6.2 and 7.6, pp. 24–26 and 40–47 | H, ch. I §1.1, pp. 1–6 |
| FR-10 | W, §§7.1–7.7, pp. 29–47 | UW, lectures 18 and 20–22, 27 PDF pages | K, ch. 3, pp. 34–64; TaoA note 4 §3, pp. 10–14 |
| FR-11 | G, §6.1, pp. 419–437 | W, ch. 5, pp. 15–22 | TaoA note 4 §5, pp. 20–24 |
| FR-12 | G, §§7.1–7.4, pp. 499–545 | K, chs. 4–5, pp. 65–111 | TaoA note 5 §1, pp. 1–6 |
| FR-13 | W, §11.2, pp. 73–74 | Gu, complete §§1–3, pp. 1–4 | — |
| FR-14 | Wo, §§3–7, pp. 10–46 | Taob, notes 8–9, pp. 1–22 and 1–14 | W, §§11.1–11.3, pp. 71–74 |
| FR-15 | Lo, §§34–35, pp. 134–140 | Ko, §9, pp. 20–22 | EW, Appendix C.1, printed pp. 429–432 |
| FR-16 | Lo, §§34 and §§36A–D, pp. 134–137 and 141–146 | Ko, §§10–12, pp. 22–26 | EW, Appendix C.2–C.3, printed pp. 432–439 |
| FR-17 | Lo, §§35 and §37, pp. 138–140 and 147–152 | Ko, §§13–14, pp. 26–30 | EW, Appendix C.1, printed pp. 429–432 |
| FR-18 | T, §§11–12, PDF pp. 86–100 | MITF, complete headings 1–4, unpaginated | EW, Appendix C.1–C.2, printed pp. 429–435 |
| FR-19 | T, §7, PDF pp. 59–68 | L, chs. 22–23, pp. 129–140 | MITP, §§16.1–16.1.1, pp. 1–3 |
| FR-20 | FM, §§1–2, pp. 1–8 | S, §§1–5, pp. 1–13 | L, ch. 24, pp. 141–146 |

## FR-1. Dirichlet kernel, localisation, and pointwise convergence

**A page:** `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`
**B page:** `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`
**Requires:** `density-separability-and-convolution-in-lp` and the published
real-analysis BV/second-mean-value suppliers.  It has no mathematical
dependency on probability and no sequencing edge to the probability B page.
**Sources read:** L chs. 1, 3, 8, pp. 9–14,
25–26, 47–52; G §§3.1, 3.3–3.5, pp. 173–182, 192–225.

The A page separates the algebraic kernel identity from the cancellation
arguments that actually prove pointwise convergence.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-period-one-fourier-coefficients-partial-sums-and-convolution` (definition) — define $\mathbb T=\mathbb R/\mathbb Z$, normalized integration, $e_k$, Fourier coefficients, $S_N$, and periodic convolution. | Supplies the torus language that was absent when FR-1 was authored. | literature-derived | not-applicable | Published FR-1 exact id and convention. |
| 2 | `def-dirichlet-and-fejer-kernels` (definition) — $D_N=\sum_{|k|\le N}e_k$ and $F_N=(N+1)^{-1}\sum_{j=0}^ND_j$. | Fixes both later kernels once. | literature-derived | not-applicable | L/G definitions; exact normalisation adapted to the library torus. |
| 3 | `lem-fourier-partial-sums-are-dirichlet-convolutions` (lemma) — $S_Nf=f*D_N$ for $f\in L^1(\mathbb T)$. | Converts coefficient sums into a local integral. | literature-derived | ai-altered | L ch. 1/G §3.2; signs translated. |
| 4 | `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` (lemma) — $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ off $\mathbb Z$, with the removable value $2N+1$. | Supplies all later oscillatory estimates. | literature-derived | ai-altered | G §3.1.3; endpoint value made explicit. |
| 5 | `lem-step-functions-have-vanishing-torus-fourier-coefficients` (lemma) — compute interval coefficients and finite linear combinations. | Elementary dense-class input to Riemann–Lebesgue. | literature-derived | ai-altered | Published FR-1 repair. |
| 6 | `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` (lemma) — transport the published box-step density theorem to one period. | Closes the missing torus-density interface explicitly. | literature-derived | ai-altered | Published FR-1 repair. |
| 7 | `thm-riemann-lebesgue-lemma-for-fourier-coefficients` (theorem) — $\widehat f(k)\to0$ for every $f\in L^1(\mathbb T)$. | Necessary condition and localisation input. | literature-derived | ai-altered | Items 5--6 and the $L^1$ transform bound. |
| 8 | `lem-symmetric-difference-formula-for-fourier-partial-sums` (lemma) — $S_Nf(x)-s$ is the sine-kernel integral of $f(x+t)+f(x-t)-2s$. | Splits Dini and Dirichlet tests from kernel algebra. | literature-derived | ai-altered | L ch. 8/G §3.4.4. |
| 9 | `thm-riemann-localisation-principle-for-fourier-series` (theorem) — if $f=g$ a.e. near $x$, then $S_Nf(x)-S_Ng(x)\to0$. | Makes pointwise convergence genuinely local. | literature-derived | ai-altered | Riemann–Lebesgue on the away-from-zero quotient. |
| 10 | `thm-dini-pointwise-convergence-criterion-for-fourier-series` (theorem) — if $\int_0^\delta |f(x+t)+f(x-t)-2s|t^{-1}dt<\infty$, then $S_Nf(x)\to s$. | Sharp usable local modulus criterion. | literature-derived | ai-altered | L/G; both sides and the candidate value stated. |
| 11 | `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` (corollary) — $|f(x\pm t)-f(x)|\le Ct^\alpha$, $\alpha>0$, implies $S_Nf(x)\to f(x)$. | Cheap consumer of Dini. | ai-altered | ai-altered | Direct sourced corollary of item 10. |
| 12 | `lem-bounded-variation-gives-one-sided-dirichlet-integrability` (lemma) — for a BV function tending to zero at the endpoint, the oscillatory Dirichlet-kernel integral tends to zero. | Supplies Jordan without falsely claiming that BV implies Dini's absolute condition. | literature-derived | ai-altered | Jordan decomposition, Bonnet's second mean-value theorem, and item 7. |
| 13 | `thm-dirichlet-jordan-pointwise-convergence` (theorem) — for periodic $f\in BV$, $S_Nf(x)\to\tfrac12(f(x+)+f(x-))$. | Principal classical criterion. | literature-derived | ai-altered | Item 12 on the two one-sided differences; it does not depend on Dini. |
| 14 | `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values` (corollary) — a periodic piecewise $C^1$ function converges pointwise to its midpoint regularisation. | Common usable specialization. | literature-derived | ai-altered | Item 13 and the published $C^1\Rightarrow BV$ hierarchy. |
| 15 | `thm-lebesgue-constants-grow-logarithmically` (theorem) — $\|D_N\|_1\asymp\log(N+2)$. | A-page supplier for FR-5; it cannot live on a dependency-leaf companion. | literature-derived | ai-altered | G §3.4.3/L ch. 8; upper and lower interval estimates. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-dirichlet-kernel-at-zero-and-away-from-zero` (example) — compute $D_N(0)$ and exhibit sign oscillation off zero. | Shows why $D_N$ is not a positive approximate identity. | ai-generated | ai-generated | Finite geometric-series check; never a dependency. |
| 2 | `ex-fourier-partial-sums-of-the-sawtooth` (example) — compute the coefficients and verify midpoint convergence at the jump. | Tests sign, endpoint, and representative conventions. | literature-derived | ai-altered | L/G standard computation. |
| 3 | `ex-localisation-for-functions-equal-on-an-arc` (example) — two explicit $L^1$ functions equal near zero have asymptotically equal partial sums there. | Finite verification of localisation. | ai-generated | ai-generated | Direct integral estimate; leaf only. |
| 4 | `cex-continuity-alone-does-not-satisfy-a-dini-modulus` (counterexample) — a sourced continuous logarithmic-modulus example has divergent Dini integral. | Prevents replacing Dini by continuity. | literature-derived | ai-altered | L discussion after Dini; no divergence claim is inferred. |

**Hard proof/boundary obligations.**  The point $t=0$ is a removable kernel
singularity, not an excluded point.  Localisation removes a neighbourhood
before division by $\sin\pi t$.  Dini states the candidate limit $s$ rather
than assuming continuity.  Jordan uses both one-sided limits and therefore
also covers a jump and the periodic seam.

## FR-2. Fejér and Poisson summability

**A page:** `fejer-and-poisson-summability-of-fourier-series`
**B page:** `fejer-and-poisson-summability-of-fourier-series-examples`
**Requires:** the FR-1 A page and the measure-owned approximate-identity and Lebesgue
differentiation pages.  **Sources read:** L chs. 2–3 and 7, pp. 15–26,
43–46; G §§3.4–3.5, pp. 204–225.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-cesaro-and-abel-means-of-a-fourier-series` (definition) — define $(C,1)$ means $\sigma_Nf$ and radial Abel means $P_rf$, $0\le r<1$. | Separates two summability methods and their boundary parameters. | literature-derived | not-applicable | L chs. 2–3. |
| 2 | `lem-fejer-kernel-is-a-positive-approximate-identity` (lemma) — $F_N\ge0$, $\int F_N=1$, and its mass off every neighbourhood of zero tends to zero. | Transferred exact FA-14 id; powers norm and pointwise results. | literature-derived | ai-altered | L/G; includes $N=0$. |
| 3 | `thm-fejer-convergence-in-lp` (theorem) — $\sigma_Nf\to f$ in $L^p$ for exactly $1\le p<\infty$. | States the norm range without folding in the different $C(\mathbb T)$ topology. | literature-derived | ai-altered | L ch. 2/G §3.4.1. |
| 4 | `thm-fejer-uniform-convergence-for-continuous-periodic-functions` (theorem) — the continuous case of item 3, retained under the transferred FA id. | Preserves the previously minted stable id. | literature-derived | ai-altered | Same proof component as item 3; builder may combine body exposition. |
| 5 | `thm-fejer-means-converge-at-lebesgue-points` (theorem) — for $f\in L^1$, $\sigma_Nf(x)\to f(x)$ at every Lebesgue point. | Gives the a.e. result by citing measure differentiation. | literature-derived | ai-altered | G §3.4.2; no maximal theorem duplicated. |
| 6 | `lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity` (lemma) — $P_r(t)=\sum_{k\in\mathbb Z}r^{|k|}e_k(t)$ is positive, normalised, and concentrates as $r\uparrow1$. | Abel counterpart of Fejér. | literature-derived | ai-altered | L ch. 3/G §3.5.1. |
| 7 | `thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points` (theorem) — give respectively $1\le p<\infty$, $C(\mathbb T)$, and pointwise Lebesgue-point conclusions. | Keeps three topologies distinct. | literature-derived | ai-altered | L/G. |
| 8 | `thm-cesaro-summability-implies-abel-summability` (theorem) — convergence of arithmetic means of partial sums to $s$ implies Abel convergence to $s$. | Classical Abelian comparison. | literature-derived | ai-altered | G §3.5.1; summation by parts with bounded means. |
| 9 | `thm-fejer-theorem-for-pointwise-midpoint-values` (theorem) — if both one-sided limits exist, $\sigma_Nf(x)$ tends to their average. | Makes summability at jumps explicit. | literature-derived | ai-altered | L ch. 3; split positive kernel on two sides. |
| 10 | `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` (theorem) — at a jump $J$, nearby Dirichlet sums overshoot by $J(\pi^{-1}\operatorname{Si}(\pi)-1/2)\approx0.08949J$. | Exact sourced Gibbs statement. | literature-derived | ai-altered | G §3.5.4; translation from period one. |
| 11 | `rem-gibbs-phenomenon` (remark) — Fejér and Abel means suppress the fixed overshoot because their kernels are positive. | Transferred exact FA id and qualitative comparison. | literature-derived | not-applicable | L/G; no unsourced theorem hidden in prose. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-fejer-means-of-a-single-character` (example) — $\sigma_Ne_k=(1-|k|/(N+1))_+e_k$. | Checks cutoff and $N=0$. | ai-generated | ai-generated | Finite coefficient calculation; leaf. |
| 2 | `ex-poisson-integral-of-a-single-character` (example) — $P_r*e_k=r^{|k|}e_k$. | Checks Abel weights. | ai-generated | ai-generated | Direct convolution; leaf. |
| 3 | `ex-fejer-summation-of-the-square-wave` (example) — midpoint values are recovered without Gibbs overshoot. | Contrasts ordinary and positive summation. | literature-derived | ai-altered | G/L standard example. |
| 4 | `cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data` (counterexample) — uniform limits of continuous trigonometric polynomials cannot equal a discontinuous representative. | Tests the continuity hypothesis. | ai-altered | ai-altered | Direct continuity argument, explicitly non-load-bearing. |
| 5 | `cex-abel-summability-does-not-imply-ordinary-convergence` (counterexample) — Grandi's series has Abel sum $1/2$ but divergent partial sums. | Prevents reversing item 8. | literature-derived | ai-altered | Classical scalar example; no Fourier dependency. |

**Hard proof/boundary obligations.**  Abel has $0\le r<1$ and takes a
one-sided limit $r\uparrow1$; Fejér starts at $N=0$.  The $L^\infty$ norm
claim is not made for arbitrary classes: the uniform theorem is only for the
continuous representative.  The Gibbs item distinguishes the value at the
jump from extrema at points approaching the jump.

## FR-3. Absolute convergence and the Wiener algebra

**A page:** `absolute-convergence-and-the-wiener-algebra`
**B page:** `absolute-convergence-and-the-wiener-algebra-examples`
**Requires:** the FR-1 and FR-2 A pages, Parseval from
`orthonormal-bases-parseval-and-fourier-series`, and FA-17 A
`banach-algebras-spectrum-and-holomorphic-functional-calculus`.  The
maximal-ideal/character theorem currently listed on FA-17's B companion must be
transferred to FA-17 A before FR-3 may target it; otherwise that companion would
not be a dependency leaf.  The periodic weak derivative is
still developed locally, but Wiener inversion no longer smuggles in an unproved
maximal-ideal criterion. **Sources read:** L ch. 4, pp. 27–30; G §3.3,
pp. 192–202; T §1, PDF pp. 1–18.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-wiener-algebra-of-the-circle` (definition) — $A(\mathbb T)=\{f:\sum_k|\widehat f(k)|<\infty\}$ with the coefficient $\ell^1$ norm. | Names the natural absolute-convergence space. | literature-derived | not-applicable | L ch. 4. |
| 2 | `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence` (lemma) — an $\ell^1$ coefficient sequence defines a continuous function by an absolutely uniform series. | Establishes the representative before algebra operations. | literature-derived | ai-altered | Weierstrass M-test plus FA coefficient uniqueness. |
| 3 | `thm-wiener-algebra-is-a-banach-algebra` (theorem) — pointwise multiplication corresponds to discrete convolution and $\|fg\|_A\le\|f\|_A\|g\|_A$. | Makes inversion meaningful. | literature-derived | ai-altered | L ch. 4; cites $\ell^1$ completeness. |
| 4 | `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz` (lemma) — weighted $\ell^2$ control with weight inverse in $\ell^2$ implies $\ell^1$ coefficients. | Kernel of Bernstein's theorem. | literature-derived | ai-altered | L/G; separates the sequence estimate. |
| 5 | `thm-bernstein-absolute-convergence-theorem` (theorem) — $f\in C^\alpha(\mathbb T)$ with $\alpha>1/2$ has $\widehat f\in\ell^1$. | Required absolute-convergence threshold. | literature-derived | ai-altered | L ch. 4; difference method plus item 4. |
| 6 | `lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions` (lemma) — a translated-difference identity bounds each dyadic coefficient block by the $C^\alpha$ modulus. | Supplies the missing quantitative step in Bernstein. | literature-derived | ai-altered | Published FR-3 repair from G §3.3.3. |
| 7 | `lem-holder-fourier-coefficients-have-weighted-ltwo-decay` (lemma) — summing the dyadic block bounds gives the weighted $\ell^2$ estimate used by Cauchy--Schwarz. | Prevents Bernstein's proof from hiding a stronger coefficient theorem. | literature-derived | ai-altered | Item 6 and a geometric series. |
| 8 | `lem-discrete-van-der-corput-second-derivative-bound` (lemma) — if $\lambda\le |\phi''|\le A\lambda$ on an interval of $N$ integers, then the exponential sum is $O_A(N\sqrt\lambda+\lambda^{-1/2})$. | Supplies the nontrivial estimate behind both published endpoint witnesses. | literature-derived | literature-derived | G Exercise 3.3.8; include the finite-difference proof rather than treating the estimate as a recorded fact. |
| 9 | `lem-square-root-bound-for-k-log-k-exponential-sums` (lemma) — uniformly in $x$ and $N\ge2$, $|\sum_{k=2}^N e^{ik\log k}e^{2\pi ikx}|\le C\sqrt N$. | Makes the two B-page counterexamples genuinely local consequences. | literature-derived | ai-altered | Apply item 8 to $\phi(t)=t\log t+2\pi xt$ on dyadic blocks and sum the geometric square-root bounds. |
| 10 | `def-periodic-ltwo-weak-derivative` (definition) — define the weak derivative directly on $\mathbb T$ by periodic test functions. | Keeps the Fourier claim closed without redefining general Sobolev spaces. | literature-derived | not-applicable | Standard periodic specialization. |
| 11 | `lem-fourier-coefficients-of-a-periodic-weak-derivative` (lemma) — $\widehat g(k)=2\pi i k\widehat f(k)$ when $g$ is the periodic weak derivative of $f$. | Supplies the exact weighted-$\ell^2$ bridge used next. | literature-derived | ai-altered | Test against smooth characters. |
| 12 | `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series` (corollary) — $f\in L^2$ with weak derivative in $L^2$ has $\widehat f\in\ell^1$. | Cheap periodic criterion. | literature-derived | ai-altered | Items 4 and 11. |
| 13 | `thm-wiener-lemma-for-absolutely-convergent-fourier-series` (theorem) — a nowhere-zero $f\in A(\mathbb T)$ has $1/f\in A(\mathbb T)$. | Gives the named inverse-closedness theorem. | literature-derived | literature-derived | Identify every character with evaluation, then cite FA-17 A's transferred `thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra`. |
| 14 | `cor-holomorphic-functional-calculus-in-the-wiener-algebra` (corollary) — if $f\in A(\mathbb T)$ and $\Phi$ is holomorphic near $f(\mathbb T)$, then $\Phi\circ f\in A(\mathbb T)$. | Shows what Wiener inversion is for. | literature-derived | ai-altered | FA-17's proved Banach-algebra holomorphic calculus plus item 13; no forward complex-analysis result. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-a-trigonometric-polynomial-in-the-wiener-algebra` (example) — compute its $A$ norm. | Finite normalisation check. | ai-generated | ai-generated | Leaf. |
| 2 | `ex-an-absolutely-convergent-non-smooth-fourier-series` (example) — $\sum_{k\ne0}|k|^{-2}e_k$ lies in $A$ but is not $C^2$. | Separates absolute convergence from arbitrary smoothness. | ai-altered | ai-altered | Direct coefficient/derivative check. |
| 3 | `cex-continuity-does-not-imply-absolute-fourier-convergence` (counterexample) — $g(x)=\sum_{k\ge2}e^{ik\log k}e_k(x)/k$ converges uniformly but has nonsummable coefficient magnitudes. | Preserves and closes the published witness. | literature-derived | ai-altered | Item 9 plus summation by parts; B leaf depending only on its own A page. |
| 4 | `cex-the-bernstein-holder-one-half-endpoint-can-fail` (counterexample) — the same $g$ is $C^{1/2}(\mathbb T)$ but not in $A(\mathbb T)$. | Shows the strict threshold with the published explicit endpoint witness. | literature-derived | ai-altered | Item 9, low/high frequency split, and summation by parts. |
| 5 | `cex-wiener-inversion-needs-nonvanishing` (counterexample) — $1-e_1$ is in $A$ but its reciprocal is not continuous on $\mathbb T$. | Tests the spectral hypothesis. | ai-generated | ai-generated | Immediate zero at the identity; leaf. |

## FR-4. Lacunary series and Sidon sets

**A page:** `lacunary-fourier-series-and-sidon-sets`
**B page:** `lacunary-fourier-series-and-sidon-sets-examples`
**Requires:** the FR-1--FR-3 A pages, Parseval, finite-product probability, and
measure-theory $L^p$ inequalities.
**Sources read:** G §3.6, pp. 226–240; PS §§1–6, PDF pp. 1–18.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series` (definition) — $n_{j+1}/n_j\ge q>1$ and spectrum contained in $\{n_j\}$. | Fixes the strong gap convention. | literature-derived | not-applicable | G/PS. |
| 2 | `lem-hadamard-gaps-bound-additive-representations` (lemma) — a fixed integer has uniformly bounded signed representations by separated large lacunary frequencies of fixed length. | Combinatorial input for moment estimates. | literature-derived | ai-altered | G §3.6.1. |
| 3 | `thm-khintchine-inequalities-for-finite-rademacher-sums` (theorem) — for $0<p<\infty$, the $L^p$ norm on the finite sign cube is equivalent to the coefficient $\ell^2$ norm, with constants depending only on $p$. | Supplies the named randomisation theorem later consumed by FR-11. | literature-derived | literature-derived | W §§5.1, 13.1; even moments, tail integration, and duality. |
| 4 | `thm-lacunary-lp-norm-equivalence` (theorem) — for every $0<p<\infty$, finite lacunary sums satisfy $\|\sum a_je_{n_j}\|_p\asymp_{p,q}(\sum|a_j|^2)^{1/2}$. | Central Paley–Zygmund phenomenon with exact range. | literature-derived | ai-altered | G §3.6.2; even moments and duality, with quasi-norm handling below one. |
| 5 | `cor-lacunary-series-lp-membership-is-coefficient-ell-two` (corollary) — a lacunary coefficient series converges in $L^p$ iff its coefficients lie in $\ell^2$, for $0<p<\infty$ in the sourced quasi-norm sense. | Converts finite inequalities to series. | literature-derived | ai-altered | Item 4 and the earlier Banach/quasi-Banach completeness theorems. |
| 6 | `def-dissociated-set-and-sidon-set-in-the-integer-dual` (definition) — define dissociation by uniqueness of $\{-1,0,1\}$ relations and define the Sidon inequality for finite coefficients. | States the extra combinatorial hypothesis actually used by the elementary Riesz product. | literature-derived | not-applicable | G §3.6.3/Kahane. |
| 7 | `lem-a-hadamard-sequence-splits-into-finitely-many-strongly-lacunary-dissociated-subsequences` (lemma) — choose $r$ with $q^r>3$ and split indices modulo $r$. | Keeps the finite split already present in the published Riesz-product proof as a named supplier. | literature-derived | ai-altered | Kahane, §3. |
| 8 | `lem-riesz-product-for-a-strongly-lacunary-dissociated-set` (lemma) — a finite positive Riesz product has mass one, controlled support, and prescribed first-order coefficients. | Honest collision-free Riesz-product input. | literature-derived | ai-altered | G/Kahane; all $\{-1,0,1\}$ collisions checked. |
| 9 | `lem-finite-union-step-for-the-hadamard-sidon-inequality` (lemma) — combine the finitely many residue-class Riesz-product estimates with constants depending on $q$. | Supplies the nontrivial step formerly hidden behind “finite unions if needed.” | literature-derived | literature-derived | Kahane's finite-decomposition argument, specialized to one Hadamard sequence. |
| 10 | `thm-hadamard-lacunary-sets-are-sidon` (theorem) — every ratio-lacunary subset of positive integers satisfies the Sidon inequality. | Connects gap and uniform-norm theories. | literature-derived | ai-altered | Items 7--9. |
| 11 | `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients` (corollary) — a continuous function with spectrum in $E$ Sidon belongs to $A(\mathbb T)$. | Feeds thin spectra back to FR-3. | literature-derived | ai-altered | Fejér polynomial approximation and the Sidon inequality. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-powers-of-two-form-a-hadamard-lacunary-sequence` (example) — $2^{j+1}/2^j=2$. | Minimal boundary check. | ai-generated | ai-generated | Leaf. |
| 2 | `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` (counterexample) — $n_j=j^2$ has growing gaps but ratio tending to one. | Audits the definition. | ai-generated | ai-generated | Leaf. |
| 3 | `ex-riesz-product-for-three-powers-of-three` (example) — expand a finite product and verify absence of frequency collisions. | Finite verification of item 6. | ai-generated | ai-generated | Leaf. |
| 4 | `cex-the-integers-are-not-a-sidon-set` (counterexample) — Dirichlet/Rudin–Shapiro polynomials violate a uniform $\ell^1$-to-supremum bound. | Shows Sidon is genuinely thin. | literature-derived | ai-altered | G §3.6.3; sourced polynomial family. |

## FR-4K. Kolmogorov blocks and almost-everywhere divergence

**A page:** `kolmogorov-block-construction-and-almost-everywhere-divergence`
**B page:** `kolmogorov-block-construction-and-almost-everywhere-divergence-examples`
**Requires:** the FR-1 and FR-2 A pages, FA Fourier-series Parseval and
Riesz--Fischer, MT convergence theorems, and the published probability page
containing Borel--Cantelli.  **Sources read:** G §4.2.1, pp. 255--270; Ko23
complete, pp. 324--328; L ch. 8, pp. 47--52 for endpoint context.

This supplier must precede FR-5.  It converts the present external Kolmogorov
record into a locally proved theorem rather than letting later endpoint claims
reason from a `proved_here: false` remark.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-kolmogorov-analytic-partial-sum-maximal-function` (definition) — define the one-sided analytic partial sums and their finite maxima for trigonometric polynomials. | Fixes the convention used by the block construction. | literature-derived | not-applicable | G §4.2.1. |
| 2 | `lem-kolmogorov-block-polynomial-with-large-partial-sums` (lemma) — for each prescribed height and exceptional measure, construct an analytic trigonometric polynomial with controlled $L^1$ norm whose partial-sum maximum exceeds that height outside the exceptional set. | Load-bearing finite block. | literature-derived | literature-derived | G Lemmas 4.2.2--4.2.4; expose the shifted-kernel, exceptional-set, and coefficient estimates separately in the proof. |
| 3 | `lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima` (lemma) — sufficiently large frequency translation preserves a chosen block's internal maxima while its completed sum is uniformly small on the earlier stages' good set. | Makes the gliding-hump induction legitimate. | literature-derived | ai-altered | G §4.2.1; finite maxima permit one frequency choice at each stage. |
| 4 | `lem-kolmogorov-gliding-hump-series-converges-in-lone` (lemma) — choose summable block norms, rapidly increasing frequency intervals, and summable exceptional measures so the block series converges in $L^1$. | Produces an actual integrable limit. | literature-derived | literature-derived | Item 3, completeness of $L^1$, and the chosen numerical sequences. |
| 5 | `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set` (lemma) — Borel--Cantelli and domination of earlier/later completed blocks give unbounded partial sums at almost every point of the $L^1$ limit. | Separates the measure conclusion from construction. | literature-derived | literature-derived | Items 2--4 and the exact Borel--Cantelli supplier. |
| 6 | `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` (theorem) — there exists $f\in L^1(\mathbb T)$ whose symmetric Fourier partial sums are unbounded almost everywhere. | Genuine supplier for the FR-5 endpoint assertions. | literature-derived | literature-derived | Convert analytic to symmetric blocks in the convention of FR-1 and apply items 4--5. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-one-finite-kolmogorov-frequency-block` (example) — display the shifted frequency support and the relevant internal partial-sum indices for one finite block. | Audits the indexing. | ai-generated | ai-generated | Finite leaf. |
| 2 | `ex-summable-exceptional-measures-in-the-kolmogorov-induction` (example) — use $2^{-j}$-scaled measures and verify the null limsup conclusion. | Audits the Borel--Cantelli input. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  The block lemma is not merely asserted:
its finite polynomial, $L^1$ estimate, exceptional set, and chosen partial-sum
indices are all proved.  The construction yields unbounded symmetric partial
sums almost everywhere, not pointwise everywhere.  The limiting Fourier
coefficients are identified from $L^1$ convergence before the block maxima are
read as partial sums of the limit.

## FR-4C. The Carleson--Hunt time--frequency theorem

**A page:** `carleson-hunt-time-frequency-theorem`
**B page:** `carleson-hunt-time-frequency-theorem-examples`
**Requires:** FR-1 A, FA Plancherel and Bessel inequalities, MT's maximal and
interpolation theorems, and the published measure convergence results.
**Sources read:** LC §§1--7, pp. 2--29; Fr §286A--§286V, pp. 493--521;
L ch. 8, pp. 47--52 for the torus conclusion.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-carleson-operator-and-measurable-linearisation` (definition) — define the one-sided real-line maximal Fourier integral and its linearisation by a measurable frequency selector. | Replaces a supremum by uniform linear estimates. | literature-derived | not-applicable | LC §1--§2. |
| 2 | `def-carleson-tiles-wave-packets-and-tile-order` (definition) — define area-one dyadic time--frequency tiles, their adapted wave packets, the partial order, tops, and trees. | Fixes all combinatorial objects before their estimates. | literature-derived | not-applicable | LC §2--§3/Fr §286. |
| 3 | `lem-wave-packet-model-dominates-the-linearised-carleson-operator` (lemma) — average the dyadic wave-packet projections and reduce the continuous linearisation to uniform finite tile sums. | Justifies proving a model estimate. | literature-derived | literature-derived | LC Proposition 2.12 through Lemma 2.18; truncations are finite before limits. |
| 4 | `def-density-size-and-tree-count-for-carleson-tiles` (definition) — define density with Schwartz tails, size by tree square sums, and count by total top length. | Names the three quantities used by selection. | literature-derived | not-applicable | LC §3. |
| 5 | `lem-carleson-density-selection` (lemma) — split a finite tile family into half-density remainder and trees whose total top length is controlled by inverse density times the testing-set measure. | First stopping-time estimate. | literature-derived | literature-derived | LC §4/Fr §286; maximal-tile selection and tail enlargement are proved. |
| 6 | `lem-carleson-size-selection` (lemma) — split into half-size remainder and trees with total top length bounded by inverse-square size times $\|f\|_2^2$. | Orthogonality estimate. | literature-derived | literature-derived | LC §5; strongly disjoint tops and Bessel/almost-orthogonality are explicit. |
| 7 | `lem-carleson-single-tree-estimate` (lemma) — a tree's bilinear contribution is bounded by density times size times its top length. | Analytic heart of the proof. | literature-derived | literature-derived | LC §6/Fr §286; split overlapping/lacunary trees and control maximal/oscillatory pieces. |
| 8 | `lem-carleson-forest-summation-gives-restricted-weak-ltwo` (lemma) — iterate items 5--6, apply item 7, and sum the balanced geometric bounds over density/size levels. | Combines the central lemmas without a hidden infinite rearrangement. | literature-derived | ai-altered | LC §3 and end of §6; finite sums first, uniform limit second. |
| 9 | `thm-carleson-maximal-operator-is-strong-ltwo` (theorem) — the Carleson maximal operator is bounded on $L^2(\mathbb R)$. | Carleson's core theorem. | literature-derived | literature-derived | Items 1--8 plus the sourced restricted-weak-to-strong refinement in Fr §286. |
| 10 | `lem-hunt-exceptional-set-and-distribution-estimates` (lemma) — maximal-function removal and the two testing-set regimes give the distributional estimates needed for every $1<p<\infty$. | Exposes the extension beyond $p=2$. | literature-derived | literature-derived | LC §§7.1--7.2. |
| 11 | `thm-carleson-hunt-maximal-inequality-on-the-torus` (theorem) — for $1<p<\infty$, $\|\sup_N|S_Nf|\|_{L^p(\mathbb T)}\le C_p\|f\|_p$. | Exact supplier required by published FR-5. | literature-derived | literature-derived | Item 10, MT interpolation, and the standard de Leeuw/periodisation transfer proved in Fr §286 rather than merely named. |

The already-published FR-5 closure lemma and $L^p$ a.e.-convergence corollary
are Phase-3 consumers of item 11. They remain on FR-5, which is ordered after
this pair. FR-4C does not mint a duplicate closure lemma or convergence
corollary, so its complete Phase-2 A inventory ends at item 11.

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-two-comparable-and-two-incomparable-carleson-tiles` (example) — draw the time/frequency interval containments and compute the tile order. | Checks the reversed frequency inclusion. | ai-generated | ai-generated | Finite leaf. |
| 2 | `ex-balancing-density-and-size-levels-in-the-carleson-sum` (example) — sum the model bound $\min(2^{-n},2^n)$. | Audits convergence of the final scale sum. | ai-generated | ai-generated | Geometric-series leaf. |
| 3 | `rem-carleson-hunt-does-not-include-the-lone-endpoint` (remark) — point to FR-4K's obstruction without using a B item as a dependency. | Records the sharp lower boundary. | literature-derived | not-applicable | Leaf orientation. |

**Hard proof/boundary obligations.**  Every selection is carried out on a
finite tile set, with constants uniform before monotone limits.  Measurable
linearisation, Schwartz tails in density, strong disjointness in the size
lemma, and the real-line-to-torus transfer are proof obligations.  A weak
$L^2$ model estimate alone is not silently upgraded to strong $L^2$, and the
$p\ne2$ Hunt step is not reduced to ordinary interpolation without its
exceptional-set estimates.

## FR-5. Divergence and almost-everywhere convergence

**A page:** `divergence-and-almost-everywhere-convergence-of-fourier-series`
**B page:** `divergence-and-almost-everywhere-convergence-of-fourier-series-examples`
**Requires:** the FR-1, FR-2, FR-4K, and FR-4C A pages, the
functional-analysis uniform boundedness theorem, and measure convergence
theorems.  Existing bibliographic records remain, but proof-bearing endpoint
claims target the genuine FR-4K/FR-4C suppliers.  **Sources read:** L ch. 8, pp. 47–52; G
§3.4.3 and §4.2, pp. 210–212 and 255–270.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant` (lemma) — $\|S_N:C(\mathbb T)\to C(\mathbb T)\|=\|D_N\|_1$. | Links FR-1 growth to Banach–Steinhaus. | literature-derived | ai-altered | L/G; phase-approximating continuous test functions prove the lower bound. |
| 2 | `cex-continuous-function-with-divergent-fourier-series-at-a-point` (counterexample) — some $f\in C(\mathbb T)$ has unbounded, hence divergent, Fourier partial sums at a prescribed point. | Transferred exact FA-14 id; the du Bois-Reymond failure theorem and its witness are one item, not two labels for the same claim. | literature-derived | ai-altered | L ch. 8; item 1 and FR-1 Lebesgue constants plus uniform boundedness. |
| 3 | `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima` (remark, `proved_here: false`) — retain the published historical record and point to FR-4K's proved block lemma. | Preserves the published item while making it non-load-bearing. | literature-derived | not-supplied | G §4.2.1; FR-4K is the mathematical supplier. |
| 4 | `rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere` (remark, `proved_here: false`) — retain the published theorem record and point to FR-4K's proved theorem. | Preserves the bibliographic item without using it as a dependency target. | literature-derived | not-supplied | G §4.2.1; FR-4K supplies the proof. |
| 5 | `def-carleson-maximal-partial-sum-operator` (definition) — $Cf(x)=\sup_N|S_Nf(x)|$. | States the actual operator controlled by Carleson. | literature-derived | not-applicable | L ch. 8. |
| 6 | `rem-carleson-hunt-almost-everywhere-convergence` (remark, `proved_here: false`) — retain the published historical record of boundedness of $C$ on $L^p$, $1<p<\infty$, and point to FR-4C's proved theorem. | Exact bibliographic record and strict endpoints, non-load-bearing. | literature-derived | not-supplied | L statement and primary theorem citation; FR-4C supplies the proof. |
| 7 | `rem-proof-cost-of-the-carleson-hunt-theorem` (remark) — a proof requires time-frequency tiles, tree selection, size/density estimates, and an exceptional-set summation not developed on this page. | Honest account of cost. | literature-derived | not-supplied | L source note plus standard theorem architecture; never a dependency. |
| 8 | `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one` (corollary) — apply FR-4C's maximal inequality and migrated closure lemma. | Restores the published unconditional conclusion with genuine earlier suppliers. | literature-derived | ai-altered | FR-4C items 11--12. |
| 10 | `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` (remark) — Kolmogorov prevents extension to all $L^1$. | Keeps endpoint visible. | literature-derived | not-applicable | External records 4 and 6. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-fourier-partial-sum-operators-and-uniform-boundedness` (example) — use $\|S_N\|\to\infty$ to obtain a residual set of continuous functions with unbounded partial sums at zero. | Reuses FA-reserved id and strengthens intuition. | literature-derived | ai-altered | L ch. 8/Banach–Steinhaus. |
| 2 | `rem-continuous-fourier-series-need-not-converge-everywhere` (remark, `proved_here: false`) — record the sourced existence of a continuous function whose Fourier series fails at a point, without claiming divergence a.e. | Separates continuous point failure from Kolmogorov without hiding the du Bois--Reymond construction. | literature-derived | not-supplied | du Bois-Reymond; leaf only. |
| 3 | `rem-lone-fourier-series-can-diverge-almost-everywhere` (remark, `proved_here: false`) — companion pointer to the recorded Kolmogorov theorem. | Endpoint leaf. | literature-derived | not-supplied | G §4.2.1. |
| 4 | `cex-carleson-maximal-operator-is-not-strong-type-one-one` (counterexample) — strong $L^1$ boundedness would contradict the sourced endpoint behaviour. | Prevents endpoint interpolation error. | literature-derived | ai-altered | Kolmogorov plus maximal convergence principle. |

**Hard proof/boundary obligations.**  The du Bois-Reymond proof is supplied
because its cost is exactly the Lebesgue-constant lemma plus a published
functional-analysis theorem.  FR-4K and FR-4C carry the deep Kolmogorov and
Carleson--Hunt proofs; this page's older remarks are bibliographic leaves only.
“Almost everywhere” is not strengthened to every point, and $p=1$ is excluded
from Carleson–Hunt.

## FR-6. Fourier multipliers and Sobolev characterisations

**A page:** `fourier-multipliers-and-sobolev-characterisations`
**B page:** `fourier-multipliers-and-sobolev-characterisations-examples`
**Requires:** the A pages `schwartz-space-and-the-plancherel-theorem`,
`tempered-distributions-and-the-fourier-transform`,
`weak-derivatives-and-sobolev-spaces`, and
`bessel-potential-completions-and-real-order-sobolev-spaces`, MT-17's maximal
and real-interpolation page, MT-16c A
`complex-lp-spaces-and-test-function-conventions`, and MT-CA-1 A
`complex-riesz-thorin-endpoint-interpolation`. All are strictly earlier at the repaired placement;
there is no forward reference and no B-page prerequisite.  **Sources read:**
G §2.5 and §§6.1–6.2, pp. 146–159 and 419–450; W §§3.1, 3.9, 5.3,
and 6.1–6.4, pp. 6, 12, and 19–28.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-translation-invariant-fourier-multiplier-on-schwartz-space` (definition) — for measurable $m$, set $T_mf=(m\widehat f)^\vee$ whenever the product defines a tempered distribution. | Fixes the operator without pretending every symbol acts on every $L^p$. | literature-derived | not-applicable | G §2.5/W §5.3; domain condition retained. |
| 2 | `lem-ltwo-fourier-multiplier-bound` (lemma) — $m\in L^\infty$ gives $\|T_mf\|_2\le\|m\|_\infty\|f\|_2$, and the operator norm is the essential supremum on a non-atomic full-support frequency space. | Exact Hilbert-space baseline for every later multiplier. | literature-derived | ai-altered | Plancherel plus frequency-localised tests; the essential, not pointwise, supremum is used. |
| 3 | `def-lp-fourier-multiplier-and-multiplier-norm` (definition) — $m$ is an $L^p$ multiplier when its Schwartz-core operator has a bounded extension to $L^p$, unique for $p<\infty$. | Supplies the phrase used by every later multiplier theorem; the $p=\infty$ density caveat is explicit. | literature-derived | not-applicable | G §2.5. |
| 3 | `thm-hausdorff-young-for-periodic-fourier-coefficients` (theorem) — for $1\le p\le2$, $f\in L^p(\mathbb T)$ has $\widehat f\in\ell^{p'}(\mathbb Z)$ with $\|\widehat f\|_{p'}\le\|f\|_p$. | Supplies the interpolation estimate between absolute coefficient control and Parseval. | literature-derived | ai-altered | L ch. 13; cite MT-CA-1's repaired endpoint corollary between $L^1\to\ell^\infty$ and $L^2\to\ell^2$, with MT-16c's complex-$L^p$ conventions. |
| 4 | `thm-hausdorff-young-for-the-euclidean-fourier-transform` (theorem) — for $1\le p\le2$, $f\in L^p(\mathbb R^n)$ has an $L^{p'}$ Fourier transform with $\|\widehat f\|_{p'}\le\|f\|_p$ under the adopted normalisation. | Gives restriction and multiplier arguments their basic non-Hilbert transform estimate. | literature-derived | ai-altered | L ch. 13/G §1.3; cite MT-CA-1's repaired endpoint corollary, MT-16c, and FA's $L^1$/$L^2$ transform endpoints. |
| 5 | `def-mihlin-symbol-with-more-than-half-dimension-derivatives` (definition) — require $|\partial^\alpha m(\xi)|\le C_\alpha|\xi|^{-|\alpha|}$ for $0\le|\alpha|\le\lfloor n/2\rfloor+1$ and $\xi\ne0$. | Records one sufficient smoothness convention with the actual derivative count. | literature-derived | not-applicable | G §6.2.3/W §3.9; value at zero is immaterial. |
| 6 | `lem-weak-derivatives-are-polynomial-fourier-multipliers` (lemma) — $\widehat{D^\alpha u}(\xi)=(2\pi i\xi)^\alpha\widehat u(\xi)$ for tempered $u$. | Connects PDE weak derivatives to frequency weights. | literature-derived | ai-altered | W §5.3 and the FA tempered-transform page. |
| 7 | `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` (theorem) — for integer $k\ge0$, $W^{k,2}=H^k$ with equivalent derivative and weighted-transform norms; compare both $\langle\xi\rangle^k$ and $(1+4\pi^2|\xi|^2)^{k/2}$. | Reconciles PDE-11 and PDE-14F without changing either convention. | literature-derived | ai-altered | Plancherel, item 6, and a multinomial comparison. |
| 8 | `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` (theorem) — for real $s$, PDE-14F's $H^s$ is exactly the tempered distributions with $\langle\xi\rangle^s\widehat u\in L^2$, with its defining norm. | Imports rather than silently renormalises PDE-14F. | literature-derived | ai-altered | PDE-14F's weighted-distribution theorem. |
| 9 | `def-japanese-bracket-bessel-potential-operator` (definition) — define $\langle D\rangle^t$ by symbol $\langle\xi\rangle^t$ and record separately the $(1+4\pi^2|\xi|^2)^{t/2}$ symbol of $(I-\Delta)^{t/2}$. | Prevents the former false isometry caused by conflating normalisations. | literature-derived | not-applicable | Direct convention audit. |
| 10 | `lem-bessel-potentials-shift-sobolev-order-isometrically` (lemma) — $\langle D\rangle^t:H^s\to H^{s-t}$ is isometric; $(I-\Delta)^{t/2}$ is only an equivalent-norm isomorphism under PDE-14F's norm. | Correct structural shift. | literature-derived | ai-altered | Items 8--9. |
| 11 | `cor-sobolev-duality-from-the-fourier-pairing` (corollary) — the conjugate dual of complex $H^s$ is $H^{-s}$ under an explicitly stated distribution pairing. | Removes the bilinear/sesquilinear ambiguity. | literature-derived | ai-altered | Weighted Riesz representation. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-heat-and-poisson-semigroups-as-fourier-multipliers` (example) — compute symbols $e^{-4\pi^2t|\xi|^2}$ and $e^{-2\pi t|\xi|}$. | Checks constants and semigroup composition. | literature-derived | ai-altered | W ch. 3; leaf. |
| 2 | `ex-translation-and-differentiation-multiplier-symbols` (example) — translation has symbol $e^{-2\pi ia\cdot\xi}$ and differentiation has $2\pi i\xi_j$. | Distinguishes bounded and unbounded symbols. | ai-generated | ai-generated | Direct transform checks; leaf. |
| 3 | `rem-fefferman-ball-multiplier-obstruction` (remark, `proved_here: false`) — in $n\ge2$, the ball indicator is not an $L^p$ multiplier for $p\ne2$. | Honest record of the deep obstruction. | literature-derived | not-supplied | G §6.1.4 and Fefferman's primary citation. |
| 4 | `rem-jump-multipliers-can-be-bounded-outside-mihlin` (remark, `proved_here: false`) — the signum multiplier fails Mihlin smoothness, while FR-8 later proves its $L^p$ bound. | Orientation-only forward reference, never a dependency. | literature-derived | not-supplied | W §3.1. |
| 5 | `ex-negative-sobolev-order-containing-a-dirac-mass` (example) — $\delta_0\in H^s(\mathbb R^n)$ exactly when $s<-n/2$. | Tests distribution membership and the strict endpoint. | literature-derived | ai-altered | One radial integral; no dependency target. |

**Hard proof/boundary obligations.**  The multiplier value on the null set
$\{0\}$ is never used.  Item 2 is an $L^2$ statement only; the Mihlin
$1<p<\infty$ theorem is proved later on FR-8 after its singular-integral
machinery, so no forward result is used here.  Hausdorff–Young has
$1\le p\le2$ and is not reversed past $2$.  Fractional $H^s$ elements are
tempered distributions, not initially
functions, and the $s=-n/2$ Dirac endpoint diverges logarithmically.

## FR-7. Hilbert and Riesz transforms

**A page:** `hilbert-and-riesz-transforms`
**B page:** `hilbert-and-riesz-transforms-examples`
**Requires:** the FR-1 and FR-6 A pages, the FA Plancherel/tempered-transform
pages, and the repaired MT-CA-1 endpoint interpolation theorem. Generic weak $(1,1)$, real-line
$L^p$ boundedness, and the BMO endpoint occur later and are orientation-only
forward references.  **Sources
read:** L chs. 10–12 and 20–21, pp. 57–70 and 113–126; G §5.1,
pp. 313–329.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-conjugate-function-on-the-circle` (definition) — on trigonometric polynomials set $\widetilde f\,\widehat{}(k)=-i\operatorname{sgn}(k)\widehat f(k)$, with zero mode killed. | Establishes the periodic operator before singular kernels. | literature-derived | not-applicable | L ch. 10. |
| 2 | `lem-conjugate-dirichlet-kernel-and-principal-value-formula` (lemma) — symmetric truncation of the cotangent kernel gives the conjugate partial sums. | Derives, rather than asserts, the periodic principal value. | literature-derived | ai-altered | L ch. 10/G §5.1.3; cancellation at the origin is explicit. |
| 3 | `thm-marcel-riesz-conjugate-function-theorem` (theorem) — the circle conjugate operator extends boundedly to $L^p(\mathbb T)$ exactly in the strict range $1<p<\infty$. | Classical Riesz result requested by the dispatch. | literature-derived | ai-altered | L ch. 12; analytic-function proof with the repaired Riesz–Thorin theorem cited from MT-CA-1. |
| 4 | `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp` (lemma) — for each strict $1<p<\infty$, $\sup_N\|S_N\|_{L^p(\mathbb T)\to L^p(\mathbb T)}<\infty$. | Converts the conjugate-function theorem into the operator estimate that norm convergence needs. | literature-derived | ai-altered | G §§4.1.1–4.1.2/L ch. 9; express interval projections through modulations and the conjugate operator. |
| 5 | `thm-fourier-partial-sums-converge-in-periodic-lp` (theorem) — $S_Nf\to f$ in $L^p(\mathbb T)$ for every $f\in L^p$ exactly in the strict range $1<p<\infty$. | Completes the classical norm-convergence theory and records both endpoint exclusions. | literature-derived | ai-altered | Item 4 plus trigonometric-polynomial density; FR-1's Lebesgue constants rule out uniform endpoint bounds. |
| 6 | `def-truncated-hilbert-transform-and-principal-value` (definition) — $H_\varepsilon f(x)=\pi^{-1}\int_{|x-y|>\varepsilon}f(y)/(x-y)\,dy$ and $Hf=\lim_{\varepsilon\downarrow0}H_\varepsilon f$ where the limit exists. | Separates truncations, pointwise limits, and bounded extensions. | literature-derived | not-applicable | L ch. 20/G §5.1.1. |
| 7 | `lem-hilbert-transform-has-signum-fourier-multiplier` (lemma) — on $\mathcal S$, $\widehat{Hf}(\xi)=-i\operatorname{sgn}(\xi)\widehat f(\xi)$. | Supplies $L^2$ control and all algebraic identities. | literature-derived | ai-altered | L/G; distribution transform and $2\pi$ convention checked. |
| 8 | `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity` (corollary) — $\|Hf\|_2=\|f\|_2$ and $H^2f=-f$ on $L^2(\mathbb R)$. | Hilbert-space seed for singular-integral arguments. | literature-derived | ai-altered | Plancherel plus item 7; a singleton frequency is null on $\mathbb R$. |
| 9 | `lem-hilbert-transform-is-skew-adjoint-on-ltwo` (lemma) — $\langle Hf,g\rangle=-\langle f,Hg\rangle$. | Powers duality and $H^1$–BMO pairings. | literature-derived | ai-altered | Multiplier conjugation; complex inner-product convention declared. |
| 11 | `def-riesz-transforms-on-euclidean-space` (definition) — $R_j$ has multiplier $-i\xi_j/|\xi|$ for $\xi\ne0$ and kernel $c_nx_j/|x|^{n+1}$ in principal value. | Higher-dimensional analogue used in PDE and Hardy theory. | literature-derived | not-applicable | G §5.1.4; null-set value fixed as zero. |
| 12 | `cor-riesz-transforms-are-ltwo-bounded` (corollary) — each $R_j$ is an $L^2$ contraction and $\sum_jR_j^2=-I$. | Supplies FR-8's $L^2$ hypothesis. | literature-derived | ai-altered | Plancherel. |
| 13 | `lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds` (lemma) — state the raw size, first-difference, and zero-spherical-mean estimates. | Verifies FR-8 without using terminology defined only there. | literature-derived | ai-altered | G §5.1.4. |
| 14 | `rem-hilbert-and-riesz-transform-endpoint-map` (remark) — FR-8 proves weak $L^1$, strict-range $L^p$, and a.e. truncation results; FR-9/FR-10 prove the Hardy/BMO endpoints. | Non-load-bearing roadmap only. | literature-derived | not-applicable | Later ids appear only in `forward_refs`. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-hilbert-transform-of-an-interval-indicator` (example) — $H1_{(0,1)}(x)=\pi^{-1}\log|x/(x-1)|$ a.e. off the endpoints. | One computation witnesses both endpoint failures. | literature-derived | ai-altered | G §5.1.1; truncate before integrating. |
| 2 | `cex-hilbert-transform-is-not-strong-type-one-one` (counterexample) — the logarithmic interval transform has a nonintegrable $1/|x|$ tail. | Exact lower endpoint obstruction. | literature-derived | ai-altered | Item 1 asymptotics. |
| 3 | `cex-hilbert-transform-does-not-map-linfinity-to-linfinity` (counterexample) — the interval transform is unbounded logarithmically at $0$ and $1$. | Exact upper endpoint obstruction. | literature-derived | ai-altered | Item 1 local asymptotics. |
| 4 | `ex-hilbert-transform-of-the-poisson-kernel` (example) — compute the conjugate Poisson kernel by its multiplier. | Links circle/line harmonic conjugacy. | literature-derived | ai-altered | L chs. 11, 20. |
| 5 | `ex-riesz-transforms-square-to-minus-the-identity-in-sum` (example) — $\sum_{j=1}^nR_j^2=-I$ on $L^2$. | Checks signs and the origin convention. | literature-derived | ai-altered | Finite multiplier identity; leaf. |

**Hard proof/boundary obligations.**  Principal value existence is not built
into the definition; the bounded $L^p$ extension and a.e. convergence of
truncations are distinguished.  The line has no zero-mode exception in
$L^2$, whereas the circle operator kills constants.  Periodic partial-sum
convergence has the strict range $1<p<\infty$; its two endpoint failures are
not blurred into the transform endpoint map.  The interval counterexamples
are actual failures of strong transform mapping, not failures of weak $(1,1)$
or BMO bounds.

## FR-8. Calderón–Zygmund decomposition and singular integrals

**A page:** `calderon-zygmund-decomposition-and-singular-integrals`
**B page:** `calderon-zygmund-decomposition-and-singular-integrals-examples`
**Requires:** the FR-6 and FR-7 A pages, MT-17
`the-maximal-function-and-lebesgue-differentiation` (including
`thm-marcinkiewicz-interpolation`), and FA duality.  **Sources read:** TaoA
note 3 §4, pp. 20–24, and note 4 §2, pp. 4–10; G §§5.2–5.4,
pp. 333–384; W §§3.3–3.9, pp. 7–12.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-calderon-zygmund-kernel-and-principal-value-operator` (definition) — a kernel off the diagonal obeys size and integral Hörmander cancellation bounds, while $T$ is separately assumed $L^2$ bounded and represented off support. | Transferred exact PDE-19 id; avoids assuming principal values exist merely from kernel bounds. | literature-derived | not-applicable | TaoA note 2/G §5.3.2; integral regularity is the adopted base convention. |
| 2 | `def-standard-holder-calderon-zygmund-kernel` (definition) — pointwise $\delta$-Hölder difference estimates supplement the size bound. | Names the stronger common hypothesis and implies item 1's Hörmander bound. | literature-derived | not-applicable | G §§5.3.2, 5.4.1/K ch. 4. |
| 3 | `lem-maximal-dyadic-cubes-at-height-lambda` (lemma) — for $f\in L^1$ and $\lambda>0$, the maximal dyadic cubes with average above $\lambda$ are disjoint, cover the dyadic maximal superlevel set, and have average at most $2^n\lambda$. | Isolates the countable stopping-time selection and its boundary constant. | literature-derived | ai-altered | TaoA note 2/K ch. 3. |
| 4 | `lem-calderon-zygmund-decomposition-at-height-lambda` (lemma) — write $f=g+\sum_Qb_Q$ with $|g|\le2^n\lambda$, disjoint bad cubes, $\int b_Q=0$, and the standard $L^1/L^2$ controls. | Transferred exact PDE-19 id; supplies reusable decomposition data. | literature-derived | ai-altered | TaoA/K; item 3 plus conditional averages. |
| 5 | `lem-cz-good-part-has-controlled-ltwo-image` (lemma) — $L^2$ boundedness gives $|\{|Tg|>\lambda/2\}|\lesssim\lambda^{-1}\|f\|_1$. | First half of the weak endpoint proof. | literature-derived | ai-altered | G/TaoA; Chebyshev and the $g$ bounds. |
| 6 | `lem-cz-bad-part-is-integrable-away-from-expanded-cubes` (lemma) — cancellation and the Hörmander condition give $\int_{(3Q)^c}|Tb_Q|\lesssim\|b_Q\|_1$. | The singular-integral heart of the weak endpoint. | literature-derived | ai-altered | G/TaoA; subtract the kernel at the cube centre. |
| 7 | `thm-calderon-zygmund-operator-has-weak-type-one-one` (theorem) — $\sup_{\lambda>0}\lambda|\{|Tf|>\lambda\}|\lesssim\|f\|_1$. | Transferred PDE addendum id; combines the two genuinely different pieces. | literature-derived | ai-altered | Items 4–6, including the measure of enlarged cubes. |
| 8 | `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality` (lemma) — weak $(1,1)$ plus strong $(2,2)$ gives $1<p\le2$, while the adjoint gives $2<p<\infty$. | Transferred exact PDE addendum id; exposes both logical moves. | literature-derived | ai-altered | MT-17 Marcinkiewicz plus FA duality. |
| 9 | `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp` (theorem) — an $L^2$-bounded CZ operator is bounded on $L^p$ for every strict $1<p<\infty$. | Transferred exact PDE-19 id and generic consumer theorem. | literature-derived | ai-altered | Item 8; operator extension from the dense core is made explicit. |
| 10 | `def-maximal-truncated-singular-integral` (definition) — $T^*f(x)=\sup_{\varepsilon>0}|T_\varepsilon f(x)|$. | Separates uniform truncation control from $Tf$. | literature-derived | not-applicable | G §5.3/K ch. 4. |
| 11 | `lem-cotlar-inequality-for-maximal-truncations` (lemma) — for a standard kernel, $T^*f$ is pointwise controlled by maximal functions of $Tf$ and $f$ with an admissible exponent. | Reduces truncations to already owned maximal estimates. | literature-derived | ai-altered | G §5.3/K ch. 4; precise exponent $0<\delta<1$ retained in authoring. |
| 12 | `thm-maximal-truncations-are-weak-one-one-and-strong-lp` (theorem) — $T^*$ is weak $(1,1)$ and bounded on $L^p$, $1<p<\infty$, under the standard-kernel hypotheses. | Delivers a.e. principal-value existence on the correct domain. | literature-derived | ai-altered | G/K; density plus Cotlar and weak estimates. |
| 13 | `cor-principal-value-truncations-converge-almost-everywhere` (corollary) — if they converge on a dense smooth class, then $T_\varepsilon f$ converges a.e. for $f\in L^p$, $1\le p<\infty$, with $p=1$ interpreted through the sourced weak maximal estimate. | Closes the definition/extension gap. | literature-derived | ai-altered | Banach principle; $p=1$ hypothesis not inferred without item 12. |
| 14 | `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity` (remark) — the generic endpoint targets are $L^1\to L^{1,\infty}$ and $L^\infty\to\mathrm{BMO}$. | Transferred exact PDE addendum id and pointer to FR-10. | literature-derived | not-supplied | G/K; upper endpoint proved later. |
| 15 | `cor-hilbert-transform-is-bounded-on-lp` (corollary) — $H$ extends boundedly on $L^p(\mathbb R)$ for $1<p<\infty$. | Relocated from FR-7 so the proof is acyclic. | literature-derived | ai-altered | FR-7's $L^2$ result and items 7--9. |
| 16 | `cor-riesz-transforms-are-bounded-on-lp` (corollary) — each $R_j$ is bounded on $L^p(\mathbb R^n)$ for $1<p<\infty$. | Relocated from FR-7 so the proof is acyclic. | literature-derived | ai-altered | FR-7's kernel/$L^2$ results and items 7--9. |
| 17 | `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control` (lemma) — localized inverse transforms obey scale-uniform $L^1$ and integrated first-difference estimates. | Matches the adopted weak-type kernel hypothesis. | literature-derived | ai-altered | G §6.2.3; Plancherel and weighted annular estimates. |
| 18 | `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation` (lemma) — the pieces converge distributionally and give the kernel formula away from the support of a test function. | Closes the missing passage from dyadic estimates to a CZ operator. | literature-derived | ai-altered | G §6.2.3/W §3.9. |
| 19 | `thm-mihlin-fourier-multiplier-theorem` (theorem) — an FR-6 Mihlin symbol defines a bounded operator on $L^p(\mathbb R^n)$ for $1<p<\infty$. | Main reusable smooth-multiplier criterion. | literature-derived | ai-altered | FR-6's $L^2$ bound, items 17--18, and items 7--9. |
| 20 | `rem-mihlin-does-not-assert-strong-endpoint-bounds` (remark) — the theorem makes no general $L^1$ or $L^\infty$ claim. | Stops endpoint overreach. | literature-derived | not-applicable | G §6.2.3. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-calderon-zygmund-decomposition-of-an-interval-indicator` (example) — determine the selected dyadic intervals for a fixed grid and height. | Finite verification of maximality and the $2^n$ bound. | ai-generated | ai-generated | Leaf only. |
| 2 | `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` (example) — verify size, first differences, and spherical cancellation for $x_j/|x|^{n+1}$. | Connects FR-7 to the generic theorem. | literature-derived | ai-altered | G §5.2. |
| 3 | `cex-calderon-zygmund-strong-lone-bound-fails` (counterexample) — the Hilbert transform of an interval is not integrable. | Transferred exact PDE-19 id. | literature-derived | ai-altered | FR-7 explicit formula. |
| 4 | `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity` (counterexample) — recompute the interval transform locally and show it is unbounded. | Transferred exact PDE addendum id without a dependency on FR-7's B page or a forward BMO claim. | literature-derived | ai-altered | Direct truncated integral; the later BMO theorem is mentioned only in prose. |
| 5 | `cex-size-without-cancellation-does-not-give-a-principal-value-operator` (counterexample) — the positive kernel $|x|^{-n}$ has logarithmically divergent symmetric truncations. | Shows why cancellation is structural. | ai-altered | ai-altered | Direct annular integral; leaf. |
| 6 | `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` (example) — remove the local delta term and verify the Hessian kernel hypotheses. | Provides PDE-19's backward citation interface. | literature-derived | ai-altered | G §5.2/PDE source architecture. |

**Hard proof/boundary obligations.**  The decomposition is only invoked for
$\lambda>0$ and $f\in L^1$; $f=0$ yields the empty cube family.  The bad
pieces have actual zero integral.  Kernel estimates alone do not imply
$L^2$ boundedness, and the page states it separately.  Item 13 distinguishes
weak endpoint control from strong $L^1$ boundedness.  The stronger pointwise
kernel regularity is not silently substituted for the adopted Hörmander
definition.  The Mihlin application uses the FR-6 symbol definition and the
already proved items on this page; it makes no endpoint claim.

## FR-9. Real Hardy spaces: maximal functions and atoms

**A page:** `real-hardy-spaces-maximal-functions-and-atoms`
**B page:** `real-hardy-spaces-maximal-functions-and-atoms-examples`
**Requires:** the FR-7 and FR-8 A pages, the FA distribution pages, and MT-17's
Hardy–Littlewood maximal theorem.  “Maximal” here means smooth radial or grand
maximal characterisations of a distribution, not a duplicate definition of
the measure-owned Hardy–Littlewood operator.  **Sources read:** W §§6.2 and
7.6, pp. 24–26 and 40–47; Wa ch. I §1.1, printed pp. 2–13; H ch. I §1.1,
pp. 1–6.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution` (definition) — for a normalised Schwartz approximate identity $\phi_t$, define $M_\phi^0f=\sup_{t>0}|f*\phi_t|$ and the aperture-one nontangential supremum. | Makes convolution with a distribution well defined before defining $H^p$. | literature-derived | not-applicable | Wa §1.1/W §7.6. |
| 2 | `def-real-hardy-space-by-a-radial-maximal-function` (definition) — for $0<p<\infty$, $H^p(\mathbb R^n)$ consists of $f\in\mathcal S'$ with $M_\phi^0f\in L^p$. | Fixes the real-variable meaning and includes the quasi-Banach range. | literature-derived | not-applicable | Wa/H §1.1; one admissible $\phi$ is fixed. |
| 3 | `def-grand-maximal-test-class-of-order-n` (definition) — fix the finite Schwartz-seminorm test family, with order $N>N(p,n)$, and define the grand maximal function. | Supplies the object and the dependence on $p,n$ formerly hidden in item 4. | literature-derived | not-applicable | Wa/H §1.1. |
| 4 | `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions` (lemma) — the order-$N$ test family dominates all fixed admissible maximal functions, with aperture constants. | Hard direction of independence from the test kernel. | literature-derived | ai-altered | Wa/H §1.1; Taylor expansion and annular summation. |
| 4 | `thm-maximal-function-characterisations-of-real-hardy-spaces` (theorem) — radial, nontangential, and grand maximal definitions give equivalent $H^p$ quasi-norms for $0<p<\infty$ with the stated test-family order. | Shows the space does not depend on an arbitrary kernel. | literature-derived | ai-altered | Wa/H §1.1; item 3 plus reproducing formula. |
| 5 | `cor-real-hardy-space-equals-lp-for-p-greater-than-one` (corollary) — $H^p(\mathbb R^n)=L^p(\mathbb R^n)$ with equivalent norms for $1<p<\infty$. | Locates exactly where the new scale differs from $L^p$. | literature-derived | ai-altered | MT-17 maximal theorem and approximation to the identity. |
| 6 | `def-hp-atom-with-moment-order` (definition) — a $(p,\infty,s)$ atom is supported on a cube, bounded by $|Q|^{-1/p}$, and has moments through $s\ge\lfloor n(1/p-1)\rfloor$ equal to zero. | Includes the cancellation needed at every $0<p\le1$. | literature-derived | not-applicable | Wa §1.1; W §7.6 at $p=1$. |
| 7 | `lem-an-hp-atom-has-uniform-hp-quasinorm` (lemma) — every such atom has $H^p$ quasi-norm bounded independently of its cube. | Atomic synthesis input. | literature-derived | ai-altered | Wa §1.1; near region by maximal bounds, far region by moment Taylor remainder. |
| 8 | `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` (lemma) — if $\sum|\lambda_j|^p<\infty$, then $\sum\lambda_ja_j$ converges in $\mathcal S'$ and belongs to $H^p$. | Handles the quasi-triangle and convergence steps explicitly. | literature-derived | ai-altered | Wa/H; no pointwise-series assertion. |
| 9 | `lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space` (lemma) — decompose a proper open set into countably many dyadic cubes with disjoint interiors, controlled distance to the complement, and bounded overlap after fixed enlargement. | Supplies the geometric construction used by the atomic proof. | literature-derived | literature-derived | Wa/H; explicit dyadic maximal-cube construction. |
| 10 | `lem-local-polynomial-projections-match-moments-through-order-s` (lemma) — on each Whitney cube project a distributional piece onto the finite-dimensional polynomial space so the remainder has the required moments. | Closes the higher-moment step for $p<1$. | literature-derived | ai-altered | Wa §1.1; finite-dimensional Gram matrix. |
| 11 | `lem-calderon-reproducing-formula-for-the-hardy-decomposition` (lemma) — construct the smooth reproducing pair and prove convergence in $\mathcal S'$ before decomposing levels. | Prevents the hard atomic direction from borrowing FR-11's later reproducing formula. | literature-derived | literature-derived | Wa/H §1.1. |
| 12 | `lem-hardy-calderon-zygmund-level-decomposition-produces-atoms` (lemma) — grand-maximal superlevel sets, items 9--11, and polynomial cancellation produce atoms with an $\ell^p$ coefficient bound. | Exposes the complete stopping/Whitney engine. | literature-derived | ai-altered | Wa §1.1; W §7.6 for $p=1$. |
| 13 | `thm-atomic-characterisation-of-real-hp` (theorem) — for $0<p\le1$, $f\in H^p$ iff it has an atomic representation with coefficients in $\ell^p$, and the infimum coefficient quasi-norm is equivalent to $\|f\|_{H^p}$. | Central dependency for Hardy-space operators and duality. | literature-derived | ai-altered | Atomic synthesis plus item 12. |
| 11 | `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range` (corollary) — when an $H^p$ distribution and the relevant monomial products are integrable, its moments through $\lfloor n(1/p-1)\rfloor$ vanish. | Records cancellation without assigning undefined moments to every distribution. | literature-derived | ai-altered | Atomic approximation; integrability hypothesis explicit. |
| 15 | `rem-riesz-transform-characterisation-of-real-hone` (remark, `proved_here: false`) — record that $f\in H^1$ iff $f,R_1f,\dots,R_nf\in L^1$, with equivalent norms. | Honest record of the substantial harmonic-extension theorem; no later proof depends on it. | literature-derived | not-supplied | W §§6.2, 7.6/H §1.1. |
| 13 | `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation` (theorem) — a standard CZ operator bounded on $L^2$ maps $H^1$ to $L^1$ when its atom images have the sourced cancellation control. | Usable lower-endpoint replacement for strong $L^1$. | literature-derived | ai-altered | W §7.6; prove on atoms then extend. |
| 14 | `rem-real-hp-is-quasi-banach-below-one` (remark) — for $0<p<1$ the natural functional is a quasi-norm and no Banach-duality claim is made. | Prevents importing Banach arguments below one. | literature-derived | not-applicable | Wa §1.1. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-a-normalised-mean-zero-hone-atom` (example) — normalise the difference of the two half-cube indicators. | Checks support, size, and cancellation. | ai-generated | ai-generated | Finite computation; leaf. |
| 2 | `cex-a-normalised-cube-indicator-is-not-a-hone-atom` (counterexample) — it has nonzero integral despite the correct support and size. | Shows cancellation is independent of normalisation. | ai-generated | ai-generated | Leaf. |
| 3 | `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone` (counterexample) — any compactly supported $L^1$ function of nonzero mean fails the $H^1$ cancellation condition. | Shows $H^1\subsetneq L^1$. | literature-derived | ai-altered | Item 11 at $p=1$; leaf only. |
| 4 | `ex-hilbert-transform-of-a-hone-atom-is-integrable` (example) — split near/far regions and use zero mean in the far integral. | Finite model of item 13. | literature-derived | ai-altered | W §7.6 atomic estimate. |
| 5 | `cex-an-hone-atom-need-not-be-smooth` (counterexample) — the half-cube atom is discontinuous. | Prevents confusing atomic cancellation with regularity. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  Atoms use nonempty finite cubes; a zero
coefficient may simply be omitted.  The moment order changes at the exact
integer thresholds of $n(1/p-1)$.  Atomic sums converge in $\mathcal S'$;
pointwise or $L^1$ convergence is asserted only when the source proves it.
The $p=1$ case is Banach, the $p<1$ cases are not.

## FR-10. BMO, John–Nirenberg, and $H^1$ duality

**A page:** `bmo-john-nirenberg-and-h1-duality`
**B page:** `bmo-john-nirenberg-and-h1-duality-examples`
**Requires:** the FR-8 and FR-9 A pages, MT-17, FA Hahn--Banach, Hilbert Riesz
representation, and $L^p$ duality; no companion page is a prerequisite.
**Sources read:** W ch. 7, pp. 29–47; K ch. 3, pp. 34–64; TaoA note 4
§3, pp. 10–14; UW lectures 18 and 20–22, 27 PDF pages.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-bmo-seminorm-and-quotient-by-constants` (definition) — $\|b\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|b-b_Q|$, and BMO is the quotient of locally integrable functions by constants. | Makes the zero-seminorm issue explicit. | literature-derived | not-applicable | W §7.1/K §3.1. |
| 2 | `lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically` (lemma) — $|b_Q-b_R|\lesssim(1+\log(\ell(R)/\ell(Q)))\|b\|_{\mathrm{BMO}}$ for nested cubes. | Basic scale-control tool. | literature-derived | ai-altered | K §3.1/W §7.1; telescope dyadic dilates. |
| 3 | `lem-john-nirenberg-stopping-cubes-have-geometric-decay` (lemma) — iterated maximal subcubes capture the large-oscillation set with a fixed fractional loss per generation. | Isolates the stopping-time engine. | literature-derived | ai-altered | K §3.3/UW lecture 18. |
| 4 | `thm-john-nirenberg-exponential-inequality` (theorem) — $|\{x\in Q:|b-b_Q|>\lambda\}|\le C|Q|e^{-c\lambda/\|b\|_{\mathrm{BMO}}}$ for every cube and $\lambda>0$. | Required quantitative self-improvement. | literature-derived | ai-altered | K §3.3/W §7.1/TaoA note 4 §3; zero-seminorm case separated. |
| 5 | `cor-bmo-lp-oscillation-norms-are-equivalent` (corollary) — replacing mean oscillation by any finite $L^q$ oscillation, $1\le q<\infty$, gives an equivalent BMO seminorm. | Converts exponential tails to usable integral bounds. | literature-derived | ai-altered | Layer-cake integration of item 4 and Hölder for the reverse direction. |
| 6 | `cor-linfinity-embeds-properly-into-bmo` (corollary) — $L^\infty$ maps continuously into BMO modulo constants, and the inclusion is strict. | Places the upper endpoint exactly. | literature-derived | ai-altered | Definition; strict witness appears on B. |
| 7 | `lem-bmo-functions-pair-uniformly-with-hone-atoms` (lemma) — $|\int ab|\lesssim\|b\|_{\mathrm{BMO}}$ for every $H^1$ atom $a$. | Defines the easy half of duality using cancellation. | literature-derived | ai-altered | W §7.7/UW; subtract $b_Q$. |
| 8 | `thm-bmo-defines-a-bounded-functional-on-hone` (theorem) — atomic pairing extends to a bounded functional with norm controlled by the BMO seminorm. | Establishes the canonical map BMO/constants $\to(H^1)^*$. | literature-derived | ai-altered | FR-9 finite atomic density plus item 7. |
| 9 | `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` (lemma) — a mean-zero $L^2$ function supported in $Q$ has $H^1$ norm at most $C|Q|^{1/2}\|f\|_2$. | Licenses restriction of a functional before Riesz representation. | literature-derived | ai-altered | Normalize the function into $H^1$ atoms by level decomposition. |
| 10 | `lem-hone-functional-has-compatible-local-ltwo-representatives` (lemma) — item 9 and Hilbert Riesz representation give local representatives differing by constants on nested cubes. | Exposes the representation/gluing step. | literature-derived | ai-altered | W §7.7/UW lecture 20. |
| 11 | `lem-the-dual-representative-has-uniform-bmo-oscillation` (lemma) — an $L^2$ normalized mean-zero oscillation test bounds the representative's mean oscillation by the functional norm. | Hard estimate in the converse direction. | literature-derived | ai-altered | Items 9--10; no unjustified bounded test. |
| 11 | `thm-real-hone-bmo-duality` (theorem) — every bounded functional on $H^1(\mathbb R^n)$ is pairing with a unique BMO class, with equivalent norms. | Required endpoint duality theorem. | literature-derived | ai-altered | Items 8–10; constants and nonunique representatives handled. |
| 12 | `thm-calderon-zygmund-operators-map-linfinity-to-bmo` (theorem) — a standard $L^2$-bounded CZ operator has a well-defined BMO-class extension on $L^\infty$ under the sourced cancellation convention. | Correct generic upper endpoint. | literature-derived | ai-altered | W §7.2/TaoA note 4 §3; local/far decomposition, defined modulo constants. |
| 13 | `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo` (corollary) — FR-7 transforms satisfy item 12. | Closes the endpoint map promised on FR-7. | literature-derived | ai-altered | FR-7 kernel checks plus item 12. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-logarithm-is-in-bmo-but-not-linfinity` (example) — $\log|x|$ belongs to $\mathrm{BMO}(\mathbb R^n)$ modulo its value at zero but is unbounded. | Proves strictness in item 6. | literature-derived | ai-altered | W/K; split cubes by distance to zero and scale. |
| 2 | `ex-bmo-seminorm-is-unchanged-by-adding-a-constant` (example) — $(b+c)_Q=b_Q+c$. | Checks the quotient convention. | ai-generated | ai-generated | Leaf. |
| 3 | `cex-bmo-functions-need-not-be-globally-integrable` (counterexample) — $\log|x|$ is not in $L^1(\mathbb R^n)$. | Prevents an invalid global pairing integral. | ai-altered | ai-altered | Direct radial tails; pairings use atoms/regularisation. |
| 4 | `ex-john-nirenberg-tail-integration` (example) — integrate an exponential distribution bound to recover every finite oscillation moment. | Verifies item 5 mechanically. | ai-generated | ai-generated | Layer-cake leaf. |
| 5 | `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` (remark, `proved_here: false`) — record the sourced strict distinction. | Prevents confusing a proof device with the adopted space without presenting an unproved counterexample as proved. | literature-derived | not-supplied | UW dyadic discussion. |

**Hard proof/boundary obligations.**  If $\|b\|_{\mathrm{BMO}}=0$, John–Nirenberg
is interpreted through an a.e. constant representative rather than division
by zero.  The dual is BMO modulo constants.  Pairings with a general BMO
function are first defined on finite atoms; an unjustified global Lebesgue
integral is never used.  The $L^\infty$ extension of a singular integral is
also a BMO class, not a canonically normalised function.

## FR-11. Littlewood–Paley theory and square functions

**A page:** `littlewood-paley-theory-and-square-functions`
**B page:** `littlewood-paley-theory-and-square-functions-examples`
**Requires:** the FR-4, FR-6, FR-8, FR-9, and FR-10 A pages, FA Plancherel,
and MT-17 interpolation.  FR-4 supplies the actual Khintchine theorem.
**Sources read:** TaoA note 4 §5, pp. 20–24; G §6.1, pp. 419–437; W
ch. 5, pp. 15–22.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition` (lemma) — construct radial cutoffs and verify the telescoping identity, support, and bounded overlap. | Proves that the partition being chosen exists. | literature-derived | ai-altered | TaoA note 4 §5/W ch. 5. |
| 2 | `def-inhomogeneous-dyadic-frequency-partition` (definition) — fix the functions from item 1 and define $\Delta_j$. | Fixes low frequency and avoids a hidden polynomial quotient. | literature-derived | not-applicable | Item 1. |
| 2 | `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds` (lemma) — $\Delta_j$ is convolution with a rescaled Schwartz kernel of mean zero for $j\ge1$. | Supplies scale, cancellation, and almost-orthogonality. | literature-derived | ai-altered | TaoA/W. |
| 3 | `lem-ltwo-almost-orthogonality-of-dyadic-pieces` (lemma) — bounded overlap gives $\|f\|_2^2\asymp\sum_{j\ge0}\|\Delta_jf\|_2^2$. | Transparent Hilbert-space square-function seed. | literature-derived | ai-altered | Plancherel and finite annular overlap. |
| 4 | `def-littlewood-paley-square-function` (definition) — $Sf=(\sum_{j\ge0}|\Delta_jf|^2)^{1/2}$. | Names the nonlinear observable. | literature-derived | not-applicable | G §6.1/W ch. 5. |
| 5 | `lem-rademacher-randomisation-converts-square-functions-to-multipliers` (lemma) — Khintchine inequalities compare $Sf$ to random signed sums $\sum\varepsilon_j\Delta_jf$. | Splits the standard vector-valued proof. | literature-derived | ai-altered | TaoA note 4 §5/G §6.1. |
| 6 | `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` (lemma) — every finite sign choice has an $L^p$ multiplier norm uniform in the signs and truncation. | Supplies the upper square-function estimate. | literature-derived | ai-altered | Annular support plus FR-6 Mihlin theorem. |
| 8 | `lem-littlewood-paley-reproducing-formula-in-tempered-distributions` (lemma) — a companion partition $\widetilde\Delta_j$ gives $f=\sum_j\widetilde\Delta_j\Delta_jf$ in $\mathcal S'$ for the inhomogeneous decomposition. | Makes the reverse inequality and convergence legitimate. | literature-derived | ai-altered | TaoA/W; low-frequency term included. |
| 9 | `thm-littlewood-paley-square-function-equivalence-on-lp` (theorem) — for $1<p<\infty$, $\|Sf\|_p\asymp_p\|f\|_p$. | Central LP theorem with strict endpoints. | literature-derived | ai-altered | Khintchine and FR-8 Mihlin for one side; item 8 and duality for the reverse. |
| 9 | `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` (corollary) — two admissible smooth inhomogeneous partitions give equivalent square-function norms for $1<p<\infty$. | Removes dependence on the cutoff. | literature-derived | ai-altered | Almost-orthogonality between the two partitions. |
| 10 | `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` (theorem) — $\|f\|_{H^s}^2\asymp\sum_{j\ge0}2^{2js}\|\Delta_jf\|_2^2$. | Frequency-local version of FR-6's Fourier weight. | literature-derived | ai-altered | W chs. 5–6/TaoA; compare weight on each annulus. |
| 12 | `def-lusin-area-function-for-a-fixed-admissible-kernel` (definition) — define the conical square function, including aperture and kernel cancellation. | Supplies the object in the endpoint statement. | literature-derived | not-applicable | W §§6.2, 7.6. |
| 13 | `rem-square-function-characterisation-of-real-hone` (remark, `proved_here: false`) — record the equivalence between $H^1$ and the $L^1$ Lusin-area norm. | Honest record of the tent/atomic theorem, never a dependency target. | literature-derived | not-supplied | W §§6.2, 7.6. |
| 12 | `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements` (remark) — the two-sided $L^p$ theorem is not asserted at $p=1$ or $p=\infty$. | Blocks endpoint substitution. | literature-derived | not-applicable | G/W; FR-9–FR-10 supply the replacement scales. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-square-function-of-one-frequency-localised-function` (example) — if $\widehat f$ lies where one cutoff is one, only boundedly many $\Delta_jf$ survive. | Checks overlap constants. | ai-generated | ai-generated | Leaf. |
| 2 | `ex-dyadic-square-function-of-two-separated-frequency-packets` (example) — two annular packets contribute in Euclidean square rather than absolute sum. | Visualises orthogonality. | ai-generated | ai-generated | Finite Plancherel calculation. |
| 3 | `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` (counterexample) — inverse transforms of interval/ball indicators have slow nonintegrable decay in the relevant dimensions. | Justifies smooth partitions. | literature-derived | ai-altered | G §6.1/TaoA note 4. |
| 4 | `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` (remark, `proved_here: false`) — record that the $L^\infty$ equivalence fails and BMO/Carleson control replaces it. | Honest endpoint record. | literature-derived | not-supplied | UW lecture 22/W §7.4. |
| 5 | `ex-sobolev-weight-on-a-single-dyadic-annulus` (example) — the $H^s$ norm of an annular packet is comparable to $2^{js}\|f\|_2$. | Checks the exponent and low-frequency exception. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  The inhomogeneous low-frequency block is
never assigned mean zero.  Infinite sums converge first in $\mathcal S'$ and
then in the norm supplied by the theorem.  Randomisation constants depend on
$p$ but not on the number of pieces.  No sharp-cutoff analogue is inferred
from the smooth theorem.

## FR-12. Muckenhoupt weights and weighted estimates

**A page:** `muckenhoupt-weights-and-weighted-estimates`
**B page:** `muckenhoupt-weights-and-weighted-estimates-examples`
**Requires:** the FR-8 A page, MT-14's $L^p$ spaces, MT-17's unweighted maximal theorem,
and measure-theory Radon–Nikodym facts.  **Sources read:** G §§7.1–7.4,
pp. 499–545; K chs. 4–5, pp. 65–111.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-muckenhoupt-a-p-and-a-one-weights` (definition) — for $1<p<\infty$ require $[w]_{A_p}=\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}<\infty$, while $A_1$ means $Mw\le Cw$ a.e. | Fixes positivity a.e., local integrability, and the distinct endpoint definition. | literature-derived | not-applicable | G §7.1/K ch. 5. |
| 2 | `lem-a-p-dual-weight-and-nesting-properties` (lemma) — $w\in A_p$ iff $w^{-1/(p-1)}\in A_{p'}$, and $A_p\subset A_q$ for $1\le p<q$. | Basic exponent bookkeeping for duality/interpolation. | literature-derived | ai-altered | G/K; $p=1$ treated separately. |
| 3 | `lem-a-p-weights-are-doubling` (lemma) — $w(2Q)\le C([w]_{A_p},n,p)w(Q)$. | Enables weighted covering and local arguments. | literature-derived | ai-altered | K/G; compare subsets via Hölder. |
| 4 | `lem-a-p-distribution-decay-from-maximal-cubes` (lemma) — the localized maximal-function distribution estimate iterates to a geometric tail for $w$ on a cube. | Exposes the covering step that powers reverse Hölder. | literature-derived | literature-derived | G §7.2/K ch. 5. |
| 5 | `thm-reverse-holder-self-improvement-for-a-p-weights` (theorem) — an $A_p$ weight satisfies a reverse Hölder inequality with some exponent $1+\varepsilon>1$ depending quantitatively on its characteristic. | Structural self-improvement, now locally proved. | literature-derived | literature-derived | Item 4 and layer-cake integration, with the admissible $\varepsilon$ displayed. |
| 5 | `cor-a-p-classes-are-open-in-the-exponent` (corollary) — if $1<p<\infty$ and $w\in A_p$, then $w\in A_{p-\varepsilon}$ for some $\varepsilon>0$. | Later extrapolation/interpolation input. | literature-derived | ai-altered | Item 4 plus dual-weight algebra. |
| 6 | `lem-weighted-maximal-weak-bound-for-a-one` (lemma) — $w(\{Mf>\lambda\})\lesssim\lambda^{-1}\int|f|w$ for $w\in A_1$. | Correct weighted lower endpoint. | literature-derived | ai-altered | G/K covering proof; cites, does not re-mint, the maximal definition. |
| 7 | `thm-hardy-littlewood-maximal-operator-characterises-a-p` (theorem) — for $1<p<\infty$, $M$ is bounded on $L^p(w)$ iff $w\in A_p$. | Fundamental exact characterisation. | literature-derived | ai-altered | G §7.2/K; necessity tests $w^{-1/(p-1)}1_Q$, sufficiency uses covering/self-improvement. |
| 8 | `def-muckenhoupt-a-infinity-class` (definition) — $A_\infty=\bigcup_{1\le p<\infty}A_p$, with membership independent of the witnessing exponent. | Closes the hypothesis used by weighted good-$\lambda$ estimates. | literature-derived | not-applicable | G §7.3/K ch. 5. |
| 10 | `thm-a-infinity-power-decay-characterisation` (theorem) — $w\in A_\infty$ iff there are $C,\delta>0$ such that $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ for every measurable $E\subset Q$. | Supplies the precise estimate consumed by good-$\lambda$. | literature-derived | literature-derived | Reverse Hölder gives one direction; the stopping-cube converse produces an $A_p$ exponent. |
| 11 | `lem-unweighted-good-lambda-covering-for-maximal-truncations` (lemma) — decompose $\{T^*f>\lambda\}$ into maximal cubes and prove the local Lebesgue-measure bound when $Mf\le\gamma\lambda$. | Separates the operator estimate from the weight conversion. | literature-derived | literature-derived | G §7.4. |
| 12 | `lem-weighted-good-lambda-inequality-for-maximal-truncations` (lemma) — for $w\in A_\infty$, $$w\{T^*f>2\lambda,\ Mf\le\gamma\lambda\}\le C\gamma^\delta w\{T^*f>\lambda\}.$$ | Exact transfer mechanism to singular integrals. | literature-derived | ai-altered | Items 10--11. |
| 11 | `thm-calderon-zygmund-operators-are-bounded-on-weighted-lp` (theorem) — a standard $L^2$-bounded CZ operator is bounded on $L^p(w)$ for $1<p<\infty$ and $w\in A_p$. | Required weighted singular-integral theorem. | literature-derived | ai-altered | G/K; items 7–10, with constants depending on $[w]_{A_p}$. |
| 12 | `cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp` (corollary) — FR-7 transforms obey item 11 whenever $w\in A_p$ and $1<p<\infty$. | Concrete principal consumer without asserting a converse for every individual transform. | literature-derived | ai-altered | FR-7 kernel verification plus item 11. |
| 13 | `rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one` (remark) — $A_1$ gives a weak maximal/CZ endpoint under the relevant sourced hypothesis, not the strong theorem in items 7 or 11. | Prevents an endpoint substitution. | literature-derived | not-applicable | G/K. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-power-weight-a-p-range` (example) — $|x|^\alpha\in A_p(\mathbb R^n)$ exactly when $-n<\alpha<n(p-1)$. | Tests both local integrability singularities and dual weight. | literature-derived | ai-altered | G/K; centred/off-centre cubes split. |
| 2 | `cex-power-weight-fails-at-both-a-p-endpoints` (counterexample) — at $\alpha=-n$ or $\alpha=n(p-1)$ one defining average diverges logarithmically. | Shows both inequalities are strict. | literature-derived | ai-altered | Direct radial integral. |
| 3 | `ex-a-one-power-weight-range` (example) — $|x|^\alpha\in A_1$ exactly for $-n<\alpha\le0$. | Audits the separate endpoint convention. | literature-derived | ai-altered | K ch. 5. |
| 4 | `rem-a-doubling-weight-need-not-be-a-p` (remark, `proved_here: false`) — record a sourced doubling density lying in no $A_p$. | Shows item 3 has no converse without presenting an absent construction as a proved counterexample. | literature-derived | not-supplied | G §7.1; exact source construction retained. |
| 5 | `ex-weighted-norm-of-an-interval-indicator` (example) — compute $\|1_{(0,r)}\|_{L^p(|x|^\alpha)}$ in the admissible range. | Checks zero-radius and exponent scaling. | ai-generated | ai-generated | Direct integral; leaf. |

**Hard proof/boundary obligations.**  A weight is positive a.e. and finite
a.e.; reciprocal powers are understood only after this is established.
$A_1$ is not defined by substituting $p=1$ into the $A_p$ formula.  Item 7 is
an iff for the maximal operator; item 11 is only a sufficient theorem for a
general CZ operator.  Quantitative constants record dependence on the weight
characteristic rather than being called universal.

## FR-13. Riesz potentials and the Hardy--Littlewood--Sobolev inequality

**A page:** `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality`
**B page:** `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples`
**Requires:** the FR-6 A page, MT-14 $L^p$ inequalities, and MT-17's
Hardy--Littlewood maximal theorem.  **Sources read:** W §11.2, pp. 73--74;
Gu complete §§1--3, pp. 1--4.

This pair restores the theorem that the former scaffold excluded even though
the cited Stein--Tomas proof uses it explicitly.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-riesz-potential-of-order-alpha` (definition) — for $0<\alpha<n$, define $I_\alpha f(x)=c_{n,\alpha}\int|x-y|^{\alpha-n}f(y)\,dy$ first where absolutely meaningful. | Fixes the kernel and domain before mapping claims. | literature-derived | not-applicable | W §11.2/Stein V.1. |
| 2 | `lem-riesz-potential-near-far-splitting` (lemma) — split at radius $R$, control the near part by $R^\alpha Mf(x)$ and the far part by $R^{\alpha-n/p}\|f\|_p$. | The pointwise engine, including the strict condition $p<n/\alpha$. | literature-derived | literature-derived | W Proposition 11.4. |
| 3 | `lem-hedberg-pointwise-inequality` (lemma) — optimizing item 2 gives $|I_\alpha f(x)|\lesssim (Mf(x))^{1-\alpha p/n}\|f\|_p^{\alpha p/n}$. | Converts maximal control into fractional integration. | literature-derived | ai-altered | Item 2, with $Mf=0$ and $\|f\|_p=0$ cases separated. |
| 4 | `thm-hardy-littlewood-sobolev-fractional-integration` (theorem) — if $1<p<n/\alpha$ and $1/q=1/p-\alpha/n$, then $I_\alpha:L^p(\mathbb R^n)\to L^q(\mathbb R^n)$ boundedly. | Load-bearing Stein--Tomas supplier. | literature-derived | ai-altered | Item 3 and MT-17's strong maximal bound. |
| 5 | `rem-fractional-integration-endpoints` (remark) — the displayed strong theorem does not include $p=1$ or $p=n/\alpha$; record their weak/BMO substitutes only as sourced orientation. | Blocks endpoint substitution. | literature-derived | not-applicable | Stein V.1. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-riesz-potential-scaling-determines-the-target-exponent` (example) — dilation forces $1/q=1/p-\alpha/n$. | Checks the exponent. | literature-derived | ai-altered | Finite scaling calculation. |
| 2 | `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint` (counterexample) — an approximate point mass produces the non-$L^{n/(n-\alpha)}$ kernel tail. | Shows the lower strict endpoint. | literature-derived | ai-altered | Direct radial integral. |
| 3 | `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint` (counterexample) — a logarithmically corrected radial $L^{n/\alpha}$ function has infinite potential at the origin. | Shows why $p<n/\alpha$. | literature-derived | ai-altered | Direct polar-coordinate calculation. |

**Hard proof/boundary obligations.**  Local integrability of the kernel at the
origin and the far-region Hölder exponent are proved before optimizing.  The
operator is extended from a dense finite/core class only after the norm bound.
No endpoint is obtained by substituting equality into the strong theorem.

## FR-14. Fourier restriction and Stein–Tomas

**A page:** `fourier-restriction-and-the-stein-tomas-theorem`
**B page:** `fourier-restriction-and-the-stein-tomas-theorem-examples`
**Requires:** the FR-6 and FR-13 A pages, FA Plancherel/duality, MT
interpolation, `product-measures-and-the-fubini-tonelli-theorems` for
`def-polar-surface-measure-on-the-unit-sphere`, and the published differential-
geometry chart/change-of-variables results.  **Sources
read:** Wo §§1–7, pp. 1–46; Taob notes 8–9, pp. 1–22 and 1–14.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-fourier-restriction-and-adjoint-extension-operators` (definition) — for a compact smooth hypersurface $S$ with surface measure $\sigma$, set $Rf=\widehat f|_S$ initially on Schwartz functions and $Eg=(g\,d\sigma)^\vee$. | Defines restriction only where pointwise Fourier values exist. | literature-derived | not-applicable | Wo §1/Taob note 8. |
| 2 | `lem-restriction-and-extension-estimates-are-dual` (lemma) — $R:L^p(\mathbb R^n)\to L^2(S)$ is bounded iff $E:L^2(S)\to L^{p'}(\mathbb R^n)$ is bounded with the same norm. | Lets the proof use the geometrically natural formulation. | literature-derived | ai-altered | FA duality and Fubini on dense classes. |
| 3 | `lem-cap-wave-packet-has-dual-tube-concentration` (lemma) — extension of data on a spherical cap of angular radius $\delta$ is essentially coherent on a tube of dimensions $\delta^{-1}\times\cdots\times\delta^{-1}\times\delta^{-2}$. | Splits the Knapp scaling calculation. | literature-derived | ai-altered | Wo §2/Taob note 8; phase variation estimated explicitly. |
| 4 | `thm-knapp-necessary-condition-for-spherical-ltwo-restriction` (theorem) — an estimate $R:L^p(\mathbb R^n)\to L^2(S^{n-1})$ forces $p\le2(n+1)/(n+3)$, equivalently extension exponent $q\ge2(n+1)/(n-1)$. | Makes the dimensional obstruction exact. | literature-derived | ai-altered | Item 3 and cap/tube measures. |
| 5 | `lem-van-der-corput-oscillatory-integral-estimate` (lemma) — prove the compactly supported one-dimensional estimate with its nondegenerate derivative hypotheses. | Base case for stationary phase. | literature-derived | literature-derived | Wo §3/Taob note 8. |
| 6 | `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase` (lemma) — a partition, Morse coordinates, and item 5 give $O(\lambda^{-d/2})$, while integration by parts handles nonstationary patches. | Supplies the multidimensional decay rather than citing it as absent machinery. | literature-derived | literature-derived | Wo §§3--4. |
| 7 | `lem-stationary-phase-decay-for-spherical-surface-measure` (lemma) — $|(d\sigma)^\vee(x)|\lesssim(1+|x|)^{-(n-1)/2}$. | Analytic input to Stein–Tomas. | literature-derived | ai-altered | Item 6 and a finite sphere chart partition. |
| 6 | `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` (lemma) — $EE^*F=F*(d\sigma)^\vee$. | Isolates the Hilbert-space operator step. | literature-derived | ai-altered | Wo §4/Taob; dense-class calculation then closure. |
| 9 | `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` (lemma) — on a curved graph patch, the slice operators $U(t)$ map $L^1\to L^\infty$ with $\langle t\rangle^{-(n-1)/2}$ decay and $L^2\to L^2$ uniformly. | Exact operator family used by the cited proof. | literature-derived | ai-altered | Item 7, graph surface density, and Plancherel in tangential variables. |
| 10 | `lem-stein-tomas-tt-star-bound-from-fractional-integration` (lemma) — interpolate item 9 and apply FR-13's one-dimensional HLS theorem with $\alpha=(n-1)/(n+1)$. | Replaces the false claim that constant-size dyadic endpoint pieces simply sum. | literature-derived | ai-altered | W §11.3, equations (11.13)--(11.17). |
| 11 | `thm-stein-tomas-spherical-restriction-theorem` (theorem) — for $n\ge2$, $R:L^{2(n+1)/(n+3)}(\mathbb R^n)\to L^2(S^{n-1})$ is bounded, equivalently $E:L^2(S^{n-1})\to L^{2(n+1)/(n-1)}$. | Required sharp $L^p\to L^2$ result. | literature-derived | ai-altered | TT*, items 6--10; finite surface measure supplies the smaller-$p$ range. |
| 9 | `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` (corollary) — the same local exponent pair holds for compact smooth hypersurfaces with everywhere nonvanishing Gaussian curvature. | Gives the invariant geometric version. | literature-derived | ai-altered | Partition of unity and local stationary phase, source-backed. |
| 10 | `rem-the-general-fourier-restriction-problem` (remark) — restriction estimates with target exponents other than two remain a deeper dimension-dependent problem constrained by scaling and Knapp examples. | Prevents calling Stein–Tomas the whole restriction conjecture. | literature-derived | not-supplied | Wo/Taob surveys. |
| 11 | `rem-restriction-estimates-and-the-missing-strichartz-interface` (remark) — extension estimates feed spacetime estimates for dispersive equations; the declared forward interface has no current PDE page id, so this sourced leaf is non-load-bearing and must be emitted with `proved_here: false`. | Records the dispatch interface without fabricating a prerequisite. | literature-derived | not-supplied | Taob note 9; S-5 supplier deliberately uncommissioned. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` (counterexample) — an ambient $L^{p'}$ representative of $\widehat f$ may be changed arbitrarily on the null hypersurface $S$ without changing its ambient equivalence class. | Explains why restriction begins on Schwartz functions and extends. | literature-derived | ai-altered | Wo §1. |
| 2 | `ex-knapp-cap-and-tube-volume-calculation` (example) — compute the cap $L^2$ mass and dual tube volume yielding item 4. | Finite exponent check. | literature-derived | ai-altered | Wo/Taob. |
| 3 | `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` (counterexample) — a flat surface measure transform concentrates on its normal subspace. | Tests the curvature hypothesis in item 9. | literature-derived | ai-altered | Direct partial transform calculation. |
| 4 | `ex-circle-stein-tomas-exponents` (example) — in $n=2$, restriction is $L^{6/5}\to L^2(S^1)$ and extension is $L^2(S^1)\to L^6$. | Checks dual exponents. | ai-generated | ai-generated | Arithmetic leaf. |
| 5 | `cex-knapp-rules-out-extension-below-the-tomas-exponent` (counterexample) — spherical cap data violate every $L^2(S)\to L^q$ bound with $q<2(n+1)/(n-1)$. | Shows sharpness for the $L^2$ source problem. | literature-derived | ai-altered | Item 3 scaling; leaf. |

**Hard proof/boundary obligations.**  Restriction is an extended operator, not
literal evaluation of an arbitrary $L^p$ transform.  The sphere has $n\ge2$;
the zero-dimensional $S^0$ case is not folded into the formula.  The Knapp
inequality direction is checked using $\delta\downarrow0$.  Stein–Tomas is
sharp only for the $L^p\to L^2$ line; no claim settles the general restriction
problem.

## FR-15. Character groups and elementary LCA duals

**A page:** `character-groups-and-elementary-lca-duals`
**B page:** `character-groups-and-elementary-lca-duals-examples`
**Requires:** `uniform-spaces`, the published quotient/product topology pages,
the FR-6 A page for the Euclidean Fourier convention, and RG-18
`haar-measure-existence-and-uniqueness`.  **Sources read:** Lo §§34--35,
pp. 134--140; Ko §§6--9, pp. 14--21; EW Appendix C.1, pp. 429--432.

This foundation is deliberately separated from both Fourier inversion and
biduality.  Körner's actual proof order is retained below: FR-16 proves Bochner
and inversion first; FR-17 then proves Pontryagin biduality from inversion and
uses biduality only for the surjectivity half of the full Plancherel theorem.
This removes the tempting but circular route through compact-group
Peter--Weyl, which is not available until RG-22.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-pontryagin-dual-and-compact-open-topology` (definition) — continuous characters $G\to\mathbb T$ with the compact-open topology. | Fixes the object. | literature-derived | not-applicable | Lo/Ko. |
| 2 | `lem-compact-open-character-group-operations-are-continuous` (lemma) — multiplication and inversion make $\widehat G$ a Hausdorff topological abelian group. | Basic well-definedness. | literature-derived | literature-derived | Ko §6. |
| 3 | `lem-character-evaluation-pairing-is-jointly-continuous` (lemma) — $(x,\gamma)\mapsto\gamma(x)$ is jointly continuous for LCA $G$ and compact-open $\widehat G$. | Needed for Fourier--Stieltjes continuity and every later Fubini argument. | literature-derived | literature-derived | Compact-neighbourhood/equicontinuity argument. |
| 4 | `lem-dual-homomorphisms-are-continuous-and-functorial` (lemma) — pullback along a continuous homomorphism is continuous under the proper/quotient hypotheses actually used later. | Avoids the false unrestricted compact-open assertion. | literature-derived | ai-altered | Lo/Ko; hypotheses stated per case. |
| 5 | `thm-dual-of-an-lca-group-is-locally-compact-abelian` (theorem) — $\widehat G$ is LCA. | Licenses RG-18 Haar measure on the dual. | literature-derived | literature-derived | Ko §§7--8; include the equicontinuity compactness lemmas rather than cite Arzelà--Ascoli by name alone. |
| 6 | `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals` (theorem) — prove both directions available before biduality. | Organizes basic models without using the later iff. | literature-derived | literature-derived | Ko §9. |
| 7 | `lem-duals-of-finite-products-and-discrete-direct-sums` (lemma) — record the correct product topologies. | Supplies finite/lattice models. | literature-derived | ai-altered | Ko/EW. |

**B-page leaves.**  Retain the four concrete computations formerly on FR-14:
`ex-pontryagin-dual-of-the-integers-is-the-circle`,
`ex-pontryagin-dual-of-the-circle-is-the-integers`,
`ex-pontryagin-dual-of-euclidean-space`, and
`ex-pontryagin-dual-of-a-finite-cyclic-group`.  The last is canonical for the
presented group $\mathbb Z/N\mathbb Z$ under $k\mapsto(x\mapsto e^{2\pi ikx/N})$;
only an unnamed abstract cyclic group requires choosing a generator.

## FR-16. Bochner, inversion, and Plancherel on LCA groups

**A page:** `bochner-inversion-and-plancherel-on-lca-groups`
**B page:** `bochner-inversion-and-plancherel-on-lca-groups-examples`
**Requires:** the FR-15 A page, FA
`fourier-transform-convolution-and-approximate-identities` and the FA-17 A
Banach-algebra character theorem, MT Radon measures/Riesz--Markov, and RG-18
`haar-measure-existence-and-uniqueness`.  **Sources read:** Lo §§34 and
§§36A--D, pp. 134–137 and 141–146; Ko §§10--12, pp. 22–26; EW Appendix
C.2–C.3, printed pp. 432–439.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-fourier-transform-on-an-lca-group` (definition) — for $f\in L^1(G,m_G)$, $\widehat f(\gamma)=\int_Gf(x)\overline{\gamma(x)}\,dm_G(x)$. | Generalises the existing transform only after Haar is cited. | literature-derived | not-applicable | Lo §34/EW C.2. |
| 2 | `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` (lemma) — record the exact character factors and $\widehat{f*g}=\widehat f\widehat g$. | Algebraic calculus for all later theorems. | literature-derived | ai-altered | Lo §34/EW C.2; Fubini hypotheses explicit. |
| 3 | `thm-riemann-lebesgue-lemma-on-lca-groups` (theorem) — $\widehat f\in C_0(\widehat G)$ and $\|\widehat f\|_\infty\le\|f\|_1$. | Identifies the correct transform codomain. | literature-derived | ai-altered | FR-15 joint evaluation, compactly supported $L^1$ approximation, and the FA-17 character-space identification; no Pontryagin separation is used. |
| 4 | `lem-lca-positive-convolution-squares-form-an-inversion-core` (lemma) — functions $g*\widetilde g$ with $g\in C_c(G)$ give a dense positive core on which both Fourier integrals are absolutely controlled. | Starting point for normalization and inversion. | literature-derived | literature-derived | Lo §36B/Ko §§10--12. |
| 5 | `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` (lemma) — a finite regular measure on $\widehat G$ whose inverse transform vanishes on $G$ is zero. | Supplies Bochner uniqueness and the inversion construction before biduality. | literature-derived | literature-derived | Ko Theorem 10.6; the proof uses the FR-15/FA-17 identification of all characters of $L^1(G)$, not $G\cong\widehat{\widehat G}$. |
| 6 | `def-positive-definite-function-on-an-abelian-group` (definition) — $\phi$ is positive definite when $\sum_{j,k}c_j\overline{c_k}\phi(x_j-x_k)\ge0$ for every finite choice, including the empty sum. | Sets the finite-matrix convention for Bochner. | literature-derived | not-applicable | Lo §36A/EW C.3. |
| 7 | `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` (lemma) — $\phi(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ is continuous positive definite for finite positive $\mu$. | Easy direction of Bochner with continuity justified. | literature-derived | ai-altered | FR-15 joint evaluation plus compact/tail splitting; sequential DCT is not used on a non-first-countable group. |
| 8 | `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core` (lemma) — integrate $\phi$ against convolution squares and prove positivity and the $\phi(0)$ norm bound. | Construction behind Bochner. | literature-derived | literature-derived | Lo §36A/EW C.3. |
| 9 | `lem-bochner-functional-extends-and-has-a-radon-representing-measure` (lemma) — extend item 8 to the relevant $C_0(\widehat G)$ closure and apply the published Riesz--Markov theorem; prove uniqueness with item 5. | Makes every representation-theorem input explicit. | literature-derived | literature-derived | Lo §36A/Ko Theorem 12.3 and MT Riesz--Markov. |
| 10 | `thm-bochner-theorem-for-lca-groups` (theorem) — every continuous positive-definite $\phi$ on $G$ is the Fourier–Stieltjes transform of a unique finite positive Radon measure on $\widehat G$, of mass $\phi(0)$. | Required representation theorem. | literature-derived | literature-derived | Items 5--9. |
| 11 | `cor-normalised-positive-definite-functions-correspond-to-probability-measures` (corollary) — $\phi(0)=1$ in Bochner's theorem iff the representing measure is a probability measure. | Useful probability interface. | literature-derived | ai-altered | Item 10 mass identity. |
| 12 | `thm-compatible-dual-haar-normalisation` (theorem) — once $m_G$ is fixed, there is a unique scaling of Haar measure on $\widehat G$ for which Fourier inversion holds. | Resolves the reciprocal normalization without reproving Haar existence. | literature-derived | literature-derived | Item 4, Bochner, RG-18 uniqueness, and Ko Theorem 12.4. |
| 13 | `thm-lca-fourier-inversion-for-integrable-transform` (theorem) — if $f\in L^1(G)$ and $\widehat f\in L^1(\widehat G)$, then the inverse integral equals the continuous representative of $f$ a.e., and at every point where the sourced regularisation converges. | Gives a safe inversion hypothesis and representative. | literature-derived | ai-altered | Lo §§36B–36C/EW C.2; equality is not claimed pointwise for an arbitrary class. |
| 14 | `lem-lca-parseval-pairing-on-the-integrable-core` (lemma) — on $L^1\cap L^2$ functions with integrable transforms, $\int_Gf\overline g=\int_{\widehat G}\widehat f\overline{\widehat g}$. | Dense isometric core for Plancherel. | literature-derived | ai-altered | Lo §36B; inversion and Fubini. |
| 15 | `thm-lca-plancherel-isometric-extension` (theorem) — the transform has a unique linear isometric extension $L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G})$, without yet asserting surjectivity. | States exactly what is available before biduality. | literature-derived | literature-derived | Item 14 and Ko Theorems 12.6--12.7; density of $L^1\cap L^2$ in $L^2(G)$. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-haar-normalisations-on-the-circle-and-the-integers` (example) — normalised measure on $\mathbb T$ pairs with counting measure on $\mathbb Z$. | Checks the existing Fourier-series convention. | literature-derived | ai-altered | EW/T. |
| 2 | `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` (example) — probability measure on $G$ pairs with counting measure on $\widehat G$ for the nonunitary LCA transform. | Explains the later conversion to the unitary DFT. | literature-derived | ai-altered | EW C.2. |
| 3 | `ex-a-character-is-positive-definite` (example) — a character gives a rank-one positive semidefinite matrix and corresponds to a point mass. | Minimal Bochner check. | ai-generated | ai-generated | Finite square; leaf. |
| 4 | `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` (counterexample) — a sourced three-point matrix test fails for an explicit function. | Shows boundedness is not positivity. | literature-derived | ai-altered | EW C.3 example; determinant checked. |
| 5 | `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` (counterexample) — changing a representative at one point preserves its transform but changes that point value. | Tests the representative language in item 5. | ai-generated | ai-generated | Null-set leaf. |

**Hard proof/boundary obligations.**  Haar existence/uniqueness remains an RG
dependency; item 12 selects only the reciprocal scale.  Fourier inversion
returns a continuous representative under its hypotheses, never a prescribed
null-set version.  Positive definiteness includes repeated points and complex
coefficients.  Bochner's measure is finite because $\phi(0)<\infty$ and is
unique by item 5.  Item 15 is intentionally only an isometric embedding: its
range-density/surjectivity supplier belongs after biduality on FR-17.

## FR-17. Pontryagin duality and full LCA Plancherel

**A page:** `pontryagin-duality-for-locally-compact-abelian-groups`
**B page:** `pontryagin-duality-for-locally-compact-abelian-groups-examples`
**Requires:** the FR-15 and FR-16 A pages and the published topological-group
quotient/product results.  **Sources read:** Lo §§35 and §37, pp. 138–140
and 147–152; Ko §§13--14, pp. 26–30; EW Appendix C.1, printed pp. 429–432.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` (lemma) — uniform control on compact subsets of $\widehat G$ gives a neighbourhood basis at each $x\in G$. | Supplies the missing symmetric compact-open topology statement. | literature-derived | literature-derived | Ko Lemma 13.1, using FR-16 inversion. |
| 2 | `lem-positive-compactly-supported-transform-bump-on-the-dual` (lemma) — every compact neighbourhood of $\gamma\in\widehat G$ supports a nonnegative transform $\widehat f$ with $\widehat f(\gamma)>0$. | Localises bidual characters without Peter--Weyl. | literature-derived | literature-derived | Ko Lemma 13.2 and FR-16 Bochner/inversion. |
| 3 | `thm-pontryagin-biduality` (theorem) — the evaluation map $G\to\widehat{\widehat G}$ is an isomorphism of topological groups for every LCA group. | Required abstract duality theorem. | literature-derived | literature-derived | Ko Theorem 13.3, with items 1--2 and FR-16 inversion; no RG-22 Peter--Weyl theorem. |
| 4 | `lem-continuous-characters-separate-points-of-an-lca-group` (lemma) — for $x\ne0$ in $G$, some $\gamma\in\widehat G$ has $\gamma(x)\ne1$. | Records the injectivity consequence used by exactness. | literature-derived | ai-altered | Item 3. |
| 5 | `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` (lemma) — a vector orthogonal to the FR-16 transform range vanishes after applying inverse transformation on $\widehat G$. | Exposes the surjectivity step previously hidden in Plancherel. | literature-derived | literature-derived | Lo §36D/EW C.2, FR-16 item 15, and item 3's identification $G\cong\widehat{\widehat G}$. |
| 6 | `thm-plancherel-theorem-for-lca-groups` (theorem) — the Fourier transform extends uniquely to a unitary $L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G})$. | Completes LCA Plancherel without a circular use in biduality. | literature-derived | literature-derived | FR-16 isometric extension plus item 5. |
| 7 | `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` (corollary) — compact $G$ yields a discrete-dual sum and discrete $G$ a compact-dual integral with compatible weights. | Unifies FA Fourier series and the later finite transform. | literature-derived | ai-altered | FR-15 one-way compact/discrete results and item 6. |
| 8 | `thm-principal-structure-theorem-for-lca-groups` (theorem) — every LCA group has an open subgroup isomorphic to $\mathbb R^n\times K$ with $K$ compact. | Supplies the standard structural form after, not inside, the duality proof. | literature-derived | literature-derived | Ko §14; expose its compact-neighbourhood and quotient lemmas. |
| 9 | `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` (lemma) — every continuous character of a closed subgroup extends to the ambient LCA group. | Load-bearing exactness theorem. | literature-derived | literature-derived | Lo §37/Ko §14, using item 3 rather than a future inversion theorem. |
| 10 | `def-annihilator-of-a-subgroup` (definition) — for $H\le G$, $H^\perp=\{\gamma:\gamma|_H=1\}$, with closure conventions stated. | Names the subgroup/quotient interface. | literature-derived | not-applicable | Lo §35B/EW C.1. |
| 11 | `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` (theorem) — for closed $H\le G$, pullback identifies $\widehat{G/H}$ topologically with $H^\perp$. | Exact quotient duality without colliding with FA's Banach-space quotient-dual theorem. | literature-derived | ai-altered | Lo §35B/Ko §14; quotient topology explicit. |
| 12 | `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` (theorem) — restriction $\widehat G\to\widehat H$ is onto with kernel $H^\perp$, hence $\widehat H\cong\widehat G/H^\perp$. | Complementary exact-sequence direction. | literature-derived | ai-altered | Items 9--11 plus the quotient open-map argument. |
| 13 | `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` (lemma) — $H\subset K$ implies $K^\perp\subset H^\perp$ and $(H^\perp)^\perp=\overline H$ under bidual identification. | Controls nonclosed subgroups and both directions. | literature-derived | ai-altered | Items 3 and 9--12; closure cannot be omitted. |
| 14 | `thm-compact-discrete-duality-for-lca-groups` (theorem) — $G$ is compact iff $\widehat G$ is discrete, and $G$ is discrete iff $\widehat G$ is compact. | Completes the FR-15 one-way implications. | literature-derived | ai-altered | Apply FR-15 item 6 to $\widehat G$ and use item 3. |
| 15 | `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients` (lemma) — the evaluation identifications commute with the natural exact diagrams for products, closed subgroups, and quotients. | Records structural transport without making it a premise of biduality. | literature-derived | literature-derived | Items 3 and 9--13. |
| 16 | `cor-pontryagin-duality-is-a-contravariant-involution` (corollary) — dualisation reverses arrows and the double-dual identifications are natural. | Gives later pages a precise categorical interface. | literature-derived | ai-altered | FR-15 functoriality and item 3; naturality square checked. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` (example) — compute the orthogonal lattice/subspace and verify the quotient-dual map. | Tests exactness without duplicating FR-15 examples. | literature-derived | ai-altered | Lo/Ko. |
| 2 | `ex-bidual-map-on-the-circle-and-the-integers` (example) — compute evaluation under the FR-15 identifications. | Concrete naturality check. | literature-derived | ai-altered | FR-15. |
| 3 | `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` (counterexample) — an explicit compact/discrete model shows that forgetting topology destroys the homeomorphism statement. | Tests why compact-open topology matters. | literature-derived | ai-altered | Use $\mathbb Z$/$\mathbb T$ directly; no exotic unproved construction. |

**Hard proof/boundary obligations.**  All groups here are Hausdorff LCA and
abelian; no assertion is made about irreducible representations of a
noncommutative group.  Annihilator formulae use closed subgroups or explicitly
insert closure.  The bidual theorem follows the source's inversion route and
must cite FR-16; it may not cite RG-22 Peter--Weyl, the full Plancherel theorem,
or the later exactness results.  Conversely, item 6 may cite biduality because
its isometric-embedding half was already proved on FR-16.

## FR-18. Finite Fourier analysis and the fast Fourier transform

**A page:** `finite-fourier-analysis-and-the-fast-fourier-transform`
**B page:** `finite-fourier-analysis-and-the-fast-fourier-transform-examples`
**Requires:** the FR-15--FR-17 A pages for the conceptual finite-group interface and only
finite-dimensional linear algebra for the proof.  **Sources read:** T §§11–12,
PDF pp. 86–100; MITF headings 1–4 (complete unpaginated lecture).

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `lem-orthogonality-of-characters-on-a-finite-cyclic-group` (lemma) — $\sum_{x=0}^{N-1}e^{2\pi i(k-\ell)x/N}=N\,1_{k=\ell\bmod N}$ for every $N\ge1$. | Finite algebraic engine, including $N=1$. | literature-derived | ai-altered | T §11/MIT lecture 23; geometric sum with coincident-root case split. |
| 2 | `def-unitary-discrete-fourier-transform-on-z-mod-n` (definition) — $(\mathcal F_Nf)(k)=N^{-1/2}\sum_{x=0}^{N-1}f(x)e^{-2\pi ikx/N}$. | Fixes sign and unitary normalisation. | literature-derived | not-applicable | T §11 translated from its convention. |
| 3 | `thm-finite-fourier-inversion` (theorem) — $f(x)=N^{-1/2}\sum_k(\mathcal F_Nf)(k)e^{2\pi ikx/N}$. | Establishes exact recoverability. | literature-derived | ai-altered | Item 1; finite sums need no convergence theorem. |
| 4 | `thm-finite-parseval-and-plancherel` (theorem) — $\langle\mathcal F_Nf,\mathcal F_Ng\rangle=\langle f,g\rangle$ for counting-measure inner products. | Unitary finite-group theorem. | literature-derived | ai-altered | Item 1/T §11. |
| 5 | `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product` (lemma) — with unnormalised cyclic convolution, $\mathcal F_N(f*g)=\sqrt N(\mathcal F_Nf)(\mathcal F_Ng)$. | Makes the unitary scaling visible for algorithms. | literature-derived | ai-altered | Direct finite reindexing; T §11. |
| 6 | `lem-dft-squares-to-reflection-and-has-fourth-power-identity` (lemma) — $\mathcal F_N^2f(x)=f(-x)$ and $\mathcal F_N^4=I$. | Useful sign/normalisation audit. | literature-derived | ai-altered | Items 1–3. |
| 7 | `def-unnormalised-engineering-dft-and-conversion` (definition) — $X_k=\sum_xf_xe^{-2\pi ikx/N}=\sqrt N(\mathcal F_Nf)(k)$ and the inverse carries $1/N$. | Prevents mixing mathematical and algorithmic conventions. | literature-derived | not-applicable | T §12/MIT lecture 23. |
| 8 | `lem-radix-two-even-odd-dft-factorisation` (lemma) — for $N=2M$, split the input polynomial into even/odd coefficients and recover the two halves using $M$-point DFTs and twiddle factors. | Core correctness identity of the FFT. | literature-derived | ai-altered | T §12/MIT §4; all index reductions modulo $N$ shown. |
| 9 | `def-recursive-radix-two-fast-fourier-transform` (definition) — for $N=2^m$, recurse to $N=1$ and combine the two $N/2$ transforms using item 8. | States an actual terminating algorithm. | literature-derived | not-applicable | T/MIT. |
| 10 | `thm-radix-two-fft-correctness` (theorem) — the recursive algorithm returns the unnormalised DFT for every input of length $2^m$. | Required correctness proof, separate from speed. | literature-derived | ai-altered | Induction on $m$ using item 8; $m=0$ base. |
| 11 | `thm-radix-two-fft-arithmetic-complexity` (theorem) — the recurrence $C(N)=2C(N/2)+O(N)$ gives $C(N)=O(N\log_2N)$ complex arithmetic operations. | Proves the algorithmic improvement. | literature-derived | ai-altered | T §12/MIT §4; operation model stated. |
| 12 | `rem-cooley-tukey-factorisation-for-composite-lengths` (remark) — mixed-radix factorisation extends the recursion when $N=RS$, while prime lengths require another reduction and are not claimed $O(N\log N)$ by radix two. | Prevents a power-of-two proof from claiming all lengths. | literature-derived | not-supplied | T §12/MIT lecture 23. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-unitary-dft-for-n-equals-one-and-two` (example) — write the complete matrices and inverses. | Tests the degenerate and first nontrivial sizes. | ai-generated | ai-generated | Finite leaf. |
| 2 | `ex-four-point-radix-two-fft` (example) — execute both recursive levels and compare with direct evaluation. | Finite correctness verification. | ai-generated | ai-generated | Leaf. |
| 3 | `ex-cyclic-convolution-via-the-dft` (example) — multiply two residue-class polynomials modulo $z^N-1$ using item 5. | Shows what the transform is for. | literature-derived | ai-altered | T §11. |
| 4 | `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` (counterexample) — two short sequences wrap a nonzero high coefficient into residue zero. | Makes zero-padding necessary. | ai-generated | ai-generated | Finite leaf. |
| 5 | `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` (counterexample) — the even/odd subproblems have unequal root sets when $N$ is odd. | Tests the algorithm's length hypothesis. | ai-generated | ai-generated | Leaf; no claim that odd DFTs are hard. |

**Hard proof/boundary obligations.**  $N$ is a positive integer; the empty
zero-length transform is not defined.  The $N=1$ base case makes the recursion
total.  Cyclic and linear convolution are distinguished.  Complexity counts
arithmetic operations, not bit complexity or numerical stability, and the
algorithm computes the unnormalised transform before the explicit unitary
rescaling.

## FR-19. Poisson summation, sampling, and lattice duality

**A page:** `poisson-summation-sampling-and-lattice-duality`
**B page:** `poisson-summation-sampling-and-lattice-duality-examples`
**Requires:** FA-23's exact
`thm-poisson-summation-for-schwartz-functions`, the FR-1, FR-2, FR-15--FR-18 A pages, and
FA tempered distributions.  **Sources read:** T §7, PDF pp. 59–68; L chs.
22–24, pp. 127–146; MITP §§16.1–16.1.1, pp. 1–3.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-full-rank-lattice-covolume-and-dual-lattice` (definition) — for $\Lambda=A\mathbb Z^n$, set $\operatorname{covol}(\Lambda)=|\det A|$ and $\Lambda^*=A^{-T}\mathbb Z^n$. | Fixes the $2\pi$-free dual under the adopted transform. | literature-derived | not-applicable | T §7/L ch. 24. |
| 2 | `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable` (lemma) — $P_\Lambda f(x)=\sum_{\lambda\in\Lambda}f(x+\lambda)$ and all differentiated sums converge locally uniformly. | Justifies termwise Fourier-series calculations. | literature-derived | ai-altered | T §7/MIT lecture 16; Schwartz seminorm lattice count. |
| 3 | `lem-fourier-coefficients-of-lattice-periodisation` (lemma) — the coefficient at $\lambda^*\in\Lambda^*$ is $\operatorname{covol}(\Lambda)^{-1}\widehat f(\lambda^*)$. | Core bridge from continuous to discrete sums. | literature-derived | ai-altered | T §7; tiling/Fubini with absolute convergence. |
| 4 | `rem-schwartz-poisson-formula-is-owned-by-functional-analysis` (remark) — cite FA-23's exact theorem at $\mathbb Z^n$ rather than minting it again. | Preserves the existing stable id and ownership. | literature-derived | not-supplied | FA-23. |
| 5 | `thm-poisson-summation-for-a-full-rank-lattice` (theorem) — for $f\in\mathcal S(\mathbb R^n)$, $\sum_{\lambda\in\Lambda}f(\lambda)=\operatorname{covol}(\Lambda)^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat f(\lambda^*)$. | Required scaled/lattice form. | literature-derived | ai-altered | Items 1–4 plus linear change of variables. |
| 6 | `thm-poisson-summation-under-two-sided-polynomial-decay` (theorem) — the same formula holds when $f$ and $\widehat f$ are continuous and both decay faster than $|x|^{-n-\varepsilon}$, with the sourced regularity ensuring the periodisation has its Fourier value at zero. | Gives a useful non-Schwartz hypothesis without saying “sufficient decay.” | literature-derived | ai-altered | L ch. 23/T §7; uniform absolute convergence and Fourier inversion conditions explicit. |
| 7 | `lem-dirac-comb-is-self-dual-as-a-tempered-distribution` (lemma) — $\widehat{\sum_{k\in\mathbb Z^n}\delta_k}=\sum_{k\in\mathbb Z^n}\delta_k$ under the adopted convention. | Distributional form behind sampling and aliasing. | literature-derived | ai-altered | T §7/FA tempered-transform page. |
| 8 | `lem-sampling-produces-periodisation-in-frequency` (lemma) — multiplying by a scaled Dirac comb samples $f$ and transforms into reciprocal-lattice periodisation of $\widehat f$ with the exact scale. | Names aliasing algebra. | literature-derived | ai-altered | T/L; distribution product is justified because $f$ is smooth in the stated core. |
| 9 | `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval` (lemma) — after scaling the band to $[-1/2,1/2]$, the samples $f(hk)$ are the Fourier coefficients of the $L^2$ function $\widehat f$ on that interval, with the exact $h^{1/2}$ normalisation. | Supplies both the meaning and the square summability of the samples. | literature-derived | ai-altered | L ch. 22; FA Riesz--Fischer/Parseval and the compact-support implication $\widehat f\in L^1$. |
| 10 | `thm-shannon-sampling-for-bandlimited-ltwo-functions` (theorem) — if $\operatorname{supp}\widehat f\subset[-1/(2h),1/(2h)]$, then the continuous representative of $f$ satisfies $f=\sum_{k\in\mathbb Z}f(hk)\operatorname{sinc}(x/h-k)$ in $L^2$, with locally uniform convergence under the stated stronger coefficient hypothesis. | Required reconstruction theorem with convergence mode stated. | literature-derived | ai-altered | Item 9 and FA's Fourier-series unitary/Riesz--Fischer theorem; inverse-transform the orthonormal exponential expansion. |
| 11 | `cor-nyquist-no-aliasing-condition` (corollary) — translates of a frequency support by $h^{-1}\mathbb Z$ are disjoint up to null endpoints when the bandwidth is at most $1/(2h)$. | Explains the sampling threshold. | literature-derived | ai-altered | Item 8 geometric support check. |
| 12 | `rem-aliasing-above-the-nyquist-rate` (remark) — overlapping reciprocal translates add before reconstruction, so distinct inputs may have identical samples. | Records the failure mechanism rather than a slogan. | literature-derived | not-applicable | L ch. 24. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` (remark) — cite FA-23's `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` rather than creating a second Gaussian Poisson example. | Preserves the existing example's ownership. | literature-derived | not-supplied | MITP/L ch. 23 verify the interface. |
| 2 | `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` (example) — compute $\Lambda^*$ and reciprocal determinant for diagonal $A$. | Checks transpose and scale. | ai-generated | ai-generated | Finite leaf. |
| 3 | `ex-shannon-reconstruction-of-a-sinc-function` (example) — its integer samples are one at zero and zero elsewhere under the adopted sinc normalisation. | Checks signs/endpoints. | literature-derived | ai-altered | L ch. 24. |
| 4 | `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation` (remark, `proved_here: false`) — record the sourced failure of a point-sampled formula under bare $L^1$ assumptions. | Shows why item 6 has pointwise decay/regularity without pretending an omitted construction was proved locally. | literature-derived | not-supplied | L ch. 23 warning; leaf only. |
| 5 | `cex-undersampling-identifies-two-distinct-pure-frequencies` (counterexample) — frequencies differing by an integer multiple of $h^{-1}$ agree at every sample $hk$. | Finite aliasing witness. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  Lattices have full rank and nonzero
covolume.  Every interchange in periodisation is backed by absolute/local
uniform convergence.  Poisson summation is never stated for arbitrary $L^1$
functions with point values.  Shannon equality is first in $L^2$; endpoint
frequency values are irrelevant only as null-set data, and pointwise claims
require the extra sourced hypotheses.

## FR-20. Uncertainty principles for Fourier analysis

**A page:** `uncertainty-principles-for-fourier-analysis`
**B page:** `uncertainty-principles-for-fourier-analysis-examples`
**Requires:** FA-23's exact `thm-heisenberg-uncertainty-inequality`, the FR-18 A page,
FA Plancherel and differentiation, the published integration-by-parts
inequality, and CA-6 `the-identity-theorem-and-the-open-mapping-theorem`.
The complex-analysis dependency must be scheduled earlier than this pair.
**Sources read:** FM §§1–2, pp. 1–8; S §§1–5, pp. 1–13; L
chs. 14–15, pp. 79–90.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-spatial-and-frequency-centres-and-variances` (definition) — for nonzero $f\in L^2$ with finite second moments, define the probability-normalised means and variances of $|f|^2$ and $|\widehat f|^2$. | Makes translation/modulation-invariant uncertainty precise. | literature-derived | not-applicable | S §§1–2/L ch. 15. |
| 2 | `lem-centering-by-translation-and-modulation-preserves-the-variance-product` (lemma) — translate by the spatial mean and modulate by the frequency mean to reduce to centred moments without changing their product. | Splits invariance from the inequality. | literature-derived | ai-altered | S/L; transform phases checked. |
| 3 | `lem-position-derivative-commutator-estimate` (lemma) — integration by parts and Cauchy–Schwarz give $\|x_jf\|_2\|\partial_jf\|_2\ge\tfrac12\|f\|_2^2$ on the stated Sobolev/moment domain. | Real-variable core of Heisenberg. | literature-derived | ai-altered | S §2; cutoff approximation closes boundary terms. |
| 4 | `rem-heisenberg-uncertainty-is-owned-by-functional-analysis` (remark) — cite FA-23's exact theorem, which under this convention gives $\|x_jf\|_2\|\xi_j\widehat f\|_2\ge(4\pi)^{-1}\|f\|_2^2$ and Gaussian equality. | Avoids duplicate minting while recording the constant. | literature-derived | not-supplied | FA-23 plus items 2–3. |
| 5 | `cor-dimensional-heisenberg-uncertainty-inequality` (corollary) — $\||x|f\|_2\,\||\xi|\widehat f\|_2\ge n(4\pi)^{-1}\|f\|_2^2$. | Required $n$-dimensional form. | literature-derived | ai-altered | Sum item 4 coordinate inequalities and apply Cauchy–Schwarz. |
| 6 | `thm-support-measure-uncertainty-inequality` (theorem) — if nonzero $f\in L^2$ and $f,\widehat f$ are supported on finite-measure sets $E,F$, then $|E||F|\ge1$. | Quantifies simultaneous concentration without complex analysis. | literature-derived | ai-altered | S §3; $L^1$–$L^\infty$ transform bound plus Plancherel. |
| 7 | `lem-compact-support-gives-an-entire-fourier-laplace-transform` (lemma) — if $f\in L^1(\mathbb R^n)$ has compact support, $F(z)=\int f(x)e^{-2\pi i x\cdot z}\,dx$ is entire on $\mathbb C^n$, with derivatives obtained under the integral and $F|_{\mathbb R^n}=\widehat f$. | Supplies the analytic continuation used by exact-support uncertainty. | literature-derived | ai-altered | S §3/L ch. 14; compact support supplies every polynomial moment and a uniform exponential majorant on compact $z$-sets. |
| 8 | `thm-qualitative-compact-support-uncertainty-principle` (theorem) — a function and its Fourier transform cannot both have compact support unless the function is zero. | Classical exact-support result stronger than item 6. | literature-derived | ai-altered | Item 7 and CA-6 identity theorem, applied successively on complex coordinate lines to the open real complement of the transform support, then FA injectivity. |
| 9 | `lem-hardy-entire-growth-rigidity` (lemma) — an entire Fourier--Laplace transform with the Gaussian directional growth and real-axis decay occurring in Hardy's theorem is zero in the supercritical case and a scalar Gaussian at the critical exponent. | Isolates the Phragmén--Lindelöf argument instead of hiding it in the headline theorem. | literature-derived | literature-derived | FM §1/S §4; prove the one-variable sector estimate from CA-6 maximum modulus and iterate over coordinate slices, with boundary and order hypotheses stated exactly. |
| 10 | `thm-hardy-gaussian-uncertainty-principle` (theorem) — if $|f(x)|\le Ce^{-\pi a|x|^2}$ and $|\widehat f(\xi)|\le Ce^{-\pi b|\xi|^2}$, then $ab>1$ forces $f=0$, while $ab=1$ forces a scalar Gaussian $e^{-\pi a|x|^2}$. | Required sharp Gaussian theorem with exact normalisation. | literature-derived | literature-derived | Complexify the transform under the first Gaussian bound and apply item 9 after rescaling; invert with FA. |
| 11 | `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp` (lemma) — if $ab<1$, choosing $a<c<1/b$ makes $e^{-\pi c|x|^2}$ satisfy both bounds. | Establishes the remaining parameter regime directly. | literature-derived | ai-altered | Gaussian transform formula; strict interval nonempty iff $ab<1$. |
| 12 | `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty` (remark) — item 9 is the precise complex-growth cost; no real-variable argument is silently substituted. | Records the cross-category interface. | literature-derived | not-applicable | FM §1. |
| 13 | `thm-finite-dft-support-product-uncertainty` (theorem) — for nonzero $f$ on $\mathbb Z/N\mathbb Z$, $|\operatorname{supp}f|\,|\operatorname{supp}\mathcal F_Nf|\ge N$. | Finite analogue with the unitary normalisation. | literature-derived | ai-altered | S §5/FR-18; Cauchy–Schwarz and $\|\mathcal F_Nf\|_\infty\le N^{-1/2}\|f\|_1$. |
| 14 | `rem-uncertainty-principles-measure-different-notions-of-localisation` (remark) — variance, support size, and Gaussian decay are inequivalent hypotheses and their conclusions are not interchanged. | Prevents a family of false corollaries. | literature-derived | not-applicable | FM/S comparison. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-gaussian-attains-heisenberg-equality` (example) — compute both variances of $e^{-\pi a|x|^2}$ and verify equality. | Checks every $2\pi$ constant. | literature-derived | ai-altered | S/L. |
| 2 | `cex-finite-variance-is-not-the-same-as-compact-support` (counterexample) — a Gaussian has finite variance and full support in both domains. | Separates items 5 and 7. | ai-generated | ai-generated | Direct leaf. |
| 3 | `ex-hardy-critical-and-subcritical-gaussian-regimes` (example) — tabulate $c=a=1/b$ and $a<c<1/b$. | Boundary verification for items 8–9. | ai-generated | ai-generated | Leaf. |
| 4 | `ex-finite-dft-delta-and-constant-extremisers` (example) — a delta and its constant transform have support product $N$. | Checks finite equality cases. | literature-derived | ai-altered | FR-18 direct transform. |
| 5 | `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` (counterexample) — the finite product bound rules out simultaneous one-point support for $N>1$. | Degenerate finite boundary check. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  Means and variances require a nonzero
function and finite moments.  The uncentred Heisenberg form is not called a
variance statement until item 2 centres it.  Hardy's equality Gaussian and
the supercritical zero case use the exact $ab=1$ normalisation.  The finite
theorem has $N\ge1$; at $N=1$ the product bound is equality, not an exception.

## Canonical-coverage harvest and heading→item crosswalk

The denominator for decomposition is the number of rows below marked
`included`: each row is one canonical source heading, not one theorem mention
and not one corroborating source.  The per-pair matrix records corroboration.
Every proposed mathematical-content id appears in at least one crosswalk row;
an id may appear twice only when two headings genuinely meet at an interface.

### Classical series through real Hardy space

| # | canonical heading read | disposition | exact item ids produced |
|---:|---|---|---|
| 1 | G §3.1.3, “The Dirichlet and Fejér Kernels,” pp. 178–180 | `included` | `def-dirichlet-and-fejer-kernels`; `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel`; `ex-dirichlet-kernel-at-zero-and-away-from-zero` |
| 2 | L ch. 1, “Fourier coefficients: basic properties,” pp. 9–14 | `included` | `lem-fourier-partial-sums-are-dirichlet-convolutions`; `thm-riemann-lebesgue-lemma-for-fourier-coefficients`; `ex-fourier-partial-sums-of-the-sawtooth` |
| 3 | L ch. 8, “Fourier series: convergence at a point,” pp. 47–52 | `included` | `lem-symmetric-difference-formula-for-fourier-partial-sums`; `thm-riemann-localisation-principle-for-fourier-series`; `thm-dini-pointwise-convergence-criterion-for-fourier-series`; `cor-local-holder-regularity-implies-fourier-convergence-at-a-point`; `lem-bounded-variation-gives-one-sided-dirichlet-integrability`; `thm-dirichlet-jordan-pointwise-convergence`; `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values`; `thm-lebesgue-constants-grow-logarithmically`; `ex-localisation-for-functions-equal-on-an-arc`; `cex-continuity-alone-does-not-satisfy-a-dini-modulus` |
| 4 | L ch. 2, “Fourier series: summability in norm,” pp. 15–24 | `included` | `def-cesaro-and-abel-means-of-a-fourier-series`; `lem-fejer-kernel-is-a-positive-approximate-identity`; `thm-fejer-convergence-in-lp`; `thm-fejer-uniform-convergence-for-continuous-periodic-functions`; `ex-fejer-means-of-a-single-character`; `cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data` |
| 5 | L ch. 3, “Fourier series: summability at a point,” pp. 25–26 | `included` | `thm-fejer-means-converge-at-lebesgue-points`; `lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity`; `thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points`; `thm-fejer-theorem-for-pointwise-midpoint-values`; `ex-poisson-integral-of-a-single-character`; `ex-fejer-summation-of-the-square-wave` |
| 6 | G §3.5, “A Tauberian theorem and Functions of Bounded Variation,” pp. 216–225 | `included` | `thm-cesaro-summability-implies-abel-summability`; `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`; `rem-gibbs-phenomenon`; `cex-abel-summability-does-not-imply-ordinary-convergence` |
| 7 | L ch. 4, “Fourier coefficients in $\ell^1(\mathbb Z)$ (or, $f\in A(\mathbb T)$),” pp. 27–30 | `included` | `def-wiener-algebra-of-the-circle`; `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence`; `thm-wiener-algebra-is-a-banach-algebra`; `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz`; `thm-bernstein-absolute-convergence-theorem`; `lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions`; `lem-holder-fourier-coefficients-have-weighted-ltwo-decay`; `def-periodic-ltwo-weak-derivative`; `lem-fourier-coefficients-of-a-periodic-weak-derivative`; `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`; `thm-wiener-lemma-for-absolutely-convergent-fourier-series`; `cor-holomorphic-functional-calculus-in-the-wiener-algebra`; `ex-a-trigonometric-polynomial-in-the-wiener-algebra`; `ex-an-absolutely-convergent-non-smooth-fourier-series`; `cex-continuity-does-not-imply-absolute-fourier-convergence`; `cex-the-bernstein-holder-one-half-endpoint-can-fail`; `cex-wiener-inversion-needs-nonvanishing` |
| 8 | G §3.3.3 and Exercise 3.3.8, absolute summability and its endpoint witness, pp. 200–203 | `included` | `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz`; `thm-bernstein-absolute-convergence-theorem`; `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`; `lem-discrete-van-der-corput-second-derivative-bound`; `lem-square-root-bound-for-k-log-k-exponential-sums`; `cex-continuity-does-not-imply-absolute-fourier-convergence`; `cex-the-bernstein-holder-one-half-endpoint-can-fail` |
| 9 | G §3.6.1, “Definition and Basic Properties of Lacunary Series,” pp. 227–229, with W §§5.1 and 13.1 | `included` | `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series`; `lem-hadamard-gaps-bound-additive-representations`; `thm-khintchine-inequalities-for-finite-rademacher-sums`; `ex-powers-of-two-form-a-hadamard-lacunary-sequence`; `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` |
| 10 | G §3.6.2, “Equivalence of $L^p$ Norms of Lacunary Series,” pp. 229–235 | `included` | `thm-lacunary-lp-norm-equivalence`; `cor-lacunary-series-lp-membership-is-coefficient-ell-two` |
| 11 | G §3.6.3, “Sidon sets,” pp. 235–237, with Kahane's finite-splitting argument | `included` | `def-dissociated-set-and-sidon-set-in-the-integer-dual`; `lem-a-hadamard-sequence-splits-into-finitely-many-strongly-lacunary-dissociated-subsequences`; `lem-riesz-product-for-a-strongly-lacunary-dissociated-set`; `lem-finite-union-step-for-the-hadamard-sidon-inequality`; `thm-hadamard-lacunary-sets-are-sidon`; `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients`; `ex-riesz-product-for-three-powers-of-three`; `cex-the-integers-are-not-a-sidon-set` |
| 12 | G §3.4.3, “Pointwise Divergence of the Dirichlet Means,” pp. 210–212 | `included` | `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`; `cex-continuous-function-with-divergent-fourier-series-at-a-point`; `ex-fourier-partial-sum-operators-and-uniform-boundedness`; `rem-continuous-fourier-series-need-not-converge-everywhere` |
| 13 | G §4.2.1, “Divergence of Fourier Series of Integrable Functions,” pp. 255–270 | `included` | `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima`; `rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere`; `rem-lone-fourier-series-can-diverge-almost-everywhere` |
| 14 | L ch. 8, Carleson/Kolmogorov endpoint discussion, pp. 51–52 | `included` | `def-carleson-maximal-partial-sum-operator`; `rem-carleson-hunt-almost-everywhere-convergence`; `rem-proof-cost-of-the-carleson-hunt-theorem`; `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence`; `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one`; `rem-the-lone-endpoint-is-excluded-from-carleson-hunt`; `cex-carleson-maximal-operator-is-not-strong-type-one-one` |
| 15 | G §2.5, “Convolution Operators on $L^p$ Spaces and Multipliers,” pp. 146–159 | `included` | `def-translation-invariant-fourier-multiplier-on-schwartz-space`; `lem-ltwo-fourier-multiplier-bound`; `ex-translation-and-differentiation-multiplier-symbols`; `cex-a-bounded-symbol-need-not-be-an-lp-multiplier-away-from-two` |
| 16 | G §6.2.3, “The Mihlin–Hörmander Multiplier Theorem on $\mathbb R^n$,” pp. 445–450 | `included` | `def-mihlin-symbol-with-more-than-half-dimension-derivatives`; `lem-dyadic-mihlin-kernels-have-uniform-size-and-smoothness-control`; `thm-mihlin-fourier-multiplier-theorem`; `rem-mihlin-does-not-assert-strong-endpoint-bounds`; `ex-heat-and-poisson-semigroups-as-fourier-multipliers`; `cex-a-jump-multiplier-fails-the-mihlin-hypotheses-but-may-be-lp-bounded` |
| 17 | W §6.2, “Characterization of function spaces: Hölder, Sobolev, Besov, Triebel, Hardy,” pp. 24–26 | `included` | `lem-weak-derivatives-are-polynomial-fourier-multipliers`; `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`; `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces`; `lem-bessel-potentials-shift-sobolev-order-isometrically`; `cor-sobolev-duality-from-the-fourier-pairing`; `ex-negative-sobolev-order-containing-a-dirac-mass` |
| 18 | L ch. 10, “Hilbert transform on $L^2(\mathbb T)$,” pp. 57–60 | `included` | `def-conjugate-function-on-the-circle`; `lem-conjugate-dirichlet-kernel-and-principal-value-formula`; `ex-hilbert-transform-of-the-poisson-kernel` |
| 19 | L ch. 12, “Hilbert transform on $L^p(\mathbb T)$,” pp. 67–70 | `included` | `thm-marcel-riesz-conjugate-function-theorem` |
| 20 | G §5.1, “The Hilbert Transform and the Riesz Transforms,” pp. 313–329 | `included` | `def-truncated-hilbert-transform-and-principal-value`; `lem-hilbert-transform-has-signum-fourier-multiplier`; `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity`; `lem-hilbert-transform-is-skew-adjoint-on-ltwo`; `thm-hilbert-transform-is-bounded-on-lp`; `def-riesz-transforms-on-euclidean-space`; `lem-riesz-transform-kernels-have-size-smoothness-and-cancellation`; `thm-riesz-transforms-are-bounded-on-lp`; `rem-hilbert-and-riesz-transform-endpoint-map`; `ex-hilbert-transform-of-an-interval-indicator`; `cex-hilbert-transform-is-not-strong-type-one-one`; `cex-hilbert-transform-does-not-map-linfinity-to-linfinity`; `ex-riesz-transforms-square-to-minus-the-identity-in-sum` |
| 21 | TaoA note 3 §4, “The Calderón–Zygmund decomposition,” pp. 20–24 | `included` | `lem-maximal-dyadic-cubes-at-height-lambda`; `lem-calderon-zygmund-decomposition-at-height-lambda`; `ex-calderon-zygmund-decomposition-of-an-interval-indicator` |
| 22 | G §5.3, “The Calderón–Zygmund Decomposition and Singular Integrals,” pp. 355–371 | `included` | `def-calderon-zygmund-kernel-and-principal-value-operator`; `def-standard-holder-calderon-zygmund-kernel`; `lem-cz-good-part-has-controlled-ltwo-image`; `lem-cz-bad-part-is-integrable-away-from-expanded-cubes`; `thm-calderon-zygmund-operator-has-weak-type-one-one`; `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`; `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`; `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`; `ex-riesz-transform-as-a-standard-calderon-zygmund-operator`; `cex-calderon-zygmund-strong-lone-bound-fails`; `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`; `cex-size-without-cancellation-does-not-give-a-principal-value-operator`; `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` |
| 23 | W §3.8, “Maximal SIOs, Cotlar’s inequality,” pp. 11–12 | `included` | `def-maximal-truncated-singular-integral`; `lem-cotlar-inequality-for-maximal-truncations`; `thm-maximal-truncations-are-weak-one-one-and-strong-lp`; `cor-principal-value-truncations-converge-almost-everywhere` |
| 24 | Wa §1.1.1, “Maximal Characterization of $H^p$,” printed pp. 2–6 | `included` | `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`; `def-real-hardy-space-by-a-radial-maximal-function`; `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions`; `thm-maximal-function-characterisations-of-real-hardy-spaces`; `cor-real-hardy-space-equals-lp-for-p-greater-than-one`; `rem-real-hp-is-quasi-banach-below-one` |
| 25 | Wa §1.1.3, “Atomic Decomposition of $H^p$,” printed pp. 10–12 (PDF pp. 18–20) | `included` | `def-hp-atom-with-moment-order`; `lem-an-hp-atom-has-uniform-hp-quasinorm`; `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`; `lem-hardy-calderon-zygmund-level-decomposition-produces-atoms`; `thm-atomic-characterisation-of-real-hp`; `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range`; `ex-a-normalised-mean-zero-hone-atom`; `cex-a-normalised-cube-indicator-is-not-a-hone-atom`; `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone`; `cex-an-hone-atom-need-not-be-smooth` |
| 26 | W §7.6, “Atomic decomposition of (classical) $H^1$ functions,” pp. 40–46 | `included` | `thm-riesz-transform-characterisation-of-real-hone`; `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation`; `ex-hilbert-transform-of-a-hone-atom-is-integrable` |

### BMO through uncertainty

| # | canonical heading read | disposition | exact item ids produced |
|---:|---|---|---|
| 27 | K ch. 3, “Bounded mean oscillation,” especially §3.3 “The John–Nirenberg inequality,” pp. 34–64 | `included` | `def-bmo-seminorm-and-quotient-by-constants`; `lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically`; `lem-john-nirenberg-stopping-cubes-have-geometric-decay`; `thm-john-nirenberg-exponential-inequality`; `cor-bmo-lp-oscillation-norms-are-equivalent`; `cor-linfinity-embeds-properly-into-bmo`; `ex-logarithm-is-in-bmo-but-not-linfinity`; `ex-bmo-seminorm-is-unchanged-by-adding-a-constant`; `cex-bmo-functions-need-not-be-globally-integrable`; `ex-john-nirenberg-tail-integration` |
| 28 | W §7.2, “BMO as a substitute for $L^\infty$,” pp. 32–34 | `included` | `thm-calderon-zygmund-operators-map-linfinity-to-bmo`; `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo` |
| 29 | W §7.7, “$H^1$–BMO duality,” pp. 46–47 | `included` | `lem-bmo-functions-pair-uniformly-with-hone-atoms`; `thm-bmo-defines-a-bounded-functional-on-hone`; `lem-hone-functional-has-compatible-local-ltwo-representatives`; `lem-the-dual-representative-has-uniform-bmo-oscillation`; `thm-real-hone-bmo-duality`; `cex-dyadic-bmo-for-one-grid-is-not-identical-to-bmo` |
| 30 | G §6.1, “Littlewood–Paley Theory,” pp. 419–434 | `included` | `def-inhomogeneous-dyadic-frequency-partition`; `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds`; `lem-ltwo-almost-orthogonality-of-dyadic-pieces`; `def-littlewood-paley-square-function`; `thm-littlewood-paley-square-function-equivalence-on-lp`; `lem-littlewood-paley-reproducing-formula-in-tempered-distributions`; `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space`; `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements`; `ex-square-function-of-one-frequency-localised-function`; `ex-dyadic-square-function-of-two-separated-frequency-packets`; `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels`; `cex-a-bounded-symbol-need-not-be-an-lp-multiplier-away-from-two` |
| 31 | W §5.3, “Proof of LP using the Mihlin multiplier theorem and Khinchine’s inequality,” pp. 21–22 | `included` | `lem-rademacher-randomisation-converts-square-functions-to-multipliers`; `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` |
| 32 | W §6.2, function-space characterisations, pp. 24–26 | `included` | `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces`; `thm-square-function-characterisation-of-real-hone`; `cex-the-lp-square-function-equivalence-does-not-extend-as-stated-to-linfinity`; `ex-sobolev-weight-on-a-single-dyadic-annulus` |
| 33 | G §7.1, “The $A_p$ Condition,” pp. 499–511 | `included` | `def-muckenhoupt-a-p-and-a-one-weights`; `lem-a-p-dual-weight-and-nesting-properties`; `lem-a-p-weights-are-doubling`; `lem-weighted-maximal-weak-bound-for-a-one`; `thm-hardy-littlewood-maximal-operator-characterises-a-p`; `rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one`; `ex-power-weight-a-p-range`; `cex-power-weight-fails-at-both-a-p-endpoints`; `ex-a-one-power-weight-range`; `cex-a-doubling-weight-need-not-be-a-p`; `ex-weighted-norm-of-an-interval-indicator` |
| 34 | G §7.2, “Reverse Hölder Inequality for $A_p$ Weights and Consequences,” pp. 514–521 | `included` | `thm-reverse-holder-self-improvement-for-a-p-weights`; `cor-a-p-classes-are-open-in-the-exponent` |
| 35 | G §7.4, “Weighted Norm Inequalities for Singular Integrals,” pp. 532–545 | `included` | `lem-weighted-good-lambda-inequality-for-maximal-truncations`; `thm-calderon-zygmund-operators-are-bounded-on-weighted-lp`; `cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp` |
| 36 | W §11.1, “Stationary phase and the role of nonvanishing Gauss curvature,” pp. 71–73 | `included` | `def-fourier-restriction-and-adjoint-extension-operators`; `lem-restriction-and-extension-estimates-are-dual`; `lem-van-der-corput-oscillatory-integral-estimate`; `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`; `lem-stationary-phase-decay-for-spherical-surface-measure`; `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature`; `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise`; `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` |
| 37 | Wo §2, “The restriction problem,” and cap example, pp. 6–10 | `included` | `lem-cap-wave-packet-has-dual-tube-concentration`; `thm-knapp-necessary-condition-for-spherical-ltwo-restriction`; `rem-the-general-fourier-restriction-problem`; `ex-knapp-cap-and-tube-volume-calculation`; `cex-knapp-rules-out-extension-below-the-tomas-exponent` |
| 38 | W §11.3, “Proof of the Tomas–Stein theorem,” pp. 73–74 | `included` | `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform`; `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds`; `lem-stein-tomas-tt-star-bound-from-fractional-integration`; `thm-stein-tomas-spherical-restriction-theorem`; `ex-circle-stein-tomas-exponents` |
| 39 | W §11.4, “Application: Strichartz estimates and a nonlinear Schrödinger equation,” pp. 74–77 | `included` | `rem-restriction-estimates-and-the-missing-strichartz-interface` |
| 40 | Ko §9, characters and the character-group topology, pp. 20–22 | `included` | `def-pontryagin-dual-and-compact-open-topology`; `lem-compact-open-character-group-operations-are-continuous`; `lem-character-evaluation-pairing-is-jointly-continuous`; `lem-dual-homomorphisms-are-continuous-and-functorial`; `thm-dual-of-an-lca-group-is-locally-compact-abelian`; `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`; `lem-duals-of-finite-products-and-discrete-direct-sums`; `ex-pontryagin-dual-of-the-integers-is-the-circle`; `ex-pontryagin-dual-of-the-circle-is-the-integers`; `ex-pontryagin-dual-of-euclidean-space`; `ex-pontryagin-dual-of-a-finite-cyclic-group` |
| 41 | Lo §35, “Examples,” especially §§35A–35B, pp. 138–140 | `included` | `def-annihilator-of-a-subgroup`; `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`; `lem-duals-of-finite-products-and-discrete-direct-sums`; `ex-pontryagin-dual-of-the-integers-is-the-circle`; `ex-pontryagin-dual-of-the-circle-is-the-integers`; `ex-pontryagin-dual-of-euclidean-space` |
| 42 | Lo §37, “Miscellaneous Theorems,” Pontryagin-duality portion, pp. 151–152, with Ko §§13–14 | `included` | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group`; `lem-positive-compactly-supported-transform-bump-on-the-dual`; `thm-pontryagin-biduality`; `lem-continuous-characters-separate-points-of-an-lca-group`; `thm-principal-structure-theorem-for-lca-groups`; `lem-character-extension-from-a-closed-subgroup-of-an-lca-group`; `lem-annihilator-reverses-inclusion-and-double-annihilator-closes`; `thm-dual-of-a-closed-subgroup-is-the-dual-quotient`; `thm-compact-discrete-duality-for-lca-groups`; `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients`; `cor-pontryagin-duality-is-a-contravariant-involution`; `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` |
| 43 | Lo §34, “The Character Group,” pp. 134–137 | `included` | `def-fourier-transform-on-an-lca-group`; `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution`; `thm-riemann-lebesgue-lemma-on-lca-groups`; `lem-lca-positive-convolution-squares-form-an-inversion-core`; `ex-haar-normalisations-on-the-circle-and-the-integers`; `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` |
| 44 | Lo §36B, inversion on the positive-definite/integrable core, pp. 142–144 | `included` | `thm-lca-fourier-inversion-for-integrable-transform`; `lem-lca-parseval-pairing-on-the-integrable-core`; `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` |
| 45 | Lo §36A and Ko §§10--12, uniqueness and Bochner's theorem, pp. 141–142 and 22–25 | `included` | `lem-fourier-stieltjes-transforms-determine-finite-radon-measures`; `def-positive-definite-function-on-an-abelian-group`; `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite`; `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core`; `lem-bochner-functional-extends-and-has-a-radon-representing-measure`; `thm-bochner-theorem-for-lca-groups`; `cor-normalised-positive-definite-functions-correspond-to-probability-measures`; `ex-a-character-is-positive-definite`; `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` |
| 46 | T §11, “The discrete Fourier transform,” PDF pp. 86–93 | `included` | `lem-orthogonality-of-characters-on-a-finite-cyclic-group`; `def-unitary-discrete-fourier-transform-on-z-mod-n`; `thm-finite-fourier-inversion`; `thm-finite-parseval-and-plancherel`; `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`; `lem-dft-squares-to-reflection-and-has-fourth-power-identity`; `ex-unitary-dft-for-n-equals-one-and-two`; `ex-cyclic-convolution-via-the-dft`; `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` |
| 47 | T §12, “The fast Fourier transform,” PDF pp. 94–100 | `included` | `def-unnormalised-engineering-dft-and-conversion`; `lem-radix-two-even-odd-dft-factorisation`; `def-recursive-radix-two-fast-fourier-transform`; `thm-radix-two-fft-correctness`; `thm-radix-two-fft-arithmetic-complexity`; `ex-four-point-radix-two-fft`; `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` |
| 48 | MITF §4, “The Cooley–Tukey Fast Fourier Transform Algorithm,” unpaginated | `included` | `rem-cooley-tukey-factorisation-for-composite-lengths` |
| 49 | L ch. 22, “Band limited functions,” pp. 129–134 | `included` | `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval`; `thm-shannon-sampling-for-bandlimited-ltwo-functions`; `cor-nyquist-no-aliasing-condition`; `rem-aliasing-above-the-nyquist-rate`; `ex-shannon-reconstruction-of-a-sinc-function`; `cex-undersampling-identifies-two-distinct-pure-frequencies` |
| 50 | L ch. 23, “Periodization and Poisson summation,” pp. 135–140 | `included` | `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable`; `lem-fourier-coefficients-of-lattice-periodisation`; `rem-schwartz-poisson-formula-is-owned-by-functional-analysis`; `thm-poisson-summation-under-two-sided-polynomial-decay`; `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis`; `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation` |
| 51 | T §7, “The method of images and Poisson’s summation formula,” PDF pp. 59–68 | `included` | `def-full-rank-lattice-covolume-and-dual-lattice`; `thm-poisson-summation-for-a-full-rank-lattice`; `lem-dirac-comb-is-self-dual-as-a-tempered-distribution`; `lem-sampling-produces-periodisation-in-frequency`; `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` |
| 52 | S §2, variance/Heisenberg uncertainty, pp. 2–6 | `included` | `def-spatial-and-frequency-centres-and-variances`; `lem-centering-by-translation-and-modulation-preserves-the-variance-product`; `lem-position-derivative-commutator-estimate`; `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`; `cor-dimensional-heisenberg-uncertainty-inequality`; `ex-gaussian-attains-heisenberg-equality`; `cex-finite-variance-is-not-the-same-as-compact-support` |
| 53 | S §3, support uncertainty, pp. 6–8 | `included` | `thm-support-measure-uncertainty-inequality`; `lem-compact-support-gives-an-entire-fourier-laplace-transform`; `thm-qualitative-compact-support-uncertainty-principle` |
| 54 | FM §1, Hardy’s uncertainty principle, pp. 1–5 | `included` | `lem-hardy-entire-growth-rigidity`; `thm-hardy-gaussian-uncertainty-principle`; `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`; `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`; `rem-uncertainty-principles-measure-different-notions-of-localisation`; `ex-hardy-critical-and-subcritical-gaussian-regimes` |
| 55 | S §5, finite uncertainty principles, pp. 10–13 | `included` | `thm-finite-dft-support-product-uncertainty`; `ex-finite-dft-delta-and-constant-extremisers`; `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` |
| 56 | G §5.2, “Homogeneous Singular Integrals and the Method of Rotations,” pp. 333–353 | `included` | `def-standard-holder-calderon-zygmund-kernel`; `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` |
| 57 | G §5.4, “Sufficient Conditions for $L^p$ Boundedness,” pp. 374–384 | `included` | `def-standard-holder-calderon-zygmund-kernel`; `thm-maximal-truncations-are-weak-one-one-and-strong-lp`; `cex-size-without-cancellation-does-not-give-a-principal-value-operator` |
| 58 | G §4.1.1, “Equivalent Formulations of Convergence in Norm,” pp. 242–245 | `included` | `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp`; `thm-fourier-partial-sums-converge-in-periodic-lp` |
| 59 | G §7.3, “The $A_\infty$ Condition,” pp. 525–530 | `included` | `def-muckenhoupt-a-infinity-class`; `thm-a-infinity-power-decay-characterisation` |
| 60 | L ch. 13, “Applications of interpolation,” pp. 71–74 | `included` | `thm-hausdorff-young-for-periodic-fourier-coefficients`; `thm-hausdorff-young-for-the-euclidean-fourier-transform` |
| 61 | Lo §36C, dual Haar normalisation, p. 144 | `included` | `thm-compatible-dual-haar-normalisation` |
| 62 | Lo §36D and Ko §12, Plancherel extension, pp. 144–146 and 25–26 | `included` | `thm-lca-plancherel-isometric-extension`; `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual`; `thm-plancherel-theorem-for-lca-groups`; `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` |
| 63 | G §4.1.2, “The $L^p$ Boundedness of the Conjugate Function,” pp. 246–249 | `included` | `thm-marcel-riesz-conjugate-function-theorem` |
| 64 | W §11.2 and Gu §§1–3, fractional integration | `included` | `def-riesz-potential-of-order-alpha`; `lem-riesz-potential-near-far-splitting`; `lem-hedberg-pointwise-inequality`; `thm-hardy-littlewood-sobolev-fractional-integration`; `rem-fractional-integration-endpoints`; `ex-riesz-potential-scaling-determines-the-target-exponent`; `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint`; `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint` |
| 65 | G §4.2.1, Kolmogorov's block construction, pp. 255–270 | `included` | `def-kolmogorov-analytic-partial-sum-maximal-function`; `lem-kolmogorov-block-polynomial-with-large-partial-sums`; `lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima`; `lem-kolmogorov-gliding-hump-series-converges-in-lone`; `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set`; `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere`; `ex-one-finite-kolmogorov-frequency-block`; `ex-summable-exceptional-measures-in-the-kolmogorov-induction` |
| 66 | LC §2, decomposition into time--frequency tiles, pp. 5–11 | `included` | `def-carleson-operator-and-measurable-linearisation`; `def-carleson-tiles-wave-packets-and-tile-order`; `lem-wave-packet-model-dominates-the-linearised-carleson-operator`; `ex-two-comparable-and-two-incomparable-carleson-tiles` |
| 67 | LC §3, central tile lemmas and summation, pp. 11–14 | `included` | `def-density-size-and-tree-count-for-carleson-tiles`; `lem-carleson-forest-summation-gives-restricted-weak-ltwo`; `ex-balancing-density-and-size-levels-in-the-carleson-sum` |
| 68 | LC §4, density lemma, pp. 14–16 | `included` | `lem-carleson-density-selection` |
| 69 | LC §5, size lemma, pp. 16–20 | `included` | `lem-carleson-size-selection` |
| 70 | LC §6, tree lemma, pp. 20–24 | `included` | `lem-carleson-single-tree-estimate`; `thm-carleson-maximal-operator-is-strong-ltwo` |
| 71 | LC §7, $L^p$ Carleson theorem, pp. 24–29 | `included` | `lem-hunt-exceptional-set-and-distribution-estimates`; `thm-carleson-hunt-maximal-inequality-on-the-torus`; FR-5's existing closure lemma/corollary; `rem-carleson-hunt-does-not-include-the-lone-endpoint` |
| 72 | Fr §286, complete Carleson proof and torus closure, pp. 493–521 | `included` | `thm-carleson-maximal-operator-is-strong-ltwo`; `thm-carleson-hunt-maximal-inequality-on-the-torus`; FR-5's existing closure lemma/corollary |

The following audit-added factorisations belong to canonical rows already
counted above, so they do not enlarge the denominator.  This table makes the
otherwise easy-to-miss supplier IDs explicit.

| counted canonical row(s) | additional exact item ids |
|---|---|
| 1--3 | `def-period-one-fourier-coefficients-partial-sums-and-convolution`; `lem-step-functions-have-vanishing-torus-fourier-coefficients`; `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` |
| 15--17 | `def-lp-fourier-multiplier-and-multiplier-norm`; `def-japanese-bracket-bessel-potential-operator`; `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control`; `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation`; `rem-fefferman-ball-multiplier-obstruction`; `rem-jump-multipliers-can-be-bounded-outside-mihlin` |
| 20 | `cor-hilbert-transform-is-bounded-on-lp`; `cor-riesz-transforms-are-ltwo-bounded`; `cor-riesz-transforms-are-bounded-on-lp`; `lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds` |
| 24--26 | `def-grand-maximal-test-class-of-order-n`; `lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space`; `lem-local-polynomial-projections-match-moments-through-order-s`; `lem-calderon-reproducing-formula-for-the-hardy-decomposition`; `rem-riesz-transform-characterisation-of-real-hone` |
| 29 | `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone`; `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` |
| 30--32 | `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition`; `def-lusin-area-function-for-a-fixed-admissible-kernel`; `rem-square-function-characterisation-of-real-hone`; `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` |
| 33--35 and 59 | `lem-a-p-distribution-decay-from-maximal-cubes`; `lem-unweighted-good-lambda-covering-for-maximal-truncations`; `rem-a-doubling-weight-need-not-be-a-p` |
| 41--45 and 62 | `ex-annihilator-of-a-closed-subgroup-of-euclidean-space`; `ex-bidual-map-on-the-circle-and-the-integers`; `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` |

## Deliberately not decomposed

The following are the numbered headings within the declared read ranges that
were deliberately not converted into additional FR items.  Headings used as
corroboration for an included row are absent from this table: they did produce
content, but the crosswalk counts one canonical heading rather than every
independent treatment.

| source heading read | reason for no FR item |
|---|---|
| L ch. 5, “Fourier coefficients in $\ell^2(\mathbb Z)$ (or, $f\in L^2(\mathbb T)$),” pp. 31–34 | Functional analysis owns the Hilbert-space Fourier-series view, Parseval, completeness, and Riesz–Fischer on `orthonormal-bases-parseval-and-fourier-series`. |
| L ch. 6, “Maximal functions,” pp. 35–42 | Measure theory owns the Hardy–Littlewood maximal theorem and Lebesgue differentiation under subjects-01 ruling R-6.  FR cites that page wherever the maximal operator is load-bearing. |
| L chs. 14–19 — “Fourier transforms: basic properties,” “Fourier integrals: summability in norm,” “Fourier inversion when $\widehat f\in L^1$,” “Fourier transforms in $L^2$,” “Fourier integrals: summability a.e.,” and “Fourier integrals: norm convergence,” pp. 79–112 | These six headings are the transform, inversion, approximate-identity, and Plancherel spine assigned to functional analysis.  FR takes them as prerequisites and does not re-mint them. |
| L appendices A–C — “Minkowski's integral inequality,” “$L^p$ norms and the distribution function,” and “Interpolation,” pp. 161–175 | These are measure-theory/interpolation infrastructure.  In particular, R-6 assigns both Marcinkiewicz and Riesz–Thorin to MT; FR only builds their Fourier applications. |
| G §§1.3.1–1.3.3 — “Real Method: The Marcinkiewicz Interpolation Theorem,” “Complex Method: The Riesz–Thorin Interpolation Theorem,” and “Interpolation of Analytic Families of Operators,” pp. 33–44 | The first two are MT-owned by R-6.  Analytic-family interpolation would also require complex-analysis infrastructure above the FR anchor and is not needed for the chosen proofs. |
| G §§3.2.1–3.2.3 — “Partial sums and Fourier inversion,” “Fourier series of square summable functions,” and “The Poisson Summation Formula,” pp. 183–190 | The first two duplicate the FA Fourier-series foundation; the third duplicates FA's exact Schwartz Poisson theorem.  FR-19 builds only the lattice form, wider sourced hypotheses, and sampling consequences. |
| G §4.1.3, “Bochner–Riesz Summability,” pp. 250–253, and §4.2.2, “Divergence of Bochner–Riesz Means of Integrable Functions,” pp. 261–270 | This is a separate multidimensional spherical-summability branch.  It is not a prerequisite for the commissioned restriction statement or Stein–Tomas proof, so adding it would expand the track for no dependency closure. |
| G §§4.3.1–4.3.6 — “Multipliers on the Torus,” “Transference of Multipliers,” “Applications of Transference,” “Transference of Maximal Multipliers,” “Applications to Almost Everywhere Convergence,” and “Almost Everywhere Convergence of Square Dirichlet Means,” pp. 271–289 | Full transference and multidimensional rectangular/square partial-sum theory form an advanced follow-on branch.  The scaffold records only the specific periodic/Euclidean interfaces it actually consumes. |
| G §§6.3.1–6.3.3 — “Estimates for Maximal Operators,” “Estimates for Singular Integrals with Rough Kernels,” and “An Almost Orthogonality Principle on $L^p$,” pp. 453–461 | Rough kernels and their maximal theory require another layer beyond the standard CZ kernels commissioned here.  They are genuinely valuable but peripheral to this ground-up spine. |
| G §§7.5.1–7.5.3 — “Factorization of Weights,” “Extrapolation from Weighted Estimates on a Single $L^{p_0}$,” and “Weighted Inequalities Versus Vector-Valued Inequalities,” pp. 546–558 | Rubio de Francia extrapolation and factorisation are a second weighted-theory layer; neither is needed to prove the $A_p$ maximal/CZ results retained on FR-12. |
| TaoA note 2, the interpolation headings, pp. 1–31, and note 3 §§1–3, the maximal-function and differentiation headings, pp. 1–19 | These are independent verification of the MT-owned interpolation/maximal spine.  Only note 3 §4's CZ decomposition is converted into FR content. |
| TaoA note 5 §2, the pseudodifferential-operator discussion, pp. 7–14 | Pseudodifferential calculus is a microlocal/PDE subject that the library has not reached; the Mihlin and Littlewood–Paley results here do not require minting that calculus. |
| W ch. 4, “Singular integral operators acting on Banach space-valued functions,” pp. 13–14 | General Banach-valued CZ theory is not required for the scalar Littlewood–Paley proof retained here; the needed randomised scalar estimate is split directly on FR-11. |
| W §§6.3–6.4, “Singular integrals on $C^\alpha$” and “Sobolev embedding of $\dot H^s$ for $0\le s<d/2$,” pp. 27–28 | The first is a Hölder-space regularity application and the second is explicitly PDE-owned Sobolev embedding.  FR retains only Fourier characterisations of PDE's spaces. |
| K ch. 1, “Maximal functions,” pp. 1–20, and ch. 2, “Interpolation,” pp. 21–33 | These independently verify results assigned to MT.  They are cited as prerequisites, not duplicated. |
| Wo §1, “$L^1$ Fourier transform,” pp. 1–5 | This is FA-owned transform infrastructure.  Wo's restriction sections 2–7 are retained; the basic transform is not. |
| Wo §10, “The Kakeya Problem,” pp. 72–81 | Kakeya maximal estimates and the restriction–Kakeya conjectural interface are a substantial geometric branch beyond the requested restriction problem and Stein–Tomas statement.  No open conjecture is turned into a dependency. |
| T §3, “The Fourier transform,” PDF pp. 24–38 | This is a second full treatment of FA's transform/inversion material.  T's Poisson, LCA special cases, DFT, and FFT sections are used later instead. |
| Lo §§28–33 — “The topology of locally compact groups,” “The Haar integral,” “The modular function,” “The group algebra,” “Representations,” and “Quotient measures,” pp. 108–133 | Haar existence/uniqueness and representation theory are RG-owned.  Group-algebra and quotient-measure machinery is used only inside Loomis's sourced proof cost; extracting it into FR would violate that seam.  The required Haar supplier is now the concrete RG-18 A page. |
| Lo §37, “Miscellaneous Theorems,” its Wiener–Tauberian and Poisson-summation portions, pp. 147–151 | The exact Banach-algebra infrastructure used by the circle Wiener lemma remains FA-owned, and FA already owns the basic Schwartz Poisson formula.  FR uses only §37's Pontryagin-duality portion and builds the distinct lattice/sampling extensions on FR-19. |
| FM §2, the dynamical/Schrödinger versions of Hardy uncertainty, pp. 5–8 | These require dispersive PDE and Strichartz estimates.  PDE currently exposes no Strichartz page, so FR records the declared sourced, non-load-bearing forward interface rather than building a PDE branch. |
| S §1, “The Fourier transform,” pp. 1–2 | Basic definition and transform identities belong to FA.  S §§2–5 supply the uncertainty items retained on FR-20. |

### Seam-controlled refusals

- No Fourier transform, Schwartz-space invariance, tempered-distribution
  transform, Plancherel theorem, Hilbert-basis Fourier-series theorem, basic
  Schwartz Poisson formula, basic Heisenberg theorem, or exact Wiener lemma was
  re-minted: those remain FA-owned.
- No Hardy–Littlewood maximal theorem, Lebesgue differentiation theorem,
  Marcinkiewicz interpolation theorem, or Riesz–Thorin interpolation theorem
  was re-minted: R-6 leaves them with MT.
- No definition of Sobolev spaces or Sobolev embedding was re-minted: PDE owns
  those; FR supplies only the Fourier characterisations.
- No Haar existence/uniqueness theorem or noncommutative unitary
  representation theory was re-minted.  The former is supplied by RG-18
  `haar-measure-existence-and-uniqueness` for FR-15--FR-17, and the latter is
  wholly RG-owned.
- No Strichartz theorem was re-minted.  W §11.4 yields only the sourced,
  non-load-bearing `rem-restriction-estimates-and-the-missing-strichartz-interface`,
  emitted with `proved_here: false` until a PDE supplier is commissioned.
- No holomorphic Hardy space or BMOA page was minted.  FR-9/FR-10 use the real
  variable spaces; the holomorphic versions belong to complex analysis.

## Verified measurements

The commission target did not exist before this pass, so the verified before
count is **0 proposed item ids**.  The finished scaffold contains **378 distinct
proposed item ids**: 280 on A pages and 98 dependency-leaf items on B pages,
across **22 A/B pairs** and 44 proposed page ids.  The four FR-15 B ids are
listed compactly in prose; the remaining 368 ids occupy item rows.

The crosswalk has **72 `included` canonical-heading dispositions**.  The
decomposition ratio is therefore **378 / 72 = 5.25×**.  This denominator counts
one canonical heading for each decomposed source unit; independent corroborating
treatments are recorded in the per-pair source matrix and are not double-counted.

The largest A page is **FR-8 at 20 items**.  No page
approaches the mandatory split threshold of 60, so no A/B split was made.  The
source corpus contains 23 full-treatment entries on **18 distinct source hosts**.
Every pair has at least two independent full treatments; a dash in the
supplementary column means only that no third source was needed.

Mechanical checks for these figures use only item rows before the canonical
crosswalk, not repeated ids in the crosswalk or ownership discussion.  The same
check verifies that every mathematical-content row has separate statement and
proof provenance and uses only the SCHEMA §3 vocabulary.

## Probability Theory reconciliation (2026-09-08)

Remove the spurious published page requirement
`dirichlet-kernel-localisation-and-pointwise-fourier-convergence` ->
`itos-formula-and-brownian-martingales-examples`. The Fourier page has zero
Probability item dependencies, so the complete item-level impact is zero. A
future Probability B page is never a supplier; this Phase-3 page-edge deletion
creates no Fourier Phase-2 root.

## Representation Theory reconciliation (2026-09-08)

The RG audit confirms the stable seam: RG-18 A
`haar-measure-existence-and-uniqueness` precedes FR-15 characters and
FR-16--FR-17 LCA Bochner/Pontryagin/Plancherel. Fourier mints no Haar theorem,
and later RG pages use FR-16/FR-17 only for abelian specializations. At plan
integration, remove obsolete relative `FR-14`, `FR-15`, and `FR-n`
placeholders from historical prose/requirements in favour of the stable A-page
ids in this scaffold. This creates no new Fourier Phase-2 root.
