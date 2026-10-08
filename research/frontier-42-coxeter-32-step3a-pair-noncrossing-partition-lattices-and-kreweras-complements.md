# Step 3a scope review — A/B pair `noncrossing-partition-lattices-and-kreweras-complements`

Run `frontier-42-coxeter-32` · role alpha · batch 31 · design label CG-28 · orders 1778/1779.

- A page: `noncrossing-partition-lattices-and-kreweras-complements` (kind A, category
  `coxeter-groups`, 6 items).
- B page: `noncrossing-partition-lattices-and-kreweras-complements-examples` (kind B,
  dependency leaf, 3 items).
- Decision: **`sufficient`** — scope only. No item approval, no owner record, no scaffold,
  manifest, coverage or batch edit. Receipt:
  `research/frontier-42-coxeter-32-step3a-review-noncrossing-partition-lattices-and-kreweras-complements.json`.

## Inputs read (exact paths)

- Manifest and batch inputs: `research/frontier-42-coxeter-32-batch-31.pages.json` (both
  pages, all 9 items: statements, strategies, deps, sources, levels),
  `...-batch-31.coverage.json`, `...-batch-31.notes.md`,
  `...-batch-31.cross-batch-dependencies.json`, `...-batch-31-url-liveness.json`.
- Prose design: `library/coxeter-groups/noncrossing-partition-lattices-and-kreweras-complements.md`
  and `...-examples.md` (both `status: draft`); `research/plan-coxeter-groups-track.md` §CG-28
  (L563–575: header prose, four A contracts, B sentence); `research/plan-spec.json` orders
  1778/1779; `research/coxeter-scaffold/inventory.json` CG-28;
  `research/coxeter-scaffold/definition-justifications.json` (the single CG-28 definition);
  `research/coxeter-scaffold/combinatorial-source-report.md` § "Reflection length, absolute
  order, noncrossing partitions and Cambrian scope" and §CG17;
  `research/coxeter-scaffold/independent-audit.md` (zero remaining design objections).
- Run authority and records: `research/frontier-42-coxeter-32-owner-authoring-direction.md`,
  `research/frontier-42-coxeter-32-alpha-step1-drift.md` §
  `noncrossing-partition-lattices-and-kreweras-complements` (`VERDICT: no-drift`,
  "No prerequisite gap"), the nine `research/frontier-42-coxeter-32-step1-<item>.json`
  readiness records, `node tools/step1-decisions.mjs check` (302/302 `ready`, closed).
- Suppliers: current statements of the 17 in-run supplier items the pair consumes — batch 2
  (`def-hh-coxeter-matrix-word-group-and-length`); batch 4
  (`def-cg-real-coxeter-form-and-reflection`, `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`); batch 13
  (`def-cg-coxeter-diagram-components-and-finite-type`,
  `lem-cg-diagram-products-and-invariant-form-comparison`,
  `lem-cg-positive-definite-diagram-exclusions`,
  `thm-cg-finite-type-positive-definite-criterion`); batch 18
  (`def-cg-reflection-length-absolute-order-and-moved-space`,
  `lem-cg-orthogonal-wall-form-and-subspace-restriction`,
  `thm-cg-carter-reflection-length-and-absolute-order`); batch 19
  (`def-cg-bipartite-coxeter-element-and-root-recursion`,
  `lem-cg-steinberg-bipartite-root-enumeration`,
  `lem-cg-ordered-root-pairings-and-simple-systems`,
  `def-cg-brady-watt-ordered-spherical-root-complex`,
  `lem-cg-ordered-root-complex-is-geometric-simplicial`,
  `thm-cg-root-complex-convex-cones-and-facet-induction`) — plus the 23 published items
  named in the deps.
- Sources: the four A-page source documents, re-extracted and read directly (see §3).

## 1. Prose design versus scaffold (A page)

The four design contracts are realized id-for-id and in order, with two disclosed local
additions.

