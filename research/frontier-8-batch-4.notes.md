# Frontier 8 batch 4 — Beta Steps 1–2 notes

Scope: exactly one A/B pair:

- `matchings-covers-menger-and-network-flows`
- `matchings-covers-menger-and-network-flows-examples`

No item or page has been authored. The sibling page manifest is the scope of
record, and the sibling proof-contract file is the Step-5 obligation map.

## 1. Applyable prose-scaffold amendment

### `research/plan-combinatorics-and-categories.md`, replace GT-4

Exact old text:

```text
## GT-4. Matchings, Covers, Menger and Network Flows  (order 195, combinatorics)

`requires`: `eulerian-and-hamiltonian-graphs` (193),
`chains-antichains-sperner-and-dilworth` (173),
`filters-and-ultrafilters` (12)

**The ordering decision this page records.** Two coherent syllabi exist: Diestel,
West, Cambridge and Bollobás prove Menger and Hall combinatorially and treat
flows separately; Oxford B8.5 derives "Menger's theorem and Hall's theorem" as
applications of max-flow min-cut. **This scaffold takes the first route**, and
the reason is a dependency reason, not a taste: the flow route makes Menger and
Hall inherit Ford–Fulkerson's integrality-and-termination hypothesis, which
neither of them needs. Flows come afterwards and re-derive both as corollaries,
with an explicit agreement remark.

DEFS: matching, maximal vs **maximum** matching (two words, one letter apart,
and a `rem-` fixing them), perfect matching, $\nu(G)$; vertex cover, $\tau(G)$;
augmenting path; a system of distinct representatives; network, capacity, flow,
value, cut; the residual network.

THMS: **Berge's theorem** (a matching is maximum iff there is no augmenting
path, landmark); **Hall's marriage theorem** (landmark), proved combinatorially
by induction, with the SDR restatement; **König's theorem** ($\nu = \tau$ in
bipartite graphs, landmark) and the König–Egerváry edge-cover form; the
defect version of Hall; **Tutte's 1-factor theorem** (landmark; Lovász's proof,
elementary); the Tutte–Berge formula; **Menger's theorem** in all four forms
(vertex/edge, local/global, undirected/directed), proved by induction on edges
(landmark); the global vertex form: $G$ is $k$-connected iff any two vertices
are joined by $k$ internally disjoint paths (Whitney) — **this is the form
GT-8's Kuratowski proof consumes**, so it is a numbered A-page theorem;
**max-flow min-cut** (landmark) for **integer or rational** capacities, with the
termination argument explicit and the hypothesis in the Statement; the
integrality theorem; **Menger and Hall re-derived from max-flow min-cut**, each
with an agreement remark naming the first proof; **the infinite marriage theorem
for a family of finite sets** (Rado), whose Statement names **BPI** and cites
the published `thm-ultrafilter-lemma` (§7).

FS: Hall's condition is sufficient for a family of arbitrary infinite sets
(denied version, §9.17 — the `fs-` states it and refutes it with the standard
witness: one set $\mathbb{N}$ and countably many singletons... **check the
witness closes from published material; if it does not, this `fs-` DROPS and
the denial note stands alone**); every maximal matching is maximum; $\nu = \tau$
in every graph (witness $C_5$ or $K_3$); Ford–Fulkerson terminates for arbitrary
real capacities (the classic irrational-capacity non-termination example —
**keep only if it can be built from published real-analysis material; else DROP
with a note**, since it is the honest reason the Statement says rational).

B: a bipartite graph with a perfect matching found by augmenting paths; Hall's
condition failing on a concrete family; $K_3$ with $\nu = 1 < 2 = \tau$; a small
network with its max flow and min cut exhibited; the SDR of a small set system.

CEX: a maximal matching that is not maximum; a graph satisfying Tutte's
condition minus one component; a non-bipartite graph where König fails.

Traps. (i) Menger's four forms are four statements; prove one and derive the
others, and say which is primary. (ii) The rational-capacity hypothesis is
load-bearing and must be in the Statement, not the proof. (iii) The BPI cost of
the infinite marriage theorem goes in the Statement (§7), and the page carries a
`rem-choice-ledger`. (iv) Maximal/maximum is this page's notational trap.

Forward references: NONE.
```

