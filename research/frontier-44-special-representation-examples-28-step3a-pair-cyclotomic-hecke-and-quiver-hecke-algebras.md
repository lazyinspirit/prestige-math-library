# Step 3a dispatch report — pair `cyclotomic-hecke-and-quiver-hecke-algebras`

- Run `frontier-44-special-representation-examples-28`, stage `3a-scope`, role alpha, batch 24.
- Pair: A `cyclotomic-hecke-and-quiver-hecke-algebras` (order 1840) / B
  `cyclotomic-hecke-and-quiver-hecke-algebras-examples` (order 1841), category
  `special-topics-in-representation-theory`.
- Reviewed carrier (current, live at review): `research/frontier-44-special-representation-examples-28-batch-24.pages.json`
  sha256 `51699ca5069c4f4ebdfb791f95c381cb4440623ec584ed89c001f016557be276`
  (47 items: 43 A + 4 B; dependency levels A 0–32, B 14–32). Its scope-relevant fields
  (item id/kind/title/statement, page id/title/category) are identical to the sealed manifest
  `.../owner-native24-cyclotomic-consumer-review/sealed-native24-first-repair.pages.json` that received the
  two-round native24 Step-1 verdict `SUFFICIENT final actual native24 Step1 after title-only round2 binding`
  (`.../owner-native24-cyclotomic-consumer-review/source-title-metadata-correction/final-actual-afterbinding-round2.json`,
  `remaining_mathematical_gap: null`).
- Coverage `...-batch-24.coverage.json` sha256 `31d12eae3333519ebe44416b7804c4b66fda5f412f3cd9d7c5faa72837290363`;
  notes `...-batch-24.notes.md` sha256 `900caee4c006be7bc95f97c0d49b1df819defdffa52d7d524e0f3a274603aa6d`;
  cross-batch ledger `...-batch-24.cross-batch-dependencies.json` sha256 `b92e38afba0da0ba3e131bad5ba40df8d2a5688054fc81d0a42d8751e9171fdc`.
- **Decision: `sufficient`** — the planned definitions, results and examples adequately cover the intended
  subject; no unmet prerequisites confirmed; no scaffold edits (prohibited at Step 3a).

## 1. Scope vs the prose design

Design read: `research/symmetric-group-planning/proposed-inventory.md`
§“SYMR-11 — Cyclotomic Hecke and quiver Hecke algebras” (line 319 ff): 6 A contracts + 4 B contracts.
Binding owner material: `...-owner-authoring-direction.md` (final KLR algebraic interfaces 2026-10-09; future
cyclotomic first/right convention 2026-10-09), the pair's scaffold notes `...-batch-24.notes.md`, and the
owner-registered native24 local-construction packets under `.../owner-native24-cyclotomic-consumer-review/`
(original 14 ids/kinds/titles preserved; registration
`root-final-step1-registration-round2/registration.json`).

Every design contract is present, with the exact planned IDs:

| Design contract | Current item | Scope content present |
|---|---|---|
| `def-affine-and-cyclotomic-type-a-hecke-algebras` | same ID | both presentations (NG (4.2)–(4.5), DG (3.2)–(3.5)), first-strand cyclotomic quotient, finite e≥2, level-one identification declared |
| `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks` | same ID | CRT projectors e(ν), central content sectors e_α, nonzero sectors are actual blocks; level-one JM/residue dictionary |
| `def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras` | same ID | type-A KLR datum Q^A (incl. e=2 double edge −(u−v)²), standard cyclotomic quotient, ψ=−τ dictionary |
| `lem-hecke-intertwiners-produce-local-klr-generators` | same ID | local ψ_r from intertwiners; relations (1.6)–(1.15); map ρ |
| `thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` | same ID | ρ, σ mutually inverse over any field, both branches, equivalent KL presentation |
| `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` | same ID | transported Z-grading, uniqueness for fixed generator images, graded isomorphism across series, triviality caveat |
| 4 B example/counterexample contracts | same 4 IDs | degree check incl. e=2 correction; degenerate S₃ map; level-one rank-two e=3 KLR block count; whole-affine-not-one-block counterexample |

