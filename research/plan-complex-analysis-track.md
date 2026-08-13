# Complex analysis track: one variable, and holomorphic maps $\mathbb{C}^m \to \mathbb{C}^n$

Prose scaffold, owner-commissioned 2026-07-28. Companion to
`research/plan-realanalysis-pages.md`, `research/plan-algebra-track.md`,
`research/plan-topology-track.md` and `research/plan-topology-set-theory-track.md`.
Machine-readable half: `research/plan-spec.json`.

> **ENRICHMENT STATUS (subjects-01, 2026-08-14): PROSE SCAFFOLD ONLY.** This
> commission changes this file and no plan, item, page, status, or build
> artifact. The original CA-1--CA-23 and SC-1--SC-4 plans are already present
> in `research/plan-spec.json`; only
> `complex-differentiability-and-cauchy-riemann` and its examples companion
> have nonempty `items` arrays (28 and 13 items respectively). Every later
> page is planned but unauthored. A future build cycle, not this document,
> decides placement and authors the proposed enrichment pages.

## Summary for the orchestrator (subjects-01 handoff)

**Pairs scaffolded.** The existing relative pairs CA-1--CA-23 and SC-1--SC-4
have been retained and reconciled. This enrichment adds CA-HM-1 (Green
functions/harmonic measure), CA-PT-1 (logarithmic potential/capacity/Riesz),
CA-HP-1 and CA-HP-2 (harmonic and analytic Hardy theory), CA-NV-1 and CA-NV-2
(Nevanlinna theory), CA-EF-1 (elliptic functions), CA-MF-1 (level-one modular
forms), CA-RS-1--CA-RS-4 (Riemann surfaces through uniformisation),
CA-QC-1--CA-QC-3 (quasiconformal theory), and SC-5--SC-8
($\bar\partial$/Levi, kernels, and analytic hypersurfaces). All labels are
relative; this commission performs no splice.

**Disk reconciliation and stale claims corrected.** CA-1's A **and** companion
pages are authored (28 and 13 items); CA-2 onward and SC-1 onward have empty
`items[]` arrays and are plans. The old absolute orders and historical item
totals are retired. The former continuous subharmonic/psh convention, the
unregularised Perron supremum, the claim that Perron costs no choice, the
Hankel-only zeta route, the partial Hartogs convention, and the old denials of
Hardy, distributional potential, elliptic/modular, abstract-surface and
$\bar\partial$/Levi theory have all been corrected. The disk file
`items/rem-riemann-surface-of-log.md` is orphaned from `plan-spec.json`; it is
not called published and remains subject to the un-deferral procedure.

**Full texts obtained.** The corpus includes complete copies of Ahlfors and
Stein--Shakarchi (the requested standard primaries), the open textbooks of
Weber and Howell--Mathews, and complete texts/notes by Axler--Bourdon--Ramey,
Schlag, Romik, Milne, McMullen, Looijenga, Bishop, Lyubich, Lebl, Demailly,
Boas, Błocki, Garnett, Saff, Khoruzhenko, Srivastava, Eremenko, and
Goldberg--Ostrovskii. Exact read ranges, harvested headings, dispositions and
working URLs appear in the canonical-coverage section; every pair has two
independent treatments in the pair-backing matrix.

**Seams consumed.** This track cites rather than re-mints the measure track's
Lebesgue/$L^p$/Radon/maximal/differentiation machinery; the functional track's
Hilbert, Fourier, Poisson-summation, distributions and weak-compactness
interfaces; the PDE track's $\mathbb R^n$ harmonic/elliptic theory; and the
topology track's compactification, covering, homotopy and fundamental-group
interfaces. It restricts its harmonic theory to the sharp plane case.

**Seams supplied or owed.** CA-21/CA-22 supply the later number-theory track
with the exact $\Gamma$ and $\zeta$ interface stated below, including Euler
product, meromorphic continuation, completed functional equation and
nonvanishing on $\Re s=1$, but no quantitative zero-free region; arithmetic
consequences and $L$-functions remain number theory's. PDE should cite CA-13,
CA-14, CA-HM-1 and CA-PT-1 for the $n=2$ holomorphic/harmonic dictionary and
planar boundary theory. The numbered “Amendments” section also records the
real-analysis $\mathbb C$ dictionary, topology winding direction, the orphaned
deferred item, and the conditional boundary-homeomorphism seam.

**Unresolved forward interfaces.** A future build must (i) move the general
holomorphic-logarithm branch into CA-7 before CA-9 uses keyhole contours,
(ii) settle whether the $\mathbb C$ dictionary is homed on the complex
exponential page or CA-1, (iii) prove the improper-parameter-integral extension
needed by $\Gamma$, (iv) supply Newton identities on an A page or prove the
needed finite case inside SC-3, (v) charge the exact inherited weak-choice
strength of the measure/Hilbert suppliers, and (vi) require a homeomorphic
extension to the closures whenever boundary data or harmonic measure are
transported pointwise. None is silently load-bearing here.

**Scope denials.** Arithmetic consequences of $\zeta$ and modular forms;
fine potential theory (Wiener/Kellogg), Brownian representations and weighted
potential theory; prime ends and unrestricted Jordan boundary correspondence;
Carleson/corona/interpolation and operator-model Hardy theory; higher/angular
value distribution; Teichmüller/deformation theory; sheaf/coherent/global
analytic-space theory; CR and $\bar\partial$-Neumann regularity; and
research-scale approximation/univalence results are denied for the specific
subject/prerequisite reasons in the normative scope table. **Blockers: none.**

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

**AUTHORITY BOUNDARY (CX-D9, amended).** This file owns the existing
**CA-1--CA-23** and **SC-1--SC-4** prose and the enrichment pairs expressly
minted below. It says nothing normative about another track except through
"Amendments to existing scaffolds." In particular, the measure-theory,
functional-analysis, and PDE scaffolds remain authoritative for their pages;
this track cites their interfaces. Two scaffolds must never claim the same
page.

**ORDER-STALENESS WARNING (corrected 2026-08-14).** The original draft's
absolute orders are stale: CA-1 is now the page id
`complex-differentiability-and-cauchy-riemann` at order 303, and the existing
band ends with the SC-4 companion at 356. Relative labels and page ids are the
authority throughout this enrichment. Any surviving old order is historical
orientation only and must be recomputed from `research/plan-spec.json` at a
future splice.

---

## Why this track exists

The owner's commission (2026-07-28): *"everything from complex number
definition and arithmetics to fundamental theorem of algebra, continuity,
differentiation, and integration of complex valued functions
$f : \mathbb{C}^m \to \mathbb{C}^n$, and all surrounding theorems"*, ground-up,
at standard undergraduate **and** graduate scope.

The reconciliation, verified from disk 2026-07-28, is the first thing to
report, because a large part of the literal commission is **already in the
plan and is not this track's business**:

### What the published library already gives, and what remains only planned

The original sentence "there is no $\mathbb C$ content authored at all" is
stale and is withdrawn. Disk reconciliation on 2026-08-14 uses the `items`
array, not the presence of a page object: the algebraic construction of
$\mathbb C$, its analytic exponential/metric structure, and the first complex
analysis pair are now authored. In this track the CA-1 A/B pair alone is real;
CA-2 onward
remain empty plans. The prerequisite interfaces that this scaffold must cite,
rather than re-mint, are:

