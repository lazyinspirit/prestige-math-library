# Wave 7 published-repair ledger

Audit stage: A6 (open). Reviewer: Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`. Date: 2026-08-09. Hashes are full SHA-256 values of
normalized item text with only the `verification:` block removed.

## A4 material repair certification status

The orchestrator's frozen split contains 46 material A4 items. Audit-Alpha read
the final current text of all 46 from disk, including every dependency list,
Fact, numbered proof/refutation step, and Remark. The required independent
read-only GPT 5.6 Terra certifier tasks were dispatched for all 46 items and the
changed completeness page. All 47 failed before inference because the local
Codex transport could not open either WebSocket or HTTPS (`Operation not
permitted`). Two dedicated retries after the Alpha repair below failed the same
way, for 49 failed attempts in total. Therefore none of the 46 has received a new
`verification.verified(scope: published-audit, delegated_by: owner)` stamp.
The per-attempt logs and result JSON files are preserved under
`research/audit/wave7-dispatch/`; transport failure is not certification.

## A6 Alpha repair awaiting independent certification

| item | fatal defect and final repair | normalized hash | independent status |
|---|---|---|---|
| `cor-compact-domain-maps-are-uniformly-continuous` | Step 1.1 used continuity to map a source neighbourhood into a target entourage ball, but the old Facts cited the irrelevant converse “uniform continuity implies continuity” and did not license an entourage ball as a neighbourhood in the induced topology. The final dependency/Facts interface cites `def-continuous-map-top`, `thm-uniformity-induces-a-topology`, and `lem-entourage-and-uniform-cover-dictionary`, and removes the irrelevant converse dependency. | `ed4880dc07ccf773dee888fb8e31c08142af521ec72acfe68f664263ab29ec60` | **PENDING.** Terra failed before inference; the earlier DeepSeek CLEAN result named the stale dependency set and is excluded. Uniquely labelled current-text refuter and certifier retries remain required. |

The final contract quotes the exact cited sections and passes strict validation.
The repair does not change an id, reading order, or the A4 public conclusion.
Its 812-consumer impact surface is fully dispositioned in
`research/audit/wave7-impact.json`; every affected current use remains within
the final hypotheses and direction.

## Exact Alpha-edited item list

- `cor-compact-domain-maps-are-uniformly-continuous`

No other `items/` or `library/` mathematical text was edited by Audit-Alpha at
A6. A7 and A8 have not started.

## A6 certification recovery and second repair round — 2026-08-09

This section supersedes the earlier transport-only status. The completed Terra
archive now contains current-text reads for all 46 material A4 items and the
changed page, plus a dedicated current-text read of Alpha's compact-domain
repair. Forty-three A4 items and the page returned `CERTIFIED`; the dedicated
Alpha repair also returned `CERTIFIED`. Three A4 items returned `REFUSED`.
Alpha adjudicated each refusal from disk under the binding 30-second threshold:
two were confirmed fatal and repaired, while one was confirmed nonfatal and was
recorded without an edit.

| item | class | old text/evidence | final repair and evidence | current normalized hash | independent status |
|---|---|---|---|---|---|
| `cor-compact-domain-maps-are-uniformly-continuous` | citation-precision / proof dependency | Step 1.1 lacked the continuity and induced-topology facts and cited the irrelevant converse theorem. | The dependency/Facts repair described above is unchanged. Terra independently read the final item and returned `CERTIFIED`; DeepSeek V4 Pro independently read the same normalized text and returned `CLEAN`. Evidence: `research/audit/wave7-dispatch/certifier-a6-resume-alpha-repair-cor-compact-domain.result.json` and `research/audit/wave7-preserved-refuters/cor-compact-domain-maps-are-uniformly-continuous--c0e44d93e7510b22.result.json`. | `ed4880dc07ccf773dee888fb8e31c08142af521ec72acfe68f664263ab29ec60` | **CERTIFIED** |
| `ex-rational-function-field-order` | confirmed falsehood in a Remark | “the sign at a point would not give a positive cone, because $t$ and $t-1$ would then be incomparable in the wrong way.” This is false because their difference is the constant $1$. | Replaced with the exact trichotomy obstruction: evaluation may be undefined at a pole, and where it is defined the nonzero rational function $t-x_0$ evaluates to $0$, so evaluation-sign cannot define a positive cone on the field. The derivation is elementary. Original refusal: `research/audit/wave7-dispatch/certifier-ex-rational-function-field-order.result.json`. | `9cdd2dabbcf8367cedd558f4fd65d2f6f98bf138c6791387583408e50625683c` | **PENDING final-text Terra and DeepSeek rereads.** Direct retries failed before inference (`Operation not permitted` / `fetch failed`). |
| `lem-limit-implies-local-boundedness` | confirmed incorrect citation / provenance classification | The ledger said Lebl §3.1 states the punctured-neighbourhood boundedness lemma with the $|L|+1$ estimate, and the item was tagged `literature-derived`. The current source does not contain that theorem or estimate. | Retagged the Statement `ai-altered` and appended a superseding `established-knowledge` row with `alpha_concurred: true`. The theorem is standard and follows immediately by applying the limit definition with $\varepsilon=1$ and the triangle inequality, exactly as the on-disk proof shows. Source checked: `https://www.jirka.org/ra/html/sec_limoffunc.html`. Original refusal: `research/audit/wave7-dispatch/certifier-lem-limit-implies-local-boundedness.result.json`. | `a8dc582edcf5b4d953fca347e65dfc74e6b0cc220385c526c38794d8cb656d85` | **PENDING final-text Terra and DeepSeek rereads.** Direct retries failed before inference (`Operation not permitted` / `fetch failed`). |

