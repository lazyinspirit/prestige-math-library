---
page: qm-math-composites-examples
title: Qm Math Composites — Examples
status: published
items: []
requires:
  - qm-math-composites
examples:
  - ex-nrqm-composites-bell-reduced-state
  - ex-nrqm-composites-nonunique-mixed-ensemble
  - cex-nrqm-composites-selective-conditioning-counterexample
---

The companion page to [[qm-math-composites]] records three explicit
mathematical checks behind its tensor, density and instrument results. All
three items are mathematics: they carry `domain: mathematics`, depend only on
the mathematical items of the parent page and on mathematical suppliers, and
make no physical or empirical claim.

[[ex-nrqm-composites-bell-reduced-state]] computes the reduced states of
the unit vector $\Psi=(e_+\otimes e_--e_-\otimes e_+)/\sqrt2$ in
$\mathbb C^2\otimes\mathbb C^2$: the coefficient matrix is
$C=\frac{1}{\sqrt2}\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, both partial traces
are $\frac12 I$, the reduced purity is $\frac12$ while
$\operatorname{tr}(T_{\Psi,\Psi}^2)=1$, the Schmidt coefficients are
$s_1=s_2=1/\sqrt2$, and $\Psi$ is not a product vector.
[[ex-nrqm-composites-nonunique-mixed-ensemble]] shows that the maximally
mixed operator $\frac12 I$ on $\mathbb C^2$ has the two distinct orthonormal
decompositions $\frac12T_{e_1,e_1}+\frac12T_{e_2,e_2}$ and
$\frac12T_{e_+,e_+}+\frac12T_{e_-,e_-}$, so this density operator has two distinct orthonormal convex
decompositions into rank-one density operators.
[[cex-nrqm-composites-selective-conditioning-counterexample]] refutes the
selective claim that local conditioning preserves the opposite reduced state: on
the same Bell state, the Lüders outcome of the second factor with
$M_0=T_{e_-,e_-}$ has probability $\frac12$ and leaves the first factor in
$T_{e_+,e_+}$, which differs from the unconditional $\frac12 I$, while the
nonselective sum over both outcomes does return $\frac12 I$ as in
[[lem-nrqm-composites-local-trace-preserving-no-signalling]] — the counterexample
therefore separates the nonselective identity from its selective counterpart
rather than contradicting the former.
