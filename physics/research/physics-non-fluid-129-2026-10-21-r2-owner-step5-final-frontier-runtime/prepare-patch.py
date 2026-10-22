from pathlib import Path
import difflib
here=Path(__file__).resolve().parent;repo=here.parents[2]
patch=(here/'frontier-integration.patch').read_text()
file=repo/'tools/physics-support/step5-frontier-gate.test.mjs';old=file.read_text();new=(here/'test-candidate.mjs').read_text()
patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/tools/physics-support/step5-frontier-gate.test.mjs',tofile='b/tools/physics-support/step5-frontier-gate.test.mjs'))
file=repo/'physics/WORKFLOW.md';old=file.read_text();anchor='''Published supplier alerts remain in the original digest as read-only context;
'''
# Keep this final-gate note with the Step-5 engine's frozen-frontier duties.
anchor='''Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery.'''
assert old.count(anchor)==1
new=old.replace(anchor,anchor+''' Its final
frontier adapter recognizes every schema item prefix, including `op-` open
problems, while retaining frozen identity/hash checks and the ordinary published
maintenance distinction. An owned open-problem finding remains blocking;
outside findings retain raw evidence and are excluded without being passed.''')
patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/physics/WORKFLOW.md',tofile='b/physics/WORKFLOW.md'))
(here/'final-frontier.patch').write_text(patch)
