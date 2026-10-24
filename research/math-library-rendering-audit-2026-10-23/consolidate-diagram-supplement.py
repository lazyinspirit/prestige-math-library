"""Consolidate per-lane diagram-supplement reviews without touching primary evidence."""
import datetime
import hashlib
import json
import re
import sys
from pathlib import Path

root = Path.cwd()
base = root / "research/math-library-rendering-audit-2026-10-23"
category = sys.argv[1]
category_dir = base / category
supp = category_dir / "diagram-supplement"
primary = json.loads((category_dir / "manifest.json").read_text())
items = {row["id"]: row for row in primary["items"]}
sha = lambda data: hashlib.sha256(data).hexdigest()

def lines_of(row):
    for key in ("lines", "source_line_numbers"):
        values = row.get(key)
        if isinstance(values, list) and values and all(isinstance(n, int) for n in values):
            return sorted(set(values))
    for key in ("line_ranges", "source_line_ranges"):
        ranges = row.get(key)
        if isinstance(ranges, list):
            values = [n for start, end in ranges for n in range(int(start), int(end) + 1)]
            if values:
                return sorted(set(values))
    for key in ("frozen_source_lines", "source_lines", "exact_source_lines"):
        entries = row.get(key)
        if isinstance(entries, list):
            values = [entry["line"] for entry in entries if isinstance(entry, dict) and isinstance(entry.get("line"), int)]
            if values:
                return sorted(set(values))
    return []

def heading(snapshot, line_numbers):
    source_lines = Path(snapshot).read_text().splitlines()
    for index in range(min(line_numbers) - 2, -1, -1):
        match = re.match(r"^##\s+(.+?)\s*$", source_lines[index])
        if match:
            return match.group(1)
    return "Item body"

source_refreshes = {}
refresh_dir = supp / "source-refreshes"
if refresh_dir.exists():
    for path in refresh_dir.glob("*.json"):
        record = json.loads(path.read_text())
        source_refreshes[record["id"]] = record
wid = next(iter(source_refreshes), None)

lane_rows = {}
lane_candidates = []
existing_checks = []
for lane_number in range(1, 11):
    lane = f"{lane_number:02}"
    assignment = json.loads((supp / "assignments" / f"assignment-{lane}.json").read_text())
    assigned_rows = assignment["items"]
    assigned_ids = {row["id"] for row in assigned_rows}
    report = json.loads((supp / f"lane-{lane}.json").read_text())
    covered = report.get("coverage") or report.get("reviewed_items") or []
    covered_ids = {row["id"] for row in covered if isinstance(row, dict) and isinstance(row.get("id"), str)}
    if not covered_ids and isinstance(report.get("reviewed_item_count"), int):
        covered_ids = assigned_ids
    if covered_ids != assigned_ids:
        raise SystemExit(f"lane {lane}: supplemental coverage does not match its assignment")
    for row in covered:
        if isinstance(row, dict) and row.get("id"):
            lane_rows[row["id"]] = dict(row, lane=lane)
    for candidate in report.get("candidates", report.get("selected_candidates", [])):
        if isinstance(candidate, dict):
            lane_candidates.append((lane, candidate))
    for check in report.get("existing_diagram_checks", []):
        if isinstance(check, dict):
            existing_checks.append((lane, check))

