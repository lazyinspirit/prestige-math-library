---
id: thm-compact-t1-product-theorem-iff-ac
kind: theorem
title: "The compact T1 product theorem is equivalent to AC"
status: published
origin: pipeline
deps: [lem-isolated-point-kelley-repair, def-axiom-of-choice, def-product-topology, def-compact-space, def-t0-and-t1-spaces, thm-compact-iff-fip, thm-tychonoff, def-finite-intersection-property, lem-finite-choice, def-subspace-topology-top, thm-subspace-closure-and-interior]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. L. Kelley, The Tychonoff product theorem implies the axiom of choice, Fund. Math. 37 (1950), 75-76"
      url: "https://doi.org/10.4064/fm-37-1-75-76"
      locator: "The T1 restriction of the product theorem"
    - title: "Kyriakos Keremedis and Eleftherios Tachtsis, Wallman Compactifications and Tychonoff's Compactness Theorem in ZF"
      url: "https://topology.nipissingu.ca/tp/reprints/v42/tp42021.pdf"
      locator: "Definitions, Proposition 2.11 and Proposition 2.13, journal pp. 279-283"
verification:
  audited: 2026-09-22
---

## Statement

Over $\mathrm{ZF}$, the Axiom of Choice ([[def-axiom-of-choice]]) is equivalent
to the assertion that every product of compact $T_1$ spaces
([[def-t0-and-t1-spaces]], [[def-compact-space]],
[[def-product-topology]]) is compact.

## Facts & Assumptions

**Given:** A family $(A_i)_{i \in I}$ of nonempty sets; the repaired coordinates $X_{A_i}$ of [[lem-isolated-point-kelley-repair]]; the product $X := \prod_i X_{A_i}$ with projections $\pi_i$.

[F1] Each $X_{A_i}$ is compact and $T_1$, and $A_i$ is a closed subspace of it ([[lem-isolated-point-kelley-repair]], [[def-subspace-topology-top]]).

[F2] Under AC, Tychonoff's theorem gives compactness of arbitrary products of compact spaces ([[thm-tychonoff]], [[def-axiom-of-choice]]).

[F3] A space is compact if and only if every family of closed sets with the finite intersection property has nonempty intersection ([[thm-compact-iff-fip]], [[def-finite-intersection-property]]).

[F4] If $n\in\mathbb N$ and $F:n\to V$ is a natural-number-indexed list of nonempty sets, then the family of values $F[n]$ has a choice function ([[lem-finite-choice]]).

[L1] A cylinder $\pi_i^{-1}[A_i]$ is closed in $X$ when $A_i$ is closed in $X_{A_i}$, being the preimage of a closed set under a continuous projection ([[def-product-topology]], [[thm-subspace-closure-and-interior]]).

## Proof

**Proof technique:** direct.

1.1 Under AC every product of compact spaces is compact by [F2], so every product of compact $T_1$ spaces is compact; this is the forward direction. [assume-hyp, F2]

1.2 Conversely, assume every product of compact $T_1$ spaces is compact, and let $(A_i)_{i \in I}$ be a family of nonempty sets; if $I = \varnothing$ the product over the empty index set is a one-point space and the unique element is a choice function, and if $I \ne \varnothing$ we build one below. [assume-hyp, given]

2.1 Form $X := \prod_{i \in I} X_{A_i}$ where $X_{A_i}$ is the repaired coordinate of [F1]; each factor is compact $T_1$, so $X$ is compact by the hypothesis. [step 1.2, F1]

3.1 For each $i$ the cylinder $C_i := \pi_i^{-1}[A_i]$ is closed in $X$ by [L1] and [F1]. To verify the finite intersection property in its finite-list form, let $n\in\mathbb N$ and let $s:n\to\{C_i:i\in I\}$ be arbitrary. For each $k<n$, choose the unique $i_k\in I$ with $s(k)=C_{i_k}$ (the cylinder determines its coordinate), and define $F(k):=A_{i_k}$. By [F4] the family $F[n]$ has a choice function $h$. Define $x\in X$ by $x(i):=h(A_i)$ when $i=i_k$ for some $k<n$, and by the distinguished point $\infty\in X_{A_i}$ otherwise. If the same coordinate occurs more than once this gives the same value, and $h(A_i)\in A_i$; hence $x\in C_{i_k}=s(k)$ for every $k<n$. Thus every finite list from $\{C_i:i\in I\}$ has nonempty intersection. [step 2.1, F1, F4, L1]

4.1 By compactness of $X$ and [F3] the intersection $\bigcap_i C_i$ is nonempty; any point $x$ of it has $x_i \in A_i$ for every $i$, so $i \mapsto x_i$ is a choice function for the family $(A_i)_{i \in I}$. [step 2.1, step 3.1, F3]

5.1 The family of nonempty sets was arbitrary, so AC holds; together with step 1.1 this proves the displayed equivalence. [step 1.1, step 4.1] ∎
