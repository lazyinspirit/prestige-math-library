# Group theory track: finite, combinatorial, geometric, profinite, and cohomological group theory

Run `subjects-01`, track `group-theory`, wave 2. Owner commission 2026-08-13:
*amend and expand the prose scaffolds to enrich future mathematical content*.

This file is a **prose scaffold only**. It authors no item, changes no live plan,
and runs no build or audit gate. Relative labels `GT-1`, `GT-2`, ... control
dependency order within this proposal; the orchestrator assigns absolute page
orders. Every proposed B page has id `<A-page-id>-examples`, requires only its
A page, and is a leaf.

The seam boundary is strict. The published group band and the abstract-algebra
expansion supply elementary group theory, Sylow theory, the upper and lower
central series, nilpotence, the Fitting subgroup, semidirect products, and
ordinary representation theory. This file begins above those results. It does
not use “planned” as a synonym for “published”: the relevant abstract-algebra
pages have empty `items` arrays and remain named external requirements until a
future build authors them.

---

## 0. Summary for the orchestrator

**Track `group-theory`, wave 2, run `subjects-01`; prose scaffold complete.**
Twenty-three A/B pairs are proposed in four placement blocks.
Every A-page inventory is below the owner's 60-item ceiling. The cohomological
block is deliberately placed after homological algebra rather than pointed
backward from the earlier structure block.

### Pairs scaffolded

| label | proposed A-page id | block | exact A-page items, including `fs-` |
|---|---|---|---:|
| `GT-1` | `frattini-subgroups-and-the-burnside-basis-theorem` | structure, after abstract-algebra AG-4 | 25 |
| `GT-2` | `extraspecial-p-groups-and-central-products` | structure | 24 |
| `GT-3` | `blocks-primitivity-and-multiple-transitivity` | structure | 28 |
| `GT-4` | `socles-and-the-onan-scott-landscape` | structure | 21 |
| `GT-5` | `subgroups-of-free-groups-and-schreier-rewriting` | combinatorial structure | 22 |
| `GT-6` | `hnn-extensions-and-brittons-lemma` | combinatorial structure | 19 |
| `GT-7` | `decision-problems-for-finitely-presented-groups` | combinatorial structure | 26 |
| `GT-8` | `small-cancellation-and-dehn-algorithms` | combinatorial structure | 27 |
| `GT-9` | `group-extensions-complements-and-schur-zassenhaus` | structure | 24 |
| `GT-10` | `cayley-graphs-word-metrics-and-quasi-isometry` | geometric, after the fundamental-group applications | 28 |
| `GT-11` | `geometric-actions-svarc-milnor-and-growth` | geometric | 26 |
| `GT-12` | `hyperbolic-spaces-and-hyperbolic-groups` | geometric | 31 |
| `GT-13` | `amenable-groups-and-folner-criteria` | geometric | 27 |
| `GT-14` | `simplicial-trees-and-group-actions` | geometric | 25 |
| `GT-15` | `graphs-of-groups-and-bass-serre-theory` | geometric | 26 |
| `GT-16` | `inverse-systems-profinite-groups-and-completion` | topological | 33 |
| `GT-17` | `pro-p-groups-and-the-p-adic-integers` | topological | 25 |
| `GT-18` | `modular-representations-and-projective-covers` | finite representation continuation | 32 |
| `GT-19` | `brauer-characters-and-decomposition-matrices` | finite representation continuation | 27 |
| `GT-20` | `the-finite-simple-group-classification-landscape` | finite-group survey | 24 |
| `GT-21` | `crossed-homomorphisms-complements-and-first-cohomology` | after homological algebra HA-12 | 21 |
| `GT-22` | `second-cohomology-and-abelian-kernel-extensions` | cohomological continuation | 25 |
| `GT-23` | `schur-multipliers-and-universal-central-extensions` | cohomological continuation | 32 |

### Full texts obtained and source corpus

The following complete, searchable texts were obtained from their authors' or
institutions' sites, not reconstructed from snippets.

- J. S. Milne, *Group Theory*, version 4.01 (2025), 139 pages, complete
  first-year graduate text and contents, CC BY-NC-SA 4.0:
  <https://www.jmilne.org/math/CourseNotes/GT.pdf>.
- Clara Löh, *Geometric Group Theory: An Introduction* (2015 course version),
  264 pages, complete author-hosted graduate text and contents:
  <https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf>.
- David A. Craven, *The Theory of p-Groups* (2008), 48 pages, complete
  author-hosted specialist lecture notes and contents:
  <https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf>.
- Gareth Wilkes, *Profinite Groups and Group Cohomology* (2021), 104 pages,
  complete Cambridge Part III lecture notes:
  <https://www.dpmms.cam.ac.uk/~grw46/LectureNotes2021.pdf>.

Further complete texts obtained and harvested were van Beek's *Topics in
Finite $p$-Groups*; Cameron's *Notes on Classical Groups*; Burness's and
Jones's permutation-group notes; Baumslag's,
Miller's, and Touikan's combinatorial-group texts; Sisto's and Hamann's
geometric-group notes; Manning's Bass--Serre notes; Webb's 294-page *Course in
Finite Group Representation Theory*; Ciurca's and Isaacs's modular-character
notes; Löh's and Lassueur's group-cohomology texts; Haller's thesis and Meier's
notes; and Smith's CFSG notes. Working URLs and exact harvested ranges are recorded in
§24. Solomon's and Aschbacher's complete classification-status articles and
the official 2023 GLS status page were also read in full over the ranges there.

The pair sections and the canonical harvest add independent monographs,
lecture-note sets, and original papers. A citation to a book whose complete
body was not openly available is used only where the exact cited range was
actually read; no inaccessible text is represented as obtained.

### Seams consumed

- Published pages `group-actions-and-cayleys-theorem`,
  `free-groups-and-presentations`, `free-products-and-amalgamation`, and
  `composition-series-and-solvable-groups`, including the class equation,
  finite $p$-group centre theorem, free-group universal property, published
  Tietze transformations, normal forms for free products with amalgamation,
  characteristic subgroups, upper/lower central series, and finite $p$-group
  nilpotence.
- Planned abstract-algebra pages `semidirect-products-and-automorphism-groups`,
  `sylow-theorems-and-nilpotent-groups`, and RT-1 through RT-4. In particular,
  this track cites rather than re-mints semidirect products, $\operatorname{Out}
  (G)$, Sylow's theorems, the Fitting subgroup, group algebras, ordinary
  characters, and induction.
- Published topology supplies `def-topological-group`, its translation and
  inversion theorem, compatible group uniformities, compactness machinery,
  and the fundamental-group anchor.
- Published combinatorics supplies finite simple graphs and finite trees. Its
  tree definition is **not** silently reused for Bass--Serre theory; `GT-14`
  proves the exact finite agreement after defining arbitrary simplicial trees.
- Published linear algebra page `dual-spaces-bilinear-forms-and-inertia`
  supplies alternating/quadratic forms, radicals, and
  `thm-alternating-forms-have-a-symplectic-normal-form` for `GT-2`.
- Homological algebra HA-12 supplies
  `def-group-cohomology-as-a-derived-functor` and the bar computation; HA-17
  supplies the Lyndon--Hochschild--Serre spectral sequence and five-term exact
  sequence. `GT-21`--`GT-23` own the low-degree interpretations only.

### Seams and amendments owed

1. Abstract algebra RT-1 should state the finite-support construction of
   $k[G]$, its augmentation, and the action/module dictionary for an arbitrary
   group $G$ and commutative ring $k$ before specialising its representation
   theory to finite $G$ over a field. Homological algebra HA-12 can then cite
   that stable page; group theory does not mint a second integral group ring.
2. The abstract-algebra AG-4 page should keep the already promised Fitting
   subgroup id. `GT-1` cites it and adds only $p$-cores, the product formula,
   and the solvable self-centralising theorem.
3. The published `free-groups-and-presentations` page is richer on disk than
   the six-item live-spec summary: it already authors Tietze transformations,
   finite-presentation preservation, cyclic reduction, and the free-group
   conjugacy criterion. At plan reconciliation, harvest the authored page into
   `items[]`; do not re-author or rename those ids.
4. The published page `trees-forests-and-spanning-trees` must remain finite.
   `GT-14` owns the arbitrary simplicial-tree bridge and cites
   `thm-tree-characterisations` only in its finite agreement item.
5. Insert `GT-21` after HA-12 and `GT-22`--`GT-23` after HA-17, despite their
   conceptual relation to `GT-9`. Placing them directly after AG-4 would create
   a load-bearing forward dependency.
6. Homological algebra should replace its unresolved descriptive group-ring
   seam by RT-1 after Amendment 1, and retain its ownership of all derived
   functor definitions. It should cite `GT-9` for the definition of a group
   extension in the LHS theorem.
7. Commutative algebra CA-13B currently plans
   `ex-p-adic-integers-as-an-inverse-limit`. Repoint it to cite `GT-17`'s
   compatible-tuple construction and use its own example only for the
   ring-adic/module-completion agreement; two definitions of $\mathbb Z_p$
   must not survive.
8. Abstract algebra AG-4 should add Craven's Frattini lifting theorem and its
   consequences: $\Phi(G)$ is nilpotent, $\Phi(G)\le F(G)$, nilpotence is
   detected modulo $\Phi(G)$, and
   $F(G/\Phi(G))=F(G)/\Phi(G)$. These are general Fitting/nilpotence results,
   so `GT-1` cites them rather than re-minting them.

### Unresolved forward references and blockers

There are no proposed item-level forward references inside a pair. The only
splice-time dependencies are the unauthored stable ids in abstract algebra and
homological algebra named above; their page ids are fixed, but item ids must be
substituted after those builds. No result here treats that substitution as
mathematical evidence. There is **no blocker** to the prose scaffold.

### Scope denials carried by the finished scaffold

- Sylow theory, elementary $p$-groups, nilpotence definitions and central
  series, the Fitting subgroup definition, semidirect products, and ordinary
  finite-group representation theory are denied because abstract algebra owns
  them and already scaffolds them.
- Lie groups and all Lie-algebra structure theory are denied because the seam
  assigns them wholly to differential geometry. The Lie-algebra heading in
  Craven's notes is harvested as out of scope for exactly this reason.
- The proof of CFSG, the proof of Gromov's polynomial-growth theorem, the
  Novikov--Boone and Adian--Rabin undecidability proofs, and the full
  O'Nan--Scott proof are source-cited survey results, `proved_here: false`, and
  never dependency targets. Each requires a research programme far larger than
  the machinery of its page; their precise statements and consequences remain
  valuable.
- Locally compact group structure, Haar measure, Pontryagin duality, and
  representation theory of general topological groups require measure or
  functional analysis and are not inferred from profinite compactness.
- Profinite/Galois cohomology, étale fundamental groups, buildings, arithmetic
  groups, mapping-class groups, CAT(0) cube complexes, and the Baum--Connes and
  Farrell--Jones conjectures are sequels requiring whole uncommissioned
  subjects. Their named source headings receive explicit dispositions in §24
  and their scope denials are collected in §25.

---

## 1. Why this track exists

The published library develops groups carefully through quotients,
homomorphism theorems, finite abelian structure, actions, symmetric groups,
free products, composition series, solvability, and nilpotence. Those pages
make finite and combinatorial group theory possible, but they stop just where
graduate group theory becomes structural: maximal subgroups do not yet control
generators, primitive actions do not yet expose minimal normal subgroups,
presentations do not yet lead to subgroup rewriting or decision problems, and
the geometry of a group has no large-scale invariance theory.

This scaffold supplies those continuations. Its finite strand passes from the
Frattini quotient to extraspecial groups and from blocks to the O'Nan--Scott
landscape. Its combinatorial strand turns free presentations into subgroup
bases, HNN extensions, normal forms, and honest algorithmic limitations. Its
geometric strand constructs word metrics, quasi-isometry, growth,
hyperbolicity, amenability, and Bass--Serre theory. Its topological strand
constructs profinite completions concretely and identifies $\mathbb Z_p$ as a
pro-$p$ group. Modular representations and Brauer characters extend, rather
than duplicate, ordinary characters. Finally, the cohomological strand proves
the concrete meanings of $H^1$, $H^2$, and the Schur multiplier against the
derived-functor definitions supplied elsewhere.

### Published and planned anchors verified from disk

- The live plan records authored group pages at orders 24--66, but several
  `items[]` lists are stale. The actual page directories were read in full.
  `free-groups-and-presentations` has 32 authored components on disk, including
  Tietze material, not merely the six ids still shown in the live spec.
- `free-products-and-amalgamation` has 27 live items and explicitly leaves HNN
  extensions, Kurosh, Grushko, and Bass--Serre to a later track.
- `composition-series-and-solvable-groups` has 27 live items, including
  `def-subgroup-commutator-and-lower-central-series`,
  `def-upper-central-series`,
  `def-nilpotent-group-and-nilpotency-class`, and the two central-series
  characterisations. None is re-minted.
- The abstract-algebra AG-3 and AG-4 pages are prose-complete but unauthored in
  the live plan. Their proposed semidirect-product, Sylow, nilpotence, and
  Fitting material is treated as a named prerequisite, not as published fact.
- `trees-forests-and-spanning-trees` has 27 authored items, but
  `def-tree-forest-and-leaf` explicitly assumes a finite simple graph. It cannot
  bear the arbitrary Bass--Serre tree without the bridge in `GT-14`.
- `the-fundamental-group` is authored but thin in the live plan; its later
  covering-space applications are planned with empty `items` arrays. The
  geometric block's anchor is therefore a placement instruction, not a licence
  to cite unauthored covering-space results.
- `uniform-spaces` already authors `def-topological-group` and compatible
  uniformities. Profinite pages cite these exact notions.

---

## 2. Deliberate omissions and convention decisions

### 2.1 Terminology fixed once

| issue | competing conventions | library convention |
|---|---|---|
| extension “of/by” | “extension of $Q$ by $N$” and the reverse wording both occur | always print the exact sequence $1\to N\to E\to Q\to1$; prose says **extension of $Q$ by $N$** |
| permutation action | some authors build faithfulness into “permutation group” | an action need not be faithful; a permutation group means a subgroup of $\operatorname{Sym}(\Omega)$ and hence a faithful displayed action |
| primitive | some allow one-point or intransitive degenerate actions | a primitive action is transitive and has only the equality and universal invariant equivalence relations; the one-point case is called trivial separately |
| $k$-transitive | ordered tuples versus subsets | ordered $k$-tuples of pairwise distinct points; $k$-homogeneous is the separate subset notion |
| extraspecial at $p=2$ | plus/minus type may be defined by central factors or quadratic form | define by central products first, then prove agreement with the Arf-invariant convention |
| small cancellation | pieces in a presentation versus a symmetrised relator set | symmetrise first; a piece has two distinct initial occurrences in the symmetrised set |
| hyperbolicity | slim triangles and four-point/Gromov-product inequalities use different constants | geodesic spaces use $\delta$-slim triangles; equivalence theorems state changed constants, never the same $\delta$ silently |
| amenability | left- versus right-invariant means and Følner sides | left invariant means and left Følner boundary; inversion supplies the right-hand agreement |
| graph of groups | oriented edges are doubled or chosen once | every geometric edge has two orientations $e,\bar e$ with $\bar{\bar e}=e$ and edge groups identified by inversion |
| profinite group | inverse limit definition versus compact Hausdorff totally disconnected group | inverse limit of finite discrete groups is the construction; the topological characterisation is a theorem with its choice cost recorded |
| $\mathbb Z_p$ | “$p$-adic completion” can mean metric, ring, or pro-$p$ completion | first define the compatible-tuple inverse limit $\varprojlim_n\mathbb Z/p^n\mathbb Z$; prove the metric and pro-$p$ descriptions agree |
| $H^1$ | for abelian coefficients it is a group; for nonabelian coefficients only a pointed set | typography records the distinction; complements in $M\rtimes G$ use abelian $M$, then a separate nonabelian pointed-set extension is stated |
| Schur multiplier | $H_2(G,\mathbb Z)$ versus a dual $H^2$ object | $M(G):=H_2(G,\mathbb Z)$; central extensions by $A$ are controlled through $H^2(G,A)$ and the universal-coefficient sequence |

### 2.2 Results intentionally cited, not locally proved

Four landmarks are included because omitting them would distort the subject,
but a local “proof sketch” would be mathematically dishonest: CFSG, Gromov's
virtually-nilpotent theorem, the general undecidability theorems, and the finite
O'Nan--Scott classification. Each appears as a precisely cited survey item with
`proved_here: false`, `provenance.proof: not-supplied`, and no incoming
dependency edge. Locally proved corollaries may use only independently
established hypotheses, not those survey items.

---

## 3. Dependency order and placement

The structure block `GT-1`--`GT-9` follows
`sylow-theorems-and-nilpotent-groups-examples`. The geometric/topological block
`GT-10`--`GT-17` follows
`applications-of-the-fundamental-group-examples`; if that planned anchor is
still empty at splice, placement may follow the last actually authored
fundamental-group companion, but no missing application is thereby presumed.
The modular continuation `GT-18`--`GT-19` follows abstract algebra RT-4 **and**
the commutative-algebra complete-DVR/completion machinery; `GT-20` needs no
modular-character dependency. The low-degree cohomological block places
`GT-21` after HA-12 and `GT-22`--`GT-23` after HA-17.

| pair | direct A-page `requires` |
|---|---|
| `GT-1` | `sylow-theorems-and-nilpotent-groups`, `composition-series-and-solvable-groups` |
| `GT-2` | `frattini-subgroups-and-the-burnside-basis-theorem`, `dual-spaces-bilinear-forms-and-inertia` |
| `GT-3` | `group-actions-and-cayleys-theorem`, `semidirect-products-and-automorphism-groups` |
| `GT-4` | `blocks-primitivity-and-multiple-transitivity`, `composition-series-and-solvable-groups` |
| `GT-5` | `free-groups-and-presentations`, `group-actions-and-cayleys-theorem` |
| `GT-6` | `subgroups-of-free-groups-and-schreier-rewriting`, `free-products-and-amalgamation` |
| `GT-7` | `free-groups-and-presentations`, `subgroups-of-free-groups-and-schreier-rewriting` |
| `GT-8` | `decision-problems-for-finitely-presented-groups`, `hnn-extensions-and-brittons-lemma` |
| `GT-9` | `semidirect-products-and-automorphism-groups`, `sylow-theorems-and-nilpotent-groups` |
| `GT-10` | `free-groups-and-presentations`, `metric-spaces` |
| `GT-11` | `cayley-graphs-word-metrics-and-quasi-isometry`, `composition-series-and-solvable-groups` |
| `GT-12` | `geometric-actions-svarc-milnor-and-growth`, `small-cancellation-and-dehn-algorithms` |
| `GT-13` | `cayley-graphs-word-metrics-and-quasi-isometry`, `free-products-and-amalgamation` |
| `GT-14` | `trees-forests-and-spanning-trees`, `cayley-graphs-word-metrics-and-quasi-isometry` |
| `GT-15` | `simplicial-trees-and-group-actions`, `hnn-extensions-and-brittons-lemma`, `free-products-and-amalgamation` |
| `GT-16` | `uniform-spaces`, `normal-subgroups-and-quotient-groups` |
| `GT-17` | `inverse-systems-profinite-groups-and-completion`, `frattini-subgroups-and-the-burnside-basis-theorem`, `cyclic-groups-and-direct-products` |
| `GT-18` | `induced-representations-and-frobenius-reciprocity`, `modules-and-module-homomorphisms`, `chain-conditions-and-semisimple-modules`, `valuation-rings-and-discrete-valuation-rings`, `inverse-limits-and-noetherian-completion` |
| `GT-19` | `modular-representations-and-projective-covers`, `characters-and-the-orthogonality-relations` |
| `GT-20` | `socles-and-the-onan-scott-landscape`, `composition-series-and-solvable-groups`, `sylow-theorems-and-nilpotent-groups` |
| `GT-21` | `group-extensions-complements-and-schur-zassenhaus`, `group-cohomology-as-a-derived-functor` |
| `GT-22` | `crossed-homomorphisms-complements-and-first-cohomology`, `group-cohomology-as-a-derived-functor`, `grothendieck-spectral-sequences-and-computations` |
| `GT-23` | `second-cohomology-and-abelian-kernel-extensions`, `group-cohomology-as-a-derived-functor`, `ext-and-balanced-resolutions`, `tensor-products-of-modules` |

No B page is a dependency target.

---

## 4. Component-provenance code

Every mathematical-content item below carries one of these codes. The future
builder expands it into the two `provenance` components and records the cited
locator as rationale.

| code | `provenance.statement` | `provenance.proof` | use |
|---|---|---|---|
| `[LN]` | `literature-derived` | `not-applicable` | sourced definition/notation |
| `[LL]` | `literature-derived` | `literature-derived` | statement and proof follow the named source |
| `[LA]` | `literature-derived` | `ai-altered` | faithful sourced statement, proof reorganised to close library dependencies |
| `[LS]` | `literature-derived` | `not-supplied` | source-cited survey/undecidability/classification item, always `proved_here: false` |
| `[AN]` | `ai-altered` | `not-applicable` | notation/remark altered only to match house conventions |
| `[AA]` | `ai-altered` | `ai-altered` | sourced example or counterexample adapted to published notation |

No theorem, proposition, lemma, or definition has an `ai-generated` statement.
No `[LS]`, example, counterexample, or false-statement item is a dependency
target. Page-summary prose has no mathematical content beyond the item
inventory.

---

## 5. Global well-definedness obligations

Each local pair repeats the obligations it uses. This ledger prevents a future
builder from hiding them in prose.

1. Intersections defining $\Phi(G)$ and cores are subgroups; characteristic or
   normal status is proved before a quotient is formed.
2. $G/\Phi(G)$ is called a vector space only after it is proved elementary
   abelian and the published $\mathbb F_p$-module/vector-space dictionary is
   cited.
3. The commutator form on an extraspecial quotient is independent of lifts,
   bilinear, alternating, and nondegenerate; the quadratic refinement at $p=2$
   is likewise representative-independent.
4. A block system is identified with an invariant equivalence relation in both
   directions. The subgroup/block correspondence is independent of the point
   chosen after conjugating stabilisers.
5. Schreier generators depend on a chosen transversal, but the subgroup they
   generate and the rank formula do not. Rewriting is proved invariant under
   free reduction before it is used on relators.
6. HNN and graph-of-groups fundamental groups are quotient groups only after
   the relator set and its normal closure are fixed. Bass--Serre vertex and edge
   stabilisers are identified up to conjugacy, not literally without choices.
7. An algorithm includes an encoding, finite input, correctness, and
   termination. “No algorithm” is stated for the exact decision problem and
   presentation class in the cited theorem.
8. A symmetrised relator set is closed under inverse and cyclic conjugation;
   pieces and $C'(\lambda)$ are invariant under that closure convention.
9. The outer action of an extension is independent of the chosen lift. A
   factor set depends on a section, while its cohomology class does not.
10. Word length is a minimum in $\mathbb N$ only for a generating set; changing
    a finite generating set changes the metric but not its quasi-isometry type.
11. Growth type is an equivalence class under the displayed comparison
    relation. Independence from finite generating set is a theorem before
    “the growth of $G$” is used.
12. Boundary constructions for a hyperbolic space quotient asymptotic rays or
    sequences only after equivalence is proved. No representative-dependent
    topology is admitted.
13. A mean acts on a specified function space, and the action convention is
    fixed before invariance. Følner boundary and paradoxical decompositions use
    the same left/right convention.
14. The arbitrary simplicial graph of `GT-14` is not the published finite
    graph by assertion: the finite inclusion and agreement theorem are
    explicit.
15. An inverse limit is first the subgroup of compatible tuples in a product.
    Coordinatewise multiplication, the subspace topology, projection maps,
    and the universal property are proved. Cofinal replacement is proved to
    preserve the limit.
16. The canonical map $G\to\widehat G$ is never called an embedding until its
    kernel is computed as the finite residual.
17. $\mathbb Z_p$ is a set of compatible residue classes. Its group operation,
    topology, metric, and dense copy of $\mathbb Z$ are shown compatible; no
    residue representative enters the definition.
18. A Brauer character uses a fixed $p$-modular system and Teichmüller lifts.
    Independence from a matrix realisation and invariance under module
    isomorphism are proved before character tables are formed.
19. Equivalence classes of extensions form a set through the explicit
    factor-set model used on the page; Baer sum is independent of sections and
    representatives.
20. Hopf's formula is independent of the selected free presentation because it
    is proved to agree naturally with $H_2(G,\mathbb Z)$, not declared so from
    the quotient formula alone.
21. The exterior square of an abelian group is formed only after the subgroup
    generated by all $a\otimes a$ is identified; its alternating universal
    property proves that the quotient is independent of tensor representatives.

---

## 6. Choice-strength ledger

The baseline foundation is ZF. “Finite choice” below means a theorem of ZF,
not an invocation of the axiom of choice.

| result/construction | strength used | scaffold treatment |
|---|---|---|
| finite $p$-group, finite permutation, and supplied-system modular pages | ZF | all local choices are finite; existence of the splitting modular system is separate supplied data |
| CFSG | external proof foundation not audited | the statement is finitary, but `proved_here: false` does not license claiming the enormous external proof is ZF |
| existence of a maximal subgroup of a nontrivial finite $p$-group | ZF | maximise order in a finite set |
| bases of the finite vector space $P/\Phi(P)$ | ZF | finite spanning-set reduction |
| Schreier transversal for a specified finite-index subgroup | ZF | finitely many cosets |
| transversal for arbitrary $H\le F$ | AC for the direct transversal proof | the action-on-tree proof is parameterised by a supplied spanning tree; countable/finitely generated cases state their weaker hypotheses separately |
| spanning tree of an arbitrary connected graph | equivalent to full AC over ZF | supplied maximal tree is data in general Bass--Serre constructions; finite and explicitly well-ordered graphs use ZF |
| section of an arbitrary surjection $E\twoheadrightarrow G$ | AC in full generality | factor-set classification is relative to a supplied section; finite $G$ and finite fibres are ZF, and the final class is section-independent |
| countable recursive word manipulations | ZF | algorithms are explicit finite-string procedures |
| product compactness for arbitrary finite discrete factors | Boolean prime ideal theorem / ultrafilter lemma | `GT-16` distinguishes the elementary compatible-tuple construction from compactness of an arbitrary profinite product |
| compactness and completeness of $\mathbb Z_p$ from compatible residues | ZF | canonical digits permit an explicit diagonal subsequence and compatible-limit construction |
| nonemptiness of an inverse limit of groups | ZF | the compatible identity tuple always exists; no choice principle is charged merely to nonemptiness |
| surjectivity of a projection from a surjective inverse system of groups | choice-sensitive in general; DC suffices for a countable chain | the theorem states the index-set/selection hypothesis; it is not inferred from the identity tuple |
| countable inverse system of nonempty finite sets with surjective maps | weak König lemma in reverse-mathematical formulations; provable from dependent choice, and by compactness from BPI | state the exact route used; never call nonemptiness “obvious” |
| inverse limit of finite discrete groups is compact | BPI for an arbitrary product; weaker sequential principles for countable systems | compactness route and index-set hypothesis are printed in `GT-16` |
| compact Hausdorff totally disconnected group is an inverse limit of finite quotients | ZF once compactness is supplied | clopen separation and the finite-subcover argument construct open normal subgroups and the comparison map without adding BPI |
| invariant-mean Hahn--Banach constructions | BPI/appropriate Hahn--Banach choice principle | Følner-to-mean implication records the functional-analytic choice; mean-to-Følner finite separation is ZF once the mean is supplied |
| Tarski alternative | uses choice in standard matching/decomposition proofs | theorem states the chosen foundation and is not used to prove elementary permanence properties |
| coarse quasi-inverse for an arbitrary coarsely surjective quasi-isometric embedding | AC in the standard all-spaces proof | `GT-10` states the supplied-selection hypothesis; finitely generated word-metric spaces use least-word representatives in ZF |
| quasi-geodesic stability, Švarc--Milnor, hyperbolic word algorithm | ZF | constructions make only finite or explicitly recursive choices |
| projective covers for finite-dimensional algebras | ZF | finite-dimensional linear algebra; Krull--Schmidt is used in finite length |
| derived $H^n(G,M)$ | inherited from homological algebra's supplied-resolution convention | this track adds no global resolution choice |
| universal central extension of a perfect group via a free presentation | AC if a free presentation/basis must be selected for arbitrary $G$ | theorem is relative to a supplied presentation; the universal object is then unique without further choice |

