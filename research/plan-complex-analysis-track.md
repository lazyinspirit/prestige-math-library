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
relative; this commission performs no splice. The live CA-1 A/B inventory has
41 immutable items; the 45 unauthored A inventories contain 709 proposed items
in all, with a largest A page of 31. The 709 item ids and 19 enrichment page ids
have no internal duplicate or exact collision with live item/page ids.

**Disk reconciliation and stale claims corrected.** CA-1's A **and** companion
pages are authored (28 and 13 items); CA-2 onward and SC-1 onward have empty
`items[]` arrays and are plans. The old absolute orders and historical item
totals are retired. The former continuous subharmonic/psh convention, the
unregularised Perron supremum, the claim that Perron costs no choice, the
Hankel-only zeta route, the partial Hartogs convention, and the old denials of
Hardy, distributional potential, elliptic/modular, abstract-surface and
$\bar\partial$/Levi theory have all been corrected. A later unsupported
withdrawal of Cartan--Thullen's exact polydisc boundary-radius equality was
also reversed after checking Lebl §2.5, Theorem 2.5.2. The disk file
`items/rem-riemann-surface-of-log.md` is orphaned from `plan-spec.json`; it is
not called published and remains subject to the un-deferral procedure.

**Full texts obtained.** The corpus includes complete copies of Ahlfors and
Stein--Shakarchi (the requested standard primaries), the open textbooks of
Weber and Howell--Mathews, and complete texts/notes by Axler--Bourdon--Ramey,
Schlag, Romik, Milne, McMullen, Looijenga, Bishop, Lyubich, Lebl, Demailly,
Boas, Garrett, the CIMAT notes, Błocki, Freitag, Garnett, Saff, Khoruzhenko,
Srivastava, Ryzhik, Eremenko, and Goldberg--Ostrovskii, together with the
complete Ahlfors--Beurling primary paper. Exact read ranges, harvested
headings, dispositions and working URLs appear in the canonical-coverage
section; every pair has two independent treatments in the pair-backing
matrix.

**Seams consumed.** This track cites rather than re-mints the measure track's
Lebesgue/$L^p$/Radon/maximal/differentiation machinery; the functional track's
Hilbert, Fourier, Poisson-summation, distributions and weak-compactness
interfaces; the PDE track's $\mathbb R^n$ harmonic/elliptic theory; and the
topology track's compactification, covering, homotopy and fundamental-group
interfaces. The new abstract-surface/$\bar\partial$ pairs additionally cite
HA-1 for general chain/homology machinery and DG-2, DG-5, DG-11--DG-15 for
partitions, bundles, forms, Stokes and de Rham integration; those relative suppliers are
planned predecessors, not called published. The track restricts its harmonic
theory to the sharp plane case.

**Seams supplied or owed.** CA-21/CA-22 supply the later number-theory track
with the exact $\Gamma$ and $\zeta$ interface stated below, including Euler
product, meromorphic continuation, completed functional equation and
nonvanishing on $\Re s=1$, but no quantitative zero-free region; arithmetic
consequences and $L$-functions remain number theory's. PDE should cite CA-13,
CA-14, CA-HM-1 and CA-PT-1 for the $n=2$ holomorphic/harmonic dictionary and
planar boundary theory. Real analysis owes the $\mathbb C$ dictionary citation,
its missing algebra supplier and any A-page rehoming of branch examples;
algebra owes only reading-relative wording on its earlier FTA proof; topology
owes a non-load-bearing CA-7 winding reference; the deferred catalogue owes
the ordinary immutable-id reconciliation of the orphaned logarithm-surface
remark; every conformal boundary consumer owes a closure-homeomorphism
hypothesis; and the future complex build owes the corrected SC-2/SC-4/CA-21/
CA-22 dependency metadata. The numbered “Amendments” section records each
interface without editing another track.

**Unresolved forward interfaces.** A future build must (i) move the general
holomorphic-logarithm branch into CA-7 before CA-9 uses keyhole contours,
(ii) settle whether the $\mathbb C$ dictionary is homed on the complex
exponential page or CA-1, (iii) prove the improper-parameter-integral extension
needed by $\Gamma$, (iv) charge the exact inherited weak-choice strength of the
measure/Hilbert suppliers, (v) place the advanced RS/SC
enrichment after HA-1 and DG-2/DG-5/DG-11--DG-15 rather than treating those
scaffolds as already authored, and (vi) require a homeomorphic
extension to the closures whenever boundary data or harmonic measure are
transported pointwise. None is silently load-bearing here.

**Scope denials.** Arithmetic consequences of $\zeta$ and modular forms
(number theory); general coherent sheaves/Cartan A--B/Stein spaces and global
analytic-space dimension, Remmert, resolution (complex analytic geometry);
higher CR and full $\bar\partial$-Neumann regularity (CR/PDE); Teichmüller and
parameter-dependent quasiconformal deformation (geometry/dynamics); full
Riemann existence, moduli/theta divisors and arithmetic Jacobians
(algebraic/moduli geometry); de Branges (research-scale proof); unrestricted
Jordan correspondence and prime ends (missing topology compactification);
Mergelyan/Arakelian (a separate non-load-bearing approximation pair);
Brownian harmonic measure (no stochastic-process supplier); Wiener/Kellogg,
fine/weighted potential theory and obstacles (a separate potential pair);
Carleson/corona/interpolation, model spaces and singular-integral Hardy theory
(operator/harmonic analysis); and Cartan--Nevanlinna theory for projective
curves (projective complex geometry) are denied for those specific homes or
prerequisite reasons. **Blockers: none.**

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

Two more places touch $\mathbb{C}$:
`inner-product-spaces-and-orthogonality` builds the **Hermitian inner product**
on a complex vector space, and
`the-spectral-theorem-and-singular-value-decomposition` builds the complex
spectral theorem. The page `algebraic-extensions-degree-and-finite-fields` is
where "a finite subgroup of the multiplicative group of a field is cyclic"
lives, which is what makes $\mu_n$ a cyclic group.

### Consequence for the representation-theory scaffolder (asked for explicitly)

> **Historical seam note.** The conclusion (“representation theory does not
> depend on this track”) remains valid. The obsolete 2026-07-28 locators have
> been replaced below by stable page ids; live `plan-spec.json` governs
> placement.

**This track provides representation theory with nothing it needs, and rep
theory must not wait on it.** Everything a character-theoretic representation
track wants from $\mathbb{C}$ is already supplied or planned below it:

- **a field**, with conjugation and modulus:
  `field-extensions-and-the-complex-numbers`;
- **algebraically closed**, hence "every operator on a nonzero
  finite-dimensional complex space has an eigenvalue":
  `the-fundamental-theorem-of-algebra` (and the operator statement is on
  `the-spectral-theorem-and-singular-value-decomposition`);
- **characteristic $0$**, so $\lvert G\rvert$ is invertible:
  `field-extensions-and-the-complex-numbers` plus its prime-field material;
- **roots of unity** as an abstract cyclic group of order $n$ (for character
  values, $\mu_n \subseteq \mathbb{C}^\times$):
  `algebraic-extensions-degree-and-finite-fields` via the
  cyclic-finite-subgroup theorem, with the explicit $e^{2\pi i k/n}$ form on
  `the-complex-exponential-and-eulers-formula`;
- **a Hermitian inner product** and unitarity:
  `inner-product-spaces-and-orthogonality`;
- the **spectral theorem** for normal/unitary operators:
  `the-spectral-theorem-and-singular-value-decomposition`.

A representation-theory block therefore places naturally after those
suppliers, and its `requires` should name their page ids — **never a page from
this file**. The one caveat: if that track wants
character values written as explicit complex exponentials, or wants
$\lvert \chi(g)\rvert \le \chi(1)$ argued from the triangle inequality in polar
form, it needs `the-complex-exponential-and-eulers-formula` as well.

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
| homological algebra: HA-1 `chain-complexes-and-homology` | general chain complexes, cycles, boundaries and homology used by period lattices; CA-RS proves only the surface-specific symplectic basis and analytic consequences. |
| differential geometry: DG-2, DG-5, DG-11, DG-12, DG-14 and DG-15 | smooth partitions, line bundles, tensor/exterior forms, exterior derivative, integration/Stokes and de Rham homotopy invariance used to globalise $\bar\partial$ and period integration on abstract surfaces. These planned pages must precede the dependent enrichment pairs. |

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
  CA-1 … CA-10 free of the later homotopy/fundamental-group pages, which is
  what makes CX-D2 cheap.
- The homotopy form (a null-homotopic cycle has vanishing integral) is then a
  **corollary** at CA-20, once `the-fundamental-group` is available, together
  with the monodromy theorem. Deriving homology-from-homotopy is easy; the
  reverse is not, and taking homotopy as primary would drag the whole spine
  behind that supplier for no gain.
- Nothing in the track is proved twice. The homotopy form appears once, as a
  named corollary, with the agreement remark the library requires.

**CX-D5. Contour integrals over piecewise-$C^1$ paths are primary; the
rectifiable/Riemann–Stieltjes version is a single generalisation theorem.**
Answering the prerequisites question directly:

- **Do `the-riemann-integral` and
  `properties-of-the-integral-and-the-working-ftc` suffice? YES**, for the primary
  definition. $\int_\gamma f\,dz := \int_a^b f(\gamma(t))\gamma'(t)\,dt$ for
  piecewise-$C^1$ $\gamma$ is a Riemann integral of a piecewise-continuous
  $\mathbb{C}$-valued function of a real variable — the first page gives
  integrability and the second gives linearity, additivity and the
  change-of-variables rule that discharges parametrisation-independence.
- **Do you also need a line integral over a rectifiable path? Not for any
  theorem in this track** — every statement is about piecewise-$C^1$ contours,
  and the two global Cauchy theorems, the residue theorem and the argument
  principle are all stated that way in Ahlfors and Stein–Shakarchi.
- **Where would rectifiability come from if wanted?** It exists:
  `bounded-variation-and-riemann-stieltjes` gives BV and the
  Riemann–Stieltjes integral; `arc-length-and-rectifiable-curves` proves
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
| CA-15 Montel, via the compactness theorem on `approximation-and-compactness-in-ck` | **AC$_\omega$/DC**, inherited | the diagonal subsequence extraction. **Inherit the supplier item's recorded cost; do not re-derive it.** Named in the Statement of Montel's theorem. |
| CA-16 Riemann mapping | **DC**, one use | a maximising sequence for the extremal problem, plus the Montel extraction. |
| CA-18 / CA-19 Weierstrass, Mittag-Leffler, Runge | **AC$_\omega$** at most | choosing a compact exhaustion and choosing one rational approximant per stage; a canonical exhaustion $K_n = \{z : \lvert z\rvert \le n,\ d(z,\partial\Omega)\ge 1/n\}$ makes both choice-free, and the pages must use it. |
| CA-14 Perron | **AC$_\omega$/DC** | The supremum itself is choice-free, but the standard proof chooses functions within $1/n$ of the envelope and then uses finite maxima, Poisson modifications and Harnack convergence. Charge the sequence choice honestly. |
| CA-13 Poisson, CA-9 residues, CA-7 Dixon, CA-1 … CA-6 | **none** | ZF. |
| SC-2 full Hartogs theorems | **ZF relative to integration** | The standard proof still uses Baire category on finite-dimensional separable Euclidean parameter space, where the supplier's BCT is ZF; Hartogs's lemma/Fatou then uses the ZF MT-8 interface. The cost disappears because this particular Baire theorem is choice-free, not because the Baire stage disappears. |
| SC-4 Cartan--Thullen construction | **DC/Baire cost inherited from the complete-metrizable function-space supplier** | The category space is $\mathcal O(\Omega)$ with its compact-open Fréchet metric, not finite-dimensional $\Omega$. Copy the supplier's exact charge, or use the sourced countable construction and charge its successive choices; do not label it ZF by analogy with SC-2. |
| CA-HP Hardy boundary subsequences and representing measures | **AC$_\omega$/DC, inherited** | Use the separability of $C(\mathbb T)$ and sequential weak-* extraction recorded by the measure/functional-analysis suppliers; do not invoke unrestricted Banach--Alaoglu. |
| CA-PT equilibrium measures | **AC$_\omega$/DC, inherited** | Probability measures on a compact metric set are handled by the supplier's sequential weak-* compactness. Canonical compact exhaustions avoid arbitrary set-indexed choices. |
| CA-HM harmonic measure | **inherited from Riesz--Markov** | Copy the exact MT-20 choice charge for representing a positive functional; the conformal and maximum-principle arguments add no choice. |
| CA-RS-2/3 finite-dimensional bases | **ZF** | Each space is proved finite dimensional before a basis is selected; finite choice is a theorem of ZF. |
| CA-RS-2 global Dolbeault/Čech resolution | **inherited from DG-2** | Copy the supplier's exact cost for a locally finite smooth partition of unity; compactness reduces covers to finite subcovers where applicable, but this scaffold does not silently relabel the global construction ZF. |
| CA-RS-4 uniformization | **DC, inherited** | Countable exhaustion, Dirichlet minimising sequences and normal-family extraction consume exactly the choice charged by the PDE, Hilbert-space and Montel interfaces. |
| CA-QC-1/2 compactness and measurable Riemann mapping | **DC, inherited** | The approximation/compactness proof repeatedly extracts subsequences and uses weak compactness in separable $L^p$ spaces. No full AC or Zorn argument is introduced. |
| SC-6 Hörmander minimisers | **choice inherited from the Hilbert-space projection/weak-compactness items** | The scaffold must copy the exact supplier strength at build time; it may not relabel the result ZF merely because the minimiser is unique. |
| SC-5 / SC-8 local integral and hypersurface theory | **ZF relative to prerequisites** | Coordinate formulas, finite preparation and canonical cutoffs/exhaustions introduce no new choice. |
| SC-7 Bergman/Szegő Hilbert representations | **choice inherited from Hilbert Riesz/projection** | Use a fixed countable dense sequence for basis expansions; do not appeal to existence of arbitrary Hilbert bases. |
| CA-EF, CA-MF, CA-NV and the finite classical core | **ZF relative to prerequisites** | Explicit series, finite-dimensional arguments and canonical exhaustions suffice. |

At authoring time every affected page copies its applicable row into Facts and
its proof rationale; pages whose exact inventory includes a reader-facing
`rem-…-choice-…` carry that item as well. The table itself is the track ledger:
no page silently upgrades an inherited result to ZF, and pages to which no row
applies say nothing about choice.

---

## Well-definedness obligations (CX-D10 req. 1)

Each row is a REQUIRED numbered item on its page, never a parenthetical, per
the WORKFLOW definition-justification rule. The heavy rows — 6, 8, 12, 18, 21,
22, 26 — are the ones the owner named by hand.

