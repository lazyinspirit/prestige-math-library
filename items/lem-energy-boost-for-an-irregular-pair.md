---
id: lem-energy-boost-for-an-irregular-pair
kind: lemma
title: "An irregularity witness raises the pair energy by more than $\\epsilon^4|X||Y|/n^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-energy-of-a-vertex-partition, def-epsilon-regular-pair]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.1.13"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $G$ have order $n>0$, let $X,Y\subseteq V(G)$ be nonempty, and suppose that $A\subseteq X$, $B\subseteq Y$ witness that $(X,Y)$ is not $\epsilon$-regular. If $\mathcal A=\{A,X\setminus A\}$ and $\mathcal B=\{B,Y\setminus B\}$ after empty cells are omitted, then
$$q(\mathcal A,\mathcal B)-\frac{|X||Y|}{n^2}d(X,Y)^2>\epsilon^4\frac{|X||Y|}{n^2}.$$

## Facts & Assumptions

**Given:** An irregular pair and witness sets as in the Statement.

[L1] Such witnesses satisfy $|A|\ge\epsilon|X|$, $|B|\ge\epsilon|Y|$, and $|d(A,B)-d(X,Y)|>\epsilon$ ([[def-epsilon-regular-pair]]).

[L2] Pair energy is the product-size-weighted mean square of the densities of the refined subpairs ([[def-energy-of-a-vertex-partition]]).

## Proof

**Proof technique:** direct.

1.1 Choose $(x,y)$ uniformly from $X\times Y$, and let $Z$ be the density between the cells of $\mathcal A$ and $\mathcal B$ containing $x$ and $y$. Double-counting gives $\mathbb E Z=d(X,Y)$, and [L2] identifies $|X||Y|\mathbb E(Z^2)/n^2$ with $q(\mathcal A,\mathcal B)$. [given, L2, algebra]

2.1 Therefore the energy gain in the Statement is $(|X||Y|/n^2)\operatorname{Var}(Z)=(|X||Y|/n^2)\mathbb E((Z-d(X,Y))^2)$. [step 1.1, algebra]

2.2 On the event $(x,y)\in A\times B$, which has probability $|A||B|/(|X||Y|)\ge\epsilon^2$ by [L1], the random variable equals $d(A,B)$ and differs from its mean by more than $\epsilon$. [L1, step 1.1]

3.1 Restricting the nonnegative expectation in step 2.1 to this event gives a strict lower bound $\epsilon^2\epsilon^2|X||Y|/n^2$, which is the asserted boost. [step 2.1, step 2.2, algebra] ∎
