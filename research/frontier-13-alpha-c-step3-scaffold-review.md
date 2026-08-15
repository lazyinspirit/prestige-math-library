# frontier-13 — Alpha group C, step-3 scaffold review

**Group:** C (batches 4 and 6) · **Alpha:** Claude Opus 5, `claude` runner, `xhigh`,
1,000,000-token window · **Date:** 2026-08-15

Batches read: `research/frontier-13-batch-4.*` and `research/frontier-13-batch-6.*`,
plus `research/frontier-13-beta-4.task.md`, `research/frontier-13-beta-6.task.md`,
`research/frontier-13-step0-batching.md`, `research/frontier-13-step3-decisions.md`,
`ERDOS.md`. **No file belonging to batches 1, 2, 3, 5 or 7 was opened.**
Nothing was authored and no batch file was edited.

## Verdicts

| pair | A items / B items | verdict |
|---|---|---|
| `erdos-hajnal-property-and-homogeneous-sets` (395) / `-examples` (396) | 11 / 8 | **insufficient** |
| `regular-pairs-and-induced-counting` (399) / `-examples` (400) | 25 / 8 | **sufficient** |
| `adjunctions-units-and-counits` (365.001) / `-examples` (365.002) | 51 / 9 | **sufficient** |

One pair is `insufficient` and it is the smallest one: the opening Erdős–Hajnal page
defines the property, refutes it for the class of all graphs, and states the
conjecture — but never exhibits a single forbidden graph `H` for which the property
is a *theorem*. The three results that fix this are named in §1 with the exact route
and the source clause that carries them. Everything else below is a correction, not
an addition.

---

## 0. What I verified mechanically before reading for depth

I did not re-run the whole-run gates. I did re-derive, independently of the
orchestrator's step-3 record, the dependency-closure facts my two batches depend on,
by mapping every `deps` id in both `pages.json` files to its home page in
`library/*/*.md`, its item status in `items/`, and the page-level `requires` closure
from `research/plan-spec.json`.

**318 dependency edges across all six pages: 0 unresolved, 0 out-of-closure,
0 unpublished, 0 B-leaf.** The only intra-run edges are B-page items citing their own
A page, which is what a B companion is for.

Specifically confirmed, rather than assumed:

- **Batch 4's two pairs do not cite each other.** No item on 395/396 depends on
  anything homed on 399/400, or conversely.
- **Batch 6 does not cite batch 5.** `tensor-products-of-modules` appears in no
  dependency of any batch-6 item.
- **Neither published B-leaf named in MA-1 §Traps is cited.** Both
  `ex-free-monoid-universal-property-as-a-representation` and
  `ex-function-sets-as-exponential-representing-objects` are homed on
  `universal-properties-and-the-yoneda-lemma-examples`; batch 6 depends on neither.
  Items 35 and 41 were resolved by local construction — `lem-words-satisfy-the-free-monoid-universal-property`
  for the monoid, and `def-the-set-of-functions-from-one-set-to-another` +
  `lem-the-set-of-functions-between-two-sets-is-a-set` (both A-page homes) for currying.

### Decision D1 — two of three added edges are load-bearing, one is not

| added edge | used by | verdict |
|---|---|---|
| `free-modules-and-exact-sequences` | `thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor` via `thm-universal-property-of-free-modules` (MA-1 item 34) | **used** |
| `tychonoff-embedding-and-stone-cech` | `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` via `def-stone-cech-compactification`, `thm-stone-cech-evaluation-closure-universal-property`, `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice` (MA-1 item 38) | **used** |
| `conjugacy-and-simplicity-in-the-symmetric-groups` | **nothing** | **unused** |

The third edge was added at step 0 to license the abelianisation adjunction (MA-1
item 36). It does not do that: `def-abelianisation-of-a-group` is homed on
`free-groups-and-presentations`, which step 0 had already listed as transitively
reachable, and `def-commutator-and-commutator-subgroup` /
`thm-quotient-group-universal-property` are on `normal-subgroups-and-quotient-groups`
and `group-homomorphisms-and-the-isomorphism-theorems`. `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups`
cites exactly those three and nothing on the symmetric-groups page.

This is not a mathematical defect and I have applied nothing — `plan-spec.json` is not
mine to edit. **Recorded for the orchestrator / lead Alpha:** the edge is now a
redundant prerequisite whose recorded rationale is wrong. Dropping it is safe;
leaving it costs only a `redundant-prereq` warning. Either way the step-0 record's
rationale for that one edge should be corrected so a later auditor is not misled.

---

## 1. `erdos-hajnal-property-and-homogeneous-sets` (395) — **INSUFFICIENT**

### What is right

The harvest is faithful over the range it states. I opened all three sources.

- **Chudnovsky, *The Erdős-Hajnal Conjecture—A Survey***
  (`web.math.princeton.edu/~mchudnov/EHsurvey.pdf`, 13 pp.). Stated locator: §1,
  pp. 1–2, through Conjecture 1.2, stopping before §2. **Exact.** The nine recorded
  headings are precisely the nine numbered/named items on those two pages —
  conventions, the Erdős random-graph theorem, Conjecture 1.1, Theorem 1.1, the EH
  property definition, complement invariance, Theorem 1.2 (SPGT), Theorem 1.3
  (perfect ⇒ √n), Conjecture 1.2. Nothing on those pages is missing.
