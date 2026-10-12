from pathlib import Path
import json, re, yaml, shutil

run = "physics-cm-qm-gr-79-2026-10-11"
out = Path("research", run + "-crash-recovery/batch41-focused-interface-review")
ids = json.loads((out / "changed-items.json").read_text())
sections = lambda s: dict(re.findall(r"^## ([^\n]+)\n([\s\S]*?)(?=^## |\Z)", s, re.M))
front = lambda s: yaml.safe_load(re.split(r"^---\s*$", s, flags=re.M)[1])

for batch in [39, 40, 41]:
    pages_path = Path("research", f"{run}-batch-{batch}.pages.json")
    pages = json.loads(pages_path.read_text())
    owned = [it["id"] for page in pages for it in page["items"] if it["id"] in ids]
    if not owned:
        continue
    for suffix in ["pages.json", "proof-contracts.json", "coverage.json", "notes.md", "cross-batch-dependencies.json"]:
        p = Path("research", f"{run}-batch-{batch}.{suffix}")
        backup = out / "before-repair" / p.name
        if not backup.exists():
            shutil.copy2(p, backup)
    for page in pages:
        for claim in page["items"]:
            if claim["id"] not in owned:
                continue
            text = Path("items", claim["id"] + ".md").read_text()
            fm = front(text)
            for key in ["deps", "dependency_roles", "dependency_level"]:
                claim[key] = fm[key]
            claim["statement"] = sections(text).get("Statement", sections(text).get("Example", "")).strip()
    pages_path.write_text(json.dumps(pages, indent=2) + "\n")
    contracts_path = Path("research", f"{run}-batch-{batch}.proof-contracts.json")
    doc = json.loads(contracts_path.read_text())
    for i in owned:
        if i not in doc["contracts"]:
            continue
        c = doc["contracts"][i]
        text = Path("items", i + ".md").read_text()
        ss = sections(text)
        proof = ss.get("Proof", ss.get("Verification", ""))
        steps = re.findall(r"^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |\Z)", proof, re.M)
        c["derivations"] = [{"id": "step-" + step.replace(".", "-"), "step": step, "claim": txt.strip(),
                             "inputs": list(dict.fromkeys(re.findall(r"\b[FAL]\d+\b|\b\d+\.\d+\b", txt))) or ["given"]}
                            for step, txt in steps]
        c["routine_steps"] = []
        facts = ss.get("Facts & Assumptions", proof.split("1.1")[0])
        citations = []
        for fact, txt in re.findall(r"^\[([FAL]\d+)\] ([\s\S]*?)(?=^\[[FAL]\d+\]|\Z)", facts, re.M):
            for supplier in dict.fromkeys(re.findall(r"\[\[([^]|]+)", txt)):
                body = sections(Path("items", supplier + ".md").read_text())
                heading = next(x for x in ["Statement", "Definition", "Example"] if x in body)
                citations.append({"fact": fact, "source": supplier, "source_section": heading,
                                  "quote": body[heading].strip(),
                                  "uses": [step for step, t in steps if re.search(r"\b" + fact + r"\b", t)]})
        c["citations"] = citations
        c["focused_interface_repair"] = {"reviewer": "/root/physics_quantum_consumers", "cycle": 1,
                                         "maximum_cycles": 2, "evidence": str(out / "repair.json"),
                                         "scope": "Focused confirmed defects and same-reviewer consumer continuation; no native independent acceptance."}
    contracts_path.write_text(json.dumps(doc, indent=2) + "\n")
    cross_path = Path("research", f"{run}-batch-{batch}.cross-batch-dependencies.json")
    cross = json.loads(cross_path.read_text())
    for i in owned:
        fm = front(Path("items", i + ".md").read_text())
        before_path = out / "before-repair" / (i + ".md")
        olddeps = set(front(before_path.read_text())["deps"])
        for supplier in set(fm["deps"]) - olddeps:
            if not any(row.get("consumer") == i and row.get("supplier") == supplier for row in cross):
                cross.append({"kind": "item", "consumer": i, "supplier": supplier, "status": "verified",
                              "evidence": "Exact cited supplier clause reviewed for the focused repaired argument; " + str(out / "repair.json")})
        cross = [row for row in cross if not (row.get("consumer") == i and row.get("kind") == "item"
                                             and row.get("supplier") in olddeps - set(fm["deps"]))]
    cross_path.write_text(json.dumps(cross, indent=2) + "\n")
    coverage_path = Path("research", f"{run}-batch-{batch}.coverage.json")
    coverage = json.loads(coverage_path.read_text())
    coverage["focused_interface_repair"] = {"cycle": 1, "reviewer": "/root/physics_quantum_consumers",
                                           "evidence": str(out / "repair.json"), "items": owned,
                                           "source_fetch_history_preserved": True}
    coverage_path.write_text(json.dumps(coverage, indent=2) + "\n")
    print(f"batch{batch}: {len(owned)} exact carrier claim/contract/cross/coverage mirrors")
