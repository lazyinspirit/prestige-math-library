---
page: emg-ms01
title: Geometric electrovac equations and flux normalization
status: published
library: mathematics
requires:
- emg-mg03
- gr-spherical-vacuum-model
- emg-cp01
- algebraic-closure-embeddings-and-separability
- the-field-of-fractions-and-localisation
- polynomial-rings-and-roots
- the-derivative-and-mean-value-theorems
- emg-mg01
- emg-mg02
- gr-curvature-and-tides
- gr-einstein-and-matter
- compactness
- rank-theorems-and-embedded-submanifolds
- integration-of-forms-and-the-general-stokes-theorem
- manifolds-with-boundary-collars-and-orientations
- tensor-fields-exterior-algebra-and-differential-forms
items:
- alg-emg-rational-electrovac-verification
- lem-emg-rational-electrovac-verification-correctness
- lem-emg-rational-electrovac-verification-termination-resources
- def-emg-xs-geometric-electrovac
- def-emg-xs-rn-data
- def-emg-xs-kn-data
- lem-emg-xs-rn-tensor-identities
- def-emg-xs-kn-full-sphere-exterior
- lem-emg-xs-kn-rational-calculus
- thm-emg-xs-rn-verification
- thm-emg-xs-kn-verification
- lem-emg-xs-duality
- prop-emg-xs-rn-curvature
- prop-emg-xs-kn-invariants
- prop-emg-xs-kn-dyonic-flux
examples: []
---

This page fixes the geometric electrovac convention in signature $(-+++)$,
with the metric volume orientation and curvature sign stated in the items.
The Reissner–Nordström and Kerr–Newman fields use geometric flux lengths;
they are conditional mathematical models, not measured systems or physical
postulates. Exact coordinate calculations are kept separate from the
Lorentzian Hodge and stress conventions. The full-sphere Kerr–Newman result
applies only to the smooth exterior extension defined here; no horizon or
maximal-extension conclusion is made.

The exterior flux argument uses a finite shell bounded by two homologous
spheres. The sketch shows a meridional section only; the chain in the proof is
the three-dimensional region $[r_1,r_2]\times S^2$.

~~~tikz
\begin{tikzpicture}[scale=1]
  \draw[thick] (0,0) ellipse (1.0 and 0.38);
  \draw[thick] (0,0) ellipse (1.65 and 0.62);
  \draw[->] (0.99,0.10) -- (1.56,0.18)
    node[midway,above] {$r$};
  \node at (0,0.16) {$S_{r_1}$};
  \node at (0,0.90) {$S_{r_2}$};
  \node at (0,-1.05) {$[r_1,r_2]\times S^2$};
\end{tikzpicture}
~~~

The annulus orientation gives boundary $S_{r_2}-S_{r_1}$. The proof uses
that finite-chain boundary and the exact flux convention
$q_e=(4\pi)^{-1}\int_{S_r}\star_g\mathcal F$; the diagram supplies no
separate homology or field-equation argument.