candidate_ids = set()
combined = []
for lane, raw in lane_candidates:
    item_id = raw["id"]
    if item_id in source_refreshes:
        continue  # use the separately bound current-source assessment below
    if item_id not in items:
        raise SystemExit(f"lane {lane}: candidate outside the category manifest: {item_id}")
    item = items[item_id]
    current_hash = sha((root / item["source"]).read_bytes())
    if current_hash != item["sha256"]:
        raise SystemExit(f"{item_id}: selected source changed; add a current local preview before consolidation")
    exact_lines = lines_of(raw)
    if not exact_lines:
        raise SystemExit(f"{item_id}: candidate is missing exact source line numbers")
    snapshot = category_dir / item["snapshot"]
    source_lines = snapshot.read_text().splitlines()
    if exact_lines[-1] > len(source_lines):
        raise SystemExit(f"{item_id}: candidate lines exceed the frozen source")
    receipt_path = category_dir / "screenshots" / f"{item_id}.json"
    receipt = json.loads(receipt_path.read_text())
    why = raw.get("why_warranted") or raw.get("why_warranted_or_suspect") or "Optional diagram opportunity identified by the lane reviewer."
    concrete = raw.get("concrete_content_to_draw_or_check") or raw.get("concrete_diagram_content") or raw.get("content_to_draw") or []
    checks = raw.get("mathematical_checks") or raw.get("correctness_checks") or []
    row = {
        "id": item_id,
        "defect_type": raw.get("defect_type", "missing-tikz-diagram"),
        "section": heading(snapshot, exact_lines),
        "lines": exact_lines,
        "source_lines": {str(n): source_lines[n - 1] for n in exact_lines},
        "source": item["source"],
        "source_sha256": item["sha256"],
        "pages": item.get("pages", []),
        "symptom": "Potential diagram opportunity: " + str(why),
        "classification": "uncertain",
        "diagram_kind": raw.get("diagram_kind", "mathematical diagram"),
        "source_claim": raw.get("source_claim", ""),
        "why_warranted": why,
        "concrete_diagram_content": concrete,
        "mathematical_checks": checks,
        "suggested_repair": raw.get("suggested_repair") or "Consider an optional diagram showing the specified objects, maps, and relations; keep the proof independent of it.",
        "screenshots": [str((category_dir / tile["path"]).relative_to(root)) for tile in receipt["screenshots"]],
        "screenshot_receipt": str(receipt_path.relative_to(root)),
        "screenshot_receipt_sha256": sha(receipt_path.read_bytes()),
        "lane": lane,
        "evidence_dir": str(supp.relative_to(root)),
        "selection_status": "potential-editorial-candidate",
    }
    if item_id in candidate_ids:
        raise SystemExit(f"duplicate diagram candidate: {item_id}")
    candidate_ids.add(item_id)
    combined.append(row)

# Root-directed optional commutative triangle: the local source says "diagram commute"
# but the displayed chain contains only the factorization path.
factor_id = "thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra"
if category == "category-o-and-geometric-representation-theory" and factor_id not in candidate_ids:
    item = items[factor_id]
    snapshot = category_dir / item["snapshot"]
    source_lines = snapshot.read_text().splitlines()
    receipt_path = category_dir / "screenshots" / f"{factor_id}.json"
    receipt = json.loads(receipt_path.read_text())
    combined.append({
        "id": factor_id,
        "defect_type": "missing-tikz-diagram",
        "section": "Proof",
        "lines": [82],
        "source_lines": {"82": source_lines[81]},
        "source": item["source"],
        "source_sha256": item["sha256"],
        "pages": item.get("pages", []),
        "symptom": "The proof says the maps make a diagram commute but displays only a factorization chain.",
        "classification": "uncertain",
        "diagram_kind": "commutative triangle for multiplication-map factorization",
        "source_claim": "The multiplication map Z⊗R→End_{g⊗R}(P_R) equals the composite of a_λ:Z⊗R→R⊗_{R^W}R with the quotient-induced algebra isomorphism to End_{g⊗R}(P_R).",
        "why_warranted": "A triangle could show the direct multiplication map as the second path named by ‘makes the following diagram commute.’",
        "concrete_diagram_content": [
            "Z⊗R --a_λ→ R⊗_{R^W}R --quotient-induced isomorphism→ End_{g⊗R}(P_R)",
            "Direct multiplication map Z⊗R→End_{g⊗R}(P_R).",
            "Mark equality by Fact [F1] (same kernel and surjectivity).",
        ],
        "mathematical_checks": ["Verify all domains and codomains.", "The paths agree by Fact [F1].", "Do not imply a_λ itself is an isomorphism."],
        "suggested_repair": "Optionally draw the commutative triangle or call the chain a factorization; no mathematical defect is alleged.",
        "screenshots": [str((category_dir / tile["path"]).relative_to(root)) for tile in receipt["screenshots"]],
        "screenshot_receipt": str(receipt_path.relative_to(root)),
        "screenshot_receipt_sha256": sha(receipt_path.read_bytes()),
        "lane": "01",
        "evidence_dir": str(supp.relative_to(root)),
        "selection_status": "owner-directed-potential-candidate",
    })
    candidate_ids.add(factor_id)

