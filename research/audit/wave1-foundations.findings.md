# Wave 1 · foundations pair — Audit-Beta findings (A1 + A2)

Pair: `order-zorn-and-the-axiom-of-choice` (A page, 24 in-scope items)
and `order-zorn-and-the-axiom-of-choice-examples` (B page, 8 in-scope
items). Auditor: Audit-Beta, GPT 5.6 Sol, `xhigh`, 2026-08-02. Files owned by
this agent: `research/audit/wave1-foundations.provenance.jsonl`, this file,
and `research/audit/wave1-foundations.proof-contracts.json`. No file under
`items/` or `library/` was modified.

## 0. Coverage

Every one of the 32 manifest items was read from disk in full. Every numbered
proof step in the 23 proof-bearing items (153 steps) was checked against its
inputs, and all 98 direct `[L#]`/`[A#]` fact-to-target citations represented in
the contracts were checked against exact text in the cited target. The nine
definition-only items, both page bodies, every `## Remarks` block, and all ten
out-of-scope dependency targets reached by the pair were also read in full. No
item, step, citation, dependency edge, page paragraph, or Remarks block was
excepted.

The scoped manifest records 145 dependency relationships: 103 `same-batch`, 16
`forward`, and 26 `published-backward`. Their mathematical uses were checked
in this pass. None of the 32 items carried a `provenance` block or a legacy
`authorship` line, so D5 legacy-field deletion does not apply to this pair.

## 1. A1 — provenance census

There are 32 rows in `wave1-foundations.provenance.jsonl`, with ids matching
the manifest exactly. Every one of the 16 distinct URLs in the ledger returned
HTTP 200 on 2026-08-02.

| `provenance.statement` | count |
|---|---:|
| `literature-derived` | 13 |
| `ai-altered` | 17 |
| `ai-generated` | 2 |

| `provenance.proof` | count |
|---|---:|
| `ai-altered` | 19 |
| `ai-generated` | 4 |
| `not-applicable` | 9 |

| evidence class | count |
|---|---:|
| `exact-source` | 13 |
| `semantic-source` | 17 |
| `trivial` | 2 |
| `established-knowledge` | 0 |
| `none` | 0 |

The two genuinely generated, trivial, directly checkable statement seeds are
`ex-finite-choice-by-induction` and
`cex-progressive-map-without-fixed-point`. At A4 they require
`generation.role: example` and `generation.role: counterexample`,
respectively. The other two generated-proof classifications are
`cor-ac-iff-zorn` and `fs-zorn-provable-in-zf`: their statements are sourced,
but their short proofs are library-specific compilations of the preceding
results. No row uses `established-knowledge`; consequently there is no held
case and no D2 concurrence request. Every row remains
`alpha_concurred: false` for Alpha's independent A3 review.

The central source recovery is strong enough not to treat the Bourbaki-Witt
development as novel. The Mathlib Bourbaki-Witt documentation and Zubir's 2017
paper both carry the admissible-set/extreme-point construction used here: the
intersection defining the least admissible set, extreme points, the cut
`z <= y or f(y) <= z`, the proof that all extreme points equal the least
admissible set, and the proof that it is a chain. Encyclopedia of Mathematics
and the University of Toronto choice notes cover the Zorn/choice-function
arguments; Jech, Cohen's published paper, and the Stanford Encyclopedia cover
the independence and socks material. The remaining standard definitions and
examples were matched against the cited order-theory and choice references.

Sources recorded in the ledger include Mathlib's Bourbaki-Witt documentation,
Zubir's *Bourbaki-Witt Principle*, Encyclopedia of Mathematics, University of
Toronto notes on choice, Jech's *The Axiom of Choice*, Cohen's 1963 paper, the
Stanford Encyclopedia of Philosophy, and standard reference pages for the
order-theoretic definitions. Exact URLs and item-by-item convention deltas are
in the JSONL rows.

## 2. A2 — mathematical and citation audit

**No fatal mathematical defect, proof gap, or citation-precision defect was
found.** Every Statement and Definition is true as written, every proof closes,
and each cited fact says what the consuming step needs. No item repair is
recommended before the Alpha risk review.

In particular, the skeptical read verified the load-bearing chain:

- intersections give the least admissible set; the extremal cut is closed
  under the progressive map and under suprema of chains;
- minimality of the least admissible set gives extremal comparability,
  successor-extremality, sup-extremality, and then that every element is
  extremal and the admissible set is a chain;
- the supremum of that chain is a fixed point, including the empty-chain and
  least-element conventions used by the proof;
- the poset of chains ordered by inclusion is chain-complete, simultaneous
  choice of strict upper bounds yields the progressive extension map, and its
  Bourbaki-Witt fixed point gives Zorn's lemma;
- unions of chains of partial choice functions are compatible partial choice
  functions, so a Zorn-maximal partial choice function is total;
- the conditional Cohen/Fraenkel independence statements keep the necessary
  `Con(ZF)` qualification; and
- all five examples and all three counterexamples satisfy their advertised
  hypotheses and conclusions, including the empty, singleton, degenerate,
  endpoint, and nonempty-choice cases relevant to them.

