---
page: qsm-commuting-quantum-phases
title: Diagonal quantum Ising interaction and classical conditional energies
status: published
library: physics
requires:
  - csm-gibbs-lattice
  - qsm-kms-equilibrium
  - qsm-spin-thermodynamic-limits
items:
  - def-qsm-diagonal-ising-interaction
  - lem-qsm-diagonal-ising-specification-consistency
  - lem-qsm-commuting-local-dynamics
  - lem-qsm-kms-diagonal-reduction
  - thm-qsm-diagonal-kms-dlr-bijection
  - thm-qsm-chain-kms-uniqueness
  - thm-qsm-ising-high-temperature-kms-uniqueness
  - thm-qsm-ising-kms-coexistence
examples: []
---

This page defines a bounded finite-range diagonal spin-$\tfrac12$ Ising interaction with position-dependent couplings, its classical conditional energies, and the corresponding finite Gibbs specification. It proves exact local dynamics and an affine bijection between classical DLR measures and KMS states on the full quasi-local matrix algebra. The one-dimensional uniqueness, sufficient high-temperature uniqueness, and conservative two-dimensional coexistence results are conditional transfers of the matching CSM theorems. They do not cover transverse fields, identify an exact critical point, assert extremality, or report measurements.

## Finite boundary example

For the nearest-neighbor case in $d=2$, take $\Delta=\{-1,0,1\}^2$. Blue sites are in $\Delta$; orange sites are exactly its exterior interaction boundary $C_\Delta$; thick bonds are the nearest-neighbor pairs meeting $\Delta$. The four uncolored exterior corner sites do not couple to $\Delta$ in this example. This drawing illustrates the finite boundary definition; all proofs use the stated set and energy formulas, and for larger interaction range $C_\Delta$ contains every exterior site coupled to $\Delta$.

\begin{center}
\begin{tikzpicture}[scale=0.78]
  \draw[step=1,gray!45,thin] (-2,-2) grid (2,2);
  \draw[very thick,blue!65!black] (-1,-1) grid (1,1);
  \foreach \y in {-1,0,1} {
    \draw[very thick,orange!80!black] (-1,\y) -- (-2,\y);
    \draw[very thick,orange!80!black] (1,\y) -- (2,\y);
  }
  \foreach \x in {-1,0,1} {
    \draw[very thick,orange!80!black] (\x,-1) -- (\x,-2);
    \draw[very thick,orange!80!black] (\x,1) -- (\x,2);
  }
  \foreach \x in {-1,0,1} \foreach \y in {-1,0,1} {
    \fill[blue!70!black] (\x,\y) circle (2.8pt);
  }
  \foreach \y in {-1,0,1} {
    \fill[orange!85!black] (-2,\y) circle (2.8pt);
    \fill[orange!85!black] (2,\y) circle (2.8pt);
  }
  \foreach \x in {-1,0,1} {
    \fill[orange!85!black] (\x,-2) circle (2.8pt);
    \fill[orange!85!black] (\x,2) circle (2.8pt);
  }
  \node[fill=white,inner sep=1pt] at (0,0) {$\Delta$};
  \node[above] at (0,2) {$C_\Delta$};
  \node[below] at (0,-2.35) {blue: interior sites; orange: exterior boundary sites};
\end{tikzpicture}
\end{center}

