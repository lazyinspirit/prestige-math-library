# Algebraic topology track: homology, cohomology, homotopy, spectral sequences, and characteristic classes

Run `subjects-02`, track `algebraic-topology`, `scaffolder` lane. Owner
commission 2026-08-14: develop the subject from the ground up at graduate level,
with source-grounded proof decomposition and no invented load-bearing claims.

This file is a **prose scaffold only**. It authors no item, changes no page,
writes no `plan-spec.json` entry, runs no content gate, and publishes nothing.
It is the only file owned by this lane. Pair labels are relative and use the
globally reserved prefix `AT`; page references use ids, never absolute orders.
The whole block is placed immediately after
`schur-multipliers-and-universal-central-extensions-examples`.

---

## 0. Summary for the orchestrator

**Track `algebraic-topology`, run `subjects-02`. This scaffold is complete.**
The live plan was re-read from disk: it has 894 page records, 244 with nonempty
`items` arrays and 650 empty placeholders. The two usable low-homotopy pages are
actually authored: `homotopy-and-homotopy-equivalence` has 22 items and
`the-fundamental-group` has 6. The five covering-space/fundamental-group
continuations named in the seam contract have empty inventories and are treated
as prior planned suppliers, never as already established content.

The scaffold proposes twenty A/B pairs.  Two anticipated large pages were
split before authoring: generalized cohomology from its complex-$K$/Bott
prerequisite, and characteristic classes into bundle, Thom, real-class and
complex-class constructions.

| label | A page | mathematical remit |
|---|---|---|
| `AT-1` | `simplicial-complexes-and-simplicial-homology` | abstract simplicial complexes, realizations, orientations, simplicial chains and computations |
| `AT-2` | `singular-chains-and-singular-homology` | standard simplices, singular chains, functoriality, homotopy invariance, reduced homology |
| `AT-3` | `relative-homology-excision-and-mayer-vietoris` | pairs, connecting maps, subdivision, excision, Mayer--Vietoris |
| `AT-4` | `cw-complexes-and-cellular-homology` | CW topology, skeleta, cellular chains, attaching degrees, Euler characteristic |
| `AT-5` | `homology-axioms-degree-and-classical-applications` | Eilenberg--Steenrod axioms and uniqueness, degree and Brouwer applications |
| `AT-6` | `singular-cohomology-and-coefficient-theorems` | cochains, relative cohomology, UCT/Kunneth applications to spaces |
| `AT-7` | `cup-cap-cross-products-and-cohomology-rings` | Alexander--Whitney map, cup/cap/cross products and ring computations |
| `AT-8` | `orientations-poincare-lefschetz-and-alexander-duality` | local homology, orientation systems, fundamental classes, duality and separation |
| `AT-9` | `bocksteins-steenrod-squares-and-cohomology-operations` | connecting operations, reduced powers, Cartan/Adem relations and Wu classes |
| `AT-10` | `higher-homotopy-groups-and-cofiber-sequences` | relative homotopy, suspension/loop adjunction, cofibrations and Puppe sequences |
| `AT-11` | `fibrations-fiber-bundles-and-homotopy-exact-sequences` | Hurewicz fibrations, path-space replacement, fiber bundles, LES and monodromy |
| `AT-12` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | homotopy excision, Hurewicz, cellular/CW approximation, Whitehead and suspension |
| `AT-13` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | obstruction cocycles, $K(A,n)$, Postnikov systems, principal-bundle classifiers |
| `AT-14` | `the-serre-spectral-sequence-and-applications` | homology/cohomology Serre sequences, local coefficients, transgression, Gysin/Wang |
| `AT-15` | `topological-vector-bundles-and-grassmannian-classification` | bundle constructions, clutching and Grassmannian universal bundles |
| `AT-16` | `complex-topological-k-theory-and-bott-periodicity` | Grothendieck $K^0$, decomposed Bott proof and periodic generalized theory |
| `AT-17` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | extraordinary theories and homological/cohomological AHSS applications |
| `AT-18` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | Leray--Hirsch, Thom classes/isomorphism and Gysin maps |
| `AT-19` | `stiefel-whitney-and-euler-classes-by-universal-constructions` | real projective-bundle and Thom constructions, uniqueness and universal rings |
| `AT-20` | `chern-and-pontryagin-classes-by-splitting-and-complexification` | complex projective-bundle construction, splitting and real/complex comparison |

Every A page has its same-id `-examples` B companion, and every B page is a
dependency leaf. The largest A inventory and all verified measurements are
reported in §12 after being recomputed from this finished file.

### Full texts and source corpus

The two full core treatments are Allen Hatcher, *Algebraic Topology*, Chapters
2--5, and J. Peter May, *A Concise Course in Algebraic Topology*, Chapters
6--24. Hatcher's complete *Vector Bundles and K-Theory*, Miller's MIT 18.905
and 18.906 notes, Davis--Kirk, Milnor--Stasheff, and the focused AHSS notes of
Loizides and Ji provide independent graduate controls. Exact read ranges, URLs
and the per-pair matrix are in §6; source-heading dispositions are in §7.
Every one of the 568 proposed item rows now carries an inline source locator
copied from those read ranges; no item is unattributed.

### Seams consumed

- The authored page `homotopy-and-homotopy-equivalence` is cited with its exact
  published interfaces: `def-homotopy-relative-and-path-homotopy` defines a
  homotopy as a continuous $H:X\times I\to Y$, rel $A$ means
  $H(a,t)=f(a)=g(a)$, and `def-homotopy-equivalence` requires continuous
  $f,g$ with $gf\simeq\operatorname{id}_X$ and
  $fg\simeq\operatorname{id}_Y$. `thm-composition-respects-homotopy` supplies
  the precise pre/postcomposition statements, and
  `thm-a-deformation-retract-is-a-homotopy-equivalence` supplies the standard
  deformation-retract interface. None is re-minted.
- The authored page `the-fundamental-group` is cited with its exact convention:
  `def-based-loops-and-fundamental-group` sets
  $[\alpha][\beta]=[\alpha*\beta]$ with $\alpha$ traversed first, and
  `thm-induced-fundamental-group-map-functoriality` states
  $\operatorname{id}_*=\operatorname{id}$,
  $(g\circ f)_*=g_*\circ f_*$ and based-homotopy invariance. Higher-homotopy
  concatenations use the analogous first-coordinate convention.
- The planned topology pages `covering-spaces-and-lifting`,
  `the-fundamental-group-of-the-circle`, `the-seifert-van-kampen-theorem`,
  `classification-of-covering-spaces`, and
  `applications-of-the-fundamental-group` own their advertised low-dimensional
  theory. This track lists those page ids as prior requirements where needed
  and does not predict unminted item ids.
- Homological algebra supplies chain/cochain complexes, chain homotopy, mapping
  cones, long exact sequences, universal-coefficient and Kunneth algebra,
  filtered complexes, exact couples, convergence, Ext and Tor. `AT` constructs
  the topological chain functors and applies those algebraic results; it never
  proves them a second time.

### Seams owed

The exact amendments owed to differential geometry, differential topology,
algebraic geometry and the deferred catalogue are in §10. In particular,
`singular-cochains-mayer-vietoris-and-smooth-singular-comparison` must consume
AT-2/AT-3/AT-6 instead of minting singular chains and ordinary cochains, while
`the-de-rham-theorem-and-degree` consumes AT-7's cup product and AT-8's
cohomological degree/fundamental class. `DT` consumes AT-15 and AT-18--AT-20 for
characteristic-class constructions and owns their geometric applications.

### Forward references and blockers

The forward-reference ledger is §11. The only genuine cross-track forwards are
to the concurrent `AV` sheaf/Čech comparison interface and the concurrent `DT`
Morse-theory statement that a smooth manifold has CW homotopy type. They are
orientation-only except where the affected later track is itself the consumer.
No theorem in this AT block uses an unbuilt later page as a proof premise.

**Blockers: none.** Shell DNS was unavailable, so full PDFs were read through
the web reader rather than downloaded locally; this did not prevent exact page
and heading harvests. No permission prompt was raised.

---

## 1. Why this track exists

Below the anchor the library has point-set topology, homotopy of maps, the
fundamental group, abstract chain-complex machinery, derived functors, UCT,
Kunneth and spectral sequences. It has no authored singular chain, homology
group of a space, cohomology ring, higher homotopy group, fibration exact
sequence, classifying space, Thom class or characteristic class. The deferred
catalogue consequently carries the classical algebraic-topology backlog rather
than local proofs.

The purpose of this track is to make the topological constructions honest.
The singular boundary is derived from affine face identities before homology is
named. Homotopy invariance is a prism identity before it becomes a slogan.
Excision is a subdivision theorem before Mayer--Vietoris is invoked. Cellular
homology is derived from relative skeleta, not introduced as a second homology
theory. Cohomology products are chain maps before rings are computed. Duality
starts from local orientation classes, and characteristic classes arise from
universal bundles or Thom classes rather than from axioms asserted without an
existence proof.

---

## 2. What is deliberately not re-minted

| material | owner | treatment here |
|---|---|---|
| homotopy, homotopy equivalence, contraction, deformation retract | authored topology pages | cite exact published ids listed in §0 |
| fundamental group, induced maps, simple connectedness | authored topology page | cite; only higher $\pi_n$ and their agreement at $n=1$ are new |
| covering-space lifting/classification, $\pi_1(S^1)$, van Kampen | planned topology pages | page-level prerequisites; no duplicate item ids |
| chain complexes, chain homotopies, cones, LES, UCT/Kunneth algebra | homological algebra | instantiate and apply to topological chains |
| spectral sequences, exact couples, double complexes, convergence | homological algebra | cite; AT owns only Serre and AHSS constructions/applications |
| Ext, Tor, derived and triangulated machinery | homological algebra | cite where coefficient corrections occur |
| smooth manifolds, smooth vector bundles and tangent bundles | differential geometry | AT defines topological bundles; DG records underlying-topological agreement |
| Morse theory, handles, cobordism, Pontryagin--Thom, surgery | `DT` | cite Morse's CW-homotopy-type result; deny all applications |
| sheaves, Čech cohomology and sheaf cohomology | `AV` | comparison interface only; not defined here |
| de Rham cohomology and de Rham theorem | differential geometry | DG consumes singular cohomology and products from AT |
| characteristic classes as cobordism/signature/immersion/exotic-structure tools | `DT` | AT constructs the classes and proves universal identities only |
| Adams and Eilenberg--Moore spectral sequences | advanced stable/derived topology | named denial in §9; Serre and AHSS are complete here |

---

## 3. Standing conventions and convention audit

### 3.1 Chains, faces and coefficients

All homology is homological: $\partial_n:C_n\to C_{n-1}$ and
$H_n=\ker\partial_n/\operatorname{im}\partial_{n+1}$. The standard simplex is
$\Delta^n=\{(t_0,\ldots,t_n):t_i\ge0,\sum t_i=1\}$, including
$\Delta^0$. The $i$th affine coface inserts zero in the $i$th coordinate, and
$\partial\sigma=\sum_{i=0}^n(-1)^i\sigma\delta_i$ for $n\ge1$, with
$\partial_0=0$. Hatcher writes integral chains first and adds coefficients;
May begins axiomatically and later constructs singular theory. The library
defines $C_n(X;G)=C_n(X;\mathbb Z)\otimes G$, so coefficient change is visibly
an application of the homological-algebra tensor interface.

An abstract simplicial complex contains every singleton face of its vertex set;
the empty face is admitted as a combinatorial face but contributes in degree
$-1$ only to the **augmented** chain complex. Ordinary $C_n$ starts at $n=0$.
This resolves the common disagreement about whether the empty simplex is part
of the complex without forcing negative ordinary homology.

### 3.2 Reduced theories, empty spaces and pairs

Unreduced singular homology has $H_0(\varnothing)=0$. Reduced homology is
defined by the augmentation in nonnegative degrees, so
$\widetilde H_n(\varnothing)=0$ under this track's convention; no exceptional
$\widetilde H_{-1}(\varnothing)$ is used. Relative chains are
$C_*(X,A)=C_*(X)/C_*(A)$ for an actual subspace $A\subseteq X$, including
$A=\varnothing$ and $A=X$. Quotient well-definedness and the two degenerate
pairs are explicit obligations.

### 3.3 CW complexes

A CW complex is closure-finite with the weak topology. Characteristic maps are
part of a chosen cell structure; an attaching map is their restriction to the
boundary sphere. Sources vary between “CW complex” and “relative cell complex”
as the primary notion. This track defines both and never treats an arbitrary
subspace inclusion as a subcomplex. The cellular boundary is fixed by the
degree of the composite from an attaching sphere to the quotient sphere of an
$(n-1)$-cell; the sign depends on the chosen cell orientations and changes by
the corresponding basis sign, not the homology.

### 3.4 Cohomology products and signs

Cochains are $C^n(X;R)=\operatorname{Hom}(C_n(X;\mathbb Z),R)$ with
$(\delta\varphi)(c)=\varphi(\partial c)$; no extra $(-1)^{n+1}$ is inserted.
The Alexander--Whitney cup product has
$(\alpha\smile\beta)([v_0,\ldots,v_{p+q}])=
\alpha([v_0,\ldots,v_p])\beta([v_p,\ldots,v_{p+q}])$.
It is associative on cochains but graded-commutative only on cohomology. Cap
products use the front face for the cochain and the back face for the remaining
chain, with the displayed boundary formula in AT-7 fixing every later duality
sign. Sources that reverse front/back or use right cap products are translated.

### 3.5 Degree and orientations

For $n\ge1$, $S^n$ is oriented by the boundary orientation of the standard
$(n+1)$-ball. The degree of $f:S^n\to S^n$ is determined by
$f_*[S^n]=\deg(f)[S^n]$. The disconnected $S^0$ is treated separately; no
formula silently extends through $n=0$. For connected closed oriented
$n$-manifolds, degree is likewise defined on the integral fundamental class.
DG's smooth regular-value degree must be proved equal to this definition.

### 3.6 Homotopy groups and composition

$\pi_n(X,x_0)$ is based homotopy classes of maps
$(I^n,\partial I^n)\to(X,x_0)$, equivalently $[S^n,X]_*$ after the quotient
homeomorphism is proved. Multiplication concatenates in the first coordinate,
with the first factor traversed first, matching the authored $\pi_1$
convention. For $n\ge2$ the Eckmann--Hilton argument makes the group abelian.
Relative $\pi_n(X,A,x_0)$ uses maps of
$(I^n,\partial I^n,J^{n-1})$ with the distinguished face landing in $A$; this
cube convention is translated explicitly whenever a source uses disks.

### 3.7 Fibrations, local systems and spectral sequences

“Fibration” in the homotopy exact-sequence and spectral-sequence theorems means
Serre fibration and does not include surjectivity in the definition; Hurewicz
fibration is the stronger all-spaces lifting variant. A basepoint with nonempty
fiber is chosen componentwise. Numerable fiber bundles are Hurewicz fibrations;
no unrestricted implication is asserted. Serre homology uses
$d_r:E^r_{p,q}\to E^r_{p-r,q+r-1}$; cohomology uses
$d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$. The $E_2$ term carries the monodromy local
coefficient system unless the base is simply connected or the action is proved
trivial. “Converges” always means the precise filtered abutment supplied by
homological algebra, including extension problems.

### 3.8 Bundles and characteristic classes

Vector bundles have finite constant rank on each connected component; a
variable-rank family is not called one bundle unless the rank is locally
constant. Real, complex and quaternionic bundles are distinguished. The
projectivization convention is one-dimensional **subspaces**, not quotients;
tautological bundles and first Chern class signs follow that choice.

The Euler class of an oriented real rank-$n$ bundle is the pullback of its Thom
class by the zero section. Pontryagin classes use
$p_i(\xi)=(-1)^i c_{2i}(\xi\otimes_{\mathbb R}\mathbb C)$, Hatcher's
convention. Sources omitting $(-1)^i$ are translated. Chern classes are
normalized so $c_1$ of the tautological line bundle over
$\mathbb{CP}^{\infty}$ is the negative of the positive generator when that
generator is defined as $c_1$ of the dual hyperplane bundle; the scaffold
prints which line bundle supplies the chosen generator in every computation.

### 3.9 Existing-page agreements that must be literal

- Homotopy and relative homotopy mean exactly
  `def-homotopy-relative-and-path-homotopy`; no family-only continuity shortcut.
- Contractible means nonempty under
  `def-nullhomotopic-map-and-contractible-space`; reduced-homology statements
  therefore state the empty-space case separately.
- Simple connectedness means nonempty, path-connected, and trivial fundamental
  group at **every** basepoint, as in `def-simply-connected`.
- Loop products and all induced-map formulas match the first-path-first rule of
  `def-based-loops-and-fundamental-group`.

---

## 4. Component-provenance notation

Every mathematical-content row below states its two components explicitly.
Definitions and mathematical remarks use proof `not-applicable`; sourced
orientation remarks with no local proof use `not-supplied` only when nothing
depends on them. Theorems, propositions, lemmas, corollaries, examples and
counterexamples have source-derived statements and locally reorganized proofs
unless a named source proof is followed closely.

No theorem, proposition, lemma, corollary, definition or remark has an
`ai-generated` statement. No proposed dependency target has an `ai-generated`
statement. The few directly checkable B-page constructions are still backed by
the named literature and therefore use `literature-derived` or `ai-altered`,
not a fabricated fourth label.

For traceability, every item row ends with an inline **Source locator** naming
the treatment and exact section/page range actually read. This completion pass
changed no item id, pair, statement, rationale or provenance label.

---

## 5. Pair order and direct requirements

Each B page requires only its A companion and is a leaf.

| pair | direct requirements of the A page |
|---|---|
| `AT-1` | `subspaces-products-and-quotients`, `free-modules-and-exact-sequences`, `chain-complexes-and-homology` |
| `AT-2` | `AT-1`, `homotopy-and-homotopy-equivalence`, `chain-homotopy-and-the-homotopy-category` |
| `AT-3` | `AT-2`, `long-exact-sequences-in-homology`, `compactness-in-metric-spaces` |
| `AT-4` | `AT-1`, `AT-3`, `homotopy-and-homotopy-equivalence` |
| `AT-5` | `AT-4`, `AT-3` |
| `AT-6` | `AT-3`, `universal-coefficients-and-kunneth-theorems` |
| `AT-7` | `AT-6`, `AT-4` |
| `AT-8` | `AT-3`, `AT-7` |
| `AT-9` | `AT-7`, `AT-8` |
| `AT-10` | `AT-4`, `the-fundamental-group`, `homotopy-and-homotopy-equivalence`, `mapping-cones-cylinders-and-chain-triangles` |
| `AT-11` | `AT-10`, `covering-spaces-and-lifting`, `classification-of-covering-spaces` |
| `AT-12` | `AT-3`, `AT-4`, `AT-10`, `AT-11` |
| `AT-13` | `AT-6`, `AT-9`--`AT-12`, `applications-of-the-fundamental-group` |
| `AT-14` | `AT-6`, `AT-7`, `AT-11`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence` |
| `AT-15` | `AT-11`, `AT-13`, `partitions-of-unity-and-paracompactness` |
| `AT-16` | `AT-15`, `AT-7` |
| `AT-17` | `AT-4`, `AT-9`, `AT-16`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence` |
| `AT-18` | `AT-7`, `AT-8`, `AT-14`, `AT-15` |
| `AT-19` | `AT-9`, `AT-18` |
| `AT-20` | `AT-15`, `AT-18`, `AT-19` |

The AT labels in this table are relative splice instructions; the future spec
uses the A-page ids, not these labels.

---

# The pairs

## AT-1. Simplicial Complexes and Simplicial Homology

**A page:** `simplicial-complexes-and-simplicial-homology`
**B page:** `simplicial-complexes-and-simplicial-homology-examples`
**Requires:** `subspaces-products-and-quotients`,
`free-modules-and-exact-sequences`, `chain-complexes-and-homology`

The first page makes the finite combinatorics and its topology agree before
introducing chains. It uses abstract simplicial complexes, rather than
Hatcher's more permissive $\Delta$-complexes, because vertex-determined faces
make simplicial maps and subdivisions unambiguous. $\Delta$-complexes are
recorded as a useful later variant on the B page and never substituted silently.

### A-page items, in dependency order

