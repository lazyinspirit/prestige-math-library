# Batch 26 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-26`.

## Ordered review checkpoint

`def-qa-binary-field-f2`: Read Verification 1.1–3.1 and the three published quotient definitions. Positive/negative integer induction exhausts residues, 2 does not divide -1, and all eight operation entries follow from representative arithmetic. No field laws or AC used.

`def-qa-binary-dot-product`: Read Verification 1.1–3.1 and all four suppliers. Coordinate AND equals integer multiplication on bits; induction identifies the ordered XOR fold with the ordered quotient sum. Empty width gives zero on both sides; no field axioms or AC used.

No item edits.

## Read-only supplier decisions

`reader:26:2` (historical reader carrier only): Confirmed historical nonfatal citation error: original step 4.1 cited isometry F2 for exponential multiplication. The current producer now declares F12 and cites the exact exponential-addition theorem; inspected the entire current proof, all cited supplier interfaces, batch-8 contract and manifest independently. Norm-one eigenvector, conjugate eigenphase preparation, positive two-effect POVM, root-first trace calculation, cos^2(theta/2), and both 2pi-period cases are sound. Reuse existing closed row qca60-b8-3a-witness-citation-labels; no new repair or duplicate defect. The reader error is nonfatal: the mathematical assertion was true and the repair is an exact supplier citation. The historical finding does not refute corrected current bytes.

`reader:26:1`, `refuter:26:1`: False positive: the carrier explicitly restricts a,b,t to bits 0 and 1. The cited CNOT Definition and Verification 1.1–1.2 fix all four XOR outputs; ordinary multiplication on these bits gives 00=01=10=0 and 11=1, so ab is exactly conjunction and t XOR ab is unambiguous. No field axiom, residue representative selection, or quotient identification is used by this gate action or the assigned parity consumer. Read the current Definition, its declared gate/register/basis/encoding suppliers, batch-10 manifest and contract document (this definition has no contract entry). An operation-table duplication or edge to the later QA item is unnecessary.

All routed source fingerprints, pre-reader producer snapshots, routing carriers and consumer paths are retained verbatim in the decisions JSON. No historical binding is unbound.

## Levels 11 and 16

`thm-qa-reversible-binary-dot-product-correct-and-cost`: Reviewed all six steps and every declared supplier interface, including the explicit Toffoli/CNOT actions. Forward invariant is the ordered parity p_i; reverse invariant q_i=p_i cleans r without touching copied z. Linear extension applies to the zero-work subspace, including arbitrary data superpositions. At n=0 both loops are empty and CNOT with r=0 fixes z, still counting one occurrence; total 2n Toffoli plus one CNOT and one clean bit in the explicitly permitted gate alphabet. No oracle or AC.

`def-qa-phase-query`: Reviewed all three Verification steps and total-address, register, encoding, Dirac and orthonormal-product-basis interfaces. Each diagonal entry is exactly +1 or -1, so orthogonality and invertibility hold and P_f^2=I. At a=0 the sole basis vector acquires the constant sign. Controlled access is expressly separate; no choice or field laws used.

`def-qa-standard-bit-query`: Reviewed both Verification steps and all six supplier interfaces, especially total Boolean XOR-oracle unitarity. Keeping x makes the map an involutive basis permutation even for noninjective f; a=0 gives a fixed target translation, b=0 gives identity, and both zero gives the scalar identity. Promise constrains instances rather than addresses; query count is distinct from compiled gate count. No AC.



## Level 17

`thm-qa-compute-copy-uncompute-clean-query`: Reviewed Proof 1.1–5.1 and all ten direct interfaces; read the actual QC10 embedding Definition and cost proof. V inverse acts only on address/value/work, while copy changes only the distinct target; their basis identities extend to the clean-input subspace. Counts are exactly 2G+b under explicit same-count inverse access. Concrete QC10 is already a full XOR query, so its 6S+4E+b bound is used once. Repeated output ports and repeated source ports are handled by QC10, with clean copied controls. Empty address, target, work and zero-node DAG cases are valid; E=O(S) is conditional. No AC or depth inference.

`thm-qa-global-phase-under-control`: Reviewed Proof 1.1,1.2,2.1,3.1 and all seven declared suppliers, including the entire corrected batch-8 relative-phase proof and exact exponential law. Constant f gives sign times I, identical rank-one density and finite POVM laws for standalone calls. Explicit diag(I,P_f) sends plus to plus/minus with certainty for c=0/1, including a=0. The U=I theta=pi witness satisfies nonzero finite target hypotheses; controlled identity requires no oracle and controlled P_f remains separately assumed. Historical F2 citation defect is resolved by producer F12; no current consumer repair or AC.

`thm-qa-phase-kickback`: Reviewed both steps and all seven suppliers. Checked f(x)=0 and 1 separately: XOR fixes minus or negates it; finite linear expansion factors out the unchanged minus target exactly. Norm is one by orthonormal qubit basis. The same calculation holds for a=0 and constant functions, including an overall minus sign. One standard query is used; no controlled access or AC inferred.

## Level 18

`thm-qa-bit-query-to-phase-query`: Reviewed all three steps and seven exact supplier interfaces. Direct matrices give X then H sends zero to minus (HX chronology); phase kickback gives P_f on arbitrary address superpositions and keeps the target minus. Count is one separately charged standard query and exactly two preparation gate occurrences under explicit A1, including a=0. No generic loading, inverse query or controlled access is assumed; no AC.

