---
id: ex-qftx-s3-cs-matter-matrix-integral
kind: example
title: ABJM S3 partition function as a Cartan matrix integral
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-s3-partition-functions-examples
deps:
  - post-qftx-s3-cs-matter-localization-model
dependency_roles:
  post-qftx-s3-cs-matter-localization-model: physical-assumption
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Anton Kapustin, Brian Willett, and Itamar Yaakov, Exact Results for Wilson Loops in Superconformal Chern-Simons Theories with Matter"
      url: "https://arxiv.org/pdf/0909.4559"
      locator: "§3.1–3.5, especially (3.20), (3.28), (3.64), and (3.68); §4, especially (4.2)–(4.4), PDF pp. 7–22; Appendix B (B.1)–(B.4) only for the pure-U(N) real-line Gaussian regulator caveat, not as a joint ABJM prescription."
    - title: "Marcos Mariño, Lectures on Localization and Matrix Models in Supersymmetric Chern-Simons-Matter Theories"
      url: "https://arxiv.org/pdf/1104.0783"
      locator: "§6.2–6.5, especially the radius rescaling, (6.67), and (6.81), PDF pp. 37–46."
physical_scope: "Source-reported formal localization formula for the zero-mass, zero-FI ABJM model with gauge group U(N)×U(N) on the round Euclidean S3; no general N=2 result, continuum measure construction, or empirical claim is asserted."
verification:
  precheck: pending
---

## Example

Fix the adopted zero-mass, zero-Fayet–Iliopoulos ABJM model on the round sphere of radius $r>0$, with $N\in\mathbb Z_{\ge1}$ and nonzero integer level $k$. Let $s_i,\widehat s_i\in\mathbb R$ be the eigenvalues of the two constant Hermitian Cartan scalars, each of physical dimension $r^{-1}$, and put $\lambda_i=rs_i$ and $\widehat\lambda_i=r\widehat s_i$. In the Kapustin–Willett–Yaakov Euclidean level convention, the source-reported formal localization expression is
$$
Z_{\mathrm{ABJM}}(\mathbb S^3_r)=\frac{1}{(N!)^2}\int_{\mathbb R^{2N}}\left(\prod_{i=1}^N d\lambda_i\,d\widehat\lambda_i\right)e^{-i\pi k\left(\sum_i\lambda_i^2-\sum_i\widehat\lambda_i^2\right)}\frac{\displaystyle\prod_{1\le i<j\le N}\left(2\sinh\!\left(\pi(\lambda_i-\lambda_j)\right)\right)^2\left(2\sinh\!\left(\pi(\widehat\lambda_i-\widehat\lambda_j)\right)\right)^2}{\displaystyle\prod_{i,j=1}^N\left(2\cosh\!\left(\pi(\lambda_i-\widehat\lambda_j)\right)\right)^2}.
$$
Each Cartan variable is integrated over the real line. The integer level and the dimensionless eigenvalues fix every exponent and hyperbolic-function argument; the factor $(N!)^{-2}$ is the inverse order of the two Weyl groups. Mariño's convention uses $\mu_i=2\pi\lambda_i$ and $g_s=2\pi i/k_{\mathrm{Marino}}$; it gives the same displayed phase after setting $k_{\mathrm{Marino}}=-k$. The displayed real-contour expression is oscillatory. It is the source's matrix-integral result under its formal localization and determinant prescriptions, not a construction of the continuum functional measure, a proof of the localization limit, or a formula for every three-dimensional $\mathcal N=2$ theory.

## Example references

