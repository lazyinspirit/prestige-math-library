# Independent QC scaffold audit amendments

This supplement is authored by the independent QC auditor on 2026-10-14. Original qc_r1..qc_r6 reports and source ledgers retain their own reading attestations and original embedded exports. The current proposed-items.json and pages.json supersede those exports; this file is not a new researcher source-reading receipt.

## QC01

Root first-argument-linear pairing preserved; trace norms are for rectangular finite maps; actual SVD supports V→W and no duplicate SVD is needed. Duality, positive parts, singular values and trace shapes have explicit local suppliers.

Revised IDs: `thm-qc-hermitian-trace-norm-positive-negative-parts`, `thm-qc-trace-norm-rank-one-formula`.

## QC02

Nonzero registers versus empty tensor versus zero spaces separated; ordered product basis/big endian, tensor extension, unitary permutations, partial-trace nondegenerate pairing and all finite coordinates checked.

Revised IDs: `def-qc-tensor-map`, `thm-qc-partial-trace-positive-and-trace-preserving`, `thm-qc-tensor-map-composition-and-adjoint`.

## QC03

Rays/projectors, trace-one PSD domain, mixed versus pure ensembles and conjugated Schmidt coordinates checked. HJW effect data is introduced before QC04 without a reverse page edge; padded auxiliary equivalence and rank lower bound retained.

Revised IDs: `def-qc-density-operator`, `def-qc-ensemble-and-purification`, `thm-qc-ensemble-purification-correspondence`, `def-qc-finite-positive-effect-family`.

## QC04

All outcome laws are definitions with separate normalization; positive branches alone normalize. Borel input measurability repaired; finite Naimark compression added from explicit V formula. Physical measurement postulates supply no logic.

Revised IDs: `def-qc-finite-outcome-probability-kernel`, `def-qc-povm-and-outcome-law`, `thm-qc-finite-outcome-law-is-a-probability-kernel`, `thm-qc-finite-naimark-isometric-compression`.

## QC05

All channels complex-linear CP/TP on full matrix spaces; Choi input-first unnormalized vectorization fixed. Kraus, trace condition, isometric dilation and inverse directions supplied separately. Unitary conjugation definition/validity added.

Revised IDs: `thm-qc-channels-compose-and-tensor`, `def-qc-unitary-conjugation-channel`, `prop-qc-unitary-conjugation-is-channel`.

## QC06

Root versus squared fidelity and half trace/raw diamond norms distinguished. General diamond inputs reduced to rank-one operators, not density matrices. Uhlmann/measurement/pure-distance suppliers added. Singular no-broadcast support/faithful convexification and arbitrary-family diagonalization retained; Haar AC carried to its consumers.

Revised IDs: `lem-qc-optimal-cloner-attains-bound`, `lem-qc-optimal-cloning-worst-case-upper-bound`, `thm-qc-channel-composition-hybrid-bound`, `thm-qc-channel-diamond-norm-one`, `thm-qc-channel-tensor-error-bound`, `thm-qc-diamond-norm-ancilla-dimension-bound`, `thm-qc-exact-mixed-state-cloning-fidelity-criterion`, `thm-qc-fidelity-purification-characterization`, `thm-qc-fuchs-van-de-graaf`, `thm-qc-optimal-universal-pure-state-cloning-bound`, `lem-qc-fidelity-classical-measurement-minimum`, `lem-qc-pure-state-trace-distance`, `thm-qc-fidelity-range-equality-and-products`.

## QC07

Pauli Y signs and trace algebra checked directly. Qubit definition no longer asserts its later Bloch theorem; PSD ball versus purity sphere and real unit axes explicit. Second independent foundation source recorded.

Revised IDs: `def-qc-qubit-and-bloch-representation`, `thm-qc-bloch-purity-sphere`, `def-qc-one-qubit-gate-alphabet-and-rotations`.

## QC08

Control-first blocks and activation explicit; phase witness uses unit target eigenvector, correct POVM and nonzero dimensions. Both reflection signs/control relation retained; black-box inverse/control access explicitly charged.

Revised IDs: `thm-qc-standalone-global-phase-invariance`, `thm-qc-controlled-global-phase-is-relative-phase`.

## QC09

Layer commutation/local embedding now actual suppliers, chronological denotation fixed. CP coherent-record hidden Kraus index distinct from observed labels; reference-preserving deferred measurement retained. Resource model stays earlier than QC14.

