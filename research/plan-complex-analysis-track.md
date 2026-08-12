# Complex analysis track: one variable, and holomorphic maps $\mathbb{C}^m \to \mathbb{C}^n$

Prose scaffold, owner-commissioned 2026-07-28. Companion to
`research/plan-realanalysis-pages.md`, `research/plan-algebra-track.md`,
`research/plan-topology-track.md` and `research/plan-topology-set-theory-track.md`.
Machine-readable half: `research/plan-spec.json`.

> **STATUS: PROPOSED, NOT SPLICED.** Nothing in `research/plan-spec.json`,
> `items/` or `library/` was touched to produce this file. The splice is the
> orchestrator's job. Three other agents were writing in this repo while this
> was drafted, which is itself an argument for the placement decision below
> (CX-D2: pure append, zero renumber, zero collision).

This file is NOT normative: `SCHEMA.md`, `CLAUDE.md`, `LEVELS.md` and
`ARCHITECTURE.md` win wherever they differ.

**AUTHORITY BOUNDARY (proposed, CX-D9).** This file is authoritative ONLY for
the 27 new A-pages it defines: **CA-1 … CA-23** (one complex variable) and
**SC-1 … SC-4** (several complex variables) — 27 A-pages, 54 pages with B
companions, orders 243–296. It says nothing about any existing page except
through the "Amendments to existing scaffolds" list, which is addressed to
Alpha. In particular `plan-realanalysis-pages.md` remains authoritative for
RA-33 (`the-complex-exponential-and-eulers-formula`, order 167), and
`plan-algebra-track.md` for AA-12 (order 50) and X-1 (order 125). Two scaffolds
must never claim the same page.

**ORDER-STALENESS WARNING.** Every order in this file was recomputed from
`research/plan-spec.json` on 2026-07-28, when the spec held **230 pages** with
maximum order **242** and reserved gaps at **56–67** (partly spent: 56–59 are
FG-1/FG-2) and **94–97**. Orders quoted inside `plan-realanalysis-pages.md`,
`plan-topology-track.md` and `plan-algebra-track.md` predate up to three
renumbers and are stale; those files say so themselves. Recompute from the
spec; never quote an order from prose.

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

### What the library already has, or already plans, about $\mathbb{C}$

Grep of `items/` (1129 files): **there is no $\mathbb{C}$ content authored at
all.** Eleven items contain the token `\mathbb{C}`; every one of them is a `rem-`
that mentions $\mathbb{C}$ in passing (`rem-gelfand-naimark-commutative`,
`rem-riesz-representation-hilbert`, `rem-riemann-surface-of-log`,
`rem-spectral-theory-bounded-operators`, `rem-hahn-banach-theorem`,
`rem-pi1-circle-is-z`, `rem-exponential-sequence-as-covering`,
`rem-separable-hilbert-isometric-l2`, `rem-jacobian-conjecture`,
`rem-covering-spaces-and-universal-cover`) plus one false statement,
`fs-negative-has-square-root`. No `def-`, `thm-`, `lem-`, `prop-`, `cor-`, `ex-`
or `cex-` item anywhere in the library is about a complex number. There is no
`def-complex-number`, no `def-modulus`, no `def-conjugate`, no `def-argument`.
The only adjacent authored algebra is `def-quaternions` /
`thm-quaternions-form-a-division-ring`.

**But the plan already builds $\mathbb{C}$ three times over, and this track must
sit on top of all three rather than beside them:**

| order | page id | what it gives, per its own scaffold |
|---|---|---|
| **50** | `field-extensions-and-the-complex-numbers` (abstract-algebra) | $\mathbb{C} := \mathbb{R}[x]/(x^2+1)$; $i$ as the class of $x$; real and imaginary parts; **conjugation as a field automorphism**; the **modulus** $\lvert z\rvert$ and $\lvert zw\rvert = \lvert z\rvert\lvert w\rvert$; $\mathbb{C}$ is a field, $\mathbb{R}$ embeds in it; **every complex number has a square root** (explicit formula, unconditional); $\mathbb{C}$ is **not** an ordered field; and the coordinate-plane bridge $a+bi\mapsto(a,b)$ carrying the field operations to the coordinate formulas. Source: `plan-algebra-track.md` §AA-12 |
| **125** | `the-fundamental-theorem-of-algebra` (abstract-algebra) | the **algebraic** (Laplace/Galois-style) proof: odd-degree real polynomials have real roots by the IVT, square roots from AA-12, induction on the 2-adic valuation of the degree using splitting fields (52) and the fundamental theorem of symmetric polynomials (54). Conclusion: **$\mathbb{C}$ is algebraically closed**. Source: `plan-algebra-track.md` §X-1 |
| **167** | `the-complex-exponential-and-eulers-formula` (real-analysis) | **completeness of $\mathbb{C}$**; complex series and **Cauchy–Hadamard in $\mathbb{C}$**; the **complex exponential**, its addition formula, termwise differentiation; **Euler's formula**; $\lvert e^{i\theta}\rvert = 1$; $\ker \exp = 2\pi i\mathbb{Z}$; $\exp$ maps $\mathbb{C}$ onto $\mathbb{C}\setminus\{0\}$; **polar form**; **de Moivre**; **$n$-th roots and roots of unity**; the **principal logarithm**; **no continuous logarithm on all of $\mathbb{C}\setminus\{0\}$**; complex powers are multivalued; the trig/hyperbolic dictionary. Source: `plan-realanalysis-pages.md` §RA-33 |

**Amendment (Alpha, `frontier-11` step 4, 2026-08-12; owner decision D1/D12).**
The two rows above changed. The construction of $\mathbb{C}$ — the definition,
that it is a field, conjugate/real/imaginary part/modulus, and the conjugation
and modulus laws — is re-homed from order 167/189 to
`field-extensions-and-the-complex-numbers`, ids unchanged, and materially
rewritten to the stem-field model. Receipt:
`research/frontier-11-rehomed.json`; full note at
`plan-realanalysis-pages.md` §RA-33. **The identification of the complex modulus
with the Euclidean norm $d_2$ stays at 167/189**, because it needs
`def-p-norms-on-rn` at order 167; this track may cite it there and nowhere
earlier. Orders in this file are pre-`frontier-11`;
`research/plan-spec.json` is the machine authority.

Two more places touch $\mathbb{C}$: order **90**
(`inner-product-spaces-and-orthogonality`) builds the **Hermitian inner
product** on a complex vector space, and order **127**
(`the-spectral-theorem-and-singular-value-decomposition`) the complex spectral
theorem. Order **92** (`algebraic-extensions-degree-and-finite-fields`) is
where "a finite subgroup of the multiplicative group of a field is cyclic"
lives, which is what makes $\mu_n$ a cyclic group.

### Consequence for the representation-theory scaffolder (asked for explicitly)

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

Everything from complex **differentiability** upward. The library plans no
Cauchy–Riemann equations, no contour integral, no Cauchy theorem, no residues,
no conformal mapping, no harmonic function theory in the plane, no analytic
continuation, and nothing whatever in several complex variables. That is this
track: 27 A-pages, orders 243–296.

---

## What the real-analysis and topology tracks give this one

Verified against `research/plan-spec.json` and the two prose scaffolds,
2026-07-28. Everything below is **planned but unauthored** except where marked
published — see the build-frontier note at the end, which is blunt about how
far away this track is.

| order | page | what this track takes from it |
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

---

## Decisions proposed for the owner

Each is a proposal, not a taken decision — the owner is away. Numbered so the
orchestrator can present them one at a time per LEVELS.md step 3.

