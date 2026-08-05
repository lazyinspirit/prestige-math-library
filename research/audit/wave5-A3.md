# A3 — orchestrator adjudication of the wave-5 Beta recommendations

Wave 5, step A3. Written 2026-08-05 by the orchestrator under `briefs/audit-orchestrator.md`
and `AUDIT-WORKFLOW.md` §7. Baseline: commit `e6b584d`, working tree as at
`research/audit/wave5-run-state.json` step `A3`.

Scope adjudicated: 4 batches, 8 pages, **209 items**.

| batch | pages | items | Beta headline |
|---|---|---:|---|
| `real-analysis` | 1 A/B pair | 31 | no fatal defect; 6 nonfatal (N1–N6) |
| `topology-countability` | 2 A/B pairs | 73 | no fatal defect; 9 nonfatal (N1–N9), 8 escalations |
| `topology-function-spaces` | 1 A/B pair | 33 | **1 escalated as possibly fatal (F1)**, 9 nonfatal |
| `topology-separation` | 2 A/B pairs | 72 | no fatal defect; 10 nonfatal (N1–N10), 1 escalation (E1) |

The dispatch is correct: the brief matches the step, all four
`wave5-<category>.{findings.md,provenance.jsonl,proof-contracts.json}` and
`.pages.json` are on disk, and A0/A2 are recorded complete in the run state.

---

## What I verified independently, and how

I did not adjudicate from any Beta's summary. Everything below was read from
disk or fetched.

1. **Ledger URL liveness — the check no gate in this driver performs.**
   Extracted all **129 distinct URLs** from the four provenance ledgers and
   fetched every one (`curl -L`, 25s timeout). **129/129 returned HTTP 200.**
   Wave 3's 6-of-63 dead-URL rate does not recur in wave 5.
2. **Ledger URL *correctness*, which liveness does not establish.** Fetched and
   read the content behind every URL carrying an `exact-source` determination
   that a book title made suspect. Findings in §4 below.
3. **The merged proof contract, run myself.** Merged the four batch contracts to
   `/tmp/wave5-merged.json` (155 scoped items) and ran
   `proof-contract.mjs --strict`: **10 errors, 0 warnings, 155/155 items
   checked**, all `citation-uses`, in exactly 6 items. See §2 — this is the
   decision the Betas got wrong.
4. **Reverse-dependency closure over the whole corpus.** Scanned the `deps` and
   `justified_by` of all **2,767** item files to test every blast-radius claim
   rather than accept it. `def-interval`: **338 consumers**, the Beta's figure
   exactly. All **8** `ai-generated` statements: **zero consumers each**.
5. **Two source documents downloaded and read**, because ten-plus provenance
   rows rest on them: Fremlin *Measure Theory* vol. 5 §5A4 and the UCR math205C
   notes. Results in §4.
6. **F1's disk facts**, item by item, including the two contradicting items on
   the same page and the dependency edge that settles reading order.

---

## 1. F1 — APPROVED as a confirmed falsehood; repair licensed

**Beta:** `topology-function-spaces`, escalated without a fatality call.
**Class:** (a) unambiguous falsehood in reader-facing prose.
**Disposition: APPROVED. Repair both items at A4 under the §9 protocol.**

The Beta declined to classify this itself. Under the A3 dispatch the call is
mine, and the answer is not close. Every disk fact checks out:

| claim | verified |
|---|---|
| `def-compact-space` defines compactness for an arbitrary topological space | `items/def-compact-space.md`, `status: published` |
| `lem-tube-lemma-for-a-compact-factor` is the general tube lemma | `items/lem-tube-lemma-for-a-compact-factor.md`, `status: published` |
| both are hosted on `library/topology/compactness.md` | `items:` list, lines 5–9 |
| `compactness` is **earlier** in the reading order | `lem-tube-lemma-for-a-compact-metric-factor` declares `lem-tube-lemma-for-a-compact-factor` in `deps` (line 10) and carries **no `forward_refs`**; `fwdcheck` reports no forward reference in this batch. A declared non-forward dependency is by construction earlier |
| the page contradicts itself | `def-locally-compact-metric-space` lines 77–79: "General topological compactness **is now available at this point in the reading order**". `lem-tube-lemma-for-a-compact-metric-factor` line 93: "The general tube lemma … **is now available in this library, on an earlier page**" |

And the two false clauses are on disk as quoted:

- `items/rem-function-space-conventions.md:51` — "Compactness for an arbitrary
  topological space is developed **only later in the reading order, so it is
  unavailable on this page and nothing here anticipates it**." Three assertions,
  three falsehoods: it is earlier, it is available, and two items on this very
  page cite it.
- `items/thm-the-exponential-law.md:106` — "**this library defines compactness
  only for metric spaces**", and the claim that the homeomorphism form needs
  "the page that defines compactness for arbitrary topological spaces" and "a
  tube lemma for a compact factor of an arbitrary product". The first is false;
  the other two name material the library already has, on an earlier page.

**Why this is a repair and not a record-and-move-on.** The standing triage rule
parks *incomplete* prose. This is not incomplete, it is false, and it is false
about the reader's own path through the library: it tells a reader that material
they can go and read does not exist. It is also the stated *reason* for a scope
limit, so a reader cannot discount it as an aside. `rem-function-space-conventions`
carries a `verification.verified` / `scope: published-audit` stamp dated
2026-08-03 — a **previous audit wave certified this page and did not catch it**,
which is the strongest argument available for not deferring it a third time.

**What is NOT wrong, and must survive the repair.** I checked the mathematics
before licensing the edit. `def-compact-open-topology` is defined over a
**metric** domain `(X,d)` with `K ⊆ X` compact per `def-metric-compactness`
(lines 34–48). So the page's metric-domain convention is genuine and forced; only
the *reason given for it* is false. `thm-the-exponential-law`'s theorem, its
refusal to claim a homeomorphism, its residual requirement (that a compact
subset of `X × Z` be covered by finitely many products of compacta — I did not
locate that in the corpus either), and its closing "None of that is proved here"
are all correct and stay.

**Repair licensed (smallest correction, exactly as the Beta proposed).** Replace
the two false clauses with the accurate wording the two current items on the same
page already use: general topological compactness and the general tube lemma
*are* available earlier; this page nevertheless works with `def-metric-compactness`
because `def-compact-open-topology` and the items over it are stated for metric
domains. No id, title, Statement, `deps` or reading-order change — so this stays
inside the delegation and off the owner queue.

**Blast radius, recomputed by me over 2,767 files:** `rem-function-space-conventions`
has **zero** consumers. `thm-the-exponential-law` has **two**:
`ex-the-exponential-law-worked-on-the-line` and `rem-function-space-conventions`
itself — both inside this A/B pair, none elsewhere in the corpus. (The Beta said
"only consumers are on this page's own B side"; one of the two is the A-page
remark. Immaterial to the disposition.)

**A4 obligations (§9):** dedicated per-item `touchlog` snapshot before the first
edit; delete the stale `verification.judge` / `audited` / `verified` stamps on
both; `impact-audit` from that baseline with a disposition for both consumers;
no `verification.audited` written back — A6's independent reading records
`verification.verified`, `scope: published-audit`, `delegated_by: owner`;
targeted rejudge at A7.

---

## 2. The 10 `citation-uses` errors — three of four Betas recommended a course that halts A4

This is the cross-cutting decision of this A3 and I am overriding the
`real-analysis` and `topology-function-spaces` Betas on it.

Both recommended **no repair** for their declared-but-unconsumed facts,
reasoning that the residual `proof-contract --strict` errors are "a true signal
about the item text" and that a material edit for a cosmetic gain is not worth
two judge calls. That reasoning is right about cost and wrong about consequence.
I read `tools/gates.mjs`:

- **A2**: `proof-contract.mjs --strict` is `required: false` — "advisory:
  unapplied citation-uses findings are expected here". That is why A2's gate run
  exited 0 with these errors outstanding.
- **A4**: `CONTRACT_TRIO({reviewed: false})` includes
  `g('proof-contract.mjs', [CONTRACTS, '--strict'])` with **no `required: false`**.
  It is a hard gate.

And there is no way to satisfy it while leaving the text alone.
`tools/proof-contract.mjs:131` errors `citation-uses` on an empty `uses`; line
157 errors `citation-fact-uncontracted` if the contract omits the fact instead.
Dropping the item from the contract fails `level-coverage` at A10 (every
proof-bearing item needs a merged contract). **A declared fact that no numbered
step cites cannot pass A4.** Recommending "no repair" here is recommending a
`gate-failed` halt at the next step.

My own run of the merged contract, for the record:

```
proof-contract: 10 error(s), 0 warning(s), 155/155 item(s) checked
```

All 10 are `citation-uses`, in 6 items. I read each item and chose the repair
that is *honest*, not merely the one that turns the gate green — tagging a step
that does not use a fact would manufacture the exact citation-precision defect
this audit exists to find.

