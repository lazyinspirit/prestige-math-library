---
id: ex-hyperelliptic-canonical-divisors
kind: example
title: "Canonical divisors on hyperelliptic curves"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-hyperelliptic-curve
  - thm-canonical-map-nonhyperelliptic-curve
  - cor-projective-embedding-every-smooth-proper-curve
  - thm-jacobian-criterion-smooth-morphism
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
  - def-complex-projective-space-and-holomorphic-charts
  - cor-jacobian-presentation-differentials
  - thm-cotangent-space-maximal-ideal-quotient
  - thm-local-ring-smooth-curve-dvr
  - def-canonical-line-bundle-curve
  - def-nonconstant-morphism-curves-degree
  - cor-canonical-degree-two-g-minus-two
  - cor-h0-canonical-differentials-genus
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-serre-duality-compact-riemann-surfaces
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - thm-the-complex-numbers-are-algebraically-closed
  - lem-finite-type-jacobson-residue-extension
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references: [{"title": "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)", "url": "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf", "locator": "Ch. 13, Theorem 13.1 and the hyperelliptic canonical-map discussion, printed pp. 108–110: canonical basis, factorization onto a rational normal curve, and hyperplane canonical divisors"}, {"title": "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan", "url": "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf", "locator": "§§17.12–17.15, printed pp. 139–141: canonical degree and hyperelliptic double covers"}, {"title": "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)", "url": "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf", "locator": "Ch. 5 §2 and Ch. 6 §§3–4, printed pp. 52, 55–56: hyperelliptic Riemann surfaces, canonical divisors, RR and its duality reformulation"}]
---

## Example

Assume full AC ([[def-axiom-of-choice]]). Let $C$ be any smooth proper geometrically integral curve over $\mathbb C$ of algebraic genus $g\ge2$, with hyperelliptic map $\phi:C\to\mathbf P^1_{\mathbb C}$ of degree two, and put $L=\phi^*\mathcal O(1)$ ([[def-hyperelliptic-curve]]). Its complex points form a compact connected Riemann surface $X$ of topological genus $g$; the local holomorphic charts and the genus comparison are justified below, without presupposing a cohomology comparison theorem.

1. The canonical bundle satisfies $\omega_C\cong L^{\otimes(g-1)}$. For a general fibre $P+Q=\phi^{-1}(t)$ with $P\ne Q$,
$$K\sim(g-1)(P+Q),\qquad \deg K=2g-2,$$
both algebraically and on $X$.
2. For $D=(g-1)(P+Q)$, $\ell(D)=g$. After choosing the pulled-back monomial basis, the canonical map is
$$\phi_K=\operatorname{Ver}_{g-1}\circ\phi:C\longrightarrow\mathbf P^{g-1},$$
where $\operatorname{Ver}_{g-1}$ is the degree-$(g-1)$ Veronese embedding. It has degree two onto a rational normal curve and is not an embedding. Other canonical bases change only projective coordinates ([[thm-canonical-map-nonhyperelliptic-curve]]).
3. The analytic Riemann–Roch and duality check is
$$\ell(K)-\ell(0)=2g-2+1-g=g-1,\qquad \ell(0)=1,$$
so $\ell(K)=g=h^1(X,\mathcal O_X)$. The algebraic identities $h^0(C,\omega_C)=h^1(C,\mathcal O_C)=g$ agree. The restriction map from algebraic canonical sections to holomorphic differentials on $X$ is an isomorphism, so the algebraic and analytic canonical maps coincide under these coordinates.

## Facts & Assumptions

**Given:** Full AC; a smooth proper geometrically integral complex curve $C$ of algebraic genus $g\ge2$; its degree-two hyperelliptic map $\phi$ and $L=\phi^*\mathcal O(1)$.

[F1] Full AC is inherited by the algebraic and analytic duality and projectivity suppliers ([[def-axiom-of-choice]]).

