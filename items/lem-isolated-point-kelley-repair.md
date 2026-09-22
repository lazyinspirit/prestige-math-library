---
id: lem-isolated-point-kelley-repair
kind: lemma
title: "The isolated-point repair of Kelley's choice space"
status: published
origin: pipeline
deps: [def-compact-space, def-t0-and-t1-spaces, def-standard-topologies, def-topological-space, lem-finite-choice, def-countable, def-subspace-topology-top, def-disjoint-union-topology, thm-coproduct-universal-property]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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
product-compactness argument. We identify each summand with its tagged copy in the disjoint union, so the added point is distinct from every point of $A$. This is in contrast with the cofinite topology on
$A \cup \{\infty\}$ itself.

## Facts & Assumptions

**Given:** A set $A$; the cofinite space $A_c$; the sum $X_A = A_c \sqcup \{\infty\}$.

[F1] In the cofinite topology the open sets are $\varnothing$ and the sets with finite complement, and the closed sets are the whole space and the finite sets; the cofinite space is $T_1$ ([[def-standard-topologies]], [[def-t0-and-t1-spaces]]).

[F2] In the topological sum a subset $U\subseteq X_A$ is open exactly when its trace $U\cap A$ is open in $A_c$; independently, its trace on the singleton summand may be either $\varnothing$ or $\{\infty\}$, both of which are open. Thus $\varnothing$ and $\{\infty\}$ are open, and the summand $A$ is clopen ([[def-disjoint-union-topology]], [[thm-coproduct-universal-property]]).

[F3] A space is compact when every open cover has a finite subcover; in particular, the empty space and a one-point space are compact directly from this definition ([[def-compact-space]]).

[F4] For a function $F$ with domain a natural number $n$, if each $F(j)$ is nonempty then its family of values $F[n]$ has a choice function ([[lem-finite-choice]]). A finite set admits a bijection from some natural number; fixing one such enumeration for one finite set is a single existential instantiation ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X_A$ is nonempty, which it is because $\infty$ is one of its points. [given]

2.1 The cofinite space $A_c$ is compact. Given an open cover $\mathcal U$, if $A=\varnothing$ the empty subfamily covers it. Otherwise fix $a\in A$ and $U_0\in\mathcal U$ containing $a$. By [F1] the complement $C=A\setminus U_0$ is finite. Fix a natural number $n$ and a bijection $e:n\to C$ by [F4], including the empty enumeration when $C=\varnothing$. Define $F(j)=\{U\in\mathcal U:e(j)\in U\}$ for $j<n$. Every value is nonempty because $\mathcal U$ covers $A$. Apply [F4] to this function and let $c$ choose from its family of values. Then $U_0$ together with the list $c(F(j))$, $j<n$, is a finite subcover. No simultaneous choice of enumerations for an infinite family is involved. [step 1.1, F1, F3, F4]

2.2 $X_A$ is $T_1$: for distinct points $x,y$ of $X_A$, the set $X_A \setminus \{y\}$ is open — if $y = \infty$ it is $A$, which is cofinite in $A$ and open in the sum by [F2]; if $y \in A$ it is $(A \setminus \{y\}) \cup \{\infty\}$, whose trace on $A$ is cofinite, hence open in the sum by [F2] — and symmetrically for $X_A \setminus \{x\}$. [step 1.1, F1, F2]

3.1 Let $\mathcal V$ be an open cover of $X_A$. By [F2], $\{V\cap A:V\in\mathcal V\}$ is an open cover of $A_c$. Step 2.1 and [F3] give either the empty subcover or a finite list of traces $W_j$, $j<m$, covering $A$. Define $G(j)=\{V\in\mathcal V:V\cap A=W_j\}$ for $j<m$. Each value is nonempty by the definition of the trace family. Apply [F4] to $G$ and choose $d$ on its family of values; the list $d(G(j))$, $j<m$, covers $A$. Fix one $V_\infty\in\mathcal V$ containing $\infty$, which exists since $\mathcal V$ covers $X_A$. Adjoining it to this finite list covers $X_A$, proving compactness. When $A$ is empty take $m=0$, so $V_\infty$ alone suffices. [step 2.1, F2, F3, F4]

4.1 $A$ is closed in $X_A$: its complement $\{\infty\}$ is open in the sum by [F2], and the subspace topology that $A$ inherits is the cofinite topology of $A_c$; hence $A$ is a closed subspace of $X_A$ in the sense of [[def-subspace-topology-top]]. [step 2.2, F1, F2] ∎

## Remarks

- **Why the naive coordinate fails.** If instead $A \cup \{\infty\}$ carries the cofinite topology, then for infinite $A$ the set $A$ is not closed: its complement $\{\infty\}$ is finite and hence closed, while a proper closed set in a cofinite space must itself be finite. Thus $A$ is open but not closed. That failure is the content of the companion counterexample.

- **What compactness costs.** Compactness of $A_c$ uses finite choice only, and the sum with a point adds no further cost, so the repaired coordinate is available in ZF; this is what makes it usable in the product argument below.
