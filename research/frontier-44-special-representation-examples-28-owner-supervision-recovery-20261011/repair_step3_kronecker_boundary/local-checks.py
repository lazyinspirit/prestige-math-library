from pathlib import Path
import subprocess,json,datetime,hashlib
base=Path(__file__).parent
ids=['lem-kronecker-reduction-lemma','thm-row-gap-reduction-and-conditional-k-stability','cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability']
files=['items/'+x+'.md' for x in ids]
pages=['library/special-topics-in-representation-theory/kronecker-coefficients-and-internal-products'+suffix+'.md' for suffix in ['', '-examples']]
commands=[['node','tools/tsx-run.mjs','tools/precheck.mts',*files,'--json'],['node','tools/rendercheck.mjs',*files,*pages,'--json'],['node','tools/proof-layout.mjs',*files],['python3',str(base/'verify-math-inherited.py')]]
rows=[]
for cmd in commands:
 t=datetime.datetime.now(datetime.timezone.utc).isoformat();p=subprocess.run(cmd,text=True,capture_output=True);rows.append({'command':cmd,'at':t,'exit_code':p.returncode,'stdout':p.stdout,'stderr':p.stderr});print(json.dumps(rows[-1]))
result={'run':'frontier-44-special-representation-examples-28','scope':'exact three flagged items and inherited A/B summaries; local focused checks, no gate','inputs':[{'path':f,'raw_sha256':hashlib.sha256(Path(f).read_bytes()).hexdigest()} for f in files+pages],'checks':rows,'passed':all(x['exit_code']==0 for x in rows)}
(base/'local-checks.json').write_text(json.dumps(result,indent=2)+'\n')