---

## 7. Page-summary contract

Every future A page receives exactly two short paragraphs. Paragraph one names
the conceptual development and its principal theorem without claiming more
than the inventory. Paragraph two states what the page enables next and names
all external prerequisites in ordinary language. Summaries contain no new
definition, theorem, example, attribution, or caveat. B companions receive no
authored summary.

---

# The structure and combinatorial block

## GT-1. Frattini Subgroups and the Burnside Basis Theorem

**page id** `frattini-subgroups-and-the-burnside-basis-theorem`  
**`requires`** `sylow-theorems-and-nilpotent-groups`,
`composition-series-and-solvable-groups`

The page starts with normal $p$-cores and consequences of the already-owned
Fitting subgroup, then isolates the finite $p$-group generation theory carried
by $P/\Phi(P)$. This is genuinely above Sylow: neither Sylow existence nor
nilpotence is repeated.

### A-page items, in dependency order

1. `def-p-core-of-a-finite-group` — **definition** `[LN]`.
   $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of finite
   $G$; the notation is not introduced until item 2 proves this product is a
   normal $p$-subgroup.
2. `lem-products-of-normal-p-subgroups-are-normal-p-subgroups` — **lemma**
   `[LL]`, by the finite product formula and normality.
3. `prop-p-core-is-the-largest-normal-p-subgroup-and-is-characteristic` —
   **proposition** `[LA]`.
4. `thm-fitting-subgroup-is-the-product-of-the-p-cores` — **theorem** `[LA]`,
   $F(G)=\prod_{p\mid |G|}O_p(G)$, citing the AG-4 definition and its Fitting
   product theorem.
5. `thm-centralizer-of-the-fitting-subgroup-in-a-finite-solvable-group` —
   **theorem** `[LL]`, $C_G(F(G))\le F(G)$; “solvable” is load-bearing and a
   counterexample without it is on the B page.
6. `def-frattini-subgroup-of-a-finite-group` — **definition** `[LN]`, the
   intersection of all maximal proper subgroups, with $\Phi(1)=1$ fixed.
7. `lem-frattini-subgroup-is-characteristic` — **lemma** `[LL]`.
8. `def-nongenerator-of-a-group` — **definition** `[LN]`: $x$ is a
   nongenerator if $\langle S,x\rangle=G$ implies $\langle S\rangle=G$ for
   every $S\subseteq G$.
9. `thm-frattini-subgroup-is-the-set-of-nongenerators-for-finite-groups` —
   **theorem** `[LL]`; both inclusions use existence of a maximal overgroup only
   in the finite case.
10. `cor-generation-is-detected-modulo-the-frattini-subgroup` — **corollary**
    `[LA]`, $S$ generates $G$ iff its image generates $G/\Phi(G)$.
The general finite-group results “$\Phi(G)$ is nilpotent”,
$\Phi(G)\le F(G)$, nilpotence lifts from $G/\Phi(G)$, and
$F(G/\Phi(G))=F(G)/\Phi(G)$ are amendments owed to AG-4, which owns the
Fitting/nilpotence page. They are cited here when needed and are not re-minted.

11. `lem-maximal-subgroups-of-a-finite-p-group-are-normal-of-index-p` —
    **lemma** `[LA]`, citing the normalizer condition from AG-4.
12. `def-power-subgroup-of-a-group` — **definition** `[LN]`,
    $G^p=\langle g^p:g\in G\rangle$; it is characteristic.
13. `thm-frattini-subgroup-formula-for-a-finite-p-group` — **theorem** `[LL]`,
    $\Phi(P)=P'P^p$.
14. `cor-frattini-quotient-is-elementary-abelian` — **corollary** `[LL]`.
15. `lem-frattini-quotient-has-a-canonical-fp-vector-space-structure` —
    **lemma** `[LA]`, citing the elementary-abelian/vector-space dictionary.
16. `def-generator-rank-of-a-finite-p-group` — **definition** `[LN]`,
    $d(P)=\dim_{\mathbb F_p}P/\Phi(P)$; well-definedness is item 15.
17. `thm-burnside-basis-theorem` — **theorem** `[LL]`: a subset of $P$ is a
    minimal generating set precisely when its image is a basis of
    $P/\Phi(P)$. LANDMARK.
18. `cor-minimal-generating-sets-of-a-finite-p-group-have-equal-size` —
    **corollary** `[LA]`, and every generating set contains one of size $d(P)$.
19. `cor-maximal-subgroups-of-a-finite-p-group-are-kernels-of-nonzero-linear-forms` —
    **corollary** `[LA]`, identifying maximal subgroups with hyperplanes of the
    Frattini quotient.
20. `thm-hall-burnside-automorphism-theorem` — **theorem** `[LL]`: if a
    $p'$-subgroup $A\le\operatorname{Aut}(P)$ acts trivially on
    $P/\Phi(P)$, then $A=1$.
21. `cor-kernel-of-the-action-on-the-frattini-quotient-is-a-p-group` —
    **corollary** `[LA]` for finite $P$.

### `fs-` items

- `fs-the-frattini-subgroup-is-the-union-of-the-maximal-subgroups` `[LN]` —
  it is their intersection.
- `fs-the-frattini-subgroup-is-functorial-for-all-homomorphisms` `[LN]` — the
  clean image inclusion requires surjectivity; $C_4\to S_5$ supplies a sourced
  failure.
- `fs-every-minimal-generating-set-of-an-arbitrary-finite-group-has-the-same-size`
  `[LN]` — Burnside basis is a finite $p$-group theorem.
- `fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup`
  `[LN]` — solvability cannot be deleted.

### B page — `frattini-subgroups-and-the-burnside-basis-theorem-examples`

`ex-frattini-subgroup-of-a-cyclic-p-group` `[LL]` ·
`ex-frattini-subgroup-of-an-elementary-abelian-p-group` `[LL]` ·
`ex-frattini-subgroups-of-dihedral-and-quaternion-groups` `[LL]` ·
`ex-generator-rank-of-upper-unitriangular-groups` `[LA]` ·
`ex-maximal-subgroups-as-frattini-hyperplanes` `[AA]` ·
`cex-frattini-image-under-a-nonsurjective-homomorphism` `[LL]` ·
`cex-fitting-centralizer-without-solvability` `[LL]` ·
`ex-hall-burnside-detects-a-nontrivial-coprime-automorphism` `[AA]`.

### Sources and exact locators

- **Craven, *The Theory of p-Groups*, §1.1 “Soluble Groups” (pp. 1--2) and
  §§2.1--2.3 “Commutators”, “The Frattini Subgroup”, “Some Automorphism
  Groups” (pp. 6--18).** Primary specialist source: Fitting Theorems 1.1--1.2
  and 2.15, Frattini Theorem 2.19 and Corollaries 2.20--2.23, Frattini quotient
  Proposition 2.24, Burnside Basis Theorem 2.28, Hall--Burnside Theorem 2.30.
- **Wilkes, *Profinite Groups and Group Cohomology*, §4.1 “Generators of
  pro-$p$ groups” (pp. 55--58), especially Propositions 4.1.3--4.1.7.**
  Independent full-note treatment of $\Phi(G)$, generation modulo $\Phi(G)$,
  and $\Phi(P)=P'P^p$; the pro-$p$ continuation is deferred to `GT-17`.
- **Isaacs, *Finite Group Theory*, 2008, §1B “The Fitting Subgroup” and §3A
  “The Frattini Subgroup”, exact theorem statements checked against the two
  open treatments above.** Textbook control for notation and solvability
  hypotheses; it is not claimed as an open full text.

### Proof strategy and traps

The page never argues that a product of $p$-subgroups is a $p$-group without
normality. The formula $P'P^p\le\Phi(P)$ is obtained from the cyclic order-$p$
maximal quotients; the reverse inclusion uses that quotient as an elementary
abelian group and tests its hyperplanes. Burnside basis is then a maximal-
subgroup contradiction, not a choice of generators by fiat. The Hall--Burnside
proof separates its coprime-action input from the basis theorem.

**Forward references: NONE.**

---

## GT-2. Extraspecial $p$-Groups and Central Products

**page id** `extraspecial-p-groups-and-central-products`  
**`requires`** `frattini-subgroups-and-the-burnside-basis-theorem`,
`dual-spaces-bilinear-forms-and-inertia`

Extraspecial groups are the first substantial family where commutator theory,
Frattini theory, and symplectic linear algebra agree. The page proves the
agreement and gives the classification only after central products and the
associated forms are well defined.

### A-page items, in dependency order

1. `def-special-and-extraspecial-p-groups` — **definition** `[LN]`. A finite
   $p$-group is special when $Z(P)=P'=\Phi(P)$ is elementary abelian, and
   extraspecial when this common subgroup has order $p$.
2. `prop-basic-structure-of-an-extraspecial-p-group` — **proposition** `[LL]`:
   $P/Z(P)$ is elementary abelian, $|P|=p^{1+2n}$ for some $n$, and every
   noncentral conjugacy class has size exactly $p$.
3. `def-central-product-of-two-groups-with-identified-central-subgroups` —
   **definition** `[LN]`, $(G\times H)/\{(z,\theta(z)^{-1}):z\in Z\}$ for a
   specified central isomorphism $\theta:Z\to W$.
4. `lem-diagonal-subgroup-for-a-central-product-is-normal` — **lemma** `[LA]`.
5. `thm-central-product-universal-property` — **theorem** `[LA]`; commuting
   maps agreeing on the identified centres factor uniquely.
6. `prop-order-centre-and-derived-subgroup-of-a-central-product` —
   **proposition** `[LL]`, with hypotheses printed for every equality.
7. `def-commutator-form-of-an-extraspecial-p-group` — **definition** `[LN]`,
   $b(\bar x,\bar y)\in\mathbb F_p$ determined by $[x,y]$ after choosing an
   identification $Z(P)\cong(\mathbb F_p,+)$.
8. `lem-extraspecial-commutator-form-is-well-defined-bilinear-and-alternating` —
   **lemma** `[LL]`.
9. `lem-extraspecial-commutator-form-is-nondegenerate` — **lemma** `[LL]`,
   because its radical is $Z(P)/Z(P)$.
10. `cor-extraspecial-groups-have-order-p-to-one-plus-an-even-number` —
    **corollary** `[LL]` from symplectic dimension.
11. `lem-symplectic-bases-lift-to-central-product-factors` — **lemma** `[LA]`.
12. `def-plus-and-minus-extraspecial-two-groups-by-central-products` —
    **definition** `[LN]`: plus type is a central product of $D_8$ factors;
    minus type has one $Q_8$ factor and the rest $D_8$.
13. `def-quadratic-form-of-an-extraspecial-two-group` — **definition** `[LN]`,
    $q(\bar x)$ determined by $x^2\in Z(P)$.
14. `lem-extraspecial-two-group-quadratic-form-is-well-defined` — **lemma**
    `[LL]`, with polar form equal to the commutator form.
15. `thm-central-product-type-agrees-with-the-arf-invariant` — **theorem**
    `[LL]`.
16. `thm-classification-of-extraspecial-two-groups` — **theorem** `[LL]`:
    for every order $2^{1+2n}$ there are exactly the plus and minus types.
17. `def-exponent-type-of-an-extraspecial-odd-p-group` — **definition** `[LN]`,
    distinguishing exponent $p$ and exponent $p^2$ without using the
    misleading plus/minus terminology.
18. `thm-classification-of-extraspecial-groups-for-odd-p` — **theorem** `[LL]`,
    for every odd $p$ and $n\ge1$ there are exactly two isomorphism types of
    order $p^{1+2n}$, one of exponent $p$ and one of exponent $p^2$.
19. `cor-every-extraspecial-p-group-is-a-central-product-of-order-p-cubed-factors` —
    **corollary** `[LL]`; for $p=2$ the factors are $D_8$ or $Q_8$.
20. `prop-outer-automorphisms-act-on-the-associated-symplectic-space` —
    **proposition** `[LL]`; kernel and image are stated only to the strength
    proved by the cited source.

### `fs-` items

- `fs-every-special-p-group-is-extraspecial` `[LN]` — the common centre may
  have order greater than $p$.
- `fs-the-commutator-form-is-defined-without-identifying-the-centre-with-fp`
  `[LN]` — the scalar-valued form needs that choice; its isometry class does
  not.
- `fs-there-is-one-extraspecial-group-of-each-admissible-order` `[LN]` — there
  are two types.
- `fs-plus-and-minus-type-is-the-standard-odd-prime-convention` `[LN]` — it is
  reserved here for $2$-groups.

### B page — `extraspecial-p-groups-and-central-products-examples`

`ex-d-eight-and-q-eight-are-extraspecial` `[LL]` ·
`ex-the-heisenberg-group-of-order-p-cubed` `[LL]` ·
`ex-the-nonabelian-exponent-p-squared-group-of-order-p-cubed` `[LL]` ·
`ex-central-product-of-two-d-eight-groups` `[LL]` ·
`ex-quadratic-forms-of-d-eight-and-q-eight` `[LL]` ·
`ex-symplectic-basis-from-extraspecial-generators` `[AA]` ·
`cex-a-special-group-that-is-not-extraspecial` `[LL]`.

### Sources and exact locators

- **Craven, *The Theory of p-Groups*, Chapter 3 “Extraspecial Groups”,
  §§3.1--3.3 “Central Products”, “Alternating Forms”, “Extraspecial Groups of
  Order $p^{1+2n}$” (pp. 19--27).** Primary full-note source for all
  construction, form, and classification items.
- **D. Gorenstein, *Finite Groups*, 2nd ed., Chapter 5, §5.5 “Extra-special
  groups”, exact statements used as an independent textbook control.** The
  accessible read range was limited to this section; no claim of an open full
  text is made.
- **Winter, “The automorphism group of an extraspecial $p$-group”, *Rocky
  Mountain J. Math.* 2 (1972), 159--168.** Original-paper control for the
  automorphism action; only results actually used in item 20 are
  harvested.

### Proof strategy and traps

Classification is reduced to linear algebra only after lift-independence of
$b$ and $q$ is proved. A symplectic basis gives commuting central-product
factors; induction then reduces to order $p^3$. For $p=2$, the quadratic form
contains information invisible to the alternating polar form, so the page does
not pretend the symplectic space alone distinguishes the two types. Any
automorphism theorem not needed downstream remains a leaf proposition.

**Forward references: NONE.**

---

## GT-3. Blocks, Primitivity, and Multiple Transitivity

**page id** `blocks-primitivity-and-multiple-transitivity`  
**`requires`** `group-actions-and-cayleys-theorem`,
`semidirect-products-and-automorphism-groups`

This page builds permutation-group structure from invariant equivalence
relations. The subgroup/block correspondence and Iwasawa's criterion are the
load-bearing results; multiple transitivity is developed far enough to state
its sharp elementary consequences without importing CFSG classifications.

### A-page items, in dependency order

1. `def-faithful-and-permutation-actions` — **definition** `[LN]`, citing the
   published kernel-of-action construction.
2. `def-block-and-block-system-for-a-group-action` — **definition** `[LN]`: a
   nonempty $B\subseteq\Omega$ is a block when $gB=B$ or $gB\cap B=\varnothing$
   for every $g$.
3. `lem-translates-of-a-block-form-an-invariant-partition-of-its-orbit-union` —
   **lemma** `[LL]`.
4. `thm-block-systems-and-invariant-equivalence-relations-correspond` —
   **theorem** `[LA]`, in both directions.
5. `def-primitive-and-imprimitive-actions` — **definition** `[LN]` under the
   convention of §2.1.
6. `prop-primitive-actions-have-equal-sized-blocks` — **proposition** `[LL]`
   for finite transitive actions.
7. `thm-subgroup-block-correspondence` — **theorem** `[LL]`: for transitive
   $G\curvearrowright\Omega$ and $\alpha\in\Omega$, blocks containing $\alpha$
   correspond to subgroups $G_\alpha\le H\le G$ via $H\mapsto H\alpha$.
8. `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer` —
   **corollary** `[LL]`, for faithful or nonfaithful actions with the exact
   kernel qualification stated.
9. `cor-prime-degree-transitive-actions-are-primitive` — **corollary** `[LL]`.
10. `thm-normal-subgroups-of-primitive-actions-are-transitive-or-contained-in-the-kernel` —
    **theorem** `[LL]`; the orbits of a normal subgroup form a block system.
    Thus every nontrivial normal subgroup of a faithful primitive permutation
    group is transitive.
11. `cor-abelian-normal-subgroups-of-faithful-primitive-groups-are-regular` —
    **corollary** `[LA]`.
12. `def-k-transitive-and-k-homogeneous-actions` — **definition** `[LN]`.
13. `lem-k-transitive-implies-k-homogeneous-and-lower-transitivity` — **lemma**
    `[LL]`, with degree restrictions printed.
14. `prop-two-transitive-actions-are-primitive` — **proposition** `[LL]`.
15. `def-rank-and-subdegrees-of-a-transitive-permutation-group` —
    **definition** `[LN]`, using point-stabiliser orbits.
16. `thm-orbits-on-ordered-pairs-correspond-to-suborbits` — **theorem** `[LA]`.
17. `cor-two-transitivity-is-equivalent-to-rank-two` — **corollary** `[LL]`.
18. `def-regular-and-sharply-k-transitive-actions` — **definition** `[LN]`.
19. `prop-sharply-k-transitive-actions-have-prescribed-order` —
    **proposition** `[LL]`, $|G|=n(n-1)\cdots(n-k+1)$ in the finite case.
20. `def-wreath-product-in-the-imprimitive-action` — **definition** `[LN]`,
    citing external semidirect products and proving the displayed action is
    faithful under its hypotheses.
21. `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product` —
    **theorem** `[LL]`, relative to a chosen block and transversal.
22. `thm-iwasawa-simplicity-criterion` — **theorem** `[LL]`: if a faithful
    primitive permutation group $G$ has an abelian normal subgroup
    $A\trianglelefteq G_\alpha$ whose conjugates generate $G$, every nontrivial
    normal subgroup contains $G'$; hence a perfect such $G$ is simple.
    LANDMARK.
23. `cor-iwasawa-criterion-for-faithful-finite-actions` — **corollary** `[LA]`,
    isolating the frequently used finite version without changing the theorem.

### `fs-` items

- `fs-every-transitive-action-is-primitive` `[LN]` — composite-degree cyclic
  regular actions supply blocks.
- `fs-a-block-is-an-invariant-subset` `[LN]` — translates may be disjoint
  rather than equal.
- `fs-k-homogeneous-always-implies-k-transitive` `[LN]` — false already in
  standard affine examples.
- `fs-every-nontrivial-normal-subgroup-of-a-primitive-group-is-regular` `[LN]`
  — transitive is the valid conclusion; regular needs abelianity.
- `fs-iwasawa-simplicity-needs-only-transitivity` `[LN]` — maximality of the
  stabiliser, hence primitivity, is used in the proof.

### B page — `blocks-primitivity-and-multiple-transitivity-examples`

`ex-blocks-in-a-regular-cyclic-action` `[LL]` ·
`ex-natural-actions-of-symmetric-and-alternating-groups` `[LL]` ·
`ex-affine-general-linear-group-is-two-transitive` `[LL]` ·
`ex-dihedral-action-of-prime-and-composite-degree` `[AA]` ·
`ex-projective-linear-action-and-iwasawa-hypotheses` `[LL]` ·
`ex-imprimitive-wreath-product-block-system` `[LL]` ·
`cex-homogeneous-not-transitive-under-missing-hypotheses` `[LL]`.

### Sources and exact locators

- **Milne, *Group Theory*, Chapter 4, “Permutation groups” (pp. 64--70) and
  “Primitive actions” (pp. 72--73).** Full textbook treatment of faithful
  permutation actions, primitive actions, and the maximal-stabiliser
  condition.
- **Dixon--Mortimer, *Permutation Groups*, Graduate Texts in Mathematics 163,
  §§1.5--1.8 (blocks, primitivity, multiple transitivity, wreath products),
  exact named results cross-checked against Cameron's open notes.** Standard
  monograph control; only this accessed range is claimed read.
- **Cameron, *Notes on Classical Groups*, §2.3 “Iwasawa's Lemma” and §2.4
  “Simplicity” (pp. 19--22):**
  <https://maths.qmul.ac.uk/~pjc/class_gps/cg.pdf>. Independent full-note
  proof of the exact criterion and its projective-linear application.

### Proof strategy and traps

Blocks are developed through equivalence relations before subgroup
correspondence, which prevents confusing setwise stabilisers with pointwise
stabilisers. In Iwasawa's proof, primitivity gives $NG_\alpha=G$ for a
nontrivial normal $N$ not contained in $G_\alpha$; conjugates of $A$ then give
$G=NA$, so $G/N$ is abelian. The final simplicity conclusion explicitly uses
$G=G'$ and faithfulness/nontriviality as appropriate.

**Forward references: NONE.**

---

## GT-4. Socles and the O'Nan--Scott Landscape

**page id** `socles-and-the-onan-scott-landscape`  
**`requires`** `blocks-primitivity-and-multiple-transitivity`,
`composition-series-and-solvable-groups`

The page proves the elementary minimal-normal-subgroup structure needed to
read the O'Nan--Scott theorem and then presents that theorem as a carefully
bounded survey. It does not use CFSG to turn the landscape into lists of
groups.

### A-page items, in dependency order

1. `def-minimal-normal-subgroup-and-socle` — **definition** `[LN]`,
   $\operatorname{soc}(G)$ the subgroup generated by all minimal nontrivial
   normal subgroups of finite $G$.
2. `lem-distinct-minimal-normal-subgroups-centralize-one-another` — **lemma**
   `[LL]`, since their commutator lies in their intersection.
3. `lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple` —
   **lemma** `[LL]`.
4. `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups` —
   **theorem** `[LL]`, proved by minimal normal factors and not by CFSG.
5. `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition` —
   **proposition** `[LA]`: the socle is generated by all minimal normal
   subgroups, is characteristic, and is the internal direct product of a
   maximal irredundant subfamily. The subfamily is not canonical; the theorem
   does not falsely multiply all minimal normal subgroups at once.
6. `thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive` —
   **theorem** `[LL]`, citing `GT-3`.
7. `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular` —
   **lemma** `[LL]`.
8. `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups` —
   **corollary** `[LL]`.
9. `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type` —
   **proposition** `[LL]`: it is elementary abelian and regular, and a point
   stabiliser acts faithfully and irreducibly.
10. `def-almost-simple-finite-group` — **definition** `[LN]`,
    $T\le G\le\operatorname{Aut}(T)$ for a nonabelian finite simple $T$.
11. `def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types` —
    **definition package** `[LN]`, fixing the five coarse types and recording
    the socle/action data that distinguish them.
12. `lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses` —
    **lemma** `[LL]` with those hypotheses printed.
13. `rem-onan-scott-eight-type-and-five-type-conventions` — **remark** `[LN]`:
    modern eight-type refinements subdivide the diagonal/product/twisted cases;
    this library uses the five coarse landscape because no later item needs
    the finer labels.
14. `thm-onan-scott-classification-of-finite-primitive-groups` — **theorem**
    `[LS]`, `proved_here: false`: every finite primitive permutation group falls
    into the stated socle types, with convention mapping to the cited version.
    LANDMARK; never a dependency target.
15. `rem-cfsg-refinements-of-the-onan-scott-reduction` — **remark** `[LS]`,
    `proved_here: false`: classification of almost-simple cases uses CFSG and
    belongs to `GT-20`'s survey.
16. `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type` —
    **proposition** `[LS]`, `proved_here: false` in the exact sourced finite
    form; it is not used later.
17. `rem-algorithmic-role-of-onan-scott` — **remark** `[LN]`, a faithful
    source summary of reduction structure, not an invented theorem.

### `fs-` items

- `fs-the-socle-is-always-a-single-simple-group` `[LN]` — it can be a product
  of isomorphic simple factors.
- `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup` `[LN]` — two
  regular minimal normals can occur.
- `fs-onan-scott-is-the-classification-of-finite-simple-groups` `[LN]` — it is
  a structural classification of primitive actions.
- `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups`
  `[LN]` — the structural theorem does not; many applications and refinements
  do.

### B page — `socles-and-the-onan-scott-landscape-examples`

`ex-affine-type-agl-one-p` `[LL]` ·
`ex-almost-simple-type-from-an-alternating-group` `[LL]` ·
`ex-simple-diagonal-action` `[LL]` ·
`ex-product-action-wreath-product` `[LL]` ·
`ex-two-regular-minimal-normal-subgroups` `[LL]` ·
`ex-socle-of-a-finite-solvable-primitive-group` `[LA]` ·
`cex-transitive-does-not-force-minimal-normal-subgroups-transitive` `[AA]`.

### Sources and exact locators

- **Dixon--Mortimer, *Permutation Groups*, Chapter 4, §§4.1--4.8 “Primitive
  groups” through the O'Nan--Scott theorem.** Standard monograph treatment;
  exact theorem hypotheses are cross-checked against the open survey below.
- **Liebeck--Praeger--Saxl, “On the O'Nan--Scott theorem for finite primitive
  permutation groups”, *J. Austral. Math. Soc.* 44 (1988), §§1--3,
  389--396.** Primary, self-contained five-type theorem and socle-structure
  control. Burness and Soicher below supply the modern-name dictionary.
- **Cameron, “Finite permutation groups and finite simple groups”, *Bull.
  London Math. Soc.* 13 (1981), 1--22, §§2--4.** Independent survey control for
  the coarse five-type landscape and the two-transitive reduction.
- **Soicher, “Primitive permutation groups” encyclopaedia essay, sections
  “Primitivity”, “The socle”, and “The O'Nan--Scott theorem”:**
  <https://maths.qmul.ac.uk/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf>.
  Open convention check, never the sole primary backing.

### Proof strategy and traps

All locally proved structure stops before the classification theorem. The
centralising lemma makes the socle a product; primitivity makes its minimal
normal factors transitive and sharply constrains how many can occur. Those
facts explain the type labels but do not constitute a proof of O'Nan--Scott.
The survey item prints the source's exact convention mapping and does not turn
the theorem into a dependency for later pages.

**Forward references: NONE.**

---

## GT-5. Subgroups of Free Groups and Schreier Rewriting

