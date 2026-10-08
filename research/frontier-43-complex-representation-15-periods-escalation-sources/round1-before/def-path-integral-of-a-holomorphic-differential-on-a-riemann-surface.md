---
id: def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
kind: definition
title: Path integral of a holomorphic differential on a Riemann surface
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 0
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-meromorphic-differential-on-a-riemann-surface
  - thm-taylor-expansion-holomorphic-function
  - cor-complex-analytic-functions-have-local-primitives
  - thm-zero-complex-derivative-on-a-domain-implies-constant
  - def-complex-domain
  - thm-continuous-image-of-a-connected-space
  - thm-lebesgue-number-lemma
  - thm-heine-borel-rn
  - lem-finite-choice
  - thm-chain-rule-for-complex-derivatives
  - def-piecewise-c1-path-operations-and-oriented-reparametrizations
  - thm-complex-numbers-are-the-real-coordinate-plane
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - cor-piecewise-c1-paths-have-additive-speed-integral-length
  - def-complex-contours-reversal-concatenation-and-closedness
  - def-complex-line-integral-over-a-rectifiable-path
  - thm-existence-of-complex-line-integrals-on-rectifiable-paths
  - thm-fundamental-theorem-for-complex-line-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: 'Ch. 7 §1, the period homomorphism $e:H_1(S)\to\Omega(S)^*$ and path integrals of holomorphic 1-forms, printed p. 59.'
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81)"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §20.4, 1-chains on a Riemann surface and integration of closed differentials, printed p. 161."
verification:
  precheck: pass
---

## Definition

Let $X$ be a Riemann surface, let $\omega$ be a holomorphic differential on
$X$, and let $\gamma:[a,b]\to X$ be a continuous path. In a holomorphic chart
$z:U\to D$, write $\omega=h(z)\,dz$. A **local primitive** of $\omega$ on a
coordinate disk $U$ is a holomorphic function $H_U:U\to\mathbb C$ of the form
$H_U=G\circ z$, where $G'=h$ on $D$. For any finite subdivision
$a=t_0<\cdots<t_N=b$ and local primitives $H_j$ defined on coordinate disks
$U_j$ with $\gamma([t_{j-1},t_j])\subseteq U_j$, set
$$\int_\gamma\omega:=\sum_{j=1}^N\bigl(H_j(\gamma(t_j))-H_j(\gamma(t_{j-1}))\bigr).$$
For $a=b$ define the integral to be zero. The value is independent of the
subdivision, charts, and local primitives, and is called the **path integral**
of $\omega$ along $\gamma$.

The path integral is additive under concatenation, changes sign under path
reversal, is zero on a constant path, and is $\mathbb C$-linear in $\omega$.
When $\gamma$ is piecewise $C^1$, it agrees in every chart with the usual
complex contour integral of the local coefficient $h(z)\,dz$. Continuous paths
are included so that the topological side loops of a polygonal homology model
can be integrated without assuming that a chosen topological representative
is already piecewise smooth.

## Facts & Assumptions

**Given:** A Riemann surface $X$, a holomorphic differential $\omega$ on $X$,
and a continuous path $\gamma:[a,b]\to X$.

[F1] In a holomorphic chart, a meromorphic differential is $h(z)\,dz$; for a
holomorphic differential $h$ is holomorphic, and the coefficients obey the
differential transition law ([[def-meromorphic-differential-on-a-riemann-surface]]).

[F2] A holomorphic coefficient equals its convergent Taylor series locally,
and an analytic function has a primitive on a neighborhood of each point
([[thm-taylor-expansion-holomorphic-function]],
[[cor-complex-analytic-functions-have-local-primitives]]).

[F3] A holomorphic function with zero derivative on a connected plane domain
is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]],
[[def-complex-domain]]).

[F4] The image of a connected space under a continuous map is connected
([[thm-continuous-image-of-a-connected-space]]).

[F5] The interval $[a,b]$ is compact when $a<b$, and every open cover of a
compact metric space has a Lebesgue number
([[thm-heine-borel-rn]], [[thm-lebesgue-number-lemma]]).

