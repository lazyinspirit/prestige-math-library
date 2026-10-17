# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: lem-strong-rrqr-column-swap-volume-ratio

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: The displayed replacement set is '(J\setminus\{i\})\cup\{j\}', although i and j index selected and trailing QR positions, respectively. These are not original column indices. Literally, take A=diag(1,2), Pi=I, Q=I, k=1, J={1}, i=j=1. The displayed numerator selects column 1 again, so its ratio is 1, whereas X=0, omega_1=1 and gamma_1=2 give score 2. The proof analyzes replacement by the actual trailing column; the Statement must map positions through Pi and use position k+j for that trailing column.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "17",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-17-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "lem-strong-rrqr-column-swap-volume-ratio",
      "concern": "The displayed replacement set is '(J\\setminus\\{i\\})\\cup\\{j\\}', although i and j index selected and trailing QR positions, respectively. These are not original column indices. Literally, take A=diag(1,2), Pi=I, Q=I, k=1, J={1}, i=j=1. The displayed numerator selects column 1 again, so its ratio is 1, whereas X=0, omega_1=1 and gamma_1=2 give score 2. The proof analyzes replacement by the actual trailing column; the Statement must map positions through Pi and use position k+j for that trailing column.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "o",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "17"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-rrqr-column-labels-cycle1-20261016T180654920590Z/README.md",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step5-rrqr-column-labels-cycle1-20261016T180654920590Z/assessment.json",
    "pointer": "/consumer_dispositions"
  }
]
