# Step 7 targeted recertification — group a

Run: `phase-2-remaining-27`  
Item: `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system`  
Batch/page: 12 / `highest-weight-theory-for-complex-semisimple-lie-algebras`

## Verdict

Repaired and re-issued under this targeted Step-7 adjudicator dispatch. The
five-part Statement, Facts & Assumptions, and numbered Proof are mathematically
verified. Their bytes were not changed. The current carrier nevertheless could
not be re-issued as an unchanged item because both external source locators were
false:

- Knapp `Chapter V §§1–2` is finite-dimensional representation theory, not the
  construction of the root Euclidean space. The exact supporting results are
  Chapter II §§4–5, especially Corollary 2.38 and Theorem 2.42.
- Kirillov `§§7.5 and 8.1` concerns lattices and weight decompositions. The
  exact supporting results are §§6.6–7.4, especially Theorems 6.45, 7.3, and
  7.16.

This is a `confirmed_fatal`-style `dependency_citation` repair for this special
recertification task: an exact-source citation with wrong locators cannot be
certified as written. I corrected only the two item locators and their manifest
mirror. During the required contract review I also replaced generic, false
boundary boilerplate: the zero semisimple Lie algebra gives a genuine empty
root-set case, there is no separate value-one case, positive-rank degeneracy is
excluded by [L2]/[L3]/step 4.1, and AC is inherited through the named suppliers
rather than used by a new local choice.

Exact `itemHashGuard` digests:

- pre-repair: `802f8f0fe3828da8f19a86d8529cb85a648b74df72c4b7e14afb2f49356eec72`
- post-repair: `e67a3704df714f205f77f43744d9eb5233c389eb1141569f2a85dff8c10dbbdc`

The repaired manifest carrier has raw SHA-256
`87b02cd77ab1d1cb878be1feb9ad6a5f7db8d9854028121381f98c0f79b4bb19`;
the repaired Batch-12 proof-contract file has raw SHA-256
`a21c7ea83398e187f8417dabd5fd597461073f320520679d78f9abba422ca372`.
No dependency, page placement, claim, proof step, judge record, or shared
Step-7 adjudication ledger was changed. Defect row
`phase-2-remaining-27-step7-a-recertify-001` was appended through
`tools/defect-ledger.mjs`; its generated view was refreshed by that same locked
append operation.

## Mathematical verification

- [L1]–[L5] justify the simultaneous root-space diagonalisation, one-dimensional
  root spaces, nondegeneracy of the Killing form on the Cartan subalgebra, and
  integral Cartan integers. Step 2.1 therefore correctly obtains
  `B(H_alpha,H_alpha)=4/sum_beta beta(h_alpha)^2>0`.
- The roots span the complex dual, their Killing-dual vectors span the Cartan
  subalgebra, and each coroot is a positive real multiple of its Killing-dual
  vector. This proves that the real coroot span is a real form. The trace
  identity makes the restricted Killing form real and positive definite.
- Restriction identifies the real root span with the real dual of that real
  form. Transport through the Killing form gives the asserted positive
  definite inner product and the exact identity
  `2(beta,alpha)/(alpha,alpha)=beta(h_alpha)`.
- [L6] supplies reflection stability, negatives, and reducedness; [L7] supplies
  the simple-root basis. Scaling each Killing-dual basis vector by its nonzero
  real coroot factor proves the final coroot-basis assertion.
- For the boundary `g=0`, all four spaces and maps are zero and the root set and
  simple-root base are empty; every root-indexed assertion is vacuous and no
  denominator is formed. Thus all five clauses remain valid.

All 20 current dependency clauses quoted by the proof contract were compared
with their live `Statement` or `Definition` sections and matched their uses.
The only minor prose imprecision is that step 10.1 calls `lambda -> H_lambda`
the isomorphism "of step 6.1"; step 6.1 supplies the restriction isomorphism
and step 7.1 supplies the Killing-form identification. Together they give the
stated isomorphism immediately, so this is nonfatal polish rather than an
unproved or false inference.

