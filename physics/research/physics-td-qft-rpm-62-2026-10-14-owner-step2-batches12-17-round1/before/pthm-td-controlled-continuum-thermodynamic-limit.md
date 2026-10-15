---
id: "pthm-td-controlled-continuum-thermodynamic-limit"
kind: "physics-theorem"
title: "Controlled continuum interval-energy thermodynamic limit"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Superstable regular classical positional pair systems in periodic cubes at positive temperature, together with the expressly defined formal retained-hard-admissibility zero-inverse-temperature branch, with a nondegenerate density interval and strict upper-energy threshold; periodically continued local convergence requires the stated unique minimizer."
deps: [def-axiom-of-choice, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-td-stable-tempered-continuum-preparation, def-td-retained-hard-core-zero-beta-preparation, post-td-equilibrium-ensemble-sampling, post-td-grand-variational-phase-uniqueness, def-tdmath-superstable-regular-interaction, thm-tdmath-continuum-variational-pressure, thm-tdmath-interval-event-ensemble-limit, thm-tdmath-retained-hard-zero-beta-limit, lem-tdmath-periodic-law-local-tame-transfer]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  def-td-retained-hard-core-zero-beta-preparation: formulation-prerequisite
  post-td-equilibrium-ensemble-sampling: physical-assumption
  post-td-grand-variational-phase-uniqueness: physical-assumption
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-interval-event-ensemble-limit: mathematical-premise
  thm-tdmath-retained-hard-zero-beta-limit: mathematical-premise
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
dependency_level: 9
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB, as required by the current variational-pressure supplier. Let $E_0=1\,\mathrm J$, $\widehat\varphi=\varphi/E_0$, and assume $\widehat\varphi$ is Borel measurable. Require the exact superstable regular hypotheses of [[def-tdmath-superstable-regular-interaction]] for this dimensionless potential: a stable part plus a nonnegative core part bounded below by a positive constant on an $\ell^\infty$-ball, with the supplier's lower and upper regular tail conditions. Use $\widehat H=H/E_0$, $\widehat\beta=E_0\beta$ for $\beta>0$, and $\widehat e=e/E_0$; then $\beta H=\widehat\beta\widehat H$. For this supplier convention, let $\nu$ be the supremum of finite-entropy, finite-energy attainable densities for $\widehat\varphi$, and write $\widehat\Phi(P)$ for the supplier's limiting positional energy density; let $e_0(\rho)=\inf\{\widehat\Phi(P):\rho(P)=\rho,\ I(P)<\infty\}$ be its numerical positional-energy infimum. Let $D\subset[0,\infty)$ be a nondegenerate density interval, and require $\inf D<\nu$ and $\widehat e>\inf_{\rho\in D}e_0(\rho)$. Use periodic boxes and the density-interval/upper-energy conditional preparation. For $\beta>0$, the finite-volume grand and microcanonical weights are those of [[post-td-equilibrium-ensemble-sampling]]. For $\beta=0$, require a nonempty hard-core displacement set and use the formal retained-admissibility continuation of [[def-td-retained-hard-core-zero-beta-preparation]]; do not interpret $0\cdot(+\infty)$.

For both the positive-$\beta$ branch and the formal retained-hard-core $\beta=0$ branch, [[thm-tdmath-interval-event-ensemble-limit]] gives eventual event positivity, the constrained entropy-rate limit, and common-minimizer accumulation points; at $\beta=0$, [[thm-tdmath-retained-hard-zero-beta-limit]] identifies the matching retained grand law and minimizer set. If the relevant common minimizer set is the singleton adopted in [[post-td-grand-variational-phase-uniqueness]] for the multiplier pair supplied by that branch, both the conditioned laws and the corresponding periodic grand laws converge locally to $P^\ast$ for every measurable local observable $f$ with $|f|\leq c(1+N_A)$ on a bounded region $A$. This is an interval-density and upper-energy result, not a fixed-particle-number or shrinking-shell theorem.


Here local observables are evaluated on the periodic continuation of the prepared torus configuration. This is the same periodic boundary preparation, with no new physical sampling assumption; a configuration is not extended by the empty configuration outside its fundamental cube.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: $H_N$ is positional pair energy in joules and the local tail/stability conditions are stated in dimensionless coordinates. On a periodic cube, applying the mathematical supplier's image-energy formula to $\widehat\varphi=\varphi/E_0$ divides every term of $H_{L,\mathrm{per}}$ by $E_0$; thus the numerical energy used by that supplier is $H_{L,\mathrm{per}}/E_0$.

[F2] [[def-td-retained-hard-core-zero-beta-preparation]]: at $\beta=0$ the free-wall weight is zero exactly when its pair energy is forbidden/infinite; in periodic boxes the retained weight also excludes every forbidden periodic-image pair, exactly as in the mathematical supplier. No value is assigned to $0\cdot(+\infty)$.