[Kapustin, Willett, and Yaakov, §§3–4](https://arxiv.org/pdf/0909.4559)

[Mariño, §§6.2–6.5](https://arxiv.org/pdf/1104.0783)

## Facts & Assumptions

**Given:** The source-specific ABJM field content, levels, radius, zero mass/FI parameters, selected supercharge, real Cartan contour, and formal measure qualifications of the Postulate.

[A1] [[post-qftx-s3-cs-matter-localization-model]]: the adopted model has global group $U(N)\times U(N)$, levels $k,-k$, four chiral multiplets in two conjugate bifundamental pairs, and $\Delta=R=\tfrac12$. Its field-theory measure and localization argument are formal inputs, not a constructed continuum measure.

[F1] Kapustin, Willett, and Yaakov, §§3.1–3.5 and §4, give the gauge-fixed Cartan reduction, root/Vandermonde factor, one-loop determinants, and the ABJM real-line matrix-integral convention. The result is specific to their superconformal Chern–Simons–matter setup.

[F2] Mariño, §6.3 and Eq. (6.67), gives the zeta-regularized chiral determinant for canonical dimension $\Delta=\tfrac12$ in a self-conjugate representation. Its §6.5 Eq. (6.81) combines four bifundamental chirals into the ABJM denominator and states the opposite Euclidean level-phase convention.

## Proof

1.1 In the chosen Cartan, the positive roots of each $U(N)$ factor are $e_i-e_j$ for $i<j$. A bifundamental weight is $e_i-\widehat e_j$ and its conjugate weight is $-(e_i-\widehat e_j)$, so the corresponding scalar eigenvalues are $\lambda_i-\widehat\lambda_j$ and its negative. The radius rescaling $\lambda_i=rs_i$ makes each variable dimensionless. [given, A1, F1, construct]

1.2 Mariño's dimensionless variables satisfy $\mu_i=2\pi\lambda_i$ and $g_s=2\pi i/k_{\mathrm{Marino}}$. Therefore $-\frac{1}{2g_s}\sum_i(\mu_i^2-\widehat\mu_i^2)=i\pi k_{\mathrm{Marino}}\sum_i(\lambda_i^2-\widehat\lambda_i^2)$. Setting $k_{\mathrm{Marino}}=-k$ gives exactly the Kapustin–Willett–Yaakov phase in the Example. The variables are integrated on the real Cartan lines; the phase is oscillatory. [F1, F2, algebra]

2.1 Group a conjugate pair of chiral multiplets into the self-conjugate total representation $R\oplus R^*$ before applying [F2]. Its weights are $e_i-\widehat e_j$ and their negatives. Equation (6.67), applied to this whole self-conjugate representation, gives $(2\cosh(\pi(\lambda_i-\widehat\lambda_j)))^{-1/2}(2\cosh(-\pi(\lambda_i-\widehat\lambda_j)))^{-1/2}=(2\cosh(\pi(\lambda_i-\widehat\lambda_j)))^{-1}$ for each weight pair. This calculation does not assign the real half-power to an isolated non-self-conjugate chiral determinant, which can carry a phase. ABJM has two conjugate pairs, giving the denominator power $-2$ for every $(i,j)$. [A1, F2, step 1.1, algebra]

2.2 The adjoint determinant for the first $U(N)$ factor is the product over its roots. For each positive root $\alpha=e_i-e_j$, the two factors are $2\sinh(\pi\alpha(\lambda))$ and $2\sinh(-\pi\alpha(\lambda))$, whose product is $-(2\sinh(\pi(\lambda_i-\lambda_j)))^2$. There are $N(N-1)/2$ positive roots; the second $U(N)$ factor has the same number, so their two root-sign factors multiply to $(-1)^{N(N-1)}=1$. The remaining factors are exactly the two displayed squared-sinh products. The residual Weyl group is $S_N\times S_N$ of order $(N!)^2$, giving the prefactor. [F1, step 1.1, algebra]

3.1 Multiplying the classical phase from step 1.2, the two vector determinants from step 2.2, the chiral determinant from step 2.1, the Cartan measures, and the Weyl quotient gives the displayed matrix integral. This reproduces the source-specific formula only under the adopted formal localization assumptions; it does not prove that the continuum field-space measure or localization limit exists. [given, A1, F1, F2, step 1.2, step 2.1, step 2.2, algebra] ∎