| # | page | the definition | what must be proved, as its own item |
|---|---|---|---|
| 1 | CA-1 | **the identification $\mathbb{C} = \mathbb{R}^2$** | `field-extensions-and-the-complex-numbers`, `rn-as-a-normed-space`, and `the-complex-exponential-and-eulers-formula` carry the SAME addition, the SAME modulus and the SAME metric. A dictionary item, not a restatement. Without it the library holds three $\mathbb{C}$'s that say nothing to each other — the canonical two-notions defect. |
| 2 | CA-1 | **the Wirtinger operators** $\partial_z, \partial_{\bar z}$ | for real-differentiable $f$, the total derivative from `the-total-derivative` is unique and is an $\mathbb{R}$-linear map $\mathbb{C}\to\mathbb{C}$; every such map is UNIQUELY $w \mapsto aw + b\bar w$; $\partial_z f := a$, $\partial_{\bar z} f := b$. Uniqueness of the decomposition is the obligation. |
| 3 | CA-1 | **conformal** (angle- and orientation-preserving) | the angle between two curves through a point is well defined (independent of the parametrisations), via `arc-length-and-rectifiable-curves`' reparametrisation lemmas and the inner products on `inner-product-spaces-and-orthogonality` and `rn-as-a-normed-space`. |
| 4 | CA-3 | the **$\mathbb{C}$-valued Riemann integral** $\int_a^b f$ | defined by real and imaginary parts; agrees with the integral on `the-riemann-integral` when $f$ is real-valued; linearity over $\mathbb{C}$ (not just $\mathbb{R}$); and $\lvert\int f\rvert \le \int\lvert f\rvert$, which needs the rotation trick and is NOT componentwise. |
| 5 | CA-3 | **the contour integral** $\int_\gamma f\,dz$ | **independence of the parametrisation**: if $\varphi$ is an increasing piecewise-$C^1$ bijection then $\int_{\gamma\circ\varphi} f = \int_\gamma f$ (cite the change-of-variables item on `properties-of-the-integral-and-the-working-ftc`). Plus additivity under subdivision and the sign under reversal. Owner-named. |
| 6 | CA-3 | the **length** of a contour | $\int_a^b\lvert\gamma'\rvert$ agrees with the supremal arc length on `arc-length-and-rectifiable-curves`. That page proves the $C^1$ case, so this is a citation plus the piecewise patch. |
| 7 | CA-5 | the **order of a zero** $m$ | not all derivatives vanish unless $f\equiv 0$ on the component (identity theorem), so a least $m$ exists; and the factorisation $f = (z-a)^m g$ with $g(a)\ne 0$ determines $m$ **uniquely**. Without uniqueness "the order" is not a phrase. |
| 8 | CA-7 | **the winding number** $n(\gamma, a)$ | THREE items: (a) $n(\gamma,a) := \frac{1}{2\pi i}\int_\gamma \frac{dz}{z-a}$ **is an integer** — via $h(t) = (\gamma(t)-a)\exp\!\big({-\int_{t_0}^{t}\gamma'/(\gamma-a)}\big)$ being constant, then $\ker\exp = 2\pi i\mathbb{Z}$ from `the-complex-exponential-and-eulers-formula`; (b) it is **constant on each connected component** of $\mathbb{C}\setminus\gamma^\ast$ (continuity plus integrality); (c) it is **$0$ on the unbounded component** (the ML estimate). Owner-named; this is the single most important row in the table. |
| 9 | CA-7 | **chains and cycles** | a chain is an element of the free abelian group on piecewise-$C^1$ paths in $\Omega$; $\int_\Gamma$ and $n(\Gamma, a)$ are well defined ON THE FREE GROUP, i.e. depend only on the formal sum and not on the list of paths chosen to represent it. Then "$\Gamma$ is null-homologous in $\Omega$" ($n(\Gamma,a)=0$ for every $a\notin\Omega$) is a property of the cycle. |
| 10 | CA-8 | **the Laurent expansion** in an annulus | **existence AND uniqueness** of $(a_n)_{n\in\mathbb{Z}}$ with $f(z) = \sum a_n (z-a)^n$ locally uniformly on $A(a; r, R)$. Uniqueness is a separate item (integrate against $(z-a)^{-n-1}$) and is what licenses the definite article in "the Laurent series", "the principal part", "the residue". Owner-named. |
| 11 | CA-8 | the **classification** of an isolated singularity | removable / pole of order $m$ / essential is **exhaustive and mutually exclusive**, and each case has an equivalent characterisation not mentioning the expansion (Riemann's removability criterion; $\lvert f\rvert\to\infty$; Casorati–Weierstrass). |
| 12 | CA-8 | **the residue** $\operatorname{Res}(f, a)$ | $:= a_{-1}$ of the unique Laurent expansion (row 10); the equivalent form $\frac{1}{2\pi i}\int_{\lvert z-a\rvert=r} f$ is **independent of $r$** for all small $r$, proved separately. If a residue at $\infty$ is used, its sign convention is its own `rem-`. Owner-named. |
| 13 | CA-11 | **the Riemann sphere** $\widehat{\mathbb{C}}$ | the one-point compactification from `compactness` of $\mathbb{C}$ is compact Hausdorff; **stereographic projection is a homeomorphism onto $S^2\subseteq\mathbb{R}^3$** using `the-topology-of-euclidean-space`; and the two charts $z$ and $1/z$ have **holomorphic transition map** $z\mapsto 1/z$ on the overlap — which is what licenses "holomorphic at $\infty$" and "meromorphic on $\widehat{\mathbb{C}}$". First instance of the owner's chart-compatibility obligation. |
| 14 | CA-11 | a **Möbius transformation** as a map of $\widehat{\mathbb{C}}$ | the values at $-d/c$ and $\infty$ are forced by continuity, so the extension is unique; $\mathrm{GL}_2(\mathbb{C}) \to \operatorname{M\ddot ob}$ is a surjective group homomorphism with kernel the scalars, so a Möbius map is well defined by its matrix **up to scalars** — the projective statement, proved, not asserted. |
| 15 | CA-11 | the **cross-ratio** | the unique Möbius map sending $(z_1,z_2,z_3)$ to $(0,1,\infty)$ exists and is unique — that uniqueness IS the well-definedness of $(z, z_1, z_2, z_3)$. |
| 16 | CA-12 | **a branch of $\arg$, and the branch cut** | $\arg$ is NOT a function. The obligations: a continuous argument exists on any simply connected $\Omega \subseteq \mathbb{C}\setminus\{0\}$; the **principal** $\operatorname{Arg}$ on $\mathbb{C}\setminus(-\infty,0]$ is single-valued and continuous, and the cut is what makes it so; any two continuous arguments on a connected $\Omega$ differ by a constant in $2\pi\mathbb{Z}$. **Check `the-complex-exponential-and-eulers-formula` first** — its authored items already give the pointwise principal logarithm and "no continuous logarithm on $\mathbb{C}\setminus\{0\}$"; cite those and prove here only the general-domain version. Do not re-mint. Owner-named. |
| 17 | CA-12 | **a holomorphic branch of $\log$** on a domain | existence on simply connected $\Omega$ with $0\notin\Omega$ (a primitive of $1/z$, normalised at one point); **uniqueness up to an additive constant in $2\pi i\mathbb{Z}$**; so "the" branch is only definite after a normalisation, which is stated where the symbol is introduced. |
| 18 | CA-12 | **$z^\alpha$** | $z^\alpha := \exp(\alpha \log z)$ inherits row 17 exactly: it is a function only after a branch is fixed, and different branches differ by $e^{2\pi i k\alpha}$. Plus TWO dictionary items: it agrees with the algebraic power when $\alpha\in\mathbb{Z}$ (`roots-and-rational-powers`) and with the real $x^\alpha$ for $x>0$ under the principal branch (`the-logarithm-and-general-powers`). Owner-named. |
| 19 | CA-13 | the **harmonic conjugate** | exists on a simply connected domain (a primitive again); **unique up to an additive real constant**; and $u + iv$ is then holomorphic. |
| 20 | CA-13 | **the** solution of the Dirichlet problem on the disc | the Poisson integral $P[u]$ is harmonic inside and extends continuously to the boundary datum; **uniqueness** by the maximum principle. Both halves are needed before the definite article. |
| 21 | CA-14 | **the Perron solution** | four items: the Perron family is nonempty; its pointwise supremum is finite (bounded by $\max\varphi$); the supremum is **harmonic** (harmonic modification by Poisson lifting, plus Harnack); and it attains the boundary value at $\zeta$ **iff there is a barrier at $\zeta$**. Only then is "the Perron solution of the Dirichlet problem on $\Omega$" a phrase. |
| 22 | CA-15 | the **topology of local uniform convergence** on $H(\Omega)$ | the metric built from a compact exhaustion is a metric; **different exhaustions give the same topology** (so "normal family" and "locally uniformly convergent" do not depend on the exhaustion); and $H(\Omega)$ is closed in $C(\Omega)$ (Weierstrass convergence, CA-5). |
| 23 | CA-18 | the **infinite product** $\prod(1+a_n)$ over $\mathbb{C}$ | reuse `def-infinite-product` on `absolute-convergence-and-rearrangement` and prove only the $\mathbb{C}$-specific clauses: at most finitely many factors vanish, the tail converges to a NONZERO limit, and the zero set of the product is the union of the zero sets with multiplicity. Do NOT re-mint the definition. |
| 24 | CA-18 | the **canonical product** and the genus | the elementary factors $E_p$ and the choice of $p_n$ making $\prod E_{p_n}(z/a_n)$ converge; and the honest limit: the Weierstrass factorisation is unique only **up to a factor $e^{g}$**, stated where defined rather than discovered later. |
| 25 | CA-20 | **the germ** of a holomorphic function at a point | "agree on some neighbourhood" is an equivalence relation; the stalk's ring operations are representative-independent. |
| 26 | CA-20 | **analytic continuation along a path** | the continuation of a germ along $\gamma$ is **independent of the admissible chain of discs and germs chosen** (the refinement/subdivision lemma). This is what licenses "**the** continuation of $f$ along $\gamma$"; the monodromy theorem is a further, different statement (independence of $\gamma$ within a homotopy class). Owner-named; the two must be separate items and in this order. |
| 27 | CA-20 | the **Riemann surface** of a complete analytic function | the sets $\{$germs at $w$ obtained from $g$ by continuation inside $D\}$ form a **basis** (cite the published `thm-basis-criterion`); each chart "germ $\mapsto$ its base point" is a homeomorphism onto a disc; the transition maps are **identities, hence holomorphic** — the charts are compatible. Only then is "the Riemann surface of $\log$" a space. Owner-named. |
| 28 | CA-21 | **$\Gamma$ on $\mathrm{Re}\,z>0$** | the improper integral converges locally uniformly using `improper-integrals` and is **holomorphic in $z$** — which needs its own lemma, *holomorphy of a parameter integral* (Morera plus `fubini-and-change-of-variables`), stated once and cited by CA-19, CA-21 and CA-22. |
| 29 | CA-21 | the **meromorphic continuation** of $\Gamma$ | $\Gamma(z) = \Gamma(z+n)/(z(z+1)\cdots(z+n-1))$ is independent of $n$, so the continuations agree on overlaps and define one function on $\mathbb{C}\setminus\{0,-1,-2,\dots\}$; uniqueness by the identity theorem. |
| 30 | CA-22 | the **continuation of $\zeta$** and the completed functions | first continue to $\Re s>0$ by the sum--integral correction and then to $\mathbb C$ by the split Mellin transform of $\theta(t)-1$; prove overlap agreement and uniqueness by the identity theorem. The eta identity is not divided through at the zeros of $1-2^{1-s}$ without a removability proof. Define $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ and $\xi(s)=\tfrac12s(s-1)\Lambda(s)$ separately and prove their domains and singularities before using either functional equation. |
| 31 | SC-1 | a **holomorphic map $\mathbb{C}^m \to \mathbb{C}^n$** | defined componentwise; the numbered obligation is that this is EQUIVALENT to the existence of a $\mathbb{C}$-linear total derivative $\mathbb{C}^m\to\mathbb{C}^n$ (cite uniqueness on `the-total-derivative`). This is the item that discharges the owner's $f:\mathbb{C}^m\to\mathbb{C}^n$ literally, and it is what lets the rest of the block work with $n=1$. |
| 32 | SC-1 | the **multivariable power series** $\sum_\alpha c_\alpha z^\alpha$ | the sum over the unordered index set $\mathbb{N}^m$ is well defined because the family is absolutely summable on compact subsets of the polydisc (cite the unordered-summation material on `absolute-convergence-and-rearrangement`, do not re-mint); and the coefficients are unique. |
| 33 | SC-3 | the **Weierstrass polynomial** | in $f = u\cdot W$ with $u$ a unit and $W$ a Weierstrass polynomial of degree $d$, both $u$ and $W$ are **unique**. Uniqueness is what licenses "the Weierstrass polynomial of $f$" and it is a separate item from existence. |
| 34 | SC-4 | the **holomorphically convex hull** $\widehat{E}_\Omega$ | define it for arbitrary $E\subset\Omega$ using extended suprema, so $\widehat{\widehat E}=\widehat E$ is well-formed; for compact $K$, prove the hull is closed in $\Omega$, coordinate-bounded and contains $K$. Relative compactness is an additional property required by holomorphic convexity, not a consequence of boundedness. |
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
| 48 | CA-PT-1 | logarithmic potentials and energy | truncated kernels define the extended integrals without an $\infty-\infty$ subtraction; $p_\mu=\int\log\lvert z-w\rvert d\mu$ and $U^\mu=-p_\mu$ are never conflated, and $\Delta p_\mu=2\pi\mu$. |
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
| 63 | SC-8 | local dimension of a hypersurface germ | the Krull dimension of $\mathcal O_{\mathbb C^n,p}/(f)$ is unchanged when the reduced equation is multiplied by a unit; the principal ideal theorem proves dimension $n-1$ componentwise, so “lower-dimensional singular locus” has a defined meaning before it is asserted. |

---

## Scope boundary after the 2026-08-14 enrichment (normative)

The finished measure-theory and functional-analysis scaffolds retire the old
denials of USC subharmonic theory, Hartogs separate analyticity and extension,
Hardy/Fatou theory, Poisson summation, distributions, analytic hypersurfaces, abstract
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
| de Branges's theorem | The Bieberbach conjecture is a research-scale proof. CA-16 keeps the area theorem, Bieberbach's $\lvert a_2\rvert\le2$, Koebe quarter and distortion theorems. |
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
| 3 | **Upper-semicontinuous subharmonic and plurisubharmonic function theory**; the Riesz decomposition; potential theory, capacity, equilibrium measures | the sub-mean-value inequality for a USC function is an inequality between integrals of USC functions | **Retired claim:** the old draft substituted continuity. CX-D6 and CA-14 now use the standard extended-valued USC definition, and CA-PT builds Riesz decomposition and capacity. |
| 4 | **The general Hartogs extension theorem (Kugelsatz)**: $f$ holomorphic on $\Omega\setminus K$ with $K \Subset \Omega$ compact and $\Omega\setminus K$ connected extends to $\Omega$ — **partial** | Ehrenpreis's proof solves $\bar\partial u = \varphi$ with compact support via the Cauchy–Pompeiu formula, which is a singular area integral | a dedicated $\bar\partial$ page. **Honest note: this may well be in scope** — the Cauchy–Pompeiu kernel $1/(\zeta - z)$ is improperly Riemann integrable in the plane after a polar change of variables (orders 175/177), and Green's theorem is at 181. It is not scaffolded because the estimates are delicate and nothing else needs it. **What IS scaffolded on SC-2**: extension across a **Hartogs figure**, by the one-variable Cauchy integral plus the identity theorem — fully elementary, and it is the version that exhibits the phenomenon. |
| 5 | **The Levi problem** (pseudoconvex $\Rightarrow$ domain of holomorphy) | Oka's solution, or Hörmander's $\bar\partial$ with $L^2$ estimates | **Retired claim:** SC-6 now supplies the Hörmander estimate and Levi problem; SC-4 supplies only the definitions and the directions proved before that input. |
| 6 | **Coherent analytic sheaves**, Oka's coherence theorem, Cartan's Theorems A and B, sheaf cohomology, the Dolbeault isomorphism | a sheaf-theory track the library does not have and does not plan | a sheaves-and-cohomology track. |
| 7 | **CR geometry**: CR functions, their approximation and extension, the Lewy example | rests on rows 4 and 6 | a $\bar\partial$/CR page after row 4. |
| 8 | **Analytic sets** beyond Weierstrass preparation: the local parametrisation theorem, Remmert–Stein, dimension theory of analytic sets | needs row 6 | as row 6. **What IS scaffolded on SC-3**: Weierstrass preparation and division, and the corollary that $\mathcal{O}_m$ is a UFD (via Gauss's lemma, order 46). |
| 9 | **Abstract Riemann surfaces**; the uniformisation theorem; Riemann–Roch | a manifolds/sheaves track | **Retired claim:** CA-RS-1--CA-RS-4 now build the surface machinery, Riemann--Roch, Jacobians and uniformisation; CA-20 remains only the concrete germ-space precursor. |
| 10 | **Carathéodory's boundary-correspondence theorem** for the Riemann map of a Jordan domain | needs the **Jordan curve theorem**, which the topology track itself denies (`rem-jordan-curve-theorem`, ‡) | a homology track, per `plan-topology-set-theory-track.md` denial 5. The RMT itself is fully proved at CA-16; only the boundary behaviour drops. |
| 11 | **Hardy spaces $H^p$**, boundary values, Fatou's radial-limit theorem, the F.\ and M.\ Riesz theorem, the Bergman kernel | rows 1 and functional analysis | rows 1 + `deferred-functional-analysis`. |
| 12 | **The Fourier transform on $\mathbb{C}$; Paley–Wiener; Poisson summation** (Stein–Shakarchi ch. 4) | row 1 | **Retired claim:** FA-23/FA-25 now supply Poisson summation, and CA-22 uses the theta--Mellin route. The Hankel formula remains only on CA-21 for reciprocal gamma. |
| 13 | **Elliptic functions**, $\wp$, elliptic curves, modular forms, the modular function $\lambda$ | not commissioned | **Retired claim:** CA-EF-1 and CA-MF-1 now build this theory. CA-23 remains mandatory and uses its independently sourced Bloch--Landau--Schottky route; no important theorem is dropped for proof ergonomics. |
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
| `fs-negative-has-square-root` (published item) | `roots-and-rational-powers` | **check at authoring time.** It is a true false-statement *about $\mathbb{R}$*. Its Remarks may contain a claim about $\mathbb{C}$ that `field-extensions-and-the-complex-numbers` already falsifies and CA-1 falsifies again. Published-claim decay; sweep it. | — |

---

## Amendments to existing scaffolds (addressed to Alpha; this file never writes them)

1. **`plan-realanalysis-pages.md` §RA-33
   (`the-complex-exponential-and-eulers-formula`).** Its inventory opens
   "C as R^2; modulus, conjugate" — but
   `field-extensions-and-the-complex-numbers` now defines $\mathbb{C}$,
   the modulus and conjugation algebraically, and RA-33 sits above it. RA-33 must
   **cite** that page and add only the metric/topological/analytic structure,
   with the dictionary item of well-definedness row 1 homed on CA-1. **Applied
   2026-08-14 under R-8:** the already-authored
   `rem-complex-plane-euclidean-dictionary` is the unique $\mathbb C\cong
   \mathbb R^2$ agreement item; RA-33 cites it and does not mint a rival.
2. **`plan-realanalysis-pages.md` §RA-33 — applied 2026-08-14.** Its
   `requires` now includes `field-extensions-and-the-complex-numbers`.
3. **`plan-realanalysis-pages.md` §RA-33 B page.** It plans "sin is unbounded
   on the imaginary axis", "$i^i$ is real", "$\log(-1)$ is multivalued",
   "$(z^a)^b \ne z^{ab}$", "the fifth roots of unity". **B pages are leaves**,
   so CA-2 and CA-12 may not cite any of them. Either move the ones this track
   needs onto the A page `the-complex-exponential-and-eulers-formula`, or accept
   that CA-2/CA-12 rebuild them with an
   agreement remark. Recommendation: move **$(z^a)^b \ne z^{ab}$** and
   **$\log(-1)$ multivalued** to the A page, since well-definedness rows 17 and
   18 want them as citable statements.
4. **`plan-algebra-track.md` §X-1
   (`the-fundamental-theorem-of-algebra`).** Its Traps say the analytic
   minimum-modulus proof "is **not** available here". That is true on X-1
   and must stay in the reading-relative form; but once CA-5 exists the sentence
   risks reading as a claim about the library. Alpha rewords to
   "not available **at this point in the reading order**", the form LEVELS.md
   §10b says survived level 9 untouched.
5. **`plan-topology-track.md` §T5 (`compactness`).** This track
   depends on the **one-point (Alexandroff) compactification** and on "a
   continuous bijection from compact to Hausdorff is a homeomorphism", both
   already listed there. No change needed — recorded so CA-11's `requires` is
   not questioned.
6. **`plan-topology-set-theory-track.md` §HT-7.** Its Traps already
   anticipate "the analysis winding items live on pages whose state must be
   checked at authoring time". Those pages now exist in plan: the winding
   number is **CA-7**, which follows HT-7. So HT-7's winding-number dictionary
   must remain **Remarks-only orientation with no dependency**, or become a
   declared `forward_refs` to CA-7. It cannot be load-bearing.
   Symmetrically, CA-7 carries the backward citation and the agreement remark.
7. **Deferred/topology catalogue.** `items/rem-riemann-surface-of-log.md`
   exists on disk but is not homed by any nonempty `items[]` array and is
   therefore not published. Do not cite it as an established result. Once
   CA-20 and the covering-space interfaces are authored, reconcile or alias it
   through the ordinary immutable-id un-deferral procedure.
8. **`plan-pde-track.md`, harmonic pages. Applied 2026-08-14 under R-2.** Keep the $\mathbb R^n$ theory there
   and cite CA-13/CA-14/CA-HM-1/CA-PT-1 for the $n=2$ holomorphic-conjugate,
   conformal-invariance, Perron boundary and logarithmic-potential dictionary.
   No general-dimensional theorem is to be re-minted here. Conversely CA-13,
   CA-14, CA-HM-1 and CA-PT-1 cite PDE-3/PDE-4/PDE-6 for the dimension-uniform
   mean-value, Harnack, fundamental-solution and elliptic statements. Those
   statements retain $n=2$; this file supplies only the sharper holomorphic
   plane arguments.
9. **Later number-theory scaffold.** Cite the function-theoretic supplier
   contract under CA-22 for the Euler product, continuation, the two functional
   equations, $\xi$, trivial/nontrivial zero region and the qualitative
   zero-free line. Do not rederive them; do not assume a quantitative zero-free
   region that this track does not promise.
10. **Topology/conformal-boundary seam — applied 2026-08-14.** Any later scaffold transporting
    continuous boundary data or Euclidean-boundary harmonic measure through a
    conformal map must require a homeomorphic extension to closures. A general
    prime-end/Carathéodory statement is not supplied by the present topology
    track and must remain a declared forward reference or scope denial.
11. **Applied at scaffold level 2026-08-14 — future reconciliation of the live complex-analysis page metadata.** The
    page objects already exist, but their current `requires` fields predate this
    enrichment. At the future build, replace them with the stable page-id and
    relative-supplier lists declared in each section below: in particular,
    SC-2 adds CA-14 and MT-8, SC-4 adds CA-18/CA-19, CA-21 adds MT-11, and
    CA-22 adds the FA-23/FA-25 theta--Poisson suppliers. This commission does
    not edit `research/plan-spec.json`.

---

# The pages

Format per page: relative label, category, `requires` (direct; Beta computes the
closure), DEFS / THMS / FS, then B and CEX (both homed on the examples
companion), traps, and an explicit forward-reference statement. Item ids are
suggestions for step 1, not commitments, except where a well-definedness row
fixes one. Every A page has its `-examples` companion at the next order.
**B pages are leaves: nothing outside a B page may cite an item homed there.**
`validate-plan` warns above 30 items; most A inventories here land at 14--30
and B pages at 8--16. CA-14 has 31 indispensable, source-backed items; the hard
commission rule is a split above 60, never deletion for ergonomics.

Category for every page below: **`complex-analysis`** (CX-D3).

**Inherited-locator note.** Residual phrases of the form “order $N$” inside
the 2026-07-28 page prose are audit breadcrumbs only. They are not proposed
orders or dependency identifiers; every `requires` entry and future item must
use the adjacent named page id, the relative CA/SC label, or a reconciled
supplier label. This enrichment introduces no new numeric locator.

**Component-provenance contract for every unauthored item in the original
spine.** Each definition/theorem statement is `literature-derived` from the
page's exact source ranges and canonical-harvest dispositions. Definition and
mathematical-remark proofs are `not-applicable`; supplied theorem proofs are
`literature-derived` when the cited route is followed verbatim in substance,
or `ai-altered` only when notation, dependency order or normalization is
adapted, with that adaptation named in the rationale. A sourced construction
on a companion stays `literature-derived`; an elementary newly composed
example/counterexample is `ai-generated`, must be counterexample-checked, and
may never be a dependency target. A false-statement item records the provenance
of its deliberately false wording and of its refutation separately; a newly
composed one is `ai-generated`, is mechanically or mathematically refuted in
the same item, and is never a dependency target. No load-bearing statement is
`ai-generated`. The authored CA-1 pair keeps its actual per-item metadata and
is not overwritten by this scaffold.

---

## CA-1. Complex Differentiability and the Cauchy–Riemann Equations

`requires`: `the-complex-exponential-and-eulers-formula`,
`field-extensions-and-the-complex-numbers`, `the-total-derivative`,
`the-topology-of-euclidean-space`

Pair sources (exact harvested locators): Ahlfors Ch. 2 §§1.1--1.4 and Ch. 3
§§2.2--2.3 (limits/continuity, analytic functions, polynomials, rational
functions and conformal mapping); Stein--Shakarchi Ch. 1, “Functions”
(“Continuity,” “Holomorphic functions”); Howell--Mathews Ch. 3 §§3.1--3.3
(“Differentiable and analytic functions,” “Cauchy--Riemann equations,”
“Harmonic functions”).

Published A-page inventory (verified from live `items[]`; 28 immutable items):

| id | kind | one-line statement |
|---|---|---|
| `rem-complex-plane-euclidean-dictionary` | rem | Identify $\mathbb C=\mathbb R[x]/(x^2+1)$ with the Euclidean plane and a normed real algebra, and state exactly what is preserved. |
| `def-complex-domain` | def | A complex domain is a nonempty connected open subset of $\mathbb C$. |
| `def-complex-differentiability-holomorphic-and-entire` | def | Define complex differentiability at a point, the complex derivative, holomorphic functions and entire functions. |
| `lem-uniqueness-of-the-complex-derivative` | lem | The complex derivative at a point is unique. |
| `def-wirtinger-derivatives` | def | Define $\partial_zf$, $\partial_{\bar z}f$ and antiholomorphic functions. |
| `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` | thm | Complex differentiability is equivalent to a complex-linear real total derivative, to $\partial_{\bar z}f=0$, and to real differentiability plus Cauchy--Riemann. |
| `cor-complex-differentiability-implies-continuity` | cor | Complex differentiability at a point implies continuity there. |
| `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic` | thm | Continuous first partials satisfying Cauchy--Riemann give complex differentiability pointwise and holomorphy on an open set. |
| `cor-cartesian-and-polar-cauchy-riemann-equations` | cor | Cartesian and polar forms of the Cauchy--Riemann equations agree away from the origin. |
| `thm-algebra-of-complex-derivatives` | thm | Complex derivatives obey the linearity, product, reciprocal and quotient rules. |
| `thm-chain-rule-for-complex-derivatives` | thm | Complex derivatives obey the chain rule. |
| `thm-wirtinger-chain-rule-for-real-differentiable-maps` | thm | Wirtinger derivatives obey the chain rule for real-differentiable complex-valued maps. |
| `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps` | thm | A conjugate difference quotient characterizes antiholomorphic maps. |
| `cor-continuous-complex-derivative-gives-c1-components` | cor | A holomorphic function with continuous complex derivative has $C^1$ real and imaginary components. |
| `thm-derivative-of-a-continuous-complex-local-inverse` | thm | A continuous local inverse has derivative reciprocal to a nonzero complex derivative. |
| `thm-complex-polynomials-and-rational-functions-are-holomorphic` | thm | Complex polynomials are entire with the power-rule derivative, and rational functions are holomorphic off their denominator zeros. |
| `thm-complex-exponential-is-entire-with-derivative-itself` | thm | The complex exponential is entire and is its own derivative. |
| `thm-zero-complex-derivative-on-a-domain-implies-constant` | thm | A holomorphic function with zero derivative on a domain is constant. |
| `cor-real-valued-holomorphic-function-is-constant` | cor | A real-valued holomorphic function on a domain is constant. |
| `cor-constant-modulus-holomorphic-function-is-constant` | cor | A holomorphic function of constant modulus on a domain is constant. |
| `cor-holomorphic-function-with-holomorphic-conjugate-is-constant` | cor | If both $f$ and $\bar f$ are holomorphic on a domain, then $f$ is constant. |
| `def-oriented-conformal-map-at-a-point` | def | Define orientation-preserving conformality for a real-differentiable complex map at a point. |
| `lem-oriented-similarities-are-nonzero-complex-multiplications` | lem | Plane similarities are complex or conjugate-complex multiplications; the orientation-preserving ones are exactly nonzero complex multiplications. |
| `thm-nonzero-complex-derivative-iff-oriented-conformal` | thm | A real-differentiable complex map is orientation-preserving conformal at a point iff it is complex differentiable there with nonzero derivative. |
| `cor-jacobian-determinant-of-a-holomorphic-map` | cor | The Jacobian determinant of a holomorphic map is $\lvert f'\rvert^2$ and is positive exactly where $f'\ne0$. |
| `thm-c2-holomorphic-components-are-harmonic` | thm | The $C^2$ real and imaginary parts of a holomorphic function satisfy Laplace's equation and form a harmonic-conjugate pair. |
| `thm-c2-holomorphic-function-has-holomorphic-derivative` | thm | A holomorphic function with $C^2$ components has a holomorphic derivative. |
| `cor-c2-holomorphic-components-have-nonpositive-hessian-determinant` | cor | Each $C^2$ holomorphic component has nonpositive Hessian determinant; a nondegenerate critical point is a saddle. |

Published B/examples companion (verified from live `items[]`; 13 immutable
items):

| id | kind | one-line statement |
|---|---|---|
| `ex-square-function-from-the-complex-difference-quotient` | ex | Directly from the difference quotient, $z\mapsto z^2$ is entire with derivative $2z$. |
| `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form` | ex | The complex exponential satisfies Cauchy--Riemann in Cartesian and polar form. |
| `ex-reciprocal-function-from-the-complex-difference-quotient` | ex | Directly from the difference quotient, $z\mapsto1/z$ is holomorphic off $0$ with derivative $-1/z^2$. |
| `ex-mobius-map-is-conformal-off-its-pole` | ex | A Möbius map $(az+b)/(cz+d)$ with $ad-bc\ne0$ is conformal wherever $cz+d\ne0$. |
| `ex-square-map-sends-a-grid-to-orthogonal-parabolas` | ex | The square map sends a Cartesian grid to orthogonal parabolic families away from its critical point. |
| `fs-real-differentiability-implies-complex-differentiability` | fs | Real differentiability does not imply complex differentiability; conjugation is the counterexample. |
| `cex-modulus-squared-is-complex-differentiable-only-at-zero` | cex | $z\mapsto\lvert z\rvert^2$ is complex differentiable exactly at $0$ but holomorphic on no neighbourhood of it. |
| `cex-real-part-is-nowhere-complex-differentiable` | cex | $z\mapsto\operatorname{Re}z$ is real differentiable but nowhere complex differentiable. |
| `cex-modulus-is-nowhere-complex-differentiable` | cex | $z\mapsto\lvert z\rvert$ is nowhere complex differentiable. |
| `ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere` | ex | $x^3+3xy^2+i(y^3+3x^2y)$ is complex differentiable exactly on the coordinate axes and holomorphic nowhere. |
| `fs-cauchy-riemann-at-a-point-implies-complex-differentiability` | fs | Cauchy--Riemann at one point does not imply complex differentiability there. |
| `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy` | fs | Existence of partials satisfying Cauchy--Riemann everywhere need not imply holomorphy. |
| `fs-zero-complex-derivative-on-an-open-set-implies-constant` | fs | Zero complex derivative on an arbitrary, possibly disconnected, open set does not force global constancy. |

DEFS: the identification $\mathbb{C} = \mathbb{R}^2$ as a normed
$\mathbb{R}$-algebra (well-definedness #1 — a dictionary item, not a
restatement); **domain** (nonempty connected open subset of $\mathbb{C}$);
complex differentiability at a point and the derivative $f'(a)$;
**holomorphic** on an open set; **entire**; the **Wirtinger operators**
$\partial_z, \partial_{\bar z}$ (#2); **conformal** at a point (#3).

THMS: the derivative is unique; complex differentiable $\Rightarrow$ continuous;
the algebra of derivatives (sum, product, quotient, chain rule, inverse) — each
citing `the-derivative-and-mean-value-theorems` only where the argument is identical, and proved
where it is not; polynomials are entire and rational functions are holomorphic
off their poles; **complex differentiable at $a$ $\iff$ real differentiable at
$a$ with a $\mathbb{C}$-linear total derivative $\iff$
$\partial_{\bar z}f(a) = 0$ $\iff$ the CAUCHY–RIEMANN equations
$u_x = v_y,\ u_y = -v_x$ hold at $a$ together with real differentiability**
(landmark — the four-way equivalence, one item, with the real derivative coming
from `the-total-derivative`); the **$C^1$ converse**: continuous partials on an open set plus CR
$\Rightarrow$ holomorphic (cites `the-total-derivative`'s "continuous partials imply
differentiability"); $f' \equiv 0$ on a **domain** $\Rightarrow$ $f$ constant
(cite `connectedness` and `the-topology-of-euclidean-space` — the hypothesis is
where the page's only topology enters);
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
defect on the page). (iii) $\mathbb{C}$ is not ordered — cite the existing
false-statement treatment on `field-extensions-and-the-complex-numbers`; do
not re-mint it. (iv) The identification #1 is not a formality: the algebraic
modulus on that page and the Euclidean norm on `rn-as-a-normed-space` must be
shown equal before a single estimate is written.

Forward references: NONE load-bearing. None expected.

## CA-2. Complex Power Series and Analytic Functions

`requires`: CA-1, `power-series-and-real-analytic-functions`,
`absolute-convergence-and-rearrangement`,
`uniform-convergence-of-functions`

Pair sources (exact harvested locators): Ahlfors Ch. 2 §§2.1--2.5
(“Sequences” through “Abel's Limit Theorem”); Stein--Shakarchi Ch. 1,
“Functions” (“Holomorphic functions,” “Power series”); Weber Ch. 1,
“Holomorphic Functions” and “Goursat's Theorem.”

Proposed A-page inventory (dependency order; 20 items):

| id | kind | one-line statement |
|---|---|---|
| `def-analytic-function-complex-domain` | def | A function is analytic on an open set exactly when it has a convergent complex power-series representation near every point. |
| `thm-complex-power-series-converge-locally-uniformly` | thm | A complex power series converges absolutely and uniformly on every closed subdisc inside its published radius of convergence. |
| `thm-derived-complex-power-series-same-radius` | thm | The formally derived complex power series has the same radius of convergence as the original series. |
| `thm-termwise-differentiation-complex-power-series` | thm | Inside the convergence disc the sum is holomorphic and its derivative is the derived series. |
| `cor-complex-power-series-are-infinitely-holomorphic` | cor | Repeated termwise differentiation supplies all complex derivatives. |
| `thm-complex-power-series-coefficient-formula` | thm | The coefficient of $(z-a)^n$ is $f^{(n)}(a)/n!$. |
| `cor-uniqueness-complex-power-series-coefficients` | cor | Two series agreeing near their common centre have identical coefficients. |
| `thm-analytic-functions-are-holomorphic` | thm | Local power-series representability implies holomorphy. |
| `thm-reexpansion-complex-power-series` | thm | A series centred at $a$ re-expands about $b$ and equals the same function at least on $D(b,R-\lvert b-a\rvert)$. |
| `thm-sums-and-scalars-of-complex-power-series` | thm | Termwise linear combinations represent the corresponding functions on the common disc. |
| `thm-cauchy-products-of-complex-power-series` | thm | The Cauchy product represents the product function on the common disc. |
| `thm-reciprocal-complex-power-series` | thm | If the value at the centre is nonzero, the reciprocal has a unique power-series expansion on some centred disc. |
| `thm-composition-complex-power-series` | thm | Under the explicit image-in-convergence-disc hypothesis, coefficient substitution converges locally and represents the composite. |
| `cor-complex-power-series-have-local-primitives` | cor | Dividing coefficients by $n+1$ constructs a local primitive. |
| `thm-complex-trigonometric-hyperbolic-power-series` | thm | The published exponential definitions agree with the standard entire sine, cosine, hyperbolic-sine and hyperbolic-cosine series. |
| `thm-complex-trigonometric-derivatives` | thm | The four complex trigonometric and hyperbolic functions have their standard derivatives. |
| `thm-complex-trigonometric-addition-formulas` | thm | The standard addition identities hold for all complex arguments. |
| `thm-complex-sine-cosine-zero-sets` | thm | $\sin z=0$ exactly on $\pi\mathbb Z$ and $\cos z=0$ exactly on $\pi/2+\pi\mathbb Z$. |
| `thm-complex-sine-and-cosine-are-unbounded` | thm | Both functions are unbounded on $\mathbb C$, as their imaginary-axis values show. |
| `thm-abel-limit-theorem-complex-power-series` | thm | If $\sum c_n$ converges, then $\sum c_nz^n$ tends to its sum as $z\to1$ within every fixed Stolz region. |

DEFS: a formal power series over $\mathbb{C}$ and its **radius of convergence**
(cite the complex Cauchy–Hadamard item on
`the-complex-exponential-and-eulers-formula`, do not re-mint); the disc of convergence;
**analytic** on an open set (locally the sum of a convergent power series);
the complex $\sin, \cos, \sinh, \cosh$ by their series.

THMS: absolute convergence inside the disc, divergence outside, **locally
uniform** convergence on compact subsets but **not** on the open disc in
general (cite `uniform-convergence-of-functions`); the derived series has the same radius; **termwise
differentiation**: the sum is holomorphic on the open disc with the derived
series as derivative (landmark), hence $C^\infty$ there; the **coefficient
formula** $c_n = f^{(n)}(a)/n!$; **uniqueness of the coefficients**;
**analytic $\Rightarrow$ holomorphic** (landmark; the converse waits for CA-5,
and the page says so in the order-relative form); **re-expansion about an
interior point**, with the radius bound $R - \lvert b-a\rvert$ — this is the
item that makes analyticity a LOCAL property and is what CA-5's identity theorem
consumes; sums, products (Cauchy product, from
`absolute-convergence-and-rearrangement`), reciprocals and
compositions of power series; $\exp$, $\sin$, $\cos$ are entire; the addition
formulas by the Cauchy product (agreement remark with
`the-complex-exponential-and-eulers-formula`, which proves them by a different
route); the **zero sets**: $\sin z = 0 \iff z\in\pi\mathbb{Z}$ and
$\cos z = 0 \iff z\in \pi/2 + \pi\mathbb{Z}$ — no non-real zeros, proved here
because the residue calculus of CA-9 needs it; $\lvert\sin\rvert$ and
$\lvert\cos\rvert$ are unbounded on $\mathbb{C}$; **Abel's limit theorem** over
$\mathbb{C}$, on a Stolz angle (cite the real version on
`power-series-and-real-analytic-functions`; the complex statement is genuinely
different and must be proved).

FS: a power series converges uniformly on its open disc of convergence;
$\sin$ and $\cos$ are bounded on $\mathbb{C}$; every
$C^\infty$ function $\mathbb{C}\to\mathbb{C}$ (as a map of $\mathbb{R}^2$) is
analytic.

B: $\sum z^n$, $\sum z^n/n$, $\sum z^n/n^2$ with three different boundary
behaviours on $\lvert z\rvert=1$ (the complex refinement of the real
power-series page's triple);
$\sum z^{n!}$; re-expansion of $1/(1-z)$ about $i/2$ with its exact radius;
$\sin(iy) = i\sinh y$ computed.
CEX: $1/(1+z^2)$ is real-analytic on all of $\mathbb{R}$ with radius exactly
$1$ about $0$ — **the classical demonstration that the real radius of
convergence is explained only by the complex singularities** (this example is
why the page exists, and it answers a question the real power-series page could
pose but not answer); $e^{-1/x^2}$ on $\mathbb{R}$ is $C^\infty$ and
not analytic, and its complex extension shows why (cite the published
`cex-smooth-function-not-equal-to-its-maclaurin-series` on
`the-exponential-function-examples`).

Traps. (i) Do **not** re-mint Cauchy–Hadamard or the definition of a complex
series; `the-complex-exponential-and-eulers-formula` owns both. This page adds
differentiability, not convergence.
(ii) The zero sets of $\sin$ and $\cos$
need $\ker\exp = 2\pi i\mathbb{Z}$ from that page; cite it, do not redo the
periodicity analysis. (iii) "Analytic" and "holomorphic" are DIFFERENT words on
this page and stay different until CA-5 identifies them; a step that slides
between them here is the defect to hunt.

Forward references: NONE load-bearing. A Remarks-only pointer to CA-5 ("the
converse is proved at ...") is permitted, declared.

## CA-3. Contour Integration

`requires`: CA-1, `properties-of-the-integral-and-the-working-ftc`,
`arc-length-and-rectifiable-curves`,
`bounded-variation-and-riemann-stieltjes`

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§1.1--1.3 (“Line
Integrals,” “Rectifiable Arcs,” “Line Integrals as Functions of Arcs”);
Stein--Shakarchi Ch. 1, “Integration along curves”; Howell--Mathews Ch. 6
§§6.1--6.2 (“Complex integrals,” “Contours”).

Proposed A-page inventory (dependency order; 20 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-complex-valued-riemann-integral-dictionary` | rem | Identify the complex-valued integral with the published vector-valued integral under $\mathbb C\cong\mathbb R^2$, including the norm inequality. |
| `rem-complex-contour-and-length-dictionary` | rem | Specialise the published $\mathbb R^2$ path, reversal, concatenation, trace and arc-length notions rather than defining a second path theory. |
| `def-complex-contour-integral` | def | Define $\int_\gamma f\,dz=\int f(\gamma(t))\gamma'(t)\,dt$, summed over the smooth pieces. |
| `def-complex-absolute-line-integral` | def | Define $\int_\gamma f\,\lvert dz\rvert=\int f(\gamma(t))\lvert\gamma'(t)\rvert\,dt$ and distinguish it from the complex contour integral. |
| `def-complex-primitive-on-open-set` | def | A primitive of $f$ is a holomorphic $F$ with $F'=f$. |
| `lem-complex-contour-integral-partition-independence` | lem | The piecewise sum defining the contour integral is independent of the admissible subdivision. |
| `thm-linearity-complex-contour-integral` | thm | Contour integration is complex linear in the integrand. |
| `thm-reversal-and-concatenation-contour-integrals` | thm | Reversal negates a contour integral and concatenation adds the integrals. |
| `thm-complex-contour-integral-reparametrization-invariance` | thm | Orientation-preserving bijective piecewise-$C^1$ reparametrisation preserves the integral, while orientation reversal negates it. |
| `rem-complex-contour-length-agreement` | rem | Cite the published speed-integral/arc-length agreement for complex contours. |
| `thm-contour-integral-absolute-value-bound` | thm | $\lvert\int_\gamma f\,dz\rvert\le\int_\gamma\lvert f\rvert\,\lvert dz\rvert$. |
| `cor-ml-estimate-contour-integral` | cor | $\lvert\int_\gamma f\,dz\rvert\le \max_{\gamma^*}\lvert f\rvert\,L(\gamma)$. |
| `thm-fundamental-theorem-contour-integrals` | thm | If $F'=f$ near the trace, the integral equals $F(\gamma(b))-F(\gamma(a))$. |
| `cor-closed-contour-integral-of-derivative-vanishes` | cor | Every derivative integrates to zero around a closed contour. |
| `thm-primitive-path-independence-criterion` | thm | For continuous $f$ on a domain, a primitive exists exactly when closed-contour integrals vanish, equivalently when integrals depend only on endpoints. |
| `thm-uniform-limit-interchange-contour-integral` | thm | Uniform convergence on the contour trace permits passage of the limit through the integral. |
| `thm-circle-integral-integer-monomials` | thm | Around a positively oriented circle, $(z-a)^n$ integrates to $2\pi i$ for $n=-1$ and to $0$ for every other integer $n$. |
| `thm-riemann-stieltjes-and-piecewise-c1-contour-integrals-agree` | thm | The published rectifiable-path Riemann--Stieltjes integral agrees with the parametric definition on piecewise-$C^1$ contours. |

DEFS: the **$\mathbb{C}$-valued Riemann integral** of a continuous
$f : [a,b]\to\mathbb{C}$ (#4); **path** (continuous piecewise-$C^1$
$\gamma : [a,b]\to\mathbb{C}$), **contour**, closed contour, simple closed
contour, the trace $\gamma^\ast$, the reversal $\gamma^-$, the concatenation
$\gamma_1 * \gamma_2$; the **contour integral** $\int_\gamma f\,dz$ (#5); the
**length** $\ell(\gamma)$ (#6); $\int_\gamma f\,\lvert dz\rvert$; a **primitive**
of $f$ on an open set.

THMS: linearity in $f$; **additivity under concatenation** and the sign change
under reversal; **parametrisation independence** (#5, its own item);
$\ell(\gamma) = \int\lvert\gamma'\rvert$ agrees with the published arc length on
`arc-length-and-rectifiable-curves` (#6);
the **ML estimate** $\lvert\int_\gamma f\rvert \le \sup_{\gamma^\ast}\lvert
f\rvert\cdot\ell(\gamma)$ (landmark — the workhorse of the whole track);
$\lvert\int_a^b f\rvert \le \int_a^b\lvert f\rvert$ by the rotation trick (#4);
**the fundamental theorem for contour integrals**: if $F' = f$ on an open set
containing $\gamma^\ast$ then $\int_\gamma f = F(\gamma(b)) - F(\gamma(a))$
(landmark), hence $\int_\gamma f = 0$ for every closed $\gamma$; the **converse**:
a continuous $f$ on a domain has a primitive $\iff$ $\int_\gamma f = 0$ for
every closed contour in it $\iff$ $\int_\gamma f$ depends only on the endpoints
(landmark; the primitive is built by integrating along polygonal paths, using
`the-topology-of-euclidean-space`'s open-connected $\Rightarrow$ polygonally
connected theorem); **termwise integration** of a sequence converging uniformly
on $\gamma^\ast$ (cite `uniform-convergence-of-functions`);
**the fundamental computation** $\int_{\lvert z-a\rvert = r}(z-a)^n\,dz$ equals
$2\pi i$ if $n = -1$ and $0$ otherwise (landmark — everything downstream is this
computation plus an estimate); the **Riemann–Stieltjes definition** over a
rectifiable path and the theorem that the two definitions agree on
piecewise-$C^1$ paths (CX-D5; cite
`bounded-variation-and-riemann-stieltjes` and
`arc-length-and-rectifiable-curves`).

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
the item on `arc-length-and-rectifiable-curves` — cite, do not rebuild).

Traps. (i) Piecewise-$C^1$ means the derivative may jump at finitely many
points; every proof that integrates $\gamma'$ must handle the subdivision
explicitly, not silently. (ii) The rotation trick in #4 ($\lvert I\rvert =
e^{-i\theta}I$ for a suitable $\theta$) is the one step that is genuinely not
componentwise; a componentwise "proof" is wrong by a factor of $\sqrt2$ and is
the classic error here. (iii) The RS generalisation is ONE theorem, and nothing
else in the track may cite it — if a later page finds itself needing rectifiable
contours, that is a scaffolding error, not a licence. (iv) The vector-valued
integral, path operations, length and RS integral already exist; cite their
published item ids before minting anything.

Forward references: NONE load-bearing.

## CA-4. Goursat's Theorem and Cauchy's Theorem in a Convex Domain

`requires`: CA-3, CA-2, `rn-as-a-normed-space`

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§1.4--2.3 (“Cauchy's
Theorem for a Rectangle,” “Cauchy's Theorem in a Disk,” “The Integral
Formula,” “Higher Derivatives”); Stein--Shakarchi Ch. 2, “Goursat's theorem”
through “Cauchy's integral formulas”; Howell--Mathews Ch. 6 §§6.3--6.5
(“Cauchy--Goursat theorem,” “Fundamental theorem for integration,” “Integral
representations”).

Proposed A-page inventory (dependency order; 13 items):

| id | kind | one-line statement |
|---|---|---|
| `def-oriented-complex-triangle-and-boundary` | def | Define a complex triangle and its positively oriented piecewise-linear boundary. |
| `rem-plane-star-shaped-and-convex-dictionary` | rem | Specialise the published $\mathbb R^2$ star-shaped and convex notions rather than re-minting them. |
| `lem-goursat-four-triangle-boundary-cancellation` | lem | The oriented boundaries of the four quarter-triangles sum to the outer boundary, with all interior edges cancelling. |
| `lem-goursat-nested-triangle-selection` | lem | Select nested quarter-triangles retaining at least one quarter of the integral magnitude at each stage and having diameters tending to zero. |
| `thm-goursat-triangle-theorem` | thm | A holomorphic function integrates to zero around every compactly contained triangle, with no continuity assumption on its derivative. |
| `thm-goursat-theorem-one-exceptional-point` | thm | Continuity on the triangle and holomorphy except possibly at one point still force a zero boundary integral. |
| `thm-holomorphic-primitive-on-star-shaped-domain` | thm | Segment integration from a star centre constructs a primitive. |
| `cor-cauchy-theorem-star-shaped-domain` | cor | Every closed contour integral of a holomorphic function on a star-shaped domain vanishes. |
| `lem-cauchy-difference-quotient-exceptional-extension` | lem | Filling $(f(\zeta)-f(z))/(\zeta-z)$ continuously at $\zeta=z$ meets the one-exception theorem's exact hypotheses. |
| `thm-cauchy-integral-formula-circle` | thm | A compactly contained circle represents every holomorphic value in its interior. |
| `lem-differentiating-cauchy-integrals` | lem | A direct difference-quotient estimate justifies differentiation of the Cauchy kernel under a fixed contour. |
| `thm-cauchy-integral-formula-higher-derivatives` | thm | $f^{(n)}(z)=\frac{n!}{2\pi i}\int f(\zeta)/(\zeta-z)^{n+1}\,d\zeta$. |
| `cor-cauchy-inequalities` | cor | $\lvert f^{(n)}(a)\rvert\le n!M_r/r^n$ for every compactly contained circle. |

DEFS: the triangle $T$ with vertices $p,q,r$ and its boundary contour
$\partial T$; **star-shaped** and **convex** open subsets of $\mathbb{C}$ (cite
`convexity` and `rn-as-a-normed-space`; do not re-mint). No keyhole contour
belongs here; the filled difference quotient below is the exact exceptional
point construction.

THMS: **Goursat's theorem** (landmark): $f$ holomorphic on an open set
containing a closed triangle $T$ $\Rightarrow$ $\int_{\partial T} f = 0$ — by
repeated bisection into four triangles, a nested sequence of compact sets with
diameters $\to 0$ (completeness from
`the-complex-exponential-and-eulers-formula` and `rn-as-a-normed-space`; the
nested-set principle is `equivalent-forms-of-completeness`), and the differentiability
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
`equivalent-forms-of-completeness` rather than rebuilding the nested
interval principle in $\mathbb{C}$.

Forward references: NONE load-bearing.

## CA-5. Analyticity of Holomorphic Functions; Liouville and Morera

`requires`: CA-4, CA-2

Pair sources (exact harvested locators): Ahlfors Ch. 5 §§1.1--1.3
(“Weierstrass's Theorem,” “Taylor Series,” “Laurent Series”);
Stein--Shakarchi Ch. 2, “Applications” (“Morera,” “Sequences of holomorphic
functions,” “Holomorphic functions defined by integrals”); Weber Ch. 2
§§2.1--2.4 (“Cauchy Integral Formula” through “Sequences of Holomorphic
Functions”).

Proposed A-page inventory (dependency order; 18 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-locally-uniform-convergence-dictionary` | rem | Cite the published compact-convergence topology rather than redefining it. |
| `def-taylor-series-holomorphic-function` | def | Define the Taylor series at $a$ from the complex derivatives and CA-2 coefficient convention. |
| `def-order-of-zero-holomorphic-function` | def | Define the least nonzero Taylor coefficient index, with infinity reserved for the zero germ. |
| `thm-taylor-expansion-holomorphic-function` | thm | A holomorphic function equals its Taylor series on $D(a,d(a,\mathbb C\setminus\Omega))$, with the infinite-distance convention for $\Omega=\mathbb C$. |
| `thm-holomorphic-if-and-only-if-analytic` | thm | Holomorphy and local convergent-power-series representability are equivalent. |
| `cor-holomorphic-functions-are-real-analytic-and-smooth` | cor | Every holomorphic function is real analytic and has holomorphic derivatives of every order. |
| `rem-taylor-coefficient-formula-agreement` | rem | Record agreement between the CA-2 and Cauchy-integral coefficient formulas. |
| `thm-zero-order-factorization-holomorphic-function` | thm | A finite zero order $m$ is equivalent to $f(z)=(z-a)^mg(z)$ locally with $g(a)\ne0$. |
| `cor-cauchy-estimates-taylor-coefficients` | cor | Cauchy's inequalities bound each Taylor coefficient by the circle supremum. |
| `thm-liouville-bounded-entire-function` | thm | Every bounded entire function is constant. |
| `thm-entire-polynomial-growth-is-polynomial` | thm | If $\lvert f(z)\rvert\le C(1+\lvert z\rvert)^N$ with $N\ge0$, then $f$ is a polynomial of degree at most $\lfloor N\rfloor$. |
| `rem-fundamental-theorem-of-algebra-via-liouville` | rem | Give the Liouville proof while citing the canonical FTA statement rather than minting another theorem. |
| `thm-morera-triangle-theorem` | thm | A continuous function with zero integral around every compactly contained triangle is holomorphic. |
| `thm-weierstrass-convergence-holomorphic-functions` | thm | A locally uniform limit of holomorphic functions is holomorphic and every derivative order converges locally uniformly. |
| `cor-locally-uniformly-convergent-holomorphic-series` | cor | A locally uniformly convergent holomorphic series may be differentiated termwise. |
| `thm-holomorphic-parameter-riemann-integral` | thm | Joint continuity on a finite real interval times $\Omega$, plus slice holomorphy, makes the parameter integral holomorphic; differentiation under it needs the stated stronger derivative hypothesis. |
| `cor-holomorphic-mean-value-property` | cor | A holomorphic function equals each compactly contained circular average. |
| `cor-nonconstant-entire-function-has-dense-image` | cor | The image of a nonconstant entire function is dense in $\mathbb C$, since omission of a positive-radius disc would make a reciprocal bounded. |

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
with the CX-D7 agreement remark naming the algebraic proof on
`the-fundamental-theorem-of-algebra` and the topological proof on
`applications-of-the-fundamental-group`; **Morera's theorem** (continuous with vanishing
integrals over all triangles $\Rightarrow$ holomorphic — the converse of
Goursat, and the tool CA-19/CA-21 use for parameter integrals); the
**Weierstrass convergence theorem** (landmark): a locally uniform limit of
holomorphic functions is holomorphic, and $f_n^{(k)}\to f^{(k)}$ locally
uniformly for every $k$ — Morera for the first half, the integral formula for
the second; the corresponding statement for a locally uniformly convergent
series; the **holomorphy of a parameter integral** $F(z) = \int_a^b
\varphi(t,z)\,dt$ when $\varphi(t,\cdot)$ is holomorphic and $\varphi$ is
continuous (Morera plus the Riemann Fubini theorem on
`fubini-and-change-of-variables`) — stated
here once, cited by CA-19, CA-21, CA-22 (#28); **the mean value property**
$f(a) = \frac{1}{2\pi}\int_0^{2\pi} f(a+re^{i\theta})d\theta$.

FS: a $C^\infty$ function of two real variables is analytic; an entire bounded-on-$\mathbb{R}$
function is constant (witness: $\sin z$); every entire function with an
antiderivative is a polynomial.

B: $e^z$, $\sin z$, $1/(1-z)$ expanded with exact radii; Liouville applied to
show a nonconstant entire function has dense image (a cheap precursor to CA-23);
Morera used to prove holomorphy of $\int_0^1 t^{z}\,dt$; the FTA proof written
out.
CEX: $\sum z^n/n^2$ converges uniformly on $\overline{\mathbb{D}}$ and its sum
is not holomorphic on any larger disc; $z^n\to0$ locally uniformly on
$\mathbb D$ but not uniformly on the closed disc, showing why every convergence
statement names its compact subsets and domain.

Traps. (i) The radius in "holomorphic $\Rightarrow$ analytic" is the distance
to the boundary of the DOMAIN OF HOLOMORPHY, not of any disc chosen for
convenience; a weaker statement here silently weakens CA-6's identity theorem.
(ii) The FTA remark must be written in the "what THIS proof uses" form, not
"the library also proves"; the algebraic and topological FTA suppliers may not be authored when this is
(published-claim decay, LEVELS.md §10b). (iii) The parameter-integral lemma
(#28) is easy to state too strongly; its hypothesis is joint continuity plus
holomorphy in $z$, and the cited Fubini theorem is for the RIEMANN integral
over a rectangle — check its exact hypotheses before relying on it.
(iv) `rem-open-mapping-theorem` (‡, functional analysis) is a different theorem;
the disambiguation belongs on CA-6, but the judge may flag it here.

Forward references: NONE load-bearing.

## CA-6. The Identity Theorem, the Maximum Principle and the Open Mapping Theorem

`requires`: CA-5

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§3.1--3.4
(“Removable Singularities. Taylor's Theorem,” “Zeros and Poles,” “The Local
Mapping,” “The Maximum Principle”); Stein--Shakarchi Ch. 3, “Zeros and poles”
and “The argument principle and applications”; Weber Ch. 2 §§2.5--2.6
(“Zeros,” “Isolated Singularities”).

Proposed A-page inventory (dependency order; 18 items):

| id | kind | one-line statement |
|---|---|---|
| `def-isolated-zero-and-local-degree` | def | Define an isolated zero and define the local degree of nonconstant $f$ at $a$ as $\operatorname{ord}_a(f-f(a))$. |
| `def-locally-injective-holomorphic-map` | def | Define local injectivity at a point by injectivity on some neighbourhood. |
| `def-biholomorphic-map` | def | Define a biholomorphism between plane domains. |
| `thm-isolated-zeros-holomorphic-function` | thm | A nonzero holomorphic function has isolated zeros. |
| `thm-identity-theorem-holomorphic-functions` | thm | Agreement on a set with an accumulation point in the domain forces agreement everywhere on the domain. |
| `cor-holomorphic-function-ring-integral-domain` | cor | $H(\Omega)$ has no zero divisors for a domain $\Omega$. |
| `cor-local-degree-factorization` | cor | $f(z)-f(a)=(z-a)^mg(z)$ locally, where $g(a)\ne0$. |
| `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` | lem | A nonvanishing holomorphic function on a disc has a logarithm obtained from a primitive of $g'/g$. |
| `cor-local-holomorphic-roots-nonvanishing-function` | cor | Every such function has normalized holomorphic roots of each positive integral order. |
| `thm-local-normal-form-holomorphic-map` | thm | A suitable source coordinate gives $f(z)-f(a)=\phi(z)^m$ with $\phi$ biholomorphic near $a$. |
| `cor-local-multiplicity-count-holomorphic-map` | cor | After shrinking source and target, every nearby value has total preimage multiplicity $m$, and every nearby noncritical value has $m$ distinct preimages. |
| `thm-open-mapping-theorem-holomorphic-functions` | thm | Every nonconstant holomorphic function on a domain is open. |
| `rem-complex-versus-banach-open-mapping-theorems` | rem | Disambiguate this result from the functional-analytic open mapping theorem. |
| `thm-local-maximum-modulus-principle` | thm | An interior local maximum of $\lvert f\rvert$ forces constancy. |
| `thm-boundary-maximum-modulus-principle` | thm | If $\Omega$ is bounded and $f\in C(\overline\Omega)\cap H(\Omega)$, the maximum of $\lvert f\rvert$ occurs on $\partial\Omega$. |
| `thm-minimum-modulus-principle` | thm | A nowhere-zero holomorphic function cannot attain an interior local modulus minimum unless constant. |
| `thm-hadamard-three-lines` | thm | A bounded continuous function on a closed strip, holomorphic inside, has logarithmically convex boundary suprema under the stated growth hypothesis. |
| `rem-riesz-thorin-is-owned-by-measure-theory` | rem | Cite MT-17 `thm-riesz-thorin-interpolation`; the operator theorem is not re-minted here. |
| `thm-holomorphic-inverse-function-theorem` | thm | $f'(a)\ne0$, local degree one and local biholomorphy are equivalent, and the inverse derivative is reciprocal. |
| `cor-injective-holomorphic-derivative-nonzero` | cor | Every injective holomorphic function has no critical point and is biholomorphic onto its open image. |

DEFS: an **isolated** zero; the **local degree** $m$ of $f$ at $a$ (the order of
the zero of $f - f(a)$); **locally injective**; **biholomorphic**.

THMS: **zeros of a nonzero holomorphic function on a domain are isolated**
(landmark; the factorisation of #7 plus connectedness); **the identity
theorem** (landmark): two holomorphic functions on a domain agreeing on a set
with a limit point in the domain are equal — with the clopen argument stated
explicitly, and the "in the domain" hypothesis flagged; the corollary that
$H(\Omega)$ is an integral domain for a domain $\Omega$ (cite the ring
vocabulary on `rings-subrings-and-integral-domains`, do not re-mint); the **local factorisation**
$f(z) - f(a) = (z-a)^m g(z)$ with $g(a)\ne0$, and the **local $m$-th root**:
on a small disc $g$ has a holomorphic $m$-th root, because $g$ is nonvanishing
on a disc and therefore has a holomorphic logarithm (a primitive of $g'/g$,
CA-3 + CA-4 — this is the step that keeps the page independent of the argument
principle); **the local mapping theorem**: near $a$, $f$ is $\varphi^m$ for a
biholomorphism $\varphi$ with $\varphi(a) = 0$, so $f$ has total local
preimage multiplicity $m$; after shrinking, every nearby value other than
$f(a)$ has $m$ distinct preimages (landmark); **the open mapping theorem**
(landmark; immediate from the
local mapping theorem); **the maximum modulus principle** (landmark) in both
forms: no nonconstant holomorphic function on a domain has a local maximum of
$\lvert f\rvert$; and if $\Omega$ is bounded and $f$ is continuous on
$\overline\Omega$ then $\max_{\overline\Omega}\lvert f\rvert$ is attained on
$\partial\Omega$ (EVT and Euclidean compactness from
`continuity-ivt-evt-and-uniform-continuity` and
`the-topology-of-euclidean-space`); the **minimum modulus principle** (with the
nonvanishing hypothesis, which is where it differs); **Hadamard's three-lines
theorem** with its bounded-strip/growth hypotheses, followed by
`rem-riesz-thorin-is-owned-by-measure-theory`, which cites MT-17
`thm-riesz-thorin-interpolation` and does not restate the operator theorem;
**$f'(a)\ne0 \iff m=1
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
the real identity (agreement remark with `fundamental-trigonometric-identities`); $z\mapsto z^2$ shown $2$-to-$1$
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
conventions should mention it. (iv) Cite `def-integral-domain` and its
companions from `rings-subrings-and-integral-domains`.

Forward references: NONE load-bearing.

## CA-7. The Winding Number and the Global Cauchy Theorem

`requires`: CA-6, `the-topology-of-euclidean-space`

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§4.1--4.7 (“The Index
of a Point with Respect to a Closed Curve” through “Multiply Connected
Regions”); Stein--Shakarchi Ch. 3, “Homotopies and simply connected domains”
and “The complex logarithm”; Weber Ch. 4 §§4.1--4.2 (“Cauchy's Theorem,”
“Cauchy Integrals”).

Proposed A-page inventory (dependency order; 20 items):

| id | kind | one-line statement |
|---|---|---|
| `def-winding-number-closed-complex-contour` | def | Define $n(\gamma,a)=(2\pi i)^{-1}\int_\gamma dz/(z-a)$ off the trace. |
| `def-complex-chain-and-cycle` | def | Define finite integral linear combinations of contours and boundary-zero cycles. |
| `def-integration-and-index-of-complex-chain` | def | Extend contour integration and winding number linearly to complex chains. |
| `def-null-homologous-and-homologous-complex-cycles` | def | Null-homology means zero index on $\mathbb C\setminus\Omega$, and homologous cycles have null-homologous difference. |
| `def-homologically-simply-connected-complex-domain` | def | Every cycle in the domain is null-homologous there. |
| `def-continuous-argument-and-holomorphic-logarithm-branches` | def | Distinguish continuous arguments from holomorphic logarithms and fix their branch ambiguities. |
| `thm-winding-number-is-integer` | thm | The winding number of a closed contour about an exterior point is integral. |
| `thm-winding-number-locally-constant` | thm | The index is locally constant off the contour trace. |
| `thm-winding-number-zero-unbounded-component` | thm | The index vanishes on the unbounded complementary component. |
| `thm-winding-number-chain-laws` | thm | Reversal, concatenation and chain addition give the corresponding sign and sum laws. |
| `thm-winding-number-circle-traversed-k-times` | thm | A positively oriented circle traversed $k$ times has index $k$ inside and $0$ outside. |
| `lem-dixon-entire-gluing` | lem | Locally patch the Cauchy transform across the trace after subtracting $n(\Gamma,w)f(w)$, obtaining an entire function. |
| `thm-global-cauchy-integral-formula-homology` | thm | For a null-homologous cycle, $n(\Gamma,z)f(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)/(\zeta-z)\,d\zeta$. |
| `cor-global-cauchy-theorem-homology` | cor | A holomorphic function integrates to zero around every null-homologous cycle. |
| `cor-contour-integrals-homologous-cycles` | cor | Holomorphic contour integrals depend only on the homology class. |
| `cor-global-cauchy-formula-higher-derivatives` | cor | Differentiating the global formula recovers all higher derivatives. |
| `thm-primitives-homologically-simply-connected-domains` | thm | Every holomorphic function on a homologically simply connected domain has a primitive. |
| `thm-holomorphic-logarithms-homologically-simply-connected-domains` | thm | Every nonvanishing holomorphic function there has a logarithm, unique up to $2\pi i\mathbb Z$. |
| `cor-holomorphic-roots-homologically-simply-connected-domains` | cor | Every nonvanishing holomorphic function there has roots of every positive integral order. |
| `cor-principal-logarithm-is-holomorphic-on-the-slit-plane` | cor | The published principal logarithm restricts to the normalized holomorphic branch on $\mathbb C\setminus(-\infty,0]$. |

DEFS: the **winding number** (index) $n(\gamma, a)$ of a closed contour about
$a\notin\gamma^\ast$ (#8); **chain** and **cycle** in an open set $\Omega$, and
$\int_\Gamma$, $n(\Gamma, a)$ (#9); **null-homologous** in $\Omega$
($n(\Gamma,a) = 0$ for every $a\in\mathbb{C}\setminus\Omega$); **homologous**
cycles; **homologically simply connected** (every cycle in $\Omega$ is
null-homologous).

THMS: $n(\gamma,a)\in\mathbb{Z}$ (#8a, landmark — the auxiliary-function proof,
finishing with $\ker\exp = 2\pi i\mathbb{Z}$ from
`the-complex-exponential-and-eulers-formula`); $n(\gamma,\cdot)$ is
**constant on each connected component** of $\mathbb{C}\setminus\gamma^\ast$
(#8b) and **zero on the unbounded component** (#8c, by ML); $\mathbb{C}
\setminus\gamma^\ast$ has exactly one unbounded component by
`the-topology-of-euclidean-space`;
$n(\gamma^-,a) = -n(\gamma,a)$, $n(\gamma_1*\gamma_2,a) = n(\gamma_1,a) +
n(\gamma_2,a)$; the index of the circle $\lvert z - a\rvert = r$ traversed $k$
times is $k$; **Dixon's proof of the global Cauchy theorem** (landmark): for $f$
holomorphic on $\Omega$ and $\Gamma$ a cycle null-homologous in $\Omega$,
$$n(\Gamma, z)\,f(z) = \frac{1}{2\pi i}\int_\Gamma \frac{f(\zeta)}{\zeta - z}\,d\zeta \quad (z\in\Omega\setminus\Gamma^\ast)$$
— the **homology form of the integral formula**, proved by showing the auxiliary
function $F(w)=(2\pi i)^{-1}\int_\Gamma f(\zeta)/(\zeta-w)\,d\zeta$ is
holomorphic off the trace, and then using the local disc Cauchy formula to
patch $F(w)-n(\Gamma,w)f(w)$ across each piece of the trace. The patches agree
on overlaps, give an entire function, and the ML estimate plus Liouville
identifies it; no two-variable auxiliary integral is simply declared entire.
**The homology form of
Cauchy's theorem** as its corollary: $\int_\Gamma f = 0$ for every
null-homologous cycle (landmark); the version for two homologous cycles;
the higher-derivative form; **on a homologically simply connected domain every
holomorphic $f$ has a primitive**, and every nonvanishing holomorphic $f$ has a
**holomorphic logarithm** and hence holomorphic $k$-th roots (landmark — this is
the item CA-12, CA-16 and CA-17 all consume, and the reason the homological
definition is taken as primary, CX-D4); a choice ledger: this whole page is ZF.

FS: $n(\gamma,a)$ depends only on $\gamma^\ast$ (from CA-3's `fs-`, restated in
index language); every cycle in a connected domain is null-homologous.

B: the index computed for the circle traversed $k$ times, for a figure-eight,
and for a keyhole contour; the vortex field on
`line-integrals-and-the-gradient-theorem` identified as $\mathrm{Re}$ and
$\mathrm{Im}$ of $1/z$ — **the dictionary item connecting the winding number
to that closed-not-exact form** (this is
the same fact seen twice and the library must say so); Dixon's proof traced on
an explicit annulus cycle.
CEX: the annulus is connected and NOT homologically simply connected, witnessed
by $\int_{\lvert z\rvert = 1} dz/z = 2\pi i$; a domain where a nonvanishing
holomorphic function has no logarithm ($z$ on $\mathbb{C}^\times$, from
`the-complex-exponential-and-eulers-formula`'s
"no continuous logarithm on $\mathbb{C}\setminus\{0\}$" — cite it, and note that
the supplier proves the CONTINUOUS statement, which is stronger and is what is wanted).

Traps. (i) #8a is the load-bearing item of the page and its proof has exactly
one delicate step: $h(t) = (\gamma(t)-a)\exp(-\int_{t_0}^t \gamma'/(\gamma-a))$
has $h' = 0$ at every point where $\gamma$ is differentiable, and $h$ is
continuous, so $h$ is constant on $[a,b]$ — the piecewise structure means "$h'=0$
on each piece plus continuity", not "$h'=0$". Write the subdivision.
(ii) Dixon's patched Cauchy transform must be corrected locally by
$n(\Gamma,w)f(w)$ and glued across the trace; do not claim that an auxiliary
two-variable quotient is globally continuous or that its contour integral is
entire without constructing these patches. (iii) Define complex chains here as
finite integral linear combinations of contours; no orphaned general
free-abelian-group item is a dependency. (iv) Do NOT define "simply connected"
topologically here; `the-fundamental-group` comes later, and CA-17 is where the
two notions meet. This page's adjective is
**homologically** simply connected, and the word is used with that qualifier
throughout the track until CA-17.

Forward references: NONE load-bearing. A Remarks-only pointer to CA-17 is
permitted, declared.

## CA-8. Isolated Singularities and Laurent Series

`requires`: CA-7

Pair sources (exact harvested locators): Ahlfors Ch. 5 §§1.1--1.3
(“Weierstrass's Theorem,” “Taylor Series,” “Laurent Series”) together with Ch.
4 §§3.1--3.2 (“Removable Singularities,” “Zeros and Poles”);
Stein--Shakarchi Ch. 3, “Singularities and meromorphic functions”;
Howell--Mathews Ch. 7 §§7.3--7.4 (“Laurent series,” “Singularities, zeros and
poles”).

Proposed A-page inventory (dependency order; 21 items):

| id | kind | one-line statement |
|---|---|---|
| `def-complex-annulus` | def | Define $A(a;r,R)=\{r<\lvert z-a\rvert<R\}$, with the $r=0$ and $R=\infty$ conventions explicit. |
| `def-convergent-complex-laurent-series` | def | Define a convergent two-sided analytic Laurent series, distinct from the published formal Laurent-series object. |
| `def-principal-part-laurent-series` | def | Define the principal part as the negative-power subseries. |
| `def-isolated-singularity-types` | def | Define removable singularities, poles with order and essential singularities without presupposing exhaustiveness. |
| `def-residue-isolated-singularity` | def | Define the residue as the unique coefficient $a_{-1}$. |
| `def-meromorphic-function-complex-domain` | def | Define meromorphy as local holomorphy or a pole on the declared plane domain. |
| `def-simple-pole` | def | Define a pole of order one. |
| `thm-laurent-expansion-annulus` | thm | Every holomorphic function on an annulus has a locally uniformly convergent two-sided Laurent expansion. |
| `thm-laurent-coefficient-formula-and-uniqueness` | thm | The coefficients have the intermediate-circle contour formula and are unique. |
| `cor-laurent-coefficients-independent-of-radius` | cor | The coefficient integrals do not depend on the chosen intermediate radius. |
| `thm-laurent-regular-principal-decomposition` | thm | The function splits uniquely into an interior-holomorphic regular part and an exterior-holomorphic principal part tending to zero at infinity. |
| `thm-removable-singularity-characterizations` | thm | Boundedness near $a$, $(z-a)f(z)\to0$ and holomorphic extendability across $a$ are equivalent. |
| `thm-pole-characterizations` | thm | Pole order $m$, finite nonzero principal part of order $m$, $\lvert f\rvert\to\infty$, and a reciprocal zero of order $m$ are equivalent. |
| `thm-isolated-singularity-trichotomy` | thm | Exactly one of the removable, pole and essential cases occurs. |
| `thm-casorati-weierstrass` | thm | Every punctured-neighbourhood image at an essential singularity is dense in $\mathbb C$. |
| `cor-residue-contour-integral-formula` | cor | The residue is $(2\pi i)^{-1}$ times every sufficiently small positive-circle integral. |
| `lem-residue-simple-pole` | lem | At a simple pole, $\operatorname{Res}(f,a)=\lim_{z\to a}(z-a)f(z)$. |
| `thm-residue-pole-derivative-formula` | thm | State the derivative formula for a pole of order $m$. |
| `cor-residue-quotient-simple-zero` | cor | If $q$ has a simple zero at $a$, then $\operatorname{Res}(p/q,a)=p(a)/q'(a)$. |
| `def-singularity-at-infinity` | def | Classify a scalar function at infinity through $f(1/w)$ at zero, without conflating the later differential-residue convention. |
| `thm-poles-meromorphic-function-are-discrete-and-countable` | thm | Poles form a closed discrete subset of the domain and hence are at most countable. |

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

`requires`: CA-8, CA-7, `improper-integrals`, `convexity`

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§5.1--5.3 (“The
Residue Theorem,” “The Argument Principle,” “Evaluation of Definite
Integrals”); Stein--Shakarchi Ch. 3, “The residue formula and examples”;
Howell--Mathews Ch. 8 §§8.1--8.6 (“Residues” through “Branch points”).

Proposed A-page inventory (dependency order; 18 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-cauchy-principal-value-dictionary` | rem | Cite the published principal-value and improper-integral definitions. |
| `def-standard-residue-contours` | def | Fix orientations and branch conventions for semicircle, rectangle, slit/keyhole, indented-arc and sector contours. |
| `def-admissible-cycle-for-residue-theorem` | def | Require a cycle null-homologous in $\Omega$ and disjoint from the closed discrete singular set. |
| `lem-finiteness-support-residue-sum` | lem | Compact containment of the nonzero-index region makes the set of contributing singularities finite. |
| `thm-residue-theorem-null-homologous-cycle` | thm | The contour integral equals $2\pi i$ times the finite winding-weighted residue sum. |
| `cor-residue-theorem-circle` | cor | A positively oriented circle gives the ordinary residue sum of its interior poles. |
| `lem-large-semicircle-vanishing` | lem | If $zR(z)\to0$ uniformly on large upper semicircles, the corresponding rational arc integral tends to zero. |
| `lem-jordans-lemma-rational-functions` | lem | For $\lambda>0$ and rational $R(z)=O(1/z)$ with no arc poles, the upper-semicircle integral of $e^{i\lambda z}R(z)$ tends to zero under the stated bound. |
| `lem-indented-arc-residue-limit` | lem | For $z=a+\varepsilon e^{it}$, $t\in[\alpha,\beta]$, the oriented limit is $i(\beta-\alpha)\operatorname{Res}(f,a)$. |
| `thm-residue-evaluation-rational-real-integrals` | thm | If $\deg q\ge\deg p+2$ and there are no real poles, the real integral is the upper-half-plane residue sum. |
| `thm-residue-evaluation-principal-value-real-poles` | thm | Simple real poles with declared upper or lower indentations give the principal value plus the correctly signed half-residues. |
| `thm-residue-evaluation-rational-fourier-integrals` | thm | The sign of $\lambda$ determines the closing half-plane, with the no-real-poles and principal-value cases separated. |
| `thm-trigonometric-integral-unit-circle-substitution` | thm | Substitute $z=e^{i\theta}$ with the exact formulas for sine, cosine and $d\theta$, excluding unit-circle poles. |
| `lem-keyhole-branch-boundary-values` | lem | For $\operatorname{Arg}\in(0,2\pi)$, the two positive-axis values of $z^{\alpha-1}$ differ by $e^{2\pi i(\alpha-1)}$. |
| `thm-keyhole-residue-formula-mellin-rational-integrals` | thm | For $0<\Re\alpha<1$ and the exact endpoint-decay and pole hypotheses, state the $(1-e^{2\pi i\alpha})$ contour identity before solving for the real integral. |
| `thm-cotangent-residue-summation-rational-functions` | thm | If rational $f$ has no integer pole and is $O(z^{-2})$, then $\sum_{n\in\mathbb Z}f(n)$ is the negative sum of the nonintegral residues of $\pi\cot(\pi z)f(z)$. |
| `thm-cosecant-residue-alternating-summation-rational-functions` | thm | Under the analogous hypotheses, $\pi\csc(\pi z)$ gives the alternating bilateral sum. |
| `cor-basel-sum-by-residues` | cor | The residue route gives $\sum_{n\ge1}n^{-2}=\pi^2/6$ and records agreement with the real proof. |

DEFS: the **residue theorem's** hypotheses packaged (a cycle null-homologous in
$\Omega$, avoiding a discrete set $S$ of singularities); the **principal value**
of a divergent-looking improper integral (cite the authored
`def-cauchy-principal-value` on `improper-integrals` through the dictionary
remark; do not redefine it); the standard
contours: **semicircle**, **rectangle**, **keyhole**, **indented semicircle**,
**sector**, each defined once as a named contour so later items cite rather than
redraw.

THMS: **the residue theorem** (landmark):
$\frac{1}{2\pi i}\int_\Gamma f = \sum_{a\in S} n(\Gamma,a)\operatorname{Res}(f,a)$,
the sum having finitely many nonzero terms (a compactness argument that must be
made: the points with $n(\Gamma,a)\ne 0$ lie in a compact subset of $\Omega$,
not merely in a bounded set, and $S$ is discrete and closed in $\Omega$); the
special case of a positively oriented
circle; **the estimation lemmas**: $\int_{\text{arc}} \to 0$ when $zf(z)\to0$
uniformly (large arcs), **Jordan's lemma** for $e^{i\lambda z}f(z)$, and the
**indentation lemma**: the oriented arc $a+\varepsilon e^{it}$,
$t\in[\alpha,\beta]$, tends to
$i(\beta-\alpha)\operatorname{Res}(f,a)$; **$\int_{-\infty}^{\infty} R(x)dx$ for a
rational $R$ with $\deg q \ge \deg p + 2$ and no real poles**; the same with
simple real poles, as a principal value; **$\int_{-\infty}^{\infty}
R(x)e^{i\lambda x}dx$** by Jordan's lemma; **$\int_0^{2\pi} R(\cos\theta,
\sin\theta)d\theta$** by the substitution $z = e^{i\theta}$ (the dictionary item
turning a real trigonometric integral into a contour integral, using the polar
form on `the-complex-exponential-and-eulers-formula`); **$\int_0^\infty x^{\alpha-1}R(x)dx$ by the keyhole**, which needs a
branch of $z^{\alpha-1}$ and therefore cites well-definedness #16/#18 forward
from... **no** — see traps; **summation of series by residues**: for rational
$f=O(z^{-2})$ with no integer pole, $\sum_{n\in\mathbb{Z}}f(n)=-\sum
\operatorname{Res}(\pi\cot(\pi z)f(z))$, and analogously with $\pi\csc$ for
the alternating sum. **The Basel sum $\sum 1/n^2 = \pi^2/6$** is instead a
separate direct rectangle computation with $\pi\cot(\pi z)/z^2$, since
$1/z^2$ violates the no-integer-pole hypothesis (agreement remark with the
planned real proof on `pi-the-equivalent-characterizations` — the library will
hold two proofs and must say so).

FS: the residue theorem applies to any cycle in $\Omega$ (the null-homologous
hypothesis); $\int_{-\infty}^\infty$ exists whenever the principal value does
(witness $x/(1+x^2)$, citing `improper-integrals`); a rational function with $\deg q = \deg p+1$
has a convergent improper integral; the large-arc estimate holds whenever
$f\to0$ (witness: $1/z$ — $zf(z)\to 0$ is the right hypothesis, not $f\to0$).

B: at least eight worked evaluations, one per lemma: $\int dx/(1+x^2)$,
$\int dx/(1+x^4)$, $\int \frac{\cos x}{1+x^2}dx$,
$\int_0^\infty \frac{\sin x}{x}dx = \pi/2$ (indentation + Jordan),
$\int_0^{2\pi}\frac{d\theta}{a+\cos\theta}$,
$\int_0^\infty \frac{x^{\alpha-1}}{1+x}dx = \pi/\sin\pi\alpha$ (keyhole),
$\int_0^\infty e^{-x^2}\cos(2bx)dx$ by a rectangle, the Basel sum.
CEX: $\int_{-\infty}^{\infty}\frac{\sin x}{x}dx$ converges improperly and not
absolutely (cite `improper-integrals`); a contour choice that fails because the arc estimate does
not apply; a residue computation that gives the wrong answer if the pole's
order is misjudged.

Traps. (i) **The branch problem in the keyhole evaluation is real and is
resolved by the declared CA-7/CA-12 rehoming.** CA-7 owns the definition,
normalisation and uniqueness of a holomorphic logarithm on the cut domain;
CA-9 cites it when defining $z^{\alpha-1}$ on the keyhole contour, and CA-12
cites it before defining general powers. The evaluation is not restricted to
rational $\alpha$ and is not moved to a companion page.
(ii) The finiteness of the residue sum is a real compactness argument, not an
"obviously". (iii) Jordan's lemma's proof needs $\sin\theta \ge 2\theta/\pi$ on
$[0,\pi/2]$ — derive it from
`cor-second-derivative-characterises-convexity` applied to $-\sin$ and CA-2's
complex-sine derivative agreement; no unsourced trigonometric estimate is
assumed.
(iv) The Basel agreement remark: `pi-the-equivalent-characterizations` may be
unauthored when this is written; use the non-decaying form.

Forward references: NONE load-bearing; CA-7 supplies the logarithm branch used
by the keyhole items.

## CA-10. The Argument Principle and Rouché's Theorem

`requires`: CA-9

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§5.1--5.3 (“The
Residue Theorem,” “The Argument Principle,” “Evaluation of Definite
Integrals”); Stein--Shakarchi Ch. 3, “The argument principle and
applications”; Howell--Mathews Ch. 8 §8.7 (“Argument principle and Rouché”).

Proposed A-page inventory (dependency order; 16 items):

| id | kind | one-line statement |
|---|---|---|
| `def-logarithmic-derivative-meromorphic-function` | def | Define $f'/f$ away from the zeros and poles. |
| `def-weighted-zero-and-pole-counts-on-cycle` | def | Define finite zero and pole counts using local orders weighted by winding numbers. |
| `lem-logarithmic-derivative-order-residue` | lem | The residue of $f'/f$ is $+m$ at a zero of order $m$ and $-m$ at a pole of order $m$. |
| `thm-argument-principle-null-homologous-cycle` | thm | $(2\pi i)^{-1}\int_\Gamma f'/f=Z(f,\Gamma)-P(f,\Gamma)$ for an admissible null-homologous cycle. |
| `thm-argument-principle-as-image-winding-number` | thm | For holomorphic $f$ nonzero on the cycle, the integral is $n(f\circ\Gamma,0)$, with the contour substitution proved. |
| `cor-argument-principle-counts-preimages` | cor | Applying the principle to $f-w$ counts preimages of $w$ with multiplicity. |
| `thm-weighted-argument-principle` | thm | Integrating $g f'/f$ sums the values of $g$ over zeros minus poles with orders and winding weights. |
| `thm-rouche-theorem` | thm | If $\lvert f-g\rvert<\lvert g\rvert$ on the trace under the classical holomorphic hypotheses, the winding-weighted zero counts agree. |
| `rem-fundamental-theorem-of-algebra-via-rouche` | rem | Give the leading-term proof while citing the canonical FTA statement. |
| `cor-local-zero-count-via-rouche` | cor | Small perturbations retain the total local multiplicity in a sufficiently small disc. |
| `thm-continuity-of-zeros-locally-uniform-convergence` | thm | Around every isolated zero of a nonzero limit, all sufficiently late functions have the same total zero multiplicity. |
| `thm-hurwitz-zero-free-limit` | thm | A locally uniform limit of zero-free holomorphic functions is zero-free or identically zero. |
| `thm-hurwitz-injective-limit` | thm | A locally uniform limit of injective holomorphic functions is injective or constant. |
| `rem-open-mapping-theorem-via-argument-principle` | rem | Record agreement with CA-6 without re-minting its theorem. |
| `rem-local-degree-argument-principle-agreement` | rem | Identify the analytic local degree with the argument-principle multiplicity. |
| `thm-holomorphic-inverse-contour-formula` | thm | If the cycle surrounds exactly one simple preimage $z(w)$ and no boundary preimage, then $z(w)=(2\pi i)^{-1}\int_\Gamma\zeta f'(\zeta)/(f(\zeta)-w)\,d\zeta$. |

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
Glicksberg source and proof; **the Rouché proof of the fundamental theorem of
algebra** is carried by a remark citing the canonical FTA statement, not by a
fourth theorem id;
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
weakened to $\le$ (take $g(z)=z$ and $f(z)=z+1$ on the unit circle: equality
holds but $f$ has a boundary zero, so the admissible zero-count conclusion is
unavailable);
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

`requires`: CA-10, `compactness`, `the-topology-of-euclidean-space`

Pair sources (exact harvested locators): Ahlfors Ch. 3 §§2.2--3.5 (“The
Linear Group,” “The Cross Ratio,” “Symmetry,” “Oriented Circles,” “Families
of Circles”); Stein--Shakarchi Ch. 8, “Conformal equivalence and examples”;
Weber Ch. 1, “Möbius Transformations” and “Inversion.”

Proposed A-page inventory (dependency order; 22 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-riemann-sphere-one-point-compactification` | rem | Instantiate the published one-point compactification rather than redefining it. |
| `def-riemann-sphere-holomorphic-charts` | def | Use the $z$ and $1/z$ charts, prove their transition is holomorphic and define holomorphy and poles at infinity. |
| `thm-stereographic-projection-riemann-sphere-homeomorphism` | thm | Explicit stereographic projection gives $\widehat{\mathbb C}\cong S^2$. |
| `def-chordal-metric-riemann-sphere` | def | Define the chordal distance via stereographic projection. |
| `thm-chordal-metric-induces-sphere-topology` | thm | The chordal metric induces the one-point-compactification topology. |
| `def-meromorphic-function-riemann-sphere` | def | Define sphere-meromorphy chartwise. |
| `def-mobius-transformation` | def | Define $(az+b)/(cz+d)$ for $ad-bc\ne0$, including values at poles and infinity. |
| `def-cross-ratio-riemann-sphere` | def | Fix the ordering and infinity conventions for the cross-ratio. |
| `def-circline-and-reflection` | def | Define generalized circles and their antiholomorphic involutive reflections. |
| `thm-mobius-group-and-projective-linear-identification` | thm | Identify the Möbius group with $PGL_2(\mathbb C)$, with scalar matrix kernel and elementary generators. |
| `thm-mobius-transformations-biholomorphic-sphere` | thm | Every Möbius transformation is a sphere biholomorphism. |
| `thm-three-point-transitivity-mobius-transformations` | thm | There is a unique Möbius map between two ordered triples of distinct sphere points. |
| `thm-cross-ratio-mobius-invariant` | thm | Möbius transformations preserve the cross-ratio. |
| `thm-real-cross-ratio-circline-characterization` | thm | Four distinct points lie on one circline exactly when their cross-ratio is real. |
| `thm-mobius-preserves-circlines-and-reflections` | thm | $M\circ\sigma_C\circ M^{-1}=\sigma_{M(C)}$. |
| `thm-meromorphic-functions-riemann-sphere-are-rational` | thm | Sphere-meromorphic functions are exactly rational functions. |
| `def-degree-rational-map-riemann-sphere` | def | Define the reduced homogeneous degree, independently of representatives. |
| `thm-rational-map-fibre-count-degree` | thm | Every sphere value has total preimage multiplicity equal to the nonconstant rational map's degree. |
| `thm-biholomorphic-self-maps-riemann-sphere-are-mobius` | thm | Every sphere biholomorphism is Möbius. |
| `cor-entire-biholomorphisms-are-affine` | cor | Every biholomorphic self-map of $\mathbb C$ is $az+b$ with $a\ne0$. |
| `thm-automorphisms-punctured-plane` | thm | Every automorphism of $\mathbb C^\times$ is $az$ or $a/z$. |
| `thm-classification-mobius-transformations` | thm | Separate the identity; a nonidentity map is parabolic with one fixed point or conjugate to $z\mapsto\lambda z$, with the declared elliptic/hyperbolic/loxodromic convention and invariant $\operatorname{tr}^2/\det$. |

DEFS: cite the published one-point compactification for
**$\widehat{\mathbb{C}} = \mathbb{C}\cup\{\infty\}$** rather than re-minting
it; add the two charts $z$ and $1/z$ and **holomorphic at
$\infty$** / **a pole at $\infty$** (#13); **meromorphic on
$\widehat{\mathbb{C}}$**; the **chordal metric** via stereographic projection;
a **Möbius transformation** (#14); the **cross-ratio** (#15); a **circline**
(circle or line in $\widehat{\mathbb{C}}$); **symmetric points** with respect to
a circline.

THMS: $\widehat{\mathbb{C}}$ is compact, Hausdorff, connected, and
**homeomorphic to $S^2$** by stereographic projection (#13; the explicit
formulas, with continuity of each cited into the analysis machinery, and
compact-to-Hausdorff from `compactness`); the chordal metric induces the topology; the
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
respect to circlines); **classification** of a nonidentity Möbius map by its
fixed points and conjugacy multiplier: parabolic for one fixed point,
otherwise conjugate to $z\mapsto\lambda z$. The projectively defined invariant
is $\operatorname{tr}^2/\det$, never the trace of an arbitrary representative,
and the elliptic/hyperbolic/loxodromic convention is declared; **the
meromorphic functions on $\widehat{\mathbb{C}}$ are exactly the rational
functions** (landmark — a genuinely satisfying theorem, proved by subtracting
principal parts and applying Liouville); the automorphism group of $\mathbb{C}$
is $\{az+b\}$ (via the singularity at $\infty$); the automorphism group of
$\mathbb{C}^\times$; $\deg$ of a rational map and the $d$-to-$1$ count on
$\widehat{\mathbb{C}}$.

FS: every Möbius self-map of $\widehat{\mathbb C}$ restricts to a
biholomorphism $\mathbb C\to\mathbb C$ (false when $c\ne0$); a Möbius map with
three fixed points may be nonidentity; the cross-ratio is invariant under all
sphere homeomorphisms; $\widehat{\mathbb{C}}$ is homeomorphic to $\mathbb{C}$
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
space" both live on `compactness`; cite, do not rebuild. (iii) Classification uses
the projective invariant $\operatorname{tr}^2/\det$ and the conjugacy
multiplier; a bare trace is not defined on $PGL_2(\mathbb C)$. (iv) $\mathrm{GL}_2$,
kernels and quotient groups come from the stable matrix,
`group-homomorphisms-and-the-isomorphism-theorems`, and
`normal-subgroups-and-quotient-groups` pages; cite their exact items.

Forward references: NONE load-bearing.

## CA-12. Conformal Mapping, Branches, and the Schwarz Lemma

`requires`: CA-11, CA-8, CA-7, `the-logarithm-and-general-powers`,
`roots-and-rational-powers`

Pair sources (exact harvested locators): Ahlfors Ch. 3 §§3.1--4.3
(circle-family geometry, “The Logarithm,” “A Survey of Elementary Mappings”);
Stein--Shakarchi Ch. 8 §§1--4 (conformal equivalence, disc/half-plane,
Schwarz lemma and automorphism groups); Howell--Mathews Ch. 9 §§9.1--9.4
(conformal basics, bilinear, elementary and trigonometric maps).

**Placement decision.** CA-7 owns well-definedness rows **16 and 17** (branch
of argument/logarithm, normalisation and uniqueness), so CA-9 can cite them.
This page owns row **18** ($z^\alpha$) and cites CA-7 for the branch vocabulary.

Proposed A-page inventory (dependency order; 23 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-holomorphic-logarithm-and-principal-power-dictionary` | rem | Cite the published pointwise principal-logarithm definition and CA-7 branch items, distinguishing the negative-axis value from the holomorphic slit-plane restriction. |
| `def-complex-power-from-holomorphic-logarithm-branch` | def | Define $z_L^\alpha=\exp(\alpha L(z))$ only after a holomorphic logarithm branch is fixed. |
| `thm-branch-complex-power-agrees-integer-powers` | thm | For $n\in\mathbb Z$, $\exp(nL(z))$ is the ordinary integer power and is branch independent. |
| `thm-principal-complex-power-agrees-positive-real-power` | thm | For $x>0$ and **real** $\alpha$, $\exp(\alpha\operatorname{Log}x)$ agrees with the published real $x^\alpha$. |
| `thm-logarithm-and-complex-power-branch-discrepancies` | thm | Logarithm branches differ by $2\pi in$, corresponding powers by $e^{2\pi in\alpha}$, and product/exponent laws require all points to lie in the declared branch domains. |
| `def-conformal-equivalence-and-automorphism-group` | def | Define biholomorphic equivalence and its self-map group for plane domains. |
| `def-unit-disc-upper-half-plane-and-blaschke-factor` | def | Fix $\mathbb D$, $\mathbb H$ and $\varphi_a(z)=(a-z)/(1-\bar az)$. |
| `def-poincare-metric-and-distance-unit-disc` | def | Fix $ds=2\lvert dz\rvert/(1-\lvert z\rvert^2)$ and its induced path distance. |
| `thm-poincare-distance-formula-and-invariance` | thm | $d_{\mathbb D}(z,w)=2\operatorname{artanh}\lvert\varphi_z(w)\rvert$, and disc automorphisms are isometries. |
| `thm-schwarz-lemma-with-equality` | thm | A disc self-map fixing zero contracts modulus and derivative, with both equality clauses characterizing rotations. |
| `thm-schwarz-pick-lemma` | thm | Every disc self-map contracts the pseudohyperbolic/Poincaré distance, with equality rigidity. |
| `thm-blaschke-factor-disc-involution` | thm | $\varphi_a$ is a disc automorphism interchanging $0$ and $a$ and satisfying $\varphi_a^2=\mathrm{id}$. |
| `thm-automorphisms-unit-disc` | thm | Every disc automorphism is $e^{i\theta}\varphi_a$. |
| `thm-automorphisms-upper-half-plane` | thm | The Cayley transform identifies $\operatorname{Aut}(\mathbb H)$ with $PSL_2(\mathbb R)$. |
| `rem-biholomorphisms-are-conformal-with-holomorphic-inverse` | rem | Cite CA-1 and CA-6 rather than restating their conformality and inverse results. |
| `thm-conformal-equivalence-is-equivalence-relation` | thm | Biholomorphic equivalence is reflexive, symmetric and transitive. |
| `thm-sector-power-conformal-equivalence` | thm | $z^n$ maps a declared sector of angular width below $2\pi/n$ biholomorphically to its angle-multiplied image. |
| `thm-root-conformal-equivalence-slit-domain-sector` | thm | A chosen $n$th-root branch maps the slit plane biholomorphically to the corresponding $2\pi/n$ sector. |
| `thm-principal-logarithm-slit-plane-strip-equivalence` | thm | $\operatorname{Log}:\mathbb C\setminus(-\infty,0]\to\{-\pi<\Im w<\pi\}$ is biholomorphic. |
| `thm-exponential-strip-slit-plane-equivalence` | thm | The exponential is the inverse on that open strip. |
| `thm-joukowski-exterior-segment-complement-equivalence` | thm | $(z+z^{-1})/2$ maps $\lvert z\rvert>1$ biholomorphically onto $\mathbb C\setminus[-1,1]$. |
| `thm-sine-half-strip-upper-half-plane-equivalence` | thm | $\sin$ maps $\{-\pi/2<\Re z<\pi/2,\ \Im z>0\}$ biholomorphically onto $\mathbb H$. |
| `thm-three-simply-connected-models-pairwise-nonequivalent` | thm | $\widehat{\mathbb C}$, $\mathbb C$ and $\mathbb D$ are pairwise non-biholomorphic. |

DEFS: a **branch of the argument** on a domain (#16); a **holomorphic branch of
$\log$** (#17); the **principal branch** and the branch cut; **$z^\alpha$**
(#18); a **conformal equivalence** (biholomorphism) between domains; the unit
disc $\mathbb{D}$, the upper half plane $\mathbb{H}$; the **automorphism group**
$\operatorname{Aut}(\Omega)$; the **Blaschke factor** $\varphi_a(z) =
\frac{a-z}{1-\bar a z}$; the **hyperbolic (Poincaré) metric**
$ds_{\mathbb D}=2|dz|/(1-|z|^2)$ on $\mathbb D$ and its induced distance,
with this normalisation fixed for every later surface page.

THMS: existence and uniqueness-up-to-$2\pi i\mathbb{Z}$ of a branch of $\log$
on a homologically simply connected domain avoiding $0$ (#17; the theorem is
CA-7's, this page names it); **no continuous branch of $\arg$ exists on
$\mathbb{C}^\times$** (cite `the-complex-exponential-and-eulers-formula`, which proves the stronger continuous
statement); the two dictionary items for $z^\alpha$ (#18): agreement with the
integer power (`roots-and-rational-powers`), and agreement with the real
$x^\alpha$ for $x>0$ only for real $\alpha$, under the principal branch
(`the-logarithm-and-general-powers`); the
branch-dependent failure of $(z^a)^b =
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
$z^{1/n}$, the holomorphic restriction
$\operatorname{Log}:\mathbb C\setminus(-\infty,0]\to
\{-\pi<\operatorname{Im}w<\pi\}$ and its exponential inverse,
$\frac12(z+1/z)$ (the Joukowski map) on the exterior of the disc,
$\sin$ on a half-strip; the **Riemann sphere is not conformally equivalent to
$\mathbb{C}$ or to $\mathbb{D}$**, and $\mathbb{C}$ is not equivalent to
$\mathbb{D}$ (Liouville) — the three simply connected model domains as
genuinely three, which is what CA-16's exclusion of $\Omega = \mathbb{C}$ means.

FS: $\log(zw) = \log z + \log w$ for the principal branch (witness
$z = w = -1$); $(z^a)^b = z^{ab}$ (refute by an explicit declared-branch
computation here; no examples-companion item is a dependency);
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
CEX: the holomorphic principal restriction on the slit plane has one-sided
limits with imaginary parts $\pm\pi$ at $-1\pm i\varepsilon$; the published
pointwise principal value on the negative axis uses $\operatorname{Arg}=\pi$
but is not part of that open branch domain; $\sqrt{(-1)(-1)} \ne
\sqrt{-1}\sqrt{-1}$;
$\bar z$ preserves unsigned angles and is not holomorphic.

Traps. (i) Every single statement involving $\log$, $\arg$, $z^\alpha$ or
$\sqrt{\ }$ on this page must name its branch **in the Statement**. A title or
Statement that says "$\log$" without a branch is exactly the
"asserts more than the proof gives" class LEVELS.md §10a calls fatal.
(ii) The Schwarz lemma's proof applies the maximum principle to $f(z)/z$ on
$\lvert z\rvert \le r$ and lets $r\to1$; the removability of the singularity at
$0$ is CA-8 and must be cited. (iii) $\operatorname{Aut}(\mathbb{D})$'s proof
uses Schwarz twice, on $f\circ\varphi_a$ and its inverse; both directions are
needed for the equality case. (iv) The elementary-map catalogue is where an
inventory silently doubles; cap it at six maps, each one item. (v) The
punctured-disc/finite-annulus distinction belongs on CA-QC-1, where extremal
length proves it; no companion item here may depend forward on that result.

Forward references: NONE load-bearing.

## CA-13. Harmonic Functions and the Poisson Integral

**R-2 cross-link.** This plane-specific page cites PDE-3/PDE-4/PDE-6 for the
dimension-uniform mean-value and Harnack statements (including their $n=2$
cases). Its own proofs use holomorphic and harmonic-conjugate methods and do
not restate the PDE theorems.

`requires`: CA-7, CA-6, `mixed-partials-taylor-and-extrema`

Pair sources (exact harvested locators): Axler--Bourdon--Ramey Ch. 1
(“Mean-Value,” “Maximum,” “Poisson Kernel for Ball,” “Dirichlet Problem for
Ball”) and Ch. 3 (“Harnack Inequality/Principle”); Khoruzhenko §§1.1--1.3
(“Harmonic and holomorphic,” “Poisson integral,” “Positive harmonic
functions”); Schlag Ch. 3 §1 (“The Poisson kernel”).

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
`mixed-partials-taylor-and-extrema`; cite `thm-clairaut-schwarz-mixed-partials`
rather than assuming it. (iii) The
concentration property of $P_r$ is an $\varepsilon$-$\delta$ argument with a
split integral; it is the only real analysis on the page and is where proofs
wave. (iv) Harnack's theorem's "or $+\infty$" clause must be in the Statement.

Forward references: NONE load-bearing.

## CA-14. Subharmonic Functions and the Dirichlet Problem

**R-2 cross-link.** Cite PDE-3/PDE-4/PDE-6 for the all-dimensional harmonic
background. The Perron/barrier and holomorphic plane arguments below remain
the sharper $n=2$ contribution; no PDE theorem statement changes.

`requires`: CA-13, `the-topology-of-euclidean-space`, the measure-theory
Lebesgue-integral and monotone/Fatou convergence interfaces

Pair sources (exact harvested locators): Axler--Bourdon--Ramey Ch. 11
(“Dirichlet,” “Subharmonic,” “Perron,” “Barriers and Geometric Criteria”);
Khoruzhenko §§2.1--2.5 and §§4.1--4.2 (USC/subharmonic theory, Perron function,
harmonic measure); Schlag Ch. 9 §§3--4 (“Perron construction,” “Boundary
behaviour”).

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
| `thm-log-modulus-of-a-holomorphic-function-is-subharmonic` | thm | $\log\lvert f\rvert$, with value $-\infty$ at zeros, is subharmonic. |
| `cor-modulus-powers-of-holomorphic-functions-are-subharmonic` | cor | $\lvert f\rvert^p$ is subharmonic for every $p>0$. |
| `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity` | lem | Nonnegative finite sums and finite maxima preserve the class. |
| `thm-decreasing-limit-theorem-for-plane-subharmonic-functions` | thm | A decreasing limit is subharmonic or identically $-\infty$ componentwise. |
| `def-upper-semicontinuous-regularization` | def | Define $v^*(z)=\limsup_{w\to z}v(w)$ and prove it is the least USC majorant. |
| `thm-upper-envelope-theorem-for-plane-subharmonic-functions` | thm | The USC regularisation of a locally bounded-above subharmonic supremum is subharmonic. |
| `thm-hartogs-lemma-for-subharmonic-functions` | thm | Locally uniformly upper-bounded subharmonic sequences obey the compact upper-limit estimate. |
| `thm-maximum-principle-for-plane-subharmonic-functions` | thm | An interior maximum forces constancy on the component. |
| `cor-almost-everywhere-equality-determines-a-plane-subharmonic-function` | cor | Two subharmonic functions equal almost everywhere are equal everywhere. |
| `thm-mollifier-regularization-of-plane-subharmonic-functions` | thm | Convolution with a specifically chosen radial approximate identity gives smooth subharmonic approximants decreasing to the original function on smaller domains. |
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

`requires`: CA-13, CA-11, CA-10,
`approximation-and-compactness-in-ck`

Pair sources (exact harvested locators): Weber Ch. 5 §§5.1--5.2 (“Montel's
Theorem,” “Riemann Mapping Theorem”); Stein--Shakarchi Ch. 2,
“Applications—Sequences of holomorphic functions,” and Ch. 8, “Riemann
mapping and Montel”; Axler--Bourdon--Ramey Ch. 2, “Normal Families.”

Proposed A-page inventory (dependency order; 18 items):

| id | kind | one-line statement |
|---|---|---|
| `lem-canonical-compact-exhaustion-of-a-plane-domain` | lem | With $d(z,\varnothing)=\infty$, the distance-and-radius sets are compact, nest inside successive interiors and exhaust the domain. |
| `def-local-uniform-convergence-on-a-plane-domain` | def | Define convergence uniformly on every compact subset. |
| `def-compact-exhaustion-metric-on-function-space` | def | Define the weighted supremum metric and prove independence of the selected exhaustion. |
| `thm-compact-exhaustion-metric-characterizes-local-uniform-convergence` | thm | Convergence in the weighted metric is exactly local uniform convergence. |
| `cor-compact-open-topology-is-independent-of-exhaustion` | cor | Any two compact exhaustions give the same function-space topology. |
| `thm-completeness-of-continuous-functions-for-local-uniform-convergence` | thm | $C(\Omega,\mathbb C)$ is complete for an exhaustion metric. |
| `cor-holomorphic-functions-are-closed-for-local-uniform-convergence` | cor | CA-5's Weierstrass theorem makes $H(\Omega)$ a closed subspace. |
| `def-normal-family-of-holomorphic-functions` | def | Every sequence has a subsequence converging locally uniformly to a member of $H(\Omega)$. |
| `def-locally-bounded-family-of-functions` | def | Define uniform boundedness on a neighbourhood of every point. |
| `def-locally-equicontinuous-family-of-functions` | def | Define equicontinuity on a neighbourhood of every point. |
| `lem-locally-bounded-holomorphic-families-are-locally-equicontinuous` | lem | Cauchy estimates give uniform local Lipschitz bounds. |
| `thm-montel-theorem-for-holomorphic-functions` | thm | Every locally bounded family in $H(\Omega)$ is normal, with the diagonal choice charge explicit. |
| `thm-normal-holomorphic-families-are-locally-bounded` | thm | Sequential normality with finite holomorphic limits forces local boundedness. |
| `thm-vitali-porter-convergence-theorem` | thm | Local boundedness plus pointwise convergence on a set with an interior-domain limit point gives local uniform convergence. |
| `thm-local-uniform-convergence-of-holomorphic-derivatives` | thm | Local uniform convergence implies local uniform convergence of every derivative order. |
| `def-chordal-local-uniform-convergence-and-meromorphic-normality` | def | Define normality for maps to the compact Riemann sphere, allowing the identically-infinity limit. |
| `thm-chordal-limit-theorem-for-meromorphic-functions` | thm | A chordally locally uniform meromorphic limit is meromorphic or identically infinity; for holomorphic approximants it is holomorphic or identically infinity. |
| `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families` | thm | Local chordal equicontinuity is equivalent to meromorphic normality on compact exhaustions. |

DEFS: **local uniform convergence** and the topology it induces on
$C(\Omega,\mathbb{C})$ and $H(\Omega)$, via a compact exhaustion and its metric
(#22); a **normal family**; **locally bounded** family; **locally
equicontinuous**; chordal local uniform convergence of meromorphic functions
and meromorphic normality.

THMS: the canonical compact exhaustion $K_n = \{z\in\Omega : \lvert z\rvert\le n,\
d(z,\partial\Omega)\ge1/n\}$ exists, is increasing with $K_n \subseteq
\mathrm{int}\,K_{n+1}$ and exhausts $\Omega$ (a real point-set item, citing
`the-topology-of-euclidean-space`);
the metric $d(f,g)=\sum 2^{-n}\min(1,\sup_{K_n}\lvert f-g\rvert)$ is a metric
inducing local uniform convergence, and **different exhaustions give the same
topology** (#22); $C(\Omega,\mathbb{C})$ is complete in it and $H(\Omega)$ is
**closed** (Weierstrass, CA-5); **locally bounded $\Rightarrow$ locally
equicontinuous** for holomorphic families (landmark — Cauchy's integral formula
applied to $f(z)-f(w)$, the one genuinely complex-analytic step);
**Montel's theorem** (landmark): a locally bounded family in $H(\Omega)$ is
normal — the compactness theorem on `approximation-and-compactness-in-ck`
applied to each $K_n$, plus a diagonal extraction,
with the **choice cost (AC$_\omega$/DC) inherited from that supplier and named in the
Statement**; the converse (normal $\Rightarrow$ locally bounded) for families in
$H(\Omega)$; **Vitali–Porter**: a locally bounded family converging pointwise on
a set with a limit point converges locally uniformly (Montel plus the identity
theorem); the derivative map $f\mapsto f'$ is continuous on $H(\Omega)$;
**Hurwitz restated in the normal-family language** (cite CA-10, do not re-prove);
the chordal Arzelà--Ascoli criterion for meromorphic maps to
$\widehat{\mathbb C}$, including the possible identically-$\infty$ limit.
This compact-target criterion is required by CA-23's
Montel--Carathéodory proof and is not optional.

FS: a normal family has a locally uniformly convergent sequence
whose limit is in the family (normal is about subsequences, not closedness);
Arzelà–Ascoli alone gives Montel (equicontinuity is exactly what must be
proved, and that is where holomorphy enters); a chordally locally uniform limit
of holomorphic functions can never be identically $\infty$.

B: $\{z^n\}$ on $\mathbb{D}$ is normal, and on $\mathbb{C}$ is not;
$\{f : \lvert f\rvert<1\}$ on any domain is normal; the diagonal extraction
written out for a concrete family; the metric computed for $\Omega=\mathbb{D}$.
CEX: $\{nz\}$ is not normal on any domain containing $0$; $\{e^{nz}\}$ on the
right half plane is not normal as an $H(\Omega)$ family but converges chordally
to $\infty$ locally uniformly; this contrast motivates the
$\widehat{\mathbb{C}}$-valued version.

Traps. (i) #22 is the well-definedness obligation people skip; if "normal
family" depends on an exhaustion, every statement downstream is ambiguous.
(ii) **Do not re-derive Arzelà–Ascoli.**
`approximation-and-compactness-in-ck` owns it, including its choice
ledger. This page's contribution is the equicontinuity step. (iii) The diagonal
argument's choice cost is real; name AC$_\omega$/DC in Facts, not silently.
(iv) The later general `ascoli-arzela` page is NOT required — the $C(K)$
version on `approximation-and-compactness-in-ck` suffices, and declaring the
later page as a prerequisite would push this page's
`requires` needlessly high.

Forward references: NONE load-bearing.

## CA-16. The Riemann Mapping Theorem

`requires`: CA-15, CA-12, CA-7

Pair sources (exact harvested locators): Weber Ch. 5 §5.2 (“Riemann Mapping
Theorem”) and Ch. 7 §7.5 (“Univalent Functions”); Stein--Shakarchi Ch. 8,
“Riemann mapping and Montel”; Schlag Ch. 9 §2 (“Potential proof of Riemann
mapping”).

Proposed A-page inventory (dependency order; 18 items):

| id | kind | one-line statement |
|---|---|---|
| `def-univalent-holomorphic-function` | def | Define a univalent function as an injective holomorphic function. |
| `def-normalized-univalent-class` | def | Define $\mathcal S=\{f\in H(\mathbb D):f\text{ univalent},f(0)=0,f'(0)=1\}$. |
| `def-riemann-map-extremal-family` | def | Define the univalent maps $\Omega\to\mathbb D$ fixing $z_0$. |
| `lem-riemann-map-extremal-family-is-nonempty` | lem | A global square root and inversion construct one bounded univalent competitor. |
| `lem-riemann-map-extremal-derivatives-are-positive-and-bounded` | lem | The supremum of $\lvert f'(z_0)\rvert$ over the extremal family is finite and positive. |
| `lem-riemann-map-extremal-derivative-is-attained` | lem | A maximizing sequence and Montel produce a normalized extremizer. |
| `lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent` | lem | Hurwitz makes every nonconstant local-uniform limit of univalent functions univalent. |
| `lem-riemann-map-extremizer-is-univalent` | lem | The extremal limit is nonconstant and hence univalent. |
| `lem-riemann-map-extremizer-is-surjective` | lem | The Koebe square-root enlargement contradicts extremality if a disc value is omitted. |
| `thm-riemann-mapping-theorem` | thm | Every proper homologically simply connected plane domain is conformally equivalent to $\mathbb D$. |
| `cor-uniqueness-of-the-normalized-riemann-map` | cor | The Riemann map is unique under $f(z_0)=0$ and $f'(z_0)>0$. |
| `thm-area-theorem-for-exterior-univalent-functions` | thm | If $g(z)=z^{-1}+\sum_{n\ge1}b_nz^n$ is univalent on $0<\lvert z\rvert<1$, then $\sum n\lvert b_n\rvert^2\le1$. |
| `cor-bieberbach-second-coefficient-bound` | cor | Every normalized univalent $f(z)=z+a_2z^2+\cdots$ satisfies $\lvert a_2\rvert\le2$. |
| `thm-koebe-one-quarter-theorem` | thm | A normalized univalent disc map contains the disc of radius $1/4$. |
| `thm-koebe-growth-theorem` | thm | For $f\in\mathcal S$ and $\lvert z\rvert=r$, $r/(1+r)^2\le\lvert f(z)\rvert\le r/(1-r)^2$. |
| `thm-koebe-distortion-theorem` | thm | For $f\in\mathcal S$ and $\lvert z\rvert=r$, $(1-r)/(1+r)^3\le\lvert f'(z)\rvert\le(1+r)/(1-r)^3$. |
| `cor-quarter-disc-inclusion-for-univalent-functions` | cor | $D(f(a),(1-\lvert a\rvert^2)\lvert f'(a)\rvert/4)\subset f(\mathbb D)$. |
| `rem-choice-strength-of-the-riemann-mapping-proof` | rem | The maximizing sequence and Montel extraction use $AC_\omega$/DC; the remainder is ZF. |

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
the exclusion of $\Omega=\mathbb{C}$ is necessary (Liouville, CA-5);
**the area theorem** for $g(z) = 1/z + \sum b_n z^n$ univalent on the punctured
disc, $\sum n\lvert b_n\rvert^2 \le 1$ (cite Green's theorem on
`line-integrals-and-the-gradient-theorem`);
**Bieberbach's $\lvert a_2\rvert\le2$**; the **Koebe $\tfrac14$ theorem**
(landmark); the **Koebe distortion and growth estimates**; the corollary that a
univalent $f$ on $\mathbb{D}$ has $f(\mathbb{D})\supseteq D(f(0),
\lvert f'(0)\rvert/4)$; the choice ledger (DC, twice: the maximising sequence
and Montel).

FS: every domain is conformally equivalent to $\mathbb{D}$ ($\mathbb{C}$ itself,
and the punctured disc); the Riemann map extends to a homeomorphism of the
closures without a boundary hypothesis (refuted by a radial-slit disc: its
Euclidean boundary is a circle with an attached interval and is not homeomorphic
to the boundary circle of the closed disc; no prime-end theory or unrestricted
Carathéodory theorem is claimed);
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

`requires`: CA-16, `the-fundamental-group`,
`covering-spaces-and-lifting`, `the-fundamental-group-of-the-circle`

Pair sources (exact harvested locators): Ahlfors Ch. 4 §§4.1--4.7 (index,
chains/cycles, simple connectivity, homology and the global Cauchy theorem);
Stein--Shakarchi Ch. 3, “Homotopies and simply connected domains” and “The
complex logarithm”; Looijenga Ch. 2 (“Covering spaces,” “Fundamental
groupoid,” “Computation of fundamental groups”) for the cited topology side.

Proposed A-page inventory (dependency order; 16 items):

| id | kind | one-line statement |
|---|---|---|
| `thm-homotopy-invariance-of-holomorphic-line-integrals` | thm | Endpoint-fixed homotopic paths have equal integrals of every holomorphic function. |
| `cor-cauchy-theorem-for-null-homotopic-loops` | cor | A null-homotopic closed path has zero holomorphic integral. |
| `thm-winding-number-equals-circle-degree` | thm | $n(\gamma,0)$ is the degree of $\gamma/\lvert\gamma\rvert:S^1\to S^1$, with the orientation convention explicit. |
| `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains` | lem | If $\pi_1(\Omega)=0$, every cycle in $\Omega$ is null-homologous. |
| `lem-connected-spherical-complement-implies-null-homology` | lem | Local constancy of index on connected $\widehat{\mathbb C}\setminus\Omega$ and its value near infinity give null-homology. |
| `lem-null-homology-implies-connected-spherical-complement` | lem | A bounded complementary component supports a cycle with nonzero index. |
| `rem-analytic-equivalences-from-global-cauchy-theory` | rem | Cite the equivalences with zero periods, primitives, holomorphic logarithms and holomorphic square roots. |
| `thm-null-homology-is-equivalent-to-global-harmonic-conjugates` | thm | Every harmonic function has a global conjugate exactly when every cycle is null-homologous. |
| `lem-null-homology-gives-the-plane-or-disc-alternative` | lem | CA-16 gives $\Omega\cong\mathbb D$ unless $\Omega=\mathbb C$. |
| `lem-the-plane-or-disc-alternative-gives-contractibility` | lem | Transport the standard contractions through a homeomorphism. |
| `lem-contractibility-implies-trivial-fundamental-group` | lem | Cite the topology supplier for contractibility implying trivial fundamental group. |
| `thm-grand-equivalence-for-simply-connected-plane-domains` | thm | The eleven complement, homology, homotopy, primitive, logarithm, conjugate, conformal and contractibility conditions listed below are equivalent. |
| `rem-simply-connected-convention-for-plane-domains` | rem | Thereafter “simply connected” denotes any of the equivalent conditions. |
| `cor-spherical-complement-characterization-of-plane-simple-connectivity` | cor | $\Omega$ is simply connected exactly when $\widehat{\mathbb C}\setminus\Omega$ is connected. |
| `cor-winding-number-classifies-loops-in-the-punctured-plane` | cor | Winding number gives the standard isomorphism $\pi_1(\mathbb C^\times)\cong\mathbb Z$. |
| `rem-choice-strength-of-the-grand-equivalence` | rem | The new implications are ZF relative to the cited Riemann-mapping theorem. |

The page that finally joins the analytic, homological and homotopic notions.
It is 80% assembly and its value is **citation discipline**, in the manner of
the Euclidean-equivalence ledger on `the-topology-of-euclidean-space`.

DEFS: none new, except the naming item that fixes **"simply connected"** for
plane domains once and for all, after the equivalence is proved.

THMS: **the grand equivalence** (landmark): for a domain $\Omega\subseteq
\mathbb{C}$, the following are equivalent —
(1) $\widehat{\mathbb{C}}\setminus\Omega$ is connected;
(2) every cycle in $\Omega$ is null-homologous (CA-7);
(3) $\pi_1(\Omega)$ is trivial (`the-fundamental-group`);
(4) every holomorphic $f$ on $\Omega$ has a primitive (CA-7);
(5) $\int_\gamma f = 0$ for every holomorphic $f$ and closed $\gamma$;
(6) every nonvanishing holomorphic $f$ has a holomorphic logarithm;
(7) every nonvanishing holomorphic $f$ has a holomorphic square root;
(8) every harmonic $u$ has a harmonic conjugate (CA-13);
(9) $\Omega = \mathbb{C}$ or $\Omega$ is conformally equivalent to $\mathbb{D}$
(CA-16);
(10) $\Omega$ is homeomorphic to $\mathbb{D}$ or to $\mathbb{C}$;
(11) $\Omega$ is contractible (`homotopy-and-homotopy-equivalence`) —
assembled in the grand-equivalence item with an explicit implication graph and
the carrying item cited at every already-established arrow. Only the genuinely
new bridges are separate numbered items on this page; cited equivalences are
proof steps, not re-minted theorem statements.
The genuinely new ones: (3)$\Rightarrow$(2) (a null-homotopic loop is
null-homologous — the homotopy-invariance-of-the-integral argument, which is
where path homotopy enters this track for the first time);
(1)$\Rightarrow$(2) (the index is locally constant on the connected spherical
complement and is zero near infinity); (2)$\Rightarrow$(1) (a bounded
component of the complement supports a cycle with nonzero index);
(9)$\Rightarrow$(11)$\Rightarrow$(3) (transport along a homeomorphism, citing
`homotopy-and-homotopy-equivalence` and `the-fundamental-group`); **the homotopy form of Cauchy's theorem** (landmark, CX-D4): if
$\gamma_0\simeq\gamma_1$ rel endpoints in $\Omega$ then $\int_{\gamma_0}f =
\int_{\gamma_1}f$ — proved here, from the subdivision of the homotopy square
by the Lebesgue-number/compactness items on `compactness-in-metric-spaces` and
`compactness`, plus Cauchy in a disc (CA-4); and the
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
reverse. (iii) $\pi_1(\mathbb{C}^\times)$: the deformation retract onto $S^1$
is supplied by `homotopy-and-homotopy-equivalence`, and $\pi_1(S^1)$ by
`the-fundamental-group-of-the-circle`; cite both, do not rebuild.
(iv) The naming item must say plainly that from this page onward "simply
connected" is unqualified, and that every earlier page in this track said
"homologically simply connected" for a reason.

Forward references: NONE load-bearing.

## CA-18. Infinite Products and the Weierstrass Factorisation Theorem

`requires`: CA-15, CA-6, `absolute-convergence-and-rearrangement`

Pair sources (exact harvested locators): Stein--Shakarchi Ch. 5 (“Jensen's
formula,” “Functions of finite order,” “Infinite products,” “The Weierstrass
product theorem,” “Hadamard's factorisation theorem”); Weber Ch. 3 §§3.2 and
3.5--3.6 (“Infinite Products,” “Functions of Finite Order,” “Hadamard
Product”); Ahlfors Ch. 5 §§1.1--1.3 for the local convergence machinery.

Proposed A-page inventory (dependency order; 20 items):

| id | kind | one-line statement |
|---|---|---|
| `rem-complex-use-of-the-published-infinite-product-definition` | rem | Reuse `def-infinite-product` and record the complex nonzero-tail and finite-zero conventions. |
| `thm-absolute-convergence-criterion-for-complex-infinite-products` | thm | With no zero factor, $\prod(1+a_n)$ converges absolutely to a nonzero value exactly when $\sum\lvert a_n\rvert<\infty$. |
| `def-normal-convergence-of-holomorphic-products` | def | Define compact-uniform absolute control of the factors' deviations from one. |
| `thm-normal-convergence-theorem-for-holomorphic-products` | thm | The product is holomorphic and its zeros with multiplicity are exactly those contributed by the factors. |
| `cor-logarithmic-derivative-of-a-normally-convergent-product` | cor | Off its zeros, $F'/F=\sum f_n'/f_n$ locally uniformly. |
| `def-weierstrass-elementary-factor` | def | Define $E_p(w)=(1-w)\exp(w+\cdots+w^p/p)$. |
| `lem-weierstrass-elementary-factor-estimate` | lem | For $\lvert w\rvert\le1$, $\lvert1-E_p(w)\rvert\le\lvert w\rvert^{p+1}$. |
| `def-weierstrass-and-canonical-products-and-their-genus` | def | Distinguish a varying-primary-factor Weierstrass product from a fixed-genus canonical product. |
| `def-exponent-of-convergence-of-a-zero-sequence` | def | Define $\lambda=\inf\{s>0:\sum\lvert a_n\rvert^{-s}<\infty\}$. |
| `thm-canonical-product-convergence-criterion` | thm | A fixed-$p$ product converges normally when $\sum\lvert a_n\rvert^{-(p+1)}<\infty$. |
| `thm-weierstrass-product-theorem-on-the-plane` | thm | Every discrete effective divisor on $\mathbb C$ is the exact zero divisor of an entire Weierstrass product. |
| `thm-weierstrass-factorization-theorem` | thm | $f(z)=z^me^{g(z)}\prod E_{p_n}(z/a_n)$ with multiplicities and precise nonuniqueness. |
| `cor-every-meromorphic-function-on-the-plane-is-a-quotient-of-entire-functions` | cor | Cancel a meromorphic function's pole divisor with an entire denominator. |
| `thm-euler-product-for-the-sine-function` | thm | $\sin\pi z=\pi z\prod_{n\ge1}(1-z^2/n^2)$ normally on compacta. |
| `thm-jensen-formula-for-holomorphic-functions` | thm | State the boundary logarithmic mean/interior-zero formula, including a radial limiting argument for boundary zeros. |
| `cor-jensen-zero-counting-bound` | cor | Boundary growth on a larger disc bounds the number of zeros in a smaller disc. |
| `def-order-of-an-entire-function` | def | Define $\rho(f)=\limsup_{r\to\infty}\log\log M_f(r)/\log r$. |
| `thm-exponent-of-zeros-does-not-exceed-entire-order` | thm | The convergence exponent of the zero sequence is at most the finite order of the entire function. |
| `thm-hadamard-factorization-theorem` | thm | A finite-order entire function is $z^me^QP$, with $Q$ polynomial and the product genus bounded in terms of the order. |
| `cor-noninteger-order-bounds-the-canonical-genus` | cor | For nonintegral finite order $\rho$, the canonical-product genus is at most $\lfloor\rho\rfloor$. |

DEFS: convergence of $\prod(1+a_n)$ over $\mathbb{C}$ (#23 — **reuse the
authored `def-infinite-product` on `absolute-convergence-and-rearrangement`**;
add only the
$\mathbb{C}$-specific clauses); normal (locally uniform absolute) convergence of
a product of functions; the **Weierstrass elementary factors** $E_p$; the
**canonical product** and its genus (#24); the **order** of an entire function.

THMS: $\prod(1+a_n)$ converges absolutely $\iff$ $\sum\lvert a_n\rvert<\infty$
(cite `absolute-convergence-and-rearrangement` for the real case and prove the
complex clause); if $\sum\sup_K
\lvert a_n\rvert<\infty$ on every compact $K$ then $\prod(1+a_n(z))$ converges
locally uniformly to a **holomorphic** function whose zero set is the union of
the zero sets with multiplicities (landmark; Weierstrass convergence from CA-5);
$\lvert 1 - E_p(w)\rvert \le \lvert w\rvert^{p+1}$ for $\lvert w\rvert\le1$
(the estimate the whole theory rests on — a real computation, not a remark);
**the Weierstrass product theorem on $\mathbb C$** (landmark): for any sequence
without a finite accumulation point and any positive multiplicities, a
Weierstrass product with suitably varying primary factors has exactly those
zeros. “Canonical product” is reserved for fixed genus. CA-19 separately proves the
corresponding zero-divisor theorem on an arbitrary plane domain using Runge;
the two pages do not leave ownership undecided. **The Weierstrass
factorisation theorem** (landmark):
every entire $f$ is $z^m e^{g(z)}\prod E_{p_n}(z/a_n)$, with the uniqueness
limited to "up to $e^g$" (#24); the corollary that **every meromorphic function
on $\mathbb{C}$ is a quotient of two entire functions** (landmark); the
**product formula for $\sin$**: $\sin\pi z = \pi z\prod(1 - z^2/n^2)$ (landmark;
agreement remark with `pi-the-equivalent-characterizations`'s
Wallis/Euler-product material, which reaches
the same identity by a real route); **Jensen's formula** relating
$\log\lvert f(0)\rvert$ to the boundary mean and the zeros, first for circles
free of zeros and then for every radius by radial approximation and the
explicitly proved integrability/limit step;
**Hadamard's factorisation theorem** for entire functions of finite order
(landmark; the genus is bounded by the order — this is mandatory graduate
content and is what CA-22 uses for $\xi(s)$).

FS: an infinite product converges iff its terms tend to $1$; a product with a
zero factor diverges by definition (convention item, so this `fs-` is about a
convention and should be a `rem-` unless it can be phrased mathematically);
the Weierstrass factorisation is unique; every entire function of order $\rho$
has exactly $\rho$ as its genus.

B: $\prod(1-z^2/n^2)$ computed; the $\sin$ product used to evaluate the Basel
sum a third time (with the agreement remark naming CA-9's residue proof and
the planned real proof on `pi-the-equivalent-characterizations`); $1/\Gamma$
anticipated as a canonical product of genus $1$;
Jensen's formula on a polynomial.
CEX: $\prod(1+1/n)$ diverges although the terms tend to $1$;
$\prod(1 + (-1)^n/\sqrt n)$, whose logarithmic quadratic term prevents a
nonzero limit despite conditional convergence of the linear terms.

Traps. (i) `def-infinite-product` EXISTS as an authored item on
`absolute-convergence-and-rearrangement`. Grep
before minting; re-defining it is the reuse-discipline violation LEVELS.md
step 2 names. (ii) The $E_p$ estimate is where every exposition says "one
checks"; it is a numbered computation. (iii) Jensen's formula's boundary zeros
need the explicit radial-limit argument above; they are not excluded by a
silently strengthened hypothesis. (iv) Hadamard is the page's ceiling; if the page exceeds 24 items it
splits, with Hadamard and Jensen forming a separate pair — step 1 decides.

Forward references: NONE load-bearing.

## CA-19. Mittag-Leffler and Runge's Theorem

`requires`: CA-18, CA-11, CA-9

Pair sources (exact harvested locators): Weber Ch. 3 §3.3 (“Products and
Partial Fractions”) and Ch. 4 §4.4 (“Runge's Theorem”); Stein--Shakarchi Ch.
2, “Applications—Runge approximation,” together with Ch. 5's infinite-product
construction and Weierstrass theorem.

Proposed A-page inventory (dependency order; 18 items):

| id | kind | one-line statement |
|---|---|---|
| `def-principal-part-at-an-isolated-point` | def | Define the finite negative Laurent polynomial prescribed at a discrete point. |
| `def-rational-approximation-with-a-runge-pole-set` | def | A pole set in $\widehat{\mathbb C}\setminus K$ must meet every complementary component. |
| `def-pole-pushing-along-a-chain-of-discs` | def | Name the finite pole-replacement operation in Runge's proof. |
| `lem-grid-cycle-for-runge-approximation` | lem | Construct a finite oriented square-grid boundary surrounding $K$ within the neighbourhood of holomorphy. |
| `lem-cauchy-riemann-sums-give-rational-approximation` | lem | Riemann sums for the grid cycle approximate $f$ uniformly on $K$. |
| `lem-runge-pole-pushing-lemma` | lem | Move a pole through a chain inside one complementary component with arbitrarily small compact-set error. |
| `thm-runge-approximation-with-prescribed-poles` | thm | Rational functions with poles only in the declared Runge pole set approximate $f$ uniformly on $K$. |
| `cor-runge-polynomial-approximation` | cor | If $\mathbb C\setminus K$ is connected, polynomials approximate $f$ uniformly on $K$. |
| `def-runge-approximation-on-a-plane-domain` | def | Define local-uniform approximation on a fixed canonical exhaustion of $\Omega$. |
| `thm-runge-approximation-on-plane-domains` | thm | State the domain version with a fixed pole set meeting every relevant complementary component. |
| `thm-mittag-leffler-theorem-on-the-plane` | thm | Every discrete family of finite principal parts on $\mathbb C$ is realized meromorphically. |
| `thm-mittag-leffler-theorem-on-plane-domains` | thm | Exhaustion and Runge corrections realize every discrete principal-part family on a plane domain. |
| `thm-mittag-leffler-expansion-of-pi-cotangent` | thm | Derive the normally interpreted partial-fraction expansion of $\pi\cot\pi z$. |
| `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared` | cor | Differentiating the cotangent expansion gives the double-pole series. |
| `thm-zero-divisor-theorem-on-plane-domains` | thm | Every discrete effective divisor on $\Omega$ is the zero divisor of a holomorphic function. |
| `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients` | cor | Every meromorphic $f$ is $g/h$ for $g,h\in H(\Omega)$ and $h\not\equiv0$. |
| `cor-meromorphic-functions-on-a-domain-form-a-field` | cor | Pointwise operations make the meromorphic functions on a connected domain a field. |
| `rem-choice-strength-of-runge-and-mittag-leffler` | rem | Canonical exhaustions make the proof ZF once complementary pole representatives are supplied or chosen canonically. |

DEFS: a **prescribed principal part** at a point; **rational approximation on a
compact set**; the **pole-pushing** operation.

THMS: **Runge's theorem** (landmark): if $K\subseteq\mathbb{C}$ is compact and
$f$ is holomorphic on a neighbourhood of $K$, then $f$ is a locally uniform
limit on $K$ of rational functions with poles in a prescribed set meeting every
bounded component of $\mathbb{C}\setminus K$; **polynomial approximation** when
$\mathbb{C}\setminus K$ is connected (landmark) — the proof in three stages:
(1) approximate $f$ on $K$ by a Riemann sum of the Cauchy integral over a
suitable cycle (the cycle's construction from a grid cites
`the-topology-of-euclidean-space` and the Lebesgue-number lemma); (2) **pole pushing** along a chain of
discs; (3) pushing to $\infty$ gives polynomials; the **Runge property of a
domain** and the version for $\Omega$; **Mittag-Leffler's theorem** (landmark):
given a discrete set in a domain $\Omega$ with prescribed principal parts, there
is a meromorphic function on $\Omega$ with exactly those principal parts —
proved by an exhaustion plus Runge-supplied corrections (the general-$\Omega$
case; the $\Omega=\mathbb{C}$ case with a convergence-forcing subtraction of
Taylor polynomials is a separate, cheaper item and comes first);
**the partial-fraction expansion of $\pi\cot\pi z$** (landmark; the real-variable
route is already planned on `pi-the-equivalent-characterizations` — the agreement
remark names both and this page uses the Mittag-Leffler route); the
$\pi^2/\sin^2$ expansion; the corollary that the meromorphic functions on a
domain form a **field** uses only the pointwise operations and connectedness.
The stronger assertion that every such function is a quotient of holomorphic
functions uses the **zero-divisor/Weierstrass theorem for a general plane
domain**, proved by a canonical exhaustion and Runge corrections and explicitly
agreeing with CA-18 on $\mathbb C$. The choice ledger calls the construction
ZF only after the complementary pole representatives are supplied or selected
canonically; the exhaustion alone does not choose them.

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
(a Cantor-like set — cite `cantor-set-baire-and-measure-zero` rather than rebuilding).

Traps. (i) Stage (1)'s cycle is a genuine construction (a grid of squares,
keeping the edges not meeting $K$); it is the page's real work and the place a
"clearly" ships a defect. (ii) Runge is often stated with $\widehat{\mathbb{C}}
\setminus K$; be consistent with CA-11's sphere and say which. (iii) The
$\cot$ agreement remark must not claim what
`pi-the-equivalent-characterizations` does or does not contain
(published-claim decay); use the "what THIS proof uses" form. (iv) Nothing here
needs Hahn–Banach; the functional-analytic proof of Runge is denial 11's
territory and must not be reached for.

Forward references: NONE load-bearing.

## CA-20. Analytic Continuation, Monodromy, and Riemann Surfaces

`requires`: CA-17, CA-6, `covering-spaces-and-lifting`

Pair sources (exact harvested locators): McMullen 213b Ch. 4 “Sheaves and
analytic continuation” (with the exact targeted range recorded in the
harvest); Ahlfors Ch. 3 §§4.1--4.3 (“Use of Level Curves,” “A Survey of
Elementary Mappings,” “Elementary Riemann Surfaces”).

Proposed A-page inventory (dependency order; 21 items):

| id | kind | one-line statement |
|---|---|---|
| `def-holomorphic-germ` | def | Define germs by neighbourhood agreement. |
| `thm-holomorphic-germs-at-a-point-form-a-local-ring` | thm | Germ operations are representative-independent and the nonunits are exactly the germs vanishing at the point. |
| `def-function-element-and-direct-analytic-continuation` | def | Define function elements and direct continuation through overlapping representative domains. |
| `def-analytic-continuation-along-a-path` | def | Define admissible chains of elements along a parametrized path. |
| `lem-refinement-of-analytic-continuation-chains` | lem | Any two admissible chains along the same path have a common refinement. |
| `thm-end-germ-of-path-continuation-is-independent-of-the-chain` | thm | The terminal germ depends on the initial germ and path, not on the admissible chain. |
| `thm-uniqueness-of-analytic-continuation` | thm | Whenever continuation along a fixed path exists, it is unique. |
| `def-complete-analytic-function` | def | Define the germs reachable from one germ by path continuation. |
| `thm-monodromy-theorem` | thm | Continuations along fixed-endpoint homotopic paths agree when continuation exists along every path. |
| `cor-single-valued-continuation-on-simply-connected-domains` | cor | A germ continuable along every path in a simply connected domain defines one holomorphic function. |
| `def-riemann-surface-of-a-complete-analytic-function` | def | Give the germ neighbourhoods and the projection to the base plane. |
| `lem-germ-neighborhoods-form-a-riemann-surface-basis` | lem | Prove the basis, Hausdorff, second-countability and chart-compatibility obligations. |
| `thm-germ-projection-is-a-local-biholomorphism` | thm | The projection is locally inverse to each germ chart and hence an unbranched local biholomorphism. |
| `rem-covering-maps-among-complete-analytic-functions` | rem | The projection is a covering only under an explicit full path-lifting/evenly-covered hypothesis. |
| `thm-riemann-surface-of-the-logarithm` | thm | The logarithm surface is biholomorphic to $\mathbb C$, with projection $\exp:\mathbb C\to\mathbb C^\times$. |
| `thm-riemann-surface-of-an-nth-root` | thm | The root surface over $\mathbb C^\times$ is the $n$-sheeted covering $w\mapsto w^n$. |
| `rem-schwarz-reflection-as-analytic-continuation` | rem | Cite CA-13's reflection theorem as a continuation construction. |
| `def-singular-boundary-point-and-natural-boundary` | def | Define failure of continuation at a boundary point and a boundary every point of which is singular. |
| `thm-circle-of-convergence-contains-a-singular-point` | thm | A power series of finite radius cannot continue through every point of its convergence circle. |
| `thm-pringsheim-theorem` | thm | A power series with nonnegative real coefficients and finite positive radius is singular at the positive real boundary point. |
| `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary` | thm | The explicitly proved $\sum z^{n!}$ argument yields a dense set of radial singularities and hence a natural boundary. |

DEFS: the **germ** of a holomorphic function at a point (#25); a **function
element** $(f, D)$; **direct analytic continuation**; **continuation along a
path** via an admissible chain (#26); the **complete analytic function**
(the set of all germs reachable from a given one); the **Riemann surface** of a
complete analytic function (#27); a **singular point** of a function element;
the **natural boundary**.

THMS: germs form a ring and the relation is an equivalence (#25); **the
continuation along a path is independent of the admissible chain** (#26,
landmark — the refinement/subdivision lemma, with the Lebesgue number of the
covering of $[0,1]$ from `compactness-in-metric-spaces`); continuation is unique when it exists
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
**the projection is always a local biholomorphism**, but it is called a
covering only after the full path-lifting/evenly-covered hypothesis is proved;
the general germ construction does not supply that globally. **The Riemann
surface of $\log$ is
$\mathbb{C}$ covering $\mathbb{C}^\times$ via $\exp$** (landmark — the item that,
with `covering-spaces-and-lifting` and `the-fundamental-group-of-the-circle`,
discharges the ‡ `rem-riemann-surface-of-log`); the
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
CEX: $\sum z^{n!}$ has the unit circle as a natural boundary by the explicit
radial-divergence argument at the dense set of roots of unity; no unsupplied
Hadamard gap theorem is invoked. Also, $\sum z^n/n^2$ is
continuous on the closed disc yet still has $z=1$ singular — continuity of the
sum is not regularity of the function.

Traps. (i) #26 and the monodromy theorem are DIFFERENT statements and must be
separate items in that order; conflating them is the error the owner named
explicitly. (ii) #27's chart compatibility is the second instance of the
obligation CA-11 introduced; reuse that page's pattern and cite the published
`thm-basis-criterion` for the basis condition. (iii) The covering-space language
is `covering-spaces-and-lifting` and
`the-fundamental-group-of-the-circle`; cite, and do not re-prove unique lifting. (iv) The natural
boundary example must be one whose proof closes here; the Hadamard gap theorem
is a real theorem and is not free.

Forward references: NONE load-bearing.

## CA-21. The Gamma Function

`requires`: CA-18, CA-9, `improper-integrals`, CA-5, and MT-11
`product-measures-and-the-fubini-tonelli-theorems`

Pair sources (exact harvested locators): Romik Ch. 14 “The gamma function,”
Theorem 31; Stein--Shakarchi Ch. 6 (“The gamma function,” “Analytic
continuation,” “Further properties”); Weber Ch. 3 §3.7 (“Gamma Function”).

**SEAM AMENDMENT (owner, 2026-08-19; from
`research/plan-realanalysis-completion-track.md` §5.8).** Real analysis now
carries **RC-7** `the-real-gamma-and-beta-functions`, spliced strictly below this
page and deliberately confined to the **real** theory: the Euler integral for real
$s>0$, $\Gamma(s+1)=s\Gamma(s)$, $\Gamma(n+1)=n!$, smoothness by differentiation
under the integral sign, log-convexity, **Bohr–Mollerup**, the Beta integral and
$B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$, $\Gamma(1/2)=\sqrt\pi$ from the Gaussian
integral, real Stirling, and the closed-form volume of the $n$-ball. It exists
because the $n$-ball volume is needed at a real-analysis order far below 343, and
because none of those results needs complex analysis.

**This page keeps everything complex and loses nothing.** Holomorphy on the right
half-plane, meromorphic continuation with its poles and residues, the Euler limit
formula, the Weierstrass product, absence of zeros, the reflection formula, Gauss
multiplication, Legendre duplication, sectorial Stirling and the Hankel contour
are all untouched and remain this page's. Two adjustments only:

- RC-7 mints **real-variable ids** (`def-real-gamma-function-by-the-euler-integral`,
  `def-real-beta-integral`, and so on), so none of this page's ids collide and
  none is withdrawn.
- This page owes one new item, `thm-complex-gamma-restricts-to-the-real-gamma-function`,
  proving that `def-euler-gamma-function` restricted to $(0,\infty)$ is RC-7's
  function. Bohr–Mollerup then transfers rather than being re-proved, and the
  reader is told the two objects are the same — the discipline
  `rem-total-derivative-conventions-and-linear-map-seam` imposes on the future
  general linear-map page.

Proposed A-page inventory (dependency order; 21 items; the supplier contract
below fixes the exported IDs):

| id | kind | one-line statement |
|---|---|---|
| `def-euler-gamma-function` | def | Define $\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt$ for $\Re z>0$ with the real logarithm convention. |
| `lem-gamma-integral-converges-locally-uniformly` | lem | The defining improper integral converges uniformly on compact subsets of $\Re z>0$. |
| `thm-euler-gamma-function-is-holomorphic` | thm | Local-uniform integration makes $\Gamma$ holomorphic on the right half-plane. |
| `thm-gamma-functional-equation` | thm | Integration by parts gives $\Gamma(z+1)=z\Gamma(z)$. |
| `cor-gamma-factorial-values` | cor | $\Gamma(n+1)=n!$ for every $n\ge0$. |
| `thm-gamma-meromorphic-continuation` | thm | The recurrence gives the unique continuation with simple poles and residues $(-1)^n/n!$ at $-n$. |
| `thm-euler-limit-formula-for-gamma` | thm | $\Gamma(z)=\lim_{n\to\infty}n!n^z/[z(z+1)\cdots(z+n)]$ locally uniformly off the poles. |
| `thm-gamma-weierstrass-product` | thm | $1/\Gamma(z)=ze^{\gamma z}\prod_{n\ge1}(1+z/n)e^{-z/n}$ normally on compacta. |
| `cor-gamma-function-has-no-zeros` | cor | Gamma has no zeros and reciprocal gamma has precisely the simple nonpositive-integer zeros. |
| `thm-euler-reflection-formula` | thm | $\Gamma(z)\Gamma(1-z)=\pi/\sin\pi z$ meromorphically. |
| `cor-gamma-one-half-value` | cor | The positive real normalization gives $\Gamma(1/2)=\sqrt\pi$. |
| `def-euler-beta-function` | def | Define $B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt$ for positive real parts. |
| `thm-beta-gamma-identity` | thm | A justified change of variables gives $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$. |
| `thm-gauss-multiplication-formula` | thm | For $m\ge1$, $\prod_{k=0}^{m-1}\Gamma(z+k/m)=(2\pi)^{(m-1)/2}m^{1/2-mz}\Gamma(mz)$. |
| `thm-legendre-duplication-formula` | thm | $\Gamma(z)\Gamma(z+1/2)=2^{1-2z}\sqrt\pi\,\Gamma(2z)$. |
| `thm-gamma-is-logarithmically-convex` | thm | $\log\Gamma$ is convex on $(0,\infty)$. |
| `thm-bohr-mollerup-characterization-of-gamma` | thm | Gamma is the unique positive log-convex $f$ with $f(1)=1$ and $f(x+1)=xf(x)$. |
| `thm-stirling-formula-gamma` | thm | Give the uniform sectorial asymptotic with the chosen logarithm branch. |
| `def-hankel-contour-and-power-branch` | def | Fix the negatively cut contour, its orientation and $-\pi<\arg t<\pi$. |
| `thm-hankel-representation-for-reciprocal-gamma` | thm | On its convergence region and then by continuation, $(2\pi i)^{-1}\int_H e^tt^{-z}\,dt=1/\Gamma(z)$. |
| `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma` | fs | $\Gamma(z)e^{\sin2\pi z}$ has the same recurrence and factorial values but is not Gamma. |

DEFS: $\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt$ on $\mathrm{Re}\,z>0$ (#28);
the **Euler–Mascheroni constant** $\gamma$ is cited from
`thm-euler-mascheroni-constant-and-harmonic-asymptotic`, not re-minted; the
**Weierstrass product** for $1/\Gamma$;
the **beta function**; **logarithmic convexity**.

THMS: the integral converges locally uniformly on $\mathrm{Re}\,z>0$ by
`improper-integrals` and
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
with $f(1)=1$ and $f(x+1)=xf(x)$ — a real-variable theorem, citing
`convexity`, and the item that makes "the" gamma function a phrase for a reader
coming from the real side; the **beta integral** $B(p,q) =
\Gamma(p)\Gamma(q)/\Gamma(p+q)$ (Fubini for improper Riemann integrals — check
what `improper-integrals` and `fubini-and-change-of-variables` deliver, and **if
the double-integral manipulation does not close,
prove the beta identity from Euler's limit formula instead and record the
route**); **Stirling's asymptotic formula** for $\Gamma$ in a sector (landmark;
agreement remark with the real Stirling-via-Wallis treatment on
`pi-the-equivalent-characterizations`); the **Hankel loop representation**
\[
  \frac1{\Gamma(z)}=\frac1{2\pi i}\int_H e^t t^{-z}\,dt,
\]
where $H$ starts at $-\infty$ below the negative real axis, circles the origin
counterclockwise, and returns above the cut, with $-\pi<\arg t<\pi$ and both
improper limits proved. CA-22 does not consume this formula: its continuation
uses theta--Mellin--Poisson.

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
check that its hypotheses cover an IMPROPER integral as defined on
`improper-integrals` — if CA-5's
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

Pair sources (exact harvested locators): Romik Ch. 15 “The Riemann zeta
function,” Theorems 32, 34 and 35; Stein--Shakarchi Ch. 6 (“The zeta
function,” “Continuation and functional equation”).

Proposed A-page inventory (dependency order; 22 items; exported IDs agree with
the number-theory supplier contract):

| id | kind | one-line statement |
|---|---|---|
| `lem-riemann-zeta-dirichlet-series-converges-locally-uniformly` | lem | $\sum n^{-s}$ converges absolutely and locally uniformly on $\Re s>1$. |
| `def-riemann-zeta-function` | def | Define the resulting holomorphic function only on $\Re s>1$. |
| `thm-euler-product-for-riemann-zeta` | thm | Unique factorisation gives $\zeta(s)=\prod_p(1-p^{-s})^{-1}$ absolutely and locally uniformly for $\Re s>1$. |
| `cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one` | cor | The absolutely convergent Euler product is nonzero on $\Re s>1$. |
| `rem-agreement-with-the-existing-infinitude-of-primes` | rem | Cite the arithmetic theorem and mention the zeta proof without re-minting an arithmetic consequence. |
| `thm-riemann-zeta-continuation-to-the-right-half-plane` | thm | For $\Re s>0$, $\zeta(s)=s/(s-1)-s\int_1^\infty\{x\}x^{-s-1}\,dx$, with a residue-one pole at $1$. |
| `thm-dirichlet-eta-representation` | thm | Eta is holomorphic on $\Re s>0$ and equals $(1-2^{1-s})\zeta(s)$, including removable prefactor-zero points without division. |
| `def-jacobi-theta-function` | def | Define $\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$ for $t>0$. |
| `thm-jacobi-theta-transformation` | thm | Gaussian Poisson summation gives $\theta(t)=t^{-1/2}\theta(1/t)$. |
| `thm-theta-mellin-representation-of-completed-zeta` | thm | For $\Re s>1$, $\pi^{-s/2}\Gamma(s/2)\zeta(s)=\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$. |
| `def-completed-riemann-zeta-function` | def | Define $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$. |
| `thm-riemann-zeta-meromorphic-continuation` | thm | Splitting the Mellin integral at one continues zeta uniquely to $\mathbb C$ with its sole residue-one pole. |
| `thm-completed-riemann-zeta-functional-equation` | thm | $\Lambda(s)$ is meromorphic with poles at $0,1$ and satisfies $\Lambda(s)=\Lambda(1-s)$. |
| `thm-riemann-zeta-functional-equation` | thm | Reflection and duplication convert the completed identity to the classical sine--gamma formula. |
| `def-riemann-xi-function` | def | Define the entire completion $\xi(s)=\tfrac12s(s-1)\Lambda(s)$. |
| `thm-riemann-xi-is-entire-of-order-one` | thm | Xi is entire of order one, real on the real axis and satisfies $\xi(s)=\xi(1-s)$. |
| `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane` | thm | The trigonometric nonnegativity argument excludes zeros on $\Re s=1$, while $s=1$ is the pole. |
| `thm-trivial-zeros-and-critical-strip` | thm | The zeros in $\Re s\le0$ are exactly the negative even integers; all others lie in the open critical strip with both symmetries. |
| `thm-hadamard-product-for-riemann-xi` | thm | Xi has its genus-one canonical product over nontrivial zeros with multiplicities and convergence prescription. |
| `def-bernoulli-numbers-by-their-generating-function` | def | Fix $t/(e^t-1)=\sum B_nt^n/n!$ and $B_1=-1/2$. |
| `thm-special-values-of-riemann-zeta-at-integers` | thm | State $\zeta(-m)=(-1)^mB_{m+1}/(m+1)$ and the standard Bernoulli formula for $\zeta(2m)$. |
| `rem-dirichlet-series-continuation-and-regularized-sums` | rem | The defining series is asserted only for $\Re s>1$; in particular $\zeta(-1)=-1/12$ is not an ordinary positive-integer sum. |

DEFS: $\zeta(s) = \sum_{n\ge1} n^{-s}$ on $\Re s>1$ (where
$n^{-s}=e^{-s\log n}$ uses the real logarithm); the Euler product; the Jacobi
theta function $\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$ for $t>0$;
$\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$; the entire completed function
$\xi(s)=\tfrac12s(s-1)\Lambda(s)$; critical strip, critical line and trivial
zeros.

THMS: the Dirichlet series converges absolutely and locally uniformly on
$\mathrm{Re}\,s>1$, so $\zeta$ is holomorphic there; the **Euler product**
$\zeta(s) = \prod_p (1-p^{-s})^{-1}$ (landmark; cites
`primes-and-the-fundamental-theorem-of-arithmetic` and the infinite-product
theory of CA-18), and the
corollary that $\zeta(s)\ne0$ on $\mathrm{Re}\,s>1$; **infinitude of primes**
follows again from the pole at $s=1$, but appears only as an agreement remark
citing the arithmetic theorem, not as a new complex-analysis corollary; the
**continuation to $\mathrm{Re}\,s>0$** by the
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
$\zeta(-1)=-1/12$, and $\zeta(2n)$ use the Bernoulli numbers defined here by
$t/(e^t-1)=\sum B_nt^n/n!$, with $B_1=-1/2$;
the **Riemann hypothesis** as a `rem-` with `proved_here: false`, homed on
`open-problems-and-research-frontier` per the ‡ conventions, and MENTIONED here
via `external_refs` (the axiom/open-problem exemption pattern already used by
`rem-jacobian-conjecture`).

FS: $\zeta(s) = \sum n^{-s}$ for all $s\ne1$ (the series diverges off
$\mathrm{Re}\,s>1$; the continuation is not the series — the single most common
misunderstanding and the best `fs-` on the page); $\zeta(-1) = 1+2+3+\cdots$;
$\zeta$ is entire; the functional equation alone determines $\zeta$ (refuted
by $e^{(s-1/2)^2}\zeta(s)$, whose extra entire factor is invariant under
$s\mapsto1-s$). The Riemann hypothesis is not
a false statement: it appears only as the existing sourced, unproved
open-problem remark, after the proved open-strip and symmetry statements.

B: $\zeta(2)$ from the $\sin$ product (with the agreement remark); the Euler
product verified numerically to a few terms; $\zeta(0)=-1/2$ from the split
theta continuation or a proved limit, never literal substitution into a
zero-times-pole formula; the Gaussian transformed under Fourier transform; the
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
| CA-21 | `thm-gamma-meromorphic-continuation` | $\Gamma$ has a unique meromorphic continuation to $\mathbb C$ and has exactly simple poles at $0,-1,-2,\ldots$ with residue $(-1)^n/n!$ at $-n$. |
| CA-21 | `thm-gamma-functional-equation` | $\Gamma(s+1)=s\Gamma(s)$ as an identity of meromorphic functions. |
| CA-21 | `thm-gamma-weierstrass-product` | $1/\Gamma(s)=s e^{\gamma s}\prod_{n\ge1}(1+s/n)e^{-s/n}$, with normal convergence and zero multiplicities proved. |
| CA-21 | `cor-gamma-function-has-no-zeros` | $\Gamma$ has no zeros on $\mathbb C$; equivalently the zeros of $1/\Gamma$ are exactly $0,-1,-2,\ldots$, all simple. |
| CA-21 | `thm-euler-reflection-formula` | $\Gamma(s)\Gamma(1-s)=\pi/\sin(\pi s)$ wherever both sides are finite, hence meromorphically everywhere. |
| CA-21 | `thm-legendre-duplication-formula` | $\Gamma(s)\Gamma(s+\tfrac12)=2^{1-2s}\sqrt\pi\,\Gamma(2s)$ meromorphically. |
| CA-21 | `thm-stirling-formula-gamma` | Uniformly in each closed sector $\lvert\arg s\rvert\le\pi-\delta$, $\Gamma(s)=\sqrt{2\pi}s^{s-1/2}e^{-s}(1+O_\delta(\lvert s\rvert^{-1}))$, using the principal logarithm in $s^{s-1/2}$. |
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

**Mandatory graduate capstone.** The old “drop the page if the Bloch route is
inconvenient” instruction is withdrawn: Picard is a standard endpoint of the
one-variable theory, and the sources below provide both the classical normal-
family route and the independent Nevanlinna route. A future build decomposes
the classical proof further if necessary; it does not replace a proved theorem
by an unproved remark.

`requires`: CA-15, CA-12, CA-8

Proposed A-page inventory (dependency order; 16 items):

| id | kind | one-line statement |
|---|---|---|
| `def-bloch-radius-and-bloch-constant` | def | Define the largest schlicht-disc radius $\beta(f)$ and the extremal $\mathcal B=\inf_{f'(0)=1}\beta(f)$. |
| `def-landau-radius-and-landau-constant` | def | Define the largest round-disc radius in $f(\mathbb D)$ and its normalized infimum $\mathcal L$. |
| `def-two-value-omitting-holomorphic-family` | def | Define a family whose members omit the same two finite values, normalized to $0$ and $1$. |
| `lem-bloch-rescaling-at-an-almost-maximal-derivative` | lem | An almost-maximizer of $(1-\lvert z\rvert^2)\lvert f'(z)\rvert$ yields a normalized disc map with controlled derivative oscillation. |
| `lem-quantitative-univalence-from-controlled-derivative` | lem | The stated derivative control gives injectivity on a fixed subdisc and a fixed round disc in its image. |
| `thm-bloch-theorem` | thm | There is an absolute $b>0$ with $\beta(f)\ge b$ whenever $\lvert f'(0)\rvert=1$, hence $\mathcal B>0$. |
| `thm-landau-theorem` | thm | Under the same normalization, the full image contains a round disc of universal positive radius and $\mathcal L\ge\mathcal B>0$. |
| `lem-holomorphic-logarithms-for-two-omitted-values` | lem | If a disc function omits $0$ and $1$, both $f$ and $1-f$ have holomorphic logarithms. |
| `thm-schottky-theorem` | thm | Omitting $0$ and $1$ plus a centre bound controls the function on every smaller disc. |
| `thm-montel-caratheodory-theorem` | thm | Holomorphic families omitting $0$ and $1$ are normal for chordal local uniform convergence. |
| `thm-little-picard-theorem` | thm | A nonconstant entire function omits at most one finite value. |
| `lem-two-omitted-values-rule-out-an-essential-singularity` | lem | A punctured-disc holomorphic function omitting $0$ and $1$ has a removable singularity or pole. |
| `thm-great-picard-theorem` | thm | Near a holomorphic essential singularity, every finite complex value except possibly one occurs infinitely often. |
| `cor-meromorphic-little-picard-theorem` | cor | A nonconstant meromorphic function on $\mathbb C$ omits at most two sphere values. |
| `cor-meromorphic-great-picard-theorem` | cor | Near a meromorphic essential singularity, every sphere value except possibly two occurs infinitely often. |
| `rem-agreement-between-classical-and-nevanlinna-picard-theorems` | rem | Record CA-NV-2's independent quantitative proof without making it a dependency. |

DEFS: the **Bloch radius** $\beta(f)$ and extremal **Bloch constant**
$\mathcal B$; an explicit proof constant $b$ is an admissible lower bound and
is not renamed “Bloch's constant”; the **Landau radius** and extremal Landau
constant; a family **omitting two values**.

THMS: **Bloch's theorem** (landmark): for a holomorphic $f$ on $\mathbb D$
with $|f'(0)|=1$, some subdomain is mapped injectively by $f$ onto a round
disc of radius at least an absolute constant $b>0$; **Landau's theorem**:
$f(\mathbb D)$ contains a round disc of an absolute positive radius under the
same derivative normalisation, without the injectivity conclusion;
**Schottky's theorem** (landmark): a
holomorphic $f$ on $\mathbb{D}$ omitting $0$ and $1$ with $\lvert f(0)\rvert\le
R$ satisfies $\lvert f(z)\rvert\le C(R,r)$ on $\lvert z\rvert\le r$ — via the
branch construction $g = \log(\ldots)$ built from the omitted values plus Bloch;
**Montel–Carathéodory** (landmark): the family of holomorphic functions on
$\Omega$ omitting $0$ and $1$ is normal in $C(\Omega,\widehat{\mathbb{C}})$
(needs CA-15's $\widehat{\mathbb{C}}$-valued normal-family theorem, which is a
required prerequisite rather than an optional convenience);
**little Picard** (landmark): a nonconstant entire function omits at most one
value; **great Picard** (landmark): near an essential singularity, $f$ takes
every value with at most one exception, infinitely often — the sharpening of
CA-8's Casorati–Weierstrass. The proof first establishes separately that two
omitted finite values force a punctured-disc singularity to be removable or a
pole, and then reapplies the conclusion on every smaller punctured disc for
the “infinitely often” clause; Casorati plus normality alone is not presented
as a proof. The agreement remark follows; and the meromorphic
plane corollary that a nonconstant meromorphic function omits at most two
values of $\widehat{\mathbb C}$.

FS: a boundedness hypothesis is needed to conclude that an entire function
omitting two finite values is constant; Casorati–Weierstrass implies Picard;
$e^z$ omits two finite values; a nonconstant
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

Sources and proof strategy: Weber Ch. 7 §§7.3--7.4 (“Ahlfors Lemma” and
“Landau--Schottky”) supplies the metric/normal-family route; Eremenko §§4--6
and Goldberg--Ostrovskii Ch. 3 §§1--2, Ch. 4 §§1,3 independently give both
Picard conclusions from the Second Main Theorem. Develop Bloch--Landau--
Schottky--Montel--Carathéodory on this page and cite CA-NV-2 only for an
agreement proof once both pages exist.

Traps. (i) A modular-$\lambda$ proof becomes available after CA-MF-1, but is an
alternate proof rather than a prerequisite; this page uses the sourced
Bloch--Landau--Schottky route and therefore does not create a placement cycle.
(ii) Schottky's branch constructions are
where the argument is delicate and where the branch discipline of CA-12 pays
off; every $\log$ and $\sqrt{\ }$ names its branch. (iii) Great Picard needs
Montel–Carathéodory on a punctured disc plus a normality argument; the
"infinitely often" clause is separate from the "takes every value" clause.
(iv) The “infinitely often” conclusion in great Picard uses the theorem again
on every smaller punctured disc; it is not obtained merely by deleting one
exceptional value from Casorati's dense-image conclusion.

Forward references: CA-NV-2 and CA-MF-1 furnish independent agreement proofs
only and are non-load-bearing; the page's declared route uses only its
backward prerequisites.

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

`requires`: CA-6, CA-4, `the-total-derivative`,
`fubini-and-change-of-variables`, `rn-as-a-normed-space`,
`mixed-partials-taylor-and-extrema`, and
`absolute-convergence-and-rearrangement`

Pair sources (exact harvested locators): Lebl Ch. 1 §§1.1--1.5 (“Onto
mappings,” “Power series,” “Derivatives,” “Ball versus polydisc,” “Cartan
uniqueness”); CIMAT §§3.3--3.6 (“Domains of convergence and holomorphy,”
geometric pseudoconvexity, and subharmonic/plurisubharmonic functions), using
the foundational power-series and Cauchy-formula portion here.

Proposed A-page inventory (dependency order; 22 items):

| id | kind | one-line statement |
|---|---|---|
| `def-balls-and-polydiscs-in-complex-euclidean-space` | def | Define balls, open and closed polydiscs, subpolydiscs and distinguished boundaries, citing the $\mathbb C^m\cong\mathbb R^{2m}$ dictionary. |
| `def-multivariable-power-series` | def | Define $\sum_{\alpha\in\mathbb N^m}c_\alpha(z-a)^\alpha$ as an unordered absolutely summable family and specify local-uniform convergence on polydiscs. |
| `def-separately-holomorphic-function` | def | Define separate holomorphy by one-variable holomorphy on every coordinate slice. |
| `def-holomorphic-function-in-several-complex-variables` | def | Define scalar holomorphy by complex Fréchet differentiability. |
| `def-wirtinger-operators-in-several-complex-variables` | def | Extend the one-variable Wirtinger operators to the $2m$ real partial derivatives. |
| `def-holomorphic-map-and-complex-jacobian` | def | Define vector-valued holomorphy componentwise and define the complex Jacobian matrix. |
| `lem-complex-linear-real-differential-criterion` | lem | A real-linear map $\mathbb C^m\to\mathbb C^n$ is complex linear exactly when its anti-Wirtinger part vanishes. |
| `thm-componentwise-holomorphy-in-several-complex-variables` | thm | Complex Fréchet holomorphy of a vector-valued map is equivalent to holomorphy of every component. |
| `thm-chain-rule-for-holomorphic-maps-in-several-variables` | thm | $G\circ F$ is holomorphic and $J_\mathbb C(G\circ F)=J_\mathbb CG(F)J_\mathbb CF$. |
| `thm-cauchy-integral-formula-on-a-polydisc` | thm | Iterated one-variable Cauchy integration represents a holomorphic function and all of its mixed derivatives on a smaller polydisc. |
| `thm-power-series-expansion-in-several-complex-variables` | thm | A holomorphic function on a polydisc has its unique absolutely and locally uniformly convergent derivative-coefficient expansion. |
| `thm-cauchy-estimates-on-a-polydisc` | thm | Bound each mixed derivative at the centre by the boundary supremum and the corresponding product of radii. |
| `cor-holomorphic-functions-in-several-variables-are-smooth` | cor | Holomorphic functions are $C^\infty$ and every mixed complex derivative is holomorphic. |
| `thm-power-series-define-holomorphic-functions-in-several-variables` | thm | Every absolutely convergent multivariable power series is holomorphic and differentiates termwise on smaller polydiscs. |
| `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables` | thm | Locally uniform limits are holomorphic and all derivatives converge locally uniformly. |
| `thm-cauchy-riemann-characterization-in-several-complex-variables` | thm | For $C^1$ scalar functions, holomorphy, complex-linearity of the real derivative and vanishing of every $\partial_{\bar z_j}f$ are equivalent. |
| `thm-osgood-lemma-in-several-complex-variables` | thm | Continuity plus separate holomorphy implies holomorphy. |
| `thm-locally-bounded-separate-holomorphy` | thm | Separate holomorphy plus local boundedness implies joint continuity and hence holomorphy. |
| `thm-identity-theorem-in-several-complex-variables` | thm | Vanishing on a nonempty open subset of a domain forces vanishing everywhere; a zero-set accumulation point alone does not. |
| `thm-maximum-modulus-principle-in-several-complex-variables` | thm | An interior local maximum of a scalar holomorphic modulus forces constancy. |
| `cor-liouville-theorem-in-several-complex-variables` | cor | Every bounded entire scalar function on $\mathbb C^m$ is constant. |
| `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` | thm | Every nonconstant scalar holomorphic function on a domain is open, by restriction to a complex line detecting its first nonzero homogeneous term. |

DEFS: $\mathbb{C}^m$ as a normed $\mathbb{C}$-vector space and its
identification with $\mathbb{R}^{2m}$ (dictionary item, the SC analogue of #1,
citing `rn-as-a-normed-space`, `vector-spaces-and-subspaces`, and the complex
field dictionary); the **polydisc** $\Delta(a;r)$ and the **ball**;
**separately holomorphic**; **holomorphic** as complex Fréchet differentiable
(with equivalence here only to local power-series expansion and the $C^1$
Cauchy--Riemann system; unrestricted separate holomorphy is SC-2's theorem);
multi-index notation $\alpha$, $z^\alpha$, $\partial^\alpha$ (cite
`mixed-partials-taylor-and-extrema`, which owns multi-indices, do not re-mint);
the **Wirtinger operators**
$\partial/\partial z_j, \partial/\partial\bar z_j$; a **holomorphic map**
$\mathbb{C}^m\to\mathbb{C}^n$ (#31); the **holomorphic Jacobian**
$\big(\partial f_i/\partial z_j\big)$.

THMS: **#31, the componentwise reduction** (landmark): $f$ is holomorphic as a
map iff each $f_j$ is; equivalently iff $f$ is real-differentiable with
$\mathbb{C}$-linear total derivative (`the-total-derivative`); **the Cauchy
integral formula on a
polydisc** (landmark): the iterated one-variable formula, with the interchange
of the iterated integrals justified by `fubini-and-change-of-variables`;
**the power series expansion** (landmark): a holomorphic $f$ on a polydisc is
the sum of a power series $\sum_\alpha c_\alpha (z-a)^\alpha$ converging
absolutely and locally uniformly there, with $c_\alpha =
\partial^\alpha f(a)/\alpha!$ and unique coefficients (#32, citing the unordered
summation on `absolute-convergence-and-rearrangement`); consequently
$f\in C^\infty$ and all
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
one-variable bound); multivariable power series define holomorphic functions
and differentiate termwise; locally uniform holomorphic limits remain
holomorphic with derivative convergence; the **chain rule** and the
multiplicativity of the holomorphic Jacobian determinant; and the scalar
**open mapping theorem** in several variables, proved by restricting near a
point to a complex line on which the first nonzero homogeneous Taylor term
does not vanish.

SC-2 later proves the **full Hartogs separate-holomorphicity theorem**:
separate holomorphy alone implies this Fréchet/local-power-series notion. It is
not folded into the foundational definition, and SC-1 does not cite that later
theorem in any proof.

FS: the REAL analogue that a separately real-analytic function
must be continuous (refuted by $xy/(x^2+y^2)$, already scaffolded on
`the-total-derivative-examples` and cited rather than re-minted); a holomorphic
function on $\mathbb{C}^2$ vanishing on a set with a limit point vanishes
identically (witness: $z_1$, vanishing on the whole hyperplane $z_1=0$ and not
identically zero — the sharp separation from CA-6).

B: $z_1 z_2$, $e^{z_1+z_2}$, $z_1/(1-z_2)$ expanded on polydiscs; the Cauchy
formula on a bidisc computed; the componentwise reduction checked on an explicit
$\mathbb{C}^2\to\mathbb{C}^3$ map; the Jacobian of $(z_1z_2, z_1+z_2)$.
CEX: $z_1$ on $\mathbb{C}^2$ has a nonisolated, unbounded zero set; the
real-variable $xy/(x^2+y^2)$ (cited from `the-total-derivative-examples`).

Traps. (i) Do not put continuity into the definition to make Hartogs's theorem
tautological. Complex Fréchet holomorphy, local power-series representability,
and the $C^1$ CR system are proved equivalent here; unrestricted separate
holomorphicity is proved equivalent on SC-2.
(ii) The identity theorem's several-variable form is genuinely weaker than
CA-6's; a proof or Statement that carries CA-6's phrasing over is the fatal
"asserts more than the proof gives" class. (iii) The cited Riemann Fubini theorem is for the
Riemann integral on a rectangle and is stated with upper and lower integrals for
a reason; check what it actually delivers for a continuous integrand on a
product of circles before relying on it. (iv) Multi-indices are owned by
`mixed-partials-taylor-and-extrema`;
cite. (v) The theorem that a scalar holomorphic zero set has no isolated
points in dimension at least two belongs after Weierstrass preparation on
SC-3; Poincaré's ball--polydisc non-equivalence belongs on SC-7, where the
Bergman invariant supplies a proof.

Forward references: SC-2's full separate-holomorphy theorem is declared for
the eventual dictionary but is not load-bearing on SC-1.

## SC-2. The Hartogs Phenomena

`requires`: SC-1, CA-8, CA-14, `cantor-set-baire-and-measure-zero`, and the
MT-8 integration/Fatou interfaces

Pair sources (exact harvested locators): Lebl Ch. 1 §1.6 (“Riemann extension,
zeros and injectivity”) and Ch. 2 §2.1 (“Domains and extensions”); CIMAT
§§3.3--3.4 (“Domains of convergence and holomorphy,” “Geometric
pseudoconvexity”); Garrett, *Hartogs' theorem: separate analyticity implies
joint*, stages 1--4 read in full as enumerated in the source notes below.

Proposed A-page inventory (dependency order; 15 items):

| id | kind | one-line statement |
|---|---|---|
| `def-holomorphic-extension-and-domain-of-holomorphy` | def | Define extension through an overlap and freeze the simultaneous-extension convention for a domain of holomorphy. |
| `def-hartogs-figure-and-polydisc-hull` | def | Define $H(r,s)$ and its bidisc hull for $0<r,s<1$. |
| `lem-holomorphic-dependence-of-slice-laurent-coefficients` | lem | Slice Laurent coefficients computed on a fixed annular circle vary holomorphically in the other variable. |
| `lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure` | lem | Negative coefficients vanish first on the thin cylinder and then everywhere by the identity theorem. |
| `thm-hartogs-figure-extension` | thm | Every function holomorphic on the Hartogs figure extends uniquely to the bidisc by its nonnegative slice series/Cauchy integral. |
| `cor-hartogs-figure-obstruction-to-domain-of-holomorphy` | cor | A domain containing the figure but not its hull is not a domain of holomorphy under the fixed simultaneous-extension convention. |
| `thm-removability-of-a-puncture-in-several-complex-variables` | thm | For $m\ge2$, a function holomorphic on $\Omega\setminus\{a\}$ extends uniquely across $a$. |
| `cor-no-isolated-holomorphic-singularities-in-several-complex-variables` | cor | Deleted points are removable for scalar holomorphic functions in dimension at least two. |
| `lem-bounded-punctured-slice-has-holomorphic-parameter-extension` | lem | A locally bounded function off $\{z_m=0\}$ has slicewise removable values whose Cauchy integral depends holomorphically on $z'$. |
| `thm-riemann-extension-across-a-coordinate-hyperplane` | thm | A locally bounded function holomorphic off a coordinate hyperplane extends uniquely across it. |
| `lem-local-boundedness-of-separately-holomorphic-functions` | lem | Separate holomorphy implies boundedness on every smaller polydisc by the ZF Euclidean Baire step and plane Hartogs lemma/Fatou. |
| `thm-hartogs-separate-holomorphy` | thm | Separate holomorphy alone implies joint Fréchet holomorphy in every finite dimension. |
| `lem-local-hartogs-extension-across-polydisc-shells` | lem | Hartogs-figure extension supplies compatible local extensions across coordinate-polydisc shells. |
| `lem-propagation-and-gluing-of-hartogs-extensions` | lem | Local extensions propagate and glue independently of a finite chain through connected $\Omega\setminus K$. |
| `thm-hartogs-extension-across-compact-holes` | thm | If $m\ge2$, $K\Subset\Omega$ and $\Omega\setminus K$ is connected, every holomorphic function there extends uniquely to $\Omega$. |

DEFS: a **Hartogs figure** $H(r,s) = \{\lvert z_1\rvert<1, \lvert z_2\rvert<s\}
\cup \{r<\lvert z_1\rvert<1, \lvert z_2\rvert<1\}$ and its polydisc hull;
**domain of holomorphy** (the definition only — SC-4 does the theory);
**holomorphically extendable**.

THMS: **the Hartogs figure extension theorem** (landmark): every holomorphic
function on $H(r,s)$ extends holomorphically to the full bidisc — the elementary
proof, defining the extension by the one-variable Cauchy integral
$\tilde f(z_1,z_2) = \frac{1}{2\pi i}\int_{\lvert\zeta\rvert = \rho}
\frac{f(\zeta,z_2)}{\zeta-z_1}\,d\zeta$ for $r<\rho<1$, showing it is holomorphic (SC-1's
formula plus the parameter-integral lemma of CA-5) and agrees with $f$ on the
overlap by the one-variable Cauchy formula and the identity theorem;
**consequently no domain of holomorphy contains a Hartogs figure with its hull
outside** (landmark — the statement that makes the phenomenon quotable, and the
bridge to SC-4); **there are no isolated singularities in $\mathbb{C}^m$,
$m\ge2$**: a function holomorphic on $\Delta\setminus\{0\}$ extends to $\Delta$
(landmark; from the Hartogs figure, or directly by the Cauchy formula in one
variable on the slices — take the direct route, it is shorter); the
**coordinate-hyperplane Riemann extension theorem**: a locally bounded
function holomorphic off $\{z_m=0\}$ extends by slicewise removability and
holomorphic parameter dependence. Extension across the full zero set of an
arbitrary holomorphic function is not dependency-closed here; SC-3 proves it
after Weierstrass preparation;
**the full Hartogs extension theorem**: if $K\Subset\Omega\subset\mathbb C^m$,
$m\ge2$, $\Omega\setminus K$ is connected, and $f$ is holomorphic there, then
$f$ extends uniquely to $\Omega$; **Hartogs's separate-holomorphicity theorem**
in every finite dimension, with no continuity or local-boundedness hypothesis.
Use the full proof now licensed by the measure and CA-14 interfaces: its Baire
stage remains, but it occurs in separable finite-dimensional Euclidean space
where the cited theorem is ZF; Hartogs's lemma/Fatou propagates the local bound.
The compact-hole
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
statement here is only for a coordinate hyperplane; the general holomorphic
hypersurface theorem is SC-3's. “Thin” without a definition is the false-title
class. (iii) The parameter-integral lemma is CA-5's (#28); cite.
(iv) `thm-hartogs` is already a set-theory id; every several-variable Hartogs
item is namespaced, for example `thm-hartogs-extension-across-compact-holes`.

Forward references: SC-5 later gives an independent compact-support
$\bar\partial$ proof of the compact-hole theorem; the agreement is declared
and is not load-bearing on SC-2.

## SC-3. The Holomorphic Inverse Function Theorem and Weierstrass Preparation

`requires`: SC-1, `inverse-and-implicit-function-theorems`,
CA-10, `euclidean-domains-pids-and-unique-factorisation`

Pair sources (exact harvested locators): Lebl Ch. 6 §§6.1--6.4 (regular
coordinates, Weierstrass preparation/division, Noetherian local rings and
factorisation/UFD); Freitag Ch. I §§1--4 (“Elementary analytic functions,”
“Weierstrass preparation,” “First applications,” “Hypersurfaces”).

Proposed A-page inventory (dependency order; 27 items):

| id | kind | one-line statement |
|---|---|---|
| `def-biholomorphic-map-several-complex-variables` | def | Define a biholomorphism as a holomorphic bijection with holomorphic inverse, extending the one-variable notion. |
| `lem-real-jacobian-determinant-of-a-complex-linear-map` | lem | For $L:\mathbb C^m\to\mathbb C^m$, $\det_\mathbb RL=\lvert\det_\mathbb CL\rvert^2$. |
| `thm-holomorphic-inverse-function-theorem-several-variables` | thm | An invertible complex Jacobian gives mutually inverse biholomorphisms on neighbourhoods. |
| `thm-holomorphic-implicit-function-theorem` | thm | An invertible dependent-variable Jacobian makes the local zero set the graph of a unique holomorphic function. |
| `thm-holomorphic-constant-rank-theorem` | thm | A holomorphic map of locally constant rank has holomorphic source and target coordinates in which it is the standard projection-inclusion. |
| `def-holomorphic-germ-ring-and-its-maximal-ideal` | def | Define $\mathcal O_{m,0}$ by neighbourhood agreement and its vanishing maximal ideal. |
| `prop-units-in-the-holomorphic-germ-ring` | prop | A germ is a unit exactly when its value at the origin is nonzero, so the ring is local. |
| `def-regular-holomorphic-germ` | def | A germ is $z_m$-regular of order $d$ when its last-variable restriction has a zero of exact order $d$. |
| `def-weierstrass-polynomial` | def | Define a monic polynomial in $z_m$ whose lower coefficient germs in $z'$ vanish at the origin. |
| `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular` | lem | Every nonzero germ becomes $z_m$-regular after an invertible complex-linear coordinate change. |
| `lem-stability-of-slice-zero-count-under-holomorphic-parameters` | lem | Nearby slices of an order-$d$ regular germ have exactly $d$ zeros with multiplicity inside a fixed circle and none on it. |
| `lem-holomorphic-power-sums-of-slice-zeros` | lem | The residue integrals $p_k(z')=(2\pi i)^{-1}\int\zeta^k\partial_\zeta f/f\,d\zeta$ are holomorphic without labelling roots. |
| `lem-newton-identities-for-slice-roots` | lem | Prove locally the finite Newton recurrences expressing elementary symmetric coefficients in $p_1,\ldots,p_d$. |
| `thm-weierstrass-preparation-theorem` | thm | A $z_m$-regular germ of order $d$ factors as a unit times a degree-$d$ Weierstrass polynomial. |
| `thm-uniqueness-in-weierstrass-preparation` | thm | The unit and prepared polynomial are unique. |
| `thm-weierstrass-division-theorem` | thm | Division by a Weierstrass polynomial has a unique holomorphic quotient and remainder of last-variable degree below $d$. |
| `def-noetherian-ring-and-module` | def | Define Noetherian rings and modules by the equivalent ACC/finitely-generated-submodule conditions needed here. |
| `lem-finite-modules-over-noetherian-rings-are-noetherian` | lem | Every submodule of a finitely generated module over a Noetherian ring is finitely generated. |
| `lem-weierstrass-quotient-is-a-finite-module` | lem | Unique remainders identify $\mathcal O_m/(W)$ with a finite $\mathcal O_{m-1}$-module. |
| `thm-holomorphic-germ-ring-is-noetherian` | thm | $\mathcal O_{m,0}$ is Noetherian by induction using division and the finite-module lemmas. |
| `lem-noetherian-domains-are-atomic` | lem | Every nonzero nonunit in a Noetherian domain has a finite irreducible factorization. |
| `lem-gauss-lemma-over-a-ufd` | lem | Primitive polynomials over a UFD multiply primitively and have the standard fraction-field irreducibility criterion. |
| `lem-prepared-factorizations-and-irreducibility` | lem | Up to units, factorizations of a regular germ correspond to factorizations of its prepared polynomial. |
| `thm-holomorphic-germ-ring-is-a-ufd` | thm | $\mathcal O_{m,0}$ is a UFD by induction using preparation and the general Gauss lemma. |
| `thm-zero-set-has-no-isolated-points-in-several-complex-variables` | thm | If $m\ge2$ and $f$ is not identically zero, every point of $Z(f)$ is a limit point of other zeros. |
| `thm-riemann-extension-across-hypersurface-zero-sets` | thm | If $g\not\equiv0$ and $f$ is locally bounded and holomorphic off $Z(g)$, then $f$ extends uniquely across $Z(g)$. |
| `cor-locally-bounded-meromorphic-poles-are-removable` | cor | A locally bounded quotient $h/g$ off $Z(g)$ extends holomorphically. |

DEFS: **biholomorphic** map of domains in $\mathbb{C}^m$; the ring
$\mathcal{O}_m$ of germs of holomorphic functions at $0\in\mathbb{C}^m$
(reusing CA-20's germ machinery, #25); **regular of order $d$ in $z_m$**;
a **Weierstrass polynomial** (#33); the **unit group** of $\mathcal{O}_m$.

THMS: **the holomorphic inverse function theorem** (landmark): $f$ holomorphic
near $a$ with invertible holomorphic Jacobian is a biholomorphism of
neighbourhoods — from the REAL inverse function theorem on
`inverse-and-implicit-function-theorems`, applied to
$\mathbb{R}^{2m}$, with the real Jacobian determinant equal to
$\lvert\det Df\rvert^2$) plus the observation that the inverse satisfies CR;
**the holomorphic implicit function theorem** (landmark); the **holomorphic
constant-rank theorem**, proved from the real constant-rank theorem and the
holomorphic inverse/implicit theorem without an unproved smooth-to-holomorphic
coordinate change; $\mathcal{O}_m$ is a local ring with maximal ideal
$\{f : f(0)=0\}$, and $f$ is a unit iff $f(0)\ne0$ (cite the local-ring
vocabulary on `the-field-of-fractions-and-localisation`); **after a linear
change of coordinates every nonzero
germ is regular of some order in $z_m$** (a genuine lemma, and the step that
makes the preparation theorem non-vacuous); **the Weierstrass preparation
theorem** (landmark, #33): $f = u\cdot W$ with $u$ a unit and $W$ a Weierstrass
polynomial of degree $d$, **uniquely** — proved by the one-variable argument
principle/Rouché of CA-10 applied to the $z_m$-slices, with the symmetric
functions of the roots shown holomorphic in $z'$ by the residue formulas
$\sum \lambda_j^k = \frac{1}{2\pi i}\int \zeta^k \frac{\partial_\zeta f}{f}
d\zeta$ and Newton's identities. Disk reconciliation found those identities
only on the algebra scaffold's examples companion, which an A page may not
cite, so this page proves the needed finite Newton recurrences locally before
using them. **The Weierstrass division theorem** (landmark): $g = qW + r$
with $\deg_{z_m} r < d$, uniquely; **$\mathcal{O}_m$ is Noetherian**
(canonical, not optional, by Weierstrass division, the finite-module lemmas and
induction); and **$\mathcal{O}_m$ is a unique factorisation domain** (landmark;
the existing Gauss results are integer-specific, so the page first proves the
general UFD Gauss lemma and the prepared-factorization correspondence); and
**the zero set of a nonconstant scalar holomorphic
function on a domain in $\mathbb C^m$, $m\ge2$, has no isolated points**, by
preparation and the finite-projection description of its local zero germ. The
page then proves the general **Riemann extension theorem across $Z(g)$** for a
locally bounded function holomorphic off the hypersurface, closing the seam
that SC-2 deliberately leaves at coordinate hyperplanes.

FS: a holomorphic map with everywhere-invertible Jacobian is globally
injective (refuted by $\exp$ in one variable, or $(e^{z_1},z_2)$); the
holomorphic inverse function theorem is global; every germ is regular in
$z_m$ without a coordinate change (witness: $z_1 z_2$ — see traps);
the Weierstrass polynomial is unique without requiring $u$ to be a unit; a
nonconstant scalar holomorphic function in dimension at least two can have an
isolated zero.

B: $z_1^2 - z_2$ prepared; the coordinate change making $z_1 z_2$ regular in
$z_2$; the division of $z_1$ by a Weierstrass polynomial; the implicit function
theorem applied to $z_1^2 + z_2^2 = 1$.
CEX: $z_1 z_2$ is not regular of any order in $z_2$ at the origin, so the
coordinate-change lemma is not decoration; $(e^{z_1}, z_2)$ has invertible
Jacobian everywhere and is not injective — the several-variable version of
CA-6's contrast, and the reason the IFT is irreducibly local (agreement remark
with the complex-squaring-map example on
`inverse-and-implicit-function-theorems-examples`, which makes the same point
in $\mathbb{R}^2$).

Traps. (i) The real IFT on `inverse-and-implicit-function-theorems` is stated
for $C^1$ maps of $\mathbb{R}^n$; the
translation to $\mathbb{C}^m$ needs the real Jacobian determinant identity
$\det_{\mathbb{R}} = \lvert\det_{\mathbb{C}}\rvert^2$, which is a linear-algebra
calculation from `determinants-of-matrices-over-a-commutative-ring` and
`the-determinant-of-a-linear-operator`, and is proved explicitly here rather
than assumed. (ii) The holomorphy
of the symmetric functions of the roots is the heart of preparation and the
place expositions compress; the residue formula plus Newton's identities is the
route, and the finite identities are proved as their own local lemma.
(iii) The Jacobian conjecture is open; nothing on this page may state or imply
it. (iv) The published Gauss material is too narrow for this induction; the
general UFD form and the finite Noetherian-module lemmas are explicit page
items, not undeclared algebra imports.

Forward references: NONE load-bearing.

## SC-4. Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity

`requires`: SC-2, SC-1, CA-14, CA-18, CA-19, `convexity`

Pair sources (exact harvested locators): Lebl Ch. 2 §§2.1--2.6 (“Domains and
extensions” through “Holomorphic convexity”), especially §2.5 Theorem 2.5.2;
Boas §§3.2.4--3.3.3 (“Pseudoconvexity,” “Levi problem,” “Levi form,”
“Applications of the $\bar\partial$ problem,” “Solution on smooth
pseudoconvex domains”); CIMAT §§3.3--3.6 (domains of holomorphy, geometric
pseudoconvexity and psh functions).

Proposed A-page inventory (dependency order; 28 items):

| id | kind | one-line statement |
|---|---|---|
| `def-holomorphically-convex-hull-and-domain` | def | For arbitrary $E\subset\Omega$, define its hull using extended suprema; define holomorphic convexity by $\widehat K_\Omega\Subset\Omega$ for every compact $K\Subset\Omega$. |
| `lem-basic-properties-of-the-holomorphic-hull` | lem | For compact $K$, the hull contains $K$, is closed in $\Omega$ and coordinate-bounded; for arbitrary $E$, $\widehat{\widehat E}=\widehat E$. |
| `def-polydisc-boundary-radius` | def | Define $\delta_\Omega(a)$ as the largest equal-radius polydisc about $a$ contained in $\Omega$, and $\delta_\Omega(E)$ by infimum. |
| `lem-cauchy-estimates-propagate-to-holomorphic-hulls` | lem | Cauchy bounds for all derivatives on a boundary-radius neighbourhood of $K$ pass to $\widehat K_\Omega$. |
| `thm-cartan-thullen-boundary-radius-theorem` | thm | If $\Omega$ is a domain of holomorphy, then $\delta_\Omega(\widehat K_\Omega)=\delta_\Omega(K)$ for every compact $K\Subset\Omega$. |
| `thm-cartan-thullen-theorem` | thm | Domain of holomorphy, the boundary-radius property and holomorphic convexity are equivalent. |
| `lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point` | lem | A real-linear separator of a compact convex set and exterior point is the real part of a complex-linear functional. |
| `thm-convex-domains-are-holomorphically-convex` | thm | Exponentiating the complex-linear separator shows $\widehat K\subset\operatorname{conv}K\Subset\Omega$. |
| `cor-convex-domains-are-domains-of-holomorphy` | cor | Cartan--Thullen turns the preceding hull result into the domain-of-holomorphy conclusion. |
| `cor-plane-domains-are-domains-of-holomorphy` | cor | CA-18/CA-19 construct boundary-singular holomorphic functions on every plane domain. |
| `def-plurisubharmonic-function` | def | Use the upper-semicontinuous extended-valued affine-line test, excluding $-\infty$ componentwise. |
| `lem-affine-line-independence-in-the-definition-of-plurisubharmonicity` | lem | The line-test condition is invariant under nonconstant affine reparametrization. |
| `def-levi-form-and-strict-plurisubharmonicity` | def | Define the Hermitian complex Hessian and strict positivity for $C^2$ functions. |
| `thm-c-two-levi-criterion-for-plurisubharmonicity` | thm | A $C^2$ function is plurisubharmonic exactly when its Levi form is semipositive. |
| `thm-holomorphic-pullback-of-plurisubharmonic-functions` | thm | A holomorphic pullback is plurisubharmonic or identically $-\infty$ on a component. |
| `thm-stability-operations-for-plurisubharmonic-functions` | thm | Nonnegative finite sums, finite maxima and convex nondecreasing compositions preserve plurisubharmonicity with the nontriviality caveat. |
| `thm-decreasing-limits-of-plurisubharmonic-functions` | thm | A decreasing limit is plurisubharmonic or identically $-\infty$ on a component. |
| `thm-upper-envelope-theorem-for-plurisubharmonic-functions` | thm | The USC regularization of a locally uniformly upper-bounded supremum is plurisubharmonic unless identically $-\infty$. |
| `thm-maximum-principle-for-plurisubharmonic-functions` | thm | A finite local maximum on a domain forces constancy. |
| `cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic` | cor | $\log\lvert f\rvert$, with $-\infty$ on $Z(f)$, is plurisubharmonic under the component convention. |
| `def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity` | def | Define a continuous psh exhaustion and Hartogs pseudoconvexity using $-\log\delta_\Omega$. |
| `thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity` | thm | A domain admits a continuous psh exhaustion exactly when the fixed boundary-radius formulation is psh. |
| `def-levi-pseudoconvex-domain` | def | For $C^2$ boundary, require a defining function's Levi form to be semipositive on complex tangent vectors. |
| `lem-levi-pseudoconvexity-is-independent-of-defining-function` | lem | Replacing $\rho$ by $h\rho$, $h>0$, scales the tangential boundary Levi form by $h$. |
| `def-continuous-family-of-analytic-discs` | def | Define the compactly controlled continuous family of closed analytic discs needed by the continuity principle. |
| `thm-continuity-principle-for-domains-of-holomorphy` | thm | If disc boundaries remain in one compact subset and the initial disc is compactly contained, the family cannot first escape the domain. |
| `thm-domains-of-holomorphy-are-hartogs-pseudoconvex` | thm | Hartogs figures and the continuity principle make $-\log\delta_\Omega$ plurisubharmonic. |
| `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` | thm | For $C^2$-boundary domains, tangential Levi semipositivity is equivalent to Hartogs pseudoconvexity. |

DEFS: cite SC-2's **domain of holomorphy** convention; define the
**holomorphically convex hull** $\widehat E_\Omega$ for every $E\subset\Omega$
using the extended supremum, so idempotence is well-formed even when a compact
hull is not relatively compact; define **holomorphically convex** and the
equal-radius polydisc boundary function $\delta_\Omega$;
**plurisubharmonic**
(standard USC convention, CX-D6, #35, allowing a line restriction to be
identically $-\infty$); the **Levi form** of a $C^2$ defining
function; **Levi pseudoconvex** ($C^2$ boundary); **Hartogs pseudoconvex**
($-\log\delta_\Omega$ plurisubharmonic); a **plurisubharmonic
exhaustion**.

THMS: $\widehat{K}_\Omega$ is closed in $\Omega$, coordinate-bounded and
contains $K$, while arbitrary-set hulls are idempotent (#34); Cauchy estimates
propagate to the hull. **The Cartan–Thullen boundary-radius theorem** states
exactly
$\delta_\Omega(\widehat K_\Omega)=\delta_\Omega(K)$ for a domain of
holomorphy and compact $K\Subset\Omega$, using the equal-radius polydisc
function fixed above (Lebl §2.5, Theorem 2.5.2). Together with the sourced
converse it gives the landmark equivalence: $\Omega$ is a domain of holomorphy
iff it is holomorphically convex. The hard direction uses the explicitly
chosen countable exhaustion and copies the functional-space Baire/diagonal
choice cost recorded in the ledger; it does not pretend that the category
space is $\Omega$. **Every convex domain is holomorphically convex** because a
real separator is the real part of a complex-linear functional and its
exponential separates the hull; hence every convex domain is a domain of
holomorphy. **Every domain in $\mathbb{C}$ is a domain of holomorphy**
(landmark — the sharp contrast with $m\ge2$, proved from CA-18/CA-19's
Weierstrass/Mittag-Leffler construction of a function singular at every boundary
point); psh basics under the CX-D6 convention (#35): line-parametrisation
independence, the $C^2$ Levi criterion, holomorphic pullback, stability under
the listed finite operations, decreasing limits and upper-regularised locally
bounded suprema, the maximum principle, and $\log|f|$ with value $-\infty$ at
zeros;
**a domain of holomorphy is Hartogs pseudoconvex** (landmark; via the Hartogs
figure of SC-2 and the continuity principle); **Levi pseudoconvex $\iff$
Hartogs pseudoconvex for $C^2$ boundaries**; the **continuity principle**
(Kontinuitätssatz) as its own item. The converse Levi problem is declared to
SC-6 and is not asserted here before its $L^2$ proof.

FS: every domain in $\mathbb{C}^m$ is a domain of holomorphy (FALSE for
$m\ge2$; the bidisc minus the origin, from SC-2 — the page's anchor `fs-`);
the union of two domains of holomorphy is a domain of holomorphy; the
holomorphic hull of every compact $K\Subset\Omega$ is relatively compact in
$\Omega$ without assuming holomorphic convexity (closedness in $\Omega$ and
boundedness in $\mathbb C^m$ do not keep the hull away from $\partial\Omega$).

B: the bidisc, the ball and a convex domain all shown to be domains of
holomorphy; $\widehat K$ computed for a circle in $\mathbb{C}$ and for a torus
in $\mathbb{C}^2$; the Levi form of the ball computed; $-\log\delta_\Omega$
checked psh for a half space under the fixed equal-polydisc convention.
CEX: the **bidisc minus the origin** — not a domain of holomorphy, not
holomorphically convex, with the hull of a small torus reaching the origin: one
witness for every clause (the page's centrepiece, and the payoff of SC-2);
a domain of holomorphy in $\mathbb{C}^2$ that is not convex (any product of
plane domains).

Traps. (i) The Levi problem is true and later proved on SC-6;
neither a false-statement item nor an unsupported remark belongs here.
(ii) The CX-D6 convention item must be cited HERE, at the definition of psh
(#35), not merely assumed from CA-14. (iii) In a proof using category,
Cartan–Thullen's Baire space is the holomorphic-function Fréchet space, not
$\Omega$; alternatively follow the sourced countable-exhaustion construction.
Either route copies the declared DC/Baire supplier cost.
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

**R-2 cross-link.** Cite the PDE harmonic/fundamental-solution pages for their
dimension-uniform results, including $n=2$; this page owns only the planar
conformal and boundary refinements.

Conceptual placement: after CA-16 (it consumes the Riemann map while extending
the CA-14 plane-boundary seam). Proposed id
`green-functions-harmonic-measure-and-conformal-invariance`. `requires`:
CA-13, CA-14, CA-16, MT-8 and MT-20 (Radon/Riesz--Markov).

| id | kind | one-line statement |
|---|---|---|
| `def-green-function-plane-domain` | def | $g_\Omega(z,a)$ is positive and harmonic in $z\ne a$, has $g_\Omega(z,a)+\log\lvert z-a\rvert$ harmonic near $a$, and tends to $0$ at every regular boundary point (equivalently has zero Perron boundary data). |
| `thm-green-function-exists-on-bounded-plane-domains` | thm | Every bounded plane domain has a Green function, constructed by exhaustion/Perron; irregular or polar boundary points are not silently assigned pointwise limits. |
| `thm-green-function-uniqueness-symmetry-and-monotonicity` | thm | When it exists, $g_\Omega$ is unique, symmetric in $z,a$, and increases under enlargement of the domain with the direction stated explicitly. |
| `thm-green-function-simply-connected-plane-domain` | thm | If $\Omega\subsetneq\mathbb C$ is simply connected and $\phi:\Omega\to\mathbb D$ sends $a$ to $0$, then $g_\Omega(z,a)=-\log\lvert\phi(z)\rvert$, independently of the normalised Riemann map. |
| `def-harmonic-measure-plane-domain` | def | For a bounded regular plane domain, $\omega_\Omega^z$ is the unique boundary probability measure representing the Perron solution: $H_\varphi(z)=\int_{\partial\Omega}\varphi\,d\omega_\Omega^z$. |
| `thm-harmonic-measure-is-well-defined` | thm | Riesz--Markov gives a unique Radon probability measure because evaluation of the positive Dirichlet solution operator is a positive norm-one functional. |
| `thm-harmonic-measure-disc-poisson-density` | thm | On a disc, harmonic measure is absolutely continuous with Poisson-kernel density relative to arclength. |
| `thm-harmonic-measure-conformal-invariance` | thm | If a conformal bijection extends to a homeomorphism of the closures, its boundary map pushes harmonic measure forward; without such an extension only an explicitly developed prime-end formulation could replace this statement. |
| `thm-harmonic-measure-maximum-principle-and-domain-comparison` | thm | Harmonic measure is countably additive in the boundary set and harmonic in the pole; if $\Omega_1\subset\Omega_2$ are bounded regular domains and $E\subset\partial\Omega_1\cap\partial\Omega_2$ is Borel, then $\omega_{\Omega_1}^z(E)\le\omega_{\Omega_2}^z(E)$ for $z\in\Omega_1$. |
| `thm-green-function-harmonic-measure-representation` | thm | On a bounded $C^1$ Greenian domain, Green/Poisson representation recovers $u\in C^2(\Omega)\cap C^1(\overline\Omega)$ under the stated integrability hypothesis from its boundary values and Laplacian, fixing the $2\pi$ sign convention. |

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

**R-2 cross-link.** Cite the PDE Newtonian-potential/fundamental-solution
statements for general $n$. The logarithmic kernel and holomorphic proof route
here are the sharper plane treatment, not a replacement for those theorems.

Conceptual placement: after CA-HM-1. Proposed id
`logarithmic-potential-capacity-and-riesz-decomposition`. `requires`: CA-14,
CA-HM-1, MT-11/MT-20, FA-9 weak-* sequential compactness, and FA-24
distributions.

| id | kind | one-line statement |
|---|---|---|
| `def-logarithmic-potential-and-energy` | def | For a finite positive measure define $U^\mu(z)=\int\log(1/\lvert z-w\rvert)\,d\mu(w)$ and $I(\mu)=\iint\log(1/\lvert z-w\rvert)\,d\mu(z)d\mu(w)$ as extended integrals. |
| `def-logarithmic-capacity-compact-set` | def | For compact $K$, $V_K=\inf_{\mu\in\mathcal P(K)}I(\mu)$ and $\operatorname{cap}K=e^{-V_K}$, with the conventions at infinite energy stated. |
| `thm-logarithmic-energy-well-defined-and-lower-semicontinuous` | thm | Truncated kernels make energy representative-independent and lower semicontinuous under weak-* convergence. |
| `thm-equilibrium-measure-existence-and-uniqueness` | thm | Every nonpolar compact set has a unique probability measure of minimal logarithmic energy. |
| `thm-frostman-equilibrium-theorem` | thm | The equilibrium potential is at most $V_K$ in the plane and equals $V_K$ quasi-everywhere on $K$, with the polar exceptional set explicit. |
| `def-polar-set-and-quasi-everywhere` | def | A polar set is contained in the $-\infty$ locus of a nonconstant subharmonic function, equivalently has logarithmic capacity zero in the compact/local formulation proved here. |
| `thm-principle-of-descent-and-domination` | thm | Weak limits satisfy the lower-envelope inequality for logarithmic potentials, and the domination principle extends quasi-everywhere inequalities. |
| `def-riesz-measure-subharmonic-function` | def | The Riesz measure $\mu_u=(2\pi)^{-1}\Delta u$ is defined distributionally and shown independent of test-function representatives. |
| `thm-riesz-decomposition-subharmonic-plane` | thm | Locally, $u(z)=h(z)+\int\log\lvert z-w\rvert\,d\mu_u(w)$ for a harmonic $h$, with uniqueness after the kernel normalisation. |
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
| `def-harmonic-hardy-class-disc` | def | $h^p(\mathbb D)$ consists of harmonic $u$ with $\sup_{r<1}\lVert u_r\rVert_{L^p(\mathbb T)}<\infty$ (with the separate $p=\infty$ convention). |
| `thm-poisson-extension-lp-contraction-and-norm-limit` | thm | For $1\le p\le\infty$, $P[f]$ is harmonic, $\lVert P_r*f\rVert_p\le\lVert f\rVert_p$, and for $p<\infty$ it converges to $f$ in $L^p$. |
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
| `thm-hardy-zero-set-blaschke-condition` | thm | The nonzero zeros of a nontrivial $H^p$ function satisfy $\sum_n(1-\lvert a_n\rvert)<\infty$. |
| `def-blaschke-product` | def | A zero sequence satisfying the Blaschke condition defines a normally convergent product, with unimodular a.e. boundary values and precisely the prescribed zeros. |
| `def-inner-singular-inner-and-outer-functions` | def | Define inner, singular inner and outer factors from boundary modulus/measure data, proving independence of arguments and normalisations. |
| `thm-inner-outer-factorisation-hardy-space` | thm | Every nonzero $H^p$ function factors uniquely up to a unimodular constant as Blaschke $\times$ singular inner $\times$ outer. |
| `thm-f-and-m-riesz-theorem` | thm | A finite complex measure on $\mathbb T$ whose negative Fourier coefficients vanish is absolutely continuous with respect to arclength. |
| `cor-hardy-one-cauchy-representation` | cor | The analytic measure representing an $H^1$ function has an $L^1$ density and its Cauchy/Poisson representation agrees with the boundary function. |
| `def-nevanlinna-class-on-the-disc` | def | $N(\mathbb D)$ is the class of holomorphic functions with uniformly bounded radial means of $\log^+\lvert f\rvert$, explicitly distinguished from entire-plane Nevanlinna value distribution. |
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
| `thm-poisson-jensen-formula-meromorphic-function` | thm | Express $\log\lvert f(z)\rvert$ in a disc by its boundary values and the zeros and poles through the Green kernel, with multiplicities. |
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

Proposed id `nevanlinna-second-main-theorem-and-defects`. `requires`: CA-NV-1
and the measure exceptional-set interface. CA-23 is an agreement seam, never
a prerequisite.

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

Forward references: CA-23 later records the independent classical proof of
Picard; that agreement is non-load-bearing.

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
| `thm-weierstrass-lattice-discriminant-is-nonzero` | thm | For a genuine lattice, $g_2(\Lambda)^3-27g_3(\Lambda)^2\ne0$; hence the associated projective cubic is smooth. |
| `thm-complex-torus-weierstrass-cubic-isomorphism` | thm | $z\mapsto[X:Y:Z]=[\wp(z):\wp'(z):1]$ extends across $0$ to $[0:1:0]$ and identifies $\mathbb C/\Lambda$ biholomorphically with $Y^2Z=4X^3-g_2XZ^2-g_3Z^3$. |

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
even and odd parts for the field theorem, prove nonvanishing of the
discriminant before calling the cubic smooth, and check its point at infinity
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
| `thm-standard-fundamental-domain-for-the-modular-group` | thm | The standard region $\lvert\tau\rvert\ge1$, $\lvert\Re\tau\rvert\le1/2$ meets every orbit, with precisely stated boundary identifications and elliptic stabilisers. |
| `def-compactified-level-one-modular-curve` | def | Add the cusp $\infty$ and use invariant local parameters at $i$, $e^{2\pi i/3}$ and the cusp to make $X(1)$ a compact Riemann surface. |
| `def-level-one-modular-form-and-cusp-form` | def | A weight-$k$ form satisfies $f(\gamma\tau)=(c\tau+d)^k f(\tau)$ and is holomorphic at the cusp; a cusp form has zero constant $q$-coefficient. |
| `thm-q-expansion-principle-at-the-cusp` | thm | Translation invariance gives a unique holomorphic $q=e^{2\pi i\tau}$ expansion, and cusp holomorphy/vanishing is exactly regularity/vanishing at $q=0$. |
| `def-level-one-eisenstein-series` | def | For even $k\ge4$, define absolutely convergent $G_k$ and its normalized $E_k$; $E_2$ is recorded separately as quasimodular. |
| `thm-eisenstein-series-are-modular-forms` | thm | $E_k$ is a weight-$k$ modular form for even $k\ge4$, with its Fourier expansion and normalization proved. |
| `thm-level-one-valence-formula` | thm | The weighted number of zeros, including $1/2$ and $1/3$ weights at elliptic points and the cusp order, equals $k/12$. |
| `thm-ring-of-level-one-modular-forms` | thm | $M_*(SL_2(\mathbb Z))=\mathbb C[E_4,E_6]$ and the cusp-form ideal is generated by $\Delta=(E_4^3-E_6^2)/1728$. |
| `def-modular-discriminant-and-j-invariant` | def | Define $\Delta$ and $j=E_4^3/\Delta$, fixing the normalization $j=q^{-1}+744+\cdots$. |
| `thm-j-invariant-classifies-complex-tori` | thm | Two complex lattices are homothetic, equivalently their tori are biholomorphic, iff their $j$-invariants agree. |
| `thm-j-uniformizes-the-level-one-modular-curve` | thm | $j:X(1)\to\widehat{\mathbb C}$ is a biholomorphism; the ramification orders at the elliptic points belong to the quotient map $\mathfrak H\to X(1)$ and are stated separately rather than attributed to $j$ as a surface map. |

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
the topology covering-space pages. The compact-surface residue proof is built
from a finite chart triangulation and the one-variable residue theorem, so it
does not silently require the later de Rham theorem.

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
SC-5, DG-2/DG-5/DG-11--DG-12, and the finite-dimensional linear-algebra and
functional-analysis duality interfaces.

| id | kind | one-line statement |
|---|---|---|
| `def-divisor-principal-and-canonical-divisor-riemann-surface` | def | Divisors are locally finite integer sums; principal and canonical divisors use chart-independent orders of functions and differentials. |
| `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` | def | Define a holomorphic line bundle by nonvanishing holomorphic transition functions and define its holomorphic/meromorphic sections, proving frame independence and agreement with DG-5's underlying smooth bundle. |
| `def-line-bundle-associated-to-a-divisor` | def | Local defining functions glue a line bundle $\mathcal O(D)$, independent up to canonical isomorphism of choices. |
| `def-cech-cohomology-holomorphic-line-bundle-sections` | def | For the sheaf of holomorphic sections of a fixed line bundle, Čech cocycles modulo coboundaries define $H^1$ on the selected finite good covers, with refinement independence proved. |
| `thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces` | thm | SC-5's local $\bar\partial$ lemma and a DG-2 partition identify the selected Čech $H^1$ with the corresponding global Dolbeault quotient, independently of the good cover. |
| `thm-finiteness-cohomology-compact-riemann-surface` | thm | The relevant $H^0$ and $H^1$ spaces for a divisor on a compact Riemann surface are finite dimensional. |
| `lem-point-divisor-exact-sequence-and-euler-characteristic-step` | lem | For every point $p$, the exact sequence for $D\subset D+p$ gives $\chi(\mathcal O(D+p))=\chi(\mathcal O(D))+1$. |
| `lem-structure-sheaf-euler-characteristic-is-one-minus-genus` | lem | A polygonal cut system and the additive Cousin problem compute $\chi(\mathcal O_X)=1-g$ using the topological genus from CA-RS-1, without assuming Riemann--Roch or the bilinear relations. |
| `thm-residue-pairing-for-line-bundle-cohomology` | thm | The sum-of-residues pairing $H^1(X,\mathcal O(D))\times H^0(X,K-D)\to\mathbb C$ is representative-, cover- and coordinate-independent. |
| `thm-nondegeneracy-of-the-residue-pairing` | thm | Solving the finite additive Cousin problem proves the residue pairing nondegenerate in both variables. |
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
projective space,” “The canonical map,” “Line bundles”). Use a single
Dolbeault/Čech proof: SC-5 supplies the local resolution and DG-2 globalises it;
a finite good cover plus Cauchy estimates proves finite dimension; the point-
divisor exact sequence reduces the index calculation to the explicitly proved
$\chi(\mathcal O_X)=1-g$ cut-system lemma; and the residue pairing is proved
well defined and nondegenerate before it is called Serre duality. This avoids a
cycle through CA-RS-3's bilinear relations and cites no algebraic-geometry black
box.

Forward references: SC-5 must be placed earlier in the future splice as its
declared direct prerequisite; otherwise none.

## CA-RS-3. Periods, Jacobians and Abel--Jacobi Theory

Proposed id `periods-jacobians-and-abel-jacobi-theory`. `requires`: CA-RS-2,
HA-1 `chain-complexes-and-homology`, DG-14/DG-15 for Stokes and de Rham
homotopy invariance, and finite-dimensional Hermitian linear algebra.

| id | kind | one-line statement |
|---|---|---|
| `thm-symplectic-homology-basis-compact-riemann-surface` | thm | The polygonal schema and HA-1 compute $H_1(X;\mathbb Z)\cong\mathbb Z^{2g}$ and produce cycles $a_i,b_i$ with the standard unimodular intersection matrix. |
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
Theorems 15.4--15.5; Schlag Ch. 8 §§1--5 (“Homology, periods and bilinear
relations,” “Divisors,” “Riemann--Roch,” “Applications,” “Abel and Jacobi”).
First compute the surface homology and its intersection form from CA-RS-1's
polygonal schema using HA-1. The bilinear relations, not a slogan about
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
CA-15, CA-PT-1, MT-14 for $L^p$, PDE-11/PDE-12 for Sobolev
representatives/approximation, and PDE-3 for Weyl's lemma.

| id | kind | one-line statement |
|---|---|---|
| `def-extremal-length-and-curve-family-modulus` | def | Define extremal length by a supremum over Borel metrics and call its reciprocal the curve-family modulus, explicitly fixing the convention. |
| `thm-extremal-length-conformal-invariance-and-monotonicity` | thm | Extremal length is conformally invariant and monotone under inclusion of curve families, with series and parallel inequalities. |
| `thm-modulus-rectangle-and-annulus` | thm | Compute the extremal quantities for a rectangle and a round annulus. |
| `thm-round-annulus-conformal-parameter-is-complete-invariant` | thm | For $A(r,R)$ set $M(A)=(2\pi)^{-1}\log(R/r)$; two round annuli are conformally equivalent exactly when $M$ agrees, while the punctured disc has $M=\infty$. |
| `def-geometric-quasiconformal-homeomorphism` | def | An orientation-preserving homeomorphism is geometrically $K$-quasiconformal when it distorts every curve-family modulus by at most $K$. |
| `def-acl-sobolev-quasiconformal-homeomorphism` | def | The analytic definition uses ACL, $W^{1,2}_{\rm loc}$ and $\lvert f_{\bar z}\rvert\le k\lvert f_z\rvert$ a.e., with $K=(1+k)/(1-k)$. |
| `def-beltrami-coefficient-and-maximal-dilatation` | def | $\mu_f=f_{\bar z}/f_z$ is an a.e. equivalence class with its value on $\{f_z=0\}$ fixed harmlessly, and $K_f=(1+\lVert\mu\rVert_\infty)/(1-\lVert\mu\rVert_\infty)$. |
| `thm-geometric-and-analytic-quasiconformality-equivalent` | thm | The modulus and ACL/Beltrami definitions are equivalent with the same sharp dilatation constant. |
| `thm-composition-and-inverse-quasiconformal` | thm | Composition and inverse are quasiconformal with the stated Beltrami transformation and multiplicative $K$ bound. |
| `thm-one-quasiconformal-is-conformal` | thm | A $1$-quasiconformal map has $\mu=0$ a.e. and is conformal by Weyl's lemma. |
| `thm-normalized-quasiconformal-compactness` | thm | Normalized $K$-quasiconformal sphere maps form a compact family for locally uniform convergence. |

Companion: rectangle and annulus extremals; the punctured-disc/finite-annulus
contrast moved here from CA-12; affine ellipses; radial stretch;
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
CA-QC-1, FA-8--FA-10 for weak compactness, and the PDE-11 Sobolev interface.

| id | kind | one-line statement |
|---|---|---|
| `def-measurable-beltrami-coefficient` | def | A Beltrami coefficient is an $L^\infty$ a.e. class $\mu$ with $\lVert\mu\rVert_\infty<1$, transforming as a $(-1,1)$ tensor under coordinates. |
| `def-weak-solution-beltrami-equation` | def | A $W^{1,2}_{\rm loc}$ map solves $f_{\bar z}=\mu f_z$ in distributions; the definition is representative- and chart-independent. |
| `thm-measurable-riemann-mapping-sphere` | thm | Every such $\mu$ on $\widehat{\mathbb C}$ has an orientation-preserving quasiconformal solution, unique after fixing $0,1,\infty$. |
| `cor-local-integrability-beltrami-structures` | cor | Every measurable conformal structure on a plane domain has local quasiconformal coordinates. |
| `thm-holder-regularity-beltrami-solutions` | thm | If $\mu\in C^{k,\alpha}_{\mathrm{loc}}$ with $k\ge0$ and $0<\alpha<1$, then the normalized solution is a local $C^{k+1,\alpha}$ diffeomorphism; the theorem makes no unspecified Sobolev bootstrap claim. |

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
| `thm-zero-length-sets-and-quasicircles-are-conformally-removable` | thm | Every compact $K$ with $\mathcal H^1(K)=0$ and every quasicircle is conformally removable; no converse or Hausdorff-dimension threshold is asserted. |

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
`the-dbar-complex-and-integral-solutions`. `requires`: SC-1--SC-4,
DG-11/DG-12/DG-14 for smooth forms and Stokes, and FA-24 for distributions.

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
| `thm-model-domain-bergman-and-szego-kernels` | thm | Compute the Bergman kernels of the disc, ball and polydisc and the surface-measure Szegő kernels of the disc and ball, with exact constants; no smooth-boundary Szegő definition is applied to the nonsmooth polydisc. |
| `thm-poincare-ball-and-polydisc-not-biholomorphic` | thm | For $n\ge2$, the unit ball and polydisc in $\mathbb C^n$ are not biholomorphic; the proof compares a biholomorphically invariant Bergman-geometric quantity, not their Euclidean boundary shapes. |

Companion: orthonormal monomial expansions; disc/ball reproducing checks;
biholomorphic transport; Bergman versus Szegő normalization; a bounded-domain
example contrasted with an unbounded domain having trivial $A^2$; the
polydisc Bergman product and a warning that its distinguished-torus Hardy
kernel is a different construction; a
nonsmooth-boundary limitation; the false claim that ball and polydisc are
biholomorphic.

Sources and proof strategy: Lebl Ch. 5 §§5.1--5.3 (“Bochner--Martinelli
kernel,” “Bergman kernel,” “Szegő kernel”); Błocki, *The Bergman Kernel and
Metric*, §1 (“Basic definitions,” bounded evaluation, kernel, transformation
law, disc/ball/product formulas and the extremal metric, Theorems 1.1--1.6).
Use Cauchy estimates to bound evaluation, Hilbert
Riesz for existence, Parseval for
basis independence, and change of variables for biholomorphic covariance.
Use the explicit model kernels and their Bergman metrics to prove Poincaré's
ball--polydisc inequivalence, thereby discharging SC-1's earlier orientation
without placing a future result on its companion page.
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
| `def-local-dimension-hypersurface-germ` | def | Define the local dimension at $p$ by the Krull dimension of $\mathcal O_{\mathbb C^n,p}/(f)$, and prove it is independent of the reduced local equation. |
| `thm-hypersurface-germs-have-pure-codimension-one` | thm | Every nonempty reduced hypersurface germ in $\mathbb C^n$ has pure local dimension $n-1$; no statement about arbitrary analytic ideals is inferred. |
| `thm-singular-locus-reduced-hypersurface` | thm | The singular locus of a reduced hypersurface is analytic, nowhere dense, and has lower dimension; no claim is made for arbitrary analytic sets without coherence. |
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
projection, the principal ideal theorem and the UFD for pure dimension and
components, the gradient criterion for the regular locus, and Newton--Puiseux
with convergence proved—not a formal-series
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

| relative page | id | title | A/B | actual or proposed items |
|---|---|---|---|---|
| CA-1 A | `complex-differentiability-and-cauchy-riemann` | Complex Differentiability and the Cauchy–Riemann Equations | A | **28 actual** |
| CA-1 B | `complex-differentiability-and-cauchy-riemann-examples` | — | B | **13 actual** |
| CA-2 A | `complex-power-series-and-analytic-functions` | Complex Power Series and Analytic Functions | A | 20 proposed |
| CA-2 B | `complex-power-series-and-analytic-functions-examples` | — | B | companion scope declared |
| CA-3 A | `contour-integration` | Contour Integration | A | 18 proposed |
| CA-3 B | `contour-integration-examples` | — | B | companion scope declared |
| CA-4 A | `goursat-and-cauchys-theorem-in-a-convex-domain` | Goursat's Theorem and Cauchy's Theorem in a Convex Domain | A | 13 proposed |
| CA-4 B | `goursat-and-cauchys-theorem-in-a-convex-domain-examples` | — | B | companion scope declared |
| CA-5 A | `analyticity-liouville-and-morera` | Analyticity of Holomorphic Functions; Liouville and Morera | A | 18 proposed |
| CA-5 B | `analyticity-liouville-and-morera-examples` | — | B | companion scope declared |
| CA-6 A | `the-identity-theorem-and-the-open-mapping-theorem` | The Identity Theorem, the Maximum Principle and the Open Mapping Theorem | A | 20 proposed |
| CA-6 B | `the-identity-theorem-and-the-open-mapping-theorem-examples` | — | B | companion scope declared |
| CA-7 A | `the-winding-number-and-the-global-cauchy-theorem` | The Winding Number and the Global Cauchy Theorem | A | 20 proposed |
| CA-7 B | `the-winding-number-and-the-global-cauchy-theorem-examples` | — | B | companion scope declared |
| CA-8 A | `isolated-singularities-and-laurent-series` | Isolated Singularities and Laurent Series | A | 21 proposed |
| CA-8 B | `isolated-singularities-and-laurent-series-examples` | — | B | companion scope declared |
| CA-9 A | `the-residue-theorem` | The Residue Theorem and the Evaluation of Real Integrals | A | 18 proposed |
| CA-9 B | `the-residue-theorem-examples` | — | B | companion scope declared |
| CA-10 A | `the-argument-principle-and-rouche` | The Argument Principle and Rouché's Theorem | A | 16 proposed |
| CA-10 B | `the-argument-principle-and-rouche-examples` | — | B | companion scope declared |
| CA-11 A | `the-riemann-sphere-and-mobius-transformations` | The Riemann Sphere and Möbius Transformations | A | 22 proposed |
| CA-11 B | `the-riemann-sphere-and-mobius-transformations-examples` | — | B | companion scope declared |
| CA-12 A | `conformal-mapping-branches-and-the-schwarz-lemma` | Conformal Mapping, Branches, and the Schwarz Lemma | A | 23 proposed |
| CA-12 B | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | — | B | companion scope declared |
| CA-13 A | `harmonic-functions-and-the-poisson-integral` | Harmonic Functions and the Poisson Integral | A | 26 proposed |
| CA-13 B | `harmonic-functions-and-the-poisson-integral-examples` | — | B | companion scope declared |
| CA-14 A | `subharmonic-functions-and-the-dirichlet-problem` | Subharmonic Functions and the Dirichlet Problem | A | 31 proposed |
| CA-14 B | `subharmonic-functions-and-the-dirichlet-problem-examples` | — | B | companion scope declared |
| CA-15 A | `normal-families-and-montels-theorem` | Normal Families and Montel's Theorem | A | 18 proposed |
| CA-15 B | `normal-families-and-montels-theorem-examples` | — | B | companion scope declared |
| CA-16 A | `the-riemann-mapping-theorem` | The Riemann Mapping Theorem | A | 18 proposed |
| CA-16 B | `the-riemann-mapping-theorem-examples` | — | B | companion scope declared |
| CA-17 A | `simply-connected-plane-domains` | Simply Connected Plane Domains: the Grand Equivalence | A | 16 proposed |
| CA-17 B | `simply-connected-plane-domains-examples` | — | B | companion scope declared |
| CA-18 A | `infinite-products-and-weierstrass-factorisation` | Infinite Products and the Weierstrass Factorisation Theorem | A | 20 proposed |
| CA-18 B | `infinite-products-and-weierstrass-factorisation-examples` | — | B | companion scope declared |
| CA-19 A | `mittag-leffler-and-runges-theorem` | Mittag-Leffler and Runge's Theorem | A | 18 proposed |
| CA-19 B | `mittag-leffler-and-runges-theorem-examples` | — | B | companion scope declared |
| CA-20 A | `analytic-continuation-and-monodromy` | Analytic Continuation, Monodromy, and Riemann Surfaces | A | 21 proposed |
| CA-20 B | `analytic-continuation-and-monodromy-examples` | — | B | companion scope declared |
| CA-21 A | `the-gamma-function` | The Gamma Function | A | 21 proposed |
| CA-21 B | `the-gamma-function-examples` | — | B | companion scope declared |
| CA-22 A | `the-riemann-zeta-function` | The Riemann Zeta Function | A | 22 proposed |
| CA-22 B | `the-riemann-zeta-function-examples` | — | B | companion scope declared |
| CA-23 A | `bloch-schottky-and-picard` | Bloch, Schottky, and the Picard Theorems | A | 16 proposed |
| CA-23 B | `bloch-schottky-and-picard-examples` | — | B | companion scope declared |
| SC-1 A | `holomorphic-functions-of-several-variables` | Holomorphic Functions of Several Complex Variables | A | 22 proposed |
| SC-1 B | `holomorphic-functions-of-several-variables-examples` | — | B | companion scope declared |
| SC-2 A | `the-hartogs-phenomena` | The Hartogs Phenomena | A | 15 proposed |
| SC-2 B | `the-hartogs-phenomena-examples` | — | B | companion scope declared |
| SC-3 A | `holomorphic-inverse-and-weierstrass-preparation` | The Holomorphic Inverse Function Theorem and Weierstrass Preparation | A | 27 proposed |
| SC-3 B | `holomorphic-inverse-and-weierstrass-preparation-examples` | — | B | companion scope declared |
| SC-4 A | `domains-of-holomorphy-and-pseudoconvexity` | Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity | A | 28 proposed |
| SC-4 B | `domains-of-holomorphy-and-pseudoconvexity-examples` | — | B | companion scope declared |

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
around **orders 125–131** — `the-fundamental-theorem-of-algebra`,
`monotone-functions-and-discontinuities` and
`the-derivative-and-mean-value-theorems` are all still absent from
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
4. **Wave 4: CA-18, CA-19, CA-21, CA-22, and CA-23.** Products,
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
  and <https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf>.
- Eduard Looijenga, *Riemann Surfaces*:
  <https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf>.
- Christopher Bishop, *Quasiconformal Mappings*:
  <https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf>.
- Lars Ahlfors and Arne Beurling, “Conformal invariants and
  function-theoretic null-sets,” *Acta Mathematica* 83 (1950), complete
  primary paper:
  <https://projecteuclid.org/journals/acta-mathematica/volume-83/issue-none/Conformal-invariants-and-function-theoretic-null-sets/10.1007/BF02392634.pdf>.
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
- Paul Garrett, *Hartogs' theorem: separate analyticity implies joint*, read
  in full: <https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf>.
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

**McMullen, Math 213a and 213b, exactly inspected ranges.** In *Advanced
Complex Analysis* (Math 213a, 2 December 2025), the load-bearing text read is
Ch. 5 §5.1, pp. 139--141, through Theorems 5.1--5.3; the Ch. 5 title and all
§§5.1--5.8 headings, pp. 137--177, were inspected directly from the text and
contents. Ch. 5 “Elliptic functions and elliptic curves” →
`I(CA-EF-1/CA-MF-1)`; §5.1 “Doubly-periodic functions,” including Theorems
5.1 ($\wp$ is doubly periodic), 5.2 ($(\wp,\wp')$ uniformises a smooth cubic)
and 5.3 (every elliptic function is rational in $\wp,\wp'$) → `I(CA-EF-1)`;
§5.2 “Cubic curves and the addition law” → `I(CA-EF-1)`; §5.3 “The
rectangular case” → `B(CA-EF-1)`; §5.4 “Aside: Conics and singly-periodic
functions” → `B(CA-EF-1)` as the rank-one comparison; §5.5 “Moduli spaces of
elliptic curves” → `I(CA-EF-1/CA-MF-1)`; §5.6 “Interlude” → its $\lambda$
part `B(CA-MF-1)`, while “Lattices in $\mathbb R^n$” is `O(geometry of
numbers and higher-rank locally symmetric spaces; not load-bearing for
level-one forms)`; §5.7 “Modular forms” → `I(CA-MF-1)`, with its final
additive/multiplicative-number-theory paragraph `D(number theory; partition,
divisor-sum and Mellin-arithmetic consequences)`; §5.8 “Exercises” →
`B(CA-EF-1/CA-MF-1)`, except explicitly arithmetic exercises, which have the
same number-theory deferral. Later numbered theorems generally lack named
headings; no claim is made here that every later proof was read.

In *Riemann Surfaces* (Math 213b, 28 April 2026), Chs. 2--17, pp. 2--158,
were directly contents-inspected, and the named-result passages below were
opened in the text; this is not a claim that every proof in those sixteen
chapters was read. Chs. 2 “Examples of Riemann surfaces,” 3 “Holomorphic
maps,” 4 “Sheaves and analytic continuation,” 5 “Algebraic functions,” and 6
“Holomorphic and harmonic forms” → `I(CA-RS-1)`, with sheaf/continuation
formalism absorbed as its inline machinery. Chs. 7 “Cohomology of sheaves,” 8
“Cohomology on a Riemann surface,” 9 “Riemann--Roch,” 10 “The
Mittag--Leffler problems,” 11 “Serre duality,” 12 “Maps to projective space,”
13 “The canonical map,” and 14 “Line bundles” → `I(CA-RS-2)` at precisely
the line-bundle/compact-curve depth declared there; unrestricted coherent-
sheaf theory is `O(general coherent analytic sheaves lie outside the selected
range)`. Ch. 15 “Curves and their Jacobians” → `I(CA-RS-3)`; Ch. 16
“Hyperbolic geometry” → `I(CA-RS-4)` for the Poincaré metric, deck groups and
surface geometry, while its collars/pants, moduli, Mumford compactness and
spectral/heat-kernel developments are `O(Teichmüller, moduli and spectral
geometry; not needed for uniformisation)`. Ch. 17 “Uniformization” →
`I(CA-RS-4)`. The targeted named results are Theorem 3.4 “The
Riemann--Hurwitz formula” → `I(CA-RS-1)`; Theorem 9.12 “Hodge theorem” →
`IN(CA-RS-2 Dolbeault/cohomology comparison, with DG/PDE prerequisites cited)`;
Theorem 11.1 “Serre duality” and Theorem 11.2 “Riemann--Roch, final version” →
`I(CA-RS-2)`; the Jacobi-inversion component of Theorem 15.4 and Theorem 15.5
“Abel's theorem” → `I(CA-RS-3)`; and Theorem 17.1, the uniformisation theorem
$X\cong\widehat{\mathbb C},\mathbb C,$ or $\mathfrak H$ → `I(CA-RS-4)`.
These notes are not used as backing for CA-QC or CA-PT; their independent
sources remain Bishop/Lyubich/Ahlfors--Beurling and Khoruzhenko/Saff/Bishop.

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

**Ahlfors--Beurling (1950), complete §§1--7.** §1 “Introduction” and §§2--3
“The Invariants” introduce the function classes and null classes: the
extremal-length/potential motivation is `IN(CA-QC-1/CA-PT-1)`, while the full
historical invariant taxonomy and named Theorems 1--8 are
`O(classical function-theoretic null-class classification; not needed by the
removability result)`. §4 “The Invariants …” develops extremal length and its
five elementary lemmas → `I(CA-QC-1)`. §5 “Further Characterization of the
Null-sets” and Theorems 9--10 → `IN(thm-zero-length-sets-and-quasicircles-are-conformally-removable)`;
the unchanged-extremal-distance characterization also supplies an independent
check on `def-conformal-removable-compact-set`. §6 “Linear Sets,” especially
Theorems 11/11′ (zero linear length) and the extension/linearity criterion of
Theorem 6 used there → `IN(thm-zero-length-sets-and-quasicircles-are-conformally-removable)`;
Theorems 12--14 and the capacity computations → `I(CA-PT-1)` or
`D(fine potential-theory refinements not used here)`. §7 “Special Sets” and
its Cantor-set separations of the null classes → `B(CA-QC-3)` for the
non-removable warning; the exact class-separation catalogue is
`O(historical null-class taxonomy)`. Bishop remains the independent source for
the quasicircle half of the combined removability item.

**Garrett, complete Hartogs note.** *Hartogs' theorem: separate analyticity
implies joint* was read in full. The note has no numbered chapter/section or
named-result headings to harvest. Its four displayed proof stages have these
dispositions: continuous separate analyticity via iterated Cauchy →
`IN(thm-osgood-lemma-in-several-complex-variables)`; bounded separate
analyticity via Schwarz telescoping →
`IN(thm-locally-bounded-separate-holomorphy)`; the Baire local-boundedness
stage → `I(lem-local-boundedness-of-separately-holomorphic-functions)`; and
Hartogs-lemma/Fatou propagation → `IN(thm-hartogs-separate-holomorphy)`, with
MT-8 and CA-14 cited for integration and subharmonicity. The category space is
finite-dimensional separable Euclidean space, whose required Baire instance
is ZF; the Baire stage has not been silently deleted.

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
those dispositions. In particular, Ch. 2 §2.5, named Theorem 2.5.2
(Cartan--Thullen's polydisc boundary-radius equality
$\delta_U(\widehat K_U)=\delta_U(K)$) is `I(SC-4)`, not withdrawn; Ch. 6
§§6.2--6.4's preparation, division, Noetherian-germ-ring and
factorisation/UFD results are `I(SC-3)`, including the finite Newton and
module lemmas absorbed as `IN(thm-weierstrass-preparation-theorem)` and
`IN(thm-holomorphic-germ-ring-is-noetherian)`.

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
Bergman metric) → `I(SC-7)`; Theorem 1.2 projective embedding →
`D(complex geometry)`, while Theorem 1.5's curvature calculation →
`IN(thm-poincare-ball-and-polydisc-not-biholomorphic)`; Theorem 1.3/Corollary 1.4 estimates and
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
| CA-18--CA-20 | Weber Chs. 3--4; Stein--Shakarchi Chs. 2--3,5; McMullen 213b Ch. 4 and Ahlfors Ch. 3 §§4.1--4.3 for CA-20. |
| CA-21--CA-22 | Romik Chs. 14--15; Stein--Shakarchi Ch. 6; Weber Ch. 3. |
| CA-23 | Weber Ch. 7 §§7.3--7.4; Eremenko §§4--6; Goldberg--Ostrovskii Ch. 3 §§1--2 and Ch. 4 §§1,3 as the independent quantitative route. |
| CA-HM-1 / CA-PT-1 | Khoruzhenko §§1--5; Schlag Ch. 9; Saff §§1--3/Bishop Ch. 1. |
| CA-HP-1 / CA-HP-2 | Axler--Bourdon--Ramey Ch. 6; Ryzhik Ch. 5; Garnett Chs. I--II/Srivastava §§2--3. |
| CA-NV-1 / CA-NV-2 | Eremenko §§1--6; Goldberg--Ostrovskii selected Chs. 1,3,4. |
| CA-EF-1 / CA-MF-1 | Ahlfors Ch. 7; Milne Chs. 2--4; McMullen 213a Ch. 5 / Stein--Shakarchi Chs. 9--10. |
| CA-RS-1--CA-RS-4 | Looijenga Chs. 1--7; McMullen 213b Chs. 2--17; Schlag Chs. 4,8,10--11 and Lyubich Ch. 1 §5. |
| CA-QC-1--CA-QC-3 | Bishop Chs. 1--3; Lyubich Ch. 1 §6 and Ch. 2 §§11--16; Ahlfors--Beurling (1950) §§4--7 for the primary removability/extremal-length check. |
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
area integral of an upper-semicontinuous function. The enriched SC-2 now proves
all four stages: the Baire step is ZF on its separable Euclidean parameter
space, and MT-8/CA-14 supply the final Fatou/subharmonic propagation.
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
4. **Enrichment placement.** The orchestrator must topologically order the new
   relative pairs. In particular CA-HM-1 follows CA-16; SC-5 precedes CA-RS-2;
   CA-RS-1 precedes CA-EF-1/CA-MF-1; SC-6 follows SC-5; and CA-QC follows the
   potential and surface interfaces. SC-5 and CA-RS-2/3 must also follow the
   declared HA-1 and DG-2/DG-5/DG-11--DG-15 suppliers. No absolute order in the
   retired draft is authority.
5. **Inherited choice charges.** At build time copy, verbatim, the exact choice
   cost from MT-20 and the relevant Hilbert projection/weak-compactness items.
   This scaffold bounds the cost by AC$_\omega$/DC but does not overwrite a
   supplier ledger.
6. **Boundary transport.** Pointwise transport of continuous boundary data or
   Euclidean-boundary harmonic measure requires a homeomorphic extension to
   closures. Without it, add a genuine prime-end page first; do not smuggle in
   Carathéodory correspondence.

**Blockers: none.** Full Hartogs extension, the full separate-holomorphy
theorem, the Levi problem, Picard, boundary-zero Jensen/Hadamard, and the
theta--Mellin zeta functional equation are no longer optional or deferred in
this scaffold.
