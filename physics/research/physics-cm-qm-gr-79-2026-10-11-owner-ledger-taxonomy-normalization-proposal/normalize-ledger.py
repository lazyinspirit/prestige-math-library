#!/usr/bin/env python3
"""Regenerate a current-run schema proposal; apply only with explicit drain attestation."""
import argparse
import collections
import datetime
import difflib
import hashlib
import json
import os
import pathlib
import re
import subprocess

RUN = "physics-cm-qm-gr-79-2026-10-11"
ROOT = pathlib.Path(__file__).resolve().parents[2]
BASE = pathlib.Path(__file__).resolve().parent
ALIASES = {
    "incorrect-computation": "arithmetic-error",
    "false-witness": "invalid-witness",
    "mis-citation": "citation-inaccurate",
    "citation-mismatch": "citation-inaccurate",
    "citation-hypothesis-mismatch": "citation-inaccurate",
    "teschl-source-locator": "citation-inaccurate",
    "overstrong-source-summary": "citation-inflated",
    "overstrong-statement": "false-or-overstrong-statement",
    "false-or-overstrong-claim": "false-or-overstrong-statement",
    "overstrong-claim": "false-or-overstrong-statement",
    "overstrong-fact": "false-or-overstrong-statement",
    "incorrect-claim": "false-or-overstrong-statement",
    "overstrong-scope": "false-or-overstrong-statement",
}


def sha(raw):
    return hashlib.sha256(raw).hexdigest()


def relative(path):
    return str(path.relative_to(ROOT))


def native_validate(path, destination, tag):
    command = ["node", "tools/physics-support/defect-ledger.mjs", "validate",
               "--run", RUN, "--ledger", relative(path)]
    result = subprocess.run(command, cwd=ROOT, text=True, capture_output=True)
    (destination / (tag + ".stdout.txt")).write_text(result.stdout)
    (destination / (tag + ".stderr.txt")).write_text(result.stderr)
    return result, {"command": command, "exit_code": result.returncode,
                    "stdout": result.stdout.strip(), "stderr_file": tag + ".stderr.txt"}


def carrier_kind(subject):
    path = ROOT / "items" / (subject + ".md")
    if not path.exists():
        if len(list((ROOT / "library").glob("*/" + subject + ".md"))) == 1:
            return "page"
        return None
    match = re.search(r"^kind:\s*(.+)$", path.read_text(), re.M)
    return match.group(1).strip().strip("\"'") if match else None


