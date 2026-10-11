# Batch 27 — `character-polynomials-fi-modules-and-representation-stability` (SYMR-14)

Run `frontier-44-special-representation-examples-28`, role beta, label batch-27, 2026-10-08.
Written files: `research/frontier-44-special-representation-examples-28-batch-27.pages.json`,
`…-batch-27.coverage.json`, `…-batch-27.cross-batch-dependencies.json`, this note, and the 27
`…-step1-<item>.json` readiness records. No published content, shared plan, engine state or verdict was
edited. The binding owner direction (`…-owner-authoring-direction.md`) and the design section
(`research/plan-symmetric-group-representations-track.md` L49 with the SYMR-14 inventory in
`research/symmetric-group-planning/proposed-inventory.md` §SYMR-14) were read in full before construction.

## Scope built

- A page `character-polynomials-fi-modules-and-representation-stability` (order 1584,
  `special-topics-in-representation-theory`): **23 new items** — 8 definitions, 6 lemmas,
  4 propositions, 2 theorems, 1 corollary, plus the padded-character-polynomial lemma and the
  character-polynomial definition. All 27 items (23 A + 4 B) are recorded `ready`; no item was escalated;
  no page split was needed (A page 23 items, B page 4 items, far below the 100-item cap).
- B page `character-polynomials-fi-modules-and-representation-stability-examples` (order 1585):
  **4 new items** (3 `example`, 1 `counterexample`), exactly the design's four, each a dependency leaf
  on the A page and published items.
- Dependency levels computed from the actual in-run graph with
  `tools/item-dependency-levels.mjs`; they run 0–9, maximum 9
  (`cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial`). No cycles.

## Design / plan comparison (conflicts recorded)

