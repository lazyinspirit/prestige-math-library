---
id: thm-compact-t1-product-theorem-iff-ac
kind: theorem
title: "The compact T1 product theorem is equivalent to AC"
status: draft
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

[F4] Finite choice produces one point in each of finitely many nonempty sets ([[lem-finite-choice]]).

[L1] A cylinder $\pi_i^{-1}[A_i]$ is closed in $X$ when $A_i$ is closed in $X_{A_i}$, being the preimage of a closed set under a continuous projection ([[def-product-topology]], [[thm-subspace-closure-and-interior]]).

## Proof

**Proof technique:** direct.

1.1 Under AC every product of compact spaces is compact by [F2], so every product of compact $T_1$ spaces is compact; this is the forward direction. [assume-hyp, F2]

1.2 Conversely, assume every product of compact $T_1$ spaces is compact, and let $(A_i)_{i \in I}$ be a family of nonempty sets; if $I = \varnothing$ the product over the empty index set is a one-point space and the unique element is a choice function, and if $I \ne \varnothing$ we build one below. [assume-hyp, given]

2.1 Form $X := \prod_{i \in I} X_{A_i}$ where $X_{A_i}$ is the repaired coordinate of [F1]; each factor is compact $T_1$, so $X$ is compact by the hypothesis. [step 1.2, F1]

3.1 For each $i$ the cylinder $C_i := \pi_i^{-1}[A_i]$ is a closed subset of $X$ by [L1] and [F1], and the family $\{C_i : i \in I\}$ has the finite intersection property: for a finite $J \subseteq I$, finite choice [F4] selects $a_j \in A_j$ for $j \in J$, and the point that is $a_j$ at coordinates in $J$ and $\infty$ elsewhere lies in $\bigcap_{j \in J} C_j$. [step 2.1, F1, F4, L1]

4.1 By compactness of $X$ and [F3] the intersection $\bigcap_i C_i$ is nonempty; any point $x$ of it has $x_i \in A_i$ for every $i$, so $i \mapsto x_i$ is a choice function for the family $(A_i)_{i \in I}$. [step 2.1, step 3.1, F3]

5.1 The family of nonempty sets was arbitrary, so AC holds; together with step 1.1 this proves the displayed equivalence. [step 1.1, step 4.1] ∎
