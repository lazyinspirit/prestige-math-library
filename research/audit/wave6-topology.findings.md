# Wave 6 topology — Audit-Beta findings

Date: 2026-08-08

## Scope and conclusion

The manifest assigns exactly two A/B pairs and 50 items:

| page | kind | items |
|---|---:|---:|
| `hausdorff-via-the-diagonal` | A | 13 |
| `hausdorff-via-the-diagonal-examples` | B | 8 |
| `homotopy-and-homotopy-equivalence` | A | 22 |
| `homotopy-and-homotopy-equivalence-examples` | B | 7 |

I read all 50 items from disk. This included all 44 supplied proofs or
refutations, all 213 numbered proof steps, all 277 fact citations used by those
steps, all 309 declared dependency edges, the sole in-scope Remark, and both
A-page summaries. Every cited dependency was opened at the clause used. The 309
edges consist of 229 published-backward edges and 80 same-batch edges. There
are no coverage exceptions.

No statement is false, no proof step is invalid, no dependency is used in a
stronger direction than it states, and no material mathematical repair is
proposed. The only item-level repair candidate is source metadata. One A-page
summary also contains a nonfatal scope overstatement, recorded below as N2.

## A1 provenance

`wave6-topology.provenance.jsonl` contains one row for every item. Every
`exact-source` and `semantic-source` row has a working URL to the mathematical
source itself; the ledger uses 14 distinct URLs. No row uses
`established-knowledge`, so none requires special Alpha concurrence before its
classification can be decided.

| statement provenance | evidence | count |
|---|---|---:|
| `literature-derived` | `exact-source` | 24 |
| `ai-altered` | `semantic-source` | 24 |
| `ai-generated` | `trivial` | 2 |

The 24 `literature-derived` / `exact-source` items are:

`thm-hausdorff-iff-the-diagonal-is-closed`,
`cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`,
`cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`,
`lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`,
`lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`,
`thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`,
`lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`,
`fs-a-function-with-closed-graph-is-continuous`,
`cex-a-closed-graph-without-continuity`,
`ex-a-finite-hausdorff-space-is-discrete`,
`def-homotopy-relative-and-path-homotopy`,
`cor-contractible-iff-identity-nullhomotopic`,
`def-homotopy-equivalence`,
`thm-homotopy-equivalence-is-an-equivalence-relation`,
`cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence`,
`def-retraction-and-deformation-retract`,
`thm-a-deformation-retract-is-a-homotopy-equivalence`,
`cor-a-retract-of-a-contractible-space-is-contractible`,
`cor-homotopy-equivalence-bijection-on-path-components`,
`thm-two-maps-into-a-convex-set-are-homotopic`,
`cor-convex-subsets-of-rn-are-contractible`,
`cor-contractible-spaces-are-path-connected`,
`thm-punctured-rn-deformation-retracts-onto-the-sphere`, and
`ex-radial-deformation-retraction-of-punctured-rn`.

The 24 `ai-altered` / `semantic-source` items are:

`def-the-diagonal-of-a-space`,
`lem-the-diagonal-map-is-an-embedding`,
`thm-a-compact-hausdorff-space-is-regular-and-normal`,
`fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal`,
`ex-the-diagonal-of-the-real-line-is-closed`,
`ex-the-diagonal-in-the-cofinite-and-cocountable-topologies`,
`ex-the-graph-of-a-continuous-real-function-is-closed`,
`ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal`,
`ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space`,
`lem-homotopy-reflexive-and-symmetric`,
`lem-homotopy-transitivity-by-reparametrisation`,
`cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`,
`thm-composition-respects-homotopy`,
`def-nullhomotopic-map-and-contractible-space`,
`lem-straight-line-homotopies-are-continuous`,
`cor-punctured-rn-homotopy-equivalent-to-the-sphere`,
`fs-a-retract-must-be-a-deformation-retract`,
`fs-homotopy-equivalent-spaces-are-homeomorphic`,
`ex-straight-line-homotopy-between-maps-into-rn`,
`ex-intervals-and-euclidean-spaces-are-contractible`,
`ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic`,
`ex-a-two-point-retract-that-is-not-a-deformation-retract`,
`ex-a-cylinder-deformation-retracts-onto-an-end`, and
`ex-path-homotopy-through-straight-segments-in-a-convex-set`.

The two `ai-generated` / `trivial` determinations are positive determinations,
not unsuccessful source searches:

- `rem-what-the-diagonal-criterion-gives-and-what-it-costs` is a local ledger
  of this page's dependency costs. Each mathematical clause follows directly
  from the named on-disk items, but the assembled page-specific remark is not
  an established proposition.
