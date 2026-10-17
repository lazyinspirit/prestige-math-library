---
id: def-csm-lattice-gibbs-specification
kind: definition
title: "Lattice Gibbs kernels and DLR states"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["def-csm-finite-range-lattice-interaction", "lem-csm-lattice-product-and-measure-compactness", "lem-csm-finite-gibbs-variational-identity", "def-countable-choice"]
justified_by: ["lem-csm-lattice-specification-consistency"]
dependency_roles: {"def-csm-finite-range-lattice-interaction": "mathematical-premise", "lem-csm-lattice-product-and-measure-compactness": "mathematical-premise", "lem-csm-finite-gibbs-variational-identity": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Definition

Assume Countable Choice for the product-measure extension framework of [[def-countable-choice]] and [[lem-csm-lattice-product-and-measure-compactness]]. Work in the finite-alphabet configuration space $X=A^{\mathbb Z^d}$ with its cylinder-generated Borel sigma-algebra. Let the finite-range interaction and its conditional energy be as in [[def-csm-finite-range-lattice-interaction]], and fix $\beta>0$. For a finite $\Lambda\subset\mathbb Z^d$ and exterior configuration $\eta\in A^{\Lambda^c}$, put
$$Z_\Lambda^\eta=\sum_{\tau\in A^\Lambda}e^{-\beta E_\Lambda(\tau\mid\eta)},\qquad \gamma_\Lambda(f\mid\eta)=\frac{\sum_{\tau\in A^\Lambda}f(\tau\eta)e^{-\beta E_\Lambda(\tau\mid\eta)}}{Z_\Lambda^\eta}$$
for bounded measurable $f:X\to\mathbb R$. Here $\gamma_\Lambda f$ denotes the function $\eta\mapsto\gamma_\Lambda(f\mid\eta)$, composition is operator composition, and $\mu\gamma_\Lambda(f)=\int\gamma_\Lambda(f\mid\eta)\,d\mu(\eta)$. A proper kernel leaves every exterior-measurable event fixed. A specification is a family $(\gamma_\Lambda)_{\Lambda\text{ finite}}$ of proper probability kernels satisfying $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ whenever $\Delta\subseteq\Lambda$. A DLR state is a probability measure $\mu$ on $X$ satisfying $\mu\gamma_\Lambda=\mu$ for every finite $\Lambda$.

For the existence and uniqueness results below, a specification has **finite range** when for every finite $\Delta$ and every cylinder event $C$ the function $\eta\mapsto\gamma_\Delta(\mathbf1_C\mid\eta)$ depends on only finitely many coordinates of $\eta$. The displayed finite-range Gibbs formula has this property because only finitely many interaction terms meet $\Delta$, and a cylinder indicator depends on only finitely many additional coordinates.

The formula is the candidate Gibbs specification; [[lem-csm-lattice-specification-consistency]] establishes its positive finite normalization, measurability, properness and consistency under the stated hypotheses. The Countable Choice assumption is used for the product-measure construction, not for any finite conditional sum.
