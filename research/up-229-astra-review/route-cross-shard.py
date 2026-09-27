"""Route exact cross-shard findings to the frozen owner; leave unassigned events pending."""

import json
from pathlib import Path

BASE = Path(__file__).resolve().parent
owners = {
    row["id"]: row["assigned_shard"]
    for row in map(json.loads, (BASE / "frozen-up-index.jsonl").read_text().splitlines())
}


def ids(path):
    return {json.loads(s)["event_id"] for s in path.read_text().splitlines()} if path.exists() else set()


count = 0
unassigned = []
for origin_shard in range(1, 11):
    path = BASE / f"agent-{origin_shard:02d}-events.jsonl"
    if not path.exists():
        continue
    for line in path.read_text().splitlines():
        event = json.loads(line)
        if (event.get("type") or event.get("kind")) != "cross_shard_repair":
            continue
        event_id = event.get("event_id")
        if not event_id:
            # A corrected copy with a stable event_id must be appended by its owner.
            continue
        source_direction = BASE / f"agent-{origin_shard:02d}-directions.jsonl"
        if event_id in ids(source_direction):
            continue
        target = event.get("target") or event.get("consumer_id")
        target_shard = owners.get(target)
        if target_shard is None:
            unassigned.append((event_id, target))
            continue
        target_direction = BASE / f"agent-{target_shard:02d}-directions.jsonl"
        notice_id = "root-route-" + event_id
        if notice_id not in ids(target_direction):
            message = (
                f"Shard{origin_shard:02d} found a potential invalidated use in your assigned {target}: "
                f"{event.get('invalidated_claim', 'see source event')}. "
                f"Proposed repair: {event.get('minimal_after_proposal') or event.get('minimal_after') or event.get('minimal_before_after_proposal') or 'inspect exact event'}. "
                "Check exact proof and alternative routes before editing; if a contract changes, trace all published consumers. "
                "If already reviewed, append an amendment and notify root."
            )
            with target_direction.open("a") as out:
                out.write(json.dumps({"event_id": notice_id, "decision": "owner_notice", "target": target, "message": message}) + "\n")
        with source_direction.open("a") as out:
            out.write(json.dumps({"event_id": event_id, "decision": "routed", "target": target, "message": f"Routed to shard{target_shard:02d}; keep your current item U-P if its proof still depends on this unresolved supplier."}) + "\n")
        count += 1
print(f"routed={count} unassigned={unassigned}")
