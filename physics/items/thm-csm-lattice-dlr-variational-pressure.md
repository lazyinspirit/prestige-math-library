---
id: thm-csm-lattice-dlr-variational-pressure
kind: theorem
title: "DLR states attain the bounded lattice pressure variational principle"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps: ["lem-csm-stationary-dlr-construction", "thm-csm-lattice-van-hove-pressure", "lem-csm-stationary-lattice-entropy-energy", "def-countable-choice", "lem-csm-finite-gibbs-variational-identity", "thm-csm-lattice-dlr-existence", "lem-csm-lattice-specification-consistency"]
justified_by: []
dependency_roles: {"lem-csm-stationary-dlr-construction": "mathematical-premise", "thm-csm-lattice-van-hove-pressure": "mathematical-premise", "lem-csm-stationary-lattice-entropy-energy": "mathematical-premise", "def-countable-choice": "mathematical-premise", "lem-csm-finite-gibbs-variational-identity": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise", "lem-csm-lattice-specification-consistency": "mathematical-premise"}
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

Assume Countable Choice, a bounded translation-invariant finite-range lattice interaction on a finite alphabet, and $\beta>0$. Let $p$ be its dimensionless pressure per site, and let $\mu$ be a translation-stationary probability with entropy density $h(\mu)$ and energy density $u(\mu)$ as in [[lem-csm-stationary-lattice-entropy-energy]]. Then
$$h(\mu)-\beta u(\mu)\leq p.$$
If $\mu$ is a DLR state for the specification, equality holds. Since stationary DLR states exist under these hypotheses, the supremum of $h(\mu)-\beta u(\mu)$ over stationary probabilities is attained and equals $p$. The converse “every maximizing stationary probability is DLR” is not asserted.

## Facts & Assumptions

**Given:** A bounded finite-range translation-invariant interaction, $\beta>0$, a stationary lattice probability, and Countable Choice for the DLR existence input.

[A1] Countable Choice is retained in the finite-alphabet DLR measure construction ([[def-countable-choice]]).

[F1] Stationary finite-alphabet laws have entropy and energy densities with the stated limits ([[lem-csm-stationary-lattice-entropy-energy]]).

[F2] The free-boundary pressure along cubes and van Hove sets has a finite limit $p$ ([[thm-csm-lattice-van-hove-pressure]]).

[F3] For each finite state set, the Gibbs relative-entropy identity is
$D(\rho\Vert\gamma)=-H_{\rm Sh}(\rho)+\beta\rho(H)+\log Z\geq0$
([[lem-csm-finite-gibbs-variational-identity]]).

[F4] For the stated finite-range interaction and $\beta>0$, its candidate Gibbs kernels are proper, consistent and cylinder-local ([[lem-csm-lattice-specification-consistency]]). Under Countable Choice, such a specification has a nonempty DLR state set ([[thm-csm-lattice-dlr-existence]]). For a translation-invariant interaction with a nonempty DLR set, translation averaging then gives a stationary DLR state ([[lem-csm-stationary-dlr-construction]]).

## Proof
1.1 Under the Countable Choice assumption [A1], apply [F3] to the $B_n$ marginal of $\mu$ and the free Gibbs law for $H^{\rm free}_{B_n}$. Rearranging gives $H_n-\beta\mathbb E_\mu H^{\rm free}_{B_n}\leq\log Z_{B_n}$. Divide by $|B_n|$ and use [F1] and [F2] to obtain $h(\mu)-\beta u(\mu)\leq p$. [F1, F2, F3, given, algebra]

1.2 Suppose $\mu$ is DLR. Its $B_n$ marginal is a mixture of the conditional finite-volume Gibbs laws $\gamma_{B_n}(\cdot\mid\eta)$. Let $R$ be the interaction range, $\partial_R B_n=\{x\in B_n:\operatorname{dist}_\infty(x,B_n^c)\leq R\}$, and $C=\sum_{r\in\mathcal R}|S_r|\|\Phi_r\|_\infty$. A support meeting both $B_n$ and its complement contains an interior site in $\partial_R B_n$; for each such site and type $r$ there are at most $|S_r|$ possible anchors. Thus the conditional energy differs from $H^{\rm free}_{B_n}$ by at most $D_n=C|\partial_R B_n|$. Termwise comparison shows the likelihood ratio of each conditional law to the free Gibbs law lies in $[e^{-2\beta D_n},e^{2\beta D_n}]$; the same holds for their mixture. Hence $0\leq D(\mu_{B_n}\Vert\gamma^{\rm free}_{B_n})\leq2\beta D_n$. [given, F1, F3, algebra]

2.1 Since $D_n/|B_n|\to0$, the finite relative-entropy identity [F3], divided by volume and passed to the limits in [F1]–[F2], gives $h(\mu)-\beta u(\mu)=p$. [F1, F2, F3, step 1.2, algebra]

3.1 The kernel consistency and existence results in [F4] first give a nonempty DLR set under [A1]; translation averaging in [F4] then gives a stationary DLR state and hence attains equality from step 2.1. Combining with the upper bound of step 1.1 proves the supremum statement, without any converse implication. [A1, F4, step 1.1, step 2.1] ∎ 