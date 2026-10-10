# Reader 34 — batch 34

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a reading of the current authored carriers, not acceptance of their scaffold decisions. All eleven assigned items are draft. Ten item carriers, the A-page summary and the assigned proof-contract file were repaired. The Brewster example carrier and B-page prose were left unchanged. No uneditable defect remains identified, no withdrawal is proposed, and there is no current blocker. This is a reader report, not a judge stamp or publication certification.

## Opened inventory and dependency review

Read the root `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the relevant content-model sections including explicit definitions and statistical evidence, `briefs/reader.md`, the exact batch manifest, owner direction (including the equal-medium Brewster qualification), author notes, coverage/source records, and the assigned contracts. Earlier decisions were used as navigation and evidence, not verdicts.

Opened both complete pages:

- `library/classical-electromagnetism/em-wave-interfaces-and-conductors.md` (A).
- `library/classical-electromagnetism/em-wave-interfaces-and-conductors-examples.md` (B).

Opened every complete assigned item; checked its title, statement/definition/example, facts, argument, remarks, scope, units and relevant contract. Supplier arguments were resolved before final consumer verification:

- `items/lem-em-exponential-character-open-set-independence.md`.
- `items/lem-em-admittance-interface-solve.md`.
- `items/def-em-medium-wave-parameters.md`.
- `items/pthm-em-medium-plane-wave-fields.md`.
- `items/pthm-em-phase-matching.md`.
- `items/pthm-em-conducting-skin-depth.md`.
- `items/pthm-em-normal-fresnel.md`.
- `items/pthm-em-oblique-fresnel.md`.
- `items/ex-em-skin-depth-approximation-example.md`.
- `items/ex-em-brewster-angle-example.md`.
- `items/ex-em-evanescent-flux-example.md`.

Opened the following external direct supplier files. Published mathematical suppliers were checked at their exact Definition/Statement interfaces; this is not a new audit of all their proofs. Draft finite-algebra suppliers `lem-em-period-average` and `lem-em-interface-wave-linear-system`, and the macroscopic-Maxwell, restricted-energy and stationary-jump bodies were read. The compact stationary-jump theorem is used only for the form of boundary conditions: its compactness/Countable Choice hypotheses are not silently applied to the noncompact plane, whose interface identities are explicit assumptions.

- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`.
- `items/def-complex-exponential.md`.
- `items/def-complex-numbers-and-arithmetic.md`.
- `items/def-cross-product-in-r3.md`.
- `items/def-directional-and-partial-derivatives.md`.
- `items/def-divergence-and-curl-of-a-c1-vector-field.md`.
- `items/def-em-complex-plane-wave.md`.
- `items/def-em-fields.md`.
- `items/def-em-lab-geometry.md`.
- `items/def-em-polarization-magnetization.md`.
- `items/def-em-si-conventions.md`.
- `items/def-euclidean-inner-product.md`.
- `items/def-improper-integral-at-infinity.md`.
- `items/def-ordered-field.md`.
- `items/def-principal-inverse-sine-and-cosine.md`.
- `items/def-principal-inverse-tangent.md`.
- `items/def-tangent-cotangent-secant-cosecant.md`.
- `items/lem-complex-conjugation-and-modulus-laws.md`.
- `items/lem-cross-product-is-bilinear-alternating-and-orthogonal.md`.
- `items/lem-em-interface-wave-linear-system.md`.
- `items/lem-em-period-average.md`.
- `items/lem-of-sign-rules.md`.
- `items/lem-of-square-monotone.md`.
- `items/lem-of-square-positive.md`.
- `items/post-em-material-closure.md`.
- `items/prop-of-multiply-inequalities.md`.
- `items/pthm-em-macroscopic-maxwell.md`.
- `items/pthm-em-material-stationary-jumps.md`.
- `items/pthm-em-restricted-material-energy.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-chain-rule-for-total-derivatives.md`.
- `items/thm-complex-exponential-addition-and-real-extension.md`.
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md`.
- `items/thm-complex-numbers-form-a-field.md`.
- `items/thm-continuous-on-a-rectangle-is-riemann-integrable.md`.
- `items/thm-every-complex-number-has-a-square-root.md`.
- `items/thm-exponential-limits-and-range.md`.
- `items/thm-ftc-second-part.md`.
- `items/thm-of-square-roots.md`.
- `items/thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions.md`.
- `items/thm-quarter-turn-values-and-shift-formulas.md`.
- `items/thm-sine-and-cosine-addition-formulas.md`.
- `items/thm-sine-cosine-signs-monotonicity-and-ranges.md`.
- `items/thm-sine-cosine-zero-sets-and-fundamental-period.md`.

Additional definition/postulate interfaces or exact mathematical statements opened to resolve the conventions and cited uses:

- `items/def-sr-affine-minkowski-model.md`.
- `items/def-inertial-frame-and-inertial-chart.md`.
- `items/def-spatial-euclidean-structure-of-an-inertial-frame.md`.
- `items/post-sr-inertial-covariance.md`.
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`.
- `items/def-complete-ordered-field.md`.
- `items/thm-kernel-and-fibres-of-complex-exponential.md`.
- `items/thm-newton-leibniz-with-interior-derivative.md`.
- `items/post-em-vacuum-maxwell.md`.
- `items/post-em-coarse-graining.md`.