- **Chernikov, MATH 223M notes** (20 pp.). Stated locator: §3.1, pp. 18–19, through
  Theorem 3.4. Page range **exact**; contents **exact** (conventions, the ½ log n
  baseline and its optimality, Conjecture 3.1, Remark 3.2 finite-family form,
  Definition 3.3 order property, Theorem 3.4 stable graphs). *One precision defect:*
  the recorded section name **"Graphs with no order"** is not the source's title —
  §3.1 is titled **"Erdős-Hajnal conjecture"**, and "graphs with no order" is the
  informal description of Theorem 3.4's hypothesis.
- **arXiv:2606.06258v2.** Verified live: *"Erdős-Hajnal beyond the five-vertex path"*,
  v2, HTTP 200. Real source, and it is the paper `ERDOS.md` schedules the block for.

The two flagship proofs check out arithmetically:

- `thm-ramsey-logarithmic-homogeneous-set-bound`: with $k=\lfloor\tfrac12\log_2 n\rfloor+1$
  we get $2k-2\le\log_2 n$, so $\binom{2k-2}{k-1}\le 2^{2k-2}\le n$, and
  `thm-finite-graph-ramsey-binomial-bound` ($\binom{s+t-2}{s-1}\to(s,t)^2$, read from
  disk) applies. $n=1$ closes with $k=1$. **Sound.**
- `thm-random-graph-logarithmic-homogeneous-set-upper-bound`: $\mathbb E X\le 2n^k2^{-k(k-1)/2}<1$
  needs $k-1>2/k+2\log_2 n$; with $k=\lceil 3\log_2 n\rceil$ and $n\ge16$ that is
  $\log_2 n>1+2/k$, true since $\log_2 n\ge4$ and $k\ge12$. And $k-1<3\log_2 n$ holds
  for every $n$. **Sound**, and the choice of the honest $3\log_2 n$ over the sharper
  $2\log_2 n$ the target paper quotes is recorded in the notes.

The declines to later block pairs are real plan seams and I confirm them: Theorem 1.1
and the log-log improvement → `classical-and-loglog-erdos-hajnal-bounds` (`ERDOS.md`
cycle 12); SPGT / Theorem 1.3 / Conjecture 1.2 → `cographs-perfect-patterns-and-pure-pairs`
(cycle 15); the substitution theorem → `modules-substitution-and-prime-graphs`
(cycle 11); the order property and stable graphs → model-theoretic stability, a
subject area the library has not reached.

### Why it is insufficient

**The page contains no proof that any forbidden graph has the Erdős–Hajnal property.**
Not one. It proves the property fails for the class of all graphs, proves three
invariances, states the conjecture — and stops. A reader finishes it without knowing
that the conjecture has *any* confirmed instance, which makes the invariance
propositions monotonicity statements about an empty set of known cases.

`ex-complete-and-empty-hereditary-classes-have-constant-one` on the B page does not
supply this and must not be mistaken for it: "the class of complete graphs has EH
constant 1" is the statement that a complete graph is a clique. The real statement is
"the class of $K_t$-**free** graphs has the EH property", which is Ramsey's theorem
and is not on the page.

This is a source-range failure of exactly the kind step 6b.0 criterion 4 names.
Chudnovsky's §2 opens, on the very next page after Beta's stated cut:

> "It is clear that graphs on at most two vertices have the property. Complete graphs
> and their complements have the property; this follows from the famous Ramsey
> theorem. If $H$ is the two-edge path, then every $H$-free graph $G$ is the disjoint
> union of cliques, and thus has either a clique or a stable set of size
> $\sqrt{|V(G)|}$, so the two-edge path has the property. By taking complements, this
> shows that all three-vertex graphs have the property."
> — Chudnovsky, *EH Survey*, §2, pp. 2–3

Every ingredient is already published and already in this page's declared closure.
Nothing here requires a new prerequisite page, a `requires` amendment, or the
2026-08-11 last-resort fallback.

### The exact results to add

**(A) `thm-complete-graph-free-classes-are-erdos-hajnal`** — *For every $t\ge1$ the
hereditary class of $K_t$-free graphs has the Erdős–Hajnal property.*

Route, entirely in closure: `thm-finite-graph-ramsey-binomial-bound` gives
$\binom{s+t-2}{s-1}\to(s,t)^2$. Reading the red colour as adjacency, a $K_t$-free
graph on $n\ge\binom{s+t-2}{t-1}$ vertices has $\alpha(G)\ge s$. Bound
$\binom{s+t-2}{t-1}\le(s+t-2)^{t-1}\le(2s)^{t-1}$ and take
$s=\lfloor\tfrac12 n^{1/(t-1)}\rfloor$ for $t\ge2$; this yields $\hom(G)\ge n^{\varepsilon}$
for any $\varepsilon\le 1/t$ once $n$ is large, and small $n$ closes by
$\hom(G)\ge2$ for $n\ge2$ exactly as `ex-bounded-order-graph-classes-are-erdos-hajnal`
already does. $t=1$ is degenerate (only the null graph is $K_1$-free) and $t=2$ is
the empty-graph class. Existing deps suffice:
`thm-finite-graph-ramsey-binomial-bound`, `def-binomial-coefficient`,
`def-real-power`, `thm-natural-logarithm-laws`, `def-erdos-hajnal-property-and-constant`,
`def-homogeneous-set-and-homogeneous-number`.
Source: Chudnovsky §2 p. 2, sentence 2.

