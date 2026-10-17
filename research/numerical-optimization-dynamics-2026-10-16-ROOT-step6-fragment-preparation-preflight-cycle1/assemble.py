from pathlib import Path
import difflib,json
p=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-step6-fragment-preparation-preflight-cycle1')
ops=[]
def change(file,path,before,after):
 original=(p/'before'/file).read_text()
 if original.count(before)!=1: raise ValueError('ambiguous exact proposal preimage')
 proposed=original.replace(before,after)
 replacements=[{'before':before,'after':after}]
 if file=='step6-commit.mjs':
  boundary='    const currentScope = preflightStep6(root, run, { physics, finalReceipt });'
  successor=boundary+'\n    for (const suffix of [\'pathway-closure.json\', \'judge-closure.json\'])\n      regularPath(currentScope.root, `research/${run}-${suffix}`);'
  if proposed.count(boundary)!=1: raise ValueError('ambiguous final boundary')
  proposed=proposed.replace(boundary,successor)
  replacements.append({'before':boundary,'after':successor})
 (p/'proposed'/file).write_text(proposed)
 (p/(file+'.diff')).write_text(''.join(difflib.unified_diff(original.splitlines(True),proposed.splitlines(True),fromfile=path,tofile=path)))
 ops.append({'path':path,'exact_preimage':str(p/'before'/file),'proposed':str(p/'proposed'/file),'replacements':replacements})
change('run-commit-scope.mjs','tools/run-commit-scope.mjs',
'''  const pending = path => preflight && (path === finalReceipt || ['proof-layout.json',
    'publication-readiness.json', 'step6-report-integrity.json', 'step6-report.response.json',
    'step6-report.md', 'step6-evidence.json'].some(name => path === `research/${run}-${name}`));''',
'''  const pending = path => preflight && (path === finalReceipt || ['proof-layout.json',
    'publication-readiness.json', 'step6-report-integrity.json', 'step6-report.response.json',
    'step6-report.md', 'step6-evidence.json'].some(name => path === `research/${run}-${name}`)
    // Native v3 authority is sealed before preparation/gates derive closures.
    // Present carriers stay strict; commitStep6 requires both actual products.
    || finalReceipt === `research/${run}-dispatch/tool-step6-finalize-v3.result.json`
      && ['pathway-closure.json', 'judge-closure.json'].some(name => path === `research/${run}-${name}`));''')
change('step6-commit.mjs','tools/step6-commit.mjs',
"  for (const suffix of ['proof-layout.json', 'publication-readiness.json', 'step6-evidence.json', 'step6-report-integrity.json', 'step6-report.response.json', 'step6-report.md'])",
"  for (const suffix of ['proof-layout.json', 'publication-readiness.json', 'step6-evidence.json', 'step6-report-integrity.json', 'step6-report.response.json', 'step6-report.md', 'pathway-closure.json', 'judge-closure.json'])")
before='''They grant record-level commit authority only, without mathematical acceptance
or ownership of the entire shared carrier. Conflicts fail closed.'''
after='''They grant record-level commit authority only, without mathematical acceptance
or ownership of the entire shared carrier. Conflicts fail closed.
Exact native v3 packaging preflight may observe the two future-derived
`RUN-pathway-closure.json` and `RUN-judge-closure.json` carriers as absent before
preparation/gates produce them. Every present carrier remains subject to the
same regular-file and symlink checks. This grants no closure or gate credit:
the actual final transaction requires both products, and ordinary native pathway
and current-judge closure gates remain mandatory. Legacy preflight and final
scope loading retain their existing strict closure requirements.'''
change('WORKFLOW.md','WORKFLOW.md',before,after)
packet={'version':1,'run':'numerical-optimization-dynamics-2026-10-16','status':'research-only first-cycle proposal; unexecuted; no hashes calculated','installation':'Root only at actual processed paused/drained boundary, with exact original canonical bytes and updated genuine ownership bindings. No runtime or source changes supplied.','operations':ops}
(p/'proposal.json').write_text(json.dumps(packet,indent=2)+'\n')
