# Batch 19 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `knill-laflamme-recovery-and-subsystem-codes`  
Scheduling input: `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`

## Scope and plan comparison

The assigned A/B pair is at orders 2202 and 2203 in `quantum-computing`. The QC track design's QC19 scope is Knill–Laflamme correction, recovery maps, and protected-subsystem variants. Its title, category, and five `requires` entries agree with the QC19 row in `research/plan-spec.json`; that row has empty item arrays, as expected before authoring. No design/plan-spec conflict was found. The controlling owner direction was read and used over stale task/design text.

The audited proposal export contains 11 A items and one B item. The scaffold manifest already added two A-page proof intermediates, `lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement` and `lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form`. This authoring pass added two further local prerequisites: `def-qc-first-factor-partial-trace` makes the trace convention independent of the subsystem recovery definition, and `lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis` proves the operator-matrix-unit spanning fact used by both subsystem arguments. The final inventory is 15 A items and one B example, below the 100-item page cap.

The separate first-factor trace definition removes a cyclic definition/lemma dependency. The local operator-matrix-unit lemma supplies the exact operator-space basis statement; no cross-pair item is used for that step.

## Dependency graph and supplier checks

The batch remains at dependency level 5 with prerequisite batches 2, 5, and 18. The 16 item labels were recomputed from current in-run dependencies against all 120 run pages. Counts are: level 0 — 1; level 3 — 1; level 4 — 2; level 5 — 1; level 6 — 3; level 7 — 3; level 8 — 4; level 9 — 1. The maximum item level is 9. The A/B page lists, item carriers, manifest dependencies, and labels agree.

The batch cross-dependency input has 84 exact edges: three in-run page requirements and 81 item edges. Each row is marked `verified` because the actual current supplier body or page interface was present and its relevant hypotheses/convention were checked against the consumer. This is interface evidence, not independent approval. The 45 unique direct item dependencies and their 786-item transitive carrier closure were present; every carrier in that closure parsed as YAML. No unresolved supplier ID remains in this pair.

A separate read-only full-run cross-batch collection cannot complete: it encounters malformed or missing carriers outside this pair. A run-manifest sweep found 30 unparseable item frontmatters and 26 manifest IDs without item files among 597 referenced items. The first collection error is `items/def-qc-css-code-from-nested-binary-codes.md:26`, where an unquoted `John Preskill, Quantum Computation, Chapter 7: ...` source title breaks YAML parsing. The batch-19 cross-edge file was independently reconciled against the run manifests and local item dependencies; all 84 expected edges are present and no stale edge remains. No other batch's files were changed.

## Mathematical decisions

- The proof convention is linear in the first inner-product argument throughout. The recovery definition distinguishes decoded recovery from physical re-encoding and states the gauge/logical factor order.
- The coefficient matrix is a Gram matrix after compression to one unit logical vector. Its spectral decomposition gives a unitary Kraus change, including the zero-eigenvalue case; positive eigenvalue restrictions are normalized isometries with orthogonal ranges.
- The explicit ordinary recovery decodes each nonzero error range and sends the residual complement to a fixed logical state. Trace preservation follows from the complementary syndrome projections and the channel normalization. The proof also establishes the off-diagonal identity `R(E_a V X V* E_b*) = C_ba X` for the constructed recovery.
- Necessity composes recovery, channel, and encoding Kraus operators. Since that composite is the identity channel, each composite Kraus operator is scalar; recovery trace preservation then gives the scalar-compression condition.
- The subsystem criterion is `J* E_a* E_b J = M_ab ⊗ I_L`, with the equivalent embedded gauge matrix-unit form. Sufficiency normalizes the restrictions `E_a J ι_k` by `sqrt(dim H_G)`, applies the ordinary recovery theorem to that finite channel, proves the logical marginal on gauge matrix units, and resets/re-encodes the gauge. The marginal identity is extended to every finite reference. The one-dimensional gauge case reduces to ordinary exact recovery.
- The distance corollary handles unknown supports by taking the union of two error supports, and known erasures by using the single fixed erased set. Both product arguments preserve the declared wire order.
- The authored proof steps make only finite-dimensional basis/vector choices; no physical postulate is invoked. The transitive item graph nevertheless reaches `def-countable-choice` and `def-axiom-of-choice` through broad supplier dependency declarations. The exact paths were checked: the orthogonal-error-basis path goes through the complex spectral theorem, algebraic closure of $\mathbb C$, odd-degree real roots, IVT, and the sequential-continuity theorem; IVT explicitly uses only that theorem's choice-free continuity-to-sequence direction, not its countable-choice converse. The Choi/Kraus path goes through Choi positivity, finite-dimensional isometry adjoint identities, Jordan–von Neumann polarization, and the combined norm/metric definition; the polarization proof uses only norm identities, rational approximation, and the Archimedean property, not the downstream remetrization/metric-continuity results that create the graph path to choice. These are graph-level over-approximations, not axioms assumed by the authored arguments. The axiom and branch distinction is recorded here for owner reconciliation rather than silently treating the graph edge as a proof use.

