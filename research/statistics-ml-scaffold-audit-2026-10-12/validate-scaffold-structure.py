#!/usr/bin/env python3
"""Focused prose-plan checks. These do not certify mathematical claims."""
import collections,json,pathlib,re,sys
ROOT=pathlib.Path(__file__).resolve().parents[2]
FILES={"MSF":"plan-mathematical-statistics-track.md","SME":"plan-statistical-models-experiments-track.md","BCS":"plan-bayesian-computational-statistics-track.md","ML":"plan-machine-learning-track.md"}
registry={};errors=[];texts={}
for prefix,name in FILES.items():
 s=(ROOT/'research'/name).read_text();texts[prefix]=s
 if prefix=='MSF':
  matches=list(re.finditer(r'^\| \*\*(MSF-\d+)\*\* `([^`]+)`[^\n]*',s,re.M))
  for index,m in enumerate(matches):
   fields=m[0].split('|')
   if m[1] in registry:errors.append({'code':'duplicate-label','label':m[1]})
   registry[m[1]]={'file':name,'page':m[2],'requires':fields[2],'category':1,'order':index,'independent':False}
 else:
  pattern=r'^### ((?:'+prefix+r'-\d+|P-[A-Z]+(?:-[A-Z]+)*-\d+)) — ([^\n]+)'
  matches=list(re.finditer(pattern,s,re.M))
  for index,m in enumerate(matches):
   chunk=s[m.end():matches[index+1].start() if index+1<len(matches) else len(s)]
   pg=re.search(r'\*\*Pages:\*\*\s*([^\s/]+)',chunk)
   req=re.search(r'\*\*Requires:\*\*\s*(.*?)(?=\*\*Sources:|\n\n|\n##|\Z)',chunk,re.S)
   if m[1] in registry:errors.append({'code':'duplicate-label','label':m[1]})
   registry[m[1]]={'file':name,'page':pg[1].strip('`') if pg else None,'requires':req[1] if req else None,'category':{'SME':2,'BCS':3,'ML':4}[prefix],'order':index,'independent':m[1].startswith('P-')}
   # SME's historic A/B design embeds proof plans in A rather than separate fields.
   for field in (['Pages','A','B','Requires','Sources'] if prefix=='SME' else ['Pages','Scope','Proof route','Examples','Requires','Sources']):
    if not (re.search(r'\*\*'+re.escape(field)+r'(?:,[^*]*)?:',chunk) or (field=='B' and '**Proof/B:' in chunk)):errors.append({'code':'missing-field','label':m[1],'field':field})
pageowners=collections.defaultdict(list);edges={}
for label,row in registry.items():
 if row['page'] is None:errors.append({'code':'missing-pages','label':label})
 else:
  for page in [row['page'],row['page']+'-examples']:pageowners[page].append(label)
 if row['requires'] is None:errors.append({'code':'missing-requires','label':label})
 requires=row['requires'] or ''
 refs=set(re.findall(r'\b(?:MSF|SME|BCS|ML)-\d+\b|\bP-[A-Z]+(?:-[A-Z]+)*-\d+\b',requires))
 # Expand the compact SME notation MSF-08/10/35 and inclusive ranges.
 for m in re.finditer(r'\b(MSF|SME|BCS|ML)-(\d+)((?:/\d+)+)',requires):
  refs.update(m[1]+'-'+n.zfill(2) for n in [m[2],*m[3].split('/')[1:]])
 for m in re.finditer(r'\b(MSF|SME|BCS|ML)-(\d+)[–—-](?:(?:MSF|SME|BCS|ML)-)?(\d+)\b',requires):
  refs.update(m[1]+'-'+str(n).zfill(2) for n in range(int(m[2]),int(m[3])+1))
 edges[label]=refs
 for ref in refs:
  if ref not in registry:errors.append({'code':'unknown-prerequisite','label':label,'target':ref});continue
  supplier=registry[ref]
  if not row['independent'] and not supplier['independent']:
   if supplier['category']>row['category']:errors.append({'code':'backward-category','label':label,'target':ref})
   elif supplier['category']==row['category'] and supplier['order']>=row['order']:errors.append({'code':'later-local-pair','label':label,'target':ref})
  if row['independent'] and not supplier['independent']:errors.append({'code':'dependent-independent-supplier','label':label,'target':ref})
for page,owners in pageowners.items():
 if len(owners)>1:errors.append({'code':'duplicate-page','page':page,'owners':owners})
active=set();done=set()
def visit(label):
 if label in active:errors.append({'code':'prerequisite-cycle','label':label});return
 if label in done:return
 active.add(label)
 for ref in edges.get(label,set()):
  if ref in registry:visit(ref)
 active.remove(label);done.add(label)
for label in registry:visit(label)
# Textual item interfaces and semantic mathematical prerequisites are additionally
# inspected by agents/root; this script covers explicitly named pair references.
counts=collections.Counter('independent' if r['independent'] else re.match('[A-Z]+',l)[0] for l,r in registry.items())
result={'scope':list(FILES.values()),'counts':dict(counts),'pair_count':len(registry),'proposed_page_count':len(pageowners),'errors':errors,'limitation':'Structural prose design checks only. Semantic mathematical prerequisites and intended independence need manual inspection.'}
print(json.dumps(result,indent=2));sys.exit(bool(errors))
