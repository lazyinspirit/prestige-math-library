# Fourier analysis track — subjects-02 prose scaffold

> **Commission:** prefix `FR`; anchor
> `scalar-conservation-laws-and-entropy-solutions-examples`; eighteen A/B
> pairs, in the order FR-1 through FR-18.  This is a scaffold, not authored
> content.  No page or item below is established merely by appearing here.

## Summary for the orchestrator

This track begins with classical Fourier series, then develops the real-variable
endpoint theory, and ends with abelian, finite, lattice, and uncertainty
theory.  The proposed reading order is:

| pair | A page | purpose |
|---|---|---|
| FR-1 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence` | partial sums, localisation, Dirichlet/Dini/Jordan criteria |
| FR-2 | `fejer-and-poisson-summability-of-fourier-series` | Cesàro/Abel summability and Gibbs behaviour |
| FR-3 | `absolute-convergence-and-the-wiener-algebra` | Bernstein absolute convergence and Wiener inversion |
| FR-4 | `lacunary-fourier-series-and-sidon-sets` | gap series, Khintchine comparison, Sidon sets |
| FR-5 | `divergence-and-almost-everywhere-convergence-of-fourier-series` | du Bois-Reymond, Kolmogorov, Carleson–Hunt |
| FR-6 | `fourier-multipliers-and-sobolev-characterisations` | multiplier language, Hausdorff–Young, and Fourier descriptions of PDE-owned Sobolev spaces |
| FR-7 | `hilbert-and-riesz-transforms` | conjugate functions, principal values, exact endpoints |
| FR-8 | `calderon-zygmund-decomposition-and-singular-integrals` | CZ decomposition, weak type, maximal truncations, and the Mihlin application |
| FR-9 | `real-hardy-spaces-maximal-functions-and-atoms` | $H^p$, $0<p\leq1$, maximal and atomic descriptions |
| FR-10 | `bmo-john-nirenberg-and-h1-duality` | BMO, exponential tails, $H^1$–BMO duality |
| FR-11 | `littlewood-paley-theory-and-square-functions` | dyadic frequency pieces and square functions |
| FR-12 | `muckenhoupt-weights-and-weighted-estimates` | $A_p$, reverse Hölder, weighted maximal/CZ bounds |
| FR-13 | `fourier-restriction-and-the-stein-tomas-theorem` | restriction obstruction, Knapp test, Stein–Tomas |
| FR-14 | `pontryagin-duality-for-locally-compact-abelian-groups` | character groups, annihilators, biduality |
| FR-15 | `bochner-inversion-and-plancherel-on-lca-groups` | LCA Fourier analysis, compatible Haar normalisation, Bochner |
| FR-16 | `finite-fourier-analysis-and-the-fast-fourier-transform` | DFT, inversion, convolution, radix-two FFT correctness |
| FR-17 | `poisson-summation-sampling-and-lattice-duality` | Poisson hypotheses, scaled lattices, sampling |
| FR-18 | `uncertainty-principles-for-fourier-analysis` | Heisenberg, Hardy, and finite-support uncertainty |

Every A page has its same-id `-examples` B companion.  B pages are dependency
leaves.  No A page depends on a B page, and no generated example is a
dependency target.  The largest proposed A page is reported in the verified
measurements at the end; none exceeds the sixty-item split threshold.

### Ownership and amendments owed

- Functional analysis retains the torus, Fourier coefficients, trigonometric
  orthogonality, Hilbert-basis completeness, Parseval, and Riesz–Fischer on
  `orthonormal-bases-parseval-and-fourier-series`.  Its exact items
  `def-dirichlet-and-fejer-kernels`,
  `lem-fejer-kernel-is-a-positive-approximate-identity`,
  `thm-fejer-uniform-convergence-for-continuous-periodic-functions`,
  `thm-dirichlet-jordan-pointwise-convergence`,
  `cex-continuous-function-with-divergent-fourier-series-at-a-point`, and
  `rem-gibbs-phenomenon` transfer to FR-1/FR-2/FR-5.  FA can obtain
  trigonometric density from Stone–Weierstrass, so this transfer does not make
  FA cite forward.  FA's expressly reserved reuse id
  `ex-fourier-partial-sum-operators-and-uniform-boundedness` is also consumed
  on FR-5.  The exact id
  `thm-wiener-lemma-for-absolutely-convergent-fourier-series` remains on FA-18
  and is cited by FR-3; FR does not re-mint it.
- Functional analysis retains the transform, Schwartz space, distributions,
  tempered distributions, and Plancherel.  Its Schwartz Poisson formula and
  Schwartz Heisenberg theorem retain their exact ids and are cited by FR-17
  and FR-18; FR supplies hypotheses/extensions and applications rather than a
  duplicate basic transform theorem.
- PDE retains Hölder/Sobolev spaces, elliptic regularity, and the
  $W^{2,p}$ consequences.  The generic harmonic-analysis items currently
  sitting in PDE-19 — the CZ kernel definition, decomposition, weak endpoint,
  interpolation/duality split, generic $L^p$ theorem, and two endpoint
  counterexamples — transfer with their exact ids to FR-8.  PDE-19 should cite
  FR-8 and retain only the Newtonian-Hessian seed and elliptic applications.
- Measure theory remains the owner of convolution/density in $L^p$, the
  Hardy–Littlewood maximal theorem with differentiation, Marcinkiewicz and
  Riesz–Thorin interpolation.  FR cites those pages and proves no duplicate.
- Representation theory owns Haar measure and noncommutative unitary
  representation theory.  FR owns only LCA duality/analysis.  At dispatch time
  no RG scaffold or relative label exists, so FR-14/FR-15 carry the explicit
  unresolved prerequisite `RG-? (Haar existence and uniqueness)`.  The safe
  reconciliation is for RG to expose its Haar foundation before FR, or for the
  seam owner to amend the contract to let FR build the abelian Haar theorem.
  No Haar theorem is minted here.
- The dispatch asks FR to cite PDE for Strichartz estimates, but the current
  PDE scaffold contains no Strichartz page.  FR-13 records a non-load-bearing
  interface remark and an amendment owed; it does not invent a PDE page id.

## Prerequisite and notation contract

All pages cite the planned analysis pages only after those pages have been
authored.  The common spine is
`density-separability-and-convolution-in-lp`,
`the-maximal-function-and-lebesgue-differentiation`,
`orthonormal-bases-parseval-and-fourier-series`,
`fourier-transform-convolution-and-approximate-identities`,
`schwartz-space-and-the-plancherel-theorem`,
`distributions-test-functions-and-differentiation`, and
`tempered-distributions-and-the-fourier-transform`.  FR-6 also cites the
PDE Sobolev pages rather than defining the spaces as new objects.

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
| W | Mark Williams, *Notes on Harmonic Analysis*, [author PDF](https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf) | chs. 3–7 and 11, pp. 6–47 and 71–77 |
| K | Juha Kinnunen, *Harmonic Analysis*, [author PDF](https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf) | chs. 1–5, pp. 1–111 |
| Wo | Thomas H. Wolff, *Lectures in Harmonic Analysis*, [editor-hosted full notes](https://www.math.ubc.ca/~ilaba/wolff/notes_march2002.pdf) | §§1–7, pp. 1–46; §10, pp. 72–81 |
| T | Michael E. Taylor, *Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE*, [author PDF](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf) | §§1, 3, 7, 11–12, PDF pp. 1–18, 24–38, 59–68, 86–100 |
| Lo | Lynn H. Loomis, *Introduction to Abstract Harmonic Analysis*, [Harvard-hosted scan](https://people.math.harvard.edu/~shlomo/212a/loomis.pdf) | §§28–37, pp. 108–152, especially §§34–37, pp. 134–152 |
| Ko | T. W. Körner, *Topological Groups*, [author PDF](https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf) | §§6–13, pp. 14–27 |
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
passing mention does not.  No dash is needed: every pair has at least two
independent treatments.

| pair | full treatment A — exact range read | full treatment B — exact range read | supplementary verification |
|---|---|---|---|
| FR-1 | L, chs. 1 and 8, pp. 9–14 and 47–52 | G, §§3.1.3, 3.3.1, 3.4.3–3.5.3, pp. 178–180, 193–194, 210–221 | — |
| FR-2 | L, chs. 2–3 and 7, pp. 15–26 and 43–46 | G, §§3.4.1–3.5.4, pp. 204–225 | T, §1, PDF pp. 2–8 |
| FR-3 | L, ch. 4, pp. 27–30 | G, §3.3.3, pp. 200–202 | T, §1, PDF pp. 2–8 |
| FR-4 | G, §3.6.1–3.6.3, pp. 227–237 | PS, §§1–6, PDF pp. 1–18 | — |
| FR-5 | L, ch. 8, pp. 47–52 | G, §§3.4.3 and 4.2.1, pp. 210–212 and 255–270 | — |
| FR-6 | G, §§2.5 and 6.2, pp. 146–159 and 437–450 | W, §§3.9 and 6.1–6.4, pp. 12 and 23–28 | TaoA note 5 §3, pp. 15–23 |
| FR-7 | L, chs. 10–12 and 20–21, pp. 57–74 and 113–126 | G, §5.1.1–5.1.4, pp. 314–329 | W, §§3.1–3.4, pp. 6–8 |
| FR-8 | G, §§5.3–5.4, pp. 355–384 | TaoA note 3 §4, pp. 20–24, and note 4 §2, pp. 4–10 | W, §§3.3–3.9, pp. 7–12; G, §6.2.3, pp. 445–450 |
| FR-9 | Wa, ch. I §1.1, printed pp. 2–13 | W, §§6.2 and 7.6, pp. 24–26 and 40–47 | H, ch. I §1.1, pp. 1–6 |
| FR-10 | W, §§7.1–7.7, pp. 29–47 | UW, lectures 18 and 20–22, 27 PDF pages | K, ch. 3, pp. 34–64; TaoA note 4 §3, pp. 10–14 |
| FR-11 | G, §6.1, pp. 419–437 | W, ch. 5, pp. 15–22 | TaoA note 4 §5, pp. 20–24 |
| FR-12 | G, §§7.1–7.4, pp. 499–545 | K, chs. 4–5, pp. 65–111 | TaoA note 5 §1, pp. 1–6 |
| FR-13 | Wo, §§3–7, pp. 10–46 | Taob, notes 8–9, pp. 1–22 and 1–14 | W, ch. 11, pp. 71–77 |
| FR-14 | Lo, §§34–35 and §37, pp. 134–140 and 147–152 | Ko, §§6–13, pp. 14–27 | EW, Appendix C.1, printed pp. 429–432 |
| FR-15 | Lo, §§34 and 36–37, pp. 134–137 and 141–152 | EW, Appendix C.2–C.3, printed pp. 432–439 | T, §§11–12, PDF pp. 86–100, for special cases only |
| FR-16 | T, §§11–12, PDF pp. 86–100 | MITF, complete headings 1–4, unpaginated | EW, Appendix C.1–C.2, printed pp. 429–435 |
| FR-17 | T, §7, PDF pp. 59–68 | L, chs. 22–23, pp. 129–140 | MITP, §§16.1–16.1.1, pp. 1–3 |
| FR-18 | FM, §§1–2, pp. 1–8 | S, §§1–5, pp. 1–13 | L, ch. 24, pp. 141–146 |

## FR-1. Dirichlet kernel, localisation, and pointwise convergence

**A page:** `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`
**B page:** `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`
**Requires:** `orthonormal-bases-parseval-and-fourier-series`,
`density-separability-and-convolution-in-lp`, and the functional-analysis
Banach–Steinhaus page.  **Sources read:** L chs. 1, 3, 8, pp. 9–14,
25–26, 47–52; G §§3.1, 3.3–3.5, pp. 173–182, 192–225.

The A page separates the algebraic kernel identity from the cancellation
arguments that actually prove pointwise convergence.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-dirichlet-and-fejer-kernels` (definition) — $D_N=\sum_{|k|\le N}e_k$ and $F_N=(N+1)^{-1}\sum_{j=0}^ND_j$. | Transferred exact FA-14 id; fixes both later kernels once. | literature-derived | not-applicable | L/G definitions; exact normalisation adapted to the library torus. |
| 2 | `lem-fourier-partial-sums-are-dirichlet-convolutions` (lemma) — $S_Nf=f*D_N$ for $f\in L^1(\mathbb T)$. | Converts coefficient sums into a local integral. | literature-derived | ai-altered | L ch. 1/G §3.2; signs translated. |
| 3 | `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel` (lemma) — $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ off $\mathbb Z$, with the removable value $2N+1$. | Supplies all later oscillatory estimates. | literature-derived | ai-altered | G §3.1.3; endpoint value made explicit. |
| 4 | `thm-riemann-lebesgue-lemma-for-fourier-coefficients` (theorem) — $\widehat f(k)\to0$ for every $f\in L^1(\mathbb T)$. | Necessary condition and localisation input. | literature-derived | ai-altered | L ch. 1/G §3.3.1; density/translation proof. |
| 5 | `lem-symmetric-difference-formula-for-fourier-partial-sums` (lemma) — $S_Nf(x)-s$ is the sine-kernel integral of $f(x+t)+f(x-t)-2s$. | Splits Dini and Dirichlet tests from kernel algebra. | literature-derived | ai-altered | L ch. 8/G §3.4.4. |
| 6 | `thm-riemann-localisation-principle-for-fourier-series` (theorem) — if $f=g$ a.e. near $x$, then $S_Nf(x)-S_Ng(x)\to0$. | Makes pointwise convergence genuinely local. | literature-derived | ai-altered | L ch. 8; Riemann–Lebesgue on the away-from-zero quotient. |
| 7 | `thm-dini-pointwise-convergence-criterion-for-fourier-series` (theorem) — if $\int_0^\delta |f(x+t)+f(x-t)-2s|t^{-1}dt<\infty$, then $S_Nf(x)\to s$. | Sharp usable local modulus criterion. | literature-derived | ai-altered | L/G; both sides and the candidate value stated. |
| 8 | `cor-local-holder-regularity-implies-fourier-convergence-at-a-point` (corollary) — $|f(x\pm t)-f(x)|\le Ct^\alpha$, $\alpha>0$, implies $S_Nf(x)\to f(x)$. | Cheap consumer of Dini, not a new dependency target outside this page. | ai-altered | ai-altered | Direct sourced corollary of item 7. |
| 9 | `lem-bounded-variation-gives-one-sided-dirichlet-integrability` (lemma) — the difference quotients needed by the Dirichlet test have bounded primitive/variation control. | Exposes the hard local step in Jordan's theorem. | literature-derived | ai-altered | G §3.5.3/L ch. 8. |
| 10 | `thm-dirichlet-jordan-pointwise-convergence` (theorem) — for periodic $f\in BV$, $S_Nf(x)\to\tfrac12(f(x+)+f(x-))$. | Transferred exact FA-14 id; principal classical criterion. | literature-derived | ai-altered | L/G, with the representative-independent one-sided limits. |
| 11 | `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values` (corollary) — a periodic piecewise $C^1$ function converges pointwise to its midpoint regularisation. | Common usable specialization. | literature-derived | ai-altered | G §3.5; verifies finitely many jumps and endpoints. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-dirichlet-kernel-at-zero-and-away-from-zero` (example) — compute $D_N(0)$ and exhibit sign oscillation off zero. | Shows why $D_N$ is not a positive approximate identity. | ai-generated | ai-generated | Finite geometric-series check; never a dependency. |
| 2 | `thm-lebesgue-constants-grow-logarithmically` (theorem) — $\|D_N\|_1\asymp\log(N+2)$. | Drives the later uniform-boundedness divergence proof. | literature-derived | ai-altered | G §3.4.3/L ch. 8; upper and lower interval estimates split. |
| 3 | `ex-fourier-partial-sums-of-the-sawtooth` (example) — compute the coefficients and verify midpoint convergence at the jump. | Tests sign, endpoint, and representative conventions. | literature-derived | ai-altered | L/G standard computation. |
| 4 | `ex-localisation-for-functions-equal-on-an-arc` (example) — two explicit $L^1$ functions equal near zero have asymptotically equal partial sums there. | Finite verification of item 6. | ai-generated | ai-generated | Direct integral estimate; leaf only. |
| 5 | `cex-continuity-alone-does-not-satisfy-a-dini-modulus` (counterexample) — a sourced continuous logarithmic-modulus example has divergent Dini integral. | Prevents replacing Dini by continuity. | literature-derived | ai-altered | L discussion after Dini; no divergence claim is inferred. |

**Hard proof/boundary obligations.**  The point $t=0$ is a removable kernel
singularity, not an excluded point.  Localisation removes a neighbourhood
before division by $\sin\pi t$.  Dini states the candidate limit $s$ rather
than assuming continuity.  Jordan uses both one-sided limits and therefore
also covers a jump and the periodic seam.

## FR-2. Fejér and Poisson summability

**A page:** `fejer-and-poisson-summability-of-fourier-series`
**B page:** `fejer-and-poisson-summability-of-fourier-series-examples`
**Requires:** FR-1 and the measure-owned approximate-identity and Lebesgue
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
**Requires:** FR-1, FR-2, FA-18
`thm-wiener-lemma-for-absolutely-convergent-fourier-series`, and Parseval from
the Hilbert-series page.  **Sources read:** L ch. 4, pp. 27–30; G §3.3,
pp. 192–202; T §1, PDF pp. 1–18.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-wiener-algebra-of-the-circle` (definition) — $A(\mathbb T)=\{f:\sum_k|\widehat f(k)|<\infty\}$ with the coefficient $\ell^1$ norm. | Names the natural absolute-convergence space. | literature-derived | not-applicable | L ch. 4. |
| 2 | `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence` (lemma) — an $\ell^1$ coefficient sequence defines a continuous function by an absolutely uniform series. | Establishes the representative before algebra operations. | literature-derived | ai-altered | Weierstrass M-test plus FA coefficient uniqueness. |
| 3 | `thm-wiener-algebra-is-a-banach-algebra` (theorem) — pointwise multiplication corresponds to discrete convolution and $\|fg\|_A\le\|f\|_A\|g\|_A$. | Makes inversion meaningful. | literature-derived | ai-altered | L ch. 4; cites $\ell^1$ completeness. |
| 4 | `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz` (lemma) — weighted $\ell^2$ control with weight inverse in $\ell^2$ implies $\ell^1$ coefficients. | Kernel of Bernstein's theorem. | literature-derived | ai-altered | L/G; separates the sequence estimate. |
| 5 | `thm-bernstein-absolute-convergence-theorem` (theorem) — $f\in C^\alpha(\mathbb T)$ with $\alpha>1/2$ has $\widehat f\in\ell^1$. | Required absolute-convergence threshold. | literature-derived | ai-altered | L ch. 4; difference method plus item 4. |
| 6 | `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series` (corollary) — $f\in L^2$ with weak derivative in $L^2$ has $\widehat f\in\ell^1$. | Cheap Sobolev-flavoured criterion without redefining PDE spaces. | literature-derived | ai-altered | G §3.3.3; cites PDE weak derivative. |
| 7 | `rem-wiener-lemma-interface-for-the-circle-algebra` (remark) — cite FA-18's exact theorem: a nowhere-zero $f\in A(\mathbb T)$ has $1/f\in A(\mathbb T)$. | Satisfies the Wiener-lemma requirement without duplicate minting. | literature-derived | not-supplied | FA-18 owns statement and proof. |
| 8 | `cor-holomorphic-functional-calculus-in-the-wiener-algebra` (corollary) — if $f\in A(\mathbb T)$ and $\Phi$ is holomorphic near $f(\mathbb T)$, then $\Phi\circ f\in A(\mathbb T)$. | Shows what Wiener inversion is for. | literature-derived | ai-altered | L ch. 4 plus FA holomorphic functional calculus. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-a-trigonometric-polynomial-in-the-wiener-algebra` (example) — compute its $A$ norm. | Finite normalisation check. | ai-generated | ai-generated | Leaf. |
| 2 | `ex-an-absolutely-convergent-non-smooth-fourier-series` (example) — $\sum_{k\ne0}|k|^{-2}e_k$ lies in $A$ but is not $C^2$. | Separates absolute convergence from arbitrary smoothness. | ai-altered | ai-altered | Direct coefficient/derivative check. |
| 3 | `cex-continuity-does-not-imply-absolute-fourier-convergence` (counterexample) — a sourced continuous function has coefficients outside $\ell^1$. | Necessity of a regularity hypothesis. | literature-derived | not-supplied | L ch. 4 boundary citation. |
| 4 | `cex-the-bernstein-holder-one-half-endpoint-can-fail` (counterexample) — there is $f\in C^{1/2}(\mathbb T)$ with non-absolutely-convergent Fourier series. | Shows strict $\alpha>1/2$. | literature-derived | not-supplied | G historical/source citation; exact endpoint only. |
| 5 | `cex-wiener-inversion-needs-nonvanishing` (counterexample) — $1-e_1$ is in $A$ but its reciprocal is not continuous on $\mathbb T$. | Tests the spectral hypothesis. | ai-generated | ai-generated | Immediate zero at the identity; leaf. |

## FR-4. Lacunary series and Sidon sets

**A page:** `lacunary-fourier-series-and-sidon-sets`
**B page:** `lacunary-fourier-series-and-sidon-sets-examples`
**Requires:** FR-3, Parseval, and measure-theory $L^p$ inequalities.
**Sources read:** G §3.6, pp. 226–240; PS §§1–6, PDF pp. 1–18.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series` (definition) — $n_{j+1}/n_j\ge q>1$ and spectrum contained in $\{n_j\}$. | Fixes the strong gap convention. | literature-derived | not-applicable | G/PS. |
| 2 | `lem-hadamard-gaps-bound-additive-representations` (lemma) — a fixed integer has uniformly bounded signed representations by separated large lacunary frequencies of fixed length. | Combinatorial input for moment estimates. | literature-derived | ai-altered | G §3.6.1. |
| 3 | `thm-lacunary-lp-norm-equivalence` (theorem) — for every $0<p<\infty$, finite lacunary sums satisfy $\|\sum a_je_{n_j}\|_p\asymp_{p,q}(\sum|a_j|^2)^{1/2}$. | Central Paley–Zygmund phenomenon with exact range. | literature-derived | ai-altered | G §3.6.2; even moments, interpolation, and duality separated. |
| 4 | `cor-lacunary-series-lp-membership-is-coefficient-ell-two` (corollary) — a lacunary coefficient series converges in $L^p$ iff its coefficients lie in $\ell^2$, for $0<p<\infty$ in the sourced quasi-norm sense. | Converts finite inequalities to series. | literature-derived | ai-altered | G; completeness/quasi-Banach convergence handled. |
| 5 | `def-sidon-set-in-the-integer-dual` (definition) — $E\subset\mathbb Z$ is Sidon if $\sum_{k\in E}|a_k|\le C_E\|\sum_{k\in E}a_ke_k\|_\infty$ for all finite coefficients. | Names the thin-set property. | literature-derived | not-applicable | G §3.6.3/PS. |
| 6 | `lem-riesz-product-for-a-hadamard-lacunary-set` (lemma) — a finite positive Riesz product has controlled Fourier support and prescribed first-order coefficients. | Splits the Sidon proof's construction. | literature-derived | ai-altered | G/PS; constant term and frequency collisions checked. |
| 7 | `thm-hadamard-lacunary-sets-are-sidon` (theorem) — every ratio-lacunary subset of positive integers satisfies the Sidon inequality. | Connects gap and uniform-norm theories. | literature-derived | ai-altered | G §3.6.3; finite unions if needed are stated separately. |
| 8 | `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients` (corollary) — a continuous function with spectrum in $E$ Sidon belongs to $A(\mathbb T)$. | Feeds thin spectra back to FR-3. | literature-derived | ai-altered | Definition plus polynomial approximation, source-backed. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-powers-of-two-form-a-hadamard-lacunary-sequence` (example) — $2^{j+1}/2^j=2$. | Minimal boundary check. | ai-generated | ai-generated | Leaf. |
| 2 | `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` (counterexample) — $n_j=j^2$ has growing gaps but ratio tending to one. | Audits the definition. | ai-generated | ai-generated | Leaf. |
| 3 | `ex-riesz-product-for-three-powers-of-three` (example) — expand a finite product and verify absence of frequency collisions. | Finite verification of item 6. | ai-generated | ai-generated | Leaf. |
| 4 | `cex-the-integers-are-not-a-sidon-set` (counterexample) — Dirichlet/Rudin–Shapiro polynomials violate a uniform $\ell^1$-to-supremum bound. | Shows Sidon is genuinely thin. | literature-derived | ai-altered | G §3.6.3; sourced polynomial family. |

## FR-5. Divergence and almost-everywhere convergence

**A page:** `divergence-and-almost-everywhere-convergence-of-fourier-series`
**B page:** `divergence-and-almost-everywhere-convergence-of-fourier-series-examples`
**Requires:** FR-1, the functional-analysis uniform boundedness theorem, and
measure convergence theorems.  **Sources read:** L ch. 8, pp. 47–52; G
§3.4.3 and §4.2, pp. 210–212 and 255–270.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant` (lemma) — $\|S_N:C(\mathbb T)\to C(\mathbb T)\|=\|D_N\|_1$. | Links FR-1 growth to Banach–Steinhaus. | literature-derived | ai-altered | L/G; phase-approximating continuous test functions prove the lower bound. |
| 2 | `cex-continuous-function-with-divergent-fourier-series-at-a-point` (counterexample) — some $f\in C(\mathbb T)$ has unbounded, hence divergent, Fourier partial sums at a prescribed point. | Transferred exact FA-14 id; the du Bois-Reymond failure theorem and its witness are one item, not two labels for the same claim. | literature-derived | ai-altered | L ch. 8; item 1 and FR-1 Lebesgue constants plus uniform boundedness. |
| 3 | `lem-kolmogorov-block-polynomials-have-large-partial-sum-maxima` (lemma) — for each threshold there is a controlled $L^1$ trigonometric polynomial block whose partial sums are large on a set of prescribed measure. | Names the construction cost behind Kolmogorov. | literature-derived | not-supplied | G §4.2.1 supplies the multi-lemma construction; no compressed fake proof. |
| 4 | `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` (theorem) — there exists $f\in L^1(\mathbb T)$ whose Fourier series diverges a.e. | Required $L^1$ failure. | literature-derived | not-supplied | G proves a.e. divergence; L records stronger unbounded-everywhere variant with external citation. |
| 5 | `def-carleson-maximal-partial-sum-operator` (definition) — $Cf(x)=\sup_N|S_Nf(x)|$. | States the actual operator controlled by Carleson. | literature-derived | not-applicable | L ch. 8. |
| 6 | `thm-carleson-hunt-almost-everywhere-convergence` (theorem) — $C$ is bounded on $L^p(\mathbb T)$ for $1<p<\infty$, hence $S_Nf\to f$ a.e.; Carleson's original case is $p=2$. | Exact positive theorem and strict endpoints. | literature-derived | not-supplied | L statement; proof deliberately external. |
| 7 | `rem-proof-cost-of-the-carleson-hunt-theorem` (remark) — a proof requires time-frequency tiles, tree selection, size/density estimates, and an exceptional-set summation not developed on this page. | Honest account of cost. | literature-derived | not-supplied | L source note plus standard theorem architecture; never a dependency. |
| 8 | `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one` (corollary) — the maximal estimate and dense trigonometric polynomials give a.e. convergence. | Separates maximal boundedness from convergence closure. | literature-derived | ai-altered | Standard Banach-principle step from item 6. |
| 9 | `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` (remark) — Kolmogorov prevents strong/a.e.-convergence extension to all $L^1$. | Keeps endpoint visible. | literature-derived | not-applicable | Items 4 and 6. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-fourier-partial-sum-operators-and-uniform-boundedness` (example) — use $\|S_N\|\to\infty$ to obtain a residual set of continuous functions with unbounded partial sums at zero. | Reuses FA-reserved id and strengthens intuition. | literature-derived | ai-altered | L ch. 8/Banach–Steinhaus. |
| 2 | `cex-continuous-fourier-series-need-not-converge-everywhere` (counterexample) — instantiate item 2 without claiming divergence a.e. | Separates continuous point failure from Kolmogorov. | literature-derived | not-supplied | du Bois-Reymond. |
| 3 | `cex-lone-fourier-series-can-diverge-almost-everywhere` (counterexample) — instantiate Kolmogorov's theorem. | Endpoint leaf. | literature-derived | not-supplied | G §4.2.1. |
| 4 | `cex-carleson-maximal-operator-is-not-strong-type-one-one` (counterexample) — strong $L^1$ boundedness would contradict the sourced endpoint behaviour. | Prevents endpoint interpolation error. | literature-derived | ai-altered | Kolmogorov plus maximal convergence principle. |

**Hard proof/boundary obligations.**  The du Bois-Reymond proof is supplied
because its cost is exactly the Lebesgue-constant lemma plus a published
functional-analysis theorem.  Kolmogorov and Carleson–Hunt are literature
statements with `not-supplied` proofs; the scaffold does not manufacture their
deep machinery.  “Almost everywhere” is not strengthened to every point, and
$p=1$ is excluded from Carleson–Hunt.

## FR-6. Fourier multipliers and Sobolev characterisations

**A page:** `fourier-multipliers-and-sobolev-characterisations`
**B page:** `fourier-multipliers-and-sobolev-characterisations-examples`
**Requires:** the functional-analysis Schwartz/Plancherel/tempered-transform
pages, MT-17's Riesz–Thorin theorem, PDE-11
`weak-derivatives-and-sobolev-spaces`, and PDE-14
`sobolev-poincare-and-morrey-inequalities`.  The definitions of $W^{k,p}$ and
$H^s$ stay on PDE; this page identifies their Fourier norms.  **Sources read:**
G §2.5 and §§6.1–6.2, pp. 146–159 and 419–450; W §§3.1, 3.9, 5.3,
and 6.1–6.4, pp. 6, 12, and 19–28.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-translation-invariant-fourier-multiplier-on-schwartz-space` (definition) — for measurable $m$, set $T_mf=(m\widehat f)^\vee$ whenever the product defines a tempered distribution. | Fixes the operator without pretending every symbol acts on every $L^p$. | literature-derived | not-applicable | G §2.5/W §5.3; domain condition retained. |
| 2 | `lem-ltwo-fourier-multiplier-bound` (lemma) — $m\in L^\infty$ gives $\|T_mf\|_2\le\|m\|_\infty\|f\|_2$, and the operator norm is the essential supremum on a non-atomic full-support frequency space. | Exact Hilbert-space baseline for every later multiplier. | literature-derived | ai-altered | Plancherel plus frequency-localised tests; the essential, not pointwise, supremum is used. |
| 3 | `thm-hausdorff-young-for-periodic-fourier-coefficients` (theorem) — for $1\le p\le2$, $f\in L^p(\mathbb T)$ has $\widehat f\in\ell^{p'}(\mathbb Z)$ with $\|\widehat f\|_{p'}\le\|f\|_p$. | Supplies the interpolation estimate between absolute coefficient control and Parseval. | literature-derived | ai-altered | L ch. 13; cite MT-17 Riesz–Thorin between $L^1\to\ell^\infty$ and $L^2\to\ell^2$. |
| 4 | `thm-hausdorff-young-for-the-euclidean-fourier-transform` (theorem) — for $1\le p\le2$, $f\in L^p(\mathbb R^n)$ has an $L^{p'}$ Fourier transform with $\|\widehat f\|_{p'}\le\|f\|_p$ under the adopted normalisation. | Gives restriction and multiplier arguments their basic non-Hilbert transform estimate. | literature-derived | ai-altered | L ch. 13/G §1.3; cite MT-17 interpolation and FA's $L^1$/$L^2$ transform endpoints. |
| 5 | `def-mihlin-symbol-with-more-than-half-dimension-derivatives` (definition) — require $|\partial^\alpha m(\xi)|\le C_\alpha|\xi|^{-|\alpha|}$ for $0\le|\alpha|\le\lfloor n/2\rfloor+1$ and $\xi\ne0$. | Records one sufficient smoothness convention with the actual derivative count. | literature-derived | not-applicable | G §6.2.3/W §3.9; value at zero is immaterial. |
| 6 | `lem-weak-derivatives-are-polynomial-fourier-multipliers` (lemma) — $\widehat{D^\alpha u}(\xi)=(2\pi i\xi)^\alpha\widehat u(\xi)$ for tempered $u$. | Connects PDE weak derivatives to frequency weights. | literature-derived | ai-altered | W §5.3 and the FA tempered-transform page. |
| 7 | `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` (theorem) — for integer $k\ge0$, the PDE-owned $H^k(\mathbb R^n)$ norm is equivalent to $\|(1+4\pi^2|\xi|^2)^{k/2}\widehat u\|_2$. | Required Fourier characterisation without re-defining the space. | literature-derived | ai-altered | W §§5.3, 6.1; binomial comparison and item 6. |
| 8 | `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` (theorem) — for real $s$, the PDE-owned Bessel-potential $H^s$ consists exactly of tempered distributions with $(1+4\pi^2|\xi|^2)^{s/2}\widehat u\in L^2$. | Extends the characterisation to negative and fractional order. | literature-derived | ai-altered | W §6.1/G §6.2; equality of equivalence classes stated in $\mathcal S'$. |
| 9 | `lem-bessel-potentials-shift-sobolev-order-isometrically` (lemma) — $J^t=(I-\Delta)^{t/2}$ maps $H^s$ isometrically onto $H^{s-t}$ under the chosen norm. | Cheap structural consumer of item 8. | literature-derived | ai-altered | Direct multiplier computation; source-backed. |
| 10 | `cor-sobolev-duality-from-the-fourier-pairing` (corollary) — the $L^2$ distribution pairing identifies $(H^s)^*$ with $H^{-s}$. | Gives later distribution and PDE pages a precise dual. | literature-derived | ai-altered | W §6.1; Cauchy–Schwarz and the weighted Riesz representation. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-heat-and-poisson-semigroups-as-fourier-multipliers` (example) — compute symbols $e^{-4\pi^2t|\xi|^2}$ and $e^{-2\pi t|\xi|}$. | Checks constants and semigroup composition. | literature-derived | ai-altered | W ch. 3; leaf. |
| 2 | `ex-translation-and-differentiation-multiplier-symbols` (example) — translation has symbol $e^{-2\pi ia\cdot\xi}$ and differentiation has $2\pi i\xi_j$. | Distinguishes bounded and unbounded symbols. | ai-generated | ai-generated | Direct transform checks; leaf. |
| 3 | `cex-a-bounded-symbol-need-not-be-an-lp-multiplier-away-from-two` (counterexample) — in $n\ge2$, the ball indicator is not an $L^p$ multiplier for $p\ne2$. | Shows why item 2 cannot be extrapolated. | literature-derived | not-supplied | G §6.1.4 states Fefferman's ball-multiplier obstruction and cites the full proof; no proof is manufactured. |
| 4 | `cex-a-jump-multiplier-fails-the-mihlin-hypotheses-but-may-be-lp-bounded` (counterexample) — $-i\operatorname{sgn}\xi$ is the Hilbert multiplier and is bounded for $1<p<\infty$. | Shows Mihlin is sufficient, not necessary. | literature-derived | not-supplied | W §3.1; proof belongs to FR-7. |
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
**Requires:** FR-1, FR-6, the FA Plancherel/tempered-transform pages, and
MT-17's interpolation theorems.  Generic weak $(1,1)$ and the upper BMO
endpoint are proved on FR-8 and FR-10 respectively, then cited back as
endpoint refinements; they are not prerequisites of this A page.  **Sources
read:** L chs. 10–12 and 20–21, pp. 57–70 and 113–126; G §5.1,
pp. 313–329.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-conjugate-function-on-the-circle` (definition) — on trigonometric polynomials set $\widetilde f\,\widehat{}(k)=-i\operatorname{sgn}(k)\widehat f(k)$, with zero mode killed. | Establishes the periodic operator before singular kernels. | literature-derived | not-applicable | L ch. 10. |
| 2 | `lem-conjugate-dirichlet-kernel-and-principal-value-formula` (lemma) — symmetric truncation of the cotangent kernel gives the conjugate partial sums. | Derives, rather than asserts, the periodic principal value. | literature-derived | ai-altered | L ch. 10/G §5.1.3; cancellation at the origin is explicit. |
| 3 | `thm-marcel-riesz-conjugate-function-theorem` (theorem) — the circle conjugate operator extends boundedly to $L^p(\mathbb T)$ exactly in the strict range $1<p<\infty$. | Classical Riesz result requested by the dispatch. | literature-derived | ai-altered | L ch. 12; analytic-function proof with Riesz–Thorin cited from MT-17. |
| 4 | `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp` (lemma) — for each strict $1<p<\infty$, $\sup_N\|S_N\|_{L^p(\mathbb T)\to L^p(\mathbb T)}<\infty$. | Converts the conjugate-function theorem into the operator estimate that norm convergence needs. | literature-derived | ai-altered | G §§4.1.1–4.1.2/L ch. 9; express interval projections through modulations and the conjugate operator. |
| 5 | `thm-fourier-partial-sums-converge-in-periodic-lp` (theorem) — $S_Nf\to f$ in $L^p(\mathbb T)$ for every $f\in L^p$ exactly in the strict range $1<p<\infty$. | Completes the classical norm-convergence theory and records both endpoint exclusions. | literature-derived | ai-altered | Item 4 plus trigonometric-polynomial density; FR-1's Lebesgue constants rule out uniform endpoint bounds. |
| 6 | `def-truncated-hilbert-transform-and-principal-value` (definition) — $H_\varepsilon f(x)=\pi^{-1}\int_{|x-y|>\varepsilon}f(y)/(x-y)\,dy$ and $Hf=\lim_{\varepsilon\downarrow0}H_\varepsilon f$ where the limit exists. | Separates truncations, pointwise limits, and bounded extensions. | literature-derived | not-applicable | L ch. 20/G §5.1.1. |
| 7 | `lem-hilbert-transform-has-signum-fourier-multiplier` (lemma) — on $\mathcal S$, $\widehat{Hf}(\xi)=-i\operatorname{sgn}(\xi)\widehat f(\xi)$. | Supplies $L^2$ control and all algebraic identities. | literature-derived | ai-altered | L/G; distribution transform and $2\pi$ convention checked. |
| 8 | `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity` (corollary) — $\|Hf\|_2=\|f\|_2$ and $H^2f=-f$ on $L^2(\mathbb R)$. | Hilbert-space seed for singular-integral arguments. | literature-derived | ai-altered | Plancherel plus item 7; a singleton frequency is null on $\mathbb R$. |
| 9 | `lem-hilbert-transform-is-skew-adjoint-on-ltwo` (lemma) — $\langle Hf,g\rangle=-\langle f,Hg\rangle$. | Powers duality and $H^1$–BMO pairings. | literature-derived | ai-altered | Multiplier conjugation; complex inner-product convention declared. |
| 10 | `thm-hilbert-transform-is-bounded-on-lp` (theorem) — $H$ extends boundedly on $L^p(\mathbb R)$ for every $1<p<\infty$. | Real-line Riesz theorem with exact endpoints. | literature-derived | ai-altered | G §5.1/L ch. 20; $L^2$, distribution functions, interpolation and duality. |
| 11 | `def-riesz-transforms-on-euclidean-space` (definition) — $R_j$ has multiplier $-i\xi_j/|\xi|$ for $\xi\ne0$ and kernel $c_nx_j/|x|^{n+1}$ in principal value. | Higher-dimensional analogue used in PDE and Hardy theory. | literature-derived | not-applicable | G §5.1.4; null-set value fixed as zero. |
| 12 | `lem-riesz-transform-kernels-have-size-smoothness-and-cancellation` (lemma) — the kernels satisfy the standard CZ bounds and zero spherical mean. | Verifies that FR-8 applies rather than invoking a name. | literature-derived | ai-altered | G §5.1.4. |
| 13 | `thm-riesz-transforms-are-bounded-on-lp` (theorem) — each $R_j$ is bounded on $L^p(\mathbb R^n)$ for $1<p<\infty$. | Required multidimensional result. | literature-derived | ai-altered | G; item 12 and FR-8 after the generic theorem is in place. |
| 14 | `rem-hilbert-and-riesz-transform-endpoint-map` (remark) — the lower endpoint is weak $L^1$ and $H^1\to L^1$, while the upper endpoint is $L^\infty\to\mathrm{BMO}$, not strong $L^1$ or $L^\infty$. | Gives precise forward interfaces to FR-8–FR-10. | literature-derived | not-supplied | G §§5.1, 7.1; no forward result is used to prove FR-7. |

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
**Requires:** FR-6, FR-7, MT-17
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
| 15 | `lem-dyadic-mihlin-kernels-have-uniform-size-and-smoothness-control` (lemma) — frequency-localised inverse transforms of an FR-6 Mihlin symbol obey scale-uniform $L^1$ and first-difference bounds. | Splits the kernel estimate out of the smooth-multiplier theorem after the CZ framework exists. | literature-derived | ai-altered | G §6.2.3; integration by parts on annuli verifies the standard-kernel hypotheses. |
| 16 | `thm-mihlin-fourier-multiplier-theorem` (theorem) — an FR-6 Mihlin symbol defines a bounded operator on $L^p(\mathbb R^n)$ for every strict $1<p<\infty$. | Main reusable smooth-multiplier criterion, now proved without a forward dependency cycle. | literature-derived | ai-altered | Item 15 and items 7–9; G §6.2.3/W §3.9. |
| 17 | `rem-mihlin-does-not-assert-strong-endpoint-bounds` (remark) — the theorem makes no general $L^1$ or $L^\infty$ claim. | Stops the common endpoint overreach exactly where the theorem is established. | literature-derived | not-applicable | G §6.2.3 boundary discussion. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-calderon-zygmund-decomposition-of-an-interval-indicator` (example) — determine the selected dyadic intervals for a fixed grid and height. | Finite verification of maximality and the $2^n$ bound. | ai-generated | ai-generated | Leaf only. |
| 2 | `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` (example) — verify size, first differences, and spherical cancellation for $x_j/|x|^{n+1}$. | Connects FR-7 to the generic theorem. | literature-derived | ai-altered | G §5.2. |
| 3 | `cex-calderon-zygmund-strong-lone-bound-fails` (counterexample) — the Hilbert transform of an interval is not integrable. | Transferred exact PDE-19 id. | literature-derived | ai-altered | FR-7 explicit formula. |
| 4 | `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity` (counterexample) — the same interval transform is unbounded but belongs to BMO. | Transferred exact PDE addendum id. | literature-derived | ai-altered | FR-7 computation; BMO assertion proved on FR-10. |
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
**Requires:** FR-7–FR-8, the FA distribution pages, and MT-17's
Hardy–Littlewood maximal theorem.  “Maximal” here means smooth radial or grand
maximal characterisations of a distribution, not a duplicate definition of
the measure-owned Hardy–Littlewood operator.  **Sources read:** W §§6.2 and
7.6, pp. 24–26 and 40–47; Wa ch. I §1.1, printed pp. 2–13; H ch. I §1.1,
pp. 1–6.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution` (definition) — for a normalised Schwartz approximate identity $\phi_t$, define $M_\phi^0f=\sup_{t>0}|f*\phi_t|$ and the aperture-one nontangential supremum. | Makes convolution with a distribution well defined before defining $H^p$. | literature-derived | not-applicable | Wa §1.1/W §7.6. |
| 2 | `def-real-hardy-space-by-a-radial-maximal-function` (definition) — for $0<p<\infty$, $H^p(\mathbb R^n)$ consists of $f\in\mathcal S'$ with $M_\phi^0f\in L^p$. | Fixes the real-variable meaning and includes the quasi-Banach range. | literature-derived | not-applicable | Wa/H §1.1; one admissible $\phi$ is fixed. |
| 3 | `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions` (lemma) — a bounded Schwartz test family dominates all fixed admissible maximal functions, with aperture constants. | Hard direction of independence from the test kernel. | literature-derived | ai-altered | Wa/H §1.1; Taylor expansion and annular summation. |
| 4 | `thm-maximal-function-characterisations-of-real-hardy-spaces` (theorem) — radial, nontangential, and grand maximal definitions give equivalent $H^p$ quasi-norms for $0<p<\infty$ with the stated test-family order. | Shows the space does not depend on an arbitrary kernel. | literature-derived | ai-altered | Wa/H §1.1; item 3 plus reproducing formula. |
| 5 | `cor-real-hardy-space-equals-lp-for-p-greater-than-one` (corollary) — $H^p(\mathbb R^n)=L^p(\mathbb R^n)$ with equivalent norms for $1<p<\infty$. | Locates exactly where the new scale differs from $L^p$. | literature-derived | ai-altered | MT-17 maximal theorem and approximation to the identity. |
| 6 | `def-hp-atom-with-moment-order` (definition) — a $(p,\infty,s)$ atom is supported on a cube, bounded by $|Q|^{-1/p}$, and has moments through $s\ge\lfloor n(1/p-1)\rfloor$ equal to zero. | Includes the cancellation needed at every $0<p\le1$. | literature-derived | not-applicable | Wa §1.1; W §7.6 at $p=1$. |
| 7 | `lem-an-hp-atom-has-uniform-hp-quasinorm` (lemma) — every such atom has $H^p$ quasi-norm bounded independently of its cube. | Atomic synthesis input. | literature-derived | ai-altered | Wa §1.1; near region by maximal bounds, far region by moment Taylor remainder. |
| 8 | `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` (lemma) — if $\sum|\lambda_j|^p<\infty$, then $\sum\lambda_ja_j$ converges in $\mathcal S'$ and belongs to $H^p$. | Handles the quasi-triangle and convergence steps explicitly. | literature-derived | ai-altered | Wa/H; no pointwise-series assertion. |
| 9 | `lem-hardy-calderon-zygmund-level-decomposition-produces-atoms` (lemma) — grand-maximal superlevel sets and Whitney cubes produce cancellative pieces with an $\ell^p$ coefficient bound. | Exposes the stopping/Whitney engine of the hard atomic direction. | literature-derived | ai-altered | Wa §1.1; W §7.6 for $p=1$. |
| 10 | `thm-atomic-characterisation-of-real-hp` (theorem) — for $0<p\le1$, $f\in H^p$ iff it has an atomic representation with coefficients in $\ell^p$, and the infimum coefficient quasi-norm is equivalent to $\|f\|_{H^p}$. | Central dependency for Hardy-space operators and duality. | literature-derived | ai-altered | Wa/H; W independently supplies the $p=1$ case. |
| 11 | `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range` (corollary) — when an $H^p$ distribution and the relevant monomial products are integrable, its moments through $\lfloor n(1/p-1)\rfloor$ vanish. | Records cancellation without assigning undefined moments to every distribution. | literature-derived | ai-altered | Atomic approximation; integrability hypothesis explicit. |
| 12 | `thm-riesz-transform-characterisation-of-real-hone` (theorem) — $f\in H^1$ iff $f,R_1f,\dots,R_nf\in L^1$, with equivalent norms. | Connects FR-7's failed $L^1$ endpoint to its correct domain. | literature-derived | not-supplied | W §§6.2, 7.6/H §1.1; substantial harmonic-extension proof is sourced, not compressed. |
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
**Requires:** FR-8–FR-9, MT-17, FA Hahn–Banach and $L^p$ duality.
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
| 9 | `lem-hone-functional-has-compatible-local-ltwo-representatives` (lemma) — restricting a bounded $H^1$ functional to mean-zero $L^2$ functions on cubes yields representatives differing by constants on nested cubes. | Exposes the representation/gluing step. | literature-derived | ai-altered | W §7.7/UW lecture 20; FA Riesz representation. |
| 10 | `lem-the-dual-representative-has-uniform-bmo-oscillation` (lemma) — testing the local representative against its normalised oscillation bounds its mean oscillation by the functional norm. | Hard estimate in the converse direction. | literature-derived | ai-altered | W/UW; uses a bounded mean-zero test. |
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
| 5 | `cex-dyadic-bmo-for-one-grid-is-not-identical-to-bmo` (counterexample) — a sourced shifted-jump example has controlled oscillation on one dyadic grid but not uniformly on all cubes. | Prevents confusing a proof device with the adopted space. | literature-derived | not-supplied | UW dyadic discussion; source citation required at authoring. |

