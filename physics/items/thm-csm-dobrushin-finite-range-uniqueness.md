---
id: thm-csm-dobrushin-finite-range-uniqueness
kind: theorem
title: "Finite-range Dobrushin uniqueness and boundary influence"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps: ["lem-csm-maximal-coupling-and-heat-bath", "thm-csm-lattice-dlr-existence", "def-countable-choice", "thm-bolzano-weierstrass", "def-csm-lattice-gibbs-specification", "thm-geometric-series"]
justified_by: []
dependency_roles: {"lem-csm-maximal-coupling-and-heat-bath": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise", "def-countable-choice": "mathematical-premise", "thm-bolzano-weierstrass": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "thm-geometric-series": "mathematical-premise"}
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

Assume Countable Choice, $d\geq1$, a finite nonempty alphabet $A$, and a proper, consistent finite-range specification $\gamma$ on $X=A^{\mathbb Z^d}$ with its cylinder-generated Borel $\sigma$-algebra, using [[def-csm-lattice-gibbs-specification]]. Here consistency means $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ for finite $\Delta\subseteq\Lambda$, properness means $\gamma_\Lambda(r_\Lambda^{-1}(D)\mid\eta)=\mathbf1_D(\eta)$ for each exterior-measurable event $D\subseteq A^{\Lambda^c}$ and $\eta\in A^{\Lambda^c}$, where $r_\Lambda:X\to A^{\Lambda^c}$ is coordinate restriction; in compositions and integrals against measures on $X$, every kernel takes the appropriate exterior restriction of the global configuration as its argument, and finite range means each $\gamma_\Delta(\mathbf1_C\mid\cdot)$ for finite $\Delta$ and cylinder event $C$ depends on only finitely many exterior coordinates. Also assume a uniform finite integer radius $R\geq0$ such that each one-site kernel $\gamma_{\{i\}}$ depends only on exterior spins $j$ with $\|i-j\|_\infty\leq R$. For each pair of sites define $c_{ij}$ as the supremum of the half-total-variation change in the one-site conditional law at $i$ when only exterior spin $j$ is changed, where half-total variation for probability vectors $p,q$ on $A$ is $\frac12\sum_{a\in A}|p(a)-q(a)|$, and set $c_{ii}=0$. If
$$c=\sup_i\sum_jc_{ij}<1,$$
then the DLR state is unique. Moreover, for a finite region $\Lambda$ and two exterior conditions $\xi,\zeta$, couple the random-scan finite-volume heat-bath chains by choosing the same uniformly random site and using a maximal coupling of its two single-site conditional laws. A stationary joint law of this pair chain exists. If the distance $\operatorname{dist}_\infty(i,\Lambda^c):=\inf_{j\notin\Lambda}\|i-j\|_\infty$ is at least $r(R+1)$ for a nonnegative integer $r$, then its disagreement probability at $i$ is at most $c^r/(1-c)$. Consequently every local conditional expectation becomes uniformly insensitive to boundary conditions as $\Lambda\uparrow\mathbb Z^d$.

## Facts & Assumptions

**Given:** The proper consistent finite-alphabet specification, the uniform single-site locality radius $R$, the half-total-variation influence matrix $(c_{ij})$, the strict row-sum bound $c<1$, and Countable Choice.

[A1] Countable Choice is used for the DLR existence and product-measure extension inputs ([[def-countable-choice]]).

[F1] For any two probability vectors on a finite alphabet there is a coupling whose disagreement probability equals their half-total-variation distance ([[lem-csm-maximal-coupling-and-heat-bath]]).

[F2] A DLR state exists under Countable Choice for a proper consistent finite-range finite-alphabet specification ([[thm-csm-lattice-dlr-existence]]).

[F3] By the stated uniform locality radius, $c_{ij}=0$ whenever $\|i-j\|_\infty>R$.

[F4] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[F5] For $0\leq c<1$ and integer $r\geq0$, the geometric tail satisfies $\sum_{k\geq r}c^k=c^r/(1-c)$ ([[thm-geometric-series]]).

## Proof
1.1 Fix a finite $\Lambda$ and an exterior condition $\xi$. On $A^\Lambda$, define the random-scan heat-bath chain that chooses one site uniformly and resamples it from $\gamma_{\{i\}}(\cdot\mid x_{\Lambda\setminus\{i\}}\xi)$. Properness and consistency imply that the finite-volume law $\gamma_\Lambda(\cdot\mid\xi)$ is stationary for this chain: applying a one-site kernel to it leaves it unchanged by $\gamma_\Lambda\gamma_{\{i\}}=\gamma_\Lambda$. [given]

1.2 Any two stationary laws for the same-boundary chain have a stationary coupling: start with any coupling of them, evolve the pair using a common random site and the maximal coupling [F1], and take a convergent subsequence of Cesàro averages using [F4]. The marginals remain the given stationary laws. If $q_i$ is the stationary disagreement probability, then stationarity makes it equal to the mismatch probability on updating $i$. Telescoping the one-site conditional laws over the finitely many differing internal spins gives $q_i\leq\sum_{j\in\Lambda}c_{ij}q_j$. Therefore $\max_iq_i\leq c\max_iq_i$, so all $q_i=0$. Thus the finite-volume Gibbs law is the unique stationary law; this proof needs no positivity assumption on the one-site conditionals. [given, F1, F4, algebra]

2.1 For two boundary conditions $\xi,\zeta$, start the pair chain at the product of the two finite-volume Gibbs laws and use common-site maximal updates. Its marginal laws remain stationary by step 1.1; Cesàro averaging and [F4] therefore give a stationary coupling whose marginals are those Gibbs laws. For a current pair $X,Y$, telescoping the differing internal and exterior spins one at a time bounds the update mismatch at site $i$ by $\sum_{j\in\Lambda}c_{ij}\mathbf1_{\{X_j\ne Y_j\}}+b_i$, where $b_i=\sum_{j\notin\Lambda}c_{ij}\mathbf1_{\{\xi_j\ne\zeta_j\}}$. Under the stationary coupling, if $q_i=\Pr(X_i\ne Y_i)$, random-scan stationarity gives $q_i$ equal to the mismatch probability on updating $i$, hence $q_i\leq\sum_{j\in\Lambda}c_{ij}q_j+b_i$. For $\Lambda=\varnothing$ there are no coordinates to bound. [F1, F4, step 1.1]

3.1 Let $C_\Lambda=(c_{ij})_{i,j\in\Lambda}$. Iterating the inequality in step 2.1 gives $q\leq C_\Lambda^n\mathbf1+\sum_{k=0}^{n-1}C_\Lambda^kb$. Every row sum of $C_\Lambda$ is at most $c<1$, so $\|C_\Lambda^n\mathbf1\|_\infty\leq c^n\to0$. A nonzero term of $(C_\Lambda^kb)_i$ is an influence path of $k$ internal edges followed by one edge to the exterior; each edge changes $\ell^\infty$-distance by at most $R$ by [F3]. For $R\geq1$ and $\operatorname{dist}_\infty(i,\Lambda^c)\geq r(R+1)$, such a path has at least $r+1$ edges, hence $k\geq r$. Since $0\leq b_i\leq c<1$, its total weight is bounded by $\sum_{k\geq r}c^k=c^r/(1-c)$ by [F5]. If $R=0$, all off-diagonal influences vanish and the boundary term is zero, so the same bound holds. [given, F3, F5, step 2.1, algebra]

4.1 For a bounded local $f$, let $\delta_i(f)$ be its maximum change when only spin $i$ changes. Coordinate-by-coordinate coupling gives $|\gamma_\Lambda(f\mid\xi)-\gamma_\Lambda(f\mid\zeta)|\leq\sum_{i\in\operatorname{supp}f}\delta_i(f)q_i$. Step 3.1 makes this bound tend to zero uniformly over the boundary conditions as $\Lambda$ exhausts the lattice. [step 3.1, algebra]

5.1 Let $\mu,\nu$ be DLR states, which exist by [F2]. Integrate the uniform boundary difference from step 4.1 against $\mu(d\xi)\nu(d\zeta)$; using $\mu\gamma_\Lambda=\mu$ and $\nu\gamma_\Lambda=\nu$ gives $\mu(f)=\nu(f)$ for every bounded local $f$. Cylinder indicators are local, so the measures agree on a generating family and hence are equal. [A1, F2, step 4.1] ∎