Exact new text:

```text
## GT-4. Matchings, Covers, Menger and Network Flows  (order 213, combinatorics)

`requires`: `eulerian-and-hamiltonian-graphs` (211),
`incidence-algebras-and-mobius-inversion` (203)

DEFS: matchings, saturated vertices, maximal and maximum matchings, perfect
matchings and $\nu(G)$; a source-backed remark fixing maximal versus maximum;
vertex covers and edge covers with $\tau(G)$ and $\rho(G)$; alternating and
augmenting paths; bipartite neighbourhoods, Hall's condition and systems of
distinct representatives; finite integral networks with distinguishable arcs,
integer capacities, feasible integral flows, values, cuts, and labelled
forward/reverse residual arcs; arc-, edge-, and internally vertex-disjoint path
families and their corresponding local separators.

THMS: switching along an augmenting path; the alternating path/even-cycle
decomposition of the symmetric difference of two matchings; **Berge's theorem**;
the strict and tight subinstances in the standard inductive proof of **Hall's
finite marriage theorem**; the finite-family SDR form; Hall's deficiency formula;
the alternating-reachability cover construction and **König's theorem**
$\nu(G)=\tau(G)$ for finite bipartite graphs; **Gallai's edge-cover identity**
$\nu(G)+\rho(G)=|V(G)|$ for graphs without isolated vertices.

For integral networks, the flow-across-a-cut identity and weak duality precede
the residual augmentation and tight-reachable-cut lemmas. They yield a complete
Ford–Fulkerson termination proof and **max-flow min-cut for finite integer
capacities**, with an integral optimum. Integral flow decomposition is proved
before the unit bipartite network identifies matching size with flow value and
vertex-cover size with cut capacity; this records the agreement with the earlier
Hall and König proofs without duplicating either theorem.

**Menger's theorem** is stated with four explicit finite clauses: directed arc,
undirected edge, directed internally vertex-disjoint paths for terminals with no
source-to-sink arc, and undirected internally vertex-disjoint paths for
nonadjacent terminals. The directed arc form follows from unit-capacity flow and
flow decomposition; antiparallel cancellation gives the undirected edge form;
labelled vertex splitting with capacity-one bottlenecks gives the two vertex
forms. The global Whitney corollary states that, for $k\ge1$, a finite graph on
at least $k+1$ vertices is $k$-connected iff every two vertices are joined by
$k$ internally disjoint paths, including an explicit adjacent-terminal case.

B: $P_4$ with a maximal nonmaximum middle-edge matching and its augmenting path;
three left vertices with only two collective neighbours; a three-set SDR; the
triangle with $\nu=1<2=\tau$; a four-vertex integral network with maximum flow
and minimum cut both five; and the three internally disjoint paths and
three-vertex separator between the size-two part of $K_{2,3}$.

DROP/DEFER: Tutte's theorem and the Tutte–Berge formula require nonbipartite
matching structure (factor-critical components or blossom machinery) not built
by the declared prerequisites. The infinite marriage theorem and its exact
choice-strength attribution are deferred to an infinite matching development;
the source pass confirmed an AC-dependent locally finite form but did not
license the prose scaffold's exact BPI claim from the available closure. The
arbitrary-infinite-set Hall denial is deferred with it. Arbitrary rational and
real capacities are not asserted: the page proves the integer form by a
terminating augmenting-path argument, and does not need the irrational
nontermination construction. No `proved_here: false` fallback is necessary for
the finite results retained here.

Traps. Residual arcs are labelled copies of original arcs, so a forward
residual arc and the reverse copy of an antiparallel original arc never collapse
into one arc. A residual augmentation states separately how much cancels a
reverse original flow and how much uses unused forward capacity. In the
undirected edge-Menger reduction, opposing flows are cancelled before path
decomposition so two paths cannot use opposite orientations of one undirected
edge. Vertex Menger excludes adjacent terminals locally; the global Whitney
corollary handles adjacent terminals by applying the local theorem to $G-uv$
and then restoring the edge $uv$. Maximal and maximum remain distinct.

Forward references: NONE.
```

