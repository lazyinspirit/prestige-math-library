# Step 3a reader report — Batch 21

Run: `physics-td-qft-rpm-62-2026-10-14`  
Batch: `21`  
Role: reader

## Inventory opened

Pages:

- `library/thermodynamics/td-interacting-equilibrium-preparations.md` (A page)
- `library/thermodynamics/td-interacting-equilibrium-preparations-examples.md` (B page)

Assigned items (all 16 carriers opened):

- A page: `def-td-stable-tempered-continuum-preparation`, `def-td-admissible-van-hove-and-tempered-exterior`, `post-td-classical-indistinguishable-particle-measure`, `def-td-controlled-fixed-n-energy-shell`, `def-td-retained-hard-core-zero-beta-preparation`, `post-td-equilibrium-ensemble-sampling`, `post-td-grand-variational-phase-uniqueness`, `pthm-td-stable-tempered-free-cube-grand-pressure`, `pthm-td-controlled-continuum-thermodynamic-limit`, `pthm-td-controlled-thermodynamic-ensemble-duality`, `pthm-td-interacting-three-ensemble-local-limit`, and `pthm-td-qualified-van-hove-and-exterior-limit`.
- B page: `ex-td-two-particle-hard-core-preparation`, `ex-td-nonunique-variational-phases`, `ex-td-forbidden-pair-beta-zero`, and `ex-td-volume-sized-external-field`.

The review also opened the current batch manifest, reader brief, batch notes, cross-batch dependency record, and batch proof-contract file. Dependency context included `def-td-si-quantities`, `post-td-canonical-sampling`, `def-tdmath-superstable-regular-interaction`, `def-tdmath-poisson-configuration-reference`, `thm-tdmath-poisson-reference-count-properties`, `def-tdmath-finite-region-relative-entropy`, `def-tdmath-van-hove-sequence`, `thm-tdmath-canonical-grand-duality`, `thm-tdmath-canonical-interior-density-limit`, `thm-tdmath-continuum-variational-pressure`, `thm-tdmath-interval-event-ensemble-limit`, `thm-tdmath-retained-hard-zero-beta-limit`, `lem-tdmath-periodic-law-local-tame-transfer`, `thm-tdmath-periodic-fixed-n-limit`, `thm-tdmath-fixed-n-local-ensemble-equivalence`, `thm-tdmath-controlled-shell-three-ensemble-equivalence`, `thm-tdmath-superstable-van-hove-pressure`, `thm-tdmath-van-hove-fixed-n-limit`, `thm-tdmath-uniform-tempered-exterior-pressure`, `thm-tdmath-decreasing-integrable-tail-free-cube-pressure`, and `lem-tdmath-canonical-empirical-field-conditioning`.

## Review and repairs

I checked the definitions, assumptions, scope, dimensional conversions, proof steps, examples, page summaries, and the exact statements used from the current-run mathematical suppliers. Their Step 1/readiness status remains draft and conditional; this report does not treat author contracts, prior checks, or the suppliers' current draft status as mathematical acceptance.

Repairs made in assigned items:

