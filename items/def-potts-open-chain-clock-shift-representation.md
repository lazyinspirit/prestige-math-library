---
id: def-potts-open-chain-clock-shift-representation
kind: definition
title: "Open Potts clock-shift Temperley–Lieb generators"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-generator-presentation
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.2–2.1.4, equations (2.4), (2.6)–(2.10), PDF pp. 4–6: the Q = 2, 3, 4 matrices, loop parameters and open-chain Hamiltonian."
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "Chapter 2, §§2.1.1–2.1.4, PDF pp. 4–6: loop and idempotent normalizations in the finite diagram representation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $Q\in\{2,3,4\}$, $L\ge1$, $\omega_Q=e^{2\pi i/Q}$, and $\delta=\sqrt Q$. On $\mathbb C^Q$ with basis $|0\rangle,\ldots,|Q-1\rangle$, define the clock and shift matrices by
$$R_Q|a\rangle=\omega_Q^a|a\rangle,\qquad M_Q|a\rangle=|a-1\!\pmod Q\rangle.$$
Thus the source matrices are
$$R_2=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\quad M_2=\begin{pmatrix}0&1\\1&0\end{pmatrix};\qquad R_3=\begin{pmatrix}1&0&0\\0&e^{2\pi i/3}&0\\0&0&e^{4\pi i/3}\end{pmatrix},\quad M_3=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}.$$
$$R_4=\begin{pmatrix}1&0&0&0\\0&i&0&0\\0&0&-1&0\\0&0&0&-i\end{pmatrix},\quad M_4=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\1&0&0&0\end{pmatrix}.$$
On $\mathcal H_{Q,L}=(\mathbb C^Q)^{\otimes L}$, put, for $1\le j\le L$ and $1\le j<L$ respectively,
$$e_{2j-1}=\frac1{\sqrt Q}\sum_{r=0}^{Q-1}M_{Q,j}^{\,r},\qquad e_{2j}=\frac1{\sqrt Q}\sum_{r=0}^{Q-1}R_{Q,j}^{\,r}R_{Q,j+1}^{-r}.$$
where the subscript denotes the tensor factor on which the matrix acts. The Potts loop normalization is $\delta=q+q^{-1}$ with
$$q=\begin{cases}e^{i\pi/4},&Q=2,\\ e^{i\pi/6},&Q=3,\\1,&Q=4.\end{cases}$$
The free/open-chain Hamiltonian convention is $H_{Q,L}=-\sum_{i=1}^{2L-1}e_i$; there is no generator joining the last site back to the first. The following result proves that these operators satisfy the stated Temperley–Lieb relations.

## Remarks

The odd generators act on one site and the even generators on neighboring pairs. For $Q=3$, the source uses $R_jR_{j+1}^2+R_j^2R_{j+1}$; for $Q=4$ it uses the powers $1,2,3$ with inverse powers on the adjacent site. The displayed summation convention gives those formulas because $R_Q^Q=I$.
