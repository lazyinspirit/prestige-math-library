---
id: thm-csm-chain-dlr-uniqueness
kind: theorem
title: "All-positive-temperature one-dimensional Ising DLR uniqueness"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps: ["lem-csm-chain-markov-bridge", "thm-csm-lattice-dlr-existence", "def-countable-choice", "def-csm-lattice-gibbs-specification", "lem-csm-lattice-specification-consistency", "def-csm-finite-range-lattice-interaction"]
justified_by: []
dependency_roles: {"lem-csm-chain-markov-bridge": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-lattice-specification-consistency": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise"}
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
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Assume Countable Choice, finite $\beta>0$, finite $J,h\in\mathbb R$, and the one-dimensional nearest-neighbor Ising specification from [[def-csm-lattice-gibbs-specification]]. Then there is exactly one DLR state. It is the stationary Markov law constructed from the positive transfer matrix in [[lem-csm-chain-markov-bridge]]. For every fixed cylinder, finite-interval Gibbs probabilities converge to that law uniformly over the two endpoint boundary spins.

## Facts & Assumptions

**Given:** The one-dimensional Ising chain, finite real parameters, and Countable Choice for the product-measure construction.

[A1] Countable Choice is assumed only for the DLR measure extension and uniqueness framework ([[def-countable-choice]]).

[F1] The positive transfer matrix has a stationary Markov law with transition probabilities $Q_{s,t}=T_{s,t}r_t/(\lambda_+r_s)$ and stationary weights $\pi_s=r_s^2$ ([[lem-csm-chain-markov-bridge]]).

[F2] For every exhaustion and boundary sequence, subsequential finite-volume limits are DLR, and DLR laws are determined by their cylinder probabilities ([[thm-csm-lattice-dlr-existence]]).

[F3] In $d=1$, the transfer-matrix model is realized by the interaction list with onsite shape $\{0\}$ and $\Phi_0(s_0)=-hs_0$, and pair shape $\{0,1\}$ and $\Phi_1(s_0,s_1)=-Js_0s_1$; its finite conditional kernels are proper and consistent ([[def-csm-finite-range-lattice-interaction]], [[lem-csm-lattice-specification-consistency]]).

## Proof
1.1 Let $r$ be the positive unit eigenvector of $T$ and $w$ an orthogonal unit eigenvector. By [F1] and the eigenvalue formula, $T^n/\lambda_+^n=rr^{\mathsf T}+(\lambda_-/\lambda_+)^nww^{\mathsf T}$, with $|\lambda_-/\lambda_+|<1$. Since both entries of $r$ are positive, the denominator entries have a uniform positive lower bound after division by $\lambda_+^n$. [A1, F1, algebra]

2.1 Fix an interval $[-n,n]$, endpoint spins $a,b$, and a consecutive observed block $s_\ell,\ldots,s_r$. Its conditional Gibbs probability is $\frac{(T^{n+\ell+1})_{a,s_\ell}\left(\prod_{i=\ell}^{r-1}T_{s_i,s_{i+1}}\right)(T^{n-r+1})_{s_r,b}}{(T^{2n+2})_{a,b}}.$ Using the uniform spectral expansion in step 1.1, this converges uniformly in $a,b$ to $\pi_{s_\ell}\prod_{i=\ell}^{r-1}Q_{s_i,s_{i+1}}$. Finite summation over missing intermediate spins gives the same convergence for every cylinder. [F1, step 1.1, algebra]

3.1 The limiting cylinder law is the Markov law $\mu$ in [F1]. The specification in [F3] has the exact finite conditional energy used by the interval laws. By [F2], a subsequential limit of those finite-volume laws is DLR; step 2.1 forces every such limit to equal $\mu$, so $\mu$ is DLR. [A1, F1, F2, F3, step 2.1]

4.1 If $\nu$ is any DLR state, then for every cylinder $C$, $\nu(C)=\nu\gamma_{[-n,n]}(C)$. The conditional probability inside this integral differs uniformly in the exterior endpoints from $\mu(C)$ by a quantity tending to zero by step 2.1. Thus $\nu(C)=\mu(C)$; [F2] gives $\nu=\mu$. [F2, step 2.1, step 3.1] ∎ 
