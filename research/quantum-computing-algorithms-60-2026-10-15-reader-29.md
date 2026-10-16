# Step 3a reader report — batch 29

Run: `quantum-computing-algorithms-60-2026-10-15`  
Reader: `reader-29`  
Batch: `29`

## Opened inventory

- Batch manifest: `research/quantum-computing-algorithms-60-2026-10-15-batch-29.pages.json`.
- Assigned pages: `finite-abelian-fourier-analysis` (A) and `finite-abelian-fourier-analysis-examples` (B).
- Assigned items, read in dependency order:
  - Level 0: `def-qa-finite-abelian-character-dual`, `def-qa-finite-abelian-convolution`, `lem-qa-finite-character-values-have-unit-modulus`.
  - Level 1: `lem-qa-cyclic-group-has-n-characters`, `lem-qa-character-dual-of-a-product-factors`, `def-qa-finite-abelian-subgroup-annihilator`.
  - Level 2: `thm-qa-finite-abelian-dual-has-same-cardinality`.
  - Level 3: `thm-qa-finite-abelian-character-dual-is-finite-abelian-group`, `thm-qa-finite-abelian-dual-character-orthogonality`, `def-qa-normalized-finite-abelian-fourier-transform`, `thm-qa-finite-abelian-subgroup-annihilator-cardinality`.
  - Level 4: `lem-qa-finite-abelian-annihilators-are-subgroups`, `thm-qa-finite-abelian-fourier-transform-is-unitary`, `thm-qa-finite-abelian-fourier-convolution`, `thm-qa-finite-abelian-evaluation-map-isomorphism`, `thm-qa-finite-abelian-coset-fourier-transform`, `ex-qa-finite-abelian-fourier-tables-and-convolution`.
  - Level 5: `thm-qa-finite-abelian-fourier-inversion`, `thm-qa-finite-abelian-parseval`, `thm-qa-finite-abelian-double-annihilator`.
