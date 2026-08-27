---
id: cor-generalized-pell-solubility-is-decidable
kind: corollary
title: "Generalized Pell solubility is decidable by bounded search"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-generalized-pell-solutions-have-finitely-many-orbits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
pipeline_run: null
---

## Statement

For fixed positive nonsquare $D$ and fixed nonzero $N\in\mathbb Z$, the
generalized Pell equation
$$x^2-Dy^2=N$$
is decidable by a finite search over the explicit representative bounds of
[[thm-generalized-pell-solutions-have-finitely-many-orbits]].

## Facts & Assumptions

**Given:** A fixed pair $(D,N)$ with $D$ a positive nonsquare integer and $N\ne0$.

[F1] Every solution of $x^2-Dy^2=N$ is Pell-equivalent to a solution in an explicit bounded rectangle, and there are only finitely many Pell-equivalence classes ([[thm-generalized-pell-solutions-have-finitely-many-orbits]]).

## Proof

**Proof technique:** direct.

1.1 Step through all integer pairs $(x,y)$ in the finite rectangle supplied by [F1], keep the pairs satisfying $x^2-Dy^2=N$, and retain one pair from each Pell-equivalence class among those finitely many solutions. [F1, given]

2.1 By [F1], the search succeeds exactly when the generalized Pell equation has an integral solution, and any retained list of representatives generates every solution by multiplying with powers of the fundamental Pell unit. So the finite search decides solubility. [F1, step 1.1] ∎