**CX-D1. Scope: one variable in full, several variables honestly truncated.**
23 A-pages of one-variable theory covering the whole of the owner's list, and
**4** A-pages of several-variable theory. The asymmetry is not laziness: the
one-variable theory is provable end-to-end from what this library builds,
whereas graduate SCV runs into sheaves and the $\bar\partial$-equation with
$L^2$ estimates within two pages of the start. The four SC pages are exactly
the part that is provable here. See the scope-denial table.

**CX-D2. Placement: a pure append at orders 243–296. No renumber.**
The spec ends at 242. The track is appended whole. Reasons, in order of weight:

1. **It is the only splice that needs everything.** The track's ceiling
   dependency is the homotopy block at 229–235 (monodromy, the Riemann surface
   of $\log$, the topological half of the simply-connected equivalence). Any
   insertion below 229 splits the track in two and puts a seam through its
   middle.
2. **It cannot collide.** Three agents are writing in this repo. An append
   changes no existing page's order, so no existing citation can become
   forward-pointing, and the splice is an array concatenation.
3. **Order is not build order** (`LEVELS.md`: "order $\ne$ build order"). Pages
   CA-1 … CA-10 depend on nothing above order 197 and could be *built* long
   before the topology band is finished; they simply *read* last.

**The alternative, recorded so it is not rediscovered.** Insert CA-1 … CA-16
and CA-18/CA-19 at 183 (directly above `line-integrals-and-the-gradient-theorem`
at 181, and below the ordinals block) and leave CA-17, CA-20 and the SC pages
above 242. Cost: a **+36 renumber of 60 existing pages** executed while three
agents hold the spec, a cross-band seam, and `plan-topology-set-theory-track.md`
plus `plan-topology-track.md` both needing an order sweep of the kind LEVELS.md
§"When you renumber" warns about (the last one missed five references). Benefit:
a curriculum-shaped reading order. **Recommendation: append.** If the owner
wants the curriculum shape, do it as a separate renumber commit after this
track is spliced, never as part of it.

**CX-D3. New index group `complex-analysis`.** 27 A-pages will not fit inside
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
  principle are all stated that way in Ahlfors, Rudin and Stein–Shakarchi.
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

**CX-D6. Subharmonic and plurisubharmonic functions use the CONTINUOUS
convention.** Conway's convention: subharmonic $=$ continuous with the
sub-mean-value inequality. Rationale: the upper-semicontinuous theory needs the
area integral of a USC function, which needs measure theory (see denial 3),
whereas Perron's solution of the Dirichlet problem, Harnack, and the
domain-of-holomorphy direction of the Levi condition all go through with
continuous functions. The library HAS `def-semicontinuity` (published, order
129), so the USC definition is *statable*; what is missing is the *integral*.
A convention item on CA-14 records this explicitly and is cited by SC-4, and
the denial table records what the convention costs.

**CX-D7. Three proofs of the fundamental theorem of algebra, and they must
speak to each other.** The library will end up with:

| order | route | page |
|---|---|---|
| 125 | algebraic: odd degree + square roots + symmetric functions | `the-fundamental-theorem-of-algebra` |
| 241 | topological: $\pi_1(S^1)\cong\mathbb{Z}$ and the large-radius loop | `applications-of-the-fundamental-group` |
| **251** | analytic: **Liouville** | **CA-5** |

CA-5 carries a `rem-` naming all three and stating what each costs, in the
non-decaying "what THIS proof uses" form. It cites 125's statement; it does
**not** claim anything about what the library does or does not contain (the
level-9 published-claim-decay lesson). Algebra-track decision D6 set this
precedent for unique factorisation.

**CX-D8. The Prime Number Theorem is NOT scaffolded, but it is REACHABLE.**
Newman's Tauberian proof needs only Chebyshev's $\theta(x) = O(x)$ (elementary,
order 24), the continuation of $\zeta(s) - 1/(s-1)$ to $\mathrm{Re}\,s \ge 1$
and non-vanishing on $\mathrm{Re}\,s = 1$ (both on CA-22), and one contour
argument. That is one further A/B pair. It is not in the commission, nothing in
this track cites it, and the owner has said a short honest track beats a long
one — so it is recorded as a **future extension**, not a denial. Owner decision:
add CA-24 or leave it.

**CX-D9. Authority boundary** — see the banner. This file owns 243–296 and
nothing else.

