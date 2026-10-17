# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-scaled-householder-qr-backward-stability

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The Statement says that applying the stored reflectors to a separate b 'gives a full vector' with the stated error bound, but explicitly assumes success only for the QR steps. Its Facts section additionally assumes successful vector updates. This qualification should also appear in the Statement: in binary64, A=[1] factors successfully with stored v=2 and tau=1/2, while applying that reflector to b=[N_max] fails at the dot product 2*N_max. The proof is sound under its stated successful-vector-update assumption.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "1",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-1-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "thm-scaled-householder-qr-backward-stability",
      "concern": "The Statement says that applying the stored reflectors to a separate b 'gives a full vector' with the stated error bound, but explicitly assumes success only for the QR steps. Its Facts section additionally assumes successful vector updates. This qualification should also appear in the Statement: in binary64, A=[1] factors successfully with stored v=2 and tau=1/2, while applying that reflector to b=[N_max] fails at the dot product 2*N_max. The proof is sound under its stated successful-vector-update assumption.",
      "severity": "gap-a-reader-closes"
    },
    "reader_digest_group": "m",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "1"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-batch1-resolution/cases.json",
    "pointer": "/cases/0",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-batch1-resolution/qr-consumer-chain.json",
    "pointer": "/direct_consumers"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-batch1-resolution/qr-consumer-chain.json",
    "pointer": "/consumers"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-batch1-resolution/report.json",
    "pointer": "/consumer_evidence"
  }
]
