"""Record root-owned H2 premise repairs and unresolved UCT consumers once."""

from collections import Counter
from pathlib import Path
import hashlib
import json
import re
import subprocess

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
LEDGER = ROOT / "research/published-consumer-supplier-ledger.md"
START = "<!-- phase3-classification-index:start -->"
END = "<!-- phase3-classification-index:end -->"
SOURCES = [
    "cor-zero-h-two-class-is-equivalent-to-splitting",
    "cor-central-extensions-are-classified-by-h-two-with-trivial-action",
    "thm-baer-sum-agrees-with-addition-in-h-two",
    "thm-five-term-exact-sequence-as-extension-and-transgression-data",
]
DEFER = {
    "cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier":
        "The arbitrary central-extension classification now requires AC, while the degree-two group-cohomology UCT supplier has an unresolved unqualified use of the AC-bearing cohomological UCT and a splitting qualification. Require an exact AC premise/UCT proof reconciliation and full consumer closure before repair. Root H2 impact evidence in `research/up-229-astra-review/root-h-two-closure.json`.",
    "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two":
        "The proof invokes the AC-qualified cohomological UCT and nonnatural-splitting supplier without declaring that premise in its Statement. A sound exact-use and full consumer-impact reconciliation remains required. Root H2 impact evidence in `research/up-229-astra-review/root-h-two-closure.json`.",
}

def section(index, heading):
    start = index.index("### " + heading)
    stop = index.find("\n### ", start + 1)
    return start, len(index) if stop == -1 else stop

def row_exists(section_text, ident):
    return bool(re.search(r"^\| `" + re.escape(ident) + r"` \|", section_text, re.M))

def remove_row(section_text, ident):
    return re.sub(r"^\| `" + re.escape(ident) + r"` \| .*\|\n", "", section_text, flags=re.M)

def add_row(index, heading, ident, reason):
    a, b = section(index, heading)
    part = index[a:b]
    if row_exists(part, ident):
        return index
    part = part.rstrip("\n") + "\n| `" + ident + "` | " + reason.replace("|", "\\|") + " |\n"
    return index[:a] + part + index[b:]

def main():
    source_impact = json.loads((BASE / "agent-02-h-two-impact.json").read_text())
    ledger = LEDGER.read_text()
    before, rest = ledger.split(START, 1)
    index, after = rest.split(END, 1)
    original_rows = {}
    for heading in ("U-P", "A-R", "Bounded no-repair-needed dispositions"):
        a, b = section(index, heading)
        original_rows[heading] = re.findall(r"^\| `([^`]+)` \|", index[a:b], re.M)
    evidence = {"sources": {}, "unresolved": DEFER}
    for ident in SOURCES:
        path = ROOT / "items" / (ident + ".md")
        current = path.read_bytes()
        original = subprocess.check_output(["git", "show", "HEAD:items/" + ident + ".md"], cwd=ROOT)
        assert current != original, ident
        downstream = []
        for consumer in source_impact["consumers"]:
            paths = [p[p.index(ident):] for p in consumer["paths"] if ident in p and consumer["id"] != ident]
            if paths:
                decision = (
                    "repaired-by-root" if consumer["id"] in SOURCES else
                    "defer-U-P" if consumer["id"] in DEFER else
                    consumer["decision"]
                )
                downstream.append({"id": consumer["id"], "paths": paths, "decision": decision, "affected_use": consumer["affected_use"]})
        evidence["sources"][ident] = {
            "original_sha256": hashlib.sha256(original).hexdigest(),
            "current_sha256": hashlib.sha256(current).hexdigest(),
            "repair": "Added explicit AC premise to Statement and proof interface; removed stale verification; focused precheck/rendercheck passed.",
            "consumer_method": "All published item reference/dependency closure and exact uses in agent-02-h-two-impact.json; paths filtered to this repaired source.",
            "downstream": downstream,
        }
        for heading in ("U-P", "Bounded no-repair-needed dispositions"):
            a, b = section(index, heading)
            part = index[a:b]
            if row_exists(part, ident):
                index = index[:a] + remove_row(part, ident) + index[b:]
        index = add_row(index, "A-R", ident,
            "2026-09-23 root AC-premise repair in H² classification chain; exact before/after hashes, published consumer paths and dispositions in `research/up-229-astra-review/root-h-two-closure.json`. Focused precheck/rendercheck/diff pass; unresolved perfect-group/UCT chain remains U-P. No independent judge.")
    for ident, reason in DEFER.items():
        index = add_row(index, "U-P", ident, reason)
    counts = Counter()
    for heading in ("U-P", "U-C", "A-R", "A-P"):
        a, b = section(index, heading)
        counts[heading] = len(re.findall(r"^\| `[^`]+` \|", index[a:b], re.M))
        index, n = re.subn(rf"^(\| {heading} \| [^\n|]+ \| )\d+( \|)", rf"\g<1>{counts[heading]}\2", index, count=1, flags=re.M)
        assert n == 1, heading
    index = re.sub(r"(The four queues currently contain )[\d,]+( distinct items\.)", rf"\g<1>{sum(counts.values()):,}\2", index, count=1)
    before = re.sub(r"Current classifications: U-P \d+, U-C \d+, A-R \d+, A-P \d+\.",
                    f"Current classifications: U-P {counts['U-P']}, U-C {counts['U-C']}, A-R {counts['A-R']}, A-P {counts['A-P']}.", before, count=1)
    (BASE / "root-h-two-closure.json").write_text(json.dumps(evidence, indent=2) + "\n")
    LEDGER.write_text(before + START + index + END + after)
    print(dict(counts), "new H2 repairs", [i for i in SOURCES if i not in original_rows["A-R"]])

if __name__ == "__main__":
    main()
