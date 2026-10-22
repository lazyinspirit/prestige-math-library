# Batch 2: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 2
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emx-lorentz-form-algebra, emx-lorentz-form-algebra-examples
Items: def-emx-lorentz-star, lem-emx-unit-sphere-radial-flux, lem-emx-lorentz-star-square, thm-emx-local-potential-homotopy, ex-emx-punctured-flux, ex-emx-flat-nonexact-connection
Consolidated findings: [{"id":"ex-emx-flat-nonexact-connection","type":"prerequisite","reason":"The cited thm-emx-local-potential-homotopy only establishes the nonzero-period obstruction for 2-forms and 2-cycles. It does not support the 1-form A and 1-cycle γ. Add the applicable Stokes supplier and show that if A=dχ, then ∫γA=∫∂γχ=0; remove the inapplicable logical dependency."},{"id":"lem-emx-unit-sphere-radial-flux","type":"local","reason":"Proof step 2.1 equates the integral over closed D with that over D° because the boundary has content zero, but does not state the Riemann-integral consequence. Supply the bounded-integrand/null-boundary argument or cite the applicable integral result."}]
Authorized source files: ["items/def-emx-lorentz-star.md","items/lem-emx-unit-sphere-radial-flux.md","items/lem-emx-lorentz-star-square.md","items/thm-emx-local-potential-homotopy.md","items/ex-emx-punctured-flux.md","items/ex-emx-flat-nonexact-connection.md","library/classical-electromagnetism-mathematics/emx-lorentz-form-algebra.md","library/classical-electromagnetism-mathematics/emx-lorentz-form-algebra-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