| item | fact | disposition | why this repair |
|---|---|---|---|
| `ex-nested-intervals-single-point` | `[L8]` trichotomy | **ADD `L8` to step 2.2's tag** | Step 2.2 uses `[L4]` ("`0 < a < b` gives `0 < 1/b < 1/a`", strict) at `0 < n ≤ j+1`, nonstrict. The equality case is exactly what trichotomy licenses. The fact is genuinely used and merely untagged — and this simultaneously closes the batch's own N4 for this item. Beta's costed alternative (delete `[L8]`) would delete a fact the proof needs |
| `cex-nested-open-intervals-empty` | `[L5]` nested interval property for closed intervals | **DELETE `[L5]`, renumber `L6`→`L5`** in the fact list and in steps 1.1 and 4.1 | No step uses it and none honestly could: the item is about *open* intervals. Its content lives in the first Remark, which already carries its own `[[thm-nested-interval-property]]` link, so nothing is lost. `[L5]` is not the last label, so leave no gap — `explicitTokens` (`proof-contract.mjs:312`) matches `[FAL]\d+` positionally-blind, so a gap passes every tool, but a gap in a rendered Facts list is a reader-visible oddity for no gain |
| `lem-uniform-metric-on-a-function-space` | `[L4]` min of a two-element set | **DELETE `[L4]`** | Last of 4 labels, so a clean one-line deletion with no renumbering. No step uses it; the proof's `sup` argument runs on `[L1]`–`[L3]`. **Leave `deps` untouched** — an unused dep is not a defect, and removing `lem-finite-set-has-max` / `def-max-min` would change this item's rendered prerequisite closure for nothing |
| `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` | `[L8]` min of a two-element set | **DELETE `[L8]`** | Last of 8 labels; same reasoning, same `deps` instruction |
| `lem-ordinal-order-topology-is-t3` | `[L6]` closed neighbourhood | **ADD `L6` to step 4.1's tag** (`[step 3.1, L4]` → `[step 3.1, L4, L6]`) | Step 4.1 concludes `B` "is closed by step 3.1 and open, hence a **closed neighbourhood** of ξ inside N" — it uses precisely the notion `[L6]` supplies. The separation Beta proposed this and is right |
| `ex-the-particular-point-topology-in-the-separation-hierarchy` | `[L3]` closed ⟺ complement open; closure is least closed superset | **DELETE `[L3]`** — declining the Beta's preferred option (i) | The Beta preferred tagging `L3` into steps 1.3 and 2.1. I read those steps: both read closedness straight off `[A1]`, which already lists the closed sets of `𝒯_p` outright ("the closed sets are `X` and the subsets not containing `p`"). Tagging `L3` there would cite a fact the steps do not use — padding a tag is a citation-precision defect, and it is the defect class this audit is for. The Beta's own option (ii) is the honest one: the second half is used only in a Remark that carries its own `[[thm-closure-characterisation-top]]` link, and `[L3]` is the last label, so the deletion is clean |

**A4 must regenerate every batch contract after these edits** and re-run
`proof-contract.mjs --strict` to 0 errors before the stage gate. For the two
tag additions the contract's `uses` becomes `["2.2"]` and `["4.1"]`; for the four
deletions the citation entries go. `gen-wave5-sep-contracts.mjs` and
`gen-wave5-fs-contracts.mjs` exist for two of the batches; the other two must be
updated by whatever route produced them.

All six are **material** repairs under `audit-split.mjs`: dedicated per-item
`touchlog` snapshots, stale stamps deleted, A6 certification, no self-certification.

---

## 3. Provenance retags — APPROVED for all 209 items

**Disposition: APPROVED as a bulk pure-retag pass**, one stage `touchlog`
snapshot, not one per item.

Verified: all four ledgers together carry **209 rows**, exactly one per item in
scope (31 + 73 + 33 + 72). No item in any batch carries a legacy `authorship`
line or an existing `provenance` block, so the write is purely additive under
D5 — nothing is deleted and no `verification.judge` or `audited` stamp is
touched by the retag itself.

### The 8 `ai-generated` statements — APPROVED, and the containment claim holds

`ex-contractive-sequence-fixed-point`, `cex-unbounded-with-convergent-subsequence`,
`cex-strictly-decreasing-gaps-no-limit`, `ex-a-ccc-nonseparable-cantor-cube`,
`cex-separability-is-not-hereditary-worked`, `cex-lindelofness-is-not-productive-worked`,
`ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart`,
`rem-function-space-conventions`.

