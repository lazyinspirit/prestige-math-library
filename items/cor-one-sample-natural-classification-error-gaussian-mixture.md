---
id: cor-one-sample-natural-classification-error-gaussian-mixture
kind: corollary
title: One-sample natural error in the Gaussian model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-two-class-spherical-gaussian-mixture-model
  - def-multivariate-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - lem-gaussian-sample-mean-signal-alignment
  - lem-gaussian-vector-norm-concentration
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
justified_by: []
axiom_use: "AC is inherited from the Gaussian model, projection law, scalar uniqueness, alignment and concentration suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Corollary 19 and Appendix A.1, PDF pp. 24–25"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Statement

Assume AC. Let $d\ge1$ be an integer, let $\theta\in\mathbb R^d$ satisfy $\|\theta\|_2=\sqrt d$, let $0<\beta<1$, and let $\sigma>0$ satisfy $\sigma\le d^{1/4}/(5\sqrt{\log(1/\beta)})$. Draw one training pair $(X_0,Y_0)$ from the two-class spherical Gaussian model with parameters $\theta,\sigma$. Set $W=Y_0X_0$ and define the unit vector $\widehat W=W/\|W\|_2$ for $W\ne0$ and $\widehat W=e_1$ for $W=0$. Define $h_u(x)=+1$ when $\langle u,x\rangle\ge0$ and $h_u(x)=-1$ otherwise, and define its natural error by $\operatorname{err}_{\theta,\sigma}(u)=\mathbb P_{(X,Y)\sim P_{\theta,\sigma}}(h_u(X)\ne Y)$. Then
$$\mathbb P_{(X_0,Y_0)\sim P_{\theta,\sigma}}\!\left(\operatorname{err}_{\theta,\sigma}(\widehat W)\le\beta\right)\ge1-2\exp\!\left(-\frac{d}{8(\sigma^2+1)}\right).$$

## Statement references

[Schmidt et al., Corollary 19 and Appendix A.1, PDF pp. 24–25](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] Assume the Axiom of Choice, used by the Gaussian-law and concentration suppliers. [[def-axiom-of-choice]].

[F1] For a one-sample Gaussian model pair, the class-weighted direction satisfies $\langle\widehat W,\theta\rangle\ge\sqrt d/(2+4\sigma)$ except with probability at most $2e^{-d/(8(\sigma^2+1))}$. [[lem-gaussian-sample-mean-signal-alignment]].

[F2] For every unit $u$, $\langle u,X\rangle$ conditional on $Y=y$ is $N(y\langle u,\theta\rangle,\sigma^2)$; scalar normal laws have their stated characteristic functions, affine transformations preserve the characteristic-function formula, and equal characteristic functions determine equal scalar laws under AC. [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-normal-law]], [[lem-characteristic-functions-under-affine-maps-and-independent-sums]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F3] If $G\sim N(0,\sigma^2)$ and $s\ge0$, then $\mathbb P(G\le-s)\le e^{-s^2/(2\sigma^2)}$; the centered normal law is symmetric about zero. [[lem-gaussian-vector-norm-concentration]], [[lem-characteristic-function-of-a-normal-law]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F4] The natural logarithm is increasing, has $\log(ab)=\log a+\log b$, and $\log2=\int_1^2dx/x>1/2$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]].

## Proof

1.1 Apply [F1] with $n=1$. With probability at least $1-2e^{-d/(8(\sigma^2+1))}$ over the training pair, the learned unit vector satisfies $\langle\widehat W,\theta\rangle\ge a:=\sqrt d/(2+4\sigma)>0$. [given, A1, F1]

1.2 Fix any unit vector $u$ with $c:=\langle u,\theta\rangle\ge a$. Conditional on $Y=y$, the characteristic function of $Y\langle u,X\rangle$ at $t$ is $\exp(itc-\sigma^2t^2/2)$ by [F2], independently of $y$. Thus the signed test margin has law $N(c,\sigma^2)$. The tie convention implies $\{h_u(X)\ne Y\}\subseteq\{Y\langle u,X\rangle\le0\}$, so [F3] gives $\operatorname{err}_{\theta,\sigma}(u)\le\exp(-c^2/(2\sigma^2))\le\exp(-a^2/(2\sigma^2))$. [given, F2, F3, algebra]

2.1 If $\beta\ge1/2$, then $c>0$ and symmetry of the centered normal in [F3] gives $\operatorname{err}_{\theta,\sigma}(u)\le\mathbb P(G\le0)=1/2\le\beta$. [step 1.2, F3, algebra]

2.2 Suppose $\beta<1/2$ and put $L=\log(1/\beta)$. By [F4], $L>\log2>1/2$. Since $d^{1/4}\ge1$, the hypothesis gives $2+4\sigma\le(2+4\sqrt2/5)d^{1/4}$ and $\sigma^2L\le\sqrt d/25$. Therefore $2(2+4\sigma)^2\sigma^2L\le\frac{2}{25}(2+4\sqrt2/5)^2d<d$, where the final strict inequality follows from $2+4\sqrt2/5<5/\sqrt2$. Hence $a^2/(2\sigma^2)>L$, and step 1.2 gives $\operatorname{err}_{\theta,\sigma}(u)\le e^{-L}=\beta$. [given, F4, step 1.2, algebra]

3.1 On the alignment event in step 1.1, the unit vector $u=\widehat W$ meets the hypothesis of step 1.2. Steps 2.1 and 2.2 cover the two exhaustive cases for $\beta$, so its natural error is at most $\beta$ throughout that event. The event probability from step 1.1 is the asserted lower bound. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## References

[[lem-gaussian-sample-mean-signal-alignment]]: supplies the one-sample direction bound.

[[lem-gaussian-vector-norm-concentration]]: supplies the one-sided Gaussian projection tail used for test error.
