---
id: thm-csm-dobrushin-finite-range-uniqueness
kind: theorem
title: "Finite-range Dobrushin uniqueness and boundary influence"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps: ["lem-csm-maximal-coupling-and-heat-bath", "thm-csm-lattice-dlr-existence", "def-countable-choice", "thm-bolzano-weierstrass", "def-csm-finite-range-lattice-interaction"]
justified_by: []
dependency_roles: {"lem-csm-maximal-coupling-and-heat-bath": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise", "def-countable-choice": "mathematical-premise", "thm-bolzano-weierstrass": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise"}
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
id: thm-csm-dobrushin-finite-range-uniqueness
kind: theorem
title: "Finite-range Dobrushin uniqueness and boundary influence"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps: ["lem-csm-maximal-coupling-and-heat-bath", "thm-csm-lattice-dlr-existence", "def-countable-choice", "thm-bolzano-weierstrass", "def-csm-finite-range-lattice-interaction"]
justified_by: []
dependency_roles: {"lem-csm-maximal-coupling-and-heat-bath": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise", "def-countable-choice": "mathematical-premise", "thm-bolzano-weierstrass": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise"}
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

Assume Countable Choice, a finite-alphabet finite-range lattice specification on $\mathbb Z^d$, and $\beta>0$. For each pair of sites define $c_{ij}$ as the supremum of the half-total-variation change in the one-site conditional law at $i$ when only exterior spin $j$ is changed, with $c_{ii}=0$. If
$$c=\sup_i\sum_jc_{ij}<1,$$
then the DLR state is unique. Moreover, for a finite region $\Lambda$, two boundary conditions $\xi,\eta$, and a nonnegative integer $r$, if site $i$ has lattice $\ell^\infty$-distance at least $r(R+1)$ from $\Lambda^c$, its stationary disagreement probability in the finite-volume heat-bath coupling is at most $c^r/(1-c)$, where $R$ is the interaction range defined by [[def-csm-finite-range-lattice-interaction]]. Consequently every local conditional expectation becomes uniformly insensitive to boundary conditions as $\Lambda\uparrow\mathbb Z^d$.

## Facts & Assumptions

**Given:** A finite-alphabet finite-range specification, the half-total-variation influence matrix $(c_{ij})$, the strict row-sum bound $c<1$, and Countable Choice.

[A1] Countable Choice is used for the DLR existence and product-measure extension inputs ([[def-countable-choice]]).

[F1] For two finite conditional laws there is a coupling whose disagreement probability equals their half-total-variation distance; the auxiliary finite heat-bath chain has a unique stationary Gibbs marginal ([[lem-csm-maximal-coupling-and-heat-bath]]).

[F2] A DLR state exists under Countable Choice and finite-range finite-alphabet hypotheses ([[thm-csm-lattice-dlr-existence]]).

[F3] A nonzero single-site influence can occur only between sites at $\ell^\infty$-distance at most the interaction range $R$ ([[def-csm-finite-range-lattice-interaction]]).

[F4] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]).

## Proof
1.1 Couple the two random-scan heat-bath chains by updating the same uniformly chosen site and using the maximal coupling in [F1] for its conditional laws. For the finite pair chain, take Cesàro averages of iterated laws. The probability simplex is finite-dimensional, so [F4], applied coordinatewise, gives a convergent subsequence; the difference between an average and its one-step image is the first law minus the last law divided by the number of terms, hence tends to zero. The limit is stationary. Its marginals are stationary for the marginal chains and therefore equal their finite-volume Gibbs laws by [F1]. If $N=|\Lambda|>0$ and $q_i$ is the stationary disagreement probability at site $i$, stationarity under random scan gives $q_i$ equal to the disagreement probability conditional on updating $i$. For each pair of configurations, telescope the one-site conditional laws by changing each differing neighbor one at a time; maximal coupling and the definition of $c_{ij}$ bound the mismatch by $\sum_{j\in\Lambda}c_{ij}\mathbf1_{\{X_j\ne Y_j\}}+b_i$, where $b_i=\sum_{j\notin\Lambda}c_{ij}\mathbf1_{\{\xi_j\ne\eta_j\}}$. Averaging gives $q_i\leq\sum_{j\in\Lambda}c_{ij}q_j+b_i$. For $N=0$ there are no sites to bound. [given, F1, F4, algebra]

2.1 Let $C_\Lambda=(c_{ij})_{i,j\in\Lambda}$. Iterating the inequality in step 1.1 gives $q\leq C_\Lambda^n\mathbf1+\sum_{k=0}^{n-1}C_\Lambda^kb$. Every row sum of $C_\Lambda$ is at most $c<1$, so $\|C_\Lambda^n\mathbf1\|_\infty\leq c^n\to0$. A nonzero term of $(C_\Lambda^kb)_i$ is an influence path of $k$ internal edges followed by one edge to the exterior; each edge changes $\ell^\infty$-distance by at most $R$ by [F3]. For $R\geq1$ and $\operatorname{dist}_\infty(i,\Lambda^c)\geq r(R+1)$, such a path has at least $r+1$ edges, hence $k\geq r$. Since $0\leq b_i\leq c<1$, its total weight is bounded by $\sum_{k\geq r}c^k=c^r/(1-c)$. If $R=0$, all off-diagonal influences vanish and the boundary term is zero, so the same bound holds. [given, F3, step 1.1, algebra]

3.1 For a bounded local $f$, let $\delta_i(f)$ be its maximum change when only spin $i$ changes. Coordinate-by-coordinate coupling gives $|\gamma_\Lambda(f\mid\xi)-\gamma_\Lambda(f\mid\eta)|\leq\sum_{i\in\operatorname{supp}f}\delta_i(f)q_i$. Step 2.1 makes this bound tend to zero uniformly over the boundary conditions as $\Lambda$ exhausts the lattice. [step 2.1, algebra]

4.1 Let $\mu,\nu$ be DLR states, which exist by [F2]. Integrate the uniform boundary difference from step 3.1 against $\mu(d\xi)\nu(d\eta)$; using $\mu\gamma_\Lambda=\mu$ and $\nu\gamma_\Lambda=\nu$ gives $\mu(f)=\nu(f)$ for every bounded local $f$. Cylinder indicators are local, so the measures agree on a generating family and hence are equal. [A1, F2, step 3.1] ∎
