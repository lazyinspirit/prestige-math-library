# Batch 22 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-22`.

The scope routes no touched/page carriers and no reader/refuter findings. The decisions array is empty. Reader and refuter report no defects; these are evidence rather than mathematical acceptance. Review below follows the generated dependency order and checks current direct prerequisite interfaces. One nonfatal proof-index repair was found during risk review and completed below. No Statement or Definition changed.

## Completed risk reviews

### `lem-qc-j-basis-and-phase-identities`

Checked all three matrix steps against the current J, H, Pauli and Dirac definitions. Conjugation reverses the phase in the equatorial vectors; J(-beta)X has exactly the stated scalar and J(pi/2)^3=(1+i)/sqrt(2) I. Real angles include 0 and pi/2; orthonormality follows from unitarity. No choice or endpoint restriction. Sources: current `items/lem-qc-j-basis-and-phase-identities.md`, its Facts and direct dependency Statements/Definitions. No defect found. Next: next item in the dispatched order.

### `lem-qc-cz-matching-pauli-frame-action`

Checked both steps against current controlled-phase, binary adjacency, Pauli and tensor definitions. Expanding q(y+x) produces q(y)+q(x)+(Ax).y; applying X^x Z^z gives the two equal basis coefficients with the retained (-1)^q(x). Wire j corresponds to vertex position j-1. Empty matching and zero wires give the stated identity. No missing existence assumption or choice. Sources: current `items/lem-qc-cz-matching-pauli-frame-action.md`, its Facts and direct dependency Statements/Definitions. No defect found. Next: next item in the dispatched order.

### `lem-qc-one-bit-teleportation`

Checked all three steps and each current direct supplier interface (tensor, computational basis, Dirac, state, measurement, instrument and trace). Contraction of the prepared four coefficients gives 1/sqrt(2) X^b J(alpha) for both b. Its adjoint product is I/2, so each normalized input has positive probability 1/2 and conditional output is defined. Tensoring the operator equality proves the finite reference extension; no assumption of separable input is used. Sources: current `items/lem-qc-one-bit-teleportation.md`, its Facts and direct dependency Statements/Definitions. No defect found. Next: next item in the dispatched order.

### `lem-qc-adaptive-angle-pauli-frame-update`

Checked every step and the current Hadamard conjugation supplier. For x=0, J(beta)Z^z=X^zJ(beta); for x=1, commuting Z past X^z gives exactly (-1)^z exp(-i beta). All eight bit combinations are covered by the two symbolic cases; beta is real so the scalar is unit modulus. The frame update is causal and the referenced teleportation equality applies also to entangled inputs. Evidence: current item Proof and Facts; current direct supplier Statements/Definitions. Next: next item in dispatched order.

### `lem-qc-graph-state-amplitude-formula`

Checked all three steps against graph-state edge ordering, bit encoding, tensor and controlled-phase definitions. Each embedded CZ contributes (-1)^(x_u x_v), so multiplication gives the stated integer parity exponent. n=0 has exactly one empty word and coefficient one; E empty gives the plus tensor. No hidden edge-order assumption is needed. Evidence: current item Proof and Facts; current direct supplier Statements/Definitions. Next: next item in dispatched order.

### `lem-qc-normalized-rounds-preserve-circuit`

Checked every step and all four cases of the schedule against chronological circuit semantics. Empty layers contribute nothing; full-J layers have no intersecting CZ; CZ-only layers have two global Hadamards; mixed layers leave active J gates and contribute exp(i pi/4) on each idle wire. Those idle products are scalar even on CZ endpoints. Their product is exactly sigma_C, including d=0 and n=0. Evidence: current item Proof and Facts; current direct supplier Statements/Definitions. Next: next item in dispatched order.

### `lem-qc-r-y-r-z-multiplexor-gray-code`

