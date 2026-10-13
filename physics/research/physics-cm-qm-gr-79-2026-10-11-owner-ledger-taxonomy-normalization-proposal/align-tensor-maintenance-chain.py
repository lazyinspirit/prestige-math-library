#!/usr/bin/env python3
"""Guarded metadata alignment; canonical mutation only with explicit --apply."""
import argparse
import datetime
import hashlib
import json
import os
import pathlib
import subprocess

BASE = pathlib.Path(__file__).resolve().parent
ROOT = BASE.parents[1]
RUN = "physics-cm-qm-gr-79-2026-10-11"


def row_hash(row):
    return hashlib.sha256(json.dumps(row, separators=(",", ":"), ensure_ascii=False).encode()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    proposal = json.loads((BASE / "tensor-maintenance-chain-location.proposed.json").read_text())
    ledger = ROOT / "research/defect-ledger.jsonl"
    lock = ledger.with_name(ledger.name + ".append-lock")
    owns_lock = False
    if args.apply:
        lock.mkdir()  # Never steal another writer's lock.
        owns_lock = True
        (lock / "owner.json").write_text(json.dumps({"pid": os.getpid(), "task": "root-tensor-maintenance-locus-alignment"}))
    try:
        before = ledger.read_bytes()  # Fresh after root's normalization, not a stale full-ledger proposal.
        lines = before.decode().splitlines(keepends=True)
        rows = [json.loads(line) for line in lines]
        guard = proposal["guard"]
        indexes = [n for n, row in enumerate(rows) if row["defect_id"] == guard["predecessor_id"]]
        successors = [row for row in rows if row["defect_id"] == guard["successor_id"]]
        assert len(indexes) == 1 and len(successors) == 1
        index = indexes[0]
        prior, active = rows[index], successors[0]
        assert prior["run"] == active["run"] == RUN
        assert row_hash(prior) == guard["predecessor_original_row_sha256"]
        assert row_hash(active) == guard["successor_original_row_sha256"]
        assert prior["location"] == "proof" and active["location"] == "proof-step"
        assert active["supersedes"] == [prior["defect_id"]]
        assert prior["disposition"] == active["disposition"] == "open"
        assert all(prior.get(key) == active.get(key) for key in
                   ("subject", "class", "subclass", "severity", "batch", "consumer_id"))
        reference = {"path": "research/" + RUN + "-alpha-batch-66-3a-decisions.json", "obligation": "reader:66:1"}
        assert reference in prior["adjudication_ref"] and reference in active["adjudication_ref"]
        corrected = {**prior, "location": "proof-step", "location_note": proposal["after_row"]["location_note"]}
        assert corrected == proposal["after_row"]
        stamp = datetime.datetime.now(datetime.timezone.utc).isoformat().replace(":", "-")
        evidence = BASE / "tensor-chain-alignment" / stamp
        evidence.mkdir(parents=True)
        (evidence / "ledger-fresh-before.original.jsonl").write_bytes(before)
        (evidence / "predecessor.original.json").write_text(json.dumps(prior, indent=2, ensure_ascii=False) + "\n")
        lines[index] = json.dumps(corrected, ensure_ascii=False, separators=(",", ":")) + "\n"
        after = "".join(lines).encode()
        assert all(line == lines[n] for n, line in enumerate(before.decode().splitlines(keepends=True)) if n != index)
        preview = evidence / "ledger-aligned.proposed.jsonl"
        preview.write_bytes(after)
        command = ["node", "tools/physics-support/defect-ledger.mjs", "validate", "--run", RUN,
                   "--ledger", str(preview.relative_to(ROOT))]
        result = subprocess.run(command, cwd=ROOT, text=True, capture_output=True)
        (evidence / "native-schema.stdout.txt").write_text(result.stdout)
        (evidence / "native-schema.stderr.txt").write_text(result.stderr)
        receipt = {"applied": False, "only_fields_changed": ["location", "location_note"],
                   "before_sha256": hashlib.sha256(before).hexdigest(),
                   "after_sha256": hashlib.sha256(after).hexdigest(), "native_command": command,
                   "native_exit_code": result.returncode, "native_stdout": result.stdout.strip(),
                   "other_rows_and_other_run_bytes_preserved": True, "both_defects_remain_open": True,
                   "source_original_hashes_and_decision_refs_unchanged": True}
        if args.apply:
            assert result.returncode == 0, "Root normalization must pass before chain alignment. No canonical write."
            assert ledger.read_bytes() == before, "Ledger changed since native locked snapshot. No canonical write."
            temporary = ledger.with_name(ledger.name + ".tensor-chain-alignment.tmp")
            with temporary.open("xb") as output:
                output.write(after)
            os.replace(temporary, ledger)
            receipt["applied"] = True
        (evidence / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
        print(json.dumps({"applied": receipt["applied"], "native_schema": result.stdout.strip(),
                          "evidence": str(evidence.relative_to(ROOT))}))
    finally:
        if owns_lock:
            (lock / "owner.json").unlink()
            lock.rmdir()


if __name__ == "__main__":
    main()
