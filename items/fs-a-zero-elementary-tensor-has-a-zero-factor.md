---
id: fs-a-zero-elementary-tensor-has-a-zero-factor
kind: false-statement
title: "False: $m\\otimes n=0$ implies $m=0$ or $n=0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-unit-isomorphisms-for-module-tensor-products, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, thm-int-comm-ring]
aliases: []
landmark: false
short: "A zero elementary tensor can have nonzero factors"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Christopher Dennis, Week 1 recap"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Statement

**False claim:** if an elementary tensor $m\otimes n$ is zero, then $m=0$ or $n=0$.

In $\mathbb Z\otimes_{\mathbb Z}\mathbb Z/2$, the nonzero factors $2$ and $\overline1$ satisfy

$$2\otimes\overline1=1\otimes2\overline1=0.$$

## Facts & Assumptions

**Given:** The regular $\mathbb Z$-module $\mathbb Z$ and the quotient module $\mathbb Z/2$.

[L1] $\mathbb Z$ is a commutative ring, so multiplication by integers supplies its regular module structure ([[thm-int-comm-ring]]).

[L2] Modular arithmetic gives $2\overline1=\overline0$ in $\mathbb Z/2$ ([[thm-integers-modulo-n-basic-algebra]]), while the unique representatives $0,1$ are distinct classes ([[thm-standard-representatives-modulo-n]]).

[L3] The unit isomorphism $\mathbb Z\otimes_{\mathbb Z}N\to N$ sends $a\otimes n$ to $an$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Refutation

**Proof technique:** direct.

1.1 Balance in the tensor product and [L2] give $2\otimes\overline1=1\otimes2\overline1=1\otimes\overline0=0$. [given, L2, algebra]

2.1 The integer $2$ is nonzero, and $\overline1$ is nonzero by [L2]. Thus neither factor in step 1.1 is zero. [L1, L2, algebra]

3.1 Moreover, [L3] sends $1\otimes\overline1$ to the nonzero class $\overline1$, so the ambient tensor-product group is itself nonzero. Steps 1.1 and 2.1 therefore refute the claim. [step 1.1, step 2.1, L2, L3] ∎
