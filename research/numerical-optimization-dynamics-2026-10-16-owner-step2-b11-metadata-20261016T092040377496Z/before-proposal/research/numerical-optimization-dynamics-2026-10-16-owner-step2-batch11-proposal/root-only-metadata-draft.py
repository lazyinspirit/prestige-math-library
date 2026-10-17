#!/usr/bin/env python3
"""ROOT-ONLY review draft: emit exact current-source metadata proposals to stdout.
No canonical write or apply mode. Root must inspect the output and retain native
history, published repair policy, mathematical contracts and current ownership.
Run from repository root after reviewing this draft:
  python3 research/numerical-optimization-dynamics-2026-10-16-owner-step2-batch11-proposal/root-only-metadata-draft.py > /tmp/batch11-metadata-proposal.json
This is a mirror proposal, never review, readiness or gate evidence.
"""
from pathlib import Path
import json
import re
import yaml

RUN = "numerical-optimization-dynamics-2026-10-16"
BASE = Path("research") / (RUN + "-owner-step2-batch11-proposal")
RECEIPT = json.loads((BASE / "application/approved-proposal.json").read_text())

def source(path):
    text = Path(path).read_text()
    parts = text.split("---", 2)
    return yaml.safe_load(parts[1]), parts[2]

def sections(body):
    out = {}
    for m in re.finditer(r"(?m)^## ([^\n]+)\n", body):
        following = re.search(r"(?m)^## ", body[m.end():])
        end = m.end() + following.start() if following else len(body)
        out[m.group(1)] = body[m.end():end].strip()
    return out

def steps(body):
    # These repaired items have one proof-like argument each.
    matches = list(re.finditer(r"(?m)^(\d+\.\d+) ", body))
    out = []
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(body)
        paragraph = body[match.end():end].strip()
        # Exclude remarks after an argument, retain exact multiline mathematical text.
        paragraph = paragraph.split("\n## ", 1)[0].strip()
        trailing = re.search(r"\[([^\[\]]+)\]\s*(?:∎)?\s*$", paragraph)
        if not trailing:
            raise ValueError("No trailing tags in repaired step " + match.group(1))
        out.append({"step": match.group(1), "claim": paragraph[:trailing.start()].strip(),
                    "inputs": [x.strip() for x in trailing.group(1).split(",")]})
    return out

manifest_file = Path("research") / (RUN + "-batch-11.pages.json")
contracts_file = Path("research") / (RUN + "-batch-11.proof-contracts.json")
manifest = json.loads(manifest_file.read_text())
contracts = json.loads(contracts_file.read_text())["contracts"]
# Read current homes solely to propose necessary prerequisite page additions.
homes = {}
for file in Path("library").rglob("*.md"):
    text = file.read_text()
    if not text.startswith("---"):
        continue
    fm, unused = source(file)
    if not isinstance(fm, dict) or not fm.get("page"):
        continue
    for key in ["items", "examples"]:
        for identity in fm.get(key, []) or []:
            homes.setdefault(identity, []).append({"page": fm["page"], "file": str(file),
                                                  "placement": key})

