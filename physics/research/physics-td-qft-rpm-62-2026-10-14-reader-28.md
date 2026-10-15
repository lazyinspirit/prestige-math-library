# Step 3a reader report — batch 28

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `28` only

## Inventory opened

Assigned pages:

- A page: `rpm-exact-flat-orbits`, [library/relativistic-particle-mechanics/rpm-exact-flat-orbits.md](../library/relativistic-particle-mechanics/rpm-exact-flat-orbits.md).
- B page: `rpm-exact-flat-orbits-examples`, [library/relativistic-particle-mechanics/rpm-exact-flat-orbits-examples.md](../library/relativistic-particle-mechanics/rpm-exact-flat-orbits-examples.md).

Assigned items, read in dependency order:

- A page: `post-rpm-ideal-rindler-phase-reception`, `pthm-rpm-rindler-clock-gradient`, `pthm-rpm-constant-electric-orbit`, `pthm-rpm-constant-magnetic-helix`, `pthm-rpm-crossed-field-drift`.
- B page: `ex-rpm-rindler-clock-gradient`, `ex-rpm-constant-electric-orbit`, `ex-rpm-constant-magnetic-helix`, `ex-rpm-crossed-field-drift`.

I opened the batch-28 page manifest, proof-contract file, coverage file, cross-batch dependency file and authoring notes. The nine contracts correspond to the nine assigned items. The three orbit theorems record the open `rpm-external-charge` supplier status; the Rindler reception postulate's formulation, scope, sources and non-derivation reviews are recorded as pass in its contract. These records informed navigation but did not determine the verdict.

Direct supplier items inspected for the assigned claims were: `pthm-sr-rindler-horizons-and-radar`, `def-sr-null-wave-covector-and-observer-frequency`, `lem-sr-phase-rate-along-worldline`, `post-sr-ideal-plane-wave-model`, `post-sr-ideal-clocks-and-light`, `def-sr-si-units-and-coordinate-conventions`, `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `thm-sr-proper-time-and-observer-decomposition`, `def-sr-proper-acceleration`, `def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`, `thm-logarithm-derivative-and-integral`, `def-rpm-charge-spin-model`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, `pthm-rpm-charge-mass-shell`, `def-countable-choice`, `def-em-electromagnetic-tensor`, `post-sr-massive-particle-dynamics`, `pthm-sr-momentum-and-four-force`, `thm-real-power-continuity-and-derivatives`, `cor-zero-derivative-implies-constant`, `def-cross-product-in-r3`, `def-sine-and-cosine-by-power-series`, `thm-sine-and-cosine-derivatives`, `thm-algebra-of-derivatives`, `pthm-em-lorentz-field-transform`, `def-euclidean-inner-product`, `lem-cm-cross-product-triple-identity`, `def-lorentz-boost`, `lem-boost-is-proper-orthochronous-with-inverse`, and `post-sr-inertial-covariance`. The assigned `post-rpm-ideal-rindler-phase-reception` and `pthm-rpm-constant-magnetic-helix` were also checked before their consumers.

The A page's required page summaries were checked for `cm-math-dynamics`, `cm-math-central`, `rpm-external-charge`, and `sr-accelerated-observers`.

## Mathematical and source review

- The Rindler map, metric, stationary proper time and acceleration, radial null equation, clock ratio and phase-rate contraction are correctly stated with their domains, SI units and assumptions. The additional accelerated-reception rule is explicitly a new adopted postulate. It does not claim to derive a physical receiver response from the SR plane-wave postulate, whose accelerated-reception clause is expressly excluded. The assigned theorem's finite-apparatus qualifications remain qualitative and carry through its example.
- The electric and magnetic potential components match the fixed EM convention `F_{0i}=-E_i/c`, `F_{ij}=epsilon_{ijk}B_k`. The momentum, energy, velocity and integrated position formulas differentiate to the stated coordinate Lorentz equations; the zero-force branches, global finite-time domains, timelike character and uniqueness arguments follow from the stated shell and force premises.
- The crossed-field drift sign and subcritical condition are consistent with the passive boost convention. The primed fields are `E'=0`, `B'=B/gamma_d`; the time-coordinate derivative along the inverse-boosted timelike orbit has a strictly positive lower bound, giving all-real laboratory coordinate time. The theorem and example distinguish the constant drift solution from the other boosted magnetic orbits.
- All four examples are symbolic substitutions with chosen model parameters. They do not report measurements or add empirical precision. Page summaries match the assigned item scope and preserve the conditional qualifications.
- I checked the cited relevant source sections: Mashhoon's arXiv manuscript §1 pp. 1–2 and §4 p. 12; Gourgoulhon slides 26–30; Dray, *Geometry of General Relativity*, Chapter 4 §2; Likharev §9.6; and Fowler Lecture 73. Mashhoon supports the momentarily comoving locality assumption and states its wave/ray-limit qualifications; the local postulate separately identifies its receiver rule as adopted. The Rindler sources support the coordinate and clock/ray calculations. Likharev and Fowler discuss the uniform-field orbits and crossed-field boost; Fowler uses Gaussian units, while the assigned items state and derive the SI convention locally.

## Findings and edits

No confirmed defect remains in batch-28 pages or items. No item or page was edited. No finding is being routed.

The four current-run RPM suppliers in batch 24 (`def-rpm-charge-spin-model`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, `pthm-rpm-charge-mass-shell`) remain draft and unaccepted. I checked their exact current definitions, assumptions and used theorem statements, including the explicit `AC_omega` condition. The batch-28 orbit proofs state that condition and remain conditional on these supplier results. Their draft status is an acceptance dependency, not by itself a defect in the batch-28 conditional deductions; no defect in their used interfaces was confirmed.

## Page verdicts and blocker

- `rpm-exact-flat-orbits` (A): pass for this independent reader review. Its four orbit claims are conditional on the exact adopted/draft premises they state; no local statement, proof, citation or summary defect was confirmed.
- `rpm-exact-flat-orbits-examples` (B): pass for this independent reader review. The four examples correctly specialize their theorem suppliers and preserve their qualifications.
- Reader blocker: none. Batch-24 supplier acceptance remains pending elsewhere in the active run.

## Coverage note

I inspected all assigned pages and items and the direct supplier statements and uses needed for this review. I did not re-audit the full transitive proof chains behind every published mathematical supplier; those chains include many earlier library results. The cited source review above is limited to the exact relevant sections stated.
