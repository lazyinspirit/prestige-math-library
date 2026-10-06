# Step 3b authoring report — algebraic spaces, stacks and derived AG foundations

- Run: `frontier-40-geometry-braids-rep-27`
- Role: alpha-high, step 3b pair author
- A page: `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations` (order 907, batch 23)
- B page: `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations-examples` (order 908, batch 23)
- Owned inventory: 53 items (50 A + 3 B), all *original scaffold IDs* in the
  immutable pre-author baseline; each therefore needs an ordinary current item
  decision (`tools/step3-decisions.mjs record-item`, accept/repaired,
  confidence 1) after authoring.

## Owned IDs (authoring order = dispatch dependency-level order)

Level 0: `def-category-fibred-in-groupoids`, `def-fppf-topology-on-schemes`,
`def-groupoid-in-schemes-and-etale-equivalence-relation`,
`def-model-category-and-quillen-adjunction`,
`def-polynomial-factorization-category-and-cotangent-diagram`,
`def-simplicial-object-and-simplicial-commutative-ring`,
`lem-projective-representables-and-derived-colimits-of-module-diagrams`.

Level 1: `def-descent-data-for-schemes`, `def-fppf-sheaf-and-sheafification`,
`def-simplicial-set-homotopy-and-trivial-kan-fibration`,
`def-standard-resolution-of-a-ring-map`,
`lem-etale-equivalence-relation-restriction`,
`lem-simplicial-algebra-cotangent-adjunctions-before-deriving`.

Level 2: `def-cotangent-complex-of-a-ring-map`,
`def-descent-data-and-stack-in-groupoids`,
`def-representable-morphism-of-presheaves`,
`def-simplicial-horn-and-kan-fibration`,
`lem-effective-fppf-descent-separated-locally-quasi-finite`,
`lem-fppf-sheafification-exists`,
`lem-simplicial-normalization-prism-and-trivial-fibration-criterion`,
`lem-trivial-simplicial-fibration-fibres-products-and-contraction`.

Level 3: `def-algebraic-space-as-fppf-sheaf`,
`def-quotient-fppf-sheaf-of-a-pre-relation`,
`lem-boundary-horn-product-is-anodyne`,
`lem-contractible-cosimplicial-evaluation-computes-derived-colimit`,
`lem-standard-polynomial-resolution-admissibility`,
`thm-dold-kan-equivalence-for-simplicial-modules`.

Level 4: `def-morphism-and-fibre-products-of-algebraic-spaces`,
`lem-additive-kan-and-normalized-fibration-criterion`,
`lem-derived-colimit-coefficient-and-category-change`,
`lem-quotient-sheaf-base-change-along-flat-lfp-map`,
`lem-scheme-functor-is-algebraic-space`.

Level 5: `def-morphism-representable-by-algebraic-spaces`,
`lem-cotangent-complex-resolution-independence`,
`lem-open-immersion-gluing-of-algebraic-spaces`,
`lem-presentation-from-surjective-etale-map`,
`lem-variable-base-cotensor-corner-and-path-objects`,
`ex-scheme-as-algebraic-space` (B).

Level 6: `def-algebraic-stack-and-inertia`,
`def-presentation-of-an-algebraic-space`,
`lem-cotangent-complex-h0-and-polynomial-case`,
`thm-model-structures-on-variable-simplicial-modules-and-algebras`.

Level 7: `lem-inertia-of-a-stack-in-setoids`,
`lem-quotient-map-etale-when-quotient-is-algebraic-space`,
`lem-replacement-invariant-derived-enriched-mapping-spaces`,
`ex-classifying-stack-of-a-finite-group` (B).

Level 8: `lem-affine-etale-equivalence-relation-quotient`,
`lem-fixed-base-simplicial-cotangent-represents-derived-derivations`,
`thm-projective-models-for-simplicial-and-variable-module-diagrams`,
`cex-quotient-stack-need-not-be-a-scheme` (B).

Level 9: `lem-projective-span-homotopy-pushout-mapping-property`,
`thm-algebraic-space-from-etale-equivalence-relation`.

Level 10: `def-derived-scheme-and-cotangent-complex`.

## Open obligations at entry

1. **In-run supplier.** `cex-quotient-stack-need-not-be-a-scheme` consumes the
   batch-15 item `def-quotient-sheaf-and-representable-quotient` (pair
   `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`,
   scope-closed `sufficient`). That pair has no authored item files at entry;
   the consuming step is the field-level quotient-sheaf comparison in the
   counterexample's proof. Author anyway; keep the item decision escalated
   until the supplier file exists and the exact use is reconciled.