- `def-abstract-simplicial-complex` — **definition** — a vertex set $V$ and a family $K$ of finite subsets closed under taking subsets, containing every singleton and the empty face; dimension is $|\sigma|-1$. For: fixes empty-face and $0$-simplex conventions. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-simplicial-subcomplex-star-closure-and-link` — **definition** — subcomplexes, closure of a face, open/closed star, and link, with all vertex-set restrictions typed. For: local calculations and barycentric subdivision. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-locally-finite-and-finite-dimensional-simplicial-complex` — **definition** — local finiteness concerns vertices lying in finitely many simplices; finite dimension is separate from finitely many simplices. For: prevents compactness/local-finiteness conflation. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-geometric-simplex-spanned-by-affinely-independent-vertices` — **definition** — convex hull with barycentric coordinates, including the unique point for dimension zero. For: gives the topological cell attached to each abstract face. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-barycentric-coordinates-are-unique` — **lemma** — affine independence gives unique coefficients summing to one. For: makes face intersections and induced affine maps well defined. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-geometric-realization-of-an-abstract-simplicial-complex` — **definition** — finitely supported barycentric functions whose support is a face, with the weak/simplex topology. For: constructs $|K|$ without choosing an embedding of the vertex set. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-geometric-simplices-intersect-in-the-realization-of-their-common-face` — **lemma** — $|\sigma|\cap|\tau|=|\sigma\cap\tau|$. For: discharges gluing and quotient identifications in the realization. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization` — **proposition** — a finite union of compact Euclidean simplices glued along closed faces is compact Hausdorff. For: licenses finite computations and later Lefschetz arguments. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-simplicial-map-and-its-geometric-realization` — **definition** — a vertex map carrying faces to faces, extended affinely. For: introduces functorial topology and permits collapsed simplices. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial` — **lemma** — weak-topology continuity and literal identity/composition laws. For: supports induced homology maps. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-orientation-of-a-simplex` — **definition** — vertex orderings modulo even permutation, with the two orientations identified only in dimension zero. For: fixes every boundary sign. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-an-odd-permutation-reverses-oriented-simplex-sign` — **lemma** — the free generator relation $[v_{\pi(0)},\ldots,v_{\pi(n)}]=\operatorname{sgn}(\pi)[v_0,\ldots,v_n]$. For: makes chain groups independent of a global vertex order. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-simplicial-chain-groups-and-boundary` — **definition** — free abelian groups on oriented $n$-simplices and $\partial[v_0,\ldots,v_n]=\sum_i(-1)^i[v_0,\ldots,\widehat v_i,\ldots,v_n]$, with $C_n=0$ for $n<0$. For: supplies the chain complex. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-simplicial-boundary-is-independent-of-oriented-representative` — **lemma** — permutations change both the generator and its alternating boundary by the same sign. For: discharges the quotient-by-orientation relation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `thm-the-simplicial-boundary-squares-to-zero` — **theorem** — every codimension-two face occurs twice with opposite signs. For: splits the key cancellation out of the homology definition. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-simplicial-cycles-boundaries-and-homology` — **definition** — $Z_n(K)$, $B_n(K)$ and $H_n^{\mathrm{simp}}(K)=Z_n/B_n$ as an instance of the earlier chain-complex theory. For: names the invariant only after $B_n\subseteq Z_n$. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-augmentation-and-reduced-simplicial-homology` — **definition** — the vertex-sum augmentation and augmented complex, including the empty-complex convention. For: uniform sphere and wedge calculations. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-the-simplicial-augmentation-is-a-chain-map` — **lemma** — every oriented edge has augmentation-zero boundary. For: validates reduced homology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-induced-simplicial-chain-map` — **definition** — a nondegenerately mapped oriented simplex goes to the image with induced orientation and a collapsed simplex goes to zero. For: handles simplicial maps that identify vertices. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-induced-simplicial-chain-maps-commute-with-boundaries` — **lemma** — cancellation of faces repeated after a vertex identification. For: the nontrivial well-definedness step in induced maps. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `prop-simplicial-homology-is-functorial` — **proposition** — identities and composites induce identities and composites on homology. For: turns computations into invariants. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-contiguous-simplicial-maps` — **definition** — $f(\sigma)\cup g(\sigma)$ is a simplex for every face $\sigma$. For: a combinatorial sufficient condition for homotopy. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-contiguous-simplicial-maps-have-homotopic-realizations` — **lemma** — the straight-line barycentric homotopy stays in the common simplex. For: connects the combinatorial and authored topological homotopy notions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology` — **theorem** — the explicit prism chain homotopy is constructed and checked. For: decomposes the invariance proof used in subdivision. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible` — **lemma** — coning every face to a selected vertex gives $\partial h+h\partial=1$. For: the local acyclicity engine. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `cor-the-simplex-has-zero-reduced-simplicial-homology` — **corollary** — immediate from the chain contraction. For: base case for gluing and subdivisions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `prop-zero-th-simplicial-homology-is-free-on-connected-components` — **proposition** — vertices agree modulo edge boundaries exactly within edge-path components. For: explains $H_0$ and includes the empty complex. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum` — **proposition** — chain groups split componentwise and the boundary preserves the split. For: arbitrary-component bookkeeping. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `def-simplicial-euler-characteristic` — **definition** — for a finite complex, $\chi(K)=\sum_n(-1)^nf_n$. For: prepares the homological formula. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `thm-euler-poincare-formula-for-a-finite-simplicial-complex` — **theorem** — $\chi(K)=\sum_n(-1)^n\operatorname{rank}H_n(K;\mathbb Z)$ when homology ranks are finite. For: splits the alternating-rank argument used later for CW complexes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.

### B page — `simplicial-complexes-and-simplicial-homology-examples`

- `ex-simplicial-homology-of-a-point-and-an-edge` — **example** — writes both augmented complexes. For: checks dimensions zero and one. **Provenance:** statement `literature-derived`; proof `literature-derived`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `ex-boundary-of-a-triangle-has-first-homology-z` — **example** — computes the cycle and boundary matrices. For: first nontrivial class. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `ex-simplicial-homology-of-the-tetrahedron-boundary` — **example** — computes $H_2\cong\mathbb Z$ and lower groups. For: finite model of $S^2$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `ex-a-contractible-simplicial-cone` — **example** — displays the coning homotopy. For: tests the acyclicity lemma. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `ex-two-contiguous-maps-of-a-subdivided-interval` — **example** — verifies the common-simplex condition. For: finite chain-homotopy check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `ex-a-finite-complex-with-euler-characteristic-zero` — **example** — a triangulated circle. For: checks Euler--Poincaré without torsion distractions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `cex-a-vertex-map-need-not-be-simplicial` — **counterexample** — sends the vertices of an edge to a nonface. For: shows the face condition is essential. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `cex-finite-dimensional-does-not-imply-finite-or-locally-finite` — **counterexample** — infinitely many edges through one vertex. For: separates the three finiteness notions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.
- `ex-a-delta-complex-structure-on-the-torus` — **example** — two triangles, three edges and one vertex with face identifications. For: records Hatcher's efficient variant without changing AT-1's abstract-complex convention. **Provenance:** statement `literature-derived`; proof `literature-derived`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 2 §2.1 and §2.C, pp. 102--109, 177--184; Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 and 3 §§3.1--3.4, pp. 4--13, 30--41.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, §2.1 “$\Delta$-Complexes” and “Simplicial
  Homology,” printed pp. 102--108, plus §2.C “Simplicial Approximation,”
  pp. 177--184 for contiguity/subdivision controls.
- May, *A Concise Course in Algebraic Topology*, Ch. 13 §2 “Cellular
  homology” and §5 “Some examples: $T$, $K$, and $\mathbb{RP}^n$,” printed
  pp. 97--106, and Ch. 16 §§2--4 “Geometric realization,” “Proofs of the
  theorems,” and “Simplicial objects,” pp. 124--128.
- Nanda, *Computational Algebraic Topology*, Lecture 1 §§1.1--1.5,
  printed pp. 4--13, and Lecture 3 §§3.1--3.4, pp. 30--41,
  https://people.maths.ox.ac.uk/nanda/cat/

### Proof architecture and boundary obligations

The proof of $\partial^2=0$ is split into orientation independence and paired
codimension-two cancellation. Functoriality is split into the collapsed-simplex
definition, boundary compatibility and passage to homology. Contiguity gets its
own geometric homotopy and chain-homotopy theorem. The cone contraction is
separate because it is reused by subdivision and local acyclicity.

Boundary pass: empty vertex/face data; $n=0,1$ in boundary formulas; repeated
vertices under a simplicial map; disconnected and empty complexes in $H_0$;
finite versus locally finite versus finite-dimensional; and orientation reversal
in dimension zero are all stated. No choice is required: all bases and the one
cone vertex used by a contraction are supplied.

**Forward references: NONE.**

---

## AT-2. Singular Chains and Singular Homology

**A page:** `singular-chains-and-singular-homology`
**B page:** `singular-chains-and-singular-homology-examples`
**Requires:** `simplicial-complexes-and-simplicial-homology`,
`homotopy-and-homotopy-equivalence`,
`chain-homotopy-and-the-homotopy-category`

Singular homology replaces a chosen triangulation by all continuous simplices.
The page constructs the chain functor and its homotopy invariance; subdivision,
excision and relative groups are postponed to AT-3 so the prism proof remains
visible rather than buried in a forty-page omnibus proof.

### A-page items, in dependency order

- `def-standard-topological-simplex-and-its-affine-face-maps` — **definition** — $\Delta^n$ and the zero-inserting cofaces $\delta_i$, including $n=0$. For: supplies universal domains and matches DG's required interface. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `lem-affine-face-maps-satisfy-the-cosimplicial-identities` — **lemma** — $\delta_j\delta_i=\delta_i\delta_{j-1}$ for $i<j$, with dimensions typed. For: isolates the cancellation behind $\partial^2=0$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-singular-simplex-and-singular-chain-group-with-coefficients` — **definition** — singular $n$-simplices are continuous $\Delta^n\to X$ and $C_n(X;G)=C_n(X;\mathbb Z)\otimes G$. For: gives arbitrary abelian coefficients without pretending a preferred basis over $G$. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-singular-boundary-operator` — **definition** — alternating affine faces, $\partial_0=0$, and zero chain groups in negative degrees. For: the topological chain complex. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `thm-the-singular-boundary-squares-to-zero` — **theorem** — the cosimplicial identities pair terms with opposite signs, including the low degrees separately. For: validates the chain complex. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-singular-chain-complex-and-singular-homology` — **definition** — $C_*(X;G)$ and $H_n(X;G)$ as the homology of that complex. For: names the invariant after all quotient obligations close. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-induced-singular-chain-map` — **definition** — $f_\#(\sigma)=f\circ\sigma$, extended linearly/tensorially. For: converts continuous maps to chain maps. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `lem-induced-singular-chain-maps-commute-with-boundaries` — **lemma** — postcomposition commutes with every affine face. For: licenses induced homology maps. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `prop-singular-chains-and-homology-are-covariantly-functorial` — **proposition** — identity/composition laws at chain and homology levels. For: exact topological functoriality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-zero-simplex-augmentation-and-reduced-singular-homology` — **definition** — $\varepsilon:C_0(X;G)\to G$ and the augmented complex, with the empty-space convention. For: reduced exact sequences and suspension. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `lem-singular-augmentation-commutes-with-boundary` — **lemma** — endpoints of every singular $1$-simplex have coefficient sum zero. For: makes reduced homology well defined. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `prop-zero-th-singular-homology-is-free-on-path-components` — **proposition** — $H_0(X;\mathbb Z)$ is free on path components, and $\widetilde H_0$ is the augmentation kernel. For: exact interpretation of degree zero and non-path-connected cases. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `cor-path-connected-spaces-have-zero-reduced-zero-th-homology` — **corollary** — includes nonemptiness explicitly. For: frequent base case in exact sequences. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum` — **proposition** — every simplex lands in one component because $\Delta^n$ is connected. For: componentwise reduction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-prism-operator-for-a-homotopy` — **definition** — triangulates $\Delta^n\times I$ into the standard $n+1$ signed prisms. For: makes homotopy invariance a chain formula. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `lem-the-prism-triangulation-has-the-stated-oriented-boundary` — **lemma** — interior prism faces cancel and the two ends survive with the correct signs. For: separates the geometric sign computation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `thm-singular-chain-homotopy-formula` — **theorem** — for $H:f\simeq g$, $g_\#-f_\#=\partial P+P\partial$. For: exact chain-level homotopy invariance and DG interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `cor-homotopic-maps-induce-the-same-map-on-singular-homology` — **corollary** — applies chain-homotopy invariance from homological algebra. For: primary topological invariance theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology` — **theorem** — the induced maps of homotopy inverses compose to identities. For: makes homology an invariant of authored homotopy type. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `cor-contractible-nonempty-spaces-have-the-homology-of-a-point` — **corollary** — uses the library's nonempty contractibility convention. For: calculation engine for convex sets and cells. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `prop-singular-homology-is-invariant-under-deformation-retracts` — **proposition** — inclusion and retraction induce inverse homology maps. For: geometric reductions such as punctured Euclidean space to spheres. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-singular-chain-cross-product-on-generators` — **definition** — the Eilenberg--Zilber shuffle sum on $\sigma\times\tau$. For: prepares Kunneth, cross and cup products without proving the full theorem here. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `lem-singular-chain-cross-product-boundary-formula` — **lemma** — $\partial(a\times b)=\partial a\times b+(-1)^p a\times\partial b$. For: the load-bearing sign used on AT-6/AT-7. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `prop-singular-chain-cross-products-are-natural` — **proposition** — $(f\times g)_\#(a\times b)=f_\#a\times g_\#b$. For: natural Kunneth applications. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-fundamental-singular-cycle-of-an-oriented-simplex` — **definition** — the affine identity simplex with boundary orientation. For: the comparison map from simplicial to singular chains. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `def-simplicial-to-singular-chain-map` — **definition** — sends each oriented simplex of $K$ to its affine characteristic singular simplex in $|K|$. For: begins comparison of the two theories. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `lem-simplicial-to-singular-chains-commute-with-boundaries` — **lemma** — affine face restrictions reproduce the simplicial boundary. For: validates comparison before AT-3 proves it is an isomorphism. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.

### B page — `singular-chains-and-singular-homology-examples`

- `ex-singular-chain-complex-of-a-point` — **example** — computes the alternating boundary in every degree and its contraction. For: checks degenerate simplices rather than assuming they vanish. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `ex-boundaries-of-the-standard-one-and-two-simplices` — **example** — writes all signed faces. For: verifies low-degree conventions. **Provenance:** statement `literature-derived`; proof `literature-derived`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex` — **example** — shows every vertex twice with opposite signs. For: finite audit of the general proof. **Provenance:** statement `literature-derived`; proof `literature-derived`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `ex-the-prism-operator-for-a-path-homotopy` — **example** — the square is cut into two oriented triangles. For: visual low-dimensional chain homotopy. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `ex-homology-of-an-interval-from-contractibility` — **example** — uses the authored straight-line contraction. For: demonstrates dependency reuse. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `ex-homology-of-punctured-euclidean-space-by-deformation-retraction` — **example** — reduces to the sphere without yet computing sphere homology. For: records the exact output available at this stage. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `cex-equal-homology-does-not-imply-homotopy-equivalence` — **counterexample** — a source-backed pair distinguished by fundamental group. For: bounds the invariant. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.
- `cex-a-singular-cochain-is-not-a-finite-singular-chain` — **counterexample** — contrasts finite-support chains with arbitrary homomorphisms, ahead of AT-6. For: blocks a frequent dualization error. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 108--113, 153--159.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, §2.1 “Singular Homology” and “Homotopy
  Invariance,” printed pp. 108--113, especially Theorem 2.10 and Proposition
  2.12; §2.2 “Homology with Coefficients,” pp. 153--159 for coefficient and
  cross-product conventions.
- May, *A Concise Course in Algebraic Topology*, Ch. 16 §§1--3 “The singular
  chain complex,” “Geometric realization,” and “Proofs of the theorems,”
  printed pp. 123--126; Ch. 14 §1 “Reduced homology,” pp. 107--108.

### Proof architecture and boundary obligations

Face identities, $\partial^2=0$, chain-map compatibility and functoriality are
four separate proofs. The prism theorem is decomposed into triangulation,
oriented-boundary cancellation and the chain-homotopy identity. The point and
empty space are treated directly, as are $n=0$ and $n=1$. Tensor coefficients
are typed over $\mathbb Z$, and no field-only basis duality is used. Singular
chains have finite support by definition, so no choice is spent in the prism or
cross product.

**Forward references: NONE.**

---

## AT-3. Relative Homology, Excision, and Mayer--Vietoris

**A page:** `relative-homology-excision-and-mayer-vietoris`
**B page:** `relative-homology-excision-and-mayer-vietoris-examples`
**Requires:** `singular-chains-and-singular-homology`,
`long-exact-sequences-in-homology`, `compactness-in-metric-spaces`

The page starts from the quotient complex of a pair and builds the geometric
input that makes excision true. Barycentric subdivision is not merely cited for
mesh shrinkage: its chain-map and chain-homotopy identities are isolated before
small-chain equivalence, excision and Mayer--Vietoris.

### A-page items, in dependency order

- `def-singular-chain-complex-of-a-pair` — **definition** — $C_*(X,A;G)=C_*(X;G)/C_*(A;G)$ for $A\subseteq X$. For: introduces relative chains with $A=\varnothing,X$ admitted. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `lem-singular-boundary-descends-to-relative-chains` — **lemma** — $C_*(A)$ is a subcomplex, so the quotient differential is well defined and squares to zero. For: discharges representative independence. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-relative-singular-homology` — **definition** — $H_n(X,A;G)$ is homology of the quotient complex. For: names the invariant only after the quotient complex closes. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `prop-relative-homology-is-functorial-for-maps-of-pairs` — **proposition** — $f(A)\subseteq B$ gives $f_*:H_n(X,A)\to H_n(Y,B)$. For: maps of pairs and naturality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `prop-relative-homology-of-the-empty-and-total-subspace` — **proposition** — $H_n(X,\varnothing)\cong H_n(X)$ and $H_n(X,X)=0$. For: closes the two degenerate pairs. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-long-exact-sequence-of-a-pair-in-singular-homology` — **theorem** — applies the homological-algebra LES to $0\to C_*(A)\to C_*(X)\to C_*(X,A)\to0$. For: the main relative calculation spine. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-relative-homology-connecting-homomorphism-on-cycles` — **definition** — lift a relative cycle, take its boundary in $A$, and pass to homology. For: identifies the abstract connector geometrically. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `lem-the-relative-connecting-map-is-independent-of-lift-and-representative` — **lemma** — changes differ by chains whose boundaries give the same class. For: quotient and lift well-definedness. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-naturality-of-the-long-exact-sequence-of-a-pair` — **theorem** — maps of pairs commute with every arrow, including the connector. For: later excision and cellular boundary diagrams. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-barycenter-and-affine-cone-on-a-singular-chain` — **definition** — affine coning inside a simplex and its boundary formula. For: recursive subdivision. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-barycentric-subdivision-chain-operator` — **definition** — subdivides a singular simplex by coning subdivided faces to its barycenter. For: constructs small chains. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-barycentric-subdivision-is-a-chain-map` — **theorem** — cone-boundary induction proves $S\partial=\partial S$. For: one half of subdivision invariance. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-barycentric-subdivision-prism-homotopy` — **definition** — recursively constructs $T$ between $S$ and the identity. For: the second half of subdivision invariance. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity` — **theorem** — $S-1=\partial T+T\partial$. For: proves subdivision preserves homology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero` — **lemma** — each subdivision contracts diameter by at most $n/(n+1)$ in dimension $n$. For: supplies the compactness estimate. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-cover-small-singular-chain-subcomplex` — **definition** — chains generated by simplices lying in one member of an open cover $\mathcal U$. For: exact local-to-global chain object. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` — **lemma** — compactness of each simplex and a finite maximum of least depths. For: avoids a false uniform depth over all simplices. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-cover-small-singular-chains-compute-singular-homology` — **theorem** — inclusion induces an isomorphism, with surjectivity and injectivity proved separately using $S$ and $T$. For: excision and DG comparison. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` — **theorem** — a least-subdivision-depth map and compatible homotopy are built on the supplied singular-simplex basis. For: the stronger cochain-safe interface required by DG-16. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-excision-for-singular-homology` — **theorem** — if $\overline Z\subseteq\operatorname{int}_X A$, then $(X-Z,A-Z)\to(X,A)$ induces isomorphisms in all degrees. For: the central geometric axiom with exact closure hypothesis. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` — **corollary** — for a good pair $(X,A)$ with $A$ nonempty, $H_n(X,A)\cong\widetilde H_n(X/A)$. For: cell attachment and cofiber computations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes` — **lemma** — for $X=U\cup V$, $C_*^{\{U,V\}}(X)=C_*(U)+C_*(V)$. For: the Mayer--Vietoris short exact sequence. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence` — **theorem** — $0\to C_*(U\cap V)\to C_*(U)\oplus C_*(V)\to C_*^{\{U,V\}}(X)\to0$ with signs printed. For: algebraic input to MV. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-mayer-vietoris-sequence-in-singular-homology` — **theorem** — replaces small chains by ordinary chains up to homology and identifies all maps. For: primary gluing computation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `def-mayer-vietoris-connecting-class` — **definition** — subdivide a cycle as $a+b$ and take the overlap boundary class. For: explicit connector used in computations. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition` — **lemma** — different decompositions change the overlap chain by a boundary. For: discharges all choices in the explicit formula. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-naturality-of-singular-mayer-vietoris` — **theorem** — cover-preserving maps commute with the long exact sequences and connectors. For: comparison theorems and spectral-sequence edge calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` — **theorem** — the AT-2 comparison map is an isomorphism, proved by skeleton induction and local simplex acyclicity. For: transfers finite calculations to topological realizations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `cor-homology-of-spheres` — **corollary** — $\widetilde H_k(S^n;G)$ is $G$ at $k=n$ and zero otherwise, including $n=0$ separately. For: degree, Hurewicz and duality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `cor-suspension-isomorphism-in-reduced-singular-homology` — **corollary** — $\widetilde H_{n+1}(\Sigma X;G)\cong\widetilde H_n(X;G)$ for based well-pointed $X$. For: cofiber and stable calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.

### B page — `relative-homology-excision-and-mayer-vietoris-examples`

- `ex-relative-homology-of-a-disk-and-its-boundary` — **example** — computes $H_k(D^n,S^{n-1})$. For: cellular-chain local model. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `ex-relative-homology-of-an-interval-and-its-endpoints` — **example** — includes both endpoints and the connecting map. For: low-dimensional LES check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `ex-first-barycentric-subdivision-of-a-triangle` — **example** — lists the six oriented triangles and cancellations. For: finite verification of $S\partial=\partial S$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` — **example** — exhibits the subdivision depth and overlap connector. For: concrete MV calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `ex-mayer-vietoris-computation-of-sphere-homology` — **example** — uses two contractible hemispherical opens. For: independent check of the sphere corollary. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `ex-mayer-vietoris-computation-of-the-torus-first-homology` — **example** — chooses a cover with controlled intersection components. For: nontrivial connector/rank bookkeeping. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `cex-excision-fails-without-the-closure-inside-interior-hypothesis` — **counterexample** — a source-standard pair where deleting a boundary point changes relative homology. For: shows the hypothesis is load-bearing. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` — **counterexample** — increasingly oscillatory simplices. For: blocks a false global-uniform statement. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.
- `cex-relative-homology-is-not-the-homology-of-the-set-difference` — **counterexample** — compares $(D^n,S^{n-1})$ with the open ball. For: clarifies quotient rather than complement. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.1 and §2.2, pp. 113--133, 149--153.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, §2.1 “Exact Sequences and Excision,” printed
  pp. 113--132, especially Theorem 2.13, Proposition 2.21 and Theorem 2.20;
  §2.2 “Mayer--Vietoris Sequences,” pp. 149--153.
- May, *A Concise Course in Algebraic Topology*, Ch. 14 §§2--6
  “Cofibrations and the homology of pairs” through “The homology of colimits,”
  printed pp. 108--116, and Ch. 16 §3 “Proofs of the theorems,” pp. 125--126.

### Proof architecture and boundary obligations

The pair LES is an algebraic application, but its connector receives separate
lift/representative proofs. Excision is decomposed into cone identities,
subdivision as a chain map, subdivision homotopy, mesh decay, eventual
smallness, small-chain equivalence, and only then the quotient comparison. MV
is decomposed into a chain sum/intersection lemma, short exact sequence,
identified connector and naturality.

Boundary pass: $A=\varnothing,X$; $U\cap V=\varnothing$; zero chains; degree
zero; empty sphere/suspension conventions; closure versus interior in excision;
finite support versus a purported uniform subdivision depth. All subdivision
depths are least natural numbers and finite maxima, so the proofs are ZF.

**Forward references: NONE.**

---

## AT-4 — `cw-complexes-and-cellular-homology`

**A page:** `cw-complexes-and-cellular-homology`
**B page:** `cw-complexes-and-cellular-homology-examples`
**Requires:** `relative-homology-excision-and-mayer-vietoris`

This pair makes the skeletal filtration usable rather than treating “CW
complex” as a picture.  The closure-finite and weak-topology clauses, relative
CW pairs and infinite skeleta are kept visible; the cellular boundary is then
constructed from the exact couple of three consecutive skeleta and identified
with attaching-map degrees.

### A-page items, in dependency order

- `def-cell-attachment-by-a-characteristic-map` — **definition** — forms $X\cup_fD^n$ as a pushout along $f:S^{n-1}\to X$, with the $n=0$ attachment interpreted from $S^{-1}=\varnothing$. For: fixes the quotient topology and the zero-cell boundary case. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure` — **lemma** — the quotient is injective on $\mathring D^n$, while its restriction to $D^n$ is the characteristic map onto the cell closure. For: separates the open cell from a possibly nonembedded closure. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-cw-complex-with-closure-finiteness-and-weak-topology` — **definition** — a space is partitioned into open cells with characteristic maps, finite closure incidence, and the weak topology determined by closed cell closures. For: states both clauses that infinite examples need. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-skeleta-cw-subcomplex-and-relative-cw-complex` — **definition** — defines $X^n$, unions of whole cells closed under closure, and a CW pair obtained by attaching cells to a subcomplex. For: the filtration and all relative inductions. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition` — **proposition** — each $X^n$ is closed and $X^n-X^{n-1}$ is the disjoint union of its $n$-cells. For: justifies the filtration quotient. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` — **lemma** — closure finiteness and weak topology force finite cell support for compact subsets. For: compact-domain factorisations and later cellular approximation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex` — **corollary** — a continuous map from compact $K$ has image in the finite subcomplex generated by the cells it meets. For: removes illicit finite-dimensional assumptions from sphere maps. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `prop-relative-cw-inclusions-are-cofibrations` — **proposition** — $A\hookrightarrow X$ has the homotopy extension property when $(X,A)$ is a relative CW complex. For: makes quotient and homotopy-extension arguments legal. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology` — **proposition** — a map $X\to Y$ is continuous iff all restrictions $X^n\to Y$ are continuous. For: glues skeletal constructions through infinite dimension. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `thm-relative-homology-of-consecutive-cw-skeleta` — **theorem** — $H_k(X^n,X^{n-1};G)$ is zero for $k\ne n$ and is the direct sum of one copy of $G$ per $n$-cell for $k=n$. For: identifies cellular generators without assuming finitely many cells. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-oriented-cellular-chain-group` — **definition** — $C_n^{\mathrm{cell}}(X;G)=H_n(X^n,X^{n-1};G)$ with a generator selected by an orientation of each characteristic disk. For: turns the relative group into a concrete free module. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-cellular-boundary-from-three-consecutive-skeleta` — **definition** — the connecting map for $(X^n,X^{n-1},X^{n-2})$, followed by the quotient map, defines $d_n:C_n^{\mathrm{cell}}\to C_{n-1}^{\mathrm{cell}}$. For: isolates the exact origin and sign of the boundary. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `lem-the-cellular-boundary-squares-to-zero` — **lemma** — exactness in the triple-of-skeleta diagram gives $d_{n-1}d_n=0$. For: closes the cellular chain complex. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-cellular-homology` — **definition** — the homology of $(C_*^{\mathrm{cell}}(X;G),d)$, with zero groups in negative degree. For: names the computable invariant. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `lem-skeletal-homology-stabilizes-away-from-the-cell-dimension` — **lemma** — $H_k(X^n)\to H_k(X^{n+1})$ is an isomorphism for $k<n$ and a surjection for $k=n$. For: the comparison induction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology` — **lemma** — every singular cycle and bounding chain has compact image and hence finite skeletal support. For: closes the infinite-CW case without a hidden finiteness axiom. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `thm-cellular-homology-computes-singular-homology` — **theorem** — the filtration exact sequences identify $H_n(C_*^{\mathrm{cell}}(X;G))\cong H_n(X;G)$ naturally. For: licenses all cellular calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `thm-relative-cellular-homology-computes-relative-singular-homology` — **theorem** — for a CW pair $(X,A)$, the quotient cellular complex generated by cells of $X-A$ computes $H_*(X,A;G)$. For: later Thom and obstruction calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-incidence-number-of-two-cw-cells` — **definition** — collapses $X^{n-1}$ off an $(n-1)$-cell and takes the degree of the resulting attaching map $S^{n-1}\to S^{n-1}$. For: the integral boundary matrix. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `thm-cellular-boundary-is-the-incidence-degree-matrix` — **theorem** — $d_ne^n_\alpha=\sum_\beta [e^n_\alpha:e^{n-1}_\beta]e^{n-1}_\beta$, with the orientation signs checked. For: converts topology to explicit integer linear algebra. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `prop-cellular-maps-induce-cellular-chain-maps` — **proposition** — a skeletal map $f(X^n)\subseteq Y^n$ induces a natural chain map compatible with singular homology. For: functorial calculations before the approximation theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary` — **corollary** — each boundary matrix has either zero source or target. For: even-cell complexes and projective spaces. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `def-euler-characteristic-of-a-finite-cw-complex` — **definition** — $\chi(X)=\sum_n(-1)^nc_n$ for finitely many cells. For: a presentation-level invariant before proving independence. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `thm-euler-poincare-formula-for-finite-cw-complexes` — **theorem** — $\chi(X)=\sum_n(-1)^n\operatorname{rank}H_n(X;\mathbb Z)$. For: proves independence of the chosen finite CW structure. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `prop-euler-characteristic-is-additive-for-finite-cw-pairs` — **proposition** — $\chi(X)=\chi(A)+\chi(X,A)$ and hence $\chi(X/A)=\chi(X)-\chi(A)+1$ when $A\ne\varnothing$. For: later duality and bundle checks. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `prop-euler-characteristic-of-a-finite-cw-product` — **proposition** — $\chi(X\times Y)=\chi(X)\chi(Y)$ for finite CW complexes. For: supplies a cheap product invariant from product cells. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.

