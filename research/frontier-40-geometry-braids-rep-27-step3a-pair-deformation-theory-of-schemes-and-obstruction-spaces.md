# Step 3a dispatch report — `deformation-theory-of-schemes-and-obstruction-spaces`

- Run: `frontier-40-geometry-braids-rep-27` (batch 24, orders 909/910, `scheme-theory`).
- Pair: A `deformation-theory-of-schemes-and-obstruction-spaces` (18 items) / B
  `deformation-theory-of-schemes-and-obstruction-spaces-examples` (2 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Original engine review decision: `insufficient` (historical; superseded by the owner scope repair in §8).** The intended subject is fully covered and the sources are
  verified, but the pair contains one confirmed unmet prerequisite: the item
  `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` (used by both global deformation
  theorems) needs scheme-level Zariski gluing of flat deformations with **no** separatedness or
  quasi-finiteness hypotheses, and that result is stated by no item in the published library or
  in the current scaffold, while the two suppliers the item actually declares have hypotheses its
  objects fail. Owner action is a bounded enrichment or dependency re-point (§4.1); after that the
  scope is otherwise ready.

## 1. Inputs read

- Manifests: `research/frontier-40-geometry-braids-rep-27-batch-24.pages.json` (both pages, all 20
  items: ids, kinds, titles, statements, strategies, deps) and `...-batch-24.coverage.json`,
  `...-batch-24.cross-batch-dependencies.json`, `...-batch-24.notes.md`.
- Plan: `research/plan-spec.json` rows 909/910 (empty inventories, page fields matching the
  manifest); `...-scope-ledger.json` (both pages owed); the 20 Step-1 readiness records
  `...-step1-<item>.json` (all present, all `ready` — readiness is not mathematical approval).
- Design/prose: `research/plan-algebraic-geometry-expansion-track.md` **AG-DEF-1** row (line 258)
  and the source-gated-branches paragraph (line 276); drift record
  `...-alpha-step1-drift.md` (this page: `VERDICT: no-drift`); owner direction
  `...-owner-authoring-direction.md` (preserve each pair's complete promised claim scope; required
  local helpers allowed; scope changes owner-only); run record `...-run-record.md` (selected 27
  pairs; in-run lower-order dependencies authorized).
- Sources: all six distinct stamped documents were re-fetched live on 2026-10-05 and
  hash-checked, and the load-bearing statements were read in the full texts (§3).
- Consumers: all 54 current-run batch manifests and the published `items/` corpus were scanned for
  uses of the pair's 20 item ids (§6). Historical `research/*RESUME.md` files were not used.

## 2. Design ∶ scaffold comparison (scope only)

All six design ids of AG-DEF-1 are present verbatim with matching kinds:

| design promise (AG-DEF-1) | batch-24 item |
|---|---|
| `def-infinitesimal-deformation-functor-over-square-zero-extension` | same id, definition |
| `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex` | same id, theorem |
| `thm-obstructions-lie-in-ext-two-cotangent-complex` | same id, theorem |
| `lem-tangent-and-obstruction-spaces-for-hypersurface-deformations` | same id, lemma |
| `ex-first-order-deformations-of-a-hypersurface` | same id, example (B) |
| `cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms` | same id, counterexample (B) |

The 14 further A items are local prerequisites/machinery: `def-square-zero-extension-and-small-extension`,
`def-cotangent-complex-of-a-scheme-morphism`, `def-ext-groups-of-the-cotangent-complex`,
`lem-cotangent-complex-truncation-and-smooth-case`, `lem-ext-of-locally-free-sheaf-via-cohomology`,
`lem-lichtenbaum-schlessinger-complex-and-cotangent-ext`, `lem-affine-deformations-obstruction-and-torsor`,
`lem-flat-deformations-form-a-zariski-sheaf-of-groupoids`,
`lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`,
`cor-deformation-cohomology-of-a-smooth-scheme`,
`cor-vanishing-ext-one-implies-rigidity-of-deformation-classes`,
`def-embedded-deformations-of-a-closed-subscheme`, `lem-cohomology-of-hypersurface-twists`,
`lem-hypersurface-deformations-classified-by-equation-deformations`. A script check confirms **all 20
items lie in the transitive dependency closure of the six design ids**, so no addition is scope
drift; each is consumed by a promised item.

Every design instruction is carried: small extensions, flatness, automorphisms and the
cotangent-complex convention are fixed in the first four A items; the classification bijection
(`thm-first-order-...`), the obstruction class and torsor structure (`thm-obstructions-...`), the
Ext²=0 smoothness criterion, the Ext¹=0 rigidity corollary, the Kodaira–Spencer form
`H¹(X,T_X)`/`H²(X,T_X)` and the hypersurface analysis with vanishing `H¹(X,O_X(d))` all appear;
the B page carries exactly the two designed examples. Page fields (order, kind, category,
companion, `requires` = the five plan pages) match `plan-spec.json`; 18 A + 2 B items are well
under the 100-item cap. The design's stale "AV-16/18/21" numbering is materialized by the plan's
five `requires` pages, as the batch notes and the `no-drift` record document; no promised claim is
dropped or weakened.

## 3. Source coverage

All six distinct stamped sources were re-fetched live on 2026-10-05; byte counts and `sha256_16`
prefixes match the coverage stamps exactly:

| source | bytes | sha256_16 |
|---|---:|---|
| Stacks, *Deformation Theory* (`defos.pdf`) | 630 688 | `1f5eca92aa99c646` |
| Stacks, *The Cotangent Complex* (`cotangent.pdf`) | 609 250 | `11ac3f3090cbd582` |
| Stacks, *Deformation Problems* (`examples-defos.pdf`) | 540 949 | `6628c6bb54013573` |
| Stacks, *Formal Deformation Theory* (`formal-defos.pdf`) | 740 384 | `f6549caab0fa3802` |
| Hartshorne, *Lectures on Deformation Theory* | 733 758 | `4398b8e22ba147a8` |
| Sernesi, *An overview of classical deformation theory* | 127 247 | `19a0e36bf578106a` |

Load-bearing statements read in the full texts and checked against the scaffold's claims:
Stacks 90.3.1–3 (tags 06GC/06GD/06GE, base category, small extensions and factorization), 91.8.1
(0D14, first-order thickenings: iso classes principal homogeneous under Ext¹, automorphisms
Ext⁰), 92.3.2 (08PN, ring-map cotangent complex), 92.4.5 (08QF, `H⁰(L)=Ω`), 92.9.1 (08R5, smooth
⇒ `L=Ω[0]`), 92.11.3 (08R8, `τ≥₋₁L=NL`), 92.13 (09AM, Lichtenbaum–Schlessinger truncation and
`Tⁱ`), 92.16.1 (08SP) and 92.21.1 (08UZ) (obstruction in Ext², torsor under Ext¹, automorphisms
Ext⁰), 92.24.1–2 (08T2/08T3, cotangent complex of a scheme morphism and affine compatibility),
93.9.1–3 (0DY7/0DY8/0DY9, deformation category of schemes: `Inf=Ext⁰(NL,O)=Der`, `T=Ext¹(NL,O)`);
Hartshorne Theorem 1.1(b),(c) (`T=H⁰(N)`, unobstructed when `H¹(N)=0`), Proposition 2.3, Theorem
10.1 (obstruction δ∈T², torsor under T¹) and Example 21.4 (+Lemma 21.5; quadric table `h⁰(N)=9`);
Sernesi §§1–3 (functor of Artin rings, first-order deformations of nonsingular varieties, the
obstruction class in `H²(X,Θ_X)`).

`node tools/coverage-checklist.mjs ...-batch-24.coverage.json` → **2 pages, 43 harvested results,
0 errors, 0 warnings** (9 source rows = the 6 distinct documents, all fetch-verified). The design's
source gate is closed by Stacks (Chapters 90–93, complete proofs) plus Hartshorne and Sernesi as
independent treatments; Illusie's LNM volumes are paywalled and that drop is recorded. Mapping
verdict: every design-promised item's source route matches the cited statement at scope level.

## 4. Prerequisite audit (unmet-prerequisite duty)

Mechanical resolution: 231 dependency edges over the 20 items, 102 distinct direct targets =
**75 published items** (front-matter `status: published` spot-checked) + **27 in-run items**
(18 on this A page, 9 on batch-23 `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`).
Full transitive closure: 935 ids for the A page (887 published + 48 in-run), 0 absent and 0
planned-only; no dependency is homed on a B page; every `requires` page exists (four published in
`library/`, the algebraic-spaces page scaffolded in batch 23). The 16 cross-batch edges to batch 23
(1 page + 15 item) are recorded `open` — expected, since those suppliers are scaffolded and
owner-resolved but not yet authored. No prerequisite found by the mechanical sweep is missing.

### 4.1 Confirmed finding — unmet prerequisite for `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids`

**Consuming item.** `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` (A page), which is a
declared dependency of both global theorems `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex`
and `thm-obstructions-lie-in-ext-two-cotangent-complex`.

**Required prerequisite claim and hypotheses.** Schemes with compatible gluing data along open
subschemes glue to a scheme (equivalently: flat deformations glue along Zariski covers), with
flatness over the base and the reduction isomorphism checked on the pieces, and with **no**
separatedness or quasi-finiteness hypothesis on the pieces. The natural set-up for the consumer is
the Zariski cover `{U_i ↪ X}` with objects `X'×_X U_i → U_i` (closed immersions, separated when
`X` is, but generally **not** locally quasi-finite).

**Evidence that the declared suppliers do not cover the use.**

- `lem-effective-fppf-descent-separated-locally-quasi-finite` (batch 23) assumes every
  `V_i → X_i` is separated **and locally quasi-finite**. Flat deformations over a square-zero
  extension fail local quasi-finiteness whenever the special fibre is positive-dimensional: e.g.
  the thickening `A¹_{k[ε]} → A¹_k` (the trivial first-order deformation of `A¹_k`) has infinite
  fibres. The batch-24 cross-batch evidence's assertion that "the full separated locally
  quasi-finite hypotheses … are satisfied in the deformation setting" is therefore not correct in
  general.
- `thm-faithfully-flat-descent-of-flatness` (published) requires a **faithfully flat** ring map
  `R→S`; the small extension `A'→A` is not flat — from `0→I→A'→A→0` with `I²=0` and `m_{A'}I=0`,
  tensoring with `A` gives `Tor₁^{A'}(A,A) ≅ I ≠ 0` for nonzero `I`. It cannot descend flatness
  along the extension.
- The strategy's parenthetical equivalence "for Zariski (indeed fppf) covers" for arbitrary flat
  schemes is unsupported: fppf descent of schemes is effective only under extra hypotheses (the
  separated locally quasi-finite case above, affinity, …); in general it lands in algebraic
  spaces. The correct route here is elementary Zariski gluing, which the strategy does not cite.

**Evidence of absence of a matching item.** No item of the pair's 18 A items states any gluing or
descent result. In the published library the closest items are `thm-gluing-ringed-and-locally-ringed-spaces`
(glues ringed/locally ringed spaces — it does not assert that the glued object is a scheme),
`thm-gluing-affine-schemes` (affine pieces only), `lem-flatness-affine-local-source-target`
(locality of flatness) and `lem-nonaffine-fppf-descent-of-scheme-morphisms` (morphisms to a fixed
target, not objects). None states the needed scheme-level Zariski gluing consequence with its
flatness/reduction properties.

**Uncertainty, stated honestly.** The claim itself is true and standard: it follows from
`thm-gluing-ringed-and-locally-ringed-spaces` (published) plus the definition of a scheme (the
pieces are schemes, so the glued locally ringed space is covered by affine open subschemes) plus
`lem-flatness-affine-local-source-target` for flatness and the morphism-sheaf property for the
reduction isomorphism. What is missing is a stated item with matching hypotheses; whether the
owner prefers (a) a new local helper lemma on the A page or (b) re-pointing the two mis-hypothesized
edges to the published gluing items and rewriting the strategy is an owner decision. The consumer's
notation `U_i'×_{U_i}(U_i∩U_j)` also presumes a morphism `U_i'→U_i` that the pair's definition of a
deformation does not supply; the intended open-restriction reading (square-zero thickenings have the
same underlying space) should be made explicit when the item is repaired.

**Recommended owner action.** Enrich: authorize a local helper such as
`lem-flat-deformations-glue-along-zariski-covers` (scheme gluing along compatible open subschemes,
with flatness and the reduction isomorphism local), or re-point the dependencies
`lem-effective-fppf-descent-separated-locally-quasi-finite` and
`thm-faithfully-flat-descent-of-flatness` to the published gluing/locality items and rewrite the
strategy accordingly; then record `proceed` for the resulting scope. Step 3a makes no edit and
makes no decision on the owner's behalf.

### 4.2 Uncertainty — `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`

Its claim concerns a bounded-above complex with quasi-coherent cohomology, but its declared
suppliers are the sheaf-level Čech comparison and Leray items
(`thm-cech-to-sheaf-cohomology-comparison`, `thm-leray-acyclic-cover-theorem`). The library does
publish hypercohomology/hyper-Ext machinery (`thm-first-hypercohomology-spectral-sequence`,
`thm-hyper-ext-spectral-sequence`, `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite`)
and the batch notes call this item the heaviest local reconstruction; the complex-level statement
can most likely be supplied and declared at authoring. Flagged as an uncertainty, not a confirmed
gap, and not by itself a scope blocker.

### 4.3 Bookkeeping observations (non-blocking)

- Two statement/strategy wikilinks are not in the citing item's declared `deps`; both targets are
  published, so no prerequisite is missing: `lem-cotangent-complex-truncation-and-smooth-case` →
  `lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology`, and
  `cor-deformation-cohomology-of-a-smooth-scheme` → `def-flat-morphism-schemes`.
- The pair's "small extension" (square-zero, kernel annihilated by the maximal ideal; not
  necessarily principal) is more general than Stacks' 06GD and weaker than its factorization
  lemma; internally consistent, and all cited theorems (91.8.1, 92.16.1, 92.21.1) hold in this
  generality. Convention note only.
