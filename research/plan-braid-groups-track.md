# Braid groups

Status: research-backed prose scaffold complete, 2026-09-07. This document
proposes future pages and item identities. It does not author library content,
change the live plan, or claim that an empty future page is published. Exact
page records are in `research/braid-groups-planning/pages.json`; proposed item
records are in `research/braid-groups-planning/proposed-items.json`.

## 0. Scope and architecture

The track has four branches whose dependencies reflect mathematical use rather
than a decorative linear reading order.

1. **Classical models.** Geometric braids, ordered and unordered configuration
   spaces, punctured-disk mapping classes, and the Artin presentation are made
   canonically isomorphic with all endpoint, boundary, and isotopy conventions
   visible. Pure braids then support the Fadell--Neuwirth tower, asphericity,
   and the Artin action on a free group.
2. **Combinatorial and linear structure.** Garside normal form, the Burau
   representations, and the Lawrence--Krammer--Bigelow representation are
   parallel continuations of the classical core; Burau is not made an
   artificial prerequisite of LKB.
3. **Closures and categorical representations.** Braid closure and Markov
   equivalence lead to Hecke/Jones traces. Independently, an object of a
   braided monoidal category supplies braid-group representations. Neither
   branch depends on LKB.
4. **Categorification.** Categorical actions are developed directly from the
   Artin presentation and derived categories. Type-A Soergel bimodules and
   Rouquier complexes then feed the link-homology endpoint.

Every A page has a B companion. A pages contain fewer than sixty proposed
items; B pages are dependency leaves. The B pages expose low-rank computations,
convention failures, and sharp counterexamples, but no later item depends on
them.

| label | A page | role |
|---|---|---|
| BG-1 | `geometric-braids-and-artin-generators` | strand model, stacking, Artin generators and presentation |
| BG-2 | `ordered-and-unordered-configuration-spaces` | configuration quotients, covering monodromy and pure subgroup |
| BG-3 | `braids-as-fundamental-groups-of-configuration-spaces` | explicit geometric/configuration-space equivalence |
| BG-4 | `punctured-disks-mapping-classes-and-point-pushing` | boundary-fixed mapping classes and Birman point pushing |
| BG-5 | `pure-braids-fadell-neuwirth-and-asphericity` | forgetful fibrations, free kernels, asphericity and pure generators |
| BG-6 | `artin-presentation-completeness-and-braid-combing` | noncircular completeness proof after the pure-braid tower |
| BG-7 | `garside-structure-normal-forms-and-the-center` | positive monoid, normal form, word problem, torsion and center |
| BG-8 | `the-artin-action-on-a-free-group` | faithful action, peripheral classes, and the boundary word |
| BG-9 | `the-burau-representations` | cyclic-cover construction, matrices and exact faithfulness status |
| BG-10 | `lawrence-krammer-bigelow-and-linearity` | two-point cover, fork--noodle pairing and all-rank linearity |
| BG-11 | `oriented-links-braid-closures-and-markov-equivalence` | Reidemeister, Alexander and Markov equivalence |
| BG-12 | `hecke-markov-traces-and-polynomial-link-invariants` | Hecke traces, HOMFLYPT/Jones and Burau--Alexander formula |
| BG-13 | `yang-baxter-operators-and-quantum-braid-representations` | categorical and operator braid representations |
| BG-14 | `graded-quiver-algebras-and-derived-tensor-functors` | quiver/path-algebra and derived-tensor infrastructure |
| BG-15 | `categorical-braid-actions-and-decategorification` | weak/coherent categorical actions and the Khovanov--Seidel model |
| BG-16 | `type-a-soergel-bimodules-and-hecke-categorification` | precise type-A Soergel category and Grothendieck theorem |
| BG-17 | `rouquier-complexes-and-categorical-braid-relations` | invertible braid complexes and coherence |
| BG-18 | `matrix-factorizations-and-khovanov-rozansky-link-homology` | matrix-factorization crossing complexes and link invariance |
| BG-19 | `hochschild-homology-and-triply-graded-link-homology` | Hochschild/Rouquier model and comparison with KR homology |

## 1. Binding ownership and inherited suppliers

The published category-theory page
`braided-and-symmetric-monoidal-categories` already owns, and this track reuses,
`def-braiding`, `def-braided-monoidal-category`,
`thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`,
`def-braid-group-by-the-artin-presentation`,
`thm-the-braid-group-surjects-onto-the-symmetric-group`,
`thm-the-symmetric-group-has-the-coxeter-presentation`, and
`def-the-braid-category`. It also owns braided coherence and freeness of the
braid category. No synonym is minted here. The published strictification,
rigidity, trace, ribbon, and tensor-category pages remain the owners of those
categorical foundations.

The planned but unbuilt topology suppliers are named honestly:
`fibrations-fiber-bundles-and-homotopy-exact-sequences` supplies the long exact
homotopy sequence and bundle-to-fibration interface, and
`isotopy-extension-and-embedding-theory-beyond-whitney` supplies ambient
isotopy extension. The track does not silently treat their empty inventories as
published. Published `the-fundamental-group`, `covering-spaces-and-lifting`,
and the algebraic group/module foundations are reused at item level.

The Hecke seam is one-way and acyclic. RG-13,
`principal-series-representations-of-gl-n-over-a-finite-field`, owns the generic
type-A Hecke presentation, standard basis, specializations, and Tits
deformation. BG-12 and BG-16 consume those items. Symmetric-group
representation theory owns Hecke Specht/Murphy/cellular/simple-at-root theory,
cyclotomic Hecke--KLR, Fock crystals, and Ariki categorification; the braid
track does not repeat them and currently needs no dependency on a SYMR page.
Conversely no SYMR page depends on this braid track. Geometric braid actions,
Soergel/Rouquier theory, Jones traces, and link homology stay here.

## 2. Conventions that proof authors must preserve

- A geometric braid lies in $D^2\times I$, has one monotone strand through
  each height, starts and ends at the same **set** $Q_n\subset\operatorname{int}D^2$,
  and is isotoped through such braids relative to the entire top and bottom
  disks. Individual endpoints need not be fixed strandwise. Pure means that
  every endpoint returns to itself.
- Homeomorphisms of the punctured disk are orientation preserving and fix
  $\partial D^2$ pointwise. The full mapping class group preserves $Q_n$
  setwise; the pure mapping class group fixes it pointwise. Isotopies use the
  same boundary and puncture convention as the endpoint homeomorphisms.
- $F_n(D^2)$ denotes ordered configurations and $C_n(D^2)=F_n(D^2)/S_n$
  unordered configurations. Thus $PB_n=\pi_1(F_n(D^2),q)$ and
  $B_n=\pi_1(C_n(D^2),[q])$. The covering monodromy agrees with the endpoint
  permutation $B_n\to S_n$ already published.
- Strand multiplication is stacking the first braid underneath the second;
  path concatenation and induced automorphisms are translated to that choice
  explicitly. A proof may adopt the opposite convention only after changing
  every displayed Artin automorphism and matrix consistently.
- The reduced Burau representation uses the total-winding infinite cyclic
  cover and deck variable $t$. LKB uses the two independent deck exponents
  $(q,t)$ fixed in its source report. Specialization conventions are never
  silently interchanged.
- A categorical braid action is weak until the natural isomorphisms between
  braid words and their coherence have been specified. Equality in a
  Grothendieck group does not prove isomorphism of functors or complexes.
- Link invariance distinguishes braid relations, conjugation (Markov I), and
  stabilization/destabilization (Markov II). Each receives a separate lemma.

## 3. Source keys and reading evidence

The concise machine-readable manifest is
`research/braid-groups-planning/source-manifest.json`. The commissioned source
audit is complete: seven independent Terra-high reports record
bibliographic identity, legitimate full-text URL, local cache path, SHA-256,
page/full-body verification, sections actually read, locators, and heading
dispositions. Retrieval of a complete text is never reported as
reading the whole text. The main short keys used below are:

- **GM:** González-Meneses, *Basic results on braid groups*, §§1.1--1.6,
  Theorems 1.3, 2.1, 4.2 and §3--§4.
- **A47:** Artin, *Theory of Braids*, Annals of Mathematics 48 (1947),
  pp. 101--126, especially Theorems 13--16, printed pp. 111--115; complete
  journal PDF retrieved from the Edinburgh Ranicki archive.
- **BB:** Birman--Brendle, *Braids: A Survey*, §§1.1--1.3, Theorem 1,
  §§2.1--2.2 (Alexander/Markov), §§4.2--4.5.
- **FN:** Fadell--Neuwirth, *Configuration Spaces*, pp. 111--118,
  Theorems 1--5 and the applications used below.
- **EGNO:** Etingof--Gelaki--Nikshych--Ostrik, *Tensor Categories*,
  §§8.1--8.3 and the cited trace/ribbon sections.
- **Tu:** Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I
  §§2--4, especially Theorem 2.5 and Lemmas 3.1.1, 3.3, and 3.4.
- **Bi/Kr:** Bigelow, *Braid Groups are Linear*, §§1--4, and Krammer,
  *Braid groups are linear*, §§1, 3--5.
- **KS:** Khovanov--Seidel, *Quivers, Floer cohomology, and braid group
  actions*, §§1a--1b, 2a--2e and Theorem 2.2.
- **R/EW:** Rouquier, *Categorification of the braid groups*, §§3.1--3.3,
  Theorems 3.5 and 3.7; Elias--Williamson, *Soergel Calculus*, §§1--3.
- **Soe/Lib:** Soergel, arXiv:math/0403496v2, §§5--6 (support flags and
  Hom formula); Libedinsky, arXiv:0707.3603v3, §§3--6 (constructive
  light-leaf bases).
- **KR:** Khovanov--Rozansky, *Matrix factorizations and link homology II*,
  introduction and the braid-closure/Markov-invariance construction.

Exact PDF page locators and any source substitutions are controlled by the
reports, not by this abbreviated key list.

## 4. Proposed inventory

In each table, `deps` is the complete proposed item dependency list. A source
cell gives an exact route into a retrieved source. “Direct” never means
source-free: it means the local proof is to be written from the stated source
route rather than recorded as an external theorem.

**Binding per-item provenance rule.** Unless a row explicitly states an
exception, every A-page statement is `literature-derived`; definitions and
remarks have proof provenance `not-applicable`, while every lemma, proposition,
theorem, corollary, example, and counterexample has an `ai-altered` planned
proof whose route is the row's exact content and source cells. A B-page row
with a cited source is likewise statement `literature-derived` and proof
`ai-altered`. A B-page row labelled as a direct/local witness with no literature
locator is statement and proof `ai-generated`, carries a `generation` record
whose role is exactly `example` or `counterexample`, and is forbidden as a
dependency target. The only recorded external-result exception is
`rem-current-status-of-burau-faithfulness`, whose statement is
`literature-derived`, proof is `not-supplied`, `proved_here` is false, and whose
external-source metadata must name both the primary nonfaithfulness source and
arXiv:2607.05283v1. No generated B item is used by any later row.

## BG-1 — Geometric Braids and Artin Generators

**Page id:** `geometric-braids-and-artin-generators`  
**Requires:** `homotopy-and-homotopy-equivalence`,
`subspaces-products-and-quotients`, `free-groups-and-presentations`,
`braided-and-symmetric-monoidal-categories`. The last page is a supplier only
because it already owns the published Artin-presentation item; none of its
categorical braid-action results is used in the geometry.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-geometric-braid-with-setwise-endpoints` (definition) | `[def-product-topology]` | Define $n$ disjoint strands in $D^2\times I$, monotone over $I$, with bottom and top endpoint set $Q_n$; record the induced endpoint permutation. | GM §1.2--§1.3, printed pp. 4--5; BB §1.2, printed pp. 4--6. |
| `def-braid-isotopy-relative-top-and-bottom` (definition) | `[def-geometric-braid-with-setwise-endpoints, def-homotopy-relative-and-path-homotopy]` | Isotopy is through geometric braids, fixes the two boundary endpoint sets, and preserves monotonicity; pure does not mean the same thing as isotopy relative each strand. | GM §1.2--§1.3, pp. 4--5. |
| `prop-stacking-of-geometric-braids-is-well-defined` (proposition) | `[def-braid-isotopy-relative-top-and-bottom]` | Rescale heights, stack, and show different representatives/isotopies yield an isotopy; check associativity after the fixed rescaling. | GM §1.2--§1.3; direct isotopy from the displayed strand model. |
| `thm-geometric-braids-form-a-group` (theorem) | `[prop-stacking-of-geometric-braids-is-well-defined]` | The vertical braid is the identity and reflection in height with reversed parametrization is inverse; concatenate the braid with its reflection and contract without strand collisions. | GM §1.2--§1.3, pp. 4--5; BB §1.2. |
| `def-elementary-geometric-half-twist` (definition) | `[def-geometric-braid-with-setwise-endpoints]` | Define $\sigma_i$ by a positive half twist of adjacent points and fix the over/under and multiplication convention. | GM §1.5, printed pp. 7--8, Figure 2. |
| `lem-geometric-far-commutativity` (lemma) | `[def-elementary-geometric-half-twist, def-braid-isotopy-relative-top-and-bottom]` | Half twists supported in disjoint disks commute; write the ambient isotopy that swaps their height windows. | GM §1.5 and §3, relation (3.1). |
| `lem-geometric-three-strand-braid-relation` (lemma) | `[def-elementary-geometric-half-twist, def-braid-isotopy-relative-top-and-bottom]` | In a disk containing three adjacent points, isotope $\sigma_i\sigma_{i+1}\sigma_i$ to $\sigma_{i+1}\sigma_i\sigma_{i+1}$, holding the outside cylinder fixed. | GM §1.5 and §3, relation (3.1). |
| `lem-every-geometric-braid-is-a-word-in-half-twists` (lemma) | `[def-elementary-geometric-half-twist, def-braid-isotopy-relative-top-and-bottom]` | Put a generic planar projection in normal position, order its finitely many crossings by height, and strip off the corresponding signed half twists. | GM §1.5; BB §1.2. |
| `prop-the-artin-presentation-surjects-onto-geometric-braids` (proposition) | `[def-braid-group-by-the-artin-presentation, thm-geometric-braids-form-a-group, lem-geometric-far-commutativity, lem-geometric-three-strand-braid-relation, lem-every-geometric-braid-is-a-word-in-half-twists, thm-von-dyck]` | Relations give a homomorphism and geometric generation gives surjectivity. Injectivity is explicitly not inferred from pictures; BG-3 proves it by the independent Fox--Neuwirth configuration-cell argument. | GM §1.5 and §3 through Proposition 3.1 setup; BB §1.2. |

**Proof seam.** This page intentionally proves only surjectivity of the Artin
map. BG-3 proves injectivity after independently identifying geometric braids
with configuration loops and computing the latter fundamental group from the
Fox--Neuwirth stratification. Thus neither presentation completeness nor a
later mapping-class theorem is smuggled into the geometric definition.

### BG-1 — Geometric Braids and Artin Generators — Examples

**Page id:** `geometric-braids-and-artin-generators-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-geometric-two-strand-braids-are-integer-twists` (example) | `[prop-the-artin-presentation-surjects-onto-geometric-braids, thm-the-two-strand-braid-group-is-infinite-cyclic]` | Draw/parametrize $\sigma_1^k$ and recover $k$ from the relative winding number. |
| `ex-the-three-strand-geometric-braid-relation` (example) | `[lem-geometric-three-strand-braid-relation]` | Give explicit three-strand coordinates for both words and an isotopy. |
| `cex-setwise-endpoints-do-not-make-a-braid-pure` (counterexample) | `[def-geometric-braid-with-setwise-endpoints]` | The single half twist has the correct endpoint set but transposes two labels. |
| `cex-arbitrary-link-isotopy-need-not-be-braid-isotopy` (counterexample) | `[def-braid-isotopy-relative-top-and-bottom]` | Exhibit a strand isotopy with a height critical point, showing why monotonicity is part of the equivalence relation. |

## BG-2 — Ordered and Unordered Configuration Spaces

**Page id:** `ordered-and-unordered-configuration-spaces`  
**Requires:** `the-fundamental-group`, `covering-spaces-and-lifting`,
`fibrations-fiber-bundles-and-homotopy-exact-sequences`,
`subspaces-products-and-quotients`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-ordered-configuration-space` (definition) | `[def-product-topology]` | $F_n(X)=\{(x_1,\ldots,x_n):x_i\ne x_j\}$ with the subspace topology and a fixed ordered base configuration. | GM §1.1, printed p. 3; FN §I, p. 111. |
| `prop-the-symmetric-group-acts-freely-on-ordered-configurations` (proposition) | `[def-ordered-configuration-space, lem-symmetric-group-is-a-group]` | Coordinate permutation is continuous and a nonidentity permutation fixes no collision-free ordered tuple. | GM §1.3, pp. 4--5. |
| `def-unordered-configuration-space` (definition) | `[def-ordered-configuration-space, prop-the-symmetric-group-acts-freely-on-ordered-configurations, def-quotient-topology]` | $C_n(X)=F_n(X)/S_n$ and its basepoint is the orbit of the ordered base configuration. | GM §1.3, pp. 4--5. |
| `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations` (lemma) | `[def-unordered-configuration-space]` | Around a configuration choose pairwise disjoint coordinate disks; their $n!$ permuted products give all sheets and prove local triviality. | GM §1.3; covering argument expanded directly. |
| `thm-ordered-configurations-cover-unordered-configurations-regularly` (theorem) | `[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations, def-covering-map-and-evenly-covered-neighbourhoods, def-regular-covering]` | If $M$ is a connected topological manifold of dimension at least two, coordinate permutation makes $F_n(M)\to C_n(M)$ an $n!$-sheeted regular cover with deck group $S_n$. Prove $F_n(M)$ path connected by moving points one at a time along paths avoiding a finite set. | GM §1.3, pp. 4--5; BB §1.1. |
| `def-pure-braid-group-from-ordered-configurations` (definition) | `[def-ordered-configuration-space, def-based-loops-and-fundamental-group]` | Define $PB_n=\pi_1(F_n(D^2),q)$, explicitly distinguished from the later geometric identification. | GM Definition 1.1, printed p. 3. |
| `def-braid-group-from-unordered-configurations` (definition) | `[def-unordered-configuration-space, def-based-loops-and-fundamental-group]` | Define $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[q])$; notation remains decorated until BG-3 proves equivalence. | GM Definition 1.2, printed p. 5. |
| `def-endpoint-monodromy-of-a-configuration-loop` (definition) | `[thm-ordered-configurations-cover-unordered-configurations-regularly, thm-path-lifting-for-covering-maps, def-monodromy-action-on-a-covering-fibre]` | Lift an unordered loop and read its ending ordering to obtain $B_n^{\mathrm{conf}}\to S_n$. | GM §§1.1--1.3. |
| `thm-configuration-braid-pure-braid-short-exact-sequence` (theorem) | `[def-pure-braid-group-from-ordered-configurations, def-braid-group-from-unordered-configurations, def-endpoint-monodromy-of-a-configuration-loop, thm-covering-maps-inject-fundamental-groups]` | Covering theory gives $1\to PB_n\to B_n^{\mathrm{conf}}\to S_n\to1$; surjectivity is witnessed by adjacent half-twist loops. | GM §1.3; BB §1.1, exact sequence following the definitions. |
| `lem-forgetting-configuration-points-is-locally-trivial` (lemma) | `[def-ordered-configuration-space]` | For $F_{m+n}(M)\to F_m(M)$, move nearby retained points by disjoint local isotopies and trivialize the remaining punctured-manifold configuration. | FN Theorem 1, pp. 112--113. |
| `thm-fadell-neuwirth-forgetful-fibration` (theorem) | `[lem-forgetting-configuration-points-is-locally-trivial]` | For a connected manifold $M$ without boundary of dimension at least two and $m,n\ge1$, forgetting the last $n$ points gives a locally trivial bundle $F_{m+n}(M)\to F_m(M)$ with fiber $F_n(M\setminus\{m\text{ retained points}\})$. The disk applications use $M=\operatorname{int}D^2\cong\mathbb R^2$. | FN Theorems 1--2, pp. 112--114; GM Theorem 2.1 for the planar one-point case. |

### BG-2 — Ordered and Unordered Configuration Spaces — Examples

