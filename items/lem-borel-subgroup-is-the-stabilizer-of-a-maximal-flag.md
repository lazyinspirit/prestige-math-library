---
id: lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag
kind: lemma
title: A Borel subgroup of maximal dimension is the stabilizer of a maximal flag
dependency_level: 10
deps:
  - def-affine-scheme
  - def-axiom-of-choice
  - def-borel-subgroup-and-maximal-torus
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - lem-flag-variety-of-a-vector-space
  - lem-nonaffine-subgroup-scheme-stabilizer-of-line
  - thm-lie-kolchin-for-smooth-connected-solvable-groups
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Proof of Theorem 17.9(a), printed pp. 354-355
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, let $G$ be a smooth connected affine algebraic group over $k$ ([[def-affine-scheme]], [[def-group-scheme-over-a-field]]), and let $B\subseteq G$ be a smooth closed connected solvable subgroup of the largest possible dimension among smooth connected solvable subgroup varieties ([[def-borel-subgroup-and-maximal-torus]], [[def-morphism-and-closed-subgroup-scheme]]). Then there is a finite-dimensional rational representation $V$ of $G$ and a maximal flag $F$ in $V$ such that $B$ is exactly the scheme-theoretic stabilizer of $F$. In particular $B$ is a Borel subgroup, and every smooth closed connected solvable subgroup of $G$ of the largest possible dimension among smooth connected solvable subgroup varieties is the scheme-theoretic stabilizer of a maximal flag in some finite-dimensional rational representation of $G$.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected affine $k$-group $G$, and a closed connected solvable subgroup $B\subseteq G$ of the largest possible dimension.

[F1] Assume AC. For every closed subgroup $H\subseteq G$ there is a finite-dimensional rational representation $V$ of $G$ and a line $L\subseteq V$ such that $H$ is exactly the scheme-theoretic stabilizer of $L$ (Chevalley's line-stabilizer theorem for affine algebraic groups). ([[lem-nonaffine-subgroup-scheme-stabilizer-of-line]])

[F2] Assume AC. A smooth connected solvable affine group over an algebraically closed field is trigonalizable: every finite-dimensional rational representation admits a basis in which the group acts through upper triangular matrices, so it has $B$-stable flags of every length. ([[thm-lie-kolchin-for-smooth-connected-solvable-groups]])

[F3] For a maximal flag $F$ in a finite-dimensional representation $V$, the scheme-theoretic stabilizer of $F$ is the closed subgroup scheme of elements preserving every step of $F$; if the first step of $F$ is the line $L$, the stabilizer of $F$ is contained in the stabilizer of $L$. ([[lem-flag-variety-of-a-vector-space]], [[def-borel-subgroup-and-maximal-torus]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected affine $k$-group $G$, and a smooth closed connected solvable subgroup $B$ of largest possible dimension among smooth connected solvable subgroup varieties.

1.1 By [F1] there is a finite-dimensional rational representation $V$ of $G$ and a line $L\subseteq V$ such that $B$ is exactly the scheme-theoretic stabilizer of $L$ in $G$. Consider the quotient $V/L$, on which $B$ acts; by [F2] the smooth solvable connected group $B$ has a $B$-stable maximal flag $0\subset W_1\subset\dots\subset V/L$. [F1, F2]

2.1 Pulling back the flag of [step 1.1] along $V\to V/L$ and prepending $0\subset L$ gives a maximal flag $F:0\subset L\subset L+W_1\subset\dots\subset V$ that is $B$-stable: each intermediate subspace is $B$-stable because $L$ and the $W_i$ are. [F2, step 1.1]

3.1 Let $H\subseteq G$ be the scheme-theoretic stabilizer of $F$. Then $B\subseteq H$ because $F$ is $B$-stable, and $H$ is a closed subgroup scheme whose action preserves the first step $L$ of $F$, so $H$ is contained in the scheme-theoretic stabilizer of $L$, which is $B$ by [F1]. Hence $H\subseteq B$, and with $B\subseteq H$ we get $H=B$: $B$ is exactly the stabilizer of the maximal flag $F$. [F1, F3, step 2.1]

4.1 The subgroup $B$ is smooth, connected and solvable by hypothesis. A strict inclusion between smooth connected closed subgroup varieties forces a strict dimension increase, since both are irreducible. In particular no smooth connected solvable subgroup can strictly contain $B$, since $B$ has maximum dimension. Thus $B$ is Borel in the stated subgroup-variety convention, and step 3.1 proves the asserted scheme-theoretic flag stabilizer description for every such largest-dimensional $B$. [step 3.1] ∎