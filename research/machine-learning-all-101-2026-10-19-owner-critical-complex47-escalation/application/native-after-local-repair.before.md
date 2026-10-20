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
  - thm-singular-value-decomposition
  - thm-directional-sample-covariance-resolvent-limit
  - thm-smallest-positive-eigenvalue-sample-covariance-edge
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

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid real array with mean zero, unit second moment and finite fourth moment. Let $N_n$ be a positive integer with $n/N_n\to1$, set $T_n=I_n$, and choose deterministic unit vectors $x_n\in\mathbb C^n$. The directional measures converge almost surely to the aspect-one Marchenko–Pastur law with density $\rho_1(t)=\sqrt{4-t}/(2\pi\sqrt t)$ on $(0,4)$ and no atom at zero. For every fixed $s>0$, their negative-axis integrals converge to $\int(t+s)^{-1}d\mu_1(t)$, and these limiting integrals tend to $+\infty$ as $s\downarrow0$; the smallest positive sample-covariance eigenvalue tends to zero, so there is no positive lower-edge gap for reciprocal-spectrum closure.

## Example references

[[thm-directional-sample-covariance-resolvent-limit]]

[[cor-negative-axis-directional-resolvent-integrals]]

[[def-marchenko-pastur-measure]]

[[thm-smallest-positive-eigenvalue-sample-covariance-edge]]

## Facts & Assumptions

**Given:** AC, the nested real iid entry law, $T_n=I_n$, aspect ratio one, and deterministic unit directions.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The isotropic directional law converges to the Marchenko–Pastur law ([[thm-directional-sample-covariance-resolvent-limit]]).

[F2] Fixed negative-axis integrals converge by bounded-continuous-test convergence ([[cor-negative-axis-directional-resolvent-integrals]]).

[F3] At aspect one the Marchenko–Pastur density is $\sqrt{4-t}/(2\pi\sqrt t)$ on $(0,4)$ and has no zero atom ([[def-marchenko-pastur-measure]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]]).

[F4] For a nested real iid finite-fourth-moment design at aspect one, the smallest positive eigenvalue of $X_n^{\mathsf T}X_n/n$ tends almost surely to zero; the SVD identifies the positive eigenvalues of $X_nX_n^{\mathsf T}$ and $X_n^{\mathsf T}X_n$ with multiplicity ([[thm-smallest-positive-eigenvalue-sample-covariance-edge]], [[thm-singular-value-decomposition]]).

[F5] The isotropic limit $F_{1,\delta_1}$ equals the aspect-one Marchenko–Pastur law because both transforms satisfy the unique fixed-point equation ([[lem-deformed-mp-fixed-point-solution-is-unique]], [[lem-marchenko-pastur-formula-defines-a-finite-measure]], [[lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line]]).

[F6] Monotone convergence passes increasing nonnegative functions through their measure integrals ([[thm-monotone-convergence-for-the-integral]]).

[F7] The Dirac measure $\delta_1$ is the unit point mass at $1$ ([[def-dirac-measure]]).

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 With $H=\delta_1$ and $c=1$, the population-resolvent condition holds for every unit vector, so [F1] gives convergence to $F_{1,\delta_1}$. The transform of the law in [F3] satisfies the same fixed-point equation; [F5] identifies $F_{1,\delta_1}=\mu_1$. Substituting $a_1=0$, $b_1=4$ into the density in [F3] gives $\rho_1(t)=\sqrt{4-t}/(2\pi\sqrt t)$ on $(0,4)$ and zero atom. [given, A1, F1, F3, F5, F7, algebra]

2.1 For fixed $s>0$, $t\mapsto(t+s)^{-1}$ is bounded and continuous, so [F2] gives the asserted limit of the negative-axis integrals. For $0<t<1$, [F3] gives $\rho_1(t)\ge\sqrt3(2\pi)^{-1}t^{-1/2}$; hence $t^{-1}\rho_1(t)\ge\sqrt3(2\pi)^{-1}t^{-3/2}$, whose integral at zero diverges. Along $s_k=1/k$, the nonnegative functions $(t+s_k)^{-1}$ increase to $t^{-1}$ for $t>0$. The law has no atom at zero by [F3], and [F6] gives $\int(t+s_k)^{-1}d\mu_1(t)\uparrow\int t^{-1}d\mu_1(t)=\infty$. Since these integrals are nondecreasing as $s\downarrow0$, the full limit is $+\infty$. [F2, F3, F6, step 1.1, algebra]

3.1 By [F4], $\lambda_{\min}^{+}(X_n^{\mathsf T}X_n/n)\to0$ almost surely. The positive eigenvalues of $A_n=N_n^{-1}X_nX_n^{\mathsf T}$ coincide with those of $N_n^{-1}X_n^{\mathsf T}X_n$, including multiplicities. Therefore $$\lambda_{\min}^{+}(A_n)=\frac{n}{N_n}\lambda_{\min}^{+}(X_n^{\mathsf T}X_n/n)\longrightarrow0,$$ since $n/N_n\to1$. This excludes an eventual uniform positive lower bound and proves the stated gap failure without claiming convergence of the finite-sample reciprocal traces. [given, A1, F4, step 1.1, algebra] ∎

## Source notes

Chapter 3 of Bai and Silverstein ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Theorem 1 of Bai, Miao, and Pan ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
