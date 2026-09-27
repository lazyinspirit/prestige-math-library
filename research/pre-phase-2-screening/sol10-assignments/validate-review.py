"""Validate shard coverage, evidence ownership, and current ledger reconciliation."""

from collections import Counter
from hashlib import sha256
from pathlib import Path
import json
import re
import subprocess

import yaml

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[2]
LEDGER = ROOT / "research/published-consumer-supplier-ledger.md"
ERRORS = []


def rows(path):
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]


def contract_sections(text):
    parts = re.split(r"(^## .*$)", text, flags=re.M)
    return "\n".join(
        parts[i] + parts[i + 1].strip()
        for i in range(1, len(parts) - 1, 2)
        if parts[i] in ("## Statement", "## Definition")
    )


ledger = LEDGER.read_text()
index = ledger.split("## Item classification index —", 1)[1].split(
    "<!-- phase3-classification-index:end -->", 1
)[0]
index_ids = re.findall(r"^\| `([^`]+)` \|", index, flags=re.M)
if len(index_ids) != len(set(index_ids)):
    ERRORS.append("duplicate canonical index ID")
classes = {}
for code in ("A-P", "U-C", "A-R", "U-P"):
    match = re.search(r"^### " + code + r" — .*\n", index, flags=re.M)
    if match is None:
        ERRORS.append("missing class heading " + code)
        continue
    section = re.split(r"\n### ", index[match.end() :], maxsplit=1)[0]
    for ident in re.findall(r"^\| `([^`]+)` \|", section, flags=re.M):
        if ident in classes:
            ERRORS.append("duplicate active class " + ident)
        classes[ident] = code

all_assigned = set()
reviewed = set()
changed = []
for n in range(1, 11):
    assignment = rows(BASE / f"agent-{n:02d}.jsonl")
    ids = [row["id"] for row in assignment]
    if len(ids) != len(set(ids)) or all_assigned.intersection(ids):
        ERRORS.append(f"duplicate assignment in shard {n:02d}")
    all_assigned.update(ids)
    receipt_path = BASE / f"agent-{n:02d}-receipts.jsonl"
    if not receipt_path.exists():
        print(f"agent-{n:02d}: 0/{len(ids)}")
        continue
    receipts = rows(receipt_path)
    if [row["id"] for row in receipts] != ids[: len(receipts)]:
        ERRORS.append(f"out-of-order or foreign receipt in shard {n:02d}")
    if len(receipts) > len(ids):
        ERRORS.append(f"too many receipts in shard {n:02d}")
    for assigned, receipt in zip(assignment, receipts):
        ident = assigned["id"]
        reviewed.add(ident)
        path = ROOT / "items" / f"{ident}.md"
        current = path.read_text()
        current_hash = sha256(current.encode()).hexdigest()
        original_hash = assigned["current_sha256"]
        file_changed = current_hash != original_hash
        listed = f"items/{ident}.md" in receipt.get("files_changed", [])
        if file_changed != listed:
            ERRORS.append(f"changed-file evidence mismatch: {ident}")
        if file_changed:
            changed.append(ident)
            original = subprocess.check_output(
                ["git", "show", f"HEAD:items/{ident}.md"], cwd=ROOT, text=True
            )
            contract_changed = contract_sections(current) != contract_sections(original)
            if contract_changed != (receipt.get("statement_change") == "actual"):
                ERRORS.append(f"Statement/Definition change flag mismatch: {ident}")
        meta = yaml.safe_load(re.split(r"^---\s*$", current, maxsplit=2, flags=re.M)[1])
        if meta.get("status") != "published":
            ERRORS.append(f"assigned item not published: {ident}")
        code = classes.get(ident)
        disposition = receipt.get("disposition")
        if code in ("U-P", "U-C") and disposition not in ("already_up", "propose_up"):
            ERRORS.append(f"U-P/U-C receipt mismatch: {ident}: {disposition}")
        if code == "A-P" and disposition != "already_pending":
            ERRORS.append(f"A-P receipt mismatch: {ident}: {disposition}")
        if code == "A-R" and disposition in ("already_up", "already_pending"):
            ERRORS.append(f"A-R receipt mismatch: {ident}: {disposition}")
        if not receipt.get("review_scope") or not receipt.get("evidence"):
            ERRORS.append(f"empty review evidence: {ident}")
    print(f"agent-{n:02d}: {len(receipts)}/{len(ids)}")
    if len(receipts) == len(ids) and not (BASE / f"agent-{n:02d}-report.md").exists():
        ERRORS.append(f"missing final report for shard {n:02d}")

if len(all_assigned) != 1017:
    ERRORS.append(f"assignment union is {len(all_assigned)}, expected 1017")
for impact_file in BASE.glob("*impact.json"):
    impact = json.loads(impact_file.read_text())
    origin = ROOT / "items" / f"{impact['origin']}.md"
    if sha256(origin.read_bytes()).hexdigest() != impact.get("origin_current_sha256"):
        ERRORS.append(f"stale impact origin hash: {impact_file.name}")
    for consumer in impact["consumers"]:
        if classes.get(consumer["id"]) != "U-P":
            ERRORS.append(f"unclassified impact: {impact_file.name}: {consumer['id']}")

counts = Counter(classes.values())
summary = re.search(
    r"Current classifications: U-P (\d+), U-C (\d+), A-R (\d+), A-P (\d+)\.",
    ledger,
)
if summary is None or tuple(map(int, summary.groups())) != tuple(
    counts[c] for c in ("U-P", "U-C", "A-R", "A-P")
):
    ERRORS.append("ledger summary counts do not match active index")
print(f"reviewed {len(reviewed)}/1017; edited assigned files {len(changed)}")
print("classes", dict(counts))
if ERRORS:
    for error in ERRORS:
        print("ERROR", error)
    raise SystemExit(1)
print("review evidence and ledger checks pass")