For `post-em-coarse-graining`, the reading was limited to its kernel/footprint and regularity clauses relevant to the polarization definition. No microscopic derivation of the material closure was assumed. No imported supplier or original mathematical item was edited.

## Confirmed defects and repairs

1. **`lem-em-exponential-character-open-set-independence`, Facts F1 and Proof 1.4, 2.1.** The original one-dimensional proof evaluated its identity at zero despite having established it only on an arbitrary interval J, which need not contain zero. It also split exponentials in the dimensional induction without recording the addition law. Added the exact published addition-law dependency and its role; F1 now derives nonvanishing from `exp(w)exp(-w)=1`. Step 2.1 evaluates at an actual `t0 in J` and cancels the nonzero exponential. Step 1.4 cites the addition law in its factorization. The complex-independence claim, arbitrary open domains and real-part grouping (including self-paired frequencies) are preserved. Evidence: the opened exponential supplier statements and the displayed annihilating-operator calculation; Milne supplies corroborating whole-group independence, not open-set localization.

2. **`lem-em-admittance-interface-solve`, Proof 5.3.** The original proof asserted that `Y1-Y2` was nonzero for all positive real admittances. Equal admittances are allowed and give zero reflection. It now requires only the sum to be nonzero; the difference is real and may vanish. All transfer and flux identities remain unchanged. Contract boundary evidence also retains the genuinely permitted `Y1=0` case of clause (a), distinguishing it from the positive incident admittance required by (b)-(d).

3. **`def-em-medium-wave-parameters`, Definition (b) and well-definedness.** The original prose referred to a nonexistent strategy, did not explicitly justify the radicand `r-a>=0` or `q>0` when conductivity is positive, and attributed the assertion that the roots are exactly plus/minus kappa to a supplier whose statement gives existence. The local factorization `(r-a)(r+a)=b^2` now establishes the radical domains, positivity and zero-conductivity endpoint; `(z-kappa)(z+kappa)=0` and the newly declared complex-field supplier establish both roots. Replaced the strategy pointer with the actual well-definedness paragraph. The parameters and physical scope were preserved.

4. **`pthm-em-medium-plane-wave-fields`, Statement (d)-(e), Proof 1.1, 2.1, 3.1, 4.1, 5.1 and final 7.1-8.2.** Corrected the Faraday residual from subtraction of the negative time derivative to addition, and its coefficient to `i(k cross e-omega mu h)=0`. The original intermediate equations contradicted the correct final amplitude relation. Real-part projection now commutes with differentiation, without falsely commuting it with arbitrary complex multiplication. Retained the omega factor when extracting the imaginary part in 2.1. Replaced “division by a vector” with cancellation of a nonzero coordinate. Defined the Hermitian complex-vector norm separately from the bilinear dot product; the lossless norm proof now splits complex e into real and imaginary vectors instead of applying a real-vector identity to complex e. Clause (d) explicitly assumes the amplitude conditions, and (e) explicitly chooses the companion magnetic amplitude `h=k cross e/(omega mu)` and defines `kappa0-hat`; an arbitrary independent h cannot support its flux conclusions. The original 6.3 factorization now uses the already-proved converse, so precheck required numbering-only canonical repair: original 6.3/7.1/7.2/8.1/8.2/9.1/10.1 became final 7.1/7.2/8.1/8.2/9.1/10.1/11.1. This preserves all zero-wave, dispersion, complex-wave and polarized-evanescent branches. Evidence: the coordinate curl definition, the opened material equations, exact exponential identities, period-average supplier and local component calculations.

5. **`pthm-em-phase-matching`, Statement (b),(d) and Proof 2.1, 5.1.** Corrected the equality that assigned the tangential amplitude to the full electric trace; it now labels the projected trace. Replaced the invalid explanation of cross-product injectivity with `e3 cross (w1,w2,0)=(-w2,w1,0)`. Distinguished a real plane from its complex span. Clarified that the two tangential identities are the interface hypotheses used within the stated positive-frequency amplitude setting. Contract boundary records now correctly attribute the nongrazing incident/reflected angles to their signed normal components and restrict the absent-wave extension to the reflected wave. The grouping proof still allows complex tangential data and a zero transmitted normal root.

