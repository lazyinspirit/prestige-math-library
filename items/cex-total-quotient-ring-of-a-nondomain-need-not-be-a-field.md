---
id: cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field
kind: counterexample
title: 'The total quotient ring of a nondomain need not be a field: $Q(\mathbb Z/6)\cong\mathbb Z/6$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-localisation, lem-ring-units-form-a-group, prop-integers-modulo-n-as-a-quotient-ring, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.25: Zerodivisors and total rings of fractions'
      url: 'https://stacks.math.columbia.edu/tag/02LV'
pipeline_run: frontier-12
---

## Statement refuted

The total quotient ring of every nonzero commutative ring is a field.

## Facts & Assumptions

**Given:** The quotient ring $R=\mathbb Z/6\mathbb Z$. By definition, a regular element $s$ has trivial annihilator, and the total quotient ring $Q(R)$ is the localisation at all regular elements.

[F1] Units form a group, and a map already taking all denominators to units extends uniquely through localisation ([[lem-ring-units-form-a-group]], [[thm-universal-property-of-localisation]]).

[F2] The ring $\mathbb Z/6$ has congruence-class arithmetic ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[F3] In a field, every nonzero element is a unit ([[def-field]]).

## Counterexample

**Proof technique:** direct.

1.1 In $R=\mathbb Z/6\mathbb Z$, the class $0$ is not regular because it annihilates $1$; the classes $2,3,4$ are nonzero zero divisors; and $1,5$ are units and hence regular. Thus the regular elements are exactly $S=\{1,5\}=R^\times$. [given, F1, F2, algebra]

2.1 Since the identity map of $R$ already sends every element of $S$ to a unit, [F1] gives an inverse to the localisation map, so $Q(R)=S^{-1}R\cong R$. [F1, step 1.1]

3.1 The nonzero class of $2$ is not a unit because every product $2a$ is even modulo $6$ and cannot equal $1$. Hence $R$, and therefore $Q(R)$, is not a field by [F3]. [F2, F3, step 2.1] ∎
