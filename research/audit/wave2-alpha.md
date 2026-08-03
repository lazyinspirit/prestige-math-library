# Wave 2 — A6 Audit-Alpha report

**Alpha: `claude-opus-5`** (owner rule 2026-08-03), dispatched as an Anthropic
subagent of the orchestrator. Independent readers and proof-refuters are **GPT
5.6 Sol** at `xhigh` with a 1,000,000-token context window, deliberately a
different family from Alpha so that no Alpha-authored repair is certified by
Alpha's own model. Alpha is the **same** family as much of the legacy corpus and
as the orchestrator, and is therefore **not** an independent family screen on
Claude-authored published content; DeepSeek is, at A7.

## 0. Recovery receipt

Read in full from disk before acting: `briefs/audit-alpha.md`,
`AUDIT-WORKFLOW.md`, `CLAUDE.md`, `SCHEMA.md`, `QUALITY-CONTROLS.md`,
`research/audit/RESUME.md`, `research/audit/wave2-A0.md`,
`research/audit/wave2-A3.md`, and the five `wave2-<cat>.findings.md` /
`.provenance.jsonl` / `.pages.json` / `.proof-contracts.json` sets.

State verified from disk at start: `HEAD 21d2ba1`, working tree **clean**, wave
baseline `720c747`, pre-audit item text `0dcd90e`, `wave2-touches.json` at 263
snapshots. Gates at start: `depcheck` 27 errors (all `published-unaudited`),
`content-policy --audit` **16 errors / 9 warnings**, `risk-report
--require-reviewed` **162 errors**, `genrisk` 2 pending load-bearing seeds,
`impact-audit` an unfilled 1,958-row template.

## 1. Independent Sol lanes

Seven read-only `gpt-5.6-sol` lanes plus one certification lane, all `xhigh`,
1M context, `--sandbox read-only`. Prompts and transcripts:
`scratchpad/a6-logs/<lane>.prompt` / `.log`.

| lane | certified | refuted | edges leaving batch |
|---|---|---|---|
| `combinatorics` | 6 A4 repairs + the 8 D2 determinations | 27 high/critical | 91 |
| `foundations` | 4 items + 2 A-page summaries | 28 | 98 |
| `number-theory` | metadata-only + 12 ledger spot-checks | 25 | 112 |
| `real-analysis` | 5 items + 1 A-page summary | 21 | 105 |
| `topology-compactness` | 5 items + 1 summary + seed truth audit | 32 | 370 |
| `topology-subspaces` | 7 items + 1 summary + seed truth audit | 29 | 316 |
| `topology-seams` | — | — | **the named A0 obligation**, 123 + 47 |
| `certify` | every Alpha-authored A6 repair | — | — |

All eight exited 0. Two lanes (`combinatorics`, `certify`) reported that their
sandbox could not resolve external DNS and honestly marked every URL claim
`UNVERIFIED` rather than asserting a fetch; Alpha performed those fetches itself
(§3).

## 2. Certification of the A4 repairs

258 items were retagged and 27 items plus 5 A-page summaries were materially
repaired at A4. Alpha classified every changed file mechanically from the git
diff `0dcd90e` → working tree (`research/audit/wave2-impact-classification.json`)
and had each material repair read on **current disk text** by an independent Sol
lane.

**Certified: 25 of 27 items and all 5 page summaries**, each with a recorded
`sha256sum` and quoted evidence in the lane transcripts.

**Five refusals, all upheld and repaired** (§4): `lem-finite-set-has-max`,
`rem-sup-conventions` (refused for decay it created in `def-extended-reals`, not
for its own text), `rem-choice-ledger`,
`library/foundations/ordinals-and-transfinite-recursion.md`, and the pair
`fs-all-even-degrees-force-one-cycle` / `cex-connected-even-degree-bowtie-is-not-a-cycle`.

**Stamp discipline verified from disk:** every material repair has its stale
`verification.judge` block and obsolete `verification.audited` stamp removed;
no Beta wrote `verification.verified`; every purely additive retag kept its
existing stamps, which is equally required (SCHEMA: adding a citation that
changes no claim is not a material rewrite).

## 3. The eight `established-knowledge` concurrences — waiver WITHDRAWN, sources supplied

The A4 combinatorics Beta fell back to the D2 waiver on eight rows after an MIT
lecture PDF went 404 and a uchicago PDF returned 403. Its ledger rationales
record the real cause: **"no replacement could be confirmed by the required
shell fetch because this sandbox cannot resolve external DNS."** The waiver was
forced by a tooling limitation, not by the absence of a source.

