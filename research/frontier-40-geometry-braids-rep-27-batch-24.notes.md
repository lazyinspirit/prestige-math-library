# Batch 24 — Deformation Theory of Schemes and Obstruction Spaces

Run `frontier-40-geometry-braids-rep-27`; pair orders 909/910, category
`scheme-theory`. The selected scope is preserved: all four A items of the
design row AG-DEF-1 (`def-infinitesimal-deformation-functor-over-square-zero-extension`;
`thm-first-order-deformations-controlled-by-ext-one-cotangent-complex`;
`thm-obstructions-lie-in-ext-two-cotangent-complex`;
`lem-tangent-and-obstruction-spaces-for-hypersurface-deformations`) and both B
items (`ex-first-order-deformations-of-a-hypersurface`;
`cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms`) are
scaffolded verbatim, with fourteen additional local prerequisite items on the A
page (definitions of square-zero/small extensions and thickenings, the
cotangent complex and its Ext groups, the truncation/smooth-case lemma, the
ext computation, the Lichtenbaum-Schlessinger comparison, the affine
obstruction/torsor theorem, Zariski descent, the Cech hypercohomology
comparison, two corollaries, and the two hypersurface items). 18 A items and 2 B
items, well under the 100-item page cap. No selected pair, plan page, published
item or engine state was edited. The owner scope repair below supersedes the original gluing strategy and Step-1 readiness claim for that amended scaffold.

## Status and readiness

- The original 20 Step-1 `ready` receipts describe the initial scaffold. The
  Step-3a owner repair amends the Zariski descent item; its prior readiness
  receipt is historical and is not a certification of the amended contract.
  Step-3 authoring and current item certification remain engine work.
- The A page consumes the in-run batch-23 cotangent-complex chain (page 907 and
  six of its items); those suppliers are scaffolded and their 53 readiness
  records are current (owner-resolved). They are not authored or published, so
  the 13 remaining incoming edges (1 page + 12 item) are recorded `open` in
  `...-batch-24.cross-batch-dependencies.json` for the Step-3 gate. No other
  batch consumes page 909; the only other consumer is this pair's own B page.
- No published defect was found in an actual prerequisite used. The published
  prerequisites that are consumed (`kahler-differentials-...`,
  `quasi-coherent-...`, `sheaf-cohomology-...`, `ext-and-balanced-resolutions`,
  and the projective-space cohomology items) are used only through their stated
  hypotheses, which match the uses here.
- AC record: the Axiom of Choice is declared in the items whose proofs use the
  derived-Hom/resolution comparisons, namely
  `def-ext-groups-of-the-cotangent-complex` (and through it all items citing
  `Ext`), `def-cotangent-complex-of-a-scheme-morphism`,
  `lem-cotangent-complex-truncation-and-smooth-case`,
  `lem-ext-of-locally-free-sheaf-via-cohomology`,
  `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext`,
  `lem-affine-deformations-obstruction-and-torsor`,
  `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`, the two
  main theorems, the two corollaries, and the two B items that compute with
  them. In each case `def-axiom-of-choice` is a declared dependency, AC is
  stated in the claim, and its use is the published Dependent Choice hypothesis
  of `thm-ext-is-hom-in-the-derived-category` (inherited via
  `thm-choice-implies-dependent-implies-countable-choice`). The geometric
  definitional items and the equation-level hypersurface classification
  (`lem-hypersurface-deformations-classified-by-equation-deformations`,
  `lem-cohomology-of-hypersurface-twists`) use no choice beyond the inherited
  AC of the published projective-space cohomology items. No incompatible-axiom
  branch is introduced, and no Foundations item is touched.

## Design, plan and conflict record

- Design: `research/plan-algebraic-geometry-expansion-track.md`, AG-DEF-1 row
  (line 258). Plan: `research/plan-spec.json` orders 909/910 with the same id,
  kind, category, companion, title and the five declared page requirements.
  The plan controls.
- Conflict recorded: the design text still says the pair "requires AV-16/18/21,
  Ext, cotangent complexes"; the AV-numbering is stale (it refers to the older
  AV algebraic-varieties plan, not to pages of the current plan). The plan
  materializes the requirement as the five pages
  `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`,
  `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`,
  `quasi-coherent-and-coherent-sheaves-and-vector-bundles`,
  `sheaf-cohomology-cech-cohomology-and-comparison` and
  `ext-and-balanced-resolutions`, and the manifest uses exactly those. No
  substantive design claim is dropped: "Ext" is supplied by the published
  homological-algebra page and this page's `def-ext-groups-of-the-cotangent-complex`,
  "cotangent complexes" by the in-run batch-23 chain plus
  `def-cotangent-complex-of-a-scheme-morphism`, and the "fixed deformation
  category" by `def-infinitesimal-deformation-functor-over-square-zero-extension`.
