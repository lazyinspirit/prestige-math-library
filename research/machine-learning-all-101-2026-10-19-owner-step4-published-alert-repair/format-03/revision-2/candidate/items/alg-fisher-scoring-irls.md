---
id: alg-fisher-scoring-irls
kind: algorithm
title: One minimum-norm IRLS step
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-generalized-linear-model
  - thm-glm-general-link-score-and-information
  - thm-of-square-roots
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
justified_by:
  - lem-fisher-scoring-irls-is-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 43–52"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF p. 5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Definition

Inputs are an observed response vector $y$ with $f_i(y_i;\theta_i,\phi)>0$ for every $i$, a finite design matrix $X$, an admissible finite current parameter $\beta$, and a GLM with common scale $a(\phi)>0$. Require each $\dot\mu_i=d\mu_i/d\eta_i$ to be finite and nonzero and each $V_i=b''(\theta_i)$ to be finite and positive.

1. Compute $\eta_i=x_i^\mathsf T\beta$ and $\mu_i=g^{-1}(\eta_i)$.
2. Compute the **working response** and positive weight
$$z_i=\eta_i+\frac{y_i-\mu_i}{\dot\mu_i},\qquad w_i=\frac{\dot\mu_i^2}{a(\phi)V_i}.$$
3. Form $W^{1/2}=\operatorname{diag}(\sqrt{w_i})$ using Square roots exist: a unique $\sqrt{a} \ge 0$ with $(\sqrt{a})^2 = a$; the positives are $\{x^2 : x \neq 0\}$, and put $A=W^{1/2}X$, $r=W^{1/2}z$. By The Moore--Penrose pseudoinverse $A^+$ as the solution of the four Penrose equations and Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse, form $A^+$. Return $\beta_{\mathrm{new}}=A^+r$, the unique minimum-Euclidean-norm member of the nonempty weighted least-squares minimizer set by For every right-hand side $b$, $A^+b$ is the unique least-squares solution of minimum Euclidean norm.

The Moore--Penrose convention makes the procedure single-valued even when $X$ is rank deficient; the underlying least-squares minimizer need not then be unique. Existence and the minimum-norm property follow from Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse and For every right-hand side $b$, $A^+b$ is the unique least-squares solution of minimum Euclidean norm. The output need not lie in $\Theta$, and this definition makes no claim that repeated updates terminate or converge to a maximizer.

## Definition references

[[thm-of-square-roots]]

[[def-moore-penrose-pseudoinverse]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]

[[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]

