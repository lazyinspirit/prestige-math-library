# Frontier 7 batch 1 — Beta Steps 1–2 notes

Scope: exactly two A/B pairs:

- `normal-subgroups-and-quotient-groups` / `normal-subgroups-and-quotient-groups-examples`
- `eulerian-and-hamiltonian-graphs` / `eulerian-and-hamiltonian-graphs-examples`

No item or page has been authored. The sibling JSON manifest is the scope of
record, and the sibling proof-contract file is the Step-5 obligation map.

## 1. Applyable prose-scaffold amendments

### 1.1 `research/plan-algebra-track.md`, replace AA-3

Exact old text:

```text
## AA-3. Normal Subgroups and Quotient Groups  (order 30)

`requires`: `cosets-and-lagranges-theorem`

**Normal subgroup**; the equivalent characterisations ($gNg^{-1} = N$,
$gNg^{-1} \subseteq N$ for all $g$, every left coset is a right coset); every
subgroup of an abelian group is normal; index 2 implies normal; the centre; the
commutator subgroup; **the quotient group $G/N$** with the coset product
(well-definedness #3, the central obligation of this page: the product is
independent of representatives **iff** $N$ is normal, and both directions are
proved); the canonical projection $\pi: G \to G/N$; the order of $G/N$.

B page: $\mathbb{Z}/n\mathbb{Z}$ as a quotient; a non-normal subgroup with an
explicit pair of representatives whose products land in different cosets, which is
the counterexample that makes #3 mean something; $S_3 / A_3$.

Traps. The failure direction of #3 is what justifies the definition, so it is a
numbered item, not a remark. Do not assume $N$ normal while proving that
normality is necessary. The quotient set $G/N$ itself cites
`def-equivalence-relation` and `lem-equivalence-classes-partition` from AA-1
(batch-1 audit note 1), not machinery of its own.
```

Exact new text:

```text
## AA-3. Normal Subgroups and Quotient Groups  (order 34)

`requires`: `cosets-and-lagranges-theorem`

DEFS: a normal subgroup; the normal closure of a subset; the centre $Z(G)$;
commutators $[g,h]=ghg^{-1}h^{-1}$ and the commutator subgroup $[G,G]$; the
quotient group $G/N$ with coset product $(gN)(hN)=ghN$.

THMS: the equivalent conjugate, containment, and left/right-coset
characterisations of normality; every subgroup of an abelian group is normal;
every index-two subgroup is normal; intersections of nonempty families of
normal subgroups are normal; the centre and commutator subgroup are normal;
coset multiplication is well defined iff the subgroup is normal, with both
directions proved without assuming the conclusion; the quotient group laws;
the canonical projection is a surjective homomorphism; $|G/N|=[G:N]$ and, for
finite $G$, $|G/N|=|G|/|N|$; $G/N$ is abelian iff $[G,G]\subseteq N$; every
quotient of an abelian group is abelian.

**Spine seam:** the A page contains the proved proposition that, for every
$n\in\mathbb N$ (including the library's $n=0$ and $n=1$ conventions), the
published congruence-class group $(\mathbb Z/n,+)$ is the quotient
$(\mathbb Z,+)/n\mathbb Z$. This is on the A spine because B pages are leaves;
it must agree with the existing modulo-$n$ definitions and theorem rather than
minting a competing construction. Do not use isomorphism terminology before
the next page defines it.

B: an explicit nonnormal two-element subgroup of
$\operatorname{Sym}(\{1,2,3\})$ for which coset multiplication changes with
representatives; the explicit three-cycle subgroup and its two-element
quotient (without the not-yet-defined notation $S_3/A_3$); the four cosets of
$4\mathbb Z$ worked against the A-page proposition; the two extreme quotients
$G/\{e\}$ and $G/G$; the centre and commutator subgroup of an abelian group.

Traps. The necessity direction of coset-product well-definedness is a numbered
proof, not a remark. The definition of quotient group is justified by both the
iff theorem and the quotient-law theorem. Composition in the symmetric-group
examples follows the published convention that the right-hand factor acts
first. The normal-closure definition is justified by the preceding
intersection lemma. The commutator convention must be displayed because some
sources use its inverse.
```

This replacement incorporates the still-correct seam amendment in
`research/level8-algebra-aborted.notes.md` §1.5. It also removes the stale claim
that the quotient set must cite equivalence-relation machinery: the published
coset partition and equality lemmas already supply the exact local quotient-set
facts needed here.

