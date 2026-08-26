---
id: lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one
kind: lemma
title: "The homeomorphism $x \\mapsto x + c(x)$ sends the Cantor set onto a compact set of Lebesgue measure $1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two,
       cor-cantor-set-is-an-uncountable-lebesgue-null-set, thm-cantor-function-properties,
       thm-open-subsets-of-r-structure, thm-lebesgue-measure-of-a-box-of-every-kind,
       thm-lebesgue-measure-is-a-complete-measure, thm-finite-and-countable-subadditivity-of-measures,
       thm-heine-borel-characterisation-r, def-open-cover-r, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $C \subseteq [0,1]$ be the Cantor set
and let $\psi(x)=x+c(x)$ be the homeomorphism of
[[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]].
Then

$$K:=\psi[C] \subseteq [0,2]$$

is compact and Lebesgue measurable, with $\lambda(K)=1$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the Cantor set $C \subseteq [0,1]$, and the map $\psi(x)=x+c(x)$.

[L1] $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$ ([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]]).

[L2] The Cantor set is an uncountable subset of $\mathbb{R}$ of Lebesgue measure zero ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]).

[L3] The Cantor function is constant on every interval $[u,v]$ with $u<v$, $u,v \in C$ and $(u,v)\cap C=\varnothing$, and every point of $[0,1]\setminus C$ lies in such an interval ([[thm-cantor-function-properties]], claim 4).

[L4] Every open subset of $\mathbb{R}$ is a countable disjoint union of open intervals, namely its order components ([[thm-open-subsets-of-r-structure]]).

[L5] Assuming countable choice, every interval with endpoints included or excluded in any pattern is Lebesgue measurable with its usual length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L6] Assuming countable choice, $(\mathbb{R},\mathcal{L}(\mathbb{R}),\lambda)$ is a complete measure space ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L7] Finite and countable subadditivity of measures ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L8] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

## Proof

**Proof technique:** direct.

1.1 The complement $(0,1)\setminus C$ is open, because $C$ is closed by the definition of the Cantor set. By [L4] write it as a countable disjoint union $\bigsqcup_{k \in \mathbb{N}} I_k$ of nonempty open intervals. For each $k$ there are endpoints $u_k < v_k$ in $C$ with $I_k=(u_k,v_k)$ and $(u_k,v_k)\cap C=\varnothing$. [L3, L4, construct]

2.1 Fix $k$. By [L3] the Cantor function is constant on $[u_k,v_k]$; write that value as $\alpha_k$. Then $\psi(x)=x+\alpha_k$ for every $x \in I_k$, so $\psi[I_k]=(u_k+\alpha_k,\ v_k+\alpha_k)$ is an open interval and $\lambda(\psi[I_k])=\lambda(I_k)=v_k-u_k$ by [L5]. [step 1.1, L3, L5, construct]

3.1 The intervals $\psi[I_k]$ are pairwise disjoint because $\psi$ is injective by [L1]. They cover $\psi[(0,1)\setminus C]$, so countable additivity on the disjoint family and step 2.1 give $\lambda(\psi[(0,1)\setminus C])=\sum_{k=0}^{\infty}\lambda(\psi[I_k])=\sum_{k=0}^{\infty}\lambda(I_k)=\lambda((0,1)\setminus C)=1$, because [L2] says $\lambda(C)=0$ and [L5] says $\lambda([0,1])=1$. [step 2.1, L1, L2, L5, L6, L7]

4.1 The set $K=\psi[C]$ is compact: $C$ is closed and bounded, hence compact by [L8], and the continuous map $\psi$ carries compact sets to compact sets by [L1]. Also $[0,2]=K \sqcup \psi[(0,1)\setminus C]$, with disjointness from injectivity of $\psi$, so [L5] and step 3.1 give $2=\lambda([0,2])=\lambda(K)+1$. Therefore $\lambda(K)=1$. [step 3.1, L1, L5, L8] ∎