**page id** `subgroups-of-free-groups-and-schreier-rewriting`  
**`requires`** `free-groups-and-presentations`,
`group-actions-and-cayleys-theorem`

The published free-group page proves universal properties and Tietze moves but
does not describe subgroups. This page gives both the algebraic Schreier basis
and the action-on-a-tree proof, then turns rewriting into presentations and the
finite-index rank formula.

### A-page items, in dependency order

1. `def-labeled-schreier-coset-graph` — **definition** `[LN]` for
   $H\le F(X)$, with vertices the right cosets and an $x$-labelled directed
   edge $Hg\to Hgx$.
2. `lem-schreier-coset-graph-is-connected-and-deterministic` — **lemma**
   `[LL]`; inverses reverse labelled edges.
3. `def-schreier-transversal-and-schreier-system` — **definition** `[LN]`: a
   transversal is a set of reduced representatives, and a Schreier system is
   closed under initial segments.
4. `lem-spanning-trees-and-schreier-systems-correspond` — **lemma** `[LA]`,
   relative to a supplied rooted spanning tree.
5. `def-schreier-generator` — **definition** `[LN]`,
   $s(t,x)=tx\overline{tx}^{-1}$, with the right-coset convention fixed.
6. `lem-schreier-generators-lie-in-the-subgroup` — **lemma** `[LL]`.
7. `def-schreier-rewriting-map` — **definition** `[LN]`, rewriting a word by
   tracking its successive coset representatives.
8. `lem-schreier-rewriting-is-invariant-under-free-reduction` — **lemma**
   `[LA]`; cancellation in the input produces cancellation in the output.
9. `thm-schreier-generating-lemma` — **theorem** `[LL]`: the nontrivial
   Schreier generators generate $H$.
10. `lem-tree-schreier-generators-are-freely-independent` — **lemma** `[LA]`,
    via reduced closed paths outside the spanning tree.
11. `thm-nielsen-schreier-with-an-explicit-basis` — **theorem** `[LL]`: every
    subgroup of a free group is free, with the nontrivial Schreier generators
    for a Schreier system as a basis. The arbitrary-rank statement is made
    under AC; finite and countable ordered-basis variants state the weaker
    selection used. LANDMARK.
The independent action-on-a-tree proof is recorded as an agreement remark on
`GT-14`, after arbitrary simplicial trees exist; it is not an item or a forward
dependency of this page.

12. `thm-schreier-index-rank-formula` — **theorem** `[LL]`: if
    $F$ has finite rank $n$ and $[F:H]=d<\infty$, then
    $\operatorname{rank}H=1+d(n-1)$.
13. `cor-finite-index-subgroups-of-finitely-generated-groups-are-finitely-generated` —
    **corollary** `[LL]`, by pulling back to a finite-index subgroup of a finite
    rank free group.
14. `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank` —
    **corollary** `[LL]` in the exact sourced range.
15. `thm-reidemeister-schreier-presentation` — **theorem** `[LL]`: from
    $G=\langle X\mid R\rangle$, a transversal for $H\le G$ gives the stated
    Schreier generators and rewritten conjugates $\tau(trt^{-1})$ as relators.
16. `lem-reidemeister-schreier-relators-are-independent-of-word-representatives` —
    **lemma** `[LA]`, using normal closure and item 8.
17. `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented` —
    **corollary** `[LL]`.
18. `thm-marshall-hall-free-factor-theorem` — **theorem** `[LL]`: every
    finitely generated subgroup of a finite-rank free group is a free factor of
    some finite-index subgroup.
The separability consequence of Marshall Hall is authored on `GT-16`, after
`def-subgroup-separable-and-lerf`, rather than pointed forward from this page.

### `fs-` items

- `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated`
  `[LN]` — infinite-index subgroups need not be.
- `fs-schreier-generators-are-always-a-free-basis` `[LN]` — trivial generators
  are removed and the transversal must satisfy the Schreier condition.
- `fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn` `[LN]` —
  the correct formula is $1+d(n-1)$.
- `fs-reidemeister-schreier-needs-no-choice-of-transversal` `[LN]` — the
  presentation depends on the choice although the presented subgroup does not.

### B page — `subgroups-of-free-groups-and-schreier-rewriting-examples`

`ex-index-two-subgroup-of-a-rank-two-free-group` `[LL]` ·
`ex-kernel-of-the-exponent-sum-map` `[LL]` ·
`ex-a-schreier-coset-graph-and-its-tree-basis` `[AA]` ·
`ex-reidemeister-schreier-for-a-surface-subgroup` `[LL]` ·
`ex-infinite-rank-subgroup-of-a-rank-two-free-group` `[LL]` ·
`ex-marshall-hall-separating-quotient` `[LL]` ·
`cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis` `[AA]`.

### Sources and exact locators

- **Lyndon--Schupp, *Combinatorial Group Theory*, Chapter I, §§3--4 “Subgroups
  of free groups” and “The Reidemeister--Schreier method” (pp. 16--27).**
  Standard monograph source for items 3--18.
- **Löh, *Geometric Group Theory*, §§3.3.2--3.3.3 “Free groups $\to$ trees”
  and “Trees $\to$ free groups” (pp. 50--52), §§4.2--4.3 “Free groups and
  actions on trees” and “Subgroups of free groups are free” (pp. 64--73).**
  Independent full-text proof and quantitative formula.
- **Stallings, “Topology of finite graphs”, *Invent. Math.* 71 (1983),
  §§1--5.** Original source for finite core graphs and the free-factor/separability
  route; the later folding algorithm itself is kept as a B-page computation.
- **Milne, *Group Theory*, “Free groups” (pp. 32--35), especially Theorem 2.6
  and the rank formula.** Full-text convention control; Milne explicitly does
  not supply the proof, so it is not the proof provenance.

### Proof strategy and traps

Right cosets, right multiplication, and the position of the inverse in
$tx\overline{tx}^{-1}$ are fixed once; mixing a left-coset formula into this
convention is a known source of false generators. The algebraic proof expands
a subgroup word and telescopes coset representatives. Free independence is
then proved from the spanning-tree normal form. Reidemeister--Schreier is not
presented as a mere formula: invariance under free reduction and normal-closure
replacement are separate obligations.

**Forward references: NONE.**

---

## GT-6. HNN Extensions and Britton's Lemma

**page id** `hnn-extensions-and-brittons-lemma`  
**`requires`** `subgroups-of-free-groups-and-schreier-rewriting`,
`free-products-and-amalgamation`

HNN extensions are introduced as presentations that force two embedded
subgroups to be conjugate. Britton's lemma plays the role of the already
published amalgam normal-form theorem and proves that the base group really
embeds.

### A-page items, in dependency order

1. `def-hnn-extension-and-stable-letter` — **definition** `[LN]`: for
   monomorphisms of an abstract edge group $C$ into $A$, form
   $\langle A,t\mid t^{-1}\alpha(c)t=\beta(c),c\in C\rangle$.
2. `lem-equivalent-hnn-presentation-with-associated-subgroups` — **lemma**
   `[LA]`, agreeing with the common $C,D\le A$, $\phi:C\to D$ notation.
3. `def-hnn-word-pin-and-britton-reduced-word` — **definition** `[LN]`, with
   both kinds of pin printed.
4. `lem-elementary-hnn-reductions-preserve-the-represented-element` —
   **lemma** `[LL]`.
5. `def-choice-of-transversals-for-hnn-normal-forms` — **definition** `[LN]`,
   separate left/right transversals for the two associated subgroups.
6. `thm-hnn-normal-form-theorem` — **theorem** `[LL]`, uniqueness relative to
   those transversals.
7. `thm-brittons-lemma` — **theorem** `[LL]`: a reduced HNN word containing a
   stable letter is nontrivial. LANDMARK.
8. `cor-the-base-group-embeds-in-its-hnn-extension` — **corollary** `[LL]`.
9. `cor-the-stable-letter-has-infinite-order` — **corollary** `[LA]`, also
   visible from the exponent-sum map to $\mathbb Z$.
10. `def-associated-homomorphism-to-the-integers` — **definition** `[LN]`,
    sending $A$ to $0$ and $t$ to $1$; well-definedness uses the relators.
11. `prop-universal-property-of-an-hnn-extension` — **proposition** `[LL]`,
    for a map out of $A$ and an element conjugating the two edge maps.
12. `def-ascending-hnn-extension` — **definition** `[LN]` for an injective
    endomorphism $\phi:A\to A$.
13. `prop-normal-form-for-an-ascending-hnn-extension` — **proposition** `[LL]`.
14. `rem-higman-neumann-neumann-embedding-theorem` — **remark** `[LS]`,
    `proved_here: false`, stating the exact countable-into-two-generator
    embedding theorem and not using it later.
15. `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words` — **theorem**
    `[LL]` in the exact Collins form and hypotheses; its long case analysis is
    decomposed at build into rotation and associated-subgroup lemmas.

### `fs-` items

- `fs-the-base-group-may-collapse-in-an-hnn-extension` `[LN]` — Britton's
  lemma proves it embeds when the associated maps are injective.
- `fs-every-word-containing-a-stable-letter-is-nontrivial` `[LN]` — a pin can
  reduce it into the base group.
- `fs-hnn-normal-form-is-canonical-without-transversals` `[LN]` — Britton
  reduction detects nontriviality, while a unique normal form needs choices.
- `fs-every-hnn-extension-is-an-ascending-hnn-extension` `[LN]`.

### B page — `hnn-extensions-and-brittons-lemma-examples`

`ex-the-direct-product-a-times-z-as-an-hnn-extension` `[LL]` ·
`ex-baumslag-solitar-groups-as-hnn-extensions` `[LL]` ·
`ex-an-ascending-hnn-extension-from-doubling-the-integers` `[LL]` ·
`ex-britton-reduction-of-a-word-with-two-pins` `[AA]` ·
`ex-hnn-extension-realising-two-conjugate-subgroups` `[LL]` ·
`cex-a-stable-letter-word-that-is-not-britton-reduced` `[AA]`.

### Sources and exact locators

- **Lyndon--Schupp, *Combinatorial Group Theory*, Chapter IV, §§2--2.5 “HNN
  extensions”, Britton's lemma, normal forms, and conjugacy (pp. 178--205).**
  Primary monograph source.
- **Serre, *Trees*, I.§5 “Amalgams” and the HNN portions of I.§4--§5
  (English ed., pp. 31--42).** Independent standard monograph proof through
  tree actions; detailed geometric development is deferred to `GT-15`.
- **Löh, *Geometric Group Theory*, §2.3.2 “Free products and free amalgamated
  products”, Definition 2.3.10 and Remark 2.3.11 (pp. 33--38).** Open full-text
  construction and Bass--Serre placement control.
- **Britton, “The word problem for groups”, *Proc. London Math. Soc.* (3) 8
  (1958), 493--506.** Original-result control for the exact reduced-word
  theorem.

### Proof strategy and traps

The proof is a minimal-counterexample argument using free products with
amalgamation or the action on the normal-form tree, but the future builder must
pick one route and close every dependency. “Britton reduced” is not confused
with free reduction. The conjugacy theorem is split into cyclic reduction,
stable-letter rotation, and conjugacy within associated subgroups so its
hypotheses remain visible.

**Forward references: NONE.**

---

## GT-7. Decision Problems for Finitely Presented Groups

**page id** `decision-problems-for-finitely-presented-groups`  
**`requires`** `free-groups-and-presentations`,
`subgroups-of-free-groups-and-schreier-rewriting`

This page defines algorithms before discussing solvability and separates a
problem for one fixed presentation from its uniform version. Positive
algorithms are proved; the deep negative theorems are stated exactly and cited,
not imitated.

### A-page items, in dependency order

1. `def-finite-alphabet-encoding-and-algorithm` — **definition** `[LN]`, using
   finite strings and a deterministic terminating procedure.
2. `def-recursive-and-recursively-enumerable-languages` — **definition** `[LN]`.
3. `def-recursive-and-finite-group-presentations` — **definition** `[LN]`,
   citing the published presentation notion.
4. `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` —
   **lemma** `[LL]`, by enumerating products of conjugates of relators.
5. `def-word-problem-for-a-fixed-finite-presentation` — **definition** `[LN]`.
6. `def-uniform-word-problem-for-finite-presentations` — **definition** `[LN]`;
   the presentation is part of the input.
7. `prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set` —
   **proposition** `[LA]`, via explicit translations and published Tietze
   transformations.
8. `thm-word-problem-for-free-groups` — **theorem** `[LL]`, by free reduction,
   cited rather than re-proved if the published item already contains the
   complete algorithm.
9. `thm-word-problem-for-finitely-generated-abelian-groups` — **theorem**
   `[LL]`, via the published invariant-factor normal form.
10. `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership` —
    **theorem** `[LL]`, with the factor word and amalgam membership hypotheses
    explicit.
11. `def-conjugacy-problem-for-a-finitely-generated-group` — **definition**
    `[LN]`.
12. `def-isomorphism-problem-for-a-class-of-finite-presentations` —
    **definition** `[LN]`.
13. `def-markov-property-of-finitely-presented-groups` — **definition** `[LN]`
    in the exact Adian--Rabin sense.
14. `thm-novikov-boone-undecidability-of-the-word-problem` — **theorem**
    `[LS]`, `proved_here: false`: there exists a finitely presented group with
    unsolvable word problem. LANDMARK; no dependency target.
15. `thm-adian-rabin-undecidability-for-markov-properties` — **theorem** `[LS]`,
    `proved_here: false`, with finite presentations as inputs and the required
    witness groups stated.
16. `cor-triviality-and-finiteness-are-undecidable-for-finite-presentations` —
    **corollary** `[LS]`, `proved_here: false`, attached to item 15 and not used.
17. `thm-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups` —
    **theorem** `[LS]`, `proved_here: false`.
18. `rem-groups-with-unsolvable-conjugacy-problem` — **remark** `[LS]`, exact
    existence statement and source, no synthetic strengthening.
19. `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` —
    **definition** `[LN]`: the area of a null word is the least number of
    conjugates of defining relators and inverses whose product it represents;
    the Dehn function maximises this over null words of length at most $n$.
20. `lem-minimal-algebraic-relator-area-exists` — **lemma** `[LA]`, because a
    null word has at least one finite relator expression and $\mathbb N$ is
    well ordered. No diagram is mentioned before `GT-8`.
21. `prop-recursive-dehn-function-implies-solvable-word-problem` —
    **proposition** `[LL]` for finite presentations.

### `fs-` items

- `fs-every-finitely-presented-group-has-solvable-word-problem` `[LN]`.
- `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm` `[LN]` —
  enumeration need not halt on nontrivial words.
- `fs-unsolvable-word-problem-means-no-word-can-be-decided` `[LN]` — it means
  no single algorithm decides all inputs.
- `fs-the-novikov-boone-theorem-proves-the-uniform-problem-only` `[LN]` — it
  produces a fixed finitely presented group with an unsolvable problem.
- `fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem`
  `[LN]`.

### B page — `decision-problems-for-finitely-presented-groups-examples`

`ex-word-problem-by-free-reduction` `[LL]` ·
`ex-word-problem-in-a-finite-cyclic-presentation` `[LL]` ·
`ex-conjugacy-in-a-free-group-by-cyclic-reduction` `[LL]` ·
`ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` `[LL]` ·
`ex-an-algebraic-relator-area-computation` `[AA]` ·
`cex-enumerating-relator-consequences-does-not-decide-nontriviality` `[AA]`.

### Sources and exact locators

- **Lyndon--Schupp, *Combinatorial Group Theory*, Chapter IV, §§1--3 and
  Chapter V, §§1--2 (word, conjugacy, and decision problems; Novikov--Boone
  consequences).** Standard monograph treatment and exact negative statements.
- **Miller, *Decision Problems for Groups---Survey and Reflections*, in
  *Algorithms and Classification in Combinatorial Group Theory*, MSRI Publ. 23
  (1992), §§1--4.** Full survey control for fixed versus uniform problems and
  the Adian--Rabin theorem.
- **Wilkes, *Profinite Groups and Group Cohomology*, Introduction (pp. 1--3),
  especially the exact Adian--Rabin triviality statement.** Independent open
  full-note control.
- **Boone, “The word problem”, *Ann. of Math.* (2) 70 (1959), Parts I--VI, and
  Novikov, *On the Algorithmic Unsolvability of the Word Problem in Group
  Theory* (1955).** Original-result provenance; the page does not reproduce
  their constructions.

### Proof strategy and traps

Every positive result supplies termination as well as correctness. Every
negative result prints whether a single group, a class, or a uniform input is
involved. The page never says merely “the word problem is undecidable”: that
phrase has no truth value until the presentation and uniformity convention are
specified.

**Forward references: NONE.**

---

## GT-8. Small Cancellation and Dehn Algorithms

**page id** `small-cancellation-and-dehn-algorithms`  
**`requires`** `decision-problems-for-finitely-presented-groups`,
`hnn-extensions-and-brittons-lemma`

Small cancellation is included because it supplies a deep but locally
buildable island of positive algorithmic theory. The page follows the classical
symmetrised $C'(1/6)$ route through van Kampen diagrams and Greendlinger's
lemma to Dehn's algorithm.

### A-page items, in dependency order

1. `def-cyclically-reduced-word-and-cyclic-conjugate` — **definition** `[LN]`,
   citing the published free-group cyclic-reduction item.
2. `def-symmetrisation-of-a-relator-set` — **definition** `[LN]`, closing under
   inverses and cyclic conjugates.
3. `lem-symmetrisation-has-the-same-normal-closure` — **lemma** `[LL]`.
4. `def-piece-in-a-symmetrised-presentation` — **definition** `[LN]`, a common
   initial segment of two distinct relators/occurrences under the source's
   convention.
5. `def-small-cancellation-conditions-c-lambda-and-c-prime-lambda` —
   **definition** `[LN]`, with strict versus weak inequalities explicit.
6. `def-small-cancellation-condition-t-q` — **definition** `[LN]`.
7. `lem-c-prime-lambda-implies-c-lambda` — **lemma** `[LL]`.
8. `def-van-kampen-diagram-boundary-label-and-area` — **definition** `[LN]`.
9. `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` —
   **lemma** `[LL]`.
10. `thm-van-kampen-lemma` — **theorem** `[LL]`, both directions, connecting
    null words and finite planar diagrams.
11. `thm-diagram-area-agrees-with-algebraic-relator-area` — **theorem** `[LA]`,
    sharpening the two constructions in item 10 to equality of their minima.
12. `def-reduced-van-kampen-diagram` — **definition** `[LN]`.
13. `lem-minimal-area-diagrams-are-reduced` — **lemma** `[LL]`.
14. `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` — **lemma**
    `[LA]`, the Euler-characteristic accounting isolated from the group
    conclusion.
15. `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations` — **theorem**
    `[LL]`: a nontrivial reduced null word contains more than half of a relator.
    LANDMARK.
16. `def-dehn-reduced-word-and-dehn-presentation` — **definition** `[LN]`.
17. `lem-dehn-replacement-strictly-shortens-a-word` — **lemma** `[LL]`.
18. `thm-dehn-algorithm-solves-the-word-problem` — **theorem** `[LL]`, with
    explicit termination and correctness.
19. `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem` —
    **corollary** `[LL]`.
20. `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` —
    **corollary** `[LA]`, with constants derived rather than advertised as
    canonical.
21. `thm-torsion-theorem-for-c-prime-one-sixth-groups` — **theorem** `[LL]`:
    every torsion element is conjugate to a power of a root of a defining
    relator, in the exact sourced hypotheses.
22. `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free` —
    **corollary** `[LL]`.
The hyperbolicity consequence is authored as an agreement theorem on `GT-12`,
where hyperbolicity is available; it is not a forward dependency here.

### `fs-` items

- `fs-every-repeated-subword-is-a-piece` `[LN]` — distinct symmetrised
  occurrences are required.
- `fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six` `[LN]`.
- `fs-greendlinger-lemma-applies-to-every-finitely-presented-group` `[LN]`.
- `fs-dehn-reduction-is-the-same-as-free-reduction` `[LN]`.
- `fs-no-proper-power-relators-alone-implies-torsion-free` `[LN]` — the small
  cancellation hypothesis remains load-bearing.

### B page — `small-cancellation-and-dehn-algorithms-examples`

`ex-symmetrising-a-one-relator-presentation` `[LL]` ·
`ex-finding-pieces-and-checking-c-prime-one-sixth` `[AA]` ·
`ex-a-dehn-reduction-sequence` `[AA]` ·
`ex-a-greendlinger-cell-in-a-van-kampen-diagram` `[LL]` ·
`ex-a-torsion-free-small-cancellation-group` `[LL]` ·
`cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention` `[AA]` ·
`cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation`
`[LL]`.

### Sources and exact locators

- **Lyndon--Schupp, *Combinatorial Group Theory*, Chapter V, §§3--5 “Small
  cancellation theory”, Greendlinger's lemma, Dehn's algorithm, and torsion
  (pp. 235--290).** Primary monograph source.
- **Ol'shanskii, *Geometry of Defining Relations in Groups*, Chapter 4,
  §§21--23 (maps, small-cancellation conditions, Greendlinger-type lemmas).**
  Independent monograph control for diagram conventions and boundary cases.
- **Holt--Rees, “Artin groups of large type are shortlex automatic with
  regular geodesics”, *Proc. London Math. Soc.* 104 (2012), introductory
  small-cancellation convention only.** Used solely as a modern convention
  check, not primary theorem backing.
- **Löh, *Geometric Group Theory*, §7.4 “Application: ‘Solving’ the word
  problem” (pp. 176--181) and the local-geodesic continuation (pp. 182--186).**
  Independent full-text control for Dehn presentations and the later
  hyperbolicity agreement.

### Proof strategy and traps

The main proof is combinatorial curvature on a reduced disc diagram. The future
builder must state whether boundary edges of valence one and spurs have already
been removed before counting. Strict $<$ in $C'(1/6)$ is preserved. The
algorithmic conclusion follows only after the relator set is finite, so the
search for a shortening replacement is effective.

**Forward references: NONE.**

---

## GT-9. Group Extensions, Complements, and Schur--Zassenhaus

**page id** `group-extensions-complements-and-schur-zassenhaus`  
**`requires`** `semidirect-products-and-automorphism-groups`,
`sylow-theorems-and-nilpotent-groups`

This page formulates the extension problem before cohomology: exact sequences,
equivalence, outer actions, splitting, and complements. It proves the
group-theoretic Schur--Zassenhaus theorem without pretending that all
extensions are semidirect products.

### A-page items, in dependency order

1. `def-group-extension-and-equivalence-of-extensions` — **definition** `[LN]`
   for $1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1$, with equivalence the
   identity on $N$ and $Q$.
2. `def-morphism-of-group-extensions` — **definition** `[LN]`, separated from
   the stricter equivalence relation.
3. `lem-kernel-in-an-extension-is-normal-and-quotient-is-the-base` — **lemma**
   `[LA]`, mostly an agreement with published exactness and quotient items.
4. `def-split-extension-section-retraction-and-complement` — **definition
   package** `[LN]`.
5. `thm-four-splitting-criteria-for-a-group-extension` — **theorem** `[LL]`:
   a homomorphic section, a complement, an appropriate retraction, and
   equivalence to a semidirect-product extension are equivalent.
6. `lem-complements-induce-the-conjugation-action` — **lemma** `[LA]`.
7. `thm-agreement-of-split-extensions-with-external-semidirect-products` —
   **theorem** `[LA]`, citing AG-3 rather than defining the product again.
8. `prop-direct-product-criterion-for-a-split-extension` — **proposition**
   `[LL]`, when the complement centralises the kernel.
9. `prop-cyclic-order-p-squared-extension-is-nonsplit` — **proposition**
   `[LL]`: $1\to C_p\to C_{p^2}\to C_p\to1$ does not split, because the cyclic
   middle group has a unique subgroup of order $p$.
10. `lem-extension-induces-an-outer-action-on-its-kernel` — **lemma** `[LL]`,
    $Q\to\operatorname{Out}(N)$ independent of the chosen lift.
11. `def-abstract-kernel-and-the-general-extension-problem` — **definition**
    `[LN]`: existence and equivalence classification for a prescribed outer
    action.
12. `rem-obstruction-and-torsor-shape-of-the-nonabelian-extension-problem` —
    **remark** `[LS]`, `proved_here: false`: the obstruction lies in
    $H^3(Q,Z(N))$ and, when it vanishes, classes form an $H^2(Q,Z(N))$-torsor,
    in the exact Eilenberg--Mac Lane theorem. It is not used before cohomology.
13. `def-hall-pi-subgroup` — **definition** `[LN]`, cited from AG-4 if it is
    already included there; no duplicate survives authoring.
14. `lem-normal-hall-subgroup-form-of-coprime-extension` — **lemma** `[LA]`.
15. `thm-schur-zassenhaus-existence` — **theorem** `[LL]`: a normal Hall
    subgroup of a finite group has a complement. LANDMARK.
16. `thm-schur-zassenhaus-conjugacy-under-solvability` — **theorem** `[LL]`:
    complements are conjugate when the kernel or quotient is solvable, using
    the exact classical hypothesis of the proof supplied.
17. `rem-general-conjugacy-form-of-schur-zassenhaus` — **remark** `[LS]`,
    `proved_here: false` if the chosen source invokes deeper results; it is not
    allowed to erase item 16's proof boundary.
18. `cor-extensions-of-coprime-order-split` — **corollary** `[LL]`.
19. `prop-extensions-with-complete-kernel-split-as-a-direct-product-with-the-centralizer` —
    **proposition** `[LL]`, with “complete” meaning centreless and all
    automorphisms inner.
Baer sum is introduced only on `GT-22`; this page records the seam but does not
mint a preview definition.

### `fs-` items

- `fs-every-short-exact-sequence-of-groups-splits` `[LN]`.
- `fs-an-extension-is-determined-by-its-kernel-and-quotient-up-to-isomorphism`
  `[LN]`.
- `fs-a-section-of-the-underlying-surjection-is-automatically-a-homomorphism`
  `[LN]`.
- `fs-schur-zassenhaus-says-every-hall-subgroup-is-normal` `[LN]`.
- `fs-conjugacy-of-complements-has-no-solvability-or-depth-qualification`
  `[LN]` — the page distinguishes the locally proved classical form from any
  cited stronger form.

### B page — `group-extensions-complements-and-schur-zassenhaus-examples`

`ex-split-extension-of-a-cyclic-group-by-inversion` `[LL]` ·
`ex-the-nonsplit-cp-squared-extension` `[LL]` ·
`ex-the-nonsplit-quaternion-central-extension` `[LL]` ·
`ex-complements-in-s-three` `[LL]` ·
`ex-a-schur-zassenhaus-complement` `[AA]` ·
`ex-an-extension-with-complete-kernel` `[LL]` ·
`cex-isomorphic-middle-groups-do-not-make-equivalent-extensions` `[AA]`.

### Sources and exact locators

- **Robinson, *A Course in the Theory of Groups*, 2nd ed., Chapter 11,
  §§11.1--11.4 “Extensions”, “Splitting extensions”, “The extension problem”,
  and “The Schur--Zassenhaus theorem”.** Standard textbook backbone.
