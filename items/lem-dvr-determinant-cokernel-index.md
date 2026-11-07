---
id: lem-dvr-determinant-cokernel-index
kind: lemma
title: "Determinant valuation gives the finite cokernel size over a DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Sharifi, Iwasawa Theory"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "§2.2, printed pp. 43–45"
verification: {}
---

## Statement

Let $A$ be a discrete valuation ring with uniformizer $\pi$ and finite residue field of cardinality $q$. If $M\in M_n(A)$ has nonzero determinant, then its cokernel is finite and
$$|A^n/MA^n|=q^{v_\pi(\det M)}.$$

## Statement references

[J. Sharifi, *Iwasawa Theory*, §2.2, pp. 43–45](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A DVR $A$, its uniformizer $\pi$, finite residue field, and a square matrix $M$ with nonzero determinant.

[F1] A nonarchimedean local field has a complete discrete valuation ring of integers, a uniformizer, and finite residue field. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

1.1 We prove the formula by induction on $n$. For $n=0$ both sides equal $1$. For $n>0$, choose a nonzero entry of $M$ having least valuation and use row and column permutations to put it in the upper-left corner, say $a$. Since $v_\pi(a)$ is minimal, $a$ divides every entry of $M$. Row operations clear the rest of the first column and column operations clear the rest of the first row; these operations are invertible over $A$ and preserve both the cokernel size and determinant valuation. The resulting matrix is block diagonal $\operatorname{diag}(a,M')$.[F1, given, construct, algebra]

1.2 Nonzero determinant implies $\det M'\ne0$. The cokernel of the block matrix is $A/(a)\oplus\operatorname{coker}(M')$, and $|A/(a)|=q^{v_\pi(a)}$ from the filtration by powers of $\pi$. By induction, $|\operatorname{coker}(M')|=q^{v_\pi(\det M')}$. The determinant valuations add across the blocks, yielding the formula and finiteness.[F1, step 1.1, induction, algebra] ∎