`thm-qa-controlled-phase-query-to-bit-query`: Reviewed all three steps and nine supplier interfaces. With output as the first control factor, fixed x gives diag(1,(-1)^f(x)); direct multiplication gives HIH=I and HZH=X. Both target bits and both values of f are covered, basis extension gives the full XOR action, and a=0 remains valid. Exactly one explicitly granted controlled call plus two H occurrences; bare phase access is insufficient. The address-first displayed output identifies the named wire values while the call convention remains explicitly control-first. No AC.

`ex-qa-oracle-conversion-and-uncomputation`: Reviewed all five steps and fourteen suppliers. Three CNOTs implement x XOR into an arbitrary target and restore r; a=11,x=10 gives parity one and reverse gates reset r. With plus address and minus target, cleanup gives minus address then H gives deterministic one. Omitting cleanup leaves (|0,0>-|1,1>)/sqrt(2) on address/work; H yields orthogonal work states of equal squared norm, so the address law is uniform. The displayed regrouping retains explicit factor subscripts. Constant-one controlled phase gives minus control, distinguished by H; standalone sign leaves density unchanged. Explicit prepared example inputs and gate-access assumptions retained; no AC.

All eleven routed risk reviews are complete. No item or page changed. 

## Final carrier binding

`refuter:26:2`: False positive on the exact observed carrier: refuter:26:2 binds raw item SHA-256 7d5fbb6a68aacab9dfa988108f1d55797e3a83761ec4a0d2c3c27bc95b5f9c8f, which matches the current file byte for byte. Those bytes declare F12 as the exponential addition law and step 4.1 explicitly cites F12 in prose and trailing tags, not F2. Independently reviewed the entire current proof, exact supplier interfaces, producer manifest and contract: the probability formula and hypotheses hold. The earlier reader:26:2 binds a distinct 2db1ceb8... carrier with the historical F2 error and remains confirmed_nonfatal against the existing repaired row; it is not conflated with this corrected refuter carrier.

The Toffoli raw hash is unchanged from both routed observations: `d114da7930580de00e29a297836bd8e44954d6dfd5c736f307b8376c3521ffb4`. The corrected relative-phase raw hash is `7d5fbb6a68aacab9dfa988108f1d55797e3a83761ec4a0d2c3c27bc95b5f9c8f`. Original routing fields remain untouched in each decision.

## Sources and prerequisites

Reviewed the current batch-26 carriers and their direct cited interfaces. Specific source checks include `def-integers-modulo-n` / `def-addition-and-multiplication-modulo-n` / `def-congruence-modulo-an-integer`, Definition (representative-independent residue operations); `def-qc-cnot-and-control-target-order`, Definition and Verification 1.1–2.1 (all XOR cases); `def-qc-toffoli-and-fredkin`, Definition; and `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`, Proof 1.1–3.1. The controlled witness was checked against every cited current supplier Statement/Definition, in particular `thm-complex-exponential-addition-and-real-extension`, Statement and Proof 1.1–3.1; the Cartesian-modulus corollary; the exponential-kernel theorem; spectral, trace, Parseval, adjoint, POVM, and tensor interfaces. The concrete cleanup cost was checked against `alg-qc-reversible-embedding`, complete Definition, and `thm-qc-reversible-embedding-cost`, Statement and Proof 1.1–4.1. The exact X/H matrices and explicit controlled/inverse access interfaces support both conversions. These are local mathematical checks; no claim of reading external source books or auditing all transitive suppliers is made.

Opened both producer manifests and contracts. Batch 8's corrected F12 citation, derivation and manifest dependency agree with the actual proof. Batch 10's contract document has no entry for the Toffoli definition (its null contract fingerprint was already routed); its manifest agrees with the current definition and its involution justification. This absence is not treated as a mathematical defect in the gate action.

## Outcomes and checks

Exactly four decisions: `reader:26:1` and `refuter:26:1` are false positive; `reader:26:2` is confirmed nonfatal and reuses the existing repaired batch-8 defect row; `refuter:26:2` is false positive on its exact corrected observed bytes. Two closed false-positive disposition rows record the dismissed findings without claiming confirmed defects. No duplicate row was created for the producer's existing repaired citation defect.

All twelve owned current item raw hashes match the immutable reader-post inventory; pre/post item/contract/manifest dictionaries and page dictionaries are identical. There are no touched or page obligations, and no reader repair to accept, amend or revert. Only risk-review fields were added to the batch-26 contract; no item, page, manifest, provenance or verification stamp changed. Therefore no item reflow, precheck or proof-layout invocation was triggered.

- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-26.proof-contracts.json`: exit 0; eleven HIGH/CRITICAL items identified before review.
- The same command with `--require-reviewed`: exit 0, zero errors, eleven required reviews complete.
- Focused independent Python calculation: 682 basis inputs for widths 0–4 satisfy parity output and exact clean-work restoration; both kickback bit values and all H-phase-H target cases pass; omitted-cleanup address probabilities are 1/2 and 1/2.
- Decision JSON consistency check: exactly four owed obligations, one closed matching ledger row per decision, all original producer fingerprints, observation bindings and dependency paths retained.
- `node tools/frontier-dependency-ledger.mjs refresh --run quantum-computing-algorithms-60-2026-10-15`: exit 0, refreshed and deduplicated. All 73 existing owned edges retained; item rows now include current consumer-use evidence.

No defective published item, proposed withdrawal, substantial missing prerequisite, unresolved mathematical uncertainty or local blocker was found. Published content remained read-only. The read-only engine status reports independent run blockers: invalid batch-12 scheduling identity `def-qc-effective-unitary-matrix-input` and the batch-10 split failure; neither is repaired or dispositioned by this batch. No judging, stamping, dispatch, stage transition or gate battery was initiated. The engine owns subsequent hash sealing and gates.
