---
id: "pthm-td-interacting-three-ensemble-local-limit"
kind: "physics-theorem"
title: "Interacting exact-N shrinking-shell three-ensemble local limit"
status: "published"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Superstable regular classical positional Borel pair systems in periodic boxes, at positive temperature and interior density, with differentiable canonical rate and a singleton grand variational minimizer; local observables use the same periodic continuation, and kinetic momentum is excluded."
deps: [def-axiom-of-choice, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-td-stable-tempered-continuum-preparation, post-td-classical-indistinguishable-particle-measure, post-td-equilibrium-ensemble-sampling, post-td-grand-variational-phase-uniqueness, def-td-controlled-fixed-n-energy-shell, def-tdmath-superstable-regular-interaction, thm-tdmath-periodic-fixed-n-limit, thm-tdmath-fixed-n-local-ensemble-equivalence, thm-tdmath-controlled-shell-three-ensemble-equivalence, lem-tdmath-periodic-law-local-tame-transfer]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  post-td-classical-indistinguishable-particle-measure: physical-assumption
  post-td-equilibrium-ensemble-sampling: physical-assumption
  post-td-grand-variational-phase-uniqueness: physical-assumption
  def-td-controlled-fixed-n-energy-shell: formulation-prerequisite
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-periodic-fixed-n-limit: mathematical-premise
  thm-tdmath-fixed-n-local-ensemble-equivalence: mathematical-premise
  thm-tdmath-controlled-shell-three-ensemble-equivalence: mathematical-premise
  lem-tdmath-periodic-law-local-tame-transfer: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans-Otto Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction, Probability Theory and Related Fields 99 (1994), 171–195"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    - title: "David Tong, Statistical Physics (author-hosted Cambridge lecture notes)"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Konstantin K. Likharev, Essential Graduate Physics, Part SM: Statistical Mechanics (2024 author-hosted lecture notes)"
      url: "https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/02%3A_Principles_of_Physical_Statistics/2.02%3A_Microcanonical_ensemble_and_distribution"
proof_strategy: direct
dependency_level: 10
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

Assume AC, the ultrafilter extension principle, DC, and HB as required by the current variational-pressure supplier. Take $T>0$ in kelvins and $\beta=(k_{\mathrm B}T)^{-1}$ in $\mathrm{J}^{-1}$ as in [[post-td-equilibrium-ensemble-sampling]]. Let $E_0=1\,\mathrm J$, $\widehat\varphi=\varphi/E_0$, and assume $\widehat\varphi$ is Borel measurable. Require the exact superstable regular hypotheses of [[def-tdmath-superstable-regular-interaction]]; use $\widehat H=H/E_0$ and $\widehat\beta=E_0\beta>0$ in its mathematical suppliers. Let $F(\rho,\beta)$ denote the dimensionless canonical log-partition rate per dimensionless reference volume evaluated at $\widehat\beta$. Assume it is differentiable in physical $\beta$ at the chosen temperature and set $e=-\partial_\beta F(\rho,\beta)$, in joules per dimensionless reference volume. For periodic cubes $\Lambda_n$, take exact particle numbers $N_n$ with $N_n/V_n\to\rho$ at a positive interior attainable density; $\rho$ is particle count per dimensionless reference volume, corresponding to physical number density $\rho/\ell_0^d$ in $\mathrm{m}^{-d}$. Choose $\alpha\in\mathbb R$ such that $F(s,\beta)+\alpha s\leq F(\rho,\beta)+\alpha\rho$ for every $s$ in the closed effective density domain of $F$, and set $z=e^\alpha>0$. Assume the corresponding stationary finite-intensity grand variational minimizer is the singleton $P^\ast$ as in [[post-td-grand-variational-phase-uniqueness]].

Then there exists a constructed sequence $\delta_n\downarrow0$ for which the periodic exact-$N_n$ canonical positional law, the periodic grand-canonical law at $(\alpha,\beta)$, and the uniform positional shell law of [[def-td-controlled-fixed-n-energy-shell]] on
$$N=N_n,\qquad |H_{L_n,\mathrm{per}}/V_n-e|\leq\delta_n,\qquad L_n=2n+1$$
all converge locally to $P^\ast$. Convergence means convergence of expectations for every measurable local observable $f$ supported in a bounded region and satisfying $|f|\leq c(1+N_A)$ there. The shell sequence is constructed from canonical concentration; each $\delta_n$ is in joules per dimensionless reference volume, corresponding to physical energy-density width $\delta_n/\ell_0^d$ in $\mathrm{J\,m^{-d}}$. Arbitrary preassigned shrinking widths, exact zero-width surfaces, full phase-space shells involving kinetic momentum, and a conclusion at nonunique minimizers are not asserted.

Here local observables are evaluated on the periodic continuation of the prepared torus configuration. This is the same periodic boundary preparation, with no new physical sampling assumption; a configuration is not extended by the empty configuration outside its fundamental cube.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: $H_N$ is positional pair energy in joules; no kinetic term is included. On a periodic cube, applying the mathematical supplier's image-energy formula to $\widehat\varphi=\varphi/E_0$ divides every term of $H_{L,\mathrm{per}}$ by $E_0$; the numerical energy used by that supplier is therefore $H_{L,\mathrm{per}}/E_0$.

[F2] [[def-td-controlled-fixed-n-energy-shell]]: the shell is a conditional measure of exactly $N_n$ positions with a shrinking reduced energy-density window; it is not a phase-space shell.

