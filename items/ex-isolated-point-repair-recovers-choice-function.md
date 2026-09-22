---
id: ex-isolated-point-repair-recovers-choice-function
kind: example
title: "The isolated-point repair recovers a choice function"
status: published
origin: pipeline
deps: [thm-compact-t1-product-theorem-iff-ac, lem-isolated-point-kelley-repair, def-product-topology, def-compact-space, thm-compact-iff-fip, def-finite-intersection-property, def-choice-function, lem-finite-choice, def-t0-and-t1-spaces]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Kyriakos Keremedis and Eleftherios Tachtsis, Wallman Compactifications and Tychonoff's Compactness Theorem in ZF"
      url: "https://topology.nipissingu.ca/tp/reprints/v42/tp42021.pdf"
      locator: "Discussion before Proposition 2.13, journal p. 282"
verification:
  audited: 2026-09-22
---

## Example

Take the three nonempty sets $A_0 = \{0,1\}$, $A_1 = \mathbb{N}$ and
$A_2 = \mathbb{R}$, and form the repaired coordinates $X_{A_j}$ of
[[lem-isolated-point-kelley-repair]]. Assume the compact-$T_1$ product
hypothesis: every product of compact $T_1$ spaces is compact. In the product
$X := X_{A_0} \times X_{A_1}
\times X_{A_2}$ the closed constraints $C_j := \{x : x_j \in A_j\}$ have the
finite intersection property, so compactness of $X$ produces a point whose three
coordinates are a choice tuple.

## Facts & Assumptions

**Given:** The three sets, their repaired coordinates $X_{A_j} = A_j \sqcup \{\infty_j\}$, and the hypothesis that every product of compact $T_1$ spaces is compact.

[F1] Each $X_{A_j}$ is compact $T_1$ and $A_j$ is a closed subspace of it ([[lem-isolated-point-kelley-repair]], [[def-t0-and-t1-spaces]]).

[F2] In a product, the cylinder $\pi_j^{-1}[A_j]$ is closed when $A_j$ is closed in the factor, and a space is compact exactly when every family of closed sets with the finite intersection property has nonempty intersection ([[def-product-topology]], [[thm-compact-iff-fip]], [[def-finite-intersection-property]]).

[F3] The hypothesis that every product of compact $T_1$ spaces is compact makes $X$ compact ([[thm-compact-t1-product-theorem-iff-ac]], [[def-compact-space]]).

[L1] Let $\mathcal A=\{A_0,A_1,A_2\}$. If a product point $x$ satisfies $x_j\in A_j$ for every $j\in\{0,1,2\}$, then for each $S\in\mathcal A$ let $j(S)$ be the least $j\in\{0,1,2\}$ with $S=A_j$ and define $g(S)=x_{j(S)}$. The least index exists because $S$ occurs in the displayed finite list, and $g(S)=x_{j(S)}\in A_{j(S)}=S$. Hence $g$ has domain $\mathcal A$ and is a choice function on $\mathcal A$ ([[def-choice-function]], [[lem-finite-choice]]).

## Verification

1.1 The three cylinders $C_0, C_1, C_2$ are closed in $X$ by [F1] and [F2]. [given, F1, F2]

1.2 Each single cylinder is nonempty: the point with one coordinate $0$ (or any other element of $A_j$) and the artificial values $\infty$ at the other two coordinates lies in it; the artificial values are available because $\infty_k \in X_{A_k}$ for every $k$. [given, F1]

2.1 For the pair $\{j,k\}$ the point with prescribed values in $A_j$ and $A_k$ and $\infty$ in the remaining coordinate lies in $C_j \cap C_k$, so the family has the finite intersection property; for the triple the point $(0,0,0)$ lies in $C_0 \cap C_1 \cap C_2$. [step 1.2, F2]

3.1 By [F3] the product $X$ is compact, so by [F2] the intersection $C_0 \cap C_1 \cap C_2$ is nonempty. Choose $x$ in this intersection. Then $x_j\in A_j$ for all three indices, and the function $g$ defined in [L1] has domain $\mathcal A=\{A_0,A_1,A_2\}$ and satisfies $g(S)\in S$ for every $S\in\mathcal A$. Thus $g$ is the required choice function. [step 2.1, F2, F3, L1]

4.1 For a finite list of $n$ sets, the same least-index construction converts a point in the $n$ closed cylinders into a choice function on the underlying set-family. In the general AC argument the factors are instead indexed by the family $\mathcal A$ itself, so a product point $x$ with $x_A\in A$ directly defines the choice function $A\mapsto x_A$; compactness supplies such a point after finite choice verifies the cylinders' finite-intersection property. [step 3.1, F2, L1, [[lem-finite-choice]]] ∎
