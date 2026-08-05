# Wave 5 — A10 rundown and owner pause

Published-page retro-audit of dependency level 5. **A0 through A9 are complete
and every gate is green.** This is the sole owner pause; nothing in the pipeline
published anything, and the wave's repairs are committed but the corpus was
already `published` — this audit retro-tags and repairs in place rather than
flipping status.

**209 items, 155 proof-bearing, 1930 relationships, 4 batches, 10 pages.**

---

## 1. Gate results

| step | gates | result |
|---|---|---|
| A8 | `step8-guard`, `impact-audit`, `level-coverage --verify-current-context` | **CLEAR** |
| A9 | `prosecheck`, `prosecheck --warnings` | **CLEAR** |
| A10 | `precheck`, `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `citecheck`, `depsource`, `level-coverage` | **CLEAR (9/9)** |

`precheck` 2111 checked / 0 failing · `depsource` 16177 deps all resolving to a
published page, 0 unresolved · `level-coverage` 209/209 complete judge pairs,
**0 mismatched or unattested frozen contexts**.

The only open warning is `judge-verdict-adjudicated-nonfatal` on
`thm-unordered-summability-of-real-families` — a live Sonnet rejection Alpha
ruled `confirmed_nonfatal`, which is the designed way for a rejection to clear.

## 2. Provenance census

Every one of the 209 items entered the wave as `legacy-unclassified` and leaves
fully tagged on both components. Nothing was retrofitted onto an item that
already carried tags — already-tagged content is never audit scope.

| label | statement (before → after) | proof (before → after) |
|---|---|---|
| *(untagged)* | 209 → **0** | 209 → **0** |
| `literature-derived` | 0 → **66** | 0 → 0 |
| `ai-altered` | 0 → **135** | 0 → **22** |
| `ai-generated` | 0 → **8** | 0 → **159** |
| `not-applicable` | 0 → 0 | 0 → **28** |

The shape to notice: **8 AI-generated statements against 159 AI-generated
proofs.** The statements are overwhelmingly recoverable mathematics
(`literature-derived` or `ai-altered`); it is the *proofs* that are locally
written. That is the intended risk profile — a generated proof of a sourced
statement is checkable against the statement, while a generated statement is
checkable against nothing.

## 3. Generated-statement report

8 of the 68 cumulative `genrisk` seeds fall in wave-5 scope.

| disposition | count |
|---|---|
| `verified-generated` (counterexample-searched, refuter-read, judged) | 3 |
| `pending` | 5 |

**No in-scope seed is load-bearing.** All 8 have zero logical consumers, and the
largest transitive cone among them is **5**. The 5 `pending` seeds are
`cex-lindelofness-is-not-productive-worked`,
`cex-separability-is-not-hereditary-worked`,
`ex-a-ccc-nonseparable-cantor-cube`,
`ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart`, and
`rem-function-space-conventions` — worked examples and a conventions remark, none
cited as a dependency by anything. `genrisk.mjs --receipt` passes because the
gate requires a disposition for load-bearing seeds and none of these is one.
**Flagged rather than hidden:** they are undispositioned, and if you want the
`pending` class driven to zero regardless of load-bearing status, that is a
policy call, not a gate failure.

## 4. Fatal-error report

**10 confirmed-fatal adjudications across 7 distinct items.** Four items were
caught independently by *both* lanes. 96 nonfatal, 8 false positives.

### By defect type: false/overstrong statement — 4 items, all in Remark prose

Every one is a **page or item asserting something its own neighbours falsify**.
No gate reads this class; `prosecheck` passes on all four.

| item | the false claim | disposition |
|---|---|---|
| `fs-consecutive-differences-null-implies-cauchy` | "**Both** false statements on this page have the same shape" — the page carries **three** | prose corrected; certified `a8cert-003` |
| `def-regular-and-t3-spaces` | "the **two** false statements of this page make that precise" — the page carries **four**, and **none is about regular vs normal**. Its sibling `def-normal-and-t4-spaces` states in terms that the page *leaves that question open* | repaired twice inside A8: `a8cert-001` **REFUSE** → re-repaired → `a8cert2-001` CERTIFY |
| `cor-monotone-converges-iff-bounded` | "Without boundedness the **forward direction** is what fails" — the forward direction is *converges implies bounded*, which holds for every sequence and cannot fail | Remark corrected; **twice-touched**, see §6 |
| `ex-contractive-sequence-fixed-point` | "$c = 1/3$ is the smallest admissible contraction constant" — the Statement admits **any** $a$, and at $a = 1/2$ the sequence is constant, which its own cited `def-contractive-sequence` says is contractive with *every* $c \in (0,1)$ | Remark corrected; certified |

Alpha recorded the third one against itself: at A6 round 3 it disposed
`ex-contractive-sequence-fixed-point` as `verified-generated` and checked two of
the Remark's numerical claims but not this one. **The Sonnet lane found what
Alpha's own reading missed.**

### By defect type: incorrect dependency citation — 3 items

| item | the defect | location | disposition |
|---|---|---|---|
| `lem-radial-normalisation-is-continuous` (both lanes) | `[L2]`'s subspace criterion attributed to two items that do not state it | Facts/deps | `def-subspace-topology-top` added to the fact **and** to `deps`; certified `a8cert-004` |
| `thm-radial-straight-line-map-on-punctured-rn` (deepseek) | `[L4]` silently widened `thm-algebra-of-continuous-functions` from "Let $A \subseteq \mathbb{R}$" to an arbitrary domain, then applied it on $P \times [0,1]$ — the "no changed domain" rule by name | Facts/deps | re-cited to `lem-algebra-of-continuous-real-maps-on-a-space`, which was already in the library one item away; certified `a8cert-005`. **Alpha's first repair was itself wrong and was caught by the certifier** |
| `cex-unbounded-with-convergent-subsequence` (both lanes) | a Remark describes replacing the unbounded branch by a second constant and cites `ex-two-subsequential-limits`, which is a different sequence (the perturbed alternating one) | Remark | citation corrected; the cited item genuinely *is* a bounded divergent sequence with two subsequential limits, so only the described construction was mismatched |

### Found at A9, after the judges: 2 more of the same class, in **page prose**

Both on `library/topology/function-space-topologies.md`, both created by this
wave's own repairs — the item was fixed and the page prose describing it was not.

- The page called `def-locally-compact-metric-space` the special case of "a
  notion this library does **not yet define in general**". `def-locally-compact-space`
  is published on `topology/compactness`, page order **255** against this page's
  **283** — earlier, not absent. The item's own Remark had already been corrected
  to "and now does"; the page contradicted the very remark it described.
- The page said the exponential law's homeomorphism form needs "compactness for
  arbitrary topological spaces, which is not available ... the planned page
  carrying it sits *below* this one and **is not yet built**". `thm-the-exponential-law`'s
  own repaired Remark says the opposite in terms: compactness and the tube lemma
  "are both developed **earlier** in the reading order ... **what is missing is
  the topology itself**". Page repaired to match the item.

Full evidence in `research/audit/wave5-A9.md`. **Nine measured instances of this
class in one wave**, every one found by reading, none by a gate.

## 5. Judge comparison

`judge-compare.mjs --adjudications`, lineup `deepseek+sonnet`. **The tool was
still pinned to the retired `deepseek+terra` lineup and has been unpinned — see
§7; before the fix it reported an absent model and silently dropped all 405
Sonnet verdicts.**

| | DeepSeek V4 Pro | Claude Sonnet 5 |
|---|---|---|
| calls | 371 | 405 |
| passes | 305 | 282 |
| rejections | 62 | 52 |
| **nulls** | **4** | **71** |
| confirmed fatal | **6** | **4** |
| confirmed nonfatal | 48 | 48 |
| **false positives** | **8** | **0** |
| fatal confirmation rate | 9.7% | 7.7% |

Agreement on latest usable verdicts: **157 both-pass, 11 both-reject, 21
DeepSeek-only reject, 20 Sonnet-only reject, 0 incomplete.** Context integrity:
**209 matching, 0 mismatched.**

**Sonnet's precision is now 52/52 — zero false positives.** The standing record
in `CLAUDE.md` has the retired Sonnet lane at **60.0% precision over 35**
adjudicated rejections, its dominant failure being a `reject` recorded while its
own reason text concluded *keep* — verdict extraction, not reasoning. The owner
asked for a re-measurement before treating the lane as settled. **This is it, and
the JSON-constraint fix holds.** On this wave Sonnet was the *more* precise lane;
DeepSeek supplied 8 of the 8 false positives.

Two caveats against reading that as Sonnet superiority:

1. **Sonnet returned 71 nulls to DeepSeek's 4.** A capacity refusal is not a
   verdict, and a lane that answers less often has fewer chances to be wrong. The
   nulls forced a replay at reduced concurrency.
2. **Sonnet is the same family as the Alpha adjudicating it** (`claude-opus-5`),
   and as much of the corpus it judges. DeepSeek remains the only cross-family
   reader in the loop, and it found **6 of the 10 fatals, 3 of them solo**.
   Weight Sonnet's 0-false-positive record accordingly.

## 6. Twice-touched escalations

- **`cor-monotone-converges-iff-bounded`** — two prior `confirmed_fatal`
  adjudications (both lanes, context `3726503bbe`) plus two nonfatals, and a
  fifth DeepSeek rejection this round. Alpha ruled the fifth `confirmed_nonfatal`
  and left the Statement standing, on the reasoning that the stopping condition
  is a third *distinct fatal* and nonfatals license no edit under R1. **I agree
  with the ruling and flag the item to you anyway**: five rejections on one
  corollary is the strongest available signal that its Remark surface is
  over-claimed even where each individual claim survives.
- **`def-regular-and-t3-spaces`** — repaired twice inside a single A8, the first
  repair refused by the certifier.
- **`thm-radial-straight-line-map-on-punctured-rn`** — Alpha's first repair was
  wrong and the certifier caught it. The no-self-certification rule did the work
  it exists for, twice in one wave.

## 7. Mechanism changes made during this wave

| commit | change |
|---|---|
| `3bbae7f` | **A8 rejudges only repaired items.** `judge.mts` records `item_sha256` per verdict; coverage accepts a pair cast against byte-identical item text even when the A/B-pair context moved. Measured cause: 2 repairs staled all 31 items on a pair, 12 citing them nowhere. **First live confirmation this wave**: a page-prose edit at 03:08:30 moved the pair context and coverage still returned 209/209 at 03:09:44, saving a 31-item rejudge. |
| *(this commit)* | **`judge-compare.mjs` unpinned from the retired `deepseek+terra` lineup.** It resolves `JUDGE_LINEUP` like every other judge tool and emits the lineup it actually compared. Agreement keys are now `primary_only_reject`/`second_only_reject`. |
| `ee2a25a` | `JUDGE_CONCURRENCY_<MODEL>` override, clamped to the owner's cap. |
| `e6b584d` | terminal-step gates now run in both drivers — they were dead code. |
| `4fec483`, `991a34b` | `run-control` reaches audit waves and prints the right driver. |
| `aea0e24` | both drivers dispatch a step's agents in parallel. |
| `5e9e560` | all-Claude audit lineup with DeepSeek refuters; read-only enforced by a default-deny allowlist after a deny-list-only lane escaped via a subagent. |

## 8. Owner queue

R1 narrows this to what Alpha may not settle: deletions, id changes, reading-order
changes, and standing policy.

**Policy decisions requested**

1. **The fact-fidelity class — five waves unanswered.** Roughly 75 of this wave's
   96 nonfatals, and 4 of the 6 final rejections, are one shape: a `[F#]`/`[L#]`
   fact states a clause that is **true**, **used**, and **one line from the cited
   item**, but not literally in that item's Statement. The library has no rule
   saying whether a fact list may carry a clause derived from its citation in one
   step. Until you write one, both lanes will keep finding it, Alpha will keep
   ruling nonfatal, and every wave spends a round on it. Alpha's proposed cheap
   fix is at A6: co-cite the definition the clause actually comes from.
2. **DeepSeek's `fs-` blind spot is four-for-four.** All four rejections of
   `cex-cauchy-rationals-no-rational-limit` are the same error: the judge treats a
   false-statement page as containing only its false claim and not its
   `## Refutation`. That is a **prompt defect, not a reasoning failure**, and it
   has cost four adjudications on one item. Fixing it edits the frozen judge
   prompt, which is your call, not mine.
3. **`step8-guard` cannot see a `library/` page edit.** The guard tracks `items/`
   only, so a page-prose mutation at A8 passes R1's mechanical enforcement
   silently even though R1's text forbids a "page" mutation without a fatal
   licence. Alpha found this because **I made such an edit** — see §9.
4. **The 5 `pending` non-load-bearing `genrisk` seeds** (§3): drive to zero, or
   accept `pending` for seeds with no logical consumers?

**Carried from earlier waves, still open**

5. `thm-konig` Remark; `def-cofinality` Remark 4.
6. Munkres biography URL (dead/off-topic source).
7. `lem-of-naturals-positive` — title defect (an id/title change, so yours).
8. **154 MB of dispatch logs are tracked in git** under `research/audit/*-dispatch/`.
9. **Wave 4 is still at `owner-pause`**, audited but never cleared by you. Wave 5
   is now in the same state behind it.

## 9. Recorded against myself

- **I edited `library/topology/function-space-topologies.md` at 03:08:30, inside
  Alpha's A8 dispatch window.** The edit is an A9 action (published-claim decay)
  and is correct on its merits, but A9 follows A8 and I ran them overlapped.
  Alpha detected the concurrent write, established it was not its own, correctly
  declined to revert another process's work, and reported it. It also correctly
  observed that `step8-guard` would not have caught it (§8.3). The edit did not
  stale the receipt — coverage was re-verified after it at 209/209.
- **My A8 dispatch quoted the wrong item hashes.** I took `item_sha256` from
  `wave5-judge.jsonl`, which is `judge.mts`'s normalisation (only the `judge:`
  sub-block removed), and told Alpha the items "had since changed". The
  adjudication ledger uses `item-hash.mjs` (the **entire** `verification:` block
  removed). The two disagree on any stamped item, which is all six. Alpha caught
  it, computed the hashes correctly from `item-hash.mjs`, and noted that copying
  my printed prefixes would have written hashes `step8-guard` could never match.
  No harm reached the ledger. Any future dispatch quoting an item hash must say
  which normalisation it is.
- **Alpha's report twice claimed `wave5-spine-audit.json` did not exist.** It
  does — 78,054 bytes, written 00:44 at `f6bb1af`. I verified from disk rather
  than accepting the report, and `level-coverage` consumed the receipt and passed.

## 10. What clearing this pause does

Nothing publishes. The corpus is already `published`; this wave retro-tagged
provenance on 209 items, repaired 7 items for confirmed fatal defects and 1 page
for decay, and recorded the evidence. Clearing the pause means the repairs and
retags ship on `main` and wave 6 may be scoped.
