---
id: thm-tdmath-finite-range-lattice-pressure-limit
kind: theorem
title: "Finite-range lattice log-partition limit"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-natural-logarithm","def-tdmath-bounded-finite-range-lattice","thm-division-algorithm-in-z","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"def-natural-logarithm":"mathematical-premise","def-tdmath-bounded-finite-range-lattice":"mathematical-premise","thm-division-algorithm-in-z":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
---

## Statement

For every fixed $\beta>0$, the sequence $p_L(\beta)$ of [[def-tdmath-bounded-finite-range-lattice]] has a finite limit as $L\to\infty$. If another finite-volume energy $\widetilde H_L$ on the same configurations satisfies $\sup_s|\widetilde H_L(s)-H_L(s)|\le C_bL^{d-1}$ for a constant $C_b$ independent of $L$, define $\widetilde Z_L(\beta):=\sum_{s\in\mathcal A^{\Lambda_L}}e^{-\beta\widetilde H_L(s)}$ and $\widetilde p_L(\beta):=L^{-d}\log\widetilde Z_L(\beta)$. Then $\widetilde p_L$ has the same limit. The result covers finite-alphabet, bounded, translation-invariant finite-range interactions on cubic boxes; it asserts no continuum-particle or long-range limit.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] The dimension, alphabet, shapes, bounded interaction functions, free-boundary energies, and $\beta>0$ are exactly as in [[def-tdmath-bounded-finite-range-lattice]].

[F1] [[def-tdmath-bounded-finite-range-lattice]]: the alphabet has $q$ states per site, the (possibly empty) interaction list is finite, each term is bounded, and $Z_L$ is the finite partition sum.

[F3] [[thm-division-algorithm-in-z]]: for positive integer $\ell$ and integer $L\ge0$, write $L=k\ell+r$ with integer $k$ and remainder $0\le r<\ell$.

[F2] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is increasing and converts products to sums.

## Proof

**Given:** The bounded finite-range lattice data, $\beta>0$, and (for the boundary comparison clause) the uniform $C_bL^{d-1}$ energy bound.

1.1 Write $V=L^d$ and $J_0=\sum_a\|\Phi_a\|_\infty$. Each configuration satisfies $|H_L(s)|\le J_0V$, so $q^Ve^{-\beta J_0V}\le Z_L\le q^Ve^{\beta J_0V}$. Hence $p_L$ is bounded above and below uniformly in $L$. [A1, F1, F2]

1.2 Fix an integer block length $\ell>2R$ and write $L=k\ell+r$ with $0\le r<\ell$ using [F3]. If $k<0$, then $L=k\ell+r\le-\ell+r<0$, contrary to $L\ge0$, so $k\ge0$. For the limiting estimate take $L\ge\ell$, hence $k\ge1$. Partition $\Lambda_L$ into $k^d$ disjoint $\ell$-cubes and an outer remainder. Form $H_{L,\ell}^{\rm cut}$ by retaining only interactions whose entire support lies in one full cube and assigning zero energy to remainder sites. For a fixed shape, every eligible anchor lies in $[1-R,L+R]^d$. If its support crosses an internal block seam, its coordinate normal to that seam lies in at most $2R+1$ integer positions; the other coordinates have at most $(L+2R)^{d-1}$ choices. If it is not in such a seam strip but the interaction is omitted, its support meets the outer remainder, so its anchor lies within $\ell+2R+1$ layers of one of the $d$ outer faces. Counting at most $d(k-1)$ internal seams and $d$ outer faces bounds the omitted anchors per shape by $d(2R+1)(L/\ell)(L+2R)^{d-1}+d(\ell+2R+1)(L+2R)^{d-1}$. Therefore $\sup_s|H_L(s)-H_{L,\ell}^{\rm cut}(s)|\le J_0d[(2R+1)(L/\ell)+\ell+2R+1](L+2R)^{d-1}$. [A1, F1, F3]

2.1 If two energies on a finite state set differ pointwise by at most $D$, their partition sums satisfy $e^{-\beta D}Z'\le Z\le e^{\beta D}Z'$, so their log partition sums differ by at most $\beta D$ using [F2]. The cut energy factorizes over the cubes and has zero-energy remainder, hence $Z_{L,\ell}^{\rm cut}=Z_\ell^{k^d}q^{L^d-k^d\ell^d}$. Divide the comparison by $L^d$ and let $L\to\infty$ with $\ell$ fixed; the remainder fraction tends to zero, $k^d/L^d\to\ell^{-d}$, and the energy error has limsup at most $2^{d-1}\beta J_0d(2R+1)/\ell$. [A1, F1, F2, F3, step 1.2]

3.1 It follows for every $\ell>2R$ that $\limsup_L p_L\le p_\ell+2^{d-1}\beta J_0d(2R+1)/\ell$ and $\liminf_L p_L\ge p_\ell-2^{d-1}\beta J_0d(2R+1)/\ell$. Thus $0\le\limsup_Lp_L-\liminf_Lp_L\le2^d\beta J_0d(2R+1)/\ell$ for every such $\ell$. Letting $\ell\to\infty$ makes the difference zero; boundedness from step 1.1 then gives a finite limit. [A1, F1, step 1.1, step 2.1]

4.1 For $\widetilde H_L$, the finite-state comparison of step 2.1 gives $|L^{-d}\log\widetilde Z_L-p_L|\le\beta C_b/L$, which tends to zero. Its limit is therefore the same. [A1, F2, step 2.1, step 3.1] ∎