[F6] Under $\mathbb C\cong\mathbb R^2$, a piecewise-$C^1$ complex path is
rectifiable; a continuous coefficient has a complex line integral on every
rectifiable contour
([[def-piecewise-c1-path-operations-and-oriented-reparametrizations]],
[[def-complex-contours-reversal-concatenation-and-closedness]],
[[thm-complex-numbers-are-the-real-coordinate-plane]],
[[cor-piecewise-c1-paths-have-additive-speed-integral-length]],
[[thm-existence-of-complex-line-integrals-on-rectifiable-paths]],
[[def-complex-line-integral-over-a-rectifiable-path]]).

[F7] If $H'=h$ on a neighborhood of the trace of a rectifiable contour, then
$\int_\gamma h(z)\,dz=H(\gamma(b))-H(\gamma(a))$
([[thm-fundamental-theorem-for-complex-line-integrals]]).

[F8] Holomorphic coordinate changes are smooth in real coordinates, so a
piecewise-$C^1$ path on $X$ has piecewise-$C^1$ coordinate paths
([[def-riemann-surface-and-holomorphic-atlas]],
[[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F9] The derivative of a composite of complex-differentiable maps obeys the
complex chain rule ([[thm-chain-rule-for-complex-derivatives]]).

[F10] Finite choice is a theorem of ZF ([[lem-finite-choice]]).

## Verification

**Given:** The data above and, when relevant, a finite collection of paths and
holomorphic differentials.

**Proof technique:** direct local construction and comparison on overlaps.

1.1 If $a<b$, around each point of the compact trace $\gamma([a,b])$ choose a coordinate disk on which [F2] gives a local primitive of the coefficient in [F1]. The preimages of these disks cover $[a,b]$; [F5] supplies a Lebesgue number, so a finite subdivision can be chosen with each subpath contained in one primitive disk. There are only finitely many disk and primitive choices, so [F10] suffices and no unrestricted choice is used. If $a=b$, the empty subdivision gives the stated zero convention. [F1, F2, F5, F10, given]

1.2 On a fixed coordinate disk, two local primitives have the same derivative $h$ in its coordinate; their difference has zero derivative and is constant by [F3]. Therefore replacing a chosen primitive on one subinterval does not change its endpoint increment. [F1, F3, given]

1.3 Suppose a connected subpath lies in two coordinate disks $U,V$, with coordinates $z,w$ and local primitives $H_U,H_V$. Its image lies in one connected component of $U\cap V$ by [F4]. Put $G_U=H_U\circ z^{-1}$ and $G_V=H_V\circ w^{-1}$. In the $z$ coordinate, [F1] and [F9] give $\frac{d}{dz}(G_V(w(z))-G_U(z))=h_V(w(z))w'(z)-h_U(z)=0$, so [F3] makes this difference constant on that component. The two endpoint increments are equal. [F1, F3, F4, F9, given]

2.1 Compare any two admissible subdivisions by taking the finite common refinement of their breakpoints. On each refined subinterval, the two original primitive disks both contain the path image, so step 1.3 identifies their increments; splitting an increment inside one disk changes nothing because the same primitive values telescope. Thus the two defining sums agree, proving independence of subdivision, chart, and local primitive. [step 1.1, step 1.2, step 1.3, algebra]

3.1 Splitting the defining sum at a join proves additivity under concatenation; reversing each subinterval swaps the two endpoint values and negates the sum; for a constant path every endpoint increment is zero. If $\lambda,\mu\in\mathbb C$, local primitives for $\lambda\omega_1+\mu\omega_2$ are $\lambda H_1+\mu H_2$, so the formula is complex-linear. [step 2.1, algebra]

4.1 If $\gamma$ is piecewise $C^1$, refine the partition so each coordinate subpath is piecewise $C^1$. By [F6] it is a rectifiable contour, and [F7] identifies its usual contour integral with the increment of the local primitive. Summing the finitely many chart segments gives exactly the path integral defined above. [F6, F7, F8, step 2.1] ∎

## Remarks

For a continuous path, this definition uses only local primitives and endpoint
differences, not a derivative of the path. For a piecewise-$C^1$ path it
recovers the usual contour integral in local coordinates. No choice principle
beyond finite choice is used.