**Page id:** `ordered-and-unordered-configuration-spaces-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-two-point-ordered-configurations-of-the-plane` (example) | `[def-ordered-configuration-space]` | Use center and difference coordinates to identify $F_2(\mathbb C)\cong\mathbb C\times\mathbb C^*$. |
| `ex-the-two-point-unordered-cover-and-its-monodromy` (example) | `[thm-ordered-configurations-cover-unordered-configurations-regularly, def-endpoint-monodromy-of-a-configuration-loop]` | Follow a half rotation of the difference coordinate and compute the nontrivial deck transformation. |
| `cex-collisions-destroy-freeness-of-coordinate-permutation` (counterexample) | `[prop-the-symmetric-group-acts-freely-on-ordered-configurations]` | In $X^n$ before deleting diagonals, a repeated coordinate is fixed by a transposition. |
| `cex-the-ordered-to-unordered-two-point-quotient-is-not-one-to-one` (counterexample) | `[def-unordered-configuration-space]` | The ordered configurations $(z_1,z_2)$ and $(z_2,z_1)$ are distinct but have the same unordered image. This only refutes identifying the natural quotient map with a homeomorphism; it does not claim the two total spaces are never abstractly homeomorphic. |

## BG-3 — Braids as Fundamental Groups of Configuration Spaces

**Page id:** `braids-as-fundamental-groups-of-configuration-spaces`  
**Requires:** `geometric-braids-and-artin-generators`,
`ordered-and-unordered-configuration-spaces`, `the-fundamental-group`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-motion-of-an-unordered-point-configuration` (definition) | `[def-unordered-configuration-space]` | A based loop in $C_n(D^2)$ is a continuous motion of an unordered set with no collisions. | GM §1.3, pp. 4--5. |
| `lem-a-configuration-loop-traces-a-geometric-braid` (lemma) | `[def-motion-of-an-unordered-point-configuration, def-geometric-braid-with-setwise-endpoints]` | Take the graph of all moving points in $D^2\times I$; local lifting to $F_n$ proves it is a union of disjoint monotone strands. | GM §§1.1--1.3; BB §1.1. |
| `lem-path-homotopy-traces-braid-isotopy` (lemma) | `[lem-a-configuration-loop-traces-a-geometric-braid, def-homotopy-relative-and-path-homotopy, def-braid-isotopy-relative-top-and-bottom]` | Interpret a based loop homotopy as a two-parameter family of collision-free slices; compactness supplies the strandwise isotopy. | GM §§1.1--1.3. |
| `lem-a-geometric-braid-slices-to-a-configuration-loop` (lemma) | `[def-geometric-braid-with-setwise-endpoints, def-motion-of-an-unordered-point-configuration]` | Intersect the braid with each height disk and prove continuity in $C_n(D^2)$. | GM §1.2--§1.3. |
| `lem-slicing-and-tracing-are-mutually-inverse-on-classes` (lemma) | `[lem-a-configuration-loop-traces-a-geometric-braid, lem-path-homotopy-traces-braid-isotopy, lem-a-geometric-braid-slices-to-a-configuration-loop]` | One composite is literal; the other is straightened by its height parametrization. Check relative-boundary conditions. | GM §§1.1--1.3; BB §1.1. |
| `lem-stacking-corresponds-to-loop-concatenation` (lemma) | `[prop-stacking-of-geometric-braids-is-well-defined, lem-a-geometric-braid-slices-to-a-configuration-loop]` | Under the fixed bottom-to-top multiplication convention, compare the two standard height reparametrizations. | GM §1.3. |
| `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations` (theorem) | `[lem-slicing-and-tracing-are-mutually-inverse-on-classes, lem-stacking-corresponds-to-loop-concatenation, def-braid-group-from-unordered-configurations]` | The trace/slice bijection is a group isomorphism $B_n^{\mathrm{geom}}\cong\pi_1(C_n(D^2))$. | GM §§1.2--1.3; BB §1.1. |
| `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations` (corollary) | `[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations, def-pure-braid-group-from-ordered-configurations]` | Lift precisely the motions with identity endpoint permutation and identify their labelled strand traces. | GM §§1.1--1.3. |
| `prop-geometric-endpoint-permutation-equals-covering-monodromy` (proposition) | `[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations, def-endpoint-monodromy-of-a-configuration-loop]` | Track labels along the unique lift to $F_n$ and compare the top endpoint label of every strand. | GM §1.3. |
| `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic` (theorem) | `[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]` | Package the independently defined strand and configuration-loop models, including multiplication and endpoint permutation. The Artin presentation is deliberately postponed to BG-6, where braid combing may use the already proved Fadell--Neuwirth tower without circularity. | GM §§1.1--1.3. |

### BG-3 — Braids as Fundamental Groups of Configuration Spaces — Examples

**Page id:** `braids-as-fundamental-groups-of-configuration-spaces-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-a-half-twist-loop-traces-the-standard-generator` (example) | `[lem-a-configuration-loop-traces-a-geometric-braid, def-elementary-geometric-half-twist]` | Parametrize the adjacent points by a half circle and identify the traced braid. |
| `ex-a-pure-full-twist-as-an-ordered-configuration-loop` (example) | `[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]` | Parametrize one point circling another and check trivial endpoint permutation. |
| `cex-forgetting-labels-can-close-a-nonlooping-coordinate-path` (counterexample) | `[def-unordered-configuration-space]` | An adjacent exchange is a loop only after passage to the unordered quotient. |
| `cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop` (counterexample) | `[lem-a-geometric-braid-slices-to-a-configuration-loop]` | A local maximum gives a slice with changing cardinality. |

## BG-4 — Punctured Disks, Mapping Classes, and Point Pushing

**Page id:** `punctured-disks-mapping-classes-and-point-pushing`  
**Requires:** `braids-as-fundamental-groups-of-configuration-spaces`,
`isotopy-extension-and-embedding-theory-beyond-whitney`,
`manifolds-with-boundary-collars-and-orientations`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-boundary-fixed-mapping-class-group-of-a-punctured-disk` (definition) | `[def-geometric-braid-with-setwise-endpoints]` | Orientation-preserving self-homeomorphisms of $D^2$ fix $\partial D^2$ pointwise and preserve $Q_n$ setwise, modulo isotopies with those same conditions. | GM §1.4, printed pp. 5--7; BB §1.3, Theorem 1 conventions. |
| `def-pure-mapping-class-group-of-a-punctured-disk` (definition) | `[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]` | Require each point of $Q_n$ fixed, not merely the set; retain pointwise boundary fixing throughout the isotopy. | GM §1.4; BB §1.3. |
| `thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group` (theorem) | `[def-homotopy-relative-and-path-homotopy]` | In the compact-open topology, $\operatorname{Homeo}^+(D^2,\partial D^2)$ is contractible. Give the radial Alexander deformation with its formula on the inner disk/outer annulus, check continuity at the moving radius, and check continuity as a deformation of the homeomorphism group. | Farb--Margalit Version 5.0, §1.4 pp. 43--45 and §2.2.1 pp. 50--51; BB §1.3 uses this contractibility input. |
| `lem-evaluation-on-an-unordered-marked-set-is-a-locally-trivial-bundle` (lemma) | `[def-unordered-configuration-space, thm-isotopy-extension]` | Evaluation $\operatorname{Homeo}^+(D^2,\partial D^2)\to C_n(\operatorname{int}D^2)$, $h\mapsto h(Q_n)$, is a locally trivial bundle whose fiber is the subgroup preserving $Q_n$ setwise. Construct local sections by disjoint supported point motions. | BB §1.3, proof of Theorem 1; Farb--Margalit §9.1.4 pp. 256--257. |
| `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes` (definition) | `[lem-evaluation-on-an-unordered-marked-set-is-a-locally-trivial-bundle, def-boundary-fixed-mapping-class-group-of-a-punctured-disk]` | Lift a based configuration loop starting at the identity homeomorphism and take the component of its endpoint in the fiber. | BB §1.3; Farb--Margalit Theorem 9.1 proof. |
| `lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism` (lemma) | `[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]` | Homotopy lifting makes the endpoint component independent of loop representative and lift; concatenate lifted paths to prove the multiplication formula. No contractibility of a punctured-disk homeomorphism group is asserted. | BB §1.3; FN §IV evaluation-fibration method. |
| `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk` (theorem) | `[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group, lem-evaluation-on-an-unordered-marked-set-is-a-locally-trivial-bundle, lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]` | The long exact homotopy sequence, together with $\pi_0=\pi_1=0$ for the total homeomorphism group, makes $\pi_1(C_n(D^2))\to\pi_0(\operatorname{Homeo}^+(D^2,\partial D^2;Q_n))$ bijective. | BB §1.3, Theorem 1; Farb--Margalit Theorem 9.1. |
| `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk` (theorem) | `[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations, thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk]` | Compose the configuration/strand equivalence with the evaluation boundary isomorphism; match each geometric half twist to the supported half-twist mapping class. | GM §1.4; BB §1.3, Theorem 1; Farb--Margalit §9.1.3--§9.1.4. |
| `cor-pure-braids-are-pure-punctured-disk-mapping-classes` (corollary) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, prop-geometric-endpoint-permutation-equals-covering-monodromy, def-pure-mapping-class-group-of-a-punctured-disk]` | Compare kernels of the endpoint-permutation maps. | GM §1.4; BB §1.3. |
| `def-point-pushing-homomorphism-for-a-puncture` (definition) | `[def-pure-mapping-class-group-of-a-punctured-disk, def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]` | Hold the first $n-1$ points fixed, push the last around a based loop in their complement, and take the endpoint component of a lifted ambient isotopy. | FN §IV; Farb--Margalit §4.2.1--§4.2.3, pp. 101--105. |
| `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture` (theorem) | `[def-point-pushing-homomorphism-for-a-puncture, thm-fadell-neuwirth-forgetful-fibration, cor-pure-braids-are-pure-punctured-disk-mapping-classes]` | Identify the homotopy exact sequence of the forgetful fibration with the mapping-class forgetful map; prove injectivity in the boundary-fixed disk case and exactness at every term. | FN Theorems 2--3 and §IV; mapping-class textbook Birman exact-sequence locator. |

### BG-4 — Punctured Disks, Mapping Classes, and Point Pushing — Examples

**Page id:** `punctured-disks-mapping-classes-and-point-pushing-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-a-half-twist-as-a-punctured-disk-homeomorphism` (example) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]` | Give an explicit disk-supported half rotation with a collar interpolation to the identity. |
| `ex-point-pushing-one-puncture-around-another` (example) | `[def-point-pushing-homomorphism-for-a-puncture]` | Track the resulting pure two-strand full twist. |
| `cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group` (counterexample) | `[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]` | A boundary rotation can absorb braid twisting, so pointwise boundary fixing is essential. |
| `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group` (counterexample) | `[def-pure-mapping-class-group-of-a-punctured-disk]` | The half twist preserves $Q_n$ setwise but exchanges two punctures. |

## BG-5 — Pure Braids, Fadell–Neuwirth, and Asphericity

**Page id:** `pure-braids-fadell-neuwirth-and-asphericity`  
**Requires:** `ordered-and-unordered-configuration-spaces`,
`braids-as-fundamental-groups-of-configuration-spaces`,
`punctured-disks-mapping-classes-and-point-pushing`,
`free-groups-and-presentations`, `semidirect-products-and-automorphism-groups`,
`fibrations-fiber-bundles-and-homotopy-exact-sequences`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles` (lemma) | `[def-homotopy-equivalence]` | Construct disjoint arcs from puncture circles to the boundary and collapse the complement to a graph; obtain free fundamental group and vanishing higher homotopy. | FN §II and §IV; GM discussion after Theorem 2.1. |
| `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction` (lemma) | `[thm-fadell-neuwirth-forgetful-fibration, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]` | Starting at $F_1(\mathbb C)=\mathbb C$, the LES segment $\pi_2(\text{fiber})\to\pi_2(F_n)\to\pi_2(F_{n-1})$ and the wedge-of-circles fiber force $\pi_2(F_n)=0$ for every $n$. | FN Theorem 2 and Corollary 2.2, pp. 113--114; GM §2.1. |
| `thm-pure-braid-forgetting-a-strand-short-exact-sequence` (theorem) | `[thm-fadell-neuwirth-forgetful-fibration, def-pure-braid-group-from-ordered-configurations, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction]` | For $n\ge2$, the LES now makes the fiber $\pi_1\cong F_{n-1}$ injective and gives $1\to F_{n-1}\to PB_n\to PB_{n-1}\to1$, with base case $PB_1=1$. | FN Theorems 2--3, pp. 113--115; GM Theorem 2.1. |
| `lem-the-planar-forgetful-map-has-a-continuous-section` (lemma) | `[thm-fadell-neuwirth-forgetful-fibration]` | Add a final point far to the right using a continuous function of the existing configuration's radius; verify it never collides. | FN §III, Theorem 4; GM paragraph after Theorem 2.1. |
| `cor-the-pure-braid-extension-splits` (corollary) | `[thm-pure-braid-forgetting-a-strand-short-exact-sequence, lem-the-planar-forgetful-map-has-a-continuous-section]` | Apply $\pi_1$ to the section and obtain $PB_n\cong F_{n-1}\rtimes PB_{n-1}$ with action left explicit. | FN §III; GM §2. |
| `thm-ordered-planar-configuration-spaces-are-aspherical` (theorem) | `[thm-fadell-neuwirth-forgetful-fibration, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction]` | For every $k\ge3$, the LES has zero adjacent fiber groups and reduces $\pi_k(F_n)$ to $\pi_k(F_{n-1})$; combine with the separately closed $k=2$ induction and contractible base case. | FN Corollaries 2.1--2.3, pp. 114--115; GM §2. |
| `cor-unordered-planar-configuration-spaces-are-aspherical` (corollary) | `[thm-ordered-planar-configuration-spaces-are-aspherical, thm-ordered-configurations-cover-unordered-configurations-regularly]` | A covering induces isomorphisms on $\pi_k$ for $k\ge2$. | FN §II; GM §2. |
| `def-standard-pure-braid-generators` (definition) | `[def-elementary-geometric-half-twist, thm-the-braid-group-surjects-onto-the-symmetric-group]` | Define $A_{ij}=\sigma_{j-1}\cdots\sigma_{i+1}\sigma_i^2\sigma_{i+1}^{-1}\cdots\sigma_{j-1}^{-1}$ and verify it is pure. | GM §2, formulas for Artin pure generators. |
| `lem-standard-pure-braids-generate-each-free-kernel` (lemma) | `[def-standard-pure-braid-generators, thm-pure-braid-forgetting-a-strand-short-exact-sequence]` | Identify $A_{1n},\ldots,A_{n-1,n}$ with meridian loops of the forgotten-point fiber. | GM §2; FN §IV. |
| `thm-standard-pure-braids-generate-the-pure-braid-group` (theorem) | `[lem-standard-pure-braids-generate-each-free-kernel, cor-the-pure-braid-extension-splits]` | Induct through the split free-group tower. | GM §2. |
| `thm-pure-braid-groups-are-torsion-free` (theorem) | `[thm-pure-braid-forgetting-a-strand-short-exact-sequence]` | Induct: a torsion element maps trivially in $PB_{n-1}$ and hence lies in the torsion-free free kernel. | FN §IV, torsion application; GM §2. |

### BG-5 — Pure Braids, Fadell–Neuwirth, and Asphericity — Examples

**Page id:** `pure-braids-fadell-neuwirth-and-asphericity-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-pure-two-strand-braid-group-is-infinite-cyclic` (example) | `[thm-pure-braid-forgetting-a-strand-short-exact-sequence]` | Identify the fiber with a once-punctured disk and its meridian with $\sigma_1^2$. |
| `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension` (example) | `[cor-the-pure-braid-extension-splits, def-standard-pure-braid-generators]` | Compute $PB_3\cong F_2\rtimes\mathbb Z$ and the conjugation action of the chosen section directly, without using the later center theorem or claiming a direct product. |
| `ex-pure-braid-generators-as-point-pushes` (example) | `[def-standard-pure-braid-generators, def-point-pushing-homomorphism-for-a-puncture]` | Match $A_{ij}$ with the last point pushed around a meridian after relabelling. |
| `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free` (counterexample) | `[thm-configuration-braid-pure-braid-short-exact-sequence, thm-pure-braid-groups-are-torsion-free]` | Give a generic extension of a torsion-free group by a finite group that has torsion, exposing the invalid inference. |

## BG-6 — Artin Presentation Completeness and Braid Combing

**Page id:** `artin-presentation-completeness-and-braid-combing`  
**Requires:** `pure-braids-fadell-neuwirth-and-asphericity`,
`punctured-disks-mapping-classes-and-point-pushing`,
`geometric-braids-and-artin-generators`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-zariski-braid-combing-words-alpha-and-x` (definition) | `[def-braid-group-by-the-artin-presentation]` | Put $\alpha_i=\sigma_i\sigma_{i+1}\cdots\sigma_{n-1}$, $\alpha_n=1$, and $x_i=\sigma_{n-1}^{-1}\cdots\sigma_{i+1}^{-1}\sigma_i^2\sigma_{i+1}\cdots\sigma_{n-1}$, fixing the source's multiplication convention. | GM §3.1, printed pp. 19--20. |
| `lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors` (lemma) | `[def-zariski-braid-combing-words-alpha-and-x, prop-the-artin-presentation-surjects-onto-geometric-braids]` | For a word $W$ tracing the trivial geometric braid, record the successive positions $j_k$ of the last point and insert $\alpha_{j_k}\alpha_{j_k}^{-1}$ to write $W$ as the product $\alpha_{j_{k-1}}^{-1}\sigma_{i_k}^{\epsilon_k}\alpha_{j_k}$. | GM Proposition 3.1 proof, pp. 19--20. |
| `lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter` (lemma) | `[lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors, lem-geometric-far-commutativity, lem-geometric-three-strand-braid-relation]` | Check GM's six cases: two cancel, two become $x_i^{\pm1}$, and two slide to $\sigma_k^{\pm1}$ with $k\le n-2$, using only Artin/free-cancellation relations. | GM §3.1 cases (1)--(6), pp. 20--21. |
| `lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel` (lemma) | `[def-zariski-braid-combing-words-alpha-and-x, lem-geometric-far-commutativity, lem-geometric-three-strand-braid-relation]` | Prove the three explicit formulas for $\sigma_i^{-1}x_j\sigma_i$ (and inverses) according as $i<j-1$, $i=j-1$, $i=j$, or $i>j$, by the displayed braid-relation calculations. | GM §3.1, pp. 21--22. |
| `lem-every-trivial-braid-word-combs-as-w-one-w-two` (lemma) | `[lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter, lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel]` | Collect all $x_i^{\pm1}$ to the left and all $\sigma_1,\ldots,\sigma_{n-2}$ letters to the right, producing $W\equiv W_1W_2$ solely by defining relations. | GM §3.1, end of p. 22. |
| `lem-the-combed-geometric-decomposition-is-unique` (lemma) | `[lem-every-trivial-braid-word-combs-as-w-one-w-two, cor-the-pure-braid-extension-splits, lem-standard-pure-braids-generate-each-free-kernel]` | Identify the $x_i$ with the free kernel generators in $PB_n\cong F_{n-1}\rtimes PB_{n-1}$; uniqueness forces both factors of a trivial geometric braid to be trivial in their respective groups. | GM §3.1, p. 22; §2.1 split exact sequence. |
| `thm-the-artin-presentation-is-complete-for-geometric-braids` (theorem) | `[lem-the-combed-geometric-decomposition-is-unique, prop-the-artin-presentation-surjects-onto-geometric-braids]` | Induct on $n$: freely reduce $W_1$ in the free kernel, then reduce the lower-rank $W_2$ by the induction hypothesis. Thus every kernel word follows from the Artin/free-cancellation relations. | GM Proposition 3.1, first proof, §§3.1 pp. 19--22. |
| `cor-all-four-classical-braid-models-realize-the-artin-presentation` (corollary) | `[thm-the-artin-presentation-is-complete-for-geometric-braids, thm-geometric-and-configuration-braid-models-are-canonically-isomorphic, thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]` | Identify the published Artin group, geometric braids, $\pi_1$ of unordered configurations, and boundary-fixed punctured-disk mapping classes by maps already constructed, and verify their generators agree. | GM §§1.1--1.5 and Proposition 3.1; Farb--Margalit Theorem 9.1. |

### BG-6 — Artin Presentation Completeness and Braid Combing — Examples

**Page id:** `artin-presentation-completeness-and-braid-combing-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-combing-a-four-strand-braid-word` (example) | `[lem-every-trivial-braid-word-combs-as-w-one-w-two]` | Follow the six-case algorithm on a sourced/checked word and display $W_1,W_2$; GM §3.1. |
| `ex-the-free-kernel-words-for-three-strand-braid-combing` (example) | `[def-zariski-braid-combing-words-alpha-and-x]` | Compute $x_1,x_2$ and match them to the two meridians in $PB_3\to PB_2$; GM §§2.1, 3.1. |
| `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness` (counterexample) | `[thm-the-artin-presentation-is-complete-for-geometric-braids]` | Explain via a generic surjective presented-group map why checking relations/generation proves no injectivity; the combing kernel proof is the missing obligation. |

