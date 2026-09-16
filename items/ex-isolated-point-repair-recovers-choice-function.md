---
id: ex-isolated-point-repair-recovers-choice-function
kind: example
title: "The isolated-point repair recovers a choice function"
status: draft
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
---

## Example

Take the three nonempty sets $A_0 = \{0,1\}$, $A_1 = \mathbb{N}$ and
$A_2 = \mathbb{R}$, and form the repaired coordinates $X_{A_j}$ of
[[lem-isolated-point-kelley-repair]]. In the product $X := X_{A_0} \times X_{A_1}
\times X_{A_2}$ the closed constraints $C_j := \{x : x_j \in A_j\}$ have the
finite intersection property, so compactness of $X$ produces a point whose three
coordinates are a choice tuple.

## Facts & Assumptions

**Given:** The three sets and their repaired coordinates $X_{A_j} = A_j \sqcup \{\infty_j\}$.

[F1] Each $X_{A_j}$ is compact $T_1$ and $A_j$ is a closed subspace of it ([[lem-isolated-point-kelley-repair]], [[def-t0-and-t1-spaces]]).

[F2] In a product, the cylinder $\pi_j^{-1}[A_j]$ is closed when $A_j$ is closed in the factor, and a space is compact exactly when every family of closed sets with the finite intersection property has nonempty intersection ([[def-product-topology]], [[thm-compact-iff-fip]], [[def-finite-intersection-property]]).

[F3] The hypothesis that every product of compact $T_1$ spaces is compact makes $X$ compact ([[thm-compact-t1-product-theorem-iff-ac]], [[def-compact-space]]).

[L1] A point of $X$ is a function on the three-element index set, so its coordinates are the three values of a choice function for the family $(A_j)$ when each coordinate lies in the corresponding $A_j$ ([[def-choice-function]], [[lem-finite-choice]]).

## Verification

1.1 The three cylinders $C_0, C_1, C_2$ are closed in $X$ by [F1] and [F2]. [given, F1, F2]

1.2 Each single cylinder is nonempty: the point with one coordinate $0$ (or any other element of $A_j$) and the artificial values $\infty$ at the other two coordinates lies in it; the artificial values are available because $\infty_k \in X_{A_k}$ for every $k$. [given, F1]

2.1 For the pair $\{j,k\}$ the point with prescribed values in $A_j$ and $A_k$ and $\infty$ in the remaining coordinate lies in $C_j \cap C_k$, so the family has the finite intersection property; for the triple the point $(0,0,0)$ lies in $C_0 \cap C_1 \cap C_2$. [step 1.2, F2]

3.1 By [F3] the product $X$ is compact, so by [F2] the intersection $C_0 \cap C_1 \cap C_2$ is nonempty; any of its points has all three coordinates in the respective sets, and by [L1] those coordinates are a choice function for the three-element family. [step 2.1, F2, F3, L1]

4.1 The same computation with $n$ coordinates and $n$ closed cylinders gives a choice function for every finite family, and the general indexed argument replaces the three coordinates by the index set and uses the compactness of the product together with the finite-intersection property verified coordinatewise by finite choice. [step 3.1, F2, L1] ∎
