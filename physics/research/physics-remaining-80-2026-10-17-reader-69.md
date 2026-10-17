# Step 3a reader report — batch 69

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `69`

## Outcome

I reviewed both assigned pages, all 22 assigned items, and the direct prerequisite statements needed by their arguments. I repaired definition and scope gaps in 11 in-flight items. No uneditable defect or blocker remains. No page prose was changed.

The assigned content is mathematical model work. The page summaries distinguish model deductions from empirical claims and do not report measurements or claim that a model describes nature.

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mg01.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mg01-examples.md`

The A page's page prerequisite was also opened: `library/quantum-statistical-mechanics/qsm-bose-fermi-gases.md`.

Assigned A-page items, in dependency order:

- `def-tgr-gravitating-phase-reference`
- `lem-tgr-finite-gaussian-moment-envelope`
- `lem-tgr-annular-radial-integration`
- `def-tgr-softened-gravity-finite-phase`
- `def-tgr-regulated-kepler-shell-law`
- `lem-tgr-static-gas-finite-normalization`
- `lem-tgr-finite-gravitational-gibbs`
- `thm-tgr-gravity-collapse-nonextensivity`
- `lem-tgr-regulated-kepler-shell-law-normalization`
- `lem-tgr-relative-shell-canonical-response`
- `thm-tgr-regulated-kepler-negative-capacity`
- `thm-tgr-gravitational-canonical-response`
- `thm-tgr-finite-gravitational-entropy-optimum`
- `lem-tgr-static-finite-fermi-occupations`
- `lem-tgr-finite-bath-exchange-stability`

Assigned B-page items:

- `cex-tgr-volume-surface-entropy-response`
- `ex-tgr-softened-box-normalization`
- `cex-tgr-point-box-collapse`
- `cex-tgr-softened-nonlinear-free-energy`
- `cex-tgr-hardcore-long-range-limit`
- `ex-tgr-regulated-negative-response`
- `ex-tgr-finite-bath-stabilization`

I opened the exact current items and statements for the direct external prerequisites: `thm-gaussian-integral`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-jordan-boundary-criterion`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`, `thm-extreme-value-metric`, `thm-differentiation-under-the-integral-sign`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-picard-lindelof-local-existence-and-uniqueness`, `lem-ode-extension-from-a-compact-interior-region`, `def-countable-choice`, and `thm-monotone-convergence-for-the-integral`. The imported mathematical items were identified in `research/math-imports.json`; their published status and exact interfaces were checked in their current item files.

The one current-run draft item outside this batch is `lem-qsm-models-diagonal-occupation-trace` (batch 45). I opened its current complete item and the required QSM page. Its Statement exactly matches the current batch-45 page-manifest entry; the finite-mode consumer states the supplier result as a condition and carries its `ACω` assumption. The supplier is still draft and its authored proof/precheck are not independent proof approval.

## Repairs and evidence

