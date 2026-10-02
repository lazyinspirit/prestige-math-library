# Step 3a scope review — perfect-complexes-and-triangulated-grothendieck-groups

- Run: `frontier-37-owner-30` (batch 18), role alpha, label
  `step3a-pair-perfect-complexes-and-triangulated-grothendieck-groups-3b020a9b93a50cd8`.
- A page: `perfect-complexes-and-triangulated-grothendieck-groups` (order 723,
  category `homological-algebra`, 9 items). Requires
  `grothendieck-groups-and-graded-cartan-pairings`,
  `bounded-bimodule-complexes-and-derived-tensor`; both are published.
- B page: `perfect-complexes-and-triangulated-grothendieck-groups-examples`
  (order 724, 3 items, requires the A page only; leaf). Companion pointers
  A↔B agree.
- Decision: **sufficient**, recorded non-owner with
  `node tools/step3-decisions.mjs record-scope`. Receipt:
  `research/frontier-37-owner-30-step3a-review-perfect-complexes-and-triangulated-grothendieck-groups.json`;
  re-check with `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope`.
- Scope only: this decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-18.pages.json` | Current A inventory (9 items) and B inventory (3 items) with every statement, strategy, `deps`, provenance, source locator and page `requires` |
| `research/frontier-37-owner-30-batch-18.coverage.json` | Five source records for the A page (Stacks 0FCM, 0656, 0FJG; Weibel K-book II; Khovanov–Seidel), 30 row dispositions and fetch stamps |
| `research/frontier-37-owner-30-batch-18.notes.md` | Step-1 construction record: the local closure lemma, the AC/DC hypothesis assignment, supplier and gate results |
| `research/plan-homological-algebra-track.md` L5129–5174 (HA-21), plus its binding-input paragraph | Controlling prose design: three K₀ reconciliations, the tensor-equivalence action, the B inventory, source control and the three named external inputs for 21.7 |
| `research/plan-braid-groups-track.md` L700–758 (BG-15, esp. L740) | Planned consumer: `def-graded-grothendieck-group-of-a-m-perfect-complexes` and `prop-…-decategorification-…` name HA-21.2–21.5 and the two page items they need |
| `research/plan-spec.json` rows 723/724/757, `research/frontier-37-owner-30-scope-ledger.json`, `…-drift-evidence.json`, `…-alpha-step1-drift.md` (no-drift entry) | Page identity/order/kind/companion/`requires`; planned item lists empty, so the manifest controls; no design-vs-plan conflict |
| `research/homological-algebra-enrichment/{pages.json,proposed-items.json,review.md,source-manifest.json}` | Earlier HA-21 enrichment inventory (8 A + 3 B) that the run manifest extends by one lemma; no dropped row |
| Published prerequisite pages in `library/homological-algebra/` (`grothendieck-groups-and-graded-cartan-pairings`, `bounded-bimodule-complexes-and-derived-tensor`, `derived-categories`) and the published item suppliers in `items/` | Prerequisite and supplier availability; all earlier in order and non-empty |
| Re-fetched sources to `/tmp`: `stacks-0FCM.html`, `stacks-0656.html`, `stacks-0FJG.html`, `kbookII.pdf`, `ks.pdf` | Byte-identical reproduction of all five stamps (below); cited rows read in extracted text |

## Inventory against the prose design

All eight designed HA-21 rows (21.1–21.8) are present with the designed kinds
and order, and all three designed B rows are present. One A lemma was added at
Step 1: `lem-perfect-complexes-form-a-triangulated-subcategory`, used in-run by
the Euler lemma, both K₀ comparison theorems and the two-term-cone example. The
addition is required by the design's own route: 21.2 applies triangle K₀ to an
essentially small triangulated category, so `D_perf(A)` must be shown to be one,
and 21.4/21.5 need the no-roof representation for bounded finite-projective
complexes. It is a closure result from the same stamped sources (Stacks 15.76.4
plus the published no-roof proposition), not a widening of the subject.

- 21.1 → `def-perfect-complex-over-a-ring` (definition, ring and
  finite-graded-projective versions, `[1]` vs `{1}` separate, "bounded ≠
  perfect" clause kept).
- 21.2 → `def-triangulated-grothendieck-group` (triangle relations, applied to
  `D_perf(A)` and `D^b(C)`).
- 21.3 → `lem-triangulated-k-zero-shifts-and-exact-functors`
  (`[0]=0`, `[X[n]]=(-1)^n[X]`, exact-functor maps).
- 21.4 → `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant`
  (split Euler class, quasi-isomorphism invariance, triangle additivity).
- 21.5 → `thm-perfect-complex-k-zero-agrees-with-projective-k-zero`
  (degree-zero inclusion inverse to χ, brutal truncations; no global-dimension
  hypothesis).
- 21.6 → `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero`
  (`G₀(C) ≅ K₀(D^b(C))`, inverse the alternating cohomology sum; no
  projectives/Noetherianity/finite-global-dimension hypothesis).
- 21.7 → `thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories`
  (left Noetherian + finite left global dimension; keeps the comparisons
  separate and identifies them only under the added hypothesis, with the
  Cartan map as the composite).
- 21.8 → `thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions`
  (supplied inverse bimodule complexes, `v[M]=[M{1}]`, natural-isomorphism
  relations descend to matrices; no coherent 2-action claimed).
- B: `ex-homological-and-internal-shifts-on-k-zero`,
  `ex-dual-numbers-simple-is-not-perfect`,
  `ex-euler-class-of-a-two-term-cone` — exactly the designed examples, each a
  dependency leaf on A items and published suppliers.

I read the corresponding source statements at the recorded locators and they
match the manifest claims: Stacks 13.28.1/13.28.2 (definition, shift sign and
the full alternating-cohomology/truncation proof), 13.28.3, 15.76.1/15.76.4,
15.121.1–15.121.2 (complete proofs: acyclic bounded projective complexes
split from an endpoint; cones give quasi-isomorphism invariance; stupid
truncations give the inverse), Weibel K-book II Proposition 6.6, Proposition
7.5, Corollary 7.5.1, Resolution Theorem 7.6 and Lemma 7.6.1, Definition 7.7,
Lemma 7.7.1, Corollary 7.7.2, Theorem 9.2.2, Remark 9.2.3, Lemma 9.2.4 and
Examples 9.7.4–9.7.5, and Khovanov–Seidel §2c/§2e.1 (`[k]` vs `{k}`,
`K(D^b(A_m-mod)) ≅ K(A_m-mod)`, `[R_i]=[Id]−[U_i]`, the `Z[q,q^{-1}]`
structure). The manifest's side conventions (left modules, cochain shift
`X[1]^n=X^{n+1}`, graded degree-zero maps, two-term cone with `P` in degree −1)
are consistent with the repository's published shift, truncation, cone and
graded-K₀ definitions.

## Source coverage assessment

`node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-18.coverage.json`
reports 1 page, 30 harvested rows, 0 errors, 1 `coverage-low-yield` warning
(11/30 scaffolded). I reviewed all 30 dispositions and confirm the 19
non-included rows:

- 13 in-line rows are absorbed into named items: Stacks 13.28.4 (finite
  homological Euler functor) into the alternating-cohomology inverse of
  `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero`; Weibel 6.6, 7.5,
  7.6+7.6.1, 7.7+7.7.1, 7.7.2, 9.2.4 and 9.7.4 into the Euler/truncation/
  resolution arguments of items 21.4–21.7; KS §2c into the shift/tensor items.
  This is honest: the local items prove those arguments against local
  suppliers rather than restating the source rows.
- 6 out-of-scope rows have reasons I checked: Stacks 13.28.5 (weak-Serre
  variant) and 13.28.6 (biexact tensor pairing) state no fact the page uses;
  Stacks 15.76.2 (pseudo-coherence/Tor-amplitude characterization) is not the
  page's model of perfectness; 15.76.5 (idempotent closure) is not needed by
  triangle K₀ or by any consumer; 15.76.14 is the commutative *regular* ring
  comparison, which is genuinely not an instance of the finite-left-global-
  dimension theorem; KS Proposition 2.8 (Burau matrices) belongs to the braid
  track — plan L741/L758 assign it to BG-15. The low yield is explained by
  three independent overlapping treatments of the same K₀ facts.

All five stamps reproduced byte-identically on re-fetch:
Stacks 0FCM 18 828 B (`f781a3af16f0b07a`), 0656 41 398 B
(`be67cfced27a0bac`), 0FJG 18 830 B (`f6ec493b08d145dc`), Weibel K-book II
974 764 B (`529ea8a5853e9fa5`, 106 pp.), Khovanov–Seidel 714 553 B
(`34e747083f6229d6`, 72 pp.).

## Role in the library

- Both `requires` pages are published and earlier in order; the three named
  binding inputs for 21.7 are published — the *left*‑module
  `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`
  (not the commutative namesake), `def-left-and-right-global-dimension-of-a-ring`
  and `thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective`.
- Dependency check on the batch manifest: 12 items, 0 errors
  (`tools/manifest-deps.mjs`); 60 direct edges to published items and 25
  in-pair edges; the full transitive closure (own items + published front-matter
  `deps`/`justified_by`/`forward_refs`) is 1 124 nodes with no missing entry
  and no non-published status. `…-batch-18.cross-batch-dependencies.json` is
  `[]`, and no other batch in this run references any item or page of this pair.
- No published page or item references this pair, and it has no in-run
  consumer; the planned consumer is BG-15
  `categorical-braid-actions-and-decategorification` (order 757, outside this
  run), whose design names `def-triangulated-grothendieck-group` and
  `thm-perfect-complex-k-zero-agrees-with-projective-k-zero` — both present
  with the needed content (general ring, not only finite-dimensional field
  algebras; the finite-dimensional hypotheses live only on the graded tensor
  theorem, which BG-15 does not consume).
- No published defect in an actual supplier: the published-consumer ledger's
  entries for `lem-bounded-above-complexes-admit-projective-replacements` are
  resolved bounded item/interface reviews, and the defect ledger has no open
  entry naming this pair or its suppliers.

## Non-blocking observations for the owner and the Step-3b author

1. The closure lemma is a Step-1 local addition relative to the HA-21
   enrichment inventory (8 A rows). It is consumed in-run and design-required
   (see above); if the owner prefers it recorded as an explicit enrichment,
   the Step-1 note is the existing record. I do not treat it as a scope gap.
2. Item 21.7 and B example 2 state AC only to invoke the published
   DC-qualified bounded-above replacement/K-projectivity and balanced-Tor/
   derived-Tor identifications (their front matter declares
   `def-dependent-choice`; I verified both). The HA-21 prose does not mention
   this hypothesis; the item-level `axiom_audit` fields identify the exact use,
   so the author should keep the choice use confined to those invocations and
   keep the finite bounded arguments (item 2, the periodic resolution and its
   tensor homology) choice-free as scaffolded.
3. The pair mints the general `def-triangulated-grothendieck-group` while the
   published frontier-35 item `def-triangulated-k-zero-of-khovanov-seidel-projectives`
   is the A_m-specific instance. The frontier-35 Step-3a report already
   recorded this seam for reconciliation once page 723 exists; a Step-3b note
   (not an edit of published content) is the right place to restate how BG-15
   will use the general item, and no scope change is implied.
4. The B page has no own coverage record (batches 3 and 30 are the only
   exceptions in this run); its three examples are design-faithful and each is
   checkable from the A items plus the same five stamped sources, so I do not
   require a separate coverage row.

## Uncertainty statement

I verified page identity, the full item inventory against the stamped sources,
the five source stamps and locators, the decline reasons, dependency
availability and closure, the B-leaf shape, and the planned consumer interface.
I read the cited Stacks sections, the cited Weibel rows, and KS §2c/§2e.1 in
the re-fetched texts. I did not re-derive the items' proof strategies (the
finite replacement/truncation induction, the graded finite-dimensionality
restriction, the tensor-action conjugation) and did not audit the published
suppliers' proofs; those are Step 3b and Step 5 obligations. I found no omitted
topic in the pair's intended subject and therefore propose no merger and no
mandatory enrichment.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples realise the controlling HA-21 design item-for-item (plus one
design-required closure lemma), the five independent sources support every
claim at the recorded locators with byte-identical stamps, the six declines are
honest and leave no consumer-facing gap, the B page is a clean leaf, and the
pair's prerequisite closure and BG-15 interface are intact. Step 3b may author
against this scope.
