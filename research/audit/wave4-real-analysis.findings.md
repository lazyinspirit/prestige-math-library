# Wave 4 real-analysis Audit-Beta findings

## Continuity checkpoint

Substage A2 is complete and A3 approval is pending. The owned artifacts are `research/audit/wave4-real-analysis.provenance.jsonl`, `research/audit/wave4-real-analysis.proof-contracts.json`, and this file. I read the one-page manifest, all 18 in-scope items, all 86 numbered proof/refutation steps, every labeled Fact citation, every declared dependency target used by those Facts, all item Remarks, and the full A-page summary. The open mathematical constraints are the two class-(b) citation-interface proposals below. No item or page file has been edited. The exact next action is to wait for the orchestrator's A3 decision; if both repairs are approved, take one dedicated pre-edit touchlog snapshot for each materially repaired item, apply only the approved text, synchronize the proof contract, and perform the bulk pure-retag pass under the stage snapshots.

## Scope and coverage

The manifest contains the A page `library/real-analysis/sequences-and-limits.md`, no B companion, and these 18 items:

`def-sequence`, `lem-limit-of-tail`, `lem-limit-unique`, `lem-convergent-implies-bounded`, `lem-convergent-implies-cauchy`, `lem-null-times-bounded`, `thm-algebra-of-limits`, `lem-limit-preserves-order`, `thm-squeeze`, `lem-limit-abs`, `def-divergence-to-infinity`, `lem-reciprocal-of-null-diverges`, `lem-index-map-grows`, `lem-subsequence-inherits-limit`, `rem-sequence-conventions`, `fs-bounded-implies-convergent`, `fs-limit-preserves-strict-inequality`, and `fs-subsequence-convergence-implies-convergence`.

Fifteen items carry a Proof or Refutation. The proof contract maps all 86 numbered steps exactly once, records 176 distinct Fact/source citation contracts, and supplies all eight boundary dispositions for each proof-bearing item. `node tools/proof-contract.mjs research/audit/wave4-real-analysis.proof-contracts.json --strict` reports 0 errors and 0 warnings for all 15 items.

Coverage is complete: every numbered proof/refutation step and every dependency citation in the manifest page and its in-scope items was read against the target's on-disk Definition, Statement, Example, or Statement-refuted clause. No exception remains.

## A1 provenance determination

All 18 Statements are recognizable established analysis. Three match a located source exactly; fifteen consolidate standard clauses, change indexing conventions, strengthen an all-index hypothesis to an eventual one, or package a standard witness with library-specific interface prose. None satisfies the owner's positive-determination requirement for a genuinely invented `ai-generated` Statement.

Statement census: 3 `literature-derived` / `exact-source`; 15 `ai-altered` / `semantic-source`. Proof census: 3 `literature-derived`, 7 `ai-altered`, 5 `ai-generated`, and 3 `not-applicable`. Every row has a working located URL and `alpha_concurred: false`; no `established-knowledge` exception is being requested.

| item | statement | proof | evidence | principal source |
|---|---|---|---|---|
| `def-sequence` | `ai-altered` | `not-applicable` | `semantic-source` | Hunter Ch. 3; CMU subsequence notes |
| `lem-limit-of-tail` | `ai-altered` | `ai-generated` | `semantic-source` | Hunter Ch. 3 tail invariance |
| `lem-limit-unique` | `literature-derived` | `ai-altered` | `exact-source` | Hunter Proposition 3.11 |
| `lem-convergent-implies-bounded` | `literature-derived` | `literature-derived` | `exact-source` | Hunter Proposition 3.19 |
| `lem-convergent-implies-cauchy` | `ai-altered` | `literature-derived` | `semantic-source` | Hunter Theorem 3.46, forward direction |
| `lem-null-times-bounded` | `literature-derived` | `ai-generated` | `exact-source` | Kentucky and Reed sequence notes |
| `thm-algebra-of-limits` | `ai-altered` | `ai-altered` | `semantic-source` | OpenStax; NKU Theorem 2-4 |
| `lem-limit-preserves-order` | `ai-altered` | `ai-altered` | `semantic-source` | Hunter Theorem 3.22; NKU Theorem 2-5 |
| `thm-squeeze` | `ai-altered` | `literature-derived` | `semantic-source` | Hunter Theorem 3.23; NKU pinching theorem |
| `lem-limit-abs` | `ai-altered` | `ai-altered` | `semantic-source` | Hunter Corollary 3.25 |
| `def-divergence-to-infinity` | `ai-altered` | `not-applicable` | `semantic-source` | Hunter Definition 3.12; NKU definition |
| `lem-reciprocal-of-null-diverges` | `ai-altered` | `ai-generated` | `semantic-source` | NKU reciprocal example; Hunter definitions |
| `lem-index-map-grows` | `ai-altered` | `ai-generated` | `semantic-source` | CUHK subsequence-index note; CMU definition |
| `lem-subsequence-inherits-limit` | `ai-altered` | `ai-altered` | `semantic-source` | Hunter Proposition 3.50 and corollary; CUHK theorem |
| `rem-sequence-conventions` | `ai-altered` | `not-applicable` | `semantic-source` | Hunter Ch. 3; CMU; Wikipedia convention check |
| `fs-bounded-implies-convergent` | `ai-altered` | `ai-generated` | `semantic-source` | Hunter alternating-sequence counterexample |
| `fs-limit-preserves-strict-inequality` | `ai-altered` | `ai-altered` | `semantic-source` | Hunter order theorem and `1/n` example; NKU |
| `fs-subsequence-convergence-implies-convergence` | `ai-altered` | `ai-altered` | `semantic-source` | Hunter alternating sequence and subsequence results; CUHK/CMU |