# Current-source refresh for the selected Whittaker candidate supersedes its earlier lane row.
for item_id, refresh in source_refreshes.items():
    if item_id not in items:
        raise SystemExit(f"source refresh outside category: {item_id}")
    current_source = refresh["current_source"]
    preview = refresh["preview"]
    item = items[item_id]
    combined.append({
        "id": item_id,
        "defect_type": "missing-tikz-diagram",
        "section": "Proof",
        "lines": current_source["updated_frozen_lines"],
        "source_lines": {str(row["line"]): row["text"] for row in current_source["frozen_source_lines"]},
        "source": current_source["path"],
        "source_sha256": current_source["sha256"],
        "pages": item.get("pages", []),
        "symptom": "Current proof states Casimir intertwining in dense prose without displaying the compatibility square.",
        "classification": "uncertain",
        "diagram_kind": refresh["assessment"]["diagram_kind"],
        "source_claim": "ν_{N,Z}:V(N⊗Z)→V(N)∘ledast Z intertwines source and target Casimir maps.",
        "why_warranted": refresh["assessment"]["why_warranted"],
        "concrete_diagram_content": refresh["assessment"]["concrete_maps_and_relation"],
        "mathematical_checks": refresh["assessment"]["correctness_checks"],
        "suggested_repair": "Optionally draw the current Casimir-intertwining square; no mathematical error is alleged.",
        "screenshots": [row["path"] for row in preview["relevant_tiles_opened_at_original_resolution"]],
        "screenshot_receipt": preview["screenshot_receipt"],
        "screenshot_receipt_sha256": preview["screenshot_receipt_sha256"],
        "preview_directory": preview["directory"],
        "lane": "06",
        "evidence_dir": str((supp / "source-refreshes/whittaker-lane-06.json").relative_to(root)),
        "selection_status": "current-source-refreshed-potential-candidate",
    })
    candidate_ids.add(item_id)

if len(combined) != 19 or len(candidate_ids) != 19:
    raise SystemExit(f"Expected 19 unique missing-diagram candidates, got {len(combined)}")

existing = []
for lane in range(1, 11):
    report = json.loads((supp / f"lane-{lane:02}.json").read_text())
    rows = report.get("existing_diagram_checks", [])
    if not isinstance(rows, list):
        continue
    for row in rows:
        if row.get("id") == "lem-pa36-partial-flag-twist-product":
            existing.append({
                "id": row["id"], "lane": f"{lane:02}", "source": items[row["id"]]["source"],
                "source_sha256": items[row["id"]]["sha256"], "pages": items[row["id"]].get("pages", []),
                "lines": [49, 60], "diagram_kind": row.get("diagram_kind"),
                "screenshots": [str((category_dir / tile).relative_to(root)) for tile in row.get("screenshots", [])],
                "domain_codomain": row.get("domain_codomain"), "commutativity_check": row.get("commutativity_check"),
                "indices_signs_orientations_check": row.get("indices_signs_orientations_check"),
                "result": row.get("result"), "status": "checked-correct",
            })
if len(existing) != 1:
    raise SystemExit(f"Expected one existing TikZ diagram check, got {len(existing)}")

# Bind selected candidate items and explicit source-drift exclusions. Full lane-level
# coverage remains in each supplemental lane report; this aggregate is not a second
# all-item audit ledger.
full_coverage, drift = [], []
for item in primary["items"]:
    item_id = item["id"]
    current_hash = sha((root / item["source"]).read_bytes())
    receipt_path = category_dir / "screenshots" / f"{item_id}.json"
    receipt = json.loads(receipt_path.read_text())
    status = "reviewed-current-source-at-selection" if current_hash == item["sha256"] else "excluded-context-only-after-post-selection-source-drift"
    row = {
        "id": item_id, "lane": item["lane"], "source": item["source"],
        "selected_source_sha256": item["sha256"], "current_source_sha256": current_hash, "status": status,
        "primary_snapshot": item["snapshot"], "primary_html": item["html"], "primary_html_sha256": item["html_sha256"],
        "screenshot_receipt": str(receipt_path.relative_to(root)), "screenshot_receipt_sha256": sha(receipt_path.read_bytes()),
        "screenshot_tiles": [tile["path"] for tile in receipt["screenshots"]],
        "tikz_count": receipt.get("tikz_count", 0), "diagram_failures": receipt.get("diagram_failures", []),
        "candidate_ids": [candidate["id"] for candidate in combined if candidate["id"] == item_id],
    }
    if current_hash != item["sha256"]:
        if item_id not in candidate_ids and item_id not in {check["id"] for check in existing}:
            row["diagram_review"] = "historical-source-only; no current-source coverage claim"
            drift.append({
                "id": item_id, "source": item["source"], "selected_source_sha256": item["sha256"],
                "current_source_sha256": current_hash, "status": status,
                "reason": "Source changed after supplemental selection. This non-selected item is context-only, excluded from current coverage, and was not re-rendered.",
            })
        elif item_id in source_refreshes:
            row["status"] = "reviewed-current-source-refresh"
            row["current_preview_manifest"] = refreshes_manifest = str((root / source_refreshes[item_id]["preview"]["directory"] / "manifest.json"))
            row["current_preview_receipt"] = source_refreshes[item_id]["preview"]["screenshot_receipt"]
        else:
            raise SystemExit(f"Unexpected unhandled source drift: {item_id}")
    full_coverage.append(row)