- **Milne, *Group Theory*, Chapter 3, “Semidirect products” and “Extensions of
  groups” (pp. 46--52), especially Theorem 3.21 and Proposition 3.22.** Full
  open text for conventions, splitting criteria, Schur--Zassenhaus existence,
  complete kernels, and outer actions. Milne cites rather than proves Theorem
  3.21, so Robinson/Craven supplies proof provenance.
- **Craven, *Finite Group Theory* course notes, sections “Group extensions”,
  “Schur--Zassenhaus”, and “Hall's theorem” in the 99-page complete notes:**
  <https://web.mat.bham.ac.uk/D.A.Craven/finitegroups2012.html>. Independent
  open proof control.
- **Eilenberg--Mac Lane, “Cohomology theory in abstract groups. II. Group
  extensions with a non-Abelian kernel”, *Ann. of Math.* 48 (1947), §§3--10.**
  Original source solely for item 12's accurately bounded survey.

### Proof strategy and traps

The splitting dictionary is proved before examples. For Schur--Zassenhaus, the
future build decomposes induction into reduction by characteristic subgroups,
minimal-normal cases, and the elementary-abelian coprime-action step. It does
not cite Milne's one-line pointer as a proof. The outer action is constructed
by conjugating $N$ with a lift and quotienting by inner automorphisms; changing
the lift is checked explicitly.

**Forward references: NONE.** The obstruction remark and Baer-sum seam are
non-load-bearing.

---

# The geometric and topological block

## GT-10. Cayley Graphs, Word Metrics, and Quasi-Isometry

**page id** `cayley-graphs-word-metrics-and-quasi-isometry`  
**`requires`** `free-groups-and-presentations`, `metric-spaces`

The published Cayley theorem embeds a group in a symmetric group; this page's
Cayley graph is a different, explicitly reconciled construction. Finite
generating sets turn groups into metric spaces, and quasi-isometry removes the
choice of finite generating set.

### A-page items, in dependency order

1. `def-directed-labeled-cayley-graph` — **definition** `[LN]` for a group
   $G$ and subset $S$, with edges $g\xrightarrow{s}gs$.
2. `def-undirected-cayley-graph-for-a-symmetric-generating-set` — **definition**
   `[LN]`, after replacing $S$ by $S\cup S^{-1}$ and handling involutions.
3. `lem-cayley-graph-is-connected-iff-the-set-generates` — **lemma** `[LL]`.
4. `lem-left-translation-acts-freely-by-labeled-graph-automorphisms` —
   **lemma** `[LL]`.
5. `thm-cayley-graph-recovers-the-group-action` — **theorem** `[LA]`, an
   agreement with the published regular action, not a second Cayley theorem.
6. `def-word-length-with-respect-to-a-generating-set` — **definition** `[LN]`,
   $|g|_S=\min\{n:g=s_1\cdots s_n, s_i\in S^{\pm1}\}$.
7. `lem-word-length-is-well-defined-and-satisfies-the-length-laws` — **lemma**
   `[LL]`.
8. `def-word-metric` — **definition** `[LN]`, $d_S(g,h)=|g^{-1}h|_S$.
9. `thm-word-metric-is-left-invariant-and-is-the-cayley-path-metric` —
   **theorem** `[LL]`.
10. `prop-finite-generating-sets-give-proper-locally-finite-geodesic-cayley-graphs` —
    **proposition** `[LL]`, with “proper” meaning finite closed balls in this
    discrete setting.
11. `def-coarse-lipschitz-map-quasi-isometric-embedding-and-quasi-isometry` —
    **definition package** `[LN]`, all constants and coarse-surjectivity
    printed.
12. `def-bounded-distance-between-maps` — **definition** `[LN]`.
13. `thm-coarsely-surjective-quasi-isometric-embeddings-admit-coarse-quasi-inverses` —
    **theorem** `[LL]`, relative to a supplied bounded-choice function; the
    all-metric-spaces form uses AC, while countable word-metric spaces choose
    least coded representatives in ZF.
14. `lem-composites-of-quasi-isometries-are-quasi-isometries` — **lemma**
    `[LL]` with explicit constants.
15. `thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces` —
    **theorem** `[LA]`, with the same choice qualification for symmetry.
16. `prop-changing-a-finite-generating-set-gives-bilipschitz-word-metrics` —
    **proposition** `[LL]`, by bounding every generator in the other metric.
17. `def-quasi-isometry-type-of-a-finitely-generated-group` — **definition**
    `[LN]`, licensed only by item 16.
18. `prop-finite-groups-are-quasi-isometric-to-a-point` — **proposition** `[LL]`.
19. `prop-finite-index-inclusions-are-quasi-isometries` — **proposition** `[LL]`
    for finitely generated groups, with the finite transversal supplying
    coarse density.
20. `prop-quotient-by-a-finite-normal-subgroup-is-a-quasi-isometry` —
    **proposition** `[LA]`.
21. `def-quasi-geodesic-and-quasi-geodesic-space` — **definition** `[LN]`.
22. `prop-quasi-isometries-send-geodesics-to-quasi-geodesics` — **proposition**
    `[LL]`.
23. `rem-geometric-property-of-a-finitely-generated-group` — **remark** `[LN]`,
    meaning quasi-isometry invariant; no property is declared geometric until
    its invariance is proved.

### `fs-` items

- `fs-the-cayley-graph-is-independent-of-the-generating-set` `[LN]`.
- `fs-the-word-metric-is-right-invariant-for-every-generating-set` `[LN]`.
- `fs-a-quasi-isometry-must-be-continuous-or-bijective` `[LN]`.
- `fs-all-infinite-finitely-generated-groups-are-quasi-isometric` `[LN]`.
- `fs-word-metrics-from-finite-generating-sets-are-literally-equal` `[LN]`.

### B page — `cayley-graphs-word-metrics-and-quasi-isometry-examples`

`ex-cayley-graph-and-word-metric-of-the-integers` `[LL]` ·
`ex-cayley-graphs-of-free-abelian-groups` `[LL]` ·
`ex-cayley-tree-of-a-free-group` `[LL]` ·
`ex-two-generating-sets-of-a-dihedral-group` `[AA]` ·
`ex-z-is-quasi-isometric-to-a-line` `[LL]` ·
`ex-finite-index-sublattice-is-quasi-isometric-to-zn` `[LL]` ·
`cex-an-infinite-generating-set-destroys-the-finite-generator-invariance` `[LL]`.

### Sources and exact locators

- **Löh, *Geometric Group Theory*, Chapter 3, §§3.1--3.3 “Graph notation”,
  “Cayley graphs”, “Cayley graphs of free groups” (pp. 40--52), and §§5.1--5.2
  “Quasi-isometry types of metric spaces/groups” (pp. 80--93).** Primary full
  text.
- **Bridson--Haefliger, *Metric Spaces of Non-Positive Curvature*, I.8,
  especially Definitions 8.14--8.16 and Lemma 8.18.** Independent monograph
  control for quasi-isometry and quasi-geodesics.
- **de la Harpe, *Topics in Geometric Group Theory*, Chapter IV, §§23--24
  “Cayley graphs” and “Metrics on groups”.** Independent graduate-text control.

### Proof strategy and traps

The minimum in word length exists because a generating expression exists and
$\mathbb N$ is well ordered. Local finiteness uses finiteness of $S$ and is not
stated for arbitrary Cayley graphs. The generating-set comparison is proved
before quasi-isometry type is named. Additive constants are retained throughout;
quasi-isometry is not weakened informally to “looks the same far away”. The
proof of symmetry does not hide the selection of a coarse inverse.

**Forward references: NONE.**

---

## GT-11. Geometric Actions, the Švarc--Milnor Lemma, and Growth

**page id** `geometric-actions-svarc-milnor-and-growth`  
**`requires`** `cayley-graphs-word-metrics-and-quasi-isometry`,
`composition-series-and-solvable-groups`

Geometric actions replace an arbitrary generating set by an ambient space.
The Švarc--Milnor lemma makes this replacement precise; growth then becomes a
well-defined coarse invariant. Gromov's theorem is stated but not locally
proved.

### A-page items, in dependency order

1. `def-isometric-proper-and-cobounded-group-actions-on-metric-spaces` —
   **definition package** `[LN]`, using finite transporter sets for bounded
   subsets and a bounded orbit-neighbourhood.
2. `lem-proper-action-conventions-agree-on-proper-discrete-spaces` — **lemma**
   `[LA]`, reconciling proper discontinuity and metric properness in the scope
   actually used.
3. `def-geometric-group-action` — **definition** `[LN]`: isometric, proper,
   and cobounded (cocompact under the proper geodesic hypotheses).
4. `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz-after-choosing-generators` —
   **lemma** `[LL]`.
5. `lem-compact-fundamental-neighbourhood-produces-a-finite-generating-set` —
   **lemma** `[LL]`.
6. `thm-svarc-milnor-lemma` — **theorem** `[LL]`: a group acting properly and
   coboundedly by isometries on a proper geodesic space is finitely generated,
   and every orbit map is a quasi-isometry. LANDMARK.
7. `cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric` —
   **corollary** `[LL]`.
8. `def-growth-function-of-a-finitely-generated-group` — **definition** `[LN]`,
   $\beta_{G,S}(n)=|B_S(1,n)|$.
9. `def-growth-comparison-and-growth-type` — **definition** `[LN]`,
    $f\preccurlyeq g$ iff $f(n)\le Cg(Cn+C)+C$ for a displayed convention.
10. `lem-growth-comparison-is-a-preorder-and-mutual-comparison-an-equivalence` —
    **lemma** `[LA]`.
11. `thm-growth-type-is-independent-of-the-finite-generating-set` — **theorem**
    `[LL]`.
12. `thm-growth-type-is-a-quasi-isometry-invariant` — **theorem** `[LL]` for
    uniformly locally finite spaces/groups, with the bounded-geometry
    hypothesis visible.
13. `def-polynomial-subexponential-exponential-and-intermediate-growth` —
    **definition package** `[LN]`.
14. `prop-finite-and-virtually-cyclic-growth-types` — **proposition** `[LL]`.
15. `thm-free-groups-of-rank-at-least-two-have-exponential-growth` — **theorem**
    `[LL]` by reduced-word counting.
16. `def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group` —
    **definition** `[LN]`, the Bass--Guivarc'h weighted sum
    $\sum_i i\,\operatorname{rank}_{\mathbb Z}(\gamma_iG/\gamma_{i+1}G)$.
17. `thm-bass-guivarch-growth-degree-formula` — **theorem** `[LL]`: the
    polynomial growth degree is the homogeneous dimension in item 16.
18. `cor-finitely-generated-nilpotent-groups-have-polynomial-growth` —
    **corollary** `[LL]` in the sourced finite-generation hypotheses.
19. `thm-gromov-polynomial-growth-theorem` — **theorem** `[LS]`,
    `proved_here: false`: a finitely generated group has polynomial growth iff
    it is virtually nilpotent. LANDMARK; no dependency target.
20. `rem-grigorchuk-groups-of-intermediate-growth` — **remark** `[LS]`, exact
    existence statement and source, no construction used later.
21. `rem-growth-gap-and-open-problems` — **remark** `[LN]`, limited to sourced
    questions and date-stamped at authoring.

### `fs-` items

- `fs-proper-action-means-every-orbit-is-bounded` `[LN]`.
- `fs-cobounded-and-cocompact-are-unconditionally-identical` `[LN]`.
- `fs-growth-function-is-independent-of-the-generating-set-pointwise` `[LN]`.
- `fs-every-subexponential-growth-group-has-polynomial-growth` `[LN]`.
- `fs-gromovs-polynomial-growth-theorem-is-proved-on-this-page` `[LN]`.

### B page — `geometric-actions-svarc-milnor-and-growth-examples`

`ex-integers-acting-geometrically-on-the-line` `[LL]` ·
`ex-zn-acting-geometrically-on-euclidean-n-space` `[LL]` ·
`ex-free-groups-acting-on-regular-trees` `[LL]` ·
`ex-a-proper-action-that-is-not-cobounded` `[AA]` ·
`ex-growth-of-free-abelian-groups` `[LL]` ·
`ex-growth-degree-of-the-discrete-heisenberg-group` `[LL]` ·
`cex-a-quasi-isometry-without-bounded-geometry-does-not-preserve-ball-cardinality`
`[LL]`.

### Sources and exact locators

- **Löh, *Geometric Group Theory*, §5.3 “The Švarc--Milnor lemma” and
  applications (pp. 94--106), Chapter 6 §§6.1--6.3 “Growth functions/types”
  and “Groups of polynomial growth” (pp. 126--147).** Primary full text.
- **de la Harpe, *Topics in Geometric Group Theory*, Chapters IV and VI,
  especially §§26, 33, and 44.** Independent textbook proof of Švarc--Milnor
  and growth comparison.
- **Bass, “The degree of polynomial growth of finitely generated nilpotent
  groups”, *Proc. London Math. Soc.* (3) 25 (1972), 603--614.** Original proof
  for items 16--18.
- **Gromov, “Groups of polynomial growth and expanding maps”, *Publ. Math.
  IHÉS* 53 (1981), 53--73.** Original source for item 19; proof is explicitly
  outside local scope.

### Proof strategy and traps

Švarc--Milnor first produces a finite set of group elements from a compact or
bounded fundamental neighbourhood and only then compares the orbit and word
metrics. Growth invariance counts fibres using bounded geometry. Polynomial
growth of nilpotent groups is proved locally from a central series; the converse
is not replaced by a paragraph masquerading as Gromov's proof.

**Forward references: NONE.**

---

## GT-12. Hyperbolic Spaces and Hyperbolic Groups

**page id** `hyperbolic-spaces-and-hyperbolic-groups`  
**`requires`** `geometric-actions-svarc-milnor-and-growth`,
`small-cancellation-and-dehn-algorithms`

This page develops Gromov hyperbolicity from slim triangles through stability
of quasi-geodesics and then transfers it to finitely generated groups. The
algorithmic and boundary consequences are decomposed so that constants and
properness assumptions do not disappear.

### A-page items, in dependency order

1. `def-geodesic-segment-triangle-and-geodesic-metric-space` — **definition**
   `[LN]`.
2. `def-delta-slim-geodesic-triangle-and-hyperbolic-space` — **definition**
   `[LN]`.
3. `prop-cayley-trees-are-zero-hyperbolic` — **proposition** `[LL]`, proved
   directly from the already-established unique reduced paths in free-group
   Cayley graphs; the general simplicial-tree agreement appears later.
4. `def-gromov-product` — **definition** `[LN]` based at a point.
5. `thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants` —
   **theorem** `[LL]`; constants are changed explicitly.
6. `lem-thin-quadrilaterals-in-a-hyperbolic-space` — **lemma** `[LL]`.
7. `thm-morse-stability-of-quasi-geodesics` — **theorem** `[LL]`: quasi-
   geodesics with common endpoints remain within a bounded Hausdorff distance,
   with dependence on $\delta,\lambda,\varepsilon$. LANDMARK.
8. `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces` —
   **theorem** `[LL]`, via item 7.
9. `def-hyperbolic-group` — **definition** `[LN]`, a finitely generated group
   whose Cayley graph for one finite generating set is hyperbolic.
10. `thm-hyperbolic-group-definition-is-independent-of-finite-generating-set` —
    **theorem** `[LA]`.
11. `prop-finite-and-free-groups-are-hyperbolic` — **proposition** `[LL]`.
12. `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic` —
    **proposition** `[LL]`, from large geodesic rectangles.
13. `thm-hyperbolic-groups-admit-finite-dehn-presentations` — **theorem** `[LL]`.
14. `cor-hyperbolic-groups-have-solvable-word-problem` — **corollary** `[LL]`,
    with an explicit Dehn algorithm.
15. `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups` —
    **theorem** `[LL]`, for finite presentations and the exact area convention.
16. `thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups` —
    **theorem** `[LA]`, the promised agreement with `GT-8`.
17. `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted` —
    **theorem** `[LL]`.
18. `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic` —
    **theorem** `[LL]`.
19. `cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic` —
    **corollary** `[LL]`.
20. `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups` —
    **theorem** `[LL]` relative to a fixed finite generating set.
21. `def-elementary-and-non-elementary-hyperbolic-groups` — **definition**
    `[LN]`, finite or virtually cyclic versus otherwise.
22. `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup` —
    **theorem** `[LL]`, by ping-pong on sufficiently separated powers.
23. `def-gromov-boundary-by-asymptotic-sequences` — **definition** `[LN]` for
    proper hyperbolic spaces, with equivalence item 24.
24. `lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences` —
    **lemma** `[LL]`.
25. `def-boundary-topology-by-gromov-products` — **definition** `[LN]`.
26. `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant` —
    **theorem** `[LL]` for proper geodesic hyperbolic spaces.

### `fs-` items

- `fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup` `[LN]`.
- `fs-the-same-delta-works-after-every-change-of-generating-set` `[LN]`.
- `fs-every-abelian-group-is-hyperbolic` `[LN]`.
- `fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics` `[LN]`.
- `fs-the-boundary-definition-needs-no-properness-or-equivalence-check` `[LN]`.

### B page — `hyperbolic-spaces-and-hyperbolic-groups-examples`

`ex-a-tree-is-zero-hyperbolic` `[LL]` ·
`ex-the-hyperbolic-plane-is-hyperbolic` `[LL]` ·
`ex-free-groups-and-their-cantor-boundaries` `[LL]` ·
`ex-surface-groups-as-hyperbolic-groups` `[LL]` ·
`ex-a-small-cancellation-hyperbolic-group` `[AA]` ·
`cex-z-squared-is-not-hyperbolic` `[LL]` ·
`cex-product-of-two-infinite-groups-need-not-be-hyperbolic` `[LL]`.

### Sources and exact locators

- **Löh, *Geometric Group Theory*, Chapter 7, §§7.2--7.5 “(Quasi-)Hyperbolic
  spaces”, “Hyperbolic groups”, word problem, and infinite-order elements
  (pp. 157--202), plus §8.3 “Boundary of hyperbolic groups” (pp. 210--213).**
  Primary full text.
- **Bridson--Haefliger, *Metric Spaces of Non-Positive Curvature*, III.H
  §§1--3.** Independent standard monograph for equivalent definitions, Morse
  stability, groups, algorithms, and boundary.
- **Ghys--de la Harpe (eds.), *Sur les groupes hyperboliques d'après Mikhael
  Gromov*, Chapters 1, 2, 7, and 8.** Independent monograph control.
- **Gromov, “Hyperbolic groups”, in *Essays in Group Theory* (1987), §§1--8.**
  Original-result source; only the ranges corresponding to scaffolded results
  are harvested.

### Proof strategy and traps

Equivalent definitions are proved with changed constants. Morse stability is
split into projection/closest-point and local-to-global lemmas. The word
problem follows only after a finite Dehn presentation is constructed. Boundary
topology is restricted to the proper geodesic setting used by the proof; the
page does not generalise by wishful notation.

**Forward references: NONE.**

---

## GT-13. Amenable Groups and Følner Criteria

**page id** `amenable-groups-and-folner-criteria`  
**`requires`** `cayley-graphs-word-metrics-and-quasi-isometry`,
`free-products-and-amalgamation`

Amenability is developed in three equivalent languages—means, Følner sets,
and absence of paradoxical decomposition—while exposing the choice used in
the equivalences. Elementary permanence results are proved without depending
on Tarski's alternative.

### A-page items, in dependency order

1. `def-mean-on-bounded-functions-on-a-group` — **definition** `[LN]`, a
   positive norm-one linear functional on $\ell^\infty(G)$.
2. `def-left-translation-action-on-bounded-functions` — **definition** `[LN]`,
   with $(g\cdot f)(x)=f(g^{-1}x)$.
3. `def-left-invariant-mean-and-amenable-group` — **definition** `[LN]`.
4. `lem-left-and-right-amenability-agree-by-inversion` — **lemma** `[LL]`.
5. `prop-finite-groups-are-amenable` — **proposition** `[LL]`, by normalized
   counting.
6. `thm-abelian-groups-are-amenable` — **theorem** `[LL]`, with the invariant-
   mean construction's choice principle stated.
7. `thm-subgroups-and-quotients-of-amenable-groups-are-amenable` — **theorem**
   `[LL]`.
8. `thm-extensions-of-amenable-groups-are-amenable` — **theorem** `[LL]`.
9. `cor-solvable-and-locally-finite-groups-are-amenable` — **corollary** `[LA]`,
   with directed-union lemma included.
10. `def-folner-set-and-folner-condition` — **definition** `[LN]`, finite
    nonempty $F$ satisfying $|sF\triangle F|<\varepsilon|F|$ for prescribed
    finite $S$.
11. `lem-equivalent-folner-boundary-formulations` — **lemma** `[LL]`.
12. `thm-folner-criterion-for-amenability` — **theorem** `[LL]`, with the
    ultrafilter/BPI cost in the Følner-to-mean direction and the finite-
    dimensional separation argument in the reverse direction recorded.
    LANDMARK.
13. `def-folner-sequence` — **definition** `[LN]` for an enumerated group.
14. `prop-enumerated-countable-amenable-groups-admit-folner-sequences` —
    **proposition** `[LL]`, relative to a supplied enumeration; nets replace
    sequences for arbitrary groups.
15. `thm-subexponential-growth-implies-amenability` — **theorem** `[LL]`, by
    extracting radii with small boundary.
16. `def-paradoxical-decomposition-of-a-group` — **definition** `[LN]`, with
    disjoint pieces and specified left translates.
17. `lem-paradoxical-groups-admit-no-invariant-mean` — **lemma** `[LL]`.
18. `thm-tarski-alternative` — **theorem** `[LL]`: a group is nonamenable iff
    it admits a paradoxical decomposition, with the matching/choice principle
    stated.
19. `thm-free-group-of-rank-two-is-nonamenable` — **theorem** `[LL]`, both a
    boundary-expansion and paradoxical-decomposition proof available.
20. `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable` —
    **corollary** `[LL]`.
21. `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups` —
    **theorem** `[LL]`, through Følner boundary and bounded geometry.
22. `rem-nonamenable-groups-without-nonabelian-free-subgroups` — **remark**
    `[LS]`, exact Ol'shanskii/Adian existence statement showing the converse of
    item 20 fails; no proof or later dependency.

### `fs-` items

- `fs-amenable-means-finite` `[LN]`.
- `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup` `[LN]`.
- `fs-one-finite-folner-set-proves-amenability` `[LN]`.
- `fs-folner-sequences-exist-for-every-uncountable-amenable-group` `[LN]` —
  the general formulation uses nets/indexed finite tests.
- `fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates`
  `[LN]`.

### B page — `amenable-groups-and-folner-criteria-examples`

`ex-folner-intervals-in-the-integers` `[LL]` ·
`ex-folner-boxes-in-zn` `[LL]` ·
`ex-finite-and-locally-finite-amenable-groups` `[LL]` ·
`ex-the-lamplighter-group-is-amenable` `[LL]` ·
`ex-boundary-expansion-in-the-free-group` `[LL]` ·
`ex-paradoxical-decomposition-of-a-free-group` `[LL]` ·
`cex-amenability-does-not-imply-subexponential-growth` `[LL]`.

### Sources and exact locators

- **Löh, *Geometric Group Theory*, Chapter 9, §§9.1--9.4 “Amenability via
  means”, inheritance, Følner sequences, paradoxical decompositions, and
  quasi-isometry invariance (pp. 218--239).** Primary full text.
- **Paterson, *Amenability*, Mathematical Surveys and Monographs 29, Chapters
  0--1, §§0.1--0.6 and 1.1--1.5.** Standard independent monograph.
- **Wagon, *The Banach--Tarski Paradox*, 2nd ed., Chapter 9, §§9.1--9.4.**
  Independent source for Tarski's theorem and choice bookkeeping; Banach--Tarski
  itself is harvested out of scope.
- **Følner, “On groups with full Banach mean value”, *Math. Scand.* 3 (1955),
  243--254.** Original criterion source.

### Proof strategy and traps

Finite and extension permanence are proved directly with means. The Følner
criterion is separated into finite-dimensional separation and construction of
a mean, with the latter's choice cost explicit. Tarski's alternative is not
used to smuggle a nonconstructive proof into elementary cases. The existence
of nonamenable groups without free subgroups is cited only to kill a false
converse.

**Forward references: NONE.**

---

## GT-14. Simplicial Trees and Group Actions

**page id** `simplicial-trees-and-group-actions`  
**`requires`** `trees-forests-and-spanning-trees`,
`cayley-graphs-word-metrics-and-quasi-isometry`

This is the required bridge between the library's finite simple trees and the
possibly infinite simplicial trees of Bass--Serre theory. It then classifies
tree automorphisms by fixed points and axes.

### A-page items, in dependency order

1. `def-oriented-graph-with-edge-reversal` — **definition** `[LN]`, vertex and
   oriented-edge sets with origin, terminus, and fixed-point-free reversal
   $e\mapsto\bar e$. General graphs may have loops and parallel geometric
   edges; the tree condition below rules them out.
2. `def-simplicial-path-reduced-path-cycle-and-connectedness` — **definition
   package** `[LN]`, allowing infinite vertex sets but finite paths.
3. `def-simplicial-tree` — **definition** `[LN]`, a connected simplicial graph
   with no nontrivial reduced closed path.
4. `thm-unique-reduced-path-characterisation-of-simplicial-trees` —
   **theorem** `[LL]`.
5. `def-simplicial-path-metric` — **definition** `[LN]` on vertices.
6. `lem-path-metric-on-a-tree-is-geodesic-and-integer-valued` — **lemma**
   `[LL]`.
7. `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion` —
   **theorem** `[LA]`, translating item 4 to `thm-tree-characterisations` in
   both directions.
8. `def-graph-automorphism-and-group-action-on-a-simplicial-graph` —
   **definition** `[LN]`.
9. `def-edge-inversion-and-action-without-inversions` — **definition** `[LN]`.
10. `lem-barycentric-subdivision-removes-edge-inversions` — **lemma** `[LL]`,
    while preserving the action and tree property.
11. `def-quotient-graph-of-an-action-without-inversions` — **definition**
    `[LN]`, with incidence independent of orbit representatives.
12. `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions` —
    **lemma** `[LL]`.
13. `def-fixed-subtree-and-minimal-invariant-subtree` — **definition** `[LN]`,
    with existence conditional on a nonempty invariant subtree/supplied hull.
14. `lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree` —
    **lemma** `[LL]`.
15. `def-translation-length-of-a-tree-automorphism-without-inversions` —
    **definition** `[LN]`, $\ell(g)=\min_v d(v,gv)$; item 16 proves the minimum
    exists.
16. `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms` — **theorem**
    `[LL]` for automorphisms without inversions: either $g$ fixes a vertex or
    preserves a unique axis and translates by $\ell(g)>0$. LANDMARK.
17. `cor-translation-length-is-conjugacy-invariant-and-homogeneous` —
    **corollary** `[LL]`, $\ell(g^n)=|n|\ell(g)$.
18. `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision` —
    **lemma** `[LL]`, by the centre of a finite invariant subtree.
19. `cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free` —
    **corollary** `[LL]`.
20. `thm-ping-pong-for-hyperbolic-tree-automorphisms` — **theorem** `[LL]`,
    disjoint endpoint/axis hypotheses yielding a free subgroup.

### `fs-` items

- `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees`
  `[LN]`.
- `fs-every-tree-action-is-without-edge-inversions` `[LN]`.
- `fs-every-tree-automorphism-fixes-a-vertex` `[LN]`.
- `fs-translation-length-is-always-the-distance-from-an-arbitrary-basepoint`
  `[LN]`.
