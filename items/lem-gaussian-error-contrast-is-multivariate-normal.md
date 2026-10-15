---
id: lem-gaussian-error-contrast-is-multivariate-normal
kind: lemma
title: "A Gaussian error contrast has the induced multivariate-normal law"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-mixed-model
  - def-gaussian-linear-mixed-model
  - def-error-contrast-matrix
  - def-multivariate-normal-law
  - def-moments-variance-and-covariance
  - lem-marginal-covariance-of-linear-mixed-model
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-covariance-bilinearity-and-symmetry
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-continuous-preimages-of-borel-sets-are-borel
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 4: Maximum Likelihood Estimation and Inference for the Hierarchical Normal Model, PDF pp. 4–5"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec4-MLE-HNM.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.2"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

Assume AC and the Gaussian branch of the finite-dimensional mixed model. Let $X\in\mathbb R^{n\times p}$ have full column rank with $p<n$, let $K\in\mathbb R^{n\times(n-p)}$ be an error-contrast matrix, and let $V=ZGZ^T+R=\operatorname{Cov}(Y)$. Then
$$K^TY\sim N_{n-p}(0,K^TVK).$$
The contrast law does not depend on $\beta$. The matrix $K^TVK$ may be singular; positive definiteness is a separate hypothesis when a density is needed.

## Facts & Assumptions

**Given:** The centered Gaussian mixed model, AC, a full-rank fixed design, and an error-contrast matrix $K$.

[F1] $Y=X\beta+Zb+\varepsilon$ with centered $b,\varepsilon$, covariance matrices $G,R$, and $b$ independent of $\varepsilon$. [[def-linear-mixed-model]].

[F2] Under AC, the concatenated vector $(b,\varepsilon)$ has a multivariate-normal law. [[def-gaussian-linear-mixed-model]].

[F3] The response covariance is $V=ZGZ^T+R$. [[lem-marginal-covariance-of-linear-mixed-model]].

[F4] An error-contrast matrix has shape $n\times(n-p)$ and satisfies $X^TK=0$. [[def-error-contrast-matrix]].

[F5] Every scalar linear projection of a multivariate-normal vector has the specified univariate normal law, including variance zero. [[def-multivariate-normal-law]].

[F6] Expectation is linear on finite sums of integrable random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F7] Covariance is a centered second moment and is bilinear in finite linear combinations. [[def-moments-variance-and-covariance]], [[thm-covariance-bilinearity-and-symmetry]].

[F8] A fixed finite-dimensional linear map is continuous and Borel measurable, so its composition with a Borel random vector is a Borel random vector. [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[thm-continuous-preimages-of-borel-sets-are-borel]].

[F9] A univariate normal law has characteristic function $\exp(itm-t^2\sigma^2/2)$. [[lem-characteristic-function-of-a-normal-law]].

[F10] The characteristic function of $N_d(m,\Sigma)$ is $\exp(it^Tm-t^T\Sigma t/2)$. [[lem-characteristic-function-of-a-multivariate-normal-law]].

[F11] The characteristic function of a multivariate-normal law uniquely determines its Borel probability law, including singular covariance. [[lem-characteristic-function-of-a-multivariate-normal-law]].

[A1] AC holds. [[def-axiom-of-choice]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], $Y-X\beta=Zb+\varepsilon$ is centered. Linearity [F6] gives $\mathbb E Y=X\beta$, and [F3] gives $\operatorname{Cov}(Y)=V$. [F1, F3, F6]

2.1 Fix $u\in\mathbb R^{n-p}$. Since $X^TK=0$ by [F4], $u^TK^TY=u^TK^T(Zb+\varepsilon)$, a scalar linear projection of the jointly Gaussian vector in [F2]; it is normal by [F5]. Its mean is zero by [F1] and [F6], and its variance is $u^TK^TVKu$ by step 1.1 and covariance bilinearity [F7]. [A1, F1, F2, F4, F5, F6, F7, step 1.1]

3.1 By [F8], $Q=K^TY$ is a Borel random vector. For each $u$, [F9] and step 2.1 give $\mathbb E e^{iu^TQ}=\exp(-u^TK^TVKu/2)$. This is the characteristic function of $N_{n-p}(0,K^TVK)$ by [F10]; uniqueness [F11] gives the stated law. Its mean and covariance do not depend on $\beta$, so neither does its law. [F8, F9, F10, F11, step 2.1] ∎