The third refusal concerned
`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`. Its metric-case
paragraph attributes arbitrary two-closed-set separation too directly to
`thm-metric-spaces-are-tychonoff-and-perfectly-normal`; that theorem explicitly
proves continuity of distance-to-a-closed-set, point/closed-set separation, and
metric normality rather than spelling out the ratio
$d(x,A)/(d(x,A)+d(x,B))$. Alpha confirms this is a non-load-bearing citation
overstatement whose missing one-line formula a competent reader supplies in
under 30 seconds. The mathematical choice-cost claim is correct. Under the
binding triage rule the refusal is recorded as **confirmed nonfatal**, with no
item edit and no repair cycle. Evidence:
`research/audit/wave7-dispatch/certifier-rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem.result.json`
and the independent DeepSeek finding preserved at
`research/audit/wave7-preserved-refuters/rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem--29706ffa6e9b765a.result.json`.

The two new repairs pass targeted precheck, rendercheck, citecheck, prosecheck
(zero errors), depsource, and `git diff --check`. The ledger-aware audit
content-policy gate passes with zero errors. The regenerated impact receipt
still contains 214 changed interfaces and 812 concrete `still-licensed`
dispositions and passes `impact-audit.mjs`; neither repair changes an id,
reading order, dependency direction, or public theorem conclusion.

The 43 material items with a hash-matched `CERTIFIED` Terra result now carry
`verification.verified` with model `gpt-5.6-terra-codex-subscription`, verdict
`certify`, date `2026-08-09`, scope `published-audit`, and
`delegated_by: owner`. The two final-text repairs and the nonfatal-refusal
Remark remain unstamped.

## Exact Alpha-edited item list — current

- `cor-compact-domain-maps-are-uniformly-continuous`
- `ex-rational-function-field-order`
- `lem-limit-implies-local-boundedness`

No other item or library-page mathematical text was edited by Audit-Alpha at
A6. The two second-round repairs were completed in one pass per item. A7 and A8
have not started.

## A6 refuter-found Remark falsehoods — 2026-08-09

Alpha overruled the refuter's `nonfatal` severity label on two literal
mathematical falsehoods. The standing 30-second rule excuses a quickly closed
logical gap; it does not license a false declarative sentence. Mathematical
accuracy is non-negotiable, and the workflow specifically requires Remark prose
to be read with proof-step suspicion.

| item | class | old text/evidence | final repair and evidence | current normalized hash | independent status |
|---|---|---|---|---|---|
| `ex-a-urysohn-function-on-the-real-line` | confirmed falsehood in a Remark | “a Urysohn function is never unique.” This is false for the discrete two-point space with the two singleton closed sets, where the endpoint prescriptions determine the only possible map. DeepSeek evidence: `research/audit/wave7-preserved-refuters/ex-a-urysohn-function-on-the-real-line--04b8634ce3ca6f75.result.json`. | Replaced the universal claim with a concrete second witness for the pair actually under discussion: use $x^2$ on $[0,1]$ and the same constant endpoint values outside. This map is continuous, has the required zero and one fibres, and differs from the displayed linear clamp. | `3a8d8194769956f1aefd8430db9798b165c15d64c4c8cb0ac2fa4cada4c3eb8c` | **PENDING final-text Terra and DeepSeek rereads.** |
| `fs-nth-term-test-converse` | confirmed falsehood in a Remark | The Remark said each listed test, including the root and ratio tests, separates $1/k$ from $1/k^2$. Both basic tests instead have boundary value $1$ for both sequences and are inconclusive. DeepSeek evidence: `research/audit/wave7-preserved-refuters/fs-nth-term-test-converse--47780c235cfbe92f.result.json`. | Replaced the overclaim with the exact distinction: the already-cited $p$-series theorem separates the two families, while the basic root and ratio tests do not. | `36eb5cafde980084d16a8b758f984ad76a62d7033f05344d189bf92c389ee70d` | **PENDING final-text Terra and DeepSeek rereads.** |

