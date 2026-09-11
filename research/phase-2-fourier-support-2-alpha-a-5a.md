# Step 5A — group a authored review

Scope: batch 1, 57 items and four existing pages. Local authored-content review only; engine owns scheduling, stamps, and closure. One source-section locator repaired; no mathematical proof edits or new suppliers. One new published RMK hypothesis defect recorded below. No shared-plan or Phase-2 amendments required. Cross-group/impact gates remain with serial lead.

Convention: exp(-2πi x·ξ), complex Lp quotient, pairing linear in first variable. Prerequisites are checked at the actual consumed clause.

## 1. `def-fourier-transform-on-l-one-of-rn` — accepted

The definition fixes n>=1, Lebesgue measure and the negative 2π phase, evaluates one representative, and assigns absolute convergence/class invariance to its justified_by lemma. The published complex-Lp conventions supply componentwise integration without using their separate countable-choice illustration. Zero frequency is the integral; no simultaneous selection is asserted. Read Dyatlov Definition 11.1 and (11.2), p.119: replace frequency by 2πξ.

Dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-l-one-of-a-measure`, `def-complex-exponential`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Definition 11.1, p.119; substitute ξ→2πξ.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 1 (zero-based), or pages after last item.

## 2. `lem-l-one-fourier-transform-is-well-defined` — accepted

Steps 1.1–2.1 use a measurable modulus-one factor, so the product is integrable for every fixed frequency and the integral triangle inequality gives the bound. The published a.e.-invariance statement applies to both integrable products. The same original null set suffices at all frequencies, with no uncountable union. Zero class and arbitrary dimension n>=1 are covered. Dyatlov p.119 (11.1)–(11.2) agrees with the normalization conversion.

Dependencies: `def-fourier-transform-on-l-one-of-rn`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-integral-triangle-inequality`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Definition 11.1 and (11.2).

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 2 (zero-based), or pages after last item.

## 3. `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` — accepted

Step 1.1 applies published complex integral linearity on integrable products. Step 2.1 factors the phases correctly and bounds the difference independently of ξ. Published complex DCT applies to the explicit integer-ball tails dominated by |f|; on the remaining ball |x·h|<=R|h| supplies the single delta. The epsilon split works also for f=0 and avoids any sequential choice inference. Dyatlov Proposition 11.2 p.119 proves continuity by the same majorant; the authored argument explicitly strengthens this to uniform continuity.

Dependencies: `lem-l-one-fourier-transform-is-well-defined`, `thm-dominated-convergence`, `thm-complex-exponential-addition-and-real-extension`, `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Proposition 11.2 and (11.2), p.119; uniform estimate made explicit.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 3 (zero-based), or pages after last item.

## 4. `thm-fourier-translation-modulation-dilation-and-reflection-laws` — accepted

Read all three proof steps and the published substitution proof, especially steps 4.1–7.1: affine diffeomorphisms preserve completed null equivalence and satisfy the complex integral formula under stated countable choice. Determinant is absolute and the transpose inverse has the correct dot-product identity. Translation/modulation signs and conjugation are correct, including A=-I, identity parameters and zero functions. Dyatlov Propositions 11.12–11.13, p.123, match these clauses.

Dependencies: `lem-l-one-fourier-transform-is-well-defined`, `cor-c-one-change-of-variables-for-l-one-functions`, `thm-complex-exponential-addition-and-real-extension`, `def-translation-of-a-function-on-rn`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Propositions 11.12–11.13, p.123; Teschl Lemma 14.2 for translations/modulations.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 4 (zero-based), or pages after last item.

## 5. `thm-fourier-transform-converts-convolution-to-products` — accepted

Both steps establish the prerequisites before exchanging integrals: Borel representatives ensure joint product measurability, explicit boxes ensure sigma-finiteness, and Tonelli gives precisely ||f||1||g||1. Complex Fubini then applies to the phase-weighted integrand at each frequency. The translation phase factors correctly, and changing the convolution on its exceptional null set does not affect its transform. Consumed published interfaces and their quoted hypotheses agree; countable choice is stated. Read Dyatlov Proposition 11.10 proof p.123, which makes this same Fubini substitution.

Dependencies: `lem-l-one-fourier-transform-is-well-defined`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `def-countable-choice`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `lem-borel-representatives-make-the-convolution-integrand-borel-measurable`, `lem-convolution-is-independent-of-the-chosen-borel-representatives`, `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound`, `lem-complex-translation-and-approximate-identity-interfaces`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Proposition 11.10, pp.122–123.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 5 (zero-based), or pages after last item.

## 6. `lem-complex-integration-by-parts-on-intervals-and-decaying-lines` — accepted

The four real integrations by parts recombine with the displayed correct complex signs. C1 on a compact interval supplies the derivative integrability required by the published real FTC and integration-by-parts statements. The countable-choice Riemann/Lebesgue bridge applies to continuous bounded integrands. For the line, DCT uses exactly the two integrable products and both vanishing boundary limits; neither factor separately needs to be integrable. a<b is explicit, and v=1 recovers the finite-interval FTC. No complex mean-value theorem is invoked.

Dependencies: `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-integration-by-parts`, `thm-ftc-second-part`, `thm-dominated-convergence`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Proposition 11.7, pp.121–122, integration-by-parts step; real/complex Lebesgue interface expanded locally.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 6 (zero-based), or pages after last item.

## 7. `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` — accepted

Step 1.1 bounds polynomial Gaussians by an integrable wider Gaussian, with the published improper/Lebesgue bridge and positive scaling; finite tensor products are integrable by the declared Tonelli/Fubini interfaces. Step 2.1 satisfies every complex differentiation-under-integral hypothesis with majorant 2π|x|exp(-πx²); integration by parts gives integral(xuv)=-iξG, hence G'=-2πξG. The integrating factor is C1 by that identity, so finite-interval FTC fixes G(0)=1. Tensoring and t>0 scaling yield exactly t^(-n/2)exp(-π|ξ|²/t). Read Dyatlov Proposition 11.14 first proof, pp.123–124; the authored proof closes its calculus steps locally and avoids ODE or Schwartz prerequisites.

Dependencies: `lem-l-one-fourier-transform-is-well-defined`, `cor-c-one-change-of-variables-for-l-one-functions`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-gaussian-integral`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `thm-differentiation-under-the-integral-sign`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-exponential-beats-every-polynomial`, `thm-sine-and-cosine-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Proposition 11.14, pp.123–124, first proof.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 7 (zero-based), or pages after last item.

## 8. `thm-riemann-lebesgue` — accepted

The explicit h=ξ/(2|ξ|²) has h·ξ=1/2 and norm 1/(2|ξ|), giving the exact factor -2. The published complex translation-continuity interface applies at p=1 under stated countable choice and supplies one delta for all h near zero. This proves uniform decay outside a radius, while the already reviewed BUC theorem covers ξ=0. No converse C0 characterization or universal rate is claimed.

Dependencies: `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `def-countable-choice`, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`, `def-c-zero-on-rn`, `lem-complex-translation-and-approximate-identity-interfaces`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Corollary 14.5, p.381; proof reordered via MT15 translation continuity.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 8 (zero-based), or pages after last item.

