# Step 3a scope review — A/B pair `finite-coxeter-diagrams-and-complete-classification`

Run `frontier-42-coxeter-32` · role alpha · batch 13 · design label CG-10 · orders 1742/1743.

- A page: `finite-coxeter-diagrams-and-complete-classification` (kind A, category `coxeter-groups`).
- B page: `finite-coxeter-diagrams-and-complete-classification-examples` (kind B, dependency leaf).
- Decision: **`sufficient`** — scope only. No item approval, no owner record, no scaffold edit.
  Receipt: `research/frontier-42-coxeter-32-step3a-review-finite-coxeter-diagrams-and-complete-classification.json`.

## Inputs read

- `research/frontier-42-coxeter-32-batch-13.pages.json` (both pages, all 10 items: statements,
  strategies, deps, sources, dependency levels), `...-batch-13.coverage.json`,
  `...-batch-13.notes.md`, `...-batch-13.cross-batch-dependencies.json` (29 edges, all `open`).
- Design: `research/plan-coxeter-groups-track.md` §CG-10 (lines 276–310) and its B companion
  sentence; `research/plan-spec.json` (orders 1742/1743, `requires`
  `tits-cones-chambers-and-parabolic-stabilizers` on the A page, the A page on the B page);
  `research/coxeter-scaffold/inventory.json` (CG-10: the same five ids/contracts);
  `research/coxeter-scaffold/definition-justifications.json` (the single CG-10 definition);
  native prose `library/coxeter-groups/finite-coxeter-diagrams-and-complete-classification{,-examples}.md`.
- Owner/plan: `research/frontier-42-coxeter-32-owner-scope.json`,
  `...-owner-authoring-direction.md`, `...-scope-ledger.json`,
  `...-alpha-step1-drift.md` §finite-coxeter-diagrams (`VERDICT: no-drift`,
  "No prerequisite gap").
