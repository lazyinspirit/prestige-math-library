---
id: lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction
kind: lemma
title: "$\\widetilde f$ is multilinear, agrees with $f$ at every point of $\\{0,1\\}^{n}$, is degree-nonincreasing when nonzero, and is the unique multilinear polynomial with that agreement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multilinear-polynomial-and-multilinear-reduction, lem-grid-reduction-of-a-multivariate-polynomial, thm-polynomial-identity-lemma, def-monomials-multidegree-and-total-degree, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 17"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.3"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

For every polynomial $f\in F[x_1,\dots,x_n]$, its multilinear reduction
$\widetilde f$ is multilinear, agrees with $f$ at every point of the cube
$\{0,1\}^n$, satisfies $\deg\widetilde f\le\deg f$ whenever $\widetilde f\ne0$,
and is the unique multilinear polynomial with that agreement.

## Facts & Assumptions

**Given:** a polynomial $f\in F[x_1,\dots,x_n]$.

[F1] The multilinear reduction replaces each monomial $x^{\mathbf t}$ by the squarefree monomial $x_{\operatorname{supp}(\mathbf t)}$ ([[def-multilinear-polynomial-and-multilinear-reduction]]).

[L2] A polynomial with each variable degree below $2$ that vanishes on the whole cube is the zero polynomial ([[thm-polynomial-identity-lemma]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in\{0,1\}^n$ and every positive integer $k$, $a_i^k=a_i$. Hence each monomial $x^{\mathbf t}$ and its reduction $x_{\operatorname{supp}(\mathbf t)}$ have the same value at $a$, so summing the monomials in [F1] gives $\widetilde f(a)=f(a)$. Every reduced monomial is squarefree and has degree $|\operatorname{supp}(\mathbf t)|\le\sum_it_i$, so $\widetilde f$ is multilinear and has no larger total degree than $f$ whenever the two are nonzero. [F1, algebra]

2.1 If $g$ is another multilinear polynomial agreeing with $f$ on the cube, then $g-\widetilde f$ is multilinear and vanishes on the cube. By [L2], it is the zero polynomial. So $g=\widetilde f$, proving uniqueness. [L2, step 1.1] ∎

## Remarks

- Uniqueness is what later turns a pointwise identity on the cube into a linear independence statement about multilinear monomials.
