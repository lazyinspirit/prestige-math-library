# Batch 66: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 66
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: qftx-on-shell-amplitudes, qftx-on-shell-amplitudes-examples
Items: def-qftx-spinor-helicity, lem-qftx-spinor-factorization, thm-qftx-rational-bcfw-residue, prop-qftx-helicity-polarization-ward, cex-qftx-bcfw-contact-boundary
Consolidated findings: [{"id":"def-qftx-spinor-helicity","type":"prerequisite","reason":"The definition assigns a spinor-helicity equivalence class to every rank-one matrix and says the next lemma establishes existence and uniqueness, but lacks a justified_by link to lem-qftx-spinor-factorization, which proves that well-definedness. Add that same-page relation; the lemma already depends on this definition."},{"id":"cex-qftx-bcfw-contact-boundary","type":"local","reason":"The remark that any nonzero local quartic contact term has a constant shifted coefficient is too broad: derivative interactions can depend on shifted momenta. The cited §2.3 example is the derivative-free λ|φ|⁴ interaction. Qualify the remark to that example or to the explicitly stipulated constant coefficient."}]
Authorized source files: ["items/def-qftx-spinor-helicity.md","items/lem-qftx-spinor-factorization.md","items/thm-qftx-rational-bcfw-residue.md","items/prop-qftx-helicity-polarization-ward.md","items/cex-qftx-bcfw-contact-boundary.md","library/quantum-field-theory-mathematics/qftx-on-shell-amplitudes.md","library/quantum-field-theory-mathematics/qftx-on-shell-amplitudes-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
