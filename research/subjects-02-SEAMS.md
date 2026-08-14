# subjects-02 — seam contract for six new tracks

Owner commission, 2026-08-14: prose scaffolds for **representation theory of
groups (finite and infinite)**, **representation theory of Lie algebras**,
**algebraic geometry**, **algebraic topology**, **differential topology**, and
**Fourier analysis** — with the breadth, depth and richness the subjects-01
density-enrichment pass established.

**THIS IS NOT A BUILD.** Deliverable is one prose scaffold file per track. No
item is authored, no `plan-spec.json` entry is written, nothing is published, no
gate is run against content. The orchestrator splices orders at the end.

---

## 0. Three rules, and they are absolute

1. **Exclusive file ownership.** Your track owns exactly one file. You never edit
   another track's file, `plan-spec.json`, `items/**`, `library/**`, or any
   normative doc. Anything another track must change goes in **your** file, in an
   "Amendments owed" section, naming the target track, the exact change, and why.
   The orchestrator reconciles.
2. **No absolute plan orders.** Number your pages **relative to your own track**
   with your assigned prefix (§2). Quote an ANCHOR PAGE ID from §3, never an
   integer order. **Every absolute order written in any existing scaffold file is
   STALE** — the 2026-08-14 splice moved the plan from 448 to 894 pages. Believe
   `plan-spec.json`, never remembered prose.
3. **`items[]` non-empty is the ONLY honest signal that a page is real.** A page id
   in `plan-spec.json` with `items: []` is *planned and does not exist*. Do not
   assume its content; do not cite it as though a reader has met it. Check on
   disk, every time.

---

## 1. What already exists, verified from `plan-spec.json` on 2026-08-14

The library is **894 pages, 244 authored**. Four of the six new tracks overlap
material that is already scaffolded or planned. **Read this section before
scaffolding anything** — re-minting any of it is the single most likely way to
waste this commission.

### Ordinary representation theory of finite groups — PLANNED, abstract algebra
`the-group-algebra-and-representations` (143) · `maschkes-theorem-and-complete-reducibility`
(145) · `characters-and-the-orthogonality-relations` (147) ·
`induced-representations-and-frobenius-reciprocity` (149).

### Modular representation theory — PLANNED, group theory
`modular-representations-and-projective-covers` (150.001) ·
`brauer-characters-and-decomposition-matrices` (150.003) ·
`the-finite-simple-group-classification-landscape` (150.005).

### Lie theory — PLANNED, differential geometry
`lie-groups-invariant-fields-and-the-exponential-map` (491) ·
`lie-subgroups-actions-and-homogeneous-spaces` (493) ·
`lie-algebra-representations-enveloping-algebras-and-pbw` (495) ·
`solvable-and-nilpotent-lie-algebras` (497) ·
`semisimple-lie-algebras-cohomology-and-levi-theory` (499) ·
`cartan-subalgebras-and-root-space-decompositions` (501) ·
`root-systems-dynkin-diagrams-and-cartan-killing-classification` (503) ·
`highest-weight-theory-for-complex-semisimple-lie-algebras` (505) ·
`compact-lie-groups-maximal-tori-and-peter-weyl-theory` (507) ·
`real-forms-and-real-semisimple-lie-algebras` (509).

### Differential-topological foundations — PLANNED, differential geometry
`smooth-manifolds-and-smooth-maps` (443) · `smooth-partitions-of-unity-and-exhaustions`
(445) · `tangent-cotangent-and-the-differential` (447) ·
`rank-theorems-and-embedded-submanifolds` (449) · `smooth-vector-bundles-and-sections`
(451) · `sard-theorem-and-transversality` (453) ·
`whitney-embedding-tubular-neighbourhoods-and-approximation` (455) ·
`vector-fields-flows-and-lie-derivatives` (459) ·
`distributions-integral-manifolds-and-the-frobenius-theorem` (461) ·
`tensor-fields-exterior-algebra-and-differential-forms` (463) ·
`the-exterior-derivative-and-cartan-calculus` (465) ·
`manifolds-with-boundary-collars-and-orientations` (467) ·
`integration-of-forms-and-the-general-stokes-theorem` (469) ·
`the-de-rham-complex-homotopy-and-mayer-vietoris` (471) ·
`singular-cochains-mayer-vietoris-and-smooth-singular-comparison` (473) ·
`the-de-rham-theorem-and-degree` (475).

