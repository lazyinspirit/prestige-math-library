---
id: thm-csm-lattice-dlr-existence
kind: theorem
title: "Finite-range lattice DLR existence and closed convex state set"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps: ["def-csm-lattice-gibbs-specification", "lem-csm-lattice-product-and-measure-compactness", "def-countable-choice"]
justified_by: []
dependency_roles: {"def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-lattice-product-and-measure-compactness": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

Assume Countable Choice, a finite nonempty alphabet $A$, and a proper consistent finite-range specification $\gamma$ on $X=A^{\mathbb Z^d}$, with finite range as defined in [[def-csm-lattice-gibbs-specification]]. No translation invariance is required. For every exhaustion $\Lambda_n\uparrow\mathbb Z^d$ and every sequence of exterior configurations $\eta_n$, the measures $\gamma_{\Lambda_n}(\cdot\mid\eta_n)$ extended with the fixed exterior have a cylinder-convergent subsequence. Every such subsequential limit is a DLR state. Consequently the DLR state set is nonempty, convex, and closed under cylinder convergence. No uniqueness is asserted.

## Facts & Assumptions

**Given:** A proper consistent finite-range lattice specification, an exhausting sequence of finite volumes, exterior configurations, and Countable Choice for the product-measure extension.

[A1] Countable Choice is required for the measure extension in [[def-countable-choice]].

[A2] The specification is proper, consistent, and finite range in the cylinder-local sense of [[def-csm-lattice-gibbs-specification]].

[F1] Cylinder convergence is sequentially compact and determines a unique probability measure under Countable Choice ([[lem-csm-lattice-product-and-measure-compactness]]).

## Proof
1.1 Each proper kernel value $\gamma_{\Lambda_n}(\cdot\mid\eta_n)$ is already a probability measure on $X$. By [F1], a subsequence converges on every cylinder to a probability measure $\mu$. [A1, A2, F1, construct]

2.1 Fix a finite $\Delta$ and cylinder event $C$. By [A2], choose a finite coordinate set $S$ on which $\gamma_\Delta(C\mid\cdot)$ depends. For sufficiently large $n$, $\Delta\cup S\subseteq\Lambda_n$. Consistency in [A2] then gives $\mu_n\gamma_\Delta(C)=\mu_n(C)$, and both integrands are cylinder functions, so cylinder convergence passes the identity to $\mu\gamma_\Delta(C)=\mu(C)$. [A2, F1, step 1.1]

3.1 Cylinder events form a pi-system generating the Borel sigma-algebra. The two probability measures $\mu\gamma_\Delta$ and $\mu$ agree on the generating cylinders by step 2.1. Uniqueness of measures on the cylinder-generated sigma-algebra, part of [F1], extends equality to every Borel event. Thus $\mu$ is DLR for each $\Delta$. [F1, step 2.1]

4.1 Convex combinations preserve the linear identities $\mu\gamma_\Delta=\mu$. A cylinder-convergent limit of DLR laws satisfies the same local identities by the argument of step 2.1, hence is DLR. Since step 1.1 constructs at least one such law, the state set is nonempty, convex and closed. [A2, F1, step 3.1] ∎ 