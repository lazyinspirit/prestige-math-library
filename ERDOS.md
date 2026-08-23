# Erdős–Hajnal build path

Persistent dependency schedule for the 25 A/B pairs introduced for
arXiv:2606.06258v2. It is computed from `research/plan-spec.json` on
2026-07-31, using the page-level `requires` graph and the current library
state.

## Scope and rule of use

The target is to build and publish all 25 Erdős–Hajnal pairs at orders
393–442. Their prerequisite closure contains **38 currently unbuilt A/B
pairs**: the 25 targets and 13 pre-existing prerequisites. All other nodes in
the closure are already published P/X pages or completed A/B pairs.

One build cycle means completing the whole A/B pair through the repository's
step 0–10 workflow: its A and B pages are authored, Beta/Alpha audited,
owner-reviewed, validated and published together. A B page may be completed
inside its own pair's cycle after its A page; no pair in a cycle relies on a
different pair from that same cycle. Each cycle below has at most six pairs.
If a pair fails a gate, keep downstream cycles blocked rather than substituting
an unreviewed dependency.

`P` marks a pre-existing prerequisite pair. `E` marks one of the 25 article
targets. All B companions are the corresponding `-examples` page.

## Optimal build cycles

| cycle | pairs to build | why this frontier is available |
|---:|---|---|
| 1 | P `uniform-convergence-of-functions`; P `chains-antichains-sperner-and-dilworth` | Every declared prerequisite is already published. |
| 2 | P `power-series-and-real-analytic-functions`; P `graphs-walks-and-connectivity` | Respectively follows uniform convergence and the chains/antichains page. |
| 3 | P `the-exponential-function`; P `trees-forests-and-spanning-trees`; E `induced-subgraphs-and-hereditary-graph-classes` | The analytic, graph-tree and induced-language branches can advance independently. |
| 4 | P `the-logarithm-and-general-powers`; P `eulerian-and-hamiltonian-graphs` | Each follows the preceding branch only. |
| 5 | P `matchings-covers-menger-and-network-flows` | Requires Eulerian/Hamiltonian graphs. |
| 6 | P `graph-colouring` | Requires matchings/covers/flows. |
| 7 | P `ramsey-theory` | Requires graph colouring. |
| 8 | P `extremal-graph-theory` | Requires Ramsey theory. |
| 9 | P `finite-probability-and-the-probabilistic-method` | Joins the extremal/Ramsey and logarithm/exponential branches. |
| 10 | E `erdos-hajnal-property-and-homogeneous-sets`; E `regular-pairs-and-induced-counting` | The probability prerequisite and induced-subgraph language are complete. |
| 11 | E `modules-substitution-and-prime-graphs`; E `sparse-restricted-subgraphs-and-rodl-nikiforov` | Respectively follows EH language and induced regularity/counting. |
| 12 | E `classical-and-loglog-erdos-hajnal-bounds`; E `polynomial-rodl-and-viral-equivalence` | Both require the EH and Rödl–Nikiforov foundations. |
| 13 | E `blockades-combs-and-pattern-graphs` | Requires polynomial Rödl/virality. |
| 14 | E `pure-pairs-forests-and-path-antipath-classes`; E `quotient-blockades-and-mixing-relations` | Both rest on completed blockade language and are independent. |
| 15 | E `bull-free-graphs-and-the-erdos-hajnal-property`; E `cographs-perfect-patterns-and-pure-pairs` | The prime/module and pure-pair prerequisites are complete. |
| 16 | E `the-five-cycle-and-erdos-hajnal` | Requires both the bull-free and cograph/pattern developments. |
| 17 | E `star-expansions-and-erdos-hajnal`; E `iterative-sparsification-and-the-five-vertex-path` | Two independent consequences of the five-cycle development. |
| 18 | E `small-graph-erdos-hajnal-consequences`; E `iterative-restriction-and-comb-extraction-lemmas` | Respectively joins star/P5, and specializes the completed P5 iteration. |
| 19 | E `leaf-reducibility-and-wonderful-families` | Requires the small-graph catalogue and comb-extraction lemmas. |
| 20 | E `generalized-niceness-and-reduction-outcomes` | Requires leaf reducibility and wonderfulness. |
| 21 | E `from-generalized-niceness-to-erdos-hajnal`; E `property-star-and-comb-outcomes` | Independent reductions from generalized niceness. |
| 22 | E `the-structural-criterion-for-property-star` | Requires the property-star comb outcomes. |
| 23 | E `co-e-free-comb-structure` | Joins the structural criterion with the already completed quotient blockade branch. |
| 24 | E `co-bird-free-comb-structure` | Requires the co-E-free structural result. |
| 25 | E `erdos-hajnal-for-the-e-graph-and-bird` | Joins the generalized-niceness-to-EH and co-Bird-free branches. |

## Why 25 cycles is shortest

The six-pair ceiling is not the limiting constraint: the widest cycle above has
three pairs. The lower bound is the 25-pair dependency chain

`chains-antichains-sperner-and-dilworth`
→ `graphs-walks-and-connectivity`
→ `trees-forests-and-spanning-trees`
→ `eulerian-and-hamiltonian-graphs`
→ `matchings-covers-menger-and-network-flows`
→ `graph-colouring`
→ `ramsey-theory`
→ `extremal-graph-theory`
→ `finite-probability-and-the-probabilistic-method`
→ `regular-pairs-and-induced-counting`
→ `sparse-restricted-subgraphs-and-rodl-nikiforov`
→ `polynomial-rodl-and-viral-equivalence`
→ `blockades-combs-and-pattern-graphs`
→ `pure-pairs-forests-and-path-antipath-classes`
→ `cographs-perfect-patterns-and-pure-pairs`
→ `the-five-cycle-and-erdos-hajnal`
→ `iterative-sparsification-and-the-five-vertex-path`
→ `iterative-restriction-and-comb-extraction-lemmas`
→ `leaf-reducibility-and-wonderful-families`
→ `generalized-niceness-and-reduction-outcomes`
→ `property-star-and-comb-outcomes`
→ `the-structural-criterion-for-property-star`
→ `co-e-free-comb-structure`
→ `co-bird-free-comb-structure`
→ `erdos-hajnal-for-the-e-graph-and-bird`.

No legal schedule can take fewer than 25 cycles because consecutive pairs in
this chain cannot be built in the same cycle. The table realizes that lower
bound, so it is shortest.

## Per-cycle non-negotiables

- Use the standing source-grounded Beta scaffold workflow: read the complete
  source documents, not only formal environments; read every published item
  cited; and decompose each load-bearing result into self-contained A-page
  items.
- Respect the 100-item A-page review ceiling without deleting useful results;
  split a page instead if its rigorous proof needs more room.
- Keep A-page summaries to exactly two nonempty paragraphs of fewer than 150
  words, and write no summary section for B pages.
- At step 3, the orchestrator verifies and decides recommendations before
  authoring. Step 9 is the scope-denial sweep and continues without a pause;
  at the end of step 10, record the required grouped fatal-error report and
  pause short of owner audit or publication. At step 7, run DeepSeek v4 Pro and
  a fresh Claude Opus 5 session in parallel on identical skeptical A/B and dependency context,
  then compare their findings at step 10.
- Before beginning a cycle, rerun `node tools/validate-plan.mjs
  research/plan-spec.json` and regenerate `research/BUILD-LEVELS.md` after any
  plan change. Recompute this schedule if a `requires` edge or page status
  changes.
