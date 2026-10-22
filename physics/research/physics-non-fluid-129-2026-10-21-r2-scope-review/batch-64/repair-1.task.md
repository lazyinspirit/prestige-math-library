# Batch 64: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 64
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: qftx-heavy-field-eft, qftx-heavy-field-eft-examples
Items: lem-qftx-finite-heavy-gaussian-square, def-qftx-heavy-gaussian-data, thm-qftx-heavy-derivative-bound, def-qftx-finite-gaussian-shell-transform, prop-qftx-finite-gaussian-shell-semigroup, cex-qftx-eft-outside-band
Consolidated findings: [{"id":"def-qftx-heavy-gaussian-data","type":"local","reason":"Facts [F1] gives the spectral support and norm bound, but Proof 2.1 also uses the spectral domain formula and multiplicativity of the bounded Borel calculus. State those exact supplier claims and identify the PVM-integral multiplicativity result used in the inverse argument."},{"id":"cex-qftx-eft-outside-band","type":"local","reason":"The Statement uses dp and D(A^r) without defining them. Specify dp as Lebesgue measure and define the iterated powers and their domains; write N as an explicit nonnegative integer if needed."},{"id":"prop-qftx-finite-gaussian-shell-semigroup","type":"local","reason":"The Statement names a “Polchinski-type flow” without defining the equation. Give its exact meaning or replace the name with a plain description of the differentiated flow that is expressly not asserted."}]
Authorized source files: ["items/lem-qftx-finite-heavy-gaussian-square.md","items/def-qftx-heavy-gaussian-data.md","items/thm-qftx-heavy-derivative-bound.md","items/def-qftx-finite-gaussian-shell-transform.md","items/prop-qftx-finite-gaussian-shell-semigroup.md","items/cex-qftx-eft-outside-band.md","library/quantum-field-theory-mathematics/qftx-heavy-field-eft.md","library/quantum-field-theory-mathematics/qftx-heavy-field-eft-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