The row-by-row convention deltas, proof determinations, and URLs are in `wave4-real-analysis.provenance.jsonl`.

## A2 mathematical and citation audit

I found no false or overstrong mathematical Statement, Definition, Remark assertion about real sequences, proof conclusion, or counterexample construction. The epsilon estimates, rational-to-real epsilon conversions, finite-prefix maximum, denominator lower bound, order-limit contradiction, squeeze argument, reciprocal equivalence, both natural-number inductions, and all three counterexamples close under the cited mathematics.

No class-(a) falsehood is proposed. Two Facts require class-(b) citation-precision repair. The remaining seemingly broad citations are either redundant links or direct applications of the cited Definitions that a competent reader verifies in under 30 seconds; under the standing triage rule they are accepted without repair.

### Class (b): `fs-bounded-implies-convergent` source interface

`fs-subsequence-convergence-implies-convergence` Fact `[L1]` currently says:

> `[L1] Established in [[fs-bounded-implies-convergent]]: the map $n$ is strictly increasing; $s_{n_j} = 1$ for every $j$; and $(s_k)$ does not converge.`

Those three true propositions are proved in the target's Refutation, but its normative `## Statement` says only that the bounded-sequence claim is false, names the alternating witness informally, and defines the recursion for `s`; it neither defines `n` nor states the three imported conclusions. A proof Fact may cite a target's Statement, Definition, Example, or Statement-refuted interface, not internal proof steps.

Proposed smallest repair: in `fs-bounded-implies-convergent` replace

> `The claim above asserts the converse, and it is refuted below by the alternating sequence whose terms are $1$ and $-1$.`

with

> `The claim above asserts the converse. It is refuted by the alternating sequence $(s_k)$ and the index map defined by $n_0 = 0$ and $n_{\sigma(j)} = \sigma(\sigma(n_j))$: the refutation proves that $n$ is strictly increasing, $s_{n_j} = 1$ for every $j$, and $(s_k)$ does not converge.`

The following paragraph already defines `s` by recursion. The existing Refutation proves strict increase at step 1.4, the identity `s_{n_j}=1` at step 1.2, and nonconvergence at step 3.1. This adds the exact stable source clause consumed by downstream `[L1]` without changing any theorem, witness, proof step, id, or reading order.

### Class (b): `fs-limit-preserves-strict-inequality` natural successor

Current Fact `[L6]` says:

> `[L6] Order arithmetic: transitivity and trichotomy in $\mathbb{R}$, and in $\mathbb{N}$ the implication $k \ge N \Rightarrow k + 1 > N$ ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-nat-order]], [[thm-nat-linear-order]]).`

`def-nat-order` defines `<=` additively and `thm-nat-linear-order` states reflexivity, antisymmetry, transitivity, and totality. Neither source states that a successor is strictly above its predecessor, which is the additional premise needed at Refutation step 2.1.

Proposed replacement:

> `[L6] Order arithmetic: transitivity and trichotomy in $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]). On $\mathbb{N}$, $m < n$ if and only if $\sigma(m) \le n$, so $\sigma(k) = k + 1$ is the immediate successor of $k$ ([[lem-nat-discrete]]); transitivity of the linear order therefore gives $k \ge N \Rightarrow k + 1 > N$ ([[thm-nat-linear-order]]).`