### Point-set and low-dimensional homotopy — AUTHORED and PLANNED, topology
**AUTHORED:** `homotopy-and-homotopy-equivalence` (289) · `the-fundamental-group`
(291). **PLANNED:** `covering-spaces-and-lifting` (293) ·
`the-fundamental-group-of-the-circle` (295) · `the-seifert-van-kampen-theorem`
(297) · `classification-of-covering-spaces` (299) ·
`applications-of-the-fundamental-group` (301).

### Homological algebra — PLANNED, 365.037–365.076
Chain complexes, chain homotopy, mapping cones, long exact sequences, projective
and injective resolutions, derived functors, δ-functors, Ext, Yoneda extensions,
Tor, **`universal-coefficients-and-kunneth-theorems` (365.057)**,
group cohomology as a derived functor, triangulated and derived categories,
**`spectral-sequences` (365.065)**, double complexes and exact couples,
Grothendieck spectral sequences, and the group-cohomology block through Schur
multipliers.

### Fourier and operator theory — PLANNED, functional analysis
`orthonormal-bases-parseval-and-fourier-series` (288.073) · the whole spectral
block (288.075–288.087) · `fourier-transform-convolution-and-approximate-identities`
(288.089) · `schwartz-space-and-the-plancherel-theorem` (288.091) ·
`distributions-test-functions-and-differentiation` (288.093) ·
`tempered-distributions-and-the-fourier-transform` (288.095). Measure theory
supplies `density-separability-and-convolution-in-lp` (288.029), the
Hardy–Littlewood maximal function with Lebesgue differentiation, and
**Riesz–Thorin (ruling R-6 of subjects-01: measure theory owns it)**.

### Commutative algebra — PLANNED, 111.001–111.052
Including `noether-normalisation-and-nullstellensatz` (111.013),
`valuation-rings-and-discrete-valuation-rings` (111.015),
`dedekind-domains-and-ideal-classes` (111.017),
`krull-dimension-and-height-theorems` (111.019), flatness (111.023), completion
(111.025), and `zariski-topology-on-prime-spectra` (111.029).

---

## 2. Roster, prefixes, and file ownership

Prefixes were checked to be **globally unused across `research/` and `briefs/`**
before assignment. Ruling R-10 of subjects-01 is binding: *a pair label must be
unique across the whole commission, not merely within your file*, because it is
the key the splice joins on and a duplicate is a silent mis-splice.

| track | prefix | owns exactly this file |
|---|---|---|
| representation theory of groups | **`RG`** | `research/plan-representation-theory-groups-track.md` |
| representation theory of Lie algebras | **`RL`** | `research/plan-representation-theory-lie-track.md` |
| algebraic geometry | **`AV`** | `research/plan-algebraic-geometry-track.md` |
| algebraic topology | **`AT`** | `research/plan-algebraic-topology-track.md` |
| differential topology | **`DT`** | `research/plan-differential-topology-track.md` |
| Fourier analysis | **`FR`** | `research/plan-fourier-analysis-track.md` |

**`AG` was deliberately NOT given to algebraic geometry.** It is already used by
both `plan-algebra-track-expansion.md` (78 lines) and `plan-group-theory-track.md`
(26) for unrelated pairs. Algebraic geometry is **`AV`** — for varieties.

---

## 3. Placement anchors

Your block sits **immediately after its anchor page**. Everything at or below the
anchor is available to cite; nothing above it is. Anchors are page **ids**; the
orchestrator converts them to orders at splice.

| track | anchor page id | note |
|---|---|---|
| `AT` | `schur-multipliers-and-universal-central-extensions-examples` | the last homological-algebra page. **Orders 366–392 are free integers** — AT lands there, which is *below* differential geometry (443+) by design, so DG's singular-cochain and de Rham/degree pages can cite AT instead of forward-referencing it |
| `AV` | `AT`'s last page | algebraic geometry needs sheaf machinery and singular cohomology for comparison theorems |
| `FR` | `scalar-conservation-laws-and-entropy-solutions-examples` | the last PDE page, i.e. the end of the analysis band. Keeps Fourier **below complex analysis (303+)**, so complex analysis can cite Hardy spaces and BMO |
| `RL` | `real-forms-and-real-semisimple-lie-algebras-examples` | immediately after differential geometry's Lie-theory block and before its symplectic block |
| `RG` | `RL`'s last page | representation theory of groups cites `RL` for the algebraic side of Harish-Chandra |
| `DT` | `moment-maps-and-symplectic-reduction-examples` | the last differential-geometry page |