**(B) `thm-p3-free-graphs-have-square-root-homogeneous-sets`** — *A graph with no
induced $P_3$ is a disjoint union of cliques, hence satisfies $\hom(G)\ge\sqrt{|V(G)|}$;
the class of $P_3$-free graphs has Erdős–Hajnal constant $\tfrac12$.*

Route, entirely in closure: if $u,v$ lie in one component and are nonadjacent, a
shortest $u$–$v$ path has length $\ge2$ and its first three vertices induce $P_3$, so
every component is a clique. With components $C_1,\dots,C_r$:
$\omega(G)\ge\max_i|C_i|$, $\alpha(G)\ge r$, and $n=\sum_i|C_i|\le r\max_i|C_i|\le\alpha(G)\omega(G)\le\hom(G)^2$.
All of `def-connected-graph-and-connected-component`,
`cor-connected-components-partition-the-vertex-set`,
`def-graph-walk-trail-path-and-cycle`,
`lem-every-graph-walk-contains-a-path-between-its-endpoints`,
`def-graph-distance-and-girth` and `def-standard-complete-bipartite-path-and-cycle-graphs`
are published on `graphs-walks-and-connectivity`, which is already in this page's
closure and already supplies 14 of its dependencies.
Source: Chudnovsky §2 pp. 2–3, sentence 3.

**(C) `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`** —
immediate from (A), (B), the already-scaffolded
`prop-erdos-hajnal-property-is-complement-invariant` and the published
`cor-h-free-complement-dictionary`. Enumerate the four graphs on $\le3$ vertices up to
isomorphism and complementation: $K_1$, $K_2$/$\overline{K_2}$, $K_3$/$\overline{K_3}$,
$P_3$/$\overline{P_3}$.
Source: Chudnovsky §2 p. 3, sentence 4.

This takes the A page from 11 items to 14 — far below the 60 ceiling, no split, no
`requires` change, no new forward reference, and it does not touch the batch-4
same-run non-citation constraint because every new dependency is published.

The coverage harvest must be extended to cover Chudnovsky §2 through the
three-vertex paragraph, with (A), (B), (C) as `included` rows and the substitution
theorem (Thm 2.2), Seinsche (Thm 2.1) and the four prime five-vertex graphs as
explicit `deferred` rows naming their block pages.

### Secondary, not blocking

`|V(G)|\le\chi(G)\alpha(G)` holds for every graph (colour classes are stable sets) and
`graph-colouring` is in this page's closure. Adding it as a lemma would make
Chudnovsky's Theorem 1.3 a one-line corollary on the later perfect-graph page and
would immediately give "any hereditary class of bounded chromatic number is
Erdős–Hajnal". I am not requiring it; the deferral of the perfect-graph material to
`cographs-perfect-patterns-and-pure-pairs` is legitimate as recorded.

### B page 396 — real, with one contract violation

Eight items, including three genuine boundary markers (`cex-the-logarithmic-ramsey-bound-is-not-an-erdos-hajnal-bound`,
`fs-every-hereditary-class-is-erdos-hajnal`, and $\hom(C_5)=2$ for the
self-complementary case). Not a token page. If (A)–(C) land, the B page should gain a
worked instance of one of them.

**Contract violation:** `research/frontier-13-batch-4.notes.md` §"Two-paragraph page
summaries for step 4" proposes two-paragraph summaries for **both B pages**
(`erdos-hajnal-property-and-homogeneous-sets-examples` and
`regular-pairs-and-induced-counting-examples`). CLAUDE.md §Page-summary contract:
"A B page has no authored summary body at all." I checked published B pages —
`library/combinatorics/ramsey-theory-examples.md` and
`library/category-theory/limits-and-colimits-examples.md` both have **zero bytes** of
body after the frontmatter. **The two proposed B-page summaries must not be
authored.** Batch 6 got this right: its notes propose only an A-page summary and
describe the companion inside it.

---

## 2. `regular-pairs-and-induced-counting` (399) — **SUFFICIENT**

25 A items, and this is the strongest scaffold in my group. The standard development
of a regularity-method chapter is present end to end: density, $\varepsilon$-regularity,
typical degrees, slicing, robustness, complement duality, regular and equitable
partitions, energy, monotonicity under refinement, the pair boost, the partition
increment, Szemerédi with an explicit recurrence, refinement of a prescribed
partition, self-regular subsets, partition into self-regular sets, triangle counting,
graph counting, induced counting, edit distance, removal, strong regularity, energy →
density approximation, representative subsets, and induced removal.

### The induced-removal chain closes

This is the run's clearest instance of the "build the machinery" rule, and I traced it
rather than trusting the summary:

```
thm-szemeredi-regularity-lemma-with-tower-bound
  → cor-regularity-refining-a-given-partition   (equitable prescribed refinement)
    → thm-strong-regularity-lemma-by-energy-stabilisation
      + lem-energy-controls-density-approximation
      + thm-large-self-regular-subset
      + lem-slicing-lemma-for-regular-pairs
      + thm-first-moment-method
        → thm-self-regular-representative-subsets
          + thm-induced-counting-lemma-for-regular-pairs
              ( ← thm-counting-lemma-for-a-fixed-graph
                + lem-complementation-preserves-disjoint-regular-pairs )
            → thm-induced-graph-removal-lemma
```

