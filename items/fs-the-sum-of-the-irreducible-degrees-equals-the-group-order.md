---
id: fs-the-sum-of-the-irreducible-degrees-equals-the-group-order
kind: false-statement
title: "False statement: the sum of the irreducible degrees equals $|G|$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c, cor-sum-of-squares-formula-for-irreducible-degrees]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.1(ii)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

**False claim.** For a finite group $G$, the sum of the degrees of the
irreducible representations equals $|G|$.

## Facts & Assumptions

**Given:** The group $S_3$.

[L1] The complex group algebra of $S_3$ is $\mathbb C \times \mathbb C \times M_2(\mathbb C)$ ([[ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c]]).

[L2] Over an algebraically closed field of characteristic prime to $|G|$, the correct identity is the sum-of-squares formula ([[cor-sum-of-squares-formula-for-irreducible-degrees]]).

## Refutation

**Proof technique:** direct.

1.1 From [L1], the irreducible complex representations of $S_3$ have degrees $1$, $1$, and $2$. Their sum is $1+1+2=4$. [L1, given, algebra]

2.1 But $|S_3|=6$, so the unsquared sum is not the group order. Indeed [L2] gives the correct identity $$1^2+1^2+2^2=6.$$ Therefore the claim is false. [L2, step 1.1, given, algebra] ∎