- Spot-checked published suppliers' hypotheses against their uses and found no mismatch:
  `thm-cohomology-projective-space-twisting-sheaves` (general commutative base ring, exactly the
  `H^q(ℙⁿ,O(d))` facts the hypersurface items use), `thm-conormal-sequence-closed-immersion`,
  `thm-gluing-*`, `lem-flatness-affine-local-source-target`.

## 5. B-page assessment

The B page carries exactly the two design rows. `ex-first-order-deformations-of-a-hypersurface`
computes the plane conic (tangent dimension 5 = dim `S₂`−1, unobstructed via `H¹(O_C(2))=0`,
Hilbert scheme `ℙ⁵`) and the quadric surface (dimension 9 matching `h⁰(N)=9`), plus the general
`C(n+d,n)−1` formula. `cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms`
exhibits `x↦x+εx²` on `A¹_{k[ε]}` against `Ext¹(L,O)=H¹(A¹,O)=0`, with infinitesimal automorphisms
identified as `Ext⁰=Der_k(k[x],k[x])`, and correctly restricts the rigidity conclusion to
isomorphism classes. Both depend only on this pair's A items and published suppliers; the page is a
leaf (no run or published item outside the pair consumes either B item, and no A item depends on a
B item).

## 6. Intended role in the library