The manifest adds 33 owner-registered native24 helper items (all 14 originals unchanged) that build the
auxiliary theory locally on the same page, i.e. within its own subject: universal affine/cyclotomic
ordered-monomial bases and bounded spanning, perfect canonical trace, polynomial spectra/central sectors,
the sector isomorphism and total dimension, the arbitrary-level cyclotomic Murphy/cellular and Schur theory,
the Jantzen/Gram and Lyle–Mathas block-combinatorics chain, and small base lemmas
(`lem-laurent-binomial-valuation-at-one-over-any-field`,
`lem-ultra-tight-multisets-admit-column-potentials`, `lem-charged-core-height-matrices-…`). The chain is
internally consumed: it ends in `thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks`,
which supplies the block primitivity consumed by `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`
and hence the bridge. No helper is unused and none leaves the page's stated subject.

Recorded boundaries (coverage dispositions, not silent omissions): the source's e=0 (A_∞) branch and the
tower-embedding diagram (4.10) are `deferred` with destination `owner-decision`; seminormal e=0 modules,
Section 6 integral Z-form/mod-p reduction, i-induction/graded decomposition numbers (batch 25), the
e-idempotent-subring route and the affine (non-cyclotomic) KLR algebra are `out-of-scope` with written
reasons. The e=0 branch would need an A_∞ Cartan datum that exists nowhere in the library, and the run
authorizes only the cyclic type-A pair; the page and all its consumers are stated in finite e, so this is a
documented boundary, not a scope gap for the intended subject.

## 2. Source coverage

All 47 items carry `sources.references` with URL and locator. Original layer: Brundan–Kleshchev 2008
(arXiv:0808.2032v3/v4) and 2009 (arXiv:0901.4450v3), Hu–Mathas (arXiv:1304.0906v3), Kleshchev's survey
(arXiv:0909.4844v1), Mathas' 79-page Hecke/Schur manuscript. Native24 additions add: Fayers, Core blocks of
Ariki–Koike algebras and Weights of multipartitions; Lyle–Mathas, Blocks of cyclotomic Hecke algebras
(math/0607451v4); Mathas, The representation theory of the Ariki–Koike and cyclotomic q-Schur algebras
(math/0204025), Seminormal forms and Gram determinants (math/0604108v4), Positive Jantzen sum formulas
(2106.15486v2); Malle–Mathas (Symmetric cyclotomic Hecke algebras); Brundan (math/0607717v3); Kang–Kashiwara
(arXiv:1102.4677v4); Khovanov–Lauda I (arXiv:0803.4121v3).

Coverage file re-run today: `node tools/coverage-checklist.mjs <batch-24 coverage> --require-destination` →
2 pages, 76 harvested results, 0 errors, 0 warnings; two `deferred` rows (owner-decision) and eleven
`out-of-scope` rows each with a written reason. Spot verification of the unfamiliar external claims against
the sources themselves: Fayers' author PDF really contains the ultra-tight multisets and Propositions 2.2/2.3
exactly as `lem-ultra-tight-multisets-admit-column-potentials` uses them
(webspace.maths.qmul.ac.uk/m.fayers/papers/core.pdf); Lyle–Mathas (Adv. Math. 216 (2007) 854–878) really
classifies the blocks of the cyclotomic Hecke algebras over an arbitrary field via Jantzen equivalence, with
the Jantzen coefficient of Definition 2.5 and the sum formula of Theorem 2.6 matching
`lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums` /
`thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations`, and its Theorem 2.11 (blocks =
combinatorial/residue-content classes) matching `thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-
connected`; Mathas arXiv:2106.15486 confirms the Gram-determinant/seminormal-basis and Jantzen machinery
cited by the Jantzen items. No source was claimed read beyond the recorded locators.

Observation (bookkeeping, not a scope omission): the coverage file's `sources` section still enumerates only
the pre-native24 harvest; the 33 helper items' sources are recorded in the manifest and in the
owner-native24 source-read records (`schur-proof-construction/source-read-record.json` etc.) but not as
coverage rows. Two old `out-of-scope` reasons (Murphy basis; cellular-algebra chapter) are also stale in
view of the natively built arbitrary-level cellular/Murphy items. Recommended (non-blocking): refresh the
batch-24 coverage sources/dispositions for the helper layer before source-backing gates run against it.

## 3. Prerequisites and unmet-prerequisite check

