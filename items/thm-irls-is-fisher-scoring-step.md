---
id: thm-irls-is-fisher-scoring-step
kind: theorem
title: IRLS equals the Fisher-scoring step when information is invertible
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - alg-fisher-scoring-irls
  - thm-glm-general-link-score-and-information
  - thm-least-squares-solutions-and-normal-equation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 47–52"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF p. 5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Statement

Under the admissibility hypotheses of [[alg-fisher-scoring-irls]], assume also that each map $\eta_i\mapsto\theta_i$ is differentiable, each map $\eta_i\mapsto\mu_i$ is differentiable with finite nonzero derivative $\dot\mu_i$, and $V_i:=b''(\theta_i)>0$. Each response has finite second moment, its density has the fixed common support and locally uniform integrable envelopes for its first and second $\theta_i$ derivatives required by [[def-glm-observation-family]], and each component score has finite second moment. If $I(\beta)=X^\mathsf T W X$ is invertible, let $U(\beta)$ and $I(\beta)$ be the score and expected score outer-product information from [[thm-glm-general-link-score-and-information]]. Then the weighted least-squares output satisfies

$$\beta_{\mathrm{new}}=\beta+I(\beta)^{-1}U(\beta).$$

## Facts & Assumptions

**Given:** The algorithm's finite admissible current $\beta$, common scale, finite nonzero link derivative, and finite positive variance values; the differentiable natural-parameter map; finite component response second moments; fixed common support and locally integrable first- and second-derivative envelopes; finite component score second moments; and invertible $I(\beta)$.

[F1] [[thm-glm-general-link-score-and-information]]: $U=X^\mathsf T(\dot\mu_i(y_i-\mu_i)/(aV_i))_i$ and $I=X^\mathsf T\operatorname{diag}(\dot\mu_i^2/(aV_i))X$.

[F2] [[alg-fisher-scoring-irls]]: $z_i=\eta_i+(y_i-\mu_i)/\dot\mu_i$, $w_i=\dot\mu_i^2/(aV_i)$, and $\beta_{\mathrm{new}}$ minimizes $\sum_iw_i(z_i-x_i^\mathsf T\gamma)^2$.

[F3] [[thm-least-squares-solutions-and-normal-equation]]: a minimizer of $\lVert T\gamma-b\rVert$ satisfies $T^*(T\gamma-b)=0$; minimizers exist and differ by $\ker T$.

## Proof

1.1 For every $i$, [F2] gives $w_i(z_i-\eta_i)=\{\dot\mu_i^2/(aV_i)\}\{(y_i-\mu_i)/\dot\mu_i\}=\dot\mu_i(y_i-\mu_i)/(aV_i)$. Since $\eta=X\beta$, multiplying by $X^\mathsf T$ and using [F1] yields $X^\mathsf T W(z-X\beta)=U(\beta)$. [F1, F2, algebra]

2.1 Apply [F3] to the weighted least-squares map $T=W^{1/2}X$ and target $W^{1/2}z$. Its normal equation is $X^\mathsf T W(X\beta_{\mathrm{new}}-z)=0$, so $I(\beta)(\beta_{\mathrm{new}}-\beta)=X^\mathsf T W(z-X\beta)=U(\beta)$ by step 1.1. The assumed invertibility of $I(\beta)$ now gives $\beta_{\mathrm{new}}=\beta+I(\beta)^{-1}U(\beta)$. [F1, F2, F3, step 1.1, given, algebra] ∎