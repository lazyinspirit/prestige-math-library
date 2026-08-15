---
id: thm-prime-subfield-classification
kind: theorem
title: "A field's prime subfield is isomorphic to $\\mathbb Q$ in characteristic zero and to $\\mathbb F_p$ in characteristic $p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-subfield, thm-characteristic-of-a-field-is-zero-or-prime, thm-z-mod-p-is-a-field, thm-rat-field, def-field-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $F_0$ be the prime subfield of a field $F$.

1. If $\operatorname{char}F=p>0$, then $F_0$ is isomorphic to $\mathbb F_p=\mathbb Z/p$.
2. If $\operatorname{char}F=0$, then $F_0$ is isomorphic to $\mathbb Q$.

Each isomorphism sends $1$ to $1_F$.

## Facts & Assumptions

**Given:** A field $F$ and its prime subfield $F_0$.

[L1] The prime subfield is the intersection of all subfields of $F$ and hence the smallest one ([[def-prime-subfield]]).

[L2] The characteristic of $F$ is zero or prime ([[thm-characteristic-of-a-field-is-zero-or-prime]]).

[L3] For prime $p$, the quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L4] The rational numbers form a field ([[thm-rat-field]]).

[L5] A field homomorphism preserves addition, multiplication and $1$ ([[def-field-homomorphism]]); it is therefore injective, its kernel being an ideal of a field that does not contain $1$.

## Proof

**Proof technique:** direct.

1.1 Suppose $\operatorname{char}F=p>0$. The map $\mathbb Z/p\to F$ given by $[n]\mapsto n\cdot1_F$ is well defined, is a field homomorphism, and is injective; its image is a subfield contained in every subfield of $F$. [given, L2, L3, L5, algebra]

1.2 Suppose $\operatorname{char}F=0$. The map $\mathbb Z\to F$, $n\mapsto n\cdot1_F$, is injective. Sending a rational class $a/b$ with $b\ne0$ to $(a\cdot1_F)(b\cdot1_F)^{-1}$ is well defined and gives an injective field homomorphism $\mathbb Q\to F$. [given, L2, L4, L5, algebra]

2.1 By [L1], that image equals $F_0$, proving the first classification. [step 1.1, L1]

2.2 Its image is a subfield and every subfield of $F$ contains all integer multiples of $1_F$ and their nonzero quotients. Hence the image is contained in every subfield and equals $F_0$ by [L1]. [step 1.2, L1]

3.1 Steps 2.1 and 2.2 exhaust the alternatives in [L2]. [step 2.1, step 2.2, L2] ∎
