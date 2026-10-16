# Batch 2 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-2`. Scope has one touched obligation, no reader/refuter findings and no page obligations. Review proceeds in generated dependency order.

## Completed reviews

- `lem-qc-trace-pairing-nondegenerate`: Reviewed Statement, Facts F1–F7 and Proof 1.1–3.1 against current cited Definition/Statement sections. For D_ij nonzero, the explicitly linear coordinate map A has matrix E_ji, giving tr(DA)=D_ij; the zero-dimensional space has only D=0. Finite basis and index witnesses require no AC. Reader and refuter report no findings; independent review found no defect.

- `def-qc-tensor-register-and-permutation`: Checked Definition and Proof 1.1–5.1 with current tensor-basis, finite-iterated universal property, module structure, unique-coordinate and coordinate-inner-product suppliers. The finite coordinate pairing is positive definite, distributivity gives the first-linear pure-tensor formula, and spanning proves basis independence. Permuting factor order bijects product bases, with inverse permutation; n=0 gives C and identity, and a zero factor gives the zero space. Bases are supplied, so no AC is used. No reader/refuter finding or independent defect.

- `def-qc-partial-trace`: Definition and Proof 1.1–2.1 correctly prescribe finite output basis columns with row/output and column/input indexing. Unique coordinates extend these columns to a unique endomorphism; contraction is linear entrywise. For b=0 every inner sum is zero; for a=0 there is the unique empty output map. Current F1–F2 suppliers apply without AC. Reader/refuter have no findings; no independent defect.

- `def-qc-tensor-map`: Definition and Proof 1.1–2.1 checked against the finite-iterated universal property and tensor-register spanning statements. Applying each linear T_k gives a multilinear function, hence a unique linear extension. Empty family yields identity on C; a zero source or target factor yields the corresponding zero tensor space and zero map. No choice or basis selection is required. Reader/refuter report no finding; no defect found.

- `lem-qc-tensor-product-basis-and-dimension`: Statement and Proof 1.1–2.1 follow by repeated application of the current binary tensor-basis and finite-dimensional dimension suppliers and canonical parenthesization. Product pairings are Kronecker deltas. n=0 gives basis {1} and dimension 1; n=1 is the supplied basis; a zero factor gives empty basis and dimension zero. No AC beyond supplied finite bases. Reader/refuter have no findings; no defect found.

- `thm-qc-bitstring-index-is-bijection`: Checked Statement and Proof 1.1–3.1 against current encoding Definition, natural-number induction Statement and register/product-basis suppliers. Base n=0 is a bijection between singletons. The recurrence b*2^n+enc_n(y) maps the two first-bit cases bijectively to disjoint consecutive intervals covering the target, establishing injection and surjection without endpoint overlap. Position permutations have inverse permutations, hence permute basis labels. No AC; reader/refuter have no findings.

- `thm-qc-partial-trace-characterization-and-basis-independence`: Checked all five steps and current F1–F9 source statements. Both traces expand to sum R_(i,j),(i-prime,j) T_(i-prime,i), with row/output and column/input indices preserved. Identity/composite/tensor maps are linear. Nondegenerate trace pairing on H_A proves pointwise uniqueness for each R; coordinate linearity is already proved in the Definition. Repeating the identity in any B orthonormal basis yields the same operator by basis-independent trace and uniqueness. Zero A or B produces empty sums and unique zero map. Only finitely many orthonormal bases are chosen using the proved finite-dimensional supplier; no AC. No reader/refuter finding or independent defect.

- `thm-qc-tensor-map-composition-and-adjoint`: Checked Statement and all four steps with current tensor-map universal extension, product-basis, finite-dimensional adjoint existence/uniqueness and adjoint Definition. Composition and identity agree on spanning elementary tensors. Product pairings give <tensor(T)x,y>=<x,tensor(T*)y> with first-linear convention; sesquilinearity extends to all vectors and uniqueness identifies the adjoint. n=0 is identity on C and empty bases cover zero-dimensional source/target factors. Only finite basis choices, no AC. Reader/refuter have no findings; no independent defect.

- `thm-qc-partial-trace-positive-and-trace-preserving`: Checked Statement, F1–F10 and Proof 1.1–3.1 against current non-negative/self-adjoint definitions, adjoint-matrix Statement and already reviewed contraction/trace-characterization/product-basis suppliers. Summing Hermitian diagonal B-blocks gives self-adjoint S; the first-linear coordinate expansion yields <Sx,x>=sum_j <R(x tensor f_j),x tensor f_j> >=0. Set T=I in the characterization; the tensor identity fixes a spanning set, giving equal traces. Empty B gives S=0 and input zero; empty A is also zero. Two finite basis choices require no AC. Reader/refuter have no findings; no defect found.

