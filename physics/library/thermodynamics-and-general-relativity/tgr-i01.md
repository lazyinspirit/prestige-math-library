---
page: tgr-i01
title: Thermodynamics-GR fields, currents, reference normalization and units
status: draft
library: physics
requires:
  - tgr-mc01
  - tgr-mi03
  - sr-observer-measurements
items:
  - def-tgr-framework-units
  - post-tgr-local-material-thermodynamics
  - post-tgr-local-entropy-admissibility
  - pthm-tgr-finite-entropy-balance
examples: []
---

This page fixes the Lorentzian observer/current conventions, SI length-coordinate units, material state variables, and finite Killing-current normalization used in the thermodynamics–GR branch. Local material thermodynamics and nonnegative entropy-current divergence are distinct adopted physical premises. The finite-slab entropy identity is a conditional deduction from those premises and the exact draft mathematical balance supplier; the actual proof status and boundary-flux condition remain visible.

The diagram is a $1+1$ dimensional cross-section of the four-dimensional coordinate box. It marks the spacelike slice caps and the side boundary; the omitted spatial coordinates are suppressed. It makes no assertion about the causal character of the side faces and is not used in any proof.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[->] (0,0) -- (0,3.7) node[above] {$x^0=ct_{\rm phys}$};
  \draw[->] (0,0) -- (5.2,0) node[right] {$x^1$};
  \draw[thick] (1,0.8) -- (4.2,0.8);
  \draw[thick] (1,2.8) -- (4.2,2.8);
  \draw[thick] (1,0.8) -- (1,2.8);
  \draw[thick] (4.2,0.8) -- (4.2,2.8);
  \node[left] at (1,0.8) {$\Sigma_{x^0_-}$};
  \node[left] at (1,2.8) {$\Sigma_{x^0_+}$};
  \node[right] at (4.2,1.8) {$B$};
  \node[below] at (2.6,0.4) {spatial interval};
\end{tikzpicture}
```