- `def-td-stable-tempered-continuum-preparation`: the density formula now applies only when $V>0$ and records units of $\mathrm{m}^{-d}$. The Euclidean and maximum norms used in the tail and periodic-image estimates are explicit.
- `def-td-admissible-van-hove-and-tempered-exterior`: the shape condition now matches the mathematical suppliers' two-sided Euclidean boundary layer. The item defines local finiteness and distance, restricts the dimensionless exterior bound to $t\geq0$, and supplies a dyadic-tail estimate establishing that $W_n$ is well-defined.
- `post-td-grand-variational-phase-uniqueness`: the relative-entropy restrictions are defined as $P_A$ and $Q_A$ on the exact count sigma-algebra. The undefined $P_0$ notation is removed. The minimization domain is the stationary finite-intensity law space used by the mathematical supplier, and the energy, number-density, and entropy-density units are stated.
- `pthm-td-stable-tempered-free-cube-grand-pressure` and `pthm-td-controlled-thermodynamic-ensemble-duality`: numerical-energy tail and stability constants are converted explicitly. Pressure and positional free-energy density are stated per physical $d$-volume, with units $\mathrm{J\,m^{-d}}$ (pascals when $d=3$). The duality formula now gives the exact closed-domain quantifier from its supplier.
- `pthm-td-controlled-continuum-thermodynamic-limit`: the mathematical interval-event multiplier pair is matched to the physical temperature/activity, including the separate formal $\widehat\beta=0$ branch. The densities, energy center, and energy-width units are explicit, and the centered-cell translation to the supplier's cube is justified.
- `pthm-td-interacting-three-ensemble-local-limit`: the physical $T,\beta$ convention, supporting-$\alpha$ condition, finite-intensity uniqueness domain, and physical density/energy-width units are explicit. The centered periodic cube is matched to the mathematical cell convention in the proof.
- `pthm-td-qualified-van-hove-and-exterior-limit`: the positive-core function is given the finite positive range required by its mathematical supplier, the exterior parameter is restricted to $0\leq t<\infty$, and the proof now uses the exact two-sided van Hove condition rather than claiming a norm argument transfers a one-sided layer.
- `ex-td-nonunique-variational-phases` now specifies the finite-intensity domain of the uniqueness premise. `ex-td-volume-sized-external-field` now states $d\geq2$, matching its referenced boundary theorem.

I reviewed the affected direct and indirect consumers within batch 21. The proof contracts were refreshed for the changed statements, derivations, quotations, and carrier hashes. No stale `verification.judge` record was present on the edited items.

Relevant source checks: the [BIPM SI Brochure, 9th edition v4.01, §2.3.1, pp. 21–22](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf) gives the exact Boltzmann and Avogadro constants used by the SI supplier. [Tong, *Statistical Physics*, §§1.3.1 and 1.4.1](https://davidtong.org/teaching/statistical-physics/statmechhtml/S1) supports the canonical and grand-canonical distributions. [Likharev, *Essential Graduate Physics: Statistical Mechanics*, §2.4](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_(Likharev)/02%3A_Principles_of_Physical_Statistics/2.04%3A_Canonical_ensemble_and_the_Gibbs_distribution), [§2.7](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_(Likharev)/02%3A_Principles_of_Physical_Statistics/2.07%3A_Grand_canonical_ensemble_and_distribution), and [§3.1](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_(Likharev)/03%3A_Ideal_and_Not-So-Ideal_Gases/3.01%3A_Ideal_classical_gas) support the canonical weights, grand weights, and classical $1/N!$ convention. Georgii's [1994 paper, Theorems 2–4, pp. 175–178](https://www.math.lmu.de/~georgii/papers/LDPsuperstable.pdf) was used to check the stated superstable/regular regimes and that the interval-event result selects a multiplier pair rather than licensing an arbitrary fixed temperature.

## Validation

- Reflow and precheck were run on all 10 changed item paths; every reflow reported unchanged layout and every precheck passed.
- `proof-layout` passed for the 10 changed items: 19 numbered steps, 0 defects. The renderer's fallback loader initially failed to resolve the web application's `@/components` imports; rerunning with the existing temporary `/private/tmp/physics-layout-alias-register.mjs` loader succeeded without changing the web checkout.
- The updated proof-contract JSON parses, and its edited carrier hashes, source excerpts, and cited quotations match the current item bytes.

## Page verdicts and remaining blocker

- `td-interacting-equilibrium-preparations`: the page summary and its 12 items are internally consistent after the repairs. Content review is conditional on the declared mathematical suppliers. Its required pages `td-finite-statistical-bridge` and `td-math-interacting-ensemble-geometry` remain open/unaccepted in the current cross-batch dependency record, so batch readiness is still blocked upstream.
- `td-interacting-equilibrium-preparations-examples`: the four finite positional examples and the page summary are correct in their stated scopes; no experiment or empirical observation is claimed. The companion A-page and its upstream page prerequisites remain draft.

No assigned defect remains that I could not edit. No item outside batch 21, B-page prose, published content, or mathematical supplier carrier was edited.