def location(row):
    original = row["location"]
    value = original.lower().replace("#", "").strip()
    kind = carrier_kind(row["subject"])
    if re.fullmatch(r"\d+(?:\.\d+)+(?:\s*(?:and|,|;)\s*\d+(?:\.\d+)+)*", value):
        carrier = ROOT / "items" / (row["subject"] + ".md")
        text = carrier.read_text() if carrier.exists() else ""
        numbers = re.findall(r"\d+(?:\.\d+)+", value)
        for number in numbers:
            step = re.search(r"^" + re.escape(number) + r"\s", text, re.M)
            headings = list(re.finditer(r"^##\s+(.+)$", text[:step.start()] if step else "", re.M))
            if not (step and headings and headings[-1].group(1).strip() in ("Proof", "Verification", "Refutation", "Counterexample")):
                raise ValueError("Numeric proof locus not substantiated in actual carrier: " + row["defect_id"])
        return "proof-step " + value if len(numbers) == 1 else "proof-step"
    if value == "inverse proof":
        carrier = ROOT / "items" / (row["subject"] + ".md")
        if carrier.exists() and re.search(r"^## Proof$", carrier.read_text(), re.M):
            return "proof-step"
        raise ValueError("Inverse proof locus lacks actual Proof carrier: " + row["defect_id"])
    if "proof-contract" in value or "contracts." in value or "contract" in value:
        return "contract-row"
    if value.startswith(("sources", "source annotation", "deps ", "frontmatter", "physical_scope")):
        return "frontmatter"
    if kind == "page":
        return "page-summary" if any(x in value for x in ("summary", "synopsis", "scope of the page")) else "page-prose"
    if kind is None:
        return None
    if value == "current carrier":
        if "source-locator" in row.get("subclass", ""):
            return "frontmatter"
        if kind in ("definition", "algorithm"):
            return "definition"
        return "remark" if kind == "remark" else "statement-and-proof"
    if value.startswith(("definition / statement / facts / proof / title / page summary as identified in evidence",
                         "definition/statement or cited proof inference",
                         "definition/example/scope or cited source as detailed in report")):
        if kind in ("definition", "algorithm"):
            return "definition"
        return "remark" if kind == "remark" else "statement-and-proof"
    if "title" in value and ("statement" in value or "example" in value):
        return "title-and-statement"
    if "statement" in value and any(x in value for x in ("proof", "argument", "step ")):
        return "statement-and-proof"
    if value.startswith(("facts", "fact ", "f1", "f2", "f3", "f4", "f5", "f6", "l2", "given,", "deps, f")):
        return "facts-block"
    if re.search(r"\bF\d+\b", original) and not value.startswith(("statement", "proof", "example", "definition", "verification")):
        return "facts-block"
    if value.startswith(("proof", "historical proof", "verification", "counterexample", "point-localized symbol")) or "verification" in value:
        return "proof-step"
    if value.startswith(("definition", "historical statement", "reader-repaired statement", "statement", "postulate")):
        return "definition" if value.startswith("definition") else "statement"
    if value.startswith(("remark", "scope", "recorded scope", "status and scope", "derived-status",
                         "deliberately not claimed", "model boundaries", "hypotheses and counterexamples",
                         "frames open", "energy reading")):
        return "remark"
    if value.startswith(("title", "example")):
        return "title" if value.startswith("title") else "statement"
    if value.startswith(("opening summary", "body, paragraph", "paragraph beginning", "summary,",
                         "moving-chart", "energy summary", "fourier uniqueness")):
        return "remark"
    if value.startswith("items/"):
        if "rem-" in value:
            return "remark"
        if "ex-" in value or "proof" in value:
            return "proof-step"
        if "facts" in value:
            return "facts-block"
        if "def-" in value:
            return "definition"
    return None


def role_supported(row, state):
    batch = str(row.get("batch"))
    dispatch = any(x.get("label") == "3a-batch-" + batch and x.get("role") == "alpha"
                   for x in state["dispatches"].values())
    references = row.get("evidence", []) + row.get("adjudication_ref", [])
    paths = [x.get("path", "") for x in references if isinstance(x, dict)]
    return dispatch and any("alpha-batch-" + batch + "-3a" in path and (ROOT / path).exists()
                            for path in paths)


