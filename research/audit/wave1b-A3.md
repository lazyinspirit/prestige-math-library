# Wave 1b — A3 orchestrator adjudication (2026-08-03)

Scope: `wave1b-audit-manifest.json` — 4 batches / 9 pages / **174 items**
(linear-algebra 28, number-theory 27, real-analysis 43, topology 76).
A1 and A2 are Beta-complete; this file is the A3 ruling on their proposals.

**Naming note.** The findings files are `wave1-<category>.*` but the manifest is
`wave1b-*`. This tranche is NOT the committed wave 1 (abstract algebra,
combinatorics, foundations, commit `6cdc6bf`). Read the manifest, not the
filename.

**Stale-header warning.** Three findings files open with a "continuity
checkpoint / A1-A2 in progress" header. Those headers are stale: mtimes show the
findings were written LAST in each category (11:05-11:14) after the ledgers
(10:56-11:05) and contracts (10:59-11:07). Read the body.

## Verified from disk before ruling

- **number-theory A-page falsehood — CONFIRMED.**
  `primes-and-the-fundamental-theorem-of-arithmetic` line 37 asserts "No ring
  vocabulary appears anywhere on this page." The page file itself uses "ring" 6
  times and **all 18 of its items** use ring vocabulary. Unambiguously false.
- **linear-algebra `[L8]` — CONFIRMED UNUSED.** In
  `cex-proper-subspace-with-an-equinumerous-basis`, `[L8]` occurs exactly once
  (line 82, the fact block); no numbered step tags it.
- **topology `[A2]` — CONFIRMED IMPRECISE.** In
  `lem-metric-cauchy-with-convergent-subsequence`, `[A2]` (line 48) states only
  the subsequence-specialised criterion, while step 4.1 (line 68) concludes
  `x_k -> p` for the WHOLE sequence citing `[step 3.1, A2]`. The general
  definitional criterion is used but not stated.
- **Generated-statement cones** computed corpus-wide from reverse `deps`.
- **Wave 1b retags are NOT applied to any item file** — no `provenance:` block
  on the sampled items. A4 has not run.

## Decisions

- **Provenance retags: APPROVED IN PRINCIPLE, 174 rows**, with three carve-outs
  below. Distribution: ai-altered/ai-generated 96, ai-altered/not-applicable 27,
  literature-derived/ai-altered 19, ai-altered/ai-altered 17, tail 15.
- **CARVE-OUT 1 — `rem-topology-conventions` ROUTED TO ALPHA (A6).** It is
  tagged `ai-generated` in the STATEMENT slot and is **load-bearing: cone of 5**
  (`def-t0-and-t1-spaces`, `rem-compactness-conventions-and-choice-ledger`,
  `rem-connectedness-conventions`, `rem-function-space-conventions`,
  `rem-separation-axiom-conventions`). Under §"Generated-statement containment"
  Alpha must record exactly ONE disposition in `genrisk.json` from the ladder
  retag / restate / unfold / narrow / verified-generated. My reading for Alpha,
  not binding: the seed is a ledger of four library-local CONVENTION choices, so
  "retag" is unavailable (no source exists for a house convention) and the
  honest candidates are **unfold** (conventions are elementary; inline each
  consumer's use and drop the edge) or **verified-generated** (keep the tag,
  freeze the cone). Note `def-t0-and-t1-spaces` is a DEFINITION, i.e. spine, so
  it is the consumer to read first.
- **CARVE-OUT 2 — the other 5 `ai-generated` statements are LEAVES (cone 0):**
  `ex-coordinates-depend-on-the-ordered-basis`, `ex-prime-factorisation-worked`,
  `fs-two-nonisomorphic-complete-ordered-fields`,
  `rem-complete-metrizability-is-the-topological-shadow`,
  `cex-cantor-intersection-needs-vanishing-diameters`. Each rationale states a
  POSITIVE novelty determination (bespoke witness/worked construction), not a
  source-search failure, which is what the owner rule requires. **APPROVED.**
- **CARVE-OUT 3 — `alpha_concurred` is absent on ALL 174 rows.** The sole URL
  waiver in the hard rules is the *Alpha-concurred* `established-knowledge`
  class, so the three rows using it — `lem-of-square-monotone`,
  `prop-of-ab-less-b`, `lem-of-hom-order-preserving`, all real-analysis,
  all ai-altered/ai-generated — have **no waiver yet**. Alpha must concur or
  they need a reader-visible `sources.references` URL. **BLOCKS A4 for those 3.**