`ex-russells-socks` is precise in its item text: a choice function for a
particular sock family is an *instance* of AC, while the quoted independence
result concerns the strictly weaker universal principle for countable families
of pairs. Its phrase "the first being a theorem and the second an axiom" is
read in that explicitly qualified sense. The B-page paraphrase is less precise
and is included in P2 below.

## 3. Nonfatal page-prose/schema findings

These are recorded under the standing triage rule; they do not affect any item
Statement or proof.

### P1 — A-page summary shape and survey claims

`library/foundations/order-zorn-and-the-axiom-of-choice.md` has five authored
paragraphs beginning with `**Objective.**`; the page-summary contract requires
exactly two paragraphs, each under 150 words. It also says that this is "the
first of two foundations pages", names what later pages draw on, claims what
"every later page" can say, and says the library "does not yet contain"
constructible-universe and forcing machinery. Those are prohibited position,
other-page, and mutable corpus-scope claims even though no present mathematical
falsehood or published-claim decay was found.

**Proposed A3 route:** approve a two-paragraph mathematical-only restatement at
A4/A6, removing the survey/count/scope language. If that restatement is judged
to require deletion rather than an ordinary delegated rewrite, place it in the
A10 owner queue under R1.

### P2 — B-page authored body

`library/foundations/order-zorn-and-the-axiom-of-choice-examples.md` has four
authored paragraphs, whereas a B/examples page must have no authored body. It
also contains page-inventory counts ("first three items", "next two items",
and "three counterexamples") and mutable corpus-scope claims. The sentence
that for socks "the existence of a choice function is the axiom itself" is an
unsafe compression: the item correctly distinguishes an individual instance,
the universal countable-pairs principle, and full AC.

**Proposed A3 route:** queue removal of the B-page body for the owner at A10,
because it is a deletion under R1. If an interim non-deleting repair is desired,
narrow the socks sentence to the precise wording already present in
`ex-russells-socks`; the required final state is still no authored B-page body.

The scoped prose checker reported 13 heuristic warnings. Eleven are benign
item-local phrases such as object counts, accurate statements that an external
result is not proved here, or a context-specific denial; the two genuine
page-inventory count warnings are covered by P2. Nothing else warrants a repair
under the 30-second rule.

## 4. A2 — proof-contract capture and risk routing

`research/audit/wave1-foundations.proof-contracts.json` is version 1 at level
`audit-wave1-foundations`. It contains 23 contracts, 153 derivation entries
covering every numbered proof step exactly once, 98 citation entries with exact
quotes from the cited Statement/Definition/Example section, and all eight
boundary rows for every contract (184 boundary rows total). No supported finite
smoke-test class applies to these arguments, so every `finite_smoke` array is
empty with no fabricated result.

Strict self-check:

```text
node tools/proof-contract.mjs research/audit/wave1-foundations.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 23/23 item(s) checked
```

`risk-report` classifies 15 contracts as `critical`, 6 as `high`, and 2 as
`moderate`. Thus 21 require Alpha's independent proof-refuter read and a
non-pending `risk_review` disposition before the later audit gate. The two
moderate contracts are `lem-admissible-is-chain` and
`fs-maximal-is-greatest`; every other contract is high or critical. Beta has
intentionally left all 23 `risk_review` records pending for Alpha rather than
self-certifying them.

## 5. Recommendations for A3

1. Approve the 32 component-provenance decisions and require the ledger source
   URLs to be retained in reader-visible `sources.references` at A4. There are
   no legacy `authorship` fields to remove.
2. Add the required generation metadata to the two generated statement seeds:
   `example` for `ex-finite-choice-by-induction`, `counterexample` for
   `cex-progressive-map-without-fixed-point`.
3. Approve no mathematical or dependency-citation repair: none was found.
4. Route all 21 high/critical contracts to Alpha's proof-refuter and require
   Alpha to fill the corresponding `risk_review` dispositions. Alpha should
   also independently confirm the provenance classifications and the two
   generated/trivial seeds before A4.
5. Approve a mathematical-only two-paragraph rewrite for the A-page summary
   (P1), subject to R1's deletion boundary, and place deletion of the B-page
   body (P2) in the A10 owner queue.

## 6. Scoped pre-A3 checks

- `precheck.mts` on the 23 proof-bearing items: **23 checked, 0 failing**.
- `citecheck.mjs --json` on all 32 items: **32 scanned, 0 warnings**.
- `rendercheck.mjs --json` on all 32 items and both pages: **34 checked,
  0 errors, 0 warnings**.
- `prosecheck.mjs` on all 32 items and both pages: **34 checked, 0 errors,
  13 heuristic warnings**, triaged in §3.
- `proof-contract.mjs --strict`: **0 errors, 0 warnings, 23/23 contracts**.
- `finite-smoke.mjs --json`: **ok, 0 errors, 0 applicable outcomes**.
- `risk-report.mjs --json`: **ok; 15 critical, 6 high, 2 moderate**.
- `audit-manifest.mjs --json`: **145 relationships classified** (103
  same-batch, 16 forward, 26 published-backward).
