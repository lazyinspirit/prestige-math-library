# Frontier 6 Step 6 independent reader report — Batch 1

Date: 2026-08-01

## Scope and method

This audit covers exactly the 97 items and six page manifests on:

- `cosets-and-lagranges-theorem` and its examples page;
- `trees-forests-and-spanning-trees` and its examples page; and
- `induced-subgraphs-and-hereditary-graph-classes` and its examples page.

I read every assigned item from beginning to end, including every definition,
statement, Facts & Assumptions entry, numbered proof/refutation/verification
step, citation, summary, and remark. I also opened and read the actual statement
or definition of every dependency target used semantically. The final dependency
manifest contains 405 edges: 185 same-batch and 220 published-backward, with no
cross-batch, forward, unresolved, or missing-source edges. The
published-backward edges use 62 distinct external published items, all of which
were inspected at their targets rather than inferred from titles.

No item was added, deleted, renamed, or moved. No judge was called, and no judge
verdict was written or removed. There were no stale judge blocks in the assigned
items. Batch 2, `items/thm-reals-ordered-field.md`, all
`research/frontier-3-*` files, release prose/tools, publication, commits, and
pushes remained out of scope.

## Exact item coverage

### cosets-and-lagranges-theorem (15)

- `def-coset`
- `lem-coset-membership-and-equality`
- `lem-coset-partition`
- `lem-coset-equinumerous-with-subgroup`
- `lem-left-and-right-cosets-equinumerous`
- `def-index`
- `lem-finite-coset-partition`
- `thm-lagrange`
- `cor-order-of-element-divides-group-order`
- `cor-g-to-the-group-order-is-identity`
- `cor-prime-order-group-is-cyclic`
- `cor-index-tower-finite`
- `cor-index-one-iff-whole-group`
- `thm-eulers-theorem`
- `thm-fermats-little-theorem`

### cosets-and-lagranges-theorem-examples (8)

- `ex-cosets-of-nz-in-z`
- `ex-index-of-the-trivial-subgroups`
- `ex-lagrange-in-sym-three`
- `cex-left-coset-that-is-not-a-right-coset`
- `ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group`
- `cex-subgroup-of-an-infinite-group-equinumerous-with-it`
- `cex-product-of-two-subgroups-not-a-subgroup`
- `fs-every-coset-is-a-subgroup`

### trees-forests-and-spanning-trees (27)

- `def-tree-forest-and-leaf`
- `lem-nonempty-forest-has-low-degree-vertex`
- `thm-forest-edge-component-count`
- `cor-tree-edge-count`
- `lem-edge-deletion-in-a-tree`
- `lem-edge-addition-to-a-tree`
- `thm-tree-characterisations`
- `cor-nontrivial-tree-has-two-leaves`
- `def-rooted-tree`
- `lem-rooted-tree-parent-and-levels`
- `def-spanning-tree`
- `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree`
- `thm-connected-iff-has-spanning-tree`
- `lem-fundamental-cycle-of-a-spanning-tree`
- `lem-fundamental-cut-of-a-spanning-tree`
- `lem-spanning-tree-set-is-finite`
- `def-number-of-spanning-trees`
- `def-prufer-code`
- `lem-prufer-decoding-produces-a-tree`
- `thm-prufer-code-bijection`
- `thm-cayley-formula`
- `def-weighted-graph-and-minimum-spanning-tree`
- `lem-spanning-tree-exchange`
- `thm-cut-and-cycle-properties-for-minimum-spanning-trees`
- `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`
- `thm-kruskals-minimum-spanning-tree-algorithm`
- `thm-prims-minimum-spanning-tree-algorithm`

### trees-forests-and-spanning-trees-examples (12)

- `ex-trees-on-at-most-five-vertices`
- `ex-prufer-code-and-decoding`
- `ex-spanning-trees-of-a-cycle`
- `ex-spanning-trees-of-k-four`
- `ex-fundamental-cycle-and-cut`
- `ex-two-spanning-trees-of-one-graph`
- `ex-kruskal-and-prim-on-a-weighted-graph`
- `cex-acyclic-disconnected-graph`
- `cex-n-minus-one-edges-without-a-tree`
- `cex-minimum-spanning-tree-not-unique`
- `fs-cayley-formula-counts-unlabelled-trees`
- `fs-every-edge-lies-in-every-spanning-tree`

### induced-subgraphs-and-hereditary-graph-classes (23)

