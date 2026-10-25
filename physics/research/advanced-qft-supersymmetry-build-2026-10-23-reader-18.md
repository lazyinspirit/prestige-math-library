# Step 3a reader report — batch 18

Run: `advanced-qft-supersymmetry-build-2026-10-23`

Role: independent reader. Scope: batch `18`.

## Verdict

The two assigned pages have correct frontmatter inventories and no Markdown summaries. All seven assigned items were reviewed. The analytic positivity, finite moment constraints, contact-jet map, and order-two example are sound under their stated conditional mathematical assumptions. I repaired three proof omissions and one contour-diagram label. Three uneditable published-supplier defects remain in two Riemann-integral theorems; they are routed in the findings JSON.

No blocker prevents review of the assigned items. The report records limits on the transitive audit of published mathematics and on nonlogical page context below.

## Opened inventory

### Assigned pages

| Page ID | Carrier | Verdict |
|---|---|---|
| `qftx-eft-dispersion-and-bootstrap` | `library/quantum-field-theory-mathematics/qftx-eft-dispersion-and-bootstrap.md` | Pass. Draft mathematics page; all six assigned A-page item IDs match the manifest, prerequisites resolve, and the body is empty. |
| `qftx-eft-dispersion-and-bootstrap-examples` | `library/quantum-field-theory-mathematics/qftx-eft-dispersion-and-bootstrap-examples.md` | Pass. Draft mathematics B page; the example is listed once under `examples`, the A-page prerequisite is present, and the body is empty. |

Both retain `page_layout: compact-v1`. The required page contexts were opened: `qftx-eft-operator-quotients`, `qftx-on-shell-amplitudes`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `line-integrals-and-the-gradient-theorem`, `improper-integrals`, and `properties-of-the-integral-and-the-working-ftc`. The current local operator-quotient page and its relevant definition, quotient definition, and finite-dimensionality lemma were checked. The published on-shell-amplitudes page was checked as nonlogical context; no assigned item has a logical dependency on its four listed claims.

### Assigned items, in dependency order

1. `def-aqft-scattering-amplitude-input` — `items/def-aqft-scattering-amplitude-input.md`.
2. `lem-aqft-crossing-even-forward-amplitude` — `items/lem-aqft-crossing-even-forward-amplitude.md`; `def-aqft-truncated-amplitude-bootstrap-problem` — `items/def-aqft-truncated-amplitude-bootstrap-problem.md`.
3. `thm-aqft-gapped-scalar-forward-positivity` — `items/thm-aqft-gapped-scalar-forward-positivity.md`.
4. `prop-aqft-finite-truncated-bootstrap-constraints` — `items/prop-aqft-finite-truncated-bootstrap-constraints.md`.
5. `prop-aqft-quartic-contact-jet-matching` — `items/prop-aqft-quartic-contact-jet-matching.md`.
6. `ex-aqft-scalar-positivity-bound` — `items/ex-aqft-scalar-positivity-bound.md`.

Direct mathematical suppliers used by the assigned proofs were opened: `thm-cauchy-integral-formula-circle`, `lem-cauchy-difference-quotient-exceptional-extension`, `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain`, `def-star-shaped-open-subset-of-rn`, `def-improper-integral-at-infinity`, `thm-linearity-of-improper-integrals`, `thm-monotonicity-of-the-integral`, `thm-comparison-test-for-improper-integrals`, `def-aqft-local-operator-and-dimension`, `def-aqft-operator-basis-quotient`, `lem-aqft-finite-order-local-operator-space-finite-dimensional`, and `def-reductive-and-linearly-reductive-over-c`. The linked counterexample `fs-nonnegative-integrable-with-zero-integral-vanishes` and its continuous-case repair `thm-nonnegative-continuous-with-zero-integral-vanishes` were opened to check the published monotonicity statement.

