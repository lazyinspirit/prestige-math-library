---
id: def-qa-37-fibonacci-braid-gate-set
kind: definition
title: "Fixed SU(2) Fibonacci braid gate alphabet"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - lem-qa-37-fibonacci-su2-lifts-are-dense
  - ex-qc-tqc-fibonacci-qubit-matrices
  - def-qc-inverse-closed-dense-su2-gate-set
  - lem-qc-compact-su2-base-net
  - def-qc-tqc-braid-action-from-fusion-data
  - def-countable-choice
justified_by: []
axiom_use: "None beyond the density theorem assumptions carried by the gate-set claim; ACω is an explicit inherited assumption."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§9.17, projective/global-phase discussion, PDF pp. 61–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci braid generators, PDF pp. 53–57."
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§§2–3, inverse-closed gate package and base net, PDF pp. 2–7."
---

## Definition

Use the fixed chirality and fusion-tree basis of the three-$\tau$, total-$\tau$
Fibonacci space from [[ex-qc-tqc-fibonacci-qubit-matrices]]. There
$B_1=\operatorname{diag}(1,r)$, $B_2=FB_1F$, and
$r=e^{-3\pi i/5}$. Put $z=e^{3\pi i/10}$ and
$$G_{\rm Fib}=\{zB_1,zB_2,(zB_1)^{-1},(zB_2)^{-1}\}\subset SU(2).$$
The determinants are one because $\det B_j=r$ and $z^2r=1$; the matrices
are unitary by the cited matrix verification. The resulting package is
inverse-closed, and its generated subgroup is dense under the inherited
$\mathrm{AC}_\omega$ assumption by
[[lem-qa-37-fibonacci-su2-lifts-are-dense]]. Its exact entries are algebraic
numbers. For the finite bit implementation, the real and imaginary
coordinates are supplied by minimal polynomials over $\mathbb Q$ and rational
isolating intervals with opposite endpoint signs and exactly one real root,
as required by the finite-precision SK theorem. For the SK recursion one
additionally supplies a fixed finite base-net certificate $(\mathcal N_0,\eta_0,L_0)$ with
$0<\eta_0<64^{-2}$, as defined in
[[def-qc-inverse-closed-dense-su2-gate-set]]. The certificate is input data:
the compactness result [[lem-qc-compact-su2-base-net]] proves existence but
computes neither the list nor $L_0$.

The diagram uses the positive Artin crossing convention: time runs downward,
and the continuous left-input strand passes over the broken right-input
strand. Its word matrix is the representation convention in
[[def-qc-tqc-braid-action-from-fusion-data]]; no proof depends on the drawing.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.8pt]
  \draw (1,2) .. controls (1,1.5) and (0.72,1.25) .. (0.58,1.05);
  \draw (0.42,0.95) .. controls (0.28,0.75) and (0,0.5) .. (0,0);
  \draw (0,2) .. controls (0,1.4) and (1,0.6) .. (1,0);
  \node at (0,2.2) {$\tau$};
  \node at (1,2.2) {$\tau$};
  \node at (0,-0.25) {$\tau$};
  \node at (1,-0.25) {$\tau$};
  \node at (1.35,1) {$\sigma_i$};
\end{tikzpicture}
```
