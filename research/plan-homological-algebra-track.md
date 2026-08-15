# Homological algebra track: complexes, derived functors, Ext, Tor, and spectral sequences

Run `subjects-01`, track `homological-algebra`, wave 2. Owner commission
2026-08-13: *amend and expand the prose scaffolds to enrich future mathematical
content*.

This file is a **prose scaffold only**. It writes no page into
`research/plan-spec.json`, authors no item, and runs no level-build gate. It is
the sole file owned by this lane. It supersedes the homological-algebra part of
`research/plan-combinatorics-and-categories.md` in this file only; that prior
scaffold remains untouched. Labels `HA-1`, `HA-2`, ... are relative, and page
references use ids rather than the stale absolute orders in older prose.

The dependency boundary is strict. Additive and abelian categories, exactness,
and the diagram lemmas come from `research/plan-category-theory-track.md`;
modules and exact sequences of modules are published; tensor products belong to
`abstract-algebra`; de Rham theory belongs to `differential-geometry`; Koszul
complexes, regular sequences, and depth belong to `commutative-algebra`.

---

## 0. Summary for the orchestrator

**Track `homological-algebra`, wave 2, run `subjects-01`. This scaffold is complete.**
This file scaffolds seventeen A/B pairs where the live spec has six planned
pairs, all six with empty `items` arrays. The expansion is mathematical rather
than cosmetic: it keeps every A page at or below the owner's 60-item ceiling,
separates constructions from comparison and universality proofs, and gives
convergence hypotheses a page of their own.

### Pairs scaffolded

| label | proposed A-page id | relation to the six empty placeholders | estimated A items |
|---|---|---|---:|
| `HA-1` | `chain-complexes-and-homology` | planned id kept | 47 |
| `HA-2` | `chain-homotopy-and-the-homotopy-category` | split from 381/383 | 40 |
| `HA-3` | `mapping-cones-cylinders-and-chain-triangles` | split from `long-exact-sequences-and-mapping-cones` | 34 |
| `HA-4` | `long-exact-sequences-in-homology` | split from `long-exact-sequences-and-mapping-cones` | 35 |
| `HA-5` | `projective-and-injective-resolutions` | planned id kept | 51 |
| `HA-6` | `derived-functors` | planned id kept; data-supplied form | 44 |
| `HA-7` | `delta-functors-and-universality` | split from `derived-functors` | 34 |
| `HA-8` | `ext-and-balanced-resolutions` | split from `ext-and-tor` | 34 |
| `HA-9` | `yoneda-extensions-and-homological-dimension` | split from `ext-and-tor` | 43 |
| `HA-10` | `tor-flatness-and-global-dimension` | split from `ext-and-tor` | 39 |
| `HA-11` | `universal-coefficients-and-kunneth-theorems` | new graduate continuation | 30 |
| `HA-12` | `group-cohomology-as-a-derived-functor` | required seam to `group-theory` | 41 |
| `HA-13` | `triangulated-categories` | new graduate continuation | 46 |
| `HA-14` | `derived-categories` | new graduate continuation | 53 |
| `HA-15` | `spectral-sequences` | planned id kept | 42 |
| `HA-16` | `double-complexes-exact-couples-and-convergence` | split from `spectral-sequences` | 41 |
| `HA-17` | `grothendieck-spectral-sequences-and-computations` | split from `spectral-sequences` | 38 |

The unused planned A-page ids `long-exact-sequences-and-mapping-cones` and
`ext-and-tor`, and their companions, are retired **before authoring**. Their
empty state was verified from `research/plan-spec.json`; no immutable item id is
affected. The four kept planned ids retain their companions. Every new A page
has the same-id `-examples` companion, and every B page is a leaf.

**Owner-authorised 2026-08-14: APPLIED.** The two empty omnibus ids and their
companions are retired, and the table above is the new HA-1--HA-17 order. No
published page or immutable item id moves.

### Full texts obtained and source corpus

Two standard textbook texts were obtained in full and read over the exact
ranges harvested in §24: Charles A. Weibel, *An Introduction to Homological
Algebra*, Chs 1–6 and 10, and Joseph J. Rotman, *An Introduction to Homological
Algebra*, 2nd ed., Chs 3 and 5–10. These are publisher-controlled/public scans
and are **not claimed to be open-licensed**. The complete, current Stacks
Project chapters *Homological Algebra*, *Derived Categories*, and the relevant
part of *Injectives* were also obtained. Full open lecture-note sets used as
independent controls include Romyar Sharifi's *Homological Algebra* and the
Rutgers 16:640:560 notes. Hilton–Stammbach and Gelfand–Manin were used only over
the accessible ranges explicitly identified in §24; no inaccessible body text
is pretended read. Every pair names at least two independent treatments, at
least one with a harvestable contents list.

### Seams consumed

- From `monoidal-abelian-categories`: `MA-7` through `MA-11`, especially
  `def-additive-functor`, the abelian-category axioms, projective/injective
  **objects**, enough projectives/injectives, exact sequences, and the
  categorical connecting morphism and snake lemma. None is re-minted here.
- From published abstract algebra: `modules-and-module-homomorphisms` and
  `free-modules-and-exact-sequences`, including the module-specific projective
  and injective definitions and theorems that module categories have enough of
  both.
- From the planned abstract-algebra tensor page: balanced maps, bimodules,
  tensor products of a right and a left module, flat modules, tensor right
  exactness, and Hom–tensor adjunction. This track does not author those notions.
- From the planned abstract-algebra page
  `chain-conditions-and-semisimple-modules`: the equivalence between
  semisimplicity, splitting of all short exact module sequences, and all
  modules being projective/injective. `HA-9`/`HA-10` consume those statements
  only after that page is authored.
- From abstract algebra RT-1, `the-group-algebra-and-representations`: the
  finite-support group algebra, augmentation, trivial module, and the
  action/module dictionary, extended there to arbitrary groups and
  commutative coefficient rings before its finite-representation theory.
- From group theory `GT-9`,
  `group-extensions-complements-and-schur-zassenhaus`: the definition of a
  group extension used in the Lyndon--Hochschild--Serre application.
- Owner decision SE-D3: **global choice is not adopted**. A family of
  resolutions indexed by every object is input data. Every assertion that
  $L_nF$ or $R^nF$ is “well defined” is explicitly relative to that data.

### Seams owed

Section §27 records all ten amendments owed: repoint the retained chain page
to the finished abelian/exactness pages; retire the two empty omnibus page ids
and splice the seventeen pairs; obtain stable tensor/flat/bimodule ids from
abstract algebra; use the fixed RT-1 group-algebra page, cite group theory's
fixed `GT-9` extension page in `HA-17`, and hand the derived $H^n(G,M)$ ids to
`GT-21`--`GT-23`; move `differential-geometry`'s anchor to the final companion
and give it the complex/LES/spectral-sequence ids; give
`commutative-algebra` the complex, cone, resolution, Ext, Tor, and dimension
ids while leaving minimality there; add a supersession pointer to the prior
combined scaffold; preserve the category track's projective/injective-object
and connecting-arrow ids; enforce the two-paragraph A-summary, 60-item, and
B-leaf rules at splice; and obtain stable semisimplicity-equivalence ids from
`chain-conditions-and-semisimple-modules`.

### Forward references, denials, and blockers

There are **no unresolved item-level forward references within the block**.
Each A page closes with `Forward references: NONE`; the order in §5 is a
topological order. The fixed RT-1 group-ring/action ids, MOD-3 tensor/flat ids,
and MOD-4 semisimplicity ids remain unauthored supplier dependencies, not
unresolved ownership questions. The owner-authorised final
differential-geometry anchor is settled in this scaffold; the excluded global
plan splice still has to enact it. The remaining naming checks are the final
`MA-9` projective/injective ids and commutative algebra's locally defined
minimal-resolution theorem. The ordinary localization seam is closed locally
on `HA-14`. None is disguised as an A-item dependency on a later page.

The scope denials in §26 are: de Rham theory; Koszul complexes, regular
sequences, depth, and Auslander–Buchsbaum–Serre; sheaf/Čech and local
cohomology; derived inverse limits and derived completion; change-of-rings
spectral sequences; relative homological algebra and cotorsion/model structures;
Hochschild, cyclic, and André–Quillen theories; Tate and profinite/Galois
cohomology; low-degree group-theoretic interpretations, Schur multipliers,
universal central extensions, Hopf's formula, and the free-group dimension
calculation; Leray–Serre and Eilenberg–Moore spectral sequences;
multiplicative spectral sequences; general unbounded K-injective/K-projective/
K-flat replacement; dg, model, stable, and derived $\infty$-categories; Brown
representability, compact generation, and Bousfield localization; perverse
$t$-structures, tilts, and semiorthogonal decompositions; ring-specific higher
global-dimension calculations; and Lie-algebra cohomology. Each denial states
the missing subject machinery and the page that would license it.

**Blockers: none.** The two textbook texts required by the commission were
reachable. Publisher status is recorded honestly, and every load-bearing fact
is independently controlled by the Stacks Project or a full lecture-note set.

---

## 1. Why this track exists

The live library has no authored chain complex. The six planned A pages in its
homological band — `chain-complexes-and-homology`,
`long-exact-sequences-and-mapping-cones`,
`projective-and-injective-resolutions`, `derived-functors`, `ext-and-tor`, and
`spectral-sequences` — all have empty `items` arrays. Their titles mark the
right destination but compress an entire graduate subject into six pages and,
in two places, combine constructions whose proof obligations should not share a
page.

What is published below the band is substantial and must be used rather than
repeated. Page `modules-and-module-homomorphisms` publishes, among others,
`def-left-and-right-modules`, `def-quotient-module`,
`def-module-homomorphism-kernel-image-and-cokernel`, and the module isomorphism
theorems. Page `free-modules-and-exact-sequences` publishes 29 items, including
`def-exact-and-short-exact-sequences-of-modules`,
`thm-splitting-lemma-for-modules`, `def-projective-module`,
`thm-free-modules-are-projective-with-choice-boundary`,
`thm-direct-sums-of-projectives-and-enough-projectives`,
`def-injective-module`, `thm-baer-criterion-for-injective-modules`, and
`thm-module-categories-have-enough-injectives`. The future tensor page is
planned but unauthored; §27 makes its exact debt to this track explicit.

The finished category-theory scaffold supplies the genuinely categorical base.
`preadditive-and-additive-categories-and-biproducts` supplies addition of
morphisms and additive functors; `abelian-categories` supplies kernels,
cokernels, images, coimages, and exact functors;
`subobject-lattices-generators-and-the-grothendieck-axioms` supplies projective
and injective objects, enough projectives/injectives, and Grothendieck
categories; `exactness-and-the-member-calculus` supplies exact sequences; and
`the-diagram-lemmas-in-an-abelian-category` constructs the connecting arrow and
proves its naturality and the snake, four, five, and nine lemmas. This track
starts with $d^2=0$ and never restates those axioms or lemmas.

The purpose of the expansion is therefore not to make a glossary. It develops
the theory in the order in which each phrase becomes licensed: cycles and
boundaries before homology; homotopies before the homotopy category; cones
before distinguished triangles; comparison maps before derived functors;
resolution independence before functoriality; effacement before universality;
balance before the symmetric notation for Ext and Tor; filtrations before an
abutment; and a proved convergence theorem before any spectral sequence is
said to “compute” anything.

---

## 2. What is deliberately not re-minted

| notion/result | owner | use here |
|---|---|---|
| preadditive/additive/abelian category; biproduct | `monoidal-abelian-categories` | cited in every complex construction |
| kernels, cokernels, images, coimages, exact functors | `monoidal-abelian-categories` | cited to define cycles, boundaries, homology and exact complexes |
| exact sequences and all diagram lemmas, including the categorical connecting arrow | `monoidal-abelian-categories` | cited in `HA-4`; the connecting map in homology is an instance, not a second snake lemma |
| projective and injective **object**; enough projectives/injectives | `monoidal-abelian-categories` | cited in `HA-5`; only resolutions and their consequences are new |
| left/right modules, free modules, module exactness, module projectives/injectives | published abstract algebra | examples and module-specialised corollaries only |
| balanced maps, bimodules, tensor product, flat module, Hom–tensor adjunction | `abstract-algebra` | cited in `HA-10` and `HA-11`, then through them on `HA-14` |
| semisimple-module splitting/projectivity equivalences | `abstract-algebra` | cited by the dimension-zero and Ext/Tor-vanishing consequences on `HA-9`/`HA-10` |
| de Rham complex, Poincaré lemma, de Rham theorem | `differential-geometry` | that track cites the complex and spectral-sequence machinery here |
| Koszul complexes, regular sequences, depth | `commutative-algebra` | that track follows this block and cites Tor/Ext/dimension |
| low-degree group-cohomology interpretations | `group-theory` | this track supplies $H^n(G,M)$, bar resolutions, and functorial algebra only |

The word “resolution” below always means a resolution in an abelian category
with the relevant enough-projectives/enough-injectives hypothesis or a
particular supplied resolution. It never silently imports a module-specific
basis argument.

---

## 3. Standing conventions

### 3.1 Grading and signs

The library adopts Weibel's homological convention for chain complexes:
$d_n:C_n\to C_{n-1}$ and $H_n(C)=\ker d_n/\operatorname{im}d_{n+1}$.
Cochain complexes use upper indices, $d^n:C^n\to C^{n+1}$, and $H^n$.
The translation is $C^n=C_{-n}$ when no reindexing is otherwise declared.

The chain shift is
$(C[k])_n=C_{n-k}$ with $d_{C[k]}=(-1)^k d_C$; the cochain shift is
$(C[k])^n=C^{n+k}$ with the same sign rule. For a chain map $f:C\to D$,

\[
\operatorname{Cone}(f)_n=D_n\oplus C_{n-1},\qquad
d(d,c)=(d_Dd+f(c),-d_Cc).
\]

Thus $D\to\operatorname{Cone}(f)\to C[1]$ is the short exact sequence of
complexes used to obtain the cone long exact sequence. Some sources reverse
the shift symbol and write $C[-1]$ for this same shifted complex; every
statement here is translated to the displayed convention before authoring.

### 3.2 Ext, Tor, and module handedness

Modules are left modules unless marked otherwise. For a possibly
noncommutative ring $R$, $N\otimes_R M$ requires a right $R$-module $N$ and a
left $R$-module $M$. The library writes
$\operatorname{Tor}^R_n(N,M)$ in that order. It writes
$\operatorname{Ext}^n_R(M,N)$, contravariant in $M$ and covariant in $N$.
For commutative $R$, the usual symmetry of Tor is a theorem obtained through
the tensor symmetry, not part of the definition.

### 3.3 Spectral-sequence indexing and convergence words

A homological spectral sequence has
$d^r_{p,q}:E^r_{p,q}\to E^r_{p-r,q+r-1}$; a cohomological one has
$d_r^{p,q}:E_r^{p,q}\to E_r^{p+r,q-r+1}$. A filtered-complex sequence begins
at $E^0$; a double-complex sequence may be named from $E^1$. The page always
prints the differential's bidegree, so a convention cannot be inferred from a
subscript alone.

Following the Stacks Project's warning that the literature is inconsistent,
three assertions are kept distinct:

1. **stabilises at $(p,q)$** means the transition data eventually stop changing;
2. **weakly converges/abuts to $H$** means $E^\infty_{p,q}$ is identified with
   the indicated associated-graded piece of a filtration of $H$;
3. **converges strongly** additionally includes exhaustive, separated, and
   complete/regularity hypotheses sufficient to reconstruct the filtered target
   up to its stated extension problem.

No computation page replaces these hypotheses by an unqualified arrow
`\Rightarrow H`.

### 3.4 Derived functors and choice

Owner decision SE-D3 is binding. A phrase such as “choose a projective
resolution $P(A)\to A$ for every object” is **not** a theorem under the
library's foundations. `HA-6` therefore begins with a supplied resolution datum
$A\mapsto P(A)$ (or $A\mapsto I(A)$), including augmentations. Comparison
uniqueness proves that the resulting object and morphism assignments are
canonical *relative to that datum* and independent up to unique natural
isomorphism when two such data are compared. It does not manufacture a
class-indexed family of choices.

### 3.5 Derived and triangulated categories

The derived category is scaffolded for an essentially small abelian category
or inside a fixed small universe/formula-based locally small setting already
licensed by the category track. It is the localization of $K(\mathcal A)$ at
quasi-isomorphisms, with morphisms represented by roofs and equality supplied
by the calculus of fractions. The bounded variants $D^+$, $D^-$, and $D^b$ are
the primary computational settings. General unbounded replacement theory is a
scope denial (§26), not a hidden hypothesis.

### 3.6 Page metadata boundary

All seventeen A pages and their examples companions remain in the existing
`category-theory` plan category used by the six empty homological-algebra
placeholders. The track name `homological-algebra` is an orchestration label,
not a licence to invent a new schema category. A pages have layout `A`, their
companions layout `B`, and only the A pages may be dependency targets.

---

## 4. Item provenance notation

Every mathematical-content item below carries a two-letter provenance code.
This is a plan for the future item's `provenance.statement` and
`provenance.proof`, not a substitute for its future frontmatter.

| code | planned component provenance | rationale |
|---|---|---|
| `LN` | statement `literature-derived`; proof `not-applicable` | definition/notation or a source-derived false-statement prompt copied faithfully from the pair's named sources |
| `LA` | statement `literature-derived`; proof `ai-altered` | sourced theorem; future proof reorganises or decomposes a standard source proof while preserving the statement |
| `LL` | statement `literature-derived`; proof `literature-derived` | statement and proof follow one named source closely |
| `L0` | statement `literature-derived`; proof `not-supplied` | source-cited orientation only; used solely where §26 expressly allows it and never load-bearing |
| `AN` | statement `ai-generated`; proof `not-applicable` | directly checked example/counterexample; forbidden as a dependency target |
| `AA` | statement `ai-generated`; proof `ai-altered` | directly verified corollary/example; forbidden as a dependency target |

No theorem, proposition, lemma, or definition in this scaffold has an
AI-generated statement. `AN`/`AA` occur only on non-load-bearing examples and
counterexamples. A future author copies the code into the two component fields
and records the cited locator named in the pair's source paragraph.

---

## 5. Pair order and direct requirements

The following is the intended topological order. Each B page requires only its
A page and is a leaf.

| pair | A page `requires` (direct only) |
|---|---|
| `HA-1` | `abelian-categories`, `exactness-and-the-member-calculus` |
| `HA-2` | `chain-complexes-and-homology` |
| `HA-3` | `chain-homotopy-and-the-homotopy-category`, `exactness-and-the-member-calculus` |
| `HA-4` | `mapping-cones-cylinders-and-chain-triangles`, `the-diagram-lemmas-in-an-abelian-category` |
| `HA-5` | `long-exact-sequences-in-homology`, `subobject-lattices-generators-and-the-grothendieck-axioms`, `free-modules-and-exact-sequences` |
| `HA-6` | `projective-and-injective-resolutions`, `preadditive-and-additive-categories-and-biproducts` |
| `HA-7` | `derived-functors`, `projective-and-injective-resolutions`, `long-exact-sequences-in-homology` |
| `HA-8` | `delta-functors-and-universality`, `derived-functors` |
| `HA-9` | `ext-and-balanced-resolutions`, `projective-and-injective-resolutions`, `chain-conditions-and-semisimple-modules` |
| `HA-10` | `ext-and-balanced-resolutions`, `yoneda-extensions-and-homological-dimension`, `tensor-products-of-modules`, `chain-conditions-and-semisimple-modules` |
| `HA-11` | `tor-flatness-and-global-dimension`, `ext-and-balanced-resolutions`, `long-exact-sequences-in-homology` |
| `HA-12` | `ext-and-balanced-resolutions`, `tor-flatness-and-global-dimension`, `the-group-algebra-and-representations` |
| `HA-13` | `mapping-cones-cylinders-and-chain-triangles`, `long-exact-sequences-in-homology` |
| `HA-14` | `triangulated-categories`, `derived-functors`, `yoneda-extensions-and-homological-dimension`, `tor-flatness-and-global-dimension` |
| `HA-15` | `chain-complexes-and-homology` |
| `HA-16` | `spectral-sequences`, `mapping-cones-cylinders-and-chain-triangles`, `long-exact-sequences-in-homology` |
| `HA-17` | `double-complexes-exact-couples-and-convergence`, `derived-functors`, `delta-functors-and-universality`, `group-cohomology-as-a-derived-functor`, `universal-coefficients-and-kunneth-theorems`, `group-extensions-complements-and-schur-zassenhaus` |

The cross-track page ids needed by `HA-12` and the LHS application in `HA-17`
are now fixed. Their stable item ids remain build-time seams, not item-level
forward references.

---

# The pairs

## HA-1. Chain and Cochain Complexes, Homology and Cohomology

**page id** `chain-complexes-and-homology` *(planned id kept)*  
**`requires`** `abelian-categories`, `exactness-and-the-member-calculus`

This page introduces the one new datum on which the entire track rests:
successive differentials compose to zero. It then spends that equation twice.
First it factors each boundary subobject through the corresponding cycle
subobject; only then is the quotient called homology. Second it makes kernels
and cokernels of chain maps degreewise, proving that complexes again form an
abelian category. Nothing on the page appeals to elements of a general abelian
category.

### A-page items, in dependency order

**The data and the quotient that must be licensed**

1. `def-chain-complex-in-an-abelian-category` — **definition** `[LN]`.
   A family $(C_n)_{n\in\mathbb Z}$ and arrows
   $d_n:C_n\to C_{n-1}$ with $d_{n-1}d_n=0$ for every $n$; notation
   $(C_\bullet,d)$ and the degree of $d$ are explicit. LANDMARK.
2. `def-cochain-complex-in-an-abelian-category` — **definition** `[LN]`.
   A family $(C^n)$ with $d^n:C^n\to C^{n+1}$ and $d^{n+1}d^n=0$; the
   chain/cochain reindexing convention of §3.1 is part of the Remarks.
3. `def-bounded-bounded-below-and-bounded-above-complex` — **definition**
   `[LN]`. “Bounded” means zero outside a finite interval; the page records
   separately $C_n=0$ for $n\ll0$ and $n\gg0$, since their cochain translations
   reverse.
4. `def-zero-and-stalk-complex` — **definition** `[LN]`. The zero complex and
   the complex $S^n(A)$ concentrated in degree $n$. After `HA-2` defines shift,
   $S^n(A)=S^0(A)[n]$ under the convention of §3.1; bracket notation is not
   overloaded here.
5. `def-cycle-and-boundary-subobjects-of-a-complex` — **definition** `[LN]`.
   $Z_n(C)=\ker d_n$ and $B_n(C)=\operatorname{im}d_{n+1}$, using the
   published categorical kernel and image.
6. `lem-the-boundary-subobject-factors-through-the-cycle-subobject` —
   **lemma** `[LA]`. From $d_nd_{n+1}=0$, the image monomorphism for
   $d_{n+1}$ factors uniquely through the kernel monomorphism for $d_n$.
   LANDMARK; this is the exact well-definedness obligation for item 7.
7. `def-homology-object-of-a-chain-complex` — **definition** `[LN]`.
   $H_n(C):=\operatorname{coker}(B_n(C)\hookrightarrow Z_n(C))$, also written
   $Z_n(C)/B_n(C)$. `justified_by` must contain item 6. LANDMARK.
8. `def-cohomology-object-of-a-cochain-complex` — **definition** `[LN]`.
   $H^n(C)=\ker d^n/\operatorname{im}d^{n-1}$, justified by the cochain form
   of item 6 rather than by an elementwise aside.
9. `def-exactness-of-a-complex-at-a-degree-and-acyclic-complex` —
   **definition** `[LN]`. Exact at $n$ means
   $\operatorname{im}d_{n+1}=\ker d_n$ as subobjects; acyclic means exact at
   every degree.
10. `thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero` —
    **theorem** `[LA]`. Here “zero” is isomorphic to a zero object, and the
    proof uses the quotient universal property rather than members.
11. `prop-an-exact-sequence-is-a-complex-and-its-exactness-agrees` —
    **proposition** `[LA]`. The existing exact-sequence notation embeds into
    item 1, and the two meanings of exact at an object coincide.

**Morphisms and induced homology**

12. `def-chain-map` — **definition** `[LN]`. A degree-zero family
    $f_n:C_n\to D_n$ satisfying $d_Df_n=f_{n-1}d_C$.
13. `def-cochain-map` — **definition** `[LN]`. The upper-index analogue, with
    the commuting square printed to prevent a variance error.
14. `prop-identities-and-composites-of-chain-maps-are-chain-maps` —
    **proposition** `[LA]`. This licenses the category in item 15.
15. `def-category-of-chain-complexes` — **definition** `[LN]`.
    $\operatorname{Ch}(\mathcal A)$ has complexes as objects and chain maps as
    arrows; $\operatorname{Ch}^+$, $\operatorname{Ch}^-$, and
    $\operatorname{Ch}^b$ are the bounded full subcategories.
16. `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries` —
    **lemma** `[LA]`. Stated as induced arrows between kernel and image
    subobjects, not as containment of sets.
17. `thm-a-chain-map-induces-a-well-defined-map-on-homology` — **theorem**
    `[LA]`. The arrow $H_n(f):H_n(C)\to H_n(D)$ is the unique quotient arrow
    supplied by item 16. Its independence from every chosen representative of
    a quotient class is proved explicitly in the module instance and follows
    universally in the categorical statement. LANDMARK.
18. `prop-homology-respects-identities-and-composition` — **proposition**
    `[LA]`. $H_n(1_C)=1$ and $H_n(gf)=H_n(g)H_n(f)$.
19. `thm-homology-is-an-additive-functor` — **theorem** `[LA]`.
    $H_n:\operatorname{Ch}(\mathcal A)\to\mathcal A$ is functorial and
    additive. The proof checks that addition of chain maps descends through the
    quotient in item 7.
20. `def-quasi-isomorphism` — **definition** `[LN]`. A chain map inducing an
    isomorphism on every homology object.
21. `prop-isomorphisms-of-complexes-are-quasi-isomorphisms` — **proposition**
    `[LA]`; the converse is reserved for a counterexample on the companion.
22. `prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is` —
    **proposition** `[LA]`. This makes the lower/upper-index dictionary a
    theorem once rather than a convention silently reused.

**Subcomplexes, quotients, and the abelian category of complexes**

23. `def-subcomplex` — **definition** `[LN]`. A componentwise subobject through
    which every differential restricts; the restriction arrow is unique by
    monicity.
24. `lem-the-differential-descends-to-a-quotient-complex` — **lemma** `[LA]`.
    If $S\hookrightarrow C$ is a subcomplex, the unique arrows
    $C_n/S_n\to C_{n-1}/S_{n-1}$ square to zero. This is the
    representative-independence obligation for item 25.
25. `def-quotient-complex` — **definition** `[LN]`. $C/S$ with the descended
    differential from item 24; `justified_by` must name item 24.
26. `def-short-exact-sequence-of-complexes` — **definition** `[LN]`. A sequence
    $0\to A\to B\to C\to0$ of chain maps exact in every degree.
27. `lem-the-kernel-of-a-chain-map-is-computed-degreewise` — **lemma** `[LA]`.
    The differentials restrict uniquely to the component kernels.
28. `lem-the-cokernel-of-a-chain-map-is-computed-degreewise` — **lemma**
    `[LA]`. The differentials descend uniquely to component cokernels.
29. `prop-images-and-coimages-of-chain-maps-are-computed-degreewise` —
    **proposition** `[LA]`. The canonical coimage-to-image arrow is the family
    of the component canonical arrows.
30. `thm-the-category-of-complexes-in-an-additive-category-is-additive` —
    **theorem** `[LA]`. Zero objects and finite biproducts are degreewise and
    addition of chain maps is componentwise.
31. `thm-the-category-of-complexes-in-an-abelian-category-is-abelian` —
    **theorem** `[LA]`. Items 27–30 and the componentwise abelian axiom prove
    the claim. LANDMARK.
32. `cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise` —
    **corollary** `[LA]`. This is the working criterion used by every later
    short exact sequence of complexes.
33. `prop-a-subcomplex-is-the-kernel-of-its-quotient-map` — **proposition**
    `[LA]`. Conversely every monomorphism of complexes identifies its source,
    up to unique isomorphism, with a subcomplex.
34. `thm-the-first-isomorphism-theorem-for-complexes` — **theorem** `[LA]`.
    $C/\ker f\cong\operatorname{im}f$ as complexes, with component maps the
    published categorical coimage-image isomorphisms.

**Operations inherited degreewise**

35. `prop-finite-biproducts-of-complexes-are-computed-degreewise` —
    **proposition** `[LA]`, including $H_n(C\oplus D)\cong H_n(C)\oplus H_n(D)$.
36. `prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials` —
    **proposition** `[LA]`. No exactness of an infinite product or coproduct is
    asserted here; AB4/AB4* hypotheses appear only when needed.
37. `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps` —
    **proposition** `[LA]`. An additive $F:\mathcal A\to\mathcal B$ gives
    $\operatorname{Ch}(F)$ because $F(0)=0$.
38. `thm-an-exact-functor-commutes-with-homology` — **theorem** `[LA]`.
    The canonical arrow $F(H_nC)\to H_n(F(C))$ is an isomorphism for every
    $n$; the construction and its naturality are part of the statement.
39. `cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative` —
    **corollary** `[LA]`. Preservation needs exactness; reflection also needs
    conservativity, and both hypotheses appear in the title-level statement.
40. `def-euler-characteristic-of-a-finite-complex-of-finite-rank-free-abelian-groups` —
    **definition** `[LN]`. $\chi(C)=\sum_n(-1)^n\operatorname{rank}C_n$; this
    deliberately narrow version uses only published rank and a finite sum.
41. `thm-euler-poincare-formula-for-finite-free-complexes` — **theorem**
    `[LA]`. If every homology group is free of finite rank, then
    $\chi(C)=\sum_n(-1)^n\operatorname{rank}H_n(C)$. The proof splits the
    cycle/boundary short exact sequences; no dimension over a fraction field
    is smuggled in.

### `fs-` items (A page)

- `fs-any-sequence-of-morphisms-is-a-chain-complex` — **false statement**
  `[LN]`; refuted by two consecutive identity maps on a nonzero object.
- `fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles` — **false
  statement** `[LN]`; types are reversed: boundaries form a subobject of cycles.
- `fs-a-chain-map-is-determined-by-its-maps-on-homology` — **false statement**
  `[LN]`; the companion gives distinct maps on a contractible two-term complex.
- `fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes` — **false
  statement** `[LN]`; refuted by the zero map from a nonzero acyclic complex to
  zero.
- `fs-an-additive-functor-commutes-with-homology` — **false statement** `[LN]`;
  `HA-6` supplies the standard right-exact tensor counterexample after tensor
  is available, while this item explains that exactness in item 38 is genuine.
- `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category` —
  **false statement** `[LN]`; no AB4 hypothesis is present, so item 36 cannot
  imply the claimed exactness.

### B page — `chain-complexes-and-homology-examples`

1. `ex-the-zero-differential-complex-has-homology-equal-to-each-term` —
   **example** `[AA]`; directly computes $Z_n=C_n$ and $B_n=0$.
2. `ex-a-two-term-complex-and-its-kernel-and-cokernel-homology` — **example**
   `[AA]`; for $M\xrightarrow fN$, the two nonzero homology objects are
   $\ker f$ and $\operatorname{coker}f$.
3. `ex-the-multiplication-by-m-complex-computes-a-cyclic-group` — **example**
   `[AA]`; $0\to\mathbb Z\xrightarrow{m}\mathbb Z\to0$ for $m\ne0$.
4. `ex-an-exact-short-sequence-as-an-acyclic-three-term-complex` — **example**
   `[AA]`; reconciles the published module definition with item 9.
5. `ex-a-split-exact-complex-contracts-degree-by-degree` — **example** `[AA]`;
   it states the contracting maps but leaves their general theory to `HA-2`.
6. `ex-a-chain-map-computed-on-cycles-boundaries-and-homology` — **example**
   `[AA]`; a finite complex of finitely generated abelian groups.
7. `cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes` —
   **counterexample** `[AN]`; inclusion of zero into the two-term identity
   complex. Non-load-bearing.
8. `cex-two-distinct-chain-maps-inducing-the-same-homology-map` —
   **counterexample** `[AN]`; maps on an acyclic identity complex.
9. `ex-a-subcomplex-and-its-quotient-complex` — **example** `[AA]`; checks
   representative independence explicitly for modules.
10. `ex-euler-poincare-for-a-finite-complex` — **example** `[AA]`; computes
    both alternating sums in a three-term free complex.

### Sources and exact locators

- **Weibel, *An Introduction to Homological Algebra*, §§1.1 “Complexes of
  $R$-Modules”, 1.2 “Operations on Chain Complexes”, and the definitions at
  §1.3 “Long Exact Sequences” (printed pp. 1–14).** Primary source for items 1–22 and
  the module forms of items 23–35. We use the general abelian-category
  formulation he records in §1.6, but cite the category scaffold for those
  axioms.
- **The Stacks Project, *Homological Algebra*, §§13 “Complexes”, 14 “Homotopy
  and the shift functor” only through the complex notation, and 16 “Graded
  objects” (current PDF pp. 24–34).** Independent source for items 1–38,
  especially the degreewise abelian-category constructions.