Revised IDs: `def-qc-circuit-denotational-semantics`, `lem-qc-coherent-record-isometry`.

## QC10

Boolean DAG compiler now finite instructions, repeated-port scratch, exact truth tables and compute/copy/reverse; Toffoli/Fredkin explicitly defined. Character-target kickback for multi-output oracles stated. Parallel fanout is coherent copying of basis labels, not arbitrary-state cloning.

Revised IDs: `alg-qc-reversible-embedding`, `thm-qc-reversible-embedding-cost`, `thm-qc-phase-kickback-from-xor-oracle`, `lem-qc-toffoli-clean-target-and-uncomputation`, `def-qc-toffoli-and-fredkin`.

## QC11

Givens zero branches and exact arithmetic declared; Gray-path swaps and control expansion explicit. CSD prerequisite added with degenerate spectral-support route. QSD n≥2 domain repaired. Barenco bounds are construction upper bounds; generic CNOT lower bound uses smooth stabilizer absorption and Sard.

Revised IDs: `alg-qc-two-level-unitary-elimination`, `alg-qc-two-level-gate-to-elementary-gates`, `thm-qc-exact-arbitrary-unitary-qsd-upper-bound`, `lem-qc-generic-cnot-parameter-count`, `thm-qc-multicontrolled-ancilla-resource-tradeoff`, `thm-qc-cosine-sine-block-decomposition`.

## QC12

Finite certified base net, small-radius logarithm/commutator and error cancellation routes retained. Ideal real arithmetic compiler separated from unresolved Cauchy-name Turing bit stability. Projective full-block phase guarantees never substituted into a control. Monic-minimal-polynomial terminology repaired.

Revised IDs: `lem-qc-clifford-t-projective-density`, `alg-qc-solovay-kitaev-unitary-compiler`, `thm-qc-solovay-kitaev-error-and-resource-bound`, `thm-qc-solovay-kitaev-bit-complexity`.

## QC13

Canonical ring coefficients and source sqrt2 denominator convention fixed. Exact descent/base certificate supplier added; explicit controlled-T compute/T/uncompute and 15-gate Toffoli checked exactly. Scaled-grid/norm solver operational contract added; factoring/primality hypotheses distinct from bit costs.

Revised IDs: `def-qc-dyadic-cyclotomic-ring`, `def-qc-denominator-exponent`, `thm-qc-single-qubit-exact-clifford-t-characterization`, `alg-qc-exact-single-qubit-clifford-t-synthesis`, `thm-qc-exact-clifford-t-synthesis-optimality`, `alg-qc-controlled-t-clean-ancilla-circuit`, `alg-qc-rz-clifford-t-approximation`, `thm-qc-rz-clifford-t-tcount`, `lem-qc-clifford-t-denominator-descent-and-base`, `prop-qc-controlled-t-clean-ancilla-correct`, `alg-qc-cyclotomic-scaled-grid-and-norm-solver`.

## QC14

Polynomial full-list uniformity, promise/off-domain behavior and exact algebraic labels retained. Acceptance now sums all unmeasured wires and has a separate normalization theorem. Amplification uses certified log upper bound and rational threshold; costs count all copies and postprocessing.

Revised IDs: `def-qc-quantum-acceptance-probability`, `alg-qc-bounded-error-amplification`, `thm-qc-bounded-error-amplification-correct`, `thm-qc-output-acceptance-law-normalizes`.

## QC15

Full phase-aware group before binary quotient; mod2 parity versus mod4 phase tracked. Hermitian phase condition, nondegenerate alternating form, conjugation and symplectic lift finite elimination route retained.

Revised IDs: .

## QC16

Rank subgroup excludes −I and pure state existence discharges via average projector. Measurement now explicitly Hermitian. Signed-generator finite simulator added with deterministic Gaussian membership, fair random branch and conservative O(T n³) cost.

Revised IDs: `def-qc-stabilizer-state`, `thm-qc-stabilizer-projector-rank-and-code-dimension`, `def-qc-pauli-measurement-branch-semantics`, `thm-qc-gottesman-knill-exact-simulation`, `alg-qc-stabilizer-exact-simulator`.

## QC17

Bell preparation chronological H then CNOT and decoding reverse corrected; dense-coding label phases explicitly aligned. Teleportation post-gate branch expansion/inverse correction/reference extension retained and separately charged.

