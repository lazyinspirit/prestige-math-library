---
id: ex-s3-is-split-over-the-rationals
kind: example
title: "$S_3$ is split over the rationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-finite-symmetric-group-and-permutation-notation, def-sign-representation-and-restriction-of-a-representation, def-trivial-regular-and-permutation-representations, thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order, def-splitting-field-for-a-finite-group]
proof_strategy: computation
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Section 2.3"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Example

The three irreducible complex representations of $S_3$ are already defined over
$\mathbb Q$: the trivial representation, the sign representation, and the
two-dimensional standard representation on
$$W=\{(x_1,x_2,x_3)\in\mathbb Q^3:x_1+x_2+x_3=0\}$$
by permutation of coordinates.  Hence $\mathbb Q$ is a splitting field for
$S_3$.

## Facts & Assumptions

**Given:** The natural coordinate-permutation action of $S_3$ on $\mathbb Q^3$.

[L1] The number of irreducible complex representations of $S_3$ is its number of conjugacy classes, namely three ([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[L2] The trivial and sign representations are defined over every field of characteristic zero ([[def-trivial-regular-and-permutation-representations]], [[def-sign-representation-and-restriction-of-a-representation]]).

## Verification

**Proof technique:** computation.

1.1 The line $\mathbb Q(1,1,1)$ is trivial and its invariant complement $W$ has dimension two.  A transposition has trace $0$ on $W$, while a $3$-cycle has trace $-1$; thus $W$ is neither trivial nor sign. [L2, algebra]

2.1 The three displayed rational models have distinct complex characters, and [L1] says there are no further irreducibles.  Therefore every complex irreducible has a rational model, which is exactly that $\mathbb Q$ is splitting for $S_3$. [L1, step 1.1] ∎
