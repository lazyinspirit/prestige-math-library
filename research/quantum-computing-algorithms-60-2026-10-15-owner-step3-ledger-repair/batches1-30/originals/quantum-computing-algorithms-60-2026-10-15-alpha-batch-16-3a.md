# Batch 16 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-16`; covers: 16.

Completed all three routed decisions and all 17 HIGH/CRITICAL risk reviews in generated dependency order. The decisions file contains exactly the two touched obligations and `refuter:16:1`; reader findings and page obligations are empty. No judging, stamping, dispatch, or engine transition was performed.

## Decisions and repairs

### lem-qc-random-measurement-stabilizer-update

`refuter:16:1`: **confirmed_fatal**, repaired with confidence 1. The original statement allows n=2, g1=g2=Z1, S=<Z1>, psi=|00>, M=X1. Its output rows ±X1 and I have rank one, contradicting rank two. The original proof's F5 did not follow from generating-list invariance. Added explicit independent binary labels, stabilizer subgroup fixing psi, and Hermitian Pauli observable M; corrected F5 to distinguish hypothesis from cited isotropy. The complete current proof then gives independent transformed n−1 labels in L, a new label m outside L, commuting Hermitian generators excluding −I, and the normalized branch fixed by all n rows. Fairness supplies nonzero probability 1/2 for either bit. The n=1 case works; n=0 is excluded. No new prerequisite or AC use is needed.

Updated manifest Statement and all owning-contract citations of this supplier. Direct item consumers found by actual reference search are algorithm Execution 2, tableau-measurement Proof 1.1, and example Verification 2.1. Valid tableau rows supply independence in the first two; Z supplies the one-dimensional independent label in the example. All use Hermitian M. No consumer source change, further Statement/Definition propagation, or outside-batch repair is necessary. Ledger: `qca60-b16-3a-random-update-hypotheses`.

### alg-qc-stabilizer-exact-simulator

Touched decision: **amended_repair**, confidence 1. Accepted the reader's generator-only procedure and explicit Gauss–Jordan elimination mathematically, then synchronized its stale manifest Definition mirror. Source remains exactly the reader-post file. Its deterministic system has independent columns and a consistent right-hand side by maximal isotropy. Elementary row swaps/additions preserve solutions; scanning columns and least unused pivot rows gives the unique coefficients. Phase-aware increasing-order multiplication recovers G=±M. The empty system gives G=I and handles both scalar measurement signs. The random branch retains the old pivot until products finish; finite-tree child advancement terminates. Removing optional unmaintained destabilizers makes the stored representation coherent.

Exact historical comparison is recovered, not assumed: substitute `interface_comparisons[19].current_sections[0]` from `research/quantum-computing-algorithms-60-2026-10-15-owner-step2-stabilizer/consumer-closure-1.json` for the current Definition, preserving current frontmatter, Sources and separating blank lines. The reconstructed full raw SHA256 is `0745409b3d2d72f3bae6bfcfb1da07c152c7b645b896cfa0eb6f8e2dbf6e7853`, exactly the pre-reader snapshot. Current raw SHA256 is `28dcfa5cc1f9285787bbb32a58c83f6980d719852a678f7091862ae8004660b7`, exactly the post-reader snapshot. The recovered procedure names a row-membership solve but omits its operational details and allows optional destabilizers without measurement maintenance. This is a nonfatal procedure-specification defect: the generator-only output argument was already recoverable. Ledger: `qca60-b16-3a-simulator-procedure-specification`.

The sole direct item consumer is the Gottesman–Knill theorem. Its actual induction and cubic elimination count remain valid; no theorem source edit is needed. Page reference is inventory placement only.

### thm-qc-gottesman-knill-exact-simulation