[A1] [[post-td-equilibrium-ensemble-sampling]]: finite canonical and grand laws use the adopted indistinguishable positional measure, with infinite-energy configurations assigned zero weight for $\beta>0$. For comparison with the mathematical partitions, use $e^{-\widehat\beta\widehat H}=0$ at $\widehat H=+\infty$; finite-energy Boltzmann factors agree because $\widehat\beta\widehat H=\beta H$.

[A2] [[post-td-grand-variational-phase-uniqueness]]: on the finite-intensity stationary-law domain, the selected grand variational minimizer is the singleton $P^\ast$; the physical functional $I+\beta\Phi-\rho\log z$ agrees with its numerical form because $\widehat\beta=E_0\beta$ and $\widehat\Phi=\Phi/E_0$, where $\Phi$ is positional energy density and $\widehat\Phi$ its numerical value.

[L0] [[def-tdmath-superstable-regular-interaction]]: the current definition requires AC, an even Borel potential, a decomposition $\widehat\varphi=\varphi_s+\varphi_r$ with $\varphi_s$ stable, $\varphi_r\geq0$, and $\varphi_r(x)\geq\delta$ whenever $\|x\|_\infty\leq r_0$ for some $\delta,r_0>0$, plus its specified lower and upper regularity tails. The definition carrier is present as a draft; its scoped proof-contract entry passes, with current owner Step 1 proof-readiness recorded and independent review pending.


[L1] [[thm-tdmath-controlled-shell-three-ensemble-equivalence]]: the current statement assumes the superstable regular periodic fixed-$N$ model, an interior density, positive numerical inverse temperature, differentiability of the canonical rate, a finite supporting activity, and a singleton grand minimizer. It gives some constructed $\delta_L\downarrow0$ for which the exact-$N$ canonical, matching grand, and uniform positional energy-density shell empirical fields converge in probability in $\tau_L$; its proof Step 2.1 also establishes that the canonical probability of the selected shell tends to one, as needed for the entropy bound below. It excludes arbitrary widths and phase-space shells. Its current draft statement/proof carrier and scoped batch-18 proof-contract entries pass; current owner Step 1 proof-readiness is recorded and independent review remains pending, so this use remains conditional.

[L2] [[thm-tdmath-periodic-fixed-n-limit]]: the current statement defines the periodic exact-$N$ canonical rate $F_{\widehat\beta}(\rho)$ for $N_L/V_L\to\rho$ at positive interior density and gives the periodic partition limit; it also states the periodic canonical accumulation-point conclusion. Its current draft statement/proof carrier and scoped batch-18 proof-contract entry pass; current owner Step 1 proof-readiness is recorded and independent review remains pending.

[L3] [[thm-tdmath-fixed-n-local-ensemble-equivalence]]: the current statement puts every free exact-$N$ canonical local accumulation point in the common grand variational minimizer set at a finite supporting activity, and gives convergence under uniqueness at a uniformly sampled bulk location, not a fixed boundary origin. Its current draft statement/proof carrier and scoped batch-18 proof-contract entry pass; current owner Step 1 proof-readiness is recorded and independent review remains pending; it remains an explicit conditional supporting input to the exact-$N$ canonical conclusion.

[L4] [[lem-tdmath-periodic-law-local-tame-transfer]]: periodic translation invariance identifies the continued law with the empirical-field barycenter, and bounded finite-volume entropy density supplies count-tail uniformity and local-tame transfer. This draft mathematical result is used conditionally under its declared choice hypotheses.

## Proof

**Given:** The exact physical positional shell convention, its numerical energy conversion, the stated set-theoretic assumptions, adopted canonical/grand preparations, differentiability and interior-density hypotheses, and the actual draft mathematical statement [L1]. The unique-minimizer condition is an explicit premise.

1.1 Translate the centered cube $\Lambda_n$ by $L_n/2$ in each coordinate to $[0,L_n)^d$. This preserves the positional sector measures, particle number, every periodic pair displacement and its image energy, so the physical periodic law matches the mathematical supplier's cell convention. The Borel superstable regular assumptions match [L0], and the hypotheses in the Statement match [L1]–[L3], including exact particle number, periodic boundary, interior density, differentiability, finite supporting $\alpha$, and singleton minimizer [A2]. [L2] fixes the periodic canonical rate. The periodic canonical conclusion uses [L1] and [L2]; the free-box result [L3] is not substituted for a periodic law. The carrier [L1] explicitly concerns positional pair energy, so [F1]–[F2] identify the physical shell with its positional shell law without adding kinetic energy; the chain rule gives $e/E_0=-\partial_{\widehat\beta}F$, and $\widehat\delta_n=\delta_n/E_0$ converts its numerical energy window to joules. [given, F1, F2, A1, A2, L0, L1, L2, L3, algebra]

2.1 By [L1], canonical energy concentration permits construction of a sequence $\widehat\delta_n\downarrow0$ such that the shell has positive measure eventually and its uniform conditional law, the exact-$N$ canonical law, and the matching grand law have empirical fields converging in probability to $P^\ast$. Each periodic preparation is translation-invariant on its torus. Their finite-volume entropy densities are bounded: the canonical normalization, supporting activity and bounded canonical mean energy give this for the canonical law; for the shell, its entropy is the negative logarithm of its Poisson event probability, bounded using its eventually high canonical probability and the energy window; the grand pressure identity gives the grand bound. Apply [L4] to transfer all three empirical-field limits to their periodically continued laws for local tame observables. Set $\delta_n=E_0\widehat\delta_n$; therefore the physical shell widths shrink in joules per reference volume and expectations converge for each stated bounded-region observable of at-most-linear count growth. [given, F1, L1, L2, L4, step 1.1, algebra] ∎
