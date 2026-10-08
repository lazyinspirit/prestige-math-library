---
id: thm-finiteness-cohomology-compact-riemann-surface
kind: theorem
title: Finite-dimensionality of the cohomology of a divisor on a compact Riemann surface
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - def-line-bundle-associated-to-a-divisor
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
  - def-axiom-of-choice
  - def-sheaf-cohomology-derived-global-sections
dependency_level: 9
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface and $D$ a divisor on $X$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]). Put $E=\mathcal O_X(D)$ and supply a Hermitian metric $h$ on $E$ and a compatible Riemannian metric $g$ on $X$ as in [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]. Write $\bar\partial_E$ for the smooth Dolbeault operator on $E$, and set $\Omega^{0,q}(X,E)=C^\infty(X,\Lambda^{0,q}T^*X\otimes E)$ for $q=0,1$.

1. The Dolbeault cohomology spaces
$$H^{0,0}(X,E)=\ker\bigl(\bar\partial_E:\Omega^{0,0}(X,E)\to\Omega^{0,1}(X,E)\bigr),\qquad H^{0,1}(X,E)=\Omega^{0,1}(X,E)/\bar\partial_E\Omega^{0,0}(X,E)$$
are finite-dimensional. The first is $H^0(X,E)=\Gamma(X,E)$ and equals the harmonic space $H^{0,0}(E)$. Every class in the second has a unique harmonic representative in $H^{0,1}(E)$.

2. The sheaf cohomology spaces $H^0(X,\mathcal O_X(D))$ and $H^1(X,\mathcal O_X(D))$ are finite-dimensional, and $H^0(X,\mathcal O_X(D))\cong L(D)$. For every supplied finite good cover subordinate to holomorphic frame domains of $E$, the fixed-cover group $\check H^1(\mathfrak U,\mathcal O_X(E))$ is also finite-dimensional. Define
$$\ell(D):=\dim H^0(X,\mathcal O_X(D))=\dim L(D),\qquad i(D):=\dim H^1(X,\mathcal O_X(D)),\qquad \chi(\mathcal O_X(D)):=\ell(D)-i(D).$$
Then $\ell(D)$ and $i(D)$ are nonnegative integers and $\chi(\mathcal O_X(D))$ is an integer, which need not be nonnegative.

3. If $D'$ is linearly equivalent to $D$, then $\ell(D')=\ell(D)$, $i(D')=i(D)$, and $\chi(\mathcal O_X(D'))=\chi(\mathcal O_X(D))$.

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$, a divisor $D$, the associated line bundle $E=\mathcal O_X(D)$, and supplied compatible metrics $g,h$.

[F1] Full AC is assumed by the Hodge finiteness theorem and by derived sheaf cohomology ([[def-axiom-of-choice]]).

[F2] Derived sheaf cohomology is functorial in a morphism of sheaves; an isomorphism of sheaves induces an isomorphism on every $H^q$ ([[def-sheaf-cohomology-derived-global-sections]]).

[F3] Divisors $D,D'$ are linearly equivalent when $D-D'$ is principal ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F4] The holomorphic sections of $\mathcal O_X(D)$ identify with $L(D)$ by the canonical-section map ([[def-line-bundle-associated-to-a-divisor]]).

[F5] If $(u)=D'-D$, multiplication by $1/u$ induces the line-bundle isomorphism $\mathcal O_X(D)\cong\mathcal O_X(D')$ ([[def-line-bundle-associated-to-a-divisor]]).

[F6] The supplied compatible metrics define the smooth Dolbeault operator and harmonic spaces for the line bundle ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F7] For a compact Riemann surface and a holomorphic Hermitian line bundle, the Dolbeault cohomology in bidegrees $(0,0)$ and $(0,1)$ is finite-dimensional and isomorphic to the corresponding harmonic space; each degree-one class has a unique harmonic representative ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

[F8] The Dolbeault resolution identifies $H^0(X,\mathcal O_X(E))$ with the holomorphic-section space and $H^1(X,\mathcal O_X(E))$ with the smooth Dolbeault quotient ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F9] The canonical Leray map identifies fixed-cover Čech cohomology with sheaf cohomology for every supplied finite good cover subordinate to holomorphic frame domains ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

## Proof

The Hodge supplier in [F4] supplies the finite-dimensional harmonic representatives. The comparison in [F5] transports these conclusions to sheaf and fixed-cover Čech cohomology.

1.1 For $E=\mathcal O_X(D)$, the degree-zero Dolbeault cohomology is the kernel of $\bar\partial_E$, hence the holomorphic-section space; it is finite-dimensional and equals $H^{0,0}(E)$ by [F7]. On a curve there are no $(0,2)$-forms, so every smooth $(0,1)$-form is $\bar\partial_E$-closed and degree-one Dolbeault cohomology is exactly the displayed quotient. By [F7] this quotient is finite-dimensional and every class has exactly one harmonic representative. [F1, F6, F7, given]

2.1 The canonical comparison of [F8] identifies the degree-zero and degree-one Dolbeault groups with $H^0(X,\mathcal O_X(D))$ and $H^1(X,\mathcal O_X(D))$, respectively, so both sheaf-cohomology spaces are finite-dimensional. By [F9], $\check H^1(\mathfrak U,\mathcal O_X(E))$ is isomorphic to $H^1(X,\mathcal O_X(E))$ whenever a finite good cover subordinate to holomorphic frame domains is supplied. By [F4], $H^0(X,\mathcal O_X(D))\cong L(D)$. Thus $\ell(D)$ and $i(D)$ are finite nonnegative integers and their difference $\chi(\mathcal O_X(D))$ is an integer; no nonnegativity of that difference is asserted. [F1, F4, F8, F9, step 1.1, given]

3.1 Suppose $D\sim D'$. By [F3] there is a nonzero meromorphic function $u$ with $(u)=D'-D$. The isomorphism in [F5] identifies the sheaves of holomorphic sections of $\mathcal O_X(D)$ and $\mathcal O_X(D')$, so [F2] induces an isomorphism on $H^1$; on global sections the map is multiplication by $1/u$. Thus both dimensions $\ell$ and $i$ are unchanged, and their difference $\chi$ is unchanged as well. [F1, F2, F3, F5, step 2.1, algebra] ∎
