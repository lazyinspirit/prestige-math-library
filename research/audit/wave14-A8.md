# Wave 14 A8 — Audit-Alpha adjudication

Date: 2026-08-10. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`, owner-delegated. A9 was not started.

## Scope and exact result

Alpha recovered the complete durable A6/A7 record and read all seven rejected items plus all 28 unique cited targets without sampling. The A7 ledger contains exactly 20 substantive rows for ten targets. Nine rejection rows across seven ids have one append-only, exact-context adjudication each: three `confirmed_fatal` rows on two unique ids, three `confirmed_nonfatal`, and three `false_positive`.

The two unique fatal ids are `ex-exponential-product-limit-at-negative-input` and `thm-e-is-irrational`. R1 left the other five rejected ids byte-unchanged. The exact decision ledger is `wave14-judge-adjudications.jsonl`; `wave14-A8-adjudication-receipt.json` records the arithmetic and pre-/post-repair hashes.

## Fatal-only repairs

1. `ex-exponential-product-limit-at-negative-input` previously claimed an N-indexed sequence while its displayed formula divided by `iota(0)=0`. A8 defines `a_0=0`, uses the product formula for `n>=1`, proves the `n>2` tail limit, and cites exact tail invariance. Final normalized hash: `8829d15a4f637c1c7d421a770db48d6aecec84f10a70120ca4f9b8b1a1912d8f`.
2. `thm-e-is-irrational` previously asserted `q|n!`, `k!|n!`, and the real integrality of the scaled tail without the needed typed divisibility and embedding licenses. A8 adds exact positive-denominator, factorial-divisibility, N-to-Z-to-Q-to-R, and integer-ring dependencies and writes the witnesses explicitly. Its proof provenance moved honestly from `literature-derived` to `ai-altered`. Final normalized hash: `8ea24c102b30f21259e235b2839c2ed7ee5c73384f714b01ca0bdbd13dbc75ea`.

Both exact-final items pass precheck. The synchronized contract copies cover all 23 proof-bearing items and pass strict validation with zero errors/warnings. Independent GPT 5.6 Terra readers returned `CERTIFIED` and `FINDINGS: NONE` for both exact final hashes before the two fresh owner-delegated `verification.verified` stamps were written.

## Impact, relationships, generated risk, and handoff

The public-interface impact union is exactly one consumer: `rem-exponential-roadmap-and-circularity`. It was read in full and remains licensed because the irrationality theorem's Statement is unchanged; no consumer was repaired or added to the rejudge set. The product-limit example has no consumers.

The exact relationship manifest now has 178 edges: 115 published-backward and 63 same-batch. The seven additions are precisely the repaired items' new dependencies, all read and dispositioned exact. The top-100 proof-spine membership and all 59 proof content hashes are unchanged; only dependency-cone counts were refreshed. The repaired generated example remains a zero-cone seed and its standing disposition now cites the final Terra certification.

The live Step-8 guard reports exactly two changed ids and licenses both from pre-edit `confirmed_fatal` rows, with zero errors or warnings. The impact receipt passes for two interfaces and one still-licensed consumer. The orchestrator then ran the required paired targeted rejudge on exactly the two repaired ids. The product-limit example passed both lanes and received the only honest targeted judge stamp. The e theorem passed DeepSeek; Terra rejected only the claimed integer-discreteness step. Alpha appended an exact-current false-positive adjudication: the cited ordered embeddings turn a positive embedded integer into the image of a natural q>=1, and canonical-natural positivity gives A>=1, contradicting A<1. The theorem therefore remains byte-identical and, because one lane rejected, honestly has no judge-pass stamp. Exact-final coverage passes for all ten recorded A7 targets with seven expected adjudicated-rejection warnings and zero errors.

Exact A8 edited-item and rejudge set: **two ids** — `ex-exponential-product-limit-at-negative-input`, `thm-e-is-irrational`. No unchanged item was rejudged. The orchestrator's exact targeted run produced one pass-only judge stamp; Alpha wrote no manufactured pass for the rejected theorem and did not start A9, commit, or push.
