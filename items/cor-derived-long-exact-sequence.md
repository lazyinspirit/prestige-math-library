---
id: cor-derived-long-exact-sequence
kind: corollary
title: "The derived long exact sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-left-derived-functors-form-a-homological-delta-functor, thm-right-derived-functors-form-a-cohomological-delta-functor]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ and $\mathcal B$ be abelian categories, let $P$ be supplied
projective resolution data on all objects of $\mathcal A$, and let $I$ be
supplied injective resolution data on all objects of $\mathcal A$.

If $F:\mathcal A\to\mathcal B$ is additive and right exact, then every short
exact sequence
$$0\to A'\to A\to A''\to0$$
in $\mathcal A$ yields a natural long exact sequence
$$\cdots\to L_n^PF(A')\to L_n^PF(A)\to L_n^PF(A'')\to L_{n-1}^PF(A')\to\cdots\to L_0^PF(A'')\to0.$$

If $G:\mathcal A\to\mathcal B$ is additive and left exact, then every such
short exact sequence yields a natural long exact sequence
$$0\to R_I^0G(A')\to R_I^0G(A)\to R_I^0G(A'')\to R_I^1G(A')\to R_I^1G(A)\to\cdots.$$
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ in $\mathcal A$.

[L1] Left derived functors form a homological delta functor
([[thm-left-derived-functors-form-a-homological-delta-functor]]).

[L2] Right derived functors form a cohomological delta functor
([[thm-right-derived-functors-form-a-cohomological-delta-functor]]).

## Proof

**Proof technique:** direct.

1.1 The first displayed sequence is exactly the long exact sequence attached by [L1] to the given short exact sequence. [L1, given]

2.1 The second displayed sequence is exactly the long exact sequence attached by [L2] to the same short exact sequence. [L2, step 1.1] ∎
