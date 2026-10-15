---
id: "pthm-td-qualified-van-hove-and-exterior-limit"
kind: "physics-theorem"
title: "Qualified van Hove and tempered-exterior thermodynamic limits"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Classical positional Borel pair systems in dimension at least two; van Hove free-wall limits require superstability and regularity, while deterministic exterior limits additionally require a genuine positive divergent core in the supplier's infinity norm and a fixed uniformly tempered exterior class."
deps: [def-axiom-of-choice, def-td-stable-tempered-continuum-preparation, def-td-admissible-van-hove-and-tempered-exterior, post-td-equilibrium-ensemble-sampling, pthm-td-stable-tempered-free-cube-grand-pressure, def-tdmath-superstable-regular-interaction, thm-tdmath-superstable-van-hove-pressure, thm-tdmath-van-hove-fixed-n-limit, thm-tdmath-uniform-tempered-exterior-pressure]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  def-td-admissible-van-hove-and-tempered-exterior: formulation-prerequisite
  post-td-equilibrium-ensemble-sampling: physical-assumption
  pthm-td-stable-tempered-free-cube-grand-pressure: physical-result
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-superstable-van-hove-pressure: mathematical-premise
  thm-tdmath-van-hove-fixed-n-limit: mathematical-premise
  thm-tdmath-uniform-tempered-exterior-pressure: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans-Otto Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction, Probability Theory and Related Fields 99 (1994), 171–195"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    - title: "David Ruelle, Superstable Interactions in Classical Statistical Mechanics, Communications in Mathematical Physics 18 (1970), 127–159"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
    - title: "David Tong, Statistical Physics (author-hosted Cambridge lecture notes)"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Konstantin K. Likharev, Essential Graduate Physics, Part SM: Statistical Mechanics (2024 author-hosted lecture notes)"
      url: "https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/03%3A_Ideal_and_Not-So-Ideal_Gases/3.05%3A_Gases_of_weakly_interacting_particles"
proof_strategy: direct
dependency_level: 7
---

## Statement

Assume AC, as required by the current mathematical definition and its shape suppliers. Let $d\geq2$, $E_0=1\,\mathrm J$, $\widehat\varphi=\varphi/E_0$, and assume $\widehat\varphi$ is Borel measurable and superstable and regular as in [[def-tdmath-superstable-regular-interaction]]. Use $\widehat H=H/E_0$ and $\widehat\beta=E_0(k_BT)^{-1}>0$ in the mathematical rates. Let $(\Lambda_k)$ be a van Hove sequence as in [[def-td-admissible-van-hove-and-tempered-exterior]]. First, for free walls, the positional grand pressure along $\Lambda_k$ converges to the free-cube pressure of [[pthm-td-stable-tempered-free-cube-grand-pressure]]. For any positive interior attainable density $\rho$ and exact integers $N_k$ with $N_k/|\Lambda_k|\to\rho$, the exact-$N_k$ free-wall canonical log-partition rate converges to the same cube canonical rate. These two shape statements require superstability and regularity; stability alone is not asserted to suffice for arbitrary van Hove shapes.

Second, strengthen the potential hypothesis: for some $r_0>0$, $\widehat\varphi(x)\geq\widehat\chi(\|x\|_\infty)>0$ whenever $0<\|x\|_\infty\leq r_0$, where $\widehat\chi$ is nonincreasing and $\int_0^{r_0}\widehat\chi(r)r^{d-1}\,dr=+\infty$. For each fixed $t<\infty$, the free-wall grand pressure in $\Lambda_n$ with exterior $\zeta\in\Omega(t)$ then converges uniformly in $\zeta$ to the same free-cube pressure. The exterior interaction is the deterministic positional term of [[def-td-admissible-van-hove-and-tempered-exterior]], not a volume-filling external field. This genuine divergent-core condition is the exact stronger hypothesis of the current exterior supplier; it is not inferred from superstability or replaced by a weaker source condition.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: $\varphi$ is even measurable, stable, and has an integrable decreasing tail. With $E_0=1\,\mathrm J$, $\widehat H=H/E_0$ and $\widehat\beta=E_0(k_BT)^{-1}$ leave each Boltzmann factor unchanged.

