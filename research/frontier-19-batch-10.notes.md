# frontier-19 · Beta-10 · batch notes — `polynomial-rodl-and-viral-equivalence` (steps 1–2)

Run `frontier-19`, batch `10`, one A/B pair, category `combinatorics`.
Author: Beta-10.

Artifacts owned by this batch:
`research/frontier-19-batch-10.pages.json`,
`research/frontier-19-batch-10.coverage.json`,
`research/frontier-19-batch-10.proof-contracts.json`, and this file.
Nothing outside those batch artifacts was written.

---

## Continuity checkpoint

- **Substage.** Steps 1 and 2 complete; all four batch artifacts are written.
- **Owned artifact paths.** The four files listed above.
- **Completed checks.** Read `CLAUDE.md`, `SCHEMA.md`, `README.md`, `QUALITY-CONTROLS.md`, the exemplar `items/lem-cauchy-bounded.md`, the latest completed-run artifacts (`research/frontier-18-batch-1.pages.json`, `research/frontier-18-batch-1.notes.md`), the combinatorics design block in `research/plan-combinatorics-and-categories.md`, the step-0 drift note, the published prerequisite pages `library/combinatorics/erdos-hajnal-property-and-homogeneous-sets.md` and `library/combinatorics/sparse-restricted-subgraphs-and-rodl-nikiforov.md`, and every published dependency cited in §11 below. Local JSON parse check on `pages.json`, `coverage.json`, and `proof-contracts.json`: pass. `content-policy.mjs --manifest-only`: 0 errors, 0 warnings. `coverage-checklist.mjs --require-destination`: 0 errors, 1 `coverage-low-yield` warning. `prosecheck.mjs --warnings`: 0 errors, 7 count warnings, all in this notes file. `source-fetch-check.mjs --stamp`: blocked by local DNS/network failure (`EAI_AGAIN`) on all three live URLs.
- **Open constraints.** The main proof does not depend on the published `cor-a-restricted-set-contains-a-large-stable-set-or-clique`, because its `provenance.statement` is `ai-generated` and it would be load-bearing here. The direct `polynomial Rödl => Erdős–Hajnal` corollary instead uses source-backed earlier items only. The `EH => viral` proof handles the vacuous `K_0` and `K_1` cases explicitly. The only unresolved blocker is the missing `fetch_verified` stamps, which this shell cannot produce because network resolution is unavailable.
- **Exact next action.** None inside this batch before Alpha review. If the environment later permits outbound fetches, rerun `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-10.coverage.json --stamp`.

---

## 1. Per-page item list

### A page `polynomial-rodl-and-viral-equivalence` — order 405 — 11 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-polynomial-rodl-property-for-a-finite-family` | definition | The polynomial Rödl property for a finite forbidden family |
| 2 | `def-viral-property-for-a-finite-family` | definition | The viral property for a finite forbidden family |
| 3 | `def-t-k-homogeneous-property` | definition | The $(t,k)$-homogeneous property |
| 4 | `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets` | lemma | Many good $2t$-vertex subsets force many homogeneous $k$-sets |
| 5 | `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` | lemma | Small total induced-copy expectation forces many homogeneous $k$-sets |
| 6 | `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` | lemma | Without a large $\epsilon$-sparse induced subgraph, the number of $k$-vertex stable sets is bounded |
| 7 | `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` | theorem | Every finite family with the Erdős–Hajnal property is viral |
| 8 | `cor-viral-implies-polynomial-rodl-for-a-finite-family` | corollary | The viral property implies the polynomial Rödl property |
| 9 | `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family` | corollary | The polynomial Rödl property implies the Erdős–Hajnal property |
| 10 | `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence` | theorem | For a finite family, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent |
| 11 | `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` | corollary | For a single graph, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent |

### B page `polynomial-rodl-and-viral-equivalence-examples` — order 406 — 5 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-the-singleton-family-p-three-is-viral` | example | The singleton family $\{P_3\}$ is viral |
| 2 | `ex-a-family-containing-k-one-is-vacuously-viral` | example | A family containing $K_1$ is viral for vacuous reasons |
| 3 | `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` | counterexample | The polynomial Rödl witness need not be the whole graph |
| 4 | `cex-the-empty-family-is-not-erdos-hajnal` | counterexample | The empty forbidden family is not Erdős–Hajnal |
| 5 | `fs-a-viral-family-must-only-forbid-graphs-with-at-least-two-vertices` | false statement | Every viral family forbids only graphs with at least two vertices |

