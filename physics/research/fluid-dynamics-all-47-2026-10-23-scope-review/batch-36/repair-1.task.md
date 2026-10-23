# Batch 36: repair 1

Run: fluid-dynamics-all-47-2026-10-23
Batch: 36
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: fd-pda01, fd-pda01-examples
Items: lem-fd-finite-modal-field-has-finite-second-moment, post-fd-fluid-observation-and-noise, pthm-fd-conditional-fluid-filter-law, ex-fd-symbolic-single-sensor
Consolidated findings: [{"id":"lem-fd-finite-modal-field-has-finite-second-moment","type":"prerequisite","reason":"The supplied strong-measurability definition requires a Banach codomain, but the lemma's dependency closure does not establish that its L2 target is complete. Add the Riesz-Fischer L2 completeness supplier and AC, with the finite direct-sum argument, or formulate strong measurability into the finite-dimensional range of T. This is locally resolvable; the affected consumers already assume AC."},{"id":"pthm-fd-conditional-fluid-filter-law","type":"local","reason":"Fact F4 attributes continuity of each modal map to the lemma, whose Statement does not assert continuity; that estimate appears only inside the lemma's proof. Derive the finite-sum continuity bound in this theorem's proof before using the pushforward kernel."},{"id":"ex-fd-symbolic-single-sensor","type":"local","reason":"The Example first uses the ideal weighted sensor and S_psi(phi) before defining the sensor; its integral formula appears later in Facts & Assumptions. State S_psi(v) as the integral over D before first use, and make the constant fields' domain D explicit, without adding a hyperlink inside the Example."}]
Authorized source files: ["items/lem-fd-finite-modal-field-has-finite-second-moment.md","items/post-fd-fluid-observation-and-noise.md","items/pthm-fd-conditional-fluid-filter-law.md","items/ex-fd-symbolic-single-sensor.md","library/fluid-dynamics/fd-pda01.md","library/fluid-dynamics/fd-pda01-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