- **Rotman, *An Introduction to Homological Algebra*, 2nd ed., §5.5.1
  “Complexes” (pp. 317–322) and §6.1 “Homology Functors” (pp. 323–339).**
  Independent textbook control for chain maps, homology functors, exactness,
  and the chain/cochain translation.
- **Sharifi, *Homological Algebra*, §2.7 “Complexes” (pp. 44–46).** Open
  lecture-note control for items 1–22 and the two-term examples.

The exact source-heading dispositions, including the material in those ranges
that belongs on later pairs, are in §24.

### Proof strategy and traps

The hard proof is item 31. Construct kernel and cokernel differentials by their
universal properties (items 27–28), show the canonical coimage-to-image map is
degreewise the abelian-category isomorphism (item 29), and only then invoke the
abelian axiom. This avoids the common circular claim that kernels and cokernels
“obviously” inherit differentials. Item 7 has a parallel obligation: the
homology quotient does not exist as written until item 6 has produced the
monomorphism $B_n\hookrightarrow Z_n$.

Do not call a complex acyclic merely because each differential is monic or
epic. Do not say an additive functor commutes with kernels or homology. Do not
identify a subobject with a literal subset in the general statement. Examples
may use elements only after specialising to modules.

**Forward references: NONE.**

---

## HA-2. Chain Homotopy and the Homotopy Category

**page id** `chain-homotopy-and-the-homotopy-category`  
**`requires`** `chain-complexes-and-homology`

Homology deliberately forgets more than the underlying complex. This page
identifies the relation it forgets first: a chain homotopy is a degree-one
operator whose graded commutator with the differential is the difference of
two maps. The relation is proved compatible with addition and composition
before morphisms are quotiented by it. The resulting homotopy category is the
first quotient category in the track and its representative-independence is a
numbered proof obligation, not notation.

### A-page items, in dependency order

1. `def-graded-morphism-of-chain-complexes` — **definition** `[LN]`. A
   degree-$r$ family $u_n:C_n\to D_{n+r}$; only degree zero closed morphisms are
   chain maps.
2. `def-hom-complex-of-chain-complexes` — **definition** `[LN]`. For modules,
   $\underline{\operatorname{Hom}}(C,D)^r=\prod_n\operatorname{Hom}(C_n,D_{n-r})$
   with $\partial u=d_Du-(-1)^r u d_C$; the future author checks the product
   exists in the stated category and otherwise restricts to bounded/finitely
   supported complexes.
3. `lem-the-hom-complex-differential-squares-to-zero` — **lemma** `[LA]`.
   The sign cancellation is written out; this is `justified_by` for item 2's
   claim that the formula is a complex.
4. `prop-zero-cocycles-in-the-hom-complex-are-chain-maps` — **proposition**
   `[LA]`, with the degree convention translated explicitly.
5. `def-chain-homotopy` — **definition** `[LN]`. A homotopy $s:f\simeq g$ is a
   family $s_n:C_n\to D_{n+1}$ satisfying
   $f-g=d_Ds+s d_C$.
6. `def-null-homotopic-chain-map` — **definition** `[LN]`. A map homotopic to
   zero; equivalently a boundary in degree zero of the Hom complex.
7. `prop-chain-homotopy-is-an-equivalence-relation` — **proposition** `[LA]`.
   Reflexivity, symmetry, and transitivity use $0,-s,s+t$ respectively.
8. `lem-chain-homotopy-is-compatible-with-addition-and-composition` —
   **lemma** `[LA]`. If $f\simeq g$, then $u f v\simeq u g v$ for composable
   chain maps, with the two typed whiskered homotopies shown.
9. `prop-null-homotopic-maps-form-a-two-sided-additive-ideal` —
   **proposition** `[LA]` in the preadditive category
   $\operatorname{Ch}(\mathcal A)$.
10. `thm-chain-homotopic-maps-induce-the-same-map-on-homology` — **theorem**
    `[LA]`. On a cycle $z$, $(f-g)z=d(sz)$ is a boundary; the categorical proof
    factors this equation through kernel, image, and quotient. LANDMARK.
11. `cor-null-homotopic-maps-induce-zero-on-homology` — **corollary** `[LA]`.
12. `def-chain-homotopy-equivalence` — **definition** `[LN]`. Maps $f:C\to D$
    and $g:D\to C$ with $gf\simeq1_C$ and $fg\simeq1_D$.
13. `def-contractible-complex` — **definition** `[LN]`. The identity is
    null-homotopic; equivalently the complex is homotopy equivalent to zero.
14. `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` — **theorem**
    `[LA]`, by item 10. The converse is explicitly false without additional
    hypotheses.
15. `cor-a-contractible-complex-is-acyclic` — **corollary** `[LA]`; the converse
    fails on the companion.

**The quotient category**

16. `def-homotopy-classes-of-chain-maps` — **definition** `[LN]`.
    $[C,D]_K:=\operatorname{Hom}_{\operatorname{Ch}(\mathcal A)}(C,D)/N(C,D)$,
    where $N(C,D)$ is the subgroup of null-homotopic maps from item 9.
17. `lem-composition-of-homotopy-classes-is-well-defined` — **lemma** `[LA]`.
    Replacing either representative changes the composite by a null-homotopic
    map, using item 8. This is the quotient-category well-definedness
    obligation.
18. `def-homotopy-category-of-chain-complexes` — **definition** `[LN]`.
    $K(\mathcal A)$ has the same objects as $\operatorname{Ch}(\mathcal A)$ and
    hom-groups from item 16; `justified_by` names item 17. LANDMARK.
19. `thm-the-homotopy-category-is-additive` — **theorem** `[LA]`. The
    null-homotopic ideal is additive, and finite biproducts descend.
20. `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive` —
    **proposition** `[LA]`; it is identity on objects and quotient on hom-groups.
21. `thm-homology-factors-uniquely-through-the-homotopy-category` — **theorem**
    `[LA]`. There is a unique additive $\bar H_n:K(\mathcal A)\to\mathcal A$
    with $H_n=\bar H_nQ$. LANDMARK.
22. `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` —
    **proposition** `[LA]`. An acyclic object is zero in $K(\mathcal A)$ exactly
    when it is contractible, not merely because its homology vanishes.
23. `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex` —
    **theorem** `[LA]`. Under the existence hypothesis in item 2,
    $\operatorname{Hom}_{K(\mathcal A)}(C,D)\cong
    H^0\underline{\operatorname{Hom}}(C,D)$ naturally.

**Shifts and signs**

24. `def-shift-of-a-chain-complex` — **definition** `[LN]`.
    $(C[k])_n=C_{n-k}$ and $d_{C[k]}=(-1)^k d_C$, exactly as §3.1.
25. `lem-the-shifted-differential-squares-to-zero` — **lemma** `[LA]`; the
    elementary sign check is the definition's `justified_by` obligation.
26. `def-shift-of-a-chain-map-and-chain-homotopy` — **definition** `[LN]`.
    Component formulas include the sign on shifted homotopies required to keep
    item 5 true.
27. `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories` —
    **theorem** `[LA]`. Its inverse is $[-k]$, with the canonical identity
    rather than an unstated equality when conventions require it.
28. `prop-homology-of-a-shift-is-shifted-homology` — **proposition** `[LA]`.
    $H_n(C[k])\cong H_{n-k}(C)$ naturally.
29. `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms` —
    **proposition** `[LA]`.
30. `def-suspension-and-desuspension-of-a-chain-complex` — **definition**
    `[LN]`. Suspension is the chosen shift $[1]$ and desuspension $[-1]$; this
    fixes the vocabulary used by cones and triangles.

**Useful criteria**

31. `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible` —
    **lemma** `[LA]`. The compatibility equation is printed; arbitrary
    degreewise splittings do not by themselves supply a contraction.
32. `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split` —
    **theorem** `[LA]`. The split hypothesis is explicit; over modules it is
    automatic when the cycle objects are projective, not from acyclicity alone.
33. `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` —
    **theorem** `[LA]`, dual to item 32.
34. `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes` —
    **proposition** `[LA]`; composition of chosen homotopy inverses is checked.
35. `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence` —
    **proposition** `[LA]`, closing the implication chain
    isomorphism $\Rightarrow$ homotopy equivalence $\Rightarrow$
    quasi-isomorphism.

### `fs-` items (A page)

- `fs-chain-homotopic-maps-are-equal-as-chain-maps` — **false statement**
  `[LN]`; equality holds only after passage to $K(\mathcal A)$.
- `fs-every-acyclic-complex-is-contractible` — **false statement** `[LN]`;
  the companion uses a nonsplit short exact sequence as a three-term complex.
- `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence` — **false
  statement** `[LN]`; zero from that acyclic noncontractible complex is the
  witness.
- `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities` —
  **false statement** `[LN]`; that localization is the derived category of
  `HA-14`, not $K(\mathcal A)$.
- `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign` —
  **false statement** `[LN]`; it breaks the standard cone and rotation formulas.

### B page — `chain-homotopy-and-the-homotopy-category-examples`

`ex-a-contracting-homotopy-for-the-two-term-identity-complex` `[AA]` ·
`ex-two-homotopic-maps-with-different-components` `[AA]` ·
`ex-the-hom-complex-of-two-two-term-complexes` `[AA]` ·
`ex-a-split-exact-complex-and-its-contraction` `[AA]` ·
`cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` `[AN]` ·
`cex-a-quasi-isomorphism-with-no-homotopy-inverse` `[AN]` ·
`ex-shifting-a-three-term-complex-with-all-signs` `[AA]` ·
`ex-homotopy-classes-as-h-zero-of-a-hom-complex` `[AA]`.

### Sources and exact locators

- **Weibel §1.2 “Operations on Chain Complexes”, especially 1.2.4–1.2.8, and
  §1.4 “Chain Homotopies” (printed pp. 5–9, 15–17).** Primary textbook source for
  items 1–15 and 24–35.
- **The Stacks Project, *Homological Algebra*, §14 “Homotopy and the shift
  functor” and §16 “Graded objects” (current PDF pp. 28–34).** Independent
  source for the quotient-by-homotopy construction, shift signs, and Hom
  complexes.
- **The Stacks Project, *Derived Categories*, §8 “The homotopy category”
  (current PDF pp. 27–28).** Source for items 16–23 in the general additive
  setting.
- **Rotman §6.1 “Homology Functors” (pp. 323–339).** Independent textbook
  control for chain homotopies and the fact that homotopic maps induce equal
  homology maps.

### Proof strategy and traps

Items 9 and 17 are the boundary pass. A quotient of each hom-group is not yet a
category: null-homotopic maps must first be a two-sided ideal, after which
composition is representative-independent. Keep “acyclic” and “contractible”
separate. The source proofs that identify them for bounded complexes use
splittings; item 32 states exactly where those splittings come from.

**Forward references: NONE.**

---

## HA-3. Mapping Cones, Cylinders, and Chain Triangles

**page id** `mapping-cones-cylinders-and-chain-triangles`  
**`requires`** `chain-homotopy-and-the-homotopy-category`,
`exactness-and-the-member-calculus`

Cones turn one map into a complex whose homology measures failure to be a
quasi-isomorphism; cylinders factor one map through a homotopy equivalence.
The sign convention fixed in §3.1 is checked before either construction is
used. This page calls $C\to D\to\operatorname{Cone}(f)\to C[1]$ a **cone
triangle**. It does not call arbitrary triangles distinguished or impose the
triangulated axioms; that belongs to `HA-13`.

### A-page items, in dependency order

1. `def-mapping-cone-of-a-chain-map` — **definition** `[LN]`. For
   $f:C\to D$, $\operatorname{Cone}(f)_n=D_n\oplus C_{n-1}$ and
   $d(d,c)=(d_Dd+f(c),-d_Cc)$.
2. `lem-the-mapping-cone-differential-squares-to-zero` — **lemma** `[LA]`.
   The mixed terms cancel exactly because $f$ is a chain map. This is the
   construction's `justified_by` obligation.
3. `def-canonical-inclusion-and-projection-for-a-mapping-cone` — **definition**
   `[LN]`. $j:D\to\operatorname{Cone}(f)$ and
   $q:\operatorname{Cone}(f)\to C[1]$, with their component formulas.
4. `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact` —
   **theorem** `[LA]`.
   $0\to D\xrightarrow{j}\operatorname{Cone}(f)\xrightarrow{q}C[1]\to0$;
   the degreewise splitting is not asserted to be a chain splitting.
5. `def-cone-triangle-of-a-chain-map` — **definition** `[LN]`.
   $C\xrightarrow{f}D\xrightarrow{j}\operatorname{Cone}(f)
   \xrightarrow{q}C[1]$, with “cone triangle” reserved for this chain-level
   construction.
6. `prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift` —
   **proposition** `[LA]`.
   $\operatorname{Cone}(0:C\to D)\cong D\oplus C[1]$ as complexes.
7. `thm-the-cone-of-an-identity-map-is-contractible` — **theorem** `[LA]`, with
   an explicit contracting homotopy.
8. `prop-isomorphic-chain-maps-have-isomorphic-cones` — **proposition** `[LA]`.
   A strictly commuting square with vertical chain isomorphisms induces a cone
   isomorphism.
9. `def-morphism-of-chain-maps` — **definition** `[LN]`. A commutative square in
   $\operatorname{Ch}(\mathcal A)$.
10. `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones` — **theorem**
    `[LA]`; the block-diagonal formula is functorial for strictly commuting
    squares.
11. `prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes` —
    **proposition** `[LA]`. This carefully does **not** assert a functorial cone
    for arbitrary morphisms of the homotopy category.
12. `lem-homotopic-maps-have-chain-isomorphic-mapping-cones` — **lemma** `[LA]`.
    The triangular matrix using the homotopy supplies the isomorphism.
13. `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic` —
    **theorem** `[LA]`. The future author constructs directly the four-term
    exact segment needed here from item 4 and the available kernel/image/cokernel
    calculus. No general connecting morphism or result from `HA-4` is used;
    `HA-4` later records agreement with its general long exact sequence.
    LANDMARK.
14. `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible` —
    **theorem** `[LA]`. Both directions construct the homotopy inverse or
    contraction explicitly. LANDMARK.

**Cylinders and homotopy factorisation**

15. `def-mapping-cylinder-of-a-chain-map` — **definition** `[LN]`.
    The direct-sum formula is chosen compatibly with the cone convention and
    is accompanied by maps $i:C\to\operatorname{Cyl}(f)$,
    $p:\operatorname{Cyl}(f)\to D$, and
    $j:D\to\operatorname{Cyl}(f)$ with $pj=1_D$.
16. `lem-the-mapping-cylinder-differential-squares-to-zero` — **lemma** `[LA]`.
17. `thm-the-mapping-cylinder-factors-a-chain-map` — **theorem** `[LA]`.
    $f=p i$, $i$ is a degreewise split monomorphism, and $p$ is a chain-homotopy
    equivalence.
18. `prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder` —
    **proposition** `[LA]`. The retraction and the homotopy relative to $D$ are
    printed, not inferred from topological language.
19. `cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence` —
    **corollary** `[LA]`. “Cofibration-like” is prose only; no model-category
    predicate is minted.
20. `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone` —
    **proposition** `[LA]`, with the induced differential checked.

**Cone calculations and homotopy invariance**

21. `prop-cones-preserve-chain-homotopy-equivalences-of-arrows` —
    **proposition** `[LA]`, for a square whose vertical maps are homotopy
    equivalences and whose chosen homotopy data make the square commute up to
    homotopy.
22. `lem-the-three-cone-calculation-for-a-composite-chain-map` — **lemma**
    `[LA]`. For $C\xrightarrow fD\xrightarrow gE$, it constructs the maps
    $\operatorname{Cone}(f)\to\operatorname{Cone}(gf)\to
    \operatorname{Cone}(g)$ and the explicit chain-homotopy equivalence from
    the cone of the first map to $\operatorname{Cone}(g)$. This is the
    chain-level octahedral calculation; it does not falsely assert that the
    three displayed cones themselves form a short exact sequence or name the
    octahedral axiom.
23. `prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category` —
    **proposition** `[LA]`.
24. `prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category` —
    **proposition** `[LA]`, equivalent to item 14 but expressed categorically.
25. `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism` —
    **proposition** `[LA]`. The sign on the second summand is part of the map.
26. `prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences` —
    **proposition** `[LA]`, naturally in $f$.
27. `def-relative-homology-of-a-chain-map` — **definition** `[LN]`.
    $H_n(D,C;f):=H_n(\operatorname{Cone}(f))$; this algebraic definition makes
    no claim about pairs of spaces.
28. `prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows` —
    **proposition** `[LA]`, using item 21.
29. `cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms` —
    **corollary** `[LA]`, by item 13.

### `fs-` items (A page)

- `fs-the-mapping-cone-differential-needs-no-minus-sign` — **false statement**
  `[LN]`; the square contains twice the mixed term under the displayed
  convention.
- `fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting` —
  **false statement** `[LN]`; a chain splitting would force the connecting map
  to vanish and fails for general $f$.
- `fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data` —
  **false statement** `[LN]`; cones of maps are well defined up to noncanonical
  isomorphism, while functoriality needs strict squares or enhanced data.
- `fs-an-acyclic-mapping-cone-is-contractible` — **false statement** `[LN]`;
  it would collapse quasi-isomorphism to homotopy equivalence.
- `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization` —
  **false statement** `[LN]`; no model structure or lifting axiom has been
  defined.

### B page — `mapping-cones-cylinders-and-chain-triangles-examples`

`ex-the-cone-of-multiplication-by-m-on-the-integers` `[AA]` ·
`ex-the-cone-of-zero-and-of-the-identity` `[AA]` ·
`ex-a-quasi-isomorphism-detected-by-an-acyclic-cone` `[AA]` ·
`cex-an-acyclic-noncontractible-cone` `[AN]` ·
`ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes` `[AA]` ·
`ex-relative-homology-of-a-map-between-stalk-complexes` `[AA]` ·
`ex-the-three-cone-calculation-for-a-composite` `[AA]` ·
`cex-a-degreewise-split-cone-sequence-with-no-chain-splitting` `[AN]`.

### Sources and exact locators

- **Weibel §1.5 “Mapping Cones and Cylinders” (printed pp. 18–24).** Primary textbook
  source for items 1–20 and the quasi-isomorphism/cone criterion.
- **The Stacks Project, *Derived Categories*, §9 “Cones and termwise split
  sequences” and §10 “Distinguished triangles in the homotopy category”
  (current PDF pp. 27–38).** Independent source for items 1–14 and 21–26.
- **Rotman §6.1 “Homology Functors” (pp. 323–339), mapping-cylinder and mapping-
  cone subsections.** Independent textbook control for the explicit formulas.
- **Sharifi §§2.7–2.8 “Complexes” and “Total complexes” (pp. 44–50).** Open
  control for signs and direct-sum totalisations used in the cone.

### Proof strategy and traps

The two hard criteria, items 13 and 14, must not be conflated. Acyclicity of the
cone sees homology; contractibility sees an actual homotopy inverse. The future
author writes both constructions. Cone functoriality is asserted only for the
arrow category with strictly commuting squares; `HA-13` later explains why a
triangulated category axiomatizes existence of cones rather than a globally
chosen functorial cone.

**Forward references: NONE.**

---

## HA-4. Long Exact Sequences in Homology and Cohomology

**page id** `long-exact-sequences-in-homology`  
**`requires`** `mapping-cones-cylinders-and-chain-triangles`,
`the-diagram-lemmas-in-an-abelian-category`

This page does not prove the snake lemma again. It arranges two consecutive
degree squares from a short exact sequence of complexes, applies the already
published categorical connecting-arrow construction, proves that the result
annihilates boundaries, and descends it through the homology quotient. That
descent is what creates the connecting homomorphism
$\partial:H_n(C)\to H_{n-1}(A)$; exactness and naturality are then proved in
the category rather than assumed from an element chase.

### A-page items, in dependency order

1. `def-morphism-of-short-exact-sequences-of-complexes` — **definition** `[LN]`.
   A three-column diagram of chain maps whose degreewise rows are morphisms of
   short exact sequences.
2. `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes` —
   **lemma** `[LA]`. It constructs the kernel/cokernel squares to which the
   categorical snake connecting arrow applies.
3. `def-preconnecting-arrow-on-cycles` — **definition** `[LN]`. The snake
   construction gives $Z_n(C)\to Z_{n-1}(A)/B_{n-1}(A)$; its source is still
   cycles, not homology.
4. `lem-the-preconnecting-arrow-annihilates-boundaries` — **lemma** `[LA]`.
   The composite $B_n(C)\to Z_n(C)\to H_{n-1}(A)$ is zero. This is the exact
   descent obligation for item 5.
5. `def-connecting-morphism-in-homology` — **definition** `[LN]`.
   The unique induced
   $\partial_n:H_n(C)\to H_{n-1}(A)$; `justified_by` names item 4. LANDMARK.
6. `prop-elementwise-formula-for-the-connecting-map-in-module-categories` —
   **proposition** `[LL]`. Lift a cycle, take its boundary, and lift back into
   $A$; independence of both lifts and of the cycle representative is proved.
   This is a specialisation and check on item 5, not its general definition.
7. `lem-exactness-at-the-homology-of-the-left-complex` — **lemma** `[LA]`.
   $\operatorname{im}(\partial_{n+1}:H_{n+1}(C)\to H_n(A))=
   \ker(H_n(A)\to H_n(B))$.
8. `lem-exactness-at-the-homology-of-the-middle-complex` — **lemma** `[LA]`.
   $\operatorname{im}(H_n(A)\to H_n(B))=
   \ker(H_n(B)\to H_n(C))$.
9. `lem-exactness-at-the-homology-of-the-right-complex` — **lemma** `[LA]`.
   The kernel of $\partial_n$ is the image from $H_n(B)$.
10. `lem-exactness-at-the-target-of-the-connecting-map` — **lemma** `[LA]`.
   The image of $\partial_n$ is the kernel of $H_{n-1}(A)\to H_{n-1}(B)$.
11. `thm-long-exact-sequence-in-homology` — **theorem** `[LA]`. A short exact
    sequence $0\to A\to B\to C\to0$ of complexes yields the natural long exact
    sequence
    $\cdots\to H_n(A)\to H_n(B)\to H_n(C)\xrightarrow{\partial_n}
    H_{n-1}(A)\to\cdots$. LANDMARK.
12. `thm-naturality-of-the-homology-connecting-morphism` — **theorem** `[LA]`.
    A morphism of short exact sequences commutes with $\partial$; the proof
    cites the categorical connecting-arrow naturality and then the quotient
    uniqueness in item 5. LANDMARK.
13. `cor-the-long-exact-homology-sequence-is-natural` — **corollary** `[LA]`.
14. `thm-long-exact-sequence-in-cohomology` — **theorem** `[LA]`. For a short
    exact sequence of cochain complexes,
    $\partial^n:H^n(C)\to H^{n+1}(A)$; the degree direction is printed.
15. `thm-naturality-of-the-cohomology-connecting-morphism` — **theorem** `[LA]`.

**Consequences and cone agreement**

16. `cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology` —
    **corollary** `[LA]`. $H_n(C)\cong H_{n-1}(A)$ naturally when $B$ is
    acyclic.
17. `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes` —
    **corollary** `[LA]`.
18. `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram` —
    **corollary** `[LA]`. If two vertical chain maps are quasi-isomorphisms, so
    is the third, by the published five lemma applied degreewise to the two
    long exact sequences.
19. `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence` —
    **proposition** `[LA]`. A chain section/retraction is enough; a merely
    degreewise split sequence is not.
20. `thm-the-cone-long-exact-sequence` — **theorem** `[LA]`. Applying item 11
    to the canonical cone sequence gives
    $\cdots\to H_n(C)\xrightarrow{H_n(f)}H_n(D)\to
    H_n(\operatorname{Cone}f)\to H_{n-1}(C)\to\cdots$, after the shift
    identifications.
21. `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign` —
    **proposition** `[LA]`. This is the sign reconciliation promised on `HA-3`.
22. `cor-the-cone-criterion-from-the-general-long-exact-sequence` —
    **corollary** `[LA]`. It cites `HA-3` item 13 and records that item 20 gives
    the same equivalence by exactness; the proof is not duplicated.
23. `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair` —
    **theorem** `[LA]`. Obtained from `HA-3`'s three-cone calculation and the
    cone long exact sequence, with all maps expressed in terms of the supplied
    composable chain maps.
24. `cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone` — **corollary**
    `[LA]`.
25. `prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence` —
    **proposition** `[LA]`, including the connecting maps by naturality.

**Short exact sequences recovered from the long one**

26. `cor-homology-of-a-degreewise-split-direct-sum-sequence` — **corollary**
    `[LA]`. For an actual chain splitting,
    $H_n(B)\cong H_n(A)\oplus H_n(C)$.
27. `cor-short-five-lemma-for-quasi-isomorphisms` — **corollary** `[LA]`; the
    two-out-of-three statement restricted to a diagram of short exact
    sequences.
28. `prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees` —
    **proposition** `[LA]`; later Ext pages reuse the pattern but not the item
    as a substitute for their own variance checks.
29. `def-homological-delta-functor-carried-by-homology-of-complexes` —
    **definition** `[LN]`. The family $(H_n)$ with item 5's connecting arrows;
    this is a concrete example only. Abstract $\delta$-functors are `HA-7`.
30. `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws` —
    **proposition** `[LA]`, summarising items 11–13 without inventing new axioms.

### `fs-` items (A page)

- `fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof` —
  **false statement** `[LN]`; item 6 discharges three separate choices.
- `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map` —
  **false statement** `[LN]`; only a compatible chain splitting forces zero.
- `fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes` —
  **false statement** `[LN]`; it is homological and produces connecting maps.
- `fs-the-cohomology-connecting-morphism-lowers-degree` — **false statement**
  `[LN]`; that imports the chain convention into upper indices.
- `fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square` —
  **false statement** `[LN]`; all ordinary squares are functorial already, and
  the connecting square is the only substantive one.

### B page — `long-exact-sequences-in-homology-examples`

`ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes` `[AA]` ·
`ex-a-degreewise-split-sequence-with-nonzero-connecting-map` `[AA]` ·
`ex-the-cone-long-exact-sequence-for-multiplication-by-m` `[AA]` ·
`ex-two-out-of-three-for-a-diagram-of-finite-complexes` `[AA]` ·
`ex-a-six-term-cohomology-sequence` `[AA]` ·
`cex-homology-is-not-an-exact-functor` `[AN]` ·
`ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences` `[AA]` ·
`ex-relative-homology-of-a-composable-pair-of-stalk-complexes` `[AA]`.

### Sources and exact locators

- **Weibel §1.3 “Long Exact Sequences” (printed pp. 10–14) and §1.5 “Mapping
  Cones and Cylinders” (printed pp. 18–24).** Primary textbook source for items
  2–25.
- **Rotman §6.1 “Homology Functors” (pp. 323–339), especially the connecting
  homomorphism, Fundamental Theorem of Homological Algebra, and naturality.**
  Independent textbook treatment.
- **Sharifi §2.7 “Complexes” (pp. 44–46) and §3.1 “$\delta$-functors”
  (pp. 51–53).** Open lecture-note control for the exactness and naturality
  package.
- **The Stacks Project, *Homological Algebra*, §§12 “Cohomological delta-
  functors” and 13 “Complexes” (current PDF pp. 21–28).** Independent
  categorical formulation; the snake construction itself is cited from the
  library's `the-diagram-lemmas-in-an-abelian-category`.

### Proof strategy and traps

The construction has four stages: use the categorical snake arrow on the
cycle/boundary diagram; prove it lands in cycles modulo boundaries; prove it
kills source boundaries; descend to homology. Naturality is then descended from
the already proved naturality of the snake arrow. A member chase may be included
only as the module-specialised item 6, never as the proof that the general
categorical arrow exists.

**Forward references: NONE.**

---

## HA-5. Projective and Injective Resolutions, Comparison, and Horseshoe

**page id** `projective-and-injective-resolutions` *(planned id kept)*  
**`requires`** `long-exact-sequences-in-homology`,
`subobject-lattices-generators-and-the-grothendieck-axioms`,
`free-modules-and-exact-sequences`

Projective and injective **objects** already belong to the category track, and
their module instances are published. This page adds time: a resolution is an
augmented exact complex of such objects. Existence, comparison, uniqueness up
to homotopy, the horseshoe lemma, and Schanuel's lemma are separated so that
later statements can cite exactly the amount of choice and exactly the
comparison data they consume.

### A-page items, in dependency order

**Resolutions and their existence**

1. `def-augmented-chain-complex-over-an-object` — **definition** `[LN]`.
   A chain complex in nonnegative degrees with an augmentation
   $\varepsilon:P_0\to A$ satisfying $\varepsilon d_1=0$.
2. `def-coaugmented-cochain-complex-under-an-object` — **definition** `[LN]`.
   The dual datum $A\to I^0$.
3. `def-projective-resolution-in-an-abelian-category` — **definition** `[LN]`.
   An exact augmented complex
   $\cdots\to P_1\to P_0\to A\to0$ with every $P_n$ projective.
4. `def-injective-resolution-in-an-abelian-category` — **definition** `[LN]`.
   An exact coaugmented complex
   $0\to A\to I^0\to I^1\to\cdots$ with every $I^n$ injective.
5. `def-deleted-resolution` — **definition** `[LN]`. Removing the resolved
   object and augmentation/coaugmentation leaves the complex to which a
   functor is applied; the word “resolution” never ambiguously denotes both.
6. `def-length-of-a-resolution` — **definition** `[LN]`. Length at most $n$
   means zero projective/injective terms beyond degree $n$.
7. `def-syzygy-and-cosyzygy-relative-to-a-resolution` — **definition** `[LN]`.
   $\Omega^n_P A$ and $\Sigma_I^n A$ are the indicated kernel/cokernel objects
   **relative to the displayed resolution**; no canonical-object claim is made.
8. `lem-one-step-extension-of-a-partial-projective-resolution` — **lemma**
   `[LA]`. An epimorphism from a projective object onto the current kernel adds
   the next term and preserves exactness.
9. `lem-one-step-extension-of-a-partial-injective-resolution` — **lemma**
   `[LA]`, dual.
10. `thm-enough-projectives-gives-projective-resolutions` — **theorem** `[LA]`.
    In an essentially small abelian category, dependent choice iterates item 8
    for each fixed object. In a large category, the statement instead assumes
    a set-valued precover construction or supplied successive covers; bare
    class-sized existence is not silently fed to set-level DC. It never selects
    one resolution for every object of a large category.
11. `thm-enough-injectives-gives-injective-resolutions` — **theorem** `[LA]`,
    with the same essentially-small/set-valued-construction or supplied-
    embeddings boundary.
12. `cor-every-module-admits-a-projective-resolution` — **corollary** `[LA]`.
    Cites published `thm-direct-sums-of-projectives-and-enough-projectives`;
    no projective-module theorem is repeated.
13. `cor-every-module-admits-an-injective-resolution` — **corollary** `[LA]`.
    Cites published `thm-module-categories-have-enough-injectives` and inherits
    its explicit AC boundary.
14. `prop-the-iterated-free-module-resolution-is-canonical-in-zf` —
    **proposition** `[LA]`. For a module, repeatedly take the free module on the
    underlying set of the current kernel. This constructs a functorial exact
    resolution by free modules without choosing bases or preimages in ZF. It is
    a **projective** resolution only under the choice boundary already recorded
    in `thm-free-modules-are-projective-with-choice-boundary`.

**The comparison theorem, decomposed**

15. `def-augmentation-preserving-map-of-projective-resolutions` — **definition**
    `[LN]`; dually for coaugmentations.
16. `lem-lift-a-map-through-degree-zero-of-a-projective-resolution` — **lemma**
    `[LA]`. Projectivity supplies $f_0:P_0\to Q_0$ over a given $f:A\to B$.
17. `lem-extend-a-partial-comparison-map-by-one-degree` — **lemma** `[LA]`.
    Exactness makes the obstruction land in the next cycle, and projectivity
    lifts it.
18. `thm-projective-comparison-map-exists` — **theorem** `[LA]`. Relative to
    supplied projective resolutions, a map $A\to B$ lifts to an
    augmentation-preserving chain map. A countable string of lift choices uses
    DC unless the lifts are supplied.
19. `lem-extend-a-partial-comparison-homotopy-by-one-degree` — **lemma** `[LA]`.
20. `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy` —
    **theorem** `[LA]`. Any two lifts of the same object map are homotopic
    through an augmentation-zero homotopy. LANDMARK.
21. `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object` —
    **theorem** `[LA]`. Compare the identity both ways; item 20 identifies the
    composites with identities.
22. `thm-injective-comparison-map-exists` — **theorem** `[LA]`, dual, with a
    map $A\to B$ extending to a cochain map between supplied injective
    resolutions in the same direction.
23. `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` —
    **theorem** `[LA]`.
24. `thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object` —
    **theorem** `[LA]`.
25. `cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence` —
    **corollary** `[LA]`. The equivalence class is forced; the comparison map
    itself is not canonical.
26. `prop-comparison-maps-respect-composition-up-to-homotopy` — **proposition**
    `[LA]`. A lift of $gf$ and the composite of lifts of $f,g$ lift the same
    map, hence are homotopic.