| Design contract (§CG-28) | Scaffolded item | Coverage |
|---|---|---|
| `def-cg-coxeter-noncrossing-poset-and-kreweras-map` — NC(W,c)=[1,c] in absolute order; K(w)=w⁻¹c; reducible W by component products; dependence on c stated before transport | A1, same id | complete: (1) Coxeter elements as arbitrary simple-reflection orderings (the bipartite element is an example only), (2) the absolute interval with the c-dependence declared before transport, (3) the reducible product definition with agreement deferred to A5(3), (4) K with all properties deferred, (5) explicit abstentions; `justified_by` names the lattice theorem and the Kreweras theorem |
| `lem-cg-convex-root-subcomplex-intersection-and-purity` — realization intersection equals subcomplex intersection; full-span maximal simplices under convexity; empty and zero-dimensional cases | A3, same id | complete: (1) `c[Y∩Z]=c[Y]∩c[Z]` and `|Y∩Z|=|Y|∩|Z|` with the `c[∅]={0}` convention, (2) purity with `span(F)=span(c[Y]∩c[Z])` for every maximal simplex, (3) the small cases, (4) the recorded limit that `M(α)∩M(β)` is **not** determined by the construction |
| `thm-cg-noncrossing-finite-lattice-and-conjugacy-independence` — intersect X(a),X(b); reversed ordered-root reflections give σ≤_Tc with M(σ)=span of the intersection; wall restriction gives σ≤a,b and P_σ=P_a∩P_b; common lower bounds lie below σ; meets and joins; source-sink conjugacy, no silent restriction to one bipartite c | A5, same id | complete: (1) meets, including the genuinely empty case `P_a∩P_b=∅` (`a∧b=1`), (2) joins and the lattice property, (3) the reducible case with `[1,c]` equal to the componentwise product, (4) `Ad_w` transport with `M(wxw⁻¹)=ρ(w)M(x)`, (5) limits (no Abs(W), no non-Coxeter intervals, no non-finite types) |
| `thm-cg-kreweras-complement-and-type-a-partition-model` — K order-reversing by length equalities, K²(w)=c⁻¹wc and bijective; type A: ℓ_T=N−#cycles, w≤c iff cyclically increasing noncrossing cycle supports in both directions; set-partition model | A6, same id | complete: (1) K bijective anti-automorphism with K²(w)=c⁻¹wc and ℓ_T(K(w))=n−ℓ_T(w), (2) ℓ_T=N−#cycles, (3) the criterion proved in both directions, (4) the Biane poset isomorphism onto (NC(N),⊆) plus the classical complement with `w_π w_{K(π)}=c`, `|K(π)|=N+1−|π|`, `π∧K(π)=0̂`, `π∨K(π)=1̂`, (5) limits (no model or count in other types) |

Local additions (design-authorized "mathematically necessary local additions", disclosed in
`...-batch-31.notes.md` § "Local additions"):

- `lem-cg-reversed-reflection-product-and-face-spans` (A2) supplies
  `M(R(σ_k)⋯R(σ_1))=span(σ_1,…,σ_k)` for linearly independent unit normals — the
  moved-space identity the meet construction consumes, for which no earlier scaffolded item
  is a supplier (Brady–Watt assert `span(v_0,…,v_d)=M(σ)` inside the proof of Theorem 7.8
  without an isolated local supplier). I sanity-checked the identity numerically on random
  independent unit normals (k≤6 in dimension k+2, 300 trials each): the rank is k and every
  normal lies in the moved space in all trials. This is a consistency check, not proof
  certification.
- `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves` (A4) supplies the
  firing-connectivity of orientations of a tree and the identity `c(ω′)=s c(ω) s`
  (Eriksson–Eriksson Proposition 2.3, tree case), required by A5(4) and by the design's
  explicit instruction not to restrict the theorem to one bipartite c. Its clause (4)
  correctly restricts to finite type (tree components), matching the source's separate cycle
  case, which the coverage disposes out-of-scope.

Disclosed definition-justifier deviation: `definition-justifications.json` records one
justifier for A1 (`thm-cg-noncrossing-finite-lattice-and-conjugacy-independence`); the
manifest declares two, adding `thm-cg-kreweras-complement-and-type-a-partition-model`,
because A1(4)'s deferred properties of K are exactly that theorem's content. This is a
strictly more complete justifier record, not a new claim (recorded in the batch notes).

## 2. B companion versus design

The design's B sentence — identify NC(Sₙ) with ordinary noncrossing set partitions by cycle
supports and planar crossings, prove both directions, compute Kreweras complements; include
a noncrystallographic dihedral example and a contrasting arbitrary absolute interval — is
realized item-for-item (the general two-directional proof is homed in A6(3); the B items
are the promised finite instances and checks):

