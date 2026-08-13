# Partial differential equations track — prose scaffold for `subjects-01`

> **Scaffold only.** This file proposes future pages and items. It does not
> author an item, alter `research/plan-spec.json`, assign absolute orders, or
> publish anything. The block is placed after the final `probability-theory`
> page; every `PDE-n` below is a relative label whose absolute order is to be
> computed only when a future build splices the track.

## Summary for the orchestrator

**Owned block.** Twenty-six A/B pairs are scaffolded, in this dependency order:

| relative label | A page | subject |
|---|---|---|
| PDE-1 | `partial-differential-equations-and-characteristics` | PDE vocabulary, principal symbols, second-order classification, linear transport |
| PDE-2 | `quasilinear-characteristics-and-cauchy-kovalevskaya` | semilinear, quasilinear and fully nonlinear characteristics; Cauchy--Kovalevskaya as a sourced statement |
| PDE-3 | `harmonic-functions-and-mean-values-in-rn` | harmonic functions, spherical and ball means, Weyl's lemma |
| PDE-4 | `maximum-principles-harnack-and-liouville-in-rn` | maximum principles, Hopf, Harnack and Liouville |
| PDE-5 | `fundamental-solutions-newtonian-potentials-and-green-functions` | the Laplace fundamental solution, Newtonian potentials, Green functions |
| PDE-6 | `poisson-problems-and-interior-harmonic-estimates` | Poisson kernels, Dirichlet problems on balls and half-spaces, interior estimates, analyticity |
| PDE-7 | `the-heat-kernel-and-the-cauchy-problem` | heat kernel and whole-space initial-value problem |
| PDE-8 | `heat-equation-maximum-principles-duhamel-and-smoothing` | maximum principles, uniqueness, Duhamel, smoothing and backward instability |
| PDE-9 | `wave-equation-representation-formulas` | d'Alembert, spherical means, Kirchhoff and Poisson formulas |
| PDE-10 | `wave-energy-finite-propagation-and-huygens` | energy, uniqueness, domains of dependence, finite propagation, Huygens |
| PDE-11 | `weak-derivatives-and-sobolev-spaces` | weak derivatives and $W^{k,p}$ |
| PDE-12 | `smooth-approximation-and-sobolev-extension` | Meyers--Serrin approximation, mollification, extension operators |
| PDE-13 | `sobolev-traces-and-zero-boundary-values` | traces, fractional boundary spaces, $W^{1,p}_0$ |
| PDE-14 | `sobolev-poincare-and-morrey-inequalities` | Sobolev, Poincaré, Morrey and critical embeddings |
| PDE-15 | `rellich-kondrachov-and-sobolev-compactness` | translation compactness and Rellich--Kondrachov |
| PDE-16 | `lax-milgram-and-weak-elliptic-solutions` | bounded coercive forms, Lax--Milgram, weak Dirichlet problems |
| PDE-17 | `fredholm-elliptic-problems-and-the-elliptic-spectrum` | Gårding, elliptic Fredholm alternative, compact resolvent, eigenvalues |
| PDE-18 | `interior-and-boundary-sobolev-elliptic-regularity` | difference quotients, interior and boundary $H^2$ and higher regularity |
| PDE-19 | `schauder-and-lp-elliptic-estimates` | Hölder spaces, Schauder theory, Calderón--Zygmund $W^{2,p}$ estimates |
| PDE-20 | `weak-elliptic-maximum-principles-and-holder-regularity` | weak maximum principles, De Giorgi--Nash--Moser and weak Harnack |
| PDE-21 | `the-direct-method-and-euler-lagrange-equations` | weak lower semicontinuity, coercivity, minimisers and Euler--Lagrange equations |
| PDE-22 | `constrained-variational-problems-and-variational-inequalities` | constraints, multipliers, Rayleigh quotients and obstacle problems |
| PDE-23 | `strongly-continuous-semigroups-and-hille-yosida` | $C_0$-semigroups, generators, resolvents, Hille--Yosida, mild solutions |
| PDE-24 | `analytic-semigroups-and-linear-evolution-equations` | sectorial operators, analytic semigroups, parabolic smoothing |
| PDE-25 | `hamilton-jacobi-equations-and-viscosity-solutions` | Hopf--Lax, viscosity solutions, comparison, stability and existence |
| PDE-26 | `scalar-conservation-laws-and-entropy-solutions` | shocks, rarefactions, entropy, vanishing viscosity and $L^1$ contraction |

Every A page is below the 60-item ceiling and has a leaf B companion. No result
is dropped to meet that ceiling: the length of the block comes from splitting
potential theory, evolution equations, Sobolev theory and elliptic theory at
their natural proof boundaries.

**Full texts obtained.** The source audit uses the complete author-hosted text of
Gerald Teschl, *Partial Differential Equations: From Classical to Modern*
(2026 manuscript, Parts I--II), and Victor Ivrii's complete 415-page,
CC BY-SA *Partial Differential Equations*. These are two independent standard
PDE textbooks obtained in full. The audit also uses the complete text of Haim
Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
Equations* (Springer, 2011, Chapters 7--10), and John K. Hunter's complete
242-page *Notes on Partial Differential Equations* (Chapters 1--7), a full
two-quarter graduate course. Lawrence C. Evans, *Partial Differential
Equations*, 2nd ed., is the standard primary cross-check through selected
sections of Chapters 2--8 and 10; the source ledger distinguishes its
publisher-hosted contents from the openly retrievable full texts. Specialist
sources include full notes by Grigoryan (Sobolev/elliptic), Johnson
(semigroups), Bressan (Hamilton--Jacobi and conservation laws), and the
Crandall--Ishii--Lions `User's Guide`.

**Seams consumed.** This block consumes the proposed predecessor machinery of
measure theory MT-8/MT-11/MT-14--MT-17 and functional analysis FA-1/FA-2,
FA-7--FA-10, FA-12--FA-16, FA-21 and FA-23--FA-25. In particular it cites,
rather than remints, Lebesgue integration and all $L^p$ theory; distributions
and their derivatives; the Fourier transform and Plancherel; Hilbert-space
Riesz representation; abstract compact/Fredholm/spectral theory; and
unbounded self-adjoint operators. The finished functional-analysis scaffold
explicitly leaves bounded/coercive forms and Lax--Milgram to this track, so
PDE-16 owns them. The complex-analysis track retains the plane-specific
Poisson-disc, holomorphic/subharmonic, Perron and conformal-invariance theory;
PDE-3--PDE-6 develop the dimension-independent real theory and avoid a second
proof of those plane results.

**Seams owed.** Differential geometry should record that its general Stokes
theorem subsumes PDE-5's deliberately Euclidean divergence theorem and Green
identities; it must not ask PDE to generalise them to manifolds. Functional
analysis should keep its existing PDE amendment: FA-13 is the Riesz input for
Lax--Milgram, FA-15 supplies the abstract Fredholm alternative, and FA-23--25
supply Fourier/distribution machinery. Measure theory should keep its existing
PDE amendment identifying MT-11's polar measure and MT-14--15's $L^p$/mollifier
results as prerequisites. Complex analysis should link its plane harmonic
pages to PDE-3--PDE-6 only by a dictionary remark; neither track changes the
other's theorems.

The differential-geometry scaffold was not yet present on disk when this lane
closed. Its binding dispatch and `research/subjects-01-SEAMS.md` nevertheless
assign general manifold Stokes to that track. The orchestrator must therefore
reconcile the preceding subsumption note when that scaffold arrives; this is
an open documentation seam, not a mathematical dependency or blocker.

**Forward references.** There are no load-bearing forward references. Every
cross-track requirement is a predecessor reservation named above. Orientation
links from the Euclidean divergence theorem to the later manifold Stokes
theorem and from $H^s$ notation to later pseudodifferential analysis, if any,
belong only in `rem-` items and never in `deps`.

**Scope denials.** The block deliberately excludes: plane-only harmonic theory
(owned by `complex-analysis`); general distributions/Fourier analysis and
abstract Fredholm/spectral theory (owned by `functional-analysis`); general
Stokes on manifolds (owned by `differential-geometry`); geometric measure
theory and rough-boundary trace theory; systems of conservation laws;
Navier--Stokes, nonlinear wave and nonlinear Schrödinger equations; microlocal,
pseudodifferential and scattering theory; free-boundary problems; homogenisation;
and numerical PDE. The result-specific reasons and licensing prerequisites are
recorded below. There is no permission or source-access blocker.

---

## 1. Why this track exists

Partial differential equations are where the library's separate strands of
multivariable calculus, measure, topology and functional analysis become one
method. A graduate reader must be able to move without a hidden change of
meaning among a classical derivative, a distributional derivative, an
$L^p$-equivalence class, a Sobolev trace, a variational solution and a
semigroup solution. This track makes those transitions explicit. It begins
with characteristic geometry and the three model linear equations, builds the
weak and compactness machinery they require, then returns to elliptic,
variational and evolution problems at their natural level of generality.

The aim is not an encyclopaedia of named equations. It is a proof-bearing
graduate spine: representation formulae explain the model equations; Sobolev
spaces make boundary data and weak derivatives honest; Lax--Milgram and
compactness give existence; regularity recovers classical information; energy,
semigroup, viscosity and entropy methods show why different equation types
require different solution concepts.

### 1.1 What the published library actually supplies

The following pages were checked in `research/plan-spec.json`; each has a
nonempty `items` array and its page file is `status: published`.

| published page | verified content used here |
|---|---|
| `the-total-derivative` | 17 items: total derivative, Jacobian and gradient, chain rule, $C^1$ criterion, Euclidean mean-value inequality |
| `mixed-partials-taylor-and-extrema` | 21 items: multi-indices, Hessian, higher mixed-partial symmetry, multivariable Taylor formula and elementary constrained extrema |
| `inverse-and-implicit-function-theorems` | 5 items, but mathematically complete: a quantitative Newton contraction, the $C^1$ inverse theorem and the implicit theorem with derivative formula |
| `the-riemann-integral-in-rn-and-jordan-content` | 30 items: multidimensional Riemann integration, null/Jordan content and integration on compact Jordan sets |
| `fubini-and-change-of-variables` | 25 items: Riemann Fubini and $C^1$ change of variables on the stated Jordan/compact-support domains |
| `the-fundamental-theorems-of-calculus` | 10 items: Newton--Leibniz, integration by parts, substitution and differentiation under a compact-parameter integral |
| `line-integrals-and-the-gradient-theorem` | 31 items: line integrals, the gradient theorem, the star-shaped Poincaré lemma and Green's theorem only for supplied finite elementary planar decompositions |

The five-item inverse/implicit page is therefore thin only numerically. Its
published Newton lemma proves uniform local contraction and invertibility; the
inverse theorem proves the derivative formula and $C^1$ regularity of the
inverse; the implicit theorem performs the block-map reduction. No enrichment
amendment is owed.

The vector-calculus warning is real. No published item proves the divergence
theorem in $\mathbb R^n$ or the classical surface Stokes theorem. The published
Green theorem expressly does not cover an arbitrary Jordan domain. PDE-5 thus
builds only the Euclidean $C^1$-domain divergence/Green identities it needs,
from MT-11 integration plus local graph charts and a partition of unity. The
general differential-form theorem remains differential geometry's.

### 1.2 Planned predecessors are reservations, not published facts

The sibling track files are finished prose scaffolds but are not yet live
library pages. This scaffold names their proposed page and item ids so the
orchestrator can preserve the dependency order. Until a future build authors
them, they are predecessor reservations rather than facts on disk.

- Measure theory owns Lebesgue measure/integration, Fubini--Tonelli and polar
  coordinates (MT-8/MT-11), $L^p$ as a quotient and Banach space including
  Hölder/Minkowski (MT-14), convolution and smooth density (MT-15), $L^p$
  duality (MT-16), and Lebesgue differentiation/maximal estimates (MT-17).
- Functional analysis owns Banach and Hilbert spaces, bounded/dual operators,
  weak compactness, Banach-valued integration, Hilbert Riesz representation,
  compact operators and the abstract Fredholm/spectral theorems, unbounded
  self-adjoint operators, Fourier/Plancherel, $\mathcal D'$ and $\mathcal S'$.
  It does not state Lax--Milgram or define Sobolev spaces.

### 1.3 Page-summary contract

Each future A page should open by naming the prerequisite pages it consumes,
then give a short conceptual account of what its items prove. It must not be a
contents list in prose. Each B page should say which hypotheses its examples
stress-test. Claims such as “solutions are smooth” or “the equation is
well-posed” must be qualified by the exact solution class, domain and topology
appearing in the items.

---

## 2. Global conventions and design decisions

### 2.1 Notation and signs

1. $n\ge 2$ on the harmonic pages unless a statement explicitly includes the
   one-dimensional case. A **domain** is a nonempty connected open subset of
   $\mathbb R^n$; arbitrary open sets are called open sets.
2. $\Delta=\sum_{i=1}^n\partial_{ii}$ and the positive fundamental solution
   $\Phi$ satisfies $-\Delta\Phi=\delta_0$:
   $\Phi(x)=((n-2)|S^{n-1}|)^{-1}|x|^{2-n}$ for $n\ge3$ and
   $\Phi(x)=-(2\pi)^{-1}\log|x|$ for $n=2$. This is Hunter/Evans's sign
   convention. Sources using $\Delta\Gamma=\delta_0$ are translated once, in
   the definition, and never silently.
3. Heat is $u_t-\Delta u=f$ and wave is $u_{tt}-c^2\Delta u=f$, with $c>0$.
   The semigroup generator of homogeneous heat flow is therefore the
   nonpositive Dirichlet Laplacian $\Delta_D$.
4. A second-order operator is written in divergence form when weak solutions
   are at issue and in nondivergence form when classical maximum/Schauder
   theory is at issue. Uniform ellipticity constants are always displayed.
5. Real scalars are the default on order, maximum and variational pages.
   Hilbert/form and semigroup results state both real and complex versions when
   conjugate-linearity matters.
6. $W^{k,p}(\Omega)$ consists of $L^p$ equivalence classes whose weak
   derivatives through order $k$ lie in $L^p$. A representative is never
   evaluated at the boundary. Boundary values mean the trace operator.
7. No canonical embedding is written as $\iota(n)$; ordinary numbers remain
   ordinary numbers.

### 2.2 Classification is not oversold

The familiar elliptic/parabolic/hyperbolic trichotomy is exact for a scalar
second-order equation in two variables through the sign of $B^2-AC$, and
ellipticity/hyperbolicity have coordinate-invariant principal-symbol forms in
higher dimension. “Parabolic” in space-time is stated through a distinguished
time direction and a positive spatial symbol, not as a universal third
signature class. PDE-1 explicitly prevents the common but false assertion
that every nonlinear or higher-dimensional second-order PDE globally has one
of three canonical forms.

### 2.3 Classical, weak, mild, viscosity and entropy solutions

These are separate definitions, not levels of vagueness. Every theorem says
which one it concerns and proves every claimed implication between notions.
Classical-to-weak consistency is an item. Weak-to-classical recovery is a
regularity corollary with hypotheses. Mild solutions are defined by the
variation-of-constants formula only after its Bochner integral is shown to
exist. Viscosity and entropy solutions are not distributional solutions with
an adjective; their test/comparison inequalities are defined independently.

### 2.4 Provenance shorthand

Every mathematical-content item below carries a component plan:

- **L/L**: literature-derived statement; literature-derived proof architecture.
- **L/A**: literature-derived statement; proof altered to use this library's
  earlier items or split into local lemmas.
- **L/NA**: literature-derived definition or remark; proof not applicable.
- **L/NS**: literature-derived statement intentionally not proved here.
- **G/G**: directly checkable generated example or corollary; both components
  `ai-generated` and the item is permanently non-load-bearing.

The source locator following each pair identifies the literature treatment.
The rationale for every **L/A** is the same unless a pair says otherwise: the
statement is copied faithfully, while the proof is decomposed to expose
well-definedness or to cite the library's own predecessor machinery. No
AI-generated item may occur in `deps`, `requires`, `justified_by`, or a proof's
facts list. False statements and counterexamples are literature-derived unless
explicitly marked **G/G**.

### 2.5 B-page dependency rule

Each B page is a leaf. Its examples may cite the A page and earlier A pages;
no A-page item may depend on a B-page item. When a counterexample is needed to
qualify an A-page theorem, the theorem states only the positive result and a
non-load-bearing remark links to the B item.

---

## 3. Scope denials

| material not scaffolded | disposition and exact reason | what would license it |
|---|---|---|
| Poisson kernel on the disc, holomorphic proofs of harmonicity, plane subharmonicity, Perron's method on plane domains, conformal invariance | `out-of-scope`: the `complex-analysis` seam owns its planned harmonic pages; PDE gives the $\mathbb R^n$ real-variable results and cites the sharper plane theory | the finished complex-analysis pages, not duplicate PDE items |
| General distributions, tempered distributions, Fourier transform, Plancherel and Fourier multipliers | `out-of-scope`: expressly owned by `functional-analysis`; PDE only applies them | FA-23--FA-25 |
| General Stokes theorem on manifolds and de Rham theory | `out-of-scope`: expressly owned by `differential-geometry`; PDE needs only a Euclidean divergence theorem for bounded $C^1$ domains | the differential-geometry track |
| Perron's method on arbitrary $\mathbb R^n$ domains and Wiener regularity | `deferred`: full boundary regularity of the Dirichlet problem needs barriers, capacity and the Wiener criterion; no theorem in the requested spine depends on it | a potential-theory continuation after capacity |
| Layer potentials on Lipschitz boundaries, harmonic measure and Calderón's boundary singular integrals | `deferred`: needs geometric measure theory and a separate singular-integral boundary theory | GMT plus harmonic analysis |
| Fractional Sobolev/Besov/Triebel--Lizorkin scales beyond the trace space $W^{1-1/p,p}(\partial\Omega)$ | `deferred`: only the Slobodeckij boundary space needed to state the sharp trace theorem is built; the full scales are a subject of their own | a function-spaces/harmonic-analysis track |
| Quasilinear and fully nonlinear second-order elliptic equations, Monge--Ampère and $p$-Laplacian regularity | `deferred`: the present elliptic spine is linear; these require nonlinear comparison, viscosity or monotonicity machinery well beyond a cheap extension | a nonlinear elliptic PDE track |
| Systems of conservation laws | `out-of-scope`: PDE-26 is deliberately scalar; systems require strict hyperbolicity, genuinely nonlinear fields, interaction estimates and front tracking | a hyperbolic-systems track |
| Navier--Stokes, Euler, reaction--diffusion systems, nonlinear wave and nonlinear Schrödinger equations | `out-of-scope`: each is a substantial specialist theory, not a corollary of the general spine | dedicated subject tracks |
| Microlocal analysis, pseudodifferential operators, propagation of singularities and scattering | `out-of-scope`: requires a new symbolic and cotangent-bundle calculus | microlocal/functional-analysis continuation |
| Homogenisation, free boundaries, optimal transport, stochastic PDE and numerical PDE | `out-of-scope`: distinct graduate subjects with prerequisites not built here | dedicated tracks |
| A proof of Cauchy--Kovalevskaya | `deferred` by the dispatch's “as a statement” instruction: the majorant-series argument needs a substantial analytic-power-series construction and nothing later depends on it | a dedicated analytic PDE item; PDE-2 records a precise `proved_here: false` source-cited remark |

---

## 4. Pair map and dependency spine

The spine is intentionally asymmetric:

```text
PDE-1 -> PDE-2
  |        |
  +-> PDE-3 -> PDE-4 -> PDE-5 -> PDE-6
              |        |        |
              +------> PDE-7 -> PDE-8
                       |
                       +------> PDE-9 -> PDE-10

MT/FA predecessors -> PDE-11 -> PDE-12 -> PDE-13 -> PDE-14 -> PDE-15
                                              |          |
                                              +------> PDE-16 -> PDE-17
                                                           |       |
                                                           +-> PDE-18 -> PDE-19 -> PDE-20

FA weak compactness + PDE-14/15 -> PDE-21 -> PDE-22
FA unbounded operators + PDE-16/17 -> PDE-23 -> PDE-24
PDE-2 + comparison ideas -> PDE-25 -> PDE-26
```

The arrows indicate load-bearing mathematical dependence, not merely reading
order. Classical heat and wave formulae occur before Sobolev spaces so they can
be read with calculus and measure alone; later weak evolution results use the
Sobolev/semigroup spine and do not retroactively become prerequisites of the
classical pages.

---

## 5. Source corpus and locator key

The pair sections use the following short keys. A range means the stated range
was read, not merely that the book was found. Section headings are harvested in
§11, where every heading receives a disposition.

**[E] Lawrence C. Evans, *Partial Differential Equations*, 2nd ed., Graduate
Studies in Mathematics 19, AMS, 2010.** Publisher page and contents:
<https://bookstore.ams.org/gsm-19-r>. Read: Chapter 2 §§2.1--2.4; Chapter 3
§§3.1--3.4; Chapter 4 §4.6.1--4.6.3; Chapter 5 §§5.1--5.8; Chapter 6
§§6.1--6.5; Chapter 7 §§7.1--7.4; Chapter 8 §§8.1--8.4; Chapter 10
§§10.1--10.3. This is the standard statement/convention cross-check. The AMS
page is the authoritative bibliographic and contents source; this scaffold
does not represent it as an open-access download.

**[T] Gerald Teschl, *Partial Differential Equations: From Classical to
Modern*, 2026 author manuscript.** Author page, full table of contents and
download record: <https://www.mat.univie.ac.at/~gerald/ftp/book-pde/>; direct
author PDF location: <https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf>.
Read: Part I Chapters 1--7 and Part II Chapters 8--13. The landing page notes
that the download is temporarily withdrawn while the AMS edition is in print;
the complete author manuscript and its contents were retrieved in the source
harvest, so this is recorded as a full text with that availability caveat.

**[B] Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial
Differential Equations*, Universitext, Springer, 2011.** Complete 614-page text:
<https://www.math.toronto.edu/almut/Brezis.pdf>; publisher DOI and chapter
metadata: <https://doi.org/10.1007/978-0-387-70914-7>. Read: Chapter 7
“The Hille--Yosida Theorem,” pp. 181--199; Chapter 8 “Sobolev Spaces and the
Variational Formulation of Boundary Value Problems in One Dimension,”
pp. 201--261; Chapter 9 “Sobolev Spaces and the Variational Formulation of
Elliptic Boundary Value Problems in $N$ Dimensions,” pp. 263--323; Chapter 10
“Evolution Problems: The Heat Equation and the Wave Equation,” pp. 325--347.

**[H] John K. Hunter, *Notes on Partial Differential Equations*, revised 18
June 2014, UC Davis.** Complete 242-page two-quarter notes:
<https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf>. Read: Chapter 1
§§1.1--1.13, pp. 1--18; Chapter 2 §§2.1--2.8, pp. 19--46; Chapter 3
§§3.1--3.11, pp. 47--76; Chapter 4 §§4.1--4.13, pp. 91--118; Chapter 5
§§5.1--5.4, pp. 127--151; Chapter 6 §§6.1--6.5, pp. 177--187; Chapter 7
§§7.1--7.5, pp. 211--222. Chapter 3 §3.3 is read only to verify the seam and
is disposed `already-planned` to FA-24, not repeated here.

**[G] Viktor Grigoryan, *Math 246B: Partial Differential Equations*, UCSB,
2011.** Full 31-page course notes with contents:
<https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf>. Read: Chapter 1
§§1.2--1.7; Chapter 2 §§2.1--2.6; Chapter 3 §§3.1--3.4; Chapter 4
§§4.1--4.3. The notes are a concise independent check, never the sole source
for a pair.

**[S] Armin Schikorra, *Partial Differential Equations*, University of
Pittsburgh, version 4 December 2019.** Full 185-page lecture notes:
<https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf>. Read: Chapter 1
I.1--I.2; Chapter 2 II.1--II.2; Chapter 3 III.1--III.3; Chapter 4; Chapter 5
V.1--V.3; Chapter 6 VI.1--VI.5; Chapter 7 VII.1--VII.2. Used especially to
cross-check maximum principles, fractional trace vocabulary and parabolic
estimates.

**[J] Mathew A. Johnson, *Math 951 Lecture Notes, Chapter 6: Introduction to
Semigroup Methods*, University of Kansas.** Full 37-page chapter:
<https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf>.
Read: §§1.1--1.2, §§2.1--2.3, §§3.1--3.2, and §5 “Appendix: Proof of the
Hille--Yosida Theorem.”

**[MITPDE] Jared Speck, MIT 18.152 *Introduction to Partial Differential
Equations*, Fall 2011.** Complete open-course lecture-note index:
<https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/pages/lecture-notes/>.
Read: Lecture 5, Lectures 10 and 12, and combined Lectures 13--14; their exact
course headings are harvested in §11.13.

**[BHJ] Alberto Bressan, *Viscosity Solutions of Hamilton--Jacobi Equations
and Optimal Control Problems*.** Full author lecture notes; author catalogue:
<https://sites.psu.edu/bressan/3-lecture-notes/> and stable PDF mirror:
<https://www.mathematik.uni-muenchen.de/~sorensen/Lehre/WiSe2014-15/ViscSol/Literatur/hj.pdf>.
Read: §§1--5 (method of characteristics, one-sided differentials, viscosity
solutions, stability, comparison), pp. 2--20. Control §§6--10 are harvested
but out of this track's scope except for the value-function orientation remark.

**[CIL] Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, “User's
guide to viscosity solutions of second order partial differential equations,”
*Bull. AMS* 27 (1992), 1--67.** Full primary article:
<https://arxiv.org/abs/math/9207212>, DOI
<https://doi.org/10.1090/S0273-0979-1992-00266-5>. Read: §§1--4 and §6,
especially the test-function/jet equivalence, the theorem of sums, comparison,
stability and Perron's method. PDE-25 restricts these general tools to
first-order Hamilton--Jacobi equations.

**[BCL] Alberto Bressan, *Hyperbolic Conservation Laws: An Illustrated
Tutorial*, 2009.** Author catalogue:
<https://cim.math.psu.edu/lecture-notes/>; full notes:
<https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf>.
Read: §§1--3 for scalar weak solutions, Rankine--Hugoniot and admissibility;
the portions of §§5--8 concerning $L^1$ stability, entropy uniqueness and
vanishing viscosity. The system-specific characteristic fields, wave
interactions, front tracking and Glimm scheme are harvested and denied below.

**[KTH] John Andersson, *First Order PDE: The Method of Characteristics*, KTH,
29 September 2015.** Full notes:
<https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf>.
Read throughout for the noncharacteristic Cauchy problem and semilinear and
quasilinear characteristic systems. Used with [T] and [E], never alone.

**[I] Victor Ivrii, *Partial Differential Equations*, University of Toronto,
2018.** Complete 415-page CC BY-SA textbook:
<https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf>.
Read: §§1.1--1.4, §§2.1--2.8, §§3.1--3.2 and 3.B, §§4.1--4.4,
§§5.1--5.3, §§6.1--6.6, §§7.1--7.3, §§9.1--9.2, §§10.1--10.4,
§§11.1--11.4, §12.1 and §13.1. This is the second full standard PDE
textbook required by the commission, independent of [T].

**[K] Juha Kinnunen, *Sobolev Spaces*, Aalto University, 2026.** Complete
lecture-note text: <https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf>.
Read: Chapter 1 §§1.1--1.9, Chapter 2 §§2.1--2.6 and Chapter 3 §§3.1--3.6,
including the limiting counterexamples following Theorem 3.44.

**[L] Richard S. Laugesen, *Linear Analysis and Partial Differential
Equations*, University of Illinois, 2020.** Complete graduate notes:
<https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf>.
Read: Chapter 3 “Sobolev spaces,” Chapter 4 “Weak solutions of elliptic PDE”
and Chapter 5 “Regularity of weak solutions,” including the named sections
listed in §11.

**[ACM] Luigi Ambrosio, Alessandro Carlotto and Annalisa Massaccesi,
*Lectures on Elliptic Partial Differential Equations*.** Full open text and
bibliographic record: <https://ricerca.sns.it/handle/11384/81586>. Read:
Chapter 1 §§1.1--1.5 and Chapter 2 §§2.1--2.5.

**[LS] Richard S. Laugesen, *Spectral Theory of Partial Differential
Equations: Lecture Notes*.** Full open monograph:
<https://arxiv.org/abs/1203.2344>. Read: Chapters 4--6 and 9 (discrete
spectral theorem, Dirichlet and Neumann Laplacians, variational eigenvalue
principles and compact resolvents).

**[CV] Riccardo Cristoferi, *Calculus of Variations: Lecture Notes*, Carnegie
Mellon University, 2016.** Complete notes:
<https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf>.
Read: Chapter 4 §§4.1--4.5 and Chapter 7.

**[EN] Klaus-Jochen Engel and Rainer Nagel, *One-Parameter Semigroups for
Linear Evolution Equations*, Graduate Texts in Mathematics 194.** Complete
author-hosted monograph:
<https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf>.
Read: Chapter I §5; Chapter II §§1--4 and §6, including II.4.a on analytic
semigroups.

**[SN] Roland Schnaubelt, *Evolution Equations*, Karlsruhe Institute of
Technology.** Complete lecture notes:
<https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf>.
Read: Chapter 1 §§1.1--1.4 and Chapter 2 §§2.1--2.3.

**[TR] Hung Vinh Tran, *Hamilton--Jacobi Equations: Theory and Applications*,
2020 preliminary version of AMS Graduate Studies in Mathematics 213.** Full
author manuscript: <https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf>;
author's book record: <https://people.math.wisc.edu/~htran24/books.html>.
Read: Chapters 1--2, pp. 9--84. Later chapters were harvested to make the
scope boundary explicit but do not back this track's claims.

**[KR] S. N. Kruzhkov, “First order quasilinear equations in several
independent variables,” *Math. USSR-Sbornik* 10 (1970), 217--243.** Full
English primary article and metadata:
<https://www.mathnet.ru/eng/sm3372>; DOI
<https://doi.org/10.1070/SM1970v010n02ABEH002156>. Read: §§1--5. The paper's
general $x,t,u$-dependent balance law is stronger than the autonomous scalar
conservation law scaffolded in PDE-26; no converse is inferred from that
specialisation.

**Source policy.** Wikipedia and encyclopedia pages were used only to check
spelling and convention conflicts and are not backing for any pair. Where [E]
and [H] write the fundamental solution for $-\Delta$ while another source
writes it for $\Delta$, the adopted sign is stated in §2.1. Where sources call
both $W^{1-1/p,p}$ and its equivalent Besov notation the trace space, this
track adopts the Slobodeckij definition because it can be built directly.

---

# The page pairs

## PDE-1. Partial Differential Equations and Characteristics

**A page:** `partial-differential-equations-and-characteristics`  
**B page:** `partial-differential-equations-and-characteristics-examples`  
**Requires:** `the-total-derivative`, `mixed-partials-taylor-and-extrema`,
`inverse-and-implicit-function-theorems`, the published ODE existence/uniqueness
and smooth-flow items, and finite-dimensional symmetric-matrix spectral theory.

The page first says what kind of object a PDE is and which parts survive a
coordinate change. It then develops linear transport from the chain rule. The
second-order classification is pointwise; local canonical coordinates are
claimed only under the hypotheses actually proved.

