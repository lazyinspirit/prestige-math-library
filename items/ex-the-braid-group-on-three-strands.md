---
id: ex-the-braid-group-on-three-strands
kind: example
title: "The braid group on three strands and its quotient to S_3"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-braid-group-by-the-artin-presentation, thm-the-braid-group-surjects-onto-the-symmetric-group]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Example

The three-strand braid group has presentation

$$B_3=\langle \sigma_1,\sigma_2\mid \sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\rangle,$$

and the quotient map to $S_3$ sends $\sigma_1$ to $(1\,2)$ and $\sigma_2$ to
$(2\,3)$.

## Facts & Assumptions

**Given:** The Artin presentation of braid groups and the standard quotient to the symmetric group.

[L1] The Artin presentation defines $B_n$ ([[def-braid-group-by-the-artin-presentation]]).

[L2] The map $\sigma_i\mapsto(i\ i+1)$ extends to a surjection $B_n\to S_n$ ([[thm-the-braid-group-surjects-onto-the-symmetric-group]]).

## Verification

**Proof technique:** direct.

1.1 Specializing [L1] to $n=3$ leaves two generators and only one braid relation, because there is no pair $i,j$ with $|i-j|>1$ among $\{1,2\}$. This gives the displayed presentation of $B_3$. [L1, given, algebra]

2.1 Specializing [L2] to $n=3$ gives the quotient map $B_3\to S_3$ with $\sigma_1\mapsto(1\,2)$ and $\sigma_2\mapsto(2\,3)$. [L2, step 1.1] ∎