27. `prop-comparison-of-the-identity-is-homotopic-to-the-identity` —
    **proposition** `[LA]`.

**The horseshoe lemma**

28. `lem-degree-zero-horseshoe-lift` — **lemma** `[LA]`. Given resolutions of
    $A'$ and $A''$ and $0\to A'\to A\to A''\to0$, lift the right projective
    term through $A\to A''$ and combine it with the left term to obtain
    $P'_0\oplus P''_0\twoheadrightarrow A$.
29. `lem-the-horseshoe-kernel-fits-a-short-exact-sequence` — **lemma** `[LA]`.
    The new kernel lies in
    $0\to\Omega^1A'\to K_1\to\Omega^1A''\to0$; the proof invokes the
    categorical snake/nine-lemma package already available.
30. `lem-inductive-horseshoe-step` — **lemma** `[LA]`. Repeat items 28–29 on
    the kernel sequence.
31. `thm-horseshoe-lemma-for-projective-resolutions` — **theorem** `[LA]`.
    There is a projective resolution of $A$ with
    $P_n=P'_n\oplus P''_n$ fitting into a degreewise split short exact sequence
    of augmented complexes. LANDMARK. DC/supplied lifts are named.
32. `thm-horseshoe-lemma-for-injective-resolutions` — **theorem** `[LA]`, dual,
    with $I^n=I'^n\oplus I''^n$ for finite biproducts.
33. `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy` —
    **proposition** `[LA]`. This is enough for natural connecting morphisms;
    strict functoriality is not claimed.
34. `cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution` —
    **corollary** `[LA]`.

**Schanuel, dimensions, and injectives in Grothendieck categories**

35. `thm-schanuel-lemma-in-an-abelian-category` — **theorem** `[LA]`. If
    $0\to K\to P\to A\to0$ and $0\to K'\to P'\to A\to0$ with $P,P'$
    projective, then $K\oplus P'\cong K'\oplus P$.
36. `cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic` —
    **corollary** `[LA]`; iterated Schanuel, not literal isomorphism in general.
37. `thm-dual-schanuel-lemma-for-injective-copresentations` — **theorem** `[LA]`.
38. `prop-a-projective-object-has-a-length-zero-projective-resolution` —
    **proposition** `[LA]`; dually for injectives.
39. `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings` —
    **theorem** `[LL]`. LANDMARK, sourced closely to Stacks Tag `079H`. The
    proof is split into items 40–45 and uses the generator, AB5, coproduct, and
    cofinality data minted below `MA-9`.
40. `lem-extension-from-subobjects-of-a-generator-detects-injectivity` —
    **lemma** `[LL]`. An object $I$ is injective if every map $N\to I$ from a
    subobject $N\subset U$ of a fixed generator extends to $U$; the source's
    smallness hypothesis making the subobjects a set is named.
41. `def-functorial-one-step-generator-extension` — **definition** `[LN]`.
    $\mathbf M(M)$ is the pushout, over all $N\subset U$ and
    $\varphi:N\to M$, of the coproduct of $N\hookrightarrow U$; the indexing
    collection is proved a set before either coproduct is formed.
42. `lem-the-one-step-generator-map-is-a-functorial-monomorphism` — **lemma**
    `[LL]`. It also ensures that each map from a generator-subobject appearing
    at a stage extends at the next stage.
43. `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps` —
    **lemma** `[LL]`. Successors use item 42; limit stages use AB5 colimits;
    cofinality larger than $|U|$ forces each $N\subset U$ map to factor through
    an earlier stage.
44. `lem-a-sufficiently-long-generator-extension-iteration-is-injective` —
    **lemma** `[LL]`, by items 40 and 43.
45. `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution` —
    **corollary** `[LA]`. Iterating the functorial embedding on successive
    cokernels gives a functorial injective resolution; it inherits the AC used
    to establish item 39 but needs no additional sequence of arbitrary choices.

### `fs-` items (A page)

- `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects` —
  **false statement** `[LN]`; it is a pointwise existence property, not global
  choice.
- `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map` — **false
  statement** `[LN]`; only its homotopy class is unique.
- `fs-two-syzygies-of-an-object-are-canonically-isomorphic` — **false
  statement** `[LN]`; Schanuel supplies stable isomorphism.
- `fs-the-horseshoe-middle-resolution-is-canonical` — **false statement**
  `[LN]`; its construction contains lifts and splittings.
- `fs-every-abelian-category-has-enough-projectives-and-enough-injectives` —
  **false statement** `[LN]`; both are hypotheses, with the Grothendieck
  theorem giving only the injective side.
- `fs-every-acyclic-complex-of-projective-objects-is-contractible` — **false
  statement** `[LN]`; boundedness/splitting hypotheses cannot be dropped.

### B page — `projective-and-injective-resolutions-examples`

`ex-a-projective-resolution-of-a-cyclic-abelian-group` `[AA]` ·
`ex-the-canonical-iterated-free-resolution-of-a-module` `[AA]` ·
`ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope` `[AA]` ·
`ex-comparison-maps-between-two-resolutions-of-a-cyclic-group` `[AA]` ·
`ex-an-explicit-comparison-homotopy` `[AA]` ·
`ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups` `[AA]` ·
`ex-schanuel-lemma-for-two-presentations-of-a-module` `[AA]` ·
`cex-two-projective-resolutions-with-nonisomorphic-first-syzygies` `[AN]` ·
`cex-a-category-with-enough-injectives-but-not-enough-projectives` `[LL]`
*(a source-backed example with the categorical claims proved, non-load-bearing)*.

### Sources and exact locators

- **Weibel §§2.2 “Projective Resolutions” and 2.3 “Injective Resolutions”
  (printed pp. 33–42), including Comparison Theorem 2.2.6, Horseshoe Lemma 2.2.8,
  and the injective Comparison Theorem 2.3.7.** Primary textbook source for
  items 1–38.
- **Rotman §§3.1 “Projective Modules”, 3.2 “Injective Modules”, and §6.2.1
  “Left Derived Functors” through the comparison and horseshoe results
  (pp. 98–130, 340–356).** Independent textbook treatment.
- **The Stacks Project, *Homological Algebra*, §§27 “Injectives”, 28
  “Projectives”, and 29 “Injectives and adjoint functors” (current PDF
  pp. 68–75).** Independent categorical control for resolution existence and
  comparison.
- **The Stacks Project, *Injectives*, §19.11 “Injectives in Grothendieck
  categories”, especially Theorem 19.11.7, Tag `079H`.** Primary accessible
  source for items 39–45.
- **Sharifi §§3.2 “Projective objects”, 3.3 “Left derived functors”, and 3.4
  “Injectives and right derived functors” (pp. 53–65).** Open lecture-note
  control.

### Proof strategy and traps

Comparison existence and comparison uniqueness are different inductions and
must remain different items. The former lifts cycles through epimorphisms; the
latter constructs a homotopy whose next component repairs the current
difference. The horseshoe proof must first establish the short exact sequence
of new kernels (item 29) before iterating. Finally, Theorem 39 is not a casual
corollary of “has a generator”: its set-indexed pushout, functorial monomorphism,
transfinite iteration, AB5 limit step, and cofinality factorization are separately
visible, and §23 names the source proof's AC use.

**Forward references: NONE.**

---

## HA-6. Left and Right Derived Functors — Data-Supplied Construction

**page id** `derived-functors` *(planned id kept)*  
**`requires`** `projective-and-injective-resolutions`,
`preadditive-and-additive-categories-and-biproducts`

This page implements SE-D3 rather than merely warning about it. A resolution
datum is part of the input. Comparison says that a morphism has a unique
induced map on homology even though its lift is not unique; unique
specification then gives functoriality without selecting a lift for every
morphism. A second supplied resolution datum yields a unique natural
isomorphism satisfying identity and cocycle laws. That is the precise content
of “well defined” available without global choice.

### A-page items, in dependency order

**Input data and object values**

1. `def-supplied-projective-resolution-datum` — **definition** `[LN]`. For
   every object $A$ in the stated domain, an explicitly supplied augmented
   projective resolution $P(A)\to A$. This is structure, not an existence
   theorem. LANDMARK.
2. `def-supplied-injective-resolution-datum` — **definition** `[LN]`, dual.
3. `def-left-derived-object-relative-to-projective-resolution-data` —
   **definition** `[LN]`. For an additive $F:\mathcal A\to\mathcal B$,
   $L_n^P F(A)=H_n(F(P(A)))$; no exactness of $F$ is needed for $n>0$ to be
   defined.
4. `def-right-derived-object-relative-to-injective-resolution-data` —
   **definition** `[LN]`. $R_P^n$ is not used: the notation is
   $R_I^nF(A)=H^n(F(I(A)))$.
5. `prop-negative-derived-degrees-vanish-for-one-sided-resolutions` —
   **proposition** `[LA]`, by the degree support of the deleted resolution.

**Morphisms and the seven well-definedness discharges**

6. `lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions` —
   **lemma** `[LA]`, citing `HA-5` comparison existence.
7. `lem-the-induced-homology-map-is-independent-of-the-comparison-lift` —
   **lemma** `[LA]`, by comparison homotopy and homotopy invariance of homology.
8. `def-left-derived-map-relative-to-resolution-data` — **definition** `[LN]`.
   $L_n^PF(f)$ is the unique map induced by any comparison lift;
   `justified_by` names items 6–7.
9. `prop-left-derived-maps-preserve-identities` — **proposition** `[LA]`.
10. `prop-left-derived-maps-preserve-composition` — **proposition** `[LA]`.
    Comparison of a composite and composite of comparisons are homotopic.
11. `thm-left-derived-functors-relative-to-supplied-data-are-additive-functors` —
    **theorem** `[LA]`. $L_n^PF:\mathcal A\to\mathcal B$. LANDMARK.
12. `lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions` —
    **lemma** `[LA]`.
13. `lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension` —
    **lemma** `[LA]`.
14. `def-right-derived-map-relative-to-resolution-data` — **definition** `[LN]`.
15. `thm-right-derived-functors-relative-to-supplied-data-are-additive-functors` —
    **theorem** `[LA]`.
16. `prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors` —
    **proposition** `[LA]`. Apply it degreewise to the fixed resolutions;
    naturality with comparison lifts is checked.
17. `prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors` —
    **proposition** `[LA]`, dual.

**Changing the supplied data**

18. `lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects` —
    **lemma** `[LA]`.
19. `lem-the-change-of-projective-resolution-isomorphisms-are-natural` —
    **lemma** `[LA]`; the square commutes because its two chain-level routes
    lift the same object map and hence are homotopic.
20. `thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic` —
    **theorem** `[LA]`. The natural isomorphism is independent of comparison
    maps and relative to the two supplied data. LANDMARK.
21. `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` —
    **proposition** `[LA]`. This is what licenses later suppression of the
    superscript $P$ after the data are fixed.
22. `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic` —
    **theorem** `[LA]`.
23. `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` —
    **proposition** `[LA]`.
24. `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` —
    **remark** `[LN]`. It enumerates, without collapsing them: object
    existence, lift existence, lift independence, identity, composition,
    change of resolution, and naturality. It expressly denies the
    unconditional global-choice form.

**Degree zero, vanishing, and acyclic resolutions**

25. `thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor` —
    **theorem** `[LA]`. The canonical $L_0F\cong F$ is natural; right exactness
    is exactly what sends $P_1\to P_0\to A\to0$ to a cokernel diagram.
26. `thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor` —
    **theorem** `[LA]`, dual.
27. `prop-positive-left-derived-functors-vanish-on-projective-objects` —
    **proposition** `[LA]`, using the length-zero resolution and change-of-data
    isomorphism.
28. `prop-positive-right-derived-functors-vanish-on-injective-objects` —
    **proposition** `[LA]`.
29. `def-acyclic-object-for-a-left-exact-functor` — **definition** `[LN]`.
    $A$ is $F$-acyclic when $R^nF(A)=0$ for $n>0$, relative to the fixed
    resolution datum; data independence follows from item 22.
30. `def-acyclic-object-for-a-right-exact-functor` — **definition** `[LN]`,
    using $L_nF$.
31. `def-f-acyclic-resolution` — **definition** `[LN]`. A resolution by
    $F$-acyclic objects, with orientation matched to left/right derivation.
32. `thm-acyclic-resolution-theorem-for-right-derived-functors` — **theorem**
    `[LA]`. An $F$-acyclic resolution computes $R^nF$; proof uses a finite
    staircase of long exact sequences, not the later spectral sequence.
33. `thm-acyclic-resolution-theorem-for-left-derived-functors` — **theorem**
    `[LA]`, dual.
34. `cor-adapted-classes-compute-derived-functors` — **corollary** `[LA]`.
    A class closed under the needed kernels/cokernels and admitting
    monomorphisms/epimorphisms gives acyclic resolutions; every closure
    hypothesis is printed.
35. `prop-an-exact-functor-has-vanishing-positive-derived-functors` —
    **proposition** `[LA]`.
36. `prop-derived-functors-commute-with-finite-biproducts` — **proposition**
    `[LA]`; infinite sums/products require AB4-type hypotheses and are not
    inferred.

**Variance and opposite categories**

37. `prop-contravariant-derived-functors-are-derived-on-the-opposite-category` —
    **proposition** `[LA]`. A contravariant additive functor is treated as a
    covariant functor on $\mathcal A^{op}$; projective resolutions become
    injective resolutions there. This is the variance bridge used by Ext.
38. `prop-a-bifunctor-can-be-derived-in-either-variable-when-the-corresponding-resolution-data-are-supplied` —
    **proposition** `[LA]`. It only constructs the two candidates; equality or
    balance is a later theorem, never automatic.
39. `def-balanced-derived-bifunctor` — **definition** `[LN]`. Two one-variable
    derived constructions plus a natural isomorphism satisfying the degree-zero
    agreement and change-of-data coherence.

### `fs-` items (A page)

- `fs-enough-projectives-implies-a-canonical-resolution-for-every-object` —
  **false statement** `[LN]`; it suppresses SE-D3's missing global selection.
- `fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift` —
  **false statement** `[LN]`; item 7 is precisely the independence theorem.
- `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` — **false
  statement** `[LN]`; right exactness is needed.
- `fs-derived-functors-in-two-variables-are-automatically-balanced` — **false
  statement** `[LN]`; `HA-8` and `HA-10` prove balance under specific
  hypotheses.
- `fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution` —
  **false statement** `[LN]`; injectives are one adapted class, not the
  definition.

### B page — `derived-functors-examples`

`ex-the-left-derived-functors-of-an-exact-functor` `[AA]` ·
`ex-the-right-derived-functors-of-hom-from-a-fixed-object` `[AA]` ·
`ex-two-resolution-data-and-their-change-isomorphism` `[AA]` ·
`ex-independence-of-two-comparison-lifts-on-homology` `[AA]` ·
`ex-an-acyclic-resolution-that-is-not-an-injective-resolution` `[LL]` ·
`cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` `[LL]` ·
`ex-a-contravariant-functor-derived-via-the-opposite-category` `[AA]`.

### Sources and exact locators

- **Weibel §§2.1 “$\delta$-Functors”, 2.4 “Left Derived Functors”, 2.5 “Right
  Derived Functors”, and 2.6 “Adjoint Functors and Left/Right Exactness”
  (printed pp. 30–32, 43–57).** Primary textbook source for items 3–39, translated to the
  data-supplied foundation.
- **Rotman §6.2 “Derived Functors”, including §§6.2.1–6.2.4 (pp. 340–403).**
  Independent textbook treatment of covariant and contravariant cases.
- **Sharifi §§3.3–3.4 “Left derived functors” and “Injectives and right derived
  functors” (pp. 58–65).** Open independent control.
- **The Stacks Project, *Derived Categories*, §§18–20 “Injective resolutions”,
  “Projective resolutions”, and “Right derived functors and injective
  resolutions” (current PDF pp. 63–72).** Source for comparison, computation,
  and change-of-resolution statements.

### Proof strategy and traps

Items 6–24 are the proof. A future page that writes
$L_nF(f)=H_n(F(\tilde f))$ and moves on has omitted lift existence, lift
independence, functor laws, data comparison, and naturality. The maps on
homology are definable by unique specification once independence is proved; no
choice function on the class of all morphisms is needed. Do not weaken the
statement of SE-D3 by hiding the supplied resolution datum in prose.

**Forward references: NONE.**

---

## HA-7. Delta Functors, Effacement, and Universality

**page id** `delta-functors-and-universality`  
**`requires`** `derived-functors`, `projective-and-injective-resolutions`,
`long-exact-sequences-in-homology`

Long exact sequences do not merely accompany derived functors; together with
naturality they form a structure whose universal property characterises the
derived theory. This page defines that structure, derives connecting maps from
horseshoe resolutions, proves independence of every horseshoe choice, and then
proves the effacement criterion for universality. The result is what later lets
Ext and Tor be identified across different constructions without comparing
every resolution by hand.

### A-page items, in dependency order

1. `def-homological-delta-functor` — **definition** `[LN]`. Additive functors
   $T_n:\mathcal A\to\mathcal B$ for $n\ge0$ with natural connecting arrows
   $T_n(C)\to T_{n-1}(A)$ for every short exact
   $0\to A\to B\to C\to0$, satisfying the full natural long exact sequence.
2. `def-cohomological-delta-functor` — **definition** `[LN]`. Connecting arrows
   $T^n(C)\to T^{n+1}(A)$.
3. `def-morphism-of-homological-delta-functors` — **definition** `[LN]`. A
   degreewise natural transformation commuting with connecting maps.
4. `def-morphism-of-cohomological-delta-functors` — **definition** `[LN]`.
5. `def-universal-delta-functor` — **definition** `[LN]`. Every natural
   transformation in degree zero extends uniquely to a morphism of
   $\delta$-functors.
6. `def-effaceable-homological-delta-functor-in-positive-degrees` —
   **definition** `[LN]`. For $n>0$ and each $A$, an epimorphism $P\twoheadrightarrow A$
   kills the induced $T_n$ map; no family of effacements is presumed.
7. `def-effaceable-cohomological-delta-functor-in-positive-degrees` —
   **definition** `[LN]`, using a monomorphism $A\hookrightarrow I$.

**Derived functors carry delta structures**

8. `lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor` —
   **lemma** `[LA]`. Degreewise split exactness is preserved by an additive
   functor, even if the functor is not exact.
9. `def-connecting-map-for-left-derived-functors` — **definition** `[LN]`.
   Apply homology's connecting construction to an `HA-5` horseshoe sequence.
10. `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts` —
    **lemma** `[LA]`. Comparison of horseshoes gives the same homology map.
11. `thm-left-derived-functors-form-a-homological-delta-functor` — **theorem**
    `[LA]`. If $F$ is additive and right exact, $(L_nF)$ with item 9's maps is
    homological and $L_0F\cong F$. LANDMARK.
12. `thm-right-derived-functors-form-a-cohomological-delta-functor` — **theorem**
    `[LA]`, dual, for additive left exact $F$.
13. `prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors` —
    **proposition** `[LA]`; compatibility with connecting maps is proved from
    naturality of homology's connector.
14. `cor-derived-long-exact-sequence` — **corollary** `[LA]`. Prints both the
    homological and cohomological long exact sequences with variance and degree
    directions.

**Effacement and the fundamental theorem**

15. `prop-positive-left-derived-functors-are-effaceable-by-projectives` —
    **proposition** `[LA]`. Use a projective epimorphism and vanishing on the
    projective object.
16. `prop-positive-right-derived-functors-are-effaceable-by-injectives` —
    **proposition** `[LA]`.
17. `lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle` —
    **lemma** `[LA]`. For $0\to K\to P\to A\to0$, if
    $T_n(P)=T_{n-1}(P)=0$, the connecting arrow gives
    $T_n(A)\cong T_{n-1}(K)$. The proof prints the exact segment and also
    records the one-sided surjectivity/injectivity conclusions when only one
    vanishing hypothesis is available.
18. `lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle` —
    **lemma** `[LA]`. For $0\to A\to I\to C\to0$, if
    $T^{n-1}(I)=T^n(I)=0$, then $T^{n-1}(C)\cong T^n(A)$; the one-sided
    forms are recorded separately.
19. `lem-extend-a-degree-zero-transformation-through-one-dimension-shift` —
    **lemma** `[LA]`. Naturality and independence of the selected effacement
    are separate clauses.
20. `lem-the-effacement-extension-is-independent-of-the-effacing-morphism` —
    **lemma** `[LA]`. Compare two effacements through a third finite biproduct;
    no global choice is required.
21. `lem-the-effacement-extension-commutes-with-connecting-morphisms` —
    **lemma** `[LA]`.
22. `thm-effaceable-homological-delta-functors-are-universal` — **theorem**
    `[LA]`. LANDMARK.
23. `thm-effaceable-cohomological-delta-functors-are-universal` — **theorem**
    `[LA]`, dual.
24. `thm-derived-functors-are-universal-delta-functors` — **theorem** `[LA]`.
    Combines items 11–16 and 22–23. LANDMARK.
25. `cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic` —
    **corollary** `[LA]`; the two extensions of the identity are inverse by
    uniqueness.
26. `cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero` —
    **corollary** `[LA]`.
27. `prop-an-exact-base-functor-has-the-trivial-universal-delta-functor` —
    **proposition** `[LA]`.
28. `prop-satellites-give-the-first-derived-functor` — **proposition** `[LL]`.
    Under enough projectives/injectives, the first left/right satellite agrees
    with $L_1/R^1$; satellites are defined inline narrowly and are not used
    elsewhere.
29. `rem-universality-is-the-construction-independence-principle` — **remark**
    `[LN]`. Later balance proofs first construct a degree-zero agreement and
    then use universality; they do not infer equality from notation.

### `fs-` items (A page)

- `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor` —
  **false statement** `[LN]`; naturality of the connecting maps is part of the
  structure.
- `fs-effaceability-means-every-positive-value-is-zero` — **false statement**
  `[LN]`; it means a suitable induced map can be killed.
- `fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends` —
  **false statement** `[LN]`; universality is a theorem under effacement.
- `fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof` —
  **false statement** `[LN]`; item 10 is mandatory.
- `fs-universality-removes-the-need-for-supplied-resolution-data` — **false
  statement** `[LN]`; it compares constructions once they exist, not a
  class-sized selection that has not been made.

### B page — `delta-functors-and-universality-examples`

`ex-homology-as-a-homological-delta-functor` `[LA]` ·
`ex-the-trivial-delta-functor-of-an-exact-functor` `[AA]` ·
`ex-one-dimension-shift-along-a-projective-presentation` `[AA]` ·
`ex-one-dimension-shift-along-an-injective-copresentation` `[AA]` ·
`ex-extending-a-degree-zero-natural-transformation` `[AA]` ·
`cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor` `[AN]` ·
`ex-two-universal-delta-functors-and-their-unique-isomorphism` `[AA]`.

### Sources and exact locators

- **Weibel §2.1 “$\delta$-Functors”, §2.4 “Left Derived Functors”, and §2.5
  “Right Derived Functors” (printed pp. 30–32, 43–50).** Primary textbook source for all
  items, especially the effacement criterion and universality.
- **Rotman §6.2.2 “Axioms”, §6.2.3 “Covariant Right Derived Functors”, and
  §6.2.4 “Contravariant Right Derived Functors” (pp. 357–403).** Independent
  textbook treatment.
- **The Stacks Project, *Homological Algebra*, §12 “Cohomological delta-
  functors” (current PDF pp. 21–24).** Independent source for morphisms,
  universal delta functors, and effaceability.
- **Sharifi §3.1 “$\delta$-functors” and §§3.3–3.4 (pp. 51–65).** Open
  lecture-note control.

### Proof strategy and traps

The hard theorem is 22/23. The author must show the extension is defined,
independent of the effacement, natural in the object, compatible with every
connecting map, and unique. A slogan such as “dimension shifting proves it” is
not a proof. A degreewise long exact sequence without the connecting-square
naturality is not a $\delta$-functor.

**Forward references: NONE.**

---

## HA-8. Ext and Balanced Resolutions

**page id** `ext-and-balanced-resolutions`  
**`requires`** `delta-functors-and-universality`, `derived-functors`

Ext has two legitimate constructions: derive $\operatorname{Hom}(M,-)$ with
injectives or derive the contravariant $\operatorname{Hom}(-,N)$ with
projectives. The notation $\operatorname{Ext}^n(M,N)$ is not licensed until
these constructions are compared naturally. This page proves balance from the
first-quadrant double complex $\operatorname{Hom}(P_\bullet,I^\bullet)$ by an
acyclic-assembly argument whose finite diagonals require no spectral-sequence
theorem.

### A-page items, in dependency order

1. `def-ext-via-an-injective-resolution-of-the-second-variable` —
   **definition** `[LN]`. In an abelian category with a supplied injective
   resolution datum,
   $\operatorname{Ext}_{\mathcal A,I}^n(M,N)=
   H^n\operatorname{Hom}_{\mathcal A}(M,I(N))$.
2. `def-ext-via-a-projective-resolution-of-the-first-variable` —
   **definition** `[LN]`.
   $\operatorname{Ext}_{\mathcal A,P}^n(M,N)=
   H^n\operatorname{Hom}_{\mathcal A}(P(M),N)$, with the Hom-complex signs
   stated.
3. `prop-ext-zero-is-hom-for-the-injective-construction` — **proposition**
   `[LA]`, naturally in both variables, by left exactness of Hom.
4. `prop-ext-zero-is-hom-for-the-projective-construction` — **proposition**
   `[LA]`, naturally in both variables.
5. `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` —
   **proposition** `[LA]`; the first-variable map is induced directly on Hom,
   the second by comparison of injective resolutions.
6. `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` —
   **proposition** `[LA]`; variance is checked against the contravariant
   comparison lift.
7. `prop-positive-ext-vanishes-on-an-injective-second-variable` —
   **proposition** `[LA]`.
8. `prop-positive-ext-vanishes-on-a-projective-first-variable` —
   **proposition** `[LA]`.

**The double-complex comparison**

9. `def-hom-double-complex-of-a-projective-and-an-injective-resolution` —
   **definition** `[LN]`. For fixed $M,N$, the first-quadrant bicomplex
   $K^{p,q}=\operatorname{Hom}_{\mathcal A}(P_p(M),I^q(N))$ with horizontal
   differential induced contravariantly by $d_P$ and vertical differential by
   $d_I$.
10. `lem-the-two-hom-double-complex-differentials-commute-before-signing` —
    **lemma** `[LA]`; the total differential uses the declared sign so that it
    squares to zero.
11. `def-direct-sum-total-complex-on-finite-diagonals` — **definition** `[LN]`.
    $\operatorname{Tot}^nK=\bigoplus_{p+q=n}K^{p,q}$; because $p,q\ge0$ each
    diagonal is finite, so product/sum totalisation ambiguity does not arise.
12. `lem-acyclic-assembly-by-exact-columns` — **lemma** `[LA]`. If every column
    except the augmented edge is exact and the finite-diagonal boundedness
    holds, the augmentation from the edge complex to $\operatorname{Tot}K$ is
    a quasi-isomorphism. The proof filters finite truncations and repeatedly
    uses short exact sequences, not a spectral sequence.
13. `lem-acyclic-assembly-by-exact-rows` — **lemma** `[LA]`, dual.
14. `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact` —
    **lemma** `[LA]`.
15. `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact` —
    **lemma** `[LA]`.
16. `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic` —
    **theorem** `[LA]`. Compare both edge complexes through
    $\operatorname{Tot}\operatorname{Hom}(P,I)$ using items 12–15. LANDMARK.
17. `lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data` —
    **lemma** `[LA]`; uniqueness in universal delta functors gives the same map
    as the double-complex comparison.
18. `prop-the-ext-balance-isomorphism-is-natural-in-both-variables` —
    **proposition** `[LA]`.
19. `prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws` —
    **proposition** `[LA]`.
20. `def-balanced-ext-bifunctor` — **definition** `[LN]`.
    $\operatorname{Ext}^n_{\mathcal A}(-,-)$ denotes either construction only
    after items 16–19; `justified_by` lists them. LANDMARK.

**Long exact sequences and dimension shifting**

