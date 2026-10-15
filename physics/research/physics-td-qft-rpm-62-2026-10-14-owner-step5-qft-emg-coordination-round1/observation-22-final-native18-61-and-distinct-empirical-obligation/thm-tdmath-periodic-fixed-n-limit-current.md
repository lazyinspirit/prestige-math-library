---
id: thm-tdmath-periodic-fixed-n-limit
kind: theorem
title: Periodic fixed-particle canonical limit
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
  - def-tdmath-superstable-regular-interaction
  - lem-tdmath-integrable-tail-diagonal-gap
  - lem-tdmath-superstable-cell-energy-bound
  - thm-tdmath-canonical-interior-density-limit
  - thm-tdmath-canonical-grand-duality
  - thm-tdmath-continuum-variational-pressure
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
  - lem-tdmath-canonical-empirical-field-conditioning
  - thm-holder-inequality-for-integrals
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
  lem-tdmath-superstable-cell-energy-bound: mathematical-premise
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  thm-tdmath-canonical-grand-duality: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
  lem-tdmath-canonical-empirical-field-conditioning: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Lemma 4.3 and Sections 4–5, printed pp.181–187 / PDF pp.11–17: periodic/free energy comparison and local limits."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–3, printed pp.131–145 / PDF pp.4–18: lattice-tail energy control."
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB, and the superstable regular interaction of [[thm-tdmath-continuum-variational-pressure]], $\beta>0$, and an interior attainable density $\rho>0$. For integers $N_L$ with $N_L/L^d\to\rho$, let $Z_{\mathrm{per}}(L,N_L;\beta)$ be the $1/N_L!$-normalized positional partition on the periodized cube, with the image convention of [[def-tdmath-superstable-regular-interaction]]. Then
$$L^{-d}\log Z_{\mathrm{per}}(L,N_L;\beta)\longrightarrow F_\beta(\rho),$$
the same rate as the free cube. Let $C^{\mathrm{per}}_{L,N_L}$ be the periodic exact-$N_L$ canonical law and $R_{L,\omega}$ its periodized empirical field from [[def-tdmath-periodized-empirical-field]]. For any finite supporting activity $z>0$ of $F_\beta$ at $\rho$, these empirical fields concentrate in every open $\tau_L$ neighborhood of the minimizer set of $I+\beta\Phi-\rho\log z$. Writing $\mathcal M_{z,\beta}$ for this minimizer set, the concentration means $(C^{\mathrm{per}}_{L,N_L})^*\{\omega:R_{L,\omega}\notin U\}\to0$ for every open $\tau_L$ neighborhood $U$ of it. Here outer probability is as defined in [[lem-tdmath-canonical-empirical-field-conditioning]], and equals ordinary probability for measurable events. A singleton minimizer gives convergence in probability in this outer-probability sense in $\tau_L$.

## Facts & Assumptions

**Given:** AC, the ultrafilter extension principle, DC, HB, and a superstable regular even pair potential, positive inverse temperature, and an interior canonical density.

[F1] [[def-tdmath-superstable-regular-interaction]]: stability and regularity give the finite canonical integrals and the stated periodic-image convention.

[F2] [[lem-tdmath-integrable-tail-diagonal-gap]]: separated-cell tails are summable and admit gaps with vanishing interaction per volume.

[F3] [[lem-tdmath-superstable-cell-energy-bound]]: $H\geq A\sum_iN_{C_i}^2-BN$, with $A>0$.

[F4] [[thm-tdmath-canonical-interior-density-limit]]: the free exact-$N$ cube rate is $F_\beta(\rho)$ at each interior density.

[F5] [[thm-tdmath-canonical-grand-duality]]: the canonical rate and grand pressure are convex duals; a supporting activity realizes equality.

[F6] [[thm-tdmath-continuum-variational-pressure]]: free and periodic normalized-Poisson grand pressures have the same limit $p_Q=-\min_P\{I(P)+\beta\Phi(P)-\rho(P)\log z\}$, with a nonempty compact minimizer set; the $1/N!$-normalized Lebesgue grand pressure is $p_Q+1$.

[F7] [[lem-tdmath-canonical-empirical-field-conditioning]]: for either boundary condition, if the exact-$N$ rate is $F_\beta(\rho)$, its periodized empirical fields concentrate near the grand variational minimizer set. The four named choice hypotheses are required, and convergence uses outer probabilities as defined in that supplier.

[F8] [[thm-holder-inequality-for-integrals]]: Hölder’s inequality makes the log of a finite positive Laplace integral convex in its scalar parameter.

[F9] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: a finite configuration determines a stationary empirical field with intensity equal to its particle number divided by volume.

[L1] Georgii, Lemma 4.3, states for an empty corridor of width $k$ that the periodic/free energy discrepancy is bounded by $c_d\delta_k T_L$, where $\delta_k\to0$ is the lattice tail and $T_L=\sum_iN_{C_i}^2$. The complete lemma and proof were read; this is used only under its superstable regular hypotheses.

## Proof

**Given:** The assumptions and suppliers in Facts & Assumptions.

1.1 For the upper bound, $e^{\alpha N_L}Z_{\mathrm{per}}(L,N_L;\beta)\leq\Xi_{\mathrm{per}}(L,e^\alpha,\beta)$ for every real $\alpha$. Divide logarithms by $L^d$, use the free/periodic grand limit [F6], and then take the infimum over $\alpha$. The canonical-grand duality [F5] gives $\limsup L^{-d}\log Z_{\mathrm{per}}\leq F_\beta(\rho)$. [F4, F5, F6, algebra]

1.2 Fix corridor width $k$ larger than the tail cutoff. Restrict the $N_L$ particles to the inner cube of side $L-k$, leaving the corridor empty. The exact-$N_L$ density is still $\rho$. The diagonal-gap supplier [F2] gives the vanishing regular-tail cutoff used here. By [L1], the periodized energy differs from the free inner-cube energy by at most $c_d\delta_kT_{L-k}$. The cell bound [F3] implies $T_{L-k}\leq A^{-1}(H_{L-k}+BN_L)$. Consequently $$ Z_{\mathrm{per}}(L,N_L;\beta)\geq e^{-\beta c_d\delta_k BN_L/A}\, Z(L-k,N_L;\beta(1+c_d\delta_k/A)). $$ The canonical theorem [F4] applies at the perturbed inverse temperature, giving the corresponding lower rate. [F1, F2, F3, F4, L1, algebra]

2.1 At fixed interior $\rho$, $F_\beta(\rho)$ is finite and convex as a function of $\beta>0$, by Hölder’s inequality [F8], since each finite-volume log partition is convex and the pointwise limit is finite. A finite convex function is continuous on the open interval: on a compact subinterval, its secant slopes are bounded by the slopes to fixed exterior endpoints. Let $L\to\infty$ in step 1.2 and then $k\to\infty$, so $\delta_k\to0$; continuity yields $\liminf\geq F_\beta(\rho)$. [F4, F8, step 1.2, algebra]

3.1 Step 2.1 established the periodic exact-$N_L$ rate $F_\beta(\rho)$, and [F5] supplies a finite supporting activity. The grand pressure identity in [F6] and the periodized empirical field in [F9] satisfy the hypotheses of [F7] with periodic boundary condition. Hence the outer probability outside each open neighborhood of the minimizer set tends to zero; if the set is a singleton, this is convergence in probability in the stated sense. [F5, F6, F7, F9, step 2.1, algebra] ∎
