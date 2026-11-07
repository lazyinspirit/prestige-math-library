---
id: lem-meurman-divisor-error-endpoint-conversion
kind: lemma
title: "Meurman's averaged divisor error differs from the library error by a subpolynomial term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-dirichlet-divisor-error-term, thm-divisor-function-subpolynomial-bound]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A Simple Proof of Voronoi's Identity"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "printed p. 265, formula (1.1)"
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, formulas (3.1)–(3.2), printed p. 47"
verification:
  precheck: pending
---

## Statement

For every real $\varepsilon>0$, there is a constant $C_\varepsilon>0$ such that for every $x\ge1$,
$$|\Delta_M(x)-\Delta(x)|\le C_\varepsilon x^\varepsilon,$$
where $d(n)$ is the number of positive divisors of each positive integer $n$, $d(x)=0$ when $x$ is not a positive integer, $\gamma$ is the Euler–Mascheroni constant, and $\Delta_M$ is Meurman's endpoint-averaged error
$$\Delta_M(x)=\sum_{1\le n<x}d(n)+\frac12d(x)-x(\log x+2\gamma-1)-\frac14,$$
with $d(x)=0$ off the positive integers, and $\Delta(x)=\sum_{1\le n\le x}d(n)-x(\log x+2\gamma-1)$ is the library divisor error term.

## Statement references

[Meurman, printed p. 265, formula (1.1)](https://numdam.org/item/AST_1992__209__265_0.pdf)

[Ivić, Chapter 3, §1, formula (3.1)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** A real $x\ge1$.

[A1] The definition supplied in the statement is $\Delta_M(x)=\sum_{n<x}d(n)+\tfrac12d(x)-x(\log x+2\gamma-1)-\tfrac14$, with $d(x)=0$ when $x$ is not a positive integer.

[F2] [[def-dirichlet-divisor-error-term]]: $\Delta(x)=\sum_{n\le x}d(n)-x(\log x+2\gamma-1)$.

[F3] [[thm-divisor-function-subpolynomial-bound]]: for every $\varepsilon>0$, $d(n)\le C_\varepsilon n^\varepsilon$ for positive integers $n$.

## Proof

1.1 If $x$ is not an integer, then $d(x)=0$ by [A1], and the sums over $n<x$ and $n\le x$ have the same terms. Hence $\Delta_M(x)-\Delta(x)=-1/4$. If $x$ is an integer, the sum over $n<x$ omits just $d(x)$, so adding $d(x)/2$ gives $\Delta_M(x)-\Delta(x)=-d(x)/2-1/4$. [A1, F2, given, cases]

2.1 In the noninteger case, $|\Delta_M(x)-\Delta(x)|=1/4\le x^\varepsilon/4$ because $x\ge1$. In the integer case, [F3] gives $|\Delta_M(x)-\Delta(x)|\le (C_\varepsilon/2)x^\varepsilon+1/4\le (C_\varepsilon/2+1/4)x^\varepsilon$. Taking the larger constant proves the claim. [F3, step 1.1, given, algebra] ∎