21. `thm-long-exact-ext-sequence-in-the-second-variable` — **theorem** `[LA]`.
    A short exact $0\to N'\to N\to N''\to0$ gives
    $\operatorname{Hom}(M,N'')\to\operatorname{Ext}^1(M,N')\to\cdots$,
    natural in the short exact sequence and in $M$.
22. `thm-long-exact-ext-sequence-in-the-first-variable` — **theorem** `[LA]`.
    Contravariance reverses the three Hom terms; the connecting arrow raises
    Ext degree and its sign convention is printed.
23. `prop-the-two-ext-long-exact-sequences-agree-under-balance` —
    **proposition** `[LA]`.
24. `thm-ext-dimension-shifting-in-the-first-variable` — **theorem** `[LA]`.
    From $0\to\Omega M\to P\to M\to0$ with $P$ projective,
    $\operatorname{Ext}^{n+1}(M,N)\cong
    \operatorname{Ext}^n(\Omega M,N)$ for $n\ge1$, with the low-degree exact
    segment stated separately.
25. `thm-ext-dimension-shifting-in-the-second-variable` — **theorem** `[LA]`,
    using an injective copresentation.
26. `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable` —
    **corollary** `[LA]`, relative to the supplied resolution.
27. `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable` —
    **corollary** `[LA]`.
28. `prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses` —
    **proposition** `[LA]`. The page states the exact functor, adjoint, and
    preservation of projectives/injectives explicitly; no generic “Ext is
    functorial in the category” claim is made.

### `fs-` items (A page)

- `fs-ext-is-defined-before-choosing-or-supplying-resolutions` — **false
  statement** `[LN]`; SE-D3 applies to both constructions.
- `fs-projective-ext-and-injective-ext-are-equal-by-definition` — **false
  statement** `[LN]`; balance is Theorem 16.
- `fs-ext-is-covariant-in-both-variables` — **false statement** `[LN]`.
- `fs-positive-ext-vanishes-whenever-either-variable-is-injective` — **false
  statement** `[LN]`; injectivity is relevant in the second variable, while
  projectivity is relevant in the first.
- `fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals` —
  **false statement** `[LN]`; item 11 uses first-quadrant finite diagonals.
- `fs-balance-of-ext-requires-the-spectral-sequence-pages` — **false statement**
  `[LN]`; items 12–16 give a noncircular acyclic-assembly proof.

### B page — `ext-and-balanced-resolutions-examples`

`ex-ext-zero-as-hom-in-both-constructions` `[AA]` ·
`ex-ext-from-a-two-term-projective-resolution` `[AA]` ·
`ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group` `[AA]` ·
`ex-the-hom-double-complex-in-low-bidegrees` `[AA]` ·
`ex-an-ext-dimension-shift` `[AA]` ·
`cex-positive-ext-does-not-vanish-for-an-injective-first-variable` `[LL]` ·
`ex-naturality-of-the-balance-isomorphism` `[AA]`.

### Sources and exact locators

- **Weibel §2.7 “Balancing Tor and Ext” (printed pp. 58–65) and §§3.3–3.4 “Ext
  for Nice Rings” and “Ext and Extensions” (printed pp. 73–79).** Primary source for the
  two constructions, acyclic assembly, and balance.
- **Rotman §7.2 “Ext” (pp. 415–427) and §6.2's contravariant derived-functor
  treatment (pp. 340–403).** Independent textbook source.
- **Sharifi §3.5 “Tor and Ext” (pp. 65–70).** Open independent control.
- **The Stacks Project, *Derived Categories*, §27 “Ext groups” (current PDF
  pp. 87–91), together with *Homological Algebra* §§27–28.** Independent
  categorical formulation and variance check.

### Proof strategy and traps

The balance proof must expose the exactness used in each direction:
$\operatorname{Hom}(P_p,-)$ is exact because $P_p$ is projective, and
$\operatorname{Hom}(-,I^q)$ is exact because $I^q$ is injective. The two edge
quasi-isomorphisms pass through a total complex with finite diagonals. Do not
cite `HA-16` backwards and do not write an unnamed spectral sequence here.

**Forward references: NONE.**

---

## HA-9. Yoneda Extensions and Homological Dimension

**page id** `yoneda-extensions-and-homological-dimension`  
**`requires`** `ext-and-balanced-resolutions`,
`projective-and-injective-resolutions`,
`chain-conditions-and-semisimple-modules`

This page explains what $\operatorname{Ext}^1$ classifies and what higher Ext
multiplies. It first constructs equivalence classes and Baer sum, checks that
pushouts and pullbacks do not depend on representatives, and only then proves
the natural isomorphism with derived Ext. Projective, injective, and global
dimension are developed from resolution length and characterised by Ext
vanishing, avoiding ring-specific regular-sequence machinery.

### A-page items, in dependency order

**One-fold extensions and Baer sum**

1. `def-extension-of-an-object-by-an-object-in-an-abelian-category` —
   **definition** `[LN]`. An extension of $M$ by $N$ is
   $0\to N\to E\to M\to0$; the order matches
   $\operatorname{Ext}^1(M,N)$.
2. `def-equivalence-of-extensions` — **definition** `[LN]`. A morphism of short
   exact sequences inducing identities on $N$ and $M$.
3. `prop-a-morphism-of-extensions-is-an-isomorphism` — **proposition** `[LA]`,
   by the categorical short five lemma.
4. `prop-equivalence-of-extensions-is-an-equivalence-relation` —
   **proposition** `[LA]`; symmetry uses item 3.
5. `def-split-extension-class` — **definition** `[LN]`; all split extensions
   are equivalent to $0\to N\to N\oplus M\to M\to0$.
6. `def-pullback-and-pushout-of-an-extension` — **definition** `[LN]`. The
   published categorical pullback/pushout universal properties supply the
   induced extensions.
7. `lem-pullback-and-pushout-descend-to-extension-classes` — **lemma** `[LA]`.
   Equivalent representatives give equivalent pullbacks/pushouts; this is the
   first representative-independence obligation.
8. `def-baer-sum-of-extension-classes` — **definition** `[LN]`. Take the direct
   sum of two extensions, pull back along the diagonal $M\to M\oplus M$, and
   push out along the codiagonal $N\oplus N\to N$.
9. `lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives` — **lemma**
   `[LA]`; `justified_by` for item 8.
10. `thm-baer-sum-makes-extension-classes-an-abelian-group` — **theorem**
    `[LA]`. The split class is zero; the inverse pushes out along $-1_N$;
    associativity and commutativity use the biproduct coherence maps. LANDMARK.
11. `prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject` —
    **proposition** `[LA]`, by pullback and pushout.

**The derived/Yoneda comparison**

12. `def-class-of-an-extension-in-derived-ext-one` — **definition** `[LN]`.
    The connecting image of $1_M\in\operatorname{Hom}(M,M)$ in the Ext long
    exact sequence of $0\to N\to E\to M\to0$.
13. `lem-equivalent-extensions-have-the-same-ext-class` — **lemma** `[LA]`, by
    naturality of the connecting map.
14. `lem-every-ext-one-class-is-represented-by-an-extension` — **lemma** `[LA]`.
    Push out the first syzygy sequence along a representing cocycle/map.
15. `lem-two-extensions-with-the-same-ext-class-are-equivalent` — **lemma**
    `[LA]`.
16. `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one` —
    **theorem** `[LA]`. The bijection preserves Baer sum and is natural in both
    variables. LANDMARK.
17. `cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set` —
    **corollary** `[LA]`. This closes the size issue for a locally small
    essentially small setting; no quotient of a proper class is silently
    formed.

**Higher extensions and products**

18. `def-n-fold-yoneda-extension` — **definition** `[LN]`. An exact sequence
    $0\to N\to E_{n-1}\to\cdots\to E_0\to M\to0$.
19. `def-equivalence-of-n-fold-extensions` — **definition** `[LN]`. Generated
    by chain maps that are the identity at both ends; the generated-equivalence
    wording is essential for $n>1$.
20. `def-yoneda-splice-product` — **definition** `[LN]`. Concatenation gives
    $\operatorname{YExt}^p(L,N)\times\operatorname{YExt}^q(M,L)
    \to\operatorname{YExt}^{p+q}(M,N)$.
21. `lem-yoneda-splicing-is-well-defined-on-equivalence-classes` — **lemma**
    `[LA]`.
22. `thm-yoneda-product-is-associative-and-unital` — **theorem** `[LA]`.
    Degree zero is Hom; identities are units.
23. `thm-higher-yoneda-ext-agrees-with-derived-ext` — **theorem** `[LA]` under
    enough projectives or enough injectives and the stated smallness condition.
24. `prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product` —
    **proposition** `[LA]`.
25. `def-graded-ext-algebra-of-an-object` — **definition** `[LN]`.
    $\operatorname{Ext}^\ast(M,M)$ with Yoneda product; no graded-commutativity
    is asserted in general.

**Dimensions**

26. `def-projective-dimension-of-an-object` — **definition** `[LN]`. The least
    length of a projective resolution, or $\infty$; existence is relative to
    enough projectives/a supplied resolution.
27. `def-injective-dimension-of-an-object` — **definition** `[LN]`, dual.
28. `thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective` —
    **theorem** `[LA]`. Independence from the chosen resolution uses Schanuel.
29. `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` — **theorem**
    `[LA]`. Equivalent conditions:
    $\operatorname{Ext}^{n+1}(M,-)=0$ and
    $\operatorname{Ext}^{k}(M,-)=0$ for all $k>n$.
30. `thm-injective-dimension-at-most-n-iff-higher-ext-vanishes` — **theorem**
    `[LA]`, with Ext in the second variable.
31. `cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite` —
    **corollary** `[LA]`, stated for a nonzero object with existence of a
    witness object and the smallness/enough-projectives hypotheses; the zero
    object is handled according to the convention in item 26.
32. `def-left-and-right-global-dimension-of-a-ring` — **definition** `[LN]`.
    Suprema of projective dimensions of left and right modules; they are not
    presumed equal for a noncommutative ring.
33. `def-global-dimension-of-an-abelian-category` — **definition** `[LN]`.
    Supremum of projective dimensions when enough projectives are supplied;
    the injective form is compared only under a theorem's hypotheses.
34. `thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees` —
    **theorem** `[LA]`.
35. `prop-global-dimension-zero-characterises-semisimple-module-categories` —
    **proposition** `[LA]`, citing the splitting/all-modules-projective
    equivalences that the required but currently empty
    `chain-conditions-and-semisimple-modules` page must author first.
36. `prop-hereditary-rings-have-global-dimension-at-most-one` — **proposition**
    `[LA]`. The left form assumes every submodule of a projective left module
    is projective and concludes left global dimension at most one; the right
    form states the corresponding right-module hypothesis. No untyped use of
    “hereditary” remains.
37. `thm-the-integers-have-global-dimension-one` — **theorem** `[LA]`. Every
    subgroup of a free abelian group is free, while
    $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/n,\mathbb Z)\ne0$.

### `fs-` items (A page)

- `fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m` — **false
  statement** `[LN]`; the variance/order is reversed.
- `fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects` —
  **false statement** `[LN]`; diagonal pullback and codiagonal pushout are both
  essential.
- `fs-equivalence-classes-of-extensions-automatically-form-a-set` — **false
  statement** `[LN]`; item 17 names the size discharge.
- `fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category` —
  **false statement** `[LN]`.
- `fs-projective-dimension-is-the-length-of-any-projective-resolution` —
  **false statement** `[LN]`; it is the least possible length.
- `fs-left-and-right-global-dimension-are-equal-by-definition` — **false
  statement** `[LN]`.

### B page — `yoneda-extensions-and-homological-dimension-examples`

`ex-the-split-extension-as-the-zero-baer-class` `[AA]` ·
`ex-baer-sum-of-two-extensions-of-cyclic-groups` `[AA]` ·
`ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes` `[AA]` ·
`ex-splicing-two-short-exact-sequences` `[AA]` ·
`ex-a-noncommutative-yoneda-product` `[LL]` ·
`ex-projective-dimension-of-a-cyclic-abelian-group` `[AA]` ·
`ex-global-dimension-of-a-field-and-of-the-integers` `[AA]` ·
`cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms` `[LL]`.

### Sources and exact locators

- **Weibel §3.4 “Ext and Extensions” (printed pp. 76–79) and §4.1 “Dimensions”
  (printed pp. 91–94).** Primary textbook source for Baer/Yoneda Ext and dimension.
- **Rotman §§7.2 “Ext”, 7.2.1 “Baer Sum”, and 8.1 “Dimensions of Rings”
  (pp. 415–437, 453–466).** Independent textbook source.
- **Hilton–Stammbach, *A Course in Homological Algebra*, Ch. III, §§1–5
  (extensions, Baer sum, derived functors; exact headings in §24).** Third
  textbook control over the accessible range.
- **The Stacks Project, *Homological Algebra*, §6 “Extensions” and *Derived
  Categories* §27 “Ext groups”.** Independent accessible source for extension
  classes, size-aware Ext, and composition.

### Proof strategy and traps

The Baer group law is a construction on representatives and therefore needs
item 9 before item 10. The comparison with derived Ext must show surjectivity,
injectivity, additivity, and both-variable naturality. For higher extensions,
equivalence is the relation *generated* by maps of extensions; demanding a
single isomorphism is too strong. No theorem about commutative-algebra depth or
regular sequences is inferred from global dimension.

**Forward references: NONE.**

---

## HA-10. Tor, Flatness, Balance, and Global Dimension

**page id** `tor-flatness-and-global-dimension`  
**`requires`** `ext-and-balanced-resolutions`,
`yoneda-extensions-and-homological-dimension`,
`tensor-products-of-modules`, `chain-conditions-and-semisimple-modules`

The abstract-algebra track owns tensor products and flat modules. This page
derives tensor, proves that resolving the right module or the left module gives
the same Tor bifunctor, and then makes precise the slogan that Tor detects
torsion and flatness. Noncommutative handedness is printed in every definition.
Under R-1 it cites MOD-3's `def-flat-and-faithfully-flat-modules-and-ring-maps`
(scaffolded 2026-08-15 in place of the promised `def-flat-module`; it defines
flat and faithfully flat modules and ring maps in one item) and MOD-3's
`thm-projective-modules-are-flat`; it does not mint or re-prove either
module-level fact.

### A-page items, in dependency order

**Tensor complexes and the two Tor constructions**

1. `def-tensor-product-total-complex-of-chain-complexes` — **definition**
   `[LN]`. For a right-$R$ complex $P$ and left-$R$ complex $Q$,
   $(P\otimes_RQ)_n=\bigoplus_{p+q=n}P_p\otimes_RQ_q$ and
   $d(x\otimes y)=d_Px\otimes y+(-1)^p x\otimes d_Qy$.
2. `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero` —
   **lemma** `[LA]`. It checks balance with representatives and the Koszul sign;
   `justified_by` for item 1.
3. `def-tor-by-resolving-the-left-module` — **definition** `[LN]`. For right
   $N$ and left $M$,
   $\operatorname{Tor}^{R,P}_n(N,M)=H_n(N\otimes_RP(M))$.
4. `def-tor-by-resolving-the-right-module` — **definition** `[LN]`.
   $H_n(Q(N)\otimes_RM)$ for a supplied projective resolution by right modules.
5. `prop-tor-zero-is-the-tensor-product-in-either-construction` —
   **proposition** `[LA]`, naturally in both variables, by tensor right
   exactness.
6. `prop-each-tor-construction-is-covariant-in-both-variables` —
   **proposition** `[LA]`.
7. `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective` —
   **proposition** `[LA]`.

**Balance before spectral sequences**

8. `def-tensor-double-complex-of-two-projective-resolutions` — **definition**
   `[LN]`. $K_{p,q}=Q_p(N)\otimes_RP_q(M)$ in the first quadrant.
9. `rem-projective-modules-are-flat-is-supplied-by-mod-three` — **remark**
   `[LN]`, citing MOD-3 `def-flat-and-faithfully-flat-modules-and-ring-maps`
   and its `thm-projective-modules-are-flat`; this page uses the fact and does
   not re-prove it.
10. `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact` —
    **lemma** `[LA]`, because every $Q_p(N)$ is flat as a right module.
11. `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact` —
    **lemma** `[LA]`, because every $P_q(M)$ is flat as a left module.
12. `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` —
    **theorem** `[LA]`. Apply the finite-diagonal acyclic-assembly lemmas from
    `HA-8` to the two edge augmentations. LANDMARK.
13. `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions` —
    **proposition** `[LA]`.
14. `def-balanced-tor-bifunctor` — **definition** `[LN]`.
    $\operatorname{Tor}^R_n(N,M)$ is licensed only after items 12–13.

**Exact sequences, flatness, and torsion**

15. `thm-long-exact-tor-sequence-in-the-left-module-variable` — **theorem**
    `[LA]`.
16. `thm-long-exact-tor-sequence-in-the-right-module-variable` — **theorem**
    `[LA]`, obtained via balance; both sequences display handedness.
17. `prop-tor-dimension-shifting` — **proposition** `[LA]`, in either variable.
18. `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` —
    **theorem** `[LA]`. Equivalent also to vanishing of all positive Tor.
19. `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` —
    **theorem** `[LA]`.
20. `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes` —
    **corollary** `[LA]`, stated for a fixed coefficient module and the exact
    segment, not as a global flatness assertion.
21. `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion` — **theorem**
    `[LA]`. $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/n,M)\cong
    M[n]=\{m:nm=0\}$ naturally.
22. `thm-tor-of-two-cyclic-abelian-groups` — **theorem** `[LA]`.
    $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/m,\mathbb Z/n)
    \cong\mathbb Z/\gcd(m,n)$ and higher Tor vanishes.
23. `thm-higher-tor-over-the-integers-vanishes` — **theorem** `[LA]`, because
    every abelian group has projective dimension at most one.
24. `prop-torsion-free-abelian-groups-are-flat` — **proposition** `[LA]`, using
    the PID theorem supplied by abstract algebra; the converse also holds over
    $\mathbb Z$.
25. `thm-over-a-pid-flat-is-equivalent-to-torsion-free` — **theorem** `[LA]`.

**Symmetry and dimensions**

26. `thm-tor-symmetry-over-a-commutative-ring` — **theorem** `[LA]`.
    $\operatorname{Tor}^R_n(M,N)\cong\operatorname{Tor}^R_n(N,M)$ naturally,
    induced from the tensor symmetry with the graded sign; it is not stated for
    arbitrary noncommutative rings.
27. `def-flat-dimension-of-a-module` — **definition** `[LN]`. Least length of
    a flat resolution, or $\infty$.
28. `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` — **theorem** `[LA]`.
    Vanishing of $\operatorname{Tor}_{n+1}(-,M)$ is equivalent to vanishing in
    all degrees $>n$.
29. `def-left-and-right-weak-global-dimension` — **definition** `[LN]`.
    Suprema of flat dimensions of left/right modules.
30. `prop-weak-global-dimension-is-at-most-corresponding-global-dimension` —
    **proposition** `[LA]`, because projective implies flat.
31. `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` —
    **theorem** `[LA]`. The left and right weak global dimensions agree and
    equal the supremum of the integers $n$ for which
    $\operatorname{Tor}^R_n(N,M)\ne0$ for some right $R$-module $N$ and left
    $R$-module $M$. No corresponding equality with global dimension is
    asserted.
32. `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` —
    **proposition** `[LA]`, citing the stable semisimple-module equivalences
    required from `chain-conditions-and-semisimple-modules`.
33. `prop-the-integers-have-weak-and-global-dimension-one` — **proposition**
    `[LA]`, combining `HA-9` and items 23–25.

### `fs-` items (A page)

- `fs-tor-takes-two-left-modules-over-an-arbitrary-ring` — **false statement**
  `[LN]`; one factor must be right-handed unless extra bimodule structure is
  supplied.
- `fs-the-two-tor-constructions-are-equal-by-definition` — **false statement**
  `[LN]`; balance is Theorem 12.
- `fs-flat-modules-have-projective-dimension-zero` — **false statement** `[LN]`;
  flat need not imply projective.
- `fs-tor-one-vanishes-only-when-one-module-is-projective` — **false statement**
  `[LN]`; flatness is the correct condition.
