# Step 3a reader report — batch 15

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `15`

## Inventory opened

Assigned pages:

- `emx-waveguide-scattering-channels` — [library/classical-electromagnetism/emx-waveguide-scattering-channels.md](../library/classical-electromagnetism/emx-waveguide-scattering-channels.md), draft A page.
- `emx-waveguide-scattering-channels-examples` — [library/classical-electromagnetism/emx-waveguide-scattering-channels-examples.md](../library/classical-electromagnetism/emx-waveguide-scattering-channels-examples.md), draft B page.

The A page requires `em-waveguides-and-cavities`, `emx-anisotropic-reciprocal-optics`, `emx-passive-dispersive-materials`, and `emx-weak-boundary-energy`; each page was opened for the relevant page and supplier context. The B page requires the assigned A page. I also inspected the relevant guide-geometry and mode-result context cited by the port-model remark.

Assigned items, read in supplier-before-consumer order:

1. `def-emx-port-scattering-model` — [items/def-emx-port-scattering-model.md](../items/def-emx-port-scattering-model.md).
2. `pthm-emx-scattering-contraction` — [items/pthm-emx-scattering-contraction.md](../items/pthm-emx-scattering-contraction.md).
3. `pthm-emx-scattering-reciprocity` — [items/pthm-emx-scattering-reciprocity.md](../items/pthm-emx-scattering-reciprocity.md).
4. `ex-emx-single-port-lossless-reflection` — [items/ex-emx-single-port-lossless-reflection.md](../items/ex-emx-single-port-lossless-reflection.md).
5. `ex-emx-omitted-channel-subunitarity` — [items/ex-emx-omitted-channel-subunitarity.md](../items/ex-emx-omitted-channel-subunitarity.md).

Proof-relevant suppliers and their used statements were opened: `def-countable-choice`, `def-emx-reciprocal-phasor-medium`, `def-emx-anisotropic-plane-symbol`, `pthm-emx-lorentz-reciprocity`, `pthm-emx-weak-poynting-uniqueness`, `def-emx-finite-energy-boundary-model`, `post-em-material-closure`, `post-emx-lorentz-medium`, `post-emx-drude-current-closure`, `pthm-em-macroscopic-maxwell`, `def-em-fields`, `def-em-polarization-magnetization`, `def-em-si-conventions`, `def-em-lab-geometry`, `def-euclidean-inner-product`, `lem-the-divergence-and-curl-of-a-cross-product`, `thm-algebra-of-derivatives`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`. The batch-15 proof-contract file was also checked as supporting evidence, not as a verdict.

## Review and findings

`def-emx-port-scattering-model` explicitly defines the phasor fields, port modes, amplitude units, power pairing, wall convention, uniqueness assumptions, and separate bilinear reciprocity pairing. The finite scattering map follows from the assumed linear solution map; no existence or completeness result is inferred. Its TikZ diagram correctly shows both incoming arrows directed toward the device and outgoing arrows away from it. The proof is independent of the diagram.

The contraction theorem's two oscillator calculations, local Poynting identity, period integration, boundary-power bookkeeping, contractivity conclusion, and finite-dimensional unitarity argument are valid under the stated smoothness, periodicity, closure, wall, and channel assumptions. The reciprocity theorem correctly keeps ordinary-transpose symmetry separate from Hermitian power, derives the bilinear matrix identity from the Lorentz identity and declared port pairing, and verifies its zero-loss branch calculations. Neither theorem makes an empirical claim.

The one-port example correctly derives `|r| = 1` under the stated lossless hypotheses and presents frequency-dependent phase freedom only as an algebraic possibility. The omitted-channel example correctly computes the full swap map and its rank-one compression; the zero recorded component represents power in the omitted channel, not absorption.

One uneditable citation-scope defect remains in assigned item `def-emx-port-scattering-model`, at `sources.references` entry 1 (`items/def-emx-port-scattering-model.md`, lines 28–30). The Beisert locator attributes finite propagating-mode count to “the stated waveguide class,” but the cited Chapter 13 derivation treats the conducting-wall waveguide eigenproblem with vacuum Maxwell fields. The assigned definition permits a broader uniform lossless reference guide with unspecified transverse coefficient and wall models. Since the finite channel list is explicitly assumed in the definition, this mismatch does not invalidate the conditional model; the locator should be qualified to the source's ideal conductor guide setting, or replaced with a source proving the claim for the broader stated class. See [Beisert, §13.4–13.5, PDF pp. 156–157](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf#page=157).

## Page verdicts

- `emx-waveguide-scattering-channels`: acceptable as a draft page. Its item placement and required-page links are coherent. The citation-scope defect above belongs to its assigned port-model definition.
- `emx-waveguide-scattering-channels-examples`: acceptable as a draft companion page. Its A-page prerequisite and both examples are coherent.

## Edits and blocker

No files were edited. This reader assignment is read-only, so the citation correction remains for owner disposition. No blocker remains. No item formatter, reflow, or precheck was run because no item changed.

## Coverage note

All assigned pages and items were opened, together with the statements and proof-relevant direct suppliers used above. This was not a full audit of every published mathematical supplier's own transitive proof closure. The cited Kong book and Purdue ECE 604 PDF in the reciprocal-phasor supplier were not retrievable through the source tool; no conclusion here depends on those two citations. The local reciprocal and scattering arguments were checked directly, and the accessible Chew waveguide text, NIST waveguide-circuit paper, Beisert notes, Tong notes, and Fitzpatrick notes were inspected at the cited passages relevant to this review.
