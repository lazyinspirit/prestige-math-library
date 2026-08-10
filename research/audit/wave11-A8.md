# Wave 11 A8 — Audit-Alpha adjudication

Date: 2026-08-10. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh` with a 1,000,000-token context window, owner-delegated. A9 and A10 were not started.

## Scope and exact result

Alpha recovered the completed A6 record and the current A7 ledgers, then verified the orchestrator-owned `pre-a8` snapshot before adjudication. A7 contains exactly 30 verdict rows over the 15 authorized targets: one DeepSeek V4 Pro row and one GPT 5.6 Terra row per target, with no outside-scope row. Ten rejection rows cover eight unique ids. Every rejected file reproduced the A7 item/context hashes, and every adjudication was made from the complete target, its contract when one exists, and the exact cited or declared dependencies relevant to the finding.

`wave11-judge-adjudications.jsonl` contains exactly one decision for each current rejected `(id, model, context_sha256)` tuple:

| outcome | count |
|---|---:|
| `confirmed_fatal` | 1 |
| `confirmed_nonfatal` | 8 |
| `false_positive` | 1 |

Each row binds the verification-stripped pre-edit normalized `item_sha256` required by the Step-8 guard and separately preserves the A7 judge's `verdict_item_sha256`.

## Ten rejection adjudications

1. `cor-taylor-remainder-bound`, Terra — **confirmed nonfatal**. Fact L1 is a citation-voice pointer rather than a restatement, but the linked Lagrange-remainder corollary and exact proof contract contain the displayed formula verbatim. It closes immediately and R1 forbids an edit.
2. `thm-linearity-of-the-integral`, Terra — **confirmed nonfatal**. Fact L5 names finite-sum additivity and scaling but step 2.2 also uses the linked finite-sum monotonicity clause. The source and contract state that clause explicitly, so this is a sub-thirty-second input-map compression.
3. `thm-linearity-of-the-integral`, DeepSeek — **false positive**. No Archimedean theorem is needed: if the alleged nonzero real is `x`, taking the assumed positive `eta` to be `|x|` directly contradicts `|x| < eta`.
4. `rem-integral-conventions-and-scope`, Terra — **confirmed fatal**. Section 6 falsely said the single endpoint equation exactly characterizes the sharp FTC class. The cited item explicitly says that the endpoint identity alone does not characterize absolute continuity and requires the representation at every point.
5. `thm-taylor-peano-remainder`, Terra — **confirmed nonfatal**. The induction theorem is a declared dependency and the proof explicitly labels the base, induction hypothesis, and discharge. Not repeating that theorem in an L fact is a body-citation omission, not a logical gap.
6. `thm-taylor-peano-remainder`, DeepSeek — **confirmed nonfatal**. L1/L2 compactly describe sources, while the exact cited Taylor-derivative and Cauchy-quotient statements and contract provide the facts used by the named steps.
7. `ex-integral-test-applied-to-the-p-series`, Terra — **confirmed nonfatal**. The second FTC citation assumes a nondegenerate interval, while the proof includes `N=0`; that single case closes directly from the oriented-integral definition and `G(0)-G(0)=0`.
8. `ex-two-root-x-and-its-unbounded-derivative`, Terra — **confirmed nonfatal**. Step 2.1 omits the scalar-continuity input after establishing continuity of the inverse, but the already declared algebra-of-continuous-functions theorem supplies it immediately.
9. `fs-substitution-holds-for-every-integrable-integrand`, Terra — **confirmed nonfatal**. L7 does not repeat `p<q`, but the cited definition and bounds carry that standing hypothesis and every actual proof use is explicitly forward-oriented.
10. `cex-a-function-with-a-primitive-that-is-not-integrable`, Terra — **confirmed nonfatal**. L2's parenthetical omits the power rule for the affine inner map, but step 2.1 cites L1 and L2 together; L1 supplies the identity derivative and the algebra theorem supplies constants, sums, and scalar multiples before L2's chain rule is applied.

No nonfatal or false-positive target was edited.

## Fatal repair, contract, impact, and certification

Alpha changed exactly one sentence in `rem-integral-conventions-and-scope`. The former sentence said that the class of functions satisfying only

`integral_a^b G' = G(b)-G(a)`

