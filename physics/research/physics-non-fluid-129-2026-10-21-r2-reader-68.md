# Step 3a reader report — batch 68

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `68` only

## Assigned inventory opened

Pages:

- `library/quantum-field-theory-mathematics/qftx-local-algebras.md` (A, draft)
- `library/quantum-field-theory-mathematics/qftx-local-algebras-examples.md` (B, draft)

Items, reviewed in supplier-before-consumer order:

1. `def-qftx-green-hyperbolic-interface`
2. `lem-qftx-compact-green-support-overlap`
3. `lem-qftx-smooth-scalar-cauchy-evolution`
4. `thm-qftx-green-hyperbolic-existence`
5. `lem-qftx-green-propagator-symplectic-quotient`
6. `def-qftx-free-weyl-net`
7. `lem-qftx-free-weyl-functoriality`
8. `lem-qftx-causal-time-slice-test-localization`
9. `lem-qftx-free-locality`
10. `thm-qftx-free-time-slice`
11. `prop-qftx-local-projection-no-signal`
12. `ex-qftx-postselection-conditioning`

I opened the design section at `research/frontier-expansion-2026-10-19/quantum-field-theory/prose-scaffold.md#qftx-local-algebras--causal-propagators-time-slice-and-algebraic-locality`, its plan-track entry, the current plan-spec entries, the batch manifest, batch notes, coverage, proof contracts, and current author-check evidence. These were context only; I checked the live item and page carriers independently.

## Mathematical review

- The Green interface specifies the Lorentzian metric and potential, density pairing, test and output topologies, operator, Green identities, causal support, and Cauchy uniqueness. The compact-overlap lemma proves the needed support compactness using finite covers by compact causal diamonds; it does not assume that causal futures of compact sets are closed.
- The scalar Cauchy-evolution proof reduces `-Box_g + V` to a symmetric first-order system, proves the metric-cone energy inequality, and derives compact-slab support and seminorm bounds. Its global argument does not require compact Cauchy surfaces or globally bounded coefficients. The Green-map existence proof then establishes both inverse identities, support, uniqueness, continuity in the stated LF/output topologies, formal self-adjointness, and arbitrary smooth spacelike Cauchy-surface uniqueness.
- The causal propagator quotient proof establishes the kernel identity and skew-adjoint pairing using compact closed support overlaps; the proof does not claim surjectivity onto all spacelike-compact solutions. The algebraic Weyl definition makes no Hilbert representation or C*-completion claim.
- The functoriality proof checks well-definedness, symplecticity, the Weyl relations, local generators, identity, and composition. Its TikZCD square has the same source and target on the direct and composite paths; the proof is algebraic and does not depend on the diagram.
- The time-slice localization proof handles tests supported in all of `M`, not just in `U`, and obtains compact support of the replacement by a compact causal shadow in `M`. The resulting theorem proves algebra surjectivity and makes the isomorphism conclusion conditional on injectivity of the symplectic quotient map.
- The algebraic locality proof uses causal disjointness and Green support to make the symplectic pairing zero. The local-operation proposition proves the nonselective identity for arbitrary commuting unital *-subalgebras and normalized finite Kraus families. The two-qubit example correctly distinguishes the conditional branch values from the outcome-averaged expectation. These are mathematical deductions; none is presented as an observed experiment or as evidence that an apparatus realizes the operators.

I opened the 49 unique direct dependency entries and checked the exact supplier statements used by the proofs, including the Cauchy-temporal splitting, periodic symmetric-hyperbolic existence and smooth persistence, Sobolev embedding, local causal-cone and position-vector results, causal compactness and limit-curve results, Cauchy-set topology, curve conventions, partitions, divergence and Gronwall. The direct set also includes the in-run supplier `def-qftx-distributions-on-smooth-manifolds` from batch 58; its current density transformation law and test-density topology support the Green interface. The 12 direct root-mathematics snapshots named by `research/math-imports.json` were treated as read-only.

## Source review