I scanned `deps` + `justified_by` across all **2,767** item files: **every one of
the 8 has zero consumers.** So `content-policy`'s
`ai-generated-statement-dependency` rule and `proof-contract`'s
`citation-ai-generated-statement` rule cannot fire, and `genrisk` computes an
empty cone for each seed. Priority 2 (minimise AI-generated load-bearing
surface) is satisfied without argument: the surface is zero.

Each is a positive determination on a constructed witness, not a
failure-to-find-a-source, which is what the 2026-08-02 owner rule requires. Seven
are `trivial`-class chart/wrapper/witness items; the eighth,
`rem-function-space-conventions`, is a page-conventions remark that can have no
literature counterpart, and follows six retro-tag precedents the Beta named.

**Note the interaction with §1:** `rem-function-space-conventions` is both the
one `ai-generated` statement in its batch and one of the two items F1 repairs.
Its `ai-generated` label stands after the repair (it remains a conventions
remark); its component labels are for A4 to retag as materially altered.

### The split label on `fs-convergent-subsequence-implies-bounded` — APPROVED

`statement: ai-altered` / `proof: ai-generated`. The reasoning is exactly right
and is the reasoning the owner rule wants: the statement label classifies the
refuted *claim* (the converse of Bolzano–Weierstrass, established mathematics),
not the local interleaving witness, and this item **is** a `deps` target —
`cex-unbounded-with-convergent-subsequence` cites it — so an `ai-generated`
statement label would make that edge illegal. Same for
`fs-nested-open-intervals-nonempty` and `fs-consecutive-differences-null-implies-cauchy`.

### The 8 `established-knowledge` rows — NOT concurred here; routed to Alpha at A6

`lem-weight-is-well-defined`, `lem-density-is-well-defined`,
`lem-character-is-well-defined`, `lem-lindelof-degree-is-well-defined`,
`lem-cellularity-is-well-defined`, `rem-countability-axiom-implication-and-choice-ledger`,
`rem-euclidean-topology-dictionary`, `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`.

The owner rule makes `established-knowledge` the **sole** URL waiver and makes it
**Alpha-concurred**. I am the orchestrator, not Alpha, so I do not concur and do
not decline: the rows are approved to be written with `alpha_concurred: false`
and are hereby **routed to Alpha at A6** as a named concurrence queue. My reading
of the evidence, offered to Alpha and not substituted for its judgment: all eight
look correct to me — five well-definedness lemmas that Fremlin asserts by writing
the minima down rather than proving, two orientation remarks assembled from the
page's own results, and one folklore ultrafilter construction. None is a case
where uncertainty is falling toward a sourced label.

