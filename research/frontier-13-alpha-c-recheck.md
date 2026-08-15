# frontier-13 — Alpha group C, step-3 → 4 re-check

**Group:** C (batches 4 and 6) · **Alpha:** Claude Opus 5, `claude` runner, `xhigh`,
1,000,000-token window · **Date:** 2026-08-15

Companion to `research/frontier-13-alpha-c-step3-scaffold-review.md`, which stands.
Everything below was confirmed against `research/frontier-13-batch-4.*` and
`research/frontier-13-batch-6.*` on disk, plus `items/`, `library/` and
`research/plan-spec.json`. **No file belonging to batches 1, 2, 3, 5 or 7 was
opened.** Nothing was authored and no batch file, plan entry or published item was
edited. No permission prompt was raised at any point.

## Verdicts

| pair | verdict | why |
|---|---|---|
| `erdos-hajnal-property-and-homogeneous-sets` (395) / `-examples` (396) | **not-ready** | F4.1 fixed and the new mathematics is sound, but all three new items assert a *hereditary-class* property of an $H$-free class with nothing in their dependency sets supplying hereditariness — §1.2 |
| `regular-pairs-and-induced-counting` (399) / `-examples` (400) | **ready-for-splice** | F4.3 landed on both counts; no repair touched anything else on the pair |
| `adjunctions-units-and-counits` (365.001) / `-examples` (365.002) | **not-ready** | F6.5 fixed; F6.6 **partially** fixed — the notes' provenance table still keys the renamed item by its dead id — and 8 contract citations quote a lead-in instead of the clause — §2.2, §2.3 |

Both `not-ready` verdicts are small, mechanical, and free to apply now. Neither is a
mathematical defect: no proof I re-read is wrong. They are the two failure shapes
this gate exists to catch — a claim that moved while its obligation did not, and a
count that went green while the thing being counted stayed hollow.

---

## 1. Batch 4

### 1.1 F4.1 — **fixed**, and the mathematics holds

The page is 11 → 14 items. I checked each new item's argument rather than its
presence.

**(A) `thm-complete-graph-free-classes-are-erdos-hajnal`** — sound, and it claims
*less* than Ramsey gives.

The dispatch asked whether the exponent is the one Ramsey actually gives and whether
the hypothesis is genuinely $K_t$-free. Both check out:

- The published item is $\binom{s+t-2}{s-1}\to(s,t)^2$; the strategy instantiates it
  "with parameters $t,s$" and writes $\binom{t+s-2}{t-1}$, which is exactly that
  binomial under $(s,t)\mapsto(t,s)$. `def-ramsey-colouring-and-arrow-notation` reads
  $N\to(s,t)^2$ as "a red $s$-set or a blue $t$-set", so with red as adjacency the
  instantiation yields a clique of size $t$ or a stable set of size $s$. $K_t$-free
  kills the first. Correct, and the two binomials are not accidentally transposed.
- The chain $\binom{t+s-2}{t-1}\le(t+s-2)^{t-1}\le(2s)^{t-1}\le n$ is valid, and the
  middle inequality is exactly where $s\ge t-2$ is needed — the strategy states that
  constraint and uses it there. The last step follows from
  $s=\lfloor\tfrac12 n^{1/(t-1)}\rfloor\le\tfrac12 n^{1/(t-1)}$.
- The exponent claimed is $1/t$. Ramsey here actually delivers an exponent
  approaching $1/(t-1)$, so $1/t$ is a deliberate underestimate, not an overclaim.
  The title claims no exponent at all.
- Degenerate cases are all handled in the strategy: $t=1$ (only the null graph is
  $K_1$-free), $t=2$ (the edgeless class), the finite initial range closed by
  $\hom(G)\ge2$ for $n\ge2$ with the exponent reduced accordingly, and $n=1$ separately.
  The arrow's parameters must be positive; $s\ge t-2\ge1$ holds for $t\ge3$.

**(B) `thm-p3-free-graphs-have-square-root-homogeneous-sets`** — sound, and the
degenerate cases genuinely close rather than being waved at.

- The shortest-path argument is right: $u,v$ nonadjacent in one component forces a
  shortest path of length $\ge2$, whose first three vertices induce $P_3$ because a
  chord would shorten it. Hence every component is a clique.
  `def-graph-distance-and-girth` defines distance as a minimum over **paths**, so no
  walk-to-path conversion is needed and the absent
  `lem-every-graph-walk-contains-a-path-between-its-endpoints` is not a gap.
