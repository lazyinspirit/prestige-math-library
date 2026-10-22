---
id: thm-csm-frontier-dobrushin-comparison
kind: theorem
title: "Finite-spin Dobrushin comparison and boundary response"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-countable-choice
  - def-csm-lattice-gibbs-specification
  - def-csm-frontier-dobrushin-matrix
  - lem-csm-maximal-coupling-and-heat-bath
  - thm-bolzano-weierstrass
  - thm-csm-dobrushin-finite-range-uniqueness
  - thm-geometric-series
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-lattice-gibbs-specification: mathematical-premise
  def-csm-frontier-dobrushin-matrix: mathematical-premise
  lem-csm-maximal-coupling-and-heat-bath: mathematical-premise
  thm-bolzano-weierstrass: mathematical-premise
  thm-csm-dobrushin-finite-range-uniqueness: mathematical-premise
  thm-geometric-series: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author-hosted book, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 6, §§6.5.1–6.5.2, equations (6.31)–(6.45), Theorem 6.31, Lemma 6.34 and proof, printed pp. 267–271 (PDF pp. 284–288). The book uses the full sum-of-absolute-differences convention; this item uses half-total variation."
    - title: "Patrick Rebeschini and Ramon van Handel, Comparison Theorems for Gibbs Measures"
      url: "https://arxiv.org/pdf/1308.4117"
      locator: "§§2.1–2.3, Theorem 2.4 and Corollary 2.6; §§3.1–3.3, the coupled-update comparison proof, PDF pp. 4–9 and 12–23."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\geq1$, let $S$ be a finite nonempty set, and put $X=S^{\mathbb Z^d}$ with its cylinder-generated Borel $\sigma$-algebra. Let $\gamma$ and $\widetilde\gamma$ be proper consistent finite-range specifications on $X$, each with a uniform finite one-site influence radius. Finite range means that for every finite $\Delta$ and cylinder event $A$, each function $\eta\mapsto\gamma_\Delta(\mathbf1_A\mid\eta)$ and $\eta\mapsto\widetilde\gamma_\Delta(\mathbf1_A\mid\eta)$ depends on only finitely many exterior coordinates, as in [[def-csm-lattice-gibbs-specification]]. For each $i,j\in\mathbb Z^d$, let $C_{ii}=0$ and let $C_{ij}\geq0$ dominate both Dobrushin coefficients $c^\gamma_{ij}$ and $c^{\widetilde\gamma}_{ij}$ of [[def-csm-frontier-dobrushin-matrix]]. Assume $C_{ij}=0$ whenever $\lVert i-j\rVert_\infty>R$ for some finite integer $R\geq0$ and assume

$$\sup_{i\in\mathbb Z^d}\sum_{j\in\mathbb Z^d}C_{ij}\leq c<1.$$

For each site $i$, define the one-site conditional discrepancy

$$b_i:=\sup_{\eta\in S^{\mathbb Z^d\setminus\{i\}}}\lVert\gamma_i(\cdot\mid\eta)-\widetilde\gamma_i(\cdot\mid\eta)\rVert_{\rm TV}.$$