| page id | state verified from `items[]` | interface supplied |
|---|---|---|
| `field-extensions-and-the-complex-numbers` | authored | $\mathbb C=\mathbb R[x]/(x^2+1)$, the real embedding, coordinates, conjugation, modulus, field laws, square roots, and the coordinate-plane dictionary. |
| `the-fundamental-theorem-of-algebra` | planned, unauthored (`items[]` empty) | the planned algebraic proof that $\mathbb C$ is algebraically closed. The future CA-5 supplies a later Liouville proof and records agreement; it cites the earlier statement once that predecessor is authored rather than re-minting it. |
| `the-complex-exponential-and-eulers-formula` | authored | completeness and the metric dictionary for $\mathbb C$, complex series, exponential and Euler's formula, polar form, roots of unity, principal logarithm, and the obstruction to a global logarithm on $\mathbb C^\times$. |
| `complex-differentiability-and-cauchy-riemann` / `complex-differentiability-and-cauchy-riemann-examples` | authored (28 / 13 items) | complex derivative, the $\mathbb R$-linear/$\mathbb C$-linear differential dictionary, Cauchy--Riemann and Wirtinger forms, elementary differentiation rules, conformality at a noncritical point, and the approved examples/counterexamples. These ids are immutable and CA-1 enrichment must cite them verbatim rather than proposing replacements. |
| MT-8/MT-11/MT-14/MT-17/MT-20: `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem` | finished prose scaffold, absent from live `plan-spec.json`; must be built below this consumer | Lebesgue integration, $L^p$, Radon measures, Fatou/dominated convergence, maximal-function machinery and the measure interface needed by USC subharmonic functions and Hardy boundary values. |
| FA-22/FA-23/FA-25: `fourier-transform-convolution-and-approximate-identities`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform` | finished prose scaffold, absent from live `plan-spec.json`; must be built below this consumer | $L^1$/Schwartz/tempered Fourier theory, Plancherel and Fourier invariance of the Dirac comb, which supplies Poisson summation and the Gaussian/theta identity for the zeta functional equation. |

**Rehoming already completed (Alpha, `frontier-11` step 4, 2026-08-12).** The
construction of $\mathbb C$ and its algebraic modulus and conjugation live on
`field-extensions-and-the-complex-numbers`, with the metric identification on
`the-complex-exponential-and-eulers-formula`. Receipt:
`research/frontier-11-rehomed.json`. CA-1 cites both dictionaries; it does not
construct a fourth model of $\mathbb C$.

Two more places touch $\mathbb{C}$: order **90**
(`inner-product-spaces-and-orthogonality`) builds the **Hermitian inner
product** on a complex vector space, and order **127**
(`the-spectral-theorem-and-singular-value-decomposition`) the complex spectral
theorem. Order **92** (`algebraic-extensions-degree-and-finite-fields`) is
where "a finite subgroup of the multiplicative group of a field is cyclic"
lives, which is what makes $\mu_n$ a cyclic group.

### Consequence for the representation-theory scaffolder (asked for explicitly)

> **Historical seam note.** The conclusion (“representation theory does not
> depend on this track”) remains valid, but every absolute order in this
> inherited subsection is a retired 2026-07-28 locator. The named page IDs and
> live `plan-spec.json`, not those numbers, govern placement.

**This track provides representation theory with nothing it needs, and rep
theory must not wait on it.** Everything a character-theoretic representation
track wants from $\mathbb{C}$ is already planned strictly below order 130:

- **a field**, with conjugation and modulus: order **50**;
- **algebraically closed**, hence "every operator on a nonzero
  finite-dimensional complex space has an eigenvalue": order **125** (and the
  operator statement is order **127**);
- **characteristic $0$**, so $\lvert G\rvert$ is invertible: order 50 plus the
  prime-field material there;
- **roots of unity** as an abstract cyclic group of order $n$ (for character
  values, $\mu_n \subseteq \mathbb{C}^\times$): order **92** via the
  cyclic-finite-subgroup theorem, with the explicit $e^{2\pi i k/n}$ form only
  at order **167**;
- **a Hermitian inner product** and unitarity: order **90**;
- the **spectral theorem** for normal/unitary operators: order **127**.

A representation-theory block therefore places naturally just above order 127,
or anywhere above it, and its `requires` should name pages 50 / 92 / 125 / 90 /
127 — **never a page from this file**. The one caveat: if that track wants
character values written as explicit complex exponentials, or wants
$\lvert \chi(g)\rvert \le \chi(1)$ argued from the triangle inequality in polar
form, it needs order **167** as well. It still never needs 243+.

### What is genuinely missing, and what this file scaffolds

CA-1 has now crossed the publication frontier. Everything from complex power
series and contour integration onward remains planned rather than authored:
Cauchy's theory, residues, conformal mapping, plane harmonic and potential
theory, Hardy boundary theory, analytic continuation, $\Gamma$ and $\zeta$,
value distribution, Riemann surfaces, elliptic and modular function theory,
quasiconformal maps, and several complex variables. The original 27 A-pages
remain the spine; this enrichment strengthens them and adds graduate pairs
where a complete proof route is now licensed by the finished lower analysis
tracks.

---

## What the lower analysis and topology tracks give this one

This inherited supplier map was assembled in 2026-07-28 order space. Its
absolute-order column and old publication adjectives are **retired historical
locators**; only the named page concepts remain useful. The 2026-08-14
measure/functional/PDE interface table immediately below it and live
`items[]` checks govern future builds.

| retired locator | page | what this track takes from it |
|---|---|---|
| 113 / 115 | series; absolute convergence and rearrangement | unordered/absolute summation, the Cauchy product, `def-infinite-product` (already an authored item, homed on 115) |
| 119 | Cantor set, Baire category, measure zero in $\mathbb{R}$ | **published**: `thm-baire-category-r`, `rem-baire-in-r-is-choice-free` |
| 121 / 123 | limits of real functions; continuity, IVT, EVT, uniform continuity | **published**: the whole continuity toolkit, Heine–Cantor, `lem-integer-part` |
| 129 | monotone functions and discontinuities | **published**: `def-semicontinuity`, `thm-semicontinuity-level-set-characterisation`, `thm-semicontinuous-evt` |
| 131 / 133 | the derivative and the MVTs; Darboux, L'Hôpital, Taylor | the real differentiation calculus underneath the Wirtinger operators |
| 137 / 139 | **the Riemann integral**; properties and the working FTC | the integral the contour integral is built from, and change of variables |
| 141 | bounded variation and Riemann–Stieltjes | the rectifiable-path generalisation of the contour integral |
| 143 | improper integrals | $\Gamma$, and the residue evaluation of real integrals |
| 145 | $\mathbb{R}^n$ as a normed space | the norm, segments, convexity, completeness of $\mathbb{R}^2$ |
| 147 | uniform convergence of functions | the M-test, termwise integration, $C(K)$ complete |
| 149 | approximation and compactness in $C(K)$ | **Arzelà–Ascoli** (this is what Montel needs; the general Ascoli page at 225 is NOT required), Stone–Weierstrass |
| 151 | power series and real-analytic functions | Cauchy–Hadamard, radius of convergence, re-expansion, Abel's limit theorem |
| 155 | the logarithm and general powers | the REAL $\log$ and $x^\alpha$, for the anti-two-notions dictionaries |
| 157 / 161–165 | sine, cosine and $\pi$; the trig identity pages | $\cos$, $\sin$, periodicity, the trig/hyperbolic dictionary |
| 159 | arc length and rectifiable curves | **rectifiability $\iff$ components BV**, length as a supremum, $\ell = \int\lVert\gamma'\rVert$ for $C^1$, reparametrisation invariance |
| **167** | the complex exponential and Euler's formula | see the table above. **This is the base of the track.** |
| 169 / 171 / 173 | the total derivative; mixed partials and Taylor; inverse and implicit function theorems | the real Fréchet derivative under the CR equations; continuous partials $\Rightarrow$ differentiable; the real IFT that the holomorphic IFT is deduced from |
| 175 / 177 | the Riemann integral in $\mathbb{R}^n$ and Jordan content; Fubini and change of variables | holomorphy of parameter integrals; the SCV polydisc integrals |
| 181 | line integrals and the gradient theorem | Green's theorem, the Poincaré lemma on star-shaped domains, exact/closed forms, and **the vortex field $(-y, x)/(x^2+y^2)$** — the real-variable shadow of the winding number, already scaffolded there |
| 195 | compactness (general) | the **one-point (Alexandroff) compactification**, which is what $\widehat{\mathbb{C}}$ is; compact-to-Hausdorff is a homeomorphism |
| 197 | the topology of Euclidean space | connected $\iff$ path-connected $\iff$ polygonally connected for open sets; $S^{n-1}$; local compactness; $\sigma$-compactness |
| 217 | complete metrizability and Baire | Baire in a complete metric space (SC-2's Baire step lives in $\mathbb{C}^{m-1}$) |
| 229 / 231 / 233 / 235 | homotopy; $\pi_1$; covering spaces and lifting; $\pi_1(S^1)\cong\mathbb{Z}$ | path homotopy for the **monodromy theorem**; $\pi_1$ for the simply-connected grand equivalence; covering spaces for the **Riemann surface of $\log$**; the degree/winding-number dictionary |

The 2026-08-14 enrichment also consumes these completed seam contracts:

| supplier track and page id | interface consumed here |
|---|---|
| measure theory: MT-8, MT-11, MT-13--MT-17 and MT-20 | integrals of USC subharmonic functions; Riesz measures; weak-* limits of boundary measures; $L^p$ Poisson convergence; Fatou radial limits; F. and M. Riesz. |
| functional analysis: FA-13, FA-22--FA-25 | Hilbert Riesz/projection, convolution and approximate identities, Plancherel, tempered distributions and Dirac-comb Poisson summation; the theta functional equation is derived rather than re-minted as an FA item. |
| PDE: PDE-3, PDE-4 and PDE-6 | this track supplies only the sharp $n=2$ holomorphic/harmonic dictionary, disc and plane-domain theory. The PDE track owns the $\mathbb R^n$ mean-value, Harnack, fundamental-solution and elliptic-regularity generalisations. |

---

## Decisions proposed for the owner

Each is a proposal, not a taken decision — the owner is away. Numbered so the
orchestrator can present them one at a time per LEVELS.md step 3.

**CX-D1. Scope (amended 2026-08-14): graduate one-variable theory and a proved
SCV continuation.** The old four-page SCV ceiling was caused by then-missing
measure and functional analysis. Those suppliers now exist. Keep CA-1--CA-23
and SC-1--SC-4, enrich the plane harmonic and special-function spine, and add
the sourced Hardy, potential, Riemann-surface, elliptic/modular,
value-distribution, quasiconformal, $\bar\partial$/Levi, kernel, and analytic-set
pairs below. Sheaf cohomology and arithmetic consequences remain outside the
track for subject-boundary reasons, not because their prerequisites were
mistakenly assumed absent.

**CX-D2. Placement (amended): preserve the existing band and use relative
labels.** CA-1--CA-23 and SC-1--SC-4 already occupy their plan band; this
commission performs no splice and no renumber. Each enrichment section names
its conceptual seam (for example, after CA-14 or after CA-23). The orchestrator
computes absolute placement in a future build.

**CX-D3. New index group `complex-analysis`.** The original 27 A-pages plus
the enrichment pairs will not fit inside
`real-analysis` (which already carries 24) and is not `topology`. Verified in
the frozen `web/lib/library-categories.ts`: `STYLES` contains
`foundations`, `real-analysis`, `abstract-algebra`, `linear-algebra`,
`number-theory`, `combinatorics`, `not-proved-here` — and **there is no
`topology` entry**, so the existing `topology` group already renders through
`FALLBACK` (neutral). **Adding `complex-analysis` therefore requires NO change
to that frozen file**: the group renders in neutral exactly as `topology` does
today. Giving it a hue is a restyle and is the owner's call alone. Sky and
fuchsia remain reserved (forward references; the ‡ tier). Do not touch
`library-categories.ts` as part of this splice.

**CX-D4. Cauchy's theorem: the HOMOLOGY form is primary; homotopy is a later
dictionary.** The spine is Goursat $\to$ primitive on a star-shaped domain
$\to$ Cauchy in a convex domain $\to$ the integral formula for a circle $\to$
analyticity $\to$ the winding number $\to$ **Dixon's proof of the homology
form** (CA-7). Reasons:

- The winding number is defined by an integral, so the homology form needs **no
  topology at all** beyond connectedness of $\mathbb{C}\setminus\gamma^\ast$
  — Dixon's 1971 argument uses only Liouville and the local theory. That keeps
  CA-1 … CA-10 free of any dependency above order 197, which is what makes
  CX-D2 cheap.
- The homotopy form (a null-homotopic cycle has vanishing integral) is then a
  **corollary** at CA-20, once $\pi_1$ (231) is available, together with the
  monodromy theorem. Deriving homology-from-homotopy is easy; the reverse is
  not, and taking homotopy as primary would drag the whole spine above order
  231 for no gain.
- Nothing in the track is proved twice. The homotopy form appears once, as a
  named corollary, with the agreement remark the library requires.

**CX-D5. Contour integrals over piecewise-$C^1$ paths are primary; the
rectifiable/Riemann–Stieltjes version is a single generalisation theorem.**
Answering the prerequisites question directly:

- **Does the Riemann integral at 137/139 suffice? YES**, for the primary
  definition. $\int_\gamma f\,dz := \int_a^b f(\gamma(t))\gamma'(t)\,dt$ for
  piecewise-$C^1$ $\gamma$ is a Riemann integral of a piecewise-continuous
  $\mathbb{C}$-valued function of a real variable — order 137 gives
  integrability, 139 gives linearity, additivity and the change-of-variables
  rule that discharges parametrisation-independence.
- **Do you also need a line integral over a rectifiable path? Not for any
  theorem in this track** — every statement is about piecewise-$C^1$ contours,
  and the two global Cauchy theorems, the residue theorem and the argument
  principle are all stated that way in Ahlfors and Stein–Shakarchi.
- **Where would rectifiability come from if wanted?** It exists:
  `bounded-variation-and-riemann-stieltjes` (141) gives BV and the
  Riemann–Stieltjes integral; `arc-length-and-rectifiable-curves` (159) proves
  **rectifiable $\iff$ the components are BV, with length $=$ total
  variation**, plus reparametrisation invariance. So the Conway-style
  definition $\int_\gamma f\,dz := \int_a^b f\,d\gamma$ (RS) is fully licensed.
  **Scaffolded as ONE theorem on CA-3** ("for a piecewise-$C^1$ path the two
  definitions agree"), because a library that has both notions and never
  relates them is the library's canonical two-notions defect. Nothing else in
  the track cites it.

**CX-D6. Subharmonic and plurisubharmonic functions use the standard USC
convention (corrected 2026-08-14).** A function $u:\Omega\to[-\infty,\infty)$
is subharmonic when it is upper semicontinuous, not identically $-\infty$ on a
component, and satisfies the disc sub-mean inequality; plurisubharmonic means
USC, not identically $-\infty$ on a domain component, with every affine-line
restriction either subharmonic or identically $-\infty$. The exception on a
line is essential for $\log|z_1|$ restricted to a line in its zero set. The
earlier continuous convention was a temporary response to missing measure
theory and is now withdrawn. This correction is essential: $\log|f|$, decreasing limits,
upper-regularised suprema, Riesz measures, Perron envelopes, and SCV
pseudoconvexity all require the standard class. The pages prove that continuous
subharmonic functions form a subclass and record the equivalent comparison
principle; they never silently replace USC by continuity.

**CX-D7. Three proofs of the fundamental theorem of algebra, and they must
speak to each other.** The library will end up with:

| relative source | route | page |
|---|---|---|
| earlier algebra | algebraic: odd degree + square roots + symmetric functions | `the-fundamental-theorem-of-algebra` |
| earlier topology | topological: $\pi_1(S^1)\cong\mathbb{Z}$ and the large-radius loop | `applications-of-the-fundamental-group` |
| this track | analytic: **Liouville** | **CA-5** |

CA-5 carries a `rem-` naming all three and stating what each costs, in the
non-decaying "what THIS proof uses" form. It cites the algebra page's statement once authored; it does
**not** claim anything about what the library does or does not contain (the
level-9 published-claim-decay lesson). Algebra-track decision D6 set this
precedent for unique factorisation.

**CX-D8. $\zeta$ stops at the function-theoretic interface.** CA-22 supplies
meromorphic continuation, the Euler product on $\Re s>1$, the theta/Mellin
functional equation, the completed function, trivial zeros, and nonvanishing
on $\Re s=1$. It does not supply a quantitative zero-free region. Prime-number
theorems, Dirichlet's theorem, Dirichlet series attached to characters, and
$L$-functions belong to the later number-theory track, which cites the explicit
supplier contract below.

**CX-D9. Authority boundary** — see the banner. This file owns its relative
CA/SC labels and no absolute future placement.

**CX-D10. Standing requirements**, in the owner's words, binding every page
here: (1) every definition carries its well-definedness obligations as
**numbered items**, never a parenthetical — the table below; (2) **zero
load-bearing undeclared forward references** across all A-pages, and every page section
ends with an explicit forward-reference statement; (3) anything needing
machinery outside the library's published-plus-planned scope is **DROPPED with
a recoverable note** — the scope-denial table — the sole exemption being the
adopted choice axioms and independence facts about them.

---

## Choice strength (owner requirement: say which weak form, where)

The track is a **ZF + DC** track. There is no use of full AC anywhere, and no
use of Zorn's lemma. The places where the cost is not zero:

| where | cost | note |
|---|---|---|
| CA-15 Montel, via Arzelà–Ascoli (149) | **AC$_\omega$/DC**, inherited | the diagonal subsequence extraction. **Inherit the cost recorded on order 149; do not re-derive it.** Named in the Statement of Montel's theorem. |
| CA-16 Riemann mapping | **DC**, one use | a maximising sequence for the extremal problem, plus the Montel extraction. |
| CA-18 / CA-19 Weierstrass, Mittag-Leffler, Runge | **AC$_\omega$** at most | choosing a compact exhaustion and choosing one rational approximant per stage; a canonical exhaustion $K_n = \{z : \lvert z\rvert \le n,\ d(z,\partial\Omega)\ge 1/n\}$ makes both choice-free, and the pages must use it. |
| CA-14 Perron | **AC$_\omega$/DC** | The supremum itself is choice-free, but the standard proof chooses functions within $1/n$ of the envelope and then uses finite maxima, Poisson modifications and Harnack convergence. Charge the sequence choice honestly. |
| CA-13 Poisson, CA-9 residues, CA-7 Dixon, CA-1 … CA-6 | **none** | ZF. |
| SC-2 full Hartogs theorems | **ZF relative to integration** | The completed measure/$\bar\partial$ interfaces permit the standard integral proof. The old Baire/DC partial route is retired rather than retained as a hidden choice cost. |
| CA-HP Hardy boundary subsequences and representing measures | **AC$_\omega$/DC, inherited** | Use the separability of $C(\mathbb T)$ and sequential weak-* extraction recorded by the measure/functional-analysis suppliers; do not invoke unrestricted Banach--Alaoglu. |
| CA-PT equilibrium measures | **AC$_\omega$/DC, inherited** | Probability measures on a compact metric set are handled by the supplier's sequential weak-* compactness. Canonical compact exhaustions avoid arbitrary set-indexed choices. |
| CA-HM harmonic measure | **inherited from Riesz--Markov** | Copy the exact MT-20 choice charge for representing a positive functional; the conformal and maximum-principle arguments add no choice. |
| CA-RS-2/3 finite-dimensional bases | **ZF** | Each space is proved finite dimensional before a basis is selected; finite choice is a theorem of ZF. |
| CA-RS-4 uniformization | **DC, inherited** | Countable exhaustion, Dirichlet minimising sequences and normal-family extraction consume exactly the choice charged by the PDE, Hilbert-space and Montel interfaces. |
| CA-QC-1/2 compactness and measurable Riemann mapping | **DC, inherited** | The approximation/compactness proof repeatedly extracts subsequences and uses weak compactness in separable $L^p$ spaces. No full AC or Zorn argument is introduced. |
| SC-6 Hörmander minimisers | **choice inherited from the Hilbert-space projection/weak-compactness items** | The scaffold must copy the exact supplier strength at build time; it may not relabel the result ZF merely because the minimiser is unique. |
| SC-5 / SC-8 local integral and hypersurface theory | **ZF relative to prerequisites** | Coordinate formulas, finite preparation and canonical cutoffs/exhaustions introduce no new choice. |
| SC-7 Bergman/Szegő Hilbert representations | **choice inherited from Hilbert Riesz/projection** | Use a fixed countable dense sequence for basis expansions; do not appeal to existence of arbitrary Hilbert bases. |
| CA-EF, CA-MF, CA-NV and the finite classical core | **ZF relative to prerequisites** | Explicit series, finite-dimensional arguments and canonical exhaustions suffice. |

Every page carries a `rem-…-choice-ledger` in the style of the published
`rem-choice-ledger` where any of the above applies, and says nothing where
nothing applies.

---

## Well-definedness obligations (CX-D10 req. 1)

Each row is a REQUIRED numbered item on its page, never a parenthetical, per
the WORKFLOW definition-justification rule. The heavy rows — 6, 8, 12, 18, 21,
22, 26 — are the ones the owner named by hand.

| # | page (order) | the definition | what must be proved, as its own item |
|---|---|---|---|
| 1 | CA-1 | **the identification $\mathbb{C} = \mathbb{R}^2$** | the field of order 50 ($\mathbb{R}[x]/(x^2+1)$), the normed space $\mathbb{R}^2$ of 145, and the metric space of 167 carry the SAME addition, the SAME modulus and the SAME metric. A dictionary item, not a restatement. Without it the library holds three $\mathbb{C}$'s that say nothing to each other — the canonical two-notions defect. |
| 2 | CA-1 | **the Wirtinger operators** $\partial_z, \partial_{\bar z}$ | for real-differentiable $f$, the total derivative (169) is unique and is an $\mathbb{R}$-linear map $\mathbb{C}\to\mathbb{C}$; every such map is UNIQUELY $w \mapsto aw + b\bar w$; $\partial_z f := a$, $\partial_{\bar z} f := b$. Uniqueness of the decomposition is the obligation. |
| 3 | CA-1 | **conformal** (angle- and orientation-preserving) | the angle between two curves through a point is well defined (independent of the parametrisations), via 159's reparametrisation lemmas and the inner product of 90/145. |
| 4 | CA-3 | the **$\mathbb{C}$-valued Riemann integral** $\int_a^b f$ | defined by real and imaginary parts; agrees with the order-137 Riemann integral when $f$ is real-valued; linearity over $\mathbb{C}$ (not just $\mathbb{R}$); and $\lvert\int f\rvert \le \int\lvert f\rvert$, which needs the rotation trick and is NOT componentwise. |
| 5 | CA-3 | **the contour integral** $\int_\gamma f\,dz$ | **independence of the parametrisation**: if $\varphi$ is an increasing piecewise-$C^1$ bijection then $\int_{\gamma\circ\varphi} f = \int_\gamma f$ (change of variables, order 139). Plus additivity under subdivision and the sign under reversal. Owner-named. |
| 6 | CA-3 | the **length** of a contour | $\int_a^b\lvert\gamma'\rvert$ agrees with the arc length of order 159 (a supremum over inscribed polygons). Dictionary item; 159 proves the $C^1$ case, so this is a citation plus the piecewise patch. |
| 7 | CA-5 | the **order of a zero** $m$ | not all derivatives vanish unless $f\equiv 0$ on the component (identity theorem), so a least $m$ exists; and the factorisation $f = (z-a)^m g$ with $g(a)\ne 0$ determines $m$ **uniquely**. Without uniqueness "the order" is not a phrase. |
| 8 | CA-7 | **the winding number** $n(\gamma, a)$ | THREE items: (a) $n(\gamma,a) := \frac{1}{2\pi i}\int_\gamma \frac{dz}{z-a}$ **is an integer** — via $h(t) = (\gamma(t)-a)\exp\!\big({-\int_{t_0}^{t}\gamma'/(\gamma-a)}\big)$ being constant, then $\ker\exp = 2\pi i\mathbb{Z}$ from order 167; (b) it is **constant on each connected component** of $\mathbb{C}\setminus\gamma^\ast$ (continuity plus integrality); (c) it is **$0$ on the unbounded component** (the ML estimate). Owner-named; this is the single most important row in the table. |
| 9 | CA-7 | **chains and cycles** | a chain is an element of the free abelian group on piecewise-$C^1$ paths in $\Omega$; $\int_\Gamma$ and $n(\Gamma, a)$ are well defined ON THE FREE GROUP, i.e. depend only on the formal sum and not on the list of paths chosen to represent it. Then "$\Gamma$ is null-homologous in $\Omega$" ($n(\Gamma,a)=0$ for every $a\notin\Omega$) is a property of the cycle. |
| 10 | CA-8 | **the Laurent expansion** in an annulus | **existence AND uniqueness** of $(a_n)_{n\in\mathbb{Z}}$ with $f(z) = \sum a_n (z-a)^n$ locally uniformly on $A(a; r, R)$. Uniqueness is a separate item (integrate against $(z-a)^{-n-1}$) and is what licenses the definite article in "the Laurent series", "the principal part", "the residue". Owner-named. |
| 11 | CA-8 | the **classification** of an isolated singularity | removable / pole of order $m$ / essential is **exhaustive and mutually exclusive**, and each case has an equivalent characterisation not mentioning the expansion (Riemann's removability criterion; $\lvert f\rvert\to\infty$; Casorati–Weierstrass). |
| 12 | CA-8 | **the residue** $\operatorname{Res}(f, a)$ | $:= a_{-1}$ of the unique Laurent expansion (row 10); the equivalent form $\frac{1}{2\pi i}\int_{\lvert z-a\rvert=r} f$ is **independent of $r$** for all small $r$, proved separately. If a residue at $\infty$ is used, its sign convention is its own `rem-`. Owner-named. |
| 13 | CA-11 | **the Riemann sphere** $\widehat{\mathbb{C}}$ | the one-point compactification (order 195) of $\mathbb{C}$ is compact Hausdorff (195 proves when this holds: $\mathbb{C}$ is locally compact Hausdorff); **stereographic projection is a homeomorphism onto $S^2\subseteq\mathbb{R}^3$** (order 197's sphere); and the two charts $z$ and $1/z$ have **holomorphic transition map** $z\mapsto 1/z$ on the overlap — which is what licenses "holomorphic at $\infty$" and "meromorphic on $\widehat{\mathbb{C}}$". First instance of the owner's chart-compatibility obligation. |
| 14 | CA-11 | a **Möbius transformation** as a map of $\widehat{\mathbb{C}}$ | the values at $-d/c$ and $\infty$ are forced by continuity, so the extension is unique; $\mathrm{GL}_2(\mathbb{C}) \to \operatorname{M\ddot ob}$ is a surjective group homomorphism with kernel the scalars, so a Möbius map is well defined by its matrix **up to scalars** — the projective statement, proved, not asserted. |
| 15 | CA-11 | the **cross-ratio** | the unique Möbius map sending $(z_1,z_2,z_3)$ to $(0,1,\infty)$ exists and is unique — that uniqueness IS the well-definedness of $(z, z_1, z_2, z_3)$. |
| 16 | CA-12 | **a branch of $\arg$, and the branch cut** | $\arg$ is NOT a function. The obligations: a continuous argument exists on any simply connected $\Omega \subseteq \mathbb{C}\setminus\{0\}$; the **principal** $\operatorname{Arg}$ on $\mathbb{C}\setminus(-\infty,0]$ is single-valued and continuous, and the cut is what makes it so; any two continuous arguments on a connected $\Omega$ differ by a constant in $2\pi\mathbb{Z}$. **Check order 167 first** — its scaffold already promises the principal logarithm and "no continuous logarithm on $\mathbb{C}\setminus\{0\}$"; if the principal branch is discharged there, CITE it and prove here only the general-domain version. Do not re-mint. Owner-named. |
| 17 | CA-12 | **a holomorphic branch of $\log$** on a domain | existence on simply connected $\Omega$ with $0\notin\Omega$ (a primitive of $1/z$, normalised at one point); **uniqueness up to an additive constant in $2\pi i\mathbb{Z}$**; so "the" branch is only definite after a normalisation, which is stated where the symbol is introduced. |
| 18 | CA-12 | **$z^\alpha$** | $z^\alpha := \exp(\alpha \log z)$ inherits row 17 exactly: it is a function only after a branch is fixed, and different branches differ by $e^{2\pi i k\alpha}$. Plus TWO dictionary items: it agrees with the algebraic power when $\alpha\in\mathbb{Z}$ (`roots-and-rational-powers`, order 16) and with the real $x^\alpha$ for $x>0$ under the principal branch (`the-logarithm-and-general-powers`, order 155). Owner-named. |
| 19 | CA-13 | the **harmonic conjugate** | exists on a simply connected domain (a primitive again); **unique up to an additive real constant**; and $u + iv$ is then holomorphic. |
| 20 | CA-13 | **the** solution of the Dirichlet problem on the disc | the Poisson integral $P[u]$ is harmonic inside and extends continuously to the boundary datum; **uniqueness** by the maximum principle. Both halves are needed before the definite article. |
| 21 | CA-14 | **the Perron solution** | four items: the Perron family is nonempty; its pointwise supremum is finite (bounded by $\max\varphi$); the supremum is **harmonic** (harmonic modification by Poisson lifting, plus Harnack); and it attains the boundary value at $\zeta$ **iff there is a barrier at $\zeta$**. Only then is "the Perron solution of the Dirichlet problem on $\Omega$" a phrase. |
| 22 | CA-15 | the **topology of local uniform convergence** on $H(\Omega)$ | the metric built from a compact exhaustion is a metric; **different exhaustions give the same topology** (so "normal family" and "locally uniformly convergent" do not depend on the exhaustion); and $H(\Omega)$ is closed in $C(\Omega)$ (Weierstrass convergence, CA-5). |
| 23 | CA-18 | the **infinite product** $\prod(1+a_n)$ over $\mathbb{C}$ | reuse `def-infinite-product` (authored, homed on order 115) and prove only the $\mathbb{C}$-specific clauses: at most finitely many factors vanish, the tail converges to a NONZERO limit, and the zero set of the product is the union of the zero sets with multiplicity. Do NOT re-mint the definition. |
| 24 | CA-18 | the **canonical product** and the genus | the elementary factors $E_p$ and the choice of $p_n$ making $\prod E_{p_n}(z/a_n)$ converge; and the honest limit: the Weierstrass factorisation is unique only **up to a factor $e^{g}$**, stated where defined rather than discovered later. |
| 25 | CA-20 | **the germ** of a holomorphic function at a point | "agree on some neighbourhood" is an equivalence relation; the stalk's ring operations are representative-independent. |
| 26 | CA-20 | **analytic continuation along a path** | the continuation of a germ along $\gamma$ is **independent of the admissible chain of discs and germs chosen** (the refinement/subdivision lemma). This is what licenses "**the** continuation of $f$ along $\gamma$"; the monodromy theorem is a further, different statement (independence of $\gamma$ within a homotopy class). Owner-named; the two must be separate items and in this order. |
| 27 | CA-20 | the **Riemann surface** of a complete analytic function | the sets $\{$germs at $w$ obtained from $g$ by continuation inside $D\}$ form a **basis** (cite the published `thm-basis-criterion`); each chart "germ $\mapsto$ its base point" is a homeomorphism onto a disc; the transition maps are **identities, hence holomorphic** — the charts are compatible. Only then is "the Riemann surface of $\log$" a space. Owner-named. |
| 28 | CA-21 | **$\Gamma$ on $\mathrm{Re}\,z>0$** | the improper integral converges locally uniformly (order 143) and is **holomorphic in $z$** — which needs its own lemma, *holomorphy of a parameter integral* (Morera plus Fubini for the Riemann integral, order 177), stated once and cited by CA-19, CA-21 and CA-22. |
| 29 | CA-21 | the **meromorphic continuation** of $\Gamma$ | $\Gamma(z) = \Gamma(z+n)/(z(z+1)\cdots(z+n-1))$ is independent of $n$, so the continuations agree on overlaps and define one function on $\mathbb{C}\setminus\{0,-1,-2,\dots\}$; uniqueness by the identity theorem. |
| 30 | CA-22 | the **continuation of $\zeta$** and the completed functions | first continue to $\Re s>0$ by the sum--integral correction and then to $\mathbb C$ by the split Mellin transform of $\theta(t)-1$; prove overlap agreement and uniqueness by the identity theorem. The eta identity is not divided through at the zeros of $1-2^{1-s}$ without a removability proof. Define $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ and $\xi(s)=\tfrac12s(s-1)\Lambda(s)$ separately and prove their domains and singularities before using either functional equation. |
| 31 | SC-1 | a **holomorphic map $\mathbb{C}^m \to \mathbb{C}^n$** | defined componentwise; the numbered obligation is that this is EQUIVALENT to the existence of a $\mathbb{C}$-linear total derivative $\mathbb{C}^m\to\mathbb{C}^n$ (order 169's uniqueness of the total derivative). This is the item that discharges the owner's $f:\mathbb{C}^m\to\mathbb{C}^n$ literally, and it is what lets the rest of the block work with $n=1$. |
| 32 | SC-1 | the **multivariable power series** $\sum_\alpha c_\alpha z^\alpha$ | the sum over the unordered index set $\mathbb{N}^m$ is well defined because the family is absolutely summable on compact subsets of the polydisc (cite the unordered-summation material of order 115, do not re-mint); and the coefficients are unique. |
| 33 | SC-3 | the **Weierstrass polynomial** | in $f = u\cdot W$ with $u$ a unit and $W$ a Weierstrass polynomial of degree $d$, both $u$ and $W$ are **unique**. Uniqueness is what licenses "the Weierstrass polynomial of $f$" and it is a separate item from existence. |
| 34 | SC-4 | the **holomorphically convex hull** $\widehat{K}_\Omega$ | it is closed in $\Omega$ and bounded (from $\lvert z_j\rvert$ being holomorphic); it contains $K$; and $\widehat{\widehat{K}} = \widehat{K}$. Without boundedness the definition of holomorphic convexity says nothing. |
| 35 | SC-4 | **plurisubharmonic** (standard USC convention, CX-D6) | $u:\Omega\to[-\infty,\infty)$ is USC and is not identically $-\infty$ on a domain component; its pullback along every affine complex line is subharmonic or identically $-\infty$. Independence under affine reparametrisation and equivalence with the complex-Hessian criterion for $C^2$ functions are separate items. |
| 36 | CA-EF-1 | $\mathbb C/\Lambda$ | addition, topology and complex charts are independent of coset representatives; changing an oriented lattice basis by $SL_2(\mathbb Z)$ changes no quotient. |
| 37 | CA-EF-1 | $\wp_\Lambda$ | normal absolute convergence on compacta off $\Lambda$ makes the lattice sum independent of enumeration; a symmetric conditionally convergent sum is not silently used. |
| 38 | CA-MF-1 | modular slash action and cusp expansion | passage from $SL_2$ to $PSL_2$, the consequence for odd weights, and dependence on a cusp scaling coordinate are all proved before the quotient notation is used. |
| 39 | CA-MF-1 | $X(1)$ | quotient charts at $i$, $e^{2\pi i/3}$ and $\infty$ use stabiliser-invariant local parameters, so the asserted surface is not an unproved orbit space. |
| 40 | CA-RS-1 | orders, residues and ramification | each is invariant under a change of source/target chart; the degree of a proper map is independent of the regular value after multiplicities are counted. |
| 41 | CA-RS-2 | $\mathcal O(D)$ and Čech cohomology | local equations/trivialisations yield canonically isomorphic line bundles, and the chosen good-cover cohomology is independent of refinement. |
| 42 | CA-RS-3 | the Jacobian and Abel--Jacobi map | bilinear relations make the period subgroup a discrete full lattice; path ambiguity is a period, and the degree-zero divisor map is independent of base point. |
| 43 | CA-RS-4 | descended Poincaré metric | different lifts differ by deck transformations, which are first proved isometries. |
| 44 | CA-QC-1 | extremal length and Beltrami coefficient | curve reparametrisation and null-set changes do not alter the extremal integral; ACL/Sobolev representatives give the same a.e. $\mu$, including the declared value where $f_z=0$. |
| 45 | CA-QC-2 | measurable conformal structure and its solution | $\mu$ transforms as a $(-1,1)$ tensor rather than a scalar, and sphere-solution uniqueness is claimed only after fixing $0,1,\infty$. |
| 46 | CA-QC-3 | conformal welding | welding curves are defined only up to Möbius postcomposition, and uniqueness is asserted only under conformal removability. |
| 47 | CA-HM-1 | Green function and harmonic measure | Green normalisation fixes additive ambiguity; Riesz--Markov gives a unique boundary Radon probability from the positive norm-one Dirichlet-evaluation functional. Conformal pushforward is defined only through an actual boundary homeomorphism. |
| 48 | CA-PT-1 | logarithmic potentials and energy | truncated kernels define the extended integrals without an $\infty-\infty$ subtraction; $p_\mu=\int\log|z-w|d\mu$ and $U^\mu=-p_\mu$ are never conflated, and $\Delta p_\mu=2\pi\mu$. |
| 49 | CA-PT-1 | equilibrium measure and capacity | weak-* lower semicontinuity yields existence; finite-energy strict convexity yields uniqueness; $e^{-V_K}$ is defined with the infinite-energy convention and proved equal to transfinite diameter before the two names are interchanged. |
| 50 | CA-HP-1 | boundary measure/function representing $h^p$ | the Poisson integral is independent of representatives; uniqueness follows from weak-* or $L^p$ boundary convergence. At $p=1$ the datum is a finite measure, not silently an $L^1$ function. |
| 51 | CA-HP-2 | Blaschke, singular-inner and outer factors | product order-independence follows from normal convergence; the singular measure and boundary logarithm determine factors only after the stated unimodular/$O(0)>0$ normalisation; factorisation uniqueness is modulo unimodular constants. |
| 52 | CA-HP-2 | disc Nevanlinna and Smirnov classes | quotient definitions are invariant under the chosen bounded numerator/denominator representation; the outer-denominator and boundary-log definitions of $N^+$ are proved equivalent. |
| 53 | CA-NV-1/2 | counting, proximity, characteristic and deficiencies | centre zeros/poles and radii meeting divisors are regularised before integration; $a=\infty$ agrees with pole counting; error terms name their finite-linear-measure exceptional set; defects are derived from finite target sets, never an undefined uncountable sum. |
| 54 | SC-5 | $(p,q)$ forms and Dolbeault quotient | coordinate changes preserve bidegree and the operators; $\bar\partial^2=0$ makes closed modulo exact a genuine quotient, and induced pullbacks are representative-independent. |
| 55 | SC-5 | Bochner--Martinelli kernel | orientation, normalising constant, locally integrable diagonal singularity and the limiting excision are proved before the reproduction formula is used. |
| 56 | SC-6 | maximal $\bar\partial$, adjoint and minimal solution | the maximal distributional operator is closed and densely defined; its Hilbert adjoint matches the formal adjoint on the dense core; the minimal solution is unique only after orthogonality to the kernel. |
| 57 | SC-7 | Bergman kernel and projection | point evaluation is bounded under the declared domain hypotheses; Riesz gives a unique representer; orthonormal expansions are basis-independent and the Jacobian transformation law respects the functional-analysis convention linear in the first variable. |
| 58 | SC-7 | Szegő kernel | the boundary regularity class, surface measure and Hardy closure are fixed before defining the projection; no kernel is asserted for a boundary class whose trace theory has not been built. |
| 59 | SC-8 | reduced hypersurface equation and discriminant | square-free reduction is unique up to a unit; regularity and the zero germ are unit-independent; preparation changes the discriminant only by a unit and its branch set is chart-independent. |
| 60 | SC-8 | Puiseux parameter and normalisation | convergence is proved, not only formal existence; the parameter is unique only up to the specified invertible reparametrisation, and different irreducible factors give distinct branches. |
| 61 | CA-RS-2 | complex projective space and a linear-system map | scalar representatives give the same projective point; standard chart transitions are holomorphic; rescaling local line-bundle frames cancels in homogeneous coordinates; changing a section basis only postcomposes by a projective linear automorphism. |
| 62 | CA-RS-1 | genus of a compact Riemann surface | complex coordinate changes preserve orientation; Euler characteristic is subdivision-invariant; polygonal-schema reduction gives a unique handle number and proves $\chi=2-2g$, independent of atlas and triangulation. |

---

## Scope boundary after the 2026-08-14 enrichment (normative)

The finished measure-theory and functional-analysis scaffolds retire the old
denials of USC subharmonic theory, Hartogs separate analyticity and extension,
Hardy/Fatou theory, Poisson summation, distributions, analytic sets, abstract
Riemann surfaces, elliptic/modular functions, and the Levi problem. Those
subjects are now scaffolded below. What remains deliberately outside this
track is:

| denied material | precise reason and future home |
|---|---|
| Prime Number Theorem, Dirichlet's theorem, arithmetic progressions, automorphic $L$-functions, Hecke operators and arithmetic of modular curves | These are arithmetic consequences, not missing analytic prerequisites. The later number-theory track cites the CA-21/CA-22 and CA-MF supplier interfaces. |
| General coherent analytic sheaves, Oka coherence, Cartan A/B, general sheaf-cohomology comparison and Stein-space theory | CA-RS-2 develops only the line-bundle Čech machinery needed for compact curves, and SC-5 defines the smooth Dolbeault quotient and proves local polydisc exactness. The general coherent/global theory needs a sheaf/cohomology and complex-manifold track. |
| Global analytic-space dimension theory, Remmert proper mapping, Remmert--Stein, arbitrary analytic-set singular loci and resolution of singularities | SC-8 deliberately develops hypersurface germs, regular points, finite projection, irreducible hypersurface germs and Puiseux in dimension one. The general theorems use coherence or substantial analytic geometry. |
| Higher-dimensional CR geometry, the Lewy phenomenon, boundary complexes and the full $\bar\partial$-Neumann regularity theory | SCV here uses only the tangential notions needed to state smooth pseudoconvexity. These results constitute a PDE/CR track of their own. |
| Teichmüller theory, measurable Riemann mapping with parameters, quasiconformal deformation spaces and Sullivan dynamics | CA-QC proves planar equivalences, modulus distortion, compactness and the normalized measurable Riemann mapping theorem. Parameter dependence and moduli spaces need a dedicated geometry/dynamics track. |
| Riemann existence in its full branched-cover/algebraic-curve form, moduli of curves, theta divisors and arithmetic of Jacobians | CA-RS includes compact-surface uniformisation, Abel--Jacobi and Jacobi inversion. The denied superstructure is algebraic-geometric/moduli/arithmetic rather than a missing analytic lemma. |
| de Branges's theorem | The Bieberbach conjecture is a research-scale proof. CA-16 keeps the area theorem, Bieberbach's $|a_2|\le2$, Koebe quarter and distortion theorems. |
| Carathéodory boundary correspondence for arbitrary Jordan domains and prime-end boundary theory | The existing topology seam still lacks Jordan--Schoenflies, and prime ends require their own compactification. Boundary-value and harmonic-measure transport here is conditional on a homeomorphic extension to closures. |
| Mergelyan approximation and Arakelian approximation | CA-19 proves classical Runge with prescribed poles. Mergelyan's theorem is valuable but needs a separate approximation pair (including the topological and potential-theoretic construction) and is not load-bearing here. |
| Brownian-motion representations of harmonic measure and probabilistic potential theory | Harmonic measure is built analytically from Perron/Riesz representation; stochastic process theory is not available and is not needed. |
| Wiener criterion, Kellogg property, fine topology, weighted logarithmic potential theory and obstacle problems | CA-PT reaches Riesz decomposition, energy, equilibrium, capacity, polar sets and Green functions. These refinements need a separate fine/weighted potential-theory pair and are not load-bearing for Perron regularity used here. |
| Carleson measures, interpolation/corona, shift-invariant/model spaces and singular-integral/Hilbert-transform boundary theory | CA-HP stops after Fatou, canonical factorisation, F. and M. Riesz, and the disc Nevanlinna/Smirnov maximum principle. The denied material is a substantial operator/harmonic-analysis extension. |
| Cartan--Nevanlinna theory for holomorphic curves into projective space | CA-NV treats the one-variable meromorphic-function theory through the Second Main Theorem and defects. The higher-dimensional generalisation belongs with complex/projective geometry. |

---

## Retired scope-denial table from the 2026-07-28 draft (historical only)

This table is retained only to make the corrections auditable. It is
non-normative: rows 1--9, 11--13, 15 and 17 were based on prerequisites that
the finished subject tracks now supply. The normative boundary is the table
immediately above.

| # | dropped | why | what would license it |
|---|---|---|---|
| 1 | **Lebesgue measure and integration**, $L^p$, dominated convergence | not in the library's plan; `deferred-measure-and-integration` is the ‡ catalogue | a measure-theory track. Everything below that names "measure theory" means this row. |
| 2 | **Hartogs's theorem on separate holomorphicity** in full (no continuity, no boundedness, no measurability hypothesis) — **partial** | the last step of the standard proof (Hörmander's, following Hartogs) needs **Hartogs's lemma on subharmonic functions**, whose proof integrates an upper-semicontinuous function over a disc and applies **Fatou's lemma**. Both are row 1. Verified against Garrett's exposition of the proof, which is explicit about this. | measure theory (Fatou) plus the upper-semicontinuous theory of subharmonic functions. **What IS scaffolded on SC-1/SC-2**: Osgood's lemma (separately holomorphic **and continuous** $\Rightarrow$ holomorphic, by the iterated Cauchy formula); separately holomorphic **and locally bounded** $\Rightarrow$ holomorphic (the Schwarz-lemma telescoping estimate — fully elementary); and the **Baire step** for $m=2$, giving holomorphy on a nonempty subpolydisc. The gap is precisely the propagation from the small polydisc to the large one. |
| 3 | **Upper-semicontinuous subharmonic and plurisubharmonic function theory**; the Riesz decomposition; potential theory, capacity, equilibrium measures | the sub-mean-value inequality for a USC function is an inequality between integrals of USC functions | row 1. CX-D6's continuous convention is what this track uses instead; the cost is recorded there and on CA-14's convention item. Notably $\log\lvert f\rvert$ is USC, not continuous, so SC-4 handles it through the continuous truncations $\max(\log\lvert f\rvert, -k)$ and proves the two facts it needs directly. |
| 4 | **The general Hartogs extension theorem (Kugelsatz)**: $f$ holomorphic on $\Omega\setminus K$ with $K \Subset \Omega$ compact and $\Omega\setminus K$ connected extends to $\Omega$ — **partial** | Ehrenpreis's proof solves $\bar\partial u = \varphi$ with compact support via the Cauchy–Pompeiu formula, which is a singular area integral | a dedicated $\bar\partial$ page. **Honest note: this may well be in scope** — the Cauchy–Pompeiu kernel $1/(\zeta - z)$ is improperly Riemann integrable in the plane after a polar change of variables (orders 175/177), and Green's theorem is at 181. It is not scaffolded because the estimates are delicate and nothing else needs it. **What IS scaffolded on SC-2**: extension across a **Hartogs figure**, by the one-variable Cauchy integral plus the identity theorem — fully elementary, and it is the version that exhibits the phenomenon. |
| 5 | **The Levi problem** (pseudoconvex $\Rightarrow$ domain of holomorphy) | Oka's solution, or Hörmander's $\bar\partial$ with $L^2$ estimates | rows 1 and 4, plus Hilbert-space methods (`deferred-functional-analysis`). **What IS scaffolded on SC-4**: the **Cartan–Thullen theorem** (domain of holomorphy $\iff$ holomorphically convex), and the easy direction domain of holomorphy $\Rightarrow$ pseudoconvex. |
| 6 | **Coherent analytic sheaves**, Oka's coherence theorem, Cartan's Theorems A and B, sheaf cohomology, the Dolbeault isomorphism | a sheaf-theory track the library does not have and does not plan | a sheaves-and-cohomology track. |
| 7 | **CR geometry**: CR functions, their approximation and extension, the Lewy example | rests on rows 4 and 6 | a $\bar\partial$/CR page after row 4. |
| 8 | **Analytic sets** beyond Weierstrass preparation: the local parametrisation theorem, Remmert–Stein, dimension theory of analytic sets | needs row 6 | as row 6. **What IS scaffolded on SC-3**: Weierstrass preparation and division, and the corollary that $\mathcal{O}_m$ is a UFD (via Gauss's lemma, order 46). |
| 9 | **Abstract Riemann surfaces**; the uniformisation theorem; Riemann–Roch | a manifolds/sheaves track | a Riemann-surfaces track. **What IS scaffolded on CA-20**: the concrete Riemann surface of a complete analytic function, built as a space of germs with compatible charts (well-definedness row 27), and the surfaces of $\log$ and of $\sqrt{\ }$ identified with explicit covering spaces of $\mathbb{C}^\times$ (orders 233/235). |
| 10 | **Carathéodory's boundary-correspondence theorem** for the Riemann map of a Jordan domain | needs the **Jordan curve theorem**, which the topology track itself denies (`rem-jordan-curve-theorem`, ‡) | a homology track, per `plan-topology-set-theory-track.md` denial 5. The RMT itself is fully proved at CA-16; only the boundary behaviour drops. |
| 11 | **Hardy spaces $H^p$**, boundary values, Fatou's radial-limit theorem, the F.\ and M.\ Riesz theorem, the Bergman kernel | rows 1 and functional analysis | rows 1 + `deferred-functional-analysis`. |
| 12 | **The Fourier transform on $\mathbb{C}$; Paley–Wiener; Poisson summation** (Stein–Shakarchi ch. 4) | row 1 | row 1. **Consequence recorded**: the functional equation of $\zeta$ is therefore proved at CA-22 by the **Hankel-contour** route, not the theta/Poisson route. That is a route choice forced by this denial, and CA-22's remark says so. |
| 13 | **Elliptic functions**, $\wp$, elliptic curves, modular forms, the modular function $\lambda$ | not commissioned | a dedicated track. **Consequence recorded**: CA-23 proves Picard by the **Bloch $\to$ Landau $\to$ Schottky** route, which avoids $\lambda$ entirely. If that route fails at authoring time, CA-23 drops whole; nothing cites it. |
| 14 | **de Branges' theorem** (the Bieberbach conjecture) | a research-level proof | nothing in scope. **What IS scaffolded on CA-16**: the area theorem, $\lvert a_2\rvert \le 2$, the **Koebe $1/4$** theorem and the distortion estimates — all elementary given Green's theorem (181). |
| 15 | **Distributions; $\bar\partial$ in the sense of distributions; hyperfunctions** | rows 1 and 6 | rows 1 + 6. |
| 16 | **The Prime Number Theorem** | see CX-D8 — **this is not a denial**: it is reachable by Newman's argument from CA-22 in one further page | owner decision, not machinery. |
| 17 | **Looman–Menchoff** (CR equations everywhere plus continuity $\Rightarrow$ holomorphic, without assuming the partials continuous) | the proof is a genuine piece of real-variable measure theory | row 1. CA-1 proves the $C^1$ converse and records this one as a `rem-` in the non-decaying "this proof assumes continuous partials" form. |
| 18 | **Runge-type approximation on general open sets with prescribed poles in each complementary component beyond the classical statement**; Mergelyan's theorem | Mergelyan needs constructions well beyond Runge | a dedicated approximation page. **What IS scaffolded on CA-19**: classical Runge (rational approximation on a compact $K$ with poles in prescribed components of $\widehat{\mathbb{C}}\setminus K$; polynomial approximation when the complement is connected). |

---

## Un-deferral ledger (consequence of this track)

The ‡ catalogues lose or amend entries as this track publishes. Every removal
needs explicit owner approval at that time; ids are immutable, and a retired
‡ `rem-` id is aliased, never reused.

| ‡ item | page | fate | discharged by |
|---|---|---|---|
| `rem-riemann-surface-of-log` | orphan item file; `deferred-algebraic-topology` was its intended historical home | It is not published because no live page `items[]` contains it. Once both the homotopy block and CA-20 are authored, reconcile or alias the immutable id through the normal un-deferral procedure; do not call it removed before that. | CA-20 (rows 25--27) + HT-3/HT-4 |
| `rem-jacobian-conjecture` | `open-problems-and-research-frontier` | **stays** (open problem). CA-6/SC-3 add the holomorphic local-invertibility results that make its statement sharper; check the text for decayed scope claims per the standing sweep | — |
| `rem-open-mapping-theorem` | `deferred-functional-analysis` | **stays**, and is a NAMING HAZARD: that is the Banach open mapping theorem, a different result from CA-6's. CA-6 must carry a disambiguating `rem-`, and the judge conventions should be told, or it will report a duplication | — |
| `fs-negative-has-square-root` (published item) | order 16 | **check at authoring time.** It is a true false-statement *about $\mathbb{R}$*. Its Remarks may contain a claim about $\mathbb{C}$ that order 50 already falsifies and CA-1 falsifies again. Published-claim decay; sweep it. | — |

---

## Amendments to existing scaffolds (addressed to Alpha; this file never writes them)

1. **`plan-realanalysis-pages.md` §RA-33 (order 167).** Its inventory opens
   "C as R^2; modulus, conjugate" — but order 50 now defines $\mathbb{C}$,
   the modulus and conjugation algebraically, and 167 sits above it. RA-33 must
   **cite** order 50 and add only the metric/topological/analytic structure,
   with the dictionary item of well-definedness row 1 homed on **167, not
   here** if 167 is authored first. Whichever page is authored first owns row
   1; the other cites. This must be settled before either is scaffolded, or the
   library gets two $\mathbb{C}$'s.
2. **`plan-realanalysis-pages.md` §RA-33.** Its `requires` should gain
   `field-extensions-and-the-complex-numbers` (order 50). Currently it names
   only `sine-cosine-and-the-definition-of-pi`.
3. **`plan-realanalysis-pages.md` §RA-33 B page.** It plans "sin is unbounded
   on the imaginary axis", "$i^i$ is real", "$\log(-1)$ is multivalued",
   "$(z^a)^b \ne z^{ab}$", "the fifth roots of unity". **B pages are leaves**,
   so CA-2 and CA-12 may not cite any of them. Either move the ones this track
   needs onto the A page at 167, or accept that CA-2/CA-12 rebuild them with an
   agreement remark. Recommendation: move **$(z^a)^b \ne z^{ab}$** and
   **$\log(-1)$ multivalued** to the A page, since well-definedness rows 17 and
   18 want them as citable statements.
4. **`plan-algebra-track.md` §X-1 (order 125).** Its Traps say the analytic
   minimum-modulus proof "is **not** available here". That is true at order 125
   and must stay in the order-relative form; but once CA-5 exists the sentence
   risks reading as a claim about the library. Alpha rewords to
   "not available **at this point in the reading order**", the form LEVELS.md
   §10b says survived level 9 untouched.
5. **`plan-topology-track.md` §T5 (`compactness`, order 195).** This track
   depends on the **one-point (Alexandroff) compactification** and on "a
   continuous bijection from compact to Hausdorff is a homeomorphism", both
   already listed there. No change needed — recorded so CA-11's `requires` is
   not questioned.
6. **`plan-topology-set-theory-track.md` §HT-7 (order 241).** Its Traps already
   anticipate "the analysis winding items live on pages whose state must be
   checked at authoring time". Those pages now exist in plan: the winding
   number is **CA-7, order 255**, which is ABOVE 241. So HT-7's winding-number
   dictionary must remain **Remarks-only orientation with no dependency**, or
   become a declared `forward_refs` to CA-7. It cannot be load-bearing.
   Symmetrically, CA-7 carries the backward citation and the agreement remark.
7. **Deferred/topology catalogue.** `items/rem-riemann-surface-of-log.md`
   exists on disk but is not homed by any nonempty `items[]` array and is
   therefore not published. Do not cite it as an established result. Once
   CA-20 and the covering-space interfaces are authored, reconcile or alias it
   through the ordinary immutable-id un-deferral procedure.
8. **`plan-pde-track.md`, harmonic pages.** Keep the $\mathbb R^n$ theory there
   and cite CA-13/CA-14/CA-HM-1/CA-PT-1 for the $n=2$ holomorphic-conjugate,
   conformal-invariance, Perron boundary and logarithmic-potential dictionary.
   No general-dimensional theorem is to be re-minted here.
9. **Later number-theory scaffold.** Cite the function-theoretic supplier
   contract under CA-22 for the Euler product, continuation, the two functional
   equations, $\xi$, trivial/nontrivial zero region and the qualitative
   zero-free line. Do not rederive them; do not assume a quantitative zero-free
   region that this track does not promise.
10. **Topology/conformal-boundary seam.** Any later scaffold transporting
    continuous boundary data or Euclidean-boundary harmonic measure through a
    conformal map must require a homeomorphic extension to closures. A general
    prime-end/Carathéodory statement is not supplied by the present topology
    track and must remain a declared forward reference or scope denial.

---

# The pages

Format per page: order, category, `requires` (direct; Beta computes the
closure), DEFS / THMS / FS, then B and CEX (both homed on the examples
companion), traps, and an explicit forward-reference statement. Item ids are
suggestions for step 1, not commitments, except where a well-definedness row
fixes one. Every A page has its `-examples` companion at the next order.
**B pages are leaves: nothing outside a B page may cite an item homed there.**
`validate-plan` warns above 30 items; most A inventories here land at 14--30
and B pages at 8--16. CA-14 has 31 indispensable, source-backed items; the hard
commission rule is a split above 60, never deletion for ergonomics.

Category for every page below: **`complex-analysis`** (CX-D3).

**Component-provenance contract for every unauthored item in the original
spine.** Each definition/theorem statement is `literature-derived` from the
page's exact source ranges and canonical-harvest dispositions. Definition and
mathematical-remark proofs are `not-applicable`; supplied theorem proofs are
`literature-derived` when the cited route is followed verbatim in substance,
or `ai-altered` only when notation, dependency order or normalization is
adapted, with that adaptation named in the rationale. A sourced construction
on a companion stays `literature-derived`; an elementary newly composed
example/counterexample is `ai-generated`, must be counterexample-checked, and
may never be a dependency target. No load-bearing statement is
`ai-generated`. The authored CA-1 pair keeps its actual per-item metadata and
is not overwritten by this scaffold.

---

## CA-1. Complex Differentiability and the Cauchy–Riemann Equations

`requires`: `the-complex-exponential-and-eulers-formula` (167),
`field-extensions-and-the-complex-numbers` (50), `the-total-derivative` (169),
`the-topology-of-euclidean-space` (197)

DEFS: the identification $\mathbb{C} = \mathbb{R}^2$ as a normed
$\mathbb{R}$-algebra (well-definedness #1 — a dictionary item, not a
restatement); **domain** (nonempty connected open subset of $\mathbb{C}$);
complex differentiability at a point and the derivative $f'(a)$;
**holomorphic** on an open set; **entire**; the **Wirtinger operators**
$\partial_z, \partial_{\bar z}$ (#2); **conformal** at a point (#3).

THMS: the derivative is unique; complex differentiable $\Rightarrow$ continuous;
the algebra of derivatives (sum, product, quotient, chain rule, inverse) — each
citing the real analogue at 131 only where the argument is identical, and proved
where it is not; polynomials are entire and rational functions are holomorphic
off their poles; **complex differentiable at $a$ $\iff$ real differentiable at
$a$ with a $\mathbb{C}$-linear total derivative $\iff$
$\partial_{\bar z}f(a) = 0$ $\iff$ the CAUCHY–RIEMANN equations
$u_x = v_y,\ u_y = -v_x$ hold at $a$ together with real differentiability**
(landmark — the four-way equivalence, one item, with the real derivative coming
from 169); the **$C^1$ converse**: continuous partials on an open set plus CR
$\Rightarrow$ holomorphic (cites 169's "continuous partials imply
differentiability"); $f' \equiv 0$ on a **domain** $\Rightarrow$ $f$ constant
(connectedness, 197 — the hypothesis is where the page's only topology enters);
$f$ holomorphic and real-valued on a domain $\Rightarrow$ constant; $f$
holomorphic with $\lvert f\rvert$ constant $\Rightarrow$ constant; $f$
holomorphic and $\bar f$ holomorphic on a domain $\Rightarrow$ constant;
**holomorphic with $f'(a)\ne 0$ $\Rightarrow$ conformal at $a$**, and the
converse for real-differentiable maps (landmark — this is the geometric content
of CR and the reason the word "conformal" is defined here rather than at CA-12);
the Jacobian determinant of a holomorphic map equals $\lvert f'\rvert^2$;
if $f$ is holomorphic and $u, v$ are $C^2$ then $u$ and $v$ are **harmonic**
(stated WITH the $C^2$ hypothesis, which CA-5 later discharges — see traps).

FS: the CR equations holding at a point imply complex differentiability there;
the CR equations holding on an open set imply holomorphy (without any regularity
— this is the Looman–Menchoff boundary, denial 17, so the `fs-` is refuted by an
explicit witness, never by citing Looman–Menchoff); every real-differentiable
map $\mathbb{R}^2\to\mathbb{R}^2$ is holomorphic; $f'\equiv 0$ on an open set
implies $f$ constant (the connectedness hypothesis is not decoration).

B: $z^2$, $e^z$, $1/z$ differentiated from the definition; the CR equations
verified for $e^z$ in polar and Cartesian form; a Möbius map shown conformal;
the conformal image of a grid described.
CEX: $\bar z$, $\lvert z\rvert^2$, $\mathrm{Re}\,z$, $\lvert z\rvert$ are
nowhere complex differentiable ($\lvert z\rvert^2$ is differentiable at $0$
only — the sharpest of the four); **$f(z) = \bar z^2/z$ for $z\ne0$, $f(0)=0$**:
CR holds at $0$, $f$ is continuous, and $f$ is not complex differentiable at $0$
(the witness for the first `fs-`); **$f(z) = \exp(-z^{-4})$ for $z\ne0$,
$f(0)=0$**: CR holds everywhere, $f$ is unbounded on every neighbourhood of $0$
(the witness for the second, and the classical one); a function satisfying CR on
a disconnected open set with $f'\equiv0$ that is not constant.

Traps. (i) The four-way equivalence is ONE item with four conditions, not four
items; splitting it invites a citation for a claim the cited item does not make.
(ii) The harmonicity item MUST carry the $C^2$ hypothesis at this order —
$f$ holomorphic $\Rightarrow$ $f\in C^\infty$ is CA-5 and is not available here.
CA-13 restates it unconditionally with an agreement remark. Anticipating CA-5
here is circular reasoning wearing a "clearly" (this is the single most likely
defect on the page). (iii) $\mathbb{C}$ is not ordered — the false statement is
already homed at order 50; cite it, do not re-mint. (iv) The identification #1
is not a formality: the modulus of order 50 is defined from the field norm and
the modulus of 145 from the Euclidean norm, and they must be shown equal before
a single estimate is written.

Forward references: NONE load-bearing. None expected.

## CA-2. Complex Power Series and Analytic Functions

`requires`: CA-1, `power-series-and-real-analytic-functions` (151),
`absolute-convergence-and-rearrangement` (115),
`uniform-convergence-of-functions` (147)

DEFS: a formal power series over $\mathbb{C}$ and its **radius of convergence**
(cite Cauchy–Hadamard from 167, do not re-mint); the disc of convergence;
**analytic** on an open set (locally the sum of a convergent power series);
the complex $\sin, \cos, \sinh, \cosh$ by their series.

THMS: absolute convergence inside the disc, divergence outside, **locally
uniform** convergence on compact subsets but **not** on the open disc in
general (cites 147); the derived series has the same radius; **termwise
differentiation**: the sum is holomorphic on the open disc with the derived
series as derivative (landmark), hence $C^\infty$ there; the **coefficient
formula** $c_n = f^{(n)}(a)/n!$; **uniqueness of the coefficients**;
**analytic $\Rightarrow$ holomorphic** (landmark; the converse waits for CA-5,
and the page says so in the order-relative form); **re-expansion about an
interior point**, with the radius bound $R - \lvert b-a\rvert$ — this is the
item that makes analyticity a LOCAL property and is what CA-5's identity theorem
consumes; sums, products (Cauchy product, from 115), reciprocals and
compositions of power series; $\exp$, $\sin$, $\cos$ are entire; the addition
formulas by the Cauchy product (agreement remark with 167, which proves them by
a different route); the **zero sets**: $\sin z = 0 \iff z\in\pi\mathbb{Z}$ and
$\cos z = 0 \iff z\in \pi/2 + \pi\mathbb{Z}$ — no non-real zeros, proved here
because the residue calculus of CA-9 needs it; $\lvert\sin\rvert$ and
$\lvert\cos\rvert$ are unbounded on $\mathbb{C}$; **Abel's limit theorem** over
$\mathbb{C}$, on a Stolz angle (cite 151's real version; the complex statement
is genuinely different and must be proved).

FS: a power series converges uniformly on its open disc of convergence; a
complex power series with real coefficients that converges on $(-R,R)$
converges on the disc of radius $R$ (FALSE as stated about a general function's
real restriction — see traps, this one is delicate and drops if it cannot be
closed cleanly); $\sin$ and $\cos$ are bounded on $\mathbb{C}$; every
$C^\infty$ function $\mathbb{C}\to\mathbb{C}$ (as a map of $\mathbb{R}^2$) is
analytic.

B: $\sum z^n$, $\sum z^n/n$, $\sum z^n/n^2$ with three different boundary
behaviours on $\lvert z\rvert=1$ (the complex refinement of 151's real triple);
$\sum z^{n!}$; re-expansion of $1/(1-z)$ about $i/2$ with its exact radius;
$\sin(iy) = i\sinh y$ computed.
CEX: $1/(1+z^2)$ is real-analytic on all of $\mathbb{R}$ with radius exactly
$1$ about $0$ — **the classical demonstration that the real radius of
convergence is explained only by the complex singularities** (this example is
why the page exists, and it must be stated as the answer to a question order
151 could pose but not answer); $e^{-1/x^2}$ on $\mathbb{R}$ is $C^\infty$ and
not analytic, and its complex extension shows why (agreement remark with 151's
version, which is homed there — check whether 151's copy is on the A or the B
page before citing).

Traps. (i) Do **not** re-mint Cauchy–Hadamard or the definition of a complex
series; order 167 owns both. This page adds differentiability, not convergence.
(ii) The `fs-` about real-to-complex radius is easy to state falsely; if step 1
cannot phrase a version that is both false and refutable from material at or
below this order, **drop it with a note** — the $1/(1+z^2)$ counterexample
carries the pedagogical weight anyway. (iii) The zero sets of $\sin$ and $\cos$
need $\ker\exp = 2\pi i\mathbb{Z}$ from 167; cite it, do not redo the
periodicity analysis. (iv) "Analytic" and "holomorphic" are DIFFERENT words on
this page and stay different until CA-5 identifies them; a step that slides
between them here is the defect to hunt.

Forward references: NONE load-bearing. A Remarks-only pointer to CA-5 ("the
converse is proved at ...") is permitted, declared.

## CA-3. Contour Integration

`requires`: CA-1, `properties-of-the-integral-and-the-working-ftc` (139),
`arc-length-and-rectifiable-curves` (159),
`bounded-variation-and-riemann-stieltjes` (141)

DEFS: the **$\mathbb{C}$-valued Riemann integral** of a continuous
$f : [a,b]\to\mathbb{C}$ (#4); **path** (continuous piecewise-$C^1$
$\gamma : [a,b]\to\mathbb{C}$), **contour**, closed contour, simple closed
contour, the trace $\gamma^\ast$, the reversal $\gamma^-$, the concatenation
$\gamma_1 * \gamma_2$; the **contour integral** $\int_\gamma f\,dz$ (#5); the
**length** $\ell(\gamma)$ (#6); $\int_\gamma f\,\lvert dz\rvert$; a **primitive**
of $f$ on an open set.

THMS: linearity in $f$; **additivity under concatenation** and the sign change
under reversal; **parametrisation independence** (#5, its own item);
$\ell(\gamma) = \int\lvert\gamma'\rvert$ agrees with the arc length of 159 (#6);
the **ML estimate** $\lvert\int_\gamma f\rvert \le \sup_{\gamma^\ast}\lvert
f\rvert\cdot\ell(\gamma)$ (landmark — the workhorse of the whole track);
$\lvert\int_a^b f\rvert \le \int_a^b\lvert f\rvert$ by the rotation trick (#4);
**the fundamental theorem for contour integrals**: if $F' = f$ on an open set
containing $\gamma^\ast$ then $\int_\gamma f = F(\gamma(b)) - F(\gamma(a))$
(landmark), hence $\int_\gamma f = 0$ for every closed $\gamma$; the **converse**:
a continuous $f$ on a domain has a primitive $\iff$ $\int_\gamma f = 0$ for
every closed contour in it $\iff$ $\int_\gamma f$ depends only on the endpoints
(landmark; the primitive is built by integrating along polygonal paths, using
197's open-connected $\Rightarrow$ polygonally connected); **termwise
integration** of a sequence converging uniformly on $\gamma^\ast$ (cites 147);
**the fundamental computation** $\int_{\lvert z-a\rvert = r}(z-a)^n\,dz$ equals
$2\pi i$ if $n = -1$ and $0$ otherwise (landmark — everything downstream is this
computation plus an estimate); the **Riemann–Stieltjes definition** over a
rectifiable path and the theorem that the two definitions agree on
piecewise-$C^1$ paths (CX-D5; cites 141 and 159).

FS: $\int_\gamma f\,dz$ depends only on the trace $\gamma^\ast$ (witness: the
circle traversed twice, or with the opposite orientation); every continuous $f$
on a domain has a primitive (witness: $1/z$ on $\mathbb{C}^\times$, via the
fundamental computation — this `fs-` is the seed of the entire winding-number
theory and must be on the A page); $\lvert\int_\gamma f\,dz\rvert \le
\int_\gamma\lvert f\rvert\,dz$ as written (the right side is not real —
a notation-hygiene `fs-`, keep only if it earns its place).

B: $\int_\gamma z\,dz$, $\int_\gamma z^2\,dz$ over a segment and over an arc
with the same endpoints, agreeing; $\int_{\lvert z\rvert = 1} e^z/z\,dz$
computed by the series; the ML estimate applied to bound
$\int_{\lvert z\rvert = R} \frac{dz}{z^2+1}$; a contour integral over a
concatenated keyhole path assembled from four pieces.
CEX: $\int_{\lvert z\rvert=1}\bar z\,dz = 2\pi i \ne 0$ although $\bar z$ is
continuous — the first sign that holomorphy, not continuity, is what makes
Cauchy's theorem work; the graph of $x\sin(1/x)$ as a continuous
non-rectifiable path, so "contour" is not "continuous curve" (agreement with
159's item, which is homed there — cite, do not rebuild).

Traps. (i) Piecewise-$C^1$ means the derivative may jump at finitely many
points; every proof that integrates $\gamma'$ must handle the subdivision
explicitly, not silently. (ii) The rotation trick in #4 ($\lvert I\rvert =
e^{-i\theta}I$ for a suitable $\theta$) is the one step that is genuinely not
componentwise; a componentwise "proof" is wrong by a factor of $\sqrt2$ and is
the classic error here. (iii) The RS generalisation is ONE theorem, and nothing
else in the track may cite it — if a later page finds itself needing rectifiable
contours, that is a scaffolding error, not a licence. (iv) `def-infinite-product`
and the RS integral both already exist in the library at 115/141; grep before
minting.

Forward references: NONE load-bearing.

## CA-4. Goursat's Theorem and Cauchy's Theorem in a Convex Domain

`requires`: CA-3, CA-2, `rn-as-a-normed-space` (145)

DEFS: the triangle $T$ with vertices $p,q,r$ and its boundary contour
$\partial T$; **star-shaped** and **convex** open subsets of $\mathbb{C}$ (cite
the convexity of 135/145; do not re-mint); the **keyhole contour** used in the
integral-formula proof, defined once and named.

THMS: **Goursat's theorem** (landmark): $f$ holomorphic on an open set
containing a closed triangle $T$ $\Rightarrow$ $\int_{\partial T} f = 0$ — by
repeated bisection into four triangles, a nested sequence of compact sets with
diameters $\to 0$ (completeness of $\mathbb{C}$, 167/145; the nested-set
principle is `equivalent-forms-of-completeness`, 111), and the differentiability
estimate at the limit point; **Goursat with an exceptional point**: the same
conclusion when $f$ is merely continuous at one point $p\in T$ and holomorphic
elsewhere (this is exactly what the integral formula needs, and it must be its
own item, not a remark); **existence of a primitive on a star-shaped domain**
(define $F(z) = \int_{[z_0,z]}f$ and use Goursat on the triangle $z_0,z,z+h$);
**Cauchy's theorem for a star-shaped domain** (landmark): $\int_\gamma f = 0$
for every closed contour, immediately from the primitive and CA-3; **Cauchy's
integral formula for a circle** (landmark): for $f$ holomorphic on a disc and
$\lvert z - a\rvert < r$,
$f(z) = \frac{1}{2\pi i}\int_{\lvert\zeta - a\rvert = r}\frac{f(\zeta)}{\zeta - z}d\zeta$,
via Goursat-with-an-exceptional-point applied to $(f(\zeta)-f(z))/(\zeta - z)$
plus the fundamental computation of CA-3; **the integral formula for
derivatives** $f^{(n)}(z) = \frac{n!}{2\pi i}\int\frac{f(\zeta)}{(\zeta - z)^{n+1}}d\zeta$
(differentiation under the integral sign, justified by an explicit difference
quotient estimate, not by a general theorem the library does not have);
**Cauchy's inequalities** $\lvert f^{(n)}(a)\rvert \le n!\,M(r)/r^n$.

FS: Cauchy's theorem holds for every closed contour in every domain (witness:
$1/z$ on $\mathbb{C}^\times$, from CA-3's `fs-`); Goursat needs $f'$ to be
continuous (the point of Goursat is that it does not — a historical `fs-`, keep
only if phrased as a mathematical claim); a continuous function on a convex
domain has a primitive.

B: $\int_{\partial T}$ over an explicit triangle for $f(z)=z^2$; the integral
formula used to evaluate $\int_{\lvert z\rvert=2}\frac{e^z}{z-1}dz$ and
$\int_{\lvert z\rvert=2}\frac{\cos z}{(z-1)^3}dz$; the bisection of a triangle
drawn out with the four sub-triangles and the cancelling interior edges — the
combinatorial step of Goursat, which is where the proof is usually waved.
CEX: a holomorphic function on an annulus with $\int_\gamma f \ne 0$, showing
star-shapedness is not decoration; a domain that is connected and not
star-shaped.

Traps. (i) The cancellation of interior edges in Goursat's bisection is a
numbered step, not a picture: it is $\int_{\partial T} = \sum_{k=1}^4
\int_{\partial T_k}$ and it needs CA-3's additivity and reversal items.
(ii) "Goursat with an exceptional point" is REQUIRED separately; deriving the
integral formula from plain Goursat is a circularity that is easy to miss,
because $(f(\zeta)-f(z))/(\zeta-z)$ is not holomorphic at $\zeta = z$.
(iii) Differentiation under the integral sign: prove the $n=1$ case by hand and
induct; do not invoke a general theorem. (iv) The nested compact sets: cite
`equivalent-forms-of-completeness` (111) rather than rebuilding the nested
interval principle in $\mathbb{C}$.

Forward references: NONE load-bearing.

## CA-5. Analyticity of Holomorphic Functions; Liouville and Morera

`requires`: CA-4, CA-2

DEFS: the **Taylor series** of a holomorphic function at a point; the **order**
of a zero (#7); **locally uniform convergence** on an open set.

THMS: **holomorphic $\Rightarrow$ analytic** (landmark; the geometric-series
expansion of the Cauchy kernel inside the integral formula, with the radius
equal to the distance to the boundary — the sharp statement, not "some
radius"); consequently **holomorphic $\Rightarrow$ $C^\infty$**, and
**holomorphic $\iff$ analytic** as an equivalence item that retires the
distinction CA-2 kept alive; the Taylor coefficient formula and its agreement
with CA-2's; the **order of a zero** and the factorisation $f = (z-a)^m g$,
$g(a)\ne 0$ (#7); **Cauchy's estimates** restated for the Taylor coefficients;
**Liouville's theorem** (landmark), and the extension: an entire function with
$\lvert f(z)\rvert \le C(1+\lvert z\rvert)^N$ is a polynomial of degree
$\le N$; **the fundamental theorem of algebra, analytic proof** (landmark) —
with the CX-D7 agreement remark naming the algebraic proof at 125 and the
topological one at 241; **Morera's theorem** (continuous with vanishing
integrals over all triangles $\Rightarrow$ holomorphic — the converse of
Goursat, and the tool CA-19/CA-21 use for parameter integrals); the
**Weierstrass convergence theorem** (landmark): a locally uniform limit of
holomorphic functions is holomorphic, and $f_n^{(k)}\to f^{(k)}$ locally
uniformly for every $k$ — Morera for the first half, the integral formula for
the second; the corresponding statement for a locally uniformly convergent
series; the **holomorphy of a parameter integral** $F(z) = \int_a^b
\varphi(t,z)\,dt$ when $\varphi(t,\cdot)$ is holomorphic and $\varphi$ is
continuous (Morera plus Fubini for the Riemann integral, order 177) — stated
here once, cited by CA-19, CA-21, CA-22 (#28); **the mean value property**
$f(a) = \frac{1}{2\pi}\int_0^{2\pi} f(a+re^{i\theta})d\theta$.

FS: a $C^\infty$ function of two real variables is analytic; a pointwise limit
of holomorphic functions is holomorphic; an entire bounded-on-$\mathbb{R}$
function is constant (witness: $\sin z$); every entire function with an
antiderivative is a polynomial.

B: $e^z$, $\sin z$, $1/(1-z)$ expanded with exact radii; Liouville applied to
show a nonconstant entire function has dense image (a cheap precursor to CA-23);
Morera used to prove holomorphy of $\int_0^1 t^{z}\,dt$; the FTA proof written
out.
CEX: $\sum z^n/n^2$ converges uniformly on $\overline{\mathbb{D}}$ and its sum
is not holomorphic on any larger disc; $f_n(z) = z^n$ on $\mathbb{D}$ converges
pointwise but not locally uniformly, with holomorphic limit anyway — so the
`fs-` needs a better witness: $f_n$ Riemann-integrable-style pathologies are
unavailable here, so use a pointwise limit of polynomials that is discontinuous
on a compact set (constructed from a convergent-but-not-uniform real example at
147; if no cheap witness closes at this order, the `fs-` DROPS with a note).

Traps. (i) The radius in "holomorphic $\Rightarrow$ analytic" is the distance
to the boundary of the DOMAIN OF HOLOMORPHY, not of any disc chosen for
convenience; a weaker statement here silently weakens CA-6's identity theorem.
(ii) The FTA remark must be written in the "what THIS proof uses" form, not
"the library also proves"; order 125 and 241 may not be authored when this is
(published-claim decay, LEVELS.md §10b). (iii) The parameter-integral lemma
(#28) is easy to state too strongly; its hypothesis is joint continuity plus
holomorphy in $z$, and Fubini at 177 is for the RIEMANN integral over a
rectangle — check what 177 actually delivers before relying on it.
(iv) `rem-open-mapping-theorem` (‡, functional analysis) is a different theorem;
the disambiguation belongs on CA-6, but the judge may flag it here.

Forward references: NONE load-bearing.

## CA-6. The Identity Theorem, the Maximum Principle and the Open Mapping Theorem

`requires`: CA-5

DEFS: an **isolated** zero; the **local degree** $m$ of $f$ at $a$ (the order of
the zero of $f - f(a)$); **locally injective**; **biholomorphic**.

THMS: **zeros of a nonzero holomorphic function on a domain are isolated**
(landmark; the factorisation of #7 plus connectedness); **the identity
theorem** (landmark): two holomorphic functions on a domain agreeing on a set
with a limit point in the domain are equal — with the clopen argument stated
explicitly, and the "in the domain" hypothesis flagged; the corollary that
$H(\Omega)$ is an integral domain for a domain $\Omega$ (cite the ring
vocabulary of order 42, do not re-mint); the **local factorisation**
$f(z) - f(a) = (z-a)^m g(z)$ with $g(a)\ne0$, and the **local $m$-th root**:
on a small disc $g$ has a holomorphic $m$-th root, because $g$ is nonvanishing
on a disc and therefore has a holomorphic logarithm (a primitive of $g'/g$,
CA-3 + CA-4 — this is the step that keeps the page independent of the argument
principle); **the local mapping theorem**: near $a$, $f$ is $\varphi^m$ for a
biholomorphism $\varphi$ with $\varphi(a) = 0$, so $f$ is exactly $m$-to-$1$
near $a$ (landmark); **the open mapping theorem** (landmark; immediate from the
local mapping theorem); **the maximum modulus principle** (landmark) in both
forms: no nonconstant holomorphic function on a domain has a local maximum of
$\lvert f\rvert$; and if $\Omega$ is bounded and $f$ is continuous on
$\overline\Omega$ then $\max_{\overline\Omega}\lvert f\rvert$ is attained on
$\partial\Omega$ (EVT from 123/197); the **minimum modulus principle** (with the
nonvanishing hypothesis, which is where it differs); **$f'(a)\ne0 \iff m=1
\iff f$ is injective near $a$**, and then $f^{-1}$ is holomorphic — **the
holomorphic inverse function theorem** (landmark), with $f$ biholomorphic onto
an open set; the corollary that an injective holomorphic map has nowhere-zero
derivative (the striking contrast with the real case, and the item SC-3 wants).

FS: an injective real-differentiable map $\mathbb{R}^2\to\mathbb{R}^2$ has
nowhere-zero Jacobian (witness $x\mapsto x^3$ in one variable, or its planar
version — the contrast item); two holomorphic functions agreeing on a set with
a limit point ON THE BOUNDARY are equal; the maximum principle holds for
$\mathrm{Re}\,f$ without extra argument (it does hold — so state instead: the
maximum principle for $\lvert f\rvert$ holds on any open set, without
connectedness); a holomorphic function on a domain attaining a local minimum of
$\lvert f\rvert$ is constant (FALSE — the zero case).

B: the identity theorem used to prove $\sin^2+\cos^2=1$ over $\mathbb{C}$ from
the real identity (agreement remark with 163); $z\mapsto z^2$ shown $2$-to-$1$
near $0$ and injective near $1$; the maximum principle used to bound
$\lvert p(z)\rvert$ on a disc; Schwarz-lemma-free proof that a nonconstant
entire function has open image.
CEX: $\sin(1/z)$ on $\mathbb{C}^\times$ has zeros accumulating at $0$, which is
**not in the domain** — the witness for the boundary `fs-`; $e^{-1/x^2}$
extended to $\mathbb{C}$ is not holomorphic at $0$, so the real $C^\infty$
counterexample to the identity theorem has no complex analogue; a function
holomorphic on $\mathbb{D}$, continuous on $\overline{\mathbb{D}}$, whose
modulus is constant on the boundary and which is not constant (a Blaschke
factor).

Traps. (i) The open mapping theorem is proved here **without** Rouché or the
argument principle (CA-10 is above this page). The route is the local $m$-th
root, and the existence of that root rests on a holomorphic logarithm on a disc,
which rests on CA-4's primitive — write that chain out; a scaffolder reaching
for Rouché creates a cycle. (ii) The maximum principle's second form needs a
BOUNDED $\Omega$ and continuity on the closure; the unbounded case is false and
the counterexample ($e^{-iz}$ on the upper half plane) belongs on the B page.
(iii) A disambiguating `rem-` separating this open mapping theorem from the
Banach one (`rem-open-mapping-theorem`, ‡) is required, and the judge
conventions should mention it. (iv) `def-integral-domain` and friends live at
order 42; cite.

Forward references: NONE load-bearing.

## CA-7. The Winding Number and the Global Cauchy Theorem

`requires`: CA-6, `the-topology-of-euclidean-space` (197)

DEFS: the **winding number** (index) $n(\gamma, a)$ of a closed contour about
$a\notin\gamma^\ast$ (#8); **chain** and **cycle** in an open set $\Omega$, and
$\int_\Gamma$, $n(\Gamma, a)$ (#9); **null-homologous** in $\Omega$
($n(\Gamma,a) = 0$ for every $a\in\mathbb{C}\setminus\Omega$); **homologous**
cycles; **homologically simply connected** (every cycle in $\Omega$ is
null-homologous).

THMS: $n(\gamma,a)\in\mathbb{Z}$ (#8a, landmark — the auxiliary-function proof,
finishing with $\ker\exp = 2\pi i\mathbb{Z}$ from 167); $n(\gamma,\cdot)$ is
**constant on each connected component** of $\mathbb{C}\setminus\gamma^\ast$
(#8b) and **zero on the unbounded component** (#8c, by ML); $\mathbb{C}
\setminus\gamma^\ast$ has exactly one unbounded component (197);
$n(\gamma^-,a) = -n(\gamma,a)$, $n(\gamma_1*\gamma_2,a) = n(\gamma_1,a) +
n(\gamma_2,a)$; the index of the circle $\lvert z - a\rvert = r$ traversed $k$
times is $k$; **Dixon's proof of the global Cauchy theorem** (landmark): for $f$
holomorphic on $\Omega$ and $\Gamma$ a cycle null-homologous in $\Omega$,
$$n(\Gamma, z)\,f(z) = \frac{1}{2\pi i}\int_\Gamma \frac{f(\zeta)}{\zeta - z}\,d\zeta \quad (z\in\Omega\setminus\Gamma^\ast)$$
— the **homology form of the integral formula**, proved by showing the auxiliary
function $g(\zeta,z) = (f(\zeta)-f(z))/(\zeta-z)$ (extended by $f'(z)$ on the
diagonal) is continuous and holomorphic in each variable, that $h(z) =
\int_\Gamma g(\zeta,z)d\zeta$ extends to an entire function, and that it is
bounded and tends to $0$, so Liouville finishes; **the homology form of
Cauchy's theorem** as its corollary: $\int_\Gamma f = 0$ for every
null-homologous cycle (landmark); the version for two homologous cycles;
the higher-derivative form; **on a homologically simply connected domain every
holomorphic $f$ has a primitive**, and every nonvanishing holomorphic $f$ has a
**holomorphic logarithm** and hence holomorphic $k$-th roots (landmark — this is
the item CA-12, CA-16 and CA-17 all consume, and the reason the homological
definition is taken as primary, CX-D4); a choice ledger: this whole page is ZF.

FS: a closed contour with $n(\gamma,a) = 0$ for all $a\notin\Omega$ bounds a
subset of $\Omega$ (a plausible-sounding topological strengthening; refute by
exhibiting a null-homologous cycle in an annulus that is not a boundary — if no
witness closes without the Jordan curve theorem, **DROP with a note**, denial
10); $n(\gamma,a)$ depends only on $\gamma^\ast$ (from CA-3's `fs-`, restated in
index language); every cycle in a connected domain is null-homologous.

B: the index computed for the circle traversed $k$ times, for a figure-eight,
and for a keyhole contour; the vortex field of order 181 identified as
$\mathrm{Re}$ and $\mathrm{Im}$ of $1/z$ — **the dictionary item connecting the
winding number to the closed-not-exact form already scaffolded at 181** (this is
the same fact seen twice and the library must say so); Dixon's proof traced on
an explicit annulus cycle.
CEX: the annulus is connected and NOT homologically simply connected, witnessed
by $\int_{\lvert z\rvert = 1} dz/z = 2\pi i$; a domain where a nonvanishing
holomorphic function has no logarithm ($z$ on $\mathbb{C}^\times$, from 167's
"no continuous logarithm on $\mathbb{C}\setminus\{0\}$" — cite it, and note that
167 proves the CONTINUOUS statement, which is stronger and is what is wanted).

Traps. (i) #8a is the load-bearing item of the page and its proof has exactly
one delicate step: $h(t) = (\gamma(t)-a)\exp(-\int_{t_0}^t \gamma'/(\gamma-a))$
has $h' = 0$ at every point where $\gamma$ is differentiable, and $h$ is
continuous, so $h$ is constant on $[a,b]$ — the piecewise structure means "$h'=0$
on each piece plus continuity", not "$h'=0$". Write the subdivision.
(ii) Dixon's function $g$ must be shown **continuous on $\Omega\times\Omega$**
including the diagonal; this is the one real analytic estimate in the proof and
is where expositions cheat. (iii) The chain/cycle formalism (#9) needs the free
abelian group on paths — cite the free-abelian-group vocabulary from the algebra
band (orders 34/36) rather than re-minting, and check on disk which A-page item
carries it. (iv) Do NOT define "simply connected" topologically here; $\pi_1$ is
order 231, and CA-17 is where the two notions meet. This page's adjective is
**homologically** simply connected, and the word is used with that qualifier
throughout the track until CA-17.

Forward references: NONE load-bearing. A Remarks-only pointer to CA-17 is
permitted, declared.

## CA-8. Isolated Singularities and Laurent Series

`requires`: CA-7

DEFS: the annulus $A(a; r, R)$; the **Laurent series** and its coefficients
(#10); the **principal part**; an **isolated singularity**; **removable**,
**pole of order $m$**, **essential** (#11); the **residue** (#12);
**meromorphic** on an open set; a **simple pole**.

THMS: **Laurent's theorem** (landmark): $f$ holomorphic on $A(a;r,R)$ has a
representation $\sum_{n\in\mathbb{Z}} a_n(z-a)^n$ converging locally uniformly
there, with $a_n = \frac{1}{2\pi i}\int_{\lvert\zeta-a\rvert=\rho}
\frac{f(\zeta)}{(\zeta-a)^{n+1}}d\zeta$ — existence via the two-circle cycle,
which is null-homologous in the annulus (CA-7 is what makes this legitimate and
is why Laurent comes after the winding number, CX-D4); **uniqueness of the
Laurent coefficients** (#10, its own item — the definite article depends on it);
independence of $\rho$; the **decomposition** $f = f_{\mathrm{reg}} +
f_{\mathrm{prin}}$ with $f_{\mathrm{prin}}$ holomorphic outside and vanishing at
$\infty$, and its uniqueness; **Riemann's removable singularity theorem**
(landmark): bounded near $a$ $\Rightarrow$ removable — three equivalent
conditions ($f$ bounded near $a$; $\lim_{z\to a}(z-a)f(z) = 0$; $f$ extends
holomorphically); **poles**: $\lvert f(z)\rvert\to\infty$ $\iff$ $f$ has a pole
$\iff$ the principal part is a nonzero finite sum $\iff$ $1/f$ has a zero of the
same order after removal; **Casorati–Weierstrass** (landmark): near an essential
singularity the image of every punctured neighbourhood is **dense** in
$\mathbb{C}$ (the honest in-scope statement; the surjectivity-minus-a-point
strengthening is Picard, CA-23); the trichotomy is exhaustive and exclusive
(#11); the residue as $a_{-1}$ and its integral form (#12); **residue formulas**:
at a simple pole $\operatorname{Res} = \lim (z-a)f(z)$; at a pole of order $m$,
the $(m-1)$-st derivative formula; for $f = p/q$ with a simple zero of $q$,
$\operatorname{Res} = p(a)/q'(a)$; **singularities at $\infty$**, via $z\mapsto
1/z$ (defined here, used by CA-11); a meromorphic function on a domain has at
most countably many poles, discrete in the domain.

FS: an isolated singularity at which $f$ is unbounded is a pole; a function with
$\lim_{z\to a}f(z) = \infty$ has a removable singularity in $1/f$ without
further hypotheses (state carefully or drop); the Laurent expansion of a
function on a punctured disc is its Taylor expansion with finitely many negative
terms (FALSE for essential singularities); the residue is the value of the
function's "singular part at $a$"; a function holomorphic on
$\mathbb{C}\setminus\{0\}$ with a pole at $0$ is rational.

B: the Laurent expansions of $1/(z(z-1))$ in the three annuli $0<\lvert
z\rvert<1$, $1<\lvert z\rvert$, and about $z=1$ — **the same function with three
different Laurent series, which is what "in an annulus" means**; residues of
$e^z/z^3$, $\cot z$, $1/\sin z$; a pole of order $3$ handled by the derivative
formula.
CEX: $e^{1/z}$ has an essential singularity at $0$, its Laurent series has
infinitely many negative terms, and it omits exactly the value $0$ on every
punctured neighbourhood (Casorati–Weierstrass witnessed, and the sharpness that
motivates Picard); $\sin(1/z)$; $\lvert z\rvert$ is not the modulus of any
function with an isolated singularity; $1/\sin(1/z)$ has a non-isolated
singularity at $0$ — the witness that "singularity" does not mean "isolated
singularity".

Traps. (i) Laurent's existence proof uses a cycle (outer circle minus inner
circle) that is null-homologous in the annulus but NOT in any disc; the
justification is CA-7's homology theorem and must be cited as such. A
"two applications of Cauchy in a disc" proof does not close. (ii) Uniqueness is
a separate item and is the one the residue's definite article rests on; do not
fold it into existence. (iii) The classification must be stated as a
trichotomy theorem with a proof of exhaustiveness, not as a definition by cases.
(iv) $\cot z$'s residues need CA-2's zero set of $\sin$; cite it.

Forward references: NONE load-bearing. A Remarks-only pointer to CA-23 (Picard
sharpens Casorati–Weierstrass) is permitted, declared.

## CA-9. The Residue Theorem and the Evaluation of Real Integrals

`requires`: CA-8, `improper-integrals` (143)

DEFS: the **residue theorem's** hypotheses packaged (a cycle null-homologous in
$\Omega$, avoiding a discrete set $S$ of singularities); the **principal value**
of a divergent-looking improper integral (cite 143's definition if it exists
there — check on disk — else define with a dictionary item); the standard
contours: **semicircle**, **rectangle**, **keyhole**, **indented semicircle**,
**sector**, each defined once as a named contour so later items cite rather than
redraw.

THMS: **the residue theorem** (landmark):
$\frac{1}{2\pi i}\int_\Gamma f = \sum_{a\in S} n(\Gamma,a)\operatorname{Res}(f,a)$,
the sum having finitely many nonzero terms (a compactness argument that must be
made: the points with $n(\Gamma,a)\ne 0$ lie in a bounded set, and $S$ is
discrete and closed in $\Omega$); the special case of a positively oriented
circle; **the estimation lemmas**: $\int_{\text{arc}} \to 0$ when $zf(z)\to0$
uniformly (large arcs), **Jordan's lemma** for $e^{i\lambda z}f(z)$, and the
**indentation lemma** giving $i\alpha\operatorname{Res}$ over a small arc of
angle $\alpha$ at a simple pole; **$\int_{-\infty}^{\infty} R(x)dx$ for a
rational $R$ with $\deg q \ge \deg p + 2$ and no real poles**; the same with
simple real poles, as a principal value; **$\int_{-\infty}^{\infty}
R(x)e^{i\lambda x}dx$** by Jordan's lemma; **$\int_0^{2\pi} R(\cos\theta,
\sin\theta)d\theta$** by the substitution $z = e^{i\theta}$ (the dictionary item
turning a real trigonometric integral into a contour integral, using 167's polar
form); **$\int_0^\infty x^{\alpha-1}R(x)dx$ by the keyhole**, which needs a
branch of $z^{\alpha-1}$ and therefore cites well-definedness #16/#18 forward
from... **no** — see traps; **summation of series by residues**: $\sum_{n\in
\mathbb{Z}} f(n) = -\sum \operatorname{Res}(\pi\cot(\pi z)f(z))$ and the
alternating version with $\pi\csc$, with the growth hypothesis stated exactly;
**the Basel sum $\sum 1/n^2 = \pi^2/6$ by residues** (agreement remark with
order 161, which proves it by a real route — the library will hold two proofs
and must say so).

FS: the residue theorem applies to any cycle in $\Omega$ (the null-homologous
hypothesis); $\int_{-\infty}^\infty$ exists whenever the principal value does
(witness $x/(1+x^2)$, citing 143); a rational function with $\deg q = \deg p+1$
has a convergent improper integral; the large-arc estimate holds whenever
$f\to0$ (witness: $1/z$ — $zf(z)\to 0$ is the right hypothesis, not $f\to0$).

B: at least eight worked evaluations, one per lemma: $\int dx/(1+x^2)$,
$\int dx/(1+x^4)$, $\int \frac{\cos x}{1+x^2}dx$,
$\int_0^\infty \frac{\sin x}{x}dx = \pi/2$ (indentation + Jordan),
$\int_0^{2\pi}\frac{d\theta}{a+\cos\theta}$,
$\int_0^\infty \frac{x^{\alpha-1}}{1+x}dx = \pi/\sin\pi\alpha$ (keyhole),
$\int_0^\infty e^{-x^2}\cos(2bx)dx$ by a rectangle, the Basel sum.
CEX: $\int_{-\infty}^{\infty}\frac{\sin x}{x}dx$ converges improperly and not
absolutely (cite 143); a contour choice that fails because the arc estimate does
not apply; a residue computation that gives the wrong answer if the pole's
order is misjudged.

Traps. (i) **The branch problem in the keyhole evaluation is real and must be
resolved on THIS page or the item drops.** $z^{\alpha-1}$ needs a branch, which
is well-definedness rows 16–18, homed on CA-12 at order **265 — ABOVE this
page**. Three options, and step 1 must choose one and record it: (a) move the
branch-of-$\log$ material to CA-3/CA-4 where the primitive of $1/z$ first
exists, and have CA-12 cite it; (b) keep the keyhole evaluation but restrict to
rational $\alpha = p/q$ and use the explicit $n$-th roots of order 167;
(c) DROP the keyhole evaluations to CA-12's B page. **Recommendation: (a)** —
"a holomorphic branch of $\log$ on a homologically simply connected domain
avoiding $0$" is already a theorem on CA-7, so the definition of a branch
belongs at CA-7 and CA-12 keeps only $z^\alpha$, conformality and the geometry.
Step 1 must confirm this against CA-7's inventory and amend both pages together.
(ii) The finiteness of the residue sum is a real compactness argument, not an
"obviously". (iii) Jordan's lemma's proof needs $\sin\theta \ge 2\theta/\pi$ on
$[0,\pi/2]$ — that is a concavity fact about $\sin$; check whether order 135
(convexity) or 163 carries it, and cite rather than re-derive.
(iv) The Basel agreement remark: order 161 may be unauthored when this is
written; use the non-decaying form.

Forward references: NONE load-bearing after trap (i) is resolved. If option (c)
is taken instead, the keyhole items move rather than forward-reference.

## CA-10. The Argument Principle and Rouché's Theorem

`requires`: CA-9

DEFS: $Z(f,\Gamma)$ and $P(f,\Gamma)$, the zero and pole counts **weighted by
multiplicity and by the winding number**; the **logarithmic derivative** $f'/f$.

THMS: **the argument principle** (landmark):
$\frac{1}{2\pi i}\int_\Gamma \frac{f'}{f} = Z - P$ for $f$ meromorphic on
$\Omega$ and $\Gamma$ null-homologous avoiding zeros and poles — via the local
form $f'/f = m/(z-a) + \text{holomorphic}$ at a zero or pole of order $m$, plus
the residue theorem; **the geometric reading**: $\frac{1}{2\pi i}\int_\Gamma
f'/f = n(f\circ\Gamma, 0)$, i.e. the count IS the winding number of the image
curve about the origin (a separate item — the substitution is a change of
variables, not a definition, and this is the item that justifies the name);
the generalised form $\frac{1}{2\pi i}\int_\Gamma g\,f'/f = \sum g(a_j) -
\sum g(b_k)$; **Rouché's theorem** (landmark) in the standard sourced form
$\lvert f-g\rvert<\lvert g\rvert$ on $\Gamma$, implying equal zero counts
inside. The stronger symmetric variant is not included without its own exact
Glicksberg source and proof; **the fundamental theorem
of algebra by Rouché** (a fourth route; the CX-D7 remark on CA-5 is amended to
name it, or this one carries its own one-line pointer in the non-decaying form);
**Hurwitz's theorem** (landmark): if $f_n \to f$ locally uniformly on a domain,
$f_n$ never zero, then $f\equiv0$ or $f$ never zero — and the injective version:
a locally uniform limit of injective holomorphic functions is injective or
constant (**this is the exact item CA-16 consumes**, so it is stated here in the
form RMT needs); the **open mapping theorem re-derived** in one line as an
agreement remark (it was proved at CA-6 by an independent route; the remark
records that the library has two proofs and why CA-6's is the one the reading
order needs); **the local degree** count agreeing with CA-6's $m$; **the
inverse-function formula** $f^{-1}(w) = \frac{1}{2\pi i}\int_\Gamma
\frac{\zeta f'(\zeta)}{f(\zeta)-w}d\zeta$.

FS: Rouché's classical hypothesis $\lvert f - g\rvert < \lvert g\rvert$ can be
weakened to $\le$ (witness: $f = g$ scaled, or $z$ and $-z$ on the unit circle);
a locally uniform limit of injective holomorphic functions is injective
(witness: $f_n(z) = z/n$, constant limit — this is why Hurwitz says "or
constant"); the argument principle holds for $f$ with an essential singularity
inside $\Gamma$; $Z - P$ counts zeros without multiplicity.

B: the number of zeros of $z^5 + 3z + 1$ in $\lvert z\rvert<1$ and in
$1<\lvert z\rvert<2$ by Rouché; $e^z = 3z$ has exactly one root in the unit
disc; the image curve of $\lvert z\rvert = r$ under a cubic, with its winding
number read off; Hurwitz applied to $f_n(z) = 1 + z/n + \dots$; the
inverse-function formula used to recover a Taylor coefficient.
CEX: $f_n(z) = z/n$ (Hurwitz's escape clause); $f(z) = e^{1/z}$ inside the unit
circle (the essential-singularity `fs-` witness); two functions with
$\lvert f-g\rvert = \lvert g\rvert$ somewhere on the contour and different zero
counts.

Traps. (i) Prove the classical form directly from the nonvanishing homotopy
$g+t(f-g)$; do not promote the symmetric variant from recollection. (ii) The geometric
reading is a change of variables in a contour integral — cite CA-3's
parametrisation item (#5), do not assert it. (iii) Hurwitz's statement must
include "or $f\equiv0$" / "or constant"; omitting it is the classic false title,
which LEVELS.md §10a names as fatal. (iv) The open-mapping agreement remark must
not read as if CA-6's proof were provisional.

Forward references: NONE load-bearing.

## CA-11. The Riemann Sphere and Möbius Transformations

`requires`: CA-10, `compactness` (195), `the-topology-of-euclidean-space` (197)

DEFS: **$\widehat{\mathbb{C}} = \mathbb{C}\cup\{\infty\}$** as the one-point
compactification (#13); the two charts $z$ and $1/z$ and **holomorphic at
$\infty$** / **a pole at $\infty$** (#13); **meromorphic on
$\widehat{\mathbb{C}}$**; the **chordal metric** via stereographic projection;
a **Möbius transformation** (#14); the **cross-ratio** (#15); a **circline**
(circle or line in $\widehat{\mathbb{C}}$); **symmetric points** with respect to
a circline.

THMS: $\widehat{\mathbb{C}}$ is compact, Hausdorff, connected, and
**homeomorphic to $S^2$** by stereographic projection (#13; the explicit
formulas, with continuity of each cited into the analysis machinery, and
compact-to-Hausdorff from 195); the chordal metric induces the topology; the
Möbius transformations form a **group** under composition, generated by
translations, dilations/rotations and $z\mapsto1/z$ (landmark); $\mathrm{GL}_2
(\mathbb{C})\to\operatorname{M\ddot ob}$ is surjective with kernel the scalars
(#14); a Möbius map is a **biholomorphism of $\widehat{\mathbb{C}}$**, and every
biholomorphism of $\widehat{\mathbb{C}}$ is Möbius (landmark — the proof uses
CA-8's singularity classification at $\infty$ and Liouville);
**three-point transitivity**: there is a unique Möbius map taking any three
distinct points to $0,1,\infty$ (#15), hence a unique one between any two
ordered triples; **the cross-ratio is a Möbius invariant**, and four points lie
on a circline iff their cross-ratio is real; **circlines map to circlines**
(landmark); the **symmetry principle** (Möbius maps preserve symmetry with
respect to circlines); **classification** of Möbius maps by trace: elliptic,
parabolic, hyperbolic, loxodromic, with the fixed-point count; **the
meromorphic functions on $\widehat{\mathbb{C}}$ are exactly the rational
functions** (landmark — a genuinely satisfying theorem, proved by subtracting
principal parts and applying Liouville); the automorphism group of $\mathbb{C}$
is $\{az+b\}$ (via the singularity at $\infty$); the automorphism group of
$\mathbb{C}^\times$; $\deg$ of a rational map and the $d$-to-$1$ count on
$\widehat{\mathbb{C}}$.

FS: every holomorphic bijection of $\mathbb{C}$ is a Möbius transformation
(false: Möbius maps of $\widehat{\mathbb{C}}$ fixing $\infty$ are affine, and
$e^z$ is not a bijection anyway — state as "every injective entire function is
Möbius", refuted by the affine classification); a Möbius map with three fixed
points may be nonidentity; the cross-ratio is invariant under all
biholomorphisms; $\widehat{\mathbb{C}}$ is homeomorphic to $\mathbb{C}$
(compactness); every meromorphic function on $\mathbb{C}$ is rational (witness:
$e^z$ — an essential singularity at $\infty$, which is why the theorem is about
$\widehat{\mathbb{C}}$).

B: the Cayley transform $z\mapsto (z-i)/(z+i)$ mapping the upper half plane onto
the disc, verified; a Möbius map found from three point-correspondences;
the fixed points and classification of $z\mapsto z+1$, $z\mapsto 2z$,
$z\mapsto 1/z$; stereographic projection computed in coordinates; the chordal
distance formula.
CEX: $e^z$ is meromorphic on $\mathbb{C}$ and not on $\widehat{\mathbb{C}}$;
$\exp$ is a surjection $\mathbb{C}\to\mathbb{C}^\times$ that is not injective, so
"holomorphic bijection" is a real hypothesis; a homeomorphism of
$\widehat{\mathbb{C}}$ that is not holomorphic ($z\mapsto\bar z$).

Traps. (i) The chart-compatibility obligation (#13) is the FIRST place this
library ever says "holomorphic on a space that is not an open subset of
$\mathbb{C}$". Write the two charts, the overlap, and the transition map as
numbered items; SC-1 and CA-20 both reuse the pattern. (ii) The one-point
compactification and "compact Hausdorff, continuous bijection from a compact
space" both live at order 195; cite, do not rebuild. (iii) The trace
classification needs the matrix normalised to determinant $1$, so the trace is
defined only up to sign — say so where it is defined. (iv) $\mathrm{GL}_2$,
kernels and quotient groups come from the algebra band (orders 30/32/74); cite.

Forward references: NONE load-bearing.

## CA-12. Conformal Mapping, Branches, and the Schwarz Lemma

`requires`: CA-11, CA-7, `the-logarithm-and-general-powers` (155),
`roots-and-rational-powers` (16)

**Placement note.** Per CA-9 trap (i), well-definedness rows **16 and 17** (a
branch of $\arg$; a holomorphic branch of $\log$ on a domain) may be relocated
to **CA-7**, where the existence theorem already lives, so that CA-9's keyhole
evaluations can cite them. If that relocation is taken, this page keeps rows
**18** ($z^\alpha$) and the geometry, and cites CA-7 for the rest. Step 1
decides once, for both pages, and records it.

DEFS: a **branch of the argument** on a domain (#16); a **holomorphic branch of
$\log$** (#17); the **principal branch** and the branch cut; **$z^\alpha$**
(#18); a **conformal equivalence** (biholomorphism) between domains; the unit
disc $\mathbb{D}$, the upper half plane $\mathbb{H}$; the **automorphism group**
$\operatorname{Aut}(\Omega)$; the **Blaschke factor** $\varphi_a(z) =
\frac{a-z}{1-\bar a z}$; the **hyperbolic (Poincaré) metric** on $\mathbb{D}$
(optional — keep only if the page stays under the cap).

THMS: existence and uniqueness-up-to-$2\pi i\mathbb{Z}$ of a branch of $\log$
on a homologically simply connected domain avoiding $0$ (#17; the theorem is
CA-7's, this page names it); **no continuous branch of $\arg$ exists on
$\mathbb{C}^\times$** (cite 167, which proves the stronger continuous
statement); the two dictionary items for $z^\alpha$ (#18): agreement with the
integer power (order 16) and with the real $x^\alpha$ for $x>0$ under the
principal branch (order 155); the branch-dependent failure of $(z^a)^b =
z^{ab}$ and of $\log(zw) = \log z + \log w$ (stated as theorems about the
discrepancy lying in $2\pi i\mathbb{Z}$, not as slogans); **the Schwarz lemma**
(landmark): $f:\mathbb{D}\to\mathbb{D}$ holomorphic with $f(0)=0$ gives
$\lvert f(z)\rvert \le \lvert z\rvert$ and $\lvert f'(0)\rvert\le1$, **with
equality in either iff $f$ is a rotation** (the equality clause is the content);
**the Schwarz–Pick lemma**; $\varphi_a$ is an automorphism of $\mathbb{D}$ with
$\varphi_a\circ\varphi_a = \mathrm{id}$; **$\operatorname{Aut}(\mathbb{D})$ is
exactly $\{e^{i\theta}\varphi_a\}$** (landmark); $\operatorname{Aut}(\mathbb{H})
= \mathrm{PSL}_2(\mathbb{R})$ via the Cayley transform (landmark); a
**biholomorphism is conformal and its inverse is holomorphic** (CA-6);
conformal equivalence is an equivalence relation; the standard **elementary
conformal maps**, each with its domain and its branch stated: $z^n$ on a sector,
$z^{1/n}$, $\log$ on a half plane or a slit plane, $\exp$ on a strip,
$\frac12(z+1/z)$ (the Joukowski map) on the exterior of the disc,
$\sin$ on a half-strip; the **Riemann sphere is not conformally equivalent to
$\mathbb{C}$ or to $\mathbb{D}$**, and $\mathbb{C}$ is not equivalent to
$\mathbb{D}$ (Liouville) — the three simply connected model domains as
genuinely three, which is what CA-16's exclusion of $\Omega = \mathbb{C}$ means.

FS: $\log(zw) = \log z + \log w$ for the principal branch (witness
$z = w = -1$); $(z^a)^b = z^{ab}$ (witness from 167's B page, or rebuilt here);
$\sqrt{zw} = \sqrt z\sqrt w$; a conformal map preserves lengths; every
angle-preserving map is holomorphic (witness: $\bar z$ preserves angle
magnitudes and reverses orientation — the reason "conformal" carries
orientation in this library, cross-referenced to CA-1's #3); the Schwarz lemma
holds without $f(0)=0$.

B: the strip-to-disc map assembled from $\exp$, a Möbius map and a rotation, in
four labelled stages; $i^i$ computed on the principal branch and shown to be a
real number, with the other branch values listed; $\log(-1)$'s branch values;
the first quadrant mapped to the upper half plane by $z^2$; Schwarz applied to
bound $\lvert f(1/2)\rvert$.
CEX: a branch of $\log$ on the slit plane that jumps across the cut, exhibited
numerically at $-1\pm i\varepsilon$; $\sqrt{(-1)(-1)} \ne \sqrt{-1}\sqrt{-1}$;
$\bar z$ preserves unsigned angles and is not holomorphic; the punctured disc
and the annulus are not conformally equivalent (if a cheap proof closes at this
order — else DROP with a note, since the honest proof wants the modulus of an
annulus, which is CA-16-adjacent material this track does not scaffold).

Traps. (i) Every single statement involving $\log$, $\arg$, $z^\alpha$ or
$\sqrt{\ }$ on this page must name its branch **in the Statement**. A title or
Statement that says "$\log$" without a branch is exactly the
"asserts more than the proof gives" class LEVELS.md §10a calls fatal.
(ii) The Schwarz lemma's proof applies the maximum principle to $f(z)/z$ on
$\lvert z\rvert \le r$ and lets $r\to1$; the removability of the singularity at
$0$ is CA-8 and must be cited. (iii) $\operatorname{Aut}(\mathbb{D})$'s proof
uses Schwarz twice, on $f\circ\varphi_a$ and its inverse; both directions are
needed for the equality case. (iv) The elementary-map catalogue is where an
inventory silently doubles; cap it at six maps, each one item.

Forward references: NONE load-bearing.

## CA-13. Harmonic Functions and the Poisson Integral

`requires`: CA-7, CA-6, `mixed-partials-taylor-and-extrema` (171)

Proposed A-page inventory (dependency order; 26 items, below the 60-item split
ceiling):

| id | kind | one-line statement |
|---|---|---|
| `def-plane-harmonic-function` | def | A real-valued $C^2$ function is harmonic when $\Delta u=0$, with the component/domain convention explicit. |
| `rem-agreement-with-c2-holomorphic-components-are-harmonic` | rem | Cite the authored CA-1 implication and identify it with this Laplacian convention. |
| `thm-local-holomorphic-potential-for-harmonic-functions` | thm | Every plane harmonic function is locally the real part of a holomorphic function. |
| `def-harmonic-conjugate` | def | A harmonic conjugate $v$ makes $u+iv$ holomorphic. |
| `thm-harmonic-conjugate-on-simply-connected-domains` | thm | A harmonic function on a simply connected plane domain has a global conjugate. |
| `cor-harmonic-conjugates-differ-by-a-real-constant` | cor | Any two conjugates on a domain differ by a real constant. |
| `thm-plane-harmonic-functions-are-smooth-and-real-analytic` | thm | Harmonic functions are $C^\infty$ and locally real-analytic. |
| `def-mean-value-property-for-plane-functions` | def | State circle and disc mean-value properties with compact-containment hypotheses. |
| `thm-mean-value-property-for-plane-harmonic-functions` | thm | Harmonic functions equal every compactly contained circle/disc average. |
| `thm-converse-mean-value-property-for-plane-functions` | thm | A continuous function with the local mean-value property is harmonic. |
| `thm-maximum-and-minimum-principles-for-plane-harmonic-functions` | thm | A nonconstant harmonic function has no interior extremum, with bounded-domain boundary form. |
| `cor-uniqueness-for-the-bounded-plane-dirichlet-problem` | cor | Continuous harmonic extensions of the same bounded-domain boundary data agree. |
| `cor-liouville-theorem-for-plane-harmonic-functions` | cor | A harmonic function on $\mathbb C$ bounded above or below is constant. |
| `thm-identity-principle-for-plane-harmonic-functions` | thm | Vanishing on a nonempty open subset of a domain forces global vanishing. |
| `thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions` | thm | A harmonic function bounded near an isolated puncture extends harmonically. |
| `thm-conformal-invariance-of-plane-harmonicity` | thm | Composition with a conformal or anticonformal plane map preserves harmonicity. |
| `def-poisson-kernel-on-the-disc` | def | Define $P_r(\theta)=(1-r^2)/(1-2r\cos\theta+r^2)$. |
| `lem-poisson-kernel-properties-on-the-disc` | lem | The kernel is positive, has normalized mass one and concentrates at the origin. |
| `def-poisson-integral-on-the-disc` | def | Define the normalized boundary convolution $P[\varphi]$. |
| `lem-poisson-integrals-are-harmonic` | lem | Poisson extensions are harmonic, with differentiation under the integral justified. |
| `lem-poisson-kernel-is-a-boundary-approximate-identity` | lem | Poisson convolution converges uniformly to continuous circle data. |
| `thm-poisson-integral-solves-the-disc-dirichlet-problem` | thm | The Poisson integral is the unique continuous harmonic extension on the closed disc. |
| `thm-poisson-representation-for-disc-harmonic-functions` | thm | A harmonic function is recovered on smaller discs from any enclosing circle values. |
| `thm-harnack-inequality-on-a-disc` | thm | Positive harmonic functions obey the sharp Poisson-kernel ratio bounds. |
| `thm-harnack-convergence-principle-for-plane-harmonic-functions` | thm | An increasing harmonic sequence converges locally uniformly to a harmonic function or diverges to $+\infty$. |
| `thm-harmonic-and-holomorphic-schwarz-reflection-principles` | thm | Zero real boundary data reflect harmonically, yielding the holomorphic line-reflection formula. |

DEFS: **harmonic** on an open subset of $\mathbb{C}$ ($C^2$ with $\Delta u = 0$
— and the theorem below that upgrades $C^2$ to $C^\infty$); the **harmonic
conjugate** (#19); the **Poisson kernel** $P_r(\theta)$ and the **Poisson
integral** $P[\varphi]$ (#20); the **mean value property**.

THMS: $u$ harmonic $\iff$ locally $u = \mathrm{Re}\,f$ for a holomorphic $f$
(landmark; the conjugate is built from a primitive of $u_x - iu_y$, which is
holomorphic by CR — the "$\Leftarrow$" is CA-1's item, now unconditional
because holomorphic $\Rightarrow C^\infty$ at CA-5: **the agreement remark with
CA-1's $C^2$-hypothesised version is required**); consequently **harmonic
$\Rightarrow$ $C^\infty$, indeed real-analytic**; the harmonic conjugate exists
on a homologically simply connected domain and is unique up to a real constant
(#19); the **mean value property**, and the converse (continuous with the MVP
$\Rightarrow$ harmonic); the **maximum and minimum principles** for harmonic
functions, in the local and the bounded-closure forms; **Liouville for harmonic
functions** (bounded above on $\mathbb{C}$ $\Rightarrow$ constant); the
**identity theorem fails** for harmonic functions in the strong holomorphic form
but holds in the form: harmonic on a domain and vanishing on a nonempty open
subset $\Rightarrow$ identically zero; **the Poisson kernel** and its three
properties (positive; integrates to $1$; concentrates at $\theta=0$);
**the Dirichlet problem on the disc** (landmark, #20): for continuous $\varphi$
on $\partial\mathbb{D}$, $P[\varphi]$ is harmonic inside and extends
continuously with boundary values $\varphi$; **uniqueness** by the maximum
principle (#20); the **Poisson formula** recovering a harmonic function from its
boundary values; **Harnack's inequality** on a disc, and **Harnack's theorem**
(an increasing sequence of harmonic functions converges locally uniformly to a
harmonic function or to $+\infty$) — both are what CA-14 consumes;
**the Schwarz reflection principle** for harmonic and for holomorphic functions
(landmark; the holomorphic version via the harmonic one and Morera);
**a positive harmonic function on $\mathbb{C}$ is constant**.

FS: a harmonic function on a domain vanishing on a curve is identically zero;
every harmonic function on a domain has a harmonic conjugate (witness
$\log\lvert z\rvert$ on $\mathbb{C}^\times$ — **the** example, and it is the
same obstruction as CA-7's, which the remark must say); $\lvert u\rvert$ is
harmonic when $u$ is; the product of two harmonic functions is harmonic; the
maximum principle gives a maximum on the boundary for unbounded domains.

B: $\log\lvert z\rvert$, $\mathrm{Re}(z^n)$, $\arctan(y/x)$ checked harmonic;
the conjugate of $x^2-y^2$; the Poisson integral of a step function on the
circle computed; Harnack's inequality applied; the reflection principle used to
continue $\sin$ across $\mathbb{R}$.
CEX: $\log\lvert z\rvert$ has no harmonic conjugate on $\mathbb{C}^\times$
(equivalently no holomorphic $\log$ — cite CA-7 and state the equivalence);
$u(x,y)=x$ is harmonic and unbounded, so Liouville needs the bound;
$u = \mathrm{Re}(1/z)$ on the punctured disc is harmonic, bounded on no
neighbourhood of $0$, and contrasts with the bounded removable-singularity
theorem. CA-14's continuous datum on the punctured disc, not this function,
supplies the actual nonsolvability example.

Traps. (i) The agreement remark with CA-1's $C^2$-hypothesised harmonicity item
is mandatory; without it the library states the same theorem twice with
different hypotheses and never connects them (the level-7 two-notions defect).
(ii) $\Delta$, $u_{xx}$, $u_{yy}$ and the symmetry of mixed partials come from
order 171; cite `Clairaut–Schwarz` rather than assuming it. (iii) The
concentration property of $P_r$ is an $\varepsilon$-$\delta$ argument with a
split integral; it is the only real analysis on the page and is where proofs
wave. (iv) Harnack's theorem's "or $+\infty$" clause must be in the Statement.

Forward references: NONE load-bearing.

## CA-14. Subharmonic Functions and the Dirichlet Problem

`requires`: CA-13, `the-topology-of-euclidean-space`, the measure-theory
Lebesgue-integral and monotone/Fatou convergence interfaces

Proposed A-page inventory (dependency order; 31 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-standard-upper-semicontinuous-subharmonic-convention` | rem | Record the extended-valued USC convention and retire the old continuous convention. |
| `def-plane-subharmonic-function` | def | Define subharmonicity by USC plus the submean inequality, excluding $-\infty$ componentwise. |
| `def-plane-superharmonic-function` | def | Define superharmonicity by negating a subharmonic function, with extended values translated exactly. |
| `lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined` | lem | USC extended-real functions are Borel and their submean integrals are well defined under the stated convention. |
| `thm-harmonic-majorant-characterization-of-plane-subharmonicity` | thm | Submean subharmonicity is equivalent to comparison with harmonic majorants on compact discs. |
| `thm-c-two-characterization-of-plane-subharmonicity` | thm | For $C^2$ functions, subharmonicity is equivalent to $\Delta u\ge0$. |
| `thm-plane-subharmonic-functions-are-locally-integrable` | thm | A nontrivial subharmonic function lies in $L^1_{\rm loc}$. |
| `thm-log-modulus-of-a-holomorphic-function-is-subharmonic` | thm | $\log|f|$, with value $-\infty$ at zeros, is subharmonic. |
| `cor-modulus-powers-of-holomorphic-functions-are-subharmonic` | cor | $|f|^p$ is subharmonic for every $p>0$. |
| `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` | lem | Nonnegative finite sums and finite maxima preserve the class. |
| `thm-decreasing-limit-theorem-for-plane-subharmonic-functions` | thm | A decreasing limit is subharmonic or identically $-\infty$ componentwise. |
| `def-upper-semicontinuous-regularization` | def | Define $v^*(z)=\limsup_{w\to z}v(w)$ and prove it is the least USC majorant. |
| `thm-upper-envelope-theorem-for-plane-subharmonic-functions` | thm | The USC regularisation of a locally bounded-above subharmonic supremum is subharmonic. |
| `thm-hartogs-lemma-for-subharmonic-functions` | thm | Locally uniformly upper-bounded subharmonic sequences obey the compact upper-limit estimate. |
| `thm-maximum-principle-for-plane-subharmonic-functions` | thm | An interior maximum forces constancy on the component. |
| `cor-almost-everywhere-equality-determines-a-plane-subharmonic-function` | cor | Two subharmonic functions equal almost everywhere are equal everywhere. |
| `thm-mollifier-regularization-of-plane-subharmonic-functions` | thm | Standard convolutions give decreasing smooth subharmonic approximants on smaller domains. |
| `def-poisson-modification-of-a-subharmonic-function` | def | Replace a function on a compact disc by the harmonic extension of its boundary values. |
| `lem-gluing-lemma-for-plane-subharmonic-functions` | lem | Compatible subharmonic pieces glue under the precise boundary limsup inequality. |
| `thm-poisson-modification-preserves-subharmonicity-and-majorizes` | thm | Poisson modification is subharmonic and no smaller than the original function. |
| `def-perron-family-for-the-plane-dirichlet-problem` | def | Define lower functions by their boundary limsup constraint for continuous data. |
| `def-perron-envelope-for-the-plane-dirichlet-problem` | def | Define the pointwise envelope and its USC regularisation without assuming attainment. |
| `lem-perron-family-is-nonempty-and-bounded` | lem | Constants show nonemptiness and the maximum principle gives finite uniform bounds. |
| `thm-perron-envelope-is-harmonic` | thm | Finite maxima, Poisson modifications and Harnack convergence make the regularised envelope harmonic. |
| `def-barrier-and-regular-boundary-point` | def | Define a barrier and regularity by attainment for every continuous boundary datum. |
| `thm-barrier-characterization-of-regular-boundary-points` | thm | A boundary point is regular exactly when it admits a barrier. |
| `thm-perron-solves-dirichlet-on-regular-plane-domains` | thm | If every boundary point is regular, Perron's function is the unique continuous solution. |
| `thm-exterior-disc-and-exterior-cone-points-are-regular` | thm | Explicit logarithmic barriers prove these geometric regularity criteria. |
| `thm-nonsingleton-boundary-component-is-regular` | thm | A point lying in a nonsingleton connected component of $\partial\Omega$ is regular. |
| `cor-simply-connected-proper-plane-domains-are-regular` | cor | Every bounded simply connected proper plane domain is regular. |
| `thm-conformal-transport-of-plane-dirichlet-solutions` | thm | Between bounded regular domains, a conformal bijection extending homeomorphically to closures transports continuous boundary data and their solutions. |

