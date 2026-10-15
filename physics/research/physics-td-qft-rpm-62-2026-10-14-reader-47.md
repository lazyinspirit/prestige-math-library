# Reader report — batch 47

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `47`

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qft-mx03.md` (A page)
- `library/quantum-field-theory-mathematics/qft-mx03-examples.md` (companion examples page)

Assigned items, reviewed in dependency order:

- `lem-qft-example-four-dimensional-radial-measure` — no edit.
- `lem-qft-example-cutoff-integrals-and-series` — repaired.
- `thm-qft-example-soft-current-angular-coherent` — repaired.
- `ex-qftmath-x06` — repaired.
- `ex-qftmath-x07` — repaired.

Current-run supplier carriers opened before their consumers:

- Batch 41: `def-qft-example-data`.
- Batch 37: `def-qft-fock-and-test-spaces`, `lem-qft-segal-weyl-domain`, and `lem-qft-second-quantized-spectrum`.
- Batch 44: `def-qft-photon-transverse-space`.
- Batch 45: `def-qft-qed-photon-energy-multiplier` and `lem-qft-qed-coherent-ir-obstruction`.

I opened the cited mathematical statements needed for the checks, including the polar and change-of-variables formulas, null-set and Tonelli results, chart-surface measure, rational-box density and countability results, integration by parts and improper-integral results, logarithm and exponential definitions/laws, factorial and power definitions, and the power-series radius definition. The QX08 proof contract records source interfaces and exact locations. I cross-checked the relevant context in Folland, [*Real Analysis*, 2nd ed., Theorem 2.49](https://djvu.online/file/NPF4BEtSuqdFA); John McCuan, [“The Volume of Unit Balls,” pp. 2–8](https://mccuan.math.gatech.edu/courses/6702/ballvolume.pdf); David Tong, [QFT Ch. 2 §2.3](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html) and [Ch. 6 §6.2.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html); and Mark Srednicki, [author-hosted draft §§55 and 59](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf). Those QFT references were used to check terminology and model context, not as proof of a physical prediction or empirical claim.

The local mathematical source carriers opened include `def-countable-choice`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `cor-c-one-change-of-variables-for-l-one-functions`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, and `def-surface-integral-on-a-compact-c-one-hypersurface`; `thm-ftc-second-part`, `thm-logarithm-derivative-and-integral`, `thm-sine-and-cosine-derivatives`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-principal-inverse-sine-and-cosine`, `thm-principal-inverse-sine-and-cosine-derivatives`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`, `thm-derivative-of-exponential`, `thm-integration-by-parts`, and `lem-derivative-of-a-power`; `def-real-power-series-and-radius-of-convergence`, `def-factorial-and-falling-factorial`, `def-integer-power`, `def-complex-exponential`, `lem-complex-exponential-series-converges-everywhere`, `thm-complex-exponential-addition-and-real-extension`, `def-real-exponential-function-and-e`, `def-natural-logarithm`, and `thm-exponential-is-strictly-increasing`; and `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `thm-product-of-countable`, `def-euclidean-inner-product`, `lem-countable-iff-surjection-from-n`, and `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`. Their source sections and quotations are recorded in the batch proof-contract file.

## Repairs and evidence

- `items/lem-qft-example-cutoff-integrals-and-series.md`: replaced `e^{-x}` with `\exp(-x)` to distinguish the exponential from the SI charge `e`; declared the factorial, integer-power, and real-power-series-radius prerequisites; and proved radius zero directly from the radius definition. For each `λ>0`, successive term magnitudes eventually have ratio greater than `2`; for any proposed radius `r>0`, the point `λ=r/2` therefore contradicts absolute convergence throughout `|λ|<r`. The proof contract now cites `def-real-power-series-and-radius-of-convergence`, `def-factorial-and-falling-factorial`, and `def-integer-power`.