Both counts are recountable from the tables above. The A page stays well below the hard 60-item ceiling, so no split is proposed.

Landmarks for step 5: A-page items 1, 2, 6, 7 and 10 should be `landmark: true`. All B-page items and the remaining A-page items should stay `landmark: false`.

---

## 2. Per-pair richness report

Both required passes were run on the single A/B pair, and both found work.

**Proof-decomposition pass.** The equivalence proof in the sources is not left as a single theorem.

- The counting part is split into `def-t-k-homogeneous-property`, `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets`, `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets`, and `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets`.
- The implication cycle is then split into one hard theorem (`thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`) and two short corollaries for the easy directions (`cor-viral-implies-polynomial-rodl-for-a-finite-family`, `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family`), followed by the summary equivalence theorem and the singleton corollary.
- No extra decomposition lemma was minted only for exposition. The only technical items kept as standalone results are named source lemmas or faithful finite-family adaptations of them.

**Corollary pass.** Run, and it added three meaningful items.

- `cor-viral-implies-polynomial-rodl-for-a-finite-family` isolates the definitional easy direction so later pages can cite it without reopening the main theorem.
- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family` records the reverse easy direction in the library’s maximum-degree normalization; this is the bridge later pages will actually cite.
- `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` states the theorem in the graph-by-graph form used in the Bucić–Fox–Pham paper and in later combinatorics prose.

**B-page pass.** Run, and it added the boundary and application items beyond the bare theorem statement.

- `ex-the-singleton-family-p-three-is-viral` is the first concrete application a reader expects, because page 395 already proves the Erdős–Hajnal property for graphs on at most three vertices.
- `ex-a-family-containing-k-one-is-vacuously-viral` is the boundary case the main theorem proof must not sweep under the rug.
- `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` prevents a common misreading of the definition.
- `cex-the-empty-family-is-not-erdos-hajnal` records that “finite family” does not mean “automatic”.
- `fs-a-viral-family-must-only-forbid-graphs-with-at-least-two-vertices` packages the $K_1$ boundary as an explicit false statement rather than leaving it to prose.

---

## 3. Design against spec

The design row in `research/plan-combinatorics-and-categories.md` and the live `research/plan-spec.json` agree: page `polynomial-rodl-and-viral-equivalence` stays at order `405` with prerequisites `erdos-hajnal-property-and-homogeneous-sets` and `sparse-restricted-subgraphs-and-rodl-nikiforov`. The step-0 drift review likewise returned `no-drift`.

The item list follows the design’s explicit instruction in §16.3 that the Bucić–Fox–Pham page carry finite-family exponent machinery, hereditary amplification, and induced-count lemmas before the equivalence theorem. No prose-scaffold amendment is required for design/spec alignment.

No forward references are planned. Every load-bearing dependency is either earlier on this page or already published on a strictly earlier page.

---

## 4. Scaffold amendments

No applyable prose edit is proposed for `research/plan-combinatorics-and-categories.md`.

Authoring-time note with no scaffold anchor:

- The step-5 author should make the vacuous `K_0` and `K_1` cases explicit in `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` and should not silently assume every forbidden graph has at least two vertices. This is a real boundary case, not a cosmetic remark.

---

## 5. Component provenance and source rationale

The table gives the planned `provenance.statement` and `provenance.proof`, the exact source URL that step 5 should place in `sources.references`, and the rationale for each component.

### A page

| id | kind | statement | proof | reference for step 5 | rationale |
|---|---|---|---|---|---|
| `def-polynomial-rodl-property-for-a-finite-family` | definition | literature-derived | not-applicable | `https://arxiv.org/html/2606.06258v2` | Huang–Ju–Zhou §1.1 states the finite-family version directly, in the same maximum-degree restricted-set language the library already uses on page 401. |
| `def-viral-property-for-a-finite-family` | definition | literature-derived | not-applicable | `https://arxiv.org/html/2606.06258v2` | Huang–Ju–Zhou §1.1 states virality for a finite family and uses the same labelled induced-copy count convention as the published `def-induced-copy-number`. |
| `def-t-k-homogeneous-property` | definition | literature-derived | not-applicable | `https://arxiv.org/html/2403.08303v1` | Bucić–Fox–Pham §2 introduces the `(t,k)`-homogeneous property by name at Lemma 13. The local definition is a faithful restatement. |
| `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets` | lemma | literature-derived | ai-altered | `https://arxiv.org/html/2403.08303v1` | This is Bucić–Fox–Pham Lemma 13 / Nguyen Lemma 13. The statement is unchanged; only the proof presentation is adapted to the library’s finite-set counting style. |
| `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` | lemma | ai-altered | ai-generated | `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` | This is the finite-family adaptation of Nguyen’s Lemma 14: same deletion-of-one-vertex-per-copy idea, but applied to the total expected forbidden-copy count across a finite family. The statement is literature-based but materially adapted. |
| `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` | lemma | literature-derived | ai-altered | `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` | This is Nguyen Lemma 1.5 / Bucić–Fox–Pham Lemma 12. The proof follows the same induction but is rewritten in the page-401 maximum-degree language. |
| `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` | theorem | literature-derived | ai-altered | `https://arxiv.org/html/2606.06258v2` | The finite-family statement is Huang–Ju–Zhou Theorem 1.3. The local proof is an AI-written recombination of the named Bucić–Fox–Pham / Nguyen lemmas in finite-family form, so the proof component is `ai-altered`. |
| `cor-viral-implies-polynomial-rodl-for-a-finite-family` | corollary | ai-altered | ai-generated | `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` | The implication is explicit in Nguyen’s discussion of the three properties but not named as a standalone theorem. The statement is a direct reformulation in the library’s finite-family language. |
| `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family` | corollary | ai-altered | ai-generated | `https://arxiv.org/html/2403.08303v1` | Bucić–Fox–Pham §1 proves the single-graph implication and explains the `ε = n^{-c}` trick. The finite-family statement is the same argument with `H` replaced by a family. |
| `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence` | theorem | literature-derived | ai-generated | `https://arxiv.org/html/2606.06258v2` | Huang–Ju–Zhou Theorem 1.3 is the exact finite-family equivalence statement. The proof here is just the local implication cycle assembled from earlier page items. |
| `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` | corollary | literature-derived | ai-generated | `https://arxiv.org/html/2403.08303v1` | Bucić–Fox–Pham Theorem 4 is the single-graph form. The local proof is the singleton specialization of the finite-family theorem. |

