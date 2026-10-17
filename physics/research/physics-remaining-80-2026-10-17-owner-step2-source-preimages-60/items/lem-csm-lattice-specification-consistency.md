---
id: lem-csm-lattice-specification-consistency
kind: lemma
title: "Conditional Gibbs kernel consistency"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps: ["def-csm-lattice-gibbs-specification", "lem-csm-finite-gibbs-variational-identity"]
justified_by: []
dependency_roles: {"def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-finite-gibbs-variational-identity": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
--
id: lem-csm-lattice-specification-consistency
kind: lemma
title: "Conditional Gibbs kernel consistency"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps: ["def-csm-lattice-gibbs-specification", "lem-csm-finite-gibbs-variational-identity"]
justified_by: []
dependency_roles: {"def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-finite-gibbs-variational-identity": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

## Statement

Assume the finite-alphabet product-measure convention and conditional Gibbs formula of [[def-csm-lattice-gibbs-specification]], a finite-range interaction, and $\beta>0$. For every finite $\Lambda$ and exterior $\eta$, the displayed partition $Z_\Lambda^\eta$ is finite and strictly positive, the formula $\gamma_\Lambda(\cdot\mid\eta)$ defines a measurable proper probability kernel, and the family satisfies $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ whenever finite $\Delta\subseteq\Lambda$.

## Facts & Assumptions

**Given:** The finite-range interaction, $\beta>0$, and the conditional Gibbs formula and operator convention of [[def-csm-lattice-gibbs-specification]].

[F1] The finite Gibbs variational identity defines the strictly positive normalized finite-volume law whenever the finite state set is nonempty and the energies are real ([[lem-csm-finite-gibbs-variational-identity]]).

[F2] The candidate kernel, specification terminology, and finite-range locality condition are defined in [[def-csm-lattice-gibbs-specification]].

## Proof
1.1 For fixed finite $\Lambda$, only finitely many translated interaction supports meet it, so every $E_\Lambda(\tau\mid\eta)$ is a finite real number and $A^\Lambda$ is finite nonempty. Thus $Z_\Lambda^\eta$ is a positive finite sum and [F1] supplies its normalized probability weights. [given, F1, algebra]

2.1 For $\Delta\subseteq\Lambda$, split the terms meeting $\Lambda$ into those meeting $\Delta$ and those disjoint from $\Delta$. The second sum is independent of $\tau_\Delta$, so $E_\Lambda(\tau_\Lambda\mid\eta)=E_\Delta(\tau_\Delta\mid\tau_{\Lambda\setminus\Delta}\eta)+C(\tau_{\Lambda\setminus\Delta},\eta)$. In the finite sum defining $\gamma_\Lambda\gamma_\Delta$, the factor $e^{-\beta C}$ cancels between numerator and normalizer; summing first over $\tau_\Delta$ leaves exactly $\gamma_\Lambda$. [F2, step 1.1, algebra]

2.2 Each replacement map $\eta\mapsto\tau_\Lambda\eta_{\Lambda^c}$ is continuous in the product topology, and each weight depends on finitely many boundary coordinates; finite sums therefore make $\gamma_\Lambda(f\mid\eta)$ measurable for bounded measurable $f$. When $f=\mathbf1_C$ for a cylinder event $C$, its value additionally depends only on the finitely many coordinates specified by $C$, so the resulting function of $\eta$ depends on finitely many coordinates. If $B$ depends only on exterior coordinates, replacement leaves its indicator fixed, so $\gamma_\Lambda(\mathbf1_B\mid\eta)=\mathbf1_B(\eta)$; this is properness. [F2, step 1.1, algebra]

3.1 Steps 1.1, 2.2 and 2.1 prove normalization, measurability, properness and consistency, so the candidate family is a specification. [step 1.1, step 2.2, step 2.1] ∎ 