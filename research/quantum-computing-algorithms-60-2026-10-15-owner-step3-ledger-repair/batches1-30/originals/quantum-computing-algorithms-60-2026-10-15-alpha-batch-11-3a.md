# Batch 11 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-11`. Scope: five touched obligations; no reader, refuter or page obligations. Reader report and empty finding artifacts independently checked. Initial risk-report: 21 contracts, eighteen HIGH/CRITICAL items, zero mechanical errors.

## Dependency-ordered review

### Level 0: lem-qc-unitary-group-cayley-charts

Checked all seven steps and the exact local manifold, density, compactness and Haar supplier statements. Cayley inverse X=(Q-I)(Q+I)^-1 is skew Hermitian; I-X is invertible, translated rational transitions are smooth, the inherited metric and countable base establish the topology. Compact finite chart balls give positive finite mass. Positive densities give both null-set directions for Borel sets (and their completions); AC_omega is used for the Radon measure and full AC only for optional Haar identification. N=1 is valid; N=0 is excluded. Reader step 4.1 addition is sound. Verdict: accepted_repair. Statement and dependencies unchanged; proof step 4.1 now supplies the missing topology and transition explanation. Exact pre/post fingerprints are retained in the immutable step3-hash-11 snapshots; no historical source reconstruction is asserted. Source evidence: current item steps 1.1–7.1 and each cited supplier Statement/Definition, especially def-smooth-manifold, the Radon-density theorem and normalized-Haar corollary. No published defect found. Risk review complete.


### def-qc-two-level-unitary

The ordered pair is orthonormal and distinct; orthogonal decomposition gives V direct-sum I and its inverse V* direct-sum I. The first-linear inner-product convention changes no matrix-adjoint identity. Scalar phases stay in the selected block. Fewer than two basis labels supplies no admissible distinct pair, rather than an empty-case claim. Risk review complete; no current defect found.

### thm-qc-two-level-unitary-elimination-correct

Checked the exact division input, h>0 on b!=0, G*G=I and G(a,b)=(h,0). Descending row order preserves earlier columns and cleared lower rows. An upper triangular unitary is diagonal by column orthogonality, including the final one-dimensional block. The finite sum N(N-1)/2 gives zero iterations at N=1. D=Gs...G1U yields the stated adjoint product and chronological D-first circuit. The item bytes were unchanged pre/post; only its algorithm citation quotation was synchronized (audit_enrichment). Risk review complete; no current defect found.

### thm-qc-one-qubit-euler-decomposition

Checked all seven steps against determinant, polar/trigonometric, rotation and Pauli supplier statements. Removing e^(i delta) makes determinant one. Orthogonality plus determinant fixes the second column (-conj(c),conj(a)); alpha=gamma+eta and beta=gamma-eta reproduce both columns exactly. t=0 and pi/2 allow arbitrary unused phases. For SU(2) delta=0 is valid. Exponential signs agree with exp(-it sigma/2); no global phase is discarded. Risk review complete; no current defect found.

### lem-qc-global-phase-under-control

Checked blocks diag(I,lambda U)=(diag(1,lambda) tensor I)C(U), and the inverse control correction. Nonzero H is required and stated. Lambda=1 gives identity correction; for other lambda the inactive block prevents interpreting it as a whole-output scalar. In contrast (lambda I)rho(lambda I)*=rho, preserving every defined finite POVM weight and normalization under the cited nonzero-space hypotheses. Risk review complete; no current defect found.

### thm-qc-two-qubit-cartan-decomposition

Checked the five proof steps, determinant normalization and real spectral/polar suppliers. Real and imaginary parts of symmetric unitary S commute and diagonalize together, including repeated eigenspaces. A column sign and a square-root sign enforce SO(4) and determinant-one K. W K^-1 is real orthogonal. The six displayed local generators span so(4); finite plane rotations prove surjectivity without an unstated Lie-group theorem. The three Pauli sign lists span trace-zero diagonals; adjusting one phase by 2pi gives the exact central exponential, retaining the U(4) scalar. Risk review complete; no current defect found.

