# Step 3a scope review — flat-smooth-and-etale-morphisms

- Run: `frontier-36-complete` (batch 6), role alpha, label
  `step3a-pair-flat-smooth-and-etale-morphisms-e80309266ab3065a`.
- A page: `flat-smooth-and-etale-morphisms` (order 366.073, category
  `scheme-theory`, 49 items).
- B page: `flat-smooth-and-etale-morphisms-examples` (order 366.074, 10 items);
  companion pointer A↔B consistent, B is a leaf (no external item depends on it).
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-36-complete-step3a-review-flat-smooth-and-etale-morphisms.json`;
  re-verify with `node tools/step3-decisions.mjs check --run
  frontier-36-complete --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject (AV-17, flat/smooth/étale morphisms). It
  is not item or proof approval, and it edits no scaffold, item, plan row or
  owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-6.pages.json` | Current A inventory (49 items) and B inventory (10 items) with every statement, `deps`, page `requires`, order, companion |
| `research/frontier-36-complete-batch-6.coverage.json` | 9 source records, 56 harvested rows (37 included, 18 inline, 1 already-published, 0 declined), fetch stamps, per-row item destinations |
| `research/frontier-36-complete-batch-6.notes.md` | Step-1 construction record; original escalations and the owner reconciliation block (7 new support lemmas at 12:52 UTC; AV-6 page edge added; flatness remark recertified) |
| `research/frontier-36-complete-batch-6.cross-batch-dependencies.json`, `…-batch-{4,5,7,16}.pages.json` | 24 in-run item edges (2 → batch 4, 22 → batch 5), 2 page edges, and the exact consumer items |
| `research/plan-algebraic-geometry-track.md` §AV-17 (lines 1159–1233), `research/plan-spec.json` rows 366.073/366.074 | Controlling prose design (34 designed A rows incl. Zariski Main support; 10 designed B leaves; ownership trap), page identity/order/requires |
| `research/frontier-36-complete-owner-authoring-direction.md`, `…-scope-ledger.json`, `…-alpha-groups.json`, `…-step1-*.json` | Binding owner direction (proper/flat/fp fibre-dimension theorem; scheme Zariski Main here), the run's owed pages, Step-1 ready decisions (897 ready, 0 open; all 59 pair items current) |
| `research/published-consumer-supplier-ledger.md` | Current disposition of the pair's load-bearing published suppliers |
| Stacks Project official pages read this session: §29.26 `01U2` (29.26.2–16 incl. 29.26.9–10), §29.35 `01V4` (head, 29.35.10–14), §37.30.6 `0D4J`, §37.41.1–2/4 `02LK`/`02LL`/`02LN`, §37.43 `02LQ`, §37.44.1 `02LS`, §37.8.10 `02HM`, §41.9–41.18 section chain (`0250`→`025L`) with `0257`, `025A`, `04HG`, `04HK` heads; Vakil 2022 draft §25.5 (local `/tmp` extract) | Exact statements and hypotheses of the load-bearing results |

## Inventory against the prose design

All 34 designed A rows (31 base items plus the three scheme-Zariski-Main
support rows) are present, in the designed kinds; all 10 designed B leaves are
present, in design order, with no extra B item and no designed id dropped or
renamed. The plan rows carry no competing item list.

- Fifteen support rows were added beyond the design (eight in the first pass,
  seven in the owner reconciliation). Each is consumed inside the pair and none
  expands the subject: `lem-flat-local-map-faithfully-flat` (2 users),
  `lem-generic-freeness-finite-type-algebra-module` (1),
  `lem-finite-presentation-image-constructible` (1),
  `lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness` (3),
  `lem-fibre-dimension-upper-semicont-proper` (1),
  `lem-flat-locus-open-finitely-presented-algebra` (2),
  `lem-flatness-by-fibres-for-polynomial-chart` (1),
  `lem-flat-fp-relative-dimension-strata` (1),
  `lem-flat-fp-fibre-dimension-lower-semicont` (1),
  `lem-coprime-polynomial-factorization-lifts-etale-locally` (1),
  `lem-etale-neighbourhood-isolated-fibre-point-finite` (2),
  `lem-qcqs-structure-pushforward-affine-local` (2),
  `lem-integral-closure-commutes-etale-base-change` (1),
  `lem-integral-quasicoherent-algebra-finite-subalgebra-filtration` (1),
  `lem-relative-normalization-finite-stage` (1).
- Manifest order is the Step-1 dependency order, which differs from the design
  table order (e.g. `thm-flat-families-fibre-dimension-locally-constant` moves
  after its support lemmas; `def-etale-morphism-schemes` follows
  `lem-smooth-fibres-smooth`). Order is not a scope property here; ids, kinds,
  claims and page placement match.
- Boundary clauses kept: the fibre-dimension theorem is proper + flat + finite
  presentation with value −∞ on empty fibres and an explicit "no assertion for
  arbitrary flat families" (owner direction); the classical-comparison corollary
  keeps the perfect-field and irreducibility-convention qualifications and now
  carries the AV-6 page edge; the flatness-orientation remark uses the explicit
  free rank-two family `Spec Q[t,x]/(x²−t)`; smoothness is defined pointwise as
  lfp + flat + geometrically regular fibre, with relative dimension only for
  smooth maps.
- The historical escalation table in the batch notes is superseded by the
  owner-reconciliation block in the same file (Chevalley/fibre-dimension,
  formal criteria, étale local structure, Zariski Main all re-recorded ready
  after local support was supplied). No open Step-1 decision remains for the
  pair (897 ready, 0 work).

## Source coverage assessment

- `coverage-checklist --require-destination` on the owned coverage: 1 page, 56
  harvested rows, 0 errors, 0 warnings; no declined row. `source-fetch-check`
  in check mode: 9/9 sources fetch-verified and resolved (morphisms.pdf,
  more-morphisms.pdf, Vakil 2022 draft, tags 00UH/00UJ/00UE, algebra.pdf,
  properties.pdf, limits.pdf). `manifest-deps`: 59 items, 0 errors.
- Subject check against the sources actually harvested: flatness definition,
  affine-locality, base change, composition, faithful flatness and flat-local
  faithfulness, fpqc vanishing, generic flatness, flat-fp universal openness,
  flat-locus openness, flatness by fibres, fibre-dimension lower/upper
  semicontinuity and local constancy (29.26.2–10; 29.28; 29.29; 37.30.4–6);
  smoothness definition, standard-smooth chart existence (29.35.11), Ω finite
  locally free with rank = fibre dimension (29.35.12), relative-dimension
  definition and the 29.35.13–14 warning, formal-smooth equivalence (37.11.7),
  étale/formal-étale equivalence (37.8.10), locally standard étale (Algebra
  10.144.4), étale local finite neighbourhoods and component decomposition
  (37.41.1–4), scheme Zariski Main (37.43) and proper-quasi-finite (37.44.1).
  I read the exact statements and, where central, the full proofs of these
  Stacks results; they match the item contracts.
- Locator observations (non-blocking, no claim lost). The design lists
  Stacks *Morphisms* §§29.25–29.31 and *Étale* §§41.11–41.18 plus Tong §2.7 and
  Milne AG10; the coverage deliberately harvests named results of
  §§29.23–29.29 and 29.35–29.37 plus More on Morphisms §§37.8/37.11/37.22/
  37.30/37.41/37.43/37.44, and contains no row from the Étale chapter, Tong or
  Milne. The étale content is instead backed by §29.37, 37.8.10, 37.41 and
  Algebra 10.143–10.145; §41.17's unramified structure theory is covered on the
  published Kähler page. ÉTALE §41.15 (topological invariance of the étale
  topology) and §41.18.1 (étale local structure of étale morphisms as local
  isomorphisms), and Morphisms §29.25 (submersive), §29.27 (flat closed
  immersions) and §29.31 (syntomic), lie inside the design's cited reading
  ranges but outside the design's inventory and outside this pair's item set;
  I judged this non-blocking (no in-run or planned consumer needs them; the
  structural role is carried by the standard-étale theorem, the finite
  neighbourhood lemmas and the published unramified structure theorem).
  The 2022 Vakil draft used by the batch actually runs §§25.1–25.7 and
  §§26.1–26.3, not §§25.1–25.10/§§26.1–26.6.

## Role in the library

- Declared prerequisites: AV-6 `zariski-tangent-spaces-regular-points-smoothness-and-bertini`
  (batch 4, in-run) and AV-15 `finite-proper-and-projective-morphisms`
  (batch 5, in-run), both earlier by order and both scaffolded with ready items;
  AV-16 `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`
  is published with 34 items. All 24 in-run item edges land on exactly those
  two pages; the remaining 54 distinct external dependency targets are all
  `status: published`. No missing or unresolved dependency id (`manifest-deps`
  0 errors; `validate-plan` reports an acyclic, forward-reference-free closure).
- In-run consumers: batch 7 (`quasi-coherent-and-coherent-sheaves-and-vector-bundles`)
  carries the declared page edge; batch 16 (`smooth-projective-serre-duality-…`)
  consumes `thm-differentials-smooth-locally-free` (×2),
  `thm-etale-morphisms-open-and-quasi-finite`, `thm-smooth-locus-open` and
  `thm-jacobian-criterion-smooth-morphism`. Each consumed clause is stated by
  the named item. The B page is a true leaf: its only non-A edge is to an
  earlier item of its own page (allowed by the intra-page order rule), and no
  manifest or plan item outside the pair cites a B item.
- Published-supplier notes: the known published defect on
  `thm-affine-closed-immersions-quotient-rings` (proof step 1.1) is already
  routed around by the pair's declaration of the ready batch-5 replacement
  `lem-closed-immersion-affine-quotient-and-base-change` on
  `thm-proper-quasi-finite-is-finite`. I checked the ledger rows of the pair's
  most load-bearing published suppliers (`thm-flatness-criteria-by-injections-and-ideals`,
  `thm-a-left-module-is-flat-…`, `thm-auslander-buchsbaum-serre-regularity-criterion`,
  `cor-flat-local-cohen-macaulay-fibre-criterion`, `cor-polynomial-extension-preserves-cohen-macaulayness`,
  `thm-regular-local-rings-are-domains-and-cohen-macaulay`, lines 30934/30939/
  30943/31612/33671): each carries a current bounded owner-delegated acceptance
  from 2026-09-23–24 with earlier findings retained as historical; none is a
  live A-P row, and no live A-P item appears among the pair's 54 published
  dependency targets. This is context, not a certified audit by me.

## Non-blocking observations for the item author

1. `lem-etale-neighbourhood-isolated-fibre-point-finite`,
   `lem-elementary-etale-neighbourhood-finite-decomposition` and
   `lem-coprime-polynomial-factorization-lifts-etale-locally` state "elementary
   étale neighbourhood (U,u)→(S,s) with κ(u)=κ(s)", and
   `lem-relative-normalization-finite-stage` states "the relative normalization
   of S in f_*O_X". No library item defines either notion. These are local
   definitional gaps the Step-3 author may close on the A page (Stacks More on
   Morphisms §37.41 preamble for the first; 37.43.1–2 for the second).
2. `cex-frobenius-not-smooth` currently records only "finite free of rank p but
   not smooth or étale". The source punchline (Morphisms 29.35.13–14 warning,
   read in full) is that flat + finite presentation + Ω finite locally free of
   rank d does not imply smooth of relative dimension d; for t↦u^p one has
   Ω ≅ O du free of rank 1. Recording that clause makes the leaf the exact
   warning witness and matches its design purpose ("compute the relative
   differentials/fibres of Frobenius").
3. The B item `cex-flat-finite-type-not-open-without-presentation-warning` is
   correct as stated: ∏k is von Neumann regular, so R/I is flat; I = ⊕k is not
   finitely generated, so R/I is not finitely presented; and V(I) (the
   non-principal ultrafilters) is closed and not open, so the morphism is not
   open. The adjacent published literature example is Stacks Examples 05LB.
4. `thm-flat-finite-presentation-is-open` plus the smooth definition gives
   "smooth ⇒ universally open", but no item states it. If consumers need the
   named corollary, it belongs on this page; otherwise Step 5 may see the
   implicit use.

## Uncertainty statement

I verified inventory, page identity, dependency availability, source
availability (stamp check plus the statements named above), consumer
interfaces and the B-leaf shape. I did not re-derive any of the 59 proof
strategies, did not read the complete proofs of Algebra 10.125.5–6, 10.29.10,
10.143.13, 10.144.4, 10.145.1–2 or More on Morphisms 37.11.7, 37.22.7–9,
37.30.4–5, and did not audit the published suppliers' proofs; that is Step
3b/5 work. The judgement that §41.15/§41.18.1 and the unused Morphisms
sections need not be built here is a scope judgement, not a theorem about
their importance. Within that stated boundary I found no omitted topic and
therefore name no omission and propose no merger.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples realise every designed A row and B leaf, the 15 additions are
source-backed prerequisites each consumed in-page, the nine sources are
fetch-verified and the harvest checks clean, the flat/smooth/étale core,
loci, fibre-dimension and Zariski-Main content match the AV-17 design and the
declared Stacks/Vakil material, and the pair's prerequisite closure and its
batch-7/batch-16 consumer interfaces are intact. No enrichment or pair merger
is required, and Step 3b may author against this scope.