That is Conlon–Fox §3.1's route (Lemma 3.1 → Lemma 3.2 → Lemma 3.3 → Theorem 1.3),
with one genuine improvement on the sources: **the $i=j$ self-pairs.** An induced
copy's part map may repeat an index, so the representative subsets must be regular
with *themselves*, which is what `thm-large-self-regular-subset` (Zhao Thm 2.1.26) is
scaffolded for. Beta identified this as "the highest-risk proof" and mandated
self-regular extraction before the probabilistic choice. Zhao's Remark 2.8.10 —
"It is significant that **all** (rather than nearly all) pairs $(W_i,W_j)$ are
regular" — is the source clause confirming the point matters. Correctly handled.

Second improvement over the sources: Zhao Theorem 2.1.19 (refinement of an arbitrary
initial partition) is *not* equitable, and strong regularity needs an equitable one.
`cor-regularity-refining-a-given-partition` builds the equitable form with a stated
cost ("at most half the $\varepsilon^5$ gain after enlarging the recurrence"). That is
a missing prerequisite built rather than routed around.

### The tower-bound charge — title and Statement are honest, with one wording fix

I read both A-page titles and Statements against their proofs specifically for a
claim the proof does not give.

- `thm-szemeredi-regularity-lemma-with-tower-bound`: the title claims "an explicit
  tower-type **upper** bound". The strategy proves exactly that, via
  $m_{r+1}=\lceil\varepsilon^{-5}m_r2^{m_r+2}\rceil$ over at most
  $\lceil2\varepsilon^{-5}\rceil$ rounds. **No overclaim.** The strategy even guards
  the degenerate case ("Handle $n<m_0$ only in corollaries that allow singleton
  partitions; do not claim the impossible lower bound $k\ge m_0$ there").
- The tower **lower** bound is declined, and I verified the decline is honest against
  the source. Zhao Theorem 2.1.17 reads: *"There exists a constant $c>0$ such that for
  all sufficiently small $\varepsilon>0$, there exists a graph with no
  $\varepsilon$-regular partition into fewer than $\mathrm{tower}(\lceil\varepsilon^{-c}\rceil)$
  parts.* **We do not include the proof here.** *See Moshkovitz and Shapira (2016)."*
  The coverage's `out-of-scope` reason — "the source states but does not prove this
  quantitative lower-bound construction" — is **literally true**. Conlon–Fox likewise
  only sketches and refers out. Decline confirmed.

**Required wording fix (step 5, before the text freezes).**
`rem-tower-and-wowzer-bounds-in-regularity` is titled *"Ordinary regularity gives
tower bounds; the strong-regularity proof used here gives wowzer bounds."* Read
straight, "gives tower bounds" is ambiguous exactly where the famous Gowers/Conlon–Fox
**necessity** results live — and the page has just declined those. The remark must say
**upper** bound in both clauses, and if it mentions necessity at all it must attribute
it to Zhao Thm 2.1.17 / Conlon–Fox as a stated-but-unproved external result, never as
something this page establishes. This is the one place on the pair where a reader
could take away more than the proofs give.

### Harvest faithfulness — one locator gap

I opened both sources and enumerated their numbered environments.

**Zhao, *Graph Theory and Additive Combinatorics*, Ch. 2.** Sections confirmed: 2.1
Szemerédi's Graph Regularity Lemma, 2.2 Triangle Counting Lemma, 2.3 Triangle Removal
Lemma, 2.4 Graph Theoretic Proof of Roth, 2.5, 2.6 Graph Counting and Removal Lemmas,
2.7 Exercises on Applying Graph Regularity, 2.8 Induced Graph Removal and Strong
Regularity, 2.9–2.11 property testing and hypergraphs.

- §2.2: environments are exactly 2.2.1–2.2.4. Harvest covers all four. ✓
- §2.6: environments are 2.6.1–2.6.7; stated range ends at 2.6.5. Harvest covers
  2.6.1–2.6.5 including all three parts of Remark 2.6.3. ✓
- §2.8: environments are 2.8.1–2.8.13; stated range stops before 2.8.11 (Infinite
  graph removal). Harvest covers **2.8.1–2.8.10, all ten**. ✓
- §2.1: environments are 2.1.1–2.1.28. Harvest covers 2.1.1–2.1.21 and 2.1.26–2.1.28.
  **2.1.22, 2.1.23, 2.1.24 and 2.1.25 have no disposition row** because the stated
  locator skips them.

**That gap is a real defect, and one of the four is demonstrably used.** Zhao Exercise
2.1.24 *is* the half-graph example, and `research/frontier-13-batch-4.notes.md` cites
"Zhao Remark/Exercise 2.1.24" as the provenance of
`cex-half-graph-pairs-have-macroscopic-irregularity`, while `coverage.json` attributes
it to Remark 2.1.18. Both readings are defensible in substance — Remark 2.1.18's text
names the half graph and points forward to Exercise 2.1.24 — but the artifact and the
notes disagree, and the stated range excludes what the notes say was read.

Fix (coverage repair, not mathematics): extend the Zhao locator to **§2.1 in full**
and add four rows —
- 2.1.22 (complete the details of the proof sketch) → `inline` on the regularity lemma;
- **2.1.23 (making each part $\varepsilon$-regular to nearly all other parts)** → a real
  strengthening; `deferred` or `out-of-scope` with a reason about that specific
  statement;
- 2.1.24 (the half graph) → `included`, `cex-half-graph-pairs-have-macroscopic-irregularity`,
  which also reconciles the notes;
- **2.1.25 (existence of a regular pair of subsets, $\delta=2^{-\varepsilon^{-C}}$,
  density-increment proof)** → the sibling of Theorem 2.1.26; no item on the page needs
  it, so a reasoned `deferred` is correct — but it must be written down.

**Conlon–Fox, *Graph removal lemmas*.** Section titles recorded exactly: §2.1 "The
standard proof", §3.1 "The usual proof". Ranges confirmed: §2.1 runs to Lemma 2.4
(Lemmas 2.5–2.9 belong to §2.2 "An improved bound"); §3.1 contains Lemmas 3.1–3.3 and
the Theorem 1.3 deduction (Lemmas 3.4–3.9 belong to §3.2). Harvest matches on both.
✓ No gap.

*Minor precision:* the recorded Zhao section names "Section 2.6, Graph Counting Lemma",
"Section 2.6, Graph Removal Lemma" and "Section 2.8, Strong Regularity Lemma" are
in-section subheadings, not the printed section titles (§2.6 "Graph Counting and
Removal Lemmas", §2.8 "Induced Graph Removal and Strong Regularity"). Harmless but
worth normalising with the Chernikov and Riehl cases in §4 below.

### B page 400

Eight items, and they are the right eight: two zero-error models at equality
(complete tripartite triangles, three pure pairs giving induced $P_3$), the half-graph
irregularity witness, an explicit numerical slicing computation, the energy of the
trivial and discrete partitions, and two counterexamples that isolate hypotheses —
density-without-regularity fails to force a triangle, and deletion-only induced
removal is false. `cex-edge-deletion-alone-cannot-prove-induced-removal` in particular
is the boundary marker that justifies the whole edit-distance definition. Real B page.

---

## 3. `adjunctions-units-and-counits` (365.001) — **SUFFICIENT**

51 A items, 9 B items. On the highest-fan-out pair in the plan I read the scaffold
against Riehl's actual text, not against its own summary.

### The Riehl locator charge — resolved, and the step-0 alarm was a false positive

I downloaded the author-hosted PDF (`emilyriehl.github.io/files/context.pdf`) and read
it with `pypdf`. Its `/CreationDate` is **D:20260728**, matching the "2026-07-28
second-edition build" Beta records. Chapter 4 of that build:

| § | title | printed pp. |
|---|---|---|
| 4.1 | Adjoint functors | 132 |
| 4.2 | The unit and counit as universal arrows | 138 |
| 4.3 | The calculus of adjunctions | 143 |
| 4.4 | Contravariant and multivariable adjoint functors | 149 |
| **4.5** | **Locally cartesian closed categories** | **156** |
| 4.6 | Adjunctions, limits, and colimits | 165 |
| 4.7 | **Existence of adjoint functors** | 173 |

Beta's stated locator — "§§4.1–4.4 in full, printed pp. 132–156, stopping before §4.5
on p. 156; §4.6 in full, printed pp. 165–173; plus Lemma 4.7.1 on printed p. 174" —
is **exact on every boundary**.

**The 13-references-to-§4.6 alarm is a false positive.** In the second edition §4.6
*is* "Adjunctions, limits, and colimits", and every one of those references is to
limit/colimit material: Prop 4.6.1 ($\Delta\dashv\lim$), Thm 4.6.2 (RAPL), Def 4.6.7
(left/right exact), Lem 4.6.11 (full-faithfulness), Ex 4.6.13 (Stone–Čech), and the
Exercises. The adjoint functor theorems are in §4.7 — I confirmed **Theorems 4.7.3,
4.7.10 and 4.7.17 all sit inside §4.7** — and Beta cites §4.7 only for Lemma 4.7.1,
the comma-category existence criterion, which is exactly what
`thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object`
uses. **No first-edition locator was carried into this harvest.**

I also checked whether the harvest *skips* named results inside its stated range. It
does not. Every numbered environment I could extract from §§4.1–4.4 and §4.6 has a
disposition row. The numbers that appear absent from the coverage — 4.1.2, 4.1.4,
4.2.1, 4.2.8, 4.2.9, 4.3.2, 4.3.3, 4.4.5, 4.4.12, 4.4.13, 4.4.16, 4.4.17 — are all
**displayed-equation numbers**, not environments; Riehl numbers equations in the same
sequence. Verified individually in the PDF text. Also spot-verified as real and
correctly described: Notation 4.1.5 (Kan's turnstile), Ex 4.1.6 (discrete/indiscrete),
Ex 4.1.7 (floor/ceiling), Ex 4.1.8 (image adjoint triple), Ex 4.1.11 (Frobenius
reciprocity), Ex 4.1.12 (fields), Ex 4.1.14 (simplex indexing), Ex 4.1.15
(Groupoid ↪ Cat), Rem 4.2.6, Thm 4.2.7, Cor 4.2.10, Lem 4.2.11, Prop 4.3.1, 4.3.5,
Ex 4.3.iv, Def 4.4.1, Ex 4.4.2, Ex 4.4.3, Cor 4.6.3, Cor 4.6.6, Def 4.6.12, Ex 4.6.13,
Ex 4.6.vi.

§4.5 is genuinely excluded and the coverage says so in the open — Exercise 4.6.vii is
disposed `out-of-scope` with the reason "belongs to the locally-cartesian-closed
material in **omitted Section 4.5**", and Example 4.1.9 (quantifiers as adjoints to
substitution) is routed to the categorical-logic track. That is the honest form of an
omission and the material genuinely belongs to a later topic. No finding.

### The three MA-1 requirements — all three survived

1. **`rem-why-this-library-takes-unit-counit-as-the-definition`** is present, and the
   deviation is real rather than decorative: Riehl's Definition 4.1.1 is the hom-set
   form, and the library reverses it because that form presupposes local smallness.
   The point is carried through structurally — `thm-the-adjunction-hom-set-bijection-under-local-smallness`
   and `thm-equivalent-encodings-of-an-adjunction` carry the size hypothesis only on
   the hom-set clause, and `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis`
   refutes the misconception with a one-object category whose endomorphism class is
   $(\mathrm{Ord},+,0)$ — associative, unital, and a proper class by Burali-Forti.
   That construction is correct.
2. **The RAPL split is intact and correctly oriented.** `thm-right-adjoints-preserve-limits`
   is the unit/counit proof, explicitly for "an arbitrary diagram for which the
   displayed limit exists" with no size hypothesis;
   `thm-representable-second-proof-of-rapl-under-local-smallness` is a *separate* item
   carrying local smallness and small diagrams; `rem-rapl-carries-no-size-hypothesis`
   reconciles them. Merged, the theorem would have been gratuitously weakened.
3. **The choice care survived in all three places, and in a fourth.**
   `thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object`
   — "the explicit choice is part of the hypothesis";
   `thm-objectwise-universal-arrows-assemble-into-a-left-adjoint` — "for a **supplied**
   family";
   `thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor` — "the object
   assignment is data, so the proof performs no proper-class selection";
   plus `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` — "do not infer
   the required choices from objectwise existence" — and
   `rem-the-choice-behind-assembling-an-adjoint` citing the published
   `rem-choice-behind-limit-and-colimit-functors`. The word "given" is doing its job
   and $\forall d\,\exists G_d$ is never silently promoted to a class function.

### MA-1 item 40 and the floor/ceiling item — both dropped visibly

- Item 40: `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars` is
  built on the Hom side with a locally constructed
  `lem-coextension-of-scalars-carries-a-module-structure` and the strategy states "no
  tensor-product or extension-of-scalars claim is made". The tensor half is a
  `deferred` coverage row naming `tensor-products-of-modules` and frontier-13 batch 5.
  Riehl Corollaries 4.6.4 and 4.6.10 and Examples 4.4.8/4.4.15 are deferred on the same
  ground. Neither cited nor silently dropped.
- **MA-1's `thm-floor-and-ceiling-are-adjoint-to-the-inclusion-of-integers` is
  correctly dropped, and this is a check the dispatch asked for.** I confirmed
  independently: **`def-floor-and-ceiling` does not exist anywhere in `library/`.**
  Beta records the drop twice — as a `deferred` row on Riehl Example 4.1.7 and as a
  `canonical` deferral — and notes that the only similar published id,
  `def-the-ceiling-of-a-quotient-of-naturals`, is expressly not the real floor/ceiling
  interface. The substitute `ex-adjunction-between-preorders-computed` ($n\mapsto mn$
  left adjoint to $r\mapsto\lfloor r/m\rfloor$ on $\mathbb N$, via
  `thm-division-algorithm-in-z`) preserves the pedagogical point without inventing
  numerical machinery. Correct disposition.

### Breadth against Riehl's own catalogue

Riehl Example 4.1.10 is a fourteen-part free⊣forgetful catalogue disposed as a single
`inline` row. I read it. The scaffold retains its (ii) free monoid, (v) free module,
(ix) free group and (xii) restriction of scalars (Hom side), and adds from elsewhere
in the chapter: image/preimage/universal-image triple, discrete/indiscrete triple,
abelianisation, Stone–Čech, currying, $\Delta\dashv\lim$, plus six worked B-page
examples (free-group and free-vector-space units and counits, ideals/varieties, free
category on a quiver, subgroupoid triple, Frobenius reciprocity). MA-1's instruction
that the A page stay example-heavy is honoured — the worked adjunctions are numbered
A-page items, not exiled. The catalogue entries not retained — free pointed set, free
ring on an abelian group, free abelian group, free ring, free commutative ring, group
ring ⊣ units, Grothendieck group completion, monoid group completion — each need a
category the closure does not publish. Legitimate.

**`ex-frobenius-reciprocity-for-group-representations` is mathematically right and I
checked it in detail**, because Riehl Example 4.1.11 states restriction has *both*
adjoints and the scaffold builds only one. The model
$\{f:G\to V \mid f(gh)=h^{-1}f(g)\}$ **with support meeting finitely many right
cosets** is induction (the left adjoint), not coinduction; dropping the finiteness
condition would give the right adjoint instead. Well-definedness holds: for $g'=gh$,
$g'\cdot u(f(g'))=gh\cdot u(h^{-1}f(g))=g\cdot u(f(g))$ by $H$-equivariance of $u$, so
$\widehat u(f)=\sum_{gH}g\cdot u(f(g))$ is independent of coset representatives. The
resulting bijection is $\mathrm{Hom}_G(\mathrm{Ind}\,V,W)\cong\mathrm{Hom}_H(V,\mathrm{Res}\,W)$
— which is what "Frobenius reciprocity" names — and it uses neither group algebras nor
tensor products. Beta's checkpoint records catching this at the resumption pass;
the correction is right.