### A-page items, in dependency order

1. `def-partial-differential-operator-order-and-solution` (definition; **L/NA**) — Define a scalar differential operator $F(x,(D^\alpha u)_{|\alpha|\le m})$, its order, classical solution and Cauchy/boundary data.
2. `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde` (definition; **L/NA**) — Distinguish linearity in all jets, linearity only in the top-order jet, and genuine nonlinearity in that jet, with no equation classified by typography alone.
3. `def-principal-part-and-principal-symbol-of-a-scalar-pde` (definition; **L/NA**) — For a linear scalar operator define its homogeneous principal part and symbol $p_m(x,\xi)$; for a quasilinear operator freeze the lower jet first.
4. `lem-principal-symbol-under-a-c-one-coordinate-change` (lemma; **L/A**) — Prove that the top-order symbol pulls back covectors and that all derivatives of the coordinate map below order $m$ enter only lower-order terms.
5. `def-characteristic-covector-hypersurface-and-noncharacteristic-data` (definition; **L/NA**) — A nonzero covector is characteristic when the principal symbol vanishes; a $C^1$ level hypersurface is characteristic when its conormal is.
6. `lem-characteristic-hypersurface-is-independent-of-defining-function` (lemma; **L/A**) — If $\psi=h\phi$ with $h\ne0$ on the surface, homogeneity gives $p_m(x,d\psi)=h^mp_m(x,d\phi)$.
7. `def-elliptic-hyperbolic-and-parabolic-principal-symbols` (definition; **L/NA**) — Define ellipticity by definiteness/nonvanishing of the quadratic symbol, strict hyperbolicity relative to a time covector by real distinct roots, and parabolic space-time operators by a positive spatial symbol plus first-order time derivative.
8. `thm-symmetric-principal-part-has-a-signature-normal-form` (theorem; **L/A**) — Apply the real spectral theorem/Sylvester inertia to reduce a frozen symmetric quadratic principal part and show its signature is coordinate invariant.
9. `def-two-variable-second-order-discriminant` (definition; **L/NA**) — For $Au_{xx}+2Bu_{xy}+Cu_{yy}$ define elliptic, parabolic and hyperbolic type by the sign of $B^2-AC$.
10. `thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant` (theorem; **L/A**) — Show the discriminant changes by the square of the Jacobian determinant and identify zero directions with characteristic curves.
11. `thm-two-variable-constant-coefficient-canonical-principal-forms` (theorem; **L/A**) — An invertible real linear change of variables reduces a nondegenerate constant-coefficient principal part to Laplace or wave form and a rank-one principal part to parabolic form, up to a nonzero scalar factor.
12. `rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy` (remark; **L/NA**) — Record that mixed type, systems, higher order and fully nonlinear equations do not admit this global three-name classification without extra structure.
13. `def-linear-transport-equation-and-its-characteristic-flow` (definition; **L/NA**) — Define $a(x,t)\cdot D_xu+u_t+c(x,t)u=f(x,t)$ and the flow $X'=a(X,t)$.
14. `lem-transport-equation-along-a-characteristic` (lemma; **L/A**) — The multivariable chain rule turns the PDE along $X$ into the scalar ODE $(u\circ X)'+c(u\circ X)=f$.
15. `thm-homogeneous-linear-transport-by-the-flow` (theorem; **L/A**) — Where the flow map is a diffeomorphism, $u(x,t)=u_0(X(0;t,x))$ is the unique classical solution of $u_t+a\cdot Du=0$.
16. `thm-inhomogeneous-linear-transport-formula` (theorem; **L/A**) — Solve the characteristic ODE with the integrating factor, including the zeroth-order coefficient and source.
17. `def-noncharacteristic-first-order-cauchy-surface` (definition; **L/NA**) — Define transversality of the transport field to a parametrised initial hypersurface and compatibility of prescribed data.
18. `thm-local-linear-transport-cauchy-problem` (theorem; **L/A**) — The flow-box/implicit-function argument gives a unique local $C^1$ solution from $C^1$ noncharacteristic data.
19. `cor-support-propagates-along-transport-characteristics` (corollary; **L/A**) — For homogeneous transport, support is carried by the flow and cannot appear off characteristics.
20. `rem-characteristics-are-covectors-before-they-are-curves` (remark; **L/NA**) — Reconcile characteristic hypersurfaces of higher-order operators with characteristic curves of a first-order flow.

### B-page companion

1. `ex-constant-velocity-transport` (example; **L/A**) — Compute translation of the initial profile and verify the PDE directly.
2. `ex-transport-with-growth-and-source` (example; **L/A**) — Work the integrating-factor formula with nonzero $c$ and $f$.
3. `ex-radial-transport-flow` (example; **L/A**) — Solve $x\cdot Du=u$ by radial characteristics away from the origin.
4. `cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible` (counterexample; **L/A**) — Give one characteristic curve with constant compatible data and another with incompatible data.
5. `ex-classification-of-laplace-heat-and-wave-equations` (example; **L/A**) — Compute their principal symbols and distinguish elliptic spatial Laplace, parabolic heat and hyperbolic wave structures.
6. `ex-canonical-coordinates-for-a-hyperbolic-equation` (example; **L/A**) — Diagonalise a constant-coefficient two-variable equation by its two characteristic families.
7. `ex-tricomi-equation-changes-type` (example; **L/A**) — $yu_{xx}+u_{yy}=0$ is elliptic for $y>0$, hyperbolic for $y<0$ and degenerate on $y=0$.
8. `cex-threefold-classification-is-not-global` (counterexample; **L/A**) — Use the Tricomi operator and a fourth-order operator to refute the unqualified trichotomy.

### Sources and proof architecture

**Primary backing:** [T], Chapter 1 §§1 “The method of characteristics” and 5
“Classification and canonical forms”; [E], §2.1 “Transport Equation”; [KTH],
the linear and noncharacteristic Cauchy-problem portions. These are three
independent treatments, two with full harvestable contents. The two-variable
canonical-form theorem follows [T] but inserts item 10 so invariance is proved
before terminology. Transport follows [E]'s characteristic formula, with the
published chain and implicit-function theorems replacing recalled calculus.

**Hard proof obligations.** Item 4 expands the coordinate chain rule far enough
to isolate the homogeneous top-order term. Item 11 is deliberately a
constant-coefficient linear-algebra theorem: it does not infer a variable-
coefficient local normal form from pointwise diagonalisation. Item 18 proves
the parameter-to-flow map has invertible derivative exactly when the data
surface is noncharacteristic, then invokes the published inverse theorem.

**Well-definedness.** Items 4 and 6 make the principal symbol and characteristic
hypersurface independent of coordinates and defining function. The inverse
flow in items 15--18 is used only on an open set where it has been proved to be
a single-valued $C^1$ map. No B-page example is a dependency target.

---

## PDE-2. Quasilinear Characteristics and Cauchy--Kovalevskaya

**A page:** `quasilinear-characteristics-and-cauchy-kovalevskaya`  
**B page:** `quasilinear-characteristics-and-cauchy-kovalevskaya-examples`  
**Requires:** PDE-1; the published local existence, uniqueness and smooth
dependence theorem for ODEs; `inverse-and-implicit-function-theorems`.

This page follows first-order solutions until their characteristic projection
ceases to be invertible. It treats semilinear and quasilinear equations first,
then the Lagrange--Charpit system for $F(x,u,Du)=0$. The analytic existence
theorem is stated exactly and is not used later.

### A-page items, in dependency order

1. `def-semilinear-and-quasilinear-first-order-cauchy-problems` (definition; **L/NA**) — Define $a(x)\cdot Du=b(x,u)$ and $a(x,u)\cdot Du=b(x,u)$ with data on a parametrised hypersurface.
2. `def-augmented-characteristic-system-for-a-quasilinear-pde` (definition; **L/NA**) — Define $X'=a(X,Z)$ and $Z'=b(X,Z)$ with lifted initial data.
3. `lem-quasilinear-solution-lifts-to-characteristics` (lemma; **L/A**) — A $C^1$ solution restricted to a characteristic satisfies the augmented ODE.
4. `lem-characteristic-strip-compatibility` (lemma; **L/A**) — Derive the tangential compatibility and noncharacteristic determinant conditions on the initial strip.
5. `thm-local-quasilinear-cauchy-problem-by-characteristics` (theorem; **L/A**) — Smooth ODE dependence plus the inverse theorem gives a local $C^1$ solution and uniqueness while the characteristic projection is invertible.
6. `lem-characteristic-solution-satisfies-the-quasilinear-pde` (lemma; **L/A**) — Differentiate the inverse parametrisation and use the strip identities to recover the PDE, closing the converse direction of item 5.
7. `def-characteristic-crossing-and-caustic-for-first-order-pde` (definition; **L/NA**) — Define loss of rank of the characteristic projection and distinguish it from blow-up of the lifted ODE.
8. `thm-inviscid-burgers-characteristic-formula-and-first-crossing-time` (theorem; **L/A**) — For $u_t+uu_x=0$, obtain $x=\xi+t u_0(\xi)$ and the first classical breakdown time from $1+t u_0'(\xi)=0$.
9. `cor-burgers-classical-solution-persists-for-monotone-data` (corollary; **L/A**) — If $u_0'\ge0$, the characteristic projection remains increasing for $t\ge0$.
10. `def-fully-nonlinear-first-order-pde-and-complete-integral` (definition; **L/NA**) — Define $F(x,u,p)=0$, a complete integral and an envelope without assuming every solution has that form.
11. `def-lagrange-charpit-characteristic-system` (definition; **L/NA**) — Define $\dot x=F_p$, $\dot z=p\cdot F_p$, $\dot p=-F_x-pF_z$.
12. `lem-charpit-flow-preserves-the-pde-constraint` (lemma; **L/A**) — Along the system in item 11, the chain rule gives $dF/ds=0$, so initial data in $F=0$ remain there; record separately the equivalent contact normalization whose $dot z$ contains $-F$.
13. `lem-charpit-contact-compatibility-is-preserved` (lemma; **L/A**) — Prove $dz-p\cdot dx=0$ remains valid along a compatible characteristic strip.
14. `thm-local-fully-nonlinear-cauchy-problem-by-charpit` (theorem; **L/A**) — Under $C^2$ regularity and the noncharacteristic rank condition, invert the projected strip and obtain a local classical solution.
15. `rem-characteristics-do-not-select-a-post-crossing-weak-solution` (remark; **L/NA**) — Explain that characteristic crossing creates the selection problem later resolved by viscosity or entropy inequalities.
16. `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` (remark; **L/NS**, `proved_here: false`) — Faithfully state local existence and uniqueness of an analytic solution for an analytic $m$th-order PDE solved for the noncharacteristic normal derivative, with analytic normal-jet data through order $m-1$.
17. `rem-cauchy-kovalevskaya-proof-boundary` (remark; **L/NA**) — Cite [T] Chapter 2 §§1--2 and [E] §4.6, record that the majorant-series proof is absent, and forbid item 16 as a dependency target.

### B-page companion

1. `ex-semilinear-characteristics-with-logistic-growth` (example; **L/A**) — Solve a transport-reaction equation whose projected characteristics do not cross.
2. `ex-inviscid-burgers-rarefying-data` (example; **L/A**) — Increasing data give an expanding characteristic fan while the classical formula remains single-valued.
3. `ex-inviscid-burgers-gradient-catastrophe` (example; **L/A**) — Decreasing smooth data produce finite-time blow-up of $u_x$ while $u$ stays bounded.
4. `cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up` (counterexample; **L/A**) — Burgers data separate loss of projection rank from ODE existence.
5. `ex-clairaut-complete-integral-and-envelope` (example; **L/A**) — Compute a complete integral and its singular envelope for a standard fully nonlinear equation.
6. `ex-eikonal-cones-are-not-classical-at-the-vertex` (example; **L/A**) — $u(x)=|x|$ solves $|Du|=1$ away from $0$ and motivates the viscosity notion.
7. `cex-characteristic-initial-data-for-a-fully-nonlinear-equation` (counterexample; **L/A**) — Exhibit loss of local uniqueness when the Charpit transversality determinant vanishes.
8. `ex-cauchy-kovalevskaya-normal-form` (example; **L/A**) — Put a simple analytic PDE with analytic data into the theorem's solved normal form without using the unproved theorem later.

### Sources and proof architecture

**Primary backing:** [T], Chapter 1 §§2--4 and Chapter 2 §§1--2; [E], Chapter 3
§§3.1--3.2; [KTH], semilinear/quasilinear sections. Burgers breakdown is also
checked against [E] §3.4 “Introduction to Conservation Laws.” The exact
Cauchy--Kovalevskaya wording follows [T] Chapter 2; [E]'s analytic theorem is
the independent check.

**Hard proof obligations.** Items 5--6 are separate because solving the ODEs is
not yet proof that the projected graph satisfies the PDE. Items 12--13 compute
both invariants of the Charpit system. Item 14 repeats the rank check rather
than saying “invert characteristics.” Item 16 is the track's one authorised
source-cited theorem statement without proof; its analytic class, normal form,
data order and local uniqueness class must not be shortened.

**Well-definedness.** The solution in items 5 and 14 is defined only after the
projection is locally inverted and independence from characteristic parameters
is proved. The “first crossing time” is an infimum in $[0,\infty]$; the theorem
states the convention when $u_0'\ge0$. A complete integral is a definition, not
an assertion that a chosen envelope is differentiable.

---

## PDE-3. Harmonic Functions and Mean Values in $\mathbb R^n$

**A page:** `harmonic-functions-and-mean-values-in-rn`  
**B page:** `harmonic-functions-and-mean-values-in-rn-examples`  
**Requires:** `mixed-partials-taylor-and-extrema`; MT-8, MT-11 and MT-15;
FA-24 for distributions; the published Euclidean topology and compactness
pages. The plane-specific complex-analysis harmonic pages are not prerequisites
for the real-variable proofs.

### A-page items, in dependency order

1. `def-laplacian-poisson-equation-and-harmonic-function-in-rn` (definition; **L/NA**) — Define $\Delta$, classical harmonicity and $-\Delta u=f$ on an open subset of $\mathbb R^n$, separating $C^2$ from distributional solutions.
2. `def-spherical-and-ball-averages` (definition; **L/NA**) — Define averages using MT-11's polar surface measure and Lebesgue volume, with translated/dilated spheres and balls.
3. `lem-sphere-and-ball-measures-scale` (lemma; **L/A**) — Derive $|\partial B_r|=|S^{n-1}|r^{n-1}$ and $|B_r|=|S^{n-1}|r^n/n$ from polar coordinates.
4. `lem-radial-derivative-of-a-spherical-average` (lemma; **L/A**) — For $u\in C^2$, prove $M_u'(r)=r\fint_{B_r}\Delta u/n$ by differentiation under the integral and polar-coordinate integration by parts.
5. `thm-spherical-mean-value-property-for-harmonic-functions` (theorem; **L/A**) — A harmonic function equals its spherical average on every compactly contained ball.
6. `cor-ball-mean-value-property-for-harmonic-functions` (corollary; **L/A**) — Integrate the spherical identity to obtain the ball identity.
7. `thm-continuous-mean-value-functions-are-harmonic` (theorem; **L/A**) — If a continuous function has the ball mean property on every compactly contained ball, mollification makes it smooth and the small-ball expansion forces $\Delta u=0$.
8. `cor-local-mean-value-property-is-enough` (corollary; **L/A**) — It suffices that each point have a radius below which all centred ball means agree.
9. `lem-distributional-laplacian-commutes-with-mollification` (lemma; **L/A**) — On shrunken domains, $\Delta(T*\rho_\varepsilon)=(\Delta T)*\rho_\varepsilon$.
10. `thm-weyl-lemma-for-the-laplacian` (theorem; **L/A**) — Every distribution $T$ with $\Delta T=0$ is induced by a unique smooth harmonic function.
11. `cor-locally-integrable-weakly-harmonic-functions-are-smooth` (corollary; **L/A**) — An $L^1_{\rm loc}$ distributional solution has an a.e.-equal smooth harmonic representative.
12. `lem-derivatives-of-harmonic-functions-are-harmonic` (lemma; **L/A**) — Classical derivatives commute with $\Delta$; after Weyl, all distributional derivatives are represented smoothly.
13. `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` (theorem; **L/A**) — Pass the mean identity to the locally uniform limit, then use the converse theorem.
14. `rem-plane-harmonic-theory-is-owned-by-complex-analysis` (remark; **L/NA**) — Point to the planned disc Poisson kernel, subharmonic, Perron and conformal-invariance pages without restating them.

### B-page companion

1. `ex-affine-and-harmonic-polynomial-functions` (example; **L/A**) — Verify affine functions and $x_ix_j$ for $i\ne j$ are harmonic.
2. `ex-real-and-imaginary-parts-of-holomorphic-monomials` (example; **L/A**) — Link, without re-proving plane theory, to complex analysis's harmonic examples.
3. `ex-radial-harmonic-functions-away-from-the-origin` (example; **L/A**) — Solve $U''+(n-1)U'/r=0$ and exhibit the logarithmic and power families.
4. `cex-harmonic-on-a-punctured-domain-need-not-extend` (counterexample; **L/A**) — The radial singular functions show that a missing point is not removable without boundedness/integrability hypotheses.
5. `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` (counterexample; **G/G**) — For a prescribed ball $B_R(0)$, $u(x)=|x|^2(|x|^2-\frac{n+2}{n+4}R^2)$ has $u(0)=\fint_{B_R}u$ but is not harmonic; this directly checked item is non-load-bearing.
6. `ex-distributional-harmonicity-removes-an-apparent-corner` (example; **L/A**) — Use Weyl's lemma to show why a truly distributionally harmonic locally integrable function cannot retain a nonsmooth interior corner.

### Sources and proof architecture

**Primary backing:** [H] §§2.1--2.2 and 3.3--3.4; [E] §2.2.2 “Mean-value
formulas” and §2.2.3 “Properties of harmonic functions”; [T] Chapter 5 §1.
Weyl's lemma is cross-checked in [H] §3.3 and FA-24's distribution treatment.

**Hard proof obligations.** Item 4 is the only flux identity needed here and is
proved directly from the polar formula; it does not presuppose PDE-5's general
divergence theorem. Item 7 proves the $r^2\Delta u/(2(n+2))$ small-ball term,
rather than asserting the converse by “Taylor.” In item 10 a radial mollifier
has constant spherical averages; the mean property makes the regularisations
agree on nested interior sets, producing one smooth representative rather than
only a family depending on $\varepsilon$.

**Well-definedness.** MT-11 defines the spherical measure used in item 2. Every
average divides by a finite positive measure (item 3). The representative in
Weyl's lemma is unique because two locally integrable functions induce the same
distribution exactly when they agree a.e., and continuous a.e.-equal functions
agree everywhere.

---

## PDE-4. Maximum Principles, Harnack and Liouville in $\mathbb R^n$

**A page:** `maximum-principles-harnack-and-liouville-in-rn`  
**B page:** `maximum-principles-harnack-and-liouville-in-rn-examples`  
**Requires:** PDE-3; the published compactness, connectedness and Euclidean
geometry items.

### A-page items, in dependency order

1. `def-subharmonic-and-superharmonic-functions-in-rn` (definition; **L/NA**) — In the classical real-variable sense define $\Delta u\ge0$ and $\Delta u\le0$, without importing the plane holomorphic theory.
2. `lem-strict-subharmonic-perturbation` (lemma; **L/A**) — $u_\varepsilon=u+\varepsilon|x|^2$ converts $\Delta u\ge0$ to a strict inequality on bounded sets.
3. `thm-weak-maximum-principle-for-the-laplacian` (theorem; **L/A**) — A subharmonic $C^2(\Omega)\cap C(\overline\Omega)$ function on a bounded domain attains its maximum on the boundary.
4. `cor-weak-minimum-principle-for-the-laplacian` (corollary; **L/A**) — Apply item 3 to $-u$.
5. `thm-strong-maximum-principle-for-harmonic-functions` (theorem; **L/A**) — A harmonic function on a domain that attains an interior maximum or minimum is constant.
6. `cor-uniqueness-for-the-classical-dirichlet-problem` (corollary; **L/A**) — Two continuous-up-to-boundary harmonic functions with equal boundary data agree.
7. `lem-interior-sphere-barrier-for-the-laplacian` (lemma; **L/A**) — Construct the exponential/radial barrier on an annulus tangent to a boundary point.
8. `thm-hopf-boundary-point-lemma-for-the-laplacian` (theorem; **L/A**) — Under an interior sphere condition and a strict nonconstant boundary maximum, the outward normal derivative is positive, with sign conventions explicit.
9. `thm-harnack-inequality-on-a-ball` (theorem; **L/A**) — For nonnegative harmonic $u$ on $B_R$, compare $u(x)$ and $u(0)$ on $B_r$ with an explicit dimension/radius constant.
10. `cor-harnack-inequality-on-compact-subsets` (corollary; **L/A**) — A finite chain of overlapping balls gives $\sup_Ku\le C(K,\Omega)\inf_Ku$ on compact connected subsets.
11. `thm-harnack-convergence-principle` (theorem; **L/A**) — An increasing sequence of harmonic functions on a domain either diverges to $+\infty$ everywhere or converges locally uniformly to a harmonic function.
12. `thm-liouville-theorem-for-bounded-harmonic-functions` (theorem; **L/A**) — A harmonic function on all of $\mathbb R^n$ bounded above or below is constant.
13. `cor-positive-entire-harmonic-functions-are-constant` (corollary; **L/A**) — Shift/nonnegativity and Harnack give the one-sided Liouville form.
14. `cor-removable-singularity-for-bounded-harmonic-functions` (corollary; **L/A**) — A harmonic function bounded near an isolated point extends harmonically across it for $n\ge2$.
15. `rem-maximum-principles-need-domain-and-boundary-hypotheses` (remark; **L/NA**) — Separate bounded-domain weak maximum, connected-domain strong maximum and Hopf's geometric hypotheses.

### B-page companion

1. `ex-harmonic-function-attaining-only-boundary-extrema` (example; **L/A**) — An affine function on a ball illustrates the weak principle and Hopf sign.
2. `ex-harnack-constant-from-the-poisson-kernel-ratio` (example; **L/A**) — Compute the ball comparison constant using only the mean representation available on PDE-3.
3. `cex-maximum-principle-fails-for-superharmonic-maxima` (counterexample; **L/A**) — $-|x|^2$ distinguishes the sign direction.
4. `cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity` (counterexample; **L/A**) — A nonconstant entire harmonic affine function has no boundary on which to attain its supremum.
5. `cex-hopf-lemma-needs-a-boundary-geometry-hypothesis` (counterexample; **L/A**) — A cusp-domain example has a boundary extremum with vanishing accessible normal derivative.
6. `cex-liouville-needs-one-sided-boundedness` (counterexample; **L/A**) — Coordinate functions are nonconstant entire harmonic functions.
7. `cex-unbounded-punctured-harmonic-singularity-is-not-removable` (counterexample; **L/A**) — The logarithmic/Newtonian radial solution supplies the sharp obstruction.

### Sources and proof architecture

**Primary backing:** [H] §§2.3--2.4; [E] §2.2.3; [T] Chapter 5 §§1--2.
Harnack convergence and removable singularities are checked against [H]'s
named results following §2.4 and [T]'s harmonic section.

**Hard proof obligations.** The strong principle uses the set on which the
maximum is attained plus the mean property, proving it is both open and closed.
The compact-set Harnack constant comes from a finite subcover/chain selected
from fixed balls, not an unrecorded infinite choice. The removable-singularity
proof uses harmonic replacement on a ball and the maximum principle on a
punctured annulus, with the fundamental radial barrier written inline rather
than citing the later fundamental-solution page.

**Well-definedness.** “Normal derivative” in Hopf is the directional derivative
along the explicitly supplied interior-sphere normal; no general boundary
normal has yet been defined. Harnack's ratio is used only when the nonnegative
harmonic function is not identically zero; the strong principle proves strict
positivity first.

---

## PDE-5. Fundamental Solutions, Newtonian Potentials and Green Functions

**A page:** `fundamental-solutions-newtonian-potentials-and-green-functions`  
**B page:** `fundamental-solutions-newtonian-potentials-and-green-functions-examples`  
**Requires:** PDE-3--PDE-4; MT-8, MT-11 and MT-15; FA-24; the published
change-of-variables and partition-of-unity machinery.

### A-page items, in dependency order

1. `def-c-one-boundary-domain-outward-normal-and-surface-integral` (definition; **L/NA**) — Define a bounded $C^1$ domain by local graph charts, its continuous outward unit normal, chart surface density and boundary integral.
2. `lem-surface-integral-is-independent-of-boundary-charts` (lemma; **L/A**) — Use tangential change of variables and a partition of unity to prove chart independence and additivity.
3. `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` (theorem; **L/A**) — For $F\in C^1(\overline\Omega;\mathbb R^n)$ prove $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot\nu$ by reducing graph patches to Fubini and the one-dimensional FTC.
4. `cor-first-green-identity` (corollary; **L/A**) — $\int_\Omega(v\Delta u+Du\cdot Dv)=\int_{\partial\Omega}v\partial_\nu u$ for $C^2/C^1$ data.
5. `cor-second-green-identity` (corollary; **L/A**) — Subtract the two first identities and state the required regularity.
6. `def-fundamental-solution-of-a-constant-coefficient-operator` (definition; **L/NA**) — A distribution $E$ is fundamental for $L$ when $LE=\delta_0$; translation gives a pole at $y$.
7. `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign` (definition; **L/NA**) — Define $\Phi$ by the formula in §2.1, including $n=2$ and the harmless one-dimensional analogue in a remark.
8. `lem-laplace-fundamental-solution-is-harmonic-off-its-pole` (lemma; **L/A**) — Direct radial differentiation proves $\Delta\Phi=0$ on $\mathbb R^n\setminus\{0\}$.
9. `thm-minus-laplacian-of-the-fundamental-solution-is-dirac` (theorem; **L/A**) — Excise a small ball, apply item 3 and pass to the limit to prove $-\Delta\Phi=\delta_0$ distributionally.
10. `def-newtonian-potential` (definition; **L/NA**) — For admissible $f$, define $Nf=\Phi*f$ only after absolute/local integrability of the singular kernel is established.
11. `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` (lemma; **L/A**) — Split near/far integrals and use polar coordinates.
12. `thm-newtonian-potential-solves-poisson-distributionally` (theorem; **L/A**) — For $f\in C_c$ (and then $L^p$ in the stated range), $-\Delta(Nf)=f$ in $\mathcal D'$.
13. `thm-newtonian-potential-for-holder-data-is-classical` (theorem; **L/A**) — If $f\in C_c^{0,\alpha}$, cancellation of $f(y)-f(x)$ yields $Nf\in C^2$ and the pointwise Poisson equation.
14. `def-dirichlet-green-function-for-minus-laplacian` (definition; **L/NA**) — For each pole $y$, require $G_\Omega(\cdot,y)-\Phi(\cdot-y)$ harmonic, zero boundary values and the adopted sign.
15. `lem-dirichlet-green-function-is-unique-and-positive` (lemma; **L/A**) — The maximum principle proves uniqueness and $G_\Omega>0$ off the pole when a Green function exists.
16. `thm-green-function-symmetry` (theorem; **L/A**) — Apply the second Green identity on a twice-punctured domain and control both small-sphere limits to show $G(x,y)=G(y,x)$.
17. `def-poisson-kernel-from-a-green-function` (definition; **L/NA**) — Define $P_\Omega(x,y)=-\partial_{\nu_y}G_\Omega(x,y)$ when the boundary regularity makes the derivative meaningful.
18. `thm-green-representation-formula` (theorem; **L/A**) — For $u\in C^2(\Omega)\cap C^1(\overline\Omega)$, represent $u(x)$ by $G_\Omega(-\Delta u)$ and $P_\Omega u|_{\partial\Omega}$, with every sign checked.
19. `cor-classical-dirichlet-and-poisson-problems-are-unique` (corollary; **L/A**) — Maximum/Green identities give uniqueness for Dirichlet data and uniqueness up to constants for compatible Neumann data.
20. `rem-euclidean-divergence-versus-general-stokes` (remark; **L/NA**) — State that item 3 is the $n$-form Euclidean special case and record the later differential-geometry ownership.

### B-page companion

1. `ex-flux-of-the-laplace-fundamental-solution` (example; **L/A**) — Compute the unit outward flux across every centred sphere.
2. `ex-newtonian-potential-of-a-radial-density` (example; **L/A**) — Reduce the potential of a radial compactly supported source to one-dimensional integrals.
3. `ex-newtons-shell-theorem-from-the-mean-property` (example; **L/A**) — Derive the outside-point potential of a uniform spherical shell for $n\ge3$.
4. `cex-second-derivatives-of-the-fundamental-solution-are-not-locally-integrable-absolutely` (counterexample; **L/A**) — The $|x|^{-n}$ singularity explains the cancellation in item 13.
5. `cex-green-functions-need-not-exist-with-the-naive-boundary-regularity` (counterexample; **L/A**) — Record a boundary-irregular domain as a warning, without using it on the spine.
6. `cex-neumann-poisson-problem-needs-the-compatibility-condition` (counterexample; **L/A**) — Integrating $-\Delta u=f$ shows $\int_\Omega f=-\int_{\partial\Omega}g$ in the adopted normal convention.
7. `ex-one-dimensional-green-function-on-an-interval` (example; **L/A**) — Compute the piecewise-affine kernel and verify symmetry and the derivative jump.

### Sources and proof architecture

**Primary backing:** [H] §§1.10--1.12 and §§2.5--2.7; [E] §§2.2.1 and
2.2.4; [T] Chapter 5 §§3--4. Surface integration and divergence are also
checked against [H] §1.12, whose stated hypothesis is a bounded $C^1$ domain.

**Hard proof obligations.** Items 1--3 are a local Euclidean construction, not
a citation to the nonexistent published divergence theorem. Item 9 keeps the
inner-boundary normal sign and the $n=2$ logarithmic limit separate. Item 13
does not differentiate $\Phi$ twice under an absolutely convergent integral;
it subtracts $f(x)$ and accounts for the small-sphere term. Item 16 excises
both poles, a detail necessary for a valid Green-identity proof.

**Well-definedness.** Item 2 makes the surface integral chart-independent;
the orientation is fixed by the outward normal. Items 10--11 establish that
the convolution is independent of $L^p$ representatives. A Green function is
defined only on domains for which the stated object exists; no global existence
is hidden in the definition. Item 17 is used only when its normal derivative
exists continuously or in an explicitly stated trace sense.

---

## PDE-6. Poisson Problems and Interior Harmonic Estimates

**A page:** `poisson-problems-and-interior-harmonic-estimates`  
**B page:** `poisson-problems-and-interior-harmonic-estimates-examples`  
**Requires:** PDE-3--PDE-5; MT-11; the published multi-index/Taylor pages.

### A-page items, in dependency order