## BG-7 — Garside Structure, Normal Forms, and the Center

**Page id:** `garside-structure-normal-forms-and-the-center`  
**Requires:** `braided-and-symmetric-monoidal-categories`,
`decision-problems-for-finitely-presented-groups`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-positive-braid-monoid` (definition) | `[def-braid-group-by-the-artin-presentation]` | Use the Artin generators and braid/far-commutation relations without inverses; distinguish the abstract monoid from its eventual image in $B_n$. | GM §4 opening, printed pp. 24--25. |
| `lem-positive-artin-relations-preserve-homogeneous-length` (lemma) | `[def-positive-braid-monoid]` | Define $\ell$ on positive words and check that both relation types preserve it; hence only finitely many words represent a fixed positive braid. | GM §4, printed p. 26. |
| `lem-the-positive-braid-monoid-is-left-and-right-cancellative` (lemma) | `[def-positive-braid-monoid, lem-positive-artin-relations-preserve-homogeneous-length]` | Perform the source's complement/reversing induction on the total word length: if $\sigma_iA\equiv\sigma_jB$, use the explicit common prefix $\sigma_i\sigma_j$ for $|i-j|>1$ or $\sigma_i\sigma_j\sigma_i$ for $|i-j|=1$, shorten, and cancel recursively; apply the word-reversal anti-automorphism for right cancellation. | GM §4, pp. 26--27, cancellativity step. |
| `def-left-and-right-divisibility-for-positive-braids` (definition) | `[def-positive-braid-monoid]` | Define $a\preccurlyeq_L b$ by $ac=b$ and $a\preccurlyeq_R b$ by $ca=b$; after cancellation and homogeneous length, prove reflexivity, transitivity, and antisymmetry, so these are partial orders rather than silently assumed orders. | GM §4, p. 26. |
| `lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements` (lemma) | `[lem-the-positive-braid-monoid-is-left-and-right-cancellative, def-left-and-right-divisibility-for-positive-braids]` | For atoms $\sigma_i,\sigma_j$, compute the lcm as $\sigma_i$ when $i=j$, $\sigma_i\sigma_j=\sigma_j\sigma_i$ when $|i-j|>1$, and $\sigma_i\sigma_j\sigma_i=\sigma_j\sigma_i\sigma_j$ when $|i-j|=1$; prove minimality by the same first-letter induction. Obtain right lcms by word reversal and record each complement. | GM §4, pp. 26--27. |
| `thm-positive-braids-have-left-and-right-gcds-and-lcms` (theorem) | `[lem-the-positive-braid-monoid-is-left-and-right-cancellative, lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements, lem-positive-artin-relations-preserve-homogeneous-length]` | Induct on total homogeneous length to extend atomic complements to pairwise lcms; common divisors form a finite nonempty set, and the lcm of all common divisors is the gcd. Apply word reversal for the right-handed assertions. | GM §4, pp. 26--27. |
| `def-garside-half-twist-and-simple-positive-braid` (definition) | `[def-positive-braid-monoid, def-left-and-right-divisibility-for-positive-braids]` | Define $\Delta=(\sigma_1\cdots\sigma_{n-1})\cdots(\sigma_1\sigma_2)\sigma_1$ and a simple positive braid as a left divisor of $\Delta$; right divisors are proved to agree below rather than built into the definition. | GM §4, displayed $\Delta$, p. 27. |
| `lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors` (lemma) | `[def-garside-half-twist-and-simple-positive-braid, thm-positive-braids-have-left-and-right-gcds-and-lcms]` | Factor the displayed triangular word from every $\sigma_i$, use the atomic lcm induction to prove minimality, and use the word-reversal symmetry of $\Delta$ to identify its left and right divisor sets. | GM §4, p. 27. |
| `lem-conjugation-by-delta-reverses-artin-generators` (lemma) | `[def-garside-half-twist-and-simple-positive-braid]` | Move $\sigma_i$ through the displayed triangular factors to prove $\sigma_i\Delta=\Delta\sigma_{n-i}$ inside the positive monoid; hence conjugation by $\Delta$ reverses indices in the fraction group and $\Delta^2$ is central. | GM §4, pp. 27--28. |
| `lem-every-positive-braid-divides-a-power-of-delta-on-both-sides` (lemma) | `[lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors, lem-conjugation-by-delta-reverses-artin-generators]` | Induct on a positive word $a=a'\sigma_i$: if $a'c=\Delta^r$, move the complementary atom across a further $\Delta$ using $\sigma_i\Delta=\Delta\sigma_{n-i}$ to construct a common $\Delta^{r+1}$ multiple; reverse words for the other side. | GM §4, p. 28. |
| `thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group` (theorem) | `[lem-the-positive-braid-monoid-is-left-and-right-cancellative, lem-every-positive-braid-divides-a-power-of-delta-on-both-sides, def-braid-group-by-the-artin-presentation]` | Construct fractions $(a,b)$ modulo common right multiplication, verify multiplication using common multiples, and prove the universal group property. The Artin group receives the monoid generators and satisfies that same universal property, so the fraction group is $B_n$ and the canonical monoid map is injective. | GM §4, p. 28, Ore embedding argument. |
| `thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group` (theorem) | `[thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group, thm-positive-braids-have-left-and-right-gcds-and-lcms, lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]` | Shift any finite pair by a sufficiently large common power of $\Delta$ into the positive monoid; define meet/join there and shift back. Prove independence of the chosen power using cancellation and centrality of $\Delta^2$ (handling odd shifts via the index-reversal automorphism). | GM §4, p. 28, extension of the lattice order. |
| `lem-simple-positive-braids-are-indexed-by-permutations` (lemma) | `[def-garside-half-twist-and-simple-positive-braid, thm-the-ore-fraction-group-of-positive-braids-is-the-artin-braid-group, thm-the-braid-group-surjects-onto-the-symmetric-group, thm-the-symmetric-group-has-the-coxeter-presentation]` | Induct on inversion number to prove the needed reduced-word exchange statement: move the last adjacent inversion to the right by far/three-term Coxeter moves, delete it, and apply induction. Those moves lift to positive braid relations, so each permutation has a well-defined simple lift; divisibility by $\Delta$ forces square-free crossings and hence injectivity. This supplies rather than silently imports the type-$A$ reduced-word lemma. | GM §4, pp. 28--29; BB §5.1. |
| `thm-left-garside-normal-form-is-unique` (theorem) | `[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group, lem-simple-positive-braids-are-indexed-by-permutations, lem-conjugation-by-delta-reverses-artin-generators]` | For $x$, choose maximal $p$ with $\Delta^p\preccurlyeq_Lx$, then repeatedly take $s_i=\Delta\wedge_L$ the remaining positive suffix. Homogeneous length terminates the process; maximality and the lattice meet prove each adjacent pair is left weighted and prove uniqueness. | GM §4.1, pp. 29--30. |
| `cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form` (corollary) | `[thm-left-garside-normal-form-is-unique]` | Give the terminating normalization algorithm and compare canonical factor lists. | GM §4; BB §5.1. |
| `thm-braid-groups-are-torsion-free-by-the-garside-lattice` (theorem) | `[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]` | If $x^r=1$, take $d=1\wedge_Lx\wedge_L\cdots\wedge_Lx^{r-1}$; left multiplication by $x$ permutes the factors and gives $xd=d$. Cancel $d$ in the group to obtain $x=1$. | GM Proposition 4.1, p. 30. |
| `lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two` (lemma) | `[lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors, lem-conjugation-by-delta-reverses-artin-generators, thm-left-garside-normal-form-is-unique]` | For $n>2$, if central positive $z$ is divisible by one atom, centrality propagates divisibility along the connected type-$A$ Coxeter graph, so $\Delta\preccurlyeq_Lz$; remove maximal $\Delta$ powers. Commutation with every atom and the index-reversal formula force the exponent even and the remaining simple factors trivial. | GM Theorem 4.2 proof, pp. 30--31. |
| `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two` (theorem) | `[lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two, lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]` | For central $x\in B_n$, choose even $2r$ with $\Delta^{2r}x$ positive; the lemma makes it $\Delta^{2s}$, hence $x=\Delta^{2(s-r)}$. Conversely $\Delta^2$ is central. State the hypothesis $n>2$ in the theorem. | GM Theorem 4.2, pp. 30--31. |
| `prop-the-center-of-b-two-is-all-of-b-two` (proposition) | `[def-braid-group-by-the-artin-presentation]` | With one generator and no braid relations, $B_2\cong\mathbb Z$ and $Z(B_2)=B_2=\langle\Delta\rangle$; do not fold this exception into the $n>2$ theorem. | GM after Theorem 4.2, p. 31. |

### BG-7 — Garside Structure, Normal Forms, and the Center — Examples

**Page id:** `garside-structure-normal-forms-and-the-center-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-simple-braids-and-divisibility-lattice-for-b-three` (example) | `[lem-simple-positive-braids-are-indexed-by-permutations, thm-positive-braids-have-left-and-right-gcds-and-lcms]` | List the six simples and compute several left/right gcd/lcm pairs; GM §4. |
| `ex-a-left-garside-normal-form-computation-in-b-three` (example) | `[thm-left-garside-normal-form-is-unique]` | Normalize a word containing positive and negative generators step by step. |
| `ex-the-full-twist-in-b-three` (example) | `[thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two]` | Verify $(\sigma_1\sigma_2)^3=\Delta^2$ and commute it with both generators; GM Theorem 4.2. |
| `cex-exponent-sum-is-not-a-complete-braid-normal-form` (counterexample) | `[thm-left-garside-normal-form-is-unique]` | Give unequal $B_3$ braids with the same exponent sum and distinguish their Garside forms. |

## BG-8 — The Artin Action on a Free Group

**Page id:** `the-artin-action-on-a-free-group`  
**Requires:** `punctured-disks-mapping-classes-and-point-pushing`,
`free-groups-and-presentations`, `subgroups-of-free-groups-and-schreier-rewriting`,
`artin-presentation-completeness-and-braid-combing`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-standard-meridians-of-a-punctured-disk` (definition) | `[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]` | Choose boundary basepoint, disjoint stems, positively oriented meridians $x_1,\ldots,x_n$, and boundary word $x_1\cdots x_n$. | GM §1.6, printed pp. 8--10. |
| `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians` (theorem) | `[def-standard-meridians-of-a-punctured-disk, thm-fundamental-group-of-finite-wedge-of-circles]` | Use the explicit deformation retract and track the boundary loop's ordered product. | GM §1.6. |
| `def-artin-automorphisms-of-the-free-group` (definition) | `[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]` | With braid words acting left-to-right as fixed in §2, set $\rho(\sigma_i)(x_i)=x_{i+1}$, $\rho(\sigma_i)(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}$, and fix every other $x_j$. This convention is frozen for all later calculations. | GM equation (1.1), §1.6, printed pp. 8--9. |
| `lem-artin-automorphisms-satisfy-the-braid-relations` (lemma) | `[def-artin-automorphisms-of-the-free-group]` | Check far commutation generatorwise and compute both three-term composites on $x_i,x_{i+1},x_{i+2}$. | GM §1.6, equation (1.1). |
| `def-the-artin-representation-on-a-free-group` (definition) | `[def-braid-group-by-the-artin-presentation, lem-artin-automorphisms-satisfy-the-braid-relations, thm-von-dyck]` | Descend the generator assignment to $\rho:B_n\to\operatorname{Aut}(F_n)$. | GM §1.6. |
| `prop-the-geometric-action-on-meridians-is-the-artin-representation` (proposition) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, def-the-artin-representation-on-a-free-group, def-standard-meridians-of-a-punctured-disk]` | Push each meridian through a half-twist homeomorphism and recover the displayed Nielsen automorphism. | GM §1.6. |
| `lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy` (lemma) | `[def-standard-meridians-of-a-punctured-disk, thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians]` | Let $h$ fix the boundary basepoint and induce the identity on $\pi_1$. Equality of $h(s_i)m_{h(i)}h(s_i)^{-1}$ with $s_im_is_i^{-1}$ first forces $h(i)=i$ by free reduction/peripheral conjugacy, then lifts the two proper arcs to the universal cover of the punctured disk. Their equal endpoint lifts cobound bigons; the relative-boundary arc bigon criterion removes these finitely many bigons and gives an isotopy rel endpoints. | Farb--Margalit §§1.2.4--1.2.7, printed pp. 31--38; GM §1.6. |
| `lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy` (lemma) | `[lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy, thm-isotopy-extension]` | Straighten $h(s_1)$ to $s_1$ by ambient isotopy supported away from the other punctures; cut along $s_1$ and repeat. At stage $i$, apply relative isotopy extension in the complement of the already fixed arcs, so earlier arcs, every puncture, and the outer boundary remain fixed. | Farb--Margalit Proposition 1.11 and §1.2.7, pp. 36--38. |
| `lem-cutting-a-punctured-disk-along-a-full-stem-system-leaves-a-disk` (lemma) | `[def-standard-meridians-of-a-punctured-disk]` | Replace each marked point by a small boundary circle and cut along its stem. Euler characteristic and boundary bookkeeping, followed by the classification of compact genus-zero surfaces, show that the result is a single disk; regluing the small circles recovers the marked disk. | Farb--Margalit §§1.2.7, 1.3.1, pp. 37--40. |
| `lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity` (lemma) | `[lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy, lem-cutting-a-punctured-disk-along-a-full-stem-system-leaves-a-disk]` | After the ambient isotopy, $h$ fixes the full cut system. Cut to the complementary disk; the induced homeomorphism fixes its whole boundary. Apply the explicit radial Alexander isotopy there and reglue, obtaining an isotopy that fixes the original boundary and all punctures throughout. | Farb--Margalit Theorem 1.12 relative form, pp. 43--44, and Alexander Lemma 2.1, pp. 50--51. |
| `thm-the-artin-representation-is-faithful` (theorem) | `[prop-the-geometric-action-on-meridians-is-the-artin-representation, lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity]` | If $\rho(\beta)=1$, the mapping-class representative acts trivially on the based meridians, so the preceding lemma makes it the identity mapping class; the established braid--mapping-class isomorphism then gives $\beta=1$. | GM §1.6.1; Farb--Margalit §§1.2.7, 2.2.1 and Theorem 9.1. |
| `lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word` (lemma) | `[def-the-artin-representation-on-a-free-group, def-standard-meridians-of-a-punctured-disk]` | Verify both properties on generators and preserve them under composition. | GM §1.6, before Theorem 1.3. |
| `def-peripheral-boundary-preserving-automorphism-of-f-n` (definition) | `[def-standard-meridians-of-a-punctured-disk]` | An automorphism $A\in\operatorname{Aut}(F_n)$ is peripheral-boundary-preserving when $A(x_i)=Q_i^{-1}x_{\pi(i)}Q_i$ for a permutation $\pi$ and reduced words $Q_i$, and $A(x_1\cdots x_n)=x_1\cdots x_n$. State that changing $Q_i$ by a power of the middle generator changes no conjugate, and choose shortest representatives. | Artin 1947 equations (11), (13), (16), printed pp. 111--114; GM Theorem 1.3. |
| `lem-artins-product-cancellation-dichotomy` (lemma) | `[def-peripheral-boundary-preserving-automorphism-of-f-n, thm-reduced-words-form-the-free-group]` | Substitute the reduced conjugates into $A(x_1\cdots x_n)=x_1\cdots x_n$. If no cancellation reaches a middle letter $x_{\pi(i)}$, the uncancelled residues equal $x_1,\ldots,x_n$ in order and endpoint conjugators vanish. Otherwise two adjacent factors have cancellation reaching a middle letter; record which of the two middle letters is reached first. Prove these exhaust all cases by uniqueness of free reduction. | Artin 1947 proof before Theorem 16, printed pp. 113--115. |
| `lem-an-extremal-cancellation-shortens-an-artin-substitution` (lemma) | `[lem-artins-product-cancellation-dichotomy, def-artin-automorphisms-of-the-free-group]` | In the first-middle-letter case, compute that pre- or post-composition by the adjacent Artin automorphism $\rho(\sigma_i)^{\pm1}$ replaces the two affected conjugators by residues whose total reduced length is strictly smaller, while preserving peripheral form and the ordered boundary product. Print both alternatives and the inverse formulas. | Artin 1947 equations (14)--(16) and cases 2(a), 2(b), printed pp. 113--115. |
| `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism` (theorem) | `[lem-artins-product-cancellation-dichotomy, lem-an-extremal-cancellation-shortens-an-artin-substitution, thm-the-artin-presentation-is-complete-for-geometric-braids]` | Induct on the sum of the chosen conjugator lengths. Length zero forces the identity substitution. The dichotomy either reduces immediately to it or supplies an adjacent $\rho(\sigma_i)^{\pm1}$ whose removal strictly lowers length; termination expresses $A$ as a product of Artin generator automorphisms. Track the induced permutation at each step. | Artin 1947 Theorem 16 and its full induction, printed pp. 113--115. |
| `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n` (theorem) | `[lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word, def-peripheral-boundary-preserving-automorphism-of-f-n, thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism, thm-the-artin-representation-is-faithful]` | The necessary direction is the generator calculation. The converse induction produces a braid word with the prescribed automorphism, and faithfulness makes that braid unique. Thus the image consists exactly of automorphisms permuting the peripheral conjugacy classes and fixing the **ordered** boundary product. | Artin 1947 Theorems 15--16, pp. 113--115; GM Theorem 1.3, p. 10. |
| `cor-the-artin-action-solves-the-braid-word-problem` (corollary) | `[thm-the-artin-representation-is-faithful, def-artin-automorphisms-of-the-free-group]` | Compute the induced automorphism of each free generator and compare reduced words. | GM §1.6.1. |

### BG-8 — The Artin Action on a Free Group — Examples

**Page id:** `the-artin-action-on-a-free-group-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-artin-action-of-the-b-three-generators` (example) | `[def-artin-automorphisms-of-the-free-group]` | Tabulate both automorphisms on $x_1,x_2,x_3$ and verify the braid relation. |
| `ex-the-full-twist-acts-by-boundary-conjugation` (example) | `[def-the-artin-representation-on-a-free-group, def-standard-meridians-of-a-punctured-disk]` | Define the full twist here by $(\sigma_1\cdots\sigma_{n-1})^n$. With $\delta=x_1\cdots x_n$ and the frozen convention, compose the displayed Artin automorphisms and prove $\rho(\Delta^2)(x_i)=\delta^{-1}x_i\delta$; check the induction from $i$ to $i+1$ explicitly. GM §§1.6, 4. |
| `cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin` (counterexample) | `[thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n]` | Give an explicit Nielsen automorphism violating the boundary condition. |
| `cex-the-induced-permutation-does-not-determine-a-braid` (counterexample) | `[thm-the-artin-representation-is-faithful, thm-the-braid-group-surjects-onto-the-symmetric-group]` | Identity and a nontrivial pure generator have the same endpoint permutation but different free-group actions. |

## BG-9 — The Burau Representations

**Page id:** `the-burau-representations`  
**Requires:** `the-artin-action-on-a-free-group`,
`covering-spaces-and-lifting`, `singular-chains-and-singular-homology`,
`modules-over-a-pid-and-canonical-forms`,
`garside-structure-normal-forms-and-the-center`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-total-winding-homomorphism-of-the-punctured-disk` (definition) | `[thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians, def-standard-meridians-of-a-punctured-disk]` | Send every meridian $x_i$ to $1\in\mathbb Z$; prove this is invariant under the braid action. | BB §4.4, printed pp. 52--54; 2026 Burau preprint §2. |
| `def-burau-infinite-cyclic-cover` (definition) | `[def-total-winding-homomorphism-of-the-punctured-disk, def-covering-map-and-evenly-covered-neighbourhoods]` | Define the connected cover corresponding to the kernel, with deck generator $t$ and fixed lift of a boundary basepoint. | BB §4.4; 2026 preprint §2. |
| `def-reduced-burau-homology-module` (definition) | `[def-burau-infinite-cyclic-cover]` | Set $\Lambda_1=\mathbb Z[t^{\pm1}]$ and define the reduced module to be the absolute singular homology $H_1(\widetilde{D^2\setminus Q_n};\mathbb Z)$, with $t$ acting by the chosen positive deck generator. | BB §4.4, printed pp. 52--54; Bharathram--Birman--Brendle §2. |
| `def-unreduced-burau-relative-homology-module` (definition) | `[def-burau-infinite-cyclic-cover]` | For a boundary basepoint $d$ and its complete lift $\widetilde d=p^{-1}(d)$, define the unreduced module $H_1(\widetilde{D^2\setminus Q_n},\widetilde d;\mathbb Z)$ over $\Lambda_1$. | BB §4.4; the cellular relative-chain model underlying §4.2 matrices. |
| `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` (lemma) | `[def-reduced-burau-homology-module, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]` | Lift a one-vertex $n$-loop spine, write the cellular boundary $(t-1,\ldots,t-1)$, and exhibit a free kernel basis. | BB §4.4; Bigelow 2002 §2.1 for the analogous covering calculation. |
| `lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover` (lemma) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, def-total-winding-homomorphism-of-the-punctured-disk, def-burau-infinite-cyclic-cover]` | Invariance of total winding gives a unique basepoint-normalized lift commuting with deck translation; composition is checked. | BB §4.4; 2026 preprint §2. |
| `def-reduced-burau-representation` (definition) | `[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one, lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]` | Define $\bar\rho_n:B_n\to GL_{n-1}(\mathbb Z[t^{\pm1}])$ from the induced action on homology. | BB §4.4; 2026 preprint §2. |
| `def-unreduced-burau-matrices` (definition) | `[def-unreduced-burau-relative-homology-module, def-braid-group-by-the-artin-presentation]` | In the relative lifted-edge basis, $\rho(\sigma_i)$ is identity off rows/columns $i,i+1$ and has block $\begin{pmatrix}1-t&t\\1&0\end{pmatrix}$ for column vectors; this block and the fixed left-to-right braid convention control every later matrix. | BB §4.2, printed pp. 46--47, translated to the declared column convention. |
| `lem-unreduced-burau-matrices-satisfy-the-artin-relations` (lemma) | `[def-unreduced-burau-matrices]` | Multiply the only nontrivial $3\times3$ blocks for the braid relation and use disjoint support for far commutation. | BB §4.2. |
| `thm-topological-and-matrix-burau-representations-agree` (theorem) | `[def-reduced-burau-representation, def-unreduced-burau-matrices, lem-unreduced-burau-matrices-satisfy-the-artin-relations]` | Lift the wedge-of-circles cellular model, compute a half twist on relative lifted edges, and identify the boundary-kernel absolute submodule. The induced action there is the reduced topological representation. | BB §§4.2, 4.4; Bharathram--Birman--Brendle §2. |
| `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module` (proposition) | `[thm-topological-and-matrix-burau-representations-agree, def-unreduced-burau-relative-homology-module]` | The long exact sequence of the pair gives $0\to H_1(\widetilde D_n)\to H_1(\widetilde D_n,p^{-1}d)\xrightarrow{s}\Lambda_1\to\mathbb Z\to0$. In the declared relative basis write $s(e_i)=t^{i-1}(t-1)$ (after the fixed lift/basis translation), check equivariance on each generator matrix, and identify the absolute module with $\ker s$. Exhibit the invariant vector but make no integral-complement claim. | BB §§4.2, 4.4; BBB §2. |
| `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel` (proposition) | `[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module, def-unreduced-burau-matrices]` | Extend scalars to $K=\mathbb Q(t)$. The invariant column $v=(1,\ldots,1)^T$ and equivariant covector $s=(1,t,\ldots,t^{n-1})$ satisfy $s(v)=1+t+\cdots+t^{n-1}\ne0$, so $K^n=\ker s\oplus Kv$ equivariantly. The second summand is trivial and $\ker s$ is the reduced module after scalar extension; therefore an element acts trivially in one Burau representation iff it acts trivially in the other. This field splitting is not asserted integrally. | Direct matrix/pair calculation from BB §§4.2, 4.4 and BBB §2. |
| `lem-the-minus-one-specialization-of-three-strand-burau-has-kernel-generated-by-delta-to-the-fourth` (lemma) | `[def-unreduced-burau-matrices, def-garside-half-twist-and-simple-positive-braid]` | Specialize the reduced $2\times2$ matrices at $t=-1$ to the elementary generators $U,V$ of $SL_2(\mathbb Z)$. Prove $U,V$ generate by the Euclidean algorithm on primitive columns. Starting from the Artin presentation of $B_3$, carry out both directions of the standard presentation calculation $SL_2(\mathbb Z)\cong\langle U,V\mid UVU=VUV,(UVU)^4=1\rangle$: verify the matrices satisfy it and reduce an arbitrary word by the same Euclidean normal-form moves. Thus the only added braid-group relation is $\Delta^4=1$, and the specialization kernel is $\langle\Delta^4\rangle$. | Magnus--Peluso result as cited in BBB Introduction and Theorem 4.1; direct presentation/matrix proof supplied here. |
| `lem-reduced-burau-detects-every-power-of-delta-to-the-fourth-in-b-three` (lemma) | `[def-reduced-burau-representation, lem-conjugation-by-delta-reverses-artin-generators]` | Multiply the two reduced generator matrices to get $\bar\rho_3(\Delta^2)=t^3I_2$ (with the declared convention), hence $\bar\rho_3(\Delta^{4k})=t^{6k}I_2$, which is the identity over $\mathbb Z[t^{\pm1}]$ only for $k=0$. | Direct calculation from BB §4.2 matrices. |
| `thm-reduced-burau-is-faithful-for-at-most-three-strands` (theorem) | `[def-reduced-burau-representation, thm-the-two-strand-braid-group-is-infinite-cyclic, lem-the-minus-one-specialization-of-three-strand-burau-has-kernel-generated-by-delta-to-the-fourth, lem-reduced-burau-detects-every-power-of-delta-to-the-fourth-in-b-three]` | Handle $B_1$ trivially and $B_2$ by the scalar $-t$. If a $B_3$ braid is in the Burau kernel, its $t=-1$ specialization puts it in $\langle\Delta^4\rangle$, and the preceding scalar calculation makes its exponent zero. | Magnus--Peluso as cited in BBB Introduction; direct specialization proof route. |
| `rem-current-faithfulness-status-of-the-reduced-burau-representation` (remark) | `[def-reduced-burau-representation, prop-reduced-and-unreduced-burau-representations-have-the-same-kernel]` | Record, without making it load-bearing, the locally proved $n\le3$ result, the published nonfaithfulness for $n\ge5$, and that Bharathram--Birman--Brendle arXiv:2607.05283v1 (6 July 2026) claims/proves faithfulness of its **unreduced** $\rho_4$; the same-kernel proposition is the explicit bridge to the reduced convention. Mark the external results `proved_here: false`, describe the $B_4$ statement as an unreviewed v1 preprint rather than settled peer-reviewed literature, and attach exact primary URLs. | Bigelow, *The Burau representation is not faithful for $n=5$*, Geom. Topol. 3 (1999), primary article; Bharathram--Birman--Brendle arXiv:2607.05283v1, Introduction/Main Theorem. |

### BG-9 — The Burau Representations — Examples

**Page id:** `the-burau-representations-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-unreduced-and-reduced-burau-matrices-for-b-three` (example) | `[def-unreduced-burau-matrices, thm-topological-and-matrix-burau-representations-agree]` | Write both generator matrices and check the braid relation and reduction. |
| `ex-the-burau-image-of-the-full-twist` (example) | `[def-reduced-burau-representation, thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two]` | Multiply the $B_3$ matrices and identify the scalar image of $\Delta^2$; BB §4.2. |
| `ex-specializing-burau-at-t-equals-one-recovers-permutation-data` (example) | `[prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module]` | Compute the specialization and its trivial/reduced permutation summands. |
| `cex-an-invariant-line-need-not-have-an-invariant-complement-over-a-laurent-ring` (counterexample) | `[prop-reduced-and-unreduced-burau-representations-have-the-same-kernel]` | In unreduced Burau, the invariant $v$ pairs with $s$ as $1+t+\cdots+t^{n-1}$, a nonunit of $\mathbb Z[t^{\pm1}]$ for $n>1$; hence the displayed field projector cannot be integral. This witnesses why the integral exact sequence does not split by that equivariant projector; BB §§4.2, 4.4. |

## BG-10 — Lawrence–Krammer–Bigelow Representations and Linearity

**Page id:** `lawrence-krammer-bigelow-and-linearity`  
**Requires:** `ordered-and-unordered-configuration-spaces`,
`braids-as-fundamental-groups-of-configuration-spaces`,
`covering-spaces-and-lifting`, `singular-chains-and-singular-homology`,
`modules-over-a-pid-and-canonical-forms`,
`punctured-disks-mapping-classes-and-point-pushing`,
`garside-structure-normal-forms-and-the-center`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-two-point-configuration-space-of-a-punctured-disk` (definition) | `[def-unordered-configuration-space, def-boundary-fixed-mapping-class-group-of-a-punctured-disk]` | Use unordered pairs of distinct mobile points in $D^2\setminus Q_n$, with the source's boundary base configuration. | Bigelow 2001 §1.1; Bigelow 2002 §2.1. |
| `def-lkb-two-variable-covering-homomorphism` (definition) | `[def-two-point-configuration-space-of-a-punctured-disk, def-based-loops-and-fundamental-group]` | For a loop $\alpha$, let $b$ be the exponent of the mobile two-strand braid and $b'$ the exponent after adjoining the $n$ fixed punctures; since $b'\equiv b\pmod2$, set $a=(b'-b)/2$ and $\Phi(\alpha)=q^at^b$. | Bigelow 2002 §2.1, printed p. 3; Bigelow 2001 §1.1. |
| `def-lawrence-krammer-bigelow-cover` (definition) | `[def-lkb-two-variable-covering-homomorphism, def-covering-map-and-evenly-covered-neighbourhoods]` | Take the regular cover with deck group $\mathbb Z^2$ and coefficient ring $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$. | Bigelow 2001 §1.1; Bigelow 2002 §2.1. |
| `def-lkb-absolute-second-homology-module` (definition) | `[def-lawrence-krammer-bigelow-cover]` | Define the integral LKB module to be ordinary absolute $H_2(\widetilde C;\mathbb Z)$ over $\Lambda$. Relative groups are auxiliary pairing targets, not the representation module. | Bigelow 2002 §§2.1--2.2. |
| `def-lkb-relative-pairing-modules` (definition) | `[def-lawrence-krammer-bigelow-cover]` | With $\nu_\varepsilon$ the collision-or-puncture neighborhood, define the direct-limit modules $H_2(\widetilde C,\widetilde\nu)$ and $H_2(\widetilde C,\partial\widetilde C\cup\widetilde\nu)$ used for intersections. | Bigelow 2002 §2.2, printed pp. 3--4. |
| `def-forks-noodles-and-their-lkb-intersection-pairing` (definition) | `[def-lkb-relative-pairing-modules]` | Define fork and noodle surfaces, orientations and lifted intersections; the pairing is $\langle x,y\rangle=\sum_{a,b}(x\cdot q^at^by)q^at^b$ between absolute $H_2$ and $H_2(\widetilde C,\partial\widetilde C\cup\widetilde\nu)$. | Bigelow 2002 §2.2; Bigelow 2001 §2. |
| `lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement` (lemma) | `[def-forks-noodles-and-their-lkb-intersection-pairing, def-lkb-absolute-second-homology-module]` | Construct the immersed closed surface agreeing near infinity with $(1-q)^2(1+qt)$ times the lifted fork surface, so intersections cannot escape to infinity. | Bigelow 2001 §2.1, Basic Lemma proof; Bigelow 2002 §§3.3--3.4 makes the closed surfaces explicit. |
| `lem-the-lkb-absolute-module-injects-into-relative-homology-with-fraction-field-dimension-n-choose-two` (lemma) | `[def-lkb-absolute-second-homology-module, def-lkb-relative-pairing-modules]` | Use the long exact sequences for the collision/puncture end neighborhoods to prove injectivity after the stated localization, then use the relative cell filtration to compute dimension $\binom n2$ over $\mathbb Q(q,t)$. Make clear this gives neither an integral basis nor integral spanning. | Bigelow 2002 Lemma 4.2, pp. 8--9. |
| `lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors` (lemma) | `[def-lkb-relative-pairing-modules, lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement]` | Construct $v_{ij}$ explicitly: the generic case uses a genus-one closed surface and factor $(1-q)^2$; $(i,j)=(1,3)$ uses genus two and $(1-q)^2(1+qt)$; adjacent pairs use genus three and $(1-q)^2(1+qt)(1-t)$. Compute their triangular relative images. | Bigelow 2002 §§3.1--3.4 and §4, pp. 5--10. |
| `lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials` (lemma) | `[lem-the-lkb-absolute-module-injects-into-relative-homology-with-fraction-field-dimension-n-choose-two, lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors]` | Expand an absolute class uniquely over $\mathbb Q(q,t)$ in the $v_{ij}$. Apply the collision and puncture boundary homomorphisms successively; Bigelow's divisibility Lemmas 4.3--4.6 force away the possible denominators $(1-q)$, $(1+qt)$, and $(1-t)$ in the exceptional cases. Induct in the exact lexicographic order on $(i,j)$. | Bigelow 2002 Lemmas 4.3--4.6, pp. 9--12. |
| `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two` (theorem) | `[lem-the-lkb-absolute-module-injects-into-relative-homology-with-fraction-field-dimension-n-choose-two, lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors, lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials]` | Independence follows after extending scalars; the denominator lemma gives integral spanning. Therefore the displayed closed surfaces form a free $\Lambda$-basis of absolute $H_2$. Explicitly warn that for $n\ge3$ this integral module/basis is only fraction-field-isomorphic, not $\Lambda$-isomorphic, to Krammer's free matrix module. | Bigelow 2002 Theorem 4.1 and §4.2, pp. 8--13. |
| `lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly` (lemma) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, def-lkb-two-variable-covering-homomorphism, def-lawrence-krammer-bigelow-cover]` | Show both deck exponents are invariant under the puncture-permuting mapping class; choose normalized lifts and verify composition. | Bigelow 2001 §1.2. |
| `def-lawrence-krammer-bigelow-representation` (definition) | `[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two, lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly]` | Define $\rho_{LKB}:B_n\to GL_{\binom n2}(\Lambda)$ from the action on absolute $H_2(\widetilde C)$. | Bigelow 2002 §§2.1, 4; Krammer §3 gives a related generic-field matrix model and is not silently identified integrally. |
| `lem-the-fork-noodle-pairing-is-well-defined-and-equivariant` (lemma) | `[lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement]` | Use compact replacement to show the Laurent sum is finite/well-defined and prove $\langle\sigma x,\sigma y\rangle=\langle x,y\rangle$ and sesquilinearity. | Bigelow 2001 Lemma 2.1; Bigelow 2002 §2.2. |
| `def-lexicographic-order-on-fork-noodle-deck-monomials` (definition) | `[def-forks-noodles-and-their-lkb-intersection-pairing]` | Order the exponent pairs exactly as in Bigelow after choosing the tine/noodle orientations and label intersection pairs by their $q^at^b$ deck displacement; distinguish the unsummed intersection terms from the Laurent polynomial after cancellation. | Bigelow 2001 §3 before Claims 3.2--3.3, pp. 6--7. |
| `lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel` (lemma) | `[def-lexicographic-order-on-fork-noodle-deck-monomials, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]` | Put tine and noodle in minimal position. Prove Bigelow Claims 3.2 and 3.3 identifying maximal exponent pairs from the order of endpoints in the universal cover, then Claim 3.5 that every term with that maximal pair has the same local intersection sign. Therefore its coefficient is nonzero. | Bigelow 2001 Claims 3.2, 3.3, 3.5, pp. 6--9. |
| `lem-the-fork-noodle-pairing-detects-essential-intersections` (lemma) | `[lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel]` | If tine and noodle can be isotoped disjoint, the pairing vanishes. Conversely remove bigons to minimal position; any remaining intersection produces an extremal same-sign nonzero coefficient, so vanishing forces disjointness rel $\partial D\cup Q_n$. | Bigelow 2001 Key Lemma 3.1 and Claims 3.2--3.5, pp. 6--9. |
| `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy` (lemma) | `[lem-the-fork-noodle-pairing-detects-essential-intersections, def-lawrence-krammer-bigelow-representation]` | For each standard adjacent edge $E_i$, compare all fork/noodle pairings before and after a kernel mapping class. Apply the Key Lemma to eliminate intersections with the complementary standard noodles; use the relative arc bigon criterion and straighten the edges sequentially, preserving those already fixed. | Bigelow 2001 §3.3 and Lemma 3.6, pp. 9--10; Farb--Margalit §§1.2.4--1.2.7. |
| `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power` (lemma) | `[lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy, thm-isotopy-extension]` | Ambient-isotope the mapping class to fix $E_1\cup\cdots\cup E_{n-1}$ pointwise. A regular neighborhood is a once-bordered disk containing all punctures; Alexander-contract the restriction there. The complement is an annulus, whose boundary-fixed mapping class group is generated by its core twist, identified with the full boundary twist $\Delta^2$. | Bigelow 2001 end of §3.3, pp. 9--10; Farb--Margalit Alexander lemma and annulus computation, §§2.2.1--2.2.2. |
| `lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared` (lemma) | `[def-lawrence-krammer-bigelow-representation, lem-conjugation-by-delta-reverses-artin-generators]` | Track both mobile points once around all $n$ punctures and around each other under $\Delta^2$; the covering homomorphism is $(a,b)=(2n,2)$ in Bigelow's convention, so the normalized lift acts as $q^{2n}t^2$. Its $k$th power is the identity over $\Lambda$ only for $k=0$. | Bigelow 2001 final paragraph of §3.3, p. 10. |
| `thm-the-lawrence-krammer-bigelow-representation-is-faithful` (theorem) | `[lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy, lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power, lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared]` | A kernel braid fixes every standard edge, hence is $\Delta^{2k}$; the scalar calculation forces $k=0$. This is Bigelow's complete topological closure and does not appeal to the unrelated $\pi_1$-triviality criterion. | Bigelow 2001 Theorem 1.1 and §3.3, pp. 9--10. |
| `cor-every-classical-braid-group-is-linear` (corollary) | `[thm-the-lawrence-krammer-bigelow-representation-is-faithful, thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]` | Embed $B_n$ already in $GL_{\binom n2}(\Lambda)$, hence also over the fraction field $\mathbb Q(q,t)$. | Bigelow 2001 main theorem plus Bigelow 2002 integral freeness theorem; Krammer main theorem independently proves field-valued linearity. |

### BG-10 — Lawrence–Krammer–Bigelow Representations and Linearity — Examples

**Page id:** `lawrence-krammer-bigelow-and-linearity-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-krammer-fraction-field-generator-matrices-for-b-three` (example) | `[def-lawrence-krammer-bigelow-representation, thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]` | Extend the integral homology module to $\mathbb Q(q,t)$, use Krammer's $F_{12},F_{13},F_{23}$ basis, and compute the two $3\times3$ matrices from Krammer's seven-case formula. State explicitly that these are not matrices in Bigelow's integral closed-surface basis; Krammer §3, pp. 139--142, and Bigelow 2002 §4.2. |
| `ex-a-fork-noodle-pairing-computation` (example) | `[def-forks-noodles-and-their-lkb-intersection-pairing]` | List every intersection point, sign, deck monomial, and resulting polynomial. |
| `cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing` (counterexample) | `[def-forks-noodles-and-their-lkb-intersection-pairing]` | Two intersections cancel integrally but carry different deck monomials. |
| `cex-a-linear-representation-need-not-be-faithful` (counterexample) | `[cor-every-classical-braid-group-is-linear]` | Use the endpoint-permutation representation with pure-braid kernel to separate “linear representation” from “linear group.” |

## BG-11 — Oriented Links, Braid Closures, and Markov Equivalence

**Page id:** `oriented-links-braid-closures-and-markov-equivalence`  
**Requires:** `geometric-braids-and-artin-generators`,
`artin-presentation-completeness-and-braid-combing`,
`manifolds-with-boundary-collars-and-orientations`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-oriented-link-in-s-three-and-ambient-isotopy` (definition) | `[def-smooth-embedding]` | A finite disjoint union of oriented circles smoothly embedded in oriented $S^3$, modulo orientation-preserving ambient isotopy; fix tame/smooth category. | BB §2 opening; researcher-02 supplemental closure source. |
| `def-regular-oriented-link-diagram` (definition) | `[def-oriented-link-in-s-three-and-ambient-isotopy]` | A generic projection with transverse double points, over/under information, and induced strand orientations. | BB §2; researcher-02 closure source. |
| `def-oriented-reidemeister-moves` (definition) | `[def-regular-oriented-link-diagram]` | Define all oriented versions of moves I--III inside a disk and planar isotopy outside it. | BB §2.2 before Theorem 3. |
| `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy` (lemma) | `[def-oriented-reidemeister-moves]` | Lift the local diagram move into a small three-ball and give the supported ambient isotopy. | BB §2.2, easy direction of Theorem 3. |
| `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times` (lemma) | `[def-regular-oriented-link-diagram, def-oriented-reidemeister-moves]` | Put the projection of a one-parameter ambient isotopy in generic position; classify isolated codimension-one failures as the three moves. | BB §2.2, Theorem 3 proof source cited there; researcher-02 closure source. |
| `thm-oriented-reidemeister-equivalence-theorem` (theorem) | `[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy, lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]` | Two regular oriented diagrams represent ambient-isotopic links iff related by planar isotopy and finitely many oriented Reidemeister moves. | BB Theorem 3, §2.2. |
| `def-closure-of-a-geometric-braid` (definition) | `[def-geometric-braid-with-setwise-endpoints]` | Join corresponding top and bottom endpoints around the braid axis, orient consistently, and identify solid-torus versus $S^3$ closure. | BB §2 opening; closure textbook report. |
| `def-braid-index-of-an-oriented-link` (definition) | `[def-closure-of-a-geometric-braid]` | Minimum strand number among braid closures representing the oriented link. | BB §2.1; closure textbook report. |
| `lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity` (lemma) | `[def-closure-of-a-geometric-braid]` | Put an oriented diagram in general position about an axis, define incoherent adjacent Seifert circles, and verify each reducing move strictly lowers the finite complexity. | BB §2.1, Lemma 2.1 and proof architecture. |
| `thm-alexanders-closed-braid-theorem` (theorem) | `[lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity]` | Termination gives a diagram with all Seifert circles coherently nested, which is isotopic to a closed braid. | BB Theorem 2 and §2.1; closure textbook Alexander theorem locator. |
| `def-markov-conjugation-and-stabilization-moves` (definition) | `[def-closure-of-a-geometric-braid, cor-all-four-classical-braid-models-realize-the-artin-presentation]` | Define conjugation in $B_n$ and $\beta\leftrightarrow\beta\sigma_n^{\pm1}$ in $B_{n+1}$, with orientation and side convention. | BB §2.2 before Theorem 4; closure textbook report. |
| `lem-markov-moves-preserve-oriented-closure-isotopy` (lemma) | `[def-markov-conjugation-and-stabilization-moves]` | Give explicit isotopies for conjugation around the axis and positive/negative stabilization. | BB §2.2; closure textbook report. |
| `lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves` (lemma) | `[def-markov-conjugation-and-stabilization-moves, thm-alexanders-closed-braid-theorem]` | Follow the source's height/reducing-move proof: braid-like moves are braid isotopy and each non-braid-like peak is replaced by controlled stabilizations. | BB §2.2, Lemmas 2.3--2.8. |
| `thm-markovs-closed-braid-equivalence-theorem` (theorem) | `[thm-oriented-reidemeister-equivalence-theorem, lem-markov-moves-preserve-oriented-closure-isotopy, lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves]` | Two oriented braid closures are isotopic iff their braid words are related by braid relations, conjugation, and stabilization/destabilization. | BB Theorem 4, §2.2; researcher-02 supplemental closure source. |

