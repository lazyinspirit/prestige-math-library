# frontier-13 — Alpha group C, round-2 re-check (final gate before step 4)

**Group:** C (batches 4 and 6) · **Alpha:** Claude Opus 5, `claude` runner, `xhigh`,
1,000,000-token window · **Date:** 2026-08-15

Narrow pass over the corrective work only. `frontier-13-alpha-c-recheck.md` and
`frontier-13-alpha-c-step3-scaffold-review.md` stand. Everything below was read from
`research/frontier-13-batch-4.*`, `research/frontier-13-batch-6.*`, `items/`,
`library/`, `research/plan-spec.json` and the cached Riehl PDF. **No file belonging to
batches 1, 2, 3, 5 or 7 was opened.** Nothing was authored; no batch file, plan entry
or published item was edited. No permission prompt was raised.

## Verdicts

| pair | verdict | why |
|---|---|---|
| `erdos-hajnal-property-and-homogeneous-sets` (395) / `-examples` (396) | **not-ready** | F4.5 landed completely and correctly. Two remaining edits, both in artifacts step 4 splices into `plan-spec.json` — a title missing a hypothesis, and one item's deps — §1.3 |
| `regular-pairs-and-induced-counting` (399) / `-examples` (400) | **ready-for-splice** | untouched by the pass; 25 / 8 items, gates green |
| `adjunctions-units-and-counits` (365.001) / `-examples` (365.002) | **ready-for-splice** | F6.7, F6.8 and F6.9 all confirmed from disk and from the PDF; the one residue lives in the proof contracts, which step 4 does not splice — §2.4 |

The `not-ready` is two one-line scaffold edits. It is narrow, and I want to be precise
about why it is a block while the larger batch-6 residue is not: **step 4 splices
`{id, kind, title, deps}` into `plan-spec.json`.** A title or a dep fixed after the
splice is a plan mutation and a re-validate; a proof-contract citation fixed at step 5
costs nothing, because step 5 replaces the single planned step with real numbered ones
and re-anchors every citation anyway. The gate question is not "is this wrong" but
"does this stop being free", and those two artifacts answer it differently.

---

## 1. Batch 4 — the hereditary repair

### 1.1 F4.5 landed on every item that asserts the property, including the B page

Verified from `pages.json` and `proof-contracts.json`, not from Beta's account:

| item | page | `deps` | contract fact |
|---|---|---|---|
| `thm-complete-graph-free-classes-are-erdos-hajnal` | 395 | ✓ | L10 |
| `thm-p3-free-graphs-have-square-root-homogeneous-sets` | 395 | ✓ | L11 |
| `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` | 395 | ✓ | L6 |
| `ex-a-forbidden-pattern-and-its-complement-share-eh-status` | **396** | ✓ | L4 |

Beta found the B-page instance itself; it was not in the fix task, which said "and the
fourth if the B-page instance also asserts the property". That item applies
`prop-erdos-hajnal-property-is-complement-invariant` — "**A hereditary class** has the
Erdős–Hajnal property exactly when its complementary class does" — to the $P_3$-free
class, so it needs the licence for the same reason. Correctly identified.

All four quote the lemma's exact published Statement, *"For every family $\mathcal F$ of
finite graphs, the class of all $\mathcal F$-free finite graphs is hereditary."* — a
proposition, not a lead-in.

**On "cited at the step where the hypothesis is used":** at step 3 every batch-4 contract
declares one derivation, `planned-main-argument`, at `step: "1.1"`, with every fact
attached to it. There is no second step for a citation to be misfiled against, so the
finer check is not expressible yet — this is the gate blind spot I recorded at round 1
§3. What I could check, I did: the lemma is attached to the derivation whose `claim`
text is the argument that needs it. **Carry to step 5:** none of the three planned
claim texts yet contains the sentence where hereditariness enters, so the author must
write that step, not merely inherit the dep.

### 1.2 The pass's own addition, checked for the same shape

