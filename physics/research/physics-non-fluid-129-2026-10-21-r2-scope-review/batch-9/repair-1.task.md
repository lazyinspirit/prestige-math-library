# Batch 9: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 9
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emx-classical-helicity-angular-momentum, emx-classical-helicity-angular-momentum-examples
Items: def-emx-transverse-fourier-field, pthm-emx-helicity-projection, def-emx-angular-momentum-split, pthm-emx-canonical-kinetic-integral, cex-emx-plane-wave-spin-integral-failure, ex-emx-gauge-boundary-term
Consolidated findings: [{"id":"def-emx-transverse-fourier-field","type":"local","reason":"The Definition uses a complex C3 valued Riemann integral but defines only scalar real integrals. Define complex and vector integrals componentwise before use. The energy proof also invokes an integral over R without defining it and does not explicitly establish that the bounded cube integrals have a finite limit. The same vector integral convention is needed for the functionals in def-emx-angular-momentum-split, the finite cube and face terms in pthm-emx-canonical-kinetic-integral, and the correction vector in ex-emx-gauge-boundary-term."}]
Authorized source files: ["items/def-emx-transverse-fourier-field.md","items/pthm-emx-helicity-projection.md","items/def-emx-angular-momentum-split.md","items/pthm-emx-canonical-kinetic-integral.md","items/cex-emx-plane-wave-spin-integral-failure.md","items/ex-emx-gauge-boundary-term.md","library/classical-electromagnetism/emx-classical-helicity-angular-momentum.md","library/classical-electromagnetism/emx-classical-helicity-angular-momentum-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
