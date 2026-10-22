from pathlib import Path
import difflib
here=Path(__file__).resolve().parent;repo=here.parents[2]
patch=(here/'queue-integration.patch').read_text()+(here/'workflow-integration.patch').read_text()
name='step5-owner-finding-wave-history.test.mjs';body=(here/'candidate/tools/physics-support'/name).read_text()
patch+=''.join(difflib.unified_diff([],body.splitlines(True),fromfile='/dev/null',tofile='b/tools/physics-support/'+name))
file=repo/'physics/WORKFLOW.md';old=file.read_text();anchor='''hand-off neither attempts nor waives the ordinary full gate battery.'''
# Use the actual existing wording rather than a guessed normalized spelling.
anchor='''handoff neither attempts nor waives the ordinary full gate battery.

An earlier collected single-subject correction'''
assert old.count(anchor)==1
new=old.replace(anchor,'''handoff neither attempts nor waives the ordinary full gate battery.

A retained owner-finding advertisement from an earlier wave is ignored at new
intake only after authenticating that exact request, frozen progress and pack,
original bound inputs, completed native lane reports and dispatches, and the
child/parent collection under the earlier sealed impact certificate. Historical
repairs may have later source successors; their old reviews are never rebound
to current sources. A fresh, unconsumed, same-wave or future mismatched request
keeps the ordinary blocking checks. Root may advertise a genuine later queue
without changing the earlier request or collection. A consumed parent replays
its own immutable bound queue evidence through ordinary collection validation;
it does not reinterpret the newer advertisement as its historical authority.

An earlier collected single-subject correction''')
patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/physics/WORKFLOW.md',tofile='b/physics/WORKFLOW.md'))
(here/'repeat-owner-queue.patch').write_text(patch)
