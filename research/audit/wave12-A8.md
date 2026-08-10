# Wave 12 A8 — Audit-Alpha adjudication

Date: 2026-08-10. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh` with a 1,000,000-token context window,
owner-delegated. Targeted rejudge and A9 were not started.

## Exact recovery and adjudication scope

Alpha recovered the complete durable A6/A7 record, rechecked current disk, and
verified the canonical `pre-a8` snapshot dated
`2026-08-10T02:51:13.625Z`. The A7 ledger contains 78 exact verdict rows for 39
authorized targets: 39 DeepSeek V4 Pro rows and 39 GPT 5.6 Terra rows. Twenty-
eight rejection rows cover 23 unique ids. Every rejected row matched its exact
current A7 `(id, model, context_sha256, verdict_item_sha256)` before any edit.

No sampling was used. Alpha read all 23 rejected items in full and every
dependency needed to decide the exact finding. For the three public-interface
repairs, Alpha also read the complete 65-item direct/logical consumer union,
including already-present Wave 13/14 consumers, without modifying any of them.

`wave12-judge-adjudications.jsonl` contains exactly one exact-hash decision for
each rejection:

| outcome | rows |
|---|---:|
| `confirmed_fatal` | 3 |
| `confirmed_nonfatal` | 24 |
| `false_positive` | 1 |

Each row binds the verification-stripped pre-edit normalized `item_sha256` and
separately preserves the A7 judge's `verdict_item_sha256`. Model agreement was
not treated as evidence of severity.

## Per-id fault and drop ramifications

| rejected id | exact disposition | fault and drop ramification |
|---|---|---|
| `cex-dini-needs-a-compact-domain` | 1 nonfatal | The fixed `1/2` witness immediately negates uniform convergence; only the local definition citation is compressed. Dropping it removes the concrete noncompact-domain failure of Dini's theorem; retain unchanged. |
| `cex-dini-needs-monotonicity` | 1 nonfatal | `a_k>=1` immediately gives `x_k=1/(2a_k)` in `[0,1]`. Dropping it removes the explicit monotonicity-hypothesis counterexample; retain unchanged. |
| `cex-m-over-m-plus-n-has-noncommuting-iterated-limits` | 1 nonfatal | L1 omits the canonical-natural sum law that its exact source states. Dropping it removes the library's standard unequal-iterated-limit witness; retain unchanged. |
| `cex-mean-value-equality-fails-for-a-vector-valued-function` | 1 nonfatal | Step 2.1 omits L5's positivity of `iota(2)` when dividing. Dropping it removes the smooth polynomial witness separating scalar and vector mean-value equality; retain unchanged. |
| `cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly` | 2 nonfatal | Both lanes noticed the immediate strict-to-nonstrict reciprocal case split. Dropping it removes the canonical pointwise-but-not-uniform power example; retain unchanged. |
| `cex-the-mean-value-inequality-is-attained` | 1 nonfatal | The arbitrary-constant derivative claim is one definition-level extension of the cited constant-one result. Dropping it removes the witness proving the constant in the mean-value inequality is sharp; retain unchanged. |
| `cex-the-one-norm-comes-from-no-inner-product` | 1 nonfatal | Step 4.1 omits the L5 tag for the Euclidean bilinear-form instance. Dropping it removes the elementary parallelogram-law separation between norm equivalence and inner-product induction; retain unchanged. |
| `cex-uniform-convergence-does-not-control-derivatives` | 2 nonfatal | Both lanes found the same locally omitted eventual-monotonicity comparison, explicitly licensed by the cited corollary's Remark. Dropping it removes the rational witness that uniform convergence alone does not control derivatives; retain unchanged. |
| `cor-bolzano-weierstrass-in-rn` | 1 nonfatal | A real subsequence lemma was stated too generally in the local fact inventory, but the metric version is immediate and the proof already obtains convergence from sequential compactness. Dropping it removes finite-dimensional Bolzano–Weierstrass and many downstream compactness uses; retain unchanged. |
| `cor-uniform-cauchy-criterion-function-series` | 1 nonfatal | The tail identity compresses one finite-sum cancellation. Dropping it removes the uniform Cauchy criterion specialized to function series; retain unchanged. |
| `def-vector-valued-derivative-and-integral` | 1 fatal, repaired | “Every closed subinterval” included singleton intervals although integrability is defined only for `c<d`. It now says nondegenerate `[c,d]`, `c<d`. Dropping it would remove the central derivative/integral interface and break its large consumer cone; retain the corrected item. |
| `ex-componentwise-convergence-and-a-vector-valued-integral-computed` | 2 nonfatal | Terra found an omitted scalar derivative-rule citation; DeepSeek found inaccurate non-load-bearing opening framing (“both halves”). Dropping it removes the worked bridge from componentwise convergence/integration to a strict norm estimate; retain unchanged under fatal-only R1. |
| `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension` | 1 nonfatal | Constant-sequence convergence follows directly from the metric definition with zero error. Dropping it removes a deliberately false stronger claim's all-dimensions witness; retain unchanged. |
| `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` | 1 nonfatal | Absolute-square/sign consequences are compressed but immediate from multiplicativity and the absolute-value definition. Dropping it removes the comparison engine for all finite-dimensional norm equivalence and many current consumers; strongly retain unchanged. |
| `lem-p-norms-are-norms-and-induce-the-published-metrics` | 1 nonfatal | Zero-base power consequences follow immediately from the exact cited definition. Dropping it removes the proof that published `p`-norm formulas are norms/metrics and breaks their consumers; strongly retain unchanged. |
| `lem-uniform-convergence-implies-pointwise-convergence-real-functions` | 1 nonfatal | The local step tag omits the exact pointwise-convergence definition already declared and proved. Dropping it removes the basic implication used across the uniform-convergence page; retain unchanged. |
| `lem-uniform-integral-error-bound` | 1 false positive | L1 explicitly cites `def-oriented-integral`, whose equal-limit zero and antisymmetry clauses exactly license both challenged steps. Dropping it removes the quantitative bridge used to interchange uniform limits and integration; retain unchanged. |
| `rem-rn-conventions-and-scope` | 1 fatal, repaired | “Nonnegative base and rational exponent” falsely included zero to a negative rational power. The text now gives the exact positive-base/all-rational plus zero-base/positive-rational domain. Dropping it removes the page's dimension, exponent, reading-order, and generated-risk boundary ledger; retain the corrected item. |
| `thm-cauchy-schwarz-and-the-euclidean-norm` | 1 nonfatal | Equality of nonnegative quantities iff equality of squares is an immediate use of the cited nonstrict equivalence. Dropping it removes Cauchy–Schwarz, Euclidean norm structure, and a large consumer cone; strongly retain unchanged. |
| `thm-componentwise-limits-and-continuity` | 1 nonfatal | L8 omits the one-line absolute-value triangle bound used in a coordinate estimate. Dropping it removes the componentwise limit/continuity/derivative dictionary; strongly retain unchanged. |
| `thm-mean-value-inequality` | 2 nonfatal | Both lanes found the same routine ordered-field sign/product inventory omission in L9. Dropping it removes the correct vector-valued mean-value substitute and breaks later total-derivative results; strongly retain unchanged. |
| `thm-norm-inequality-for-the-vector-valued-integral` | 1 fatal, 1 nonfatal; repaired only for fatal | DeepSeek correctly found that the former `a=b` case assumed an undefined singleton integrability notion; Terra separately found only a routine nonnegative-product citation compression. Integrability is now conditional on `a<b`, while the oriented equal-limit value still proves `0<=0`. Dropping it removes the vector integral triangle inequality and downstream FTC/example uses; retain the corrected item. |
| `thm-uniform-derivative-limit-on-a-closed-interval` | 1 nonfatal | Restriction preserves differentiability by direct definition-unfolding on a smaller punctured domain. Dropping it removes the central theorem interchanging uniform derivative limits with differentiation; retain unchanged. |

No deletion, id change, or reading-order change is proposed.

## R1 repairs, contracts, and exact hashes

Exactly three item bodies changed, and only for confirmed-fatal rows:

| id | pre-A8 normalized SHA-256 | exact-final normalized SHA-256 |
|---|---|---|
| `def-vector-valued-derivative-and-integral` | `62d256c385181ea557c7e2ecd1e8ae7b1fac493beb34256737ee56b21f970d0d` | `41ce0e22244d94c3f826b55ab7a5da07eb104dd2132f7809633a4d59599bd908` |
| `rem-rn-conventions-and-scope` | `e97e0c742250a73d84462738598a4f7664242c3f6afa744403f1d36a1e36cf0d` | `c4a6f3fa43646cfff182b59ba8ccc3d93af468b77e361b86f2270648bfa4d95d` |
| `thm-norm-inequality-for-the-vector-valued-integral` | `cbece0eafcc9eb83e288001b8f9744b3d93d1222488c0d0cc974e8e396b11d49` | `49b54b1bc91e3bdaf73ee7d5fe7ffd0e00f9d3175cf222d2c5423812123c7710` |

Seven `full-source-section` quotations made stale by the two interface edits
were refreshed mechanically in the namespaced contract and deterministic
merged contract. Strict proof-contract validation passes 48/48. No contract
entry was changed for a nonfatal finding.

## Impact and exact rejudge handoff

The three public-interface changes have a 65-item current direct/logical
consumer union. `wave12-A8-impact-review.json` records an exact per-consumer
disposition after a complete read: 65 `still-licensed`, zero repaired, zero
unresolved. The restriction/integrability corrections only narrow invalid
singleton wording; load-bearing integral consumers use `a<b`. The rational-
power correction is compatible with every scope-ledger consumer. No Wave 13/14
content was edited.

The exact A8 edited-item and targeted-rejudge set is therefore:

- `def-vector-valued-derivative-and-integral`
- `rem-rn-conventions-and-scope`
- `thm-norm-inequality-for-the-vector-valued-integral`

No nonfatal target, false-positive target, page sibling, or still-licensed
consumer belongs in that set. `wave12-A8-rejudge-targets.json` records it.

## Personal-audit escalation

Root personally read all 23 unique rejected ids in full. Nineteen were already
among the 34 mechanically repeated-touch ids; adding
`fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`,
`lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`,
`lem-p-norms-are-norms-and-induce-the-published-metrics`, and
`thm-cauchy-schwarz-and-the-euclidean-norm` makes the exact combined personal-
audit union 38 unique ids. Root's no-sampling personal audit of all 38 is
recorded in `wave12-touch-escalations.md`.

## Stage boundary

Independent exact-final GPT 5.6 Terra certification, fresh verified stamps,
the live Step-8 guard, strict contracts, and final gate hashes are recorded in
the A8 certification/gate receipts. The composite A8 gate passes its Step-8 and
impact checks. Alpha did not manufacture a coverage pass, invoke a judge, write
a judge stamp, start A9, commit, or push.

## Targeted-rejudge adjudication handoff

The orchestrator subsequently ran the exact three-id targeted pair. Its six
current-context rows contain four rejections. Alpha recovered each tuple from
disk and appended four exact-hash decisions without changing any item, page,
contract, stamp, or impact receipt:

| id / model | exact outcome | phrase A9 must personally inspect |
|---|---|---|
| `def-vector-valued-derivative-and-integral` / Terra | `confirmed_fatal` (`other`) | The title says the derivative and integral are “defined componentwise and characterised intrinsically”; the body instead defines the derivative intrinsically and proves its componentwise criterion, while defining the integral componentwise without an intrinsic characterisation. |
| `thm-norm-inequality-for-the-vector-valued-integral` / Terra | `confirmed_nonfatal` | L10 says “a product of nonnegatives is nonnegative” but cites only inverse positivity and absolute-value properties; step 3.1 uses the omitted sign rule. |
| `rem-rn-conventions-and-scope` / DeepSeek | `confirmed_nonfatal` | Section 4 says “the theorem whose equality form it refutes is `thm-mean-value-inequality`”; the companion item refutes the vector generalisation of `cor-mean-value-theorem` and says the inequality is what survives. |
| `thm-norm-inequality-for-the-vector-valued-integral` / DeepSeek | `confirmed_fatal` (`other`) | The title concludes unconditionally that `||f||_2` is integrable for `a<=b`; the Statement correctly makes clause 1 conditional on `a<b`, because singleton integrability is undefined. |

The append-only ledger now contains 32 adjudications: 5 confirmed fatal, 26
confirmed nonfatal, and 1 false positive. `judge-compare.mjs` reports zero
unadjudicated rejection candidates. The current coverage gate has exactly three
errors: missing `wave12-coverage.json`, plus the two current confirmed-fatal
title rows above. The two confirmed-nonfatal rows are exact-hash closed but are
preserved in the A9 personal-inspection handoff.
