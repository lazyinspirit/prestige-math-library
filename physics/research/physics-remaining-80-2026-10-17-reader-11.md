# Step 3a reader report — batch 11

Run: physics-remaining-80-2026-10-17  
Role: reader  
Scope: batch 11

## Inventory reviewed

Assigned pages:

- emg-cp04 — library/einstein-maxwell-models-mathematics/emg-cp04.md
- emg-cp04-examples — library/einstein-maxwell-models-mathematics/emg-cp04-examples.md

Assigned items, read in supplier order:

- def-emg-trivial-potential-charged-scalar-system
- def-emg-classical-charged-scalar-finite-regularity-system
- lem-emg-classical-charged-scalar-compact-variation
- lem-emg-temporal-scalar-positive-symmetric-reduction
- lem-emg-charged-scalar-subsidiary-chain
- thm-emg-local-classical-charged-scalar-development
- ex-emg-zero-scalar-controlled-reduction
- rem-emg-classical-scalar-bundle-limit

For the assigned proofs, I opened the actual supporting statements and arguments for def-emg-lorentzian-forms, def-emg-electrovacuum-cauchy-system, def-emg-charged-scalar-functional, lem-emg-lorentz-hodge-calculus, def-gr-periodic-symmetric-hyperbolic-system, def-emg-periodic-high-sobolev-state, and thm-emg-symmetric-hyperbolic-research-supplier. I also inspected the relevant Riemann integration suppliers (thm-multidimensional-integral-properties, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes, cor-change-of-variables-for-compactly-supported-functions, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-riemann-fubini-on-product-rectangles, and thm-ftc-second-part).

The subsidiary and development arguments were checked against lem-emg-charged-scalar-variation, lem-emg-maxwell-stress-divergence, lem-emg-fieldstrength-positive-symmetric-reduction, thm-gr-density-divergence-and-finite-chain-flux, lem-gr-einstein-residual-and-subsidiary-identity, thm-gr-constraint-equations-in-normal-frame, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality, def-gr-harmonic-gauge-and-reduced-equations, lem-gr-reduced-einstein-principal-part, lem-gr-periodic-sobolev-embedding, lem-gr-periodic-sobolev-algebra, lem-gr-smooth-composition-and-commutator-estimates, thm-picard-lindelof-local-existence-and-uniqueness, thm-c1-dependence-of-solutions-on-initial-data, thm-gr-local-geometric-development, and thm-gr-local-geometric-uniqueness. Their periodic analytic prerequisites thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, and thm-gr-periodic-symmetric-hyperbolic-smooth-persistence were opened at their used statements and proof arguments. I also opened the exact definitions of def-countable-choice and def-dependent-choice.

The current run's research/physics-remaining-80-2026-10-17-batch-11.proof-contracts.json contains all eight assigned items. Its proof-bearing derivation step IDs match the current numbered steps. The theorem's 1.3 derivation record was updated with the proof repair below. No edited item had a stale verification.judge record.

For the statement clarification's consumer check, I opened pthm-emg-classical-charged-scalar-model-evolution (batch 12) and its downstream ex-emg-adopted-zero-classical-scalar (batch 12). Its normal charged-derivative datum is already stated as n^a 𝒟_a φ|Σ, and the clarification leaves its claim and hypotheses consistent. Neither outside-batch item was edited.

## Review and repairs

- def-emg-classical-charged-scalar-finite-regularity-system: corrected library: physics to library: mathematics. The item has domain mathematics and is placed on the mathematics page emg-cp04; the batch manifest also classifies it as mathematics.
- lem-emg-classical-charged-scalar-compact-variation: corrected the same library mismatch for the same page and manifest reason.
- thm-emg-local-classical-charged-scalar-development: defined the predevelopment normal data on the abstract Lorentzian bundle R n ⊕ TΣ with metric -ab+h(X,Y), following the cited GR development supplier. Specified π_n as the initial normal component of the charged derivative, and made the general smooth data types and periodic orientation explicit. The batch-12 physical theorem consumer already uses this convention.
- thm-emg-local-classical-charged-scalar-development, proof step 1.3: the block symmetry and positivity were shown before the state was rescaled to dimensionless components, but the proof did not explain why those matrix properties persist. Added the constant congruence transformation S^{-T} A^μ S^{-1} for the fixed positive diagonal rescaling and stated the resulting joint coefficient smoothness. Updated the matching proof-contract derivation.

I found no further mathematical defect in the assigned definitions, variation computations, symmetric reductions, compatibility and constraint propagation, local development argument, zero-scalar example, remark, or page summaries.

Validation after the final item edits:

- Reflow and precheck passed for def-emg-classical-charged-scalar-finite-regularity-system.
- Reflow and precheck passed for lem-emg-classical-charged-scalar-compact-variation.
- Reflow reported thm-emg-local-classical-charged-scalar-development unchanged; its precheck passed.
- Final proof-layout check: 3 changed items, 24 numbered steps, 0 defects.

## Page verdicts

- emg-cp04: pass after the two mathematics-library metadata repairs and the theorem clarification.
- emg-cp04-examples: pass. The zero-scalar example correctly requires V(0)=0 for vanishing scalar stress, uses only the exact-potential sector, and states the local-existence clause conditionally.

## Unedited findings and blocker

No confirmed or suspected uneditable defect remains in the inspected assigned claims or their relevant supplier interfaces. No blocker.

## Coverage note

The dependency walk enumerated 2,185 unique items (2,157 published and 28 draft, including batch 11). I inspected the assigned items, their direct suppliers, the in-run draft suppliers at their actual uses, and the supporting published statements/arguments listed above. I did not re-audit every proof in the full transitive mathematical-library closure, particularly unrelated set-theory and analysis foundations behind already published suppliers; no coverage of that full closure is claimed.