Touched decision: **reviewed_no_defect**, `change_kind: audit_enrichment`, no defect IDs. Pre/post item hashes both equal `631129d1b15378d507649556d01146781681220154c472f96bde4628efc0dcbe`; the reader changed only the F8 algorithm excerpt in its proof contract. Reviewed every current proof step: computational-basis initialization, conditional transition induction along the same history, finite-tree termination, exact sampling and final-ray representation, quadratic dense workspace and cubic elimination time, separate controller charge and transcript output, including n=0 and T=0. The bound is conservative for gates and random measurements. No prior judge record was present in the edited items.

### lem-qc-stabilizer-average-projector

Risk review found a nonfatal F/A transcription: A1 wrote z↦⟨z,y⟩ instead of the vector-valued z↦⟨z,y⟩x. Corrected from the exact Dirac supplier; Statement and proof are unchanged. The risk-review disposition references closed ledger row `qca60-b16-3a-outer-product-transcription`, confidence 1. This risk-only item has no additional routed decisions-file obligation.

The pre-existing computational-basis supplier quotation differed only in its final “In particular” versus current “Separately” zero-register qualification. Refreshed the exact F4 contract excerpt; current normalization use is sound. This is metadata maintenance, not a new mathematical defect.

## Independent risk evidence

The following notes record the authored arguments actually reviewed, not an acceptance of the reader/refuter conclusions. Each also appears in its owning contract's complete risk_review. The nonzero finite-dimensional domain, root-linear-first inner product, i^k X^x Z^z phase order, binary (x,z) coordinate order and circuit-wire j versus Pauli-wire j+1 conversion were retained.

- `lem-qc-pauli-measurement-projectors`: Steps 1.1–3.1: self-adjoint involution gives complementary orthogonal projections; sandwich quadratic form is nonnegative, cyclic trace equals branch weight and finite eigenvalue sum is nonnegative. Both b values and M=±I (including H_0=C) give weights 0,1; nonzero H excludes an impossible density operator.

- `lem-qc-stabilizer-maximal-isotropic-self-dual`: Steps 1.1–4.1: coordinate pairing represents every functional; finite basis extension makes restriction onto L* surjective, with kernel L-perp. Rank-nullity yields 2n-r, isotropy gives r<=n and equality of subspaces at r=n. Explicit n=0 and r=0 cases; finite basis choices need no AC.

- `lem-qc-pauli-measurement-defines-an-instrument`: Steps 1.1–4.1: linear sandwich maps; for every finite r>=1 their block amplification is self-adjoint and its quadratic form is that of X on the blockwise projected vector. Cyclic trace and P0+P1=I give trace preservation for every operator, not only states. Scalar registers and zero branches remain admitted.

- `lem-qc-pauli-measurement-positive-branch-is-density`: Steps 1.1–3.1: sandwich is nonnegative by projector calculation; positive real scaling preserves self-adjointness and quadratic positivity, and trace becomes one. Strict p_b>0 is essential and stated; neither zero branch is normalized.

- `lem-qc-zero-probability-branch`: Steps 1.1–2.1: positive sandwich has trace p_b=0; finite nonnegative eigenvalues all vanish. Therefore branch map output is zero and convention assigns bottom, never division by zero. Applies also to deterministic ±I and scalar register.

- `lem-qc-stabilizer-subgroup-label-space-and-order`: Steps 1.1–3.1: label homomorphism gives subspace over F2; equal labels have scalar quotient ±I because the subgroup is commuting and Hermitian, and -I exclusion makes the restriction injective. Commutator pairing gives isotropy, and finite-field counting gives 2^r. n=0 separately gives S={I}; generating-list invariance does not imply list independence.

- `lem-qc-stabilizer-average-projector`: Steps 1.1–3.1: nonempty finite group average counts exactly |S| pairs for each product; left translation fixes image and fixed vectors are reproduced. Self-adjoint idempotence identifies the orthogonal projector and the supplied unit-ray projector. r=0 and n=0 give identity; no arbitrary choice. Corrected the nonfatal A1 transcription omitting output vector x from z-><z,y>x; exact cited definition and proof 3.1 already use the vector-valued projector. Statement and proof unchanged.