| Design B task | B item | Coverage |
|---|---|---|
| Cycle-support identification by planar crossings, both directions, Kreweras complements computed | B1 `ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4` | complete: the 14-element interval for c=(1 2 3 4); the unique crossing partition `{1,3}\|{2,4}` and the absent (1 3)(2 4); the full 14-entry Kreweras table with the block-count law; K² as relabelling by c⁻¹ |
| noncrystallographic dihedral example | B2 `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement` | complete: \|T\|=m, `[1,c]={1}∪T∪{c}`, the (m+2)-element claw lattice, K interchanging 1 and c and permuting T, K² the rotation of axes — I₂(5) explicitly |
| contrasting arbitrary absolute interval | B3 `ex-cg-crossing-interval-and-non-lattice-absolute-order` | complete: the crossing x=(1 3)(2 4) whose interval is Boolean although x≰_T c, and the two incomparable maximal 3-cycles of S₃ showing Abs(S₃) is not a lattice |

I re-verified B1's displayed data independently by brute force in a fresh script:
`s₁s₂s₃=(1 2 3 4)`, the interval has exactly 14 elements, (1 3)(2 4) is absent, and all 14
values of `K(w)=w⁻¹c` match the table as written, including K(1)=c, K(c)=1 and the block
counts.

B-leaf verified: no item of any of the 64 run manifests depends on any B item, no run
page's `requires` names the B page, no published item cites any pair id, and the B page
requires only the A page.

## 3. Source coverage

`...-batch-31.coverage.json`: A page 4 sources, B page 2 sources; 64 harvested rows
(A: 24 `included`, 10 `inline`, 9 `out-of-scope`; B: 14 `included`, 2 `inline`,
5 `out-of-scope`; no `deferred`), every row with a destination or a written reason;
`coverage-checklist --require-destination`: 0 errors, 0 warnings. `source-fetch-check`:
6/6 fetch-verified, 6/6 resolved; the batch's `url-sweep` record
(`...-batch-31-url-liveness.json`) reports 4/4 live.

| Source | URL | sha256-16 (recorded = recomputed) | Role |
|---|---|---|---|
| Brady–Watt, *Lattices in finite real reflection groups* | arxiv.org/pdf/math/0501502 | `cbb25cebbc62ec8f` (532448 B) | §§2, 3, 4–7: absolute order and moved/fixed spaces, rigidity; the ordered root complex X(c), subcomplexes, convexity, Theorem 7.8 |
| Armstrong, *Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups* | arxiv.org/pdf/math/0611106 | `cb0fbe1e158bccf2` | §2.4–2.6 (Lemma 2.5.4, Prop. 2.6.9, Notation 2.6.10, Theorem 2.6.12), §4.1–4.2 (Thm 4.1.2, Lemmas 4.1.4–4.1.5, Thm 4.1.3, Defs 4.2.2–4.2.3, (4.4)) |
| Eriksson–Eriksson, *Conjugacy of Coxeter elements* | combinatorics.org/…/v16i2r4/pdf/ | `5acccf511546d631` | Theorem 1.1, Proposition 2.3 (tree: one firing class) |
| McCammond, *Noncrossing partitions in surprising locations* | web.math.ucsb.edu/~jon.mccammond/papers/nc-survey.pdf | `65f0224d7c694fc8` | Theorem 3.1, Lemma 4.3, Proposition 4.4 and the local-self-duality proof |

I extracted the four documents afresh (PyMuPDF, from the stamped copies) and read the
locations the items rely on: Brady–Watt §2 (the order, moved space, items (1) and (4) and the
reflection-set meet remark), §3 (Theorem 3.2, Corollary 3.3, Note 3.4), §4 (Definition 4.1,
Note 4.2), §5 opening (Theorem 5.1), §7 (Corollary 7.7 and the statement and proof of
Theorem 7.8); Armstrong Lemma 2.5.4 with `ℓ_T(K^ν_μ(π))=ℓ_T(μ)+ℓ_T(ν)−ℓ_T(π)`,
Proposition 2.6.9, Notation 2.6.10, Theorem 2.6.12, Theorem 4.1.2, Lemmas 4.1.4–4.1.5,
Theorem 4.1.3, Definitions 4.2.2–4.2.3 and identity (4.4); McCammond Theorem 3.1, Lemma 4.3
and the local self-duality proof; Eriksson–Eriksson Proposition 2.3 (both cases). The scoped
claims match these statements, including the convention checks: the item's simplex condition
`R(ρ_{i_k})⋯R(ρ_{i_1})≤_T c` is the inverse form of Brady–Watt's edge rule
`ℓ[R(ρ_{i_1})…R(ρ_{i_k})γ]=n−k`; `K(w)=w⁻¹c` is Armstrong's `K^c_1`; and
`(1 2)(1 2 3 4)=(2 3 4)` under right composition.

