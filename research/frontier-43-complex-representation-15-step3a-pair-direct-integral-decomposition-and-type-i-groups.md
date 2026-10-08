# Step 3a dispatch report — `direct-integral-decomposition-and-type-i-groups`

- Run: `frontier-43-complex-representation-15` (stage `3a-scope`, batch 1,
  orders 1232/1233, `representation-theory`).
- Dispatch label reviewed: `step3a-pair-direct-integral-decomposition-and-type-i-groups-a4cd524ced350142`
  (two earlier identical task files `-b1c8566508456950` and `-fa99f56766dc894b`
  exist with no artifacts and no state entry; only the `a4cd…` dispatch is
  registered in `.autopilot/frontier-43-complex-representation-15/state.json`).
- Pair: A `direct-integral-decomposition-and-type-i-groups` (43 items: 6
  definitions, 29 lemmas, 7 theorems, 1 corollary; 11 of these are the RG-26
  design rows and 32 are run-local A suppliers) / B
  `direct-integral-decomposition-and-type-i-groups-examples` (4 items: 3
  examples, 1 counterexample). Companion pointers agree A↔B; B `requires` is
  A only.
- Role: alpha scope review of this pair only. No scaffold, item, manifest,
  coverage, plan or owner record was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the design's promised subject. Four findings
  for the owner / Step 3b author are recorded in §6; none omits a
  design-promised topic, so they are recorded as unmet-prerequisite findings
  rather than as an insufficient-scope decision. The pair's only committed
  consumer is the batch-5 page `sl2-r-discrete-series-and-unitary-dual`.

## 1. Inputs read

| Artifact | Use |
|---|---|
| `research/frontier-43-complex-representation-15-batch-1.pages.json` | Full text of both pages: all 47 items (43 A + 4 B), statements, strategies, kinds, deps, `dependency_level`, per-item `sources.references` and `axiom_use` |
| `...-batch-1.coverage.json` | 7 fetch-stamped sources and all 92 harvested-result rows with dispositions |
| `...-batch-1.notes.md` | Scaffold record: 47/47 ready, seven local proof suppliers, the two authorized original-citation clauses and the exact claimed source stamps |
| `...-batch-1.cross-batch-dependencies.json` | `[]` — no in-run cross-batch dependency touches this pair |
| `...-scope-ledger.json`, `...-covers.json`, `...-frontier-gate-pages.json` | Both pages owed in batch 1; both are frontier gate pages |
| `research/plan-representation-theory-groups-track.md` RG-26 (L1831–1900), index L59, source matrix L2390, crosswalk L2540–2544, exclusions L2628–2629 | Binding prose design: 11 A rows + 4 B rows, the `requires` list, the hard proof plan, the abelian Plancherel seam and the declared out-of-scope boundary |
| `research/plan-spec.json` rows 1232/1233 | Page fields (kind, category, companion, `requires`) match the manifest; page-level `items` arrays are intentionally empty |
| `...-representation-drift-resolution.md` | Owner commission 1–6 for the local representation-specific suppliers and the exact held Glimm branch; the source of the 32 local A additions |
| `...-alpha-step1-drift.md` § `direct-integral-decomposition-and-type-i-groups`, `...-alpha-step1-drift-native.md`, `...-drift-evidence.json` | Step-1 verdict: pages carry the approved scope; the S-5 fallback is withdrawn; the local interfaces are Step-3 obligations; no page-drift correction needed |
| `...-conditional-glimm-citation-authorization.json`, `...-owner-authoring-direction.md` | Authority for the two exact cited clauses (Glimm 1961 factor-type-I ⇒ GCR; Dixmier 1964 Corollaire 2, n = 2) and the owner direction to preserve every approved claim |
| 47 `...-step1-<item>.json` readiness records | 47/47 present, all `decision: ready` |
| `items/*.md` (105 external suppliers, spot reads) | Statement/hypothesis match at the load-bearing interfaces (see §4) |

## 2. Design ∶ scaffold comparison (scope only)

All design rows are present with the same ids, kinds and claims, in design
order:

| design row (RG-26) | manifest item |
|---|---|
| direct integral of a measurable representation field (def) | `def-direct-integral-of-unitary-representations` |
| strong continuity of the integrated representation (lem) | `lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous` |
| factor / primary representation (def) | `def-factor-representation-and-primary-representation` |
| central decomposition into factor representations (thm) | `thm-central-decomposition-into-factor-representations` |
| essential uniqueness of the central decomposition (thm) | `thm-essential-uniqueness-of-central-decomposition` |
| type I factor representations and type I groups (def) | `def-type-i-factor-representation-and-type-i-group` |
| equivalent characterizations of type I groups (thm) | `thm-equivalent-characterizations-of-second-countable-type-i-groups` |
| irreducible direct integral decomposition for type I (thm) | `thm-irreducible-direct-integral-decomposition-for-type-i-groups` |
| essential uniqueness of the type I disintegration (thm) | `thm-essential-uniqueness-of-type-i-irreducible-disintegration` |
| non-type-I non-smooth disintegration (thm) | `thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition` |
| compact groups are type I; atomic sums (cor) | `cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums` |
| B1 regular representation of ℝ as multiplicity-one character integral (ex) | `ex-direct-integral-of-characters-for-the-regular-representation-of-r` |
| B2 compact direct integrals are atomic Hilbert sums (ex) | `ex-compact-group-direct-integrals-are-atomic` |
| B3 left regular factor of an ICC group is a non-type-I factor (ex) | `ex-the-left-regular-factor-of-an-icc-discrete-group` |
| B4 irreducible multiplicity data is not canonical outside type I (cex) | `cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i` |

The 32 run-local A additions are the interfaces commissioned in
`...-representation-drift-resolution.md` §RG-26 items 1–6 together with the
alternative-H2 route actually used for the Glimm criteria, plus the supporting
selection/Gram–Schmidt/trace items:

- decomposition interfaces: `lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra`,
  `lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers`,
  `lem-central-diagonal-disintegration-has-factor-fibers`,
  `lem-central-spectral-models-transport-and-intertwiners-disintegrate`,
  `lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings`,
  `lem-separable-type-i-factors-are-multiples-of-irreducible-representations`,
  `lem-multiplicity-of-a-type-i-factor-representation-is-well-defined`,
  `def-measurable-field-of-von-neumann-algebras`;
- C\*-algebra/Glimm route: `lem-separable-group-c-star-type-i-and-smooth-dual-criteria`,
  `lem-gcr-kernel-and-mackey-borel-characterizations`,
  `lem-c-star-state-gns-purity-and-polish-state-space`,
  `lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations`,
  `lem-pure-state-excision-and-essential-orbit-density`,
  `lem-faithful-essential-pure-state-orbits-obstruct-countable-separation`,
  `lem-primitive-ideals-have-standard-borel-quotient-norm-codings`,
  `lem-local-analytic-separation-and-saturated-borel-quotients`,
  `lem-l-one-of-a-second-countable-group-is-separable`,
  `lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra`,
  `lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity`;
- Borel/measurable bookkeeping: `lem-measurable-gram-schmidt-and-constant-field-trivializations`,
  `lem-closed-witness-codings-and-measured-projections`,
  `lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections`,
  `lem-borel-relations-admit-conull-borel-uniformizations`,
  `lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries`;
- von Neumann/operator basics: `thm-double-commutant-theorem-for-concrete-von-neumann-algebras`,
  `lem-polar-decomposition-and-nonzero-partial-isometries-in-factors`,
  `def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra`;
- B-witness suppliers (homed on A because B may depend only on A items and
  published items): `def-commensurator-unitary-character-and-monomial-induced-representation`,
  `lem-monomial-induced-representations-transversal-model-properties`,
  `lem-monomial-irreducibility-criterion`, `lem-monomial-inequivalence-criterion`,
  `lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two`.

