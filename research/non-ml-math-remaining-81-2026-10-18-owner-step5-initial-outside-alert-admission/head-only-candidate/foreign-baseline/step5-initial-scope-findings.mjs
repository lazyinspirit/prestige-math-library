diff --git a/tools/step5-initial-scope-findings.mjs b/tools/step5-initial-scope-findings.mjs
index f801b0ed8a..e23fe19066 100644
--- a/tools/step5-initial-scope-findings.mjs
+++ b/tools/step5-initial-scope-findings.mjs
@@ -104,18 +104,43 @@ function validate(root,run,row,{requireCollection=true,virtual=new Map()}={}) {
       &&['fatal','nonfatal'].includes(finding.severity)&&finding.uncertain===false
       &&(!Object.hasOwn(finding,'status')||finding.status==='open')&&entry.route==='frontier-owner'
       &&(['frontier-owner','Owner / owning frontier lane; item outside this assignment.','Owner / owning frontier lane; item outside this assignment, not separate outside-frontier maintenance.'].includes(finding.route)
-        || /^frontier-owner; outside unit ([1-9]\d*) assignment$/.exec(finding.route??'')?.[1]===unit)
+        || /^frontier-owner; outside unit ([1-9]\d*) assignment$/.exec(finding.route??'')?.[1]===unit
+        || /^frontier owner, batch ([1-9]\d*); outside this dispatch item assignment(?![\s\S])/.exec(finding.route??'')?.[1]===batch)
       &&typeof finding.reason==='string'&&finding.reason.trim().length>=40, 'not the exact original frontier-owner open finding');
     const summary=origin.output.ledger_updates?.[entry.output_finding_index];
+    const summaryRouteMatches=summary?.route===finding.route||(finding.route==='Owner / owning frontier lane; item outside this assignment.'
+      &&summary?.route==='Owner / owning frontier lane; outside this assignment.');
+    const correspondence=review?.summary_correspondence;
+    const abbreviatedSummary=summary&&(!Object.hasOwn(summary,'route')||!Object.hasOwn(summary,'uncertain'))
+      &&(!Object.hasOwn(summary,'route')||summaryRouteMatches)
+      &&(!Object.hasOwn(summary,'uncertain')||summary.uncertain===false)
+      &&typeof summary.reason==='string'&&summary.reason.trim().length>=40
+      &&correspondence?.confirmed_same_finding===true
+      &&typeof correspondence.report_excerpt==='string'&&correspondence.report_excerpt.length>=20
+      &&['reason','affected_use','minimality'].some(k=>typeof finding[k]==='string'&&finding[k].includes(correspondence.report_excerpt))
+      &&typeof correspondence.output_excerpt==='string'&&correspondence.output_excerpt.length>=20
+      &&summary.reason.includes(correspondence.output_excerpt)
+      &&typeof correspondence.reason==='string'&&correspondence.reason.trim().length>=80;
     need(Number.isSafeInteger(entry.output_finding_index)&&entry.output_finding_index>=0&&same(summary,entry.output_finding)
-      &&summary.id===id&&summary.ledger===finding.ledger&&summary.action===finding.action&&summary.uncertain===false
-      &&(summary.route===finding.route||(finding.route==='Owner / owning frontier lane; item outside this assignment.'
-        &&summary.route==='Owner / owning frontier lane; outside this assignment.')), 'original final output does not identify this separate native finding');
+      &&summary.id===id&&summary.ledger===finding.ledger&&summary.action===finding.action
+      &&((summary.uncertain===false&&summaryRouteMatches)||abbreviatedSummary), 'original final output does not identify this separate native finding');
     const source=join(root,'items',`${id}.md`);need(lstatSync(source).isFile()&&!lstatSync(source).isSymbolicLink(),'nonregular source');
     const text=readFileSync(source,'utf8');
     need(/^status:\s*draft\s*$/m.test(text)&&text.match(/^id:\s*(\S+)\s*$/m)?.[1]===id
       &&typeof baseline[id]==='string'&&initial.before[id]===baseline[id]&&itemHashGuard(text)===entry.current_guard_sha256, 'not a current draft original frontier carrier');
-    const observation=entry.source_read,record=observation?.native_log_record,match=typeof record==='string'?/\n succeeded in \d+ms:\n/.exec(record):null;
+    const observation=entry.source_read,span=observation?.native_log_span;
+    let record=observation?.native_log_record;
+    if(span!==undefined){
+      const logBytes=Buffer.from(origin.log,'utf8');
+      need(span&&typeof span==='object'&&!Array.isArray(span)&&!Object.hasOwn(observation,'native_log_record')
+        &&Number.isSafeInteger(span.start_byte)&&Number.isSafeInteger(span.end_byte)
+        &&span.start_byte>=0&&span.end_byte>span.start_byte&&span.end_byte<=logBytes.length
+        &&/^[a-f0-9]{64}$/.test(span.sha256??''), 'invalid original source-read byte span');
+      const recordBytes=logBytes.subarray(span.start_byte,span.end_byte);
+      record=recordBytes.toString('utf8');
+      need(Buffer.from(record,'utf8').equals(recordBytes)&&hash(record)===span.sha256, 'stale or split-UTF8 original source-read byte span');
+    }
+    const match=typeof record==='string'?/\n succeeded in \d+ms:\n/.exec(record):null;
     need(match&&record.startsWith('exec\n')&&record.slice(0,match.index).includes(`items/${id}.md`)
       &&origin.log.includes(record)&&typeof observation.source_excerpt==='string'&&observation.source_excerpt.length>=20
       &&record.slice(match.index+match[0].length).includes(observation.source_excerpt)&&text.includes(observation.source_excerpt), 'missing actual successful native source-read observation/current continuity');