### ex-qc-two-level-unitary-synthesis

Checked both verification steps: Ry(pi/2) has the stated signs and orthonormal columns. Its insertion at ordered positions 00,01 gives the displayed 4x4 unitary, identity on 10,11. This is a zero-controlled block, with exact entries and no phase quotient. Risk review complete; no current defect found.

Elimination algorithm: accepted_repair of the explicit nonzero-positive-real division admissibility condition; the branch proves its denominator positive. No operational branch or product order changed.

### lem-qc-generic-cnot-parameter-count

Checked five steps against actual Euler, CNOT, inverse-function, Sard and Cayley statements. Compact SU(2)^n has dimension 3n. For a valid CNOT (two distinct wires), its commuting local subgroup has dimension 3n-4 and the displayed complement has dimension four. The local product derivative is an isomorphism; finitely many left translates cover compact G. Commuting h across each CNOT leaves four parameters per occurrence plus a 3n local layer and one scalar. Smoothness satisfies the actual Sard differentiability threshold; rank is everywhere deficient under the strict dimension inequality. Chart preimages are open, finite unions stay null. n=1 permits only m=0; its bound equals target dimension and asserts no nullity. AC branches match the measure supplier. Risk review complete; no defect found.

### lem-qc-multiplexed-axis-rotation-gray-code

Checked all four steps and rotation, CNOT and register suppliers. The reflected Gray list is cyclic for k>0 and lists every mask once; Walsh orthogonality gives beta=2^-k H^T theta. Tracking prefix target flips gives the signed angle sum and the final restoring CNOT removes residual parity. X anticommutes with Y and Z, so both axes work directly. B=Rz(-pi/2) has BYB*=X; conjugating the entire y circuit gives the x block with exactly two extra target gates. k=0 uses one direct rotation and no restoration; zero angles preserve the literal gate count. Final parity is omitted only with an explicitly absorbing adjacent block. Risk review complete; no defect found.

### thm-qc-one-control-unitary-two-cnot

ABC=I by same-axis addition. Substitution of the stated A,B,C and X Rj(t) X=Rj(-t) gives AXBXC=Rz(alpha)Ry(theta)Rz(beta). Thus the two control blocks are I and V; diag(1,e^(i delta)) on the control restores the full U phase. The circuit order is C,CNOT,B,CNOT,A and one phase. Four arbitrary one-qubit matrices and two CNOT occurrences are valid even for identity/zero-angle gates; arbitrary gate cost is not the number of Euler factors. Risk review complete; no defect found.

### thm-qc-two-qubit-unitary-three-cnot-synthesis

Checked both steps and the Cartan, rotation, CNOT and exact semantics suppliers. XX,YY,ZZ commute; even and odd parity restrictions yield the displayed 4x4 matrix. Multiplying the stated three-CNOT template reproduces those blocks with the necessary e^(i pi/4) scalar. Exterior local factors and both scalars are one-qubit gates, so no ancilla or extra CNOT is required. Vatan-Williams section V explicitly treats its template up to phase; the local proof retains the scalar instead. This is an upper bound, allowing special gates with fewer CNOTs. Risk review complete; no defect found.

### lem-qc-borrowed-bit-multicontrolled-x-linear

Checked all five steps. The constant-cost Toffoli root V has eigenvalues 1,i and exponent b-(b xor a)+a=2ab. In the two compute/uncompute lists, u_j xor v_j is the control prefix product; every borrowed bit returns, including s=3 where the second list is Q. Counts are 4s-8 Toffolis, with separate s=1,2 bases. The balanced partition provides enough disjoint temporary borrowed wires for each call and restores them before the next call. Four calls toggle t by ab and return z; equality on every basis state proves identity on arbitrary correlated or entangled ancillas. Linear cost concerns this explicit construction, without assuming initialized workspace. Risk review complete; no defect found.