- `fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree` `[LN]`.

### B page — `simplicial-trees-and-group-actions-examples`

`ex-the-bi-infinite-line-and-its-translation-action` `[LL]` ·
`ex-regular-cayley-trees-of-free-groups` `[LL]` ·
`ex-an-edge-inversion-and-its-barycentric-subdivision` `[LL]` ·
`ex-a-finite-group-fixing-the-centre-of-a-tree` `[LL]` ·
`ex-elliptic-and-hyperbolic-automorphisms` `[AA]` ·
`cex-the-quotient-of-a-tree-can-have-cycles` `[LL]`.

### Sources and exact locators

- **Serre, *Trees*, I.§2 “Trees”, I.§3 “Trees and free groups”, and I.§6.4
  “Automorphisms of trees” (English ed., pp. 13--30, 63--66).** Primary
  standard monograph.
- **Dicks--Dunwoody, *Groups Acting on Graphs*, Part I, §§1--3.** Independent
  monograph treatment of oriented graphs, inversions, quotient graphs, and
  fixed subtrees.
- **Löh, *Geometric Group Theory*, §§3.1, 3.3.2--3.3.3, and §4.2 (pp. 40--42,
  50--52, 64--70).** Open full-text control for graph notation, Cayley trees,
  and free actions.

### Proof strategy and traps

All paths are finite even when the graph is infinite. The finite agreement
theorem translates edges and cycles rather than asserting syntactic identity
of graph models. For the axis theorem, the displacement function is shown to
attain its integer infimum and the union of segments $[g^nv,g^{n+1}v]$ is
proved embedded. Barycentric subdivision is invoked before any fixed-point
statement that would otherwise fail through an inversion.

**Forward references: NONE.**

---

## GT-15. Graphs of Groups and Bass--Serre Theory

**page id** `graphs-of-groups-and-bass-serre-theory`  
**`requires`** `simplicial-trees-and-group-actions`,
`hnn-extensions-and-brittons-lemma`, `free-products-and-amalgamation`

Bass--Serre theory is presented in both directions: a graph of groups builds a
tree action, and an action without inversions recovers a graph of stabiliser
groups. Amalgams and HNN extensions become the one-edge cases.

### A-page items, in dependency order

1. `def-graph-of-groups` — **definition** `[LN]`: a connected oriented graph in
   the sense of `GT-14`, vertex and geometric-edge groups, and injective
   boundary maps for each oriented edge, related by reversal.
2. `def-maximal-subtree-of-a-connected-graph` — **definition** `[LN]`, supplied
   as data in the arbitrary case.
3. `def-path-group-of-a-graph-of-groups` — **definition** `[LN]`, generated by
   vertex groups and oriented edges with reversal/conjugacy relations.
4. `def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree` —
   **definition** `[LN]`, quotienting the path group by tree edges.
5. `thm-fundamental-groups-from-different-maximal-trees-are-isomorphic` —
   **theorem** `[LL]`, with base vertex/path choices and resulting inner
   ambiguity stated.
6. `def-reduced-graph-of-groups-word` — **definition** `[LN]`.
7. `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` — **theorem**
   `[LL]`.
8. `cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group` —
   **corollary** `[LL]`.
9. `def-bass-serre-tree-of-a-graph-of-groups` — **definition** `[LN]`, vertices
   and edges as cosets with incidence maps proved representative-independent.
10. `lem-the-bass-serre-coset-graph-is-a-tree` — **lemma** `[LL]`, using normal
   form.
11. `thm-fundamental-group-acts-on-its-bass-serre-tree` — **theorem** `[LL]`,
    without inversions, quotient the original graph, and stabilisers conjugate
    to the vertex/edge groups. LANDMARK.
12. `def-quotient-graph-of-groups-from-a-tree-action` — **definition** `[LN]`,
    relative to orbit representatives and connecting elements.
13. `lem-boundary-monomorphisms-from-stabilizers-are-well-defined` — **lemma**
    `[LA]`, with change-of-representative conjugacies explicit.
14. `thm-bass-serre-structure-theorem` — **theorem** `[LL]`: a group acting
    without inversions on a tree is isomorphic to the fundamental group of its
    quotient graph of stabiliser groups.
15. `thm-one-segment-graph-of-groups-is-an-amalgamated-free-product` —
    **theorem** `[LA]`, agreeing with the published amalgam universal property.
16. `thm-one-loop-graph-of-groups-is-an-hnn-extension` — **theorem** `[LA]`,
    agreeing with `GT-6`.
17. `cor-a-group-acting-freely-without-inversions-on-a-tree-is-free` —
    **corollary** `[LL]`, relative to a supplied quotient maximal tree in the
    arbitrary case.
18. `cor-fundamental-group-of-a-graph-with-trivial-groups-is-free` —
    **corollary** `[LL]`, rank equal to the number of non-tree geometric edges
    when finite.
19. `thm-kurosh-subgroup-theorem` — **theorem** `[LL]`: a subgroup of a free
    product is a free product of a free group and conjugates of subgroups of
    the factors, with double-coset indexing stated. The arbitrary-family form
    is under AC; finite and explicitly indexed forms state only the selections
    actually used.
20. `thm-grushko-decomposition-and-rank-additivity` — **theorem** `[LL]` for
    finitely generated groups, decomposed at build into existence, terminal
    freely indecomposable factors, and uniqueness/rank statements.
21. `rem-stallings-theorem-on-ends-and-splittings` — **remark** `[LS]`,
    `proved_here: false`, exact finitely generated theorem; never a dependency
    target because ends have not been developed here.

### `fs-` items

- `fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition`
  `[LN]` — the algebraic construction is defined and only later compared.
- `fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy`
  `[LN]`.
- `fs-every-tree-action-is-a-free-action` `[LN]`.
- `fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data`
  `[LN]`.
- `fs-kurosh-says-every-subgroup-of-a-free-product-is-free` `[LN]`.

### B page — `graphs-of-groups-and-bass-serre-theory-examples`

`ex-bass-serre-tree-of-a-free-product` `[LL]` ·
`ex-bass-serre-tree-of-an-amalgamated-free-product` `[LL]` ·
`ex-bass-serre-tree-of-a-baumslag-solitar-group` `[LL]` ·
`ex-a-free-action-and-the-quotient-graph-basis` `[LL]` ·
`ex-kurosh-decomposition-of-a-subgroup` `[LL]` ·
`ex-graph-of-finite-groups-giving-a-virtually-free-group` `[LL]` ·
`cex-the-underlying-quotient-graph-does-not-determine-the-group` `[AA]`.

### Sources and exact locators

- **Serre, *Trees*, I.§4 “Fundamental groups of graphs of groups”, I.§5
  “Structure theorem”, and I.§6 “Applications” (English ed., pp. 31--75).**
  Primary standard monograph.
- **Dicks--Dunwoody, *Groups Acting on Graphs*, Part I, §§4--7 and Part II,
  §1.** Independent monograph control for normal forms and the converse.
- **Lyndon--Schupp, *Combinatorial Group Theory*, Chapter IV, §§1--2 and
  Chapter I, §4.** Independent algebraic proofs for amalgams, HNN, Kurosh, and
  rewriting.
- **Löh, *Geometric Group Theory*, Remark 4.2.6 and §§4.2--4.3 (pp. 64--79).**
  Open full-text placement and free-action control.

### Proof strategy and traps

The coset incidence maps are checked before “the Bass--Serre tree” is named.
Normal form proves connectedness and acyclicity, and also the vertex embeddings;
none is inferred from a picture. In the converse, chosen lifts alter boundary
maps by conjugacy, and the resulting fundamental groups are identified through
an explicit isomorphism. Kurosh follows by restricting the Bass--Serre action,
not by an unproved analogy with vector subspaces.

**Forward references: NONE.**

---

## GT-16. Inverse Systems, Profinite Groups, and Completion

**page id** `inverse-systems-profinite-groups-and-completion`  
**`requires`** `uniform-spaces`, `normal-subgroups-and-quotient-groups`

The page constructs inverse limits concretely because the category-theory
limit page lies later in the library. It then proves the topological group
properties, builds profinite completion from finite quotients, and isolates
residual finiteness and subgroup separability.

### A-page items, in dependency order

1. `def-directed-set-and-inverse-system-of-groups` — **definition** `[LN]`,
   groups $G_i$ and coherent maps $G_j\to G_i$ for $i\le j$.
2. `def-compatible-tuple-inverse-limit-of-groups` — **definition** `[LN]`,
   the subset of $\prod_iG_i$ satisfying every transition equation.
3. `lem-compatible-tuples-form-a-subgroup` — **lemma** `[LL]`; the identity
   tuple proves nonemptiness in ZF.
4. `def-coordinate-projections-from-an-inverse-limit` — **definition** `[LN]`.
5. `thm-concrete-inverse-limit-universal-property-in-groups` — **theorem**
   `[LL]`, existence and uniqueness coordinatewise.
When the category-theory limit page is authored, it owes a later agreement
theorem identifying its abstract limit with item 2. That seam is not an item or
a dependency of this pair.

6. `def-inverse-limit-topology-for-finite-discrete-groups` — **definition**
   `[LN]`, the product-subspace topology.
7. `lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup` —
   **lemma** `[LL]`.
8. `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` —
   **theorem** `[LL]`, with arbitrary product compactness marked BPI.
9. `def-profinite-group-by-inverse-limit` — **definition** `[LN]`.
10. `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis` —
    **lemma** `[LL]`.
11. `thm-continuity-into-an-inverse-limit-is-coordinatewise` — **theorem**
    `[LL]`.
12. `def-cofinal-subsystem` — **definition** `[LN]`.
13. `thm-cofinal-subsystems-have-isomorphic-inverse-limits` — **theorem**
    `[LL]`, with the choice needed for comparison maps stated.
14. `def-totally-disconnected-and-totally-separated-spaces` — **definition**
    `[LN]`; components are singletons versus distinct points separated by a
    clopen set. Neither notion is silently imported from an absent topology id.
15. `thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree` —
    **theorem** `[LL]`; no equivalence is claimed for arbitrary spaces.
16. `thm-topological-characterisation-of-profinite-groups` — **theorem**
    `[LL]`: a topological group is profinite iff it is compact, Hausdorff, and
    totally disconnected, equivalently it has a basis of open normal subgroups
    with finite quotients. The assumed compactness direction is ZF; BPI is used
    only to obtain compactness from an arbitrary product construction.
17. `def-profinite-topology-on-an-abstract-group` — **definition** `[LN]`,
    finite-index normal subgroups as a neighbourhood basis.
18. `def-finite-residual-and-residually-finite-group` — **definition** `[LN]`,
    $R_f(G)=\bigcap_{N\trianglelefteq_fG}N$.
19. `def-profinite-completion-of-an-abstract-group` — **definition** `[LN]`,
    $\widehat G=\varprojlim_{N\trianglelefteq_fG}G/N$.
20. `def-canonical-map-to-the-profinite-completion` — **definition** `[LN]`,
    $g\mapsto(gN)_N$—never written as an inclusion without item 21.
21. `thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion` —
    **theorem** `[LL]`, kernel $R_f(G)$ and dense image.
22. `cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite` —
    **corollary** `[LL]`.
23. `thm-universal-property-of-profinite-completion` — **theorem** `[LL]` for
    homomorphisms from $G$ to profinite groups that are continuous for the
    profinite topology.
24. `thm-profinite-completion-is-functorial` — **theorem** `[LL]`.
25. `rem-malcev-finitely-generated-linear-groups-are-residually-finite` —
    **remark** `[LS]`, `proved_here: false`, stating Wilkes Theorem 3.1.9
    exactly. The in-library proof route fails here because finite-residue
    separation for finitely generated coefficient domains belongs to the
    unauthored commutative-algebra CA-7 machinery. The result is retained as a
    canonical class of residually finite groups and is never load-bearing.
26. `thm-free-groups-are-residually-finite` — **theorem** `[LL]`, by finite
    permutation quotients/core graphs.
27. `def-subgroup-separable-and-lerf` — **definition** `[LN]`.
28. `thm-finitely-generated-free-groups-are-subgroup-separable` — **theorem**
    `[LL]`, Marshall Hall/Stallings, receiving the seam from `GT-5`.

### `fs-` items

- `fs-an-inverse-limit-of-groups-may-be-empty` `[LN]` — the identity tuple is
  always compatible.
- `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf`
  `[LN]` — this can require choice even for countable systems of finite sets.
- `fs-the-canonical-map-to-profinite-completion-is-always-injective` `[LN]`.
- `fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness`
  `[LN]`.
- `fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic` `[LN]`.

### B page — `inverse-systems-profinite-groups-and-completion-examples`

`ex-an-eventually-constant-inverse-system` `[LL]` ·
`ex-the-profinite-completion-of-a-finite-group` `[LL]` ·
`ex-the-profinite-completion-of-the-integers` `[LL]` ·
`ex-a-residually-finite-free-group` `[LL]` ·
`ex-a-dense-nonclosed-copy-of-a-group-in-its-completion` `[LL]` ·
`ex-a-non-residually-finite-baumslag-solitar-group` `[LL]` ·
`cex-same-finite-quotients-do-not-trivially-identify-abstract-groups` `[LL]`.

### Sources and exact locators

- **Wilkes, *Profinite Groups and Group Cohomology*, Chapter 1 §§1.1--1.3
  “Categories and limits”, “Inverse limits and profinite groups”, “Cofinal
  subsystems” (pp. 4--20), Chapter 2 §§2.1--2.3 (pp. 21--34), and Chapter 3
  §§3.1--3.2 “Profinite completions” (pp. 35--50).** Primary complete open
  source.
- **Ribes--Zalesskii, *Profinite Groups*, 2nd ed., Chapter 1 §§1.1--1.3 and
  Chapter 3 §3.2.** Standard monograph control for topology, completion, and
  free-group residual properties.
- **Ribes, *Profinite Graphs and Groups*, Chapter 1 §§1.1--1.5.** Independent
  monograph control for inverse systems and choice-sensitive projection facts.
- **Hall, “Coset representations in free groups”, *Trans. Amer. Math. Soc.* 67
  (1949), 421--432.** Original source for subgroup separability.

### Proof strategy and traps

The algebraic limit is a subgroup before topology enters. Inverse limits of
groups are never empty; the choice-sensitive claim is surjectivity of their
coordinate projections, not existence. Compactness of an arbitrary product is
labelled BPI. The completion map's kernel is computed before “embedding” is
used. The topological characterisation separates the already-compact direction
from construction of compact inverse limits.

**Forward references: NONE.**

---

## GT-17. Pro-$p$ Groups and the $p$-Adic Integers

**page id** `pro-p-groups-and-the-p-adic-integers`  
**`requires`** `inverse-systems-profinite-groups-and-completion`,
`frattini-subgroups-and-the-burnside-basis-theorem`,
`cyclic-groups-and-direct-products`

The page specialises the profinite theory to finite $p$-group quotients and
constructs $\mathbb Z_p$ as compatible residue classes. It then extends the
Frattini/Burnside generation principle to finitely generated pro-$p$ groups.

### A-page items, in dependency order

1. `def-pro-p-group` — **definition** `[LN]`, an inverse limit of finite
   $p$-groups.
2. `def-pro-p-completion-of-an-abstract-group` — **definition** `[LN]`, inverse
   limit over normal finite $p$-group quotients.
3. `thm-topological-characterisation-of-pro-p-groups` — **theorem** `[LL]`, by
   an open-normal basis with finite $p$-group quotients.
4. `def-p-adic-integers-as-compatible-residue-classes` — **definition** `[LN]`,
   $\mathbb Z_p=\varprojlim_n\mathbb Z/p^n\mathbb Z$ with reduction maps.
5. `lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group` —
   **lemma** `[LL]`.
6. `def-p-adic-metric-on-zp` — **definition** `[LN]`, directly from the first
   differing coordinate; multiplication and the valuation-ring structure are
   left to commutative algebra.
7. `thm-inverse-limit-topology-equals-the-p-adic-metric-topology` — **theorem**
   `[LL]`.
8. `thm-zp-is-compact-hausdorff-totally-disconnected-and-complete` — **theorem**
   `[LL]`; canonical residue digits give the diagonal compactness and
   completeness proofs in ZF, so the arbitrary-product BPI cost from `GT-16`
   is not imported here.
9. `def-canonical-map-from-the-integers-to-zp` — **definition** `[LN]`,
    $m\mapsto(m\bmod p^n)_n$—the number is written directly as the compatible
    residue tuple, without naming a separate embedding symbol.
10. `thm-the-integers-map-injectively-and-densely-into-zp` — **theorem** `[LL]`.
11. `prop-additive-group-of-zp-is-torsion-free` — **proposition** `[LL]`.
12. `prop-zp-is-topologically-generated-by-one` — **proposition** `[LL]`:
    the closure of $\mathbb Z\cdot1$ is all of $\mathbb Z_p$; it is not
    cyclic as an abstract group.
13. `thm-zp-is-the-pro-p-completion-of-the-integers` — **theorem** `[LL]`, by
    cofinality of $p^n\mathbb Z$ among normal $p$-power-index subgroups.
14. `prop-profinite-completion-of-z-is-the-product-of-all-zp` — **proposition**
    `[LL]`, $\widehat{\mathbb Z}\cong\prod_p\mathbb Z_p$, via Chinese
    remainder/cofinality.
15. `def-frattini-subgroup-of-a-profinite-group` — **definition** `[LN]`, the
    intersection of maximal proper closed subgroups.
16. `lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open` —
    **lemma** `[LL]`.
17. `thm-frattini-subgroup-commutes-with-surjective-inverse-limits` — **theorem**
    `[LL]` in the exact Wilkes hypotheses.
18. `thm-frattini-formula-for-finitely-generated-pro-p-groups` — **theorem**
    `[LL]`, $\Phi(G)=\overline{[G,G]G^p}$.
19. `thm-topological-burnside-basis-theorem` — **theorem** `[LL]`: a subset
    topologically generates $G$ iff its image spans $G/\Phi(G)$ over
    $\mathbb F_p$.
20. `cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini` —
    **corollary** `[LL]`.

### `fs-` items

- `fs-zp-is-the-profinite-completion-of-z` `[LN]` — it omits all prime-to-$p$
  quotients.
- `fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite`
  `[LN]`.
- `fs-zp-is-cyclic-as-an-abstract-group` `[LN]`.
- `fs-the-frattini-subgroup-of-a-pro-p-group-needs-no-topological-closure`
  `[LN]`.
- `fs-every-profinite-group-is-pro-p-for-some-prime` `[LN]`.

### B page — `pro-p-groups-and-the-p-adic-integers-examples`

`ex-compatible-p-adic-digit-sequences` `[LL]` ·
`ex-convergence-of-partial-p-adic-expansions` `[LL]` ·
`ex-a-cauchy-sequence-in-the-additive-p-adic-metric` `[LL]` ·
`ex-pro-p-completion-of-a-finite-p-group` `[LL]` ·
`ex-frattini-quotient-of-zp` `[LL]` ·
`ex-topological-generation-in-zp-squared` `[AA]` ·
`cex-an-abstractly-dense-proper-subgroup-of-zp` `[LL]`.

### Sources and exact locators

- **Wilkes, *Profinite Groups and Group Cohomology*, Chapter 2 §2.1 “The
  $p$-adic integers and pro-$p$ groups”, §2.2 “The profinite completion of the
  integers” (pp. 21--29), and Chapter 4 §4.1 “Generators of pro-$p$ groups”
  (pp. 55--58).** Primary complete open source.
- **Ribes--Zalesskii, *Profinite Groups*, 2nd ed., Chapter 2 §§2.1--2.4.**
  Independent standard monograph source for pro-$p$ groups, Frattini theory,
  and free pro-$p$ preliminaries.
- **Neukirch, *Algebraic Number Theory*, Chapter II, §4 “Completions” only for
  the agreement of compatible residues and the $p$-adic metric.** Arithmetic
  beyond the additive/topological group is out of scope.

### Proof strategy and traps

Compatible residues, not digit strings with nonunique representatives, are the
definition. The metric topology is proved to have the same basic balls as
projection kernels. Density of $\mathbb Z$ is coordinatewise surjectivity;
injectivity is divisibility by every $p^n$. The pro-$p$ Burnside theorem uses
closed generation and a closure on $[G,G]G^p$.

**Forward references: NONE.**

---

# Modular representation and finite-simple continuation

## GT-18. Modular Representations and Projective Covers

**page id** `modular-representations-and-projective-covers`  
**`requires`** `induced-representations-and-frobenius-reciprocity`,
`modules-and-module-homomorphisms`, `chain-conditions-and-semisimple-modules`,
`valuation-rings-and-discrete-valuation-rings`,
`inverse-limits-and-noetherian-completion`

This page begins exactly where Maschke fails: $k$ has characteristic $p$ and
$p\mid |G|$. A sufficiently large splitting $p$-modular system is supplied as
data, projective covers replace semisimple decompositions, and reduction of
lattices is kept separate from ordinary characters.

### A-page items, in dependency order

1. `def-p-modular-system` — **definition** `[LN]`, a triple $(K,\mathcal O,k)$
   with $\mathcal O$ a complete DVR, fraction field $K$ of characteristic
   $0$, and residue field $k$ of characteristic $p$.
2. `def-splitting-p-modular-system-for-a-finite-group` — **definition** `[LN]`,
   with “sufficiently large” requiring both $K$ and $k$ to split all subgroups
   used on the pages.
3. `def-og-lattice-and-reduction-modulo-the-maximal-ideal` — **definition**
   `[LN]`, a finitely generated $\mathcal O$-free $\mathcal OG$-module and
   $k\otimes_{\mathcal O}L$.
4. `lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module` —
   **lemma** `[LL]`.
5. `rem-maschke-failure-in-defining-characteristic` — **remark** `[LN]`,
   citing the RT-2 counterexample and not re-proving Maschke.
6. `def-jacobson-radical-of-a-finite-dimensional-algebra` — **definition**
   `[LN]`, intersection of maximal left ideals, with left/right agreement
   proved in the finite-dimensional setting.
7. `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple` —
   **theorem** `[LL]` for finite-dimensional algebras.
8. `thm-module-radical-is-jacobson-radical-times-the-module` — **theorem**
   `[LL]` for finite-dimensional modules.
9. `thm-nakayama-lemma-for-finite-dimensional-algebras` — **theorem** `[LL]`.
10. `prop-normal-p-subgroups-act-trivially-on-simple-modules` — **proposition**
    `[LL]` for characteristic $p$.
11. `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra` —
   **proposition** `[LL]`, with the coefficient-of-identity bilinear form.
12. `cor-finitely-generated-projective-kg-modules-are-injective-and-conversely` —
   **corollary** `[LL]`.
13. `def-module-radical-socle-head-and-loewy-series` — **definition package**
    `[LN]`, citing the general module definitions in its declared prerequisites.
14. `lem-radical-of-a-finite-length-module-is-superfluous` — **lemma** `[LL]`.
15. `def-essential-epimorphism-and-projective-cover` — **definition** `[LN]`.
16. `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras` —
    **theorem** `[LL]`, unique up to a generally nonunique isomorphism over the
    target.
17. `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules` —
    **theorem** `[LL]`, $P(S)\mapsto P(S)/\operatorname{rad}P(S)$.
18. `thm-krull-schmidt-for-finite-dimensional-kg-modules` — **theorem** `[LL]`,
    citing the general module theorem in the chain-condition prerequisite.
19. `cor-the-regular-module-decomposes-into-projective-indecomposables` —
    **corollary** `[LL]`, with multiplicities stated in the exact split-field
    form.
20. `thm-kg-is-local-iff-g-is-a-p-group` — **theorem** `[LL]` for finite $G$
    and field $k$ of characteristic $p$.
21. `cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p` —
    **corollary** `[LL]`.
22. `prop-restriction-and-induction-preserve-projectives` — **proposition**
    `[LL]`, citing RT-4's adjunction and freeness of $kG$ over $kH$.
23. `def-relative-projectivity` — **definition** `[LN]` for $H\le G$.
24. `thm-higman-criterion-for-relative-projectivity` — **theorem** `[LL]`,
    with the relative trace map and its module-endomorphism action printed.
25. `def-vertex-and-source-of-an-indecomposable-module` — **definition** `[LN]`,
    vertex a minimal $p$-subgroup for relative projectivity and source an
    indecomposable inducing summand.
26. `thm-green-vertex-source-existence-and-conjugacy` — **theorem** `[LL]`,
    vertices conjugate in $G$ and sources conjugate by the appropriate
    normaliser; no uniqueness stronger than the source states.
27. `cor-projective-indecomposable-modules-have-trivial-vertex` — **corollary**
    `[LL]` under the chosen vertex convention.

### `fs-` items

- `fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order`
  `[LN]`.
- `fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible` `[LN]`.
- `fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes`
  `[LN]`.
- `fs-a-vertex-is-a-vertex-of-the-cayley-graph` `[LN]`.
- `fs-projective-and-injective-modules-coincide-over-every-ring` `[LN]` — the
  symmetric finite-dimensional group algebra is essential.

### B page — `modular-representations-and-projective-covers-examples`

`ex-the-regular-module-of-cp-in-characteristic-p` `[LL]` ·
`ex-the-augmentation-ideal-and-loewy-series-for-kcp` `[LL]` ·
`ex-projective-cover-of-the-trivial-module-for-a-p-group` `[LL]` ·
`ex-reducing-an-integral-lattice-for-s-three` `[LL]` ·
`ex-relative-projectivity-detected-by-higmans-criterion` `[LL]` ·
`cex-an-ordinary-irreducible-with-reducible-mod-p-reduction` `[LL]`.

### Sources and exact locators

- **Webb, *A Course in Finite Group Representation Theory*, Chapter 6
  §§6.1--6.3 (pp. 91--103) and Chapter 7 §§7.1--7.4 (pp. 109--123).** Full
  author-hosted textbook backbone for radicals, simple modules, projectives,
  covers, and Cartan invariants.
- **Benson, *Representations and Cohomology I*, 2nd ed., §§1.6--1.8, §§2.1--2.8,
  and §3.3.** Independent monograph treatment of symmetric algebras, projective
  covers, and vertices.
- **Thévenaz, *G-Algebras and Modular Representation Theory*, Chapter 1
  §§1--4.** Independent source for $p$-modular systems, lattices, and relative
  projectivity.
- **Green, “On the indecomposable representations of a finite group”, *Math.
  Z.* 70 (1958), 430--445.** Original source for vertices and sources.

### Proof strategy and traps

The complete DVR and splitting assumptions are prerequisites, not decorative
notation; without the commutative-algebra completion page this pair is held
back. Projective-cover existence is proved for finite-dimensional algebras via
primitive idempotents/radicals. The symmetric form proves self-injectivity only
in the finite-dimensional group-algebra setting. Vertex minimality is taken
among $p$-subgroups and its conjugacy theorem is stated exactly.

**Forward references: NONE.**

---

## GT-19. Brauer Characters and Decomposition Matrices

**page id** `brauer-characters-and-decomposition-matrices`  
**`requires`** `modular-representations-and-projective-covers`,
`characters-and-the-orthogonality-relations`

Brauer characters recover character-like invariants on $p$-regular elements
without pretending that modular representations are semisimple. Decomposition
and Cartan matrices record reduction and projective covers under the fixed
splitting $p$-modular system.

