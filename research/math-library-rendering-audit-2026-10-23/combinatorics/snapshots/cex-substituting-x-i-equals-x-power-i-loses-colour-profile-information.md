---
id: cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information
kind: counterexample
title: "The substitution x_i=x^i can erase colour-profile information"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment,
       thm-weighted-pattern-inventory-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Replacing every cycle-index variable by the one-variable specialization

$$x_i=x^i$$

still retains the full colour-profile information of a weighted inventory.

## Facts & Assumptions

**Given:** the trivial action on the one-point set with two colours, blue and red.

[F1] For the trivial action on one point, the cycle index is the single variable $s_1$, and a blue/red weighting records the two colour orbits by the polynomial $b+r$.

## Counterexample

**Proof technique:** direct.

1.1 Give blue weight $b$ and red weight $r$. By [F1], the full weighted inventory is $b+r$, which distinguishes the blue orbit from the red orbit. [F1]

2.1 The one-variable specialization named in the statement replaces the cycle-index variables by $s_i=x^i$, so here it sends $s_1$ to $x$. The resulting polynomial $x$ no longer distinguishes blue from red, so the specialization has erased colour-profile information. Therefore the displayed claim is false. [step 1.1, F1, algebra] ∎