Structure and metadata: orders 1232/1233, titles, category, companions and
both `requires` arrays equal `plan-spec.json`; the six A `requires` targets are
published pages (GNS, group C\* algebra/Fell dual, FA measurable fields,
conditional distributions, Mackey imprimitivity, Pontryagin duality). The 47
items carry 381 dep edges: 109 inside the pair and 105 distinct external ids,
every one a `status: published` item file. There is no A→B dependency edge;
the four B items declare 12 direct A deps. The pair's maximum
`dependency_level` is 9 (`thm-essential-uniqueness-of-type-i-irreducible-disintegration`);
all suppliers are declared before their consumers. Page sizes 43/4 are far
below the 100-item cap. The design's hard proof plan (measurable fields and
decomposable operators first, then the centre of the generated von Neumann
algebra for the canonical factor decomposition, then type I and irreducible
fibres with multiplicity, then uniqueness) is realized by the manifest's
dependency-level ordering, with the two exact citation boundaries isolated in
their owning arguments.

## 3. Source coverage

`...-batch-1.coverage.json` carries 7 fetch-stamped source records over 5
distinct treatments: A page — Bekka–de la Harpe (arXiv:1912.07262),
Blackadar (`Cycr.pdf`), Farah (2019 book), Marker (DST notes), Dixmier 1964
(`JD-454.pdf`); B page — Bekka–de la Harpe and Blackadar. All 92 harvested
rows are disposed:

- A page: 79 rows = 56 `included`, 5 `inline`, 17 `out-of-scope`, 1 `deferred`.
- B page: 13 rows = 8 `included`, 3 `inline`, 2 `out-of-scope`.

Independent verification performed by this review (not taken on trust):

- All 7 stamps pass `source-fetch-check --coverage` (7/7 fetch-verified, 7/7
  resolved, 0 documented drops).
- I re-downloaded three load-bearing documents on 2026-10-07 and reproduced
  their stamps byte- and hash-exactly: Bekka 4 266 926 B, sha256_16
  `f478a69afaed8df5`, 445 pp; Blackadar 2 495 419 B, sha256_16
  `8cb61a8348efe6e4`, 561 pp; Dixmier 1964 1 286 033 B, sha256_16
  `20ac10522b8e5c69`, 4 pp (the stamped 4-page original scan).