- `ex-qc-register-endian-partial-trace`: Checked Example and all six Verification steps against current encoding, factor/product orthonormality, Dirac conversion, rank-one coordinate identity (including its proof), contraction and trace-characterization suppliers. enc_3(101)=4+1=5; v=(1,0,0,1)/sqrt(2) has norm 1; vv-dagger has exactly four entries 1/2. The four second-factor contractions give 1/2,0,0,1/2 and trace 1. This fixed example has no empty-input or variable-dimensional case; all sparse zeros and normalization are checked explicitly. No choice; reader/refuter have no findings.

## Touched carrier decision

`touched:2:thm-qc-computational-basis-orthonormal`: **accepted_repair**, repair confidence 1; closed nonfatal defect `qca60-b2-3a-zero-qubit-identification`. Current items/thm-qc-computational-basis-orthonormal.md has raw SHA256 8fbc1568f57434f944e6890a361cd21bd736b0a6c6f8f172c85c600fe71374f5, matching immutable reader-post and differing from reader-pre a1548f175f9b7730e0323c36112c67332fde45291edde7b5c8c9df1a6c9001ed. Independently checked Proof 1.1–3.1 against the current register Definition, standard-basis Statement and coordinate-inner-product Statement: Kronecker-delta inner products and spanning prove the Q_d result, while the zero-qubit clause follows separately from the empty tensor convention. Accept the reader correction described in reader-2.md; the zero-qubit register need not be literally Q_1. Direct consumer interfaces retain their basis and unit-vector properties; no necessary mathematical consumer repair. Batch-2 manifest statement and example citation mirror synchronized. Historical description is attributed to the reader report; the immutable pre snapshot supplies a fingerprint, not archived original proof bytes. No reconstruction of unobserved original bytes is claimed.

No item text was edited during adjudication. The changes here are ten risk reviews, two batch-local metadata mirrors, the closed defect row, the dependency-ledger note, and the required report/decision files.

## Supplier and consumer evidence

The local source statements and definitions listed below were opened in their current carriers. These are the mathematical premises used for this review, with the batch contract citations providing exact source-section locators. The independent matrix/tensor calculations above close the arguments without an external unproved premise. Published suppliers were checked at the relevant Definition/Statement level; their entire proofs were not re-audited. The example's in-run rank-one supplier proof was also read. No external textbook reading is claimed for this adjudication.

- `items/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases.md`: relevant Definition or Statement.
- `items/cor-finite-iterated-tensor-products-represent-multilinear-maps.md`: relevant Definition or Statement.
- `items/cor-tensor-products-of-finite-free-modules-and-dimension.md`: relevant Definition or Statement.
- `items/def-adjoint-of-a-linear-map-between-inner-product-spaces.md`: relevant Definition or Statement.
- `items/def-coordinate-column-and-matrix-of-a-linear-map.md`: relevant Definition or Statement.
- `items/def-dimension.md`: relevant Definition or Statement.
- `items/def-function-space.md`: relevant Definition or Statement.
- `items/def-linear-isometry-and-orthogonal-or-unitary-operator.md`: relevant Definition or Statement.
- `items/def-linear-map.md`: relevant Definition or Statement.
- `items/def-matrix-product-and-identity-matrix.md`: relevant Definition or Statement.
- `items/def-matrix-units.md`: relevant Definition or Statement.
- `items/def-natural-numbers.md`: relevant Definition or Statement.
- `items/def-non-negative-and-positive-operator.md`: relevant Definition or Statement.
- `items/def-qc-dirac-notation-conversion.md`: relevant Definition or Statement.
- `items/def-qc-ordered-bitstring-encoding.md`: relevant Definition or Statement.
- `items/def-qc-register-and-computational-basis.md`: relevant Definition or Statement.
- `items/def-real-and-complex-inner-product-space.md`: relevant Definition or Statement.
- `items/def-self-adjoint-and-normal-endomorphism.md`: relevant Definition or Statement.
- `items/def-tensor-product-of-modules-by-generators-and-relations.md`: relevant Definition or Statement.
- `items/def-trace-of-a-square-matrix.md`: relevant Definition or Statement.
- `items/def-trace-of-an-endomorphism.md`: relevant Definition or Statement.
- `items/lem-composition-and-identity-linear-maps.md`: relevant Definition or Statement.
- `items/lem-standard-basis-of-f-n.md`: relevant Definition or Statement.
- `items/prop-standard-coordinate-inner-products.md`: relevant Definition or Statement.
- `items/thm-adjoint-exists-and-is-unique-in-finite-dimension.md`: relevant Definition or Statement.
- `items/thm-commutative-ring-module-structure-on-a-tensor-product.md`: relevant Definition or Statement.
- `items/thm-induction-principle.md`: relevant Definition or Statement.
- `items/thm-matrix-of-a-composite-is-the-product.md`: relevant Definition or Statement.
- `items/thm-matrix-of-the-adjoint-is-the-conjugate-transpose.md`: relevant Definition or Statement.
- `items/thm-qc-dirac-notation-coordinate-identity.md`: relevant Definition or Statement.
- `items/thm-tensor-product-basis-from-bases.md`: relevant Definition or Statement.
- `items/thm-unique-coordinates-with-respect-to-an-ordered-basis.md`: relevant Definition or Statement.