Checked all three steps and current direct rotation, CNOT, circuit, resource, bit-order and embedding suppliers. The binary-reflected Gray traversal is cyclic including k=1. Walsh inversion uses all masks and yields each exact real theta_x. Returning parity is zero, so conjugation signs are (-1)^(p_j.x) for both y and z rotations and there are exactly 2^k rotations/CNOTs for k>0. k=0 uses one rotation. Corrected only the character-product index from r=1..k to r=0..k-1 to match the explicitly declared bit coordinates; synchronized the derivation. Statement and resource claim unchanged. Repair confidence 1. Evidence: current item Proof and Facts; current direct supplier Statements/Definitions. Next: next item in dispatched order.

### `lem-qc-transport-encoding-is-simple-and-size-bounded`

Checked all four steps against the schedule and finite-simple-graph definition. Horizontal edges uniquely determine wire and consecutive columns, vertical edges uniquely determine a matching pair and its round column; same-column and different-column edges cannot coincide. The Cartesian vertex count is n(R+1), and each layer contributes at most three rounds. n=0 forces R=0; n=1 forbids matching edges. No choice or substantial missing prerequisite. Evidence: current item Proof and Facts; current direct supplier Statements/Definitions. Next: next item in dispatched order.

### `lem-qc-graph-state-stabilizer-generators`

Checked all four steps and direct supplier interfaces. Conjugating X_v through incident diagonal CZ gates yields X_v times its neighbor Z factors; no loop puts Z on v, hence Hermitian involutions. Symmetric binary adjacency cancels the two commutator terms. Each generator fixes U_G plus, and any nonempty subset has nonzero X support, proving independence without an unstated scalar convention. Empty V is vacuous. Evidence: current Proof/Facts and exact cited supplier Statements/Definitions. No additional defect found. Next: next item in dispatched order.

### `lem-qc-measurement-pattern-for-cz`

Checked all three steps against the adaptive-pattern definition and entangled-input teleportation lemma. Commuting diagonal edge gates permits the input CZ before the two horizontal contractions. The four output maps have factor 1/2 and unitary remainder, giving I/4 adjoint products. HX^b is the exact inverse of X^b H, so all corrected branches are CZ/2, including arbitrary entangled two-qubit inputs. Evidence: current Proof/Facts and exact cited supplier Statements/Definitions. No additional defect found. Next: next item in dispatched order.

### `thm-qc-exact-unitary-synthesis-from-qsd`

Checked every step, exact current CSD, demultiplexing (including its complete proof), Gray-code, two-qubit-synthesis, polar-form and circuit supplier statements. CSD permits singular values 0 and 1. Each central block is Ry(2 eta_x), and diag(d_x,d_x*)=Rz(-2 eta_x). The demultiplexing proof places the diagonal coordinate matrix D between V and W, so its entries can indeed control rotations; no eigenbasis action is omitted. Four lower-register factors shrink n, terminating at n=1/2. The zero-wire assertion concerns the identity channel, not an arbitrary scalar matrix. Exact real labels and a finite instance-specific alphabet are explicit; no uniform bit cost or AC is assumed. Evidence: current Proof/Facts and exact cited supplier Statements/Definitions. No additional defect found. Next: next item in dispatched order.

### `thm-qc-pattern-branch-probabilities-and-zero-branches`

Checked all four steps, the full ordered contraction definition and each direct state/trace/positivity supplier. Prefix K_cb=L_b|c K_c respects measurement order and inherited surviving order. For each fixed prefix the two adapted bras use the same orthonormal basis, so their L*L sum is identity. Rectangular trace cyclicity preserves child trace sums and the isometric root has trace one. Pure-state trace equals squared norm. Nonnegative finite spectra show a zero trace branch is the zero operator; normalization is restricted to positive probability. q=0 and empty input/output use the scalar tensor convention. Evidence: current Proof/Facts and exact cited supplier Statements/Definitions. No additional defect found. Next: next item in dispatched order.

### `thm-qc-circuit-simulated-by-adaptive-pattern`