## 9. `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity` — accepted

Gaussian formula with s=1/t gives mass and transform with no missing prefactor; its application at frequency -z proves the inverse kernel integral independently of inversion. Positive dilation takes the absolute tail to radius δ/sqrt(t). Explicit integer tails and monotonicity prove the full t-down-to-zero limit. Thus all three conditions in the published approximate-identity definition hold, with uniform L1 bound exactly one and t=0 excluded. Teschl Theorem 14.7 proof p.382 supplies the corresponding Gaussian regularization argument in its different normalization.

Dependencies: `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `def-l-one-approximate-identity-on-rn`, `thm-dominated-convergence`, `def-countable-choice`, `cor-c-one-change-of-variables-for-l-one-functions`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Theorem 14.7 proof, p.382.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 9 (zero-based), or pages after last item.

## 10. `lem-radial-majorized-kernels-recover-lebesgue-point-values` — accepted

Read all five steps. Open-ball measurability precedes volume scaling. Half-open annuli have volume v_n(1-2^-n)r^n and give both r^nΦ(r)->0 and the finite dyadic coefficient sum. In step 2.1 each selected shell has upper radius strictly below δ, so A(r)<=ηr^n applies, and the shell collection covers the δ/2-ball; overlap with the outside bound only enlarges a nonnegative upper bound. Bounded Φ ensures absolute convergence for every ε. The outside f-term uses r^nΦ(r)->0 and the constant term uses the integrable tail. This proves convergence to the specified Lebesgue value for arbitrary complex kernels of mass one; no general approximate-identity pointwise assertion is consumed. Source: Teschl Problem 15.8 p.421; its radial-majorant hypothesis is strengthened here by boundedness, and the authored dyadic proof replaces the source hint.

Dependencies: `def-lebesgue-point-and-lebesgue-set`, `def-l-one-approximate-identity-on-rn`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-borel-sets-are-lebesgue-measurable`, `def-countable-choice`, `cor-c-one-change-of-variables-for-l-one-functions`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Problem 15.8, p.421; explicit dyadic proof replacing the hint.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 10 (zero-based), or pages after last item.

## 11. `thm-fourier-inversion-at-lebesgue-points-under-summability` — accepted

Step 1.1 verifies joint measurability via a Borel representative and absolute double-integral bound ||f||1 t^(-n/2), so Fubini gives the convolution at every x; bounded k_t removes the usual exceptional-x qualification. Step 2.1 applies norm approximate-identity convergence separately from the radial-majorant lemma at ε=sqrt(t). Its mass, monotonicity and integrability hypotheses hold for exp(-πr²). Teschl Theorem 14.7 p.382 confirms this Gaussian summability statement; its Problem 15.8 dependency is proved here rather than assumed.

Dependencies: `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity`, `lem-radial-majorized-kernels-recover-lebesgue-point-values`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `def-countable-choice`, `thm-l-one-approximate-identities-converge-in-l-p`, `lem-complex-translation-and-approximate-identity-interfaces`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Theorem 14.7, p.382, with Problem 15.8 fully supplied locally.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 11 (zero-based), or pages after last item.

## 12. `thm-l-one-fourier-inversion` — accepted

The extra transform-integrability hypothesis supplies both the continuous inverse representative and the DCT majorant |Ff|. Using only the explicit sequence t=1/m suffices to identify its limit with every specified Lebesgue value. The published differentiation theorem applies to the two locally integrable real components; their exceptional sets have a null finite union and the sum bounds complex oscillation. Thus equality is a.e. and at Lebesgue values, not at arbitrary representative values. Read Teschl Corollary 14.8 p.382 with its preceding regularization proof.

Dependencies: `thm-fourier-inversion-at-lebesgue-points-under-summability`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `thm-dominated-convergence`, `def-countable-choice`, `thm-almost-every-point-is-a-lebesgue-point`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Corollary 14.8, p.382.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 12 (zero-based), or pages after last item.

## 13. `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis` — accepted

The bounded inverse representative has bound ||Ff||1, proving fg integrable before Fourier transformation. Null changes affect the product only on a finite union of null sets. The product-integrand modulus is |Ff(η)||g(x)|, so Fubini applies and gives ξ-η with the correct phase. The final convolution is absolutely convergent at every ξ using bounded Fg, and exchanging factors proves exactly the asserted symmetric variant. This is a direct extension of the cited Schwartz product identity with its necessary extra integrability hypothesis explicitly verified.

Dependencies: `thm-l-one-fourier-inversion`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Proposition 11.18, pp.125–126; local Fubini proof extends its Schwartz case.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 13 (zero-based), or pages after last item.

## 14. `cor-uniqueness-of-the-l-one-fourier-transform` — accepted

For h=f-g the zero transform is integrable, so inversion legitimately applies even though the individual transforms need not be integrable. The optional a.e. transform hypothesis becomes everywhere equality by continuity and positive volume of a box inside a nonempty open ball; that Euclidean measure interface is already in inversion's dependency closure. The conclusion is equality of L1 classes. Both zero and nonzero inputs and ξ=0 are covered. Teschl Theorem 14.7 supplies the same injectivity conclusion.

Dependencies: `thm-l-one-fourier-inversion`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Theorem 14.7.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 14 (zero-based), or pages after last item.

## 15. `cor-convolution-approximate-identities-from-fourier-multipliers` — accepted

Step 1.1 splits the phase error using the uniform absolute L1 bound and absolute tails, valid for complex/sign-changing kernels. Bounding the closed outer tail by the defining δ/2 tail handles the boundary. It first takes ε to zero at fixed δ and then δ to zero. Step 2.1 obtains uniform transform convergence from L1 norm convergence and the transform bound, not from pointwise multiplier convergence. The imported complex approximate-identity theorem includes p=1 and all stated finite p, but does not claim L∞ approximation.