### BG-11 — Oriented Links, Braid Closures, and Markov Equivalence — Examples

**Page id:** `oriented-links-braid-closures-and-markov-equivalence-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-torus-links-as-closures-of-two-strand-braids` (example) | `[def-closure-of-a-geometric-braid]` | Identify the closure of $\sigma_1^m$, with component count and orientation; BB §2 examples/standard torus-link discussion. |
| `ex-a-markov-stabilization-preserves-the-unknot-closure` (example) | `[lem-markov-moves-preserve-oriented-closure-isotopy]` | Draw both signs and exhibit the ambient isotopy; BB §2.2 stabilization figures. |
| `ex-alexanders-braiding-algorithm-on-a-small-diagram` (example) | `[thm-alexanders-closed-braid-theorem]` | Run the reducing complexity on a sourced three-circle diagram; BB §2.1 Example 2.1. |
| `cex-conjugacy-alone-does-not-classify-braid-closures` (counterexample) | `[thm-markovs-closed-braid-equivalence-theorem]` | A braid and its stabilization have isotopic closures but lie in different braid groups; BB §2.2. |

## BG-12 — Hecke Markov Traces and Polynomial Link Invariants

**Page id:** `hecke-markov-traces-and-polynomial-link-invariants`  
**Requires:** `oriented-links-braid-closures-and-markov-equivalence`,
`the-burau-representations`,
`principal-series-representations-of-gl-n-over-a-finite-field`,
`modules-over-a-pid-and-canonical-forms`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-markov-trace-on-the-type-a-hecke-tower` (definition) | `[def-generic-type-a-hecke-algebra, thm-type-a-iwahori-hecke-presentation, def-trace-of-an-endomorphism]` | For the RG-13 convention $(T_i-q)(T_i+1)=0$, a Markov trace over $A=\mathbb Z[q^{\pm1},z]$ is an $A$-linear family with $\operatorname{tr}_1(1)=1$, $\operatorname{tr}_{n+1}|_{H_n}=\operatorname{tr}_n$, $\operatorname{tr}_n(xy)=\operatorname{tr}_n(yx)$, and $\operatorname{tr}_{n+1}(xT_n)=z\operatorname{tr}_n(x)$. | BB §4.3, Theorem 12 setup, translated to RG-13's quadratic normalization. |
| `thm-the-ocneanu-markov-trace-exists-and-is-unique` (theorem) | `[def-markov-trace-on-the-type-a-hecke-tower, thm-standard-basis-of-the-generic-type-a-hecke-algebra]` | Use the inductive basis $H_{n+1}=\sum H_n T_n\cdots T_i$, define the trace recursively, and check independence using quadratic/braid relations before proving uniqueness. | BB §4.3, Theorem 12 and surrounding construction. |
| `def-homflypt-polynomial-from-the-hecke-markov-trace` (definition) | `[thm-the-ocneanu-markov-trace-exists-and-is-unique, def-closure-of-a-geometric-braid]` | Since $T_n^{-1}=q^{-1}T_n+(q^{-1}-1)$, put $z_-=q^{-1}(z+1-q)$. Over the extension adjoining a unit $u$ with $u^2=z_-/z$, set $v=(uz)^{-1}$ and define $P(\widehat\beta)=u^{e(\beta)}v^{n-1}\operatorname{tr}_n(\pi(\beta))$, followed by the source's explicit variable change to the standard HOMFLYPT normalization. | BB §4.3, equations after Theorem 12. |
| `thm-the-hecke-trace-construction-is-an-oriented-link-invariant` (theorem) | `[def-homflypt-polynomial-from-the-hecke-markov-trace, thm-markovs-closed-braid-equivalence-theorem]` | Check braid relations, conjugation, positive stabilization, and negative stabilization separately; invoke Markov only after all checks. | BB §4.3. |
| `def-temperley-lieb-quotient-and-jones-specialization` (definition) | `[thm-type-a-iwahori-hecke-presentation, def-homflypt-polynomial-from-the-hecke-markov-trace]` | Define the extra three-strand ideal, quotient, and one-variable trace normalization yielding the Jones polynomial; do not introduce Hecke Specht theory. | BB §§4.2--4.3. |
| `def-one-variable-alexander-module-of-an-oriented-link` (definition) | `[def-oriented-link-in-s-three-and-ambient-isotopy, def-covering-map-and-evenly-covered-neighbourhoods]` | From total meridional linking $\pi_1(S^3\setminus L)\to\mathbb Z$, form the infinite cyclic cover and its $\mathbb Z[t^{\pm1}]$ first homology module. | BB §4.2 and cited Alexander-module construction; researcher-02 supplemental source. |
| `def-alexander-polynomial-from-the-first-elementary-ideal` (definition) | `[def-one-variable-alexander-module-of-an-oriented-link, def-finitely-presented-module-and-algebra]` | Define $\Delta_L(t)$ as a generator/gcd of the correct elementary ideal, up to $\pm t^k$, with the multi-component convention stated. | BB §4.2; researcher-02 supplemental source. |
| `thm-the-alexander-polynomial-is-an-oriented-link-invariant` (theorem) | `[def-alexander-polynomial-from-the-first-elementary-ideal]` | Ambient isotopy identifies complements, meridional maps, covers and Alexander modules; Fitting/elementary ideals are presentation independent. | BB §4.2; closure source. |
| `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid` (proposition) | `[def-reduced-burau-representation, def-closure-of-a-geometric-braid, thm-markovs-closed-braid-equivalence-theorem, thm-the-alexander-polynomial-is-an-oriented-link-invariant]` | For a closed $n$-braid $\beta$, state the exact unit-normalized formula involving $\det(I-\bar\rho_n(\beta))$ and $(1-t)/(1-t^n)$; derive the Alexander module presentation from the braid complement and verify the unit ambiguity. | BB §4.2, displayed Alexander determinant formula; researcher-02 supplemental source. |

### BG-12 — Hecke Markov Traces and Polynomial Link Invariants — Examples

**Page id:** `hecke-markov-traces-and-polynomial-link-invariants-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-hecke-trace-skein-calculation-for-a-three-crossing-braid` (example) | `[def-homflypt-polynomial-from-the-hecke-markov-trace]` | Reduce with the quadratic relation and compute the trace recursively. |
| `ex-the-burau-determinant-for-a-two-strand-torus-link` (example) | `[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]` | Evaluate the determinant formula, including its unit normalization. |
| `ex-the-jones-specialization-of-a-two-strand-closure` (example) | `[def-temperley-lieb-quotient-and-jones-specialization]` | Compute the quotient trace for $\sigma_1^3$ with the declared parameter substitution. |
| `cex-an-unnormalized-hecke-trace-is-not-markov-invariant` (counterexample) | `[def-homflypt-polynomial-from-the-hecke-markov-trace]` | Compare a braid with positive and negative stabilizations and exhibit the missing scalar. |

## BG-13 — Yang–Baxter Operators and Quantum Braid Representations

**Page id:** `yang-baxter-operators-and-quantum-braid-representations`  
**Requires:** `braided-and-symmetric-monoidal-categories`,
`duality-and-rigidity-in-monoidal-categories`, `tensor-and-fusion-categories`,
`modules-and-module-homomorphisms`,
`oriented-links-braid-closures-and-markov-equivalence`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-yang-baxter-operator-on-an-object` (definition) | `[def-braided-monoidal-category, thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation]` | An invertible $R:X\otimes X\to X\otimes X$ satisfying $(R\otimes1)(1\otimes R)(R\otimes1)=(1\otimes R)(R\otimes1)(1\otimes R)$. | EGNO §8.1--§8.2. |
| `def-local-yang-baxter-operators-on-tensor-powers` (definition) | `[def-yang-baxter-operator-on-an-object, thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]` | Set $R_i=1^{\otimes(i-1)}\otimes R\otimes1^{\otimes(n-i-1)}$, with associators restored by coherence outside the strict model. | EGNO §§8.1--8.2. |
| `lem-local-yang-baxter-operators-satisfy-the-artin-relations` (lemma) | `[def-local-yang-baxter-operators-on-tensor-powers]` | Disjoint tensor supports give far commutation and the Yang--Baxter equation gives the adjacent relation. | EGNO §8.2; published categorical YBE item. |
| `thm-a-yang-baxter-operator-gives-braid-group-representations` (theorem) | `[lem-local-yang-baxter-operators-satisfy-the-artin-relations, def-braid-group-by-the-artin-presentation, thm-von-dyck]` | Descend $\sigma_i\mapsto R_i$ to $B_n\to\operatorname{Aut}(X^{\otimes n})$, natural in $n$ under the stated functoriality. | EGNO §8.2. |
| `cor-an-object-of-a-braided-category-carries-canonical-braid-actions` (corollary) | `[thm-a-yang-baxter-operator-gives-braid-group-representations, def-braiding]` | Take $R=c_{X,X}$ and use braided coherence to identify the word action independently of parenthesization. | EGNO Example 8.2.4 and §§8.1--8.2. |
| `prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group` (proposition) | `[thm-a-yang-baxter-operator-gives-braid-group-representations, thm-the-symmetric-group-has-the-coxeter-presentation]` | Add $R^2=1$ and invoke the Coxeter presentation; prove the converse factorization criterion generatorwise. | EGNO §8.1, symmetric specialization. |
| `def-braided-monoidal-functor-induced-intertwiner` (definition) | `[def-braided-monoidal-functor, cor-an-object-of-a-braided-category-carries-canonical-braid-actions]` | The tensor constraint conjugates the braid action on $F(X)^{\otimes n}$ to $F$ of the action on $X^{\otimes n}$. | EGNO Definition 8.1.7 and Remark 8.1.8. |
| `thm-braided-functors-intertwine-canonical-braid-actions` (theorem) | `[def-braided-monoidal-functor-induced-intertwiner]` | Induct over braid words using the braided-functor square on each generator; coherence removes bracket choices. | EGNO §8.1. |
| `def-the-framed-oriented-tangle-category` (definition) | `[def-oriented-link-in-s-three-and-ambient-isotopy, def-oriented-reidemeister-moves]` | Objects are finite signed boundary-point sequences and morphisms are boundary-relative ambient-isotopy classes of compact oriented framed one-manifolds in a slab; composition is stacking and tensor product is horizontal juxtaposition. Give the blackboard-framed cup, cap, positive/negative crossing, and full-twist generators. | Turaev Chapter I §2.3, printed pp. 35--38. |
| `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation` (lemma) | `[def-the-framed-oriented-tangle-category, thm-oriented-reidemeister-equivalence-theorem]` | Put a framed tangle in generic Morse position and slice at its finitely many crossings and extrema, obtaining the crossings, cups, caps, and twists of Turaev (3.1.a). State relations (3.2.a)--(3.2.h) algebraically. For completeness, assign a word to every generic diagram; prove invariance under interchange of disjoint critical levels, all oriented II/III moves, cup--cap births, cup/cap slides, and the framed curl move, then invoke Reidemeister equivalence. Conversely realize each listed relation by a supported framed isotopy. | Turaev Chapter I Lemmas 3.1.1 and 3.3, §§3.1--3.3 and proof §§4.1--4.8, printed pp. 49--69. |
| `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` (theorem) | `[lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation, def-twist-and-ribbon-structure, def-braiding, def-left-dual-and-right-dual-object]` | Send the positive point to $X$, negative point to $X^\vee$, crossings to $c^{\pm1}$, cups/caps to coevaluation/evaluation, and a framed kink to $\theta_X^{\pm1}$. Check Turaev's relations one by one: Yang--Baxter/hexagons and naturality handle crossings and slides, triangle identities handle cup--cap cancellation, and $\theta_{X\otimes Y}=c_{Y,X}c_{X,Y}(\theta_X\otimes\theta_Y)$ with $\theta_{X^\vee}=(\theta_X)^\vee$ handles twist relations. Presentation completeness gives existence and uniqueness of the tensor functor. | Turaev Theorem I.2.5 and its reduction/proof in §§3.5--4, printed pp. 39--40 and 53--70; EGNO Remark 8.10.3. |
| `def-ribbon-evaluation-of-an-x-colored-closed-braid` (definition) | `[cor-an-object-of-a-braided-category-carries-canonical-braid-actions, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-the-categorical-trace-of-a-morphism-into-the-double-dual]` | In a ribbon category, use the pivotal map $j_X=u_X\theta_X:X\to X^{\vee\vee}$ and define $t_n(\beta)=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))\in\operatorname{End}(\mathbf1)$. Prove from the generator assignment that this trace formula is exactly the evaluation of the fully closed framed ribbon. | EGNO §8.9 formula (8.30), §8.10 formula (8.35), pp. 214--218. |
| `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` (theorem) | `[def-ribbon-evaluation-of-an-x-colored-closed-braid, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]` | Isotopic closed framed tangles are the same morphism in the source category, hence have equal evaluations. Ordinary Markov stabilization changes framing by a kink and is not included. | Turaev Theorem I.2.5 and its invariant interpretation, printed pp. 39--40; EGNO Remark 8.10.3. |
| `lem-scalar-twist-controls-the-two-markov-stabilizations` (lemma) | `[def-ribbon-evaluation-of-an-x-colored-closed-braid, def-markov-conjugation-and-stabilization-moves]` | Assume $\operatorname{End}(\mathbf1)=k$, $X$ is absolutely simple, and $\theta_X=\lambda\operatorname{id}_X$ with $\lambda\in k^\times$. With the declared positive-curl convention, ribbon cup--crossing--cap identities give $t_{n+1}(\iota\beta\,\sigma_n)=\lambda t_n(\beta)$ and $t_{n+1}(\iota\beta\,\sigma_n^{-1})=\lambda^{-1}t_n(\beta)$. | EGNO §8.10 ribbon graphical calculus; researcher-03 audit derives the exact conditional Markov calculation. |
| `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` (theorem) | `[lem-scalar-twist-controls-the-two-markov-stabilizations, thm-basic-properties-of-the-categorical-trace, thm-markovs-closed-braid-equivalence-theorem]` | Cyclicity handles conjugation and $w(\iota\beta\sigma_n^{\pm1})=w(\beta)\pm1$ makes $J_X(\widehat\beta)=\lambda^{-w(\beta)}t_n(\beta)$ invariant under both stabilizations. Apply Markov. Normalize the unknot further only if the categorical dimension is a unit. | Researcher-03 EGNO audit; EGNO §§4.7, 8.10 plus BB Theorem 4. |

