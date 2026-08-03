# Wave 1b — Audit-Alpha A6 report

Audit role: Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`.
Date: 2026-08-03. Status: **A6 complete**. A7 has not been run; no judge,
owner audit stamp, commit, push, publication, or A10 release was performed.

## Outcome

All fifteen A4 material repairs were independently certified from current disk
and received the delegated `verification.verified` stamp. Alpha also repaired
and independently certified eleven additional material targets: five consumers
of the topology-conventions seed, three items responsible for the five inherited
topology contract errors, and three refuter-confirmed false/inaccurate published
claims. The generated-risk receipt, reviewed-risk receipt, provenance audit,
impact receipt, frozen-edge receipt, dependency checks, render checks, and prose
checks all exit 0. The complete gate transcript is
`research/audit/wave1b-A6-terminal-gates.log`.

## Mandatory recovery receipt

Before taking an audit action, Alpha read the complete `briefs/audit-alpha.md`
with wave `1b`, `AUDIT-WORKFLOW.md`, `CLAUDE.md`,
`research/audit/RESUME.md`, `SCHEMA.md`, `README.md`,
`QUALITY-CONTROLS.md`, `wave1b-A3.md`, `wave1b-A4.md`, the complete A4
terminal/reflow logs, and all four findings bodies despite their stale opening
headers. Alpha loaded every row of the four provenance ledgers, page manifests,
proof contracts, frozen audit manifest, touch ledger, impact template, and
corpus `genrisk.json`.

Disk baseline was branch `main`, commit
`8289fc0498ec98108dfc7e49dc85b3d4dee4adda`, with the uncommitted Wave 1b A4
worktree intact. The frozen manifest SHA-256 is
`202312f78856f028a1b973957f3e83cbf3970f64f123b85ff7173e6e485b0530`.
No earlier Alpha report, published-repair ledger, judge ledger, judge-
adjudication ledger, or A7/A8 coverage receipt existed to recover.

Three fresh read-only GPT 5.6 Sol `xhigh` lanes were dispatched. None authored
A4. Every lane received this rule verbatim:

> NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30). Use non-escalated forms
> inside the workspace sandbox; record a blocker rather than asking.

Readers wrote no item content. The topology reader accidentally ran the
deterministic `genrisk` generator while verifying recovery; Alpha regenerated
the artifact after all final changes and then ran its receipt.

## 1. Certification of the fifteen A4 material repairs

Every result is **CERTIFY**. Hashes are raw SHA-256 values of the independently
read, pre-stamp file bytes. Reflow later left all fifteen byte-for-byte
unchanged. The stamp column means Alpha wrote exactly
`verification.verified` with model `gpt-5.6-sol-codex-subscription`, verdict
`certify`, date `2026-08-03`, scope `published-audit`, and
`delegated_by: owner`.

| item | independent lane | pre-stamp SHA-256 | stamp |
|---|---|---|---|
| `cex-hilbert-monoid-factorisation-not-unique` | real | `ff56a7166fcfcb56b975deae53d0f052f70c0efda3206894509e36cbeeb5a866` | written |
| `cex-ordered-field-not-archimedean` | topology | `16a39cf107ebf3e11a7ce814679e338badf39966f71a1d429f4bfe935681b8ee` | written |
| `cex-proper-subspace-with-an-equinumerous-basis` | linear algebra / number theory | `482acf957fde21664d1140e680af23d8f8ba275f6db86466cbc8ea57529eca4a` | written |
| `cor-cauchy-reals-lub-complete` | topology | `15c2c717db2bc807c1d6e032938b8dae84ef7b5803b970acd1e38c412e665fdf` | written |
| `cor-factorisation-of-a-nonzero-integer` | linear algebra / number theory | `45c79305a752858d459aa9c95581bc18932e899963976290e38225bebf5ef0df` | written |
| `ex-arbitrarily-long-runs-of-composites` | real | `84f30239bcabd9617f7037fac95b6e1b8e64418fafe8f7106fff39e9888f98aa` | written |
| `ex-no-rational-square-root-of-three` | real | `9e541f1a2fe03fd7ca0bd1cd6a4532b029317f92d037cd6ea3309996a340abf3` | written |
| `fs-euclids-product-of-primes-plus-one-is-prime` | real | `ec061afe4790573c9e894f301c9d98a57230b54b547777fbca7dc5b0f630f93f` | written |
| `fs-every-fermat-number-is-prime` | topology | `93544f5708f073289973c317dd0682abd3356d9a0a3edd53b5e306b09089bfd5` | written |
| `fs-n-squared-plus-n-plus-forty-one-is-always-prime` | topology | `5b8a98eafd3a9ef6a5312d8f94b9c996023e991f9bf774d01c5a0f3d80a278ed` | written |
| `lem-every-integer-above-one-has-a-prime-divisor` | linear algebra / number theory | `062c61783d4bd833ffb1ce7017db6133fdaba6eb15aac37109c5bc83300eee78` | written |
| `lem-metric-cauchy-with-convergent-subsequence` | topology | `146be33e62e8aa0cafe93de06cffef3cde269d7bf48b6490b6da1ab8659c045c` | written |
| `lem-p-adic-valuation-additive` | linear algebra / number theory | `dd8e29fe700e8c00fb3629717d976d439b021d40ad97b8eab0706e97f7fff358` | written |
| `thm-canonical-prime-factorisation` | linear algebra / number theory | `e5fb11862f40678650fe00ad78e3ecbde81a754fe0e7704a7cbc4d27f80ae391` | written |
| `thm-gcd-and-lcm-from-valuations` | real | `81719225053aa75118d2c040c1b3a800d0c28418c5525434ee2e7b106caec0c1` | written |

No `verification.audited` was written. The gate of record confirms all 26
material targets have the delegated stamp and no stale `judge` or `audited`
block. Exact old/new repair text, provenance transitions, derivations, and
certifiers are in `research/audit/wave1b-published-repairs.md`.

## 2. Generated-statement containment decisions

The final corpus report has 45 seeds and 8 nonzero cones. The initial 44/7
became 45/8 when the deliberately withheld `rem-topology-conventions` retag was
applied. `genrisk --receipt` exits 0.

### `rem-topology-conventions` — **UNFOLD** (ladder step 3)

- **Retag declined as a containment solution.** The provenance label itself was
  correctly applied as `ai-generated`, but no external source can establish
  this library’s exact choices across the four house-convention forks; retagging
  to a source-backed class is unavailable.
- **Restate declined.** A sourced general-topology paraphrase would still not
  source this editorial house ledger and would misclassify it as a theorem.
- **Unfold selected.** Alpha read the spine definition
  `def-t0-and-t1-spaces` first, then all four remark consumers. The relevant
  convention is now stated locally in each of the five consumers and every
  logical `deps` edge to the seed was deleted. All five current consumer texts
  were independently certified and stamped.
- **Narrow and verified-generated were not reached.** The logical cone is now
  empty. `ex-sorgenfrey-line` remains only a Remark wikilink, not a dependency.

### `ex-prime-factorisation-worked` — **VERIFIED-GENERATED** (step 5)

Retag was declined because the chosen pair 360/84, valuation table, Euclidean
cross-check, and product cross-check are a positively identified bespoke worked
example. Restate and narrow were declined because independent recomputation
verified every factorisation, valuation, gcd, lcm, Euclidean step, and product.
Unfold is inapplicable because there is no logical consumer. The sole cone member
`lem-p-adic-valuation-additive` uses only an optional Remark/forward pointer.

### `rem-complete-metrizability-is-the-topological-shadow` — **VERIFIED-GENERATED** (step 5)

Retag was declined because this is a library-local orientation/scope ledger.
Restate and narrow were declined after its claims were checked against
`lem-complete-remetrisation`, including the explicitly unproved characterization.
Unfold is inapplicable because there is no logical consumer. Its only cone member
`fs-completeness-is-a-topological-property` mentions it in a Remark.

### `cex-cantor-intersection-needs-vanishing-diameters` — **VERIFIED-GENERATED** (step 5)

Retag was declined because the exact metric/tail-set witness is a bespoke
construction. Restate and narrow were declined after independent checking of the
metric, completeness, closed bounded tails, diameter formula, and empty
intersection. Unfold is inapplicable because there is no logical consumer. Its
only cone member `thm-cantor-intersection-metric` has an optional
Remark/forward pointer.

All four full ladder records, including reviewer and present cone, are stored in
`research/audit/genrisk.json`. The receipt’s seven warnings are the standing
warnings for seeds intentionally left `verified-generated`; the unfolded
topology seed is not one of them.

## 3. Established-knowledge waivers

Alpha **concurred** on all three:

- `lem-of-square-monotone`: standard factorisation/sign argument on the
  nonnegative cone;
- `prop-of-ab-less-b`: standard cancellation by a positive factor;
- `lem-of-hom-order-preserving`: standard nonzero-square argument for a field
  homomorphism out of a complete ordered field.

The independent real-analysis lane separately concurred after reading the
current statements and proofs. Exactly these three ledger rows now contain
`alpha_concurred: true`; their deferred provenance blocks were applied, so these
were the final 3 of 174 retags. No URL was manufactured. `content-policy --audit`
checks all 174 rows at 0 errors; its three warnings are generated-kind warnings,
not missing-URL or waiver failures.

## 4. Proof-refuters and Alpha adjudications

### Coverage

- All 134 Wave 1b high/critical proof contracts were independently read
  step-by-step: 25 linear algebra, 25 number theory, 27 real analysis, and 57
  topology. Their `risk_review` rows are complete; merged `risk-report
  --require-reviewed` exits 0.
- Every one of the original 44 corpus `ai-generated` seeds was routed, and the
  newly retagged topology-conventions seed was separately read, for 45/45 final
  seed coverage.
- The proof-bearing top-100 large-cone receipt has 68 ids. Its intersection with
  the Wave 1b manifest is 14 real-analysis items and zero in the other three
  lanes; all 14 were reread. A6 did not re-read the 54 out-of-wave top-100 ids.

### Confirmed fatal findings

1. `lem-p-adic-valuation-on-q`: **confirmed fatal inaccurate citation**. Its
   Remark quoted an obsolete position from `ex-p-adic-ultrametric`; the current
   target says general machinery is available. The Remark now states the exact
   relation. Fresh post-reflow certification:
   `2de4443e7eb3e6e1a6631b8d9f01a031e6c9f25a56803a9a961aaa5c402e3b41`.
2. `cex-same-cardinality-without-a-canonical-bijection`: **confirmed fatal
   false overclaim**. Nonuniqueness does not prove that no map is distinguished,
   and `x -> {x}` is distinguished in the displayed witness. Title, Statement,
   conclusion, and Remarks now claim exactly nonuniqueness. Fresh post-reflow
   certification:
   `a6cd8a951dceefbdafd50d2ecb4e9fecc2a9f2dc8812ec91ea413e89837129bb`.
3. `rem-function-space-conventions`: **confirmed fatal published-claim decay**.
   General topological compactness is developed later, not nowhere in the
   library. The Remark now says it is unavailable at this page’s reading-order
   position. Certification:
   `af5241dc6e683daeef1eb72a5cb674aa356e5c2479e371da6037e538692e9023`.
4. `thm-uniqueness-complete-ordered-field`: **confirmed fatal frontmatter/source
   defect**. A4 put the Keisler reference beneath `verification.audited`, making
   invalid YAML. The same two source lines were moved under
   `sources.references`; no mathematics or valid stamp was changed. Independent
   parse/source certification:
   `a8d51592d0f3334e72c29d4427a10ca1a64cb30ae9edd927a85dbcb87d5af856`.
5. `ex-finite-choice-by-induction`: **confirmed fatal false choice-theory
   generalisation**. ZF’s issue is arbitrary families, not mere infinitude;
   infinite definable selectors exist. The first repair pass accidentally left
   the false paragraph alongside the correction and was independently rejected.
   A dedicated second snapshot preceded its deletion. Fresh post-reflow
   certification:
   `9b64601feaabce696fa183434dc4fca8f0d21271d2edbebf91665d69e6fd1baf`.
   Its stale generated foundations-contract quote was separately refreshed;
   strict validation now passes 23/23.

All material repairs above had stale judge/audited blocks removed and received
an independent delegated verified stamp. No repair relied on the author’s own
certification.

### Confirmed nonfatal findings under the 30-second rule

- `cex-unsigned-half-angle-formula`: step 1.1 labels the exact sine/cosine values
  `[given]` although its supplied dependency also closes them. A competent
  reader closes the attribution in under 30 seconds; no content mutation.
- `cor-cauchy-reals-lub-complete`: `[L4]` compresses the elementary cofinal-
  powers/geometric-decay move. It is recoverable immediately from the supplied
  Archimedean material; no second repair cycle.
- `lem-of-square-monotone`: step 3 compresses `|x|^2=x^2`; elementary and
  sub-threshold.
- `def-archimedean-field -> def-field` and
  `thm-uniqueness-complete-ordered-field -> thm-of-square-roots` are redundant
  rather than false dependency edges. They remain under the no-polish rule.
- `thm-euclid-infinitude-of-primes` leaves the contradiction assumption’s
  ordering implicit; `thm-canonical-prime-factorisation` leaves the natural-
  number dichotomy implicit; and `ex-two-is-the-only-even-prime` uses “odd” in
  concluding prose without a separate definition. Each was directly closed in
  under 30 seconds from the current text.
- The LA/NT lane grouped several elementary ordered-ring and finite
  minimum/maximum translations as compressed rather than unlicensed. Alpha
  checked the cited ambient order/ring facts; no concrete false claim or missing
  hypothesis remained, so no fatal cycle was opened.

No concrete refuter allegation was adjudicated a false positive. All other
routed items returned no finding after the reader inspected the supplied
dependencies.

## 5. Cross-batch and cross-level edge audit

The per-edge receipt is `research/audit/wave1b-edge-audit.json`; it contains all
2,137 frozen rows exactly once, with lane, current status, mechanical witness,
semantic verdict, and Alpha adjudication.

| scope | frozen | active current | retired |
|---|---:|---:|---:|
| published-backward / cross-level | 1,317 | 1,297 | 20 |
| cross-batch | 153 | 153 | 0 |
| forward | 42 | 42 | 0 |
| **required cross/cross-level/forward total** | **1,512** | **1,492** | **20** |
| same-batch (also audited) | 625 | 621 | 4 |
| **all frozen edges** | **2,137** | **2,113** | **24** |

Reader partition was 1,070 linear-algebra/number-theory rows, 144 real-analysis
rows, and 923 topology rows. The 24 retirements are exactly the 23 A4 unused
number-theory edges (19 published-backward, 4 same-batch) plus the A6 unused
topology edge
`cex-sequential-closure-strictly-inside-closure -> lem-subset-of-countable`.
There are no additions or unexplained omissions.

Within the required 1,512 scope, 1,472 frozen rows have a literal current body
link or exact proof-contract witness. Of the remaining 40, 20 are the retired
published-backward rows and 20 are active implicit type, ambient-structure, or
notation prerequisites. All 20 active implicit rows were directly read and
adjudicated exact. All 42 forward rows are genuine orientation/witness pointers,
not proof licenses. The topology lane found no non-null frozen target-provenance
drift.

## 6. Residual contract errors and impact dispositions

### Five inherited topology `citation-uses` errors

All were repaired under §9 rather than queued to A10:

- `cex-strict-contraction-without-a-fixed-point`: missing `[L5]` label added to
  step 3.1 and the matching contract use (one error);
- `cex-sequential-closure-strictly-inside-closure`: unused `[L5]`, dependency,
  and contract citation deleted (one error);
- `cex-non-metrizable-topology`: unused `[L2]` and three empty-use contract
  citations deleted; the optional limits Remark cites the two actual targets
  directly (three errors).

The three current item texts were independently certified and stamped. Topology
strict contract now passes 57/57 with 0 errors and 0 warnings. The late
finite-choice foundations-contract quote was an additional generated-artifact
issue, not one of these five; it now passes 23/23.

### Impact audit

The final `pre-A4 -> final-A6` closure has 181 changed interfaces and 2,070
affected items. It preserves every one of A4’s 2,069 rows and adds
`lem-finite-choice`.

- 155 roots are provenance/source-only and were disposed wholesale under the
  workflow’s pure-interface rule.
- 26 roots are material; 410 consumers are reached by at least one of them.
- Every affected item has a concrete row: 2,043 `still-licensed` and 27
  `not-load-bearing`; none is pending.

The per-root classification is
`research/audit/wave1b-impact-classification.json`; all 2,070 row dispositions
are in `research/audit/wave1b-impact-audit.json`. The receipt exits 0.

### Multiple-repair escalation

The final touch report has eight ids above the one-repair threshold. Alpha
personally audited each final state and its ramification; none is proposed for
deletion:

| item | count | fault history and ramification |
|---|---:|---|
| `cex-non-metrizable-topology` | 3 | A4 retag, A6 unused-contract cleanup, formatting reflow. Claim remains an independently certified standard two-point witness; no logical consumer depends on removed support. |
| `lem-p-adic-valuation-on-q` | 3 | A4 retag, stale-citation repair, formatting reflow. Statement/proof remain sound; one logical consumer retains the same valuation lemma. |
| `cex-sequential-closure-strictly-inside-closure` | 2 | A4 retag plus unused Fact/edge deletion. The cocountable-topology witness is unchanged. |
| `cex-strict-contraction-without-a-fixed-point` | 2 | A4 retag plus missing citation label. The repair strengthens traceability without changing the counterexample. |
| `thm-uniqueness-complete-ordered-field` | 2 | A4 malformed source insertion plus YAML relocation. Mathematical text and theorem interface are unchanged. |
| `rem-function-space-conventions` | 2 | generated-convention unfold plus stale reading-order claim repair. Both final claims were independently reread. |
| `cex-same-cardinality-without-a-canonical-bijection` | 2 | false overclaim narrowing plus formatting reflow. It has no current consumer and now proves exactly nonuniqueness. |
| `ex-finite-choice-by-induction` | 2 | rejected incomplete first repair plus corrected second repair; later reflow was formatting-only. Sole cone member is mention-only. |

## 7. Verbatim terminal gates

The complete verbatim output, including all warning rows and every exit code, is
`research/audit/wave1b-A6-terminal-gates.log`. The primary gate bundle ends:

```text
2947 file(s) checked. 0 error(s), 590 warning(s).
  library-scope-denial: 224
  count-in-prose: 192
  count-of-this-page: 174

