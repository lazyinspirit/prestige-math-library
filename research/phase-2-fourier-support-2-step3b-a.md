# Step 3b group a — phase-2-fourier-support-2

Owned batch: 1; the four pages in the assigned manifest. Authoring is complete; this is the group handoff for independent review and serial Step 4 reconciliation. All original 57 IDs and both pairs are retained. No published content or independent review record is edited. The batch cross-batch input is empty because this run has one batch; the FA23 → FA22 edge is internal to this batch.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW authoring rules, current manifest and scope review, FA22/FA23 designs, scaffold notes and selected published prerequisites. Active engine status independently confirms stage 3b-author and a completed pre-author baseline. No engine transition invoked.

Source reading: Dyatlov full local PDF excerpt `/tmp/phase-2-five-cap-dyatlov-fourier.txt`, printed p.119 Definition 11.1, equation 11.2 and full Proposition 11.2 proof, then p.120 and p.121 opening. Its angular frequency is replaced by 2π times the local frequency. Its C0 notation at Proposition 11.2 denotes continuous functions, not the local vanishing-at-infinity conclusion, which remains a separate theorem. Local supplier statements and proofs read for each completed item; prior scaffold source-reading claims are not adopted as this author's reading.

An accidental rendercheck invocation with `--help` ran the global render scan (17,528 files, passed). This is not a mathematical audit or a substitute for explicit-path batch checks.

Current obligations: independent review, serial plan splice, and owner reconciliation of the published findings below. No unresolved mathematical obligation remains in the owned new items. These are author decisions, not independent review or publication approvals.

## Checkpoint: def-fourier-transform-on-l-one-of-rn

Authored the complex L1 quotient definition with negative 2pi sign, n>=1, every-frequency output and explicit companion justification. The immediately following lemma is now authored and validates the integral; no family of representatives is selected.

Dependencies examined: def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, def-l-one-of-a-measure, def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity. Sources: Semyon Dyatlov, MIT 18.155 (2022), Definition 11.1, p.119; substitute ξ→2πξ. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T15:51:17.820Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-l-one-fourier-transform-is-well-defined

The authored two-step proof uses measurable unit-modulus multiplication, the integral triangle inequality and almost-everywhere integral invariance. It proves absolute convergence and a bound for each frequency, then representative independence without an uncountable exceptional-set union. Both dependency proofs were checked in their complex-valued form.

Dependencies examined: def-fourier-transform-on-l-one-of-rn, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-integral-triangle-inequality. Sources: Semyon Dyatlov, MIT 18.155 (2022), Definition 11.1 and (11.2). Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:51:18.967Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions

Linearity and norm bound follow from the proved complex integral interface. Uniform continuity is proved with an explicit integer-ball tail, DCT with majorant |f|, and an inside-ball exponential bound independent of frequency. This avoids a sequential-continuity criterion that could conceal countable choice; the argument remains choice-free.

Dependencies examined: lem-l-one-fourier-transform-is-well-defined, thm-dominated-convergence, thm-complex-exponential-addition-and-real-extension, thm-linearity-of-the-lebesgue-integral-on-l-one. Sources: Semyon Dyatlov, MIT 18.155 (2022), Proposition 11.2 and (11.2), p.119; uniform estimate made explicit. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:52:13.596Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-translation-modulation-dilation-and-reflection-laws

Authored each covariance calculation with the negative 2pi convention. Checked the current full complex change-of-variables proof, including its completion/null-set transport and explicit countable-choice assumption. Absolute determinant covers orientation reversal; singular matrices are excluded. Conjugation is computed componentwise.

Dependencies examined: lem-l-one-fourier-transform-is-well-defined, cor-c-one-change-of-variables-for-l-one-functions, thm-complex-exponential-addition-and-real-extension, def-translation-of-a-function-on-rn, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Propositions 11.12–11.13, p.123; Teschl Lemma 14.2 for translations/modulations. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:52:58.021Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-transform-converts-convolution-to-products

Authored the product-measurable Borel-representative argument, Tonelli norm product bound, and frequency-by-frequency complex Fubini calculation. The newer complex convolution interface supplies the explicit countable-choice and null-reflection facts missing from older imports. The older two lemmas are not relied upon for those defective clauses.

Dependencies examined: lem-l-one-fourier-transform-is-well-defined, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-countable-choice, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, lem-convolution-is-independent-of-the-chosen-borel-representatives, thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, lem-complex-translation-and-approximate-identity-interfaces. Sources: Semyon Dyatlov, MIT 18.155 (2022), Proposition 11.10, pp.122–123. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:54:02.169Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

### Published findings independently checked during convolution authoring

- `lem-convolution-is-independent-of-the-chosen-borel-representatives`, page `density-separability-and-convolution-in-lp`: confirmed declaration/proof-input gap, high confidence. Proof 1.1 says `x-N_f` is null by translation invariance L3, but reflection is also necessary and is not supplied by that cited theorem. Proof 3.1 also assumes a.e. existence without an existence dependency. Repair: explicitly supply reflection and state the conditional equality wherever either integral exists, or import the proved complex interface (avoiding cycles); independently establish a.e. existence in the later existence theorem. Existing suppliers: `thm-lebesgue-measure-under-dilations-and-reflections` and the Tonelli absolute-envelope argument. Not a counterexample to the mathematical conclusion.
- `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound`, same page: confirmed assumption/declaration debt, high confidence. Proof 1.1 chooses Borel representatives and uses translation invariance; neither the countable-choice assumption of the current representative theorem nor translation is declared directly. Repair with `def-countable-choice`, `thm-completion-measurable-functions-have-base-measurable-representatives`, and translation/null interfaces, or the already-published `lem-complex-translation-and-approximate-identity-interfaces` if acyclicity permits. The new Fourier convolution proof states countable choice and uses this sound complex interface; this debt does not block it.

These findings are for serial canonical-ledger reconciliation; no shared ledger edit was made.

## Checkpoint: lem-complex-integration-by-parts-on-intervals-and-decaying-lines

