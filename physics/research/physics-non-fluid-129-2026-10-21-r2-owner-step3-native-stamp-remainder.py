import subprocess,pathlib,json,datetime
r='physics-non-fluid-129-2026-10-21-r2';p=pathlib.Path(f'research/{r}-owner-step3-root-adoption/native-stamp-remainder');assert not p.exists();p.mkdir();results=[]
for n in range(53,130):
 x=subprocess.run(['node','tools/physics-support/step3-scope.mjs','stamp','--run',r,'--group','batch-'+str(n)],text=True,capture_output=True);(p/f'{n}.log').write_text(x.stdout+x.stderr);results.append({'batch':n,'exit_code':x.returncode})
 if x.returncode:raise SystemExit('Native stamping failed batch '+str(n))
(p/'receipt.json').write_text(json.dumps({'run':r,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'results':results,'missing_batch52_preserved':True,'qualification':'Native mechanical current-carrier hashes only. Original decisions archived before first call; no native review, successful certification or stage gate asserted.'},indent=2)+'\n');print('Native current-carrier stamp complete for remaining77completed adjudication groups;52still missing')
