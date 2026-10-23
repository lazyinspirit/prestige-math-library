"""Write draft evidence only. Never write production carriers or native evidence."""
from pathlib import Path
import datetime
import difflib
import hashlib
import json
import re
import yaml

ROOT = Path.cwd()
OUT = ROOT / "research/fluid-dynamics-all-47-2026-10-23-owner-step4-weak-balances"
RUN = "fluid-dynamics-all-47-2026-10-23"
sha = lambda b: hashlib.sha256(b).hexdigest()
frontmatter = lambda text: re.split(r"(?m)^---\s*$", text, maxsplit=2)[1]

def save(rel, content):
    p = OUT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_bytes(content.encode() if isinstance(content, str) else content)
    return {"path": str(p.relative_to(ROOT)), "sha256": sha(p.read_bytes())}

targets = ["lem-fd-weak-jump-consistency", "pthm-fd-conservation-jump-laws"]
inputs = {}
for name in targets + ["def-fd-conservative-weak-form", "post-fd-weak-balances", "def-fd-quantity-and-frame-conventions"]:
    p = ROOT / "items" / (name + ".md")
    raw = p.read_bytes()
    inputs[str(p.relative_to(ROOT))] = sha(raw)
    save("observed/" + p.name, raw)

replacements = {
    targets[0]: [
        (r"\lambda([F]\cdot n-V_n[U])", r"\lambda([F]n-V_n[U])"),
        (r"when $[F]\cdot n-V_n[U]=0$", r"when $[F]n-V_n[U]=0$"),
    ],
    targets[1]: [
        ("Equivalently, for any conservative density $U$ and flux $F$ above, the interface coefficient is $[F]\\cdot n-V_n[U]$; it must vanish for conservation and be nonnegative for physical entropy.",
         "Equivalently, for any conservative density $U$ and flux $F$ above, the interface coefficient is $[F]n-V_n[U]$. Here $[F]n$ is matrix-vector multiplication for the momentum flux; for each scalar law its vector flux is identified with a one-row matrix, so $[F]n=[F]\\cdot n$. The coefficient must vanish for conservation and be nonnegative for physical entropy."),
        ("integration on the two sides gives interface coefficient $[F]\\cdot n-V_n[U]$;", "integration on the two sides gives interface coefficient $[F]n-V_n[U]$, using the scalar-law row identification stated above;"),
        ("its action is exactly the interface measure with coefficient $[F]\\cdot n-V_n[U]$.", "its action is exactly the interface measure with coefficient $[F]n-V_n[U]$, with the scalar-law row identification from the Statement."),
    ],
}
proposals = []
for name in targets:
    old = (ROOT / "items" / (name + ".md")).read_text()
    new = old
    guards = []
    for a, b in replacements[name]:
        assert new.count(a) == 1, (name, a, new.count(a))
        guards.append({"before_excerpt": a, "after_excerpt": b, "expected_matches": 1})
        new = new.replace(a, b)
    before = save("before/" + name + ".md", old)
    candidate = save("candidate/" + name + ".md", new)
    patch = save("patches/" + name + ".patch", "".join(difflib.unified_diff(old.splitlines(True), new.splitlines(True), fromfile="a/items/"+name+".md", tofile="b/items/"+name+".md")))
    assert frontmatter(old) == frontmatter(new)
    proposals.append({"id": name, "live_source": "items/"+name+".md", "before": before, "candidate": candidate, "patch": patch, "edits": guards, "metadata_unchanged": True, "statement_changed": name == targets[1], "scope_change": False})

# Discover actual logical/discharge/reference uses from every current regular item.
items = {}
for p in sorted((ROOT / "items").glob("*.md")):
    raw = p.read_bytes()
    text = raw.decode()
    d = yaml.safe_load(frontmatter(text))
    items[d["id"]] = {"path": str(p.relative_to(ROOT)), "sha256": sha(raw), "meta": d, "text": text}
