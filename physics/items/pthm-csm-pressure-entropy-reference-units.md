---
id: pthm-csm-pressure-entropy-reference-units
kind: physics-theorem
title: "Gibbs pressure and entropy with physical reference units"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps: ["post-csm-interacting-equilibrium-gibbs", "thm-csm-lattice-dlr-variational-pressure", "def-csm-gibbs-physical-parameters", "def-countable-choice"]
justified_by: []
dependency_roles: {"post-csm-interacting-equilibrium-gibbs": "physical-assumption", "thm-csm-lattice-dlr-variational-pressure": "mathematical-premise", "def-csm-gibbs-physical-parameters": "formulation-prerequisite", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
physical_scope: "Bounded finite-alphabet translation-invariant finite-range lattice models under the stated DLR and SI reference conventions; conditional model deductions only."
empirical_premises: []
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

Assume the adopted interacting Gibbs-equilibrium postulate for a bounded finite-range translation-invariant lattice model in dimension $d\geq1$, Countable Choice, lattice spacing $a>0$ metres, and temperature $T>0$ kelvin. For any stationary DLR equilibrium state with dimensionless pressure per site $p$, Shannon entropy density $h_{\rm Sh}$ in nats per site, and mean energy $u$ in joules per site, the conditional model prediction is
$$\mathsf P=\frac{k_BT}{a^d}p,\qquad s=\frac{k_B}{a^d}h_{\rm Sh},\qquad f=\frac{u}{a^d}-Ts=-\frac{k_BT}{a^d}p.$$
The generalized pressure density $\mathsf P$ and free-energy density $f$ have units $\mathrm{J\,m}^{-d}$; for $d=3$, $\mathsf P$ is in pascals ($\mathrm{Pa}=\mathrm{J\,m}^{-3}$). The reference spin entropy density $s$ has units $\mathrm{J\,K}^{-1}\mathrm{m}^{-d}$. This is a consequence of the bounded-lattice DLR variational identity; it makes no claim that the model describes a material.

## Facts & Assumptions

**Given:** The adopted equilibrium model, a stationary DLR state for a bounded finite-range lattice interaction, SI parameters as in the local definition, and Countable Choice.

[F1] The equilibrium meaning is adopted as a postulate for a chosen Hamiltonian and reference; it does not imply empirical accuracy or equilibration ([[post-csm-interacting-equilibrium-gibbs]]).

[F2] The dimensionless pressure and entropy/energy densities satisfy $p=h_{\rm Sh}-\beta u$ for stationary DLR states under Countable Choice ([[thm-csm-lattice-dlr-variational-pressure]]).

[F3] $\beta=(k_BT)^{-1}$, $\mathsf P=k_BT p/a^d$, and $s=k_Bh_{\rm Sh}/a^d$ in the declared SI convention ([[def-csm-gibbs-physical-parameters]]).

[A1] Countable Choice is the measure-extension assumption carried by [F2] ([[def-countable-choice]]).

## Proof
1.1 Under Countable Choice [A1], [F2] gives $p=h_{\rm Sh}-\beta u$. Multiplication by $-k_BT/a^d$ gives $-k_BT p/a^d=-k_BT h_{\rm Sh}/a^d+(k_BT\beta)u/a^d$. [A1, F2, algebra]

2.1 By [F3], $k_BT\beta=1$, $s=k_Bh_{\rm Sh}/a^d$, and $\mathsf P=k_BT p/a^d$. Substitution in step 1.1 gives $f=u/a^d-Ts=-\mathsf P$. This exact conclusion is conditional on [F1] and the declared reference convention, not an empirical claim. [F1, F3, step 1.1, algebra] ∎ 
