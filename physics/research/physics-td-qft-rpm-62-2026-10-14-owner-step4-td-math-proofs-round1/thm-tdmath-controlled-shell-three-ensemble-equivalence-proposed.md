---
id: thm-tdmath-controlled-shell-three-ensemble-equivalence
kind: theorem
title: Controlled shrinking energy-density shell and three-ensemble equivalence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
  - lem-tdmath-canonical-empirical-field-conditioning
  - def-tdmath-superstable-regular-interaction
  - thm-tdmath-continuum-variational-pressure
  - thm-tdmath-fixed-n-local-ensemble-equivalence
  - thm-tdmath-periodic-fixed-n-limit
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  lem-tdmath-canonical-empirical-field-conditioning: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-fixed-n-local-ensemble-equivalence: mathematical-premise
  thm-tdmath-periodic-fixed-n-limit: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 4–5, printed pp.181–187 / PDF pp.11–17: energy concentration and variational limits."
    - title: "D. Ruelle, Superstable Interactions in Classical Statistical Mechanics"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Sections 1–3, printed pp.131–145 / PDF pp.4–18: cell coercivity and tail controls used for local compactness."
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB as in [[thm-tdmath-continuum-variational-pressure]]. Assume the superstable regular model of [[thm-tdmath-periodic-fixed-n-limit]], an interior density $N_L/L^d\to\rho$, and differentiability of $\beta\mapsto F_\beta(\rho)$ at $\beta>0$. Put $e=-\partial_\beta F_\beta(\rho)$. Suppose the grand variational minimizer at a supporting activity $z>0$ is a singleton $P_*$. Let $R_{L,\omega}$ be the periodized empirical field of [[def-tdmath-periodized-empirical-field]]. There exists a specified sequence $\delta_L\downarrow0$ such that the uniform positional shell law
$$Q_{\Lambda_L}\!\left(\,\cdot\ \middle|\ N=N_L,\ \left|H_{L,\mathrm{per}}/L^d-e\right|\leq\delta_L\right)$$
is eventually defined, and its empirical field converges in probability in $\tau_L$ to $P_*$. The free and periodic exact-$N$ canonical empirical fields and the matching periodic grand-canonical empirical field converge in probability to the same limit. The energy width $2\delta_LL^d=o(L^d)$; no arbitrary prescribed width or zero-width surface measure is asserted.

## Facts & Assumptions

**Given:** AC, the ultrafilter extension principle, DC, HB, the interaction, density, differentiability, supporting activity, and singleton minimizer stated above.

[F1] [[thm-tdmath-periodic-fixed-n-limit]]: periodic exact-$N$ log partitions converge to $F_\beta(\rho)$, and their empirical fields concentrate near the supporting minimizer set. [[lem-tdmath-canonical-empirical-field-conditioning]], applied with $b=\mathrm{per}$ and that canonical rate limit, supplies the strictly negative exponential rate outside every neighborhood used in step 3.1.

[F2] [[thm-tdmath-fixed-n-local-ensemble-equivalence]]: free exact-$N$ empirical fields concentrate near the supporting grand minimizer set.

[F3] [[thm-tdmath-continuum-variational-pressure]]: the grand variational minimizer set is compact in $\tau_L$.

[F4] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: periodized empirical fields are stationary laws with intensity $N_L/L^d$.

[L1] Georgii's Theorem 2 (1994, Sections 3–5) gives the good $\tau_L$ large-deviation principle for periodized empirical fields under the periodic grand-canonical law, with zero set equal to its stationary variational minimizers. The complete proof was read.

## Proof

**Given:** The assumptions and suppliers in Facts & Assumptions.

1.1 Let $C_L$ be the periodic exact-$N_L$ canonical law. For $|t|<\beta$, $$ E_{C_L}e^{tH_{\mathrm{per}}} =Z_{\mathrm{per}}(L,N_L;\beta-t)/Z_{\mathrm{per}}(L,N_L;\beta). $$ By [F1], the normalized log moment generating function converges to $F_{\beta-t}(\rho)-F_\beta(\rho)$, whose derivative at zero is $e$. For any fixed $\epsilon>0$, choose small positive and negative $t$ so the Chernoff exponents for $H/L^d\geq e+\epsilon$ and $H/L^d\leq e-\epsilon$ are strictly negative. Hence the canonical probability outside the fixed $\epsilon$-window tends to zero. [F1, algebra]

2.1 Choose strictly increasing thresholds $L_k\ge k$ so that for every $L\geq L_k$ the probability outside the $1/k$ window is at most $1/k$. Set $k(L)=\max\{k:L_k\leq L\}$ and $\delta_L=1/k(L)$. Then $\delta_L\downarrow0$ and the canonical probability of the selected shell tends to one. Positivity of the canonical weight on the shell implies positive Poisson reference measure, so the shell law is defined eventually. [step 1.1, choose]

3.1 Let $U$ be any open $\tau_L$ neighborhood of $P_*$ and let $S_L$ be the selected shell event. On $S_L$, the unnormalized periodic Boltzmann factor lies between $e^{-\beta L^d(e+\delta_L)}$ and $e^{-\beta L^d(e-\delta_L)}$. The normalization constants cancel when comparing conditional probabilities, so
$$Q_{\Lambda_L}(R_{L,\omega}\notin U\mid S_L)\leq\frac{e^{2\beta\delta_L L^d}}{C_L^{\mathrm{per}}(S_L)}\,C_L^{\mathrm{per}}(R_{L,\omega}\notin U).$$
By step 2.1, $C_L^{\mathrm{per}}(S_L)\to1$. By [F1], the last probability has a strictly negative exponential rate. Since $\delta_L\to0$, the right side tends to zero. Thus the uniform shell empirical field converges in probability to $P_*$. [F1, F4, step 2.1, algebra]

4.1 The free exact-$N$ empirical field converges in probability by [F2]. The periodic grand empirical fields obey the good LDP [L1]; its unique zero is $P_*$ by [F3], so the probability outside each neighborhood of $P_*$ tends to zero. Together with steps 2.1 and 3.1, this proves the stated three-ensemble conclusion. [F2, F3, F4, L1, step 3.1] ∎