AG-DEF-1 is the roadmap's deformation-theory foundation: the cotangent-complex classification of
first-order deformations, the obstruction theory for square-zero extensions, the smooth-scheme
Kodaira–Spencer/obstruction groups, and the classical hypersurface computations. The roadmap lists
further deformation/obstruction work ("beyond the exact proposed AG-DEF-1 contract": moduli of
curves/stable maps, Hilbert/Quot) as separate source-gated future branches. Within this run the pair
is a leaf: its only consumer is its own B page; it consumes the five `requires` pages. No other
current-run pair declares any of its items.

## 7. Decision and recording

- A page `deformation-theory-of-schemes-and-obstruction-spaces`: **`insufficient`** — subject
  coverage and source coverage are adequate (all six design ids verbatim, all 20 items in the
  design closure, six sources re-verified live, 43 coverage rows clean, 0 missing dependencies),
  but §4.1 records one confirmed unmet prerequisite: the Zariski-gluing support required by
  `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids` is absent from both the published
  library and the current scaffold, and the two declared suppliers have hypotheses (separated +
  locally quasi-finite; faithful flatness) that the deformation objects fail. Recommended owner
  action: enrich (add the local gluing helper, or re-point the dependencies to the published
  gluing items and rewrite the strategy) and record `proceed` for the resulting scope; §4.2 and
  §4.3 are non-blocking observations.
