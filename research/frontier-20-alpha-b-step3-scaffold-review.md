# frontier-20 — group Alpha `b`, step-3 scaffold review

Group `b` owns batches **3** and **9** in
`research/frontier-20-alpha-groups.json`: CA-14
`subharmonic-functions-and-the-dirichlet-problem`, CA-9
`the-residue-theorem`, and SC-2 `the-hartogs-phenomena`. I read, for each
owned pair, the batch `.pages.json`, `.notes.md`, `.coverage.json`, the cited
design section in `research/plan-complex-analysis-track.md`, and the current
`research/plan-spec.json` entry.

I ran:

- `node tools/scope-decisions.mjs refresh --run frontier-20 --group b`
- `node tools/scope-decisions.mjs check --run frontier-20 --group b`

and resolved all seven current decline rows in
`research/frontier-20-alpha-b-scope-decisions.json`.

No A page exceeds the step-3 split ceiling. The current manifests are:

| page | A items | B items | verdict |
|---|---:|---:|---|
| `subharmonic-functions-and-the-dirichlet-problem` | 28 | 9 | **insufficient** |
| `the-residue-theorem` | 22 | 11 | **sufficient** |
| `the-hartogs-phenomena` | 19 | 6 | **sufficient** |

## Severity table

| id | page | severity | class | disposition |
|---|---|---|---|---|
| B3-1 | `subharmonic-functions-and-the-dirichlet-problem` | **major** | missing load-bearing bridge in the announced proof route | route to Beta 3 |

## Batch 3

### `subharmonic-functions-and-the-dirichlet-problem` — **insufficient**

The page has the right broad shape. The subharmonic core, Perron core,
barrier criterion, exterior-disc/exterior-cone regularity, boundary-component
regularity, punctured-disc counterexample, and conformal transport endpoint all
match the CA-14 design block. The source harvesting is also honest about what is
in and out: the smooth-boundary and convex-domain corollaries are explicit
out-of-scope rows, while harmonic-measure material is explicitly deferred to an
owner decision because the current machine plan still has no exact CA-HM page.

The problem is not breadth; it is route closure in one named corollary.

### B3-1 — `cor-simply-connected-proper-plane-domains-are-regular` claims a bridge the scaffold does not supply

The current manifest item is:

- title: `Every bounded simply connected proper plane domain is regular`
- deps: only `thm-nonsingleton-boundary-component-is-regular`
- strategy: “the boundary component through any boundary point cannot collapse
  to a singleton puncture; the previous theorem therefore makes every boundary
  point regular”

That bridge is the defect. Neither the current manifest nor the current
published dependency closure supplies a result proving that a bounded proper
simply connected plane domain cannot have a singleton boundary component. Beta's
own notes flag this explicitly in §6 as “the only intentionally thin spot” and
name the missing topological step there.

The current source stack does contain Khoruzhenko Theorem 52, harvested directly
onto this corollary, but that theorem proves the final simply-connected
regularity statement itself. It does **not** justify the manifest's announced
derivation through `thm-nonsingleton-boundary-component-is-regular`. So the
scaffold as written overclaims its internal route.

What is missing is exact and narrow:

- either a sourced lemma proving that bounded proper simply connected plane
  domains have no singleton boundary components;
- or a revised direct proof route for the corollary that no longer claims that
  reduction through the boundary-component theorem.

Until that bridge is scaffolded, the page is not yet sufficient for authoring
as written.

The other CA-14 scope decisions stand or route correctly:

- Axler Cor. 11.12, Cor. 11.13, and Thm. 11.16 are genuine enrichments beyond
  the explicit geometric endpoints already kept.
- Khoruzhenko harmonic-measure rows are true owner-level future-page material:
  `research/plan-complex-analysis-track.md` proposes CA-HM-1 later, but
  `research/plan-spec.json` still has no exact page id for it.

## Batch 9

### `the-residue-theorem` — **sufficient**

The CA-9 scaffold is breadth-sound and route-sound. The manifest includes the
null-homologous-cycle residue theorem, the finiteness lemma, large-semicircle /
Jordan / indentation estimates, rational and oscillatory real-integral
applications, the unit-circle substitution, the keyhole branch calculation, the
integer-summation branch, and the Basel rectangle corollary. The page-level
`requires` still drift from the design block, but the batch notes record that
drift and the item-level deps cite the actual published homology and logarithm
interfaces the route needs.

The one deferred Ahlfors row, `5.2 The Argument Principle`, is correctly routed
to the next exact page: `research/plan-spec.json` places
`the-argument-principle-and-rouche` at order 321 with direct dependency on
`the-residue-theorem`. That deferment stands.

There is still a source-light watchpoint, but not a step-3 blocker: the
cotangent/cosecant/Basel cluster is less explicitly surfaced by the harvested
headings than the rest of the page. I did not upgrade that to insufficiency
because the branch is mathematically downstream of the scaffolded residue
theorem plus already-published complex sine/cosine material, and the notes
state the limitation honestly rather than hiding it.

### `the-hartogs-phenomena` — **sufficient**

The SC-2 scaffold keeps the designed route intact: Hartogs figure and hull,
slice Laurent coefficients, Hartogs-figure extension, obstruction to domains of
holomorphy, puncture and coordinate-hyperplane extension, the Baire/Fatou local
boundedness lemma, separate holomorphy with no continuity hypothesis, shellwise
extension, and gluing to the compact-hole theorem. The notes also record the
design/spec prerequisite drift without trying to settle it inside the batch, as
the dispatch requires.

I checked the load-bearing claims that usually go wrong here:

- the Riemann extension statement is kept only for a coordinate hyperplane;
- the full separate-holomorphy theorem is stated without a continuity
  hypothesis;
- the compact-hole theorem is authored by Hartogs-figure propagation and gluing,
  not by a silent later `\bar\partial` route.

Those are the real scope traps in the design block, and the scaffold respects
them. No missing prerequisite or dishonest deferment currently blocks authoring
of SC-2.

## Outcome

`research/frontier-20-alpha-b-step3-verdicts.json` records one insufficient A
page and two sufficient A pages. I applied no scaffold-content repair in this
step-3 review; only the shared scope-decisions artifact was updated. The one
blocking defect is narrow and should route to Beta 3 as a route-closure repair.