### B page

| id | kind | statement | proof | reference for step 5 | rationale |
|---|---|---|---|---|---|
| `ex-the-singleton-family-p-three-is-viral` | example | ai-generated | ai-generated | `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` | A direct application example, built from the page theorem plus the already-published three-vertex EH classification. Checkable witness, never a `deps` target. |
| `ex-a-family-containing-k-one-is-vacuously-viral` | example | ai-generated | ai-generated | `https://arxiv.org/html/2606.06258v2` | Checkable boundary example: the witness is the formula `ind_{K_1}(G)=|V(G)|`. |
| `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` | counterexample | ai-generated | ai-generated | `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` | Concrete witness built inside the already-EH family of `P_3`-free graphs. The construction and both failed inequalities are elementary and checkable. |
| `cex-the-empty-family-is-not-erdos-hajnal` | counterexample | ai-generated | ai-generated | `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf` | Checkable witness using the published class-of-all-graphs counterexample together with the empty-family convention in `def-h-free-and-family-free-graph`. |
| `fs-a-viral-family-must-only-forbid-graphs-with-at-least-two-vertices` | false statement | ai-generated | ai-generated | `https://arxiv.org/html/2606.06258v2` | The refuting witness is the preceding `K_1` example, so the statement is concrete and checkable. |

**AI-generated-statement obligations.** All five B-page items are non-load-bearing generated examples/counterexamples/false statements with concrete witnesses. None is a `deps` target. No A-page theorem/lemma/proposition/corollary statement is planned as `ai-generated`.

---

## 6. Proof-obligation map for step 5

This section is the prose companion of `proof-contracts.json`.

### A page technical items

- `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets`
  The proof obligations are: define the incidence relation between homogeneous $k$-sets and good $2t$-sets; lower-bound incidences by counting good $2t$-sets; upper-bound incidences by the number of $2t$-sets containing a fixed $k$-set; divide.
- `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets`
  The proof obligations are: use Markov to get at least half of the $2t$-sets with at most $t$ total forbidden copies; delete one vertex from each copy; verify the remaining $t$-set is family-free; apply the previous lemma.
- `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets`
  The proof obligations are: pick a maximum-degree vertex; split stable $k$-sets by whether they contain it; recurse on the non-neighbour graph and the deleted graph; verify the numerical condition `(1-\epsilon)^\ell n \le u` is preserved.