Both stale historical judge blocks were removed; the Urysohn example's stale
pre-repair page certification and the false-statement item's stale `audited`
stamp were also removed. Targeted precheck, rendercheck, prosecheck, citecheck,
depsource, and `git diff --check` pass. Neither repair changes an id, Statement,
proof conclusion, dependency edge, hypothesis, or reading order.

The exact current Alpha-edited item list is:

- `cor-compact-domain-maps-are-uniformly-continuous`
- `ex-a-urysohn-function-on-the-real-line`
- `ex-rational-function-field-order`
- `fs-nth-term-test-converse`
- `lem-limit-implies-local-boundedness`

No other item or library-page mathematical text was edited by Audit-Alpha.

## Superseding independent-certification status

All repair texts now have a successful current-hash independent Terra reading:

- `ex-rational-function-field-order` — `CERTIFIED` in
  `certifier-a6-repair-ex-rational-function-field-order.result.json`;
- `lem-limit-implies-local-boundedness` — `CERTIFIED` in
  `certifier-a6-repair-lem-limit-implies-local-boundedness.result.json`;
- `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` — the
  triage-aware reread returned `CERTIFIED` in
  `certifier-a6-triage-reread-rem-choice-cost.result.json` while explicitly
  preserving the citation overstatement as nonfatal;
- `ex-a-urysohn-function-on-the-real-line` — `CERTIFIED` in
  `certifier-a6-repair-ex-a-urysohn-function-on-the-real-line-final.result.json`;
- `fs-nth-term-test-converse` — `CERTIFIED` in
  `certifier-a6-repair-fs-nth-term-test-converse-final.result.json`.

The two newest repairs also have final-current DeepSeek `CLEAN` results, as do
the compact-domain, rational-function-order, and local-boundedness repairs.
Every original material A4 item and every Alpha repair now carries the required
`verification.verified` stamp. The only remaining A6 reader obligation is the
extra top-20 dependency-cone target
`rem-strength-order-of-the-nonnegative-tests`, whose direct DeepSeek retries
have so far failed before inference.

## Superseding A6 reader closure

The final top-20 dependency-cone lane subsequently returned `CLEAN` for
`rem-strength-order-of-the-nonnegative-tests` at current normalized hash
`3a3d9005e1cea91a1adb392ca941f123091240226ad18259fe4aa15f9e1aad8a`.
Evidence is preserved at
`research/audit/wave7-preserved-refuters/rem-strength-order-of-the-nonnegative-tests--f0ebda47ae8e65bc.result.json`.
The routed DeepSeek union is therefore complete at 160/160. Together with the
48/48 current Terra certifications and the passing A6 gate suite, this closes
the independent-reader obligation and licenses construction of A7's exact
48-item repair-target receipt.

## A7 repair-target receipt status

`research/audit/wave7-rejudge-targets.json` records the exact 48-item repair
set and reconciles against the split and Wave 7 manifests with no omissions or
extras. The production paired sweep was attempted only after confirming the
current prompt fingerprint has a passing DeepSeek + Terra injection test. Its
single-target transport probe produced no verdict in either lane: DeepSeek DNS
failed before inference and the fresh Terra Codex process could not reach its
model service. The six attempts and two final `keep:null` rows remain as honest
transport evidence. They do not certify or reject the item, and no A8 repair
was made. The full A7 sweep remains pending in an environment with the normal
judge transports.

## A8 fatal-only repairs — 2026-08-09

Alpha adjudicated all 40 current-context A7 rejection rows before changing any
item. Four rows were `confirmed_fatal`; the remaining 36 rows were either
`confirmed_nonfatal` or `false_positive` and licensed no mutation. The four
repairs below are the smallest corrections to the named public falsehoods.