The theorem's core Q_d claim is unchanged, and the separate empty-product clause preserves the basis {1}. A direct dependency/reference search identified 113 item carriers, including the defining register's justified_by backlink. I checked their explicit supplier-use paragraphs, and the Definition/Statement where the edge occurs only in metadata. They use orthogonality, unit basis vectors, completeness, or computational-basis labels; none requires a literal equality C=C^1. In particular, the zero-qubit uses in thm-qc-output-acceptance-law-normalizes, thm-qa-21-lcu-block-correctness, thm-qa-phase-kickback, def-qa-finite-branch-output-law, and lem-qa-hidden-coset-state-law retain their one-dimensional basis/spanning convention. Tensor-basis uses retain the separate product-basis supplier. This is an impact check of the changed clause, not a whole-proof audit of these outside consumers. No mathematical consumer repair or outside alert is needed.

Consumer IDs checked: `alg-qa-bernstein-vazirani-query`, `alg-qa-deutsch-jozsa-query`, `alg-qa-deutsch-query`, `alg-qc-dense-coding`, `alg-qc-reversible-embedding`, `alg-qc-teleportation`, `alg-qc-two-level-gate-to-elementary-gates`, `cex-qa-14-query-parallelism-does-not-give-exponential-search`, `cex-qa-19-adjacency-laplacian-sign-conventions`, `cex-qa-21-unknown-input-reflection`, `def-qa-14-boolean-search-query-model`, `def-qa-14-query-mismatch-projectors`, `def-qa-16-query-address-projectors`, `def-qa-21-clean-ancilla-postselection`, `def-qa-21-oblivious-reflection`, `def-qa-30-sdp-reference-state-access`, `def-qa-finite-branch-output-law`, `def-qa-phase-query`, `def-qc-cnot-and-control-target-order`, `def-qc-coherent-function-oracle`, `def-qc-controlled-phase-rotation`, `def-qc-controlled-z-and-swap`, `def-qc-css-code-from-nested-binary-codes`, `def-qc-qubit-and-bloch-representation`, `def-qc-register-and-computational-basis`, `def-qc-toffoli-and-fredkin`, `def-qc-two-level-unitary`, `ex-qa-14-hybrid-budget-for-n-small`, `ex-qa-19-complete-graph-search-matrix`, `ex-qa-19-hypercube-for-n-one-and-two`, `ex-qa-21-two-term-lcu-postselection`, `ex-qa-34-three-stage-budget`, `ex-qa-promise-and-cost-models`, `ex-qc-controlled-global-phase-witness`, `ex-qc-register-endian-partial-trace`, `ex-qc-reversible-and-oracle-compute-copy-uncompute`, `ex-qc-zero-plus-bloch-and-hadamard`, `lem-qa-11-good-bad-decomposition`, `lem-qa-14-coherent-query-normal-form`, `lem-qa-16-query-unitary-normal-form`, `lem-qa-19-hadamard-uniform-state-preparation`, `lem-qa-21-robust-one-step-oaa-isometry`, `lem-qa-29-coherent-sampler-outcome-law`, `lem-qa-32-simon-function-register-instrument`, `lem-qa-computational-basis-measurement-law`, `lem-qa-controlled-cyclic-multiplication-clean`, `lem-qa-dihedral-coset-state-fourier-law`, `lem-qa-dihedral-sieve-pair-combination`, `lem-qa-hidden-coset-state-law`, `lem-qa-swap-is-three-cnot-circuit`, `lem-qc-acceptance-probability-phase-invariance`, `lem-qc-ancilla-identities-stable-under-reference-and-mixtures`, `lem-qc-borrowed-bit-multicontrolled-x-linear`, `lem-qc-computational-basis-stabilizer-tableau`, `lem-qc-fresh-target-not-and-or-gadgets`, `lem-qc-generic-cnot-parameter-count`, `lem-qc-multiplexed-axis-rotation-gray-code`, `lem-qc-one-bit-teleportation`, `lem-qc-toffoli-clean-target-and-uncomputation`, `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`, `thm-qa-11-exact-integer-iteration-formula`, `thm-qa-19-complete-graph-search-correctness`, `thm-qa-19-hypercube-transfer-correctness`, `thm-qa-21-clean-ancilla-postselection-probability-law`, `thm-qa-21-lcu-block-correctness`, `thm-qa-21-oblivious-amplification-block-identity`, `thm-qa-23-certified-phase-approximation-correctness`, `thm-qa-23-qsp-synthesis-correctness`, `thm-qa-32-promise-classical-containments`, `thm-qa-35-code-fingerprint-state-properties`, `thm-qa-35-swap-test-measurement-effect`, `thm-qa-bernstein-vazirani-query-correct`, `thm-qa-compute-copy-uncompute-clean-query`, `thm-qa-controlled-phase-query-to-bit-query`, `thm-qa-deutsch-jozsa-query-correct`, `thm-qa-deutsch-query-correct`, `thm-qa-finite-abelian-hidden-subgroup-sample-law`, `thm-qa-global-phase-under-control`, `thm-qa-modular-order-finding-success`, `thm-qa-phase-kickback`, `thm-qa-reversible-binary-dot-product-correct-and-cost`, `thm-qa-simon-hadamard-sampling-law`, `thm-qa-simon-postquery-coset-state`, `thm-qa-truncated-qft-operator-norm-error`, `thm-qc-bell-transform-inverse`, `thm-qc-bitstring-index-is-bijection`, `thm-qc-bloch-coordinate-existence-and-uniqueness`, `thm-qc-clean-uncomputation-restores-workspace`, `thm-qc-cnot-creates-bell-entanglement`, `thm-qc-controlled-global-phase-is-relative-phase`, `thm-qc-css-encoding-dimension-and-commutation`, `thm-qc-css-syndrome-correction`, `thm-qc-deferred-measurement`, `thm-qc-dense-coding-correctness-and-resource-count`, `thm-qc-exact-arbitrary-unitary-qsd-upper-bound`, `thm-qc-graph-state-unique-stabilizer-ray`, `thm-qc-hadamard-pauli-conjugation`, `thm-qc-multicontrolled-ancilla-resource-tradeoff`, `thm-qc-one-control-unitary-two-cnot`, `thm-qc-output-acceptance-law-normalizes`, `thm-qc-pattern-branch-probabilities-and-zero-branches`, `thm-qc-pattern-is-measurement-circuit`, `thm-qc-phase-kickback-from-xor-oracle`, `thm-qc-rank-one-reflection-phase-and-control-sign`, `thm-qc-reversible-embedding-cost`, `thm-qc-reversible-embedding-parallel-depth`, `thm-qc-reversible-xor-oracle-unitary`, `thm-qc-stabilizer-encoder-correctness`, `thm-qc-state-preparation-rotation-level-upper-bound`, `thm-qc-teleportation-equiprobable-outcomes`, `thm-qc-teleportation-reference-stability`, `thm-qc-two-level-gate-synthesis-correct`, `thm-qc-two-qubit-unitary-three-cnot-synthesis`.

## Published findings and blockers

No defective published supplier was found in the reviewed interfaces, so no published-ledger entry or lock was needed. No proposed withdrawal was removed. No substantial prerequisite, unresolved current mathematical uncertainty, or batch-local blocker remains. The pre-reader file is a hash inventory rather than a proof archive; the report distinguishes the reader's historical description from the independently reviewed current bytes.

## Local checks

- Initial risk routing: 0 errors, 12 contracts routed (10 HIGH/CRITICAL).
- Final risk-report on the owning batch contract with --require-reviewed: 0 errors; all ten required reviews complete.
- proof-contract on the owning batch contract with --strict: 0 errors, 0 warnings, 12/12 checked.
- precheck on items/thm-qc-computational-basis-orthonormal.md: PASS, 1 checked, 0 failing.
- rendercheck on that explicit item: 1 file clean, real KaTeX and YAML parsing passed.
- Final proof-layout on that explicit item: 1 item, 3 steps, 0 defects. No item text changed after this check.

The decision file contains exactly the one routed touched obligation. No agents, judges, stamping, dispatches, publication or stage transitions were initiated; the engine owns subsequent hashes and gates.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
