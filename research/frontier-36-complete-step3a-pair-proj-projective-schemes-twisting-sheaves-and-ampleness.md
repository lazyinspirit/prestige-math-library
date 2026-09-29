# Step 3a scope review — proj-projective-schemes-twisting-sheaves-and-ampleness

- Run: `frontier-36-complete` (batch 8), role alpha, label
  `step3a-pair-proj-projective-schemes-twisting-sheaves-and-ampleness-144bfbd312f0070a`.
- A page: `proj-projective-schemes-twisting-sheaves-and-ampleness`
  (order 366.077, `scheme-theory`, 38 items).
- B page: `proj-projective-schemes-twisting-sheaves-and-ampleness-examples`
  (order 366.078, 10 items), companion pointers reciprocal.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-36-complete-step3a-review-proj-projective-schemes-twisting-sheaves-and-ampleness.json`;
  re-verify with
  `node tools/step3-decisions.mjs check --run frontier-36-complete --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-8.pages.json` | Current A inventory (38 items) and B inventory (10 items) with every statement, `deps`, provenance, source references and dependency level; page `requires`; companion pairing |
| `research/frontier-36-complete-batch-8.coverage.json` | Five source records (Stacks *Constructions*, *Properties*, *Morphisms*; Vakil 29-Aug-2022 author draft; Gao–Zhang Ch. 5) with 32 harvested rows, locators, dispositions, item destinations and fetch stamps |
| `research/frontier-36-complete-batch-8.notes.md` | Step-1 construction record: design/plan reconciliation, the six local A additions, convention corrections, proof/dependency audit, published repair findings, gate results |
| `research/frontier-36-complete-batch-8.cross-batch-dependencies.json` | 33 direct edges (batch 5 and batch 7 suppliers), all `open` pre-Step-3 |
| `research/plan-algebraic-geometry-track.md` §AV-19 (L1295–1356) and the binding amendment block (L3600–3630) | Controlling prose design: `requires`, pair sources, A inventory (32), B inventory (10); owner amendment "On AV-19 formulate the homogeneous-ideal correspondence with the precise saturation/irrelevant-torsion hypotheses" |
| `research/plan-spec.json` rows 366.077/366.078 and consumer rows 366.079, 366.083, 366.085, 366.091, 510.0161 | Page identity/order/kind/category/companion/`requires`; empty item lists, so the manifest controls item order; planned consumer seams |
| `research/frontier-36-complete-owner-authoring-direction.md`, `…-alpha-step1-drift.md` (AV-19 entry) | Binding owner direction; drift verdict `no-drift` for this pair |
| `research/frontier-36-complete-batch-9.pages.json` + `…-batch-9.cross-batch-dependencies.json`, `…-batch-16.pages.json` + `…-batch-16.cross-batch-dependencies.json` | The only in-run consumers: page edge plus 12 and 2 item edges respectively, with each consumer statement and use |
| Stamped source bodies `/tmp/frontier36-b8-{constructions,properties,morphisms,vakil,gaozhang}.{pdf,txt}` (sha256 prefixes and byte counts equal to the coverage `fetch_verified` stamps: `8f70bb66…`, `2f5b9ba4…`, `0bebe1d9…`, `989b0d91…`, `ffe0b153…`) and `/tmp/frontier36-ag10.{source,txt}` (`dcdbad3c…`, 41 pp.) | Locator re-verification at the exact bytes the coverage/design name |
| `library/scheme-theory/fibre-products-base-change-and-scheme-theoretic-fibres.md`, `library/commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory.md`, `items/def-homogeneous-ideal-saturation.md`, `library/not-proved-here/deferred-set-theory-beyond-choice.md` | Published prerequisite state, the published single-coordinate saturation definition, and the Foundations bootstrapping boundary |
| `research/published-consumer-supplier-ledger.md` lines 32729, 32798, 34739 | Current A-P disposition of the three published items the batch note flags on the supplier route |

## Inventory against the prose design

All **32 designed A ids** and all **10 designed B ids** are present, with the
designed kinds (`def/lem/thm/rem/ex/cex` carried as
`definition/lemma/theorem/remark/example/counterexample`). No designed item was
dropped, renamed or re-kinded, and no claim was added beyond the six local
supports below. The manifest order is dependency-driven rather than
design-listed order; the design does not fix item order, and the plan-spec rows
hold no competing item order. The B page `requires` only its A companion and
every B dependency is an item of that A page.

The six A additions are supports of designed claims, not scope expansion:

| Added item (manifest position) | Why it is required | Backing I verified |
|---|---|---|
| `lem-proj-prime-localization-correspondence` (4) | Homogeneous primes avoiding `f` ↔ primes of `S_(f)`; the chart step of `thm-proj-structure-sheaf-scheme` | Stacks *Constructions* §27.8 (01M3) |
| `lem-section-nonvanishing-affine-intersection` (11) | `U ∩ X_s` affine for `U` affine; used by `lem-very-ample-implies-ample` and `thm-serre-criterion-ampleness` | Stacks *Properties* Lemma 28.27.4 (01PV) |
| `lem-relative-proj-affine-local-gluing` (15) | Affine-local compatibility of `Proj(Γ(U,A))`; existence half of `def-relative-proj-quasi-coherent-graded-algebra` | Stacks *Constructions* §27.15 (01NM) |
| `def-relatively-ample-invertible-sheaf` (16) | The design's own clause "distinguish relative ampleness over a base"; needed before `lem-very-ample-implies-ample` | Stacks *Morphisms* Definition 29.38.1 (01VG) |
| `lem-extend-sections-from-nonvanishing-open` (17) | Denominator-clearing extension `Γ(X_s,F) ⊆ s^{-r}Γ(X,F⊗L^{dr})`; the hard direction of `thm-serre-criterion-ampleness` | Stacks *Properties* Lemma 28.18.2 (01PW) |
| `lem-projective-space-saturation-local-criterion` (23) | Chartwise test for `I:(x_0,…,x_n)^∞`; feeds `thm-closed-subschemes-projective-space-homogeneous-ideals`; implements the plan's binding amendment | Stacks *Constructions* §27.13 (03GL) chartwise argument, as in the statement I read; item carries range-level references, with no dedicated coverage row |

Boundary and convention clauses are preserved, and where the design text was
imprecise the scaffold is precise rather than narrower:

- Grading: `M(n)_d = M_{n+d}`; `O_X(n) = \widetilde{S(n)}` with `O(1)`
  invertible only under degree-one generation, and `lem-proj-veronese-invariance`
  explicitly does not claim invertibility of arbitrary twists.
- Empty boundary: `Proj S = ∅` iff all positive-degree homogeneous elements are
  nilpotent, with `S_+` nilpotent asserted only when `S_+` is finitely generated.
- Projective bundle: `P_S(E) = Proj_S Sym(E)` in the **quotient** convention,
  finite locally free `E` of locally constant rank, rank zero giving the empty
  bundle, distinct from `V(E)`.
- Ampleness: absolute ampleness by affine section opens on quasi-compact `X`;
  `f`-ampleness tested over every affine base open; `H`-very ampleness via a
  quasi-compact immersion into finite `P^n_S`. The design's unguarded "very ample
  implies ample" is false for a nonaffine base (`id_{P^1}` with `L=O`), and the
  scaffold proves the correct `f`-ampleness statement with absolute ampleness
  only over an affine base — matching Stacks' own warning after Definition
  29.39.1 (01VM), which I read at the stamped bytes.
- Relative Proj: existence with no finite-generation hypothesis; arbitrary base
  change with no flatness or finite-generation hypothesis, plus compatibility
  with twists and graded quotients.
- Saturation: the full irrelevant ideal `b=(x_0,…,x_n)`, not the published
  single-coordinate `J:x_0^∞` (`items/def-homogeneous-ideal-saturation.md`),
  exactly as the plan amendment requires; `thm-closed-subschemes-…` states the
  saturated-ideal bijection and uniqueness.

## Source coverage assessment

`coverage-checklist --require-destination` on
`research/frontier-36-complete-batch-8.coverage.json`: 1 page, 32 harvested
results, 0 errors, 0 warnings; `source-backing --require-verified`: 23 authored
results, every one backed by an openable source; `source-fetch-check` stamps
5/5 full bodies. I re-verified the load-bearing locators myself, in the same
bytes the coverage stamped:

- Stacks *Constructions*: §8 Proj and standard opens (01M3), §10 twists and the
  degree-one invertibility discussion (01MM), Lemma 13.7 closed subschemes of
  `P^n_R` via homogeneous equations (03GL), §15 relative Proj by glueing
  (01NM), Lemma 16.10 arbitrary base change (01O3), Lemma 16.11
  representability of invertible quotients (01O4), §21 `P(E)` with
  `π*E ↠ O(1)` and the explicit warning about the rank-one-quotient convention
  (01OA).
- Stacks *Properties*: Lemma 18.2 (01PW, quasi-compact + quasi-separated
  isomorphism statement), Definition 27.1 (01PS), Lemma 27.2 (01PT), Lemma 27.4
  (01PV), Proposition 27.13 (01Q3) with conditions (1)⇔(7) on ampleness and
  eventual global generation, Lemma 27.14 (0B3E).
- Stacks *Morphisms*: §38 `f`-ampleness (01VG), Lemma 40.3 (01VS) producing an
  immersion from an ample line bundle on a locally finite-type morphism,
  Lemma 40.5 (01VU) `f`-ample ⇔ some/all high powers `f`-very ample.
- Vakil 29-Aug-2022 draft: §4.5 "Projective schemes, and the Proj
  construction", §17.4 "Morphisms to projective space", §17.6 "Ample and very
  ample line bundles", §18.2 "Relative Proj of a sheaf of graded algebras" are
  present at the recorded locators; §7.4.4, §9.3.6–8 and §10.6 (Veronese, twists,
  Segre) belong to the same draft.
- Gao–Zhang Ch. 5: §5.1, §5.5 (with Definition 5.5.12 Veronese embedding) and
  §5.6 exist as recorded.

Locator observations, all non-blocking and already documented in the batch
note: the design cites Vakil Ch. 16/Ch. 18 of an earlier edition (the current
author-hosted 2022 draft numbering is the one harvested); the design's "Milne
AG10 §i, pp. 23–25" is a one-sentence pointer to Milne AG Ch. 6k/6m ("the
functor defined by projective space", "Grassmann varieties"), not a proof
source — its `P^n` functor content is realized here by the `P(E)` quotient
functor item; and the coverage row for the associated-sheaf construction names
§27.10 while that construction sits in §27.9 (tag 01MJ) with `O(n)` defined in
§27.10 — both bodies were read and the item destinations are correct.

The design's Stacks ranges are only partially harvested: *Constructions*
§§27.11–27.12, 27.14, 27.17–27.20 have no rows at all (§27.9's associated-sheaf
content and the §27.9–§27.10 twist material are covered by the rows noted
above), and *Morphisms* §§29.41–29.44 have no rows.
Nothing designed is left unbacked (the Proj functoriality, general
`Y → Proj(A)` and quasi-projective/projective-morphism formalism of those
sections is either covered elsewhere in-run — batch 5 owns the morphism
formalism — or outside this inventory). Recorded below as owner information.

## Role in the library

- Prerequisites: the four declared `requires` pages are two published
  (`fibre-products-base-change-and-scheme-theoretic-fibres`,
  `rees-modules-artin-rees-and-hilbert-samuel-theory`) and two in-run drafts
  (`finite-proper-and-projective-morphisms` batch 5,
  `quasi-coherent-and-coherent-sheaves-and-vector-bundles` batch 7) whose 33
  supplier edges declared by this pair are all `open` pending Step-3
  authoring — the expected pre-Step-3 state, not a scope defect.
- In-run consumers: batch 9 `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`
  (page edge + 12 item edges) and batch 16
  `smooth-projective-serre-duality-and-flag-variety-line-bundles` (page edge +
  2 item edges). Every consumed supplier id exists on this A page with the
  needed clause: twists `O(n)` and their invertibility for the twist definition;
  `P^n_A = Proj A[x_0,…,x_n]` and the basic-sections identification for the
  Čech/monomial and resolution arguments; `thm-serre-criterion-ampleness` and
  `thm-ample-powers-very-ample-proper-base` for eventual generation and Serre
  vanishing; `thm-segre-line-bundle-external-tensor` for the Chow lemma;
  `def-ample-invertible-sheaf` for the ampleness interface. No consumer clause
  needs a result absent from the inventory.
- Declared dependency closure: 660 distinct ids from the A items; no missing
  contract, no B-page dependency, no same-page forward edge, and no path into
  `library/not-proved-here/deferred-set-theory-beyond-choice` (the Foundations
  bootstrapping boundary is respected). The three published items with pending
  Step-3 repair are absent from the closure (next section).
- B page shape: all ten B dependencies are items of its own A page; no B id is
  referenced anywhere else in the run's 30 batch manifests; no A item depends
  on a B item.

## Published-supplier notes (no new defect claimed here)

The batch note's three repair findings match the canonical ledger's current A-P
rows (`research/published-consumer-supplier-ledger.md` lines 32798, 34739,
32729): `thm-affine-closed-immersions-quotient-rings`,
`def-quasi-coherent-ideal-sheaf`,
`thm-quasi-coherent-ideal-closed-subscheme-correspondence`. This pair's declared
closure avoids all three (verified by closure walk), so they are not load-bearing
here; they remain with their batch-5/7 owners for Step-3 repair and downstream
impact review. `def-homogeneous-ideal-saturation` is too narrow for the
irrelevant-ideal saturation (it saturates at a single coordinate) but is
correct for what it states; no published change is needed for this pair, and the
new local saturation lemma carries the required clause.

## Non-blocking observations for the owner

1. **Bridge statement candidate, not needed in-run.** Stacks *Morphisms*
   Example 39.3 (read in the stamped bytes; it cites *Constructions*
   Lemma 18.5, which I did not open) states that for a graded `O_S`-algebra `A`
   generated in degree 1 over `A_0`, the morphism associated to
   `Sym_{O_X}(A_1) → A` is a closed immersion `Proj_S(A) → P(A_1)` pulling
   `O(1)` back to `O_X(1)`. That statement is not in the design inventory and
   not in the manifest. The page's `lem-projective-morphism-relative-proj-presentation`
   goes only from `H`-projective to a `P^n_S` embedding; it does not show that
   `Proj_S(A)` (or `P(E)`) is projective over the base. No in-run consumer needs
   it. The likely future consumer is the blowup pair (`thm-blowup-projective`,
   order 366.091, not in this run), whose H-projective convention (batch 5
   definition) does not obviously supply it. Recommend the owner consider this
   when AV-26 is scaffolded (enrichment here, or a local construction there from
   this page's charts).
2. **Serre criterion is the Noetherian specialization.** Stacks *Properties*
   Proposition 27.13 (01Q3) states the ampleness⇔eventual-global-generation
   equivalence for quasi-compact quasi-separated `X` and finite-type
   quasi-coherent `F`; the scaffold states the Noetherian coherent form, which
   the design prescribed and both in-run consumers satisfy. Noted as an
   intentional narrowing, not a gap.
3. **Locator bookkeeping** as in the source-coverage section (Vakil edition,
   Milne §i pointer, §27.9 vs §27.10 row attribution, and the partial harvest of
   the design's declared Stacks ranges).
4. **No proof endorsement.** This review did not re-derive the `ai-altered`
   strategies; the scaffold's documented corrections (for example the
   relative-versus-absolute ampleness distinction) are consistent with the
   sources I read, and remain Step 3b/5 obligations.

## Uncertainty statement

I verified page identity, the full inventory against the design, the source
statements at the exact stamped bytes, the dependency closure, the B-leaf shape
and both in-run consumer interfaces. I did not audit the proofs of the 36
external direct suppliers (6 on batch 5, 15 on batch 7, 15 published), did not
re-derive the proof strategies of the pair's 48 items, and did not check the two in-run
supplier pages beyond the edges that touch this pair. The only omissions I
found are the non-blocking observations above; the
one genuinely load-bearing-looking result (observation 1) lies outside the
designed inventory, has no in-run consumer, and is reconstructible locally from
this page's chart and gluing items, so I do not treat it as a blocking scope
gap. I name no blocking omission and propose no pair merger.

## Decision

**sufficient** for both pages of the pair. All 32 designed A results and all 10
designed B examples are planned with the designed kinds; the six additions are
source-backed supports of designed claims, including the saturated-ideal lemma
the plan requires by amendment; the harvest, at the exact stamped bytes, covers
every harvested clause and every designed item carries a verified source
reference; the conventions (grading sign, degree-one
invertibility, quotient `P(E)`, absolute versus relative ampleness, arbitrary
base change) are stated precisely; the pair's prerequisite closure, its batch-9
and batch-16 consumer interfaces, and its B-leaf role are intact. Step 3b may
author against this scope.
