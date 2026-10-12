#!/usr/bin/env python3
"""Read-only event/checkpoint observer. Never dispatches, hashes readiness, or controls a run."""
import json, time, os
from datetime import datetime, timezone
from pathlib import Path

run = "physics-cm-qm-gr-79-2026-10-11"
base = Path(".physics-autopilot", run)
evidence = Path(__file__).parent
events = base / "events.jsonl"
offset = events.stat().st_size
next_checkpoint = (int(time.time()) // 600 + 1) * 600
last_result = {}
blocker_path = Path('research', run + '-step1-blockers.json')
last_blocker_signature = None
observed = {"dispatch", "dispatch-ok", "dispatch-failed", "engine-error", "error", "blocked", "paused", "resumed", "stage", "owner-gate-request"}

def checkpoint():
    state = json.loads((base / "state.json").read_text())
    lock = json.loads((base / "controller.lock").read_text())
    active = [{"label": d["label"], "startedAt": d["startedAt"]} for d in state["dispatches"].values()
              if d.get("startedAt") and not d.get("endedAt")]
    process = Path("/proc", str(lock["pid"]))
    return {"kind": "checkpoint", "at": datetime.now(timezone.utc).isoformat(), "stage": state["stage"],
            "paused": state["paused"], "controller_pid": lock["pid"], "controller_exists": process.exists(),
            "active": active, "blockers": state["blockers"], "last_event": last_event,
            "scope": "State/events/process presence only; no readiness recertification."}

def emit(row):
    with (evidence / "live-monitor.jsonl").open("a") as f:
        f.write(json.dumps(row) + "\n")
    print(json.dumps(row), flush=True)

last_event = json.loads(events.read_text().splitlines()[-1])
emit(checkpoint())
while True:
    try:
        with events.open() as f:
            f.seek(offset)
            for line in f.readlines():
                try:
                    row = json.loads(line)
                except json.JSONDecodeError:
                    break
                last_event = row
                if row.get("type") in observed:
                    emit({"kind": "native-event", "observedAt": datetime.now(timezone.utc).isoformat(), "event": row})
            offset = f.tell()
        if time.time() >= next_checkpoint:
            emit(checkpoint())
            next_checkpoint += 600
        if blocker_path.exists():
            blocker = json.loads(blocker_path.read_text())
            signature = json.dumps(blocker.get('failures'), sort_keys=True)
            if signature != last_blocker_signature:
                emit({'kind': 'native-artifact-hold', 'observedAt': datetime.now(timezone.utc).isoformat(), 'blocker': blocker})
                last_blocker_signature = signature
    except (FileNotFoundError, json.JSONDecodeError, OSError) as error:
        emit({"kind": "observer-input-error", "at": datetime.now(timezone.utc).isoformat(), "reason": str(error)})
    time.sleep(10)
