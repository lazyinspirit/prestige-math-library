---
id: lem-compact-torus-fixed-charts-without-compactness
kind: lemma
title: "Local fixed-point charts for torus actions on noncompact manifolds"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-moduli
dependency_level: 0
deps:
  - def-axiom-of-choice
  - cor-normalized-haar-probability-on-a-compact-group
  - prop-integration-against-haar-is-invariant-under-translations-and-conjugation
  - thm-differentiation-under-the-integral-sign
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  cor-normalized-haar-probability-on-a-compact-group: mathematical-premise
  prop-integration-against-haar-is-invariant-under-translations-and-conjugation: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shubham Dwivedi, Jonathan Herman, Lisa C. Jeffrey and Theo van den Hurk, Hamiltonian Group Actions and Equivariant Cohomology"
      url: https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
verification:
  precheck: pending
---

## Statement

Assume AC. Let a compact torus $T$ act jointly smoothly on a finite-dimensional Hausdorff second-countable smooth manifold $X$ without boundary. The manifold $X$ need not be compact. At every fixed point $p$, there is a $T$-invariant neighborhood $U$ and a diffeomorphism $\Phi:U\to V\subset T_pX$ onto an open invariant neighborhood of zero such that $\Phi(p)=0$, $d\Phi_p=I$ and $\Phi(t\cdot x)=d_pt\,\Phi(x)$. Consequently $X^T$ is locally an embedded smooth submanifold and

$$T_p(X^T)=(T_pX)^T.$$

In particular, an isolated fixed point has no nonzero invariant tangent vector. For a holomorphic torus action, its complex tangent representation therefore has no zero character. No finiteness of the entire fixed locus or its connected components is asserted.

## Statement references

[Dwivedi et al., §9.9, Example 9.48: fixed loci, local linearization and absence of zero normal weights](https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf)

## Facts & Assumptions

**Given:** AC, the compact torus action on $X$, and a fixed point $p$. [[def-axiom-of-choice]]

[F1] A compact group has normalized Haar probability; integration against it is translation invariant. [[cor-normalized-haar-probability-on-a-compact-group]], [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]

[F2] An integrable bound on a parameter derivative permits differentiation under the integral. [[thm-differentiation-under-the-integral-sign]]

[F3] A smooth map whose differential is invertible has a local smooth inverse, including in dimension zero. [[thm-smooth-inverse-function-theorem-on-manifolds]]

## Proof

**Given:** A smooth chart $\psi:O\to T_pX$ with $\psi(p)=0$ and $d\psi_p=I$, obtained from any chart by its linear differential.

1.1 The set $O_T=\{x:T\cdot x\subset O\}$ contains $p$, is invariant and is open. Indeed, if $x\in O_T$, continuity gives for each $t\in T$ a product neighborhood $A_t\times B_t$ of $(t,x)$ whose action image lies in $O$; a finite subcover of $T$ by the $A_t$ makes $\bigcap B_t$ a neighborhood of $x$ contained in $O_T$. Define $R(t)=d_pt$. This is a smooth representation on $T_pX$ by the action law and chain rule. [given, construct]

2.1 On $O_T$ define $\Phi(x)=\int_T R(t)^{-1}\psi(t\cdot x)\,dt$. All components are integrable by compactness and [F1]. On a sufficiently small relatively compact parameter chart in $O_T$, every derivative of the smooth integrand is uniformly bounded on the product of its compact closure with $T$. These constant bounds are integrable against Haar probability. Apply [F2] in each real coordinate, repeatedly, and use the same bounds for continuity of each derivative to prove $\Phi$ is smooth. Its differential at $p$ is $\int_T R(t)^{-1}I R(t)\,dt=I$. Haar translation in [F1], with $u=ts$, gives $\Phi(sx)=R(s)\Phi(x)$. [F1, F2, step 1.1, construct, algebra]

3.1 By [F3], restrict $\Phi$ to an open neighborhood $O_0\subset O_T$ on which it is a diffeomorphism onto its open image. Replace $O_0$ by $U=\{x:T\cdot x\subset O_0\}$; step 1.1 shows this is an open invariant neighborhood of $p$. The restriction is still a diffeomorphism onto the open set $V=\Phi(U)$, and equivariance makes $V$ invariant. Thus $x\in U$ is fixed exactly when $\Phi(x)\in V\cap(T_pX)^T$: one implication uses equivariance and the other uses injectivity. The intersection is an open subset of a linear subspace, so its inverse image is an embedded submanifold with tangent $(T_pX)^T$. [F3, step 1.1, step 2.1, construct]

4.1 If $p$ is isolated in $X^T$, the linear subspace in step 3.1 must be zero, since every positive-dimensional subspace meets the open neighborhood $V$ in other points. For a holomorphic action the differential is complex linear, and a zero character means exactly a complex vector fixed by every $t$; such a vector is also a real invariant vector, and is excluded. Dimension-zero manifolds and the trivial torus satisfy the same local chart description. No step required compactness of $X$. [step 3.1, algebra] ∎