The four additions make a published item load-bearing on four scaffold items, so the
provenance-order rule applies. `lem-forbidden-induced-subgraph-classes-are-hereditary`
carries `provenance.statement: ai-altered` — eligible, but not auto-trusted. Its exact
claim is not in doubt: an induced subgraph of an $\mathcal F$-free graph is
$\mathcal F$-free, since an induced copy of $H$ inside it is an induced copy inside the
whole, and $\mathcal F$-freeness is isomorphism-invariant. Established from my own
mathematical knowledge, and batch 4's dependency-justification table already records the
route. **No violation, and the addition is sound.** (Its `provenance.proof` is
`ai-generated`; that is irrelevant to eligibility.)

Nothing else moved with it, and nothing needed to: the lemma's home page
`induced-subgraphs-and-hereditary-graph-classes` is in the transitive `requires` closure
of **both** page 395 (56 pages) and page 396 (57), so no `requires` amendment. Item
counts 14 / 8 / 25 / 8 unchanged, contracts 46, 0 empty, citations 146 → 150 (+4,
exactly the four additions), 0 non-verbatim against disk, provenance rows and coverage
dispositions untouched, `content-policy --manifest-only` and `coverage-checklist` both
clean.

### 1.3 Not-ready — exactly this

**(a) `ex-bounded-order-graph-classes-are-erdos-hajnal` (page 396) asserts the property
of a class that need not be hereditary.**

Title: *"Every graph class of bounded order has the Erdős–Hajnal property."*
`def-erdos-hajnal-property-and-constant` defines that property **for a hereditary graph
class**. A class of bounded order need not be hereditary — $\{K_2\}$ is a class of
bounded order, and $K_1$ is an induced subgraph of $K_2$ that is not in it.

This is a stronger instance of the round-1 defect, not a weaker one. There, the class
genuinely was hereditary and only the citation was missing. Here the hypothesis is
absent from the statement itself, so no citation can repair it: **the title asserts the
predicate outside the domain on which the page defines it.** The argument in the
strategy is fine and proves the inequality for every member of any bounded-order class;
only the applicability of the phrase is unlicensed.

Fix: insert the hypothesis — "Every **hereditary** graph class of bounded order has the
Erdős–Hajnal property" — and add `def-hereditary-graph-class` to `deps`. The id needs
no change and stays accurate. One line, and it is the last free moment, because the
title lands in `plan-spec.json` at step 4.

**(b) `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` is still
missing two of the three deps I named at round 1 §1.2.**

It has `lem-forbidden-induced-subgraph-classes-are-hereditary`; it still lacks
`def-erdos-hajnal-property-and-constant` and `def-h-free-and-family-free-graph`. This is
a routing loss, not a Beta failure — `frontier-13-beta-4-fix2.task.md` carried only the
hereditary lemma, and Beta did exactly what it was asked plus the B-page item.

