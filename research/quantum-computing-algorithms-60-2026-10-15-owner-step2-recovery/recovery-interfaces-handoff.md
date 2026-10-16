# Batch 19 recovery-interface source handoff

Source repair complete, pending independent owner acceptance and native workflow handling. No tests, validators, gates, hashes, manifests/contracts, engine controls or commits were performed.

Changed sources:
- `items/thm-qc-kraus-map-completely-positive.md`: retained the current native batch-5 standard ancillary basis repair; supplied `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` as F6 and a direct dependency, chose ordered orthonormal bases of H and K (including empty bases), and made A2 conditional on these factor bases. The Statement is unchanged.
- `items/def-qc-exact-recovery-of-a-quantum-code.md`: displayed the full typed physical recovery equation Ad_V composed with R, N and Ad_V on logical density operators. The original exactness condition is unchanged.
- `items/def-qc-correctable-subsystem-and-gauge-factor.md`: established Ad_J as a one-Kraus channel, channel closure under composition, and finite Kraus representation of the corrected channel; displayed the composite Kraus operators and the one-dimensional-reference specialization that supplies the marginal lemma hypothesis. The defining recovery condition is unchanged.
- `items/ex-qc-degenerate-code-kl-matrix.md` and `items/ex-qc-knill-laflamme-orthogonal-error-recovery.md`: changed recovery-construction prose citations from F1 to F3.

Genuine pre-edit source bytes are retained at `before/items/` in this evidence directory. The CP preimage was captured only after root explicitly cleared the drained native batch-5 repair writer, preserving that writer's ancillary basis correction. No batch-18 isometry source was edited.

Focused mathematical consumer checks: explicit recovery 2.2 uses the unchanged CP conclusion on its finite recovery family; marginal lemma 3.1/4.1 uses it on finite gauge/reset Kraus families; subsystem theorem 1.1/2.1/2.4 uses it on explicitly finite composites/recovery families; the examples use it on their displayed finite channels. The distance corollary uses the explicit recovery conclusion, including arbitrary finite references. Kraus–Choi 1.2 uses the unchanged finite-Kraus-to-CP implication; its other direction remains independent. Channels-compose-and-tensor 1.1/1.2/2.1 uses the unchanged CP conclusion on finite composite/tensor families. Both batch-19 page summaries remain accurate.

Definition consumers checked at their actual interfaces: KL necessity A1 uses exactly the original logical-channel equality; subsystem theorem F1/F11 uses the original marginal condition and one-dimensional gauge reduction. The three QC21 direct references (proper-code gadget definition, deviation/spread definition, encoded-instrument lemma) already use the correctly typed logical/referenced recovery identity; neither clarification changes their premises or conclusions. No accepted QC21 proof was reopened. The CP Statement did not change and therefore creates no additional premise propagation obligation.

Required final source-only layout command:
`node tools/proof-layout.mjs items/thm-qc-kraus-map-completely-positive.md items/def-qc-exact-recovery-of-a-quantum-code.md items/def-qc-correctable-subsystem-and-gauge-factor.md items/ex-qc-degenerate-code-kl-matrix.md items/ex-qc-knill-laflamme-orthogonal-error-recovery.md`

Actual result: `proof-layout: 5 items, 13 steps, 0 defects`.
