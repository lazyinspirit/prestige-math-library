---
id: def-qsm-diagonal-ising-interaction
kind: definition
title: Diagonal quantum Ising interaction and classical conditional energies
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-local-spin-algebras
  - def-qsm-bounded-finite-range-interaction
  - def-csm-finite-range-lattice-interaction
  - def-csm-lattice-gibbs-specification
  - def-countable-choice
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-csm-finite-range-lattice-interaction: mathematical-premise
  def-csm-lattice-gibbs-specification: mathematical-premise
  def-countable-choice: mathematical-premise
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §§3.2–3.4, printed pp. 53–78; especially the local interaction, dynamics, KMS, and finite Gibbs discussions.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14; Chapter 2 §6, printed pp. 24–25.
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 20–24, 31–43, and 52–55.
---

## Definition

Fix an integer $d\geq1$, the lattice $\Gamma=\mathbb Z^d$, and at each site the two-dimensional complex Hilbert space $\mathcal H_i=\mathbb C^2$ with an orthonormal basis $e_{+1},e_{-1}$. Define the dimensionless local spin matrix $Z_i$ by $Z_i e_s=s e_s$ for $s\in\{-1,+1\}$. It is self-adjoint, diagonal in this basis, and has operator norm one. The local matrix algebras and factor inclusions are those of [[def-qsm-local-spin-algebras]], and the interaction/Hamiltonian convention is that of [[def-qsm-bounded-finite-range-interaction]].

Let $J_{ij}=J_{ji}\in\mathbb R$ be specified for distinct sites, and let $h_i\in\mathbb R$. Assume there is a finite $R\geq0$ such that $J_{ij}=0$ when $\|i-j\|_\infty>R$, and
$$\sup_{i\in\Gamma}\left(|h_i|+\sum_{j\ne i}|J_{ij}|\right)<\infty.$$
The associated quantum interaction in the convention of [[def-qsm-bounded-finite-range-interaction]] is
$$\Phi(\{i\})=-h_iZ_i,\qquad \Phi(\{i,j\})=-J_{ij}Z_iZ_j\quad(i\ne j),\qquad \Phi(S)=0\ \text{for all other finite nonempty }S.$$
Its per-site norm sum is finite by the displayed bound, and all its terms are diagonal and commute. For a finite $\Lambda\subset\Gamma$, its free-boundary Hamiltonian is
$$H_\Lambda=-\sum_{i\in\Lambda}h_iZ_i-\sum_{\{i,j\}\subseteq\Lambda}J_{ij}Z_iZ_j,$$
where every unordered pair is counted once.

For a classical configuration $\sigma\in X:=\{-1,+1\}^{\Gamma}$, a finite region $\Delta\subset\Gamma$, and an exterior assignment $\eta\in\{-1,+1\}^{\Delta^c}$, write $\widehat\sigma_i=\sigma_i$ for $i\in\Delta$ and $\widehat\sigma_i=\eta_i$ otherwise. The classical conditional energy is
$$E_\Delta(\sigma_\Delta\mid\eta)=-\sum_{i\in\Delta}h_i\sigma_i-\sum_{\{i,j\}:\{i,j\}\cap\Delta\ne\varnothing}J_{ij}\widehat\sigma_i\widehat\sigma_j.$$
This is the finite-range conditional-energy convention of [[def-csm-finite-range-lattice-interaction]]: each interaction term meeting $\Delta$ is included once, including terms crossing its boundary. The sum is finite because $\Delta$ is finite and the interaction range is finite. Define the finite exterior boundary
$$C_\Delta:=\{j\notin\Delta:\text{there is }i\in\Delta\text{ with }J_{ij}\ne0\}.$$
It is finite, and $E_\Delta(\sigma_\Delta\mid\eta)$ depends on $\eta$ only through $\eta|_{C_\Delta}$.

For $\beta>0$ in inverse-energy units, set
$$Z_\Delta^\eta:=\sum_{\sigma_\Delta\in\{-1,+1\}^{\Delta}}e^{-\beta E_\Delta(\sigma_\Delta\mid\eta)},\qquad \gamma_\Delta(\sigma_\Delta\mid\eta):=\frac{e^{-\beta E_\Delta(\sigma_\Delta\mid\eta)}}{Z_\Delta^\eta}.$$
The kernel sends an exterior configuration to a probability distribution on the spins in $\Delta$. A DLR measure for this model means a Borel probability measure $\mu$ on $X$ fixed by these kernels for every finite $\Delta$, in the specification terminology of [[def-csm-lattice-gibbs-specification]]. The finite kernel is defined without a choice principle; Countable Choice is stated separately when used to extend consistent cylinder probabilities to a measure.

The model is mathematical and supplies no measured coefficients. If interpreted with SI energy units, $J_{ij}$, $h_i$, $H_\Lambda$, and $E_\Delta$ are in joules, $\beta$ is in joules$^{-1}$, and $\beta E_\Delta$ is dimensionless.

The finite kernel requires no choice principle. Borel-measure extension from consistent cylinder probabilities uses [[def-countable-choice]].

