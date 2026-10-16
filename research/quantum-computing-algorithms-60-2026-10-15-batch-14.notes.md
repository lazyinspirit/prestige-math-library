# Batch 14 authoring and handoff notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `uniform-circuit-families-promise-problems-and-complexity`  
Role: beta; batch 14

## Inventory and levels

The A page contains 11 items and the B page contains one example. Levels below were recomputed from the current run manifests after supplier declarations changed during the shared run. Each assigned label matches `dependencyLevels` on the current manifest graph; there is no cycle involving the assigned items.

| Item | Current item level |
|---|---:|
| `def-qc-promise-computation-model` | 10 |
| `def-qc-circuit-cost-model` | 10 |
| `def-qc-uniform-circuit-family` | 10 |
| `def-qc-quantum-acceptance-probability` | 11 |
| `lem-qc-uniform-family-size-bound` | 11 |
| `alg-qc-bounded-error-amplification` | 12 |
| `def-qc-bqp-promise-class` | 13 |
| `lem-qc-acceptance-probability-phase-invariance` | 12 |
| `thm-qc-output-acceptance-law-normalizes` | 12 |
| `thm-qc-bounded-error-amplification-correct` | 13 |
| `ex-qc-bqp-promise-off-domain` | 14 |
| `thm-qc-bqp-error-robustness` | 14 |

The dispatch snapshot says batch dependency level 10 with prerequisites `2, 4, 6, 8, 9, 10, 11, 12, 13` and scheduling input `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. The stored `research/quantum-computing-algorithms-60-2026-10-15-batch-dependency-levels.json` records input `c5a88e742e704c4064a7269826206aed0133af898e29589279f5edd54a306df9` and batch 14 prerequisites `2, 4, 6, 9, 10, 11, 12, 13` (batch 8 absent); that digest predates the final batch-14 manifest metadata edits and is not a fresh recomputation. This shared derived file was not edited. Its check cannot currently recompute: `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` stops on invalid YAML in unrelated `items/cor-qc-distance-corrects-t-errors-and-erasures.md` (line 16, an unquoted Preskill title containing a colon). Owner reconciliation is needed for the dispatch/current batch prerequisite discrepancy.

The final run-wide item-level check reports 174 errors: 56 empty inventories and 118 existing level mismatches across other batches. None of the 12 batch-14 items appears in those errors; their current manifest levels match the tool's recomputed values. The task's earlier item-level proposal values (6–10) no longer match the live in-run supplier levels, which now produce 10–14. The batch-14 labels follow the current in-run dependency graph as required; no other batch manifests were changed.

## Plan comparison

The QC14 section of `research/plan-quantum-computing-track.md` sets the scope: the root promise-problem convention, full-list uniformity, the fixed finite exact gate set, BQP thresholds, a cost model, bounded-error amplification, no BQP/classical separation claim, and a qualification of the broad BQP-to-PP counting caveat. The assigned design section and canonical A/B identities, order, category, companion, and `requires` list in `research/plan-spec.json` agree with that scope.

The audited QC proposal summary additionally calls for “precise EQP/ZQP/BQP interfaces,” but the frozen QC14 item inventory contains only `def-qc-bqp-promise-class`; there are no EQP or ZQP items. The carriers therefore define only BQP. Owner should reconcile the summary against the controlling QC14 section and frozen inventory; no items were added and scope was not inferred from the summary.

## Sources and dispositions

Two full-text treatments were inspected for this page:

* John Watrous, [Quantum Computational Complexity](https://arxiv.org/pdf/0804.3401), §IV.1, PDF pp. 12–13, for promise problems, generated circuits, and BQP acceptance; §IV.2, PDF p. 13, for repetition/error reduction and Proposition 3.
* Ronald de Wolf, [Quantum Computing: Lecture Notes](https://arxiv.org/pdf/1907.09415), Chapter 13 §13.2, PDF pp. 122–124 (printed pp. 109–111), and Appendix B.2, for circuit-family uniformity, BQP, and repetition/error reduction.

Both local full-text source records were inspected, fetched, and stamped before this turn. Their harvest dispositions and item-level support are recorded in `batch-14.coverage.json`. Final `source-fetch-check --stamp` passed 2/2 verified sources, with zero new stamps and zero drops. There were no retrieval failures, recovery searches, or source-resolution drops.

Source limits were preserved in the carriers and coverage:

* de Wolf’s uniformity footnote is indexed-gate based. The local size lemma proves only the full-list output-length/gate-count/unary-width bound and makes no indexed-to-full-list conversion claim.
* Both sources give repetition context; de Wolf’s proof is a sketch. The Chernoff tail argument, rational computable repetition count, full-list construction, and cost accounting are proved locally.
* Watrous Proposition 3 is recorded as qualified, not used as a premise for its broad gap-only equality. In particular, the endpoint thresholds `(a,b)=(1,0)` would require an exact bounded-error conclusion. QC14 proves the standard-threshold high-confidence equivalence locally and states the hypotheses needed for the generalized thresholds.
* The sources use a measured output bit and do not establish the arbitrary ordered-output marginal used here. The output-law theorem supplies its finite Parseval, partial-trace, and basis-projective-POVM argument locally.
* The unconditional-phase and controlled-target-phase claims are proved locally from amplitudes and explicit finite H/T matrices; no source excerpt is presented as their proof.

## Supplier checks and unresolved prerequisites

The following QC09 carriers were absent at handoff: `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, and `def-qc-elementary-circuit-resources`. Their exact unresolved duties and affected claims are listed in the carriers, proof contracts, and `batch-14.cross-batch-dependencies.json`:

* syntax/register order must validate the ordered wire, gate, input, output, and layer conventions used by the promise model, circuit code, controlled-phase example, output law, and repetition circuit;
* denotational semantics must establish finite chronological composition as a unitary with the required factor order and terminal-output measurement semantics, used by the acceptance law and repetition correctness;
* the resource supplier must reconcile gate count, depth, total width, ancilla accounting, query count, description length, and classical predicate costs with the locally defined cost vector.

These missing supplier IDs remain unresolved in the assigned claims; planned interfaces are drafting context only. No source excerpts or completed proofs were invented. Every assigned item is escalated rather than marked ready until actual supplier bodies and proofs are checked.

Additional supplier observations:

* The actual draft `def-qc-clifford-t-gate-library` was inspected: it gives H/T/T† matrices, `T^4=Z`, control-first CNOT, and no implicit controlled-T or ancilla. It is still draft, and its QC07/QC09 interfaces need reconciliation.
* The actual draft `def-qc-clean-and-dirty-ancillas` was inspected. The computation model requires zero initialization but does not silently require auxiliary wires to return to zero. The amplifier counts its added input-copy wires in total width.
* The tensor/permutation supplier proves the product basis and basis permutation but does not assert norm preservation. The output-law proof derives norm preservation locally using its orthonormal-basis hypotheses and finite Parseval.
* The actual partial-trace characterization proof was read, including empty-factor cases; the specific finite trace identity used by the output-law theorem is supported.
* `def-qc-classical-control-and-measurement-circuit` remains proposal-only for this pair. Amplification uses a terminal output tuple and one total classical predicate, with no intermediate measurement or feed-forward, so it is not a logical dependency of the revised construction.

The draft acceptance-probability definition initially listed `thm-qc-output-acceptance-law-normalizes` in `justified_by`, while that theorem depends on the definition. Since the definition explicitly does not assert normalization and the theorem proves normalization downstream from its finite-sum formula, that circular metadata edge was removed from the assigned carrier and page manifest. The BQP definition now explicitly depends on the output-law theorem, because its threshold interpretation requires normalized acceptance probabilities. This raises the BQP and off-promise example levels to 13 and 14. The generic POVM theorem gap below remains separately recorded in its upstream justification chain.

An upstream generic theorem does have an unresolved mathematical gap: `thm-qc-povm-probabilities-normalize`, step 1.1 establishes a nonnegative quadratic form for `M_a rho M_a` but does not establish its self-adjointness before invoking the nonnegative-operator/trace result. The current theorem dependencies include the density-operator supplier; the former missing-density observation was stale. QC14 proves its specified computational-basis output law directly and does not use the generic normalization theorem as a proof premise. The theorem remains in the transitive POVM-definition closure, so acceptance-probability readiness still requires owner reconciliation of that upstream proof.

