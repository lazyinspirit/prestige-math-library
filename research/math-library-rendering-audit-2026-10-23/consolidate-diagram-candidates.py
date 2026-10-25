"""Normalize integrated diagram candidates from a completed primary category.

Usage: python3 consolidate-diagram-candidates.py CATEGORY EVIDENCE_DIR
This only writes research evidence under EVIDENCE_DIR/diagram-supplement.
"""
import json, pathlib, re, sys

root = pathlib.Path.cwd()
category, rel = sys.argv[1:3]
out = root / rel
supp = out / "diagram-supplement"
supp.mkdir(exist_ok=True)
manifest = json.loads((out / "manifest.json").read_text())
items = {x["id"]: x for x in manifest["items"]}
by_id = {}


def nums(value, item_id):
    if isinstance(value, int):
        return [value]
    if isinstance(value, list):
        return [x for x in value if isinstance(x, int)]
    if isinstance(value, dict):
        if value and all(str(key).isdigit() for key in value):
            return [int(key) for key in value]
        if isinstance(value.get("line"), int):
            return [value["line"]]
        source = items[item_id]["source"]
        return nums(value.get(source, []), item_id)
    if isinstance(value, str):
        result = []
        for part in value.split(","):
            part = part.strip()
            if re.fullmatch(r"\d+\s*-\s*\d+", part):
                a, b = map(int, re.split(r"\s*-\s*", part))
                result.extend(range(a, b + 1))
            else:
                result.extend(map(int, re.findall(r"\d+", part)))
        return result
    return []


def strings(value):
    if isinstance(value, list):
        return "\n".join(map(str, value))
    return str(value or "")


def evidence_paths(row):
    for key in ("screenshots", "screenshot_tiles", "tiles", "screenshot", "screenshot_evidence", "local_image_evidence", "local_screenshot_evidence", "evidence"):
        value = row.get(key)
        if not value:
            continue
        values = value if isinstance(value, list) else [value]
        paths = []
        for entry in values:
            if isinstance(entry, str) and entry.lower().endswith(".png"):
                paths.append(entry)
            elif isinstance(entry, dict) and (entry.get("path") or entry.get("file")):
                paths.append(entry.get("path") or entry.get("file"))
        if paths:
            return paths
    location = row.get("location")
    if isinstance(location, dict) and isinstance(location.get("rendered_tile"), str):
        return [location["rendered_tile"]]
    return []


def add_candidate(lane, row):
    item_id = row.get("item_id") or row.get("item") or row.get("id")
    if item_id not in items:
        return
    item = items[item_id]
    snapshot = out / item["snapshot"]
    source = snapshot.read_text().splitlines()
    line_spec = row.get("lines") or row.get("source_lines") or row.get("exact_source_lines") or row.get("claim_lines") or row.get("source_line") or row.get("line") or (row.get("claim_source") or {}).get("lines") or row.get("source_locator")
    if not line_spec and isinstance(row.get("evidence"), str):
        match = re.search(r"\.md:(.+)$", row["evidence"])
        if match:
            line_spec = match.group(1)
    line_numbers = sorted(set(nums(line_spec, item_id)))
    line_map = {str(n): source[n - 1] for n in line_numbers if 0 < n <= len(source)}
    requested = {pathlib.Path(p).name for p in evidence_paths(row)}
    receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
    tiles = [t for t in receipt["screenshots"] if not requested or pathlib.Path(t["path"]).name in requested]
    if not tiles:
        tiles = receipt["screenshots"]
    claim = next((row[k] for k in ("claim", "exact_claim", "exact_source_claim", "exact_claims", "source_claim", "source_claims", "source_content") if row.get(k)), "")
    reason = next((row[k] for k in ("reason", "rationale", "why_warranted", "why", "warrant", "assessment", "note") if row.get(k)), "A concrete construction appears in the source; decide independently whether a diagram materially clarifies it.")
    content = next((row[k] for k in ("diagram_data", "diagram_content", "specific_content", "specific_content_to_draw", "content_to_draw_or_check", "content_to_draw", "diagram_to_draw_or_check", "suggested_content", "specific_content_to_draw_or_check", "maps_and_relations", "labels_maps_relations", "concrete_content", "note", "content", "draw_or_check", "candidate", "assessment") if row.get(k)), "")
    kind = row.get("diagram_kind") or row.get("kind") or "mathematical schematic"
    candidate = {
        "id": item_id,
        "section": row.get("section") or "Item body",
        "lines": line_numbers,
        "symptom": strings(reason),
        "classification": "uncertain",
        "defect_type": "missing-tikz-diagram",
        "diagram_kind": kind,
        "exact_source_claim": strings(claim),
        "selection_reason": strings(reason),
        "concrete_diagram_content": strings(content),
        "mathematical_check": strings(row.get("math_check") or row.get("checks") or row.get("specific_content") or row.get("content_to_draw_or_check") or content),
        "screenshots": [t["path"] for t in tiles],
        "screenshot_sha256": {t["path"]: t["sha256"] for t in tiles},
        "suggested_repair": "Independent adjudication should determine whether a diagram is warranted and verify all states, transitions, edge directions, labels, and relation conventions against the frozen source.",
        "pages": item["pages"],
        "source_lines": line_map,
        "source_snapshot": item["snapshot"],
        "source_sha256": item["sha256"],
        # Screenshots in `screenshots` are resolved from the category evidence
        # root, not from the supplemental ledger directory.
        "evidence_dir": str(out.relative_to(root)),
        "supplement_dir": str(supp.relative_to(root)),
        "reviewer_lanes": [lane],
        "candidate_certainty": row.get("certainty") or row.get("classification") or row.get("status") or "uncertain/editorial candidate",
        "additional_candidate_observations": [],
    }
    if item_id in by_id:
        existing = by_id[item_id]
        existing["reviewer_lanes"].append(lane)
        existing["additional_candidate_observations"].append({"reason": candidate["selection_reason"], "content": candidate["concrete_diagram_content"], "check": candidate["mathematical_check"]})
        existing["screenshots"] = list(dict.fromkeys(existing["screenshots"] + candidate["screenshots"]))
        existing["screenshot_sha256"].update(candidate["screenshot_sha256"])
    else:
        by_id[item_id] = candidate