[F2] The algebraic hyperelliptic canonical theorem gives $\omega_C\cong L^{\otimes(g-1)}$ and the Veronese factorization of its canonical map, of generic degree two and not a closed immersion. It has a basis of pulled-back degree-$(g-1)$ monomials ([[def-hyperelliptic-curve]], [[thm-canonical-map-nonhyperelliptic-curve]]).

[F3] Every smooth proper geometrically integral curve admits a closed projective embedding. Complex projective space is compact, Hausdorff and second countable ([[cor-projective-embedding-every-smooth-proper-curve]], [[def-complex-projective-space-and-holomorphic-charts]]).

[F4] Smoothness over $\mathbb C$ gives local polynomial presentations with $m-1$ equations and an invertible $(m-1)$-column Jacobian minor. The holomorphic implicit-function chart lemma gives a free-coordinate chart and holomorphic transitions ([[thm-jacobian-criterion-smooth-morphism]], [[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

[F5] The Kähler differential module of a polynomial quotient is given by its Jacobian relations. At a complex rational point, the map $\mathfrak m/\mathfrak m^2\to\Omega\otimes\mathbb C$, $[a]\mapsto da$, is an isomorphism ([[cor-jacobian-presentation-differentials]], [[thm-cotangent-space-maximal-ideal-quotient]]).

[F6] Smooth-curve local rings at closed points are DVRs, with every nonzero rational function a unit times an integral power of a uniformizer. The algebraic canonical bundle is $\Omega^1_{C/\mathbb C}$, and its divisor orders are coefficient orders in a regular frame ([[thm-local-ring-smooth-curve-dvr]], [[def-canonical-line-bundle-curve]]).

[F7] A nonconstant algebraic map of smooth proper curves is finite and surjective, and its degree is the weighted fibre sum of local DVR orders and residue degrees. For $\phi$ the degree is two. Closed-point residue fields on $C$ are $\mathbb C$ ([[def-nonconstant-morphism-curves-degree]], [[lem-finite-type-jacobson-residue-extension]], [[thm-the-complex-numbers-are-algebraically-closed]]).

[F8] The algebraic canonical divisor has degree $2g-2$ and $h^0(C,\omega_C)=h^1(C,\mathcal O_C)=g$ ([[cor-canonical-degree-two-g-minus-two]], [[cor-h0-canonical-differentials-genus]]).

[F9] On a compact Riemann surface of topological genus $h$, analytic RR and duality give $\ell(0)=1$, $i(0)=h$ and $i(A)=\ell(K-A)$; evaluating at $K$ gives $\deg K=2h-2$. Negative-degree divisors have no sections, and $\mathcal O_X(K)$ identifies with the canonical bundle ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]]).

[F10] Compact-manifold components are open and, by compactness, there are only finitely many. A proper nonconstant holomorphic map has positive weighted fibre degree; multiplicity one gives a holomorphic local inverse. ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]], [[thm-proper-holomorphic-map-riemann-surfaces-has-degree]], [[thm-local-normal-form-holomorphic-map-riemann-surfaces]]).

## Verification

1.1 Embed $C$ projectively by [F3]. Its complex points $X$ are closed in compact projective space because its homogeneous defining equations are continuous, so $X$ is compact, Hausdorff and second countable. At each point [F4] gives a standard smooth chart with one free coordinate $z$; the implicit-function lemma supplies a holomorphic graph chart, and the transitions are holomorphic. Thus each component of $X$ is a compact Riemann surface, with finitely many components by [F10]. An algebraic morphism is holomorphic in these charts: its coordinate functions are regular fractions whose denominators are nonzero near the point, and compositions with the graph chart are holomorphic. In particular $\phi$ induces a holomorphic map $X\to\widehat{\mathbb C}$. [F1, F3, F4, F10, given, construct]