## Sources and coverage

The A page has two independent full-text treatments: Preskill's full course notes, *Quantum Information*, Chapter 7, and Kribs–Laflamme–Poulin–Lesosky, *Operator Quantum Error Correction*. The Preskill coverage records §7.2 (printed pp. 5–7 / PDF pp. 11–13), §7.3.3–7.3.4, and §7.4.1. The KLP coverage records §1.2 and the complete Theorem 3.5 proof (printed pp. 12–14 / PDF pp. 13–15). The relevant arguments were inspected in full; the note does not claim a sequential reread of all 92 Preskill PDF pages. Four source occurrences in the A/B coverage were fetch-verified and stamped. No retrieval failed, so no `source_resolution` record was needed. The coverage file records source-result dispositions and separately lists locally proved helper derivations without claiming that those helpers were harvested from the two sources.

## Scoped checks and handoff blockers

- `proof-contract.mjs --strict`: 16/16 entries, zero errors or warnings. Contracts include exact supplier excerpts, actual steps/inputs, and all standard boundary cases.
- `proof-layout.mjs` on the 16 explicitly assigned carriers: passed, 59 steps, zero defects.
- Focused `depcheck`: 16 items, zero errors or warnings; both assigned pages were included in page-cycle checks.
- `rendercheck`: all 16 items and both pages parsed, zero errors or warnings.
- `content-policy`: 16 items, zero errors or warnings.
- `manifest-deps`: 16 items, no missing dependency arrays.
- `coverage-checklist --require-destination`: two pages, 14 harvested source results, zero errors or warnings.
- `source-fetch-check --stamp`: four of four source occurrences verified; subsequent check mode also passed.
- Scoped manifest/carrier/page/cross-edge reconciliation: 16 items, 15 A and one B; 84 exact cross-batch edges; zero discrepancies.
- The required run-wide `item-dependency-levels.mjs check` still fails outside batch 19 with 84 errors: 54 empty scaffold inventories and 30 stale labels. The scoped batch-19 comparison has zero level errors. Example unrelated label mismatches include `alg-qa-19-hypercube-state-transfer` (7 declared, 11 computed) and `thm-qa-19-hypercube-transfer-correctness` (8 declared, 12 computed).
- `precheck.mts` reports `untagged-steps` for all 13 proof-bearing items because its legacy line-based scan checks only the line containing the numbered step, while these valid multiline steps place their justification tags at the end of the complete step block. `proof-layout.mjs`, which checks the rendered phase blocks, validates all 59 steps. This checker-format mismatch is recorded for owner reconciliation if the legacy precheck is required downstream.

The 16 Step 1 records are draft-authoring readiness records only. They do not constitute independent proof approval or close the run.