The batch manifest, page carriers, proof contracts, coverage record, cross-batch dependency file, and authoring notes were inspected as navigation/evidence, not treated as verdicts. The current `def-aqft-local-operator-and-dimension` Definition was reread after its source changed during this review, and the batch-18 proof-contract quotation was updated to bind the current text.

## Mathematical review and edits

| Item | Review and disposition |
|---|---|
| `def-aqft-scattering-amplitude-input` | Its formal amplitude-data scope, crossing action, pole subtraction, two-cut domain, continuous-bank assumption, growth condition, endpoint conditions, and nonnegative absorptive input are explicit. The definition does not assert that such data come from a physical QFT or assign signs to generic off-shell coefficients. No edit. |
| `lem-aqft-crossing-even-forward-amplitude` | Substitution of the crossing action and the crossing-paired subtraction gives evenness; differentiability at zero gives the vanishing first derivative. No edit. |
| `def-aqft-truncated-amplitude-bootstrap-problem` | The normalized coordinates are dimensionless under the stated mass units; each finite index range stays within `0,…,N`. The feasible tests are correctly described as necessary, not sufficient. No edit. |
| `thm-aqft-gapped-scalar-forward-positivity` | In F1 and F10 and Steps 4.1–6.1, I made the exact cut-bank limits, local Riemann-integrability condition, compact-product argument, arbitrary Taylor truncation order, and integrated remainder bound explicit. In the Remarks/TikZ label, I changed the contour label to `Γ_{R,η,ε}` to match the contour with threshold detours. The omitted threshold arcs remain identified as suppressed in the schematic, and the proof does not use the diagram. |
| `prop-aqft-finite-truncated-bootstrap-constraints` | In F1/F6 and Steps 2.1–4.1, I added a local Darboux argument establishing Riemann integrability of all finite-truncation products, stated the local-integrability hypothesis when invoking the comparison theorem, and renumbered the steps into the canonical phases. The change of variables `x=ν₀²/ν²` and `w=(2ν₀²/π)ρ/ν³` gives the moment sequence; the Hankel and two interval-localizer forms are exactly integrals of nonnegative functions. The moment-index bounds, including `N=1`, are correct. |
| `prop-aqft-quartic-contact-jet-matching` | In Step 2.2, I stated that the explicit forward kinematics from Step 1.1 realize the replacement rules for every real `s>4m²`; the zero on-shell vertex therefore makes the forward polynomial vanish on an interval before polynomial identity is used. The certified identity/divergence/free-EOM relations annihilate the polarized vertex, and the `O₈` polarization has eight terms for each of three pairings and gives `8m⁴+4v²`. The map remains a one-contact polynomial map, not an exact quantum amplitude. |
| `ex-aqft-scalar-positivity-bound` | The order-two tests are `b₀≥0`, the 2×2 Hankel condition, `b₁≥0`, and `b₀-b₁≥0`. The passing determinant is `1/12`; the failing witness gives `-1/8`. No extension to a full amplitude or QFT is asserted. No edit. |

The assigned theorem contains the only TikZ diagram. Its upper-bank segment and outer and inner arc orientations match the proof; the threshold detours are deliberately omitted and identified in the remark. The curve label now names the full `ε`-detoured contour. No other assigned carrier has a TikZ/tikzcd diagram requiring review.

### Changes and validation

