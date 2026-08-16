#!/usr/bin/env python3
"""Alpha c, step 6b: re-sync the batch-7 proof contract with the repaired items.

Rebuilds `citations` and `derivations` for the items repaired at step 6b, from
the item text on disk. Curated quotes are preserved whenever the same fact still
cites the same source (or, when fact numbers shifted, whenever the same source
is still cited); only genuinely new (fact, source) pairs get a fresh quote, and
that quote is the cited item's Statement/Definition section copied verbatim, so
it is an exact substring by construction. `boundaries`, `finite_smoke`,
`risk_review` and `routine_steps` are left untouched — they are dispositions,
not derived data.
"""
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
ITEMS = REPO / "items"
CONTRACT = REPO / "research" / "frontier-14-batch-7.proof-contracts.json"

REPAIRED = [
    "lem-two-compact-cover-sweeps-for-function-lattices",
    "thm-closed-real-function-algebras-are-function-spaces-on-their-quotients",
    "thm-lattice-stone-weierstrass",
    "thm-real-stone-weierstrass-general",
    "lem-real-part-of-a-self-adjoint-complex-function-algebra",
    "thm-complex-stone-weierstrass-self-adjoint",
    "ex-distance-function-lattice-is-dense-on-a-compact-metric-space",
    "cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense",
    "thm-real-stone-weierstrass-dichotomy-for-separating-algebras",
    "cex-disc-algebra-is-not-dense-without-self-adjointness",
    "ex-trigonometric-polynomials-are-dense-on-the-circle",
    "ex-two-point-duplication-algebra-and-its-quotient",
    "ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval",
]

FACT_RE = re.compile(r"^\[([FAL]\d+)\]\s+(.*)$")
STEP_RE = re.compile(r"^(\d+\.\d+)\s+(.*)$")
LINK_RE = re.compile(r"\[\[([a-z0-9-]+)\]\]")


def body(path):
    text = path.read_text(encoding="utf8")
    return text.split("---", 2)[2] if text.startswith("---") else text


def section(item_id, *names):
    text = body(ITEMS / f"{item_id}.md")
    for name in names:
        m = re.search(rf"^## {name}\s*\n(.*?)(?=^## |\Z)", text, re.M | re.S)
        if m:
            return name, m.group(1).strip()
    raise SystemExit(f"no {names} section in {item_id}")


def parse(item_id):
    """Return (facts, steps) read off the repaired item on disk."""
    text = body(ITEMS / f"{item_id}.md")
    facts, steps = {}, []
    in_facts = in_proof = False
    for line in text.splitlines():
        if line.startswith("## "):
            in_facts = line.startswith("## Facts")
            in_proof = line.startswith(("## Proof", "## Counterexample", "## Verification"))
            continue
        if in_facts:
            m = FACT_RE.match(line.strip())
            if m:
                facts[m.group(1)] = LINK_RE.findall(m.group(2))
        elif in_proof:
            m = STEP_RE.match(line.strip())
            if m:
                claim = m.group(2)
                inputs = []
                tail = re.search(r"\[([^\[\]]*)\]\s*(?:∎)?\s*$", claim)
                if tail:
                    inputs = [p.strip() for p in tail.group(1).split(",") if p.strip()]
                    claim = claim[: tail.start()].strip()
                claim = claim.rstrip("∎").strip()
                steps.append((m.group(1), claim, inputs))
    return facts, steps


def rebuild(item_id, entry):
    facts, steps = parse(item_id)

    uses = {f: [] for f in facts}
    for step_id, _claim, inputs in steps:
        for tok in inputs:
            if tok in uses:
                uses[tok].append(step_id)

    by_pair = {(c["fact"], c["source"]): c for c in entry["citations"]}
    by_source = {}
    for c in entry["citations"]:
        by_source.setdefault(c["source"], c)

    citations, fresh = [], []
    for fact in sorted(facts, key=lambda f: (f[0], int(f[1:]))):
        for source in facts[fact]:
            old = by_pair.get((fact, source)) or by_source.get(source)
            if old is not None:
                sec, quote = old["source_section"], old["quote"]
            else:
                sec, quote = section(source, "Statement", "Definition")
                fresh.append(f"{item_id}: {fact} -> {source}")
            citations.append(
                {"fact": fact, "source": source, "source_section": sec,
                 "quote": quote, "uses": uses[fact]}
            )

    entry["citations"] = citations
    entry["derivations"] = [
        {"id": "step-" + step_id.replace(".", "-"), "claim": claim,
         "step": step_id, "inputs": inputs}
        for step_id, claim, inputs in steps
    ]
    return fresh


def main():
    data = json.loads(CONTRACT.read_text(encoding="utf8"))
    fresh = []
    for item_id in REPAIRED:
        entry = data["contracts"].get(item_id)
        if entry is None:
            sys.exit(f"no contract entry for {item_id}")
        fresh += rebuild(item_id, entry)
    CONTRACT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print(f"re-synced {len(REPAIRED)} contract entries")
    print(f"{len(fresh)} newly quoted citation(s):")
    for line in fresh:
        print("  ", line)


if __name__ == "__main__":
    main()
