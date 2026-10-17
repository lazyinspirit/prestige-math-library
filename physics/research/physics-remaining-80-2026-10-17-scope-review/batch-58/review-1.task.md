# Batch 58: review 1

Run: physics-remaining-80-2026-10-17
Batch: 58
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: tgr-c01, tgr-c01-examples
Items: post-tgr-perfect-fluid-model, pthm-tgr-local-first-law, pthm-tgr-perfect-entropy-circulation, ex-tgr-uniform-perfect-background
Consolidated findings: [{"id":"pthm-tgr-local-first-law","type":"local","reason":"The Gourgoulhon locator says the cited sections support a parcel first law with pressure work, but §4.3, equation (4.12), explicitly fixes the comoving volume; the later density identity is also derived with volume held fixed. The item’s proof independently derives the −p dV term from E = N e(V/N, S/N). Qualify the locator or add a source that states the variable-volume law."},{"id":"ex-tgr-uniform-perfect-background","type":"local","reason":"The example uses v_rel without specifying the observer or chart relative to which it is measured. Define it relative to u in the stated Minkowski chart, or take β directly as the dimensionless boost parameter; the calculation uses β."},{"id":"pthm-tgr-perfect-entropy-circulation","type":"local","reason":"Facts F3 says lem-tgr-carter-circulation proves constancy when σ_p is constant, but its proof derives C′ = 0 and stops there. This theorem supplies the missing step using F7, cor-zero-derivative-implies-constant, in proof step 2.1. Revise F3 to distinguish the supplier’s derivative identity from this theorem’s constancy deduction."}]
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