Add `lem-nat-discrete` to `deps` and remove the now-unused direct dependency `def-nat-order`. The exact source clause is `lem-nat-discrete`'s Statement: `For all m,n in N: m<n iff sigma(m)<=n. Consequently there is no k with n<k<sigma(n): the successor sigma(n) is the immediate successor of n.` The elementary derivation is `N<=k<sigma(k)`, hence `N<sigma(k)=k+1` by mixed transitivity.

## Class (c): provenance retags proposed at A3

All 18 items currently lack component provenance and require the classifications in the A1 table. At A4 each item should receive the corresponding `provenance.statement` and `provenance.proof` block, the located URLs should be merged into `sources.references`, and the legacy one-axis `authorship` line should be removed if present. This is a bulk pure-retag pass except for the two items named in the class-(b) proposals.

Pure retro-tags must retain existing `verification.judge`, `verification.verified`, and `audited` records. If approved, the two material citation repairs must remove stale `verification.judge` and obsolete `audited`/`verification.verified` certification as required by A4; Beta writes no replacement certification.

## Recorded prose defects and published-claim decay

These are nonfatal prose defects under the binding triage rule and are recorded, not chased or proposed for A4 in this batch:

- `library/real-analysis/sequences-and-limits.md` is a legacy multi-section page body rather than the required two nonempty summary paragraphs under 150 words each. It also contains counts/self-ranking (`four load-bearing results`, `three false statements`) and page-position/survey claims forbidden by the current summary contract. Its paragraph saying the next page's results `are now proved` is current, while nearby language that they are `not available at this point in the reading order` is a reading-order claim rather than a mathematical dependency used here.
- `lem-convergent-implies-bounded` Remark line 79, `lem-subsequence-inherits-limit` Remark line 78, and `fs-bounded-implies-convergent` Remark line 99 say Bolzano-Weierstrass is not proved anywhere and that its page is planned/not written. `thm-bolzano-weierstrass` now exists on the published next page.
- `rem-sequence-conventions` lines 138-150 says the next page is merely future work and that monotone convergence and Bolzano-Weierstrass are proved nowhere. Both published theorems now exist.
- `lem-convergent-implies-cauchy` Remarks lines 73-75 and `fs-subsequence-convergence-implies-convergence` Remark line 74 call the next page planned/not written. Their accompanying mathematical qualifications remain correct: Cauchy completeness was already available through `thm-reals-cauchy-complete`, and the cited short route proves the claimed Cauchy/subsequence bridge.

No proof step relies on any of these corpus-scope assertions.

## A4 status and unresolved concerns

A3 approval has not been issued, so no item, page, verification block, provenance frontmatter, or source list has been changed. The proof contract describes the published A2 text and flags the successor-source issue in its endpoint worksheet.

The only unresolved concerns are the orchestrator's A3 decisions on the two class-(b) proposals. Alpha should independently confirm the repaired source interface and natural-successor citation at A6. As recorded in A0, cross-batch consumers target `def-sequence` and `lem-index-map-grows`; their content was read here, and their consumer impact remains for Alpha's A6 cross-batch audit.

## A4 dispatch blocker — 2026-08-04

The unattended state file records A3 as complete, but no A3 adjudication exists. The dispatched process was given the Alpha A6/A8 brief instead of an A3 task; its result explicitly states that it performed no adjudication and approved no repair or provenance determination. Its exit code was nevertheless journalled as a successful A3 judgment, after which the driver advanced to A4.

The A4 authorization condition is therefore unmet. I made no item, page, provenance, source-list, verification, proof-contract, or touchlog edit in this dispatch. The existing `pre-A4` stage snapshot was taken by the driver and does not license an edit. A correctly briefed orchestrator must adjudicate the real-analysis ledger and both class-(b) proposals from disk before this batch can resume A4.

## A4 complete — 2026-08-04

`research/audit/wave4-A3.md` now contains the orchestrator's disk-verified approval. I applied its real-analysis decisions exactly: 18 provenance retags, 16 of them pure, and the two approved material citation repairs. No page file, id, title, reading order, Statement conclusion, proof step, or Remark was changed.

