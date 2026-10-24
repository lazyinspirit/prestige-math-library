// Root exact current public-mirror locations and stale-readiness disposition.
// No source edits, proof acceptance, native results, or gates.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {readRunManifestPages} from '../../../../tools/physics-support/run-manifest-pages.mjs';
import {readItem} from '../../../../tools/physics-support/physics-content.mjs';
import {SOURCE_SECTIONS,sourceSectionText,sectionText,splitFrontmatter} from '../../../../tools/physics-support/facts-block.mjs';
import {loadStep1Record} from '../../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision,checkStep1} from '../../../../tools/physics-support/step1-decisions.mjs';
const run='advanced-qft-supersymmetry-build-2026-10-23',dir=`research/${run}-owner-resolution/step2-root-metadata-v1`,sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const pages=readRunManifestPages(process.cwd(),run),snapshot=loadStep1Record(process.cwd(),run),ready=checkStep1(snapshot);
if(!process.argv.includes('--write')||!ready.closed||ready.ready!==453||pages.length!==142)throw Error('Root write with full current closed frontier required');
const canonical={definition:'Definition',algorithm:'Definition',theorem:'Statement',lemma:'Statement',proposition:'Statement',corollary:'Statement','physics-theorem':'Statement','thought-experiment':'Statement',example:'Example',counterexample:'Statement refuted','false-statement':'Statement','open-problem':'Open problem',postulate:'Postulate',remark:'Remark'};
const mappings={},counts={canonical:0,exact_excerpts:0,optional_experiments:0};
for(const page of pages)for(const item of page.items){
 const raw=fs.readFileSync(`items/${item.id}.md`),source=readItem(`items/${item.id}.md`),body=splitFrontmatter(raw.toString()).body,expected=item.statement?.trim();
 if(!expected&&source.kind==='experiment'){counts.optional_experiments++;continue;}
 if(!expected)throw Error('Missing statement '+item.id);
 const heading=canonical[source.kind],text=heading?(SOURCE_SECTIONS.has(heading)?sourceSectionText(body,heading):sectionText(body,heading)).trim():null;
 if(text===expected){counts.canonical++;continue;}
 const sections=source.kind==='experiment'?['Observations']:[heading,...Object.values(canonical)].filter((v,i,a)=>v&&a.indexOf(v)===i),matches=[];
 for(const section of sections){const text=(SOURCE_SECTIONS.has(section)?sourceSectionText(body,section):sectionText(body,section)).trim(),bytes=Buffer.from(text),needle=Buffer.from(expected),start=bytes.indexOf(needle);if(start>=0&&bytes.indexOf(needle,start+1)<0)matches.push({section,text,start,end:start+needle.length});}
 if(matches.length!==1)throw Error('No unique public-section excerpt '+item.id+' '+matches.length);
 const match=matches[0];mappings[item.id]={item:item.id,field:'statement',reviewer:'/root',mode:'exact-excerpt',source_sha256:sha(raw),manifest_statement_sha256:sha(expected),source_section:match.section,source_section_sha256:sha(match.text),start_byte:match.start,end_byte:match.end,reason:'Root binds the preserved literal manifest excerpt to its unique exact current public source section. Full source and applicable required sections remain subject to ordinary metadata/schema checks; no scientific or empirical acceptance is implied.'};counts.exact_excerpts++;
}
const file=`research/${run}-batch-71.cross-batch-dependencies.json`,rows=JSON.parse(fs.readFileSync(file)),changes=[];
for(const row of rows.filter(r=>r.status==='open')){
 const ids=row.kind==='item'?[row.supplier]:pages.find(p=>p.id===row.supplier)?.items.map(i=>i.id);
 if(!ids?.length||ids.some(id=>!step1Decision(snapshot,id).closed))throw Error('Still-open supplier '+row.supplier);
 changes.push({consumer:row.consumer,supplier:row.supplier,previous_evidence:row.evidence,current_supplier_records:ids.map(id=>({id,path:`research/${run}-step1-${id}.json`,sha256:sha(fs.readFileSync(`research/${run}-step1-${id}.json`))}))});
 row.status='verified';row.evidence+=' Root subsequent disposition: the completed current-authoring-readiness.json refresh now closes all exact current supplier records after the admitted source repairs and completed native authoring. The native author\'s actual full-proof/interface checks above are retained; this closes only the stated stale-readiness blocker and supplies no independent proof acceptance or native gate coverage.';
}
fs.writeFileSync(file,JSON.stringify(rows,null,2)+'\n');
fs.writeFileSync(`${dir}/current-public-mappings.json`,JSON.stringify({run,reviewer:'/root',at:new Date().toISOString(),counts,statementMirrors:mappings},null,2)+'\n');
fs.writeFileSync(`${dir}/batch71-readiness-disposition.json`,JSON.stringify({run,reviewer:'/root',at:new Date().toISOString(),kind:'current scoped stale-readiness closure only',current_ready:ready.ready,changes,native_gate:false,independent_acceptance:false},null,2)+'\n');
if(changes.length)fs.appendFileSync(`research/${run}-batch-71.notes.md`,'\n## Root current-readiness disposition\n\nThe historical author findings above are preserved. Root completed the guarded source repair and native-author metadata admissions, then refreshed the actual current source/dependency readiness bindings for the full 453-item frontier. The three remaining cross-batch rows now have current ready suppliers, so their stale-readiness-only holds are closed. Exact current record hashes and prior findings are retained in `'+dir+'/batch71-readiness-disposition.json`. This uses the native author\'s recorded interface inspections; it does not assert a fresh independent proof audit or native gate pass. Ordinary preparation and the full native battery remain required.\n');
console.log(JSON.stringify({items:453,pages:pages.length,counts,closed_cross_batch:changes.length}));
