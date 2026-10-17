#!/usr/bin/env python3
"""ROOT ONLY: guarded batch-9 contract mirrors. Default preview; --apply writes contracts only."""
from pathlib import Path
import json,re,sys,difflib
RUN="numerical-optimization-dynamics-2026-10-16"
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
CONTRACT=Path("research")/(RUN+"-batch-9.proof-contracts.json")
MANIFEST=Path("research")/(RUN+"-batch-9.pages.json")
DEFINITION=Path("items/def-milstein-scheme-and-iterated-integrals.md")
EXAMPLE=Path("items/ex-scalar-multiplicative-noise-milstein.md")
STRONG=Path("items/thm-commutative-milstein-strong-order-one.md")
for rel in [CONTRACT,MANIFEST,DEFINITION,EXAMPLE,STRONG]:
 assert (ROOT/rel).read_bytes()==(BASE/"before"/rel).read_bytes(),"Current input changed since reviewed metadata proposal: "+str(rel)
original=(ROOT/CONTRACT).read_text();data=json.loads(original)
def section(path,title):
 text=(ROOT/path).read_text();return text.split("## "+title+"\n",1)[1].split("\n## ",1)[0].strip()
definition=section(DEFINITION,"Definition")
closure={"lem-iterated-brownian-integral-identities","lem-bounded-sde-increment-moments","lem-milstein-local-defect-bounds","thm-commutative-milstein-strong-order-one","thm-milstein-mlmc-level-variance-and-cost","ex-geometric-brownian-milstein-update","ex-scalar-multiplicative-noise-milstein","ex-noncommuting-two-noise-milstein-area"}
changed_quotes=[]
for ident,c in data["contracts"].items():
 for cite in c.get("citations",[]):
  if cite.get("source")=="def-milstein-scheme-and-iterated-integrals":
   assert ident in closure and cite.get("source_section")=="Definition"
   cite["quote"]=definition;changed_quotes.append(ident)
assert set(changed_quotes)==closure
c=data["contracts"]["ex-scalar-multiplicative-noise-milstein"]
renumber={"1.1":"1.1","1.2":"2.1","2.1":"3.1"}
# Rewrite only references belonging to this changed example, simultaneously.
def refs(value):
 if isinstance(value,str):
  return re.sub(r"(?<![0-9.])(1\.1|1\.2|2\.1)(?![0-9.])",lambda m:renumber[m.group()],value)
 if isinstance(value,list):return [refs(v) for v in value]
 if isinstance(value,dict):return {k:(v if k in ["quote","claim","inputs","id","step"] else refs(v)) for k,v in value.items()}
 return value
c=refs(c);data["contracts"]["ex-scalar-multiplicative-noise-milstein"]=c
verification=section(EXAMPLE,"Verification")
steps={m.group(1):(m.group(2),m.group(3).split(", ")) for m in re.finditer(r"^(\d+\.\d+) (.*) \[([^\n]*)\](?: ∎)?$",verification,re.M)}
assert set(steps)=={"1.1","2.1","3.1"}
for row in c["derivations"]:
 old=row["step"];new=renumber[old];row["id"]="step-"+new.replace(".","-");row["step"]=new;row["claim"],row["inputs"]=steps[new]
# Facts and statement remain in carriers; citations stay exact section quotations.
for cite in c.get("citations",[]):
 if cite.get("source")=="thm-commutative-milstein-strong-order-one":
  cite["quote"]=section(Path("items/thm-commutative-milstein-strong-order-one.md"),"Statement")
# These additional mirrored fields are present only when the contract schema carries them.
for key,title in [("statement","Example"),("example","Example"),("given","Facts & Assumptions")]:
 if key in c and isinstance(c[key],str):
  body=section(EXAMPLE,title)
  c[key]=body.split("\n\n",1)[0] if key=="given" else body
assert set(changed_quotes)==closure
new=json.dumps(data,indent=2,ensure_ascii=False)+"\n"
if "--apply" in sys.argv:
 assert sys.argv[1:]==["--apply"],"Use no argument or --apply"
 (ROOT/CONTRACT).write_text(new)
 print("Applied guarded batch-9 contract mirrors only; manifest/dependencies unchanged.")
else:
 assert len(sys.argv)==1,"Use no argument or --apply"
 print("".join(difflib.unified_diff(original.splitlines(True),new.splitlines(True),fromfile=str(CONTRACT),tofile=str(CONTRACT)+" (proposed)")),end="")
