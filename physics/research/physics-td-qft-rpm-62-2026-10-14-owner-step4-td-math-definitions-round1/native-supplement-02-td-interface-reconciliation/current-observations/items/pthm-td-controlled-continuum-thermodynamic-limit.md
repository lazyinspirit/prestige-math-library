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

Assume AC, the ultrafilter extension principle, DC, and HB, as required by the current variational-pressure supplier. Let $E_0=1\,\mathrm J$, $\widehat\varphi=\varphi/E_0$, and assume $\widehat\varphi$ is Borel measurable. Require the exact superstable regular hypotheses of [[def-tdmath-superstable-regular-interaction]] for this dimensionless potential: a stable part plus a nonnegative core part bounded below by a positive constant on an $\ell^\infty$-ball, with the supplier's lower and upper regular tail conditions. Use $\widehat H=H/E_0$; then $\widehat\beta\widehat H=\beta H$ when $\widehat\beta=E_0\beta$.

Use the stationary finite-intensity law space $\mathcal P^1_{\rm stat}$ and the supplier's $\rho(P)$ (expected count in a dimensionless unit cube), $I(P)$ (specific relative entropy against the unit-intensity Poisson law), and $\widehat\Phi(P)$ (limiting numerical positional energy density) from [[thm-tdmath-continuum-variational-pressure]]. Define
$$\nu=\sup\{\rho(P):P\in\mathcal P^1_{\rm stat},\ I(P)<\infty,\ \widehat\Phi(P)<\infty\},\qquad e_0(\rho)=\inf\{\widehat\Phi(P):P\in\mathcal P^1_{\rm stat},\ \rho(P)=\rho,\ I(P)<\infty\},$$
with the supremum of an empty set equal to $0$ and the infimum of an empty set equal to $+\infty$. Here $\rho$ is particle count per dimensionless reference volume, corresponding to physical number density $\rho/\ell_0^d$ in $\mathrm{m}^{-d}$. Let $D\subset[0,\infty)$ be an interval of positive length and let $\widehat e\in\mathbb R$ be a numerical energy per dimensionless reference volume. Require $\inf D<\nu$ and $\widehat e>\inf_{\rho\in D}e_0(\rho)$, and set $e=E_0\widehat e$ in joules per dimensionless reference volume. The interval-event supplier [[thm-tdmath-interval-event-ensemble-limit]] supplies a multiplier pair $(\widehat\beta,z)$ with $\widehat\beta\geq0$ and $z>0$ for this same $(D,\widehat e)$. If $\widehat\beta>0$, take $\beta=\widehat\beta/E_0$ in $\mathrm{J}^{-1}$ and $T=E_0/(k_{\mathrm B}\widehat\beta)>0$ in kelvins. If $\widehat\beta=0$, use only the formal retained-hard-admissibility branch below; it is not a finite-temperature preparation.

For integers $n\geq0$, set $L_n=2n+1$, $\Lambda_n=[-L_n/2,L_n/2)^d$, and $V_n=|\Lambda_n|=L_n^d$. Define
$$A_n=\{\omega:N_{\Lambda_n}(\omega)/V_n\in D,\ H_{L_n,\mathrm{per}}(\omega)/(E_0V_n)\leq\widehat e\},$$
where $H_{L_n,\mathrm{per}}$ is the physical positional energy in joules with the image convention of [[def-td-stable-tempered-continuum-preparation]]. Equivalently, the upper-energy event is $H_{L_n,\mathrm{per}}/V_n\leq e$. For each $n$ with positive event probability, set $R_n(B)=Q_{\Lambda_n}(B\cap A_n)/Q_{\Lambda_n}(A_n)$ on the finite count sigma-algebra. Equivalently, with $M_n=\sum_{N\geq0}\mu_{\Lambda_n,N}$, $R_n(B)=M_n(B\cap A_n)/M_n(A_n)$, since $Q_{\Lambda_n}=e^{-V_n}M_n$; use the count-sigma restriction of these positional measures. This defines the density-interval/upper-energy conditional preparation.