**Why `AT` goes low and `DT` goes high.** Algebraic topology's prerequisites stop
at homological algebra and point-set topology, both below 366. Differential
topology needs *both* differential geometry's manifold theory (443–475) *and*
algebraic topology's characteristic classes, so it must sit above both. Placing
`AT` high would have forced differential geometry to forward-reference singular
cohomology, which it currently plans to compare against de Rham.

---

## 4. The ownership table — contested concepts, ONE owner each

This is the part that cannot be delegated, and it is binding. **The owner of a
concept mints it; every other track cites it and may not re-mint it.** Where the
owner is an existing track, you cite its page id and record an amendment owed if
the interface you need is not in its inventory.

| concept | OWNER | everyone else |
|---|---|---|
| group algebra, Maschke, ordinary characters, orthogonality, induction/Frobenius reciprocity | **abstract algebra** (143–149) | `RG` cites; it may not re-mint character orthogonality |
| modular representations, projective covers, Brauer characters, decomposition matrices | **group theory** (150.001–150.005) | `RG` cites and builds *above* them: blocks, defect, vertices and sources, Green correspondence |
| Lie algebra structure theory: solvable/nilpotent, Engel, Lie, Cartan subalgebras, root space decomposition, root systems, Dynkin classification, Killing form | **differential geometry** (497–503) | `RL` cites; it owns the representation-theoretic superstructure only |
| enveloping algebra and PBW | **differential geometry** (495) | `RL` cites, then owns the center of $U(\mathfrak g)$, Harish-Chandra isomorphism, primitive ideals |
| highest weight theory, finite-dimensional classification | **differential geometry** (505) | `RL` cites, then owns Verma modules, category $\mathcal O$, BGG resolution, the Weyl character formula *proof*, Kostant multiplicity |
| Peter–Weyl for compact **Lie** groups, maximal tori, Weyl integration | **differential geometry** (507) | `RG` cites for the Lie case and owns the general **compact-group** and **locally-compact** unitary theory |
| Haar measure, unitary representations of locally compact groups, Mackey theory, unitary duals | **`RG`** | `FR` cites for LCA groups |
| Pontryagin duality and Fourier analysis on locally compact **abelian** groups, Bochner, Plancherel on LCA | **`FR`** | `RG` cites; the noncommutative theory is `RG`'s |
| singular homology and cohomology, CW and cellular homology, Eilenberg–Steenrod, cup/cap products, Poincaré duality, higher homotopy, fibrations, Hurewicz, classifying spaces | **`AT`** | differential geometry's 473/475 become consumers — record the amendment |
| **characteristic classes: Stiefel–Whitney, Chern, Pontryagin, Euler — the CONSTRUCTION** | **`AT`** (classifying spaces, Thom isomorphism, Leray–Hirsch) | `DT` cites the construction |
| **characteristic classes — the APPLICATIONS**: cobordism invariance, signature, immersion/embedding obstruction, exotic structures | **`DT`** | `AT` cites |
| Morse theory, handle decompositions, cobordism and Pontryagin–Thom, intersection theory, h-cobordism, surgery | **`DT`** | `AT` cites Morse for CW homotopy type |
| universal coefficients, Künneth, Tor/Ext as algebra | **homological algebra** (365.057) | `AT` cites and applies to spaces; it may not re-prove them |
| spectral sequences as algebra, double complexes, exact couples, convergence | **homological algebra** (365.065–365.069) | `AT` cites and owns the **Serre** and **Atiyah–Hirzebruch** spectral sequences as applications |
| sheaves on a topological space, sheaf cohomology, Čech theory | **`AV`** | `AT` cites for de Rham/Čech comparison |
| Nullstellensatz, Zariski spectra, Krull dimension, flatness, completion, valuation and Dedekind theory | **commutative algebra** (111.x) | `AV` cites; it may not re-mint commutative algebra |
| $L^1$/$L^2$/Schwartz/tempered Fourier transform, Plancherel, distributions | **functional analysis** (288.089–288.095) | `FR` cites, then owns classical series convergence, singular integrals, Hardy/BMO, Littlewood–Paley |
| Hardy–Littlewood maximal function, Lebesgue differentiation, Riesz–Thorin, $L^p$ convolution | **measure theory** | `FR` cites |
| Sobolev spaces and embeddings | **PDE** | `FR` cites for Fourier characterisations |

