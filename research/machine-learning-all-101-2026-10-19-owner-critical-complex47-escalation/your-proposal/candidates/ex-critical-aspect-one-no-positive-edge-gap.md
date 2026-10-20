---
id: ex-critical-aspect-one-no-positive-edge-gap
kind: example
title: "At aspect one the reciprocal-spectrum limit diverges"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-marchenko-pastur-measure
  - def-dirac-measure
  - lem-marchenko-pastur-formula-defines-a-finite-measure
  - lem-deformed-mp-fixed-point-solution-is-unique
  - lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line
  - thm-directional-sample-covariance-resolvent-limit
  - def-sample-covariance-directional-spectral-measure
  - def-weak-convergence-of-borel-probability-measures
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - cor-negative-axis-directional-resolvent-integrals
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
---
## Example

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid complex array with mean zero, unit second absolute moment and finite fourth moment. Let $N_n$ be a positive integer with $n/N_n\to1$, set $T_n=I_n$, and choose deterministic unit vectors $x_n\in\mathbb C^n$. The directional measures converge almost surely to the aspect-one Marchenko–Pastur law with density $\rho_1(t)=\sqrt{4-t}/(2\pi\sqrt t)$ on $(0,4)$ and no atom at zero. For every fixed $s>0$, their negative-axis integrals converge to $\int(t+s)^{-1}d\mu_1(t)$, and these limiting integrals tend to $+\infty$ as $s\downarrow0$; the smallest positive sample-covariance eigenvalue tends to zero, so there is no positive lower-edge gap for reciprocal-spectrum closure.

## Example references

[[thm-directional-sample-covariance-resolvent-limit]]

[[cor-negative-axis-directional-resolvent-integrals]]

[[def-marchenko-pastur-measure]]

[[def-sample-covariance-directional-spectral-measure]]

[[def-weak-convergence-of-borel-probability-measures]]

## Facts & Assumptions

**Given:** AC, the nested complex iid entry law, $T_n=I_n$, aspect ratio one, and deterministic unit directions.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The isotropic directional law converges to the Marchenko–Pastur law ([[thm-directional-sample-covariance-resolvent-limit]]).

[F2] Fixed negative-axis integrals converge by bounded-continuous-test convergence ([[cor-negative-axis-directional-resolvent-integrals]]).

