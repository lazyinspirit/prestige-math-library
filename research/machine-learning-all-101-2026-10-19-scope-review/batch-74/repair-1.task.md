# Batch 74: repair 1

Run: machine-learning-all-101-2026-10-19
Batch: 74
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: hedge-and-online-gradient-descent, hedge-and-online-gradient-descent-examples
Items: alg-hedge, alg-online-gradient-descent, thm-hedge-static-regret, thm-online-gradient-descent-regret, ex-hedge-two-experts, ex-projected-gradient-on-an-interval, cex-ogd-infeasible-comparator
Consolidated findings: [{"id":"alg-hedge","type":"local","reason":"Its distribution x_t can depend on previously revealed losses and therefore be random, but the Definition states the marginal equality P(I_t=i)=x_t(i). Repair the sampling instruction to specify the draw conditional on pre-round history; this resolves the mismatch locally without narrowing the algorithm."}]
Authorized source files: ["items/alg-hedge.md","items/alg-online-gradient-descent.md","items/thm-hedge-static-regret.md","items/thm-online-gradient-descent-regret.md","items/ex-hedge-two-experts.md","items/ex-projected-gradient-on-an-interval.md","items/cex-ogd-infeasible-comparator.md","library/machine-learning/hedge-and-online-gradient-descent.md","library/machine-learning/hedge-and-online-gradient-descent-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
