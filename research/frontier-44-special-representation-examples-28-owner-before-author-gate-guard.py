"""Observe this frontier's genuine launches and request a native pause before gates."""
import json
import pathlib
import shlex
import subprocess
import time
import datetime

RUN = "frontier-44-special-representation-examples-28"
ROOT = pathlib.Path(__file__).resolve().parent.parent
STATE = ROOT / ".autopilot" / RUN
expected = set()
for path in (ROOT / "research").glob(RUN + "-batch-*.pages.json"):
    for page in json.loads(path.read_text()):
        if page["kind"] == "A":
            expected.add(page["id"])
if len(expected) != 50:
    raise RuntimeError("Expected exact approved fifty-pair frontier")
while True:
    state = json.loads((STATE / "state.json").read_text())
    if state["stage"] != "3b-author" or state.get("finishedAt") or state["paused"]:
        break
    launched = set()
    for line in (STATE / "events.jsonl").read_text().splitlines():
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        command = event.get("command", "")
        if event.get("type") != "exec" or "--label step3b-pair-" not in command:
            continue
        args = shlex.split(command)
        if "--run" in args and args[args.index("--run") + 1] == RUN and "--covers" in args:
            launched.update(args[args.index("--covers") + 1].split(","))
    if expected <= launched:
        if (STATE / "control.json").exists():
            raise RuntimeError("Pending native control; do not overwrite")
        subprocess.run(["node", "tools/tsx-run.mjs", "tools/autopilot/bin/autopilot.mts", "pause",
                        "--run", RUN, "--state-dir", str(STATE)], cwd=ROOT, check=True)
        receipt = {"at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                   "run": RUN, "expected_pairs": sorted(expected),
                   "actual_launches": sorted(launched), "native_pause_requested": True,
                   "pause_acknowledged": False,
                   "reason": "All approved author jobs launched; hold gates for escalation closure and metadata recertification"}
        (ROOT / "research" / (RUN + "-owner-before-author-gate-guard-receipt.json")).write_text(json.dumps(receipt, indent=2) + "\n")
        break
    time.sleep(5)
