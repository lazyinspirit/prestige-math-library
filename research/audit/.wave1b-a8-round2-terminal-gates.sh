#!/usr/bin/env bash
set +e

failed=0
run() {
  local title="$1"
  shift
  printf '===== %s =====\n' "$title"
  printf '$'
  printf ' %q' "$@"
  printf '\n'
  "$@"
  local ec=$?
  printf '[exit %d]\n\n' "$ec"
  if [ "$ec" -ne 0 ]; then
    failed=1
  fi
}

item=items/ex-hamel-basis-of-r-over-q.md

run git-diff-check git diff --check
run reflow-repair node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/reflow.mts "$item"
run precheck-repair node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/precheck.mts "$item"
run proof-contract-linear-algebra node tools/proof-contract.mjs research/audit/wave1-linear-algebra.proof-contracts.json --strict
run merge-proof-contracts node tools/merge-proof-contracts.mjs --level audit-wave1b research/audit/wave1b-proof-contracts.json research/audit/wave1-linear-algebra.proof-contracts.json research/audit/wave1-number-theory.proof-contracts.json research/audit/wave1-real-analysis.proof-contracts.json research/audit/wave1-topology.proof-contracts.json
run proof-contract-merged node tools/proof-contract.mjs research/audit/wave1b-proof-contracts.json --strict
run risk-report-reviewed node tools/risk-report.mjs research/audit/wave1b-proof-contracts.json --require-reviewed
run finite-smoke node tools/finite-smoke.mjs research/audit/wave1b-proof-contracts.json
run content-policy-audit node tools/content-policy.mjs --audit \
  --ledger research/audit/wave1-linear-algebra.provenance.jsonl \
  --ledger research/audit/wave1-number-theory.provenance.jsonl \
  --ledger research/audit/wave1-real-analysis.provenance.jsonl \
  --ledger research/audit/wave1-topology.provenance.jsonl \
  research/audit/wave1-linear-algebra.pages.json \
  research/audit/wave1-number-theory.pages.json \
  research/audit/wave1-real-analysis.pages.json \
  research/audit/wave1-topology.pages.json
run genrisk-receipt node tools/genrisk.mjs --receipt research/audit/genrisk.json
run impact-audit-receipt node tools/impact-audit.mjs --touches research/audit/wave1b-touches.json --from pre-A4 --to final-A8-round2-prejudge --receipt research/audit/wave1b-impact-audit.json
run adjudication-integrity node -e 'const fs=require("fs"),read=p=>fs.readFileSync(p,"utf8").trim().split("\n").filter(Boolean).map(JSON.parse),v=read("research/audit/wave1b-judge-paired.jsonl").filter(x=>x.keep===false),a=read("research/audit/wave1b-judge-adjudications.jsonl"),key=x=>x.id+"\0"+x.model+"\0"+x.context_sha256,vs=new Set(v.map(key)),as=new Set(a.map(key)),out=Object.fromEntries(["confirmed_fatal","confirmed_nonfatal","false_positive"].map(k=>[k,a.filter(x=>x.outcome===k).length]));if(v.length!==108||a.length!==108||vs.size!==108||as.size!==108||[...vs].some(k=>!as.has(k))||[...as].some(k=>!vs.has(k)))process.exit(1);console.log("adjudications: 108/108 exact rejection rows; fatal "+out.confirmed_fatal+"; nonfatal "+out.confirmed_nonfatal+"; false-positive "+out.false_positive);'
run targeted-current-context node -e 'const fs=require("fs"),rows=fs.readFileSync("research/audit/wave1b-judge-paired.jsonl","utf8").trim().split("\n").map(JSON.parse),ids=["cex-embedding-not-order-preserving","cex-sequential-closure-strictly-inside-closure","cor-dimension-of-a-direct-sum","def-dense-top","def-dimension","def-first-countable-top","def-lipschitz-holder-contraction","def-metrizable-space","def-neighbourhood-top","ex-cocountable-topology-on-r","ex-hamel-basis-of-r-over-q","ex-sierpinski-and-particular-point-spaces","fs-equivalent-metrics-share-cauchy-sequences","fs-every-topology-is-metrizable","fs-sequentially-continuous-implies-continuous","lem-metric-convergent-implies-cauchy","thm-fundamental-theorem-of-arithmetic","thm-kuratowski-closure-axioms","rem-topology-conventions","cex-non-metrizable-topology","thm-first-countable-sequences-suffice","lem-sequential-closure-inside-closure","cex-sequentially-continuous-not-continuous","ex-uncountable-cantor-cube-uniformizable-not-first-countable"],want=["def-dense-top","def-first-countable-top","ex-cocountable-topology-on-r","ex-hamel-basis-of-r-over-q","ex-uncountable-cantor-cube-uniformizable-not-first-countable","fs-equivalent-metrics-share-cauchy-sequences","fs-sequentially-continuous-implies-continuous","lem-sequential-closure-inside-closure","thm-first-countable-sequences-suffice","thm-fundamental-theorem-of-arithmetic"].sort(),cur=new Map;for(const r of rows)if(ids.includes(r.id))cur.set(r.id+"\0"+r.model,r);const reject=[...cur.values()].filter(r=>r.keep===false).map(r=>r.id).sort();if(cur.size!==48||JSON.stringify(reject)!==JSON.stringify(want))process.exit(1);console.log("targeted current context: 48/48 lane verdicts; 14/24 pass both lanes; 10/24 carry one rejection");console.log("current rejection ids: "+reject.join(", "));'
run repair-stamp-honesty node -e 'const fs=require("fs"),s=fs.readFileSync("items/ex-hamel-basis-of-r-over-q.md","utf8"),fm=s.split(/^---$/m)[1];if(!fm.includes("model: gpt-5.6-sol-codex-subscription")||!fm.includes("scope: published-audit")||!fm.includes("delegated_by: owner")||/^  (audited|judge):/m.test(fm))process.exit(1);if(!fs.readFileSync("research/audit/wave1b-published-repairs.md","utf8").includes("93a89b18acfeaedbcfccd892ce182ab782aa2db971d21e223376ac47c11c3f15"))process.exit(1);console.log("repair stamp: independent pre-stamp sha256 93a89b18acfeaedbcfccd892ce182ab782aa2db971d21e223376ac47c11c3f15 recorded; delegated verified stamp present; no audited or judge block");'
run edge-receipt-integrity node -e 'const fs=require("fs"),c=require("crypto"),p="research/audit/wave1b-audit-manifest.json",a=require("./research/audit/wave1b-edge-audit.json"),raw=fs.readFileSync(p),sha=c.createHash("sha256").update(raw).digest("hex");if(a.source.sha256!==sha||a.edges.length!==2137||new Set(a.edges.map(x=>x.index)).size!==2137||a.edges.filter(x=>x.current_status==="active").length!==2113||a.edges.filter(x=>x.current_status!=="active").length!==24)process.exit(1);console.log("edge receipt: sha256 "+sha+"; 2137/2137 rows; 2113 active; 24 retired");'
run touchlog-multiple-repairs node tools/touchlog.mjs report research/audit/wave1b-touches.json --min 2
run touchlog-escalation node tools/touchlog.mjs audit research/audit/wave1b-touches.json research/audit/wave1b-judge-paired.jsonl
run depcheck node tools/depcheck.mjs
run fwdcheck node tools/fwdcheck.mjs
run extcheck node tools/extcheck.mjs
run citecheck node tools/citecheck.mjs
run rendercheck node tools/rendercheck.mjs
run prosecheck node tools/prosecheck.mjs

exit "$failed"