For the positive-$\widehat\beta$ branch, the finite-volume grand and conditional laws use the adopted positional preparation of [[post-td-equilibrium-ensemble-sampling]] at the matching $T$ and $z$. For the $\widehat\beta=0$ branch, require a nonempty hard-core displacement set $B=\{x:\varphi(x)=+\infty\}$ and use the formal retained-admissibility continuation of [[def-td-retained-hard-core-zero-beta-preparation]]; do not interpret $0\cdot(+\infty)$. Assume the singleton-minimizer postulate [[post-td-grand-variational-phase-uniqueness]] holds on its stated finite-intensity stationary-law domain at this exact supplier-selected multiplier pair and branch.

For either branch, [[thm-tdmath-interval-event-ensemble-limit]] gives eventual event positivity, the constrained entropy-rate limit, and common-minimizer accumulation points; at $\widehat\beta=0$, [[thm-tdmath-retained-hard-zero-beta-limit]] identifies the matching retained grand law and minimizer set. Under the stated singleton assumption, both the conditioned laws and the corresponding periodic grand laws converge locally to $P^*$ for every measurable local observable $f$ supported in a bounded region $A$ and satisfying $|f|\leq c(1+N_A)$. The energy-density center $e$ and widths for this model are in joules per dimensionless reference volume; the corresponding physical $d$-volume density has units $\mathrm{J\,m^{-d}}$. This is an interval-density and upper-energy result, not a fixed-particle-number or shrinking-shell theorem.

Here local observables are evaluated on the periodic continuation of the prepared torus configuration. This is the same periodic boundary preparation, with no new physical sampling assumption; a configuration is not extended by the empty configuration outside its fundamental cube.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: $H_N$ is positional pair energy in joules and the local tail/stability conditions are stated in dimensionless coordinates. On a periodic cube, applying the mathematical supplier's image-energy formula to $\widehat\varphi=\varphi/E_0$ divides every term of $H_{L,\mathrm{per}}$ by $E_0$; thus the numerical energy used by that supplier is $H_{L,\mathrm{per}}/E_0$.

[F2] [[def-td-retained-hard-core-zero-beta-preparation]]: at $\beta=0$ the free-wall weight is zero exactly when its pair energy is forbidden/infinite; in periodic boxes the retained weight also excludes every forbidden periodic-image pair, exactly as in the mathematical supplier. No value is assigned to $0\cdot(+\infty)$.

[A1] [[post-td-equilibrium-ensemble-sampling]]: for $\beta>0$ finite-energy configurations have weight $z^Ne^{-\beta H_N}$ relative to the indistinguishable positional measure and infinite-energy configurations have zero weight; the zero-beta case is separately defined by [F2]. In the mathematical comparison, set $e^{-\widehat\beta\widehat H}=0$ at $\widehat H=+\infty$; for finite energies $\widehat\beta\widehat H=\beta H$.

[A2] [[post-td-grand-variational-phase-uniqueness]]: for the multiplier pair chosen by the applicable mathematical result, the positive-beta functional or retained-hard-core zero-beta functional has one stationary finite-intensity minimizer $P^\ast$; at positive beta its physical and numerical forms agree because $\widehat\beta=E_0\beta$ and $\widehat\Phi=\Phi/E_0$.

[L0] [[def-tdmath-superstable-regular-interaction]]: the current definition requires AC, an even Borel potential, a decomposition $\widehat\varphi=\varphi_s+\varphi_r$ with $\varphi_s$ stable, $\varphi_r\geq0$, and $\varphi_r(x)\geq\delta$ whenever $\|x\|_\infty\leq r_0$ for some $\delta,r_0>0$, plus its specified lower and upper regularity tails. The definition carrier is present as a draft; its proof-contract entry passes with no proof obligation, and current owner Step 1 proof-readiness is recorded; independent review remains pending.


