"""Acknowledge non-routing review events without certifying their mathematics."""

import json
from pathlib import Path

BASE = Path(__file__).resolve().parent
MESSAGES = {
    "interface_change_intent": "Received. Complete the exact local proof and full published consumer-impact review; retain U-P if any load-bearing supplier or affected use remains uncertain.",
    "expected_interface": "Received. Complete the exact local proof and full published consumer-impact review; retain U-P if any load-bearing supplier or affected use remains uncertain.",
    "interface_change_in_progress": "Received. Continue the exact local proof and full published consumer-impact review; the change is not approved as A-R by this acknowledgement.",
    "impact": "Impact file received for root reconciliation. Route each affected use, distinguish unaffected references, and keep the source U-P if a load-bearing proof or supplier remains unresolved.",
    "impact_retraction": "Retraction received. Restore the original contract, amend the receipt to defer, and treat previously routed downstream edits as candidate concerns only unless another actual interface change independently requires them.",
    "direction_response": "Response received; retain its exact evidence in the item receipt.",
    "impact_complete": "Full consumer-impact file received for root reconciliation. Keep each affected consumer in its exact assigned disposition; this acknowledgement does not certify the source or downstream mathematics.",
    "receipt_amendment": "Amendment received for root reconciliation; the item's latest exact finding controls its class.",
    "event_correction": "Corrected event metadata received; use the frozen assignment hash and latest exact evidence.",
    "impact_scope_notice": "Closure scope received. Enumerate complete paths and use a documented unchanged-interface boundary only where the direct exact use is unaffected; keep unresolved branches U-P.",
    "interface_change_reverted": "Reversion received; the original source remains U-P and prior downstream proposals are not consequences of a live changed interface. Review any new root direction for a safe follow-up.",
}
count = 0
for shard in range(1, 11):
    events = BASE / f"agent-{shard:02d}-events.jsonl"
    directions = BASE / f"agent-{shard:02d}-directions.jsonl"
    if not events.exists():
        continue
    answered = {json.loads(s)["event_id"] for s in directions.read_text().splitlines()} if directions.exists() else set()
    with directions.open("a") as out:
        for line in events.read_text().splitlines():
            event = json.loads(line)
            event_id = event.get("event_id")
            typ = event.get("type")
            if not event_id or event_id in answered or typ not in MESSAGES:
                continue
            out.write(json.dumps({"event_id": event_id, "decision": "acknowledged_for_coordination", "origin": event.get("origin"), "message": MESSAGES[typ]}) + "\n")
            answered.add(event_id)
            count += 1
print(f"acknowledged={count}")
