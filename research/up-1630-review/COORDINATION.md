# Shared coordination for the ten CLI reviewers

Each CLI process owns its `agent-NN.jsonl` assigned items and writes only its
own `agent-NN-receipts.jsonl`, `agent-NN-events.jsonl`, `agent-NN-report.md`,
assigned item files and uniquely named impact evidence. The root owns the
canonical ledger, page/registry edits, item ownership changes and downstream
classifications. Never overwrite another agent's files or run a build-driver
transition.

Before an original Statement/Definition change, record the precise reason and
expected contract in a receipt or event. After editing, write an `impact`
event immediately to `agent-NN-events.jsonl`, with `event_id`, `origin`,
`original_contract_sha256`, `current_contract_sha256`, `impact_file` and a
short summary. Fully trace all published direct and indirect consumers.
Record an exact affected use and an `accept`, `repair-needed` or `defer`
disposition for each. A sound reference is not an edit obligation. If an
assigned item owned by another reviewer needs an edit, write a
`cross_shard_repair` event with exact ID, invalidated claim and minimal
before/after proposal. Do not edit it; the root routes ownership.

For a necessary new lemma, write a `new_lemma_proposal` event with proposed
unique ID, page, consuming item/step, full intended claim and why existing
published suppliers cannot close the gap. The root will append a matching
`event_id` response to `agent-NN-directions.jsonl`. Check that file while
working on the same item. Do not write the new lemma until a response reserves
the ID/page. If no response is available and safe progress on that item is
exhausted, defer that item with the exact unmet prerequisite and continue.

Append each receipt atomically as one JSON line after finishing that item's
assessment. If the root later resolves a shared impact, it may ask you to
amend a receipt before shard completion. Do not mark a source repaired while
an essential new lemma or uncertain downstream use remains unresolved.
