---
page: qsm-spin-thermodynamic-limits
title: Bounded quantum lattice pressure on cubes and van Hove sets
status: draft
library: physics
items:
  - def-qsm-translation-invariant-spin-interaction
  - thm-qsm-quantum-lattice-pressure
  - lem-qsm-energy-density-concentration
  - lem-qsm-stationary-spin-entropy-density
  - thm-qsm-spin-pressure-variational-principle
examples: []
---

This page treats finite-dimensional spins on $\mathbb Z^d$, translation-invariant finite-range interactions, and free-boundary finite-volume Hamiltonians. It proves that dimensionless log-partition per site converges along cubes and all van Hove sequences as defined in [[thm-qsm-quantum-lattice-pressure]]. For any such sequence $(\Lambda_n)$, every self-adjoint $B_n\in\mathcal A_{\Lambda_n}$ with $\|B_n\|/|\Lambda_n|\to0$ leaves the pressure limit unchanged. At a differentiable pressure point, finite Gibbs spectral energy densities converge to $-p_\Phi'(\beta)$ with exponentially small tails.

For translation-invariant algebraic states, the page proves cube entropy and energy densities and a stationary variational pressure maximum from the listed finite-dimensional and state-extension inputs. The variational theorem states its conditional finite-Gibbs inequality explicitly and does not identify pressure maximizers with KMS states. The page makes no claim of local microcanonical/canonical equivalence or empirical material behavior.

## Fixed-block comparison schematic

For $d=2$, $L=8$, and block side $\ell=3$, blue squares are complete blocks and orange squares are the residual sites. The diagram illustrates the partition used in the written cube proof; every support-count and trace comparison is proved there and does not rely on the drawing.

```tikz
\begin{tikzpicture}[scale=0.48]
  \fill[orange!25] (6,0) rectangle (8,8);
  \fill[orange!25] (0,6) rectangle (6,8);
  \draw[step=1,gray!55,very thin] (0,0) grid (8,8);
  \draw[blue!70!black,thick] (0,0) rectangle (3,3);
  \draw[blue!70!black,thick] (3,0) rectangle (6,3);
  \draw[blue!70!black,thick] (0,3) rectangle (3,6);
  \draw[blue!70!black,thick] (3,3) rectangle (6,6);
  \draw[black,thick] (0,0) rectangle (8,8);
  \node at (1.5,1.5) {$Q_\ell$};
  \node at (7,4) {$E_L$};
  \node[below] at (4,0) {$Q_L$: $L=8$, $\ell=3$};
\end{tikzpicture}
```