- `def-induced-embedding-and-induced-copy`
- `lem-induced-embeddings-compose`
- `def-induced-copy-number`
- `lem-induced-copy-number-isomorphism-and-complement`
- `def-h-free-and-family-free-graph`
- `lem-induced-freeness-passes-to-induced-subgraphs`
- `def-hereditary-graph-class`
- `lem-forbidden-induced-subgraph-classes-are-hereditary`
- `def-minimal-forbidden-induced-subgraph`
- `thm-hereditary-classes-have-a-unique-minimal-forbidden-basis`
- `cor-nonempty-hereditary-class-contains-the-null-graph`
- `def-complement-of-a-graph-class`
- `lem-complement-commutes-with-induced-subgraphs`
- `thm-complementation-preserves-hereditary-classes-and-bases`
- `cor-h-free-complement-dictionary`
- `def-clique-stable-set-and-numbers`
- `lem-complement-swaps-cliques-and-stable-sets`
- `def-anticonnected-graph-and-anticonnected-component`
- `lem-anticonnected-components-are-complement-components`
- `thm-every-nontrivial-graph-is-connected-or-anticonnected`
- `def-edges-between-sets-and-pure-mixed-pairs`
- `lem-purity-symmetry-and-complementation`
- `lem-components-are-anticomplete-and-anticomponents-complete`

### induced-subgraphs-and-hereditary-graph-classes-examples (12)

- `cex-a-subgraph-copy-need-not-be-induced`
- `ex-induced-k-two-copy-count`
- `ex-complete-graphs-as-a-hereditary-class`
- `ex-edgeless-graphs-as-a-hereditary-class`
- `ex-cluster-graphs-are-p-three-free`
- `cex-connected-graphs-are-not-hereditary`
- `cex-regular-graphs-are-not-hereditary`
- `ex-p-four-is-connected-and-anticonnected`
- `ex-pure-and-mixed-pairs-in-p-four`
- `fs-every-hereditary-class-has-a-finite-forbidden-basis`
- `fs-hereditary-classes-are-closed-under-all-subgraphs`
- `ex-complementary-forbidden-bases`

## Defects found and dispositions

### Publish-blocking mathematical defect

1. `thm-cayley-formula`: the Statement displayed
   `\tau(K_n)=n^{,n-2}`, although the title and proof used the correct Cayley
   formula. This was a malformed/false displayed conclusion, not merely a
   cosmetic rendering issue. It is corrected to `\tau(K_n)=n^{n-2}`.

No publish-blocking mathematical defect remains in the assigned scope.

### Material proof, statement, and definition repairs

2. `thm-forest-edge-component-count`: the proof used natural-number
   subtraction at a foundational level where the authoring contract requires
   addition-only cardinal arithmetic, and it used the number of components
   without first establishing that the component family is finite. The Statement
   now defines the component-set family and its cardinality; the Facts establish
   finiteness through the finite power set; and both induction branches use
   disjoint-union sum rules and addition only. The proof now explicitly handles
   isolated and degree-one deletion.

3. `thm-hereditary-classes-have-a-unique-minimal-forbidden-basis`: the old
   uniqueness paragraph only observed that the definition determines
   `\mathcal B(\mathcal C)`; it did not prove the advertised minimality among
   arbitrary forbidden bases. The Statement and proof now show that every
   forbidden basis contains an isomorphic representative of every minimal
   obstruction, from which unique inclusion-minimality follows.

4. `def-prufer-code`: the use of `n-2` now has its natural-number meaning
   stated explicitly as the unique `m` with `m+2=n`.

5. `lem-prufer-decoding-produces-a-tree`: the decoding proof previously used
   that the current symbol `a_i` was unused before establishing it. That fact is
   now proved at the selection step from the earlier-stage absence invariant, so
   the subsequent edge addition no longer depends on a later justification.

6. `thm-cut-and-cycle-properties-for-minimum-spanning-trees`: the exchange
   proof referred to `f` or `h` in branches where the selected MST already
   contained or omitted the target edge and those symbols had never been
   defined. Each already-satisfied case and exchange case is now explicit.

7. `ex-cluster-graphs-are-p-three-free`: the forward implication's prose did
   not correctly cover a two-vertices-plus-one-vertex distribution across
   components. It now observes that vertices meeting more than one component
   induce edges only within component parts and hence at most one edge.

### Schema and page-contract repairs

8. Six counterexamples used the noncanonical section sequence
   `False Statement / Counterexample / Facts & Assumptions / Refutation`.
   Each now uses the required
   `Statement refuted / Facts & Assumptions / Counterexample` structure, with
   the witness retained in `Given:`:

   - `cex-acyclic-disconnected-graph`
   - `cex-n-minus-one-edges-without-a-tree`
   - `cex-minimum-spanning-tree-not-unique`
   - `cex-a-subgraph-copy-need-not-be-induced`
   - `cex-connected-graphs-are-not-hereditary`
   - `cex-regular-graphs-are-not-hereditary`

