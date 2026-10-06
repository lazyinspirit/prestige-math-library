import re,json,pathlib,hashlib
base=pathlib.Path(__file__).parent
s=(base/'resolve.tex').read_text()
pat=re.compile(r'\\begin\{(lemma|proposition|theorem|definition|remark|situation)\}[^\n]*\n\\label\{([^}]+)\}')
ms=list(pat.finditer(s));nodes={}
for i,m in enumerate(ms):
 end=ms[i+1].start() if i+1<len(ms) else len(s)
 # Stop at next section; material after an environment can contain required explanatory arguments.
 sec=s.find('\\section{',m.end(),end)
 if sec!=-1:end=sec
 body=s[m.start():end]
 nodes[m[2]]={'kind':m[1],'line':s.count('\n',0,m.start())+1,'refs':sorted(set(re.findall(r'\\ref\{([^}]+)\}',body)))}
# Lemma 12.3's one-line proof explicitly imports the whole preceding case analysis.
start=s.index('\\section{Rational double points}')
end=s.index('\\section{Implied properties}')
nodes['lemma-resolve-rational-double-points']['refs']=sorted(set(re.findall(r'\\ref\{([^}]+)\}',s[start:end]))-{'lemma-resolve-rational-double-points'})
seen=set();ext=set();todo=['theorem-resolve']
while todo:
 n=todo.pop()
 if n in seen:continue
 seen.add(n)
 for r in nodes[n]['refs']:
  if r in nodes:todo.append(r)
  elif r.startswith(('lemma-','proposition-','theorem-','definition-','remark-','situation-')): print('UNRESOLVED LOCAL',r)
  elif not r.startswith(('section-','equation-')):ext.add(r)
# Explicitly cited definitions and setup (not always linked by theorem prose)
# kept separate, avoiding false claim that every citation names an independent local item.
setup=['definition-normalized-blowup','definition-resolution','definition-resolution-surface','definition-reduce-to-rational','situation-vanishing','situation-rational','situation-rational-double-point','remark-dualizing-setup']
result={'source_sha256':hashlib.sha256(s.encode()).hexdigest(),'algorithm':'Source citation graph, not certified mathematical closure. Attach all section-12 case analysis to lemma-resolve-rational-double-points; trailing setup prose retained. Implicit section-wide imports remain open.','local_count':len(seen),'external_citation_count':len(ext),'local_nodes':{n:nodes[n] for n in sorted(seen,key=lambda n:nodes[n]['line'])},'explicit_setup_not_reached':{n:nodes[n] for n in setup if n not in seen},'external_citations':sorted(ext)}
(base/'source-citation-closure.json').write_text(json.dumps(result,indent=2)+'\n')
print('LOCAL',len(seen),'EXTERNAL',len(ext),'SETUP_EXTRA',len(result['explicit_setup_not_reached']))
for n in result['local_nodes']:print(n)
for n in sorted(ext):print(n)
# Commissioned field-level route never uses (1)=> (4), so §13 is not required.
# The completion-normality reduction paragraph of 14.3 is also unnecessary for excellent local rings.
nodes2=json.loads(json.dumps(nodes))
nodes2['lemma-existence-implies-existence-by-normalized-blowing-ups']['refs']=[x for x in nodes2['lemma-existence-implies-existence-by-normalized-blowing-ups']['refs'] if x not in ['lemma-regular-alteration-implies-local','lemma-port-regularity-to-completion','lemma-normalized-blowup-completion']]
seen2=set();ext2=set();todo=['lemma-resolve-complete','lemma-existence-implies-existence-by-normalized-blowing-ups','lemma-normalized-blowup-completion','lemma-port-regularity-to-completion','lemma-equivalence-sequence-normalized-blowups','lemma-equivalence','lemma-equivalence-properties','lemma-Nagata-normalized-blowup']+setup
while todo:
 n=todo.pop()
 if n in seen2:continue
 seen2.add(n)
 for r in nodes2[n]['refs']:
  if r in nodes2:todo.append(r)
  elif not r.startswith(('section-','equation-')):ext2.add(r)
result2={'scope':'finite-type normal integral surface over any field; (4)=> (3) route only','local_count':len(seen2),'external_citation_count':len(ext2),'local_nodes':{n:nodes2[n] for n in sorted(seen2,key=lambda n:nodes2[n]['line'])},'external_citations':sorted(ext2),'limits':'Citation graph only; section-wide implicit imports and recursively imported external proofs are not closed. The source-14.3 completion reduction was omitted because local rings in this route are already excellent; the complete-ring portion is still used.'}
(base/'commissioned-citation-closure.json').write_text(json.dumps(result2,indent=2)+'\n')
print('COMMISSIONED_LOCAL',len(seen2),'COMMISSIONED_EXTERNAL',len(ext2))
