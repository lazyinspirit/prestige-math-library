#!/usr/bin/env python3
"""Independent line parser and ROOT-ONLY metadata proposal generator. No canonical writes."""
from pathlib import Path
import re,json,copy,hashlib,difflib,yaml
ROOT=Path(__file__).resolve().parent.parent.parent
PKG=Path(__file__).resolve().parent
RUN='numerical-optimization-dynamics-2026-10-16'
NEW='lem-sdc-sweep-work-and-storage-bound'
BASE=f'research/{RUN}-batch-95'

def load(relative):return json.loads((ROOT/relative).read_text())
def digest(data):return hashlib.sha256(data).hexdigest()
def source(relative):
    text=(ROOT/relative).read_text();match=re.match(r'^---\r?\n([\s\S]*?)\r?\n---\r?\n',text)
    if not match:raise ValueError('No frontmatter '+relative)
    return text,yaml.safe_load(match[1]),text[match.end():]
def sections(body):
    found={};name=None;lines=[]
    for line in body.splitlines(keepends=True):
        heading=re.match(r'^##\s+(.+?)\s*\n?$',line)
        if heading:
            if name is not None:found[name]=''.join(lines).strip()
            name=heading[1];lines=[]
        else:lines.append(line)
    if name is not None:found[name]=''.join(lines).strip()
    return found

def steps(body):
    result=[]
    for name,section in sections(body).items():
        if name not in ['Proof','Verification','Counterexample','Refutation']:continue
        current=None;parts=[]
        def finish():
            if current is None:return
            text=''.join(parts).rstrip()
            # Anchored at the END of the complete numbered paragraph. Never truncate internal [F#] references or formulas.
            match=re.search(r'((?:\s*\[[^\[\]]*\])+?)\s*(?:∎)?\s*$',text)
            if not match:raise ValueError('No final justification tags at '+current)
            groups=re.findall(r'\[([^\[\]]*)\]',match[1]);inputs=[x.strip()for group in groups for x in group.split(',')if x.strip()]
            result.append({'step':current,'claim':text[:match.start()].rstrip(),'inputs':inputs,'text':text})
        for line in section.splitlines(keepends=True):
            match=re.match(r'^(\d+\.\d+)\s+(.*)',line)
            if match:
                finish();current=match[1];parts=[line[match.start(2):]]
            elif current is not None:parts.append(line)
        finish()
    return result

def facts(body):
    result=[]
    for paragraph in re.split(r'\n\s*\n',sections(body).get('Facts & Assumptions','')):
        match=re.match(r'^\[([FAL]\d+)\]\s*([\s\S]*)$',paragraph.strip())
        if match:result.append((match[1],list(dict.fromkeys(re.findall(r'\[\[([^]|#]+)',paragraph)))))
    return result

def used(fact,step):return bool(re.search(r'\b'+re.escape(fact)+r'\b',step['text']))

