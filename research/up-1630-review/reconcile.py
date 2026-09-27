"""Reconcile ordered reviewer receipts into the canonical Phase-3 index.

Accept and defer decisions are applied automatically. Repairs need an explicit
ID in approved-repairs.json because root must verify changed contracts and
consumer impact before moving the item to A-R. Original U-P reasons remain in
frozen-up-index.jsonl and the receipts.
"""

from collections import Counter
from pathlib import Path
import json
import re

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
LEDGER = ROOT / "research/published-consumer-supplier-ledger.md"
STATE = BASE / "reconciled.json"
APPROVALS = BASE / "approved-repairs.json"
HOLDS = BASE / "hold-repairs.json"
START = "<!-- phase3-classification-index:start -->"
END = "<!-- phase3-classification-index:end -->"
ROW = re.compile(r"^\| `([^`]+)` \| (.*) \|$", re.M)


def receipts():
    frozen = {
        x["id"]: x
        for x in map(json.loads, (BASE / "frozen-up-index.jsonl").read_text().splitlines())
    }
    found = {}
    for shard in range(1, 11):
        path = BASE / f"agent-{shard:02d}-receipts.jsonl"
        if not path.exists():
            continue
        for line in path.read_text().splitlines():
            if not line.strip():
                continue
            item = json.loads(line)
            ident = item["id"]
            assert ident in frozen and frozen[ident]["assigned_shard"] == shard, ident
            if "decision" not in item:
                # Evidence-only amendments preserve the preceding disposition.
                continue
            found[ident] = (item, path.relative_to(ROOT))
    return frozen, found


def split_section(index, heading):
    marker = f"### {heading}"
    begin = index.index(marker)
    end = index.find("\n### ", begin + len(marker))
    if end < 0:
        end = len(index)
    return begin, end, index[begin:end]


def replace_section(index, heading, section):
    begin, end, _ = split_section(index, heading)
    return index[:begin] + section + index[end:]


def extract_rows(section):
    return {ident: reason for ident, reason in ROW.findall(section)}


def remove_row(section, ident):
    pattern = rf"^\| `{re.escape(ident)}` \| .* \|\n"
    result, count = re.subn(pattern, "", section, count=1, flags=re.M)
    assert count == 1, ident
    return result


def add_row(section, ident, reason):
    safe = str(reason).replace("|", "\\|").replace("\n", " ")
    return section.rstrip("\n") + f"\n| `{ident}` | {safe} |\n"


def update_counts(index):
    counts = {}
    for klass in ("U-P", "U-C", "A-R", "A-P"):
        counts[klass] = len(extract_rows(split_section(index, klass)[2]))
        index, n = re.subn(
            rf"^(\| {klass} \| [^\n|]+ \| )\d+( \|)",
            rf"\g<1>{counts[klass]}\2",
            index,
            count=1,
            flags=re.M,
        )
        assert n == 1, klass
    index = re.sub(
        r"(The four queues currently contain )[\d,]+( distinct items\.)",
        rf"\g<1>{sum(counts.values()):,}\2",
        index,
        count=1,
    )
    return index, counts


def main():
    frozen, found = receipts()
    applied = json.loads(STATE.read_text()) if STATE.exists() else {}
    approved = set(json.loads(APPROVALS.read_text())) if APPROVALS.exists() else set()
    holds = json.loads(HOLDS.read_text()) if HOLDS.exists() else {}
    ledger = LEDGER.read_text()
    before, index_and_after = ledger.split(START, 1)
    index, after = index_and_after.split(END, 1)
    sections = {klass: split_section(index, klass)[2] for klass in ("U-P", "A-R", "Bounded no-repair-needed dispositions")}
    urows = extract_rows(sections["U-P"])
    arows = extract_rows(sections["A-R"])
    brows = extract_rows(sections["Bounded no-repair-needed dispositions"])
    changed = Counter()
    for ident in sorted(found, key=lambda i: frozen[i]["position"]):
        item, path = found[ident]
        decision = "defer" if ident in holds else item["decision"]
        previous = applied.get(ident)
        if previous == decision:
            continue
        if decision == "accept" and item.get("unresolved"):
            continue
        if decision == "repair" and ident not in approved:
            continue
        assert decision in ("accept", "repair", "defer"), (ident, decision)
        if previous == "accept":
            assert ident in brows, ident
            sections["Bounded no-repair-needed dispositions"] = remove_row(
                sections["Bounded no-repair-needed dispositions"], ident
            )
            brows.pop(ident)
        elif previous == "repair":
            assert ident in arows, ident
            sections["A-R"] = remove_row(sections["A-R"], ident)
            arows.pop(ident)
        else:
            assert ident in urows, ident
        if previous == "defer":
            assert ident in urows, ident
        locator = f"2026-09-23 ten-agent U-P review: `{path}` (`{ident}`)"
        if decision == "defer":
            note = holds.get(ident) or item.get("unresolved")
            if isinstance(note, list):
                note = "; ".join(str(v) for v in note)
            if not note:
                note = "exact unresolved obligation in receipt"
            note = str(note)[:500]
            if ident in urows:
                sections["U-P"] = remove_row(sections["U-P"], ident)
            original = frozen[ident]["original_up_reason"]
            sections["U-P"] = add_row(sections["U-P"], ident, f"{original} Review deferred: {note}. Evidence: {locator}.")
        elif decision == "accept":
            assert not item.get("unresolved"), (ident, "accept has unresolved")
            assert ident not in arows and ident not in brows, ident
            if ident in urows:
                sections["U-P"] = remove_row(sections["U-P"], ident)
            sections["Bounded no-repair-needed dispositions"] = add_row(
                sections["Bounded no-repair-needed dispositions"], ident,
                f"U-P impact/finding resolved by bounded item and used-interface review; original reason retained in frozen index. Evidence: {locator}. No independent judge.",
            )
        else:
            assert ident not in arows and ident not in brows, ident
            assert item.get("files_changed"), (ident, "repair without file change")
            if ident in urows:
                sections["U-P"] = remove_row(sections["U-P"], ident)
            sections["A-R"] = add_row(
                sections["A-R"], ident,
                f"Authorized local repair 2026-09-23; exact before/after, scope, checks and downstream dispositions in {locator}. Original U-P reason retained in frozen index. No independent judge.",
            )
        applied[ident] = decision
        changed[decision] += 1
        urows.pop(ident, None)
    for klass in ("Bounded no-repair-needed dispositions", "A-R", "U-P"):
        index = replace_section(index, klass, sections[klass])
    index, counts = update_counts(index)
    new_ledger = before + START + index + END + after
    if new_ledger != ledger:
        LEDGER.write_text(new_ledger)
    if changed:
        STATE.write_text(json.dumps(applied, indent=2, sort_keys=True) + "\n")
    pending_repairs = sum(1 for ident, (r, _) in found.items() if r["decision"] == "repair" and ident not in applied)
    print(f"applied={dict(changed)} total_reconciled={len(applied)} pending_repairs={pending_repairs} counts={counts}")


if __name__ == "__main__":
    main()