### 1.2 `research/plan-combinatorics-and-categories.md`, replace GT-3

Exact old text:

```text
## GT-3. Eulerian Circuits, Hamiltonian Cycles and Tournaments  (order 193, combinatorics)

`requires`: `trees-forests-and-spanning-trees` (191)

DEFS: Eulerian trail and circuit; Hamiltonian path and cycle; tournament;
Hamiltonian-connected; the closure of a graph (for Bondy–Chvátal).

THMS: **Euler's theorem** (landmark): a connected graph has an Eulerian circuit
iff every degree is even, and an Eulerian trail iff exactly two degrees are odd
— with the directed version stated separately; Hierholzer's construction as the
existence proof; **Dirac's theorem** ($\delta \ge n/2$, $n \ge 3$ $\Rightarrow$
Hamiltonian, landmark); **Ore's theorem** (the degree-sum condition, which
implies Dirac — state the implication as an item, so the two are not two
notions); Bondy–Chvátal via the closure; every tournament has a Hamiltonian
path (Rédei, an induction); every strongly connected tournament is Hamiltonian
(Camion) — keep if the page is under the cap; a Hamiltonian graph is
2-connected.

FS: a connected graph with all degrees even has a Hamiltonian cycle; Dirac's
bound $n/2$ can be lowered to $n/2 - 1$ (witness: two disjoint copies of
$K_{n/2}$, and the near-extremal witness is the point); every graph with a
Hamiltonian path has a Hamiltonian cycle; Eulerian and Hamiltonian are dual
notions.

B: the Königsberg bridges as the historical instance, stated as a multigraph
degree computation; the Petersen graph is not Hamiltonian (a real, finite case
analysis — **keep only if it can be written as a bounded number of numbered
steps**; if not, DROP with a note, because a hand-waved case check is worse than
no item); $K_{3,3}$ is Hamiltonian; a graph satisfying Ore but not Dirac.

CEX: an Eulerian non-Hamiltonian graph and a Hamiltonian non-Eulerian one; a
graph just below Dirac's bound with no Hamiltonian cycle.

Traps. (i) Hierholzer's argument is a construction and every step must be a
numbered step; "keep walking until stuck" is not one. (ii) There is no
characterisation of Hamiltonicity, and the page must say so plainly, in the
non-decaying form (what is proved here), not as a claim about mathematics at
large. (iii) The Petersen item is the page's size risk.
```

Exact new text:

```text
## GT-3. Eulerian Circuits, Hamiltonian Cycles and Tournaments  (order 211, combinatorics)

`requires`: `trees-forests-and-spanning-trees` (209)

DEFS: multigraph degree with loops counted twice; digraph indegree and
outdegree with a loop counted once in each; underlying/weak connectivity;
directed walks, trails, paths and cycles and strong connectivity; Euler trails
and circuits in multigraphs and digraphs; Hamilton paths and cycles,
Hamiltonian and Hamilton-connected graphs; the Bondy–Chvátal closure; finite
tournaments.

THMS: the two focused Hierholzer lemmas (a maximal unused-edge trail closes,
and edge-disjoint closed trails sharing a vertex splice); **Euler's theorem**
for connected finite undirected multigraphs, proved constructively; the exact
trail corollary: an Euler trail exists iff there are **zero or two** odd-degree
vertices, and an open Euler trail exists exactly in the two-odd-vertex case;
the directed Euler-circuit theorem for finite digraphs without isolated
vertices: weak connectivity plus equality of indegree and outdegree at every
vertex; the Hamilton-cycle vertex-deletion component bound and the corollary
that a Hamiltonian graph on at least three vertices is 2-connected; the
Bondy–Chvátal edge-addition lemma, closure well-definedness, and closure
theorem; **Ore's theorem**; the implication Dirac condition => Ore condition;
**Dirac's theorem**; **Rédei's theorem** by induction; the tournament
cycle-insertion lemma; **Camion's theorem** for strongly connected tournaments
on at least three vertices.

B: the Königsberg bridges degree obstruction; two triangles sharing one vertex
as Eulerian but non-Hamiltonian; $K_4$ as Hamiltonian but non-Eulerian; $P_3$
as having a Hamilton path but no Hamilton cycle; two disjoint copies of $K_m$
showing sharpness one below Dirac's even-order threshold; an explicit Hamilton
cycle in $K_{3,3}$; $K_4$ plus a vertex adjacent to two clique vertices as Ore
without Dirac; the transitive tournament; the directed three-cycle tournament.

DROP: the Petersen non-Hamiltonicity item. No bounded, dependency-closed proof
was located that is short enough for this pair, and a hand-waved finite case
check is not licensed. It can be restored on a later examples page with an
explicit case decomposition.

Traps. Euler trail includes the closed case, so "iff exactly two odd degrees"
is false; use zero or two, and reserve exactly two for an open trail. Do not
confuse weak connectivity with strong connectivity in the directed Euler
theorem. The local cycle convention has at least three distinct vertices, so
Camion's theorem is stated for order at least three. Every Hierholzer extension
and splice is a numbered constructive step. No false-statement items are
created: the scaffold's false sentences are removed rather than promoted into
AI-generated claims. There is no characterisation of Hamiltonicity among the
results proved on this page.
```