for n in range(1, 11):
    lane = f"{n:02}"
    data = json.loads((out / f"lane-{lane}.json").read_text())
    for key in ("diagram_candidates", "editorial_candidates", "uncertain_diagram_candidates", "editorial_diagram_assessment", "candidate_missing_diagrams", "missing_diagram_candidates", "missing_diagrams", "candidates", "source_supported_diagram_candidates"):
        if isinstance(data.get(key), list):
            for candidate in data[key]:
                if key == "editorial_candidates" and any(token in str(candidate.get("kind", "")).lower() for token in ("title", "typography", "raw-ascii")):
                    continue
                add_candidate(lane, candidate)
    for key in ("diagram_review", "diagrams"):
        value = data.get(key, {})
        if isinstance(value, dict):
            for subkey in ("uncertain_or_editorial_candidates", "missing_diagram_candidates", "source_supported_missing_diagram_candidates", "candidate_diagrams", "candidates"):
                if isinstance(value.get(subkey), list):
                    for candidate in value[subkey]:
                        add_candidate(lane, candidate)
    # Some worker schemas put editorial missing-diagram candidates in the
    # general findings list. Route only explicitly tagged candidates here.
    findings = data.get("findings", [])
    if isinstance(findings, list):
        for candidate in findings:
            if not isinstance(candidate, dict):
                continue
            classification = str(candidate.get("classification", "")).lower()
            kind = str(candidate.get("kind", "")).lower()
            candidate_type = str(candidate.get("type", "")).lower()
            severity = str(candidate.get("severity", "")).lower()
            result = str(candidate.get("result", "")).lower()
            check = str(candidate.get("check", "")).lower()
            if classification in ("editorial_candidate", "editorial-candidate", "optional-editorial-candidate") or "editorial" in severity or "editorial-candidate" in kind or "candidate-missing-diagram" in kind or "missing-diagram-candidate" in kind or ("candidate" in candidate_type and "diagram" in candidate_type) or "missing_diagram_candidate" in candidate_type or ("uncertain-editorial" in result and "candidate" in check):
                add_candidate(lane, candidate)
    elif isinstance(findings, dict):
        for key in ("candidate_missing_diagrams", "editorial_candidates", "diagram_candidates", "source_supported_diagram_candidates"):
            if isinstance(findings.get(key), list):
                for candidate in findings[key]:
                    add_candidate(lane, candidate)
    item_rows = data.get("coverage", [])
    if not isinstance(item_rows, list) or not item_rows:
        item_rows = data.get("item_coverage", [])
    if not isinstance(item_rows, list) or not item_rows:
        item_rows = data.get("items", [])
    if isinstance(item_rows, list):
        for item_row in item_rows:
            if not isinstance(item_row, dict) or not isinstance(item_row.get("potential_diagram"), dict):
                continue
            candidate = dict(item_row["potential_diagram"])
            candidate["id"] = item_row.get("id")
            candidate.setdefault("classification", "uncertain/editorial candidate")
            tiles = evidence_paths(item_row)
            if tiles:
                candidate["screenshots"] = tiles
            add_candidate(lane, candidate)

