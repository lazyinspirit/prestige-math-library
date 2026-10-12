"""Pause native scheduling after the failed author unit is genuinely relaunched."""
import datetime
import json
import pathlib
import shlex
import subprocess
import time

RUN = "frontier-44-special-representation-examples-28"
UNIT = "projective-perverse-hard-lefschetz-and-decomposition"
ROOT = pathlib.Path(__file__).resolve().parent.parent
STATE = ROOT / ".autopilot" / RUN
EVENTS = STATE / "events.jsonl"
baseline = len(EVENTS.read_text().splitlines())
deadline = time.monotonic() + 600
while time.monotonic() < deadline:
    state = json.loads((STATE / "state.json").read_text())
    if state["stage"] != "3b-author" or state.get("finishedAt"):
        raise RuntimeError("Unexpected stage changed before guarded author recovery")
    for line in EVENTS.read_text().splitlines()[baseline:]:
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        command = event.get("command", "")
        if event.get("type") != "exec" or "--label step3b-pair-" not in command:
            continue
        args = shlex.split(command)
        if "--covers" not in args or args[args.index("--covers") + 1] != UNIT:
            continue
        if (STATE / "control.json").exists():
            raise RuntimeError("Pending native control; do not overwrite")
        subprocess.run(["node", "tools/tsx-run.mjs", "tools/autopilot/bin/autopilot.mts", "pause",
                        "--run", RUN, "--state-dir", str(STATE)], cwd=ROOT, check=True)
        receipt = {"run": RUN, "unit": UNIT,
                   "at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                   "actual_relaunch_event": event, "native_pause_requested": True,
                   "pause_acknowledged": False, "counter_reset_requested": False,
                   "before_step4_pause_preserved": state.get("pauseAfter") == "3b-author"}
        (ROOT / "research" / (RUN + "-owner-author-recovery-pause-receipt.json")).write_text(json.dumps(receipt, indent=2) + "\n")
        raise SystemExit(0)
    time.sleep(2)
raise RuntimeError("No genuine author relaunch observed within ten minutes")