Write $C_\Lambda=(C_{ij})_{i,j\in\Lambda}$ and $D^\Lambda:=\sum_{n=0}^\infty C_\Lambda^n$ for finite $\Lambda$, with $C_\Lambda^0$ the identity matrix on $\Lambda$; also write $D_{ij}:=\sum_{n=0}^\infty(C^n)_{ij}$ for the infinite-lattice resolvent entries. These sums are finite entrywise, because every row sum of $C^n$ and $C_\Lambda^n$ is at most $c^n$. A cylinder function is one depending only on the spins in some finite set. For a bounded real cylinder function $f:X\to\mathbb R$, define its oscillation by $\delta_i(f):=\sup_{\sigma,\sigma':\,\sigma_k=\sigma'_k\ (k\ne i)}|f(\sigma)-f(\sigma')|$; only finitely many $\delta_i(f)$ are nonzero.

For every nonempty finite $\Lambda$ containing a finite coordinate set $K_f$ on which $f$ depends, and exterior configurations $\xi,\zeta\in S^{\Lambda^c}$, the corresponding finite-volume Gibbs distributions satisfy

$$|\gamma_\Lambda(f\mid\xi)-\widetilde\gamma_\Lambda(f\mid\zeta)|\leq\sum_{i\in\Lambda}\delta_i(f)\sum_{k\in\Lambda}D^\Lambda_{ik}\left(b_k+\sum_{j\notin\Lambda}C_{kj}\mathbf1_{\{\xi_j\ne\zeta_j\}}\right).$$

Moreover, each specification has a unique DLR state, denoted $\mu$ and $\widetilde\mu$, and every bounded real cylinder function satisfies

$$|\mu(f)-\widetilde\mu(f)|\leq\sum_{i\in\mathbb Z^d}\delta_i(f)\sum_{j\in\mathbb Z^d}D_{ij}b_j.$$

In particular, when $\gamma=\widetilde\gamma$ the comparison bound is zero. The estimates are conditional mathematical consequences of the stated finite-spin specifications and strict row bound.

## Statement references

[[def-countable-choice]]

[[def-csm-lattice-gibbs-specification]]

[[def-csm-frontier-dobrushin-matrix]]

[[lem-csm-maximal-coupling-and-heat-bath]]

[[thm-bolzano-weierstrass]]

[[thm-csm-dobrushin-finite-range-uniqueness]]

[[thm-geometric-series]]

## Facts & Assumptions

**Given:** The finite-spin configuration space and DLR convention, two proper consistent finite-range specifications $\gamma,\widetilde\gamma$, a common finite-range matrix $C$ dominating both influence matrices, the strict row bound $c<1$, and a bounded cylinder function $f$.

[A1] Assume Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]). This is used only through the DLR existence theorem in [F6].

[F1] A specification on $S^{\mathbb Z^d}$ is proper and consistent when its kernels leave exterior events fixed and satisfy $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ for finite $\Delta\subseteq\Lambda$; its DLR states are probability measures satisfying $\mu\gamma_\Lambda=\mu$ for every finite $\Lambda$. Finite range means that every finite-volume kernel on a cylinder event depends on finitely many exterior coordinates ([[def-csm-lattice-gibbs-specification]]).

[F2] The coefficient $c^\gamma_{ij}$ bounds the total-variation change in the one-site conditional law at $i$ when only boundary spin $j$ changes, with the same definition for $\widetilde\gamma$ ([[def-csm-frontier-dobrushin-matrix]]).

[F3] For probability vectors on a finite set, a maximal coupling exists whose probability of disagreement equals their half-total-variation distance ([[lem-csm-maximal-coupling-and-heat-bath]]).

[F4] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[F5] For $0\leq c<1$, $\sum_{n=0}^\infty c^n=1/(1-c)$ and the tails tend to zero ([[thm-geometric-series]]).

[F6] Under Countable Choice, a proper consistent finite-alphabet specification with a uniform finite influence radius and strict Dobrushin row constant below $1$ has exactly one DLR state ([[thm-csm-dobrushin-finite-range-uniqueness]]).

## Proof

1.1 Fix finite $\Lambda$ and exterior configurations $\xi,\zeta$. Consistency in [F1] makes each finite-volume Gibbs distribution stationary under the random-scan heat-bath chain that chooses a site uniformly from $\Lambda$ and resamples its spin from the corresponding one-site kernel; the uniform mixture of invariant single-site updates remains invariant. [given, F1, algebra]

2.1 Couple the two finite-volume chains by choosing the same update site and using a maximal coupling from [F3] for the two one-site laws. Start the pair chain from the product of the two invariant marginals, so both marginals remain fixed at every time. The Cesàro averages of its distributions lie in a finite probability simplex; [F4] gives a convergent subsequence, and the limit is stationary because the difference between a Cesàro average and its one-step image is the initial-minus-final distribution divided by the averaging length. Its marginals are the two finite-volume Gibbs laws. Since a finite $\Lambda$ and finite range leave only finitely many exterior coordinates in these transition kernels, choose one such stationary law for each of the finitely many boundary-pattern pairs; this gives a measurable family for integrating over exterior configurations. [F1, F3, F4, step 1.1, algebra, construct]