Dependencies: `thm-fourier-transform-converts-convolution-to-products`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-l-one-approximate-identities-converge-in-l-p`, `def-l-one-approximate-identity-on-rn`, `lem-complex-translation-and-approximate-identity-interfaces`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Theorem 14.7 and Lemma 14.12; MT15 supplies the norm theorem.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 15 (zero-based), or pages after last item.

## 16. `thm-fourier-transform-of-a-finite-complex-measure` — accepted

The bounded Borel exponential lies in L1(|μ|) because finite variation is an explicit hypothesis. The published variation bound supplies existence and the uniform norm bound without RN or finiteness-of-variation inference. Simple approximation justifies complex integral linearity. DCT applies on the finite positive variation measure with majorant 2; under stated countable choice the sequential criterion yields the full h-limit independently of ξ. Atomic and singular measures are allowed, and no decay-at-infinity assertion is made.

Dependencies: `def-complex-measure`, `def-integration-against-a-signed-or-complex-measure`, `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`, `thm-dominated-convergence`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Problem 14.10, p.387.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 16 (zero-based), or pages after last item.

## 17. `lem-gaussian-smoothing-of-finite-complex-measures` — accepted

All three steps are valid under explicit AC. RN is applied to v=|μ|, a finite positive Borel measure, since μ<<v; its density is Borel on that space and integrable. The density-variation identity gives ||u||1=v(Rn); bounded-test integration is justified by uniform simple approximation. Tonelli gives the exact double bound v(Rn), and Fubini with the Fourier phase yields the transform formula. Evenness of k_t and the independently proved C0 uniform approximation clause give the test limit. The imported variation-density proof omits an existence-choice assumption in its published form, but AC and an explicitly supplied L1 density meet that obligation here; its existing A-P debt remains open.

Dependencies: `thm-fourier-transform-of-a-finite-complex-measure`, `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`, `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities`, `def-c-c-and-c-c-infinity-on-rn`, `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value`, `def-axiom-of-choice`, `lem-complex-translation-and-approximate-identity-interfaces`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Problem 14.10, p.387; explicit smoothing argument.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 17 (zero-based), or pages after last item.

## 18. `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` — accepted

The difference measure has finite variation by partition domination. Smoothing plus L1 injectivity annihilates every compactly supported continuous test. Euclidean Hausdorff, local compactness and a rational-ball countable base satisfy regularity hypotheses. The four Jordan parts are finite positive measures dominated by finite regular variation; compact/open approximation transfers regularity to them. RMK uniqueness then applies separately to the real and imaginary positive pairs. AC explicitly covers RN, Jordan, regularity and the DC-qualified LCH cutoff used inside RMK uniqueness. This last published theorem has its own missing-DC hypothesis debt, recorded below; the live consumer has the stronger hypothesis and the remaining two-step uniqueness argument is sound.

Dependencies: `lem-gaussian-smoothing-of-finite-complex-measures`, `cor-uniqueness-of-the-l-one-fourier-transform`, `cor-second-countable-lch-locally-finite-borel-measures-are-regular`, `def-axiom-of-choice`, `thm-rmk-uniqueness-among-radon-measures`, `thm-jordan-decomposition-for-signed-measures`, `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures`, `thm-heine-borel-rn`, `thm-rationals-countable`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Problem 14.10, p.387.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 18 (zero-based), or pages after last item.

## Published finding — canonical merge completed

`thm-rmk-uniqueness-among-radon-measures`: full two-step proof read. Step 1.1 invokes `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set`, whose Statement explicitly assumes Dependent Choice; the uniqueness statement has no DC assumption. Repair by adding DC and declaring `def-dependent-choice`, or by proving a choice-free cutoff for the required scope. All suppliers are already published; no Phase-2 supplier/new pair is required. Published content remains read-only. This finding does not block the AC-qualified live measure uniqueness corollary. Canonical index search found no existing exact-ID entry. Added one A-P index row and detailed evidence under the prescribed mkdir/re-read/merge/rmdir lock protocol; later concurrent reconciliation retains that single row. Existing total-variation-density, balls, complex-convolution, differentiation and other published debts remain open; no new supplier or acceptance repairs those published proofs.
## 19. `rem-probability-characteristic-function-normalization` — accepted

The remark integrates a bounded Borel modulus-one function against a supplied positive probability measure, so no complex-measure construction or choice is needed. Direct substitution ξ=-t/(2π) gives precisely the characteristic-function sign and scale and value one at zero. Atomic probabilities are admissible. This is an integral dictionary only, with no uniqueness or existence characterization claim.

Dependencies: `def-integrable-real-and-complex-functions-and-their-integrals`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 19 (zero-based), or pages after last item.

## 20. `rem-riesz-thorin-supplied-by-measure-theory` — accepted

The only consumed result is the reviewed L1-to-supremum bound. The remark correctly distinguishes an infinite target endpoint from a finite-target theorem and preserves the established orientation-only scope of the designated interpolation page. It asserts no intermediate-p bound and introduces no proof dependence on that page or Recorded result.

Dependencies: `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1 equation (14.2), Theorem 14.10; §15.1 Theorem 15.2 and Corollary 15.3, pp.414–415, interpolation orientation only.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 20 (zero-based), or pages after last item.

## 21. `ex-fourier-transform-of-an-interval-indicator` — accepted

The antiderivative -exp(-2πixξ)/(2πiξ) differentiates to the integrand, and its endpoint difference has the displayed sign. The C1 finite-interval FTC applies for a<b; a=b is treated separately as a null singleton. Zero frequency is evaluated directly as b-a. Euler's formula gives sinc with value one for the unit symmetric interval. Countable choice covers the Lebesgue interval/FTC interface.

Dependencies: `def-fourier-transform-on-l-one-of-rn`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-complex-exponential-addition-and-real-extension`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-sine-and-cosine-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Problem 14.4(i).

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 21 (zero-based), or pages after last item.

## 22. `ex-fourier-transform-of-a-gaussian` — accepted

Scaling by sqrt(t)I has absolute determinant t^(n/2), giving reciprocal spatial/frequency widths and the stated transform factor. Evaluating at zero and multiplying by t^(n/2) gives a unit-mass density. t=1 and n=1 match the base Gaussian; nonpositive t is excluded. Both consumed Gaussian/scaling results have their countable-choice hypothesis stated here.

Dependencies: `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 22 (zero-based), or pages after last item.

## 23. `ex-fourier-transform-of-the-poisson-kernel` — accepted

Finite-half-interval integration and the explicit decaying tail give Fq_a=P_a, with denominators a±iξ nonzero for a>0. The inverse-square tail proves P_a integrable before inversion is invoked on q_a. Continuity upgrades a.e. equality, evenness fixes reflection, and frequency zero gives mass one. Fubini's double bound ||f||1||q_a||1 proves the Abel identity everywhere because P_a is bounded. Scaling P_a=a^-1P_1(./a) verifies every radial-majorant hypothesis and yields the specified Lebesgue value. No residue theorem or unstated complex parameter extension is needed.

Dependencies: `def-fourier-transform-on-l-one-of-rn`, `thm-l-one-fourier-inversion`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `lem-radial-majorized-kernels-recover-lebesgue-point-values`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-sine-and-cosine-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Problem 14.4(ii), real positive parameter.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 23 (zero-based), or pages after last item.

## 24. `ex-fourier-transform-of-a-compactly-supported-triangle-function` — accepted

The overlap intervals have lengths 1-x, 1+x, or zero in the stated cases, with singleton endpoint overlaps null; thus the convolution equals T everywhere. The same-page earlier interval example and L1 convolution formula give squared sinc. The zero-frequency mass is one by direct integration. Countable choice and the dependencies are appropriate.

Dependencies: `thm-fourier-transform-converts-convolution-to-products`, `ex-fourier-transform-of-an-interval-indicator`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 24 (zero-based), or pages after last item.

## 25. `cex-fourier-transform-of-an-l-one-function-need-not-be-integrable` — accepted

On each interval [k+1/6,k+5/6], sine has absolute value at least 1/2 and ξ<=k+1, giving integral lower bound 1/(3π(k+1)). The intervals are disjoint; each dyadic block has 2^m terms of denominator at most 3π2^(m+1), hence mass at least 1/(6π). These partial sums force infinite absolute integral. Input norm one and finite value at zero are verified; the defect is in the tail, consistent with Riemann–Lebesgue decay.

Dependencies: `ex-fourier-transform-of-an-interval-indicator`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 25 (zero-based), or pages after last item.