- Design instructions preserved: small extensions, flatness, automorphisms and
  the cotangent-complex convention are fixed in the first four items;
  classification and obstruction vanishing criteria are the content of items
  11-14 and 16-18; the four A and two B design ids are preserved verbatim.
- The design's source gate ("No proof source ... retrieve and read Illusie or a
  complete modern treatment plus an independent text. Vakil's Hilbert/moduli
  chapter is not a substitute.") is closed without a drop: the primary modern
  treatment is the Stacks Project (Chapters 90-93, complete proofs) and the
  independent text is Hartshorne's *Lectures on Deformation Theory* (full
  book draft, complete proofs of Theorem 10.1, Construction 3.1 and the
  Hilbert-scheme theorem), with Sernesi's survey as a third treatment of the
  Cech route. Vakil's Hilbert/moduli chapter is not cited. Illusie's LNM 239/283
  are named by the design but their Springer full text is behind an identity-
  provider cookie wall (the chapter URL redirects to idp.springer.com and
  returns a cookies-not-supported page with no mathematics); the errata file
  (https://www.imo.universite-paris-saclay.fr/~luc.illusie/ErrSLN239.pdf) was
  retrieved, and every theorem attributed to Illusie is backed instead by the
  full proofs in Stacks 92.16/92.21 and Hartshorne Chapter 2 Section 10. No
  `source_resolution` drop or owner escalation was needed.

## Dependency levels

Levels were recomputed from the union of all 24 current run manifests and match
the whole-run checker: batch-24 levels run 0-17 on the A page and 17-18 on the B
page (`node tools/item-dependency-levels.mjs check --run
frontier-40-geometry-braids-rep-27` reports 892 items over 54 pages, maximum
level 39). The in-run suppliers are all in batch 23: the page edge to
`algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations` and the 12
remaining item edges listed in `...-batch-24.cross-batch-dependencies.json`; each raises
the level of its consumers by exactly one plus the supplier's level. Published
and other-run prerequisites do not raise in-run levels. No cycle, forward edge
within the declared pages, or missing dependency was found.

## Mathematical shape of the scaffold

- **Conventions** (`def-square-zero-extension-and-small-extension`,
  `def-infinitesimal-deformation-functor-over-square-zero-extension`): square-zero
  and small extensions of Artin local `k`-algebras with the factorization
  theorem, first-order thickenings of schemes with their conormal sheaves, the
  deformation functor `Def_X` as a groupoid-valued functor, the trivial
  deformation, the tangent space and the infinitesimal automorphism group. The
  set-valued/groupoid-valued distinction is explicit.
- **The cotangent complex over schemes** (`def-cotangent-complex-of-a-scheme-morphism`,
  `def-ext-groups-of-the-cotangent-complex`,
  `lem-cotangent-complex-truncation-and-smooth-case`,
  `lem-ext-of-locally-free-sheaf-via-cohomology`,
  `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext`): glue the in-run ring-map
  cotangent complex over affine charts, define `Ext^i_{O_X}(L,M)` through the
  published derived Hom, identify the truncation with the naive cotangent
  complex, prove `L = Omega[0]` for smooth morphisms, compute Ext of a locally
  free sheaf by sheaf cohomology, and identify the presentation-level
  Lichtenbaum-Schlessinger `T^i` with `Ext^i(L,-)`.
- **Classification and obstruction** (`lem-affine-deformations-obstruction-and-torsor`,
  `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids`,
  `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`,
  `thm-first-order-deformations-controlled-by-ext-one-cotangent-complex`,
  `thm-obstructions-lie-in-ext-two-cotangent-complex`,
  `cor-deformation-cohomology-of-a-smooth-scheme`,
  `cor-vanishing-ext-one-implies-rigidity-of-deformation-classes`): the affine theorem
  (obstruction in `Ext^2`, torsor under `Ext^1`, automorphisms `Ext^0`), Zariski
  descent of flat deformations, the Cech computation of `Ext` of the cotangent
  complex, the two global theorems with their naturality and vanishing
  criteria, the smooth Kodaira-Spencer specialization, and the rigidity of
  isomorphism classes when `Ext^1` vanishes.
- **Hypersurfaces** (`def-embedded-deformations-of-a-closed-subscheme`,
  `lem-cohomology-of-hypersurface-twists`,
  `lem-hypersurface-deformations-classified-by-equation-deformations`,
  `lem-tangent-and-obstruction-spaces-for-hypersurface-deformations`, and the two B
  items): flat deformations of a smooth hypersurface of degree `d` in `P^n` are
  exactly deformations of its equation, the tangent space is `(S/(f))_d` of
  dimension `binom(n+d,n)-1`, the classical obstruction space
  `H^1(X,O_X(d))` vanishes, and the functor is formally smooth; the worked
  example computes the conic in `P^2` (5) and the quadric surface in `P^3` (9),
  and the counterexample shows on `A^1_k` that vanishing `Ext^1` does not make
  the deformation groupoid rigid because `Ext^0 = k[x] d/dx` is nonzero
  (`x -> x + eps*x^2`).

## Source harvest

Sources read (all fetch-verified through `tools/source-fetch-check.mjs --stamp`,
9/9 entries):

1. The Stacks Project, *Deformation Theory*, Chapter 91 (monograph,
   https://stacks.math.columbia.edu/download/defos.pdf). Sections 91.2, 91.3,
   91.7, 91.8 read: ring/ringed-space deformation lemmas via the naive
   cotangent complex and the scheme lemma 0D14. 5 harvest rows.
2. The Stacks Project, *The Cotangent Complex*, Chapter 92 (monograph,
   https://stacks.math.columbia.edu/download/cotangent.pdf). Sections 92.3,
   92.7-92.9, 92.11, 92.13, 92.16, 92.20-92.21, 92.24-92.25 read; in particular
   Lemma 92.16.1 (08SP) and Lemma 92.21.1 (08UZ) with complete proofs. 9
   harvest rows.
3. The Stacks Project, *Deformation Problems*, Chapter 93 (monograph,
   https://stacks.math.columbia.edu/download/examples-defos.pdf). Sections
   93.1-93.3, 93.9, 93.16 read. 5 harvest rows.
4. The Stacks Project, *Formal Deformation Theory*, Chapter 90 (monograph,
   https://stacks.math.columbia.edu/download/formal-defos.pdf). Sections
   90.1-90.3, 90.9, 90.16, 90.19 read. 4 harvest rows.
5. Robin Hartshorne, *Lectures on Deformation Theory* (textbook,
   http://math.berkeley.edu/~robin/math274root.pdf). Chapter 1 (Theorem 1.1,
   Proposition 2.3, Construction 3.1), Chapter 2 (Theorem 10.1), Chapter 3
   (Example 21.4) read. 7 harvest rows on the A page and 3 on the B page.
6. Edoardo Sernesi, *An overview of classical deformation theory* (survey,
   http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf). Sections
   1-3 read. 6 harvest rows on the A page and 2 on the B page.

Every harvested result has an explicit disposition: `included` (with the item
id), `inline` (with the absorbing item), or `out-of-scope` (with a specific
reason). Coverage: `node tools/coverage-checklist.mjs ...-batch-24.coverage.json`
reports 2 pages, 43 harvested results, 0 errors, 0 warnings. The design-named
Illusie LNM 239/283 volumes were not fetchable (Springer paywall; errata
retrieved); the design's own alternative (a complete modern treatment plus an
independent text) is used instead, so no drop contract is invoked.

## Checks run (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  → 892 items across 54 pages checked, maximum level 39, 0 errors (batch 24
  included; no empty inventories remain).
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-*.pages.json`
  → 892 scoped items, 0 errors, 0 warnings (all in-run supplier ids resolve).
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-24.pages.json`
  → 20 items, 0 missing, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-24.coverage.json`
  → 2 pages, 43 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage ...-batch-24.coverage.json --stamp`
  → 9/9 fetch-verified; check mode → 9/9 resolved, 0 documented drops.
- `node tools/validate-plan.mjs research/plan-spec.json` → passes (acyclic,
  consistent, no unresolved ids).
- `node tools/extcheck.mjs --run frontier-40-geometry-braids-rep-27` → passes
  (the reported `unproved-on-published` warnings are pre-existing published
  items outside this batch and do not involve batch 24).

## Residual uncertainty and notes for Step 3

- The heaviest local reconstruction is the passage from the affine theorem to
  schemes: `lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex`
  (Cech-to-derived spectral sequence for a complex with quasi-coherent
  cohomology on an affine cover) and the two global theorems that instantiate
  Stacks Lemma 92.21.1. The source proof is complete and was read; Step-3
  authors should write `lem-cech-hypercohomology-...` first and check the
  bounded-above/quasi-coherence hypotheses before the global items.
- The affine theorem follows Stacks Lemma 92.16.1; its part (1) is the only
  place where the transitivity triangle and the deformation theory of ring maps
  are used, and the alternative elementary presentation proof is Hartshorne
  Theorem 10.1. Item `lem-lichtenbaum-schlessinger-complex-and-cotangent-ext`
  is the bridge that makes the `T^i` language and the `Ext^i(L,-)` language
  agree.
- The comparison between embedded and abstract deformations of a hypersurface
  is recorded in the strategy and in Hartshorne Chapter 3 Section 21, but no
  item claims a comparison map is injective or surjective; only the two
  separate tangent/obstruction computations are claimed.
- The initial no-escalation assertion was superseded by the Step-3a review
  finding an unmet unrestricted Zariski gluing prerequisite. The owner scope
  repair below closes that finding at scaffold/proof-route level. Current
  Step-3 authoring and item audits remain required; this is not an authored
  proof acceptance or a full engine gate attempt.

## Step 3a owner scope repair (2026-10-05 local date)

The confirmed prerequisite for `lem-flat-deformations-form-a-zariski-sheaf-of-groupoids`
is closed by a complete published-supplier proof route, without adding a helper.
The amended manifest declares `thm-gluing-ringed-and-locally-ringed-spaces`,
`def-scheme`, `def-morphism-of-schemes`, `thm-gluing-sheaves`,
`thm-prime-spectrum-of-a-quotient-bijection`,
`thm-affine-fibre-product-tensor-ring`,
`def-fibre-product-schemes-universal-property`, `def-flat-morphism-schemes`,
and `def-locally-finite-presentation-morphism`, alongside the original deformation
conventions and AC assumption. Every new supplier is published and was read locally.
The previous five fppf/descent dependencies are removed. The three incoming
item rows to `def-descent-data-for-schemes`, `def-fppf-topology-on-schemes`,
and `lem-effective-fppf-descent-separated-locally-quasi-finite` disappear from
this pair's cross-batch file; no remaining edge is marked resolved.

On each affine chart, the reduction is `B -> B/IB` with `(IB)^2=0`, so every
prime contains `IB`, and quotient-prime correspondence plus principal opens
gives a homeomorphism. Overlap notation now means the open restriction
corresponding to `U_i cap U_j`, with reduction-compatible isomorphisms.
Gluing the locally ringed spaces yields a scheme because each point retains an
affine neighbourhood from a piece. Structural maps glue via continuous maps
and the sheaf property, with local stalk maps; flatness is then the unchanged
stalkwise flatness of each piece. Base-change reductions glue to `X`, and
compatible isomorphisms and their inverses glue, proving full faithfulness and
essential surjectivity. The same argument works over a nonaffine first-order
base thickening. Local finite presentation, if required, persists on affine
charts. No separatedness, quasi-finiteness or descent along the nonflat
quotient map is used. The unsupported general fppf parenthetical is removed.

Fresh source reading: Stacks *Schemes* Lemmas 26.14.1/26.14.2, tags 01JB/01JC,
including their proofs (PDF printed pages 25–26). The published gluing item's
reference tag 01JA labels the section; the precise lemma tags are 01JB/01JC.
Only those two results are claimed read and harvested. New chapter stamp:
582443 bytes, 49 PDF pages, `sha256_16=fa2b63e8fd245fcd`,
`at=2026-10-04T14:10:22.662Z`. Coverage now has 10 stamped source rows and 45
harvested results.

Checks on stable amended content: `item-dependency-levels check --run` passes
(892 items, 54 pages, max 39); the repaired item alone changes level 3 to 2;
`manifest-deps` passes (20 items); `coverage-checklist` passes (2 pages, 45
results, zero errors/warnings); `source-fetch-check` passes (10/10); whole-run
`content-policy --manifest-only ...-batch-*.pages.json` passes (892 items,
zero errors/warnings). Earlier isolated content-policy calls failed solely
because their selected inputs omitted in-run batches 23/15; the whole-run
check includes those suppliers. A direct dependency scan finds 233 edges,
101 distinct suppliers = 77 published + 24 in-run, zero unavailable; every
link in the amended statement/strategy is declared. The three removed
batch-23 suppliers are no longer needed by any item in this pair.

Scope remains AG-DEF-1's four A and two B design ids, all 20 original ids and
claims, 18 A + 2 B, and the selected 27 pairs/54 pages. No item prose, shared
plan, generated prompt, source supplier, or engine state was written.
The separate owner `proceed` receipt is recorded only after these checks.
The original insufficient review is retained as the historical finding.
The review's complex-level Cech authoring uncertainty and two unrelated
undeclared links remain explicit nonblocking authoring notes; this repair
does not claim their authored proofs have been checked.