- Edited the proofs of `thm-aqft-gapped-scalar-forward-positivity`, `prop-aqft-finite-truncated-bootstrap-constraints`, and `prop-aqft-quartic-contact-jet-matching`; no Statement or Definition was changed and no public interface changed.
- Updated the corresponding derivation and step-use records in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-18.proof-contracts.json`; also refreshed the contact-jet supplier quotation against the current in-run Definition.
- Reflow and precheck passed for all three changed items. Strict proof-contract validation passed for all seven assigned items (`0 errors, 0 warnings`). The final proof-layout run covered all three changed items: `3 items, 17 steps, 0 defects`. `git diff --check` passed for the changed items and contract.

## Source review

- [Adams et al., “Causality, Analyticity and an IR Obstruction to UV Completion”](https://arxiv.org/pdf/hep-th/0602178), §4, PDF pp. 14–16, equations (19)–(24): the forward contour, the crossing-related pole terms, the optical-theorem sign, and the positive spectral integral in the examples considered. The local theorem supplies its own massive gap, compact-bank, endpoint, and uniform `o(|v|²)` assumptions; Adams et al.’s massless/IR-regulated and model-specific qualifications are not dropped into the local claim.
- [de Rham et al., “Positivity Bounds for Scalar Theories”](https://arxiv.org/pdf/1702.06134), §§2.1–2.2, equations (1)–(15), PDF pp. 1–3: the partial-wave normalization and unitarity sign, two-subtracted dispersion relation, crossing variable, and positive forward moments. Their finite matrix/localizer tests are not attributed as the source theorem; those are derived locally from the moment representation.
- [Basile et al., *Lectures in Quantum Gravity*](https://arxiv.org/pdf/2412.08690.pdf), §3.3.1, printed pp. 96–97, equations (3.111)–(3.115): the conditional contour representation and second-derivative positivity. The PDF front matter identifies the work as a SciPost lecture-notes submission.
- [Criado and Pérez-Victoria, “Field redefinitions in effective theories at higher orders”](https://arxiv.org/pdf/1811.09413), §2 around equations (2.2)–(2.6), PDF pp. 5–7, and Appendix B, equations (B.1)–(B.11), PDF pp. 32–33: the change-of-variables Jacobian/source terms and the distinction between one and multiple EOM insertions. The contact result proves its own finite polynomial identity and imports no quantum-equivalence claim.

These are the source sections opened in this review. I did not perform the source-fetch stamping command, and I do not claim to have independently read every page of each cited PDF.

## Uneditable published-supplier defects

The following defects remain in published mathematical suppliers. The assigned uses of the affected statements supply the required valid portions/local integrability, so they are nonfatal for these consumers; the published carrier itself still needs owner disposition.

- `thm-monotonicity-of-the-integral`, `## Statement`, lines 52–57: the prose labels as false the true assertion that a nonnegative Riemann-integrable function with zero integral can be positive at infinitely many points, and the same paragraph conflicts with its opening sentence. The opened linked item `fs-nonnegative-integrable-with-zero-integral-vanishes` supplies Thomae’s function, which is integrable with zero integral and positive at every rational point. The assigned consumers are `thm-aqft-gapped-scalar-forward-positivity` and `prop-aqft-finite-truncated-bootstrap-constraints`; both use only the valid nonnegativity/monotonicity claims.
- `thm-monotonicity-of-the-integral`, `## Statement`, lines 52–62: the statement prose is malformed (including “and that is A continuous…”) and contains `[[def-oriented-integral]]` before the complete Statement ends, rather than in the following references section. The same two assigned consumers reach this published dependency.
- `thm-comparison-test-for-improper-integrals`, `## Statement`, lines 32–34: the statement does not include local Riemann integrability of the compared functions, although its Facts & Assumptions section gives that condition. The assigned theorem and proposition now establish the required local integrability before applying comparison; the supplier statement remains incomplete. The assigned consumers are `thm-aqft-gapped-scalar-forward-positivity` and `prop-aqft-finite-truncated-bootstrap-constraints`.

## Coverage limits

All assigned carriers, assigned pages, and direct in-use supplier statements were opened. I did not audit the complete transitive supplier closures of published mathematical results, and I inspected `qftx-on-shell-amplitudes` only at page level because no assigned proof cites its listed items. For the operator-quotient path, I opened `def-aqft-local-operator-and-dimension` and `def-aqft-operator-basis-quotient` before discovering their respective lower suppliers; the lower `def-reductive-and-linearly-reductive-over-c` and finite-dimensionality lemma were then opened before reviewing the contact-jet proposition. The current local-operator Definition was re-read after a concurrent source change and its contract quote was updated. These limits do not leave an unresolved mathematical question in the assigned results.