| item | class | old text | final repair and evidence | final normalized hash | provenance transition | independent status |
|---|---|---|---|---|---|---|
| `def-completeness-properties` | false/overstrong Remark | “Neither development generalises the other; they meet exactly at $\mathbb{R}$.” | Replaced the unsupported uniqueness claim with: “Neither development generalises the other; the comparison above identifies their agreement at $\mathbb{R}$ without claiming that $\mathbb{R}$ is their only overlap.” The cited material establishes agreement at $\mathbb{R}$ but does not classify all possible overlaps. | `b54928b0a85e0e0c133a5240effb5de50a027c18611166b004c2bb2b627756fc` | unchanged: Statement `ai-altered`, proof `not-applicable` | **PENDING.** Current Terra dispatch failed before inference. |
| `ex-abel-dini-pair-for-the-harmonic-series` | false/overstrong Example prose | “The harmonic series already diverges as slowly as any explicit series on this page” and “the two exponents $1$ and $2$ straddle the boundary, and there is no last divergent series in the family.” | Replaced the superlative and fixed-pair boundary claim with the exact conclusion licensed by Abel-Dini: the harmonic series is a familiar slowly divergent series; exponent $1$ gives a divergent member and exponent $2$ a convergent member; absence of a slowest divergent positive series follows by applying Abel-Dini again to the newly produced divergent series. | `ae04bb16a5976cf65c5b698a53a4db8d907b84dd739aa1d3b12d97d36852d161` | unchanged: Statement `ai-altered`, proof `ai-generated` | **PENDING.** Current Terra dispatch failed before inference. |
| `ex-harmonic-series-diverges` | false/overstrong Example prose | The lower bound was called “the slowest divergence any explicit series on this page exhibits.” | Replaced that unsupported comparison with the exact consequence of the displayed bound: it gives “a concrete quantitative witness to their slow divergence.” The Abel-Dini sibling itself supplies a slower divergent series, so the old superlative was false. Three dependent proof-contract quotes were refreshed. | `134e6e2e24baeddd5559bf614af13377c516f388f096639432e2db1f37bd1a8b` | Statement `literature-derived` → `ai-altered`; proof remains `ai-altered`; the provenance evidence row is now `semantic-source` | **PENDING.** The final-hash Terra dispatch failed before inference. |
| `thm-hausdorff-completion-of-a-uniform-space` | false/overstrong title | “Every uniform space has a complete Hausdorff reflection …” | Replaced “complete Hausdorff reflection” with “Hausdorff completion.” The construction proves the completion object developed on the page; it does not prove the categorical reflector claim normally conveyed by “reflection.” Statement and proof are unchanged. | `e84eb0dd1aae7d50f797914131e554d9486f23665bd840aa55e00856ed7a0f0e` | unchanged: Statement `ai-altered`, proof `ai-altered` | **PENDING.** Current Terra dispatch failed before inference. |

All stale `verification.verified` data was removed from these four items. No
replacement certification or judge stamp was written. The current read-only
Terra attempts are preserved under `research/audit/wave7-dispatch/`; each
failed at WebSocket and HTTPS transport before inference, so each is null
evidence.

### Exact A8 Alpha-edited item list

- `def-completeness-properties`
- `ex-abel-dini-pair-for-the-harmonic-series`
- `ex-harmonic-series-diverges`
- `thm-hausdorff-completion-of-a-uniform-space`

No other item or library-page mathematical text was edited at A8.

## Superseding A8 final-current closure

All four A8 fatal repairs subsequently received current-hash GPT 5.6 Terra
`CERTIFIED` results. The touch ledger's operative `pre-a8` to `post-a8` interval
contains exactly those four changes; `step8-guard` licenses all four and no
other item. The A8 impact receipt dispositions all 31 required consumers as
`still-licensed`. The exact four-item final targeted receipt records matching
DeepSeek V4 Pro and GPT 5.6 Terra `keep:true` verdicts for every item, and the
judge stamps were applied only through that receipt.

The completed coverage receipt checks 214 items, 179 proof-bearing items,
1,827 relationships, 21 reconciled plan drifts, the 59-item spine receipt, and
48/48 required repair-target pairs. The remaining current rejections are all
hash-bound `confirmed_nonfatal` or `false_positive` dispositions.

## A9 published-claim-decay execution and final evidence

The A9 orchestrator reread all 48 repaired items and 11 containing home pages.
It approved two narrow stale-scope corrections, with no publication, id, or
reading-order change:

- `library/topology/uniform-spaces.md` now says “Hausdorff completion” instead
  of repeating the pre-A8 “complete Hausdorff reflection” overclaim.
- `rem-classical-oscillator-is-sine-of-one-over-x` now says that the later
  analytic notions are unavailable on this earlier page, not absent from the
  whole library, and explicitly explains the repository's `Statement refuted`
  convention for the linked sine counterexample.

The final normalized oscillator hash, with the verification block excluded, is
`950a18d311bee4d606a8d76ac36711f353a42be70b6a96831634519ae036f985`.
GPT 5.6 Terra independently returned `CERTIFIED` against that exact hash in
`certifier-a9-final3-rem-classical-oscillator.result.json`. Its exact final
judge context is
`f0707ce5c98f9e644bde170c8c4de79e97375f25b69e5f328bf584a0fac83bc8`;
DeepSeek V4 Pro and GPT 5.6 Terra both returned `keep:true`. Only this changed
item was rejudged. The A9 impact receipt covers its two direct citation
consumers as `still-licensed`, and the final stamp was applied only through
`wave7-A9-targeted-judge-receipt.json`.
