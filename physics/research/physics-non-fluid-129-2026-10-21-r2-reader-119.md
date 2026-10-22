# Step 3a reader report — batch 119

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Scope: batch `119`

## Opened inventory

- Assigned pages: [tgrx-collapse-scattering](../library/thermodynamics-and-general-relativity-mathematics/tgrx-collapse-scattering.md) and [tgrx-collapse-scattering-examples](../library/thermodynamics-and-general-relativity-mathematics/tgrx-collapse-scattering-examples.md).
- Assigned items, reviewed in dependency order for the substantive audit: [def-tgrx-exponential-ray-channel](../items/def-tgrx-exponential-ray-channel.md), [prop-tgrx-collapse-channel-spectrum](../items/prop-tgrx-collapse-channel-spectrum.md), and [ex-tgrx-greybody-nonplanck](../items/ex-tgrx-greybody-nonplanck.md). The definition's opening section was first inspected while locating the source; its argument was assessed after the suppliers below were read.
- Batch evidence read as context, not as a verdict: `research/physics-non-fluid-129-2026-10-21-r2-batch-119.pages.json`, `.notes.md`, `.cross-batch-dependencies.json`, `.proof-contracts.json`, and `.coverage.json`.
- Page prerequisites opened: the published pages `tgr-mhs02`, `tgr-mhs03`, and `outward-rounded-interval-and-ball-arithmetic`. The assigned A/B pages have frontmatter-only bodies, consistent with this run's statement-first page layout. The A page's logical item suppliers are on `tgr-mhs02`; no item from `tgr-mhs03` is used in the assigned item dependency closures.
- Direct item suppliers opened: `def-countable-choice`, `cor-c-one-change-of-variables-for-l-one-functions`, `lem-tgr-exponential-current`, `lem-tgr-thermal-contour-spectrum`, `def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`, `lem-qft-segal-weyl-domain`, `lem-tgr-positive-damping-boundary`, `lem-nonnegative-square-root-exists-and-unique`, `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `thm-derivative-of-exponential`, `cor-exponential-reciprocal-and-positivity`, and `lem-mean-value-theorem-on-closed-interval`.
- Relevant supplier definitions/statements also checked: the Schwartz/test-function and tempered-distribution definitions; Hilbert and inner-product conventions; the Hilbert tensor, bounded tensor-map and permutation-sector results; the complex/real (L^2) statement; rational-box density; integration by parts, dominated convergence and Fubini; the logarithm/exponential definitions and derivatives; and the Fourier, complex-exponential, Cauchy and contour-integral statements used in the contour proof.

## Independent review

The definition specifies the positive coordinate map, its range and inverse, compact-test pullback, units, and the distributional lower-boundary convention. The χ rescaling cancels with the degree-(-2) kernel under the stated regularization. The positivity claim is the supplied Fock norm identity. The even/odd moment claim follows from the displayed finite-particle CCR recurrence, with the vacuum base cases. The distribution is never evaluated pointwise on its singular diagonal.

The proposition's scale change gives the stated seconds-coordinate covariance and spectrum, including the removable value (S_k(0)=k/(4π)); the stated detailed-balance identity follows by substitution. The two-mode matrix is orthogonal for every Γ∈[0,1]. On the finite-particle core, the tensor-factor CCR give the displayed output CCR; the environment vacuum removes the environment term, so the defined quadratic-form occupation is Γ times the input occupation. The Planck-profile deductions correctly distinguish preserving the same width (which forces Γ=1 pointwise) from the explicit nonconstant filter mapping width θ to (2θ). The profile identity is stated as a modewise algebraic result; it does not assert a continuum state-family realization or identify Γ with a four-dimensional scattering coefficient.

I checked the TikZ diagram against the displayed two-input/two-output rotation. The input/output order and direction agree with the matrix; the proof does not rely on the diagram.

The example's two-frequency notch has one strictly positive and one zero value, whereas every finite positive-width Planck profile is positive at both frequencies. Its conclusion is a constructed scalar filter result, not an empirical claim.

The supplied external sources were checked for the limited context claimed. Jacobson's complete lecture notes give the near-horizon exponential relation in §6.2.2, Eq. (6.21), and the thermal occupation with its packet transmission factor in Eqs. (6.25)–(6.26), where the factor is the stated wavepacket probability ([source](https://arxiv.org/pdf/gr-qc/0308048)). Hollands and Wald's collapse subsection states its Hadamard and asymptotic-ground-state hypotheses and gives the absorption-amplitude factor in Eq. (56), with the exponential-coordinate discussion in Eqs. (52)–(60) ([source](https://arxiv.org/pdf/1401.2026)). The assigned items use these as context and explicitly avoid importing those four-dimensional conclusions into the local algebraic model.

## Edits and uneditable defects

- Edits: none. The reader assignment is read-only.
- Confirmed defects remaining in the assigned items/pages: none.
- Other-batch or published defects found that route through an assigned item dependency closure: none.
- Blocker: none.

## Page verdicts

- `tgrx-collapse-scattering`: pass. Page identity, title, classification, prerequisite list, and item placement match the manifest. Its items state the model limits needed to distinguish the one-dimensional test-coordinate construction from four-dimensional collapse scattering.
- `tgrx-collapse-scattering-examples`: pass. Page identity, companion relation, classification, A-page prerequisite, and example placement match the manifest. The example's scope is appropriately limited to a numerical pointwise profile.

## Coverage limitation

I checked the assigned arguments and the exact direct supplier statements needed to trace their uses, and independently examined the local current and contour arguments. I did not re-audit every deeper proof in the transitive published mathematics foundation beneath those suppliers. No dependency's publication or readiness stamp was treated as a substitute for checking its interface and its use here. No validators were rerun because no carrier was edited.