- Recorded with `node tools/step3-decisions.mjs record-scope --run frontier-40-geometry-braids-rep-27
  --page deformation-theory-of-schemes-and-obstruction-spaces --decision insufficient` with the
  omission/action reason and this report's path.

## 8. Owner scope repair and current disposition

The owner repair closes §4.1 by replacing the mis-hypothesized fppf route
with a complete published-supplier Zariski gluing argument in the batch-24
manifest; no new helper or item is necessary. Exact edits, proof route, source
reading/stamp, local checks and remaining authoring uncertainty are recorded
in `research/frontier-40-geometry-braids-rep-27-batch-24.notes.md`,
“Step 3a owner scope repair”. The original review receipt and §§1–7 remain
historical evidence of the initial 231-edge scaffold; current counts are
233 edges and 101 distinct dependencies (77 published + 24 in-run), with
zero unavailable. All 20 original items, including the six design ids, remain;
18 A + 2 B is below the 100-A cap, with 27 pairs/54 pages retained.

Mathematical closure: nilpotent reduction identifies underlying spaces;
restriction uses their corresponding open subschemes. Compatible pieces
glue as locally ringed spaces by the published gluing theorem and are schemes
by the published scheme definition. Continuous structural maps and local
sheaf maps glue; flatness is stalkwise. Reductions and isomorphisms glue on
the same cover, and local inverses prove the groupoid equivalence. Local
finite presentation is retained on affine charts when imposed. This proof
applies without separatedness or quasi-finiteness and extends to first-order
base thickenings. Stacks 01JB/01JC and their complete proofs were read in the
fetched *Schemes* chapter; coverage records the two exact results and its
verified stamp (`fa2b63e8fd245fcd`, 582443 bytes, 49 pages).

On stable repaired input, dependency levels, manifest dependency arrays,
coverage (45 results), source verification (10/10), and whole-run manifest
content policy (892 items/54 pages) pass. This is a scope decision supported
by a complete authoring route, not an authored-item mathematical audit.
The current owner decision is `proceed`, bound by the separate Step-3a owner
receipt to the amended pair hash. The old engine review receipt is not flipped
or overwritten. No full workflow gate was attempted.
