# Batch 25: repair 1

Run: advanced-qft-supersymmetry-build-2026-10-23
Batch: 25
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: aqft-eft-operators, aqft-eft-operators-examples
Items: def-aqft-operator-basis-physical-data, ex-aqft-scalar-gauge-operator-power-counting, ex-aqft-scalar-eom-operator-reduction
Consolidated findings: [{"id":"def-aqft-operator-basis-physical-data","type":"local","reason":"The Definition uses Lambda_op in the power-counting formula but does not explicitly assign it mass weight one; the examples rely on that weight. State its units/weight. If the Definition changes, check all direct and indirect consumers in the final review."},{"id":"ex-aqft-scalar-gauge-operator-power-counting","type":"local","reason":"Specify the field domains and regularity for H and the independent dual field in the Example. Also define the stated product connection, including its trivial-bundle horizontal distribution and global-section potential, or remove the unused connection data."},{"id":"ex-aqft-scalar-eom-operator-reduction","type":"local","reason":"The claimed G_alg-invariant EOM relation contains m, but m is specified only as Z2-invariant. State its full Lorentz and gauge/algebraic-group action, and make explicit that m, C, and Lambda_op are scalar parameters. Define or omit the unused product connection."}]
Authorized source files: ["items/def-aqft-operator-basis-physical-data.md","items/ex-aqft-scalar-gauge-operator-power-counting.md","items/ex-aqft-scalar-eom-operator-reduction.md","library/advanced-qft-and-supersymmetry/aqft-eft-operators.md","library/advanced-qft-and-supersymmetry/aqft-eft-operators-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
