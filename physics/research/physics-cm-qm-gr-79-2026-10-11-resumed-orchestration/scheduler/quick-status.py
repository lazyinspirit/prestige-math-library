#!/usr/bin/env python3
"""Fast read-only run summary; saved native readiness is explicitly dated."""
import json
from pathlib import Path
from datetime import datetime, timezone

run = "physics-cm-qm-gr-79-2026-10-11"
state = json.loads(Path(".physics-autopilot", run, "state.json").read_text())
levels = json.loads(Path("research", run + "-batch-dependency-levels.json").read_text())
dispatches = state["dispatches"]
pending = [r for r in levels["batches"] if not dispatches.get("1-scaffold:batch-" + r["batch"], {}).get("lastExitOk")]
active = [d["label"] for d in dispatches.values() if d.get("startedAt") and not d.get("endedAt")]
events_path = Path(".physics-autopilot", run, "events.jsonl")
with events_path.open("rb") as f:
    f.seek(max(0, events_path.stat().st_size - 8192))
    lines = f.read().splitlines()
event = json.loads(lines[-1]) if lines else None
native_path = Path(__file__).with_name("current.json")
try:
    native = json.loads(native_path.read_text())
    readiness = {k: native[k] for k in ["at", "native_complete", "receipt_counts", "levels_current"]}
except (FileNotFoundError, json.JSONDecodeError):
    readiness = {"available": False}
print(json.dumps({"at": datetime.now(timezone.utc).isoformat(), "stage": state["stage"],
                  "paused": state["paused"], "active": active, "last_event": event,
                  "pending_process_coverage": pending, "state_blockers": state["blockers"],
                  "last_saved_native_readiness": readiness,
                  "limitation": "Quick view does not rehash readiness or certify current completion. Run status-diagnostic.mts for native artifact evaluation."}, indent=2))
