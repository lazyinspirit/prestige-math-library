# Batch 56: review 1

Run: physics-non-fluid-129-2026-10-21-r2
Batch: 56
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: nrqmx-certified-spectral-computation, nrqmx-certified-spectral-computation-examples
Items: alg-nrqmx-rayleigh-ritz-procedure, thm-nrqmx-ritz-upper-bounds, thm-nrqmx-spectral-residual-certificate, thm-nrqmx-schrodinger-residual-bound, ex-nrqmx-oscillator-ritz-exact, cex-nrqmx-small-residual-no-label
Consolidated findings: [{"id":"thm-nrqmx-ritz-upper-bounds-form-identity","type":"prerequisite","reason":"Facts F3 and proof step 2.2 use the edge from thm-nrqmx-closed-form-representation as if it established q_A(u,v)=⟨Au,v⟩ for the spectral form of a given A. That supplier constructs an operator from a given form; it does not establish this converse identity. Prove it locally using S=(A+cI)^(1/2) and the spectral calculus for u∈D(A), v∈Q(A)."},{"id":"thm-nrqmx-ritz-upper-bounds-eigenvectors","type":"local","reason":"Proof step 1.2 says the min–max supplier gives orthonormal eigenvectors, but its statement identifies eigenvalues counted with multiplicity. Explicitly derive orthogonality of distinct eigenspaces from self-adjointness and choose orthonormal vectors within the finite-dimensional eigenspaces."},{"id":"ex-nrqmx-oscillator-ritz-exact-form-identity","type":"prerequisite","reason":"Facts F2 and proof step 1.1 likewise attribute q(ψ_j,ψ_i)=⟨H_oscψ_j,ψ_i⟩ to thm-nrqmx-closed-form-representation, which does not establish that identity for the spectral form of a given operator. Prove it locally by taking c=0 and using S=H_osc^(1/2) and the spectral calculus."}]
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].