Page level: the five declared `requires` are exactly the design's supplier pages, all in this run's scaffold
and all earlier in reading order — `type-a-hecke-specht-modules-and-cellular-bases` (1569),
`cores-quotients-and-blocks-of-symmetric-groups` (1571), `quantum-affine-type-a-and-level-one-fock-space`
(1534), `klr-algebras-induction-and-quantum-serre-categorification` (1836),
`cyclotomic-klr-algebras-and-highest-weight-categorification` (1838), all < 1840.

Item level (all 247 declared dependency edges): 129 intra-pair; 45 to items of the five requires pages (all
inside the declared requires closure — checked explicitly, none outside); 73 to 38 published items, every
one with `status: published` in `items/`; 0 unresolved. All `[[…]]` references in statements/strategies
resolve to intra-pair, in-run scaffold or published items (0 unresolved). The 45 cross-batch edges are all
recorded in `...-batch-24.cross-batch-dependencies.json` (50 open / 31 verified rows; open = supplier
scaffolded, not yet authored). Consumer side: `...-batch-25.cross-batch-dependencies.json` carries 37 rows
from this page into the Ariki pair (35 open, 2 verified), none recording a missing clause, defect or hold;
the B page requires only the A page.

Read-only checks run for this review: `node tools/manifest-deps.mjs` on the batch file → 47 items, 0
normalized, 0 errors; `node tools/item-dependency-levels.mjs check --run …` → pass (run count advancing
concurrently; max level 47); `node tools/validate-plan.mjs research/plan-spec.json --run …` → exit 0, page
order acyclic and consistent, no item-level cycles/forward references/B-page dependencies/unresolved ids,
only informational `redundant-prereq` advisories; coverage checklist as in §2.

**Unmet prerequisites identified: none confirmed.** No consuming planned item of this pair lacks a supplier
that is absent from both the published library and the current scaffold. Stated uncertainties: (i) the
in-run suppliers are scaffold-ready but not yet authored, so later stages must re-check the supplier
statements at authoring time; (ii) the two `owner-decision` deferrals (e=0 branch, tower compatibility)
are recorded boundaries that do not block the finite-e consumers; (iii) proof-level adequacy of supplier
interfaces is outside this scope pass.

## 4. Intended role in the library

The pair is the symmetric-group track's cyclotomic-Hecke/KLR bridge pair (SYMR-11) and a direct supplier of
the Ariki categorification pair (batch 25, order 1842), which consumes `thm-brundan-kleshchev-blockwise-
hecke-klr-isomorphism`, `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`,
`def-affine-and-cyclotomic-type-a-hecke-algebras`, `def-residue-sequence-idempotents-and-cyclotomic-hecke-
blocks`, `def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras`,
`prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras`,
`def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules`,
`thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular`,
`lem-cyclotomic-hecke-algebra-basis-and-dimension` and
`lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage`; the B page supplies the worked
checks for the same interfaces. The native24 helper layer is the page's own local construction of the
cited structural facts (basis, primitivity, cellular/Murphy, Jantzen/block classification), consistent with
the run-wide rule that a complete sound local construction is the authorized alternative to unread or
defective primary proofs.

## 5. Honest uncertainties and observations (none blocking scope)

1. This is a scope pass only: no proof correctness was assessed and no item approvals or owner records were
   written.
2. Coverage-file refresh recommendation of §2 (helper sources and two stale dispositions).
3. The bridge theorem is stated over any field (stronger than the design's “algebraically closed” sentence);
   this is a strengthening and does not narrow the intended subject.
4. The e=0 (A_∞) and tower-compatibility deferrals are owner-visible and already on the `owner-decision`
   destination; if the owner later wants them, they need a new A_∞ prerequisite pair before order 1840.

## 6. Decision and next action

**`sufficient`** for the A page (receipt binds the A+B pair inventory above). No scaffold edits and no owner
action are required for scope. Next: Step 3b authoring of this pair may proceed under the engine's normal
transitions; the coverage-file refresh of §2 is recommended bookkeeping for the later source-backing gate.

Receipt: recorded via `tools/step3-decisions.mjs record-scope` for page
`cyclotomic-hecke-and-quiver-hecke-algebras`, decision `sufficient`, scope sha256
`addb47b9f0e25b50da648550ed4701813b069eba47171750c2cc9a4a54d6a530` (re-checked against the live manifests
after recording).
