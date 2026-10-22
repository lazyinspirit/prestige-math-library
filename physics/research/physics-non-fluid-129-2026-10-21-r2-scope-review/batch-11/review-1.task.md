# Batch 11: review 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 11
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: emx-compatible-matrix-evolution, emx-compatible-matrix-evolution-examples
Items: def-emx-matrix-maxwell-system, thm-emx-matrix-energy-constraints, alg-emx-staggered-leapfrog, thm-emx-leapfrog-cfl, cex-emx-explicit-euler-growth, cex-emx-cfl-endpoint
Consolidated findings: [{"id":"thm-emx-matrix-energy-constraints","type":"prerequisite","reason":"Proof step 1.2 uses interval-integral additivity and an absolute-value bound to establish H'(t)=g(t). The current dependencies establish integrability and define the integral, but do not supply those integral properties. Add and use the published thm-multidimensional-integral-properties with its interval hypotheses, or prove the needed consequences locally from the supplied definition; retain the stated orientation convention."},{"id":"batch-11-zank-attribution","type":"local","reason":"All six assigned items identify the Vienna notes' author as “J. Zank”; the cited PDF title page names Marco Zank ([University of Vienna lecture notes](https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf)). Correct the author attribution in each source entry."}]
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
