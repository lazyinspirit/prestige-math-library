---
id: "ex-isotropic-gaussian-wasserstein-geodesic"
kind: example
title: "An isotropic Gaussian Wasserstein geodesic"
status: draft
dependency_level: 7
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "thm-wasserstein-two-is-a-metric", "def-continuity-equation-with-finite-action", "thm-ac2-curve-admits-minimal-velocity", "def-standard-normal-and-normal-laws", "lem-normal-location-scale-mean-and-variance", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "def-countable-choice", "thm-choice-implies-dependent-implies-countable-choice", "cor-expectation-linearity-monotonicity-and-modulus-bound", "def-moments-variance-and-covariance", "def-random-element-and-real-random-variable", "def-law-or-distribution-of-a-random-element", "thm-holder-inequality-for-integrals", "thm-change-of-variables-for-expectation", "thm-dominated-convergence", "thm-chain-rule-for-total-derivatives", "thm-ftc-second-part", "def-axiom-of-choice"]
justified_by: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is inherited from the standard-normal and minimum-velocity suppliers; it also supplies Countable Choice for the finite-product Lebesgue identity; the coupling bounds and interpolation calculation add no choice."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 8.3.1, PDF pp. 183–186"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 176–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Example

Assume AC. Let $d\ge1$, $m_0,m_1\in\mathbb R^d$, and $\sigma_0,\sigma_1>0$. Let $\xi$ have density $(2\pi)^{-d/2}e^{-|z|^2/2}$ on $\mathbb R^d$, put $m_t=(1-t)m_0+tm_1$ and $\sigma_t=(1-t)\sigma_0+t\sigma_1$, and set $\mu_t=\operatorname{Law}(m_t+\sigma_t\xi)$ for $0\le t\le1$. Then $\mu_t$ is a constant-speed $W_2$ geodesic, meaning $W_2(\mu_s,\mu_t)=|t-s|W_2(\mu_0,\mu_1)$ for all $s,t\in[0,1]$, from the laws of $m_0+\sigma_0\xi$ to the law of $m_1+\sigma_1\xi$, with
$$W_2(\mu_0,\mu_1)^2=|m_1-m_0|^2+d(\sigma_1-\sigma_0)^2.$$
The Borel field
$$v_t(x)=m_1-m_0+\frac{\sigma_1-\sigma_0}{\sigma_t}(x-m_t)$$
solves the continuity equation and has action equal to this squared distance, hence is minimum-action. The strict positivity of $\sigma_0$ and $\sigma_1$ ensures $\sigma_t>0$ throughout; degenerate covariances are excluded.

## Example references

[[def-wasserstein-two-space-and-couplings]]

[[thm-wasserstein-two-is-a-metric]]

[[def-geodesic-and-geodesic-metric-space]]

[[def-continuity-equation-with-finite-action]]

[[thm-ac2-curve-admits-minimal-velocity]]

[[def-standard-normal-and-normal-laws]]

[[lem-normal-location-scale-mean-and-variance]]

