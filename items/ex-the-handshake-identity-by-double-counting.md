---
id: ex-the-handshake-identity-by-double-counting
kind: example
title: "For a finite symmetric irreflexive relation the sum of the neighbour counts is twice the number of unordered related pairs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-double-counting, def-a-finite-incidence-relation-and-its-fibres,
       thm-two-element-subsets-count, def-binomial-coefficient,
       def-sum-over-a-finite-index-set, thm-sum-rule, def-finite-cardinality,
       def-injection-surjection-bijection, thm-subset-of-a-finite-set,
       cor-cardinality-of-the-power-set, def-nat-finite-sum-and-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Handshaking lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Handshaking_lemma"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "Graph Theory, Chapter 1 (King Saud University notes)"
      url: "https://faculty.ksu.edu.sa/sites/default/files/Graph%20Chap%201Math%205301.pdf"
pipeline_run: null
---

## Example

Let $V$ be a finite set and $R \subseteq V \times V$ symmetric and irreflexive
([[def-a-finite-incidence-relation-and-its-fibres]], clause (d)), with neighbour
counts $d(x) := \lvert R_x\rvert$. Put

$$E \;:=\; \{\, S \in [V]^{2} \ :\ S = \{x,y\} \text{ for some } (x,y) \in R \,\},$$

the set of two-element subsets of $V$ whose elements are related. Then, in
$\mathbb{N}$,

$$\sum_{x \in V} d(x) \;=\; 2\,\lvert E\rvert .$$

**A concrete instance.** With $V := 4 = \{0,1,2,3\}$ and $R$ the symmetric
irreflexive relation whose related unordered pairs are $\{0,1\}$, $\{1,2\}$ and
$\{2,3\}$, the neighbour counts are $d(0) = 1$, $d(1) = 2$, $d(2) = 2$,
$d(3) = 1$, summing to $6 = 2\cdot 3$, and $\lvert E\rvert = 3$.

```tikz
\begin{tikzpicture}
  \node[draw,circle,inner sep=2pt] (v0) at (0,0) {$0$};
  \node[draw,circle,inner sep=2pt] (v1) at (2,0) {$1$};
  \node[draw,circle,inner sep=2pt] (v2) at (4,0) {$2$};
  \node[draw,circle,inner sep=2pt] (v3) at (6,0) {$3$};
  \draw[very thick] (v0) -- (v1);
  \draw[very thick] (v1) -- (v2);
  \draw[very thick] (v2) -- (v3);
  \node at (0,-0.65) {$d(0)=1$};
  \node at (2,-0.65) {$d(1)=2$};
  \node at (4,-0.65) {$d(2)=2$};
  \node at (6,-0.65) {$d(3)=1$};
  \node at (3,-1.4) {Each segment $\{x,y\}\in E$ represents $(x,y)$ and $(y,x)$ in $R$.};
\end{tikzpicture}
```

**The extreme instance.** If $R$ relates every pair of distinct elements of $V$
then $E = [V]^{2}$ and $d(x) = N - 1$ for every $x$, where $N := \lvert V\rvert$;
the identity then reads $N\,(N-1) = 2\binom{N}{2}$, which is
[[thm-two-element-subsets-count]].

## Facts & Assumptions

**Given:** A finite set $V$, a symmetric irreflexive relation $R \subseteq V \times V$, the neighbour counts $d(x) = \lvert R_x\rvert$, and the set $E$ above.

[L1] Double counting: $\sum_{x \in V}\lvert R_x\rvert = \lvert R\rvert$ in $\mathbb{N}$ ([[thm-double-counting]], [[def-a-finite-incidence-relation-and-its-fibres]], [[def-sum-over-a-finite-index-set]]).

[L2] $R$ is finite, and so is $[V]^{2}$ and hence its subset $E$ ([[def-a-finite-incidence-relation-and-its-fibres]], clause (a), [[def-binomial-coefficient]], [[cor-cardinality-of-the-power-set]], [[thm-subset-of-a-finite-set]]).

[L3] The sum rule for a finite partition, and a constant natural summand $\sum_{p \in S}c = \lvert S\rvert\cdot c$ ([[thm-sum-rule]], clause 2, [[def-sum-over-a-finite-index-set]], clause (c)). In particular, if $x\in V$ and $|V|=N$, then the disjoint union $V=\{x\}\sqcup(V\setminus\{x\})$ gives $|V\setminus\{x\}|=N-1$ ([[def-finite-cardinality]], [[def-nat-finite-sum-and-product]]).

[L4] If $x\ne y$, then $0\mapsto x$, $1\mapsto y$ is a bijection $2\to\{x,y\}$, so $|\{x,y\}|=|2|=2$; more generally, a bijection from a finite set transports its cardinality to the codomain ([[def-finite-cardinality]], clauses (a) and (c), [[def-injection-surjection-bijection]]).

[L5] $\lvert [V]^{2}\rvert = \binom{N}{2}$ and $2\binom{N}{2} = N(N-1)$ for every $N \in \mathbb{N}$ ([[thm-two-element-subsets-count]]).


## Verification

**Proof technique:** direct.

1.1 The pairing map. For $(x,y) \in R$ irreflexivity gives $x \ne y$, so $\{x,y\}$ has exactly two elements by [L4] and lies in $E$; write $\Psi(x,y) := \{x,y\}$, a map $R \to E$. It is surjective, since every $S \in E$ is $\{x,y\}$ for some $(x,y) \in R$ by the definition of $E$. [given, L2, L4, construct]

1.2 Every fibre of $\Psi$ has exactly two elements. Let $S = \{x,y\} \in E$ with $x \ne y$. A pair $(u,v) \in R$ with $\{u,v\} = S$ has $u \ne v$, so $(u,v)$ is $(x,y)$ or $(y,x)$; and both of these lie in $R$, since at least one of them does and $R$ is symmetric. So $\Psi^{-1}[\{S\}] = \{(x,y),(y,x)\}$, which has two elements because $x \ne y$. [given, L4]

2.1 Counting $R$ by the fibres of $\Psi$. The fibres of $\Psi$ are pairwise disjoint finite sets indexed by the finite set $E$, with union $R$, so [L3] gives $\lvert R\rvert = \sum_{S \in E}\lvert\Psi^{-1}[\{S\}]\rvert = \sum_{S \in E}2 = \lvert E\rvert\cdot 2$. [step 1.1, step 1.2, L2, L3]

3.1 Combining with [L1], $\sum_{x \in V}d(x) = \lvert R\rvert = 2\,\lvert E\rvert$, which is the identity. In the extreme case where $R$ relates every pair of distinct elements, $E = [V]^{2}$ and the neighbours of $x$ are exactly $V\setminus\{x\}$, so $d(x)=N-1$ by [L3]; the identity therefore reads $N(N-1) = 2\binom{N}{2}$ by [L3] and [L5]. [step 2.1, L1, L3, L5, given] ∎

## Remarks

- **Where symmetry is spent.** Only in step 1.2, to know that both ordered pairs over a related unordered pair lie in $R$; without it a fibre could have one element and the factor $2$ would be wrong. Irreflexivity is spent in step 1.1, to know that $\{x,y\}$ really is a two-element set.

- **This is double counting of one set, not two computations of two sets.** The relation $R$ is counted once by its row fibres, which gives the sum of the neighbour counts, and once by the fibres of $\Psi$, which gives twice the number of related unordered pairs. Both are instances of the sum rule over a partition.

- **No graph vocabulary is used.** The data are a finite set and a symmetric irreflexive relation on it, and $E$ is a set of two-element subsets. Nothing among this page's declared prerequisites defines a graph, and nothing here needs one.