## 2. Mathematical decisions and concrete deferrals

1. **The flow scope is integer-valued.** The network definition takes a finite
   distinguishable arc set with tail and head maps and capacities and flows in
   $\mathbb N$. Each augmentation raises the value by at least one and every
   value is bounded by the finite sum of capacities leaving the source. This is
   the exact termination proof the retained theorem uses.
2. **Residual arcs are labelled.** The published `def-multigraph-loop-and-digraph`
   models a digraph as a subset of $V\times V$ and therefore cannot store two
   different arcs with the same ordered endpoints. A residual network can have
   exactly that situation when antiparallel original arcs are present. Step 5
   must use labelled residual copies $(a,+)$ and $(a,-)$, each remembering its
   original arc, and define residual walks using the copies' tail/head maps.
3. **Hall is combinatorial; Menger is flow-derived.** The prose scaffold's
   stronger demand for a separate induction-on-edges proof of Menger would
   duplicate a long proof after a complete integral-flow backbone. The four
   Menger statements remain explicit and locally proved through reductions.
4. **The edge-cover identity is Gallai's identity.** It is not presented as a
   variant of König's bipartite vertex-cover equality. The no-isolated-vertex
   hypothesis is in its Statement because otherwise an edge cover need not
   exist.
5. **Tutte and Tutte–Berge are deferred, not recorded externally.** The MIT and
   Illinois sources identify the factor-critical/blossom or Edmonds–Gallai
   machinery their proofs consume. That machinery is absent from the published
   dependency closure. These results are valuable but not necessary to prove
   any retained result, so the external-fallback necessity test fails.
6. **Infinite marriage is deferred.** The Pikhurko source gives a locally finite
   bipartite form whose proof relies on AC. The source pass did not verify the
   prose scaffold's exact BPI attribution for the exact proposed theorem. A
   theorem with an uncertain choice-strength label is not included, and the
   `filters-and-ultrafilters` requirement and `rem-choice-ledger` are removed.
7. **Arbitrary capacities are deferred.** Goemans' notes explicitly distinguish
   irrational nontermination for unrestricted Ford–Fulkerson path choices from
   Edmonds–Karp termination. Proving the latter, or importing linear-programming
   existence, would materially expand the page. Integer capacity is sufficient
   for matching and Menger.
8. **No false-statement item is minted.** The useful maximal/maximum and
   bipartite/nonbipartite distinctions are carried by explicit B-page
   counterexamples. The irrational Ford–Fulkerson witness and the infinite Hall
   witness belong with the deferred scopes.

## 3. Source ledger and URL verification

Every URL below returned HTTP 200 during Steps 1–2. They are standard references,
not scraped extraction sources. Step 5 must assign at least one applicable URL
to every `literature-derived` or `ai-altered` item.

- <https://diestel-graph-theory.com/basic.html> — authoritative sixth-edition
  preview and chapter structure for finite graph, matching, covering,
  connectivity, and flow conventions.
- <https://math.mit.edu/~goemans/18433S07/matching-notes.pdf> — augmenting paths,
  switching, Berge's theorem, alternating reachability, König, Hall, and the
  edge-cover exercise.
- <https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/30.%20Matchings%20and%20Hall%27s%20Theorem/Matching%20and%20Hall%27s%20Theorem.pdf>
  — the strict/tight induction proof of finite Hall and Berge's theorem.
- <https://math.mit.edu/~goemans/18433S11/matching-notes.pdf> — exact finite
  Hall statement and the maximum-deficiency formula.
