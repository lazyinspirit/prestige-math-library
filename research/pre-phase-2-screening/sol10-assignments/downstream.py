"""List published item references to a changed supplier, for human impact review."""

from collections import defaultdict, deque
from pathlib import Path
import re
import sys

import yaml

ROOT = Path(__file__).resolve().parents[3]
reverse = defaultdict(set)
published = set()

for path in (ROOT / "items").glob("*.md"):
    text = path.read_text()
    parts = re.split(r"^---\s*$", text, maxsplit=2, flags=re.M)
    if len(parts) != 3:
        continue
    meta = yaml.safe_load(parts[1])
    ident = meta["id"]
    if meta.get("status") != "published":
        continue
    published.add(ident)
    links = set(meta.get("deps") or []) | set(meta.get("justified_by") or [])
    links |= set(re.findall(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]", parts[2]))
    # Some published Fact cards paste supplier IDs as plain text rather than
    # wikilinks; include those potential references for owner-directed impact.
    links |= set(re.findall(r"(?<![A-Za-z0-9-])(?:def|thm|lem|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*", parts[2]))
    for supplier in links - {ident}:
        reverse[supplier].add(ident)

for origin in sys.argv[1:]:
    direct = sorted(reverse[origin])
    seen = {origin}
    queue = deque([(origin, 0)])
    layers = defaultdict(list)
    while queue:
        supplier, depth = queue.popleft()
        for consumer in sorted(reverse[supplier] - seen):
            seen.add(consumer)
            layers[depth + 1].append(consumer)
            queue.append((consumer, depth + 1))
    print(f"{origin}: {len(direct)} direct, {len(seen)-1} in reference closure")
    for depth in sorted(layers):
        print(f"  depth {depth}: {', '.join(layers[depth])}")