- The run-local Bär–Ginoux–Pfäffle text was read at Theorem 3.2.11, Theorem 3.3.1, Definition 3.4.1, Corollary 3.4.3 and Lemma 3.4.4. It supports the standard normally hyperbolic Cauchy and Green-operator comparison results. The current scalar existence proof reconstructs the needed argument from the listed local symmetric-hyperbolic suppliers rather than importing BGP's global existence proof. [Bär, Ginoux and Pfäffle, *Wave Equations on Lorentzian Manifolds and Quantization*](https://arxiv.org/pdf/0806.1036)
- The pinned Fewster–Rejzner v2 text was checked in §4.2: equations (24)–(29) give its retarded/advanced sign convention, quotient and solution space; equations (31)–(33) give the Weyl phase from the symplectic form; the locality and time-slice discussion is in the same section. Its convention agrees with the local `E=E_- - E_+` and Weyl phase. [Fewster and Rejzner, *Algebraic Quantum Field Theory—an introduction*, v2](https://arxiv.org/pdf/1904.04051v2)
- Watrous §2.3.1, equations (2.199)–(2.202), supports the normalized outcome probabilities. Section 2.3.2, equations (2.224)–(2.228), states the outcome-conditioned remaining-register states. Trevisan §2.2, printed pp. 5–7, supports the projective-outcome update used in the finite two-qubit calculation. [Watrous, *The Theory of Quantum Information*, ch. 2](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf); [Trevisan, *Lecture Notes on Mathematical Aspects of Quantum Information Theory*](https://web.dm.unipi.it/trevisan/teaching/PhD/2022-qinfo/2022-Qinfo-notes.pdf)

## Repairs made

1. In `def-qftx-green-hyperbolic-interface`, I defined the orientation structure that the interface already assumed. In `def-qftx-free-weyl-net`, I defined causal convexity, orientation preservation, time-orientation preservation, and isometry for its morphisms. The Green-existence theorem now points to the exact orientation definition. I checked every direct and indirect batch-68 consumer of these definitions: `lem-qftx-compact-green-support-overlap`, `lem-qftx-smooth-scalar-cauchy-evolution`, `thm-qftx-green-hyperbolic-existence`, `lem-qftx-green-propagator-symplectic-quotient`, `lem-qftx-free-weyl-functoriality`, `lem-qftx-causal-time-slice-test-localization`, `lem-qftx-free-locality`, `thm-qftx-free-time-slice`, `prop-qftx-local-projection-no-signal`, and `ex-qftx-postselection-conditioning`. Their claims and uses remain consistent with the clarified definitions.

2. In `lem-qftx-smooth-scalar-cauchy-evolution`, I supplied the missing closedness argument for `J^+(Sigma)` used in the compactness of `J^-(q) intersect J^+(Sigma)`. The proof now derives `J^+(Sigma) = M \\ I^-(Sigma)` from the Cauchy partition, acausality, the no-closed-causal-curve result, and openness of chronology, all in the existing dependency closure. I also replaced the false sentence that an earlier subarc lies in `Sigma` with the endpoint/acausality argument, and corrected the final internal step range from `3.1–3.1` to `3.1–4.1`. The theorem's hypotheses and conclusions are unchanged. The Green-existence and time-slice consumers were rechecked.

3. In `lem-qftx-causal-time-slice-test-localization`, I corrected Fact F2: the cited Cauchy-set theorem states closedness of `Sigma`, its acausality and Cauchy partition, but does not itself state that `J^+(Sigma)` and `J^-(Sigma)` are closed. Fact F2 now derives those closures with the item's existing chronology-openness dependency. The time-slice theorem consumer was rechecked; its claim and proof remain unchanged.

4. I refreshed the affected proof-contract quotations and derivation claims in `research/physics-non-fluid-129-2026-10-21-r2-batch-68.proof-contracts.json`. No changed item had a `verification.judge` record to remove.

## Validation

- Reflow: all five changed items returned `unchanged`.
- Precheck: both definition items returned 0 checked / 0 failing; the three proof items passed (Green existence, Cauchy evolution, and causal time-slice localization).
- Final proof-layout command: 5 items, 16 steps, 0 defects.

## Page verdicts and remaining issues

- `qftx-local-algebras` (A): no page-carrier defect found. Its current four `requires` entries match the batch manifest and current plan-spec. The detailed design section names the three prior QFT pages only; the current Green-evolution proof directly uses suppliers from the additional GR14 page. I recorded this design/plan difference in the assigned batch notes and left the plan, page metadata, and manifests unchanged. The earlier batch notes also record an owner-held supplier-home metadata check; I did not rerun that plan validator or treat the prior note as a verdict.
- `qftx-local-algebras-examples` (B): no page-carrier defect found. It remains a draft example companion with its single assigned example; no B-page prose was edited.

No uneditable mathematical defects or blockers to this reader review remain. A full independent reproof of every transitive item in the large mathematical supplier closure was outside this review; I checked the direct suppliers and the transitive results needed at the cited proof steps, and I do not claim whole-closure audit coverage.