Expanded four real product identities into the complex formula, checked real FTC and Riemann/Lebesgue bridge proofs, then passed through explicit [-N,N] truncations with the two separately specified integrable majorants and boundary limits. The countable-choice assumption belongs to the bridge; no complex mean-value theorem is used.

Dependencies examined: thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-integration-by-parts, thm-ftc-second-part, thm-dominated-convergence, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Proposition 11.7, pp.121–122, integration-by-parts step; real/complex Lebesgue interface expanded locally. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:54:42.595Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization

Read Dyatlov Proposition 11.14 first proof on pp.123-124 and the full local real Gaussian square/polar chain. Authored polynomial Gaussian integrability, the dominated parameter derivative, decaying-line integration by parts, the integrating-factor solution normalized at zero, tensor product and positive scaling. No complex contour or later Fourier lemma is used.

Dependencies examined: lem-l-one-fourier-transform-is-well-defined, cor-c-one-change-of-variables-for-l-one-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-gaussian-integral, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, thm-differentiation-under-the-integral-sign, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-exponential-beats-every-polynomial, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Proposition 11.14, pp.123–124, first proof. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:56:15.374Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-riemann-lebesgue

Read Teschl Corollary 14.5 and its complete proof on p.381; replaced its later Schwartz-density route by the earlier complex translation interface. The explicit h=xi/(2|xi|^2) gives the factor -1 and the uniform outside-radius estimate. Countable choice is propagated; zero frequency is handled by the prior continuity theorem.

Dependencies examined: thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-countable-choice, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, def-c-zero-on-rn, lem-complex-translation-and-approximate-identity-interfaces. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Corollary 14.5, p.381; proof reordered via MT15 translation continuity. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:56:56.586Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-gaussian-fourier-summability-kernel-is-an-approximate-identity

Computed mass, norm, forward multiplier and inverse integral directly from the proved Gaussian evaluation. Declared the already-published complex substitution supplier directly for the absolute tail calculation. Explicit integer tails plus monotonicity prove the full t-down-to-zero limit without circular inversion.

Dependencies examined: lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-l-one-approximate-identity-on-rn, thm-dominated-convergence, def-countable-choice, cor-c-one-change-of-variables-for-l-one-functions. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Theorem 14.7 proof, p.382. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T15:58:00.583Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-radial-majorized-kernels-recover-lebesgue-point-values

Read Teschl Problem 15.8 on p.421; supplied a complete dyadic argument rather than citing the exercise as a proof. Ball measurability is proved before cube bounds, annuli control the radial profile, and separate f and constant-value tail bounds give the limit at the specified Lebesgue value. Bounded Phi ensures absolute convergence for every positive scale.

Dependencies examined: def-lebesgue-point-and-lebesgue-set, def-l-one-approximate-identity-on-rn, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-linear-change-of-variables-for-lebesgue-measure, thm-borel-sets-are-lebesgue-measurable, def-countable-choice, cor-c-one-change-of-variables-for-l-one-functions. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Problem 15.8, p.421; explicit dyadic proof replacing the hint. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:00:10.399Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-inversion-at-lebesgue-points-under-summability

Authored Fubini with exact absolute double integral ||f||1 t^(-n/2), Gaussian inverse-kernel identification, complex L1 approximation, and a separate application of the proved radial lemma with epsilon=sqrt(t). Read the source full Theorem 14.7 proof on p.382; no pointwise conclusion is inferred from norm convergence.

Dependencies examined: thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, lem-gaussian-fourier-summability-kernel-is-an-approximate-identity, lem-radial-majorized-kernels-recover-lebesgue-point-values, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-countable-choice, thm-l-one-approximate-identities-converge-in-l-p, lem-complex-translation-and-approximate-identity-interfaces. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Theorem 14.7, p.382, with Problem 15.8 fully supplied locally. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:01:02.367Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-l-one-fourier-inversion

The inverse integral is the reflected transform of the integrable transform. DCT with majorant |Ff| removes damping along 1/m; Gaussian recovery identifies every Lebesgue value. Read the current almost-everywhere Lebesgue-point proof and supplied the complex reduction explicitly.

Dependencies examined: thm-fourier-inversion-at-lebesgue-points-under-summability, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-fourier-translation-modulation-dilation-and-reflection-laws, thm-dominated-convergence, def-countable-choice, thm-almost-every-point-is-a-lebesgue-point. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Corollary 14.8, p.382. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:02:22.903Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis

Authored bounded representative and product-class verification, the every-frequency convolution bound, and Fubini with exact double norm product. Only one transform is required integrable; the symmetric variant is obtained by exchanging the inputs. No generic L1 product closure is assumed.

Dependencies examined: thm-l-one-fourier-inversion, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Proposition 11.18, pp.125–126; local Fubini proof extends its Schwartz case. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:02:24.165Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cor-uniqueness-of-the-l-one-fourier-transform

Applied inversion to h=f-g with the identically zero, hence integrable, transform. Explicitly checked the optional a.e.-equality hypothesis using continuity and positive-volume boxes. Equality is of L1 classes, not all representative values.

Dependencies examined: thm-l-one-fourier-inversion, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Theorem 14.7. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:03:24.623Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cor-convolution-approximate-identities-from-fourier-multipliers

Authored the fixed-frequency near/tail estimate with absolute tails, then used existing complex norm approximation and the Fourier operator bound to obtain uniform transform convergence. Explicitly handled the strict versus weak tail cutoff and did not infer uniform convergence from pointwise multiplier convergence.

Dependencies examined: thm-fourier-transform-converts-convolution-to-products, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-l-one-approximate-identities-converge-in-l-p, def-l-one-approximate-identity-on-rn, lem-complex-translation-and-approximate-identity-interfaces, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Theorem 14.7 and Lemma 14.12; MT15 supplies the norm theorem. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:03:25.943Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-transform-of-a-finite-complex-measure

Read the full simple-limit complex integral and total-variation bound proofs and the partition proof of total-variation additivity. Authored boundedness and a frequency-uniform DCT estimate against the finite positive variation measure. Countable choice is explicit; RN, Hahn decomposition and general automatic finiteness are not used.