## Readiness and scoped checks

All 12 item decisions are `escalated` because the actual circuit syntax/denotation/resource suppliers are absent or still draft, and the POVM normalization issue remains in the relevant transitive closure. The BQP-to-output-law dependency was added after its immutable escalation record was written; the carrier and manifest now record `thm-qc-output-acceptance-law-normalizes`, and the BQP row's existing reason records the unresolved normalized-acceptance supplier. That row has three recorded direct dependencies versus four in the current carrier; its escalation was not overwritten. The example escalation input hash also predates the new transitive edge. The BQP and example levels were recomputed after this edit. This is authoring handoff evidence, not independent approval.

Scoped checks after the final carrier edits:

* `node tools/proof-layout.mjs` on the 12 changed items: passed, 12 items, 20 proof steps, 0 defects.
* `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-14.coverage.json --stamp`: passed, 2/2 verified, 0 newly stamped, 0 dropped.
* `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15`: run-wide failure from 56 empty inventories and 118 pre-existing label mismatches in other batches; none of the 12 assigned items is mismatched. The assigned items independently recompute to levels 10–14 with no assigned cycle.
* `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15`: blocked by the unrelated invalid YAML source title identified above; the shared derived artifact was left unchanged.
* `node tools/step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15`: blocked while hashing an existing unrelated `def-qa-finite-abelian-character-dual` ready record; its alias scan reaches malformed YAML in `items/alg-qa-19-complete-graph-spatial-search.md` (unquoted de Wolf title with a colon). The 12 assigned decision files were individually checked as escalated records.


## Owner focused cycle-2 repair (native QC14 writer drained)

The preceding author handoff remains historical evidence. Actual QC09 syntax, local embedding, disjoint-layer commutation and denotation bodies now supply ordered complete-register unitary composition. The exact QC13 H/T/T†/control-first-CNOT interface matches the family encoding. Original Step-1 escalation files are unchanged. External QC09/QC10 and consumers QC23/QC34 still require their final writer-drained checks; contract unresolved-supplier lists retain those stability holds and do not mean their bodies are absent.

The acceptance definition now says zero-initialized auxiliary register; it does not require clean restoration. The amplification theorem now explicitly assumes the base family meets its YES/NO thresholds; the algorithm remains executable for arbitrary families with valid numeric inputs. Without that premise an always-reject family on a nonempty YES promise is a counterexample. Robustness now makes the finite short-input BASE predicate exact before amplification, using the actual A_n(x,z) input API. Its finite table proves existence for a fixed promise problem, not an effective classifier extracted from unknown promise semantics. The standard-threshold direction uses an all-length valid target before choosing the amplified/original length branch. Polynomial resource and exact rational-comparison arguments are retained, including zero-width-safe wire-index bit bounds.

The same reviewer checked the acceptance-change consumers: output normalization uses norm-one coordinates and Hermitian reduced density directly; phase invariance uses squared moduli and explicit H/T matrices; BQP keeps its standard thresholds; the repetition algorithm uses zero-start inputs and independent disjoint blocks; robustness satisfies the repaired premise; the off-promise example needs no restoration. Batch23 circuit-count uses only the unchanged acceptance-event formula and 2/3 versus 1/3 thresholds and has no restoration assumption; its active writer prevents stable acceptance or edits. No QC24 reference was found in current scoped manifests/sources. The separate POVM owner's two proof-only self-adjointness repairs preserve that interface.

Only focused source/citation/derivation repairs are recorded here. No tests, gates, hashes, native decisions, certification, or commits were performed. Root owns manifest metadata reconciliation and final input binding.

## Owner final focused interface reconciliation

QC09 and QC10 native writers drained; the current syntax/embedding/disjoint-layer/denotation/resource interfaces and total-XOR/reversible-work interfaces were read in the existing cycle 2. Updated tensor-adjoint proofs support the same ordered complete-register action. Current focused contract/cross-edge records replace stale absence wording and exact quote mirrors, with no independent supplier acceptance or readiness decision. QC14 base correctness and auxiliary terminology repairs, depth distinctions, HSP gate/query/output claims and QA17 constituent counts remain consistent. QC23 is the only still-active affected consumer; final stable disposition and every numeric/binding/certification operation remain root-owned.