### A-page items, in dependency order

1. `def-p-regular-and-p-singular-elements` — **definition** `[LN]`.
2. `lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers` —
   **lemma** `[LL]`.
3. `def-teichmuller-lift-in-a-splitting-p-modular-system` — **definition**
   `[LN]`, lifting roots of unity of order prime to $p$.
4. `lem-teichmuller-lift-is-multiplicative-and-unique` — **lemma** `[LL]`.
5. `def-brauer-character-of-a-finite-dimensional-kg-module` — **definition**
   `[LN]`: on a $p$-regular $g$, sum the Teichmüller lifts of its eigenvalues.
6. `lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation` —
   **lemma** `[LL]` under the sufficiently large system hypothesis.
7. `prop-brauer-characters-are-class-functions-on-p-regular-elements` —
   **proposition** `[LL]`.
8. `thm-brauer-character-is-additive-on-short-exact-sequences` — **theorem**
   `[LL]`; direct-sum and Grothendieck-group consequences follow.
9. `thm-brauer-nesbitt-module-determination` — **theorem** `[LL]`: over a
   splitting field, semisimplifications are isomorphic iff Brauer characters
   agree.
10. `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions` —
    **theorem** `[LL]`. LANDMARK.
11. `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes` —
    **corollary** `[LL]`.
12. `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups` —
    **definition** `[LN]`, through an invariant $\mathcal O$-lattice.
13. `thm-decomposition-map-is-independent-of-the-stable-lattice` — **theorem**
    `[LL]` as a class in the modular Grothendieck group; the reduced modules
    need not be isomorphic.
14. `def-decomposition-numbers-and-decomposition-matrix` — **definition**
    `[LN]`, $\chi^0=\sum_\varphi d_{\chi\varphi}\varphi$ on $p$-regular
    elements.
15. `lem-decomposition-numbers-are-nonnegative-integers` — **lemma** `[LL]`.
16. `def-projective-indecomposable-characters-and-cartan-invariants` —
    **definition** `[LN]`.
17. `thm-brauer-reciprocity` — **theorem** `[LL]`, decomposition numbers equal
    the multiplicities of ordinary irreducibles in projective indecomposable
    characters.
18. `thm-cartan-matrix-is-d-transpose-d` — **theorem** `[LL]` under the fixed
    indexing and splitting hypotheses.
19. `def-p-blocks-by-primitive-central-idempotents` — **definition** `[LN]`,
    citing the algebra idempotent machinery.
20. `thm-blocks-partition-ordinary-and-brauer-irreducible-characters` —
    **theorem** `[LL]`.
21. `prop-decomposition-matrix-is-block-diagonal-after-block-ordering` —
    **proposition** `[LL]`.
22. `rem-defect-groups-and-brauer-main-theorems` — **remark** `[LS]`,
    `proved_here: false`: exact orientation only; local block theory is a
    sequel and no main theorem is used on this page.

### `fs-` items

- `fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace` `[LN]`.
- `fs-modular-representations-are-determined-by-ordinary-characters` `[LN]`.
- `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible` `[LN]`.
- `fs-the-cartan-matrix-equals-the-decomposition-matrix` `[LN]`.
- `fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character`
  `[LN]`.

### B page — `brauer-characters-and-decomposition-matrices-examples`

`ex-brauer-characters-of-a-p-group` `[LL]` ·
`ex-p-regular-classes-of-s-three` `[LL]` ·
`ex-decomposition-matrix-of-s-three-in-characteristic-two` `[LL]` ·
`ex-cartan-matrix-from-d-transpose-d` `[LL]` ·
`ex-a-block-with-one-ordinary-and-one-brauer-character` `[LL]` ·
`cex-ordinary-trace-on-a-p-singular-unipotent-element` `[LL]`.

### Sources and exact locators

- **Isaacs, *Character Theory of Finite Groups*, Chapter 15 §§15A--15C
  “Brauer characters”, decomposition numbers, and blocks.** Standard textbook
  source for characters and decomposition matrices.
- **Webb, *A Course in Finite Group Representation Theory*, Chapter 9
  §§9.1--9.5 (pp. 147--174) and Chapter 10 §§10.1--10.3 (pp. 175--189).**
  Independent full-text proof route for modular systems, reduction,
  decomposition/Cartan matrices, and Brauer characters.
- **Serre, *Linear Representations of Finite Groups*, Part III, Chapters 15--18
  “Modular representations” and “Brauer characters”.** Independent standard
  treatment and convention control.
- **Brauer, “On modular and $p$-adic representations of algebras”, *Proc.
  Natl. Acad. Sci. USA* 25 (1939), full article pp. 252--258; and
  Brauer--Nesbitt, “On the modular characters of groups”, *Ann. of Math.* 42
  (1941), full article pp. 556--590.** Original-result provenance for the
  modular-system and Brauer-character constructions; neither is used as the
  sole proof source.

### Proof strategy and traps

Teichmüller lifting is proved before the trace-like sum is formed. Additivity is
proved on exact sequences by triangular matrices, not inferred from
semisimplicity. Independence of the stable lattice is the key obligation for
the decomposition map. $C=D^{\mathsf T}D$ is typed carefully: its rows and
columns use the ordinary, Brauer, and projective index sets in the source's
order.

**Forward references: NONE.**

---

## GT-20. The Finite Simple Group Classification Landscape

**page id** `the-finite-simple-group-classification-landscape`  
**`requires`** `socles-and-the-onan-scott-landscape`,
`composition-series-and-solvable-groups`,
`sylow-theorems-and-nilpotent-groups`

This page states what CFSG classifies, identifies the families without opening
Lie-algebra structure theory, and records the status and scale of the proof.
The classification theorem and all CFSG-dependent consequences are
non-load-bearing sourced survey items.

### A-page items, in dependency order

1. `rem-simple-groups-as-composition-factors` — **remark** `[LN]`, citing the
   published Jordan--Hölder theorem and not claiming that factors determine an
   extension.
2. `def-quasisimple-group-component-and-layer` — **definition package** `[LN]`:
   quasisimple means perfect with simple central quotient; $E(G)$ is generated
   by subnormal quasisimple components.
3. `lem-distinct-components-commute` — **lemma** `[LL]`.
4. `def-generalized-fitting-subgroup` — **definition** `[LN]`,
   $F^*(G)=F(G)E(G)$, citing AG-4's Fitting subgroup.
5. `thm-generalized-fitting-subgroup-contains-its-centralizer` — **theorem**
   `[LL]`, $C_G(F^*(G))\le F^*(G)$ for finite $G$.
6. `def-p-local-subgroup` — **definition** `[LN]`, a normalizer of a nontrivial
   $p$-subgroup, included only to read historical local analysis.
7. `rem-cyclic-and-alternating-simple-families` — **remark** `[LN]`, citing
   published simplicity of $A_n$ and prime cyclic groups.
8. `rem-finite-simple-groups-of-lie-type-as-named-families` — **remark** `[LS]`,
   naming the classical, exceptional, twisted, and Suzuki--Ree families from a
   source table without defining them through Lie algebras.
9. `rem-the-twenty-six-sporadic-simple-groups` — **remark** `[LS]`, exact list
   supplied in a source table; no construction or asserted pattern.
10. `thm-classification-of-finite-simple-groups` — **theorem** `[LS]`,
    `proved_here: false`: every finite simple group is cyclic of prime order,
    alternating of degree at least $5$, of Lie type, or one of the 26 sporadic
    groups, subject to the standard low-rank isomorphism convention. LANDMARK;
    never a dependency target.
11. `rem-low-rank-coincidences-and-duplicate-family-names` — **remark** `[LS]`,
    pointing to the source's explicit table rather than improvising exclusions.
12. `rem-history-of-the-first-generation-classification` — **remark** `[LS]`,
    date- and source-controlled account of the 1950s--1980s programme.
13. `rem-the-quasithin-gap-and-its-repair` — **remark** `[LS]`, citing
    Aschbacher--Smith (2004).
14. `rem-status-of-the-second-generation-proof` — **remark** `[LS]`,
    date-stamped 2026-08-14: the Gorenstein--Lyons--Solomon series remains an
    ongoing project toward a complete revised proof; it is not described as
    finished.
15. `thm-feit-thompson-odd-order-theorem` — **theorem** `[LS]`,
    `proved_here: false`, included as a historical landmark and never used.
16. `rem-schreier-conjecture-as-a-cfsg-consequence` — **remark** `[LS]`, outer
    automorphism groups of finite simple groups are solvable; no later theorem
    depends on it.
17. `rem-two-generation-of-finite-simple-groups` — **remark** `[LS]`, exact
    CFSG-dependent theorem and source.
18. `rem-what-the-library-does-and-does-not-prove-about-cfsg` — **remark**
    `[AN]`: it proves the elementary families already present and the local
    generalized-Fitting theorem, but not classification, recognition, order
    formulas, character tables, or sporadic constructions.

### `fs-` items

- `fs-cfsg-says-every-finite-group-is-simple` `[LN]`.
- `fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism`
  `[LN]`.
- `fs-all-finite-simple-groups-are-alternating-or-cyclic` `[LN]`.
- `fs-the-library-proves-the-classification-of-finite-simple-groups` `[LN]`.
- `fs-the-second-generation-cfsg-proof-is-complete-as-of-2026` `[LN]`.
- `fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure`
  `[LN]` — that subject is denied by seam.

### B page — `the-finite-simple-group-classification-landscape-examples`

`ex-cyclic-simple-groups-of-prime-order` `[LL]` ·
`ex-a-five-as-the-smallest-nonabelian-simple-group` `[LL]` ·
`ex-psl-two-seven-and-a-low-rank-coincidence` `[LS]` ·
`ex-a-suzuki-group-family-entry` `[LS]` ·
`ex-the-mathieu-groups-among-the-sporadics` `[LS]` ·
`cex-composition-factors-do-not-determine-the-extension` `[LL]`.

### Sources and exact locators

- **Gorenstein--Lyons--Solomon, *The Classification of the Finite Simple
  Groups*, Number 1, Part I, Chapters 1--2; and AMS series status through
  Number 10 (2023), checked 2026-08-14.** Authoritative statement, family
  convention, programme scope, and current second-generation status.
- **Wilson, *The Finite Simple Groups*, Graduate Texts in Mathematics 251,
  Introduction and Chapters 1, 2, 4, 8, and 10.** Independent graduate-text
  survey of families and low-rank coincidences.
- **Solomon, “A brief history of the classification of the finite simple
  groups”, *Bull. Amer. Math. Soc.* 38 (2001), §§1--5.** Historical survey.
- **Aschbacher--Smith, *The Classification of Quasithin Groups*, AMS
  Mathematical Surveys and Monographs 111 (2004), Preface and Main Theorem.**
  Authoritative repair/status source.
- **Milne, *Group Theory*, “The Hölder program” (pp. 52--54).** Open full-text
  convention control and concise list, never proof provenance.

### Proof strategy and traps

Only items 2--5 are locally proved, and their proofs come from standard finite-
group theory rather than classification. The classification statement is
finitary, but the foundation strength of the enormous external proof is not
audited or labelled ZF. Family counts and exclusions are delegated to an
explicit source table because low-rank coincidences make casual lists false.
The status paragraph distinguishes the established classification from the
still-ongoing second-generation re-proof.

**Forward references: NONE.**

---

# Low-degree cohomology and central extensions

## GT-21. Crossed Homomorphisms, Complements, and First Cohomology

**page id** `crossed-homomorphisms-complements-and-first-cohomology`  
**`requires`** `group-extensions-complements-and-schur-zassenhaus`,
`group-cohomology-as-a-derived-functor`

This page proves the concrete degree-one model and its agreement with HA-12.
For an abelian $G$-module, $H^1$ is a quotient group; for a nonabelian
$G$-group it is only a pointed set. Complements in a semidirect product realise
both forms.

### A-page items, in dependency order

1. `def-crossed-homomorphism-for-a-g-module` — **definition** `[LN]`,
   $f(gh)=f(g)+g\cdot f(h)$ in additive notation.
2. `lem-crossed-homomorphisms-form-an-abelian-group` — **lemma** `[LL]` for
   abelian coefficients.
3. `def-principal-crossed-homomorphism` — **definition** `[LN]`,
   $f_m(g)=g\cdot m-m$.
4. `lem-principal-crossed-homomorphisms-form-a-subgroup` — **lemma** `[LL]`.
5. `def-first-cohomology-by-crossed-homomorphisms` — **definition** `[LN]`,
   $H^1_{\mathrm{cr}}(G,M)=Z^1(G,M)/B^1(G,M)$.
6. `thm-crossed-homomorphism-model-agrees-with-derived-first-group-cohomology` —
   **theorem** `[LL]`, by identifying degree-one cocycles/coboundaries in
   HA-12's inhomogeneous bar complex. LANDMARK.
7. `cor-first-cohomology-with-trivial-action-is-hom` — **corollary** `[LL]`,
   $H^1(G,M)\cong\operatorname{Hom}(G,M)$ for trivial action.
8. `cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes` —
   **corollary** `[LA]`, under the exact averaging hypotheses.
9. `def-graph-subgroup-of-a-crossed-homomorphism` — **definition** `[LN]`,
   $C_f=\{(f(g),g):g\in G\}\le M\rtimes G$.
10. `lem-graph-is-a-complement-iff-the-function-is-a-one-cocycle` — **lemma**
    `[LL]`.
11. `lem-conjugation-by-m-corresponds-to-a-principal-coboundary` — **lemma**
    `[LL]`, with the sign convention checked.
12. `thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy` —
    **theorem** `[LL]`: $H^1(G,M)$ bijects with $M$-conjugacy classes of
    complements to $M$ in $M\rtimes G$.
13. `def-nonabelian-one-cocycle-and-nonabelian-h-one` — **definition** `[LN]`,
    a pointed orbit set under $M$, not a quotient group.
14. `thm-nonabelian-h-one-classifies-complements-as-a-pointed-set` — **theorem**
    `[LL]`.
15. `def-restriction-inflation-and-conjugation-on-first-cohomology` —
    **definition** `[LN]`, using HA-12's cochain maps and writing the
    degree-one formulas explicitly.
16. `thm-inflation-restriction-exact-sequence-in-degree-one` — **theorem**
    `[LL]` in the exact normal-subgroup hypotheses, proved directly with
    crossed homomorphisms. `GT-22` later checks agreement with HA-17's
    five-term sequence.

### `fs-` items

- `fs-every-crossed-homomorphism-is-an-ordinary-homomorphism` `[LN]`.
- `fs-nonabelian-h-one-is-always-a-group` `[LN]`.
- `fs-h-one-classifies-all-subgroups-of-a-semidirect-product` `[LN]` — only
  complements, up to the specified conjugacy.
- `fs-complements-are-identified-up-to-conjugacy-by-the-whole-semidirect-product`
  `[LN]` — the basic $H^1$ quotient uses kernel conjugacy.
- `fs-the-derived-and-crossed-homomorphism-definitions-need-no-agreement-proof`
  `[LN]`.

### B page — `crossed-homomorphisms-complements-and-first-cohomology-examples`

`ex-h-one-for-a-trivial-action` `[LL]` ·
`ex-crossed-homomorphisms-for-a-cyclic-group` `[LL]` ·
`ex-complements-in-an-affine-group` `[LL]` ·
`ex-conjugate-complements-and-a-principal-cocycle` `[AA]` ·
`ex-nonabelian-h-one-as-a-pointed-set` `[LL]` ·
`cex-a-crossed-homomorphism-that-is-not-a-homomorphism` `[LL]`.

### Sources and exact locators

- **Brown, *Cohomology of Groups*, Chapter I §§2--5 and Chapter IV §2.**
  Standard monograph source for crossed homomorphisms and low-degree exactness.
- **Weibel, *An Introduction to Homological Algebra*, §6.4 “Low-dimensional
  cohomology” (pp. 175--181).** Independent textbook treatment and direct seam
  to HA-12's harvested but assigned-away section.
- **Wilkes, *Profinite Groups and Group Cohomology*, Chapter 5 §§5.1--5.2
  “Cohomology of groups” through low-degree cohomology (pp. 72--86).** Complete
  open-note control.
- **Serre, *Galois Cohomology*, I.§5, Propositions 36--38.** Independent source
  for nonabelian $H^1$ and complements.

### Proof strategy and traps

The degree-one bar differential is written out, so the cocycle equation and
principal coboundaries agree without a convention jump. Multiplication in
$M\rtimes G$ proves exactly the same equation. Conjugation is calculated before
passing to orbits. Additive notation is used only for abelian coefficients;
the nonabelian pointed-set page segment switches explicitly to multiplicative
notation.

**Forward references: NONE.**

---

## GT-22. Second Cohomology and Abelian-Kernel Extensions

**page id** `second-cohomology-and-abelian-kernel-extensions`  
**`requires`** `crossed-homomorphisms-complements-and-first-cohomology`,
`group-cohomology-as-a-derived-functor`,
`grothendieck-spectral-sequences-and-computations`

This page makes factor sets do all the work. A section of an extension produces
a normalized $2$-cocycle; changing the section changes it by a coboundary; and
the reverse construction puts a group law on $M\times G$. The resulting
bijection is then proved to respect Baer sum.

### A-page items, in dependency order

1. `def-normalized-two-cocycle-and-two-coboundary` — **definition** `[LN]` for
   a $G$-module $M$, with the full inhomogeneous cocycle equation.
2. `lem-normalized-two-cocycles-and-coboundaries-form-groups` — **lemma** `[LL]`.
3. `def-second-cohomology-by-factor-sets` — **definition** `[LN]`,
   $H^2_{\mathrm{fs}}(G,M)=Z^2(G,M)/B^2(G,M)$.
4. `thm-factor-set-model-agrees-with-derived-second-group-cohomology` —
   **theorem** `[LL]`, by HA-12's degree-two bar differential. LANDMARK.
5. `def-extension-inducing-a-prescribed-abelian-kernel-action` — **definition**
   `[LN]`; conjugation through a lift is independent because $M$ is abelian.
6. `def-normalized-set-theoretic-section-and-factor-set` — **definition** `[LN]`,
   $f(g,h)=s(g)s(h)s(gh)^{-1}\in M$.
7. `lem-factor-set-of-a-section-is-a-normalized-two-cocycle` — **lemma** `[LL]`,
   associativity supplies the cocycle equation.
8. `lem-changing-the-section-changes-the-factor-set-by-a-coboundary` —
   **lemma** `[LL]`.
9. `cor-an-extension-determines-a-well-defined-h-two-class` — **corollary**
   `[LL]`, relative to existence of a section; arbitrary quotients use AC,
   finite quotients ZF.
10. `def-twisted-product-extension-from-a-two-cocycle` — **definition** `[LN]`,
    $(m,g)(n,h)=(m+g\cdot n+f(g,h),gh)$ on $M\times G$.
11. `lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle` —
    **lemma** `[LL]`, with identity and inverse checked.
12. `lem-cohomologous-two-cocycles-give-equivalent-extensions` — **lemma**
    `[LL]`, and the converse.
13. `thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action` —
    **theorem** `[LL]`, a natural bijection between $H^2(G,M)$ and equivalence
    classes of extensions inducing the specified action.
14. `cor-zero-h-two-class-is-equivalent-to-splitting` — **corollary** `[LL]`.
15. `def-baer-sum-of-abelian-kernel-extensions` — **definition** `[LN]`, via
    pullback over $G$ followed by pushout along addition $M\oplus M\to M$.
16. `lem-baer-sum-is-independent-of-extension-representatives` — **lemma**
    `[LL]`.
17. `thm-baer-sum-agrees-with-addition-in-h-two` — **theorem** `[LL]`.
18. `cor-central-extensions-are-classified-by-h-two-with-trivial-action` —
    **corollary** `[LL]`.
19. `thm-five-term-exact-sequence-as-extension-and-transgression-data` —
    **theorem** `[LA]`, using HA-17 and interpreting only arrows already
    constructed there.
20. `rem-nonabelian-extension-obstruction-in-h-three` — **remark** `[LS]`,
    agreement with `GT-9`'s exact Eilenberg--Mac Lane theorem; no proof or
    dependency.

### `fs-` items

- `fs-every-function-g-times-g-to-m-is-a-factor-set` `[LN]`.
- `fs-the-factor-set-is-independent-of-the-section-as-a-function` `[LN]`.
- `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` `[LN]`.
- `fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic`
  `[LN]`.
- `fs-the-zero-h-two-class-corresponds-to-the-direct-product-only` `[LN]` — it
  gives the semidirect product for the fixed action.

### B page — `second-cohomology-and-abelian-kernel-extensions-examples`

`ex-the-cp-squared-extension-as-a-nonzero-two-cocycle` `[LL]` ·
`ex-the-split-extension-as-the-zero-cocycle` `[LL]` ·
`ex-central-extensions-of-a-cyclic-group` `[LL]` ·
`ex-the-quaternion-and-dihedral-central-extension-classes` `[LL]` ·
`ex-changing-a-section-by-a-one-cochain` `[AA]` ·
`ex-baer-sum-of-two-factor-sets` `[AA]` ·
`cex-same-middle-group-with-inequivalent-extension-maps` `[LL]`.

### Sources and exact locators

- **Brown, *Cohomology of Groups*, Chapter IV §§3--6 “Extensions”, factor
  sets, and the extension classification.** Standard monograph backbone.
- **Weibel, *An Introduction to Homological Algebra*, §6.6 “Extensions and
  $H^2$” (pp. 186--191).** Independent textbook route and explicit seam from
  HA-12.
- **Wilkes, *Profinite Groups and Group Cohomology*, §5.3 “Cohomology and group
  extensions” (pp. 86--94).** Complete open-note treatment.
- **Mac Lane, *Homology*, Chapter IV §§7--9.** Independent source for factor
  sets and Baer sum.

### Proof strategy and traps

The source and target of every section are printed. Associativity of the
twisted product is expanded once and matches the cocycle equation term for
term. Equivalence of extensions fixes both $M$ and $G$; an arbitrary middle-
group isomorphism is insufficient. For arbitrary $G$, existence of the initial
set-theoretic section is labelled AC; the classification theorem is also
formulated relative to a supplied section model so no hidden global choice is
needed after that datum.

**Forward references: NONE.**

---

## GT-23. Schur Multipliers and Universal Central Extensions

**page id** `schur-multipliers-and-universal-central-extensions`  
**`requires`** `second-cohomology-and-abelian-kernel-extensions`,
`group-cohomology-as-a-derived-functor`, `ext-and-balanced-resolutions`,
`tensor-products-of-modules`

The final pair separates homology from cohomology: the Schur multiplier is
$H_2(G,\mathbb Z)$, while central extensions by $A$ are measured by
$H^2(G,A)$. Hopf's formula and the universal coefficient sequence connect the
two, and perfect groups acquire universal central extensions.

### A-page items, in dependency order

1. `def-schur-multiplier-of-a-group` — **definition** `[LN]`,
   $M(G)=H_2(G,\mathbb Z)$ using HA-12's group homology, not $H^2(G,\mathbb C^\times)$
   by definition.
2. `def-free-presentation-kernel-data` — **definition** `[LN]`,
   $1\to R\to F\to G\to1$ supplied.
3. `lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists` — **lemma**
   `[LL]`, proving $[F,R]\trianglelefteq R\cap[F,F]$.
4. `def-hopf-formula-quotient` — **definition** `[LN]`,
   $(R\cap[F,F])/[F,R]$, now licensed by item 3.
5. `thm-hopf-formula-for-the-schur-multiplier` — **theorem** `[LL]`,
   $H_2(G,\mathbb Z)\cong(R\cap[F,F])/[F,R]$, naturally enough to prove
   independence of presentation. LANDMARK.
6. `cor-hopf-formula-is-independent-of-the-free-presentation` — **corollary**
   `[LA]`, through item 5, not a direct claim about quotient syntax.
7. `prop-schur-multiplier-of-a-free-group-is-trivial` — **proposition** `[LL]`.
8. `prop-schur-multiplier-of-a-cyclic-group-is-trivial` — **proposition** `[LL]`.
9. `def-exterior-square-of-an-abelian-group` — **definition** `[LN]`,
   $\bigwedge^2 A=(A\otimes_{\mathbb Z}A)/\langle a\otimes a:a\in A\rangle$.
10. `lem-exterior-square-has-the-alternating-universal-property` — **lemma**
    `[LL]`, proving that the quotient is independent of tensor representatives.
11. `thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square` —
    **theorem** `[LL]`, $M(A)\cong\bigwedge^2 A$ naturally.
12. `def-central-and-stem-extensions` — **definition** `[LN]`, stem meaning
    kernel contained in $Z(E)\cap E'$.
13. `def-universal-central-extension` — **definition** `[LN]`, initial among
    central extensions of $G$ with commuting map over $G$.
14. `lem-universal-central-extension-is-unique-up-to-unique-isomorphism` —
    **lemma** `[LA]`.
15. `thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect` —
    **theorem** `[LL]`.
16. `def-universal-central-extension-from-a-free-presentation` — **definition**
    `[LN]`, $[F,F]/[F,R]\to G$ for perfect $G$.
17. `lem-free-presentation-construction-is-a-central-extension` — **lemma**
    `[LL]`.
18. `thm-free-presentation-construction-has-the-universal-property` —
    **theorem** `[LL]`.
19. `cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier` —
    **corollary** `[LL]`, by Hopf's formula.
20. `def-superperfect-group` — **definition** `[LN]`, $H_1=H_2=0$.
21. `prop-universal-central-extension-group-is-superperfect` — **proposition**
    `[LL]` under the standard hypotheses.
22. `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two` —
    **theorem** `[LL]` for the trivial $G$-module $A$,
    $0\to\operatorname{Ext}^1_{\mathbb Z}(G_{\rm ab},A)\to H^2(G,A)
    \to\operatorname{Hom}(M(G),A)\to0$, with naturality and noncanonical
    splitting qualifications.
23. `cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier` —
    **corollary** `[LL]`.
24. `def-schur-covering-group-of-a-finite-group` — **definition** `[LN]`, a
    stem extension with kernel isomorphic to $M(G)$.
25. `thm-existence-of-schur-covering-groups-for-finite-groups` — **theorem**
    `[LL]`; uniqueness is not claimed in general.
26. `rem-projective-representations-and-the-schur-multiplier` — **remark**
    `[LS]`, exact orientation to projective representations, deferred because
    ordinary RT does not develop factor sets in $K^\times$.

### `fs-` items

- `fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units`
  `[LN]`.
- `fs-hopfs-formula-is-obviously-independent-of-the-presentation` `[LN]`.
- `fs-every-group-has-a-universal-central-extension` `[LN]`.
- `fs-every-central-extension-is-a-stem-extension` `[LN]`.
- `fs-schur-covering-groups-are-unique-for-all-finite-groups` `[LN]`.
- `fs-the-universal-coefficient-short-exact-sequence-splits-naturally` `[LN]`.

### B page — `schur-multipliers-and-universal-central-extensions-examples`

`ex-schur-multiplier-of-a-cyclic-group` `[LL]` ·
`ex-schur-multiplier-of-a-finite-abelian-group` `[LL]` ·
`ex-the-binary-icosahedral-cover-of-a-five` `[LL]` ·
`ex-hopf-formula-from-a-one-relator-presentation` `[LL]` ·
`ex-a-stem-extension-that-is-not-universal` `[AA]` ·
`cex-nonuniqueness-of-schur-covering-groups` `[LL]`.