### B page — `cw-complexes-and-cellular-homology-examples`

- `ex-cellular-homology-of-real-projective-space` — **example** — the degree-$2$ incidence maps compute integral homology in every dimension, including $\mathbb{RP}^0$. For: tests alternating boundary matrices. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space` — **example** — one cell in each even dimension gives its additive homology. For: input to the later cup-product computation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `ex-cellular-boundary-matrix-of-a-closed-orientable-surface` — **example** — the standard polygon attachment has zero degree on each one-cell and yields $H_2\cong\mathbb Z$. For: finite attaching-word verification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `ex-cellular-homology-of-a-lens-space` — **example** — its three-dimensional CW structure yields the $p$-torsion boundary. For: shows incidence degrees detect torsion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `ex-cellular-homology-of-an-infinite-dimensional-projective-space` — **example** — computes each degree through a finite skeleton and takes the colimit. For: tests the infinite-CW lemma. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic` — **example** — compares one-vertex/one-edge and subdivided presentations. For: concrete invariance check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball` — **counterexample** — the standard one-cell presentation of $S^1$ identifies the two boundary points. For: prevents “regular CW” from being silently assumed. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex` — **counterexample** — the weak-topology clause fails for a source-standard infinite wedge variant. For: shows why the topology clause is load-bearing. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.
- `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells` — **counterexample** — compactness meets infinitely many proposed cells. For: tests the finite-cell compactness lemma. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 0 and Ch. 2 §2.2, pp. 5--20, 137--149.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 0 “Cell Complexes,” printed pp. 5--20,
  and Chapter 2 §2.2 “Cellular Homology,” pp. 137--149.
- Miller, *Lectures on Algebraic Topology*, §§14--18 “CW-Complexes” through
  “Euler Characteristic and Homology Approximation,” printed pp. 35--47.
- May, *A Concise Course in Algebraic Topology*, Chapter 10 “CW Complexes,”
  printed pp. 73--82, and Chapter 13 §§2--3, pp. 97--106.

## AT-5 — `homology-axioms-degree-and-classical-applications`

**A page:** `homology-axioms-degree-and-classical-applications`
**B page:** `homology-axioms-degree-and-classical-applications-examples`
**Requires:** `cw-complexes-and-cellular-homology`

This page separates two often-compressed arguments.  First it proves that the
singular construction satisfies the Eilenberg--Steenrod axioms and that those
axioms determine a theory on CW pairs.  Then it develops sphere degree and only
the classical consequences available from homology; classification of sphere
maps waits for AT-12.

### A-page items, in dependency order

- `def-unreduced-homology-theory-on-cw-pairs` — **definition** — a sequence of covariant functors on CW pairs with connecting maps satisfying homotopy, long exactness, excision, dimension and arbitrary disjoint-union additivity. For: adopts the convention used in the uniqueness proof. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-singular-homology-satisfies-homotopy-exactness-and-excision` — **theorem** — packages the already-proved chain homotopy, pair LES and excision with their naturality. For: verifies the three structural axioms without reminting their proofs. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-singular-homology-satisfies-dimension-and-arbitrary-additivity` — **theorem** — a point has homology only in degree zero and a disjoint union has the direct-sum homology of its components. For: completes the axiom verification, including infinite unions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `def-reduced-homology-theory-and-augmentation` — **definition** — for nonempty based spaces the kernel of $H_*(X)\to H_*(*)$ gives the reduced theory, with the empty-space degree $-1$ convention stated separately. For: prevents ambiguity at $\varnothing$ and in suspension. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs` — **proposition** — cofibration quotients translate exactness/excision into the reduced exact-cofiber form and additivity into the wedge axiom. For: reconciles the Hatcher and May formulations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group` — **lemma** — suspension and dimension give $h_k(D^n,S^{n-1})=0$ for $k\ne n$ and $h_n(D^n,S^{n-1})\cong h_0(*)$. For: base input to cellular uniqueness. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair` — **lemma** — exactness and excision identify the skeletal $E^1$ groups and their boundary maps. For: reconstructs a theory from coefficients. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage` — **lemma** — a coefficient isomorphism and the five lemma extend a natural comparison from $X^{n-1}$ to $X^n$. For: focused induction step in uniqueness. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs` — **theorem** — homology theories with the same coefficient group are uniquely naturally isomorphic on finite-dimensional CW pairs. For: identifies axiomatic and singular homology without a dimension shortcut. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit` — **lemma** — the finite-subcomplex comparison maps are compatible and determine the theory on an arbitrary CW pair. For: isolates the infinite extension omitted in abbreviated treatments. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs` — **theorem** — with arbitrary additivity, a coefficient isomorphism determines a unique natural equivalence on all CW pairs. For: the actual uniqueness interface consumed later. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `def-degree-of-a-self-map-of-an-oriented-sphere` — **definition** — for $n\ge1$, $f_*[S^n]=\deg(f)[S^n]$ in $H_n(S^n;\mathbb Z)$. For: fixes the generator and excludes the exceptional $S^0$ case. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition` — **proposition** — $\deg(f)=\deg(g)$ for homotopic maps and $\deg(gf)=\deg(g)\deg(f)$. For: the basic obstruction calculus. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps` — **proposition** — the values are $1,0,-1,$ and $(-1)^{n+1}$ with orientation choices printed. For: standard sign reference. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `prop-suspension-preserves-sphere-map-degree` — **proposition** — under the suspension orientation, $\deg(\Sigma f)=\deg(f)$. For: inductive degree calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `prop-every-integer-occurs-as-the-degree-of-a-sphere-map` — **proposition** — pinching and folding, with an orientation reversal for negative integers, constructs a map of degree $d$. For: existence only, not homotopy classification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `lem-a-map-of-nonzero-degree-between-spheres-is-surjective` — **lemma** — omitting a point factors through a contractible complement and forces zero on top homology. For: Brouwer and no-retraction arguments. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-no-retraction-from-a-disk-onto-its-boundary` — **theorem** — a retraction contradicts the pair LES or the induced top-homology map. For: the homological core of fixed-point theory. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-brouwer-fixed-point-theorem` — **theorem** — every continuous $D^n\to D^n$ has a fixed point, with $n=0$ separated. For: the classical degree application. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere` — **theorem** — normalising a hypothetical field homotopes the identity to the antipodal map, whose degrees disagree for even $n$. For: degree detects the hairy-ball obstruction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field` — **proposition** — the standard complex-coordinate rotation gives an explicit field. For: closes the iff and checks the positive direction directly. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd` — **theorem** — combines the two directions for $n\ge1$. For: records the exact classical conclusion without moving into DT characteristic-class applications. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `def-local-degree-at-an-isolated-preimage` — **definition** — excision transports the map of local relative homology groups to an integer after local orientations are chosen. For: finite preimage formulas and manifold degree later. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-global-sphere-degree-is-the-sum-of-local-degrees` — **theorem** — for a value with finitely many isolated preimages, $\deg f=\sum_x\deg_x f$. For: turns a global invariant into checkable local signs. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `thm-invariance-of-dimension-for-euclidean-spaces` — **theorem** — a homeomorphism $\mathbb R^m\cong\mathbb R^n$ forces $m=n$ by punctured-space homology. For: a boundary theorem independent of the later invariance-of-domain result. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.

### B page — `homology-axioms-degree-and-classical-applications-examples`

- `ex-degree-of-the-circle-power-map` — **example** — $z\mapsto z^d$ has degree $d$, including $d=0$ and negative $d$. For: anchors signs and the local-degree sum. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `ex-degree-of-a-coordinate-reflection-on-a-sphere` — **example** — a single reflection has degree $-1$. For: finite cellular verification of orientation reversal. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `ex-degree-of-the-antipodal-map-in-low-dimensions` — **example** — checks $S^1,S^2,S^3$ against $(-1)^{n+1}$. For: parity audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere` — **example** — a regular value counts signed preimages and recovers the global degree. For: local-to-global calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `ex-two-homology-theories-with-different-coefficient-groups` — **example** — ordinary integral and mod-$p$ homology agree on the axioms but not on the dimension object. For: shows why coefficient data is part of uniqueness. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `cex-degree-zero-does-not-imply-a-sphere-map-is-constant` — **counterexample** — a source-standard pinch with cancelling degrees is nonconstant. For: prevents a false converse to nonzero-degree surjectivity. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero` — **counterexample** — $H_0(S^0)$ has rank two and its endomorphism is not one integer. For: explains the $n\ge1$ restriction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.
- `cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness` — **counterexample** — records the missing infinite-wedge control in a non-additive extraordinary theory example from the source. For: makes the arbitrary-additivity hypothesis visible. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §2.2 and §2.3, pp. 134--137, 160--165; May, Chs. 13--15, pp. 95--122.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 2 §2.2 “Degree,” printed pp. 134--137,
  and §2.3 “Axioms for Homology,” pp. 160--165.
- Miller, *Lectures on Algebraic Topology*, §§9--11, printed pp. 19--29,
  especially Brouwer and degree at pp. 27--28.
- May, *A Concise Course in Algebraic Topology*, Chapters 13--15, printed
  pp. 95--122, especially Chapter 15 §2 “The uniqueness of the homology of CW
  complexes,” pp. 119--122.  No second complete open proof of the all-CW
  uniqueness theorem was found; the matrix records a dash rather than a passing
  statement from another source.

## AT-6 — `singular-cohomology-and-coefficient-theorems`

**A page:** `singular-cohomology-and-coefficient-theorems`
**B page:** `singular-cohomology-and-coefficient-theorems-examples`
**Requires:** `homology-axioms-degree-and-classical-applications`,
`universal-coefficients-and-kunneth-theorems`

The algebraic UCT and Künneth theorems remain owned by homological algebra.
This page constructs topological cochains and applies those imported theorems,
including their splitting and finiteness qualifications.  Multiplication is
deliberately postponed to AT-7.

### A-page items, in dependency order

- `def-singular-cochain-complex-with-coefficients` — **definition** — $C^n(X;G)=\operatorname{Hom}(C_n(X;\mathbb Z),G)$ and $\delta\varphi=\varphi\partial$ in positive cohomological grading. For: fixes the differential convention consumed by DG. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `lem-the-singular-coboundary-squares-to-zero` — **lemma** — $\delta^2\varphi=\varphi\partial^2=0$. For: closes the cochain complex. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `def-singular-cohomology-with-coefficients` — **definition** — $H^n(X;G)=\ker\delta^n/\operatorname{im}\delta^{n-1}$, with $H^n=0$ for $n<0$. For: names the invariant after well-definedness. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `prop-singular-cohomology-is-contravariantly-functorial` — **proposition** — $f^*\varphi=\varphi f_*$ gives identity and composition laws on cohomology. For: the exact DG smooth-comparison interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology` — **theorem** — dualising the prism chain homotopy gives a cochain homotopy. For: homotopy invariance without universal-coefficient shortcuts. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `def-relative-singular-cochain-complex` — **definition** — $C^*(X,A;G)=\operatorname{Hom}(C_*(X,A;\mathbb Z),G)$, equivalently cochains on $X$ vanishing on $A$. For: relative products and compact supports later. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-long-exact-sequence-of-a-pair-in-singular-cohomology` — **theorem** — the short exact cochain sequence yields the contravariantly ordered LES and explicit connector. For: the first required interface for DG-16. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-naturality-of-the-singular-cohomology-pair-sequence` — **theorem** — maps of pairs commute with restrictions and connecting maps. For: comparison diagrams. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-excision-for-singular-cohomology` — **theorem** — under $\overline Z\subseteq\operatorname{int}A$, restriction induces $H^*(X,A;G)\cong H^*(X-Z,A-Z;G)$. For: cohomological locality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-mayer-vietoris-sequence-in-singular-cohomology` — **theorem** — an open cover $X=U\cup V$ gives the cohomological LES with difference of restrictions and its natural connector. For: the second exact DG-16 interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `def-kronecker-evaluation-pairing` — **definition** — $\langle[\varphi],[c]\rangle=\varphi(c)$ pairs $H^n(X;G)$ with $H_n(X;\mathbb Z)$. For: degree, fundamental classes and de Rham integration. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives` — **lemma** — coboundaries vanish on cycles and cocycles vanish on boundaries. For: discharges both quotient choices. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology` — **theorem** — applying the HA theorem gives $0\to\operatorname{Ext}(H_{n-1}(X),G)\to H^n(X;G)\to\operatorname{Hom}(H_n(X),G)\to0$, naturally in $X,G$. For: converts computed homology into cohomology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` — **proposition** — the imported algebraic splitting yields an abstract direct sum but no canonical projection to the Ext term. For: prevents naturality overclaim. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field` — **corollary** — over a field $k$, $H^n(X;k)\cong\operatorname{Hom}_k(H_n(X;k),k)$ naturally under the stated chain hypotheses. For: trace, Lefschetz and duality computations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `cor-integral-cohomology-detects-adjacent-homology-torsion` — **corollary** — for finitely generated homology, the torsion in $H^n(X;\mathbb Z)$ is the torsion of $H_{n-1}(X;\mathbb Z)$. For: practical UCT bookkeeping. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-topological-kunneth-short-exact-sequence-for-homology` — **theorem** — the singular cross-product chain equivalence and the HA theorem give the tensor/Tor sequence for $H_n(X\times Y;R)$ under the printed flatness hypotheses. For: product computations without re-proving Tor. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `prop-the-homology-kunneth-sequence-splits-nonnaturally` — **proposition** — over a PID the short exact sequence has a noncanonical splitting under the source hypotheses. For: distinguishes a calculational decomposition from a functorial one. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `cor-field-kunneth-isomorphism-for-homology-of-products` — **corollary** — $H_n(X\times Y;k)\cong\bigoplus_{p+q=n}H_p(X;k)\otimes H_q(Y;k)$. For: the coefficient setting used in spectral-sequence examples. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses` — **theorem** — the cohomology cross product is an isomorphism when one factor has degreewise finite free homology over the PID, with the full hypothesis printed. For: later ring calculations and duality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms` — **corollary** — homotopy, exactness, excision, dimension and additivity follow from the construction, with the product axiom not part of Eilenberg--Steenrod. For: distinguishes ordinary cohomology from its later multiplicative refinement. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.

### B page — `singular-cohomology-and-coefficient-theorems-examples`

- `ex-integral-cohomology-of-real-projective-space-from-uct` — **example** — computes every group and tracks the one-degree torsion shift. For: checks Hom/Ext placement. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `ex-cohomology-of-lens-spaces-from-uct` — **example** — recovers the degree-two torsion class from degree-one homology torsion. For: second UCT torsion check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `ex-field-cohomology-of-an-infinite-wedge-of-circles` — **example** — compares cohomology of a wedge with the algebraic dual of its direct-sum homology. For: exposes product-versus-sum behaviour. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `ex-homology-of-a-product-of-spheres-by-kunneth` — **example** — computes all degrees and the cross-product generators. For: baseline tensor-only calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `ex-tor-term-in-the-homology-of-a-product-of-real-projective-spaces` — **example** — exhibits a product degree where the Tor summand is nonzero. For: shows the correction term is load-bearing. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `ex-kronecker-pairing-for-a-cellular-circle-generator` — **example** — evaluates the dual one-cocycle on the oriented one-cell. For: finite representative check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `cex-the-integral-kronecker-map-need-not-be-an-isomorphism` — **counterexample** — torsion in adjacent homology produces an Ext class pairing trivially with $H_n$. For: blocks naive integral duality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.
- `cex-the-uct-splitting-is-not-natural` — **counterexample** — a source-standard map of finitely generated groups defeats a functorial choice. For: records the exact scope of the splitting assertion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §§3.1--3.2, pp. 185--205, 218--225.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 3 §3.1 “Cohomology Groups,”
  “Universal Coefficients,” and “Cohomology of Spaces,” printed pp. 185--205,
  plus §3.2 “Künneth Formula,” pp. 218--225.
- Miller, *Lectures on Algebraic Topology*, §§26--29 “Coproducts,
  Cohomology” through “Cup Product (cont.),” printed pp. 69--81, and §33,
  pp. 91--93.
- Homological-algebra owner page `universal-coefficients-and-kunneth-theorems`
  for the algebraic UCT and Künneth proofs; this pair supplies only their
  topological hypotheses, chain comparison and applications.

## AT-7 — `cup-cap-cross-products-and-cohomology-rings`

**A page:** `cup-cap-cross-products-and-cohomology-rings`
**B page:** `cup-cap-cross-products-and-cohomology-rings-examples`
**Requires:** `singular-cohomology-and-coefficient-theorems`

The page exposes every chain-level identity needed to make the products descend.
It uses a commutative coefficient ring $R$ for the ring statements and keeps
relative domains explicit; additive cohomology with a mere coefficient group is
not silently given a multiplication.

### A-page items, in dependency order

- `def-eilenberg-zilber-singular-cross-product` — **definition** — the shuffle subdivision sends $C_p(X)\otimes C_q(Y)$ to $C_{p+q}(X\times Y)$. For: topological input to Künneth and external products. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-singular-cross-product-boundary-formula` — **theorem** — $\partial(a\times b)=\partial a\times b+(-1)^pa\times\partial b$. For: proves the tensor differential convention and descent to homology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-alexander-whitney-diagonal-approximation` — **definition** — sends a singular $n$-simplex to the sum of its front $p$-face tensor back $(n-p)$-face. For: the cochain cup formula. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses` — **theorem** — the two natural chain maps compose to maps chain homotopic to the identities. For: justifies product Künneth and diagonal independence. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-singular-cochain-cross-product` — **definition** — $\alpha\times\beta$ evaluates through Alexander--Whitney with the adopted Koszul convention. For: external cohomology products. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-cochain-cross-product-leibniz-identity` — **theorem** — $\delta(\alpha\times\beta)=\delta\alpha\times\beta+(-1)^p\alpha\times\delta\beta$. For: makes the external product descend. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-singular-cup-product-on-cochains` — **definition** — $\alpha\smile\beta=\Delta^*(\alpha\times\beta)$, equivalently the front/back face formula. For: internal multiplication. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-cup-product-leibniz-identity` — **theorem** — $\delta(\alpha\smile\beta)=\delta\alpha\smile\beta+(-1)^p\alpha\smile\delta\beta$. For: proves cocycles multiply and representative changes are boundaries. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-singular-cohomology-ring` — **definition** — $H^*(X;R)$ is the graded ring induced by cup product, with the componentwise constant zero-cochain as unit. For: names the multiplicative invariant. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `prop-cup-product-is-natural-unital-and-associative` — **proposition** — pullback is a unital graded-ring map and the front/back formula is associative already on cochains. For: functorial ring calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal` — **lemma** — the twist and Koszul sign give a chain map homotopic to Alexander--Whitney through the Eilenberg--Zilber comparison. For: the load-bearing commutativity homotopy. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-singular-cohomology-is-graded-commutative` — **theorem** — $a\smile b=(-1)^{pq}b\smile a$ for $a\in H^p,b\in H^q$. For: all later characteristic-class and duality rings. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-relative-cup-product` — **definition** — cochains vanishing on $A$ and $B$ multiply to one vanishing on $A\cup B$, giving $H^p(X,A)\otimes H^q(X,B)\to H^{p+q}(X,A\cup B)$. For: Lefschetz duality and Thom pairs. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `prop-relative-cup-products-are-natural-and-compatible-with-connectors` — **proposition** — restriction, connecting maps and products satisfy the printed signed identities. For: exact-sequence product arguments. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-cap-product-with-cohomology-first` — **definition** — $\alpha\cap c$ evaluates $\alpha$ on the front $p$-face and retains the back face, giving degree $n-p$. For: adopts the convention used in duality maps. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-cap-product-boundary-identity` — **theorem** — with the adopted formula, $\partial(\alpha\cap c)=(-1)^p(\alpha\cap\partial c-\delta\alpha\cap c)$. For: proves cap descends with its correct sign. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `prop-cap-product-naturality-and-projection-formula` — **proposition** — $f_*(f^*\alpha\cap x)=\alpha\cap f_*x$ and $(\alpha\smile\beta)\cap x=\beta\cap(\alpha\cap x)$ under the stated convention. For: degree and duality diagrams. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-relative-cap-product` — **definition** — gives the fully relative maps for triples of subspaces, with every quotient domain printed. For: boundary-manifold duality. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism` — **theorem** — under the AT-6 finite-free/field hypotheses, the external product identifies $H^*(X)\otimes H^*(Y)$ with $H^*(X\times Y)$ using the Koszul tensor-ring multiplication. For: computes product-space rings rather than groups alone. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `def-cup-length-over-a-coefficient-ring` — **definition** — the largest length of a nonzero product of positive-degree reduced classes, when it exists. For: a compact multiplicative obstruction used in examples. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `prop-positive-degree-cup-products-on-a-suspension-vanish` — **proposition** — the reduced diagonal of $\Sigma X$ is nullhomotopic after pinching, so all such products vanish. For: distinguishes spaces with equal additive groups. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.