### Main theorem

- `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`
  The proof obligations are:
  1. Separate the empty-family, `K_0`, and `K_1` cases.
  2. Choose an integer `m` with `mc >= 1`, then choose `k` and set `t = k^m`.
  3. Show every `\mathcal H`-free graph on `t` vertices has a homogeneous `k`-set.
  4. Bound the expected total number of forbidden induced copies in a random `2t`-set by linearity of expectation and the hypothesis `ind_H(G) < (\epsilon^d n)^{|H|}`.
  5. Obtain many homogeneous `k`-sets from the previous lemma.
  6. If at least half are cliques, transfer to stable sets in the complement.
  7. Apply `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` with `u = \epsilon^d n` to contradict the count of homogeneous `k`-sets.
  8. Check the degenerate `\epsilon^d n < 1` case separately with a singleton vertex.

### Easy directions

- `cor-viral-implies-polynomial-rodl-for-a-finite-family`
  Only one subclaim: `\mathcal H`-free implies `\operatorname{ind}_H(G)=0` for every `H in \mathcal H`.
- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family`
  The proof obligations are: handle small `n` by the universal homogeneous pair of size `2`; for large `n`, set `\epsilon = n^{-1/(d+1)}`; show the restricted set has order at least `1/\epsilon`; in the sparse branch use `\chi(G[X]) \le \epsilon|X|+1` and `|X| \le \chi(G[X])\alpha(G[X])`; in the dense branch run the same argument in `\overline G`.

No proof on the page depends on a forward reference, on a planned item in another batch, or on a published item with `provenance.statement: ai-generated`.

---

## 7. Findings for the step-3 Alpha

### Finding 1 — record the wrong arXiv title in `def-erdos-hajnal-property-and-constant` as a published-dependency repair note

**What is wrong.** The second `sources.references` entry currently reads:

> `- title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"`
> `  url: "https://arxiv.org/html/2606.06258v2"`

The URL resolves on August 25, 2026 to *Erdős-Hajnal beyond the five-vertex path*, not to a paper titled *Erdos-Hajnal properties in graphs and hypergraphs*.

**Proposed exact replacement.**

> `- title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, §1"`
> `  url: "https://arxiv.org/html/2606.06258v2"`

**If declined.** A published load-bearing definition keeps an objectively false source title, and later batches will keep copying that bad metadata into new provenance notes.

### Finding 2 — record the same citation-title repair in `prop-erdos-hajnal-property-passes-to-hereditary-subclasses`

**What is wrong.** The sole `sources.references` entry currently reads:

> `- title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"`
> `  url: "https://arxiv.org/html/2606.06258v2"`

The URL resolves to *Erdős-Hajnal beyond the five-vertex path*.

**Proposed exact replacement.**

> `- title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, §1.1"`
> `  url: "https://arxiv.org/html/2606.06258v2"`

**If declined.** A second published dependency used on this page keeps a false bibliographic title and propagates the same error into future authoring notes.

### Finding 3 — record the same citation-title repair in `lem-erdos-hajnal-constants-are-downward-closed`

**What is wrong.** The sole `sources.references` entry currently reads:

> `- title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"`
> `  url: "https://arxiv.org/html/2606.06258v2"`

Again, the URL resolves to *Erdős-Hajnal beyond the five-vertex path*.

**Proposed exact replacement.**

> `- title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, §1.1"`
> `  url: "https://arxiv.org/html/2606.06258v2"`

**If declined.** The downward-closure lemma remains attached to a false citation label in a place later batches are likely to trust blindly.

No step-3 scaffold finding was found on page order, prerequisites, richness, split pressure, or forward references. The item list itself needs no Alpha design correction.

---

## 8. Forward references

None kept.

Every proposed dependency is either earlier on the same A page or already published on a strictly earlier page.

---

## 9. New ids proposed

Repo-wide check run:

```text
rg -n 'polynomial-rodl|viral|t-k-homogeneous|good-two-t|few-induced-copies-from-a-finite-family|no-large-epsilon-sparse-subgraph|finite-family-erdos-hajnal-polynomial-rodl-and-viral|single-graph-erdos-hajnal-polynomial-rodl-and-viral' items research/plan-spec.json
```

It returned only the page ids already in `research/plan-spec.json`; no conflicting item ids or existing item files matched the proposed new ids.

New ids:

- `def-polynomial-rodl-property-for-a-finite-family`
- `def-viral-property-for-a-finite-family`
- `def-t-k-homogeneous-property`
- `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets`
- `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets`
- `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets`
- `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`
- `cor-viral-implies-polynomial-rodl-for-a-finite-family`
- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family`
- `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence`
- `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence`
- `ex-the-singleton-family-p-three-is-viral`
- `ex-a-family-containing-k-one-is-vacuously-viral`
- `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted`
- `cex-the-empty-family-is-not-erdos-hajnal`
- `fs-a-viral-family-must-only-forbid-graphs-with-at-least-two-vertices`

---

## 10. Cross-batch dependencies

**Needed from other batches of `frontier-19`: none.** Every load-bearing external dependency for this pair is already published on disk; nothing rests on an unspliced or draft page from another current batch.

**Needed by other batches of `frontier-19`: none.** No other batch in this run depends on page 405 at step 1–2.

**Owed to later pages.** The next planned combinatorics page `blockades-combs-and-pattern-graphs` at order 407 is the first obvious consumer. It will likely cite `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence` or `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` for orientation when it reduces later graph classes to polynomial Rödl / virality statements.

---

## 11. Web research ledger and dependency-closure statement

### Source ledger

- `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`
  Supports: the page-401 restatements of Rödl and Nikiforov, the named `(t,k)`-homogeneous property, the container-counting lemma, the sampling-to-homogeneous-sets lemma, and the high-level proof strategy for `EH => viral`.
  Convention notes: these notes state the polynomial Rödl and viral properties first for a single graph and use `\epsilon`-sparse / `\epsilon`-dense language. The page adopts the library’s published maximum-degree `\epsilon`-restricted language and extends the statements to finite families.

- `https://arxiv.org/html/2403.08303v1`
  Supports: the single-graph equivalence theorem, the quantitative `EH => viral` proof spine (Theorem 5 and Theorem 16), the `(t,k)`-homogeneous property, and the stable-set counting lemma.
  Convention notes: this paper formulates the polynomial Rödl property in the edge-density language of `\epsilon`-homogeneous sets, not in the maximum-degree restricted-set language of page 401. The page deliberately works in the already-published restricted-set normalization and only transports the proof strategy, not the exact wording.

- `https://arxiv.org/html/2606.06258v2`
  Supports: the exact finite-family statements of the polynomial Rödl property, virality, and Theorem 1.3.
  Convention notes: this source matches the library’s labelled induced-copy convention and its maximum-degree definition of `\epsilon`-restricted sets. It is the source used for the finite-family wording rather than the single-graph wording of Bucić–Fox–Pham.

### Dependency-closure statement

- Every proposed published dependency was opened from disk and checked for `status: published`.
- No load-bearing dependency is a draft page, a planned-later page, or an item with `provenance.statement: ai-generated`.
- Every load-bearing dependency is either internal to this pair or already available in published content.
- No exception to that rule was kept.

Published dependencies opened from disk while designing this pair:

- Published items from `erdos-hajnal-property-and-homogeneous-sets`: `def-homogeneous-set-and-homogeneous-number`, `def-erdos-hajnal-property-and-constant`, `lem-erdos-hajnal-constants-are-downward-closed`, `thm-single-pattern-and-finite-family-erdos-hajnal-formulations`, `def-h-free-and-family-free-graph`, `cor-the-class-of-all-graphs-is-not-erdos-hajnal`, `thm-random-graph-logarithmic-homogeneous-set-upper-bound`, `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`, `thm-p3-free-graphs-have-square-root-homogeneous-sets`.
- Published items from `sparse-restricted-subgraphs-and-rodl-nikiforov`: `def-c-sparse-and-c-restricted-vertex-set`, `lem-sparsity-depends-only-on-the-induced-subgraph`, `lem-a-sparse-set-has-small-self-density`, `lem-restrictedness-is-complement-invariant`, `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`, `cor-rodl-for-a-nonempty-family-of-forbidden-graphs`, `cor-rodl-in-the-edge-density-form`, `cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable`.
- Earlier combinatorics and probability items used in the local proof route: `def-induced-embedding-and-induced-copy`, `def-induced-copy-number`, `def-hereditary-graph-class`, `thm-double-counting`, `thm-linearity-of-expectation`, `thm-markov-inequality`, `lem-greedy-colouring-bound`, `thm-clique-independence-chromatic-bounds`, `lem-complement-swaps-cliques-and-stable-sets`, `thm-of-archimedean`, `thm-real-power-laws`, `def-standard-complete-bipartite-path-and-cycle-graphs`.