### Sources and exact locators

- **Brown, *Cohomology of Groups*, Chapter II §5 and Chapter VII §§5--7.**
  Standard monograph source for Hopf's formula and central extensions.
- **Karpilovsky, *The Schur Multiplier*, Chapters 2 §§2.1--2.5 and 3
  §§3.1--3.4.** Specialist monograph control for covers, perfect groups, and
  examples.
- **Weibel, *An Introduction to Homological Algebra*, §§6.4 and 6.6, plus the
  degree-two universal-coefficient result in §3.6.** Independent textbook seam
  to HA.
- **Milnor, “Introduction to algebraic K-theory”, Annals of Mathematics
  Studies 72, §5.** Independent universal-central-extension construction.
- **Hopf, “Fundamentalgruppe und zweite Bettische Gruppe”, *Comment. Math.
  Helv.* 14 (1942), 257--309.** Original formula provenance.

### Proof strategy and traps

The five-term homology sequence applied to a free presentation proves Hopf's
formula and supplies naturality. Perfectness makes $[F,F]$ surject onto $G$;
commutator lifting then proves universality. The universal-coefficient theorem
keeps $H_2$ and $H^2$ distinct and labels its splitting nonnatural. Covering
groups are not declared unique without the additional hypotheses in the
specialist source.

**Forward references: NONE.**

---

## 24. Canonical-coverage harvest

This section records what was actually read. `Included` names an A/B pair or a
specific item; `inline` names the item whose proof absorbs the result;
`already-published` names the live item/page; `amendment` names another owner's
page; and every `deferred` or `out-of-scope` entry states why that particular
heading does not belong to this scaffold. Exercises were harvested only when a
pair explicitly uses one as a sourced example; no exercise list is inflated
into theorem items.

### 24.1 Milne, *Group Theory*, full text

Full text and contents: <https://www.jmilne.org/math/CourseNotes/GT.pdf>.
Read Chapter 2 pp. 31--41, Chapter 3 pp. 43--54, Chapter 4 pp. 57--73, and
Chapter 6 pp. 87--99.

| source heading or named result | disposition |
|---|---|
| Ch. 2 “Free monoids” | already-published `def-alphabet-words-and-reduction` and the monoid band |
| “Free groups”; Theorem 2.6 Nielsen--Schreier | free-group construction already published; Nielsen--Schreier included `GT-5`, with Milne's missing proof supplied independently |
| “Generators and relations” | already-published `def-group-presentation` and surrounding 32-item authored page |
| “Finitely presented groups” | included `GT-7`; finite-presentation preservation already published under the Tietze ids |
| “Coxeter groups” | out-of-scope: a Coxeter/reflection-group block needs root/reflection geometry and is not required by the commissioned continuations |
| Ch. 3 “Automorphisms of groups” | already-published automorphism basics and AG-3 |
| “Characteristic subgroups” | already-published `def-characteristic-subgroup` and its normality/transitivity lemma |
| “Semidirect products” | planned AG-3; cited, not re-minted |
| “Extensions of groups”; split criteria; Theorem 3.21 Schur--Zassenhaus; Proposition 3.22 complete kernel; induced outer action | included `GT-9`; Milne's cited-only Schur--Zassenhaus proof is supplied from Meier/Robinson |
| “The Hölder program” | included as bounded survey `GT-20`; extension classification itself developed `GT-21`--`GT-23` |
| Ch. 4 “Definition and examples” | already-published group-action page |
| “Permutation groups” | included `GT-3`; elementary symmetric-group facts already published |
| “The Todd--Coxeter algorithm” | B-page `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure`; no false total-termination claim |
| “Primitive actions”; Proposition 4.43, Proposition 4.44, Theorem 4.45 | included/inline `GT-3` block and maximal-stabiliser items |
| Ch. 6 “Subnormal Series” and “Solvable groups” | already-published `composition-series-and-solvable-groups` |
| “Nilpotent groups” | already-published central-series items and planned AG-4; growth consequences included `GT-11` |
| “Groups with operators” | deferred: operator groups are not needed after actions/modules are explicit and would require a separate convention/agreement page |
| “Krull--Schmidt theorem” | abstract-algebra module track; modular finite-length instance cited on `GT-18` |

### 24.2 Craven, *The Theory of p-Groups*, full text

Full text and contents:
<https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf>. Read §1.1
pp. 1--2, §§2.1--2.3 pp. 6--18, and Chapter 3 §§3.1--3.3 pp. 19--27.

| heading/result | disposition |
|---|---|
| §1.1 “Soluble Groups”; Fitting Theorems 1.1--1.2 | Fitting definition/product planned AG-4; product of $p$-cores and solvable centralizer included `GT-1` |
| §1.2 “Lie Algebras” | out-of-scope: seam assigns all Lie-algebra structure to differential geometry |
| §1.3 “The Number of Groups” | B-page context only; enumerating groups of each small order is a classification-computation sequel |
| §1.4 “Sylow Structure of Groups” | already/planned AG-4 |
| §2.1 “Commutators”; Lemma 2.11, Three Subgroup Lemma 2.12, Fitting Theorem 2.15 | commutator basics and central series already published; Fitting theorem AG-4; identities inline in `GT-1`/`GT-2` proofs |
| §2.2 “The Frattini Subgroup”; Definitions 2.16--2.17, Propositions 2.18, 2.24--2.25, Theorem 2.28 | included `GT-1` |
| Theorem 2.19 and Corollaries 2.20--2.23 | amendment AG-4: Frattini lifting of nilpotence and Fitting quotient consequences |
| Definition 2.26 $\Omega_i,\mho_i$ | inline power-subgroup convention `GT-1`; the full omega calculus is deferred to an advanced finite-$p$ sequel |
| Lemma 2.27 | already-published Cauchy theorem |
| §2.3 “Some Automorphism Groups”; Hall--Burnside Theorem 2.30 | included `GT-1`; later detailed automorphism calculations B/`GT-2` |
| Ch. 3 “Extraspecial Groups”; §§3.1--3.3 and Theorems 3.6, 3.9, 3.14--3.15 | included/inline `GT-2`; omitted proofs independently supplied by van Beek and the published symplectic-normal-form theorem |
| Ch. 4 “Maximal Class and $p$-Rank” | deferred to an advanced finite-$p$ local-structure pair: coclass/maximal-class classification needs substantial new power-commutator machinery and is not used by Frattini/extraspecial theory |
| Ch. 5 “Fixed-Point-Free Automorphisms” | deferred: Thompson/Higman fixed-point-free results require coprime-action and character/local methods not yet built |
| Ch. 6 “The Critical Subgroup Theorem” | deferred with Ch. 5: its purpose is control of automorphisms/fusion and it needs the omitted coprime-action block |
| Ch. 7 “How are $p$-Groups Embedded in Finite Groups?” | deferred to finite local/fusion theory after blocks and transfer; it is not a prerequisite for the commissioned core |

### 24.3 Löh, *Geometric Group Theory*, full text

Full text and contents:
<https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf>.
Read Chapters 2--9, pp. 7--239, with the following complete heading
disposition.

| heading | disposition |
|---|---|
| §§2.1--2.2 review/groups by generators and relations | already-published group/free-presentation pages |
| §2.3.1 “Products and extensions” | products published/AG-3; extensions `GT-9`, low degree `GT-21`--`GT-22` |
| §2.3.2 “Free products and free amalgamated products”; HNN outlook | amalgams already-published; HNN `GT-6`; Bass--Serre `GT-15` |
| §§3.1--3.2 graph notation and Cayley graphs | included `GT-10`, translated to occurrence-preserving labelled arcs |
| §§3.3.1--3.3.3 reduced words, free groups to trees, trees to free groups | free words already-published; Cayley tree `GT-10`; free action bridge `GT-5`/`GT-14` |
| §4.1 action review, free actions, orbits/stabilisers, counting | already-published action page; arbitrary tree-action conventions `GT-14` |
| §4.2 free groups and actions on trees; spanning trees | included `GT-5`/`GT-14`; arbitrary spanning-tree existence charged full AC |
| §4.3 Nielsen--Schreier and quantitative theorem | included `GT-5`; covering-space alternative deferred because covering pages are unauthored |
| §§4.4--4.5 ping-pong and free matrix subgroups | ping-pong inline `GT-12`/`GT-14`; matrix application B-page only |
| §§5.1--5.2 quasi-isometry of spaces/groups | included `GT-10` |
| §5.3 Švarc--Milnor and applications | included `GT-11` |
| §5.4 dynamic criterion | deferred: quasi-actions/coarse conjugacy need a separate advanced coarse-actions page |
| §5.5 invariants/geometric properties/rigidity preview | inline convention `GT-10`; rigidity claims deferred until each invariant is built |
| §§6.1--6.2 growth functions/types and quasi-isometry | included `GT-11` |
| §6.3.1 nilpotent groups | already-published nilpotence definition; cited by `GT-11` |
| §6.3.2 Bass--Guivarc'h growth | included `GT-11` |
| §6.3.3 Gromov theorem | included source-cited leaf `[LS]`, proof not supplied |
| §§6.3.4--6.3.6 virtual nilpotence and free-abelian rigidity applications | survey inline with Gromov result; never dependency targets |
| §6.3.7 expanding manifolds | out-of-scope: requires smooth manifold/differential geometry |
| §§7.1.1--7.1.2 classical curvature | out-of-scope background; differential geometry owns curvature |
| §§7.2--7.4 hyperbolic/quasi-hyperbolic spaces, groups, word problem | included `GT-12` and agreement with `GT-8` |
| §7.5.1--7.5.4 infinite-order elements, centralisers, products, free subgroups | included/inline `GT-12`; deeper quasiconvexity deferred |
| §§8.1--8.3 geometry at infinity, ends, hyperbolic boundary | boundary included `GT-12`; ends deferred until a dedicated Stallings-ends page can build accessibility; no circular citation to Bass--Serre |
| §8.4 Mostow rigidity | out-of-scope: needs manifolds, lattices, and rigidity machinery |
| §§9.1--9.2 means, inheritance, Følner, paradoxical decompositions | included `GT-13` with choice ledger |
| §9.2.3 Banach--Tarski | out-of-scope: requires measure/action geometry on spheres and is not a group-theory prerequisite |
| §9.2.4 homological characterisations | deferred to bounded cohomology/functional analysis; ordinary HA does not supply bounded cohomology |
| §§9.3--9.4 quasi-isometry invariance and bilipschitz rigidity | amenability invariance included; bilipschitz rigidity deferred to uniformly finite homology |

### 24.4 Wilkes, *Profinite Groups and Group Cohomology*, full text

Full text: <https://www.dpmms.cam.ac.uk/~grw46/LectureNotes2021.pdf>. Read
Chapter 1 §§1.1--1.3 pp. 4--20, Chapter 2 §§2.1--2.2 pp. 21--29, Chapter 3
§§3.1--3.2 pp. 35--50, Chapter 4 §4.1 pp. 55--58, and Chapter 5 §§5.1--5.3
pp. 72--94.

| heading/named results | disposition |
|---|---|
| §1.1 “Categories and limits” | concrete group-limit material inline `GT-16`; abstract categories already assigned to category theory |
| §1.2 “Inverse limits and profinite groups”; Definitions 1.2.1, 1.2.4, 1.2.7, 1.2.12; Propositions 1.2.8--1.2.33 | inverse-system, topology, continuity, density, open-normal basis included `GT-16`; countable metrizability B-page; projection surjectivity choice-qualified |
| §1.3 “Cofinality and surjective systems”; Propositions 1.3.4, 1.3.6--1.3.11 | cofinality/surjective replacement included `GT-16`; countable-chain refinements inline/B |
| §2.1 “The $p$-adic integers”; Definitions 2.1.2--2.1.3, Propositions 2.1.4--2.1.5 | compatible tuples, pro-$p$, torsion-free included `GT-17`; domain statement amendment/comparison to CA-13 |
| §2.2 “The profinite completion of the integers”; Theorem 2.2.1 | $\widehat{\mathbb Z}\cong\prod_p\mathbb Z_p$ included `GT-17`; later arithmetic B/number theory |
| §3.1 residual finiteness, Propositions 3.1.2--3.1.8 | included `GT-16`; finite-quotient examples B |
| Theorem 3.1.9 Mal'cev and surface-group continuation | Mal'cev included as source-cited non-load-bearing remark `GT-16`; surface-group continuation deferred until covering/geometric prerequisites close |
| §3.2 free groups and finite quotients, Marshall Hall | residual finiteness/separability included `GT-16`, receives `GT-5` |
| §4.1 “Generators of pro-$p$ groups”; Propositions 4.1.3--4.1.14 | finite Frattini items `GT-1`, pro-$p$ continuation `GT-17` |
| §§4.2 onward pro-$p$ central series | deferred: Zassenhaus filtration and cohomological dimension belong an advanced pro-$p$/profinite-cohomology sequel |
| §§5.1--5.2 group cohomology, low-degree terms, Hopf formula | derived definitions already HA-12; crossed homomorphism `GT-21`; Hopf formula `GT-23` |
| §5.3 “Cohomology and group extensions” | included `GT-22` |
| continuous profinite cohomology conclusion | out-of-scope: continuous cochains/topological modules require the explicitly deferred profinite-cohomology track |

### 24.5 Combinatorial-group full texts

| source and exact read range | its headings/results and disposition |
|---|---|
| Baumslag, *Combinatorial Group Theory*, Ch. III §§3--7, pp. 47--79, full text <https://www.macs.hw.ac.uk/~lc45/Teaching/kggt/Baumslag-book.pdf> | “Subgroups of free groups” and Reidemeister--Schreier included `GT-5`; virtually free/Kurosh `GT-15`; presentation calculus already-published Tietze ids; residual finiteness receives `GT-16`; Nielsen transformations/folding deferred to a free-group automorphisms/folding sequel |
| Miller, *Combinatorial Group Theory*, §§4.1--4.4 and §5.1, pp. 36--51, full text <https://www.macs.hw.ac.uk/~lc45/Teaching/kggt/miller.pdf> | Theorems 4.1--4.4 included `GT-5`; Theorem 4.5 Kurosh `GT-15`; word/conjugacy definitions and Lemma 5.2 `GT-7`; Theorem 5.3 Novikov--Boone `[LS]`; generalized word problem/Higman embedding deferred because they require computability embedding machinery |
| Touikan, *Introduction to CGGT*, §§1.7--1.8, §§3.1, 3.4--3.6, full text <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf> | algorithms/Novikov--Boone `GT-7`; free-group Dehn problems already-published; van Kampen, curvature, pieces, Greendlinger, Dehn algorithm `GT-8`; printed blanket infinitude theorem rejected as false without nondegeneracy; printed isoperimetric `min` corrected to source-controlled `max` using Sisto |
| Sisto, *Lecture Notes on GGT*, Chs. 2--5, §§8.1--8.3, §§9.1--9.3, full text <https://alexsisto.net/LectureNotesGGT.pdf> | metric graphs/Cayley/quasi-isometry/Švarc `GT-10`--`GT-11`; hyperbolicity `GT-12`; van Kampen/Dehn equivalence `GT-8`/`GT-12`; distorted subgroups, coarse simple connectivity, random genericity deferred to advanced GGT |
| Hamann, *Geometric Group Theory*, §2.5.2 and §§4.1--4.7, full text <https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf> | HNN normal form/Britton `GT-6`; tree axes/fixed points `GT-14`; graph-of-groups structure/Kurosh `GT-15`; parabolic/noetherian actions, minimal actions, and Stallings ends deferred for missing accessibility/ends machinery |
| Manning, *Bass--Serre Theory and Complexes of Groups*, §§1--9, full text <https://pi.math.cornell.edu/~jfmanning/teaching/notes/graph_of_groups.pdf> | amalgam background already-published; graph-of-groups definitions, choice independence, tree construction, structure theorem included `GT-15`; complexes of groups out-of-scope because they need higher-dimensional scwols/local developments |

### 24.6 Finite permutation and $p$-group controls

| source/range | disposition of every harvested heading/result cluster |
|---|---|
| van Beek, *Topics in Finite $p$-Groups*, §§2.4 and 3.1 through Theorem 3.7, full text <https://martinvanbeek.github.io/uploads/LectureNotes.pdf> | Definitions 2.28--2.34 and Theorems/Propositions 2.35--2.42 included/inline `GT-2`; Definitions/Lemmas 3.2--3.6 and Theorem 3.7 included `GT-1`; subgroup/quotient Frattini inequalities B/inline, with no unsupported equality |
| Cameron, *Notes on Classical Groups*, §§2.3--2.4 and §8.1, full text <https://maths.qmul.ac.uk/~pjc/class_gps/cg.pdf> | Iwasawa Lemma and simplicity application included `GT-3`/B; extraspecial form/classification/class equation included `GT-2`; representation tail already owned RT; erroneous §8.2 wording about two minimal normals rejected |
| Burness, *Topics in Permutation Group Theory*, §§3.1--3.3 and §3.5.1, pp. 9--20, full text <https://seis.bristol.ac.uk/~tb13602/docs/permgroups_14.pdf> | Definitions 3.1--3.2, Lemmas 3.4--3.7, Theorem 3.8 included `GT-3`/`GT-4`; Types I--V and Theorem 3.15 survey `GT-4`; Theorem 3.21 two-transitive dichotomy survey; later $3/2$-transitivity deferred to a rank/subdegree sequel |
| Jones, *Notes on Permutation Groups*, Ch. 3 end, §§4.1--4.2, Ch. 5 through Theorem 5.2, full text <https://www.savbb.sk/conf/sschool/material/PermGpsNotes.pdf> | maximal-stabiliser/orbital criteria, normal subgroups, socle, solvable primitive degree, multiple transitivity included `GT-3`--`GT-4`; Steiner systems/design applications out-of-scope to combinatorial design theory |
| Iwasawa, “Über die endlichen Gruppen und die Verbände ihrer Untergruppen”, pp. 57--59, <https://doi.org/10.3792/pia/1195578881> | original simplicity criterion included `thm-iwasawa-simplicity-criterion`; classical-group applications B/survey only |

### 24.7 Modular representation and CFSG full texts

| source/range | disposition |
|---|---|
| Webb, *A Course in Finite Group Representation Theory*, Ch. 6 §§6.1--6.4, Ch. 7 §§7.1--7.4, Ch. 9 §§9.1--9.6, Ch. 10 §§10.1--10.3, full text <https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf> | cyclic $p$ modules, simple modules, radical/socle, projectives/covers/Cartan `GT-18`; Jennings §6.4 deferred to advanced $p$-group/module interaction; splitting systems, lattices, decomposition, Brauer characters and the one-character block example `GT-19`; defect groups/deeper blocks deferred; Noether--Deuring claims not made load-bearing where Webb omits proof |
| Ciurca, *Representation Theory*, Chs. 1--3, full text <https://www.ma.imperial.ac.uk/~tc4117/assets/ModRep.pdf> | Artinian/radical/idempotent/Krull--Schmidt/projective material `GT-18`; Brauer/projective indecomposable/decomposition material `GT-19`; notes' algebraic-number/DVR assumption becomes explicit CA prerequisite |
| Isaacs, advanced modular-character notes, Lecture 1 §§1.1--1.5, full text <https://www.uv.es/jomimar8/pdfs/course%20notes.pdf> | modules already RT/`GT-18`; Brauer characters, decomposition numbers, projective characters `GT-19`; kernels B; Lectures 2--7 blocks/local theory deferred because defect groups and Brauer correspondences are not built |
| Smith, *CFSG---A User's Manual*, Lecture 1 pp. 3--17, full text <https://homepages.math.uic.edu/~smiths/talkv.pdf> | exact CFSG statement and family/nomenclature tables `GT-20`; alternating simplicity already-published; Lie constructions/Dynkin/Chevalley/$p$-local proof architecture out-of-scope to differential geometry/advanced finite groups |
| Solomon, “A brief history...”, §§1--10, <https://www.ams.org/bull/2001-38-03/S0273-0979-01-00909-0/> | §§1--6 history inline `GT-20`; §§7 technical characteristic-$2$ proof architecture out-of-scope; §§8--9 statement/revision included; §10 applications survey not turned into dependency claims |
| Aschbacher, “The Status of the Classification...”, full five pages, <https://authors.library.caltech.edu/records/5b4mm-frv50> | motivation already-published; exact classification/original proof/quasithin/revision status included `GT-20`; technical architecture out-of-scope |
| AMS GLS Number 10 (2023), official description <https://bookstore.ams.org/surv-40-10> | current series-status wording included `GT-20`; Stages A1--A5 and $C_6,C_6^*,C_4,C_4^*$ out-of-scope technical proof components |

### 24.8 Low-dimensional cohomology full texts

| source/range | disposition |
|---|---|
| Löh, *Group Cohomology*, §1.5.1--§1.5.2, pp. 30--40, full text <https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf> | Hopf formula `GT-23`; finite presentation/deficiency corollaries deferred to a deficiency/asphericity sequel; extension definitions/action/examples/classification `GT-22`; functoriality already HA; nonabelian $H^3$ outlook survey `GT-9`/`GT-22` |
| Lassueur, *Cohomology of Groups*, Ch. 6 §§22--24, Theorem 31.2, §34, full text <https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf> | extension/split/complement basics AG-3/`GT-9`; $H^1$ complements `GT-21`; $H^2$ classification `GT-22`; Schur--Zassenhaus `GT-9`; multiplier/Hopf `GT-23`; integral duality/shift machinery already HA; projective representations deferred RT sequel |
| Haller, thesis §2.7 pp. 16--17, full text <https://pure.tue.nl/ws/files/2037261/200512914.pdf> | nonabelian cocycles, pointed $H^1$, complements/conjugacy included `GT-21`; twisted algebraic-group forms out-of-scope to Galois descent |
| Meier, *Group Theory I*, §3.1 pp. 64--67, full text <https://users.math.msu.edu/users/meier/Classnotes/M913S19/M912F18notes.pdf> | Schur--Zassenhaus complement existence and solvable conjugacy included with proof `GT-9`; no unconditional conjugacy inferred |

### 24.9 Standard-monograph and original-paper statement harvest

These sources were read only over the exact ranges printed below and in the
pair sections. A semicolon separates distinct source headings or named-result
clusters and gives each its own disposition. An original paper with no useful
internal heading hierarchy is explicitly treated as one full-article heading.