The model-side A4 source check resolved Hunter's Chapter 3 PDF, the CMU compactness notes, the Reed null-times-bounded page, OpenStax §5.1, Wikipedia's limit page, and the University of Wisconsin Math 521 page. The Kentucky URL already confirmed 404 at A3 was removed. The canonical NKU redirect could not be fetched through the model-side route and the CUHK PDF returned HTTP 502, so both were omitted rather than written into frontmatter. The affected ledger rationales record those observations. `lem-index-map-grows` now uses the Wisconsin page, which explicitly states that a subsequence index sequence satisfies $n_k \ge k$, together with the CMU strictly-increasing-index convention.

All 18 items now carry the ledger-matching component labels and every retained ledger URL appears in `sources.references`. The final census remains 3 `literature-derived` / `exact-source` and 15 `ai-altered` / `semantic-source` Statements; proof provenance remains 3 `literature-derived`, 7 `ai-altered`, 5 `ai-generated`, and 3 `not-applicable`. None of the 18 items carried legacy `authorship`.

### `fs-bounded-implies-convergent`

Class: citation precision. Dedicated baseline: `pre-A4-fs-bounded-implies-convergent`.

Old source-interface text:

> The claim above asserts the converse, and it is refuted below by the alternating sequence whose terms are $1$ and $-1$.

New source-interface text:

> The claim above asserts the converse. It is refuted by the alternating sequence $(s_k)$ and the index map defined by $n_0 = 0$ and $n_{\sigma(j)} = \sigma(\sigma(n_j))$: the refutation proves that $n$ is strictly increasing, $s_{n_j} = 1$ for every $j$, and $(s_k)$ does not converge.

The target's own Refutation supplies the three clauses at steps 1.4, 1.2, and 3.1 respectively. This makes `fs-subsequence-convergence-implies-convergence` Fact `[L1]` a faithful citation of the target's Statement interface without changing the witness or argument. The corresponding proof-contract quote was updated. The stale `verification.judge` and prior `verification.verified` blocks were removed; A6 supplies the independent current-text certification.

### `fs-limit-preserves-strict-inequality`

Class: citation precision. Dedicated baseline: `pre-A4-fs-limit-preserves-strict-inequality`.

Old Fact `[L6]`:

> `[L6] Order arithmetic: transitivity and trichotomy in $\mathbb{R}$, and in $\mathbb{N}$ the implication $k \ge N \Rightarrow k + 1 > N$ ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-nat-order]], [[thm-nat-linear-order]]).`

New Fact `[L6]`:

> `[L6] Order arithmetic: transitivity and trichotomy in $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]). On $\mathbb{N}$, $m < n$ if and only if $\sigma(m) \le n$, so $\sigma(k) = k + 1$ is the immediate successor of $k$ ([[lem-nat-discrete]]); transitivity of the linear order therefore gives $k \ge N \Rightarrow k + 1 > N$ ([[thm-nat-linear-order]]).`

The elementary derivation is $N \le k < \sigma(k)=k+1$, hence $N<k+1$ by transitivity. `lem-nat-discrete` replaced the insufficient direct dependency `def-nat-order`; the proof contract now quotes the lemma's exact Statement. The stale `verification.judge` and prior `verification.verified` blocks were removed; A6 supplies the independent current-text certification.

### Local checks and handoff

- `reflow.mts`: both material items unchanged after canonical reflow.
- `precheck.mts`: 2/2 pass.
- `proof-contract.mjs --strict`: 15/15 contracts, 0 errors, 0 warnings.
- `content-policy.mjs --audit`: 18/18 scoped items, 0 errors, 0 warnings.
- `rendercheck.mjs`: 18/18 clean.
- Targeted `citecheck.mjs`: 2/2 clean.
- `finite-smoke.mjs`: 0 errors; no selected finite check applies.
- `audit-manifest.mjs --json`: exit 0; 49 same-batch and 176 published-backward edges, with the new `lem-nat-discrete` edge classified published-backward.
- Global `fwdcheck.mjs`, `extcheck.mjs`, and `depsource.mjs`: exit 0.
- Global `depcheck.mjs` reports the expected wave-A4 `published-unaudited` class: 11 shared-wave material repairs, exactly 2 in this batch, and no dependency-resolution or cycle error. A6 must certify the two repaired real-analysis items.

Coverage remains complete. Every one of the 86 numbered proof/refutation steps, every labeled Fact citation, every cited dependency target used by those Facts, all item Remarks, and the full A-page summary were read in A2. The two repaired interfaces and their downstream uses were rechecked after A4. The only unresolved work is independent A6 certification/impact closure and the already-recorded A9 published-claim-decay sweep; there is no unresolved mathematical concern in this batch.
