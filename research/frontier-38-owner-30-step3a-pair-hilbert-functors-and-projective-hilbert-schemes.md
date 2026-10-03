# Step 3a scope review — `hilbert-functors-and-projective-hilbert-schemes`

- Run: `frontier-38-owner-30`, batch 29, role alpha (step 3a scope review).
- A page: `hilbert-functors-and-projective-hilbert-schemes` (order 905,
  `scheme-theory`). B page: `hilbert-functors-and-projective-hilbert-schemes-examples`
  (order 906).
- Scope decision: **sufficient** (receipt
  `research/frontier-38-owner-30-step3a-review-hilbert-functors-and-projective-hilbert-schemes.json`,
  bound to the current A+B manifest hash `sha256:2578606559c0a83f…`).
- This report decides scope only. It is not an item approval, proof review, or
  owner record.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-expansion-track.md` AG-MOD-1
  (L255; pair table L46; canonical rows at orders 905/906 with
  `scheme-theory`); audit row `research/algebraic-geometry-expansion-2026-09-30/audit-repair.md`
  L192; Vakil supply note `source-vakil.md` L248–251 (V25 Theorem 25.3.1 cites
  the construction and is not a proof supplier). The page has no separate
  prose pointer in `plan-spec.json`; the AG-MOD-1 contract row is its prose
  design.
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (selected row 905/906 at L39; §Local prerequisite construction L51 ff.,
  bullet L80 naming 905/906; §Gate and file discipline).
- Owner/integration records: `research/frontier-38-owner-30-packet-integration.md`
  (L22 and the A905/B906 bullet at L51), `research/frontier-38-owner-30-scope-ledger.json`
  (both pages, batch 29), and the Step-1 drift verdict
  `research/frontier-38-owner-30-alpha-step1-drift.md` L72–77 (`no-drift`).
- Contract: `research/plan-spec.json` rows for both page ids (identical item
  id lists, `requires`, kinds and titles apart from one manifest title escape,
  below).
- Manifest: `research/frontier-38-owner-30-batch-29.pages.json` (A: 22 items,
  B: 4 items).
- Coverage: `research/frontier-38-owner-30-batch-29.coverage.json` (A: 3
  sources / 41 harvested rows; the B page has no external-source rows, see
  below).
- Construction and source record: `research/frontier-38-owner-30-batch-29.notes.md`
  and `research/frontier-38-owner-30-local-prereq-905.md`.
- Readiness: `research/frontier-38-owner-30-step1-<id>.json` for all 26 items
  (26/26 present, `ready`).
- Dependency records: `research/frontier-38-owner-30-batch-29.cross-batch-dependencies.json`
  (empty array) and `research/frontier-38-owner-30-cross-batch-dependencies.json`
  (batch 29 reviewed; no edge mentions this pair in either direction).
- Source spot checks re-fetched 2026-10-03: Nitsure (arXiv math/0504590),
  Grothendieck Bourbaki 221 (Numdam), EGA III₂ §7.7 (Numdam). All three
  reproduce the coverage file's byte counts and SHA-256 prefixes exactly, and
  the load-bearing loci listed below were read in the retrieved text.
- Mechanical checks on current batch 29: `tools/coverage-checklist.mjs
  --require-destination` → 1 page, 41 rows, 0 errors, 0 warnings;
  `tools/manifest-deps.mjs` → 26 items, 0 errors;
  `tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60/60 pages, no
  scope drift.

## Design vs delivered scaffold

- All 3 design A ids (`def-hilbert-functor-of-flat-projective-subschemes`,
  `thm-hilbert-scheme-represents-projective-flat-families`,
  `lem-universal-family-and-hilbert-polynomial-strata`) and both design B ids
  (`ex-hilbert-polynomial-of-finite-points-on-p1`,
  `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`)
  are present id by id; none was dropped, weakened, or re-hypothesised.