## Exact files read

Governing task and continuity files:

- `CLAUDE.md`
- `README.md`
- `SCHEMA.md`
- `WORKFLOW.md`
- `briefs/tasks/frontier-dependency-ledger.md`
- `briefs/tasks/alpha-step7.md`
- `research/phase-2-remaining-27-alpha-a-step7-recertify.task.md`
- `research/phase-2-remaining-27-step7-bundle-a.md`
- `research/phase-2-remaining-27-alpha-step7-a.md`

Current target carriers:

- `items/prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system.md`
- `research/phase-2-remaining-27-batch-12.proof-contracts.json`
- `research/phase-2-remaining-27-batch-12.pages.json`

Current dependency clauses:

- `items/def-axiom-of-choice.md`
- `items/thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra.md`
- `items/def-root-and-root-space-relative-to-a-cartan-subalgebra.md`
- `items/thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional.md`
- `items/prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra.md`
- `items/prop-killing-form-orthogonality-of-root-spaces.md`
- `items/def-killing-dual-vector-of-a-root.md`
- `items/lem-killing-length-of-a-root-is-nonzero.md`
- `items/def-coroot-of-a-lie-algebra-root.md`
- `items/cor-cartan-integers-are-integral.md`
- `items/def-killing-form-of-a-finite-dimensional-lie-algebra.md`
- `items/def-toral-and-maximal-toral-subalgebra.md`
- `items/thm-trace-is-sum-of-eigenvalues.md`
- `items/thm-root-reflections-preserve-the-root-set.md`
- `items/def-root-reflection-from-a-coroot.md`
- `items/thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system.md`
- `items/cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root.md`
- `items/def-reduced-crystallographic-euclidean-root-system.md`
- `items/def-positive-system-and-base-of-simple-roots.md`
- `items/thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates.md`

Validation interfaces inspected while following the prescribed append and
focused-check procedures:

- `tools/item-hash.mjs`
- `tools/defect-ledger.mjs`
- `tools/proof-contract.mjs`
- `tools/manifest-deps.mjs`
- `tools/rendercheck.mjs`
- `tools/citecheck.mjs`
- `tools/content-policy.mjs`
- `tools/audit-manifest.mjs`
- `tools/manifest-integrity.mjs`

## External sources consulted

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, digital second
  edition, <https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf>:
  Chapter II §§4–5, Corollary 2.38 and Theorem 2.42. These give the real
  root span and Cartan real form, positive definiteness, restriction
  isomorphism, reflection formula, integrality, and the reduced abstract root
  system.
- Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*,
  <https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf>:
  §§6.6–7.4, Theorems 6.45, 7.3, and 7.16. These give the coroot real form
  and positive Killing form, the reduced Euclidean root system, and the
  simple-root basis.

## Focused validation

- item precheck: PASS (`1 checked, 0 failing`)
- item rendercheck: PASS (`1 file`, frontmatter and every math span parsed)
- strict targeted proof contract: PASS (`0 errors, 0 warnings`, `1/1` checked)
- Batch-12 manifest dependency shape: PASS (`115 items`, `0 errors`)
- targeted citecheck: PASS
- Batch-12 content policy: PASS (`115 scoped items`, `0 errors`, `0 warnings`)
- defect-ledger validation for this run: PASS (`1116 rows`, `0 errors`)
- carrier mirror/hash consistency and focused `git diff --check`: PASS
- whole-repository depcheck: did not pass because of eight unrelated existing
  B-leaf/cycle errors elsewhere in the dirty worktree. The target item did not
  occur in those errors, and this dispatch did not modify their carriers.

## Blockers

None for this item. The unrelated repository-wide depcheck failures are outside
this dispatch's ownership and do not leave any uncertainty in the target claim,
proof, internal citations, external conventions, or repaired carriers.