- `cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set` is the
  page-specific two-point witness with explicitly chosen maps. Direct
  inspection of the indiscrete topology proves continuity, density, agreement
  on the chosen singleton, and disagreement at the other point.

Proof provenance is independent: 15 proofs are `ai-altered`, 29 are
`ai-generated`, and 6 non-proof items are `not-applicable`. The item-by-item
choice and supporting rationale are in the ledger.

## A2 proof contracts and boundary checks

`wave6-topology.proof-contracts.json` contains all 44 proof-bearing ids. Each
contract records the exact on-disk source clause for every fact citation, all
steps that use it, and one derivation row for every numbered proof step.

The eight boundary worksheets cover every proof:

| boundary case | checked | not applicable |
|---|---:|---:|
| empty | 22 | 22 |
| zero | 7 | 37 |
| one | 14 | 30 |
| degenerate | 20 | 24 |
| endpoints | 25 | 19 |
| nonempty choice | 11 | 33 |
| iff forward | 4 | 40 |
| iff reverse | 4 | 40 |

The strict proof-contract gate reports 44 checked, zero errors, and zero
warnings. The finite-smoke gate reports zero errors and no applicable finite
combinatorial test case. The latter is expected: these contracts concern
topological separation, continuity, homotopy, and explicit real-space
witnesses rather than a supported finite enumeration type.

Two points that could otherwise invite an incorrect repair were checked
directly:

- In `thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`,
  compactness of the codomain suffices for closed graph to imply continuity;
  Hausdorffness is needed for the converse. The stated two directions and the
  proofs use those hypotheses correctly.
- In `def-nullhomotopic-map-and-contractible-space`, the nonempty-space clause
  "every map out of $X$ is nullhomotopic" is equivalent to the usual
  identity-nullhomotopic definition. The ledger records this as a convention
  delta, not a new theorem.

## Findings for A3

### N1 — nineteen bibliographic URLs do not expose the cited clause (class b, with class c retagging)

Sixteen items title a reference as a section of Munkres's *Topology* but set
its URL to `https://en.wikipedia.org/wiki/James_Munkres`, the biography of the
author:

`def-the-diagonal-of-a-space`,
`lem-the-diagonal-map-is-an-embedding`,
`thm-hausdorff-iff-the-diagonal-is-closed`,
`cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`,
`cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`,
`lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`,
`thm-a-compact-hausdorff-space-is-regular-and-normal`,
`lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`,
`thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain`,
`lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`,
`rem-what-the-diagonal-criterion-gives-and-what-it-costs`,
`ex-the-diagonal-of-the-real-line-is-closed`,
`ex-the-graph-of-a-continuous-real-function-is-closed`,
`ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal`,
`ex-a-finite-hausdorff-space-is-discrete`, and
`ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space`.

Three more title a reference as Steen and Seebach's *Counterexamples in
Topology* but link only the Wikipedia article about that book:

`fs-a-function-with-closed-graph-is-continuous`,
`ex-the-diagonal-in-the-cofinite-and-cocountable-topologies`, and
`cex-a-closed-graph-without-continuity`.

The titles identify genuine literature, but the URLs cannot be used to check
the asserted clauses. The provenance ledger supplies direct, working sources
for the 18 sourced statements: PlanetMath or Stacks for the diagonal results;
UC Riverside notes for equalizers and dense-set uniqueness; Cambridge notes
for sequential uniqueness and finite Hausdorff spaces; Hatcher's topology
notes for compact separation; MIT notes for the compact-codomain closed-graph
criterion; McKay's notes for the locally compact basis; UCL notes for the
closed-graph counterexample; and Toronto/Cambridge material for the
cofinite/cocountable example. The remaining item is the locally assembled
`rem-what-the-diagonal-criterion-gives-and-what-it-costs`, whose clauses are
verified from its declared dependencies and need no external source.

**Proposed A3 disposition:** approve one bulk pure-retag pass over all 50
items. Add each ledger row's `provenance` block, add its verified URLs to
`sources.references`, and remove the 19 misleading bibliographic URL entries
(with no replacement needed for the local Remark). This changes only
frontmatter provenance and source references. It must retain every existing
`verification.judge` block and audit stamp and use one stage-level A4
touchlog snapshot, not per-item snapshots.

### N2 — the first A-page summary overstates the diagonal pullback method (nonfatal page prose)

`library/topology/hausdorff-via-the-diagonal.md` says, after the diagonal
criterion, "Everything else here is obtained by pulling that one closed set
back along a continuous map." This accurately describes the equalizer and
closed-graph constructions, but not the compact-Hausdorff regularity and
normality theorem, the compact-codomain converse to the closed-graph theorem,
or the locally compact basis lemma. Their proofs use compactness, finite
subcovers, and separation rather than only a diagonal pullback.

