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
  items/cex-hilbert-monoid-factorisation-not-unique.md
  items/cex-ordered-field-not-archimedean.md
  items/cex-proper-subspace-with-an-equinumerous-basis.md
  items/cor-cauchy-reals-lub-complete.md
  items/cor-factorisation-of-a-nonzero-integer.md
  items/ex-arbitrarily-long-runs-of-composites.md
  items/ex-no-rational-square-root-of-three.md
  items/fs-euclids-product-of-primes-plus-one-is-prime.md
  items/fs-every-fermat-number-is-prime.md
  items/fs-n-squared-plus-n-plus-forty-one-is-always-prime.md
  items/lem-every-integer-above-one-has-a-prime-divisor.md
  items/lem-metric-cauchy-with-convergent-subsequence.md
  items/lem-p-adic-valuation-additive.md
  items/thm-canonical-prime-factorisation.md
  items/thm-gcd-and-lcm-from-valuations.md
  items/cex-strict-contraction-without-a-fixed-point.md
  items/cex-sequential-closure-strictly-inside-closure.md
  items/cex-non-metrizable-topology.md
  items/lem-p-adic-valuation-on-q.md
  items/cex-same-cardinality-without-a-canonical-bijection.md
  items/ex-finite-choice-by-induction.md
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
run impact-audit-receipt node tools/impact-audit.mjs --touches research/audit/wave1b-touches.json --from pre-A4 --to final-A6 --receipt research/audit/wave1b-impact-audit.json
run edge-receipt-integrity node -e 'const fs=require("fs"),c=require("crypto"),p="research/audit/wave1b-audit-manifest.json",a=require("./research/audit/wave1b-edge-audit.json"),raw=fs.readFileSync(p),sha=c.createHash("sha256").update(raw).digest("hex");if(a.source.sha256!==sha||a.edges.length!==2137||new Set(a.edges.map(x=>x.index)).size!==2137||a.edges.filter(x=>x.current_status==="active").length!==2113||a.edges.filter(x=>x.current_status!=="active").length!==24)process.exit(1);console.log(`edge receipt: sha256 ${sha}; 2137/2137 rows; 2113 active; 24 retired`);'
run stamp-honesty node -e 'const fs=require("fs"),ids=["cex-hilbert-monoid-factorisation-not-unique","cex-ordered-field-not-archimedean","cex-proper-subspace-with-an-equinumerous-basis","cor-cauchy-reals-lub-complete","cor-factorisation-of-a-nonzero-integer","ex-arbitrarily-long-runs-of-composites","ex-no-rational-square-root-of-three","fs-euclids-product-of-primes-plus-one-is-prime","fs-every-fermat-number-is-prime","fs-n-squared-plus-n-plus-forty-one-is-always-prime","lem-every-integer-above-one-has-a-prime-divisor","lem-metric-cauchy-with-convergent-subsequence","lem-p-adic-valuation-additive","thm-canonical-prime-factorisation","thm-gcd-and-lcm-from-valuations","def-t0-and-t1-spaces","rem-compactness-conventions-and-choice-ledger","rem-connectedness-conventions","rem-function-space-conventions","rem-separation-axiom-conventions","cex-strict-contraction-without-a-fixed-point","cex-sequential-closure-strictly-inside-closure","cex-non-metrizable-topology","lem-p-adic-valuation-on-q","cex-same-cardinality-without-a-canonical-bijection","ex-finite-choice-by-induction"];for(const id of ids){const fm=fs.readFileSync(`items/${id}.md`,`utf8`).split(/^---$/m)[1];if(!fm.includes("model: gpt-5.6-sol-codex-subscription")||!fm.includes("scope: published-audit")||!fm.includes("delegated_by: owner")||/^  (audited|judge):/m.test(fm))throw Error(id);}console.log(`stamp honesty: ${ids.length}/26 delegated verified stamps present; no audited or judge block on a material target`);'
run touchlog-multiple-repairs node tools/touchlog.mjs report research/audit/wave1b-touches.json --min 2
run depcheck node tools/depcheck.mjs
run fwdcheck node tools/fwdcheck.mjs
run extcheck node tools/extcheck.mjs
run citecheck node tools/citecheck.mjs
run rendercheck node tools/rendercheck.mjs
run prosecheck node tools/prosecheck.mjs

exit "$failed"
