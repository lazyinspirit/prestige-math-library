# Ten-reviewer coordination

Each reviewer owns its `agent-NN.jsonl` assignments and writes only its
`agent-NN-receipts.jsonl`, `agent-NN-events.jsonl`, `agent-NN-report.md`,
assigned item files, and uniquely named impact evidence. The root owns the
canonical ledger, page/registry edits, ownership changes, and final decisions.
Never overwrite another reviewer or existing workspace changes.

Before a mathematical claim change, write an `interface_change_intent` event
with the exact original claim and proposed scope. After editing, write an
`impact` event with original/current claim and source SHA-256, impact-file
path, and a short summary. The impact file must enumerate the full published
direct and indirect closure, exact uses, and one of `accept`, `repair-needed`,
or `defer` for every consumer. Changed consumer claims trigger a new trace.

For an item owned by another reviewer, write a `cross_shard_repair` event with
origin, target, exact invalidated use and minimal before/after proposal. For
an outside-shard item, use the same event; the root assigns its maintenance.
Do not edit before the owner responds in `agent-NN-directions.jsonl`.

For a new prerequisite, write a `new_prerequisite_proposal` event with a
proposed unique ID, kind (definition or lemma), existing A page, complete
intended claim, consuming item/proof step, and why current published suppliers
are insufficient. Wait for a root reservation before authoring it. If none is
available after exhausting safe work on the current item, defer and continue.

For a substantial unresolved prerequisite, write an `owner_escalation` event
with exact missing claim, consuming step, evidence, sources actually checked,
and viable repair path. Keep the item U-P. Root records these for the owner;
do not send external messages.

Append each receipt atomically as one JSON line after completing that item.
Check your directions file between items and before finalizing an item with
pending cross-shard work. A proposed repair is not a completed repair while
an essential new prerequisite or changed consumer use remains unresolved.
