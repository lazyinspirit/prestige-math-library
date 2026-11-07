---
id: def-finite-coordinate-conditional-expectation-energy-and-discrepancy
kind: definition
title: "Finite coordinate conditional expectation, energy and discrepancy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-partite-hypergraph-system-and-coordinate-algebras
  - def-expectation-on-a-finite-probability-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§1 Definition 1.8, printed pp. 3–4; §2 definitions (8) and (9), printed pp. 7–8."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 454–460 (PDF pp. 474–480), finite energy/projection framework only; no all-order counting proof is attributed to the book."
---

## Definition

Let $\mathcal B$ be a finite algebra on the nonempty finite space $V_J$. Each point $x\in V_J$ lies in a unique atom $C$ of $\mathcal B$. For a real function $f$ on $V_J$, its conditional average on $\mathcal B$ is the function
$$\mathbb E(f\mid\mathcal B)(x)=\frac{1}{|C|}\sum_{y\in C}f(y).$$
For an event $E\subseteq V_J$, its $\mathcal B$-energy is
$$\mathcal E_{\mathcal B}(E)=\mathbb E\!\left(\mathbb E(1_E\mid\mathcal B)^2\right).$$

For a nonempty face $e\subseteq J$, let $\partial e=\{f\subsetneq e:|f|=|e|-1\}$ be its skeleton. Write $\bigvee_{f\in I}\mathcal B_f$ for the least finite algebra containing the algebras $\mathcal B_f$ in the finite family indexed by $I$; for the empty family this is the trivial algebra $\{\varnothing,V_J\}$. Given finite algebras $\mathcal B_f\subseteq\mathcal A_f$ for $f\in\partial e$ and an event $E\in\mathcal A_e$, define
$$\Delta_e(E\mid(\mathcal B_f)_{f\in\partial e}) =\max_{E_f\in\mathcal A_f,\ f\in\partial e} \left|\mathbb E\!\left[\left(1_E-\mathbb E\!\left(1_E\mid\bigvee_{f\in\partial e}\mathcal B_f\right)\right) \prod_{f\in\partial e}1_{E_f}\right]\right|.$$
The maximum is over a finite nonempty set of test tuples; when $|e|=1$, the skeleton consists of the empty face and its coordinate algebra is trivial. For the empty face put $\partial\varnothing=\varnothing$ and $\Delta_\varnothing(E\mid())=0$; its only coordinate events are the empty set and the full singleton, so all conditional-energy gains on it are zero.

## Definition references

[Tao, Definition 1.8 and §2 definitions (8)–(9)](https://arxiv.org/pdf/math/0503572v2)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)