3.1 Let $q_i$ be the stationary probability that the two configurations disagree at $i\in\Lambda$, and let $r_i$ be the mismatch probability if site $i$ is selected for update. One random-scan step leaves coordinate $i$ untouched with probability $1-|\Lambda|^{-1}$ and updates it with probability $|\Lambda|^{-1}$; stationarity therefore gives $q_i=(1-|\Lambda|^{-1})q_i+|\Lambda|^{-1}r_i$, hence $q_i=r_i$. The maximal-coupling property in [F3] makes $r_i$ the expected total-variation distance of the update laws. First change the kernel from $\gamma_i$ to $\widetilde\gamma_i$ at the same boundary configuration, costing at most $b_i$; then change the differing internal and exterior spins one at a time. By [F2] and the envelope $C$, the triangle inequality gives $q_i\leq b_i+\sum_{j\in\Lambda}C_{ij}q_j+\sum_{j\notin\Lambda}C_{ij}\mathbf1_{\{\xi_j\ne\zeta_j\}}$. The last sum is finite by the common finite-range assumption. [F2, F3, step 2.1, algebra]

4.1 Put $e_i=\sum_{j\notin\Lambda}C_{ij}\mathbf1_{\{\xi_j\ne\zeta_j\}}$. Iterating the vector inequality in step 3.1 gives $q\leq\sum_{n=0}^{N-1}C_\Lambda^n(b+e)+C_\Lambda^N\mathbf1$. Since every row sum of $C_\Lambda^N$ is at most $c^N$, [F5] makes the last term tend to zero, yielding $q\leq D^\Lambda(b+e)$. Coordinatewise telescoping of $f$ over its finite support then gives the stated finite-volume bound. [F5, step 3.1, algebra]

5.1 Let $\Lambda$ exhaust $\mathbb Z^d$. For fixed $i$, each fixed-length path contributing to $(C_\Lambda^n b)_i$ is eventually contained in $\Lambda$, and the omitted tail after length $N$ is at most $\lVert b\rVert_\infty c^{N+1}/(1-c)$ by [F5]. Thus $\sum_n(C_\Lambda^n b)_i\to(D b)_i$. A path contributing to $(C_\Lambda^n e)_i$ must consist of $n$ internal edges followed by one edge to $\Lambda^c$. Because each edge has length at most $R$, every such path has at least $m_\Lambda(i):=\lfloor\operatorname{dist}_\infty(i,\Lambda^c)/R\rfloor$ edges when $R>0$; $m_\Lambda(i)\to\infty$. The sum of weights of all paths of length at least $m_\Lambda(i)$ is at most $\sum_{m\geq m_\Lambda(i)}c^m$, which tends to zero by [F5]. If $R=0$, every off-diagonal coefficient is zero and the boundary term is identically zero. [F5, step 4.1, algebra]

6.1 The hypotheses of [F6] apply separately to $\gamma$ and $\widetilde\gamma$, because their influence matrices are bounded entrywise by $C$ and hence have row constants at most $c<1$. Their unique DLR states exist. For each finite $\Lambda$ containing the support of $f$, integrate the finite-volume estimate from step 4.1 against the product of the two exterior marginals of $\mu$ and $\widetilde\mu$. The DLR identities in [F1] identify the left side with $|\mu(f)-\widetilde\mu(f)|$; then step 5.1 and the finite support of $f$ give the asserted infinite-volume inequality. Setting $b=0$ gives equality of all cylinder expectations, hence equality of the two measures because cylinder events generate the Borel $\sigma$-algebra. [A1, F1, F6, step 4.1, step 5.1] ∎
