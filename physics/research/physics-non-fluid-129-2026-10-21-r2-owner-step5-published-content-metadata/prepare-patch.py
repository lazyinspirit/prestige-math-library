from pathlib import Path
import difflib
here=Path(__file__).resolve().parent;repo=here.parents[2]
patch=(here/'physics-content.patch').read_text()
name='physics-content-published-repair.test.mjs';body=(here/'candidate/tools/physics-support'/name).read_text()
patch+=''.join(difflib.unified_diff([],body.splitlines(True),fromfile='/dev/null',tofile='b/tools/physics-support/'+name))
file=repo/'physics/SCHEMA.md';old=file.read_text()
anchor='  missing or mismatched evidence remains an error. There is no item gate,\n  rejudgment or adjudication duty for this recorded repair state.\n'
assert old.count(anchor)==1
new=old.replace(anchor,anchor+'''  The physics content publication check applies this same policy to existing
  published physical proof carriers, with loader-bound current filesystem
  identity, source bytes and parsed metadata. A standalone in-memory repair
  field supplies no publication authority. Valid recorded maintenance adds no
  whole-item audit and retains all ordinary physical proof, source and empirical
  qualification checks; initial publication still requires its proof audit.
''')
patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/physics/SCHEMA.md',tofile='b/physics/SCHEMA.md'))
(here/'published-content-metadata.patch').write_text(patch)