### BG-13 — Yang–Baxter Operators and Quantum Braid Representations — Examples

**Page id:** `yang-baxter-operators-and-quantum-braid-representations-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-flip-operator-gives-the-permutation-representation` (example) | `[prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group]` | Compute the action on pure tensors and identify place permutation. |
| `ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces` (example) | `[thm-a-yang-baxter-operator-gives-braid-group-representations]` | Check the scalar bicharacter equation on homogeneous tensors. |
| `ex-a-noninvolutive-one-dimensional-yang-baxter-operator` (example) | `[thm-a-yang-baxter-operator-gives-braid-group-representations]` | Over $\mathbb Q$, take $X=\mathbb Qe$ and $R(e\otimes e)=2(e\otimes e)$. Both cubic sides act by $8$, $R$ is invertible, and $R^2=4\ne1$, so the resulting $B_n$ character does not factor through $S_n$. This is a direct local witness. |
| `cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group` (counterexample) | `[def-yang-baxter-operator-on-an-object]` | The zero operator satisfies the cubic equality but cannot represent invertible generators. |
| `ex-writhe-normalization-cancels-a-ribbon-kink` (example) | `[lem-scalar-twist-controls-the-two-markov-stabilizations, thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant]` | Evaluate a one-braid and its positive/negative stabilization and cancel $\lambda^{\pm1}$ with the writhe factor; researcher-03 EGNO audit. |
| `cex-a-braiding-alone-does-not-define-a-link-trace` (counterexample) | `[def-ribbon-evaluation-of-an-x-colored-closed-braid, fs-a-braiding-suffices-to-define-a-trace]` | Type-checking fails without duality/pivotal-ribbon data; published false statement and EGNO §§4.7, 8.10. |
| `cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant` (counterexample) | `[lem-scalar-twist-controls-the-two-markov-stabilizations]` | For $\lambda\ne1$, positive stabilization multiplies the trace by $\lambda$; EGNO ribbon kink calculation. |

## BG-14 — Graded Quiver Algebras and Derived Tensor Functors

