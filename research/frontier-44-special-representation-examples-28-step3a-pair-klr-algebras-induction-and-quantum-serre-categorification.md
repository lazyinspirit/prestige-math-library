# Step 3a scope review — `klr-algebras-induction-and-quantum-serre-categorification` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 10 · 2026-10-10
- A page: `klr-algebras-induction-and-quantum-serre-categorification` (current manifest order 1836; 15 items)
- B page: `klr-algebras-induction-and-quantum-serre-categorification-examples` (order 1837; 5 items)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-klr-algebras-induction-and-quantum-serre-categorification.json`,
  reviewed scope hash `97a0a2cd50e16c6f4140fcbb7020bbf534f45d3ee56355aefd3294dabfd931fa`;
  manifest bytes reviewed: `research/frontier-44-special-representation-examples-28-batch-10.pages.json`
  sha256 `d2bfb10532aef6e1ab8f6d24c18b8c621293ca734aa79ec5caa79ede66c6c95d`;
  coverage bytes reviewed: `research/frontier-44-special-representation-examples-28-batch-10.coverage.json`
  sha256 `eb8672642751622f684d643c6be995c3552998efa03855d33dc923abf37549d7`).

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-quantum-groups-track.md` §QG-7 (L234–261) with the B-companion
  inventory at L338–344, plus the binding owner direction
  (`…-owner-authoring-direction.md`; owner records `…-owner-klr-review.md` and
  `…-owner-klr-interface-proposal.json`, status `frozen-final20-for-root-review-19-local-strategies-1-held-geometry`).
- Design ↔ manifest, item by item (no design claim dropped or narrowed):
  presentation and grading (`def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`,
  `def-klr-grading-and-diagrammatic-composition`); faithful polynomial representation and PBW
  (`thm-polynomial-representation-of-a-klr-algebra`, `thm-klr-pbw-basis-theorem`); induction/restriction
  bimodules and their generic biadjunction/projectivity
  (`def-klr-induction-and-restriction-bimodules`, `thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`);
  divided-power idempotents and projectives (`def-divided-power-klr-idempotents-and-projectives`);
  the three local supplier lemmas (`lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases`,
  `lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head`,
  `lem-klr-projective-duality-and-positive-divided-string-leading-terms`); Grothendieck-ring quantum-Serre
  relations and the Cartan pairing with its Lusztig-normalized comparison
  (`thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations`,
  `def-the-klr-cartan-pairing`, `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`);
  categorification of the negative half (`thm-klr-categorification-of-the-negative-quantum-half`);
  and the guarded symmetric-type lower-global-basis result
  (`thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`).
  The two maximal-tail/duality suppliers are documented owner-cycle additions carrying formerly missing
  local joints (batch-10 notes §§12–13; interface proposal `necessary_local_additions`), not scope drift.
- B page: the five items are exactly the design's QG-7 example list (L338–344) — four examples and one
  counterexample: `ex-klr-algebras-in-root-degrees-alpha-i-and-two-alpha-i`,
  `ex-the-two-vertex-klr-polynomial-representation`, `ex-the-double-edge-klr-braid-correction`,
  `ex-a-nil-hecke-divided-power-projective`,
  `cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route`. They are computational/diagnostic
  and are leaves: no A-page or run item consumes a B item as a proof supplier.
- Intended role: QG-7 supplies the generic KLR layer of the quantum-groups track. Run consumers:
  37 items on batches 11 (`cyclotomic-klr-algebras-and-highest-weight-categorification`, 26 items),
  24 (`cyclotomic-hecke-and-quiver-hecke-algebras`, 3) and 25
  (`ariki-categorification-and-graded-decomposition-numbers`, 8) consume 13 distinct pair items;
  batches 11/24/25 also require the A page at page level. The owner review records no published
  consumers of the changed interfaces. The cyclotomic (QG-8), affine/Fock (QG-6) and symmetric-group
  KLR material is intentionally homed elsewhere; the coverage declines/deferrals below route it there.

## 2. Source coverage

- `…-batch-10.coverage.json`: 62 harvested rows in total, 0 coverage errors and 0 warnings
  (`node tools/coverage-checklist.mjs … --require-destination`).
  A page: 8 sources, 52 rows — Khovanov–Lauda I (13; 10 included, 3 inline), Khovanov–Lauda II
  (8; 6 included, 1 inline, 1 out-of-scope), Rouquier (9; 7 included, 1 inline, 1 deferred),
  Kang–Kashiwara (7; 5 included, 2 deferred), Kleshchev survey (7; 5 included, 1 inline, 1 out-of-scope),
  Webster (3; 1 included, 1 inline, 1 deferred), Varagnolo–Vasserot (3 inline), Lauda–Vazirani
  (2 included, covering the longest-shuffle coinduction and the maximal-tail interface).
  B page: 4 sources, 10 rows, all included (Khovanov–Lauda I, Khovanov–Lauda II, Kleshchev, Rouquier).