- <https://www.math.iit.edu/~kaul/TeachingFall18/Math553.html> — course ledger
  for Berge, finite Hall, König–Egerváry, edge covers, Gallai, and the local and
  global Menger forms.
- <https://ocw.mit.edu/courses/18-200-principles-of-discrete-applied-mathematics-spring-2024/mit18_200_s24_lec11-12.pdf>
  — finite networks, max-flow min-cut, bipartite matching, König and Hall via
  unit networks.
- <https://math.mit.edu/~goemans/18453S17/flowscuts.pdf> — residual networks,
  augmentation, tight reachable cuts, integrality, the irrational-capacity
  termination warning, bipartite matching and directed arc Menger.
- <https://courses.csail.mit.edu/6.854/21/Notes/n06-flow.html> — flow
  decomposition, cancellation of circulations, augmenting paths and capacity
  bounds.
- <https://courses.grainger.illinois.edu/cs473/sp2013/w/lec/18_handout.pdf> —
  unit integral flows, path decomposition and directed edge Menger.
- <https://www.math.colostate.edu/~hulpke/lectures/m501/notes.pdf> — exact
  nonadjacent-terminal vertex Menger statement and connectivity conventions.
- <https://www.whitman.edu/mathematics/cgt_online/book/section05.07.html> —
  local vertex Menger and the global $k$-connected path characterization.
- <https://ocw.mit.edu/courses/18-997-topics-in-combinatorial-optimization-spring-2004/pages/lecture-notes/>
  — Tutte–Berge, Edmonds–Gallai, blossoms and factor-critical components; used
  to license the concrete deferral, not any retained statement.
- <https://pikhurko.github.io/E/Pikhurko21bcc.pdf> — locally finite infinite
  bipartite matching with an AC-dependent proof; used only to document why the
  infinite theorem and exact choice claim are not silently retained.

Per-item assignment:

- Matching/augmenting items through Berge: Diestel, Goemans 2007, and Gotti.
- Hall definition, reductions, theorem, SDR and deficiency: Gotti and Goemans
  2011; the SDR translation also uses Diestel's matching conventions.
- König and its alternating-reachability lemma: Goemans 2007 and MIT 18.200.
- Gallai edge-cover identity and cover definitions: Goemans 2007 plus the IIT
  course ledger.
- Integral network definition and the four flow lemmas/theorem: MIT 18.200,
  Goemans flows/cuts, and MIT 6.854 notes.
- Bipartite matching flow model: MIT 18.200 and Goemans flows/cuts.
- Local separator definition and four-form Menger theorem: Goemans flows/cuts,
  Illinois CS473, Colorado State, and Whitman.
- Whitney global corollary: Whitman and Colorado State.

The six B-page witnesses are locally formulated and completely checked; their
source component is disclosed as AI-generated rather than disguised as sourced.

## Step 5 authoring record

Authored exactly the 31 manifest items and the two paired page-composition files.
The A-page definitions, remarks, and the standard matching, Hall, König, Gallai,
flow, Menger, and Whitney statements are literature-derived or AI-altered as
recorded in their frontmatter; their supplied proofs are AI-altered adaptations
of the source routes in the ledger. The labelled-arc network definition and the
strict/tight Hall, Ford--Fulkerson, and bipartite-flow formulations are marked
AI-altered because their finite conventions were made explicit for this library.
Each carries an applicable primary course-note URL in `sources.references`.

The six B-page constructions are AI-generated examples or counterexamples with
the matching `generation.role`; their direct verifications are also AI-generated.
They are leaves and have no consumers. I checked their stated finite witnesses
directly (edge incidences, neighbourhood sizes, capacities, and path/separator
sets); this was not an exhaustive enumeration of all finite graphs or networks.

The final proof contract is synchronized to the authored fact labels and
physical proof-step labels. It records direct source excerpts from the cited
items, every actual fact/step use, and the standard boundary worksheet for all
24 proof-bearing manifest items.

### Step 5 gate record

