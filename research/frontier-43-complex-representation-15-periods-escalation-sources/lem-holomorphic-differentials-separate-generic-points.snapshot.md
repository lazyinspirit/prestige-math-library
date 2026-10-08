---
id: lem-holomorphic-differentials-separate-generic-points
kind: lemma
title: Holomorphic differentials separate generic points
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 15
deps:
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-line-bundle-associated-to-a-divisor
  - def-meromorphic-differential-on-a-riemann-surface
  - def-riemann-surface-and-holomorphic-atlas
  - lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-riemann-roch-compact-riemann-surfaces
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81)
      url: http://ronan.terpereau.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2, Lemma 21.3 and proof: a holomorphic differential vanishing at g selected points is zero, printed p. 168"
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 15, proof of Theorem 15.8: for generic point tuples the evaluation determinant is nonzero, printed p. 130"
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact connected Riemann surface of genus $g\ge1$ and let $\Omega(X)$ be its $g$-dimensional complex vector space of holomorphic differentials ([[def-genus-and-euler-characteristic-compact-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]], [[lem-holomorphic-differentials-form-a-g-dimensional-space]]). Write $K_X$ for the canonical holomorphic line bundle, and let $K$ be any canonical divisor. Then:

1. For every $p\in X$, evaluation $\operatorname{ev}_p:\Omega(X)\to (K_X)_p$, $\omega\mapsto\omega(p)$, is nonzero. Equivalently, $\ell(K-p)=g-1$ ([[def-line-bundle-associated-to-a-divisor]], [[thm-riemann-roch-compact-riemann-surfaces]]).
2. There are $g$ distinct points $a_1,\ldots,a_g\in X$ for which the combined evaluation map
$$\operatorname{Ev}_{(a_1,\ldots,a_g)}:\Omega(X)\longrightarrow\bigoplus_{j=1}^g(K_X)_{a_j},\qquad \omega\longmapsto(\omega(a_1),\ldots,\omega(a_g)),$$
is an isomorphism. Equivalently, the only holomorphic differential vanishing at all the $a_j$ is zero.
3. More generally, if $0\le k\le g$ and $a_1,\ldots,a_k$ are distinct points for which the combined evaluation map to $\bigoplus_{j=1}^k(K_X)_{a_j}$ is surjective, then they can be extended by $g-k$ further distinct points so that the combined evaluation map is an isomorphism. Surjectivity is the frame-independent meaning of independent evaluations; in chosen nonzero local frames these are the corresponding maps into $\mathbb C^k$ and $\mathbb C^g$.

Here $\ell(D):=\dim_{\mathbb C}L(D)$ is the Riemann–Roch dimension for a divisor $D$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]). Full AC is inherited through the Riemann–Roch and differential-dimension suppliers; the finite induction below makes only finitely many selections.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of genus $g\ge1$, its space $\Omega(X)$ of holomorphic differentials, and a canonical divisor $K$.

[F1] $\dim_{\mathbb C}\Omega(X)=g$, and each nonzero $\omega\in\Omega(X)$ has a finite zero set ([[lem-holomorphic-differentials-form-a-g-dimensional-space]]).

[F2] For any canonical divisor $K$, Riemann–Roch gives $\ell(D)-\ell(K-D)=\deg D+1-g$ for every divisor $D$, gives $\ell(0)=1$, and supplies a nonzero meromorphic differential from which such a $K$ is obtained ([[thm-riemann-roch-compact-riemann-surfaces]]).

[F3] The divisor-bundle construction identifies $\mathcal O_X(K)$ with $K_X$ and its holomorphic sections with $\Omega(X)$; it identifies sections of $\mathcal O_X(K-p)$ with holomorphic differentials vanishing at $p$, so $\ell(K-p)=\dim\ker(\operatorname{ev}_p)$ ([[def-line-bundle-associated-to-a-divisor]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F4] $L(D)$ consists of zero and the meromorphic functions $f$ with $(f)+D\ge0$. Thus any $f\in L(p)$ has no pole away from $p$ and has pole order at most one at $p$; the pole order is the local degree of the map $f:X\to\widehat{\mathbb C}$ over infinity. A nonconstant meromorphic function on compact $X$ is proper ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F5] For a proper nonconstant holomorphic map between connected Riemann surfaces, the map is onto and its degree is a positive integer equal to the sum of its ramification indices in each fibre; in particular, its degree is the total pole order over infinity ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F6] A degree-one holomorphic map between compact connected Riemann surfaces is a biholomorphism ([[lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism]]).

