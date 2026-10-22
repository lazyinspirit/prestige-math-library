# Batch 24: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 24
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emg-fx09, emg-fx09-examples
Items: prop-emg-fx-affine-connection-sector, def-emg-fx-maxwell-presymplectic-current, lem-emg-fx-symplectic-current-boundary, prop-emg-fx-finite-coisotropic-pairing, ex-emg-fx-flat-holonomy-circle
Consolidated findings: [{"id":"def-emg-fx-maxwell-presymplectic-current","type":"local","reason":"The Definition permits noncompact Σ “whenever this integral converges,” but does not define the integral or convergence criterion; the available compact-support integration supplier does not cover this case. Define the noncompact integral and convergence convention, then align lem-emg-fx-symplectic-current-boundary’s exhaustion and limiting-flux clause with it."},{"id":"ex-emg-fx-flat-holonomy-circle","type":"local","reason":"The metric uses −dt² while t is presented as a time coordinate and R is assigned length units; the item does not specify whether t is a length coordinate or time in seconds with a c factor, nor the units of x and y. State a coordinate and unit convention consistent with the Lorentzian-coordinate supplier."}]
Authorized source files: ["items/prop-emg-fx-affine-connection-sector.md","items/def-emg-fx-maxwell-presymplectic-current.md","items/lem-emg-fx-symplectic-current-boundary.md","items/prop-emg-fx-finite-coisotropic-pairing.md","items/ex-emg-fx-flat-holonomy-circle.md","library/einstein-maxwell-models-mathematics/emg-fx09.md","library/einstein-maxwell-models-mathematics/emg-fx09-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
