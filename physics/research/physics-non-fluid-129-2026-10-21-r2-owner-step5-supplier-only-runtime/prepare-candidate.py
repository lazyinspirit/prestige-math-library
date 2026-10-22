from pathlib import Path
import difflib
root=Path(__file__).resolve().parents[3]
here=Path(__file__).resolve().parent
src=root/'tools/physics-support/step5-workflow.mjs'
s=src.read_text()
old="  for(const row of decisions)if(['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome)&&!changed.includes(row.id))errors.push(`confirmed defect not repaired ${row.id}`);"
new="""  for(const row of decisions)if(['confirmed_fatal','confirmed_nonfatal'].includes(row.outcome)&&!changed.includes(row.id)
    &&!supplierResolvedNonfatal({root,pack,reports,now,decision:row,matchesCurrent:reviewMatchesCurrent}))
    errors.push(`confirmed defect not repaired ${row.id}`);"""
assert s.count(old)==1,'confirmed-defect guard changed; review integration manually'
anchor="import { itemHashGuard } from './item-hash.mjs';"
assert s.count(anchor)==1,'import anchor changed'
s=s.replace(anchor,anchor+"\nimport { supplierResolvedNonfatal } from './step5-supplier-resolution.mjs';").replace(old,new)
out=here/'candidate/tools/physics-support/step5-workflow.mjs'
out.write_text(s)
(here/'workflow-integration.patch').write_text(''.join(difflib.unified_diff(src.read_text().splitlines(True),s.splitlines(True),fromfile='a/tools/physics-support/step5-workflow.mjs',tofile='b/tools/physics-support/step5-workflow.mjs')))
# Siblings resolve from the real production files; only this tiny candidate
# workflow and the new helper differ. Never copy a stale full workflow to source.
for entry in (root/'tools/physics-support').iterdir():
    dest=out.parent/entry.name
    if not dest.exists():dest.symlink_to(entry)
print(out)