2. **Derived interface residue (step 3a finding 2).** The owner-authorized
   route closes `def-derived-scheme-and-cotangent-complex` against the
   `owner-group-actions/derived-final-*` proof packets; I must transcribe the
   actual local construction into the item and record which parts are exact
   authoritative imports.
3. **Constant group scheme (step 3a finding 1).** Both B-page items use "the
   constant group scheme $G_k$". This is not published. Allowable options:
   build it inside the two B items from the published coproduct of schemes.
   No new IDs may be added for it (the frozen inventory is 53 items and the
   pair scope is closed); the construction is supplied locally in the items.
4. **Coverage mappings (step 3a finding 4).** `lem-fppf-sheafification-exists`
   and `def-representable-morphism-of-presheaves` cite locators outside the
   recorded coverage ranges; refresh the coverage ledger mappings (not the
   sources) when authoring those items.
5. **Cross-batch input.** Keep
   `research/frontier-40-geometry-braids-rep-27-batch-23.cross-batch-dependencies.json`
   current for the batch-15 edge; run `frontier-dependency-ledger.mjs refresh`.

## Checkpoints

Each checkpoint records: item, exact claim/conventions, source locators,
dependencies, decisions, checks run, open gaps, next action.

### Level 0 — written (7/7)

- `def-category-fibred-in-groupoids` (definition; cartesian arrows with the
  full universal property, fibre groupoids, strict 2-category, no cleavage
  required). Suppliers read: category/functor/natural-transformation/
  groupoid/opposite. Sources Vistoli 3.5-3.23, Stacks 4.33 (02XN).
  Checks: rendercheck OK; precheck n/a. No gaps.
- `def-fppf-topology-on-schemes` (definition; flat + lfp jointly surjective
  families, stability under base change and composition proved inline).
  Sources Stacks 34.7 (021L, 021P-021S), Vistoli 2.3.1-2.3.2. No AC.