It matters because the corollary's **own title** uses the phrase
"has the Erdős–Hajnal property", and the coverage ledger homes that phrase on
`def-erdos-hajnal-property-and-constant` ("Definition that a fixed graph H has the
Erdős–Hajnal property" → `included`). It now also cites a lemma phrased in terms of
$\mathcal F$-free classes without citing the definition of $\mathcal F$-free. Its two
sibling theorems, repaired in the same pass, both carry all three. The repair left one
of the three items it touched inconsistent with the other two.

Fix: two `deps` entries and two matching contract citations. No new item, no split, no
reading-order change, no mathematical change.

### 1.4 Ids versus content — no change needed

Checked at the last free moment. `thm-complete-graph-free-classes-are-erdos-hajnal`
(id ↔ $K_t$-free), `thm-p3-free-graphs-have-square-root-homogeneous-sets`,
`cor-every-graph-on-at-most-three-vertices-…` and
`ex-bounded-order-graph-classes-are-erdos-hajnal` all match their titles, and (a) above
does not disturb its id. **No batch-4 id needs to move.**

### 1.5 Two lesser observations, neither blocking

- `cor-the-class-of-all-graphs-is-not-erdos-hajnal` is titled "**The hereditary class**
  of all finite graphs…" but cites nothing establishing heredity. It is immediate from
  `def-hereditary-graph-class` and the claim is negative; a 30-second gap, record it and
  move on.
- `ex-complete-and-empty-hereditary-classes-have-constant-one` plans to "check heredity
  under induced subgraphs" inline, which is the right disposition for a one-line check.

Round-1 §1.4 stands: the Chernikov §3.1 and Zhao §2.6/§2.8 section titles were never
routed and are still paraphrases on disk. Non-blocking, still worth one pass.

---

## 2. Batch 6 — passes three and four

### 2.1 F6.7 — confirmed against the PDF

I re-opened `/tmp/riehl-ctx.pdf` (296 pp.) and read its own table of contents rather
than the body headings:

```
4.1. Adjoint functors                                    132
4.2. The unit and counit as universal arrows             138
4.3. The calculus of adjunctions                         143
4.4. Contravariant and multivariable adjoint functors    149
4.5. Locally cartesian closed categories                 156
4.6. Adjunctions, limits, and colimits                   165
```

All four printed titles are now in `coverage.json` verbatim, and **none of the four
paraphrases survives anywhere in the file**. The locator's page arithmetic checks out
against the same table: "pp. 132–156, stopping before Section 4.5 on p. 156" and
"Section 4.6 in full, printed pp. 165–173" are both right. **Fixed.**

### 2.2 F6.8 — fixed, and the author will find the row

`research/frontier-13-batch-6.notes.md` line 326, in the **B-page** provenance table:

```
| `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid` | literature-derived | ai-altered | RI Ex. 4.1.15 |
```

The dead id now appears exactly once in the whole file, at line 512 inside the F6.6
record — a historical statement of what was renamed, which is correct and should stay.
The rename is coherent across all four artifacts: the item sits on page 365.002 with a
title about the right adjoint alone, its coverage row (`Example 4.1.15, inclusion of
groupoids is left adjoint to the maximal-subgroupoid functor` → `included`) names the
new id, and its contract is keyed on it.

I checked the whole table rather than the one row: **60 items, 60 provenance rows, 0
items without a row, 0 rows naming a non-item.** A step-5 author reaches this item and
finds its row. **Fixed.**

### 2.3 F6.9 — the eight are fixed

Each of the eight now states a proposition. Verified against the source file on disk,
not against Beta's summary:

| item | fact | now carries |
|---|---|---|
| `thm-adjunctions-compose` | F1 | the interchange identity $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ |
| `thm-mates-under-a-pair-of-adjunctions` | F1 | the same identity |
| `thm-fullness-and-faithfulness-…-counit` | F3 | $r\circ f=1_A$ ⟹ $f$ split mono and a section, $r$ a retraction |
| `thm-abelianisation-is-left-adjoint-…` | F1 | $G^{\mathrm{ab}}:=G/[G,G]$ |
| `thm-abelianisation-is-left-adjoint-…` | F2 | $[g,h]:=ghg^{-1}h^{-1}$ |
| `ex-the-galois-connection-between-ideals-and-varieties` | F3 | the left/right/two-sided ideal conditions |
| `ex-the-galois-connection-between-ideals-and-varieties` | F4 | the ideal criterion, closure under $x-y$ and $rx,xr$ |
| `ex-adjunction-between-preorders-computed` | F2 | $m\le n\iff\exists k\in\mathbb N\,(m+k=n)$ |

Counts confirm nothing else moved: 49 contracts, 0 empty, **119 citations before and
after** — quotes were extended, none added or removed. All 119 are verbatim substrings
of their sources. Items 51 / 9, provenance and coverage untouched, both gates clean.

### 2.4 The residue — 18 more citations of the same shape, and it is mine

I re-ran the check as a detector over all 119 rather than by reading, and then opened
each source to see what the quote drops. **18 citations across 10 items are hollow by
the same test**, two more are borderline, and one detector hit is a false positive.

Three of the ten are contracts the F6.9 pass repaired — the fix landed on the enumerated
fact and its siblings in the same array stayed:

| item | still hollow | drops |
|---|---|---|
| `thm-fullness-and-faithfulness-…-counit` | F1, F2 | the full/faithful definitions; the whole mono/epi condition |
| `ex-the-galois-connection-between-ideals-and-varieties` | F1, F2 | the polynomial-ring recursion; the evaluation formula |
| `ex-adjunction-between-preorders-computed` | F3, F4 | $m\cdot0=0,\ m\cdot\sigma(n)=m\cdot n+m$; $a=qb+r,\ 0\le r<b$ and uniqueness |
| `ex-frobenius-reciprocity-for-group-representations` | F2, F3, F4, F8 | the vector-space data; $T(au+bv)=aT(u)+bT(v)$; (S1)–(S3); the finite-sum formula |
| `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` | F1, F2 | all field axioms; the three homomorphism equations |
| `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` | F2, F3 | the three ordinal-addition clauses; the associativity equation |
| `thm-unit-components-are-initial-in-their-comma-categories` | F2 | both numbered universal-arrow equivalences |
| `thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets` | F1 | the image and preimage formulas |
| `lem-words-satisfy-the-free-monoid-universal-property` | F5 | the indexed-union definition |
| `lem-coextension-of-scalars-carries-a-module-structure` | F1 | (RH1)–(RH3) |

Borderline and left alone: the two `def-natural-numbers` quotes stop after "is the
smallest inductive set", which is a proposition even though the displayed formula
follows. Not hollow. False positive: `cor-a-galois-connection-…` F1 on `def-partial-order`
ends in a semicolon because the source lists axioms, but carries antisymmetry in full —
that is the F6.5 fix and it is correct.

**Say plainly whether batch 6 has converged: the repairs have. My enumeration had not.**
Pass four introduced nothing and left nothing behind inside its own scope — the counts
prove it changed eight strings and one table key and touched nothing else. The residue
is not repair drift; it is the un-enumerated remainder of a class I sampled at round 1
and reported as eight when it was twenty-six. The fix task was built from my list, so
the repair inherited my under-count. Batch 4 has zero instances of this shape, which is
what made eight look like a complete finding rather than a sample.

**And it does not block the splice.** Step 4 splices `{id, kind, title, deps}` into
`plan-spec.json`; it does not touch `proof-contracts.json`. At step 5 each contract's
single `planned-main-proof` step 1.1 is replaced by real numbered steps and every
citation is re-anchored to the step that uses it — so repairing these 18 quotes now,
against a step that is about to be discarded, is work step 5 redoes. The right
disposition is a named step-5 obligation, delivered above as an exact list so the
orchestrator routes it once instead of rediscovering it at step 6.

### 2.5 Nothing else regressed

Item counts 51 / 9, contracts 49 with 0 empty, 119 citations, 60/60 provenance rows,
0 orphan rows, `coverage-checklist` 195 harvested results / 0 errors,
`content-policy --manifest-only` 60 items / 0 errors, every coverage disposition
resolving to a real in-batch or published item, 0 duplicate ids.

Round-1 §2.4 stands: `prop-in-a-poset-adjunction-the-triangle-identities-are-automatic`
still says "poset" without using antisymmetry, still needs no repair, still a free
retitle to "preorder" at step 5 if an author wants the honest generality.

---

## 3. For the orchestrator and the step-4 splice

**To close 395/396 — two edits, both in what step 4 freezes:**

1. `ex-bounded-order-graph-classes-are-erdos-hajnal` (page 396): add the hereditary
   hypothesis to the title, add `def-hereditary-graph-class` to `deps`.
2. `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` (page 395):
   add `def-erdos-hajnal-property-and-constant` and `def-h-free-and-family-free-graph`
   to `deps`, with matching contract citations.

I re-check only these two on return. 399/400 and 365.001/365.002 are clear to splice now
and should not wait.

**Carry to step 5, batch 6:** the 18 hollow citations in §2.4, by item and fact.

**Carry to step 5, batch 4:** the three new items' planned claim texts do not yet contain
the step where hereditariness enters; the dep is declared but the sentence is not
written.

**Still never routed, from round 1** — §1.4 Chernikov/Zhao section titles, §2.5 was closed
by F6.7, and §3 the A-page summary paragraph-1 rewrite across all three A pages. The
summary item is run-wide and cheapest before step 4 splices the prose scaffolds; groups
A and B likely carry the same residue.

**Gate blind spot, unchanged and now demonstrated twice.** `proof-contract.mjs --strict`
checks that the input map covers every numbered step exactly once. With one step, any
set of facts covers it exactly once, and the citation check passes on any non-empty
string. That is how 26 lead-in fragments passed a green contract gate in batch 6, and why
a green gate at step 3 is not evidence about citation content. It starts constraining
something at step 5. Do not let step 6 read the earlier green as a receipt.

**Standing, still not mine to act on:** `research/plan-category-theory-track.md` line 1137
still names `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple`, now a dangling id.
Outside the splice path, but it is the design/spec drift shape.

No blockers.