**CX-D10. Standing requirements**, in the owner's words, binding every page
here: (1) every definition carries its well-definedness obligations as
**numbered items**, never a parenthetical — the table below; (2) **zero
load-bearing forward references** across all 27 A-pages, and every page section
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
| CA-14 Perron | **none** | the supremum of a family of functions is choice-free. |
| CA-13 Poisson, CA-9 residues, CA-7 Dixon, CA-1 … CA-6 | **none** | ZF. |
| SC-2 the Baire step | **DC** | Baire in $\mathbb{C}^{m-1}$, a complete metric space (order 217). Note `rem-baire-in-r-is-choice-free` (published) does NOT extend: it is about $\mathbb{R}$. Cite 217's own choice ledger. |

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
| 1 | CA-1 (243) | **the identification $\mathbb{C} = \mathbb{R}^2$** | the field of order 50 ($\mathbb{R}[x]/(x^2+1)$), the normed space $\mathbb{R}^2$ of 145, and the metric space of 167 carry the SAME addition, the SAME modulus and the SAME metric. A dictionary item, not a restatement. Without it the library holds three $\mathbb{C}$'s that say nothing to each other — the canonical two-notions defect. |
| 2 | CA-1 (243) | **the Wirtinger operators** $\partial_z, \partial_{\bar z}$ | for real-differentiable $f$, the total derivative (169) is unique and is an $\mathbb{R}$-linear map $\mathbb{C}\to\mathbb{C}$; every such map is UNIQUELY $w \mapsto aw + b\bar w$; $\partial_z f := a$, $\partial_{\bar z} f := b$. Uniqueness of the decomposition is the obligation. |
| 3 | CA-1 (243) | **conformal** (angle- and orientation-preserving) | the angle between two curves through a point is well defined (independent of the parametrisations), via 159's reparametrisation lemmas and the inner product of 90/145. |
| 4 | CA-3 (247) | the **$\mathbb{C}$-valued Riemann integral** $\int_a^b f$ | defined by real and imaginary parts; agrees with the order-137 Riemann integral when $f$ is real-valued; linearity over $\mathbb{C}$ (not just $\mathbb{R}$); and $\lvert\int f\rvert \le \int\lvert f\rvert$, which needs the rotation trick and is NOT componentwise. |
| 5 | CA-3 (247) | **the contour integral** $\int_\gamma f\,dz$ | **independence of the parametrisation**: if $\varphi$ is an increasing piecewise-$C^1$ bijection then $\int_{\gamma\circ\varphi} f = \int_\gamma f$ (change of variables, order 139). Plus additivity under subdivision and the sign under reversal. Owner-named. |
| 6 | CA-3 (247) | the **length** of a contour | $\int_a^b\lvert\gamma'\rvert$ agrees with the arc length of order 159 (a supremum over inscribed polygons). Dictionary item; 159 proves the $C^1$ case, so this is a citation plus the piecewise patch. |
| 7 | CA-5 (251) | the **order of a zero** $m$ | not all derivatives vanish unless $f\equiv 0$ on the component (identity theorem), so a least $m$ exists; and the factorisation $f = (z-a)^m g$ with $g(a)\ne 0$ determines $m$ **uniquely**. Without uniqueness "the order" is not a phrase. |
| 8 | CA-7 (255) | **the winding number** $n(\gamma, a)$ | THREE items: (a) $n(\gamma,a) := \frac{1}{2\pi i}\int_\gamma \frac{dz}{z-a}$ **is an integer** — via $h(t) = (\gamma(t)-a)\exp\!\big({-\int_{t_0}^{t}\gamma'/(\gamma-a)}\big)$ being constant, then $\ker\exp = 2\pi i\mathbb{Z}$ from order 167; (b) it is **constant on each connected component** of $\mathbb{C}\setminus\gamma^\ast$ (continuity plus integrality); (c) it is **$0$ on the unbounded component** (the ML estimate). Owner-named; this is the single most important row in the table. |
| 9 | CA-7 (255) | **chains and cycles** | a chain is an element of the free abelian group on piecewise-$C^1$ paths in $\Omega$; $\int_\Gamma$ and $n(\Gamma, a)$ are well defined ON THE FREE GROUP, i.e. depend only on the formal sum and not on the list of paths chosen to represent it. Then "$\Gamma$ is null-homologous in $\Omega$" ($n(\Gamma,a)=0$ for every $a\notin\Omega$) is a property of the cycle. |
| 10 | CA-8 (257) | **the Laurent expansion** in an annulus | **existence AND uniqueness** of $(a_n)_{n\in\mathbb{Z}}$ with $f(z) = \sum a_n (z-a)^n$ locally uniformly on $A(a; r, R)$. Uniqueness is a separate item (integrate against $(z-a)^{-n-1}$) and is what licenses the definite article in "the Laurent series", "the principal part", "the residue". Owner-named. |
| 11 | CA-8 (257) | the **classification** of an isolated singularity | removable / pole of order $m$ / essential is **exhaustive and mutually exclusive**, and each case has an equivalent characterisation not mentioning the expansion (Riemann's removability criterion; $\lvert f\rvert\to\infty$; Casorati–Weierstrass). |
| 12 | CA-8 (257) | **the residue** $\operatorname{Res}(f, a)$ | $:= a_{-1}$ of the unique Laurent expansion (row 10); the equivalent form $\frac{1}{2\pi i}\int_{\lvert z-a\rvert=r} f$ is **independent of $r$** for all small $r$, proved separately. If a residue at $\infty$ is used, its sign convention is its own `rem-`. Owner-named. |
| 13 | CA-11 (263) | **the Riemann sphere** $\widehat{\mathbb{C}}$ | the one-point compactification (order 195) of $\mathbb{C}$ is compact Hausdorff (195 proves when this holds: $\mathbb{C}$ is locally compact Hausdorff); **stereographic projection is a homeomorphism onto $S^2\subseteq\mathbb{R}^3$** (order 197's sphere); and the two charts $z$ and $1/z$ have **holomorphic transition map** $z\mapsto 1/z$ on the overlap — which is what licenses "holomorphic at $\infty$" and "meromorphic on $\widehat{\mathbb{C}}$". First instance of the owner's chart-compatibility obligation. |
| 14 | CA-11 (263) | a **Möbius transformation** as a map of $\widehat{\mathbb{C}}$ | the values at $-d/c$ and $\infty$ are forced by continuity, so the extension is unique; $\mathrm{GL}_2(\mathbb{C}) \to \operatorname{M\ddot ob}$ is a surjective group homomorphism with kernel the scalars, so a Möbius map is well defined by its matrix **up to scalars** — the projective statement, proved, not asserted. |
| 15 | CA-11 (263) | the **cross-ratio** | the unique Möbius map sending $(z_1,z_2,z_3)$ to $(0,1,\infty)$ exists and is unique — that uniqueness IS the well-definedness of $(z, z_1, z_2, z_3)$. |
| 16 | CA-12 (265) | **a branch of $\arg$, and the branch cut** | $\arg$ is NOT a function. The obligations: a continuous argument exists on any simply connected $\Omega \subseteq \mathbb{C}\setminus\{0\}$; the **principal** $\operatorname{Arg}$ on $\mathbb{C}\setminus(-\infty,0]$ is single-valued and continuous, and the cut is what makes it so; any two continuous arguments on a connected $\Omega$ differ by a constant in $2\pi\mathbb{Z}$. **Check order 167 first** — its scaffold already promises the principal logarithm and "no continuous logarithm on $\mathbb{C}\setminus\{0\}$"; if the principal branch is discharged there, CITE it and prove here only the general-domain version. Do not re-mint. Owner-named. |
| 17 | CA-12 (265) | **a holomorphic branch of $\log$** on a domain | existence on simply connected $\Omega$ with $0\notin\Omega$ (a primitive of $1/z$, normalised at one point); **uniqueness up to an additive constant in $2\pi i\mathbb{Z}$**; so "the" branch is only definite after a normalisation, which is stated where the symbol is introduced. |
| 18 | CA-12 (265) | **$z^\alpha$** | $z^\alpha := \exp(\alpha \log z)$ inherits row 17 exactly: it is a function only after a branch is fixed, and different branches differ by $e^{2\pi i k\alpha}$. Plus TWO dictionary items: it agrees with the algebraic power when $\alpha\in\mathbb{Z}$ (`roots-and-rational-powers`, order 16) and with the real $x^\alpha$ for $x>0$ under the principal branch (`the-logarithm-and-general-powers`, order 155). Owner-named. |
| 19 | CA-13 (267) | the **harmonic conjugate** | exists on a simply connected domain (a primitive again); **unique up to an additive real constant**; and $u + iv$ is then holomorphic. |
| 20 | CA-13 (267) | **the** solution of the Dirichlet problem on the disc | the Poisson integral $P[u]$ is harmonic inside and extends continuously to the boundary datum; **uniqueness** by the maximum principle. Both halves are needed before the definite article. |
| 21 | CA-14 (269) | **the Perron solution** | four items: the Perron family is nonempty; its pointwise supremum is finite (bounded by $\max\varphi$); the supremum is **harmonic** (harmonic modification by Poisson lifting, plus Harnack); and it attains the boundary value at $\zeta$ **iff there is a barrier at $\zeta$**. Only then is "the Perron solution of the Dirichlet problem on $\Omega$" a phrase. |
| 22 | CA-15 (271) | the **topology of local uniform convergence** on $H(\Omega)$ | the metric built from a compact exhaustion is a metric; **different exhaustions give the same topology** (so "normal family" and "locally uniformly convergent" do not depend on the exhaustion); and $H(\Omega)$ is closed in $C(\Omega)$ (Weierstrass convergence, CA-5). |
| 23 | CA-18 (277) | the **infinite product** $\prod(1+a_n)$ over $\mathbb{C}$ | reuse `def-infinite-product` (authored, homed on order 115) and prove only the $\mathbb{C}$-specific clauses: at most finitely many factors vanish, the tail converges to a NONZERO limit, and the zero set of the product is the union of the zero sets with multiplicity. Do NOT re-mint the definition. |
| 24 | CA-18 (277) | the **canonical product** and the genus | the elementary factors $E_p$ and the choice of $p_n$ making $\prod E_{p_n}(z/a_n)$ converge; and the honest limit: the Weierstrass factorisation is unique only **up to a factor $e^{g}$**, stated where defined rather than discovered later. |
| 25 | CA-20 (281) | **the germ** of a holomorphic function at a point | "agree on some neighbourhood" is an equivalence relation; the stalk's ring operations are representative-independent. |
| 26 | CA-20 (281) | **analytic continuation along a path** | the continuation of a germ along $\gamma$ is **independent of the admissible chain of discs and germs chosen** (the refinement/subdivision lemma). This is what licenses "**the** continuation of $f$ along $\gamma$"; the monodromy theorem is a further, different statement (independence of $\gamma$ within a homotopy class). Owner-named; the two must be separate items and in this order. |
| 27 | CA-20 (281) | the **Riemann surface** of a complete analytic function | the sets $\{$germs at $w$ obtained from $g$ by continuation inside $D\}$ form a **basis** (cite the published `thm-basis-criterion`); each chart "germ $\mapsto$ its base point" is a homeomorphism onto a disc; the transition maps are **identities, hence holomorphic** — the charts are compatible. Only then is "the Riemann surface of $\log$" a space. Owner-named. |
| 28 | CA-21 (283) | **$\Gamma$ on $\mathrm{Re}\,z>0$** | the improper integral converges locally uniformly (order 143) and is **holomorphic in $z$** — which needs its own lemma, *holomorphy of a parameter integral* (Morera plus Fubini for the Riemann integral, order 177), stated once and cited by CA-19, CA-21 and CA-22. |
| 29 | CA-21 (283) | the **meromorphic continuation** of $\Gamma$ | $\Gamma(z) = \Gamma(z+n)/(z(z+1)\cdots(z+n-1))$ is independent of $n$, so the continuations agree on overlaps and define one function on $\mathbb{C}\setminus\{0,-1,-2,\dots\}$; uniqueness by the identity theorem. |
| 30 | CA-22 (285) | the **continuation of $\zeta$**, and the Hankel integral | the contour integral defining the continuation is **independent of the radius of the small circle** and of the deformation of the contour (CA-7), and the branch of $t^{s-1}$ used on the cut is FIXED and stated (row 17 again). Uniqueness of the continuation by the identity theorem. |
| 31 | SC-1 (289) | a **holomorphic map $\mathbb{C}^m \to \mathbb{C}^n$** | defined componentwise; the numbered obligation is that this is EQUIVALENT to the existence of a $\mathbb{C}$-linear total derivative $\mathbb{C}^m\to\mathbb{C}^n$ (order 169's uniqueness of the total derivative). This is the item that discharges the owner's $f:\mathbb{C}^m\to\mathbb{C}^n$ literally, and it is what lets the rest of the block work with $n=1$. |
| 32 | SC-1 (289) | the **multivariable power series** $\sum_\alpha c_\alpha z^\alpha$ | the sum over the unordered index set $\mathbb{N}^m$ is well defined because the family is absolutely summable on compact subsets of the polydisc (cite the unordered-summation material of order 115, do not re-mint); and the coefficients are unique. |
| 33 | SC-3 (293) | the **Weierstrass polynomial** | in $f = u\cdot W$ with $u$ a unit and $W$ a Weierstrass polynomial of degree $d$, both $u$ and $W$ are **unique**. Uniqueness is what licenses "the Weierstrass polynomial of $f$" and it is a separate item from existence. |
| 34 | SC-4 (295) | the **holomorphically convex hull** $\widehat{K}_\Omega$ | it is closed in $\Omega$ and bounded (from $\lvert z_j\rvert$ being holomorphic); it contains $K$; and $\widehat{\widehat{K}} = \widehat{K}$. Without boundedness the definition of holomorphic convexity says nothing. |
| 35 | SC-4 (295) | **plurisubharmonic** (continuous convention, CX-D6) | the restriction of $u$ to a complex line is subharmonic in the CA-14 sense; the definition is independent of the parametrisation of the line; and the convention item recording that this is the continuous, not the upper-semicontinuous, notion, with a pointer to denial 3. |

---

## Scope denials (CX-D10 req. 3)

Dropped from the scaffold, each with what would license it. **A dropped result
is deferred, not deleted** — the note is what makes it recoverable. Rows marked
**partial** mean a weaker true statement IS scaffolded, and the row records
exactly where the line falls.

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
| `rem-riemann-surface-of-log` | `deferred-algebraic-topology` | **removed** once BOTH the homotopy block (233/235) and CA-20 are published. `plan-topology-set-theory-track.md` already marks it "AMENDED: branches-as-lifts becomes statable against HT-3" — this track finishes the job by actually constructing the surface | CA-20 (rows 25–27) + HT-3/HT-4 |
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

---

# The pages

Format per page: order, category, `requires` (direct; Beta computes the
closure), DEFS / THMS / FS, then B and CEX (both homed on the examples
companion), traps, and an explicit forward-reference statement. Item ids are
suggestions for step 1, not commitments, except where a well-definedness row
fixes one. Every A page has its `-examples` companion at the next order.
**B pages are leaves: nothing outside a B page may cite an item homed there.**
`validate-plan` warns above 30 items; A inventories here are written to land at
**14–24**, B pages at **8–16**.

Category for every page below: **`complex-analysis`** (CX-D3).

---

## CA-1. Complex Differentiability and the Cauchy–Riemann Equations  (order 243)

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

## CA-2. Complex Power Series and Analytic Functions  (order 245)

`requires`: CA-1 (243), `power-series-and-real-analytic-functions` (151),
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

## CA-3. Contour Integration  (order 247)

`requires`: CA-1 (243), `properties-of-the-integral-and-the-working-ftc` (139),
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

## CA-4. Goursat's Theorem and Cauchy's Theorem in a Convex Domain  (order 249)

`requires`: CA-3 (247), CA-2 (245), `rn-as-a-normed-space` (145)

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

## CA-5. Analyticity of Holomorphic Functions; Liouville and Morera  (order 251)

`requires`: CA-4 (249), CA-2 (245)

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

## CA-6. The Identity Theorem, the Maximum Principle and the Open Mapping Theorem  (order 253)

`requires`: CA-5 (251)

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

## CA-7. The Winding Number and the Global Cauchy Theorem  (order 255)

`requires`: CA-6 (253), `the-topology-of-euclidean-space` (197)

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

## CA-8. Isolated Singularities and Laurent Series  (order 257)

`requires`: CA-7 (255)

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

## CA-9. The Residue Theorem and the Evaluation of Real Integrals  (order 259)

`requires`: CA-8 (257), `improper-integrals` (143)

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

## CA-10. The Argument Principle and Rouché's Theorem  (order 261)

`requires`: CA-9 (259)

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
\sum g(b_k)$; **Rouché's theorem** (landmark) in the symmetric form
$\lvert f - g\rvert < \lvert f\rvert + \lvert g\rvert$ on $\Gamma$ (Glicksberg),
with the classical $\lvert f-g\rvert < \lvert g\rvert$ as the corollary — the
symmetric form is strictly stronger and costs nothing; **the fundamental theorem
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

Traps. (i) The symmetric form of Rouché is the one to prove; deriving the
classical form from it is one line, and the reverse is not. (ii) The geometric
reading is a change of variables in a contour integral — cite CA-3's
parametrisation item (#5), do not assert it. (iii) Hurwitz's statement must
include "or $f\equiv0$" / "or constant"; omitting it is the classic false title,
which LEVELS.md §10a names as fatal. (iv) The open-mapping agreement remark must
not read as if CA-6's proof were provisional.

Forward references: NONE load-bearing.

## CA-11. The Riemann Sphere and Möbius Transformations  (order 263)

`requires`: CA-10 (261), `compactness` (195), `the-topology-of-euclidean-space` (197)

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

## CA-12. Conformal Mapping, Branches, and the Schwarz Lemma  (order 265)

`requires`: CA-11 (263), CA-7 (255), `the-logarithm-and-general-powers` (155),
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

## CA-13. Harmonic Functions and the Poisson Integral  (order 267)

`requires`: CA-7 (255), CA-6 (253), `mixed-partials-taylor-and-extrema` (171)

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
neighbourhood of $0$, and shows the Dirichlet problem is not solvable on every
domain (the motivation for CA-14).

Traps. (i) The agreement remark with CA-1's $C^2$-hypothesised harmonicity item
is mandatory; without it the library states the same theorem twice with
different hypotheses and never connects them (the level-7 two-notions defect).
(ii) $\Delta$, $u_{xx}$, $u_{yy}$ and the symmetry of mixed partials come from
order 171; cite `Clairaut–Schwarz` rather than assuming it. (iii) The
concentration property of $P_r$ is an $\varepsilon$-$\delta$ argument with a
split integral; it is the only real analysis on the page and is where proofs
wave. (iv) Harnack's theorem's "or $+\infty$" clause must be in the Statement.

Forward references: NONE load-bearing.

## CA-14. Subharmonic Functions and the Dirichlet Problem  (order 269)

`requires`: CA-13 (267), `the-topology-of-euclidean-space` (197)

DEFS: **subharmonic** on an open set — **CONTINUOUS with the sub-mean-value
inequality** (CX-D6; the convention item is REQUIRED and is cited by SC-4);
superharmonic; the **harmonic modification** (Poisson lifting) of a subharmonic
function on a disc; the **Perron family** $\mathcal{P}(\varphi,\Omega)$; the
**Perron function** $u = \sup\mathcal{P}$ (#21); a **barrier** at a boundary
point; a **regular** boundary point.

THMS: the convention item, plus: $u$ subharmonic $\iff$ $u$ satisfies the
maximum principle relative to harmonic majorants on every compact subset;
$\lvert f\rvert$, $\lvert f\rvert^p$ ($p>0$) and $\max(u_1,u_2)$ are subharmonic
for holomorphic $f$; $\log\lvert f\rvert$ is subharmonic **where it is finite**,
with the truncations $\max(\log\lvert f\rvert, -k)$ handling the zeros — the
device denial 3 forces, stated as its own item; the **maximum principle for
subharmonic functions**; the harmonic modification is subharmonic and $\ge$ the
original; **the Perron function is harmonic** (landmark, #21 — modification plus
Harnack from CA-13); it is bounded by $\min\varphi$ and $\max\varphi$;
**a barrier at $\zeta$ forces $u(z)\to\varphi(\zeta)$** (landmark, #21);
**the Dirichlet problem is solvable on a bounded domain every boundary point of
which is regular** (landmark), uniquely; **every boundary point of a bounded
domain whose complementary component is not a single point is regular**
(the planar criterion — the barrier is built from a branch of $\log$ on the
complement of a continuum, citing CA-12/CA-7; **if that construction does not
close cleanly from available material, restrict the theorem to the two cheap
sufficient conditions — an exterior disc, and a boundary line segment — and
record the restriction as a note**); the corollary that the Dirichlet problem is
solvable on every bounded **homologically simply connected** domain.

FS: the Dirichlet problem is solvable on every bounded domain (witness: the
punctured disc, with boundary datum $0$ on the circle and $1$ at the puncture —
the removability of an isolated singularity for bounded harmonic functions is
what kills it, and that item must be present or the `fs-` drops); the Perron
function always attains the boundary values; a subharmonic function attains its
maximum in the interior; the supremum of any family of subharmonic functions is
subharmonic (needs local uniform boundedness AND upper semicontinuity — an
honest `fs-` about the CX-D6 convention's limits).

B: $\lvert z\rvert^2$ and $\log\lvert z\rvert$ tested; the harmonic modification
computed on a disc; the Perron solution on an annulus with radial data; the
barrier at a boundary point of a square, explicitly.
CEX: the **punctured disc**: no solution with datum $1$ at the puncture, and
the puncture is an irregular boundary point — the single example that motivates
the whole page; a bounded domain with a slit, where the two sides of the slit
are different boundary points (the reason "boundary point" is subtler than it
looks).

Traps. (i) The convention item (CX-D6) is not optional and must state **what the
convention costs**: with continuous subharmonic functions, $\log\lvert f\rvert$
is not admissible at the zeros of $f$, and the truncation device is the
workaround. Denial 3 is cross-referenced from the item. (ii) The regularity
criterion is the hardest theorem on the page; the escape hatch above (two cheap
sufficient conditions) is a legitimate scope decision and must be **recorded as
a note**, not silently taken. (iii) Nothing on this page may integrate a
discontinuous function. If a step wants to, it has crossed into denial 3.
(iv) Harnack's theorem is CA-13's; cite it.

Forward references: NONE load-bearing.

## CA-15. Normal Families and Montel's Theorem  (order 271)

`requires`: CA-13 (267), CA-10 (261),
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

## CA-16. The Riemann Mapping Theorem  (order 273)

`requires`: CA-15 (271), CA-12 (265), CA-7 (255)

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

## CA-17. Simply Connected Plane Domains: the Grand Equivalence  (order 275)

`requires`: CA-16 (273), `the-fundamental-group` (231),
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

## CA-18. Infinite Products and the Weierstrass Factorisation Theorem  (order 277)

`requires`: CA-15 (271), CA-6 (253), `absolute-convergence-and-rearrangement` (115)

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

## CA-19. Mittag-Leffler and Runge's Theorem  (order 279)

`requires`: CA-18 (277), CA-11 (263), CA-9 (259)

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

## CA-20. Analytic Continuation, Monodromy, and Riemann Surfaces  (order 281)

`requires`: CA-17 (275), CA-6 (253), `covering-spaces-and-lifting` (233)

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

## CA-21. The Gamma Function  (order 283)

`requires`: CA-18 (277), CA-9 (259), `improper-integrals` (143), CA-5 (251)

DEFS: $\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt$ on $\mathrm{Re}\,z>0$ (#28);
the **Euler–Mascheroni constant** $\gamma$ (cite order 113/115 if the library
defines it there — check on disk); the **Weierstrass product** for $1/\Gamma$;
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
$\Gamma(1/2)=\sqrt\pi$; the **duplication formula**; the **Bohr–Mollerup
theorem** (landmark): $\Gamma$ is the unique log-convex function on $(0,\infty)$
with $f(1)=1$ and $f(x+1)=xf(x)$ — a real-variable theorem, citing convexity at
order 135, and the item that makes "the" gamma function a phrase for a reader
coming from the real side; the **beta integral** $B(p,q) =
\Gamma(p)\Gamma(q)/\Gamma(p+q)$ (Fubini for improper Riemann integrals — check
what 143/177 deliver, and **if the double-integral manipulation does not close,
prove the beta identity from Euler's limit formula instead and record the
route**); **Stirling's asymptotic formula** for $\Gamma$ in a sector (landmark;
agreement remark with order 161's real Stirling-via-Wallis, which is scaffolded
there); the **Hankel contour representation**, which CA-22 consumes.

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
constant may or may not be defined below; grep before minting. (iii) The
reflection formula via the product is short; via contour integration it is long.
Take the product route and say so. (iv) Bohr–Mollerup is about a real function;
its Statement must not claim complex uniqueness.

Forward references: NONE load-bearing.

## CA-22. The Riemann Zeta Function  (order 285)

`requires`: CA-21 (283), CA-19 (279),
`primes-and-the-fundamental-theorem-of-arithmetic` (24)

DEFS: $\zeta(s) = \sum n^{-s}$ on $\mathrm{Re}\,s>1$ (with $n^{-s} :=
e^{-s\log n}$, the real $\log$ — a branch item, #30); the **Euler product**; the
**critical strip** and the **critical line**; the **trivial zeros**; the
completed function $\xi(s)$.

THMS: the series converges absolutely and locally uniformly on
$\mathrm{Re}\,s>1$, so $\zeta$ is holomorphic there; the **Euler product**
$\zeta(s) = \prod_p (1-p^{-s})^{-1}$ (landmark; cites the fundamental theorem of
arithmetic at order 24 and the infinite-product theory of CA-18), and the
corollary that $\zeta(s)\ne0$ on $\mathrm{Re}\,s>1$; **there are infinitely many
primes**, by the pole at $s=1$ (a genuinely different proof from order 24's —
agreement remark required); the **continuation to $\mathrm{Re}\,s>0$** via
$(1-2^{1-s})\zeta(s) = \sum(-1)^{n-1}n^{-s}$ (the cheap step, worth having on
its own); the **continuation to $\mathbb{C}\setminus\{1\}$** by the **Hankel
contour integral** $\zeta(s) = \frac{\Gamma(1-s)}{2\pi i}\int_{\mathcal{H}}
\frac{w^{s-1}}{e^{-w}-1}dw$ (landmark, #30 — with the branch of $w^{s-1}$ fixed
and the contour-independence proved, citing CA-7 and CA-12/CA-7's branch
material); the **simple pole at $s=1$ with residue $1$**; the **functional
equation** $\zeta(s) = 2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)$
(landmark — by expanding the Hankel contour to large circles and summing the
residues at $w = 2\pi i n$; the route forced by denial 12); the symmetric form
$\xi(s) = \xi(1-s)$; the **trivial zeros** at $s=-2,-4,\dots$; **all
nontrivial zeros lie in the closed critical strip**; **$\zeta(s)\ne0$ on
$\mathrm{Re}\,s=1$** (landmark; the Mertens $3+4\cos\theta+\cos2\theta\ge0$
argument — elementary and entirely in scope); special values $\zeta(2)=\pi^2/6$,
$\zeta(-1)=-1/12$, $\zeta(2n)$ via Bernoulli numbers (check whether Bernoulli
numbers exist below — order 165 mentions them; cite or define here);
the **Riemann hypothesis** as a `rem-` with `proved_here: false`, homed on
`open-problems-and-research-frontier` per the ‡ conventions, and MENTIONED here
via `external_refs` (the axiom/open-problem exemption pattern already used by
`rem-jacobian-conjecture`).

FS: $\zeta(s) = \sum n^{-s}$ for all $s\ne1$ (the series diverges off
$\mathrm{Re}\,s>1$; the continuation is not the series — the single most common
misunderstanding and the best `fs-` on the page); $\zeta(-1) = 1+2+3+\cdots$;
$\zeta$ is entire; the functional equation determines $\zeta$ (it does not — a
`fs-` if a witness closes, else a `rem-`); every nontrivial zero has real part
$1/2$ **as a theorem** (refuted by exhibiting what is actually proved — the
strip and the line $\mathrm{Re}\,s=1$ — with the independence-style honesty of
`plan-topology-set-theory-track.md` §ST-2 trap (i): the refutation may not rest
on ‡ material, so the item states "is a theorem of this library" and refutes by
what is available, with RH itself a Remark).

B: $\zeta(2)$ from the $\sin$ product (a fourth route to Basel, with the
agreement remark listing all four); the Euler product verified numerically to a
few terms; $\zeta(0)=-1/2$ from the functional equation; the Hankel contour
drawn and its three pieces estimated.
CEX: $\sum(-1)^{n-1}n^{-s}$ converges on $\mathrm{Re}\,s>0$ and equals
$(1-2^{1-s})\zeta(s)$, so a convergent series can represent the continuation
where the defining series diverges; the harmonic series as the $s=1$ divergence.

Traps. (i) The branch of $w^{s-1}$ on the Hankel contour is a genuine
well-definedness obligation (#30), not bookkeeping. (ii) The functional-equation
proof's estimate on the expanding circles is the page's hardest analysis; budget
for it, and if it does not close, **the functional equation drops with a note**
and the page stops at the continuation and the non-vanishing on
$\mathrm{Re}\,s=1$ — which is still a good page, and CX-D8's PNT extension only
needs that much. (iii) Order 24 is `primes-and-the-fundamental-theorem-of-
arithmetic` and is currently `draft`; the `requires` is legitimate but the
build-frontier note must say so. (iv) Do not write $\zeta(-1) = 1+2+3+\cdots$
even in prose.

Forward references: NONE load-bearing. RH is an `external_refs` mention of a
`proved_here: false` remark (exempt class).

## CA-23. Bloch, Schottky, and the Picard Theorems  (order 287)

**OPTIONAL — the track's ceiling.** Nothing in the library cites it. If the
Bloch route does not close at authoring time, the whole pair drops with a note
and `rem-`-level statements of Picard go to the ‡ catalogue. Recorded here so
the decision is deliberate.

`requires`: CA-15 (271), CA-12 (265), CA-8 (257)

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

The block is deliberately short. Everything past SC-4 needs sheaves or the
$\bar\partial$-equation with $L^2$ estimates; see denials 4–8.

## SC-1. Holomorphic Functions of Several Complex Variables  (order 289)

`requires`: CA-6 (253), CA-4 (249), `the-total-derivative` (169),
`fubini-and-change-of-variables` (177), `rn-as-a-normed-space` (145)

DEFS: $\mathbb{C}^m$ as a normed $\mathbb{C}$-vector space and its
identification with $\mathbb{R}^{2m}$ (dictionary item, the SC analogue of #1,
citing 145 and order 68); the **polydisc** $\Delta(a;r)$ and the **ball**;
**separately holomorphic**; **holomorphic** (continuous and separately
holomorphic — the convention item, with denial 2 cross-referenced);
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

FS: $f$ separately holomorphic implies $f$ holomorphic (this is the FULL Hartogs
theorem, denial 2 — so the `fs-` is **not** this; state instead the REAL
analogue: a function of two real variables that is separately real-analytic is
continuous, refuted by $xy/(x^2+y^2)$, already scaffolded at order 169 —
**cite that item rather than re-minting**, and record in a `rem-` that the
complex statement is true but not proved here per denial 2); a holomorphic
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

Traps. (i) The definition of "holomorphic" on this page includes **continuity**
by convention, precisely because denial 2 removes it as a theorem. The
convention item must say so, and every later page must not quietly assume the
Hartogs strengthening. This is the single highest-risk defect in the block.
(ii) The identity theorem's several-variable form is genuinely weaker than
CA-6's; a proof or Statement that carries CA-6's phrasing over is the fatal
"asserts more than the proof gives" class. (iii) Fubini at order 177 is for the
Riemann integral on a rectangle and is stated with upper and lower integrals for
a reason; check what it actually delivers for a continuous integrand on a
product of circles before relying on it. (iv) Multi-indices are order 171's;
cite.

Forward references: NONE load-bearing.

## SC-2. The Hartogs Phenomena  (order 291)

`requires`: SC-1 (289), `complete-metrizability-and-baire` (217), CA-8 (257)

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
**the Baire step towards Hartogs's separate-holomorphicity theorem** for $m=2$:
a separately holomorphic $f$ on a polydisc is **bounded on some subpolydisc**
(Baire in $\mathbb{C}$ / $\mathbb{R}^2$, order 217 — with the DC cost named),
hence by SC-1 is holomorphic there (landmark, and the honest partial result);
the **explicit statement of what is NOT proved** as a `rem-`: the propagation
from the small polydisc to the large one needs Hartogs's lemma on subharmonic
functions, which needs Fatou's lemma — written in the order-relative,
non-decaying form, and cross-referencing denial 2.

FS: every function holomorphic on a domain in $\mathbb{C}^2$ minus a point is
unbounded near that point (FALSE — it extends, which is the whole phenomenon;
a nice inversion of the reader's one-variable intuition); the one-variable
theory of isolated singularities has a several-variable analogue; every domain
in $\mathbb{C}^2$ is a domain of holomorphy (witness: the bidisc minus the
origin); a separately holomorphic function is holomorphic **as proved here**
(the honest `fs-` is about what THIS page establishes, not about the truth —
see traps: this must be phrased so that it is genuinely false, e.g. "continuity
is not needed in the version proved on SC-1", refuted by pointing at the
convention).

B: the Hartogs figure drawn as two overlapping regions in $(\lvert z_1\rvert,
\lvert z_2\rvert)$ coordinates; the extension of $1/(z_1 z_2 - 1)$; the bidisc
minus the origin, with an explicit function on it and its extension.
CEX: $1/z$ in one variable has no extension across $0$ — the contrast that makes
$m\ge2$ the hypothesis; $\mathbb{C}^2$ minus a complex line IS a domain of
holomorphy (witness $1/z_1$), so removing a hypersurface is different from
removing a point — the sharpest pair on the page.

Traps. (i) The `fs-` about separate holomorphicity is dangerous: the full
Hartogs theorem is **true**, and an `fs-` claiming it is false would be a
mathematical error. The item must be about what this library proves, phrased
against the SC-1 convention, or it DROPS to a `rem-`. Step 1 decides and
records. (ii) Baire at order 217 is for complete metric spaces and costs DC;
`rem-baire-in-r-is-choice-free` does NOT apply. (iii) The Riemann extension
statement must name its thin set precisely; "thin" without a definition is the
false-title class. (iv) The parameter-integral lemma is CA-5's (#28); cite.

Forward references: NONE load-bearing.

## SC-3. The Holomorphic Inverse Function Theorem and Weierstrass Preparation  (order 293)

`requires`: SC-1 (289), `inverse-and-implicit-function-theorems` (173),
CA-10 (261), `euclidean-domains-pids-and-unique-factorisation` (46)

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
with $\deg_{z_m} r < d$, uniquely; **$\mathcal{O}_m$ is a unique factorisation
domain** (landmark; induction on $m$ using preparation plus Gauss's lemma at
order 46 — the corollary that makes the whole page pay); **$\mathcal{O}_m$ is
Noetherian** (**optional; keep only if the page is under the cap** — the proof
is the same induction).

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

## SC-4. Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity  (order 295)

`requires`: SC-2 (291), SC-1 (289), CA-14 (269), `convexity` (135)

DEFS: a **domain of holomorphy**; the **holomorphically convex hull**
$\widehat{K}_\Omega$ (#34); **holomorphically convex**; **plurisubharmonic**
(continuous convention, CX-D6, #35); the **Levi form** of a $C^2$ defining
function; **Levi pseudoconvex** ($C^2$ boundary); **Hartogs pseudoconvex**
($-\log d(\cdot,\partial\Omega)$ plurisubharmonic); a **plurisubharmonic
exhaustion**.

THMS: $\widehat{K}_\Omega$ is closed in $\Omega$, bounded, contains $K$, and
$\widehat{\widehat{K}} = \widehat K$ (#34); **the Cartan–Thullen theorem**
(landmark): $\Omega$ is a domain of holomorphy $\iff$ $\Omega$ is holomorphically
convex $\iff$ $\Omega$ is holomorphically separable-at-the-boundary in the sense
that $d(\widehat K,\partial\Omega) = d(K,\partial\Omega)$ for every compact $K$
— the hard direction by the Cauchy estimates on polydiscs plus a **Baire**
argument constructing a function singular at every boundary point of a countable
dense set (order 217; DC named); **every convex domain is a domain of
holomorphy** (from convexity at 135 and a separating real-linear functional,
exponentiated); **every domain in $\mathbb{C}$ is a domain of holomorphy**
(landmark — the sharp contrast with $m\ge2$, proved from CA-18/CA-19's
Weierstrass/Mittag-Leffler construction of a function singular at every boundary
point); plurisubharmonic basics under the CX-D6 convention (#35): the definition
is line-parametrisation-independent; $\max$ of two psh is psh; psh functions
satisfy the maximum principle; $\log\lvert f\rvert$ handled through the
truncations $\max(\log\lvert f\rvert,-k)$ (denial 3's device, its own item);
**a domain of holomorphy is Hartogs pseudoconvex** (landmark; via the Hartogs
figure of SC-2 and the continuity principle); **Levi pseudoconvex $\iff$
Hartogs pseudoconvex for $C^2$ boundaries** (**keep only the direction that
closes cleanly; the full equivalence is real work and step 1 records what it
drops**); the **continuity principle** (Kontinuitätssatz) as its own item; the
**Levi problem stated and DENIED** as a `rem-` with `proved_here: false`, homed
on a ‡ catalogue page, saying exactly what Oka's theorem asserts and that
Hörmander's $L^2$ $\bar\partial$ route is what would prove it (denial 5).

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

Traps. (i) **Never write an `fs-` whose claim is a true theorem this library
does not prove.** The Levi problem is true; it is a `rem-` with
`proved_here: false`, and the ‡ conventions of `SCHEMA.md` §3 govern it.
`plan-topology-set-theory-track.md` §ST-2 trap (i) is the precedent.
(ii) The CX-D6 convention item must be cited HERE, at the definition of psh
(#35), not merely assumed from CA-14. (iii) Cartan–Thullen's Baire step is in
$\Omega$ with the compact-exhaustion metric of CA-15 (#22); reuse it.
(iv) The Levi-form direction that is dropped must be recorded as a note; a
silently weakened equivalence is the false-title class.

Forward references: NONE load-bearing. The Levi problem is a `proved_here:
false` remark, mentioned via `external_refs` (‡ exempt class).

---

# Page inventory

Category `complex-analysis` throughout (CX-D3). Item counts are step-1 targets,
not commitments; A pages are written to land at 14–24 and B pages at 8–16, well
under `validate-plan`'s size warning at 30.

| order | id | title | A/B | items |
|---|---|---|---|---|
| 243 | `complex-differentiability-and-cauchy-riemann` | Complex Differentiability and the Cauchy–Riemann Equations | A | 22 |
| 244 | `complex-differentiability-and-cauchy-riemann-examples` | — | B | 13 |
| 245 | `complex-power-series-and-analytic-functions` | Complex Power Series and Analytic Functions | A | 20 |
| 246 | `complex-power-series-and-analytic-functions-examples` | — | B | 12 |
| 247 | `contour-integration` | Contour Integration | A | 21 |
| 248 | `contour-integration-examples` | — | B | 11 |
| 249 | `goursat-and-cauchys-theorem-in-a-convex-domain` | Goursat's Theorem and Cauchy's Theorem in a Convex Domain | A | 15 |
| 250 | `goursat-and-cauchys-theorem-in-a-convex-domain-examples` | — | B | 10 |
| 251 | `analyticity-liouville-and-morera` | Analyticity of Holomorphic Functions; Liouville and Morera | A | 20 |
| 252 | `analyticity-liouville-and-morera-examples` | — | B | 11 |
| 253 | `the-identity-theorem-and-the-open-mapping-theorem` | The Identity Theorem, the Maximum Principle and the Open Mapping Theorem | A | 20 |
| 254 | `the-identity-theorem-and-the-open-mapping-theorem-examples` | — | B | 12 |
| 255 | `the-winding-number-and-the-global-cauchy-theorem` | The Winding Number and the Global Cauchy Theorem | A | 20 |
| 256 | `the-winding-number-and-the-global-cauchy-theorem-examples` | — | B | 11 |
| 257 | `isolated-singularities-and-laurent-series` | Isolated Singularities and Laurent Series | A | 22 |
| 258 | `isolated-singularities-and-laurent-series-examples` | — | B | 13 |
| 259 | `the-residue-theorem` | The Residue Theorem and the Evaluation of Real Integrals | A | 18 |
| 260 | `the-residue-theorem-examples` | — | B | 14 |
| 261 | `the-argument-principle-and-rouche` | The Argument Principle and Rouché's Theorem | A | 17 |
| 262 | `the-argument-principle-and-rouche-examples` | — | B | 12 |
| 263 | `the-riemann-sphere-and-mobius-transformations` | The Riemann Sphere and Möbius Transformations | A | 22 |
| 264 | `the-riemann-sphere-and-mobius-transformations-examples` | — | B | 12 |
| 265 | `conformal-mapping-branches-and-the-schwarz-lemma` | Conformal Mapping, Branches, and the Schwarz Lemma | A | 24 |
| 266 | `conformal-mapping-branches-and-the-schwarz-lemma-examples` | — | B | 14 |
| 267 | `harmonic-functions-and-the-poisson-integral` | Harmonic Functions and the Poisson Integral | A | 22 |
| 268 | `harmonic-functions-and-the-poisson-integral-examples` | — | B | 12 |
| 269 | `subharmonic-functions-and-the-dirichlet-problem` | Subharmonic Functions and the Dirichlet Problem | A | 20 |
| 270 | `subharmonic-functions-and-the-dirichlet-problem-examples` | — | B | 10 |
| 271 | `normal-families-and-montels-theorem` | Normal Families and Montel's Theorem | A | 18 |
| 272 | `normal-families-and-montels-theorem-examples` | — | B | 12 |
| 273 | `the-riemann-mapping-theorem` | The Riemann Mapping Theorem | A | 18 |
| 274 | `the-riemann-mapping-theorem-examples` | — | B | 11 |
| 275 | `simply-connected-plane-domains` | Simply Connected Plane Domains: the Grand Equivalence | A | 16 |
| 276 | `simply-connected-plane-domains-examples` | — | B | 10 |
| 277 | `infinite-products-and-weierstrass-factorisation` | Infinite Products and the Weierstrass Factorisation Theorem | A | 20 |
| 278 | `infinite-products-and-weierstrass-factorisation-examples` | — | B | 12 |
| 279 | `mittag-leffler-and-runges-theorem` | Mittag-Leffler and Runge's Theorem | A | 18 |
| 280 | `mittag-leffler-and-runges-theorem-examples` | — | B | 11 |
| 281 | `analytic-continuation-and-monodromy` | Analytic Continuation, Monodromy, and Riemann Surfaces | A | 21 |
| 282 | `analytic-continuation-and-monodromy-examples` | — | B | 12 |
| 283 | `the-gamma-function` | The Gamma Function | A | 21 |
| 284 | `the-gamma-function-examples` | — | B | 12 |
| 285 | `the-riemann-zeta-function` | The Riemann Zeta Function | A | 22 |
| 286 | `the-riemann-zeta-function-examples` | — | B | 11 |
| 287 | `bloch-schottky-and-picard` | Bloch, Schottky, and the Picard Theorems (**optional**, CA-23) | A | 16 |
| 288 | `bloch-schottky-and-picard-examples` | — | B | 11 |
| 289 | `holomorphic-functions-of-several-variables` | Holomorphic Functions of Several Complex Variables | A | 22 |
| 290 | `holomorphic-functions-of-several-variables-examples` | — | B | 12 |
| 291 | `the-hartogs-phenomena` | The Hartogs Phenomena | A | 15 |
| 292 | `the-hartogs-phenomena-examples` | — | B | 10 |
| 293 | `holomorphic-inverse-and-weierstrass-preparation` | The Holomorphic Inverse Function Theorem and Weierstrass Preparation | A | 20 |
| 294 | `holomorphic-inverse-and-weierstrass-preparation-examples` | — | B | 11 |
| 295 | `domains-of-holomorphy-and-pseudoconvexity` | Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity | A | 20 |
| 296 | `domains-of-holomorphy-and-pseudoconvexity-examples` | — | B | 10 |

**27 A-pages, 27 B-pages, 54 pages, orders 243–296. Estimated ~530 A-items and
~312 B-items, ~842 in total.** The spec goes from **230 to 284 pages** with no
existing page renumbered.

Every A-page's `requires` names only pages of strictly smaller order; the
internal chain is CA-1 $\to$ CA-2 $\to$ CA-3 $\to$ CA-4 $\to$ CA-5 $\to$ CA-6
$\to$ CA-7 $\to$ CA-8 $\to$ CA-9 $\to$ CA-10 $\to$ CA-11 $\to$ CA-12, then
CA-13/CA-15 branch off CA-7/CA-10/CA-13, CA-16 rejoins, CA-17 closes the loop
with the homotopy block, and SC-1 … SC-4 chain from CA-6/CA-4 upward.
`validate-plan.mjs` should report **no `forward-ref`, no `prereq-order`, no
`b-leaf`** violations; the expected warnings are `redundant-prereq` on the
handful of direct edges kept deliberately (amendment C4's ground: a direct edge
names the page's load-bearing prerequisite).

---

# Build-frontier note

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

# Sources

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

# Honest statement of what remains uncertain

Recorded so that step 1 does not rediscover it, and so the orchestrator can see
where this scaffold is guessing rather than knowing.

1. **Where the branch-of-$\log$ definition lives.** CA-9's keyhole evaluations
   need it at order 259; CA-12 is at 265. Resolved in favour of moving rows
   16–17 to CA-7 (order 255), where the existence theorem already sits — but
   this needs CA-7's inventory to absorb three more items, and step 1 must
   confirm the page stays under the cap. **This is the one genuine ordering
   defect in the draft and it is flagged in two places.**
2. **Which page owns well-definedness row 1** (the three $\mathbb{C}$'s
   dictionary): order 167 or CA-1. It depends on which is authored first, and
   the answer belongs in `plan-realanalysis-pages.md` §RA-33 as much as here.
   Recorded as amendment 1.
3. **Whether CA-5's parameter-integral lemma covers improper integrals.** CA-21
   ($\Gamma$) needs it on $[0,\infty)$. If CA-5's version is for a compact
   parameter interval, CA-21 carries the extension as its own item. Flagged in
   CA-21 trap (i) as the most likely gap in the whole track.
4. **Whether order 54 carries Newton's identities.** SC-3's preparation theorem
   uses them to show the symmetric functions of the roots are holomorphic. The
   algebra scaffold lists "the power sums $p_k$ and Newton's identities for
   small $k$" on the **B page** of AA-14 — and **B pages are leaves**, so SC-3
   may not cite them. Either the identities move to the A page at 54, or SC-3
   proves what it needs inline. Flagged in SC-3 trap (ii); resolved in the draft
   by flagging rather than assuming.
5. **Jensen's formula with boundary zeros, and hence Hadamard factorisation.**
   Scaffolded with an explicit escape hatch (restrict to $f$ nonvanishing on the
   circle, and drop Hadamard) because the boundary-zero case needs an integral
   of $\log\lvert\cdot\rvert$ near a zero, which is improper. It is almost
   certainly fine with order 143's improper integrals, but "almost certainly" is
   not a proof and the fallback is recorded.
6. **The Hadamard gap theorem** as CA-20's natural-boundary counterexample.
   Substituted a cheaper explicit example ($\sum z^{n!}$, radial divergence at
   roots of unity) as the recorded fallback.
7. **Poincaré's theorem** (the ball and the polydisc are not biholomorphic).
   Named as the striking several-variable fact it is, but scaffolded as a `rem-`
   rather than a theorem, because the standard proof needs both automorphism
   groups. Recorded as a drop, not omitted.
8. **The full Levi-form equivalence** on SC-4. One direction is scaffolded;
   the equivalence is flagged as "keep only what closes cleanly, and record what
   drops".
9. **CA-23 (Picard) as a whole.** Marked optional and drop-safe. The
   Bloch $\to$ Landau $\to$ Schottky route is elementary and standard, but it is
   the track's ceiling and nothing cites it.
10. **The Kugelsatz (denial 4).** The honest position is that the
    Cauchy–Pompeiu route may well be in scope with orders 175/177/181, and it is
    denied for effort rather than for impossibility. That is stated in the
    denial row rather than dressed up as an impossibility, because the owner's
    rule is that a dropped result must be recoverable.
