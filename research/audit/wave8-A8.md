# Wave 8 A8 — Audit-Alpha adjudication

Date: 2026-08-09. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex
subscription at `xhigh`, owner-delegated. A9 was not started.

## Scope and result

Alpha recovered the complete durable Wave 8 record and verified the current
eight rejected items, their relevant dependencies, contracts, A7 verdicts,
contexts, hashes, and the sole orchestrator-owned `pre-a8` snapshot before
adjudicating. The A7 receipt is exactly 17 targets and the ledger contains 34/34
Boolean paired verdicts: DeepSeek passed all 17; Terra passed nine and rejected
the eight rows assigned here.

All eight rejections were adjudicated from current disk. The result is:

| outcome | count |
|---|---:|
| `confirmed_fatal` | 1 |
| `confirmed_nonfatal` | 6 |
| `false_positive` | 1 |

The append-only decisions are in
`research/audit/wave8-judge-adjudications.jsonl`, one exact
`(id, model, context_sha256)` row per rejection. Each row records the R1
verification-stripped pre-edit `item_sha256` and separately preserves the A7
judge's `verdict_item_sha256`; the two representations differ because the A7
judge implementation excludes only its own judge sub-block, whereas R1 and the
touch ledger exclude the complete verification block.

## Eight owner decisions

1. `thm-infinite-product-criterion` — **confirmed nonfatal**. Terra correctly
   observes that `lem-of-abs-value` does not state the triangle inequality.
   `lem-of-triangle-inequality` states verbatim
   `$|x+y| \le |x|+|y|$`; substituting that standard source in steps 1.4 and
   4.3 closes the citation omission immediately. This is below the binding
   thirty-second threshold, so R1 permits no edit.
2. `cex-cauchy-product-of-convergent-series-diverges` — **confirmed
   nonfatal**. Step 2.2 compresses the Archimedean reciprocal bridge.
   `cor-archimedean-reciprocal` supplies exactly that reciprocals fall below
   every positive bound; applying it to `(2-r)/2` for `r<2` closes the step in
   seconds. No edit.
3. `fs-evt-holds-on-every-bounded-domain` — **false positive**.
   `def-ordered-field` says verbatim that trichotomy makes `<=` a total order.
   The maximum of the two displayed reals is therefore one of them, and [L4]
   gives the elementary membership inequalities. No missing principle exists.
4. `thm-continuous-image-of-a-compact-set-r` — **confirmed nonfatal**. The
   two “single place” sentences create a literal editorial tension, but the
   lemma is the single formal dictionary reconciling the duplicated
   vocabularies and the theorem merely points to it. No hypothesis, conclusion,
   or proof inference is affected. A8 does not polish that wording.
5. `lem-paracompact-hausdorff-cover-shrinking` — **confirmed nonfatal**. F1
   compresses away the word “cover,” but its cited `def-paracompact-space`
   states verbatim that the open refinement “covers X and is locally finite”
   and repeats “locally finite open cover.” The source closes the compression
   in seconds. No edit.
6. `lem-nondegenerate-interval-is-not-null` — **confirmed nonfatal**. L6's
   two cited sources do not themselves state positivity of powers, but [L9]
   already supplies ordered-field sign rules and induction from
   `theta^0=1`, `theta^(k+1)=theta^k theta` is one line.
   `lem-power-monotone` records that exact conclusion. No edit.
7. `cor-q-is-meager-and-not-g-delta` — **confirmed fatal**, type `other`.
   L1's general assertion that an at-most-countable family always has an
   N-indexed presentation is false for the empty family, since no function from
   N to the empty set exists. `def-countable` does not state that assertion and
   directs the nonempty enumeration result to
   `lem-countable-iff-surjection-from-n`. This is a false reader-visible Fact,
   not a proof-step gap. It is unused: step 1.2 relies on the preceding exact
   bijection `Q approximately N`. Alpha deleted only the false clause, the
   now-unused `def-countable` dependency, and its contract citation.
