# Reader report — frontier-31a batch 18

## Scope opened

- A page: `library/lie-theory/verma-modules-and-shapovalov-forms.md` and all 17 listed items.
- B page: `library/lie-theory/verma-modules-and-shapovalov-forms-examples.md` and all 6 listed items.
- Direct published prerequisites opened: triangular decomposition, enveloping-algebra definition, highest-weight definition, PBW basis, Weyl vector, root reflections/coroots, and Casimir eigenvalue.  Their transitive closure was resolved (46 IDs total).
- Sources opened: Etingof 18.755 §25.2 (PDF pp. 134–135), Etingof 18.757 §8.2–8.4 and Exercise 8.15(iv)–(xi) (PDF pp. 41–47), §15.1 (p. 79), and all six pages of Thatte's notes.

## Repairs completed

- `thm-universal-property-of-verma-modules`: replaced the undefined `lambda_+(b)` with the explicitly decomposed Borel action, thereby checking the tensor relation.
- `thm-existence-and-uniqueness-of-the-shapovalov-form`: supplied the PBW-projection descent and contravariance argument rather than asserting that a generator calculation suffices.
- `prop-the-shapovalov-radical-is-the-maximal-submodule`: supplied the missing top-weight orthogonality argument and used cyclicity to prove the reverse radical containment.
- `ex-an-a2-verma-weight-space-of-dimension-two`: declared the normalized-form dependency and showed the four Chevalley-relation computations underlying the matrix.
- `cex-the-shapovalov-form-is-not-positive-definite-in-general`: corrected the complex-bilinear positivity claim to a positive-definiteness claim for the explicitly stated real PBW span; retitled accordingly.
- `ex-finite-dimensional-sl2-quotient-of-a-verma-module`: replaced the invalid “proper, hence maximal” inference with a direct simplicity proof of the quotient.
- Added proof-contract entries for the six repaired proof-bearing items; no stale `verification.judge` record existed on any repaired item.

## Open fatal issue proposed for Alpha withdrawal

`thm-shapovalov-determinant-formula` remains unfit to certify as proved here.  Its step 1.2 asserts that a rank-one string directly supplies a singular vector for every positive root and generic determinant hyperplane, then uses Casimir separation to claim the exact transverse order.  The cited Etingof Exercise 8.15 instead makes factor-location, generic submodule/quotient, deformation-perfect-pairing, and multiplicity equality separate tasks (v)–(ix), with the formula only in (x).  In particular, the current step uses the generic singular submodule before establishing the determinant factor/multiplicity needed to obtain it.  The required generic embedding/deformation argument is not an authored dependency.  Keep this theorem present for Alpha as a proposed withdrawal or rework target; do not infer a completed proof from the citation.

## Validation and page verdicts

- Reflow: the six changed proof-bearing items were unchanged on the final reflow pass.
- Focused precheck: all 19 proof-bearing assigned items passed.
- Focused renderer check: the six changed items plus both assigned pages passed YAML, wikilink, delimiter, and KaTeX checks.
- Focused proof-contract check: the six added/repaired contract entries pass `--strict --items` with zero errors and warnings.
- Whole batch proof-contract strict check remains blocked: the contract still lacks entries for 13 other scoped proof-bearing items, including the determinant theorem.  This is visible rather than concealed; the determinant proof failure is the reason a batch-wide clean contract is not claimed.
- `manifest-deps` passes: 23 items, zero normalization changes, zero errors.
- Repository `depcheck --quiet` was run.  It reports eight pre-existing, other-batch errors (five provenance applicability errors, one missing relative-homology item, one B-leaf violation, and one exterior-derivative page cycle) and 474 warnings; it reports no batch-18 error.  `git diff --check` passes.

**A-page verdict:** blocked for Alpha withdrawal/rework of `thm-shapovalov-determinant-formula`; consequently its irreducibility corollary cannot presently be certified from the current proof chain.  All other reviewed A items are acceptable after the listed repairs.

**B-page verdict:** its local computations are acceptable after the listed repairs, but its reducibility example inherits the A-page determinant/criterion blocker.  The B-page prose itself was read and left unmodified.

No published dependency defect requiring a structured finding was confirmed.  The unremedied determinant issue is in-flight and editable, so it is recorded here for Alpha rather than duplicated in the uneditable-findings JSON.
