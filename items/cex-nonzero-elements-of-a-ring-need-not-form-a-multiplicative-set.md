---
id: cex-nonzero-elements-of-a-ring-need-not-form-a-multiplicative-set
kind: counterexample
title: 'Outside a domain, the nonzero elements need not be multiplicative: $2\cdot3=0$ in $\mathbb Z/6$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-integers-modulo-n-as-a-quotient-ring, def-multiplicative-subset-and-localisation, def-field-of-fractions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.9: Localization'
      url: 'https://stacks.math.columbia.edu/tag/00CM'
pipeline_run: frontier-12
---

## Statement refuted

For every nonzero commutative ring $R$, the subset $R\setminus\{0\}$ is multiplicative and can be used to define a field of fractions.

## Facts & Assumptions

**Given:** The quotient ring $R=\mathbb Z/6\mathbb Z$.

[F1] A multiplicative subset must be closed under products ([[def-multiplicative-subset-and-localisation]]).

[F2] The ring $\mathbb Z/6$ is the quotient ring $\mathbb Z/6\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[F3] The field-of-fractions construction at all nonzero elements is defined for integral domains ([[def-field-of-fractions]]).

## Counterexample

**Proof technique:** direct.

1.1 In $R=\mathbb Z/6\mathbb Z$, the classes of $2$ and $3$ are nonzero, but their product is the class of $6$, hence zero. [F2, algebra]

2.1 Therefore $R\setminus\{0\}$ is not closed under multiplication and is not multiplicative by [F1]. This shows why the domain hypothesis in [F3] cannot be removed. [F1, F3, step 1.1] ∎
