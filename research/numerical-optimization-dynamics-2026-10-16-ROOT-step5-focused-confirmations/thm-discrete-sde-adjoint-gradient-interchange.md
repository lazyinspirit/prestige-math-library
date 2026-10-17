# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-discrete-sde-adjoint-gradient-interchange

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: Proof 1.1 says to apply the chain rule to 'u_{k+1}=Ψ_k(u_k,θ₀,ξ_{k+1})' while deriving Dθu_{k+1}=D_uΨ_k Dθu_k + DθΨ_k. The parameter must remain variable in the composition before evaluating its derivative at θ₀; freezing that argument literally removes the displayed direct parameter derivative. The intended composition is explicit in the Statement and the rest of the proof, so this is a local notation correction.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "103",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-103-step5-context.json",
    "pointer": "/concerns/1",
    "original_object": {
      "id": "thm-discrete-sde-adjoint-gradient-interchange",
      "concern": "Proof 1.1 says to apply the chain rule to 'u_{k+1}=Ψ_k(u_k,θ₀,ξ_{k+1})' while deriving Dθu_{k+1}=D_uΨ_k Dθu_k + DθΨ_k. The parameter must remain variable in the composition before evaluating its derivative at θ₀; freezing that argument literally removes the displayed direct parameter derivative. The intended composition is explicit in the Statement and the rest of the proof, so this is a local notation correction.",
      "severity": "presentation"
    },
    "reader_digest_group": "af",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "103"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-r4-proposals/proposal.json",
    "pointer": "/entries/1",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-r4-proposals/thm-discrete-sde-adjoint-gradient-interchange/evidence.json",
    "pointer": "/consumer_review"
  }
]
