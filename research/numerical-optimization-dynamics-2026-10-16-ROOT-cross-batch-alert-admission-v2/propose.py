import pathlib,difflib,json
base=pathlib.Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-cross-batch-alert-admission-v2')
p=pathlib.Path('tools/step5-reader-concerns.mjs');before=p.read_text();after=before;ops=[]
def edit(old,new):
 global after
 if after.count(old)!=1: raise ValueError(old)
 after=after.replace(old,new,1);ops.append({'before':old,'after':new,'occurrences':1})
edit("need(row.version===1&&row.kind===", "need([1,2].includes(row.version)&&row.kind===")
edit("  const ids=new Set(),entries=[];", """  // V2 is an explicit typed-source opt-in. V1 retains its original own-batch
  // concern path and its exact checks below.
  if(row.version===2)need(state.paused===true,'v2 admission requires a paused, drained boundary');
  const ids=new Set(),entries=[];""")
edit("    const digestPath=join(root,'research',`${run}-batch-${batch}-step5-context.json`),document=bound(digestPath);\n    const readerPath=join(dispatchDir,`alpha-batch-read-${batch}.result.json`),reader=bound(readerPath);", """    const v2=row.version===2,alert=v2&&entry.source_kind==='alert';
    const readerBatch=v2?entry.reader_batch:batch;
    if(v2){
      need(['concern','alert'].includes(entry.source_kind)&&typeof readerBatch==='string'
        &&frontier.batches.some(value=>value.id===readerBatch)
        &&(alert?readerBatch!==batch:readerBatch===batch), 'invalid v2 reader source identity');
      need(alert?!Object.hasOwn(entry,'concern')&&!Object.hasOwn(entry,'concern_index')
        :!Object.hasOwn(entry,'alert')&&!Object.hasOwn(entry,'alert_index'), 'ambiguous v2 finding fields');
      // A frozen owner alone is insufficient if current manifests duplicate it.
      const prefix=`${run}-batch-`,owners=[];
      for(const name of readdirSync(join(root,'research')).filter(name=>name.startsWith(prefix)
        &&/^\\d+\\.pages\\.json$/.test(name.slice(prefix.length)))){
        const rows=bound(join(root,'research',name));
        need(Array.isArray(rows),'invalid current run manifest');
        for(const page of rows)for(const value of page.items??[])if(value.id===id)
          owners.push(name.slice(prefix.length).split('.')[0]);
      }
      need(owners.length===1&&owners[0]===batch,'v2 current manifest ownership is not unique');
    }
    const digestPath=join(root,'research',`${run}-batch-${readerBatch}-step5-context.json`),document=bound(digestPath);
    const readerPath=join(dispatchDir,`alpha-batch-read-${readerBatch}.result.json`),reader=bound(readerPath);""")
edit("reader.label===batch&&reader.ok===true", "reader.label===readerBatch&&reader.ok===true")
edit("JSON.stringify(reader.covers)===JSON.stringify([batch])", "JSON.stringify(reader.covers)===JSON.stringify([readerBatch])")
edit("    const stem=join(dispatchDir,`alpha-batch-read-${batch}.attempt-${reader.attempt}`);", "    const stem=join(dispatchDir,`alpha-batch-read-${readerBatch}.attempt-${reader.attempt}`);")
edit("    need(hash(reader)===hash(attempt)&&hash(document)===hash(output)&&document.batches?.includes(batch)\n      &&document.items_read?.includes(id)&&Number.isSafeInteger(concern_index)&&concern_index>=0\n      &&document.concerns?.[concern_index]?.id===id&&hash(document.concerns[concern_index])===hash(entry.concern),\n      'original structured reader concern mismatch');", """    need(hash(reader)===hash(attempt)&&hash(document)===hash(output)&&document.batches?.includes(readerBatch),
      'original structured reader output mismatch');
    if(alert){
      need(Number.isSafeInteger(entry.alert_index)&&entry.alert_index>=0
        &&document.alerts?.[entry.alert_index]?.item===id
        &&hash(document.alerts[entry.alert_index])===hash(entry.alert)
        &&typeof entry.alert.finding==='string'&&entry.alert.finding.trim().length>0,
        'original structured cross-batch alert mismatch');
    }else need(document.items_read?.includes(id)&&Number.isSafeInteger(concern_index)&&concern_index>=0
      &&document.concerns?.[concern_index]?.id===id&&hash(document.concerns[concern_index])===hash(entry.concern),
      'original structured reader concern mismatch');
    if(v2)need(date(reader.started_at)&&date(reader.ended_at)
      &&Date.parse(reader.started_at)<=Date.parse(reader.ended_at)
      &&reader.process_exit_code===0&&reader.exit_code===0&&reader.timed_out===false
      &&reader.terminal_summary?.task_completed===true&&reader.terminal_summary.task_aborted===false
      &&reader.terminal_summary.final_response_present===true&&reader.terminal_summary.error_events===0,
      'incomplete v2 native reader execution');""")
