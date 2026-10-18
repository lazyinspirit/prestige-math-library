from pathlib import Path
import json,re,collections
run='non-ml-math-remaining-81-2026-10-18';b=Path('research/'+run+'-owner-linfinity-deformation-completion');ids=json.load(open(b/'archive-43/research'/f'{run}-batch-43.item-scope.json'));rows=[]
def math(s):
 return collections.Counter(re.sub(r'\s+',' ',x or y).strip() for x,y in re.findall(r'\$\$(.*?)\$\$|(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)',s,re.S))
for iid in ids:
 old=(b/'archive-43/items'/f'{iid}.md').read_text();new=Path('items/'+iid+'.md').read_text();o=math(old);n=math(new);missing=list((o-n).elements());r={'id':iid,'original_math_expressions':sum(o.values()),'current_math_expressions':sum(n.values()),'all_original_math_expressions_retained':not missing,'old_dependency_level':re.search(r'^dependency_level: (.*)$',old,re.M).group(1),'current_dependency_level':re.search(r'^dependency_level: (.*)$',new,re.M).group(1)}
 if missing:r['missing']=missing
 rows.append(r)
(b/'native-mechanical-math-audit.json').write_text(json.dumps(rows,indent=2)+'\n');print([r for r in rows if not r['all_original_math_expressions_retained']])
