---
id: ex-csm-chain-analytic-interacting-model
kind: example
title: "Analytic interacting chain and its Gibbs state"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps: ["thm-csm-chain-dlr-uniqueness", "thm-csm-ising-chain-convergent-series", "post-csm-interacting-equilibrium-gibbs", "def-countable-choice", "lem-csm-chain-markov-bridge", "thm-tdmath-ising-chain-limit"]
justified_by: []
dependency_roles: {"thm-csm-chain-dlr-uniqueness": "mathematical-premise", "thm-csm-ising-chain-convergent-series": "mathematical-premise", "post-csm-interacting-equilibrium-gibbs": "physical-assumption", "def-countable-choice": "mathematical-premise", "lem-csm-chain-markov-bridge": "mathematical-premise", "thm-tdmath-ising-chain-limit": "mathematical-premise"}
proof_strategy: direct
physical_scope: "One-dimensional classical nearest-neighbor Ising model at finite positive temperature; exact conditional model example, not experimental evidence."
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

## Example

For a one-dimensional zero-field nearest-neighbor Ising chain with coupling energy $J=J_{\rm I}>0$ joules and temperature $T>0$ kelvin, let $\beta=(k_BT)^{-1}$ in $\mathrm{J}^{-1}$ and $K=\beta J$, which is dimensionless. The dimensionless pressure per site is $p(K)=\lim_{N\to\infty}N^{-1}\log Z_N=\log(2\cosh K)$, where $Z_N=\sum_{s\in\{-1,+1\}^N}\exp(K\sum_{i=1}^N s_i s_{i+1})$ for periodic chains with $N\geq2$ and $s_{N+1}=s_1$, the infinite-volume DLR law is a stationary Markov chain, and for $0<K<1/2$ this dimensionless pressure has the convergent series from [[thm-csm-ising-chain-convergent-series]]. Under the adopted Gibbs-equilibrium postulate this is a conditional model example, not an experimental observation.

## Facts & Assumptions

**Given:** The finite-range one-dimensional zero-field Ising model, $J>0$, $\beta>0$, and the adopted classical equilibrium interpretation.

[F1] The chain's positive transfer matrix yields a unique stationary Markov DLR law ([[lem-csm-chain-markov-bridge]], [[thm-csm-chain-dlr-uniqueness]]).

[F2] The zero-field chain pressure has the absolutely convergent series for $|K|<1/2$ ([[thm-csm-ising-chain-convergent-series]]).

[F3] Gibbs/DLR states are adopted as the equilibrium model for the chosen Hamiltonian and reference ([[post-csm-interacting-equilibrium-gibbs]]).

[F4] For the periodic Ising chain with finite $\beta>0$ and $J,h\in\mathbb R$, $Z_N=\operatorname{tr}(T^N)=\lambda_+^N+\lambda_-^N$ for $T_{s,t}=e^{\beta Jst+\beta h(s+t)/2}$, with $\lambda_+>|\lambda_-|$ and pressure $\log\lambda_+$ ([[thm-tdmath-ising-chain-limit]]).

[A1] Countable Choice is carried by the chain measure construction ([[def-countable-choice]]).

## Verification

1.1 The transfer-matrix construction in [F1] supplies a stationary Markov probability; the DLR uniqueness theorem gives the finite-volume endpoint limits and identifies that probability as the sole infinite-volume DLR state. [A1, F1]

1.2 Apply [F4] at $h=0$ with the given finite $J>0$ and $\beta>0$. Its Hamiltonian is exactly $-J\sum_{i=1}^N s_i s_{i+1}$, so its counting-measure partition is the $Z_N$ in the Example. In the spin order $+1,-1$, $T=\begin{pmatrix}e^K&e^{-K}\\e^{-K}&e^K\end{pmatrix}$ has eigenvalues $\lambda_+=e^K+e^{-K}=2\cosh K$ and $\lambda_-=e^K-e^{-K}$. Thus $Z_N=\lambda_+^N(1+q^N)$, where $q=\lambda_-/\lambda_+\in(0,1)$. Consequently $0\leq N^{-1}\log Z_N-\log\lambda_+=N^{-1}\log(1+q^N)\leq N^{-1}\log2\to0$. This proves $p(K)=\log(2\cosh K)$ for every finite $K>0$. When $0<K<1/2$, [F2] additionally supplies the series and its absolute and compact-uniform convergence. [F2, F4, algebra]

2.1 The physical reading is conditional on [F3]. It predicts the named Gibbs state for this classical model only; it does not claim a measured pressure, equilibration, or agreement with a particular material. [F3, step 1.1, step 1.2] ∎ 
