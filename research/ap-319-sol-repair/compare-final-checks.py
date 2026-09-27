from pathlib import Path
import json,re,collections
b=Path(__file__).resolve().parent
before=json.loads((b/'depcheck-reconstructed-before.json').read_text());after=json.loads((b/'depcheck-final.json').read_text())
key=lambda x:(x['code'],x['msg'])
a={key(x) for x in before['errors']};z={key(x) for x in after['errors']}
owned=set(json.loads((b/'effective-receipts.json').read_text())['receipts'])
new=[{'code':c,'msg':m} for c,m in sorted(z-a)]
# Static plan output includes ordinary per-page lines; diagnostics have brackets.
def plan(name):
 return {l.strip() for l in (b/name).read_text().splitlines() if re.match(r'^  \[(?!redundant-prereq)',l)}
pold=plan('plan-validation-before.txt');pnew=plan('plan-validation-final.txt')
out={'depcheck_before_summary':before['summary'],'depcheck_final_summary':after['summary'],'new_depcheck_errors':new,'removed_depcheck_error_count':len(a-z),'current_error_codes':dict(collections.Counter(x['code'] for x in after['errors'])),'new_plan_diagnostics':sorted(pnew-pold),'removed_plan_diagnostics':sorted(pold-pnew),'owned_nonverification_errors':[x for x in after['errors'] if x['code'] not in ['published-unaudited','published-unproved-unchecked'] and any(i in x['msg'] for i in owned)],'baseline_scope':'Reconstructed pre-repair item/page snapshots, documented in baseline-reconstruction.json; not a clean repository checkout.'}
(b/'final-check-comparison.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({k:v for k,v in out.items() if k not in ['removed_plan_diagnostics']},indent=2))
