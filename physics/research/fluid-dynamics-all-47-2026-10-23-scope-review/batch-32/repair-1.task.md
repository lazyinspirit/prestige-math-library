# Batch 32: repair 1

Run: fluid-dynamics-all-47-2026-10-23
Batch: 32
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: fd-st01, fd-st01-examples
Items: def-fd-random-velocity-sensor-law, lem-fd-sensor-pairing-is-well-defined, lem-fd-velocity-tensor-is-bochner-integrable, thm-fd-expected-weak-reynolds, prop-fd-sensor-long-run-clt, ex-fd-ar1-long-run-variance
Consolidated findings: [{"id":"prop-fd-sensor-long-run-clt","type":"local","reason":"For the general branch, state explicitly that g is centered under μ, meaning its μ-integral is zero (equivalently, E[Y0]=0). This is a premise of the strong-mixing CLT supplier."},{"id":"lem-fd-sensor-pairing-is-well-defined","type":"local","reason":"The Statement names the sensor covariance matrix as positive semidefinite without defining the condition. State explicitly that c^TΣc >= 0 for every coefficient vector c; the proof already establishes this."},{"id":"thm-fd-expected-weak-reynolds","type":"local","reason":"The Statement names R as positive semidefinite almost everywhere without stating the quadratic-form condition. State that z^T R(x) z >= 0 for every z in R^d for almost every x, and likewise for almost every space-time point in the conditional clause; the proof establishes it."}]
Authorized source files: ["items/def-fd-random-velocity-sensor-law.md","items/lem-fd-sensor-pairing-is-well-defined.md","items/lem-fd-velocity-tensor-is-bochner-integrable.md","items/thm-fd-expected-weak-reynolds.md","items/prop-fd-sensor-long-run-clt.md","items/ex-fd-ar1-long-run-variance.md","library/fluid-dynamics-mathematics/fd-st01.md","library/fluid-dynamics-mathematics/fd-st01-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
