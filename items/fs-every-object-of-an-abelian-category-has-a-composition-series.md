---
id: fs-every-object-of-an-abelian-category-has-a-composition-series
kind: false-statement
title: "FALSE: every object of an abelian category has a composition series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-composition-series-and-composition-factors-of-an-object, def-object-of-finite-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

Every object of an abelian category has a composition series.

## Facts & Assumptions

**Given:** The abelian group $\mathbb Z$.

[L1] A composition series is a finite strict chain with simple successive
quotients
([[def-composition-series-and-composition-factors-of-an-object]]).

[L2] Finite-length objects are exactly those admitting composition series
([[def-object-of-finite-length]]).

## Refutation

1.1 Every nonzero subgroup of $\mathbb Z$ is of the form $n\mathbb Z$, hence is isomorphic to $\mathbb Z$. So if a composition series $0=A_0<\cdots<A_n=\mathbb Z$ existed, the first nonzero term $A_1$ would satisfy $A_1\cong\mathbb Z$, and the first quotient $A_1/A_0=A_1$ would not be simple. This contradicts [L1]. [L1, algebra]

2.1 Therefore $\mathbb Z$ has no composition series, so by [L2] it is not of finite length. The universal statement is false even in $\mathbf{Ab}$. [L2, step 1.1] ∎
