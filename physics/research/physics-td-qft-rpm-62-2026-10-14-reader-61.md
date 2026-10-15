# Step 3a reader report — batch 61

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Scope: batch 61 only

## Opened inventory

Pages opened: A page qft-ir03 and B/examples page qft-ir03-examples.

All ten assigned items were reviewed in dependency order: def-qft-regular-polynomial-functional-algebra; thm-qft-diagonal-delta-distribution; lem-qft-tensor-test-function-density; thm-qft-regular-wick-star-associativity; lem-qft-regular-normal-order-isomorphism; def-qft-regular-formal-time-ordering; thm-qft-regular-formal-causal-factorization; thm-qft-bounded-regulator-dyson-factorization; rem-qft-local-wick-diagonal-obligation; ex-qft-regular-quadratic-star-product.

Supplier items opened to check the relevant definitions and steps included cor-compact-domain-maps-are-uniformly-continuous; cor-complex-exponential-cartesian-form-modulus-and-eulers-identity; def-ck-and-multi-index-notation-in-several-variables; def-complex-exponential; def-countable-choice; def-distribution; def-hilbert-space; def-hilbert-space-adjoint; def-operator-norm; def-schwartz-space-and-its-seminorms; def-schwartz-topology-and-convergence; def-space-of-bounded-linear-operators; def-support-of-a-distribution; def-tempered-distribution; def-test-function-space-d-of-an-open-set; def-test-function-topology; lem-complex-exponential-series-converges-everywhere; lem-distribution-pairing-with-smooth-parameter-families; lem-qft-free-time-ordered-kernel; lem-qft-mass-shell-test-restriction-continuity; lem-qft-scalar-causal-commutator; lem-qft-smeared-free-scalar; lem-test-function-cutoffs-and-euclidean-localization; thm-algebra-of-derivatives; thm-chain-rule-for-total-derivatives; thm-complex-exponential-addition-and-real-extension; thm-complex-exponential-is-entire-with-derivative-itself; thm-continuous-on-a-rectangle-is-riemann-integrable; thm-differentiation-under-the-integral-sign-on-a-compact-rectangle; thm-extreme-value-metric; thm-fejer-uniform-convergence-for-continuous-periodic-functions; thm-ftc-second-part; thm-heine-cantor-metric; thm-multidimensional-integral-properties; thm-riemann-fubini-on-product-rectangles; thm-sequential-convergence-in-test-function-space; thm-tensor-product-distributions-and-iterated-pairings. Relevant supplier pages opened were distributions-test-functions-and-differentiation, the-riemann-integral-in-rn-and-jordan-content, fejer-and-poisson-summability-of-fourier-series, and qft-mf04.

Source checks: Fredenhagen–Rejzner, Perturbative algebraic quantum field theory, sections 4–6, equations (23), (56), (63)–(64), (79)–(83), and (86), https://arxiv.org/html/1208.1428; Tong, Quantum Field Theory, chapter 2 §2.7.1, equations (2.165)–(2.174), and chapter 3 §§3.1.1, 3.3.1–3.3.2, https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html. The current QFT-MF02 and QFT-MF04 suppliers remain draft interfaces; the dependent causal-factorization result is conditional on those exact statements and is formal.

## Repairs and evidence

- def-qft-regular-polynomial-functional-algebra now defines compact complex Riemann integrals by real and imaginary components before using them, and justifies complex modulus estimates, Fubini, and parameter differentiation componentwise. This closes the mismatch with the cited real-valued Riemann suppliers. The item also verifies its derivative-kernel formula by a finite coefficient-of-directions calculation.
- thm-qft-diagonal-delta-distribution now states the same integral convention locally. Step 4.1 proves strict positivity by selecting a cube where the cutoff is bounded below and exhibiting a positive Darboux lower sum.
- lem-qft-tensor-test-function-density now records the complex conjugation and modulus convention and proves positivity of the integral of |f_n|^2 using a positive lower sum in step 4.1.
- thm-qft-bounded-regulator-dyson-factorization now defines the Hilbert-valued Riemann integral through norm limits of tagged sums. Its proof supplies the scalar FTC step for norm constancy and derives the separated-support factorization from the integral equations on the three time intervals.
- def-qft-regular-formal-time-ordering now defines the finite independent-field coefficient families, the exact one-pair operators D_H^{ij} including their multiplicity factors, full symmetrization, and the terminating formal exponential. Its input is stated as any V in P_reg, whose coefficient support is already compact.
- thm-qft-regular-wick-star-associativity now identifies the componentwise complex-integral and conjugation conventions and specifies its auxiliary exponential generator coefficientwise. lem-qft-regular-normal-order-isomorphism likewise identifies the integral convention and specifies its generator coefficientwise; neither generator is asserted to be a polynomial functional.
- thm-qft-regular-formal-causal-factorization no longer assumes that contractions commute merely because they are assigned different slots. Step 4.1 justifies commutation using distinct variable copies, within-block symmetry, and associativity of the tensor pairings.
- ex-qft-regular-quadratic-star-product explicitly records the integral convention used by its smeared linear functionals.

I synchronized the affected proof-contract derivations and refreshed copied supplier sections for the changed regular-algebra, time-ordering, and diagonal-delta interfaces. No changed item contained a stale verification.judge record. No page prose or out-of-batch item was edited.

## Defects not edited

None confirmed. No defect remained in a published or other-batch dependency. In particular, the apparently missing tempered-distribution convention in lem-qft-smeared-free-scalar is supplied by its direct Fock/test-space dependency, which defines the continuous dual of Schwartz space.

## Page verdicts

- qft-ir03 (A page): acceptable after the assigned item repairs above; no independent page-prose defect found.
- qft-ir03-examples (B page): acceptable; its two assigned examples are supported by their item statements and no page-prose defect was found. No B-page prose was edited.

## Validation and blocker

Reflow completed for all nine changed items. Precheck passed for all seven proof-bearing items; the two definitions had no proof records to check. The required proof-layout scan completed for 9 items and 36 numbered steps with 0 defects. The initial renderer invocation could not resolve the checkout's React/TypeScript runtime; a temporary runtime shim under /tmp allowed the same read-only scan to complete. There is no remaining blocker.