### Three corrections required before step 4

**C1 — `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` overstates its
source's hypothesis, and as titled it is false.**

Riehl Corollary 4.2.10, verbatim from the PDF:

> "If $A$ and $B$ are **posets** and $F:A\to B$ and $G:B\to A$ form a Galois
> connection, with $F\dashv G$, then $F$ and $G$ satisfy the following fixed point
> formulae $FGF=F$ and $GFG=G$."

The scaffold's `def-galois-connection` is titled "Galois connection between
**preorders**" and the corollary depends on it alone. In a preorder that is not a
poset there is no antisymmetry, so $FGFc\le Fc\le FGFc$ gives only $FGF\cong F$, never
equality — the equality is exactly what antisymmetry buys. Beta's own strategy already
knows this ("Antisymmetry gives the two equalities for posets; state the corresponding
equivalences for preorders"), but the **title and Statement as scaffolded assert the
equality unconditionally**. That is the "title or Statement asserting more than the
proof gives" class, and it is a step-3 fix costing one retitle.

Required: state the poset hypothesis in the title and Statement, matching Riehl 4.2.10
exactly, and give the preorder version as the natural-isomorphism clause. (The
neighbouring `prop-in-a-poset-adjunction-the-triangle-identities-are-automatic` errs
the safe way — its argument works in any preorder while its title says poset — and
needs no change.)

**C2 — `ex-the-galois-connection-between-ideals-and-varieties` cites the wrong
definition, and the correct one currently has no consumer.**

$V\dashv I$ is *antitone*: the scaffold proves $X\subseteq V(S)\iff S\subseteq I(X)$,
which is the mutually-right-adjoint relation of Riehl **Definition 4.4.1**, not the
monotone Galois connection of `def-galois-connection`. Riehl says so herself in
Exercise 4.4.i, which I read: *"Mutual right adjoints between preorders form what is
sometimes called an **antitone** Galois connection."* The example's own title says
"contravariant Galois connection" while its `deps` list only `def-galois-connection`.

Required: add `def-mutually-left-and-mutually-right-adjoint-contravariant-functors` to
the example's `deps` (or state the $P\rightsquigarrow P^{\mathrm{op}}$ reduction
explicitly in the text). This also fixes a structural loose end — that definition is
currently the only A-page definition with **no consumer anywhere in the pair**, and
this example is its natural one.

