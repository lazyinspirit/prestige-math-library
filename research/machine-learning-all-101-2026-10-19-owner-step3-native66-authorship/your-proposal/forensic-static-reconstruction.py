# Diagnostic static parsing only: never executes/imports code from the native log.
from pathlib import Path
import ast,shlex,re,hashlib,json
R='machine-learning-all-101-2026-10-19';ID='lem-diffusion-objective-estimator-expectation';B=Path('research/'+R+'-owner-step3-native66-authorship/your-proposal')
logpath=Path('research/'+R+'-dispatch/alpha-3a-batch-66.attempt-1.log');log=logpath.read_text();sha=lambda b:hashlib.sha256(b).hexdigest()
pattern=r'^exec\n(/bin/bash -lc [\s\S]*?) in /home/lazyinspirit/Projects/prestige-math-library\n (succeeded in [^\n]*|exited [^\n]*)'
text=None;writes=[]
def literal(n,env):
 if isinstance(n,ast.Constant) and isinstance(n.value,str):return n.value
 if isinstance(n,ast.Name) and n.id in env:return env[n.id]
 if isinstance(n,ast.BinOp) and isinstance(n.op,ast.Add):return literal(n.left,env)+literal(n.right,env)
 raise ValueError('not literal path')
def replacement(expr,current):
 if isinstance(expr,ast.Call) and isinstance(expr.func,ast.Attribute) and expr.func.attr=='read_text' and isinstance(expr.func.value,ast.Name) and expr.func.value.id=='p' and not expr.args and not expr.keywords:return current,[]
 if isinstance(expr,ast.Call) and isinstance(expr.func,ast.Attribute) and expr.func.attr=='replace' and len(expr.args)==2 and not expr.keywords:
  source,steps=replacement(expr.func.value,current);assert all(isinstance(a,ast.Constant) and isinstance(a.value,str) for a in expr.args);a,b=[x.value for x in expr.args];assert a and source.count(a)>0;return source.replace(a,b),steps+[{'before_literal_sha256':sha(a.encode()),'after_literal_sha256':sha(b.encode()),'occurrences':source.count(a)}]
 raise ValueError('unsupported source expression')
for m in re.finditer(pattern,log,re.M):
 argv=shlex.split(m[1]);assert len(argv)==3 and argv[:2]==['/bin/bash','-lc'];shell=argv[2];line=log.count('\n',0,m.start())+1
 anchor="cat > items/"+ID+".md <<'EOF'\n"
 if shell.startswith(anchor):
  assert text is None and '\nEOF\n' in shell; text=shell[len(anchor):shell.index('\nEOF\n')]+ '\n';writes.append({'kind':'literal-heredoc-creation','line':line,'command_sha256':sha(m[1].encode()),'command_status':m[2],'after_raw_sha256':sha(text.encode())})
 if text is None or "python3 - <<'PY'\n" not in shell:continue
 source=shell.split("python3 - <<'PY'\n",1)[1].split('\nPY',1)[0];tree=ast.parse(source);target=False;pending=None;transforms=[];env={}
 for stmt in tree.body:
  if isinstance(stmt,ast.Assign) and len(stmt.targets)==1 and isinstance(stmt.targets[0],ast.Name):
   var=stmt.targets[0].id
   if isinstance(stmt.value,ast.Constant) and isinstance(stmt.value.value,str):env[var]=stmt.value.value
   if var=='p':
    target=False
    if isinstance(stmt.value,ast.Call) and isinstance(stmt.value.func,ast.Name) and stmt.value.func.id=='Path' and len(stmt.value.args)==1:
     try:target=literal(stmt.value.args[0],env)=='items/'+ID+'.md'
     except ValueError:pass
   if target and var=='s':pending,transforms=replacement(stmt.value,text)
  if target and isinstance(stmt,ast.Expr) and isinstance(stmt.value,ast.Call) and isinstance(stmt.value.func,ast.Attribute) and isinstance(stmt.value.func.value,ast.Name) and stmt.value.func.value.id=='p' and stmt.value.func.attr=='write_text':
   assert pending is not None and len(stmt.value.args)==1 and isinstance(stmt.value.args[0],ast.Name) and stmt.value.args[0].id=='s';before=sha(text.encode());text=pending;writes.append({'kind':'inline-python-literal-replacements','line':line,'command_sha256':sha(m[1].encode()),'command_status':m[2],'before_raw_sha256':before,'after_raw_sha256':sha(text.encode()),'literal_replacements':transforms});pending=None
assert text is not None
current=Path('items/'+ID+'.md').read_bytes()
if text.encode()!=current:
 import difflib
 print(writes);print(''.join(difflib.unified_diff(text.splitlines(True),current.decode().splitlines(True)))[:5000])
assert text.encode()==current,'static reconstructed item differs from actual current item'
(B/'reconstructed-native-item.md').write_text(text)
d={'run':R,'id':ID,'kind':'diagnostic-static-reconstruction; NOT existing native-origin policy registration','native_log':{'path':str(logpath),'sha256':sha(logpath.read_bytes())},'source_writes':writes,'reconstructed_raw_sha256':sha(text.encode()),'matches_current_exactly':True,'important_status_limit':'One literal source correction executes in a compound command whose later precheck exits1. This report records that status honestly; no wholly-successful-command claim or existing replay-policy credit is invented.','log_code_executed':False,'origin_or_live_source_written':False}
(B/'static-reconstruction.json').write_text(json.dumps(d,indent=2)+'\n');print(json.dumps(d,indent=2))