- Opened the 36 distinct external item suppliers directly declared in the assigned items' dependency lists: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-quotient-of-an-abelian-group-is-abelian`, `cor-subgroups-of-abelian-groups-are-normal`, `def-additive-character-of-a-finite-abelian-group`, `def-canonical-natural`, `def-external-direct-product-of-groups`, `def-finite-cardinality`, `def-finite-sum-in-a-commutative-monoid`, `def-function-space`, `def-group-isomorphism-and-automorphism`, `def-group`, `def-index`, `def-order-in-a-group`, `def-quotient-group`, `def-rational-power`, `def-subgroup`, `lem-additive-character-orthogonality-from-representation-orthogonality`, `lem-complex-conjugation-and-modulus-laws`, `lem-coset-membership-and-equality`, `lem-finite-sum-reindexing-and-fubini`, `lem-group-homomorphism-basic-properties`, `lem-group-power-laws`, `lem-inverse-of-bijective-group-homomorphism`, `lem-of-naturals-positive`, `lem-rational-power-laws`, `lem-rational-power-well-defined`, `prop-order-of-finite-direct-product`, `thm-classification-of-cyclic-groups`, `thm-complex-nth-roots-and-roots-of-unity`, `thm-complex-numbers-form-a-field`, `thm-external-direct-product-is-a-group`, `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form`, `thm-lagrange`, `thm-product-rule`, `thm-quotient-group-laws`, and `thm-subset-of-a-finite-set`.
- Opened the assigned proof-contract artifact and the batch authoring notes as contextual evidence, not as verdicts. The contract covers the 15 proof-bearing A-items and the B example.
- After the Statement repair, traced the current-run downstream dependency edges through batches 34 and 55 and read the affected carriers in dependency order: `thm-qa-finite-abelian-hidden-subgroup-sample-law`, `thm-qa-finite-abelian-hidden-subgroup-reconstruction-success`, `ex-qa-hsp-common-kernel-recovery`, `ex-qa-hsp-cyclic-subgroup-annihilator`, `thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost`, `thm-qa-finite-abelian-hidden-subgroup-cost`, and `ex-qa-cyclic-discrete-log-fourier-sample`. I also opened the batch-34 proof-contract entry for the direct consumer.
- Opened the three bibliography targets at relevant sections: de Wolf, [*Quantum Computing: Lecture Notes*](https://arxiv.org/pdf/1907.09415), Ch. 4 §4.1 (printed pp. 29–30), defines the normalized cyclic DFT and derives unitarity by a geometric sum; Childs, [*Lecture Notes on Quantum Algorithms*](https://cs.umd.edu/~amchilds/qa/qa.pdf), Ch. 4 §4.1 (printed pp. 17–18; PDF pp. 24–25), gives the finite-abelian QFT and notes character orthogonality; Preskill, [*Quantum Information*, Chapter 6](https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf), §6.2.1 (printed p. 8; PDF p. 13), gives the cyclic QFT. These sections use positive-sign Fourier conventions; the assigned definition fixes the negative-character convention and the local proofs establish its consequences directly.

## Mathematical review and page verdicts

The dual-set, convolution, and annihilator definitions are well-formed with their stated domains. The finite-order character-modulus proof, cyclic character enumeration, product-character bijection, and dual-cardinality proof handle the trivial and empty-product cases. The pointwise dual-group proof establishes closure and the group laws. Dual-index orthogonality is derived separately by cyclic root sums, with the required product reindexing. The transform definition's real normalization, the two matrix orthogonality calculations for unitarity, the convolution reindexing and factor, the evaluation-map injection/surjection, the quotient-character correspondence, inversion, Parseval, and double annihilation all follow from the cited statements or the displayed finite calculations. The B example's five tables, subgroup annihilators, and finite orthogonality, inversion, Parseval, and convolution calculations were checked directly.

- **A page `finite-abelian-fourier-analysis`: pass after the repair below.** Its summary accurately describes the assigned results and distinguishes row from dual-index column orthogonality. The final sentence had an invalid doubled LaTeX command for `sqrt`; it is repaired.
- **B page `finite-abelian-fourier-analysis-examples`: mathematical summary accurate; rendering defect remains.** Its opening sentence uses doubled backslashes before `times` in both product-group labels. This is B-page prose, outside the reader's edit authority, and is reported below.

## Repairs and evidence

1. Repaired `items/thm-qa-finite-abelian-coset-fourier-transform.md`, Statement, Facts & Assumptions [F1], and proof steps 1.1, 2.1, 3.1 and 4.1. The original formulas used natural cardinalities directly as bases of rational powers, while the transform definition `def-qa-normalized-finite-abelian-fourier-transform` defines its coefficient using the positive real image `N_R`. The repaired carrier names the real images `N_R`, `M_R`, and `Q_R`, computes the indicator amplitude and normalized-coset amplitude with those real bases, and derives `N_R=M_R Q_R` from `thm-qa-finite-abelian-subgroup-annihilator-cardinality`. The item’s proof-contract derivations for steps 1.1, 2.1, 3.1 and 4.1 were updated to match. The item had no `verification.judge` record to remove. Its pre-repair SHA-256 was `9c3abe62c440f66764510a2fe169e92b158e03176a6c3f9377359c2e9243bf5e`.

   Required checks: `node tools/tsx-run.mjs tools/reflow.mts items/thm-qa-finite-abelian-coset-fourier-transform.md` reported unchanged; precheck passed (1 item, 0 failing); the single final `node tools/proof-layout.mjs items/thm-qa-finite-abelian-coset-fourier-transform.md` pass reported 4 steps and 0 defects.

2. Repaired the assigned A-page prose at `library/quantum-algorithms/finite-abelian-fourier-analysis.md:50`, changing the doubled command `\\sqrt` to the valid inline-math command `\sqrt`. This changes only rendering syntax, not the summary claim.

## Uneditable defect

`library/quantum-algorithms/finite-abelian-fourier-analysis-examples.md:12` contains `C_2\\times C_2` and `C_2\\times C_3` inside inline math. Each has two literal backslashes before `times`; inline math requires the single command `\times`, so the summary's two product-group expressions are ill-formed for rendering. The B-page prose is outside edit authority. This is one of two uneditable findings.

The statement repair also exposed a stale direct consumer in batch 34: `thm-qa-finite-abelian-hidden-subgroup-sample-law`, Facts & Assumptions [F1] and proof step 1.2, still cite and use `|H^\perp|^{-1/2}` as the normalized-coset amplitude. Its proof-contract [F1] quote likewise preserves the old coset-transform Statement. The current source `thm-qa-finite-abelian-coset-fourier-transform` now states this amplitude using the canonical real image `Q_R^{-1/2}`; `def-rational-power` defines rational powers on positive real bases. The batch-34 item and contract need their citation and amplitude notation reconciled with the current source. They are outside batch 29 and were not edited.

## Blocker and coverage limit

The report and findings files are present, but the latest autopilot status still lists batch 29 as missing from successful `3a-read` dispatch coverage; this worker result is not recorded until handoff. The run also reports two unrelated blockers: the `1-scaffold` specification has an invalid unit prerequisite graph caused by `def-qc-effective-unitary-matrix-input` in batch 12, and `3a-split` reports `split-10` failed three times for batch 10. Batch 29's mathematical review and files do not resolve these run-level blockers.

I reviewed all assigned carriers and all direct external item suppliers listed above. I did not re-audit every transitive supplier of those already-published external items; I used their opened current statements and proofs as the declared prerequisites for this batch.