9. The three A-page summaries had two paragraphs but did not satisfy the summary
   contract: paragraph 1 did not describe the declared published background,
   and each used the meta-phrase “The page”. They now use paragraph 1 for the
   published prerequisites/background and paragraph 2 for the page's main
   progression, with no positional or meta-page phrasing:

   - `library/abstract-algebra/cosets-and-lagranges-theorem.md`
   - `library/combinatorics/trees-forests-and-spanning-trees.md`
   - `library/combinatorics/induced-subgraphs-and-hereditary-graph-classes.md`

## Exact changed IDs and metadata files

Thirteen item IDs changed:

- `cex-a-subgraph-copy-need-not-be-induced`
- `cex-acyclic-disconnected-graph`
- `cex-connected-graphs-are-not-hereditary`
- `cex-minimum-spanning-tree-not-unique`
- `cex-n-minus-one-edges-without-a-tree`
- `cex-regular-graphs-are-not-hereditary`
- `def-prufer-code`
- `ex-cluster-graphs-are-p-three-free`
- `lem-prufer-decoding-produces-a-tree`
- `thm-cayley-formula`
- `thm-cut-and-cycle-properties-for-minimum-spanning-trees`
- `thm-forest-edge-component-count`
- `thm-hereditary-classes-have-a-unique-minimal-forbidden-basis`

Three A-page files changed, as listed in defect 9.

The only dependency-list change was adding
`lem-nat-add-commutative` to
`thm-forest-edge-component-count`. It was mirrored exactly in:

- `items/thm-forest-edge-component-count.md`
- `research/frontier-6-batch-1.pages.json`
- `research/plan-spec.json`

A direct parity check over all 97 items reports 97 items and zero mismatches
between item frontmatter dependencies and the live plan specification. No other
Batch 1 plan entry, order, kind, title, ID, page requirement, or dependency was
changed by this reader.

## Nonfatal observations left unchanged

The owner-defined 30-second-gap threshold was applied. The following compressed
steps are mathematically recoverable locally and were therefore recorded rather
than expanded:

- `cor-index-tower-finite` does not separately state that `H` is finite before
  applying Lagrange to `K\le H`; this follows immediately from `H\subseteq G`
  and finite `G`.
- `cor-nontrivial-tree-has-two-leaves` compresses existence of a longest path
  in a finite tree.
- `thm-connected-iff-has-spanning-tree` compresses existence of a maximal
  member of the finite family of acyclic spanning subgraphs.
- `def-clique-stable-set-and-numbers` compresses existence of maxima over the
  finite families of cliques and stable sets.

Several dependencies are conservative or redundant, but all are real,
backward-resolving dependencies. They were not churned solely for minimality.

## Mechanical verification

All commands below were run against the final reader state.

- Reflow: all 11 changed proof/refutation/verification items were unchanged by
  `tools/reflow.mts`.
- Scoped precheck: 80 proof-bearing items checked, 0 failing.
- Scoped rendercheck: 103 files (97 items plus six pages), OK.
- Scoped citecheck: 97 items scanned, OK.
- Scoped prosecheck with warnings: 103 files, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json --max-items 100`: exit 0; only the
  repository's pre-existing redundant-prerequisite warnings were emitted.
- Dependency parity: 97 items, 0 plan/content dependency mismatches.
- Audit manifest: 405 edges, consisting of 185 same-batch and 220
  published-backward; 0 cross-batch, forward, unresolved, or missing-source.
- `depsource.mjs`, by page:

  - cosets A: 61 published, 25 draft-page, 0 unresolved/homeless/later;
  - cosets B: 34 published, 13 draft-page, 0 unresolved/homeless/later;
  - trees A: 58 published, 62 draft-page, 0 unresolved/homeless/later;
  - trees B: 8 published, 29 draft-page, 0 unresolved/homeless/later;
  - induced-subgraphs A: 39 published, 34 draft-page, 0
    unresolved/homeless/later;
  - induced-subgraphs B: 20 published, 22 draft-page, 0
    unresolved/homeless/later.

- Global `depcheck.mjs`: exit 0; existing warnings were outside the assigned
  scope.
- Global `fwdcheck.mjs`: exit 0; 0 open forward references.
- Global `extcheck.mjs`: exit 0; existing recorded-not-proved notices were
  outside the assigned scope.

## Reader conclusion

The full 97-item Batch 1 scope and all 405 final dependency edges have been read
semantically. The listed repairs are complete, scoped gates are green, and no
unresolved or publish-blocking defect remains in Batch 1 from this independent
reader pass.