1. `lem-kelvin-inversion-and-the-laplace-operator` (lemma; **L/A**) — Compute how inversion in a sphere transforms $\Delta$ and harmonic functions for $n\ge3$.
2. `thm-green-function-for-a-ball-in-rn` (theorem; **L/A**) — Construct the ball Green function by an image pole/Kelvin transform and verify singularity, boundary value and positivity.
3. `thm-poisson-kernel-for-a-ball-in-rn` (theorem; **L/A**) — Differentiate the Green function to obtain $P_R(x,y)=(R^2-|x|^2)/(R|S^{n-1}||x-y|^n)$ and prove it integrates to one.
4. `thm-dirichlet-problem-on-a-ball-by-the-poisson-integral` (theorem; **L/A**) — For continuous boundary data, the Poisson integral is harmonic inside and converges to the data at every boundary point.
5. `lem-reflection-green-function-for-the-half-space` (lemma; **L/A**) — An opposite image pole produces the Dirichlet Green function for $\mathbb R^n_+$.
6. `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` (theorem; **L/A**) — Give the half-space kernel and solve for bounded continuous data with a stated behaviour at infinity ensuring uniqueness.
7. `thm-interior-derivative-estimates-for-harmonic-functions` (theorem; **L/A**) — For every multi-index $\alpha$, bound $|D^\alpha u(x)|$ by $C_{n,\alpha}r^{-n-|\alpha|}\|u\|_{L^1(B_r(x))}$.
8. `cor-harmonic-cauchy-estimates-in-supremum-norm` (corollary; **L/A**) — Replace the $L^1$ norm by $|B_r|\sup|u|$ and state scale-invariant constants.
9. `thm-harmonic-functions-are-real-analytic` (theorem; **L/A**) — Factorial derivative estimates make the Taylor series converge to $u$ on a smaller ball.
10. `cor-unique-continuation-for-harmonic-functions` (corollary; **L/A**) — A harmonic function vanishing on a nonempty open subset of a domain vanishes everywhere.
11. `thm-interior-estimate-for-poisson-equation-with-holder-data` (theorem; **L/A**) — Localise $u$ as Newtonian potential plus a harmonic remainder and bound the $C^{2,\alpha}$ norm on a smaller ball.
12. `cor-interior-laplacian-gradient-estimate` (corollary; **L/A**) — Record the frequently used $\|Du\|_{L^\infty(B_{r/2})}\le C(r^{-1}\|u\|_\infty+r\|f\|_\infty)$ in the regularity class proved.
13. `rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated` (remark; **L/NA**) — Restrict items 1--6 to $n\ge3$ and point to complex analysis for the disc; items 7--12 remain valid for $n\ge2$ by the mean-value proof.

### B-page companion

1. `ex-poisson-extension-of-a-coordinate-function-on-a-ball` (example; **L/A**) — Symmetry recovers the affine harmonic function.
2. `ex-poisson-kernel-concentrates-at-a-boundary-point` (example; **L/A**) — Quantify the approximate-identity behaviour used in item 4.
3. `ex-half-space-poisson-extension-of-a-plane-wave` (example; **L/A**) — For smooth periodic boundary data, compute exponential decay in the normal direction using FA's Fourier result.
4. `cex-poisson-integral-on-the-half-space-is-not-unique-without-growth-control` (counterexample; **L/A**) — The normal coordinate is harmonic, vanishes on the boundary and grows at infinity.
5. `cex-interior-estimates-cannot-use-distance-zero-to-the-boundary` (counterexample; **L/A**) — A Poisson kernel sequence blows up in derivatives near the boundary while boundary data stay controlled.
6. `ex-harmonic-taylor-series-on-a-ball` (example; **L/A**) — Expand a simple harmonic polynomial and verify the factorial estimate.
7. `cex-smooth-does-not-imply-real-analytic-for-general-pde` (counterexample; **L/A**) — A smooth nonanalytic one-variable function solves a tailored first-order equation; the harmonic conclusion is special and no generated claim is load-bearing.

### Sources and proof architecture

**Primary backing:** [T] Chapter 5 §§3--6; [E] §2.2.4 and the interior estimates
in §2.2.3; [H] §§2.1--2.2 and §§2.6--2.7. The $C^{2,\alpha}$ localisation is
independently checked against [S] Chapter 1 I.2 and [E] §6.3.2, but this page
states only the Laplacian case.

**Hard proof obligations.** Boundary convergence in item 4 splits the integral
into a small boundary cap and its complement and uses normalization; “the
kernel tends to a delta” is not a proof. Item 7 differentiates a Poisson
formula on an interior ball and tracks powers of $r$. Item 9 proves factorial,
not merely exponential, derivative bounds. Item 11 explicitly subtracts the
first-order Taylor polynomial of the Hölder source in the singular integral.

**Well-definedness.** Kelvin inversion never evaluates at its centre. Poisson
integrals are shown absolutely convergent and independent of boundary-data
representatives in the measure-theoretic variants. The half-space uniqueness
class is part of item 6, not a remark added after an overbroad theorem.

---

## PDE-7. The Heat Kernel and the Cauchy Problem

**A page:** `the-heat-kernel-and-the-cauchy-problem`  
**B page:** `the-heat-kernel-and-the-cauchy-problem-examples`  
**Requires:** MT-8, MT-11 and MT-14--MT-15; FA-23 for Plancherel/Fourier
identities and FA-24 for the causal distribution; the published
differentiation-under-the-integral theorem.

### A-page items, in dependency order

1. `def-heat-equation-heat-operator-and-cauchy-problem` (definition; **L/NA**) — Define $u_t-\Delta u=f$ on space-time domains and distinguish initial from spatial boundary data.
2. `def-heat-kernel` (definition; **L/NA**) — For $t>0$, set $\Gamma(x,t)=(4\pi t)^{-n/2}e^{-|x|^2/(4t)}$ and set it to zero for $t\le0$ when a causal distribution is needed.
3. `lem-heat-kernel-normalisation-scaling-and-derivatives` (lemma; **L/A**) — Prove positivity, unit mass, parabolic scaling, $\Gamma_t=\Delta\Gamma$ and explicit derivative bounds.
4. `lem-heat-kernel-semigroup-identity` (lemma; **L/A**) — Gaussian completion of the square gives $\Gamma_t*\Gamma_s=\Gamma_{t+s}$.
5. `thm-heat-kernel-is-the-causal-fundamental-solution` (theorem; **L/A**) — In space-time distributions, $(\partial_t-\Delta)\Gamma=\delta_{(0,0)}$.
6. `def-heat-evolution-of-initial-data` (definition; **L/NA**) — Define $H_tu_0=\Gamma_t*u_0$ in each data class only after the convolution hypotheses are stated.
7. `thm-heat-cauchy-solution-for-bounded-continuous-data` (theorem; **L/A**) — $H_tu_0$ is smooth for $t>0$, solves heat, and tends locally uniformly to $u_0$ as $t\downarrow0$ when $u_0$ is bounded and uniformly continuous.
8. `thm-heat-cauchy-solution-for-lp-data` (theorem; **L/A**) — For $1\le p<\infty$, $H_tu_0\to u_0$ in $L^p$, $\|H_tu_0\|_p\le\|u_0\|_p$, and the semigroup law holds.
9. `cor-heat-flow-preserves-mass-and-positivity` (corollary; **L/A**) — For $L^1$ data, preserve the integral; for nonnegative data, preserve nonnegativity.
10. `cor-heat-flow-is-order-preserving-and-lp-contractive` (corollary; **L/A**) — Positivity and convolution imply comparison and $L^p$ contraction.
11. `thm-lp-to-lq-heat-kernel-estimate` (theorem; **L/A**) — Young's inequality and scaling give $\|H_t f\|_q\le C t^{-n(1/p-1/q)/2}\|f\|_p$ in the stated Young range.
12. `thm-spatial-derivative-estimates-for-heat-flow` (theorem; **L/A**) — $\|D^\alpha H_tf\|_q\le C t^{-|\alpha|/2-n(1/p-1/q)/2}\|f\|_p$.
13. `cor-heat-equation-has-infinite-propagation-in-the-positive-kernel-class` (corollary; **L/A**) — Nonzero nonnegative compactly supported data give a strictly positive solution at every spatial point for all $t>0$.
14. `rem-heat-kernel-conventions-and-diffusivity` (remark; **L/NA**) — Record the $\kappa$-diffusivity rescaling and distinguish the heat kernel from the harmonic and wave Poisson kernels.

### B-page companion

1. `ex-gaussian-data-remain-gaussian-under-heat-flow` (example; **L/A**) — Convolve two Gaussians and add their variances.
2. `ex-heat-flow-of-an-indicator-function` (example; **L/A**) — Express the one-dimensional solution by Gaussian tails and see instantaneous smoothing.
3. `ex-self-similar-heat-kernel-solution` (example; **L/A**) — Verify parabolic self-similarity and conserved mass.
4. `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm` (counterexample; **L/A**) — A jump function shows why item 7 assumes uniform continuity and item 8 excludes $p=\infty$ from strong continuity.
5. `cex-heat-equation-does-not-have-finite-propagation` (counterexample; **L/A**) — Compactly supported nonnegative data immediately become positive everywhere.
6. `ex-fourier-transform-of-the-heat-kernel` (example; **L/A**) — With FA-23's normalization compute $\widehat\Gamma_t(\xi)=e^{-t|\xi|^2}$.

### Sources and proof architecture

**Primary backing:** [E] §2.3.1--2.3.2; [T] Chapter 6 §§1--2; [MITPDE]
Lecture 5 §§1--2; Victor Ivrii, *Partial Differential Equations*,
§§3.1--3.2 (<https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf>).
The latter is a complete CC BY-SA text and is source [I] in §11.

**Hard proof obligations.** Item 5 includes the initial-time boundary term in
the distribution calculation. Items 7--8 use the approximate-identity theorem
in exactly the topology claimed. Differentiation under convolution in items 7
and 12 is justified by the derivative bounds from item 3 and dominated
convergence, not formal notation.

**Well-definedness.** The $L^p$ convolution depends only on equivalence classes
by MT-15. A space-time distribution formed by the causal extension is locally
integrable. The semigroup parameter is $t\ge0$ with $H_0=I$ defined as an
operator, not by evaluating the singular kernel formula at $t=0$.

---

## PDE-8. Heat Maximum Principles, Duhamel and Smoothing

**A page:** `heat-equation-maximum-principles-duhamel-and-smoothing`  
**B page:** `heat-equation-maximum-principles-duhamel-and-smoothing-examples`  
**Requires:** PDE-7; PDE-5 for Euclidean integration by parts; MT-8, MT-11;
FA-12 for Bochner integration and FA-23 for Fourier analysis.

### A-page items, in dependency order

1. `def-parabolic-cylinder-and-parabolic-boundary` (definition; **L/NA**) — For $Q=\Omega\times(0,T]$, define $\partial_pQ=(\overline\Omega\times\{0\})\cup(\partial\Omega\times[0,T])$, omitting the final-time face.
2. `lem-strict-subsolution-perturbation-for-the-heat-operator` (lemma; **L/A**) — Add a small multiple of $|x|^2+Ct$ with the sign chosen for $\partial_t-\Delta$.
3. `thm-weak-parabolic-maximum-principle` (theorem; **L/A**) — If $u_t-\Delta u\le0$ on a bounded cylinder, $\max_{\overline Q}u=\max_{\partial_pQ}u$.
4. `thm-strong-parabolic-maximum-principle` (theorem; **L/A**) — An interior maximum forces constancy throughout the backward-time connected component.
5. `cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem` (corollary; **L/A**) — Ordered forcing and parabolic-boundary data remain ordered; equal data yield uniqueness.
6. `thm-energy-uniqueness-for-the-homogeneous-heat-equation` (theorem; **L/A**) — With zero lateral/initial data, differentiate $\frac12\int_\Omega u^2$ and obtain $-\int|Du|^2$.
7. `def-duhamel-heat-potential` (definition; **L/NA**) — Define $\int_0^tH_{t-s}f(s)\,ds$ as a scalar or Bochner integral under explicit measurability/integrability hypotheses.
8. `thm-duhamel-principle-for-the-whole-space-heat-equation` (theorem; **L/A**) — The heat potential has zero initial data and solves $u_t-\Delta u=f$, first for smooth compact support and then in the mild class.
9. `thm-inhomogeneous-heat-cauchy-formula` (theorem; **L/A**) — $u(t)=H_tu_0+\int_0^tH_{t-s}f(s)ds$, with uniqueness in the stated bounded/$L^p$ class.
10. `thm-instantaneous-smoothing-of-lp-heat-flow` (theorem; **L/A**) — For $t>0$, $H_t f\in C^\infty$ and every spatial/time derivative has the scale estimate obtained on PDE-7.
11. `cor-heat-semigroup-is-analytic-on-lp` (corollary; **L/A**) — For $1<p<\infty$, the multiplier/kernel estimates give a bounded analytic semigroup; PDE-24 later proves the abstract theorem.
12. `thm-whole-space-heat-uniqueness-under-gaussian-growth` (theorem; **L/A**) — A classical zero-data solution with $|u(x,t)|\le Ce^{a|x|^2}$ on a sufficiently short strip vanishes; iterate to the stated time interval.
13. `thm-backward-heat-solution-map-is-unbounded` (theorem; **L/A**) — On a bounded interval with homogeneous Dirichlet data, terminal-to-initial inversion multiplies the $k$th sine mode by $e^{k^2T}$ and is unbounded on $L^2$.
14. `rem-backward-ill-posed-does-not-mean-universal-nonexistence` (remark; **L/NA**) — Some terminal data lie in the heat-semigroup range; the failure is continuity/stability and often surjectivity in the chosen data space.

### B-page companion

1. `ex-duhamel-solution-for-a-time-independent-source` (example; **L/A**) — Integrate the heat semigroup and verify the source term.
2. `ex-heat-comparison-preserves-an-interval-of-values` (example; **L/A**) — Constants serve as upper/lower solutions.
3. `ex-sine-modes-decay-under-dirichlet-heat-flow` (example; **L/A**) — $e^{-k^2t}\sin(kx)$ on $(0,\pi)$.
4. `cex-final-time-face-is-not-part-of-the-parabolic-boundary` (counterexample; **L/A**) — A decaying sine mode has its largest negative/positive transformed value at different times.
5. `cex-whole-space-zero-data-heat-solutions-without-growth-control` (counterexample; **L/NS**, `proved_here: false`) — State Tychonoff's classical nonuniqueness construction from [E] §2.3.3; it is non-load-bearing.
6. `cex-backward-heat-amplifies-small-high-frequency-errors` (counterexample; **L/A**) — Normalize terminal sine modes to tend to zero while their recovered initial norms diverge.
7. `cex-a-mild-heat-solution-need-not-be-classical-at-initial-time` (counterexample; **L/A**) — Discontinuous $L^p$ data smooth only for $t>0$.

### Sources and proof architecture

**Primary backing:** [E] §§2.3.2--2.3.3; [T] Chapter 6 §§2--5; [I]
§§3.1--3.2; [B] Chapter 10 heat portion. Duhamel is independently treated in
[MITPDE] Lecture 5, Theorem 1.2.

**Hard proof obligations.** The strong maximum theorem respects time direction:
constancy propagates backward, not automatically into the future. Item 8
differentiates a moving-endpoint integral and isolates $H_0f(t)=f(t)$. Item 12
uses expanding-ball barriers; it does not assert unconditional whole-space
uniqueness. Item 13 proves a norm-unbounded inverse, the precise Hadamard
failure requested by “backward ill-posedness.”

**Well-definedness.** Item 7 checks strong measurability and norm integrability
before invoking the Bochner integral. Initial and boundary compatibility at
the corner is included whenever continuity on $\overline Q$ is claimed. The
unproved Tychonoff example is never a dependency target.

---

## PDE-9. Wave-Equation Representation Formulae

**A page:** `wave-equation-representation-formulas`  
**B page:** `wave-equation-representation-formulas-examples`  
**Requires:** PDE-3, PDE-5 and MT-11; the published one-variable wave/ODE,
trigonometric and differentiation-under-integral items.

### A-page items, in dependency order

1. `def-wave-equation-cauchy-data-and-wave-speed` (definition; **L/NA**) — Define $u_{tt}-c^2\Delta u=f$ with displacement $u_0$ and velocity $u_1$.
2. `lem-one-dimensional-wave-operator-factorisation` (lemma; **L/A**) — Factor $\partial_t^2-c^2\partial_x^2=(\partial_t-c\partial_x)(\partial_t+c\partial_x)$.
3. `thm-dalembert-formula` (theorem; **L/A**) — Derive the unique classical one-dimensional homogeneous Cauchy solution from $u_0,u_1$.
4. `thm-one-dimensional-forced-wave-duhamel-formula` (theorem; **L/A**) — Integrate the source over the backward characteristic triangle with coefficient $1/(2c)$.
5. `def-spherical-mean-of-space-dependent-data` (definition; **L/NA**) — Define $M_f(x,r)$ using MT-11's sphere measure and prove smoothness for smooth $f$.
6. `lem-euler-poisson-darboux-equation-for-spherical-means` (lemma; **L/A**) — $M_{rr}+(n-1)M_r/r=\Delta_xM$, including the regular $r=0$ initial conditions.
7. `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation` (theorem; **L/A**) — Express the $n=3$ solution through spherical means of $u_0,u_1$ on the sphere of radius $ct$.
8. `thm-poisson-formula-for-the-two-dimensional-wave-equation` (theorem; **L/A**) — Derive the weighted disk formula by descent from the three-dimensional Kirchhoff solution.
9. `thm-odd-dimensional-wave-formula-by-spherical-means` (theorem; **L/A**) — For odd $n\ge3$, iterate $(r^{-1}\partial_r)$ with the exact dimensional constant.
10. `thm-even-dimensional-wave-formula-by-descent` (theorem; **L/A**) — For even $n\ge2$, give the interior-ball formula obtained by adding one dummy spatial variable.
11. `thm-wave-duhamel-principle` (theorem; **L/A**) — Superpose homogeneous solutions launched at time $s$ to solve the forced equation.
12. `lem-wave-formulas-attain-the-cauchy-data` (lemma; **L/A**) — Use spherical averages and parity at $r=0$ to prove $u(\cdot,0)=u_0$, $u_t(\cdot,0)=u_1$.
13. `cor-classical-wave-solutions-are-locally-determined-by-cauchy-data` (corollary; **L/A**) — The formula at $(x,t)$ uses data only in $\overline B(x,ct)$ and source only in its backward cone.
14. `rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel` (remark; **L/NA**) — Separate two standard uses of “Poisson formula.”

### B-page companion

1. `ex-right-and-left-travelling-waves` (example; **L/A**) — $F(x-ct)+G(x+ct)$ and recovery of its Cauchy data.
2. `ex-one-dimensional-wave-from-a-compactly-supported-velocity` (example; **L/A**) — Track the expanding interval of influence.
3. `ex-three-dimensional-radial-wave-reduces-to-one-dimension` (example; **L/A**) — $ru(r,t)$ satisfies the one-dimensional wave equation away from $r=0$ with the regularity condition there.
4. `ex-kirchhoff-formula-for-constant-initial-velocity` (example; **L/A**) — Check all constants on a data set whose answer is immediate.
5. `ex-two-dimensional-wave-has-an-interior-tail` (example; **L/A**) — Compact data inside, but away from, the boundary circle still affect the solution.
6. `cex-wave-formula-with-sphere-area-and-ball-volume-confused` (counterexample; **L/A**) — A constant-data check refutes the common missing factor; non-load-bearing but sourced.
7. `cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave` (counterexample; **L/A**) — Prescribing both values on one characteristic line leaves one travelling component undetermined.

### Sources and proof architecture

**Primary backing:** [E] §2.4.1--2.4.2; [T] Chapter 7 §§1--2; [I] §§2.3--2.5
and §§9.1; [MITPDE] Lectures 10 and 12. The Euler--Poisson--Darboux route is
cross-checked in [H]'s wave chapter and [E].

**Hard proof obligations.** Items 6 and 12 treat the removable singularity at
$r=0$ rather than divide formally by $r$. Descent in item 8 checks the dummy
coordinate integral and its square-root weight. The general formulas retain
their dimensional constants and required differentiability; the B-page
constant-data check is not used to justify them.

**Well-definedness.** Spherical means divide by the fixed unit-sphere measure
and use probability-normalised averaging. Every formula's integral is shown
finite under its exact data hypotheses. The source term in Duhamel is evaluated
only where the homogeneous propagator is defined.

---

## PDE-10. Wave Energy, Finite Propagation and Huygens's Principle

**A page:** `wave-energy-finite-propagation-and-huygens`  
**B page:** `wave-energy-finite-propagation-and-huygens-examples`  
**Requires:** PDE-5 and PDE-9; MT-8/MT-11; the published differentiation and
compactness pages.

### A-page items, in dependency order

1. `def-wave-energy-and-energy-flux` (definition; **L/NA**) — Define energy density $(u_t^2+c^2|Du|^2)/2$ and flux $-c^2u_tDu$.
2. `lem-local-wave-energy-conservation-law` (lemma; **L/A**) — Multiplying by $u_t$ gives $\partial_te+\operatorname{div}q=fu_t$.
3. `thm-conservation-of-total-wave-energy` (theorem; **L/A**) — For homogeneous solutions with compact support, sufficient decay, or homogeneous boundary data, the total energy is constant.
4. `cor-energy-uniqueness-for-the-wave-cauchy-problem` (corollary; **L/A**) — Zero displacement and velocity imply $u_t=Du=0$, and the initial value fixes the remaining constant.
5. `thm-energy-continuous-dependence-for-the-forced-wave-equation` (theorem; **L/A**) — Cauchy--Schwarz and Gronwall bound energy by initial energy and forcing.
6. `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence` (definition; **L/NA**) — Define cones with slope $c$ and the two dual causal notions.
7. `lem-energy-identity-on-a-truncated-wave-cone` (lemma; **L/A**) — Apply the Euclidean space-time divergence theorem and prove the null-side flux is nonnegative.
8. `thm-finite-propagation-speed-for-the-wave-equation` (theorem; **L/A**) — Zero data/source in a backward cone force the solution to vanish at its vertex.
9. `cor-compact-support-expands-at-speed-at-most-c` (corollary; **L/A**) — Initial support in $K$ lies at time $t$ in its closed $ct$-neighbourhood.
10. `thm-domain-of-dependence-and-local-uniqueness` (theorem; **L/A**) — Two solutions agreeing on the base data and source throughout a backward cone agree inside it.
11. `def-strong-huygens-principle` (definition; **L/NA**) — At positive time the value depends only on data on the boundary sphere, not the cone interior, in the precise homogeneous Cauchy sense.
12. `thm-strong-huygens-principle-in-odd-spatial-dimensions` (theorem; **L/A**) — The odd-dimensional formula proves strong Huygens for odd $n\ge3$.
13. `thm-wave-tails-in-one-and-even-spatial-dimensions` (theorem; **L/A**) — D'Alembert's velocity integral and the even-dimensional descent formula show interior dependence, so strong Huygens fails.
14. `rem-finite-propagation-is-not-huygens-principle` (remark; **L/NA**) — Finite speed holds in every spatial dimension; shell-only propagation does not.

### B-page companion

1. `ex-conserved-energy-of-a-travelling-wave-packet` (example; **L/A**) — Compute equal kinetic/potential contributions for a compactly supported travelling profile.
2. `ex-reflection-at-a-dirichlet-endpoint` (example; **L/A**) — Odd reflection conserves energy and reverses sign.
3. `ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail` (example; **L/A**) — Kirchhoff's shell support illustrates strong Huygens.
4. `ex-two-dimensional-pulse-has-a-tail-inside-the-cone` (example; **L/A**) — The disk kernel remains nonzero after the wave front passes.
5. `cex-finite-speed-does-not-imply-strong-huygens` (counterexample; **L/A**) — The $n=1$ and $n=2$ formulas give direct witnesses.
6. `cex-wave-energy-need-not-be-conserved-through-an-open-boundary` (counterexample; **L/A**) — A travelling packet exits a bounded interval and its interior energy falls by the boundary flux.
7. `cex-global-energy-identity-needs-integrability-or-decay` (counterexample; **L/A**) — A plane wave has infinite total energy although the local conservation law is valid.

### Sources and proof architecture

**Primary backing:** [E] §2.4.3; [T] Chapter 7 §3; [I] §§2.7, 9.1--9.2;
[MITPDE] Lectures 13--14. Huygens is independently checked against [E]'s odd
and even dimensional formulas and [I]'s explicit remarks.

**Hard proof obligations.** Item 3 records which boundary term vanishes in
each admissible setting. Item 7 computes the cone-side normal and flux sign;
without that computation the finite-speed proof is incomplete. Item 13 proves
failure by data supported strictly inside the relevant ball, not merely by
observing a different-looking formula.

**Well-definedness.** Energy integrals are finite under stated hypotheses.
Cone bases and side surfaces are piecewise $C^1$, so PDE-5's divergence theorem
applies piecewise and shared faces cancel. “Depends on” is formalised by item
10, not used as an undefined physical phrase.

---

## PDE-11. Weak Derivatives and Sobolev Spaces

**A page:** `weak-derivatives-and-sobolev-spaces`  
**B page:** `weak-derivatives-and-sobolev-spaces-examples`  
**Requires:** MT-8, MT-11 and MT-14--MT-16; FA-1, FA-7, FA-10 and FA-24;
`mixed-partials-taylor-and-extrema`. FA-24's test-function/distribution
framework is cited and not redefined.

### A-page items, in dependency order

1. `def-locally-integrable-function-as-a-regular-distribution` (definition; **L/NA**) — Cite FA-24 and fix the injection $L^1_{\rm loc}(\Omega)\to\mathcal D'(\Omega)$ modulo a.e. equality.
2. `def-weak-derivative-of-a-locally-integrable-function` (definition; **L/NA**) — $v=D^\alpha u$ weakly when $\int uD^\alpha\phi=(-1)^{|\alpha|}\int v\phi$ for every test function.
3. `lem-weak-derivative-is-independent-of-lp-representatives` (lemma; **L/A**) — Null-set changes in $u$ or $v$ do not alter the test-function identity.
4. `lem-weak-derivatives-are-unique-almost-everywhere` (lemma; **L/A**) — The fundamental lemma/regular-distribution injection makes $v$ unique as an $L^1_{\rm loc}$ class.
5. `lem-classical-derivatives-are-weak-derivatives` (lemma; **L/A**) — Compact-support integration by parts identifies classical and weak derivatives.
6. `lem-weak-derivative-linearity-locality-and-commutation` (lemma; **L/A**) — Prove linearity, restriction to subdomains and $D^\alpha D^\beta=D^{\alpha+\beta}$ when the derivatives exist.
7. `lem-weak-leibniz-rule-with-a-smooth-factor` (lemma; **L/A**) — $D^\alpha(\eta u)$ is the finite multi-index Leibniz sum for smooth $\eta$.
8. `def-sobolev-space-wkp-and-its-norm` (definition; **L/NA**) — For $k\in\mathbb N_0$, $1\le p\le\infty$, define $W^{k,p}(\Omega)$ and its standard finite-sum/max norm on equivalence classes.
9. `lem-sobolev-norm-is-well-defined-and-definite` (lemma; **L/A**) — Representative independence follows from items 3--4 and norm zero forces the $L^p$ class to vanish.
10. `thm-sobolev-spaces-are-banach-spaces` (theorem; **L/A**) — Take componentwise $L^p$ limits of a Cauchy sequence and pass the integration-by-parts identity to the limit.
11. `def-hk-and-hk-zero-notation` (definition; **L/NA**) — Set $H^k=W^{k,2}$ and reserve $H^k_0$ for the later closure definition; do not conflate it with pointwise boundary values.
12. `thm-hk-is-a-hilbert-space` (theorem; **L/A**) — The derivative-sum inner product is well defined, positive and complete.
13. `lem-weak-stability-of-sobolev-derivatives` (lemma; **L/A**) — If $u_j\to u$ and $D^\alpha u_j\to v$ in the appropriate local $L^p$ topologies, then $D^\alpha u=v$ weakly.
14. `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions` (theorem; **L/A**) — For $u\in W^{1,p}$ and $F\in C^1$ with bounded derivative, $F\circ u\in W^{1,p}_{\rm loc}$ and $D(F\circ u)=F'(u)Du$, with the global integrability condition stated.
15. `cor-positive-negative-part-and-truncation-calculus-in-w-one-p` (corollary; **L/A**) — Identify gradients of $u^+$, $u^-$ and $\min\{M,\max\{-M,u\}\}$ a.e.
16. `def-absolute-continuity-on-almost-every-coordinate-line` (definition; **L/NA**) — Define the ACL property using equivalence-class representatives and Fubini sections.
17. `thm-acl-characterisation-of-w-one-p` (theorem; **L/A**) — For $1\le p<\infty$, construct an ACL representative whose line derivatives are the weak derivatives, and prove the converse.
18. `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives` (corollary; **L/A**) — On an interval, $u(x)=u(a)+\int_a^xu'$ for the unique continuous representative.
19. `rem-weak-derivatives-are-distributional-derivatives-with-function-values` (remark; **L/NA**) — State the exact dictionary to FA-24 and explain why not every distributional derivative is represented by an $L^p$ function.

### B-page companion

1. `ex-absolute-value-has-a-weak-first-derivative` (example; **L/A**) — $D|x|=\operatorname{sgn}x$ a.e. on an interval.
2. `cex-step-function-has-no-locally-integrable-weak-derivative` (counterexample; **L/A**) — Its distributional derivative is a Dirac mass.
3. `ex-radial-power-membership-in-w-one-p` (example; **L/A**) — Determine the sharp local integrability conditions for $|x|^{-a}$.
4. `ex-piecewise-c-one-functions-with-matching-traces` (example; **L/A**) — A continuous corner lies in $W^{1,p}$ and has the piecewise classical derivative.
5. `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p` (counterexample; **L/A**) — The distributional derivative contains surface measure.
6. `cex-lp-functions-need-not-have-point-values` (counterexample; **L/A**) — Two representatives differing at one point are the same $L^p$ and Sobolev element.
7. `ex-sobolev-truncations-preserve-zero-regions` (example; **L/A**) — Compute the weak gradient of a clipped affine function.

### Sources and proof architecture

**Primary backing:** Juha Kinnunen, *Sobolev Spaces* (2026), Chapter 1
§§1.1--1.5 and Chapter 2 §§2.1--2.6
(<https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf>), source [K]; [H]
§§3.1--3.5; [B] Chapters 8--9; [G] §§1.2--1.3. These give at least three
independent full treatments.

**Hard proof obligations.** Completeness is not inherited merely because each
component lies in $L^p$; item 10 passes the defining weak identity to the limit.
The chain rule is proved first for smooth approximations and Lipschitz $F$, then
truncated; no pointwise derivative of an arbitrary representative is used.
The ACL theorem uses Fubini's a.e. section conclusion with its exceptional-set
quantifiers intact.

**Well-definedness.** Items 3--4 and 9 are mandatory before $D^\alpha u$ or the
$W^{k,p}$ norm denotes a function of an equivalence class. ACL chooses a
distinguished representative only up to the natural linewise null sets; item
17 states how representatives on different coordinate directions are made
simultaneously consistent.

---

## PDE-12. Smooth Approximation and Sobolev Extension

**A page:** `smooth-approximation-and-sobolev-extension`  
**B page:** `smooth-approximation-and-sobolev-extension-examples`  
**Requires:** PDE-11; MT-15; the published locally finite partition-of-unity,
distance-to-closed-set and $C^1$ coordinate-change items.

