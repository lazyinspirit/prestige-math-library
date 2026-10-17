---
id: lem-rounded-triangular-substitution-componentwise-backward-error
kind: lemma
title: Rounded triangular substitution has a componentwise matrix backward error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
- thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
- lem-product-of-one-plus-deltas-gives-theta-n
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: Stuart and Voss, Matrix Analysis and Algorithms
    url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
dependency_level: 1
---

## Statement

Let $R\in\mathbb R^{n\times n}$ be upper triangular with stored floating-point entries and nonzero diagonal, and let $y\in\mathbb R^n$ have stored floating-point entries, where $n\ge1$ and $(n+3)u<1$. Use the operationwise arithmetic model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] at unit roundoff $u$. Compute descending substitution by the sequential rounded dot $s_i=\operatorname{fl}(\sum_{j>i}R_{ij}\widehat x_j)$ (empty sum zero), $t_i=\operatorname{fl}(y_i-s_i)$, and $\widehat x_i=\operatorname{fl}(t_i/R_{ii})$. Assume each exact intermediate is zero or normal and each rounded result is finite, so every operation succeeds under that model. Then there is upper triangular $\Delta R$ with
$$(R+\Delta R)\widehat x=y,\qquad |\Delta R|\le\gamma_{n+3}|R|,\qquad \|\Delta R\|_F\le\gamma_{n+3}\|R\|_F.$$
In particular $\widehat x=0$ forces $y=0$. Forward substitution has the transposed conclusion.

## Facts & Assumptions

**Given:** The stated successful rounded recurrence, with no nonzero subnormal intermediate.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] gives each relative error at most $u$ and exact zeros.

[F2] [[lem-product-of-one-plus-deltas-gives-theta-n]] bounds each dot-product coefficient error by its accumulated $\gamma$ factor.

[F3] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]] supplies the descending and ascending exact triangular recurrences.

## Proof

1.1 Expand the rounded dot to obtain $s_i=\sum_{j>i}R_{ij}\widehat x_j(1+\theta_{ij})$, with $|\theta_{ij}|\le\gamma_{n-i}$, and use $s_n=0$. Write subtraction and division errors as $\alpha_i,\beta_i\in[-u,u]$. The computed row identity is then $R_{ii}\widehat x_i/((1+\alpha_i)(1+\beta_i))+\sum_{j>i}R_{ij}\widehat x_j(1+\theta_{ij})=y_i$. These identities also hold for zero intermediates by taking the corresponding error zero. [given, F1, F2, F3, algebra]

2.1 Choose $\Delta R_{ii}=R_{ii}(((1+\alpha_i)(1+\beta_i))^{-1}-1)$ and $\Delta R_{ij}=R_{ij}\theta_{ij}$ for $j>i$, with zeros below the diagonal. Since $u<1/(n+3)\le1/4$, all denominators are positive and $|((1+\alpha_i)(1+\beta_i))^{-1}-1|\le(1-u)^{-2}-1\le3u/(1-3u)=\gamma_3$; multiplying positive denominators verifies the last inequality. Thus every entry has the claimed bound. [F1, step 1.1, algebra, construct]

3.1 Step 1.1 gives $(R+\Delta R)\widehat x=y$, and summing the squared entry bounds gives the Frobenius estimate. If $\widehat x=0$, the same equation gives $y=0$, including dimension one without a division by $\|\widehat x\|$. Reversing the row order proves the lower-triangular version. [step 1.1, step 2.1, algebra] ∎