Dependencies examined: def-complex-measure, def-integration-against-a-signed-or-complex-measure, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-dominated-convergence, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Problem 14.10, p.387. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:04:23.107Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-gaussian-smoothing-of-finite-complex-measures

Authored density reduction with AC, bounded-test integral transfer from uniform simple approximants, exact absolute product bounds for all Fubini uses, and uniform C0 testing convergence. Read current complex RN, variation-density and integration proofs. Added direct existing C0 and translation suppliers for actual proof uses. No Lebesgue density of the original measure is presumed.

Dependencies examined: thm-fourier-transform-of-a-finite-complex-measure, lem-gaussian-fourier-summability-kernel-is-an-approximate-identity, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-c-c-and-c-c-infinity-on-rn, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value, def-axiom-of-choice, lem-complex-translation-and-approximate-identity-interfaces, thm-fourier-translation-modulation-dilation-and-reflection-laws. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Problem 14.10, p.387; explicit smoothing argument. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:05:41.541Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms

Authored the zero-difference smoothing argument, Euclidean second-countable LCH verification, domination and regularity of all four Jordan parts, and two applications of the positive RMK cutoff uniqueness proof. Read the current regularity and Jordan proofs. AC is explicit; the complex-functional representation norm clause is not an input.

Dependencies examined: lem-gaussian-smoothing-of-finite-complex-measures, cor-uniqueness-of-the-l-one-fourier-transform, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-axiom-of-choice, thm-rmk-uniqueness-among-radon-measures, thm-jordan-decomposition-for-signed-measures, prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures, thm-heine-borel-rn, thm-rationals-countable. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Problem 14.10, p.387. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:06:37.520Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: rem-probability-characteristic-function-normalization

Authored the unit-modulus positive-measure calculation and exact sign/scale dictionary; probability mass gives value one at zero. This uses no measure decomposition or choice selection.

Dependencies examined: def-integrable-real-and-complex-functions-and-their-integrals, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T16:07:56.748Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: rem-riesz-thorin-supplied-by-measure-theory

Authored endpoint orientation with the infinite-target requirement, designated existing page, closure boundary and later Fourier endpoint role. No intermediate-exponent theorem is asserted or consumed.

Dependencies examined: thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1 equation (14.2), Theorem 14.10; §15.1 Theorem 15.2 and Corollary 15.3, pp.414–415, interpolation orientation only. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T16:07:57.511Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-fourier-transform-of-an-interval-indicator

Computed the exponential primitive, endpoint quotient, zero-frequency interval mass and symmetric sinc specialization. The a=b null singleton is separate; no division by zero or reversed-interval convention is hidden.

Dependencies examined: def-fourier-transform-on-l-one-of-rn, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-complex-exponential-addition-and-real-extension, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Problem 14.4(i). Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:07:58.701Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-fourier-transform-of-a-gaussian

Computed determinant scaling, reciprocal spatial/frequency widths, mass and normalized density transform, with t=1 self-transform and dimension factors explicit.

Dependencies examined: lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:09:12.196Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-fourier-transform-of-the-poisson-kernel

Computed both decaying exponential half-line integrals with explicit tail error, inverted the rational transform after checking its integrability, and proved the Abel identity with absolute Fubini. The bounded radial Poisson profile supplies the separate Lebesgue-point limit.

Dependencies examined: def-fourier-transform-on-l-one-of-rn, thm-l-one-fourier-inversion, thm-fourier-translation-modulation-dilation-and-reflection-laws, lem-radial-majorized-kernels-recover-lebesgue-point-values, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Problem 14.4(ii), real positive parameter. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:09:13.494Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-fourier-transform-of-a-compactly-supported-triangle-function

Computed all overlap-length cases, including empty and singleton intersections, then applied the same-page literature-derived indicator example and convolution theorem. Independently calculated mass one at zero.

Dependencies examined: thm-fourier-transform-converts-convolution-to-products, ex-fourier-transform-of-an-interval-indicator, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:10:01.088Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cex-fourier-transform-of-an-l-one-function-need-not-be-integrable

Gave the interval witness and integrated an explicit lower bound on middle subintervals of every period. Dyadic harmonic blocks each contribute at least 1/(6pi), establishing divergence rather than merely asserting sinc is not integrable.

Dependencies examined: ex-fourier-transform-of-an-interval-indicator, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:10:02.277Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative

Read the null-integral and hyperplane-null proofs. The singleton indicator gives an integrable zero class and identically zero transform; the inverse integral is zero at the point where the representative is one. Computed its mean oscillation to explain the Lebesgue-point qualification.

Dependencies examined: lem-l-one-fourier-transform-is-well-defined, thm-l-one-fourier-inversion, cor-integral-over-a-null-set-vanishes, thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:11:17.685Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cex-riemann-lebesgue-has-no-universal-rate

Authored the deterministic least-integer frequencies and absolutely dominated modulated Gaussian series. Termwise Fourier transformation has a named majorant and produces nonnegative Gaussian summands, giving ratios greater than 2^k. Preserved the AI-generated counterexample leaf provenance; no source is credited with this local construction.

Dependencies examined: lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-fourier-translation-modulation-dilation-and-reflection-laws, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-dominated-convergence, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1 Gaussian and modulation formulas support the constituents; the no-rate construction is local, not attributed to this text.. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:11:18.930Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: rem-wiener-tauberian-theorem

Read the complete Dall Ara Section 3, pp.4-7, including the two lemmas, theorem proof and annihilator corollary. Authored Recorded orientation, distinguishing the external duality/separation route and everywhere nonvanishing from an L2 criterion. No proof completion or incoming dependency is claimed.

Dependencies examined: . Sources: Gian Maria Dall’Ara, Wiener’s Tauberian Theorem and the Pompeiu Problem on L∞(Rd) (2026), §3, Theorem 3.1, Lemmas 3.2–3.3 and Corollary 3.4, pp.4–7; recorded orientation only. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T16:12:04.577Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: def-schwartz-space-and-its-seminorms

