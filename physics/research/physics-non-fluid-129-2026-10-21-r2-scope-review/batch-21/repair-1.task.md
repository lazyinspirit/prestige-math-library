# Batch 21: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 21
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emg-fx06, emg-fx06-examples
Items: def-emg-fx-wave-currents, lem-emg-fx-multiplier-divergence, thm-emg-fx-coupled-potential-energy, lem-emg-fx-rn-scalar-wave-potential, prop-emg-fx-conditional-bootstrap, cex-emg-fx-negative-bound-state
Consolidated findings: [{"id":"lem-emg-fx-rn-scalar-wave-potential","type":"local","reason":"The statement gives smooth ψ = φY but does not specify φ's domain or regularity; Proof steps 1.2 and 2.1 differentiate φ. Add a local fact deriving φ ∈ C∞(ℝ × (r₊,∞)) from ψ's smoothness and Y's normalization: choose fixed ω₀ with Y(ω₀) ≠ 0 and use φ(t,r) = ψ(t,r,ω₀)/Y(ω₀). This can be done without changing the Statement."},{"id":"lem-emg-fx-multiplier-divergence","type":"local","reason":"The Statement's optional example “normalized spacelike-slice normal” is an undefined technical term here and is not used in the proof. Remove the example or define the geometric object precisely before using it."}]
Authorized source files: ["items/def-emg-fx-wave-currents.md","items/lem-emg-fx-multiplier-divergence.md","items/thm-emg-fx-coupled-potential-energy.md","items/lem-emg-fx-rn-scalar-wave-potential.md","items/prop-emg-fx-conditional-bootstrap.md","items/cex-emg-fx-negative-bound-state.md","library/einstein-maxwell-models-mathematics/emg-fx06.md","library/einstein-maxwell-models-mathematics/emg-fx06-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