*(Not a finding: dropping Riehl's "algebraically closed" hypothesis is correct. The
Galois connection holds over any field; algebraic closure is only needed for the
Nullstellensatz, and the strategy explicitly derives $VIV=V$, $IVI=I$ without it.)*

**C3 — `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` claims a triple its
dependencies support only half of.**

The right adjoint is fine: $\mathbf{Gpd}\hookrightarrow\mathbf{Cat}$ has
$C\mapsto\mathrm{Core}(C)$ as a right adjoint, and
`prop-isomorphisms-form-the-maximal-subgroupoid` (published, in closure) is exactly the
supporting fact. The **left** adjoint is not. The strategy proposes constructing
$C[C^{-1}]$ "from finite zigzags modulo identity, composition, and inverse relations"
and proving its universal property — that needs a free category on a quiver plus a
quotient by a morphism congruence, and the item's `deps` are only
`def-isomorphism-groupoid-and-connected-category`,
`prop-isomorphisms-form-the-maximal-subgroupoid` and
`thm-the-adjunction-hom-set-bijection-under-local-smallness`. Neither ingredient is
there, the B-page sibling `ex-the-free-category-on-a-quiver` cannot be cited (B-leaf
rule), and I checked `plan-spec.json`: **there is no category-of-fractions /
Gabriel–Zisman localisation page anywhere in the plan** — every "localisation" id in
the spec is ring-theoretic.