- `reflow.mts`: pass on the 31 owned item files.
- `precheck.mts`: pass on all 24 proof-bearing owned items.
- `proof-contract.mjs --strict`: pass, 24/24 scoped items.
- `finite-smoke.mjs`: pass, no selected bounded checks in the approved contract.
- `depcheck.mjs`, `fwdcheck.mjs`, and `extcheck.mjs`: pass repository-wide.
- `citecheck.mjs`: pass with its existing repository-wide advisory warnings;
  none names a batch-4 item.
- `content-policy.mjs`: pass, 31 scoped items with no errors or warnings.
- `audit-manifest.mjs`: pass; its output records 36 published-backward and 49
  same-batch edges for Step-6 semantic review.
- `prosecheck.mjs --warnings`: pass, 33 owned item/page files with no errors or
  warnings; `git diff --check` also passed on the owned paths.
- `risk-report.mjs`: pass, routing all 24 proof-bearing items for the planned
  independent reading; no review or judge was run in Step 5.

## 4. Component-provenance plan

Every mathematical item below has separate Statement/Construction and
Proof/Verification provenance. Definitions and the remark have
`proof: not-applicable`.

### Literature-derived statement / not-applicable proof

- `def-matching-maximum-perfect-and-matching-number`
- `rem-maximal-versus-maximum-matching`
- `def-vertex-and-edge-covers-and-covering-numbers`
- `def-alternating-and-augmenting-path`
- `def-bipartite-neighbourhood-hall-condition-and-sdr`
- `def-local-path-packings-and-separators`

Rationale: these are standard definitions or the standard maximal/maximum
distinction, with exact sources listed in §3.

### AI-altered statement / not-applicable proof

- `def-integral-network-flow-cut-and-residual-network`

Rationale: the finite-network, cut, flow and residual clauses are all sourced,
but the combined definition materially adapts residual networks to the
library's arc convention by retaining labelled forward and reverse copies.

### Literature-derived statement / AI-altered proof

- `lem-augmenting-path-switching`
- `lem-symmetric-difference-of-two-matchings`
- `thm-berge-augmenting-path-characterisation`
- `thm-hall-marriage-finite-bipartite`
- `cor-hall-sdr-finite-families`
- `cor-hall-deficiency-formula`
- `thm-konig-bipartite-matching-cover`
- `thm-gallai-matching-edge-cover-identity`
- `lem-flow-cut-identity-and-weak-duality`
- `lem-residual-augmentation`
- `lem-no-augmenting-path-gives-tight-cut`
- `lem-integral-unit-flow-decomposition`
- `thm-menger-finite-directed-and-undirected-path-forms`
- `cor-whitney-k-connected-path-characterisation`

Rationale: the exact statements are classical and documented by §3. Step 5
will materially restate and phase-stratify the proofs, including convention and
boundary repairs, so the proofs are `ai-altered`.

### AI-altered statement / AI-altered proof

- `lem-hall-induction-reductions` — isolates the two standard sourced branches
  as a focused reusable lemma.
- `lem-konig-alternating-reachability-cover` — isolates the standard sourced
  alternating-reachability construction.
- `thm-ford-fulkerson-integral-max-flow-min-cut` — restricts and combines the
  sourced termination, integrality and equality claims in the exact finite
  integer convention used here.
- `prop-bipartite-matching-flow-model` — packages the sourced matching/flow and
  cover/cut correspondences together with their agreement with the earlier
  proofs.

These statements remain dependency-eligible because they are source-backed
adaptations, not locally invented results. Their exact source routes and proof
maps are recorded here and in the proof contract.

### AI-generated construction / AI-generated verification

- `cex-maximal-matching-not-maximum-p4` — `generation.role: counterexample`.
- `ex-hall-condition-fails-three-left-two-neighbours` —
  `generation.role: example`.
