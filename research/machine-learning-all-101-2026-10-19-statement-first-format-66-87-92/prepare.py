from pathlib import Path
import json,re,hashlib,difflib,datetime
b=Path('research/machine-learning-all-101-2026-10-19-statement-first-format-66-87-92');(b/'before/items').mkdir(parents=True,exist_ok=True);(b/'proposed/items').mkdir(parents=True,exist_ok=True)
rows=[v for v in json.loads(Path('/tmp/ml-statement-first-failure-inventory.json').read_text()) if v['batch']in['66','87','92']];assert len(rows)==15
sha=lambda s:hashlib.sha256(s.encode()).hexdigest();sections=lambda s:dict((m.group(1),m.group(2))for m in re.finditer(r'^## (.+)\n([\s\S]*?)(?=^## |\Z)',s,re.M));reports=[];diff=[]
for row in rows:
 id=row['item'];path=Path('items')/(id+'.md');old=path.read_text();new=old;edits=[]
 if row['batch']=='66':
  heading='Verification references'if'\n## Verification references\n'in old else'Proof references';src='## '+heading+'\n';dst='## Source notes\n';assert old.count(src)==1 and dst not in old;new=new.replace(src,dst);edits.append({'source':src,'replacement':dst,'reason':'Late editorial proof-source notes are not statement references. Complete actual Statement/Example references remain adjacent and unchanged.'})
 else:
  for heading,body in sections(old).items():
   if not heading.endswith(' references'):continue
   for m in re.finditer(r'\[\[([^\]|]+)\|([^\]]+)\]\]',body):
    if'$'not in m[2]:continue
    src=m[0];dst='[['+m[1]+']]: '+m[2];assert new.count(src)==1,(id,src);new=new.replace(src,dst);edits.append({'source':src,'replacement':dst,'reason':'Keep the same target and complete caption/math outside the wiki-link alias so the Markdown AST sees exactly one hyperlink in this one-line paragraph.'})
 assert new!=old and edits,id
 inverse=new
 for e in reversed(edits):assert inverse.count(e['replacement'])==1;inverse=inverse.replace(e['replacement'],e['source'])
 assert inverse==old
 prefix=lambda s:s[:s.index('\n---',4)+4];assert prefix(old)==prefix(new)
 so,sn=sections(old),sections(new);protected=['Statement','Statement refuted','Definition','Example','Scope','Proof','Verification','Refutation','Counterexample','Facts & Assumptions']
 protected_rows=[]
 for k in protected:
  if k in so:assert so[k]==sn[k],(id,k);protected_rows.append({'heading':k,'sha256':sha(so[k]),'byte_identical':True})
 targets=lambda s:re.findall(r'\[\[([^\]|]+)',s);assert targets(old)==targets(new)
 urls=lambda s:re.findall(r'https?://[^\s)\]"<>]+',s);assert urls(old)==urls(new)
 math=lambda s:re.findall(r'\${1,2}[^$]*?\${1,2}',s);assert math(old)==math(new)
 before=b/'before/items'/path.name;after=b/'proposed/items'/path.name;before.write_text(old);after.write_text(new)
 reports.append({**row,'target':str(path),'before':str(before),'proposed':str(after),'before_sha256':sha(old),'after_sha256':sha(new),'edits':edits,'frontmatter_byte_identical':True,'protected_sections':protected_rows,'all_wikilink_targets_in_order_identical':True,'all_urls_in_order_identical':True,'all_math_spans_in_order_byte_identical':True,'inverse_unique_substring_edits_recover_full_original':True})
 diff.extend(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile=str(path),tofile=str(after)))
(b/'diff.patch').write_text(''.join(diff));(b/'proposal.json').write_text(json.dumps({'version':1,'run':'machine-learning-all-101-2026-10-19','kind':'format-only-statement-first-proposal','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope_batches':[66,87,92],'items':reports,'contract_quote_mirrors_required':False,'contract_quote_reason':'All permitted supplier quotation sections (Statements, Definitions, Examples, Scope) and full Facts/proof blocks remain byte-identical. Only reference wrappers or late editorial-source headings change.','actual_sources_modified':False,'native_readiness_or_gate_credit':False},indent=2)+'\n')
print('staged15sources;',sum(len(r['edits'])for r in reports),'exactreversibleformatoperations')
