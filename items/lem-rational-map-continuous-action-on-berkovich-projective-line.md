---
dependency_level: 5
id: lem-rational-map-continuous-action-on-berkovich-projective-line
kind: lemma
title: "Continuous rational-map action on the seminorm projective line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-berkovich-projective-line-by-polynomial-seminorms
  - lem-berkovich-projective-line-compactness-and-classical-density
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - lem-binary-form-resultant-bezout-identities
  - lem-local-homogeneous-dynamical-height-and-filled-julia-set
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §2 and §7.5"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be a complete algebraically closed nontrivially nonarchimedean valued field. Every rational map $\phi:\mathbb P^1_L\to\mathbb P^1_L$ of degree $d\ge2$ has a unique continuous extension to $X=\mathbb P^{1,\mathrm{an}}_L$. For a nondegenerate homogeneous lift $F$ and its continuous potential $q_F$, define $N_F(x)=\log\max(x(F_1(T,1)),x(F_2(T,1)))$ on the unit $T$ chart and use $(1,U)$ on the other chart. These formulas agree on the circle and define a continuous real function, and
$$q_F(\phi(x))=d q_F(x)-N_F(x)\qquad(x\in X).$$
No separability, degree formula for analytic fibers, analytic pullback multiplicities, or measure invariance is asserted.

## Statement references

[[def-axiom-of-choice]]

[[def-berkovich-projective-line-by-polynomial-seminorms]]

[[lem-berkovich-dynamical-green-kernel-continuous-extension]]

## Facts & Assumptions

**Given:** The field, rational map, lift and projective line of the statement.

[F1] The projective line is compact Hausdorff, its unit charts are closed, and classical points are dense. ([[lem-berkovich-projective-line-compactness-and-classical-density]])

[F2] Polynomial-seminorm points and their chart transition are as defined. ([[def-berkovich-projective-line-by-polynomial-seminorms]])

[F3] The resultant identities prevent simultaneous vanishing of the two coordinate forms under a unit-chart seminorm. ([[lem-binary-form-resultant-bezout-identities]])

[F4] The continuous potential $q_F$ extends $H_F(z)-\log\|z\|$, and $H_F(Fz)=dH_F(z)$. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]], [[lem-local-homogeneous-dynamical-height-and-filled-julia-set]])

[A1] Full Choice is assumed for the compactification and its prerequisite constructions. ([[def-axiom-of-choice]])

## Proof

1.1 In the source $T$ chart write $f=F_1(T,1)$ and $g=F_2(T,1)$. They cannot both have zero seminorm value, by [F3]. On the closed region $C_g=\{x:x(f)\le x(g)\}$, the latter value is positive. For $p(Z)$ of degree $n$, define the target-chart seminorm by
$$y_x(p)=\frac{x(g^np(f/g))}{x(g)^n}.$$
The numerator is a polynomial in $T$. This definition is independent of the nominated degree used to clear denominators, because multiplication by $g$ cancels between numerator and denominator. It is multiplicative, extends the constants and satisfies the strong triangle inequality by clearing a common denominator. Moreover $y_x(Z)=x(f)/x(g)\le1$, so it is a point of the target unit chart by [F2]. Every polynomial coordinate of $y_x$ is continuous on $C_g$, as a quotient of continuous real functions with positive denominator. [F2, F3, algebra]

1.2 On the complementary closed region $C_f=\{x:x(g)\le x(f)\}$ use target coordinate $g/f$ and the analogous formula. On their overlap, both coordinate values have modulus $1$ and the two seminorms are identified by inversion. Thus the two continuous maps agree as maps to $X$ and glue continuously on the finite closed cover $C_f\cup C_g$: inverse images of closed sets are a union of two relatively closed subsets, hence closed. Repeating in the other source chart gives the same map on their circle, because the source transition multiplies the homogeneous pair by $T^d$ and leaves all ratios unchanged. The quotient construction therefore gives a continuous map $X\to X$. Its formula at classical points is precisely $[F_1:F_2]$. [F1, F2, step 1.1, algebra]

2.1 A continuous extension is unique: the equalizer of two continuous maps into a Hausdorff space is closed, because two distinct images have disjoint neighborhoods. Since it contains the dense classical points by [F1], it is all of $X$. In particular the constructed extension is independent of the lift used to construct it. [F1, step 1.2, algebra]

2.2 The maximum defining $N_F$ is positive by [F3], so its logarithm is continuous on each chart. The homogeneous circle identity from step 1.2 makes these logarithms agree there, so $N_F$ is continuous globally. At a classical point with a norm-one representative $z$, [F4] gives
$$q_F(\phi([z]))=H_F(Fz)-\log\|Fz\|=dH_F(z)-\log\|Fz\|=d q_F([z])-N_F([z]).$$
Both sides are continuous real functions on $X$ by [F4] and step 1.2. Equality on the dense classical set therefore proves equality everywhere. [F1, F3, F4, step 1.2, algebra] ∎
