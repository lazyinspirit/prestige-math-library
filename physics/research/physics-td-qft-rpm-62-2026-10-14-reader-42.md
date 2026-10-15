# Step 3a independent reader report — batch 42

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `42`

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qft-mf03.md` (A page).
- `library/quantum-field-theory-mathematics/qft-mf03-examples.md` (B page).
- Read prerequisite page context `qft-mf01`, `qft-mf02`, and `library/quantum-field-theory-mathematics/_category.md`.

Assigned items were read in dependency order:

1. `lem-qft-lorentz-boost-rotation-factorization`
2. `def-qft-dirac-projections`
3. `lem-qft-dirac-projection-matrices`
4. `lem-qft-free-dirac-car-locality`
5. `lem-qft-dirac-fermionic-translation-spectrum`
6. `lem-qft-dirac-covariance-spectrum`
7. `ex-qftmath-dirac-rest-projector`

QFT-MF01 and QFT-MF02 mathematical suppliers opened for the assigned arguments:

- `def-qft-fock-and-test-spaces`
- `lem-qft-l2-product-tensor-identification`
- `lem-qft-fock-ccr-car`
- `def-qft-scalar-mass-shell`
- `lem-qft-mass-shell-measure-invariant`
- `lem-qft-scalar-causal-commutator`

I also read `research/physics-td-qft-rpm-62-2026-10-14-batch-42.proof-contracts.json` for all seven assigned items. I treated its step maps, citations, and boundary notes as review evidence, not as a verdict.

The exact definitions/statements used from imported mathematical suppliers were also inspected: `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `cor-triangle-inequality-for-inner-product-norm`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-countable-choice`, `def-cross-product-in-r3`, `def-densely-defined-closed-and-closable-operator`, `def-determinant-of-a-linear-operator`, `def-euclidean-inner-product`, `def-hyperbolic-functions`, `def-projection-valued-measure`, `def-sine-and-cosine-by-power-series`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-unbounded-linear-operator-domain-and-graph`, `lem-lorentz-map-preserves-metric-and-causal-structure`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-dominated-convergence`, `thm-fatou-lemma`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-hyperbolic-identities-and-derivatives`, `thm-intermediate-value`, `thm-quarter-turn-values-and-shift-formulas`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-and-cosine-derivatives`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-plancherel`, `thm-parseval-pairing-on-schwartz-space`, `thm-box-step-functions-are-dense-in-l-p-of-rn`, `def-l-p-space-as-a-quotient-by-null-functions`, and `def-calligraphic-l-p-on-a-measure-space`.

I read `research/math-imports.json` to confirm which of those are pinned mathematical imports. I did not edit any imported or published supplier.

## Source review

The assigned items cite QFT literature for context; their mathematical results are established by the local arguments, with local conventions stated explicitly. Relevant opened passages:

- [David Tong, *Quantum Field Theory*](https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf), Chapter 4 §4.1, equations (4.13)–(4.24), printed pp. 83–85 (Clifford algebra and spinor Lorentz action); Chapter 5 §5.2, equations (5.14)–(5.16), printed pp. 109–110 (fermionic field anticommutators and mode operators).
- [Niklas Beisert, *Quantum Field Theory I*, ETH Zürich 2025 HS notes](https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf), §5.1, equations (5.9)–(5.15), printed pp. 5.2–5.3 (on-shell projectors and two-dimensional solution spaces); §5.2, equations (5.17)–(5.23), printed pp. 5.4–5.5 (spinor Lorentz transformation); and §5.6, equations (5.89)–(5.95), printed pp. 5.14–5.16 (canonical anticommutators and mode relations). The sources use conventions that differ from some local formulas; the reviewed items derive their stated signs and normalizations locally.

No assigned item records an experiment or empirical premise. The QFT conclusions reviewed here are mathematical consequences within the explicitly specified free-field construction.

## Repairs and evidence