- Provenance ledger URL check: **16/16 distinct URLs returned HTTP 200**.

## 7. Checkpoint

A1 and A2 are complete for the full pair. The three owned artifacts are
written; no A4 mutation was made. There is no unresolved mathematical claim,
citation, provenance-source search, URL waiver, or established-knowledge hold.
The open work is procedural: Alpha's provenance adjudication and proof-refuter
risk dispositions, A3 approval of generation metadata, and owner disposition
of the page-prose deletions. Exact next action: hand these artifacts to the
orchestrator for A3 and apply nothing until that adjudication is recorded.

---

# A4 — approved changes applied (2026-08-02)

The orchestrator approved A3 and recorded the dedicated `pre-A4` snapshot in
`research/audit/wave1-touches.json` before any edit in this section. No id,
dependency, reading order, Statement, Definition, fact, proof step, Remark, or
B-page text was changed. No commit was made.

## R1 — 32 provenance and source rows applied

**Old state:** none of the 32 items had a component `provenance` block or a
legacy `authorship` field. Their existing references did not uniformly expose
the sources recovered during A1.

**New state:** every item now has the exact `statement`/`proof` pair in
`wave1-foundations.provenance.jsonl`. All 16 distinct ledger URLs are
reader-visible in the corresponding items: 41 missing reference entries were
added across 24 items, while already-present references were preserved and not
duplicated. D5 remained a no-op because there was no `authorship` field to
delete. These changes are metadata-only, so existing item verification stamps
remain valid under the material-rewrite rule.

**Source and validation route:** the item-by-item source, convention delta, and
classification rationale are the corresponding ledger row; every URL returned
HTTP 200 during A1 and was rechecked before A4. A post-edit mechanical comparison
verified all 32 provenance pairs and every ledger URL against the item files.

## R2 — generated-seed metadata applied

**Old state:** the two generated/trivial statement seeds had no `generation`
record. **New state:** `ex-finite-choice-by-induction` carries
`generation.role: example`, and `cex-progressive-map-without-fixed-point`
carries `generation.role: counterexample`. The statements, witnesses, proofs,
and existing sources are unchanged. Their direct verification and A6
counterexample-probing obligations remain recorded in the proof contracts and
risk routing.

## P1 — A-page summary rewritten

**Old state:** the A-page body had five paragraphs and included reading-position,
other-page, and mutable corpus-scope claims. **New state:** it has exactly two
mathematical paragraphs, of 85 and 107 words. The first records the
natural-number and conditional independence background supplied by the declared
prerequisites; the second gives the order vocabulary and the admissible-set to
Bourbaki-Witt to Zorn to Choice logical progression. It contains no page count,
position, other-page, or corpus-scope claim.

**Source and validation route:** the replacement is a conservative summary of
the audited on-disk items `def-natural-numbers`, `def-nat-addition`,
`thm-induction-principle`, `rem-cohen-forcing-ac-independent`,
`def-partial-order`, `def-chain`, `def-upper-bound`, `def-maximal-element`,
`def-chain-complete-poset`, `def-choice-function`, `def-axiom-of-choice`,
`lem-finite-choice`, `def-admissible-set`, `thm-bourbaki-witt`, `thm-zorn`,
`thm-zorn-implies-ac`, and `cor-ac-iff-zorn`. Its claims were checked against
those items and the strict contracts. The page file has no verification stamp
to invalidate, and SCHEMA states that the item judges do not read page-summary
files. Alpha still owes the independent A6 read of this Beta-authored
restatement.

P2 was not applied: the B-page body is byte-for-byte untouched and its deletion
remains in the A10 owner queue.

## A4 validation receipt

- ledger-to-disk comparison: 32/32 provenance pairs present, every required
  generation role present, every ledger URL present, zero legacy `authorship`
  fields;
- `content-policy.mjs --audit`: 32 scoped items, 0 errors, 0 warnings;
- `precheck.mts`: 23 proof-bearing items checked, 0 failing;
- `citecheck.mjs --json`: 32 items scanned, 0 warnings;
- `rendercheck.mjs --json`: 32 items plus two pages checked, 0 errors,
  0 warnings;
- `prosecheck.mjs --warnings`: 34 files checked, 0 errors, 12 triaged
  heuristic warnings. The rewritten A page produces none; the B page retains
  its two inventory-count warnings and remains queued. The ten item warnings
  are the benign phrases already triaged at A2;
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 23/23 contracts;
- `finite-smoke.mjs --json`: `ok: true`, 0 errors, 0 applicable outcomes;
- `risk-report.mjs --json`: 15 critical, 6 high, 2 moderate, unchanged and
  pending Alpha review;
- page-shape check: exactly two nonempty paragraphs, 85 and 107 words;
- scoped `git diff --check`: clean; and
- B-page scoped `git diff --quiet`: clean.

Because no proof text changed, `reflow.mts` was not applicable; the complete
proof-bearing scope was nevertheless re-run through `precheck`. The
orchestrator owns the shared post-A4 touch snapshot and subsequent mechanical
impact classification once all parallel Wave-1 A4 lanes have finished.