was identified exactly. The replacement states the cited equivalence: absolute continuity is characterized by the existence of `G'` almost everywhere, `G'` belonging to `L^1`, and

`G(x)=G(a)+integral_a^x G'` for every `x` in `[a,b]`.

This is the smallest correction of the confirmed falsehood. The target was already `ai-generated`/`not-applicable`, so its provenance did not change. The stale A6 `verification.verified` stamp was removed before editing; no judge or audited stamp was present. Because the target is a Remark rather than a proof-bearing item, no proof contract applies and both synchronized 55-contract receipts remain unchanged.

The verification-stripped normalized hash moved from `54eb64b2d5e3795c87caa8a763b34a8c8fe2c99dcbe928935a1c824c1d86c5b9` to `fd9044e5ea139cd04abbe1434c61227f0b99d3588d8a57c74cd8d2b5c06e8f28`. Independent GPT 5.6 Terra at `xhigh`/1M read the complete exact-final item and `rem-ftc-absolutely-continuous` in a read-only sandbox, matched that exact hash, and returned `CERTIFIED` with `FINDINGS: NONE`. Only then was the fresh owner-delegated `published-audit` verified stamp added. The final judge-normalized item/context hashes for the orchestrator's targeted pair are `b0343c7c426899dcf42c45ace472c8cdbf4f2f17b3e06cbfc9bcc069bc1d80a9` and `740aff3fcfd3331bd3f9ca57daf015ba2e6a718b52c97b95135497b2d0f29813`.

The public-interface repair has zero logical consumers and one direct-citation consumer, `cex-a-function-with-a-primitive-that-is-not-integrable`. Alpha read that consumer in full. Its closing Remark uses the scope item only to say the sharp class is recorded but not proved; the corrected every-point equivalence makes the link accurate and changes no proof step. Its disposition is `still-licensed`, so it is neither edited nor rejudged. The manual disposition is in `wave11-A8-impact-review.json`; `wave11-A8-impact-template.json` is prepared for the orchestrator's formal `pre-a8` to `post-a8` check.

## Guard and exact rejudge handoff

The live Step-8 guard against `pre-a8` reports 2,859 baseline items, one changed, one licensed by the exact confirmed-fatal pre-edit hash, zero creations/deletions, zero errors, and zero warnings. Item precheck is vacuous and clean for the non-proof Remark; strict contracts remain 55/55. `git diff --check` passes.

Exact A8 edited-item and paired-rejudge list:

- `rem-integral-conventions-and-scope`

No sibling, page, confirmed-nonfatal item, false-positive item, or still-licensed consumer belongs in that set. Alpha did not run a judge sweep, targeted judges, judge stamping, A9, A10, touch snapshot, commit, or push.

## Targeted-rejudge addendum

After that handoff, the orchestrator recorded canonical `post-a8`, verified the formal one-interface/one-consumer impact receipt, and ran the exact one-id targeted pair. DeepSeek returned `keep:true`. Terra returned `keep:false` at exact context `740aff3fcfd3331bd3f9ca57daf015ba2e6a718b52c97b95135497b2d0f29813` and item hash `b0343c7c426899dcf42c45ace472c8cdbf4f2f17b3e06cbfc9bcc069bc1d80a9` solely because the opening prose says, “It establishes nothing and is cited by nothing,” while `cex-a-function-with-a-primitive-that-is-not-integrable` directly links this item in a closing Remark.