item_proposals = []
page_additions = {}
for edit in RECEIPT["edits"]:
    fm, body = source(edit["path"])
    identity = fm["id"]
    sec = sections(body)
    entry = {"id": identity, "source": edit["path"], "deps": fm.get("deps", []),
             "current_interface": {key: sec[key] for key in ["Statement", "Definition", "Example"] if key in sec}}
    current = next(((pg, item) for pg in manifest for item in pg.get("items", [])
                    if isinstance(item, dict) and item.get("id") == identity), None)
    if current:
        pg, item = current
        patch = {"deps": fm.get("deps", [])}
        if "statement" in item and "Statement" in sec:
            patch["statement"] = sec["Statement"]
        entry["manifest_mirror"] = {"file": str(manifest_file), "page": pg["id"],
                                     "replace_fields": patch,
                                     "note": "Preserve every other manifest field; root handles levels/current hashes."}
        needed = []
        for supplier in RECEIPT.get("required_root_dependency_additions", {}).get(identity, []):
            supplier_homes = homes.get(supplier, [])
            if len(supplier_homes) != 1:
                needed.append({"supplier": supplier, "hold": "absent or ambiguous home", "homes": supplier_homes})
                continue
            home = supplier_homes[0]
            if home["page"] != pg["id"] and home["page"] not in pg.get("requires", []):
                needed.append({"supplier": supplier, **home,
                               "reason": "Actual newly declared direct logical prerequisite; root verifies A/P home before adding requires."})
        if needed:
            page_additions.setdefault(pg["id"], []).extend(needed)
    if identity in contracts:
        proof_steps = steps(body)
        facts = sec.get("Facts & Assumptions", "")
        fact_matches = list(re.finditer(r"(?m)^\[([FAL]\d+)\] ", facts))
        citations = []
        for index, match in enumerate(fact_matches):
            end = fact_matches[index + 1].start() if index + 1 < len(fact_matches) else len(facts)
            fact_text = facts[match.end():end]
            uses = [st["step"] for st in proof_steps if match.group(1) in st["inputs"]]
            for supplier in dict.fromkeys(re.findall(r"\[\[([^]|]+)", fact_text)):
                supplier_fm, supplier_body = source("items/" + supplier + ".md")
                supplier_sections = sections(supplier_body)
                section = next((key for key in ["Statement", "Definition", "Example"] if key in supplier_sections), None)
                if section is None:
                    raise ValueError("No source interface for " + supplier)
                citations.append({"fact": match.group(1), "source": supplier,
                                  "source_section": section, "quote": supplier_sections[section], "uses": uses})
        entry["contract_mirror"] = {"file": str(contracts_file), "citations": citations,
            "derivations": [{"id": "step-" + st["step"], **st} for st in proof_steps],
            "note": "Replace only source mirrors after review; inspect boundaries/axioms/finite checks, do not overwrite them from this draft."}
    if identity == "thm-finite-categorical-midpoint-count-bound":
        entry["resource_and_boundary_obligations"] = ["Zero ideal endpoint returns1 on a null event; positive inputs use least index with v<=Ci.", "r=1 has zero comparisons; proof3.1 proves ceil(log2 r) array comparisons by interval halving."]
    if identity == "thm-certified-bracketed-inverse-error":
        entry["resource_and_boundary_obligations"] = ["N=0 still requires2 endpoint queries; successful budget is N+2.", "Proof1.1 proves finite modulus-depth existence and cost;1.2 keeps upper half when F(mid)<=u."]
    if identity == "thm-box-muller-finite-bit-coupling-error":
        entry["resource_and_boundary_obligations"] = ["Proof2.1 derives eta_r from actual log/root certificates.", "Proof4.1 proves exactly2b random bits and3 top-level calls; phase internal evaluations are not counted as one scalar evaluation.", "Keep fixed deterministic all-midpoint-input success assumption and all original BL/W1/TV bounds."]
    if identity == "alg-box-muller-finite-bit-transform":
        entry["resource_and_boundary_obligations"] = ["Positive interval series N>=1 and phase series J>=1; zero splitB allowed.", "Failed certification remains inconclusive; integer phase precision/exponent limits match actual supplier."]
    item_proposals.append(entry)

print(json.dumps({"run": RUN, "kind": "root-only-unapplied-metadata-mirror-draft",
    "canonical_writes": False, "native_acceptance_claimed": False,
    "items": item_proposals, "necessary_requires_candidates": page_additions,
    "root_remaining_duties": ["Inspect all emitted source quotes, derivation mirrors, bounds and boundary/axiom worksheets.",
        "Published square-root recorded repair and verification metadata remain root-only; preserve authentic pre-edit claim and prior ancestor.",
        "Reconcile current labels/hashes/contracts/manifest inventory with native root workflow; this draft grants no gate or mathematical acceptance."]}, indent=2))
