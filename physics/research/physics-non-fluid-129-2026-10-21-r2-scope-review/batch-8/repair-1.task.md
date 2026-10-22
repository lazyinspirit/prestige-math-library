# Batch 8: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 8
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emx-radiation-reaction-models, emx-radiation-reaction-models-examples
Items: post-emx-abraham-lorentz-model, pthm-emx-runaway-preacceleration, pthm-emx-reduction-order-error, ex-emx-free-runaway, ex-emx-force-frequency-regime
Consolidated findings: [{"id":"post-emx-abraham-lorentz-model-force-scale-units","type":"local","reason":"Declare F_* to have units N in the slowly-varying condition, and state that η and δ are dimensionless."},{"id":"pthm-emx-runaway-preacceleration-integration-constant-units","type":"local","reason":"The solution constant C in the acceleration formula needs units m s^-2."},{"id":"pthm-emx-reduction-order-error-M2-units","type":"local","reason":"State that M_2 = sup |f''| has units N s^-2."},{"id":"ex-emx-force-frequency-regime-zero-frequency-phasor","type":"local","reason":"At ω=0, Im(f_0) does not affect f(t), so a nonzero f_0 can represent zero force and the phasor is nonunique. Define the phasor coefficients by their real-part representations and give a canonical static-force convention, or restrict the harmonic case to ω≠0."}]
Authorized source files: ["items/post-emx-abraham-lorentz-model.md","items/pthm-emx-runaway-preacceleration.md","items/pthm-emx-reduction-order-error.md","items/ex-emx-free-runaway.md","items/ex-emx-force-frequency-regime.md","library/classical-electromagnetism/emx-radiation-reaction-models.md","library/classical-electromagnetism/emx-radiation-reaction-models-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