- `lem-qft-lorentz-boost-rotation-factorization`: changed the title to name the required orthochronous hypothesis; stated continuity before applying the intermediate value theorem; constructed an orthonormal basis of the rotation plane from a spatial basis vector and the supplied cross product. The proof now cites the exact cross-product and Euclidean definitions. Updated derivation D3 and its citations in the batch proof contract. Reflow: unchanged; precheck: pass.
- `lem-qft-dirac-projection-matrices`: the rational-box supplier's (L^2) space is real-valued, as shown by its exact (L^p) definition. Replaced the unsupported complex separability inference with a local real/imaginary-part argument, then used the resulting countable dense set both for Hilbert-space separability and for density of the projected maximal multiplier domains. Proved self-adjointness of the finite orthogonal direct sum from the adjoint definition. Adopted the precheck's canonical step layering (steps 4.1 and 5.1). Updated derivations, citations and boundary evidence in the batch proof contract. Reflow: unchanged; precheck: pass.
- `lem-qft-free-dirac-car-locality`: defined the four-component Schwartz test space as the finite product of the earlier scalar Schwartz space with its product topology. Explained the Plancherel pairing for the local spatial Fourier normalization by the (2\pi) rescaling. Separated the field-adjoint locality conclusion, which follows from the supported kernel, from the field-field CAR conclusion, which follows from the orthogonal particle/antiparticle summands. Updated derivation D6 and its contract citations. Reflow: unchanged; precheck: pass.
- `lem-qft-dirac-covariance-spectrum`: completed the vacuum-cyclicity argument by normal-ordering products with the CAR, putting lower-degree contraction terms in the induction hypothesis, and obtaining the degree-zero identity from a nonzero CAR relation. Updated derivation D6 in the batch proof contract. Reflow: unchanged; precheck: pass.
- `ex-qftmath-dirac-rest-projector`: replaced the unsupported shorthand title with “two spin-component sectors,” defined the dimensionless (S_3=\tfrac12\operatorname{diag}(\sigma_3,\sigma_3)) matrix that labels them in this representation, and displayed the four coordinate spinors explicitly. Updated derivation D2 in the batch proof contract. Reflow: unchanged; precheck: pass.

No stale `verification.judge` record was present on the edited items. The A- and B-page prose was not changed.

## Consumer review for the test-space definition

The new finite-product definition preserves the previously used set of four-component Schwartz tests. I checked all 22 current dependency descendants for compatibility with that unchanged domain: `def-qft-free-dirac-model`, `def-qft-free-field-observables`, `lem-qft-dirac-covariance-spectrum`, `lem-qft-free-domain-observables`, `post-qft-free-field-model`, `pthm-qft-classical-quantum-free-correspondence`, `pthm-qft-dirac-free-properties`, `pthm-qft-free-observable-domain-limits`, `post-qft-qed-local-coupling`, `pthm-qft-qed-classical-coupling`, `pthm-qft-qed-coulomb-constraints`, `pthm-qft-scalar-free-properties`, `pthm-qft-scalar-vacuum-moments`, `pthm-qft-example-dirac-magnetic-benchmark`, `pthm-qft-free-fock-statistics`, `texp-qft-qed-neutral-cell`, `cex-qft-point-operator-assumption`, `def-qft-free-scalar-model`, `ex-qft-dirac-rotation-parity`, `ex-qft-mode-occupations`, `ex-qft-scalar-vacuum-correlation`, and `ex-qft-x09`. No conclusion or hypothesis needed repair for this clarification.

One source-attribution defect in an unassigned descendant remains for owner routing; it is recorded in the findings JSON below.

## Page verdicts

- `qft-mf03` (A): substantive review passes after the listed in-scope repairs. Its statements remain conditional mathematical results in the named QFT-MF01/MF02 supplier chain; no empirical or universal spin-statistics claim is made. Proof-layout certification is blocked by the renderer issue below.
- `qft-mf03-examples` (B): substantive review passes after the rest-fiber example now explicitly identifies each (S_3) spin-component eigenspace. No B-page prose was changed. Proof-layout certification is blocked by the same renderer issue.

## Blocker and coverage note

The required final batched `proof-layout` invocation was attempted on all five changed items, but the renderer could not load `@/components` from the sibling `prestige-intelligence/web/components/library/ItemBody.tsx`; the sibling checkout has no installed `tsx` loader. The command failed before it could inspect proof rows. Item-specific reflow and precheck passed for all five items, but I do not claim a proof-layout pass. I did not edit the sibling application checkout.

The only uneditable finding is the source-attribution error in `def-qft-free-dirac-model`; its actual test domain is now explicit in the assigned locality carrier, but its Fact still attributes that vector-valued definition to the scalar/Fock supplier. Consumer checking here was limited to compatibility with the unchanged test domain, not a full independent re-audit of all 22 descendant proofs.
