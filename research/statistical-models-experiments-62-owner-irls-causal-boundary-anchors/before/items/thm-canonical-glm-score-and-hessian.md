---
id: thm-canonical-glm-score-and-hessian
kind: theorem
title: Canonical-link score and Hessian
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-generalized-linear-model
  - lem-glm-product-density
  - lem-glm-mean-and-variance-identities
  - thm-chain-rule
  - prop-matrix-differentials-obey-sum-product-and-adjoint-rules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 23–33, 40–42"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 4–5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Statement

Let $(Y_i)_{i=1}^n$ follow [[def-generalized-linear-model]] with a common scale $a(\phi)>0$, canonical link $\theta_i=\eta_i=x_i^\mathsf T\beta$, and twice differentiable $b$. Then, for $y$ in the common support,

$$\nabla_\beta\ell(\beta;y,\phi)=\frac{X^\mathsf T(y-\mu)}{a(\phi)},\qquad \nabla_\beta^2\ell(\beta;y,\phi)=-\frac{X^\mathsf T\operatorname{diag}(b''(\eta_i))X}{a(\phi)}.$$

## Facts & Assumptions

**Given:** A finite fixed design $X$, an admissible $\beta$, the common-scale canonical-link GLM, and an observed response vector in its common support.

[F1] [[def-generalized-linear-model]]: $\eta_i=x_i^\mathsf T\beta$, the canonical link is $\theta_i=\eta_i$, and the common-scale log likelihood is the finite sum of component log densities.

[F2] [[lem-glm-product-density]]: the joint density is the product of component densities, so its log likelihood on the common support is their sum.

[F3] [[def-generalized-linear-model]]: for the canonical link, $\theta_i=\eta_i=\tau(\mu_i)$ and $b'(\tau(\mu_i))=\mu_i$.

[F4] [[thm-chain-rule]]: for differentiable scalar functions, $(f\circ g)'(c)=f'(g(c))g'(c)$ under the stated limit-point hypotheses.

[F5] [[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]: in the real Frechet sense, $d(AB)=dA\,B+A\,dB$ and $d(A+B)=dA+dB$.

## Proof

1.1 By [F1] and [F2], $\ell(\beta;y,\phi)=\sum_i\{y_i x_i^\mathsf T\beta-b(x_i^\mathsf T\beta)\}/a(\phi)+C(y,\phi)$, where $C$ is independent of $\beta$. For each coordinate $j$, the chain rule [F4] gives $\partial_{\beta_j}\ell=\sum_i x_{ij}\{y_i-b'(\eta_i)\}/a(\phi)$. By [F3], $b'(\eta_i)=b'(\tau(\mu_i))=\mu_i$, so these entries assemble as $X^\mathsf T(y-\mu)/a(\phi)$. [F1, F2, F3, F4, algebra]

2.1 Differentiating the coordinate expression in step 1.1 with respect to $\beta_k$ gives $\partial_{\beta_k}\partial_{\beta_j}\ell=-\sum_i x_{ij}x_{ik}b''(\eta_i)/a(\phi)$ by [F4]. The sum and matrix-product rules [F5] identify these entries with $-X^\mathsf T\operatorname{diag}(b''(\eta_i))X/a(\phi)$. [F4, F5, step 1.1, algebra] ∎