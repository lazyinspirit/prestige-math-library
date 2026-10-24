---
id: ex-twisted-sphere-dirac-index-and-curvature-term
kind: example
title: "A line twist on the two-sphere has nonzero index and curvature term"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory-examples
dependency_level: 15
deps:
  - cor-spin-dirac-index-formula-with-arbitrary-twist
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
  - thm-mod-two-reduction-of-chern-classes
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - def-ahat-and-relative-chern-character-forms
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - def-complex-linear-and-compatible-bundle-connections
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
axiom_strength: "ZF + full AC; exact current Clifford/Spin interfaces"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC.

Let $S^2$ have its unit round metric and complex orientation. Its tangent bundle admits a Spin lift; fix one. For each integer $k$, there is a Hermitian line bundle $L_k$ with unitary curvature
$$F^{L_k}=-2\pi i k\,\omega,\qquad \omega=\frac{\operatorname{area}_{S^2}}{4\pi},\quad \int_{S^2}\omega=1.$$
The twisted chiral Spin Dirac index is $k$. In an oriented orthonormal frame the twisting term in the Lichnerowicz formula is $-\frac{k}{2}\Gamma$, where $\Gamma=i\,c(e^1)c(e^2)$ is spinor chirality. Thus for $k\ne0$ the twist contributes a nonzero curvature endomorphism.

## Facts & Assumptions

**Given:** Full AC, the round two-sphere, its Spin structure, an integer $k$, and the line bundle with the displayed local connection.

[F1] $TS^2\cong T\mathbb{CP}^1$ has $c_1=2x$, so $w_2=0$ and a Spin lift exists ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]], [[thm-mod-two-reduction-of-chern-classes]], [[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]).

[F2] The normalized Chern character is $\operatorname{tr}\exp(-F/(2\pi i))$, and the A-hat form has no degree-two term ([[def-ahat-and-relative-chern-character-forms]], [[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F3] The curvature form of a unitary connection represents the real image of the topological first Chern class ([[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]).

[F4] The spin Dirac index formula applies to any finite-rank Hermitian twist, and its Lichnerowicz curvature term is $\sum_{i<j}c(e^i)c(e^j)F^E_{ij}$ ([[cor-spin-dirac-index-formula-with-arbitrary-twist]], [[lem-lichnerowicz-formula-for-geometric-dirac-operators]]).

[F5] For $S^2\cong\mathbb{CP}^1$ with its complex orientation, $x=c_1(\gamma^*)$ generates $H^2(S^2;\mathbb Z)$ and $\langle x,[S^2]\rangle=1$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]).

[A1] Full AC is inherited through the Spin-lift criterion, Chern–Weil, and the spin index formula ([[def-axiom-of-choice]]).

## Proof

**Given:** Spherical coordinates $(\theta,\phi)$ away from the poles, with area form $\sin\theta\,d\theta\wedge d\phi$.

1.1 By [F1], $TS^2$ admits a Spin lift; fix one. The unit sphere has area $4\pi$, so $\omega=(4\pi)^{-1}\sin\theta\,d\theta\wedge d\phi$. On north and south charts define unitary connection forms $A_N=-\frac{ik}{2}(1-\cos\theta)d\phi$ and $A_S=\frac{ik}{2}(1+\cos\theta)d\phi$. They extend smoothly over their respective poles, and $A_S-A_N=ik\,d\phi=g^{-1}dg$ for the unitary transition $g(\phi)=e^{ik\phi}$. Hence they define a Hermitian line bundle connection; differentiation gives $F=dA_N=dA_S=-(ik/2)\sin\theta\,d\theta\wedge d\phi=-2\pi i k\omega$. [A1, F1, given, construct, algebra]

2.1 By [F3]–[F5], the real Chern class of this connection integrates to $k$, so its integral first Chern class is $c_1(L_k)=kx$; the integral group is torsion-free by [F5], so its image in real cohomology determines it. The line-bundle curvature term in [F4] is $c(e^1)c(e^2)F_{12}=c(e^1)c(e^2)(-ik/2)=-\frac{k}{2}\Gamma$, because $\Gamma=i\,c(e^1)c(e^2)$. This is nonzero when $k\ne0$. [A1, F3, F4, F5, step 1.1, algebra]

3.1 In dimension two $\widehat A$ has only its degree-zero term $1$, while $\operatorname{tr}\exp(-F/(2\pi i))=1+k\omega$ because $\omega^2=0$. Applying [F4] yields $\operatorname{ind}_{\mathbb C}(D^+_{S\otimes L_k})=\int_{S^2}k\omega=k$. For $k=0$ both the curvature term and index vanish. The construction is smooth at both poles by the displayed vanishing factors, the orientation is the complex orientation, and the formula uses the same actual spin-module interface as [F4]. [A1, F2, F4, step 1.1, step 2.1] ∎

