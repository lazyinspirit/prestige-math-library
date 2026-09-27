---
id: def-jacobson-radical-of-a-finite-dimensional-algebra
kind: definition
title: "The Jacobson radical of a finite-dimensional algebra is the intersection of its maximal left ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $A$ be a finite-dimensional algebra over a field. Its **Jacobson radical**
is

$$ J(A):=\bigcap\{L<A:L\text{ is a maximal left ideal of }A\}. $$

When $A\ne0$, maximal proper left ideals exist without a choice principle:
the proper left ideal $0$ exists, and among dimensions of proper left ideals
choose the largest integer. An ideal of that dimension is maximal because
strict containment strictly increases vector-space dimension. On
finite-dimensional algebras $J(A)$ is two-sided: for each simple left
$A$-module $S$ and each $0\ne s\in S$, the kernel of the surjection
$A\to S$, $a\mapsto as$, is a maximal left ideal. Hence an element in
every maximal left ideal annihilates every simple left module. Conversely,
an element annihilating every simple left module lies in each maximal left
ideal by applying it to $A/L$ and $1+L$. Thus $J(A)$ is the intersection of
the two-sided annihilators of all simple left modules, so $A/J(A)$ is an
algebra. This radical agrees with the usual right-sided definition.
