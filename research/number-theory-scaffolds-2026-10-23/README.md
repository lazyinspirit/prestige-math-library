# Algebraic and analytic number theory scaffold planning

Owner request: two new categories, each researched by five GPT-6-Luna/max
researchers, assembled by one GPT-6-Luna/max builder, and checked by one
GPT-6-Luna/max auditor/repairer. The owner additionally requires authoritative
full-text source consultation, extraction and reading, and a final splice into
buildable A/B pairs.

| Category | Researchers | Builder | Auditor/repairer |
|---|---|---|---|
| Algebraic Number Theory | `ant_r1` foundations/computation; `ant_r2` local/global reciprocity; `ant_r3` arithmetic geometry; `ant_r4` Galois/automorphic interfaces; `ant_r5` Iwasawa/special values/statistics | `ant_builder` | `ant_auditor` |
| Analytic Number Theory | `an_r1` L-functions/prime distribution/explicit computation; `an_r2` sieves/primes; `an_r3` sums/circle method; `an_r4` automorphic/spectral methods; `an_r5` multiplicative/probabilistic/metric methods | `an_builder` | `an_auditor` |

These are prose planning artifacts. Their final pair rows belong in the canonical
`research/plan-spec.json`; native construction, proof authoring, verification and
publication remain separate obligations of `tools/autopilot/`. There is no new
native run or adoption of another run's review evidence in this planning task.

Existing published Number Theory and other library items remain suppliers in
their existing homes. New prerequisites must receive explicit planned homes;
source citations do not discharge their local-proof obligations. Algorithms and
their correctness, termination and complexity results have distinct contracts.
Open problems never supply logical dependencies.

Source dossiers distinguish retrieval/extraction, actual reading, and independent
mathematical checking. A downloaded complete text alone supplies no reading or
proof-review credit. The source maps record consulted editions, locators,
coverage dispositions, and limits on status checking. Exhaustive knowledge of a
changing research frontier is not inferred from the date of this directory.

Root owns the final canonical splice and its scoped plan validation. Each builder
owns its track until an explicit handoff to its auditor. Unrelated working-tree
edits and active runs are outside this task. The initial plan-row fingerprints
are in `plan-baseline.json`.

Final result: **141 A/B pairs / 282 pages / 1,355 proposed item contracts** have been spliced into the canonical plan. All three scoped plan checks passed. See [completion-report.md](completion-report.md) and [the exact-input receipt](validation/final-splice-receipt.json). Remaining source, local-proof and certificate obligations are explicit; no native build was started.
