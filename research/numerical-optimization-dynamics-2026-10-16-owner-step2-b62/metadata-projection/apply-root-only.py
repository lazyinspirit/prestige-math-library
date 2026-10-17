#!/usr/bin/env python3
"""ROOT ONLY: guarded exact batch62 metadata projection; no default writes.
From repository root:
  python3 PATH/apply-root-only.py --describe
  python3 PATH/apply-root-only.py --apply-62
  python3 PATH/apply-root-only.py --apply-event-quotes
The optional event command only updates two exact citation quote fields in the
CURRENT105 contract object and preserves all unrelated current105 native work.
No plan/require/level/hash/drift/coverage/native state or acceptance operation.
Root must inspect projection.patch and actual source bindings before apply.
"""
from pathlib import Path
import argparse
import hashlib
import json
import os
import tempfile

EXPECTED_PAYLOAD_SHA256 = "44e23ca635247378342b509b0986d958ed192d6fc7c28b41b00cdbf9990dacc7"
HERE = Path(__file__).resolve().parent
REPO = Path.cwd().resolve()
if not (REPO / "CLAUDE.md").is_file() or not (REPO / "tools/autopilot").is_dir():
    raise SystemExit("Run this root-only draft from the repository root")
raw_payload = (HERE / "projection.json").read_bytes()
if hashlib.sha256(raw_payload).hexdigest() != EXPECTED_PAYLOAD_SHA256:
    raise SystemExit("Projection payload changed after exact draft preparation")
PAYLOAD = json.loads(raw_payload)

def sha(raw):
    return hashlib.sha256(raw).hexdigest()

def check_sources(only=None):
    for row in PAYLOAD["sources"]:
        if only is not None and row["path"] not in only:
            continue
        if sha((REPO / row["path"]).read_bytes()) != row["raw_sha256"]:
            raise SystemExit("Current source changed; re-review/reprepare: " + row["path"])

def artifact(name):
    path = REPO / name
    # Projection only references the explicit before/proposed review artifacts.
    if HERE not in path.resolve().parents:
        raise SystemExit("Projection artifact outside its review directory: " + name)
    return path

def prepare_temp(target, raw):
    fd, filename = tempfile.mkstemp(prefix=".b62-root-metadata-", dir=str(target.parent))
    try:
        with os.fdopen(fd, "wb") as stream:
            stream.write(raw)
            stream.flush()
            os.fsync(stream.fileno())
        os.chmod(filename, target.stat().st_mode & 0o777)
        return Path(filename)
    except BaseException:
        Path(filename).unlink(missing_ok=True)
        raise

def apply62():
    # Event source is separately guarded by its optional quote-only action.
    needed = {r["path"] for r in PAYLOAD["sources"]
              if r["path"] != "items/alg-safeguarded-hybrid-event-location-and-restart.md"}
    check_sources(needed)
    pending = []
    unchanged = []
    for row in PAYLOAD["files"]:
        if row["apply_group"] != "62":
            continue
        before = artifact(row["before_file"]).read_bytes()
        after = artifact(row["proposed_file"]).read_bytes()
        if sha(before) != row["before_raw_sha256"] or sha(after) != row["proposed_raw_sha256"]:
            raise SystemExit("Review artifacts changed: " + row["path"])
        target = REPO / row["path"]
        current = target.read_bytes()
        if current == after:
            unchanged.append(row["path"])
            continue
        if current != before:
            raise SystemExit("Current62 metadata differs from exact before; preserve it and reprepare: " + row["path"])
        pending.append((target, current, after))
    staged = []
    try:
        for target, before, after in pending:
            staged.append((target, before, prepare_temp(target, after)))
        check_sources(needed)
        if any(target.read_bytes() != before for target, before, tmp in staged):
            raise SystemExit("62 metadata changed while staging; nothing applied")
        for target, before, tmp in staged:
            if target.read_bytes() != before:
                raise SystemExit("Concurrent metadata write at boundary: " + str(target))
            os.replace(tmp, target)
        return {"mode": "apply-62", "changed": [str(t.relative_to(REPO)) for t, _, _ in pending],
                "already_projected": unchanged, "native_acceptance": False}
    finally:
        for target, before, tmp in staged:
            tmp.unlink(missing_ok=True)

def apply_event_quotes():
    changes = PAYLOAD["optional_event_quote_changes"]
    check_sources({"items/" + row["source"] + ".md" for row in changes})
    record = next(row for row in PAYLOAD["files"] if row["apply_group"] == "event-quotes-only")
    target = REPO / record["path"]
    before = target.read_bytes()
    current = json.loads(before)
    changed = []
    for row in changes:
        contract = current["contracts"].get(row["contract_id"])
        if not contract:
            raise SystemExit("Affected105 contract missing: " + row["contract_id"])
        matches = [c for c in contract.get("citations", [])
                   if all(c.get(k) == row[k] for k in ["fact", "source", "source_section"])]
        if len(matches) != 1:
            raise SystemExit("Affected105 citation identity not unique: " + row["contract_id"])
        citation = matches[0]
        if citation.get("quote") == row["after_quote"]:
            continue
        if citation.get("quote") != row["before_quote"]:
            raise SystemExit("Affected105 quote changed; preserve foreign work and reprepare: " + row["contract_id"])
        citation["quote"] = row["after_quote"]
        changed.append({"contract_id": row["contract_id"], "fact": row["fact"], "source": row["source"]})
    if not changed:
        return {"mode": "apply-event-quotes", "changed": [], "already_projected": True}
    after = (json.dumps(current, indent=2, ensure_ascii=False) + "\n").encode()
    tmp = prepare_temp(target, after)
    try:
        check_sources({"items/" + row["source"] + ".md" for row in changes})
        if target.read_bytes() != before:
            raise SystemExit("105 changed while staging; no quote update applied")
        os.replace(tmp, target)
    finally:
        tmp.unlink(missing_ok=True)
    return {"mode": "apply-event-quotes", "path": record["path"], "changed_quote_fields": changed,
            "all_other_current105_fields_preserved": True, "native_acceptance": False}

parser = argparse.ArgumentParser(description=__doc__)
group = parser.add_mutually_exclusive_group()
group.add_argument("--describe", action="store_true")
group.add_argument("--apply-62", action="store_true")
group.add_argument("--apply-event-quotes", action="store_true")
args = parser.parse_args()
if args.apply_62:
    result = apply62()
elif args.apply_event_quotes:
    result = apply_event_quotes()
else:
    result = {"mode": "describe-only", "canonical_writes": False,
              "files": [{"path": r["path"], "apply_group": r["apply_group"]} for r in PAYLOAD["files"]],
              "changes62": PAYLOAD["changes62"],
              "optional_event_quote_fields": [{k: r[k] for k in ["contract_id", "fact", "source"]}
                                              for r in PAYLOAD["optional_event_quote_changes"]],
              "exclusions": PAYLOAD["excluded"]}
print(json.dumps(result, indent=2, ensure_ascii=False))
