# frontier-13 — Alpha Group C, round 3 (targeted): batch 4, two items

Scope as dispatched: only `ex-bounded-order-graph-classes-are-erdos-hajnal` and
`cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`. Orders 399/400
and 365.001/365.002 were not re-opened. Everything below is read from disk.

## Verdict

| pair | verdict |
|---|---|
| `erdos-hajnal-property-and-homogeneous-sets` (395) / `-examples` (396) | **`ready-for-splice`** |

Both round-2 blockers are closed. One of the two fixes did not land the way I specified it,
and on re-reading the batch I am withdrawing that half of my instruction rather than
blocking on it — reasoning in §2. Nothing in §3 or §4 blocks the splice.

---

## 1. `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` — closed

**deps.** Now carries all eight, led by the two I named:
`def-erdos-hajnal-property-and-constant`, `def-h-free-and-family-free-graph`, then the
prior six. It is now consistent with its two sibling theorems, which was the point.

**Contract — cited, not merely listed.** The two additions are `L7` and `L8`. Each has
`uses: ["1.1"]` *and* appears in step 1.1's `inputs` array. That is the citation form the
schema asks for, and it is what the two siblings have.

But the honest reading of "cited at the steps that use them": **all 46 batch-4 contracts
have exactly one derivation step.** With one step, every fact attaches to it and the
`uses`/`inputs` agreement is structurally forced. So L7/L8 are correctly placed in the only
sense available at step 3, and the placement is not yet evidence of anything. This is the
gate blind spot I recorded at round 2, it is uniform across the run, and it is not a reason
to hold 395 — but step 6 must not read today's green as a receipt about citation
placement. Carried to §4.

**Quote quality is split.**

- `L8` (`def-h-free-and-family-free-graph`) quotes the full defining text verbatim from the
  published item. A genuine proposition. Correct.
- `L7` (`def-erdos-hajnal-property-and-constant`) quotes
  *"The Erdős–Hajnal property and an Erdős–Hajnal constant for a hereditary graph class"* —
  a noun phrase, not a proposition. It is the planned **title** of an in-batch definition
  that has no authored text yet.

I checked whether the repair introduced this: it did not. All **10** batch-4 citations of
that source carry the byte-identical string, and the source is in-batch, so there was
nothing else to quote. Same defect class as batch 6's 18 hollow citations, which I carried
to step 5 rather than blocking; same treatment here. Flagged with emphasis in §4, because
this is the most-cited in-batch definition on the page and the one whose exact content every
EH proof rests on.

**Counts.** Contract citations 150 → **152**, exactly the two additions. Nothing else moved.

## 2. `ex-bounded-order-graph-classes-are-erdos-hajnal` — closed, and I am withdrawing half my round-2 instruction

### 2.1 The hypothesis is real, and it discharges correctly

Title on disk: *"Every **hereditary** graph class of bounded order has the Erdős–Hajnal
property."* The strategy was updated with it, not just the title — it now opens
*"Let $\mathcal C$ be hereditary, and suppose every graph in $\mathcal C$ has at most $N$
vertices."* The proof contract's `derivations[0].claim` carries that same amended text, so
the artifact most likely to be left stale was not left stale.

Asked directly: **does the hereditary hypothesis discharge, or is the argument still ranging
over arbitrary bounded-order classes?** The argument is per-graph and never invokes
hereditariness — for $G\in\mathcal C$ with $n=|V(G)|\le N$: $n\ge2$ gives
$\hom(G)\ge2\ge N^\epsilon\ge n^\epsilon$; $n=1$ gives $1=1^\epsilon$; $n=0$ is the
zero-base power the contract's `zero` boundary already flags.

That is the correct shape, not a gap. `def-erdos-hajnal-property-and-constant` defines the
property **for a hereditary graph class**, so hereditariness is a *domain condition making
the predicate applicable*, not a proof step. There is nothing for the argument to consume.
The round-2 defect was precisely that the predicate was being asserted outside its domain;
restricting the domain is the whole fix.

**The dispatch's alternative does not arise.** The proof does not need the hereditary
*closure* — no closure is taken, and it would be harmless if one were, since bounded order
is itself preserved under induced subgraphs, so the hereditary closure of a bounded-order
class is still of bounded order. The Statement needs no further amendment.

### 2.2 `def-hereditary-graph-class` is not in `deps` — and I no longer think it should be

I asked for two things at round 2: the hypothesis in the title, and
`def-hereditary-graph-class` in `deps`. The first landed. The second did not. Under the
failure shape I was sent to hunt, that is exactly what a half-repair looks like, so I
checked it against the batch instead of against my own prior sentence.

