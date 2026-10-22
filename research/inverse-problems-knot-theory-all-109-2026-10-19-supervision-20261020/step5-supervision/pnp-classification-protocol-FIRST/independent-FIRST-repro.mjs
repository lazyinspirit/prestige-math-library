// Run from the frozen candidate integration shadow; no repository mutations.
const {createPnpMigrationFixture}=await import(process.cwd()+'/tools/step5-pnp-classification-migration.test.mjs');
const {previewPnpClassificationMigration,PNP_RUN:run,PNP_OLD:old}=await import(process.cwd()+'/tools/step5-pnp-classification-migration.mjs');
for(const defect of ['wrong-native-covers','wrong-prompt-output','missing-final-blocker','request-before-dispatch-end','duplicate-manifest-owner']){
 const f=createPnpMigrationFixture();try{
 const npath=`research/${run}-dispatch/alpha-adjudicate-step5-v2-repeat-r1-u49.result.json`,n=f.get(npath);
 if(defect==='wrong-native-covers'){n.covers=['999'];f.put(npath,n);f.put(npath.replace('.result.json','.attempt-1.result.json'),n);}
 if(defect==='wrong-prompt-output')f.put(n.prompt,`run: ${run}\ninput_sha256:"${f.get(`${f.d}/step5-v2-repeat-r1-u49.json`).input_sha256}"\noutput: research/other.json`);
 if(defect==='missing-final-blocker'){const r=f.get(`${f.d}/step5-v2-repeat-r1-u49.json`);f.put(n.log,`blocked_by_reclassification_scope ${old}\n\ncodex\n${JSON.stringify({run,phase:'repeat',round:1,unit:'49',input_sha256:r.input_sha256,decisions:[{id:old,outcome:'false_positive'}],reviews:[]})}\ntokens used\n10\n`);}
 if(defect==='request-before-dispatch-end'){const p=`.autopilot/${run}/owner-gate-request.json`,q=f.get(p);q.at='2026-10-20T23:02:00Z';f.put(p,q);}
 if(defect==='duplicate-manifest-owner')f.put(`research/${run}-batch-50.pages.json`,[{id:'other',items:[{id:old,kind:'definition'}]}]);
 try{previewPnpClassificationMigration(f.root,run,f.authorization);console.log(defect+': ACCEPTED');}catch(e){console.log(defect+': REJECTED '+e.message);}
 }finally{f.cleanup();}
}
