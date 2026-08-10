# Wave 11 published-repair ledger

Audit stage: A6. Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`. Date: 2026-08-10. Item hashes are normalized SHA-256 values with the complete `verification:` block removed.

## Complete reconciliation

Audit-Alpha independently read all 61 scoped items, all four page files, all 114 distinct exact out-of-scope targets, all 59 proof-bearing top-100 spine items, and all 238 affected consumers. No sampling was used. `wave11-edge-audit.json` dispositions all 785 exact relationships: 615 published-backward, 153 same-batch, and 17 forward. This includes all 267 frozen-text barrier relationships into exact final Waves 8–10 text.

## Material A4 item repairs

| item | final disposition | normalized final hash |
|---|---|---|
| `ex-integral-test-applied-to-the-p-series` | Replaced the false claim that no primitive can exist with the accurate statement that only a named logarithmic primitive is unavailable and unnecessary. | `aa8eed88920d21bbbf6c57ebd224a152873da2fbaccd07b396722dff4792464f` |
| `thm-linearity-of-the-integral` | Replaced the nonexistent “steps 2.3 to 6.3” reference with the exact steps 2.3, 2.4, and 3.2. | `5ddedcbca79ba5bf988a1a3b132e584d4a611897d1903879f7faed8341c96809` |
| `thm-monotonicity-of-the-integral` | Deleted the unused final oriented-integral Fact while retaining the dependency still used by the Statement. | `c09760939f726571eff0f6ae229150f2f03a61b6ef16e4138c6b372640bba237` |
| `thm-additivity-over-subintervals` | Deleted the unused refinement Fact, removed its unused dependency, and reconciled the two affected Fact labels and contract uses. | `93e57629fdb9845d415e1b1928d9d688c0610d23e9a61ba09ed96c4698d0aefd` |
| `thm-first-mean-value-theorem-for-integrals` | Deleted the unused oriented-integral Fact and dependency; A6 also corrected the specialization provenance. | `c8254a05b45a3935f6e727b84819a8fdd24530671c2ad9e728cab73119c3aae6` |
| `thm-ftc-second-part` | Deleted the unused oriented-integral Fact and dependency. | `b97a507ae103b3c595df871b49d55536ec6d92062a31780dea4ea9008f08e3ca` |
| `thm-integration-by-parts` | Deleted the unused oriented-integral Fact and dependency; A6 also corrected the exact-source provenance. | `676f2da1dd4123c3468d11668def318cd6722170369291be714ebb121f43da6d` |
| `cex-absolute-value-integrable-without-the-function` | Deleted the unused five-link Fact, removed two dependencies no longer used, and retained the three targets still cited in the Remark. | `a99c7da3efe8d50a1c039266c052f8d954e17ca76ce842dcd7bce9cff39463d5` |

These repairs are exactly one false-statement correction, one malformed-step-reference correction, six unused-Fact deletions, eleven Fact/source citation deletions, six dependency removals, and one two-label renumbering. The two established-knowledge determinations for `ex-xk-abs-x-smoothness-threshold` and `cex-absolute-value-integrable-without-the-function` are independently concurred.

## A6 repairs and source closures

| item | final disposition | normalized final hash |
|---|---|---|
| `cex-a-function-with-a-primitive-that-is-not-integrable` | Resolved the hard generated-risk edge by retagging the source-backed classical witness `ai-altered`/`semantic-source` and adding the Olmsted exact counterexample source. | `584d5df7391f997c9c491a73e856b94feed33651d87655427359e679acc5c0b3` |
| `thm-taylor-peano-remainder` | Replaced the dead Iowa source, discarded the TLS-invalid Drexel intermediate, installed a live Taylor source, and classified the stronger-hypothesis statement as a semantic specialization. | `d360cf06ac38bad3eb81e036bc8986f51bf2a504e84b156e5c1071cb2cfa3f6e` |
| `cor-taylor-remainder-bound` | Replaced the dead Iowa source with the live source stating the exact Lagrange uniform bound; retained literature-derived/exact-source. | `3727505d8318a08e271f9339f63a3aaceb6853ee2b57e272b67a48bc658d55e4` |
| `ex-two-root-x-and-its-unbounded-derivative` | Replaced the TLS-invalid Hawaii page with exact CLP square-root derivative support plus live GVSU improper-integral context. | `93d3326a1393494a74fd798506b52487b6bf8b812c44ace92936d3190a2cf1a3` |
| `fs-substitution-holds-for-every-integrable-integrand` | Added the Lehman-hosted Pugh full text exposing Chapter 3 Exercise 35 verbatim and retained the Springer publisher record. | `20661f7bdfeb5f62f76f2075a0e0de2f85435b9a6c7e8acd1cb53cb4bb8b3a89` |
| `thm-first-mean-value-theorem-for-integrals` | Corrected provenance to `ai-altered`/`semantic-source` for the exact specialization represented by the item. | `c8254a05b45a3935f6e727b84819a8fdd24530671c2ad9e728cab73119c3aae6` |
| `thm-integration-by-parts` | Corrected provenance to `literature-derived`/`exact-source` after verifying the exact CMU theorem. | `676f2da1dd4123c3468d11668def318cd6722170369291be714ebb121f43da6d` |
| `rem-integral-conventions-and-scope` | Removed the stale assignment of Taylor’s integral remainder to a page that explicitly excludes it; no current destination is claimed. | `54eb64b2d5e3795c87caa8a763b34a8c8fe2c99dcbe928935a1c824c1d86c5b9` |
| `rem-darboux-lhopital-taylor-scope` | Added the missing declared dependency and citation to `cor-injective-or-monotone-derivative-is-continuous`; the final manifest therefore has one additional same-batch edge. | `03cd06aa5512aacd12f5231beccf707d9c34f71afc937d165774735799efde60` |

The final URL sweep is 48/48 live. The exact disposition history—including the failed Iowa endpoint, TLS-invalid Hawaii endpoint, and TLS-invalid Drexel intermediate—is preserved in `wave11-url-dispositions.json`. All ten Wave 11 generated seeds are reviewed and dispositioned; four are load-bearing and none remains unresolved.

## Page repair

`library/real-analysis/properties-of-the-integral-and-the-working-ftc.md` now says Taylor’s integral remainder is not developed on this page and that the current Darboux/L’Hopital/Taylor page also expressly excludes it, rather than assigning it there. Exact final full-file SHA-256: `42c5d0fdeb1dc814dab0b955d7bf17b529aaf249049d39d12305b25e0d76c8af`. Terra independently certified the exact final page and reconciled scope ledger. Pages are never A7 item targets.

## Independent-reader closure

The append-only DeepSeek archive has 69 result packets and complete exact-final results for all 54 required routes: 51 `CLEAN`, three confirmed-nonfatal `DEFECTS`, zero unresolved. The previously fatal undeclared relationship was repaired and exact-final refutation is `CLEAN`. The three retained nonfatal findings are the one-sided endpoint compression in `cor-derivatives-have-no-removable-or-jump-discontinuities`, the reciprocal-order citation compression in `ex-integral-test-applied-to-the-p-series`, and the harmless “cited by nothing” bookkeeping sentence in `rem-integral-conventions-and-scope` despite one closing-Remark link.

Terra’s append-only archive has 24 result packets. It certified exact-final text for all 15 item repair targets and the page. All 15 item targets carry current owner-delegated `published-audit` stamps; initial refusals and source blocks remain preserved with their closures.

## Exact A7 target ids

`wave11-rejudge-targets.json` contains exactly 15 item ids:

- `cex-a-function-with-a-primitive-that-is-not-integrable`
- `cex-absolute-value-integrable-without-the-function`
- `cor-taylor-remainder-bound`
- `ex-integral-test-applied-to-the-p-series`
- `ex-two-root-x-and-its-unbounded-derivative`
- `fs-substitution-holds-for-every-integrable-integrand`
- `rem-darboux-lhopital-taylor-scope`
- `rem-integral-conventions-and-scope`
- `thm-additivity-over-subintervals`
- `thm-first-mean-value-theorem-for-integrals`
- `thm-ftc-second-part`
- `thm-integration-by-parts`
- `thm-linearity-of-the-integral`
- `thm-monotonicity-of-the-integral`
- `thm-taylor-peano-remainder`

The 53 pure retags, page edit, unchanged consumers, and reader-only routes are excluded. There is no Wave 11-local blocker; Alpha did not start A7.

## A8 fatal-only repair

| item | old text | new text | class | evidence and certification | normalized final hash |
|---|---|---|---|---|---|
| `rem-integral-conventions-and-scope` | “the sharp form of the fundamental theorem, in which the class of functions `$G$` with `$\int_a^b G' = G(b)-G(a)$` is identified exactly” | “the absolutely continuous functions are exactly those for which `$G'$` exists almost everywhere, `$G'\in L^1$`, and `$G(x)=G(a)+\int_a^x G'$` for every `$x\in[a,b]$`” | confirmed-fatal false mathematical characterization; smallest scope-prose correction | `rem-ftc-absolutely-continuous` states verbatim that the identity is required at every point and the endpoint identity alone does not characterize absolute continuity; its C. Heil reference supports the equivalence. Exact-final GPT 5.6 Terra certification: `research/audit/wave11-dispatch/certifier-a8-rem-integral-conventions-and-scope.result.json`. Consumer review: `research/audit/wave11-A8-impact-review.json`. Provenance stays `ai-generated`/`not-applicable`. | `fd9044e5ea139cd04abbe1434c61227f0b99d3588d8a57c74cd8d2b5c06e8f28` |

No confirmed-nonfatal or false-positive finding caused a mutation. The exact A8 edited-id and paired-rejudge set contains only `rem-integral-conventions-and-scope`.