- `def-groupoid-in-schemes-and-etale-equivalence-relation` (definition; the
  axioms are written with the composable-pair convention
  $c\colon R\times_{s,U,t}R\to R$, and the two-endpoint restriction
  $R'=R\times_{U\times_SU}(U'\times_SU')$ of the owner correction is used).
  Sources Stacks 022P/022Q/02WS, Vistoli 3.4-3.5.
- `def-model-category-and-quillen-adjunction` (definition; Quillen
  adjunction equivalence transposition argument stated; no model-structure
  existence asserted; initial/terminal distinction recorded).
  Source Goerss-Schemmerhorn Def. 1.3/Rem. 1.4.
- `def-polynomial-factorization-category-and-cotangent-diagram`
  (definition; small bounded presentation model, AC use stated precisely,
  cotangent diagram contravariant, coefficient square functor).
  Source Stacks 92.4 (08PQ/08PR).
- `def-simplicial-object-and-simplicial-commutative-ring` (definition;
  simplex category, simplicial identities, Moore complex and
  $\pi_n=H_n$, weak equivalences, derived-ring localization). Sources
  Stacks Chapter 14 (016A, 019G, 09CB), Toen 2.1-2.2.
- `lem-projective-representables-and-derived-colimits-of-module-diagrams`
  (lemma, constructive; abelian/pointwise exactness, Yoneda
  $\operatorname{Nat}(R_U,F)=F(U)$, projectivity, canonical epimorphism,
  bounded-above replacements, $\operatorname{colim}R_U=R$, bar complex
  $K_n=\bigoplus_{U_n\to\cdots\to U_0}F(U_0)$ with last face a coefficient
  restriction; AC used for coproduct lifts and via AC$\Rightarrow$DC).
  Sources Stacks Sites-and-Sheaves 39.1-39.3/39.7 (08PF/08PG/08PH/08Q9),
  Stacks 12.18.3. Checks: precheck PASS (adopted canonical layering),
  proof-layout 11 steps 0 defects, rendercheck OK.

### Level 1 — written (6/6)

- `def-descent-data-for-schemes` (definition; the manifest's duplicated
  $\mathrm{pr}_{X_i}$ was repaired to the correct two projections
  $\mathrm{pr}_1^*V_i\to\mathrm{pr}_2^*V_j$; cocycle over $X_{ijk}$;
  effectivity = essential image of base change). Source Stacks 35.34.1
  (023U), Vistoli 4.1-4.3.
- `def-fppf-sheaf-and-sheafification` (definition; equalizer formulation of
  the sheaf condition, universal property of sheafification, representables
  are sheaves under the AC recorded in the supplier). Sources Stacks 34.7
  with 34.10, Vistoli 2.3.1-2.3.7.
- `def-simplicial-set-homotopy-and-trivial-kan-fibration` (definition;
  boundary = non-surjective maps, $\partial\Delta[0]=\varnothing$, degreewise
  limits, simplicial homotopy, boundary-lifting trivial Kan fibration).
  Source Stacks 14.11/14.21/14.26/14.30.1 (08NL).
- `def-standard-resolution-of-a-ring-map` (definition; $P_n=A[P_{n-1}]$,
  faces/degneracies from counit/unit, augmentation from the structure map;
  the weak-equivalence clause is explicitly delegated to
  `lem-standard-polynomial-resolution-admissibility` via `justified_by`).
  Sources Stacks 92.3.1 (08PM), Stacks 14.34.7 (09CB).
- `lem-etale-equivalence-relation-restriction` (lemma, direct; mono base
  change gives the relation for arbitrary $g$; for etale $g$ the
  factorisation $R'\cong(R\times_{t,U,g}U')\times_R(R\times_{s,U,g}U')$
  writes $s'=a'\circ\mathrm{pr}_A$ and $t'=b'\circ\mathrm{pr}_B$ as
  composites of etale base changes). Source Stacks 02WT.
  Checks: precheck PASS, proof-layout 3 steps 0 defects, rendercheck OK.
- `lem-simplicial-algebra-cotangent-adjunctions-before-deriving` (lemma,
  direct; three strict adjunctions with explicit hom-set bijections,
  $K\dashv I$ is an equivalence with $KI(D)\cong D$ and $IK(I)=I$, weak
  equivalences preserved/reflected, conditional Quillen clause only under
  separately established model structures). Source HAG II
  1.2.1.2/1.2.1.3. Checks: precheck PASS, rendercheck OK.

Open gaps after level 1: none newly opened; the batch-15 supplier for the B
counterexample is still unauthored (unchanged), and the derived-fibre
obligation (item 53) remains.

Next action: level 2 items, starting with `def-cotangent-complex-of-a-ring-map`
and the owner-packet lemmas
`lem-trivial-simplicial-fibration-fibres-products-and-contraction`,
`lem-simplicial-normalization-prism-and-trivial-fibration-criterion`.

### Levels 2-3 — written (14/14; running total 27/53)

- Level 2 definitions: `def-cotangent-complex-of-a-ring-map` (cohomological
  indexing $L^{-n}=M_n$; independence delegated to the comparison theorem),
  `def-descent-data-and-stack-in-groupoids` (prestack = morphism presheaves
  are sheaves; stack = effective descent; setoids), and
  `def-representable-morphism-of-presheaves` and
  `def-simplicial-horn-and-kan-fibration` (horn lifting, anodyne = composite
  of pushouts of coproducts of horn inclusions, AC only for set-indexed
  lift choices).
- Level 2 proofs: `lem-effective-fppf-descent-separated-locally-quasi-finite`
  follows the Stacks 02W8 route (affine reduction by Descent 35.36.2,
  saturated open $W=\mathrm{pr}_1\varphi(W^1\times_SX)$, universally open
  projection, Zariski Main, algebra descent, glueing by Descent 35.35.13);
  `lem-fppf-sheafification-exists` uses the two-step plus construction and
  the two published filtered-colimit tools; both simplicial packet lemmas
  (`lem-trivial-simplicial-fibration-...`,
  `lem-simplicial-normalization-prism-...`) are transcribed from the owner
  packet with the canonical layering and pass precheck.
- Level 3: `def-algebraic-space-as-fppf-sheaf` (Stacks 025Y exactly:
  sheaf + representable diagonal + etale scheme cover, no other hypothesis),
  `def-quotient-fppf-sheaf-of-a-pre-relation` (naive quotient presheaf and
  its sheafification; AC declared; $U/G$ and $G/H$ conventions stated),
  `lem-standard-polynomial-resolution-admissibility`,
  `lem-contractible-cosimplicial-evaluation-computes-derived-colimit`,
  `lem-boundary-horn-product-is-anodyne` (pivot matching; AC only for the
  general-monomorphism cell choices), and
  `thm-dold-kan-equivalence-for-simplicial-modules` (explicit $\Gamma$ with
  the four-case rule and $N\Gamma\cong\mathrm{id}$, $\Gamma N\cong\mathrm{id}$);
  the last three are transcribed from the owner packets.
- Checks actually run on the 27 authored items: `precheck.mts` all 27 PASS
  (11 proof items checked clean), `proof-layout.mjs` 27 items / 65 steps /
  0 defects, `rendercheck.mjs` all clean. Several items required adopting the
  precheck canonical step layering; the `## Proof` heading was restored where
  the adoption replaced it.

Next action: level 4 — `def-morphism-and-fibre-products-of-algebraic-spaces`,
`lem-scheme-functor-is-algebraic-space` (Stacks 025Z),
`lem-quotient-sheaf-base-change-along-flat-lfp-map` (Stacks 02WU),
`lem-additive-kan-and-normalized-fibration-criterion` and
`lem-derived-colimit-coefficient-and-category-change` (owner packets).

### Levels 4-10 — written (26/26; running total 53/53)

All 53 item files now exist under `items/`. Level-4 algebraic items:
`def-morphism-and-fibre-products-of-algebraic-spaces` (fibre products of
algebraic spaces with the objectwise formula and the etale cover
$U_F\times_{U_H}U_G$), `lem-scheme-functor-is-algebraic-space` (sheaf,
representable diagonal, identity cover, Yoneda fullness),
`lem-quotient-sheaf-base-change-along-flat-lfp-map` (transcribed from the
Stacks 02WU proof read in the owner extraction: saturated open
$W=t(s^{-1}(g(U')))$, local open gluing of $W_j$, direct verification of
$W_T$ representing $T\times_FF'$), plus the two owner-packet simplicial
lemmas. Level 5: `def-morphism-representable-by-algebraic-spaces` (presheaf
and stack forms), `lem-presentation-from-surjective-etale-map` (kernel pair,
mono, étale projections, mono+epi comparison), `lem-open-immersion-gluing-of-algebraic-spaces`
(disjoint unions and open gluing), `ex-scheme-as-algebraic-space` (affine
line with its diagonal presentation), the owner-packet
`lem-cotangent-complex-resolution-independence` (four-clause statement with
the affine/category-change comparison, the derived-tensor isomorphism
criterion, the Tor test and the same-target localization case) and
`lem-variable-base-cotensor-corner-and-path-objects`. Level 6:
`def-algebraic-stack-and-inertia`, `def-presentation-of-an-algebraic-space`,
`lem-cotangent-complex-h0-and-polynomial-case` (cokernel presents
$\Omega_{B/A}$; constant polynomial resolution contracts) and
`thm-model-structures-on-variable-simplicial-modules-and-algebras` (explicit
small-object/path-retract/retract transfer plus tensors, cotensors and the
mapping corner). Level 7: `lem-inertia-of-a-stack-in-setoids` (full
faithfulness and essential surjectivity), `lem-quotient-map-etale-when-quotient-is-algebraic-space`
(02WV: base change to $T_i\times_{a_i,U,t}R$), `lem-replacement-invariant-derived-enriched-mapping-spaces`
and `ex-classifying-stack-of-a-finite-group` (constant group scheme built
locally as $\coprod_{g\in G}\operatorname{Spec}k$; torsor stack, presentation,
left-multiplication automorphisms, abelian inertia $G_k\times_kBG$). Level 8:
`lem-affine-etale-equivalence-relation-quotient` (0265 with separated
locally quasi-finite $j$ and effective descent),
`thm-projective-models-for-simplicial-and-variable-module-diagrams`,
`lem-fixed-base-simplicial-cotangent-represents-derived-derivations` and
`cex-quotient-stack-need-not-be-a-scheme`. Level 9:
`lem-projective-span-homotopy-pushout-mapping-property` (pivot-free
deformation-equivalence argument for the path homotopy pullback) and
`thm-algebraic-space-from-etale-equivalence-relation` (02WW: affine cover,
open subquotients, coproduct and open gluing). Level 10:
`def-derived-scheme-and-cotangent-complex` (Toen 2.1 truncation adjunction
plus the gluing interface of the cotangent complex, with the pi0 pullback
distinguished from the full module).

## Handoff

**Completed IDs: all 53** (`def-fppf-topology-on-schemes` ...
`def-derived-scheme-and-cotangent-complex`); two pages written:
`library/scheme-theory/algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations.md`
(50 items) and
`library/scheme-theory/algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations-examples.md`
(3 examples), both `status: draft`, with the plan's exact `requires` lists.

**Checks actually run (all on this machine, after the final item edits).**

| check | scope | result |
|---|---|---|
| `tools/precheck.mts` | all 53 items | 32 proof items checked, 0 failing |
| `tools/proof-layout.mjs` | all 53 items | 53 items, 150 steps, 0 defects |
| `tools/rendercheck.mjs` | all 53 items + 2 pages | OK |
| `tools/content-policy.mjs` | batch-23.pages.json | 53 scoped items, 0 errors, 0 warnings |
| `tools/manifest-deps.mjs` | batch-23.pages.json | 53 items, 0 errors |
| `tools/coverage-checklist.mjs --require-destination` | batch-23.coverage.json | 2 pages, 123 results, 0 errors |
| `tools/item-dependency-levels.mjs check --run` | whole run | 894 items, 54 pages, no mismatch |
| `tools/depcheck.mjs` | whole library | 0 rows naming any batch-23 item or page |
| `tools/validate-plan.mjs research/plan-spec.json` | plan | exit 0; 907/908 carry empty item lists pending splice |
| `tools/extcheck.mjs` / `tools/fwdcheck.mjs` | whole library | extcheck OK; fwdcheck's existing failures name only other runs' items |
| `tools/proof-contract.mjs <batch-23.contracts> --strict` | 32 proof items | 0 errors, 1 non-fatal shotgun-bracket warning |
| `tools/boundary-audit.mjs --fail-on-contradicted --fail-on-template` | batch contract | exit 0; 256 rows, 0 clusters, 0 contradicted |
| `tools/citation-fidelity.mjs --fail-on-missing-quote` | batch contract | exit 0 |
| `tools/finite-smoke.mjs` | batch contract | 0 errors, 0 obligations declared |
| `tools/step3-decisions.mjs check --phase final` | whole run | my pair: 51 accepted, 2 escalated, 0 other open work |

**Added suppliers.** No new item IDs were created (the frozen inventory is
exactly the 53 assigned IDs); the constant group scheme used by both B items
is built locally inside them, as the owner direction requires. Seven
already-published items were added to `deps` as local repairs (the two
filtered-colimit tools for `lem-fppf-sheafification-exists`; the missing
linked suppliers for `lem-boundary-horn-product-is-anodyne`,
`lem-fixed-base-simplicial-cotangent-represents-derived-derivations`,
`lem-presentation-from-surjective-etale-map`; and the depcheck-driven
additions also cleared in `def-morphism-and-fibre-products-of-algebraic-spaces`'s
chain); no sibling rows were disturbed.

**Published concerns.** No published item consumed by this pair was found
defective. The library carries unrelated published debt (949 depcheck rows
and the pre-existing fwdcheck failures on `thm-weight-subgroups-of-a-torus-action`
and `thm-weyl-group-borel-chambers`); none names a batch-23 item. The step-3a
coverage-bookkeeping gaps for `lem-fppf-sheafification-exists` and
`def-representable-morphism-of-presheaves` are recorded in the item sources
(Sites and Sheaves 7.10 and Stacks 02W9/025V); the coverage ledger itself was
left unchanged for the Step-4 reconciler.

**Open obligations.**

1. `cex-quotient-stack-need-not-be-a-scheme` is **escalated**: its step 2.1
   uses the unauthored batch-15 supplier
   `def-quotient-sheaf-and-representable-quotient`. Exact row updated in
   `research/frontier-40-geometry-braids-rep-27-batch-23.cross-batch-dependencies.json`
   (status `open`).
2. `def-derived-scheme-and-cotangent-complex` is **escalated**: the item is
   authored from the owner-authorized packets, but the full derived
   locally-ringed-space/QCoh gluing construction is condensed and rests on
   exact authoritative imports; independent verification (step-3a finding 2)
   remains for owner/Step-5 action.
3. `tools/frontier-dependency-ledger.mjs refresh --run …` could not complete:
   it aborts parsing `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md`,
   a sibling pair's file with an unquoted YAML title containing a colon
   ("Nested mappings are not allowed in compact mappings at line 3"). This is
   outside my write authority; the batch-23 input file is updated on disk and
   the refresh should be re-run by its owner after that sibling file is fixed.
4. Plan/splice note: `research/plan-spec.json` orders 907/908 still carry empty
   item lists (pre-splice state); the pages and manifests agree with the plan
   metadata, so no plan mismatch beyond the owned splice update was found.
