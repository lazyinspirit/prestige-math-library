# Batch 21: review 1

Run: fluid-dynamics-all-47-2026-10-23
Batch: 21
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: fd-ps02, fd-ps02-examples
Items: post-fd-navier-slip-wall-law, pthm-fd-local-momentum-balance-from-continuum, pthm-fd-wall-mechanical-power-balance, pthm-fd-linear-acoustic-model-prediction, ex-fd-adopted-poiseuille-couette
Consolidated findings: [{"id":"wall-power-local-balance-hypotheses","type":"prerequisite","reason":"The wall-power Statement says the local-momentum result yields div u = 0, but that supplier assumes incompressibility and derives only the forced momentum equation. Steps 2.1 and 3.1 also use div u = 0. State incompressibility as a premise and give the material-motion conditions needed to apply the supplier."},{"id":"poiseuille-couette-flow-map","type":"prerequisite","reason":"The example invokes the wall-power theorem, whose Statement requires a smooth material motion preserving the channel. The example verifies the profiles and wall data but does not establish that condition. Give the periodic flow maps chi_t(x,y,z) = (x + t U(y), y, z) for both profiles and verify their smoothness, domain preservation, and positive unit Jacobian."}]
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [{"id":"ex-fd-adopted-poiseuille-couette","path":["pthm-fd-wall-mechanical-power-balance","ex-fd-adopted-poiseuille-couette"],"paths":[["pthm-fd-wall-mechanical-power-balance","ex-fd-adopted-poiseuille-couette"]]}].