- The A page adds 19 owner-authorized local prerequisite items and the B page
  2 local additions (`ex-hilbert-base-change-of-a-fat-point-family`,
  `ex-full-hilbert-functor-of-p1-has-infinitely-many-strata`). Every addition
  closes a named interface of the commissioned route: Castelnuovo–Mumford
  regularity definition and propagation, uniform and dimension-independent
  regularity bounds, relative regularity/base change, the fixed-N
  uniform-sections repair of Nitsure 4.3's converse, rank/universal
  flattening, the family vanishing locus, the coherent-projective-bundle
  projectivity convention, the arbitrary-ample Euler polynomial, fpqc
  descent, relative Grassmannian quotients for coherent sources, the
  P^n construction, valuative flat closure, proper + relatively ample ⇒
  projectivity, the global coherent-projective-bundle construction, the
  Noetherian fixed-polarization construction, and the finite-scheme length
  lemma used by the examples. This matches the owner direction bullet L80 and
  the packet-integration row 905/906 (22 A / 4 B; 19 A, 2 B local additions).
  No addition expands the subject: no general Quot functor beyond `E=O_X`, no
  Picard-scheme material (Nitsure §6 explicitly out of scope), no projective
  hypersurface parameter space, and no repetition of AV-4: AV-4's Grassmannian
  is the classical-variety `Gr(r,V)` of subspaces of a fixed finite-dimensional
  vector space, while `lem-hilbert-relative-grassmannian-quotients` represents
  rank-`e` locally free quotients of a coherent `W` on a locally Noetherian
  base over all test schemes — a strict generalization the construction needs,
  recorded as such in the coverage row.
- Kind counts: A = 3 definitions, 18 lemmas, 1 theorem; B = 3 examples, 1
  counterexample (page caps respected).
- Conventions preserved: coherent-projective-bundle projectivity versus
  H-projectivity distinguished (no converse asserted); arbitrary relatively
  ample `L`, not only an `O(1)` pullback; locally Noetherian possibly
  non-quasi-compact bases; all `S`-schemes as tests; the full functor as the
  coproduct over polynomials, not required to be proper/quasi-compact; and
  the fibrewise eventual Hilbert-polynomial membership, proved equivalent to
  the all-integer Euler-characteristic formulation via the local
  arbitrary-ample Euler-polynomial item.

## Subject coverage (definitions, results, examples)

- Definition layer: the Hilbert functor of embedded closed finitely presented
  flat families with scheme-theoretic pullback, its fixed-polynomial
  subfunctors, the projectivity convention, and the finite-scheme length
  lemma.
- Boundedness layer: m-regularity; propagation to vanishing, generation and
  multiplication; the Mumford-type uniform bound for fixed polynomial; the
  `b(P)` bound independent of ambient dimension and number of generators.
- Flattening and descent layer: finite-module rank strata with full
  scheme structure; universal scheme-theoretic flattening by Hilbert
  polynomial (non-reduced strata, no reduction implicit); fpqc effective
  descent and base change of Hilbert families; the universal vanishing locus;
  relative regularity with arbitrary base change.
- Construction layer: relative Grassmannian quotients; the fixed-polynomial
  Hilbert scheme of `P^n_S` for Noetherian `S`; flat schematic closure over an
  arbitrary valuation ring (no discreteness or Noetherian hypothesis);
  proper + relatively ample ⇒ coherent-projective-bundle projectivity; global
  strata in a coherent projective bundle over a locally Noetherian base; the
  Noetherian fixed-polarization construction.
- Main results: representability of each fixed-polynomial
  `Hilb^{P,L}_{X/S}` on all `S`-schemes by a proper finitely presented scheme
  with a universal closed finitely presented flat family, its global closed
  immersion into a coherent projective bundle (H-projectivity when a global
  `P^n_S` embedding induces `L`), the full functor as a locally finitely
  presented coproduct, arbitrary base change including non-Noetherian
  targets, and the universal family with open and closed polynomial strata
  intrinsic independence of the polarization.
- B page: the constant polynomial of finite points on `P^1`; the nonflat
  `k[ε]/ε²` fibre-family counterexample with its polynomial-one flattening
  locus `ε=0`; the flat fat-point family `V(X^2-tY^2)` and its base changes;
  and non-quasi-compactness of the full `P^1` Hilbert functor via infinitely
  many nonempty length-`d` strata.

The design's proof obligation — define the functor and prove representability,
universal family, and base-change compatibility with all finite-presentation
and flatness assumptions — is fully carried by the scaffold, and both
commissioned B items are present. No topic required by the intended subject
or the pair's library role is missing.

## Prerequisites and dependency scope

- Item level: 55 distinct declared dependencies; 22 are items of this same
  pair and 33 are external items, each resolving to an `items/*.md` file with
  matching `id` and `status: published` (0 missing, 0 non-published). Every
  item front-matter `deps` list equals its manifest `deps` list, and every
  `[[...]]` wikilink in every item resolves to a declared dependency (0
  undeclared links). There are no forward references, no cycles, and no
  in-run cross-batch edges: the batch-29 cross-batch input is empty and the
  unified ledger records batch 29 as reviewed with zero edges.
- Page level: all 4 `requires` pages
  (`flat-smooth-and-etale-morphisms`,
  `quasi-coherent-and-coherent-sheaves-and-vector-bundles`,
  `proj-projective-schemes-twisting-sheaves-and-ampleness`,
  `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`)
  are fully published (77+40+38+56 = 211 items, all `status: published`).
  Item-level deps additionally use published auxiliary interfaces from six
  further published pages (associated primes, choice, finite/proper/projective,
  flatness, localisation, relations); this is consistent with the run's
  practice and every such page is published.