Alpha appended exactly one new decision for that exact Terra tuple: **confirmed nonfatal**. The observation is true, but it is non-load-bearing corpus bookkeeping. It changes no mathematical claim, proof step, dependency, declared relationship, provenance classification, or the certified every-point absolute-continuity repair; the issue was also independently recorded as nonfatal during A6. Under fatal-only R1 no second A8 edit, stamp mutation, contract mutation, or impact expansion is licensed. The append-only adjudication ledger now has 11 rows in total: one `confirmed_fatal`, nine `confirmed_nonfatal`, and one `false_positive`.

Because the targeted pair is mixed, no pass-only targeted receipt or judge stamp is valid. The exact stale scope phrase is handed to the orchestrator's A9 scope-denial re-grep. Alpha did not run another judge or start A9.

## Personal-audit escalation set

The exact current combined touch-plus-judge audit after `post-a8` identifies 11 escalation ids. `rem-integral-conventions-and-scope` now measures two rejections plus three repair-stage transitions, total five; the escalation set itself is unchanged.

- `thm-taylor-peano-remainder` — two source/provenance repair stages and two nonfatal citation-compression rejections. Dropping it removes the library's Peano remainder theorem and weakens the Taylor chain; retention is recommended because the theorem and proof remain correct.
- `cex-a-function-with-a-primitive-that-is-not-integrable` — two source/provenance stages and one nonfatal grouped-citation rejection. Dropping it removes the exact counterexample separating existence of a primitive from Riemann integrability of the derivative; retention is recommended.
- `cor-taylor-remainder-bound` — two source-repair stages and one nonfatal citation-voice rejection. Dropping it removes the uniform Lagrange error estimate used to turn the remainder formula into a quantitative bound; retention is recommended.
- `ex-two-root-x-and-its-unbounded-derivative` — two source-repair stages and one nonfatal omitted-input rejection. Dropping it removes the concrete square-root endpoint example motivating improper integration; retention is recommended.
- `fs-substitution-holds-for-every-integrable-integrand` — two source/provenance stages and one nonfatal standing-hypothesis rejection. Dropping it removes the counterexample showing substitution cannot be extended to every merely integrable integrand; retention is recommended.
- `rem-integral-conventions-and-scope` — three scope/provenance/repair stages, the initial fatal rejection, and the targeted nonfatal bookkeeping rejection. Dropping it removes the page's orientation, choice, reading-order, and sharp-FTC ledger; retain the mathematically corrected record and send only the stale scope phrase to A9.
- `thm-linearity-of-the-integral` — one proof-citation repair and two judge rejections, one nonfatal and one false positive. Dropping it removes the integral's fundamental algebraic law and many downstream licenses; retention is strongly recommended.
- `ex-integral-test-applied-to-the-p-series` — one false-Remark repair and one nonfatal endpoint-case rejection. Dropping it removes the page's concrete p-series application but does not damage foundational soundness; retention is recommended.
- `rem-darboux-lhopital-taylor-scope` — two relationship/provenance stages and no A7 rejection. Dropping it removes the page's scope and reading-order ledger; retain the repaired record.
- `thm-first-mean-value-theorem-for-integrals` — two cleanup/provenance stages and no A7 rejection. Dropping it removes a standard integral mean-value theorem and its downstream applications; retention is recommended.
- `thm-integration-by-parts` — two cleanup/source-classification stages and no A7 rejection. Dropping it removes a central integration identity and breaks downstream Taylor/integration arguments; retention is strongly recommended.

No deletion, id change, or reading-order change is proposed.

## Remaining orchestrator-owned work

There is no Alpha-local blocker. `post-a8` and the formal impact receipt are complete. The orchestrator's A9 scope-denial pass must resolve the exact false bookkeeping phrase in `rem-integral-conventions-and-scope`; only afterward can the orchestrator obtain a fresh exact-current paired pass, build the pass-only targeted receipt, apply the judge stamp, and rerun exact-current coverage. The 11 personal audits also remain orchestrator-owned. Alpha did not pre-empt A9 or any judge action.
