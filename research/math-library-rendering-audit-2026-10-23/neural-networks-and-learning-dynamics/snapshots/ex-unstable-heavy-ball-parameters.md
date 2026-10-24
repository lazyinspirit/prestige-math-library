---
id: ex-unstable-heavy-ball-parameters
kind: example
title: "An untuned heavy-ball recurrence diverges on a scalar quadratic"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-heavy-ball-momentum
  - prop-gradient-of-a-quadratic-matrix-form
  - thm-reals-cauchy-complete
  - thm-of-archimedean
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $F:\mathbb R\to\mathbb R$ be $F(x)=\tfrac12x^2$. Run heavy-ball momentum with $\alpha=\tfrac{27}{8}$, $\beta=\tfrac14$, and $w_0=w_1=1$. For every integer $t\ge0$, the resulting iterates are

$$w_t=-\frac35(-2)^t+\frac85\left(-\frac18\right)^t,$$

so the iterate sequence is unbounded and does not converge to a real limit.

## Example references

[[alg-heavy-ball-momentum]]

[[prop-gradient-of-a-quadratic-matrix-form]]

[[thm-reals-cauchy-complete|Completeness of the real numbers]]

[[thm-of-archimedean]]

## Facts & Assumptions

**Given:** $F(x)=\tfrac12x^2$, heavy-ball parameters $\alpha=\tfrac{27}{8}$ and $\beta=\tfrac14$, and initial values $w_0=w_1=1$.

[F1] [[alg-heavy-ball-momentum]]: for fixed parameters, $w_{t+1}=w_t-\alpha\nabla F(w_t)+\beta(w_t-w_{t-1})$.

[F2] [[prop-gradient-of-a-quadratic-matrix-form]]: for $q(x)=\tfrac12\|Cx\|_2^2$, the gradient is $C^\ast Cx$.

[F3] [[thm-reals-cauchy-complete]]: with its usual order and field structure, $\mathbb R$ is a complete ordered field.

[F4] [[thm-of-archimedean]]: in every complete ordered field, for every element $M$ there is a canonical natural number $n\ge1$ whose field embedding satisfies $M<n$.

## Verification

1.1 Taking $C=[1]$ in [F2] gives $\nabla F(x)=x$. Substituting the parameters and this gradient into [F1] yields $w_{t+1}=-\tfrac{17}{8}w_t-\tfrac14w_{t-1}$ for every $t\ge1$. [given, F1, F2, algebra]

2.1 The characteristic polynomial is $r^2+\tfrac{17}{8}r+\tfrac14=(r+2)(r+\tfrac18)$. Each geometric sequence $(-2)^t$ and $(-\tfrac18)^t$ therefore satisfies the recurrence in step 1.1. The stated linear combination has $w_0=1$ and $w_1=\tfrac65-\tfrac15=1$, so the recurrence and these initial values prove the displayed formula for all $t$ by induction. [given, step 1.1, algebra, induction]

3.1 For $t\ge1$, factor the expression as $w_t=(-2)^t\bigl(-\tfrac35+\tfrac85\,16^{-t}\bigr)$. Since $16^{-t}\le1/16$, the term in parentheses is at most $-\tfrac12$, hence $|w_t|\ge2^{t-1}$. Induction gives $2^{t-1}\ge t$ for $t\ge1$. For any starting index $N\ge1$ and any real $R>0$, put $B=\max\{N,R\}$; since $\mathbb R$ is a complete ordered field by [F3], [F4] supplies a natural number $t>B$, which we use under the usual embedding as an integer iteration index. Thus $t\ge N$ and $|w_t|\ge t>R$. Every tail is therefore unbounded. If the sequence converged to a real $\ell$, some tail would satisfy $|w_t-\ell|<1$ and hence $|w_t|<|\ell|+1$, a contradiction. [given, F3, F4, step 2.1, algebra, induction] ∎
