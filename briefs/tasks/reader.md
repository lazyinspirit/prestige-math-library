# Step 6a — reader

Read the assigned batch manifest, every assigned A/B page and item, and each
dependency needed to verify the current mathematics. You may repair an
in-flight assigned item or A-page prose; do not modify another batch, the plan,
a B-page body, or published content.

Write the named reader report with opened item/page inventory, every edit,
uneditable defect, per-page verdict, and blocker. Return only uneditable
findings in the schema-conforming `research/<run>-reader-findings-<i>.json`:
use the bare batch id, exact location, defect class, evidence, severity, and
published consumer where required. A repaired defect belongs in the report and
disk diff, not the JSON findings array.
