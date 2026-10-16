# Batch 2 linearity prerequisite source repair

Native final-review escalation: `research/quantum-computing-algorithms-60-2026-10-15-scope-review/batch-2/review-1.json`. Root cleared the held batch with no native writer and independently identified the missing published supplier. No statements or definitions changed.

Added direct dependency and labelled fact for the actual published `lem-composition-and-identity-linear-maps` in:
- `items/thm-qc-tensor-map-composition-and-adjoint.md`: F7 supplies linearity of the factor composites and composite tensor maps at 1.1, and factor/whole-space identities at 2.1, with corresponding justification tags.
- `items/thm-qc-partial-trace-characterization-and-basis-independence.md`: F9 supplies linearity of the identity factor and the traced composite at 2.1, with its corresponding justification tag.

Exact current preimages were captured before edits at `batch-2-before/items/` in this evidence directory. Earlier native bitstring repairs were untouched. The supplier lemma applies over the common complex field to all displayed compatible maps, including zero-dimensional and empty-product cases. Existing theorem conclusions and consumer interfaces are unchanged; the native review already identified the partial-trace positivity theorem and endian example as sound consumers requiring no source edits.

Final explicit source-layout command:
`node tools/proof-layout.mjs items/thm-qc-tensor-map-composition-and-adjoint.md items/thm-qc-partial-trace-characterization-and-basis-independence.md`

Actual result: `proof-layout: 2 items, 9 steps, 0 defects`.

No tests, validators, gates, metadata/carrier bookkeeping, hashes, engine controls or commits were performed. Independent owner acceptance and native resolution remain with root.