[A1] [[post-td-equilibrium-ensemble-sampling]]: for $\beta>0$ finite-energy configurations have weight $z^Ne^{-\beta H_N}$ relative to the indistinguishable positional measure and infinite-energy configurations have zero weight; the zero-beta case is separately defined by [F2]. In the mathematical comparison, set $e^{-\widehat\beta\widehat H}=0$ at $\widehat H=+\infty$; for finite energies $\widehat\beta\widehat H=\beta H$.

[A2] [[post-td-grand-variational-phase-uniqueness]]: for the multiplier pair chosen by the applicable mathematical result, the positive-beta functional or retained-hard-core zero-beta functional has one stationary minimizer $P^\ast$; at positive beta its physical and numerical forms agree because $\widehat\beta=E_0\beta$ and $\widehat\Phi=\Phi/E_0$.

[L0] [[def-tdmath-superstable-regular-interaction]]: the current definition requires AC, an even Borel potential, a decomposition $\widehat\varphi=\varphi_s+\varphi_r$ with $\varphi_s$ stable, $\varphi_r\geq0$, and $\varphi_r(x)\geq\delta$ whenever $\|x\|_\infty\leq r_0$ for some $\delta,r_0>0$, plus its specified lower and upper regularity tails. The definition carrier is present as a draft; its proof-contract entry passes with no proof obligation, but no current batch-18 Step 1 decision is recorded.


[L1] [[thm-tdmath-continuum-variational-pressure]]: the current statement assumes AC, the ultrafilter extension principle, DC, and HB; for superstable regular Borel pair potentials it gives the free/periodic Poisson-reference pressure limit as the negative minimum of $I+\widehat\beta\Phi-\rho\log z$ over stationary finite-intensity laws, with a nonempty compact minimizer set in $\tau_L$. Its draft proof text is present, and the scoped batch-18 proof-contract check passes, but no Step 1 decision is recorded; it is used conditionally.

[L2] [[thm-tdmath-interval-event-ensemble-limit]]: the current statement assumes a positive-length density interval $D$, $\inf D<\nu$, and an upper energy threshold above $\inf_{\rho\in D}e_0(\rho)$; for its multipliers $\widehat\beta\geq0,z>0$ it gives eventual event positivity, the constrained entropy-rate limit, and common conditional/grand minimizer accumulation points, with convergence under uniqueness for periodically continued laws; its empirical-field concentration is established separately in its proof. The draft statement/proof carrier and scoped batch-18 proof-contract entry pass; no Step 1 decision is recorded, so the result remains conditional under [L1]’s axioms.

[L3] [[thm-tdmath-retained-hard-zero-beta-limit]]: the current statement defines the $\beta=0$ weight as $z^N\mathbf 1_{\rm admissible}$ and gives free/periodic Poisson-reference pressure rates as a minimum over hard-admissible stationary laws, with compact minimizers and local convergence under uniqueness. The draft statement/proof carrier and scoped batch-18 proof-contract entry pass; no Step 1 decision is recorded. The consumer keeps the declared nonempty-core branch and never interprets $0\cdot(+\infty)$.


[L4] [[lem-tdmath-periodic-law-local-tame-transfer]]: periodic translation invariance identifies the continued law with the empirical-field barycenter, and bounded finite-volume entropy density supplies count-tail uniformity and local-tame transfer. This draft mathematical result is used conditionally under its declared choice hypotheses.

## Proof

**Given:** The exact superstable regular Borel branch, the stated set-theoretic assumptions and dimensionless energy conversion, the strict density/energy constraints, the positive-$\beta$ ensemble postulate or the explicitly defined formal retained-hard-core zero-$\beta$ law, and the actual draft supplier statements [L1]–[L3]. The multiplier pair and uniqueness condition must match the same branch.

1.1 If $\beta>0$, the Borel superstable regular hypotheses are exactly those of [L0], and the physical conditional preparation agrees with the periodic Poisson-reference conditional law in [L2]: the factor $e^{-V_n}$ between $Q_{\Lambda_n}$ and the unnormalized positional measure is constant on the conditioning event and cancels in normalization. Under the stated strict inequalities, [L2] gives eventual event positivity, its rate limit, and the common-minimizer accumulation statement. [given, F1, A1, L0, L1, L2]

1.2 If $\beta=0$, the periodic indicator in [F2] excludes every forbidden pair, including periodic-image pairs, from the finite upper-energy event. Thus the physical event is exactly in the retained-admissibility model rather than an undefined $0\cdot(+\infty)$ expression. [L2] gives its event rate and conditional accumulation points; [L3] identifies the corresponding retained grand variational minimizers. [given, F2, L2, L3]

2.1 In either applicable branch, when the common variational minimizer set furnished by that branch is the singleton $P^\ast$ in [A2], every local-tame accumulation point of the periodically continued laws is $P^\ast$. Their local-tame relative compactness, including uniformly integrable local counts through [L4], then gives convergence of the conditioned and corresponding grand laws for each stated observable. The conclusion remains conditional on the draft mathematical results and the selected uniqueness premise. [given, A2, L2, L3, L4, step 1.1, step 1.2] ∎