## 26. `cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative` — accepted

The singleton is null under the declared published hypothesis, so the witness and its transform are integrable zero classes. The inverse integral at zero is zero whereas its chosen representative value is one. The normalized mean oscillation about one is exactly one on each centered interval, so this does not contradict Lebesgue-value inversion. Both the class and representative distinctions are explicit.

Dependencies: `lem-l-one-fourier-transform-is-well-defined`, `thm-l-one-fourier-inversion`, `cor-integral-over-a-null-set-vanishes`, `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 26 (zero-based), or pages after last item.

## 27. `cex-riemann-lebesgue-has-no-universal-rate` — accepted

For arbitrary positive r tending to zero, the least integer recursion is defined and forces ξ_k to infinity even without monotonic r. The coefficient sum is one, giving measurable pointwise series and integrable Gaussian domination. DCT yields the sum of translated positive Gaussian transforms; absence of cancellation gives Ff(ξ_k)>=2^-k, and r(ξ_k)<2^-2k makes the ratio exceed 2^k. This refutes even an f-dependent big-O constant. Its generated counterexample provenance correctly attributes only constituent formulas to the source.

Dependencies: `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-dominated-convergence`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1 Gaussian and modulation formulas support the constituents; the no-rate construction is local, not attributed to this text..

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 27 (zero-based), or pages after last item.

## 28. `rem-wiener-tauberian-theorem` — accepted

Read Dall’Ara §3 pp.4–7 in full: Theorem 3.1 puts distributional Fourier support of an L∞ annihilator inside the Fourier zero set; Lemmas 3.2–3.3 supply spreading-out and the norm-convergent Neumann inverse; Corollary 3.4 handles families with no common zero. Singleton specialization and the recorded dual-separation equivalence yield the stated dense-translate formulation. Necessity also follows from the nonzero exponential annihilator at a Fourier zero. The item is explicitly unproved orientation, has no consumers or proof dependency, and distinguishes everywhere from a.e. nonvanishing. No local proof or assumption-free duality is claimed.

Dependencies: .

Sources: https://gdallaramath.wordpress.com/wp-content/uploads/2026/03/wiener-theorem.pdf — §3, Theorem 3.1, Lemmas 3.2–3.3 and Corollary 3.4, pp.4–7; recorded orientation only.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 28 (zero-based), or pages after last item.

## 29. `def-schwartz-space-and-its-seminorms` — accepted

The definition uses actual complex smooth functions and every pair of nonnegative multi-indices, including (0,0). Linearity gives the seminorm inequalities and closure of the vector space; p00 separates functions pointwise. Suprema are finite by definition and uniquely specified, so no choice is required. Dyatlov Definition 11.3 p.120 matches these seminorms and smooth-function convention.

Dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `def-ck-and-multi-index-notation-in-several-variables`, `def-c-c-and-c-c-infinity-on-rn`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Definition 11.3, p.120.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 29 (zero-based), or pages after last item.

## 30. `def-schwartz-topology-and-convergence` — accepted

Finite seminorm constraints form neighborhoods, including the empty intersection. One-constraint necessity and the maximum of finitely many thresholds prove both directions of sequential convergence. Seminorm convexity/balance, halved tolerances for addition, and the displayed scalar-product bound verify topological-vector-space structure, including c0=0 and vanishing seminorms. p00 provides disjoint neighborhoods for distinct functions. No infinite selection is used.

Dependencies: `def-schwartz-space-and-its-seminorms`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Definition 11.3 and (11.5), p.120.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 30 (zero-based), or pages after last item.

## 31. `thm-schwartz-space-is-frechet` — accepted

The capped-seminorm series is a translation-invariant separating metric by the scalar subadditivity estimate. Both quantitative topology implications in step 1.1 are correct, including η>=1. A metric-Cauchy sequence is uniformly Cauchy in each derivative; published componentwise uniform limits exist uniquely. The coordinate-segment derivative-limit theorem has both pointwise anchoring and uniform derivative convergence, and mixed-partial symmetry identifies the derivatives in every order. Taking the pointwise limit in the uniform weighted Cauchy inequalities proves all weighted seminorms finite and convergence therein. No arbitrary choice of limits or approximants is needed.

Dependencies: `def-schwartz-topology-and-convergence`, `thm-uniform-derivative-limit-on-a-closed-interval`, `thm-uniform-cauchy-criterion-real-functions`, `thm-uniform-limit-continuous-real-functions`, `thm-symmetry-of-higher-mixed-partials`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Lemma 14.29 and equations (14.95)–(14.96), p.404.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 31 (zero-based), or pages after last item.

## 32. `lem-schwartz-functions-and-all-derivatives-are-integrable` — accepted

Expanding W=product(1+x_j²) gives the exact finite sum of weighted seminorms bounding W|g|. The dyadic one-dimensional tail contributes at most 4 and the core at most 2; Tonelli then gives integral W^-1<=6^n. Endpoint L1 and L∞ bounds follow directly; intermediate p follows from |g|^p<=B^(p-1)|g|, with B=0 treated separately. Thus every weighted derivative has the stated finite-seminorm bound, under the Euclidean measure assumptions explicitly declared.

Dependencies: `def-schwartz-space-and-its-seminorms`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-linear-change-of-variables-for-lebesgue-measure`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Equation (11.7), p.120; Teschl Problem 14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 32 (zero-based), or pages after last item.

## 33. `lem-schwartz-cutoffs-from-the-standard-smooth-step` — accepted

