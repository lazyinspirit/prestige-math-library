---
id: thm-hermitian-number-field-signature-kernel-is-killed-by-four
kind: theorem
title: Hermitian number-field signature kernels are killed by four
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-number-field-four-square-theorem-in-zf, lem-four-squares-suffice-for-hermitian-signature-kernel-bound]
proof_strategy: direct
sources:
  references:
    - title: N. W. Stoltzfus, Algebraic Computations of the Integral Concordance and Double Null Concordance Group of Knots, printed page 281, Theorem 2.14
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/stoltzfus2.pdf
---

## Statement

Let $E/F$ be a quadratic extension of number fields with its nontrivial involution. In the hermitian Witt group $W(E/F)$, the kernel of all signatures is killed by $4$. The joint signature image is a free abelian subgroup of $\mathbb Z^s$ of rank at most $s$, where $s$ is the number of real places of $F$ at which $E$ becomes complex. No choice principle is required.

## Statement references

[[thm-number-field-four-square-theorem-in-zf]]

[[lem-four-squares-suffice-for-hermitian-signature-kernel-bound]]

## Facts & Assumptions

**Given:** The extension and its involution as in the statement.

[F1] Every nonzero totally positive number-field element is a sum of four squares; if there are no real embeddings, every nonzero element has such a representation. [[thm-number-field-four-square-theorem-in-zf]]

[F2] Under precisely this four-square property for $F$, the hermitian signature kernel is killed by $4$. Independently of that property, the signature image is a subgroup of $\mathbb Z^s$ free of rank at most $s$. [[lem-four-squares-suffice-for-hermitian-signature-kernel-bound]]

## Proof

1.1 Apply [F1] to the fixed field $F$. It supplies the entire four-square hypothesis of [F2], including when $F$ has no real places. Hence [F2] makes every zero-signature hermitian class vanish after multiplication by $4$. [F1, F2, given]

2.1 The signature-image assertion is the unconditional final assertion of [F2], whose proof is a finite induction on subgroups of $\mathbb Z^s$. All suppliers here are proved in ZF, so no choice hypothesis is added. This proves the theorem. [F2, step 1.1] ∎
