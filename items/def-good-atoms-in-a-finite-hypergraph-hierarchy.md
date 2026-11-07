---
id: def-good-atoms-in-a-finite-hypergraph-hierarchy
kind: definition
title: "Good atoms in a finite hypergraph hierarchy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - thm-finite-hypergraph-regularity-in-all-face-orders
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§3 Definition 3.1, printed p. 16; the power thresholds and empty-face conventions are local."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 461–462 (PDF pp. 481–482), informal higher-order counting framework; not a source for the complete good-atom proof."
---

## Definition

Let $\mathcal H_d$ be a finite $d$-uniform pattern with $d\ge1$, and let $\mathcal H_j$ be its downward face families. Fix a regularity hierarchy with coarse and fine finite algebras $\mathcal B_f\subseteq\mathcal B'_f\subseteq\mathcal A_f$ for each proper face $f\in\mathcal H_j$, $j<d$, and a coarse finite algebra $\mathcal B_e\subseteq\mathcal A_e$ on each top face $e\in\mathcal H_d$. Let $M_j\ge1$ be the hierarchy parameters. Choose one atom $A_e$ of $\mathcal B_e$ for every $e\in\mathcal H=\bigcup_{j=0}^d\mathcal H_j$; their full intersection is allowed to be empty.

For $e\in\mathcal H_j$, define its skeleton support and full proper-face support by
$$S_e=\bigcap_{f\in\partial e}A_f,\qquad S_{<e}=\bigcap_{f\subsetneq e}A_f,$$
where an empty intersection is $V_J$. Define the conditional density
$$p_e=\begin{cases} \displaystyle\frac{\mathbb E(1_{A_e}1_{S_e})}{\mathbb E(1_{S_e})},&\mathbb E(1_{S_e})>0,\\ 1,&\mathbb E(1_{S_e})=0, \end{cases}$$
and the coarse-to-fine error
$$b_e=\mathbb E\!\left(1_{A_e}\mid\bigvee_{f\in\partial e}\mathcal B'_f\right) -\mathbb E\!\left(1_{A_e}\mid\bigvee_{f\in\partial e}\mathcal B_f\right).$$
For positive integer thresholds $L(M_j)$ and $F(M_j)$, the atom family is good if, for every $e\in\mathcal H_j$,
$$p_e\ge\frac1{L(M_j)},\qquad \mathbb E(|b_e|^2 1_{S_{<e}})\le\frac1{F(M_j)}\mathbb E(1_{S_{<e}}).$$
For the empty face, both supports are $V_J$, the conditional density is $1$, and $b_e=0$.

## Definition references

[Tao, §3 Definition 3.1](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)