Defined actual complex smooth functions with zero-index conventions and verified the vector-space, seminorm and separating-family laws directly; read Dyatlov Definition 11.3 in full.

Dependencies examined: def-complex-lp-and-euclidean-test-function-conventions, def-ck-and-multi-index-notation-in-several-variables, def-c-c-and-c-c-infinity-on-rn. Sources: Semyon Dyatlov, MIT 18.155 (2022), Definition 11.3, p.120. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T16:15:47.787Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: def-schwartz-topology-and-convergence

Verified both directions of sequential convergence and the finite-neighbourhood proofs of Hausdorffness, convexity, balance, addition and joint scalar continuity.

Dependencies examined: def-schwartz-space-and-its-seminorms. Sources: Semyon Dyatlov, MIT 18.155 (2022), Definition 11.3 and (11.5), p.120. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T16:15:48.523Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-schwartz-space-is-frechet

Expanded Teschl Lemma 14.29 into both metric-neighbourhood inclusions, componentwise uniform-limit construction, coordinate derivative identification and weighted convergence. Added the existing higher-mixed-partial symmetry supplier after reading its complete proof and its Clairaut/Peano inputs; no choice is introduced.

Dependencies examined: def-schwartz-topology-and-convergence, thm-uniform-derivative-limit-on-a-closed-interval, thm-uniform-cauchy-criterion-real-functions, thm-uniform-limit-continuous-real-functions, thm-symmetry-of-higher-mixed-partials. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Lemma 14.29 and equations (14.95)–(14.96), p.404. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:16:46.505Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-schwartz-functions-and-all-derivatives-are-integrable

Proved the reciprocal product-weight integral by explicit dyadic intervals and Tonelli, then derived a finite-seminorm norm bound for all p, with zero and both endpoint cases.

Dependencies examined: def-schwartz-space-and-its-seminorms, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Equation (11.7), p.120; Teschl Problem 14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:17:24.908Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-schwartz-cutoffs-from-the-standard-smooth-step

Constructed the flat step explicitly, including its derivative recurrence and difference quotients at zero, checked positivity of the quotient denominator in all regions, and proved compact support and every dilation derivative.

Dependencies examined: thm-exponential-beats-every-polynomial, thm-chain-rule-for-total-derivatives, def-ck-and-multi-index-notation-in-several-variables, thm-heine-borel-rn. Sources: Semyon Dyatlov, MIT 18.155 (2022), Remark 11.5 and Exercise 11.1, pp.120,135 motivate the cutoff; explicit flat-function construction supplied locally, not asserted to occur in Exercise 11.1.. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:18:00.692Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space

Derived multi-index Leibniz from the existing one-dimensional rule and mixed-partial symmetry, then supplied the explicit extra-weight O(1/R) tail estimate for every cutoff-error term; integer radii give choice-free density.

Dependencies examined: def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-ck-and-multi-index-notation-in-several-variables, thm-general-leibniz-rule, thm-symmetry-of-higher-mixed-partials. Sources: Semyon Dyatlov, MIT 18.155 (2022), Remark 11.5 and Exercise 11.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:19:33.655Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space

Wrote explicit seminorm estimates for each individual operation and the three-term joint-continuity estimate for multiplication. Declared existing Leibniz and mixed-partial suppliers; all arguments remain choice-free.

Dependencies examined: def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-ck-and-multi-index-notation-in-several-variables, thm-complex-exponential-addition-and-real-extension, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-general-leibniz-rule, thm-symmetry-of-higher-mixed-partials. Sources: Semyon Dyatlov, MIT 18.155 (2022), Equation (11.6), Proposition 11.7; Teschl text preceding Lemma 14.4. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:20:40.013Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-transform-maps-schwartz-space-continuously-to-itself

Read the complete Dyatlov Proposition 11.7 and Theorem 11.6 proofs. Supplied the 2pi difference-quotient majorant, linewise boundary and integrability checks, absolute Fubini, and finite-seminorm continuity bound without dividing by frequency coordinates.

Dependencies examined: thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Theorem 11.6 and Proposition 11.7, pp.121–122. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:21:59.732Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space

Derived F squared equals reflection directly from pointwise inversion, proved commutation by associativity, and verified both inverse compositions and continuity.

Dependencies examined: thm-fourier-inversion-on-schwartz-space, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Remark 11.16, p.124. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:23:12.197Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-fourier-inversion-on-schwartz-space

Checked both integrability hypotheses and proved directly that every value of the smooth representative is a Lebesgue value; applied the earlier regularized inversion theorem without an undamped double-integral exchange. Corrected a contract-use formatting mismatch; the automorphism checkpoint was inadvertently recorded first while this mechanical mismatch remained, with no mathematical change.

Dependencies examined: thm-fourier-transform-maps-schwartz-space-continuously-to-itself, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-l-one-fourier-inversion, def-countable-choice. Sources: Semyon Dyatlov, MIT 18.155 (2022), Theorem 11.15, pp.124–125. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:23:22.038Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cor-schwartz-convolution-and-product-transform-laws

Proved everywhere absolute convolution and continuity before identifying its class with the inverse-transform Schwartz function. Checked the product inversion representative and all integrability hypotheses explicitly.

Dependencies examined: cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, thm-fourier-transform-converts-convolution-to-products, thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis, cor-uniqueness-of-the-l-one-fourier-transform, def-countable-choice, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-dominated-convergence. Sources: Semyon Dyatlov, MIT 18.155 (2022), Proposition 11.18 and Exercise 11.8; Teschl Corollary 14.13. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:24:15.304Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-parseval-pairing-on-schwartz-space

Inserted the conjugated inverse formula with its negative sign, checked the exact double-integral majorant ||f||1 ||Fg||1, and deduced the norm equality without assuming Plancherel.

Dependencies examined: thm-fourier-inversion-on-schwartz-space, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Lemma 14.9, p.383, polarized pairing version. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:24:46.409Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-schwartz-space-is-dense-in-l-two

Read the real and complex smooth-density proofs and the complete complex consumer interface. Verified compactly supported smooth functions and every weighted derivative satisfy the Schwartz seminorm bounds, then applied density only at p=2.

