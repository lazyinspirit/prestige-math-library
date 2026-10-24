---
id: def-multilinear-polynomial-and-multilinear-reduction
kind: definition
title: "Multilinear polynomials and the reduction $x_i^{2}\\mapsto x_i$ on the cube"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-monomials-multidegree-and-total-degree, lem-grid-reduction-of-a-multivariate-polynomial, def-multivariate-polynomial-ring-by-iteration, def-field]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 17"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Definition

A polynomial $f\in F[x_1,\dots,x_n]$ is **multilinear** when $f=0$, or when

$$\deg_{x_i}f\le1\qquad\text{for every }i.$$

Equivalently, $f$ is a linear combination of the monomials

$$x_T:=\prod_{i\in T}x_i\qquad(T\subseteq[n]).$$

For a multi-index $\mathbf t$, let $\operatorname{supp}(\mathbf t)=\{i:t_i>0\}$.
The **multilinear reduction** of
$f=\sum_{\mathbf t}c_{\mathbf t}x^{\mathbf t}$ is the unambiguously defined
polynomial

$$\widetilde f:=\sum_{\mathbf t}c_{\mathbf t}x_{\operatorname{supp}(\mathbf t)}.$$

Equivalently, each monomial is reduced by replacing every positive power
$x_i^{t_i}$ by $x_i$. Thus $\widetilde f$ is multilinear, including when it is
the zero polynomial. The next lemma proves that it is the unique multilinear
polynomial agreeing with $f$ on the cube, and that if $\widetilde f\ne0$ then
its total degree does not exceed that of $f$.

## Remarks

- The reduction is a cube phenomenon. It is not an algebra homomorphism on all
  of $F[x_1,\dots,x_n]$; it is the canonical representative for restricting a
  polynomial to $\{0,1\}^n$.
