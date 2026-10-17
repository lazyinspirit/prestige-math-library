---
id: thm-csm-ising-low-temperature-coexistence
kind: theorem
title: "Two-dimensional Ising Gibbs coexistence at low temperature"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps: ["lem-csm-peierls-energy-injection", "thm-csm-lattice-dlr-existence", "lem-csm-stationary-dlr-construction", "def-countable-choice", "def-real-exponential-function-and-e", "lem-csm-ising-parity-contours", "def-csm-lattice-gibbs-specification", "lem-csm-lattice-specification-consistency", "def-csm-finite-range-lattice-interaction", "thm-geometric-series", "thm-termwise-differentiation-of-a-real-power-series", "thm-algebra-of-derivatives", "thm-exponential-addition-formula", "cor-exponential-reciprocal-and-positivity", "thm-exponential-is-strictly-increasing"]
justified_by: []
dependency_roles: {"lem-csm-peierls-energy-injection": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise", "lem-csm-stationary-dlr-construction": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-real-exponential-function-and-e": "mathematical-premise", "lem-csm-ising-parity-contours": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-lattice-specification-consistency": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise", "thm-geometric-series": "mathematical-premise", "thm-termwise-differentiation-of-a-real-power-series": "mathematical-premise", "thm-algebra-of-derivatives": "mathematical-premise", "thm-exponential-addition-formula": "mathematical-premise", "cor-exponential-reciprocal-and-positivity": "mathematical-premise", "thm-exponential-is-strictly-increasing": "mathematical-premise"}
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

Assume Countable Choice. For the nearest-neighbor ferromagnetic Ising model on $\mathbb Z^2$ with coupling $J>0$, zero field, and $\beta J\geq2$, there exist two distinct translation-stationary DLR states $\mu_+$ and $\mu_-$ such that for every site $i$,
$$\mu_+(s_i)\geq m_*>0,\qquad \mu_-(s_i)\leq-m_*.$$
One may take $m_*=1-2\delta(\beta J)$, where
$$\delta(K)=\frac43\,\frac{r^4(5-4r)}{(1-r)^2},\qquad r=3e^{-2K}.$$
This is a sufficient low-temperature bound; the states are not asserted to be extremal and $K=2$ is not claimed to be critical.

## Facts & Assumptions

**Given:** A two-dimensional nearest-neighbor Ising model with $J>0$, $h=0$, $\beta>0$, plus boundary conditions on finite squares, and Countable Choice.

[A1] Countable Choice is retained exactly for the probability extension and DLR existence steps ([[def-countable-choice]]).

[F1] If the origin has spin $-1$ under plus boundary, at least one simple disagreement cycle has the origin in its parity-inside ([[lem-csm-ising-parity-contours]]).

[F2] For each such cycle $\gamma$, the event that all its crossed bonds disagree has Gibbs probability at most $e^{-2\beta J|\gamma|}$ ([[lem-csm-peierls-energy-injection]]).

[F3] Subsequential limits of finite-volume Gibbs laws are DLR, and translation averaging yields a stationary DLR law ([[thm-csm-lattice-dlr-existence]], [[lem-csm-stationary-dlr-construction]]).

[F4] The exponential is defined by its positive power series, so for $x>0$, $e^x=\sum_{n=0}^\infty x^n/n!$ ([[def-real-exponential-function-and-e]]).

[F5] For $0<r<1$, $\sum_{k=0}^\infty r^k=(1-r)^{-1}$ ([[thm-geometric-series]]). Termwise differentiation inside its radius and the quotient rule give $\sum_{k=0}^\infty(k+1)r^k=(1-r)^{-2}$ ([[thm-termwise-differentiation-of-a-real-power-series]], [[thm-algebra-of-derivatives]]).

[F6] The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$, is positive, and is strictly increasing ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]).

[F7] The nearest-neighbor model is the finite-range interaction with onsite term $\Phi_0(s_0)=0$ on $\{0\}$ and pair terms $\Phi_k(s_0,s_{e_k})=-Js_0s_{e_k}$ on $\{0,e_k\}$ for $k=1,2$. Its finite conditional kernels are proper and consistent by [[lem-csm-lattice-specification-consistency]].

## Proof
1.1 Write $K=\beta J$ and $r=3e^{-2K}$. A cycle with the origin in its parity-inside has an odd number of crossings of the positive horizontal ray. Along the full horizontal line, each crossing changes the sign of a dual vertex's $y$-coordinate; after one closed traversal that sign returns to its starting value, so the total number of crossings is even. Therefore the negative ray also has a crossing. Dual vertices have half-integer coordinates, so positive-ray crossings occur on vertical dual edges at $x=j+\tfrac12$ for integers $j\geq0$. If such a cycle has length $\ell$, its horizontal coordinate range includes a negative coordinate and this $x>0$; a closed lattice walk traverses that range in both directions, so it uses at least $2x$ horizontal edges and $x\leq\ell/2$. Thus there are at most $\ell+1$ possible positive-ray crossing edges. Choose the lower endpoint of each such edge; from it there are at most $4\cdot3^{\ell-1}$ nonbacktracking walks of length $\ell$, which overcounts the simple cycles using that crossing. Hence there are at most $4(\ell+1)3^{\ell-1}$ candidate simple cycles of length $\ell$. [given, F1, construct]

2.1 By [F2] and the union bound, $\gamma_{B_n}^{+}(s_0=-1)\leq\frac43\sum_{\ell\geq4}(\ell+1)r^\ell =\frac43\,r^4(5-4r)/(1-r)^2=\delta(K)$, using [F5] for $0<r<1$. [F1, F2, F5, step 1.1, algebra]

3.1 The first seven nonnegative terms of [F4] give $\exp(4)>\sum_{n=0}^{6}4^n/n!=437/9>48$. Since $K\geq2$, monotonicity and reciprocal positivity in [F6] imply $r=3\exp(-2K)\leq3\exp(-4)<1/16$. Thus $\delta(K)<\frac43(1/16)^4\cdot5/(15/16)^2<1/2$. The same translated contour count applies to every site in the box, so the plus-boundary magnetization there is at least $m_*=1-2\delta(K)>0$. [given, F4, F6, step 2.1, algebra]

4.1 The onsite and nearest-neighbor list in [F7] realizes the stated Hamiltonian, and its specification is proper and consistent. Take a subsequential limit of plus-boundary laws; by [F3] it is DLR and retains $\mu(s_i)\geq m_*$ for each fixed site. The zero-field nearest-neighbor Hamiltonian is invariant under simultaneous spin reversal, so the spin-reversed law is also DLR and has one-site expectations at most $-m_*$. Translation averaging as in [F3] preserves each bound and yields stationary $\mu_+,\mu_-$. They are distinct because their one-site expectations have opposite signs. [A1, F3, F7, step 3.1] ∎