Fatal scaffold repairs in this amendment:

- “Eulerian trail iff exactly two degrees are odd” omitted the closed case. The
  correct criterion is zero or two; exactly two characterises the open case.
- “Ore … implies Dirac” reversed the logical implication. Dirac's
  minimum-degree hypothesis implies Ore's degree-sum hypothesis.
- The four proposed false-statement sentences were actual falsehoods, not safe
  teaching prompts. They are removed, while their useful distinctions are
  supplied by checkable B-page witnesses.

## 2. Step-5 authoring instructions and convention lock

1. Preserve the exact dependency clauses and numbered step identifiers in
   `research/frontier-7-batch-1.proof-contracts.json`, or update the contract in
   the same change if the final wording requires a different exact clause.
2. `def-normal-closure` has `justified_by:
   [lem-intersection-of-normal-subgroups]`. `def-quotient-group` has
   `justified_by: [thm-coset-multiplication-well-defined-iff-normal,
   thm-quotient-group-laws]`. `def-bondy-chvatal-closure` has
   `justified_by: [lem-bondy-chvatal-closure-well-defined]`.
3. Use the commutator convention $[g,h]=ghg^{-1}h^{-1}$. The Encyclopedia of
   Mathematics page uses the inverse convention in one displayed description;
   state this convention rather than silently switching.
4. In `prop-integers-modulo-n-as-a-quotient-group`, use the published
   congruence-class equality and addition exactly. Cover $n=0$ and $n=1$.
   Explain equality of the underlying classes and operations directly; do not
   invoke the not-yet-defined notion of group isomorphism and do not cite a B
   page.
5. In permutation calculations, the published `def-symmetric-group` convention
   composes the right-hand factor first.
6. Multigraph loops count twice toward undirected degree. A directed loop adds
   one to indegree and one to outdegree. Weak connectivity is connectivity of
   the underlying undirected multigraph. Under the local connectivity
   convention the null graph is not connected and $K_1$ is connected.
7. The undirected Euler theorem includes the edgeless $K_1$, whose length-zero
   closed trail is an Euler circuit. The directed theorem deliberately uses the
   standard “no isolated vertices” formulation, so its constructive proof has
   an initial arc.
8. Hamilton and directed cycles have at least three distinct vertices under the
   published walk/cycle conventions. This is why Camion has the explicit
   at-least-three hypothesis even though some sources treat singleton cases by
   a different convention.
9. The Bondy–Chvátal edge lemma must prove both directions. Closure
   well-definedness must prove independence from edge-addition order, not merely
   termination. The proof contract records the persistence-and-induction route.
10. For the two Hierholzer theorems, enumerate extension, closure, location of
    an unused edge at a current-trail vertex, residual even-degree or balanced
    degree after deleting a closed trail, splicing, and finite termination. In
    the directed proof, if the first unused boundary arc points into the current
    trail, residual balance is what supplies an unused outgoing arc at that
    splice vertex. “Continue until done” is not an acceptable proof step.

## 3. Web source ledger

All URLs below were opened successfully during Steps 1–2. Step 5 must put the
applicable URL(s) in each non-generated item's `sources.references`; this ledger
records support, not copied prose.

### Normal subgroups and quotients

- <https://encyclopediaofmath.org/wiki/Normal_subgroup> — normal subgroup,
  conjugation/coset characterisations, quotient-group setting.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups>
  — factor groups, normality, coset multiplication, elementary examples.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/06%3A_Products_and_Quotients_of_Groups/6.02%3A_Quotients_of_Groups>
  — quotient construction, normality, projection, extreme quotient examples.