- I re-read the claimed Bekka loci in the fetched full text: §1.G.6
  (disintegration over an abelian subalgebra of the commutant, PDF p. 61,
  printed p. 62), Proposition 1.G.7 and Theorem 1.G.8 (irreducible
  disintegration via a maximal abelian subalgebra, PDF pp. 61–62), Example
  1.G.9 and Theorem 1.G.10 with reference to [Dixm–64b, Corollaire 2]
  (PDF pp. 62–63, printed pp. 63–64), Example 1.G.11(1) (two free-factor
  decompositions of λ_{F₂}, PDF p. 63, printed p. 64); §6.B.17–6.B.18
  (multiplicity-free decomposition and its uniqueness, PDF p. 187, printed
  p. 188); §6.C.b (topologies/Borel structures on duals and quasi-duals — the
  source's own definition of the Mackey–Borel structure, PDF pp. 194–196);
  §6.D.4 (factor representations detect type I, PDF pp. 198–199) and
  §6.D.7 (canonical irreducible decomposition and its uniqueness, PDF p. 201,
  printed p. 202); §7.D.2–7.D.4 (ICC groups: λ_Γ factorial of type II₁, PDF
  p. 222, printed p. 223); §8.F.3 with comments (the seven equivalent
  characterizations, statement only, proof referred to Glimm 1961 and Dixmier
  Chapter 9, PDF pp. 255–257, printed pp. 256–258); Appendix A.C.6–A.C.7
  (von Neumann conull selection and the measure-algebra spatialization, PDF
  p. 408, printed p. 409). Every quoted locator is present as claimed.
- The 17 A-page and 2 B-page `out-of-scope` declines were checked against the
  approved boundary. The load-bearing ones are exact: §1.G.5 (induction commutes
  with direct integration) is not used because the free-group witness is
  rebuilt from the transversal model plus a cyclic-GNS coefficient computation;
  §1.G.7–1.G.8 (general masa-based existence) is not promised by the design,
  which keeps irreducible disintegration for type I and central decomposition
  as the general result; the literal QD(G) parametrisation in §6.C.8 is
  explicitly not asserted by the approved uniqueness theorem (owner-held); and
  the Dixmier declines (Theoreme 1, Corollaire 1, Corollaires 3–4, Remarque)
  only drop stronger statements that the local route does not mint. The
  alternative-route declines in Farah (CAR subquotients, Naimark dichotomy,
  general-state density) record failed or unnecessary candidate routes
  honestly.

Two source-coverage nuances, recorded rather than treated as scope loss:

1. Seven manifest items have no harvested coverage row of their own —
   `def-factor-representation-and-primary-representation`,
   `lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections`,
   `lem-primitive-ideals-have-standard-borel-quotient-norm-codings`,
   `cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums`,
   `lem-central-spectral-models-transport-and-intertwiners-disintegrate`,
   `thm-equivalent-characterizations-of-second-countable-type-i-groups`,
   `thm-essential-uniqueness-of-type-i-irreducible-disintegration` — but each
   carries item-level `sources.references` with an exact locator (e.g. Bekka
   §8.F.3 pp. 256–258 for the characterization theorem; §6.D.7 p. 202 for the
   type-I uniqueness; §6.C.8 pp. 197–198 for central transport), so the
   harvest crosswalk is not item-complete by design and no item is
   source-unbacked. This is a bookkeeping observation only.
2. The plan's §11 two-treatment matrix names Bruhat Part III Ch. 10–12 and
   Bekka–de la Harpe–Valette Appendix F §F.5 for RG-26; neither is fetched by
   this scaffold. Blackadar Part III §1.5–1.6 (direct integrals, type I
   factors, central decomposition) plus Part IV §1.5 (classification
   statements) and Farah (full proof of the C\*-state/GCR alternative route)
   supply the second independent treatment in fact, and every consumer item
   carries its own locator. Finding F4 asks the owner to confirm the
   substitution; no consumer is unbacked.

## 4. Prerequisite audit (unmet-prerequisite duty)

- **Item deps.** 105 distinct external dependency ids, all resolving to
  `items/<id>.md` with `status: published` (checked programmatically:
  105/105); 0 missing, 0 resolving only to `plan-spec.json`, 0 resolving to
  another batch. The in-pair count is 109 edges. `...-batch-1.cross-batch-dependencies.json`
  is `[]`.
- **Links.** 65 `[[…]]` occurrences (45 distinct ids) in the pair's
  statements/strategies: 16 resolve to pair items, 29 to published items,
  0 unresolved, 0 resolving only to a planned-but-unscaffolded item.
- **Page requires.** All six A-page `requires` pages exist with
  `status: published`; the B page requires the A page of this run.
- **Step-1 records.** 47/47 present and `decision: ready`.
- **Published consumers.** No published item or page in `items/` or
  `library/` references any of the 47 new ids (so the pair creates no
  dangling published consumer). The only in-run consumers are
  `thm-plancherel-support-for-sl2-r` (5 deps: direct integrals, factor
  representations, central decomposition, type-I uniqueness, irreducible
  disintegration) and `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`
  (4 deps: type I definition, Glimm criteria lemma, separability of C\*(G),
  double commutant) on the batch-5 page `sl2-r-discrete-series-and-unitary-dual`,
  which also declares the page-level `requires` edge to this A page. The B
  page has no consumer.
- **Load-bearing interfaces read at statement level and matched:**
  `def-measurable-hilbert-field-from-a-countable-fundamental-family`,
  `def-direct-integral-of-a-measurable-hilbert-field`,
  `thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces`,
  `def-measurable-and-decomposable-operator-fields`,
  `thm-measurable-essentially-bounded-operator-fields-act-decomposably`,
  `thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication`,
  `thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras`,
  `def-unitary-dual-of-a-locally-compact-group`, `def-fell-topology-on-the-unitary-dual`,
  `def-primitive-ideal-space-of-a-group-c-star-algebra` (defines the Jacobson
  topology, checked), `thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g`,
  `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`,
  `thm-plancherel-theorem-for-lca-groups`, `thm-regular-representation-peter-weyl-decomposition`,
  `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely`,
  `def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra`.
  No hypothesis mismatch was found at scope level; assembling these into
  proofs is the Step 3b authors' work.
- **Finding F1 (confirmed absence, owner action recommended).** The *Mackey
  Borel structure* on the dual, and the property *countably separated*, are
  named in six items of this pair (`lem-faithful-essential-pure-state-orbits-obstruct-countable-separation`,
  `lem-local-analytic-separation-and-saturated-borel-quotients`,
  `lem-gcr-kernel-and-mackey-borel-characterizations`,
  `lem-separable-group-c-star-type-i-and-smooth-dual-criteria`,
  `thm-equivalent-characterizations-of-second-countable-type-i-groups`,
  `thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition`; plus
  "standard measure" in `thm-irreducible-…` — finding F2) but **no definition
  item exists in the published library or in the current scaffold**: 0 files
  in `items/` state the definition (only two published items use the phrase
  "countably separated", both for orbit spaces), the published
  `def-unitary-dual-of-a-locally-compact-group` defines the dual only as a
  set of classes, and no definition item named for the structure exists in
  the published library or in the run's manifests. The only place the pair
  pins the structure down is the level-4 lemma
  `lem-local-analytic-separation-and-saturated-borel-quotients`
  ("the quotient Borel structure of pure states agrees with the Mackey Borel
  structure …"), whose own statement presupposes the notion, while the first
  statement-level use is the level-3 lemma
  `lem-faithful-essential-pure-state-orbits-obstruct-countable-separation`
  ("its Mackey dual is not countably separated"), which does not declare any
  definitional supplier. Required prerequisite claim: for a separable
  C\*-algebra (equivalently a second-countable group via C\*(G)) the set of
  unitary equivalence classes of irreducible representations carries the
  quotient Borel structure of the standard Borel space of pure states (the
  Mackey Borel structure), and it is countably separated when a countable
  family of Borel sets separates its points; Bekka constructs exactly this
  structure at §6.C.b (PDF pp. 194–196). Recommended owner action: authorize
  one small definition item on this A page before its first consumer
  (wiring it into the deps of the six above items), or amend the earliest
  consumer to define the notion inline; precedent — the identical finding for
  the RG-24 page in `frontier-40-geometry-braids-rep-27` was recorded this
  way and resolved by the inline definition in the published
  `lem-ergodic-imprimitivity-systems-with-regular-orbits-concentrate-on-one-orbit`.
  Uncertainty: whether the owner prefers the definition item or the inline
  clause is the owner's call; the absence itself is confirmed.

## 5. Intended role in the library

RG-26 is the group-track station for measurable Hilbert fields, central
decomposition and the type I / non-type I boundary; the plan's downstream
direction (recorded in `...-representation-drift-resolution.md` §RG-30) is
that RG-30 (batch 5, `sl2-r-discrete-series-and-unitary-dual`) consumes only
the proved RG-26 rows for its Plancherel-support theorem, and the manifest
confirms exactly that consumer set (5 + 4 item deps plus the page edge). The
pair's published seam to RG-25 is item-level (`def-unitary-dual-of-a-locally-compact-group`,
`def-fell-topology-on-the-unitary-dual`, `def-primitive-ideal-space-of-a-group-c-star-algebra`,
weak-containment items); its seam to the FA track is the published
`measurable-hilbert-fields-and-direct-integral-operators` page; and its
commutative specialization is the published FR Plancherel interface used by
the B1 example. Three deliberate boundaries are consistent with the plan
and the owner direction and are not scope losses: the general masa-based
existence theorem (Bekka Theorem 1.G.8) is not proved because the design
keeps central decomposition as the general result and irreducible
disintegration for type I; the literal QD(G) parametrisation of central
uniqueness is explicitly not asserted (owner-held); and the type-I ⇔ GCR
proof is local except for the single owner-authorized Glimm implication, whose
boundary is visible in the owning item. The B page is a leaf that illustrates
the abelian continuous-spectrum model, the compact atomic case, the
non-type-I ICC factor and the failure of canonical multiplicity data.

## 6. Findings for the owner (not scope-insufficiency findings)

1. **F1 — confirmed absence of a definitional prerequisite: the Mackey Borel
   structure / countable separation.** Evidence, consuming items, required
   claim and recommended scaffold addition are in §4. No design-promised
   topic is omitted; this is the same finding class the RG-24 review recorded
   as an owner action while deciding scope sufficient.
2. **F2 — minor: `standard measure` is used but not defined.** The statement
   of `thm-irreducible-direct-integral-decomposition-for-type-i-groups` says
   "there exist a standard measure μ on the dual"; the term is Bekka's
   (Appendix A.C.6: a σ-finite measure with a conull standard Borel subset)
   and appears in no published or scaffolded item. Recommended action:
   one inline definitional clause at first use (or restate as "σ-finite
   measure whose base contains a conull standard Borel subset"). No scaffold
   addition is required.
3. **F3 — bookkeeping: the coverage row "§6.B.17 multiplicity-free
   decomposition of type I representations"** is disposed `deferred` with
   `destination: owner-decision` and a stale parenthetical "(escalated; see
   batch notes)"; the batch notes contain no such escalation and the
   scaffold's local type-I route (central decomposition + measurable
   multiplicity splitting + ideal-support transport) does not consume the
   multiplicity-free reduction. Recommended action: re-dispose the row as
   `out-of-scope` with the reason that the approved type-I proof route does
   not use it, or record explicitly that it is not consumed. No item,
   statement or dependency changes.