[F7] Genus is a topological invariant; a compact Riemann surface has genus zero exactly when it is homeomorphic to the sphere ([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F8] Full AC is assumed through the genus, Riemann–Roch, and differential-dimension suppliers ([[def-axiom-of-choice]], [[def-genus-and-euler-characteristic-compact-riemann-surface]], [[thm-riemann-roch-compact-riemann-surfaces]], [[lem-holomorphic-differentials-form-a-g-dimensional-space]]).

## Proof

**Proof technique:** Riemann–Roch and induction on the number of independent evaluations.

1.1 Choose a nonzero meromorphic differential $\eta$ supplied by [F2] and put $K=(\eta)$. By [F3] and [F1], $\ell(K)=g$; [F2] also gives $\ell(0)=1$. Applying [F2] to $D=K$ yields $g-1=\deg K+1-g$, so $\deg K=2g-2$. [F1, F2, F3, F8, given]

1.2 Constants lie in $L(p)$, so $\ell(p)\ge1$. If $f\in L(p)$ were nonconstant, [F4] would make it a nonconstant holomorphic map $X\to\widehat{\mathbb C}$ whose total pole order is at most one and which is proper. By [F5] its degree is positive and at most one, hence is one. By [F6] this is a biholomorphism to the sphere, so [F7] gives $g=0$, contrary to the hypothesis. Thus $L(p)$ consists exactly of constants and $\ell(p)=1$. [F4, F5, F6, F7, given]

1.3 Let $0\le k<g$ and suppose the combined evaluation $E_k:\Omega(X)\to\bigoplus_{j=1}^k(K_X)_{a_j}$ at distinct points is surjective; for $k=0$ this is the map to the zero space. Its kernel $W$ has dimension $g-k$ by [F1]. Choose a nonzero $\omega\in W$. By [F1] its zero set is finite and contains each $a_j$, so choose $q$ outside that set; this is possible because a coordinate disk in $X$ contains infinitely many points ([[def-riemann-surface-and-holomorphic-atlas]]). Then $q$ is distinct from the previous points and $\operatorname{ev}_q|_W$ is nonzero, hence onto the one-dimensional fiber $(K_X)_q$. Given any target in $\bigoplus_{j=1}^k(K_X)_{a_j}\oplus(K_X)_q$, first lift its first $k$ coordinates through $E_k$ and then adjust that lift by an element of $W$ to attain the last coordinate. Thus the combined evaluation at $a_1,\ldots,a_k,q$ is surjective, and its kernel has dimension $g-k-1$. Iterating finitely until $k=g$ gives a surjection between $g$-dimensional spaces, hence an isomorphism; starting with $k=0$ proves claim 2, and starting with any surjective family proves claim 3. [F1, algebra, choose, given]

2.1 Apply [F2] to $D=K-p$. Using step 1.1 and step 1.2,
$\ell(K-p)-\ell(p)=\deg(K-p)+1-g=(2g-3)+1-g=g-2$,
so $\ell(K-p)=g-1$. By [F3] this is the kernel dimension of $\operatorname{ev}_p:\Omega(X)\to(K_X)_p$. Since [F1] gives $\dim\Omega(X)=g$ and $(K_X)_p$ is one-dimensional, rank-nullity shows that the evaluation has rank one, hence is nonzero (indeed surjective). [F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 Each fiber $(K_X)_{a_j}$ is one-dimensional. Choosing a nonzero local frame identifies it with $\mathbb C$, and changing frames composes the combined evaluation with an invertible diagonal map on the target. Thus surjectivity and isomorphism do not depend on those frame choices; for $k=g$, injectivity is exactly that no nonzero differential vanishes at every selected point. Step 1.3 and step 2.1 give the existence and extension claims and the one-point evaluation calculation. [F3, step 1.3, step 2.1, algebra] ∎
