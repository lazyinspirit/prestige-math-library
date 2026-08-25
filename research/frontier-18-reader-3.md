# frontier-18 reader-3 report

Run: `frontier-18`
Role: `reader`
Batch: `3`
Pages: `finite-fields-and-cyclotomic-extensions`, `finite-fields-and-cyclotomic-extensions-examples`

## Findings

### R3-1

Item: `thm-infinitely-many-primes-congruent-to-one-modulo-n`
Location: proof steps 3.1 and 4.1 in `items/thm-infinitely-many-primes-congruent-to-one-modulo-n.md`

The proof uses `p\nmid kM` in step 4.1 to conclude that the residue class
$[kM]_p$ is nonzero and so can have multiplicative order $n$, but step 3.1 only
establishes `p\nmid M`. The argument never states that `p\nmid k`, so the
nonzero-root claim is unlicensed as written.

Why: from step 2.2 one can strengthen the argument to `p\nmid kM`, because
$p\mid\Phi_n(kM)=1+kMh(kM)$ makes `p\mid kM` impossible. That strengthening is
missing on disk, so step 4.1 currently cites more than the prior step proves.

Severity: `fatal`
Disposition: repaired in batch.

### R3-2

Item: `lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible`
Location: proof step 1.2 in `items/lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible.md`

Step 1.2 cites `[L6]`, but `[L6]` is the transpose/determinant identity
`det(A^T)=det(A)` and is not used anywhere in that step.

Why: the step only uses the given $F$-linearity of the automorphisms and the
basis hypothesis. The extra citation is inaccurate even though the inference
itself is sound.

Severity: `nonfatal`
Disposition: repaired in batch.

## Changes made

- `items/lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible.md`
  step 1.2: removed the stray `[L6]` citation.
- `items/thm-infinitely-many-primes-congruent-to-one-modulo-n.md`
  step 3.1: strengthened the arithmetic claim from `p\nmid M` to `p\nmid kM`,
  which licenses the nonzero residue used in step 4.1.
- `research/frontier-18-batch-3.proof-contracts.json`
  synced the two repaired derivation rows with the current proof text and
  removed the stale `L6` input from the conjugate-matrix lemma contract.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible.md items/thm-infinitely-many-primes-congruent-to-one-modulo-n.md`
  reported both files unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible.md items/thm-infinitely-many-primes-congruent-to-one-modulo-n.md`
  passed cleanly.

## Coverage notes

Every item on `finite-fields-and-cyclotomic-extensions` and
`finite-fields-and-cyclotomic-extensions-examples` was opened: 65 unique items.

Every proof step in the batch scope was read. Dependency citations on the batch
items were read throughout the finite-field, normal-basis, cyclotomic,
compositum/intersection, and finite-abelian-Galois chains; every citation
implicated by a finding was reopened directly on disk before repair.

Per-page verdicts:

- `finite-fields-and-cyclotomic-extensions`: defects found and repaired
  (`R3-1`, `R3-2`); no additional confirmed defects remain from this read.
- `finite-fields-and-cyclotomic-extensions-examples`: clean read.