- <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/10%3A_Normal_Subgroups_and_Factor_Groups/10.04%3A_Exercises>
  — centre normality, commutator subgroup normality, and the commutator
  criterion for an abelian quotient.
- <https://encyclopediaofmath.org/wiki/Characteristic_subgroup> — centre and
  commutator subgroup as characteristic, hence normal.
- <https://encyclopediaofmath.org/wiki/Commutator_subgroup> — commutators,
  derived subgroup, and abelian quotient criterion. Convention warning: compare
  the displayed commutator order with the library convention.
- <https://encyclopediaofmath.org/wiki/HNN-extension> — the standard normal
  closure description as the intersection of normal subgroups containing a
  prescribed set.

Per-item URL assignment:

- `def-normal-subgroup`, `thm-normal-subgroup-characterisations`,
  `cor-subgroups-of-abelian-groups-are-normal`,
  `thm-index-two-subgroup-is-normal`,
  `thm-coset-multiplication-well-defined-iff-normal`,
  `thm-quotient-group-laws`, `prop-canonical-quotient-map`, and
  `cor-order-of-a-quotient-group`: Normal subgroup EoM plus one of the two
  quotient-textbook URLs above.
- `lem-intersection-of-normal-subgroups` and `def-normal-closure`: Normal
  subgroup EoM and HNN-extension EoM.
- `def-center-of-a-group`, `lem-center-is-normal`,
  `def-commutator-and-commutator-subgroup`,
  `lem-commutator-subgroup-is-normal`,
  `thm-quotient-abelian-iff-contains-commutator-subgroup`, and
  `cor-quotient-of-an-abelian-group-is-abelian`: Judson exercises,
  Characteristic subgroup EoM, and Commutator subgroup EoM as applicable.
- `def-quotient-group`, `prop-integers-modulo-n-as-a-quotient-group`, and all
  five normal/quotient B-page items: the two quotient-textbook URLs, with the
  Normal subgroup EoM page where normality is used.

### Eulerian, Hamiltonian, and tournament results

- <https://opentext.uleth.ca/Combinatorics/sect_Euler-ToursTrails.html> — exact
  undirected Euler-circuit and Euler-trail criteria and Hierholzer construction.
- <https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html> — Hamilton
  definitions, the vertex-deletion obstruction, Bondy–Chvátal edge lemma and
  closure theorem, Ore, and Dirac.
- <https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-Directed.html> —
  directed degrees, walks, trails, paths, cycles, and connectivity vocabulary.
- <https://math.mit.edu/~rstan/algcomb/algcomb.pdf> — directed Euler theorem:
  after excluding isolated vertices, connected underlying graph plus balanced
  indegree/outdegree.
- <https://encyclopediaofmath.org/wiki/Tournament> — tournaments, Rédei's
  Hamilton-path theorem, and the strong-tournament Hamilton-cycle theorem.
- <https://www.maths.ed.ac.uk/~v1ranick/papers/wilsongraph.pdf> — scholarly
  graph-theory text supporting Rédei and Camion.

Per-item URL assignment:

- The three degree/directed/Euler definitions, the two Hierholzer lemmas,
  `thm-eulers-euler-circuit-characterisation`,
  `cor-euler-trail-characterisation`, and the Königsberg example: the ULETH
  Euler-tour page; directed definitions additionally use the ULETH directed
  page.
- `thm-directed-euler-circuit-characterisation`: MIT's text plus the ULETH
  directed page. Convention warning: record explicitly the library's weak
  connectivity and isolated-vertex conventions.
- The Hamilton definition, deletion theorem and corollary, Bondy–Chvátal
  definition/lemmas/theorem, Ore, Dirac, and their source-derived proof helpers:
  the ULETH Euler–Hamilton page.
- `def-tournament`, Rédei, cycle insertion, and Camion: Tournament EoM and the
  Wilson text. Convention warning: the library's directed cycle has at least
  three vertices, so Camion is restricted to order at least three.

The eight generated finite witnesses listed in §4 have no literature claim in
their provenance; their statements and checks are disclosed as AI-generated.

## 4. Expected authorship ledger

Every planned mathematical-content id is classified here. Step 5 must add the
corresponding reader-facing tag.

### `literature-derived`

These definitions are standard statements to be adapted only
cosmetically from the identified sources:

- `def-normal-subgroup`
- `def-normal-closure`
- `def-center-of-a-group`
- `def-commutator-and-commutator-subgroup`
- `def-quotient-group`
- `def-multigraph-and-digraph-degrees-and-connectivity`
- `def-directed-walk-trail-path-cycle-and-strong-connectivity`
- `def-euler-trail-and-circuit`
- `def-hamilton-path-cycle-and-hamilton-connected`
- `def-bondy-chvatal-closure`
- `def-tournament`

### `ai-altered`

These items are established, source-documented results or witnesses,
but Step 5 will materially formulate their local statements, proofs, or worked
calculations:

- `thm-normal-subgroup-characterisations`
- `cor-subgroups-of-abelian-groups-are-normal`
- `thm-index-two-subgroup-is-normal`
- `lem-intersection-of-normal-subgroups`
- `lem-center-is-normal`
- `lem-commutator-subgroup-is-normal`
- `thm-coset-multiplication-well-defined-iff-normal`
- `thm-quotient-group-laws`
- `prop-canonical-quotient-map`
- `cor-order-of-a-quotient-group`
- `thm-quotient-abelian-iff-contains-commutator-subgroup`
- `cor-quotient-of-an-abelian-group-is-abelian`
- `prop-integers-modulo-n-as-a-quotient-group`
- `cex-coset-multiplication-by-a-nonnormal-subgroup`
- `ex-three-cycle-quotient-of-s3`
- `ex-z-mod-four-as-a-quotient-group`
- `ex-trivial-and-total-quotients`
- `ex-center-and-commutator-subgroup-of-an-abelian-group`
- `lem-hierholzer-maximal-unused-edge-trail-closes`
- `lem-splicing-edge-disjoint-closed-trails`
- `thm-eulers-euler-circuit-characterisation`
- `cor-euler-trail-characterisation`
- `thm-directed-euler-circuit-characterisation`
- `thm-hamilton-cycle-vertex-deletion-bound`
- `cor-hamiltonian-graph-is-two-connected`
- `lem-bondy-chvatal-edge-addition`
- `lem-bondy-chvatal-closure-well-defined`
- `thm-bondy-chvatal-closure-theorem`
- `thm-ores-hamiltonicity-theorem`
- `lem-dirac-condition-implies-ore-condition`
- `cor-diracs-hamiltonicity-theorem`
- `thm-redei-tournament-hamilton-path`
- `lem-tournament-cycle-insertion`
- `thm-camion-strong-tournament-hamiltonian`
- `ex-konigsberg-bridges-has-no-euler-trail`

The three focused lemmas used for proof decomposition are source-backed proof
ingredients, not invented infrastructure: the two Hierholzer lemmas are
licensed by the ULETH constructive proof and the tournament insertion lemma by
the cited tournament proofs.

### `ai-generated`

The following items are permitted, non-load-bearing, directly checkable examples
or counterexamples. Step 5 must include `generation.role: example` or
`generation.role: counterexample` as appropriate. No other planned item may
depend on them.

- `cex-eulerian-not-hamiltonian` — two explicit triangles share one vertex;
  check degrees, an explicit Euler circuit, and the singleton deletion.
- `cex-hamiltonian-not-eulerian` — check the explicit four-cycle in $K_4$ and
  all four degrees equal to three.
- `cex-hamilton-path-not-hamilton-cycle` — check the natural $P_3$ path and the
  two components after deleting its middle vertex.
- `cex-dirac-threshold-sharp` — for symbolic $m\ge2$, check $n=2m$,
  $\delta=m-1=n/2-1$, and disconnection; test the endpoint $m=2$ explicitly.
- `ex-k33-is-hamiltonian` — verify the six displayed alternating edges in the
  proposed Hamilton cycle.
- `ex-ore-condition-without-dirac-condition` — enumerate the only two nonedges,
  check degree multiset $2,3,3,4,4$, and display a five-cycle.
- `ex-transitive-tournament-has-no-directed-cycle` — every arc strictly
  increases the finite vertex label, so return is impossible; the increasing
  order is a Hamilton path.
- `ex-directed-three-cycle-tournament` — enumerate its three arcs, all six
  ordered-pair reachability checks, and its displayed Hamilton cycle.

Truth-risk disposition: each witness has a complete elementary symbolic or
finite check in its proof contract. No concrete suspicion remained after those
checks, so no web counterexample search was triggered. Any Step-5 change to a
witness must repeat the check rather than inherit this disposition.