anchor="    need(review?.reviewed_by==='root'"
new="""    if(alert){
      const observation=entry.source_observation,continuity=entry.source_continuity;
      need(observation&&continuity&&typeof observation.command_output_prefix==='string'
        &&typeof observation.source_excerpt==='string'&&observation.source_excerpt.length>=20
        &&typeof continuity.source_file==='string','missing actual cross-batch source observation');
      const boundText=file=>{const p=resolve(root,file);need(Object.hasOwn(evidence,p),`missing binding: ${file}`);return readFileSync(p,'utf8');};
      const original=boundText(continuity.source_file),logPath=`${stem}.log`,promptPath=`${stem}.prompt.md`;
      need(resolve(root,reader.log??'')===logPath&&resolve(root,reader.prompt??'')===promptPath,
        'wrong original reader log or prompt');
      const log=boundText(logPath),prompt=boundText(promptPath),prefix=observation.command_output_prefix;
      // Narrow route: a successful original cat read whose full returned carrier
      // is actually in the native log, rather than inferred items_read coverage.
      need(prefix.startsWith(`exec\\n/bin/bash -lc "cat items/${id}.md`)
        &&/\\n succeeded in \\d+ms:\\n$/.test(prefix)&&log.includes(prefix+original.trimEnd())
        &&prompt.includes('run: '+run+'\\nrole: alpha-batch-read')&&prompt.includes('batch **'+readerBatch+'**, run'),
        'missing literal successful source read in original native dispatch');
      const excerpt=observation.source_excerpt;
      need(original.includes(excerpt)&&text.includes(excerpt)
        &&[["'","'"],['"','"'],['“','”'],['‘','’']].some(([a,b])=>entry.alert.finding.includes(a+excerpt+b)),
        'alert must retain its original literal source quotation');
      const snapshotRelative=`research/${run}-step3-hash-${batch}-post-3a.json`;
      const snapshotPath=join(root,snapshotRelative),snapshot=bound(snapshotPath);
      const closure=bound(join(root,'research',`${run}-step3-closure.json`));
      need(snapshot.version===2&&snapshot.run===run&&snapshot.batch===batch&&snapshot.label==='post-3a'
        &&snapshot.manifest?.filter(value=>value===id).length===1
        &&snapshot.hashes?.[id]?.item_sha256===hash(original)
        &&itemHashGuard(original)===baseline[id]
        &&closure.version===3&&closure.basis==='dependency-ordered-step3a'
        &&closure.run===run&&closure.status==='closed'&&date(closure.closed_at)
        &&Date.parse(closure.closed_at)<=Date.parse(reader.started_at)
        &&closure.artifacts?.[snapshotRelative]===evidence[snapshotPath]
        &&closure.final_item_hashes?.[id]===baseline[id],
        'cross-batch source lacks exact frozen Step-3-to-current continuity');
    }
"""+anchor
edit(anchor,new)
edit("    entries.push({...entry,digest_path:digestPath});", """    entries.push({...entry,...(v2?{source_kind:entry.source_kind,reader_batch:readerBatch}:{}),digest_path:digestPath});""")
(base/'preimages'/'step5-reader-concerns.mjs').write_text(before);(base/'proposed'/'step5-reader-concerns.mjs').write_text(after)
(base/'step5-reader-concerns.diff').write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='tools/step5-reader-concerns.mjs',tofile='tools/step5-reader-concerns.mjs')))
wp=pathlib.Path('WORKFLOW.md');wb=wp.read_text();needle='The first ordinary 5.2 pack unions these explicit concern subjects with real\n'
addition='''Version 2 is an explicit opt-in under the same admission kind and retains every
version-1 frozen-frontier, original accepted-Luna, baseline/current-draft,
initial-native-handoff, owner-confirmation, proposed-edit and pre-impact guard.
It requires a paused drained boundary, all current run manifests bound and a
unique current owner. Each entry supplies typed `source_kind: concern` or
`source_kind: alert` and `reader_batch` separately from owning `batch`.
Concern entries retain the version-1 `concern_index`/`concern` fields and must
come from the owning batch with actual `items_read` membership. Alert entries
must come from a different genuine frozen reader batch, retain zero-based
`alert_index` and the exact original `alert` object with `item: id`, and must
not also supply concern fields. They never imply or alter `items_read`.

The narrow alert route requires the successful original Sol 6.1 medium stable
result to match its immutable attempt, its exact structured output to match the
actual source digest, and a complete unaborted successful terminal result.
`source_observation` records a bound native log/prompt and an exact
`command_output_prefix` for a successful original `cat items/ID.md` read whose
full returned source carrier occurs literally in that log. Its `source_excerpt`
must be a literal quoted passage in the original alert finding and occur in both
that archived source and the unchanged current source. Nonquoting or incomplete
observations do not qualify for this narrow route. `source_continuity.source_file`
is that exact full source archive, bound in the admission; its raw hash must match
the owning batch's original post-3a snapshot. The bound original version-3
Step-3 closure must seal that snapshot, predate the reader, and bind the same
canonical guard as the archive, frozen Step-5 baseline and unchanged current
source. These checks authenticate an actual observation; they invent no past
read, cross-batch coverage or mathematical acceptance. Original alerts stay in
their actual source digest and are never cloned into an owning digest.

Native impact targets and same-reviewer ownership remain keyed only by `id`;
the preserved typed finding and actual `reader_batch` travel in the ordinary
owner pack. Owner repairs, any consequent supplier/consumer duties, current
certification and judgments, source currency and every ordinary gate remain owed.
When installing this adapter at a drained paused boundary, restart the native
controller and any workflow host in fresh processes before resuming: the workflow
statically imports this module, so reloading only a queried workflow URL cannot
invalidate its already cached reader-admission dependency. Do not rewrite frozen
packs or native history to load new code.

'''
if wb.count(needle)!=1:raise ValueError('workflow anchor')
wa=wb.replace(needle,addition+needle,1)
(base/'preimages'/'WORKFLOW.md').write_text(wb);(base/'proposed'/'WORKFLOW.md').write_text(wa)
(base/'WORKFLOW.diff').write_text(''.join(difflib.unified_diff(wb.splitlines(True),wa.splitlines(True),fromfile='WORKFLOW.md',tofile='WORKFLOW.md')))
proposal={'version':1,'research_only':True,'status':'not-installed-not-tested','canonical_edits':False,'guards':[{'path':str(p),'before_file':str(base/'preimages'/p.name),'successor_file':str(base/'proposed'/p.name),'guard':'exact full preimage bytes; abort on any mismatch','operations':ops},{'path':str(wp),'before_file':str(base/'preimages'/wp.name),'successor_file':str(base/'proposed'/wp.name),'guard':'exact full preimage bytes; abort on any mismatch','operations':[{'before':needle,'after':addition+needle,'occurrences':1}]}],'hashes_computed':False,'tests_run':False,'gates_run':False,'native_dispatches_run':False,'history_rewritten':False,'prepareImpact_writeTasks':'Inspected: both consume entry identity via row.id and preserve complete entry JSON in reader_concerns. Existing owner mapping is id to native lane; source reader_batch is never used as an owner lane. No code adaptation is necessary.','validation_owed':'Root review, explicit installation after writers drain, native fresh-process reload, focused automated tests and full ordinary native validation. No validation success is claimed.'}
(base/'proposal.json').write_text(json.dumps(proposal,indent=2)+'\n')