### A-page items, in dependency order

1. `lem-mollification-commutes-with-weak-derivatives-in-the-interior` (lemma; **L/A**) — On $\Omega_\varepsilon$, $D^\alpha(\rho_\varepsilon*u)=\rho_\varepsilon*D^\alpha u$.
2. `thm-local-smooth-approximation-in-wkp` (theorem; **L/A**) — Interior mollifications converge in $W^{k,p}_{\rm loc}$ for $1\le p<\infty$.
3. `thm-meyers-serrin-density-on-an-arbitrary-open-set` (theorem; **L/A**) — An exhaustion, locally finite smooth partition and summable error budget approximate every $W^{k,p}(\Omega)$ function by $C^\infty(\Omega)\cap W^{k,p}(\Omega)$.
4. `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn` (corollary; **L/A**) — Combine cutoffs tending to one with item 3.
5. `rem-meyers-serrin-does-not-assert-density-for-p-infinity` (remark; **L/NA**) — Record the excluded endpoint and the difference between local smoothing and norm density.
6. `def-wkp-zero-as-a-sobolev-closure` (definition; **L/NA**) — Define $W^{k,p}_0(\Omega)$ as the $W^{k,p}$ closure of $C_c^\infty(\Omega)$.
7. `lem-zero-extension-from-w-one-p-zero` (lemma; **L/A**) — Extension by zero maps $W^{1,p}_0(\Omega)$ isometrically in the derivative components into $W^{1,p}(\mathbb R^n)$.
8. `def-sobolev-extension-domain-and-extension-operator` (definition; **L/NA**) — Define a bounded linear right inverse of restriction; equality to $u$ is a.e. on $\Omega$.
9. `thm-wkp-extension-from-a-half-space` (theorem; **L/A**) — A finite linear combination of reflected values with matched normal moments gives a bounded extension for integer $k$, $1\le p\le\infty$.
10. `lem-c-one-boundary-flattening-preserves-wkp-locally` (lemma; **L/A**) — For the regularity needed at order $k$, composition with a boundary chart and its inverse obeys a local Sobolev norm bound.
11. `thm-extension-theorem-for-bounded-smooth-domains` (theorem; **L/A**) — A finite boundary atlas, item 9 and a partition of unity give $E:W^{k,p}(\Omega)\to W^{k,p}(\mathbb R^n)$ with controlled support.
12. `thm-smooth-up-to-the-boundary-density-on-smooth-domains` (theorem; **L/A**) — Extend, mollify and restrict to approximate by restrictions of $C_c^\infty(\mathbb R^n)$.
13. `cor-sobolev-embeddings-transfer-from-rn-to-extension-domains` (corollary; **L/A**) — Any whole-space inequality stable under restriction holds with a domain-dependent extension constant.
14. `rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses` (remark; **L/NA**) — State the lowest sourced hypothesis theorem by theorem; do not silently call a $C^1$ proof Lipschitz or use $C^1$ charts for arbitrary $k$.

### B-page companion

1. `ex-mollification-of-the-absolute-value` (example; **L/A**) — Smooth the corner and show $W^{1,p}_{\rm loc}$ convergence.
2. `ex-zero-extension-of-a-compactly-supported-sobolev-function` (example; **L/A**) — Verify no boundary distribution appears.
3. `cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump` (counterexample; **L/A**) — The constant function on an interval extends to an indicator with Dirac boundary derivatives.
4. `cex-c-infinity-up-to-boundary-density-is-domain-sensitive` (counterexample; **L/A**) — A cusp/slit example separates arbitrary-open Meyers--Serrin from smooth-up-to-boundary approximation.
5. `cex-not-every-open-set-is-a-w-one-p-extension-domain` (counterexample; **L/A**) — A standard inward cusp supplies the obstruction with its source hypothesis stated.
6. `ex-reflection-extension-on-the-half-line` (example; **L/A**) — Compute the $k=1$ extension and norm directly.
7. `cex-mollification-after-zero-extension-does-not-preserve-boundary-values` (counterexample; **L/A**) — Boundary leakage explains why $W^{1,p}_0$ and unrestricted $W^{1,p}$ require different constructions.

### Sources and proof architecture

**Primary backing:** [K] Chapter 1 §§1.6--1.9; Richard S. Laugesen, *Linear
Analysis and Partial Differential Equations*, Chapter 3, “Approximating,”
“Extending past the boundary” and “Boundary traces”
(<https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf>),
source [L]; [H] §§3.6 and 3.11; [T] Chapter 9 §2. Laugesen proves the stated
$C^1$-domain basic extension; [T]/standard extension references support the
higher-order smooth-domain form.

**Hard proof obligations.** Meyers--Serrin uses a locally finite sum with a
fixed explicit error budget; there is no uncontrolled diagonal choice. The
half-space extension solves the finite Vandermonde moment conditions before
claiming matching derivatives. Domain extension tracks chart compositions,
overlap multiplicity and support.

**Well-definedness.** Restriction and extension act on a.e. classes and item 8
states equality in that sense. The locally finite approximation sum is proved
pointwise finite and $W^{k,p}$ convergent. $W^{k,p}_0$ is initially only a
closure; no boundary trace meaning is used before PDE-13.

---

## PDE-13. Sobolev Traces and Zero Boundary Values

**A page:** `sobolev-traces-and-zero-boundary-values`  
**B page:** `sobolev-traces-and-zero-boundary-values-examples`  
**Requires:** PDE-11--PDE-12; PDE-5's surface measure; MT-11/MT-14; the
published quotient and partition-of-unity pages.

### A-page items, in dependency order

1. `lem-one-dimensional-sobolev-endpoint-estimate` (lemma; **L/A**) — Bound $|v(0)|^p$ by the $W^{1,p}$ norm on a finite interval, with the $p=1$ form separate.
2. `thm-trace-estimate-on-the-half-space` (theorem; **L/A**) — For smooth compactly supported $u$, control the $L^p$ norm of $u(\cdot,0)$ by $\|u\|_{W^{1,p}(\mathbb R^n_+)}$.
3. `thm-lp-trace-operator-on-a-bounded-c-one-domain` (theorem; **L/A**) — Density and flattened charts extend classical restriction uniquely to a bounded $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$.
4. `lem-sobolev-trace-agrees-with-continuous-boundary-values` (lemma; **L/A**) — If a Sobolev element has a continuous representative on $\overline\Omega$, its trace equals classical restriction a.e. on the boundary.
5. `thm-kernel-of-the-trace-is-w-one-p-zero` (theorem; **L/A**) — On a bounded $C^1$ domain, $\ker T=W^{1,p}_0(\Omega)$.
6. `def-fractional-slobodeckij-space-on-euclidean-space` (definition; **L/NA**) — For $0<s<1$, define $W^{s,p}$ by the double-integral seminorm on $L^p$ classes.
7. `lem-slobodeckij-seminorm-is-well-defined` (lemma; **L/A**) — Prove representative independence, the seminorm triangle inequality and definiteness modulo constants when combined with $L^p$.
8. `def-fractional-sobolev-space-on-a-compact-c-one-boundary` (definition; **L/NA**) — Patch the local graph-coordinate Slobodeckij norms with a finite atlas.
9. `lem-fractional-boundary-norm-is-independent-of-atlas` (lemma; **L/A**) — Bi-Lipschitz chart changes and finite partitions give equivalent norms.
10. `thm-sharp-trace-theorem-for-w-one-p` (theorem; **L/A**) — For $1<p<\infty$, $T:W^{1,p}(\Omega)\to W^{1-1/p,p}(\partial\Omega)$ is bounded and onto on bounded smooth domains.
11. `thm-bounded-right-inverse-for-the-sobolev-trace` (theorem; **L/A**) — Construct a linear lifting $R$ with $TRg=g$ and controlled $W^{1,p}$ norm.
12. `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` (corollary; **L/A**) — If $g$ lies in the trace range, write $u=Rg+v$ with $v\in W^{1,p}_0$; arbitrary $L^p(\partial\Omega)$ is not claimed liftable.
13. `rem-endpoint-and-rough-domain-trace-limitations` (remark; **L/NA**) — At $p=1$ retain the $L^1$ trace theorem but do not identify the range with the formal $W^{0,1}$ notation; rough-domain traces require separate geometry.

### B-page companion

1. `ex-trace-of-an-ac-sobolev-function-on-an-interval` (example; **L/A**) — The trace is the two endpoint values of the absolutely continuous representative.
2. `ex-trace-of-an-affine-function-on-a-ball` (example; **L/A**) — Classical and Sobolev restrictions agree.
3. `cex-boundary-point-values-are-not-defined-by-an-lp-class` (counterexample; **L/A**) — Changing values on $\partial\Omega$ changes no interior equivalence class.
4. `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range` (counterexample; **L/A**) — A jump datum on a one-dimensional boundary chart fails the $H^{1/2}$ seminorm.
5. `ex-zero-trace-versus-zero-extension` (example; **L/A**) — On an interval, verify $W^{1,p}_0$ by endpoint values and by zero extension.
6. `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control` (counterexample; **L/A**) — Use a sourced cusp and a concentrating Sobolev sequence.
7. `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` (example; **L/A**) — Illustrate, without serving as proof of item 11, a smooth boundary datum lifted into the half-space.

### Sources and proof architecture

**Primary backing:** [T] Chapter 9 §2; [H] §3.9; [L] “Boundary traces”; [S]
Chapter 5 §§V.1--V.3 for the fractional trace space. [B] Chapters 8--9 supply
the one-dimensional and multidimensional weak-boundary formulations.

**Hard proof obligations.** Item 3 extends a uniformly bounded operator from a
dense subspace and proves sequence independence. Item 5 has two directions:
compactly supported approximation gives zero trace; conversely a zero trace is
flattened, extended by zero and approximated without a boundary jump. Items
8--11 must track Jacobian and bi-Lipschitz constants; “define by charts” is not
self-justifying.

**Well-definedness.** The trace is an operator on equivalence classes, not a
chosen pointwise restriction. Boundary $L^p$ uses PDE-5's chart-independent
surface measure. The quotient-by-constants issue of the fractional seminorm is
removed by adding its $L^p$ norm. The right inverse proves the word “onto.”

---

## PDE-14. Sobolev, Poincaré and Morrey Inequalities

**A page:** `sobolev-poincare-and-morrey-inequalities`  
**B page:** `sobolev-poincare-and-morrey-inequalities-examples`  
**Requires:** PDE-11--PDE-13; MT-11, MT-14--MT-15 and MT-17; PDE-5's
Euclidean integration tools.

### A-page items, in dependency order

1. `def-sobolev-conjugate-exponent` (definition; **L/NA**) — For $1\le p<n$, define $p^*=np/(n-p)$ and record the scaling identity $1/p^*=1/p-1/n$.
2. `lem-pointwise-potential-bound-for-compactly-supported-smooth-functions` (lemma; **L/A**) — Bound $|u(x)|$ by a Riesz-potential integral of $|Du|$ using the divergence of the radial kernel.
3. `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one` (theorem; **L/A**) — Prove $\|u\|_{n/(n-1)}\le C_n\|Du\|_1$ by level sets/product estimates.
4. `thm-gagliardo-nirenberg-sobolev-inequality` (theorem; **L/A**) — For $1<p<n$, apply item 3 to a suitable power of $|u|$ and Hölder to get $\|u\|_{p^*}\le C\|Du\|_p$.
5. `cor-sobolev-inequality-for-w-one-p-zero` (corollary; **L/A**) — Extend by zero and pass by density on arbitrary open sets.
6. `thm-poincare-inequality-on-a-ball` (theorem; **L/A**) — $\|u-u_B\|_{L^p(B)}\le Cr\|Du\|_{L^p(B)}$ for $1\le p<\infty$.
7. `thm-poincare-inequality-for-w-one-p-zero` (theorem; **L/A**) — On a domain bounded in one direction, $\|u\|_p\le C\|Du\|_p$ for $u\in W^{1,p}_0$.
8. `thm-poincare-wirtinger-on-bounded-connected-extension-domains` (theorem; **L/A**) — The mean-zero inequality holds, with connectedness used to make zero gradient imply one constant.
9. `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` (theorem; **L/A**) — $W^{1,p}(\Omega)\hookrightarrow L^q(\Omega)$ continuously for $p\le q\le p^*$.
10. `thm-critical-sobolev-embedding-into-every-finite-lq` (theorem; **L/A**) — On bounded extension domains, $W^{1,n}\hookrightarrow L^q$ for every finite $q$, with constants depending on $q$.
11. `thm-morrey-inequality-for-p-greater-than-n` (theorem; **L/A**) — Produce a $C^{0,1-n/p}$ representative and its Hölder seminorm bound.
12. `thm-w-one-infinity-functions-have-lipschitz-representatives` (theorem; **L/A**) — On convex domains, $W^{1,\infty}$ agrees with Lipschitz functions and the Lipschitz constant is controlled by $\|Du\|_\infty$.
13. `thm-higher-order-sobolev-embedding` (theorem; **L/A**) — Iterate first-order embeddings to state the $W^{k,p}\to W^{m,q}$ and $C^{m,\alpha}$ alternatives with integer-borderline cases explicit.
14. `cor-sobolev-algebra-above-the-critical-index` (corollary; **L/A**) — If $kp>n$ in the stated integer range, products remain in $W^{k,p}$ with a norm estimate; only sourced regimes are claimed.
15. `rem-critical-sobolev-does-not-embed-in-linfinity` (remark; **L/NA**) — State the endpoint limitation and locate Trudinger--Moser/BMO in the scope-denial ledger.

### B-page companion

1. `ex-scaling-for-the-sobolev-conjugate` (example; **L/A**) — Dilations show why $p^*$ is forced.
2. `ex-poincare-on-an-interval-with-sharp-scaling` (example; **L/A**) — Derive the length dependence by the FTC.
3. `cex-poincare-wirtinger-needs-connectedness` (counterexample; **L/A**) — A function constant with different values on two components has zero gradient and nonzero mean-adjusted norm.
4. `cex-critical-w-one-n-does-not-embed-in-linfinity` (counterexample; **L/A**) — A logarithmic concentrating sequence has bounded $W^{1,n}$ norm and unbounded supremum.
5. `cex-morrey-endpoint-p-equals-n-fails` (counterexample; **L/A**) — The same sequence has no uniformly controlled continuous representative.
6. `ex-holder-representative-of-a-radial-sobolev-function` (example; **L/A**) — Check the Morrey exponent on a power function.
7. `cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay` (counterexample; **L/A**) — Translates/dilates show which bounded-domain inclusions fail on $\mathbb R^n$.

### Sources and proof architecture

**Primary backing:** [K] Chapter 3 §§3.1--3.5; [H] §§3.7--3.8 and 3.11;
[L] “Sobolev inequalities” and “Poincaré inequality”; [T] Chapter 9 §3; [B]
Chapters 8--9. Endpoint checks also use [G] §1.6.

**Hard proof obligations.** The $p=1$ proof is separated because the usual
power/Hölder reduction starts above that endpoint. Mean-zero Poincaré uses a
compactness or integral representation proof with connectedness visible.
Morrey first constructs ball averages and proves they form a Cauchy family,
then identifies the resulting representative a.e.; it never evaluates the
original $L^p$ class.

**Well-definedness.** $u_B=|B|^{-1}\int_Bu$ is used only for finite positive
ball measure. Every embedding that produces pointwise or Hölder values names
the continuous representative. Constants record dependence on $n,p,k$ and the
domain; no universal domain constant is implied.

---

## PDE-15. Rellich--Kondrachov and Sobolev Compactness

**A page:** `rellich-kondrachov-and-sobolev-compactness`  
**B page:** `rellich-kondrachov-and-sobolev-compactness-examples`  
**Requires:** PDE-11--PDE-14; MT-10, MT-14--MT-15; FA-9--FA-10; the
published metric compactness/Ascoli pages.

### A-page items, in dependency order

1. `lem-translation-estimate-for-w-one-p-functions` (lemma; **L/A**) — For $u\in W^{1,p}(\mathbb R^n)$, $\|\tau_hu-u\|_p\le |h|\|Du\|_p$.
2. `thm-frechet-kolmogorov-compactness-criterion-in-lp` (theorem; **L/A**) — A bounded $L^p(\mathbb R^n)$ family with uniform translation control and tight tails is relatively compact for $1\le p<\infty$.
3. `thm-rellich-compactness-from-w-one-p-zero-to-lp` (theorem; **L/A**) — On a bounded open set, zero extension plus items 1--2 makes $W^{1,p}_0(\Omega)\hookrightarrow L^p(\Omega)$ compact.
4. `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain` (theorem; **L/A**) — A bounded extension operator and cutoff give compactness for bounded extension domains.
5. `thm-rellich-kondrachov-for-p-less-than-n` (theorem; **L/A**) — $W^{1,p}(\Omega)\Subset L^q(\Omega)$ for $1\le q<p^*$ on a bounded extension domain.
6. `thm-rellich-kondrachov-at-the-critical-source-exponent` (theorem; **L/A**) — $W^{1,n}(\Omega)\Subset L^q(\Omega)$ for every finite $q$.
7. `thm-morrey-rellich-compactness-for-p-greater-than-n` (theorem; **L/A**) — Bounded subsets are precompact in $C^{0,\beta}(\overline\Omega)$ for every $0\le\beta<1-n/p$ under the stated domain regularity.
8. `thm-higher-order-rellich-kondrachov` (theorem; **L/A**) — State compact $W^{k,p}\Subset W^{m,q}$ embeddings whenever the target smoothness exponent is strictly lower.
9. `cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences` (corollary; **L/A**) — Package the subcritical cases in the exact form elliptic and variational pages will cite.
10. `cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence` (corollary; **L/A**) — On a bounded extension domain, a weakly $H^1$ convergent sequence converges strongly in $L^2$ after identifying the unique cluster point.
11. `rem-rellich-is-a-strictly-subcritical-theorem` (remark; **L/NA**) — Critical continuous embeddings and unbounded-domain translations/dilations are excluded.

### B-page companion

1. `ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval` (example; **L/A**) — Use absolute continuity and Ascoli in one dimension.
2. `cex-critical-sobolev-embedding-is-not-compact` (counterexample; **L/A**) — A concentrating bump sequence is bounded in $W^{1,p}_0$ but has no strongly convergent $L^{p^*}$ subsequence.
3. `cex-rellich-fails-on-rn-by-translations` (counterexample; **L/A**) — Translate one compactly supported bump to infinity.
4. `cex-rellich-fails-without-uniform-tail-control` (counterexample; **L/A**) — Recast the translation witness against the Fréchet--Kolmogorov hypotheses.
5. `cex-morrey-compactness-loses-the-endpoint-holder-exponent` (counterexample; **L/A**) — Rescaled Hölder spikes defeat compactness at $\alpha=1-n/p$.
6. `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint` (example; **L/A**) — Explain the exact step used later for eigenvalue and constrained minimisation.

### Sources and proof architecture

**Primary backing:** [K] Chapter 3 §3.6, especially Theorem 3.44 and its
critical counterexample; [H] §§3.10--3.11; [L] “Compact imbedding”; [G] §1.6;
[T] Chapter 9 §3. Each pair has at least two full graduate treatments.

**Hard proof obligations.** Item 2 proves both directions needed here only in
the stated $1\le p<\infty$ setting; it is not quoted as an unspecified
compactness slogan. Interpolation obtains $q>p$ only after strong $L^p$ and a
uniform $L^{p^*}$ bound. Item 10 uses uniqueness of the weak limit to upgrade
subsequence compactness to convergence of the relevant sequence when needed.

**Well-definedness.** “Compact embedding” means the inclusion is continuous
and maps bounded sequences to sequences with strongly convergent subsequences.
The target representative in the Hölder case is the Morrey representative from
PDE-14. Domain boundedness and extension hypotheses appear in every theorem.

---

## PDE-16. Lax--Milgram and Weak Elliptic Solutions

**A page:** `lax-milgram-and-weak-elliptic-solutions`  
**B page:** `lax-milgram-and-weak-elliptic-solutions-examples`  
**Requires:** PDE-13--PDE-15; MT-14--MT-16; FA-2, FA-7, FA-10 and FA-13;
the published Banach fixed-point theorem. This is the seam-approved home of
Lax--Milgram.

### A-page items, in dependency order

1. `def-bounded-coercive-and-symmetric-sesquilinear-forms` (definition; **L/NA**) — On a Hilbert space define boundedness and $\operatorname{Re}a(u,u)\ge\alpha\|u\|^2$; state the real bilinear convention separately.
2. `lem-form-to-bounded-operator-by-hilbert-riesz` (lemma; **L/A**) — FA-13 supplies the unique bounded operator $A$ with $a(u,v)=\langle Au,v\rangle$ in the library's linearity convention.
3. `lem-coercivity-makes-a-small-form-step-a-contraction` (lemma; **L/A**) — For sufficiently small $\rho>0$, $I-\rho A$ is a strict contraction.
4. `thm-lax-milgram` (theorem; **L/A**) — Every bounded coercive form and bounded antilinear functional $F$ determine a unique $u$ with $a(u,v)=F(v)$ for all $v$, and $\|u\|\le\|F\|/\alpha$.
5. `cor-symmetric-lax-milgram-is-energy-minimisation` (corollary; **L/A**) — For a real symmetric coercive form, the solution uniquely minimises $J(v)=a(v,v)/2-F(v)$.
6. `rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle` (remark; **L/NA**) — Existence survives without symmetry, but item 5 does not.
7. `def-h-minus-one-as-the-dual-of-h-one-zero` (definition; **L/NA**) — Define $H^{-1}(\Omega)=(H^1_0(\Omega))^*$ and distinguish dual pairing from the $L^2$ inner product.
8. `lem-ltwo-and-divergence-data-embed-in-h-minus-one` (lemma; **L/A**) — On bounded domains, $f_0-\operatorname{div}F$ defines an $H^{-1}$ functional with the expected bound.
9. `def-uniformly-elliptic-divergence-form-operator` (definition; **L/NA**) — Fix $Lu=-D_i(a^{ij}D_ju)+b^iD_iu+cu$ with measurable bounded coefficients and $a^{ij}\xi_i\xi_j\ge\theta|\xi|^2$ a.e.
10. `def-weak-dirichlet-solution-for-a-divergence-form-operator` (definition; **L/NA**) — $u-g\in H^1_0$ and the explicitly integrable form identity holds for every $v\in H^1_0$.
11. `lem-elliptic-form-is-well-defined-and-bounded` (lemma; **L/A**) — Hölder and Poincaré estimates establish integrability and boundedness of every principal/lower-order term under the stated coefficient hypotheses.
12. `lem-coercivity-of-the-principal-dirichlet-form` (lemma; **L/A**) — Uniform ellipticity plus Poincaré controls the $H^1_0$ norm.
13. `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` (theorem; **L/A**) — For $f\in H^{-1}$, there is a unique $u\in H^1_0$ solving $-\Delta u=f$ with the energy estimate.
14. `thm-lax-milgram-solvability-for-coercive-divergence-form-equations` (theorem; **L/A**) — Under an explicit sign/smallness condition on lower-order terms, the general weak Dirichlet problem is uniquely solvable.
15. `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` (corollary; **L/A**) — For boundary data in PDE-13's trace range, subtract a lifting and solve the resulting zero-trace problem.
16. `lem-classical-solutions-satisfy-the-weak-formulation` (lemma; **L/A**) — PDE-5 integration by parts proves classical-to-weak consistency.
17. `cor-weak-solution-depends-continuously-on-data` (corollary; **L/A**) — Bound the difference of solutions by the $H^{-1}$ and lifting-data differences.

### B-page companion

1. `ex-weak-dirichlet-poisson-problem-on-an-interval` (example; **L/A**) — Recover the piecewise twice-integrated solution for $H^{-1}$ data.
2. `ex-ltwo-forcing-defines-an-h-minus-one-functional` (example; **L/A**) — Compute the embedding estimate on a bounded domain.
3. `ex-nonsymmetric-coercive-elliptic-form` (example; **L/A**) — A drift term yields a nonsymmetric form still covered by Lax--Milgram.
4. `cex-bounded-form-without-coercivity-need-not-be-solvable` (counterexample; **L/A**) — The zero form with nonzero functional.
5. `cex-coercive-form-need-not-be-symmetric` (counterexample; **L/A**) — A positive definite matrix plus a skew part.
6. `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting` (counterexample; **L/A**) — Cite PDE-13's trace-range witness.
7. `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one` (counterexample; **L/A**) — Constants lie in the kernel, motivating quotient/mean-zero formulations.

### Sources and proof architecture

