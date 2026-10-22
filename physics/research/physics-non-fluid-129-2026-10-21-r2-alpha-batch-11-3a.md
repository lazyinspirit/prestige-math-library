# Batch 11 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-11`; scope-file assignment group remains `d`.

## Level 1: thm-emx-matrix-energy-constraints

Completed independent review of the current Statement, six proof steps, contract, and all eleven declared supplier interfaces. The hypotheses are finite real matrices, positive definite symmetric masses, continuous forcing on an open interval containing t0, and DC=CG=0. The coordinatewise oriented Riemann integral argument proves H′=g by an explicit continuity estimate, with negative increments and zero-length integrals handled; multiplying by the finite matrix exponential constructs a global C1 solution on that interval. The integrating factor and zero-derivative supplier prove uniqueness. Symmetry cancels the energy cross terms; DC and CG give exactly the two claimed constraint identities. Zero total dimension, either empty state block, C=0, zero data and forcing, and lack of endpoint assertions were checked. No choice assumption or physical premise is used.

Sources inspected locally: `items/lem-xd-finite-matrix-exponential-series.md` Statement and complete Proof; the Statements/Definitions of the rectangle-integrability, Jordan-content, Jordan-set integral, Darboux integral/sums, grid, rectangle-volume, integral-properties and zero-derivative suppliers listed in the carrier. The integral-properties and continuous-integrability proofs were checked in context. These are published mathematical suppliers, not planned proofs. No supplier defect was found in these uses. The original reader and refuter artifacts have no findings. The required initial risk-report labels this item CRITICAL (12); its current contract now records the specific completed Alpha review. No decision is owed for this untouched item.

Next action: review level-2 CFL repair and its consumer, then complete focused checks and the exact two decisions.

## Level 2: thm-emx-leapfrog-cfl

Verdict: **amended_repair**, confidence 1. The reader replaced an undefined growth phrase with unit singular vectors, the exact two-dimensional coefficient update, and a real eigenvalue of modulus greater than one. The current item raw SHA256 matches the immutable post-reader snapshot; its pre-reader hash differs. The original wording is independently retained in the still-old manifest statement read before synchronization. No absent historical proof text is claimed recovered.

Checked the current seven steps against the current spectral theorem, SVD, operator-norm definition and theorem, Cauchy–Schwarz, matrix-system definition and procedure. All dimensions and transposes agree. Pairing K^T u with each right singular basis vector gives sigma v, so the left/right equations follow from the exact cited SVD even though its Statement only displays the forward expansion. Trace 2-h²sigma²<-2 and determinant 1 give two distinct negative reciprocal roots, one outside the unit circle. The map (a,b) to (av,bu) is an isometry for the product Euclidean norm, proving the stated growth. Energy preservation follows by direct expansion; the mixed-term bound gives the exact two coefficients in the Statement. The empty blocks, K=0, N=0, strict/subcritical and supercritical cases, repeated singular values, and excluded equality were checked. Positive mass roots are basis-independent on eigenspaces. No arbitrary-index choice occurs.

The reader omitted the matching manifest statement update. Alpha synchronized only that statement in the owning pages manifest; the item and all dependencies remain unchanged. The contract has the completed specific CRITICAL risk review (initial score 12). The correction is recorded as one closed nonfatal undefined-notation defect at 3a, referenced by the touched decision. No judge record is present to invalidate.

Consumer search across current items and pages finds only `cex-emx-cfl-endpoint` as an item consumer, and the owning A page as placement. The endpoint F2 and step 1.1 use only K and its norm, unchanged by the clarification; no consumer repair or further interface propagation is needed. There are no outside affected consumers or unresolved producer defects.

Next action: finish the level-3 contract-only obligation and focused checks.

## Level 3: cex-emx-cfl-endpoint

Verdict: **reviewed_no_defect**, `change_kind: audit_enrichment`, `defect_ids: []`. Pre/post item bytes and manifest fingerprints are identical; only the F2 contract quote was updated to the repaired supplier. The strict contract check confirms its exact current text. Direct multiplication gives A=[[-3,2],[-2,1]] and J=A+I with J²=0 and J nonzero. Thus A^n=(-1)^n(I-nJ), and the explicit state z0=(1,0) gives norm at least 2sqrt(2)n-1. For any proposed finite bound choose a sufficiently large n and finite N>=n. This checks the quantifiers without pretending a finite execution is itself infinite. The zero state being stationary does not weaken the counterexample. No item or contract correction was needed.

## Sources, diagrams and scope

The mathematical arguments are local finite-dimensional deductions; no physical postulate, measured input, statistical inference, units or empirical accuracy claim is used. Direct dependency Statements/Definitions were read in full; the matrix exponential, spectral/SVD/norm, orthogonal decomposition, Cauchy–Schwarz and relevant integral-property arguments were also inspected. This is a scoped supplier-use review, not a full transitive re-audit or new publication audit. Imported suppliers and original mathematics were read-only.

For external method context, retrieved [Strang, §5.3](https://math.mit.edu/classes/18.086/2006/am53.pdf), PDF p. 9, staggered-grid equations (31)–(32), and [Zank, §2.3](https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf), PDF pp. 13–15, mass solve (13), Definition 2.9, Lemma 2.10 and Theorem 2.12 statements. Zank imposes mesh admissibility, shape regularity, quasi-uniformity and an inverse-inequality CFL bound; these are source-specific context, not silently imported premises for the abstract matrix theorem. No complete-source or complete Zank-proof reading is claimed in this adjudication.

The procedure's TikZ diagram places electric states at 0,1,2 and magnetic states at -1/2,1/2,3/2, in agreement with its update convention and outputs. It asserts no extra composition or identity. Neither routed theorem nor counterexample has a diagram or needs one for its argument; proofs are independent of the timing diagram. No published defect, proposed withdrawal, outside consumer repair or escalation was found. The batch cross-batch input is `[]`; stable IDs and page placement are retained.

## Local checks and handoff

- Initial `risk-report.mjs` on the owning contract: zero errors; both the ODE and CFL theorem are CRITICAL, score 12. Their specific Alpha reviews are now complete.
- `proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-11.proof-contracts.json --strict`: 5/5 checked, zero errors or warnings.
- Same risk command with `--require-reviewed`: zero errors, five items routed.
- Normative `precheck.mts` on the ODE theorem, CFL theorem and endpoint counterexample: three checked, zero failing.
- `rendercheck.mjs` on the CFL theorem, endpoint counterexample and procedure: three files pass real KaTeX and renderer YAML checks.
- Final `proof-layout.mjs items/thm-emx-leapfrog-cfl.md items/cex-emx-cfl-endpoint.md`: two items, ten steps, zero defects. No item bytes were edited by Alpha.

Exactly two owed decisions are recorded in the task-named decisions JSON. The theorem repair is complete with confidence 1 and one closed defect-ledger row; the counterexample contract enrichment carries no defect ID. No judges, stamps, certification, engine gate battery or transitions were run. Engine-owned decision hashing and gates remain pending; no blocker is asserted.

Final consistency check verified both touched items still match their post-reader raw hashes, exact two-obligation coverage, and literal equality of the synchronized manifest Statement. The owned-consumer disposition was appended to `briefs/tasks/frontier-dependency-ledger.md`; its batch input remains empty. Defect-ledger append validated the closed row and regenerated its derived view.
