import json,pathlib,subprocess,datetime
run='physics-cm-qm-gr-79-2026-10-11';b=pathlib.Path(f'research/{run}-resumed-orchestration/session-recovery-20261012/batch11-evidence-repair')
items=[];pages=[]
for batch in [11,34]:
 for page in json.load(open(f'research/{run}-batch-{batch}.pages.json')):
  pages.append(f"library/{page['category']}/{page['id']}.md");items.extend(f"items/{row['id']}.md" for row in page['items'])
commands=[('precheck',['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*items,'--json']),('rendercheck',['node','tools/physics-support/rendercheck.mjs',*items,*pages,'--json']),('proof-layout',['node','tools/physics-support/proof-layout.mjs',*items]),('proof-contract-11',['node','tools/physics-support/proof-contract.mjs',f'research/{run}-batch-11.proof-contracts.json','--strict','--json']),('proof-contract-34',['node','tools/physics-support/proof-contract.mjs',f'research/{run}-batch-34.proof-contracts.json','--strict','--json']),('manifest-deps',['node','tools/physics-support/manifest-deps.mjs',f'research/{run}-batch-11.pages.json',f'research/{run}-batch-34.pages.json'])]
receipts=[]
for name,cmd in commands:
 r=subprocess.run(cmd,text=True,capture_output=True);out=b/f'{name}.txt';out.write_text(r.stdout+r.stderr);receipts.append({'name':name,'command':cmd,'exit_code':r.returncode,'output_file':str(out),'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat()});print(name,r.returncode, (r.stdout+r.stderr)[-250:])
(b/'local-checks.json').write_text(json.dumps({'scope':{'items':items,'pages':pages},'checks':receipts},indent=2)+'\n')
