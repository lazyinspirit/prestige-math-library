---
dependency_level: 6
id: lem-dynamical-green-pullback-at-classical-points
kind: lemma
title: "The Green-kernel pullback identity at classical target points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-local-dynamical-green-function
  - lem-local-dynamical-green-conjugacy-and-good-reduction
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
  - lem-binary-sylvester-resultant-linear-factor-product
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - lem-rational-map-continuous-action-on-berkovich-projective-line
  - lem-berkovich-projective-line-compactness-and-classical-density
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2 resultant convention and AppendixA, TheoremA.10"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be a complete algebraically closed nontrivially nonarchimedean valued field and let $\phi$ be a rational map of degree $d\ge2$. If $y\in\mathbb P^1(L)$ and $y_1,\ldots,y_d$ are its classical preimages, listed with algebraic multiplicity, then for every $x\in\mathbb P^{1,\mathrm{an}}_L$ one has the extended-real identity
$$g_\phi(\phi(x),y)=\sum_{i=1}^d g_\phi(x,y_i).$$
All multiplicities here belong to a classical polynomial fiber; no multiplicity for a nonclassical target is asserted.

## Statement references

[[def-axiom-of-choice]]

[[def-local-dynamical-green-function]]

[[lem-rational-map-continuous-action-on-berkovich-projective-line]]

## Facts & Assumptions

**Given:** The field, map and classical target in the statement.

[F1] Classical local Green kernels are invariant under simultaneous Möbius conjugacy; homogeneous heights satisfy $H_F(Fz)=dH_F(z)$. ([[lem-local-dynamical-green-conjugacy-and-good-reduction]], [[lem-local-homogeneous-dynamical-height-and-filled-julia-set]])

[F2] If $F_1=\prod(z\wedge a_i)$ and $F_2=\prod(z\wedge b_j)$, then $R_F=\prod_{i,j}(a_i\wedge b_j)$. ([[lem-binary-sylvester-resultant-linear-factor-product]])

[F3] The classical formula is $G_F(z,w)=-\log|z\wedge w|+H_F(z)+H_F(w)-\log|R_F|/(d(d-1))$. ([[def-local-dynamical-green-function]])

[F4] The extended kernel has continuous extended-real slices and is bounded below; rational maps extend continuously; classical points are dense. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]], [[lem-rational-map-continuous-action-on-berkovich-projective-line]], [[lem-berkovich-projective-line-compactness-and-classical-density]])

[A1] Full Choice is inherited through the completed algebraically closed field setting and Berkovich suppliers. ([[def-axiom-of-choice]])

## Proof

1.1 First prove the formula for classical $x$. By [F1], conjugate the map so the target is infinity, represented by $w=(1,0)$. Factor a lift as in [F2]. For each $j$, the vector $b_j$ represents one preimage of infinity, with factors listed including multiplicity, and $F_1(b_j)\ne0$ because $R_F\ne0$. Choose $c_j$ with $c_j^d=F_1(b_j)$ and put $w_j=b_j/c_j$. Then $F(w_j)=w$. The wedge product and [F2] give
$$\prod_j|z\wedge w_j|=\frac{|F_2(z)|}{|R_F|^{1/d}}=\frac{|F(z)\wedge w|}{|R_F|^{1/d}}.$$
The first equality includes all algebraic multiplicities and uses only absolute values, so signs in $F_1(b_j)$ do not affect it. [F1, F2, algebra]

1.2 If $\phi([z])\ne\infty$, all wedge terms in step1.1 are nonzero. By [F1], $H_F(w_j)=H_F(w)/d$. Sum [F3] over $j$ and use step1.1 and $H_F(Fz)=dH_F(z)$. The resultant terms agree because
$$\frac1d\log|R_F|-\frac{1}{d-1}\log|R_F|=-\frac{1}{d(d-1)}\log|R_F|.$$
The resulting equality is $G_F(Fz,w)=\sum_jG_F(z,w_j)$, the desired projective identity. If $\phi([z])=\infty$, the left side is $+\infty$ and at least one right-hand term is $+\infty$, while all others are finite or $+\infty$, so the same extended-real identity holds. Undo the simultaneous classical conjugacy to obtain the formula for every classical target and every classical source. [F1, F3, step 1.1, algebra]

2.1 Fix the original classical target $y$. By [F4], the left side of the Statement is a continuous extended-real function of $x$, as a classical kernel slice composed with the continuous map $\phi$. Each term on the right is a continuous extended-real slice. Their finite sum is continuous because all terms have a common finite lower bound and none takes value $-\infty$; subtract that lower bound to reduce to addition on $[0,+\infty]$. These two continuous functions into the Hausdorff extended-real interval agree on the dense classical set by step1.2, hence agree on the whole projective line. This proves the assertion without defining nonclassical pullback multiplicities. [F4, step 1.2, algebra] ∎
