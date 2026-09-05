# Step-6 reader correction — batch 17, `frontier-30`

The batch-17 refuter found two genuine defects, but one finding names a
reader-touched item outside the refuter's mechanically assigned scope. Repair
the reader-owned current items so the batch can be re-split and re-refuted
without discarding either finding.

Work only in these batch-17 reader-owned artifacts:

- `items/lem-cyclic-generator-class-functions-by-moebius-inversion.md`
- `items/cor-cyclic-fixed-points-detect-rational-representations.md`
- `research/frontier-30-batch-17.proof-contracts.json`
- `research/frontier-30-reader-17.md`
- `research/frontier-30-reader-findings-17.json`

Correct both defects against the current statements and dependencies:

1. In the Mobius-inversion lemma, the sentence claiming that subgroups of a
   cyclic group are linearly ordered is false (the order-2 and order-3
   subgroups of `C_6` are incomparable). State the correct divisor-lattice
   fact: cyclic subgroups are uniquely indexed by divisors of `|C|`, and
   containment corresponds to divisibility. Preserve the valid equivalence
   `c in D` iff `<c> <= D` and the divisor-sum proof.
2. In the fixed-points corollary, [F1] incorrectly calls the standard complex
   character inner product bilinear. It is Hermitian/sesquilinear and positive
   definite; its restriction to rational-valued class functions is symmetric
   and `Q`-bilinear, which is the property used later. Make the fact and its
   later use precise without weakening the theorem.

Record both repairs in the reader report. Preserve the existing genuine
uneditable manifest finding for `cor-cyclic-local-integrality-criterion`; do
not add either repaired item to the findings JSON. Regenerate affected proof
contracts and run focused reflow, precheck, strict proof-contract,
content-policy, and citation/boundary checks. Do not edit pages, manifests,
workflow state, another batch, or published content.

Return only the schema-conforming reader-findings JSON for batch `17`, with the
existing genuine uneditable manifest finding preserved.

Do not ask for permissions.