Required, and my recommendation is (a):
(a) narrow the item to the right adjoint alone — retitle to the inclusion-⊣-maximal-subgroupoid
adjunction, which is clean, fully supported, and still exhibits Riehl Example 4.1.15's
main point — and add a `deferred` coverage row for the groupoid-of-fractions left
adjoint whose reason names the missing congruence-quotient machinery; **or**
(b) keep the triple and add explicit `deps` plus an honest construction plan for the
free groupoid, which is a page's worth of work for one B example.

### Two precision items

- **Four recorded Riehl section names are paraphrases, not the source's titles**:
  "Adjunctions and universal properties" for §4.2 (*The unit and counit as universal
  arrows*), "The formal theory of adjunctions" for §4.3 (*The calculus of
  adjunctions*), "Two-variable and contravariant adjunctions" for §4.4 (*Contravariant
  and multivariable adjoint functors*), "Adjoint functors and limits" for §4.6
  (*Adjunctions, limits, and colimits*). The rule is to enumerate "that source's own
  section and named-result headings"; the Mac Lane Ch. IV section names in the same
  file are all exact, so this is a Riehl-specific slip. Replace with the printed
  titles. It changes no mathematics but a wrong section title is what makes a stale
  locator look plausible to the next auditor, which is precisely the failure this run
  was watching for.
- **Size.** 51 items, 9 of headroom. Beta pre-recorded the cut after
  `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` (definition and
  encodings + calculus + preservation | power-set triple + worked adjunctions). C1–C3
  add **zero** items — C1 and C2 are edits, C3 removes scope. So the headroom is
  untouched and the recorded cut stays in reserve for step 5. I am not spending it.

### B page 365.002

Nine items and genuinely load-bearing: two units-and-counits computations, the
antitone ideal/variety connection, the free category on a quiver, the subgroupoid
example (subject to C3), Frobenius reciprocity, a computed preorder adjunction, and two
counterexamples that separate the definition's clauses — a correctly typed family that
is not natural, and a natural family that fails both triangle identities. Real B page.