- The dispatch asked whether $\alpha$ and $\omega$ are taken over the right objects.
  They are: both are over $G$, not over components — $\omega(G)\ge\max_i c_i$ from a
  single component being a clique, $\alpha(G)\ge r$ from one vertex per component.
  The chain $n=\sum_i c_i\le r\max_i c_i\le\alpha\omega\le\hom^2$ is correct.
- **Empty graph:** this closes for a real reason, not by convention-dodging.
  `def-clique-stable-set-and-numbers` publishes, in its Definition,
  "$\omega(K_0)=\alpha(K_0)=0$" — so $\hom(K_0)=0\ge\sqrt0$, and the contract's
  `zero: checked` row is honest. Single vertex: $\hom=1\ge1$.
- "Erdős–Hajnal constant $1/2$" is safe under the page's own
  "**an** Erdős–Hajnal constant" definition, and is in fact optimal
  ($\sqrt n$ cliques of size $\sqrt n$), so even the strong reading is true.

**(C) `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`** —
follows, with no gap at the small cases.

Up to isomorphism and complementation the graphs on $\le3$ vertices are
$K_0,K_1,K_2,K_3,P_3$ — the strategy lists $K_1,K_2,K_3,P_3$ and explicitly flags the
null pattern ("Check the null pattern separately if graphs of order zero are admitted
by the final Statement"). $K_1,K_2,K_3$ come from (A) at $t=1,2,3$; $P_3$ from (B);
$\overline{K_2},\overline{K_3},\overline{P_3}$ from complement invariance. No gap.

**Reading order is legal.** The three new items sit at positions 5, 6 and 10; every
in-page dependency of every item on all four batch-4 pages precedes it. Zero forward
references introduced. Page sizes 14 / 8 / 25 / 8, far under the 60 ceiling.

**Closure is intact.** I re-derived it: all 15 published dependencies of the three
new items resolve to pages inside page 395's 56-page transitive `requires` closure —
`graphs-walks-and-connectivity`, `ramsey-theory`,
`induced-subgraphs-and-hereditary-graph-classes`,
`finite-counting-and-binomial-coefficients`, `the-logarithm-and-general-powers`,
`the-exponential-function`, `foundations-of-the-real-numbers`. **0 out of closure**,
no `requires` amendment needed, and the same-run non-citation constraint between the
two batch-4 pairs is untouched.

**Coverage.** The Chudnovsky locator now runs to §2 in full. Every heading on that
range carries a disposition: the four §2 headings map to the three new items
(`included`), and Seinsche (Thm 2.1), substitution (definition and Thm 2.2), the
four-vertex conclusion and the four prime five-vertex graphs are each `deferred` with
a reason written about **that specific result** and naming its destination page.
Faithful to the source, not merely structurally complete.

**Provenance.** All three new items carry both axes — `literature-derived` /
`ai-altered` — in `pages.json` *and* in the notes' provenance table, each with a
rationale distinguishing the sourced statement from the locally expanded proof. No
`ai-generated` statement is load-bearing anywhere in the batch.

### 1.2 The defect the repair introduced

**Every one of the three new items asserts a property that is defined only for
hereditary classes, about an $H$-free class, with nothing in its dependency set
saying that class is hereditary.**

`def-erdos-hajnal-property-and-constant` is "…for a hereditary graph class". So
"the class of $K_t$-free graphs has the Erdős–Hajnal property" is only well-formed
once the $K_t$-free class is known to be hereditary. That fact is published as
`lem-forbidden-induced-subgraph-classes-are-hereditary` — *"For every family
$\mathcal F$ of finite graphs, the class of all $\mathcal F$-free finite graphs is
hereditary"* — homed on `induced-subgraphs-and-hereditary-graph-classes`, **already
in this page's closure**.

The page's own pre-existing items already know this. Both
`prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment` and
`thm-single-pattern-and-finite-family-erdos-hajnal-formulations` list that lemma in
`deps` for exactly this step. The three new items do not.

This is the batch-6 F6.5 shape exactly: a correct claim whose obligation did not move
with it. It is also the one defect class a Beta cannot see in its own work, because
from inside the item the hereditariness reads as background rather than as a cited
fact.

A second, narrower gap on the same items:

**`cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` cites
neither `def-erdos-hajnal-property-and-constant` nor `def-h-free-and-family-free-graph`.**
Its title uses the fixed-pattern phrase "$H$ has the Erdős–Hajnal property", and the
coverage ledger correctly homes that phrase on `def-erdos-hajnal-property-and-constant`
("Definition that a fixed graph H has the Erdős–Hajnal property" → `included`). So the
corollary omits the item that defines the phrase in its own title, while its two
siblings (A) and (B) both cite it.

**Exact remaining work — four `deps` additions and their contract citations:**

| item | add to `deps` |
|---|---|
| `thm-complete-graph-free-classes-are-erdos-hajnal` | `lem-forbidden-induced-subgraph-classes-are-hereditary` |
| `thm-p3-free-graphs-have-square-root-homogeneous-sets` | `lem-forbidden-induced-subgraph-classes-are-hereditary` |
| `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` | `lem-forbidden-induced-subgraph-classes-are-hereditary`, `def-erdos-hajnal-property-and-constant`, `def-h-free-and-family-free-graph` |

Each needs a matching `citations` entry quoting the lemma's Statement clause and
mapped to the step that uses it. No `requires` change, no new item, no split, no
mathematical change to any strategy.

### 1.3 The other batch-4 findings, by name

| finding | verdict |
|---|---|
| **F4.2** — delete both B-page summaries | **fixed.** The notes' summary section now holds exactly two blocks, for orders 395 and 399. Both B-page drafts are gone; the notes record the deletion. Word counts 88 / 64 and 71 / 71, all under 150, two nonempty paragraphs each. |
| **F4.3a** — `rem-tower-and-wowzer-bounds-in-regularity` must say *upper* | **fixed.** Title is now "Ordinary regularity gives tower **upper** bounds; the strong-regularity proof used here gives wowzer **upper** bounds" — both clauses, which was the point. Its two deps are unchanged and both still on the page, and both still support the retitled claim. |
| **F4.3b** — Zhao Exercises 2.1.22–2.1.25 | **fixed.** The Zhao locator now reads "§2.1 in full from Definition 2.1.1 through Exercise 2.1.28" and all four exercises carry dispositions. |
| **F4.4** — proof-contract citations | **fixed, and real.** 46 contracts, 46 proof-bearing items, 0 empty arrays, 146 citations. I checked every citation whose source is a **published** item against the file on disk: **all verbatim, none title-like, none under 60 characters — 0 hollow.** Citations naming in-batch scaffold items quote titles, which is the only text those items have at step 3. |

### 1.4 Not fixed — and it was never routed

My step-3 §5 action 5 asked for the **Chernikov §3.1 section title** and the **Zhao
§2.6/§2.8 subheadings** to be replaced with the printed titles.
`research/frontier-13-beta-4-fix.task.md` carries F4.1–F4.4 and does not mention
either. On disk the Chernikov locator still reads "Section 3.1, **Graphs with no
order**" — the source's §3.1 is titled "Erdős-Hajnal conjecture"; "graphs with no
order" is the informal gloss on Theorem 3.4's hypothesis — and the Zhao rows still
carry "Section 2.6, Graph Counting Lemma", "Section 2.6, Graph Removal Lemma" and
"Section 2.8, Strong Regularity Lemma", which are in-section subheadings rather than
the printed titles (§2.6 "Graph Counting and Removal Lemmas", §2.8 "Induced Graph
Removal and Strong Regularity").

**This is a routing gap, not a Beta failure.** It changes no mathematics and does not
block either pair. It matters only because a wrong recorded section title is what
makes a stale locator look plausible to the next auditor — which is the failure this
run was watching for on the Riehl side.

---

## 2. Batch 6

### 2.1 F6.5 — **fixed**

`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` now has
`deps: [def-galois-connection, def-partial-order]`. Title states posets, the strategy
derives $FGFa\le Fa\le FGFa$ and invokes antisymmetry, and gives the preorder case as
$FGF\cong F$. The proof contract carries `F1 ← def-partial-order`, quoting the exact
clause — *"**(A)** *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$;"* — mapped
to the step that uses it. The obligation and the claim now agree.

### 2.2 F6.6 — **partially fixed**

The rename to `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid`
landed cleanly in the three semantic artifacts: **0 occurrences** of the old id in
`pages.json`, `coverage.json` or `proof-contracts.json`, contract key and boundary
rationale included, no `aliases` entry added. The narrowed item's title, strategy and
three deps are all about the right adjoint alone; nothing promises a triple.

**What remains: `research/frontier-13-batch-6.notes.md` still carries the item's
component-provenance row under the dead id.** Line 326 of the B-page provenance table
reads

```
| `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` | literature-derived | ai-altered | RI Ex. 4.1.15 |
```

and the new id appears exactly once in the whole notes file — in the F6.6 record
itself, which states that "Every reference in `pages.json`, `coverage.json`, and
`proof-contracts.json` was updated". That is true, and it names three artifacts. The
notes file is the fourth, and it is the one CLAUDE.md §"Component provenance" makes
the required home of the per-item provenance rationale.

The concrete consequence is at step 5: the author of
`ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid` goes to the notes
table to set its `provenance` frontmatter and finds no row for the item it is
authoring, plus an orphan row for an item that does not exist.

**Exact remaining work:** re-key that one table row to the new id. Nothing else.

### 2.3 New finding — 8 citations are populated but hollow

The dispatch asked for a spot-check that populated citations are real exact source
clauses. Batch 6's 119 citations are all verbatim substrings of their sources — no
fabrication. But **8 of them quote the sentence that *introduces* the clause and stop
before the clause itself**, so they carry no proposition at all:

| item | fact | source | recorded quote |
|---|---|---|---|
| `thm-adjunctions-compose` | F1 | `thm-interchange-law-for-natural-transformations` | "Whenever the expressions are defined," |
| `thm-mates-under-a-pair-of-adjunctions` | F1 | `thm-interchange-law-for-natural-transformations` | "Whenever the expressions are defined," |
| `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit` | F3 | `def-split-monomorphism-and-split-epimorphism` | "Let $f:A\to B$ be a morphism." |
| `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` | F1 | `def-abelianisation-of-a-group` | "Let $G$ be a group. Its **abelianisation** is the quotient" |
| `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` | F2 | `def-commutator-and-commutator-subgroup` | "Let $G$ be a group. For $g,h\in G$, their **commutator** is" |
| `ex-the-galois-connection-between-ideals-and-varieties` | F3 | `def-left-right-and-two-sided-ideal` | "Left, right and two-sided ideals." |
| `ex-the-galois-connection-between-ideals-and-varieties` | F4 | `lem-ideal-criterion-and-intersections` | "Ideal criteria and intersections of ideals." |
| `ex-adjunction-between-preorders-computed` | F2 | `def-nat-order` | "For $m, n \in \mathbb{N}$, define the **order** by" |

Every one passes a verbatim check, a non-empty check and a length check while
supplying none of the content the contract exists to pin down: the interchange law,
the split mono/epi condition, the abelianisation quotient, the commutator, the ideal
criterion, the order on $\mathbb N$. CLAUDE.md's citation-fidelity rule asks for the
proposition itself, "otherwise the smallest faithful shortening — no changed domain,
quantifier, hypothesis, direction or conclusion"; a truncation that drops the
conclusion entirely is not a faithful shortening.

**Batch 4 has zero instances of this.** Two of the eight sit on
`ex-the-galois-connection-between-ideals-and-varieties`, whose contract the F6.2
repair rewrote, and the total happens to equal the 8 contracts F6.4 reported as empty
— suggestive, though I could not confirm the identity of that earlier set from disk.

**Exact remaining work:** extend those 8 quotes through the clause actually cited.

### 2.4 The same shape elsewhere in the batch — one advisory, no second defect

I scanned every batch-6 item whose title or strategy names a hypothesis that a
dependency must supply (poset / antisymmetry / local smallness) and checked the
dependency set against it. Two results:

- `prop-an-adjunction-induces-adjunctions-on-functor-categories` says "legitimate
  functor categories" and carries `prop-size-of-functor-categories`. Supported.
- `prop-in-a-poset-adjunction-the-triangle-identities-are-automatic` says "poset" and
  has no `def-partial-order`. **This is not the F6.5 defect and needs no repair.** Its
  argument — a preorder is thin, so parallel morphisms are equal, so both triangle
  identities hold — uses no antisymmetry at all. It *states* poset without *using* it,
  so no obligation arises and the statement is true a fortiori. My step-3 read stands.

  Advisory only: now that its immediate neighbour has been retitled to posets *and*
  given a real poset dependency, two adjacent items say "poset" for opposite reasons.
  If a step-5 author wants the honest generality it is a free retitle to "preorder";
  otherwise leave it. Not blocking, and not a judge risk in either direction.

### 2.5 Not fixed — and it was never routed

My step-3 §5 action 9 asked for the four paraphrased Riehl section names to be
replaced with the printed titles. `research/frontier-13-beta-6-fix.task.md` carries
F6.1–F6.4 and does not mention it. On disk all four paraphrases survive —
"Adjunctions and universal properties", "The formal theory of adjunctions",
"Two-variable and contravariant adjunctions", "Adjoint functors and limits" — and
none of the four printed titles ("The unit and counit as universal arrows", "The
calculus of adjunctions", "Contravariant and multivariable adjoint functors",
"Adjunctions, limits, and colimits") appears anywhere in `coverage.json`.

Same routing gap as §1.4, same non-blocking status, same reason it is worth fixing:
this is the batch whose locators were under suspicion at step 0, and the recorded
section names are the evidence a later auditor would check first.

---

## 3. For the orchestrator — outside my batches' scope

**A cross-cutting finding of mine was never routed to anyone.** My step-3 §4 asked
for paragraph 1 of every A-page summary to be rewritten to lead with declared-dependency
background, per CLAUDE.md §Page-summary contract. It appears in neither fix task, and
on disk all three A-page summaries still open with the page's own development:

- 395: "A homogeneous set… `hom(G)` records the larger… A hereditary class has the
  Erdős–Hajnal property when…" — `def-homogeneous-set-and-homogeneous-number` and
  `def-erdos-hajnal-property-and-constant` are items *on* page 395.
- 399: "An epsilon-regular pair has nearly unchanged edge density…" —
  `def-epsilon-regular-pair` is an item on page 399.
- 365.001: "An adjunction is specified here by functors, a unit, a counit, and the two
  triangle identities…" — the page's own definition.

Paragraph 2 is correct in all three and all word counts are inside 150. The step-3
report treated this as a "both batches" item rather than a per-batch finding, which is
plausibly why it fell out of the per-batch fix tasks. If the same happened in groups A
and B, it is a run-wide gap worth one routing pass before step 4 — summaries are
spliced at step 4 and authored at step 5, so it is still cheap.

**A gate blind spot behind §2.3.** `proof-contract.mjs --strict` requires "a stated
input map covering every numbered step exactly once". At step 3 every contract in both
my batches declares a single derivation (`planned-main-argument` in batch 4, 46/46;
`planned-main-proof` in batch 6, 46/49) with `step: "1.1"` and **every** fact attached
to it, and `routine_steps` empty in all 95. The input-map requirement is therefore
satisfied vacuously — with one step, any set of facts covers it exactly once — and the
citation count check is satisfied by any non-empty string. That combination is what let
eight lead-in fragments pass as citations. This is the "gates that pass vacuously"
pattern; the contract only starts constraining anything once step 5 writes real
numbered steps. Worth knowing before step 6 treats a green contract gate as evidence.

**Two step-3 findings routed to Betas as coverage-precision items were dropped**
(§1.4, §2.5). If the orchestrator's fix-task construction consistently drops the
non-blocking tail of an Alpha report, groups A and B likely have the same residue.

**Standing from step 3, unchanged and still not mine to act on:** the D1 edge
`conjugacy-and-simplicity-in-the-symmetric-groups` was removed from page 365.001's
`requires` by the orchestrator, which I re-verified is correct — zero batch-6 items
cite anything homed there, and `def-abelianisation-of-a-group` is on
`free-groups-and-presentations`, already in closure. Separately,
`research/plan-category-theory-track.md` line 1137 still names
`ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` in its item list. That is a
design doc outside my write boundary and outside the step-4 splice path, but it is now
a dangling id, and it is the design/spec drift shape that costs an `undeclared-prereq`
at step 4 when it goes the other way.

**Carry into step 5.** The batch-4 A-page summary drafts write mathematics in
backticked code spans (`` `hom(G) ≥ (1/2) log_2 n` ``, `` `2 epsilon^-5` ``,
`` `G(n,1/2)` ``); batch 6's are clean prose. The splice should render these as TeX,
not as code. Cosmetic, but it is the kind of thing that survives to a published page.

## What I re-checked by name

| finding | verdict |
|---|---|
| F4.1 — no positive EH instance on page 395 | fixed; three items added, all three proofs verified sound; **new dependency gap introduced** (§1.2) |
| F4.2 — two B-page summaries | fixed |
| F4.3 — tower *upper* wording; Zhao 2.1.22–2.1.25 | fixed, both parts |
| F4.4 — empty proof-contract citations | fixed; 46/46 populated, all published-source quotes verbatim, 0 hollow |
| step-3 §5 action 5 — Chernikov/Zhao section names | **not fixed, never routed** |
| F6.1 / F6.2 / F6.3 (via the second pass) | fixed and re-confirmed on disk |
| F6.4 — 8 empty contracts | populated, but **8 citations are hollow** (§2.3) |
| F6.5 — poset hypothesis unsupported | fixed |
| F6.6 — id misdescribes the item | **partially fixed**; notes provenance table still on the dead id (§2.2) |
| step-3 §5 action 9 — Riehl section names | **not fixed, never routed** |
| step-3 §4 — A-page summary paragraph 1 | **not fixed, never routed** (§3) |

Step-3 conclusions on the Riehl locators, MA-1 item 40, the RAPL split and the choice
wording were not re-verified, per the dispatch. No blockers.