- `items/thm-qft-example-soft-current-angular-coherent.md`: disambiguated the exponential notation from SI charge `e`; defined the prescribed rational current and its units, the leg data/orientations, and the timelike meaning of “massive”; explicitly disclaimed a scattering-amplitude factorization claim; repaired the length-momentum vector sentence; and defined phase classes, their quotient distance, and projective convergence. Step 1.2 now proves separability using rational-box density and the bounded transverse projection. Step 3.1 proves the weighted energy-coordinate to length-momentum unitary, including its inverse and null-set/equivalence-class justification. Step 7.1 now defines its cutoff and state sequence within the theorem’s admissible range and proves nonconvergence in the stated projective metric. The Borel-only substitution citation was replaced with the L¹ change-of-variables corollary; Facts F16–F19 and their direct prerequisites were added for the zero-integral criterion, exponential laws, factorial/power conventions, and strict monotonicity. The proof contract was synchronized with the new step order and source interfaces.

- `items/ex-qftmath-x06.md`: made the two leg labels, charges, velocity direction, and energies explicit; distinguished Euler’s `\mathrm e=\exp(1)` from the SI charge `e`; and justified `\mathrm e>1`, hence `0<\lambda=\Lambda/\mathrm e<\Lambda`, using strict monotonicity of the real exponential. The halving sequence is now defined from the example’s actual lower cutoff, and its ray-distance conclusion uses the definition supplied by QX08. The proof contract now quotes the current QX08 Statement and the new exponential/logarithm sources.

- `items/ex-qftmath-x07.md`: replaced the undefined `QX09` shorthand with the exact supplier reference and uses `\exp(-x)` to avoid the charge/exponential collision. Its proof contract now quotes the revised supplier Statement.

The affected batch proof-contract file is `research/physics-td-qft-rpm-62-2026-10-14-batch-47.proof-contracts.json`. No edited item carried a `verification.judge` record to remove. No page prose was changed.

## Uneditable findings

1. `qft-mx03-examples`, paragraph 1, uses the phrase “energy cutoff ratio `e`” without defining the symbol there. It is ambiguous with the SI charge `e` in `def-qft-example-data`; the assigned example uses `\mathrm e=\exp(1)`. This is a nonfatal notation defect in companion-page prose, which is outside the reader’s authorized page-edit scope.
2. `pthm-qft-example-soft-coherent-counts`, Facts & Assumptions [F8], attributes the separability proof to QX08 Step 3.1. In the current QX08 proof, Step 1.2 proves separability and Step 3.1 proves the unitary conversion. The separability claim remains supported, but its step citation is stale. This batch-55 carrier is outside batch 47.

## Page verdicts

- `qft-mx03` (A page): no defect found in its prose or summary; no edit.
- `qft-mx03-examples` (companion examples page): one nonfatal, uneditable `e` notation ambiguity reported above; no edit.

## Validation and blocker

- Reflow: `unchanged` for all four edited items.
- Precheck: passed for all four edited items, zero failures.
- Proof layout: `4 items, 20 steps, 0 defects`. The isolated renderer required a temporary alias resolver under `/private/tmp`; no application or renderer source was modified.
- No experiment or empirical-statistical claim is established by these mathematical items. The coherent-sector quantities are model Hilbert-space norms; the weak-zero and no-strong-limit conclusion remains conditional on the stated Q8 supplier.

The assigned batch manifest `research/physics-td-qft-rpm-62-2026-10-14-batch-47.pages.json` still records the pre-reader dependency sets. The current carriers add direct prerequisites to the cutoff lemma (three), replace QX08’s Borel substitution supplier with the L¹ corollary and add seven other prerequisites, and add three prerequisites to `ex-qftmath-x06`. I did not edit the generated assignment manifest. The run owner must reconcile the dependency metadata and refresh the applicable frozen artifacts before the split/gates; this is the handoff blocker.

Coverage limitation: I inspected all assigned carriers, the named current-run QFT suppliers, and the cited local mathematical statements needed for these arguments, but did not independently re-prove every transitive published foundational dependency.
