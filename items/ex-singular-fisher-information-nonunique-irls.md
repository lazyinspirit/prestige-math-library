---
id: ex-singular-fisher-information-nonunique-irls
kind: example
title: Rank deficiency gives singular information and nonunique weighted least squares
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-generalized-linear-model
  - thm-glm-general-link-score-and-information
  - alg-fisher-scoring-irls
  - def-bernoulli-and-binomial-random-variables
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Use the Bernoulli-logit model with $\beta=(0,0)^\mathsf T$, design rows $x_1^\mathsf T=(1,1)$ and $x_2^\mathsf T=(2,2)$, and responses $(y_1,y_2)=(0,1)$. The weights are positive, but the design columns are dependent.

## Facts & Assumptions

**Given:** The two-row design and responses in the Example, the Bernoulli-logit family, current $\beta=0$, and $a(\phi)=1$.

[F1] [[thm-glm-general-link-score-and-information]]: $I=X^\mathsf T\operatorname{diag}(w_i)X$ and $U=X^\mathsf T(\dot\mu_i(y_i-\mu_i)/(aV_i))_i$.

[F2] [[alg-fisher-scoring-irls]]: IRLS minimizes the weighted least-squares objective and applies the Moore-Penrose minimum-norm convention if minimizers are not unique.

[F3] Each Bernoulli-logit response has the counting-measure mass $f(y;\eta)=\exp\{y\eta-\log(1+e^\eta)\}$ on $\{0,1\}$. It is normalized, has fixed support and finite moments, and its first two $\eta$ derivatives are locally bounded on this finite support. ([[def-bernoulli-and-binomial-random-variables]], [[thm-derivative-of-exponential]], [[thm-logarithm-derivative-and-integral]])

## Verification

1.1 At $\beta=0$, both predictors are $0$, both means are $1/2$, and both logit derivatives are $1/4$. Thus $w_1=w_2=1/4$ by [F1]. Direct multiplication gives $I=X^\mathsf T W X=\frac54\begin{pmatrix}1&1\\1&1\end{pmatrix}$, which has rank one; the score is $U=(1/2,1/2)^\mathsf T$. [F1, F3, given, algebra]

2.1 The working responses are $z_1=-2$ and $z_2=2$. For $\gamma=(\gamma_1,\gamma_2)^\mathsf T$, put $s=\gamma_1+\gamma_2$; the weighted objective is $J(s)=\frac14\{(-2-s)^2+(2-2s)^2\}$. Differentiation gives $J'(s)=(5s-2)/2$, so every $\gamma$ with $s=2/5$ is a minimizer. These minimizers form a line, while $\|\gamma\|_2^2=s^2/2+(\gamma_1-\gamma_2)^2/2$ shows the Moore-Penrose convention selects $(1/5,1/5)$. The information inverse is undefined because $I$ is singular. [F1, F2, step 1.1, algebra] ∎