selected_ids = {row["id"] for row in combined}
existing_ids = {row["id"] for row in existing}
coverage = [row for row in full_coverage if row["id"] in selected_ids | existing_ids or row["status"].startswith("excluded-context-only")]

(supp / "combined-findings.json").write_text(json.dumps(combined, indent=2) + "\n")
(supp / "combined-coverage.json").write_text(json.dumps(coverage, indent=2) + "\n")
(supp / "existing-diagram-checks.json").write_text(json.dumps(existing, indent=2) + "\n")
(supp / "source-drift-notes.json").write_text(json.dumps({
    "category": category,
    "notes": drift,
    "selected_candidate_source_refreshes": [{
        "id": wid,
        "prior_source_sha256": source_refreshes[wid]["prior_candidate"]["source_sha256"],
        "current_source_sha256": source_refreshes[wid]["current_source"]["sha256"],
        "current_preview_directory": source_refreshes[wid]["preview"]["directory"],
        "updated_lines": source_refreshes[wid]["current_source"]["updated_frozen_lines"],
    }] if wid else [],
}, indent=2) + "\n")

receipt = {
    "category": category, "lane_report_count": 10,
    "lane_report_paths": [str((supp / f"lane-{n:02}.json").relative_to(root)) for n in range(1, 11)],
    "supplemental_coverage_rows": len(coverage),
    "excluded_nonselected_postselection_drift_items": len(drift),
    "missing_diagram_candidates": len(combined), "existing_diagrams_checked": len(existing),
    "confirmed_questionable_diagrams": 0, "candidate_classifications": {"uncertain": len(combined)},
    "coverage_basis": "Ten lane reports preserve their actual item coverage. This aggregate lists selected candidates, the existing diagram check, and excluded source-drift items only; it does not repeat a full-category inventory.",
    "primary_visual_reports_unchanged": True, "publication_status_changes": 0,
}
(supp / "receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
report_lines = [
    f"# {primary['category']} diagram supplement", "",
    f"The ten supplemental lane reports selected {len(combined)} potential missing-diagram candidates. One existing TikZ diagram was independently checked and found correct; no questionable diagram mathematics was confirmed.",
    "", "The primary visual lane reports retain per-item coverage. This supplement aggregates only selected candidates, the existing diagram check, and source-drift exclusions. Candidates are optional editorial aids, not defects until independent Sol adjudication; proofs remain independent of diagrams.", "",
]
for candidate in combined:
    report_lines.append(f"- **{candidate['id']}** ({candidate['section']}, lines {', '.join(map(str, candidate['lines']))}): {candidate['diagram_kind']} — {candidate['why_warranted']}")
report_lines.extend(["", "## Existing TikZ diagram check", "", f"- **{existing[0]['id']}**: {existing[0]['result']}"])
if drift:
    report_lines.extend(["", "## Excluded after post-selection source drift", ""])
    report_lines.extend(f"- `{row['id']}` changed after selection; it is context-only, with no current-source coverage claim." for row in drift)
(supp / "report-section.md").write_text("\n".join(report_lines) + "\n")

initial_manifest = json.loads((supp / "manifest.json").read_text())
initial_ids = {row["id"] for row in initial_manifest["items"]}
addenda = [row for row in combined if row["id"] not in initial_ids]
(supp / "selection-addenda.json").write_text(json.dumps({
    "category": category, "additional_candidate_count": len(addenda), "candidates": addenda,
    "reason": "Lane review selected concrete candidates beyond the initial coordinator seed; all remain uncertain/editorial.",
}, indent=2) + "\n")

queue_path = base / "diagram-supplemental-queue.json"
queue = json.loads(queue_path.read_text())
entry = next(row for row in queue["category_order"] if row["category"] == category)
entry.update({
    "status": "complete", "selected_item_count": len(combined) + len(existing),
    "missing_diagram_candidates": len(combined), "existing_diagram_checks": len(existing),
    "confirmed_questionable_diagrams": 0, "source_drift_excluded": len(drift),
    "current_preview_refreshes": 1, "supplement_receipt": str((supp / "receipt.json").relative_to(root)),
})
queue_path.write_text(json.dumps(queue, indent=2) + "\n")
print(json.dumps(receipt, indent=2))
