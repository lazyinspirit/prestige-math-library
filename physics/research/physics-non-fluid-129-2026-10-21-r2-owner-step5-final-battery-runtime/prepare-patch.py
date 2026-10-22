from pathlib import Path
import difflib
here=Path(__file__).resolve().parent
paths=['tools/physics-support/boundary-audit.mjs','tools/physics-support/defect-ledger.mjs']
patch=''
for name in paths:
 old=(here/'preimages'/name).read_text();new=(here/'candidate'/name).read_text()
 patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/'+name,tofile='b/'+name))
(here/'output-integration.patch').write_text(patch)
for name in ['tools/physics-autopilot/test/defect-ledger-output.test.mts','tools/physics-support/boundary-audit-output.test.mjs']:
 new=(here/'candidate'/name).read_text()
 patch+=''.join(difflib.unified_diff([],new.splitlines(True),fromfile='/dev/null',tofile='b/'+name))
name='physics/WORKFLOW.md';old=(here/'preimages'/name).read_text()
anchor='''outside findings retain raw evidence and are excluded without being passed.'''
assert old.count(anchor)==1
new=old.replace(anchor,anchor+''' Boundary-audit
JSON and defect-ledger check output drain fully through native pipes before
exit, preserving every diagnostic, strict failure status and genuine liveness
summary. Complete transport does not uphold boundary candidates or waive
current review bindings.''')
patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/'+name,tofile='b/'+name))
(here/'final-battery-output.patch').write_text(patch)
