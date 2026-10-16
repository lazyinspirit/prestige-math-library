# Step 3 boundary repair: batches 16–30

Read the full current Statement/Definition, Facts and complete argument of each listed item. Only unresolved diagnostic worksheet rows were revised. Existing reviewed-template rows were left alone. No source edits, tests, validators, gates, hashes or binding stamps were performed.

The actual target contracts were batches 25, 26, 27 and 29; the remaining assigned batches had no unresolved diagnostic boundary rows. Historical template_review binding fields remain for the owner to seal against the changed current rows.

- Batch 25: `def-qa-finite-branch-output-law` — endpoints.
- Batch 26: `def-qa-binary-field-f2` — endpoints.
- Batch 26: `def-qa-binary-dot-product` — endpoints.
- Batch 26: `thm-qa-reversible-binary-dot-product-correct-and-cost` — endpoints.
- Batch 26: `def-qa-standard-bit-query` — endpoints.
- Batch 26: `def-qa-phase-query` — endpoints.
- Batch 26: `thm-qa-phase-kickback` — endpoints.
- Batch 26: `thm-qa-compute-copy-uncompute-clean-query` — endpoints.
- Batch 26: `thm-qa-global-phase-under-control` — endpoints.
- Batch 26: `thm-qa-bit-query-to-phase-query` — endpoints.
- Batch 26: `thm-qa-controlled-phase-query-to-bit-query` — endpoints.
- Batch 26: `ex-qa-oracle-conversion-and-uncomputation` — endpoints.
- Batch 27: `lem-qa-hadamard-f2-kernel` — degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `def-qa-deutsch-promise` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `def-qa-deutsch-jozsa-promise` — degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `def-qa-bernstein-vazirani-promise` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `thm-qa-deutsch-classical-query-lower-bound` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `thm-qa-deutsch-jozsa-deterministic-query-lower-bound` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound` — empty, degenerate, endpoints, nonempty-choice.
- Batch 27: `thm-qa-bernstein-vazirani-classical-query-lower-bound` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `thm-qa-deutsch-query-correct` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `thm-qa-deutsch-jozsa-query-correct` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `thm-qa-bernstein-vazirani-query-correct` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 27: `ex-qa-exact-oracle-algorithms` — empty, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse.
- Batch 29: `lem-qa-finite-character-values-have-unit-modulus` — empty, zero, one, endpoints, iff-forward, iff-reverse.
- Batch 29: `lem-qa-cyclic-group-has-n-characters` — empty, zero, one, iff-forward, iff-reverse.
- Batch 29: `lem-qa-character-dual-of-a-product-factors` — zero, one, endpoints.
- Batch 29: `thm-qa-finite-abelian-dual-has-same-cardinality` — zero, one, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-character-dual-is-finite-abelian-group` — empty, zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-dual-character-orthogonality` — zero, one, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-subgroup-annihilator-cardinality` — empty, zero, one, endpoints.
- Batch 29: `lem-qa-finite-abelian-annihilators-are-subgroups` — empty, zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-fourier-transform-is-unitary` — zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-fourier-convolution` — empty, zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-evaluation-map-isomorphism` — empty, zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-coset-fourier-transform` — empty, zero, one, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-fourier-inversion` — zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-parseval` — zero, one, degenerate, endpoints, iff-forward, iff-reverse.
- Batch 29: `thm-qa-finite-abelian-double-annihilator` — empty, zero, one, endpoints.
- Batch 29: `ex-qa-finite-abelian-fourier-tables-and-convolution` — empty, zero, degenerate, iff-forward, iff-reverse.

Current evidence: batch 25 Verification 1.3 and 4.1–5.1 handles zero/one branch and acceptance probabilities. Batch 26 uses the actual finite XOR actions, exact gate lists, zero-width register conventions, and the controlled-access hypotheses; endpoint rows distinguish discrete lower wire counts from nonexistent accuracy limits. Batch 27 uses the complete truth-table/transcript and Fourier-amplitude arguments: in particular the lexicographic complement in the DJ lower bound, the finite triple-sampling space and separate N=4/n=1 branches, and the explicit basis queries in BV. The Hadamard character-sum worksheet now records both directions of its zero-label characterization. Batch 29 substitutes actual group identity, singleton group, trivial/full subgroup and zero-function cases in the exact maps and sums; cyclic root parametrization and column orthogonality have both directions checked explicitly. Each changed worksheet contains its own precise case evidence and step anchors.

Additional authorized risk item: `thm-qa-qft-finite-gate-set-compile-cost` in batch 30. Read all current local steps and the full QC12 compiler/cancellation chain, two-CNOT controlled-block construction, truncated-QFT/error, cost-model, tensor-extension and projective-output-law suppliers. The old escalation is resolved by the actual cancellation bound 4 eta^(3/2)+2 eta^2<=5 eta^(3/2) and current SK theorem F3/2.1 total 40+5=45<=64. Rechecked positive rational delta, m=n/n=1 branches, complete four-factor/two-CNOT decomposition, scalar tracking only after complete controlled-block decomposition, K delta<=eta/2 telescoping, projective/TV implication and exact-real gate count. The current risk_review is complete with detailed evidence; no source defect found.

No tests, validators, gates, source edits, hashes, stamps, native reports or runtime state changes were made.