**Page id:** `graded-quiver-algebras-and-derived-tensor-functors`  
**Requires:** `graded-bimodules-and-tensor-functors`,
`bounded-bimodule-complexes-and-derived-tensor`,
`perfect-complexes-and-triangulated-grothendieck-groups`,
`derived-categories`, `tensor-products-of-modules`,
`chain-complexes-and-homology`, `modules-over-a-pid-and-canonical-forms`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-path-ring-of-a-finite-quiver-over-the-integers` (definition) | `[def-ring]` | The free abelian group on all directed paths, including vertex idempotents, with concatenation when endpoints match and zero otherwise. | KS §1b, printed pp. 3--4. |
| `def-khovanov-seidel-type-a-quiver-algebra` (definition) | `[def-path-ring-of-a-finite-quiver-over-the-integers]` | For the doubled line quiver $0\leftrightarrows1\leftrightarrows\cdots\leftrightarrows m$, impose $(i-1|i|i+1)=(i+1|i|i-1)=0$, $(i|i+1|i)=(i|i-1|i)$ for $0<i<m$, and $(0|1|0)=0$; grade forward arrows and vertices by $0$, backward arrows by $1$. | KS §1b, printed p. 4. |
| `lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis` (lemma) | `[def-khovanov-seidel-type-a-quiver-algebra]` | Reduce every length-at-least-three path to zero and every surviving length-two return to the chosen representative; prove the $4m+1$ displayed paths are independent by a normal-form representation. | KS §1b, basis immediately after the relations. |
| `def-graded-khovanov-seidel-module-category-and-projectives` (definition) | `[def-khovanov-seidel-type-a-quiver-algebra, def-graded-ring-module-bimodule-and-internal-shift, def-finitely-generated-graded-projective-module]` | $A_m\text{-mod}$ consists of finitely generated graded left modules and degree-zero maps; use the inherited shift $M\{r\}_d=M_{d-r}$ and define $P_i=A_m(i)$, with right projectives $(i)A_m$. Translate KS's notation explicitly. | KS §2a, printed p. 9; HA-18.1, 18.5. |
| `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions` (lemma) | `[def-graded-khovanov-seidel-module-category-and-projectives, lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]` | Totalize the finite projective-resolution bicomplex built from the $P_i$; relations make rows/columns complexes and all but the top column acyclic. Include the $S_i/pS_i$ one-step extension over $\mathbb Z$. | KS Proposition 2.1, printed pp. 9--10. |
| `thm-the-khovanov-seidel-algebra-has-finite-homological-dimension` (theorem) | `[lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions]` | Filter any finite graded module by shifts of $S_i$ and $S_i/pS_i$ and splice their finite resolutions. | KS Proposition 2.1. |
| `def-bounded-projective-homotopy-category-for-a-m` (definition) | `[def-graded-khovanov-seidel-module-category-and-projectives, def-perfect-complex-over-a-ring, thm-the-khovanov-seidel-algebra-has-finite-homological-dimension, thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories]` | Let $\mathcal C_m=K^b(\operatorname{proj}^{gr}A_m)$, distinguish homological shift $[1]$ from internal $\{1\}$, and verify before applying the inherited comparison that the finite free $\mathbb Z$-algebra $A_m$ is left Noetherian and KS Proposition 2.1 gives the required finite projective resolutions. This identifies the stated bounded finite-module derived category, not an arbitrary unbounded category. | KS §2c, printed pp. 10--11; HA-21.1, 21.7. |
| `def-two-sided-projective-khovanov-seidel-bimodule-functors` (definition) | `[def-graded-khovanov-seidel-module-category-and-projectives, def-graded-balanced-tensor-product-and-homogeneous-hom, thm-bimodule-tensor-exactness-and-projective-preservation]` | Put $U_i=P_i\otimes_{\mathbb Z}{}_iP$. The path-basis calculation makes $U_i$ finite projective both as a left and as a right $A_m$-module; hence $U_i\otimes_{A_m}-$ is exact and preserves finite projectives by the two separate hypotheses of HA-18.7. | KS §2b, equation (2.1); HA-18.7. |
| `thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations` (theorem) | `[def-two-sided-projective-khovanov-seidel-bimodule-functors]` | Compute ${}_iP\otimes_{A_m}P_j$ from the path basis to prove $U_i^2\cong U_i\oplus U_i\{1\}$, $U_iU_{i\pm1}U_i\cong U_i\{1\}$, and $U_iU_j=0$ for $|i-j|>1$. | KS Theorem 2.2, equations (2.2)--(2.5). |
| `def-khovanov-seidel-beta-and-gamma-bimodule-maps` (definition) | `[def-two-sided-projective-khovanov-seidel-bimodule-functors]` | Define $\beta_i:P_i\otimes{}_iP\to A_m$ by multiplication and $\gamma_i:A_m\to P_i\otimes{}_iP\{-1\}$ by the four-term path formula (with endpoint omission at $i=m$); verify both are bimodule maps using the quiver relations. | KS §2d, equations (2.6)--(2.7). |
| `def-khovanov-seidel-positive-and-negative-twist-complexes` (definition) | `[def-khovanov-seidel-beta-and-gamma-bimodule-maps, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]` | $R_i=[P_i\otimes{}_iP\xrightarrow{\beta_i}A_m]$ with $A_m$ in degree $0$, and $R_i^{-1}=[A_m\xrightarrow{\gamma_i}P_i\otimes{}_iP\{-1\}]$ with $A_m$ in degree $0$. The preceding two-sided projectivity check licenses their derived tensor functors; it is not inferred from right projectivity alone. | KS §2c--2d; HA-20.1, 20.4. |

### BG-14 — Graded Quiver Algebras and Derived Tensor Functors — Examples

**Page id:** `graded-quiver-algebras-and-derived-tensor-functors-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives` (example) | `[def-khovanov-seidel-type-a-quiver-algebra, def-graded-khovanov-seidel-module-category-and-projectives]` | List the nine basis paths, multiplication, gradings and three projectives; KS §1b. |
| `ex-a-simple-module-projective-resolution-for-a-two` (example) | `[lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions]` | Write and verify the smallest nontrivial resolution; KS Proposition 2.1. |
| `ex-totalizing-a-two-term-bimodule-action` (example) | `[def-khovanov-seidel-positive-and-negative-twist-complexes, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]` | Give the signed total differential on a two-term projective complex; KS §2c and HA-20.1. |
| `cex-internal-and-homological-shifts-are-not-interchangeable` (counterexample) | `[def-bounded-projective-homotopy-category-for-a-m]` | Compare their effects on graded Hom groups and $K_0$; KS §2c. |

## BG-15 — Categorical Braid Actions and Decategorification

**Page id:** `categorical-braid-actions-and-decategorification`  
**Requires:** `graded-quiver-algebras-and-derived-tensor-functors`,
`geometric-braids-and-artin-generators`, `the-burau-representations`,
`grothendieck-groups-and-graded-cartan-pairings`,
`perfect-complexes-and-triangulated-grothendieck-groups`,
`punctured-disks-mapping-classes-and-point-pushing`,
`homological-gaussian-elimination`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-weak-action-of-a-group-on-a-category` (definition) | `[def-group-action]` | In the KS sense, choose functors $F_g$ with $F_1=\operatorname{Id}$ and isomorphisms $F_{fg}\cong F_fF_g$; explicitly note that KS does not include chosen compositors or a pentagon, so this is weaker than a coherent 2-action. | KS Definition 2.6, printed p. 14 and footnote in introduction. |
| `def-faithful-weak-categorical-action` (definition) | `[def-weak-action-of-a-group-on-a-category]` | Faithful means $F_g\not\cong\operatorname{Id}$ for every $g\ne1$. | KS after Proposition 2.7. |
| `lem-khovanov-seidel-generator-complexes-are-mutually-inverse` (lemma) | `[def-khovanov-seidel-positive-and-negative-twist-complexes, thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]` | Expand $R_i\otimes R_i^{-1}$; apply the inherited block cancellation with the displayed identity pivots and Schur-complement signs to split it as the diagonal bimodule plus the two explicit contractible complexes $T_{-1},T_1$. Repeat in the opposite order. | KS Proposition 2.4, pp. 11--13; HA-24.4. |
| `lem-khovanov-seidel-complexes-satisfy-far-commutativity` (lemma) | `[def-khovanov-seidel-positive-and-negative-twist-complexes, thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations]` | Both tensors reduce to the same two-term complex because $U_iU_j=0$ and the summands swap for $|i-j|>1$. | KS Theorem 2.5, equation (2.10). |
| `lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation` (lemma) | `[def-khovanov-seidel-positive-and-negative-twist-complexes, lem-khovanov-seidel-generator-complexes-are-mutually-inverse]` | Rewrite to equation (2.11), quotient the explicit cones by contractible summands, and identify their remaining four-term complexes via the maps $e=f$ with coefficients $(1,-1)$. | KS Theorem 2.5, equations (2.11)--(2.13), pp. 13--14. |
| `def-khovanov-seidel-complex-of-a-braid-word` (definition) | `[def-khovanov-seidel-positive-and-negative-twist-complexes]` | Tensor $R_i$ or $R_i^{-1}$ following a chosen braid word and let the resulting projective bimodule complex act by derived tensor. | KS Definition 2.6--Proposition 2.7. |
| `thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action` (theorem) | `[def-weak-action-of-a-group-on-a-category, def-khovanov-seidel-complex-of-a-braid-word, lem-khovanov-seidel-generator-complexes-are-mutually-inverse, lem-khovanov-seidel-complexes-satisfy-far-commutativity, lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation]` | Every defining/free-cancellation move gives a functor isomorphism, so word choices yield a weak $B_{m+1}$ action in KS's exact sense. No unproved coherence upgrade is claimed. | KS Proposition 2.7. |
| `def-khovanov-seidel-path-ideal` (definition) | `[def-khovanov-seidel-type-a-quiver-algebra]` | Let $J\subset A_m$ be the homogeneous two-sided ideal generated by all arrows. The path-basis relations give $J^3=0$ and $A_m/J\cong\mathbb Z^{m+1}$ via the vertex idempotents. | KS §1b path basis, pp. 3--4. |
| `lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives` (lemma) | `[def-khovanov-seidel-path-ideal, def-graded-khovanov-seidel-module-category-and-projectives, cor-submodules-of-finite-free-pid-modules-are-free]` | For finite graded projective $P$, the vertex pieces of $P/JP$ are finite projective, hence finite free, graded $\mathbb Z$-modules. Lift homogeneous bases to a map $\bigoplus P_i\{r\}\to P$; nilpotent Nakayama ($J^3=0$) makes it surjective, so projectivity splits it. The kernel $K$ has $K/JK=0$; iterating $K=JK=J^2K=J^3K$ gives $K=0$. Uniqueness follows by reducing an isomorphism modulo $J$ and comparing vertex/degree ranks. | KS §2e.1, with the full nilpotent-radical argument supplied; PID freeness inherited. |
| `def-graded-grothendieck-group-of-a-m-perfect-complexes` (definition) | `[def-bounded-projective-homotopy-category-for-a-m, def-triangulated-grothendieck-group, thm-perfect-complex-k-zero-agrees-with-projective-k-zero, lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives]` | Take triangulated $K_0(\mathcal C_m)$, not the short-exact $G_0$ of all modules. The inherited Euler-class comparison and the preceding projective classification identify it with the free split group $\bigoplus_{i=0}^m\mathbb Z[q,q^{-1}][P_i]$; $[M[1]]=-[M]$ and $[M\{1\}]=q[M]$. No finite-dimensional-field-algebra theorem from HA-19 is applied to the integral algebra $A_m$. | KS §2e.1; HA-19.2 and HA-21.2--21.5. |
| `prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action` (proposition) | `[thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action, def-graded-grothendieck-group-of-a-m-perfect-complexes, def-unreduced-burau-matrices]` | Since $[R_i]=[\operatorname{Id}]-[U_i]$, compute its action on every $[P_j]$ and match the unreduced Burau representation after the explicit basis/parameter convention $q=t$ used by KS. | KS §2e.1 and introduction equation (1.2) discussion. |
| `def-khovanov-seidel-bigrading-cover-and-local-intersection-indices` (definition) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]` | For the disk with $m+1$ marked points, take KS's $\mathbb Z^2$ cover of the projectivized tangent-line bundle determined by the winding and tangent-rotation homomorphisms. Fix lifts of the basic arcs $b_0,\ldots,b_m$ and the normalized lifted mapping-class action. At a transverse intersection define the two local deck indices and the Laurent polynomial $I^{bigr}(c_0,c_1)$, with the endpoint half-weight convention printed explicitly. | KS §§3c--3e, pp. 21--33, especially Definitions 3.9--3.14 and Proposition 3.19. |
| `def-khovanov-seidel-complex-of-an-admissible-bigraded-curve` (definition) | `[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices, def-graded-khovanov-seidel-module-category-and-projectives]` | Put an admissible curve in normal form relative to the vertical strips. Assign a shifted vertex projective to every essential $k$-string and define $L(\widetilde c)$ as their ordered direct sum; define each matrix component of the differential by the six local string configurations and their exact internal/homological shifts. | KS §§4a--4b, pp. 33--39. |
| `lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves` (lemma) | `[def-khovanov-seidel-complex-of-an-admissible-bigraded-curve]` | Check $d^2=0$ by pairing all length-two local paths and using the $A_m$ quiver relations. For each of the finite normal-form moves, print the chain inclusion/projection and contracting homotopy for the added two-term summand; conclude the homotopy type depends only on the bigraded isotopy class. | KS Theorem 4.3 and its local tables, pp. 35--41. |
| `lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators` (lemma) | `[lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves, def-khovanov-seidel-positive-and-negative-twist-complexes]` | For each basic half twist and each local string type, construct the homotopy equivalences $R_iL(\widetilde c)\simeq L(\widetilde\sigma_i\widetilde c)$ and the inverse-generator analogue; verify the maps commute with differentials and that the grading shifts match the normalized lift. Induct over braid words. | KS Proposition 4.4 and Corollary 4.8, pp. 39--44. |
| `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections` (theorem) | `[lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators, def-khovanov-seidel-complex-of-a-braid-word]` | Identify $P_i$ with the curve complex of $b_i$. Compute the graded Hom complex from $P_i$ to each local summand of $L(\widetilde c)$; its cohomology Poincaré polynomial equals the sum of local intersection monomials. Hence $\sum q_1^{r_1}q_2^{r_2}\operatorname{rk}\operatorname{Hom}(P_i,R_\sigma P_j[r_1]\{-r_2\})=I^{bigr}(b_i,\sigma b_j)$, and specialization at $(1,1)$ gives twice geometric intersection with the source's endpoint convention. | KS Proposition 4.9 and Theorem 1.1, pp. 44--47. |
| `lem-khovanov-seidel-basic-arcs-detect-the-identity-braid` (lemma) | `[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]` | If $I(b_j,f(b_k))=I(b_j,f^2(b_k))=I(b_j,b_k)$ for every $j,k$, KS Lemmas 3.4--3.6 first restrict $f$ to a product of twists about the standard curves, then use the free-abelian twist subgroup and the second-iterate equalities to force every exponent to zero. The hypotheses explicitly require both $f$ and $f^2$. | KS Lemmas 3.4--3.6, pp. 19--21. |
| `thm-the-khovanov-seidel-weak-braid-action-is-faithful` (theorem) | `[def-faithful-weak-categorical-action, thm-khovanov-seidel-homs-compute-bigraded-arc-intersections, lem-khovanov-seidel-basic-arcs-detect-the-identity-braid, thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action]` | If $R_\sigma\cong\operatorname{Id}$, the Hom formula at $(1,1)$ gives the identity intersection table for $\sigma$; applying the same isomorphism twice gives it for $\sigma^2$. The two-iterate detector forces $\sigma=1$. | KS Corollary 1.2, final paragraph p. 47. |

### BG-15 — Categorical Braid Actions and Decategorification — Examples

**Page id:** `categorical-braid-actions-and-decategorification-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-cancelling-a-generator-with-its-inverse-categorical-twist` (example) | `[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]` | Display the tensor complex and the $T_{-1}\oplus A_m\oplus T_1$ splitting; KS Proposition 2.4. |
| `ex-decategorifying-a-khovanov-seidel-generator` (example) | `[prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action]` | Compute the matrix on the $[P_j]$ basis; KS §2e.1. |
| `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences` (counterexample) | `[def-graded-grothendieck-group-of-a-m-perfect-complexes]` | Use KS faithfulness versus nonfaithful large-rank Burau decategorification: a nontrivial kernel braid acts trivially on $K_0$ but not as the identity functor; KS Corollary 1.2 and §2e.1. |
| `cex-ks-weak-actions-do-not-supply-pentagon-coherence-data` (counterexample) | `[def-weak-action-of-a-group-on-a-category]` | Compare Definition 2.6 with the stronger compositor/pentagon definition; the omitted data cannot be inferred from pairwise existence of isomorphisms. |

## BG-16 — Type-A Soergel Bimodules and Hecke Categorification

**Page id:** `type-a-soergel-bimodules-and-hecke-categorification`  
**Requires:** `principal-series-representations-of-gl-n-over-a-finite-field`,
`tensor-products-of-modules`, `symmetric-polynomials`,
`graded-bimodules-and-tensor-functors`,
`grothendieck-groups-and-graded-cartan-pairings`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-type-a-reflection-realization-and-polynomial-ring` (definition) | `[thm-the-symmetric-group-has-the-coxeter-presentation]` | Fix $k=\mathbb Q$, $R=k[x_1,\ldots,x_n]$ with $\deg x_i=2$, $S_n$ acting by place permutation, $s_i=(i,i+1)$, $\alpha_i=x_i-x_{i+1}$, and $R^{s_i}$ the invariant subring. Check directly that the realization is faithful, Demazure-surjective, and balanced and that every finite dihedral integer $2m_{st}$ is invertible. These are EW's Soergel-realization hypotheses; “characteristic zero” alone is not substituted for them. | EW §§2.1--2.4 and §§3.1--3.2, specialized to standard type A. |
| `def-type-a-soergel-bimodule-for-a-simple-reflection` (definition) | `[def-type-a-reflection-realization-and-polynomial-ring, def-tensor-product-of-modules-by-generators-and-relations, def-graded-ring-module-bimodule-and-internal-shift]` | Define $B_i=R\otimes_{R^{s_i}}R(1)$ as a graded $(R,R)$-bimodule, where EW's $M(1)_d=M_{d+1}$ equals the library shift $M\{-1\}$. Keep this dictionary in every later formula. | EW §3.4, pp. 24--25; HA-18.1. |
| `lem-type-a-soergel-generators-are-finite-free-on-both-sides` (lemma) | `[def-type-a-soergel-bimodule-for-a-simple-reflection]` | Write $R=R^{s_i}\oplus\alpha_iR^{s_i}$ using $2^{-1}$ and the Demazure operator. Tensoring shows $B_i$ is graded free of rank two as a left $R$-module and separately as a right $R$-module, with the displayed shifts. Tensor products of the $B_i$ therefore retain finite projectivity on both sides. | EW §§1.4, 3.2, rank-one calculus. |
| `def-bott-samelson-bimodule-of-a-word` (definition) | `[def-type-a-soergel-bimodule-for-a-simple-reflection]` | Tensor the $B_i$ along a word and make the empty word $R$. | EW §§1.2--1.3. |
| `def-the-type-a-soergel-category` (definition) | `[def-bott-samelson-bimodule-of-a-word]` | Take the additive, graded-shift, idempotent-complete monoidal subcategory generated by the $B_i$; distinguish it from its diagrammatic presentation. | EW §§1.2--1.5. |
| `def-type-a-standard-graph-bimodules-support-filtrations-and-character` (definition) | `[def-type-a-reflection-realization-and-polynomial-ring, def-the-type-a-soergel-category]` | For $w\in S_n$, define $R_w$ to be $R$ as a left module with right action $r\cdot f=r\,w(f)$. For a Bruhat-closed subset $A$, define $\Gamma_A M$ as the submodule supported on the union of graphs $\bigcup_{w\in A}\operatorname{Gr}(w)$. Put $\Delta_w=R_w(-\ell(w))$ and $\nabla_w=R_w(\ell(w))$; define $\Delta$- and $\nabla$-flags by increasing and decreasing Bruhat support. Their multiplicity sums define $h_\Delta,h_\nabla$ once independence is proved. | Soergel arXiv:math/0403496v2 §§5--6, especially pp. 14--18; EW §§3.3--3.4, pp. 22--27. |
| `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations` (lemma) | `[def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-type-a-soergel-bimodule-for-a-simple-reflection]` | Write both exact rank-one sequences $0\to R(-1)\to B_s\to R_s(1)\to0$ and $0\to R_s(-1)\to B_s\to R(1)\to0$. Tensor successively; sidewise freeness preserves exactness, and the subquotients are shifted $R_w$ indexed by subexpressions. Reordering adjacent incomparable support layers uses the vanishing of extensions unless the graph indices differ by a reflection. This produces both Bruhat-ordered flags for every Bott--Samelson. | Soergel §§5.7--5.10, pp. 12--16; EW (3.4)--(3.5), pp. 25--26. |
| `lem-type-a-support-filtration-multiplicities-are-intrinsic` (lemma) | `[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]` | Refine a Bruhat-compatible enumeration one adjacent incomparable pair at a time. The extension-vanishing lemma makes the two corresponding graph layers exchange without changing either isomorphism type or shift multiplicity. Hence the $\Delta_w(d)$ and $\nabla_w(d)$ multiplicities depend only on $M$, defining $h_\Delta(M)$ and $h_\nabla(M)$. | Soergel Lemma 6.3 and Proposition 6.4, pp. 18--19. |
| `lem-type-a-top-support-layers-are-controlled-by-reflection-localization` (lemma) | `[lem-type-a-support-filtration-multiplicities-are-intrinsic]` | For each reflection $t$, localize away from its hyperplane and split a special bimodule into $R_y$ and two-graph $R_{y,yt}$ pieces. With $p_y=\prod_{yt<y}\alpha_t$, intersect these local calculations inside the torsion-free module to prove $\Gamma_yM\cong\Gamma_{\le y}M\,p_y$ and $\Gamma_{\ge y}M\cong\Gamma^yM\,p_y$. | Soergel Lemma 6.10 and Theorem 6.6, pp. 20--22. |
| `thm-the-type-a-soergel-hom-formula` (theorem) | `[lem-type-a-top-support-layers-are-controlled-by-reflection-localization, lem-type-a-soergel-generators-are-finite-free-on-both-sides]` | First prove Frobenius biadjunction $B_s\otimes_R-$ is self-adjoint up to the displayed shift. Move simple factors across Hom and reduce the special-bimodule formula to $\operatorname{Hom}(R,R)$. For direct summands, use the top-layer multiplication-by-$p_y$ isomorphisms to show Hom remains exact when the maximal layer is removed from a $\Delta$-flag or $\nabla$-flag. Induction on flag length gives Hom free over $R$ with $\operatorname{grk}_R\operatorname{Hom}(M,N)=\sum_{w,d,e}(M:\Delta_w(d))(N:\nabla_w(e))v^{e-d}$, equivalently the standard Hecke pairing. | Soergel Theorem 5.15, Lemma 6.13, and their proofs, pp. 16--17 and 22--24. |
| `lem-the-type-a-standard-character-is-multiplicative` (lemma) | `[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-type-a-support-filtration-multiplicities-are-intrinsic]` | Tensor the rank-one flags through an arbitrary support flag. Since $R_x\otimes_RR_y\cong R_{xy}$ and every term is sidewise free, the tensor filtration is exact and its multiplicities obey Hecke multiplication. This proves $h_\Delta(M\otimes_RN)=h_\Delta(M)h_\Delta(N)$ and the recursive subexpression formula for Bott--Samelsons. | Soergel Propositions 5.7 and 5.9, pp. 12--16; EW (3.4)--(3.6), pp. 25--27. |
| `lem-the-rank-one-soergel-bimodule-square-splits` (lemma) | `[def-type-a-soergel-bimodule-for-a-simple-reflection]` | Since $2$ is invertible, $R=R^{s_i}\oplus\alpha_iR^{s_i}$; tensor this decomposition and write the multiplication/Demazure inclusions and projections proving $B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$. | EW §§1.4--1.5 and rank-one relations. |
| `lem-distant-soergel-generators-commute` (lemma) | `[def-type-a-soergel-bimodule-for-a-simple-reflection]` | Identify invariant extensions for disjoint adjacent transpositions and write the bimodule isomorphism $B_iB_j\cong B_jB_i$. | EW diagrammatic distant relations, §§1--3. |
| `def-the-rank-two-longest-type-a-soergel-bimodule` (definition) | `[def-type-a-reflection-realization-and-polynomial-ring]` | For adjacent $s_i,s_{i+1}$ define $B_{i,i+1,i}=R\otimes_{R^{\langle s_i,s_{i+1}\rangle}}R(3)$. This is the longest $S_3$ summand in EW shifts, equivalent to Khovanov's $R\otimes_{R^{S_3}}R\{-3\}$. | Khovanov 0510265 Proposition 4, pp. 11--12; EW §3.5. |
| `thm-rank-two-type-a-soergel-bimodule-decompositions` (theorem) | `[def-the-type-a-soergel-category, def-the-rank-two-longest-type-a-soergel-bimodule]` | Construct the type-$A_2$ inclusion/projection maps from multiplication and divided differences and verify the two matrix composites, giving $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$ and $B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$ with no extra shift. | Khovanov 0510265 Proposition 4, pp. 11--12; EW §§5.2--5.3, pp. 42--46. |
| `def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor` (definition) | `[def-the-type-a-soergel-category, thm-rank-two-type-a-soergel-bimodule-decompositions]` | Define EW's colored planar diagram category $\mathcal D$ by polynomial boxes, dots, trivalent vertices, and $2m$-valent vertices. List the complete type-A defining relations: polynomial sliding, one-color Frobenius relations, distant-color interchange, adjacent-color Jones--Wenzl/six-valent relations, and the three-color Zamolodchikov relation equating the two composites of six-valent vertices between the two reduced-expression paths for the longest element of the $A_3$ parabolic. Define the monoidal functor to Bott--Samelson bimodules on every generator. | EW §§5.1--5.6, pp. 38--57. |
| `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules` (lemma) | `[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, thm-rank-two-type-a-soergel-bimodule-decompositions]` | Verify polynomial and one-color relations using multiplication and the Demazure trace, distant relations by disjoint variables, and the adjacent six-valent identities by the explicit rank-two inclusion/projection matrices. For three consecutive colors, evaluate both Zamolodchikov composites on the $R^{S_4}$-basis obtained from divided differences and show they agree entrywise. Hence the generator assignment descends to a monoidal functor $\mathcal D\to\mathrm{BSBim}$. | EW §§5.1--5.6, especially the type-A checks surrounding (5.16), pp. 38--57. |
| `thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces` (theorem) | `[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]` | Build light leaves recursively from subexpressions and double leaves by gluing. After localization, order subexpressions so the transition matrix to standard graph maps is triangular with invertible diagonal, proving independence. Prove spanning by EW's negative--positive/maxwidth grand induction: reduce a maximal-width region with the local relations and terminate on width. Thus each Hom is graded free over $R$ with the double-leaves basis and the Hecke-pairing rank. | EW Proposition 6.6, Corollary 6.8, Theorem 6.11, Corollary 6.13 and §7 proof, pp. 57--82. |
| `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts` (theorem) | `[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]` | Over the field $k=\mathbb Q$, use finite-dimensional degree-zero endomorphism quotients and idempotent lifting in the graded, idempotent-complete category to obtain Krull--Schmidt. For each $w\in S_n$, isolate the unique new summand $D_w$ of a reduced Bott--Samelson word not occurring below $w$; triangular Hom ranks prove independence of the word and show every indecomposable is a unique shift of one $D_w$. | EW Lemma 6.24 and Theorem 6.25, pp. 67--69. |
| `thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism` (theorem) | `[thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts, lem-the-type-a-standard-character-is-multiplicative, def-split-grothendieck-group-of-an-additive-category, def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra]` | Define the diagrammatic character by the double-leaves subexpression multiplicities and prove, by the same recursion as the standard-filtration character, that it is independent of a reduced expression and multiplicative. It sends the simple object to $\underline H_i$ and is triangular with one basis element for every $w$; the inverse sends $\underline H_i$ to $[D_i]$. Hence $[\operatorname{Kar}(\mathcal D)]\cong\mathcal H_{S_n}$. | EW equations (6.3)--(6.4), Corollaries 6.26--6.27, pp. 68--70. |
| `thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit` (theorem) | `[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules, thm-the-type-a-soergel-hom-formula]` | Recursively construct Libedinsky's four last-letter maps for each subexpression ending at the identity. Prove their degrees satisfy the Hecke recursion, so their Hilbert series equals the Hom formula. For independence, order by maximal normal part and show the associated coefficient matrix is triangular with unit diagonal after reflection localization. Hom freeness makes localization injective; equal Hilbert series then upgrades independence to an $R$-basis of $\operatorname{Hom}(B_{\underline w},R)$. | Libedinsky arXiv:0707.3603v3 §§4--5, especially Theorem 5.1 and Lemma 5.6, printed pp. 7--19. |
| `thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs` (theorem) | `[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces, thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit]` | Use the explicit Frobenius biadjunction isomorphism $\operatorname{Hom}(B_{\underline x},B_{\underline y})\cong\operatorname{Hom}(B_{\underline y^{op}}B_{\underline x}(-\ell(\underline y)),R)$. Transport the preceding light-leaf basis through this map; its elements are exactly the evaluated double leaves. Hence every Bott--Samelson Hom has the same $R$-basis and graded index set as its diagrammatic Hom. | Libedinsky Lemma 3.3 and §6, printed pp. 5--6 and 20--21; EW Theorem 6.28 and Remark 6.29. |
| `thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent` (theorem) | `[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces, thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs, def-type-a-reflection-realization-and-polynomial-ring]` | On every Bott--Samelson Hom, the functor sends the diagrammatic double-leaves basis bijectively to the evaluated double-leaves basis, so it is fully faithful. It is essentially surjective onto BSBim by definition. Extend across sums, shifts, and idempotent completion to obtain $\operatorname{Kar}(\mathcal D)\simeq\mathrm{SBim}$. | EW Theorem 6.28 and Remark 6.29, pp. 69--70, under the verified Soergel-realization hypotheses. |
| `thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra` (theorem) | `[thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism, thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent, lem-the-rank-one-soergel-bimodule-square-splits]` | Transport the diagrammatic character across the equivalence. With RG-13's $(T_i-q)(T_i+1)=0$, set $q=v^{-2}$ and $\underline H_i=v(T_i+1)$, so $T_i=v^{-1}\underline H_i-1$ and $[B_i]\leftrightarrow\underline H_i$. Check $[B_i]^2=(v+v^{-1})[B_i]$ directly. This gives the full split-$K_0$ isomorphism, not merely a homomorphism from low-rank relations. | EW Theorem 3.15 and Corollaries 6.26--6.28, pp. 27--29, 68--70. |