**One defect to fix at A4:** `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`
(the separation batch's E1) carries `escalated_to_alpha: false` in the ledger
while its findings file calls it escalated. It is also the only sourced row in
the wave with **no URL** — precisely the row the waiver exists for. Set
`escalated_to_alpha: true` so A6's routing is mechanical rather than dependent on
someone rereading the prose.

`thm-basic-cardinal-function-inequalities` is escalated but on `semantic-source`,
not `established-knowledge`: its escalation is about the merged four-inequality
statement (Fremlin 5A4B(a) does not contain `L(X) ≤ w(X)`; the item proves it
inline at step 1.3), so `ai-altered` rather than `literature-derived` is right,
and no URL waiver is involved. Approved as recorded.

---

## 4. URL and evidence-class findings — my checks, not the Betas'

### 4a. Liveness: clean

**129/129 ledger URLs return HTTP 200.** No demotion on liveness grounds
anywhere in wave 5.

### 4b. Fremlin — VERIFIED exact, and the Beta understated nothing

Downloaded `https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf` and read
§5A4. Confirmed verbatim at the lines given: `w(X)` "the least cardinal of any
base for T" (5A4A(a)); `d(X)` "the smallest cardinal of any dense subset of X"
(5A4A(c)); `χ(x,X)` "the smallest cardinal of any base of neighbourhoods"
(5A4A(h)(i)); `c(X) = sup{#(G) : G ⊆ T\{∅} is disjoint}`; and the closing Remark
"X is called 'second-countable' iff w(X) ≤ ω, 'separable' iff d(X) ≤ ω, 'ccc' iff
c(X) ≤ ω". The 14 rows resting on Fremlin are correctly classed. **Approved.**

### 4c. UCR math205C — the Beta's characterisation is right on 5 of 6 topics and WRONG on one

Downloaded and `pdftotext`'d the notes (423 KB of text) and grepped. Confirmed
absent, 0 occurrences each: "chain condition", "ccc", "Delta-system",
"Δ-system", "sunflower", "Sorgenfrey", "lower limit", "lower-limit",
"Cantor cube", "ω1", "first uncountable". Confirmed present: PROPOSITION 2
(line 5500) "A subspace of a second countable space is second countable, and the
product…", and the Lindelöf-not-separable example at lines 5549–5567. The Beta's
reading of what UCR does and does not carry is accurate on all of that.

**The correction:** the Beta wrote that UCR contains "no occurrence at all of …
one-point compactification". It does. Lines 6208–6275 are a section headed "The
Alexandroff one point compactification", with PROPOSITION 8 (uniqueness) and
PROPOSITION 9 (the one-point compactification of `Rⁿ` is `Sⁿ`). The phrase is
unhyphenated there, which is presumably how the Beta's search missed it.

This does not change the disposition — UCR still does not state what
`fs-lindelofness-is-hereditary` and
`ex-cardinal-functions-of-a-one-point-compactification` claim (their cardinal
functions), so it remains a *partial* source and those items still need a URL
that carries their clause. But the ledger rationale for those two rows must be
corrected at A4: UCR is a genuine semantic source for the *construction*, not a
non-source.

### 4d. One `exact-source` determination demoted — `cor-monotone-converges-iff-bounded`

Of the 66 `exact-source` rows, exactly one rests on **no URL that carries its
clause**. Its three URLs are
`en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis` (the article *about*
Rudin's book), `www.jirka.org/ra/` (Lebl's landing page) and
`terrytao.wordpress.com/books/analysis-i/` (Tao's landing page). I fetched all
three and stripped tags: **none contains a statement of the theorem.**

The *determination* is sound — the rationale quotes Rudin Thm 3.14 ("Suppose
{s_n} is monotonic. Then {s_n} converges if and only if it is bounded") and Lebl,
both real and checkable. It is the URL evidence that fails.

**Disposition: APPROVED conditionally.** I located the clause-carrying open
source myself: **`https://www.jirka.org/ra/html/sec_seqsandlims.html`** contains,
verbatim, "A monotone sequence \(\{ x_n \}_{n=1}^\infty\) is bounded if and only
if it is convergent" (Theorem 2.1.10 in the current edition; the ledger's "Thm
2.2.5" is edition drift, and the clause is exact). Add that URL at A4 and
`exact-source` stands. If for any reason it is not added, the row demotes to
`semantic-source`.

Sixteen further `exact-source` rows pair a book-landing URL with a
clause-carrying one; those are fine as they stand, and the landing pages should
simply not be read as the evidence.

### 4e. ETSU Munkres notes — VERIFIED exact

Spot-checked two of the eight. `Munkres-43.pdf` line 150: "ρ̄ is the uniform
metric on `Y^J` corresponding to d" — exactly the clause
`lem-uniform-metric-on-a-function-space` is tagged `literature-derived` against.
`Munkres-31.pdf` line 22: "Definition. Suppose that one-point sets are closed in
space X. Then X is regular…" — exactly the convention fork
`def-regular-and-t3-spaces` describes and takes the other side of. **Approved.**

---

## 5. URL additions — APPROVED

### 5a. `topology-countability` N1 — APPROVED, and it is 13 items, not ten

The Beta's heading says "ten items"; its own table lists **twelve**, plus
`rem-euclidean-topology-dictionary` outside the countability page. I checked the
frontmatter of all thirteen: **each carries exactly one `sources.references`
URL**, and it is `math.ucr.edu/~res/math205C-2016/gentop-notes.pdf` for the
twelve and `en.wikipedia.org/wiki/James_Munkres` — the author's biography — for
`rem-euclidean-topology-dictionary`.

Approved as proposed: **add** the matching clause-carrying URL alongside the
existing entry, **do not remove** UCR. All the replacements returned HTTP 200 in
my sweep (`Countable_chain_condition`, `Delta-system_lemma`,
`Lower_limit_topology`, `Sorgenfrey_plane`, `Cantor_cube`,
`First_uncountable_ordinal`, `Alexandroff_extension`, `Product_topology`).
Adding a reference changes no claim, so it is not a material rewrite under
SCHEMA §3 and rides the single retag snapshot. This is the cheapest correct
repair available in this wave: it is the difference between a reader reaching the
clause and reaching a biography.

### 5b. `real-analysis` proposal 2 (six open-access URLs) — APPROVED

The Beta offered these as optional. Approved: additive frontmatter, no
mathematical text, all HTTP 200, and each carries the clause the item's book
title names — `planetmath.org/contractivesequence` (verbatim definition, the
Cauchy theorem and the geometric error bound), `proofwiki.org/wiki/Peak_Point_Lemma`,
`proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy`,
`mathonline.wikidot.com/the-monotone-subsequence-theorem`,
`ocw.mit.edu/…/mit18_100af20_lec92.pdf`, `jirka.org/ra/html/sec_bw.html`. Plus
`jirka.org/ra/html/sec_seqsandlims.html` per §4d.

### 5c. `topology-separation` N9 (99 URLs across 60 items) — APPROVED

A mechanical consequence of A1, not a defect. Every one of the 99 is in the
129-URL set I fetched and is live. Pure retag, one stage snapshot.

---

## 6. Three further repairs APPROVED beyond what the Betas proposed

Priority 1 says accuracy and citation precision outrank effort already spent and
outrank the convenience of a clean pass. Three findings were recorded as
"no repair" where the text as written is **false**, not merely incomplete. A4 is
before the judge freeze, and the A7 sweep judges the whole wave manifest
regardless of what changed, so these cost no additional judge call — only the
stamp deletion and A6's reading, both of which the wave is already paying.

| item | finding | disposition |
|---|---|---|
| `cor-components-of-open-subsets-of-rn-are-polygonally-connected` (countability N2) | `[L1]` asserts "A Euclidean ball is path-connected, **hence connected**" citing only `def-metric-ball`, `def-norm-and-normed-space`, `lem-euclidean-polygonal-paths-are-continuous` — none of which states the implication. `thm-path-connected-implies-connected` is not in its `deps`. Step 1.1 then uses "The ball is connected by [L1]", so the untraceable inference is load-bearing | **APPROVED, overriding "no repair".** Add `[[thm-path-connected-implies-connected]]` to `[L1]`'s citation list and to `deps`. This is the dominant historical defect class — a Fact asserting more than its cited targets state — and the sibling `cor-rn-is-polygonally-connected-and-locally-path-connected` already declares exactly this target for the identical inference at its own `[L3]`. The Beta declined because a `deps` addition drags impact closure; it does not here — the Statement is unchanged, so no consumer's licence changes, and the target is already reachable transitively through `[L3]` |
| `ex-countability-profile-of-omega-one` (countability N5) | line 30 writes the cover as `$\{\alpha:\alpha<\omega_1\}$`, which denotes `ω₁` itself, not the family `{[0,α) : α < ω₁}` the argument needs | **APPROVED.** The expression as written names the wrong object. One notation fix, no mathematics, and the Beta itself said this is the one place it would understand a different call |
| `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (separation N6) | step 2.1: "defines a function `p : I → ∏_i X_i`". The object defined is a *point of* the product | **APPROVED.** The codomain as written is false. Repair to the Beta's own wording: "defines a point `p ∈ ∏_{i∈I} X_i`, namely the function `i ↦ p_i`, rather than choosing a family of limits." This step is the load-bearing reason no choice function over `I` is needed, so it is the worst place in the batch for a false clause |

---

## 7. Nonfatal findings UPHELD as "no repair"

The rule I applied, stated so it can be checked: **repair where the text as
written asserts something false or mechanically blocks a gate; record where the
text is incomplete, redundant, or stylistically loose.** Every item below is
incomplete, redundant or loose, and each is inside Alpha's 30-second threshold.

**`real-analysis`**
- **N1** `thm-cauchy-criterion-via-lub` generalises in its title what its cited
  lemmas prove for `R`. Upheld. The asserted mathematics is **true** — every
  Dedekind-complete ordered field is Cauchy complete — so this is a Statement
  asserting more than is *carried out inline*, not more than is true. Narrowing a
  published title is owner-only; queued at §8.
- **N3** `lem-geometric-sequence-null` step 3.5 cites the nonnegative product
  rule `[L9]` where `M/h'` may be negative. Upheld as nonfatal — if `M ≤ 0` then
  `M ≤ 0 < n h'` outright — but **flagged to Alpha at A6** for a second read,
  because an inflated cited fact is the dominant historical defect class and this
  is one, however cheaply it closes.
- **N4** nonstrict restatements of strict cited claims, inconsistently flagged
  across pages. Upheld: sound everywhere, and the fix is a house convention, not
  an edit. Queued at §8 as a convention note. (Its instance in
  `ex-nested-intervals-single-point` is repaired incidentally by §2.)
- **N5** a Remark in `lem-cauchy-sequence-bounded` names
  `lem-convergent-implies-cauchy` in the wrong direction. Upheld: the operative
  citation is present and the extra name is inert. Prose in a Remark, no
  inference rests on it.

**`topology-countability`**
- **N3** `lem-character-is-well-defined` `[L3]` overstates `lem-ordinal-basics(e)`
  (union is an ordinal, not stated to be the least upper bound). Upheld —
  elementary set theory the reader has in hand.
- **N4** `thm-cantor-cubes-are-ccc` step 2.1 does not join the injectivity remark
  to the uncountability of the support family. Upheld: I read steps 1.1 and 2.1
  on disk; step 1.1 already carries "Distinct `U` give distinct cylinders", one
  sentence earlier.
- **N6** two items declare `proof_strategy: direct` while their body reads
  "constructive". Upheld — cosmetic, and `precheck` reads the frontmatter.
- **N7** the countability A-page summary names `ex-countability-profile-of-omega-one`,
  which sits on the B page. Upheld: the A/B pair is the reader's unit and the
  judge's context unit, so the sentence is true of the pair.
- **N8** `thm-radial-straight-line-map-on-punctured-rn` identifies `P × [0,1]`'s
  product topology with the metric subspace tacitly. Upheld — that is
  `lem-product-topology-on-rn` claim 3, recorded in the page's own
  `rem-euclidean-topology-dictionary`.
- **N9** `ex-countability-profile-of-the-lower-limit-plane` sources positive facts
  from two `fs-` items. Upheld — unusual but sound; the facts really are
  established inside those items' `## Refutation` sections and the Beta verified
  both.

**`topology-function-spaces`**
- **N2** `lem-compact-closed-balls-in-a-locally-compact-metric-space` binds `r`
  twice. Upheld — claim 1 holds for every such `r` and 2.3's `r` is one of them.
- **N3** `cex-the-pointwise-limit…` step 2.1 writes `0 < u < a_{k+1}` where the
  weak bound would do. Upheld — an omitted trivial case, not a false clause; the
  same computation covers `u = 0`.
- **N4** the same item's Statement joins two claims with "equivalently" that are
  equivalent for nets but not for sequences. Upheld after reading the item
  myself. This is a **refuted** claim: both halves are false, the item refutes
  both, the refutation uses the sound direction (a sequential counterexample at
  step 2.2, non-closedness derived at step 3.1 because a sequence limit lies in
  the closure), and nothing downstream rests on the equivalence. Under the net
  reading of "limit" the word is simply correct. Loose, not false.
- **N5** `def-equicontinuity` overloads `∀a` in the four-condition display.
  Upheld — the prose above and below states all four correctly.
- **N6** eight steps name an earlier step in prose that their bracket tag omits.
  Upheld — the omitted step is transitively present in every case and the
  contract records the true input map.
- **N7** two items link page-mates in Remarks that are not in `deps`. Upheld —
  Remark-level orienting mentions, not load-bearing citations.
- **N9** `thm-compact-open-equals-compact-convergence` step 8.1 cites `L9` for
  the triangle inequality, which is (M3) of the Given. Upheld — one-tag quirk.

**`topology-separation`**
- **N3** `thm-metric-spaces-are-completely-normal` `[L6]` cites `def-max-min` for
  an existence claim. Upheld — true, closes from trichotomy, and the repair would
  add a dep for a quirk. Noted that two sibling items on the same page cite
  `def-max-min` **and** `lem-finite-set-has-max` together; that inconsistency is
  a convention note, not an edit.
- **N4/N5** `ex-sequential-fan-…` step 1.1 and `ex-arens-space-…` step 1.2 leave
  trivial branches implicit. Upheld — omitted trivial cases, and the conclusions
  hold in them.
- **N7** two examples cite `lem-finite-set-has-max` (stated over `R`) for maxima
  of finite sets of naturals. Upheld — both items also cite
  `thm-well-ordering-principle`, which is over `N` and does the work.
- **N8** the nets page assumes "the ultrafilter lemma" where the library's home
  states it under AC. Upheld, and I agree it is **not a defect**: the citing
  items assume *less* than the target proves from, so every consequence holds a
  fortiori. Stating UL standalone is a scope decision; queued at §8.
- **N10** `fs-every-hausdorff-space-is-regular` gives a loose reason in its
  Statement (the cited lemma is the converse direction and is not needed).
  Upheld — rhetorical, not false; the conclusion and its proof are correct.

**Declined outright:** `real-analysis` proposal 3 (delete the unused `[L8]` from
`ex-nested-intervals-single-point`). The Beta advised against it and I agree, for
a stronger reason than it gave: step 2.2 genuinely needs trichotomy, so `[L8]`
must be **tagged**, not deleted. See §2.

---

## 8. Queued for the A10 owner report — no A4 action

1. **The book-title / stand-in-URL convention, corpus-wide.** Raised
   independently by three of four Betas (`real-analysis` N6,
   `topology-countability` N1, `topology-function-spaces` N8): a printed-book
   reference paired with the Wikipedia article about the *book* or the *author*.
   Measured in wave 5: 24 of 31 `real-analysis` items, 22 + 7 of 33
   `function-spaces` items, 13 `countability` items. My §4d check confirms these
   URLs resolve and carry no statement. The title is honest and the URL is
   reachable; the *pairing* is what misleads. §5 repairs it inside wave-5 scope
   by addition; the convention decision is the owner's.
2. **`thm-cauchy-criterion-via-lub`'s title** (`real-analysis` N1). Narrowing a
   published title touches reading order and is owner-only. The mathematics is
   true; the obligation is that the transfer to an arbitrary complete ordered
   field is not carried out inline. Worth writing into the eventual "equivalent
   forms of completeness" page rather than editing here.
3. **A standalone ultrafilter-lemma item** (`topology-separation` N8). The
   library's only home for the named principle states it under AC. Adding a
   standalone UL statement is a scope decision, not an audit repair.
4. **The strict/nonstrict restatement convention** (`real-analysis` N4). The
   library flags the equality case at length in some items and silently absorbs
   it in others. A convention note would settle it corpus-wide.
5. **Cross-wave claim not certified.** `thm-monotone-convergence`'s Statement
   asserts "Everything on the sequences page held in any Archimedean ordered
   field", a claim about `sequences-and-limits`, a **wave-4** page outside wave-5
   scope. The Beta found no counterexample but declined to certify it. Carried
   forward; A9's re-grep should not treat it as closed.

---

## 9. Summary of what A4 is authorised to do

**Pure retag — one stage `touchlog` snapshot, all 209 items.**
- Write `provenance.statement` / `provenance.proof` per the four ledgers.
- Write a `generation: role:` block on the `trivial`-class `ai-generated` items
  per their ledger rows.
- Add the approved `sources.references` URLs: 13 items (§5a), the
  `real-analysis` set (§5b), the separation 99-across-60 (§5c), and
  `jirka.org/ra/html/sec_seqsandlims.html` on `cor-monotone-converges-iff-bounded`
  (§4d).
- Ledger corrections: `escalated_to_alpha: true` on
  `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` (§3); correct
  the UCR rationale on `fs-lindelofness-is-hereditary` and
  `ex-cardinal-functions-of-a-one-point-compactification` (§4c).

**Material repairs — dedicated per-item snapshots, stale stamps deleted, A6
certification, no self-certification. Eleven items.**
- F1: `rem-function-space-conventions`, `thm-the-exponential-law` (§1) — plus
  `impact-audit` closure over `thm-the-exponential-law`'s two consumers.
- Contract-blocking: `ex-nested-intervals-single-point`,
  `cex-nested-open-intervals-empty`, `lem-uniform-metric-on-a-function-space`,
  `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets`,
  `lem-ordinal-order-topology-is-t3`,
  `ex-the-particular-point-topology-in-the-separation-hierarchy` (§2).
- Accuracy: `cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
  `ex-countability-profile-of-omega-one`,
  `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` (§6).

**Then, before the A4 gate run:** regenerate all four batch proof-contract files
against the edited text and confirm `proof-contract.mjs --strict` reports
**0 errors** on the merged contract. It reports 10 today, and it is a hard gate
at A4.

**Routed to Alpha at A6, not decided here:** the 8 `established-knowledge`
concurrences (§3); a second read of `lem-geometric-sequence-null` step 3.5 (§7);
the `risk_review` dispositions the three batches left `pending` (33 + 18
CRITICAL, 20 + 9 HIGH across countability and separation, plus the
function-spaces tiers).

**Nothing in this receipt approves a deletion of an item, an id change, or a
reading-order change.** Every repair above is a citation-precision fix, a prose
correction of a verified falsehood, or an additive retag.