- `fs-tor-is-symmetric-over-every-noncommutative-ring` — **false statement**
  `[LN]`; handedness makes the expression ill-typed.
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m` —
  **false statement** `[LN]`; in general it is the kernel of
  $I\otimes_RM\to M$, and the cyclic-$\mathbb Z$ formula needs its hypotheses.

### B page — `tor-flatness-and-global-dimension-examples`

`ex-tor-of-two-cyclic-groups-from-a-two-term-resolution` `[AA]` ·
`ex-tor-detects-n-torsion` `[AA]` ·
`ex-a-flat-nonprojective-module` `[LL]` ·
`ex-localization-is-flat-and-has-vanishing-positive-tor` `[LL]` ·
`ex-the-tensor-double-complex-in-low-degrees` `[AA]` ·
`ex-tor-symmetry-over-a-commutative-ring` `[AA]` ·
`cex-a-noncommutative-handedness-error-in-tor` `[AN]` ·
`ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers` `[AA]`.

### Sources and exact locators

- **Weibel §§2.7 “Balancing Tor and Ext”, 3.1 “Tor for Abelian Groups”, 3.2
  “Tor and Flatness”, and 4.1 “Dimensions” (printed pp. 58–72, 91–94).** Primary
  textbook source.
- **Rotman §§7.1 “Tor”, 7.1.1 “Domains”, 7.1.2 “Localization”, and 8.1
  “Dimensions of Rings” (pp. 404–415, 453–466).** Independent textbook source.
- **Sharifi §3.5 “Tor and Ext” (pp. 65–70).** Open independent control.
- **The Stacks Project, *Homological Algebra*, §§18 “Double complexes and
  associated total complexes” and 25 “Double complexes” (current PDF
  pp. 37–40, 65–68).** Independent control for totalisation and the two-edge
  balance argument; the Tor/flatness statements themselves use the three exact
  textbook/lecture-note locators above.

### Proof strategy and traps

Balance spends projective $\Rightarrow$ flat in both directions of the tensor
double complex. The total complex has finite diagonals; no choice between sum
and product totalisation is hidden. The flatness criterion uses the long exact
sequence and dimension shifting, and its universal quantifier ranges over the
opposite-handed modules. Never write $M\otimes_RN$ for two left modules over a
noncommutative $R$.

**Forward references: NONE.**

---

## HA-11. Universal Coefficient and Künneth Theorems

**page id** `universal-coefficients-and-kunneth-theorems`  
**`requires`** `tor-flatness-and-global-dimension`,
`ext-and-balanced-resolutions`, `long-exact-sequences-in-homology`

This page is deliberately classical and precise. Over $\mathbb Z$ or a PID,
free chain complexes admit universal-coefficient and Künneth short exact
sequences. Their injections and surjections are natural; their splittings
usually are not. The distinction between “there exists a splitting” and “there
is a canonical decomposition” is the page's main boundary obligation.

### A-page items, in dependency order

1. `def-cochain-complex-hom-from-a-chain-complex` — **definition** `[LN]`.
   For a chain complex $C$ of left $R$-modules and an $R$-module $G$,
   $\operatorname{Hom}_R(C,G)^n=\operatorname{Hom}_R(C_n,G)$ with differential
   precomposition by $d_{n+1}$ and the declared sign.
2. `lem-the-hom-cochain-differential-squares-to-zero` — **lemma** `[LA]`.
3. `def-chain-complex-with-coefficients-by-tensoring` — **definition** `[LN]`.
   $C\otimes_RG$ uses the tensor-complex convention from `HA-10`; handedness is
   stated when $R$ is noncommutative.
4. `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid` —
   **lemma** `[LA]`. The sequences
   $0\to Z_nC\to C_n\to B_{n-1}C\to0$ and
   $0\to B_nC\to Z_nC\to H_nC\to0$ are isolated for repeated use.
5. `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` —
   **lemma** `[LA]`, citing the abstract-algebra theorem that submodules of free
   modules over a PID are free with its exact choice boundary.
6. `lem-the-universal-coefficient-edge-map-for-homology-is-well-defined` —
   **lemma** `[LA]`. $H_n(C)\otimes_RG\to H_n(C\otimes_RG)$ sends a homology
   class tensored with a coefficient to the corresponding tensor cycle; changes
   of cycle representative die as boundaries.
7. `lem-the-universal-coefficient-tor-obstruction-map-for-homology` —
   **lemma** `[LA]`. Constructs the natural surjection to
   $\operatorname{Tor}_1^R(H_{n-1}C,G)$ from the two short exact sequences.
8. `thm-universal-coefficient-theorem-for-homology-over-a-pid` — **theorem**
   `[LA]`. If $C$ is a chain complex of free right $R$-modules over a PID,
   \[
   0\to H_n(C)\otimes_RG\to H_n(C\otimes_RG)\to
   \operatorname{Tor}_1^R(H_{n-1}(C),G)\to0
   \]
   is natural in $C$ and $G$. LANDMARK.
9. `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally` —
   **theorem** `[LA]`. A splitting exists under the source's PID/freeness
   hypotheses; no choice-free or natural splitting is claimed.
10. `cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally` —
    **counterexample** `[LL]`, source-backed and A-page because item 9's boundary
    is load-bearing.

**Cohomology form**

11. `def-evaluation-map-from-cohomology-to-hom-of-homology` — **definition**
    `[LN]`. A cocycle $\varphi:C_n\to G$ vanishing on boundaries evaluates on
    cycles and descends to $H_n(C)$; both descents are checked.
12. `lem-the-cohomology-universal-coefficient-extension-map` — **lemma** `[LA]`.
    Constructs $\operatorname{Ext}^1_R(H_{n-1}C,G)\to
    H^n\operatorname{Hom}_R(C,G)$ naturally.
13. `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` — **theorem**
    `[LA]`. For a free chain complex,
    \[
    0\to\operatorname{Ext}^1_R(H_{n-1}C,G)\to
    H^n\operatorname{Hom}_R(C,G)\to
    \operatorname{Hom}_R(H_nC,G)\to0.
    \]
    LANDMARK.
14. `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` —
    **theorem** `[LA]` for the same free complex over a PID as item 13; the
    splitting is neither part of item 13 nor natural in $C$.
15. `cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology` —
    **corollary** `[LA]`. Divisible is injective over $\mathbb Z$, so the Ext
    term vanishes.
16. `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes` —
    **corollary** `[LA]`; finite dimensionality is included where identification
    with the algebraic dual of homology is used.

**Künneth**

17. `def-homology-cross-product-for-tensor-complexes` — **definition** `[LN]`.
    $[x]\otimes[y]\mapsto[x\otimes y]$; the graded differential shows cycles
    map to cycles and changes of representatives to boundaries.
18. `lem-the-kunneth-cross-product-map-is-well-defined-and-natural` — **lemma**
    `[LA]`.
19. `lem-the-kunneth-tor-map` — **lemma** `[LA]`. Constructs the natural
    quotient map from total homology to the direct sum of Tor terms, with the
    $p+q=n-1$ indexing printed.
20. `thm-kunneth-theorem-for-free-complexes-over-a-pid` — **theorem** `[LA]`.
    For complexes $C,D$ of free $R$-modules satisfying the stated boundedness
    needed for direct-sum totalisation,
    \[
    0\to\bigoplus_{p+q=n}H_p(C)\otimes_RH_q(D)
    \to H_n(C\otimes_RD)
    \to\bigoplus_{p+q=n-1}\operatorname{Tor}_1^R(H_pC,H_qD)\to0.
    \]
    LANDMARK.
21. `thm-the-kunneth-sequence-splits-nonnaturally` — **theorem** `[LA]`.
22. `cor-kunneth-over-a-field` — **corollary** `[LA]`. The Tor term vanishes,
    yielding a natural direct-sum isomorphism.
23. `cor-kunneth-when-one-homology-family-is-flat` — **corollary** `[LA]`.
    States exactly which Tor terms vanish; freeness of chain terms remains.
24. `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses` —
    **proposition** `[LA]`, when all ranks and sums are finite.
25. `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map` —
    **proposition** `[LA]`; the sign $(-1)^{pq}$ is derived from the tensor
    complex twist.

### `fs-` items (A page)

- `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition` —
  **false statement** `[LN]`; only the short exact sequence is natural.
- `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term` —
  **false statement** `[LN]`; the two are reversed in this setting.
- `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism` — **false
  statement** `[LN]`; the Tor correction need not vanish.
- `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement` —
  **false statement** `[LN]`; a derived tensor product or a spectral sequence
  is then needed.
- `fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting` — **false
  statement** `[LN]`.

### B page — `universal-coefficients-and-kunneth-theorems-examples`

`ex-uct-homology-with-z-mod-m-coefficients` `[AA]` ·
`ex-uct-cohomology-of-a-two-term-free-complex` `[AA]` ·
`ex-a-nonzero-tor-correction-in-universal-coefficients` `[AA]` ·
`ex-kunneth-for-two-cyclic-two-term-complexes` `[AA]` ·
`ex-kunneth-over-a-field` `[AA]` ·
`cex-a-nonnatural-choice-of-uct-splitting` `[LL]` ·
`ex-euler-characteristic-of-a-tensor-product-complex` `[AA]`.

### Sources and exact locators

- **Weibel §3.6 “Universal Coefficient Theorems” (printed pp. 87–90),
  especially the Künneth Formula 3.6.1, Universal Coefficient Theorem for
  Homology 3.6.2, and the cohomological theorem 3.6.5.** Primary textbook
  source.
- **Rotman §7.4 “Universal Coefficients” (pp. 438–452) and §10.10 “Künneth
  Theorems” (pp. 678–688).** Independent textbook source.
- **Hilton–Stammbach, Ch. V §§1 “Double Complexes”, 2 “The Künneth Theorem”,
  3 “The Dual Künneth Theorem”, and 4 “Applications of the Künneth Formulas”
  (dispositions in §24).** Third textbook control.
- **Sharifi §§2.8 “Total complexes” and 3.5 “Tor and Ext” (pp. 47–50,
  65–70).** Open control for totalisation and derived correction terms.

### Proof strategy and traps

Both UCTs are derived from the two cycle-boundary short exact sequences, not
from a blanket assertion that tensor or Hom commutes with homology. Every map
is built and its representative independence checked before exactness. The
splitting proofs choose complements/lifts and are therefore isolated from the
natural short exact sequences. The Künneth theorem must state boundedness or a
local finiteness condition ensuring the chosen direct-sum totalisation.

**Forward references: NONE.**

---

## HA-12. Group Cohomology as a Derived Functor

**page id** `group-cohomology-as-a-derived-functor`  
**`requires`** `ext-and-balanced-resolutions`,
`tor-flatness-and-global-dimension`, and
`the-group-algebra-and-representations`

This page supplies exactly the seam promised to `group-theory`:
$H^n(G,M)$ as the right derived functor of invariants, with a bar resolution
that computes it. It also records group homology as the Tor-dual construction
because the same resolution and handedness check make that addition cheap.
Interpretations of $H^1$ by crossed homomorphisms and of $H^2$ by group
extensions belong to `group-theory` and are not re-minted here.

RT-1 supplies `def-group-ring`,
`def-augmentation-map-and-augmentation-ideal-of-a-group-ring`, and
`thm-group-actions-and-group-ring-modules-correspond` for arbitrary groups and
commutative coefficient rings. HA-12 cites those ids; item 1 below fixes only
the integral/trivial-module convention.

### A-page items, in dependency order

**Invariants, coinvariants, and derived definitions**

1. `def-integral-group-ring-module-and-trivial-module-convention` —
   **definition** `[LN]`. A left $G$-module means a left
   $\mathbb Z[G]$-module; $\mathbb Z$ is the trivial module through the
   augmentation. The underlying group-ring definition is cited, not repeated.
2. `def-invariants-functor-of-a-group-module` — **definition** `[LN]`.
   $M^G=\{m:g m=m\ \forall g\}$ in modules, with the natural isomorphism
   $M^G\cong\operatorname{Hom}_{\mathbb Z[G]}(\mathbb Z,M)$ proved in item 3.
3. `thm-invariants-are-hom-from-the-trivial-group-ring-module` — **theorem**
   `[LA]`, natural in $M$.
4. `prop-the-invariants-functor-is-left-exact` — **proposition** `[LA]`, from
   left exactness of Hom.
5. `def-group-cohomology-as-a-derived-functor` — **definition** `[LN]`.
   $H^n(G,M):=R^n(-)^G(M)=
   \operatorname{Ext}^n_{\mathbb Z[G]}(\mathbb Z,M)$, relative to supplied
   injective or projective resolution data and the balance theorem. LANDMARK.
6. `def-coinvariants-functor-of-a-group-module` — **definition** `[LN]`.
   $M_G=M/\langle gm-m\rangle$, identified with
   $\mathbb Z\otimes_{\mathbb Z[G]}M$ using $\mathbb Z$ as a right trivial
   module.
7. `prop-the-coinvariants-functor-is-right-exact` — **proposition** `[LA]`.
8. `def-group-homology-as-a-derived-functor` — **definition** `[LN]`.
   $H_n(G,M):=\operatorname{Tor}^{\mathbb Z[G]}_n(\mathbb Z,M)$.
9. `prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants` —
   **proposition** `[LA]`.
10. `thm-long-exact-sequence-in-group-cohomology` — **theorem** `[LA]`, for a
    short exact sequence of $G$-modules.
11. `thm-long-exact-sequence-in-group-homology` — **theorem** `[LA]`.

**The bar resolution and concrete cochains**

12. `def-unnormalized-homogeneous-bar-resolution` — **definition** `[LN]`.
    $B_n(G)$ is the free $\mathbb Z[G]$-module on $(n+1)$-tuples
    $(g_0,\dots,g_n)$ with the diagonal action and alternating face
    differential.
13. `lem-the-bar-differential-is-group-equivariant-and-squares-to-zero` —
    **lemma** `[LA]`; adjacent face cancellations are written.
14. `def-bar-augmentation` — **definition** `[LN]`.
15. `lem-the-augmented-bar-complex-is-exact` — **lemma** `[LA]`. The insertion
    of the identity gives a contracting homotopy of underlying abelian groups;
    the proof does not falsely claim that contraction is $G$-equivariant.
16. `thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module` —
    **theorem** `[LA]`. LANDMARK.
17. `def-inhomogeneous-group-cochains` — **definition** `[LN]`.
    $C^n(G,M)=\{f:G^n\to M\}$ with the standard differential
    \[
    (df)(g_1,\ldots,g_{n+1})=g_1f(g_2,\ldots,g_{n+1})+
    \sum_{i=1}^{n}(-1)^if(\ldots,g_ig_{i+1},\ldots)+
    (-1)^{n+1}f(g_1,\ldots,g_n).
    \]
18. `lem-the-inhomogeneous-group-cochain-differential-squares-to-zero` —
    **lemma** `[LA]`.
19. `thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes` —
    **theorem** `[LA]`. Both mutually inverse formulas are printed and checked
    $G$-equivariant.
20. `thm-the-bar-cochain-complex-computes-derived-group-cohomology` —
    **theorem** `[LA]`, by applying Hom to item 16 and using item 19. LANDMARK.
21. `def-normalized-bar-resolution` — **definition** `[LN]`. Quotient out
    degenerate bars / use functions vanishing when an argument is identity.
22. `lem-degenerate-bar-chains-form-a-contractible-subcomplex` — **lemma**
    `[LA]`.
23. `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent` —
    **theorem** `[LA]`.
24. `cor-normalized-cochains-compute-group-cohomology` — **corollary** `[LA]`.

**Change of groups and dimension**

25. `def-restriction-induction-and-coinduction-for-group-modules` —
    **definition** `[LN]`. For $H\le G$, restriction and the tensor/Hom
    constructions are cited to the group/module tracks; left/right handedness
    is explicit.
26. `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` —
    **theorem** `[LA]`.
27. `lem-the-group-ring-is-free-over-a-subgroup-ring` — **lemma** `[LA]`.
    A set of coset representatives yields a basis; existence of representatives
    carries AC for an arbitrary family of cosets unless representatives are
    supplied.
28. `thm-shapiro-lemma-for-group-cohomology` — **theorem** `[LA]`.
    $H^n(G,\operatorname{Coind}_H^G M)\cong H^n(H,M)$ naturally.
29. `thm-shapiro-lemma-for-group-homology` — **theorem** `[LA]`.
    $H_n(G,\operatorname{Ind}_H^G M)\cong H_n(H,M)$.
30. `def-cohomological-dimension-of-a-group` — **definition** `[LN]`.
    $\operatorname{cd}_{\mathbb Z}G=
    \operatorname{pd}_{\mathbb Z[G]}\mathbb Z$.
31. `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` —
    **theorem** `[LA]`, via the Ext characterisation of projective dimension.
32. `def-restriction-and-corestriction-on-group-cohomology` — **definition**
    `[LN]`, for finite-index subgroups; representative independence is item 33.
33. `lem-corestriction-is-independent-of-the-coset-representatives` —
    **lemma** `[LA]`.
34. `thm-restriction-corestriction-composite-is-multiplication-by-the-index` —
    **theorem** `[LA]`, with the normality/trivial-action refinements stated
    only where sourced.
35. `prop-finite-groups-have-torsion-annihilation-in-positive-cohomology` —
    **proposition** `[LA]`. For finite $G$, multiplication by $|G|$ annihilates
    $H^n(G,M)$ for $n>0$, by items 32–34 and vanishing for the trivial subgroup.
36. `thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free` —
    **theorem** `[LA]`. If $G$ contained a nontrivial finite cyclic subgroup,
    restriction of a finite projective resolution would bound that subgroup's
    cohomological dimension, contradicting its periodic nonvanishing. The proof
    constructs the needed periodic cyclic resolution inline from the cited
    source; no examples-page item is a dependency.

### `fs-` items (A page)

- `fs-group-cohomology-is-the-derived-functor-of-coinvariants` — **false
  statement** `[LN]`; coinvariants derive to group homology.
- `fs-the-bar-contracting-homotopy-is-group-equivariant` — **false statement**
  `[LN]`; if it were, the trivial module would be projective for every group.
- `fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones` —
  **false statement** `[LN]`; that low-degree group-theoretic interpretation is
  owned by `group-theory`.
- `fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions` —
  **false statement** `[LN]`; same seam boundary.
- `fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction` —
  **false statement** `[LN]`; homology and cohomology use the appropriate
  adjoints.
### B page — `group-cohomology-as-a-derived-functor-examples`

`ex-group-cohomology-of-the-trivial-group` `[AA]` ·
`ex-degree-zero-invariants-and-coinvariants` `[AA]` ·
`ex-the-first-three-bar-differentials` `[AA]` ·
`ex-normalizing-an-inhomogeneous-cochain` `[AA]` ·
`ex-a-periodic-resolution-for-a-finite-cyclic-group` `[LL]` ·
`ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution` `[LL]` ·
`ex-shapiro-lemma-for-the-trivial-subgroup` `[AA]` ·
`cex-the-underlying-bar-contraction-is-not-equivariant` `[AN]` ·
`ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group` `[LL]`.

### Sources and exact locators

- **Weibel Ch. 6, §§6.1 “Definitions and First Properties”, 6.2 “Cyclic and
  Free Groups”, 6.3 “Shapiro's Lemma”, and 6.5 “The Bar Resolution”
  (printed pp. 160–173, 177–181).** Primary textbook source. Sections 6.4 and 6.6 are
  harvested but assigned to `group-theory` because they are the low-degree
  interpretations.
- **Rotman Ch. 9, §§9.2 “Group Cohomology”, 9.3 “Bar Resolutions”, 9.4 “Group
  Homology”, and 9.5 “Change of Groups” (pp. 519–571).** Independent textbook
  treatment.
- **Sharifi §3.6 “Group homology and cohomology” (pp. 71–73).** Open
  independent control for the derived definitions and bar complex.
- **Hilton–Stammbach Ch. VI, §§1–3, 7, 12–16 (group ring, definition,
  $H^0$, cyclic groups, reduction, resolutions, universal coefficients,
  groups and subgroups; exact headings in §24).** Third textbook control.

### Proof strategy and traps

The free bar resolution proof has two different assertions: its terms are free
$\mathbb Z[G]$-modules, and its augmented complex is exact. The contraction
proves exactness only after forgetting the $G$-action, which is enough; claiming
an equivariant contraction would be false. The homogeneous-to-inhomogeneous
dictionary needs both formulas and must commute with differentials. No low-degree
interpretation is smuggled into the definitions; §27 hands those results to the
group track.

**Forward references: NONE.**

---

## HA-13. Triangulated Categories and the Cone Triangulation

**page id** `triangulated-categories`  
**`requires`** `mapping-cones-cylinders-and-chain-triangles`,
`long-exact-sequences-in-homology`

Triangulated categories are included because derived categories cannot be
stated honestly without them. The page takes the conservative route: define
triangles, write Verdier's four axioms with the chosen rotation sign, prove the
standard exact-Hom consequences, and then verify that $K(\mathcal A)$ with cone
triangles is triangulated. It does not pretend that cones are functorial, and
it does not introduce dg, model, or stable $\infty$-categories.

### A-page items, in dependency order

**Triangles and axioms**

1. `def-category-with-translation` — **definition** `[LN]`. An additive
   category $\mathcal T$ with a specified additive autoequivalence $[1]$ and a
   specified quasi-inverse $[-1]$.
2. `def-triangle-in-a-category-with-translation` — **definition** `[LN]`. A
   diagram $X\xrightarrow fY\xrightarrow gZ\xrightarrow hX[1]$.
3. `def-morphism-and-isomorphism-of-triangles` — **definition** `[LN]`. Three
   arrows making all three squares commute, including the translated first
   arrow.
4. `def-rotation-of-a-triangle` — **definition** `[LN]`. The left rotation is
   $Y\xrightarrow gZ\xrightarrow hX[1]\xrightarrow{-f[1]}Y[1]$. The minus
   sign fixes the library convention.
5. `def-distinguished-triangle` — **definition** `[LN]`. A member of a
   specified class stable as demanded below; “exact triangle” is reserved as a
   synonym only after the axioms are in force.
6. `def-triangulated-category-axiom-tr-one` — **definition** `[LN]`.
   Distinguished triangles are closed under isomorphism, every map extends to
   one, and $X\xrightarrow{1}X\to0\to X[1]$ is distinguished.
7. `def-triangulated-category-axiom-tr-two` — **definition** `[LN]`.
   A triangle is distinguished iff its rotation from item 4 is.
8. `def-triangulated-category-axiom-tr-three` — **definition** `[LN]`.
   A commutative square on the first arrows can be completed to a morphism of
   triangles; uniqueness is **not** asserted.
9. `def-triangulated-category-axiom-tr-four-octahedral` — **definition** `[LN]`.
   For composable $X\xrightarrow fY\xrightarrow gZ$, chosen triangles for
   $f,g,gf$ fit into the displayed octahedron, with every map and sign typed.
10. `def-triangulated-category` — **definition** `[LN]`. A category with
    translation and distinguished triangles satisfying items 6–9. LANDMARK.
11. `rem-triangulated-sign-convention` — **remark** `[LN]`. Stacks and Weibel
    are translated to item 4; sources using $+f[1]$ compensate elsewhere.

**Formal consequences**

12. `prop-zero-and-split-triangles-are-distinguished` — **proposition** `[LA]`.
    In particular
    $X\to X\oplus Y\to Y\to X[1]$ with the canonical maps.
13. `prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations` —
    **proposition** `[LA]`.
14. `def-homological-functor-on-a-triangulated-category` — **definition**
    `[LN]`. An additive covariant functor $H:\mathcal T\to\mathcal A$ carrying
    every distinguished triangle to an exact sequence
    $H(X)\to H(Y)\to H(Z)$; shifts and rotations generate its long exact
    sequence.
15. `def-cohomological-functor-on-a-triangulated-category` — **definition**
    `[LN]`. An additive contravariant functor
    $H:\mathcal T^{\mathrm{op}}\to\mathcal A$ with the oppositely oriented
    exact sequence and its shifted long exact continuation.
16. `thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological` —
    **theorem** `[LA]`. For every $W$, $\operatorname{Hom}(W,-)$ is
    homological and $\operatorname{Hom}(-,W)$ is cohomological. LANDMARK.
17. `thm-long-exact-hom-sequences-of-a-distinguished-triangle` — **theorem**
    `[LA]`. Both variances, all translated terms, and all signs are displayed.
18. `cor-triangulated-five-lemma` — **corollary** `[LA]`.
19. `prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third` —
    **proposition** `[LA]`, by items 17–18.
20. `prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes` —
    **proposition** `[LA]`, a Yoneda check used in split-triangle criteria.
21. `prop-a-distinguished-triangle-with-zero-first-map-is-split` —
    **proposition** `[LA]`, and its rotations.
22. `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes` —
    **proposition** `[LA]`, with the equivalent section/retraction conditions.
23. `prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism` —
    **proposition** `[LA]`. TR3 gives existence; no canonical isomorphism or
    cone functor is claimed.
24. `prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf` —
    **proposition** `[LA]`, the abstract counterpart of `HA-3`'s three-cone
    calculation.

**Exact functors and subcategories**

25. `def-exact-functor-between-triangulated-categories` — **definition** `[LN]`.
    An additive functor with a specified natural isomorphism
    $F(X[1])\cong F(X)[1]$ carrying distinguished triangles to distinguished
    triangles, with the last square's compatibility stated.
26. `prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility` —
    **proposition** `[LA]`.
27. `def-triangulated-subcategory` — **definition** `[LN]`. Full additive,
    closed under shifts, and satisfying two-out-of-three on distinguished
    triangles.
28. `def-thick-subcategory` — **definition** `[LN]`. A triangulated subcategory
    also closed under direct summands.
29. `prop-the-total-kernel-of-a-cohomological-functor-is-thick` —
    **proposition** `[LA]`. The total kernel consists of the objects $X$ such
    that $H(X[n])=0$ for every $n\in\mathbb Z$. Exactness gives
    two-out-of-three, and functoriality sends a retract of a zero object to a
    retract of zero, so the total kernel is closed under direct summands.
30. `prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category` —
    **proposition** `[LA]`, using the cone LES and finite biproducts.

**The cone triangulation on the homotopy category**

31. `def-standard-cone-triangle-in-the-homotopy-category` — **definition**
    `[LN]`. The image of `HA-3`'s cone triangle, translated to the $[1]$
    convention used here.
32. `def-distinguished-cone-triangle-in-the-homotopy-category` — **definition**
    `[LN]`. Any triangle isomorphic to a standard cone triangle.
33. `lem-cone-triangles-satisfy-tr-one` — **lemma** `[LA]`. Extending a map
    uses its cone; the identity cone is contractible and hence zero in $K$.
34. `lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign` —
    **lemma** `[LA]`. An explicit chain isomorphism identifies the rotated cone.
35. `lem-cone-triangles-satisfy-tr-three` — **lemma** `[LA]`. Replace an
    up-to-homotopy square by the standard triangular matrix map on cones.
36. `lem-cone-triangles-satisfy-the-octahedral-axiom` — **lemma** `[LL]`. The
    proof follows the source's explicit three-cone matrices, and cites `HA-3`
    item 22 for the chain-level calculation.
37. `thm-the-homotopy-category-of-an-abelian-category-is-triangulated` —
    **theorem** `[LA]`. Items 31–36. LANDMARK.
38. `thm-homology-is-a-homological-functor-on-the-homotopy-category` —
    **theorem** `[LA]`. The long exact sequence is `HA-4`'s cone sequence, with
    agreement of the connector and sign.
39. `prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories` —
    **proposition** `[LA]`. Degreewise application preserves cone direct sums
    and the declared shift, even when the original functor is not exact.
40. `prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language` —
    **proposition** `[LA]`, reconciling `HA-3` with item 30.

### `fs-` items (A page)

- `fs-the-third-map-in-a-morphism-of-triangles-is-unique` — **false statement**
  `[LN]`; TR3 asserts existence only.
- `fs-cones-form-a-functor-in-every-triangulated-category` — **false statement**
  `[LN]`; an enhancement is needed for functorial choices.
- `fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish` —
  **false statement** `[LN]`; zero composites are necessary and far from
  sufficient.
- `fs-the-octahedral-axiom-is-the-associativity-of-composition` — **false
  statement** `[LN]`; it compares cone triangles of a composite.
- `fs-every-triangulated-subcategory-is-thick` — **false statement** `[LN]`;
  closure under retracts is extra.
- `fs-the-rotation-of-a-distinguished-triangle-has-no-sign` — **false statement**
  `[LN]` under the library convention.

### B page — `triangulated-categories-examples`

`ex-the-split-distinguished-triangle` `[AA]` ·
`ex-the-cone-triangle-of-multiplication-by-m` `[AA]` ·
`ex-the-long-exact-hom-sequence-of-a-cone-triangle` `[AA]` ·
`ex-an-octahedron-for-two-composable-maps-of-stalk-complexes` `[AA]` ·
`ex-the-thick-subcategory-of-acyclic-complexes` `[AA]` ·
`cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` `[LL]` ·
`cex-nonuniqueness-of-a-tr-three-completion` `[LL]`.

### Sources and exact locators

- **Weibel §§10.1 “The Category $K(\mathcal A)$” and 10.2 “Triangulated
  Categories” (printed pp. 369–378).** Primary textbook source for definitions,
  representable exactness, and cone triangulation.
- **The Stacks Project, *Derived Categories*, §§2 “Triangulated categories”,
  3 “The definition of a triangulated category”, 4 “Elementary results on
  triangulated categories”, and §§9–10 on cones (current PDF pp. 2–13,
  27–38).** Independent full treatment, including the sign conventions.
- **Yekutieli, *A Course on Derived Categories* (2012 notes), §§8–9
  “Triangulated Categories” and “The Homotopy Category is Triangulated”
  (pp. 35–44; exact subheadings in §24).** Independent lecture-note control.
- **Gelfand–Manin, *Methods of Homological Algebra*, Ch. IV §§1–2, used only
  over the accessible publisher sample/contents range recorded in §24.** It is
  supplemental, not one of the pair's two required full treatments.

### Proof strategy and traps

The cone triangulation is not established by saying it is standard. TR1–TR4
are four separate lemmas, and the octahedral proof uses the explicit three-cone
calculation. The rotation sign must match §3.1. The word “exact” for a functor
of triangulated categories is different from exactness between abelian
categories; item 25 defines it afresh and the prose disambiguates it.

**Forward references: NONE.**

---

## HA-14. Derived Categories and Total Derived Functors

**page id** `derived-categories`  
**`requires`** `triangulated-categories`, `derived-functors`,
`yoneda-extensions-and-homological-dimension`,
`tor-flatness-and-global-dimension`

The derived category is not “the homotopy category with quasi-isomorphisms
treated as equal.” It is a localization, so this page builds the necessary
roof calculus and proves representative independence before defining
$D(\mathcal A)$. It then relates bounded derived categories to complexes of
projectives/injectives, recovers Ext as morphisms, and constructs total derived
functors in the bounded settings where the replacement theorem is available.

### A-page items, in dependency order

**Localization and roofs**

1. `def-multiplicative-system-in-a-category` — **definition** `[LN]`. Contains
   identities, is closed under composition, and satisfies the explicitly
   stated left/right Ore and cancellation conditions needed by the chosen roof
   calculus.
2. `def-localization-of-a-category-at-a-class-of-morphisms` — **definition**
   `[LN]`. A functor $Q:\mathcal C\to S^{-1}\mathcal C$ sending $S$ to
   isomorphisms and universal for that property.
3. `def-left-roof-representing-a-localized-morphism` — **definition** `[LN]`.
   $X\xleftarrow{s}X'\xrightarrow fY$ with $s\in S$; orientation is fixed.
4. `def-common-refinement-equivalence-of-roofs` — **definition** `[LN]`.
   The commuting refinement diagram and denominators are part of the
   definition.
5. `lem-roof-equivalence-is-an-equivalence-relation` — **lemma** `[LA]`, using
   Ore/cancellation rather than an assumed common denominator.
6. `lem-composition-of-roofs-is-well-defined` — **lemma** `[LA]`. An Ore square
   builds the composite, and different Ore choices/refinements yield equivalent
   roofs. This is the principal representative-independence obligation.
7. `thm-the-calculus-of-fractions-constructs-the-localization` — **theorem**
   `[LA]`. Roof classes with item 6's composition satisfy the universal
   property of item 2. LANDMARK.

**Quasi-isomorphisms and the Verdier quotient**

8. `prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition` —
   **proposition** `[LA]`.
9. `thm-two-out-of-three-for-quasi-isomorphisms` — **theorem** `[LA]`.
10. `prop-chain-homotopy-equivalences-are-quasi-isomorphisms` — **proposition**
    `[LA]`, citing `HA-2`.
11. `prop-a-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic` —
    **proposition** `[LA]`, citing the agreed cone criterion.
12. `lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category` —
    **lemma** `[LL]`. Mapping cylinders/cones supply the fraction axioms in the
    source's stated boundedness/size setting.
13. `def-derived-category-of-an-abelian-category` — **definition** `[LN]`.
    $D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}]$;
    $D^+,D^-,D^b$ localize the corresponding bounded homotopy categories.
    `justified_by` names items 8–12. LANDMARK.
14. `prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms` —
    **proposition** `[LA]`.
15. `prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic` —
    **proposition** `[LA]`.
16. `thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes` —
    **theorem** `[LA]`.
    $D(\mathcal A)\simeq K(\mathcal A)/K_{\mathrm{ac}}(\mathcal A)$ in the
    licensed size setting.
17. `thm-the-derived-category-inherits-a-triangulated-structure` — **theorem**
    `[LA]`; the localization functor is exact and distinguished triangles are
    isomorphic to images of cone triangles. LANDMARK.
18. `prop-cohomology-factors-through-the-derived-category` — **proposition**
    `[LA]` and is cohomological/homological with the chosen grading.

**Resolution models and Ext as morphisms**

19. `def-homotopically-projective-bounded-above-complex` — **definition**
    `[LN]` in the narrow form needed: Hom into every acyclic complex is
    acyclic/zero in $K$.
20. `def-homotopically-injective-bounded-below-complex` — **definition** `[LN]`,
    dual.
21. `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective` —
    **theorem** `[LA]`. The descending homotopy construction uses boundedness.
22. `thm-a-bounded-below-complex-of-injectives-is-homotopically-injective` —
    **theorem** `[LA]`.
23. `prop-morphisms-from-a-homotopically-projective-complex-need-no-roof` —
    **proposition** `[LA]`.
    $\operatorname{Hom}_K(P,X)\cong\operatorname{Hom}_D(P,X)$.
24. `prop-morphisms-into-a-homotopically-injective-complex-need-no-roof` —
    **proposition** `[LA]`.
25. `thm-projective-complexes-model-the-bounded-above-derived-category` —
    **theorem** `[LA]`. With enough projectives,
    $K^-(\operatorname{Proj}\mathcal A)\simeq D^-(\mathcal A)$, relative to
    supplied replacements.
26. `thm-injective-complexes-model-the-bounded-below-derived-category` —
    **theorem** `[LA]`. With enough injectives,
    $K^+(\operatorname{Inj}\mathcal A)\simeq D^+(\mathcal A)$.
27. `thm-ext-is-hom-in-the-derived-category` — **theorem** `[LA]`. For objects
    $M,N$ viewed as degree-zero complexes,
    $\operatorname{Ext}^n_{\mathcal A}(M,N)\cong
    \operatorname{Hom}_{D(\mathcal A)}(M,N[n])$ naturally for $n\ge0$ under
    the resolution hypotheses. LANDMARK.
28. `prop-yoneda-product-is-composition-in-the-derived-category` —
    **proposition** `[LA]`, reconciling `HA-9`.

**Truncation and the canonical t-structure**

29. `def-brutal-truncation-of-a-complex` — **definition** `[LN]`. Terms beyond
    the cut are replaced by zero; no quasi-isomorphism property is asserted.
30. `def-canonical-truncation-of-a-complex` — **definition** `[LN]`. At the cut
    use the kernel/cokernel so that cohomology is preserved on the declared
    side.
31. `lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology` —
    **lemma** `[LA]`, the definition's well-definedness obligation.
32. `thm-canonical-truncations-fit-a-distinguished-triangle` — **theorem**
    `[LA]`.
33. `def-canonical-t-structure-on-a-derived-category` — **definition** `[LN]`.
    $D^{\le0}$ and $D^{\ge0}$ are defined by cohomology vanishing.
34. `thm-the-canonical-pair-is-a-t-structure` — **theorem** `[LA]`; orthogonality
    and truncation triangle are proved.
35. `thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category` —
    **theorem** `[LA]`. LANDMARK.

**Total derived functors in the licensed range**

36. `def-left-total-derived-functor-on-the-bounded-above-derived-category` —
    **definition** `[LN]`. Replace by a supplied bounded-above projective
    complex and apply $F$ degreewise.
37. `lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism` —
    **lemma** `[LA]`.
38. `thm-existence-of-the-bounded-above-left-total-derived-functor` —
    **theorem** `[LA]`. $\mathbf L F:D^-(\mathcal A)\to D^-(\mathcal B)$ under
    the exact boundedness and preservation hypotheses.
39. `def-right-total-derived-functor-on-the-bounded-below-derived-category` —
    **definition** `[LN]`, using supplied injective replacements.
40. `thm-existence-of-the-bounded-below-right-total-derived-functor` —
    **theorem** `[LA]`.
41. `prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor` —
    **proposition** `[LA]`. On objects placed in degree zero,
    $H_n(\mathbf L F(A))\cong L_nF(A)$ and
    $H^n(\mathbf R F(A))\cong R^nF(A)$, after translating the chain/cochain
    convention fixed in §3.1.
42. `prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles` —
    **proposition** `[LA]`.
43. `def-derived-tensor-product-in-the-bounded-above-setting` — **definition**
    `[LN]`. $N\otimes_R^{\mathbf L}M$ uses a supplied projective/flat
    replacement of one variable; balance supplies the comparison.
44. `prop-homology-of-the-derived-tensor-product-is-tor` — **proposition**
    `[LA]`.
45. `def-derived-hom-in-the-bounded-setting` — **definition** `[LN]`.
    $\mathbf R\operatorname{Hom}(M,N)$ uses a projective replacement of $M$ or
    injective replacement of $N$.
46. `prop-cohomology-of-derived-hom-is-ext` — **proposition** `[LA]`.

### `fs-` items (A page)

- `fs-localization-identifies-a-quasi-isomorphism-with-an-identity-morphism` —
  **false statement** `[LN]`; it makes the map invertible, not equal to an
  identity.
- `fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal` — **false
  statement** `[LN]`; common refinement controls equality.
- `fs-the-derived-category-is-the-same-category-as-the-homotopy-category` —
  **false statement** `[LN]`; acyclic noncontractible complexes separate them.
- `fs-every-complex-of-projectives-is-homotopically-projective` — **false
  statement** `[LN]` without boundedness or a genuine K-projective hypothesis.
- `fs-brutal-and-canonical-truncation-are-the-same` — **false statement** `[LN]`.
- `fs-an-unbounded-total-derived-functor-exists-from-enough-injectives-alone` —
  **false statement** `[LN]`; general K-injective replacement is in §26.
- `fs-a-derived-functor-is-canonical-without-supplied-replacement-data` —
  **false statement** `[LN]`; SE-D3 still governs.

### B page — `derived-categories-examples`

`ex-a-roof-representing-an-ext-one-class` `[AA]` ·
`ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k` `[AA]` ·
`ex-inverting-a-quasi-isomorphism-by-a-reversed-roof` `[AA]` ·
`ex-ext-one-as-a-derived-category-morphism` `[AA]` ·
`ex-brutal-versus-canonical-truncation` `[AA]` ·
`ex-a-canonical-truncation-triangle` `[AA]` ·
`ex-derived-tensor-of-two-cyclic-abelian-groups` `[AA]` ·
`ex-derived-hom-of-cyclic-abelian-groups` `[AA]` ·
`cex-an-unbounded-complex-of-projectives-that-is-not-k-projective` `[LL]`.

### Sources and exact locators

- **Weibel §§10.3 “Localization and the Calculus of Fractions”, 10.4 “The
  Derived Category”, 10.5 “Derived Functors”, 10.6 “The Total Tensor Product”,
  and 10.7 “Ext and RHom” (printed pp. 379–401).** Primary textbook source.
- **The Stacks Project, *Derived Categories*, §§5–7 “Localization”,
  “Quotients”, “Adjoints for exact functors”; §§11–17 “Derived categories”
  through “Triangulated subcategories”; and §§18–20 on resolutions (current
  PDF pp. 13–72).** Independent complete treatment.
- **Yekutieli, *A Course on Derived Categories* (2012 notes), §§10–14
  “Localization of Categories” through “Derived Functors” (pp. 45–82; exact
  subheadings in §24).**
  Independent full lecture-note control.
- **Gelfand–Manin Ch. III “Derived Categories” and Ch. IV “Triangulated
  Categories”, consulted only through the accessible sample/contents range
  recorded in §24.** Supplemental convention control.

### Proof strategy and traps

Items 4–7 are the localization well-definedness proof: roof equivalence,
composition, independence of the Ore square, identities, associativity, and the
universal property. Items 21–26 deliberately stop at bounded-above projective
and bounded-below injective complexes. Ext as derived-category Hom is proved by
using those replacement models; it is not a definition retroactively imposed
on `HA-8`. The total-derived-functor statements remain relative to supplied
replacement data.

**Forward references: NONE.**

---

## HA-15. Filtered Complexes and Spectral Sequences

**page id** `spectral-sequences` *(planned id kept)*  
**`requires`** `chain-complexes-and-homology`

A spectral sequence is introduced as controlled bookkeeping for a filtration,
not as a grid of groups that eventually “becomes” homology. The construction
starts from a filtered complex, defines the successive cycle and boundary
quotients, proves each differential well defined, and identifies the next page
with homology of the current page. Only bounded filtrations are allowed to abut
on this first page; infinite-filtration convergence belongs to `HA-16`.

### A-page items, in dependency order

**Filtered objects and complexes**

1. `def-increasing-and-decreasing-filtration-of-an-object` — **definition**
   `[LN]`. A $\mathbb Z$-indexed chain of subobjects, with inclusion direction
   explicit; translations between $F_p$ and $F^p$ are stated, not assumed.
2. `def-exhaustive-separated-bounded-and-finite-filtration` — **definition**
   `[LN]`. Exhaustive means union/colimit is the object, separated means
   intersection/limit is zero when those constructions exist, and bounded at
   an object is distinguished from uniformly bounded.
3. `def-associated-graded-object-of-a-filtered-object` — **definition** `[LN]`.
   $\operatorname{gr}^F_pA=F_pA/F_{p-1}A$ for an increasing filtration.
4. `lem-associated-graded-quotients-are-well-defined-subquotients` — **lemma**
   `[LA]`; the inclusion $F_{p-1}\hookrightarrow F_p$ is identified before the
   quotient is formed.
5. `def-filtered-chain-complex` — **definition** `[LN]`. Each $F_pC$ is a
   subcomplex, equivalently $d(F_pC_n)\subseteq F_pC_{n-1}$ in modules.
6. `def-filtered-chain-map` — **definition** `[LN]`.
7. `prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex` —
   **proposition** `[LA]`. $\operatorname{gr}^F_pC_{p+q}$ carries $d^0$ of
   bidegree $(0,-1)$.
8. `def-induced-filtration-on-homology` — **definition** `[LN]`.
   $F_pH_n(C)=\operatorname{im}(H_n(F_pC)\to H_n(C))$; it is not naively
   $H_n(F_pC)$.
9. `lem-the-associated-graded-of-filtered-homology-is-a-subquotient-of-chain-level-data` —
   **lemma** `[LA]`, preparing the $E^\infty$ comparison.

**Successive pages from a filtered complex**

10. `def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex` —
    **definition** `[LN]`. The source prints the subobject formulas
    $Z^r_{p,q}$ and $B^r_{p,q}$ inside $F_pC_{p+q}$, including the shifted
    filtration bounds; no element-only formula is left untyped.
11. `lem-r-boundaries-embed-in-r-cycles` — **lemma** `[LA]`, the quotient
    obligation for item 12.
12. `def-r-page-of-the-spectral-sequence-of-a-filtered-complex` — **definition**
    `[LN]`. $E^r_{p,q}=Z^r_{p,q}/B^r_{p,q}$ with the exact source convention.
13. `lem-the-filtered-differential-induces-d-r-on-the-r-page` — **lemma** `[LA]`.
    If a representative changes by an $r$-boundary, its differential changes
    by an $r$-boundary in bidegree $(p-r,q+r-1)$.
14. `prop-the-rth-differential-has-bidegree-minus-r-r-minus-one` —
    **proposition** `[LA]`.
15. `lem-the-rth-differential-squares-to-zero` — **lemma** `[LA]`.
16. `thm-the-next-page-is-the-homology-of-the-current-page` — **theorem**
    `[LA]`. $E^{r+1}\cong H(E^r,d^r)$ naturally, with the isomorphism built from
    representatives. LANDMARK.
17. `prop-e-zero-is-the-associated-graded-complex` — **proposition** `[LA]`.
    $E^0_{p,q}=\operatorname{gr}^F_pC_{p+q}$.
18. `prop-e-one-is-homology-of-the-associated-graded-complex` — **proposition**
    `[LA]`.
19. `def-limiting-cycles-boundaries-and-e-infinity` — **definition** `[LN]`.
    Stable unions/intersections are stated only where the filtration/category
    admits them; for bounded filtrations they become eventual finite values.

**Abstract spectral sequences and maps**

20. `def-homological-spectral-sequence` — **definition** `[LN]`. Bigraded
    objects $(E^r,d^r)$, $r\ge r_0$, with the bidegree of §3.3 and specified
    isomorphisms $E^{r+1}\cong H(E^r)$.
21. `def-cohomological-spectral-sequence` — **definition** `[LN]`, with
    $d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}$.
22. `def-morphism-of-spectral-sequences` — **definition** `[LN]`. Compatible
    maps from a declared page onward, commuting with differentials and the
    next-page identifications.
23. `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences` —
    **proposition** `[LA]`, naturally from $E^0$ onward.
24. `def-spectral-sequence-stabilization-at-a-bidegree` — **definition** `[LN]`.
25. `def-collapse-at-a-page` — **definition** `[LN]`. All later differentials
    vanish and the page maps identify with $E^\infty$; vanishing of one
    differential is not collapse.
26. `prop-degree-reasons-force-stabilization-in-a-bounded-region` —
    **proposition** `[LA]`.
27. `prop-a-spectral-sequence-supported-in-one-row-or-column-collapses` —
    **proposition** `[LA]`, with the earliest page stated from bidegrees.

**Bounded convergence and edge data**

28. `def-abutment-to-a-filtered-object` — **definition** `[LN]`. An
    identification $E^\infty_{p,q}\cong
    \operatorname{gr}^F_pH_{p+q}$, not an isomorphism with $H_{p+q}$ itself.
29. `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology` —
    **theorem** `[LA]`. For a finite filtration in each total degree, the
    sequence stabilizes and item 28's identification holds. LANDMARK.
30. `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence` —
    **definition** `[LN]`. They are induced through the relevant filtration
    quotient/subobject, not arbitrary maps drawn from the axes.
31. `lem-edge-homomorphisms-are-natural` — **lemma** `[LA]`.
32. `def-extension-problem-of-a-convergent-spectral-sequence` — **definition**
    `[LN]`. $E^\infty$ determines successive subquotients; reconstructing the
    filtered object requires extension data.
33. `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects` —
    **counterexample** `[LL]`, source-backed and A-page because the extension
    problem is structural.
34. `prop-collapse-does-not-in-general-split-the-abutment` — **proposition**
    `[LA]`, by item 33.
35. `thm-the-cohomological-filtered-complex-construction` — **theorem** `[LA]`.
    Gives the upper-index version with the chosen decreasing filtration and
    translates all bidegrees.
36. `prop-shifting-a-filtered-complex-reindexes-its-spectral-sequence` —
    **proposition** `[LA]`, with the filtration and total-degree shifts explicit.

### `fs-` items (A page)

- `fs-e-infinity-is-the-abutment-object` — **false statement** `[LN]`; it is
  the associated graded of a filtered target.
- `fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r` — **false
  statement** `[LN]`; a specified natural isomorphism is part of the data.
- `fs-a-spectral-sequence-collapses-when-one-differential-is-zero` — **false
  statement** `[LN]`.
- `fs-collapse-solves-all-extension-problems` — **false statement** `[LN]`.
- `fs-the-filtration-on-homology-is-h-n-of-the-filtered-subcomplex` — **false
  statement** `[LN]`; item 8 takes an image.
- `fs-e-zero-and-e-one-page-conventions-are-universal-across-sources` — **false
  statement** `[LN]`; §3.3 fixes the library convention.

### B page — `spectral-sequences-examples`

`ex-the-two-step-filtration-and-its-spectral-sequence` `[AA]` ·
`ex-a-filtered-complex-collapsing-at-e-one` `[AA]` ·
`ex-a-nonzero-d-two-differential-in-a-small-filtered-complex` `[LL]` ·
`ex-edge-maps-from-a-first-quadrant-spectral-sequence` `[AA]` ·
`ex-two-filtered-abelian-groups-with-the-same-associated-graded` `[AA]` ·
`cex-collapse-with-a-nonsplit-extension-problem` `[AN]` ·
`ex-the-cohomological-reindexing-of-a-homological-spectral-sequence` `[AA]`.

### Sources and exact locators

- **Weibel §§5.1 “Introduction”, 5.2 “Terminology”, 5.4 “Spectral Sequence of
  a Filtration”, and 5.5 “Convergence” (printed pp. 120–126, 131–140).** Primary
  textbook source.
- **Rotman §§10.2 “Filtrations and Exact Couples” and 10.3 “Convergence”
  (pp. 616–627).** Independent textbook source.
- **The Stacks Project, *Homological Algebra*, §§19 “Filtrations”, 20
  “Spectral sequences”, 23 “Filtered differential objects”, and 24 “Filtered
  complexes” (current PDF pp. 40–65).** Independent full construction.
- **Sharifi §§4.1 “Spectral sequences” and 4.2 “Filtrations on complexes”
  (pp. 77–83).** Open lecture-note control.

### Proof strategy and traps

Items 10–16 are the construction and cannot be replaced by a diagram of pages.
Every quotient needs $B^r\subseteq Z^r$; every differential needs independence
of representatives; and the next-page isomorphism needs both injectivity and
surjectivity. Convergence on this page is finite/bounded. Words such as
“converges” or “computes” must not appear in an item statement without the
filtration and its associated-graded conclusion.

**Forward references: NONE.**

---

## HA-16. Double Complexes, Exact Couples, and Convergence

**page id** `double-complexes-exact-couples-and-convergence`  
**`requires`** `spectral-sequences`,
`mapping-cones-cylinders-and-chain-triangles`,
`long-exact-sequences-in-homology`

This page supplies the two other standard engines for spectral sequences and
the hypotheses under which comparison is legitimate. Double complexes give
row and column filtrations; exact couples give derived couples. The convergence
section distinguishes bounded, regular first-quadrant, and complete filtered
cases and states the obstruction when separatedness or completeness fails.

### A-page items, in dependency order

**Double complexes and totalisation**

1. `def-homological-double-complex` — **definition** `[LN]`. Bigraded objects
   $C_{p,q}$ with $d_h:C_{p,q}\to C_{p-1,q}$ and
   $d_v:C_{p,q}\to C_{p,q-1}$ satisfying $d_hd_v+d_vd_h=0$.
2. `rem-commuting-versus-anticommuting-double-complex-conventions` — **remark**
   `[LN]`. Sources with commuting differentials insert $(-1)^p$ in totalisation;
   the library uses anticommuting differentials at the definition.
3. `def-direct-sum-total-complex-of-a-double-complex` — **definition** `[LN]`.
   $\operatorname{Tot}^{\oplus}_nC=\bigoplus_{p+q=n}C_{p,q}$ with $d=d_h+d_v$.
4. `lem-the-total-differential-squares-to-zero` — **lemma** `[LA]`.
5. `def-product-total-complex-of-a-double-complex` — **definition** `[LN]`.
   $\operatorname{Tot}^{\Pi}_nC=\prod_{p+q=n}C_{p,q}$ where products exist.
6. `prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes` —
   **proposition** `[LA]`.
7. `cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals` —
   **counterexample** `[LL]`, source-backed and A-page because it governs later
   convergence claims.
8. `def-row-and-column-filtrations-of-a-first-quadrant-double-complex` —
   **definition** `[LN]`.
9. `thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex` —
   **theorem** `[LA]`. $E^1$ is vertical or horizontal homology exactly as the
   declared filtration dictates, $E^2$ is the other homology, and it abuts to
   $H_*(\operatorname{Tot}C)$.
10. `thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex` —
    **theorem** `[LA]`, with the two homologies reversed.
11. `prop-the-two-double-complex-spectral-sequences-have-the-same-abutment-but-not-the-same-pages` —
    **proposition** `[LA]`.
12. `thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex` —
    **theorem** `[LA]`. Exact rows or columns collapse one sequence and identify
    total homology with the surviving edge; reconciles the pre-spectral proof
    used in `HA-8`/`HA-10`.

**Exact couples**

13. `def-exact-couple` — **definition** `[LN]`. A pair of graded objects
    $(D,E)$ and maps $i,j,k$ in an exact triangle with their degrees printed.
14. `def-differential-associated-to-an-exact-couple` — **definition** `[LN]`.
    $d=j\circ k$ on $E$.
15. `lem-the-exact-couple-differential-squares-to-zero` — **lemma** `[LA]`, by
    exactness $kj=0$.
16. `def-derived-exact-couple` — **definition** `[LN]`. $D'=i(D)$ and
    $E'=H(E,d)$; the induced $i',j',k'$ are defined through subquotients.
17. `lem-the-derived-couple-maps-are-well-defined` — **lemma** `[LA]`. Each
    choice of preimage/representative is discharged separately.
18. `thm-the-derived-couple-is-exact` — **theorem** `[LA]`.
19. `thm-an-exact-couple-generates-a-spectral-sequence` — **theorem** `[LA]`, by
    iterating items 16–18. LANDMARK.
20. `thm-a-filtered-complex-produces-an-exact-couple` — **theorem** `[LA]` from
    the long exact homology sequences of
    $0\to F_{p-1}C\to F_pC\to\operatorname{gr}_pC\to0$.
21. `prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree` —
    **proposition** `[LA]`, including the page and sign convention.

**Convergence and comparison**

22. `def-regular-spectral-sequence` — **definition** `[LN]`. For each bidegree,
    only finitely many incoming/outgoing differentials can be nonzero.
23. `def-weak-convergence-of-a-spectral-sequence` — **definition** `[LN]`, the
    associated-graded abutment of §3.3.
24. `def-strong-convergence-of-a-spectral-sequence` — **definition** `[LN]`.
    Includes exhaustive, Hausdorff/separated, complete filtration and the
    regularity condition used by the theorem; source terminology is recorded.
25. `thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology` —
    **theorem** `[LA]`. For an exhaustive first-quadrant filtration with only
    finitely many filtration pieces in each total degree, the induced spectral
    sequence stabilizes and strongly converges to homology with its induced
    finite filtration. LANDMARK.
26. `thm-complete-exhaustive-filtered-complex-convergence-criterion` —
    **theorem** `[LL]`. States the source's regularity/derived-limit hypotheses
    exactly; no unconditional complete-filtration theorem is claimed.
27. `def-lim-one-obstruction-to-completeness` — **definition** `[LN]` in the
    countable inverse-system setting already licensed by the category track.
28. `prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment` —
    **proposition** `[LL]`, with source-backed examples on the companion.
29. `thm-spectral-sequence-comparison-theorem` — **theorem** `[LA]`. A morphism
    that is an isomorphism on some page and whose two sequences converge
    strongly induces an isomorphism on associated-graded abutments; an actual
    target isomorphism additionally uses finite/complete separated filtrations.
30. `cor-quasi-isomorphism-criterion-from-a-filtered-map` — **corollary** `[LA]`.
    Under the comparison theorem's convergence hypotheses, a filtered map
    inducing a quasi-isomorphism on associated graded complexes is a
    quasi-isomorphism.
31. `thm-five-term-exact-sequence-of-a-first-quadrant-cohomological-spectral-sequence` —
    **theorem** `[LA]`. The exact sequence
    $0\to E_2^{1,0}\to H^1\to E_2^{0,1}\to E_2^{2,0}\to H^2$
    is printed with edge maps and the filtration hypotheses.
32. `thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence` —
    **theorem** `[LA]`, with indices derived rather than mirrored from memory.
33. `prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically` —
    **proposition** `[LA]`; projectivity is the exact splitting hypothesis.
34. `prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences` —
    **proposition** `[LA]`.
35. `prop-short-exact-sequences-of-filtered-complexes-give-compatible-exact-couples` —
    **proposition** `[LA]`, under strictness of the filtration maps.

### `fs-` items (A page)

- `fs-the-two-spectral-sequences-of-a-double-complex-have-identical-e-one-pages` —
  **false statement** `[LN]`.
- `fs-direct-sum-and-product-totalisations-are-always-isomorphic` — **false
  statement** `[LN]`.
- `fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data` —
  **false statement** `[LN]`.
- `fs-first-quadrant-support-alone-identifies-the-abutment-without-a-filtration` —
  **false statement** `[LN]`; the target filtration remains part of convergence.
- `fs-an-isomorphism-on-e-infinity-automatically-gives-an-isomorphism-of-unfiltered-targets` —
  **false statement** `[LN]` without finite/complete separated filtration.
- `fs-exhaustive-filtration-implies-separated-and-complete-filtration` —
  **false statement** `[LN]`.

### B page — `double-complexes-exact-couples-and-convergence-examples`

`ex-the-two-spectral-sequences-of-a-two-by-two-double-complex` `[AA]` ·
`ex-acyclic-assembly-with-exact-columns` `[AA]` ·
`ex-the-exact-couple-of-a-two-step-filtration` `[AA]` ·
`ex-deriving-an-exact-couple-once` `[AA]` ·
`ex-a-first-quadrant-five-term-exact-sequence` `[AA]` ·
`cex-sum-and-product-totalisations-on-an-infinite-diagonal` `[LL]` ·
`cex-an-exhaustive-nonseparated-filtration-with-the-wrong-naive-abutment` `[LL]` ·
`ex-a-filtered-quasi-isomorphism-detected-on-associated-graded-complexes` `[AA]`.

### Sources and exact locators

- **Weibel §§5.5 “Convergence”, 5.6 “Spectral Sequences of a Double Complex”,
  and 5.9 “Exact Couples” (printed pp. 135–144, 153–159).** Primary textbook
  source.
- **Rotman §§10.1 “Bicomplexes”, 10.2 “Filtrations and Exact Couples”, 10.3
  “Convergence”, and 10.4 “Homology of the Total Complex” (pp. 609–646).**
  Independent textbook source.
- **The Stacks Project, *Homological Algebra*, §§18 “Double complexes and
  associated total complexes”, 20 “Spectral sequences”, 21 “Spectral sequences:
  exact couples”, 24 “Filtered complexes”, and 25–26 “Double complexes”
  (current PDF pp. 37–68).** Independent full treatment.
- **Hilton–Stammbach Ch. VIII, §§1–9 (exact couples, filtered differential
  objects, finite convergence, ladders, limits, Rees systems, completions, and
  the Grothendieck spectral sequence; headings in §24).** Third textbook
  control.

### Proof strategy and traps

Double-complex signs are fixed once: anticommuting differentials and
$d=d_h+d_v$. If a source uses commuting differentials, translate it rather than
mixing formulas. In the exact-couple construction, $j'$ and $k'$ use chosen
preimages, so item 17 is indispensable. The comparison theorem concludes first
at associated-graded level; lifting it to the targets consumes the filtration
hypotheses explicitly.

**Forward references: NONE.**

---

## HA-17. Grothendieck Spectral Sequences and Derived Computations

**page id** `grothendieck-spectral-sequences-and-computations`  
**`requires`** `double-complexes-exact-couples-and-convergence`,
`derived-functors`, `delta-functors-and-universality`,
`group-cohomology-as-a-derived-functor`,
`universal-coefficients-and-kunneth-theorems`,
`group-extensions-complements-and-schur-zassenhaus`

The final pair turns the machinery into comparison theorems. A
Cartan–Eilenberg resolution resolves not only the terms of a complex but its
cycles, boundaries, and homology; its two filtrations produce hyperderived
spectral sequences. The Grothendieck spectral sequence is then proved for a
composition of left exact functors with its exact acyclicity hypothesis. The
page closes by recovering UCT/Künneth and deriving the
Lyndon–Hochschild–Serre sequence; it never treats an $E_2$ page as the answer
without convergence and extension data.

### A-page items, in dependency order

**Cartan–Eilenberg resolutions and hyperderived functors**

1. `def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex` —
   **definition** `[LN]`. A first-quadrant double complex $I^{p,q}$ whose
   columns resolve the terms and whose induced rows resolve cycles,
   boundaries, and cohomology, with the split conditions stated.
2. `lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense` —
   **lemma** `[LA]`; it says precisely whether terms are injective and whether
   the augmentation is a quasi-isomorphism.
3. `thm-cartan-eilenberg-injective-resolutions-exist` — **theorem** `[LL]` for
   bounded-below complexes in an abelian category with enough injectives,
   relative to supplied successive choices. LANDMARK.
4. `def-right-hyperderived-functor-of-a-complex` — **definition** `[LN]`.
   $\mathbb R^nF(K^\bullet)=H^n\operatorname{Tot}F(I^{\bullet,\bullet})$ for a
   supplied Cartan–Eilenberg resolution.
5. `lem-hyperderived-functors-are-independent-of-the-supplied-cartan-eilenberg-resolution-up-to-natural-isomorphism` —
   **lemma** `[LA]`, with the same data-supplied qualification as SE-D3.
6. `thm-first-hypercohomology-spectral-sequence` — **theorem** `[LA]`.
   Under the bounded-below convergence hypotheses,
   $E_1^{p,q}=R^qF(K^p)\Rightarrow\mathbb R^{p+q}F(K^\bullet)$.
7. `thm-second-hypercohomology-spectral-sequence` — **theorem** `[LA]`.
   $E_2^{p,q}=R^pF(H^qK^\bullet)\Rightarrow
   \mathbb R^{p+q}F(K^\bullet)$, with the hypotheses under which the displayed
   $E_2$ identification is valid.
8. `prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f` —
   **proposition** `[LA]`.

**The Grothendieck composition theorem**

9. `def-g-acyclic-object-for-a-left-exact-functor` — **definition** `[LN]`.
   $B$ is $G$-acyclic when $R^pG(B)=0$ for $p>0$; this reuses `HA-6`'s
   resolution-data convention.
10. `lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f` —
    **lemma** `[LA]`. Hypothesis: $F$ carries injectives to $G$-acyclic objects.
11. `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite` —
    **lemma** `[LA]`, by the acyclic-resolution theorem.
12. `lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge` —
    **lemma** `[LA]`.
13. `thm-grothendieck-spectral-sequence` — **theorem** `[LA]`. If
    $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$ are additive
    left exact functors, $\mathcal A$ and $\mathcal B$ have enough injectives,
    supplied resolution data are fixed, and $F$ sends injectives to
    $G$-acyclics, then
    \[
    E_2^{p,q}=R^pG(R^qF(A))\ \Longrightarrow\ R^{p+q}(G\circ F)(A)
    \]
    is a natural first-quadrant cohomological spectral sequence. LANDMARK.
14. `thm-naturality-of-the-grothendieck-spectral-sequence` — **theorem** `[LA]`
    in $A$ and in compatible natural transformations of the functors.
15. `thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence` —
    **theorem** `[LA]`, obtained from `HA-16` with all edge maps identified.
16. `cor-grothendieck-collapse-when-one-functor-is-exact` — **corollary** `[LA]`.
17. `cor-derived-composition-isomorphism-under-total-acyclicity` — **corollary**
    `[LA]`; the precise $R^n(GF)\cong R^nG\circ F$ or
    $G\circ R^nF$ alternative matches the vanishing axis.
18. `rem-the-grothendieck-spectral-sequence-has-a-dual-left-derived-form` —
    **remark** `[L0]`. The exact projective/acyclic hypotheses and source are
    stated, but no duplicate proof is supplied and nothing depends on it.

**Derived computations recovered**

19. `thm-universal-coefficient-spectral-sequence` — **theorem** `[LA]`. For a
    bounded-below chain complex $C$ of projective left $R$-modules and a left
    $R$-module $M$,
    \[
    E_2^{p,q}=\operatorname{Ext}_R^p(H_q(C),M)
    \Longrightarrow H^{p+q}\operatorname{Hom}_R(C,M),
    \]
    with the indexing convention verified. Over a PID it has only columns
    $p=0,1$ and recovers `HA-11`'s cohomology UCT plus its extension problem.
20. `thm-kunneth-tor-spectral-sequence` — **theorem** `[LA]`. Under a
    degreewise-flat/projective and boundedness hypothesis,
    $E^2_{p,q}=\operatorname{Tor}^R_p(H_\ast C,H_\ast D)_q
    \Rightarrow H_{p+q}(C\otimes_RD)$, with the internal total grading expanded
    in the statement.
21. `cor-the-pid-kunneth-short-exact-sequence-is-the-two-column-collapse` —
    **corollary** `[LA]`, carrying an agreement remark to `HA-11` rather than a
    second proof.
22. `prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem` —
    **proposition** `[LA]`.
23. `thm-hyper-tor-spectral-sequence` — **theorem** `[LA]` for a module and a
    bounded-below complex, with flat/projective replacement and convergence
    hypotheses.
24. `thm-hyper-ext-spectral-sequence` — **theorem** `[LA]`, with the variance
    and boundedness stated.

**Group-cohomological application**

25. `lem-invariants-for-a-group-extension-compose` — **lemma** `[LA]`. For
    $1\to N\to G\to Q\to1$ and a $G$-module $M$,
    $M^G=(M^N)^Q$, with the induced $Q$-action on $M^N$ proved well defined.
26. `lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules` —
    **lemma** `[LA]`. For $N\triangleleft G$ and $Q=G/N$, inflation from
    $Q$-modules to $G$-modules is exact and has $N$-invariants as right
    adjoint; hence $N$-invariants sends injective $G$-modules to injective,
    therefore $Q$-acyclic, $Q$-modules.
27. `thm-lyndon-hochschild-serre-spectral-sequence` — **theorem** `[LA]`.
    \[
    E_2^{p,q}=H^p(Q,H^q(N,M))\Longrightarrow H^{p+q}(G,M),
    \]
    natural in the extension and coefficients, obtained as a Grothendieck
    spectral sequence. The extension $1\to N\to G\to Q\to1$ is cited from
    `group-theory`; its low-degree interpretation remains there. LANDMARK.
28. `thm-five-term-exact-sequence-in-group-cohomology-from-lhs` — **theorem**
    `[LA]`. The five terms and inflation/restriction/transgression arrows are
    named algebraically; `group-theory` owns their group-theoretic reading.
29. `prop-lhs-collapses-for-a-cohomologically-trivial-normal-subgroup` —
    **proposition** `[LA]`, with the exact vanishing hypotheses.

**Use protocol**

30. `def-spectral-sequence-computation-record` — **definition** `[LN]`. A
    computation must state: construction, indexing/start page, differentials
    ruled out or computed, convergence theorem, induced filtration, and
    remaining extension problem. This is mathematical record structure, not a
    build artifact.
31. `prop-an-e-two-page-alone-does-not-determine-the-abutment` — **proposition**
    `[LA]`, by nonzero later differentials and by extension ambiguity.
32. `prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically` —
    **proposition** `[LA]`; vector-space splittings remove extensions but not
    canonicality.

### `fs-` items (A page)

- `fs-the-grothendieck-spectral-sequence-needs-only-left-exactness-of-f-and-g` —
  **false statement** `[LN]`; enough injectives, supplied data, and the
  $G$-acyclic image condition are essential.
- `fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence` —
  **false statement** `[LN]`; it is the $E_2$ page under this convention.
- `fs-a-cartan-eilenberg-resolution-only-resolves-the-terms-of-a-complex` —
  **false statement** `[LN]`; cycles, boundaries, and homology are part of the
  datum.
- `fs-collapse-of-the-uct-spectral-sequence-gives-a-natural-splitting` —
  **false statement** `[LN]`.
- `fs-the-lhs-spectral-sequence-defines-low-degree-group-cohomology` — **false
  statement** `[LN]`; it computes an already defined derived functor.
- `fs-writing-e-two-double-arrow-h-is-a-complete-convergence-proof` — **false
  statement** `[LN]`; item 30 lists the missing data.

### B page — `grothendieck-spectral-sequences-and-computations-examples`

`ex-a-two-row-hypercohomology-spectral-sequence` `[AA]` ·
`ex-grothendieck-spectral-sequence-with-an-exact-outer-functor` `[AA]` ·
`ex-the-five-term-exact-sequence-of-a-composite-functor` `[AA]` ·
`ex-uct-as-a-two-column-spectral-sequence-over-the-integers` `[AA]` ·
`ex-kunneth-as-a-two-column-spectral-sequence-over-a-pid` `[AA]` ·
`ex-lhs-for-a-split-group-extension` `[LL]` ·
`ex-a-collapse-with-a-noncanonical-extension-choice` `[AA]` ·
`cex-identical-e-two-pages-with-different-later-differentials` `[LL]` ·
`ex-a-complete-spectral-sequence-computation-record` `[AA]`.

### Sources and exact locators

- **Weibel §§5.7 “Hyperhomology”, 5.8 “Grothendieck Spectral Sequences”,
  6.8 “The Spectral Sequence” (the Lyndon/Hochschild–Serre sequence), and the
  UCT/Künneth applications in §§5.6–5.7 (printed pp. 141–152, 195–197).**
  Primary textbook source.
- **Rotman §§10.5 “Cartan–Eilenberg Resolutions”, 10.6 “Grothendieck Spectral
  Sequences”, 10.7 “Groups”, and 10.10 “Künneth Theorems” (pp. 647–665,
  678–688).** Independent textbook source.
- **Sharifi §4.3 “Grothendieck spectral sequences” (pp. 83–86).** Open
  independent control for items 9–17.
- **Rutgers 16:640:560 notes, Lectures 16–21, “Double complexes and spectral
  sequences” through “From the hyperderived functor spectral sequence to the
  Grothendieck spectral sequence”.** Full lecture-note control; exact lecture
  headings are harvested in §24.
- **Hilton–Stammbach Ch. VIII §9 “The Grothendieck spectral sequence”.** Third
  textbook control.

### Proof strategy and traps

The proof of Theorem 13 runs through a Cartan–Eilenberg double complex. One
filtration computes the derived composite by the acyclic-resolution theorem;
the other gives $R^pG(R^qF(A))$. The first-quadrant convergence theorem supplies
the abutment filtration. Every application must identify these three steps.
UCT and Künneth are agreement results with `HA-11`; LHS is a composition of
invariants, not an independent definition of group cohomology.

**Forward references: NONE.**

---
## 21. Future page summaries

At build time every A page receives **exactly two nonempty prose paragraphs,
each under 150 words**. Paragraph one names only the mathematical background
actually supplied by that page's declared `requires`: it may say that an
abelian category has kernels/images/exact sequences or that the previous page
has constructed cones, but it must not claim a planned page is published.
Paragraph two follows the logical progression of that page's item spine and
names its main definitions and theorems. It contains no item counts, self-rating,
curriculum salesmanship, or survey of unrelated pages. The one- or two-paragraph
design notes beneath each `HA-*` heading above are source material for this
future summary, not summary text to copy blindly.

Every B/examples companion has no authored summary body. Its examples stress
the precise hypotheses of its A page, but that purpose belongs in plan prose or
individual item Remarks rather than a B-page summary.

---

## 22. Well-definedness and boundary-obligation ledger

Every row is a future proof obligation. “Universal” means the general
abelian-category proof uses a kernel/cokernel/image or localization universal
property; an element computation may be added only in a module example.

| # | construction/phrase | obligation that licenses it | discharge |
|---:|---|---|---|
| 1 | $B_n(C)\subseteq Z_n(C)$ | $d_nd_{n+1}=0$ factors the image of $d_{n+1}$ uniquely through the kernel of $d_n$ | `HA-1` item 6, universal |
| 2 | $H_n(C)=Z_n/B_n$ and $H^n=Z^n/B^n$ | row 1 supplies the monomorphism whose cokernel is taken; zero homology agrees with exactness | `HA-1` items 7–10 |
| 3 | induced map $H_n(f)$ | $f$ restricts to cycles, carries boundaries to boundaries, and hence descends uniquely through the quotient | `HA-1` items 16–19 |
| 4 | quotient complex $C/S$ | the differential annihilates $S$ modulo the next term, descends independently of representatives, and still squares to zero | `HA-1` items 24–25 |
| 5 | kernels/cokernels of chain maps | component kernels inherit unique restricted differentials and component cokernels unique descended differentials | `HA-1` items 27–31 |
| 6 | Hom complex | the product over degrees exists in the stated category and the signed differential squares to zero | `HA-2` items 2–3; bounded fallback if products do not exist |
| 7 | homotopy category $K(\mathcal A)$ | chain homotopy is an equivalence relation; null-homotopic maps form a two-sided additive ideal; composition is representative-independent | `HA-2` items 7–9, 16–20 |
| 8 | shifted complex and shifted homotopy | the sign gives a differential and preserves the homotopy equation | `HA-2` items 24–29 |
| 9 | mapping cone | the mixed terms cancel in $d^2$; canonical inclusion/projection are chain maps | `HA-3` items 1–4 |
| 10 | mapping cylinder | the displayed differential squares to zero and the factorisation/deformation maps are chain maps | `HA-3` items 15–20 |
| 11 | cone functoriality | a strictly commuting square induces the matrix map; changing by a homotopy gives only an isomorphic cone | `HA-3` items 9–12; no functor on $K$ claimed |
| 12 | homology connecting morphism | the preconnector lands in cycles modulo boundaries, kills source boundaries, and descends through $H_n(C)$ | `HA-4` items 2–6 |
| 13 | elementwise connecting formula | independent of the lift in $B_n$, the lift back to $A_{n-1}$, and the cycle representative | `HA-4` item 6, module specialisation |
| 14 | natural LES | the square involving connecting morphisms commutes; ordinary homology squares alone do not prove naturality | `HA-4` items 12–15 |
| 15 | syzygy/cosyzygy | object is explicitly relative to a supplied resolution; changing resolution gives stable isomorphism, not a canonical equality | `HA-5` items 7, 35–37 |
| 16 | comparison map | each inductive lift is typed and exists; different complete lift sequences are chain-homotopic | `HA-5` items 16–24 |
| 17 | horseshoe resolution | new middle differential squares to zero; its kernel fits the asserted short exact sequence; lift/splitting choices do not imply canonicity | `HA-5` items 28–34 |
| 18 | Grothendieck-category injective embedding | subobjects/indexing morphisms form sets; the coproduct and pushout exist; transfinite limit stages are monic; high-cofinality factorization proves injectivity | `HA-5` items 39–45 |
| 19 | $L_nF(A)$ or $R^nF(A)$ | a resolution for every object is supplied data, never manufactured by global choice | `HA-6` items 1–4 and SE-D3 |
| 20 | derived map on a morphism | a comparison lift exists and all lifts induce the same homology map; unique specification gives a function on each hom-set | `HA-6` items 6–15 |
| 21 | “independent of the resolution” | comparison isomorphisms are natural and satisfy identity/cocycle laws; conclusion is relative to two supplied resolution data | `HA-6` items 18–24 |
| 22 | acyclic resolution computes derived functors | staircase connecting isomorphisms are natural and terminate under the stated boundedness/acyclicity hypotheses | `HA-6` items 31–34 |
| 23 | derived connecting map | horseshoe choices and comparison lifts yield the same map | `HA-7` items 8–14 |
| 24 | universal extension of a degree-zero transformation | definition independent of the effacement; it is natural, connector-compatible, and unique | `HA-7` items 17–24 |
| 25 | Hom double complex and total complex | horizontal/vertical signs anticommute; each first-quadrant diagonal is finite | `HA-8` items 9–11 |
| 26 | balanced Ext notation | both edge maps into the total complex are quasi-isomorphisms, natural, resolution-independent, and coherent | `HA-8` items 12–20 |
| 27 | extension class | equivalence is an equivalence relation; every map of extensions is an isomorphism | `HA-9` items 2–4 |
| 28 | pullback/pushout of an extension | universal constructions preserve exactness and equivalent representatives give equivalent extensions | `HA-9` items 6–7 |
| 29 | Baer sum | independent of representatives; associative, commutative, has the split zero and the stated inverse | `HA-9` items 8–11 |
| 30 | class of all extensions | size is discharged by the natural bijection to the set-valued derived $\operatorname{Ext}^1$ in the licensed setting | `HA-9` items 12–17 |
| 31 | higher Yoneda Ext | use the equivalence relation generated by maps of extensions; splicing descends to classes and is associative/unital | `HA-9` items 18–24 |
| 32 | projective/injective/global dimension | least resolution length is independent of the displayed resolution via syzygy and Ext-vanishing criteria | `HA-9` items 26–37 |
| 33 | tensor total complex | balanced tensor representatives respect the differential and the Koszul sign makes $d^2=0$ | `HA-10` items 1–2 |
| 34 | balanced Tor notation | exact rows/columns give the two edge quasi-isomorphisms; comparison is natural and coherent | `HA-10` items 8–14 |
| 35 | Tor symmetry | the tensor twist is a chain map only with the graded sign; commutativity/bimodule typing is present | `HA-10` item 26 |
| 36 | UCT edge maps | cycle and coefficient representatives descend; the Tor/Ext obstruction maps are natural | `HA-11` items 6–8, 11–13 |
| 37 | UCT/Künneth splitting | existence of a splitting is proved separately and explicitly nonnatural | `HA-11` items 9–10, 14, 21 |
| 38 | Künneth cross product | cycles tensor to cycles; changing either representative changes the tensor by a total boundary | `HA-11` items 17–20 |
| 39 | $Q$-action on $M^N$ in a group extension | normality makes a lift-independent action of $G/N$ on $N$-invariants | `HA-17` item 25 |
| 40 | bar resolution | differential is equivariant and squares to zero; the underlying contraction proves exactness without being falsely called equivariant | `HA-12` items 12–16 |
| 41 | homogeneous/inhomogeneous cochains | two explicit transformations are inverse, equivariant, and commute with differentials | `HA-12` items 17–20 |
| 42 | normalized bar complex | degenerates form a subcomplex and a contraction makes its quotient/inclusion a homotopy equivalence | `HA-12` items 21–24 |
| 43 | corestriction | independent of a supplied set of coset representatives and compatible with restriction | `HA-12` items 32–34 |
| 44 | distinguished rotation | the $-f[1]$ convention is used consistently in TR2, cone rotation, and long exact Hom | `HA-13` items 4, 11, 13, 34 |
| 45 | cone object in a triangulated category | exists by TR1 and is unique only up to a nonunique isomorphism; no cone functor is licensed | `HA-13` items 23, 31–37 |
| 46 | roof class | roof equivalence is an equivalence relation; composition is independent of Ore square and representatives and is associative | `HA-14` items 3–7 |
| 47 | derived category | quasi-isomorphisms form the denominator system in the licensed setting; localization size is controlled | `HA-14` items 8–17 |
| 48 | canonical truncation | kernel/cokernel term and adjacent differentials form a complex and have exactly the claimed cohomology | `HA-14` items 29–35 |
| 49 | total derived functor | replacement exists in the bounded range, sends quasi-isomorphisms to isomorphisms, and change of replacement is naturally coherent | `HA-14` items 36–46 |
| 50 | $E^r_{p,q}=Z^r/B^r$ | $B^r\hookrightarrow Z^r$ is established before quotienting | `HA-15` items 10–12 |
| 51 | spectral differential | independent of the filtered-chain representative, has the claimed bidegree, and squares to zero | `HA-15` items 13–16 |
| 52 | $E^\infty$ and abutment | stabilization is proved; $E^\infty$ is identified with the associated graded of the induced homology filtration, not with homology itself | `HA-15` items 19, 24–34 |
| 53 | sum/product totalisation | choice is declared and the two are identified only on finite diagonals | `HA-16` items 3–7 |
| 54 | derived exact couple | $i',j',k'$ are independent of preimages and representatives and remain exact | `HA-16` items 13–21 |
| 55 | convergence/comparison | exhaustive, separated, complete/regular, and bounded hypotheses are individually stated; target conclusion is distinguished from associated-graded conclusion | `HA-16` items 22–33 |
| 56 | Cartan–Eilenberg/hyperderived construction | terms, cycles, boundaries, and homology are resolved compatibly; totalization computes the desired replacement; change data is coherent | `HA-17` items 1–8 |
| 57 | Grothendieck spectral sequence | $F$ sends injectives to $G$-acyclics; one filtration computes the composite and the other the $E_2$ page; convergence supplies a filtration of the target | `HA-17` items 9–17 |
| 58 | a reported spectral-sequence computation | construction, indexing, differential analysis, convergence, target filtration, and extensions are all recorded | `HA-17` items 30–32 |

Boundary cases to test on every relevant proof: the zero complex and zero
object; a stalk complex; degrees at the end of a bounded complex; $n=0$ for
Ext/Tor and derived functors; a projective/injective input; a split versus only
degreewise-split sequence; the trivial group; the zero ring/module if the
published conventions admit it; an empty filtration piece; a one-row/one-column
spectral sequence; and infinite diagonals where direct sums and products differ.

---

## 23. Choice-strength ledger

The library has ordinary set-level AC, countable choice, and dependent choice
available as named foundations, but **not global choice**. “ZF” below means the
result is proved in ZF relative to the displayed categorical existence
hypotheses and any explicitly supplied structure. A theorem invoking an
already-published result inherits that result's stronger recorded boundary.

| result/construction | strength | exact boundary |
|---|---|---|
| finite complex, cycles, boundaries, homology, chain maps, induced homology | ZF | kernels, images, cokernels and finite biproducts are categorical hypotheses, not choices |
| chain homotopy, $K(\mathcal A)$, shifts, cones, cylinders, LES | ZF | quotient hom-groups and connecting arrows are defined by universal properties |
| Hom complex over all degrees | ZF relative to products | existence of the product is categorical structure; no element selection follows from it |
| one finite stage of a projective/injective resolution | ZF existentially | enough projectives/injectives supplies one cover/embedding for the current object |
| an infinite resolution of one fixed object from “enough” alone | DC only when the available choices form a set; otherwise supplied data | successive choices depend on the preceding kernel/cokernel; in a large category, bare class-sized existence is not an input to set-level DC |
| canonical iterated-free exact resolution of one module | ZF as an exact free complex | take the free module on the underlying set at every stage; calling its terms projective additionally inherits the published AC boundary |
| existence of projective resolutions of arbitrary modules via free modules | inherits published boundary | `thm-free-modules-are-projective-with-choice-boundary` records when lifting from a free basis uses AC; the canonical free-resolution object itself is ZF |
| existence of injective resolutions of modules | AC plus a functorial/set-valued embedding construction, or AC + DC, or supplied data | inherits `thm-module-categories-have-enough-injectives`; a functorial embedding can be iterated without new choices |
| comparison map or comparison homotopy through all degrees | DC, or supplied lifts | each degree is an existential lift depending on earlier degrees; uniqueness *up to homotopy* is then ZF |
| horseshoe resolution through all degrees | DC, or supplied horseshoe lifts | finite biproducts need no choice; the countable inductive lift sequence does |
| functorial injective embedding in a Grothendieck category | AC in the cited classical foundation | Stacks Tag `079H` uses set-indexed coproducts, cardinal/cofinality machinery and remarks that AC is used; the transfinite recursion itself is canonical once the construction is fixed |
| functorial injective resolution in a Grothendieck category | same AC already used for the functorial embedding | iterate that embedding on functorial cokernels; no additional DC sequence is selected |
| one resolution for every object of a large category | **global choice would be needed and is not adopted** | therefore `HA-6` requires a supplied class-indexed resolution datum; no unconditional statement appears |
| maps of derived functors once object-resolution data are supplied | ZF relative to objectwise comparison existence | independence makes the induced map uniquely specified; no class-sized selection of comparison maps is needed |
| change-of-resolution natural isomorphism | ZF relative to two supplied data and objectwise comparison existence | homotopy uniqueness forces the components and cocycle laws |
| effacement/universality for one object and degree | ZF | compare two effacements using a finite biproduct; no family of effacements is selected globally |
| Ext/Tor balance by a first-quadrant double complex | ZF relative to supplied resolutions | all diagonals are finite and acyclic assembly uses finite exact-sequence induction |
| Baer sum and Yoneda splice | ZF | only finite pullbacks, pushouts and biproducts occur |
| set of extension classes | ZF in the licensed locally small setting | comparison with set-valued derived Ext avoids selecting representatives |
| projective/global dimension one of $\mathbb Z$, higher-Tor vanishing over $\mathbb Z$, and the PID torsion-free/flat theorem | inherits the abstract-algebra AC boundary | the standard proof uses that submodules of free modules over a PID are free; the scaffold never labels that step ZF without the source's foundation qualification |
| UCT/Künneth natural short exact sequences | ZF relative to the cited PID submodule theorem | no splitting is needed for exactness |
| UCT/Künneth splitting over a PID | AC in general; finite choice in finite-rank cases | choosing bases/complements or sections is why the splitting is nonnatural; the statement must inherit the abstract-algebra choice boundary |
| one splitting in every degree of a countable family of already split sequences | countable choice in general, or supplied splittings | each fixed degree is an ordinary existential statement; a simultaneous graded family is a separate countable selection and never implies compatibility with differentials |
| bar resolution and group (co)homology | ZF | bars are free on explicit tuples; the contraction inserts the identity element |
| choosing coset representatives for $H\backslash G$ or $G/H$ | AC for an arbitrary quotient set, or supplied representatives | Shapiro is preferably proved via adjunction without such a choice; any freeness proof using representatives states the boundary |
| restriction/corestriction for finite index | finite choice, hence ZF in the adopted finite-choice development | independence from representatives is proved afterwards |
| localization/roof category | ZF relative to the fraction axioms and controlled hom-sets | Ore squares prove existence and common-refinement equivalence makes each composite a unique class; no global choice of a roof normal form |
| bounded projective/injective replacement of one complex | DC, or supplied replacement | diagonal construction is countable; the global replacement functor is data-supplied unless a source gives a functorial construction |
| triangulated axioms and formal consequences | ZF | TR3/TR4 assert existential fillers objectwise; no functorial filler family is inferred |
| bounded filtered-complex and first-quadrant spectral sequences | ZF | successive subquotients, finite diagonals and stabilization use no selection |
| splitting a filtered vector-space abutment | AC for arbitrary vector spaces; finite choice if finite-dimensional | collapse alone never supplies the splitting |
| complete-filtration convergence | ZF relative to limits, exactness and stated completeness | no choice is hidden in the convergence word |
| Cartan–Eilenberg resolution of one bounded-below complex | DC/AC as inherited from injective resolutions, or supplied data | compatible resolutions are iterated; the global family remains structure |
| Grothendieck spectral sequence | same as its supplied injective/Cartan–Eilenberg data | the spectral-sequence construction and convergence are ZF after those data are present |

No item may replace “relative to supplied resolution data” by “choose once and
for all.” That phrase is global choice when the objects form a proper class.

---

## 24. Canonical-coverage harvest

### 24.1 Access record and pair-backing matrix

The following sources were obtained with searchable full text unless a narrower
access status is stated. “Read” means the exact chapter/section range used for
the scaffold was read, not merely found in a bibliography.

| code | source, access, exact range read |
|---|---|
| `W` | Charles A. Weibel, *An Introduction to Homological Algebra* (Cambridge, 1994), complete chapter PDFs and detailed contents in the MIT-hosted book directory: https://math.mit.edu/~hrm/palestine/weibel/ ; exact contents: https://math.mit.edu/~hrm/palestine/weibel/contents.pdf ; searchable mirror used for cross-search: https://djvu.online/file/WrPctxOTQCdBj ; author errata: https://sites.math.rutgers.edu/~weibel/Hbook-corrections.html . Read Chs 1–6 and 10 in full over the headings harvested below. Publisher-controlled, not claimed open-licensed. |
| `R` | Joseph J. Rotman, *An Introduction to Homological Algebra*, 2nd ed. (Springer, 2009), full searchable text: https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html . Read Chs 3 and 5–10 over the headings below. Publisher-controlled, not claimed open-licensed. |
| `SP-H` | The Stacks Project, *Homological Algebra*, current full PDF: https://stacks.math.columbia.edu/download/homology.pdf . Read §§12–32. GNU FDL. |
| `SP-D` | The Stacks Project, *Derived Categories*, current full PDF: https://stacks.math.columbia.edu/download/derived.pdf . Read §§2–27. GNU FDL. |
| `SP-I` | The Stacks Project, *Injectives*, chapter page https://stacks.math.columbia.edu/tag/01D4 and Theorem 19.11.7 https://stacks.math.columbia.edu/tag/079H . Read §§19.10–19.12 and the complete proof of Tag `079H`. GNU FDL. |
| `S` | Romyar Sharifi, *Homological Algebra*, full 86-page lecture notes: https://math.ucla.edu/~sharifi/homalg.pdf . Read §§2.7–2.8, 3.1–3.7, and 4.1–4.3. |
| `K` | Daniel Krashen, Rutgers MATH 560 (2018), full lecture-note index and linked lecture PDFs: https://torsor.org/homological-algebra/lectures/ . Read every posted Lecture 3–23 (the index posts no Lecture 8), except the sheaf-specific Lecture 22 body; its heading was still harvested. |
| `HS` | Hilton–Stammbach, *A Course in Homological Algebra*, 2nd ed.; university-hosted full scan indexed at https://people.math.rochester.edu/faculty/doug/otherpapers/hilton-stammbach.pdf ; exact official contents also checked at https://unina2.on-line.it/sebina/repository/catalogazione/documenti/A%20Course%20in%20Homological%20Algebra.pdf . Read Chs III–VI and VIII over the headings below. Publisher-controlled, not claimed open-licensed. |
| `Y` | Amnon Yekutieli, *A Course on Derived Categories*, complete open notes: https://www.math.bgu.ac.il/~amyekut/lectures/course-der-cats/arxiv-1206.6632v1.pdf and https://arxiv.org/abs/1206.6632 . Read §§8–14. |
| `GM` | Gelfand–Manin, *Methods of Homological Algebra*, Chs III–IV. Only the university-hosted frontmatter/contents and publisher/Google preview were reachable: https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Gelfand%2C%20Manin%20-%20Methods%20of%20homological%20algebra.pdf and https://link.springer.com/book/10.1007/978-3-662-12492-5 . **Bibliographic/convention control only; no load-bearing claim relies on inaccessible body text.** |

Every pair has at least two independent full treatments:

| pair | independent backing |
|---|---|
| `HA-1` | `W` §§1.1–1.2; `R` §§5.5.1, 6.1; `SP-H` §13; `S` §2.7 |
| `HA-2` | `W` §§1.2, 1.4; `R` §6.1; `SP-H` §14; `SP-D` §8 |
| `HA-3` | `W` §1.5; `R` §6.1; `SP-D` §§9–10 |
| `HA-4` | `W` §1.3; `R` §6.1; `S` §§2.7, 3.1 |
| `HA-5` | `W` §§2.2–2.3; `R` §§3.1–3.2, 6.2.1; `SP-H` §§27–29; `SP-I` §19.11 |
| `HA-6` | `W` §§2.4–2.6; `R` §6.2; `S` §§3.3–3.4; `SP-D` §§18–20 |
| `HA-7` | `W` §2.1; `R` §§6.2.2–6.2.4; `SP-H` §12; `S` §3.1 |
| `HA-8` | `W` §§2.7, 3.3; `R` §§6.2.4, 7.2; `S` §3.5 |
| `HA-9` | `W` §§3.4, 4.1; `R` §§7.2–7.2.1, 8.1; `HS` Chs III–IV |
| `HA-10` | `W` §§2.7, 3.1–3.2, 4.1; `R` §§7.1–7.1.2, 8.1; `HS` Chs III–IV |
| `HA-11` | `W` §3.6; `R` §§7.4, 10.10; `HS` Ch. V |
| `HA-12` | `W` §§6.1–6.5; `R` §§9.2–9.5; `HS` Ch. VI; `S` §3.6 |
| `HA-13` | `W` §§10.1–10.2; `SP-D` §§2–4, 9–10; `Y` §§8–9 |
| `HA-14` | `W` §§10.3–10.7; `SP-D` §§5–20; `Y` §§10–14 |
| `HA-15` | `W` §§5.1–5.5; `R` §§10.2–10.3; `SP-H` §§19–24; `S` §§4.1–4.2 |
| `HA-16` | `W` §§5.5–5.6, 5.9; `R` §§10.1–10.4; `SP-H` §§18, 20–26; `HS` Ch. VIII |
| `HA-17` | `W` §§5.7–5.8, 6.8; `R` §§10.5–10.7; `S` §4.3; `K` Lectures 19–21; `HS` VIII.9 |

### 24.2 Weibel heading harvest — Chs 1–6 and 10

Every heading is Weibel's own table-of-contents wording.

**Chapter 1, “Chain Complexes.”**

- **1.1 “Complexes of $R$-Modules”** — `included`:
  `def-chain-complex-in-an-abelian-category`,
  `def-homology-object-of-a-chain-complex`, `def-chain-map`, and
  `thm-a-chain-map-induces-a-well-defined-map-on-homology`.
- **1.2 “Operations on Chain Complexes”** — `included`:
  `def-hom-complex-of-chain-complexes`, `def-shift-of-a-chain-complex`, and
  `prop-finite-biproducts-of-complexes-are-computed-degreewise`.
- **1.3 “Long Exact Sequences”** — `included`:
  `def-connecting-morphism-in-homology`, `thm-long-exact-sequence-in-homology`,
  and `thm-naturality-of-the-homology-connecting-morphism`.
- **1.4 “Chain Homotopies”** — `included`: `def-chain-homotopy`,
  `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, and
  `def-homotopy-category-of-chain-complexes`.