**Hard proof/boundary obligations.**  If $\|b\|_{\mathrm{BMO}}=0$, John–Nirenberg
is interpreted through an a.e. constant representative rather than division
by zero.  The dual is BMO modulo constants.  Pairings with a general BMO
function are first defined on finite atoms; an unjustified global Lebesgue
integral is never used.  The $L^\infty$ extension of a singular integral is
also a BMO class, not a canonically normalised function.

## FR-11. Littlewood–Paley theory and square functions

**A page:** `littlewood-paley-theory-and-square-functions`
**B page:** `littlewood-paley-theory-and-square-functions-examples`
**Requires:** FR-6, FR-8–FR-10, FA Plancherel, and MT-17 interpolation.
**Sources read:** TaoA note 4 §5, pp. 20–24; G §6.1, pp. 419–437; W
ch. 5, pp. 15–22.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-inhomogeneous-dyadic-frequency-partition` (definition) — choose smooth $\varphi_0,\varphi$ with $\varphi_0(\xi)+\sum_{j\ge1}\varphi(2^{-j}\xi)=1$ and define $\Delta_j$. | Fixes low frequency and avoids a hidden polynomial quotient. | literature-derived | not-applicable | TaoA note 4 §5/W ch. 5. |
| 2 | `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds` (lemma) — $\Delta_j$ is convolution with a rescaled Schwartz kernel of mean zero for $j\ge1$. | Supplies scale, cancellation, and almost-orthogonality. | literature-derived | ai-altered | TaoA/W. |
| 3 | `lem-ltwo-almost-orthogonality-of-dyadic-pieces` (lemma) — bounded overlap gives $\|f\|_2^2\asymp\sum_{j\ge0}\|\Delta_jf\|_2^2$. | Transparent Hilbert-space square-function seed. | literature-derived | ai-altered | Plancherel and finite annular overlap. |
| 4 | `def-littlewood-paley-square-function` (definition) — $Sf=(\sum_{j\ge0}|\Delta_jf|^2)^{1/2}$. | Names the nonlinear observable. | literature-derived | not-applicable | G §6.1/W ch. 5. |
| 5 | `lem-rademacher-randomisation-converts-square-functions-to-multipliers` (lemma) — Khintchine inequalities compare $Sf$ to random signed sums $\sum\varepsilon_j\Delta_jf$. | Splits the standard vector-valued proof. | literature-derived | ai-altered | TaoA note 4 §5/G §6.1. |
| 6 | `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` (lemma) — every finite sign choice has an $L^p$ multiplier norm uniform in the signs and truncation. | Supplies the upper square-function estimate. | literature-derived | ai-altered | Annular support plus FR-6 Mihlin theorem. |
| 7 | `thm-littlewood-paley-square-function-equivalence-on-lp` (theorem) — for $1<p<\infty$, $\|Sf\|_p\asymp_p\|f\|_p$. | Central LP theorem with strict endpoints. | literature-derived | ai-altered | Items 5–6 for one side; reproducing formula and duality for the reverse. |
| 8 | `lem-littlewood-paley-reproducing-formula-in-tempered-distributions` (lemma) — a companion partition $\widetilde\Delta_j$ gives $f=\sum_j\widetilde\Delta_j\Delta_jf$ in $\mathcal S'$ for the inhomogeneous decomposition. | Makes the reverse inequality and convergence legitimate. | literature-derived | ai-altered | TaoA/W; low-frequency term included. |
| 9 | `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` (corollary) — two admissible smooth inhomogeneous partitions give equivalent square-function norms for $1<p<\infty$. | Removes dependence on the cutoff. | literature-derived | ai-altered | Almost-orthogonality between the two partitions. |
| 10 | `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` (theorem) — $\|f\|_{H^s}^2\asymp\sum_{j\ge0}2^{2js}\|\Delta_jf\|_2^2$. | Frequency-local version of FR-6's Fourier weight. | literature-derived | ai-altered | W chs. 5–6/TaoA; compare weight on each annulus. |
| 11 | `thm-square-function-characterisation-of-real-hone` (theorem) — an admissible area or Littlewood–Paley square function characterises $H^1$ with an $L^1$ norm. | Connects the square-function and atomic endpoints. | literature-derived | not-supplied | W §§6.2, 7.6; tent/atomic proof cost retained. |
| 12 | `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements` (remark) — the two-sided $L^p$ theorem is not asserted at $p=1$ or $p=\infty$. | Blocks endpoint substitution. | literature-derived | not-applicable | G/W; FR-9–FR-10 supply the replacement scales. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-square-function-of-one-frequency-localised-function` (example) — if $\widehat f$ lies where one cutoff is one, only boundedly many $\Delta_jf$ survive. | Checks overlap constants. | ai-generated | ai-generated | Leaf. |
| 2 | `ex-dyadic-square-function-of-two-separated-frequency-packets` (example) — two annular packets contribute in Euclidean square rather than absolute sum. | Visualises orthogonality. | ai-generated | ai-generated | Finite Plancherel calculation. |
| 3 | `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` (counterexample) — inverse transforms of interval/ball indicators have slow nonintegrable decay in the relevant dimensions. | Justifies smooth partitions. | literature-derived | ai-altered | G §6.1/TaoA note 4. |
| 4 | `cex-the-lp-square-function-equivalence-does-not-extend-as-stated-to-linfinity` (counterexample) — bounded functions can have square functions outside $L^\infty$, with BMO/Carleson control replacing it. | Tests upper endpoint. | literature-derived | not-supplied | UW lecture 22/W §7.4. |
| 5 | `ex-sobolev-weight-on-a-single-dyadic-annulus` (example) — the $H^s$ norm of an annular packet is comparable to $2^{js}\|f\|_2$. | Checks the exponent and low-frequency exception. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  The inhomogeneous low-frequency block is
never assigned mean zero.  Infinite sums converge first in $\mathcal S'$ and
then in the norm supplied by the theorem.  Randomisation constants depend on
$p$ but not on the number of pieces.  No sharp-cutoff analogue is inferred
from the smooth theorem.