### lem-qc-recursive-qsd-central-cz-absorption

Checked all four steps against full Gray-code proof and current demultiplexing proof. ZRy(t)Z=Ry(-t), so the same Walsh angles work with CZ parity. Removing the last chronological CZ E gives M=ET and LMR=(LE)TR; no illicit commutation through L occurs. LE has blocks L0,L1 Zr and remains an arbitrary block unitary. Demultiplexing both sides yields four k-qubit slots and two Rz multiplexors. H X H=Z converts each remaining CZ to one CNOT; exactly one is saved. k>=1 ensures a final edge exists. All central select bits are preserved. Source Appendix A.1 matches this absorption, while the local proof explicitly justifies the order. Risk review complete; no defect found.

### lem-qc-terminal-diagonal-migration

Checked all six steps. A Y A^T=det(A)Y makes trace gamma invariant under local SU(2). For D(t)=exp(it ZZ), its imaginary trace is a0 cos(2t)+b0 sin(2t); the stated unit-circle choice kills it, including a0=b0=0. Cartan trace expansion forces one sine factor to vanish; that coordinate is local up to a retained scalar and can be moved to ZZ. Conjugating the two-CNOT XX/ZZ circuit by Rx(pi/2) on both wires yields XX/YY with correct signs. Thus U=Delta V exactly. A label-preserving separator commutes with every diagonal on the slot wires, so all but the final slot use two CNOTs. N=1 uses the three-CNOT base and performs no migration. Source Appendix A.2 agrees; no separator count is included. Risk review complete; no defect found.

### thm-qc-generic-unitary-cnot-lower-bound

Checked all three steps and the current parameter-count supplier. For n>=2 and M=ceil((4^n-3n-1)/4), each integer m<M satisfies the strict Sard inequality. There are finitely many ordered wire-pair skeletons at every such m and finitely many m, so the exceptional union is null without a new choice use. n=1 gives M=0 directly. Exact arbitrary one-qubit/no-ancilla hypotheses are preserved, and AC_omega versus full-AC Haar branches are distinguished. Individual special unitaries may lie in the exceptional null set; no per-unitary lower bound is claimed. Risk review complete; no defect found.

Prerequisite context: complete demultiplexing and CSD proofs checked. Spectral square roots include repeated eigenvalues; CSD separates s_i>0 from s_i=0, adjusts only the zero support, and covers c_i=0,1 and empty sectors.

### thm-qc-exact-arbitrary-unitary-qsd-upper-bound

Independently checked all five steps and complete CSD, demultiplexing, Gray, central-CZ and diagonal-migration suppliers. The four-child recurrence with c2=3 gives (9/16)4^n-(3/2)2^n; the internal-node saving is (4^(n-2)-1)/3 and the terminal-slot saving is 4^(n-2)-1, giving the stated bound, 3 at n=2 and 20 at n=3. Contiguous recursion leaves every terminal slot on the last two wires, and separators preserve their labels, so migration is justified. Exact phases remain in local gates at positive width. Found and repaired the false n=0 scalar-synthesis clause: positive-arity syntax and identity denotation permit only scalar 1; both directions are now proved. The n>=1 theorem and every resource formula are unchanged. Outside consumer batch 23 repeats the defect and requires owner repair; batch 24 uses only positive-width QSD and already caveats width zero.

New fatal boundary defect: U=[-1] on zero wires cannot equal the identity denoted by any permitted circuit. Statement and step 5.1 corrected, F11 added from an already declared dependency; owning manifest and contract synchronized. No judge stamp was present. Consumer search found batch 23 thm-qc-qsd-cnot-upper-bound (Statement and step 2.1 repeat the invalid n=0 assertion): OWNER MUST REPAIR after this supplier. Batch 24 thm-qc-isometry-completion-and-synthesis already restricts width-zero synthesis to V=I; thm-qc-amplitude-table-precision-and-compilation A1 uses only block arities 1<=r<=k and handles n=0 projectively, so neither needs a mathematical edit. Their exact supplier quotations require owner synchronization if stale. No outside consumer edited.