- Suppliers: current statements/strategies of the in-run suppliers consumed by the pair
  (batch 2: `def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`; batch 4:
  `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `def-cg-dual-chambers-and-reflection-hyperplanes`,
  `lem-cg-dual-action-and-chamber-faces-exist`; batch 7:
  `thm-cg-root-length-criterion-and-faithfulness`; batch 9:
  `thm-cg-dual-chamber-intersections-and-point-stabilizers`), and the published items named
  in the item deps.
- Role: all 64 run page manifests plus `items/` for the dependency closure, the plan
  `Requires:` lines, and the consumer items listed in §4.

## 1. Prose design versus scaffold (A page)

The five design contracts are realized by exactly five items; no contract was dropped and
none was replaced by a citation.

| Design contract (§CG-10) | Scaffolded item | Coverage |
|---|---|---|
| `def-cg-coxeter-diagram-components-and-finite-type` | A1: edges/labels/reconstruction, components, neighbourhoods, irreducible = connected, finite type = `W` finite, with the design's explicit abstention that no list, no positivity and no geometric realization enters the definition | complete |
| `lem-cg-diagram-products-and-invariant-form-comparison` | A2: direct product via commuting generators and injective factor projections, `B`-orthogonal decomposition, invariant-form comparison with the fixed hyperplane `ker B(-,e_s)`, `λ`-constancy along edges, finite `W` ⇒ `B` positive definite | complete |
| `thm-cg-finite-type-positive-definite-criterion` | A3: `W` finite ⟺ `B` positive definite; dual form `B*`; isolation of the identity and discreteness (clause (3) stated without positive definiteness); the selected route uses faithfulness + dual-chamber isolation + compactness of `O(B)` and no unproved spherical developing-map theorem | complete |
| `lem-cg-positive-definite-diagram-exclusions` | A4: witness principle on non-negative vectors, no cycles, `Σ_{t∈N(s)}c(s,t)²<1` with valency/label consequences, at most one branch vertex and at most one edge of label ≥4 (path), the path recursion `d_k=d_{k-1}-cos²(π/m_{k-1})d_{k-2}`, the chain inequality with its `m=4,5,≥6` cases, the three-arm inequality, and the conclusion listing the positive definite diagram types | complete |
| `thm-cg-finite-coxeter-classification-including-h-and-dihedral` | A5: irreducible list `A_n (n≥1), B_n (n≥2), D_n (n≥4), E_6,E_7,E_8, F_4, H_3, H_4, I_2(m) (3≤m<∞)`, reducible case componentwise with the direct-product identification, positivity of every listed diagram via the `det(2C)` values and Sylvester, and the low-rank coincidences with a duplicate-free list; no integrality restriction | complete |

Convention/hypothesis ledger (as stated in the scaffold):

- Diagram: an edge exactly when `m(s,t)≥3`, label `3` omitted, `m=2` draws no edge, labels in
  `{3,4,…}∪{∞}`; `m↦Γ` is injective; `Γ_T` is the induced labelled subgraph.
- Form: `B(e_s,e_s)=1`, `B(e_s,e_t)=-cos(π/m(s,t))` for finite `m` and `-1` for `m=∞`;
  `c(s,t)∈[0,1]`, `c(s,t)=0` exactly when `m=2`, and `c(s,t)≥1/2` whenever `m≥3`.
- The definition presumes no positivity, definiteness or nondegeneracy; positive definiteness
  is a hypothesis of A4 and an equivalent of finiteness in A3, never a convention.
- `S` is finite throughout; no affine, hyperbolic or integrality claim is made here (§3
  records the deferrals). No item carries `axiom_use`; the strategies use finite sums only and
  a choice-free Heine–Borel on `R^{n²}`.

## 2. B companion versus design

The design's B sentence is realized item-for-item, with one recorded enrichment (B4):

- Gram determinants in `I_2(m)` and the finite/infinite dihedral split — B1 (i)–(iii);
- Gram determinants and principal minors of `H_3`, `H_4` plus excluded neighbours — B2;
- `B_n` and `C_n` as the same Coxeter diagram and the same system — B3;
- a cycle and the overlong arm `(1,2,5)` with explicit non-positive vectors — B5, plus the
  two-large-label witnesses in B5 (iii);
- `A_1` and products and the low-rank coincidences — B1 (iv);
- path-determinant recursion and the three-arm inequality with the D/E triples — B4
  (enrichment exercising A4 (5)–(6); it consumes B5 backwards, never forwards).

The B page is a genuine dependency leaf: no item outside the pair and no page `requires`
references any B id (checked over all 64 run manifests and `plan-spec.json`), matching the
native prose ("no other theory page may depend on a supplier homed here").

## 3. Source coverage

Two fetch-verified treatments; I re-downloaded both on 2026-10-07 and reproduced the coverage
stamps exactly.

| Source | URL | Bytes | sha256-16 | Role |
|---|---|---|---|---|
| M. W. Davis, *The Geometry and Topology of Coxeter Groups* (2007–08 author manuscript) | people.math.osu.edu/davis.12/davisbook.pdf | 4220570 | `ccefbb950fdcfce9` | Appendix C classification and determinant table; Appendix D isolation/discreteness |
| J. Michel, *Lectures on Coxeter groups* (Beijing 2014) | webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf | 268299 | `94731c97ae760919` | full second proof: Prop. 5.14, Thm. 5.15 with the exclusion chain |

Read for this review (complete relevant arguments, not extracts of record): Michel §5,
printed pp. 12–15 — Proposition 5.14 (i) and (ii) with proof (averaging; compact orthogonal
group; discreteness via `{g∈GL(V*): g(x)∈C}`), the Theorem 5.15 statement, the cosine table,
the determinant computations `det C(A_n)=n+1`, `det C(B_n)=2`, `det C(D_n)=4`,
`det C(E_6,E_7,E_8)=3,2,1`, `det C(F_4)=1`, `det C(I_2(m))=4(1-cos²(π/m))`, `det C(H_3)=3-√5`,
`det C(H_4)=(7-3√5)/2`, and properties (i)–(vii): parabolic subgraphs spherical; tree/circuit
witness `v=Σe_{s_i}`; the neighbour inequality `Σ⟨e_s,e_j⟩²<1` and its valency/label
conclusions; the gluing lemma (iv); at most one edge of label >3 and at most one degree-3
vertex (v); the chain inequality `(i+1)(j+1)>4ijcos²(π/m)` with the `(1,j)`/`(2,2)` case
analysis (vi); the three-chain inequality `1/(p+1)+1/(q+1)+1/(r+1)>1` (vii). Davis: Theorem
C.1.2 and C.1.3 statements, Table C.1 (same det `2A` values), Lemma C.2.3 (`Z_4`, `Z_5`
negative determinants), and Appendix D: Theorem D.1.1 (`wC̊∩C̊≠∅ ⇒ w=1`) with Corollary D.1.3
and its proof (`V={g∈GL(E*): g(φ)∈C̊}` is an identity neighbourhood meeting `ρ*(W)` only in
`1`; hence discreteness) — exactly the isolation the criterion consumes.

Numeric spot-checks I recomputed: the cycle witness `r-2r·½=0`; the star witness coefficients
`1/(p+1)` giving `1-(1/4+1/3+5/12)=0` for arms `(1,2,5)` and `1/60>0` for `(1,2,4)`; the path
witnesses for labels `4,4` and `4,3,4`; `d_4<0` for the path `3,5,3` and `d_5<0` for
`3,3,5,3` via the recursion; the `H_3`/`H_4` minors `2,3,3-√5`, `(5-√5)/2`, `2,3,4,(7-3√5)/2`;
the chain-inequality cases `m=4`, `m=5`, `m≥6`; and the boundary triples `(1,2,5)`, `(2,2,2)`,
`(1,3,3)`. All agree with the statements.

The coverage file dispositions 24 harvested rows (12 `included`, 6 `inline`, 1 `deferred`,
5 `out-of-scope` with stated reasons; 0 errors, 0 warnings under
`coverage-checklist --require-destination`). The single deferral is Davis Theorem C.1.3 and
the Euclidean column of Table 6.1 to `affine-coxeter-diagrams-and-semidefinite-classification`
(batch 27 of this run, which exists and itself consumes this pair); the out-of-scope rows
(spherical-simplex equivalence, hyperbolic `(n,1)` classification, Lannér trichotomy,
virtual torsion-freeness, Michel Exercise 5.16 integrality) are homed in other pages/other
run scopes, and the crystallographic page (batch 21) owns integrality. Source caveat: Davis
states his Appendix C proof "is essentially the one given by Humphreys"; the two expositions
read here are independent in method (determinant/domination route in Davis vs the neighbour
inequality, gluing and chain/arm inequalities in Michel), and no claim rests on Humphreys,
which is not claimed read.

## 4. Prerequisites and role

- Dependency scan over the current manifests: **177** item dependency edges, **78** distinct
  ids — **62 published** library items and **16** scaffolded in this run (batch 2: 2;
  batch 4: 6; batch 7: 1; batch 9: 1; batch 13: 6, i.e. the pair's own items).
  **Zero** edges target an id absent from both the published library and the current
  scaffold; the dependency traversal (145 items visited) terminates in published items or
  current-run scaffold items with no missing node;
  `manifest-deps` reports 0 errors over the run's 302 items and
  `item-dependency-levels check` exits 0.
- Used clauses of the in-run suppliers verified against their current statements, not
  assumed: batch 2 gives the presentation, its universal property, `m(s,t)=ord(st)`, the
  length function, `W_J={w:S(w)⊆J}` and the intrinsic parabolic presentation with restricted
  length equal to the ambient one; batch 4 gives `B(e_s,e_t)=-cos(π/m)`, the reflection
  formula with fixed hyperplane `ker B(-,e_s)`, `(r_sr_t)^k≠1` for `0<k<m`, the canonical
  homomorphism `ρ(s)=r_s`, `ρ`-preservation of `B`, and the dual chambers/faces; batch 7 gives
  `wC̊∩C̊≠∅ ⇒ w=1` and faithfulness of `ρ` and `ρ*`; batch 9 gives the collision theorem
  `w·f=g ⇒ f=g, w∈W_{S(f)}`, point stabilizers and the strict fundamental domain, which is
  what A3 (3) uses with `W_∅={1}`. The page `requires`
  `tits-cones-chambers-and-parabolic-stabilizers` is scaffolded (batch 9) and its consumed
  item is the collision theorem above; the batch-13 note records this as the concrete use of
  the page prerequisite.
- Intended role checked: the five A items are consumed by 24 pages of this run
  (122 dependency edges; e.g. the finite reflection arrangements, Cartan/reflection-length,
  bipartite, invariants, crystallographic, metric-flag, Poincaré, Davis-complex, affine
  classification, Euler-form, CAT(0) and noncrossing pages), and every consumer uses a clause
  the statements actually contain (the classification list, the criterion, the exclusions
  tree/valency/label statements, or the diagram definition). The B page is leaf-only (§2).
  No run page duplicates the finite classification; the affine page's semidefinite
  classification is complementary and was recorded as the deferral destination.
- **Confirmed unmet prerequisites absent from both the published library and the current
  scaffold: none.** Honest uncertainty: (i) this is a statement/manifest-level check — no
  item file exists yet, and supplier proofs are Step-3b obligations, so clause-level matching
  is checked against scaffold statements, not proofs; (ii) consumers outside this run were
  checked at plan/manifest level only; (iii) all three directions of the classification
  (finiteness ⟺ positive definiteness, positivity of survivors, exclusion of the rest) are
  promised with proof routes, but their execution is not certified here.

## 5. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps (pair) | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-13.pages.json` | 10 items, 0 errors |
| manifest deps (run) | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 302 items, 0 normalized, 0 errors |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | 302 items, 64 pages, max level 31, exit 0, no line names a batch-13 item |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests, no scope drift |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-13.coverage.json --require-destination` | 1 page, 24 harvested results, 0 errors, 0 warnings |
| sources | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-13.coverage.json` | 2/2 fetch-verified, 2/2 resolved |
| source re-download | `curl` of both URLs | both live; bytes and sha256-16 reproduce the stamps exactly (§3) |
| dependency/closure scan | ad-hoc script over all `batch-*.pages.json` + `items/` | 177 edges, 78 distinct ids (62 published, 16 in-run), 0 unresolved; closure 145; B page consumed by 0 external items/pages; A items consumed by 24 pages / 122 edges |
| drift review | `research/frontier-42-coxeter-32-alpha-step1-drift.md` | `VERDICT: no-drift`; "No prerequisite gap" |

## 6. Non-blocking notes

1. The inventory's `depends_on` for items 1, 3, 4, 5 names
   `thm-cg-tits-cone-interior-and-local-finiteness`; the manifest instead declares only the
   mathematically used suppliers and consumes `thm-cg-dual-chamber-intersections-and-point-stabilizers`
   for A3. This refinement is recorded in the batch-13 note and is consistent with the
   dependency check; no scope implication.
2. A1's `justified_by` is the criterion (as in the design's definition-justification record);
   since A1 declares a property rather than an existence claim, nothing dangles.
3. A1's abstention clause wikilinks to A2 and A5 (later same-page items) as cross-references
   without dependency edges; the recorded consistency check counts same-page ids as allowed,
   and no forward dependency is recorded.
4. Proof correctness, item acceptance, and any owner action are out of role and are not
   asserted.

## 7. Decision

**`finite-coxeter-diagrams-and-complete-classification`: sufficient.** The planned
definitions (diagram, components, irreducible/finite type), results (direct-product and
invariant-form comparison; the finiteness ⟺ positive definiteness criterion with dual-form
isolation; the complete positive definite exclusion list; the classification of finite
Coxeter systems including `H_3`, `H_4` and all `I_2(m)`, with direct products, positivity of
every survivor and the low-rank coincidences) and examples (dihedral, `H_3`/`H_4`, `B_n`/`C_n`,
cycle and overlong-arm witnesses, path recursion and arm inequality) adequately cover the
intended subject and its supplier role. No omitted topic within the design or its sources was
found, no enrichment or merger is recommended, no unmet prerequisite was confirmed, and the
recorded deferral destination is a live page of this run. Owner action: none required for
scope; proceed.