Dependencies examined: def-schwartz-space-and-its-seminorms, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn, def-countable-choice, lem-complex-lp-completeness-density-and-inner-product. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Text before Lemma 14.4 and Theorem 14.10. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:25:21.203Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-plancherel

Read the complete bounded-extension theorem and complex completeness/pairing suppliers. Verified the Schwartz class embedding, norm preservation and approximation independence, constructed a preimage of every target, and passed the pairing by explicit Cauchy–Schwarz error bounds. Countable selections are identified.

Dependencies examined: thm-parseval-pairing-on-schwartz-space, lem-schwartz-space-is-dense-in-l-two, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-extension-of-a-bounded-map-from-a-dense-subspace, def-l-p-space-as-a-quotient-by-null-functions, lem-complex-lp-completeness-density-and-inner-product, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Theorem 14.10, p.383. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:26:07.946Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-real-ltwo-multipliers-and-unitary-transport

Read Teschl Quantum Mechanics pp.66-69 in full, including the reverse adjoint-domain argument. Authored explicit truncations, adjoint uniqueness and both inclusions, strong continuity, sufficiency by dominated convergence, necessity by Fatou, and both transported-domain directions with the first-variable-linear convention.

Dependencies examined: lem-complex-lp-completeness-density-and-inner-product, thm-dominated-convergence, thm-fatou-lemma, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-the-lebesgue-integral-respects-almost-everywhere-equality, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, thm-sine-and-cosine-derivatives, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, def-countable-choice. Sources: Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd edition, §2.2 multiplication examples (2.15), (2.20), (2.22)–(2.27), pp.66–69; §8.1 (8.1)–(8.4), pp.207–208. Generator/domain and transport proved directly here.. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:28:12.606Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-simultaneous-smooth-approximation-in-l-one-and-l-two

Read the current complex mollification, smoothness, support and rescaling proofs. Added the explicit cutoff as the mass-one kernel supplier, checked its positive finite integral, and selected the least integer mollifier scale satisfying both norm errors for each truncation.

Dependencies examined: thm-dominated-convergence, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, prop-mollifier-families-are-l-one-approximate-identities, def-countable-choice, lem-complex-translation-and-approximate-identity-interfaces, lem-schwartz-cutoffs-from-the-standard-smooth-step. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Lemma 14.11 proof, p.383. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:29:03.069Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-l-one-l-two-agreement-of-fourier-transform

Used the same simultaneous approximants for uniform integral-transform convergence and L2 convergence. Explicitly reconciled a.e.-subsequence representatives through their countable null disagreement union before identifying the limits.

Dependencies examined: thm-plancherel, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, lem-simultaneous-smooth-approximation-in-l-one-and-l-two, lem-complex-lp-completeness-density-and-inner-product, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Lemma 14.11, p.383. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:29:45.098Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-l-two-fourier-inversion

Declared the direct C1 integral substitution supplier and applied it to |f| squared to prove reflection isometry on classes. Passed the Schwartz square identity by norm limits, then checked finite-ball Cauchy–Schwarz and tail convergence for both truncated-sign integrals.

Dependencies examined: thm-plancherel, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-l-one-l-two-agreement-of-fourier-transform, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, lem-complex-lp-completeness-density-and-inner-product, def-countable-choice, thm-dominated-convergence, cor-c-one-change-of-variables-for-l-one-functions. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Equation (14.17), p.384. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:31:27.944Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients

Read the full Elkies Poisson proof and supplied its Fourier-uniqueness step independently: constructed the compact torus, checked endpoint identifications and descent continuity, verified all unital Stone–Weierstrass hypotheses, and used a positive-volume box at boundary points.

Dependencies examined: thm-complex-stone-weierstrass-self-adjoint, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-heine-borel-rn, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-zero-sets-and-fundamental-period, thm-borel-sets-are-lebesgue-measurable, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-countable-choice, thm-continuous-image-of-a-compact-space-is-compact. Sources: Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices, Proof of Theorem 2, pp.10–11; uniqueness step expanded locally. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:33:00.091Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-poisson-summation-for-schwartz-functions

Expanded Elkies Theorem 2 into explicit lattice product-weight tails for every derivative, absolute cube tiling and substitution, calculated character orthogonality, and used the newly authored periodic uniqueness lemma instead of assuming a Fourier-series expansion.

Dependencies examined: thm-fourier-transform-maps-schwartz-space-continuously-to-itself, lem-schwartz-functions-and-all-derivatives-are-integrable, lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-uniform-derivative-limit-on-a-closed-interval, def-countable-choice, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, cor-c-one-change-of-variables-for-l-one-functions. Sources: Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices, Theorem 2 and proof, pp.10–11, specialized to Zn with the negative-sign convention. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:34:10.095Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-gaussians-and-polynomials-times-gaussians-are-schwartz

Computed the coordinate derivative recurrence and bounded each weighted polynomial Gaussian using the positive parameter and exponential domination. Kept the argument choice-free and independent of the integral Gaussian formula.

Dependencies examined: def-schwartz-space-and-its-seminorms, thm-exponential-beats-every-polynomial, thm-derivative-of-exponential, def-ck-and-multi-index-notation-in-several-variables. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:34:46.684Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cex-a-smooth-integrable-function-need-not-be-schwartz

Computed all derivative forms recursively, bounded both improper tails by the explicit x^-2 antiderivative, and exhibited the divergent p4,0 seminorm. Declared countable choice only for the integral interface.

Dependencies examined: def-schwartz-space-and-its-seminorms, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:35:18.973Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: cex-a-schwartz-function-need-not-have-compact-support

Used the preceding literature-derived Gaussian example, computed its support from positivity, and exhibited the explicit increasing-ball cover with no finite subcover; no choice or integral theorem is used.

Dependencies examined: ex-gaussians-and-polynomials-times-gaussians-are-schwartz, def-c-c-and-c-c-infinity-on-rn. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:35:54.531Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-hermite-functions-as-fourier-eigenfunctions

