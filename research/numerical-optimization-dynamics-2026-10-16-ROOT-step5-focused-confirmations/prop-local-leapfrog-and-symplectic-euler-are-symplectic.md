# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: prop-local-leapfrog-and-symplectic-euler-are-symplectic

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The Statement says each step “has a C¹ Jacobian” under V ∈ C²(Q). This asserts more regularity than the hypotheses provide. Take d = 1, Q = R, M = 1 and V(q) = |q|^(5/2). Then V is C², but V''(q) = (15/4)|q|^(1/2) is not differentiable at zero. For any h > 0, the kick-then-drift map has Jacobian entry ∂p⁺/∂q = −hV''(q), which is not differentiable at zero, so its Jacobian is not C¹. The proof establishes a C¹ map with a continuous Jacobian satisfying the symplectic identity; it does not establish the Statement's C¹-Jacobian claim.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "54",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-54-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "prop-local-leapfrog-and-symplectic-euler-are-symplectic",
      "concern": "The Statement says each step “has a C¹ Jacobian” under V ∈ C²(Q). This asserts more regularity than the hypotheses provide. Take d = 1, Q = R, M = 1 and V(q) = |q|^(5/2). Then V is C², but V''(q) = (15/4)|q|^(1/2) is not differentiable at zero. For any h > 0, the kick-then-drift map has Jacobian entry ∂p⁺/∂q = −hV''(q), which is not differentiable at zero, so its Jacobian is not C¹. The proof establishes a C¹ map with a continuous Jacobian satisfying the symplectic identity; it does not establish the Statement's C¹-Jacobian claim.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "g",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "54"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b54-C1-map-proposal-20261016T180432984332Z/proposal.json",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-b54-C1-map-proposal-20261016T180432984332Z/proposal.json",
    "pointer": "/consumers"
  }
]