**Primary backing:** [H] §§4.1--4.7; [B] Chapters 8--9; [L] “Poisson's
equation via Calculus of Variations” and Theorem 4.12; [T] Chapter 10 §§1--2;
Luigi Ambrosio, Alessandro Carlotto and Annalisa Massaccesi, *Lectures on
Elliptic Partial Differential Equations*, Chapter 1 §§1.1--1.3
(<https://ricerca.sns.it/handle/11384/81586>), source [ACM].

**Hard proof obligations.** Lax--Milgram is proved, not imported from FA: FA-13
creates $A$, item 3 makes $I-\rho A$ a contraction, and the fixed point solves
the variational equation. Item 11 lists coefficient exponents rather than
assuming every product is integrable. Inhomogeneous data are accepted only
after a trace lifting exists.

**Well-definedness.** Forms and weak equations are independent of a.e.
representatives. $H^{-1}$ elements act by the dual pairing, and any $L^2$
identification is an embedding theorem. The energy functional in item 5 is
real-valued; the complex case uses the real part only where explicitly stated.

---

## PDE-17. Fredholm Elliptic Problems and the Elliptic Spectrum

**A page:** `fredholm-elliptic-problems-and-the-elliptic-spectrum`  
**B page:** `fredholm-elliptic-problems-and-the-elliptic-spectrum-examples`  
**Requires:** PDE-15--PDE-16; FA-7, FA-10, FA-13 and FA-15--FA-16. The
abstract Fredholm alternative and compact self-adjoint spectral theorem are
cited, not restated.

### A-page items, in dependency order

1. `thm-garding-inequality-for-a-divergence-form-elliptic-operator` (theorem; **L/A**) — Bound $a(u,u)$ below by $\alpha\|u\|_{H^1_0}^2-\beta\|u\|_2^2$ under explicit coefficient assumptions.
2. `cor-a-sufficiently-large-shift-is-coercive` (corollary; **L/A**) — $a_\mu(u,v)=a(u,v)+\mu(u,v)_{L^2}$ is coercive for $\mu>\beta$.
3. `def-shifted-elliptic-solution-operator` (definition; **L/NA**) — By PDE-16 define $K_\mu:L^2(\Omega)\to H^1_0(\Omega)$ from $a_\mu(K_\mu f,v)=(f,v)_2$.
4. `lem-shifted-elliptic-solution-operator-is-compact-on-ltwo` (lemma; **L/A**) — The $H^1_0$ energy bound followed by PDE-15's compact embedding makes the $L^2$ realization compact.
5. `lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation` (lemma; **L/A**) — Rewrite $Lu=f$ as $(I-\mu K_\mu)u=K_\mu f$ with domain and signs checked.
6. `def-formal-adjoint-and-adjoint-weak-dirichlet-problem` (definition; **L/NA**) — Define $a^*(u,v)=\overline{a(v,u)}$ and its weak operator before orthogonality is mentioned.
7. `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems` (theorem; **L/A**) — Either the homogeneous kernel is trivial and every datum has a unique solution, or solvability is exactly orthogonality to the finite-dimensional adjoint kernel.
8. `cor-elliptic-kernel-and-cokernel-are-finite-dimensional` (corollary; **L/A**) — Inherit the abstract compact Fredholm conclusion.
9. `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem` (corollary; **L/A**) — When both the operator and adjoint homogeneous problems have no obstruction, every $L^2$ datum is solvable.
10. `def-symmetric-elliptic-dirichlet-operator-and-weak-eigenpair` (definition; **L/NA**) — Include coefficient symmetry, a real potential, homogeneous boundary condition and $a(u,v)=\lambda(u,v)_2$.
11. `lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint` (lemma; **L/A**) — Verify these properties from the form, rather than assuming the differential expression is self-adjoint.
12. `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` (theorem; **L/A**) — FA-16 applied to $K_\mu$ gives real eigenvalues of finite multiplicity tending to $+\infty$ and an $L^2$ orthonormal eigenbasis.
13. `thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue` (theorem; **L/A**) — $\lambda_1=\min_{u\ne0}a(u,u)/\|u\|_2^2$, with positivity under coercivity.
14. `thm-courant-fischer-minimax-for-elliptic-eigenvalues` (theorem; **L/A**) — Give the $k$-dimensional min--max formula with eigenvalues counted with multiplicity.
15. `cor-poincare-constant-and-first-dirichlet-eigenvalue` (corollary; **L/A**) — For $-\Delta$, the optimal $L^2$ Poincaré constant is $\lambda_1^{-1/2}$.
16. `rem-neumann-spectrum-and-the-constant-zero-mode` (remark; **L/NA**) — State the parallel mean-zero form: $\mu_1=0$ with constants on each connected component; no false positive first eigenvalue.

### B-page companion

1. `ex-dirichlet-laplacian-eigenpairs-on-an-interval` (example; **L/A**) — $\sin(kx)$ and $k^2$ on $(0,\pi)$.
2. `ex-neumann-laplacian-has-a-zero-constant-mode` (example; **L/A**) — Contrast the boundary condition and Poincaré subspace.
3. `ex-shift-removes-a-negative-zero-order-obstruction` (example; **L/A**) — A constant potential shows how Gårding shifting works.
4. `cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue` (counterexample; **L/A**) — $(-\Delta-\lambda_k)u=f$ requires $f\perp$ the eigenspace.
5. `cex-elliptic-eigenvalues-need-not-be-simple` (counterexample; **L/A**) — A square or ball has repeated eigenvalues; item 12 orders with multiplicity.
6. `cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis` (counterexample; **L/A**) — A finite-dimensional form analogue prevents misuse of item 12.

### Sources and proof architecture

**Primary backing:** [H] §§4.6--4.10; [L] Chapter 4 §§4.1--4.4; [T]
Chapter 10 §§1--2; [B] Chapter 9. Rayleigh/min--max statements are cross-checked
against Richard Laugesen, *Spectral Theory of Partial Differential Equations*,
Chapters 4--6 and 9 (<https://arxiv.org/pdf/1203.2344>), source [LS].

**Hard proof obligations.** The shifted inverse is compact only after its
$L^2\to H^1_0$ estimate and the Rellich inclusion are composed. Item 7 names
the adjoint kernel supplied by item 6. The eigenvalue theorem applies FA-16
once to the compact shifted inverse and algebraically translates its nonzero
eigenvalues; it does not build an eigenbasis by repeated arbitrary choices.

**Well-definedness.** $K_\mu$ is first a map into $H^1_0$ and then regarded on
$L^2$ through the inclusion; those are distinct maps. Orthogonality is in
$L^2$. Eigenfunctions are equivalence classes normalized in $L^2$, and an
eigenvalue is repeated according to its finite eigenspace dimension.

---

## PDE-18. Interior and Boundary Sobolev Elliptic Regularity

**A page:** `interior-and-boundary-sobolev-elliptic-regularity`  
**B page:** `interior-and-boundary-sobolev-elliptic-regularity-examples`  
**Requires:** PDE-11--PDE-17; MT-14--MT-15; FA-10; PDE-5's Green identities.

### A-page items, in dependency order

1. `def-first-difference-quotient` (definition; **L/NA**) — Define $\delta_h^iu(x)=(u(x+he_i)-u(x))/h$ on the shrunken domain where both terms exist.
2. `lem-difference-quotient-integration-by-parts` (lemma; **L/A**) — For compactly supported factors, $\int f\delta_h^ig=-\int g\delta_{-h}^if$.
3. `thm-difference-quotient-characterisation-of-w-one-p` (theorem; **L/A**) — Uniform local $L^p$ bounds of difference quotients imply a weak derivative, and Sobolev functions satisfy the matching bounds.
4. `thm-caccioppoli-inequality-for-weak-elliptic-solutions` (theorem; **L/A**) — Test with $\eta^2u$ to bound $Du$ on an inner ball by $u$ and the forcing on a larger ball.
5. `lem-tangential-difference-quotient-test-function` (lemma; **L/A**) — Justify testing the weak equation with $-\delta_{-h}(\eta^2\delta_hu)$ and control every commutator.
6. `thm-interior-h-two-regularity-for-divergence-form-equations` (theorem; **L/A**) — With $a^{ij}\in W^{1,\infty}_{\rm loc}$ and $f\in L^2_{\rm loc}$, weak $H^1$ solutions lie in $H^2_{\rm loc}$ with an interior estimate.
7. `thm-interior-h-k-plus-two-elliptic-regularity` (theorem; **L/A**) — If coefficients have the stated $W^{k+1,\infty}$ regularity and $f\in H^k_{\rm loc}$, then $u\in H^{k+2}_{\rm loc}$.
8. `cor-smooth-data-give-smooth-interior-solutions` (corollary; **L/A**) — Bootstrap item 7 on nested compact subsets.
9. `lem-c-two-boundary-flattening-transforms-uniform-ellipticity` (lemma; **L/A**) — A $C^2$ graph chart preserves divergence form and quantitative ellipticity, with transformed coefficients written explicitly.
10. `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` (lemma; **L/A**) — Zero trace permits tangential difference quotients without crossing the boundary.
11. `lem-normal-second-derivative-recovered-from-the-elliptic-equation` (lemma; **L/A**) — Solve the transformed equation for $D_{nn}u$ using the positive normal coefficient and already controlled derivatives.
12. `thm-global-h-two-dirichlet-regularity` (theorem; **L/A**) — On a bounded $C^2$ domain with Lipschitz coefficients, $f\in L^2$ and $u\in H^1_0$ imply $u\in H^2$ and $\|u\|_{H^2}\le C(\|f\|_2+\|u\|_2)$.
13. `cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness` (corollary; **L/A**) — A contradiction/compactness argument removes $\|u\|_2$ when the homogeneous problem has trivial kernel.
14. `thm-higher-order-boundary-regularity-for-dirichlet-problems` (theorem; **L/A**) — With $C^{k+2}$ boundary and coefficients/data of the stated order, obtain $H^{k+2}$ regularity up to the boundary.
15. `cor-smooth-weak-dirichlet-solutions-are-classical` (corollary; **L/A**) — After enough Sobolev bootstrapping and embedding, the weak equation agrees pointwise with the classical one.
16. `rem-regularity-estimates-do-not-create-boundary-compatibility` (remark; **L/NA**) — Higher regularity needs compatible traces/data; smooth coefficients alone are insufficient.

### B-page companion

1. `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` (example; **L/A**) — Apply item 6 to the constant-coefficient Laplacian.
2. `ex-piecewise-smooth-coefficient-produces-limited-regularity` (example; **L/A**) — A one-dimensional flux-continuity solution loses a classical second derivative at a coefficient jump.
3. `cex-interior-regularity-does-not-imply-boundary-regularity` (counterexample; **L/A**) — A harmonic function on a nonsmooth corner domain has a boundary singularity.
4. `cex-boundary-h-two-regularity-needs-domain-regularity` (counterexample; **L/A**) — A reentrant sector supplies the standard singular exponent.
5. `cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity` (counterexample; **L/A**) — A homogeneous eigenfunction defeats an estimate containing only $\|Lu\|_2$.
6. `ex-bootstrapping-a-smooth-poisson-problem` (example; **L/A**) — Iterate item 7 and then use Sobolev embedding.

### Sources and proof architecture

**Primary backing:** [H] §§4.11--4.12 and Appendix 4.C; [L] Chapter 5
§§5.1--5.2; [ACM] Chapter 2 §§2.1--2.5; [E] §6.3.1; [T] Chapter 10 §3.

**Hard proof obligations.** The central proof is split into Caccioppoli,
difference-quotient integration by parts, commutator control and weak-limit
identification. At the boundary, tangential derivatives come first and the
equation recovers only the last normal derivative. Item 13 identifies the
compactness theorem and homogeneous uniqueness used in the contradiction.

**Well-definedness.** Difference quotients are only defined on shrunken sets;
extensions across a Dirichlet boundary occur only after the trace condition is
used. Coordinate changes act on Sobolev classes by the proved chart lemma. A
pointwise classical representative is claimed only after embedding supplies it.

---

## PDE-19. Schauder and $L^p$ Elliptic Estimates

**A page:** `schauder-and-lp-elliptic-estimates`  
**B page:** `schauder-and-lp-elliptic-estimates-examples`  
**Requires:** PDE-5--PDE-6 and PDE-11--PDE-18; MT-17, including its
Marcinkiewicz interpolation theorem; FA-6 and FA-25; the published
Hölder-function definitions.

### A-page items, in dependency order

1. `def-holder-spaces-c-k-alpha-and-their-scaled-norms` (definition; **L/NA**) — Define $C^{k,\alpha}(\Omega)$ and interior scaled norms, separating open-domain local and closure norms.
2. `thm-holder-spaces-on-bounded-domains-are-banach-spaces` (theorem; **L/A**) — A Cauchy sequence and each derivative converge uniformly and retain the Hölder estimate.
3. `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials` (lemma; **L/A**) — Express $D_{ij}Nf$ by a principal-value/cancelled integral plus the local multiple of $f(x)$.
4. `thm-interior-schauder-estimate-for-the-laplacian` (theorem; **L/A**) — If $-\Delta u=f\in C^{0,\alpha}$, then $\|u\|_{C^{2,\alpha}(B_r)}\le C(\|u\|_{C^0(B_R)}+\|f\|_{C^{0,\alpha}(B_R)})$ with scaling.
5. `lem-freezing-coefficients-and-schauder-error-estimate` (lemma; **L/A**) — Freeze a uniformly elliptic nondivergence operator and make the coefficient oscillation absorbable on a small ball.
6. `thm-interior-schauder-estimate-for-uniformly-elliptic-equations` (theorem; **L/A**) — For $a^{ij}\in C^{0,\alpha}$ and lower coefficients/data in their stated classes, obtain the local $C^{2,\alpha}$ estimate.
7. `thm-boundary-schauder-estimate-for-the-dirichlet-problem` (theorem; **L/A**) — On a $C^{2,\alpha}$ boundary patch with compatible $C^{2,\alpha}$ data, flatten and estimate up to the boundary.
8. `thm-global-schauder-estimate-and-classical-dirichlet-solvability` (theorem; **L/A**) — Combine the a priori estimate with the continuity method and a base Laplace problem, under an explicit maximum-principle injectivity hypothesis.
9. `def-calderon-zygmund-kernel-and-principal-value-operator` (definition; **L/NA**) — Define the size, smoothness and spherical-cancellation conditions and truncated principal values.
10. `lem-calderon-zygmund-decomposition-at-height-lambda` (lemma; **L/A**) — Decompose an $L^1$ function into good and mean-zero bad pieces on disjoint cubes.
11. `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp` (theorem; **L/A**) — Combine $L^2$ boundedness, weak type $(1,1)$ and MT-17's Marcinkiewicz interpolation, then duality, for $1<p<\infty$.
12. `thm-global-w-two-p-estimate-for-the-laplacian-on-rn` (theorem; **L/A**) — Fourier/second-derivative kernels give $\|D^2u\|_p\le C_p\|\Delta u\|_p$ for $u\in C_c^\infty$.
13. `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` (theorem; **L/A**) — Localise and freeze coefficients in the sourced VMO/continuous regime, with the precise hypothesis used by the proof.
14. `thm-global-w-two-p-dirichlet-estimate` (theorem; **L/A**) — On a $C^{1,1}$ domain with coefficients of the stated regularity, bound $\|u\|_{W^{2,p}}$ by $\|Lu\|_p+\|u\|_p$.
15. `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large` (corollary; **L/A**) — Apply PDE-14's embedding with the exact exponent.
16. `rem-schauder-and-sobolev-estimates-are-different-scales` (remark; **L/NA**) — Neither $C^{2,\alpha}$ nor $W^{2,p}$ is advertised as uniformly stronger without dimension/exponent hypotheses.

### B-page companion

1. `ex-schauder-scaling-on-a-quadratic-poisson-solution` (example; **L/A**) — Check the powers of the ball radius.
2. `cex-continuous-forcing-need-not-give-continuous-second-derivatives` (counterexample; **L/A**) — A Dini/Hölder failure example shows why a modulus hypothesis appears.
3. `cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one` (counterexample; **L/A**) — Use the standard Zygmund-type obstruction with a source citation.
4. `ex-riesz-transform-formula-for-second-laplacian-derivatives` (example; **L/A**) — Relate $D_{ij}u$ to the multiplier $\xi_i\xi_j/|\xi|^2$ using FA-25.
5. `cex-calderon-zygmund-strong-lone-bound-fails` (counterexample; **L/A**) — The Hilbert/Riesz transform of an indicator gives the endpoint obstruction.
6. `cex-boundary-w-two-p-regularity-needs-c-one-one-type-control` (counterexample; **L/A**) — A corner domain loses $W^{2,p}$ regularity.
7. `ex-method-of-continuity-for-a-constant-coefficient-path` (example; **L/A**) — Verify openness/closedness in a finite transparent family without carrying the theorem.

### Sources and proof architecture

**Primary backing:** [E] §§6.2--6.3; [T] Chapter 10 §§3--4; [H] §§2.7--2.8
and §4.13; [ACM] Chapter 2. [H] supplies the singular second-derivative
cancellation, while [E]/[T] independently supply Schauder and $W^{2,p}$
regularity. The Calderón--Zygmund heading is built here because MT-17 has only
the maximal function and the measure scaffold explicitly defers this theorem.

**Hard proof obligations.** Item 3 retains the local $f(x)$ term. Schauder
freezing quantifies the small coefficient oscillation before absorption.
Item 11 is decomposed into the cube decomposition, weak endpoint, $L^2$ bound,
interpolation and duality; none is hidden in “standard singular integral
theory.” Global boundary estimates state chart and coefficient regularity.

**Well-definedness.** Principal values are limits of truncated operators in
$L^p$ (and a.e. only when separately proved), not pointwise improper integrals
by definition. Hölder norms use the unique continuous representative. The
continuity method defines a closed/open set of parameters and proves both
nonemptiness and preservation of the solution space.

---

## PDE-20. Weak Elliptic Maximum Principles and Hölder Regularity

**A page:** `weak-elliptic-maximum-principles-and-holder-regularity`  
**B page:** `weak-elliptic-maximum-principles-and-holder-regularity-examples`  
**Requires:** PDE-11--PDE-19; MT-8, MT-11 and MT-17; FA-10.

### A-page items, in dependency order

1. `def-weak-subsolution-and-supersolution-of-a-divergence-form-equation` (definition; **L/NA**) — State the variational inequality against nonnegative $C_c^\infty$/$H^1_0$ tests with a fixed sign convention.
2. `lem-positive-part-is-an-admissible-weak-test-by-truncation` (lemma; **L/A**) — PDE-11's chain rule justifies $(u-k)^+$ and its cutoff variants as tests.
3. `thm-weak-maximum-principle-for-coercive-divergence-form-equations` (theorem; **L/A**) — Under the exact lower-order sign condition, a weak subsolution has essential supremum controlled by its positive boundary trace and forcing.
4. `cor-weak-comparison-and-uniqueness` (corollary; **L/A**) — Apply item 3 to the difference of a sub- and supersolution.
5. `lem-caccioppoli-inequality-for-truncated-subsolutions` (lemma; **L/A**) — Test with $\eta^2(u-k)^+$ and retain level-set terms.
6. `lem-sobolev-level-set-iteration-step` (lemma; **L/A**) — Combine Caccioppoli and Sobolev to relate nested superlevel measures.
7. `thm-de-giorgi-local-boundedness` (theorem; **L/A**) — A weak subsolution with locally square-integrable data has an interior essential-supremum estimate in the sourced exponent regime.
8. `lem-de-giorgi-oscillation-reduction` (lemma; **L/A**) — On a smaller ball, either the upper or lower half-level set is small enough to reduce oscillation by a fixed factor.
9. `thm-de-giorgi-nash-interior-holder-regularity` (theorem; **L/A**) — Weak solutions of uniformly elliptic divergence-form equations with bounded measurable principal coefficients have locally Hölder continuous representatives.
10. `lem-moser-iteration-for-positive-supersolutions` (lemma; **L/A**) — Test powers/truncations and iterate reverse Hölder estimates without assuming the solution is bounded away from zero.
11. `thm-weak-harnack-inequality-for-nonnegative-supersolutions` (theorem; **L/A**) — Control an inner $L^q$ mean by the infimum plus the forcing term.
12. `thm-harnack-inequality-for-nonnegative-weak-solutions` (theorem; **L/A**) — Combine local boundedness and weak Harnack to compare essential supremum and infimum on a smaller ball.
13. `cor-strong-maximum-principle-for-weak-elliptic-solutions` (corollary; **L/A**) — A nonnegative weak solution vanishing at one point of its Hölder representative vanishes on the connected domain.
14. `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems` (remark; **L/NA**) — Record the scalar hypothesis and the distinct Legendre--Hadamard/system theory.

### B-page companion

1. `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions` (example; **L/A**) — Translate the test inequality by integration by parts.
2. `ex-measurable-coefficients-with-a-holder-regular-weak-solution` (example; **L/A**) — A piecewise constant radial coefficient illustrates regularity without coefficient continuity.
3. `cex-weak-maximum-principle-needs-the-zero-order-sign` (counterexample; **L/A**) — An eigenfunction for an operator with adverse potential defeats comparison.
4. `cex-harnack-requires-nonnegativity` (counterexample; **L/A**) — A sign-changing harmonic affine function has zero/negative infimum.
5. `ex-oscillation-decay-implies-a-holder-modulus` (example; **L/A**) — Work the geometric iteration algebra explicitly.

### Sources and proof architecture

**Primary backing:** [E] §§6.2.1 and 6.3.2; [T] Chapter 5 §8 and Chapter 10
§§2--3; [S] Chapter 2 §§II.1--II.2; [ACM] Chapter 2's Caccioppoli/decay
estimates. The build must re-open the exact theorem ranges before authoring and
retain scalar, coefficient and data exponents; Gilbarg--Trudinger may be used
as an additional print reference, not as the only accessible source.

**Hard proof obligations.** The page is deliberately split into named
iteration lemmas so “by De Giorgi iteration” cannot hide the level-set
recurrence. Moser's negative-power tests are regularised by $u+\varepsilon$ and
the limit justified. Harnack operates on the Hölder representative created in
item 9 when a pointwise conclusion is stated.

**Well-definedness.** Essential extrema are used before regularity creates a
continuous representative. Weak boundary inequalities mean the positive part
has zero trace. Every nonlinear test is obtained by Lipschitz truncation and
density; it is not inserted formally into a distributional equation.

---

## PDE-21. The Direct Method and Euler--Lagrange Equations

**A page:** `the-direct-method-and-euler-lagrange-equations`  
**B page:** `the-direct-method-and-euler-lagrange-equations-examples`  
**Requires:** PDE-14--PDE-16 and PDE-18; MT-8/MT-11/MT-14; FA-7--FA-10 and
FA-12; the published convexity and multivariable Taylor pages.

### A-page items, in dependency order

1. `def-proper-coercive-and-weakly-lower-semicontinuous-functional` (definition; **L/NA**) — Define these notions for extended-real functionals on a Banach space and a specified admissible set.
2. `lem-norm-closed-convex-sets-are-weakly-closed` (lemma; **L/A**) — Use geometric Hahn--Banach separation from FA-5.
3. `lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous` (lemma; **L/A**) — Separate strict sublevel sets and pass to weak limits.
4. `thm-direct-method-in-a-reflexive-banach-space` (theorem; **L/A**) — A proper coercive weakly l.s.c. functional on a nonempty weakly closed set attains its infimum.
5. `cor-strict-convexity-gives-uniqueness-of-a-minimiser` (corollary; **L/A**) — On a convex admissible set, two distinct minimisers contradict strict convexity.
6. `def-gateaux-and-frechet-derivatives-of-a-functional` (definition; **L/NA**) — Define directional and uniform linear first derivatives and their relation.
7. `lem-differentiation-of-an-integral-functional` (lemma; **L/A**) — Under explicit growth domination, differentiate $I(u)=\int F(x,u,Du)$ along admissible Sobolev variations.
8. `thm-first-variation-vanishes-at-an-interior-minimiser` (theorem; **L/A**) — Both signs of a variation force $DI(u)[v]=0$.
9. `thm-weak-euler-lagrange-equation-for-integral-functionals` (theorem; **L/A**) — For fixed trace, derive $\int(F_z\cdot D\phi+F_s\phi)=0$ for every $\phi\in C_c^\infty$.
10. `cor-classical-euler-lagrange-equation-under-regularity` (corollary; **L/A**) — When the derivatives are classical, integration by parts gives $-\operatorname{div}F_z+F_s=0$ pointwise.
11. `thm-natural-boundary-condition-for-free-boundary-variations` (theorem; **L/A**) — Retaining the boundary term gives $F_z\cdot\nu=0$ under the stated smoothness.
12. `thm-direct-method-for-convex-integral-functionals` (theorem; **L/A**) — Convexity in the gradient, coercive growth and the stated measurability/continuity hypotheses give a Sobolev minimiser.
13. `thm-dirichlet-principle-for-poisson-equation` (theorem; **L/A**) — The unique minimiser of $\frac12\int|Du|^2-\langle f,u\rangle$ in an affine trace class is exactly the weak Poisson solution.
14. `cor-minimisers-are-classical-when-elliptic-regularity-applies` (corollary; **L/A**) — Cite PDE-18/19 with their hypotheses; variational existence alone does not imply smoothness.
15. `rem-euler-lagrange-is-necessary-not-sufficient-without-convexity` (remark; **L/NA**) — Separate stationary points, local minimisers and global minimisers.

### B-page companion

1. `ex-dirichlet-energy-with-affine-boundary-data` (example; **L/A**) — The harmonic affine extension minimises energy.
2. `ex-one-dimensional-euler-lagrange-equation` (example; **L/A**) — Compute the equation for $\int((u')^2+V(u))$.
3. `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity` (counterexample; **L/A**) — Give a standard infinite-dimensional example.
4. `cex-a-minimising-sequence-need-not-converge-strongly` (counterexample; **L/A**) — An orthonormal sequence motivates weak compactness.
5. `cex-euler-lagrange-stationarity-does-not-imply-a-minimum` (counterexample; **L/A**) — A concave quadratic functional.
6. `cex-nonstrict-convexity-allows-many-minimisers` (counterexample; **L/A**) — A seminorm/flat direction example.
7. `ex-natural-neumann-condition-from-a-free-endpoint` (example; **L/A**) — Work the retained boundary term in one dimension.

### Sources and proof architecture

**Primary backing:** [T] Chapter 13 §§1--2; [E] §§8.1--8.2; [ACM] Chapter 1
§§1.4--1.5; [B] Chapters 8--9. Riccardo Cristoferi, *Calculus of Variations:
Lecture Notes*, Chapter 4 §§4.1--4.5
(<https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf>),
source [CV], independently checks first variations and boundary conditions.

**Hard proof obligations.** Item 4 lists all four direct-method gates rather
than hiding weak closure. Item 7 proves a single integrable dominator for the
difference quotients. Item 12 states a sourced lower-semicontinuity theorem;
quasiconvex vectorial extensions are not smuggled into a scalar convex result.

**Well-definedness.** The infimum may be $+\infty$ until properness and a finite
competitor are supplied. The minimizing sequence is selected by an explicit
least-index convention from a fixed countable dense candidate family when
available; otherwise its AC$_\omega$ cost is recorded in §8. Functionals are
defined on a.e. classes by proving integral invariance.

---

## PDE-22. Constrained Variational Problems and Variational Inequalities

**A page:** `constrained-variational-problems-and-variational-inequalities`  
**B page:** `constrained-variational-problems-and-variational-inequalities-examples`  
**Requires:** PDE-15--PDE-17 and PDE-21; FA-5, FA-7--FA-10 and FA-13.

### A-page items, in dependency order

1. `thm-direct-method-on-a-weakly-closed-constraint-set` (theorem; **L/A**) — Restate the direct method only as an application with nonemptiness and weak closure verified per constraint.
2. `lem-strong-ltwo-compactness-preserves-unit-normalisation` (lemma; **L/A**) — Weak $H^1$ convergence plus Rellich gives $\|u\|_2=1$ in the limit.
3. `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` (theorem; **L/A**) — If $DG(u)\ne0$, a constrained critical point satisfies $DI(u)=\lambda DG(u)$.
4. `thm-finite-regular-constraint-lagrange-multiplier-rule` (theorem; **L/A**) — Surjectivity of the derivative of $G:X\to\mathbb R^m$ yields a multiplier vector.
5. `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` (theorem; **L/A**) — Minimise Dirichlet energy on the $L^2$ unit sphere and derive $-\Delta u=\lambda_1u$ weakly.
6. `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` (theorem; **L/A**) — Minimise on the unit sphere orthogonal to the first eigenspaces and reconcile with PDE-17's min--max theorem.
7. `def-closed-convex-obstacle-set-and-variational-inequality` (definition; **L/NA**) — For obstacle $\psi$ and trace data define $K=\{v:v\ge\psi\text{ a.e.}\}$ and $a(u,v-u)\ge F(v-u)$.
8. `lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed` (lemma; **L/A**) — Use a.e. subsequences/closed convexity with exact data compatibility.
9. `thm-stampacchia-variational-inequality` (theorem; **L/A**) — A bounded coercive form on a nonempty closed convex Hilbert subset has a unique solution in the symmetric/strongly monotone setting stated.
10. `thm-existence-and-uniqueness-for-the-obstacle-problem` (theorem; **L/A**) — Apply item 9 and identify the solution as the energy minimiser when the form is symmetric.
11. `cor-obstacle-complementarity-in-distribution-form` (corollary; **L/A**) — Under regularity, $u\ge\psi$, $Lu-f\ge0$ and $(u-\psi)(Lu-f)=0$ in the precise measure/distribution sense supported by the hypotheses.
12. `rem-pointwise-and-integral-constraints-have-different-regularity-tests` (remark; **L/NA**) — Do not apply the smooth equality-constraint multiplier theorem to a convex inequality set.

### B-page companion

1. `ex-rayleigh-quotient-on-an-interval` (example; **L/A**) — Recover the first sine eigenfunction.
2. `ex-isoperimetric-integral-constraint-and-its-multiplier` (example; **L/A**) — Derive a constant multiplier in a one-dimensional fixed-endpoint problem.
3. `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space` (counterexample; **L/A**) — An orthonormal sequence converges weakly to zero; Rellich is the repair in item 2.
4. `ex-one-dimensional-obstacle-problem-and-contact-set` (example; **L/A**) — Compute a piecewise affine/quadratic minimiser and its active set.
5. `cex-obstacle-complementarity-product-needs-extra-regularity` (counterexample; **L/A**) — Warn that a general distribution cannot be multiplied by an arbitrary Sobolev class.

The B page links the already-published
`cex-lagrange-multiplier-rule-needs-a-regular-constraint` for the degenerate
constraint counterexample; it does not mint a second copy.

### Sources and proof architecture

**Primary backing:** [T] Chapter 13 §3; [E] §§8.3--8.4; [CV] Chapter 7;
[ACM] Chapter 1; [LS] Chapter 9. The obstacle inequality is independently
backed by [B]'s convex-projection/variational material and standard Stampacchia
formulations.

**Hard proof obligations.** The unit sphere's weak-closure failure is not
ignored: Rellich supplies strong $L^2$ convergence. The multiplier theorem
uses the implicit-function theorem on the regular constraint. The obstacle
proof uses projection/strict convexity, not a fictitious differentiable
multiplier field. The regularity hypothesis is also stress-tested by the
published counterexample named above.

**Well-definedness.** Inequalities such as $u\ge\psi$ are a.e. statements and
are representative-independent. Orthogonality constraints live in $L^2$.
Complementarity is phrased through duality or a Radon measure unless PDE-19
has supplied enough regularity for a pointwise product.

---

## PDE-23. Strongly Continuous Semigroups and Hille--Yosida

**A page:** `strongly-continuous-semigroups-and-hille-yosida`  
**B page:** `strongly-continuous-semigroups-and-hille-yosida-examples`  
**Requires:** FA-1--FA-2, FA-6--FA-7, FA-10, FA-12 and FA-21; MT-8; the
published Banach fixed-point and exponential-series results.

### A-page items, in dependency order

1. `def-strongly-continuous-semigroup` (definition; **L/NA**) — Define $T(0)=I$, $T(t+s)=T(t)T(s)$ and strong continuity for $t\ge0$, distinct from operator-norm continuity.
2. `lem-strong-continuity-at-zero-implies-orbit-continuity` (lemma; **L/A**) — Semigroup multiplication transports continuity to every time.
3. `thm-exponential-bound-for-a-c-zero-semigroup` (theorem; **L/A**) — Uniform boundedness on a compact time interval plus iteration gives $\|T(t)\|\le Me^{\omega t}$.
4. `def-infinitesimal-generator-of-a-c-zero-semigroup` (definition; **L/NA**) — Define $Ax=\lim_{t\downarrow0}(T(t)x-x)/t$ on its domain.
5. `lem-semigroup-generator-commutes-with-orbits-on-its-domain` (lemma; **L/A**) — $T(t)D(A)\subseteq D(A)$ and $AT(t)x=T(t)Ax=dT(t)x/dt$.
6. `lem-integrated-semigroup-orbits-belong-to-the-generator-domain` (lemma; **L/A**) — $\int_0^tT(s)xds\in D(A)$ and $A$ of it is $T(t)x-x$.
7. `thm-generators-are-closed-and-densely-defined` (theorem; **L/A**) — Closedness follows from item 6; explicit time averages approximate every $x$ and lie in $D(A)$.
8. `def-resolvent-of-a-closed-operator` (definition; **L/NA**) — Cite FA-21's operator domain vocabulary and define $R(\lambda,A)=(\lambda I-A)^{-1}$ on the resolvent set.
9. `thm-laplace-transform-formula-for-the-semigroup-resolvent` (theorem; **L/A**) — For $\operatorname{Re}\lambda>\omega$, the Bochner integral of $e^{-\lambda t}T(t)x$ equals $R(\lambda,A)x$.
10. `cor-resolvent-power-estimates-for-semigroup-generators` (corollary; **L/A**) — Derivatives/convolution give $\|R(\lambda,A)^m\|\le M(\lambda-\omega)^{-m}$ for real $\lambda>\omega$.
11. `def-yosida-approximants` (definition; **L/NA**) — Define $A_\lambda=\lambda AR(\lambda,A)=\lambda^2R(\lambda,A)-\lambda I$.
12. `lem-yosida-approximants-are-bounded-and-converge-on-the-domain` (lemma; **L/A**) — $A_\lambda x\to Ax$ for $x\in D(A)$ and $\lambda R(\lambda,A)x\to x$.
13. `thm-hille-yosida-generation-theorem` (theorem; **L/A**) — A closed densely defined $A$ generates a semigroup of type $(M,\omega)$ iff the half-line resolvent and **all power estimates** in item 10 hold.
14. `cor-contraction-hille-yosida-theorem` (corollary; **L/A**) — For $M=1,\omega=0$, the first resolvent estimate implies its powers and suffices.
15. `def-dissipative-operator` (definition; **L/NA**) — Give the norm-duality and Hilbert real-part forms with their equivalence in the Hilbert case.
16. `thm-lumer-phillips-generation-theorem` (theorem; **L/A**) — A densely defined dissipative operator with $\operatorname{Ran}(\lambda I-A)=X$ for some/all $\lambda>0$ generates a contraction semigroup.
17. `def-classical-strong-and-mild-abstract-cauchy-solutions` (definition; **L/NA**) — Separate differentiability/domain solutions from integrated and variation-of-constants solutions.
18. `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation` (theorem; **L/A**) — State the exact continuous-dependence topology and equivalence.
19. `thm-variation-of-constants-formula` (theorem; **L/A**) — $u(t)=T(t)x+\int_0^tT(t-s)f(s)ds$ is the unique mild solution; give hypotheses upgrading it to classical.
20. `rem-semigroup-sign-and-generator-conventions` (remark; **L/NA**) — This track writes $u'=Au$ and heat uses $A=\Delta_D$; sources writing $u'+Bu=0$ use $B=-A$.

### B-page companion

1. `ex-bounded-operator-exponential-semigroup` (example; **L/A**) — $e^{tA}$ is norm-continuous and has generator $A$.
2. `ex-right-translation-semigroup-on-lp` (example; **L/A**) — Determine its weak derivative generator and boundary/domain condition.
3. `ex-multiplication-semigroup-and-its-generator` (example; **L/A**) — Pointwise $e^{tq}$ gives an unbounded multiplication generator under exact bounds.
4. `ex-dirichlet-heat-semigroup-from-the-laplacian` (example; **L/A**) — Use PDE-17 and Lumer--Phillips to identify the abstract heat flow.
5. `cex-strong-continuity-does-not-imply-operator-norm-continuity` (counterexample; **L/A**) — Translation on $L^p$.
6. `cex-a-mild-solution-need-not-be-classical` (counterexample; **L/A**) — Initial data outside $D(A)$.

### Sources and proof architecture

**Primary backing:** Klaus-Jochen Engel and Rainer Nagel, *One-Parameter
Semigroups for Linear Evolution Equations*, I.5, II.1--II.4 and II.6
(<https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf>),
source [EN]; [B] Chapter 7; [J] §§1--3 and Appendix §5; [T] Chapter 11 §§1--4.

**Hard proof obligations.** The general generation theorem retains every
resolvent power; the contraction shortcut is isolated in item 14. Bochner
integrability in items 6, 9 and 19 comes from FA-12. The sufficiency proof uses
$e^{tA_\lambda}$, uniform estimates, a Cauchy limit and closedness to identify
the generator.

**Well-definedness.** Generator limits are one-sided. The resolvent inverse is
defined only after bijectivity and boundedness are proved. Mild solutions are
elements of a Banach space defined by a convergent Bochner integral; they are
not assigned derivatives without the upgrade hypotheses.

---

## PDE-24. Analytic Semigroups and Linear Evolution Equations

**A page:** `analytic-semigroups-and-linear-evolution-equations`  
**B page:** `analytic-semigroups-and-linear-evolution-equations-examples`  
**Requires:** PDE-16--PDE-19 and PDE-23; FA-17 and FA-21; complex-analysis's
scalar contour-integration pages. FA-17, not complex analysis, supplies the
Banach-algebra holomorphic functional calculus.

### A-page items, in dependency order

1. `def-complex-sector-and-bounded-analytic-semigroup` (definition; **L/NA**) — Define a holomorphic semigroup on an open sector, bounded on smaller sectors and strongly continuous at the vertex.
2. `def-sectorial-operator-with-the-semigroup-sign-convention` (definition; **L/NA**) — Place the resolvent sector for $-A$ consistently with $e^{tA}$.
3. `thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups` (theorem; **L/A**) — Equate analytic generation with the appropriate sectorial resolvent bound.
4. `lem-contour-definition-of-an-analytic-semigroup` (lemma; **L/A**) — Define $T(z)$ by a Dunford contour integral and prove contour independence and convergence.
5. `thm-analytic-semigroup-smoothing-estimates` (theorem; **L/A**) — For $t>0$, $T(t)X\subset D(A^m)$ and $\|A^mT(t)\|\le C_mt^{-m}$.
6. `cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero` (corollary; **L/A**) — $T'(t)=AT(t)$ for $t>0$, without claiming norm continuity at zero.
7. `thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups` (theorem; **L/A**) — Apply FA spectral calculus with sector angle and sign explicit.
8. `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` (corollary; **L/A**) — PDE-17 verifies self-adjointness/negativity; PDE-18/19 identify its smoothing domains under regularity.
9. `thm-form-generated-sectorial-elliptic-semigroups` (theorem; **L/A**) — A closed sectorial coercive form gives an analytic semigroup for nonsymmetric elliptic operators in the stated Hilbert setting.
10. `thm-maximal-classical-regularity-for-holder-continuous-forcing` (theorem; **L/A**) — For analytic $T$ and compatible data, the variation-of-constants solution is classical with quantified time regularity; no general maximal $L^p$ regularity is claimed.
11. `cor-abstract-parabolic-smoothing` (corollary; **L/A**) — Positive time puts mild solutions into iterated generator domains, with source terms treated by their time regularity.
12. `rem-real-banach-spaces-require-complexification-for-analyticity` (remark; **L/NA**) — Define the real result by restriction of a compatible complexification, not “complex-time holomorphic” over real scalars.

### B-page companion

1. `ex-analytic-semigroup-generated-by-a-bounded-operator` (example; **L/A**) — The exponential is entire but sector boundedness depends on the operator.
2. `ex-analytic-dirichlet-heat-semigroup` (example; **L/A**) — Spectral coefficients exhibit $A^mT(t)$ decay.
3. `ex-sectorial-multiplication-operator` (example; **L/A**) — Compute its resolvent sector pointwise.
4. `cex-the-translation-semigroup-is-not-analytic` (counterexample; **L/A**) — Its range does not enter the generator domain for $t>0$.
5. `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero` (counterexample; **L/A**) — The heat semigroup with unbounded generator.
6. `cex-sector-angle-changes-under-the-sign-convention` (counterexample; **L/A**) — Plot/compute the resolvent sectors for $A$ and $-A$ to prevent a signless citation.

### Sources and proof architecture

**Primary backing:** [EN] II.4.a; Roland Schnaubelt, *Evolution Equations*,
Chapter 2 §§2.1--2.3
(<https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf>),
source [SN]; [T] Chapter 11 §§4--5; [J] §2 only for the nonanalytic baseline.

**Hard proof obligations.** Contour orientation and the location of the
resolvent sector are derived from §2.1's sign. Cauchy's integral estimate gives
item 5. Form generation verifies density, closedness and numerical-range angle;
it is not inferred from the phrase “elliptic operator.”

**Well-definedness.** The contour integral is a norm-convergent operator-valued
integral and is independent of the admissible contour. Analyticity is on the
open sector; strong continuity, not holomorphy, is asserted at zero. Domains
$D(A^m)$ carry their graph norms.

---

## PDE-25. Hamilton--Jacobi Equations and Viscosity Solutions

**A page:** `hamilton-jacobi-equations-and-viscosity-solutions`  
**B page:** `hamilton-jacobi-equations-and-viscosity-solutions-examples`  
**Requires:** PDE-2 and PDE-7--PDE-8; MT-8 and MT-11; FA-1--FA-2; the
published compactness, semicontinuity, convexity and Legendre--Fenchel items.

This page treats the Cauchy problem
\[
 u_t+H(x,t,Du)=0,\qquad u(\cdot,0)=u_0,
\]
on Euclidean space. It does not smuggle in optimal-control theory: dynamic
programming is proved directly for the Hopf--Lax formula, while value
functions are mentioned only as orientation.

### A-page items, in dependency order

1. `def-hamilton-jacobi-cauchy-problem` (definition; **L/NA**) — Specify the domain, initial trace, Hamiltonian and classical-solution regularity, with the stationary equation as a named specialization.
2. `def-upper-and-lower-semicontinuous-envelopes` (definition; **L/NA**) — Define $u^*$ and $u_*$ by local limsup/liminf and prove that they are the least upper and greatest lower semicontinuous envelopes in the pointwise order.
3. `def-viscosity-subsolution-and-supersolution` (definition; **L/NA**) — For upper semicontinuous $u$, test local maxima of $u-\phi$ and require $\phi_t+H(x,t,D\phi)\le0$; reverse semicontinuity, extrema and inequality for supersolutions.
4. `def-discontinuous-viscosity-solution` (definition; **L/NA**) — Require $u^*$ to be a subsolution and $u_*$ a supersolution; a continuous viscosity solution is the coincident-envelope case.
5. `lem-viscosity-testing-by-first-order-jets` (lemma; **L/A**) — Prove the equivalent superjet/subjet formulation in the first-order setting, including closure only when explicitly invoked.
6. `prop-classical-solutions-are-viscosity-solutions` (proposition; **L/A**) — At a contact point the test function has the same first derivatives as a differentiable solution; conversely a differentiable viscosity solution satisfies the equation pointwise.
7. `prop-maxima-of-subsolutions-and-minima-of-supersolutions` (proposition; **L/A**) — Finite maxima/minima preserve the appropriate inequality for a proper first-order equation; arbitrary envelopes require upper/lower regularisation and a local boundedness hypothesis.
8. `thm-stability-of-viscosity-solutions-under-local-uniform-convergence` (theorem; **L/A**) — Locally uniform limits remain solutions when the Hamiltonians converge locally uniformly.
9. `thm-half-relaxed-limit-stability-for-viscosity-solutions` (theorem; **L/A**) — Upper and lower relaxed limits of locally bounded sub- and supersolutions satisfy the limiting inequalities under the exact liminf/limsup condition on the Hamiltonians.
10. `lem-doubling-variables-maximum-localisation` (lemma; **L/A**) — Penalised maxima of $u(x,t)-v(y,t)-|x-y|^2/(2\varepsilon)$ localise and force $|x-y|^2/\varepsilon\to0$ under bounded uniform continuity.
11. `thm-comparison-for-first-order-hamilton-jacobi-equations` (theorem; **L/A**) — On a compact cylinder, or for bounded uniformly continuous solutions on $\mathbb R^n$, give explicit continuity and spatial Lipschitz hypotheses on $H$ under which subsolution initial data below supersolution initial data imply $u\le v$.
12. `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions` (corollary; **L/A**) — Apply comparison in both directions, including preservation of the initial condition.
13. `thm-perron-method-for-hamilton-jacobi-equations` (theorem; **L/A**) — Between a subsolution and supersolution barrier, the upper envelope of subsolutions has subsolution upper envelope and supersolution lower envelope; comparison makes it continuous and unique.
14. `def-legendre-transform-of-a-hamiltonian` (definition; **L/NA**) — For convex $H(p)$ define $L(v)=\sup_p(p\cdot v-H(p))$ and cite the sibling convex-duality result for biconjugacy rather than re-proving it.
15. `def-hopf-lax-operator` (definition; **L/NA**) — For convex superlinear $H$ and bounded uniformly continuous $u_0$, set $Q_tu_0(x)=\inf_y\{u_0(y)+tL((x-y)/t)\}$ for $t>0$, with $Q_0u_0=u_0$.
16. `lem-hopf-lax-infima-localise` (lemma; **L/A**) — Superlinearity confines near-minimisers to a compact ball depending locally on $(x,t)$; continuity then gives attainment when the hypotheses warrant it.
17. `thm-hopf-lax-dynamic-programming-semigroup` (theorem; **L/A**) — Convexity of $L$ gives $Q_{t+s}=Q_tQ_s$ and the corresponding short-time variational principle.
18. `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` (theorem; **L/A**) — $Q_tu_0$ is the unique bounded uniformly continuous viscosity solution, with the initial trace locally uniform as $t\downarrow0$.
19. `thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations` (theorem; **L/A**) — Under comparison, equiboundedness and an equicontinuity estimate, solutions of $u_t^\varepsilon+H(x,t,Du^\varepsilon)=\varepsilon\Delta u^\varepsilon$ converge locally uniformly to the viscosity solution.
20. `cor-finite-speed-of-dependence-for-lipschitz-hamiltonians` (corollary; **L/A**) — If $H$ is Lipschitz in momentum with constant $L$, comparison on cones shows that data outside $B(x,Lt)$ cannot affect $u(x,t)$.
21. `rem-value-functions-and-hamilton-jacobi-bellman-equations` (remark; **L/NA**) — State the source-cited control interpretation and sign convention without developing admissible controls, measurable selection or dynamic programming for control systems.

### B-page companion

1. `ex-eikonal-equation-as-a-viscosity-equation` (example; **L/A**) — Test distance functions at nondifferentiable ridge points and distinguish $|Du|=1$ from $|Du|\le1$.
2. `ex-quadratic-hopf-lax-formula-and-moreau-envelope` (example; **L/A**) — For $H(p)=|p|^2/2$, compute $L(v)=|v|^2/2$ and the infimal convolution.
3. `ex-hopf-lax-solution-with-a-forming-corner` (example; **L/A**) — Exhibit smooth data whose classical characteristics cross while the viscosity solution remains continuous.
4. `ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense` (example; **L/A**) — Verify that $u(x)=-|x|$ solves $|Du|=1$ in viscosity sense: at the cusp the upper tests satisfy the subsolution inequality and no smooth lower test exists.
5. `ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution` (example; **L/A**) — Compute or estimate a one-dimensional viscous family and its limit.
6. `cex-hopf-lax-without-convex-superlinear-coercivity` (counterexample; **L/A**) — Show separately how nonconvexity breaks the semigroup proof and failure of superlinearity may destroy localisation.
7. `cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality` (counterexample; **G/G**) — A one-variable affine Hamiltonian catches the common subsolution/supersolution sign error; non-load-bearing.

### Sources and proof architecture

**Primary backing:** [BHJ] §§1--5; [CIL] §§2--4 and §6; [E] Chapter 10
§§10.1--10.3; Hung V. Tran's *Hamilton--Jacobi Equations: Theory and
Applications*, Chapters 1--2, source [TR]. [CIL] supplies the stable
semicontinuous-envelope and Perron formulations; [BHJ] and [TR] give an
independent first-order treatment and the Hopf--Lax formula.

**Hard proof obligations.** Comparison cannot be cited as “doubling variables”:
item 10 must produce a genuine maximum (with a coercive penalty on
$\mathbb R^n$), control its escape to infinity and pass the Hamiltonian
difference to zero. Perron's proof separately establishes the subsolution
property of the upper envelope and the supersolution property of its lower
envelope by the bump argument. Vanishing viscosity uses item 9; existence of a
convergent subsequence is not asserted without the stated compactness estimate.

**Well-definedness.** Sub- and supersolutions are actual semicontinuous
functions, not $L^p$ equivalence classes. The value of a test derivative is
independent of adding a locally flat test function because only the contact
jet enters. The Hopf--Lax infimum is an extended-real expression until item 16
proves finiteness and localisation. Half-relaxed limits include both the
sequence index and the space--time point in the limsup/liminf.

---

## PDE-26. Scalar Conservation Laws and Entropy Solutions

**A page:** `scalar-conservation-laws-and-entropy-solutions`  
**B page:** `scalar-conservation-laws-and-entropy-solutions-examples`  
**Requires:** PDE-2, PDE-7--PDE-8 and PDE-25; MT-4, MT-7--MT-11; FA-24's
distributional framework; the published one-dimensional integration and
convexity results.

The core is the scalar Cauchy problem
\[
 u_t+\operatorname{div}f(u)=0,
 \qquad u(\cdot,0)=u_0.
\]
The multidimensional weak and Kruzhkov formulations are stated, while explicit
Riemann solvers are one-dimensional. Systems, compensated compactness and BV
wave interaction belong to later hyperbolic-systems work.

### A-page items, in dependency order

1. `def-scalar-conservation-law-and-flux` (definition; **L/NA**) — Fix $f:\mathbb R\to\mathbb R^n$, distinguish conservation form from a nonconservative quasilinear equation and state the Cauchy data class.
2. `def-distributional-weak-solution-of-a-scalar-conservation-law` (definition; **L/NA**) — Require the space--time integral identity with the initial term for every compactly supported smooth test function touching $t=0$.
3. `prop-classical-solutions-satisfy-the-weak-conservation-law` (proposition; **L/A**) — Integrate by parts; conversely recover the PDE pointwise for a $C^1$ weak solution.
4. `prop-characteristics-for-a-one-dimensional-scalar-conservation-law` (proposition; **L/A**) — While $u$ is $C^1$, it is constant along $x'=f'(u)$ and its spatial derivative obeys the Riccati formula that predicts gradient blow-up.
5. `def-piecewise-smooth-shock-and-one-sided-traces` (definition; **L/NA**) — Define a Lipschitz shock curve and genuine traces $u^-,u^+$ only in the piecewise-smooth setting.
6. `thm-rankine-hugoniot-jump-condition` (theorem; **L/A**) — A piecewise $C^1$ weak solution satisfies $s'(t)(u^+-u^-)=f(u^+)-f(u^-)$ across the shock; the vector normal form is stated in space--time.
7. `prop-distributional-weak-solutions-are-not-unique` (proposition; **L/A**) — The convex-flux Riemann problem admits an expansion shock as a weak solution in addition to the rarefaction.
8. `def-convex-entropy-entropy-flux-pair` (definition; **L/NA**) — For convex $\eta$, define $q$ up to an additive constant by $q'=\eta'f'$ and state the distributional inequality $\eta(u)_t+\operatorname{div}q(u)\le0$.
9. `prop-viscous-entropy-dissipation-identity` (proposition; **L/A**) — Smooth solutions of $u_t^\varepsilon+\operatorname{div}f(u^\varepsilon)=\varepsilon\Delta u^\varepsilon$ satisfy the entropy balance with nonpositive term $-\varepsilon\eta''(u^\varepsilon)|Du^\varepsilon|^2$.
10. `def-kruzhkov-entropy-solution` (definition; **L/NA**) — Use $\eta_k(u)=|u-k|$ and $q_k(u)=\operatorname{sgn}(u-k)(f(u)-f(k))$, the full test-function inequality and the strong $L^1_{\mathrm{loc}}$ initial trace.
11. `lem-kato-inequality-for-two-entropy-solutions` (lemma; **L/A**) — Doubling variables yields the distributional inequality for $|u-v|$ and its signed flux.
12. `thm-kruzhkov-local-l1-contraction` (theorem; **L/A**) — For bounded entropy solutions and Lipschitz flux on their common range, the $L^1$ distance on a ball at time $t$ is controlled by the initial distance on the enlarged backward cone.
13. `cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions` (corollary; **L/A**) — Derive uniqueness, positive-part contraction and monotonicity from item 12.
14. `cor-finite-propagation-for-scalar-conservation-laws` (corollary; **L/A**) — Compactly supported perturbations propagate no faster than $\sup|f'|$ on the relevant range.
15. `thm-existence-of-bounded-kruzhkov-entropy-solutions` (theorem; **L/A**) — For $u_0\in L^1\cap L^\infty$ and sufficiently smooth flux, vanishing viscosity plus compactness produces an entropy solution attaining its initial trace.
16. `def-self-similar-riemann-problem` (definition; **L/NA**) — Set two constant states and formulate solutions as functions of $x/t$ for $t>0$.
17. `thm-riemann-solver-for-strictly-convex-scalar-flux` (theorem; **L/A**) — A decreasing jump gives the Rankine--Hugoniot shock and an increasing jump gives the centred rarefaction $(f')^{-1}(x/t)$, with constant outer states.
18. `thm-oleinik-one-sided-entropy-condition` (theorem; **L/A**) — For uniformly convex one-dimensional flux, state the one-sided slope estimate and its equivalence to Kruzhkov admissibility in the bounded solution class covered by the source.
19. `cor-lax-shock-inequalities-for-convex-scalar-laws` (corollary; **L/A**) — The chord slope lies between the characteristic speeds on the two sides of an admissible shock.
20. `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension` (theorem; **L/A**) — If a Lipschitz viscosity solution $U$ solves $U_t+f(U_x)=0$, then $u=U_x$ a.e. is the Kruzhkov solution; conversely an entropy solution has a normalised spatial primitive that is the viscosity solution, under the source's integrability hypotheses.
21. `thm-entropy-solution-semigroup-on-l1` (theorem; **L/A**) — The solution operators form an order-preserving $L^1$ contraction semigroup on $L^1\cap L^\infty$, extended to $L^1$ when the flux normalisation permits.

### B-page companion

1. `ex-burgers-shock-riemann-solution` (example; **L/A**) — Compute the speed $(u_L+u_R)/2$ when $u_L>u_R$.
2. `ex-burgers-rarefaction-riemann-solution` (example; **L/A**) — Compute the fan for $u_L<u_R$ and verify its initial trace.
3. `ex-gradient-catastrophe-before-shock-formation` (example; **L/A**) — Use the characteristic derivative formula to locate the first breakdown time.
4. `ex-rankine-hugoniot-in-space-time-normal-form` (example; **L/A**) — Check a planar multidimensional discontinuity without illicitly dividing by a zero jump.
5. `ex-kruzhkov-entropy-inequality-for-a-shock` (example; **L/A**) — Reduce the distributional inequality to the convex chord condition.
6. `ex-hamilton-jacobi-primitive-of-a-burgers-solution` (example; **L/A**) — Differentiate a Hopf--Lax solution a.e. and identify its shock and rarefaction regions.
7. `cex-expansion-shock-is-weak-but-not-entropic` (counterexample; **L/A**) — Verify Rankine--Hugoniot and then violate a Kruzhkov entropy inequality.
8. `cex-rankine-hugoniot-alone-does-not-give-uniqueness` (counterexample; **L/A**) — Compare the weak expansion shock with the entropy rarefaction for the same data.
9. `cex-pointwise-shock-values-do-not-affect-the-weak-solution` (counterexample; **G/G**) — Changing values on the shock curve leaves the $L^1_{\rm loc}$ class unchanged; this directly checked example is non-load-bearing.
10. `cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux` (counterexample; **L/A**) — A source-derived flux requires a composite wave, marking the exact boundary of item 17.

### Sources and proof architecture

**Primary backing:** S. N. Kruzhkov, “First order quasilinear equations in
several independent variables,” source [KR], §§1--5; [BCL] §§1--3 and the
scalar parts of §§5--8; [E] Chapter 3 §3.4. The primary uniqueness statement
is checked against Kruzhkov's original hypotheses; the illustrated notes and
[E] supply independent textbook and full-note treatments.

**Hard proof obligations.** Item 11 must display both space and time
mollifiers, the diagonal limit and the boundary contribution at $t=0$; the
contraction theorem is local unless global integrability justifies sending the
ball radius to infinity. Existence records where parabolic estimates,
translation compactness and the entropy dissipation enter. The
Hamilton--Jacobi bridge uses an a.e. derivative of a Lipschitz primitive and
never identifies point values on shock curves.

**Well-definedness.** $u$ and $f(u)$ are locally integrable equivalence
classes, and the initial condition is the strong local $L^1$ trace, not a
pointwise assignment at $t=0$. Adding a constant to $q$ does not change its
distributional divergence. Set $\operatorname{sgn}(0)=0$ in the displayed
Kruzhkov flux (the product itself is independent of that convention). Strong
traces are invoked only where they have been proved or are part of the
piecewise-smooth hypothesis. A primitive in item 20 is fixed by an explicit
base point or integrability normalisation.

---

# Global audits and seam record

## 6. Page-size, dependency and provenance audit

The proposed A-page item counts are:

| pairs | A-page counts |
|---|---|
| PDE-1--PDE-5 | 20, 17, 14, 15, 20 |
| PDE-6--PDE-10 | 13, 14, 14, 14, 14 |
| PDE-11--PDE-15 | 19, 14, 13, 15, 11 |
| PDE-16--PDE-20 | 17, 16, 16, 16, 14 |
| PDE-21--PDE-26 | 15, 12, 20, 12, 21, 21 |

Thus the largest is 21, well below the 60-item split threshold. This is a
consequence of splitting at mathematical proof boundaries, not of omitting
canonical material. Every B page is a leaf. A-page dependencies point only to
published pages, predecessor scaffold reservations, or earlier PDE A pages;
orientation remarks alone may name later subjects.

Every mathematical-content row carries the component shorthand of §2.4. The
only generated statements are the explicitly **G/G**, directly checkable,
non-load-bearing counterexamples on PDE-3B, PDE-25B and PDE-26B. Every spine
theorem, definition and load-bearing lemma is literature-derived. The two
**L/NS** items are the sourced Cauchy--Kovalevskaya statement and Tychonoff
nonuniqueness; each is a leaf with `proved_here: false` and an exact source.

The future build must write each A-page summary as a mathematical development:
starting objects, central theorem chain, endpoint and sharp boundary. It must
not use pair metadata, source prose or “examples page” boilerplate as the
summary. The B-page summary should name the phenomena its examples distinguish.

## 7. Consolidated well-definedness ledger

The pair-local paragraphs are binding. This table makes the obligations easy
to audit across page boundaries.

| construction or notation | obligation before use | discharged at |
|---|---|---|
| order and principal symbol of a differential operator | show lower-order changes do not alter the homogeneous principal part; distinguish a coordinate expression from invariant language | PDE-1 items 3--7 |
| elliptic/parabolic/hyperbolic classification | fix the point, scalar real second-order operator and sign convention; do not classify arbitrary nonlinear equations by an eigenvalue slogan | PDE-1 items 8--12 and §2.2 |
| characteristic parametrisation | prove reparametrisation invariance and local solvability of the characteristic ODE | PDE-1 items 13--19 |
| noncharacteristic Cauchy data | state transversality as an invertible Jacobian/normal coefficient and use the inverse-function theorem only with its actual hypotheses | PDE-2 items 2--8 |
| characteristic graph reconstruction | prove the projected characteristic map is locally one-to-one before defining $u(x)$ | PDE-2 item 8 |
| analytic Cauchy data in Cauchy--Kovalevskaya | specify a real-analytic germ and all normal derivatives through order $m-1$ on an analytic noncharacteristic hypersurface | PDE-2 item 16 |
| spherical/ball averages | define surface measure and normalisation; show independence of rotations and integrability | PDE-3 items 4--5 and PDE-5 item 12 |
| distributional harmonicity | cite FA-24's test-function pairing and prove local integrability before applying Weyl's lemma | PDE-3 items 12--13 |
| Harnack chains | prove each compact chain has finitely many overlapping interior balls and track connectedness | PDE-4 items 9--11 |
| fundamental solution | fix $-\Delta\Phi=\delta_0$ and interpret the singular identity only after local integrability and boundary-flux limits are proved | PDE-5 items 1--5 |
| Newtonian potential and differentiation | state the data class giving absolute convergence; treat second derivatives as singular integrals rather than differentiating an inadmissible kernel | PDE-5 items 6--9; PDE-19 items 10--12 |
| outward normal, surface integral and Green function | construct them for the stated $C^1$/$C^2$ domain, prove representative/normalisation independence and state symmetry only under self-adjoint hypotheses | PDE-5 items 12--20 |
| Poisson representation | prove kernel normalisation and convergence to boundary data in the topology claimed | PDE-6 items 2--9 |
| heat convolution | show the kernel/data convolution is finite in the named class and define $H_0$ as the identity, not by evaluating the singular formula | PDE-7 items 2--8 |
| Duhamel integral | prove Bochner/measurable integrability and differentiate only under the regularity hypotheses | PDE-8 items 8--11 |
| parabolic boundary and uniqueness | exclude the final-time face and state growth control for whole-space uniqueness | PDE-8 items 2--7 and 14 |
| spherical wave means | define the zero-radius limit and separate odd/even dimension formulae | PDE-9 items 4--13 |
| local wave energy | justify moving-boundary differentiation and the cone normal; finite propagation is a theorem, not support notation | PDE-10 items 3--10 |
| weak derivative of an $L^p$ class | prove uniqueness a.e. and representative independence before writing $D^\alpha u$ | PDE-11 items 3--10 |
| ACL representative | state simultaneous exceptional-set quantifiers for coordinate lines | PDE-11 items 16--18 |
| mollification, local sums and extension | prove the convolution exists, the locally finite sum converges and chart/reflection definitions agree on overlaps | PDE-12 items 1--12 |
| trace | first define boundary surface measure and $W^{1-1/p,p}(\partial\Omega)$ chart-independently; prove independence of the smooth approximating sequence | PDE-13 items 1--9 |
| zero boundary values | use the closure definition first and prove equivalence with zero trace only under the sourced domain and exponent hypotheses | PDE-12 item 6; PDE-13 items 10--12 |
| Sobolev representatives and critical endpoints | state the precise representative and forbid $W^{1,n}\hookrightarrow L^\infty$ | PDE-14 items 1--15 |
| compact embedding | name the topology, bounded domain regularity and strict subcritical range; compactness means subsequential convergence in the target quotient space | PDE-15 items 1--11 |
| $H^{-1}$ and weak boundary data | define dual pairing and lifting; never identify a general functional with an $L^2$ function | PDE-16 items 8--17 |
| variational form and Lax--Milgram operator | establish integrability, conjugate-linearity convention, boundedness and coercivity before invoking Riesz/fixed point | PDE-16 items 1--14 |
| shifted elliptic inverse | distinguish $L^2\to H^1_0$ solution map from its compact $L^2\to L^2$ composition | PDE-17 items 3--9 |
| eigenfunctions/eigenspaces | normalize equivalence classes in $L^2$ and state multiplicity; do not choose a canonical vector in a multiple eigenspace | PDE-17 items 10--16 |
| boundary flattening and higher regularity | state chart, coefficient and boundary regularity sufficient for each derivative order | PDE-18 items 8--16 |
| Hölder and Calderón--Zygmund norms | fix representatives for continuous classes, principal-value truncations and the range $1<p<\infty$ | PDE-19 items 1--16 |
| weak maximum and weak Harnack | make positive/negative parts valid Sobolev test functions and distinguish essential from pointwise extrema | PDE-20 items 1--14 |
| direct-method infimum and integral functional | prove properness, a finite competitor and representative invariance before selecting a minimizing sequence | PDE-21 items 1--12 |
| constrained multiplier and obstacle reaction | prove weak closure and constraint regularity; express complementarity in duality unless stronger regularity is available | PDE-22 items 1--12 |
| generator, resolvent and mild solution | use the one-sided derivative, prove the inverse is bounded and define the Bochner integral before differentiation | PDE-23 items 4--19 |
| sectorial contour integral | fix the sign convention, sector and orientation; prove norm convergence and contour independence | PDE-24 items 1--6 |
| viscosity envelopes and tests | keep USC/LSC functions distinct from a.e. classes; include space--time point and sequence index in half-relaxed limits | PDE-25 items 2--13 |
| Hopf--Lax infimum | prove finiteness/localisation and specify whether the infimum is attained | PDE-25 items 14--18 |
| weak conservation law and entropy flux | retain the initial term and strong $L^1_{\rm loc}$ trace; show the additive constant in $q$ is immaterial | PDE-26 items 1--10 |
| shocks and Hamilton--Jacobi primitives | invoke strong traces only when available and normalise the a.e. spatial primitive | PDE-26 items 5--6 and 20 |

## 8. Choice-strength ledger

“ZF relative to predecessors” means that this page adds no choice beyond the
already-accounted construction it cites. It is not a claim that the cited
measure-, topology- or functional-analysis theorem was itself proved in bare
ZF.

| result or construction | choice strength planned here | reason |
|---|---|---|
| finite-dimensional classification, characteristics and explicit heat/wave/potential kernels (PDE-1--PDE-10) | ZF relative to ODE, integration and compactness predecessors | proofs use explicit formulae, finite covers and canonical Euclidean exhaustions |
| Cauchy--Kovalevskaya statement | inherited from the cited theorem; no new choice claim | it is not proved here |
| Sobolev completeness, weak derivatives, mollification and half-space reflection (PDE-11--PDE-12) | ZF relative to $L^p$ completeness/Fubini | component limits and convolution are canonical |
| Meyers--Serrin on arbitrary open sets | ZF in the proposed proof relative to the published locally finite partition | use rational balls and the least admissible mollifier scale with an explicit $2^{-j}$ error budget, avoiding an arbitrary sequence of choices |
| finite-atlas extension and trace on a compact smooth boundary (PDE-12--PDE-13) | ZF relative to the published finite partition of unity | only finite choices occur after a finite subcover is supplied |
| Sobolev/Poincaré/Morrey inequalities (PDE-14) | ZF relative to measure theory | integral estimates and explicit representatives suffice |
| Fréchet--Kolmogorov and Rellich subsequence extraction (PDE-15) | dependent choice, or the exact sequential compactness strength already recorded by MT/FA | a nested diagonal subsequence is selected; the page must inherit, not conceal, that cost |
| Lax--Milgram (PDE-16) | inherits the choice strength of FA-13's Riesz representation and the published Banach fixed-point theorem | the PDE proof adds only a canonical contraction iterate |
| elliptic Fredholm alternative and eigenbasis (PDE-17) | inherits FA-15--FA-16 | choice needed for compact-operator spectral decompositions is owned and recorded there; no new eigenvector-selection claim is made |
| difference-quotient, Schauder, Calderón--Zygmund and De Giorgi--Moser estimates (PDE-18--PDE-20) | ZF relative to weak compactness and covering predecessors | local covers may be chosen from a fixed rational basis; weak-limit extraction inherits FA/MT strength |
| a minimizing sequence for an arbitrary proper functional (PDE-21) | countable choice in general | for each $m$, choose $u_m$ with $F(u_m)\le\inf F+1/m$; an explicit least-index choice is available only after a countable dense candidate set is fixed |
| weakly convergent subsequence in the direct method (PDE-21--PDE-22) | dependent choice/inherited weak sequential compactness | boundedness alone does not canonically name a subsequence |
| Lagrange multipliers and projection onto a closed convex set (PDE-22) | inherits Hahn--Banach/Riesz strength from FA | the finite-codimension scalar multiplier adds no further choice |
| exponential bound for a $C_0$-semigroup and Lumer--Phillips (PDE-23) | inherits uniform boundedness and Hahn--Banach strength from FA | local boundedness uses Banach--Steinhaus; dissipativity uses norming functionals in the Banach formulation |
| Hille--Yosida construction (PDE-23) and analytic contour construction (PDE-24) | ZF relative to Bochner integration, completeness and FA-17 | Yosida approximants and the contour are explicit; limit extraction is by a proved Cauchy estimate |
| Perron envelope for viscosity solutions (PDE-25) | ZF for the envelope itself; countable choice only if barriers/approximants are replaced by a selected sequence | the supremum over a set exists by Separation/Power Set; the proof works directly with the envelope and local bump functions |
| half-relaxed and vanishing-viscosity limits (PDE-25) | inherits compactness; dependent choice when a subsequence is selected | the relaxed envelopes themselves are canonical, but subsequential Arzelà--Ascoli extraction is not |
| Kruzhkov contraction (PDE-26) | ZF relative to Fubini and approximate identities | the diagonal mollifiers are an explicit sequence |
| entropy existence by vanishing viscosity (PDE-26) | dependent choice/inherited compactness | a convergent viscous subsequence is selected; uniqueness then makes every convergent subsequence have the same limit |

No page asserts that separability alone provides a choice-free dense sequence,
or that weak compactness automatically provides a sequence without the
sequential/choice hypothesis recorded by its predecessor.

## 9. Amendments owed to other scaffolds

This commission does not edit the sibling files. The orchestrator should carry
the following reconciliation notes:

1. **`functional-analysis`: keep its existing PDE seam.** FA-13's Hilbert-space
   Riesz theorem is the operator step in PDE-16; FA-15--FA-16 own the abstract
   Fredholm and compact spectral theorems used by PDE-17; FA-17 owns the
   Banach-valued holomorphic functional calculus used by PDE-24; FA-23--FA-25
   own distributions and Fourier analysis. No Lax--Milgram item should be
   added to FA unless this ownership contract is deliberately amended.
2. **`measure-theory`: keep its existing PDE seam and add a surface-measure
   dictionary note.** MT-11's polar-coordinate measure underlies sphere means;
   MT-14--MT-15 underlie $L^p$, convolution and approximation. PDE-5 locally
   constructs surface integration on a compact $C^1$ hypersurface from charts;
   a later GMT treatment should prove agreement with Hausdorff measure rather
   than ask either track to rename its construction.
3. **`complex-analysis`: add only cross-links.** Its disc Poisson kernel,
   plane subharmonic/Perron theory and conformal invariance remain plane
   results. A dictionary remark may identify the $n=2$ logarithmic fundamental
   solution and compare its Poisson kernel with PDE-5--PDE-6; it should not
   claim the $\mathbb R^n$ Harnack or Green theory was proved there.
4. **`differential-geometry`: record subsumption, not a dependency reversal.**
   General Stokes on manifolds later recovers PDE-5's Euclidean divergence
   theorem and Green identities. PDE-5 must remain buildable first from charts,
   boxes and partition of unity. Its scaffold did not yet exist at this lane's
   final disk check, so this amendment follows the binding ownership entry in
   `research/subjects-01-SEAMS.md` and the differential-geometry dispatch;
   reconcile it against the eventual file before splice.
5. **`calculus`: no enrichment amendment is owed.** Disk inspection found that
   `inverse-and-implicit-function-theorems` has only five items but does prove
   the finite-dimensional inverse and implicit theorems at the strength used
   here. The thin count is not itself a mathematical defect. The vector-
   calculus band does not contain an $n$-dimensional divergence theorem, which
   is why PDE-5 builds exactly the Euclidean version it consumes.

## 10. Unresolved seams, forward references and blockers

There is no blocking unresolved seam and no unresolved load-bearing forward
reference. The following are build-time checks, not missing mathematics:

- The orchestrator must splice the whole block after `probability-theory` and
  replace relative labels in `requires` with the final page ids/orders.
- `research/plan-differential-geometry-track.md` was not yet present at the
  final disk check. When it arrives, reconcile its general-Stokes page with
  PDE-5's earlier Euclidean divergence theorem exactly as §9 specifies.
- PDE-24 must not build until FA-17 and the scalar complex contour pages are
  authored; both are predecessor reservations, presently not published facts.
- PDE-13's smooth-boundary surface measure and a future GMT Hausdorff-measure
  construction need the agreement theorem described in §9, but neither is a
  dependency of the other in this scaffold.
- PDE-26 uses compactness in one sourced vanishing-viscosity route. A future
  builder may use Kruzhkov's direct approximation route instead, but must not
  add BV compactness unless the relevant BV theory has actually been built.

There is no permission, access or source blocker. Teschl's author manuscript
was fully retrieved for this audit, although its landing page now records a
temporary withdrawal during AMS print publication; [I], [H], [B] and the
specialist full texts independently preserve the source basis.

## 11. Canonical-coverage harvest

### 11.0 Reading and disposition protocol

Section §5 records acquisition and the exact ranges read. The tables below
enumerate the section headings in those ranges in source order. Semicolon-
separated theorem names are the named results harvested under that heading;
the disposition applies to each such name. `Included` identifies the proposed
PDE pair (and normally the item chain), `inline` identifies the pair whose
proof absorbs the result, and `already-published` or `already-planned`
identifies the owner. Every `deferred` and `out-of-scope` entry gives a
result-specific reason. Exercises and bibliography/reference headings have no
mathematical assertion to disposition; across all sources they are
`out-of-scope` as exercises or bibliographic apparatus, not silently counted as
theorems.

“Full text obtained” means that the entire work and its table of contents were
available for search and inspection. It does not mean that unlisted chapters
were read. Evans is used from the publisher's contents and a library copy and
is not represented as an open download. Teschl and Ivrii are the two full PDE
textbooks counted for the owner's minimum; Brezis, Hunter, Kinnunen, Laugesen,
Engel--Nagel, Schnaubelt, Tran and the other sources form the independent
full-note/monograph corpus.

### 11.1 Convention conflicts resolved from the sources

| source conflict | adopted library convention and reason |
|---|---|
| Some authors call $\Phi$ the fundamental solution of $\Delta$ and others of $-\Delta$. | PDE-5 fixes $-\Delta\Phi=\delta_0$. This matches the positive Dirichlet form and positive Newtonian kernel for $n\ge3$; every borrowed formula is translated before use. |
| Sources variously write the heat equation as $u_t=\Delta u$, $u_t-\Delta u=0$, or $u'+Au=0$ with $A=-\Delta$. | Classical pages use $u_t-\Delta u=f$; abstract pages use $u'=Au+f$, so the heat generator is $A=\Delta_D$. PDE-23 item 20 records the dictionary. |
| “Parabolic boundary” sometimes includes the terminal face in informal diagrams. | It is the initial face plus lateral boundary and excludes the terminal face. This is essential to the maximum principle. |
| Weak derivative texts start either with distributional derivatives or the integration-by-parts identity. | PDE-11 defines the $L^1_{\rm loc}$ weak derivative by integration by parts and then proves the dictionary to FA-24; distributions are not re-minted. |
| Trace ranges are written $W^{1-1/p,p}$, $B^{1-1/p}_{p,p}$ or merely “the boundary Sobolev space.” | PDE-13 uses the chartwise Slobodeckij $W^{1-1/p,p}(\partial\Omega)$ norm and notes the Besov synonym only after equivalence is sourced. |
| General Hille--Yosida statements are sometimes remembered with only a first resolvent bound. | PDE-23 retains all power estimates for type $(M,\omega)$ and isolates the first-power shortcut to contractions. |
| Sectoriality may be assigned to $A$ or $-A$. | PDE-24 follows the $u'=Au$ convention and locates the sector for $-A$ explicitly. |
| Viscosity subsolutions are stated with either maxima or minima after changing the PDE sign. | For $u_t+H(x,t,Du)=0$, a USC subsolution is tested from above at a local maximum and gives $\phi_t+H\le0$; supersolutions reverse all three features. |
| Entropy inequalities appear with opposite signs because some texts write $u_t+f(u)_x=0$ and others $u_t=f(u)_x$. | PDE-26 fixes the former and writes $\eta(u)_t+q(u)_x\le0$ in distributions, equivalently the nonnegative-test integral inequality with the corresponding positive sign. |
| Huygens's principle is sometimes paraphrased as a property of “the wave equation in higher dimensions.” | PDE-10 states the sharp free-space result: strong Huygens holds in odd spatial dimensions $n\ge3$; even dimensions have a tail, and $n=1$ does not have the shell-only property. |

### 11.2 Evans harvest: Chapters 2--3, §4.6, Chapters 5--8 and 10

| Evans heading and named results in the read range | disposition |
|---|---|
| §2.1 *Transport equation*; characteristic solution, nonhomogeneous transport | `included` PDE-1; the change-of-variables justification is inline there |
| §2.2 *Laplace's equation*: fundamental solution; mean-value formulas; harmonic-function smoothness/analyticity; maximum principle; Harnack inequality; Green's function; energy method | `included` PDE-3--PDE-6; plane holomorphic variants are `already-planned` CA harmonic pages |
| §2.3 *Heat equation*: fundamental solution; mean-value formula; maximum principle; uniqueness and Tychonoff nonuniqueness without growth control; energy method; nonhomogeneous problem | `included` PDE-7--PDE-8, with the unproved Tychonoff construction isolated on PDE-8B |
| §2.4 *Wave equation*: spherical means; Kirchhoff and Poisson formulas; nonhomogeneous formula; energy and finite propagation | `included` PDE-9--PDE-10 |
| §3.1 *Complete integrals, envelopes* | `included` PDE-2 items 11--15; only local smooth characteristic geometry is claimed |
| §3.2 *Characteristics*; characteristic ODE, local solution of noncharacteristic Cauchy data | `included` PDE-2 |
| §3.3 *Introduction to Hamilton--Jacobi equations*; Hopf--Lax formula | `included` PDE-25 items 14--18 |
| §3.4 *Conservation laws*; shocks, Rankine--Hugoniot, entropy, Riemann problems | `included` PDE-26 |
| §4.6 *Power series*: §4.6.1 *Noncharacteristic surfaces*, §4.6.2 *Real analytic functions*, §4.6.3 *Cauchy--Kovalevskaya Theorem* | theorem statement `included` PDE-2 item 16; power-series/majorant proof `deferred` under the dispatch's statement-only boundary and PDE-2 item 17 |
| §5.1 *Hölder spaces* | `included` PDE-19 items 1--3 |
| §5.2 *Sobolev spaces*; weak derivatives, $W^{k,p}$ completeness | `included` PDE-11 |
| §5.3 *Approximation*; local/global smooth approximation | `included` PDE-12 items 1--7 |
| §5.4 *Extensions* | `included` PDE-12 items 8--14 |
| §5.5 *Traces* | `included` PDE-13 |
| §5.6 *Sobolev inequalities*; Gagliardo--Nirenberg--Sobolev, Morrey | `included` PDE-14 |
| §5.7 *Compactness*; Rellich--Kondrachov | `included` PDE-15 |
| §5.8 *Additional topics*: Poincaré inequalities, difference quotients and related Sobolev calculus used in the read range | Poincaré is `included` PDE-14; difference quotients are `included` PDE-18; topics not used beyond these named results are `out-of-scope` because they are not prerequisites of this linear spine |
| §6.1 *Definitions*; divergence/nondivergence form, ellipticity, weak solution | `included` PDE-16 and PDE-19 |
| §6.2 *Existence of weak solutions*; Lax--Milgram, Fredholm alternative | `included` PDE-16--PDE-17 |
| §6.3 *Regularity*; interior/boundary $H^2$, higher regularity | `included` PDE-18; Schauder/$W^{2,p}$ continuation is PDE-19 |
| §6.4 *Maximum principles*; weak/strong principle and Hopf lemma | classical version `included` PDE-4, weak elliptic version `included` PDE-20 |
| §6.5 *Eigenvalues and eigenfunctions*; compact resolvent and variational eigenvalues | `included` PDE-17 |
| §7.1 *Second-order parabolic equations*: weak formulation, energy estimates, existence, regularity, maximum principle | the heat maximum/energy core is `included` PDE-8 and analytic evolution route PDE-24; the Galerkin proof of general measurable-coefficient parabolic problems is `deferred` as an alternative construction not needed by any scaffolded theorem |
| §7.2 *Second-order hyperbolic equations*: weak formulation, energy, finite propagation | `included` PDE-10 and abstractly PDE-23; the full weak Galerkin existence proof is `deferred` because the present wave remit is the classical formula/energy theory |
| §7.3 *Systems of hyperbolic first-order equations* | `out-of-scope`: requires symmetric/symmetrisable system structure and belongs with a later hyperbolic-systems track |
| §7.4 *Semigroup theory*; generator, Hille--Yosida, abstract Cauchy problem | `included` PDE-23--PDE-24 |
| §8.1 *Introduction* and first variation/Euler equation | `included` PDE-21 |
| §8.2 *Existence of minimizers*; direct method and weak lower semicontinuity | `included` PDE-21 |
| §8.3 *Regularity* of minimizers | scalar elliptic consequences are `included` PDE-21 item 14 via PDE-18--PDE-19; nonlinear/vectorial regularity is `deferred` because quasiconvexity and partial regularity are new theories |
| §8.4 *Constraints*; Lagrange multipliers and constrained extrema | `included` PDE-22 |
| §10.1 *Introduction, viscosity solutions*; vanishing viscosity, stability, Perron orientation | `included` PDE-25 |
| §10.2 *Uniqueness*; doubling variables and comparison | `included` PDE-25 items 10--12 |
| §10.3 *Control theory, dynamic programming*; value function, HJB equation, Hopf--Lax revisited | Hopf--Lax is `included` PDE-25; value functions/HJB are `inline` only in PDE-25 item 21; measurable-control existence and feedback synthesis are `out-of-scope` because they require an optimal-control framework and measurable selection not used elsewhere |

### 11.3 Teschl harvest: Parts I--II, Chapters 1--13

The heading names below are Teschl's complete public table of contents over the
read range.

| Teschl heading | disposition |
|---|---|
| 1.1 *The method of characteristics* | `included` PDE-1 |
| 1.2 *Semilinear equations* | `included` PDE-2 |
| 1.3 *Quasilinear equations* | `included` PDE-2 |
| 1.4 *Fully nonlinear equations* | `included` PDE-2, limited to Lagrange--Charpit/local compatibility |
| 1.5 *Classification and canonical forms* | `included` PDE-1 |
| 2.1 *First order systems* | the Cauchy--Kovalevskaya statement is `included` PDE-2 item 16; proof is `deferred` by dispatch; general analytic systems are otherwise `out-of-scope` |
| 2.2 *Second order equations* | same `included` statement/dispatched proof deferral at PDE-2 |
| 3.1 *The heat equation for a thin rod* | `inline` PDE-7--PDE-8 as bounded-domain examples; Fourier-series basis theory is `already-planned` FA-14 |
| 3.2 *Outlook: The reaction diffusion equation* | `out-of-scope`: nonlinear reaction--diffusion requires a separate nonlinear evolution theory |
| 3.3 *The wave equation for a string* | `included` PDE-9 d'Alembert/interval examples |
| 3.4 *The wave equation on a rectangle and on a disc* | `inline` PDE-17/PDE-23 spectral examples; Bessel-function details are `out-of-scope` special-function material |
| 3.5 *The Laplace equation on a disc* | `already-planned` CA's plane Poisson-disc page; PDE-6 does not duplicate it |
| 4.1 *Motivation* | `inline` PDE-7/PDE-9 |
| 4.2 *The Fourier transform in one dimension* | `already-planned` FA-23 |
| 4.3 *The heat equation on the line* | `included` PDE-7 |
| 4.4 *The wave equation on the line* | `included` PDE-9 |
| 4.5 *Dispersion* | `out-of-scope`: dispersive estimates require oscillatory-integral/harmonic-analysis machinery |
| 4.6 *Symmetry groups* | `out-of-scope`: Lie symmetry classification is not used by the analytic spine |
| 5.1 *Harmonic functions* | `included` PDE-3--PDE-4 |
| 5.2 *Subharmonic functions* | the real mean-value comparison needed for maxima is `inline` PDE-4; plane holomorphic/subharmonic theory is `already-planned` CA |
| 5.3 *The Newton potential and the Poisson equation on $\mathbb R^n$* | `included` PDE-5 |
| 5.4 *Poisson equation on a domain and Green's function* | `included` PDE-5--PDE-6 |
| 5.5 *The Dirichlet principle* | `included` PDE-21, after weak/Sobolev machinery exists |
| 5.6 *Solution for a half space and for a ball* | `included` PDE-6 |
| 5.7 *The Perron method for solving the Dirichlet problem* | plane case `already-planned` CA; arbitrary $\mathbb R^n$ domains `deferred` to capacity/Wiener regularity for the specific reason in §3 |
| 5.8 *General elliptic equations* | `included` PDE-16--PDE-20 in the linear uniformly elliptic range |
| 6.1 *The Fourier transform* | `already-planned` FA-23 |
| 6.2 *The fundamental solution* | `included` PDE-7 |
| 6.3 *The heat equation on a bounded domain and the maximum principle* | `included` PDE-8 |
| 6.4 *Energy methods* | `included` PDE-8 |
| 6.5 *General parabolic equations* | analytic-semigroup realization is `included` PDE-24; weak Galerkin theory for rough time-dependent coefficients is `deferred` as a separate parabolic-regularity continuation |
| 7.1 *Solution via the Fourier transform* | formula is `included` PDE-9 while Fourier machinery is `already-planned` FA-23 |
| 7.2 *Solution in arbitrary dimensions* | `included` PDE-9 |
| 7.3 *Energy methods* | `included` PDE-10 |
| 8.1 *Motivation* | `inline` PDE-11 |
| 8.2 *The Fourier transform on $L^2$* | `already-planned` FA-23 |
| 8.3 *The Sobolev spaces $H^r(\mathbb R^n)$* | integer $H^k$ is `included` PDE-11; the full fractional Fourier scale is `deferred` to a function-spaces/harmonic-analysis continuation |
| 8.4 *Evolution problems* | `included` PDE-23--PDE-24 |
| 9.1 *Basic properties* | `included` PDE-11--PDE-12 |
| 9.2 *Extension and trace operators* | `included` PDE-12--PDE-13 |
| 9.3 *Embedding theorems* | `included` PDE-14--PDE-15 |
| 10.1 *The Poisson equation* | `included` PDE-16 |
| 10.2 *Elliptic equations* | `included` PDE-16--PDE-17 |
| 10.3 *Elliptic regularity* | `included` PDE-18--PDE-20 |
| 10.4 *The Poisson equation in $C(U)$* | weak-to-continuous recovery is `included` PDE-20; Perron/Wiener general-domain portions remain `deferred` for the reason at 5.7 |
| 11.1 *Single variable calculus in Banach spaces* | `already-planned` FA-12; evolution-specific consequences `inline` PDE-23 |
| 11.2 *Uniformly continuous operator groups* | `included` PDE-23 bounded-generator example |
| 11.3 *Strongly continuous semigroups* | `included` PDE-23 |
| 11.4 *Generator theorems* | `included` PDE-23 |
| 11.5 *Applications to parabolic equations* | `included` PDE-24 |
| 11.6 *Applications to hyperbolic equations* | wave group/energy realization `inline` PDE-10/PDE-23; general hyperbolic systems are `out-of-scope` |
| 12.1 *Semilinear equations* | `out-of-scope`: local well-posedness for nonlinear abstract equations needs a nonlinear evolution page beyond the commissioned spine |
| 12.2 *Reaction diffusion equations* | `out-of-scope`: a substantial nonlinear parabolic subject, not a consequence of analytic semigroups alone |
| 13.1 *Differentiation in Banach spaces* | `included` PDE-21 first-variation chain, with general Fréchet calculus `already-published`/planned in calculus and FA |
| 13.2 *The direct method* | `included` PDE-21 |
| 13.3 *Constraints* | `included` PDE-22 |

### 11.4 Ivrii harvest: §§1.1--1.4, 2.1--2.8, 3.1--3.2/3.B,
4.1--4.4, 5.1--5.3, 6.1--6.6, 7.1--7.3, 9.1--9.2,
10.1--10.4, 11.1--11.4, 12.1 and 13.1

| Ivrii heading | disposition |
|---|---|
| 1.1 *PDE motivations and context* | standard scalar examples are `inline` PDE-1; elasticity, Maxwell, Navier--Stokes, Dirac and Yang--Mills examples are `out-of-scope` because they are systems with separate mathematical structures |
| 1.2 *Initial and boundary value problems* | `included` PDE-1 items 1--2 and specialised throughout PDE-6/PDE-8/PDE-10 |
| 1.3 *Classification of equations* | `included` PDE-1 |
| 1.4 *Origin of some equations* | heat/wave/Laplace derivations are `inline` PDE-1 B; the physical systems are `out-of-scope` for the reason at 1.1 |
| 2.1 *First order PDEs*; 2.1.A *Derivation of a PDE describing traffic flow*; 2.1.B *Running wave solutions* | characteristics are `included` PDE-1--PDE-2; traffic conservation is `included` PDE-26 B; travelling waves are `inline` PDE-1 B |
| 2.2 *Multidimensional equations* | `included` PDE-1--PDE-2 |
| 2.3 *Homogeneous 1D wave equation* | `included` PDE-9 |
| 2.4 *1D-wave equation reloaded: characteristic coordinates* | `included` PDE-9 |
| 2.5 *Wave equation reloaded (continued)* | nonhomogeneous d'Alembert/Duhamel material `included` PDE-9 |
| 2.6 *1D wave equation: IBVP* | reflection and interval examples `included` PDE-9 B; spectral form `inline` PDE-17 |
| 2.7 *Energy integral* | `included` PDE-10 |
| 2.8 *Hyperbolic first order systems with one spatial variable* | `out-of-scope`: needs system eigenfields/symmetrisers and belongs to the systems continuation |
| 3.1 *Heat equation* | `included` PDE-7--PDE-8 |
| 3.2 *Heat equation (miscellaneous)* | maximum/uniqueness and source terms `included` PDE-8; Black--Scholes material is `out-of-scope` financial mathematics |
| 3.B *Self-similar solutions* | `included` PDE-7 B |
| 4.1 *Separation of variables (the first blood)* | `inline` PDE-17 eigenfunction examples |
| 4.2 *Eigenvalue problems* | `included` PDE-17 |
| 4.3 *Orthogonal systems* and 4.4 *Orthogonal systems and Fourier series* | abstract orthogonal-basis results are `already-planned` FA-14; their PDE applications are `inline` PDE-17/PDE-23 |
| 5.1 *Fourier transform, Fourier integral* and 5.1.A *Justification* | `already-planned` FA-23 |
| 5.1.B *Pointwise convergence of Fourier integrals and series* | `out-of-scope`: requires a separate harmonic-analysis convergence theory and is not needed for distributional/spectral PDE formulae |
| 5.2 *Properties of Fourier transform* and 5.2.A *Multidimensional Fourier transform, Fourier integral* | `already-planned` FA-23 |
| 5.2.B *Fourier transform in the complex domain* | `deferred`: Paley--Wiener type theory needs entire-function and distribution support machinery beyond this track |
| 5.2.C *Discrete Fourier transform* | `out-of-scope`: numerical/discrete analysis |
| 5.3 *Applications of Fourier transform to PDEs* | heat/wave applications `included` PDE-7/PDE-9; transform facts `already-planned` FA-23 |
| 6.1 *Separation of variables for heat equation* | `inline` PDE-17/PDE-23 Dirichlet heat-semigroup example |
| 6.2 *Separation of variables: miscellaneous equations* | scalar elliptic/wave examples `inline` PDE-9/PDE-17; unrelated special-function computations are `out-of-scope` |
| 6.3 *Laplace operator in different coordinates* | coordinate formulae `inline` PDE-6 B; differential-geometric Laplacians are `out-of-scope` DG |
| 6.4 *Laplace operator in the disk* and 6.5 *Laplace operator in the disk II* | `already-planned` CA's plane harmonic pages; separation examples may cite FA-14/PDE-17 |
| 6.6 *Multidimensional equations* | rectangular/ball eigenfunction examples `inline` PDE-17 B |
| 7.1 *General properties of Laplace equation* | `included` PDE-3--PDE-4 |
| 7.2 *Potential theory and around* | `included` PDE-5--PDE-6 |
| 7.3 *Green's function* | `included` PDE-5--PDE-6 |
| 9.1 *Wave equation in dimensions 3 and 2* | `included` PDE-9; its dimension contrast feeds PDE-10 Huygens |
| 9.2 *Wave equation: energy method* | `included` PDE-10 |
| 10.1 *Functionals, extremums and variations* and 10.2 continuation | `included` PDE-21 |
| 10.3 *Functionals, extremums and variations (multidimensional)* and 10.4 continuation | `included` PDE-21--PDE-22 |
| 11.1 *Distributions*, 11.2 *Distributions: more*, 11.3 *Applications of distributions* | `already-planned` FA-24--FA-25; PDE only cites those pages |
| 11.4 *Weak solutions* | weak derivative/weak elliptic specialisations `included` PDE-11/PDE-16 |
| 12.1 *Burgers equation* | `included` PDE-26 and its B page |
| 13.1 *Variational theory* | Rayleigh/min--max applications `included` PDE-17/PDE-22; abstract compact spectral input `already-planned` FA-16 |

### 11.5 Hunter harvest: Chapters 1--7

| Hunter heading | disposition |
|---|---|
| 1.1 *Euclidean space*, 1.2 *Spaces of continuous functions*, 1.8 *Derivatives and multi-index notation* | `already-published` topology/calculus; notation `inline` throughout |
| 1.3 *Hölder spaces* | `included` PDE-19 |
| 1.4 *$L^p$ spaces* | `already-planned` MT-14--MT-16 |
| 1.5 *Compactness* | `already-published` topology; function-space compactness `included` PDE-15 |
| 1.6 *Averages* | `included` PDE-3 and PDE-20 |
| 1.7 *Convolutions* and 1.9 *Mollifiers* | `already-planned` MT-15; Sobolev/PDE applications `included` PDE-7/PDE-12 |
| 1.10 *Boundaries of open sets* | $C^1$/Lipschitz domain vocabulary `included` PDE-5/PDE-12--PDE-13 |
| 1.11 *Change of variables* | `already-published` `fubini-and-change-of-variables` |
| 1.12 *Divergence theorem* | `included` PDE-5 because disk inspection found no published $\mathbb R^n$ theorem |
| 1.13 *Gronwall's inequality* | `already-published` ODE/inequality material; `inline` PDE-10/PDE-23 when used |
| 2.1 *Mean value theorem* | `included` PDE-3 |
| 2.2 *Derivative estimates and analyticity* | `included` PDE-6 |
| 2.3 *Maximum principle* | `included` PDE-4 |
| 2.4 *Harnack's inequality* | `included` PDE-4 |
| 2.5 *Green's identities* | `included` PDE-5 |
| 2.6 *Fundamental solution* | `included` PDE-5 |
| 2.7 *The Newtonian potential* | `included` PDE-5 |
| 2.8 *Singular integral operators*; principal values, $L^2$ estimate | the Hessian-of-potential identity is `included` PDE-19; general Calderón--Zygmund multiplier machinery is `already-planned` FA-25 or `deferred` to harmonic analysis |
| 3.1 *Weak derivatives* and 3.2 *Examples* | `included` PDE-11 and B |
| 3.3 *Distributions* | `already-planned` FA-24 |
| 3.4 *Properties of weak derivatives* and 3.5 *Sobolev spaces* | `included` PDE-11 |
| 3.6 *Approximation of Sobolev functions* | `included` PDE-12 |
| 3.7 *Sobolev embedding: $p<n$* and 3.8 *Sobolev embedding: $p>n$* | `included` PDE-14 |
| 3.9 *Boundary values of Sobolev functions* | `included` PDE-13 |
| 3.10 *Compactness results* | `included` PDE-15 |
| 3.11 *Sobolev functions on $\Omega\subset\mathbb R^n$* | extension/domain consequences `included` PDE-12--PDE-15 |
| Appendices 3.A *Functions*, 3.B *Measures*, 3.C *Integration* | `already-published` real/measure theory; no re-minting |
| 4.1 *Weak formulation of the Dirichlet problem* | `included` PDE-16 |
| 4.2 *Variational formulation* | `included` PDE-16/PDE-21 |
| 4.3 *The space $H^{-1}(\Omega)$* | `included` PDE-16 |
| 4.4 *The Poincaré inequality for $H^1_0(\Omega)$* | `included` PDE-14 |
| 4.5 *Existence of weak solutions of the Dirichlet problem* | `included` PDE-16 |
| 4.6 *General linear, second order elliptic PDEs* and 4.7 *The Lax--Milgram theorem and general elliptic PDEs* | `included` PDE-16 |
| 4.8 *Compactness of the resolvent*, 4.9 *The Fredholm alternative*, 4.10 *The spectrum of a self-adjoint elliptic operator* | `included` PDE-17; abstract inputs `already-planned` FA-15--FA-16 |
| 4.11 *Interior regularity* and 4.12 *Boundary regularity* | `included` PDE-18 |
| 4.13 *Some further perspectives* | Schauder/$L^p$/De Giorgi directions `included` PDE-19--PDE-20; nonlinear systems are `out-of-scope` |
| Appendix 4.A *Heat flow* | `inline` PDE-7/PDE-23 |
| Appendix 4.B *Operators on Hilbert spaces* | `already-planned` FA-13/FA-16/FA-21 |
| Appendix 4.C *Difference quotients* | `included` PDE-18 |
| 5.1 *The initial value problem for the heat equation* | `included` PDE-7--PDE-8 |
| 5.2 *Generalized solutions* | distribution/semigroup heat solutions `included` PDE-7/PDE-23; general distribution vocabulary `already-planned` FA-24 |
| 5.3 *The Schrödinger equation* | `out-of-scope`: dispersive complex evolution requires separate unitary/oscillatory estimates |
| 5.4 *Semigroups and groups* | `included` PDE-23 |
| 6.1 *The heat equation* | `inline` PDE-8/PDE-24 |
| 6.2 *General second-order parabolic PDEs*, 6.3 *Definition of weak solutions*, 6.4 *The Galerkin approximation*, 6.5 *Existence of weak solutions* | `deferred`: this distinct weak time-dependent-coefficient theory needs Bochner--Sobolev evolution spaces and Galerkin compactness; no present item depends on it |
| 7.1 *The wave equation* | `included` PDE-9--PDE-10 |
| 7.2 *Definition of weak solutions*, 7.3 *Existence of weak solutions*, 7.4 *Continuity of weak solutions*, 7.5 *Uniqueness of weak solutions* | energy/uniqueness are `inline` PDE-10/PDE-23; the full Galerkin weak-wave construction is `deferred` as an alternative theory not required by the classical commissioned spine |

The unread Hunter headings 5.5 *A semilinear heat equation*, 5.6 *The
nonlinear Schrödinger equation*, 6.6 *A semilinear heat equation*, 6.7 *The
Navier--Stokes equation* and Chapter 8 *Friedrich symmetric systems* were
nevertheless checked at the contents level: each is `out-of-scope` for the
specific nonlinear/system reason stated in §3, and none is used as backing.

### 11.6 Brezis harvest: Chapters 7--10

| Brezis heading and named results | disposition |
|---|---|
| 7.1 *Definition and elementary properties of maximal monotone operators*; resolvent/Yosida approximation | dissipative/Yosida dictionary `included` PDE-23; the full nonlinear maximal-monotone theory is `deferred` to nonlinear functional analysis |
| 7.2 *Solution of $du/dt+Au=0$: existence and uniqueness*; Hille--Yosida evolution theorem | `included` PDE-23 after translating $A\mapsto-A$ |
| 7.3 *Regularity* | `included` PDE-23/PDE-24 in the linear generator setting |
| 7.4 *The self-adjoint case* | `included` PDE-24 item 7 and heat-semigroup corollary |
| 8.1 *Motivation* | `inline` PDE-11/PDE-16 |
| 8.2 *The Sobolev space $W^{1,p}(I)$*; absolutely continuous representative | `included` PDE-11 item 18 |
| 8.3 *The space $W^{1,p}_0(I)$* | `included` PDE-12/PDE-13 |
| 8.4 *Some examples of boundary value problems* | `inline` PDE-16 B |
| 8.5 *The maximum principle* | one-dimensional case `inline` PDE-4/PDE-20 |
| 8.6 *Eigenfunctions and spectral decomposition* | `included` PDE-17 B |
| 9.1 *Definition and elementary properties of $W^{1,p}(\Omega)$* | `included` PDE-11 |
| 9.2 *Extension operators* | `included` PDE-12 |
| 9.3 *Sobolev inequalities* | `included` PDE-14 |
| 9.4 *The space $W^{1,p}_0(\Omega)$* | `included` PDE-12--PDE-13 |
| 9.5 *Variational formulation of some boundary value problems* | `included` PDE-16/PDE-21 |
| 9.6 *Regularity of weak solutions* | `included` PDE-18 |
| 9.7 *The maximum principle* | `included` PDE-20 |
| 9.8 *Eigenfunctions and spectral decomposition* | `included` PDE-17 |
| 10.1 *The heat equation: existence, uniqueness, and regularity* | `included` PDE-8/PDE-23--PDE-24 |
| 10.2 *The maximum principle* | `included` PDE-8 |
| 10.3 *The wave equation* | `included` PDE-10/PDE-23 |

### 11.7 Grigoryan and Schikorra independent-note harvest

**Grigoryan [G].** The notes are short enough that every substantive heading
in Chapters 1--4 was inspected.

| Grigoryan heading | disposition |
|---|---|
| 1.1 *$H^s$ spaces via the Fourier transform* | integer $H^k$ `included` PDE-11; Fourier/fractional construction `already-planned` FA-23 or `deferred` function-spaces continuation |
| 1.2 *Weak derivatives* and 1.3 *Sobolev spaces $W^{k,p}$* | `included` PDE-11 |
| 1.4 *Smooth approximations of Sobolev functions* | `included` PDE-12 |
| 1.5 *Extensions and traces of Sobolev functions* | `included` PDE-12--PDE-13 |
| 1.6 *Sobolev embeddings and compactness results* | `included` PDE-14--PDE-15 |
| 1.7 *Difference quotients* | `included` PDE-18 |
| 2.1 *Weak formulation* and 2.2 *Existence of weak solutions of the Dirichlet problem* | `included` PDE-16 |
| 2.3 *General linear elliptic PDEs* and 2.4 *Lax--Milgram theorem, solvability of general elliptic PDEs* | `included` PDE-16 |
| 2.5 *Fredholm operators on Hilbert spaces* | abstract theorem `already-planned` FA-15; elliptic composition `included` PDE-17 |
| 2.6 *The Fredholm alternative for elliptic equations* and 2.7 *The spectrum of a self-adjoint elliptic operator* | `included` PDE-17 |
| 3.1 *Interior regularity* and 3.2 *Boundary regularity* | `included` PDE-18 |
| 4.1 *The derivative of a functional* | `included` PDE-21 |
| 4.2 *Solvability for the Dirichlet Laplacian* | `included` PDE-16/PDE-21 |
| 4.3 *Constrained optimization and application to eigenvalues* | `included` PDE-22 |

**Schikorra [S].** The exact read range was Chapters 1--4, V.1--V.3,
VI.1--VI.5 and VII.1--VII.2.

| Schikorra heading | disposition |
|---|---|
| I.1 *Transport equation* | `included` PDE-1 |
| I.2 *Laplace equation*; fundamental solution, mean values, maximum/Harnack, Green representation | `included` PDE-3--PDE-6 |
| II.1 *Linear elliptic equations* and II.2 *Maximum principles* | `included` PDE-16/PDE-20 |
| III.1 *Basic concepts from Functional Analysis* | `already-planned` FA; used only as cross-check |
| III.2 *Philosophy of Distributions and Sobolev spaces* | distributions `already-planned` FA-24; dictionary `included` PDE-11 item 19 |
| III.3 *Sobolev Spaces* | `included` PDE-11--PDE-15 |
| Chapter IV *Existence and Regularity for linear elliptic PDE* | `included` PDE-16--PDE-20 |
| V.1 *The fractional Sobolev space $W^{s,p}$* | only the boundary exponent/Slobodeckij definition is `included` PDE-13; the full scale is `deferred` to function spaces |
| V.2 *It's a trace space!* | `included` PDE-13 |
| V.3 *Integration by parts revisited* | trace/Green identity `inline` PDE-13/PDE-16 |
| VI.1 *The heat equation: fundamental solution and representation* | `included` PDE-7 |
| VI.2 *Mean-value formula* | `inline` PDE-8; not used as the primary definition of caloricity |
| VI.3 *Maximum principle and uniqueness* | `included` PDE-8 |
| VI.4 *Harnack's principle* | parabolic Harnack `deferred`: it belongs with a full weak parabolic regularity page, not the classical heat-kernel spine |
| VI.5 *Regularity and Cauchy-estimates* | classical positive-time smoothing `included` PDE-8; general parabolic estimates `deferred` with VI.4 |
| VII.1 *Definitions* and VII.2 *Maximum principles* | `included` PDE-8 for the scalar classical equation; rough-coefficient weak versions `deferred` to general parabolic theory |

The unconsumed Schikorra headings V.4--V.7 (fractional-space asymptotics and
embeddings), Chapters VIII--IX (semigroups and weak hyperbolic equations),
Chapter X (Navier--Stokes), Chapter XI (general Calderón--Zygmund theory) and
Chapter XII (fully nonlinear elliptic viscosity solutions) were checked at TOC
level. V.4--V.7 and XI are `deferred` to function spaces/harmonic analysis;
VIII--IX are independently `included` from [EN]/[SN] and PDE-10/PDE-23;
X is `out-of-scope` fluid dynamics; XII is `deferred` nonlinear elliptic
viscosity theory. They are not claimed as read backing from [S].

### 11.8 Kinnunen harvest: Chapters 1--3

| Kinnunen heading and named results | disposition |
|---|---|
| 1.1 *Weak derivatives*; uniqueness and examples | `included` PDE-11 |
| 1.2 *Sobolev spaces*; definition of $W^{k,p}$ | `included` PDE-11 |
| 1.3 *Properties of weak derivatives* | `included` PDE-11 |
| 1.4 *Completeness of Sobolev spaces* | `included` PDE-11 item 10 |
| 1.5 *Hilbert space structure* | `included` PDE-11 item 12 |
| 1.6 *Approximation by smooth functions* and 1.7 *Local approximation in Sobolev spaces* | `included` PDE-12 |
| 1.8 *Global approximation in Sobolev spaces* | `included` PDE-12, with arbitrary-domain/smooth-boundary forms separated |
| 1.9 *Sobolev spaces with zero boundary values* | `included` PDE-12--PDE-13 |
| 2.1 *Chain rule* and 2.2 *Truncation* | `included` PDE-11 items 14--15 |
| 2.3 *Weak convergence methods for Sobolev spaces* | `inline` PDE-15/PDE-18/PDE-21; abstract weak topology `already-planned` FA-8--FA-10 |
| 2.4 *Dual spaces* | $H^{-1}$ specialisation `included` PDE-16; general Banach duality `already-planned` FA/MT |
| 2.5 *Difference quotients* | `included` PDE-18 |
| 2.6 *Absolute continuity on lines* | `included` PDE-11 items 16--18 |
| 3.1 *Gagliardo--Nirenberg--Sobolev inequality* | `included` PDE-14 |
| 3.2 *Sobolev--Poincaré inequalities* | `included` PDE-14 |
| 3.3 *Morrey's inequality* | `included` PDE-14 |
| 3.4 *Lipschitz functions and $W^{1,\infty}$* | `included` PDE-14 item 12 |
| 3.5 *Summary of the Sobolev embeddings* | `included` PDE-14, with $p=n$ endpoint warning explicit |
| 3.6 *Compactness*; Rellich and limiting counterexample following Theorem 3.44 | `included` PDE-15 and B |

Kinnunen Chapters 4--5 (capacity, quasicontinuity, maximal functions, Riesz
potentials and Lipschitz truncation) were harvested at the contents boundary
but not read as backing. Capacity/quasicontinuity are `deferred` because they
license the Wiener/rough-boundary continuation; maximal-function and Riesz-
potential methods are `deferred` to harmonic analysis; Lipschitz truncation is
`deferred` to nonlinear PDE. None is needed for the chosen proofs.

### 11.9 Laugesen linear-PDE harvest: Chapters 3--5

| Laugesen heading | disposition |
|---|---|
| 3.1 *Green's theorem, and integration by parts* | Euclidean $n$-dimensional version `included` PDE-5 |
| 3.2 *Mollification and smoothing* | `included` PDE-12 |
| 3.3 *Weak derivatives and Sobolev spaces* | `included` PDE-11 |
| 3.4 *Approximating Sobolev functions by smooth functions* | `included` PDE-12 |
| 3.5 *Sobolev space of functions vanishing on the boundary* | `included` PDE-12--PDE-13 |
| 3.6 *Extending past the boundary* | `included` PDE-12 |
| 3.7 *Boundary traces* | `included` PDE-13 |
| 3.8 *Sobolev inequalities* | `included` PDE-14 |
| 3.9 *Compact imbedding of Sobolev spaces* | `included` PDE-15 |
| 3.10 *Poisson's equation via Calculus of Variations (Dirichlet Principle)* | `included` PDE-16/PDE-21 |
| 4.1 *Abstract spectral theory for sesquilinear forms* | form-to-operator application `included` PDE-17; abstract operator theorem `already-planned` FA-16 |
| 4.2 *Spectral theorem for compact, selfadjoint operators* | `already-planned` FA-16 |
| 4.3 *Application: ONB of eigenfunctions for symmetric elliptic operator* | `included` PDE-17 |
| 4.4 *Lax--Milgram and nonsymmetric sesquilinear forms* | `included` PDE-16 |
| 5.1 *Generalized Poisson equation* | `included` PDE-16 |
| 5.2 *Regularity of solutions* | `included` PDE-18 |
| 5.3 *Weak maximum principles* and 5.4 *Strong maximum principles* | `included` PDE-20 |

### 11.10 Ambrosio--Carlotto--Massaccesi harvest: Chapters 1--2

| ACM heading | disposition |
|---|---|
| 1.1 *Weak solvability results* | `included` PDE-16 |
| 1.2 *Inhomogeneous boundary conditions* | `included` PDE-16 item 15 via PDE-13 lifting |
| 1.3 *Elliptic systems* | scalar common machinery `inline` PDE-16/PDE-18; system regularity is `out-of-scope` and no scalar theorem is extended to systems |
| 1.4 *Necessary minimality conditions* | `included` PDE-21 |
| 1.5 *Lower semicontinuity of integral functionals* | scalar convex theorem `included` PDE-21 item 12; quasiconvex vectorial form is `deferred` because it needs a separate vectorial calculus of variations |
| 2.1 *Caccioppoli--Leray inequality* | `included` PDE-18/PDE-20 |
| 2.2 *Sobolev embeddings* | `already included` PDE-14 and used inline in regularity |
| 2.3 *A priori estimates and the Nirenberg method* | `included` PDE-18 |
| 2.4 *Decay estimates for systems with constant coefficients* | scalar decay step `inline` PDE-20; system theorem `out-of-scope` because De Giorgi regularity fails without extra structure |
| 2.5 *Regularity up to the boundary* | `included` PDE-18 |

The later ACM chapter headings *Interior regularity for nonlinear equations*,
*Regularity for systems* and *Viscosity solutions* were harvested but not used
as read backing. Scalar Schauder/$L^p$ headings are independently `included`
PDE-19; nonlinear/system regularity and fully nonlinear viscosity theory are
`deferred` for the exact scope reasons in §3. PDE-20's final remark records the
scalar/system boundary without importing a system counterexample.

### 11.11 Laugesen spectral and Cristoferi variational harvests

**Laugesen spectral notes [LS], Chapters 4--6 and 9.**

| heading | disposition |
|---|---|
| 4 *Discrete spectral theorem* | abstract theorem `already-planned` FA-16; elliptic realization `included` PDE-17 |
| 5 *Laplace eigenfunctions* | `included` PDE-17, including Dirichlet examples |
| 6 *Natural boundary conditions* | Neumann form and zero mode `included` PDE-17 item 16/B |
| 9 *Variational characterizations*; Rayleigh principle and minimax | `included` PDE-17 items 13--15 and PDE-22 |

The same source's Chapters 7--8, 10--19 were TOC-harvested: magnetic
Laplacians, Schrödinger wells, Weyl asymptotics, Pólya, reaction--diffusion and
continuous/scattering spectrum are `out-of-scope` because they require gauge,
semiclassical, nonlinear stability or scattering machinery. Monotonicity of
Dirichlet eigenvalues (Chapter 10) is `deferred` as a useful spectral-geometry
continuation, not needed by the present elliptic existence spine.

**Cristoferi [CV], Chapter 4 and Chapter 7.**

| heading | disposition |
|---|---|
| 4.1 *The Euler--Lagrange equation* | `included` PDE-21 |
| 4.2 *Natural boundary conditions* | `included` PDE-21 item 13 and B |
| 4.3 *Inner variations* | `deferred`: domain variations lead to stress-energy/shape-derivative theory not used by the direct-method spine |
| 4.4 *Isoperimetric problems* | multiplier mechanism `included` PDE-22; geometric isoperimetric theorem `already-published`/owned by geometry |
| 4.5 *Holonomic constraints* | finite-codimension multiplier form `included` PDE-22 |
| Chapter 7 *Lagrange multipliers and eigenvalues of the Laplace operator* | `included` PDE-22 and linked to PDE-17's Rayleigh principle |

### 11.12 Semigroup-source harvest: Johnson, Engel--Nagel and Schnaubelt

**Johnson [J].**

| Johnson heading | disposition |
|---|---|
| 1.1 *Motivation: uniformly continuous groups of operators* | `included` PDE-23 item 1/B bounded exponential |
| 1.2 *Semigroups: a motivating example* | translation example `included` PDE-23 B |
| 2.1 *Basic definitions & properties* | `included` PDE-23 items 1--9 |
| 2.2 *Classification of generators*; closed/dense generator, Hille--Yosida | `included` PDE-23 items 7--16 |
| 2.3 *Application: linear hyperbolic PDE* | wave realization `inline` PDE-10/PDE-23 |
| 3.1 *Nonhomogeneous linear problems & mild solutions* | `included` PDE-23 items 17--19 |
| 3.2 *Mild solutions of nonlinear problems* | `out-of-scope`: requires a nonlinear local well-posedness/fixed-point theory not commissioned here |
| §5 *Appendix: proof of Hille--Yosida theorem* | `included` PDE-23 hard-proof architecture |

Section 3.3 *Application: cubic nonlinear Schrödinger equation on
$\mathbb R^3$* was outside the read range and is `out-of-scope` dispersive
nonlinear PDE for the explicit reason in §3.

**Engel--Nagel [EN].**

| Engel--Nagel heading | disposition |
|---|---|
| I.5.a *Strongly continuous semigroups: basic properties* | `included` PDE-23 items 1--3 |
| I.5.b *Standard constructions* | subspace/quotient/product constructions `inline` PDE-23 examples; no duplicate FA quotient theory |
| II.1 *Generators of semigroups and their resolvents* | `included` PDE-23 items 4--10 |
| II.2.a *Examples revisited: standard constructions* and II.2.b *standard examples* | translation/multiplication/differential examples `included` PDE-23 B |
| II.3.a *Generation of groups and semigroups* | `included` PDE-23 Hille--Yosida items 11--14 |
| II.3.b *Dissipative operators and contraction semigroups* | `included` PDE-23 items 15--16 |
| II.3.c *More examples* | heat/differential-operator examples `inline` PDE-23/PDE-24; examples requiring boundary systems are `out-of-scope` |
| II.4.a *Analytic semigroups* | `included` PDE-24 |
| II.4.b *Differentiable semigroups* | positive-time differentiability `included` PDE-24 items 5--6 |
| II.4.c *Eventually norm-continuous semigroups* and II.4.d *Eventually compact semigroups* | `deferred`: finer asymptotic regularity classes are not needed for the analytic parabolic spine |
| II.4.e *Examples* | analytic multiplication/heat examples `included` PDE-24 B; eventual-only examples are `deferred` with II.4.c--d |
| II.6 *Well-posedness for evolution equations* | `included` PDE-23 items 17--19 |

EN II.5 *Interpolation and extrapolation spaces* lies between read sections
but was not read as backing: it is `deferred` to a fractional-domain/function-
spaces continuation because PDE-24 only claims integer generator-domain
smoothing. Perturbation, approximation, spectral-asymptotic and specialised
application chapters III--VII are outside the read range and not harvested as
support.

**Schnaubelt [SN].**

| Schnaubelt heading | disposition |
|---|---|
| 1.1 *Basic concepts and properties* | `included` PDE-23 items 1--9 |
| 1.2 *Characterization of generators* | `included` PDE-23 Hille--Yosida chain |
| 1.3 *Dissipative operators* | `included` PDE-23 Lumer--Phillips chain |
| 1.4 *The Laplacian and related operators* | Dirichlet heat generator `included` PDE-23 B/PDE-24 |
| 2.1 *Wellposedness and the inhomogeneous problem* | `included` PDE-23 items 17--19 |
| 2.2 *Mild solution and extrapolation* | mild solution `included` PDE-23; extrapolation spaces `deferred` to the fractional-domain continuation |
| 2.3 *Analytic semigroups and sectorial operators* | `included` PDE-24 |

### 11.13 MIT 18.152 and characteristics-note harvest

**MIT 18.152 [MITPDE].**

| course-note heading | disposition |
|---|---|
| Lecture 5 *The heat equation: fundamental solution and the global Cauchy problem*; §§1 *The fundamental solution*, 2 *Solution of the global Cauchy problem*; Duhamel theorem | `included` PDE-7--PDE-8 |
| Lecture 10 *Introduction to the wave equation* | `included` PDE-9 |
| Lecture 12 *The wave equation: Kirchhoff's formula and Minkowskian geometry* | formula `included` PDE-9; Lorentzian geometry is `out-of-scope` DG/relativity orientation |
| Lectures 13--14 *The wave equation: geometric energy estimates* | `included` PDE-10 |

The course index headings not read here still supplied a coverage check:
Lectures 1--4 and 6--9 are independently `included` PDE-1/PDE-3--PDE-8;
Lecture 11 is independently `included` PDE-9; Lecture 15 is `included` PDE-1;
Lectures 16--18 are `already-planned` FA-23; Lectures 19--20 Schrödinger are
`out-of-scope`; Lectures 21--23 Lagrangian field theories are `out-of-scope`
field theory; Lecture 24 transport/Burgers is independently `included`
PDE-1/PDE-26. These unchecked lectures are not represented as source backing.

**Andersson [KTH], complete characteristics notes.** The source's progression
is: linear first-order equations and characteristic curves; Cauchy data on a
curve/hypersurface and the noncharacteristic condition; semilinear equations;
quasilinear equations; compatibility and local reconstruction. Each heading is
`included` PDE-1--PDE-2. The notes do not contain a global post-crossing
entropy theory, so no PDE-26 claim is attributed to them.

### 11.14 Hamilton--Jacobi and viscosity-source harvest

**Bressan [BHJ].**

| Bressan heading | disposition |
|---|---|
| §1 *Preliminaries: the method of characteristics* | fully nonlinear characteristic system `included` PDE-2; loss of global smoothness `inline` PDE-25 motivation |
| §2 *One-sided differentials*; test-function characterization and stability of strict contacts | `included` PDE-25 item 5 and comparison lemma |
| §3 *Viscosity solutions*; classical consistency | `included` PDE-25 items 3--6 |
| §4 *Stability properties* | `included` PDE-25 items 7--9 |
| §5 *Comparison theorems* | `included` PDE-25 items 10--12 |
| §6 *Control systems* | `out-of-scope`: admissible-control/measurable-selection framework is not built; orientation only in PDE-25 item 21 |
| §7 *The Pontryagin Maximum Principle* and §8 *Extensions of the PMP* | `out-of-scope`: finite-dimensional optimal-control necessary conditions are not PDE prerequisites |
| §9 *Dynamic programming* and §10 *The Hamilton--Jacobi--Bellman equation* | `out-of-scope` as a developed control theory; their value-function sign dictionary is `inline` PDE-25 item 21 |

**Crandall--Ishii--Lions [CIL].**

| CIL heading and named results | disposition |
|---|---|
| §1 *Examples*; Laplace, first-order, HJB/Isaacs, obstacle and geometric examples | first-order example `included` PDE-25; second-order fully nonlinear, Isaacs and geometric examples `deferred` to nonlinear elliptic/control/geometry tracks |
| §2 *The notion of viscosity solutions*; semijets, test functions, classical consistency | first-order specialisation `included` PDE-25 items 2--6 |
| §3 *The maximum principle for semicontinuous functions and comparison for the Dirichlet problem*; theorem of sums | first-order doubling lemma/comparison `included` PDE-25 items 10--12; second-order matrix theorem is `inline` only as source provenance and is not re-minted |
| §4 *Perron's method and existence* | first-order Cauchy/barrier form `included` PDE-25 item 13 |
| §6 *Limits of viscosity solutions and an application*; half-relaxed limits/stability | `included` PDE-25 items 8--9 and 19 |

CIL §§5, 7--10 and the appendix were TOC-harvested but not read as backing:
comparison variants for unbounded solutions are `deferred` beyond the BUC
class; generalised boundary conditions, second-order parabolic problems and
geometric singular equations are `deferred` to specialist viscosity pages;
applications/perspectives are `out-of-scope` survey; the appendix proof of the
second-order theorem of sums is `deferred` because PDE-25 uses only the
first-order penalty argument.

**Tran [TR], Chapters 1--2.**

| Tran heading | disposition |
|---|---|
| 1.1 *Introduction* | `inline` PDE-25 motivation |
| 1.2 *Vanishing viscosity method for first-order Hamilton--Jacobi equations* | `included` PDE-25 item 19 |
| 1.3 *Existence of viscosity solutions via the vanishing viscosity method* | `included` PDE-25 item 19, under the compactness hypotheses stated there |
| 1.4 *Consistency and stability of viscosity solutions* | `included` PDE-25 items 6--9 |
| 1.5 *Comparison principle and uniqueness for static problem* | stationary form `inline` PDE-25 item 11 |
| 1.6 *Comparison principle and uniqueness for Cauchy problem* | `included` PDE-25 items 10--12 |
| 1.7 *Introduction to the classical Bernstein method* | `deferred`: gradient estimates by Bernstein are an alternative route and not needed for the chosen existence proof |
| 1.8 *Introduction to Perron's method* | `included` PDE-25 item 13 |
| 1.9 *Lipschitz estimates for Cauchy problems using Perron's method* | `inline` PDE-25 comparison/existence hypotheses |
| 1.10 *Finite speed of propagation for Cauchy problems* | `included` PDE-25 item 20 |
| 1.11 *Rate of convergence ... via doubling variables* and 1.12 *... via the nonlinear adjoint method* | qualitative convergence `included` PDE-25 item 19; quantitative rates and nonlinear adjoint method `deferred` because they require additional regularity/adjoint estimates not used by the spine |
| 2.1 *Introduction to optimal control theory*, 2.2 *Dynamic Programming Principle*, 2.3 *Static Hamilton--Jacobi equation for the value function* | `out-of-scope` developed control theory; orientation `inline` PDE-25 item 21 |
| 2.4 *Legendre's transform* | definition/application `included` PDE-25 item 14; general convex duality `already-planned` sibling analysis |
| 2.5 *The optimal control formula from the Lagrangian viewpoint* | autonomous straight-line reduction `inline` PDE-25 Hopf--Lax proof; general controls `out-of-scope` |
| 2.6 *A further hidden structure of convex first-order Hamilton--Jacobi equations* | `deferred`: refined convex structure is not needed for existence/uniqueness |
| 2.7 *Maximal subsolutions and their representation formulas* | `deferred`: weak-KAM/maximal-subsolution theory requires a later dynamical continuation |

Tran Chapters 3--8, the Appendix and solutions were harvested from the full
TOC. Nonconvex differential games and finite-difference approximation,
periodic/almost-periodic homogenisation, weak KAM/Aubry--Mather dynamics and
effective-Hamiltonian geometry are each `out-of-scope` as the named specialist
subject; Appendix boundary problems are `deferred` to a viscosity boundary-
condition page. None supplies an unrecorded claim here.

### 11.15 Scalar-conservation-law source harvest

**Bressan [BCL].**

| Bressan heading | disposition |
|---|---|
| §1 *Conservation laws*: 1.1 *The scalar conservation law*, 1.2 *Strictly hyperbolic systems*, 1.3 *Linear systems*, 1.4 *Nonlinear effects*, 1.5 *Loss of regularity*, 1.6 *Wave interactions* | scalar law and loss of regularity `included` PDE-26 items 1--4; every system and wave-interaction heading is `out-of-scope` for the hyperbolic-systems continuation |
| §2 *Weak solutions*: 2.1 *Rankine--Hugoniot conditions*, 2.2 *Construction of shock curves*, 2.3 *Admissibility conditions* | scalar forms `included` PDE-26 items 5--10; vector shock curves/system admissibility `out-of-scope` |
| §3 *The Riemann problem*: 3.1 *Some examples*, 3.2 *A class of hyperbolic systems*, 3.3 *Elementary waves*, 3.4 *General solution*, 3.5 *The p-system*, 3.6 *Error and interaction estimates* | scalar shock/rarefaction examples `included` PDE-26 items 16--19 and B; all system fields, p-system and interaction estimates `out-of-scope` |
| §5 *The Glimm scheme* | `out-of-scope`: a system/BV random-choice construction is not required for scalar Kruzhkov existence |
| §6 *Continuous dependence on the initial data*: 6.1 *Unique solutions to the scalar conservation law*, 6.2 *Linear hyperbolic systems*, 6.3 *Nonlinear systems* | 6.1 `included` PDE-26 items 11--14/21; 6.2--6.3 `out-of-scope` systems |
| §7 *Uniqueness of solutions*: 7.1 front-tracking error, 7.2 semigroup trajectories, 7.3 uniqueness theorems | scalar contraction-semigroup consequence `inline` PDE-26 item 21; front tracking/system uniqueness `out-of-scope` |
| §8 *Vanishing viscosity approximations* | scalar entropy limit `included` PDE-26 items 9/15; system viscous profiles `out-of-scope` |

Section 4 *Global solutions to the Cauchy problem* is a front-tracking/BV
systems chapter and is `out-of-scope`; §9 extensions/open problems is
`out-of-scope` survey. They were checked in the full contents but do not back
PDE-26.

**Kruzhkov [KR], §§1--5.**

| original-paper heading | disposition |
|---|---|
| §1 *Introduction* | historical/method orientation `inline` PDE-26; no theorem rests on the survey claims |
| §2 *Statement of Cauchy's problem; some notation and preliminary observations*; Definition 1 entropy/generalized solution and strong local $L^1$ trace | `included` PDE-26 items 2/10 |
| §3 uniqueness and stability theorems relative to initial data | `included` PDE-26 items 11--14/21 in the autonomous special case |
| §4 vanishing-viscosity existence theorem and viscosity-independent $L^1$ modulus estimates | `included` PDE-26 item 15 |
| §5 remarks and addenda; extensions including systems | scalar remarks `inline` PDE-26; the hyperbolic-system extension is `out-of-scope` because it needs the system theory denied in §3 |

Kruzhkov treats a more general balance law
$u_t+\sum_i\partial_{x_i}\varphi_i(t,x,u)+\psi(t,x,u)=0$. PDE-26 takes the
special autonomous conservation law with $\psi=0$. The scaffold never cites
the special case as proving a converse about general balance laws.

### 11.16 Pair-by-pair two-treatment check

This matrix is the final source-depth check. Each entry names at least two
independent treatments, and at least one is a textbook, monograph or full
lecture-note set with a harvestable TOC.

| pair(s) | independent backing |
|---|---|
| PDE-1--PDE-2 | [T] Chapters 1--2; [E] Chapter 3 and §4.6; [KTH]; [BHJ] §1 |
| PDE-3--PDE-6 | [E] §2.2; [T] Chapter 5; [H] Chapter 2; [I] Chapter 7; [S] I.2 |
| PDE-7--PDE-8 | [E] §2.3; [T] Chapter 6; [H] Chapters 5--6; [I] Chapter 3; [MITPDE] Lecture 5 |
| PDE-9--PDE-10 | [E] §2.4; [T] Chapter 7; [I] Chapters 2/9; [MITPDE] Lectures 10--14 |
| PDE-11--PDE-15 | [E] Chapter 5; [K] Chapters 1--3; [H] Chapter 3; [L] Chapter 3; [B] Chapters 8--9 |
| PDE-16--PDE-17 | [H] Chapter 4; [L] Chapters 3--4; [B] Chapter 9; [T] Chapter 10; [LS] Chapters 4--6/9 |
| PDE-18--PDE-20 | [E] §§6.3--6.4; [H] §§4.11--4.13; [L] Chapter 5; [ACM] Chapter 2; [S] Chapters II/IV |
| PDE-21--PDE-22 | [E] Chapter 8; [T] Chapter 13; [ACM] Chapter 1; [CV] Chapters 4/7 |
| PDE-23 | [EN] I.5/II.1--3/II.6; [B] Chapter 7; [J]; [SN] Chapter 1; [T] Chapter 11 |
| PDE-24 | [EN] II.4.a; [SN] §2.3; [T] §11.5; [B] §7.4 |
| PDE-25 | [TR] Chapters 1--2; [BHJ] §§1--5; [CIL] §§2--4/6; [E] Chapter 10 |
| PDE-26 | [KR] §§1--5; [BCL] §§1--3/6--8; [E] §3.4; [I] §12.1 |

The harvest therefore exposes, rather than hides, the genuine continuations:
general weak parabolic/hyperbolic Galerkin theory, nonlinear elliptic and
fully nonlinear viscosity theory, systems of conservation laws, capacity and
rough-boundary potential theory, fractional function spaces, optimal control,
and dispersive equations. None is a silent prerequisite of the 26-pair spine.