### BG-16 — Type-A Soergel Bimodules and Hecke Categorification — Examples

**Page id:** `type-a-soergel-bimodules-and-hecke-categorification-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-the-rank-one-soergel-category` (example) | `[lem-the-rank-one-soergel-bimodule-square-splits]` | Compute $R^s$, the homogeneous basis $1,\alpha$, and all splitting maps; EW rank-one calculus. |
| `ex-the-type-a-two-rank-two-soergel-decomposition` (example) | `[thm-rank-two-type-a-soergel-bimodule-decompositions]` | Specialize the six-valent maps to $k[x_1,x_2,x_3]$ and verify the two matrix identities; EW rank-two calculus. |
| `ex-hecke-quadratic-relation-from-the-soergel-square` (example) | `[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]` | Take graded split classes and translate to RG-13's $T_i$; EW §1. |
| `cex-bott-samelson-words-related-by-a-braid-need-not-be-isomorphic-bimodules` (counterexample) | `[thm-rank-two-type-a-soergel-bimodule-decompositions]` | The two triple Bott--Samelsons have different extra summands $B_i$ and $B_{i+1}$; the braid relation appears only after passing to Rouquier complexes. |

## BG-17 — Rouquier Complexes and Categorical Braid Relations

**Page id:** `rouquier-complexes-and-categorical-braid-relations`  
**Requires:** `type-a-soergel-bimodules-and-hecke-categorification`,
`graded-quiver-algebras-and-derived-tensor-functors`,
`categorical-braid-actions-and-decategorification`, `derived-categories`,
`bounded-bimodule-complexes-and-derived-tensor`. The Gaussian supplier is
already reached through `categorical-braid-actions-and-decategorification`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-positive-and-negative-rouquier-generator-complexes` (definition) | `[def-type-a-soergel-bimodule-for-a-simple-reflection, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]` | Define $F_i=[B_i\to R(1)]$ and $F_i^{-1}=[R(-1)\to B_i]$ with degrees, multiplication/unit maps, and shifts matched to Rouquier's convention. The explicit two-sided finite-freeness lemma licenses derived tensor on perfect complexes. | Rouquier §3.2; EW background; HA-20.1, 20.4. |
| `lem-opposite-rouquier-generator-complexes-are-homotopy-inverse` (lemma) | `[def-positive-and-negative-rouquier-generator-complexes, lem-the-rank-one-soergel-bimodule-square-splits, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]` | Tensor the two complexes, apply the rank-one splitting, identify the invertible differential block, and use the inherited Schur-complement cancellation to contract it. | Rouquier §3.2; HA-24.4. |
| `lem-rouquier-complexes-satisfy-far-commutativity` (lemma) | `[def-positive-and-negative-rouquier-generator-complexes, lem-distant-soergel-generators-commute]` | Lift the bimodule swap to an explicit chain isomorphism. | Rouquier §3.2. |
| `lem-rouquier-complexes-satisfy-the-three-term-braid-relation` (lemma) | `[def-positive-and-negative-rouquier-generator-complexes, thm-rank-two-type-a-soergel-bimodule-decompositions, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]` | Expand both triple complexes, use the two explicit rank-two decompositions, cancel the contractible $B_i/B_{i+1}$ summands by their invertible differential blocks with the inherited Schur update, and retain the common $B_{i,i+1,i}$ complex; write the chain maps and contractions. | Rouquier §3.2 Proposition 3.2; EW rank-two calculus; HA-24.4. |
| `def-rouquier-complex-of-a-braid-word` (definition) | `[def-positive-and-negative-rouquier-generator-complexes]` | Tensor generator complexes in braid-word order; record homological and internal gradings. | Rouquier §3.2. |
| `def-coherent-action-of-a-group-on-a-category` (definition) | `[def-weak-action-of-a-group-on-a-category]` | Add chosen compositor isomorphisms $F_gF_h\Rightarrow F_{gh}$ and unit map satisfying pentagon and unit identities; explicitly distinguish this from KS Definition 2.6. | EGNO Definition 2.7.1, pp. 35--36; Rouquier §3.3.1. |
| `def-rouquier-canonical-comparisons-between-standard-graph-tensors` (definition) | `[def-type-a-standard-graph-bimodules-support-filtrations-and-character]` | Multiplication gives canonical $R_{x_1}\otimes_R\cdots\otimes_RR_{x_r}\cong R_{x_1\cdots x_r}$ and therefore comparison maps $c_{t,u}$ between graph tensors attached to Coxeter words with the same product; write the maps and check associativity directly. | Rouquier §3.1.2, p. 6. |
| `lem-rouquier-generator-complexes-have-canonical-derived-graph-models` (lemma) | `[def-positive-and-negative-rouquier-generator-complexes, def-rouquier-canonical-comparisons-between-standard-graph-tensors]` | With $B_s=R\otimes_{R^s}R(1)$, compare $[B_s\to R(1)]$ with Rouquier's $F_s(1)$ and $[R(-1)\to B_s]$ with $F_{s^{-1}}(-1)$. Compute kernel/cokernel using $R=R^s\oplus\alpha_sR^s$ to give the precise quasi-isomorphisms to the shifted graph bimodule $R_s$ in $D^b(R^e\text{-grmod})$. | Rouquier §§3.2.1, 3.3.1, pp. 6, 10. |
| `lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps` (lemma) | `[def-rouquier-complex-of-a-braid-word, lem-rouquier-complexes-satisfy-far-commutativity, lem-rouquier-complexes-satisfy-the-three-term-braid-relation, lem-opposite-rouquier-generator-complexes-are-homotopy-inverse, def-rouquier-canonical-comparisons-between-standard-graph-tensors, lem-rouquier-generator-complexes-have-canonical-derived-graph-models]` | For signed expressions $t,u$ of one braid, prove that the localization map from the relevant **internal-degree-zero** graded Hom in $K^b(R^e\text{-grmod})$ to the derived Hom of their graph models is an isomorphism and that the target degree-zero line is $k\,c_{t,u}$. Define the unique homotopy map $\gamma_{t,u}$ whose derived image is $c_{t,u}$. Do not replace this by ungraded endomorphism one-dimensionality. | Rouquier §3.3.1, p. 10, proof before Theorem 3.5. |
| `lem-rouquier-normalized-comparison-isomorphisms-are-transitive` (lemma) | `[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]` | Both $\gamma_{u,v}\gamma_{t,u}$ and $\gamma_{t,v}$ have derived image $c_{t,v}$ by associativity of graph multiplication, so uniqueness in degree zero makes them equal in the homotopy category. | Rouquier §3.3.1 immediately before Theorem 3.5. |
| `thm-rouquier-complexes-form-a-coherent-braid-group-action` (theorem) | `[def-coherent-action-of-a-group-on-a-category, lem-rouquier-normalized-comparison-isomorphisms-are-transitive, thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]` | For each braid $v$, choose a word complex $G_v$ and define $m_{v,v'}:G_v\otimes G_{v'}\to G_{vv'}$ as the unique normalized comparison compatible with graph multiplication; define the unit likewise. After localization, both sides of every pentagon/unit diagram are the same associative graph multiplication map, and uniqueness lifts equality back to $K^b$. Type $A$ over characteristic zero satisfies Rouquier's faithful-reflection and invertibility of every $2m_{st}$ hypothesis. | Rouquier §3.3.1, Theorem 3.5. |
| `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence` (theorem) | `[thm-rouquier-complexes-form-a-coherent-braid-group-action, def-rouquier-complex-of-a-braid-word]` | The normalized $\gamma_{t,u}$ is the canonical homotopy equivalence between word complexes, compatible with tensor product through the coherent multiplication maps. | Rouquier §3.3.1 and Theorem 3.5. |
| `thm-rouquiers-two-braid-category-is-strict-rigid-monoidal` (theorem) | `[thm-rouquier-complexes-form-a-coherent-braid-group-action]` | Take the full category on the chosen $G_v$, strictify the product by $G_v\otimes G_w:=G_{vw}$ using the coherent compositors, and set $G_v^*=G_{v^{-1}}$ with evaluation/coevaluation from the inverse equivalences. Verify the triangle identities from the unit/pentagon diagrams. Its decategorification is a quotient of the braid group; no Hecke identification is asserted here. | Rouquier §3.3.2, Theorem 3.7. |
| `prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator` (proposition) | `[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, def-positive-and-negative-rouquier-generator-complexes]` | Take the alternating graded class of the two-term complexes and match $T_i^{\pm1}$ under the RG-13 normalization. | Rouquier introduction and §3; EW §1. |

### BG-17 — Rouquier Complexes and Categorical Braid Relations — Examples

**Page id:** `rouquier-complexes-and-categorical-braid-relations-examples`

| proposed item (kind) | deps | verification |
|---|---|---|
| `ex-the-rouquier-complex-of-a-positive-three-strand-braid` (example) | `[def-rouquier-complex-of-a-braid-word]` | Totalize the tensor product for $\sigma_1\sigma_2$ with all grading shifts. |
| `ex-the-three-term-rouquier-braid-equivalence-in-type-a-two` (example) | `[lem-rouquier-complexes-satisfy-the-three-term-braid-relation]` | Display both complexes after decomposition and the surviving isomorphic summands. |
| `ex-normalized-comparison-maps-around-a-relation-loop` (example) | `[lem-rouquier-normalized-comparison-isomorphisms-are-transitive]` | Compare the two composites around a rank-three expression graph and verify equality. |
| `cex-isomorphic-hecke-classes-do-not-by-themselves-prove-homotopy-equivalent-complexes` (counterexample) | `[prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator]` | Give two non-homotopy-equivalent complexes with the same Euler/Grothendieck class. |

## BG-18 — Matrix Factorizations and Khovanov–Rozansky Link Homology

**Page id:** `matrix-factorizations-and-khovanov-rozansky-link-homology`  
**Requires:** `oriented-links-braid-closures-and-markov-equivalence`,
`chain-complexes-and-homology`,
`hecke-markov-traces-and-polynomial-link-invariants`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-bigraded-matrix-factorization-with-potential` (definition) | `[def-chain-complex-in-an-abelian-category]` | Over $S=\mathbb Q[a,x_1,\ldots,x_r]$ with $\deg a=(2,0)$ and $\deg x_i=(0,2)$, a factorization of $w$ is a free bigraded $S$-module $M^0\oplus M^1$ with odd $d$ of bidegree $(1,1)$ and $d^2=w$; define bidegree-zero morphisms and homotopies of degree $(-1,-1)$. | KR II, opening definitions, printed pp. 1--3. |
| `def-arc-and-wide-edge-khovanov-rozansky-factorizations` (definition) | `[def-bigraded-matrix-factorization-with-potential]` | For an oriented arc use $(a,x_1-x_2)$ with potential $a(x_1-x_2)$; for a wide edge tensor $(a,x_1+x_2-x_3-x_4)$ and $(0,x_1x_2-x_3x_4)$ with shifts $\{-1,1\}$ and $\{-1,3\}$. | KR II formulas (2)--(4), printed pp. 1--2. |
| `def-factorization-of-a-marked-moy-graph` (definition) | `[def-arc-and-wide-edge-khovanov-rozansky-factorizations]` | Tensor all arc and wide-edge factorizations over shared internal variables; the boundary potential is $a\sum\epsilon_i x_i$, and for a closed graph it is zero. | KR II printed pp. 3--4. |
| `lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type` (lemma) | `[def-bigraded-matrix-factorization-with-potential]` | Prove the elementary row transformations and the exclusion of a variable occurring with unit coefficient by explicit inverse maps and contracting homotopies. | KR II §1 “Product factorizations, graph homology and Koszul complexes,” printed pp. 10--13. |
| `def-chi-zero-and-chi-one-wide-edge-morphisms` (definition) | `[def-factorization-of-a-marked-moy-graph]` | Define the two homogeneous maps between the oriented smoothing $\Gamma_0$ and wide-edge resolution $\Gamma_1$, including their bidegrees and composite multiplication formulas. | KR II §2, “Maps $\chi_0,\chi_1$ revisited,” printed pp. 14--16. |
| `def-positive-and-negative-khovanov-rozansky-crossing-complexes` (definition) | `[def-chi-zero-and-chi-one-wide-edge-morphisms]` | Positive: $0\to C(\Gamma_0)\{0,2\}\xrightarrow{\chi_0}C(\Gamma_1)\to0$ with $C(\Gamma_1)$ in degree $0$; negative: $0\to C(\Gamma_1)\{0,-2\}\xrightarrow{\chi_1}C(\Gamma_0)\{0,-2\}\to0$ with $C(\Gamma_1)$ in degree $0$ and $C(\Gamma_0)$ in degree $1$. Record the source conflict explicitly: the prose immediately before Figure 6 accidentally repeats the positive $\chi_0$ display, but Figure 6, the matrices in (6), degree typing, and the IIa proof all force this $\chi_1:\Gamma_1\to\Gamma_0$ complex. | KR II Figure 6 and formula (6), printed pp. 5--6; IIa proof §5. |
| `def-khovanov-rozansky-complex-and-trigraded-braid-homology` (definition) | `[def-positive-and-negative-khovanov-rozansky-crossing-complexes, def-factorization-of-a-marked-moy-graph]` | Tensor crossing and arc factors to $C(D)\in K(hmf)$; for a closed braid take matrix-factorization cohomology termwise to $CH^j(D)$, then cohomology of the induced crossing differential to $H^j_{k,l}(D)$. Keep all three gradings separate. | KR II printed pp. 6--7. |
| `thm-markings-do-not-change-the-khovanov-rozansky-complex` (theorem) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]` | Adding/removing a mark introduces an internal variable and arc factor; exclude that variable to construct inverse homotopy equivalences. | KR II Proposition 1 and §3, printed pp. 7, 16--18. |
| `lem-khovanov-rozansky-braid-oriented-kink-shifts` (lemma) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]` | For KR's type-IA braid-oriented kink diagrams $D_1,D_2$, perform the direct-sum decomposition and contract the acyclic summand to obtain $C(D_1)\simeq C(D_2)\{1,1\}[1]$. For the source's type-IB pair, perform the analogous elimination and obtain the stated equivalence with no extra shift. Reproduce the two oriented pictures/conventions so these formulas are not ambiguously renamed “positive” and “negative.” | KR II §4, Propositions 4--5, pp. 18--19. |
| `thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a` (theorem) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-chi-zero-and-chi-one-wide-edge-morphisms]` | Expand four resolutions, apply wide-edge decompositions, Gaussian-eliminate the contractible pairs, and identify the straight-strand factorization. | KR II §5, Proposition 6, printed pp. 19--23. |
| `thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three` (theorem) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology, lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type]` | Expand the eight resolutions on both sides, decompose through the common $C(\Gamma)$ summands, and match the reduced complexes and differentials after eliminating contractibles. | KR II §6, printed pp. 23--35. |
| `lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation` (lemma) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-markov-conjugation-and-stabilization-moves, thm-markings-do-not-change-the-khovanov-rozansky-complex]` | View the closure of $\alpha\beta$ with a marked annular cut. Move the cut once past the local factors of $\alpha$, using the explicit associator of the finite tensor product and the Koszul interchange sign, to identify it with the closure complex of $\beta\alpha$; marking independence removes the auxiliary cuts. Print the chain maps and verify all three degrees. | KR II Theorem 1 proof framework, pp. 7--8, together with §§1,3 tensor/marking calculations. |
| `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift` (theorem) | `[thm-markings-do-not-change-the-khovanov-rozansky-complex, lem-khovanov-rozansky-braid-oriented-kink-shifts, thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a, thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three, lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation, thm-markovs-closed-braid-equivalence-theorem]` | Braid-presentation moves use IIa/III and inverse cancellation; conjugation uses the closure-cut map; the two Markov stabilizations use the source-labelled IA/IB calculations. Therefore the trigraded group is an oriented-link invariant **up to an overall trigrading shift**, with the IA shift $\{1,1\}[1]$ and IB no-shift rule explicitly propagated. No absolute normalization is claimed here. | KR II Theorem 1, p. 8, proofs §§3--6. |
| `def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series` (definition) | `[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]` | Put $\alpha=-t^{-1}q^{-1}$ and multiply the raw series by $\sqrt\alpha^{\,|D|_+-|D|_--s(D)+1}$, using the source's clockwise braid and crossing convention. | KR II formula before (7), printed p. 9. |
| `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial` (theorem) | `[def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series, def-homflypt-polynomial-from-the-hecke-markov-trace]` | The raw Euler series obeys the five listed braid/Markov rules and skein relation; the normalization removes both stabilization factors and gives equation (7) plus the declared unknot value. | KR II Theorem 2 and §7, printed pp. 8--9, 35--36. |

### BG-18 — Matrix Factorizations and Khovanov–Rozansky Link Homology — Examples

**Page id:** `matrix-factorizations-and-khovanov-rozansky-link-homology-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-the-khovanov-rozansky-unknot-factorization` (example) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology]` | Compute the one-mark circle as $\mathbb Q[a,x]\xrightarrow a\mathbb Q[a,x]\xrightarrow0\mathbb Q[a,x]$ and $H\cong\mathbb Q[x]\{-1,1\}$; KR II equation (6), p. 4. |
| `ex-a-positive-crossing-factorization-complex` (example) | `[def-positive-and-negative-khovanov-rozansky-crossing-complexes]` | Write both resolutions, potentials, $\chi_0$, cohomological degrees and shifts; KR II Figure 6. |
| `ex-a-two-crossing-closed-braid-factorization-complex` (example) | `[def-khovanov-rozansky-complex-and-trigraded-braid-homology]` | Tensor the two crossing complexes and verify the closed total potential is zero; KR II construction pp. 6--7. |
| `ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus` (example) | `[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]` | Tabulate the moves actually used in the Markov proof (braid IIa/III, conjugation, and stabilization/type I) and show that oriented IIb is not needed. KR II p. 8 explicitly says IIb is not proved there; this item illustrates proof scope and makes no false claim that the complex fails IIb invariance. |