Revised IDs: `thm-qc-bell-transform-inverse`, `alg-qc-teleportation`, `alg-qc-dense-coding`.

## QC18

Generic F_q not Z/qZ; generator/parity shapes and zero-code convention explicit. Bilinear dual, syndrome, disjoint error balls/erasure uniqueness retained. Quantum distance only gives detection here; correction uses later KL.

Revised IDs: .

## QC19

KL scalar Gram, diagonal error mixing, zero-on-code cases and residual trace-preserving recovery retained. Subsystem equality correctly uses J†E†EJ and gauge reference marginal; sufficiency reduces indexed gauge restrictions to ordinary KL.

Revised IDs: `def-qc-correctable-subsystem-and-gauge-factor`, `thm-qc-subsystem-knill-laflamme`.

## QC20

Logical Paulis correctly use quotient by scalar phases/stabilizers; distance uses set difference rather than N(S)S. Nested C2⊆C1 convention needs no extra C2-perp inclusion. Encoder now finite phase-aware pivot instructions. Explicit relative surface cellulation/check shapes added, path prefactor corrected to d+1.

Revised IDs: `thm-qc-stabilizer-projector-and-dimension`, `def-qc-stabilizer-syndrome-and-logical-operators`, `def-qc-stabilizer-distance`, `thm-qc-stabilizer-distance-detection-and-correction`, `def-qc-css-code-from-nested-binary-codes`, `thm-qc-css-syndrome-correction`, `alg-qc-stabilizer-encoder-by-symplectic-elimination`, `def-qc-square-planar-surface-code`, `thm-qc-square-planar-surface-code-distance-and-path-count`.

## QC21

Fault locations finite CPTP replacements; deviation strengthened from mere marginal equality to supported-error span. Disjoint child fault sets and q<a declared for probability recursion; overlapping exRec product bound requires truncation proof. Conditional proper-code and t1/full-gadget authoring holds retained; surface iid-Z memory theorem kept separate.

Revised IDs: `def-qc-code-deviation-and-spread`, `lem-qc-recursive-bad-rectangle-probability`, `thm-qc-proper-code-concatenated-threshold`, `thm-qc-t1-extended-rectangle-threshold`, `thm-qc-planar-surface-code-iid-z-memory-bound`.

## QC22

J(alpha) exact phase/basis now defined. One-bit/CZ branch identity preserved; normalize circuit into transport rounds so CZ-only layers do not insert an unwanted H. Explicit Pauli-frame/angle schedule and reference branch norm induction retained.

Revised IDs: `lem-qc-one-bit-teleportation`, `lem-qc-adaptive-angle-pauli-frame-update`, `def-qc-circuit-to-graph-resource-encoding`, `thm-qc-circuit-simulated-by-adaptive-pattern`, `def-qc-j-gate-and-equatorial-basis`.

## QC23

Exact rewrites have fixed finite rules and decreasing gate count. Counting model repaired to one charged output bit (free arbitrary acceptance destroys bound), finite active-wire count and C≥n. Barenco resource reuse repaired. Separate VMW/Allender model and source hold retained.

Revised IDs: `thm-qc-qsd-cnot-upper-bound`, `thm-qc-generic-circuit-count-lower-bound`, `thm-qc-clean-ancilla-multicontrolled-tradeoff`.

## QC24

Prefix rotations/leaf phases now finite instructions and zero branches; O((n+1)D) bounded-arity count covers n0. State versus clean work/output widths separated. Isometry completion/extension added; exact countability, smooth projective-chart and fixed-half packing routes retained. New normalized-table precision lemma supplies errors while bit-time stays held.

Revised IDs: `alg-qc-state-preparation`, `thm-qc-state-preparation-rotation-level-upper-bound`, `thm-qc-state-preparation-cost`, `alg-qc-isometry-unitary-completion`, `thm-qc-isometry-completion-and-synthesis`, `thm-qc-amplitude-table-precision-and-compilation`.

## QC23 recovered-source supplement

Allender's official author-hosted17-page manuscript has now been fetched and personally read in full by the independent auditor. The original unavailable-source statement is superseded, not rewritten as an original researcher read. Six exact typed local contracts now supply the VMW alternative; the arbitrary editorial placeholder is removed. Uniform TC0 arithmetic and tight near-linear reductions remain substantial local proofs/source obligations.