[F3] At aspect one the Marchenko–Pastur density is $\sqrt{4-t}/(2\pi\sqrt t)$ on $(0,4)$ and has no zero atom ([[def-marchenko-pastur-measure]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F4] The finite complex directional measure is $\mu_n^{x_n}=\sum_{\lambda\in\operatorname{spec}(A_n)}\|P_\lambda x_n\|_2^2\delta_\lambda$, with nonnegative weights and support on the nonnegative eigenvalues of $A_n$ ([[def-sample-covariance-directional-spectral-measure]]). Weak convergence means convergence of integrals against every bounded continuous real-valued function ([[def-weak-convergence-of-borel-probability-measures]]).

[F5] The isotropic limit $F_{1,\delta_1}$ equals the aspect-one Marchenko–Pastur law because both transforms satisfy the unique fixed-point equation ([[lem-deformed-mp-fixed-point-solution-is-unique]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]], [[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

[F6] Monotone convergence passes increasing nonnegative functions through their measure integrals ([[thm-monotone-convergence-for-the-integral]]).

[F7] The Dirac measure $\delta_1$ is the unit point mass at $1$ ([[def-dirac-measure]]).

[F8] The nonnegative integral is monotone and homogeneous under positive finite scalars; the integral of a measurable indicator is its set measure, by the simple-integral formula and agreement with the nonnegative integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 With $H=\delta_1$ and $c=1$, the population-resolvent condition holds for every unit vector, so [F1] gives convergence to $F_{1,\delta_1}$. The transform of the law in [F3] satisfies the same fixed-point equation; [F5] identifies $F_{1,\delta_1}=\mu_1$. Substituting $a_1=0$, $b_1=4$ into the density in [F3] gives $\rho_1(t)=\sqrt{4-t}/(2\pi\sqrt t)$ on $(0,4)$ and zero atom. [given, A1, F1, F3, F5, F7, algebra]

2.1 For fixed $s>0$, $t\mapsto(t+s)^{-1}$ is bounded and continuous, so [F2] gives the asserted limit of the negative-axis integrals. For $0<t<1$, [F3] gives $\rho_1(t)\ge\sqrt3(2\pi)^{-1}t^{-1/2}$; hence $t^{-1}\rho_1(t)\ge\sqrt3(2\pi)^{-1}t^{-3/2}$, whose integral at zero diverges. Along $s_k=1/k$, the nonnegative functions $(t+s_k)^{-1}$ increase to $t^{-1}$ for $t>0$. The law has no atom at zero by [F3], and [F6] gives $\int(t+s_k)^{-1}d\mu_1(t)\uparrow\int t^{-1}d\mu_1(t)=\infty$. Since these integrals are nondecreasing as $s\downarrow0$, the full limit is $+\infty$. [F2, F3, F6, step 1.1, algebra]

3.1 Work on the probability-one weak-convergence event of step 1.1. For each integer $j\ge1$, set $b_j=2^{-j}$ and $a_j=b_j/2$, and define the bounded continuous real function $\varphi_j(t)=\max\{0,1-|2t-a_j-b_j|/(b_j-a_j)\}$ on $[0,\infty)$. It vanishes outside $[a_j,b_j]$, is positive exactly on $(a_j,b_j)$, and is at least $1/2$ on the middle half $J_j$ of that interval. On $(a_j,b_j)$, [F3] gives $\rho_1(t)\ge\sqrt{4-b_j}/(2\pi\sqrt{b_j})>0$. Applying the order and scalar rules in [F8] first to $\varphi_j\ge\tfrac12\mathbf1_{J_j}$ under $\mu_1$, then to this density lower bound on $J_j$ under Lebesgue measure, gives $\int\varphi_j\,d\mu_1\ge\tfrac12\mu_1(J_j)\ge(b_j-a_j)\sqrt{4-b_j}/(8\pi\sqrt{b_j})>0$, since $J_j$ has length $(b_j-a_j)/2$. By [F4] and step 1.1, $\int\varphi_j\,d\mu_n^{x_n}\to\int\varphi_j\,d\mu_1$, so for each $j$ this sample integral is eventually positive. Since $0\le\varphi_j\le\mathbf1_{(a_j,b_j)}$, [F8] gives $0<\int\varphi_j\,d\mu_n^{x_n}\le\mu_n^{x_n}((a_j,b_j))$. The finite atomic set formula in [F4] makes the right side $\sum_{\lambda\in\operatorname{spec}(A_n)\cap(a_j,b_j)}\|P_\lambda x_n\|_2^2$; therefore there is an actual eigenvalue in $(a_j,b_j)$. [F3, F4, F8, step 1.1, algebra]

3.2 These conclusions hold for all $j$ on the same weak-convergence event, since its bounded-continuous-test property applies to each $\varphi_j$. In particular $j=1$ ensures at least one positive eigenvalue for every sufficiently large $n$, so the smallest positive eigenvalue $\lambda_{\min}^{+}(A_n)$ is eventually defined. For every fixed $j$, step 3.1 gives $0<\lambda_{\min}^{+}(A_n)<b_j$ for all sufficiently large $n$; since $b_j\downarrow0$, it follows that $\lambda_{\min}^{+}(A_n)\to0$ on that probability-one event. This excludes an eventual uniform positive lower bound and proves the stated gap failure for the full complex entry class without claiming convergence of finite-sample reciprocal traces. [F4, step 3.1, algebra] ∎

## Source notes

Chapter 3 of Bai and Silverstein ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Theorem 1 of Bai, Miao, and Pan ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
