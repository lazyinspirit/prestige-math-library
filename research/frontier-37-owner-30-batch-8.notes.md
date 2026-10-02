# Frontier 37 owner 30, batch 8: Step 1 construction notes

Owned pair: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`
(A page, order 366.089) and
`residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples`
(B page, order 366.090), both `scheme-theory`. The binding
`research/frontier-37-owner-30-owner-authoring-direction.md` does not exist
(checked before construction), so the design section and the current plan
govern. No published item, shared plan, engine state, verdict, or other
batch's file was edited. Only the batch-8 manifest, coverage, cross-batch
input, this note, and the 58 batch-8 Step-1 readiness records were written.

## Construction history and scope

- Design section AV-25 of `research/plan-algebraic-geometry-track.md` occupies
  lines 1782–1845 (the dispatch's L1759 pointer lands inside AV-24's A list;
  the AV-25 heading is at line 1782). The design lists 34 A items and 11 B
  items and fixes the proof route: coefficient-trace residues and the
  principal-parts residue pairing over a perfect field, the global residue
  theorem, specialization of the published smooth-projective Serre duality
  theorem to curves over an arbitrary field, the full divisor Riemann–Roch
  theorem, the 2g / 2g+1 threshold theorems, adjunction, and Riemann–Hurwitz.
  `research/plan-spec.json` carries the pair at orders 366.089/366.090 with A
  requiring the five dispatch ids and B requiring only A, and with empty item
  lists. The plan therefore fixes the page contract and the design governs the
  inventory; the only plan/design conflict is the AG-LIE prerequisite issue
  recorded below.
- The delivered manifest has 47 A items and 11 B items (58 total): on the A
  page 5 definitions, 18 lemmas, 12 theorems, 10 corollaries and 2 remarks; on
  the B page 8 examples and 3 counterexamples. The B inventory is exactly the
  design list; the one B `ai-generated` statement
  (`ex-residue-pairing-one-cocycle`) carries `generation.role: example` and is
  not a dependency target of any item in the run (checked; no other
  `generation` block exists in the batch).
- Thirteen A items were added because no item on disk or in another batch
  provides them (each checked by id and by content search):
  `lem-uniformizer-differential-is-a-basis` (at any closed point with finite
  separable κ(p)/k, the residue definition needs Ω¹_{C/k,p} free of rank one
  with dt as an actual basis; the cotangent sequence supplies the nonzero
  cotangent class that proves generation);
  `lem-finite-potent-trace-existence-and-uniqueness`,
  `def-commensurable-subspaces-and-ideals-of-endomorphisms`,
  `lem-finite-potent-trace-linearity-and-conjugation`,
  `lem-e-ideals-and-commutator-trace`,
  `thm-abstract-residue-exists-unique`,
  `lem-abstract-residue-basic-properties`,
  `lem-abstract-residue-additivity` and
  `lem-abstract-residue-trace-under-finite-free-extension` (the nine Tate
  abstract-residue items; they make the global residue theorem independent of
  any finite map to P¹ and of the published AG-LIE duality);
  `cor-coefficient-trace-residue-agreement` (identifies the abstract residue
  with the coefficient-trace definition at every closed point);
  `lem-adelic-quotient-computes-h1-structure-sheaf` (the adelic presentation
  of H¹(O_C) used by the global residue theorem);
  `lem-twisting-sheaf-projective-space-ample` and
  `cor-projective-embedding-every-smooth-proper-curve` (projectivity of an
  arbitrary smooth proper curve, needed before the published AG-LIE
  smooth-projective duality theorem can be applied and before the dimension
  balance lemma). The projective embedding is proved from the degree-one
  finite map to P¹ and pullback of O(1), without Riemann–Roch or duality.
- Ordering repairs made before freezing: `def-commensurable-subspaces-and-ideals-of-endomorphisms`
  moved before `lem-finite-potent-trace-linearity-and-conjugation`;
  `cor-h0-canonical-differentials-genus` moved before
  `cor-canonical-degree-two-g-minus-two`; and the pair
  `lem-twisting-sheaf-projective-space-ample` /
  `cor-projective-embedding-every-smooth-proper-curve` moved to A4 before
  `lem-global-residue-pairing-dimension-balance`. A forward same-page scan
  after the reorder reports no item depending on a later item of the same
  page, and `item-dependency-levels.mjs check` recomputed every label.
- Route notes (design-mandated, recorded for Step 3): the global residue
  theorem is Tate's adelic argument and never uses a finite map to P¹; the
  dimension-balance lemma pairs the principal-parts pairing with the published
  AG-LIE duality theorem after splitting the two sides by the equality of the
  finite-dimensional dimensions; the coherent-sheaf Ext form is proved with a
  two-term resolution by finite locally free modules and a five-lemma
  argument; Riemann–Hurwitz uses the published batch-6
  `thm-canonical-bundle-ramification-formula` and the local different, not an
  analytic theorem; `thm-genus-one-canonical-bundle-trivial` is stronger than
  the design asked (no rational point is assumed), which does not weaken the
  B examples that cite it; the local coefficient-trace residue formula is valid over arbitrary k at
  closed points with finite separable residue field, while the global residue
  theorem and principal-parts duality retain their perfect-field scope; the
  design's warning against using the coefficient formula at inseparable
  points is respected; and no item consumes the unpublished AV-23
  Riemann–Hurwitz row.
- Local residue repair: published `lem-ag-separable-residue-cotangent-sequence`
  gives the isomorphism `m_p/m_p² -> Ω¹_{C/k,p} tensor κ(p)` at a finite
  separable residue point; published `thm-differentials-smooth-locally-free`
  gives rank one. Together with the in-run DVR supplier, `[t]` is a cotangent
  basis, so `dt` is a basis by Nakayama. The arbitrary-k coefficient field
  is constructed as a k-algebra section: published
  `thm-primitive-element-theorem-for-finite-separable-extensions`,
  `thm-evaluation-kernel-and-minimal-polynomial`, and
  `thm-polynomial-is-separable-iff-coprime-to-its-derivative` give a simple
  residue root; published `thm-completion-of-a-noetherian-local-ring` and
  `thm-completion-preserves-regular-local-rings` establish the complete
  Noetherian local setting; then `cor-complete-separated-adic-pair-henselian`
  and `cor-factor-hensel-implies-simple-root-hensel` lift it uniquely. The
  published `lem-parameter-power-series-map-injective-by-dimension`,
  `lem-parameter-power-series-subring-makes-ring-finite`, and
  `thm-complete-nakayama-lemma` identify `Ohat_{C,p} ≅ κ(p)[[t]]`. Change of
  parameter is checked without division
  in the residue field: for each negative monomial below `t⁻¹`, its target
  coefficient is a universal integer Laurent polynomial, vanishes after
  extension to `Q` by the derivative calculation, hence vanishes over `Z`
  and after specialization in every characteristic. The four changed items
  are `lem-uniformizer-differential-is-a-basis`,
  `def-residue-rational-differential-curve-point`,
  `lem-residue-independent-uniformizer`, and
  `lem-residue-exact-differential-zero`; global perfect-field theorems are
  unchanged.

## Choice and dependency audit

- 44 of the 58 items declare `def-axiom-of-choice`, each naming its use in the
  statement or strategy. Twelve B leaf examples and counterexamples inherit
  AC through their A-page suppliers and do not declare it (library practice
  for leaves: the B pages of batches 5–7 do the same). `def-hyperelliptic-curve`
  is a definition with no choice content, and
  `rem-general-serre-duality-deferred` is a scope remark.
  `lem-twisting-sheaf-projective-space-ample` says "assume the Axiom of
  Choice as inherited from the projective-space suppliers" without listing
  `def-axiom-of-choice` in `deps`; this matches a published pattern (367 of
  1,817 published items whose statement or strategy mentions AC do not
  declare `def-axiom-of-choice`) and no proof step performs a choice of its
  own. No item claims a choice-free proof of a choice-using result.
- Transitive closure audit of all 58 items: 320 nodes, 0 unresolved ids
  (every non-published supplier is scaffolded in this run: 32 nodes in
  batch 5, 31 in batch 6, 21 in batch 7), 0 published `proved_here: false`
  suppliers reached, no dependency cycle, and no path to
  `deferred-set-theory-beyond-choice` (checked explicitly; the
  Foundations boundary is untouched). Direct external dependencies: 89, all
  published on disk.
- Implicit-use scan: every item-id token occurring in a statement or strategy
  was compared against that item's `deps`; apart from the deliberate
  "inherited" phrase above, no named-but-undeclared token remains.
- Hypothesis/direction checks against the suppliers actually used (statements
  read on disk or in the run manifests): `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`
  (smooth projective of pure dimension n over a field, finite locally free
  sheaf, normalized trace, functorial perfect pairing in degrees q and n−q)
  and `def-smooth-projective-dualizing-line-bundle-and-trace` (the canonical
  bundle ω_X = ⋀^n Ω¹ and the trace normalization) — this is the input the
  design names for the curve specialization; projectivity of an arbitrary
  smooth proper curve is supplied locally by
  `cor-projective-embedding-every-smooth-proper-curve`, so no hypothesis of
  that theorem is left unmet; `lem-adelic-quotient-computes-h1-structure-sheaf`
  is stated for a connected regular proper curve; the residue definition, independence and exact-differential lemmas use the
  design's arbitrary-field scope at separable closed points; only the global
  residue and principal-parts theorems remain perfect-field scoped; `lem-degree-pullback-divisor-finite-morphism-curves` and
  `thm-riemann-hurwitz-complete` use the batch-6 finite-surjective and
  ramification suppliers with their stated hypotheses; the plane-curve
  adjunction theorem uses the conormal sequence and the published
  `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`.

## Owner reconciliation and remaining advisories

- **AG-LIE prerequisite resolved by the owner.** The A page uses 16 item
  dependencies on eight published items of
  `smooth-projective-serre-duality-and-flag-variety-line-bundles`, including
  `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`.
  The owner added that published page to the A page's declared `requires`
  in both the canonical plan and batch manifest, and moved this A/B pair
  to orders 510.0163/510.0164 after the supplier at 510.0161/510.0162.
  This keeps the same two pages in the frozen 30-pair run and gives every
  AG-LIE use a declared, earlier supplier. Canonical plan validation exits
  0; the batch's earlier overlay probe and its undeclared-prerequisite
  finding describe the pre-repair snapshot.
- **Plan-level advisory, recorded not escalated:** `validate-plan.mjs` exits 0
  on `research/plan-spec.json` and emits nine `redundant-prereq` advisories
  naming this A page's plan `requires` entries (each of the five is reachable
  through another). These are advisories on the plan file, which this batch
  must not edit; no manifest change removes them.
- **Locator drift, recorded not escalated:** the design cites "Vakil Ch. 27
  §§27.1–27.6, pp. 567–579", which belongs to an earlier edition; the
  accessible October 21 2025 PDF (hash below) places the Serre duality
  discussion at §18.5, printed pp. 514–517, the curve residue theory at
  §§19.1–19.2/19.5, printed pp. 535–549, and the curve-case desiderata at
  chapter 29, printed pp. 793–812. The design's MIT "pp. 55–62" is likewise
  the book-page range; the consolidated OCW PDF p. 62 is a reference list and
  the lectures occupy printed pp. 56–61 (Lecture 24 pp. 56–58, Lecture 25
  pp. 59–61). Fulton's "Ch. 8 §§8.4–8.6, pp. 104–112" and Gao–Zhang's
  "Ch. 7 §§7.4–7.5, pp. 89–93" match the accessible copies exactly.
- **Gao–Zhang resolved, no drop needed:** the design's Gao–Zhang reference
  resolves to the author-hosted full PDF (hash and locator below); Chapter 7
  §§7.4–7.5 were read in full against the inventory and verified correct.
  There is no `source_resolution` in the batch-8 coverage file and no source
  was dropped.

## Sources and harvest

- Seven independent treatments back the pair, each with a recorded full-text
  fetch stamp in `research/frontier-37-owner-30-batch-8.coverage.json` (all
  re-verified in check mode in this dispatch, 7/7 fetch-verified, 7/7
  resolved):
  1. Vakil, *The Rising Sea* (Oct 21 2025 PDF, 9,643,655 bytes, SHA-256
     prefix `d07177aa0317c134`, 852 PDF pages): §18.5 pp. 514–517 (Serre
     duality for smooth projective varieties, products on the projective
     line), §§19.1–19.2/19.5 pp. 535–549 (curve duality, residues, degrees),
     §§29.1–29.4 pp. 793–812 (the curve case and the trace normalization).
  2. MIT 18.725 Fall 2015 consolidated lecture notes (863,420 bytes,
     `7e6398eba5bb49b7`, 63 PDF pages): Lectures 24–25, printed pp. 56–61
     (residue of a differential, the change-of-uniformizer computation, the
     sum of residues, Serre duality on curves).
  3. Fulton, *Algebraic Curves* (Internet Archive copy, 706,612 bytes,
     `937a5c2a962b5de1`, 129 PDF pages): Ch. 8 §§8.4–8.6, printed
     pp. 104–112 (derivations and differentials, canonical divisors,
     Riemann–Roch, adjunction and the plane-curve genus).
  4. Gao–Zhang, *Lectures on Algebraic Geometry* (LAG2, Dec 14 2016,
     796,444 bytes, `ffe0b153244db990`, 127 PDF pages): Ch. 7 §§7.4–7.5,
     printed pp. 89–93.
  5. Tate, "Residues of differentials on curves" (Numdam PDF, 1,001,892
     bytes, `f2cc15171e5d44d9`, 12 PDF pages): §§1–3, journal pp. 149–156
     (trace properties (T1)–(T5), Propositions 1–2, Theorem 1, properties
     (R2)–(R6), Theorems 2–3 and the corollary) — the direct source of the
     nine abstract-residue items and of the global residue theorem route.
  6. Lipman, "Residues, duality, and the fundamental class of a scheme-map"
     (341,704 bytes, `e8b91b1c45dba24a`, 10 PDF pages): §1 pp. 2–4 and
     §§2.2–2.3 pp. 4–6 (the residue map via local cohomology, the
     globalization diagram, regular versus dualizing comparison).
  7. Stacks Project, *Algebraic Curves* tag 0BRV (745,082 bytes,
     `c4e3d4c0fc533a3d`, 71 PDF pages): sections 3–13 (duality,
     Riemann–Roch, very ample sheaves, genus, plane curves, Riemann–Hurwitz,
     inseparable maps) — used as an independent cross-check of the main
     theorems.
- Harvest: 53 named results, each with one disposition — 31 included,
  13 inline, 1 already-published, 2 deferred, 6 out-of-scope. The two
  deferred rows carry destinations
  (`residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`,
  `smooth-projective-serre-duality-and-flag-variety-line-bundles`); the
  out-of-scope rows have specific reasons in the coverage file. The
  `coverage-checklist --require-destination` run reports 0 errors and
  0 warnings.

## Cross-batch input

`research/frontier-37-owner-30-batch-8.cross-batch-dependencies.json` reviews
all 207 declared cross-batch edges whose consumer is in batch 8: 205 item
edges and 2 page edges (A requires batch-7
`riemann-roch-for-curves-via-euler-characteristics` and batch-6
`smooth-proper-curves-divisors-genus-and-ramification`; B requires A). Every
row is `open` with the exact required claim and the draft-supplier evidence,
since all three supplier batches are drafts of this run. Item edges point
at batch 5 (39), batch 6 (121) and batch 7 (45). After the final dependency
edit the unified ledger was refreshed
(`node tools/frontier-dependency-ledger.mjs refresh --run
frontier-37-owner-30`): all 207 batch-8 edges carry reviews, 0 orphaned
reviews, and `--require-reviewed` now exits 0 for the whole run.

## Validation snapshot

| Check | Result |
| --- | --- |
| `coverage-checklist.mjs --require-destination` batch 8 | 1 page, 53 harvest rows, 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage` batch 8 (check mode) | 7/7 fetch-verified, 7/7 resolved, 0 documented drops |
| `url-sweep.mjs --coverage` batch 8 | 7/7 URLs live, 0 failed, 0 suspect; 7 citation decisions, 0 documented drops |
| `source-backing.mjs` batch 8 (`--require-verified`) | 21 authored (included) results, every one still backed by an openable source |
| `manifest-deps.mjs` batch 8 | 58 items, 0 errors |
| `content-policy.mjs --manifest-only` (all 30 manifests) | 778 scoped items, 0 errors, 0 warnings |
| `manifest-integrity.mjs --run` | 60 pages owed, 60 in the manifests, no scope drift |
| `item-dependency-levels.mjs check --run` | 778 items across 60 pages, maximum level 31, OK; batch 8 levels 0–31 and 161 intra-batch edges |
| `step1-decisions.mjs check --run` (after recording) | 778/778 items ready, `closed: true` |
| `validate-plan.mjs research/plan-spec.json` | exit 0; plan-level advisories only (nine naming this A page) |
| `validate-plan.mjs /tmp/av25/plan-spec-b8-probe.json` | one batch-8-attributable error, the undeclared AG-LIE prerequisite above; all other batch-8 probe findings are cross-batch ids that the full plan supplies |
| `extcheck.mjs` | exit 0, 21,782 items, no new external-reference finding; no batch-8 item rests on recorded-not-proved material |
| `frontier-dependency-ledger.mjs refresh --run` | 207 batch-8 edges reviewed, 0 orphans; `--require-reviewed` exits 0 |

## Readiness records

The dispatch recorded 58/58 batch-8 items as `ready`. The owner's later
AG-LIE prerequisite/order repair and four local-residue item repairs invalidated
those hashes. After the scoped writer drained, the owner recomputed 11
dependency levels and re-recorded all 58 readiness decisions in dependency
order, preserving each record's earlier evidence and adding the new direct
dependencies. `node tools/step1-decisions.mjs check --run
frontier-37-owner-30` now returns 778/778 run items ready and `closed: true`.

The owner's post-repair checks passed: manifest dependencies 778 items, content
policy 778 items with 0 errors/warnings, dependency levels 778 items across 60
pages, scope integrity 60/60 pages, canonical plan validation, and `git diff
--check`. The full 30-manifest plan overlay has 67 findings outside this pair;
none names a batch-8 page. Those findings remain Step-4 reconciliation work.

Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical
approval. Step 3 provides that review.
