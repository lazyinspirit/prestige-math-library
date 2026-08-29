---
id: thm-chasing-rule-a-zero-arrow-is-detected-by-members
kind: theorem
title: "A zero arrow is detected by members"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-each-object-has-a-zero-member-and-each-member-has-a-negative,
       prop-a-morphism-carries-members-to-members-and-preserves-equivalence]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(iv)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

A morphism $h:R \to S$ in an abelian category is the zero morphism if and only
if
$$h x \equiv 0$$
for every member $x$ of $R$.

## Facts & Assumptions

**Given:** A morphism $h:R \to S$.

[L1] The zero member exists, and a member equivalent to zero is literally zero
([[prop-each-object-has-a-zero-member-and-each-member-has-a-negative]]).

## Proof

**Proof technique:** direct.

1.1 If $h = 0$, then for every member $x$ one has $h x = 0$, hence $h x \equiv 0$ by [L1]. [L1, algebra]

1.2 Conversely, assume $h x \equiv 0$ for every member $x$ of $R$. Apply this to the identity member $1_R:R \to R$. Then $h = h 1_R \equiv 0$, so [L1] forces $h = 0$. [L1, assume-hyp]

2.1 Therefore the displayed member criterion detects exactly the zero morphism. [step 1.1, step 1.2] ∎
