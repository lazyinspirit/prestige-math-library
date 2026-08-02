# Wave 0 · real-analysis · dedekind — A3 orchestrator adjudication

Date: 2026-08-02. Every load-bearing claim below was verified from disk before
the decision (fact texts, `deps` lists, target Definitions/Statements, page
`items:` order). Decision priority per AUDIT-WORKFLOW A3: mathematical
accuracy and citation precision are non-negotiable; then minimize
AI-generated load-bearing surface; then preserve richness.

## Provenance retags — APPROVED (all 17)

Ledger validated: 9 `literature-derived`/`exact-source`, 8
`ai-altered`/`semantic-source`, all URL-backed, zero `established-knowledge`
(no Alpha concurrence needed), zero `ai-generated` statements (zero genrisk
seeds). D5 is a no-op (no legacy `authorship` lines). Apply at A4: write both
`provenance` components, add the ledger's cut-specific URLs to
`sources.references`, per §9 a pure retag does not delete
`verification.judge` or the audit stamp.

## Repairs

| id | decision | rationale |
|---|---|---|
| D1 `thm-reals-dedekind-field` [L6] | **APPROVED** (fact split [L6]/[L11], add `def-cut-order` + `def-dedekind-cut` to `deps`, redistribute tags at the six citing steps) | Verified: `lem-cut-order-total` states only reflexive/antisymmetric/transitive/total — nothing about `0^{*}` or positivity; those are `def-cut-order`'s (its Remark: positive iff contains 0). Mis-attributed load-bearing citation, the dominant defect class. The positivity notion genuinely belongs to `def-cut-order`, so the deps route is right, not the inline-derivation route. |
| D2 `lem-rat-cut-embeds` [L1] | **APPROVED** (add `[[def-dedekind-cut]]` to [L1] and `deps`; keep `def-real-dedekind` for membership) | Verified: (C2)/(C3) content and the separation property live in `def-dedekind-cut` (separation in its Remarks); `def-real-dedekind` only points there. Citation precision is non-negotiable; the fix is the smallest faithful one. |
| D3 `lem-cut-archimedean` [L1] | **APPROVED** (same as D2) | Same verification: (C1) and separation are `def-dedekind-cut`'s. |
| D4 `lem-cut-additive-inverse` [A2] | **APPROVED** (restate [A2] citing `[[thm-well-ordering-principle]]` with the one-line ℤ→ℕ reduction; add to `deps`) | Verified: [A2] asserts ℤ well-ordering uncited; the library proves the ℕ least-element form. Reduction checked: K ⊆ ℤ nonempty, bounded above by M ⇒ {M−k : k ∈ K} ⊆ ℕ nonempty; least element M−n gives greatest n ∈ K. |
| D5 `lem-cut-reciprocal` [L6] | **APPROVED** (link `[[thm-well-ordering-principle]]`, add to `deps`) | Verified: [L6] is verbatim the library's theorem, uncited. |
| D7 `lem-cut-order-total` [A2] | **APPROVED** (link `[[thm-rat-ordered-field]]`, add to `deps`) | Same class as D4/D5: a library-proved fact asserted without citation, used at step 3.1. Approved for consistency with D4/D5; cost is trivial since A7 judges every wave-0 item regardless. |
| D6 `lem-cut-reciprocal` [L5] (Bernoulli) | **DEFERRED to Alpha (A6)** | True claim, elementary induction, currently folded into a fact. Whether to restate as an explicit inline derivation is a debatable-restatement call — Alpha is the R1 adjudicator. |
| D8 `ex-sqrt2-cut` title "is √2" | **DEFERRED to Alpha (A6), with recommendation to retitle** | The Verification proves cut-ness and irrationality, never `S·S = 2^{*}`; the library defines no square root, so the title asserts an identity not formulable in-library — the "title asserting more than the proof gives" pattern is fatal-class in the step-6 charter, and the judge cannot see titles. Mitigation (sources name it identically, a posteriori) is real; Alpha adjudicates. Minimal retitle drafted by Beta is inside R1. |
| D9 page reading order | **OWNER QUEUE (A10)** | Verified: page lists `thm-reals-dedekind-field` before `lem-rat-cut-embeds`, which it cites at step 1.4. Swap verified safe by Beta (no cycle; all five deps of the lemma precede the theorem). Reading-order changes are owner-only. |
| D10 sources hygiene | **PARTIALLY APPROVED** | Adding the ledger's cut-specific URLs at A4: approved (part of the retag). Dropping the inapposite Tao *Analysis I* reference and the about-the-book Rudin URL: deferred to Alpha (reference-list curation is Alpha's call under R1). |

## A4 authorization

The dedekind Beta is authorized to apply the approved items under §9: dedicated
touch snapshot BEFORE the first edit
(`node tools/touchlog.mjs snap research/audit/wave0-touches.json pre-A4-dedekind`),
smallest corrections only, no id/reading-order changes, `reflow` + `precheck`
on every changed proof item, delete stale `verification.judge` and the obsolete
`audited` stamp on the MATERIAL repairs (D1–D5, D7 — fact text changes); the
pure retags on untouched items keep their stamps. Record every applied repair
in the findings file with old text / new text / class. `impact-audit` closure
for the `deps` additions runs at wave level from the wave0 baseline (A6, Alpha
dispositions).
