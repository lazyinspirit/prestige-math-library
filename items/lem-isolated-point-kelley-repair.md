---
id: lem-isolated-point-kelley-repair
kind: lemma
title: "The isolated-point repair of Kelley's choice space"
status: draft
origin: pipeline
deps: [def-compact-space, def-t0-and-t1-spaces, def-standard-topologies, def-topological-space, lem-finite-choice, def-subspace-topology-top, def-disjoint-union-topology, def-product-topology, thm-coproduct-universal-property, thm-finite-products-of-compact-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Kyriakos Keremedis and Eleftherios Tachtsis, Wallman Compactifications and Tychonoff's Compactness Theorem in ZF"
      url: "https://topology.nipissingu.ca/tp/reprints/v42/tp42021.pdf"
      locator: "Definitions, Proposition 2.11 and Proposition 2.13, journal pp. 279-283"
    - title: "J. L. Kelley, The Tychonoff product theorem implies the axiom of choice, Fund. Math. 37 (1950), 75-76"
      url: "https://doi.org/10.4064/fm-37-1-75-76"
      locator: "The T1 restriction of the product theorem"
---

## Statement

Let $A$ be a set and let $A_c$ be $A$ with the cofinite topology
([[def-standard-topologies]]). Then the topological sum
$X_A := A_c \sqcup \{\infty\}$ of $A_c$ with a one-point space
([[def-disjoint-union-topology]]) is compact ([[def-compact-space]]) and $T_1$
([[def-t0-and-t1-spaces]]), and $A$ is a closed subspace of $X_A$
([[def-subspace-topology-top]]). This is the repaired coordinate of the
product-compactness argument, in contrast with the cofinite topology on
$A \cup \{\infty\}$ itself.

## Facts & Assumptions

**Given:** A set $A$; the cofinite space $A_c$; the sum $X_A = A_c \sqcup \{\infty\}$.

[F1] In the cofinite topology the open sets are $\varnothing$ and the sets with finite complement, and the closed sets are the whole space and the finite sets; the cofinite space is $T_1$ ([[def-standard-topologies]], [[def-t0-and-t1-spaces]]).

[F2] In the topological sum an open set is a union of an open set of $A_c$ with an open set of the one-point space, so a subset of $X_A$ is open exactly when its trace on $A$ is cofinite or empty and it either contains $\infty$ or is a cofinite subset of $A$; in particular $\{\infty\}$ is open and $A$ is closed ([[def-disjoint-union-topology]], [[thm-coproduct-universal-property]]).

[F3] A space is compact when every open cover has a finite subcover, and a sum of finitely many compact spaces is compact ([[def-compact-space]], [[thm-finite-products-of-compact-spaces]]).

[F4] Finite choice: for a finite family of nonempty sets there is a choice function ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X_A$ is nonempty, which it is because $\infty$ is one of its points. [given]

2.1 The cofinite space $A_c$ is compact: given an open cover $\mathcal{U}$ of $A_c$ with $A_c \ne \varnothing$, fix $U_0 \in \mathcal{U}$ and $a \in U_0$; then $A_c \setminus U_0$ is finite by [F1], so for each of its finitely many points choose a covering member by [F4], and these finitely many members together with $U_0$ cover $A_c$. [step 1.1, F1, F4]

2.2 $X_A$ is $T_1$: for distinct points $x,y$ of $X_A$, the set $X_A \setminus \{y\}$ is open — if $y = \infty$ it is $A$, which is cofinite in $A$ and open in the sum by [F2]; if $y \in A$ it is $(A \setminus \{y\}) \cup \{\infty\}$, whose trace on $A$ is cofinite, hence open in the sum by [F2] — and symmetrically for $X_A \setminus \{x\}$. [step 1.1, F1, F2]

3.1 $X_A$ is compact: it is the sum of the compact space $A_c$ and the one-point space, so by [F3] every open cover of $X_A$ has a finite subcover; explicitly, an open cover of the sum restricts to covers of the two summands, and a finite subcover of each gives a finite subcover of the sum. [step 2.1, F3]

4.1 $A$ is closed in $X_A$: its complement $\{\infty\}$ is open in the sum by [F2], and the subspace topology that $A$ inherits is the cofinite topology of $A_c$; hence $A$ is a closed subspace of $X_A$ in the sense of [[def-subspace-topology-top]]. [step 2.2, F1, F2] ∎

## Remarks

- **Why the naive coordinate fails.** If instead $A \cup \{\infty\}$ carries the cofinite topology, then for infinite $A$ the set $A$ is not closed: its complement $\{\infty\}$ is finite, hence closed rather than open, and $A$ is open but not closed. That failure is the content of the companion counterexample.

- **What compactness costs.** Compactness of $A_c$ uses finite choice only, and the sum with a point adds no further cost, so the repaired coordinate is available in ZF; this is what makes it usable in the product argument below.