[[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[[def-moments-variance-and-covariance]]

[[def-random-element-and-real-random-variable]]

[[def-law-or-distribution-of-a-random-element]]

[[thm-holder-inequality-for-integrals]]

[[thm-change-of-variables-for-expectation]]

[[thm-dominated-convergence]]

[[thm-chain-rule-for-total-derivatives]]

[[thm-ftc-second-part]]

[[def-axiom-of-choice]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC, $d,m_0,m_1,\sigma_0,\sigma_1$ as stated, and the standard Gaussian law on $\mathbb R^d$.

[A1] AC implies Countable Choice. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F1] The displayed density factors into standard normal coordinate densities; [A1] and Tonelli give each coordinate law $N(0,1)$. [[def-standard-normal-and-normal-laws]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F2] Each coordinate has mean zero and variance one by the normal moment theorem; finite sums give $E\xi=0$ and $E|\xi|^2=d$. Under any coupling of the scaled laws, the centered marginals therefore have second moments $d\sigma^2$ and $d\tau^2$. [[lem-normal-location-scale-mean-and-variance]] [[def-moments-variance-and-covariance]] [[cor-expectation-linearity-monotonicity-and-modulus-bound]] [[thm-change-of-variables-for-expectation]]

[F3] Holder bounds the centered cross moment by $\bigl(E|U|^2E|V|^2\bigr)^{1/2}$. [[thm-holder-inequality-for-integrals]]

[F4] The minimum-velocity theorem identifies the least action of an $AC^2$ curve with the integral of its squared metric speed. [[thm-ac2-curve-admits-minimal-velocity]]

[F5] Dominated convergence passes bounded continuous test functions through the Gaussian law as its affine parameters vary continuously. [[thm-dominated-convergence]]

[F6] The total-derivative chain rule differentiates a smooth test along the affine path, and the FTC integrates that derivative. [[thm-chain-rule-for-total-derivatives]] [[thm-ftc-second-part]]

## Proof
1.1 Write $\mu_{m,\sigma}=\operatorname{Law}(m+\sigma\xi)$. Let $X,Y$ be any coupling of $\mu_{m,\sigma}$ and $\mu_{n,\tau}$, and set $U=X-m$, $V=Y-n$. Since $EU=EV=0$, expansion gives $E|X-Y|^2=|m-n|^2+E|U|^2+E|V|^2-2E(U\cdot V).$ By [F1] and [F2], this is at least $|m-n|^2+d(\sigma^2+\tau^2-2\sigma\tau)=|m-n|^2+d(\sigma-\tau)^2$. Conversely, couple the two laws by $X=m+\sigma\xi$, $Y=n+\tau\xi$ using the same standard Gaussian vector. The moments in [F1] give $E|X-Y|^2=|m-n|^2+d(\sigma-\tau)^2$. Taking the infimum proves $W_2(\mu_{m,\sigma},\mu_{n,\tau})^2=|m-n|^2+d(\sigma-\tau)^2.$ [A1, F1, F2, F3, algebra]

2.1 Apply step 1.1 to $(m_s,\sigma_s)$ and $(m_t,\sigma_t)$. Their differences are $(t-s)(m_1-m_0)$ and $(t-s)(\sigma_1-\sigma_0)$, so $W_2(\mu_s,\mu_t)=|t-s|\sqrt{|m_1-m_0|^2+d(\sigma_1-\sigma_0)^2}.$ This proves the constant-speed geodesic claim and identifies its speed. [step 1.1, algebra]

3.1 For each $z$, define $\gamma_z(t)=m_t+\sigma_tz$. Direct differentiation gives $\dot\gamma_z=m_1-m_0+(\sigma_1-\sigma_0)z=v_t(\gamma_z(t))$. For any bounded continuous test f, dominated convergence [F4] gives $\int f d\mu_t=E[f(m_t+\sigma_t\xi)]$ continuously in t, so the curve is narrowly continuous. For a compactly supported smooth test $\varphi$, the chain rule [F6] gives $\frac d{dt}\varphi(t,\gamma_\xi(t))=\partial_t\varphi(t,\gamma_\xi(t))+\nabla\varphi(t,\gamma_\xi(t))\cdot v_t(\gamma_\xi(t))$. Integrate over $t$ and the Gaussian law. The FTC [F6] and the test vanishing near both time endpoints make the time integral zero; its derivative is integrable since $v_t(\gamma_\xi(t))$ is affine in $\xi$ with finite first moment by [F2, F3]. The resulting identity is the weak continuity equation for $\mu_t$. Also $\int|v_t(x)|^2d\mu_t(x)=E|m_1-m_0+(\sigma_1-\sigma_0)\xi|^2=|m_1-m_0|^2+d(\sigma_1-\sigma_0)^2,$ using the zero coordinate means and unit variances in [F2]. Its time integral is the squared-distance value from step 1.1, so [F4] makes this velocity minimum-action. [A1, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