- `ex-finite-set-system-sdr` — `generation.role: example`.
- `cex-konig-fails-on-triangle` — `generation.role: counterexample`.
- `ex-integral-network-max-flow-min-cut` — `generation.role: example`.
- `ex-k23-three-disjoint-paths-and-separator` — `generation.role: example`.

Each is non-load-bearing and appears only on the B leaf. No planned item
depends on it. The exact symbolic enumeration in its proof contract is the
truth-risk check; no unresolved doubt remained after those checks. Any change
to a witness at Step 5 must repeat the check.

No AI-generated theorem, proposition, definition, lemma, false statement or
remark is planned. No AI-generated Statement/Construction is a dependency
target.

## 5. Published dependency ledger

Every proposed published dependency below was opened from disk, its exact
Definition or Statement was read, and `status: published` was confirmed.

### Provenance-labelled eligible targets

- `def-multigraph-and-digraph-degrees-and-connectivity` —
  `provenance.statement: literature-derived`; its exact indegree/outdegree and
  weak-connectivity conventions were read.
- `def-directed-walk-trail-path-cycle-and-strong-connectivity` —
  `provenance.statement: literature-derived`; its directed path and cycle
  conventions were read.

Neither target is AI-generated.

### Legacy-unclassified: source-checked

- `def-finite-simple-graph`
- `def-graph-adjacency-incidence-neighbourhood-and-degree`
- `def-subgraph-induced-subgraph-and-spanning-subgraph`
- `def-graph-walk-trail-path-and-cycle`
- `def-connected-graph-and-connected-component`
- `def-bipartite-graph`
- `def-standard-complete-bipartite-path-and-cycle-graphs`
- `def-graph-deletion-contraction-minor-and-subdivision`
- `def-vertex-and-edge-connectivity`
- `def-multigraph-loop-and-digraph`

Confidence route: `source-checked`. Their exact on-disk clauses agree with the
Diestel, Colorado State, Whitman, or existing ULETH references used in §3. The
checks fixed the finite-simple default, the length-zero path convention, the
at-least-three cycle convention, the null-graph connectivity convention,
labelled $P_n/C_n$, and the complete-graph exception in $\kappa(G)$.

### Legacy-unclassified: established from knowledge after exact disk review

- `def-finite-cardinality`
- `def-injection-surjection-bijection`
- `thm-induction-principle`
- `def-finite-sum-in-a-commutative-monoid`

Confidence route: `established-from-knowledge`. The exact statements are the
standard finite-cardinality, injection, induction, and enumeration-independent
finite-sum results. The final target is used because flows sum natural-valued
functions over an arbitrary finite arc set; it is homed on the published
`incidence-algebras-and-mobius-inversion` page.

No proposed dependency has `provenance.statement: ai-generated`. No cited
published claim was found to be an obvious falsehood, so no published-dependency
repair is proposed.

## 6. Exact dependency tests

The following tests record what each nonlocal edge must license. A Step-5 fact
must quote the target clause exactly or use a faithful shortening.

| consumer block | dependency clause tested | licensed use |
|---|---|---|
| matching definitions and Berge | finite simple graph; path has distinct vertices; connected components use paths | matchings are finite edge subsets; augmenting objects are genuine paths; symmetric-difference components are paths/cycles |
| Hall and König | bipartition permits empty parts; neighbourhood and degree use adjacency; finite cardinality includes zero | Hall base case, neighbourhood counts, existence of maxima/minima |
| SDR translation | injection means equal values force equal indices | representatives are distinct exactly when the representative map is injective |
| Hall induction | the property-form induction principle includes the zero base | induction is on $|X|\in\mathbb N$ with $X=\varnothing$ explicit |
| Gallai | degree zero is the isolated case; connected component means path component | no-isolate choice of an incident edge; minimal edge-cover components are stars |
| integral flow | finite digraph vocabulary and arbitrary-finite-set monoid sums | finite labelled arc sets and conservation sums, including the empty sum $0$ |
| Menger | directed and undirected path definitions; deletion of vertices/edges | path packings and separator claims use the library's actual deletion and path conventions |
| Whitney corollary | vertex cuts include deletion leaving at most one vertex; $\kappa(K_n)=n-1$ | reverse implication and complete/adjacent endpoint cases are correctly scoped |
| B witnesses | $P_n,C_n,K_{m,n},K_n$ subscripts count vertices | $P_4$, $K_3$, and $K_{2,3}$ are the intended finite graphs |