Alpha independently determined all eight statements to be standard established
mathematics **and then located and personally fetched working sources at HTTP
200**, which the brief and `AUDIT-WORKFLOW.md` §6 both prefer over the waiver:

| item | source fetched at 200 | clause matched |
|---|---|---|
| `def-sunflower` | `en.wikipedia.org/wiki/Sunflower_(mathematics)` | "W is a sunflower (or Δ-system) if there is a subset S of U such that for each distinct A and B in W, we have A ∩ B = S" |
| `lem-sunflower-maximal-disjoint-subfamily` | same | the lemma's proof: "a maximal collection of pairwise disjoint sets … t < r" and "the cardinality of A is bounded by kt ≤ k(r−1)" |
| `thm-erdos-rado-sunflower-lemma` | same | "a set system W of cardinality greater than k!(r−1)^k of sets of cardinality k contains a sunflower with at least r sets" (Erdős & Rado 1960, p. 86) |
| `def-intersecting-family` | `en.wikipedia.org/wiki/Erdős–Ko–Rado_theorem` | "each two subsets share at least one element"; the star family |
| `lem-katona-cyclic-interval-bound` | same | "Katona's key observation is that at most r intervals from a single cyclic order may belong to A" |
| `fs-erdos-ko-rado-without-the-ground-set-bound` | same | the theorem **with** n ≥ 2r, and "The requirement that n ≥ 2r is necessary … when n < 2r, all r-element sets intersect" |
| `ex-an-erdos-ko-rado-star` | same | "choose any fixed element x … The number of sets is C(n−1, r−1)" |
| `cex-erdos-ko-rado-fails-below-two-k` | same | "when n < 2r … the largest intersecting family consists of all r-element sets, with C(n, r)" |

All eight ledger rows were amended from `established-knowledge` / `urls: []` to
`semantic-source` with the fetched URL, the URL was added to each item's
`sources.references`, and `alpha_concurred: true` records the independent
determination. `content-policy --audit` goes from 16 errors to **0**.

**Seven of the eight stand; the eighth was corrected by the certification lane
and Alpha upheld it** (§14): `fs-erdos-ko-rado-without-the-ground-set-bound` is
EKR with a load-bearing hypothesis **deleted**, which the source does not state,
so `semantic-source` overstated the match. It was returned to
`established-knowledge` with `alpha_concurred: true` — the claim is a standard,
universally recognised false statement — while keeping the URL in
`sources.references` as the exact true theorem it perturbs. **The wave therefore
ends with one D2 waiver instead of eight.**

Alpha's own reading of each statement, independently corroborated by the
combinatorics lane: intersecting family and star, sunflower/core/petals, Katona's
cyclic bound at n ≥ 2k, the maximal-disjoint-subfamily step, the Erdős–Rado
bound k!(r−1)^k, EKR without its ground-set hypothesis, the extremal star of
size C(n−1,k−1), and the k<n<2k failure are all standard; the only departure is
`thm-erdos-rado-sunflower-lemma` admitting k ≥ 0, which is vacuous (only one
0-element set exists) and correct.

### Three further provenance corrections (number-theory lane finding, upheld)

