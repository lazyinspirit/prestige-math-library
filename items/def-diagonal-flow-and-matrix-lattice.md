---
id: def-diagonal-flow-and-matrix-lattice
kind: definition
title: "Diagonal flow and lattice attached to a matrix of linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-unimodular-lattice-space
  - def-khintchine-groshev-matrix-approximation-set
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality"
---

## Definition

Let $m,n\ge1$, let $A\in M_{m,n}(\mathbb R)$, and put
$$L_A=\begin{pmatrix}I_m&A\\0&I_n\end{pmatrix},\qquad g_t=\operatorname{diag}(e^{t/m}I_m,e^{-t/n}I_n),\qquad \Lambda_A=L_A\mathbb Z^{m+n}.$$
The matrix $L_A$ and every $g_t$ have determinant one. The diagonal flow attached to $A$ is the orbit $t\mapsto g_t\Lambda_A$ in $X_{m+n}$ for $t\ge0$. This convention uses column vectors $q\in\mathbb Z^n$ and approximants $Aq+p$ with $p\in\mathbb Z^m$.

To compare with a supplier using row vectors $q$ and a matrix $X\in M_{n,m}$, choose $N\in M_{m,n}(\mathbb Z)$ so $A_0=A-N\in[0,1]^{m\times n}$ and set $X=A_0^T$. Then $q^TX=(A_0q)^T$; also $Aq+p=A_0q+(p+Nq)$ and $L_A=L_{A_0}L_N$ with $L_N\in\mathrm{SL}_{m+n}(\mathbb Z)$, so the approximation condition and lattice orbit are unchanged.

## Definition references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.


## Facts & Assumptions

**Given:** The lattice-space quotient and the matrix approximation convention.

[F1] A determinant-one matrix represents a unimodular lattice in $X_{m+n}$. [[def-unimodular-lattice-space]]

[F2] The matrix supplier writes $X\in M_{n,m}$ and the form as $q^TX+p^T$ with sup norms. [[def-khintchine-groshev-matrix-approximation-set]]