- All 11 source stamps are fetch-verified with byte counts/page counts and sha256_16:
  KL I `8fffabbb7c5176fd` (53 pp), KL II `143950d1a0c0d79f` (18 pp), Rouquier `645032786278b9fb`
  (66 pp), KK `9d8f183a8bb552f5` (42 pp), Kleshchev `8685199608967fa7` (66 pp), Webster
  `5b4172ac78dfe773` (62 pp), VV `2062768e9a3bfb77` (30 pp), Lauda–Vazirani `c459699d3c6b9469` (56 pp).
- Every decline/deferral names a reason and an existing destination: KL II §4–5 multi-grading/cyclic
  modifications → QG-6 Fock track; Rouquier §5 integrable 2-representations → QG-8; KK §4 Theorems 4.5/4.7
  and §5–6 → QG-8; Kleshchev §7–8 Fock/decomposition numbers → the symmetric-group KLR consumers
  (SYMR-10/11/12); Webster cyclotomic Frobenius trace deferred with the generic longest-shuffle route
  used instead. The VV rows are inline because the geometric realization proof stack is now homed in
  the batch-47/49 local suppliers.

## 3. Prerequisites and dependency records

- Direct dependencies of the 20 pair items: 51 distinct ids — 30 resolve to current in-run scaffold
  (batch 10 itself; batches 5, 6, 8 QG-2/3/5; batches 47 and 49 geometric suppliers) and 21 resolve to
  published `items/` (QG-1 and HA-18/HA-19 suppliers such as `def-drinfeld-jimbo-quantized-enveloping-algebra`,
  `def-graded-balanced-tensor-product-and-homogeneous-hom`, `def-graded-grothendieck-group-shift-module-and-cartan-map`,
  `thm-graded-bimodule-tensor-hom-adjunction`, `def-axiom-of-choice`). The full transitive closure
  (1289 ids) contains no id absent from the published library plus the current run manifests.
- Cross-batch ledger input `…-batch-10.cross-batch-dependencies.json` has 26 rows (22 item + 4 page),
  all `open` supplier-first reviews into batches 5, 8, 47, 49 — records for the Step-3/Step-5 process,
  not scope gaps.
- **Unmet prerequisites: none found absent from both the published library and the current scaffold.**
  The single owner-held result, `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`,
  consumes two prerequisite claims that are present in the current frontier:
  (i) `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes` (batch 47) — a
  unique graded algebra isomorphism S_Γ(β) ≅ Ext_G^•(⊕_ν π_{ν!}k[d_ν], ⊕_ν π_{ν!}k[d_ν]) for a finite
  loopless quiver with arbitrary arrow multiplicities over a characteristic-zero field, with no
  semisimplicity/purity hypothesis required;
  (ii) `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` (batch 49) — L_ν = Rπ_{ν!}k[d_ν]
  is a finite direct sum of shifted simple G-equivariant perverse sheaves for any finite loopless complex
  quiver with arbitrary multiplicities, any dimension vector, in characteristic zero.
  Both statements sit in the current manifests, and the earlier native-47 omission (adjacent
  unequal-color dot slides) is repaired: the current
  `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators` includes the all-position
  distinct-color slides, and the repair packet
  `…-klr-foundation-native47-adjacent-dot-slide-repair/final-round1-after-binding.json` hash-matches the
  current batch-47 bytes (`c032c43f…`). The owner's corrected-clause review
  `…-owner-klr-actual-geometric-sufficiency-review/corrected-clause-applicability-after-native47-round1.json`
  records `sufficient-at-step1` with guard hashes matching current batches 47/49 (`bb35e6f5…`).
  No scaffold addition is recommended; the remaining hold is the ordinary owner-held authoring/accepted-proof
  obligation on that one item.
- Uncertainty, stated honestly: the batch-47/49 suppliers' own authoring and independent acceptance lie
  in their own Step-3b/Step-5 cycles (their cross-batch rows remain `open`), and the batch-10 escalation
  record for the global-basis item remains owner-held. That is a proof-readiness matter outside Step 3a
  scope; it is not an omission of planned definitions, results or examples.

## 4. Scope assessment and recorded decision

The planned definitions, results and examples adequately cover the intended subject — the generic KLR
algebra, its graded representation theory, induction/restriction with generic biadjunction, divided
powers, the Grothendieck-ring Serre relations and Cartan form comparison, the all-symmetrizable
negative-half categorification, and the guarded symmetric-type global-basis identification — with the
correct companion examples. Deferred material is owned by named existing pages, and no prerequisite is
absent from the published library plus the current scaffold. Decision recorded: **sufficient**, review
receipt path and reviewed scope hash above; the owner retains authority over proceed/merge/enrich.