| source and exact heading/result range read | heading-by-heading disposition |
|---|---|
| Isaacs, *Finite Group Theory*, §1B “The Fitting Subgroup”; §3A Burnside basis/Frattini results | §1B Fitting definition/product already AG-4, while $p$-cores and solvable self-centralisation are included `GT-1`; §3A Frattini and basis results included `GT-1` |
| Gorenstein, *Finite Groups*, Ch. 5 §5.5 “Extra-special groups” | definition, commutator form, central-product classification included/inline `GT-2`; subsequent local analysis is out-of-scope because it requires transfer and fusion not used here |
| Lyndon--Schupp Ch. I §§3--4 “Subgroups of free groups”/Schreier method; Ch. IV §§1--2.5 free products with amalgamation and HNN extensions; Ch. V §§1--2 decision problems; Ch. V §§3--5 small cancellation | Ch. I included `GT-5`; amalgam normal form already-published and HNN/Britton included `GT-6`; decision headings included `GT-7`; pieces, $C'(1/6)$, Greendlinger, Dehn algorithm and torsion included `GT-8` |
| Serre, *Trees*, I.§2 “Trees”; I.§3 “Trees and free groups”; I.§4 “Fundamental groups of graphs of groups”; I.§5 “Amalgams”; I.§6 structure consequences | I.§2 included `GT-14`; I.§3 included `GT-5`/`GT-14`; I.§§4--5 included `GT-15` with HNN normal form in `GT-6`; I.§6 Kurosh/structure consequences included `GT-15`, while arithmetic-tree applications are out-of-scope because they require linear/algebraic groups |
| Robinson Ch. 11 §§11.1--11.4 “Extensions”, “Splitting extensions”, “The extension problem”, “The Schur--Zassenhaus theorem” | first three headings included `GT-9`; Hall-kernel existence and soluble conjugacy included `GT-9`; unconditional conjugacy is only a source-cited Feit--Thompson remark and is not load-bearing |
| Craven, *Finite Group Theory*, sections “Group extensions”, “Schur--Zassenhaus”, and “Hall's theorem” | extension/splitting preliminaries already AG-3 or included `GT-9`; complement existence and the soluble conjugacy proof included `GT-9`; the wider Hall theorem remains AG-4 |
| Dixon--Mortimer §§1.5--1.8 blocks, primitivity, multiple transitivity and wreath products; Ch. 4 §§4.1--4.8 primitive groups and O'Nan--Scott | §§1.5--1.8 included `GT-3`; elementary socle results included `GT-4`; classification/type theorem included as `[LS]` `GT-4`; classification-dependent applications are deferred to a permutation-group sequel |
| Liebeck--Praeger--Saxl (1988), full article §§1--3: types, theorem, proof | type definitions/convention map included `GT-4`; theorem included `[LS]` `GT-4`; full proof is out-of-scope because the page is a bounded landscape survey and no later item depends on it |
| Cameron (1981), §§2--4: primitive socles, O'Nan--Scott reduction, two-transitive groups | elementary socle claims included/inline `GT-4`; coarse landscape and two-transitive dichotomy included as `[LS]` `GT-4`; finite-simple refinements deferred to `GT-20` |
| Soicher, “Primitive permutation groups”, sections “Primitivity”, “The socle”, “The O'Nan--Scott theorem” | no theorem uses this encyclopaedia essay as primary backing; all three sections are inline convention checks for `GT-4`'s five/eight-name dictionary |
| Bridson--Haefliger I.8 “Group actions and quasi-isometries”; III.H §§1--3 hyperbolic spaces, hyperbolic groups and boundary/Morse material | I.8 included `GT-10`--`GT-11`; III.H.1 slim/four-point/Morse material included `GT-12`; III.H.2 group consequences included `GT-12`; III.H.3 boundary included `GT-12`, while CAT(0) comparison material is out-of-scope to a metric-geometry sequel |
| de la Harpe Ch. IV §§23--24 Cayley metrics/quasi-isometry; Ch. VI growth headings | Ch. IV included `GT-10` and Švarc/growth comparisons `GT-11`; Ch. VI nilpotent growth included `GT-11`; Grigorchuk/intermediate-growth constructions are deferred because their automaton/branch-group machinery is not built |
| Miller, “Decision Problems for Groups---Survey and Reflections”, §§1--4 “Introduction”, “Basic local unsolvability results”, “Basic global unsolvability results”, “Decision problems and constructions” | fixed/uniform distinctions and Novikov--Boone included `GT-7`; Adian--Rabin/Markov-property statements included `[LS]` `GT-7`; embedding constructions are out-of-scope because recursive-simulation machinery is absent |
| Paterson Ch. 0 “Introduction” and Ch. 1 discrete amenability/Følner conditions | invariant means, inheritance, Følner and Tarski alternative included `GT-13`; locally compact/Haar variants are out-of-scope because measure theory is absent |
| Wagon Ch. 9 amenability and paradoxical decompositions | Tarski alternative and free-group paradox included/inline `GT-13`; Banach--Tarski is out-of-scope because it needs Euclidean actions and measure-theoretic choice machinery |
| Ribes--Zalesskii Ch. 1 inverse limits/profinite groups, Ch. 2 pro-$p$ groups, Ch. 3 free profinite material | Ch. 1 included `GT-16`; Ch. 2 included `GT-17`; free-profinite universal constructions are deferred because continuous profinite presentations/cohomology are not built |
| Ribes, *Profinite Graphs and Groups*, Ch. 1 §§1.1--1.5 profinite spaces, inverse limits, completions and profinite groups | inverse-limit topology/completion material included `GT-16`; profinite graph coverings are deferred because they require the denied continuous cohomology/covering sequel |
| Neukirch Ch. II §4 “Completions” | $p$-adic compatible residues and completeness agreement included `GT-17`; valuations and ring-adic completion remain owned by commutative/number theory |
| Brown Ch. I §§2--5 resolutions/cochains/low dimensions; II §5 Hopf formula; IV §§2--6 extensions; VII §§5--7 universal central extensions | derived construction already HA-12; low-degree crossed-homomorphism agreement included `GT-21`; Hopf formula included `GT-23`; factor sets/$H^2$ included `GT-22`; universal central extensions included `GT-23` |
| Weibel §6.4 low-dimensional group cohomology; §6.6 extensions and $H^2$; §3.6 degree-two universal-coefficient sequence | §6.4 crossed homomorphisms included `GT-21`; §6.6 extension classification included `GT-22`; §3.6 UCT included `GT-23`; general derived functors remain already HA |
| Serre, *Galois Cohomology*, I.§5 Propositions 36--38 nonabelian $H^1$ | cocycle/coboundary pointed-set construction and twisting included `GT-21`; Galois descent applications are out-of-scope because infinite Galois theory is absent |
| Mac Lane, *Homology*, Ch. IV §§7--9 factor sets, extension equivalence and Baer sum | factor-set construction/equivalence and Baer sum included `GT-22`; general homological algebra remains HA |
| Karpilovsky Ch. 2 §§2.1--2.5 multiplier/Hopf formula; Ch. 3 §§3.1--3.4 representation groups and covers | Ch. 2 included `GT-23`; Ch. 3 existence/nonuniqueness of covering groups and examples included/B `GT-23`; numerical multiplier tables are B-page reference only and never load-bearing |
| Benson §§1.6--1.8 radicals/socles, §§2.1--2.8 projectives/covers, §§3.1--3.3 vertices/sources | radical/projective-cover material included `GT-18`; vertex/source theorem included `GT-18`; support varieties and Auslander--Reiten theory are deferred because cohomological support is not built |
| Thévenaz Ch. 1 §§1--6 modular systems, lattices, reduction and projectives | modular-system/lattice foundations split between CA prerequisites and `GT-18`; reduction/decomposition ingredients included `GT-19`; later $G$-algebra/local theory is deferred because block-local machinery is absent |
| Isaacs, *Character Theory*, Ch. 15 §§15A--15C “Changing the characteristic”, Brauer characters, decomposition numbers and blocks | Brauer-character and decomposition-matrix material included `GT-19`; block partition and the one-character block example included `GT-19`; defect groups and main block correspondence theorems are deferred to advanced modular theory |
| Serre, *Linear Representations*, Part III Chs. 15--18 modular representations and Brauer characters | modular systems/reduction included `GT-18`--`GT-19`; Brauer characters and decomposition included `GT-19`; deeper arithmetic representation material remains number theory |
| Green (1959), full article heading “On the indecomposable representations of a finite group” | vertices, sources, relative projectivity and Green indecomposability supply `GT-18`; full Green correspondence is deferred because local block theory is not built |
| Brauer (1939), full article “On modular and $p$-adic representations of algebras”; Brauer--Nesbitt (1941), full article “On the modular characters of groups” | modular/$p$-adic reduction provenance included `GT-19`; modular-character basis/decomposition provenance included `GT-19`; neither article is the sole proof route |
| Wilson Introduction and Chs. 1, 2, 4, 8, 10: classification statement, alternating, classical, exceptional and sporadic families | exact family convention and low-rank coincidences included `GT-20`; constructions/proofs for Lie-type families are out-of-scope to differential geometry/advanced finite groups |
| GLS Number 1, Part I Chs. 1--2 “The classification theorem”/programme organization; official Number 10 status | exact theorem/family statement and first-generation programme scope included `GT-20`; Number 10 supplies the 2023 ongoing-revision status; all local proof stages are out-of-scope and never dependencies |
| Aschbacher--Smith, *The Classification of Quasithin Groups*, Preface and Main Theorem | quasithin-gap repair and completion status included `[LS]` `GT-20`; the two-volume local analysis is out-of-scope because it is part of the external CFSG proof programme |
| Winter (1972), full article theorem cluster on automorphisms of extraspecial $p$-groups | induced symplectic/orthogonal action included `GT-2`; the scaffold does not strengthen containment to image equality beyond the paper's hypotheses |
| Britton (1958), full article word-problem/Britton-lemma cluster | Britton lemma and normal-form consequence included `GT-6`; paper-specific algorithmic continuations are deferred to the decision-problem page or later HNN algorithms |
| Boone (1959), full six-part article “The word problem”; Novikov (1955), full monograph of the same fixed-group undecidability construction | exact existence of a finitely presented group with unsolvable word problem included `[LS]` `GT-7`; constructions are out-of-scope because they require a long simulation/encoding programme; uniform Adian--Rabin is instead sourced to Miller/Wilkes |
| Ol'shanskii Ch. 4 §§21--23 maps, small-cancellation conditions and Greendlinger-type lemmas | occurrence-sensitive diagram conventions and Greendlinger control included `GT-8`; graded/periodic constructions are out-of-scope because they require later chapters' machinery |
| Holt--Rees (2012), introduction and small-cancellation convention paragraph only | modern overlap convention recorded inline `GT-8`; automaticity/geodesic-language theorem is out-of-scope because automatic structures are not built |
| Bass (1972), full article theorem “The degree of polynomial growth of finitely generated nilpotent groups” | Bass--Guivarc'h weighted-rank formula included `GT-11`; solvable-group growth continuation is deferred because polycyclic structure is not built |
| Gromov (1981), full article main theorem on polynomial growth | virtually-nilpotent classification stated `[LS]` `GT-11`; proof is out-of-scope as a major external programme and never a dependency target |
| Gromov (1987), “Hyperbolic groups” §§1--8 | definition/equivalent hyperbolicity, Morse phenomena, boundary and basic consequences included `GT-12`; advanced small-cancellation/random-group material is deferred |
| Ghys--de la Harpe (eds.), Chs. 1, 2, 7, 8: definitions, hyperbolic-group examples, quasi-geodesics and boundary | definitions/equivalent criteria and examples included `GT-12`; quasi-geodesic stability and boundary included `GT-12`; manifold/rigidity applications are out-of-scope to differential geometry |
| Følner (1955), full article main criterion | finite-set criterion and invariant-mean equivalence included `GT-13`; locally compact variants are out-of-scope because Haar measure is absent |
| Hall (1949), full article “Coset representations in free groups” | finite-index subgroup/separability construction included `GT-5`/`GT-16`; full Howson/folding continuation is deferred to the free-group sequel |
| Stallings (1983), §§1--5 finite graphs, morphisms and folds | graph model and subgroup-basis proof included/inline `GT-5`; the complete folding algorithm and ends applications are deferred because their dedicated machinery is not built |
| Eilenberg--Mac Lane (1947), full article §§3--10 nonabelian kernel, abstract kernel and obstruction | outer action and obstruction/torsor shape included as `[LS]` `GT-9`/`GT-22`; nonabelian $H^3$ construction is deferred to higher group cohomology |
| Milnor, *Introduction to Algebraic K-Theory*, §5 “Universal central extensions”; Hopf (1942), full article formula cluster | Milnor's construction/universal property included `GT-23`; Hopf formula included `GT-23`; algebraic $K$-theory applications are out-of-scope because $K$-theory is absent |

No Wikipedia or encyclopaedia entry is primary backing. Soicher is used only
to reconcile O'Nan--Scott terminology.

### 24.10 Stable URL registry for every cited source

The pair sections and §§24.1--24.9 give the exact ranges read and the
heading-by-heading dispositions. This registry supplies a working retrieval
URL for every source cited anywhere in the scaffold; a source repeated across
pairs appears once. “Full text” means that the linked file or landing page
provides the whole work, not that every chapter was read.

| finite and permutation group source | stable URL |
|---|---|
| Milne, *Group Theory* (full text) | <https://www.jmilne.org/math/CourseNotes/GT.pdf> |
| Craven, *The Theory of p-Groups* (full text) | <https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf> |
| Craven, *Finite Group Theory* notes (full course site) | <https://web.mat.bham.ac.uk/D.A.Craven/finitegroups2012.html> |
| Wilkes, *Profinite Groups and Group Cohomology* (full text) | <https://www.dpmms.cam.ac.uk/~grw46/LectureNotes2021.pdf> |
| Isaacs, *Finite Group Theory* | <https://bookstore.ams.org/gsm-92> |
| Gorenstein, *Finite Groups* | <https://bookstore.ams.org/chel-301/> |
| Winter, “The automorphism group of an extraspecial $p$-group” | <https://doi.org/10.1216/RMJ-1972-2-2-159> |
| van Beek, *Topics in Finite $p$-Groups* (full text) | <https://martinvanbeek.github.io/uploads/LectureNotes.pdf> |
| Dixon--Mortimer, *Permutation Groups* | <https://link.springer.com/book/10.1007/978-1-4612-0731-3> |
| Cameron, *Notes on Classical Groups* (full text) | <https://maths.qmul.ac.uk/~pjc/class_gps/cg.pdf> |
| Jones, *Notes on Permutation Groups* (full text) | <https://www.savbb.sk/conf/sschool/material/PermGpsNotes.pdf> |
| Burness, *Topics in Permutation Group Theory* (full text) | <https://seis.bristol.ac.uk/~tb13602/docs/permgroups_14.pdf> |
| Liebeck--Praeger--Saxl, “On the O'Nan--Scott theorem” (full article) | <https://doi.org/10.1017/S144678870003216X> |
| Cameron, “Finite permutation groups and finite simple groups” | <https://doi.org/10.1112/blms/13.1.1> |
| Soicher, “Primitive permutation groups” (full essay) | <https://maths.qmul.ac.uk/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf> |
| Iwasawa, “Über die endlichen Gruppen und die Verbände ihrer Untergruppen” | <https://doi.org/10.3792/pia/1195578881> |

| combinatorial and geometric group source | stable URL |
|---|---|
| Lyndon--Schupp, *Combinatorial Group Theory* | <https://link.springer.com/book/10.1007/978-3-642-61896-3> |
| Baumslag, *Combinatorial Group Theory* (full text) | <https://www.macs.hw.ac.uk/~lc45/Teaching/kggt/Baumslag-book.pdf> |
| Löh, *Geometric Group Theory* (full text) | <https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf> |
| Stallings, “Topology of finite graphs” | <https://doi.org/10.1007/BF02095993> |
| Serre, *Trees* | <https://doi.org/10.1007/978-3-642-61856-7> |
| Britton, “The word problem for groups” | <https://doi.org/10.1112/plms/s3-8.4.493> |
| Miller, *Combinatorial Group Theory* notes (full text) | <https://www.macs.hw.ac.uk/~lc45/Teaching/kggt/miller.pdf> |
| Miller, “Decision Problems for Groups---Survey and Reflections” (full article) | <https://www2.hcmuaf.edu.vn/data/file/Decision%20problems%20for%20groups%20survey%20and%20reflections.pdf> |
| Boone, “The word problem” | <https://doi.org/10.2307/1970103> |
| Novikov, *On the Algorithmic Unsolvability of the Word Problem in Group Theory* (full text) | <https://www.mathnet.ru/eng/tm1180> |
| Ol'shanskii, *Geometry of Defining Relations in Groups* | <https://link.springer.com/book/10.1007/978-94-011-3618-1> |
| Holt--Rees, “Artin groups of large type...” | <https://doi.org/10.1112/plms/pdr035> |
| Touikan, *Introduction to Combinatorial and Geometric Group Theory* (full text) | <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf> |
| Sisto, *Lecture Notes on Geometric Group Theory* (full text) | <https://alexsisto.net/LectureNotesGGT.pdf> |
| Bridson--Haefliger, *Metric Spaces of Non-Positive Curvature* | <https://link.springer.com/book/10.1007/978-3-662-12494-9> |
| de la Harpe, *Topics in Geometric Group Theory* | <https://press.uchicago.edu/ucp/books/book/chicago/T/bo3641370.html> |
| Bass, “The degree of polynomial growth...” | <https://doi.org/10.1112/plms/s3-25.4.603> |
| Gromov, “Groups of polynomial growth and expanding maps” (author-hosted full text) | <https://www.ihes.fr/~gromov/wp-content/uploads/2018/08/631.pdf> |
| Ghys--de la Harpe (eds.), *Sur les groupes hyperboliques...* | <https://link.springer.com/book/10.1007/978-1-4684-9167-8> |
| Gromov, “Hyperbolic groups”, in *Essays in Group Theory* | <https://link.springer.com/book/10.1007/978-1-4613-9586-7> |
| Paterson, *Amenability* | <https://bookstore.ams.org/view?ProductCode=SURV%2F29> |
| Wagon, *The Banach--Tarski Paradox*, 2nd ed. | <https://doi.org/10.1017/CBO9781107337145> |
| Følner, “On groups with full Banach mean value” (full article) | <https://doi.org/10.7146/math.scand.a-10442> |
| Hamann, *Geometric Group Theory* (full text) | <https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf> |
| Dicks--Dunwoody, *Groups Acting on Graphs* (author-hosted full text) | <https://mat.uab.cat/~dicks/DD.pdf> |
| Manning, *Bass--Serre Theory and Complexes of Groups* (full text) | <https://pi.math.cornell.edu/~jfmanning/teaching/notes/graph_of_groups.pdf> |

| profinite, modular-representation, and CFSG source | stable URL |
|---|---|
| Ribes--Zalesskii, *Profinite Groups* | <https://link.springer.com/book/10.1007/978-3-642-01642-4> |
| Ribes, *Profinite Graphs and Groups* | <https://link.springer.com/book/10.1007/978-3-319-61199-0> |
| Hall, “Coset representations in free groups” | <https://doi.org/10.1090/S0002-9947-1949-0032642-4> |
| Neukirch, *Algebraic Number Theory* | <https://link.springer.com/book/10.1007/978-3-662-03983-0> |
| Webb, *A Course in Finite Group Representation Theory* (full text) | <https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf> |
| Benson, *Representations and Cohomology I* | <https://www.cambridge.org/core/books/representations-and-cohomology/9EE67E1280D8DB01AAC662530799AA8E> |
| Thévenaz, *G-Algebras and Modular Representation Theory* | <https://katalog.ub.uni-heidelberg.de/titel/34103894> |
| Green, “On the indecomposable representations of a finite group” (full article) | <https://eudml.org/doc/169786> |
| Ciurca, *Representation Theory* (full text) | <https://www.ma.imperial.ac.uk/~tc4117/assets/ModRep.pdf> |
| Isaacs, *Character Theory of Finite Groups* | <https://bookstore.ams.org/CHEL/359.H> |
| Isaacs, advanced modular-character notes (full text) | <https://www.uv.es/jomimar8/pdfs/course%20notes.pdf> |
| Serre, *Linear Representations of Finite Groups* | <https://link.springer.com/book/10.1007/978-1-4684-9458-7> |
| Brauer, “On modular and $p$-adic representations of algebras” (full article) | <https://doi.org/10.1073/pnas.25.5.252> |
| Brauer--Nesbitt, “On the modular characters of groups” | <https://doi.org/10.2307/1968918> |
| Gorenstein--Lyons--Solomon, *CFSG*, Number 1 | <https://doi.org/10.1090/surv/040.1> |
| Gorenstein--Lyons--Solomon, *CFSG*, Number 10 | <https://bookstore.ams.org/surv-40-10> |
| Wilson, *The Finite Simple Groups* | <https://link.springer.com/book/10.1007/978-1-84800-988-2> |
| Smith, *CFSG---A User's Manual* (full text) | <https://homepages.math.uic.edu/~smiths/talkv.pdf> |
| Solomon, “A brief history of the classification...” (full article) | <https://www.ams.org/bull/2001-38-03/S0273-0979-01-00909-0/> |
| Aschbacher, “The Status of the Classification...” (full article record) | <https://authors.library.caltech.edu/records/5b4mm-frv50> |
| Aschbacher--Smith, *The Classification of Quasithin Groups* | <https://doi.org/10.1090/surv/111> |

| extensions and cohomology source | stable URL |
|---|---|
| Robinson, *A Course in the Theory of Groups* | <https://link.springer.com/book/10.1007/978-1-4419-8594-1> |
| Eilenberg--Mac Lane, “Cohomology theory in abstract groups. II” | <https://doi.org/10.2307/1969174> |
| Löh, *Group Cohomology* (full text) | <https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf> |
| Lassueur, *Cohomology of Groups* (full text) | <https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf> |
| Haller, thesis §2.7 (full text) | <https://pure.tue.nl/ws/files/2037261/200512914.pdf> |
| Meier, *Group Theory I* (full text) | <https://users.math.msu.edu/users/meier/Classnotes/M913S19/M912F18notes.pdf> |
| Brown, *Cohomology of Groups* | <https://link.springer.com/book/10.1007/978-1-4684-9327-6> |
| Weibel, *An Introduction to Homological Algebra* | <https://www.cambridge.org/core/books/an-introduction-to-homological-algebra/AAA3F16482097015CD12D4376D505282> |
| Serre, *Galois Cohomology* | <https://link.springer.com/book/10.1007/978-3-642-59141-9> |
| Mac Lane, *Homology* | <https://link.springer.com/book/10.1007/978-3-642-62029-4> |
| Karpilovsky, *The Schur Multiplier* | <https://openlibrary.org/works/OL4287557W/The_Schur_multiplier> |
| Milnor, *Introduction to Algebraic K-Theory* | <https://doi.org/10.1515/9781400881796> |
| Hopf, “Fundamentalgruppe und zweite Bettische Gruppe” (full article) | <https://doi.org/10.1007/BF02565622> |

---

## 25. Scope denials and deferred specialist continuations

| material not scaffolded here | specific reason | later licence |
|---|---|---|
| elementary group theory, Sylow, central-series definitions, nilpotence, Fitting definition, semidirect products | authored or owned by published group pages/AG-3/AG-4; duplication would create two notions | cite the exact stable ids after the algebra build |
| ordinary finite-group representations, Maschke, ordinary characters and induction | RT-1--RT-4 own them | `GT-18` begins only in defining characteristic |
| Lie groups and Lie algebras, including Craven's Lie methods and construction of Lie-type groups | explicit seam ownership by differential geometry | differential-geometry track; `GT-20` uses family names only |
| maximal-class/coclass $p$-groups, critical subgroups, fusion and transfer | need a substantial coprime-action/local finite-group block; none is needed for Frattini or extraspecial classification | advanced finite-$p$/local-group sequel after modular characters |
| Nielsen transformations, Whitehead algorithm, Stallings folding, Howson theorem, automorphisms of free groups | require a coherent folding/automorphism complex beyond subgroup freeness | advanced combinatorial-group sequel citing `GT-5` |
| Higman embedding, generalized word problem, Novikov--Boone construction | require recursive-function and embedding machinery far beyond defining the decision problems | computable/combinatorial group theory sequel; negative theorem remains `[LS]` |
| one-relator torsion theorem outside small cancellation, Freiheitssatz | Magnus induction/Fox calculus need their own page | one-relator-groups sequel after `GT-8` |
| ends, accessibility and Stallings splitting theorem | ends and accessibility are not built; using the theorem to prove the Bass--Serre machinery would be circular | geometric-group sequel after `GT-15` |
| CAT(0) spaces/cube complexes, buildings, mapping class groups, arithmetic groups | each needs a major geometric subject not commissioned here | separate GGT/application tracks |
| Mostow rigidity | needs manifolds, Lie groups/lattices, boundary dynamics | differential geometry/rigidity track |
| bounded cohomology and homological amenability criteria | ordinary homological algebra does not supply bounded cochains or Banach modules | functional-analysis/bounded-cohomology sequel |
| Banach--Tarski | needs measure theory and Euclidean isometry actions; not a structural group prerequisite | measure/group-actions applications |
| derived inverse limits, $\varprojlim^1$, Mittag--Leffler, profinite/Galois cohomology | require derived functors of limits and continuous cochains/topological modules | homological-algebra/profinite-cohomology sequel |
| Haar measure, Pontryagin duality, locally compact group structure | profinite compactness alone does not supply measure/duality theory | functional/harmonic analysis |
| Jennings theory, block defect groups, Brauer main theorems, Green correspondence beyond the stated vertex theorem, tame/wild type, support varieties | need deeper local modular theory and/or cohomology; would overload the introductory two-pair block with new prerequisites | modular-representation sequel after `GT-19` |
| proof of O'Nan--Scott, Gromov polynomial-growth, CFSG, Novikov--Boone/Adian--Rabin | each proof is a major research programme not reproducible from the page machinery | exact statements retained as source-cited non-load-bearing `[LS]` items |
| étale fundamental groups and infinite Galois groups | require schemes or infinite Galois theory, absent from this library band | algebraic geometry/number theory, citing `GT-16` |

---

## 26. Amendments owed to other scaffolds

This section is the only legal effect on another track.

1. **Abstract algebra AG-3.** Expose stable ids for group extensions, split
   extensions, homomorphic sections, complements, and the internal/external
   semidirect-product agreement. `GT-9` substitutes those ids and removes any
   duplicate definition at build.
2. **Abstract algebra AG-4.** Retain its Fitting subgroup and nilpotence ids;
   add Craven Theorem 2.19 and Corollaries 2.20--2.23 (Frattini lifting,
   $\Phi(G)\le F(G)$, nilpotence modulo $\Phi(G)$, and the Fitting quotient
   formula). `GT-1` authors none of those general finite-group results.
3. **Abstract algebra RT-1.** Define the finite-support group ring $k[G]$,
   augmentation, and action/module dictionary for arbitrary $G$ over a
   commutative ring before specialising to finite-dimensional representations.
   This closes HA-12's group-ring prerequisite without a second definition.
4. **Homological algebra.** Replace HA-12's descriptive group-ring seam by the
   RT-1 ids from Amendment 3; retain all derived definitions. Cite `GT-9` for
   extensions, `GT-21` for $H^1$, `GT-22` for $H^2$, and `GT-23` for the Schur
   multiplier. The LHS five-term item receives the low-degree interpretation
   only after `GT-22`.
5. **Commutative algebra CA-13B.** Repoint
   `ex-p-adic-integers-as-an-inverse-limit` to `GT-17`; its local example should
   prove the ring-adic/module-completion agreement, not re-form compatible
   residue tuples.
6. **Combinatorics.** State explicitly that
   `trees-forests-and-spanning-trees` is finite and does not prove an arbitrary
   connected graph has a spanning tree (equivalent to AC). `GT-14` owns the
   infinite simplicial bridge.
7. **Published free-groups plan harvest.** Reconcile the 32 authored on-disk
   components, especially the three Tietze ids and cyclic-conjugacy ids, into
   the live `items[]` summary. No id is renamed or re-authored.
8. **Published free-product choice note.** Keep its explicit dependence on
   `def-axiom-of-choice` for arbitrary transversals visible in its eventual page
   summary; finite-index forms are ZF.
9. **Fundamental-group applications.** If future covering or van Kampen pages
   supply alternate proofs of Nielsen--Schreier or graph-of-groups facts, cite
   them only as agreement proofs. `GT-5`, `GT-8`, and `GT-15` retain
   combinatorial load-bearing routes because those topology pages are currently
   empty.
10. **Differential geometry.** Treat finite groups “of Lie type” on `GT-20` as
    classification labels only. No Lie-algebra definition or structural claim
    is transferred from this track.

---

## 27. Unresolved seams and splice substitutions

| seam | current state | resolution before build | blocked material |
|---|---|---|---|
| AG-3/AG-4 exact item ids | prose-complete, live `items[]` empty | preserve proposed concepts or substitute their authored stable ids mechanically | `GT-1`, `GT-9` |
| RT-1 arbitrary-group group-ring scope | current prose is framed around finite-group representations | enact Amendment 3 before HA-12 | HA-12 and `GT-21`--`GT-23` |
| commutative-algebra complete-DVR/splitting prerequisites | `valuation-rings-and-discrete-valuation-rings` and `inverse-limits-and-noetherian-completion` are prose, not authored | place `GT-18`--`GT-19` only after both pages and take a sufficiently large splitting modular system as supplied data | modular/Brauer block only |
| HA-12/HA-17 stable ids | homological prose gives proposed ids but no authored items | substitute the stable derived/bar/LHS ids after HA build | `GT-21`--`GT-23`; earlier blocks unaffected |
| geometric placement anchor remains planned | `applications-of-the-fundamental-group-examples` has empty `items[]` | place after the last actually authored fundamental-group companion if the anchor is still empty; do not infer missing applications | placement only |
| category-limit agreement | category limit page is later than `GT-16` | keep concrete compatible tuples load-bearing; the category track later owes an agreement theorem | no profinite theorem blocked |

These are splice/stable-id seams, not item-level `forward_refs`. No internal
spine theorem points forward, and there is no blocker to using this scaffold.

---

## 28. Proposed-id and reuse audit

The item directory and authored page bodies were searched mechanically before
coining ids. Every match in the proposed-id sweep was a deliberate citation to
an existing item: `def-alphabet-words-and-reduction`, `def-axiom-of-choice`,
`def-characteristic-subgroup`, `def-group-presentation`,
`def-topological-group`, `def-tree-forest-and-leaf`,
`thm-tree-characterisations`,
`thm-alternating-forms-have-a-symplectic-normal-form`, the published upper and
lower central-series ids, and `def-nilpotent-group-and-nilpotency-class`. One
initially colliding CFSG false-statement stem was namespaced to
`fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism`.
No proposed new id now collides with an immutable item id. At authoring the
builder repeats this sweep because intervening levels may have minted a stem.

---

## 29. Final scaffold audit

- Twenty-three A pages, each with a leaf B companion; no A inventory approaches
  the 60-item ceiling closely enough to require another split.
- Pair order is a topological dependency order within each placement block.
  Low-degree cohomology follows HA-12/HA-17 rather than pointing backward.
- Every proposed mathematical item has a component-provenance code. There is no
  AI-generated theorem/definition/lemma/proposition and no survey/example/false
  statement is a dependency target.
- Every quotient, representative, section, transversal, limit, character lift,
  factor set, and universal construction appears in the global or local
  well-definedness ledger.
- Choice costs distinguish finite choice, AC-equivalent arbitrary spanning
  trees, arbitrary sections/transversals, BPI compactness, and supplied
  splitting modular systems. CFSG's external proof is not falsely labelled ZF.
- Every pair has at least two independent treatments and at least one textbook,
  monograph, or complete lecture-note set with a harvestable contents list.
  The harvested headings above all have explicit dispositions.
- Published or sibling-owned notions are cited rather than re-minted. The
  infinite-tree bridge and concrete inverse-limit construction exist precisely
  where the published notions are too narrow or too late.
- The file contains no absolute order assignment, authored item, live-plan
  mutation, build artifact, gate output, or write request outside this prose
  scaffold.