No AI-generated theorem, proposition, definition, false statement, or remark
is planned. No AI-generated item is load-bearing.

## 5. Published dependency ledger

All 31 external item ids below were opened from disk, their relevant
Definition/Statement was read, and `status: published` was confirmed. They have
no `authorship` tag and therefore remain `legacy-unclassified`; this scaffold
does not backfill provenance.

`source-checked` (exact subject-specific statement checked against the source
URLs in §3 as well as on disk):

- `def-coset`
- `lem-coset-membership-and-equality`
- `lem-coset-partition`
- `lem-left-and-right-cosets-equinumerous`
- `def-index`
- `thm-lagrange`
- `def-group-homomorphism`
- `def-multigraph-loop-and-digraph`
- `def-graph-adjacency-incidence-neighbourhood-and-degree`
- `def-graph-walk-trail-path-and-cycle`
- `def-connected-graph-and-connected-component`
- `def-standard-complete-bipartite-path-and-cycle-graphs`
- `def-graph-deletion-contraction-minor-and-subdivision`
- `def-vertex-and-edge-connectivity`

`established-from-knowledge` after exact on-disk statement review (foundational
group, finite-set, integer, and induction facts):

- `def-group`
- `def-subgroup`
- `lem-group-inverse-laws`
- `def-generated-subgroup`
- `lem-intersection-of-subgroups`
- `def-injection-surjection-bijection`
- `def-order-in-a-group`
- `def-symmetric-group`
- `lem-symmetric-group-is-a-group`
- `thm-int-comm-ring`
- `def-congruence-modulo-an-integer`
- `def-integers-modulo-n`
- `def-addition-and-multiplication-modulo-n`
- `thm-integers-modulo-n-basic-algebra`
- `def-finite-simple-graph`
- `def-finite-cardinality`
- `thm-induction-principle`

Every dependency is either earlier on its own new A page or published on disk.
There are no planned-later or unresolved references, no cross-batch seam, and
no B-page item is used as a dependency. `thm-int-comm-ring` and
`thm-induction-principle` are published files but currently have no page home in
`research/plan-spec.json`; this is reported as a plan-spec hygiene issue, not
silently presented as an unresolved mathematical dependency.

No cited published claim was found to be an obvious falsehood, so this batch
proposes no published-dependency repair.

## 6. Proof closure, boundaries, and risk notes

- `research/frontier-7-batch-1.proof-contracts.json` scopes all 43
  proof-bearing items and contains exactly 43 contracts.
- Every contract assigns each substantive move to a numbered step, names the
  exact dependency clause intended for each fact citation, disposes of all
  eight standard boundary cases, and records no unsupported external fact.
- There is currently no relevant implementation among the four bounded checks
  supported by `tools/finite-smoke.mjs`; `finite_smoke` is therefore empty.
  The eight generated graph witnesses instead have explicit finite checks in
  their derivation and boundary maps. Passing such checks will not replace the
  written proof.
- High-risk items for Alpha's refuter include both quotient well-definedness
  directions, quotient-law construction, the commutator quotient iff, both
  Euler iff theorems, the directed Euler iff, Bondy–Chvátal edge preservation
  and closure confluence, and Camion's longest-cycle argument. Alpha must add
  `risk_review` after inspecting the authored proof; Beta does not self-certify
  that review.
- Definition justification paths are fixed in §2 and must appear in final
  frontmatter. The definition-before-justification ordering is intentional and
  the `justified_by` edges point to later items on the same A page.

## 7. New-id collision and capacity report

Every one of the 54 proposed item ids was searched as a fixed string across
`items/` and `research/plan-spec.json`; there were no matches. The search
produced no collision output.

Page counts:

| page | kind | items |
|---|---:|---:|
| `normal-subgroups-and-quotient-groups` | A | 18 |
| `normal-subgroups-and-quotient-groups-examples` | B | 5 |
| `eulerian-and-hamiltonian-graphs` | A | 22 |
| `eulerian-and-hamiltonian-graphs-examples` | B | 9 |

The batch has exactly two A/B pairs, satisfying the permanent maximum of two
pairs per Beta batch. Both A pages are well below the 100-item review ceiling.
The item lists include focused proof decomposition, useful corollaries, and
checkable examples without padding.

## 8. Step-2 disposition

