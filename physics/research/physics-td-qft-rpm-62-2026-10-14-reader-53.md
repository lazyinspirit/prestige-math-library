# Step 3a reader report — batch 53

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `53`

## Page verdicts

| Page | Verdict |
|---|---|
| `qft-g02` (A) | No remaining page-level defect. The summary accurately describes the two adopted model conventions and their conditional results. |
| `qft-g02-examples` (B) | No remaining page-level defect. The summary accurately describes both conditional thought experiments. B-page prose was read-only and was not edited. |

The prerequisite page summaries `qft-g01`, `qft-mg02`, and `qft-mg03` were also opened. They match the relevant free-photon, finite-graph, and formal-matrix supplier roles. The assigned pages contain five and two items respectively; every listed item was opened.

## Assigned inventory

- `qft-g02`: `post-qft-formal-qed-coefficients`, `post-qft-compact-lattice-gauge-model`, `pthm-qft-lattice-gauge-existence`, `pthm-qft-lattice-gauge-ward`, `pthm-qft-qed-formal-ward`.
- `qft-g02-examples`: `texp-qft-qed-infrared-sequence`, `texp-qft-lattice-charged-operator`.

Dependency interfaces and relevant arguments opened for these items included:

- QED conventions and currents: `def-qft-framework-units`, `def-qft-qed-formal-ring`, `def-qft-qed-gauge-data`, `def-qft-qed-finite-graph-gauge-data`, `def-qft-dirac-projections`, `def-qft-scalar-mass-shell`, `lem-qft-qed-formal-matrix-ward`, `lem-qft-qed-tree-ward`, `lem-qft-qed-conserved-current-gauge`, `lem-qft-free-time-ordered-kernel`, and the relevant two-point/causal-support interfaces from `lem-qft-smeared-free-scalar` and `lem-qft-scalar-causal-commutator`.
- Finite-graph regulator and Ward chain: `def-qft-compact-lattice-gauge-data`, `post-qft-constructed-model-and-measurement`, `lem-qft-fock-ccr-car`, `lem-qft-finite-mode-occupation-basis`, `lem-qft-lattice-gauss-projection`, `lem-qft-lattice-hamiltonian-selfadjoint`, `lem-qft-lattice-physical-evolution`, `lem-qft-lattice-local-gauss-flux`, `lem-qft-lattice-ward-identities`, `lem-qft-lattice-ward-contact`, and `lem-qft-qed-gauss-localization`.
- Free-photon and infrared chain: `post-qft-free-photon-model`, `def-qft-photon-transverse-space`, `def-qft-qed-photon-energy-multiplier`, `lem-qft-photon-covariance-spectrum`, `def-qft-fock-and-test-spaces`, `lem-qft-second-quantized-spectrum`, and `lem-qft-qed-coherent-ir-obstruction`.
- Mathematical suppliers checked at the exact used statements included `def-countable-choice`, `def-axiom-of-choice`, `thm-stone-one-parameter-unitary-groups`, `thm-determinant-multiplicative`, the sphere chart/polar-measure results, the degenerate-box null-set result, and the cited Fourier, exponential, logarithm, Fubini, dominated-convergence, and Cauchy–Schwarz interfaces. The relevant SI and spacetime interfaces `def-sr-si-units-and-coordinate-conventions`, `def-em-si-conventions`, `def-em-electromagnetic-tensor`, `def-sr-affine-minkowski-model`, and `def-inertial-frame-and-inertial-chart` were opened.

## Repairs

1. In `items/pthm-qft-lattice-gauge-existence.md:6`, changed the title from “Actual interacting physical Gauss-sector dynamics” to “Finite-regulator physical Gauss-sector existence and dynamics.” The title called the result interacting, while the actual model at `items/def-qft-compact-lattice-gauge-data.md:72-78` permits every plaquette and matter-interaction coefficient to vanish; only `lambda_E` is required positive. The theorem and proof still establish the stated sector and unitary dynamics in that allowed case. I read the downstream assigned consumers `pthm-qft-lattice-gauge-ward` and `texp-qft-lattice-charged-operator`; neither assumes nonzero interaction coefficients.

2. In `items/texp-qft-lattice-charged-operator.md:6`, changed the title from “Charged regulator insertion requires boundary flux change” to “Boundary-flux commutation obstructs charged regulator insertions.” The precise conclusion at `items/texp-qft-lattice-charged-operator.md:45-55` is conditional on preserving the physical sector and boundary electric domains: under those hypotheses, boundary-electric commutation forces the regional-charge commutator to vanish. The earlier title read as an unconditional claim that boundary-flux change is the only way to evade the result.

Both changes were title-only. The Statements, hypotheses, proof steps, derivation IDs, citations, physical scopes, and dependency roles remain unchanged. The current batch proof-contract entries contain no title field and still match the unchanged arguments; neither carrier had a `verification.judge` record, so none was removed. No contract edit was needed for these title corrections.

No defect was found in the page prose or in the mathematical conclusions after inspecting their stated assumptions and the relevant supplier arguments. The physical items use explicit conditional model premises and make no empirical claim.

## Source review and limits

Tong’s author-hosted *Quantum Field Theory*, Chapter 6 §6.5, lists the QED vertex and free photon/fermion factors. The inspected formulas agree after the item’s declared mapping `g=-e_n` and `h=-eta`; the local postulate explicitly excludes using the off-shell rational fermion factor at its pole. [Tong, Chapter 6](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html)

Emonts and Zohar §2.1 describes compact U(1) link rotors, integer electric eigenvalues, and the link group-element shift; §2.2 describes the gauge constraint and physical Hilbert space. The local finite-graph model is defined independently and is not attributed as their exact worked model. [Emonts and Zohar, §§2.1–2.2](https://arxiv.org/html/1807.01294)

Direct retrieval of the cited Kogut PDF timed out, so I did not independently verify its printed-page locator. The accessible Emonts–Zohar text supports the relevant compact-link and Gauss-law context; no citation in the assigned claims was shown to misstate a result from Kogut.

## Validation and blocker

- `reflow.mts` ran on both changed items; it changed proof paragraph line wrapping only.
- `precheck.mts` passed on both changed items.
- The required single batched `proof-layout.mjs` command was attempted for both items, but the renderer failed before checking them: Node could not resolve `@/components` imported by `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. Thus proof-layout status is blocked by the renderer import environment; no proof-layout pass is claimed.

## Uneditable defects

None confirmed. The findings JSON contains an empty array.
