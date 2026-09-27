"""Build the owner-facing exact-item audit report from final reviewer receipts."""

from collections import Counter
from pathlib import Path
import json
import re

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
FROZEN = [json.loads(s) for s in (BASE / "frozen-up-index.jsonl").read_text().splitlines()]

def clean(value):
    if isinstance(value, list):
        value = "; ".join(map(str, value))
    if isinstance(value, dict):
        value = json.dumps(value, ensure_ascii=False)
    return re.sub(r"\s+", " ", str(value or "")).strip()

def main():
    latest = {}
    event_ids = {}
    for shard in range(1, 11):
        receipts = BASE / f"agent-{shard:02d}-receipts.jsonl"
        for line in receipts.read_text().splitlines():
            receipt = json.loads(line)
            if "decision" in receipt:
                latest[receipt["id"]] = (receipt, shard)
        event_file = BASE / f"agent-{shard:02d}-events.jsonl"
        if event_file.exists():
            for line in event_file.read_text().splitlines():
                event = json.loads(line)
                if (event.get("type") or event.get("kind")) != "owner_escalation":
                    continue
                ident = event.get("origin") or event.get("item_id") or event.get("id")
                if ident and event.get("event_id"):
                    event_ids.setdefault(ident, []).append(event["event_id"])
    missing = [row["id"] for row in FROZEN if row["id"] not in latest]
    assert not missing, f"missing receipts: {missing}"
    decisions = Counter(latest[row["id"]][0]["decision"] for row in FROZEN)
    assert set(decisions) <= {"accept", "repair", "defer"}
    lines = [
        "# Owner escalation and disposition report — 229-item Astra audit",
        "",
        "Ten concurrent `gpt-6-astra` reviewers at medium reasoning effort audited the frozen",
        "published U-P pool independently, in ten disjoint ordered shards. The item-specific",
        "receipts record exact mathematical reasoning, consulted sources, checks and repair scope.",
        "This is an audit record, not a new independent certification or publication stamp.",
        "",
        f"Frozen decisions: **{decisions['accept']} accepted**, **{decisions['repair']} repaired**,",
        f"**{decisions['defer']} deferred**. Every deferred item remains U-P.",
        "The four new outside-frozen U-P supplier/consumer findings are listed below.",
        "",
        "## Deferred frozen items requiring owner action",
        "",
    ]
    for shard in range(1, 11):
        rows = [r for r in FROZEN if r["assigned_shard"] == shard and latest[r["id"]][0]["decision"] == "defer"]
        lines.extend([f"### Shard {shard:02d} — {len(rows)} deferred", ""])
        for row in rows:
            ident = row["id"]
            receipt = latest[ident][0]
            issue = clean(receipt.get("unresolved")) or clean(receipt.get("evidence"))
            if len(issue) > 850:
                issue = issue[:847].rstrip() + "…"
            events = event_ids.get(ident, [])
            suffix = f" Owner event(s): {', '.join(dict.fromkeys(events))}." if events else ""
            lines.append(
                f"- [`{ident}`](../../items/{ident}.md): {issue} "
                f"Receipt: `agent-{shard:02d}-receipts.jsonl`.{suffix}"
            )
        lines.append("")
    lines.extend([
        "## Outside-frozen published items kept in U-P",
        "",
        "- `cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier`: H² classification now assumes AC; its degree-two UCT route has an unresolved exact premise. See `root-h-two-closure.json`.",
        "- `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two`: its cohomological UCT and nonnatural-splitting suppliers carry unreconciled AC premises. See `root-h-two-closure.json`.",
        "- `lem-auslander-buchsbaum-base-case-free-module`: determinant proof treats every element of `1+m` as a unit under a local-ring definition whose current unit-characterization route requires AC. See agent02 event `agent-02-ab-base-unit`.",
        "- `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic`: closed collars reach nonsmooth endpoints, and relative Whitney approximation requires countable choice absent from the Statement. See agent06 event `agent-06-homotopy-collar-cross`.",
        "",
        "## Repair and consumer evidence",
        "",
        "Approved assigned repairs are enumerated in `approved-repairs.json`; each item's latest",
        "receipt provides its before/after, scope, checks and any claim-change impact file.",
        "`root-repairs.jsonl` and `root-h-two-closure.json` record root-owned outside-shard",
        "repairs. Complete changed-claim impact files are referenced by their source receipts.",
        "No unresolved cross-shard event was silently treated as a completed repair.",
        "",
    ])
    (BASE / "owner-escalations.md").write_text("\n".join(lines))
    print(dict(decisions), "owner escalation IDs", len(event_ids), "report lines", len(lines))

if __name__ == "__main__":
    main()