- Direct prerequisites are published: `cosets-and-lagranges-theorem` and
  `trees-forests-and-spanning-trees`.
- Forward references: none.
- External fallbacks: none.
- Published falsehood repair proposals: none.
- Cross-batch dependencies: none.
- Dropped material: Petersen non-Hamiltonicity, with the licensing reason in
  amendment 1.2.
- Scaffold errors repaired: Euler-trail closed case, Ore/Dirac implication
  direction, four false teaching prompts, stale page orders, the $\mathbb Z/n$
  B-leaf seam, and Camion's convention-sensitive low-order cases.

## 9. Step-5 authoring ledger

All 54 scoped mathematical items and the four matching page files were authored
as draft/session content. The reader-facing provenance assignments exactly match
the ledger in §4: 11 standard definitions are `literature-derived`, 35
source-backed but locally proved or materially formulated items are
`ai-altered`, and the eight finite B-page witnesses are `ai-generated` with
`generation.role: example` or `counterexample`. Every mathematical item records
at least one source URL. No generated item is a dependency target.

The following final-text changes from the Step-2 scaffold were necessary:

- `def-normal-closure`: retained
  `lem-intersection-of-normal-subgroups` as a genuine backward dependency and
  set `justified_by: []`. The lemma is independently earlier and does not depend
  on this definition, so a forward justification edge would invert the actual
  logical relation.
- `thm-normal-subgroup-characterisations`: removed the unused
  `lem-coset-membership-and-equality` dependency. The final three-condition
  proof uses the normal-subgroup definition and group inverse laws directly.
- `thm-quotient-group-laws`: removed the unused `lem-group-inverse-laws`
  dependency; the coset inverse check uses only the ordinary group axioms.
- `cor-order-of-a-quotient-group`: qualified the title and statement to say
  $|G/N|=[G:N]$ when the index is finite, and $|G/N|=|G|/|N|$ when $G$ is
  finite. This avoids asserting an order equality where the published
  `def-order-in-a-group` does not define infinite group order.
- `prop-integers-modulo-n-as-a-quotient-group`: added
  `lem-nat-embeds-int`, because the final statement explicitly views
  $n\in\mathbb N$ inside $\mathbb Z$ and uses multiplication there.
- `ex-z-mod-four-as-a-quotient-group`: added
  `thm-standard-representatives-modulo-n`, because completeness and uniqueness
  of the four displayed representatives cannot be inferred from the three
  original baseline dependencies alone.
- `cex-eulerian-not-hamiltonian` and `cex-hamiltonian-not-eulerian`: added
  `def-multigraph-loop-and-digraph` and made the canonical simple-to-multigraph
  conversion explicit before invoking the multigraph Euler theorem.
- `cex-dirac-threshold-sharp`: added
  `def-hamilton-path-cycle-and-hamilton-connected`, which is the dependency
  that actually states that a Hamiltonian graph is connected.

No published dependency was modified. No additional item id was introduced,
and no title or mathematical claim beyond the order qualification above was
changed from the approved Step-3 plan.

## 10. Step-5 gate receipt

- Precheck: 43 proof-bearing items checked, 43 passed, 0 failed. The 11
  definitions record `verification.precheck: n/a`; every proof-bearing item
  records `verification.precheck: pass` only after this successful run.
- Proof contract: strict mode checked all 43 contracts with 0 errors and 0
  warnings. Citations and derivation maps were synchronized to the exact final
  Facts & Assumptions labels and numbered steps.
- Content policy: 54 scoped items, 0 errors, 0 warnings. The two-pair batch cap,
  authorship disclosure, generation containment, and source-URL requirements
  all pass.
- Prose check: 58 files, 0 errors, 0 warnings.
- Citation check: 54 items, no recognized elementary move lacks a dependency
  that states it.
- Render check: 58 files, no wikilink-in-math, delimiter, multiline-display, or
  KaTeX parse failures.
- Finite smoke: 0 errors and 0 registered bounded checks. The eight generated
  witnesses instead retain complete symbolic or finite enumerations in their
  written verifications and contracts.
- Forward-reference and external-result repository gates pass. The repo-wide
  dependency gate reports no batch-1 error; its only six hard errors are YAML
  title escapes in two concurrently authored Tychonoff B items outside this
  batch. Those shared-worktree errors were not edited here.

No judge was run. Risk review, independent Alpha audit, and paired Step-7 judge
verdicts remain deliberately unset for the next workflow stages.
