---
id: thm-schur-index-as-minimal-realization-multiplicity
kind: theorem
title: "Schur index as minimal realization multiplicity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-character-field-and-field-of-definition, def-schur-index-of-an-irreducible-character, thm-scalar-extension-of-an-irreducible-finite-group-representation, thm-schur-index-equals-division-algebra-index, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, thm-complex-representations-are-determined-by-their-characters]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Definition 2.5.12 through Remark 2.5.15"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Corollary 4.3.4"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Let $\chi$ be an irreducible complex character of a finite group and put
$K=\mathbb Q(\chi)$.  Its Schur index $m_K(\chi)$ is the least positive integer
$r$ for which the character $r\chi$ is afforded by a $K$-representation.
Consequently $\chi$ itself is realizable over $K$ if and only if $m_K(\chi)=1$.

## Facts & Assumptions

**Given:** An irreducible complex character $\chi$ and $K=\mathbb Q(\chi)$.

[L1] The irreducible $K$-representation in the Schur-index definition has scalar extension $m_K(\chi)U$, where $U$ affords $\chi$ ([[def-schur-index-of-an-irreducible-character]], [[thm-scalar-extension-of-an-irreducible-finite-group-representation]]).

[L2] A field of definition means a $K$-model whose complex scalar extension is equivalent to the given representation ([[def-character-field-and-field-of-definition]]).

[L3] Proposition 4.3.2 in the cited notes of Zheng partitions all irreducible representations over a splitting field according to the unique irreducible $K$-representation from which they arise.  Thus $U$ occurs after scalar extension of exactly one irreducible $K$-module, namely the module $V$ in [L1].

[L4] Every finite-dimensional $K$-representation of $G$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[L5] Finite-dimensional complex representations of $G$ are determined by their characters ([[thm-complex-representations-are-determined-by-their-characters]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be the irreducible $K$-representation from the Schur-index definition.  By [L1], its scalar extension has character $m_K(\chi)\chi$, so $m_K(\chi)\chi$ is afforded over $K$. [L1, given]

1.2 Conversely, if $r\chi$ is afforded by a $K$-representation $W$, [L4] decomposes $W$ into irreducible $K$-summands, while [L5] identifies its complex scalar extension with $U^{\oplus r}$.  By [L3], every summand that contributes $U$ is isomorphic to $V$, and by [L1] each copy contributes $U$ with multiplicity $m_K(\chi)$.  Hence $m_K(\chi)\mid r$. [L1, L3, L4, L5, given, algebra]

2.1 Step 1.1 attains $r=m_K(\chi)$ and step 1.2 excludes every smaller positive $r$, so this is the least such multiplicity.  With $r=1$, [L2] gives exactly the stated realizability criterion. [L2, step 1.1, step 1.2] ∎