Read Stroock Theorem 10.1 with its full proof and the Section 11 definition and Fourier-eigenfunction proof, pp.22-24. Recomputed the raising/lowering constants for the negative 2pi convention, proved normalization and orthogonality, supplied Gaussian-moment uniqueness with an explicit integrable exponential majorant, and derived norm expansion from finite sums and L2 completeness.

Dependencies examined: def-schwartz-space-and-its-seminorms, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, cor-uniqueness-of-the-l-one-fourier-transform, thm-dominated-convergence, thm-plancherel, lem-complex-lp-completeness-density-and-inner-product, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, def-complex-exponential, def-countable-choice, ex-gaussians-and-polynomials-times-gaussians-are-schwartz. Sources: Daniel W. Stroock, Topics in Fourier Analysis (2024), Theorem 10.1 and proof, pp.22–23; §11 opening and Theorem 11.1, pp.23–24; rescaled/sign-converted. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:38:10.671Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-plancherel-for-an-interval-indicator

Computed the indicator transform inline, including the zero frequency and both endpoints, then used overlap agreement before applying Plancherel to derive the sinc-square integral and its integrability.

Dependencies examined: def-fourier-transform-on-l-one-of-rn, thm-l-one-l-two-agreement-of-fourier-transform, thm-plancherel, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:38:42.732Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-poisson-summation-for-the-gaussian-and-theta-functional-equation

Checked Schwartz membership using the preceding same-page Gaussian supplier, bounded both theta tails geometrically, and substituted the exact rescaled Gaussian transform into Poisson summation, including t=1 and reciprocal-parameter positivity.

Dependencies examined: thm-poisson-summation-for-schwartz-functions, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-countable-choice, ex-gaussians-and-polynomials-times-gaussians-are-schwartz. Sources: Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices, Equations (17)–(18), and proof following Theorem 2, p.11. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:39:14.884Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: thm-heisenberg-uncertainty-inequality

Read the complete Teschl uncertainty proof, pp.385-386, and expanded the radial sum and both equality directions. Checked the centre-removal phase, linewise boundary products, tuple Cauchy–Schwarz common scalar, its strictly negative real phase, and the coordinate FTC solution of the resulting differential equations.

Dependencies examined: thm-parseval-pairing-on-schwartz-space, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-fourier-translation-modulation-dilation-and-reflection-laws, lem-complex-lp-completeness-density-and-inner-product, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, def-countable-choice, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, ex-gaussians-and-polynomials-times-gaussians-are-schwartz. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), Theorem 14.15, pp.385–386; radial sum and equality conditions expanded. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:41:37.953Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: rem-hausdorff-young-and-interpolation

Read Teschl pp.414-415 including the endpoint-capable interpolation statement and proof. Authored only the promised endpoint orientation, proving the exact L1 operator norm through Gaussian continuity and essential supremum, and retained the authorized no-intermediate-p boundary.