---

## 4. Cross-cutting, both batches

**A-page summaries lead with the wrong material.** All three proposed A-page summaries
open with the page's own development. The contract (CLAUDE.md §Page-summary contract)
is that **paragraph 1 gives the mathematical background and names definitions and
results from declared dependencies that the development uses**, and paragraph 2 names
what is developed here and its logical progression. Paragraph 2 is right in all three;
paragraph 1 needs rewriting in all three to name the declared dependencies actually
used — for 395 the published clique/stable-set, hereditary-class and Ramsey interfaces;
for 399 the published graph, complement, induced-copy and finite-probability
interfaces; for 365.001 the published equivalence, whiskering, comma-category,
universal-arrow, Yoneda and limit interfaces. Word counts are fine (batch 6's is 149
across two paragraphs, verified).

**Section-title precision** is the same defect in three places: Riehl §§4.2/4.3/4.4/4.6
(batch 6), Chernikov §3.1 (batch 4), and Zhao's §2.6/§2.8 subheadings (batch 4). One
normalising pass over both `coverage.json` files fixes all of them.

**No item in either batch applies the canonical embedding to a natural number.** I
checked the titles and strategies; `notation-iota-applied` has nothing to flag.

**No forward references** are declared or implied in either batch.

---

## 5. Actions for the orchestrator

Route to the owning Betas, then I re-check before step 4 splices:

**Batch 4, blocking (pair 395/396 is `insufficient` until done):**
1. Add `thm-complete-graph-free-classes-are-erdos-hajnal`, `thm-p3-free-graphs-have-square-root-homogeneous-sets`
   and `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`, with
   the routes and dependencies in §1. Extend the Chudnovsky locator to cover §2 through
   the three-vertex paragraph and add the corresponding `included` rows plus explicit
   `deferred` rows for Thm 2.1 (Seinsche), Thm 2.2 (substitution) and the five-vertex
   prime graphs.

**Batch 4, non-blocking:**
2. Delete the two proposed **B-page summaries** from `notes.md`. B pages carry no
   authored body.
3. Extend the Zhao locator to §2.1 in full and add disposition rows for Exercises
   2.1.22–2.1.25; attribute the half graph consistently between `notes.md` and
   `coverage.json`.
4. Reword `rem-tower-and-wowzer-bounds-in-regularity` to say **upper** bound in both
   clauses; any mention of necessity must be attributed to Zhao Thm 2.1.17 /
   Conlon–Fox as an external unproved-here result.
5. Correct the Chernikov §3.1 title to "Erdős-Hajnal conjecture" and the Zhao §2.6/§2.8
   names to the printed section titles.

**Batch 6, non-blocking (pair is `sufficient` as scaffolded):**
6. **C1** — scope `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` to
   posets in title and Statement, per Riehl Cor. 4.2.10; give the preorder case as an
   isomorphism.
7. **C2** — add `def-mutually-left-and-mutually-right-adjoint-contravariant-functors`
   to `ex-the-galois-connection-between-ideals-and-varieties`.
8. **C3** — narrow `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` to the
   inclusion-⊣-maximal-subgroupoid adjunction and defer the groupoid-of-fractions left
   adjoint with a reason naming the missing machinery; or supply the machinery with
   explicit deps.
9. Replace the four paraphrased Riehl section names with the printed titles.

**Both batches:** rewrite paragraph 1 of each A-page summary to lead with declared-dependency
background (§4).

**For the lead Alpha / orchestrator, not for a Beta:** the D1 edge
`conjugacy-and-simplicity-in-the-symmetric-groups` is used by no item in batch 6, and
the step-0 rationale attributing it to the abelianisation adjunction is incorrect —
`def-abelianisation-of-a-group` is homed on `free-groups-and-presentations`, which was
already reachable. `plan-spec.json` is outside my write boundary; recorded, not acted on.

## Sources I opened at their stated locators

| source | how | outcome |
|---|---|---|
| Riehl, *Category Theory in Context*, 2nd ed. | PDF, `emilyriehl.github.io/files/context.pdf`, build D:20260728, read with `pypdf` | Ch. 4 structure, all page boundaries and every cited environment confirmed; §4.7 confirmed as the AFT section |
| Leinster, *Basic Category Theory*, arXiv:1612.09375v2 | PDF, 191 pp., v2 dated 26 Aug 2025 | edition and CC BY-NC-SA licence confirmed as recorded |
| Zhao, *Graph Theory and Additive Combinatorics*, Ch. 2 | PDF, `yufeizhao.com/gtacbook/2.pdf` | §§2.1, 2.2, 2.6, 2.8 environments enumerated; Thm 2.1.17's "we do not include the proof" confirmed verbatim; 2.1.22–2.1.25 gap found |
| Conlon–Fox, *Graph removal lemmas*, arXiv:1211.3487 | PDF | §2.1 "The standard proof" and §3.1 "The usual proof" and their result ranges confirmed |
| Chudnovsky, *EH Survey* | PDF, 13 pp. | §1 pp. 1–2 harvest confirmed complete; §2 pp. 2–3 identified as the missing range |
| Chernikov, MATH 223M notes | PDF, 20 pp. | §3.1 pp. 18–19 contents confirmed; section title wrong |
| arXiv:2606.06258v2 | abs page, HTTP 200 | real: *"Erdős-Hajnal beyond the five-vertex path"* |

No blockers. No permission prompt was raised at any point.