This is page-level scope prose, not an item statement, proof step, or Remark
falsehood. Under the triage rule I record it without proposing a wave repair.
Alpha may place it in the A10 prose queue if desired.

## A4 applied

The orchestrator approved N1 and declined N2 in `wave6-A3.md`. I applied the
approved bulk pure-retag pass to all 50 items. Before the pass,
`wave6-touches.json` already carried the stage-level `pre-A4` snapshot required
by the workflow.

For the class-(c) provenance retag, the old state on every item was the absence
of a component `provenance` block. The new state is the exact
`provenance.statement` / `provenance.proof` pair in that item's ledger row:
24 `literature-derived`, 24 `ai-altered`, and 2 `ai-generated` Statements;
15 `ai-altered`, 29 `ai-generated`, 6 `not-applicable`, and no unsupplied local
proofs. The generated counterexample
`cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set` also received
the applicable `generation.role: counterexample`. The generated Remark has no
role in the closed SCHEMA vocabulary and remains the expected audit-mode
`generated-kind` truth-risk warning. Thirty-seven previously absent ledger
URLs were added to `sources.references` under descriptive source titles.

For the approved class-(b)/(c) source-metadata correction, these are the exact
old-to-new dispositions:

| item(s) | old reference URL | new reference URL(s) |
|---|---|---|
| `def-the-diagonal-of-a-space` | `https://en.wikipedia.org/wiki/James_Munkres` | `https://planetmath.org/diagonalembedding`; `https://stacks.math.columbia.edu/tag/08ZD` |
| `lem-the-diagonal-map-is-an-embedding` | same Munkres biography URL | `https://planetmath.org/diagonalembedding` |
| `thm-hausdorff-iff-the-diagonal-is-closed`, `lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed`, `ex-the-diagonal-of-the-real-line-is-closed`, `ex-the-graph-of-a-continuous-real-function-is-closed` | same Munkres biography URL | `https://stacks.math.columbia.edu/tag/08ZD` |
| `cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`, `cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`, `ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal` | same Munkres biography URL | `https://math.ucr.edu/~res/math205A-2014/gentop-notes.pdf` |
| `lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit`, `ex-a-finite-hausdorff-space-is-discrete` | same Munkres biography URL | `https://www.dpmms.cam.ac.uk/~or257/teaching/notes/TopSp.pdf` |
| `thm-a-compact-hausdorff-space-is-regular-and-normal`, `ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space` | same Munkres biography URL | `https://pi.math.cornell.edu/~hatcher/Top/TopNotes.pdf` |
| `thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain` | same Munkres biography URL | `https://math.mit.edu/~kehle/files/Introduction_to_functional_analysis_18_102.pdf` |
| `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure` | same Munkres biography URL | `https://ben-mckay.github.io/benmckay.github.io/files/topology-lecture-notes.pdf` |
| `rem-what-the-diagonal-criterion-gives-and-what-it-costs` | same Munkres biography URL | removed; the Remark's mathematical clauses are directly verified from its declared dependencies |
| `fs-a-function-with-closed-graph-is-continuous`, `cex-a-closed-graph-without-continuity` | `https://en.wikipedia.org/wiki/Counterexamples_in_Topology` | `https://www.homepages.ucl.ac.uk/~ucahad0/2010/3103_handout_7.pdf` |
| `ex-the-diagonal-in-the-cofinite-and-cocountable-topologies` | same book-about URL | `https://www.math.toronto.edu/~alfonso/MC/topologyMC14_V2.pdf`; `https://www.dpmms.cam.ac.uk/~or257/teaching/notes/TopSp.pdf` (the ledger's cocountable-topology URL was already present) |

No item body, proof, Statement, title, dependency, page, id, reading order,
judge block, or audit stamp changed. A byte-level comparison against `HEAD`
confirmed all 50 bodies and verification blocks are identical and that the only
changed top-level fields are `provenance`, `sources`, and the one derived
`generation` block. The declined N2 summary sentence remains untouched for the
A10 prose queue.

Scoped A4 validation: `content-policy --audit` reports 50 items, zero errors,
and the single expected generated-Remark warning; `proof-contract --strict`
reports 44/44 with zero errors or warnings; `finite-smoke` reports zero errors;
`rendercheck` parses all 50 frontmatter blocks and all rendered mathematics;
and `citecheck` reports only two false-positive heuristic matches where the word
“transitivity” refers to homotopy, not an order axiom. There is no unresolved
mathematical concern and no coverage exception.

The only unresolved matters are Alpha's classification review and the A3
decision on N1. All ledger rows deliberately retain `alpha_concurred: false`
at Beta handoff; none relies on that field to waive a missing source.
