# QC21 focused mathematical repair

This is a source-repair handoff, not a readiness decision, audit stamp or gate receipt. No tests, gates, hashes, recertification or commits were performed.

## Confirmed defects and repairs

- The old QC20 YAML failures no longer describe the inspected current suppliers. QC20 native process 26343 was verified live during this work; no QC20 source was edited.
- A one-block error map tensored with identity cannot represent a correlated fault across two live blocks. The deviation definition now conservatively extends its original one-block case to one joint CPTP error map whose Kraus operators are in the tensor-error span with a support budget in each block. Only the external reference is unchanged. The proper-code contract and sparse-path proof use that joint convention.
- The sparse-path proof previously treated the computation-stage bound as mere addition of fault supports and inserted an ideal recovery before discussing the faulty correction stage. The repaired proof invokes the actual full computation-stage contract (including incoming-error propagation), proves closure of joint operator-error spaces under products, and applies the actual correction-stage contract directly.
- Both conditional threshold proofs previously bounded total circuit size/depth by a fixed circuit-independent constant times the recursive expansion. They now bound total size and depth by original size/depth times the expansion factor, proving the claimed multiplicative overhead.
- The t1 overlap proof was attempted from elementary filter identities, but its nested decoder-cut placement invariant remains missing: retained gates can intervene between an amputated internal EC and the factored decoder. The new helper is explicitly proof-not-supplied and its candidate argument is labelled incomplete. The threshold theorem retains the original sound conditional recurrence, makes the predetermined disjoint-pair interface explicit, and does not use the unfinished helper logically. Two review/repair rounds for this same cut defect were used; the proof claim was then retracted, without a third repair cycle.

## Used supplier clauses and consumer maintenance

The planar branch uses only the explicit relative grid boundary maps, CSS dimension formula, Pauli commutator/normalizer convention, rank-nullity, Z crossing-path extraction and path counting. The current grid proof gives ranks d^2 and d^2-1; the kernel/image quotient has dimension one. Odd cut parity supplies a left-to-right path. The minimum-weight comparison toggles that path to get at least half actual errors. The iid probability proof uses fixed edge subsets and the finite union bound. The distance-five example remains unchanged and its finite geometric sum is correct.

Read Dennis–Kitaev–Landahl–Preskill full-text PDF, relevant Section III.B (relative planar cycles) and Section V.B–C (minimum-weight chain comparison and self-avoiding path counting). The paper uses a different square-patch convention; the local explicit grid ranks, rather than its qubit count, supply this branch. No 809-item blanket audit was undertaken. The current local CSS, distance and Pauli supplier clauses used above were read. QC20's distance proof has a textual step-reference typo and could state explicitly that a nontrivial mixed Pauli has a nontrivial X or Z component; these were communicated to the owner without editing the active writer's file.

For the joint-sector definition repair, the same reviewer checked actual consumer clauses in the proper-code contract, sparse-path lemma, good/bad rectangle definition, recursive probability lemma, local-stochastic noise definition, both conditional thresholds, the existence obligation and the two new helpers. Probability-only clauses need no mathematical change. The incomplete t1 helper states its joint Pauli sectors independently and retains external references and syndrome memory; its main reduction claim is unproved. The second constructive cycle proved the global recovery-intertwining obstruction below. Literal unitary support propagation is retained for transversal circuits; correcting/preparing/measuring gadgets now require precise admitted-sector effective-error identities, joint errors, external references and explicitly accounted fault memory. All actual consumers were checked again; sparse induction uses the full stage identities rather than the word spread alone.

## Concrete construction progress and remaining blocker

The new Steane helper proves an explicit twice-concatenated [[49,1,9]] code, one fixed ideal recovery for the whole weight-at-most-four operator span, exact transversal H/S/CNOT including phases, and 49-location depth-one spread-one circuits. Its proof of uniform recovery uses a normalized full Pauli family and the scalar form of every identity-channel Kraus operator. This supplies code/Clifford prerequisites, not a noisy correction circuit.

The existence theorem remains `proof: not-supplied`. Missing is a finite deterministic verified syndrome/encoded-T ancilla construction with arbitrary-CPTP, reference-preserving fault branches, a finite noisy correction circuit on arbitrary inputs, safe distributed classical controls, exact location/depth/child bounds, a proved non-Clifford gadget and recursive alphabet closure. Clifford+T is only projectively universal: the literal dense-U claim additionally needs a proved phase generator, for example an explicit irrational scalar phase with an identity-channel gadget. No unused conditional ancilla helper was added and no d=1 vacuous contract workaround was used.

Bare transversal CNOT does not itself establish the proper-code computation-stage contract: two incoming single-coordinate errors on different blocks can propagate to a union of two coordinates, and one further faulty coordinate can produce three errors. The Steane helper records this limitation. The extra actual recovery radius of the [[49,1,9]] code could be used by a fully constructed gadget, but that proof is not currently supplied.

## Final source layout

After the proof-claim retraction, corrected spread contract, final metadata-derived level edits and focused QC20 distance repair, the final changed-only proof-layout reported `proof-layout: 12 items, 45 steps, 0 defects`. This is a layout result, not acceptance of the explicitly incomplete helper. Batch-21 manifest, page, coverage and proof-contract mirrors were integrated with pre-edit metadata copies in qc21-repair-preimages. Root owns escalation decisions and any later hashes. No claim is made that all twelve QC21 escalation records are resolved.

## Review/repair cycle counts and remaining obligation

- Nested exRec cut defect: two review/repair rounds exhausted; incomplete proof retracted and branch remains blocked.
- Concrete universal-gadget existence: two constructive review/repair rounds used. Round one supplied the fully proved code/Clifford prerequisite. Round two found and repaired the impossible global recovery-spread interpretation; it did not complete verified noisy EC or magic ancillas. No third cycle or fabricated existence proof was used.
- Joint-sector extension, sparse-stage argument and overhead defect: one focused review/repair round each; consumers maintained by the definition reviewer.
- Planar used-clause interface: one focused review; no claim narrowing or broad closure audit.

## Global recovery-spread obstruction (second constructive cycle)

Let C be a code-valued channel fixing a nontrivial code Q of distance D. Suppose literal full-space propagation gives C Ad_P = N_P C for every single-site Pauli P, with every Kraus operator of N_P supported below D. Since C ranges over every code state and its outputs are code-valued, positivity forces each such Kraus operator to preserve Q. Distance then makes its compression to Q scalar; hence N_P fixes every code state. Thus C Ad_P = C. Products of single-site Paulis give invariance under every Pauli, and averaging over them gives C(rho)=C(I/n) for every state rho, contradicting fixation of two distinct code states.

This also realizes an internal elementary fault: choose coordinate j's first elementary gate U and replace U by U P_j. Earlier gates do not touch j, so the full faulty channel is C Ad_Pj. The corresponding post-location fault U P_j U* is supported on that gate's arity r; for the contemplated small-arity alphabet, r times the asserted spread is below the distance-nine code. The same rigidity argument applies. Therefore a whole-space recovery intertwiner is an impossible requirement, while admitted-sector correction identities remain the actual construction obligation.

## Focused QC20 follow-through

After the owner confirmed native QC20 return and writer absence, the current distance theorem still had both reported omissions. With exact item/sole-contract preimages preserved, its textual step-3.2 cross-reference was corrected from 1.3 to 1.2 and its final step now explicitly handles general mixed X/Z Paulis: a nontrivial class has a nontrivial component and its support contains each component's support. The Statement is unchanged. Only these two derivation mirrors were edited in batch 20; no unrelated QC20 audit or rewrite was performed.