DEFS: **subharmonic** $u:\Omega\to[-\infty,\infty)$ in the standard USC
sub-mean sense (CX-D6), with the componentwise exclusion of $u\equiv-\infty$;
superharmonic; harmonic majorant; the **harmonic modification** (Poisson
lifting) on a relatively compact disc; the **upper-semicontinuous
regularisation** $v^*(z)=\limsup_{w\to z}v(w)$; the **Perron lower family**
$\mathcal P(\varphi,\Omega)$ defined by
$\limsup_{z\to\zeta}v(z)\le\varphi(\zeta)$; its upper envelope and regularised
Perron solution (#21); a **barrier** and a **regular boundary point**.

THMS: the USC convention and local-integrability lemma; equivalence of the
sub-mean and harmonic-comparison definitions; $\max(u_1,u_2)$ and a convex
nondecreasing composition preserve subharmonicity; decreasing limits and
locally bounded-above suprema after USC regularisation preserve it;
$|f|^p$ ($p>0$) and **$\log|f|$ with value $-\infty$ at zeros** are
subharmonic for holomorphic $f$; the maximum principle; the harmonic
modification is subharmonic and majorises the original; **the regularised
Perron envelope is harmonic** (landmark, #21 — modification plus Harnack from
CA-13); it is bounded by $\min\varphi$ and $\max\varphi$;
**a barrier at $\zeta$ forces $u(z)\to\varphi(\zeta)$** (landmark, #21);
**the Dirichlet problem is solvable on a bounded domain every boundary point of
which is regular** (landmark), uniquely; the exterior-disc and exterior-cone
barrier criteria; **a boundary point whose connected component in
$\partial\Omega$ is not a singleton is regular** (the planar logarithmic
barrier theorem); hence every bounded simply connected proper plane domain is
regular; and **conformal transport of continuous boundary data** only when the
conformal bijection extends to a homeomorphism of the closures. The proof says
boundary component, not complementary component, and the last theorem does not
silently invoke Carathéodory or prime ends.
The logarithmic-capacity Wiener criterion is deferred to fine potential theory
and is not smuggled into this proof.

FS: the Dirichlet problem is solvable on every bounded domain (witness: the
punctured disc, with boundary datum $0$ on the circle and $1$ at the puncture —
the removability of an isolated singularity for bounded harmonic functions is
what kills it, and that item must be present or the `fs-` drops); the Perron
function always attains the boundary values; a subharmonic function attains its
maximum in the interior; the pointwise supremum of an arbitrary family of
subharmonic functions is subharmonic (local boundedness above and USC
regularisation cannot be omitted).

B: $\lvert z\rvert^2$ and $\log\lvert z\rvert$ tested; the harmonic modification
computed on a disc; the Perron solution on an annulus with radial data; the
barrier at a boundary point of a square, explicitly.
CEX: the **punctured disc**: no solution with datum $1$ at the puncture, and
the puncture is an irregular boundary point — the single example that motivates
the whole page; a bounded domain with a slit, where the two sides of the slit
can represent distinct prime ends while meeting the same Euclidean boundary
set (a warning only: prime-end theory is not silently introduced).

Traps. (i) The value $-\infty$ and the exclusion of an identically $-\infty$
component are part of the definition; replacing them by finite continuity
breaks $\log|f|$. (ii) A raw supremum need not be USC, hence the star in the
Perron construction and in stability under suprema is load-bearing. (iii)
Boundary regularity is pointwise: solvability for every continuous datum is
equivalent to regularity of every boundary point, not to smoothness by
definition. (iv) The general Wiener criterion is proved only after logarithmic
capacity exists on CA-PT **and** a later fine-potential-theory development is
built; it is not asserted on either page here. (v) Harnack's theorem is
CA-13's; cite it.

Forward references: CA-PT's logarithmic capacity and polar sets are declared
and non-load-bearing here; the full Wiener criterion is a recorded scope
denial.

## CA-15. Normal Families and Montel's Theorem

`requires`: CA-13, CA-10,
`approximation-and-compactness-in-ck` (149)

DEFS: **local uniform convergence** and the topology it induces on
$C(\Omega,\mathbb{C})$ and $H(\Omega)$, via a compact exhaustion and its metric
(#22); a **normal family**; **locally bounded** family; **locally equicontinuous**.

THMS: the canonical compact exhaustion $K_n = \{z\in\Omega : \lvert z\rvert\le n,\
d(z,\partial\Omega)\ge1/n\}$ exists, is increasing with $K_n \subseteq
\mathrm{int}\,K_{n+1}$ and exhausts $\Omega$ (a real point-set item, citing 197);
the metric $d(f,g)=\sum 2^{-n}\min(1,\sup_{K_n}\lvert f-g\rvert)$ is a metric
inducing local uniform convergence, and **different exhaustions give the same
topology** (#22); $C(\Omega,\mathbb{C})$ is complete in it and $H(\Omega)$ is
**closed** (Weierstrass, CA-5); **locally bounded $\Rightarrow$ locally
equicontinuous** for holomorphic families (landmark — Cauchy's integral formula
applied to $f(z)-f(w)$, the one genuinely complex-analytic step);
**Montel's theorem** (landmark): a locally bounded family in $H(\Omega)$ is
normal — Arzelà–Ascoli on each $K_n$ (order 149) plus a diagonal extraction,
with the **choice cost (AC$_\omega$/DC) inherited from 149 and named in the
Statement**; the converse (normal $\Rightarrow$ locally bounded) for families in
$H(\Omega)$; **Vitali–Porter**: a locally bounded family converging pointwise on
a set with a limit point converges locally uniformly (Montel plus the identity
theorem); the derivative map $f\mapsto f'$ is continuous on $H(\Omega)$;
**Hurwitz restated in the normal-family language** (cite CA-10, do not re-prove);
Montel for **meromorphic** families with values in $\widehat{\mathbb{C}}$ under
the chordal metric (optional; keep only if CA-23 needs it and the page stays
under the cap).

FS: a pointwise bounded family of holomorphic functions is normal (witness
needed — if none closes cheaply, weaken to "a pointwise bounded family is
locally bounded"); a normal family has a locally uniformly convergent sequence
whose limit is in the family (normal is about subsequences, not closedness);
Arzelà–Ascoli alone gives Montel (equicontinuity is exactly what must be
proved, and that is where holomorphy enters); the limit of a normal family's
convergent subsequence is holomorphic without further hypotheses (it is — so
state instead: a normal family of continuous functions has holomorphic limits).

B: $\{z^n\}$ on $\mathbb{D}$ is normal, and on $\mathbb{C}$ is not;
$\{f : \lvert f\rvert<1\}$ on any domain is normal; the diagonal extraction
written out for a concrete family; the metric computed for $\Omega=\mathbb{D}$.
CEX: $\{nz\}$ is not normal on any domain containing a nonzero point;
$\{e^{nz}\}$ on the right half plane is not normal although each member is
bounded on compacta of a smaller region; a family that is normal in the
"converges to $\infty$" extended sense and not in $H(\Omega)$ — motivating the
$\widehat{\mathbb{C}}$-valued version.

Traps. (i) #22 is the well-definedness obligation people skip; if "normal
family" depends on an exhaustion, every statement downstream is ambiguous.
(ii) **Do not re-derive Arzelà–Ascoli.** Order 149 owns it, including its choice
ledger. This page's contribution is the equicontinuity step. (iii) The diagonal
argument's choice cost is real; name AC$_\omega$/DC in Facts, not silently.
(iv) The general Ascoli page at 225 is NOT required — 149's $C(K)$ version
suffices, and declaring 225 as a prerequisite would push this page's
`requires` needlessly high.

Forward references: NONE load-bearing.

## CA-16. The Riemann Mapping Theorem

`requires`: CA-15, CA-12, CA-7

DEFS: **univalent** (injective holomorphic); the class $\mathcal{S}$ of
univalent $f$ on $\mathbb{D}$ with $f(0)=0$, $f'(0)=1$; the extremal family
$\mathcal{F} = \{f : \Omega\to\mathbb{D}$ univalent, $f(z_0)=0\}$.

THMS: **the Riemann mapping theorem** (landmark): a homologically simply
connected domain $\Omega\subsetneq\mathbb{C}$ is conformally equivalent to
$\mathbb{D}$, and the map is **unique** once normalised by $f(z_0)=0$,
$f'(z_0)>0$ — the proof in its four numbered stages: (1) $\mathcal{F}$ is
nonempty (the square-root trick: pick $a\notin\Omega$, take a branch of
$\sqrt{z-a}$ using CA-7, show its image misses a disc, invert); (2)
$\mathcal{F}$ is locally bounded, hence normal (CA-15), and the supremum of
$\lvert f'(z_0)\rvert$ is attained (a maximising sequence — **the DC step**);
(3) the extremal $f$ is univalent (Hurwitz, CA-10 — this is the item CA-10 was
told to state in this form); (4) the extremal $f$ is **onto**, by the
Koebe square-root enlargement applied to a Blaschke factor (CA-12) —
the contradiction step; uniqueness by Schwarz (CA-12);
the exclusion of $\Omega=\mathbb{C}$ is necessary (Liouville, CA-12);
**the area theorem** for $g(z) = 1/z + \sum b_n z^n$ univalent on the punctured
disc, $\sum n\lvert b_n\rvert^2 \le 1$ (Green's theorem, order 181);
**Bieberbach's $\lvert a_2\rvert\le2$**; the **Koebe $\tfrac14$ theorem**
(landmark); the **Koebe distortion and growth estimates**; the corollary that a
univalent $f$ on $\mathbb{D}$ has $f(\mathbb{D})\supseteq D(f(0),
\lvert f'(0)\rvert/4)$; the choice ledger (DC, twice: the maximising sequence
and Montel).

FS: every domain is conformally equivalent to $\mathbb{D}$ ($\mathbb{C}$ itself,
and the punctured disc); the Riemann map extends to a homeomorphism of the
closures (Carathéodory's theorem, denial 10 — so this `fs-` is refuted by a
domain with a bad boundary, e.g. a slit disc or a comb domain, if the witness
closes cheaply; **else DROP with a note** and let the denial table carry it);
the Riemann map is unique without normalisation; a conformal equivalence
preserves area.

B: the explicit maps for a half plane, a strip, a sector and a slit plane,
each with its branch (this is what "the theorem is not constructive" means, made
concrete); the extremal problem solved by hand for $\Omega=\mathbb{D}$; Koebe
$1/4$ applied to the Koebe function $z/(1-z)^2$ showing the constant is sharp.
CEX: the **Koebe function** $k(z) = z/(1-z)^2$ maps $\mathbb{D}$ onto the plane
slit along $(-\infty,-1/4]$, so $1/4$ cannot be improved; $\mathbb{C}$ and
$\mathbb{D}$ are not equivalent; the punctured disc is simply connected in no
sense and is not equivalent to $\mathbb{D}$.

Traps. (i) The four stages are four items plus the assembling theorem; a
single-item RMT is unauditable. (ii) Stage 1's square root needs a branch on a
homologically simply connected domain, which is CA-7's theorem and CA-12's
vocabulary; do not construct it ad hoc. (iii) Stage 4 is where every exposition
compresses; write the enlargement map explicitly and verify $\lvert F'(0)\rvert
> \lvert f'(z_0)\rvert$ as a computation. (iv) "Simply connected" here means
**homologically** (CA-7); the topological equivalence is CA-17 and using it here
would be circular, since CA-17 uses RMT.

Forward references: NONE load-bearing.

## CA-17. Simply Connected Plane Domains: the Grand Equivalence

`requires`: CA-16, `the-fundamental-group` (231),
`covering-spaces-and-lifting` (233), `the-fundamental-group-of-the-circle` (235)

The page that finally joins the analytic, homological and homotopic notions.
It is 80% assembly and its value is **citation discipline**, in the manner of
EU-1 at order 197.

DEFS: none new, except the naming item that fixes **"simply connected"** for
plane domains once and for all, after the equivalence is proved.

THMS: **the grand equivalence** (landmark): for a domain $\Omega\subseteq
\mathbb{C}$, the following are equivalent —
(1) $\widehat{\mathbb{C}}\setminus\Omega$ is connected;
(2) every cycle in $\Omega$ is null-homologous (CA-7);
(3) $\pi_1(\Omega)$ is trivial (order 231);
(4) every holomorphic $f$ on $\Omega$ has a primitive (CA-7);
(5) $\int_\gamma f = 0$ for every holomorphic $f$ and closed $\gamma$;
(6) every nonvanishing holomorphic $f$ has a holomorphic logarithm;
(7) every nonvanishing holomorphic $f$ has a holomorphic square root;
(8) every harmonic $u$ has a harmonic conjugate (CA-13);
(9) $\Omega = \mathbb{C}$ or $\Omega$ is conformally equivalent to $\mathbb{D}$
(CA-16);
(10) $\Omega$ is homeomorphic to $\mathbb{D}$ or to $\mathbb{C}$;
(11) $\Omega$ is contractible (order 229) —
assembled as a cycle of implications, **each arrow its own numbered item** with
the page that carries it named, and only the genuinely new arrows proved here.
The genuinely new ones: (3)$\Rightarrow$(2) (a null-homotopic loop is
null-homologous — the homotopy-invariance-of-the-integral argument, which is
where path homotopy enters this track for the first time); (2)$\Rightarrow$(1)
(a bounded component of the complement supports a cycle with nonzero index);
(9)$\Rightarrow$(11)$\Rightarrow$(3) (transport along a homeomorphism, orders
229/231); **the homotopy form of Cauchy's theorem** (landmark, CX-D4): if
$\gamma_0\simeq\gamma_1$ rel endpoints in $\Omega$ then $\int_{\gamma_0}f =
\int_{\gamma_1}f$ — proved here, from the subdivision of the homotopy square
by Lebesgue number (orders 106/195) plus Cauchy in a disc (CA-4); and the
corollary for null-homotopic loops; **the winding number is the degree**: for a
loop $\gamma$ in $\mathbb{C}^\times$, $n(\gamma,0)$ equals the image of
$[\gamma]$ under $\pi_1(\mathbb{C}^\times)\cong\pi_1(S^1)\cong\mathbb{Z}$
(landmark — the dictionary item discharging the orientation remark
`plan-topology-set-theory-track.md` §HT-7 left open, and the item that makes
`rem-exponential-sequence-as-covering` a theorem).

FS: a connected domain with connected complement **in $\mathbb{C}$** is simply
connected (the complement must be taken in $\widehat{\mathbb{C}}$; witness: the
punctured plane, whose complement in $\mathbb{C}$ is a point, hence connected);
simply connected implies convex or star-shaped; a domain homeomorphic to
$\mathbb{D}$ is conformally equivalent to it in a unique way; the equivalence
holds for domains in $\mathbb{C}^2$ (it fails — the ball/polydisc, SC-1).

B: the disc, the plane, a slit plane, a convex set, a star-shaped set all placed
in the equivalence; the annulus and the punctured disc failing every clause; the
complement taken in $\mathbb{C}$ versus in $\widehat{\mathbb{C}}$, side by side.
CEX: $\mathbb{C}^\times$ — connected, complement in $\mathbb{C}$ connected,
complement in $\widehat{\mathbb{C}}$ **disconnected**, $\pi_1\cong\mathbb{Z}$,
$1/z$ without a primitive, no holomorphic $\log$: **one witness separating every
clause from its false weakening**, and the page's centrepiece.

Traps. (i) This page proves few new theorems and cites many; every clause names
the item that carries it, and restating a cited theorem would BE the two-notions
defect. (ii) (3)$\Rightarrow$(2) and the homotopy form of Cauchy are the same
argument; prove the homotopy form first and derive the implication, not the
reverse. (iii) $\pi_1(\mathbb{C}^\times)$: the deformation retract onto $S^1$ is
HT-1's (order 229) and $\pi_1(S^1)$ is HT-4's (235); cite both, do not rebuild.
(iv) The naming item must say plainly that from this page onward "simply
connected" is unqualified, and that every earlier page in this track said
"homologically simply connected" for a reason.

Forward references: NONE load-bearing.

## CA-18. Infinite Products and the Weierstrass Factorisation Theorem

`requires`: CA-15, CA-6, `absolute-convergence-and-rearrangement` (115)

DEFS: convergence of $\prod(1+a_n)$ over $\mathbb{C}$ (#23 — **reuse the
authored `def-infinite-product`, homed at order 115**; add only the
$\mathbb{C}$-specific clauses); normal (locally uniform absolute) convergence of
a product of functions; the **Weierstrass elementary factors** $E_p$; the
**canonical product** and its genus (#24); the **order** of an entire function.

THMS: $\prod(1+a_n)$ converges absolutely $\iff$ $\sum\lvert a_n\rvert<\infty$
(cite 115 for the real case and prove the complex clause); if $\sum\sup_K
\lvert a_n\rvert<\infty$ on every compact $K$ then $\prod(1+a_n(z))$ converges
locally uniformly to a **holomorphic** function whose zero set is the union of
the zero sets with multiplicities (landmark; Weierstrass convergence from CA-5);
$\lvert 1 - E_p(w)\rvert \le \lvert w\rvert^{p+1}$ for $\lvert w\rvert\le1$
(the estimate the whole theory rests on — a real computation, not a remark);
**the Weierstrass product theorem** (landmark): for any sequence $(a_n)$ in a
domain $\Omega$ with no limit point in $\Omega$, and any multiplicities, there
is a holomorphic function on $\Omega$ with exactly those zeros — proved first
for $\Omega=\mathbb{C}$ by canonical products (#24), then for general $\Omega$
(the general case may be deferred to CA-19, where Runge supplies the tool; step 1
decides and records); **the Weierstrass factorisation theorem** (landmark):
every entire $f$ is $z^m e^{g(z)}\prod E_{p_n}(z/a_n)$, with the uniqueness
limited to "up to $e^g$" (#24); the corollary that **every meromorphic function
on $\mathbb{C}$ is a quotient of two entire functions** (landmark); the
**product formula for $\sin$**: $\sin\pi z = \pi z\prod(1 - z^2/n^2)$ (landmark;
agreement remark with order 161's Wallis/Euler-product material, which reaches
the same identity by a real route); **Jensen's formula** relating
$\log\lvert f(0)\rvert$ to the boundary mean and the zeros (if it closes with
the Riemann integral — it does, the integrand is continuous after the standard
handling of boundary zeros; **if the boundary-zero case does not close, restrict
the statement to $f$ nonvanishing on the circle and record the restriction**);
**Hadamard's factorisation theorem** for entire functions of finite order
(landmark; the genus is bounded by the order — this is the graduate content of
the page and is what CA-22 uses for $\xi(s)$; **drop it with a note if Jensen is
restricted**, since the proof needs the zero-counting Jensen gives).

FS: an infinite product converges iff its terms tend to $1$; a product with a
zero factor diverges by definition (convention item, so this `fs-` is about a
convention and should be a `rem-` unless it can be phrased mathematically);
the Weierstrass factorisation is unique; every entire function of order $\rho$
has exactly $\rho$ as its genus.

B: $\prod(1-z^2/n^2)$ computed; the $\sin$ product used to evaluate the Basel
sum a third time (with the agreement remark naming CA-9's residue proof and
161's real proof); $1/\Gamma$ anticipated as a canonical product of genus $1$;
Jensen's formula on a polynomial.
CEX: $\prod(1+1/n)$ diverges although the terms tend to $1$;
$\prod(1 + (-1)^n/\sqrt n)$ (conditional behaviour); an entire function of order
$1$ and genus $0$ and another of order $1$ and genus $1$ ($e^z$ versus
$\sin z$), separating the two invariants.

Traps. (i) `def-infinite-product` EXISTS as an authored item at order 115. Grep
before minting; re-defining it is the reuse-discipline violation LEVELS.md
step 2 names. (ii) The $E_p$ estimate is where every exposition says "one
checks"; it is a numbered computation. (iii) Jensen's formula's boundary zeros
need care and the restriction escape hatch above must be taken deliberately and
recorded. (iv) Hadamard is the page's ceiling; if the page exceeds 24 items it
splits, with Hadamard and Jensen forming a separate pair — step 1 decides.

Forward references: NONE load-bearing.

## CA-19. Mittag-Leffler and Runge's Theorem

`requires`: CA-18, CA-11, CA-9

DEFS: a **prescribed principal part** at a point; **rational approximation on a
compact set**; the **pole-pushing** operation.

THMS: **Runge's theorem** (landmark): if $K\subseteq\mathbb{C}$ is compact and
$f$ is holomorphic on a neighbourhood of $K$, then $f$ is a locally uniform
limit on $K$ of rational functions with poles in a prescribed set meeting every
bounded component of $\mathbb{C}\setminus K$; **polynomial approximation** when
$\mathbb{C}\setminus K$ is connected (landmark) — the proof in three stages:
(1) approximate $f$ on $K$ by a Riemann sum of the Cauchy integral over a
suitable cycle (the cycle's construction from a grid is a real point-set item,
citing 197 and the Lebesgue number lemma); (2) **pole pushing** along a chain of
discs; (3) pushing to $\infty$ gives polynomials; the **Runge property of a
domain** and the version for $\Omega$; **Mittag-Leffler's theorem** (landmark):
given a discrete set in a domain $\Omega$ with prescribed principal parts, there
is a meromorphic function on $\Omega$ with exactly those principal parts —
proved by an exhaustion plus Runge-supplied corrections (the general-$\Omega$
case; the $\Omega=\mathbb{C}$ case with a convergence-forcing subtraction of
Taylor polynomials is a separate, cheaper item and comes first);
**the partial-fraction expansion of $\pi\cot\pi z$** (landmark; the Herglotz
route is the real-variable one already scaffolded at order 165 — the agreement
remark names both and this page uses the Mittag-Leffler route); the
$\pi^2/\sin^2$ expansion; the corollary that the meromorphic functions on a
domain form a **field** (cite the field vocabulary at 50; the corollary needs
Weierstrass from CA-18); the **Weierstrass product theorem for a general
domain** if it was deferred from CA-18; the choice ledger (a canonical
exhaustion makes the page AC$_\omega$-free — say so).

FS: every meromorphic function on $\mathbb{C}$ is a sum of its principal parts
(the convergence-forcing terms are not optional; witness a divergent naive sum);
Runge gives polynomial approximation on any compact set (witness: the circle,
where $1/z$ is not a uniform limit of polynomials — by Cauchy's theorem, a
one-line refutation and the cleanest item on the page); uniform approximation on
$K$ by rationals implies uniform approximation on a neighbourhood; the poles of
the approximants can always be taken outside a fixed large disc.

B: $1/z$ shown not approximable by polynomials on $\lvert z\rvert=1$;
pole-pushing carried out along an explicit chain of three discs; the $\cot$
expansion used to sum $\sum 1/(n^2+a^2)$; a Mittag-Leffler function with poles
at the integers and prescribed principal parts $1/(z-n)^2$.
CEX: the annulus, where Runge needs a pole in the bounded complementary
component; a compact set with infinitely many complementary components
(a Cantor-like set — cite order 119's Cantor material rather than rebuilding).

Traps. (i) Stage (1)'s cycle is a genuine construction (a grid of squares,
keeping the edges not meeting $K$); it is the page's real work and the place a
"clearly" ships a defect. (ii) Runge is often stated with $\widehat{\mathbb{C}}
\setminus K$; be consistent with CA-11's sphere and say which. (iii) The
$\cot$ agreement remark must not claim what order 165 does or does not contain
(published-claim decay); use the "what THIS proof uses" form. (iv) Nothing here
needs Hahn–Banach; the functional-analytic proof of Runge is denial 11's
territory and must not be reached for.

Forward references: NONE load-bearing.

## CA-20. Analytic Continuation, Monodromy, and Riemann Surfaces

`requires`: CA-17, CA-6, `covering-spaces-and-lifting` (233)

DEFS: the **germ** of a holomorphic function at a point (#25); a **function
element** $(f, D)$; **direct analytic continuation**; **continuation along a
path** via an admissible chain (#26); the **complete analytic function**
(the set of all germs reachable from a given one); the **Riemann surface** of a
complete analytic function (#27); a **singular point** of a function element;
the **natural boundary**.

THMS: germs form a ring and the relation is an equivalence (#25); **the
continuation along a path is independent of the admissible chain** (#26,
landmark — the refinement/subdivision lemma, with the Lebesgue number of the
covering of $[0,1]$ from order 106); continuation is unique when it exists
(identity theorem, CA-6); **the monodromy theorem** (landmark): if a germ
continues along every path in a domain $\Omega$, then continuations along
path-homotopic paths agree — proved by subdividing the homotopy square, exactly
the pattern CA-17 used for the homotopy form of Cauchy; **corollary**: on a
simply connected $\Omega$ a germ continuing along every path defines a
single-valued holomorphic function on $\Omega$ (landmark — and this is a SECOND
proof that a nonvanishing function on a simply connected domain has a logarithm;
the agreement remark with CA-7/CA-17 is required); the **Riemann surface**
construction (#27): the space of germs of a complete analytic function, its
basis, its charts, their compatibility, and the projection to $\mathbb{C}$;
**the projection is a covering map onto its image** where the surface is that
of a "regular" complete function, and **the Riemann surface of $\log$ is
$\mathbb{C}$ covering $\mathbb{C}^\times$ via $\exp$** (landmark — the item that,
with orders 233/235, discharges the ‡ `rem-riemann-surface-of-log`); the
**Riemann surface of $z^{1/n}$** is the $n$-fold covering
$w\mapsto w^n$ of $\mathbb{C}^\times$; **the Schwarz reflection principle as a
continuation** (agreement remark with CA-13); continuation of a power series to
the boundary: **at least one singular point on the circle of convergence**
(landmark, Pringsheim's theorem for nonnegative coefficients as the sharpened
version); the **natural-boundary phenomenon**.

FS: a holomorphic function on a domain always continues past its boundary
(witness: a lacunary series with a natural boundary); continuation along two
paths with the same endpoints always agrees (witness: $\log$ around $0$ — the
motivating failure, and the reason the monodromy theorem has a hypothesis);
the Riemann surface of a multivalued function is a subset of $\mathbb{C}^2$;
a power series with radius $1$ has a singular point at every boundary point.

B: $\log$ continued around the unit circle, arriving at $\log + 2\pi i$, in
four explicit steps; $\sqrt z$ continued around $0$; the complete analytic
function of $\log$ pictured as the helicoid; the Riemann surface of $z^{1/2}$
with its two sheets and the transition.
CEX: $\sum z^{2^n}$ has the unit circle as a natural boundary (Hadamard gap
theorem — **check whether the gap theorem's proof closes at this order; if not,
use the explicit $\sum z^{n!}$ with the radial-divergence argument at roots of
unity, which is elementary, and record the substitution**); $\sum z^n/n^2$ is
continuous on the closed disc yet still has $z=1$ singular — continuity of the
sum is not regularity of the function.

Traps. (i) #26 and the monodromy theorem are DIFFERENT statements and must be
separate items in that order; conflating them is the error the owner named
explicitly. (ii) #27's chart compatibility is the second instance of the
obligation CA-11 introduced; reuse that page's pattern and cite the published
`thm-basis-criterion` for the basis condition. (iii) The covering-space language
is orders 233/235; cite, and do not re-prove unique lifting. (iv) The natural
boundary example must be one whose proof closes here; the Hadamard gap theorem
is a real theorem and is not free.

Forward references: NONE load-bearing.

## CA-21. The Gamma Function

`requires`: CA-18, CA-9, `improper-integrals` (143), CA-5, and MT-11
`product-measures-and-the-fubini-tonelli-theorems`

DEFS: $\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt$ on $\mathrm{Re}\,z>0$ (#28);
the **Euler–Mascheroni constant** $\gamma$ is cited from
`thm-euler-mascheroni-constant-and-harmonic-asymptotic`, not re-minted; the
**Weierstrass product** for $1/\Gamma$;
the **beta function**; **logarithmic convexity**.

THMS: the integral converges locally uniformly on $\mathrm{Re}\,z>0$ (143) and
is **holomorphic** there (#28, via CA-5's parameter-integral lemma);
$\Gamma(z+1)=z\Gamma(z)$ and $\Gamma(n+1)=n!$; the **meromorphic continuation**
to $\mathbb{C}\setminus\{0,-1,-2,\dots\}$ with simple poles and residues
$(-1)^n/n!$ (#29, landmark); **$\Gamma$ has no zeros** (from the reflection
formula or the product); **Euler's limit formula** $\Gamma(z) = \lim
\frac{n!\,n^z}{z(z+1)\cdots(z+n)}$ (landmark); the **Weierstrass product**
$1/\Gamma(z) = z e^{\gamma z}\prod(1+z/n)e^{-z/n}$ (landmark; a canonical
product of genus $1$, citing CA-18); the **reflection formula**
$\Gamma(z)\Gamma(1-z) = \pi/\sin\pi z$ (landmark; from the product and CA-18's
$\sin$ product — the cleanest route and the one that avoids a contour argument);
$\Gamma(1/2)=\sqrt\pi$; the **Gauss multiplication formula**, with duplication
as a corollary; the **Bohr–Mollerup
theorem** (landmark): $\Gamma$ is the unique log-convex function on $(0,\infty)$
with $f(1)=1$ and $f(x+1)=xf(x)$ — a real-variable theorem, citing convexity at
order 135, and the item that makes "the" gamma function a phrase for a reader
coming from the real side; the **beta integral** $B(p,q) =
\Gamma(p)\Gamma(q)/\Gamma(p+q)$ (Fubini for improper Riemann integrals — check
what 143/177 deliver, and **if the double-integral manipulation does not close,
prove the beta identity from Euler's limit formula instead and record the
route**); **Stirling's asymptotic formula** for $\Gamma$ in a sector (landmark;
agreement remark with order 161's real Stirling-via-Wallis, which is scaffolded
there); the **Hankel loop representation for $1/\Gamma$**, with its branch,
orientation and improper limits explicit. CA-22 does not consume this formula:
its continuation uses theta--Mellin--Poisson.

FS: $\Gamma$ is the unique meromorphic function with $\Gamma(n+1)=n!$
(witness: multiply by $e^{\sin 2\pi z}$ — the witness that makes Bohr–Mollerup's
extra hypothesis necessary, and the best item on the page); $\Gamma$ has a zero
somewhere; $\Gamma$ is entire; $1/\Gamma$ has infinitely many zeros in the right
half plane.

B: $\Gamma(1/2)$, $\Gamma(3/2)$, $\Gamma(-1/2)$ computed; the residue at $z=-2$;
$B(1/2,1/2)=\pi$; the reflection formula checked at $z=1/2$; Stirling's
approximation to $10!$ numerically.
CEX: $\Gamma(z)e^{\sin2\pi z}$ satisfies the functional equation and the
factorial values and is not $\Gamma$; $\Gamma$ is unbounded on every vertical
strip containing a pole, so "the" continuation is not obtained by any naive
limit.

Traps. (i) #28's parameter-integral lemma is CA-5's; do not re-derive, and
check that its hypotheses cover an IMPROPER integral (order 143) — if CA-5's
version is for a compact parameter interval only, the extension to $[0,\infty)$
via locally uniform convergence of $\int_0^N$ is its own item **on this page**.
That is the most likely gap in the whole track. (ii) The Euler–Mascheroni
constant is already supplied by the named item above. (iii) The
reflection formula via the product is short; via contour integration it is long.
Take the product route and say so. (iv) Bohr–Mollerup is about a real function;
its Statement must not claim complex uniqueness. (v) Stirling is uniform on
each closed sector $|\arg z|\le\pi-\delta$ and uses the stated branch of
$\Log z$. Hankel's formula is for reciprocal gamma, with the contour and branch
fixed, not an unqualified representation of $\Gamma$.

Forward references: NONE load-bearing.

## CA-22. The Riemann Zeta Function

`requires`: CA-21, CA-18,
`primes-and-the-fundamental-theorem-of-arithmetic`,
FA-23 `schwartz-space-and-the-plancherel-theorem`, and FA-25
`tempered-distributions-and-the-fourier-transform`

DEFS: $\zeta(s) = \sum_{n\ge1} n^{-s}$ on $\Re s>1$ (where
$n^{-s}=e^{-s\log n}$ uses the real logarithm); the Euler product; the Jacobi
theta function $\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$ for $t>0$;
$\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$; the entire completed function
$\xi(s)=\tfrac12s(s-1)\Lambda(s)$; critical strip, critical line and trivial
zeros.

THMS: the Dirichlet series converges absolutely and locally uniformly on
$\mathrm{Re}\,s>1$, so $\zeta$ is holomorphic there; the **Euler product**
$\zeta(s) = \prod_p (1-p^{-s})^{-1}$ (landmark; cites the fundamental theorem of
arithmetic at order 24 and the infinite-product theory of CA-18), and the
corollary that $\zeta(s)\ne0$ on $\mathrm{Re}\,s>1$; **there are infinitely many
primes**, by the pole at $s=1$ (a genuinely different proof from order 24's —
agreement remark required); the **continuation to $\mathrm{Re}\,s>0$** by the
sum--integral correction, with the pole at $1$ and residue $1$ explicit; the
Dirichlet eta identity
$(1-2^{1-s})\zeta(s)=\sum(-1)^{n-1}n^{-s}$ is then a representation theorem,
not the continuation proof, because its prefactor vanishes at
$s=1+2\pi i k/\log2$ and removability there must be proved. Poisson summation
for the Gaussian gives
$\theta(t)=t^{-1/2}\theta(1/t)$; the Mellin identity
$\Lambda(s)=\tfrac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$ on $\Re s>1$;
splitting at $1$ and applying the theta transformation gives the unique
**meromorphic continuation of $\zeta$ to $\mathbb C$**, with a single simple
pole at $s=1$ of residue $1$ (#30), and the functional equations
$\Lambda(s)=\Lambda(1-s)$ and
$\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)$; $\xi$ is entire and
$\xi(s)=\xi(1-s)$; the **trivial zeros** at $s=-2,-4,\dots$; **all
nontrivial zeros lie in the open critical strip $0<\Re s<1$**; **$\zeta$ has
no zero on $\Re s\ge1$** (landmark; $s=1$ is its sole pole there, and the
boundary-line proof uses
$3+4\cos\theta+\cos2\theta=2(1+\cos\theta)^2$); $\xi$ has order one and its
canonical Hadamard product is
$e^{A+Bs}\prod_\rho E_1(s/\rho)$, with zeros counted with multiplicity and a
declared convergence prescription; special values $\zeta(2)=\pi^2/6$,
$\zeta(-1)=-1/12$, $\zeta(2n)$ via Bernoulli numbers (check whether Bernoulli
numbers exist below — order 165 mentions them; cite or define here);
the **Riemann hypothesis** as a `rem-` with `proved_here: false`, homed on
`open-problems-and-research-frontier` per the ‡ conventions, and MENTIONED here
via `external_refs` (the axiom/open-problem exemption pattern already used by
`rem-jacobian-conjecture`).

FS: $\zeta(s) = \sum n^{-s}$ for all $s\ne1$ (the series diverges off
$\mathrm{Re}\,s>1$; the continuation is not the series — the single most common
misunderstanding and the best `fs-` on the page); $\zeta(-1) = 1+2+3+\cdots$;
$\zeta$ is entire; the functional equation determines $\zeta$ (use a sourced
witness if retained, otherwise drop this `fs-`). The Riemann hypothesis is not
a false statement: it appears only as the existing sourced, unproved
open-problem remark, after the proved open-strip and symmetry statements.

B: $\zeta(2)$ from the $\sin$ product (with the agreement remark); the Euler
product verified numerically to a few terms; $\zeta(0)=-1/2$ from the
functional equation; the Gaussian transformed under Fourier transform; the
theta integral split at $1$ and its two polar terms isolated; the genus-one
$\xi$ product compared with symmetric finite zero products.
CEX: $\sum(-1)^{n-1}n^{-s}$ converges on $\mathrm{Re}\,s>0$ and equals
$(1-2^{1-s})\zeta(s)$, so a convergent series can represent the continuation
where the defining series diverges; the harmonic series as the $s=1$ divergence.

Traps. (i) $\Lambda$ is meromorphic with poles at $0$ and $1$, whereas $\xi$
is entire; never transfer a property between them without the factor
$\tfrac12s(s-1)$. (ii) The functional equation is mandatory. Its preferred
theta/Mellin proof now closes by citing the functional-analysis Poisson
summation interface (FA-23's Gaussian transform plus FA-25's Fourier-invariant
Dirac comb); it may not be dropped. (iii) The theta Mellin integral is first
proved only on $\Re s>1$; the split expression, not the original integral,
defines the continuation. (iv) Do not write $\zeta(-1) = 1+2+3+\cdots$
even in prose. (v) Never divide the eta series by $1-2^{1-s}$ at its infinitely
many zeros without a removability proof, and never write a bare unordered
product over the zeros of $\xi$.

Forward references: NONE load-bearing. RH is an `external_refs` mention of a
`proved_here: false` remark (exempt class).

### Function-theoretic supplier contract for analytic number theory

This is the seam the later number-theory scaffold must cite. It is not
permission to rederive these results there. The proposed ids have been checked
against `items/` on 2026-08-14 and have no collision; the future build still
performs its normal reuse check.

| supplying page | id | exact interface promised |
|---|---|---|
| CA-21 | `def-euler-gamma-function` | For $\Re s>0$, $\Gamma(s)=\int_0^\infty e^{-t}t^{s-1}\,dt$, with the real logarithm used for $t^{s-1}$ and local-uniform convergence proved. |
| CA-21 | `thm-gamma-meromorphic-continuation` | $\Gamma$ has a unique meromorphic continuation to $\mathbb C$, has no zeros, and has exactly simple poles at $0,-1,-2,\ldots$ with residue $(-1)^n/n!$ at $-n$. |
| CA-21 | `thm-gamma-functional-equation` | $\Gamma(s+1)=s\Gamma(s)$ as an identity of meromorphic functions. |
| CA-21 | `thm-gamma-weierstrass-product` | $1/\Gamma(s)=s e^{\gamma s}\prod_{n\ge1}(1+s/n)e^{-s/n}$, with normal convergence and zero multiplicities proved. |
| CA-21 | `thm-euler-reflection-formula` | $\Gamma(s)\Gamma(1-s)=\pi/\sin(\pi s)$ wherever both sides are finite, hence meromorphically everywhere. |
| CA-21 | `thm-legendre-duplication-formula` | $\Gamma(s)\Gamma(s+\tfrac12)=2^{1-2s}\sqrt\pi\,\Gamma(2s)$ meromorphically. |
| CA-21 | `thm-stirling-formula-gamma` | Uniformly in each closed sector $|\arg s|\le\pi-\delta$, $\Gamma(s)=\sqrt{2\pi}s^{s-1/2}e^{-s}(1+O_\delta(|s|^{-1}))$, using the principal logarithm in $s^{s-1/2}$. |
| CA-22 | `def-riemann-zeta-function` | $\zeta(s)=\sum_{n\ge1}n^{-s}$ is holomorphic for $\Re s>1$; the defining Dirichlet series is not asserted elsewhere. |
| CA-22 | `thm-euler-product-for-riemann-zeta` | For $\Re s>1$, $\zeta(s)=\prod_p(1-p^{-s})^{-1}$ absolutely and locally uniformly, so $\zeta$ has no zeros in that half-plane. |
| CA-22 | `thm-riemann-zeta-meromorphic-continuation` | $\zeta$ has a unique meromorphic continuation to $\mathbb C$, holomorphic except for one simple pole at $s=1$ of residue $1$. |
| CA-22 | `thm-riemann-zeta-functional-equation` | $\zeta(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)$ as a meromorphic identity. |
| CA-22 | `thm-completed-riemann-zeta-functional-equation` | $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ has simple poles at $0,1$ and satisfies $\Lambda(s)=\Lambda(1-s)$; $\xi(s)=\tfrac12s(s-1)\Lambda(s)$ is entire and satisfies $\xi(s)=\xi(1-s)$. |
| CA-22 | `def-riemann-xi-function` | $\xi(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s)$, distinguished from the meromorphic $\Lambda$. |
| CA-22 | `thm-trivial-zeros-and-critical-strip` | The trivial zeros are the negative even integers and every nontrivial zero satisfies $0<\Re s<1$, with symmetry under $s\mapsto1-s$ and conjugation. |
| CA-22 | `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane` | $\zeta$ has no zeros on $\Re s\ge1$; $s=1$ is the sole pole there, and the boundary-line assertion includes the precise limiting Mertens argument at $1+it$. |
| CA-22 | `thm-hadamard-product-for-riemann-xi` | $\xi$ is an entire function of order one and has the genus-one canonical product $e^{A+Bs}\prod_\rho E_1(s/\rho)$, with zeros counted by multiplicity and the convergence prescription explicit. |

The interface supplies no quantitative region of the form
$\sigma\ge1-c/\log|t|$. A later PNT page may use the qualitative zero-free
line (for the classical Wiener--Ikehara route) or must prove whatever stronger
region its chosen error term needs. The later track owns PNT, Dirichlet's
theorem, $L$-functions, prime-counting consequences and arithmetic uses of
Bernoulli/divisor sums. CA-MF-1 likewise supplies analytic modular forms and
$j$ but not Hecke theory or modular $L$-functions.

## CA-23. Bloch, Schottky, and the Picard Theorems

**OPTIONAL — the track's ceiling.** Nothing in the library cites it. If the
Bloch route does not close at authoring time, the whole pair drops with a note
and `rem-`-level statements of Picard go to the ‡ catalogue. Recorded here so
the decision is deliberate.

`requires`: CA-15, CA-12, CA-8

DEFS: **Bloch's constant** (the statement's constant, not the extremal one);
the **Landau radius**; a family **omitting two values**.

THMS: **Bloch's theorem** (landmark): a holomorphic $f$ on a neighbourhood of
$\overline{\mathbb{D}}$ with $f'(0)=1$ has an image containing a disc of radius
$b>0$ for an absolute constant $b$ — proved by the standard rescaling argument
(Landau's), which uses only the Cauchy estimates, Schwarz and the maximum
principle; **Landau's theorem**; **Schottky's theorem** (landmark): a
holomorphic $f$ on $\mathbb{D}$ omitting $0$ and $1$ with $\lvert f(0)\rvert\le
R$ satisfies $\lvert f(z)\rvert\le C(R,r)$ on $\lvert z\rvert\le r$ — via the
branch construction $g = \log(\ldots)$ built from the omitted values plus Bloch;
**Montel–Carathéodory** (landmark): the family of holomorphic functions on
$\Omega$ omitting $0$ and $1$ is normal in $C(\Omega,\widehat{\mathbb{C}})$
(needs CA-15's $\widehat{\mathbb{C}}$-valued Montel — **if that optional item
was dropped at CA-15, it must be restored there, not built here**);
**little Picard** (landmark): a nonconstant entire function omits at most one
value; **great Picard** (landmark): near an essential singularity, $f$ takes
every value with at most one exception, infinitely often — the sharpening of
CA-8's Casorati–Weierstrass, with the agreement remark; the corollary for
meromorphic functions on $\widehat{\mathbb{C}}$.

FS: an entire function omitting two values is constant only if it is bounded;
Casorati–Weierstrass implies Picard; $e^z$ omits two values; a nonconstant
meromorphic function on $\mathbb{C}$ omits at most one value in
$\widehat{\mathbb{C}}$ (it may omit two — $e^z$ omits $0$ and $\infty$; the
sharp statement is at most two, and this `fs-` is the one that keeps the two
theorems apart).

B: $e^z$ omits exactly $0$; $e^{1/z}$ near $0$ takes every nonzero value
infinitely often, worked; Bloch's constant estimated from the proof; Schottky's
bound computed for a small case.
CEX: $e^z$ (omits one value, so "at most one" is sharp for little Picard);
$e^{1/z}$ (omits one value near an essential singularity, so great Picard is
sharp); a meromorphic function omitting two values in $\widehat{\mathbb{C}}$.

Traps. (i) The classical route through the modular function $\lambda$ is
**denied** (denial 13); this page is Bloch $\to$ Landau $\to$ Schottky $\to$
Montel–Carathéodory $\to$ Picard, all elementary. If a scaffolder proposes
$\lambda$, that is the error to catch. (ii) Schottky's branch constructions are
where the argument is delicate and where the branch discipline of CA-12 pays
off; every $\log$ and $\sqrt{\ }$ names its branch. (iii) Great Picard needs
Montel–Carathéodory on a punctured disc plus a normality argument; the
"infinitely often" clause is separate from the "takes every value" clause.
(iv) The page is drop-safe by construction; say so in the page summary in the
order-relative form.

Forward references: NONE load-bearing.

---

# Several complex variables

**Read this first: the shape of the owner's $f : \mathbb{C}^m\to\mathbb{C}^n$.**
A map $f = (f_1,\dots,f_n) : \Omega\subseteq\mathbb{C}^m\to\mathbb{C}^n$ is
holomorphic **iff each component $f_j$ is** (well-definedness #31). That
reduction is one theorem, and after it the entire theory is about
$\mathbb{C}^m\to\mathbb{C}$. The four pages below are structured accordingly:
SC-1 proves the reduction and then works with $n=1$ throughout; the two places
where $n>1$ genuinely matters — the holomorphic inverse and implicit function
theorems, and the rank theorem — are on SC-3, where the target dimension is the
point. **No page in this block silently drifts between $n=1$ and general $n$.**

SC-1--SC-4 remain the elementary spine. The former four-page ceiling is
retired: SC-5--SC-8 below add the measure/Hilbert-space machinery, Levi problem,
integral kernels and local analytic-hypersurface theory now
licensed by the lower tracks.

## SC-1. Holomorphic Functions of Several Complex Variables

`requires`: CA-6, CA-4, `the-total-derivative` (169),
`fubini-and-change-of-variables` (177), `rn-as-a-normed-space` (145)

DEFS: $\mathbb{C}^m$ as a normed $\mathbb{C}$-vector space and its
identification with $\mathbb{R}^{2m}$ (dictionary item, the SC analogue of #1,
citing 145 and order 68); the **polydisc** $\Delta(a;r)$ and the **ball**;
**separately holomorphic**; **holomorphic** as complex Fréchet differentiable
(with equivalence here only to local power-series expansion and the $C^1$
Cauchy--Riemann system; unrestricted separate holomorphy is SC-2's theorem);
multi-index notation $\alpha$, $z^\alpha$, $\partial^\alpha$ (cite order 171,
which owns multi-indices, do not re-mint); the **Wirtinger operators**
$\partial/\partial z_j, \partial/\partial\bar z_j$; a **holomorphic map**
$\mathbb{C}^m\to\mathbb{C}^n$ (#31); the **holomorphic Jacobian**
$\big(\partial f_i/\partial z_j\big)$.

THMS: **#31, the componentwise reduction** (landmark): $f$ is holomorphic as a
map iff each $f_j$ is; equivalently iff $f$ is real-differentiable with
$\mathbb{C}$-linear total derivative (169); **the Cauchy integral formula on a
polydisc** (landmark): the iterated one-variable formula, with the interchange
of the iterated integrals justified by Fubini for the Riemann integral (177);
**the power series expansion** (landmark): a holomorphic $f$ on a polydisc is
the sum of a power series $\sum_\alpha c_\alpha (z-a)^\alpha$ converging
absolutely and locally uniformly there, with $c_\alpha =
\partial^\alpha f(a)/\alpha!$ and unique coefficients (#32, citing the unordered
summation of order 115); consequently $f\in C^\infty$ and all
$\partial^\alpha f$ are holomorphic; **the Cauchy estimates** on a polydisc;
the **Cauchy–Riemann system** $\partial f/\partial\bar z_j = 0$ for all $j$,
with the $C^1$ converse; **the identity theorem, in its correct several-variable
form**: if $f$ vanishes on a nonempty **open** subset of a domain then $f\equiv0$
— and the sharp warning that vanishing on a set with a limit point is NOT enough
(landmark; the contrast with CA-6 is the point of the item); the **maximum
principle**; **Liouville** for bounded entire functions on $\mathbb{C}^m$;
**Osgood's lemma** (landmark): separately holomorphic **and continuous**
$\Rightarrow$ holomorphic (the iterated Cauchy formula plus the geometric-series
expansion); **separately holomorphic and locally bounded $\Rightarrow$
holomorphic** (landmark; the Schwarz-lemma telescoping estimate — CA-12's
Schwarz lemma, applied one variable at a time, giving joint continuity from the
one-variable bound); the **chain rule** and the multiplicativity of the
holomorphic Jacobian determinant; **the zero set of a nonconstant holomorphic
function on a domain in $\mathbb{C}^m$, $m\ge2$, has no isolated points**
(landmark — the first genuinely several-variable phenomenon, proved from the
one-variable identity theorem on complex lines).

SC-2 later proves the **full Hartogs separate-holomorphicity theorem**:
separate holomorphy alone implies this Fréchet/local-power-series notion. It is
not folded into the foundational definition, and SC-1 does not cite that later
theorem in any proof.

FS: the REAL analogue that a separately real-analytic function
must be continuous (refuted by $xy/(x^2+y^2)$, already scaffolded at order 169
and cited rather than re-minted); a holomorphic
function on $\mathbb{C}^2$ vanishing on a set with a limit point vanishes
identically (witness: $z_1$, vanishing on the whole hyperplane $z_1=0$ and not
identically zero — the sharp separation from CA-6); a nonconstant holomorphic
function on a domain in $\mathbb{C}^2$ has isolated zeros; the ball and the
polydisc in $\mathbb{C}^2$ are biholomorphic (Poincaré — see traps).

B: $z_1 z_2$, $e^{z_1+z_2}$, $z_1/(1-z_2)$ expanded on polydiscs; the Cauchy
formula on a bidisc computed; the componentwise reduction checked on an explicit
$\mathbb{C}^2\to\mathbb{C}^3$ map; the Jacobian of $(z_1z_2, z_1+z_2)$.
CEX: $z_1$ on $\mathbb{C}^2$ has a nonisolated, unbounded zero set; the
real-variable $xy/(x^2+y^2)$ (cited from 169); the polydisc and the ball are
**not** biholomorphic in $\mathbb{C}^2$ (Poincaré's theorem — **only if a proof
closes cheaply; the standard route needs the automorphism groups of both
domains, which is a page of work. Recommendation: state it as a `rem-` naming
what would prove it, and record the drop**).

Traps. (i) Do not put continuity into the definition to make Hartogs's theorem
tautological. Complex Fréchet holomorphy, local power-series representability,
and the $C^1$ CR system are proved equivalent here; unrestricted separate
holomorphicity is proved equivalent on SC-2.
(ii) The identity theorem's several-variable form is genuinely weaker than
CA-6's; a proof or Statement that carries CA-6's phrasing over is the fatal
"asserts more than the proof gives" class. (iii) Fubini at order 177 is for the
Riemann integral on a rectangle and is stated with upper and lower integrals for
a reason; check what it actually delivers for a continuous integrand on a
product of circles before relying on it. (iv) Multi-indices are order 171's;
cite.

Forward references: SC-2's full separate-holomorphy theorem is declared for
the eventual dictionary but is not load-bearing on SC-1.

## SC-2. The Hartogs Phenomena

`requires`: SC-1, CA-8, CA-14 and the measure integration/Fatou interfaces

DEFS: a **Hartogs figure** $H(r,s) = \{\lvert z_1\rvert<1, \lvert z_2\rvert<s\}
\cup \{r<\lvert z_1\rvert<1, \lvert z_2\rvert<1\}$ and its polydisc hull;
**domain of holomorphy** (the definition only — SC-4 does the theory);
**holomorphically extendable**.

THMS: **the Hartogs figure extension theorem** (landmark): every holomorphic
function on $H(r,s)$ extends holomorphically to the full bidisc — the elementary
proof, defining the extension by the one-variable Cauchy integral
$\tilde f(z_1,z_2) = \frac{1}{2\pi i}\int_{\lvert\zeta\rvert = \sigma}
\frac{f(z_1,\zeta)}{\zeta - z_2}d\zeta$, showing it is holomorphic (SC-1's
formula plus the parameter-integral lemma of CA-5) and agrees with $f$ on the
overlap by the one-variable Cauchy formula and the identity theorem;
**consequently no domain of holomorphy contains a Hartogs figure with its hull
outside** (landmark — the statement that makes the phenomenon quotable, and the
bridge to SC-4); **there are no isolated singularities in $\mathbb{C}^m$,
$m\ge2$**: a function holomorphic on $\Delta\setminus\{0\}$ extends to $\Delta$
(landmark; from the Hartogs figure, or directly by the Cauchy formula in one
variable on the slices — take the direct route, it is shorter); **Riemann's
extension theorem in several variables**: bounded and holomorphic off a
"thin" set (here: off the zero set of a holomorphic function) extends
(landmark — with the thin set restricted to what SC-1's zero-set item supports,
and the general analytic-set version DROPPED per denial 8);
**the full Hartogs extension theorem**: if $K\Subset\Omega\subset\mathbb C^m$,
$m\ge2$, $\Omega\setminus K$ is connected, and $f$ is holomorphic there, then
$f$ extends uniquely to $\Omega$; **Hartogs's separate-holomorphicity theorem**
in every finite dimension, with no continuity or local-boundedness hypothesis.
Use the full iterated-Cauchy/subharmonic proof now licensed by the measure and
CA-14 interfaces; the old Baire-only partial route is retired. The compact-hole
theorem is also supplied by the compact-support $\bar\partial$ construction on
SC-5, with an agreement remark rather than a second unconnected theorem.

FS: every function holomorphic on a domain in $\mathbb{C}^2$ minus a point is
unbounded near that point (FALSE — it extends, which is the whole phenomenon;
a nice inversion of the reader's one-variable intuition); the one-variable
theory of isolated singularities has a several-variable analogue; every domain
in $\mathbb{C}^2$ is a domain of holomorphy (witness: the bidisc minus the
origin); separate holomorphicity can fail to imply local boundedness (refuted
by the theorem just proved).

B: the Hartogs figure drawn as two overlapping regions in $(\lvert z_1\rvert,
\lvert z_2\rvert)$ coordinates; the extension of $1/(z_1 z_2 - 1)$; the bidisc
minus the origin, with an explicit function on it and its extension.
CEX: $1/z$ in one variable has no extension across $0$ — the contrast that makes
$m\ge2$ the hypothesis; $\mathbb{C}^2$ minus a complex line IS a domain of
holomorphy (witness $1/z_1$), so removing a hypersurface is different from
removing a point — the sharpest pair on the page.

Traps. (i) The theorem has no continuity hypothesis. Any statement or proof
that retains one proves only Osgood's lemma. (ii) The Riemann extension
statement must name its thin set precisely; "thin" without a definition is the
false-title class. (iii) The parameter-integral lemma is CA-5's (#28); cite.
(iv) `thm-hartogs` is already a set-theory id; every several-variable Hartogs
item is namespaced, for example `thm-hartogs-extension-across-compact-holes`.

Forward references: SC-5 later gives an independent compact-support
$\bar\partial$ proof of the compact-hole theorem; the agreement is declared
and is not load-bearing on SC-2.

## SC-3. The Holomorphic Inverse Function Theorem and Weierstrass Preparation

`requires`: SC-1, `inverse-and-implicit-function-theorems` (173),
CA-10, `euclidean-domains-pids-and-unique-factorisation` (46)

DEFS: **biholomorphic** map of domains in $\mathbb{C}^m$; the ring
$\mathcal{O}_m$ of germs of holomorphic functions at $0\in\mathbb{C}^m$
(reusing CA-20's germ machinery, #25); **regular of order $d$ in $z_m$**;
a **Weierstrass polynomial** (#33); the **unit group** of $\mathcal{O}_m$.

THMS: **the holomorphic inverse function theorem** (landmark): $f$ holomorphic
near $a$ with invertible holomorphic Jacobian is a biholomorphism of
neighbourhoods — from the REAL inverse function theorem (order 173, applied to
$\mathbb{R}^{2m}$, with the real Jacobian determinant equal to
$\lvert\det Df\rvert^2$) plus the observation that the inverse satisfies CR;
**the holomorphic implicit function theorem** (landmark); the **rank theorem**
in the constant-rank case (**keep only if it closes cleanly from 173; else DROP
with a note**); $\mathcal{O}_m$ is a local ring with maximal ideal
$\{f : f(0)=0\}$, and $f$ is a unit iff $f(0)\ne0$ (cite the local-ring
vocabulary at order 44); **after a linear change of coordinates every nonzero
germ is regular of some order in $z_m$** (a genuine lemma, and the step that
makes the preparation theorem non-vacuous); **the Weierstrass preparation
theorem** (landmark, #33): $f = u\cdot W$ with $u$ a unit and $W$ a Weierstrass
polynomial of degree $d$, **uniquely** — proved by the one-variable argument
principle/Rouché of CA-10 applied to the $z_m$-slices, with the symmetric
functions of the roots shown holomorphic in $z'$ by the residue formulas
$\sum \lambda_j^k = \frac{1}{2\pi i}\int \zeta^k \frac{\partial_\zeta f}{f}
d\zeta$ and Newton's identities (cite order 54's symmetric-polynomial material —
**this is a satisfying reuse and step 1 should confirm 54 carries Newton's
identities**); **the Weierstrass division theorem** (landmark): $g = qW + r$
with $\deg_{z_m} r < d$, uniquely; **$\mathcal{O}_m$ is Noetherian**
(canonical, not optional, by Weierstrass division and induction); and
**$\mathcal{O}_m$ is a unique factorisation domain** (landmark; induction on
$m$ using preparation plus Gauss's lemma at order 46 — the corollary that makes
the whole page pay).

FS: an injective holomorphic map $\mathbb{C}^m\to\mathbb{C}^m$ has nowhere-zero
Jacobian for $m\ge2$ (this is **open** for polynomial maps — the Jacobian
conjecture, ‡ `rem-jacobian-conjecture`; so the `fs-` must be about something
decidable: state instead "a holomorphic map with everywhere-invertible Jacobian
is injective", refuted by $\exp$ in one variable, or $(e^{z_1}, z_2)$);
the holomorphic inverse function theorem is global; every germ is regular in
$z_m$ without a coordinate change (witness: $z_1 z_2$ — see traps);
the Weierstrass polynomial is unique without requiring $u$ to be a unit.

B: $z_1^2 - z_2$ prepared; the coordinate change making $z_1 z_2$ regular in
$z_2$; the division of $z_1$ by a Weierstrass polynomial; the implicit function
theorem applied to $z_1^2 + z_2^2 = 1$.
CEX: $z_1 z_2$ is not regular of any order in $z_2$ at the origin, so the
coordinate-change lemma is not decoration; $(e^{z_1}, z_2)$ has invertible
Jacobian everywhere and is not injective — the several-variable version of
CA-6's contrast, and the reason the IFT is irreducibly local (agreement remark
with order 173's complex-squaring-map example, which makes the same point in
$\mathbb{R}^2$).

Traps. (i) The real IFT at 173 is stated for $C^1$ maps of $\mathbb{R}^n$; the
translation to $\mathbb{C}^m$ needs the real Jacobian determinant identity
$\det_{\mathbb{R}} = \lvert\det_{\mathbb{C}}\rvert^2$, which is a linear-algebra
item (order 78/88) and must be cited or proved, not assumed. (ii) The holomorphy
of the symmetric functions of the roots is the heart of preparation and the
place expositions compress; the residue formula plus Newton's identities is the
route, and order 54 must actually carry the identities — **verify on disk**.
(iii) The Jacobian conjecture is open; nothing on this page may state or imply
it. (iv) Gauss's lemma at order 46 is for a UFD's polynomial ring; check the
exact statement before the UFD induction leans on it.

Forward references: NONE load-bearing.

## SC-4. Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity

`requires`: SC-2, SC-1, CA-14, `convexity` (135)

DEFS: a **domain of holomorphy**; the **holomorphically convex hull**
$\widehat{K}_\Omega$ (#34); **holomorphically convex**; **plurisubharmonic**
(standard USC convention, CX-D6, #35, allowing a line restriction to be
identically $-\infty$); the **Levi form** of a $C^2$ defining
function; **Levi pseudoconvex** ($C^2$ boundary); **Hartogs pseudoconvex**
($-\log d(\cdot,\partial\Omega)$ plurisubharmonic); a **plurisubharmonic
exhaustion**.

THMS: $\widehat{K}_\Omega$ is closed in $\Omega$, bounded, contains $K$, and
$\widehat{\widehat{K}} = \widehat K$ (#34); **the Cartan–Thullen theorem**
(landmark): $\Omega$ is a domain of holomorphy iff $\Omega$ is holomorphically
convex, with the standard sourced polydisc-radius/Cauchy-estimate boundary
formulation. The former asserted equality
$d(\widehat K,\partial\Omega)=d(K,\partial\Omega)$ is withdrawn as nonstandard
and unsupported; no metric identity substitutes for the theorem. The hard
direction constructs boundary-singular functions on a countable exhaustion,
with the exact inherited choice cost recorded; **every convex domain is a domain of
holomorphy** (from convexity at 135 and a separating real-linear functional,
exponentiated); **every domain in $\mathbb{C}$ is a domain of holomorphy**
(landmark — the sharp contrast with $m\ge2$, proved from CA-18/CA-19's
Weierstrass/Mittag-Leffler construction of a function singular at every boundary
point); psh basics under the CX-D6 convention (#35): line-parametrisation
independence; stability under maxima, convex nondecreasing compositions,
decreasing limits and upper-regularised locally bounded suprema; the maximum
principle; $\log|f|$ as a psh function with value $-\infty$ at zeros;
**a domain of holomorphy is Hartogs pseudoconvex** (landmark; via the Hartogs
figure of SC-2 and the continuity principle); **Levi pseudoconvex $\iff$
Hartogs pseudoconvex for $C^2$ boundaries**; the **continuity principle**
(Kontinuitätssatz) as its own item. The converse Levi problem is declared to
SC-6 and is not asserted here before its $L^2$ proof.

FS: every domain in $\mathbb{C}^m$ is a domain of holomorphy (FALSE for
$m\ge2$; the bidisc minus the origin, from SC-2 — the page's anchor `fs-`);
the union of two domains of holomorphy is a domain of holomorphy; the
holomorphically convex hull of a compact set is compact **without** the
domain-of-holomorphy hypothesis (it is closed and bounded in $\mathbb{C}^m$
hence compact **in $\mathbb{C}^m$** — the subtlety is whether it stays inside
$\Omega$; phrase the `fs-` on exactly that); pseudoconvex implies a domain of
holomorphy **as proved here** (the honest `fs-` version: it is TRUE — the Levi
problem — so this must be a `rem-`, not an `fs-`; see traps).

B: the bidisc, the ball and a convex domain all shown to be domains of
holomorphy; $\widehat K$ computed for a circle in $\mathbb{C}$ and for a torus
in $\mathbb{C}^2$; the Levi form of the ball computed; $-\log d(\cdot,\partial
\Omega)$ checked psh for a half space.
CEX: the **bidisc minus the origin** — not a domain of holomorphy, not
holomorphically convex, with the hull of a small torus reaching the origin: one
witness for every clause (the page's centrepiece, and the payoff of SC-2);
a domain of holomorphy in $\mathbb{C}^2$ that is not convex (any product of
plane domains).

Traps. (i) The Levi problem is true and later proved on SC-6;
neither a false-statement item nor an unsupported remark belongs here.
(ii) The CX-D6 convention item must be cited HERE, at the definition of psh
(#35), not merely assumed from CA-14. (iii) Cartan–Thullen's Baire step is in
$\Omega$ with the compact-exhaustion metric of CA-15 (#22); reuse it.
(iv) The $C^2$ equivalence is local boundary geometry; the global converse
Levi problem is a different theorem and must not be conflated with it.

Forward references: SC-6 proves pseudoconvex $\Rightarrow$ domain
of holomorphy by Hörmander estimates and is declared, non-load-bearing here.

---

# Enrichment pairs for future build cycles

These pairs are additions to the original spine, not authored pages. Their
labels are relative and deliberately carry no order. For every table below,
`requires` names direct page interfaces, the A list is in dependency order,
and the companion is a leaf. Unless a row says otherwise, a definition has
`provenance.statement: literature-derived` and
`provenance.proof: not-applicable`; a theorem/lemma/corollary has
`provenance.statement: literature-derived` and
`provenance.proof: literature-derived`, with its displayed sources supplying
both components. Worked examples have literature-derived constructions when a
source is named and otherwise `ai-generated` statement/proof; the latter are
elementary, independently checked, and forbidden as dependency targets. No
load-bearing statement in this section is AI-generated.

## CA-HM-1. Green Functions, Harmonic Measure and Conformal Invariance

Conceptual placement: after CA-16 (it consumes the Riemann map while extending
the CA-14 plane-boundary seam). Proposed id
`green-functions-harmonic-measure-and-conformal-invariance`. `requires`:
CA-13, CA-14, CA-16, MT-8 and MT-20 (Radon/Riesz--Markov).

| id | kind | one-line statement |
|---|---|---|
| `def-green-function-plane-domain` | def | $g_\Omega(z,a)$ is positive and harmonic in $z\ne a$, has $g_\Omega(z,a)+\log|z-a|$ harmonic near $a$, and has Perron boundary value $0$. |
| `thm-green-function-uniqueness-symmetry-and-monotonicity` | thm | When it exists, $g_\Omega$ is unique, symmetric in $z,a$, and increases under enlargement of the domain with the direction stated explicitly. |
| `thm-green-function-simply-connected-plane-domain` | thm | If $\Omega\subsetneq\mathbb C$ is simply connected and $\phi:\Omega\to\mathbb D$ sends $a$ to $0$, then $g_\Omega(z,a)=-\log|\phi(z)|$, independently of the normalised Riemann map. |
| `def-harmonic-measure-plane-domain` | def | For a bounded regular plane domain, $\omega_\Omega^z$ is the unique boundary probability measure representing the Perron solution: $H_\varphi(z)=\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$. |
| `thm-harmonic-measure-is-well-defined` | thm | Riesz--Markov gives a unique Radon probability measure because evaluation of the positive Dirichlet solution operator is a positive norm-one functional. |
| `thm-harmonic-measure-disc-poisson-density` | thm | On a disc, harmonic measure is absolutely continuous with Poisson-kernel density relative to arclength. |
| `thm-harmonic-measure-conformal-invariance` | thm | If a conformal bijection extends to a homeomorphism of the closures, its boundary map pushes harmonic measure forward; without such an extension only an explicitly developed prime-end formulation could replace this statement. |
| `thm-harmonic-measure-maximum-principle-and-domain-comparison` | thm | Harmonic measure is countably additive in the boundary set, harmonic in the pole, and obeys the precisely nested-domain comparison from the maximum principle. |
| `thm-green-function-harmonic-measure-representation` | thm | Green/Poisson representation recovers a $C^2$ function from its boundary values and Laplacian, fixing the $2\pi$ sign convention. |

Companion: disc and upper-half-plane densities; interval harmonic measure in
the half-plane; annulus via a conformal/series calculation; Green function of
the disc with nonzero pole; a slit-domain conformal image; failure at an
irregular puncture.

Sources and proof strategy: Schlag, Ch. 9 §§1--4 (“Green's function,”
“Potential-theoretic proof of the Riemann mapping theorem,” “Perron's method
and existence of Green's function,” “Boundary behavior”); Ryzhik, Stanford
Math 215, Ch. 5 §5.1 “The Poisson kernel”; Howell--Mathews, Ch. 10 §§10.1--10.4
(“Some preliminaries,” “Dirichlet problems,” “Poisson integral formula,”
“Physical models”); Saff, §§2--3 (“Harmonic, superharmonic and subharmonic
functions,” “Equilibrium distributions and Green functions”). Use Perron for
existence, Riesz--Markov for the representing measure, uniqueness for conformal
invariance, and Green's identity for symmetry/representation. Do not identify
harmonic measure with Brownian hitting probability; stochastic theory is out
of scope. Do not claim Euclidean-boundary conformal transport without a
homeomorphic extension of the conformal map.

Forward references: prime-end transport is denied and non-load-bearing;
otherwise none.

## CA-PT-1. Logarithmic Potential, Capacity and Riesz Decomposition

Conceptual placement: after CA-HM-1. Proposed id
`logarithmic-potential-capacity-and-riesz-decomposition`. `requires`: CA-14,
CA-HM-1, MT-11/MT-20, FA-9 weak-* sequential compactness, and FA-24
distributions.

| id | kind | one-line statement |
|---|---|---|
| `def-logarithmic-potential-and-energy` | def | For a finite positive measure define $U^\mu(z)=\int\log(1/|z-w|)\,d\mu(w)$ and $I(\mu)=\iint\log(1/|z-w|)\,d\mu(z)d\mu(w)$ as extended integrals. |
| `def-logarithmic-capacity-compact-set` | def | For compact $K$, $V_K=\inf_{\mu\in\mathcal P(K)}I(\mu)$ and $\operatorname{cap}K=e^{-V_K}$, with the conventions at infinite energy stated. |
| `thm-logarithmic-energy-well-defined-and-lower-semicontinuous` | thm | Truncated kernels make energy representative-independent and lower semicontinuous under weak-* convergence. |
| `thm-equilibrium-measure-existence-and-uniqueness` | thm | Every nonpolar compact set has a unique probability measure of minimal logarithmic energy. |
| `thm-frostman-equilibrium-theorem` | thm | The equilibrium potential is at most $V_K$ in the plane and equals $V_K$ quasi-everywhere on $K$, with the polar exceptional set explicit. |
| `def-polar-set-and-quasi-everywhere` | def | A polar set is contained in the $-\infty$ locus of a nonconstant subharmonic function, equivalently has logarithmic capacity zero in the compact/local formulation proved here. |
| `thm-principle-of-descent-and-domination` | thm | Weak limits satisfy the lower-envelope inequality for logarithmic potentials, and the domination principle extends quasi-everywhere inequalities. |
| `def-riesz-measure-subharmonic-function` | def | The Riesz measure $\mu_u=(2\pi)^{-1}\Delta u$ is defined distributionally and shown independent of test-function representatives. |
| `thm-riesz-decomposition-subharmonic-plane` | thm | Locally, $u(z)=h(z)+\int\log|z-w|\,d\mu_u(w)$ for a harmonic $h$, with uniqueness after the kernel normalisation. |
| `thm-green-function-from-equilibrium-potential` | thm | For the unbounded component of $\widehat{\mathbb C}\setminus K$, $g(z,\infty)=V_K-U^{\mu_K}(z)$ after the standard normalisation, quasi-everywhere on the boundary. |
| `def-fekete-points-and-transfinite-diameter` | def | Define the $n$-point Vandermonde extremum and its limiting transfinite diameter with normalization independent of an ordering of the points. |
| `thm-logarithmic-capacity-equals-transfinite-diameter` | thm | The energy capacity and transfinite diameter agree, via Fekete measures and the principle of descent. |

Companion: capacity of a disc and interval; equilibrium measure on a circle;
finite/countable polar sets; a Cantor-set capacity contrast; Riesz measure of
$\log|f|$ as the zero divisor; Green function recovered from a conductor.

Sources and proof strategy: Saff, §§1--3 (“Transfinite diameter, logarithmic
capacity, and Chebyshev constant,” “Harmonic, superharmonic and subharmonic
functions,” “Equilibrium distributions and Green functions”), including the
Principle of Descent, Frostman's theorem, Riesz decomposition, domination
principle and regularity headings; Schlag, Ch. 9 §§1--4; Bishop, Ch. 1 §2
“Logarithmic capacity,” Lemmas 2.1--2.8 and corollaries. Approximate the kernel
monotonically by continuous bounded kernels, use probability-measure compactness
for a minimiser, prove Frostman by first variation, and derive Riesz
decomposition from distributional $\Delta\log|z|=2\pi\delta_0$. Keep the signs
of $p_\mu=\int\log|z-w|\,d\mu$ (subharmonic, $\Delta p_\mu=2\pi\mu$) and
$U^\mu=-p_\mu$ (the superharmonic electrostatic convention) distinct. The
Wiener criterion, Kellogg property and fine topology require a dedicated fine-
potential-theory pair and are not asserted here.

Forward references: the denied fine-potential pair is non-load-bearing;
otherwise none.

## CA-HP-1. Harmonic Hardy Classes and Fatou Boundary Limits

Conceptual placement: after CA-HM-1 and the lower $L^p$/maximal-function
pages. Proposed id `harmonic-hardy-classes-and-fatou-boundary-limits`.
`requires`: CA-13, CA-HM-1, $L^p$, Radon measures, Hardy--Littlewood maximal
inequality and approximate identities (MT-14, MT-15, MT-17 and MT-20).

| id | kind | one-line statement |
|---|---|---|
| `def-harmonic-hardy-class-disc` | def | $h^p(\mathbb D)$ consists of harmonic $u$ with $\sup_{r<1}\|u_r\|_{L^p(\mathbb T)}<\infty$ (with the separate $p=\infty$ convention). |
| `thm-poisson-extension-lp-contraction-and-norm-limit` | thm | For $1\le p\le\infty$, $P[f]$ is harmonic, $\|P_r*f\|_p\le\|f\|_p$, and for $p<\infty$ it converges to $f$ in $L^p$. |
| `thm-harmonic-hardy-representation-p-greater-one` | thm | If $1<p\le\infty$, every $u\in h^p$ is the Poisson extension of a unique $f\in L^p$, with equality of norms. |
| `thm-harmonic-hardy-one-measure-representation` | thm | Every $u\in h^1$ is the Poisson integral of a unique finite signed/complex boundary measure, and conversely. |
| `thm-poisson-nontangential-maximal-bound` | thm | The nontangential maximal function of a Poisson extension is pointwise controlled by the Hardy--Littlewood maximal function. |
| `thm-fatou-nontangential-boundary-theorem-harmonic` | thm | Poisson extensions of $L^1$ data have nontangential limits equal to the datum almost everywhere; bounded harmonic functions have a.e. nontangential limits and Poisson representation. |
| `thm-harnack-convergence-positive-harmonic-functions` | thm | Normalised positive harmonic functions are compact, and positive harmonic functions correspond to finite positive boundary measures. |

Companion: Poisson extension of an indicator arc; an atom and its Poisson
kernel; radial versus nontangential approach; $L^p$ norm contraction; a boundary
function with no pointwise limit at a prescribed point; why $h^1$ requires
measures rather than only $L^1$ densities.

Sources and proof strategy: Ryzhik Ch. 5 §§5.1--5.3 (“The Poisson kernel,”
“Hardy classes of harmonic functions,” “Almost everywhere convergence to the
boundary values”), Definitions 5.2 and the radially bounded approximate-identity
and maximal lemmas through Theorem 5.12; Schlag Ch. 3 §§1--3 (“The Poisson
kernel,” “Hardy classes of harmonic functions,” “Almost everywhere convergence
to boundary values”); Axler--Bourdon--Ramey Ch. 6 (“Poisson Integrals of
Measures,” “Weak* Convergence,” “$h^p(B)$,” “Fatou Theorem”). Prove weak-* measure representation first, use reflexive
weak compactness for $p>1$, and get a.e. nontangential convergence from the
maximal inequality and density. Do not infer an $L^1$ density for an arbitrary
$h^1$ harmonic function.

Forward references: CA-HP-2 consumes this pair but is not used here; otherwise
none.

## CA-HP-2. Analytic Hardy Spaces and Canonical Factorisation

Proposed id `analytic-hardy-spaces-and-canonical-factorisation`. `requires`:
CA-HP-1, CA-10, CA-18, measure Radon--Nikodym and Fourier uniqueness.
Concretely these are MT-13/MT-14 and FA-14.

| id | kind | one-line statement |
|---|---|---|
| `def-analytic-hardy-space-disc` | def | For $0<p\le\infty$, $H^p(\mathbb D)$ is the holomorphic class with uniformly bounded radial $L^p$ means, using the quasi-norm convention for $p<1$. |
| `thm-fatou-boundary-theorem-analytic-hardy-spaces` | thm | Every nonzero $f\in H^p$, $0<p\le\infty$, has finite nontangential limits $f^*$ a.e.; $f_r\to f^*$ in $L^p$ for finite $p$, and the Hardy norm is the boundary norm. |
| `thm-hardy-zero-set-blaschke-condition` | thm | The nonzero zeros of a nontrivial $H^p$ function satisfy $\sum_n(1-|a_n|)<\infty$. |
| `def-blaschke-product` | def | A zero sequence satisfying the Blaschke condition defines a normally convergent product, with unimodular a.e. boundary values and precisely the prescribed zeros. |
| `def-inner-singular-inner-and-outer-functions` | def | Define inner, singular inner and outer factors from boundary modulus/measure data, proving independence of arguments and normalisations. |
| `thm-inner-outer-factorisation-hardy-space` | thm | Every nonzero $H^p$ function factors uniquely up to a unimodular constant as Blaschke $\times$ singular inner $\times$ outer. |
| `thm-f-and-m-riesz-theorem` | thm | A finite complex measure on $\mathbb T$ whose negative Fourier coefficients vanish is absolutely continuous with respect to arclength. |
| `cor-hardy-one-cauchy-representation` | cor | The analytic measure representing an $H^1$ function has an $L^1$ density and its Cauchy/Poisson representation agrees with the boundary function. |
| `def-nevanlinna-class-on-the-disc` | def | $N(\mathbb D)$ is the class of holomorphic functions with uniformly bounded radial means of $\log^+|f|$, explicitly distinguished from entire-plane Nevanlinna value distribution. |
| `thm-nevanlinna-class-is-bounded-quotient-class` | thm | $N(\mathbb D)$ consists exactly of quotients $g/h$ with $g,h\in H^\infty$ and $h$ zero-free, with the representation's nonuniqueness stated. |
| `def-smirnov-class-on-the-disc` | def | $N^+(\mathbb D)$ is the bounded-quotient class with outer denominator, equivalently the class satisfying the stated boundary-log condition. |
| `thm-smirnov-maximum-principle` | thm | For every $p>0$, $N^+\cap L^p(\mathbb T)=H^p$, with the boundary-value interpretation and quasi-norm range explicit. |

Companion: finite/infinite Blaschke products; a singular inner function from a
point mass; outer function with a simple positive boundary modulus; zero-set
failure when the Blaschke sum diverges; factorisation of a rational inner
function; boundary uniqueness.

Sources and proof strategy: Ryzhik Ch. 5 §5.4 “F. and M. Riesz theorem,”
Theorem 5.13; Schlag Ch. 3 §§2--3; Garnett, *Bounded Analytic Functions*, Ch. II
§§1--5 (Hardy spaces, Blaschke products, canonical factorisation, boundary
values); Srivastava §§2.4, 2.6--2.7 and 3.1--3.10 (inner--outer
factorisation, Riesz Brothers, boundary uniqueness, Blaschke products and
Riesz--Smirnov factorisation). Jensen's formula gives the
zero condition, CA-18 gives product convergence, Herglotz/Poisson constructs
the singular and outer factors, and F. and M. Riesz converts the analytic
boundary measure to an $L^1$ density without invoking an unavailable Hilbert
transform. Use canonical factorisation to prove the bounded-quotient and
Smirnov maximum principles. Model spaces, shift-invariant subspaces,
interpolation, corona and Carleson-measure theory remain a later
operator/function-theory track.

Forward references: NONE load-bearing.

## CA-NV-1. Jensen Theory and Nevanlinna's First Main Theorem

Conceptual placement: after CA-10 and CA-15; CA-23 may cite this pair as an
alternate quantitative route to Picard. Proposed id
`jensen-theory-and-nevanlinnas-first-main-theorem`. `requires`: CA-8, CA-10,
CA-13, the measure integration interface.

| id | kind | one-line statement |
|---|---|---|
| `thm-poisson-jensen-formula-meromorphic-function` | thm | Express $\log|f(z)|$ in a disc by its boundary values and the zeros and poles through the Green kernel, with multiplicities. |
| `def-nevanlinna-counting-proximity-and-characteristic` | def | Define $n(r,a)$, regularised $N(r,a)$, chordal proximity $m(r,a)$ and $T(r,f)$ for a meromorphic $f:\mathbb C\to\widehat{\mathbb C}$. |
| `thm-nevanlinna-quantities-well-defined` | thm | Circle radii meeting zeros/poles are handled by limits, the $a=\infty$ convention agrees with poles, and changing the base radius alters the characteristic only by the stated bounded term. |
| `thm-nevanlinna-first-main-theorem` | thm | For fixed $a\in\widehat{\mathbb C}$, $m(r,a;f)+N(r,a;f)=T(r,f)+O_{f,a}(1)$. |
| `thm-nevanlinna-characteristic-elementary-laws` | thm | $T(r,fg)$, $T(r,f+g)$, $T(r,1/f)$ and $T(r,R(f))$ obey the precise additive bounds, with $T(r,R(f))=(\deg R)T(r,f)+O(1)$. |
| `def-order-of-growth-meromorphic-function` | def | Define order and lower order from $\log T(r,f)/\log r$, distinguishing finite-order entire and meromorphic growth. |
| `thm-rational-functions-characterized-by-logarithmic-characteristic` | thm | A meromorphic $f$ on $\mathbb C$ is rational iff $T(r,f)=O(\log r)$. |

Companion: $z^d$, $e^z$, $\tan z$ and $1/\Gamma$; regularisation when
$f(0)=a$; a repeated zero in Jensen's formula; characteristic under a Möbius
change of target; rational degree as the finite analogue of $T$.

Sources and proof strategy: Eremenko, *Lectures on Nevanlinna Theory*, §§1--3
(“Jensen's formula,” “First main theorem,” “Ahlfors--Shimizu form of the first
main theorem”); Goldberg--Ostrovskii, Ch. 1 §§1--2,4,6--7 (auxiliary results,
Poisson--Jensen/Nevanlinna formulas, Shimizu--Ahlfors characteristic, First
Fundamental Theorem and characteristic growth). Derive FMT directly from Poisson--Jensen, make $a=\infty$
part of the theorem rather than an analogy, and prove rational characterisation
from pole counting plus the growth form of Liouville.

Forward references: CA-NV-2 consumes this pair but is not used here; otherwise
none.

## CA-NV-2. Logarithmic Derivative, Second Main Theorem and Defects

Proposed id `nevanlinna-second-main-theorem-and-defects`. `requires`: CA-NV-1,
CA-23 for the agreement remark only (not load-bearing), and the measure
exceptional-set interface.

| id | kind | one-line statement |
|---|---|---|
| `def-nevanlinna-exceptional-radius-notation` | def | $S(r,f)$ denotes the stated $O(\log^+T(r,f)+\log r)$ error outside a set of finite linear measure; no pointwise-in-$r$ claim is hidden. |
| `lem-nevanlinna-logarithmic-derivative` | lem | $m(r,f'/f)=S(r,f)$ for a nonconstant meromorphic $f$, with the finite-order strengthening and exceptional set stated exactly. |
| `thm-nevanlinna-second-main-theorem` | thm | For distinct $a_1,\ldots,a_q\in\widehat{\mathbb C}$, the truncated counting functions satisfy $(q-2)T(r,f)\le\sum_j\overline N(r,a_j;f)+S(r,f)$. |
| `def-nevanlinna-deficiency-and-ramification-index` | def | Define $\delta(a,f)$ and the ramification defect from asymptotic counting ratios, with values in $[0,1]$. |
| `thm-nevanlinna-defect-relation` | thm | The sum of deficiencies of a nonconstant meromorphic function is at most $2$, with the ramification refinement stated separately. |
| `cor-nevanlinna-picard-theorems` | cor | A nonconstant meromorphic entire-plane function omits at most two sphere values, hence a nonconstant entire function omits at most one finite value; the punctured-disc form gives great Picard. |
| `thm-nevanlinna-five-value-theorem` | thm | Two nonconstant meromorphic functions sharing five distinct values ignoring multiplicity are identical. |

Companion: two omitted values for $e^z$ as a meromorphic map; deficiencies of
elementary functions; the truncated-versus-full counting distinction; why the
exceptional radii cannot simply be erased; sharpness of $q-2$; comparison with
CA-23's normal-family proof.

Sources and proof strategy: Eremenko §§4--6 (“Gauss--Bonnet formula,” “Second
main theorem: value distribution,” and the logarithmic-derivative/ramification
development); Goldberg--Ostrovskii, Ch. 3 §§1--2 and Ch. 4 §§1,3
(logarithmic derivative, Second Fundamental Theorem, exceptional values and
deficiency relation). Prove
the logarithmic-derivative lemma as the hard analytic engine, then reduce the
SMT to it through partial fractions and ramification counting. The error term
and its finite-measure exceptional set appear in every dependent statement.
Higher-dimensional Cartan--Nevanlinna theory is out of scope.

Forward references: NONE load-bearing.

## CA-EF-1. Elliptic Functions and Complex Tori

Conceptual placement: after CA-RS-1 and CA-18. Proposed page id
`elliptic-functions-and-complex-tori`, with the usual `-examples` companion.
`requires`: CA-7, CA-8, CA-10, CA-18, CA-RS-1.

| id | kind | one-line statement |
|---|---|---|
| `def-complex-lattice-and-complex-torus` | def | A lattice is $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with $\omega_1/\omega_2\notin\mathbb R$, and $\mathbb C/\Lambda$ is its quotient complex torus. |
| `thm-complex-torus-quotient-is-well-defined` | thm | Translations give compatible quotient charts, independent of representatives and of the oriented lattice basis, and the quotient is a compact Riemann surface. |
| `def-elliptic-function-for-a-lattice` | def | A $\Lambda$-elliptic function is a meromorphic $f$ on $\mathbb C$ satisfying $f(z+\lambda)=f(z)$ for every $\lambda\in\Lambda$. |
| `thm-elliptic-function-divisor-laws` | thm | In a boundary-free fundamental parallelogram a nonconstant elliptic function has equally many zeros and poles with multiplicity, and its residues sum to zero; both totals are translate-independent. |
| `def-weierstrass-elliptic-p-function` | def | $\wp_\Lambda(z)=z^{-2}+\sum_{\omega\ne0}((z-\omega)^{-2}-\omega^{-2})$, with the summation convention fixed by normal convergence. |
| `thm-weierstrass-p-normal-convergence-and-periodicity` | thm | The defining series converges normally off $\Lambda$, independently of enumeration, and yields an even $\Lambda$-elliptic function with double lattice poles. |
| `thm-weierstrass-p-differential-equation` | thm | $(\wp')^2=4\wp^3-g_2(\Lambda)\wp-g_3(\Lambda)$, with the lattice Eisenstein sums defining $g_2,g_3$. |
| `thm-weierstrass-p-addition-formula` | thm | Away from poles, $\wp(z+w)=-\wp(z)-\wp(w)+\frac14((\wp'(z)-\wp'(w))/(\wp(z)-\wp(w)))^2$, extended meromorphically through removable cases. |
| `thm-field-of-elliptic-functions-is-generated-by-p-and-p-prime` | thm | Every $\Lambda$-elliptic function is a rational expression in $\wp_\Lambda$ and $\wp'_\Lambda$. |
| `def-weierstrass-zeta-and-sigma-functions` | def | The Weierstrass $\zeta$ and $\sigma$ functions are the logarithmic primitive/product companions of $\wp$, with their quasi-periods stated explicitly. |
| `thm-complex-torus-weierstrass-cubic-isomorphism` | thm | $z\mapsto[1:\wp(z):\wp'(z)]$ extends across $0$ and identifies $\mathbb C/\Lambda$ biholomorphically with the smooth cubic $y^2=4x^3-g_2x-g_3$. |

Companion: square and hexagonal lattices; oriented bases and $SL_2(\mathbb Z)$;
a fundamental-parallelogram boundary translated away from zeros and poles;
half-period values; the addition and duplication formulas; $\sigma$'s simple
lattice zeros; degeneration when the discriminant vanishes. The last example
is orientation only and cannot be cited.

Sources and proof strategy: Ahlfors, *Complex Analysis*, 3rd ed., Ch. 7
§§2.1--3.3, headings “The Period Module,” “Unimodular Transformations,” “The
Canonical Basis,” “General Properties of Elliptic Functions,” “The Weierstrass
$\wp$-Function,” “The Functions $\zeta(z)$ and $\sigma(z)$,” and “The
Differential Equation”; Milne, *Modular Functions and Modular Forms*, Ch. 3,
headings “Lattices and bases,” “The quotient $\mathbb C/\Lambda$,” “Doubly
periodic functions,” “The Weierstrass $\wp$-function,” “The addition formula,”
“Eisenstein series,” “The field of doubly periodic functions,” and “Elliptic
curves”; McMullen, Math 213a, Ch. 5 §5.1, Theorems 5.1--5.3. Pair lattice terms
to obtain absolute normal convergence, derive the cubic equation by cancelling
principal parts and compact-torus Liouville, split every elliptic function into
even and odd parts for the field theorem, and check the cubic point at infinity
in a local coordinate. Arithmetic complex multiplication is out of scope.

Forward references: CA-MF-1 consumes this pair but is not used here; otherwise
none.

## CA-MF-1. Level-One Modular Forms and the Modular Function

Conceptual placement: after CA-EF-1. Proposed id
`level-one-modular-forms-and-the-j-invariant`. `requires`: CA-EF-1, CA-10,
CA-18, CA-22, CA-RS-1.

| id | kind | one-line statement |
|---|---|---|
| `def-modular-group-action-on-the-upper-half-plane` | def | $PSL_2(\mathbb Z)$ acts on $\mathfrak H$ by fractional linear maps, with the $SL_2/\{\pm I\}$ representative issue discharged. |
| `thm-standard-fundamental-domain-for-the-modular-group` | thm | The standard region $|\tau|\ge1$, $|\Re\tau|\le1/2$ meets every orbit, with precisely stated boundary identifications and elliptic stabilisers. |
| `def-compactified-level-one-modular-curve` | def | Add the cusp $\infty$ and use invariant local parameters at $i$, $e^{2\pi i/3}$ and the cusp to make $X(1)$ a compact Riemann surface. |
| `def-level-one-modular-form-and-cusp-form` | def | A weight-$k$ form satisfies $f(\gamma\tau)=(c\tau+d)^k f(\tau)$ and is holomorphic at the cusp; a cusp form has zero constant $q$-coefficient. |
| `thm-q-expansion-principle-at-the-cusp` | thm | Translation invariance gives a unique holomorphic $q=e^{2\pi i\tau}$ expansion, and cusp holomorphy/vanishing is exactly regularity/vanishing at $q=0$. |
| `def-level-one-eisenstein-series` | def | For even $k\ge4$, define absolutely convergent $G_k$ and its normalized $E_k$; $E_2$ is recorded separately as quasimodular. |
| `thm-eisenstein-series-are-modular-forms` | thm | $E_k$ is a weight-$k$ modular form for even $k\ge4$, with its Fourier expansion and normalization proved. |
| `thm-level-one-valence-formula` | thm | The weighted number of zeros, including $1/2$ and $1/3$ weights at elliptic points and the cusp order, equals $k/12$. |
| `thm-ring-of-level-one-modular-forms` | thm | $M_*(SL_2(\mathbb Z))=\mathbb C[E_4,E_6]$ and the cusp-form ideal is generated by $\Delta=(E_4^3-E_6^2)/1728$. |
| `def-modular-discriminant-and-j-invariant` | def | Define $\Delta$ and $j=E_4^3/\Delta$, fixing the normalization $j=q^{-1}+744+\cdots$. |
| `thm-j-invariant-classifies-complex-tori` | thm | Two complex lattices are homothetic, equivalently their tori are biholomorphic, iff their $j$-invariants agree. |
| `thm-j-uniformizes-the-level-one-modular-curve` | thm | $j:X(1)\to\widehat{\mathbb C}$ is a biholomorphism with its branch behaviour at the two elliptic points stated. |

Companion: tessellation by the standard domain; the elliptic points; first
Fourier coefficients of $E_4,E_6,\Delta,j$; vanishing of odd-weight forms;
square/hexagonal tori; the modular $\lambda$ function and its slit-domain map;
$E_2$ as the counterexample to naive modularity. Divisor-sum arithmetic is
illustrative and later number theory owns its consequences.

Sources and proof strategy: Milne, Ch. 2 from “The upper half-plane as a
quotient of $SL_2(\mathbb R)$” through “Defining complex structures on
quotients,” and Ch. 4 from “Modular functions” through “The functions $\Delta$
and $j$”; Stein--Shakarchi, Ch. 9 §§2--2.2 (“The modular character of elliptic
functions and Eisenstein series,” “Eisenstein series,” “Eisenstein series and
divisor functions”) and Ch. 10 §§1--1.1 (“Product formula for the Jacobi theta
function,” “Further transformation laws”); Ahlfors Ch. 7 §§3.4--3.5 (“The
Modular Function $\lambda(\tau)$,” “Conformal Mapping by $\lambda(\tau)$”).
Construct orbifold-point charts explicitly, prove valence by the argument
principle with weighted boundary arcs, derive the ring theorem by valence and
dimension induction, and distinguish marked lattices, homothety classes and
unmarked tori. Hecke theory, modular $L$-functions and CM arithmetic are
deferred to number theory/arithmetic geometry.

Forward references: NONE load-bearing.

## CA-RS-1. Riemann Surfaces, Branched Maps and Differentials

Conceptual placement: after CA-20. Proposed id
`riemann-surfaces-branched-maps-and-differentials`. `requires`: CA-11, CA-20,
the topology covering-space pages, and the differential-forms/Stokes interface.

| id | kind | one-line statement |
|---|---|---|
| `def-riemann-surface-and-holomorphic-atlas` | def | A Riemann surface is connected, Hausdorff and second countable with a compatible complex one-dimensional atlas. |
| `def-holomorphic-and-meromorphic-map-of-riemann-surfaces` | def | Chart expressions define holomorphic maps and meromorphic functions, independently of the chosen charts. |
| `thm-topological-classification-compact-riemann-surfaces` | thm | Complex charts canonically orient a compact Riemann surface; a finite triangulation and polygonal reduction identify it with a sphere with a unique number $g$ of handles. |
| `def-genus-and-euler-characteristic-compact-riemann-surface` | def | Define the genus by that classification and prove $\chi(X)=2-2g$, independent of atlas, triangulation and polygonal schema. |
| `thm-local-normal-form-holomorphic-map-riemann-surfaces` | thm | A nonconstant holomorphic map has local form $z\mapsto z^e$ in suitable source and target coordinates. |
| `def-ramification-index-and-branch-value` | def | The integer $e$ in the local normal form is chart-independent; $e-1$ is the ramification order. |
| `thm-proper-holomorphic-map-riemann-surfaces-has-degree` | thm | A nonconstant proper holomorphic map has finite fibres and a regular-value-independent degree when multiplicities are counted. |
| `thm-riemann-hurwitz-formula` | thm | For a degree-$d$ map of compact connected surfaces, $2g_X-2=d(2g_Y-2)+\sum_x(e_x-1)$. |
| `def-meromorphic-differential-on-a-riemann-surface` | def | Local forms $f(z)\,dz$ transform covariantly; orders and residues are chart-independent. |
| `thm-residue-theorem-compact-riemann-surface` | thm | The residues of a meromorphic differential on a compact Riemann surface sum to zero. |

Companion: sphere, plane, disc, annulus and complex torus atlases; algebraic
curves where nonsingular; $z\mapsto z^n$ and hyperelliptic double covers;
coordinate checks for orders and residues; Riemann--Hurwitz computations.

Sources and proof strategy: Looijenga, *Riemann Surfaces*, Ch. 1 §§1--2, Ch. 2
§§1--4, Ch. 3 §§1--4, Ch. 4 §§1--3; McMullen, Math 213b, Chs. 2--6 (“Examples
of Riemann surfaces,” “Holomorphic maps,” “Sheaves and analytic continuation,”
“Algebraic functions,” “Holomorphic and harmonic forms”); Schlag, Ch. 4
§§1--6. Build the oriented-surface polygonal-schema theorem from a finite
triangulation before the word genus is used. Then use CA-6 local factorisation in charts, cover compact fibres by finitely
many normal-form neighbourhoods, prove degree constancy off branch values and
extend across them, then give both analytic and topological Riemann--Hurwitz
interfaces. The orphan file `items/rem-riemann-surface-of-log.md` is not homed
in `plan-spec.json` and is not an established dependency.

Forward references: later CA-RS pairs consume this pair but are not used here;
otherwise none.

## CA-RS-2. Divisors, Riemann--Roch and Duality

Proposed id `divisors-riemann-roch-and-duality`. `requires`: CA-RS-1, CA-19,
SC-5, the finite-dimensional linear-algebra and functional-analysis
duality interfaces.

| id | kind | one-line statement |
|---|---|---|
| `def-divisor-principal-and-canonical-divisor-riemann-surface` | def | Divisors are locally finite integer sums; principal and canonical divisors use chart-independent orders of functions and differentials. |
| `def-line-bundle-associated-to-a-divisor` | def | Local defining functions glue a line bundle $\mathcal O(D)$, independent up to canonical isomorphism of choices. |
| `def-cech-cohomology-for-riemann-surface-sheaves` | def | Čech cocycles modulo coboundaries over refinements define the cohomology used on this page, with cover-independence proved for the selected good covers. |
| `thm-finiteness-cohomology-compact-riemann-surface` | thm | The relevant $H^0$ and $H^1$ spaces for a divisor on a compact Riemann surface are finite dimensional. |
| `thm-serre-duality-compact-riemann-surfaces` | thm | The residue pairing identifies $H^1(X,\mathcal O(D))^*$ with $H^0(X,K-D)$. |
| `thm-riemann-roch-compact-riemann-surfaces` | thm | $\ell(D)-\ell(K-D)=\deg D+1-g$. |
| `cor-prescribed-principal-parts-compact-riemann-surface` | cor | Prescribed principal parts are solvable exactly when their residue pairings with all holomorphic differentials vanish. |
| `cor-compact-riemann-surface-has-meromorphic-function` | cor | Every compact Riemann surface admits a nonconstant meromorphic function. |
| `def-complex-projective-space-and-holomorphic-charts` | def | Define $\mathbb P^n(\mathbb C)$ as complex lines in $\mathbb C^{n+1}$ and prove its standard affine charts have holomorphic transitions. |
| `thm-linear-system-map-to-projective-space-is-well-defined` | thm | A base-point-free finite-dimensional space of sections defines a holomorphic projective map, independent up to projective linear change of the selected basis. |
| `thm-projective-embedding-compact-riemann-surface` | thm | A sufficiently positive divisor separates points and tangent directions and embeds the surface in projective space. |

Companion: divisors on $\widehat{\mathbb C}$ and a torus; hyperelliptic
canonical divisors; low-degree Riemann--Roch computations; a failed
principal-parts problem detected by residues; explicit linear systems.

Sources and proof strategy: Looijenga Ch. 5 §§1--2 and Ch. 6 §§1--4 (“The map
defined by a linear system,” “Hyperelliptic Riemann surfaces,” “An exact
sequence,” “Residues,” “Riemann--Roch,” “Serre duality”); McMullen 213b Chs.
7--14 (“Cohomology of sheaves,” “Cohomology on a Riemann surface,”
“Riemann--Roch,” “The Mittag--Leffler problems,” “Serre duality,” “Maps to
projective space,” “The canonical map,” “Line bundles”). Use one coherent
Dolbeault/Čech proof: SC-5 supplies the
local resolution, compactness supplies finite dimension, the residue pairing
proves duality, and the dimension identity yields Riemann--Roch. No algebraic
geometry black box is cited.

Forward references: SC-5 must be placed earlier in the future splice as its
declared direct prerequisite; otherwise none.

## CA-RS-3. Periods, Jacobians and Abel--Jacobi Theory

Proposed id `periods-jacobians-and-abel-jacobi-theory`. `requires`: CA-RS-2,
the homology/cohomology pairing and finite-dimensional Hermitian linear algebra.

| id | kind | one-line statement |
|---|---|---|
| `def-period-pairing-and-period-lattice` | def | Integrating holomorphic differentials over integral one-cycles gives the period pairing and a lattice in the dual vector space. |
| `thm-riemann-bilinear-relations` | thm | Periods satisfy the bilinear identities and positivity relation that force the period subgroup to be a discrete full lattice. |
| `def-jacobian-of-a-compact-riemann-surface` | def | $\operatorname{Jac}(X)=H^0(X,K)^*/H_1(X,\mathbb Z)$ is the well-defined period torus. |
| `def-abel-jacobi-map` | def | Integration from a base point defines $X\to\operatorname{Jac}(X)$ modulo periods and extends additively to divisors. |
| `thm-abels-theorem-for-divisors` | thm | A degree-zero divisor is principal iff its Abel--Jacobi class vanishes. |
| `thm-jacobi-inversion` | thm | Every point of the Jacobian is represented by a degree-zero divisor. |
| `cor-picard-zero-is-the-jacobian` | cor | $\operatorname{Pic}^0(X)$ is canonically isomorphic to $\operatorname{Jac}(X)$. |
| `thm-abel-jacobi-embedding-positive-genus` | thm | For $g\ge1$ the point Abel--Jacobi map is injective (and is an embedding). |

Companion: periods of a torus; a symplectic homology basis; genus-two period
matrix; base-point cancellation for degree-zero divisors; principal divisor
tests; the Abel image in its Jacobian.

Sources and proof strategy: Looijenga Ch. 7 §§1--2 (“The Jacobian,” “The
Abel--Jacobi map”); McMullen Ch. 15 “Curves and their Jacobians,” especially
Theorems 15.7--15.8; Schlag Ch. 8 §§1--5 (“Homology, periods and bilinear
relations,” “Divisors,” “Riemann--Roch,” “Applications,” “Abel and Jacobi”).
The bilinear relations, not a slogan about
periods, establish discreteness. Path ambiguity is proved to be exactly a
period, and the degree-zero construction is shown base-point independent.

Forward references: NONE load-bearing.

## CA-RS-4. Hyperbolic Riemann Surfaces and Uniformization

Proposed id `hyperbolic-riemann-surfaces-and-uniformization`. `requires`:
CA-RS-1, CA-RS-2, CA-12, CA-16, the topology universal-covering interface,
PDE Weyl/Dirichlet machinery and functional-analysis Hilbert methods.

| id | kind | one-line statement |
|---|---|---|
| `def-universal-covering-type-riemann-surface` | def | A surface is spherical, parabolic or hyperbolic according as its simply connected universal cover is $\widehat{\mathbb C}$, $\mathbb C$ or $\mathbb D$. |
| `def-poincare-metric-hyperbolic-riemann-surface` | def | Pull back the disc metric through local inverses of a universal covering, proving independence of lifts. |
| `thm-deck-transformations-are-hyperbolic-isometries` | thm | Deck transformations preserve the Poincaré metric, so it descends to the quotient. |
| `thm-uniformization-simply-connected-riemann-surfaces` | thm | Every simply connected Riemann surface is biholomorphic to exactly one of $\widehat{\mathbb C}$, $\mathbb C$, or $\mathbb D$. |
| `cor-universal-cover-classification-riemann-surfaces` | cor | Every connected Riemann surface is a quotient of one of the three models by a properly discontinuous fixed-point-free automorphism group. |
| `cor-compact-genus-determines-uniformization-type` | cor | A compact surface has spherical type for $g=0$, Euclidean type for $g=1$, and hyperbolic type for $g\ge2$. |

Companion: hyperbolic distance and geodesics in disc/half-plane; annulus and
punctured-disc covers; torus deck groups; cocompact Fuchsian examples; why the
three models are inequivalent.

Sources and proof strategy: McMullen Chs. 16--17 (“Hyperbolic geometry,”
“Uniformization”); Lyubich Ch. 1 §5 “Uniformization Theorem”; and
Schlag Ch. 11 §§1--3. Follow the Dirichlet/Green-function proof with the
exhaustion, Weyl lemma and normal-family choices exposed and cited; do not call
CA-16's plane-domain theorem uniformization of abstract surfaces.

Forward references: NONE load-bearing.

## CA-QC-1. Extremal Length and Planar Quasiconformality

Proposed id `extremal-length-and-planar-quasiconformality`. `requires`: CA-12,
CA-15, CA-PT-1, the measure $L^p$/Sobolev and weak-derivative interfaces.

| id | kind | one-line statement |
|---|---|---|
| `def-extremal-length-and-curve-family-modulus` | def | Define extremal length by a supremum over Borel metrics and call its reciprocal the curve-family modulus, explicitly fixing the convention. |
| `thm-extremal-length-conformal-invariance-and-monotonicity` | thm | Extremal length is conformally invariant and monotone under inclusion of curve families, with series and parallel inequalities. |
| `thm-modulus-rectangle-and-annulus` | thm | Compute the extremal quantities for a rectangle and a round annulus. |
| `def-geometric-quasiconformal-homeomorphism` | def | An orientation-preserving homeomorphism is geometrically $K$-quasiconformal when it distorts every curve-family modulus by at most $K$. |
| `def-acl-sobolev-quasiconformal-homeomorphism` | def | The analytic definition uses ACL, $W^{1,2}_{\rm loc}$ and $|f_{\bar z}|\le k|f_z|$ a.e., with $K=(1+k)/(1-k)$. |
| `def-beltrami-coefficient-and-maximal-dilatation` | def | $\mu_f=f_{\bar z}/f_z$ is an a.e. equivalence class with its value on $\{f_z=0\}$ fixed harmlessly, and $K_f=(1+\|\mu\|_\infty)/(1-\|\mu\|_\infty)$. |
| `thm-geometric-and-analytic-quasiconformality-equivalent` | thm | The modulus and ACL/Beltrami definitions are equivalent with the same sharp dilatation constant. |
| `thm-composition-and-inverse-quasiconformal` | thm | Composition and inverse are quasiconformal with the stated Beltrami transformation and multiplicative $K$ bound. |
| `thm-one-quasiconformal-is-conformal` | thm | A $1$-quasiconformal map has $\mu=0$ a.e. and is conformal by Weyl's lemma. |
| `thm-normalized-quasiconformal-compactness` | thm | Normalized $K$-quasiconformal sphere maps form a compact family for locally uniform convergence. |

Companion: rectangle and annulus extremals; affine ellipses; radial stretch;
composition bounds; a modulus obstruction; inverse coefficient; the
orientation-reversing exclusion.

Sources and proof strategy: Bishop, *Quasiconformal Mappings*, Ch. 1 §1
Lemmas 1.1--1.7, Ch. 2 §§1,3 and Ch. 4 §1 as needed; Lyubich, Ch. 1 §6 and
Ch. 2 §§11--13.5. Formulas precede terminology because sources reverse
“modulus” and “extremal length.” Use area/change-of-variables and ACL slicing
for equivalence, and cite weak compactness/Weyl rather than assuming classical
differentiability.

Forward references: later Beltrami/welding pairs consume this pair but are not
used here; otherwise none.

## CA-QC-2. The Beltrami Equation and Measurable Riemann Mapping

Proposed id `beltrami-equation-and-measurable-riemann-mapping`. `requires`:
CA-QC-1 and the $L^p$ weak-compactness/bounded-operator interfaces.

| id | kind | one-line statement |
|---|---|---|
| `def-measurable-beltrami-coefficient` | def | A Beltrami coefficient is an $L^\infty$ a.e. class $\mu$ with $\|\mu\|_\infty<1$, transforming as a $(-1,1)$ tensor under coordinates. |
| `def-weak-solution-beltrami-equation` | def | A $W^{1,2}_{\rm loc}$ map solves $f_{\bar z}=\mu f_z$ in distributions; the definition is representative- and chart-independent. |
| `thm-measurable-riemann-mapping-sphere` | thm | Every such $\mu$ on $\widehat{\mathbb C}$ has an orientation-preserving quasiconformal solution, unique after fixing $0,1,\infty$. |
| `cor-local-integrability-beltrami-structures` | cor | Every measurable conformal structure on a plane domain has local quasiconformal coordinates. |
| `thm-regularity-beltrami-solutions` | thm | Better Hölder/Sobolev regularity of $\mu$ yields the correspondingly stated regularity of the normalized solution. |

Companion: constant coefficients and affine solutions; piecewise-affine
approximations; normalization by Möbius maps; pullback of a measurable ellipse
field; nonuniqueness without fixing three points.

Sources and proof strategy: Lyubich Ch. 2 §§14.1--14.6 (“Uniqueness,” “Local vs
global,” “Strategy,” “Real analytic case,” “Approximation,” “Conformal and
complex structures”); Bishop Ch. 3 §§1--2,6. Lyubich §§14.7--14.9 (“Moduli
spaces,” “Dependence on parameters,” “Holomorphic maps between Banach spaces”)
are `D(Teichmüller/deformation theory)`. Use the
approximation/normalized-compactness route and prove passage
of dilatations to the limit. If a future build instead chooses the Beurling
transform, it must first supply its $L^p$ bounds and invertibility of
$I-\mu S$; “standard singular integral theory” is not a proof.

Forward references: CA-QC-3 consumes this pair but is not used here; otherwise
none.

## CA-QC-3. Quasisymmetry, Welding and Removability

Proposed id `quasisymmetry-welding-and-conformal-removability`. `requires`:
CA-QC-2, CA-16, CA-PT-1.

| id | kind | one-line statement |
|---|---|---|
| `def-quasisymmetric-circle-homeomorphism` | def | A circle homeomorphism is quasisymmetric when relative lengths of adjacent triples obey a uniform control function. |
| `thm-beurling-ahlfors-extension` | thm | Every quasisymmetric boundary homeomorphism has a quantitatively quasiconformal extension to the disc/half-plane. |
| `def-quasicircle` | def | A quasicircle is the image of a round circle under a sphere quasiconformal map. |
| `thm-quasicircle-characterizations` | thm | Quasicircles admit the selected bounded-turning/three-point and quasiconformal-reflection characterisations with hypotheses stated exactly. |
| `thm-quasiconformal-welding-existence` | thm | Every quasisymmetric circle map is the welding homeomorphism of a quasicircle, uniquely only up to postcomposition after normalization qualifications. |
| `def-conformal-removable-compact-set` | def | A compact set is conformally removable when every sphere homeomorphism conformal off it is Möbius. |
| `thm-welding-uniqueness-under-removability` | thm | Two weldings of a removable curve differ by a Möbius transformation. |
| `thm-basic-conformal-removability-criteria` | thm | Isolated points and the explicitly sourced zero-length/controlled-geometry classes are removable; no frontier dimension claim is made. |

Companion: power-map boundary distortion; snowflake-type quasicircles; circle
welding; Möbius ambiguity; a non-removable-set warning; point removability.

Sources and proof strategy: Lyubich §§15--16 (“One-dimensional qs maps,
quasicircles and qc welding,” “Quasisymmetric 1D maps,” “Ahlfors--Beurling
Extension,” “Removability”); Bishop Ch. 2 §§7,9 and the course sequence on
quasicircles, quasisymmetric maps, removable sets and welding. Existence comes
from extending and solving a Beltrami coefficient; uniqueness is never stated
without removability. Holomorphic motions, Teichmüller space and sharp
Hausdorff-dimension distortion are out of scope.

Forward references: NONE load-bearing.

## SC-5. The $\bar\partial$ Complex and Integral Solutions

Conceptual placement: after SC-4. Proposed id
`the-dbar-complex-and-integral-solutions`. `requires`: SC-1--SC-4, CA-HM-1,
the smooth differential-forms/Stokes and distributions interfaces.

| id | kind | one-line statement |
|---|---|---|
| `def-bigraded-complex-differential-forms` | def | Decompose complex differential forms into $(p,q)$ types and define $\partial,\bar\partial$ by coordinate formulas proved chart-independent. |
| `thm-d-dbar-decomposition-and-identities` | thm | $d=\partial+\bar\partial$, $\partial^2=\bar\partial^2=0$ and $\partial\bar\partial+\bar\partial\partial=0$. |
| `thm-cauchy-pompeiu-formula` | thm | A $C^1$ function on a plane domain is represented by its boundary Cauchy integral plus its area $\bar\partial$ term, with constants/signs fixed. |
| `def-bochner-martinelli-kernel` | def | Define the $(n,n-1)$ Bochner--Martinelli kernel with its orientation, normalising constant and locally integrable diagonal singularity explicit. |
| `thm-bochner-martinelli-integral-formula` | thm | On a bounded $C^1$ domain a $C^1$ function is represented by the boundary kernel and its interior $\bar\partial$ term; holomorphic functions retain the boundary term although the kernel is not holomorphic in the parameter for $n>1$. |
| `thm-dolbeault-lemma-polydisc` | thm | Every smooth $\bar\partial$-closed $(p,q)$ form with $q>0$ is locally $\bar\partial$-exact, proved by iterated one-variable integral operators. |
| `thm-compact-support-dbar-solution-cn` | thm | For $n\ge2$, a compactly supported smooth $\bar\partial$-closed $(0,1)$ form on $\mathbb C^n$ has a compactly supported smooth solution. |
| `cor-hartogs-extension-dbar-proof` | cor | Cutoff plus compact-support solvability gives the general Hartogs extension theorem, agreeing with SC-2's Cauchy-series proof. |
| `def-dolbeault-cohomology-domain` | def | $H^{p,q}_{\bar\partial}$ is the quotient of closed by exact smooth forms, with the quotient and induced maps well defined. |
| `thm-dolbeault-cohomology-polydisc-vanishes-positive-q` | thm | $H^{p,q}_{\bar\partial}$ vanishes on a polydisc for $q>0$. |

Companion: compute $\partial,\bar\partial$ on elementary functions/forms;
Cauchy--Pompeiu with compact support; Bochner--Martinelli on a ball; solve a polynomial $(0,1)$ form; a
nonclosed form with no solution; the cutoff proof of a puncture extension.

Sources and proof strategy: Lebl, *Tasty Bits of Several Complex Variables*,
Ch. 4 §§4.1--4.6 (“Generalized Cauchy integral formula,” “Compactly supported
solutions,” “Hartogs phenomenon in general,” “Solving on the polydisc,”
“Extension from an affine subspace,” “The Cousin problems”); CIMAT,
§§3.2.1--3.2.5 (“Differential forms,” compact-support $\bar\partial$,
integration by parts, and Bochner--Martinelli for functions and forms),
Theorems 36--37. Prove all coordinate/sign identities,
regularise singular kernels before Stokes, solve one variable at a time, and
show compact support by holomorphicity plus vanishing on the unbounded
component. For Bochner--Martinelli, excise a small ball, fix the induced
orientation, and take the diagonal limit before differentiating. General sheaf
cohomology is not silently identified with Dolbeault cohomology here.

Forward references: NONE load-bearing once the orchestrator places this pair
before CA-RS-2.

## SC-6. Hörmander Estimates and the Levi Problem

Proposed id `hormander-estimates-and-the-levi-problem`. `requires`: SC-5,
SC-4, measure $L^2$, unbounded-operator adjoints, Hilbert projection and weak
compactness.

| id | kind | one-line statement |
|---|---|---|
| `def-weighted-l2-spaces-dbar-forms` | def | Define the weighted Hilbert spaces $L^2_{p,q}(\Omega,e^{-\varphi})$, maximal distributional $\bar\partial$, and its Hilbert adjoint. |
| `thm-basic-bochner-kodaira-morrey-estimate-cn` | thm | On compactly supported smooth forms, the $\bar\partial$ and adjoint norms control the Levi form of the $C^2$ plurisubharmonic weight. |
| `thm-hormander-l2-dbar-existence` | thm | Under a strictly psh weight bound, every $\bar\partial$-closed $(0,q)$ form, $q\ge1$, with finite weighted norm has a solution with the explicit $L^2$ estimate. |
| `thm-pseudoconvex-domain-smooth-psh-exhaustion` | thm | Every pseudoconvex domain in $\mathbb C^n$ admits a smooth strictly plurisubharmonic exhaustion after the stated regularisation. |
| `cor-dolbeault-vanishing-pseudoconvex-domain` | cor | Positive-degree $\bar\partial$ cohomology vanishes in the smooth/$L^2$ classes for which the estimate applies. |
| `thm-levi-problem` | thm | For a domain $\Omega\subset\mathbb C^n$, pseudoconvexity is equivalent to being a domain of holomorphy (and to holomorphic convexity via SC-4). |
| `thm-behnke-stein-increasing-union` | thm | An increasing union of pseudoconvex domains is pseudoconvex, with the exhaustion regularisation and local-to-global step explicit. |
| `thm-oka-weil-approximation-pseudoconvex-domain` | thm | A function holomorphic near an $\mathcal O(\Omega)$-convex compact set is uniformly approximable there by functions in $\mathcal O(\Omega)$. |
| `cor-first-cousin-problem-pseudoconvex-domain` | cor | Compatible meromorphic principal parts on a pseudoconvex domain are realised by a global meromorphic function. |

Companion: Gaussian weights; the ball Levi form; solve one explicit
$\bar\partial$ datum with an estimate; exhaustion of a convex domain; a Hartogs
domain tested for pseudoconvexity; a Cousin-I gluing example.

Sources and proof strategy: Demailly, *Complex Analytic and Differential
Geometry*, Ch. VIII §§1--6 (“Unbounded operators,” “Complete Riemannian
manifolds,” “$L^2$ Hodge theory,” “General $d''$ estimate,” “Weakly
pseudoconvex manifolds,” “Hörmander estimates on noncomplete Kähler
manifolds”); Boas §§3.2.4--3.3.3 (“Pseudoconvexity,” “Levi problem,” “Levi
form,” “Applications of the $\bar\partial$ problem,” “Solution on smooth
pseudoconvex domains”); CIMAT §§4.1--4.3 (distributions/Sobolev, unbounded
operators and $L^2$ estimates); Lebl Ch. 2
§§2.3--2.6 for Levi/psh/Hartogs/holomorphic convexity. Prove the estimate on a
dense core, extend by functional analysis, choose the unique minimal-norm
solution, exhaust a nonsmooth domain, and construct functions unbounded toward
each boundary point; use the same cutoff-and-correction mechanism for
Oka--Weil. Global regularity of the $\bar\partial$-Neumann operator
is a PDE/CR scope denial, not part of the Levi proof.

Forward references: NONE load-bearing.

## SC-7. Bergman and Szegő Kernels

Proposed id `bergman-and-szego-kernels`. `requires`: SC-5,
SC-6, CA-HP-1/2, Hilbert-space Riesz representation and orthogonal projection.

| id | kind | one-line statement |
|---|---|---|
| `def-bergman-space-and-kernel` | def | $A^2(\Omega)$ is the closed holomorphic subspace of $L^2(\Omega)$ and $K_\Omega(z,w)$ is the Riesz representer of bounded point evaluation. |
| `thm-bergman-kernel-well-defined-and-basis-expansion` | thm | Point evaluation is bounded, $K$ is independent of an orthonormal basis, and $K(z,w)=\sum_j e_j(z)\overline{e_j(w)}$ normally on compacta. |
| `thm-bergman-reproducing-and-extremal-properties` | thm | $K$ reproduces $A^2$, gives the orthogonal Bergman projection, and $K(z,z)$ is the squared extremal evaluation norm. |
| `thm-bergman-kernel-biholomorphic-transformation` | thm | Under a biholomorphism, $K$ transforms with the two complex Jacobian factors. |
| `def-bergman-metric-bounded-domain` | def | On a bounded domain define the Hermitian form from $\partial\bar\partial\log K_\Omega(z,z)$, after proving the diagonal is positive. |
| `thm-bergman-metric-positive-and-biholomorphically-invariant` | thm | Bounded-domain point/derivative separation makes the form positive definite, and the kernel transformation law makes it biholomorphically invariant. |
| `def-szego-kernel-smooth-bounded-domain` | def | On a sufficiently smooth bounded domain define the Hardy boundary space, Szegő projection and reproducing kernel relative to the declared surface measure. |
| `thm-disc-ball-polydisc-bergman-szego-kernels` | thm | Compute the kernels of the disc, ball and polydisc with exact constants and product laws. |

Companion: orthonormal monomial expansions; disc/ball reproducing checks;
biholomorphic transport; Bergman versus Szegő normalization; a bounded-domain
example contrasted with an unbounded domain having trivial $A^2$; a
nonsmooth-boundary limitation.

Sources and proof strategy: Lebl Ch. 5 §§5.1--5.3 (“Bochner--Martinelli
kernel,” “Bergman kernel,” “Szegő kernel”); Błocki, *The Bergman Kernel and
Metric*, §1 (“Basic definitions,” bounded evaluation, kernel, transformation
law, disc/ball/product formulas and the extremal metric, Theorems 1.1--1.6).
Use Cauchy estimates to bound evaluation, Hilbert
Riesz for existence, Parseval for
basis independence, and change of variables for biholomorphic covariance.
The small-ball Stokes argument belongs to SC-5's Bochner--Martinelli formula,
not this page. Assert nondegeneracy and a Bergman metric only for the bounded
domain class where point and derivative separation have been proved; an
arbitrary unbounded domain may have $A^2=\{0\}$. Fine boundary regularity and
the full $\bar\partial$-Neumann/Szegő calculus are outside this pair.

Forward references: NONE load-bearing.

## SC-8. Analytic Hypersurfaces and Local Parametrisation

Proposed id `analytic-hypersurfaces-and-local-parametrisation`. `requires`: SC-3,
SC-5, commutative-algebra dimension/Noetherian/localisation interfaces.

| id | kind | one-line statement |
|---|---|---|
| `def-complex-analytic-hypersurface-germ-and-reduced-equation` | def | A hypersurface germ is the zero germ of one nonunit; square-free reduction produces a reduced defining germ unique up to a unit and representative-independent. |
| `def-regular-singular-point-analytic-hypersurface` | def | A point is regular exactly when the reduced defining germ has nonzero differential; the regular/singular designation is independent of the reduced equation. |
| `thm-weierstrass-finite-projection-hypersurface-germ` | thm | After a generic linear coordinate change, preparation makes a hypersurface a finite branched cover over a polydisc in $\mathbb C^{n-1}$. |
| `def-discriminant-and-branch-locus-weierstrass-hypersurface` | def | The discriminant is independent up to a unit of the prepared equation and cuts out the branch locus of the finite projection. |
| `thm-local-irreducible-decomposition-hypersurface-germ` | thm | Every reduced hypersurface germ has finitely many uniquely determined irreducible components, by the UFD/Noetherian results of SC-3. |
| `thm-singular-locus-reduced-hypersurface` | thm | The singular locus of a reduced hypersurface is analytic, nowhere dense, and has lower dimension; no claim is made for arbitrary analytic sets without coherence. |
| `thm-pure-codimension-one-analytic-set-is-locally-principal` | thm | Within the proved local setting, every pure codimension-one analytic germ has a reduced hypersurface equation. |
| `thm-puiseux-parametrisation-plane-curve-germ` | thm | Every irreducible plane curve germ has a convergent parametrisation $t\mapsto(t^m,\sum_{k\ge m}a_kt^k)$ after coordinates, unique up to the declared reparametrisation. |
| `cor-normalisation-plane-curve-germ` | cor | Puiseux parametrisations normalise reduced plane curve germs and separate their finitely many branches. |

Companion: node, cusp and crossing; regular hyperplanes; a nonreduced equation
with the same zero set; finite projection and branch locus; Puiseux series for
$y^2=x^3$ and $y^2=x^5$; a warning that arbitrary analytic sets require more
than the hypersurface proof.

Sources and proof strategy: Lebl Ch. 6 §§6.1--6.8 (“Germs,” “Weierstrass
preparation and division,” “Zeros and parameters,” “The ring of germs,”
“Varieties,” “Hypervarieties,” “Irreducibility, local parametrization and
Puiseux,” “Segre varieties and CR geometry”); Freitag, Ch. I §§1--4
(“Elementary analytic functions,” “Weierstrass preparation,” “First
applications,” “Hypersurfaces”), especially Theorem 4.10. Use SC-3
preparation/division and the discriminant for finite
projection, the UFD for components, the gradient criterion for the regular
locus, and Newton--Puiseux with convergence proved—not a formal-series
assertion. General analytic-set singular-locus and parametrisation theorems are
not extrapolated from this proof: their standard proofs use coherence. Segre/CR
applications, Remmert proper mapping, global dimension theory and resolution
of singularities remain outside scope.

Forward references: NONE load-bearing.

---

# Existing-band page inventory (relative labels; reconciled 2026-08-14)

Category `complex-analysis` throughout (CX-D3). The first pair's counts are
actual `items[]` counts; every later count is only a scaffold target because
its plan array is empty. Absolute orders were deliberately removed.

| relative page | id | title | A/B | actual or target items |
|---|---|---|---|---|
| CA-1 A | `complex-differentiability-and-cauchy-riemann` | Complex Differentiability and the Cauchy–Riemann Equations | A | **28 actual** |
| CA-1 B | `complex-differentiability-and-cauchy-riemann-examples` | — | B | **13 actual** |
| CA-2 A | `complex-power-series-and-analytic-functions` | Complex Power Series and Analytic Functions | A | 20 |
| CA-2 B | `complex-power-series-and-analytic-functions-examples` | — | B | 12 |
| CA-3 A | `contour-integration` | Contour Integration | A | 21 |
| CA-3 B | `contour-integration-examples` | — | B | 11 |
| CA-4 A | `goursat-and-cauchys-theorem-in-a-convex-domain` | Goursat's Theorem and Cauchy's Theorem in a Convex Domain | A | 15 |
| CA-4 B | `goursat-and-cauchys-theorem-in-a-convex-domain-examples` | — | B | 10 |
| CA-5 A | `analyticity-liouville-and-morera` | Analyticity of Holomorphic Functions; Liouville and Morera | A | 20 |
| CA-5 B | `analyticity-liouville-and-morera-examples` | — | B | 11 |
| CA-6 A | `the-identity-theorem-and-the-open-mapping-theorem` | The Identity Theorem, the Maximum Principle and the Open Mapping Theorem | A | 20 |
| CA-6 B | `the-identity-theorem-and-the-open-mapping-theorem-examples` | — | B | 12 |
| CA-7 A | `the-winding-number-and-the-global-cauchy-theorem` | The Winding Number and the Global Cauchy Theorem | A | 20 |
| CA-7 B | `the-winding-number-and-the-global-cauchy-theorem-examples` | — | B | 11 |
| CA-8 A | `isolated-singularities-and-laurent-series` | Isolated Singularities and Laurent Series | A | 22 |
| CA-8 B | `isolated-singularities-and-laurent-series-examples` | — | B | 13 |
| CA-9 A | `the-residue-theorem` | The Residue Theorem and the Evaluation of Real Integrals | A | 18 |
| CA-9 B | `the-residue-theorem-examples` | — | B | 14 |
| CA-10 A | `the-argument-principle-and-rouche` | The Argument Principle and Rouché's Theorem | A | 17 |
| CA-10 B | `the-argument-principle-and-rouche-examples` | — | B | 12 |
| CA-11 A | `the-riemann-sphere-and-mobius-transformations` | The Riemann Sphere and Möbius Transformations | A | 22 |
| CA-11 B | `the-riemann-sphere-and-mobius-transformations-examples` | — | B | 12 |
| CA-12 A | `conformal-mapping-branches-and-the-schwarz-lemma` | Conformal Mapping, Branches, and the Schwarz Lemma | A | 24 |
| CA-12 B | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | — | B | 14 |
| CA-13 A | `harmonic-functions-and-the-poisson-integral` | Harmonic Functions and the Poisson Integral | A | 26 |
| CA-13 B | `harmonic-functions-and-the-poisson-integral-examples` | — | B | 12 |
| CA-14 A | `subharmonic-functions-and-the-dirichlet-problem` | Subharmonic Functions and the Dirichlet Problem | A | 31 |
| CA-14 B | `subharmonic-functions-and-the-dirichlet-problem-examples` | — | B | 10 |
| CA-15 A | `normal-families-and-montels-theorem` | Normal Families and Montel's Theorem | A | 18 |
| CA-15 B | `normal-families-and-montels-theorem-examples` | — | B | 12 |
| CA-16 A | `the-riemann-mapping-theorem` | The Riemann Mapping Theorem | A | 18 |
| CA-16 B | `the-riemann-mapping-theorem-examples` | — | B | 11 |
| CA-17 A | `simply-connected-plane-domains` | Simply Connected Plane Domains: the Grand Equivalence | A | 16 |
| CA-17 B | `simply-connected-plane-domains-examples` | — | B | 10 |
| CA-18 A | `infinite-products-and-weierstrass-factorisation` | Infinite Products and the Weierstrass Factorisation Theorem | A | 20 |
| CA-18 B | `infinite-products-and-weierstrass-factorisation-examples` | — | B | 12 |
| CA-19 A | `mittag-leffler-and-runges-theorem` | Mittag-Leffler and Runge's Theorem | A | 18 |
| CA-19 B | `mittag-leffler-and-runges-theorem-examples` | — | B | 11 |
| CA-20 A | `analytic-continuation-and-monodromy` | Analytic Continuation, Monodromy, and Riemann Surfaces | A | 21 |
| CA-20 B | `analytic-continuation-and-monodromy-examples` | — | B | 12 |
| CA-21 A | `the-gamma-function` | The Gamma Function | A | 21 |
| CA-21 B | `the-gamma-function-examples` | — | B | 12 |
| CA-22 A | `the-riemann-zeta-function` | The Riemann Zeta Function | A | 22 |
| CA-22 B | `the-riemann-zeta-function-examples` | — | B | 11 |
| CA-23 A | `bloch-schottky-and-picard` | Bloch, Schottky, and the Picard Theorems (**optional**, CA-23) | A | 16 |
| CA-23 B | `bloch-schottky-and-picard-examples` | — | B | 11 |
| SC-1 A | `holomorphic-functions-of-several-variables` | Holomorphic Functions of Several Complex Variables | A | 22 |
| SC-1 B | `holomorphic-functions-of-several-variables-examples` | — | B | 12 |
| SC-2 A | `the-hartogs-phenomena` | The Hartogs Phenomena | A | 15 |
| SC-2 B | `the-hartogs-phenomena-examples` | — | B | 10 |
| SC-3 A | `holomorphic-inverse-and-weierstrass-preparation` | The Holomorphic Inverse Function Theorem and Weierstrass Preparation | A | 20 |
| SC-3 B | `holomorphic-inverse-and-weierstrass-preparation-examples` | — | B | 11 |
| SC-4 A | `domains-of-holomorphy-and-pseudoconvexity` | Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity | A | 20 |
| SC-4 B | `domains-of-holomorphy-and-pseudoconvexity-examples` | — | B | 10 |

**Existing band: 27 A/B pairs.** The first pair is authored; the other 26 are
empty plans. The enrichment pairs above are deliberately absent from
`plan-spec.json`, because this commission is not a splice. Their item counts
will be computed by a future level scaffold and each A page must remain at or
below 60 items.

In the original band every A-page's `requires` was designed to name only earlier pages; the
internal chain is CA-1 $\to$ CA-2 $\to$ CA-3 $\to$ CA-4 $\to$ CA-5 $\to$ CA-6
$\to$ CA-7 $\to$ CA-8 $\to$ CA-9 $\to$ CA-10 $\to$ CA-11 $\to$ CA-12, then
CA-13/CA-15 branch off CA-7/CA-10/CA-13, CA-16 rejoins, CA-17 closes the loop
with the homotopy block, and SC-1 … SC-4 chain from CA-6/CA-4 upward.
future build must recompute this relation after placing the enrichment pairs.

---

# Retired 2026-07-28 build-frontier snapshot (historical only)

The remainder of this section is retained only as provenance for the original
draft. It is false as a current status report: CA-1 A/B and many prerequisites
have since been authored. This subjects-01 commission performs no build,
frontier computation, wave assignment, gate or validation. A future build must
read live `items[]` arrays and must not rely on any order or status below.

**Order is not build order, and this track is nowhere near the frontier.**
Measured from disk on 2026-07-28: of the spec's 230 pages, **53 are published**,
6 are draft, and 171 have no `library/` file at all. The publication frontier is
around **orders 125–131** — `the-fundamental-theorem-of-algebra` (125),
`monotone-functions-and-discontinuities` (129) and
`the-derivative-and-mean-value-theorems` (131) are all still absent from
`library/`.

**Nothing in this track is buildable today.** The blocking chain, in the order
it must clear:

| this track's page | blocked on | which is itself blocked on |
|---|---|---|
| CA-1 | 167 (`the-complex-exponential-and-eulers-formula`), 169 (`the-total-derivative`), 197 (`the-topology-of-euclidean-space`), 50 (`field-extensions-and-the-complex-numbers`) | 167 needs 153/155/157; 197 needs 145 + the general `connectedness`/`compactness` pair; 50 needs 48 (`polynomial-rings-and-roots`) |
| CA-3 | 137/139 (**the Riemann integral**, mid-build), 141, 159 | 159 needs 141 and 145 |
| CA-9 | 143 (`improper-integrals`) | 139 |
| CA-15 | 149 (`approximation-and-compactness-in-ck`) | 147, 119 |
| CA-17, CA-20 | 231/233/235 (the homotopy block) | 197, 58 (`free-products-and-amalgamation`), 229 |
| CA-22 | 24 (`primes-and-the-fundamental-theorem-of-arithmetic`, currently **draft**) | owner audit |
| SC-2, SC-4 | 217 (`complete-metrizability-and-baire`) | the whole metrization band |

**Roughly 25 A-pages of real analysis and topology stand between the current
frontier and CA-1**, and about 10 more between CA-1 and CA-17.

**The natural build order once the frontier reaches order 197**, in five waves:

1. **Wave 1 (needs nothing above 197): CA-1 … CA-12.** Twelve A-pages, the
   entire classical core through conformal mapping. This is by far the biggest
   and most valuable block, and it is buildable the moment 167, 169, 159, 143
   and 197 are published. Batched per LEVELS.md step 0 at 3 A-pages per batch:
   four batches, seams at CA-3/CA-4, CA-6/CA-7 and CA-9/CA-10.
2. **Wave 2 (needs 149): CA-13, CA-14, CA-15, CA-16.** Harmonic functions
   through the Riemann mapping theorem.
3. **Wave 3 (needs 231–235): CA-17, CA-20.** The two pages that consume the
   homotopy block. **CA-17 is the un-deferral trigger** for
   `rem-exponential-sequence-as-covering`, and CA-20 for
   `rem-riemann-surface-of-log` — both need owner approval at publish time.
4. **Wave 4: CA-18, CA-19, CA-21, CA-22, and optionally CA-23.** Products,
   approximation, $\Gamma$, $\zeta$. Only CA-22 reaches outside the track
   (order 24).
5. **Wave 5 (needs 217): SC-1 … SC-4.** The several-variable block, strictly
   chained internally.

**Two decisions must be taken before wave 1 is scaffolded**, because they move
items between pages rather than within them: CA-9 trap (i) (where the
branch-of-$\log$ material lives — CA-7 or CA-12), and amendment 1 (which page
owns well-definedness row 1, order 167 or CA-1).

---

# Canonical-coverage harvest (subjects-01 enrichment, normative)

Codes: `AP(id)` = already published; `I(label/id)` = included on the named A
page; `B(label)` = companion example; `IN(id)` = absorbed in that item's proof;
`D(home; reason)` = deferred to a named future home; `O(reason)` = outside this
track for the stated subject reason. A heading not listed below was not in a
range claimed as read. Numbered theorems without names are not “named-result
headings”; named theorems in the selected ranges are listed explicitly.

## Full texts obtained

The corpus includes four complete general texts, two of them openly licensed,
and complete specialist notes/monographs. Ahlfors and Stein--Shakarchi are the
standard primary checks requested by the dispatch; Weber and Howell--Mathews
are the two openly licensed complete textbooks retained for future builders.

- Lars Ahlfors, *Complex Analysis*, 3rd ed., complete university-hosted copy:
  <https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf>.
- Elias Stein and Rami Shakarchi, *Complex Analysis*, complete
  university-hosted copy:
  <https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Stein%2C%20Shakarchi%20-%20Complex%20analysis.pdf>.
- Matthias Weber, *Complex Analysis* (2026), complete CC BY-NC-SA text and
  repository record:
  <https://scholarworks.iu.edu/dspace/items/44696d67-1bbe-4af0-8612-330f34211e08>.
- Ian Howell and Richard Mathews, *Complex Analysis: An Open-Source Textbook*
  (2025), complete CC BY 4.0 text:
  <https://complexanalysis.org/web/howell-complex-analysis.pdf>.
- Wilhelm Schlag, *A Concise Course in Complex Analysis and Riemann Surfaces*:
  <https://www.math.purdue.edu/~eremenko/Pdf/schlag.pdf>.
- Dan Romik, *Complex Analysis* graduate notes:
  <https://www.math.ucdavis.edu/~romik/data/uploads/notes/complex-analysis.pdf>.
- J. S. Milne, *Modular Functions and Modular Forms*:
  <https://www.jmilne.org/math/CourseNotes/mf.html> and
  <https://www.jmilne.org/math/CourseNotes/MFletter.pdf>.
- Curtis McMullen, Math 213a and 213b notes:
  <https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213a/course/course.pdf>
  and <https://people.math.harvard.edu/~ctm/math213b/home/course/course.pdf>.
- Eduard Looijenga, *Riemann Surfaces*:
  <https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf>.
- Christopher Bishop, *Quasiconformal Mappings*:
  <https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf>.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*,
  vol. I: <https://www.math.stonybrook.edu/~mlyubich/book.pdf>.
- Jiří Lebl, *Tasty Bits of Several Complex Variables*, v4.4:
  <https://www.jirka.org/scv/scv.pdf>.
- Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, from the
  author's document page:
  <https://www-fourier.univ-grenoble-alpes.fr/~demailly/documents.html>.
- Sheldon Axler, Paul Bourdon and Wade Ramey, *Harmonic Function Theory*:
  <https://www.axler.net/HFT.pdf>.
- Boris Khoruzhenko, *Potential Theory*:
  <https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf>.
- R. K. Srivastava, *Advanced Course on Hardy Spaces*:
  <https://www.iitg.ac.in/rksri/Advanced%20hardy%20spaces%20Notes_V2.pdf>.
- Harold Boas, *Lecture Notes on Multidimensional Complex Analysis*:
  <https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf>.
- *Notes for Analysis and Geometry of Several Complex Variables* (CIMAT):
  <https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf>.
- Zbigniew Błocki, *The Bergman Kernel and Metric*:
  <https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf>.
- Freitag, *Several Complex Variables: Local Theory*, complete text mirror
  used only with its licensing uncertainty recorded:
  <https://www.nzdr.ru/data/media/biblio/edu/math/high/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D0%BD%D1%8B%D0%B9%20%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7/Freitaq%2C%20Several%20Complex%20Variables.pdf>.
- John Garnett, *Bounded Analytic Functions*, complete searchable copy:
  <https://lib.ysu.am/open_books/417709.pdf>.
- Alexandre Eremenko, *Lectures on Nevanlinna Theory*:
  <https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf>.
- A. A. Goldberg and I. V. Ostrovskii, *Value Distribution of Meromorphic
  Functions*: <https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf>.
- E. B. Saff, *Logarithmic Potential Theory with Applications to
  Approximation Theory*: <https://arxiv.org/pdf/1010.3760>.
- Lenya Ryzhik, Stanford Math 215 notes:
  <https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf>.

## General-text heading dispositions

**Ahlfors, selected ranges Ch. 2 §§1.1--1.4, 2.1--2.5; Ch. 3 §§2.2--2.3,
3.1--3.5, 4.1--4.3; Ch. 4 §§1.1--1.5, 2.1--2.3, 3.1--3.4, 4.1--4.7,
5.1--5.3; Ch. 5 §§1.1--1.3; Ch. 7 §§2.1--3.5.** “Limits and Continuity” →
`AP(rem-complex-plane-euclidean-dictionary)`; “Analytic Functions,”
“Polynomials,” “Rational Functions,” “Analytic Functions in Regions,” and
“Conformal Mapping” → `AP(CA-1 items)`; “Sequences,” “Series,” “Uniform
Convergence,” “Power Series,” “Abel's Limit Theorem” → `I(CA-2)`; “The Linear
Group,” “The Cross Ratio,” “Symmetry,” “Oriented Circles,” “Families of
Circles” → `I(CA-11)`; “The Logarithm” → `I(CA-7/CA-12)`; “Use of Level
Curves,” “A Survey of Elementary Mappings,” “Elementary Riemann Surfaces” →
`B(CA-12)`/`IN(CA-RS-1 atlas motivation)`; “Line Integrals,” “Rectifiable
Arcs,” “Line Integrals as Functions of Arcs” → `I(CA-3)`; “Cauchy's Theorem
for a Rectangle,” “Cauchy's Theorem in a Disk,” “The Integral Formula,”
“Higher Derivatives” → `I(CA-4)`; “The Index of a Point with Respect to a
Closed Curve,” “Chains and Cycles,” “Simple Connectivity,” “Homology,” “The
General Statement of Cauchy's Theorem,” “Proof,” “Locally Exact
Differentials,” “Multiply Connected Regions” → `I(CA-7)` with simple
connectivity `AP(topology)` and the last heading `B(CA-7)`; “Removable
Singularities. Taylor's Theorem,” “Zeros and Poles,” “The Local Mapping,” “The
Maximum Principle” → `I(CA-6/CA-8)`; “The Residue Theorem,” “The Argument
Principle,” “Evaluation of Definite Integrals” → `I(CA-9/CA-10)`; “Weierstrass's
Theorem,” “Taylor Series,” “Laurent Series” → `I(CA-5/CA-8)`; “The Period
Module,” “Unimodular Transformations,” “The Canonical Basis,” “General
Properties of Elliptic Functions,” “The Weierstrass $\wp$-Function,” “The
Functions $\zeta(z)$ and $\sigma(z)$,” “The Differential Equation” →
`I(CA-EF-1)` (canonical basis → companion); “The Modular Function
$\lambda(\tau)$,” “Conformal Mapping by $\lambda(\tau)$” → `B(CA-MF-1)`.
Named results in these ranges—Abel's limit theorem, Cauchy/Goursat theorem,
Cauchy integral formula, maximum principle, residue theorem and argument
principle—have exactly the same dispositions as their headings.

**Stein--Shakarchi, selected ranges Chs. 1--3, 5--6, Ch. 8 §§1--4, Ch. 9
§§1--2.2, Ch. 10 §§1--1.1.** Ch. 1 headings “Complex numbers” (“Basic
properties,” “Convergence,” “Sets”), “Functions” (“Continuity,” “Holomorphic
functions,” “Power series”), and “Integration along curves” → `AP(CA-1)` /
`I(CA-2/CA-3)`; Ch. 2 “Goursat's theorem,” “Local existence of primitives and
Cauchy's theorem in a disc,” “Evaluation of some integrals,” “Cauchy's
integral formulas,” and “Applications” (“Morera,” “Sequences of holomorphic
functions,” “Holomorphic functions defined by integrals,” “Schwarz
reflection,” “Runge approximation”) → `I(CA-4/CA-5/CA-13/CA-19)`; Ch. 3
“Zeros and poles,” “The residue formula” and “Examples,” “Singularities and
meromorphic functions,” “The argument principle and applications,” “Homotopies
and simply connected domains,” “The complex logarithm,” “Fourier series and
harmonic functions” → `I(CA-6--CA-10/CA-13)` with homotopy `AP(topology)`;
Ch. 5 “Jensen's formula,” “Functions of finite order,” “Infinite products,”
“The product formula for sine,” “The Weierstrass product theorem,” “Hadamard's
factorisation theorem” → `I(CA-NV-1/CA-18)`; Ch. 6 “The gamma function,”
“Analytic continuation,” “Further properties,” “The zeta function,”
“Continuation and functional equation” → `I(CA-21/CA-22)`; Ch. 8 “Conformal
equivalence and examples,” “The disc and upper half-plane,” “Further
examples,” “The Dirichlet problem in a strip,” “Schwarz lemma and automorphism
groups,” “Riemann mapping and Montel,” “Polygons,” “Schwarz--Christoffel,”
“Boundary behaviour,” “Elliptic integrals” → `I(CA-12/CA-14--CA-16)`, with
Jordan boundary correspondence `D(topology; Jordan--Schoenflies seam)` and
elliptic integrals `B(CA-EF-1)`; Ch. 9 “Elliptic functions,” “Liouville and
$\wp$,” “Modular character and Eisenstein series,” “Eisenstein series,”
“Eisenstein series and divisor functions” → `I(CA-EF-1/CA-MF-1)`, arithmetic
divisor-sum consequences `D(number theory)`; Ch. 10 “Product formula for the
Jacobi theta function” and “Further transformation laws” → `I(CA-MF-1)` and
`IN(CA-22 theta proof)`. Named results—Goursat, Morera, Schwarz reflection,
Runge, Weierstrass, Hadamard, Schwarz lemma, Montel and Riemann mapping—follow
those same dispositions.

**Weber, complete Chs. 1--7.** Ch. 1 §§1.1--1.10 “Review of Complex Numbers,”
“Holomorphic Functions,” “Möbius Transformations,” “Inversion,” “Chain Rules,”
“Cauchy--Riemann Equations,” “Path Integrals,” “Homotopy,” “Antiderivatives,”
“Goursat's Theorem” → `AP(CA-1)` / `I(CA-3/4/7/11)`, with homotopy
`AP(topology)`; Ch. 2 §§2.1--2.6 “Cauchy Integral Formula,” “Consequences,”
“Entire Functions,” “Sequences of Holomorphic Functions,” “Zeros,” “Isolated
Singularities” → `I(CA-4--CA-8/CA-15)`; Ch. 3 §§3.1--3.7 “Examples,” “Infinite
Products,” “Products and Partial Fractions,” “Poisson--Jensen,” “Functions of
Finite Order,” “Hadamard Product,” “Gamma Function” → `B(CA-18/21)` /
`I(CA-18/CA-21/CA-NV-1)`; Ch. 4 §§4.1--4.4 “Cauchy's Theorem,” “Cauchy
Integrals,” “Counting Zeros,” “Runge's Theorem” → `I(CA-7/10/19)`; Ch. 5
§§5.1--5.4 “Montel's Theorem,” “Riemann Mapping Theorem,” “Boundary
Extension,” “Schwarz--Christoffel” → `I(CA-15/16)` with general Jordan
extension `D(topology seam)` and polygon examples `B(CA-16)`; Ch. 6 §§6.1--6.3
“Elliptic Functions,” “Weierstrass Function,” “Modular Function” →
`I(CA-EF-1/CA-MF-1)`; Ch. 7 §§7.1--7.6 “Hermitian Metrics,” “Curvature,”
“Ahlfors Lemma,” “Landau--Schottky,” “Univalent Functions,” “Carathéodory
Kernel” → `I(CA-RS-4/CA-23/CA-16)` with the last two partly `B(CA-16)`.

**Howell--Mathews, selected Chs. 3, 6--10.** Ch. 3 §§3.1--3.3
“Differentiable and analytic functions,” “Cauchy--Riemann equations,”
“Harmonic functions” → `AP(CA-1)` / `I(CA-13)`; Ch. 6 §§6.1--6.6 “Complex
integrals,” “Contours,” “Cauchy--Goursat theorem,” “Fundamental theorem for
integration,” “Integral representations,” “Morera and Liouville” →
`I(CA-3--CA-5)`; Ch. 7 §§7.1--7.5 “Uniform convergence,” “Taylor series,”
“Laurent series,” “Singularities, zeros and poles,” “Applications” →
`I(CA-2/5/6/8)` and applications `B(CA-8)`; Ch. 8 §§8.1--8.7 “Residues,”
“Trigonometric integrals,” “Rational improper integrals,” “Trigonometric
improper integrals,” “Indented contours,” “Branch points,” “Argument principle
and Rouché” → `I(CA-9/10)` / `B(CA-9)`; Ch. 9 §§9.1--9.4 “Conformal mapping
basics,” “Bilinear transformations,” “Elementary maps,” “Trigonometric maps” →
`I(CA-11/12)` / `B(CA-12)`; Ch. 10 §§10.1--10.11 “Preliminaries,” “Dirichlet
problem,” “Poisson formula,” “Physical models,” “Temperatures,”
“Electrostatics,” “Fluid flow,” “Joukowski,” “Schwarz--Christoffel,” “Image
flow,” “Sources and sinks” → `I(CA-13/14)` and all physical/mapping headings
`B(CA-13/16)`; none is load-bearing.

## Specialist-source heading dispositions

**Romik, Chs. 14--15.** “The gamma function” and named Theorem 31 (integral,
recurrence, poles/residues, no zeros, reciprocal product, reflection) →
`I(CA-21)`; “The Riemann zeta function” and named Theorem 32 (Dirichlet series,
Euler product, continuation, pole, zero-free $\Re s\ge1$, trivial zeros,
special values, completed functional equation and theta/Mellin form) →
`I(CA-22)`; its Hankel alternative → `D(alternate zeta route; unnecessary once
FA-23/FA-25 supply theta--Poisson, while CA-21 retains the reciprocal-gamma
Hankel formula)`; named Theorem 34 “Poisson summation” and Theorem 35 “theta
functional equation” → `AP(functional analysis)` and `IN(CA-22 functional
equation proof)`.

**Schlag, selected Chs. 3--4, 8--11.** Ch. 3 §§1--4 “Poisson kernel,” “Hardy
classes of harmonic functions,” “Almost everywhere convergence to boundary
values,” “Problems” → `I(CA-HP-1)` / `B(CA-HP-1)`; Ch. 4 §§1--7 “Definitions,”
“Examples,” “Functions,” “Degree and genus,” “Quotient surfaces,” “Elliptic
functions,” “Problems” → `I(CA-RS-1/CA-EF-1)` / `B` for examples/problems;
Ch. 8 §§1--6 “Homology, periods and bilinear relations,” “Divisors,”
“Riemann--Roch proof,” “Applications,” “Abel and Jacobi,” “Problems” →
`I(CA-RS-2/3)` / `B`; Ch. 9 §§1--4 “Green function,” “Potential proof of
Riemann mapping,” “Perron construction,” “Boundary behaviour” →
`I(CA-HM-1/CA-PT-1)`; Ch. 10 §§1--3 “Green functions on Riemann surfaces,”
“Hyperbolic surfaces and Green functions,” “Problems” → `I(CA-RS-4)` / `B`;
Ch. 11 §§1--3 “Uniformization statement,” “Hyperbolic case,” “Parabolic case”
→ `I(CA-RS-4)`.

**Axler--Bourdon--Ramey, selected Chs. 1--3, 6--7 and 11.** Ch. 1 headings
“Definitions and Examples,” “Invariance Properties,” “Mean-Value,” “Maximum,”
“Poisson Kernel for Ball,” “Dirichlet Problem for Ball,” “Converse MVP,” and
“Real Analyticity and Homogeneous Expansions” → their planar forms
`I(CA-13)`; “Origin” → `O(history)`. Ch. 2 “Liouville,” “Isolated
Singularities,” “Cauchy Estimates,” “Maximum Principles” → `I(CA-13)`,
“Normal Families” → `I(CA-15)`, and “Limits Along Rays” / “Bounded Harmonic on
Ball” → `I(CA-HP-1)`. Ch. 3 “Harnack Inequality/Principle” → `I(CA-13)` and
“Positive Harmonic on Ball” → `I(CA-HP-1)`. Ch. 6 “Poisson Integrals of
Measures,” “Weak* Convergence,” “$h^p(B)$,” and “Fatou Theorem” →
`I(CA-HP-1)`, while “Hilbert $h^2$” → `I(CA-HP-2)`. Ch. 7 half-space theory →
`O(PDE owns $\mathbb R^n$)`, except “Local Fatou” specialized to the disc
`I(CA-HP-1)`. Ch. 11 “Dirichlet,” “Subharmonic,” “Perron,” and “Barriers and
Geometric Criteria” → `I(CA-14)`.

**Khoruzhenko, selected §§1--5.** §§1.1--1.3 “Harmonic and holomorphic,”
“Poisson integral,” “Positive harmonic functions” → `I(CA-13/CA-HP-1)`;
§§2.1--2.5 “Upper semicontinuous functions,” “Subharmonic functions and their
properties,” “Integrability,” “Three theorems not covered but useful,” and
smoothing → `I(CA-14)` (the convex analogy is `O(real convex analysis)`); §3
“Potentials and Generalised Laplacian,” “Polar Sets,” “Equilibrium Measure,”
and “Generalised Laplacian and Poisson's Equation” → `I(CA-PT-1)`;
§§4.1--4.2 “Perron Function” and “Harmonic Measure” → `I(CA-14/CA-HM-1)`,
while Carathéodory/prime-end transport → `D(topology seam)`; §5 “Capacity and
Transfinite Diameter” → `I(CA-PT-1)`.

**Ryzhik, Ch. 5 §§5.1--5.4.** “Poisson kernel” (Lemma 5.1 positivity,
harmonicity and mass; Definition 5.2 approximate identity) → `I(CA-13/CA-HP-1)`;
“Hardy classes of harmonic functions” → `I(CA-HP-1)`; “Maximal functions and
almost everywhere boundary convergence” including Theorem 5.12 →
`I(CA-HP-1)`; “F. and M. Riesz theorem,” Theorem 5.13 → `I(CA-HP-2)`.

**Garnett, selected Ch. I §§3--6 and Ch. II §§1--6.** “Poisson Integrals,”
“Hardy--Littlewood Maximal Function,” “Nontangential Maximal Function and
Fatou's Theorem,” “Subharmonic Functions” → `I(CA-HP-1)` with maximal theorem
`AP(measure/harmonic analysis)`; “Definitions,” “Blaschke Products,” “Maximal
Functions and Boundary Values,” the integrability-of-$\log|f|$ section, “The
Nevanlinna Class,” and “Inner Functions” → `I(CA-HP-2)`, including the
Nevanlinna and Smirnov subclasses. Named Fatou, Hardy--Littlewood, Jensen and
Riesz factorisation results inherit those dispositions.

**Srivastava, selected §§2.4, 2.6--2.7 and 3.1--3.10.** “Inner--outer
factorization,” “Characterization of outer functions,” “Riesz Brothers,”
“Straight forward properties,” “Identification $H^p(\mathbb D)/H^p(\mathbb
T)$,” “Jensen,” “Boundary uniqueness,” “Blaschke Product,” “Nontangential
limits,” and “Riesz--Smirnov factorization” → `I(CA-HP-2)`; “Szegő infimum” →
`D(future analytic-function-spaces pair)`; Fourier/approximate-identity/Fejér
headings → `AP(FA-14/measure theory)`; Poisson heading → `I(CA-HP-1)`.

**Saff, §§1--3.** “Transfinite diameter, logarithmic capacity, and Chebyshev
constant” → `I(CA-PT-1)` (polynomial Chebyshev applications `B`); “Harmonic,
superharmonic and subharmonic functions” → `I(CA-14/CA-PT-1)`; “Equilibrium
distributions and Green functions” → `I(CA-PT-1/CA-HM-1)`. Named Principle of
Descent, equilibrium existence, Frostman's theorem, Riesz decomposition,
domination principle and uniqueness theorem → `I(CA-PT-1)`.

**Eremenko, §§1--6.** “Jensen's formula,” “First main theorem,” “First main
theorem in Ahlfors--Shimizu form” → `I(CA-NV-1)`; “Gauss--Bonnet formula” →
`IN(CA-NV-2 second-main proof)`; “Second main theorem: value distribution” and
the logarithmic-derivative/ramification section → `I(CA-NV-2)`. Named Jensen,
First Main, logarithmic derivative, Second Main, defect and Picard results →
the same two pages. Higher-dimensional analogies are `O(Cartan--Nevanlinna
requires projective geometry)`.

**Goldberg--Ostrovskii, selected Ch. 1 §§1--2,4,6--7; Ch. 3 §§1--2; Ch. 4
§§1,3.** “Auxiliary results,” “Nevanlinna and Poisson--Jensen formulas,”
“Shimizu--Ahlfors characteristic,” “First Fundamental Theorem,”
“Characteristic relations and growth,” “Logarithmic derivative,” “Second
Fundamental Theorem,” “Exceptional values,” and “Deficiency relation” →
`I(CA-NV-1/CA-NV-2)`. Carleman/Levin angular theory, Tsuji theory, deep
deficiency structure, asymptotic paths and inverse problems →
`D(specialized value-distribution extension; not needed by the core SMT)`.

**Milne, selected Chs. 2--4.** Ch. 2 headings “The upper half-plane as a
quotient of $SL_2(\mathbb R)$,” “Quotients of $\mathfrak H$,” “Discrete
subgroups,” “Classification of linear fractional transformations,”
“Fundamental domains,” “Congruence subgroups,” “Complex structures on
quotients,” “Elliptic points and cusps” → `I(CA-MF-1)`, except classification
`AP(CA-11 when built)` and general congruence-subgroup theory `D(number
theory/modular curves)`; Ch. 3 headings are disposed exactly as recorded on
CA-EF-1; Ch. 4 “Modular functions,” “Modular forms,” “Modular forms as
differentials,” “Dimension,” “Zeros,” “Forms for $\Gamma(1)$,” “Fourier
coefficients of Eisenstein series,” “The functions $\Delta$ and $j$” →
`I(CA-MF-1)`, with divisor-sum arithmetic `D(number theory)`. Poincaré series,
Petersson theory, Hecke operators, modular equations, canonical models,
Dirichlet series and CM, lying after the selected range, were TOC-inspected but
are `D(number theory/arithmetic geometry; not analytic prerequisites)`.

**Looijenga, Chs. 1--7.** Ch. 1 “Manifolds,” “Complex manifolds and Riemann
surfaces” → manifold portion `AP(differential geometry)` and `I(CA-RS-1)`;
Ch. 2 “Covering spaces,” “Fundamental groupoid,” “Galois covers,” “Computation
of fundamental groups” → `AP(topology)` / `IN(CA-RS-1)`; Ch. 3
“Differentials,” “2-forms and exterior derivative,” “Stokes and de Rham for
surfaces,” “Holomorphic differentials” → `AP(differential forms)` /
`I(CA-RS-1)`; Ch. 4 “Principal and canonical divisors,” “Analytic
Riemann--Hurwitz,” “Topological Riemann--Hurwitz” → `I(CA-RS-1/2)` with the
topological version an agreement proof; Ch. 5 “Map defined by a linear system,”
“Hyperelliptic Riemann surfaces” → `I(CA-RS-2)` / `B`; Ch. 6 “An exact
sequence,” “Residues,” “Riemann--Roch,” “Serre duality” → `I(CA-RS-2)`; Ch. 7
“The Jacobian,” “The Abel--Jacobi map” → `I(CA-RS-3)`. Named Riemann--Hurwitz,
Riemann--Roch, Serre duality, Abel and Jacobi inversion inherit those
dispositions.

**Bishop and Lyubich, selected ranges.** Bishop Ch. 1 §1 “Extremal length,”
Lemmas 1.1--1.7 and Corollaries 1.4, 1.6--1.7 → `I(CA-QC-1)`; Lemma 1.8
point removal → `I(CA-QC-3)`; Lemma 1.9 symmetry → `B(CA-QC-1)`; §2
“Logarithmic capacity,” Lemmas 2.1--2.8 → `I(CA-PT-1)`; §3 “Hyperbolic
distance” → `I(CA-RS-4)`; §5 “Harmonic measure,” Theorem 5.2 and Beurling
estimate Corollary 5.4 → `I(CA-HM-1/CA-QC-1)`; Ch. 2 §§1,3,7,9 “Distortion
for smooth maps,” “Pointwise bounded and equicontinuous,” “Removable sets,”
“Quasicircles” → `I(CA-QC-1/3)`; Ch. 3 §§1--2,6 “Piecewise affine maps,”
“Mapping theorem,” “Convergence of maps implies convergence of dilatations” →
`I/B(CA-QC-2)`; Ch. 4 §1 “Ahlfors formula” → `IN(CA-QC-1 equivalence proof)`.
Lyubich Ch. 1 §§5--6 “Uniformization,” “Extremal length and width” →
`I(CA-RS-4/CA-QC-1)`; Ch. 2 §§11.1--11.5 analytic definitions, §§12.1--12.4
geometric definitions, §§13.1,13.4--13.5 Weyl/weak topology/compactness →
`I(CA-QC-1)` with Weyl/weak topology `AP(PDE/functional analysis)`;
§§14.1--14.6 → `I(CA-QC-2)`, while §§14.7--14.9 “Moduli spaces,” “Dependence
on parameters,” and “Holomorphic maps between Banach spaces” →
`D(Teichmüller/deformation track)`;
§§15--16 and named Ahlfors--Beurling extension → `I(CA-QC-3)`; §§17--18
“Holomorphic motions,” “Moduli and Teichmüller spaces” → `D(complex
dynamics/Teichmüller track)`.

**Lebl, complete Chs. 1--6.** Ch. 1 §§1.1--1.6 “Onto mappings,” “Power
series,” “Derivatives,” “Ball versus polydisc,” “Cartan uniqueness,” “Riemann
extension, zeros and injectivity” → `I(SC-1/2/3)` with ball/polydisc examples
`B(SC-1)`; Ch. 2 §§2.1--2.6 “Domains and extensions,” “Tangent/Hessian and
convexity,” “Holomorphic vectors, Levi and pseudoconvexity,” “Harmonic to
plurisubharmonic,” “Hartogs pseudoconvexity,” “Holomorphic convexity” →
`I(SC-2/4/6)`; Ch. 3 §§3.1--3.4 “Real analytic and complexification,” “CR
functions,” “Approximation,” “Extension” → `D(CR/PDE track; not needed for
Levi)`; Ch. 4 §§4.1--4.6 all headings → `I(SC-5/6)` as listed on SC-5; Ch. 5
§§5.1--5.3 all kernels → Bochner--Martinelli `I(SC-5)` and Bergman/Szegő
`I(SC-7)`; Ch. 6 §§6.1--6.4 → `I(SC-3)`, and §§6.5--6.7 → the hypersurface and
plane-curve parts `I(SC-8)` while arbitrary analytic-set/coherence conclusions
are `D(coherent-sheaf track)`; §6.8 Segre/CR applications `D(CR track)`. Named
Hartogs, Cartan uniqueness, Weierstrass preparation/division,
Bochner--Martinelli and hypersurface parametrisation/Puiseux results inherit
those dispositions.

**Demailly, Ch. VIII §§1--6.** “Unbounded operators in Hilbert spaces,”
“Complete Riemannian manifolds,” “$L^2$ Hodge theory,” “General $d''$
estimate,” “Weakly pseudoconvex manifolds,” “Hörmander estimates on
noncomplete Kähler manifolds” → functional prerequisites `AP(functional
analysis/PDE)` and complex conclusions `I(SC-6)`. Named Bochner--Kodaira,
Andreotti--Vesentini and Hörmander estimates → `I(SC-6)`; later extension,
Skoda and singularity chapters are `D(complex geometry; beyond the selected
Levi range)`.

**Boas, exact §§3.2.4--3.3.3.** “Pseudoconvexity,” “Levi problem,” “Levi
form,” “Applications of the $\bar\partial$ problem,” and “Solution on smooth
pseudoconvex domains” → `I(SC-4/SC-6)`. Named Theorems 17--21 (locality of
pseudoconvexity, boundary Levi criterion, strongly pseudoconvex exhaustion,
smooth $\bar\partial$ solvability and Oka--Weil) → `I(SC-6)`. §4.1
“Fatou--Bieberbach” → `D(SCV dynamics)`, §4.2 “Ball/bidisc inequivalence” →
`B(SC-1/SC-7)`, §4.3 “Injectivity/Jacobian” → `IN(SC-3)`, and §4.4 “Jacobian
conjecture” → `AP(open-problem remark only)`.

**CIMAT, exact §§3.2.1--3.2.5, 3.3--3.6 and 4.1--4.3.** “Differential
forms,” “Compact-support $\bar\partial$,” “Hodge star and integration by
parts,” and “Bochner--Martinelli for functions/forms,” including Theorems
36--37 → `I(SC-5)`; “Domains of convergence and holomorphy,” “Geometric
pseudoconvexity,” and “Subharmonic/plurisubharmonic functions,” including
Theorem 62 → `I(SC-1--SC-4)`; “$\bar\partial$,” “Distributions and Sobolev
spaces,” “Unbounded operators,” and “$L^2$ estimates,” including Theorems
70,72,74,77 and Lemmas 71,73,75--76 → prerequisites `AP(FA/PDE)` and complex
conclusions `I(SC-6)`; Theorem 80 “Behnke--Stein” → `I(SC-6)`. §§4.4--4.7
interpolation/division/Cousin applications and Chs. 7--10 coherent
cohomology, general extension, Kähler and $\bar\partial$-Neumann theory →
`D(dedicated sheaf/CR/complex-geometry tracks)`.

**Błocki, exact §1.** “Basic definitions,” bounded evaluation, Bergman kernel,
transformation law, disc/ball/product formulas and Theorem 1.1 (extremal
Bergman metric) → `I(SC-7)`; Theorem 1.2 projective embedding and Theorem 1.5
curvature → `D(complex geometry)`; Theorem 1.3/Corollary 1.4 estimates and
Theorem 1.6 monotone-domain convergence → `B(SC-7)` or a cheap corollary if the
page cap permits. §§2--7 one-variable, Suita, Ohsawa--Takegoshi and completeness
developments → `D(specialist Bergman extension)` except elliptic-function
headings `I(CA-EF-1)`.

**Freitag, exact Ch. I §§1--4 and Ch. IV §§1--3.** Ch. I “Elementary analytic
functions,” “Weierstrass preparation,” “First applications,” and
“Hypersurfaces,” including Theorem 4.10 on the hypersurface singular locus →
`I(SC-1/SC-3/SC-8)`. Ch. IV “Analytic sets and maps and local rings,”
“Dimension and coherence,” and “Singular locus” → hypersurface definitions
`I(SC-8)`, while coherence and the arbitrary-analytic-set singular-locus
theorem → `D(coherent analytic sheaves; the proof explicitly uses coherence)`.

## Pair-backing matrix

Every row names at least two independent treatments, one a full text or full
lecture-note set with a harvested contents range. Companion examples use the
same mathematical range and do not need a separate source.

| pair(s) | independent backing |
|---|---|
| CA-1 | Ahlfors Ch. 2/3; Stein--Shakarchi Ch. 1; authored item citations. |
| CA-2--CA-5 | Ahlfors Chs. 2,4,5; Stein--Shakarchi Chs. 1--2; Weber Chs. 1--2. |
| CA-6--CA-10 | Ahlfors Ch. 4/5; Stein--Shakarchi Chs. 2--3; Howell--Mathews Chs. 7--8. |
| CA-11--CA-12 | Ahlfors Ch. 3; Stein--Shakarchi Ch. 8; Weber Chs. 1,5. |
| CA-13--CA-14 | Axler--Bourdon--Ramey Chs. 1--3,11; Schlag Chs. 3,9; Khoruzhenko §§1--4. |
| CA-15--CA-17 | Weber Chs. 5,7; Stein--Shakarchi Ch. 8; Schlag Chs. 9,11. |
| CA-18--CA-20 | Weber Chs. 3--4; Stein--Shakarchi Chs. 3,5; Schlag Chs. 2,5. |
| CA-21--CA-22 | Romik Chs. 14--15; Stein--Shakarchi Ch. 6; Weber Ch. 3. |
| CA-23 | Weber Ch. 7; Stein--Shakarchi's Picard development; Eremenko/Goldberg--Ostrovskii SMT as an independent quantitative route. |
| CA-HM-1 / CA-PT-1 | Khoruzhenko §§1--5; Schlag Ch. 9; Saff §§1--3/Bishop Ch. 1. |
| CA-HP-1 / CA-HP-2 | Axler--Bourdon--Ramey Ch. 6; Ryzhik Ch. 5; Garnett Chs. I--II/Srivastava §§2--3. |
| CA-NV-1 / CA-NV-2 | Eremenko §§1--6; Goldberg--Ostrovskii selected Chs. 1,3,4. |
| CA-EF-1 / CA-MF-1 | Ahlfors Ch. 7; Milne Chs. 2--4; McMullen 213a Ch. 5 / Stein--Shakarchi Chs. 9--10. |
| CA-RS-1--CA-RS-4 | Looijenga Chs. 1--7; McMullen 213b Chs. 2--17; Schlag Chs. 4,8,10--11 and Lyubich Ch. 1 §5. |
| CA-QC-1--CA-QC-3 | Bishop Chs. 1--3; Lyubich Ch. 1 §6 and Ch. 2 §§11--16. |
| SC-1--SC-4 | Lebl Chs. 1--2,6; Boas §§3.2.4--3.3.3; CIMAT §§3.3--3.6. |
| SC-5--SC-8 | Lebl Chs. 4--6; Demailly Ch. VIII; CIMAT §§3.2,4.1--4.3; Błocki §1/Freitag Ch. I. |

## Convention decisions

- “Domain” remains the authored nonempty connected open convention; sources
  using “region” or allowing disconnected domains are translated explicitly.
- The library says “holomorphic” until CA-5 proves equivalence with local power
  series; Ahlfors's use of “analytic” for differentiable does not collapse that
  dependency.
- Piecewise $C^1$ contours are primary; Ahlfors's rectifiable convention is
  connected by one theorem, never silently substituted.
- Subharmonic/psh means USC with values in $[-\infty,\infty)$ and no
  identically $-\infty$ domain component; a psh line restriction may itself be
  identically $-\infty$. The old continuous convention is retired.
- For logarithmic potentials, $p_\mu=\int\log|z-w|d\mu$ has
  $\Delta p_\mu=2\pi\mu$, while the electrostatic $U^\mu=-p_\mu$ is
  superharmonic. Sources using the opposite symbol are translated, never mixed.
- $H^p$ means analytic Hardy; $h^p$ means harmonic Hardy. At $p=1$, harmonic
  representation naturally uses measures, whereas analytic F. and M. Riesz
  later produces an $L^1$ density under the analytic Fourier condition.
- Harmonic measure is written $\omega_\Omega^z(E)$: domain and pole are fixed
  before the Borel boundary set.
- $G_{2k}$ is the unnormalised lattice Eisenstein series and $E_{2k}$ the
  normalised level-one form. $E_2$ is quasimodular, not modular.
- Riemann surfaces are connected, Hausdorff and second countable; this aligns
  with the library's manifold convention rather than sources that derive
  countability later.
- The library defines extremal length by its displayed supremum and calls its
  reciprocal modulus. This neutralises the reciprocal terminology in Bishop
  and Lyubich.
- Quasiconformal maps are orientation-preserving, ACL/$W^{1,2}_{\rm loc}$;
  $K=(1+k)/(1-k)$ for $k=\|\mu\|_\infty$. MRMT uniqueness fixes
  $0,1,\infty$.
- $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ is meromorphic; only
  $\xi(s)=\frac12s(s-1)\Lambda(s)$ is entire. These names are never swapped.
- Functional-analysis inner products are linear in the first variable. Every
  Bergman, Szegő and $\bar\partial$-adjoint formula is conjugated to that
  convention before citation.

---

# Retired source notes from the 2026-07-28 draft (historical only)

The layering above was checked against the following. Textbook tables of
contents were used for the ORDER of topics, lecture notes and syllabi for what a
standard course assumes at each stage, and the two Hartogs sources for the exact
point at which the several-variable theory leaves this library's scope.

**One variable — layering and curriculum**

- Stein and Shakarchi, *Complex Analysis* (Princeton), table of contents —
  the chapter order used for CA-1 … CA-12 (preliminaries and integration along
  curves; Goursat, then local primitives, then Cauchy in a disc, then the
  integral formulas; then zeros and poles, the residue formula, the argument
  principle, homotopies and the logarithm). <https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis>
  and <https://cs.mcgill.ca/~akroit/math/analysis/Stein%20and%20Shakarchi%20Complex%20Analysis.pdf>
- Ahlfors, *Complex Analysis*, chapter structure (complex numbers; complex
  functions; analytic functions as mappings; complex integration; local
  properties; the calculus of residues; harmonic functions; power series
  expansions; partial fractions and factorisation; entire functions; normal
  families) — the source of CX-D4, the homology-first treatment, and of the
  homological definition of "simply connected" for plane domains.
  <https://books.google.com/books/about/Complex_Analysis.html?id=2MRuus-5GGoC>
- Duke University, graduate complex analysis **qualifying exam syllabus** — the
  nine-topic list this track is measured against; every one of its items is
  covered (differentiation and CR; Cauchy's theorem, formula, inequalities,
  Liouville, Morera; singularities, Taylor, meromorphic, Laurent; FTA,
  residues, winding numbers, the argument principle, Rouché; local behaviour and
  the open mapping theorem; harmonic functions, the maximum principle, the
  Poisson formula, the MVP; conformal mapping, linear fractional
  transformations, Schwarz; infinite products, analytic continuation,
  multivalued functions, Schwarz reflection, monodromy; the Riemann mapping
  theorem and Picard). <https://sites.math.duke.edu/graduate/qual/qualcompanal.html>
- Harvard Math 213a, McMullen, *Advanced Complex Analysis* course notes — the
  graduate-level structure (basic complex analysis; the simply-connected Riemann
  surfaces; entire and meromorphic functions; conformal mapping; elliptic
  functions), and the confirmation that elliptic functions and abstract Riemann
  surfaces are a separate body of material (denials 9, 13).
  <https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213a/course/course.pdf>
- Tao, *Math 246A Notes 2 (complex integration)* and *Notes 3 (Cauchy's theorem
  and its consequences)* — the treatment of the contour integral's
  parametrisation independence and of the homology/homotopy split.
  <https://terrytao.wordpress.com/2016/09/27/246a-notes-2-complex-integration/>,
  <https://terrytao.wordpress.com/2016/10/02/math-246a-notes-3-cauchys-theorem-and-its-consequences/>
- Dixon, "A brief proof of Cauchy's integral theorem", *Proc. AMS* 29 (1971) —
  the short proof of the homology form using only local properties and
  Liouville, "no additional geometric or topological arguments". This is the
  load-bearing citation for CX-D4.
  <https://www-users.cse.umn.edu/~brubaker/docs/8701-F13/dixon.pdf>
- McKernan, UCSD 220A, lecture 14 (winding numbers) and Daileda, Trinity,
  "Strong Cauchy: winding numbers and Cauchy's integral formula" — the
  integrality proof of the winding number in the form used for well-definedness
  row 8. <https://mathweb.ucsd.edu/~jmckerna/Teaching/14-15/Autumn/220A/l_14.pdf>,
  <http://ramanujan.math.trinity.edu/rdaileda/teach/s20/m4364/lectures/cauchy_formula_handout.pdf>
- Cambridge Part IB, *Complex Analysis* (Smith), theorems-with-proof notes —
  the undergraduate baseline and the piecewise-$C^1$ contour convention.
  <https://dec41.user.srcf.net/notes/IB_L/complex_analysis_thm_proof.pdf>
- Gardner (ETSU) 5510 notes, IV.1 (Riemann–Stieltjes integrals) and IX.3 (the
  monodromy theorem) — the Conway-style rectifiable/RS treatment of the contour
  integral (CX-D5) and the fixed-endpoint-homotopy statement of monodromy
  (well-definedness rows 26). <https://faculty.etsu.edu/gardnerr/5510/notes/IV-1.pdf>,
  <https://faculty.etsu.edu/gardnerr/5510/notes/IX-3.pdf>
- Nagel (Wisconsin) Math 722, "The Riemann mapping theorem / the Arzelà–Ascoli
  theorem", and Chi-Tat Chiang (HKUST) 5030 ch. 3 — the RMT proof structure
  (Arzelà–Ascoli $\to$ Montel $\to$ Hurwitz $\to$ the extremal problem $\to$ the
  square-root enlargement) used for CA-15/CA-16.
  <https://people.math.wisc.edu/~ajnagel/Math722Lectures5.pdf>,
  <https://www.math.hkust.edu.hk/~machiang/5030/notes/Chap3_a.pdf>
- Yan (Oklahoma State), *Complex Analysis II* — the order Runge $\to$
  Mittag-Leffler $\to$ Weierstrass factorisation used for CA-18/CA-19.
  <https://math.okstate.edu/people/pyan/ComplexAnalysisII.pdf>
- Gantumur (McGill) Math 580, *Perron's method for the Dirichlet problem* —
  the Perron construction, barriers and regular boundary points as scaffolded on
  CA-14. <https://www.math.mcgill.ca/gantumur/math580f14/perron.pdf>
- Bishop (Stony Brook) Math 536 ch. 14 — analytic continuation and the
  complete analytic function.
  <https://www.math.stonybrook.edu/~bishop/classes/math536.S24/chap14.pdf>

**Several variables — where the scope line falls**

- Garrett (Minnesota), *Hartogs' theorem: separate analyticity implies joint*
  (2005), following Hörmander — read in full. The proof's stages are exactly
  what SC-1/SC-2 scaffold: (1) continuous + separately analytic $\Rightarrow$
  analytic, by the iterated Cauchy formula; (2) **bounded** + separately
  analytic $\Rightarrow$ continuous, by Schwarz's lemma and a telescoping
  estimate; (3) a **Baire category** step giving boundedness on a subpolydisc;
  (4) propagation to the full polydisc by **Hartogs' lemma on subharmonic
  functions** — whose proof in that same note uses **Fatou's lemma** and the
  area integral of an upper-semicontinuous function. Stage (4) is denial 2, and
  stages (1)–(3) are what this track proves.
  <https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf>
- Wikipedia, *Hartogs's theorem on separate holomorphicity* — confirms the
  Baire-plus-Hartogs'-lemma structure and that the continuous/bounded case is
  Osgood's lemma. <https://en.wikipedia.org/wiki/Hartogs%27s_theorem_on_separate_holomorphicity>
- Lebl (Oklahoma State), *Several Complex Variables* lecture notes — the
  chapter order used for SC-1 … SC-4 (holomorphic functions in several
  variables, power series, inequivalence of ball and polydisc; convexity and
  pseudoconvexity: domains of holomorphy and holomorphic extension, the Levi
  form, plurisubharmonic functions, holomorphic convexity; CR geometry; the
  $\bar\partial$-problem and the general Hartogs phenomenon). The last two
  chapters are precisely denials 4 and 7.
  <https://math.okstate.edu/people/lebl/scv-s14/scv.pdf>
- Boas (Texas A&M), *Lecture notes on several complex variables* — the Hartogs
  phenomenon, "separate holomorphicity implies joint holomorphicity",
  convexity with respect to a class of functions, polynomial convexity.
  <https://haroldpboas.gitlab.io/courses/650-2011c/notes.pdf>
- Jabbari (CIMAT), *Notes for analysis and geometry of several complex
  variables* — two proofs of the Hartogs extension theorem, Hartogs versus Levi
  pseudoconvexity, subharmonic and plurisubharmonic functions; the source for
  the SC-4 statement of the Levi problem and for what its solution costs.
  <https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf>
- Range, *Holomorphic functions and integral representations in several complex
  variables*, ch. 2 "Domains of holomorphy and pseudoconvexity" — Cartan–Thullen
  and the historical framing of Hartogs's 1906 example.
  <https://link.springer.com/chapter/10.1007/978-1-4757-1918-5_2>
- Penn, *Elementary properties of holomorphic functions in several variables*
  (ch. 2 notes) — the polydisc Cauchy formula and the multivariable power series
  used for well-definedness rows 31–32.
  <https://www2.math.upenn.edu/~cle/notes/sec2.pdf>

**Reference points used for named theorems**

- Wikipedia: *Mittag-Leffler's theorem*, *Weierstrass factorization theorem*,
  *Monodromy theorem*, *Perron method* — used only to fix statements and
  hypotheses, never as the layering authority.

---

# Unresolved seams and exact future-build checks

The source and scope decisions are complete; these are implementation seams,
not excuses to drop results.

1. **Holomorphic logarithm ordering.** CA-9's keyhole contours consume a branch
   before the old CA-12 location. Home the general branch definition,
   normalisation and uniqueness on CA-7, and have CA-12 cite it. Recheck CA-7's
   A-item count after that move; split the page if it exceeds 60 rather than
   losing an item.
2. **The $\mathbb C$ dictionary owner.** Decide whether well-definedness row 1
   is homed on `the-complex-exponential-and-eulers-formula` or CA-1. The first
   authored page owns it and the other cites it; amendment 1 records the other
   scaffold's side.
3. **Improper parameter integrals.** Check CA-5's final parameter-integral
   theorem against the local-uniform endpoint domination needed by CA-21. If it
   is compact-interval only, CA-21 must prove the improper extension as its own
   lemma before declaring $\Gamma$ holomorphic.
4. **Newton identities.** SC-3 may not cite an examples-page result. Move the
   needed finite Newton identities to their algebra A page, or prove precisely
   the required recurrence inside the preparation proof.
5. **Enrichment placement.** The orchestrator must topologically order the new
   relative pairs. In particular CA-HM-1 follows CA-16; SC-5 precedes CA-RS-2;
   CA-RS-1 precedes CA-EF-1/CA-MF-1; SC-6 follows SC-5; and CA-QC follows the
   potential and surface interfaces. No absolute order in the retired draft is
   authority.
6. **Inherited choice charges.** At build time copy, verbatim, the exact choice
   cost from MT-20 and the relevant Hilbert projection/weak-compactness items.
   This scaffold bounds the cost by AC$_\omega$/DC but does not overwrite a
   supplier ledger.
7. **Boundary transport.** Pointwise transport of continuous boundary data or
   Euclidean-boundary harmonic measure requires a homeomorphic extension to
   closures. Without it, add a genuine prime-end page first; do not smuggle in
   Carathéodory correspondence.
8. **Natural-boundary example.** Use the Hadamard-gap example only if its proof
   is actually supplied. Otherwise use the scaffolded $\sum z^{n!}$ route and
   prove radial divergence on the dense set of roots of unity.
9. **Ball versus polydisc.** Poincaré's non-biholomorphism remains a sourced
   non-load-bearing remark unless a future page budgets the automorphism-group
   proof. No present theorem depends on it.
10. **Bergman/Szegő boundary hypotheses.** The future SC-7 build must freeze
    the smoothness and surface-measure convention before stating a Szegő
    projection, and must not assert a nondegenerate Bergman metric on arbitrary
    unbounded domains.

**Blockers: none.** Full Hartogs extension, the full separate-holomorphy
theorem, the Levi problem, Picard, boundary-zero Jensen/Hadamard, and the
theta--Mellin zeta functional equation are no longer optional or deferred in
this scaffold.