## FR-12. Muckenhoupt weights and weighted estimates

**A page:** `muckenhoupt-weights-and-weighted-estimates`
**B page:** `muckenhoupt-weights-and-weighted-estimates-examples`
**Requires:** FR-8, MT-14's $L^p$ spaces, MT-17's unweighted maximal theorem,
and measure-theory Radon–Nikodym facts.  **Sources read:** G §§7.1–7.4,
pp. 499–545; K chs. 4–5, pp. 65–111.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-muckenhoupt-a-p-and-a-one-weights` (definition) — for $1<p<\infty$ require $[w]_{A_p}=\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}<\infty$, while $A_1$ means $Mw\le Cw$ a.e. | Fixes positivity a.e., local integrability, and the distinct endpoint definition. | literature-derived | not-applicable | G §7.1/K ch. 5. |
| 2 | `lem-a-p-dual-weight-and-nesting-properties` (lemma) — $w\in A_p$ iff $w^{-1/(p-1)}\in A_{p'}$, and $A_p\subset A_q$ for $1\le p<q$. | Basic exponent bookkeeping for duality/interpolation. | literature-derived | ai-altered | G/K; $p=1$ treated separately. |
| 3 | `lem-a-p-weights-are-doubling` (lemma) — $w(2Q)\le C([w]_{A_p},n,p)w(Q)$. | Enables weighted covering and local arguments. | literature-derived | ai-altered | K/G; compare subsets via Hölder. |
| 4 | `thm-reverse-holder-self-improvement-for-a-p-weights` (theorem) — an $A_p$ weight satisfies a reverse Hölder inequality with some exponent $1+\varepsilon>1$ depending quantitatively on its characteristic. | Deep structural self-improvement. | literature-derived | not-supplied | G §7.2/K ch. 5; covering proof is sourced. |
| 5 | `cor-a-p-classes-are-open-in-the-exponent` (corollary) — if $1<p<\infty$ and $w\in A_p$, then $w\in A_{p-\varepsilon}$ for some $\varepsilon>0$. | Later extrapolation/interpolation input. | literature-derived | ai-altered | Item 4 plus dual-weight algebra. |
| 6 | `lem-weighted-maximal-weak-bound-for-a-one` (lemma) — $w(\{Mf>\lambda\})\lesssim\lambda^{-1}\int|f|w$ for $w\in A_1$. | Correct weighted lower endpoint. | literature-derived | ai-altered | G/K covering proof; cites, does not re-mint, the maximal definition. |
| 7 | `thm-hardy-littlewood-maximal-operator-characterises-a-p` (theorem) — for $1<p<\infty$, $M$ is bounded on $L^p(w)$ iff $w\in A_p$. | Fundamental exact characterisation. | literature-derived | ai-altered | G §7.2/K; necessity tests $w^{-1/(p-1)}1_Q$, sufficiency uses covering/self-improvement. |
| 8 | `def-muckenhoupt-a-infinity-class` (definition) — $A_\infty=\bigcup_{1\le p<\infty}A_p$, with membership independent of the witnessing exponent. | Closes the hypothesis used by weighted good-$\lambda$ estimates. | literature-derived | not-applicable | G §7.3/K ch. 5. |
| 9 | `thm-a-infinity-power-decay-characterisation` (theorem) — $w\in A_\infty$ iff there are $C,\delta>0$ such that $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ for every measurable $E\subset Q$. | Supplies the precise absolute-continuity estimate consumed by item 10. | literature-derived | not-supplied | G §7.3; the full equivalence and constants remain sourced. |
| 10 | `lem-weighted-good-lambda-inequality-for-maximal-truncations` (lemma) — for $w\in A_\infty$, the weighted distribution of $T^*f$ above $2\lambda$ is controlled by that above $\lambda$ plus a maximal-function exceptional set. | Exposes the transfer mechanism to singular integrals. | literature-derived | not-supplied | G §7.4; quantitative good-$\lambda$ proof retained as sourced. |
| 11 | `thm-calderon-zygmund-operators-are-bounded-on-weighted-lp` (theorem) — a standard $L^2$-bounded CZ operator is bounded on $L^p(w)$ for $1<p<\infty$ and $w\in A_p$. | Required weighted singular-integral theorem. | literature-derived | ai-altered | G/K; items 7–10, with constants depending on $[w]_{A_p}$. |
| 12 | `cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp` (corollary) — FR-7 transforms obey item 11 whenever $w\in A_p$ and $1<p<\infty$. | Concrete principal consumer without asserting a converse for every individual transform. | literature-derived | ai-altered | FR-7 kernel verification plus item 11. |
| 13 | `rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one` (remark) — $A_1$ gives a weak maximal/CZ endpoint under the relevant sourced hypothesis, not the strong theorem in items 7 or 11. | Prevents an endpoint substitution. | literature-derived | not-applicable | G/K. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-power-weight-a-p-range` (example) — $|x|^\alpha\in A_p(\mathbb R^n)$ exactly when $-n<\alpha<n(p-1)$. | Tests both local integrability singularities and dual weight. | literature-derived | ai-altered | G/K; centred/off-centre cubes split. |
| 2 | `cex-power-weight-fails-at-both-a-p-endpoints` (counterexample) — at $\alpha=-n$ or $\alpha=n(p-1)$ one defining average diverges logarithmically. | Shows both inequalities are strict. | literature-derived | ai-altered | Direct radial integral. |
| 3 | `ex-a-one-power-weight-range` (example) — $|x|^\alpha\in A_1$ exactly for $-n<\alpha\le0$. | Audits the separate endpoint convention. | literature-derived | ai-altered | K ch. 5. |
| 4 | `cex-a-doubling-weight-need-not-be-a-p` (counterexample) — a sourced doubling density lies in no $A_p$. | Shows item 3 has no converse. | literature-derived | not-supplied | G §7.1; source construction must be retained. |
| 5 | `ex-weighted-norm-of-an-interval-indicator` (example) — compute $\|1_{(0,r)}\|_{L^p(|x|^\alpha)}$ in the admissible range. | Checks zero-radius and exponent scaling. | ai-generated | ai-generated | Direct integral; leaf. |