Dependencies examined: thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-plancherel, thm-l-one-l-two-agreement-of-fourier-transform, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-countable-choice. Sources: Gerald Teschl, Topics in Real and Functional Analysis (2017), §14.1 equation (14.2), Theorem 14.10; §15.1 Theorem 15.2 and Corollary 15.3, pp.414–415, interpolation orientation only. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract. Decision: accept, confidence 1 (2026-09-10T16:42:07.487Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.

## Checkpoint: ex-momentum-operator-under-the-fourier-transform

Read Teschl Quantum Mechanics pp.207-208 and the complete local multiplier proof. Applied it to the explicit real multiplier 2pi xi, computed the derivative and translation signs on Schwartz space, and extended the translation identity through two isometries and density with the exact self-adjoint domain.

Dependencies examined: lem-real-ltwo-multipliers-and-unitary-transport, thm-plancherel, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-fourier-translation-modulation-dilation-and-reflection-laws, lem-schwartz-space-is-dense-in-l-two, thm-l-one-l-two-agreement-of-fourier-transform, lem-complex-translation-and-approximate-identity-interfaces, def-countable-choice. Sources: Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd edition, §2.2 multiplication examples (2.15), (2.20), (2.22)–(2.27), pp.66–69; §8.1 (8.1)–(8.4), pp.207–208. Generator/domain and transport proved directly here.. Authored argument and exact citation/step/boundary contract checked with explicit-path rendering, strict proof-contract, and precheck. Decision: accept, confidence 1 (2026-09-10T16:43:03.817Z). No mathematical gap left in this item. Next: the next unauthored manifest item in prerequisite order.


## Final contract and metadata checkpoint

All 57 item bodies and four A/B pages are authored. The 219 citation contracts now quote each cited statement or definition in full, so an isolated phrase such as “t>0” is not presented as the evidence for a Gaussian evaluation. Their actual fact labels, step uses, derivations and item-specific boundary evidence remain those of the completed arguments. Repeated uses were deduplicated. This is an excerpt-formatting repair, not a generated proof or a fresh claim to have audited every theorem in the transitive closure.

Final source frontmatter uses canonical block-indented references and flow-form dependency lists, compatible with both the renderer and the policy/contract readers. Earlier full-batch checks exposed these serialization mismatches; they were repaired and the checks rerun. Mathematical metadata, proof text and independent verification fields were preserved. The final decision checker still recognizes every completed item, so unchanged item decisions were not reauthored or needlessly replaced.

The final strict-contract warning is `shotgun-bracket` at `thm-schwartz-space-is-frechet`, step 2.1. It is a heuristic warning: that step explicitly uses F1 for uniform limits, F2 for continuity, F4 for restricted derivative identities and F3 for derivative-limit identification. The other two steps are the explicit metric calculation and weighted Cauchy estimate. No missing input was inferred away to suppress the warning.

## Local prerequisite repairs and scope

No new item IDs or pairs were added. The already assigned support lemmas are fully proved on the existing A pages: complex integration by parts; Gaussian evaluation and summability; radial recovery; finite-measure smoothing; Schwartz integrability, cutoff and density; simultaneous approximation; real multipliers with unitary transport; and periodic coefficient uniqueness. Their exact contracts and coverage entries accompany the manifest. Same-group cross-page edges remain within this one batch, and the batch cross-batch input is `[]`; the unified dependency-ledger refresh was run after authoring.

Actual dependency declarations expanded during authoring:

| Consumer | Added or clarified supplier/use |
| --- | --- |
| `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity`; `lem-radial-majorized-kernels-recover-lebesgue-point-values` | `cor-c-one-change-of-variables-for-l-one-functions`, for actual absolute tail/scaling calculations |
| `lem-gaussian-smoothing-of-finite-complex-measures` | `lem-complex-translation-and-approximate-identity-interfaces` and `thm-fourier-translation-modulation-dilation-and-reflection-laws`, for the tested C0 limit and covariance |
| `thm-schwartz-space-is-frechet` | `thm-symmetry-of-higher-mixed-partials`, for derivatives along coordinate segments |
| `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space`; `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` | `thm-general-leibniz-rule` and `thm-symmetry-of-higher-mixed-partials`, for the multi-index expansion |
| `cor-schwartz-convolution-and-product-transform-laws` | `lem-schwartz-functions-and-all-derivatives-are-integrable` and `thm-dominated-convergence`, for integrable domination and everywhere continuity |
| `lem-simultaneous-smooth-approximation-in-l-one-and-l-two` | `lem-schwartz-cutoffs-from-the-standard-smooth-step`, for an explicit positive-mass normalized mollifier |
| `thm-l-two-fourier-inversion` | `thm-dominated-convergence` and `cor-c-one-change-of-variables-for-l-one-functions`, for truncation and the reflection isometry applied to the squared modulus |
| `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` | `thm-continuous-image-of-a-compact-space-is-compact`, for descent from the cube to the torus |
| `thm-poisson-summation-for-schwartz-functions` | `lem-complex-integration-by-parts-on-intervals-and-decaying-lines` and `cor-c-one-change-of-variables-for-l-one-functions`, for character integrals and cube substitution |
| `ex-hermite-functions-as-fourier-eigenfunctions`; `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` | Earlier same-B supplier `ex-gaussians-and-polynomials-times-gaussians-are-schwartz` |
| `thm-heisenberg-uncertainty-inequality` | Schwartz operations and integrability, complex Fubini, and the earlier same-B Gaussian example, for centering, boundary products and equality witnesses |

Both scope decisions were refreshed as sufficient after these repairs, preserving A20/B8 and A20/B9. All 38 current decline decisions have concrete evidence from the completed arguments and are `stands`, not invented owner rulings. Interpolation remains endpoint orientation; Wiener remains an explicitly Recorded, unconsumed result. The no-universal-rate construction remains an honestly labelled generated leaf counterexample.

## Published findings for the owner and serial reconciler

These are concerns about the current published proofs/interfaces, not claims that their mathematical conclusions are false. Confidence below concerns the stated finding. No published item or `published-consumer-supplier-ledger.md` was edited. The two convolution findings above have the corrected exact home page. The additional independently inspected findings are:

| Item and exact page ID | Evidence and confidence | Required suppliers and proposed repair |
| --- | --- | --- |
| `lem-euclidean-balls-have-positive-finite-lebesgue-measure` — `the-maximal-function-and-lebesgue-differentiation` | Confirmed proof gap, high confidence: steps 2.1–3.1 infer measurability from a sandwich between two different-volume cubes. That sandwich only proves volume bounds once measurability is available. | Supply open-ball → Borel → Lebesgue measurability using `thm-borel-sets-are-lebesgue-measurable`, then use the existing box bounds. The new radial lemma supplies this argument locally. |
| `thm-total-variation-is-a-measure` — `signed-and-complex-measures-hahn-and-jordan` | Confirmed omitted justification/choice accounting, high confidence: step 1.2 chooses a partition for every m and passes simultaneously to all suprema without an approximation or finite-family argument. This does not establish that countable choice is necessary for the theorem. | Either state countable choice and use summable near-maximizing errors, or prove the lower bound for each finite family, extend by the remaining set and then take the finite-sum supremum. No Fourier supplier is required. Our finite-measure transform declares countable choice, and smoothing/uniqueness declare AC. |
| `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value` — `the-radon-nikodym-theorem-and-lebesgue-decomposition` | Confirmed assumption debt, high confidence: steps 1.1–1.2 use L3 RN existence, whose current real and complex suppliers explicitly require AC, while this statement omits AC. The statement already supplies a derivative, so this use can be avoided. | Use `thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data` / `thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation` directly for a supplied integrable density; otherwise declare and propagate `def-axiom-of-choice`. Our smoothing does assume AC. |
| `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences` — `the-lp-spaces-holder-minkowski-and-riesz-fischer` | Confirmed interface debt, high confidence: step 1.1 invokes `thm-riesz-fischer-completeness-of-l-p`; that supplier's Statement and Given explicitly require countable choice for representatives. The corollary omits that hypothesis. | State/declare `def-countable-choice`; complex consumers need the published `lem-complex-lp-completeness-density-and-inner-product`, which is the actual interface used by the new overlap proof. |
| `thm-riesz-thorin-interpolation` — `the-maximal-function-and-lebesgue-differentiation` | Confirmed invalid displayed estimate, high confidence after reading the complete proof: step 2.1 has norm powers, but step 3.1 replaces them by the first power without normalizing f. On a one-point probability space, T=identity, f=4, g=1, p0=1, p1=2, q0=q1=2, theta=1/2 gives ptheta=4/3 and boundary value 4^(4/3)>4. Step 4.1 also asserts a unit boundary bound without dividing by the norm of f. Its finite target exponents cannot supply a Linfinity endpoint. | Normalize nonzero finite simple tests, treat zero separately, retain endpoint powers/rescaling, and declare a proved three-lines supplier. Candidate existing suppliers are `lem-endpoint-interpolation-simple-analytic-families`, `lem-riesz-thorin-bound-on-the-finite-simple-core`, and `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime` on `complex-riesz-thorin-endpoint-interpolation`; their complete proofs need the owner's repair audit. No new Fourier item consumes the defective theorem. |
| `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` — `radon-measures-and-the-riesz-markov-kakutani-theorem` | Potential incomplete lower-norm justification, high confidence that the argument is abbreviated, not a confirmed false theorem: step 3.1 says “regular approximation by compactly supported phase functions” without proving or citing the needed bounded phase approximation. The complete short proof was read; an exhaustive closure audit was not performed. | Audit/add approximation of measurable unit phases by Cc functions of sup norm at most one, using finite simple phases, compact cores, LCH cutoffs and `thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals`. The new finite-measure uniqueness proof instead uses positive-measure `thm-rmk-uniqueness-among-radon-measures` directly and does not consume this norm clause. |

These eight findings include the two convolution entries earlier in this report. They are owner reconciliation obligations, not unresolved prerequisites of the authored Fourier arguments.

## Checks actually run and pre-splice plan state

- Explicit-path precheck through `node tools/tsx-run.mjs tools/precheck.mts`: all 50 proof-bearing owned item paths, 0 failing. Definitions and remarks are not proof-precheck targets; their contracts and rendering were checked.
- Explicit-path rendering: all 57 owned item paths plus all four page paths, 61 files passed.
- `node tools/content-policy.mjs research/phase-2-fourier-support-2-batch-1.pages.json`: 57 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/phase-2-fourier-support-2-batch-1.proof-contracts.json --strict`: 57/57 checked, 0 errors, the one explained Fréchet citation-group warning.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0. Pre-splice mismatch: the canonical plan has all four preserved page shells and prerequisite lists but EMPTY item lists. Its successful check alone therefore does not check this new item inventory.
- A temporary `/tmp/fourier-merged-plan.json` replacing only the four canonical shells with this manifest also passed `validate-plan`: no unresolved IDs, item cycles, forward references or forbidden B-page dependencies. The canonical plan was not spliced by this author. Step 4 must splice the 57-item inventory from the assigned manifest and rerun validation; no page-order or page-prerequisite amendment is proposed.
- `scope-decisions check --run phase-2-fourier-support-2 --group a`: 38 current declines, 0 errors. Both sufficient scope receipts refreshed after local repairs. `step3-decisions check --run phase-2-fourier-support-2 --phase final`: 57 accepted, closed true, no open work.
- `frontier-dependency-ledger refresh --run phase-2-fourier-support-2`: completed; the owned batch input remains empty because all new edges are within batch 1.

These checks establish the reported structural properties, not mathematical correctness by themselves. The mathematical evidence is the actual proofs, exact source passages and dependency-specific item checkpoints above. Independent review records were preserved; no owner or judge/audit stamp was added. Unrelated concurrent workspace changes were not edited.

## Completed IDs and next action

### fourier-transform-convolution-and-approximate-identities

- `def-fourier-transform-on-l-one-of-rn`
- `lem-l-one-fourier-transform-is-well-defined`
- `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`
- `thm-fourier-translation-modulation-dilation-and-reflection-laws`
- `thm-fourier-transform-converts-convolution-to-products`
- `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`
- `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`
- `thm-riemann-lebesgue`
- `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity`
- `lem-radial-majorized-kernels-recover-lebesgue-point-values`
- `thm-fourier-inversion-at-lebesgue-points-under-summability`
- `thm-l-one-fourier-inversion`
- `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis`
- `cor-uniqueness-of-the-l-one-fourier-transform`
- `cor-convolution-approximate-identities-from-fourier-multipliers`
- `thm-fourier-transform-of-a-finite-complex-measure`
- `lem-gaussian-smoothing-of-finite-complex-measures`
- `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`
- `rem-probability-characteristic-function-normalization`
- `rem-riesz-thorin-supplied-by-measure-theory`

### fourier-transform-convolution-and-approximate-identities-examples

- `ex-fourier-transform-of-an-interval-indicator`
- `ex-fourier-transform-of-a-gaussian`
- `ex-fourier-transform-of-the-poisson-kernel`
- `ex-fourier-transform-of-a-compactly-supported-triangle-function`
- `cex-fourier-transform-of-an-l-one-function-need-not-be-integrable`
- `cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative`
- `cex-riemann-lebesgue-has-no-universal-rate`
- `rem-wiener-tauberian-theorem`

### schwartz-space-and-the-plancherel-theorem

- `def-schwartz-space-and-its-seminorms`
- `def-schwartz-topology-and-convergence`
- `thm-schwartz-space-is-frechet`
- `lem-schwartz-functions-and-all-derivatives-are-integrable`
- `lem-schwartz-cutoffs-from-the-standard-smooth-step`
- `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space`
- `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`
- `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`
- `thm-fourier-inversion-on-schwartz-space`
- `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`
- `cor-schwartz-convolution-and-product-transform-laws`
- `thm-parseval-pairing-on-schwartz-space`
- `lem-schwartz-space-is-dense-in-l-two`
- `thm-plancherel`
- `lem-real-ltwo-multipliers-and-unitary-transport`
- `lem-simultaneous-smooth-approximation-in-l-one-and-l-two`
- `thm-l-one-l-two-agreement-of-fourier-transform`
- `thm-l-two-fourier-inversion`
- `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`
- `thm-poisson-summation-for-schwartz-functions`

### schwartz-space-and-the-plancherel-theorem-examples

- `ex-gaussians-and-polynomials-times-gaussians-are-schwartz`
- `cex-a-smooth-integrable-function-need-not-be-schwartz`
- `cex-a-schwartz-function-need-not-have-compact-support`
- `ex-hermite-functions-as-fourier-eigenfunctions`
- `ex-plancherel-for-an-interval-indicator`
- `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation`
- `thm-heisenberg-uncertainty-inequality`
- `rem-hausdorff-young-and-interpolation`
- `ex-momentum-operator-under-the-fourier-transform`

Next action belongs to independent review and the serial reconciler: review the completed items, splice the manifest into the four canonical plan shells, and register/route the eight published findings. There is no open author-held mathematical escalation, missing local supplier, dropped promised claim, or request for a new pair.
