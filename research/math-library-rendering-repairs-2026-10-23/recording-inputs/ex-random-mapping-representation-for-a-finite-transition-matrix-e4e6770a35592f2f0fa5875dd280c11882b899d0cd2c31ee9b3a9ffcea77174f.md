---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-random-mapping-representation-for-a-finite-transition-matrix.json
  precheck: pass
id: ex-random-mapping-representation-for-a-finite-transition-matrix
kind: example
title: "Random-mapping representation for a finite transition matrix"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-bounded-function-form-of-the-markov-property, cor-canonical-markov-chain-on-path-space, def-independent-random-elements, def-identically-distributed-and-iid-random-variables, thm-grouping-independent-sigma-algebras]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Levin, Peres, Wilmer, Markov Chains and Mixing Times, Section 1.2"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf"
      locator: "Random-mapping definition and Proposition 1.5 with proof, printed pp. 5-7"
---

## Statement

Assume Choice. Let $S$ be finite and ordered and let $p$ be a transition
matrix. There is a measurable $F:S\times[0,1]\to S$ such that, for uniform
$U$, $F(x,U)$ has law $p(x,\cdot)$. If $X_0$ is an $S$-valued random element
and $U_1,U_2,\ldots$ are fresh IID uniforms, independent of $X_0$, then
$$X_{n+1}=F(X_n,U_{n+1})$$
is the $p$-chain.

## Facts & Assumptions

**Given:** Choice, the finite ordered state space, transition matrix, and, for the chain assertion, the $S$-valued random element and fresh uniforms in the statement.

[F1] Disjoint blocks of an independent family generate independent sigma-algebras. ([[thm-grouping-independent-sigma-algebras]])

[F2] The bounded-function conditional identity characterizes a Markov chain. ([[lem-bounded-function-form-of-the-markov-property]])

## Verification

1.1 Suppose first that $S=\{s_1,\ldots,s_d\}$ with $d\ge1$. For each row put [given] $$c_0(x)=0,\qquad c_j(x)=\sum_{k=1}^jp(x,s_k),\quad1\le j\le d.$$ Then $c_d(x)=1$. Define $$ F(x,u)=s_j\quad\text{when}\quad \begin{cases} c_{j-1}(x)\le u<c_j(x),&j<d,\\ c_{d-1}(x)\le u\le1,&j=d. \end{cases} $$ These intervals partition $[0,1]$ with a fixed endpoint convention, even when some row entries vanish. Since $S$ is finite, every inverse image is a finite union of measurable slices, so $F$ is measurable. [given]

2.1 Uniform interval lengths give [step 1.1] $$\mathbb P(F(x,U)=s_j)=c_j(x)-c_{j-1}(x)=p(x,s_j).$$ The possible singleton endpoint at $1$ has probability zero, so the last closed endpoint does not change this calculation. It covers row probabilities zero and one and the one-state case $d=1$. [step 1.1]

3.1 Let $\mathcal H_n=\sigma(X_0,U_1,\ldots,U_n)$; then $X_n$ is [F1, F2, step 1.1, step 2.1] $\mathcal H_n$-measurable and [F1] makes $U_{n+1}$ independent of $\mathcal H_n$. For each $s_j$, $$ 1_{\{F(X_n,U_{n+1})=s_j\}} =\sum_{i=1}^d1_{\{X_n=s_i\}}1_{\{U_{n+1}\in I_{ij}\}}, $$ where $I_{ij}$ is the row interval from step 1.1. Conditioning term by term and using step 2.1 gives $p(X_n,s_j)$. Summing over $s_j\in A$ proves the transition identity for every $A\subseteq S$, hence [F2] gives the $p$-chain. Empty/full $A$ and time zero are included. Choice is used only for conditional expectations and, if a canonical realization is requested, by its path-law supplier. [F1, F2, step 1.1, step 2.1]

4.1 Together with steps 1.1--3.1, consider $S=\varnothing$: the unique map [given, step 1.1, step 2.1, step 3.1] $\varnothing\times[0,1]\to\varnothing$ satisfies the row-law assertion vacuously, but no probability initial law—and hence no chain—exists on $S$. [given, step 1.1, step 2.1, step 3.1] ∎


## Remarks

For a concrete illustration, take $S=\{s_1,s_2\}$ and transition matrix
$$p=\begin{pmatrix}1/3&2/3\\3/4&1/4\end{pmatrix}.$$
The two bars show the row intervals from step 1.1. At the illustrated input
$u=1/2$, the first row gives $F(s_1,u)=s_2$, while the second gives
$F(s_2,u)=s_1$. Each internal boundary belongs to the interval on its right;
the endpoint $1$ belongs to the final interval.

```tikz
\begin{tikzpicture}[x=8cm,y=1cm]
\draw (0,1.6) rectangle (1,2.2);
\draw (0.333333,1.6) -- (0.333333,2.2);
\draw (0,0) rectangle (1,0.6);
\draw (0.75,0) -- (0.75,0.6);
\node[left] at (0,1.9) {$x=s_1$};
\node[left] at (0,0.3) {$x=s_2$};
\node at (0.166667,1.9) {$s_1$};
\node at (0.666667,1.9) {$s_2$};
\node at (0.375,0.3) {$s_1$};
\node at (0.875,0.3) {$s_2$};
\node[below] at (0,1.6) {$0$};
\node[below] at (0.333333,1.6) {$1/3$};
\node[below] at (1,1.6) {$1$};
\node[below] at (0,0) {$0$};
\node[below] at (0.75,0) {$3/4$};
\node[below] at (1,0) {$1$};
\draw[dashed] (0.5,-0.1) -- (0.5,2.7);
\node[above] at (0.5,2.7) {$u=1/2$};
\end{tikzpicture}
```

The bars illustrate alternative evaluations of $F$, not two simultaneous
chain updates. At time $n$, only the row $x=X_n$ is used, with the fresh input
$U_{n+1}$. The rigorous verification above is independent of the illustration.
