---
id: thm-tdmath-controlled-shell-three-ensemble-equivalence
kind: theorem
title: Controlled shrinking energy-density shell and three-ensemble equivalence
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 9
deps:
  - def-tdmath-superstable-regular-interaction
  - thm-tdmath-continuum-variational-pressure
  - thm-tdmath-fixed-n-local-ensemble-equivalence
  - thm-tdmath-periodic-fixed-n-limit
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
  - lem-tdmath-canonical-empirical-field-conditioning
  - def-axiom-of-choice
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-fixed-n-local-ensemble-equivalence: mathematical-premise
  thm-tdmath-periodic-fixed-n-limit: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
  lem-tdmath-canonical-empirical-field-conditioning: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB, and the superstable regular model of [[thm-tdmath-periodic-fixed-n-limit]], an interior density $N_L/L^d\to\rho$, and differentiability of $\beta\mapsto F_\beta(\rho)$ at $\beta>0$. Put $e=-\partial_\beta F_\beta(\rho)$. Suppose the grand variational minimizer at a supporting activity $z>0$ is a singleton $P_*$. Let $R_{L,\omega}$ be the periodized empirical field of [[def-tdmath-periodized-empirical-field]]. There exists a specified sequence $\delta_L\downarrow0$ such that the uniform positional shell law
$$Q_{\Lambda_L}\!\left(\,\cdot\ \middle|\ N=N_L,\ \left|H_{L,\mathrm{per}}/L^d-e\right|\leq\delta_L\right)$$
is eventually defined, and its empirical field converges in probability in $\tau_L$ to $P_*$. The free and periodic exact-$N$ canonical empirical fields and the matching periodic grand-canonical empirical field converge in probability to the same limit. Convergence in probability here uses outer probabilities for arbitrary open neighborhoods, as defined in [[lem-tdmath-canonical-empirical-field-conditioning]], and ordinary probabilities for measurable ones. The energy width $2\delta_LL^d=o(L^d)$; no arbitrary prescribed width or zero-width surface measure is asserted.

## Facts & Assumptions

**Given:** The four named choice hypotheses, interaction, density, differentiability, supporting activity, and singleton minimizer stated above.

[A1] [[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], and [[def-hahn-banach-extension-principle-relative]] carry the compactness assumptions of the variational and conditioning suppliers.

[F1] [[thm-tdmath-periodic-fixed-n-limit]]: periodic exact-$N$ log partitions converge to $F_\beta(\rho)$, and their empirical fields concentrate near the supporting minimizer set; that statement alone supplies no exponential rate.

[F2] [[thm-tdmath-fixed-n-local-ensemble-equivalence]]: free exact-$N$ empirical fields concentrate near the supporting grand minimizer set.

[F3] [[thm-tdmath-continuum-variational-pressure]]: the grand variational minimizer set is compact in $\tau_L$.

[F4] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: periodized empirical fields are stationary laws with intensity $N_L/L^d$.

[F5] [[lem-tdmath-canonical-empirical-field-conditioning]]: under the four choice hypotheses, superstability, regularity, an interior density, a supporting activity, and the exact-$N$ canonical rate, for either boundary condition the outer probability outside every open neighborhood of the grand minimizer set has a strictly negative exponential rate.

[L1] Georgii's Theorem 2 (1994, Sections 3–5) gives the good $\tau_L$ large-deviation bounds on evaluation-measurable sets for periodized empirical fields under the periodic grand-canonical law, with zero set equal to its stationary variational minimizers. The complete Sections 3–5 proof was read; arbitrary open neighborhoods are handled below by measurable basic neighborhoods.

## Proof

**Given:** The assumptions and suppliers in Facts & Assumptions.

1.1 Let $C_L$ be the periodic exact-$N_L$ canonical law. For $|t|<\beta$, $$ E_{C_L}e^{tH_{\mathrm{per}}} =Z_{\mathrm{per}}(L,N_L;\beta-t)/Z_{\mathrm{per}}(L,N_L;\beta). $$ By [F1], the normalized log moment generating function converges to $F_{\beta-t}(\rho)-F_\beta(\rho)$, whose derivative at zero is $e$. For any fixed $\epsilon>0$, choose small positive and negative $t$ so the Chernoff exponents for $H/L^d\geq e+\epsilon$ and $H/L^d\leq e-\epsilon$ are strictly negative. Hence the canonical probability outside the fixed $\epsilon$-window tends to zero. [F1, algebra]

1.2 The supporting activity and singleton minimizer are given. The exact-$N$ periodic rate is [F1]; the choices in [A1], the superstable regular potential, and the empirical-field convention [F4] are precisely the other hypotheses of [F5]. Applying [F5] with periodic boundary gives, for every open $U\ni P_*$, a constant $c_U>0$ with $\limsup L^{-d}\log C_L^*(R_{L,\omega}\notin U)\leq-c_U$. This supplies the exponential estimate needed for the shell comparison. [A1, F1, F3, F4, F5, algebra]

2.1 Choose strictly increasing thresholds $L_k\geq k$ so that for every $L\geq L_k$ the probability outside the $1/k$ window is at most $1/k$. Set $k(L)=\max\{k:L_k\leq L\}$ and $\delta_L=1/k(L)$. Then $\delta_L\downarrow0$ and the canonical probability of the selected shell tends to one. Positivity of the canonical weight on the shell implies positive Poisson reference measure, so the shell law is defined eventually. [step 1.1, choose]

3.1 Let $U$ be any open $\tau_L$ neighborhood of $P_*$ and let $S_L=\{N=N_L,\ |H_{L,\mathrm{per}}/L^d-e|\leq\delta_L\}$ be the selected shell event. On $S_L$, the unnormalized periodic Boltzmann factor lies between $e^{-\beta L^d(e+\delta_L)}$ and $e^{-\beta L^d(e-\delta_L)}$. For each measurable event, the normalization constants cancel when comparing conditional probabilities; taking infima over measurable supersets gives the same inequality for outer probabilities, so
$$(Q_{\Lambda_L}(\,\cdot\mid S_L))^*(R_{L,\omega}\notin U)\leq\frac{e^{2\beta\delta_L L^d}}{C_L^{\mathrm{per}}(S_L)}\,(C_L^{\mathrm{per}})^*(R_{L,\omega}\notin U).$$
By step 2.1, $C_L^{\mathrm{per}}(S_L)\to1$. By step 1.2, the last outer probability has a strictly negative exponential rate. Since $\delta_L\to0$, the right side tends to zero. Thus the uniform shell empirical field converges in probability to $P_*$. [F4, step 2.1, step 1.2, algebra]

4.1 For any open neighborhood $U$ of $P_*$, choose a basic neighborhood $V$ of $P_*$ contained in $U$, defined by finitely many strict tame-expectation inequalities. It is evaluation-measurable. The free exact-$N$ empirical fields concentrate on $V$ by [F2], so their outer probabilities outside $U$ vanish. The periodic grand empirical fields obey the good LDP [L1]; its unique zero is $P_*$ by [F3], so the measurable-set upper bound outside $V$ has a strictly negative rate by compactness of rate sublevels. As $U^c\subseteq V^c$, its outer probability tends to zero. Together with steps 2.1 and 3.1, this proves the stated three-ensemble conclusion. [F2, F3, F4, L1, step 3.1] ∎