### B page — `cup-cap-cross-products-and-cohomology-rings-examples`

- `ex-integral-cohomology-ring-of-a-torus` — **example** — computes the exterior ring on two degree-one generators with its sign. For: basic Künneth-ring check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `ex-integral-cohomology-ring-of-an-orientable-surface` — **example** — records the symplectic intersection matrix in degree two. For: input to duality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `ex-mod-two-cohomology-ring-of-real-projective-space` — **example** — $H^*(\mathbb{RP}^n;\mathbb F_2)\cong\mathbb F_2[x]/(x^{n+1})$. For: first truncated-polynomial calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `ex-integral-cohomology-ring-of-complex-projective-space` — **example** — $H^*(\mathbb{CP}^n;\mathbb Z)\cong\mathbb Z[u]/(u^{n+1})$, $|u|=2$. For: universal Chern-class test space. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `ex-cap-product-on-the-oriented-circle` — **example** — the dual one-class caps the fundamental cycle to the positive point class. For: finite sign check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge` — **example** — source-standard spaces with matching groups are separated by a nonzero square. For: shows products carry new information. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical` — **counterexample** — without a specified coefficient pairing $G\otimes G\to G$ there is no multiplication. For: protects the ring hypothesis. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.
- `cex-cochain-cup-product-is-not-graded-commutative-on-the-nose` — **counterexample** — two explicit simplex cochains differ before passing to cohomology. For: explains the chain-homotopy lemma. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 3 §3.2, pp. 206--229, 239--241.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 3 §3.2 “Cup Product,” “The
  Cohomology Ring,” and “Künneth Formula,” printed pp. 206--229, plus the cap
  construction at pp. 239--241.
- Miller, *Lectures on Algebraic Topology*, §§28--30, printed pp. 76--83, and
  §§33--34, pp. 91--96.
- Davis--Kirk, *Lecture Notes in Algebraic Topology*, §§3.2--3.5 “Cross and
  Cup Products” through “Relative Cup and Cap Products,” printed pp. 54--70,
  https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf

## AT-8 — `orientations-poincare-lefschetz-and-alexander-duality`

**A page:** `orientations-poincare-lefschetz-and-alexander-duality`
**B page:** `orientations-poincare-lefschetz-and-alexander-duality-examples`
**Requires:** `cup-cap-cross-products-and-cohomology-rings`

This pair is topological: it defines topological manifolds and their homological
orientations itself and does not depend on the later smooth-manifold track.
Smooth orientations may later cite this interface.  Compact supports, boundary
classes, disconnected components and nonorientable coefficients are part of the
theorems rather than footnotes.

### A-page items, in dependency order

- `def-topological-manifold-with-and-without-boundary` — **definition** — a Hausdorff second-countable space locally modelled on $\mathbb R^n$ or $\mathbb R^n_+$, with boundary detected intrinsically. For: supplies the owned category for homological duality. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-local-homology-detects-interior-points-boundary-points-and-dimension` — **theorem** — computes $H_*(M,M-\{x\};R)$ in the Euclidean and half-space models. For: orientations and intrinsic boundary. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-orientation-local-system-and-orientation-cover` — **definition** — the stalk at $x$ is $H_n(M,M-\{x\};\mathbb Z)$ with transport along paths; generators form a two-sheeted cover. For: turns compatibility of local signs into a precise object. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-r-orientation-of-a-topological-manifold` — **definition** — a continuous coherent choice of generators in local $R$-homology on each component. For: allows general commutative coefficient rings and disconnected spaces. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise` — **proposition** — mod-two local generators are canonical, while an $R$-orientation is chosen independently on each component. For: closes characteristic-two and disconnected cases. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-compatible-local-orientation-classes-exist-over-compact-subsets` — **lemma** — an orientation determines a unique $[M]_K\in H_n(M,M-K;R)$ restricting to every local generator for compact $K$. For: the compact-support spine of the fundamental-class proof. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-fundamental-class-of-a-compact-oriented-manifold` — **definition** — $[M]\in H_n(M;R)$ is the compact-set class when $\partial M=\varnothing$, one generator per oriented component. For: cap duality and degree. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-top-homology-characterizes-compact-orientable-manifolds` — **theorem** — a connected boundaryless $n$-manifold has $H_n(M;R)\cong R$ exactly in the compact $R$-orientable case and otherwise the stated vanishing/twisted alternative. For: prevents false noncompact fundamental classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-compactly-supported-singular-cohomology-of-a-locally-compact-space` — **definition** — $H_c^*(X;R)=\varinjlim_K H^*(X,X-K;R)$ over compact subsets. For: noncompact Poincaré duality. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls` — **lemma** — local relative calculations identify the cap map in the base chart. For: base of the duality induction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder` — **lemma** — the cap boundary identities make the open-union homology and compact-support cohomology sequences commute with the required signs. For: the five-lemma gluing step. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls` — **lemma** — induction and the five lemma propagate the local isomorphism. For: separates finite gluing from exhaustion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-manifold-exhaustion-passes-local-duality-to-the-colimit` — **lemma** — second countability supplies a countable relatively compact chart exhaustion compatible with $H_c^*$ and locally finite homology support. For: closes the noncompact case. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-poincare-duality-for-oriented-topological-manifolds` — **theorem** — cap with the orientation class gives $H_c^p(M;R)\cong H_{n-p}(M;R)$, and for closed $M$ gives $H^p(M;R)\cong H_{n-p}(M;R)$. For: the central duality interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `cor-poincare-duality-gives-a-nonsingular-cup-pairing` — **corollary** — for closed oriented $M$, evaluation of $a\smile b$ on $[M]$ is nonsingular under the printed field/free hypotheses. For: intersection forms and Euler restrictions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-degree-of-a-map-between-oriented-closed-manifolds` — **definition** — for connected oriented closed $n$-manifolds, $f_*[M]=\deg(f)[N]$. For: the exact topological degree interface consumed by DG-17. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology` — **proposition** — degrees multiply, change sign with one orientation reversal, and equal the scalar on top cohomology. For: de Rham comparison and mapping obstructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-relative-fundamental-class-and-boundary-orientation` — **definition** — $[M,\partial M]\in H_n(M,\partial M;R)$ induces the outward-normal-first boundary class through the connecting map. For: fixes the boundary sign used by DT. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class` — **lemma** — collar excision relates interior and boundary generators and proves $\partial[M,\partial M]=[\partial M]$. For: closes boundary orientation compatibility. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-poincare-lefschetz-duality` — **theorem** — for compact oriented $(M,\partial M)$, cap with $[M,\partial M]$ gives the absolute/relative duality isomorphisms, reducing to PD when $\partial M=\varnothing$. For: manifolds with boundary and Thom pairs. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-fully-relative-poincare-lefschetz-duality` — **theorem** — for a boundary decomposition $\partial M=A\cup B$ meeting along their boundaries, cap gives $H^p(M,A;R)\cong H_{n-p}(M,B;R)$, including $A$ or $B$ empty. For: gluing and cobordism consumers without reminting them. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere` — **theorem** — $\widetilde H_i(S^n-K;R)\cong\widetilde H^{n-i-1}(K;R)$ under the printed compactness/local-contractibility hypotheses. For: separation theorems. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-jordan-brouwer-separation` — **theorem** — an embedded $S^{n-1}\subset S^n$ has exactly two complementary components and is their common boundary. For: classical separation from Alexander duality plus local topology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-invariance-of-domain` — **theorem** — a continuous injection $U\to\mathbb R^n$ from an open $U\subseteq\mathbb R^n$ has open image and is a homeomorphism onto it. For: intrinsic manifold dimension and embedding arguments. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `def-lefschetz-number-of-a-finite-cw-self-map` — **definition** — $L(f)=\sum_i(-1)^i\operatorname{tr}(f_*:H_i(X;\mathbb Q)\to H_i(X;\mathbb Q))$. For: a finite, homotopy-invariant fixed-point obstruction. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `lem-hopf-trace-formula` — **lemma** — the alternating trace on a finite chain complex equals the alternating trace on its homology. For: transfers fixed-point-free simplex data to homology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-simplicial-approximation-after-sufficient-subdivision` — **theorem** — a map between finite complexes has a simplicial approximation after subdivision, relative to a subcomplex where already simplicial. For: combinatorial fixed-point proof and later cellular approximation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `thm-lefschetz-fixed-point-theorem-for-finite-complexes` — **theorem** — $L(f)\ne0$ implies $f$ has a fixed point. For: the classical trace application with sufficient, not necessary, hypothesis. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.

### B page — `orientations-poincare-lefschetz-and-alexander-duality-examples`

- `ex-fundamental-classes-and-duality-for-spheres-and-tori` — **example** — computes the cap maps and top pairings. For: standard orientable checks. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `ex-intersection-pairing-of-a-closed-oriented-surface` — **example** — gives the symplectic matrix in a standard basis. For: nonsingularity check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `ex-poincare-lefschetz-duality-for-a-disk-and-its-boundary` — **example** — traces $[D^n,S^{n-1}]$ and its boundary class. For: relative sign audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `ex-mod-two-duality-for-real-projective-space` — **example** — duality holds although integral orientability can fail. For: coefficient audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `ex-alexander-duality-for-the-standard-equator` — **example** — obtains two complementary components. For: Jordan--Brouwer base calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `ex-lefschetz-number-of-the-identity-is-euler-characteristic` — **example** — $L(1_X)=\chi(X)$ for finite CW $X$. For: fixed points on finite contractible complexes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `cex-a-nonorientable-manifold-has-no-ordinary-integral-fundamental-class` — **counterexample** — the Möbius band or projective plane fails the naive top-class assertion. For: forces local coefficients or $\mathbb F_2$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `cex-ordinary-cohomology-does-not-give-noncompact-poincare-duality` — **counterexample** — $\mathbb R^n$ requires compact supports. For: shows the support condition is load-bearing. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls` — **counterexample** — separation does not imply tame complementary topology. For: limits Jordan--Brouwer. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.
- `cex-zero-lefschetz-number-does-not-imply-no-fixed-points` — **counterexample** — the identity on $S^1$ has $L=0$ and every point fixed. For: records the one-way theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.3, 2.B and 2.C, pp. 230--260, 169--184.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 3 §3.3 “Orientations and Homology”
  through “Other Forms of Duality,” printed pp. 230--260; Chapter 2 §2.B
  “Classical Applications,” pp. 169--176; and §2.C “Simplicial
  Approximation,” pp. 177--184.
- Miller, *Lectures on Algebraic Topology*, §§31--38, printed pp. 83--108.
- May, *A Concise Course in Algebraic Topology*, Chapters 20--21, printed
  pp. 151--174.
- Walton, *Algebraic Topology IV*, §4.7, printed pp. 95--99,
  https://jjwalton.github.io/maths_notes/AT.pdf, supplies an independent full
  Jordan--Brouwer/invariance-of-domain proof.

## AT-9 — `bocksteins-steenrod-squares-and-cohomology-operations`

**A page:** `bocksteins-steenrod-squares-and-cohomology-operations`
**B page:** `bocksteins-steenrod-squares-and-cohomology-operations-examples`
**Requires:** `cup-cap-cross-products-and-cohomology-rings`

These operations are included because obstruction theory and characteristic
classes consume them.  The cup-$i$ construction is decomposed far enough to
ground the Steenrod axioms; computations remain dependency-leaf examples.

### A-page items, in dependency order

- `def-stable-natural-cohomology-operation` — **definition** — a natural transformation $H^n(-;G)\to H^{n+k}(-;H)$ commuting with suspension. For: names the objects represented by Eilenberg--MacLane spaces later. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `def-bockstein-connecting-operation` — **definition** — a short exact coefficient sequence gives the cohomology connecting map by lifting a cocycle and dividing its coboundary. For: the primary integral/mod-$p$ operation. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative` — **lemma** — changes of lift and representative alter the output by a coboundary. For: closes the cochain construction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `prop-bocksteins-are-natural-and-commute-with-suspension` — **proposition** — coefficient and space maps commute with the connecting homomorphism. For: stable-operation functoriality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `prop-the-mod-two-bockstein-is-a-derivation` — **proposition** — for $0\to\mathbb Z/2\to\mathbb Z/4\to\mathbb Z/2\to0$, $\beta(xy)=\beta(x)y+x\beta(y)$. For: relation with $Sq^1$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `def-higher-cup-i-products` — **definition** — natural cochain operations $\smile_i$ measure successive homotopies between Alexander--Whitney and its twist. For: chain-level construction of squares. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `thm-cup-i-coboundary-identity` — **theorem** — the printed identity relates $\delta(a\smile_i b)$ to lower cup products and coboundaries. For: makes the square operation representative-independent. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `def-steenrod-squares-from-cup-i-products` — **definition** — for $x\in H^n(X;\mathbb F_2)$, $Sq^i(x)$ is represented by $a\smile_{n-i}a$, with zero outside $0\le i\le n$. For: concrete construction rather than axiom-only introduction. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `thm-steenrod-squares-are-well-defined-and-natural` — **theorem** — the cup-$i$ identity proves independence and commutation with pullback. For: establishes the operation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `prop-steenrod-square-normalization-instability-and-top-square` — **proposition** — $Sq^0=1$, $Sq^i x=0$ for $i>|x|$, and $Sq^{|x|}x=x^2$. For: boundary degrees and ring detection. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `thm-cartan-formula-for-steenrod-squares` — **theorem** — $Sq^n(xy)=\sum_{i+j=n}Sq^i(x)Sq^j(y)$. For: calculates operations on polynomial generators. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `thm-adem-relations-for-steenrod-squares` — **theorem** — for $a<2b$, $Sq^aSq^b$ is the stated binomial sum of admissible composites. For: presents the Steenrod algebra action without treating composites as free. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `prop-first-steenrod-square-is-the-mod-two-bockstein` — **proposition** — $Sq^1=\beta$ for the $\mathbb Z/4$ coefficient sequence. For: connects the two constructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `def-total-steenrod-square` — **definition** — $Sq(x)=\sum_iSq^i(x)$, finite on each homogeneous class, and multiplicative by Cartan. For: characteristic-class formulas. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `def-wu-classes-of-a-closed-manifold` — **definition** — duality uniquely determines $v_i$ by $\langle v_i x,[M]\rangle=\langle Sq^ix,[M]\rangle$. For: algebraic precursor of the Wu formula. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `def-mod-p-reduced-power-operations` — **definition** — for odd prime $p$, $P^i:H^n(-;\mathbb F_p)\to H^{n+2i(p-1)}(-;\mathbb F_p)$ with Bockstein composites. For: the odd-primary analogue used in spectral calculations. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations` — **theorem** — states the full odd-primary formulas with binomial coefficients and degree bounds. For: makes computations and obstruction use precise. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.

### B page — `bocksteins-steenrod-squares-and-cohomology-operations-examples`

- `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space` — **example** — computes the connecting image of its degree-one mod-two class. For: lift/divide check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `ex-steenrod-squares-on-real-projective-space` — **example** — $Sq^i(x^j)=\binom ji x^{i+j}$. For: Cartan and instability computation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `ex-steenrod-squares-on-complex-projective-space-mod-two` — **example** — computes operations on the degree-two generator. For: later Chern/SW comparison. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `ex-adem-relation-sq-one-sq-one-equals-zero` — **example** — verifies the first nontrivial relation and agrees with the Bockstein square. For: finite relation check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `ex-wu-classes-of-a-closed-surface` — **example** — identifies the low-degree class through the intersection pairing. For: duality-operation check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `cex-the-top-square-formula-does-not-define-all-lower-squares` — **counterexample** — spaces with the same cup squares can have distinct lower operations. For: explains the cup-$i$ construction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.
- `cex-steenrod-squares-are-not-integral-cohomology-operations` — **counterexample** — their construction and axioms are intrinsically mod two. For: coefficient discipline. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§3.E and 4.L, pp. 303--306, 494--518.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, §3.E “The Bockstein Homomorphism,” printed
  pp. 303--306, and §4.L “Steenrod Squares and Powers,” pp. 494--518.
- May, *A Concise Course in Algebraic Topology*, Chapter 22 §§4--5
  “Cohomology operations” and “The Steenrod algebra,” printed pp. 181--186,
  together with Chapter 18 §1, pp. 137--140.

## AT-10 — `higher-homotopy-groups-and-cofiber-sequences`

**A page:** `higher-homotopy-groups-and-cofiber-sequences`
**B page:** `higher-homotopy-groups-and-cofiber-sequences-examples`
**Requires:** `homotopy-and-homotopy-equivalence`, `the-fundamental-group`,
`cw-complexes-and-cellular-homology`

This pair begins exactly at the authored topology interface: homotopies are
continuous maps $X\times I\to Y$, relative homotopies fix the specified subset
pointwise, and the fundamental-group product traverses the first loop first.
It generalises those notions; it does not redefine them.

### A-page items, in dependency order