- `thm-qc-stabilizer-projector-rank-and-code-dimension`: Steps 1.1–3.1: label injectivity leaves I as unique zero-label element. Finite product-basis trace factors; nonidentity X,Z,XZ factors have zero trace, identity has trace 2^n. Idempotent trace equals image dimension, giving 2^(n-r), with r<=n from isotropy. n=0, r=0 and r=n checked; no AC.

- `lem-qc-anticommuting-stabilizer-measurement-is-fair`: Steps 1.1–3.1: a fixing Hermitian involution g is unitary and exchanges P_b psi and P_(1-b) psi, making their norms equal. Complementarity makes squared norms sum to one; pure branch norm gives both weights 1/2. Anticommutation excludes M=±I and n=0; either bit is positive.

- `lem-qc-deterministic-stabilizer-measurement`: Steps 1.1–4.1: n=0 handled by scalar ±I. For n>=1 maximal isotropy puts the commuting M label in L; label injectivity gives unique g and Hermitian phase gives unique sign. g fixes psi, so P_b psi=psi and opposite projection is zero. Norm-law and zero-branch convention give weights 1,0 and unchanged ray. Rank n is explicit and essential.

- `lem-qc-computational-basis-stabilizer-tableau`: Steps 1.1–2.1: wire a=j+1 acts on factor j, signed Z fixes the normalized basis vector; X and Z coordinate labels have delta pairings and zero within-family pairings. Independent Z labels prevent -I in the generated group. n=0 has empty families and S={I}. Both signs x_j checked.

- `lem-qc-random-measurement-stabilizer-update`: Refuter 16:1 confirmed fatal on original statement: n=2, repeated Z1 rows, psi=|00>, M=X1 gives rank-one update. Repaired statement explicitly assumes independent binary labels, a stabilizer subgroup fixing psi, and Hermitian Pauli M; F5 now separates hypothesis from cited isotropy. Steps 1.1–3.1 checked: old commuting products are Hermitian; n-1 transformed labels independent in L, m outside L by pairing with v1; n independent commuting rows exclude -I. Each fixes the nonzero branch of norm squared 1/2, giving its unique rank-n ray. n=1 works; n=0 excluded. No AC. Consumer uses checked below.

- `lem-qc-tableau-clifford-update`: Steps 1.1–3.1: H adds 2xz, S adds x and inverse S subtracts x in the fixed i^k X^x Z^z convention. CNOT images keep X factors before Z, so no extra phase. All binary transforms are invertible and preserve omega (the extra terms cancel in F2); conjugation preserves Hermiticity, commutation and -I exclusion. Wire conversion a=j+1 checked. n=0 has no admissible wire gate.

- `lem-qc-tableau-deterministic-sign`: Steps 1.1–3.1: empty system uniquely gives c=(), G=I and handles both scalar signs. Otherwise L-perp=L and independent row labels make target membership consistent and unique. Exact phase-aware multiplication in increasing order produces G=±M, with Hermiticity excluding ±i. Since G fixes psi, the selected sign gives probability one; opposite projection vanishes. Gaussian elimination is justified by finite invertible row operations, no arbitrary choice.

- `thm-qc-tableau-measurement-update`: Steps 1.1–2.1: valid generator tableau supplies independent rank-n stabilizer rows and Hermitian M, including the corrected random-update hypotheses. Anticommuting pivot gives two positive half-probability pure branches; commuting case gives unique phase sign, unchanged ray and zero opposite branch. Pure branch norm and positive-branch density identify instrument density with the ray projector. n=0 can only take the deterministic scalar case.