### thm-qc-multicontrolled-ancilla-resource-tradeoff

Checked all six steps and the exact controlled-U, spectral square-root, borrowed-wire and ancilla supplier statements. A unitary square root exists by finite spectral diagonalization. Clean compute/apply/uncompute borrows the data target safely because each complete X call tensors with its identity even on entangled states. The no-workspace recursion has exponent b-(b xor A)+A and q_m<=q_(m-1)+O(m), hence O(m^2); it needs no external wire. m=1 is the constant two-CNOT base. The lower-bound graph must connect every control to target: otherwise changing the remote control cannot change the target reduced state even with a fixed internally entangled auxiliary state. Two distinct eigenvalues of nonscalar U provide a target ray it changes, giving the contradiction and at least m edges. Scalar U is expressly excluded from that lower bound. Exact clean/dirty return and data-independent initialization hypotheses match their uses. Risk review complete; no defect found.

### alg-qc-two-level-gate-to-elementary-gates

Accepted reader clarification: per-call expansion choices, initialized clean bit when selected, output as a chronological elementary list, sequential clean return, and literal reversed adjoint swap lists. Increasing differing-bit path is simple; d>=1; the middle ordered block is reversed when needed. No extra control access is assumed: every controlled operation is expanded by the reviewed theorem. No operational formula changed.

### thm-qc-two-level-gate-synthesis-correct

Checked all seven proof steps, algorithm Definition and each exact supplier. The d-1 forward path swaps send x to g_(d-1) and fix y; P*MP thus implements the ordered V on x,y only. Reversal is XVX when the target-bit order is 1,0. The Toffoli pair is 3(2,4)+(2,0)=(8,12); ladders E and balanced borrowed circuits B count literal occurrences. Two singly controlled square roots plus two borrowed X calls yield the displayed Q recurrence; compute/apply/uncompute yields K. Every zero pattern bit adds two X gates and inverse lists retain forward costs, giving the exact total pair. Empty swap lists at d=1 and n=1 ordered blocks are correct. B=O(m), Q=O(m^2), K=O(m), with at most m negative controls per call, prove both bounds; exact work-bit return permits sequential reuse. Item bytes are unchanged pre/post; its algorithm citation was enriched, so touched verdict is reviewed_no_defect/audit_enrichment. Risk review complete.

## Carrier comparisons and dispositions

All five touched current raw item hashes match the immutable post-reader snapshot. The two correctness theorems have identical pre/post item hashes; their contract quotation changes are audit_enrichment, reviewed_no_defect, with no defect rows. Three source edits are accepted_repair with confidence 1 and separate closed rows. The new QSD risk defect is recorded through the engine-supported supplemental gate:<defect_id> route; this is additional defect accounting, not a claimed sixth routed original obligation. No snapshot, scope, decision hash, judge record or engine state was stamped or rewritten.

The explicit-division and clean-choice clarifications were checked in lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition (batch 23), especially F1–F5 and steps 1.1, 1.2, 2.2, 4.1: its fixed positive divisor lower bounds and no-workspace choices meet the clarified inputs. No consumer proof repair is needed.

Eight exact quotation mirrors of thm-qc-computational-basis-orthonormal were refreshed after the focused contract check exposed stale wording. The current supplier separates the zero-qubit basis statement; every positive-width orthonormality use remains licensed. This is mechanical citation synchronization, not a mathematical defect or a new review verdict.

## Sources actually consulted

The mathematical review used the complete current carrier proofs and their cited supplier Statements/Definitions. The Cayley review checked all eleven declared dependencies, including the countable-choice Radon domain and the separate full-AC Haar branch. The remaining external supplier statements checked include the finite spectral and SVD results, determinant identities, polar/trigonometric facts, orthogonal decomposition, inverse-function and Euclidean Sard theorems, first-linear inner-product/adjoint definitions, and the exact register, gate, circuit, ancilla and finite-POVM interfaces. Relevant complete local CSD and demultiplexing proofs were also read. This is prerequisite-use checking, not a new audit of every transitive published proof.