- `def-higher-homotopy-group-by-based-cubes` — **definition** — $\pi_n(X,x_0)$ is the set of maps $(I^n,\partial I^n)\to(X,x_0)$ modulo based homotopy, for $n\ge1$. For: provides representatives with explicit faces and includes the authored $n=1$ convention. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes` — **lemma** — reparametrisation and pasted homotopies show independence of representatives. For: closes the group operation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one` — **theorem** — concatenation gives a group for $n\ge1$, and the Eckmann--Hilton interchange makes it abelian for $n\ge2$. For: the fundamental algebraic structure. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `prop-cubical-and-spherical-models-of-higher-homotopy-agree` — **proposition** — quotienting $\partial I^n$ identifies based classes with $[S^n,X]_*$, including orientation of the generator. For: switches between proof and calculation models. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant` — **proposition** — based maps induce homomorphisms respecting identities, composition and based homotopy. For: extends the authored $\pi_1$ functoriality theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `def-relative-homotopy-group` — **definition** — $\pi_n(X,A,x_0)$ uses maps $(I^n,\partial I^n,J^{n-1})\to(X,A,x_0)$, with the $n=1$ pointed-set exception stated. For: pairs, connectivity and Hurewicz. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees` — **lemma** — concatenation gives groups for $n\ge2$ and abelian groups for $n\ge3$. For: prevents a false group assertion in the low-degree tail. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `thm-long-exact-sequence-of-relative-homotopy-groups` — **theorem** — $\cdots\to\pi_n(A)\to\pi_n(X)\to\pi_n(X,A)\to\pi_{n-1}(A)\to\cdots$ is exact, with pointed-set exactness at the end. For: the main homotopy calculation spine. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `def-cofibration-and-homotopy-extension-property` — **definition** — $i:A\to X$ is a cofibration when every homotopy on $A$ extending a map on $X$ extends across $X\times I$. For: controlled quotients and relative homotopies. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip` — **proposition** — the HEP is equivalent to retracting $X\times I\cup A\times I$ in the standard cylinder. For: usable recognition criterion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `def-mapping-cylinder-and-mapping-cone` — **definition** — $M_f$ factors $f$ as a cofibration followed by a deformation equivalence and $C_f=M_f/X$. For: turns arbitrary maps into cofiber sequences. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `thm-mapping-cylinder-factorization` — **theorem** — $X\hookrightarrow M_f\to Y$ has the claimed cofibration and deformation-retraction properties, naturally up to homotopy. For: validates the replacement. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `def-reduced-cone-suspension-and-cofiber-sequence` — **definition** — for well-pointed based spaces, $CX$, $\Sigma X$ and $X\to Y\to C_f\to\Sigma X$ use reduced quotients. For: exact Puppe iteration. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `thm-puppe-sequence-is-exact-after-mapping-into-a-based-space` — **theorem** — applying $[-,Z]_*$ to the iterated cofiber sequence gives an exact sequence of pointed sets/groups. For: cohomology representability and obstruction calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `prop-loop-suspension-adjunction-on-based-homotopy-classes` — **proposition** — $[\Sigma X,Y]_*\cong[X,\Omega Y]_*$ naturally under the compactly generated convention. For: relates homotopy groups and spectra. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `cor-higher-homotopy-groups-are-iterated-loop-components` — **corollary** — $\pi_n(X)\cong\pi_0(\Omega^nX)$, with the group structure matching concatenation. For: fibration and spectrum calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `def-n-connected-space-and-n-connected-map` — **definition** — vanishing of homotopy groups through $n$ and relative vanishing through $n$, with $(-1)$-connected meaning nonempty and $0$-connected meaning path connected. For: exact low-degree hypotheses in later theorems. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.

### B page — `higher-homotopy-groups-and-cofiber-sequences-examples`

- `ex-higher-homotopy-groups-of-a-product` — **example** — coordinate projections give $\pi_n(X\times Y)\cong\pi_n(X)\times\pi_n(Y)$. For: finite representative check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `ex-relative-homotopy-of-a-disk-boundary-pair` — **example** — the LES identifies its first nonzero relative group. For: Hurewicz input. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `ex-mapping-cone-of-a-degree-d-circle-map` — **example** — computes cellular homology and the first homotopy consequence. For: cofiber calculation with torsion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `ex-cofiber-sequence-of-a-wedge-summand-inclusion` — **example** — pinching identifies the quotient and Puppe maps. For: exactness check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `cex-unbased-homotopic-based-maps-need-not-induce-the-same-based-homotopy-map-without-basepoint-transport` — **counterexample** — the change is conjugation in degree one. For: keeps based homotopy hypotheses explicit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.
- `cex-an-arbitrary-subspace-inclusion-need-not-be-a-cofibration` — **counterexample** — a source-standard non-NDR inclusion fails HEP. For: shows why quotient homotopies need cofibration. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Chs. 6, 8 and 9, pp. 43--48, 57--72.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 4 §4.1 “Homotopy Groups,” printed
  pp. 339--345, and §4.2 “Relative Homotopy Groups,” pp. 369--374.
- May, *A Concise Course in Algebraic Topology*, Chapters 6, 8 and 9,
  “Cofibrations,” “Based cofibrations and cofiber sequences,” and “Higher
  homotopy groups,” printed pp. 43--48 and 57--72.

## AT-11 — `fibrations-fiber-bundles-and-homotopy-exact-sequences`

**A page:** `fibrations-fiber-bundles-and-homotopy-exact-sequences`
**B page:** `fibrations-fiber-bundles-and-homotopy-exact-sequences-examples`
**Requires:** `higher-homotopy-groups-and-cofiber-sequences`,
`covering-spaces-and-lifting`

Covering-space lifting remains owned by topology.  This pair cites it as the
discrete-fiber model, then constructs Hurewicz/Serre fibrations and their exact
sequence.  Vector-bundle classification is postponed to AT-16.

### A-page items, in dependency order

- `def-hurewicz-and-serre-fibrations` — **definition** — Hurewicz fibrations lift homotopies from all spaces; Serre fibrations lift from disks/CW complexes. For: records two nonidentical conventions under one common name. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace` — **proposition** — specialises the lifting property and fixes the initial lift. For: connecting maps and transport. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-fiber-and-fiber-homotopy-equivalence` — **definition** — $F_b=p^{-1}(b)$ and maps over $B$ are inverse through homotopies over $B$. For: invariant replacement of literal fibers. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `prop-pullbacks-of-fibrations-are-fibrations` — **proposition** — the pullback lift is obtained by its universal property. For: induced bundles and path-space replacements. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-mapping-path-space-replacement-of-a-map` — **definition** — $E_f=\{(x,\gamma):\gamma(0)=f(x)\}$ maps to $Y$ by $\gamma(1)$. For: replaces any map by a fibration. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `thm-mapping-path-factorization` — **theorem** — $X\to E_f\to Y$ is a homotopy equivalence followed by a Hurewicz fibration. For: makes homotopy fibers functorial enough for exact sequences. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-homotopy-fiber-of-a-map` — **definition** — the fiber of the mapping-path replacement over the basepoint. For: measures failure of a map to be a homotopy equivalence. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-fibration-connecting-homomorphism` — **definition** — lift a based sphere represented as a disk with boundary, then restrict the lift to the boundary fiber. For: geometric boundary map. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `lem-the-fibration-connecting-map-is-independent-of-lift-and-representative` — **lemma** — relative homotopy lifting resolves both choices. For: well-definedness before exactness. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration` — **theorem** — $\cdots\to\pi_n(F)\to\pi_n(E)\to\pi_n(B)\to\pi_{n-1}(F)\to\cdots$ is exact through pointed sets and components. For: main computational interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `thm-fibration-sequence-is-natural` — **theorem** — a commutative map of based fibrations commutes with every arrow, including transport in the low-degree tail. For: spectral and classifying-space comparisons. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-fiber-transport-and-monodromy-action` — **definition** — lifting a loop gives a fiber homotopy equivalence and an action of $\pi_1(B)$ on $H_*(F)$ and $\pi_*(F)$. For: local coefficients in the Serre sequence. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent` — **proposition** — transport along a path supplies the equivalence, independent up to fiber homotopy of path homotopy. For: reduces computations to one fiber. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-locally-trivial-fiber-bundle` — **definition** — $p:E\to B$ has local product trivialisations with fixed fiber and transition functions, admitting the empty base. For: topological bundles before vector structure. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `thm-numerable-fiber-bundles-are-hurewicz-fibrations` — **theorem** — a numerable trivialising cover and partition of unity assemble homotopy lifts. For: legitimises the fibration LES for standard bundles. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `def-principal-g-bundle-and-associated-fiber-bundle` — **definition** — a free locally trivial right $G$-space over $B$ and $P\times_G F$ for a left $G$-space $F$. For: classifying spaces and vector bundles. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback` — **proposition** — quotient trivialisations descend and commute with base change. For: characteristic constructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.

### B page — `fibrations-fiber-bundles-and-homotopy-exact-sequences-examples`

- `ex-path-loop-fibration-and-its-connecting-isomorphisms` — **example** — $\Omega X\to PX\to X$ has contractible total space and $\pi_nX\cong\pi_{n-1}\Omega X$. For: exact-sequence calibration. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `ex-hopf-circle-fibration` — **example** — $S^1\to S^3\to S^2$ gives low homotopy groups and nontrivial connecting maps. For: first bundle computation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `ex-real-projective-space-cover-as-a-discrete-fiber-fibration` — **example** — recovers the covering-space low-degree tail. For: compatibility with topology-owned lifting. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `ex-mobius-band-as-an-interval-bundle-with-monodromy` — **example** — transport reverses the fiber. For: visible nontrivial action. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `cex-a-surjective-map-need-not-be-a-fibration` — **counterexample** — a source-standard quotient lacks path lifting. For: separates fibrations from epimorphisms. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.
- `cex-a-fibration-need-not-be-a-locally-trivial-bundle` — **counterexample** — a mapping-path fibration has varying-looking fibers without bundle charts. For: prevents converse misuse. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** May, *A Concise Course in Algebraic Topology*, Ch. 7 and Ch. 9 §§3--5, pp. 49--56, 68--72.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 4 §4.2 “Fiber Bundles,” printed
  pp. 375--384, and §4.3 “Fibrations,” pp. 405--410.
- May, *A Concise Course in Algebraic Topology*, Chapter 7 “Fibrations,”
  printed pp. 49--56, and Chapter 9 §§3--5, pp. 68--72.

## AT-12 — `hurewicz-whitehead-freudenthal-and-cw-approximation`

**A page:** `hurewicz-whitehead-freudenthal-and-cw-approximation`
**B page:** `hurewicz-whitehead-freudenthal-and-cw-approximation-examples`
**Requires:** `fibrations-fiber-bundles-and-homotopy-exact-sequences`

This page decomposes the three large comparison proofs.  Cellular
approximation supplies dimension control, homotopy excision supplies relative
connectivity, and the relative Hurewicz induction closes Whitehead and the
stable suspension range.

### A-page items, in dependency order

- `thm-cellular-approximation-for-maps-of-cw-pairs` — **theorem** — a map of CW pairs is homotopic rel a cellular subcomplex to a map carrying $X^n$ into $Y^n$. For: dimension control in all subsequent homotopy proofs. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative` — **corollary** — compact sphere and homotopy images lie in finite subcomplexes. For: avoids illicit finite-CW assumptions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-cw-approximation-of-an-arbitrary-space` — **theorem** — constructs $X'\to X$ from cells so as to induce isomorphisms on every homotopy group. For: replaces weak homotopy questions by CW ones. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `def-hurewicz-homomorphism` — **definition** — sends a based sphere map to the image of the oriented fundamental class in homology. For: comparison of homotopy and homology. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `prop-the-first-hurewicz-map-in-degree-one-is-abelianization` — **proposition** — $\pi_1(X)_{\mathrm{ab}}\cong H_1(X;\mathbb Z)$ for path-connected $X$. For: exact interface to the authored fundamental group. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity` — **lemma** — relative cellular approximation kills maps dimension by dimension. For: engine of the relative theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-relative-hurewicz-theorem` — **theorem** — for an $(n-1)$-connected pair satisfying the stated simple-connectivity hypotheses, relative homology vanishes below $n$ and $\pi_n(X,A)\to H_n(X,A)$ is an isomorphism (abelianisation at $n=2$ as stated). For: load-bearing comparison. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-absolute-hurewicz-theorem` — **theorem** — an $(n-1)$-connected space has vanishing reduced homology below $n$ and $\pi_n(X)\cong H_n(X)$, with $n=1$ separated. For: computes first nonzero homotopy groups. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-homotopy-excision` — **theorem** — a triad whose two inclusions have connectivities $m,n$ induces the stated $(m+n-1)$-connected map from one relative homotopy group to the union pair. For: Freudenthal and excision in homotopy. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-blakers-massey-connectivity-for-a-homotopy-pushout` — **theorem** — the canonical map from a homotopy pushout to the corresponding homotopy pullback has the source-stated connectivity. For: modern exact form of homotopy excision. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-freudenthal-suspension-theorem` — **theorem** — if $X$ is $(n-1)$-connected, $\pi_i(X)\to\pi_{i+1}(\Sigma X)$ is an isomorphism for $i<2n-1$ and a surjection at $i=2n-1$. For: stable homotopy range and spectra. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `def-weak-homotopy-equivalence` — **definition** — a map induces a bijection on components and isomorphisms on all based homotopy groups. For: exact Whitehead hypothesis. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups` — **lemma** — the homotopy LES translates the weak equivalence into relative vanishing. For: Whitehead obstruction step. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells` — **lemma** — obstruction disks are filled skeleton by skeleton, relative to prior choices. For: constructs rather than asserts the inverse. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-whitehead-theorem` — **theorem** — a weak homotopy equivalence between CW complexes is a homotopy equivalence. For: converts algebraic checks into equivalences. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `cor-a-weakly-contractible-cw-complex-is-contractible` — **corollary** — the map to a point is a weak equivalence and hence a homotopy equivalence. For: common endpoint of fibration computations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `thm-hopf-degree-classification-of-sphere-self-maps` — **theorem** — for $n\ge1$, degree gives a bijection $[S^n,S^n]_*\cong\mathbb Z$ (and the unbased version under the stated condition). For: finally closes the converse deliberately withheld in AT-5. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.

### B page — `hurewicz-whitehead-freudenthal-and-cw-approximation-examples`

- `ex-first-nonzero-homotopy-group-of-a-sphere` — **example** — Hurewicz gives $\pi_n(S^n)\cong\mathbb Z$ for $n\ge1$. For: degree classification input. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `ex-hurewicz-calculation-for-a-wedge-of-simply-connected-spheres-in-the-first-degree` — **example** — identifies its first nonzero group. For: connectivity check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction` — **example** — executes the least-nonzero-relative-group contradiction. For: combines the two comparison theorems. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `ex-freudenthal-stable-range-for-spheres` — **example** — prints the isomorphism and surjection ranges for $S^n$. For: off-by-one audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `cex-whitehead-theorem-fails-without-cw-type` — **counterexample** — a source-standard weakly contractible noncontractible space. For: shows the category hypothesis is load-bearing. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.
- `cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity` — **counterexample** — a standard acyclic noncontractible CW example. For: limits Hurewicz induction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, §§4.1--4.2, pp. 346--374, 384--392.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 4 §§4.1--4.2, “Cellular
  Approximation,” “The Whitehead Theorem,” “Homotopy Excision and Suspension,”
  and “The Hurewicz Theorem,” printed pp. 346--368 and 384--392.
- May, *A Concise Course in Algebraic Topology*, Chapters 10--11 and 15,
  printed pp. 73--90 and 117--122.

## AT-13 — `obstruction-theory-postnikov-towers-and-classifying-spaces`

**A page:** `obstruction-theory-postnikov-towers-and-classifying-spaces`
**B page:** `obstruction-theory-postnikov-towers-and-classifying-spaces-examples`
**Requires:** `hurewicz-whitehead-freudenthal-and-cw-approximation`,
`bocksteins-steenrod-squares-and-cohomology-operations`

Obstructions are built from explicit cellular extension data before the page
introduces representability and Postnikov towers.  Principal bundles are
classified only for paracompact/numerable bases; the page does not inherit an
unstated niceness hypothesis.

### A-page items, in dependency order

- `lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere` — **lemma** — an extension across $D^{n+1}$ exists exactly when the boundary class in $\pi_n(Y)$ vanishes. For: local obstruction datum. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `def-primary-cellular-obstruction-cochain` — **definition** — for a map on $X^n$, evaluation on each $(n+1)$-cell gives a cochain in $C^{n+1}(X,A;\pi_nY)$, with local coefficients when $\pi_1$ acts. For: globalises cellwise failures. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-the-primary-obstruction-cochain-is-a-cocycle` — **theorem** — the attaching relations on $(n+2)$-cells make its cellular coboundary vanish. For: defines the obstruction class. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-the-primary-obstruction-class-is-independent-of-cellular-choices` — **theorem** — changing the partial extension alters the cocycle by a coboundary. For: well-definedness in cohomology. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton` — **theorem** — a correcting cochain changes the partial map exactly when the class vanishes. For: both directions of the extension criterion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `def-difference-cochain-between-two-cellular-extensions` — **definition** — gluing their disk restrictions gives a cochain one degree lower. For: classification and uniqueness of extensions. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage` — **theorem** — the difference is a cocycle and vanishes in cohomology exactly when the maps are homotopic rel the prior skeleton, under the printed connectivity hypotheses. For: uniqueness as well as existence. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-obstruction-theory-for-lifting-through-a-fibration` — **theorem** — a section/lift over skeleta has obstructions in cohomology with the local system $\pi_*(F)$. For: bundle sections and characteristic obstructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `def-eilenberg-maclane-space` — **definition** — a connected CW complex $K(A,n)$ has $\pi_n=A$ and all other homotopy groups zero, with $A$ abelian for $n\ge2$. For: represent ordinary cohomology. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces` — **theorem** — cell attachment constructs $K(A,n)$ and Whitehead makes any two models homotopy equivalent. For: closes the representing object. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-eilenberg-maclane-spaces-represent-singular-cohomology` — **theorem** — for CW pairs, $\widetilde H^n(X;A)\cong[X,K(A,n)]_*$ naturally. For: geometric interpretation of classes and operations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces` — **corollary** — natural operations are determined by the image of the universal class. For: organises Bockstein and Steenrod operations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `def-postnikov-section-and-postnikov-tower` — **definition** — $P_nX$ preserves $\pi_i$ for $i\le n$ and kills it for $i>n$, with compatible fibrations $P_nX\to P_{n-1}X$. For: reconstructs homotopy type by stages. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-postnikov-towers-exist-for-connected-cw-complexes` — **theorem** — mapping-path replacements of cell-killing maps yield the tower and its Eilenberg--MacLane fibers. For: rigorous staged construction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `def-postnikov-k-invariant` — **definition** — the fibration stage is classified by a class in $H^{n+1}(P_{n-1}X;\pi_nX)$ with the relevant local action. For: encodes how homotopy groups are assembled. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-simple-postnikov-stages-are-classified-by-k-invariants` — **theorem** — with the action and lower stage fixed, homotopy classes of the extensions correspond to the stated cohomology data up to equivalence. For: turns towers into calculable invariants. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `def-universal-principal-bundle-and-classifying-space` — **definition** — a free contractible $G$-space $EG$ gives $BG=EG/G$ and $EG\to BG$. For: classification and universal characteristic classes. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-milnor-join-model-is-a-contractible-free-g-space` — **theorem** — the infinite join $G*G*\cdots$ is free and contractible with numerable quotient bundle. For: existence for general topological groups. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `thm-principal-bundles-are-classified-by-maps-to-bg` — **theorem** — for paracompact bases, pullback gives a natural bijection $[X,BG]\cong\operatorname{Prin}_G(X)$, including the trivial bundle as the constant map. For: exact classification interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `prop-loop-space-of-bg-recovers-g-up-to-homotopy` — **proposition** — the universal fibration LES gives $G\simeq\Omega BG$ under the stated well-pointed hypotheses. For: bridge to spectra and bundles. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `cor-classifying-space-of-a-discrete-group-is-a-k-g-one` — **corollary** — contractible $EG$ makes $BG$ aspherical with fundamental group $G$. For: group cohomology interface without reminting covering classification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.

### B page — `obstruction-theory-postnikov-towers-and-classifying-spaces-examples`

- `ex-primary-obstruction-to-a-nowhere-zero-section-of-a-sphere-fibration` — **example** — identifies the first possible obstruction group without developing DT applications. For: lifting-theory calibration. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `ex-k-z-one-as-the-infinite-complex-projective-space` — **example** — the universal circle bundle shows $\mathbb{CP}^{\infty}\simeq K(\mathbb Z,2)$ after looping conventions are applied. For: universal degree-two class. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `ex-real-projective-infinity-as-b-z-two` — **example** — $S^\infty\to\mathbb{RP}^\infty$ is the universal double cover. For: discrete classifying-space model. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `ex-first-postnikov-stage-of-a-simply-connected-space` — **example** — identifies $P_nX$ when $\pi_n$ is the first nonzero group. For: tower boundary case. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map` — **example** — constructs both implications over a paracompact base. For: classification basepoint check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension` — **counterexample** — the cochain must vanish as a class, not by unrelated local nullhomotopies. For: motivates cocycle compatibility. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.
- `cex-principal-bundle-classification-can-fail-without-numerability` — **counterexample** — a source-standard nonnumerable bundle is not pulled back from the chosen universal numerable bundle. For: preserves the base hypothesis. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Davis--Kirk, *Lecture Notes in Algebraic Topology*, Ch. 7 and §8.6, pp. 165--193, 217--218.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 4 §4.3 “Constructing Spaces from
  Their Homotopy Groups,” “Obstruction Theory,” and “Fibrations,” printed
  pp. 393--420, plus §4.1 CW approximation, pp. 346--354.
- May, *A Concise Course in Algebraic Topology*, Chapter 16, printed
  pp. 123--130; Chapter 18, pp. 137--144; and Chapter 22 §§1--3,
  pp. 175--181.

## AT-14 — `the-serre-spectral-sequence-and-applications`

**A page:** `the-serre-spectral-sequence-and-applications`
**B page:** `the-serre-spectral-sequence-and-applications-examples`
**Requires:** `obstruction-theory-postnikov-towers-and-classifying-spaces`,
`spectral-sequences`, `double-complexes-exact-couples-and-convergence`

The abstract exact-couple and convergence machinery is cited from homological
algebra.  AT owns the filtration of a fibration, the local coefficient system,
the geometric edge and transgression maps, multiplicativity, and applications.

### A-page items, in dependency order

- `def-fiber-homology-local-system-of-a-serre-fibration` — **definition** — fiber transport gives the local system $\mathcal H_q(F;R)$ on the base. For: states the correct $E_2$ term when monodromy is nontrivial. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid` — **lemma** — path homotopy, concatenation and reversal give the functor laws. For: well-defined local coefficients. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `def-serre-filtration-of-the-total-space-over-base-skeleta` — **definition** — $E_p=p^{-1}(B^p)$ filters the total space of a fibration over a CW base. For: topology-specific input to the spectral-sequence machine. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology` — **lemma** — excision and local triviality up to fiber homotopy identify $H_{p+q}(E_p,E_{p-1};R)$ with cellular $p$-chains on $B$ valued in $\mathcal H_q$. For: identifies $E^1$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients` — **lemma** — incidence degrees and fiber transport give $d_1$. For: derives rather than guesses $E^2$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-homological-serre-spectral-sequence` — **theorem** — under the printed CW/fibration/coefficient hypotheses, $E^2_{p,q}=H_p(B;\mathcal H_q(F;R))$ with $d_r:(p,q)\mapsto(p-r,q+r-1)$ converges to the filtration of $H_{p+q}(E;R)$. For: principal computational theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-naturality-of-the-homological-serre-spectral-sequence` — **theorem** — a map of fibrations induces compatible page maps and a filtered map on the abutment. For: comparisons and universal bundles. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `def-serre-edge-homomorphisms-and-transgression` — **definition** — names the surviving base/fiber edge maps and the differential from the fiber edge to the base edge. For: geometric interpretations used in classes. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion` — **proposition** — the filtered representatives identify both edges, with their domains of definition. For: prevents edge-map direction errors. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `prop-serre-transgression-agrees-with-the-relative-connecting-construction` — **proposition** — a fiber class is extended through lower filtration and its first obstruction is the transgressed base class. For: obstruction/characteristic interpretation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-cohomological-serre-spectral-sequence` — **theorem** — $E_2^{p,q}=H^p(B;\mathcal H^q(F;R))$, $d_r:(p,q)\mapsto(p+r,q-r+1)$, converging to the decreasing filtration on $H^{p+q}(E;R)$. For: ring and characteristic-class calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence` — **theorem** — for commutative $R$, filtered cup products make each page a bigraded algebra and $d_r$ a derivation with the printed total-degree sign. For: Leray--Hirsch and polynomial computations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `prop-degree-and-parity-criteria-for-serre-collapse` — **proposition** — absent source/target bidegrees force differentials to vanish, but collapse alone yields only the associated graded. For: safe rapid calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence` — **theorem** — a two-row oriented sphere fibration yields the long exact Gysin sequence, with transgression equal to cup with the Euler class once AT-19 constructs it. For: exposes the exact-sequence application without defining Euler early. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-wang-sequence-for-a-fibration-over-the-circle` — **theorem** — the two-column/local-system calculation gives the LES involving $1-h_*$ for monodromy $h$. For: bundles over $S^1$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` — **theorem** — source-stated Serre-class hypotheses pass finite generation/torsion bounds through the spectral sequence. For: controlled homotopy applications. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator` — **theorem** — $H^*(K(\mathbb Z,n);\mathbb Q)$ is polynomial on one class for even $n$ and exterior for odd $n$. For: rational Postnikov calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.

