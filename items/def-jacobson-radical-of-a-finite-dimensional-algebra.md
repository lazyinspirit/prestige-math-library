---
id: def-jacobson-radical-of-a-finite-dimensional-algebra
kind: definition
title: "The Jacobson radical of a finite-dimensional algebra is the intersection of its maximal left ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]
verification:
  audited: 2026-09-04
  precheck: n/a
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

Because the left regular module ${}_A A$ is finitely generated, maximal proper
left ideals exist by [[thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]]
whenever $A\ne0$. On finite-dimensional algebras this radical agrees with the
usual right-sided definition, so the notation $J(A)$ is unambiguous here.
