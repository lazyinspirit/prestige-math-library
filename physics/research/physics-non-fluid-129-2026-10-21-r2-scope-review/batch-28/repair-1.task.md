# Batch 28: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 28
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emg-fx13, emg-fx13-examples
Items: def-emg-fx-charged-scalar-stress-tensor, post-emg-fx-classical-constitutive-adoption, post-emg-fx-test-field-regime, lem-emg-fx-asymptotic-scalar-energy-flux, pthm-emg-fx-conditional-model-flux, texp-emg-fx-test-to-coupled-error
Consolidated findings: [{"id":"lem-emg-fx-asymptotic-scalar-energy-flux","type":"local","reason":"The statement calls both directional flux magnitudes positive, but its formula gives P_ref = 0 when R = 0, which the hypotheses do not exclude. Change the description to nonnegative directional flux magnitudes without narrowing the formula."}]
Authorized source files: ["items/def-emg-fx-charged-scalar-stress-tensor.md","items/post-emg-fx-classical-constitutive-adoption.md","items/post-emg-fx-test-field-regime.md","items/lem-emg-fx-asymptotic-scalar-energy-flux.md","items/pthm-emg-fx-conditional-model-flux.md","items/texp-emg-fx-test-to-coupled-error.md","library/einstein-maxwell-models/emg-fx13.md","library/einstein-maxwell-models/emg-fx13-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