### B page — `the-serre-spectral-sequence-and-applications-examples`

- `ex-path-loop-serre-computation-of-cp-infinity` — **example** — the contractible path total space forces transgression and recovers $H^*(K(\mathbb Z,2))$. For: differential calibration. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `ex-serre-spectral-sequence-of-the-complex-hopf-fibration` — **example** — the unique possible differential recovers sphere and projective-space cohomology. For: multiplicative two-row check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration` — **example** — gives the degree-four polynomial generator of $H^*(\mathbb{HP}^{\infty})$. For: higher transgression. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `ex-homology-of-the-loop-space-of-an-odd-sphere` — **example** — the path-loop sequence determines the tensor/polynomial pattern in the source range. For: nontrivial infinite-page application. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `ex-wang-sequence-of-a-mapping-torus` — **example** — computes homology from $1-h_*$. For: visible monodromy calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `cex-serre-page-collapse-does-not-split-the-abutment` — **counterexample** — the source's $\mathbb Z/2$-by-$\mathbb Z/2$ filtration can assemble to $\mathbb Z/4$. For: makes extension problems explicit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.
- `cex-ignoring-monodromy-gives-the-wrong-serre-e-two-page` — **counterexample** — a twisted bundle over $S^1$ has nonconstant fiber homology coefficients. For: protects the local-system form. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Algebraic Topology*, Ch. 5 §5.1 application portions, pp. 526--579.

### Sources and exact locators

- Hatcher, *Algebraic Topology*, Chapter 5 §5.1, homology and cohomology
  Serre sequences and applications, printed pp. 526--579.
- Miller, MIT 18.906 notes, Chapter 4 §§24, 26--27 and 29--31, printed
  pp. 80--111,
  https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
- Davis--Kirk, Chapter 9 §§9.2--9.5, printed pp. 241--260, and Chapter 10
  §§10.1--10.3, pp. 267--282.

## AT-15 — `topological-vector-bundles-and-grassmannian-classification`

**A page:** `topological-vector-bundles-and-grassmannian-classification`
**B page:** `topological-vector-bundles-and-grassmannian-classification-examples`
**Requires:** `the-serre-spectral-sequence-and-applications`

The pair fixes rank on each classification problem and assumes numerability
(automatic over paracompact bases).  Locally varying rank is introduced only
when forming $K^0$ in AT-16.

### A-page items, in dependency order

- `def-real-and-complex-topological-vector-bundle` — **definition** — a fixed-rank bundle has linear local trivialisations and continuous $GL_n(\mathbb F)$ transition functions satisfying the cocycle law. For: base object, including rank zero and empty base. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-vector-bundles-glued-from-transition-cocycles` — **theorem** — compatible transition functions produce a bundle, and coboundary-related data give isomorphic bundles. For: closes local-to-global construction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-vector-bundle-map-section-subbundle-and-isomorphism` — **definition** — records fiberwise linear maps, zero/nowhere-zero sections and locally split subbundles. For: later characteristic and complement statements. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-pullback-vector-bundle-and-pullback-section` — **definition** — the fiber product $f^*E$ has its universal bundle map and transported sections. For: naturality of every characteristic class. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism` — **proposition** — identity and composite pullbacks have coherent canonical isomorphisms. For: classifying-map naturality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles` — **definition** — transition functions construct the standard bundle operations, including conjugate and underlying-real bundles. For: $K$-theory and characteristic formulas. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-numerable-vector-bundles-admit-bundle-metrics` — **theorem** — a subordinate partition of unity averages local metrics. For: orthogonal complements and compact structure groups. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `cor-short-exact-sequences-of-vector-bundles-split-over-the-base` — **corollary** — a metric supplies an orthogonal complementary subbundle. For: exactness in $K$-theory. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases` — **theorem** — $E\oplus E'\cong\varepsilon^N$ for some finite-rank $E'$. For: stable classification and Grothendieck completion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-homotopy-invariance-of-vector-bundle-pullback` — **theorem** — bundles pulled back along homotopic maps are isomorphic over paracompact bases, proved over $X\times I$. For: classifying maps descend to homotopy classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-frame-bundle-and-associated-vector-bundle` — **definition** — frames form a principal $GL_n$-bundle and the standard representation recovers $E$. For: bridge to AT-13 classifying spaces. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-stiefel-space-grassmannian-and-tautological-bundle` — **definition** — finite and stable $V_n(\mathbb F^N)$, $Gr_n(\mathbb F^N)$ and the tautological $n$-plane bundle use the direct-limit CW topology. For: universal finite-rank model. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-stable-stiefel-space-is-contractible` — **theorem** — every compact family of frames contracts after entering a sufficiently large finite stage. For: $V_n(\mathbb F^\infty)\to Gr_n(\mathbb F^\infty)$ is universal. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians` — **theorem** — numerable rank-$n$ bundles over paracompact $X$ correspond naturally to $[X,BO(n)]$ or $[X,BU(n)]$. For: universal construction of characteristic classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map` — **lemma** — fiberwise embedding in $X\times\mathbb F^N$ records the image plane continuously and pulls back the tautological bundle. For: existence half of classification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely` — **lemma** — $I$-invariance and stabilized embeddings prove both directions. For: uniqueness half of classification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-schubert-cells-in-real-and-complex-grassmannians` — **definition** — row-echelon pivot data indexed by partitions give cells of real or twice-complex dimension. For: CW filtrations used in cohomology calculations. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` — **theorem** — closure relations attach along lower partition order and stabilise under $N\to\infty$. For: finite-skeleton arguments. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `def-clutching-construction-for-bundles-over-a-suspension` — **definition** — glues trivial bundles over two cones by a map on the equator. For: concrete sphere classification. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range` — **theorem** — homotopic clutching maps give isomorphic bundles and changes of trivialisation give the stated orbit/based class; low-dimensional exceptions are printed separately. For: Bott and examples. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.

### B page — `topological-vector-bundles-and-grassmannian-classification-examples`

- `ex-mobius-and-trivial-real-lines-over-the-circle` — **example** — transition signs distinguish the two real line bundles. For: clutching component check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `ex-tautological-real-and-complex-lines-over-projective-space` — **example** — identifies their classifying maps. For: universal line models. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `ex-hopf-line-bundle-over-the-two-sphere-by-clutching` — **example** — the equatorial map $z$ gives the tautological complex line; reversing hemispheres gives $z^{-1}$. For: sign audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `ex-all-complex-vector-bundles-over-the-circle-are-trivial` — **example** — connectedness of $GL_n(\mathbb C)$ kills the clutching class. For: real/complex contrast. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `ex-rank-zero-and-empty-base-vector-bundle-classification` — **example** — both classification sets are singletons. For: degenerate-case check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement` — **counterexample** — Hatcher's source example shows compactness is needed in the complement theorem. For: exact boundary of stable triviality. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.
- `cex-vector-bundle-classification-without-numerability-can-fail` — **counterexample** — a source-standard nonnumerable bundle has no classifying map to the universal numerable model. For: base-category discipline. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, Ch. 1 §§1.1--1.2, pp. 6--37.

### Sources and exact locators

- Hatcher, *Vector Bundles & K-Theory*, Chapter 1 §1.1, printed pp. 6--17,
  and §1.2, pp. 18--37.
- Miller, MIT 18.906 notes, Chapter 3, Lectures 16--21, printed pp. 53--72.
- Milnor--Stasheff, *Characteristic Classes*, §§2--3, printed pp. 13--36,
  and §§5--6, pp. 55--82,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf

## AT-16 — `complex-topological-k-theory-and-bott-periodicity`

**A page:** `complex-topological-k-theory-and-bott-periodicity`
**B page:** `complex-topological-k-theory-and-bott-periodicity-examples`
**Requires:** `topological-vector-bundles-and-grassmannian-classification`

This split is required for dependency closure: AT-17 cannot apply the AHSS to
$K$ before $K^*$, its coefficients and Bott periodicity exist.  The long
fundamental-product proof is decomposed rather than labelled “Bott periodicity.”

### A-page items, in dependency order

- `def-whitney-sum-monoid-of-complex-vector-bundles` — **definition** — isomorphism classes with locally constant finite rank form a commutative monoid under $\oplus$. For: handles disconnected bases correctly. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `def-complex-topological-k-zero-by-grothendieck-completion` — **definition** — $K^0(X)$ is the universal abelian group of the bundle monoid. For: virtual bundles and additivity. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases` — **proposition** — $[E]-[F]=[E']-[F']$ iff a common finite bundle stabilises the corresponding sums. For: representative calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `def-grothendieck-ring-structure-and-rank-map` — **definition** — tensor product gives multiplication and rank gives $K^0(X)\to H^0(X;\mathbb Z)$. For: ring and disconnected-rank conventions. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `def-reduced-complex-k-theory` — **definition** — for based compact $X$, $\widetilde K^0(X)=\ker(K^0(X)\to K^0(*))$, componentwise when needed. For: suspension and relative theory. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant` — **proposition** — pullback extends to virtual bundles and equalises homotopic maps. For: cohomology-theory structure. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `def-external-product-in-complex-k-theory` — **definition** — $[E]\boxtimes[F]=[\pi_X^*E\otimes\pi_Y^*F]$ descends bilinearly and reduces to smash products. For: Bott product. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere` — **theorem** — with $\beta=[\gamma]-1$, $K^0(S^2)=\mathbb Z[\beta]/(\beta^2)$ and $\widetilde K^0(S^2)=\mathbb Z\beta$. For: normalises the Bott element. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `lem-normalized-clutching-data-for-bundles-over-x-times-s-two` — **lemma** — after stabilisation, a bundle is encoded by an automorphism family over $X\times S^1$ equal to the identity at a basepoint. For: first reduction in the product theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `lem-uniform-laurent-approximation-through-bundle-automorphisms` — **lemma** — compactness uniformly approximates the clutching family by a Laurent polynomial staying inside the open automorphism bundle. For: finite algebraic normal form. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization` — **lemma** — tensoring with powers of the Hopf clutching function makes the family polynomial. For: prepares linearisation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `lem-polynomial-clutching-families-stabilize-to-linear-clutching` — **lemma** — elementary block operations homotope a polynomial automorphism to a linear one after adding trivial summands. For: core algebra of the product theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `lem-linear-clutching-splits-into-eigenbundles` — **lemma** — spectral projections give kernel/image subbundles and express the class using $1$ and $\beta$. For: final surjectivity and injectivity step. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `thm-fundamental-product-theorem-for-complex-k-theory` — **theorem** — $K^0(X)\otimes K^0(S^2)\to K^0(X\times S^2)$ is an isomorphism for compact Hausdorff $X$. For: Bott periodicity. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `thm-reduced-k-theory-exact-sequence-of-a-cofibration` — **theorem** — a based cofibration gives the bi-infinite exact sequence after suspensions. For: generalized cohomology exactness. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `def-negative-degree-complex-k-groups` — **definition** — $K^{-n}(X)=\widetilde K^0(\Sigma^nX_+)$ for $n\ge0$. For: fixes grading before periodic shorthand. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `thm-complex-bott-periodicity` — **theorem** — multiplication by $\beta\in K^{-2}(*)$ gives natural isomorphisms $K^q(X)\cong K^{q-2}(X)$. For: coefficient groups and AHSS. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `cor-complex-k-theory-of-spheres` — **corollary** — $\widetilde K^0(S^{2n})\cong\mathbb Z$ and $\widetilde K^0(S^{2n+1})=0$. For: coefficient and example checks. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory` — **theorem** — homotopy, exactness, suspension and wedge axioms hold on finite CW complexes, with coefficients $K^{2k}(*)=\mathbb Z$, $K^{2k+1}(*)=0$. For: exact AT-17 input. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.

### B page — `complex-topological-k-theory-and-bott-periodicity-examples`

- `ex-k-theory-of-a-point-and-the-empty-space` — **example** — $K^0(*)=\mathbb Z$ and $K^0(\varnothing)=0$. For: unit/empty boundary audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `ex-complex-k-ring-of-the-two-sphere` — **example** — $\beta^2=0$ and the Hopf-line clutching orientation fixes the chosen Bott generator. For: Bott sign check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `ex-complex-k-theory-of-even-and-odd-spheres` — **example** — applies periodicity in both parities. For: grading audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `ex-complex-k-ring-of-complex-projective-space` — **example** — the tautological line yields the truncated polynomial presentation. For: nontrivial ring computation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `ex-rank-map-on-a-disconnected-compact-space` — **example** — different component ranks land in $H^0(X;\mathbb Z)$. For: rejects a single-integer convention. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.
- `cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism` — **counterexample** — a source-standard stably trivial nontrivial bundle. For: limits equality in $K^0$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§2.1--2.2, pp. 39--58.

### Sources and exact locators

- Hatcher, *Vector Bundles & K-Theory*, Chapter 2 §2.1 “The Functor
  $K(X)$,” printed pp. 39--50 and §2.2 “Bott Periodicity,” pp. 51--58.
- May, *A Concise Course in Algebraic Topology*, Chapter 24 §§1--2,
  printed pp. 203--208.

## AT-17 — `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`

**A page:** `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`
**B page:** `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples`
**Requires:** `complex-topological-k-theory-and-bott-periodicity`,
`spectral-sequences`, `double-complexes-exact-couples-and-convergence`

The basic convergence theorem is deliberately finite-CW.  Infinite complexes
are recorded as a limitation, not silently upgraded through a missing $\lim^1$
argument.  The page constructs both homological and cohomological forms, then
applies the latter to complex $K$.

### A-page items, in dependency order

- `def-reduced-generalized-cohomology-theory` — **definition** — homotopy, exact cofiber, suspension and wedge axioms are imposed without the dimension axiom. For: ordinary and extraordinary theories in one framework. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `prop-reduced-and-unreduced-generalized-cohomology-theories-correspond` — **proposition** — adjoining a disjoint basepoint and kernels constructs the two forms with relative groups. For: pair and filtration notation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `def-coefficient-groups-of-a-generalized-cohomology-theory` — **definition** — $h^q(*)$ in all integer degrees replaces the ordinary dimension axiom. For: $E_2$ coefficients. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory` — **proposition** — suspension, pinch and additivity identify the action. For: $d_1$ as cellular coboundary. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `def-skeletal-filtration-for-generalized-cohomology` — **definition** — $F^ph^n(X)=\ker(h^n(X)\to h^n(X^{p-1}))$. For: fixes the one-step indexing convention. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients` — **lemma** — wedge-of-sphere quotients identify $E_1^{p,q}$ with $C^p_{\mathrm{cell}}(X;h^q(*))$. For: topology-specific page calculation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `lem-the-ahss-first-differential-is-the-cellular-coboundary` — **lemma** — attaching degrees act by integer multiplication in the coefficient group. For: derives $E_2$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `thm-cohomological-atiyah-hirzebruch-spectral-sequence` — **theorem** — for a finite CW complex, $E_2^{p,q}=H^p(X;h^q(*))$, $d_r:(p,q)\mapsto(p+r,q-r+1)$, and $E_\infty^{p,q}\cong F^ph^{p+q}(X)/F^{p+1}$. For: primary AHSS interface. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `thm-homological-atiyah-hirzebruch-spectral-sequence` — **theorem** — $E^2_{p,q}=H_p(X;h_q(*))$ with the homological differential converges to the finite skeletal filtration of $h_{p+q}(X)$. For: generalized homology applications. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `thm-naturality-and-edge-maps-of-the-ahss` — **theorem** — cellular maps induce page maps, CW approximation removes cellularity, and the filtration edges are restrictions/quotients. For: comparisons. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `thm-multiplicative-ahss-for-a-multiplicative-generalized-theory` — **theorem** — a ring-spectrum product gives page products and derivation differentials, converging to the associated graded ring. For: $K$-theory products, with no ring claim for a merely additive theory. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `prop-ahss-collapse-determines-only-the-associated-graded-object` — **proposition** — even if all differentials vanish, additive and multiplicative extensions remain. For: prevents direct-sum and ring overclaims. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `cor-complex-k-theory-ahss` — **corollary** — Bott coefficients give $E_2^{p,q}=H^p(X;\mathbb Z)$ for even $q$ and zero for odd $q$, converging to $K^{p+q}(X)$. For: standard application. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `thm-first-possible-complex-k-ahss-differential-is-integral-sq-three` — **theorem** — $d_3=\beta Sq^2\rho_2$ with the AT-9 Bockstein/Steenrod conventions. For: noncollapse examples. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.

### B page — `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples`