- Consumers: no other batch item depends on this pair, no other page in
  `plan-spec.json` requires the A page, and the only `requires` edge into the
  pair is B → A. Nothing consumes a claim before it is built.
- **Unmet prerequisites: none found.** Every consuming item's declared
  prerequisite resolves to a published or same-pair item; no consuming
  planned item or result requires a claim absent from both the published
  library and the current scaffold. Proof-level hypothesis matching between
  the declared suppliers and each proof (including the flagged
  filtered-colimit wording nuance and the Nitsure 4.3 converse repair
  recorded in `batch-29.notes.md`) remains a Step 3b/Step 5 duty, not a scope
  gap.

## Source coverage

- A page: 3 retrieved full texts, each fetch-verified in the coverage file
  and independently re-fetched on 2026-10-03 with matching byte counts and
  SHA-256 prefixes:
  - Nitsure, *Construction of Hilbert and Quot Schemes* — 379,533 bytes,
    36 pp., `edbab8363ccfd8fe`; §1 (Hilb as `Quot_{O_X}`, the fpqc descent
    sentence, "Snapper's Lemma ... see Kleiman" on printed p. 4), Lemma 2.1,
    Remark 2.2, Theorem 2.3 (Mumford), Lemma 3.1, Theorems 3.3–3.7,
    Theorem 4.3 (i)(ii)(iii), Theorems 5.1–5.3, Lemma 5.4 all located in the
    retrieved text.
  - Grothendieck, Bourbaki 221 — 2,747,079 bytes, 29 pp.,
    `abbf37780fdc514b`; Théorème 2.1/2.2 with the printed *esquisse* sentence
    for (2.2), Corollaire 2.3, Lemmes 2.4–2.6, Théorèmes 3.1/3.2
    (existence), Lemmes 3.3–3.7 and Proposition 3.8 all located.
  - Grothendieck, EGA III₂ §7.7 — 10,856,434 bytes, 90 pp.,
    `3ad9d3710bceebb4`; the (7.7.5)–(7.7.9) exchange/semicontinuity and
    representing-module statements located.
- 41 harvested rows = 22 `included`, 11 `inline`, 2 `already-published`, and
  6 `out-of-scope` with written reasons (general Quot functors, map-dependent
  base change, the Chow-coordinate boundedness route, the esquisse-serving
  lemmas 2.5/2.6, and Nitsure §6 applications); checklist 0 errors/0
  warnings.
- The recorded second-treatment limitation (Nitsure is the one complete local
  treatment; Bourbaki 2.2 is an esquisse; V25 only cites) is permitted by the
  owner source rule because the one verified authoritative treatment is fully
  reproduced locally with every prerequisite proved, and the Step-1 drift
  review already returned `no-drift` for this pair.
- B page: no external-source rows; all four items are local computations over
  A items. Each manifest item carries an empty reference list and the
  corresponding `plan-spec.json` row records a `source_support` note that no
  external theorem is imported for the direct example. This matches other
  all-computational B pages in this run (batches 1 and 13–19 also list no B
  coverage) and is not a scope gap: the design commissions two of the four
  examples and both are present.

## Residual uncertainty

1. Proof correctness and authorship are out of scope for 3a; manifest/item
   strategies are routes, not proofs, and Step 3b/Step 5 own them.
2. Annotation nuances, no scope impact: the coverage harvest has no separate
   row for Bourbaki Théorèmes 3.1–3.2 themselves (their component lemmas are
   harvested and the packet's theorem carries the claim) nor for Nitsure
   Lemma 3.2; the manifest carries one literal `\u2013` escape in the
   `def-castelnuovo-mumford-regularity` title (the item file itself is
   correct); the coverage label "Snapper's Lemma" matches Nitsure's own
   sentence.
3. This decision's receipt is bound to the current A+B manifest hash. Any
   later item-list, title, or statement change voids it and requires a fresh
   3a decision.

## Decision

`sufficient`: the scaffolded A/B pair carries every definition, result,
example, and counterexample the AG-MOD-1 design and the pair's library role
require; its 19 A and 2 B local additions are owner-authorized prerequisite
interfaces rather than scope expansion; source coverage rests on three
fetch-verified full texts with all exclusions reasoned and the recorded
second-treatment limitation permitted by the owner rule; all dependencies
resolve to published or same-pair material; and no omitted topic or unmet
prerequisite warrants enrichment or a pair merger.
