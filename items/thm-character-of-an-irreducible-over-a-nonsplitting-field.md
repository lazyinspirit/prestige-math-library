---
id: thm-character-of-an-irreducible-over-a-nonsplitting-field
kind: theorem
title: "Character formula over a nonsplitting field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-schur-index-of-an-irreducible-character, lem-schur-index-is-independent-of-the-chosen-splitting-field, thm-scalar-extension-of-an-irreducible-finite-group-representation, lem-character-field-is-the-stabilizer-fixed-field, thm-characters-of-direct-sums-tensor-products-and-duals]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Weizhe Zheng, Lectures on Algebra, Corollary 4.3.3"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.4"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Statement

Let $F\subseteq E\subseteq\mathbb C$, let $V$ be an irreducible
$F$-representation of a finite group $G$, and let $E/F$ be finite Galois and a
splitting field for $G$.  Let $\chi$ be the character of one absolutely
irreducible constituent of $E\otimes_FV$, let $m$ be that constituent's
multiplicity in $E\otimes_FV$, and put $H=\operatorname{Stab}(\chi)$.  Then
$$\chi_V=m\sum_{\sigma\in\operatorname{Gal}(E/F)/H}\sigma\chi.$$
In particular, $\dim_FV=m\,[F(\chi):F]\,\chi(1)$.

## Facts & Assumptions

**Given:** $F\subseteq E\subseteq\mathbb C$, $G$, $V$, $\chi$, $m$, and $H$ as in the statement.

[L1] Scalar extension of $V$ is $m$ times the orbit of $\chi$'s representation ([[thm-scalar-extension-of-an-irreducible-finite-group-representation]]).

[L2] The character of a direct sum is the sum of the characters ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[L3] The fixed field of the stabilizer is $F(\chi)$ ([[lem-character-field-is-the-stabilizer-fixed-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], taking characters of the scalar-extension decomposition gives the displayed character identity. [L1, L2]

2.1 Evaluating that identity at $1_G$ gives $\dim_FV=m\,[\operatorname{Gal}(E/F):H]\chi(1)$. [step 1.1, algebra]

3.1 By [L3] and the finite Galois correspondence, the index $[\operatorname{Gal}(E/F):H]$ equals $[F(\chi):F]$.  Substitute this into step 2.1. [L3, step 2.1] ∎
