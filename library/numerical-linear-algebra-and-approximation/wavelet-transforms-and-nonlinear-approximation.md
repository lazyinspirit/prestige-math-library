---
page: wavelet-transforms-and-nonlinear-approximation
title: "Wavelet transforms and nonlinear approximation"
status: draft
items:
  - def-na-finite-periodic-haar-transform
  - def-na-periodic-orthogonal-compact-filter-dwt
  - def-na-daubechies-d4-filter
  - def-na-smooth-derivative-bound-class
  - def-na-haar-cell-average-projection
  - def-na-hard-soft-coefficient-thresholding
  - def-na-wavelet-coefficient-besov-quasinorm
  - def-na-finite-riesz-synthesis-matrix
  - thm-na-finite-periodic-haar-transform-orthogonality
  - thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval
  - thm-na-daubechies-d4-filter-qmf-and-two-moments
  - thm-na-haar-cell-average-w1inf-error-bound
  - thm-na-orthogonal-best-m-term-thresholding
  - prop-na-riesz-coefficient-tail-error-bound
  - def-na-d4-periodic-multilevel-transform
  - thm-na-critical-besov-coefficients-best-m-tail
  - lem-na-d4-multilevel-detail-support-and-moments
  - lem-na-sampled-smooth-d4-coefficient-decay
  - cor-na-sampled-smooth-d4-besov-best-m-rate
examples: []
---

This page separates finite periodic transforms from function approximation. The Haar and compact-filter transforms have explicit lengths, periodic indexing, and synthesis conventions. The D4 filter is checked directly against the finite orthogonal filter conditions. Haar cell averages approximate the stated smooth derivative-bound class; the D4 rate concerns normalized periodic samples in a finite transform. Its Besov quantity is explicitly a wavelet-coefficient quasi-norm, so no intrinsic function-space norm equivalence is claimed. For a biorthogonal finite synthesis matrix, coefficient-tail errors carry its Riesz bounds.

The assigned page prerequisites are [[computed-fast-transforms-and-convolution]] and [[polynomial-approximation-and-chebyshev-interpolation]]. They provide adjacent numerical-analysis context; the local filter-bank and coefficient arguments below do not use their item statements as proof premises.

In the diagram, each arrow carries the current approximation vector through low-pass $h$ or high-pass $g$ filtering and decimation by two. The detail branch is stored, while the approximation branch is decomposed again. The diagram records the procedure only; inverse and norm claims are proved algebraically from filter correlations.

~~~tikz
\begin{tikzpicture}
\node (x) at (0,0) {$x$};
\node[draw,rectangle] (h0) at (2,0.8) {$h$};
\node[draw,rectangle] (g0) at (2,-0.8) {$g$};
\node (down0a) at (4,0.8) {$\downarrow 2$};
\node (down0d) at (4,-0.8) {$\downarrow 2$};
\node (a1) at (6,0.8) {$a^{(1)}$};
\node (d1) at (6,-0.8) {$d^{(1)}$};
\node[draw,rectangle] (h1) at (8,1.4) {$h$};
\node[draw,rectangle] (g1) at (8,0.2) {$g$};
\node (a2) at (10,1.4) {$a^{(2)}$};
\node (d2) at (10,0.2) {$d^{(2)}$};
\draw[->] (x) -- (h0);
\draw[->] (x) -- (g0);
\draw[->] (h0) -- (down0a);
\draw[->] (g0) -- (down0d);
\draw[->] (down0a) -- (a1);
\draw[->] (down0d) -- (d1);
\draw[->] (a1) -- (h1);
\draw[->] (a1) -- (g1);
\draw[->] (h1) -- (a2);
\draw[->] (g1) -- (d2);
\end{tikzpicture}
~~~
