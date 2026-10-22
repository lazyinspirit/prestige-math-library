from pathlib import Path
import difflib
here=Path(__file__).resolve().parent
repo=here.parents[2]
patch=(here/'workflow-integration.patch').read_text()
for name in ['step5-supplier-resolution.mjs','step5-supplier-resolution.test.mjs']:
    body=(here/'candidate/tools/physics-support'/name).read_text()
    patch+=''.join(difflib.unified_diff([],body.splitlines(True),fromfile='/dev/null',tofile='b/tools/physics-support/'+name))
src=repo/'physics/WORKFLOW.md';old=src.read_text()
anchor='The native Sol 6.1 high worker identity is independent of the Step-4 judge lineup.'
assert old.count(anchor)==1
new=old.replace(anchor,(here/'workflow-documentation.txt').read_text()+anchor)
patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/physics/WORKFLOW.md',tofile='b/physics/WORKFLOW.md'))
(here/'supplier-resolution.patch').write_text(patch)