alias = {a: i for i, r in items.items() for a in r["meta"].get("aliases", [])}
canon = lambda i: alias.get(i, i)
edges = {}
for i, r in items.items():
    edges[i] = {canon(v) for k in ("deps", "justified_by") for v in (r["meta"].get(k) or [])}
matrix = []
for target in targets:
    reached = {target}
    while True:
        more = {i for i, e in edges.items() if e & reached}
        if more <= reached:
            break
        reached |= more
    for consumer in sorted(reached - {target}):
        r = items[consumer]
        assert consumer == targets[1], consumer
        matrix.append({"supplier": target, "consumer": consumer, "use_kind": "logical-direct", "source": r["path"], "raw_sha256": r["sha256"], "review": "Entire current Statement, Facts and Proof read. F2 and 2.1 consume the lemma's matrix/vector residual; explicit scalar-row identification and normal product correction are drafted in this same proposal. The three displayed conservation jumps, entropy inequality, C1 trace hypotheses, Countable Choice and initial-data separation are preserved.", "disposition": "focused-repair-proposed"})
    for i, r in items.items():
        if i == target or i in reached:
            continue
        refs = {canon(m) for m in re.findall(r"\[\[([^]|]+)(?:\|[^]]*)?\]\]", r["text"])}
        if target in refs:
            matrix.append({"supplier": target, "consumer": i, "use_kind": "nonlogical-reference", "source": r["path"], "raw_sha256": r["sha256"], "disposition": "requires-review"})
    for p in sorted((ROOT / "library").rglob("*.md")):
        text = p.read_text()
        if target in text:
            matrix.append({"supplier": target, "consumer": str(p.relative_to(ROOT)), "use_kind": "page-placement", "raw_sha256": sha(p.read_bytes()), "review": "Entire frontmatter-only page read. This is an inventory placement and adds no mathematical or physical assertion using the changed notation.", "disposition": "unaffected"})
assert not any(r["disposition"] == "requires-review" for r in matrix)

judge = [json.loads(l) for l in (ROOT / "research" / (RUN+"-judge.jsonl")).read_text().splitlines() if l.strip()]
judge = [r for r in judge if r.get("id") == targets[1]]
save("observed/jump-original-judge-rows.json", json.dumps(judge, indent=2)+"\n")
save("consumer-use-matrix.json", json.dumps({"selection": "All current items logical deps/justified_by and aliases, then all current item wikilinks and library text mentions; no item consumer of physical theorem found.", "scan_item_count": len(items), "reviews": matrix}, indent=2)+"\n")
save("jump-proposal.json", json.dumps({"version": 1, "run": RUN, "author": "/root/fluid_step4_weak_balances", "mode": "unapplied-draft-only", "native_review": False, "native_adjudication": False, "recertification": False, "at": datetime.datetime.now(datetime.timezone.utc).isoformat(), "cycle": 1, "finding": "Confirmed ill-typed universal [F] dot n notation. Momentum flux is a 3x3 matrix and requires its matrix-vector normal product. The explicit displayed momentum jump was already correctly typed.", "proposals": proposals, "inputs": inputs, "consumer_review": "consumer-use-matrix.json", "reading_limits": "Read the complete current five local carriers saved in observed/ and both complete placement pages. Read current native Luna rejection and inspected actual Step-4 state/git history. Imported mathematics and external literature were not reread or modified; no new source-coverage, mathematical acceptance, stamp or gate is claimed. Prior Step-3 weak8 current-boundary-review was inspected only for historical context and is not substituted for current-carrier reading.", "remaining_owner_work": "Native Step 5 independently verifies/adopts any actual source repairs, binds current contexts, reconciles owning contracts/manifests/levels if needed, and performs ordinary certification and gates. This evidence does none of those operations."}, indent=2)+"\n")
print(json.dumps({"draft_directory": str(OUT.relative_to(ROOT)), "proposals": len(proposals), "consumer_rows": len(matrix), "scanned_items": len(items), "live_sources_changed": False}))