1. **No scope conflict.** `plan-spec.json` agrees with the batch task on both page ids, orders, titles,
   category, companion and `requires`; the design row agrees on the mathematical role ("functorial
   sequences and eventual characters"). The design's 17 A items and 4 B items are all preserved
   (`def-`×8, `lem-`×4, `prop-`×4, `thm-`×2, `cor-`×1 design ids plus the four B ids), and the design's
   conventions ("all representation-stability equivalences over a characteristic-zero field and
   finite-dimensional values"; the Noetherian theorem as a real proof component; the padding convention
   shared with SYMR-13) are carried verbatim.
2. **Design dependency lists corrected where inadequate** (route kept, suppliers added; no claim weakened):
   - `thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category`: the design's five deps omit
     the two joints its own printed route needs — the presentation of a bounded-degree module as a quotient
     of free modules (CEF Lemma 2.3.2 / Prop. 2.3.5; new `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules`)
     and the bounds `generated in degree ≤ d ⇒ surj-deg ≤ d` and `weight ≤ d` (CEF Prop. 3.1.8 / 3.2.5; new
     `lem-generation-degree-bounds-surjectivity-degree-and-weight`), together with `def-noetherian-ring`,
     `def-noetherian-module`, `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` and
     `def-restriction-and-extension-of-scalars` for the `Q`-restriction step. All are added.
   - `prop-weight-and-stability-degree-give-uniform-representation-stability-range` and
     `thm-finitely-generated-fi-modules-have-eventual-character-polynomials`: the design's routes use
     CEF Props. 3.2.8 (`λ_1 ≤ stab-deg(V)`; new `prop-specht-constituents-of-an-fi-module-have-bounded-first-row`)
     and Lemma 3.2.3 (branching; new `lem-branching-rule-for-specht-induction-and-coinvariants`), which were
     not in the design's dep lists; both are added.
   - `thm-finitely-generated-fi-modules-have-eventual-character-polynomials`: the classical input "each
     padded irreducible has a character polynomial" is isolated as the new
     `lem-padded-irreducible-characters-have-character-polynomials`, read from Macdonald Example I.7.14.
3. **`requires`-clause finding (resolved without a plan change).** The first draft of
   `lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields` (the local supplier for the
   characteristic-zero constituent convention) depended on `def-integral-specht-lattice-and-base-change`
   and `thm-james-submodule-theorem-over-an-arbitrary-field`, both published on
   `integral-specht-modules-and-modular-simple-modules` (order 1568), which is **not** in this page's
   declared `requires` closure. `validate-plan` reported exactly that as
   `[undeclared-prereq] page character-polynomials-fi-modules-and-representation-stability has an item
   depending on integral-specht-modules-and-modular-simple-modules … either add it or drop the
   dependency`. Adding the page to `requires` would have contradicted the plan; instead the lemma was
   restated with in-closure suppliers only: the field-uniform standard basis
   (`lem-integral-specht-garnir-straightening-and-field-basis`, homed on
   `the-branching-rule-and-the-young-graph`, in closure), the base-change isomorphism
   `C ⊗_F S^λ_F ≅ S^λ_C` built from the polytabloid definition, the published complex classification and
   distinctness, and a finite-dimensional `Hom` base-change step; completeness follows from the complex
   list. No plan, page-`requires` or scope change is required, and no mathematical claim was weakened.
   (For the record, the two integral-page items remain the strongest published treatments of the same
   material and are the natural suppliers if a future page needs absolute irreducibility; they are simply
   not needed by this page's statements.)
4. **First-row padding is shared with SYMR-13.** `def-first-row-padding-of-a-partition` is **homed on the
   batch-26 page**; this batch declares dependencies on it but mints no duplicate, per the design's
   convention warning. All seven cross-batch edges (six item-level plus the page-`requires` edge to
   `kronecker-coefficients-and-internal-products`) are recorded as `open` in the batch input because the
   batch-26 supplier items are scaffolded and recorded `ready` but not yet authored on disk.

## Sources (two independent treatments, one of them a book; all full texts fetch-verified)

- **Thomas Church, Jordan S. Ellenberg and Benson Farb, "FI-modules and stability for representations of
  symmetric groups"**, arXiv:1204.4533v4 (3 Nov 2014), published Duke Math. J. 164 (2015) 1833–1910,
  `https://arxiv.org/pdf/1204.4533`. Full 54-page PDF fetched and stamped (sha256_16 `1ff5dd9de3e3663d`);
  read in full in the extracted text at §1 (printed pp. 2–9), §2.1–2.3 (pp. 10–15) and §3.1–3.4 (pp. 16–25).
  Supports every FI-module item: Definitions 1.1–1.4, 2.1.1, 2.2.1–2.2.6, 2.3.1–2.3.7; Lemma 2.3.2;
  Propositions 2.3.5–2.3.6, 3.1.7–3.1.8, 3.2.4–3.2.6, 3.2.8, 3.3.3, 3.4.1; Lemma 3.2.3, 3.2.7;
  Theorems 1.3, 1.5, 1.13 and 3.3.4. The source's printed page numbers were used as locators (they match
  the design's).
- **I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed., Oxford Mathematical Monographs,
  1995**, `https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf`. Full 486-page book fetched and stamped
  (sha256_16 `64e242b84d1f3b78`); read at Chapter I §7, equations (7.7)–(7.9) (printed pp. 114–115) and
  Example I.7.14 (printed pp. 122–124). Supports the classical character-polynomial statement
  χ_{(N,λ)} = ⟨E·P, s_λ⟩ for N ≥ λ_1 with its degree bound, the padding convention, and the
  character-polynomial evaluation. This is the pair's book treatment.
- **Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, "FI-modules over Noetherian rings"**,
  Geom. Topol. 18 (2014) 2951–2984; author-hosted full text
  `https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf`. Full 31-page PDF fetched and stamped
  (sha256_16 `4cb6cebded25181d`); read at §1 (pp. 1–9: Theorems A–F, Corollary 1.4, Remarks 1.1–1.9) and
  §2.1–2.2 (pp. 9–16: Definitions 2.1–2.12, Lemma 2.5–2.6, Proposition 2.12, Corollary 2.13 and the
  shift-functor proof of Theorem A). It is the **independent second treatment of the Noetherian property**
  (arbitrary Noetherian rings, a different proof), corroborating CEF Theorem 1.3 and recorded as an
  alternative route in the theorem's strategy.

Coverage dispositions (59 harvested results across the two pages): every named result of the read ranges
is disposed — 31 `included`, 3 `inline`, 4 `already-published`, 2 `deferred` (CEF Prop. 3.2.2 weight of a
tensor product and Thm. 3.4.2 Murnaghan, both to `murnaghan-stability-via-fi-modules`), and 19
`out-of-scope` with specific reasons (the configuration-space/moduli/coinvariant applications, FI#-modules,
H0 and FI-homology, projective FI-modules, Schur functors, and the CEFN shift-functor machinery used only
as the alternative proof). No source was dropped; no alternative argument was needed; there are no
`source_resolution` records.

## Mathematical quality of the new items

- Every statement is the source's own claim with its hypotheses, direction and range made explicit:
  the exactness of Φ_a is stated only for `k ⊇ Q`; the Noetherian theorem keeps its "Noetherian ring
  containing Q" hypothesis and is **not** silently strengthened to arbitrary Noetherian rings (that is
  CEFN Theorem A, recorded as corroborating context); the character-polynomial theorem keeps
  finite-dimensional values; Prop. 3.4.1 keeps the threshold `|λ| + λ_1` and the boundary case
  λ = (2,1) at n = 5; the multiplicity clause (III) of uniform stability keeps the spanning condition.
- The character-polynomial lemma is scaffolded from Macdonald's complete computation: coefficient of
  s_λ in E·P evaluated at the cycle counts, with the x_0 = 1 homogeneity reduction removing the padding
  parameter; the degree bound |λ| is Macdonald's and is what CEF Theorem 3.3.4 imports.
- Axioms: no item uses AC/DC. `axiom_use` records this; one caveat is flagged for the authoring stage on
  the imported Hilbert basis theorem (see the published-defect note below).
- No Recorded result is consumed; no Foundations page is on any proof path; the run's
  `set-theory-boundary` check reports no finding for this page: the page does not reach
  `deferred-set-theory-beyond-choice`.

## Owner resolution of the Hilbert citation and FI coefficient-ring strategy

The flagged Hilbert citation is now a recorded local published repair: thm-hilbert-basis-theorem uses its actual [L3]/step3.1 choice-free implication, finite ideal generation => Noetherian. Its Statement, dependencies and the entire thm-noetherian-ring-ideal-characterisations supplier are unchanged. The stage-ideal finite-generation lemma uses only Noetherian => FG => ACC and finitely many selections; no DC-dependent ACC => maximal-condition converse is imported. Exact preimages, ownership claim, canonical ledger entry and successful local precheck/render/proof-layout are bound by the owner-hilbert-local-published-repair.json receipt. This is local repair evidence, not an independent audit.

A separate actual scaffold defect was corrected in dependency order: arbitrary Noetherian Q-algebras (e.g. Q x Q) need not embed into C. Classification now starts with rational Specht matrices, uses finite rational Hom-kernel ranks and the finite regular representation, and extends from Q to an arbitrary characteristic-zero field. The weight Definition names k tensor_Q S_Q, not extension from C. Bounded-generation and vanishing-detection strategies handle infinite-dimensional rational restrictions through finite-dimensional orbit spans and finite-group averaging, avoiding infinite bases and global choice. The FI Noetherian theorem follows CEF's actual restriction-of-scalars proof: free FI presentations and coinvariant spans commute with restriction Q -> k, so bounded rational weight detects zero. Its arbitrary commutative Noetherian Q-algebra Statement is unchanged. The finite graded-module generators include degrees 0 through a, fixing the a=0 boundary.

Direct-consumer review also corrected the tail/full-diagram ambiguity: the stability-degree bound is lambda_1<=s for the padding tail, equivalently the full Specht diagram's SECOND row is bounded. Its proof now separates m<=s from m>=s+1 and uses horizontal-strip interlacing nu_2<=mu_1. Stability-range and character-polynomial consumers already use the correct tail bound; their Statements are unchanged. The padded irreducible FI-family strategy uses injections from ranks p>=d, complement invariance and the intersection of two Pieri/interlacing conditions; it does not use the zero space at rank |lambda| to establish sub-FI stability. Its Statement is unchanged. Exact original Definition/Statement wording and current direct mappings are in owner-batch27-proposed-closure.json.

Actual source review: CEF full PDF cache SHA-256 1ff5dd9de3e3663dfa8ceec86e69c1b97448d02630981b22587994be48746e96; complete Theorem1.3 proof pp20–21, constituent/branching/weight arguments pp18–20, and Proposition3.4.1 proof pp24–25 inspected. CEFN full 31-page author-hosted PDF retrieved to /tmp/frontier44-cefn-noetherian.pdf, SHA-256 4cb6cebded25181dd068dee57a3c976bb33ba84d6eb29317f46a595f6971586f; TheoremA and complete shift proof pp14–17 plus final end matter inspected. CEFN corroborates the broader arbitrary-ring theorem; its shift route is not silently substituted into this approved characteristic-zero proof route.

Native batch27 manifest/notes and published preimages are preserved in owner-hilbert-repair-evidence/. Current readiness is not yet refreshed. Active batch28 is untouched; its prospective uses of the corrected weight/classification/padded-family interfaces require actual consumer review after its native writer drains, before any affected batch28 certification.

## Checks actually run (commands and results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  → exit 1 with 38 errors, **all** `empty scaffold inventory` for batches not yet scaffolded; none for a
  batch-27 item, and no label, shape or cycle error anywhere in the run. My 27 labels match the computed
  levels (max 9).
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28`
  → exit 1 run-wide (other batches' items have no readiness records yet); after a refresh pass following
  the item-5 restatement and concurrent manifest writes, **all 27 batch-27 items are current**
  ("my stale: []").
- `node tools/coverage-checklist.mjs research/frontier-44-…-batch-27.coverage.json --require-destination`
  → `2 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs …-batch-27.pages.json` → `27 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only …-batch-26.pages.json …-batch-27.pages.json`
  → `42 scoped item(s), 0 error(s), 0 warning(s)` (run together so the cross-batch padding deps resolve
  as planned content).
- `node tools/source-fetch-check.mjs --coverage …-batch-27.coverage.json --stamp`
  → `5/5 source(s) fetch-verified (5 newly stamped)`; check mode `5/5 source(s) fetch-verified`,
  `5/5 source(s) resolved (0 documented drops)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  → during construction an intermediate run reported `[undeclared-prereq]` errors, two of them on another
  in-flight page (`type-a-hecke-specht-modules-and-cellular-bases`) and one on this page (the item-5
  dependency described above, since repaired in-batch). The **final** run is `exit 0`:
  "OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 18 page(s) with item lists", with only advisory
  `redundant-prereq` warnings and the note that 38 planned pages still have no item list. No finding names
  a batch-27 page or item.
- Not run here: `url-sweep`/`source-backing`/`frontier-dependency-ledger refresh` need shared run-owned
  artifacts and are the engine's Step-1 gates; the 7-row cross-batch input is supplied so the ledger can
  be refreshed once the other batch inputs land. `extcheck`/`fwdcheck` resolve their subjects through
  authored item files and are run after Step 3 by the engine; at suite time the manifest-only policy pass
  covers the retired external-record fields that are visible at this boundary.

## Open items for the engine / next roles

- The 6 item-level and 1 page-level cross-batch edges are `open` with exact interfaces and proof uses;
  they close when batch-26's item files are authored and reviewed.
- The `requires`-clause finding from item 5 was resolved inside this batch (no plan change), so no
  adjudication is required for this page; that is recorded here in case the same published supplier is
  wanted by a later page in this run.
- Step-3 authors must confirm the Hilbert-basis/DC citation caveat recorded above when writing the
  Noetherian theorem's full proof.
