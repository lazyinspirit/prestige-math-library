---
id: alg-pomdp-witness-backup
kind: algorithm
title: "Exhaustive finite-horizon POMDP alpha-vector backup"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-pomdp
  - def-sum-over-a-finite-index-set
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kaelbling, Littman, and Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "Complete PDF; §4.1–4.3, PDF pp. 11–16. The local procedure is exhaustive and does not claim the paper's optimized LP witness-search complexity."
    - title: "Pascal Poupart, CS 886 Lecture 13: POMDPs, University of Waterloo"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf"
      locator: "Complete lecture, slides 8–15 and 19."
---

## Definition

Input a finite POMDP, a horizon $H\in\mathbb N$, and its discount $\gamma\in[0,1]$. A depth-zero policy tree is the empty continuation and has the zero vector $\alpha_0:S\to\mathbb R$. Recursively, a depth-$(h+1)$ policy tree consists of a root action $a\in A$ and one depth-$h$ continuation tree for each observation $o\in\Omega$. If the continuation vectors are $(\alpha_o)_{o\in\Omega}$, assign the tree the vector

$$\alpha_{a,(\alpha_o)}(s)=r(s,a)+\gamma\sum_{s'\in S}T(s'\mid s,a)\sum_{o\in\Omega}O(o\mid s')\alpha_o(s')\qquad(s\in S).$$

Set $\Gamma_0=\{\alpha_0\}$. For each $h=0,\ldots,H-1$, form $\Gamma_{h+1}$ from every action $a\in A$ and every tuple $(\alpha_o)_{o\in\Omega}\in\Gamma_h^{\Omega}$ using the displayed formula, treating $\Gamma_{h+1}$ as a set so equal vectors are stored once. Return $(\Gamma_0,\ldots,\Gamma_H)$. This procedure exhaustively enumerates finite policy-tree vectors; it does not perform linear-program witness pruning and makes no bit-complexity or polynomial-time claim.

## Definition references

[[def-finite-pomdp|A finite known model supplies the state, action, observation, transition, reward, and observation laws]].

[[def-sum-over-a-finite-index-set|Finite sums are defined independently of an enumeration of their finite index set]].

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[Poupart, University of Waterloo CS 886 Lecture 13](https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf).

## Remarks

The diagram shows a depth-two policy tree: the root chooses $a_0$; after the observation $x$ the continuation chooses $a_x$, and after $y$ it chooses $a_y$. The outgoing edges represent observations, not hidden states or rewards. Every observation has a branch, including an observation that has probability zero at a particular belief. The algebraic definition above, rather than the diagram, determines the procedure and its outputs.

```tikz
\begin{tikzpicture}[level distance=1.25cm,sibling distance=3.0cm]
  \node[draw,rounded corners] {$a_0$}
    child { node[draw,rounded corners] {$a_x$} edge from parent node[left] {$x$} }
    child { node[draw,rounded corners] {$a_y$} edge from parent node[right] {$y$} };
\end{tikzpicture}
```