2.1 In a standard smooth chart the invertible Jacobian minor lets [F5] eliminate all dependent coordinate differentials, leaving $dz$ as a regular algebraic frame of $\omega_C$ and as the analytic differential frame. The cotangent isomorphism in [F5] says $z-z(p)$ has nonzero class in the one-dimensional $\mathfrak m_p/\mathfrak m_p^2$; since the local ring is a DVR by [F6], it is an algebraic uniformizer. Any rational coefficient is therefore $(z-z(p))^a u$ with $a\in\mathbb Z$ and $u$ a regular unit; analytically $u$ is holomorphic with nonzero value at $p$, so its algebraic and analytic orders are equal. This also proves that a nonzero rational coefficient cannot vanish identically on an analytic neighbourhood. Consequently algebraic rational differentials become nonzero meromorphic differentials with precisely the same divisor, and regular differentials become holomorphic; the restriction of their section spaces is injective. Pullbacks and line-bundle isomorphisms have the same local regular transition formulas and therefore induce the corresponding holomorphic bundle maps. [F4, F5, F6, step 1.1, algebra]

3.1 On each component $X_j$, the map $\phi$ is nonconstant: if locally constant at a point over $t$, a local coordinate of the target vanishing at $t$ would pull back to an identically zero germ, contrary to the finite DVR order of that nonzero rational pullback in step 2.1 and [F7]. Compactness makes each restriction proper. By [F10], it has a positive integer analytic degree $d_j$. Equality of local orders in step 2.1 and the algebraic fibre formula [F7] give $\sum_j d_j=2$. If $X$ had two components, both degrees would be one. The fibre formula would then make each restriction bijective and unramified, and the local inverses in [F10] would make each component biholomorphic to the sphere. The sphere has no nonzero holomorphic differential: the meromorphic differential $dz$ has divisor $-2[\infty]$, since $dz=-w^{-2}dw$ in $w=1/z$. Dividing a holomorphic differential by $dz$ would give an element of $L(-2[\infty])$, which is zero by [F9]. But [F8] supplies a nonzero regular algebraic differential, whose restriction is nonzero by step 2.1 and holomorphic on every component; if every component were a sphere it would vanish everywhere, contradicting this injectivity. Thus $X$ is connected and $\phi:X\to\widehat{\mathbb C}$ has degree two. [F6, F7, F8, F9, F10, step 1.1, step 2.1, algebra]

4.1 Choose a nonzero regular algebraic differential by [F8], and let $K_C$ be its divisor. Step 2.1 identifies its algebraic divisor with the analytic canonical divisor $K$ on connected $X$, coefficient by coefficient. All residue degrees are one by [F7], so their degrees agree. If $h$ is the topological genus of $X$, [F8] and [F9] give $2g-2=\deg K_C=\deg K=2h-2$, hence $h=g$. Restriction of regular algebraic differentials is injective by step 2.1; its source has dimension $g$ by [F8] and its target has dimension $h=g$ by [F9], so it is an isomorphism. This proves the required canonical-section and genus comparison without assuming a general algebraic/analytic cohomology comparison. [F7, F8, F9, step 2.1, step 3.1, algebra]

5.1 A general fibre of the analytic degree-two map consists of two distinct points $P,Q$: [F10] makes the branch-value set finite. It is the same algebraic fibre by step 2.1. The pullback of the standard section of $\mathcal O(1)$ vanishing at $t$ has divisor $P+Q$ on $X$, so $L$ induces $\mathcal O_X(P+Q)$. The bundle isomorphism in [F2] and step 2.1 therefore give $K\sim D=(g-1)(P+Q)$. By [F9], $\ell(K)=g$ and linear equivalence gives $\ell(D)=g$; equivalently RR gives $\ell(D)-\ell(K-D)=g-1$ with $K-D\sim0$ and $\ell(0)=1$. The $g$ pulled-back monomial sections in [F2] are now a basis of both algebraic and analytic canonical spaces by step 4.1, so their coordinate map is precisely the Veronese factorization, up to a projective basis change. Since $P\ne Q$ have the same image under $\phi$, their canonical images agree; hence the canonical map is not an embedding and has degree two onto the rational normal curve. Finally [F8], [F9] and step 4.1 give all displayed RR and duality dimensions. [F2, F8, F9, F10, step 2.1, step 3.1, step 4.1, algebra] ∎