- **1.5 “Mapping Cones and Cylinders”** — `included`:
  `def-mapping-cone-of-a-chain-map`, `def-mapping-cylinder-of-a-chain-map`,
  and both cone criteria.
- **1.6 “More on Abelian Categories”** — `out-of-scope`: abelian-category
  structure and diagram lemmas belong to `monoidal-abelian-categories` and are
  consumed through `abelian-categories`, `exactness-and-the-member-calculus`,
  and `the-diagram-lemmas-in-an-abelian-category`; this track adds only
  `thm-the-category-of-complexes-in-an-abelian-category-is-abelian`.

**Chapter 2, “Derived Functors.”**

- **2.1 “$\delta$-Functors”** — `included`: `def-homological-delta-functor`,
  `def-universal-delta-functor`, and
  `thm-effaceable-homological-delta-functors-are-universal`.
- **2.2 “Projective Resolutions”** — `included`:
  `def-projective-resolution-in-an-abelian-category`, projective comparison,
  and `thm-horseshoe-lemma-for-projective-resolutions`.
- **2.3 “Injective Resolutions”** — `included`: the dual resolution,
  comparison, and horseshoe items on `HA-5`.
- **2.4 “Left Derived Functors”** — `included`:
  `def-left-derived-object-relative-to-projective-resolution-data` through
  `thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic`.
