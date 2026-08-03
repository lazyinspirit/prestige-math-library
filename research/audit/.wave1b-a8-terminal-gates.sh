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

material=(
  items/cex-embedding-not-order-preserving.md
  items/cex-sequential-closure-strictly-inside-closure.md
  items/cor-dimension-of-a-direct-sum.md
  items/def-dense-top.md
  items/def-dimension.md
  items/def-first-countable-top.md
  items/def-lipschitz-holder-contraction.md
  items/def-metrizable-space.md
  items/def-neighbourhood-top.md
  items/ex-cocountable-topology-on-r.md
  items/ex-hamel-basis-of-r-over-q.md
  items/ex-sierpinski-and-particular-point-spaces.md
  items/fs-equivalent-metrics-share-cauchy-sequences.md
  items/fs-every-topology-is-metrizable.md
  items/fs-sequentially-continuous-implies-continuous.md
  items/lem-metric-convergent-implies-cauchy.md
  items/thm-fundamental-theorem-of-arithmetic.md
  items/thm-kuratowski-closure-axioms.md
  items/rem-topology-conventions.md
  items/cex-non-metrizable-topology.md
  items/thm-first-countable-sequences-suffice.md
  items/lem-sequential-closure-inside-closure.md
  items/cex-sequentially-continuous-not-continuous.md
  items/ex-uncountable-cantor-cube-uniformizable-not-first-countable.md
)

run git-diff-check git diff --check
run reflow-material node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/reflow.mts "${material[@]}"
run precheck-material node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/precheck.mts "${material[@]}"
run proof-contract-linear-algebra node tools/proof-contract.mjs research/audit/wave1-linear-algebra.proof-contracts.json --strict
run proof-contract-number-theory node tools/proof-contract.mjs research/audit/wave1-number-theory.proof-contracts.json --strict
run proof-contract-real-analysis node tools/proof-contract.mjs research/audit/wave1-real-analysis.proof-contracts.json --strict
run proof-contract-topology node tools/proof-contract.mjs research/audit/wave1-topology.proof-contracts.json --strict
run proof-contract-foundations-seed node tools/proof-contract.mjs research/audit/wave1-foundations.proof-contracts.json --strict
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
run impact-audit-receipt node tools/impact-audit.mjs --touches research/audit/wave1b-touches.json --from pre-A4 --to final-A8-prejudge --receipt research/audit/wave1b-impact-audit.json
run adjudication-integrity node -e 'const fs=require("fs"),read=p=>fs.readFileSync(p,"utf8").trim().split("\n").filter(Boolean).map(JSON.parse),v=read("research/audit/wave1b-judge-paired.jsonl").filter(x=>x.keep===false),a=read("research/audit/wave1b-judge-adjudications.jsonl"),key=x=>x.id+"\0"+x.model+"\0"+x.context_sha256,vs=new Set(v.map(key)),as=new Set(a.map(key)),out=Object.fromEntries(["confirmed_fatal","confirmed_nonfatal","false_positive"].map(k=>[k,a.filter(x=>x.outcome===k).length]));if(v.length!==98||a.length!==98||as.size!==98||[...vs].some(k=>!as.has(k))||[...as].some(k=>!vs.has(k)))process.exit(1);console.log("adjudications: 98/98 exact rejection rows; fatal "+out.confirmed_fatal+"; nonfatal "+out.confirmed_nonfatal+"; false-positive "+out.false_positive);'
run judge-comparison node tools/judge-compare.mjs research/audit/wave1b-judge-paired.jsonl --adjudications research/audit/wave1b-judge-adjudications.jsonl
run targeted-rejudge-scheduler-capability node -e 'const {spawnSync}=require("child_process"),loader="/root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs",r=spawnSync(process.execPath,["--import",loader,"tools/judge.mts","items/cex-embedding-not-order-preserving.md","--context-hash"],{encoding:"utf8",env:process.env});console.log("scheduler child process: error="+(r.error?.code??"none")+" status="+r.status+" signal="+(r.signal??"none")+" stdout_bytes="+(r.stdout?.length??0)+" stderr_bytes="+(r.stderr?.length??0));if(r.error?.code==="EPERM")process.exit(1);'
run targeted-rejudge-receipt node -e 'const fs=require("fs"),p="research/audit/wave1b-targeted-judge-receipt.json";if(!fs.existsSync(p)){console.error("BLOCKED — "+p+" was not created because the mandated scheduler cannot launch judge children in the non-escalated sandbox.");process.exit(1);}console.log(p+" exists");'
run edge-receipt-integrity node -e 'const fs=require("fs"),c=require("crypto"),p="research/audit/wave1b-audit-manifest.json",a=require("./research/audit/wave1b-edge-audit.json"),raw=fs.readFileSync(p),sha=c.createHash("sha256").update(raw).digest("hex");if(a.source.sha256!==sha||a.edges.length!==2137||new Set(a.edges.map(x=>x.index)).size!==2137||a.edges.filter(x=>x.current_status==="active").length!==2113||a.edges.filter(x=>x.current_status!=="active").length!==24)process.exit(1);console.log("edge receipt: sha256 "+sha+"; 2137/2137 rows; 2113 active; 24 retired");'
run stamp-honesty node -e 'const fs=require("fs"),ids=["cex-embedding-not-order-preserving","cex-sequential-closure-strictly-inside-closure","cor-dimension-of-a-direct-sum","def-dense-top","def-dimension","def-first-countable-top","def-lipschitz-holder-contraction","def-metrizable-space","def-neighbourhood-top","ex-cocountable-topology-on-r","ex-hamel-basis-of-r-over-q","ex-sierpinski-and-particular-point-spaces","fs-equivalent-metrics-share-cauchy-sequences","fs-every-topology-is-metrizable","fs-sequentially-continuous-implies-continuous","lem-metric-convergent-implies-cauchy","thm-fundamental-theorem-of-arithmetic","thm-kuratowski-closure-axioms","rem-topology-conventions","cex-non-metrizable-topology","thm-first-countable-sequences-suffice","lem-sequential-closure-inside-closure","cex-sequentially-continuous-not-continuous","ex-uncountable-cantor-cube-uniformizable-not-first-countable"];for(const id of ids){const fm=fs.readFileSync("items/"+id+".md","utf8").split(/^---$/m)[1];if(!fm.includes("model: gpt-5.6-sol-codex-subscription")||!fm.includes("scope: published-audit")||!fm.includes("delegated_by: owner")||/^  (audited|judge):/m.test(fm))throw Error(id);}console.log("stamp honesty: "+ids.length+"/24 delegated verified stamps present; no audited or judge block on an A8 material target");'
run touchlog-multiple-repairs node tools/touchlog.mjs report research/audit/wave1b-touches.json --min 2
run depcheck node tools/depcheck.mjs
run fwdcheck node tools/fwdcheck.mjs
run extcheck node tools/extcheck.mjs
run citecheck node tools/citecheck.mjs
run rendercheck node tools/rendercheck.mjs
run prosecheck node tools/prosecheck.mjs

exit "$failed"
