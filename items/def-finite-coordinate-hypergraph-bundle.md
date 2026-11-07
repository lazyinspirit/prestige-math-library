---
id: def-finite-coordinate-hypergraph-bundle
kind: definition
title: "Finite coordinate bundles and duplication spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-partite-hypergraph-system-and-coordinate-algebras
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§4 Definition 4.1 and doubled-bundle construction, printed pp. 19–23."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 454–462 (PDF pp. 474–482), hypergraph-bundle motivation and counting framework; complete bundle induction is not attributed to the book."
---

## Definition

Let $\mathcal H$ be a downward-closed family of subsets of $J$. A finite coordinate bundle over $\mathcal H$ consists of a finite set $K$, a map $\pi:K\to J$, and a downward-closed family $\mathcal G\subseteq\mathcal P(K)$ such that for each $g\in\mathcal G$, the restriction $\pi|_g$ is injective and $\pi(g)\in\mathcal H$. Its coordinate space is $V_K=\prod_{k\in K}V_{\pi(k)}$; distinct elements of $K$ give independent coordinates even when they have the same image under $\pi$. The expectation over $V_K$ is the normalized uniform average on this nonempty finite product. For $g\in\mathcal G$, write $v|_g=(v_k)_{k\in g}$ in the corresponding face-coordinate space.

For events $A_e\subseteq V_e$ and numbers $p_e\in[0,1]$ indexed by $e\in\mathcal H$, define the bundle count and its main product by
$$T_{\mathcal G}(A)=\mathbb E_{v\in V_K}\prod_{g\in\mathcal G}1_{A_{\pi(g)}}(v|_g), \qquad q_{\mathcal G}(p)=\prod_{g\in\mathcal G}p_{\pi(g)}.$$
Products are indexed by edges $g$, so repeated projected faces contribute with their multiplicity.

Given a selected face $g_0\subseteq K$, the duplication outside $g_0$ is the quotient of $K\times\{0,1\}$ that identifies $(k,0)$ with $(k,1)$ exactly for $k\in g_0$. The two copies therefore share the coordinates on $g_0$ and have distinct independent coordinates elsewhere. The projection to $J$ is induced by $\pi$. If a downward-closed edge family is copied into this quotient, coincident copied edges are included once as sets; every edge contained in $g_0$ is shared, and every other copied edge retains its two copies.

## Definition references

[Tao, Definition 4.1 and doubled-bundle construction](https://arxiv.org/pdf/math/0503572v2)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)