Every load-bearing dependency is either an earlier item on the A page or one of
the published targets above. The B page is a leaf and no A item depends on a B
item. There are no planned-later, unresolved, forward, or external-fallback
dependencies.

## 7. Proof-obligation and boundary map

The machine-readable worksheet scopes all 24 proof-bearing items. Its numbered
steps are the Step-5 obligations; changing a step or fact label requires changing
the contract in the same edit.

High-risk obligations:

- **Berge:** prove both directions; in the reverse direction, explain why a
  component with more comparison-matching edges is an augmenting path and not a
  cycle.
- **Hall:** handle $X=\varnothing$, $|X|=1$, the strict-subset branch and the
  tight-subset branch; prove Hall for the complementary induced graph by the
  exact union-cardinality calculation.
- **Deficiency:** treat the empty subset, prove $d\ge0$, and distinguish new
  universal right vertices from original right vertices.
- **König:** show the alternating reachable set contains no unmatched right
  vertex, prove the constructed set covers every edge, and count its two parts
  by matched pairs.
- **Gallai:** the no-isolated-vertex hypothesis licenses every selected incident
  edge; prove a minimal edge cover is a star forest before choosing one edge per
  component.
- **Flow-cut identity:** cancellation is over a finite labelled arc set, with
  source and sink the only nonconserved vertices.
- **Residual augmentation:** the bottleneck is positive and nonempty; labelled
  forward and reverse copies must update their original arcs without conflating
  antiparallel originals.
- **Ford–Fulkerson:** terminate by an integer value that rises by at least one
  and is bounded by total source capacity; do not claim polynomial time.
- **Flow decomposition:** remove cycles, reach the sink using conservation, and
  induct on total positive flow; unit capacity is what gives arc-disjointness.
- **Menger:** prove the directed arc form first; cancel opposing bidirected flow
  for the undirected edge form; use capacity $|V|$ on transported arcs and
  capacity one on vertex bottlenecks; show a smaller separator cut exists so a
  minimum cut cannot pay for a transported arc.
- **Whitney:** separate nonadjacent and adjacent terminals. For adjacent $u,v$,
  work in $G-uv$; if a small separator leaves a nontrivial $u$-side, delete that
  separator together with $u$, and if the $u$-side is the singleton, use the
  resulting degree bound to obtain a vertex cut. Restore $uv$ as the final path.

All eight standard boundary cases are disposed of in every contract. In
particular, the empty matching/empty left part/zero flow cases are explicit;
one-edge and one-path endpoints are checked; local vertex Menger excludes direct
terminal adjacency; global Whitney repairs that excluded case; and every
nonempty finite selection names the clause that guarantees it.

There is no supported finite-smoke implementation for matching, flow, or Menger
among the four current checks in `tools/finite-smoke.mjs`, so every
`finite_smoke` array is empty. The six B witnesses instead contain exact finite
or symbolic enumerations in their derivation maps. A passing finite check would
not replace a proof in any event.

Likely high/critical risk items for Alpha's later extra refuter are finite Hall,
Gallai's identity, Ford–Fulkerson/max-flow min-cut, flow decomposition, the
four-form Menger theorem, and Whitney's global iff. `risk_review` is deliberately
absent until an independent Alpha review exists.

## 8. Richness and decomposition pass

The per-pair long-proof decomposition pass was performed.

- Berge is split into augmenting-path switching and matching symmetric
  difference before the iff theorem.
- Hall is split into the strict/tight induction-reduction lemma before the
  induction theorem.
- König is split into the alternating-reachability cover construction before
  the min-max equality.