---

## 12. Confidence

**High** on the mathematical route and dependency closure.

- The page stays inside the published prerequisite closure from orders 395 and 401.
- The hard direction is source-backed twice over: Nguyen’s notes and Bucić–Fox–Pham give the same container-plus-sampling proof spine, and Huang–Ju–Zhou states the finite-family theorem in exactly the form the page needs.
- The reverse direction `polynomial Rödl => Erdős–Hajnal` was designed to avoid the one published AI-generated-statement corollary that would otherwise have become a load-bearing dependency.

**Residual gap.**

- `source-fetch-check.mjs --stamp` could not run to completion in this sandbox because DNS/network resolution failed with `EAI_AGAIN` on all three live sources. The URLs themselves were opened and read with the web tool, but the local stamp file remains unstamped until a network-enabled shell reruns the command.

---

## 13. Published-dependency repair notes

The three citation-title mismatches in §7 are the only published-dependency issues I found while opening the dependencies for this page. I found no unambiguous false mathematical statement in the published prerequisites I read.

## Step-3 fix pass

- `B10-1` — pushed back. Alpha-d's alert is correct on the disk evidence: [items/def-erdos-hajnal-property-and-constant.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-erdos-hajnal-property-and-constant.md:20), [items/prop-erdos-hajnal-property-passes-to-hereditary-subclasses.md](/home/lazyinspirit/Projects/prestige-math-library/items/prop-erdos-hajnal-property-passes-to-hereditary-subclasses.md:18), and [items/lem-erdos-hajnal-constants-are-downward-closed.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-erdos-hajnal-constants-are-downward-closed.md:18) are all `status: published` and still cite `https://arxiv.org/html/2606.06258v2` under the false title `Erdos-Hajnal properties in graphs and hypergraphs, introduction`. I did not edit those items in this pass because the fix brief restricts writes to this batch's scaffold artifacts and expressly excludes `items/*.md`. The live batch scaffold itself already uses the correct Huang-Ju-Zhou metadata in [research/frontier-19-batch-10.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-10.coverage.json:152), so no batch-10 scaffold file change was needed.

## Continuity checkpoint

- **Substage.** Step 5 authoring, immediately before first item/page-file creation.
- **Owned artifact paths.** `research/frontier-19-batch-10.pages.json`, `research/frontier-19-batch-10.coverage.json`, `research/frontier-19-batch-10.proof-contracts.json`, this notes file, the owned `items/*.md` files for page 405/406, and the owned page files under `library/combinatorics/`.
- **Completed gates and reads.** Re-read `CLAUDE.md`, `SCHEMA.md`, `README.md`, `WORKFLOW.md`, `QUALITY-CONTROLS.md`, the exemplar proof, the page-format exemplar, the batch scaffold files, Alpha-d's step-3 review, the design block at `plan-combinatorics-and-categories.md` §16.2–§16.5, the prerequisite combinatorics pages, and the published dependency items actually cited in the planned proofs. The active mathematical route is disk-checked against those published items.
- **Frozen-text state.** Nothing in `items/` or `library/` has been written for batch 10 yet. The scaffold-level notes and coverage still reflect the planned false-statement row, but `tools/content-policy.mjs` on Tuesday, August 25, 2026 forbids a newly `ai-generated` false statement, so the final authored scope will drop `fs-a-viral-family-must-only-forbid-graphs-with-at-least-two-vertices` and reconcile `pages.json`, `coverage.json`, `proof-contracts.json`, and the B-page examples list to that actual authored scope.
- **Open mathematical constraints.** The `EH => viral` proof will use the local counting route: choose a downward-closed exponent `1/m`, derive a `(t,k)`-homogeneous property for the `\mathcal F`-free class, convert small expected forbidden-copy count on random `2t`-sets into many homogeneous `k`-sets, and contradict the stable-set counting lemma on both `G` and `\overline G` if no large restricted set exists. The `polynomial Rödl => EH` corollary will avoid the published `ai-generated` restricted-set corollary and instead use the greedy-colouring and clique/independence bounds directly.
- **Exact next action.** Add the A-page definitions and proof-bearing items, then the B-page examples/counterexamples and page files, then sync the proof contract and coverage to the authored text before running `reflow`, `precheck`, `content-policy`, `validate-plan`, `depcheck`, `fwdcheck`, `extcheck`, `citecheck`, `proof-contract`, `coverage-checklist`, and `prosecheck`.

