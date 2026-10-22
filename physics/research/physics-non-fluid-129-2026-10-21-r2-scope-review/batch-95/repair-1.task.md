# Batch 95: repair 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 95
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: csm-frontier-sampling-certificates, csm-frontier-sampling-certificates-examples
Items: alg-csm-frontier-heat-bath-update, thm-csm-frontier-heat-bath-tv-bound, lem-csm-frontier-error-budget-composition, alg-csm-frontier-monotone-cftp, thm-csm-frontier-monotone-cftp-exact, alg-csm-frontier-swendsen-wang, thm-csm-frontier-swendsen-wang-invariance, ex-csm-frontier-metastable-diagnostic
Consolidated findings: [{"id":"ex-csm-frontier-metastable-diagnostic","type":"local","reason":"The Example invokes the general-state Metropolis–Hastings suppliers but specifies only the finite set Ω; Verification 1.1 relies on an implicit measurable structure. State the carrier as (Ω,2^Ω) and identify the discrete metric's Borel sets as 2^Ω. Also specify t∈ℤ_{≥0} in d(t) and in the definition of t_mix. The remaining finite-state application and bounds are supported by the stated suppliers and local argument."}]
Authorized source files: ["items/alg-csm-frontier-heat-bath-update.md","items/thm-csm-frontier-heat-bath-tv-bound.md","items/lem-csm-frontier-error-budget-composition.md","items/alg-csm-frontier-monotone-cftp.md","items/thm-csm-frontier-monotone-cftp-exact.md","items/alg-csm-frontier-swendsen-wang.md","items/thm-csm-frontier-swendsen-wang-invariance.md","items/ex-csm-frontier-metastable-diagnostic.md","library/classical-statistical-mechanics/csm-frontier-sampling-certificates.md","library/classical-statistical-mechanics/csm-frontier-sampling-certificates-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
