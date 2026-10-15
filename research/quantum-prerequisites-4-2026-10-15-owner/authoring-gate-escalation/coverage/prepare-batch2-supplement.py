import pathlib,json,shutil,hashlib,copy
out=pathlib.Path('research/quantum-prerequisites-4-2026-10-15-owner/authoring-gate-escalation/coverage');run='quantum-prerequisites-4-2026-10-15';name=f'{run}-batch-2.coverage.json';live=pathlib.Path('research')/name
sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
shutil.copyfile(live,out/'before'/name);d=json.loads(live.read_text());assert len(d['pages'])==1
ex='ex-anisotropic-real-norm-on-c'; ss=[]
for idx,orig in enumerate(d['pages'][0]['sources']):
 s=copy.deepcopy(orig)
 s['locator']='PDF p. 1, Definition 1.1, norm axioms over K=R or C.' if idx==0 else 'Chapter 1 §1.2, printed p. 11, Definition 1.10: norm on a vector space over K; introductory convention K=R or C.'
 s['contents']=[dict(name='Definition 1.1: norm axioms with homogeneity for every scalar in the chosen field' if idx==0 else 'Definition 1.10: separation, absolute homogeneity, and triangle inequality',disposition='inline',item=ex,support='These are the general norm tests used via the real and complex norm definitions. The original local function N(x+iy)=|x|+2|y| is checked against all real norm axioms in steps 1.1, 1.2, and 2.1. Step 3.1 tests the stronger complex-homogeneity clause at lambda=i,z=1 and obtains 2≠1. Neither the exact weighted function nor that particular counterexample is attributed to this source.')]
 s['reading_verification']='Read the actual norm definition from the retained complete lecture notes. This independent treatment supplies the scalar-field-dependent norm axioms; the weighted coordinate construction and its calculations are original and proved locally, not presented as a source example.'
 s['fetch_evidence_origin']=f'Existing genuine A-page source record in research/{name}; identical URL and historical stamp reused as document evidence, not a new stamp.'
 if idx==1:
  s['cached_pdf']=str(out/'sources/winklmeier.pdf');s['cached_text']=str(out/'sources/winklmeier.txt')
 ss.append(s)
d['pages'].append(dict(page='complex-norms-and-realification-examples',kind='B',order=248.11,sources=ss,canonical=[dict(name='Original anisotropic real norm on C that fails complex homogeneity',disposition='included',item=ex,support='An original local example specializing the general source norm axioms: verify separation, real homogeneity, and triangle inequality for |x|+2|y|, then calculate N(1)=1,N(i)=2,|i|=1. The real norm proof and explicit scalar countertest remain fully local; neither source is claimed to contain this exact formula.')]))
target=out/name;target.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
manifest=pathlib.Path('research')/name.replace('.coverage.json','.pages.json');shutil.copyfile(manifest,out/manifest.name)
p=out/'patch-manifest.json';m=json.loads(p.read_text());m['files'].append(dict(target=str(live),before_file=str(out/'before'/name),before_sha256=sha(live),proposed_file=str(target),proposed_sha256=sha(target),context_manifest=str(out/manifest.name),context_manifest_sha256=sha(manifest),reason='Owner-requested supplemental explicit B companion harvest; coverage2 did not fail the original native battery.'))
m['files'].sort(key=lambda f:f['target']);p.write_text(json.dumps(m,indent=2)+'\n')
print(sha(target))