rows = sorted(by_id.values(), key=lambda x: x["id"])
(supp / "combined-findings.json").write_text(json.dumps(rows, indent=2, ensure_ascii=False) + "\n")
coverage = [{k: row[k] for k in ("id", "reviewer_lanes", "source_snapshot", "source_sha256", "lines", "screenshots", "screenshot_sha256", "selection_reason")} for row in rows]
(supp / "combined-coverage.json").write_text(json.dumps(coverage, indent=2, ensure_ascii=False) + "\n")

positive = []
positive_seen = set()
for n in range(1, 11):
    lane = f"{n:02}"
    data = json.loads((out / f"lane-{lane}.json").read_text())
    entries = []
    for key in ("existing_diagram_checks", "diagram_checks", "existing_diagrams_reviewed"):
        value = data.get(key)
        if isinstance(value, list):
            entries.extend(value)
        elif isinstance(value, dict):
            entries.extend(value.get(subkey, []) for subkey in ())
            for subkey in ("displayed_diagram_checks", "checks"):
                if isinstance(value.get(subkey), list):
                    entries.extend(value[subkey])
    for key in ("diagram_review", "existing_diagram_review"):
        value = data.get(key, {})
        if isinstance(value, dict):
            for subkey in ("displayed_diagram_checks", "checked_existing_diagrams"):
                if isinstance(value.get(subkey), list):
                    entries.extend(value[subkey])
    for row in entries:
        item_id = row.get("id") or row.get("item")
        if item_id not in items or row.get("status") in ("none-captured", "none", "not applicable"):
            continue
        evidence = evidence_paths(row)
        requested = {pathlib.Path(p).name for p in evidence}
        receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
        tiles = [t for t in receipt["screenshots"] if not requested or pathlib.Path(t["path"]).name in requested]
        positive.append({"id": item_id, "reviewer_lane": lane, "classification": row.get("classification") or row.get("status") or "checked; no error reported", "diagram_kind": row.get("kind"), "mathematical_review": row.get("detail") or row.get("check") or row.get("review") or row.get("visual_note"), "screenshots": [t["path"] for t in tiles], "screenshot_sha256": {t["path"]: t["sha256"] for t in tiles}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
        positive_seen.add((lane, item_id))
    finding_groups = data.get("findings", {})
    if isinstance(finding_groups, dict) and isinstance(finding_groups.get("existing_diagrams"), list):
        for row in finding_groups["existing_diagrams"]:
            item_id = row.get("id") or row.get("item")
            if item_id not in items or (lane, item_id) in positive_seen:
                continue
            requested = {pathlib.Path(p).name for p in evidence_paths(row)}
            receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
            tiles = [t for t in receipt["screenshots"] if not requested or pathlib.Path(t["path"]).name in requested]
            positive.append({"id": item_id, "reviewer_lane": lane, "classification": "checked-consistent", "diagram_kind": row.get("kind", "existing diagram"), "mathematical_review": row.get("assessment") or row.get("detail") or row.get("check", ""), "screenshots": [t["path"] for t in tiles], "screenshot_sha256": {t["path"]: t["sha256"] for t in tiles}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
            positive_seen.add((lane, item_id))
    diagram_review = data.get("diagram_review", {})
    # Some lane schemas record positive existing-diagram checks as a list
    # directly under diagram_review instead of nesting them under a key.
    if isinstance(diagram_review, list):
        for row in diagram_review:
            item_id = row.get("id") or row.get("item_id") or row.get("item")
            if item_id not in items or (lane, item_id) in positive_seen:
                continue
            requested = {pathlib.Path(p).name for p in evidence_paths(row)}
            receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
            tiles = [t for t in receipt["screenshots"] if not requested or pathlib.Path(t["path"]).name in requested]
            positive.append({"id": item_id, "reviewer_lane": lane, "classification": row.get("classification") or row.get("result") or "checked; no error reported", "diagram_kind": row.get("kind"), "mathematical_review": row.get("detail") or row.get("check") or row.get("review") or row.get("maps_or_relations") or row.get("visual_note", ""), "screenshots": [t["path"] for t in tiles], "screenshot_sha256": {t["path"]: t["sha256"] for t in tiles}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
            positive_seen.add((lane, item_id))
    if isinstance(diagram_review, dict) and isinstance(diagram_review.get("existing_tikz_items"), list):
        checks = diagram_review.get("existing_diagram_checks", [])
        review = " ".join(str(x) for x in checks) if isinstance(checks, list) else str(checks)
        for item_id in diagram_review["existing_tikz_items"]:
            if item_id not in items or (lane, item_id) in positive_seen:
                continue
            receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
            positive.append({"id": item_id, "reviewer_lane": lane, "classification": "existing diagram visually reviewed; no defect reported", "diagram_kind": "existing TikZ diagram", "mathematical_review": review or "The lane report states this existing diagram was reviewed and no defect was recorded; no item-specific map details were serialized.", "screenshots": [t["path"] for t in receipt["screenshots"]], "screenshot_sha256": {t["path"]: t["sha256"] for t in receipt["screenshots"]}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
            positive_seen.add((lane, item_id))
    # Some reviewers bind a concise successful diagram check directly to the
    # per-item coverage row; keep that exact local evidence as a positive check.
    item_rows = data.get("coverage", [])
    if not isinstance(item_rows, list) or not item_rows:
        item_rows = data.get("item_coverage", [])
    if not isinstance(item_rows, list) or not item_rows:
        item_rows = data.get("items", [])
    if isinstance(item_rows, list):
        for item_row in item_rows:
            if not isinstance(item_row, dict) or not isinstance(item_row.get("diagram_review"), str):
                continue
            review = item_row["diagram_review"]
            lowered = review.lower()
            if "diagram" not in lowered or any(phrase in lowered for phrase in ("no diagram", "no tikz", "no existing", "none present", "no high-likelihood", "no source-supported", "no missing-diagram", "no missing diagram", "optional illustrations were not flagged", "not flagged")):
                continue
            item_id = item_row.get("id")
            if item_id not in items or (lane, item_id) in positive_seen:
                continue
            receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
            positive.append({"id": item_id, "reviewer_lane": lane, "classification": "checked-consistent", "diagram_kind": "source-described or displayed diagram", "mathematical_review": review, "screenshots": [t["path"] for t in receipt["screenshots"]], "screenshot_sha256": {t["path"]: t["sha256"] for t in receipt["screenshots"]}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
            positive_seen.add((lane, item_id))
    # A summary field may explicitly identify an existing diagram check and its
    # source item. Bind it to that item's actual capture receipt.
    summary = data.get("diagram_map_checks")
    if isinstance(summary, dict):
        review = summary.get("existing_diagrams")
        if isinstance(review, str) and any(token in review.lower() for token in ("checked", "matches", "agrees", "consistent")):
            for item_id in items:
                if item_id not in review or (lane, item_id) in positive_seen:
                    continue
                receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
                positive.append({"id": item_id, "reviewer_lane": lane, "classification": "checked-consistent", "diagram_kind": "existing diagram", "mathematical_review": review, "screenshots": [t["path"] for t in receipt["screenshots"]], "screenshot_sha256": {t["path"]: t["sha256"] for t in receipt["screenshots"]}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
                positive_seen.add((lane, item_id))
# Coordinator-normalized checks preserve genuine authored prose observations
# that a lane schema did not serialize into its JSON list.
normalization_path = out / "coordinator-normalized-existing-diagram-checks.json"
if normalization_path.exists():
    for row in json.loads(normalization_path.read_text()):
        item_id = row.get("id")
        lane = str(row.get("reviewer_lane", "coordinator"))
        if item_id not in items:
            continue
        receipt = json.loads((out / "screenshots" / f"{item_id}.json").read_text())
        requested = {pathlib.Path(p).name for p in row.get("screenshots", [])}
        tiles = [t for t in receipt["screenshots"] if not requested or pathlib.Path(t["path"]).name in requested]
        positive.append({"id": item_id, "reviewer_lane": lane, "classification": row.get("classification", "checked-consistent"), "diagram_kind": row.get("diagram_kind", "existing diagram"), "mathematical_review": row.get("mathematical_review", ""), "screenshots": [t["path"] for t in tiles], "screenshot_sha256": {t["path"]: t["sha256"] for t in tiles}, "source_snapshot": items[item_id]["snapshot"], "source_sha256": items[item_id]["sha256"]})
(supp / "combined-existing-diagram-checks.json").write_text(json.dumps(positive, indent=2, ensure_ascii=False) + "\n")

primary_tiles = sum(len(json.loads((out / "screenshots" / f"{item_id}.json").read_text())["screenshots"]) for item_id in items)
receipt = {"category": category, "mode": "integrated-with-primary-review", "primary_item_count": len(items), "primary_tile_count": primary_tiles, "selection_count": len(rows), "selected_item_count": len(rows), "missing_diagram_candidates": len(rows), "existing_diagram_checks": len(positive), "all_candidate_sources_bound": all(row["source_sha256"] == items[row["id"]]["sha256"] for row in rows), "all_candidate_tiles_bound_to_primary_receipts": all(any(t["path"] == p and t["sha256"] == row["screenshot_sha256"][p] for t in json.loads((out / "screenshots" / f"{row['id']}.json").read_text())["screenshots"]) for row in rows for p in row["screenshots"]), "scope_note": "Finite integrated candidates from the primary visual-review lanes. Candidates remain uncertain/editorial pending independent adjudication; none is presumed required. Positive mathematical representation checks are separate from defect intake."}
(supp / "combined-receipt.json").write_text(json.dumps(receipt, indent=2) + "\n")
print(json.dumps(receipt))
