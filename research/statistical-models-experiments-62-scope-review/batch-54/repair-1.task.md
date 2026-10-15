# Batch 54: repair 1

Run: statistical-models-experiments-62
Batch: 54
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: benjamini-hochberg-independent-fdr-control, benjamini-hochberg-independent-fdr-control-examples
Items: def-false-discovery-rate-and-familywise-error-rate, alg-benjamini-hochberg-step-up-procedure, lem-benjamini-hochberg-leave-one-out-identity, thm-benjamini-hochberg-independent-fdr, ex-benjamini-hochberg-fdr-versus-fwer
Consolidated findings: [{"id":"thm-benjamini-hochberg-independent-fdr","type":"local","reason":"The FDR definition requires a measurable rejection rule, but the theorem applies it to BH without explicitly establishing measurability of that rule. Add a local proof step showing that R is a finite maximum of measurable rank events and, using the lemma’s rejection characterization, each rejection event {p_i(X) ≤ Rq/m} is measurable; then specialize the definition with P=Pθ and I₀=I₀(θ). No statement change is needed."}]
Authorized source files: ["items/def-false-discovery-rate-and-familywise-error-rate.md","items/alg-benjamini-hochberg-step-up-procedure.md","items/lem-benjamini-hochberg-leave-one-out-identity.md","items/thm-benjamini-hochberg-independent-fdr.md","items/ex-benjamini-hochberg-fdr-versus-fwer.md","library/statistical-models-and-experiments/benjamini-hochberg-independent-fdr-control.md","library/statistical-models-and-experiments/benjamini-hochberg-independent-fdr-control-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