Checked all five steps, full graph encoding and current direct prerequisites. Postponing unused diagonal CZ edges to their round is legitimate: later edges avoid already measured columns, and commute with all earlier bras and the other edge gates. Input/output inherited orders match wire order, while measurements use round-major order. At round s, z*=z+A_s x and the exact matching sign precede the one-bit gamma factors. Induction yields 2^(-nR/2) lambda P U_C including sigma_C. Unitary conjugation yields uniform pure/mixed probability 2^(-nR); the 2^(nR) corrected leaves sum to the circuit channel. R=0 forces empty layers; n=0 has one scalar branch. Evidence: current Proof/Verification and Facts, and current direct prerequisite bodies. No defect found. Next: next item in dispatched order.

### `thm-qc-pattern-is-measurement-circuit`

Checked all four steps against the full pattern, classical control, finite circuit/resource, instrument and trace interfaces. Same ancilla embedding, inherited output order, ordered bras and diagonal edges give exactly K_b, not just a ray. Congruences remain nonnegative with any reference, establishing complete positivity. Normalization for all pure inputs and polarization give sum K_b* K_b=I, hence trace preservation for every operator. Suffix C(b) preserves trace and changes the branch to C(b)K_b; raw and corrected instruments are distinguished and suffix access/workspace/cost is explicitly charged. Empty transcript, empty registers and zero weights are covered. Evidence: current Proof/Verification and Facts, and current direct prerequisite bodies. No defect found. Next: next item in dispatched order.

### `ex-qc-one-edge-graph-state`

Checked each of the three Verification steps and all four direct suppliers. In basis 00,01,10,11 the edge signs are +,+,+,-. Both X tensor Z and Z tensor X reproduce those coefficients under the displayed basis permutations. For input 00 each raw CZ-pattern branch is plus-plus/2 because X fixes plus; HX^b then gives 00/2. All four probabilities are exactly 1/4 and the correction convention matches the gadget. Evidence: current Proof/Verification and Facts, and current direct prerequisite bodies. No defect found. Next: next item in dispatched order.

### `thm-qc-circuit-pattern-equivalence-and-universality`

Checked all four steps and all direct prerequisite interfaces, including the exact Euler rotation signs and QSD statement. Raw K_b and corrected C(b)K_b are kept distinct and have matching positive conditional states; zero branches are never normalized. For universality the local E notation reverses the supplier angles consistently: SXS*=Y, HZH=X and Rz^E(phi)=exp(i phi/2) P_-phi. Hence each one-qubit Euler factor is a J product times a retained scalar, which suffices for channel equivalence. Conjugating CZ by target H gives exact CNOT. The finite decomposition therefore gives a J/CZ channel representative; no exact realization of an arbitrary scalar on zero wires is asserted. The n=0 channel is identity and uses an empty pattern. Evidence: current Proof/Facts and actual direct dependency Statements/Definitions. No defect found.

### `thm-qc-graph-state-unique-stabilizer-ray`

Checked all three steps and direct graph, tensor, computational-basis, stabilizer definition, average-projector, rank/dimension and Dirac suppliers. The unit graph state is nonzero, so every product fixing it excludes -I. Subset X supports distinguish all 2^n group elements, giving stabilizer rank n. Applying the stated average-projector and rank formula yields a one-dimensional fixed space containing that vector and the exact outer-product projector. The n=0 branch is treated directly on C with group {I} and coefficient one, avoiding positive-n Pauli assumptions. Only finite data and no AC are used. Evidence: current Proof/Facts and actual direct dependency Statements/Definitions. No defect found.

## Repair and contract maintenance

Risk-review disposition: confirmed nonfatal indexing defect `qca60-b22-3a-gray-character-index`, closed as fixed at `3a-adjudicate`, repair confidence **1**. In `lem-qc-r-y-r-z-multiplexor-gray-code`, Proof 2.1 now uses the product over `r=0,...,k-1`, consistent with the declared least-significant-first coordinates. The corresponding contract derivation was changed identically. This is a proof-only inline correction; provenance was already `ai-altered`, no judge stamp is present, and the manifest Statement/dependencies remain accurate. No Statement/Definition consumer propagation is triggered. The exact current raw item SHA256 is `94caab4069e012282e72b7de85ff8926f5970e1503949ef46adfbee0d05bc480`.

