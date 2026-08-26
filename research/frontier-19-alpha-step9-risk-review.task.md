# Step 9 blocker repair — one current Alpha risk review, run `frontier-19`

The Step-9 lead completed the scope-decision review, but the subsequent
`risk-report --require-reviewed` gate found one mechanically missing Alpha
review:

`fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice`

This item's mathematics was changed during terminal Step-8 closure, and its
batch-7 proof-contract entry was correctly regenerated from the changed bytes.
That regeneration invalidated the earlier review. Review the current item and
current contract from scratch; do not copy or revive a review of an older hash.

Read at least:

- `items/fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice.md`
- its row in `research/frontier-19-batch-7.proof-contracts.json`
- both cited dependencies, `items/rem-solovay-model.md` and
  `items/rem-shelah-inaccessible-and-the-baire-property.md`
- the terminal resolution in
  `research/frontier-19-step8-terminal-resolutions.jsonl`
- the relevant defect history and current Step-8 cutover receipt

Probe the actual high-risk issue: distinguish truth in a model, relative
consistency, and provability in ZF + DC; verify the inaccessible-cardinal
qualification, the direction of each consistency implication, and whether the
current Statement is exactly what steps 1.1–2.1 establish. Use reputable source
material if the local dependencies leave any doubt.

If and only if the current item and contract are sound, write a substantive
`risk_review` into the owning batch contract using
`tools/apply-risk-reviews.mjs`. The notes must say what you actually checked and
why the relative countermodel argument closes. Re-merge all batch contracts and
run:

```sh
node tools/risk-report.mjs research/frontier-19-proof-contracts.json \
  --items fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice \
  --require-reviewed
node tools/proof-contract.mjs check research/frontier-19-proof-contracts.json \
  --items fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice
node tools/step8-cutover.mjs check --run frontier-19
```

Write a concise record of the review and checks to
`research/frontier-19-alpha-step9-risk-review.md`.

The post-Step-8 item tree is frozen: do not edit any item, page, manifest,
coverage file, judge record, adjudication, terminal resolution, cutover receipt,
or defect ledger. Do not launch a judge or refuter. Do not run a workflow
transition. If the mathematics is not sound, leave the risk review incomplete
and report the exact mathematical blocker. No permission prompts.