Of the eight batch-4 items whose title or strategy uses "hereditary", **five route the term
through `def-erdos-hajnal-property-and-constant`** — which itself declares
`def-hereditary-graph-class` — and only three declare it directly, each for a specific
reason: the EH definition is what *introduces* the restriction;
`fs-every-hereditary-class-is-erdos-hajnal` does not cite the EH definition at all; and
`def-graph-edit-distance-and-epsilon-far` is on page 399 with no EH dependency.

The exact structural twin is **`prop-erdos-hajnal-property-passes-to-hereditary-subclasses`**:
"hereditary" in its own id *and* title, hereditariness as an assumed hypothesis, and
`deps: [def-erdos-hajnal-property-and-constant]` alone. The repaired example now has that
same shape.

So the batch has a settled convention and the corrective pass followed it; **my round-2
second clause was the outlier**, and applying it here would have made this item the
inconsistent one. It would also have contradicted my own round-2 §1.5, where I ruled the
same shape on `cor-the-class-of-all-graphs-is-not-erdos-hajnal` a nonblocking 30-second gap.
Withdrawn — no edit needed, and no edit wanted.

Reachability is not at issue either way: `def-hereditary-graph-class` is `published` on
`induced-subgraphs-and-hereditary-graph-classes`, which page 395 directly `requires` and
which 396 reaches through 395; it is also one hop away via the declared EH definition.

### 2.3 The rest of the obligation set moved or correctly did not

| obligation | state |
|---|---|
| strategy text | amended in step with the title ✓ |
| contract `claim` | carries the amended text ✓ |
| contract citations | unchanged; none was invalidated by the hypothesis ✓ |
| coverage row | no harvested heading names this item or its old title — nothing to update ✓ |
| provenance | absent, consistent with every other non-new scaffold item at step 3 ✓ |
| id | `ex-bounded-order-graph-classes-are-erdos-hajnal`, unchanged and still accurate ✓ |

On the id, at the last free moment: the slug omits the hypothesis the title now carries.
That is normal for a slug in this batch (`thm-p3-free-graphs-have-square-root-homogeneous-sets`
omits "finite" likewise) and it is not wrong — the bounded-order class is the subject and
hereditary is the qualifier. **No batch-4 id needs to move.**

## 3. No regression

- **Item counts 14 / 8 / 25 / 8 — unmoved.** `content-policy --manifest-only` independently
  reports 55 scoped items, 0 errors, 0 warnings.
- **`coverage-checklist`**: 2 pages, 107 harvested results, 0 errors, 0 warnings.
- **Contracts**: 46, none empty, 152 citations.
- **Verbatim check against disk**: all **69** published-source contract quotes in batch 4
  match their items byte-for-byte, 0 failures. The 83 in-batch citations have no authored
  text to check yet.
- **The four items repaired last pass are untouched**, at the exact fact ids I recorded at
  round 2 — `thm-complete-graph-free-classes-are-erdos-hajnal` L10,
  `thm-p3-free-graphs-have-square-root-homogeneous-sets` L11, the corollary L6,
  `ex-a-forbidden-pattern-and-its-complement-share-eh-status` L4 — each still `uses` step 1.1
  and still present in that step's `inputs`.
- `lem-forbidden-induced-subgraph-classes-are-hereditary` is absent from `coverage.json`,
  which is **correct**: it is a published dependency on an existing page, not a scaffolded
  batch item, and coverage rows disposition harvested source headings, not deps.

## 4. For the orchestrator and the step-4 splice

395/396 splice now. Nothing outstanding on them.

Two carries to **step 5, batch 4** — neither blocking, both cheap now and expensive later:

1. **The hollow `def-erdos-hajnal-property-and-constant` citation, ×10.** Every batch-4
   citation of it quotes its planned title, which states no proposition. It is the
   most-cited in-batch definition on page 395, and the exact content every EH proof depends
   on — the quantifier order on $\epsilon$, whether $\epsilon$ depends on the class or the
   graph, and that the bound is $\hom(G)\ge|V(G)|^\epsilon$. When that definition is
   authored, all ten quotes must be replaced with the defining sentence. This is the
   highest-leverage hollow citation in the batch.
2. **Round-2's carry still stands**: the three new items' planned claim texts do not yet
   contain the step where hereditariness enters; the dep is declared, the sentence is not
   written.

**The one-step contract blind spot, now confirmed batch-wide.** All 46 batch-4 contracts
have exactly one derivation step, so `proof-contract --strict`'s "every step covered exactly
once" is satisfied trivially and the citation check passes on any non-empty string. Today's
green says nothing about citation placement or quote content. It starts constraining
something at step 5; step 6 must not read the step-3 green as a receipt.

**Withdrawn from my round-2 §3 close-out list:** item 1's second clause, "add
`def-hereditary-graph-class` to `deps`". The title half was required and landed; the deps
half was inconsistent with the batch and should not be routed to Beta. Item 2 landed in full.
