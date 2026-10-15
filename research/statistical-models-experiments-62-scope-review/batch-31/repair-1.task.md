# Batch 31: repair 1

Run: statistical-models-experiments-62
Batch: 31
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: independent-subject-terminal-influence-limits, independent-subject-terminal-influence-limits-examples
Items: thm-iid-terminal-influence-limit, thm-independent-groups-terminal-influence-limit, ex-bernoulli-terminal-influence-limit, ex-independent-groups-weighted-mean-limit, ex-uncontrolled-risk-set-denominator
Consolidated findings: [{"id":"ex-bernoulli-terminal-influence-limit","type":"local","reason":"Step 1.1 says the shifted observations remain IID by the IID definition, which does not establish preservation under a measurable shift. Add the brief preimage argument."},{"id":"ex-independent-groups-weighted-mean-limit","type":"local","reason":"Define each group mean \\bar X_g as n_g^{-1} times the sum of its first n_g observations; the exact expansion uses this convention."},{"id":"thm-independent-groups-terminal-influence-limit","type":"local","reason":"Fact F9 summarizes only the independent-sum characteristic-function rule, while step 2.1 uses the affine-map rule too. Include that rule in F9; the cited supplier provides it."}]
Authorized source files: ["items/thm-iid-terminal-influence-limit.md","items/thm-independent-groups-terminal-influence-limit.md","items/ex-bernoulli-terminal-influence-limit.md","items/ex-independent-groups-weighted-mean-limit.md","items/ex-uncontrolled-risk-set-denominator.md","library/statistical-models-and-experiments/independent-subject-terminal-influence-limits.md","library/statistical-models-and-experiments/independent-subject-terminal-influence-limits-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