def main():
    guards={};cache={};issues=[];operations=[];payloads={}
    def guard(relative):
        if relative not in guards:
            data=(ROOT/relative).read_bytes();guards[relative]=digest(data);dest=PKG/'before'/relative;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
    def get(id):
        if id not in cache:
            rel='items/'+id+'.md';guard(rel);text,fm,body=source(rel);cache[id]=(text,fm,body)
        return cache[id]
    def mirror(id,old):
        text,fm,body=get(id);actual=steps(body);contract=copy.deepcopy(old);oldrows={d['step']:(field,d)for field in ['derivations','routine_steps']for d in old.get(field,[])};newrows={'derivations':[],'routine_steps':[]}
        for st in actual:
            field,entry=oldrows.get(st['step'],('derivations',{'id':'step-'+st['step'].replace('.','-'),'step':st['step']}));entry=copy.deepcopy(entry);entry.update(claim=st['claim'],inputs=st['inputs']);newrows[field].append(entry)
        if actual or old.get('derivations')or old.get('routine_steps'):contract.update(newrows)
        cites=[];oldc={(c['fact'],c['source']):c for c in old.get('citations',[])}
        for fact,targets in facts(body):
            for target in targets:
                source_text,source_fm,source_body=get(target);source_sections=sections(source_body);prior=oldc.get((fact,target));section=prior.get('source_section')if prior else next((s for s in ['Statement','Definition','Example','Statement refuted','Remark']if s in source_sections),None)
                if not section or not source_sections.get(section):raise ValueError('Missing source section '+target)
                cite=copy.deepcopy(prior)if prior else{'fact':fact,'source':target,'source_section':section};cite.update(quote=source_sections[section],uses=[s['step']for s in actual if used(fact,s)])
                if not cite['uses']:issues.append({'id':id,'fact':fact,'source':target,'issue':'Actual unused fact, no proof use invented'})
                cites.append(cite)
        if cites or old.get('citations'):contract['citations']=cites
        if id==NEW:
            contract['boundaries']=[{'case':'empty','status':'not_applicable','reason':'Statement requires M,d>=1; it permits K=0 but no empty stage/state dimension.'},{'case':'zero','status':'checked','evidence':'Statement and step 1.1 explicitly count K=0 after M predictor calls, without residual test/accepted endpoint.'},{'case':'one','status':'checked','evidence':'Statement and steps 1.2/3.1 retain M,d>=1, including one stage or one coordinate; dense sums and buffers have the stated finite sizes.'},{'case':'degenerate','status':'checked','evidence':'Steps 1.1 and 2.1 count preliminary exits and an incomplete prefix without charging unexecuted calls.'},{'case':'endpoints','status':'checked','evidence':'Step 2.1 forms the accepted endpoint from the cached previous derivatives, with no added stage call.'},{'case':'nonempty-choice','status':'not_applicable','reason':'The proved counts use explicit finite loops, buffers and arithmetic; no choice axiom is introduced.'},{'case':'iff-forward','status':'not_applicable','reason':'Statement is a work/storage bound, not an equivalence.'},{'case':'iff-reverse','status':'not_applicable','reason':'Statement is a work/storage bound, not an equivalence.'}]
        return contract
    path=BASE+'.pages.json';guard(path);pages=load(path);proposed=copy.deepcopy(pages);apage=next(p for p in proposed if p['kind']=='A');newtext,newfm,newbody=get(NEW)
    if any(i['id']==NEW for p in proposed for i in p['items']):raise ValueError('New lemma already integrated; rebase proposal')
    position=next(i for i,x in enumerate(apage['items'])if x['id']=='alg-explicit-left-euler-sdc-sweep')+1
    alg=next(x for x in apage['items']if x['id']=='alg-explicit-left-euler-sdc-sweep');entry={'id':NEW,'kind':newfm['kind'],'title':newfm['title'],'deps':newfm.get('deps',[]),'justified_by':newfm.get('justified_by',[]),'dependency_level':alg['dependency_level']+1,'provenance':newfm['provenance'],'sources':newfm['sources']};apage['items'].insert(position,entry)
    ids=[]
    for page in proposed:
        for item in page['items']:
            id=item['id'];ids.append(id);fm=get(id)[1];item['deps']=fm.get('deps',[])
            if 'justified_by'in item or fm.get('justified_by'):item['justified_by']=fm.get('justified_by',[])
    payloads[path]=proposed;operations+=[{'op':'insert-existing-pair-item','file':path,'id':NEW,'after':'alg-explicit-left-euler-sdc-sweep'},{'op':'mirror-item-deps-and-justified-by','file':path,'ids':ids}]
    cp=BASE+'.proof-contracts.json';guard(cp);contracts=load(cp);newcontracts=copy.deepcopy(contracts);newcontracts['scope'].insert(newcontracts['scope'].index('alg-explicit-left-euler-sdc-sweep')+1,NEW)
    for id in ids:newcontracts['contracts'][id]=mirror(id,contracts.get('contracts',{}).get(id,{}))
    payloads[cp]=newcontracts;operations.append({'op':'mirror-current-contracts','file':cp,'ids':ids,'new_scope_after':'alg-explicit-left-euler-sdc-sweep'})
    coverage_path=BASE+'.coverage.json';guard(coverage_path);coverage=load(coverage_path);newcoverage=copy.deepcopy(coverage);a=next(x for x in newcoverage['pages']if x['page']==apage['id']);context=next(s for s in a['sources']if s.get('url')=='https://arxiv.org/pdf/1706.06245');context.setdefault('contents',[]).append({'name':'Local finite-budget SDC stage-call, cache/storage and direct-arithmetic accounting refinement','disposition':'included','item':NEW,'support':'Method context is the existing cited explicit-sweep equation. The exact finite-operation counts and K=0/early-exit/cached-endpoint distinctions are proved locally in the new lemma; no identical external theorem, new full-text reading or new acquisition is claimed.'})
    event={'item':NEW,'status':'source-applied-root-metadata-integration-proposal-not-native-acceptance','basis':f'research/{RUN}-owner-step2-b95-continuation/application-20261016T095932430993Z/completion-result.json','root_phase_authority':f'research/{RUN}-owner-step2-b95-continuation/application-20261016T095932430993Z/ROOT-phase-application','placement':'existing A-page and existing pair95; no new page/pair','source_reading':'No new source reading or acquisition; prior source reading records preserved verbatim.','classification':'Separate proved result supplies algorithm work/status properties; algorithm.justified_by retains this lemma, lemma.deps retains algorithm.'};newcoverage.setdefault('owner_local_additions',[]).append(event);payloads[coverage_path]=newcoverage;operations.append({'op':'append-local-proof-coverage','file':coverage_path,'item':NEW,'preserve_existing_reading_history':True})
    # Current A/B page placement is context, not another source write.
    for file in ['library/numerical-differential-equations-and-stochastic-dynamics/deferred-correction-and-collocation-iterations.md','library/numerical-differential-equations-and-stochastic-dynamics/deferred-correction-and-collocation-iterations-examples.md'] :guard(file)
    evidence=f'research/{RUN}-owner-step2-b95-continuation/application-20261016T095932430993Z/completion-result.json';guard(evidence)
    for p in (ROOT/f'research/{RUN}-owner-step2-b95-continuation/application-20261016T095932430993Z/ROOT-phase-application').glob('*json'):guard(str(p.relative_to(ROOT)))
    patch=[];rows=[]
    for relative,obj in payloads.items():
        data=(json.dumps(obj,indent=2,ensure_ascii=False)+'\n').encode();dest=PKG/'proposed'/relative;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data);rows.append({'path':relative,'before_raw_sha256':guards[relative],'proposed_raw_sha256':digest(data)});patch.extend(difflib.unified_diff((ROOT/relative).read_text().splitlines(True),data.decode().splitlines(True),fromfile=relative,tofile='proposed/'+relative))
    (PKG/'proposal.diff').write_text(''.join(patch));(PKG/'operations.json').write_text(json.dumps({'version':1,'operations':operations},indent=2)+'\n');(PKG/'proposal.json').write_text(json.dumps({'version':1,'run':RUN,'batch':'95','status':'root-only-prepared-not-applied','new_item':NEW,'manifest_before_items':sum(len(p['items'])for p in pages),'manifest_after_items':len(ids),'new_pairs':0,'new_pages':0,'guards':[{'path':p,'raw_sha256':s}for p,s in guards.items()],'payloads':rows,'issues':issues,'preserved_history':'All original coverage reading/acquisition/owner_local_repair records retained. Original native application remains escalate because phase fix was pending then; root later phase authority is separate, not rewritten.','source_writes':False,'mathematical_review_performed':False},indent=2)+'\n');print(json.dumps({'payloads':list(payloads),'items':len(ids),'guards':len(guards),'issues':issues},indent=2))
if __name__=='__main__':main()
