#!/usr/bin/env python3
"""Scoped research structural/source receipt; this is not an independent proof audit."""
import argparse
import collections
import csv
import datetime
import hashlib
import json
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[3]
errors = []
checks = []

def require(condition, message):
    if not condition:
        errors.append(message)

def read_json(path):
    return json.loads(path.read_text())

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def frontmatter(path):
    text = path.read_text()
    require(text.startswith("---\n"), "Missing frontmatter: " + str(path))
    return text.split("---", 2)[1] if text.startswith("---\n") else ""

def field(text, key):
    match = re.search(r"^" + re.escape(key) + r":\s*(.*?)\s*$", text, re.M)
    return match.group(1).strip("'\"") if match else None

def acyclic(nodes, deps, label):
    active, done = set(), set()
    def visit(node):
        if node in active:
            errors.append(label + " cycle at " + node)
            return
        if node in done:
            return
        active.add(node)
        for dep in deps(node):
            if dep not in nodes:
                errors.append(label + " missing dependency " + node + " -> " + dep)
            else:
                visit(dep)
        active.remove(node)
        done.add(node)
    for node in nodes:
        visit(node)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="write owned audit-expansion-checks.json")
    args = parser.parse_args()
    ledger = read_json(HERE / "closure-ledger.json")
    inventory = read_json(HERE / "scaffold/inventory.json")
    coverage = read_json(HERE / "scaffold/baseline-claim-coverage.json")
    suppliers = read_json(HERE / "scaffold/authorized-math-scaffold-suppliers.json")["suppliers"]
    prose = (HERE / "scaffold/mathematical-prerequisites.md").read_text()
    headings = list(re.finditer(r"^#{2,3} (M\d+)\s*[—–-]", prose, re.M))
    positions = {x.group(1): x.start() for x in headings}
    modules = {x["id"]: x for x in ledger["all_local_modules"]}
    expected = {"M" + str(n) for n in range(1, 52)}
    require(set(positions) == expected and len(headings) == 51, "M1–M51 unique proof headings")
    require(set(modules) == expected and len(ledger["all_local_modules"]) == 51, "M1–M51 unique ledger entries")
    acyclic(modules, lambda key: modules[key]["local_math_deps"], "Local module")
    for key, module in modules.items():
        require(module["domain"] == "mathematics", "Module domain: " + key)
        require((HERE / module["proof_file"]).is_file(), "Module proof file: " + key)
        deps = module["local_math_deps"]
        if all(dep in modules for dep in deps):
            level = 1 + max((modules[dep]["dependency_level"] for dep in deps), default=-1)
            require(module["dependency_level"] == level, "Module dependency level: " + key)
        for dep in deps:
            require(positions.get(dep, float("inf")) < positions.get(key, -1), "Proof supplier must precede consumer: " + dep + " -> " + key)
    checks.append("Local mathematical module DAG, pure domains, exact heading coverage and supplier-first proof order")

    pairs = inventory["mathematics_pairs"]
    pages = {x["pair"]: x for x in pairs}
    require(len(pages) == len(pairs) == 8, "Eight unique mathematical pairs")
    items, homes, ranks = {}, {}, {}
    for page in pairs:
        home = page["pair"]
        for req in page["requires"]:
            require(req in pages and pages[req]["order"] < page["order"], "Page prerequisite order: " + req + " -> " + home)
        for kind in ("A", "B"):
            rows = page[kind.lower() + "_items"]
            require(len(rows) == page[kind.lower() + "_count"] == len(page[kind]), "Inventory count: " + home + kind)
            require(len(rows) <= 100, "100 item cap: " + home + kind)
            require([x["title"] for x in rows] == page[kind], "Title/inventory correspondence: " + home + kind)
            for rank, item in enumerate(rows):
                ident = item["id"]
                require(ident not in items, "Duplicate reserved item: " + ident)
                require(item["home"] == (home if kind == "A" else home + "-examples"), "Canonical reserved home: " + ident)
                require(item["page_kind"] == kind and item["domain"] == "mathematics", "Item page/domain: " + ident)
                items[ident], homes[ident], ranks[ident] = item, home, rank
                if kind == "A":
                    require(item["proof_module"] in modules, "Item proof module: " + ident)
                    require((HERE / item["proof_file"]).is_file(), "Item proof file: " + ident)
    def ancestors(home):
        found = set()
        def visit(p):
            for req in pages[p]["requires"]:
                if req not in found and req in pages:
                    found.add(req)
                    visit(req)
        visit(home)
        return found
    def item_deps(key):
        return items[key].get("claim_deps", items[key].get("deps", []))
    acyclic(items, item_deps, "Reserved claim")
    for key, item in items.items():
        for dep in item_deps(key):
            require(dep in items and items.get(dep, {}).get("page_kind") == "A", "A-only claim supplier: " + key + " -> " + dep)
            if dep not in homes:
                continue
            if homes[dep] == homes[key]:
                require(item["page_kind"] == "B" or ranks[dep] < ranks[key], "Within-A-page supplier order: " + dep + " -> " + key)
            else:
                require(pages[homes[dep]]["order"] < pages[homes[key]]["order"], "Cross-page supplier order: " + dep + " -> " + key)
                require(homes[dep] in ancestors(homes[key]), "Undeclared page prerequisite: " + dep + " -> " + key)
    covered_modules = {x["proof_module"] for x in items.values() if x["page_kind"] == "A"}
    require(covered_modules == expected, "All local modules require reserved A homes")
    physical = inventory["physical_pairs"]
    contracts = coverage["contracts"]
    require(len(physical) == len(contracts) == 22, "Original22 physical pair/claim coverage")
    contract_map = {x["id"]: x for x in contracts}
    require(len(contract_map) == 22, "Unique baseline contract IDs")
    for n, (page, contract) in enumerate(zip(physical, contracts), 1):
        require(page["pair"] == contract["pair"], "Physical pair coverage correspondence")
        require(int(page["order"]) == n, "Physical pair order")
        require(page["a_budget"] <= 100 and page["b_budget"] <= 100, "Physical page budget cap")
        require(all(dep in modules for dep in contract["proof_modules"]), "Baseline mathematical references: " + contract["id"])
        for dep in contract["requires_physics"]:
            require(dep in contract_map and int(dep.rsplit("A", 1)[1]) < n, "Baseline physical supplier order: " + contract["id"])
    require(ledger["baseline_mathematical_closure"] is True and ledger["unresolved_required_baseline_mathematics"] == [], "Ledger baseline closure state")
    require(not ledger["production_ready"] and not ledger["independently_accepted"], "Research/production acceptance distinction")
    checks.append("Eight mathematical page homes, claim-level DAG/order, declared prerequisites and caps; original22 contract coverage")

    external_statuses = collections.Counter()
    for source in suppliers:
        path = ROOT / source["path"]
        require(path.is_file(), "External source exists: " + source["id"])
        external_statuses[source["source_status"]] += 1
        if not path.is_file():
            continue
        if "sha256" in source:
            require(sha(path) == source["sha256"], "External source SHA: " + source["id"])
        if source["path"].startswith("items/"):
            require(field(frontmatter(path), "status") == source["source_status"], "External canonical status: " + source["id"])
        if "argument_path" in source:
            require((ROOT / source["argument_path"].split("#", 1)[0]).is_file(), "Root helper proof exists: " + source["id"])
            root_source = {x["id"]: x for x in read_json(path)["suppliers"]}.get(source["id"])
            require(root_source is not None, "Root helper stable ID: " + source["id"])
            if root_source:
                require(source["source_status"] == root_source["status"], "Root helper actual status: " + source["id"])
                require(source["exact_interface"] == root_source["statement"], "Root helper exact interface: " + source["id"])
        if "planned" in source["source_status"]:
            require("published" not in source.get("proof_status", "").lower() or "not" in source.get("proof_status", "").lower(), "Planning supplier promoted: " + source["id"])
            require(source["id"] in path.read_text(), "Planning supplier exact source ID: " + source["id"])
    rows = list(csv.DictReader((HERE / "scaffold/published-supplier-register.tsv").open(), delimiter="\t"))
    rowmap = {x["id"]: x for x in rows}
    require(len(rows) == len(rowmap), "Unique published registry IDs")
    pins = {x["path"]: x["sha256"] for x in read_json(ROOT / "physics/research/math-imports.json")["files"]}
    pin_states = collections.Counter()
    review_states = collections.Counter()
    for row in rows:
        path = ROOT / row["canonical_path"]
        require(path.is_file(), "Registry path exists: " + row["id"])
        require(row["status"] == "published", "Registry published status: " + row["id"])
        if path.is_file():
            require(field(frontmatter(path), "status") == row["status"], "Registry actual canonical status: " + row["id"])
        pin_states[row["snapshot_pin_state"]] += 1
        review_states[row["direct_review"]] += 1
        if row["snapshot_pin_state"] == "root-and-snapshot-match-pin":
            snapshot = ROOT / "physics" / row["canonical_path"]
            pin = pins.get(row["canonical_path"])
            require(snapshot.is_file() and pin is not None, "Runtime snapshot/pin exists: " + row["id"])
            if snapshot.is_file() and pin is not None:
                require(sha(path) == sha(snapshot) == pin, "Root/snapshot/pin equality: " + row["id"])
        else:
            require(row["snapshot_pin_state"] == "authorized-original-interface-not-matching-runtime-pin", "Known owner-authorized pin state: " + row["id"])
        for dep in filter(None, row["mathematical_dependencies"].split(",")):
            require(dep in rowmap, "Published transitive registry coverage: " + row["id"] + " -> " + dep)
    checks.append("Exact external paths/hashes/statuses/helper interfaces, planned source locators, published transitive register and actual runtime pin states")

    bach = read_json(HERE / "bach-retrieval.json")
    pdf = HERE / "bach-electron-double-slit.pdf"
    require(pdf.read_bytes().startswith(b"%PDF"), "Actual Bach PDF")
    require(sha(pdf) == bach["sha256"] and pdf.stat().st_size == bach["bytes"] and bach["pdf_pages"] == 8, "Bach retrieval hash/size/page metadata")
    kato = read_json(HERE / "kato-evolution-retrieval.json")
    require(kato["status"] == "candidate-original-unread; bounded recovery exhausted", "Kato actual reading status")
    require(not (HERE / "kato-evolution-1953.pdf").exists(), "No mislabeled failed Kato PDF")
    checks.append("Primary report retrieval integrity and failed-source status preserved")

    hashes = {}
    for path in sorted(HERE.rglob("*")):
        if path.is_file() and path.suffix in (".md", ".json", ".tsv", ".py") and path.name != "audit-expansion-checks.json":
            hashes[str(path.relative_to(HERE))] = sha(path)
    receipt = {
        "version": 2,
        "checked_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "command": "python3 " + str((HERE / "audit-expansion-check.py").relative_to(ROOT)) + " --write",
        "scope": "Research structural and supplier-integrity checks only; no independent mathematical/empirical acceptance, engine gate or production readiness",
        "passed": not errors,
        "checks": checks,
        "errors": errors,
        "counts": {"local_modules": len(modules), "new_modules_M9_M51": 43, "baseline_physical_contracts": len(contracts), "mathematical_pairs": len(pairs), "reserved_A_claims": sum(len(x["a_items"]) for x in pairs), "reserved_B_examples": sum(len(x["b_items"]) for x in pairs), "published_registry_rows": len(rows)},
        "external_source_statuses": dict(external_statuses),
        "runtime_pin_states": dict(pin_states),
        "published_review_states": dict(review_states),
        "scoped_content_sha256": hashes
    }
    if args.write:
        (HERE / "audit-expansion-checks.json").write_text(json.dumps(receipt, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps({"passed": receipt["passed"], "counts": receipt["counts"], "errors": errors, "runtime_pin_states": dict(pin_states)}, indent=2))
    return 0 if not errors else 1

if __name__ == "__main__":
    sys.exit(main())
