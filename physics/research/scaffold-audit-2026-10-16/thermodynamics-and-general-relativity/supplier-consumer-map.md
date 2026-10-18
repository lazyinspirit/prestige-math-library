# Exact supplier and consumer map

Statuses below are the current repository statuses, not new audits. `research/local` means an authored proof interface whose publication or independent acceptance has not occurred.

| Supplier | Exact current source and status | Consumed scope | Direct consumer |
|---|---|---|---|
| `def-gr-smooth-lorentzian-objects` | `physics/items/def-gr-smooth-lorentzian-objects.md`, published physical definition | Smooth time-oriented Lorentzian four-manifold, signature, and causal cone | `def-tgr-juttner-kinetic-preparation` |
| `def-gr-observer-and-rest-space` | `physics/items/def-gr-observer-and-rest-space.md`, published physical definition | Future unit observer and its orthogonal rest space/projection | `def-tgr-juttner-kinetic-preparation` |
| `thm-gr-local-lorentz-tetrad-existence` | `physics/research/first-principles-2026-10-03/relativity/scaffold/gr-local-proofs.md`, research/local mathematical argument | Local future orthonormal tetrad existence; no global frame claim | `def-tgr-future-mass-shell-measure`; `lem-tgr-mass-shell-measure-tetrad-invariance` |
| `thm-polar-coordinates-formula-for-lebesgue-measure` | `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`, published; assumes ACω and nonnegative Borel integrand | R³ radial integration formula | `def-tgr-future-mass-shell-measure`; `thm-tgr-juttner-partition-and-moments` |
| `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` | `items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md`, published; assumes ACω, C¹ diffeomorphism, nonnegative Borel function | Change of variables on the global smooth momentum-coordinate diffeomorphism | `lem-tgr-mass-shell-measure-tetrad-invariance` |
| `def-countable-choice` | `items/def-countable-choice.md`, published | ACω assumption retained for the polar integral supplier | `def-tgr-future-mass-shell-measure`; `thm-tgr-juttner-partition-and-moments` |
| `def-probability-measure` | `items/def-probability-measure.md`, published | A probability is a measure with total mass one | `thm-tgr-juttner-partition-and-moments`; `def-tgr-juttner-kinetic-preparation` |
| `thm-qsm-finite-entropy-composition` | `physics/research/extended-frameworks-2026-10-03/quantum-statistical-mechanics/workers/finite-states/state-proofs.md#q3`, completed research/local proof | Finite-dimensional partial-trace support and finite entropy composition only | `def-tgr-finite-cutoff-outside-entropy`; `lem-tgr-finite-cutoff-mode-entropy-growth` |
| `pthm-tgr-area-entropy-calibration` | This category's `workers/horizons-semiclassical/physical-models.md#PHS07`, draft research/local conditional physical theorem | Reversible area coefficient on the verified subextremal family; additive offset remains free | `def-tgr-regulated-generalized-entropy` |
| `pthm-tgr-restricted-classical-area` | This category's `workers/horizons-semiclassical/physical-models.md#PHS01`, draft research/local conditional physical theorem | Smooth future-complete, nonbreaking null congruence with the stated NEC/EFE hypotheses | `rem-tgr-generalized-entropy-no-automatic-second-law` |

| New or repaired item | Local argument | Current consumer/use |
|---|---|---|
| `def-tgr-future-mass-shell-measure` | `complete-local-arguments.md#C5` | `lem-tgr-mass-shell-measure-tetrad-invariance`; Jüttner moment theorem; repaired stationarity theorem; physical preparation definition |
| `lem-tgr-mass-shell-measure-tetrad-invariance` | `complete-local-arguments.md#C5` | Jüttner moment theorem; repaired stationarity theorem |
| `thm-tgr-juttner-partition-and-moments` | `complete-local-arguments.md#C5` | Repaired stationarity theorem; `def-tgr-juttner-kinetic-preparation` |
| `thm-tgr-massive-juttner-stationarity` | `workers/equilibrium-transport/proofs.md#et02` | Existing stationary-particle equilibrium scaffold; conditional only on its full-shell assumptions |
| `def-tgr-juttner-kinetic-preparation` | `workers/equilibrium-transport/proofs.md#et09` | Model definition only; no natural-material, collision, or empirical claim |
| `def-tgr-finite-cutoff-outside-entropy` | `complete-local-arguments.md#C6` | Cutoff growth lemma, generalized-entropy model definition, monotonicity example |
| `lem-tgr-finite-cutoff-mode-entropy-growth` | `complete-local-arguments.md#C6` | Cutoff/renormalization limitation prose |
| `lem-tgr-renormalization-finite-part-ambiguity` | `complete-local-arguments.md#C6` | `def-tgr-regulated-generalized-entropy` |
| `ex-tgr-generalized-entropy-not-monotone-from-definition` | `complete-local-arguments.md#C6-example` | B-leaf logical limitation only; no physical process is asserted |
| `def-tgr-regulated-generalized-entropy` | `workers/horizons-semiclassical/physical-models.md#PHS10` | `rem-tgr-generalized-entropy-no-automatic-second-law`; defines only the selected finite-regulator model and a limit when it exists |

The current `thm-csm-local-full-phase-equivalence` is a research/local argument recorded in the CSM `prose-scaffold.md`, with superstable periodic interactions, quadratic nonrelativistic kinetic energy, interior density, differentiable canonical rate, a unique supporting minimizer, and fixed local marked tests/moments. It is not consumed: it does not establish the relativistic mass-shell law or the Jüttner normalizer. The current QSM finite-matrix supplier is not extended to continuum local algebras or renormalized entropy limits. No inferential-statistics supplier is consumed because these additions make no empirical data claim.