---

## 4b. Category assignment — an ORCHESTRATOR job, decided 2026-08-14

**Scaffolders do not assign `category`.** It is set per *block* in the splice
layout, which is why none of this needed a lane restart. The pattern already
exists: number theory spans three blocks, group theory four, and one category can
carry two whole tracks.

**Algebraic geometry splits into TWO categories** (owner, 2026-08-14):

| category | carries |
|---|---|
| `algebraic-geometry` | affine and projective varieties, morphisms and rational maps, Segre/Veronese and products, dimension, tangent spaces and smoothness, normality and normalisation, curves *as varieties* and genus |
| `scheme-theory` | sheaves, Čech theory and sheaf cohomology; affine and general schemes; morphism properties (separated, proper, flat, smooth, étale); quasi-coherent and coherent sheaves; divisors and line bundles; vanishing and finiteness; Riemann–Roch and Serre duality; blowups |

The boundary is the varieties→schemes change of register, the one real conceptual
break in the subject; a reader self-selects across it. Curves were deliberately
*not* given a third category: curves appear in both registers, so that boundary
would cut across this one rather than along it.

**`AV` was told to record whether it scaffolds the classical register first or
interleaves.** If it interleaves, assign the category per pair from its inventory
at reconciliation — do not force its reading order to match the category split.
Reading order and index grouping are independent; the splice sets orders from
anchors and categories from this table.

**Also done 2026-08-14, on already-spliced content** (`de72d447`): the
74-page `differential-geometry` group became `differential-geometry` (34,
manifolds through de Rham) · `riemannian-geometry` (14) · `lie-theory` (20) ·
`symplectic-geometry` (6); the 76-page `category-theory` group became
`category-theory` (42) · `homological-algebra` (34). `lie-theory` is where `RL`'s
own pages belong, and `differential-geometry` is where `DT`'s siblings sit.

**Every new category needs a style in the app repo's
`web/lib/library-categories.ts`, which is frozen presentation and owner-gated.**
Nothing renders until a level is built, so this is not urgent — but it is a hard
prerequisite to publishing any of these levels. Counted from `plan-spec.json`
against the styled set CX-D3 quotes, **11 categories currently lack a style**:

`commutative-algebra` · `differential-geometry` · `functional-analysis` ·
`group-theory` · `homological-algebra` · `lie-theory` · `measure-theory` ·
`pde` · `probability` · `riemannian-geometry` · `symplectic-geometry`

subjects-02 will add up to **six more** — `algebraic-geometry`, `scheme-theory`,
`algebraic-topology`, `differential-topology`, `fourier-analysis` and a
representation-theory group; `RL` folds into the existing `lie-theory`. So the
app-side work lands at roughly **17 new index groups**, and it should be done
once, deliberately, rather than piecemeal as each level publishes.

---

## 5. Forward references

**Minimise them, but never drop content to avoid one.** That is the owner's
standing instruction. When a result genuinely needs a page above your anchor:
declare it, state which page closes it, and keep the result. Record it in a
forward-reference section of your file. A forward reference to a page with empty
`items[]` is legal in a scaffold; asserting that page's content as established is
not.

---

## 6. Prohibitions

- No editing another track's file, `plan-spec.json`, `items/**`, `library/**`, or
  any normative doc.
- No absolute plan orders anywhere in your file.
- No re-minting anything in §4 you do not own.
- No inventing a schema value. Component provenance is **exactly**
  `literature-derived`, `ai-altered`, or `ai-generated` for a statement, and
  those plus `not-supplied` / `not-applicable` for a proof — SCHEMA §3. A
  commutative-algebra lane invented `directly-checkable` and it had to be
  relabelled; a label outside the schema means the never-load-bearing rule for
  AI-generated statements cannot be enforced mechanically.
- **No AI-generated statement or construction may ever be a dependency target.**
  A checkable example or counterexample on a B page is the permitted class.
- No permission prompts of any kind — see the brief. If an operation truly needs
  new authority, record a blocker in your file and continue.
