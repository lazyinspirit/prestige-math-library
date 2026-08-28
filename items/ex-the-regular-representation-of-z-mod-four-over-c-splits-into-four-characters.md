---
id: ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters
kind: example
title: "The regular representation of $\\mathbb Z/4\\mathbb Z$ over $\\mathbb C$ splits into its four characters"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-sum-of-squares-formula-for-irreducible-degrees, thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order, thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Example

The regular representation of $\mathbb Z/4\mathbb Z$ over $\mathbb C$ is the
direct sum of its four one-dimensional irreducible summands, each occurring
once.

## Facts & Assumptions

**Given:** The cyclic group $G=\mathbb Z/4\mathbb Z$.

[L1] Over an algebraically closed field of characteristic prime to $|G|$, the number of irreducible representations equals the number of conjugacy classes ([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[L2] Under the same hypotheses, the irreducible degrees satisfy the sum-of-squares formula ([[cor-sum-of-squares-formula-for-irreducible-degrees]]).

[L3] Under the same hypotheses, every irreducible representation occurs in the regular representation with multiplicity equal to its degree ([[thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]]).

## Verification

**Proof technique:** direct.

1.1 The group $G$ is abelian with four elements, so it has four conjugacy classes. Hence [L1] gives four irreducible complex representations, with degrees $d_1,d_2,d_3,d_4$, and [L2] gives $$d_1^2+d_2^2+d_3^2+d_4^2=4.$$ [L1, L2, given, algebra]

2.1 Every $d_i$ is positive, so the only way four positive squares can sum to $4$ is $d_1=d_2=d_3=d_4=1$. Then [L3] says each irreducible occurs in the regular representation with multiplicity equal to $1$, so the regular representation splits as the direct sum of those four one-dimensional summands. [L3, step 1.1, given, algebra] ∎
