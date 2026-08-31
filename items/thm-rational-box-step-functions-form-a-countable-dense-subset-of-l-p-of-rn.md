---
id: thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
kind: theorem
title: "Rational box-step functions form a countable dense subset of $L^p(\\mathbb{R}^n)$ for $1 \\le p < \\infty$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-box-step-functions-are-dense-in-l-p-of-rn, thm-rational-points-and-boxes-in-rn, thm-lebesgue-measure-of-a-box-of-every-kind, def-separable-space, def-countable, thm-countable-union-of-countable, thm-product-of-countable, lem-subset-of-countable]
landmark: true
proof_strategy: "Restrict the box-step density theorem to boxes with rational vertices and rational complex coefficients. The rational-box basis theorem and countable-union bookkeeping make this family countable, giving separability in the sense of the published topological definition."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$. The finite linear combinations of indicator functions of
half-open boxes with rational endpoints and rational coefficients form a
countable dense subset of $L^p(\mathbb{R}^n)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 \le p < \infty$ and $\varepsilon > 0$.

[L1] Box-step functions are dense in $L^p(\mathbb{R}^n)$ ([[thm-box-step-functions-are-dense-in-l-p-of-rn]]).

[L2] Rational boxes form a countable basis of $\mathbb{R}^n$ ([[thm-rational-points-and-boxes-in-rn]]).

[L3] Every Euclidean box is Lebesgue measurable with its usual volume ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L4] Countable sets are closed under finite products and countable unions, and subsets of countable sets are countable ([[def-countable]], [[thm-countable-union-of-countable]], [[thm-product-of-countable]], [[lem-subset-of-countable]]).

[L5] A space is separable exactly when it has a countable dense subset ([[def-separable-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal{R}$ be the family of half-open boxes [L2, L4, given, algebra] $\prod_{i=1}^n (a_i,b_i]$ with rational endpoints. By [L2] there are countably many such boxes, and by [L4] the set $\mathcal S$ of all finite rational linear combinations of indicators $\mathbf{1}_R$ with $R \in \mathcal R$ is countable. [L2, L4, given, algebra]

2.1 By [L1], it is enough to approximate a single box indicator. So fix a [L1, L3, step 1.1, choose, algebra] $\delta>0$ and let $B = \prod_{i=1}^n (\alpha_i,\beta_i]$. Choose rationals $a_i < \alpha_i < \beta_i < b_i$ so close to the endpoints that, with $M:=1+\max_i\{|a_i|,|b_i|,|\alpha_i|,|\beta_i|\}$, $$ 2n(2M)^{n-1}\max_i\{(\alpha_i-a_i),(b_i-\beta_i)\}<\delta. $$ Then $B\triangle R$ is contained in the union of the $2n$ coordinate slabs where one coordinate lies in $(a_i,\alpha_i]$ or $(\beta_i,b_i]$ while the others stay in $[-M,M]$. By [L3], each slab has measure at most $(2M)^{n-1}\max_i\{(\alpha_i-a_i),(b_i-\beta_i)\}$, so $\lambda_n(B \triangle R) < \delta$ for the rational box $R := \prod_i (a_i,b_i]$. Hence $$ \|\mathbf{1}_B-\mathbf{1}_R\|_p = \lambda_n(B \triangle R)^{1/p} < \delta^{1/p}, $$ which can be made arbitrarily small; approximating finitely many coefficients by rationals then makes every box-step function arbitrarily close to an element of $\mathcal S$. [L1, L3, step 1.1, choose, algebra]

3.1 Therefore $\mathcal S$ is countable and dense. By [L5], [L5, step 1.1, step 2.1] $L^p(\mathbb{R}^n)$ is separable, with $\mathcal S$ as an explicit dense subset. [L5, step 1.1, step 2.1] ∎
