---
id: def-multilinear-extension
kind: definition
title: "Multilinear extension of a Boolean-cube table"
status: published
origin: pipeline
deps: [def-field, def-multivariate-polynomial-ring-by-iteration]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a73.5, Definition 3.4 and Fact 3.5, pp.28\u201329"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Definition

Let $F$ be a field, let $n\geq0$, and let $f:\{0,1\}^n\to F$ be a table. An **extension** of $f$ is a formal polynomial $p\in F[X_1,\ldots,X_n]$ satisfying $p(b)=f(b)$ for every Boolean vector $b$. It is **multilinear** if every monomial has exponent at most one in each variable; the zero polynomial is included. Fields and formal polynomial rings are as in [[def-field]] and [[def-multivariate-polynomial-ring-by-iteration]].

For $n=0$, the cube contains the empty tuple, and a polynomial in no variables is a field constant. This definition specifies an extension relation; existence and uniqueness are separate assertions.
