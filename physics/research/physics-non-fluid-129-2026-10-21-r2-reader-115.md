# Reader report — batch 115

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: Step 3a reader (read-only)

## Opened inventory

Assigned pages:

- A page `tgrx-thermal-geometry` — `library/thermodynamics-and-general-relativity-mathematics/tgrx-thermal-geometry.md`.
- B page `tgrx-thermal-geometry-examples` — `library/thermodynamics-and-general-relativity-mathematics/tgrx-thermal-geometry-examples.md`.

Assigned items, read in dependency order:

1. `def-tgrx-thermal-vorticity`
2. `def-tgrx-period-of-one-form`
3. `lem-tgrx-compensator-implies-exact`
4. `lem-tgrx-exact-one-form-zero-period`
5. `prop-tgrx-equilibrium-obstructions`
6. `ex-tgrx-rotating-annulus`

I also read the batch manifest, proof contracts and batch notes. Context opened to check the assigned page and item claims:

- Required pages `tgr-et01`, `tgr-et02`, and `riemannian-metrics-length-distance-and-volume`.
- Direct mathematical suppliers used by the assigned items: `def-gr-smooth-lorentzian-objects`, `def-gr-killing-field`, `def-tgr-stationary-thermal-carriers`, `def-countable-choice`, `def-smooth-manifold`, `def-smooth-differential-k-form`, `def-piecewise-c-one-curve-on-a-manifold`, `thm-continuous-implies-integrable`, `thm-additivity-over-subintervals`, `def-tgr-charged-liouville-data`, `def-closed-and-exact-differential-forms`, `thm-chain-rule-for-total-derivatives`, `thm-ftc-second-part`, `lem-tgr-thermal-killing-kinematic-equivalence`, and `thm-tgr-electrochemical-stationarity`.

## Review and evidence

- The thermal-vorticity definition has a smooth positive norm on its stated future-timelike domain; its normalized field is unit timelike. The antisymmetrized covariant derivative is a smooth two-form with the stated inverse-energy and inverse-length units. The item distinguishes this mathematical carrier from any realized thermal state.
- The period definition supplies finite chartwise regularity, one-sided endpoint tangents, intrinsic covector-tangent pairing, Riemann integrability on each piece, and subdivision independence. The exact-form lemma applies the chain rule and interval FTC piecewise and telescopes the endpoint values; it does not use a converse exactness theorem.
- The compensator identity has the stated sign: substituting `L_ξ A = dΛ_ξ` into the coordinate expressions gives `i_ξ F = -d(ξ·A - Λ_ξ)`. The hypothesis is global, so the resulting potential and exact form are global.
- The proposition's kinematic equivalence matches the published thermal-Killing equivalence. In the Killing subcase, the charged Liouville theorem gives `dζ = -c q_SI i_β F`; with `α = -ζ` and nonzero `q_eff = c q_SI`, the scalar equation is `dα = q_eff ω`. A global solution exists exactly when `ω` is exact, and a nonzero period rules it out. The separate global-compensator clause correctly implies exactness and zero periods.
- The rotating Minkowski calculation is consistent: the timelike region is `1 - Ω²r² > 0`, with the `Ω = 0` case handled separately. In the annulus example, `η` is smooth and closed, `ω = b C_0(η - Ω dx⁰)` is closed, and the positively oriented circle has period `2π b C_0 ≠ 0`. The exact-form lemma then gives the stated obstruction.
- The cited source excerpts checked for context were Becattini, §§5–7 (Killing condition and thermal vorticity, especially eqs. (11), (13)); Santiago and Visser, §IV, eqs. (4.1)–(4.6); Acuña-Cárdenas et al., §VI.B, eqs. (262)–(268); Shi et al., §§2–3 (charged-potential and equilibrium-profile conventions); Tong, §§2.4.3–2.4.4 and §4.3.1; and BIPM's SI-defining-constants material. These source checks are context and citation review, not a re-audit of every transitive published mathematical proof.
- No empirical observations or statistical inference are claimed in this batch. No TikZ/tikzcd diagrams are present in the assigned items or page carriers.

## Finding that could not be edited

`ex-tgrx-rotating-annulus`, Sources references / exact-constant claim: the cited BIPM URL `https://www.bipm.org/en/measurement-units/` is an overview that names `c` and `k` as defining constants and says the SI assigns exact numerical values, but does not display the numerical entries quoted by the example. BIPM's linked page `https://www.bipm.org/en/measurement-units/si-defining-constants` gives `c = 299 792 458 m s⁻¹` and `k = 1.380 649 × 10⁻²³ J K⁻¹` (table rows; it also states that the values have no uncertainty). The example's citation should point directly to that page or include an exact locator. This is a nonfatal citation defect; the values themselves are correct. The reader assignment is read-only, so no item or page prose was changed.

## Page verdicts

- `tgrx-thermal-geometry` (A): page identity, draft status, mathematics classification, item inventory, and required-page list match the assigned scope. Its frontmatter-only body is consistent with the current compact-page convention. No page-carrier defect found.
- `tgrx-thermal-geometry-examples` (B): page identity, companion link, draft status, mathematics classification, example inventory, and A-page requirement match the assigned scope. The page carrier is sound; its example has the BIPM citation issue recorded above.

## Edits and blockers

- Source edits: none (read-only role).
- Blocker: none.
- No validators or formatter were run; no item or page was changed.
