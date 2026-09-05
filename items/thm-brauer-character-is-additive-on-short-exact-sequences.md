---
id: thm-brauer-character-is-additive-on-short-exact-sequences
kind: theorem
title: "Brauer characters are additive on short exact sequences"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-brauer-character-of-a-finite-dimensional-kg-module, lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

For every short exact sequence of finite-dimensional $kG$-modules

$$0\to U\to V\to W\to0,$$

one has

$$\varphi_V=\varphi_U+\varphi_W$$

on $G^0$. In particular Brauer characters are additive on direct sums.

## Facts & Assumptions

**Given:** A short exact sequence
$0\to U\to V\to W\to0$ of finite-dimensional $kG$-modules.

[F1] The Brauer character at a $p$-regular element is the lifted sum of the
eigenvalues of that element on the module
([[def-brauer-character-of-a-finite-dimensional-kg-module]]).

[L1] That value is basis-independent
([[lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G^0$. Choose a basis of $V$ whose first block is a basis of the $g$-stable submodule $U$. In that basis the action matrix of $g$ on $V$ has block upper-triangular form $$\begin{pmatrix}A&*\\0&B\end{pmatrix},$$ where $A$ is the action on $U$ and $B$ is the induced action on $W$. [given, choose, algebra]

2.1 A block upper-triangular matrix has eigenvalue multiset equal to the union of the eigenvalue multisets of its diagonal blocks. Therefore the eigenvalues of $g$ on $V$ are exactly those on $U$ together with those on $W$. Using [F1] and [L1], the lifted traces add: $\varphi_V(g)=\varphi_U(g)+\varphi_W(g)$. [F1, L1, step 1.1, algebra]

3.1 Since $g\in G^0$ was arbitrary, $\varphi_V=\varphi_U+\varphi_W$ on $G^0$. The direct-sum case is the split short exact sequence. [step 2.1] ∎