Primary full-text sections opened on the web:

- [Vatan–Williams, Optimal Quantum Circuits for General Two-Qubit Gates](https://arxiv.org/html/quant-ph/0308006v3), §III Theorem 1 and §V, equations (2)–(4), Figure 6 phase discussion and Theorem 5. Their rotation signs differ from QC7, so the local explicit matrix identity was checked in QC7 signs. The source explicitly supplies the missing scalar for exact equality.
- [Shende–Bullock–Markov, Synthesis of Quantum Logic Circuits](https://arxiv.org/html/quant-ph/0406176v5), Theorem 13, §5.3 equations (17)–(18), and complete Appendices A.1–A.2, equation (19) and Theorem 14. These agree with the four-child recurrence and the two savings. Local proofs establish the identities underlying the diagrammatic source discussion.
- [Barenco et al., Elementary gates for quantum computation](https://arxiv.org/html/quant-ph/9503016v1), §7.1 Lemmas 7.2–7.3 and Corollary 7.4, and §7.2 Lemma 7.5 and Corollary 7.6. Borrowed-wire restoration and the quadratic recurrence match the locally proved constructions. No claim of reading every unrelated section or the complete cited books is made.

## Local validation

All commands below were run on the current local carriers, without a judge, stamping operation, or engine gate battery:

- Initial `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-11.proof-contracts.json`: 21 contracts, eighteen HIGH/CRITICAL subjects, zero errors. All eighteen now have specific complete risk reviews.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qc-exact-arbitrary-unitary-qsd-upper-bound.md`: unchanged after final source edit.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-exact-arbitrary-unitary-qsd-upper-bound.md`: one proof checked, zero failing.
- `node tools/rendercheck.mjs items/thm-qc-exact-arbitrary-unitary-qsd-upper-bound.md --quiet`: one file, valid YAML and actual KaTeX, no errors.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-11.proof-contracts.json --strict`: 21/21 checked, zero errors and warnings after the eight quotation mirrors were synchronized.
- `node tools/finite-smoke.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-11.proof-contracts.json`: all three configured checks pass. The three-CNOT check compares three fixed matrices (maximum residual 2.78e-16); the lower-bound check verifies only n=2 arithmetic; the example check verifies exact entries and column products. These checks do not prove the general mathematics.
- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-11.proof-contracts.json --require-reviewed`: 21 subjects, zero errors.
- Final, single batched proof-layout invocation on the five touched carriers plus the corrected QSD item: six items, 23 steps, zero defects. This ran after the final item edit and formatter; no item was edited afterward.
- Four closed defect rows appended using the serialized defect-ledger tool; each has `caught_at_stage: 3a-adjudicate`, a decision reference and repair confidence 1. Decision coverage check confirms the five original obligations exactly once plus the supported supplemental new-risk disposition; manifest QSD Statement exactly matches the source.

## Published findings and owner handoff

No defective published item was identified in the opened prerequisite context, and no published item or published-consumer ledger was edited. No item or proposed withdrawal was removed. Existing historical escalation evidence remains intact; this report records current proof review rather than clearing historical engine state.

Local batch-11 mathematical repair and risk reviews are complete. The owner must route supplier-first repair of batch-23 `thm-qc-qsd-cnot-upper-bound`, Statement and proof 2.1, which still claim arbitrary exact scalar synthesis at n=0. Its correction should preserve the n>=1 results and use the supplier's exact width-zero identity-only clause. Check its own direct consumers only if its Statement changes. The two batch-24 direct consumers are mathematically compatible as described above; any stale exact QSD citation quotations in outside contracts are owned there. The engine owns aggregate proof-contract merging, decision hashes and the final gate battery.