Source caveat carried into the item locators: Brady–Watt assert the purity sentence inside
the proof of Theorem 7.8 without proof; A3 supplies it locally. Recorded, not a defect.

## 4. Prerequisite availability (unmet-prerequisite check)

- Direct dependency audit over the 9 items: 102 `deps` edges + 2 `justified_by` edges,
  **0 unresolved**, 0 edges to an id that is neither published nor scaffolded: 23 unique
  published suppliers (every one `status: published`) and 17 unique in-run suppliers
  (batch 2 ×1, batch 4 ×3, batch 13 ×4, batch 18 ×3, batch 19 ×6), plus 6 intra-page edges.
- Every `[[…]]` target in every statement and strategy resolves to a declared dep or
  justifier of the same item (script check: 0 problems); conversely every dep and justifier
  resolves to a published item file or a run manifest id.
- A-page requires-closure: 134 pages — 10 in-run scaffolds and 123 published pages,
  0 missing (script over `plan-spec.json` plus the 64 run manifests).
- Load-bearing supplier clauses read in the current scaffold and present with the needed
  hypotheses: Carter's formula, the prefix form and rank function of ≤_T and conjugation
  invariance (`thm-cg-carter-reflection-length-and-absolute-order` (1), (2), (3)); the
  ordered root complex X(c), subcomplexes X(σ), cones c[F], c[Y] and realizations |Y|
  (`def-cg-brady-watt-ordered-spherical-root-complex` (1)–(3)); face-wise linear
  independence and `|X(σ)∩X(σ′)|=|X(σ)|∩|X(σ′)|`
  (`lem-cg-ordered-root-complex-is-geometric-simplicial` (2), (4)); spherical convexity and
  `|X(σ)|=S^{n−1}∩c[P_σ]` (`thm-cg-root-complex-convex-cones-and-facet-induction` (3));
  P_σ as the positive roots of the reflection subgroup with canonical simple systems
  (`lem-cg-ordered-root-pairings-and-simple-systems` (4)); the Steinberg enumeration and
  invertibility of c−id (`lem-cg-steinberg-bipartite-root-enumeration`).
- Size and order: 9 items across the two pages (page cap 100);
  `item-dependency-levels.mjs check --run frontier-42-coxeter-32` exits 0 (302 items,
  64 pages, maximum level 31, no batch-31 line).
- **Confirmed unmet prerequisites: none.** Residual uncertainty, stated honestly: all 17
  in-run suppliers are scaffolded, not yet authored; their proofs are Step-3b work, and no
  item of this pair has an item file yet. Nothing outside the published library and the
  current scaffold is required.

## 5. Findings

1. **Non-blocking coverage-accuracy note (no scope omission).** Two harvest rows on each
   page disposition source content whose cardinality/Narayana part no item states: Armstrong
   "Definition 4.1.1, Theorem 4.1.2: NC(n) as the refinement lattice of noncrossing
   partitions of [n], with blockwise-intersection meets and the Catalan and Narayana counts
   of Kreweras" and McCammond "Section 3 and Theorem 3.1: NC_n is a graded bounded lattice
   with Catalan many elements, …", both marked `included` under
   `thm-cg-kreweras-complement-and-type-a-partition-model`. A6(4) states the Biane
   isomorphism onto (NC(N),⊆) but no cardinality, and A6(5) explicitly records that no
   Catalan number is claimed for a general type; the S₄ count 14 appears only as a computed
   instance in B1. This is not an omission of a planned result: the binding §CG-28 contract
   and the inventory contract deliver "the set-partition model, not an unproved
   Catalan-cardinality product for all types", and the general-type count (Armstrong §2.7)
   is dispositioned `out-of-scope`. Recommended for the owner or the Step-5 reading role
   (Step 3a must not edit): either tighten those two rows' wording or, if the owner wants
   the type-A count, add it as a small application clause citing the published
   `def-catalan-number`. No scaffold change to this pair is required for `sufficient`.
