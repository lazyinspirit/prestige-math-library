# Batch 14: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 14
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emx-polarization-bundle, emx-polarization-bundle-examples
Items: def-emx-helicity-line-bundle, pthm-emx-helicity-berry-curvature, pthm-emx-helicity-rotation-weight, ex-emx-polarization-latitude-phase, cex-emx-polarization-gauge-singularity
Consolidated findings: [{"id":"def-emx-helicity-line-bundle","type":"local","reason":"For z in C^3, the Definition uses n·z without specifying the bilinear extension (sum_j n_j z_j); it also uses local and global unit frames without defining them as normalized smooth sections of L_sigma on the relevant domain."},{"id":"pthm-emx-helicity-rotation-weight","type":"local","reason":"The rotation formula repeats n·z for complex z without specifying its meaning. Its Stokes clause uses a piecewise C1 path, while the cited supplier applies to smooth singular chains; identify the path with the finite smooth boundary chain or justify the broader case, and define the curve integral used in the holonomy formula."}]
Authorized source files: ["items/def-emx-helicity-line-bundle.md","items/pthm-emx-helicity-berry-curvature.md","items/pthm-emx-helicity-rotation-weight.md","items/ex-emx-polarization-latitude-phase.md","items/cex-emx-polarization-gauge-singularity.md","library/classical-electromagnetism/emx-polarization-bundle.md","library/classical-electromagnetism/emx-polarization-bundle-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