- `ex-complex-k-ahss-for-spheres` — **example** — two filtration cells recover the Bott-periodic sphere groups. For: basic page check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `ex-complex-k-ahss-for-complex-projective-space` — **example** — parity forces collapse but the projective-bundle theorem, not the additive page, supplies the ring. For: associated-graded warning. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `ex-complex-k-ahss-for-a-closed-oriented-surface` — **example** — computes $K^0\cong\mathbb Z^2$ and $K^1\cong\mathbb Z^{2g}$. For: finite two-dimensional case. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `ex-complex-k-ahss-for-real-projective-space` — **example** — collapsed pages leave a nontrivial extension that assembles the torsion. For: extension problem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four` — **example** — Ji's calculation uses $\beta Sq^2\rho_2$. For: operations-dependent differential. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.
- `cex-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes` — **counterexample** — the source's warning records possible derived-limit/conditional-convergence failure. For: boundary of the theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A, pp. 1--9; Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, pp. 1--12.

### Sources and exact locators

- Davis--Kirk, §8.8 “Generalized homology theories,” printed pp. 227--233,
  and §9.2, pp. 241--244.
- Loizides, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3 and Appendix A,
  printed pp. 1--9, https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
- Ji, *The Atiyah--Hirzebruch Spectral Sequence*, §§1--3, printed pp. 1--12,
  https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf

## AT-18 — `leray-hirsch-thom-isomorphism-and-gysin-sequences`

**A page:** `leray-hirsch-thom-isomorphism-and-gysin-sequences`
**B page:** `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples`
**Requires:** `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`,
`orientations-poincare-lefschetz-and-alexander-duality`

This page supplies the two construction engines for characteristic classes.
Leray--Hirsch includes finite-free and monodromy hypotheses; Thom theory begins
with the trivial bundle, then Mayer--Vietoris gluing, rather than assuming the
isomorphism while defining its class.

### A-page items, in dependency order

- `thm-leray-hirsch-module-isomorphism` — **theorem** — if finitely many global classes restrict componentwise to an $R$-basis of finite-free $H^*(F;R)$, then $H^*(B;R)\otimes H^*(F;R)\to H^*(E;R)$ is an $H^*(B)$-module isomorphism. For: projective-bundle and splitting constructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `lem-global-fiber-basis-trivializes-serre-monodromy` — **lemma** — restrictions of global classes are preserved by fiber transport. For: closes the local-coefficient premise in Leray--Hirsch. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity` — **lemma** — the filtered map with a free chosen basis splits the finite filtration. For: separates collapse from actual module isomorphism. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle` — **definition** — $D(E)$, $S(E)$ and $Th(E)=D(E)/S(E)$, independent up to canonical homeomorphism of metric choice. For: the cofiber carrying the Thom class. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `prop-thom-space-of-zero-and-trivial-bundles` — **proposition** — $Th(0_B)=B_+$ and $Th(\varepsilon^n)=\Sigma^nB_+$. For: rank-zero unit and trivial base case. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `def-r-oriented-vector-bundle-and-orientation-local-system` — **definition** — coherent generators of $H^n(E_x,E_x-0;R)$ define an $R$-orientation, with mod-two automatic orientation. For: exact hypothesis for Thom isomorphism. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `def-thom-class-by-fiberwise-normalization` — **definition** — $u_E\in\widetilde H^n(Th(E);R)\cong H^n(D(E),S(E);R)$ restricts to the chosen generator on every fiber. For: universal class. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `thm-thom-isomorphism-for-a-trivial-oriented-bundle` — **theorem** — cross product with the oriented disk-pair generator gives $H^*(B;R)\cong\widetilde H^{*+n}(Th(\varepsilon^n);R)$. For: local theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `lem-thom-isomorphisms-glue-over-two-trivializing-opens` — **lemma** — relative Mayer--Vietoris and the five lemma combine compatible local Thom classes. For: main gluing step. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover` — **lemma** — induction on the cover applies the two-open lemma. For: separates finite cover from base exhaustion. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `thm-thom-isomorphism-for-oriented-vector-bundles` — **theorem** — for an oriented rank-$n$ bundle over the stated finite-CW/paracompact base, $a\mapsto\pi^*a\smile u_E$ is an isomorphism in every degree. For: class construction and Gysin maps. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `thm-naturality-and-uniqueness-of-thom-classes` — **theorem** — oriented pullback preserves the uniquely normalized class; reversing an integral orientation negates it. For: characteristic naturality and sign. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `thm-external-product-and-whitney-sum-formulas-for-thom-classes` — **theorem** — $u_{E\boxtimes F}=u_E\times u_F$ and the diagonal identifies $u_{E\oplus F}$ with the product, with Koszul/orientation signs. For: multiplicativity of Euler and characteristic classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `def-thom-diagonal-and-zero-section-collapse` — **definition** — the bundle diagonal and zero section induce the cohomology maps used to pull universal fiber classes back to the base. For: Euler construction next. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section` — **definition** — Thom isomorphism followed by extension/collapse defines the degree-$n$ wrong-way map. For: geometric integration along the normal fiber. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle` — **theorem** — the cofiber sequence $S(E)_+\to D(E)_+\to Th(E)$ and Thom isomorphism yield the LES, with its connecting multiplication class defined in AT-19. For: exact sphere-bundle calculations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition` — **proposition** — transverse-free pullback squares and direct sums give the stated naturality/functoriality. For: universal-to-particular characteristic classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.

### B page — `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples`

- `ex-leray-hirsch-for-a-trivial-product-bundle` — **example** — a chosen fiber basis reproduces the Künneth module isomorphism. For: theorem normalisation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `ex-thom-space-of-a-trivial-line-and-plane-bundle` — **example** — identifies the corresponding suspensions of $B_+$. For: rank/sign check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `ex-mod-two-thom-class-of-the-mobius-line-bundle` — **example** — the bundle is not integrally oriented but has its canonical mod-two class. For: coefficient audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity` — **example** — uses its canonical real orientation. For: universal complex line input. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis` — **counterexample** — a bundle with nontrivial monodromy violates the asserted tensor-module formula. For: shows global classes are load-bearing. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.
- `cex-an-unoriented-real-bundle-has-no-integral-thom-class` — **counterexample** — the Möbius line reverses the fiber generator around its base. For: orientation necessity. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Miller, MIT 18.906, Lectures 33--35, pp. 119--132.

### Sources and exact locators

- Miller, MIT 18.906 notes, Chapter 5, Lectures 33--35, printed pp. 119--132.
- Milnor--Stasheff, §§4 and 7--10, printed pp. 37--54 and 83--114.
- Hatcher, *Vector Bundles & K-Theory*, §3.1, printed pp. 77--87, and the
  Euler/Thom portion of §3.2, pp. 88--94.
- May, *A Concise Course in Algebraic Topology*, Chapter 23 §§2 and 5--6,
  printed pp. 189--190 and 194--197.

## AT-19 — `stiefel-whitney-and-euler-classes-by-universal-constructions`

**A page:** `stiefel-whitney-and-euler-classes-by-universal-constructions`
**B page:** `stiefel-whitney-and-euler-classes-by-universal-constructions-examples`
**Requires:** `leray-hirsch-thom-isomorphism-and-gysin-sequences`,
`bocksteins-steenrod-squares-and-cohomology-operations`

This page constructs the real classes.  It stops at bundle-level obstruction
statements.  Tangent/normal-bundle calculations, immersions, vector fields,
cobordism and characteristic numbers are applications owned by DT.

### A-page items, in dependency order

- `def-characteristic-class-as-a-universal-natural-bundle-class` — **definition** — a characteristic class is a pullback-stable assignment, equivalently a class of the universal bundle on $BG$. For: organises all four families. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `def-real-projective-bundle-and-tautological-line` — **definition** — $P(E)\to B$ has fiber $\mathbb{RP}^{n-1}$ and tautological real line $\gamma_E$. For: projective relation defining $w_i$. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-mod-two-real-projective-bundle-theorem` — **theorem** — $H^*(P(E);\mathbb F_2)$ is free over $H^*(B)$ on $1,x,\ldots,x^{n-1}$ with one unique monic degree-$n$ relation, $x=w_1(\gamma_E)$. For: existence and uniqueness of coefficients. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `def-stiefel-whitney-classes-from-the-projective-bundle-relation` — **definition** — $x^n+w_1(E)x^{n-1}+\cdots+w_n(E)=0$, with $w_0=1$ and $w_i=0$ above rank. For: owned construction. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-naturality-of-stiefel-whitney-classes` — **theorem** — pullback of the unique projective relation pulls back every coefficient. For: universal-to-particular classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `def-real-flag-bundle-and-stiefel-whitney-roots` — **definition** — iterative projectivisation splits the pulled-back bundle into line bundles. For: splitting principle. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-real-splitting-principle-with-mod-two-injective-pullback` — **theorem** — the flag-bundle pullback is injective and the bundle splits as a sum of lines. For: reduces identities to symmetric polynomials. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-whitney-sum-formula-for-stiefel-whitney-classes` — **theorem** — $w(E\oplus F)=w(E)w(F)$. For: the defining multiplicativity theorem. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum` — **theorem** — the universal line generator and splitting injectivity force the family. For: shows the construction is canonical. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-mod-two-cohomology-of-bo-n` — **theorem** — $H^*(BO(n);\mathbb F_2)=\mathbb F_2[w_1,\ldots,w_n]$. For: algebraic independence and universal computations. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `prop-first-stiefel-whitney-class-classifies-orientability` — **proposition** — $w_1(E)=0$ iff the structure group reduces to $SO(n)$, and real line bundles correspond to $H^1(-;\mathbb F_2)$. For: exact orientation obstruction. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `def-euler-class-by-zero-section-pullback-of-the-thom-class` — **definition** — $e(E)=s^*u_E\in H^n(B;R)$ for an $R$-oriented rank-$n$ bundle, with $e(0)=1$. For: owned construction and rank-zero unit. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` — **theorem** — pullback preserves $e$, reversing orientation negates it, and $e(E\oplus F)=e(E)e(F)$ with product orientation. For: complete bundle-level algebra. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class` — **theorem** — $\rho_2e(E)=w_n(E)$. For: relates Thom and projective constructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish` — **proposition** — the zero section moves off itself and its Thom pullback vanishes for positive rank. For: necessary obstruction only. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` — **proposition** — fiberwise $-1$ reverses orientation by $(-1)^n$ but is homotopic as a bundle automorphism, so $2e=0$ for odd $n$. For: corrects the false unconditional vanishing slogan. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `thm-thom-identity-for-stiefel-whitney-classes` — **theorem** — for the Thom class $u_E$, $Sq(u_E)=w(E)\smile u_E$ under the Thom isomorphism. For: relates the Steenrod and projective-bundle constructions without applying classes to tangent bundles. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.

### B page — `stiefel-whitney-and-euler-classes-by-universal-constructions-examples`

- `ex-stiefel-whitney-class-of-the-universal-real-line` — **example** — $w_1(\gamma)$ generates $H^1(\mathbb{RP}^{\infty};\mathbb F_2)$. For: normalization. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `ex-total-stiefel-whitney-class-of-a-sum-of-universal-lines` — **example** — all elementary symmetric classes occur on $(\mathbb{RP}^{\infty})^n$. For: algebraic independence check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `ex-euler-class-of-the-universal-oriented-two-plane` — **example** — over $BSO(2)\simeq\mathbb{CP}^{\infty}$ it is the chosen degree-two generator. For: Euler normalization. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `ex-euler-class-of-zero-and-trivial-positive-rank-bundles` — **example** — $e(0)=1$ while a trivial positive-rank bundle has $e=0$. For: degenerate-rank audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section` — **counterexample** — a source-standard higher-obstruction bundle. For: blocks the unsupported converse. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.
- `cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients` — **counterexample** — the source example realises nonzero two-torsion. For: preserves the exact conclusion $2e=0$. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Milnor--Stasheff, *Characteristic Classes*, §4 and §§7--10, pp. 37--54, 83--114.

### Sources and exact locators

- Miller, MIT 18.906 notes, Lectures 33--35, printed pp. 119--132.
- Milnor--Stasheff, §§4 and 7--10, printed pp. 37--54 and 83--114.
- Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2, printed pp. 77--94.
- May, *A Concise Course in Algebraic Topology*, Chapter 23 §§2 and 5--7,
  printed pp. 189--200.

## AT-20 — `chern-and-pontryagin-classes-by-splitting-and-complexification`

**A page:** `chern-and-pontryagin-classes-by-splitting-and-complexification`
**B page:** `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`
**Requires:** `complex-topological-k-theory-and-bott-periodicity`,
`stiefel-whitney-and-euler-classes-by-universal-constructions`

The adopted topology convention is that projectivisation parametrises lines,
$x=c_1(\gamma)$, and the top Chern class equals the Euler class of the
complex-oriented underlying real bundle.  Algebraic geometry commonly chooses
$c_1(\gamma^*)$ as positive; consumers must negate the generator or dualise.

### A-page items, in dependency order

- `def-complex-projective-bundle-and-tautological-complex-line` — **definition** — $P(E)$ parametrises one-dimensional subspaces and carries $\gamma_E\subset\pi^*E$. For: fixes the line-versus-quotient convention. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-integral-complex-projective-bundle-theorem` — **theorem** — $H^*(P(E);\mathbb Z)$ is free on $1,x,\ldots,x^{n-1}$ with the unique relation $x^n-c_1(E)x^{n-1}+\cdots+(-1)^nc_n(E)=0$. For: constructs Chern coefficients. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `def-chern-classes-from-the-projective-bundle-relation` — **definition** — the unique coefficients define $c_i(E)$, with $c_0=1$ and vanishing above rank. For: owned universal construction. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `def-complex-flag-bundle-and-chern-roots` — **definition** — iterated projectivisation splits the pullback into complex lines with roots $x_i=c_1(L_i)$. For: symmetric-polynomial method. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-complex-splitting-principle-with-integral-injective-pullback` — **theorem** — flag-bundle pullback is injective and splits the bundle. For: proves all Chern identities. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-naturality-normalization-and-whitney-sum-for-chern-classes` — **theorem** — $c(f^*E)=f^*c(E)$, $c_1(\gamma)$ is the chosen generator, and $c(E\oplus F)=c(E)c(F)$. For: core axioms. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-uniqueness-of-chern-classes-from-the-splitting-principle` — **theorem** — line normalization, naturality and Whitney sum uniquely determine the family. For: convention stability. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-integral-cohomology-of-bu-n` — **theorem** — $H^*(BU(n);\mathbb Z)=\mathbb Z[c_1,\ldots,c_n]$. For: universal algebraic independence. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-first-chern-class-classifies-complex-line-bundles` — **theorem** — for CW bases, $c_1:\operatorname{Pic}_{\mathrm{top}}(X)\to H^2(X;\mathbb Z)$ is an isomorphism. For: connects $BU(1)=K(\mathbb Z,2)$ to bundles. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `prop-first-chern-class-of-tensor-dual-and-conjugate-lines` — **proposition** — $c_1(L\otimes M)=c_1(L)+c_1(M)$ and $c_1(L^*)=c_1(\overline L)=-c_1(L)$. For: signs and AV comparison. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle` — **theorem** — $c_n(E)=e(E_{\mathbb R})$ under the complex orientation. For: joins Chern and Thom constructions. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-mod-two-reduction-of-chern-classes` — **theorem** — $w_{2i}(E_{\mathbb R})=\rho_2c_i(E)$ and $w_{2i+1}(E_{\mathbb R})=0$. For: real/complex comparison. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `prop-complexification-is-conjugation-invariant` — **proposition** — $E_{\mathbb C}\cong\overline{E_{\mathbb C}}$ for real $E$. For: sign symmetry behind Pontryagin classes. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion` — **corollary** — conjugation changes $c_{2i+1}$ by a sign while the bundle is unchanged. For: exact integral caveat. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `def-pontryagin-classes-by-complexification` — **definition** — $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$, with $p_0=1$ and rank cutoff. For: fixes the standard sign. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes` — **theorem** — pullback/trivial stabilisation preserve $p_i$ and $\rho_2p_i(E)=w_{2i}(E)^2$. For: basic comparison laws. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-pontryagin-whitney-product-away-from-two` — **theorem** — $p(E\oplus F)=p(E)p(F)$ over $\mathbb Z[1/2]$-algebras; integrally the source-stated discrepancy is two-primary torsion. For: avoids the common false unrestricted formula. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-top-pontryagin-class-is-the-square-of-the-euler-class` — **theorem** — for an oriented real rank-$2n$ bundle, $p_n(E)=e(E)^2$ with the adopted signs. For: top-class relation. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes` — **theorem** — states the source-correct polynomial presentations by rank parity after inverting two. For: universal independence and applications by consumers. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `def-chern-character-of-a-complex-vector-bundle` — **definition** — under the now-established splitting principle, $\operatorname{ch}(E)=\sum_i e^{x_i}$ in even rational cohomology. For: rational comparison with complex $K$. **Provenance:** statement `literature-derived`; proof `not-applicable`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero` — **theorem** — symmetric power-series identities prove additivity, multiplicativity and independence of splitting, so the class extends to virtual bundles. For: $K$-theory comparison. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `thm-rational-chern-character-isomorphism-for-finite-cw-complexes` — **theorem** — $\operatorname{ch}:K^*(X)\otimes\mathbb Q\cong H^{\mathrm{even/odd}}(X;\mathbb Q)$ naturally. For: closes the rational relation after both sides are built. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.

### B page — `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`

