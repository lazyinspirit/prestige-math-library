---
id: thm-direct-sums-and-direct-summands-preserve-flatness
kind: theorem
title: "Direct sums and direct summands of flat modules are flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Lemma (9.5) and Proposition (9.6)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "Stacks Project, Section 10.39: Flat modules and flat ring maps"
      url: "https://stacks.math.columbia.edu/tag/00H9"
---

## Statement

Let $R$ be a commutative ring.

1. Any direct sum of flat $R$-modules is flat.
2. Any direct summand of a flat $R$-module is flat.

## Facts & Assumptions

**Given:** A commutative ring $R$.

[L1] A module is flat exactly when tensoring with it preserves exact sequences
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] Tensor product commutes with arbitrary direct sums
([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

## Proof

**Proof technique:** direct.


1.1 Let $\{M_i\}_{i\in I}$ be flat and put $M=\bigoplus_{i\in I}M_i$. For any exact sequence $A\to B\to C$, [L2] gives $ (A\otimes_R M)\to (B\otimes_R M)\to (C\otimes_R M) $ as the direct sum over $i$ of the exact sequences obtained by tensoring with $M_i$. Therefore the displayed sequence is exact, so $M$ is flat by [L1]. [L1, L2, given, algebra]


1.2 Suppose $F\cong N\oplus N'$ is flat. For any exact sequence $A\to B\to C$, tensoring with $F$ gives $ (A\otimes_R N)\oplus(A\otimes_R N')\to (B\otimes_R N)\oplus(B\otimes_R N')\to (C\otimes_R N)\oplus(C\otimes_R N'). $ If an element of $B\otimes_R N$ maps to zero in $C\otimes_R N$, then the same element viewed in the direct sum lies in the image of $A\otimes_R F$ because $F$ is flat. Projecting back to the first summand shows exactness for tensoring with $N$. Thus $N$ is flat. [L1, algebra]


2.1 Steps 1.1 and 1.2 prove the two claims. [algebra] ∎
