---
id: thm-tdmath-fixed-n-local-ensemble-equivalence
kind: theorem
title: Fixed-particle local ensemble equivalence at interior density
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
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
  - thm-tdmath-canonical-interior-density-limit
  - thm-tdmath-canonical-grand-duality
  - thm-tdmath-continuum-variational-pressure
  - lem-tdmath-canonical-empirical-field-conditioning
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  thm-tdmath-canonical-grand-duality: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  lem-tdmath-canonical-empirical-field-conditioning: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 3–5, printed pp.178–187 / PDF pp.8–17: stationary empirical fields, entropy bounds and variational minimizers."
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 3 and 5: local entropy bounds and block stationarization."
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB, and the superstable regular model of [[thm-tdmath-continuum-variational-pressure]], $\beta>0$, and an interior attainable density $\rho>0$. Let $N_L/L^d\to\rho$, let $C_{L,N_L}$ be the free-boundary positional canonical law with exactly $N_L$ particles, and let $R_{L,\omega}$ be its periodized empirical field from [[def-tdmath-periodized-empirical-field]]. Choose any finite supporting activity $z>0$ of $F_\beta$ at $\rho$ and set
$$\mathcal M_{z,\beta}:=\operatorname*{argmin}_{P\in\mathcal P^1_{\rm stat}}\{I(P)+\beta\Phi(P)-\rho(P)\log z\}.$$
For every open $\tau_L$ neighborhood $U$ of $\mathcal M_{z,\beta}$,
$$C_{L,N_L}^*\{\omega:R_{L,\omega}\notin U\}\longrightarrow0.$$
Here $C^*(E)$ is the outer probability defined in [[lem-tdmath-canonical-empirical-field-conditioning]]; convergence in probability uses this convention, agreeing with ordinary probability for measurable events.
If $\mathcal M_{z,\beta}=\{P_*\}$, then $R_{L,\omega}\to P_*$ in probability in $\tau_L$. This is local observable equivalence for a uniformly sampled bulk location; it makes no claim about the raw finite-box law at a fixed origin or about uniqueness for every interaction.

## Facts & Assumptions

**Given:** AC, the ultrafilter extension principle, DC, HB, and the hypotheses and free-boundary canonical convention above.

[F1] [[thm-tdmath-canonical-interior-density-limit]]: the free exact-$N$ rate converges to finite concave $F_\beta$ at every interior attainable density.

[F2] [[thm-tdmath-canonical-grand-duality]]: a finite supporting coefficient $\alpha=\log z$ satisfies $P(\alpha,\beta)=F_\beta(\rho)+\alpha\rho$.

[F3] [[thm-tdmath-continuum-variational-pressure]]: normalized grand pressure is $p_Q=P-1=-\min_P\{I(P)+\beta\Phi(P)-\rho(P)\log z\}$, with a nonempty compact minimizer set.

[F4] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: $R_{L,\omega}$ is the stationary local field obtained by averaging translations of the periodic continuation of the finite configuration.

[F5] [[lem-tdmath-canonical-empirical-field-conditioning]]: for either boundary condition, if the exact-$N$ rate is $F_\beta(\rho)$, conditioning its grand law on $N=N_L$ makes its periodized empirical field concentrate near the grand variational minimizer set. The four named choice hypotheses are required, and convergence uses outer probabilities as defined in that supplier.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Use the supporting activity $z>0$ chosen in the Statement and set $\alpha=\log z$, so $F_\beta(r)+\alpha r\le F_\beta(\rho)+\alpha\rho$ on its effective domain. Equivalently, $-\alpha$ is an ordinary supporting slope of the concave function $F_\beta$. The given activity is finite, as required by [F2]. [F1, F2, algebra]

2.1 The free exact-$N$ rate hypothesis of [F5] is exactly [F1], and [F2] supplies its supporting activity. The normalized/physical pressure conversion in [F3] is the equality required by [F5]; the empirical field is the stationary one in [F4]. Applying [F5] with free boundary gives concentration on $\mathcal M_{z,\beta}$ in every open $\tau_L$ neighborhood. [F1, F2, F3, F4, F5, step 1.1]

3.1 If the minimizer set is the singleton $\{P_*\}$, every open neighborhood of $P_*$ is a neighborhood of the full set. Step 2.1 therefore gives $C_{L,N_L}^*(R_{L,\omega}\notin U)\to0$ for every open $U\ni P_*$, which is convergence in probability in $\tau_L$. [F5, step 2.1] ∎