**Hard proof/boundary obligations.**  A weight is positive a.e. and finite
a.e.; reciprocal powers are understood only after this is established.
$A_1$ is not defined by substituting $p=1$ into the $A_p$ formula.  Item 7 is
an iff for the maximal operator; item 11 is only a sufficient theorem for a
general CZ operator.  Quantitative constants record dependence on the weight
characteristic rather than being called universal.

## FR-13. Fourier restriction and Stein–Tomas

**A page:** `fourier-restriction-and-the-stein-tomas-theorem`
**B page:** `fourier-restriction-and-the-stein-tomas-theorem-examples`
**Requires:** FR-6, FR-11, FA Plancherel/duality, MT interpolation, and the
published Euclidean surface-measure/change-of-variables results.  **Sources
read:** Wo §§1–7, pp. 1–46; Taob notes 8–9, pp. 1–22 and 1–14.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-fourier-restriction-and-adjoint-extension-operators` (definition) — for a compact smooth hypersurface $S$ with surface measure $\sigma$, set $Rf=\widehat f|_S$ initially on Schwartz functions and $Eg=(g\,d\sigma)^\vee$. | Defines restriction only where pointwise Fourier values exist. | literature-derived | not-applicable | Wo §1/Taob note 8. |
| 2 | `lem-restriction-and-extension-estimates-are-dual` (lemma) — $R:L^p(\mathbb R^n)\to L^2(S)$ is bounded iff $E:L^2(S)\to L^{p'}(\mathbb R^n)$ is bounded with the same norm. | Lets the proof use the geometrically natural formulation. | literature-derived | ai-altered | FA duality and Fubini on dense classes. |
| 3 | `lem-cap-wave-packet-has-dual-tube-concentration` (lemma) — extension of data on a spherical cap of angular radius $\delta$ is essentially coherent on a tube of dimensions $\delta^{-1}\times\cdots\times\delta^{-1}\times\delta^{-2}$. | Splits the Knapp scaling calculation. | literature-derived | ai-altered | Wo §2/Taob note 8; phase variation estimated explicitly. |
| 4 | `thm-knapp-necessary-condition-for-spherical-ltwo-restriction` (theorem) — an estimate $R:L^p(\mathbb R^n)\to L^2(S^{n-1})$ forces $p\le2(n+1)/(n+3)$, equivalently extension exponent $q\ge2(n+1)/(n-1)$. | Makes the dimensional obstruction exact. | literature-derived | ai-altered | Item 3 and cap/tube measures. |
| 5 | `lem-stationary-phase-decay-for-spherical-surface-measure` (lemma) — $|(d\sigma)^\vee(x)|\lesssim(1+|x|)^{-(n-1)/2}$. | Analytic input to Stein–Tomas. | literature-derived | not-supplied | Wo §§3–4/Taob note 8; stationary-phase proof cost cited. |
| 6 | `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` (lemma) — $EE^*F=F*(d\sigma)^\vee$. | Isolates the Hilbert-space operator step. | literature-derived | ai-altered | Wo §4/Taob; dense-class calculation then closure. |
| 7 | `lem-dyadic-spherical-convolution-pieces-interpolate-and-sum` (lemma) — dyadic pieces of $(d\sigma)^\vee$ have complementary $L^1\to L^\infty$ decay and $L^2\to L^2$ growth whose interpolation sums at the Tomas exponent. | Exposes the real proof rather than citing decay alone. | literature-derived | ai-altered | Wo §4/Taob note 8; endpoint summation stated precisely. |
| 8 | `thm-stein-tomas-spherical-restriction-theorem` (theorem) — for $n\ge2$, $R:L^{2(n+1)/(n+3)}(\mathbb R^n)\to L^2(S^{n-1})$ is bounded, equivalently $E:L^2(S^{n-1})\to L^{2(n+1)/(n-1)}$. | Required sharp $L^p\to L^2$ result. | literature-derived | ai-altered | Items 5–7; finite measure supplies the smaller-$p$ range. |
| 9 | `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` (corollary) — the same local exponent pair holds for compact smooth hypersurfaces with everywhere nonvanishing Gaussian curvature. | Gives the invariant geometric version. | literature-derived | ai-altered | Partition of unity and local stationary phase, source-backed. |
| 10 | `rem-the-general-fourier-restriction-problem` (remark) — restriction estimates with target exponents other than two remain a deeper dimension-dependent problem constrained by scaling and Knapp examples. | Prevents calling Stein–Tomas the whole restriction conjecture. | literature-derived | not-supplied | Wo/Taob surveys. |
| 11 | `rem-restriction-estimates-and-the-missing-strichartz-interface` (remark) — extension estimates feed spacetime estimates for dispersive equations, but no PDE Strichartz page exists in the current scaffold, so no page id is cited. | Records the dispatch interface without fabricating a prerequisite. | literature-derived | not-supplied | Taob note 9; seam amendment owed. |

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

## FR-14. Pontryagin duality for locally compact abelian groups

**A page:** `pontryagin-duality-for-locally-compact-abelian-groups`
**B page:** `pontryagin-duality-for-locally-compact-abelian-groups-examples`
**Requires:** the published topological-group quotient/product results and
`RG-? (Haar existence and uniqueness)` for the analytic separation lemma used
by the sourced duality proof.  This unresolved relative label is a recorded
seam blocker, not permission to mint Haar theory.  **Sources read:** Lo
§§34–35 and §37, pp. 134–140 and 147–152; Ko §§6–13, pp. 14–27; EW Appendix C.1,
printed pp. 429–432.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-pontryagin-dual-and-compact-open-topology` (definition) — $\widehat G$ is the group of continuous characters $G\to\mathbb T$ with the compact-open topology. | Fixes continuity and topology, not merely the algebraic character group. | literature-derived | not-applicable | Lo §34/Ko §6. |
| 2 | `lem-character-evaluation-and-dual-homomorphisms-are-continuous` (lemma) — evaluation $x\mapsto(\gamma\mapsto\gamma(x))$ and pullback $\widehat\phi$ of a continuous homomorphism are continuous homomorphisms. | Establishes functoriality and the bidual map. | literature-derived | ai-altered | Lo/Ko; compact-open subbasis checked. |
| 3 | `thm-dual-of-an-lca-group-is-locally-compact-abelian` (theorem) — $\widehat G$ with the compact-open topology is again LCA. | Closure of the category under duality. | literature-derived | not-supplied | Lo §34/Ko §8; Arzelà–Ascoli-style proof and separation input are sourced. |
| 4 | `lem-continuous-characters-separate-points-of-an-lca-group` (lemma) — for $x\ne0$ in $G$, some $\gamma\in\widehat G$ has $\gamma(x)\ne1$. | Proves injectivity of evaluation. | literature-derived | not-supplied | Lo §37/Ko §10; uses the RG-owned Haar foundation through positive-definite functions. |
| 5 | `def-annihilator-of-a-subgroup` (definition) — for $H\le G$, $H^\perp=\{\gamma:\gamma|_H=1\}$, with closure conventions stated. | Names the subgroup/quotient interface. | literature-derived | not-applicable | Lo §35B/EW C.1. |
| 6 | `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` (lemma) — $H\subset K$ implies $K^\perp\subset H^\perp$ and $(H^\perp)^\perp=\overline H$ under bidual identification. | Controls nonclosed subgroups and both directions. | literature-derived | ai-altered | Lo §§35B, 37; closure cannot be omitted. |
| 7 | `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` (theorem) — for closed $H\le G$, pullback identifies $\widehat{G/H}$ topologically with $H^\perp$. | Exact quotient duality without colliding with FA's Banach-space quotient-dual theorem. | literature-derived | ai-altered | Lo §35B/Ko §11; quotient topology and surjectivity separated. |
| 8 | `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` (theorem) — restriction $\widehat G\to\widehat H$ is onto with kernel $H^\perp$, hence $\widehat H\cong\widehat G/H^\perp$. | Complementary exact-sequence direction. | literature-derived | not-supplied | Lo §37/Ko §11; character-extension theorem is load-bearing and sourced. |
| 9 | `thm-compact-discrete-duality-for-lca-groups` (theorem) — $G$ is compact iff $\widehat G$ is discrete, and $G$ is discrete iff $\widehat G$ is compact. | Organises Fourier series and sequences as dual cases. | literature-derived | ai-altered | Lo §37/Ko §9. |
| 10 | `lem-duals-of-products-and-direct-sums` (lemma) — finite products dualise to finite products, while a discrete direct sum dualises to the compact product with the stated topology. | Supports finite and lattice examples without noncommutative representation theory. | literature-derived | ai-altered | Ko §§9, 12/EW C.1. |
| 11 | `thm-pontryagin-biduality` (theorem) — the evaluation map $G\to\widehat{\widehat G}$ is an isomorphism of topological groups for every LCA group. | Required abstract duality theorem. | literature-derived | not-supplied | Lo §37/Ko §13; full proof is long and Haar-dependent. |
| 12 | `cor-pontryagin-duality-is-a-contravariant-involution` (corollary) — dualisation reverses arrows and the double-dual identifications are natural. | Gives later pages a precise categorical interface. | literature-derived | ai-altered | Items 2 and 11; naturality square checked. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-pontryagin-dual-of-the-integers-is-the-circle` (example) — a character of $\mathbb Z$ is determined by the image of one and the compact-open topology gives $\mathbb T$. | Basic discrete/compact model. | literature-derived | ai-altered | Ko/Lo. |
| 2 | `ex-pontryagin-dual-of-the-circle-is-the-integers` (example) — every continuous circle character is $x\mapsto e^{2\pi ikx}$ for a unique $k\in\mathbb Z$. | Reverse model and integer convention. | literature-derived | ai-altered | Ko; uses the published lift/winding result. |
| 3 | `ex-pontryagin-dual-of-euclidean-space` (example) — $\widehat{\mathbb R^n}\cong\mathbb R^n$ via $\xi(x)=e^{2\pi ix\cdot\xi}$. | Matches the existing Fourier-transform convention. | literature-derived | ai-altered | Lo/Ko. |
| 4 | `ex-pontryagin-dual-of-a-finite-cyclic-group` (example) — $\widehat{\mathbb Z/N\mathbb Z}\cong\mathbb Z/N\mathbb Z$ noncanonically until a primitive character is chosen. | Feeds FR-16 and records the choice. | literature-derived | ai-altered | EW C.1. |
| 5 | `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` (counterexample) — forgetting topology loses the compact/discrete and bidual homeomorphism statements. | Tests why item 1 has topology. | literature-derived | not-supplied | Ko examples; no invented exotic construction. |

**Hard proof/boundary obligations.**  All groups here are Hausdorff LCA and
abelian; no assertion is made about irreducible representations of a
noncommutative group.  Annihilator formulae use closed subgroups or explicitly
insert closure.  The bidual theorem is a sourced deep theorem with proof
`not-supplied` until the Haar prerequisite receives an actual RG label.

## FR-15. Bochner, inversion, and Plancherel on LCA groups

**A page:** `bochner-inversion-and-plancherel-on-lca-groups`
**B page:** `bochner-inversion-and-plancherel-on-lca-groups-examples`
**Requires:** FR-14, FA Fourier/convolution/Plancherel, MT Radon measures, and
`RG-? (Haar existence and uniqueness)`.  **Sources read:** Lo §§34 and 36–37,
pp. 134–137 and 141–152; EW Appendix C.1–C.3, printed pp. 429–439; T §§11–12,
PDF pp. 86–100 for the compact/discrete normalisation checks.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-fourier-transform-on-an-lca-group` (definition) — for $f\in L^1(G,m_G)$, $\widehat f(\gamma)=\int_Gf(x)\overline{\gamma(x)}\,dm_G(x)$. | Generalises the existing transform only after Haar is cited. | literature-derived | not-applicable | Lo §34/EW C.2. |
| 2 | `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` (lemma) — record the exact character factors and $\widehat{f*g}=\widehat f\widehat g$. | Algebraic calculus for all later theorems. | literature-derived | ai-altered | Lo §34/EW C.2; Fubini hypotheses explicit. |
| 3 | `thm-riemann-lebesgue-lemma-on-lca-groups` (theorem) — $\widehat f\in C_0(\widehat G)$ and $\|\widehat f\|_\infty\le\|f\|_1$. | Identifies the correct transform codomain. | literature-derived | ai-altered | Lo §34/EW C.2; compactly supported approximation and character separation. |
| 4 | `thm-compatible-dual-haar-normalisation` (theorem) — once $m_G$ is fixed, there is a unique scaling of Haar measure on $\widehat G$ for which Fourier inversion holds. | Resolves the reciprocal normalisation without reproving Haar existence. | literature-derived | not-supplied | Lo §36C; explicitly conditional on RG's theorem. |
| 5 | `thm-lca-fourier-inversion-for-integrable-transform` (theorem) — if $f\in L^1(G)$ and $\widehat f\in L^1(\widehat G)$, then the inverse integral equals the continuous representative of $f$ a.e., and at every point where the sourced regularisation converges. | Gives a safe inversion hypothesis and representative. | literature-derived | ai-altered | Lo §§36B–36C/EW C.2; equality is not claimed pointwise for an arbitrary class. |
| 6 | `lem-lca-parseval-pairing-on-the-integrable-core` (lemma) — on $L^1\cap L^2$ functions with integrable transforms, $\int_Gf\overline g=\int_{\widehat G}\widehat f\overline{\widehat g}$. | Dense isometric core for Plancherel. | literature-derived | ai-altered | Lo §36B; inversion and Fubini. |
| 7 | `thm-plancherel-theorem-for-lca-groups` (theorem) — the Fourier transform extends uniquely to a unitary $L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G})$. | Required LCA Plancherel theorem. | literature-derived | not-supplied | Lo §36D/EW C.2; density and surjectivity use biduality. |
| 8 | `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` (corollary) — compact $G$ yields a discrete dual sum and discrete $G$ a compact-dual integral with compatible weights. | Unifies FA Fourier series and FR-16. | literature-derived | ai-altered | FR-14 compact/discrete duality plus item 7. |
| 9 | `def-positive-definite-function-on-an-abelian-group` (definition) — $\phi$ is positive definite when $\sum_{j,k}c_j\overline{c_k}\phi(x_j-x_k)\ge0$ for every finite choice, including the empty sum. | Sets the finite-matrix convention for Bochner. | literature-derived | not-applicable | Lo §36A/EW C.3. |
| 10 | `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` (lemma) — $\phi(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ is continuous positive definite for finite positive $\mu$. | Easy direction of Bochner with continuity justified. | literature-derived | ai-altered | Expand the finite quadratic form; dominated convergence. |
| 11 | `thm-bochner-theorem-for-lca-groups` (theorem) — every continuous positive-definite $\phi$ on $G$ is the Fourier–Stieltjes transform of a unique finite positive Radon measure on $\widehat G$, of mass $\phi(0)$. | Required representation theorem. | literature-derived | not-supplied | Lo §36A/EW C.3; representation/Riesz proof is retained as deep sourced machinery. |
| 12 | `cor-normalised-positive-definite-functions-correspond-to-probability-measures` (corollary) — $\phi(0)=1$ in Bochner's theorem iff the representing measure is a probability measure. | Useful probability interface. | literature-derived | ai-altered | Item 11 mass identity. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-haar-normalisations-on-the-circle-and-the-integers` (example) — normalised measure on $\mathbb T$ pairs with counting measure on $\mathbb Z$. | Checks the existing Fourier-series convention. | literature-derived | ai-altered | EW/T. |
| 2 | `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` (example) — probability measure on $G$ pairs with counting measure on $\widehat G$ for the nonunitary LCA transform. | Explains the conversion to FR-16's unitary DFT. | literature-derived | ai-altered | EW C.2. |
| 3 | `ex-a-character-is-positive-definite` (example) — a character gives a rank-one positive semidefinite matrix and corresponds to a point mass. | Minimal Bochner check. | ai-generated | ai-generated | Finite square; leaf. |
| 4 | `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` (counterexample) — a sourced three-point matrix test fails for an explicit function. | Shows boundedness is not positivity. | literature-derived | ai-altered | EW C.3 example; determinant checked. |
| 5 | `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` (counterexample) — changing a representative at one point preserves its transform but changes that point value. | Tests the representative language in item 5. | ai-generated | ai-generated | Null-set leaf. |

**Hard proof/boundary obligations.**  Haar existence/uniqueness remains an RG
dependency; item 4 selects only the reciprocal scale.  Fourier inversion
returns a continuous representative under its hypotheses, never a prescribed
null-set version.  Positive definiteness includes repeated points and complex
coefficients.  Bochner's measure is finite because $\phi(0)<\infty$ and is
unique by the published measure-uniqueness theorem.

## FR-16. Finite Fourier analysis and the fast Fourier transform

**A page:** `finite-fourier-analysis-and-the-fast-fourier-transform`
**B page:** `finite-fourier-analysis-and-the-fast-fourier-transform-examples`
**Requires:** FR-14–FR-15 for the conceptual finite-group interface and only
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

## FR-17. Poisson summation, sampling, and lattice duality

**A page:** `poisson-summation-sampling-and-lattice-duality`
**B page:** `poisson-summation-sampling-and-lattice-duality-examples`
**Requires:** FA-23's exact
`thm-poisson-summation-for-schwartz-functions`, FR-1–FR-2, FR-14–FR-16, and
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
| 9 | `thm-shannon-sampling-for-bandlimited-ltwo-functions` (theorem) — if $\operatorname{supp}\widehat f\subset[-1/(2h),1/(2h)]$, then $f=\sum_{k\in\mathbb Z}f(hk)\operatorname{sinc}(x/h-k)$ in $L^2$, with the sourced pointwise strengthening under added regularity. | Required reconstruction theorem with convergence mode stated. | literature-derived | not-supplied | L ch. 24 plus its Fourier-series proof; endpoint support convention retained. |
| 10 | `cor-nyquist-no-aliasing-condition` (corollary) — translates of a frequency support by $h^{-1}\mathbb Z$ are disjoint up to null endpoints when the bandwidth is at most $1/(2h)$. | Explains the sampling threshold. | literature-derived | ai-altered | Item 8 geometric support check. |
| 11 | `rem-aliasing-above-the-nyquist-rate` (remark) — overlapping reciprocal translates add before reconstruction, so distinct inputs may have identical samples. | Records the failure mechanism rather than a slogan. | literature-derived | not-applicable | L ch. 24. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` (remark) — cite FA-23's `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` rather than creating a second Gaussian Poisson example. | Preserves the existing example's ownership. | literature-derived | not-supplied | MITP/L ch. 23 verify the interface. |
| 2 | `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` (example) — compute $\Lambda^*$ and reciprocal determinant for diagonal $A$. | Checks transpose and scale. | ai-generated | ai-generated | Finite leaf. |
| 3 | `ex-shannon-reconstruction-of-a-sinc-function` (example) — its integer samples are one at zero and zero elsewhere under the adopted sinc normalisation. | Checks signs/endpoints. | literature-derived | ai-altered | L ch. 24. |
| 4 | `cex-poisson-summation-can-fail-with-only-lone-integrability` (counterexample) — a sourced continuous $L^1$ function and transform show that point-sampled sums need not satisfy the formula. | Shows why item 6 has pointwise decay/regularity. | literature-derived | not-supplied | L ch. 23 warning; exact source construction required. |
| 5 | `cex-undersampling-identifies-two-distinct-pure-frequencies` (counterexample) — frequencies differing by an integer multiple of $h^{-1}$ agree at every sample $hk$. | Finite aliasing witness. | ai-generated | ai-generated | Leaf. |

**Hard proof/boundary obligations.**  Lattices have full rank and nonzero
covolume.  Every interchange in periodisation is backed by absolute/local
uniform convergence.  Poisson summation is never stated for arbitrary $L^1$
functions with point values.  Shannon equality is first in $L^2$; endpoint
frequency values are irrelevant only as null-set data, and pointwise claims
require the extra sourced hypotheses.

## FR-18. Uncertainty principles for Fourier analysis

**A page:** `uncertainty-principles-for-fourier-analysis`
**B page:** `uncertainty-principles-for-fourier-analysis-examples`
**Requires:** FA-23's exact `thm-heisenberg-uncertainty-inequality`, FR-16,
FA Plancherel and differentiation, and the published integration-by-parts
inequality.  **Sources read:** FM §§1–2, pp. 1–8; S §§1–5, pp. 1–13; L
chs. 14–15, pp. 79–90.

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `def-spatial-and-frequency-centres-and-variances` (definition) — for nonzero $f\in L^2$ with finite second moments, define the probability-normalised means and variances of $|f|^2$ and $|\widehat f|^2$. | Makes translation/modulation-invariant uncertainty precise. | literature-derived | not-applicable | S §§1–2/L ch. 15. |
| 2 | `lem-centering-by-translation-and-modulation-preserves-the-variance-product` (lemma) — translate by the spatial mean and modulate by the frequency mean to reduce to centred moments without changing their product. | Splits invariance from the inequality. | literature-derived | ai-altered | S/L; transform phases checked. |
| 3 | `lem-position-derivative-commutator-estimate` (lemma) — integration by parts and Cauchy–Schwarz give $\|x_jf\|_2\|\partial_jf\|_2\ge\tfrac12\|f\|_2^2$ on the stated Sobolev/moment domain. | Real-variable core of Heisenberg. | literature-derived | ai-altered | S §2; cutoff approximation closes boundary terms. |
| 4 | `rem-heisenberg-uncertainty-is-owned-by-functional-analysis` (remark) — cite FA-23's exact theorem, which under this convention gives $\|x_jf\|_2\|\xi_j\widehat f\|_2\ge(4\pi)^{-1}\|f\|_2^2$ and Gaussian equality. | Avoids duplicate minting while recording the constant. | literature-derived | not-supplied | FA-23 plus items 2–3. |
| 5 | `cor-dimensional-heisenberg-uncertainty-inequality` (corollary) — $\||x|f\|_2\,\||\xi|\widehat f\|_2\ge n(4\pi)^{-1}\|f\|_2^2$. | Required $n$-dimensional form. | literature-derived | ai-altered | Sum item 4 coordinate inequalities and apply Cauchy–Schwarz. |
| 6 | `thm-support-measure-uncertainty-inequality` (theorem) — if nonzero $f\in L^2$ and $f,\widehat f$ are supported on finite-measure sets $E,F$, then $|E||F|\ge1$. | Quantifies simultaneous concentration without complex analysis. | literature-derived | ai-altered | S §3; $L^1$–$L^\infty$ transform bound plus Plancherel. |
| 7 | `thm-qualitative-compact-support-uncertainty-principle` (theorem) — a function and its Fourier transform cannot both have compact support unless the function is zero. | Classical exact-support result stronger than item 6. | literature-derived | not-supplied | S §3; analytic-continuation proof is sourced because complex analysis comes later. |
| 8 | `thm-hardy-gaussian-uncertainty-principle` (theorem) — if $|f(x)|\le Ce^{-\pi a|x|^2}$ and $|\widehat f(\xi)|\le Ce^{-\pi b|\xi|^2}$, then $ab>1$ forces $f=0$, while $ab=1$ forces a scalar Gaussian $e^{-\pi a|x|^2}$. | Required sharp Gaussian theorem with exact normalisation. | literature-derived | not-supplied | FM §1/S §4; entire-function/Phragmén–Lindelöf proof cost retained. |
| 9 | `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp` (lemma) — if $ab<1$, choosing $a<c<1/b$ makes $e^{-\pi c|x|^2}$ satisfy both bounds. | Establishes the remaining parameter regime directly. | literature-derived | ai-altered | Gaussian transform formula; strict interval nonempty iff $ab<1$. |
| 10 | `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty` (remark) — the classical proof complexifies a Gaussian-weighted transform and uses a growth theorem; it is not replaced by an unsourced real-variable argument. | Honest dependency/cost record below the complex-analysis band. | literature-derived | not-supplied | FM §1. |
| 11 | `thm-finite-dft-support-product-uncertainty` (theorem) — for nonzero $f$ on $\mathbb Z/N\mathbb Z$, $|\operatorname{supp}f|\,|\operatorname{supp}\mathcal F_Nf|\ge N$. | Finite analogue with the unitary normalisation. | literature-derived | ai-altered | S §5/FR-16; Cauchy–Schwarz and $\|\mathcal F_Nf\|_\infty\le N^{-1/2}\|f\|_1$. |
| 12 | `rem-uncertainty-principles-measure-different-notions-of-localisation` (remark) — variance, support size, and Gaussian decay are inequivalent hypotheses and their conclusions are not interchanged. | Prevents a family of false corollaries. | literature-derived | not-applicable | FM/S comparison. |

**B-page leaves.**

| # | item id (kind) and one-line statement | for | statement provenance | proof provenance | component rationale |
|---:|---|---|---|---|---|
| 1 | `ex-gaussian-attains-heisenberg-equality` (example) — compute both variances of $e^{-\pi a|x|^2}$ and verify equality. | Checks every $2\pi$ constant. | literature-derived | ai-altered | S/L. |
| 2 | `cex-finite-variance-is-not-the-same-as-compact-support` (counterexample) — a Gaussian has finite variance and full support in both domains. | Separates items 5 and 7. | ai-generated | ai-generated | Direct leaf. |
| 3 | `ex-hardy-critical-and-subcritical-gaussian-regimes` (example) — tabulate $c=a=1/b$ and $a<c<1/b$. | Boundary verification for items 8–9. | ai-generated | ai-generated | Leaf. |
| 4 | `ex-finite-dft-delta-and-constant-extremisers` (example) — a delta and its constant transform have support product $N$. | Checks finite equality cases. | literature-derived | ai-altered | FR-16 direct transform. |
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
| 7 | L ch. 4, “Fourier coefficients in $\ell^1(\mathbb Z)$ (or, $f\in A(\mathbb T)$),” pp. 27–30 | `included` | `def-wiener-algebra-of-the-circle`; `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence`; `thm-wiener-algebra-is-a-banach-algebra`; `rem-wiener-lemma-interface-for-the-circle-algebra`; `cor-holomorphic-functional-calculus-in-the-wiener-algebra`; `ex-a-trigonometric-polynomial-in-the-wiener-algebra`; `ex-an-absolutely-convergent-non-smooth-fourier-series`; `cex-continuity-does-not-imply-absolute-fourier-convergence`; `cex-wiener-inversion-needs-nonvanishing` |
| 8 | G §3.3.3, “Functions with Absolutely Summable Fourier Coefficients,” pp. 200–202 | `included` | `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz`; `thm-bernstein-absolute-convergence-theorem`; `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series`; `cex-the-bernstein-holder-one-half-endpoint-can-fail` |
| 9 | G §3.6.1, “Definition and Basic Properties of Lacunary Series,” pp. 227–229 | `included` | `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series`; `lem-hadamard-gaps-bound-additive-representations`; `ex-powers-of-two-form-a-hadamard-lacunary-sequence`; `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` |
| 10 | G §3.6.2, “Equivalence of $L^p$ Norms of Lacunary Series,” pp. 229–235 | `included` | `thm-lacunary-lp-norm-equivalence`; `cor-lacunary-series-lp-membership-is-coefficient-ell-two` |
| 11 | G §3.6.3, “Sidon sets,” pp. 235–237 | `included` | `def-sidon-set-in-the-integer-dual`; `lem-riesz-product-for-a-hadamard-lacunary-set`; `thm-hadamard-lacunary-sets-are-sidon`; `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients`; `ex-riesz-product-for-three-powers-of-three`; `cex-the-integers-are-not-a-sidon-set` |
| 12 | G §3.4.3, “Pointwise Divergence of the Dirichlet Means,” pp. 210–212 | `included` | `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`; `cex-continuous-function-with-divergent-fourier-series-at-a-point`; `ex-fourier-partial-sum-operators-and-uniform-boundedness`; `cex-continuous-fourier-series-need-not-converge-everywhere` |
| 13 | G §4.2.1, “Divergence of Fourier Series of Integrable Functions,” pp. 255–270 | `included` | `lem-kolmogorov-block-polynomials-have-large-partial-sum-maxima`; `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere`; `cex-lone-fourier-series-can-diverge-almost-everywhere` |
| 14 | L ch. 8, Carleson/Kolmogorov endpoint discussion, pp. 51–52 | `included` | `def-carleson-maximal-partial-sum-operator`; `thm-carleson-hunt-almost-everywhere-convergence`; `rem-proof-cost-of-the-carleson-hunt-theorem`; `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one`; `rem-the-lone-endpoint-is-excluded-from-carleson-hunt`; `cex-carleson-maximal-operator-is-not-strong-type-one-one` |
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
| 36 | W §11.1, “Stationary phase and the role of nonvanishing Gauss curvature,” pp. 71–73 | `included` | `def-fourier-restriction-and-adjoint-extension-operators`; `lem-restriction-and-extension-estimates-are-dual`; `lem-stationary-phase-decay-for-spherical-surface-measure`; `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature`; `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise`; `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` |
| 37 | Wo §2, “The restriction problem,” and cap example, pp. 6–10 | `included` | `lem-cap-wave-packet-has-dual-tube-concentration`; `thm-knapp-necessary-condition-for-spherical-ltwo-restriction`; `rem-the-general-fourier-restriction-problem`; `ex-knapp-cap-and-tube-volume-calculation`; `cex-knapp-rules-out-extension-below-the-tomas-exponent` |
| 38 | W §11.3, “Proof of the Tomas–Stein theorem,” pp. 73–74 | `included` | `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform`; `lem-dyadic-spherical-convolution-pieces-interpolate-and-sum`; `thm-stein-tomas-spherical-restriction-theorem`; `ex-circle-stein-tomas-exponents` |
| 39 | W §11.4, “Application: Strichartz estimates and a nonlinear Schrödinger equation,” pp. 74–77 | `included` | `rem-restriction-estimates-and-the-missing-strichartz-interface` |
| 40 | Ko §6, character groups and the compact-open topology, pp. 14–16 | `included` | `def-pontryagin-dual-and-compact-open-topology`; `lem-character-evaluation-and-dual-homomorphisms-are-continuous`; `thm-dual-of-an-lca-group-is-locally-compact-abelian`; `lem-continuous-characters-separate-points-of-an-lca-group`; `ex-pontryagin-dual-of-the-integers-is-the-circle`; `ex-pontryagin-dual-of-the-circle-is-the-integers`; `ex-pontryagin-dual-of-euclidean-space`; `ex-pontryagin-dual-of-a-finite-cyclic-group`; `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` |
| 41 | Lo §35, “Examples,” especially §§35A–35B, pp. 138–140 | `included` | `def-annihilator-of-a-subgroup`; `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`; `lem-duals-of-products-and-direct-sums`; `ex-pontryagin-dual-of-the-integers-is-the-circle`; `ex-pontryagin-dual-of-the-circle-is-the-integers`; `ex-pontryagin-dual-of-euclidean-space` |
| 42 | Lo §37, “Miscellaneous Theorems,” Pontryagin-duality portion, pp. 151–152 | `included` | `lem-annihilator-reverses-inclusion-and-double-annihilator-closes`; `thm-dual-of-a-closed-subgroup-is-the-dual-quotient`; `thm-compact-discrete-duality-for-lca-groups`; `thm-pontryagin-biduality`; `cor-pontryagin-duality-is-a-contravariant-involution` |
| 43 | Lo §34, “The Character Group,” pp. 134–137 | `included` | `def-fourier-transform-on-an-lca-group`; `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution`; `thm-riemann-lebesgue-lemma-on-lca-groups`; `ex-haar-normalisations-on-the-circle-and-the-integers`; `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` |
| 44 | Lo §36B, inversion on the positive-definite/integrable core, pp. 142–144 | `included` | `thm-lca-fourier-inversion-for-integrable-transform`; `lem-lca-parseval-pairing-on-the-integrable-core`; `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` |
| 45 | Lo §36A, Bochner's theorem for positive-definite functions, pp. 141–142 | `included` | `def-positive-definite-function-on-an-abelian-group`; `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite`; `thm-bochner-theorem-for-lca-groups`; `cor-normalised-positive-definite-functions-correspond-to-probability-measures`; `ex-a-character-is-positive-definite`; `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` |
| 46 | T §11, “The discrete Fourier transform,” PDF pp. 86–93 | `included` | `lem-orthogonality-of-characters-on-a-finite-cyclic-group`; `def-unitary-discrete-fourier-transform-on-z-mod-n`; `thm-finite-fourier-inversion`; `thm-finite-parseval-and-plancherel`; `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`; `lem-dft-squares-to-reflection-and-has-fourth-power-identity`; `ex-unitary-dft-for-n-equals-one-and-two`; `ex-cyclic-convolution-via-the-dft`; `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` |
| 47 | T §12, “The fast Fourier transform,” PDF pp. 94–100 | `included` | `def-unnormalised-engineering-dft-and-conversion`; `lem-radix-two-even-odd-dft-factorisation`; `def-recursive-radix-two-fast-fourier-transform`; `thm-radix-two-fft-correctness`; `thm-radix-two-fft-arithmetic-complexity`; `ex-four-point-radix-two-fft`; `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` |
| 48 | MITF §4, “The Cooley–Tukey Fast Fourier Transform Algorithm,” unpaginated | `included` | `rem-cooley-tukey-factorisation-for-composite-lengths` |
| 49 | L ch. 22, “Band limited functions,” pp. 129–134 | `included` | `thm-shannon-sampling-for-bandlimited-ltwo-functions`; `cor-nyquist-no-aliasing-condition`; `rem-aliasing-above-the-nyquist-rate`; `ex-shannon-reconstruction-of-a-sinc-function`; `cex-undersampling-identifies-two-distinct-pure-frequencies` |
| 50 | L ch. 23, “Periodization and Poisson summation,” pp. 135–140 | `included` | `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable`; `lem-fourier-coefficients-of-lattice-periodisation`; `rem-schwartz-poisson-formula-is-owned-by-functional-analysis`; `thm-poisson-summation-under-two-sided-polynomial-decay`; `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis`; `cex-poisson-summation-can-fail-with-only-lone-integrability` |
| 51 | T §7, “The method of images and Poisson’s summation formula,” PDF pp. 59–68 | `included` | `def-full-rank-lattice-covolume-and-dual-lattice`; `thm-poisson-summation-for-a-full-rank-lattice`; `lem-dirac-comb-is-self-dual-as-a-tempered-distribution`; `lem-sampling-produces-periodisation-in-frequency`; `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` |
| 52 | S §2, variance/Heisenberg uncertainty, pp. 2–6 | `included` | `def-spatial-and-frequency-centres-and-variances`; `lem-centering-by-translation-and-modulation-preserves-the-variance-product`; `lem-position-derivative-commutator-estimate`; `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`; `cor-dimensional-heisenberg-uncertainty-inequality`; `ex-gaussian-attains-heisenberg-equality`; `cex-finite-variance-is-not-the-same-as-compact-support` |
| 53 | S §3, support uncertainty, pp. 6–8 | `included` | `thm-support-measure-uncertainty-inequality`; `thm-qualitative-compact-support-uncertainty-principle` |
| 54 | FM §1, Hardy’s uncertainty principle, pp. 1–5 | `included` | `thm-hardy-gaussian-uncertainty-principle`; `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`; `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`; `rem-uncertainty-principles-measure-different-notions-of-localisation`; `ex-hardy-critical-and-subcritical-gaussian-regimes` |
| 55 | S §5, finite uncertainty principles, pp. 10–13 | `included` | `thm-finite-dft-support-product-uncertainty`; `ex-finite-dft-delta-and-constant-extremisers`; `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` |
| 56 | G §5.2, “Homogeneous Singular Integrals and the Method of Rotations,” pp. 333–353 | `included` | `def-standard-holder-calderon-zygmund-kernel`; `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` |
| 57 | G §5.4, “Sufficient Conditions for $L^p$ Boundedness,” pp. 374–384 | `included` | `def-standard-holder-calderon-zygmund-kernel`; `thm-maximal-truncations-are-weak-one-one-and-strong-lp`; `cex-size-without-cancellation-does-not-give-a-principal-value-operator` |
| 58 | G §4.1.1, “Equivalent Formulations of Convergence in Norm,” pp. 242–245 | `included` | `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp`; `thm-fourier-partial-sums-converge-in-periodic-lp` |
| 59 | G §7.3, “The $A_\infty$ Condition,” pp. 525–530 | `included` | `def-muckenhoupt-a-infinity-class`; `thm-a-infinity-power-decay-characterisation` |
| 60 | L ch. 13, “Applications of interpolation,” pp. 71–74 | `included` | `thm-hausdorff-young-for-periodic-fourier-coefficients`; `thm-hausdorff-young-for-the-euclidean-fourier-transform` |
| 61 | Lo §36C, dual Haar normalisation, p. 144 | `included` | `thm-compatible-dual-haar-normalisation` |
| 62 | Lo §36D, Plancherel extension, pp. 144–146 | `included` | `thm-plancherel-theorem-for-lca-groups`; `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` |
| 63 | G §4.1.2, “The $L^p$ Boundedness of the Conjugate Function,” pp. 246–249 | `included` | `thm-marcel-riesz-conjugate-function-theorem` |

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
| G §§3.2.1–3.2.3 — “Partial sums and Fourier inversion,” “Fourier series of square summable functions,” and “The Poisson Summation Formula,” pp. 183–190 | The first two duplicate the FA Fourier-series foundation; the third duplicates FA's exact Schwartz Poisson theorem.  FR-17 builds only the lattice form, wider sourced hypotheses, and sampling consequences. |
| G §4.1.3, “Bochner–Riesz Summability,” pp. 250–253, and §4.2.2, “Divergence of Bochner–Riesz Means of Integrable Functions,” pp. 261–270 | This is a separate multidimensional spherical-summability branch.  It is not a prerequisite for the commissioned restriction statement or Stein–Tomas proof, so adding it would expand the track for no dependency closure. |
| G §§4.3.1–4.3.6 — “Multipliers on the Torus,” “Transference of Multipliers,” “Applications of Transference,” “Transference of Maximal Multipliers,” “Applications to Almost Everywhere Convergence,” and “Almost Everywhere Convergence of Square Dirichlet Means,” pp. 271–289 | Full transference and multidimensional rectangular/square partial-sum theory form an advanced follow-on branch.  The scaffold records only the specific periodic/Euclidean interfaces it actually consumes. |
| G §§6.3.1–6.3.3 — “Estimates for Maximal Operators,” “Estimates for Singular Integrals with Rough Kernels,” and “An Almost Orthogonality Principle on $L^p$,” pp. 453–461 | Rough kernels and their maximal theory require another layer beyond the standard CZ kernels commissioned here.  They are genuinely valuable but peripheral to this ground-up spine. |
| G §§7.5.1–7.5.3 — “Factorization of Weights,” “Extrapolation from Weighted Estimates on a Single $L^{p_0}$,” and “Weighted Inequalities Versus Vector-Valued Inequalities,” pp. 546–558 | Rubio de Francia extrapolation and factorisation are a second weighted-theory layer; neither is needed to prove the $A_p$ maximal/CZ results retained on FR-12. |
| TaoA note 2, the interpolation headings, pp. 1–31, and note 3 §§1–3, the maximal-function and differentiation headings, pp. 1–19 | These are independent verification of the MT-owned interpolation/maximal spine.  Only note 3 §4's CZ decomposition is converted into FR content. |
| TaoA note 5 §2, the pseudodifferential-operator discussion, pp. 7–14 | Pseudodifferential calculus is a microlocal/PDE subject that the library has not reached; the Mihlin and Littlewood–Paley results here do not require minting that calculus. |
| W ch. 4, “Singular integral operators acting on Banach space-valued functions,” pp. 13–14 | General Banach-valued CZ theory is not required for the scalar Littlewood–Paley proof retained here; the needed randomised scalar estimate is split directly on FR-11. |
| W §§6.3–6.4, “Singular integrals on $C^\alpha$” and “Sobolev embedding of $\dot H^s$ for $0\le s<d/2$,” pp. 27–28 | The first is a Hölder-space regularity application and the second is explicitly PDE-owned Sobolev embedding.  FR retains only Fourier characterisations of PDE's spaces. |
| W §11.2, “Fractional integration, Riesz potentials,” p. 73 | A self-contained Hardy–Littlewood–Sobolev/potential-theory page would need a broader PDE and measure-theory interface; Stein–Tomas as scaffolded does not consume it. |
| K ch. 1, “Maximal functions,” pp. 1–20, and ch. 2, “Interpolation,” pp. 21–33 | These independently verify results assigned to MT.  They are cited as prerequisites, not duplicated. |
| Wo §1, “$L^1$ Fourier transform,” pp. 1–5 | This is FA-owned transform infrastructure.  Wo's restriction sections 2–7 are retained; the basic transform is not. |
| Wo §10, “The Kakeya Problem,” pp. 72–81 | Kakeya maximal estimates and the restriction–Kakeya conjectural interface are a substantial geometric branch beyond the requested restriction problem and Stein–Tomas statement.  No open conjecture is turned into a dependency. |
| T §3, “The Fourier transform,” PDF pp. 24–38 | This is a second full treatment of FA's transform/inversion material.  T's Poisson, LCA special cases, DFT, and FFT sections are used later instead. |
| Lo §§28–33 — “The topology of locally compact groups,” “The Haar integral,” “The modular function,” “The group algebra,” “Representations,” and “Quotient measures,” pp. 108–133 | Haar existence/uniqueness and representation theory are RG-owned.  Group-algebra and quotient-measure machinery is used only inside Loomis's sourced proof cost; extracting it into FR would violate that seam and would not remove the unresolved `RG-?` label. |
| Lo §37, “Miscellaneous Theorems,” its Wiener–Tauberian and Poisson-summation portions, pp. 147–151 | The exact Wiener lemma remains FA-owned, and FA already owns the basic Schwartz Poisson formula.  FR uses only §37's Pontryagin-duality portion and builds the distinct lattice/sampling extensions on FR-17. |
| FM §2, the dynamical/Schrödinger versions of Hardy uncertainty, pp. 5–8 | These require dispersive PDE and Strichartz estimates.  PDE currently exposes no Strichartz page, so FR records the interface blocker rather than building a PDE branch. |
| S §1, “The Fourier transform,” pp. 1–2 | Basic definition and transform identities belong to FA.  S §§2–5 supply the uncertainty items retained on FR-18. |

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
  representation theory was re-minted.  The former remains the unresolved
  `RG-?` prerequisite for FR-14/FR-15 and the latter is wholly RG-owned.
- No Strichartz theorem was re-minted.  W §11.4 yields only
  `rem-restriction-estimates-and-the-missing-strichartz-interface` because the
  promised PDE page does not exist.
- No holomorphic Hardy space or BMOA page was minted.  FR-9/FR-10 use the real
  variable spaces; the holomorphic versions belong to complex analysis.

## Verified measurements

The commission target did not exist before this pass, so the verified before
count is **0 proposed item ids**.  The finished scaffold contains **299 distinct
proposed item ids**: 210 on A pages and 89 dependency-leaf items on B pages,
across **18 A/B pairs** and 36 proposed page ids.

The crosswalk has **63 `included` canonical-heading dispositions**.  The
decomposition ratio is therefore **299 / 63 = 4.75×**.  This denominator counts
one canonical heading for each decomposed source unit; independent corroborating
treatments are recorded in the per-pair source matrix and are not double-counted.

The largest A page is **FR-8 at 17 items**.  No page
approaches the mandatory split threshold of 60, so no A/B split was made.  The
source corpus contains 19 full-treatment entries on **15 distinct source hosts**.
Every pair has at least two independent full treatments; there are no dash rows
in the matrix.

Mechanical checks for these figures use only item rows before the canonical
crosswalk, not repeated ids in the crosswalk or ownership discussion.  The same
check verifies that every mathematical-content row has separate statement and
proof provenance and uses only the SCHEMA §3 vocabulary.
