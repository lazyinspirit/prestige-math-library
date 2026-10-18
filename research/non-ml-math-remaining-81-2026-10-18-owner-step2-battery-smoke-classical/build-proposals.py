import json,hashlib,pathlib
base=pathlib.Path('research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-smoke-classical')
assignment=json.loads(pathlib.Path('research/non-ml-math-remaining-81-2026-10-18-owner-step2-first-battery-failures/finite-smoke-assignment-classical.json').read_text())
starts=['2.1 Apply step 1.1','2.1 Assume now','3.1 For each','2.2 Fix a positive-probability','3.1 If $h=0$','1.1 Partition the coordinates','1.1 Applying the longest','1.2 For the Markov source']
steps=['Proof step 2.1','Proof steps 1.1, 2.1, 3.1','Proof step 3.1','Proof steps 1.1, 2.1, 2.2','Proof step 3.1; def-lz77-previous-match-phrase-length Definition','Verification steps 1.1, 2.1','Verification steps 1.1, 3.1; alg-lz78-incremental-prefix-code Definition','Verification steps 1.1, 1.2']
restrictions=[
'Fixed p/q fixtures (1)/(1/2), (1)/(1), (1,0)/(1/2,1/2), (1/2,1/2)/(1/4,1/4), (3/4,1/4)/(1/2,1/2); positive-on-support references, total reference mass <=1; t in {1/8,1/2,1,2,8}.',
'Fixed binary words (0,1) and (0,10), with p=(1/2,1/2) and (3/4,1/4), respectively; singleton p=(1), empty codeword; finite Kraft/entropy only.',
'Stationary symmetric binary Markov laws, uniform initial marginal; switch probabilities 0,1/4,1/2,1 and n=1..10; enumerate all 2^n words. Check finite remainder, not asymptotic convergence.',
'Fair IID binary product laws; past lengths k=0..4, future block lengths n=1..6, all 2^(k+n) joint atoms. Check finite-past conditional factorization, not construction or convergence given infinite past.',
'Singleton alphabet constant two-sided sequence, n=1..64 and positive offsets 1..8, h=0. No inverse 1/h conclusion.',
'First three blocks only: lengths 4,16,256; deterministic odd blocks and fair IID even block. Coordinate entropies and all 2^16 positive-probability endpoint atoms. No asymptotic conclusion.',
'Exact authored word 0100101001 and every binary word of lengths 0..8; initial empty-root dictionary, explicit # outside alphabet, longest dictionary prefix, stop with no terminal insertion. Record parse/decode only, not binary serialization.',
'Fair IID and uniform-initial symmetric 1/4-switch binary Markov laws, block length n=4, enumerate 16 words per law; finite entropy/normalized entropy and stationary marginal only.'
]
patches=[]
for row,start,step,restriction in zip(assignment['rows'],starts,steps,restrictions):
    source=pathlib.Path(row['source']).read_text()
    line=next(x for x in source.splitlines() if x.startswith(start))
    # Exact excerpt retaining mathematical formulas, without step prefix or citation tags.
    excerpt=line[4:].split(' [F')[0]
    # Capture a concise complete assertion for long steps.
    if row['id']=='lem-infinite-past-conditional-block-information-rate':
        excerpt='Therefore, almost surely on the realized block, $$q_{k,n}(X_0^{n-1})=\\prod_{i=0}^{n-1}p_{k+i}(X_i).$$'
    if row['id']=='thm-lz77-phrase-length-entropy-rate':
        excerpt='If $h=0$, the lower tail below $h-\\varepsilon$ is impossible because $R_n\\ge1$.'
    assert excerpt in source
    contract=json.loads(pathlib.Path(row['contract']).read_text())
    current=contract['contracts'][row['id']]['finite_smoke']
    assert current==row['finite_smoke']
    after=[dict(s) for s in current]
    after[0].update(asserts=excerpt,checked_in=step,finite_restriction=restriction)
    patches.append({'id':row['id'],'contract':row['contract'],'path':['contracts',row['id'],'finite_smoke'],'guard':{'equals':current},'replacement':after,'source':row['source'],'source_raw_sha256':hashlib.sha256(source.encode()).hexdigest(),'reason':'Preserve check name and intended finite obligation; replace paraphrase with exact current source assertion and state fixed finite restriction. No mathematical item change.'})
(base/'row-patches.json').write_text(json.dumps({'version':1,'run':assignment['run'],'scope':'classical eight finite-smoke rows only','patches':patches},indent=2)+'\n')
