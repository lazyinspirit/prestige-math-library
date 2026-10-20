from pathlib import Path
import json,hashlib,subprocess,tempfile
r='machine-learning-all-101-2026-10-19';base=Path('research/'+r+'-owner-reader80-foreign-routing/your-proposal');review=Path('research/'+r+'-owner-reader80-foreign-routing-review');sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest();freeze=json.load(open(base/'review-freeze.json'))
for p,h in freeze['files'].items():assert sha(p)==h,p
ops=json.load(open(base/'source-operations.json'))
for o in ops['operations']:
 raw=Path(o['path']).read_text();assert sha(o['path'])==o['before_raw_sha256'];candidate=raw
 for e in o['exact_unique_operations']:assert candidate.count(e['before'])==1;candidate=candidate.replace(e['before'],e['after'],1)
 assert hashlib.sha256(candidate.encode()).hexdigest()==o['proposed_raw_sha256'];assert candidate==(base/o['path']).read_text()
result=subprocess.run(['node','--test',str(base/'foreign-reader-routes.test.mjs')],capture_output=True,text=True);assert result.returncode==0,result.stdout+result.stderr;(review/'author-frozen-tests-independent-output.txt').write_text(result.stdout+result.stderr)
s=(base/'foreign-reader-routes.test.mjs').read_text();s=s.replace("base=path.dirname(new URL(import.meta.url).pathname)","base="+json.dumps(str(base.resolve())))
# Add reviewer-owned mutation cases to a temporary copy; frozen author files are untouched.
s+=r'''
for(const[name,mutate,pattern]of [
 ['cross-run authority',f=>{f.e.run='other'},/invalid owner authority/],
 ['failed genuine native result',f=>{const v=JSON.parse(fs.readFileSync(path.join(f.r,f.e.native_result.path)));v.ok=false;f.e.native_result=f.ref(f.e.native_result.path.slice('research/r-'.length),v)},/not genuine successful reader/],
 ['changed native structured completion',f=>{const v=JSON.parse(fs.readFileSync(path.join(f.r,f.e.native_result.path)));v.tail=JSON.stringify({batch:'1',findings:[],coverage_note:'Dropped native flag'});f.e.native_result=f.ref(f.e.native_result.path.slice('research/r-'.length),v)},/native structured completion differs/],
 ['origin post invents foreign source',f=>{const v=JSON.parse(fs.readFileSync(path.join(f.r,f.e.origin_post.path)));v.manifest.push('lem-supplier');f.e.origin_post=f.ref('step3-hash-1-post.json',v)},/invented assigned consumer\/source/],
 ['cross-run archived repair source',f=>{const v=fs.readFileSync(path.join(f.r,f.e.source_before.path),'utf8').replace('pipeline_run: r','pipeline_run: other');f.e.source_before=f.ref('archive/cross-run-before.md',v)},/archive not original current-run draft/],
 ['published archived repair source',f=>{const v=fs.readFileSync(path.join(f.r,f.e.source_before.path),'utf8').replace('status: draft','status: published');f.e.source_before=f.ref('archive/published-before.md',v)},/archive not original current-run draft/],
 ['changed typed consumer review hash',f=>{const v=JSON.parse(fs.readFileSync(path.join(f.r,f.e.owner_review.path)));v.consumer_source_sha256='0'.repeat(64);f.e.owner_review=f.ref('archive/changed-consumer-review.json',v)},/missing actual owner proof\/consumer record/],
 ['cross-run evidence path',f=>{f.e.source_after={path:'research/other-after.md',sha256:f.e.source_after.sha256}},/invalid evidence reference/],
 ['symlink evidence',f=>{const p=path.join(f.r,'research/r-archive/symlink-source.md');fs.symlinkSync(path.join(f.r,f.e.observed_source.path),p);f.e.observed_source={path:'research/r-archive/symlink-source.md',sha256:f.e.observed_source.sha256}},/symlink evidence/],
 ['duplicate origin index',f=>{f.e.index=Number.MAX_SAFE_INTEGER+1},/invalid foreign identities/],
])test('independent reject '+name,t=>{const f=fixture(t);mutate(f);f.save();assert.throws(()=>api.loadForeignReaderRoutes(f.r,f.run),pattern)});
test('independent changed exact route binding rejected',t=>{const f=fixture(t),x=f.finding();api.bindForeignReaderFinding(f.r,f.run,'1',x,f.current);x.owner_foreign_reader_route.entry_sha256='0'.repeat(64);assert.throws(()=>api.validateForeignReaderFinding(f.r,f.run,'1',x,f.current),/lost exact foreign reader binding/)});
test('independent invented assigned-root path rejected',t=>{const f=fixture(t),x=f.finding();api.bindForeignReaderFinding(f.r,f.run,'1',x,f.current);x.dependency_path[0].id='lem-own';assert.throws(()=>api.validateForeignReaderFinding(f.r,f.run,'1',x,f.current),/changed dependency_path/)});
test('independent refuter cannot reuse pre observation',t=>{const f=fixture(t),x={...f.finding(),obligation:'refuter:1:1',owner_foreign_reader_obligation:'reader:1:1',observed_source:{snapshot:'pre',item_sha256:f.current.item_sha256}};assert.throws(()=>api.bindForeignReaderFinding(f.r,f.run,'1',x,f.current),/changed reader\/refuter observed source/)});
'''
# Repeat the native setup with no registered route: ordinary rejection must survive.
start=s.index("test('staged native CLI split and collect preserve original foreign reader and propagate independent refuter'")
end=s.index("\nfor(const[name,mutate,pattern]",start)
native=s[start:end].replace('staged native CLI split and collect preserve original foreign reader and propagate independent refuter','independent native CLI unregistered foreign case still rejected')
needle="const original=fs.readFileSync(path.join(f.r,'research/r-reader-findings-1.json'),'utf8');ok('split','--run','r','--batch','1');"
assert native.count(needle)==1
native=native.replace(needle,"fs.unlinkSync(path.join(f.r,'research/r-step3-owner-foreign-reader-routes.json'));const rejected=cli('split','--run','r','--batch','1');assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/out-of-scope|assigned consumer|outside|scope/i);return;"+needle)
s+=native
with tempfile.TemporaryDirectory(prefix='reader80-review-') as tmp:
 p=Path(tmp)/'independent-mutations.test.mjs';p.write_text(s);out=subprocess.run(['node','--test',str(p)],capture_output=True,text=True)
 (review/'independent-mutations-output.txt').write_text(out.stdout+out.stderr);assert out.returncode==0,out.stdout+out.stderr
for p,h in freeze['files'].items():assert sha(p)==h,'frozen file mutated '+p
print('Frozen author16 tests and additional14 reviewer cases pass; zero live code/registry/gate writes.')
