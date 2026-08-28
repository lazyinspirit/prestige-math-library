---
id: ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c
kind: example
title: "$\\mathbb C[S_3]\\cong\\mathbb C\\times\\mathbb C\\times M_2(\\mathbb C)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-sum-of-squares-formula-for-irreducible-degrees, thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order, thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Example

For the symmetric group $S_3$,

$$
\mathbb C[S_3]\cong \mathbb C\times\mathbb C\times M_2(\mathbb C).
$$

## Facts & Assumptions

**Given:** The symmetric group $S_3$.

[L1] Over an algebraically closed field of characteristic prime to $|G|$, the number of irreducible representations equals the number of conjugacy classes ([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[L2] Under the same hypotheses, the irreducible degrees satisfy the sum-of-squares formula ([[cor-sum-of-squares-formula-for-irreducible-degrees]]).

[L3] Under the same hypotheses, the group algebra is a product of full matrix algebras over the base field ([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]]).

## Verification

**Proof technique:** direct.

1.1 The conjugacy classes of $S_3$ are $$\{e\}, \qquad \{(12),(13),(23)\}, \qquad \{(123),(132)\}.$$ Hence [L1] gives exactly three irreducible complex representations, with degrees $d_1,d_2,d_3$, and [L2] gives $$d_1^2+d_2^2+d_3^2=6.$$ [L1, L2, given, algebra]

2.1 Each $d_i$ is a positive integer. Since $1^2+1^2+2^2=6$ and any larger square would already exceed $6$, the only possible degree multiset is $1,1,2$. Applying [L3], the Wedderburn factors are therefore $M_1(\mathbb C)$, $M_1(\mathbb C)$, and $M_2(\mathbb C)$, so $$\mathbb C[S_3]\cong \mathbb C\times\mathbb C\times M_2(\mathbb C).$$ [step 1.1, L3, given, algebra] ∎