8. `thm-mertens` — **confirmed nonfatal**. L9 is a heading-level citation
   compression, but `thm-algebra-of-limits` is titled “Algebra of limits: sums,
   scalar multiples, products and quotients” and proves the exact sum/scalar
   consequences used in steps 1.3 and 6.1. The lookup takes seconds. No edit.

## Exact fatal-only mutation

The only item whose own text changed at A8 is:

- `cor-q-is-meager-and-not-g-delta`

Pre-edit normalized hash:
`0c233b550b97c24e0a2260aee6c6a5567188595839a2ca772764d23f3c2b61f5`.
Exact-final normalized hash:
`8ccbe550554ceb11584e492815c66fea1521c2d5b8a3383e4b16f4421a6769ba`.

The first repair produced intermediate normalized hash
`c96ab3f27d07d81e8b0d702d01867c4b868b7739d0e01647af8126cc95975324`.
The host exact-current Terra certifier refused it because the first Remark's
claim that claim 1 works in “any countable space” is false: in a nonempty
countable discrete space every subset is open and closed, so only the empty set
is nowhere dense and the space is not meager. Alpha confirmed the refusal and,
under the existing `confirmed_fatal` licence, replaced only that clause with
the exact local account: step 1.2 lists `Q_R`, while step 1.1 proves each real
singleton nowhere dense. No additional adjudication row was added. The
Statement and all numbered proof steps are unchanged. Provenance remains
`statement: ai-altered`,
`proof: ai-generated`; no source, page, sibling, consumer, id, or reading order
was changed. The stale A6 `verification.verified` block was removed; no judge
block was present and no final judge stamp was written.

The namespaced and merged proof contracts remove only the obsolete citation
row and are strict; the Remark-only follow-up changes no obligation or
dependency. The complete old/intermediate/final repair record, class,
counterexamples, hashes, and unchanged provenance are in
`wave8-published-repairs.md`.

## Impact

The current reverse-dependency/direct-citation computation gives one changed
interface and ten required consumer reviews. Alpha read all ten current items
in full. All ten are `still-licensed`: they use only unchanged claims 1--3 or
the unchanged category-versus-measure example, never the removed unused L1
clause. Concrete per-consumer evidence is in
`wave8-A8-impact-review.json`.

The formal `impact-audit.mjs` receipt is pending the orchestrator-owned
`post-a8` snapshot. Alpha did not add any stage snapshot; the pre-edit ledger
still contains exactly one `pre-a8` snapshot, at
`2026-08-09T07:48:02.002Z`.

## Independent current reader

The first host Terra certifier read the complete current text at intermediate
hash `c96ab3f...` and returned `REFUSED`; its result and complete log are
preserved as
`certifier-a8-final-host-cor-q-is-meager-and-not-g-delta.*`. Alpha confirmed
and repaired that finding, so the refusal is historical evidence and cannot be
reused as a pass.

The fresh exact-final certifier context was staged and hash-bound to
`8ccbe550554ceb11584e492815c66fea1521c2d5b8a3383e4b16f4421a6769ba`:

- brief: `research/audit/wave8-A8-certifier-brief.md`;
- task: `research/audit/wave8-A8-certifier-tasks/cor-q-is-meager-and-not-g-delta.md`;
- index: `research/audit/wave8-A8-certifier-index.json`;
- resumable runner: `research/audit/wave8-A8-certifier-runner.mjs`.

The first fresh sandbox attempt failed before inference: WebSocket and fallback
HTTPS both ended at `Operation not permitted`. Its prompt, log, and null result
remain preserved as
`certifier-a8-final2-cor-q-is-meager-and-not-g-delta.*` in
`research/audit/wave8-dispatch/`. This is transport evidence, not
certification.

The subsequent exact-final host dispatch
`a8-final2-host-cor-q-is-meager-and-not-g-delta` completed under GPT 5.6 Terra
at `xhigh` in the read-only sandbox. Terra read the current item, its current
14 dependencies, and its current contract, independently recomputed the full
normalized hash above, returned `VERDICT: CERTIFIED` and
`CURRENT-TEXT: READ`, and ended with `FINDINGS: NONE`. The successful result
and full log are:

- `research/audit/wave8-dispatch/certifier-a8-final2-host-cor-q-is-meager-and-not-g-delta.result.json`
  (SHA-256
  `c31489c8c78ebf25ea5212747f1043f762751abc6babb400578025a8f5fb31d7`);
- `research/audit/wave8-dispatch/certifier-a8-final2-host-cor-q-is-meager-and-not-g-delta.log`
  (SHA-256
  `0d356b58a693ca16e5542e478934674f497e451ee5c788bd80b3fe2ddb64504e`).

Alpha verified the current disk hash still matched exactly and decided that
this independent current reading licenses the owner-delegated
`verification.verified` stamp. The stamp records model
`gpt-5.6-terra-codex-subscription`, verdict `certify`, date `2026-08-09`, scope
`published-audit`, and `delegated_by: owner`. It adds no judge block. Because
the normalized hash excludes `verification`, it remains `8ccbe550...`; the
stamped full-file SHA-256 is
`f278811ea8f0cad9b18ca8692c27b9f5982048429cb35d3f357ada4c5e527cd3`.

## Gates

Current disk passes:

- item precheck 1/1;
- dependency check with the published-audit pending-stamp allowance (the
  ordinary corpus mode is independently red on eight unstamped later-wave
  items outside Wave 8, not on this target);
- forward-reference, external-reference, citation, render, prose, and
  dependency-source checks;
- proof contracts 116/116 strict;
- finite smoke, zero errors;
- risk review, 116 routed and zero errors;
- audit content policy, 139 scoped and zero errors (seven inherited warnings);
- current audit-manifest generation with 1,603 relationships, and 1,603/1,603
  current edge dispositions;
- `git diff --check`;
- Step-8 guard: one changed item, 1/1 licensed, zero creations/deletions and
  zero nonfatal edits.

The independent certification and owner-delegated verification stamp are now
complete. Formal impact verification and the paired targeted rejudge remain
pending. No judge sweep was run or broadened.

An additional non-required corpus-wide `genrisk --receipt` probe is red only on
the concurrently introduced load-bearing seed
`rem-riemann-integral-choice-ledger`, which lacks a disposition. That item is
outside Wave 8 A8's licensed scope and has no relationship to this repair; no
attempt was made to mutate it or its receipt.

## Targeted rejudge and escalations

The required targeted paired-rejudge set, after the orchestrator's formal
impact receipt, is exactly:

- `cor-q-is-meager-and-not-g-delta`

No sibling or `still-licensed` consumer is in that set.

All eight rejected items were personal-audit escalations under the combined
touch-plus-judge rule: each was already a material A4/A6 repair target and then
received the A7 rejection adjudicated here. The orchestrator's current
personal-audit record now dispositions all eight. The fatal item was
additionally repaired twice at A8, the second repair being forced by the
independent exact-current certifier refusal.

- `cex-cauchy-product-of-convergent-series-diverges`
- `cor-q-is-meager-and-not-g-delta`
- `fs-evt-holds-on-every-bounded-domain`
- `lem-nondegenerate-interval-is-not-null`
- `lem-paracompact-hausdorff-cover-shrinking`
- `thm-continuous-image-of-a-compact-set-r`
- `thm-infinite-product-criterion`
- `thm-mertens`

The inherited A6 escalation
`rem-sums-proved-to-exist-but-not-evaluated` has already received the
orchestrator's personal audit. No deletion, id change, or reading-order change
is proposed.

## Exact handoff

No certification action remains. The orchestrator next records `post-a8`,
builds and verifies the formal one-interface/ten-consumer impact receipt from
Alpha's dispositions, and runs DeepSeek plus Terra only on
`cor-q-is-meager-and-not-g-delta`. It then builds the exact-current targeted
receipt, writes `verification.judge` only after both lanes pass, and reruns the
final current-context coverage gate before advancing to A9. Do not add a
sibling or consumer to the rejudge set.