- `lem-multiples-below-a-prime-power` and `thm-totient-of-a-prime-power` were
  recorded `semantic-source` on two URLs that do **not** state the count of
  multiples of p below p^k or the characterisation of the nonunits. Alpha
  downloaded and text-extracted both PDFs and confirmed it: Conrad's CRT blurb
  only invokes "the formula for ϕ on prime powers", and the CMU notes are a
  cryptography course with no totient derivation. Alpha added
  `en.wikipedia.org/wiki/Euler's_totient_function`, whose prime-power proof
  states both ("there are p^{k−1} such multiples not greater than p^k. Therefore,
  the other p^k − p^{k−1} numbers are all relatively prime to p^k").
- `ex-units-and-totient-modulo-twelve` was `literature-derived` / `exact-source`
  while the source does not state its clause "Every displayed unit is its own
  inverse". Downgraded to `ai-altered` / `semantic-source`; Alpha recomputed the
  clause (5²=25, 7²=49, 11²=121, all ≡ 1 mod 12).

## 4. Confirmed defects found at A6 and repaired

All of these are **new**, found after A3, on text that had already cleared A4.
Every one is in the two classes this audit exists to catch: **a Statement or
Remark asserting more than the proof licenses (usually an undeclared choice
principle), and a false claim about this corpus.**

### 4a. Missing choice hypothesis (the class now in its fourth consecutive wave)

- **`fs-every-ultrafilter-principal`** — title and Statement asserted falsity
  unconditionally; the refutation spends the ultrafilter lemma and the item's own
  Remark concedes the claim is consistent with ZF. Retitled and a scope paragraph
  added to `## Statement`.
- **Three consumers of `thm-box-finer-than-product` — an A4 impact-closure miss.**
  A4 correctly narrowed claim 3 to "Assume the Axiom of Choice", but did not
  re-license the consumers whose prose still asserted the strictness
  unconditionally. In ZF a product of nonempty spaces can be empty, and then the
  two topologies coincide. Repaired in `fs-product-topology-equals-box-topology`
  (Statement), `fs-arbitrary-product-of-open-sets-is-open` (Statement, plus
  `def-axiom-of-choice` added to `deps`) and `def-product-topology` (Remark), each
  recording that the explicit ℝ^ℕ witness needs no choice principle.

### 4b. A Statement asserting more than the item establishes

- **`lem-open-or-closed-surjection-is-quotient`** — the Statement said "None of
  the three conditions is necessary … and need admit no section", but the item
  proves only sufficiency and its named witness *satisfies* clause 3. The claim is
  true mathematics that this item neither proves nor cites. Narrowed to "Neither
  clause 1 nor clause 2 is necessary". Six proof contracts quoted the old
  Statement wholesale and were retruncated to the clause block that still occurs
  verbatim.

### 4c. False claims about this corpus (published-claim decay)

- **`rem-choice-ledger`**, two of them: it said Urysohn and Tietze spend DC
  "through" `lem-dependent-choice-along-a-sequence-of-relations` (both apply DC
  directly to one relation on stage-tagged states and never cite that lemma), and
  that "Every result in this library that assumes full choice reaches it through
  that step and no other" (`thm-product-universal-property` applies AC directly).
- **`rem-constructions-this-page-stops-short-of`**, two of them: the page does
  **not** build the subspace topology (`def-subspace-topology-top` is imported
  from `topological-spaces-and-continuity` and is absent from this page's
  `items`), and "the homotopy notions are absent from the library altogether" is
  false — the published page `homotopy-and-homotopy-equivalence` exists.
- **`library/foundations/ordinals-and-transfinite-recursion.md`** — the rewritten
  summary said the development uses "Separation, Union, Replacement, and
  Foundation", while `def-ordinal` says "The Axiom of Foundation is not used. …
  This library does not assume Foundation anywhere."
- **`def-extended-reals`** — decay *created by this wave*. Its Remark quoted a
  sentence of `rem-sup-conventions` verbatim and called it a future promise; A4
  deleted that exact sentence. Rewritten to describe the current relationship.
  This is the second impact-closure miss of the wave and the one a gate could
  never see: A4's repair was correct, and it falsified a quotation in a different,
  out-of-scope item.
- **`lem-finite-set-has-max`** — A4 removed the decayed "no published item cites
  this lemma" claim but left "this item records the real-specialized form used by
  later developments"; the residual consumer claim was removed.

### 4d. False negative universals in Remark prose

Both were refuted by the same one-line counterexample: a **discrete** source has
every quotient discrete, hence Hausdorff.

- **`fs-quotient-of-a-hausdorff-space-is-hausdorff`** — "no strengthening of the
  hypothesis short of a genuine separation axiom on the *quotient* rescues the
  claim".
- **`cex-line-with-two-origins`** — "Every hypothesis one might add to the source
  fails to help."

Both narrowed to what the witnesses actually license.

### 4e. Citation precision

- **`fs-all-even-degrees-force-one-cycle` `[F3]` and
  `cex-connected-even-degree-bowtie-is-not-a-cycle` `[F2]`** — A4's retarget to
  `def-standard-complete-bipartite-path-and-cycle-graphs` was the right target but
  an incomplete repair: that item gives the edge set of C_n, not the degree-2
  conclusion. Each fact now derives degree 2 from the edge set together with the
  neighbourhood/degree definition already in `deps`.

## 5. Findings adjudicated as NONFATAL — recorded, not repaired

Alpha's 30-second threshold is binding, and these are recorded so the A10 report
can show what was deliberately not chased.

- `fs-quotient-map-is-open` — "collapsing a set with nonempty interior destroys
  [openness]" is false for a clopen set, but the very next clause supplies the
  missing hypothesis ("an open set that meets B without containing it … and B has
  boundary points"). **Refuted as FATAL; nonfatal.**
- `cex-r-mod-q-is-indiscrete-like` — the Remark's "a saturated open set is a union
  of cosets, each of which is dense" needs one more step (the complement is a
  saturated closed dense set, hence everything). The numbered proof already
  contains the correct argument. Nonfatal, as the lane itself graded it.
- `lem-sup-unique` — the two implications are proved in parallel rather than in
  separate branches.
- **The compactness lane's 26 edge-level citation quirks** — 11 redundant
  co-citations of `thm-of-archimedean` beside the exact `cor-archimedean-reciprocal`;
  3 uses of `def-canonical-natural` where `lem-of-naturals-positive` is the exact
  item; 8 citations of `def-sequence` (defined for ℝ-valued sequences) for
  X-valued sequences, where the typed notion is already in `def-metric-convergence`;
  4 unused links inside otherwise-correct facts. These are exactly the "minor
  citational quirks" the standing triage rule says to spend no effort on. Recorded
  for a future mechanical sweep, not repaired.
- Two combinatorics edges (`lem-every-graph-walk-contains-a-path-between-its-endpoints`,
  `thm-minimum-degree-forces-a-long-path` → `def-finite-cardinality`) assert
  finiteness of a derived family and a least/greatest element that the target
  does not state; elementary, under 30 seconds.
- `ex-distance-to-a-set-is-attained-on-a-compact-set` `[L1]` co-cites
  `lem-inf-epsilon` for lower-bound clauses no step takes from it.

## 6. Overturned gradings

- **`thm-metric-continuity-characterisations` — the compactness lane graded this
  a TARGET FATAL; Alpha DOWNGRADES it to title-precision.** The lane is right on
  the mathematics: the Statement opens "The following five statements are
  equivalent" and step 1.6 uses the AC_ω-dependent direction of
  `thm-metric-sequential-closure`. But the disclosure is **inside the `## Statement`
  section itself**, in bold: "Only the implication (d) ⇒ (e) uses a choice
  principle, and it uses it only through `thm-metric-sequential-closure`, whose
  forward direction spends the Axiom of Countable Choice. The cycle
  (a) ⇒ (b) ⇒ (c) ⇒ (e) ⇒ (a) and the implication (a) ⇒ (d) are choice free."
  A3 set the governing precedent on `thm-product-of-subspaces-and-closures`: a
  Statement that discloses its own choice cost is not an unqualified false
  statement, and only the title is at fault. The item is out of wave-2 scope
  (`metric-spaces`, an earlier wave), has 18 direct `deps` consumers, and its root
  cause is `thm-metric-sequential-closure`, already in the owner queue from wave
  1b. Queued as a rider on that entry (§10) rather than repaired here. The two
  wave-2 citations into it use clause (c), the choice-free direction, and are
  exact.
- **`ex-cylinder-and-mobius-band-as-quotients` still wikilinks the seed whose
  `deps` edge Alpha deleted (topology-seams lane).** Refuted: SCHEMA §3 is
  explicit that a `deps` edge propagates and a mention does not, and the whole
  point of the `unfold` disposition is to leave the pointer while removing the
  false logical edge. The link sits in `## Example`, which `depcheck` does not
  scan, so no warning is created.
- **The orchestrator's own framing of the "six NEW `cited-not-in-deps`" was wrong
  for five of them, and Alpha overturns it with disk evidence.** Reconstructing
  both trees, only **one** of the seven rows is new:
  `cex-empty-set-has-no-sup` → `rem-sup-conventions`, where A4 removed the `deps`
  edge. The other six (`fs-totally-bounded-implies-compact`,
  `thm-compact-subset-is-closed-and-bounded` ×2,
  `thm-complete-and-totally-bounded-implies-compact`, `thm-heine-borel-rn`,
  `thm-metric-compactness-equivalences`) had `indeps=False` and a pre-Facts
  citation **already at `0dcd90e`** — they are pre-existing and out of scope.
  The one genuinely new row was fixed by moving the convention paragraph from
  `## Statement refuted` into `## Remarks` (the content was already duplicated
  there); its wikilink survives, and A3's intent — a free-prose convention remark
  is not a valid proof source — is preserved.

## 7. `generation.role` — the vocabulary gap: DECLINED, and the gate is right

Escalated by the topology Beta and by A3 for `rem-compactness-choice-ledger-metric`
and `rem-constructions-this-page-stops-short-of`.

**Alpha declines to extend the vocabulary.** The gap is deliberate, not an
oversight. SCHEMA §3 states that "Generated theorems, propositions, definitions,
lemmas, false statements, **and remarks** are prohibited in future batch scope",
and the closed `generation.role` map (`corollary`→`direct-corollary`,
`example`→`example`, `counterexample`→`counterexample`) is keyed by kind
precisely so that a generated remark has no legal role. Adding one would create a
licence for a future Beta to author exactly what the owner's
generated-claim-minimization rule forbids. `content-policy --audit` already
downgrades this to the `generated-kind` **warning** because it "cannot bind
history", and `AUDIT-WORKFLOW.md` §8 names that downgrade explicitly. The two
warnings are the intended output for two legacy items; their containment is the
`genrisk` disposition in §8, not a frontmatter value. **No normative doc change
is needed** — both `SCHEMA.md` §3 and `AUDIT-WORKFLOW.md` §8 already say this.

Separately, six legacy `ai-generated` items in the combinatorics batch were
missing a `generation.role` that the vocabulary **does** fit, an A4 omission.
Alpha added `role: example` to `ex-width-three-poset-and-a-minimum-chain-cover`,
`ex-a-four-petal-sunflower-with-nonempty-core`,
`ex-walk-trail-path-and-cycle-in-one-small-graph`,
`ex-components-distance-and-girth-in-a-disconnected-graph`,
`ex-deletion-contraction-and-a-minor-model`, and `role: counterexample` to
`cex-strict-whitney-connectivity-inequalities`, matching the wave-0/1 precedent
(41 of the corpus's 54 ai-generated statements already carry the block).

## 8. `genrisk` dispositions — both new seeds UNFOLD

`research/audit/genrisk.json` regenerated after A4: 54 seeds, 10 load-bearing, 8
already disposed in earlier waves. The two new topology seeds are disposed here;
`genrisk.mjs --receipt` now exits 0.

**The declared graph and the logical graph disagreed, and Alpha made the declared
graph honest.** A3 checked the three *direct citation* edges and found all three
in prose above the Facts block; regenerated `genrisk` showed
`rem-compactness-choice-ledger-metric` with **5 transitive logical consumers** and
`rem-constructions-this-page-stops-short-of` with 1, because **three real `deps`
edges existed**:

| consumer | seed | where the wikilink sits |
|---|---|---|
| `cor-bolzano-weierstrass-in-rn` | `rem-compactness-choice-ledger-metric` | `## Statement`: "the arrow-by-arrow account is …" |
| `rem-compactness-conventions-and-choice-ledger` | same | "What each implication … costs is recorded in …" |
| `ex-cylinder-and-mobius-band-as-quotients` | `rem-constructions-this-page-stops-short-of` | `## Example`: "the standard ones are not available at this point in the reading order" |

Alpha opened all three from disk: every one is an orientation pointer, and no
Fact or numbered step of any consumer uses the seed. All three `deps` edges were
deleted, following the wave-1b `rem-topology-conventions` precedent. This matters
beyond tidiness: **the audit itself created the SCHEMA §3 violation** by assigning
`ai-generated` this wave, so freezing it would leave the corpus in a state its own
schema forbids. After the unfold, `logical_consumers` is empty for both seeds and
`content-policy`'s `ai-generated-statement-dependency` warning is gone.

The heightened truth audit an `ai-generated` statement requires was run on both:

- `rem-compactness-choice-ledger-metric` — **CLEAN**, verified sentence by
  sentence against every named item on disk by an independent Sol refuter.
- `rem-constructions-this-page-stops-short-of` — **two false claims found and
  repaired** (§4c). The component stays `ai-generated`; repairing a proof or a
  prose body never establishes a Statement.
- `ex-lebesgue-number-of-a-two-set-cover` (evidence `trivial`) — verified by
  direct computation: 1/3 is a Lebesgue number for the two-set cover and is the
  largest one, the witness [1/3, 2/3] having diameter exactly 1/3.

One consequence is recorded and accepted: `cor-bolzano-weierstrass-in-rn` now
raises a `cited-not-in-deps` warning, because its Statement still points at the
seed. Alpha deliberately did **not** move that sentence: the paragraph is the
item's choice-cost disclosure, which is exactly the text this library wants in a
Statement, and relocating it would turn an out-of-scope landmark corollary into a
material repair requiring recertification and a rejudge. The same paragraph also
declares two sibling pointer edges (`thm-metric-compactness-equivalences`,
`def-dependent-choice`) that it says are *not* used; that is pre-existing and is
recorded for a later wave, not chased here.

## 9. Cross-batch and cross-level edge audit — reconciled against the checklist

`research/audit/wave2-audit-manifest.json`: 1,754 edges, of which **1,092 leave a
batch** (1,020 published-backward, 50 cross-batch, 22 forward). Every one was
assigned to a lane, and every lane reported its own count so omission is visible.

| batch | leaving edges | checked | wrong | imprecise |
|---|---|---|---|---|
| combinatorics | 91 | 91 | 0 | 2 (30-second) + 1 manifest drift |
| foundations | 98 | 98 | 0 | 3 (one cluster, repaired in §4c) |
| number-theory | 112 | 112 | 0 | 0 |
| real-analysis | 105 | 105 | 0 | 0 |
| topology / compactness pair | 370 | 370 | 0 | 26 (all 30-second, §5) |
| topology / subspaces pair | 316 | 316 | 0 | 0 live; 16 stale manifest rows retired by A4 |
| **total** | **1,092** | **1,092** | **0** | — |

**Coverage is complete: 1,092 of 1,092, no omissions.**

The manifest was regenerated after the A6 repairs and now reads 1,746 edges,
1,088 leaving a batch (published-backward 1,014, same-batch 658, cross-batch 50,
forward 24). The delta is exactly the four `deps` edges Alpha deleted (§8, and
`rem-sup-conventions`'s edge recorded as a forward reference) plus the two
`def-axiom-of-choice` edges added in §4a; every audited edge above is either
still present or was deliberately retired, and no new unaudited edge exists.

### The named A0 obligation is discharged

The `topology-seams` lane audited, as a dedicated second reading, the **123
edges into real-analysis pages at waves 3, 4, 5, 7 and 8** — pages the
category-local wave ordering gives no guarantee for — and the **47 edges into
`suprema-and-infima`**, audited concurrently this same wave.

- **170 of 170 checked, zero omitted.** 168 EXACT, 2 IMPRECISE, **0 WRONG**.
- **Zero TARGET-SUSPECT.** Every later-wave target was read in full on current
  disk and none showed a hidden AC, AC_ω or DC mismatch.
- Of the 47 `suprema-and-infima` edges, 16 enter the materially repaired
  `lem-finite-set-has-max`; all 16 re-verified exact against its current text, and
  no edge enters any of the other four materially changed items.

The only live imprecision is the `lem-inf-epsilon` co-citation in §5.

## 10. Impact closure

`impact-audit --from pre-A4 --to post-A6`: **261 changed interfaces, 1,958
affected items**, every one dispositioned with a concrete note in
`research/audit/wave2-impact-audit.json`; the receipt gate exits 0.

The classification is mechanical, from the git diff, per `AUDIT-WORKFLOW.md` §6,
and is recorded in `research/audit/wave2-impact-classification.json`:
**266 changed files = 222 pure additive retags + 44 material**. The pure class is
disposed wholesale (no mathematical claim, hypothesis, quantifier, direction or
dependency changed anywhere in the ancestry); the 44 material roots each carry a
per-root rationale, reproduced into every consumer's note. All 1,958 are
`still-licensed`: every material root either narrowed a claim to what its proof
licenses, corrected prose that no consumer cites as a fact, or removed a fact or
`deps` edge that no numbered step used.

Two impact-closure **misses by A4** were found by this pass and repaired: the
three `thm-box-finer-than-product` consumers (§4a) and `def-extended-reals`
(§4c). Both are the wave-0 lesson repeating — an interface narrowing whose
consumers keep asserting the old claim — and both were invisible to every
mechanical gate.

## 11. Risk reviews

`risk-report` routes **163 of the 201 merged contracts** as high or critical
(124 critical, 38 high — combinatorics 27, foundations 28, number-theory 25,
real-analysis 21, topology 61). Each was read by the independent Sol refuter lane
for its category at the judges' adversarial standard, and each carries an Alpha
`risk_review` record naming that lane.
`risk-report --require-reviewed` goes from **162 errors to 0**;
`proof-contract --strict` and `finite-smoke` exit 0 over all 201.

## 12. Twice-touched — the escalation set is a snapshot artifact, and the real count is ZERO

`touchlog audit` reports **51 items "repaired more than once"** (one at 5×, eight
at 3×). Measured properly from the ledger, that is entirely an artifact of 260
per-item `pre-<id>` snapshots taken by **five concurrent Betas**: a snapshot
captures the whole corpus, so each separate *write* by any Beta (retag, then
repair, then reflow, then a precheck restratification) lands in its own window.
The ledger counts **write events**, not logical repairs.

Measured three independent ways from disk:

1. **No item is in two wave-2 batches** (0 of 258) — the A4 write sets really are
   disjoint, so no item had two Beta owners.
2. **Net change baseline → post-A4 is exactly 258 items**, precisely the wave-2
   scope, with no stray file; and the whole of A4 is one commit, one net repair
   pass per item.
3. **Zero overlap with the wave-0, wave-1 and wave-1b touch ledgers** (276, 122
   and 182 changed items respectively) — no wave-2 item was ever touched by an
   earlier audit wave.

**Real independently-repaired count for wave 2: 0. Nothing escalates to the
orchestrator's personal audit on this ground.**

What *is* genuinely twice-touched is the set of items Alpha touched at A6 after
A4 touched them — a stage boundary, not instability. Of those, the second touch
is additive frontmatter or a prose relocation in every case except the eleven
mathematical repairs of §4, each of which was a **first** mathematical repair of
that defect. Wave 0 saw the same snapshot-window inflation; this measurement
should replace the raw `touchlog audit` number in the A10 report.

## 13. Gate status at the end of A6

| gate | before A6 | after A6 |
|---|---|---|
| `precheck` (whole corpus) | — | 2,111 checked, **0 failing** |
| `depcheck` | 27 errors | **0 errors** — `published-unaudited` empty after §14 |
| `fwdcheck` / `extcheck` / `citecheck` / `rendercheck` / `prosecheck` / `depsource` | pass | pass |
| `content-policy --audit` | **16 errors**, 9 warnings | **0 errors**, 2 warnings (the two intended `generated-kind` legacy signals) |
| `proof-contract --strict` | 0 errors | 0 errors, 201/201 |
| `finite-smoke` | 0 | 0 |
| `risk-report --require-reviewed` | **162 errors** | **0 errors**, 163 reviewed |
| `genrisk --receipt` | fails, 2 pending seeds | **exit 0** |
| `impact-audit --receipt` | unfilled template | **exit 0**, 1,958 dispositions |

## 14. Certification of Alpha's own repairs — three rounds, and where it terminated

Every repair in §3, §4, §6 and §8 was **authored by Alpha**, so none of it may be
certified by Alpha. All of it went to dedicated independent GPT 5.6 Sol
certification lanes (`scratchpad/a6-logs/certify*.prompt`), each given the exact
claim Alpha makes and told to refuse anything it could not verify from disk.

**Round 1 (`certify`) certified almost everything and refused four things, all
four upheld by Alpha and repaired:**

1. `rem-choice-ledger` — Alpha's two corrections were accepted, but the section
   heading above them still said "There is exactly one *place* where the full
   Axiom of Choice is spent" / "One step, in one proof", contradicting the new
   sentence. Heading rewritten.
2. `lem-open-or-closed-surjection-is-quotient` — the Statement narrowing was
   accepted, but the first Remark still said "none of them reverses", retaining
   the clause-3 negative assertion. Remark narrowed.
3. **Stamp discipline on three `deps`-only changes.** Alpha's own mechanical
   classification files `cor-bolzano-weierstrass-in-rn`,
   `ex-cylinder-and-mobius-band-as-quotients` and
   `rem-compactness-conventions-and-choice-ledger` as *material*
   (`changed: ["frontmatter-other"]`), yet they kept their `judge`/`audited`
   stamps. **Upheld:** `QUALITY-CONTROLS.md` is explicit that a change to
   dependency metadata is a public-interface change, and the judge's context unit
   is built from `deps`. Stamps stripped on all three; the certifier had already
   certified those three edge deletions on current text, so
   `verification.verified` rests on a real independent reading.
4. `fs-erdos-ko-rado-without-the-ground-set-bound` — **upheld, and it corrects
   Alpha's own §3 work.** The EKR article states the theorem *with* n ≥ 2r and
   explains why the hypothesis cannot be dropped; this item's construction is that
   theorem with a load-bearing hypothesis **deleted**, which is not semantic
   identity under `AUDIT-WORKFLOW.md` §6. Reclassified to `established-knowledge`
   with `alpha_concurred: true` — "EKR without its ground-set bound" is a standard,
   universally recognised false statement — keeping the URL in
   `sources.references` as the exact true theorem the item perturbs. **The wave
   therefore ends with exactly one D2 waiver, not zero.**

Round 1 also certified, with recorded SHA-256 and quoted evidence: all three
`genrisk` edge deletions (explicitly agreeing with Alpha's SCHEMA §3 reading that
a mention does not propagate and a `deps` edge does), seven of the eight
combinatorics source assignments, all three number-theory provenance corrections,
all six `generation.role` additions, and the repairs to `cex-empty-set-has-no-sup`,
`lem-finite-set-has-max`, `def-extended-reals`, both cycle-graph facts,
`library/foundations/ordinals-and-transfinite-recursion.md`,
`fs-every-ultrafilter-principal`, all three `thm-box-finer-than-product`
consumers, both quotient/Hausdorff Remarks, and
`rem-constructions-this-page-stops-short-of`.

**Round 2 (`certify2`), on the two round-1 refusals, returned two further
findings, both upheld and repaired:**

- `rem-choice-ledger` — Alpha's replacement heading still made a false *counting*
  claim (one direct AC use outside Zorn), since `thm-tychonoff` and claim 3 of
  `thm-box-finer-than-product` also spend AC directly. The numerical exclusivity
  was removed entirely: "some apply the Axiom of Choice directly instead, for
  example …". This is the third distinct false corpus claim found in this one
  ledger Remark, which is itself the wave's clearest evidence for the standing
  instruction to read Remarks with a numbered step's suspicion.
- `lem-open-or-closed-surjection-is-quotient` — round 2 confirmed the Statement and
  Remark narrowings but found a **pre-existing** citation defect beside them: "an
  open **surjection** and a closed **surjection** are unrelated notions, as
  `def-homeomorphism-and-open-maps` records with a two-point witness". That item's
  witnesses are constant maps, which are not surjective on a two-point space.
  Corrected to "being an open **map** and being a closed **map**", which is exactly
  what the cited item records.

**Round 3 (`certify3`) is a deliberate termination check** on those same two
items, with the triage rule restated as decisive. The pattern is the known
non-termination risk recorded in wave 1b: each rewrite invites a fresh reading of
the whole item, and a sufficiently strict reader will always find one more
letter-level point. The 30-second rule is the termination condition. Both items
are in wave-2 scope, so **both judge lanes read their final text at A7** — a
stronger and cross-family screen than a fourth Sol pass — and neither item's
mathematics was ever in question in any round.

`verification.verified` with `scope: published-audit` and `delegated_by: owner`
was written on **37 items** on the strength of the independent current-text
readings above. `verification.audited` was never written by any actor in this
wave.

## 15. For the orchestrator (A7 and A10)

1. **`depcheck` is clean.** All 39 items whose stamps were honestly stripped now
   carry `verification.verified` with `scope: published-audit` and
   `delegated_by: owner`, written only on an independent Sol current-text
   reading. `verification.audited` was never written.
2. **A7 scope must be extended beyond the wave manifests by three items.** Alpha
   materially repaired three published items that are **not** in any wave-2 batch
   manifest and so will not be swept by `--manifests`:
   `def-extended-reals`, `cor-bolzano-weierstrass-in-rn` (deps only) and
   `rem-compactness-conventions-and-choice-ledger` (deps only). Only the first
   changed mathematical prose and needs both judge lanes; the other two are
   `deps`-metadata only and changed no claim.
3. **Owner queue for A10** (deletions / id changes / reading-order changes only,
   plus the deferred earlier-wave findings):
   - `thm-metric-sequential-closure` — already queued from wave 1b; wave 2
     corroborates it a third time, independently, from a different category.
   - **New rider: `thm-metric-continuity-characterisations`** — unconditional
     five-way equivalence in the title while step 1.6 spends AC_ω through the item
     above; 18 direct `deps` consumers; downgraded to title-precision (§6) and out
     of wave-2 scope. It should be repaired in the same motion as its root cause.
   - The 26 compactness-page citation quirks of §5 are a candidate for one
     mechanical sweep rather than 26 separate repairs.
4. **Recommendation, third wave running:** add **link liveness** to a gate. A3
   found three dead ledger URLs and one already shipped in two published items;
   A6 found two more recorded URLs that resolve but do not contain the claim they
   are cited for. `level-coverage` checks a URL is present, never that it resolves
   or that it says what the row claims.
5. **Beta sandboxes could not resolve external DNS.** That is what forced the
   eight `established-knowledge` waivers, and it will recur. A Beta that cannot
   fetch cannot honour "every URL you record must return HTTP 200" — the honest
   fallback worked, but the environment should be fixed rather than worked around.