- **2.5 “Right Derived Functors”** — `included`: the corresponding
  data-supplied right-derived items and acyclic-resolution theorem.
- **2.6 “Adjoint Functors and Left/Right Exactness”** — `inline` in
  `thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor`,
  its right-derived dual, and `prop-contravariant-derived-functors-are-derived-on-the-opposite-category`;
  adjunction definitions themselves belong to the category track.
- **2.7 “Balancing Tor and Ext”** — `included`:
  `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic`
  and `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`.

**Chapter 3, “Tor and Ext.”**

- **3.1 “Tor for Abelian Groups”** — `included`:
  `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion` and
  `thm-tor-of-two-cyclic-abelian-groups`.
- **3.2 “Tor and Flatness”** — `included`:
  `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`
  and the flat-dimension items.
- **3.3 “Ext for Nice Rings”** — `included`: the projective computation items
  on `HA-8` and the PID examples on `HA-8-examples`.
- **3.4 “Ext and Extensions”** — `included`:
  `thm-baer-sum-makes-extension-classes-an-abelian-group` and
  `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one`.
- **3.5 “Derived Functors of the Inverse Limit”** — `deferred`: a full theory
  needs inverse systems, Mittag–Leffler conditions, exact products, and derived
  limits. `HA-16` defines only the $\lim^1$ convergence obstruction needed
  there; a later derived-limits page should own the functor theory.
- **3.6 “Universal Coefficient Theorems”** — `included`:
  both UCT short exact sequence theorems and their nonnatural-splitting items on
  `HA-11`.

**Chapter 4, “Homological Dimension.”**

- **4.1 “Dimensions”** — `included`: projective, injective, flat, global, and
  weak global dimensions and their Ext/Tor vanishing criteria on `HA-9`/`HA-10`.
- **4.2 “Rings of Small Dimension”** — `included` at the general level in
  `prop-global-dimension-zero-characterises-semisimple-module-categories`,
  `prop-hereditary-rings-have-global-dimension-at-most-one`, and
  `thm-the-integers-have-global-dimension-one`; classification of special rings
  is `out-of-scope` to abstract/commutative algebra.
- **4.3 “Change of Rings Theorems”** — `deferred`: change-of-rings spectral sequences
  require a dedicated restriction/extension-of-scalars page and ring hypotheses
  not used by any commissioned seam.
- **4.4 “Local Rings”** — `out-of-scope`: local-ring structure belongs to
  `commutative-algebra`; this track supplies the dimension invariants it cites.
- **4.5 “Koszul Complexes”** — `out-of-scope`: explicitly assigned to
  `commutative-algebra` with regular sequences and depth.
- **4.6 “Local Cohomology”** — `out-of-scope`: requires ideals/support,
  Čech/Koszul machinery, and sheaf/commutative-algebra development.

**Chapter 5, “Spectral Sequences.”**

- **5.1 “Introduction”** — `inline` in `def-homological-spectral-sequence` and
  `def-spectral-sequence-computation-record`.
- **5.2 “Terminology”** — `included`: spectral sequence, stabilization,
  collapse, abutment, and extension-problem definitions on `HA-15`.
- **5.3 “The Leray–Serre Spectral Sequence”** — `out-of-scope`: its statement
  requires fibrations, local coefficients, and singular-chain topology owned by
  `algebraic-topology`; this track supplies only the algebraic engine.
- **5.4 “Spectral Sequence of a Filtration”** — `included`: `HA-15` items
  10–29.
- **5.5 “Convergence”** — `included`: bounded abutment on `HA-15` and weak/
  strong/complete convergence on `HA-16`.
- **5.6 “Spectral Sequences of a Double Complex”** — `included`: row and column spectral
  sequences of a double complex on `HA-16`.
- **5.7 “Hyperhomology”** — `included`: Cartan–Eilenberg resolution and the two
  hypercohomology spectral sequences on `HA-17`.
- **5.8 “Grothendieck Spectral Sequences”** — `included`:
  `thm-grothendieck-spectral-sequence` and its naturality/five-term corollaries.
- **5.9 “Exact Couples”** — `included`: `def-exact-couple` through
  `thm-an-exact-couple-generates-a-spectral-sequence`.

**Chapter 6, “Group Homology and Cohomology.”**

- **6.1 “Definitions and First Properties”** — `included`:
  `def-group-cohomology-as-a-derived-functor`,
  `def-group-homology-as-a-derived-functor`, and both long exact sequences.
- **6.2 “Cyclic and Free Groups”** — `included` for the periodic cyclic
  computation on `HA-12-examples` and the periodic nonvanishing used in
  `thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free`;
  the free-group cohomological-dimension calculation is `out-of-scope` to
  `group-theory` because it needs the free-group augmentation-ideal theorem.
- **6.3 “Shapiro's Lemma”** — `included`: both Shapiro theorems on `HA-12`.
- **6.4 “Crossed Homomorphisms and $H^1$”** — `out-of-scope`: explicitly owned
  by `group-theory`; this track supplies the derived $H^1$ object it interprets.
- **6.5 “The Bar Resolution”** — `included`: bar, normalized bar, and concrete
  cochain comparison items on `HA-12`.
- **6.6 “Factor Sets and $H^2$”** — `out-of-scope`: group extensions/factor
  sets are the low-degree group-theoretic interpretation owned by `group-theory`.
- **6.7 “Restriction, Corestriction, Inflation and Transfer”** — `included` for
  restriction/corestriction in `def-restriction-and-corestriction-on-group-cohomology`
  and the index composite; `inline` for inflation in the LHS five-term sequence;
  transfer as an independent group-homology theory is `out-of-scope` to
  `group-theory`.
- **6.8 “The Spectral Sequence”** — `included` as the
  Lyndon/Hochschild–Serre construction:
  `thm-lyndon-hochschild-serre-spectral-sequence` and its five-term sequence.
- **6.9 “Universal Central Extensions”** — `out-of-scope`: requires perfect
  groups, Schur multipliers, and central-extension classification owned by
  `group-theory`.
- **6.10 “Covering Spaces in Topology”** — `out-of-scope`: belongs to algebraic topology;
  no topological model is needed for the derived definition.
- **6.11 “Galois Cohomology and Profinite Groups”** — `deferred`: requires
  topological groups, continuous cochains, discrete/topological modules, and
  Galois theory beyond this algebraic track.

**Chapter 10, “The Derived Category.”**

- **10.1 “The Category $K(\mathcal A)$”** — `included`:
  `def-homotopy-category-of-chain-complexes` and the cone-triangle definitions.
- **10.2 “Triangulated Categories”** — `included`: `HA-13` items 1–30.
- **10.3 “Localization and the Calculus of Fractions”** — `included`:
  `HA-14` items 1–7.
- **10.4 “The Derived Category”** — `included`: `HA-14` items 8–18.
- **10.5 “Derived Functors”** — `included`: bounded total derived functors on
  `HA-14` items 36–42.
- **10.6 “The Total Tensor Product”** — `included`:
  `def-derived-tensor-product-in-the-bounded-above-setting` and its Tor theorem.
- **10.7 “Ext and RHom”** — `included`: Ext as derived-category Hom and derived
  Hom on `HA-14`.
- **10.8 “Replacing Spectral Sequences”** — `inline` in the projective/
  injective models of the derived category and the identification of derived
  tensor/Hom; no claim is made that spectral sequences are dispensable.
- **10.9 “The Topological Derived Category”** — `out-of-scope`: requires spectra or
  topological derived categories, an algebraic-topology/stable-homotopy subject.

### 24.3 Rotman heading harvest — Chs 3 and 5–10

**Chapter 3, “Special Modules.”**

- **3.1 “Projective Modules”** — `already-published` as
  `def-projective-module`, `thm-projective-module-characterizations`, and
  `thm-direct-sums-of-projectives-and-enough-projectives`; resolution
  consequences are `included` on `HA-5`.
- **3.2 “Injective Modules”** — `already-published` as
  `def-injective-module`, `thm-injective-module-characterizations`,
  `thm-baer-criterion-for-injective-modules`, and
  `thm-module-categories-have-enough-injectives`.
- **3.3 “Flat Modules”** — `out-of-scope` to the abstract-algebra tensor page,
  whose scaffolded `def-flat-and-faithfully-flat-modules-and-ring-maps` is consumed by `HA-10`; Tor characterisations
  are `included` there as
  `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes`.
- **3.3.1 “Purity”** — `deferred`: pure exact sequences, pure projectives and
  pure injectives form a separate module-theoretic subject and are unused by
  the commissioned spine.

**Chapter 5, “Setting the Stage.”**

- **5.1 “Categorical Constructions”**, **5.2 “Limits”**, and **5.3 “Adjoint
  Functor Theorem for Modules”** — `out-of-scope`: category-theory foundations
  belong to the finished `monoidal-abelian-categories` scaffold and are cited.
- **5.4 “Sheaves”**, **5.4.1 “Manifolds”**, and **5.4.2 “Sheaf
  Constructions”** — `out-of-scope`: sheaf theory and manifolds are absent
  subject areas; de Rham applications belong to `differential-geometry`.
- **5.5 “Abelian Categories”** — `out-of-scope`: owned by `abelian-categories`
  and `exactness-and-the-member-calculus`.
- **5.5.1 “Complexes”** — `included`: `HA-1` through `HA-4`.

**Chapter 6, “Homology.”**

- **6.1 “Homology Functors”** — `included`: complexes, homotopy, cones, and
  long exact sequences on `HA-1`–`HA-4`.
- **6.2 “Derived Functors”** — `included`: the data-supplied construction and
  universality on `HA-6`–`HA-7`.
- **6.2.1 “Left Derived Functors”** — `included`: `HA-5` comparison/resolution
  items and `HA-6` left-derived items.
- **6.2.2 “Axioms”** — `included`: abstract $\delta$-functors, effacement, and
  universality on `HA-7`.
- **6.2.3 “Covariant Right Derived Functors”** — `included`: `HA-6` right-
  derived items and their delta structure.
- **6.2.4 “Contravariant Right Derived Functors”** — `included`:
  `prop-contravariant-derived-functors-are-derived-on-the-opposite-category`
  and the projective Ext construction.
- **6.3 “Sheaf Cohomology”**, **6.3.1 “Čech Cohomology”**, and **6.3.2
  “Riemann–Roch Theorem”** — `out-of-scope`: require sheaves, ringed spaces,
  and algebraic geometry; none is needed as a prerequisite here.

**Chapter 7, “Tor and Ext.”**

- **7.1 “Tor”** — `included`: `HA-10` items 1–23.
- **7.1.1 “Domains”** — `included` only in the PID theorem
  `thm-over-a-pid-flat-is-equivalent-to-torsion-free`; broader domain theory is
  `out-of-scope` to commutative algebra.
- **7.1.2 “Localization”** — `out-of-scope` to the tensor/localization portion
  of abstract/commutative algebra; its flatness result may be cited as
  `ex-localization-is-flat-and-has-vanishing-positive-tor` but is non-load-bearing.
- **7.2 “Ext”** and **7.2.1 “Baer Sum”** — `included`: `HA-8` and `HA-9`.
- **7.3 “Cotorsion Groups”** — `deferred`: cotorsion pairs and the structure
  theory of abelian groups are a distinct advanced module-theory topic.
- **7.4 “Universal Coefficients”** — `included`: both UCTs on `HA-11`.

**Chapter 8, “Homology and Rings.”**

- **8.1 “Dimensions of Rings”** — `included`: `HA-9`/`HA-10` dimension and
  Ext/Tor-detection items.
- **8.2 “Hilbert's Syzygy Theorem”** — `out-of-scope`: polynomial rings and its
  proof belong to `commutative-algebra`; this track supplies global dimension.
- **8.3 “Stably Free Modules”** — `deferred`: cancellation and algebraic
  $K$-theory are not required by any seam.
- **8.4 “Commutative Noetherian Local Rings”** — `out-of-scope`: assigned to
  `commutative-algebra`.

**Chapter 9, “Homology and Groups.”**

- **9.1 “Group Extensions”**, **9.1.1 “Semidirect Products”**, **9.1.2
  “General Extensions and Cohomology”**, and **9.1.3 “Stabilizing
  Automorphisms”** — `out-of-scope`: `group-theory` owns extensions and the
  low-degree $H^2$ interpretation; this track supplies derived $H^n$.
- **9.2 “Group Cohomology”** — `included`:
  `def-group-cohomology-as-a-derived-functor` and its LES.
- **9.3 “Bar Resolutions”** — `included`: `HA-12` items 12–24.
- **9.4 “Group Homology”** — `included`:
  `def-group-homology-as-a-derived-functor` and the homological Shapiro lemma.
- **9.4.1 “Schur Multiplier”** — `out-of-scope`: owned by `group-theory` with
  central extensions.
- **9.5 “Change of Groups”** — `included`: restriction, induction,
  coinduction, and Shapiro on `HA-12`.
- **9.5.1 “Restriction and Inflation”** — `included` for restriction and the
  LHS inflation edge; low-degree interpretation is `out-of-scope` to
  `group-theory`.
- **9.6 “Transfer”** — `out-of-scope`: group-theoretic transfer belongs to
  `group-theory`; only cohomological corestriction needed for annihilation is
  constructed here.
- **9.7 “Tate Groups”** — `deferred`: complete resolutions and negative-degree
  Tate cohomology form a later group-cohomology sequel.
- **9.8 “Outer Automorphisms of $p$-Groups”** — `out-of-scope`: specialised
  finite-group application.
- **9.9 “Cohomological Dimension”** — `included`:
  `def-cohomological-dimension-of-a-group` and its vanishing criterion.
- **9.10 “Division Rings and Brauer Groups”** — `out-of-scope`: belongs to
  abstract algebra/Galois cohomology.

**Chapter 10, “Spectral Sequences.”**

- **10.1 “Bicomplexes”** — `included`: `HA-16` items 1–12.
- **10.2 “Filtrations and Exact Couples”** — `included`: `HA-15` filtrations
  and `HA-16` exact couples.
- **10.3 “Convergence”** — `included`: `HA-16` items 22–33.
- **10.4 “Homology of the Total Complex”** — `included`: row/column spectral
  sequences and acyclic assembly on `HA-16`.
- **10.5 “Cartan–Eilenberg Resolutions”** — `included`: `HA-17` items 1–8.
- **10.6 “Grothendieck Spectral Sequences”** — `included`: `HA-17` items 9–18.
- **10.7 “Groups”** — `included`: the LHS spectral sequence on `HA-17`.
- **10.8 “Rings”** — `deferred`: change-of-rings spectral sequences require a
  dedicated scalar-change page and commutative-algebra inputs.
- **10.9 “Sheaves”** — `out-of-scope`: sheaf cohomology is not present.
- **10.10 “Künneth Theorems”** — `included`: `HA-11` classical theorem and
  `HA-17` Künneth spectral sequence/agreement.

### 24.4 Stacks Project harvest

#### *Homological Algebra*, §§12–32

- **§12 “Cohomological delta-functors”** — `included`:
  `def-cohomological-delta-functor`, its morphisms, effacement and universality.
- **§13 “Complexes”** — `included`: `HA-1` complex, homology, chain-map,
  exactness, and degreewise-category items.
- **§14 “Homotopy and the shift functor”** — `included`: `HA-2` homotopy,
  homotopy-category, and shift items.
- **§15 “Truncation of complexes”** — `included`:
  `def-brutal-truncation-of-a-complex`,
  `def-canonical-truncation-of-a-complex`, and the truncation triangle.
- **§16 “Graded objects”** — `inline` in
  `def-graded-morphism-of-chain-complexes`, the Hom complex, and the grading
  conventions for Ext and spectral sequences.
- **§17 “Additive monoidal categories”** — `out-of-scope` at the structural
  level to `monoidal-abelian-categories`; its signed tensor-complex consequence
  is `included` in `def-tensor-product-total-complex-of-chain-complexes`.
- **§18 “Double complexes and associated total complexes”** — `included`:
  Hom/tensor double complexes, totalisation, and `HA-16` items 1–12.
- **§19 “Filtrations”** — `included`: `HA-15` items 1–9.
- **§20 “Spectral sequences”** — `included`: `HA-15` items 10–35.
- **§21 “Spectral sequences: exact couples”** — `included`: `HA-16` items
  13–21.
- **§22 “Differential objects”** — `inline` in the exact-couple derivation and
  spectral-sequence definitions; a separate page would duplicate the complex
  formalism.
- **§23 “Filtered differential objects”** — `inline` in
  `def-filtered-chain-complex` and the filtered spectral-sequence construction.
- **§24 “Filtered complexes”** — `included`: the filtered-complex spectral
  sequence and convergence items on `HA-15`/`HA-16`.
- **§25 “Double complexes”** — `included`: row/column filtrations and spectral
  sequences on `HA-16`.
- **§26 “Double complexes of abelian groups”** — `included` as the concrete
  examples and acyclic-assembly theorem on `HA-16`; special element chases are
  confined to module/abelian-group examples.
- **§27 “Injectives”** — `out-of-scope` for the injective-object definition
  supplied by `MA-9`; `included` for injective resolutions and comparison on
  `HA-5`.
- **§28 “Projectives”** — same disposition: object definition owned by `MA-9`,
  resolution/comparison consequences `included` on `HA-5`.
- **§29 “Injectives and adjoint functors”** — `inline` in the preservation
  hypothesis of
  `prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses`
  and in the Grothendieck spectral-sequence acyclicity check; adjunction theory
  itself is cited.
- **§30 “Essentially constant systems”** — `inline` in stabilization and the
  convergence distinction on `HA-15`/`HA-16`; no standalone pro-object theory
  is introduced.
- **§31 “Inverse systems”** — `deferred` as a full theory: `HA-16` uses only
  the countable $\lim^1$ obstruction; derived inverse limits are the Weibel
  §3.5 denial.
- **§32 “Exactness of products”** — `deferred`: AB4* and derived products need
  a products/limits sequel. The page merely refuses to identify product and sum
  totalisation or assume products exact.

#### *Derived Categories*, §§2–27

- **§2 “Triangulated categories”**, **§3 “The definition of a triangulated
  category”**, and **§4 “Elementary results on triangulated categories”** —
  `included`: `HA-13` items 1–30.
- **§5 “Localization of triangulated categories”**, **§6 “Quotients of
  triangulated categories”**, and **§7 “Adjoints for exact functors”** —
  `included`: roof localization, Verdier quotient, and exact-functor items on
  `HA-14`; general adjoint existence remains in the category track.
- **§8 “The homotopy category”** — `included`: `HA-2` items 16–23.
- **§9 “Cones and termwise split sequences”** — `included`: `HA-3` cone and
  degreewise-split sequence items.
- **§10 “Distinguished triangles in the homotopy category”** — `included`:
  `HA-13` items 31–40.
- **§11 “Derived categories”** — `included`: `HA-14` items 8–18.
- **§12 “The canonical delta-functor”** — `included`:
  `prop-cohomology-factors-through-the-derived-category` and the truncation
  triangle; it is reconciled with `HA-7` rather than used to redefine classical
  derived functors.
- **§13 “Filtered derived categories”** — `deferred`: filtered derived
  categories require a second localization and filtered quasi-isomorphism
  theory. The needed ordinary filtered-complex spectral sequence is fully built
  on `HA-15` without it.
- **§14 “Derived functors in general”** — `included`: bounded total derived
  functors on `HA-14`.
- **§15 “Derived functors on derived categories”** — `included`: the exact
  total-derived-functor statements and change-of-replacement theorem.
- **§16 “Higher derived functors”** — `included`: identification of classical
  $L_n/R^n$ with homology objects of total derived functors.
- **§17 “Triangulated subcategories of the derived category”** — `included`:
  triangulated/thick subcategory items and bounded subcategories.
- **§18 “Injective resolutions”**, **§19 “Projective resolutions”**, and **§20
  “Right derived functors and injective resolutions”** — `included`: bounded
  resolution models and total derived functors on `HA-14`, with classical
  resolution comparison on `HA-5`/`HA-6`.
- **§21 “Cartan–Eilenberg resolutions”** — `included`: `HA-17` items 1–8.
- **§22 “Composition of right derived functors”** — `included`:
  `thm-grothendieck-spectral-sequence` and its collapse/composition corollaries.
- **§23 “Resolution functors”** and **§24 “Functorial injective embeddings and
  resolution functors”** — `included` in the narrow, honest forms
  `prop-the-iterated-free-module-resolution-is-canonical-in-zf` and
  `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`;
  arbitrary class-indexed resolution functors remain data-supplied.
- **§25 “Right derived functors via resolution functors”** — `included`:
  `HA-6`/`HA-14` data-supplied functor constructions.
- **§26 “Filtered derived category and injective resolutions”** — `deferred`:
  it depends on the denied filtered-derived-category machinery and is not
  needed for the commissioned spectral sequences.
- **§27 “Ext groups”** — `included`: Ext as derived-category Hom and Yoneda
  composition.

#### *Injectives*, §§19.10–19.12

- **§19.10 “Grothendieck's AB conditions”** — `out-of-scope` to `MA-9`, which
  mints the Grothendieck-category axioms consumed here.
- **§19.11 “Injectives in Grothendieck categories”** — `included`:
  `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings` and
  its generator/pushout/transfinite/cofinality lemmas. Tag `079H` was read in
  full and the item plan follows that proof.
- **§19.12 “K-injectives in Grothendieck categories”** — `deferred`: the
  theorem supplies unbounded K-injective replacements, but proving it would
  require the full unbounded/transfinite complex machinery denied in §26. The
  bounded-below theorem on `HA-14` is proved directly.

### 24.5 Sharifi lecture-note harvest — §§2.7–2.8, 3.1–3.7, 4.1–4.3

- **2.7 “Complexes”** — `included`: `HA-1`–`HA-4`.
- **2.8 “Total complexes”** — `included`: Hom/tensor/double-complex
  totalisation and its sign checks on `HA-8`, `HA-10`, and `HA-16`.
- **3.1 “$\delta$-functors”** — `included`: `HA-7`.
- **3.2 “Projective objects”** — `out-of-scope` for the object definition to
  `MA-9`; `included` for resolutions and comparison on `HA-5`.
- **3.3 “Left derived functors”** — `included`: data-supplied `HA-6` items.
- **3.4 “Injectives and right derived functors”** — `included`: `HA-5`/`HA-6`.
- **3.5 “Tor and Ext”** — `included`: `HA-8`–`HA-10`.
- **3.6 “Group homology and cohomology”** — `included`: `HA-12`.
- **3.7 “Derived functors of limits”** — `deferred`: same derived-inverse-limit
  reason as Weibel §3.5.