4. **F4 — note: the plan's second treatment for RG-26 is not the one
   fetched.** Plan §11 lists Bruhat Part III Ch. 10–12 and BHV Appendix F
   §F.5; the scaffold's second full treatment is Blackadar (with Farah,
   Marker, Dixmier). Every item has a locator and 3/3 re-downloaded stamps
   match, so this is a substitution to confirm, not a missing source.
5. **Non-blocking observations.** (a) Seven items have no coverage row of
   their own but do carry item-level source locators (§3). (b) The pair
   proves no general irreducible-existence theorem; the B-page counterexample
   and the non-type-I theorem work with concrete/ad hoc decompositions and
   the Dixmier witness, so a reader should not cite this pair for Bekka
   Theorem 1.G.8. (c) The pair's headline items use AC; the `axiom_use`
   clauses are recorded on the five items that state them, and the remaining
   items inherit AC through `def-axiom-of-choice` deps, consistent with the
   approved convention.

## 7. Checks run

| Check | Result |
|---|---|
| `node tools/manifest-integrity.mjs --run frontier-43-complex-representation-15` | 30 pages owed, 30 in the manifests; no scope drift |
| `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 371 items, 0 errors |
| `node tools/coverage-checklist.mjs research/…-batch-1.coverage.json --require-destination` | 2 pages, 92 harvested results, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | 371 items across 30 pages, max level 28; no errors |
| `node tools/source-fetch-check.mjs --coverage research/…-batch-1.coverage.json` | 7/7 fetch-verified, 7/7 resolved, 0 documented drops |
| Independent re-fetch of Bekka / Blackadar / Dixmier (this review) | 3/3 byte- and sha256_16-exact to the coverage stamps |
| Bekka loci re-read in the fetched full text (§3) | all claimed statements/numberings present |
| Custom dependency closure (this review) | 47 pair items; 381 dep edges = 109 in-pair + 105 distinct published; 0 missing, 0 planned-only, 0 in-run cross-batch |
| Custom wikilink resolution (this review) | 65 occurrences / 45 distinct; 0 unresolved |
| Published-consumer scan (this review) | 0 published references to the 47 new ids; in-run consumers only batch 5 (§4) |
| Step-1 readiness records | 47/47 present, all `decision: ready` |
| `...-batch-1.cross-batch-dependencies.json` | `[]` |

## 8. Scope decision

The planned definitions, results and examples cover the intended subject of
RG-26 at design strength: the direct-integral construction and its strong
continuity, factor/primary representations, the central decomposition and its
essential uniqueness in the honest base-identification form, the definition of
type I, the five equivalent characterizations, the irreducible disintegration
and its uniqueness for type I groups, the non-type-I non-canonicity theorem
with the exact Dixmier Corollaire 2 witness under the recorded authority, and
the compact-group collapse — with four examples/counterexamples on the B page
covering the abelian continuous spectrum, the compact atomic case, the ICC
non-type-I factor and the non-canonical multiplicity data. All 15 design rows
are present, every prerequisite resolves to a published item or page, source
coverage is complete and independently spot-verified byte-exactly, and no
consumer is starved. The findings in §6 are for the owner / Step 3b author:
none omits a design-promised subject, so the scope decision is **`sufficient`**.

Receipt: recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-43-complex-representation-15
--page direct-integral-decomposition-and-type-i-groups --decision sufficient …`
(receipt `research/frontier-43-complex-representation-15-step3a-review-direct-integral-decomposition-and-type-i-groups.json`),
whose reason carries the scope evidence, the F1–F4 findings and this report's
path. Any scaffold addition applied for F1/F3 changes the scope hash and
reopens the pair's scope decision, so the owner should record `proceed` for the
resulting scope after applying it. No item approval, proof judgement or owner
record is made here.