- `ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space` — **example** — $c_1(\gamma^*)=-c_1(\gamma)$ exposes the adopted sign. For: DG/AV interface audit. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `ex-chern-classes-of-a-sum-of-universal-complex-lines` — **example** — elementary symmetric polynomials realise all universal $c_i$. For: splitting verification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree` — **example** — clutching degree agrees with $c_1$ under the printed orientation. For: classification sign check. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `ex-realification-of-a-complex-line-compares-c-one-w-two-and-euler` — **example** — $\rho_2c_1=w_2$ and $c_1=e$. For: three-construction consistency. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `ex-stability-and-rank-cutoff-under-adding-a-trivial-summand` — **example** — classes are unchanged while higher classes remain zero. For: boundary verification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.
- `cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion` — **counterexample** — the source's two-primary example defeats the unrestricted slogan. For: preserves the theorem's coefficient qualification. **Provenance:** statement `literature-derived`; proof `ai-altered`. **Source locator:** Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2 and §4.1, pp. 77--97, 109--114; Milnor--Stasheff, §§13--15, pp. 149--182.

### Sources and exact locators

- Hatcher, *Vector Bundles & K-Theory*, §§3.1--3.2, printed pp. 77--97.
- Milnor--Stasheff, §§13--15, printed pp. 149--182.
- Miller, MIT 18.906 notes, Lectures 33--36, printed pp. 119--136.
- May, *A Concise Course in Algebraic Topology*, Chapter 23 §7,
  printed pp. 197--200, and Chapter 24 §§3--4, pp. 208--212.

---

## 6. Per-pair source matrix: full treatments actually read

“Full treatment” here means that the cited range constructs and proves the
pair's main results, not that its title merely mentions them. Printed book/PDF
pages are used. Repeated authors are independent treatments only when the work
itself is independent; host count is reported separately in §12.

| pair | treatment 1, exact range read | treatment 2, exact range read | additional control |
|---|---|---|---|
| `AT-1` | Hatcher, *Algebraic Topology* (AT), Ch. 2 §2.1 “Delta-Complexes” and “Simplicial Homology,” pp. 102--109, and §2.C pp. 177--184 | Nanda, *Computational Algebraic Topology*, Lectures 1 §§1.1--1.5 pp. 4--13 and 3 §§3.1--3.4 pp. 30--41 | May Ch. 13 §2 and §5 pp. 97--106 and Ch. 16 §§2--4 pp. 124--128 |
| `AT-2` | Hatcher AT §2.1 “Singular Homology” and “Homotopy Invariance,” pp. 108--113 | Miller, MIT 18.905, §§1--7, pp. 1--18 | May Ch. 16 §§1--3, pp. 123--126 |
| `AT-3` | Hatcher AT §2.1 “Exact Sequences and Excision” through “Equivalence,” pp. 113--133, and §2.2 “Mayer--Vietoris,” pp. 149--153 | Miller, MIT 18.905, §§8--13, pp. 18--34 | May Ch. 14 §§2--6, pp. 108--116 |
| `AT-4` | Hatcher AT Ch. 0 pp. 5--20 and Ch. 2 §2.2 “Cellular Homology,” pp. 137--149 | Miller, MIT 18.905, §§14--18, pp. 35--47 | May Ch. 10 pp. 73--82 and Ch. 13 §§2--3 pp. 97--106 |
| `AT-5` | Hatcher AT §2.2 “Degree,” pp. 134--137, and §2.3 “Axioms for Homology,” pp. 160--165 | Miller, MIT 18.905, §§9--11, pp. 19--29, together with May Chs. 13--15 pp. 95--122 | **Uniqueness subclaim only:** May pp. 119--122 / —; no second complete open proof found |
| `AT-6` | Hatcher AT Ch. 3 §3.1, pp. 185--205, and Künneth applications pp. 218--225 | Miller, MIT 18.905, §§26--29 and §33, pp. 69--81 and 91--93 | Davis--Kirk §§1.4--1.5 pp. 14--21 and §§3.2--3.5 pp. 54--70 |
| `AT-7` | Hatcher AT Ch. 3 §3.2, pp. 206--229, and cap product pp. 239--241 | Miller, MIT 18.905, §§28--30 and 33--34, pp. 76--83 and 91--96 | Davis--Kirk §§3.2--3.5, pp. 54--70 |
| `AT-8` | Hatcher AT §3.3, pp. 230--260, §2.B pp. 169--176 and §2.C pp. 177--184 | Miller, MIT 18.905, §§31--38, pp. 83--108 | May Chs. 20--21, pp. 151--174; Walton §4.7 pp. 95--99 |
| `AT-9` | Hatcher AT §3.E, pp. 303--306, and §4.L, pp. 494--518 | May Ch. 22 §§4--5, pp. 181--186, and Ch. 18 §1, pp. 137--140 | Miller, MIT 18.906, Lecture 37, pp. 133--138 |
| `AT-10` | May Chs. 6, 8 and 9, pp. 43--48 and 57--72 | Davis--Kirk Ch. 6 §§6.8--6.16, pp. 127--160 | Miller, MIT 18.906, Ch. 1 §§5--9, pp. 13--30 |
| `AT-11` | May Ch. 7 pp. 49--56 and Ch. 9 §§3--5 pp. 68--72 | Davis--Kirk Ch. 6 §§6.2--6.7 and §§6.13--6.15, pp. 114--126 and 139--153 | Hatcher AT §4.2 pp. 375--384 and §4.3 pp. 405--410 |
| `AT-12` | Hatcher AT §4.1--4.2, pp. 346--374 and 384--392 | May Chs. 10--11 and 15, pp. 73--90 and 117--122 | Miller, MIT 18.906, Ch. 1 §8 and Ch. 2 §§10--13, pp. 23--26 and 31--42 |
| `AT-13` | Davis--Kirk Ch. 7, pp. 165--193, and §8.6 pp. 217--218 | Miller, MIT 18.906, Ch. 2 §§12--15 pp. 37--52 and Ch. 3 §§17--20 pp. 56--67 | Hatcher AT §4.3 pp. 393--420; May Ch. 18 §5 pp. 142--144 |
| `AT-14` | Hatcher AT Ch. 5 §5.1 application portions, pp. 526--579 | Miller, MIT 18.906, Ch. 4 §§24, 26--27, 29--31, pp. 80--111 | Davis--Kirk §§9.2--9.5 pp. 241--260 and §§10.1--10.3 pp. 267--282 |
| `AT-15` | Hatcher, *Vector Bundles & K-Theory* (VBKT), Ch. 1 §§1.1--1.2, pp. 6--37 | Miller, MIT 18.906, Lectures 16--21, pp. 53--72 | Milnor--Stasheff §§2--3 pp. 13--36 and §§5--6 pp. 55--82 |
| `AT-16` | Hatcher VBKT §§2.1--2.2 pp. 39--58 | May Ch. 24 §§1--2, pp. 203--208 | Ramras course Lectures 27--29 and five Bott lectures (decomposition check; no stable printed pagination) |
| `AT-17` | Loizides, *AHSS*, entire §§1--3 and Appendix A, pp. 1--9 | Ji, *AHSS*, entire §§1--3, pp. 1--12 | Davis--Kirk §8.8 pp. 227--233 and §9.2 pp. 241--244 |
| `AT-18` | Miller, MIT 18.906, Lectures 33--35, pp. 119--132 | Milnor--Stasheff §4 pp. 37--54 and §§7--10 pp. 83--114 | Hatcher VBKT §§3.1--3.2 pp. 77--94; May Ch. 23 §§2,5--6 pp. 189--197 |
| `AT-19` | Milnor--Stasheff §4 pp. 37--54 and §§7--10 pp. 83--114 | Hatcher VBKT §§3.1--3.2, pp. 77--94 | Miller Lectures 33--35 pp. 119--132; May Ch. 23 §§2,5--7 pp. 189--200 |
| `AT-20` | Hatcher VBKT §§3.1--3.2 pp. 77--97 and §4.1 pp. 109--114 | Milnor--Stasheff §§13--15, pp. 149--182 | Miller Lectures 33--36 pp. 119--136; May Ch. 23 §7 and Ch. 24 §§3--4 pp. 197--200 and 208--212 |

URLs for the full treatments:

- Hatcher AT chapters and spectral chapter:
  https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html and
  https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf
- Hatcher VBKT: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
- May: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
- Miller MIT 18.905: https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/2dad3dd8354992d877fbeca4049817ee_MIT18_905F16_lecture_notes.pdf
- Miller MIT 18.906: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
- Davis--Kirk: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
- Milnor--Stasheff: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
- Loizides: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
- Ji: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
- Walton: https://jjwalton.github.io/maths_notes/AT.pdf
- Nanda: https://people.maths.ox.ac.uk/nanda/cat/

Every A/B pair has at least two independent full treatments. The only narrower
deficit is the all-CW **uniqueness proof inside AT-5**: May is the only complete
open proof located; Hatcher and Miller together fully treat the rest of the
pair but state/outline rather than complete that proof. This is recorded as a
dash in its matrix cell rather than upgrading a mention.

## 7. Canonical-coverage harvest and heading-to-item crosswalk

The denominator is a normalized list of canonical source headings: duplicate
headings from independent treatments count once when they cover the same
mathematical unit. The table records the direct spine items attached to each
normalized unit. Complete item-side traceability takes the inline-locator route:
all 568 proposed item rows name a treatment and exact range already recorded in
§6, so the table need not duplicate the full item census. The normalized
denominator is unchanged.

**Unattributed items:** none.

| disposition | canonical source heading | pair | proposed item ids produced |
|---|---|---|---|
| included | Delta-complexes / abstract simplicial complexes | `AT-1` | `def-abstract-simplicial-complex`, `def-geometric-realization-of-an-abstract-simplicial-complex`, `def-simplicial-map-and-its-geometric-realization`, `ex-a-delta-complex-structure-on-the-torus` |
| included | Simplicial homology | `AT-1` | `def-orientation-of-a-simplex`, `def-simplicial-chain-groups-and-boundary`, `thm-the-simplicial-boundary-squares-to-zero`, `def-simplicial-cycles-boundaries-and-homology`, `prop-zero-th-simplicial-homology-is-free-on-connected-components` |
| included | Geometric realization and simplicial approximation | `AT-1`,`AT-8` | `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial`, `def-contiguous-simplicial-maps`, `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology`, `thm-simplicial-approximation-after-sufficient-subdivision` |
| included | Singular homology | `AT-2` | `def-standard-topological-simplex-and-its-affine-face-maps`, `def-singular-simplex-and-singular-chain-group-with-coefficients`, `thm-the-singular-boundary-squares-to-zero`, `def-singular-chain-complex-and-singular-homology` |
| included | Homotopy invariance | `AT-2` | `def-prism-operator-for-a-homotopy`, `thm-singular-chain-homotopy-formula`, `cor-homotopic-maps-induce-the-same-map-on-singular-homology`, `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology` |
| included | Relative homology and exact sequence of a pair | `AT-3` | `def-singular-chain-complex-of-a-pair`, `thm-long-exact-sequence-of-a-pair-in-singular-homology`, `def-relative-homology-connecting-homomorphism-on-cycles`, `thm-naturality-of-the-long-exact-sequence-of-a-pair` |
| included | Subdivision, locality and excision | `AT-3` | `def-barycentric-subdivision-chain-operator`, `thm-barycentric-subdivision-is-chain-homotopic-to-the-identity`, `thm-cover-small-singular-chains-compute-singular-homology`, `thm-excision-for-singular-homology` |
| included | Mayer--Vietoris sequences | `AT-3` | `thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence`, `thm-mayer-vietoris-sequence-in-singular-homology`, `def-mayer-vietoris-connecting-class`, `thm-naturality-of-singular-mayer-vietoris` |
| included | Equivalence of simplicial and singular homology | `AT-2`,`AT-3` | `def-simplicial-to-singular-chain-map`, `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` |
| included | CW complexes | `AT-4` | `def-cell-attachment-by-a-characteristic-map`, `def-cw-complex-with-closure-finiteness-and-weak-topology`, `def-skeleta-cw-subcomplex-and-relative-cw-complex`, `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells` |
| included | Cellular homology | `AT-4` | `thm-relative-homology-of-consecutive-cw-skeleta`, `def-cellular-boundary-from-three-consecutive-skeleta`, `thm-cellular-homology-computes-singular-homology`, `thm-cellular-boundary-is-the-incidence-degree-matrix` |
| included | Euler characteristic | `AT-1`,`AT-4` | `thm-euler-poincare-formula-for-a-finite-simplicial-complex`, `def-euler-characteristic-of-a-finite-cw-complex`, `thm-euler-poincare-formula-for-finite-cw-complexes` |
| included | Axioms for homology | `AT-5` | `def-unreduced-homology-theory-on-cw-pairs`, `thm-singular-homology-satisfies-homotopy-exactness-and-excision`, `thm-singular-homology-satisfies-dimension-and-arbitrary-additivity`, `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs` |
| included | Uniqueness of homology on CW complexes | `AT-5` | `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair`, `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage`, `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs`, `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs` |
| included | Degree | `AT-5` | `def-degree-of-a-self-map-of-an-oriented-sphere`, `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition`, `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`, `thm-global-sphere-degree-is-the-sum-of-local-degrees` |
| included | Brouwer and classical degree applications | `AT-5` | `thm-no-retraction-from-a-disk-onto-its-boundary`, `thm-brouwer-fixed-point-theorem`, `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd`, `thm-invariance-of-dimension-for-euclidean-spaces` |
| included | Cohomology groups and spaces | `AT-6` | `def-singular-cochain-complex-with-coefficients`, `def-singular-cohomology-with-coefficients`, `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`, `thm-mayer-vietoris-sequence-in-singular-cohomology` |
| included | Universal coefficients for cohomology | `AT-6` | `def-kronecker-evaluation-pairing`, `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`, `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`, `cor-integral-cohomology-detects-adjacent-homology-torsion` |
| included | Künneth formula for spaces | `AT-6`,`AT-7` | `thm-topological-kunneth-short-exact-sequence-for-homology`, `cor-field-kunneth-isomorphism-for-homology-of-products`, `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism` |
| included | Cross and cup products / cohomology ring | `AT-7` | `def-eilenberg-zilber-singular-cross-product`, `def-alexander-whitney-diagonal-approximation`, `def-singular-cup-product-on-cochains`, `thm-cup-product-leibniz-identity`, `thm-singular-cohomology-is-graded-commutative` |
| included | Relative cup and cap products | `AT-7` | `def-relative-cup-product`, `def-cap-product-with-cohomology-first`, `thm-cap-product-boundary-identity`, `def-relative-cap-product` |
| included | Orientations and homology | `AT-8` | `thm-local-homology-detects-interior-points-boundary-points-and-dimension`, `def-orientation-local-system-and-orientation-cover`, `def-r-orientation-of-a-topological-manifold`, `def-fundamental-class-of-a-compact-oriented-manifold` |
| included | Poincaré duality | `AT-8` | `def-compactly-supported-singular-cohomology-of-a-locally-compact-space`, `lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder`, `thm-poincare-duality-for-oriented-topological-manifolds`, `cor-poincare-duality-gives-a-nonsingular-cup-pairing` |
| included | Poincaré--Lefschetz and Alexander duality | `AT-8` | `def-relative-fundamental-class-and-boundary-orientation`, `thm-poincare-lefschetz-duality`, `thm-fully-relative-poincare-lefschetz-duality`, `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere` |
| included | Classical separation and invariance of domain | `AT-8` | `thm-jordan-brouwer-separation`, `thm-invariance-of-domain`, `cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls` |
| included | Lefschetz fixed points | `AT-8` | `def-lefschetz-number-of-a-finite-cw-self-map`, `lem-hopf-trace-formula`, `thm-lefschetz-fixed-point-theorem-for-finite-complexes`, `cex-zero-lefschetz-number-does-not-imply-no-fixed-points` |
| included | Bockstein homomorphism | `AT-9` | `def-bockstein-connecting-operation`, `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative`, `prop-bocksteins-are-natural-and-commute-with-suspension`, `prop-first-steenrod-square-is-the-mod-two-bockstein` |
| included | Steenrod squares and powers | `AT-9` | `def-higher-cup-i-products`, `def-steenrod-squares-from-cup-i-products`, `thm-cartan-formula-for-steenrod-squares`, `thm-adem-relations-for-steenrod-squares`, `def-mod-p-reduced-power-operations` |
| included | Homotopy groups and relative homotopy | `AT-10` | `def-higher-homotopy-group-by-based-cubes`, `thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one`, `def-relative-homotopy-group`, `thm-long-exact-sequence-of-relative-homotopy-groups` |
| included | Cofibrations and Puppe sequences | `AT-10` | `def-cofibration-and-homotopy-extension-property`, `def-mapping-cylinder-and-mapping-cone`, `def-reduced-cone-suspension-and-cofiber-sequence`, `thm-puppe-sequence-is-exact-after-mapping-into-a-based-space` |
| included | Fibrations and homotopy fibers | `AT-11` | `def-hurewicz-and-serre-fibrations`, `def-mapping-path-space-replacement-of-a-map`, `def-homotopy-fiber-of-a-map`, `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration` |
| included | Fiber bundles and monodromy | `AT-11` | `def-fiber-transport-and-monodromy-action`, `def-locally-trivial-fiber-bundle`, `thm-numerable-fiber-bundles-are-hurewicz-fibrations`, `def-principal-g-bundle-and-associated-fiber-bundle` |
| included | Cellular and CW approximation | `AT-12` | `thm-cellular-approximation-for-maps-of-cw-pairs`, `thm-cw-approximation-of-an-arbitrary-space`, `cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative` |
| included | Hurewicz and Whitehead theorems | `AT-12` | `def-hurewicz-homomorphism`, `thm-relative-hurewicz-theorem`, `thm-absolute-hurewicz-theorem`, `thm-whitehead-theorem` |
| included | Homotopy excision and suspension | `AT-12` | `thm-homotopy-excision`, `thm-blakers-massey-connectivity-for-a-homotopy-pushout`, `thm-freudenthal-suspension-theorem` |
| included | Obstruction theory | `AT-13` | `def-primary-cellular-obstruction-cochain`, `thm-the-primary-obstruction-cochain-is-a-cocycle`, `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton`, `def-difference-cochain-between-two-cellular-extensions` |
| included | Eilenberg--MacLane spaces and cohomology construction | `AT-13` | `def-eilenberg-maclane-space`, `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces`, `thm-eilenberg-maclane-spaces-represent-singular-cohomology` |
| included | Postnikov towers | `AT-13` | `def-postnikov-section-and-postnikov-tower`, `thm-postnikov-towers-exist-for-connected-cw-complexes`, `def-postnikov-k-invariant`, `thm-simple-postnikov-stages-are-classified-by-k-invariants` |
| included | Classifying spaces | `AT-13` | `def-universal-principal-bundle-and-classifying-space`, `thm-milnor-join-model-is-a-contractible-free-g-space`, `thm-principal-bundles-are-classified-by-maps-to-bg`, `cor-classifying-space-of-a-discrete-group-is-a-k-g-one` |
| included | Homology Serre spectral sequence | `AT-14` | `def-fiber-homology-local-system-of-a-serre-fibration`, `def-serre-filtration-of-the-total-space-over-base-skeleta`, `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`, `thm-homological-serre-spectral-sequence` |
| included | Cohomology Serre spectral sequence and multiplicativity | `AT-14` | `thm-cohomological-serre-spectral-sequence`, `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`, `def-serre-edge-homomorphisms-and-transgression`, `prop-serre-transgression-agrees-with-the-relative-connecting-construction` |
| included | Serre applications: Gysin, Wang, Serre classes and $K(A,n)$ | `AT-14` | `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence`, `thm-wang-sequence-for-a-fibration-over-the-circle`, `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`, `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator` |
| included | Vector bundles and pullbacks | `AT-15` | `def-real-and-complex-topological-vector-bundle`, `thm-vector-bundles-glued-from-transition-cocycles`, `def-pullback-vector-bundle-and-pullback-section`, `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles` |
| included | Metrics, complements and homotopy invariance | `AT-15` | `thm-numerable-vector-bundles-admit-bundle-metrics`, `cor-short-exact-sequences-of-vector-bundles-split-over-the-base`, `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases`, `thm-homotopy-invariance-of-vector-bundle-pullback` |
| included | Universal bundles and Grassmannian classification | `AT-15` | `def-stiefel-space-grassmannian-and-tautological-bundle`, `thm-stable-stiefel-space-is-contractible`, `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians`, `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` |
| included | Clutching functions | `AT-15` | `def-clutching-construction-for-bundles-over-a-suspension`, `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range` |
| included | The functor $K(X)$ and its ring structure | `AT-16` | `def-whitney-sum-monoid-of-complex-vector-bundles`, `def-complex-topological-k-zero-by-grothendieck-completion`, `def-grothendieck-ring-structure-and-rank-map`, `def-reduced-complex-k-theory` |
| included | Fundamental product theorem and Bott periodicity | `AT-16` | `lem-normalized-clutching-data-for-bundles-over-x-times-s-two`, `lem-uniform-laurent-approximation-through-bundle-automorphisms`, `lem-polynomial-clutching-families-stabilize-to-linear-clutching`, `thm-fundamental-product-theorem-for-complex-k-theory`, `thm-complex-bott-periodicity` |
| included | Exact sequences and extension to a cohomology theory | `AT-16` | `thm-reduced-k-theory-exact-sequence-of-a-cofibration`, `def-negative-degree-complex-k-groups`, `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory` |
| included | Chern character | `AT-20` | `def-chern-character-of-a-complex-vector-bundle`, `thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero`, `thm-rational-chern-character-isomorphism-for-finite-cw-complexes` |
| included | Generalized cohomology theories | `AT-17` | `def-reduced-generalized-cohomology-theory`, `prop-reduced-and-unreduced-generalized-cohomology-theories-correspond`, `def-coefficient-groups-of-a-generalized-cohomology-theory` |
| included | Atiyah--Hirzebruch spectral sequence | `AT-17` | `def-skeletal-filtration-for-generalized-cohomology`, `lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients`, `thm-cohomological-atiyah-hirzebruch-spectral-sequence`, `thm-homological-atiyah-hirzebruch-spectral-sequence` |
| included | Complex-$K$ AHSS applications | `AT-17` | `cor-complex-k-theory-ahss`, `thm-first-possible-complex-k-ahss-differential-is-integral-sq-three`, `ex-complex-k-ahss-for-complex-projective-space`, `ex-complex-k-ahss-for-real-projective-space` |
| included | Leray--Hirsch theorem | `AT-18` | `lem-global-fiber-basis-trivializes-serre-monodromy`, `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity`, `thm-leray-hirsch-module-isomorphism` |
| included | Thom spaces and Thom isomorphism | `AT-18` | `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`, `def-thom-class-by-fiberwise-normalization`, `thm-thom-isomorphism-for-a-trivial-oriented-bundle`, `lem-thom-isomorphisms-glue-over-two-trivializing-opens`, `thm-thom-isomorphism-for-oriented-vector-bundles` |
| included | Gysin construction | `AT-18` | `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section`, `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle`, `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition` |
| included | Stiefel--Whitney classes | `AT-19` | `thm-mod-two-real-projective-bundle-theorem`, `def-stiefel-whitney-classes-from-the-projective-bundle-relation`, `thm-real-splitting-principle-with-mod-two-injective-pullback`, `thm-whitney-sum-formula-for-stiefel-whitney-classes` |
| included | Euler class | `AT-19` | `def-euler-class-by-zero-section-pullback-of-the-thom-class`, `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`, `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class`, `prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish` |
| included | Chern classes and complex splitting principle | `AT-20` | `thm-integral-complex-projective-bundle-theorem`, `def-chern-classes-from-the-projective-bundle-relation`, `thm-complex-splitting-principle-with-integral-injective-pullback`, `thm-naturality-normalization-and-whitney-sum-for-chern-classes` |
| included | Pontryagin classes | `AT-20` | `prop-complexification-is-conjugation-invariant`, `def-pontryagin-classes-by-complexification`, `thm-pontryagin-whitney-product-away-from-two`, `thm-top-pontryagin-class-is-the-square-of-the-euler-class` |

## 8. Boundary-case and dependency-closure audit

- Empty spaces/bases, empty subcomplexes, $A=\varnothing$ and $A=X$, rank
  zero, zero cells, and disconnected components are explicit in the relevant
  definitions or B leaves. $S^0$ is excluded from the one-integer sphere-degree
  convention and checked separately.
- Infinite singular chains are never used: chains have finite support. Infinite
  CW arguments factor compact representatives through finite subcomplexes.
  Infinite-CW AHSS convergence is explicitly denied.
- Every connecting map has a representative/lift-independence item before its
  exact sequence. Excision separates subdivision, mesh decay, finite-chain
  smallness and small-chain equivalence. Duality separates local, two-open,
  finite-union and exhaustion stages.
- UCT, Künneth, exact couples, general spectral-sequence convergence, Ext and
  Tor are cited to HA. Serre and AHSS pages prove only their topological
  filtration and application-specific identifications.
- Every B page is a leaf. No `ex-` or `cex-` id appears in a `Requires:` line or
  in another item's “For:” dependency rationale. No generated statement is a
  dependency target; in fact this scaffold proposes no generated mathematical
  statement at all.

## 9. Deliberately not decomposed

These headings were read and intentionally produced no items. The reason is
specific to the heading, not a blanket “advanced” disposition.

| heading read | disposition and seam reason |
|---|---|
| Nanda “Data Filtrations” | persistent/TDA material is peripheral to this singular-theory commission and would require a separate filtered-data track |
| Nanda “Smith Decomposition” | integer normal-form structure is algebra-owned; AT examples may use it but do not remint it |
| Hatcher §2.B division-algebra multiplications and group actions on spheres | peripheral H-space/group-action applications; neither closes the classical separation theorem |
| Miller Wall finiteness/minimal-cell theorem | stated without the needed finiteness-obstruction development and peripheral to cellular homology |
| Hatcher polynomial-cohomology “Cohen--Macaulay Rings” | commutative-algebra structure is another track and not needed for the projective examples |
| Miller/Davis--Kirk full Čech-cohomology machinery | AV owns Čech/sheaf comparison; singular compact supports suffice for AT duality |
| May vector-field index and tangent-bundle Euler applications | DT owns characteristic-class applications; AT constructs only the bundle classes |
| Hatcher §3.F transfer homomorphisms beyond the bundle maps used locally | broad finite-cover transfer theory is peripheral to the commissioned core |
| Hatcher Ch. 5 “Exact Couples”; Miller §§23,25,28; Davis--Kirk §9.1 | HA owns exact couples, filtered complexes and general convergence; AT cites the published pages |
| Hatcher Ch. 5 Adams and EHP spectral sequences | later stable/unstable computations, not Serre/AHSS applications required here |
| Hatcher Ch. 5 localization and Miller James/Bousfield material | requires a separate localization/stable-homotopy spine and is not dependency-closing for this track |
| Davis--Kirk group homology chapter | already in the homological-algebra/domain-specific group-homology remit |
| Davis--Kirk framed bordism and bordism AHSS examples | DT owns cobordism and Pontryagin--Thom by the binding seam |
| Miller Čech category as a cohomology theory | only its classifying-map proof technique is used; AV owns the cohomology comparison |
| Hatcher VBKT §2.3 H-spaces and Adams operations | not required for complex Bott periodicity or AHSS; would begin a separate stable-operations block |
| Hatcher VBKT Ch. 4 $J$-homomorphism, $e$-invariant and Bernoulli denominators | stable homotopy beyond the requested characteristic construction |
| Milnor--Stasheff §§11--12 smooth-manifold computations and obstructions | DT owns tangent/normal-bundle applications and obstruction calculations |
| Milnor--Stasheff §§16--20 characteristic numbers, cobordism, signature and combinatorial Pontryagin classes | DT/PL-manifold machinery; AT's universal classes are sufficient supplier interfaces |
| Milnor--Stasheff Appendix C connections and curvature | DG owns Chern--Weil representatives and smooth comparison |
| Real $KO$-theory and real Bott periodicity | no complete Hatcher treatment exists and complex $K$ closes AHSS; a thin real page would violate source depth |
| Motivic/algebraic $K$-theory and motivic AHSS variants | AV/algebraic geometry, not topological vector bundles |
| Infinite-CW AHSS convergence | requires missing conditional-convergence and $\lim^1$ machinery; the theorem is restricted to finite CW complexes instead |
| Unconditional integral Whitney multiplicativity for Pontryagin classes | false in the suppressed two-torsion form; AT-20 states only the source-correct qualification |
| Converse “Euler class zero implies a nowhere-zero section” | false without dimension/higher-obstruction hypotheses; AT-19 proves only the necessary direction |
| Morse CW structures, cobordism, Pontryagin--Thom and characteristic numbers | expressly DT-owned under seams §4/§6 |

## 10. Amendments owed to consumer tracks

### Differential geometry

1. `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` must remove
   its locally planned ordinary singular-chain/cochain construction and consume:
   `def-singular-simplex-and-singular-chain-group-with-coefficients`,
   `prop-singular-chains-and-homology-are-covariantly-functorial`,
   `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence`,
   `def-singular-cochain-complex-with-coefficients`,
   `prop-singular-cohomology-is-contravariantly-functorial`,
   `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`, and
   `thm-mayer-vietoris-sequence-in-singular-cohomology`. DG retains smooth
   singular simplices/chains and proves their inclusion is a chain-homotopy
   equivalence compatible with those AT maps.
2. `the-de-rham-theorem-and-degree` consumes the real versions of
   `def-kronecker-evaluation-pairing`, `def-singular-cohomology-ring`,
   `thm-singular-cohomology-is-graded-commutative`,
   `def-fundamental-class-of-a-compact-oriented-manifold`,
   `def-degree-of-a-map-between-oriented-closed-manifolds`, and
   `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`. DG must
   prove integration identifies wedge with cup and its smooth regular-value
   degree agrees with this homological degree.

### Differential topology

DT may cite AT-15 and AT-18--AT-20 for topological bundle classification,
Thom/Gysin, and the construction/naturality/Whitney formulas of $w,c,p,e$.
DT retains Morse theory, handles, smooth tangent/normal applications,
cobordism, Pontryagin--Thom, characteristic numbers, transversality, immersion
and signature results. Its relative Morse label may be cited only by later
consumers for CW homotopy type; no AT proof depends on it.

### Algebraic geometry

AV retains sheaves, Čech and sheaf cohomology and the algebraic de Rham/Čech
comparison. AT projectivises by **lines** and takes $x=c_1(\gamma)$; an AV
quotient-line convention must dualise, so its positive hyperplane generator is
$c_1(\gamma^*)=-x$.

### Deferred catalogue

Once spliced, exact deferred claims covered by singular homology/cohomology,
duality, higher homotopy/fibrations, Serre/AHSS, bundles, Thom theory and the
four characteristic families should be removed by exact-claim match. Broad
stable-homotopy, bordism, $KO$, Adams and Eilenberg--Moore entries remain.

## 11. Forward-reference and choice ledger

- There are no within-track forward dependencies: every A page depends only on
  prior page ids in the AT reading order or on existing/planned supplier pages.
  The AT-14/AT-18 Gysin rows describe their transgression/multiplication class
  without using the later name “Euler” as a premise; AT-19 later identifies it.
- `AV` and `DT` references above are amendments/consumer interfaces, not proof
  premises. The track therefore does not wait on either concurrent scaffold.
- Cell-attachment/CW-approximation, Milnor join and choices of bases/generators
  use ordinary choice where the source does. Every finite computation and every
  explicit B example is ZF-safe. No dependent choice claim is hidden in a
  phrase such as “choose successively”; finite maxima and compact supports are
  stated where used.
- Full-PDF shell downloads were blocked by DNS in the sandbox. The same full
  documents and printed pages were read through the web reader. This was
  recorded rather than prompting for network permission and did not block the
  source audit.

## 12. Verified measurements

The following figures are mechanically re-derived from this finished file, not
copied from the dispatch:

- **Before:** 0 proposed item ids; this target file did not exist when the lane
  began.
- **After:** 568 distinct proposed item ids (568 mathematical-content
  rows, with no duplicate id).
- **Traceability completion:** before this pass, §7 named 231 of the 568 ids and
  no item row carried an inline locator; after it, 568/568 item rows carry an
  exact treatment-and-range locator. The unattributed set is empty.
- **Included denominator:** 60 normalized canonical heading dispositions in §7.
  This denominator counts a mathematical source heading once even when several
  independent treatments repeat it; source-specific duplicates are evidence
  for the matrix, not extra coverage units.
- **Decomposition ratio:** **9.47×** = 568 / 60. The ratio is a result of
  splitting the cited proofs and their boundary lemmas, not a quota; no row was
  minted merely to raise it.
- **Largest A page:** `simplicial-complexes-and-simplicial-homology` (`AT-1`)
  with 30 items. No A page exceeds 60.
- **Splits made:** the initially anticipated generalized/AHSS page was split
  into AT-16 complex $K$/Bott and AT-17 generalized/AHSS; the anticipated
  bundle/Thom/characteristic page was split into AT-15, AT-18, AT-19 and AT-20.
  No theorem was dropped in either split.
- **Independent full-source hosts:** 7 in the required matrix (Cornell,
  Chicago, MIT OCW, Glasgow, Edinburgh, George Mason and Columbia), with Oxford
  and Walton's independent host as additional checks.
- **Component provenance:** every mathematical row has separate statement and
  proof labels; only SCHEMA §3 values occur. There are zero `ai-generated`
  statements and therefore zero generated dependency targets.