- **4.1 “Spectral sequences”** — `included`: `HA-15` abstract definitions.
- **4.2 “Filtrations on complexes”** — `included`: `HA-15` construction and
  bounded convergence.
- **4.3 “Grothendieck spectral sequences”** — `included`: `HA-17` items 9–17.

### 24.6 Rutgers MATH 560 lecture harvest

- **Lecture 3 “Snakes, long exact sequences, chain homotopies”** —
  `included`: `HA-2` and `HA-4`; the snake lemma itself is `out-of-scope` to
  `the-diagram-lemmas-in-an-abelian-category`.
- **Lecture 4 “A look at some (derived) functors of interest, introduction to
  delta functors”** — `included`: `HA-6`/`HA-7`.
- **Lecture 5.1 “Chasing diagrams with the Yoneda lemma”** — `inline` in the
  categorical naturality/uniqueness proofs of connecting maps and universality.
- **Lecture 5.2 “Universal and effaceable delta functors”** — `included`:
  `HA-7` items 5–24.
- **Lecture 6 “Projective resolutions, projective modules”** — `included` for
  resolutions/comparison on `HA-5`; projective objects are cited.
- **Lecture 7 “Left derived functors”** — `included`: `HA-6` left-derived
  construction.
- **Lecture 9 “Digression into quotients of Abelian categories”** —
  `out-of-scope`: Serre quotients/localization of abelian categories are not
  needed for the derived-category localization at quasi-isomorphisms.
- **Lecture 10 “There are enough injective modules”** — `already-published` as
  `thm-module-categories-have-enough-injectives`; its resolution consequence is
  `included` on `HA-5`.
- **Lecture 11 “Double complexes and the acyclic assembly lemma”** —
  `included`: Ext/Tor balance and `HA-16` acyclic assembly.
- **Lecture 12 “Mapping cones and balancing Tor”** — `included`: `HA-3` and
  `HA-10`.
- **Lecture 13 “Balancing (conclusion). Intro to group cohomology and sheaf
  cohomology”** — `included` for Ext/Tor balance and group cohomology;
  `out-of-scope` for sheaf cohomology.
- **Lecture 14 “Group cohomology”** — `included`: `HA-12` derived definition.
- **Lecture 15 “Bar resolution and not quite spectral sequences”** —
  `included`: bar resolution on `HA-12`; its proto-filtration discussion is
  `inline` in `HA-15`.
- **Lecture 16 “What are spectral sequences?”** — `included`: `HA-15`.
- **Lecture 17 “The spectral sequence of a filtered complex”** — `included`:
  `HA-15` items 10–35.
- **Lecture 18 “The spectral sequence of a double complex”** — `included`:
  `HA-16` items 1–12.
- **Lecture 19 “Hyperderived functors”** — `included`: `HA-17` items 1–5.
- **Lecture 20 “The hyperderived functor spectral sequences”** — `included`:
  `HA-17` items 6–8.
- **Lecture 21 “From the hyperderived functor spectral sequence to the
  Grothendieck spectral sequence”** — `included`: `HA-17` items 9–18.
- **Lecture 22 “Sheaf cohomology, de Rham cohomology”** — `out-of-scope`:
  `differential-geometry` owns de Rham and a future sheaf track owns sheaf
  cohomology; body not used as pair backing.
- **Lecture 23 “Overview of derived couples. Introduction to homological
  dimension of rings”** — `included`: exact couples on `HA-16` and dimension
  on `HA-9`/`HA-10`.

### 24.7 Hilton–Stammbach heading harvest — Chs III–VI and VIII

**Chapter III, “Extensions of Modules.”**

- **1 “Extensions”**, **2 “The Functor Ext”**, **3 “Ext Using Injectives”**,
  **4 “Computation of some Ext-Groups”**, and **5 “Two Exact Sequences”** —
  `included`: `HA-8`/`HA-9`, including both-variable LES and derived/Yoneda
  comparison.
- **6 “A Theorem of Stein–Serre for Abelian Groups”** — `deferred`: a
  specialised abelian-group structure theorem not required by the graduate
  spine.
- **7 “The Tensor Product”** — `out-of-scope`: owned by abstract algebra and
  cited by `HA-10`.
- **8 “The Functor Tor”** — `included`: `HA-10`.

**Chapter IV, “Derived Functors.”**

- **1 “Complexes”**, **2 “The Long Exact (Co)Homology Sequence”**, and **3
  “Homotopy”** — `included`: `HA-1`–`HA-4`.
- **4 “Resolutions”** — `included`: `HA-5`.
- **5 “Derived Functors”** and **6 “The Two Long Exact Sequences of Derived
  Functors”** — `included`: `HA-6`/`HA-7`.
- **7 “The Functors $\operatorname{Ext}^n$ Using Projectives”**, **8 “The
  Functors $\operatorname{Ext}^n$ Using Injectives”**, and **9
  “$\operatorname{Ext}^n$ and $n$-Extensions”** — `included`: balance and
  Yoneda Ext on `HA-8`/`HA-9`.
- **10 “Another Characterization of Derived Functors”** — `included`:
  effacement and universality on `HA-7`.
- **11 “The Functor $\operatorname{Tor}_n$”** — `included`: `HA-10`.
- **12 “Change of Rings”** — `deferred`: same dedicated scalar-change seam as
  Weibel §4.3 and Rotman §10.8.

**Chapter V, “The Künneth Formula.”**

- **1 “Double Complexes”** — `included`: `HA-16`.
- **2 “The Künneth Theorem”**, **3 “The Dual Künneth Theorem”**, and **4
  “Applications of the Künneth Formulas”** — `included`: Künneth and UCT
  forms/examples on `HA-11`; topological applications are `out-of-scope` to
  algebraic topology.

**Chapter VI, “Cohomology of Groups.”**

- **1 “The Group Ring”** — `out-of-scope` to the group/abstract-algebra owner;
  its module convention is consumed on `HA-12`.
- **2 “Definition of (Co)Homology”**, **3 “$H^0,H_0$”**, **7 “The
  (Co)Homology of Finite Cyclic Groups”**, **12 “Reduction Theorems”**, **13
  “Resolutions”**, **15 “The Universal Coefficient Theorem and the
  (Co)Homology of a Product”**, and **16 “Groups and Subgroups”** — `included`:
  `HA-12`, its cyclic examples and Shapiro/change-of-groups items.
- **4 “$H^1,H_1$ with Trivial Coefficient Modules”**, **5 “The Augmentation
  Ideal, Derivations, and the Semi-Direct Product”**, **6 “A Short Exact
  Sequence”**, **8 “The 5-Term Exact Sequences”**, **9 “$H_2$, Hopf's Formula,
  and the Lower Central Series”**, and **10 “$H^2$ and Extensions”** —
  `out-of-scope` to `group-theory` as low-degree interpretations; the abstract
  five-term LHS sequence itself is `included` on `HA-17`.
- **11 “Relative Projectives and Relative Injectives”** — `deferred`: relative
  homological algebra is a separate extension of the resolution theory.
- **14 “The (Co)Homology of a Coproduct”** — `out-of-scope`: requires free
  products and group-theoretic decomposition results owned by `group-theory`.

**Chapter VIII, “Exact Couples and Spectral Sequences.”**

- **1 “Exact Couples and Spectral Sequences”**, **2 “Filtered Differential
  Objects”**, **3 “Finite Convergence Conditions for Filtered Chain
  Complexes”**, **4 “The Ladder of an Exact Couple”**, **5 “Limits”**, **6
  “Rees Systems and Filtered Complexes”**, **7 “The Limit of a Rees System”**,
  and **8 “Completions of Filtrations”** — `included` across `HA-15` and
  `HA-16`; Rees-system details are `inline` in the complete/exhaustive
  convergence proof rather than separately named.
- **9 “The Grothendieck Spectral Sequence”** — `included`: `HA-17` items 9–18.

### 24.8 Yekutieli heading harvest — §§8–14

- **8 “Triangulated Categories”**, **8.1 “Triangulated Categories”**, and
  **8.2 “Triangulated Functors”** — `included`: `HA-13` definitions, axioms,
  exact functors and formal consequences.
- **9 “The Homotopy Category is Triangulated”**, **9.1 “Standard
  Triangles”**, and **9.2 “Distinguished triangles in $K(M)$”** — `included`:
  `HA-13` items 31–40.
- **10 “Localization of Categories”**, **10.1 “Definition of localization”**,
  and **10.2 “Ore localization”** — `included`: `HA-14` items 1–7.
- **11 “The Derived Category”**, **11.1 “Localization of linear categories”**,
  **11.2 “Localization of triangulated categories”**, and **11.3 “The derived
  category”** — `included`: `HA-14` items 8–18.
- **12 “Full Subcategories of the Derived Category”**, **12.1 “General facts”**,
  **12.2 “Bounded complexes”**, **12.3 “Thick subcategories of $M$”**, and
  **12.4 “The embedding of $M$ in $D(M)$”** — `included`: bounded variants,
  thick subcategories, the canonical heart, and Ext-as-Hom.
- **13 “Resolutions”**, **13.1 “More on K-injectives”**, **13.2 “Bounded below
  injective resolutions”**, and **13.3 “More on K-projectives”** — `included`
  in the bounded forms on `HA-14`; unbounded forms are `deferred` in §26.
- **14 “Derived Functors”**, **14.1 “Right derived functors”**, **14.2 “Left
  derived functor”**, **14.3 “Derived bifunctors”**, **14.4 “The left derived
  tensor functor”**, and **14.5 “The right derived Hom functor”** — `included`:
  `HA-14` items 36–46.

### 24.9 Gelfand–Manin preview/contents harvest — Chs III–IV

Because only the contents and a limited preview were reachable, every row is
supplemental and no claim is sourced solely here.

- **III.1 “Complexes as Generalized Objects”** — `included` elsewhere on
  `HA-1`/`HA-14`; `GM` only confirms the modern framing.
- **III.2 “Derived Categories and Localization”**, **III.3 “Triangles as
  Generalized Exact Triples”**, **III.4 “Derived Category as the Localization
  of Homotopic Category”**, and **III.5 “The Structure of the Derived
  Category”** — `included` on `HA-13`/`HA-14`, backed load-bearingly by `W`,
  `SP-D`, and `Y`.
- **III.6 “Derived Functors”** — `included`: `HA-14` total derived functors.
- **III.7 “Derived Functor of the Composition. Spectral Sequence”** —
  `included`: `HA-17` Grothendieck sequence.
- **III.8 “Sheaf Cohomology”** — `out-of-scope`: no sheaf track exists.
- **IV.1 “Triangulated Categories”** and **IV.2 “Derived Categories Are
  Triangulated”** — `included`: `HA-13` and `HA-14`, independently sourced.
- **IV.3 “An Example: The Triangulated Category of $\Lambda$-Modules”** —
  `inline` in `HA-13-examples` and the derived category of modules; no separate
  page is needed.
- **IV.4 “Cores”** — `deferred`: $t$-structures beyond the canonical one,
  torsion pairs, and perverse hearts require sheaf/representation applications;
  `HA-14` includes only the canonical $t$-structure and its heart.

### 24.10 Named-result-heading cross-check

The preceding subsections dispose of every section/subsection heading in each
read range. This final cross-check records the non-generic named-result headings
encountered in those ranges; a display headed only “Theorem”, “Lemma”, or a
number is governed by its containing section's disposition above.

- **Weibel:** “Comparison Theorem” 2.2.6 and its injective dual 2.3.7 are
  `included` as the existence and homotopy-uniqueness items on `HA-5`;
  “Horseshoe Lemma” 2.2.8 is `included` in both projective and injective forms
  on `HA-5`; “Acyclic Assembly Lemma” 2.7.3 is `included` on `HA-16` and used
  in the balance proofs on `HA-8`/`HA-10`; “Künneth formula” 3.6.1,
  “Universal Coefficient Theorem for Homology” 3.6.2, and the cohomological
  universal-coefficient theorem in the same section are `included` on `HA-11`;
  “Grothendieck Spectral Sequence Theorem” 5.8.3 is `included` on `HA-17`;
  “Classical Convergence Theorem” 5.9.7 is `included` on `HA-16`; “Shapiro's
  Lemma” 6.3.2 is `included` in both homology and cohomology forms on `HA-12`;
  the Lyndon/Hochschild–Serre result under §6.8 “The Spectral Sequence” is `included`
  on `HA-17`; Schur–Zassenhaus and the Hopf formula in the group-application
  range are `out-of-scope` to `group-theory` as recorded in §26; and the
  “Generalized Existence Theorem” 10.5.9 is `inline` in
  the bounded replacement/existence hypotheses on `HA-14`, not promoted to an
  unbounded existence assertion.
- **Rotman:** “Fundamental Theorem of Homological Algebra” is `included` as
  `thm-long-exact-sequence-in-homology` plus its naturality items on `HA-4`;
  the comparison and horseshoe results are `included` on `HA-5`; the named
  Baer-sum/Yoneda extension results are `included` on `HA-9`; the universal-
  coefficient and Künneth theorems are `included` on `HA-11`; Hilbert's
  Syzygy Theorem is `out-of-scope` to `commutative-algebra` for the specific
  polynomial-ring statement; the Stallings–Swan characterization of free
  groups is `out-of-scope` to `group-theory`; and the Grothendieck spectral
  sequence is `included` on `HA-17`.
- **Hilton–Stammbach:** the named Künneth theorem, dual Künneth theorem,
  universal coefficient theorem, and Grothendieck spectral sequence are
  already headings in §24.7 and are `included` on `HA-11`/`HA-17`; the
  Stein–Serre theorem for abelian groups is `deferred` there for its stated
  specialised structure-theory reason.
- **Stacks Project:** results in the read ranges use numbered lemma/proposition/
  theorem tags rather than separate eponymous result headings. Tag `079H`,
  “A Grothendieck abelian category has functorial injective embeddings”, is
  `included` as the generator/pushout/transfinite construction on `HA-5`;
  every surrounding section heading is disposed of in §24.4.
- **Sharifi, Rutgers, and Yekutieli:** their named curricular headings are the
  section/lecture headings enumerated in §§24.5, 24.6, and 24.8. In particular,
  “Universal and effaceable delta functors”, “the acyclic assembly lemma”, and
  “the Grothendieck spectral sequence” are `included` on `HA-7`, `HA-16`, and
  `HA-17`; the sheaf/de Rham heading is `out-of-scope` for the owner named in
  §24.6.
- **Gelfand–Manin:** only the contents/preview headings in §24.9 were
  harvestable, so no unseen named theorem is claimed read or used. Every such
  heading is supplemental and already has a disposition there.

---

## 25. Convention disagreements and adopted resolutions

| issue | source disagreement | library decision and reason |
|---|---|---|
| chain/cochain grading | Weibel's primary chain differential lowers degree; Sharifi and derived-category sources often work cohomologically | Both are defined, with lower indices/lowering and upper indices/raising. Translation is explicit. This prevents Ext/group cohomology from inheriting a silent chain sign. |
| shift notation | Sources reverse whether $C[1]_n=C_{n-1}$ or $C_{n+1}$ and hence reverse the final cone term | §3.1 fixes $(C[k])_n=C_{n-k}$ and $d_{C[k]}=(-1)^kd$. Every imported formula is translated. |
| cone order/sign | Some sources write $C[-1]\oplus D$ because their homological shift symbol is opposite, or use cochain cones | Use $\operatorname{Cone}(f)_n=D_n\oplus C_{n-1}$ and $d(d,c)=(d_Dd+f(c),-d_Cc)$, so the quotient is $C[1]$ under this file's convention. The canonical short exact sequence and LES determine all later signs. |
| exact versus distinguished triangle | Some introductory texts call cone triangles “exact” before axiomatizing triangulated categories | `HA-3` says **cone triangle**. “Distinguished/exact triangle” is licensed only on `HA-13`. |
| projective/injective resolution orientation | Projective resolutions are augmented chain complexes; injective resolutions are coaugmented cochain complexes, but sources sometimes reindex both as cochain complexes | Keep the natural orientations and define deleted resolutions. Reindex only through the explicit chain/cochain dictionary. |
| “well defined derived functor” | Textbooks normally say choose a resolution of every object under tacit global choice | SE-D3 controls: class-indexed resolution families are supplied data. Comparison gives natural uniqueness relative to data; no unconditional global selection. |
| Ext construction | Some texts define Ext with projectives, some with injectives, and derived-category texts as shifted Hom | Both classical constructions are separately defined and balanced on `HA-8`; shifted Hom is a later theorem on `HA-14`. None is declared the definition of the others. |
| Tor handedness | Commutative-ring texts suppress left/right modules | For arbitrary $R$, first input right and second input left: $\operatorname{Tor}^R_n(N,M)$. Symmetry is stated only over a commutative ring or with suitable bimodule structure. |
| double-complex sign | Some sources demand $d_hd_v=d_vd_h$ and insert a sign in totalisation; others demand anticommutation | The library's double complexes anticommute and totalize with $d_h+d_v$. When importing a commuting convention, multiply one differential by the standard degree sign. |
| sum versus product totalization | Bounded sources use “the total complex” because diagonals are finite; unbounded sources distinguish $\oplus$ and $\prod$ | Both are defined on `HA-16`; they are identified only for finite diagonals. Ext/Tor balance is first quadrant, so the ambiguity is absent there. |
| spectral-sequence starting page | Weibel/Rotman/Stacks differ between $E^0$, $E^1$, and $E_1$ conventions | Filtered complexes start at $E^0=\operatorname{gr}C$ and $E^1=H(\operatorname{gr}C)$. Every theorem prints the bidegree and page of its displayed term. |
| spectral differential | Homological and cohomological sources reverse arrows and superscript/subscript placement | §3.3 fixes $(-r,r-1)$ homologically and $(r,1-r)$ cohomologically. No result is copied without reindexing. |
| convergence | Weibel distinguishes convergence conditions; the Stacks Project explicitly warns terminology is inconsistent; some prose uses $E_r\Rightarrow H$ loosely | Stabilization, weak abutment to $\operatorname{gr}H$, and strong convergence are three definitions. A theorem must name the filtration, completeness/separatedness, and extension problem. |
| triangulated rotation sign | Equivalent axiom systems move a minus sign between rotation, shift, and cone maps | Left rotation ends in $-f[1]$. Cone calculations and long exact Hom are authored against that convention once. |
| localization roofs | Sources use left roofs $X\leftarrow X'\to Y$ or right roofs $X\to Y'\leftarrow Y$ | Use left roofs throughout `HA-14`; the opposite calculus is a proved equivalent description only if useful, not mixed into formulas. |
| group cochains | Homogeneous equivariant functions on $G^{n+1}$ and inhomogeneous functions on $G^n$ coexist | Define both, prove the explicit complex isomorphism, compute with normalized inhomogeneous cochains, and define $H^n$ derived-functorially. |
| UCT/Künneth wording | Texts often write a direct-sum decomposition after proving a natural short exact sequence and a nonnatural split | The A-page theorem is the natural short exact sequence. Splitting is a separate theorem labelled nonnatural and choice-sensitive. |

---

## 26. Scope denials

Nothing here is dropped merely because its proof is long. Each denial belongs
to a different subject or needs machinery not present in the library. A later
track can recover it from the stated licence.

| denied/deferred material | reason specific to the result | what licenses it later |
|---|---|---|
| de Rham complex, Poincaré lemma, Mayer–Vietoris for forms, de Rham theorem | require smooth manifolds, differential forms, partitions of unity/integration, and the geometric comparison map | `differential-geometry`, citing `HA-1`, `HA-4`, and `HA-15`–`HA-17` |
| Koszul complexes, regular sequences, depth, Auslander–Buchsbaum–Serre | explicitly owned by `commutative-algebra`; depend on ideals, Noetherian/local rings and regularity | its post-homological CA-16–CA-18 block, citing `HA-3`, `HA-5`, `HA-8`–`HA-10` |
| sheaf cohomology, Čech-to-derived comparison, Leray spectral sequence | no sheaf, site, stalk, or sheafification track exists; importing them would add a whole subject | a sheaves/cohomology track after topology and category theory |
| local cohomology and derived completion/localization | require support functors, Noetherian commutative algebra, Čech/Koszul complexes, and completion theory | commutative algebra plus a sheaf/local-cohomology sequel |
| derived inverse limits beyond the countable $\lim^1$ convergence obstruction | require inverse/pro systems, Mittag–Leffler conditions, exact products, and $R^n\!\lim$ | a derived-limits page after category limits and AB4* |
| change-of-rings spectral sequences | require a developed restriction/extension/coextension-of-scalars package and ring-specific flat/projective hypotheses | an algebra/change-of-rings sequel using `HA-17` |
| relative homological algebra, cotorsion pairs, model structures from them | replace all epimorphisms/injectives by a chosen proper class and need completeness of cotorsion pairs | a relative/model homological algebra track |
| Hochschild, cyclic, and André–Quillen (co)homology | require enveloping algebras, simplicial resolutions, dg algebras, and algebra-specific products | dedicated noncommutative/derived algebra tracks |
| Tate cohomology and complete resolutions | extend degrees negatively and require complete projective resolutions/self-injective finite-group machinery | a group-cohomology sequel after modular representation theory |
| profinite/Galois cohomology | cochains must be continuous and coefficients topological/discrete; inverse limits and Galois theory are essential | a Galois/profinite track after topology and number theory |
| Schur multipliers, $H^2$ as group extensions, $H^1$ as crossed homomorphisms/complements | these are group-theoretic interpretations explicitly assigned away by the seam contract | `group-theory`, citing `def-group-cohomology-as-a-derived-functor` |
| universal central extensions and Hopf's formula | require perfect groups, free presentations, commutator calculus, and the group extension classification | `group-theory` |
| the cohomological dimension of a general free group and the Stallings–Swan converse | the forward calculation needs the free-group augmentation-ideal theorem; the converse needs group actions on trees and is far beyond the derived-functor construction | `group-theory`, using this track's cohomological-dimension definition |
| Leray–Serre and Eilenberg–Moore spectral sequences | require fibrations, singular chains, local coefficients, and in Eilenberg–Moore a derived tensor/cobar topological setup | algebraic topology after this track |
| multiplicative spectral sequences, products and sign rules on pages | require filtered dg algebras/modules and convergence compatible with multiplication; no commissioned seam needs them | a dg-algebra or algebraic-topology spectral-sequence sequel |
| general unbounded K-injective/K-projective/K-flat replacements | enough injectives/projectives alone does not prove the unbounded replacement theorem; Spaltenstein/Stacks needs transfinite products/coproducts and Grothendieck hypotheses | an unbounded-derived-categories page using Stacks *Injectives* §19.12 |
| dg categories, model categories, stable $\infty$-categories, derived $\infty$-categories | each is an enhancement solving functorial-cone/higher-coherence problems not expressible in this 1-categorical scaffold | dedicated homotopical/higher-category tracks |
| Brown representability, compact generation, Bousfield localization | require coproduct-preserving triangulated categories, generators and set-theoretic representability machinery far beyond localization at quasi-isomorphisms | a stable/triangulated-categories sequel |
| perverse $t$-structures, torsion-pair tilts, semiorthogonal decompositions | require sheaves/geometry or representation-theoretic applications and additional boundedness/heart results | a derived geometry or representation theory sequel |
| higher global-dimension calculations for polynomial/local rings | Hilbert syzygy and Auslander–Buchsbaum are owned by commutative algebra | cite `HA-9`'s definitions and Ext criterion from the commutative-algebra block |
| Lie algebra cohomology and Chevalley–Eilenberg complexes | the seam contract assigns Lie algebras to `differential-geometry`; the complex uses exterior algebra and Lie structure not developed here | the Lie/differential-geometry block, citing this track's resolution machinery as needed |

Derived categories and triangulated categories are **not** denied: `HA-13` and
`HA-14` source and build their bounded/classical core. The denial starts exactly
at general unbounded replacement and enhancements.

---

## 27. Amendments owed to other scaffolds

This section is the only legal effect this file has on another track.

1. **APPLIED AT SCAFFOLD LEVEL 2026-08-14 — live plan dependency repoint.** At splice, change the retained
   `chain-complexes-and-homology` page's `requires` from the stale
   `exact-sequences-and-the-diagram-lemmas` placeholder to
   `abelian-categories` and `exactness-and-the-member-calculus`. `HA-4` requires
   `the-diagram-lemmas-in-an-abelian-category`. The category scaffold explicitly
   requested this repoint.

2. **OWNER-AUTHORISED AND APPLIED 2026-08-14 — retire two empty omnibus ids and expand the band.** Before any authoring,
   retire `long-exact-sequences-and-mapping-cones` and `ext-and-tor` plus their
   companions. Keep `chain-complexes-and-homology`,
   `projective-and-injective-resolutions`, `derived-functors`, and
   `spectral-sequences`. Insert the remaining page ids from §0 in the `HA-1`
   through `HA-17` order. Since all affected `items` arrays are empty, no item
   id or authored page is renamed.

3. **R-1 APPLIED 2026-08-14 — abstract algebra tensor page.** It publishes stable ids for balanced
   maps, `def-bimodule`, tensor of a right and left module, functoriality,
   associativity/unit/symmetry in the commutative case, right exactness,
   `def-flat-and-faithfully-flat-modules-and-ring-maps`, `thm-projective-modules-are-flat`, and the Hom–tensor
   adjunction `thm-hom-tensor-adjunction-for-modules`. The
   homological builder then substitutes those exact ids into `HA-10` and
   `HA-11`; it does not re-mint any. Noncommutative Tor is blocked if the
   right/left typing or bimodule seam is omitted.

4. **APPLIED 2026-08-14 — abstract algebra/group theory reconciliation.** Extend RT-1,
   `the-group-algebra-and-representations`, to state the finite-support group
   algebra, augmentation, trivial module, and action/module dictionary for an
   arbitrary group and commutative coefficient ring before specialising to
   finite-group representation theory. `HA-12` cites that page rather than
   minting a second integral group ring. `HA-17` cites group theory `GT-9`,
   `group-extensions-complements-and-schur-zassenhaus`, for the definition of a
   group extension. Group theory then cites this track's future
   `def-group-cohomology-as-a-derived-functor`,
   `thm-the-bar-cochain-complex-computes-derived-group-cohomology`, and
   `thm-lyndon-hochschild-serre-spectral-sequence`. Group theory owns and must
   author those low-degree interpretations on `GT-21`--`GT-23`: $H^1$ as
   crossed homomorphisms/complements, $H^2$ as extension classes/factor sets,
   the Schur multiplier, and universal central extensions. The two tracks must
   add agreement items, not two definitions of $H^1/H^2$.

5. **OWNER-AUTHORISED AND APPLIED 2026-08-14 — differential geometry placement and citations.** The seam file's anchor
   `spectral-sequences-examples` would split this expanded block because
   `HA-16` and `HA-17` now follow that retained companion. Repoint the placement
   anchor to `grothendieck-spectral-sequences-and-computations-examples`, the
   final companion. Its de Rham pages cite
   `def-cochain-complex-in-an-abelian-category`,
   `thm-long-exact-sequence-in-cohomology`, the filtered-complex spectral
   sequence, and convergence; they mint the de Rham complex and geometric
   theorems themselves.

6. **Commutative algebra receipt.** Its CA-16–CA-18 post-homological block may
   replace descriptive seams by the future stable ids:
   `def-chain-complex-in-an-abelian-category`,
   `def-homology-object-of-a-chain-complex`,
   `def-mapping-cone-of-a-chain-map`,
   `thm-long-exact-sequence-in-homology`,
   `def-projective-resolution-in-an-abelian-category`,
   `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`,
   `def-balanced-ext-bifunctor`, `def-projective-dimension-of-an-object`,
   `def-balanced-tor-bifunctor`, and
   `thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees`.
   Minimal free resolutions over local rings remain commutative algebra's
   theorem; it uses comparison/homotopy uniqueness here rather than expecting a
   ring-free minimality theorem from this track.

7. **APPLIED 2026-08-14 — prior combined scaffold.** Add a supersession note at the
   homological-algebra section of `research/plan-combinatorics-and-categories.md`
   pointing to this file. Do not edit or delete its prose during this commission.

8. **Category-track terminology receipt.** Preserve the category scaffold's
   projective/injective **object** ids, enough-projectives/injectives ids, and
   categorical connecting-arrow naturality. Future homological items list them
   as dependencies rather than defining object-level lifting/extension
   properties again.

9. **APPLIED AT SCAFFOLD LEVEL 2026-08-14 — page-summary and size sweep at splice.** Every inserted A page receives
   the two-paragraph summary described in §21 and stays at or below 60 items.
   No B page receives an authored summary or becomes a dependency target.

10. **APPLIED 2026-08-14 — abstract-algebra semisimplicity page.** Preserve
    `chain-conditions-and-semisimple-modules` before this block and give its
    splitting/projective/injective equivalences stable item ids:
    `thm-equivalent-characterizations-of-semisimple-modules`,
    `thm-finite-length-semisimple-module-characterizations`, and
    `thm-equivalent-characterizations-of-semisimple-rings`. `HA-9` and
    `HA-10` cite those ids for global dimension zero and positive Ext/Tor
    vanishing; they do not re-prove Wedderburn–Artin or chain conditions.

---

## 28. Unresolved seams

| seam | current state | reconciliation/fallback | blocked if unresolved |
|---|---|---|---|
| stable group-ring/action item ids | page ownership is settled at abstract algebra RT-1, `the-group-algebra-and-representations`, but its `items` array is still empty | extend RT-1 as agreed with group theory, preserve its authored stable ids, and substitute those ids into `HA-12`; group theory does not mint a second group ring | all of `HA-12`; the page-id seam itself is closed |
| group-extension item id for LHS | group theory fixes the supplying page as `GT-9`, `group-extensions-complements-and-schur-zassenhaus`, but that scaffold is not yet authored | preserve or mechanically substitute GT-9's stable definition id into the LHS theorem on `HA-17` | only the LHS application; the abstract Grothendieck spectral sequence survives |
| exact tensor/flat item ids | **CLOSED 2026-08-15**: `frontier-13` batch 5 scaffolded the abstract-algebra tensor page at A 38 / B 11, so the ids are fixed and immutable | cite `def-bimodule` and `def-flat-and-faithfully-flat-modules-and-ring-maps` (which replaces the promised `def-flat-module` and also carries faithful flatness and ring-map flatness), plus `thm-projective-modules-are-flat` and `thm-hom-tensor-adjunction-for-modules` | Tor, tensor-derived, and Künneth pages; Ext survives |
| semisimplicity equivalence item ids | `chain-conditions-and-semisimple-modules` is planned with empty `items`, but MOD-4 now fixes `thm-equivalent-characterizations-of-semisimple-modules`, `thm-finite-length-semisimple-module-characterizations`, and `thm-equivalent-characterizations-of-semisimple-rings` | author those exact supplier ids first and cite them from `HA-9`/`HA-10` | only the semisimple dimension-zero and vanishing consequences; the remaining Ext/Tor theory survives |
| differential-geometry final anchor | owner-authorised scaffold repoint is applied: the old internal `spectral-sequences-examples` anchor is retired for this purpose | the later global splice must use HA-17's final companion `grothendieck-spectral-sequences-and-computations-examples`; `plan-spec.json` is outside this commission | no mathematics; the prose seam is closed |
| projective/injective object ids from `MA-9` | category scaffold is complete prose but unauthored, so final stable ids may differ at build | preserve the proposed ids or substitute them mechanically; never mint duplicates | abstract-category form of `HA-5`–`HA-7`; module instances remain available |
| ordinary localization/calculus-of-fractions prerequisite | no published category item exists and the category track assigns derived localization to homological algebra | `HA-14` therefore mints the narrow category localization machinery it needs, sourced by Weibel/Stacks/Yekutieli; no external amendment required | closed by this scaffold |
| commutative algebra's request for “minimal-resolution uniqueness” | minimality needs local-ring/radical data unavailable here | commutative algebra authors the minimal theorem and cites `HA-5` comparison uniqueness; Amendment 6 records exact inputs | only its Betti/minimal-resolution items |

No item-level `forward_refs` remain unresolved. The first five rows are splice
or stable-id seams because the relevant sibling plans are not authored facts;
they are not licences to point a spine theorem forward.

---

## 29. Final scaffold audit

- Seventeen A pages, each paired with a leaf examples page; no A inventory
  exceeds 60 proposed mathematical items.
- Every item has an explicit component-provenance code under §4, and no
  AI-generated theorem/definition/proposition/lemma is proposed.
- Every quotient, representative choice, induced map, resolution choice,
  totalisation choice, and convergence claim appears in §22.
- Every statement family with a nontrivial choice boundary appears in §23;
  global choice is nowhere assumed.
- Every pair names at least two independent treatments and at least one full
  textbook/monograph/lecture-note set with harvestable contents.
- Every heading in every cited read range has a disposition in §24. Material
  assigned to another owner is named as such; deferred material records the
  missing machinery.
- All internal pair dependencies follow `HA-1` through `HA-17`. B pages are
  leaves, and no A-page item depends on an example/counterexample.
- The file contains no absolute order claim, no build artifact, no authored
  item, no status mutation, and no write instruction outside this prose
  scaffold.