The strict contract check initially found four stale quotes of `thm-qc-computational-basis-orthonormal`: in `lem-qc-one-bit-teleportation` (F9), `thm-qc-pattern-branch-probabilities-and-zero-branches` (F8), `thm-qc-pattern-is-measurement-circuit` (F8), and `thm-qc-graph-state-unique-stabilizer-ray` (F8). Refreshed those quote mirrors to the current complete Statement, which distinguishes coordinate-register orthonormality from the separately defined empty tensor register. Each consumer uses the qubit basis or the separately supplied tensor convention and remains sound. This mechanical quote refresh creates no defect row or routed decision.

## Sources and binding evidence

Read the current carriers and direct dependency Statements/Definitions named in each review above; additionally read the full current demultiplexing argument to resolve the placement of its diagonal coordinate matrix. This is a review of the assigned arguments and their prerequisite interfaces, not a new audit of every transitive supplier.

Primary-source spot checks: [Shende–Bullock–Markov, arXiv:quant-ph/0406176v5](https://arxiv.org/pdf/quant-ph/0406176), §5.1–§5.2, Theorems 10, 12, 13, PDF pp. 12–14: the CSD middle factor acts on the most significant wire; demultiplexing leaves diagonal D between lower-register unitaries; recursion has four smaller unitary factors and three multiplexed rotations. These interfaces agree with the local exact argument. No optimized complexity claim is imported.

[Raussendorf–Browne–Briegel, arXiv:quant-ph/0301052](https://arxiv.org/pdf/quant-ph/0301052), Procedure 2 and Eqs. (28)–(30), PDF p. 6, give ordered adaptive equatorial measurements and Pauli byproducts; §II D, Eq. (40) and Scheme 1 frame circuit concatenation. The local J basis has its explicitly fixed phase/sign convention, checked directly rather than copied from that source. These were source-interface spot checks, not a claim of rereading the entire external papers.

The pre-reader and post-reader snapshots have identical item hashes for all 24 carriers. Comparing current raw source bytes with the post snapshot finds exactly the Gray-code item changed by this adjudication. The original scope remains authoritative: zero touched obligations, zero page obligations, zero reader findings and zero refuter findings. Accordingly the task-named decisions file has `decisions: []`; no synthetic decision or hash stamp was added for the risk-only inventory. Risk reviews are recorded in the owning proof contract for all 17 HIGH/CRITICAL items; the eighteenth contract item is MODERATE.

## Checks and handoff

- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-22.proof-contracts.json`: 18 items reported, 17 HIGH/CRITICAL, no tool errors.
- The same command with `--require-reviewed`: all required reviews complete, zero errors.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-qc-r-y-r-z-multiplexor-gray-code.md`: one proof checked, zero failing.
- `node tools/rendercheck.mjs items/lem-qc-r-y-r-z-multiplexor-gray-code.md`: YAML and all math spans parse under the actual renderer/KaTeX.
- Final changed-item layout command: `node tools/proof-layout.mjs items/lem-qc-r-y-r-z-multiplexor-gray-code.md`: one item, three steps, zero defects. No item edit followed this command.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-22.proof-contracts.json --strict`: after the four quote refreshes, 18/18 items, zero errors and warnings.
- The newly appended defect row validates independently: one row, zero errors. The run-wide `defect-ledger validate --run quantum-computing-algorithms-60-2026-10-15` reported one outside-scope error: batch-2 row `qca60-b2-3a-zero-qubit-identification` uses subclass `unjustified-identification`, outside the closed enum. Route that mechanical record correction to its owner; no mathematical defect row is appropriate for this diagnostic. The canonical ledger view was regenerated using `node tools/defect-ledger.mjs render`.

No published defect, proposed withdrawal, unresolved mathematical prerequisite, or affected outside consumer requiring mathematical repair was found. Existing dependency records and stable IDs remain present. The only handoff issue observed is the outside batch-2 ledger-schema diagnostic above. No judge, decision-hash stamp, engine transition, or full gate battery was run. Next action belongs to the engine/owner: collect these artifacts, address that external diagnostic, and run the native gates.