[L1] [[thm-tdmath-continuum-variational-pressure]]: the current statement assumes AC, the ultrafilter extension principle, DC, and HB; for superstable regular Borel pair potentials it gives the free/periodic Poisson-reference pressure limit as the negative minimum of $I+\widehat\beta\Phi-\rho\log z$ over stationary finite-intensity laws, with a nonempty compact minimizer set in $\tau_L$. Its draft proof text is present, and the scoped batch-18 proof-contract check passes, and current owner Step 1 proof-readiness is recorded; it remains a draft used conditionally pending independent review.

[L2] [[thm-tdmath-interval-event-ensemble-limit]]: the current statement assumes a positive-length density interval $D$, $\inf D<\nu$, and an upper energy threshold above $\inf_{\rho\in D}e_0(\rho)$; for its multipliers $\widehat\beta\geq0,z>0$ it gives eventual event positivity, the constrained entropy-rate limit, and common conditional/grand minimizer accumulation points, with convergence under uniqueness for periodically continued laws; its empirical-field concentration is established separately in its proof. The draft statement/proof carrier and scoped batch-18 proof-contract entry pass; current owner Step 1 proof-readiness is recorded, and the draft result remains conditional under [L1]’s axioms pending independent review.

[L3] [[thm-tdmath-retained-hard-zero-beta-limit]]: the current statement defines the $\beta=0$ weight as $z^N\mathbf 1_{\rm admissible}$ and gives free/periodic Poisson-reference pressure rates as a minimum over hard-admissible stationary laws, with compact minimizers and local convergence under uniqueness. The draft statement/proof carrier and scoped batch-18 proof-contract entry pass; current owner Step 1 proof-readiness is recorded, with independent review pending. The consumer keeps the declared nonempty-core branch and never interprets $0\cdot(+\infty)$.


[L4] [[lem-tdmath-periodic-law-local-tame-transfer]]: periodic translation invariance identifies the continued law with the empirical-field barycenter, and bounded finite-volume entropy density supplies count-tail uniformity and local-tame transfer. This draft mathematical result is used conditionally under its declared choice hypotheses.

## Proof

**Given:** The exact superstable regular Borel branch, the stated set-theoretic assumptions and dimensionless energy conversion, the strict density/energy constraints, the positive-$\beta$ ensemble postulate or the explicitly defined formal retained-hard-core zero-$\beta$ law, and the actual draft supplier statements [L1]–[L3]. The multiplier pair and uniqueness condition must match the same branch.

1.1 Translate the centered cube $\Lambda_n$ by $L_n/2$ in each coordinate to $[0,L_n)^d$. This preserves particle number, Lebesgue sector measures, every periodic pair displacement and the image energy; hence the physical event and conditional law match the supplier's cube convention. If $\beta>0$, the Borel superstable regular hypotheses are exactly those of [L0], and the physical conditional preparation agrees with the periodic Poisson-reference conditional law in [L2]: the factor $e^{-V_n}$ between $Q_{\Lambda_n}$ and the unnormalized positional measure is constant on the conditioning event and cancels in normalization. Under the stated strict inequalities, [L2] gives eventual event positivity, its rate limit, and the common-minimizer accumulation statement. [given, F1, A1, L0, L1, L2]

1.2 If $\beta=0$, the same centered-to-$[0,L_n)^d$ translation preserves the periodic energy and the positional reference measure. The periodic indicator in [F2] excludes every forbidden pair, including periodic-image pairs, from the finite upper-energy event. Thus the physical event is exactly in the retained-admissibility model rather than an undefined $0\cdot(+\infty)$ expression. [L2] gives its event rate and conditional accumulation points; [L3] identifies the corresponding retained grand variational minimizers. [given, F2, A1, L2, L3]

2.1 In either applicable branch, when the common variational minimizer set furnished by that branch is the singleton $P^\ast$ in [A2], every local-tame accumulation point of the periodically continued laws is $P^\ast$. Their local-tame relative compactness, including uniformly integrable local counts through [L4], then gives convergence of the conditioned and corresponding grand laws for each stated observable. The conclusion remains conditional on the draft mathematical results and the selected uniqueness premise. [given, A2, L2, L3, L4, step 1.1, step 1.2] ∎
