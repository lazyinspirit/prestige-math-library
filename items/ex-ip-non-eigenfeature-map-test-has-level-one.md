---
id: ex-ip-non-eigenfeature-map-test-has-level-one
kind: example
title: A non-eigenfeature gives Gaussian MAP rejection probabilities tending to one
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-gaussian-map-feature-test
  - thm-ip-map-test-level-and-power
  - thm-ip-unrestricted-map-test-can-have-level-one
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Kretschmann and Werner, Maximum a posteriori testing in statistical inverse problems, Theorem 2.6"
      url: https://arxiv.org/pdf/2402.00686
---

## Example

Assume the Axiom of Choice. Let $X=H=\mathbb R^2$, $K=\operatorname{diag}(1,2)$, $C_0=I$, $m_0=0$, and $\epsilon=1$. Let $U$ be a Borel Gaussian prior with mean $0$ and covariance $I$, independent of a jointly Gaussian centered family $Z$ on $H$ that is linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$, and set $Y_x(g)=\langle Kx,g\rangle_H+Z(g)$. For $h=(1,1)$, the MAP feature operator is $B=K^*K=\operatorname{diag}(1,4)$, so $h$ is not an eigenvector. The test probe is $\Phi_h=(1/2,2/5)$ and the threshold is zero. For every $t>0$, the parameter $x_t=t(-1,1)$ is null for the feature $\langle x,h\rangle$, and the MAP test rejection probability is $G(3t/\sqrt{41})$, which tends to one as $t\to\infty$. Thus this unrestricted null class has supremum rejection probability one, although no finite $t$ attains it.

## Example references

[[alg-ip-gaussian-map-feature-test|Gaussian MAP feature test]]

[[thm-ip-map-test-level-and-power|Level, power, and weighted regularization of Gaussian MAP feature tests]]

[[thm-ip-unrestricted-map-test-can-have-level-one|A non-eigenfeature can give an unrestricted Gaussian MAP test level one]]

## Facts & Assumptions

**Given:** The finite-dimensional Gaussian inverse model and feature in the Example.

[F1] The MAP probe and threshold are $\Phi_h=K C_0^{1/2}(C_0^{1/2}K^*KC_0^{1/2}+\epsilon^2I)^{-1}C_0^{1/2}h$ and $c_h=\langle Km_0,\Phi_h\rangle-\langle m_0,h\rangle$. [[alg-ip-gaussian-map-feature-test]]

[F2] The exact rejection probability for a nonzero probe is the Gaussian tail determined by its mean and noise variance. [[thm-ip-map-test-level-and-power]]

[F3] If the commuting MAP operator has a non-eigenfeature, the unrestricted null rejection supremum is one. [[thm-ip-unrestricted-map-test-can-have-level-one]]

## Proof

1.1 Since $C_0^{1/2}=I$ and $K^*K=\operatorname{diag}(1,4)$, one has $R=(B+I)^{-1}=\operatorname{diag}(1/2,1/5)$ and $\Phi_h=KRh=(1/2,2/5)$. Also $c_h=0$. The vector $(1,1)$ is not an eigenvector because $B(1,1)=(1,4)$ is not a scalar multiple of it. Thus the compact finite-dimensional example satisfies the commutation and non-eigenfeature hypotheses of [F3]. [given, F1, F3, algebra]

2.1 For $x_t=t(-1,1)$, $\langle x_t,h\rangle=0$. The test mean is $\langle Kx_t,\Phi_h\rangle=-t/2+4t/5=3t/10$, while $\|\Phi_h\|^2=1/4+4/25=41/100$. Hence [F2] gives rejection probability $G((3t/10)/(\sqrt{41}/10))=G(3t/\sqrt{41})$, which tends to one. By [F3] the supremum over the unrestricted null is one; the finite $t$ tail is strictly below one. [given, F2, F3, step 1.1, algebra] ∎