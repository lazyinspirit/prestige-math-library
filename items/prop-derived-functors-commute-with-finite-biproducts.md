---
id: prop-derived-functors-commute-with-finite-biproducts
kind: proposition
title: "Derived functors commute with finite biproducts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, thm-an-additive-functor-preserves-finite-biproducts]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum on a class $\mathcal D_P$,
let $I$ be a supplied injective resolution datum on a class $\mathcal D_I$, and
let $F:\mathcal A\to\mathcal B$ be an additive functor between abelian
categories. For every
$n\in\mathbb Z$, the additive functor $L_n^PF$ preserves finite biproducts that
exist in the domain of $P$, and the additive functor $R_I^nF$ preserves finite
biproducts that exist in the domain of $I$.
## Facts & Assumptions

**Given:** A finite biproduct in one of the two relevant supplied-data domains.

[L1] The left derived functor $L_n^PF$ is additive ([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[L2] The right derived functor $R_I^nF$ is additive ([[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[L3] Any additive functor preserves finite biproducts ([[thm-an-additive-functor-preserves-finite-biproducts]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] to the additive functor $L_n^PF$ from [L1]. This gives preservation of finite biproducts on the left-derived side. [L1, L3]

1.2 Apply [L3] to the additive functor $R_I^nF$ from [L2]. This gives preservation of finite biproducts on the right-derived side. [L2, L3]

2.1 Therefore both derived constructions commute with finite biproducts. [step 1.1, step 1.2] ∎