- `thm-qc-gottesman-knill-exact-simulation`: Steps 1.1–3.1: basis tableau establishes invariant; conditional transitions agree at every reached node, and equal transcripts choose the same deterministic child. Finite tree gives termination within T; no zero-weight conditional state is evaluated. Dense n by (2n+O(1)) rows, at most n length-O(n) pairings/products, and Gauss-Jordan on 2n by n system give O((n+1)^2) workspace and O((n+1)^3) worst instruction time. Gate/random costs O((n+1)^2) are conservative. Initialization/output quadratic and transcript <=T bits; controller C_cl separate. Scalar n=0 and T=0 covered. Reader F8 excerpt matches the clarified generator-only algorithm; no proof rewrite.

- `ex-qc-stabilizer-x-measurement-branches`: Verification 1.1–3.1: single Z label independent and fixes normalized |0>; X Hermitian anticommutes, so corrected random-update lemma applies. Direct projections are (|0>±|1>)/2, norm squared 1/2; normalized rays have stabilizers ±X. Repeated X returns same sign with certainty and annihilates opposite branch, to which bottom convention applies.

## Sources and dependency coverage

Read all batch-16 carriers and every declared direct dependency's actual Statement or Definition; checked finite-dimensional published suppliers at their used interfaces, without claiming a new audit of their entire transitive closure. The product/adjoint, quotient, commutator and Hermitian-phase formulas preserve exact signs; finite-field counting, rank-nullity, finite basis extension, product-basis trace and positive-operator spectral facts apply with their stated hypotheses. No arbitrary choice is used.

Consulted [de Wolf, Quantum Computing: Lecture Notes](https://arxiv.org/pdf/1907.09415), Chapter 20 §§20.1–20.3, printed pp. 173–176 (PDF pages 185–188), including the complete two-case measurement-update argument and Theorem 6. Independence is explicit at the start of the measurement argument. Consulted [Watrous, Understanding Quantum Information and Computation](https://jhwatrous.github.io/UQIC.pdf), Lesson 14 §14.1, printed pp. 404–406 (PDF pages 410–412), and §14.3 code-dimension proof, printed pp. 420–422 (PDF pages 426–428). Consulted [Aaronson–Gottesman, Improved Simulation of Stabilizer Circuits](https://arxiv.org/pdf/quant-ph/0406196), §§II–III, PDF pp. 3–5, for phase-aware representations, generator-only versus extended-tableau costs, measurement procedures and pairing invariants. Full relevant source passages were read, using the current web PDF for de Wolf and local `research/quantum-computing-planning/sources/qc_r4/{watrous-uqic,aaronson-gottesman-0406196}.txt` for the latter passages. The local proofs supply the exact binary-phase convention and scalar-register boundary rather than importing a stronger source conclusion.

No defective published supplier was found; published content remains read-only and no published-ledger update was needed. Frontier dependency ledger updated for owned consumers; stable IDs and inventories retained, no withdrawal proposed.

## Local validation and handoff

- Initial risk report: 17 HIGH/CRITICAL items routed; reviewed every one and saved specific complete dispositions.
- Final `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-16.proof-contracts.json --require-reviewed`: 0 errors, 17 items.
- Final `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-16.proof-contracts.json --strict`: 17/17 checked, 0 errors, 0 warnings. An initial stale F4 quote was refreshed before this pass.
- Reflowed both edited items; final precheck on both: 2 checked, 0 failing.
- Final `node tools/proof-layout.mjs items/lem-qc-random-measurement-stabilizer-update.md items/lem-qc-stabilizer-average-projector.md`: 2 items, 7 steps, 0 defects, after all item edits and reflow.
- Scoped rendercheck on both edited items: passed YAML and actual KaTeX parsing. An earlier exploratory `rendercheck --help` was interrupted because that tool treats it as an unscoped invocation; no corpus-check success is claimed.

No local mathematical blocker remains. Read-only live status reports the run still running with no dispatch in flight, but global blockers identify invalid construction-scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12 and repeated split-10 failure. These are outside this assignment and were not altered. Engine owns decision hash stamps, full gate battery and all later transitions. Next action: engine collection of the report and exactly three decisions.
