"""Freeze the active canonical 229-item U-P queue into ten review shards."""

from hashlib import sha256
from pathlib import Path
import json
import re

import yaml

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
LEDGER = ROOT / "research/published-consumer-supplier-ledger.md"
CLAIM_HEADINGS = {
    "## Statement",
    "## Definition",
    "## Example",
    "## Counterexample",
    "## Statement refuted",
    "## Remark",
}


def claim_sections(content: str) -> str:
    parts = re.split(r"(^## .*$)", content, flags=re.M)
    return "\n".join(
        parts[i] + parts[i + 1].strip()
        for i in range(1, len(parts) - 1, 2)
        if parts[i] in CLAIM_HEADINGS
    )


def write_jsonl(path: Path, records: list[dict]) -> None:
    path.write_text("".join(json.dumps(row, ensure_ascii=False) + "\n" for row in records))


def main() -> None:
    ledger = LEDGER.read_text()
    index = ledger.split("<!-- phase3-classification-index:start -->", 1)[1].split(
        "<!-- phase3-classification-index:end -->", 1
    )[0]
    match = re.search(r"^### U-P — .*\n", index, flags=re.M)
    assert match is not None
    section = re.split(r"\n### ", index[match.end() :], maxsplit=1)[0]
    rows = re.findall(r"^\| `([^`]+)` \| (.*) \|$", section, flags=re.M)
    assert len(rows) == 229 and len({ident for ident, _ in rows}) == 229

    frozen = []
    for position, (ident, reason) in enumerate(rows, 1):
        path = ROOT / "items" / f"{ident}.md"
        content = path.read_text()
        meta = yaml.safe_load(re.split(r"^---\s*$", content, maxsplit=2, flags=re.M)[1])
        assert meta["id"] == ident and meta["status"] == "published", ident
        frozen.append(
            {
                "id": ident,
                "position": position,
                "assigned_shard": (position - 1) % 10 + 1,
                "current_sha256": sha256(content.encode()).hexdigest(),
                "claim_sha256": sha256(claim_sections(content).encode()).hexdigest(),
                "original_up_reason": reason,
            }
        )

    write_jsonl(BASE / "frozen-up-index.jsonl", frozen)
    shard_sizes = {}
    for shard in range(1, 11):
        assigned = [row for row in frozen if row["assigned_shard"] == shard]
        shard_sizes[f"{shard:02d}"] = len(assigned)
        assert len(assigned) == (23 if shard < 10 else 22), shard
        write_jsonl(BASE / f"agent-{shard:02d}.jsonl", assigned)

    (BASE / "freeze-summary.json").write_text(
        json.dumps(
            {
                "candidate_count": len(frozen),
                "shard_count": 10,
                "shard_sizes": shard_sizes,
                "ledger_sha256": sha256(ledger.encode()).hexdigest(),
                "selection": "canonical active U-P section at freeze time",
            },
            indent=2,
        )
        + "\n"
    )
    print("froze", len(frozen), "published U-P items across", shard_sizes)


if __name__ == "__main__":
    main()
