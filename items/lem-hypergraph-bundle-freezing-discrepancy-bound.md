---
id: lem-hypergraph-bundle-freezing-discrepancy-bound
kind: lemma
title: "Freezing a coordinate bundle gives a discrepancy test"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-finite-coordinate-hypergraph-bundle
  - def-finite-coordinate-conditional-expectation-energy-and-discrepancy
  - lem-finite-sum-reindexing-and-fubini
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§4 Lemma 4.3, the c-term estimate, printed pp. 21–22."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 461–462 (PDF pp. 481–482), higher-order framework only; the complete discrepancy reduction is proved locally."
---

## Statement

Let $(K,\mathcal G,\pi)$ be a finite coordinate bundle over a downward-closed face family. Let $g_0\in\mathcal G$ have maximal cardinality $j\ge1$, put $e=\pi(g_0)$, and let $E\in\mathcal A_e$. For fine face algebras $\mathcal B_f\subseteq\mathcal A_f$ on $f\in\partial e$, define
$$c_e=1_E-\mathbb E\!\left(1_E\mid\bigvee_{f\in\partial e}\mathcal B_f\right).$$
For any events $A_{\pi(g)}\subseteq V_{\pi(g)}$ indexed by $g\in\mathcal G\setminus\{g_0\}$, the bundle average with the $g_0$ factor replaced by $c_e$ satisfies
$$\left|\mathbb E_{v\in V_K}\left[c_e(v|_{g_0})\prod_{g\in\mathcal G\setminus\{g_0\}}1_{A_{\pi(g)}}(v|_g)\right]\right| \le \Delta_e(E\mid(\mathcal B_f)_{f\in\partial e}).$$
The assertion allows repeated vertex-class labels among distinct bundle coordinates.

## Statement references

[Tao, §4 Lemma 4.3, c-term estimate](https://arxiv.org/pdf/math/0503572v2)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** A finite downward-closed coordinate bundle, a maximal-cardinality edge $g_0$, an event $E$ on its projected face $e=\pi(g_0)$, and fine algebras on all codimension-one subfaces.

[F1] In a coordinate bundle, $\pi$ is injective on every edge, and every edge factor is evaluated using its own listed coordinates, even when different coordinates have the same image ([[def-finite-coordinate-hypergraph-bundle]]).

[F2] The discrepancy is the maximum correlation with a product of one event from each codimension-one face algebra ([[def-finite-coordinate-conditional-expectation-energy-and-discrepancy]]).

[F3] Finite product averages can be reindexed and evaluated by iterated finite averages ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

1.1 Freeze all coordinates outside $g_0$. For each other edge $g$, maximality gives $|g|\le j$ and $g\ne g_0$, so $g\cap g_0$ is a proper subset of $g_0$. Since $\pi|_{g_0}$ is a bijection onto $e$, its image is contained in some $f\in\partial e$; after the outside coordinates are fixed, the factor $1_{A_{\pi(g)}}(v|_g)$ is an event depending only on the coordinates of that face $f$. Assign each such factor to one containing face and intersect the factors assigned to the same face. [given, F1, construct]

2.1 Thus the product of all the other factors, as a function of the coordinates in $g_0$, is $\prod_{f\in\partial e}1_{E_f}$ for events $E_f\in\mathcal A_f$. The average of $c_e$ times this product over the $g_0$ coordinates has absolute value at most the discrepancy in [F2]. [step 1.1, F2]

3.1 By [F3], the full bundle average is the iterated average over the frozen coordinates and the $g_0$ coordinates. Average the uniform bound in step 2.1 over the frozen coordinates and use the triangle inequality for finite sums; the full bundle average is at most the same discrepancy. [step 2.1, F1, F3, algebra] ∎
