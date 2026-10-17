# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: def-uniform-grid-and-difference-operators

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The finite-interval Definition writes ⟨p,q⟩_{e,h}=h Σ_{j=0}^{N−1}(D₊p)_j conjugate((D₊q)_j), whereas the periodic Definition writes the same right-hand side as ⟨D₊p,D₊q⟩_{e,h}. Consequently the finite-interval pairing is defined on nodal functions as a derivative pairing, but lem-dirichlet-grid-summation-by-parts applies it to edge arrays D₊u,D₊v. Those arrays have only N entries, so applying the defined D₊ again requires an unavailable endpoint entry. Thus its displayed identity and the cross term defining thm-dirichlet-leapfrog-discrete-energy are not well-typed under the supplied Definition. The intended finite edge pairing h Σ p_j conjugate(q_j) makes the subsequent finite-sum arguments work, but that is not the definition currently written.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "55",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-55-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "def-uniform-grid-and-difference-operators",
      "concern": "The finite-interval Definition writes ⟨p,q⟩_{e,h}=h Σ_{j=0}^{N−1}(D₊p)_j conjugate((D₊q)_j), whereas the periodic Definition writes the same right-hand side as ⟨D₊p,D₊q⟩_{e,h}. Consequently the finite-interval pairing is defined on nodal functions as a derivative pairing, but lem-dirichlet-grid-summation-by-parts applies it to edge arrays D₊u,D₊v. Those arrays have only N entries, so applying the defined D₊ again requires an unavailable endpoint entry. Thus its displayed identity and the cross term defining thm-dirichlet-leapfrog-discrete-energy are not well-typed under the supplied Definition. The intended finite edge pairing h Σ p_j conjugate(q_j) makes the subsequent finite-sum arguments work, but that is not the definition currently written.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "ah",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "55"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b55-edge-pairing-proposal/report.json",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b55-edge-pairing-proposal/report.json",
    "pointer": "/consumer_scope"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b55-edge-pairing-proposal/report.json",
    "pointer": "/consumer_scope/required_consumer_source_repairs"
  },
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-b55-edge-pairing-proposal/consumer-dispositions.json",
    "pointer": "/no_new_consumer_statement_definition_change"
  }
]
