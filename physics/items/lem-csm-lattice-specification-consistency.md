---
id: lem-csm-lattice-specification-consistency
kind: lemma
title: "Conditional Gibbs kernel consistency"
status: published
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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
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

2.1 For $\Delta\subseteq\Lambda$, split the terms meeting $\Lambda$ into those meeting $\Delta$ and those disjoint from $\Delta$. The second sum is independent of $\tau_\Delta$, so $E_\Lambda(\tau_\Lambda\mid\eta)=E_\Delta(\tau_\Delta\mid\tau_{\Lambda\setminus\Delta}\eta)+C(\tau_{\Lambda\setminus\Delta},\eta)$. Consequently $Z_\Lambda^\eta=\sum_{\xi\in A^{\Lambda\setminus\Delta}}e^{-\beta C(\xi,\eta)}Z_\Delta^{\xi\eta}$. In $(\gamma_\Lambda\gamma_\Delta f)(\eta)$, first sum over the $\gamma_\Lambda$ spin assignment on $\Delta$ while holding $\xi=\tau_{\Lambda\setminus\Delta}$ fixed. Its weights sum to $Z_\Delta^{\xi\eta}$, which cancels the denominator in $\gamma_\Delta(f\mid\xi\eta)$. The remaining sum is $Z_\Lambda^{-1}\sum_{\xi\in A^{\Lambda\setminus\Delta}}e^{-\beta C(\xi,\eta)}\sum_{\zeta\in A^\Delta}f(\zeta\xi\eta)e^{-\beta E_\Delta(\zeta\mid\xi\eta)}$, which is exactly $\gamma_\Lambda f(\eta)$ by reindexing $(\zeta,\xi)$ as a configuration on $\Lambda$. The factor $e^{-\beta C}$ remains; it does not cancel by itself. [F2, step 1.1, algebra]

2.2 Each replacement map $\eta\mapsto\tau_\Lambda\eta$ is continuous in the product topology, and each weight depends on finitely many boundary coordinates; finite sums therefore make $\gamma_\Lambda(f\mid\eta)$ measurable for bounded measurable $f$. When $f=\mathbf1_C$ for a cylinder event $C$, its value additionally depends only on the finitely many coordinates specified by $C$, so the resulting function of $\eta$ depends on finitely many coordinates. For an exterior event $D\subseteq A^{\Lambda^c}$ measurable in the exterior cylinder sigma-algebra, let $B=\{\sigma\in X:\sigma|_{\Lambda^c}\in D\}$. Then $\mathbf1_B(\tau_\Lambda\eta)=\mathbf1_D(\eta)$ for every local assignment, so $\gamma_\Lambda(\mathbf1_B\mid\eta)=\mathbf1_D(\eta)$; this is properness. Whenever a kernel is integrated against a probability on $X$ or composed with another kernel, its exterior argument is the restriction of that global configuration to the relevant complement. [F2, step 1.1, algebra]

3.1 Steps 1.1, 2.2 and 2.1 prove normalization, measurability, properness and consistency, so the candidate family is a specification. [step 1.1, step 2.2, step 2.1] ∎ 