## Appendix — inventory bound to this decision (dependency-level order)

A page (43 items, in dependency-level then manifest order):
`def-commensurator-unitary-character-and-monomial-induced-representation` (definition),
`def-direct-integral-of-unitary-representations` (definition),
`def-factor-representation-and-primary-representation` (definition),
`def-measurable-field-of-von-neumann-algebras` (definition),
`def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra` (definition),
`lem-c-star-state-gns-purity-and-polish-state-space` (lemma),
`lem-closed-witness-codings-and-measured-projections` (lemma),
`lem-l-one-of-a-second-countable-group-is-separable` (lemma),
`lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections` (lemma),
`lem-measurable-gram-schmidt-and-constant-field-trivializations` (lemma),
`thm-double-commutant-theorem-for-concrete-von-neumann-algebras` (theorem),
`def-type-i-factor-representation-and-type-i-group` (definition),
`lem-a-measurable-direct-integral-of-unitary-representations-is-strongly-continuous` (lemma),
`lem-borel-relations-admit-conull-borel-uniformizations` (lemma),
`lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations` (lemma),
`lem-monomial-induced-representations-transversal-model-properties` (lemma),
`lem-polar-decomposition-and-nonzero-partial-isometries-in-factors` (lemma),
`lem-second-countable-group-c-star-algebra-has-a-sequential-approximate-identity` (lemma),
`lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra` (lemma),
`lem-self-commensurating-cyclic-subgroups-and-trivial-conjugate-intersections-in-the-free-group-of-rank-two` (lemma),
`lem-two-common-diagonalizations-are-related-by-a-base-isomorphism-and-a-measurable-field-of-unitaries` (lemma),
`lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers` (lemma),
`lem-monomial-inequivalence-criterion` (lemma),
`lem-monomial-irreducibility-criterion` (lemma),
`lem-pure-state-excision-and-essential-orbit-density` (lemma),
`lem-separable-group-c-star-representations-disintegrate-over-a-commuting-diagonal-algebra` (lemma),
`lem-separable-type-i-factors-are-multiples-of-irreducible-representations` (lemma),
`cor-compact-groups-are-type-i-and-direct-integrals-collapse-to-discrete-sums` (corollary),
`lem-central-diagonal-disintegration-has-factor-fibers` (lemma),
`lem-faithful-essential-pure-state-orbits-obstruct-countable-separation` (lemma),
`lem-multiplicity-of-a-type-i-factor-representation-is-well-defined` (lemma),
`lem-primitive-ideals-have-standard-borel-quotient-norm-codings` (lemma),
`lem-local-analytic-separation-and-saturated-borel-quotients` (lemma),
`lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings` (lemma),
`thm-central-decomposition-into-factor-representations` (theorem),
`lem-central-spectral-models-transport-and-intertwiners-disintegrate` (lemma),
`lem-gcr-kernel-and-mackey-borel-characterizations` (lemma),
`lem-separable-group-c-star-type-i-and-smooth-dual-criteria` (lemma),
`thm-essential-uniqueness-of-central-decomposition` (theorem),
`thm-equivalent-characterizations-of-second-countable-type-i-groups` (theorem),
`thm-irreducible-direct-integral-decomposition-for-type-i-groups` (theorem),
`thm-non-type-i-groups-have-nonsmooth-irreducible-decomposition` (theorem),
`thm-essential-uniqueness-of-type-i-irreducible-disintegration` (theorem).

B page (4 items): `ex-direct-integral-of-characters-for-the-regular-representation-of-r`,
`ex-compact-group-direct-integrals-are-atomic`,
`ex-the-left-regular-factor-of-an-icc-discrete-group`,
`cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i`.
