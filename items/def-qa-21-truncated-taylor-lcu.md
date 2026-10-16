---
id: def-qa-21-truncated-taylor-lcu
kind: definition
title: Finite Taylor LCU polynomial
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-21-lcu-input-and-access-model
  - def-self-adjoint-and-normal-endomorphism
justified_by: []
axiom_use: None; the sums and product-term index sets are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.5)–(28.14), printed pp.141–142: truncated Taylor polynomial and its ordered product-term LCU."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eqs. (9.4)–(9.5), printed pp.74–76: Taylor expansion and ordered products of Hamiltonian terms."
---

## Definition

Let $H=\sum_{j=0}^{m-1}a_jV_j$ on a finite-dimensional complex-inner-product space, with $m\ge1$, real $a_j$ and Hermitian unitaries $V_j$, and put $\Lambda=\sum_j|a_j|$. For real $h$ and integer $K\ge0$, define
$$M_K(h):=\sum_{k=0}^{K}\frac{(-ihH)^k}{k!}.$$
Its ordered product-term LCU list has one empty tuple for $k=0$, with coefficient $1$ and unitary $I$, and for each $1\le k\le K$ and ordered tuple $(j_1,\ldots,j_k)$ has coefficient
$$c_{k,\mathbf j}:=\frac{(-i)^k h^k a_{j_1}\cdots a_{j_k}}{k!}$$
and unitary $V_{j_1}\cdots V_{j_k}$. Distinct tuples remain distinct entries even if their product unitaries coincide. The absolute coefficient sum of this listed representation is
$$s_K(h):=\sum_{k=0}^{K}\frac{(\Lambda|h|)^k}{k!}.$$

Whenever $s_K(h)\le2$, append two distinct identity entries with coefficients $+q$ and $-q$, where $q=(2-s_K(h))/2$. They leave the represented matrix unchanged and raise the listed absolute coefficient sum to exactly $2$. If $q=0$, the zero-weight entries may be retained with zero preparation amplitude or omitted. The polynomial, coefficient phases, ordered tuple index, and any numerical precision used to generate them are part of the finite input/access record; no term product, coefficient table, PREPARE circuit, or SELECT circuit is free.