6. **`pthm-em-conducting-skin-depth`, Statement and Facts F7, Proof 5.1.** Specified the unit vector as real. Added exact tangent, quarter-turn and trigonometric sign suppliers for the phase calculation; F7 establishes `arctan(1)=pi/4`, rather than assuming it as background. The limit of `sqrt(1+t^2)-t` is now justified by the explicit bound `|sqrt(1+t^2)-t-1|<=t+t^2/2`. The exact skin depth and both approximation regimes retain their original explicit error constants and endpoint domains. Contract records distinguish one-way error estimates from unsupported converse characterizations.

7. **`pthm-em-normal-fresnel`, Facts F1,F5 and Proof 5.1, 6.1.** F1 omitted the conductivity term in Ampere's amplitude relation despite covering an Ohmic transmitting medium; it now states `k cross h=-(omega epsilon+i sigma)e` with the correct side conductivities. F5 now limits its single-character coefficient conclusion to the actual positive-frequency interface characters; a self-paired frequency would not justify that general conclusion. Added the direct zero-reflected-field flux check, because the cited nonzero-wave average excludes that endpoint. Corrected the “evanescent” heading and contract wording to “attenuated”: the normal Ohmic branch has positive real admittance and entering normal flux, unlike the lossless evanescent branch. The entering-flux absorption integral and impedance-matched case are preserved.

8. **`pthm-em-oblique-fresnel`, Statement (d), Proof 1.1-5.1 and source locator.** Corrected the TE cross products throughout to `k cross yhat=|kappa| n-k3 xhat`, including the reflected sign, and explicitly completed all four amplitude conditions for both polarizations. Corrected the critical TM cross-product sign and supplied the critical TE zero-normal-flux calculation as well. Removed division of a real-part identity by a complex phase; time-line amplitude vanishing gives the coefficient identity directly. Confined division by the transmitted normal component to its nonzero branch. Replaced the false equality `Re(Y1s+Y2s)=Y1s` by its correct positive lower bound. Removed `K2<K1` from the propagating proof: only `|kappa|<min(K1,K2)` is needed, so either index ordering is retained. Completed Brewster sufficiency, including the candidate's admissibility and positive transmitted cosine, rather than inferring sufficiency merely from a squared necessary condition. Defined the real incident angle explicitly in the total-internal-reflection branch. Equal-medium nonuniqueness, unequal-index uniqueness, both polarizations, the critical root and total internal reflection are preserved. The Griffiths Problem 9.37 locator now includes printed p. 415, where its flux part actually appears.

9. **`ex-em-skin-depth-approximation-example`, Verification 1.2.** The original reasoning established only `q<p`, then asserted `q<sqrt(b/2)`. The repair instead squares positive quantities to prove `r=sqrt(91296)<336`, giving `q^2=(r-36)/2<150` directly. All displayed exact numbers and rounded decimals were checked and preserved. The stale contract explanation of this inequality was replaced.

10. **`ex-em-evanescent-flux-example`, source reference locator only.** Corrected Problem 9.37 from pp. 413-414 to pp. 413-415, identifying part (f) on p. 415. Its exact amplitudes, phase, decay and flux calculations were independently checked and unchanged.

11. **A-page summary, first paragraph.** Replaced “Two pure-algebra lemmas” with “Two mathematical lemmas”: character independence uses differentiation, so the original description did not accurately describe that argument. B-page prose is unchanged.

12. **`research/physics-em-sr-40-2026-10-08-batch-34.proof-contracts.json`.** Updated repaired derivations, actual cited inputs, new exact supplier citations, final step numbers and relevant boundary evidence. Rebound stale source excerpts to the current exact supplier sections, including material closure, period averages, and the repaired medium/oblique interfaces used by the assigned examples. Reviewed and corrected stale boundary descriptions (equal admittances, absent waves, real/complex norms, critical/attenuated branches, and the skin-depth comparison). This includes the unchanged Brewster example's consumer contract. No `verification.judge` record was present in any assigned carrier, so none was added, retained as stale or removed fictitiously.

## Sources and consumer checks

Primary source sections actually inspected:

