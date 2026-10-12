import json,hashlib,re,yaml,datetime
from pathlib import Path
out=Path("research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/spectral-lead")
roots=["prop-nrqm-controlled-dynamics-first-order-amplitude-tail","thm-nrqm-controlled-dynamics-driven-oscillator-common-domain","thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator"]
index={};aliases={};errors=[]
def parse(s):
 m=re.match(r"^---\r?\n(.*?)\r?\n---(?:\r?\n|$)",s,re.S)
 return yaml.safe_load(m[1]) if m else {}
for p in Path("items").glob("*.md"):
 s=p.read_text()
 try:d=parse(s)
 except Exception as e:errors.append({"file":str(p),"error":str(e)});continue
 if not isinstance(d,dict):continue
 id=d.get("id",p.stem);index[id]={"path":str(p),"raw_sha256":hashlib.sha256(p.read_bytes()).hexdigest(),"edges":set(d.get("deps",[])+d.get("justified_by",[]))|set(re.findall(r"\[\[([^]|]+)",s))}
 for a in d.get("aliases",[]):aliases[a]=id
old_count=0
archives=list(Path("research/physics-cm-qm-gr-79-2026-10-11-cc-spectral-prerequisite/native-holds").glob("*.md"))+list((out/"before").glob("*.md"))+list(Path("research/physics-cm-qm-gr-79-2026-10-11-crash-recovery/batch41-focused-interface-review/before-repair").glob("*.md"))
for p in archives:
 s=p.read_text()
 try:d=parse(s)
 except Exception:continue
 if not isinstance(d,dict):continue
 id=d.get("id")
 if id not in index:continue
 index[id]["edges"].update(d.get("deps",[])+d.get("justified_by",[]));index[id]["edges"].update(re.findall(r"\[\[([^]|]+)",s));old_count+=1
 for a in d.get("aliases",[]):aliases[a]=id
rev={}
for id,row in index.items():
 for e in row["edges"]:rev.setdefault(aliases.get(e,e),set()).add(id)
rows=[]
for id in roots:
 direct=rev.get(id,set())-{id};cone=set(direct);todo=list(direct)
 while todo:
  x=todo.pop()
  for y in rev.get(x,set()):
   if y not in cone and y!=id:cone.add(y);todo.append(y)
 rows.append({"id":id,"direct_consumers":sorted(direct),"all_consumers":sorted(cone),"consumer_guards":[{k:v for k,v in index[x].items() if k!="edges"}|{"id":x} for x in sorted(cone)]})
r={"at":datetime.datetime.now(datetime.timezone.utc).isoformat(),"current_items":len(index),"old_archives":old_count,"union":"current deps/justified/body links and retained native-holds before.md dependencies/body links with current/old aliases","errors":errors,"roots":rows,"acceptance":False}
(out/"first-three-current-old-alias-cone.json").write_text(json.dumps(r,indent=2)+"\n")
(out/"graph-current-old-alias.json").write_text(json.dumps({"nodes":{id:{"path":v["path"],"raw_sha256":v["raw_sha256"],"edges":sorted(aliases.get(e,e) for e in v["edges"])} for id,v in index.items()},"aliases":aliases},indent=2)+"\n")
print(json.dumps(r,indent=2))