def normalize(row, errors, state, stamp, archive, applying):
    result = dict(row)
    for error in errors:
        field = error["field"]
        if field == "location":
            mapped = location(row)
            if mapped is None:
                raise ValueError("Unmapped location: " + row["defect_id"] + " " + row["location"])
            result[field] = mapped
            result["location_note"] = str(row.get("location_note", "")) + " | Original human locus: " + row[field]
        elif field == "subclass":
            result[field] = ALIASES.get(row[field], "other")
            result["subclass_note"] = (str(row.get("subclass_note", "")) + " | Original descriptive subtype: "
                + row[field] + ". Full original evidence: " + json.dumps(row.get("evidence", []), ensure_ascii=False)
                + ". No new substantive classification, observation or acceptance is claimed.")
        elif field == "class" and row[field] == "rigor" and str(row.get("batch")) == "52":
            result[field] = "accuracy"
        elif field == "caught_by_role" and row[field] in ("alpha", "alpha-batch-20", "alpha-batch-46"):
            if not role_supported(row, state):
                raise ValueError("Unbound actual Alpha role: " + row["defect_id"])
            result[field] = "group-alpha"
        elif field == "disposition" and row[field] in ("repaired", "escalated"):
            result[field] = {"repaired": "fixed", "escalated": "open"}[row[field]]
        elif field == "disposition" and row[field] == "resolved" and row["defect_id"] == RUN + "-3a-batch-4-producer-square-roots":
            # This exact native row says the historical omission was confirmed,
            # and the already recorded producer-3 repair resolved current bytes.
            references = {x.get("obligation") for x in row.get("adjudication_ref", []) if isinstance(x, dict)}
            notes = " ".join(x.get("note", "") for x in row.get("evidence", []) if isinstance(x, dict))
            if references != {"reader:4:21", "refuter:4:23"} or "Batch-3 repair already resolves the current carrier" not in notes:
                raise ValueError("Changed resolved-disposition evidence: " + row["defect_id"])
            result[field] = "fixed"
        elif field == "disposition" and row[field] == "resolved" and row["defect_id"] == RUN + "-3a-batch-4-producer-energy-citation":
            references = {x.get("obligation") for x in row.get("adjudication_ref", []) if isinstance(x, dict)}
            notes = " ".join(x.get("note", "") for x in row.get("evidence", []) if isinstance(x, dict))
            if references != {"reader:4:22", "reader:4:23", "refuter:4:24"} or "current producer was repaired" not in notes:
                raise ValueError("Changed resolved-disposition evidence: " + row["defect_id"])
            result[field] = "fixed"
        elif field == "at" and error.get("missing"):
            result[field] = stamp
            result["original_at_absent"] = True
            result["at_provenance"] = ("Actual owner metadata correction recording time; original event time unknown."
                                      if applying else "Proposal recording time only; regenerate actual correction time on apply.")
        else:
            raise ValueError("Unsupported field normalization: " + row["defect_id"] + " " + field)
    result["owner_metadata_normalization"] = {
        "kind": "canonical-schema-only", "original_ledger_snapshot": relative(archive),
        "original_row_sha256": sha(json.dumps(row, separators=(",", ":"), ensure_ascii=False).encode()),
        "original_invalid_fields": {x["field"]: row.get(x["field"]) for x in errors},
        "recorded_at": stamp,
        "note": "Exact original history archived; evidence, severity, supplier hashes and disposition semantics retained. No new review or proof completion.",
    }
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--writers-drained", action="store_true")
    args = parser.parse_args()
    os.chdir(ROOT)
    ledger = ROOT / "research/defect-ledger.jsonl"
    lock = ROOT / "research/defect-ledger.jsonl.append-lock"
    owns_lock = False
    if args.apply:
        if not args.writers_drained:
            raise SystemExit("Apply requires explicit --writers-drained after owner verifies all writers drained.")
        processes = subprocess.check_output(["ps", "-eo", "args"], text=True).splitlines()
        live = [x for x in processes if x.startswith(("node ", "/usr/bin/node ")) and "dispatch.mjs" in x
                and RUN in x and any(y in x for y in ("--role alpha ", "--role reader ", "--role beta "))]
        if live:
            raise SystemExit("Apply blocked by native writers: " + "\n".join(live))
        lock.mkdir()  # Never steal or delete another writer's lock.
        owns_lock = True
        (lock / "owner.json").write_text(json.dumps({"pid": os.getpid(), "task": "owner-final-schema-normalization"}))
    try:
        stamp = datetime.datetime.now(datetime.timezone.utc).isoformat()
        destination = BASE / ("apply-" if args.apply else "proposal-") / stamp.replace(":", "-")
        destination.mkdir(parents=True)
        before = ledger.read_bytes()
        archive = destination / "ledger-before.original.jsonl"
        archive.write_bytes(before)
        original_result, original_check = native_validate(archive, destination, "before-native")
        errors = collections.defaultdict(list)
        for text in original_result.stderr.splitlines():
            match = re.match(r'ERROR (.+?): (\w+) "(.*)" outside the closed enum$', text)
            if match:
                defect, field, value = match.groups()
                errors[defect].append({"field": field, "value": value})
                continue
            match = re.match(r"ERROR (.+?): missing (\w+)$", text)
            if match:
                defect, field = match.groups()
                errors[defect].append({"field": field, "missing": True})
                continue
            raise ValueError("Native error requires separate resolution: " + text)
        state = json.loads((ROOT / ".physics-autopilot" / RUN / "state.json").read_text())
        after_lines, operations = [], []
        for line in before.decode().splitlines(keepends=True):
            row = json.loads(line)
            owed = errors.get(row["defect_id"], [])
            if row.get("run") != RUN or not owed:
                after_lines.append(line)
                continue
            corrected = normalize(row, owed, state, stamp, archive, args.apply)
            operations.append({"defect_id": row["defect_id"], "original_row": row, "corrected_row": corrected,
                               "corrected_fields": [x["field"] for x in owed]})
            after_lines.append(json.dumps(corrected, ensure_ascii=False, separators=(",", ":")) + "\n")
        after = "".join(after_lines).encode()
        original_rows = [json.loads(x) for x in before.decode().splitlines()]
        proposed_rows = [json.loads(x) for x in after.decode().splitlines()]
        assert [x["defect_id"] for x in original_rows] == [x["defect_id"] for x in proposed_rows]
        assert all(before.decode().splitlines(keepends=True)[n] == after_lines[n]
                   for n, row in enumerate(original_rows) if row.get("run") != RUN)
        assert all(a.get("evidence") == b.get("evidence") and a.get("severity") == b.get("severity")
                   and a.get("adjudication_ref") == b.get("adjudication_ref")
                   for a, b in zip(original_rows, proposed_rows))
        metadata_fields = {"class", "subclass", "subclass_note", "location", "location_note",
                           "caught_by_role", "disposition", "at", "owner_metadata_normalization",
                           "original_at_absent", "at_provenance"}
        assert all({k: v for k, v in a.items() if k not in metadata_fields}
                   == {k: v for k, v in b.items() if k not in metadata_fields}
                   for a, b in zip(original_rows, proposed_rows))
        preview = destination / "ledger-normalized.proposed.jsonl"
        preview.write_bytes(after)
        (destination / "operations.json").write_text(json.dumps(operations, ensure_ascii=False, indent=2) + "\n")
        (destination / "normalization.diff").write_text("".join(difflib.unified_diff(
            before.decode().splitlines(keepends=True), after.decode().splitlines(keepends=True),
            fromfile="original-ledger", tofile="schema-only-normalized-ledger")))
        proposed_result, proposed_check = native_validate(preview, destination, "proposed-native")
        receipt = {"run": RUN, "recorded_at": stamp, "applied": False,
                   "before_sha256": sha(before), "after_sha256": sha(after),
                   "rows_changed": len(operations), "errors_by_field": dict(collections.Counter(
                       x["field"] for values in errors.values() for x in values)),
                   "original_native_check": original_check, "proposed_native_check": proposed_check,
                   "all_other_run_bytes_preserved": True, "all_ids_row_counts_order_preserved": True,
                   "all_existing_evidence_severity_decision_refs_preserved": True,
                   "all_non_metadata_fields_preserved": True}
        if proposed_result.returncode:
            (destination / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
            raise ValueError("Proposal still fails native schema; no global write. See " + relative(destination))
        if args.apply:
            if ledger.read_bytes() != before:
                raise ValueError("Ledger changed after locked snapshot; no global write.")
            temporary = ledger.with_name("defect-ledger.owner-normalization.tmp")
            with temporary.open("xb") as output:
                output.write(after)
            os.replace(temporary, ledger)
            final_result, final_check = native_validate(ledger, destination, "final-native")
            receipt.update({"applied": True, "native_lock_held": True, "final_native_check": final_check,
                            "final_ledger_sha256": sha(ledger.read_bytes())})
            if final_result.returncode:
                (destination / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
                raise ValueError("Applied metadata failed final native schema; preserve receipt for owner.")
        (destination / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
        print(json.dumps({"applied": args.apply, "rows_changed": len(operations),
                          "native_schema": proposed_check["stdout"], "evidence": relative(destination)}))
    finally:
        if owns_lock:
            (lock / "owner.json").unlink()
            lock.rmdir()


if __name__ == "__main__":
    main()