## Step-5 authoring

### Items authored

- `def-polynomial-rodl-property-for-a-finite-family` — `precheck: n/a`
- `def-viral-property-for-a-finite-family` — `precheck: n/a`
- `def-t-k-homogeneous-property` — `precheck: n/a`
- `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets` — `precheck: pass`
- `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` — `precheck: pass`
- `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` — `precheck: pass`
- `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` — `precheck: pass`
- `cor-viral-implies-polynomial-rodl-for-a-finite-family` — `precheck: pass`
- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family` — `precheck: pass`
- `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence` — `precheck: pass`
- `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` — `precheck: pass`
- `ex-the-singleton-family-p-three-is-viral` — `precheck: pass`
- `ex-a-family-containing-k-one-is-vacuously-viral` — `precheck: pass`
- `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` — `precheck: pass`
- `cex-the-empty-family-is-not-erdos-hajnal` — `precheck: pass`

Dropped from the scaffolded B-page scope:

- `fs-a-viral-family-must-only-forbid-graphs-with-at-least-two-vertices`
  Disposition: dropped from authoring scope and removed from `pages.json`.
  Reason: `tools/content-policy.mjs` on Tuesday, August 25, 2026 rejects a newly `ai-generated` false statement in future batch scope. I kept the underlying boundary content through `ex-a-family-containing-k-one-is-vacuously-viral`.

### Provenance and ledger

- `def-polynomial-rodl-property-for-a-finite-family` — `statement: literature-derived`, `proof: not-applicable`. Source/edit history: faithful finite-family definition from Huang-Ju-Zhou §1.1, with the already-published maximum-degree restricted-set normalization kept unchanged. Scaffold delta: no title change, no dependency change.
- `def-viral-property-for-a-finite-family` — `statement: literature-derived`, `proof: not-applicable`. Source/edit history: faithful finite-family virality definition from Huang-Ju-Zhou §1.1 in the library’s induced-copy language. Scaffold delta: no title change, no dependency change.
- `def-t-k-homogeneous-property` — `statement: ai-altered`, `proof: not-applicable`. Source/edit history: adapted the Bucić–Fox–Pham / Nguyen wording to the exact-$t$ formulation the local proof actually uses, so the statement is literature-based but materially reformulated. Scaffold delta: `statement` provenance changed from planned `literature-derived` to `ai-altered`; dependency list unchanged.
- `lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets` — `statement: ai-altered`, `proof: ai-generated`. Source/edit history: based on Bucić–Fox–Pham Lemma 13 / Nguyen Lemma 13, but generalized from a hereditary class to an arbitrary class with the exact local `(t,k)` property. Scaffold delta: dropped `def-hereditary-graph-class` from `deps`; `statement` provenance changed from planned `literature-derived` to `ai-altered`.
- `lem-small-total-copy-expectation-forces-many-homogeneous-k-sets` — `statement: ai-altered`, `proof: ai-generated`. Source/edit history: finite-family expectation lemma adapted from Bucić–Fox–Pham Lemma 14 / Nguyen Lemma 14. Scaffold delta: added `def-uniform-finite-probability-space` and `def-expectation-on-a-finite-probability-space` to support the authored expectation statement.
- `lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets` — `statement: literature-derived`, `proof: ai-altered`. Source/edit history: source statement kept in its maximum-degree form, with the library-language sparse-set corollary added in the last sentence. Scaffold delta: added `thm-pascals-rule`, dropped unused `thm-induction-principle`.
- `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral` — `statement: literature-derived`, `proof: ai-altered`. Source/edit history: exact finite-family theorem from Huang-Ju-Zhou Theorem 1.3, proved locally by combining the Bucić–Fox–Pham / Nguyen counting spine with published real-power and logarithm items. Scaffold delta: added `thm-real-power-agrees-with-rational-exponent`, `lem-exponential-dominates-one-plus-x`, `thm-natural-logarithm-laws`, and `thm-exponential-beats-every-polynomial`; kept the explicit `K_0`/`K_1` vacuous cases.
- `cor-viral-implies-polynomial-rodl-for-a-finite-family` — `statement: ai-altered`, `proof: ai-generated`. Source/edit history: local one-line corollary extracted from the viral definition. Scaffold delta: no title change, no dependency change.
- `cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family` — `statement: ai-altered`, `proof: ai-generated`. Source/edit history: local argument using the polynomial Rödl witness directly, rather than the published `ai-generated` restricted-set corollary. Scaffold delta: the authored statement records the explicit exponent `1/(2d+2)`.
- `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence` — `statement: literature-derived`, `proof: ai-generated`. Source/edit history: exact equivalence statement from Huang-Ju-Zhou Theorem 1.3, with the proof reduced to the page-local implication cycle. Scaffold delta: no title or dependency change.
- `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence` — `statement: literature-derived`, `proof: ai-generated`. Source/edit history: singleton specialization of the finite-family theorem, matching the single-graph viewpoint of Bucić–Fox–Pham Theorem 4. Scaffold delta: no title or dependency change.
- `ex-the-singleton-family-p-three-is-viral` — `statement: ai-generated`, `proof: ai-generated`. Source/edit history: direct application example built from the published three-vertex EH classification and the new singleton equivalence. Counterexample search scope/outcome: checked the explicit witness `P_3` against the published definition of `P_3`; no defect found.
- `ex-a-family-containing-k-one-is-vacuously-viral` — `statement: ai-generated`, `proof: ai-generated`. Source/edit history: local boundary example around the $K_1$ copy count. Counterexample search scope/outcome: checked the witness family `\mathcal F` with `K_1 \in \mathcal F` against the virality inequality; the antecedent is indeed empty for every nonempty graph.
- `cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted` — `statement: ai-generated`, `proof: ai-generated`. Source/edit history: local witness `K_N \sqcup K_N`, chosen inside the already-EH singleton family `\{P_3\}`. Counterexample search scope/outcome: checked the explicit witness graph against the definitions of `P_3`-free and `\epsilon`-restricted; it refutes the claim for every fixed `\epsilon < 1/2`.
- `cex-the-empty-family-is-not-erdos-hajnal` — `statement: ai-generated`, `proof: ai-generated`. Source/edit history: local witness built from the published class-of-all-graphs counterexample and the vacuous meaning of `\varnothing`-free. Counterexample search scope/outcome: checked that `\varnothing`-free means “every finite graph”; the published corollary then refutes the claim.

### Gate results

- `node tools/tsx-run.mjs tools/reflow.mts items/<owned ids>` — pass
- `node tools/tsx-run.mjs tools/precheck.mts items/<owned ids>` — pass
- `node tools/content-policy.mjs research/frontier-19-batch-10.pages.json` — pass
- `node tools/validate-plan.mjs research/plan-spec.json` — pass
- `node tools/proof-contract.mjs research/frontier-19-batch-10.proof-contracts.json --strict` — pass
- `node tools/coverage-checklist.mjs research/frontier-19-batch-10.coverage.json` — 0 errors, 1 warning: `coverage-low-yield` on page 405
- `node tools/prosecheck.mjs <owned files> --warnings` — pass
- `node tools/extcheck.mjs` — pass
- `node tools/citecheck.mjs` — no batch-local failure surfaced; repo-wide heuristic warnings remain outside this batch
- `node tools/fwdcheck.mjs` — no batch-local failure surfaced; repo-wide legacy forward-material output remains outside this batch
- `node tools/depcheck.mjs` — still fails repo-wide on Tuesday, August 25, 2026 because of an unrelated existing page cycle: `isolated-singularities-and-laurent-series-examples -> isolated-singularities-and-laurent-series -> isolated-singularities-and-laurent-series-examples`

### Escalations

- No cross-boundary repair inside published prerequisites was needed for the mathematics used here.
- The published citation-title defect from step 3 remains open outside this batch: `def-erdos-hajnal-property-and-constant`, `prop-erdos-hajnal-property-passes-to-hereditary-subclasses`, and `lem-erdos-hajnal-constants-are-downward-closed` still cite `https://arxiv.org/html/2606.06258v2` under the wrong title.
- Repo-wide `depcheck` is not green because of the unrelated existing page cycle above. I did not edit those unrelated published pages.

### Confidence

- Confidence is moderate. The authored mathematics closes under the local gates that actually inspect this batch’s text: precheck, content policy, proof contract, prosecheck, coverage checklist, citecheck heuristics, and extcheck.
- I did not run owner-only publication fields, any judge lane, or any repair to unrelated repo-level failures.
- I did not verify network-stamped source fetches from shell in this pass; the batch continues to rely on the stamped coverage entries already present on disk.