The recurrence P_(k+1)=s²(P_k-P_k') is correct for differentiating P_k(1/t)exp(-1/t). Both the limiting derivative and its difference quotient vanish at zero by exponential domination, proving C∞ gluing by induction. The denominator a(t)+a(1-t) is strictly positive in all three regions. Composing σ with (4-|x|²)/3 gives the exact closed unit/two-ball conditions and compact support. Repeated coordinate chain rules give R^-|β| including β=0; no norm nonsmoothness at the origin occurs because |x|² is polynomial.

Dependencies: `thm-exponential-beats-every-polynomial`, `thm-chain-rule-for-total-derivatives`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-heine-borel-rn`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Remark 11.5 and Exercise 11.1, pp.120,135 motivate the cutoff; explicit flat-function construction supplied locally, not asserted to occur in Exercise 11.1..

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 33 (zero-based), or pages after last item.

## 34. `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space` — accepted

Coordinatewise Leibniz with mixed-partial symmetry gives the displayed multi-index product formula for complex inputs. On |x|>=R, R|x^α∂^δf|<=sum_j p_(α+e_j,δ)(f), so the tail estimate has the correct direction. Undifferentiated cutoff error lies outside R; every differentiated cutoff term lies in the annulus and has factor R^-|γ|. The finite sum tends to zero in each seminorm. Smooth compact support also proves membership in S; integer R provides an explicit approximating sequence without choice.

Dependencies: `def-schwartz-space-and-its-seminorms`, `def-schwartz-topology-and-convergence`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-general-leibniz-rule`, `thm-symmetry-of-higher-mixed-partials`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Remark 11.5 and Exercise 11.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 34 (zero-based), or pages after last item.

## 35. `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` — accepted

Checked every seminorm estimate: derivative index shift, finite differentiated monomial coefficients, translation expansion (y+a)^α, modulation factors (2πib)^γ, and reflection/conjugation invariance. Each fixed operator has finite input-seminorm control. The product estimate assigns the full x^α weight to one factor and distributes derivatives by Leibniz; expanding around (f0,g0) proves joint continuity, including zero factors without division. Fixed parameter scope and complex antilinearity of conjugation are correct; no stronger parameter-continuity or choice claim is hidden.

Dependencies: `def-schwartz-space-and-its-seminorms`, `def-schwartz-topology-and-convergence`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-complex-exponential-addition-and-real-extension`, `thm-sine-and-cosine-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-general-leibniz-rule`, `thm-symmetry-of-higher-mixed-partials`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Equation (11.6), Proposition 11.7; Teschl text preceding Lemma 14.4.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 35 (zero-based), or pages after last item.

## 36. `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` — accepted

All three steps checked. FTC bounds the frequency difference quotient by 2π|x_jf|, giving each continuous derivative through DCT and the weighted Schwartz closure. For spatial integration by parts, each fixed-coordinate slice and its derivative are integrable by the 1+x_j² bound, and x_jf bounded ensures both endpoint products vanish. Full weighted L1 bounds justify subsequent Fubini. Iteration never divides by a frequency coordinate. Combining identities gives the exact (2πi)^(-|α|) factor and finite-seminorm L1 control, proving genuine continuity S->S. Stated countable choice covers the sequential criterion and integration interfaces.

Dependencies: `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-sine-and-cosine-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Theorem 11.6 and Proposition 11.7, pp.121–122.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 36 (zero-based), or pages after last item.

## 37. `thm-fourier-inversion-on-schwartz-space` — accepted

Schwartz preservation and weighted integrability supply both L1 hypotheses before inversion. At each fixed point continuity bounds mean oscillation on every sufficiently small ball, so that point has its actual function value as Lebesgue value. The reviewed L1 inversion theorem therefore gives the absolutely convergent integral everywhere. This does not exchange an undamped double integral and has the correct positive inverse phase.

Dependencies: `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `thm-l-one-fourier-inversion`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Theorem 11.15, pp.124–125.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 37 (zero-based), or pages after last item.

## 38. `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space` — accepted

Evaluating Schwartz inversion at -x gives F²=R. Associativity and R²=I imply FR=RF and both inverse compositions with RF, proving surjectivity as well as injectivity. Fourier and reflection already map S continuously to itself, so their composition is a continuous inverse. No open mapping theorem or extra choice principle is needed beyond the declared countable-choice Fourier suppliers.

Dependencies: `thm-fourier-inversion-on-schwartz-space`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`, `def-countable-choice`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Remark 11.16, p.124.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 38 (zero-based), or pages after last item.

## 39. `cor-schwartz-convolution-and-product-transform-laws` — accepted

The inverse of Ff Fg is Schwartz by product closure and automorphism. The actual convolution exists everywhere using bounded f and integrable g, and DCT proves continuity under stated countable choice. The L1 convolution law and uniqueness identify its class with that inverse; continuity and positive-measure open balls upgrade this to everywhere equality. Product closure and integrability of Ff meet the asymmetric L1 product theorem's hypotheses, giving the second law everywhere. This proves actual-function closure, not just existence of a Schwartz representative.

Dependencies: `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`, `thm-fourier-transform-converts-convolution-to-products`, `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis`, `cor-uniqueness-of-the-l-one-fourier-transform`, `def-countable-choice`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `thm-dominated-convergence`.

Sources: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf — Proposition 11.18 and Exercise 11.8; Teschl Corollary 14.13.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 39 (zero-based), or pages after last item.

## 40. `thm-parseval-pairing-on-schwartz-space` — accepted

The conjugated inversion formula has the required negative phase with the first-variable-linear convention. Step 1.1 checks joint absolute integrability by ||f||1 ||Fg||1 before Fubini, and boundedness of g also controls the original product. Taking g=f gives the finite nonnegative norm identity, including zero. Countable choice is stated and covers the inversion and integration interfaces. No unresolved inference.

Dependencies: `thm-fourier-inversion-on-schwartz-space`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Lemma 14.9, p.383, polarized pairing version.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 40 (zero-based), or pages after last item.

## 41. `lem-schwartz-space-is-dense-in-l-two` — accepted

The support argument correctly includes every derivative: outside the support the function vanishes on a neighbourhood; each weighted derivative is continuous with compact support and therefore bounded. The complex smooth-density supplier applies at finite exponent p=2, dimension n>=1 and the expressly assumed countable choice. Zero and empty support are included. This proves density of classes without claiming all representatives are Schwartz.

Dependencies: `def-schwartz-space-and-its-seminorms`, `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, `def-countable-choice`, `lem-complex-lp-completeness-density-and-inner-product`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Text before Lemma 14.4 and Theorem 14.10.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 41 (zero-based), or pages after last item.

## 42. `thm-plancherel` — accepted

Step 1.1 establishes injectivity of the continuous Schwartz representatives into L2 classes using a positive-volume neighbourhood, then applies the dense-subspace extension theorem to a Banach target under countable choice. The norm limit preserves isometry and independence of approximants. Surjectivity is proved by approximating each target in Schwartz space and taking the L2 limit of its unique inverse transforms; Parseval makes those inverses Cauchy. Step 3.1 passes both pairings through Cauchy–Schwarz with bounded approximants. No arbitrary Hilbert basis or stronger choice principle is used; both injectivity and surjectivity are justified.

Dependencies: `thm-parseval-pairing-on-schwartz-space`, `lem-schwartz-space-is-dense-in-l-two`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, `thm-extension-of-a-bounded-map-from-a-dense-subspace`, `def-l-p-space-as-a-quotient-by-null-functions`, `lem-complex-lp-completeness-density-and-inner-product`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Theorem 14.10, p.383.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 42 (zero-based), or pages after last item.

## 44. `lem-simultaneous-smooth-approximation-in-l-one-and-l-two` — accepted

The explicit amplitude-and-radius truncations converge in both norms by domination with |f| and |f|². The prescribed smooth cutoff has positive finite integral and gives a single normalized compactly supported kernel. The complex mollification interface applies to these bounded compactly supported inputs: convolution is absolutely defined by the bounded kernel and L1 input, its smoothness/support clause and finite-p error estimates provide both convergences. Its separately recorded published Young-existence debt is not needed here. Taking the least integer satisfying both error bounds produces the same smooth sequence, supported in radius j+2/k_j, with no extra sequence selection. The triangle bounds close both norms under the stated countable choice.

Dependencies: `thm-dominated-convergence`, `thm-l-one-approximate-identities-converge-in-l-p`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`, `prop-mollifier-families-are-l-one-approximate-identities`, `def-countable-choice`, `lem-complex-translation-and-approximate-identity-interfaces`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Lemma 14.11 proof, p.383.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 44 (zero-based), or pages after last item.

## 45. `thm-l-one-l-two-agreement-of-fourier-transform` — accepted

The same Cc∞ sequence approximates in both norms. The L1 endpoint estimate gives uniform convergence of its integral transforms, while Plancherel gives L2 convergence of their classes. The complex Lp subsequence theorem supplies almost-everywhere convergence to the correct L2 class, and step 2.1 explicitly removes the countable union of null discrepancies between chosen and continuous representatives. Uniqueness of the pointwise limit identifies that class with the integral transform. Countable choice covers the cited approximation and subsequence interfaces; no unsupported pointwise convergence of the whole L2 sequence is used.

Dependencies: `thm-plancherel`, `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `lem-simultaneous-smooth-approximation-in-l-one-and-l-two`, `lem-complex-lp-completeness-density-and-inner-product`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Lemma 14.11, p.383.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 45 (zero-based), or pages after last item.

## 46. `thm-l-two-fourier-inversion` — accepted

Reflection preserves L2 norms and null equivalence by the C1 substitution with unit absolute determinant. The dense Schwartz identity extends continuously, and associativity gives commutation and both inverse identities. Closed-ball truncations lie in L1∩L2 by finite measure and Cauchy–Schwarz. Dominated convergence along integer tails, followed by monotonicity, handles all real radii tending to infinity. Agreement and the isometry identify the integral limits; reflection gives the positive-phase inverse. All assertions are in norm, including zero input, with no pointwise convergence claim.

Dependencies: `thm-plancherel`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, `thm-l-one-l-two-agreement-of-fourier-transform`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `lem-complex-lp-completeness-density-and-inner-product`, `def-countable-choice`, `thm-dominated-convergence`, `cor-c-one-change-of-variables-for-l-one-functions`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Equation (14.17), p.384.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 46 (zero-based), or pages after last item.

## 47. `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` — accepted

The torus is a closed bounded subset of R^(2n). Circle parametrization identifies precisely the cube endpoint fibres, so periodicity gives a well-defined descended function; compact images of inverse images of closed sets prove its continuity. The character algebra contains one, separates points and is self-adjoint. The published complex Stone–Weierstrass theorem therefore supplies a uniform approximant to the conjugate, whose pullback frequencies pair to zero using the negative indices. The resulting epsilon||f||1 bound forces zero square integral. Positive-volume intersections at cube faces/corners upgrade almost-everywhere vanishing to everywhere. Only the stated countable choice is required. Read Elkies, aws09.pdf pp.10–11: its periodization proof motivates the uniqueness step, which is proved independently and fully here.

Dependencies: `thm-complex-stone-weierstrass-self-adjoint`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-heine-borel-rn`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-borel-sets-are-lebesgue-measurable`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `def-countable-choice`, `thm-continuous-image-of-a-compact-space-is-compact`.

Sources: https://people.math.harvard.edu/~elkies/aws09.pdf — Proof of Theorem 2, pp.10–11; uniqueness step expanded locally.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 47 (zero-based), or pages after last item.

## 48. `thm-poisson-summation-for-schwartz-functions` — accepted

The explicit product weight bounds all derivative lattice series on each bounded box; the reciprocal one-dimensional weights have a summable dyadic bound, including k=0. Uniform derivative limits justify smooth periodization and absolute convergence permits reindexing. Half-open cube tiling, L1 absolute integrability and translation substitution justify the coefficient exchange; null faces reconcile the closed cube. Schwartz preservation makes the coefficient sequence absolutely summable, and interval FTC with the zero-frequency case computes its Fourier series coefficients. The reviewed continuous-periodic uniqueness lemma then proves equality everywhere, with only local uniformity claimed for periodization and global absolute uniformity for its Fourier series. Read the complete Elkies Theorem 2 proof, pp.10–11: for L=Z^n its covolume is one, and converting the source's positive-sign transform yields exactly the authored negative-sign convention. All choice hypotheses are stated.

Dependencies: `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-uniform-derivative-limit-on-a-closed-interval`, `def-countable-choice`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `cor-c-one-change-of-variables-for-l-one-functions`.

Sources: https://people.math.harvard.edu/~elkies/aws09.pdf — Theorem 2 and proof, pp.10–11, specialized to Zn with the negative-sign convention.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 48 (zero-based), or pages after last item.

## 43. `lem-real-ltwo-multipliers-and-unitary-transport` — repaired

The finite-real multiplier truncations exhaust the space and prove dense domain without boundedness of m. With the first-variable-linear pairing, the test w_N=1_E_N(mg-h) is in D(M) and yields exactly the integral of |mg-h|² on E_N; countable union proves the reverse adjoint inclusion. Modulus one proves the group and unitarity; DCT with 4|f|² gives strong continuity. The derivative sufficiency uses 4|mf|², while necessity uses Fatou on t=1/N and bounded quotient norms, giving the exact domain. The final substitution v=Uf proves both transported adjoint-domain inclusions and both derivative directions. All truncations are explicit; stated countable choice covers the sequential criterion. Read Teschl QM §2.2, printed pp.66–69, equations (2.15), (2.20), (2.22)–(2.27), including the complete multiplication-operator adjoint argument. Corrected the frontmatter locator from §1.2 to §2.2; the mathematics and manifest were already sound. Closed polish defect p2-fourier2-a-5a-multiplier-source-section; this exact locator repair is fully justified.

Dependencies: `lem-complex-lp-completeness-density-and-inner-product`, `thm-dominated-convergence`, `thm-fatou-lemma`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, `thm-sine-and-cosine-derivatives`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `def-countable-choice`.

Sources: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf — §2.2 multiplication examples (2.15), (2.20), (2.22)–(2.27), pp.66–69; §8.1 (8.1)–(8.4), pp.207–208. Generator/domain and transport proved directly here..

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 43 (zero-based), or pages after last item.

## 49. `ex-gaussians-and-polynomials-times-gaussians-are-schwartz` — accepted

The derivative recurrence preserves polynomial-times-Gaussian form for every ordered multi-index. The coefficient-sum growth bound and a single integer N with 2N>=degree control each weighted derivative by a decaying exponential outside the unit ball and a finite bound inside. The cited exponential-dominates-powers result applies because t>0. The zero polynomial and constant case are included, and no integral formula or choice principle is needed.

Dependencies: `def-schwartz-space-and-its-seminorms`, `thm-exponential-beats-every-polynomial`, `thm-derivative-of-exponential`, `def-ck-and-multi-index-notation-in-several-variables`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 49 (zero-based), or pages after last item.

## 50. `cex-a-smooth-integrable-function-need-not-be-schwartz` — accepted

The rational derivative recurrence is correct with a strictly positive denominator, proving smoothness globally. The nonnegative half-line integrals are bounded by 1 plus the x^-2 tail; evenness supplies the other half-line. The cited improper-to-Lebesgue result applies under the explicitly assumed countable choice. The lower bound x^4/(1+x²)>=x²/2 for |x|>=1 makes the precise seminorm p_(4,0) infinite. This is a valid smooth L1 witness with no hidden singularity at zero.

Dependencies: `def-schwartz-space-and-its-seminorms`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 50 (zero-based), or pages after last item.

## 51. `cex-a-schwartz-function-need-not-have-compact-support` — accepted

The reviewed polynomial-Gaussian example applies at P=1,t=1. Strict positivity makes the support the whole Euclidean space. The explicit increasing open-ball cover has no finite subcover, including dimension one; a point beyond the largest radius on the first coordinate axis witnesses failure. This proves noncompact support without relying on a converse compactness theorem or a choice principle.

Dependencies: `ex-gaussians-and-polynomials-times-gaussians-are-schwartz`, `def-c-c-and-c-c-infinity-on-rn`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 51 (zero-based), or pages after last item.

## 52. `ex-hermite-functions-as-fourier-eigenfunctions` — accepted

The raising/lowering commutator is I with the stated constants, and the real polynomial recurrence has degree m and nonzero leading coefficient (2√π)^m. Decaying-line integration by parts proves the adjoint pairing, symmetry of the number operator, orthogonality and norm recurrence m!, with ground norm one. The derivative Fourier identities give F a†=-i a† F, fixing the eigenvalue sign. Completeness is proved rather than presumed: triangular monomial recovery gives zero moments of fh0, Cauchy–Schwarz and the checked inequality -2πx²+4π|ξ||x|<=-πx²+4πξ² provide an integrable majorant for all exponential Taylor partial sums, and L1 Fourier uniqueness kills the orthogonal complement. Explicit finite orthogonal sums are Cauchy by the coefficient-square bound and converge to f by that complement argument. Read Stroock Theorem 10.1 and full proof pp.22–23, §11 opening p.23, and Theorem 11.1 proof p.24; the local Gaussian scale and negative phase correctly change the constants/sign. Countable choice only enters the declared integral/completeness interfaces; no unspecified basis theorem is consumed.

Dependencies: `def-schwartz-space-and-its-seminorms`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `cor-uniqueness-of-the-l-one-fourier-transform`, `thm-dominated-convergence`, `thm-plancherel`, `lem-complex-lp-completeness-density-and-inner-product`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `def-complex-exponential`, `def-countable-choice`, `ex-gaussians-and-polynomials-times-gaussians-are-schwartz`.

Sources: https://ocw.mit.edu/courses/res-18-015-topics-in-fourier-analysis-spring-2024/mitres_18_015_s24_full_lec.pdf — Theorem 10.1 and proof, pp.22–23; §11 opening and Theorem 11.1, pp.23–24; rescaled/sign-converted.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 52 (zero-based), or pages after last item.

## 53. `ex-plancherel-for-an-interval-indicator` — accepted

The interval indicator has L1 norm and square L2 norm both one. Complex FTC computes the negative-phase transform as the real sinc quotient for nonzero frequency; its integral at zero is evaluated separately as one. The reviewed L1/L2 agreement identifies this representative with its Plancherel class, so the isometry proves both integrability of the square and its value one. All endpoint and choice hypotheses are met.

Dependencies: `def-fourier-transform-on-l-one-of-rn`, `thm-l-one-l-two-agreement-of-fourier-transform`, `thm-plancherel`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `thm-sine-and-cosine-derivatives`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 53 (zero-based), or pages after last item.

## 54. `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` — accepted

For each real t>0, both tails of the theta series are bounded by a geometric series, with the k=0 term separate; 1/t is again positive. The Gaussian is Schwartz and its reviewed transform has factor t^-1/2 and reciprocal parameter. Poisson summation at zero proves the claimed equation with both sums absolutely convergent. The case t=1 agrees termwise; no t=0 or complex-parameter claim is made. Read Elkies p.11 complete proof following Theorem 2, which specializes to this Gaussian identity; negative versus positive phase does not change the even Gaussian transform.

Dependencies: `thm-poisson-summation-for-schwartz-functions`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `def-countable-choice`, `ex-gaussians-and-polynomials-times-gaussians-are-schwartz`.

Sources: https://people.math.harvard.edu/~elkies/aws09.pdf — Equations (17)–(18), and proof following Theorem 2, p.11.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 54 (zero-based), or pages after last item.

## 55. `thm-heisenberg-uncertainty-inequality` — accepted

The centering g(y)=exp(-2πib·(y+a))f(y+a) yields Fg(eta)=exp(2πia·eta)Ff(eta+b), so all three norms transform correctly. Line integration by parts has vanishing endpoint products and integrable derivatives; full-space absolute integrability justifies Fubini. Summing the n identities and applying tuple Cauchy–Schwarz, followed by derivative Parseval, gives n/(4π). For nonzero g the positive identity excludes zero tuple norms. Equality forces one common scalar B=dA, and the real-part equality forces d negative real, giving lambda>0. Continuous a.e. derivative identities hold everywhere, and coordinate FTC solves them as one isotropic Gaussian. The converse verifies both inequalities are equalities and restores both centers; zero is handled separately. Read Teschl Theorem 14.15 complete proof pp.385–386: its single-coordinate bound is normalization-converted here, and the stronger radial equality assertion is justified by the authored common-scalar argument rather than attributed to the source. Stated countable choice covers all interfaces.

Dependencies: `thm-parseval-pairing-on-schwartz-space`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `lem-complex-lp-completeness-density-and-inner-product`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `def-countable-choice`, `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`, `lem-schwartz-functions-and-all-derivatives-are-integrable`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `ex-gaussians-and-polynomials-times-gaussians-are-schwartz`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — Theorem 14.15, pp.385–386; radial sum and equality conditions expanded.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 55 (zero-based), or pages after last item.

## 56. `rem-hausdorff-young-and-interpolation` — accepted

The endpoint upper bound is the L1 transform estimate. The normalized positive Gaussian has L1 norm one and transform value one at zero; continuity and positive-volume neighbourhoods correctly upgrade this to essential supremum one. Plancherel supplies the second exact norm and the agreement theorem supplies common-domain compatibility. Read Teschl Theorem 15.2 and Corollary 15.3, pp.414–415: the stated exponent range includes infinity, as the remark says. The remark claims no intermediate-p theorem and does not consume the separate published interpolation page as a proof prerequisite; established scope is retained. Countable choice is explicitly propagated.

Dependencies: `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`, `thm-plancherel`, `thm-l-one-l-two-agreement-of-fourier-transform`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `def-countable-choice`.

Sources: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — §14.1 equation (14.2), Theorem 14.10; §15.1 Theorem 15.2 and Corollary 15.3, pp.414–415, interpolation orientation only.

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 56 (zero-based), or pages after last item.

## 57. `ex-momentum-operator-under-the-fourier-transform` — accepted

The specified multiplier 2πxi is real finite measurable, and Plancherel is the specified unitary, so the reviewed local multiplier lemma gives exactly the stated domain, self-adjointness, and both directions of the norm derivative criterion. On Schwartz functions the derivative formula gives F(-if')=2πxi Ff, while the translation law at a=-t gives the positive shift for exp(itP). Both sides are isometries on L2, so their agreement extends from the dense Schwartz subspace with error at most 2||f-f_j||2. The valid translation-isometry clause of the complex interface is sufficient; its unrelated convolution-existence debt is not used. Read Teschl QM §8.1 pp.207–208, equations (8.1)–(8.4), and §2.2 pp.66–69; the local text supplies the complete maximal-domain proof and uses the appropriate plus shift for its exp(+itP) convention. No general Stone theorem, spectral calculus or unspecified extension is needed.

Dependencies: `lem-real-ltwo-multipliers-and-unitary-transport`, `thm-plancherel`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-translation-modulation-dilation-and-reflection-laws`, `lem-schwartz-space-is-dense-in-l-two`, `thm-l-one-l-two-agreement-of-fourier-transform`, `lem-complex-translation-and-approximate-identity-interfaces`, `def-countable-choice`.

Sources: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf — §2.2 multiplication examples (2.15), (2.20), (2.22)–(2.27), pp.66–69; §8.1 (8.1)–(8.4), pp.207–208. Generator/domain and transport proved directly here..

Validation: mathematical read complete; final mechanical checks pending. No unresolved obligation for this item. Next: scope item index 57 (zero-based), or pages after last item.


## Page `fourier-transform-convolution-and-approximate-identities` — accepted

The page accurately distinguishes L1 classes from the everywhere-defined continuous transform, uses the fixed negative 2π phase, and describes the proved convolution, Gaussian summability, Lebesgue-value inversion, product and uniqueness results without dropping their hypotheses. Its choice paragraph matches the items: elementary bound and uniform continuity are choice-free; Euclidean approximation uses countable choice; measure smoothing and its uniqueness consumer explicitly assume AC. The ordering puts the local integration and radial suppliers before their consumers; orientation is not represented as proved input. Manifest prerequisites retain the established scope.

Validation: complete page, manifest membership and prerequisite read against its authored items. No unresolved page obligation.

## Page `fourier-transform-convolution-and-approximate-identities-examples` — accepted

The page correctly summarizes all four computed transforms, their zero-frequency treatment, and the Poisson/Abel recovery supplied by the radial lemma. Its three counterexample descriptions match the proved failures, including the rate counterexample for every proposed positive vanishing rate. The closing Wiener result is explicitly Recorded orientation and has no proof consumers among these calculations. Negative 2π convention and A-page prerequisite are consistent; no stronger pointwise or integrability claim is introduced.

Validation: complete page, manifest membership and prerequisite read against its authored items. No unresolved page obligation.

## Page `schwartz-space-and-the-plancherel-theorem` — accepted

The page prose matches the reviewed proofs: actual smooth functions, complete seminorm metric and explicit cutoffs; continuous Schwartz Fourier operations and inversion; surjective Plancherel extension; simultaneous approximation for overlap agreement; norm-only truncated inversion; locally uniform periodization and coefficient uniqueness for Poisson summation. Choice-free topology and countable-choice integral/completion interfaces are distinguished correctly. The local multiplier lemma proves the domain claims described, without a spectral theorem. Suppliers precede their actual consumers and the existing A-page prerequisite chain is adequate.

Validation: complete page, manifest membership and prerequisite read against its authored items. No unresolved page obligation.

## Page `schwartz-space-and-the-plancherel-theorem-examples` — accepted

The page accurately describes the explicit decay/support examples, Hermite eigenvalue sign and full basis argument, sinc-square computation, positive-real theta reciprocity, radial Heisenberg constant and both equality directions. Interpolation is limited to the two endpoints and their agreement. Momentum is described with the proved multiplier domain, derivative criterion and plus translation sign. The distinctions between choice-free elementary examples and countable-choice integration/completeness uses match the items; all application prerequisites are on the existing A-page chain or proved within this B page.

Validation: complete page, manifest membership and prerequisite read against its authored items. No unresolved page obligation.

## Completed local review and handoff

All 57 assigned items and four pages have exactly one authored decision: 60 accepted and one repaired. The sole repair is the verified source-section locator in `lem-real-ltwo-multipliers-and-unitary-transport` (§1.2 → §2.2); its mathematical statement, proof and dependency quotations are unchanged. The manifest already had the correct locator. Closed defect: `p2-fourier2-a-5a-multiplier-source-section`, appended through `tools/defect-ledger.mjs`, uniquely owned by that item decision, with `repair_confidence: 1`. There are no unresolved authored mathematics or source-understanding blockers, no withdrawals, and no cleared owner escalations.

Local suppliers: the existing authored integration-by-parts, radial-majorant, cutoff, simultaneous-approximation, periodic-uniqueness and real-multiplier lemmas supply the actual consumed claims; their individual decisions above document hypotheses and inference checks. No new definition, lemma, item, pair or page was necessary. Exact shared-plan amendments: none. Exact Phase-2 amendments: none. No manifest, page order, provenance classification or dependency-edge change is needed for the locator repair. Owning contracts now contain complete, specific `risk_review` entries from the same mathematical read. The single-batch cross-batch input remains the valid empty array; the canonical refresh was run successfully with `--require-reviewed`.

Published findings: one new A-P entry for `thm-rmk-uniqueness-among-radon-measures`, as documented above and in the canonical ledger. Its cutoff supplier already exists with DC; repairing the published consumer is Phase-3 work, not accomplished by the live AC-qualified proof. The canonical classification index has no duplicate IDs and has exactly one row for this target after concurrent reconciliation. Other previously recorded published debts remain as recorded; no published mathematical file was edited by this review.

Final local checks (superseding the per-item checkpoint lines saying final checks were pending):

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-real-ltwo-multipliers-and-unitary-transport.md`: unchanged canonical formatting.
- `tools/precheck.mts` on the 57 explicitly owned item paths: 50 proof-bearing items checked, zero failures; the other seven have no checkable proof body.
- `node tools/proof-contract.mjs research/phase-2-fourier-support-2-batch-1.proof-contracts.json --strict`: 57/57 checked, zero errors, one `shotgun-bracket` warning on `thm-schwartz-space-is-frechet` step 2.1. Reread confirms that this single step actually uses uniform Cauchy, uniform continuity of limits, uniform derivative limits and mixed-partial commutation; the other two steps are direct metric/seminorm estimates. This warning supplies no mathematical defect and requires no gratuitous citation rewrite.
- `node tools/risk-report.mjs research/phase-2-fourier-support-2-batch-1.proof-contracts.json --require-reviewed`: 57 routed, zero errors.
- `tools/rendercheck.mjs` on the 57 items and four pages: 61 files passed real KaTeX and renderer-YAML parsing, with no delimiter or wikilink-in-math errors.
- Every owning-contract citation quote matches normalized current dependency text. Decision coverage, unique IDs, exact obligation names, nonempty evidence, and unique closed repair-reference ownership checked locally.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-fourier-support-2 --require-reviewed`: successful deduplicated refresh; no cross-batch edges in this one-batch run.
- Repository-wide `tools/depcheck.mjs`: one hard error outside this dispatch, `def-carleson-tiles-wave-packets-and-tile-order` → B-only `ex-flat-exponential-function`; 473 repository warnings. No error or warning names an owned item/page. The global check is therefore not passed. This unrelated draft and its scheduling remain with its owner. JSON output was read completely using direct file redirection after pipe-captured output truncated; the complete diagnostic is the basis for this scoped result.

No judgment, content stamp, exact-hash closure, scheduling transition or independent certification was performed. The engine and serial lead retain the cross-group audit, contract merge and exact-hash closure protocols. Local review is complete; next action is the engine-owned continuation.