OK — no positional claim contradicts the spec.
[exit 0]

Script done on 2026-08-03 16:30:36+10:00 [COMMAND_EXIT_CODE="0"]
```

A first attempt to append a post-report check used a malformed nested-shell
wrapper: the recorded command shows `ec=\0` and broken quoting and consequently
prints a spurious `[exit 59]`, although `git diff --check` itself emitted no
diagnostic and the outer capture records command exit 0. This is a logging-
wrapper defect, not reported as a passing gate, and is preserved in the log.
Immediately after it, a literal checked script reruns `git diff --check` and
records its real exit 0.

Every command in the primary gate bundle exited 0. The malformed post-report
capture attempt and its clean rerun are distinguished above. Exact gate summaries:

- reflow: all 21 materially changed proof items unchanged;
- precheck: 21 checked, 0 failing;
- strict contracts: 25/25, 25/25, 35/35, 57/57, and the repaired foundations
  seed contract 23/23, all 0 errors/0 warnings;
- merged Wave 1b contract: 142/142, 0 errors/0 warnings;
- reviewed risk: 142 routed, 0 errors (134 high/critical reviews required and
  complete);
- finite smoke: 0 errors, 0 selected checks;
- content policy: 174 scoped, 0 errors, 3 generated-kind warnings;
- genrisk receipt: 45 seeds, 8 load-bearing, exit 0 with seven standing
  verified-generated warnings;
- impact receipt: 181 changed interfaces, 2,070 affected items, exit 0;
- edge integrity: manifest hash matched, 2,137/2,137 rows, 2,113 active, 24
  retired;
- stamp honesty: 26/26 delegated verified stamps, no audited/judge block on a
  material target;
- `depcheck`: exit 0, final `OK`, 153 repository-wide warnings;
- `fwdcheck`: 0 open, 341 closed, 25 load-bearing, exit 0;
- `extcheck`: 116 recorded-not-proved, 83 resting on them, final `OK`, 83
  warnings, exit 0;
- `citecheck`: 2,767 items, 22 heuristic warnings, exit 0;
- `rendercheck`: 2,947 files, final `OK`, exit 0;
- `prosecheck`: 2,947 files, 0 errors, 590 warnings, final `OK`, exit 0;
- `git diff --check`: exit 0.

No level-coverage or paired judge gate was run because those belong to A7/A8,
not A6.

## 8. Confidence and explicit limits

Confidence is high for the assigned A6 contract. The 15 A4 material repairs and
11 Alpha material targets have independent current-text certifications; required
risk proofs and all final generated seeds were read; every frozen edge and every
impact consumer has a durable disposition; current contracts and repository
gates agree with the reports.

This confidence does **not** claim that A7 has judged the wave. Alpha did not run
DeepSeek/Terra, did not create a judge/coverage ledger, did not re-fetch all 104
A4 URLs, and did not independently re-read the 54 out-of-wave members of the
global proof-bearing top-100 receipt. The finite-smoke tool selected zero checks,
so its pass adds no finite-model evidence. The repository-wide heuristic warning
sets (153 dependency warnings, 83 external-material warnings, 22 citation
warnings, and 590 prose warnings) were not globally repaired; A6 adjudicated the
returned Wave 1b observations under the 30-second rule. No publication action
was taken, and A10 remains the sole owner pause.

## A8 resumed-role recovery receipt (2026-08-03)

Before beginning A8 adjudication, the resumed Audit-Alpha read the complete
`briefs/audit-alpha.md`, `AUDIT-WORKFLOW.md`, `CLAUDE.md`, `SCHEMA.md`,
`README.md`, `research/audit/RESUME.md`, `wave1b-A3.md`, `wave1b-A4.md`, this
full Alpha report, all four Wave 1b findings files, and the complete
`wave1b-judge-paired.jsonl` ledger. It also loaded and structurally reconciled
every row of the four provenance ledgers and page manifests, all 142 merged
proof contracts, all 2,137 audit-manifest and edge-audit rows, all 2,070 impact
dispositions, all 12 touch snapshots, all 45 generated-risk seeds, the 181-row
impact classification, and the complete published-repair ledger.

Disk state was verified at `main` commit
`8289fc0498ec98108dfc7e49dc85b3d4dee4adda`. The Wave 1b worktree remains
uncommitted and intact. The frozen manifest SHA-256 remains
`202312f78856f028a1b973957f3e83cbf3970f64f123b85ff7173e6e485b0530`;
the A7 ledger SHA-256 is
`0e367df2f462ad344aadaf1c13a5e4f00c5af003d69754880423c80db30cacb2`.
The ledger has 174/174 distinct ids in each lane, zero nulls, identical paired
context hashes, 16 DeepSeek rejections, 82 Terra rejections, and 83 distinct
rejected items. `depcheck`, `genrisk --receipt`, and `git diff --check` were
rerun from this disk state and exited 0. No pre-A8 adjudication ledger or
targeted-rejudge receipt exists. The exact next action is to adjudicate all 83
rejected items against their current disk text and cited dependencies, append
one exact-context row per model rejection, and invoke the published repair
protocol only for confirmed fatals.

## A8 paired-judge adjudication report (2026-08-03)

The durable A8 report is `research/audit/wave1b-A8.md`; the exact per-model
ledger is `research/audit/wave1b-judge-adjudications.jsonl`. All 98 rejection
contexts were adjudicated across 83 distinct items: 19 model rows were fatal
(18 distinct targets), 73 nonfatal under Alpha's 30-second threshold, and six
false positives. The 18 targets and six required consumer/dependency repairs
were independently certified after final reflow.

A8 remains open at one external-process blocker. The mandated targeted-rejudge
scheduler cannot spawn judge children in the non-escalated sandbox (`EPERM`),
so no targeted verdict, targeted receipt, or judge stamp exists. The complete
post-repair terminal record is
`research/audit/wave1b-A8-terminal-gates.log`; it records every other named
gate at exit 0 and the two targeted-rejudge blocker gates at exit 1. No A10
pause was released.