2. **Local additions are inside the design's authority and correctly placed.** A2 precedes
   its consumer A5; A4 sits after A1 and before A5; both are the additions the §CG17 route
   list (steps 6–8) and the batch notes identify as necessary.
3. **The load-bearing abstentions are stated.** A1(5) defers all lattice/existence claims;
   A5(5) and A6(5) exclude Abs(W), non-Coxeter intervals, non-finite types and any model or
   count in other types. This matches the design's warning against a silent bipartite-only
   restriction (A4 + A5(4)) and against an unproved general count.
4. **Intended role fits the library.** The pair is the coxeter-groups home of the
   noncrossing lattice; it consumes the ordered-root-complex pair (batch 19) and is consumed
   only by its own examples page; no published item cites it, so no external contract
   constrains its scope.

## 6. Checks actually run

| Check | Command (abbreviated) | Actual result |
|---|---|---|
| manifest deps (batch 31) | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-31.pages.json` | exit 0; 9 items, 0 errors |
| manifest deps (run) | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; 302 items, 0 errors |
| content policy (run) | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | exit 0; 302 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-31.coverage.json --require-destination` | exit 0; 2 pages, 64 rows, 0 errors, 0 warnings |
| fetch stamps | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-31.coverage.json` | 6/6 fetch-verified, 6/6 resolved |
| stamp identity | `sha256sum` of the four stamped PDF copies | sha256-16 match recorded stamps byte-for-byte (see §3) |
| source read | PyMuPDF extraction of the four documents, targeted sections | statements quoted in §3 confirmed |
| dependency resolution | ad-hoc scan over all 64 run manifests + `items/*.md` | 104 edges; 23 unique published (all `published`), 17 unique in-run; 0 unresolved |
| wikilinks vs deps | ad-hoc extraction of every `[[…]]` in the 9 statements/strategies | 0 undeclared links, 0 unresolved targets |
| requires closure | ad-hoc scan of `plan-spec.json` | 134 pages: 10 in-run, 123 published, 0 missing |
| levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 0; 302 items, 64 pages, max level 31 |
| readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 302/302 `ready`, closed |
| B-leaf | ad-hoc scan of all manifests + published items | 0 consumers of the 3 B items |
| S₄ data | fresh brute-force script over S₄ | interval = 14 elements; full Kreweras table matches B1 |
| A2 identity | fresh random-matrix check (pure Python, k≤6) | no violation in 1800 trials |
| integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests, no scope drift |

## 7. Decision

**`noncrossing-partition-lattices-and-kreweras-complements`: sufficient.** All four CG-28
A-page contracts and all three promised B tasks are scaffolded id-for-id with their proof
routes and conventions; the two local additions are design-authorized, disclosed and placed
before their consumers; the four sources are fetch-verified with stamps reproduced and the
scoped claims read back at their locators; all 104 dependency edges and the 134-page
requires closure resolve into the published library and the current scaffold, with no unmet
prerequisite; the pair has no external consumers and no published defect was found. The one
finding (the type-A Catalan/Narayana coverage rows) is a non-blocking coverage-accuracy note
whose content the design contract deliberately does not plan, so it does not make the scope
inadequate; the owner/Step-5 may tighten the rows or add the count as an application.
No merger or enrichment is required for `sufficient`, and this review did not edit any
scaffold.

## Recording

Decision `sufficient` recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
--page noncrossing-partition-lattices-and-kreweras-complements --decision sufficient`
at scope hash `595ac868ea30d6b1ef9a1a0630d424ce3fa2bd67091bcb964dc16c6f3aefa0e2`
(2026-10-07T07:41:40Z); the reason names this report and the scope evidence above. Receipt:
`research/frontier-42-coxeter-32-step3a-review-noncrossing-partition-lattices-and-kreweras-complements.json`.
This review decides scope only; it is not an item approval, proof review or owner record,
and no other pair's artifacts were touched.