- **`evidence: none` on 2 rows — ACCEPTED.** Both are the ai-generated topology
  remarks above. For a library-local convention ledger and a page-local
  synthesis there is no source to cite, and `none` is the honest class; the
  rationales carry the positive novelty determination the rule demands. Do not
  let this drift into a default for ordinary items.
- **linear-algebra `[L8]` deletion: APPROVED AS A DELEGATED REPAIR, not A10.**
  Beta routed it to the owner queue as a "deletion". That over-escalates:
  owner-only deletions are of IDS and reading order. Wave 0 set the precedent
  explicitly (`wave0-foundations.A3.md`, D2b: "deletions here are of unused
  facts/edges only (no id, no reading order)"). Delete the unused `[L8]` block
  and update the contract.
- **topology `[A2]` restatement: APPROVED** exactly as drafted — it states the
  general criterion and then instantiates it, licensing both step 1.1 and step
  4.1. No dependency change.
- **number-theory summary falsehood: APPROVED for repair.** Replace the false
  sentence with the drafted minimal faithful replacement.
- **number-theory full two-paragraph summary rewrite: APPROVED AS A DELEGATED
  DEBATABLE RESTATEMENT**, Alpha final adjudicator. Beta routed it to A10; the
  owner's audit rule delegates "debatable restatements" explicitly. Removing
  decay-prone reading-position phrasing ("next page", "at this point") and the
  explicit item count is not a *reading-order change* — it is exactly the
  published-claim-decay repair the workflow wants. The current summary also
  breaches the two-paragraph / 150-word page-summary contract at ~1,267 words.

## Decisions, continued (gaps closed 2026-08-03, same session)

- **real-analysis `cor-cauchy-reals-lub-complete` [L3]: APPROVED.** Verified:
  `def-real-limit` is titled "Limits and Cauchy sequences of reals" and states
  NO order-preservation clause, yet steps 6.1, 7.1 and 7.2 use exactly that.
  Narrow `[L3]` to what the definition says and write the three elementary
  order arguments locally, as drafted. This is the reusable-argument shape, but
  each instance is three lines; do not mint a lemma for it.
- **real-analysis `cex-ordered-field-not-archimedean` [L4]: APPROVED.**
  Verified the hard way: `thm-reals-ordered-field` is "The reals form a totally
  ordered field" and contains **zero** occurrences of polynomial, root, leading
  coefficient, or sign-at-infinity. The old `[L4]` attributed an entire
  polynomial eventual-sign theorem to it. Narrow `[L4]` to the ordered-field
  statement and write the eventual-sign derivation locally as drafted.
  **This is the most badly mis-attributed citation in the tranche.**
- **topology's 2 debatable restatements: APPROVED AS DELEGATED**, Alpha final
  adjudicator, same reasoning as the number-theory rewrite. Verified from disk
  against the two-paragraph / 150-word contract:

  | page | paragraphs | words | reading-position phrases |
  |---|---|---|---|
  | `completeness-and-uniform-continuity` | 9 | 1148 | 1 |
  | `topological-spaces-and-continuity` | 8 | 1074 | 1 |
  | `primes-and-the-fundamental-theorem-of-arithmetic` | 10 | 1341 | 11 |

  All three breach the contract by roughly a factor of four in length. The
  number-theory page is the worst on decay-prone phrasing at 11 occurrences.

- **number-theory redundant `[L#]` rows (incl. `fs-every-fermat-number-is-prime`
  L5): APPROVED AS DELEGATED DELETIONS**, on the same wave-0 D2b precedent as
  the linear-algebra `[L8]` ruling — unused facts and edges only, no id and no
  reading order. Beta routed these to A10 as well; that is the same
  over-escalation and it is corrected here rather than deferred to the owner.

**A3 is now complete. No proposal in any of the four categories is unadjudicated.**

## Artifact staleness found while ruling

`research/audit/genrisk.json` (tracked, generated 2026-08-02) is **stale against
the corpus**: regenerating it surfaces a seed it lacks
(`cex-greedy-order-on-p-four`). I reverted my accidental regeneration rather
than commit an undocumented change. **Re-run `tools/genrisk.mjs` after A4
applies the wave-1b retags** — running it before would only produce a second
stale artifact, since the 6 new seeds above are not yet on disk.