- Max-flow min-cut is split into the cut identity, residual augmentation, and
  tight reachable cut before Ford–Fulkerson.
- Menger receives flow decomposition as an earlier reusable lemma; its four
  forms remain four explicit clauses under a common statement so their
  reductions can be audited together without pretending four independent
  primary proofs.

The corollary pass added the finite SDR form, Hall deficiency, and Whitney's
global connectivity characterization. The bipartite flow proposition is a
useful agreement result, not a duplicate Hall or König theorem. No cosmetic
microlemma or generated load-bearing bridge was added.

Page counts: 25 A items and 6 B items. The A page is below the 100-item review
ceiling. The pair is rich without padding.

## 9. New-id, order, seam and gate report

Every proposed id was searched as a fixed string in `items/` and
`research/plan-spec.json`; the collision search returned no matches.

The current plan orders were read from disk: A is 213 and B is 214. Direct
requires are changed to:

- `eulerian-and-hamiltonian-graphs` (211), which supplies the labelled directed
  path vocabulary and transitively the finite graph pages;
- `incidence-algebras-and-mobius-inversion` (203), which homes the arbitrary
  finite-set sum definition used by flows.

The stale `chains-antichains-sperner-and-dilworth` and
`filters-and-ultrafilters` requirements are removed because no retained item
depends on them. B requires only its A companion. There is no cross-batch seam.

Forward references: none. External fallbacks: none. Published repair proposals:
none. Dropped results and their exact licensing failures are recorded in §2.

Scoped gate output:

- `node tools/content-policy.mjs --manifest-only research/frontier-8-batch-4.pages.json`:
  `content-policy: 31 scoped item(s), 0 error(s), 0 warning(s)`.
- JSON parse: pass for both machine-readable artifacts.
- Scoped closure check: pass; 31 distinct scoped ids, 24 proof-bearing items,
  exactly 24 contracts, all eight boundary records present on every contract,
  every nonlocal dependency exists as a published item, no cited target has
  `provenance.statement: ai-generated`, every local dependency points backward,
  and no A item depends on a B item.
- Proof-contract internal-structure check: pass; numbered step ids are unique
  per contract, every citation use names a planned step, every cited fact input
  is declared, and all eight boundary names occur exactly once.
- `node tools/prosecheck.mjs research/frontier-8-batch-4.notes.md research/frontier-8-batch-4.pages.json --warnings`:
  2 files checked, 0 errors, 0 warnings; no positional claim contradicts the
  spec.
- Trailing-whitespace scan on the three owned artifacts: pass.
- `validate-plan` and `depsource` cannot authoritatively test a namespaced batch
  before the orchestrator splices it into `plan-spec.json`; no pass is claimed.

## 10. Confidence statement

High confidence: every retained statement is standard and source-documented;
all published dependencies were read from disk; all source URLs above returned
HTTP 200; the residual-arc, empty/zero/one, antiparallel-flow, nonadjacent local
vertex-Menger, and adjacent Whitney cases have explicit routes.

Not claimed: no final prose has been authored or prechecked; the proof contracts
are plans rather than completed proofs; no paired judge or Alpha audit has run;
the exact BPI strength of the deferred infinite marriage theorem was not
verified and is therefore not asserted; no arbitrary-capacity flow theorem is
claimed.

## 11. Post-adjudication Batch-4 repair record

The authorized repair is recorded in
`research/frontier-8-batch4-repair.md`. It changes only the finite tagged
incidence-graph/SDR definition and corollary, the Menger theorem,
the Whitney connectivity corollary, the König triangle counterexample, and
the flow-cut lemma display, and the corresponding proof-contract entries. The repair keeps the original
provenance labels and introduces no new generated load-bearing dependency.

Scoped reflow, precheck, real-KaTeX render parsing, prose checks, and strict
proof-contract checks were run after the edits. No new judge or author audit
was run. The receipt records the remaining nonfatal and global-gate handoffs.
