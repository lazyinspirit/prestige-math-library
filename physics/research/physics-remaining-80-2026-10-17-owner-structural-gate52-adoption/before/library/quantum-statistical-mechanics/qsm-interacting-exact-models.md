---
page: qsm-interacting-exact-models
title: "Finite Pauli dimer spectrum and exact separability threshold"
status: draft
library: physics
requires:
  - csm-fluctuations-countermodels
  - qsm-bose-fermi-gases
items:
  - def-qsm-pauli-two-qubit-conventions
  - def-qsm-finite-two-qubit-state-and-separability
  - lem-qsm-pauli-dimer-spectrum
  - lem-qsm-qubit-bloch-ball
  - lem-qsm-pauli-separable-correlation-bound
  - lem-qsm-pauli-boundary-mixture
  - thm-qsm-models-dimer-entanglement
  - pthm-qsm-interacting-dimer-gibbs
  - pthm-qsm-commuting-lattice-countermodels
  - pthm-qsm-onsite-interacting-atoms
examples: []
---

This page develops the finite two-qubit Pauli exchange matrix, a local Bloch-coordinate and separability calculus, and the exact zero-field Gibbs separability threshold. The physical dimer then uses the explicit Hamiltonian $H=JC-h(\sigma_z\otimes I+I\otimes\sigma_z)$, with $J,h$ in joules and $\beta$ in J$^{-1}$. Its field coefficient and eigenlevels are derived in this convention; the external dimer sources use their own field normalizations. The exact entanglement boundary is a finite-state property, not a thermodynamic singularity.

The page also covers a periodic quantum Ising model and a global three-sector countermodel. The Ising construction is diagonal in the product Pauli-$z$ basis and reproduces the stated one-dimensional classical finite-ring law, without extending to general noncommuting lattices. The three-sector model is explicitly non-product-additive and remains outside claims about local or short-range matter. The onsite Bose and Fermi calculations are exact one-site models; the interacting Bose trace is proved from its quadratic occupation-energy tail, not from the free-mode product trace formula.

The mathematical spectrum and separability results use only mathematical prerequisites. Physical conclusions are conditional model deductions; no measurements, thermalization mechanism, or material-specific behavior is asserted.

For $J>0$ and zero field, the following level sketch shows only the relative energies from [[pthm-qsm-interacting-dimer-gibbs]]. The vertical coordinate is energy in units of $J$; horizontal positions distinguish the singlet from the triplet and carry no further scale. The proof uses the exact eigenvalue calculation, not this drawing.

```tikz
\begin{tikzpicture}[x=2.2cm,y=0.75cm]
  \draw[->] (-0.35,-3.6) -- (-0.35,1.7) node[above] {$E/J$};
  \draw[thick] (0,-3) -- (0.65,-3);
  \draw[thick] (1.4,1) -- (2.05,1);
  \node[left] at (0,-3) {$-3$};
  \node[right] at (2.05,1) {$+1$ (triplet, multiplicity $3$)};
  \node[below] at (0.32,-3.25) {singlet};
  \draw[<->] (0.85,-3) -- (0.85,1) node[midway,right] {$4J$};
\end{tikzpicture}
```
