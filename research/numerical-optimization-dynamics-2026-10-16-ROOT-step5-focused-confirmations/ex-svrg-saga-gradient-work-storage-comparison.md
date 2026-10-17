# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: ex-svrg-saga-gradient-work-storage-comparison

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The Statement claims 'O(d) working storage' for SVRG, and F1 attributes a fixed number of temporary vectors to alg-svrg-finite-sum-method. That procedure draws J only after completing all inner updates and then returns x_J. The storage proof does not explain how the selected past iterate is retained without storing the trajectory or replaying updates. Presampling the independent uniform output index and saving its iterate gives the same output law with O(d) storage and the stated gradient count, but this implementation equivalence should be stated to justify the ledger for the specified random-iterate output.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "73",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-73-step5-context.json",
    "pointer": "/concerns/1",
    "original_object": {
      "id": "ex-svrg-saga-gradient-work-storage-comparison",
      "concern": "The Statement claims 'O(d) working storage' for SVRG, and F1 attributes a fixed number of temporary vectors to alg-svrg-finite-sum-method. That procedure draws J only after completing all inner updates and then returns x_J. The storage proof does not explain how the selected past iterate is retained without storing the trajectory or replaying updates. Presampling the independent uniform output index and saving its iterate gives the same output law with O(d) storage and the stated gradient count, but this implementation equivalence should be stated to justify the ledger for the specified random-iterate output.",
      "severity": "gap-a-reader-closes"
    },
    "reader_digest_group": "ab",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "73"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-r2-proposals/proposal.json",
    "pointer": "/entries/2",
    "status": "completed-proposal-packet"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-ROOT-step4-kept-reader-late-r2-proposals/proposal.json",
    "pointer": "/entries/2/consumer_policy"
  }
]