## BG-19 — Hochschild Homology and Triply-Graded Link Homology

**Page id:** `hochschild-homology-and-triply-graded-link-homology`  
**Requires:** `matrix-factorizations-and-khovanov-rozansky-link-homology`,
`rouquier-complexes-and-categorical-braid-relations`,
`hochschild-homology-and-diagonal-koszul-resolutions`,
`hochschild-hyperhomology-and-cyclic-tensor-invariance`,
`bounded-bimodule-complexes-and-derived-tensor`.

| proposed item (kind) | deps | exact content and proof route | source locator |
|---|---|---|---|
| `def-reduced-type-a-polynomial-ring-for-hhh` (definition) | `[def-type-a-reflection-realization-and-polynomial-ring]` | Over $\mathbb Q$, use $R=\mathbb Q[x_1-x_2,\ldots,x_{m-1}-x_m]$ with $\deg x_i=2$ and $B_i=R\otimes_{R^{s_i}}R$; separate it from $R'=\mathbb Q[x_1,\ldots,x_m]\cong R\otimes\mathbb Q[x_1]$. | Khovanov arXiv:math/0510265v3, “Soergel bimodules,” printed pp. 3--4. |
| `def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor` (definition) | `[def-reduced-type-a-polynomial-ring-for-hhh]` | Define $B_i'=R'\otimes_{(R')^{s_i}}R'$ and, for a MOY resolution $D$, its tensor product $B'(D)$. Choose the algebra coordinate $x_1$ together with the differences to identify $R'\cong R\otimes_\mathbb Q\mathbb Q[x_1]$ and print the induced $B_i'\cong B_i\otimes_\mathbb Q\mathbb Q[x_1]$ and $B'(D)\cong B(D)\otimes\mathbb Q[x_1]$ maps, including shifts. | Khovanov 0510265, pp. 3--4. |
| `def-khovanovs-hhh-rouquier-generator-complexes` (definition) | `[def-reduced-type-a-polynomial-ring-for-hhh, def-rouquier-complex-of-a-braid-word]` | Use Khovanov's conventions $F(\sigma_i)=[R\{2\}\to B_i]$ with $B_i$ in degree $0$, and $F(\sigma_i^{-1})=[B_i\{-2\}\to R\{-2\}]$ with $B_i\{-2\}$ in degree $0$; give the $rb_i,br_i$ maps. | Khovanov 0510265, “Soergel bimodules and a braid group action,” printed pp. 4--5. |
| `def-termwise-hochschild-homology-complex-of-a-rouquier-complex` (definition) | `[def-khovanovs-hhh-rouquier-generator-complexes, thm-hochschild-homology-is-tor-over-the-enveloping-algebra, def-termwise-hochschild-homology-complex-and-iterated-homology]` | For every Rouquier degree $j$, take the bigraded groups $HH_h(R,F^j(\beta))$; inherited functoriality sends the Rouquier differential to a complex in $j$. Define $HHH^{j,h,d}(\beta)=H^j(HH_h(R,F^\bullet(\beta)))_d$. This is precisely the inherited termwise-HH construction and its spectral-sequence $E_2$ page, not total Hochschild hyperhomology. | Khovanov 0510265, “Link homology,” printed pp. 6--7; HA-22.7--22.8, HA-23.3--23.5. |
| `lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex` (lemma) | `[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, def-factorization-of-a-marked-moy-graph]` | Specialize the KR coefficient $a$ to zero. For each arc and wide edge, delete the now-zero row and identify the remaining factor with the two displayed symmetric relations; tensoring over internal marks gives Khovanov's layer-by-layer Koszul complex for $B'(D)$. Verify the boundary potential vanishes for a closed resolution. | Khovanov 0510265 proof of Theorem 1, pp. 7--8; KR II pp. 1--4. |
| `lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence` (lemma) | `[lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex]` | Order only the first $rm$ arc/wide-edge relations layer by layer. At each step eliminate a new variable by a monic linear relation, or use the monic elementary-symmetric pair exactly as in the source, proving it is a non-zero-divisor modulo predecessors. Conclude that quotienting by these relations gives $B'(D)$. Do **not** include the final closure differences in this regular sequence. | Khovanov 0510265 Lemma 1, pp. 7--8. |
| `lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex` (lemma) | `[lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]` | After quotienting to $B'(D)$, the remaining $m$ relations are exactly $x_{0,j}-x_{r,j}$, the polynomial diagonal sequence for the two outer $R'$ actions. Identify its Koszul homology naturally with $HH_*(R',B'(D))$. | Khovanov 0510265 Theorem 1 proof, pp. 8--9; HA-22.10--22.13. |
| `lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule` (lemma) | `[lem-the-remaining-closure-koszul-complex-is-the-diagonal-hochschild-complex, def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, def-termwise-hochschild-homology-complex-of-a-rouquier-complex]` | Combine the first-layer quotient with the final diagonal complex, then use $B'(D)\cong B(D)\otimes\mathbb Q[x_1]$ to remove the single trivial polynomial factor and identify the reduced summand. State the tensor-factor map rather than saying only “remove the variable.” | Khovanov 0510265 proof of Theorem 1, pp. 7--9. |
| `lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings` (lemma) | `[lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule, def-chi-zero-and-chi-one-wide-edge-morphisms]` | Check the local identifications intertwine $\chi_0$ and $\chi_1$ over every cube edge, using the corrected negative crossing. Write HHH degrees as $(h,p,c)$ = (Hochschild, polynomial, Rouquier) and KR degrees as $(a,q,t)$. After undoing KR's built-in $(-1,1,0)$ shift by the global correction $(1,-1,0)$, verify $a=-h$, $q=p-h$, and $t=c$. | Khovanov 0510265 end of Theorem 1 proof and following paragraph, pp. 8--10. |
| `thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology` (theorem) | `[def-termwise-hochschild-homology-complex-of-a-rouquier-complex, lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings, thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]` | Sum the local maps over all cube resolutions to obtain an isomorphism of crossing complexes, then take cohomology. Precisely: Khovanov's termwise-HH theory over reduced $R$ is the reduced KR theory after the global $(1,-1,0)$ correction and the coordinate change $(a,q,t)=(-h,p-h,c)$; the unreduced theory is recovered by adjoining the explicit $\mathbb Q[x_1]$ factor. | Khovanov 0510265 Theorem 1 and proof, pp. 6--10. |
| `cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift` (corollary) | `[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]` | Transport KR II's Markov invariance and its explicitly recorded IA/IB shifts through the coordinate dictionary. Claim only invariance up to the resulting overall trigrading shift; no fractional absolute normalization is silently added. | Khovanov 0510265 Theorem 1. |
| `cor-the-graded-euler-characteristic-of-hhh-is-homflypt` (corollary) | `[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology, thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial]` | Apply the trigrading dictionary to the KR Euler series and its normalization. | Khovanov 0510265 paragraph after Theorem 1; KR II Theorem 2. |

### BG-19 — Hochschild Homology and Triply-Graded Link Homology — Examples

**Page id:** `hochschild-homology-and-triply-graded-link-homology-examples`

| proposed item (kind) | deps | verification and source |
|---|---|---|
| `ex-hochschild-homology-of-the-rank-one-soergel-bimodule` (example) | `[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]` | Use $R=\mathbb Q[y]$, $B_1=\mathbb Q[y]\otimes_{\mathbb Q[y^2]}\mathbb Q[y]$ and the one-variable diagonal Koszul complex; Khovanov 0510265 pp. 3--4, 15--16. |
| `ex-hhh-of-the-positive-two-strand-torus-knot` (example) | `[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]` | Use Khovanov's minimal complex for $\sigma_1^n$ and compute the separate $HH_0$ and $HH_1$ complexes; printed pp. 15--16. |
| `ex-the-trivial-one-braid-hhh-grading-normalization` (example) | `[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]` | Shift both theories so the one-dimensional reduced unknot group lies in tridegree $(0,0,0)$; Khovanov p. 9. |
| `ex-termwise-and-total-hochschild-theories-have-different-grading-outputs` (example) | `[def-termwise-hochschild-homology-complex-of-a-rouquier-complex, def-hochschild-hyperhomology-of-a-bimodule-complex, thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]` | Take the two-term zero-differential $R$-bimodule complex $R\to0\to R$ over $R=\mathbb Q[x]$. Label every $(c,h,p)$ component on the termwise $E_2$ page, then totalize and show the abutment retains only $c-h$ and $p$ plus a filtration. The spectral sequence collapses in this example; it demonstrates the constructions' grading distinction without inventing a nonzero higher differential. | BPW §3.8.6 equation (3.44), pp. 38--39; HA-23.3--23.5. |

## 5. Source-heading dispositions and deliberate limits

Every heading in a range actually read by a researcher receives a disposition
in that report. The aggregate routing is:

- Classical definitions, Artin presentation support, configuration spaces,
  disk mapping classes, Fadell--Neuwirth, Garside, Burau and LKB are
  `included` in BG-1--BG-10 or `inline` where the library already owns the
  exact result.
- Alexander/Markov, Hecke trace, HOMFLYPT/Jones specialization, categorical
  braid actions, Soergel/Rouquier complexes and link-homology invariance are
  `included` in BG-11--BG-19.
- General mapping-class-group Nielsen--Thurston theory, spherical/surface
  braid groups, Garside conjugacy algorithms, BMW representation theory,
  arbitrary Coxeter types, full quantum-group construction, KLR/Fock/Ariki
  categorification, Floer comparisons, and transverse/contact refinements are
  `deferred` to named successor tracks or `out-of-scope` because no proposed
  proof uses them.
- The July 2026 $B_4$ Burau-faithfulness claim is a non-load-bearing recorded
  remark tied to arXiv:2607.05283 v1. It is not promoted to a locally proved
  theorem or described as peer-reviewed. The older $n\ge5$ nonfaithfulness
  statement likewise needs its primary source URL in the authored remark.
- No theorem claims that an equality in a Hecke algebra or Grothendieck group
  alone proves a categorical braid relation. Chain maps/homotopies and
  coherence remain explicit obligations.

## 6. Acyclicity, measurements, and build handoff

The page graph has converging branches and no backward edge. BG-1 and BG-2
meet at BG-3; BG-4 and BG-5 build from that meeting, and BG-6 closes the
Artin-presentation proof through combing. BG-7 is the independent Garside
continuation. BG-8 consumes BG-4 and BG-6; BG-9 then consumes BG-8 and BG-7.
BG-10 uses BG-2--BG-4 and BG-7, not Burau. BG-11 consumes BG-1 and BG-6;
BG-12 consumes BG-9, BG-11, and RG-13. BG-13 joins only the published
categorical foundations to BG-11. BG-14 uses the shared HA-18/20/21
infrastructure; BG-15 uses BG-14, BG-4, and the Burau page. BG-16 uses RG-13
and HA-18/19. BG-17 joins BG-14--BG-16 and HA-20. BG-18 is a
matrix-factorization branch from BG-11 that also consumes BG-12's fixed
HOMFLYPT normalization. Finally BG-19 joins BG-16--BG-18 with
HA-22/23. No A page requires a B page, and no SYMR page participates in this
graph.

`pages.json` deliberately has empty `items` arrays until the normal frontier
builder scaffolds these pages. `proposed-items.json` is evidence for collision,
dependency, and B-leaf validation only.

## 7. Final gap and dependency closure ledger

- All seven commissioned researcher reports are complete: three legitimate
  complete-text textbook assignments (Farb--Margalit, Hatcher as the disclosed
  Rolfsen substitute, and EGNO) and four primary article/notes portfolios.
  The manifest separates retrieval/full-body verification from ranges actually
  read. Inaccessible previews were not relabelled as books.
- Classical-model closure is explicit: configuration covering hypotheses,
  Fadell--Neuwirth local trivializations, Alexander contraction for the disk,
  pure-braid combing, Artin presentation completeness, and Artin's peripheral
  image characterization each have their own proof joints and dependencies.
- Representation closure is explicit: Burau absolute/relative modules and
  their kernel comparison, the exact $B_3$ argument and provisional $B_4$
  status, and the LKB absolute module, compactly supported pairing,
  integral-versus-fraction-field comparison, arc detector, and boundary-twist
  calculation are not conflated.
- Link/categorical closure is explicit: Reidemeister, Alexander and Markov
  infrastructure precedes trace invariants; the ribbon statement is framed,
  and its unframed descendant has the stated scalar-twist hypotheses and writhe
  normalization. Turaev Chapter I §§2--4 supplies the complete generator,
  relation, isotopy, and evaluation proof rather than an inaccessible citation.
- Categorification closure is explicit: the KS path algebra, projective-class
  basis over $\mathbb Z$, curve bigrading/complex/Hom-intersection detector;
  Soergel standard filtrations, Hom formula, all one/two/three-color diagram
  relations, light leaves, classification, character, and equivalence; and
  Rouquier normalized comparisons/coherence are separate obligations.
- Link-homology closure is explicit: the corrected negative KR crossing is
  recorded with its source-conflict resolution, braid moves and both Markov
  shifts are separated, and the HHH comparison distinguishes termwise
  Hochschild homology from total hyperhomology while preserving the precise
  grading dictionary.
- The final machine audit verifies all researcher files, page/title/companion
  consistency, empty page inventories, B-page leaf status, fewer than sixty
  items on every A page, unique proposed IDs, resolved item dependencies, and
  an acyclic page/item graph against the current published and planned
  suppliers. The scaffold does not modify the live plan, runtime, library, or
  active-run state.
