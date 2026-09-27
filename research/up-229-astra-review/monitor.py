"""Read-only progress and coordination summary for the ten CLI reviewers."""

from collections import Counter
from pathlib import Path
import json
import re

BASE = Path(__file__).resolve().parent


def rows(path):
    if not path.exists():
        return []
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]


total = 0
all_assigned = set()
all_reviewed = set()
for n in range(1, 11):
    assignment = rows(BASE / f"agent-{n:02d}.jsonl")
    receipts = rows(BASE / f"agent-{n:02d}-receipts.jsonl")
    assigned_ids = [row["id"] for row in assignment]
    receipt_ids = [row["id"] for row in receipts]
    assert len(assigned_ids) == (23 if n < 10 else 22) and not all_assigned.intersection(assigned_ids)
    seen = set()
    ordered_count = 0
    for ident in receipt_ids:
        if ident in seen:
            continue  # An amendment to an already reviewed assigned item.
        assert ident == assigned_ids[ordered_count], (n, ordered_count, ident)
        seen.add(ident)
        ordered_count += 1
    all_assigned.update(assigned_ids)
    all_reviewed.update(seen)
    total += ordered_count
    latest = {row["id"]: row for row in receipts if "decision" in row}
    counts = Counter(row["decision"] for row in latest.values())
    events = rows(BASE / f"agent-{n:02d}-events.jsonl")
    directions = rows(BASE / f"agent-{n:02d}-directions.jsonl")
    handled = {row.get("event_id") for row in directions}
    pending = [row for row in events if row.get("event_id") and row["event_id"] not in handled]
    log = Path(f"/tmp/up229-astra-agent{n:02d}.jsonl")
    state = "not-started"
    if log.exists():
        text = log.read_text()
        state = "finished" if '"type":"turn.completed"' in text else "running"
        if '"type":"error"' in text:
            state += "/error"
    print(
        f"agent-{n:02d} {ordered_count:3d}/{len(assignment):2d} {state:13s} "
        f"decisions={dict(counts)} pending-events={len(pending)}"
    )
    for event in pending:
        print(
            "  EVENT",
            event.get("event_id", "?"),
            event.get("type", "?"),
            event.get("origin", event.get("item_id", "?")),
        )

assert len(all_assigned) == 229 and len(all_reviewed) == total
print(f"TOTAL {total}/229; remaining {229-total}")