- `def-tgr-gravitating-phase-reference`, `## Definition`: defined a probability density relative to `ν_N`, set `0 log 0 := 0`, and made the surface-entropy temperature/capacity convention explicit. The former Definition used `ρ log ρ` without a zero convention and mentioned two conventions' temperatures while defining only `T_G`. The unit note now makes `ω ΔE` dimensionless. Direct consumers in this batch were checked. I also checked the direct out-of-batch uses: they rely on phase-measure units, normalization, or state their own relative-model entropy convention; the clarification changes none of their conclusions.
- `thm-tgr-gravitational-canonical-response`, `## Statement`: defined the Gibbs expectation and variance for measurable observables before using `⟨H⟩_β` and `Var_β(H)`. Its Gibbs supplier provides the finite second moments used by the proof.
- `lem-tgr-relative-shell-canonical-response`, `## Statement`: defined the relative canonical measure, normalized density, expectation, and variance. The displayed response formulas and proof then use those definitions directly.
- `thm-tgr-finite-gravitational-entropy-optimum`, `## Statement`: specified the density's domain and normalization, defined mean energy for integrable-energy densities, and stated the zero-value convention for both entropy integrands. The proof's relative-entropy expansion and equality condition use these exact conventions.
- `lem-tgr-regulated-kepler-shell-law-normalization`, `## Statement` and proof step 2.1: distinguished the ordinary derivative on the open branch from the right derivative in energy at `δ=1/16`. At that endpoint the proof now takes `h<0` in `δ`, which corresponds to increasing `E` inside the stated branch; the shell-mass identity remains positive and finite.
- `thm-tgr-regulated-kepler-negative-capacity`, `## Statement` and proof step 1.1: made the same endpoint convention explicit for `dS_G/dE` and `dT_G/dE`, and defined the endpoint capacity as the reciprocal temperature derivative. The proof uses the matching one-sided increment. The interior sign and denominator bound are unchanged.
- `lem-tgr-finite-bath-exchange-stability`, `## Statement` and `[F1]`: defined the open exchange domain, temperatures, capacities, units, and the common-temperature point. The realization now selects an interior Kepler branch energy `r₀/R < δ < 1/16`, where the supplied entropy is `C²` on an open interval. The stability claim names the compact invariant interval and exponential estimate established in proof step 4.1. `S₀` is specified in `J K⁻¹`.
- `cex-tgr-volume-surface-entropy-response`, title, `## Statement refuted`, and `## Facts & Assumptions`: replaced the vague universal model description with the exact six-dimensional relative Kepler model, its dimensionless measure, local entropy/temperature/capacity conventions, and SI units. The local computation gives `Ω(-e)=C e^{-3/2}J₀`, hence `C_G=-3k_B/2` and `C_B=-5k_B/2`; it refutes the precise equal-capacity claim for this model.
- `cex-tgr-softened-nonlinear-free-energy`, title and `[Given]`: narrowed the title to the guarantee actually refuted and replaced “the theorem below” with the exact link `[[thm-tgr-gravity-collapse-nonextensivity]]`.
- `cex-tgr-hardcore-long-range-limit`, title: narrowed the title to the actual counterexample, which shows that hard-core exclusion does not guarantee a finite unscaled-gravity limit along the constructed sequence.
- `ex-tgr-finite-bath-stabilization`, `## Example`: states that the selected subsystem energy is interior and gives the units of `E₀`, `T_ref`, and `S₀`. Its proof verifies the matched temperature and negative total entropy curvature.

The affected excerpts and boundary records in `research/physics-remaining-80-2026-10-17-batch-69.proof-contracts.json` were refreshed. None of the edited items had a `verification.judge` record, so there was no stale judge record to remove.

## Consumer and page verdicts

The `def-tgr-gravitating-phase-reference` consumer check covered the 22 assigned items and the current direct out-of-batch references found in `items/`. No downstream argument relies on a conflicting interpretation of the added density or entropy conventions. The B-page relative Kepler counterexample now defines its own reference measure and entropies rather than applying the N-particle measure to a relative phase space.

- `tgr-mg01` — **Pass after repairs.** Definitions, Gaussian and radial prerequisites, phase-volume normalization, response claims, entropy optimum, static-gas identities, and the conditional finite-mode Fermi result have explicit hypotheses. Its QSM dependency remains labeled as a current batch-45 draft; the page and consumer do not describe it as independently approved.
- `tgr-mg01-examples` — **Pass after repairs.** The examples and counterexamples use exact model scopes and dependency results. The volume/surface entropy comparison is now defined for its relative phase model, and the finite-bath example names the specified exchange law and interior energy.

## Sources, checks, and limitations

I reviewed `research/physics-remaining-80-2026-10-17-batch-69-sources/source-reading.md` and checked the available source text identities. Katz's author manuscript (pp. 7–10 and 16–17), Tong's *Statistical Physics* (§§1.3–1.3.1, 2.1, and 3.5–3.6), Tao's *An Introduction to Measure Theory* (§1.4), and Chavanis I/II are cited as context; the assigned mathematical claims are carried by their local proofs, not inferred from those sources. The Teschl ODE text is correctly identified at [the author-hosted PDF](https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf); the proof uses the exact current published ODE-supplier statements and a local stability argument.

All 11 changed items were reflowed without further changes and passed precheck. The required final layout command reported `11 items, 33 steps, 0 defects`. I did not re-audit the transitive proof closures beneath published mathematical suppliers or the 21 upstream mathematical prerequisites of the batch-45 QSM draft supplier. Batch 69 uses the draft's exact Statement conditionally and does not claim independent supplier approval. No other coverage limitation or blocker remains.

## Uneditable findings and blocker

No confirmed uneditable defect remains in the opened assigned content or direct prerequisite interfaces. There is no blocker.