[F2] [[def-td-admissible-van-hove-and-tempered-exterior]]: van Hove geometry controls fixed-width boundary layers; $\Omega(t)$ fixes a uniform square-count bound on the exterior configuration. The local Euclidean and mathematical $\ell^\infty$ boundary-layer conditions agree for van Hove sequences because $\|x\|_\infty\leq|x|_2\leq\sqrt d\|x\|_\infty$ and the definition quantifies over every fixed layer width.

[A1] [[post-td-equilibrium-ensemble-sampling]]: all grand and canonical laws are positional and use the adopted indistinguishable measure; for $\beta>0$, infinite-energy configurations receive zero weight. The mathematical comparison uses the same extended-real extension, $e^{-\widehat\beta\widehat H}=0$ at $\widehat H=+\infty$.

[L0] [[def-tdmath-superstable-regular-interaction]]: the current definition assumes AC, requires an even Borel potential, a stable-plus-nonnegative superstable splitting with a positive lower bound on an $\ell^\infty$-ball, and its lower/upper regularity tails; it separately defines the genuine divergent positive core. The definition carrier is present as a draft; its proof-contract entry passes, but no current batch-18 Step 1 decision is recorded.


[L1] [[thm-tdmath-superstable-van-hove-pressure]]: the current statement gives free-wall grand-pressure convergence to the free-cube rate on every van Hove sequence under superstability and regularity; its text expressly does not assert stability alone. The item and draft proof text are present and the scoped batch-18 proof-contract check passes, but no Step 1 decision is recorded; this use remains conditional.

[L2] [[thm-tdmath-van-hove-fixed-n-limit]]: the current statement gives the free-wall exact-$N_k$ positional log-partition rate on van Hove regions for $N_k/|\Lambda_k|\to\rho$ at a positive interior attainable density, under superstability and regularity. Its current draft statement/proof carrier and scoped batch-18 proof-contract entry pass; no Step 1 decision is recorded; this use remains conditional.

[L3] [[thm-tdmath-uniform-tempered-exterior-pressure]]: the current statement gives uniform free-wall grand-pressure convergence for each fixed exterior class $\Omega(t)$ under stable regularity and the genuine divergent positive core $\widehat\varphi(x)\geq\widehat\chi(\|x\|_\infty)$ with divergent radial integral. Its item and draft proof text are present and the scoped batch-18 proof-contract check passes, but no Step 1 decision is recorded; this use remains conditional.

## Proof

**Given:** The physical finite-volume law and numerical energy conversion, AC, definitions of geometry and exterior preparation in [F2], and the actual draft mathematical supplier statements [L1]–[L3]. Their unresolved proof status remains conditional input.

1.1 Under the Borel superstable regular hypotheses of [L0] and the physical pair assumptions [F1], the finite-dimensional norm bounds in [F2] transfer the local van Hove sequence to the supplier's $\ell^\infty$ boundary convention. The free-wall grand-pressure result then identifies its limit with the free-cube pressure. The physical grand normalizer and pressure are the ones fixed in [A1] and the earlier free-cube theorem. [given, F1, F2, A1, L0, L1]

2.1 For an interior attainable $\rho$ and the stated $N_k$, [L2] gives convergence of the exact-$N_k$ free-wall canonical log-partition rate to the same cube canonical rate. Its boundary-layer hypothesis is precisely the van Hove condition in [F2]. [given, F1, F2, A1, L2, step 1.1]

2.2 Under the additional positive divergent-core condition defined in [L0], every $\zeta\in\Omega(t)$ meets the fixed exterior class in [F2]; [L3] gives uniform convergence of its grand pressure to the free-cube pressure. This conclusion is uniform only for the fixed $t$ class and does not cover a potential applied throughout a volume. [given, F1, F2, A1, L0, L3, step 1.1]

3.1 Combining the three conditional limits proves exactly the two stated boundary regimes. The superstability and genuine-core assumptions remain distinct, so neither result is extended to stability alone or to arbitrary external fields. [step 1.1, step 2.1, step 2.2, L1, L2, L3] ∎