- [Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf): phase-matching and Fresnel/TIR discussion, printed pp. 188-193, plus conductor equations, dispersion, attenuation and phase, pp. 207-209. The local 236-page copy `/tmp/reader30-electro.pdf` matches the coverage fingerprint: raw SHA-256 `b99b41156dfe6cd9a19be71dd61b464ef1eae8ce97fb0d68360a4e1a461a512f`. Its cover says Lent Term 2015 and PDF creation/modification metadata says 2026-10-07; these are different dates, not a newly invented edition. The arbitrary-permeability and equal-medium qualifications are established locally.
- [Griffiths, third edition scan](https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf): printed pp. 383-392, 394-398 and 413-415, including Eq. (9.124), normal/oblique systems, Brewster conditions, conductor phase and complete Problem 9.37 through part (f). Used the retained `/tmp/reader32-griffiths.pdf`, 596 pages, raw SHA-256 `ab7b67a3f6d600497d9c04d18053ad94e7804b25d6622dbf1545f4581ac15887`. Its text layer has OCR noise; the arguments and sign conventions were checked against the independent Tong treatment and the local formulas.
- [Milne, Fields and Galois Theory](https://www.jmilne.org/math/Books/FT0.pdf): Theorem 5.14 and complete proof, printed pp. 85-86. This is finite independence of distinct group homomorphisms into the multiplicative group of a field, not an unproved assertion about arbitrary open subsets.
- [Physicspages, Linearly independent exponentials](http://physicspages.com/pdf/Mathematics/Linearly%20independent%20exponentials.pdf): both pages, dated 26 December 2024. Browser retrieval failed; an HTTPS curl retrieval succeeded to `/tmp/reader34-independent-exponentials.pdf`. This supplementary note states whole-complex-plane independence. The assigned localized proof is checked directly; it does not rely on treating this note as a published prerequisite item.

Direct-consumer checks were completed within the batch. The conducting, phase-matching, normal/oblique interface and both optical examples use the repaired medium amplitude conditions; the evanescent example's magnetic amplitude and the two Fresnel polarization families satisfy the explicit companion-amplitude hypothesis. The Brewster example is in the previously wrongly excluded ordering `n1<n2`; its exact `rp=0`, `tp=1`, `rs=-5/13`, `ts=8/13` and flux fractions remain correct. Current run manifests and current carrier deps show no direct consumer of the clarified owned supplier interfaces outside batch 34. No other-batch content was edited.

All examples use declared parameters and report no measurements, statistical tests or empirical uncertainty estimates. The deductions establish consequences of the stated model; they do not establish material validity, signal speed or empirical truth. Local energy/plane-interface algebra uses no choice principle; the compact-jump and fixed-volume supplier branches carrying Countable Choice are not invoked to establish these plane-interface conclusions.

## Validation actually completed

- Reflow and precheck were run separately for every changed item using the required physics-support commands. The final reflows were unchanged; all nine changed proof-bearing items passed precheck, and the changed definition was correctly reported not applicable. The first medium-wave precheck requested numbering-only canonical repair; it was adopted with its contract references, then rechecked successfully.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-34.proof-contracts.json --strict`: **11/11 items, 0 errors, 0 warnings** on final contract bytes. Earlier stale excerpt/boundary-anchor diagnostics were repaired before this pass.
- Scoped `rendercheck.mjs` on all eleven assigned items and both pages: **13 files, no errors**, actual KaTeX and renderer YAML parsing available. A mistakenly unscoped `--help` invocation was interrupted and supplies no validation evidence. The final A-page wording edit received a separate scoped render check.
- Final required `proof-layout.mjs`, in one command listing all ten changed item paths after their last edits and reflows: **10 items, 75 steps, 0 defects**.
- Independent numerical evaluation confirmed every displayed skin-depth and evanescent-phase rounding. Finite algebra checks exercised **14 TE/TM specializations** covering both index orderings, equal media, both Brewster directions, the critical transmitted root and total internal reflection; they checked all four amplitude equations and all four interface traces. Good/poor-conductor error bounds were also tested at stated sample values including regime endpoints. These finite checks supplement, and do not replace, the general proofs.

## Page verdicts, uneditable findings and limitations

- **A — `em-wave-interfaces-and-conductors`: sound after the listed local repairs.** The summary now accurately names its mathematical suppliers. No remaining identified defect or withdrawal proposal.
- **B — `em-wave-interfaces-and-conductors-examples`: sound after the worked-proof and source-locator repairs.** The three deterministic examples and page summary have the correct exact values, conventions and model-only scope; B-page prose was not edited.

Uneditable findings: **none identified**. Blockers: **none**. The findings JSON therefore has an empty array; repaired defects are recorded above and in the changed carriers/contracts.

Coverage limitations: this review is limited to batch 34 and the supplier interfaces/relevant arguments opened to verify it. It is not a re-audit of the full transitive published mathematical corpus or of every bibliographic full text; the source ranges actually read are listed above, and the SI primitive source citations were not independently re-fetched. The generated transitive dependency inventory was not mistaken for human reading. No source, proof, empirical certainty or whole-run gate completion is claimed beyond this evidence.
