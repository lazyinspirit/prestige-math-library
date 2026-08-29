---
id: ex-word-problem-in-a-finite-cyclic-presentation
kind: example
title: "The word problem in a finite cyclic presentation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-word-problem-for-finitely-generated-abelian-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jack Jeffries, Math 817: Introduction to Modern Algebra I (Fall 2025)"
      url: "https://jack-jeffries.github.io/F25/817text.html"
pipeline_run: null
---

## Example

In the cyclic presentation $\langle x\mid x^6=e\rangle$, the word $x^{14}$ is
equal to $x^2$ and therefore is not trivial.

## Facts & Assumptions

**Given:** The word problem is solvable in finitely generated abelian groups.

[L1] Every finitely generated abelian group has solvable word problem. ([[thm-word-problem-for-finitely-generated-abelian-groups]])

## Verification

**Proof technique:** direct.

1.1 In the cyclic group of order $6$, exponents are taken modulo $6$, so $x^{14}=x^{2}$. [given]

2.1 Because $2\not\equiv 0\pmod 6$, the element $x^2$ is not the identity. This is the abelian coordinate check promised by [L1]. [L1, step 1.1] ∎
