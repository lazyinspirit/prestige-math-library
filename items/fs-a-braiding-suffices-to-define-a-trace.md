---
id: fs-a-braiding-suffices-to-define-a-trace
kind: false-statement
title: "FALSE: a braiding suffices to define a trace"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-what-is-needed-before-a-trace-can-be-written, cex-not-every-monoidal-category-is-rigid]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Sections 8.9-8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

A braiding on a monoidal category, without rigidity, suffices to define a
categorical trace.

## Facts & Assumptions

**Given:** The symmetric monoidal category $\mathbf{Vect}_k$ of all vector
spaces and its infinite-dimensional object $k[x]$.

[L1] The trace formulas require evaluation and coevaluation maps
([[rem-what-is-needed-before-a-trace-can-be-written]]).

[L2] The symmetric monoidal category of all vector spaces has an
infinite-dimensional object with no categorical dual
([[cex-not-every-monoidal-category-is-rigid]]).

## Refutation

**Proof technique:** direct.

1.1 The usual symmetry makes $\mathbf{Vect}_k$ braided, but [L2] shows that its object $k[x]$ has no evaluation and coevaluation satisfying the zig-zag identities. [given, L2]

2.1 Consequently the trace composites described in [L1] cannot even be formed for $k[x]$. The braiding supplies swaps but does not supply the missing duality maps. [L1, step 1.1]

3.1 Therefore braiding without rigidity does not suffice to define categorical trace. The statement is false. [step 2.1] ∎
