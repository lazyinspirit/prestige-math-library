# Batch 30 Step 1 notes — Weak Derivatives and Sobolev Spaces

Run `frontier-36-complete`; role beta; A page `weak-derivatives-and-sobolev-spaces` at order 458.019 and B page `weak-derivatives-and-sobolev-spaces-examples`. Before construction I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned batch task, the current manifest and plan, the full PDE-11 design in `research/plan-pde-track.md` at lines 1288–1357, current batch evidence, and `research/frontier-36-complete-owner-authoring-direction.md`. The owner direction is binding. Its removal of the old wave-energy edge is already reflected in the current plan and design clarification: PDE-10 is not a proof premise. The design's introductory MT/FA shorthand is broader than the exact six published page prerequisites in `research/plan-spec.json`; its next paragraph expressly delegates this frontier's direct requires list to that plan. I found no unresolved design-versus-current-plan conflict. The pair's order, selected pages, and requires list were not changed.

## Inventory and construction

The first pass followed the 19 A and seven B base-design rows listed below. After Step-3a, the owner applied all nine A and four B rows in the authoritative §12.5 PDE-11 overlay to this same pair. The inventory is now 28 A and 11 B items, below the 100-item page cap. The overlay exposes dual-exponent integration, full-gradient closedness, the Lipschitz chain rule, lattice/pasting operations and four sharp examples. The overlay's original single-coordinate claim that $D_i$ on domain $W^{1,p}$ is closed was false in dimensions above one: convergence of one derivative does not control the others. The corrected plan and scaffold state closedness of the full gradient on $W^{1,p}$ and each partial derivative on its own maximal domain. This is a mathematical correction, not a dropped row. Current Step-1 receipts need recertification after the owner edit.

The A inventory has exactly the 19 designed items, in prerequisite order:

1. `def-locally-integrable-function-as-a-regular-distribution`
2. `def-weak-derivative-of-a-locally-integrable-function`
3. `lem-weak-derivative-is-independent-of-lp-representatives`
4. `lem-weak-derivatives-are-unique-almost-everywhere`
5. `lem-classical-derivatives-are-weak-derivatives`
6. `lem-weak-derivative-linearity-locality-and-commutation`
7. `lem-weak-leibniz-rule-with-a-smooth-factor`
8. `def-sobolev-space-wkp-and-its-norm`
9. `lem-sobolev-norm-is-well-defined-and-definite`
10. `thm-sobolev-spaces-are-banach-spaces`
11. `def-hk-and-hk-zero-notation`
12. `thm-hk-is-a-hilbert-space`
13. `lem-weak-stability-of-sobolev-derivatives`
14. `def-absolute-continuity-on-almost-every-coordinate-line`
15. `thm-acl-characterisation-of-w-one-p`
16. `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`
17. `thm-sobolev-chain-rule-for-c-one-lipschitz-compositions`
18. `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`
19. `rem-weak-derivatives-are-distributional-derivatives-with-function-values`

The B inventory has exactly the seven designed items: `ex-absolute-value-has-a-weak-first-derivative`, `cex-step-function-has-no-locally-integrable-weak-derivative`, `ex-radial-power-membership-in-w-one-p`, `ex-piecewise-c-one-functions-with-matching-traces`, `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`, `cex-lp-functions-need-not-have-point-values`, and `ex-sobolev-truncations-preserve-zero-regions`.

No extra pair or page split is needed. The first-pass items were added once in prerequisite order and immediately received `ready` outcomes through `step1-decisions.mjs record`; no existing ready item or owner-held escalation was overwritten. A final axiom audit made Countable Choice explicit in the weak-derivative, W^(k,p), and H^k contracts and as a direct dependency of the absolute-value example. The 25 first-pass records affected through the transitive hash were refreshed in prerequisite order; the unchanged first definition and its ready record were preserved. Every current item has an explicit `deps` array and computed `dependency_level`. Whole-run recomputation after the overlay checks 918 labels with zero errors and maximum level 18. These are construction outcomes, not Step 3 approval.

## Mathematical dependency and proof audit

The 33 distinct direct out-of-batch item suppliers are published. I read their needed statements and proof interfaces, including FA-24's regular-distribution injection, signed derivative, smooth-factor Leibniz and convolution identities; completed-product Fubini; local cutoffs and the L¹ approximate identity; Lp quotient, Hölder, Minkowski and completeness; the one-dimensional AC FTC and integration by parts; polar coordinates; and null-set and integral-absolute-continuity results. A transitive `deps` walk from the 26 assigned items reaches 1,046 published items and no missing or unpublished supplier, dependency cycle, Recorded result, or `deferred-set-theory-beyond-choice`. None of the 43 published consumers flagged by `extcheck` lies in this proof closure. A naive single-page map reported forward references among rational-number definitions because `construction-of-r-via-cauchy-sequences` and `construction-of-r-via-dedekind-cuts` both list the same published rational items. Reading their page manifests and item files showed those definitions on the earlier page and their actual item dependencies in the correct direction. This is dual page membership, not a proof or order defect.

Representative independence and regular-distribution injectivity precede the W^(k,p) definition and norm. Completeness passes the weak integration-by-parts identity through componentwise Lp limits, including p=∞ and k=0. H^k has the first-variable-linear complex L² pairing and exactly the W^(k,2) norm. The ACL proof works on one countable rational-box basis, uses local W^(1,1) convergence of mollifications, chooses one summable diagonal subsequence, applies completed-product Fubini on all coordinate directions, and glues one measurable representative; its converse integrates by parts on almost every good line. The chain rule uses that representative and one-dimensional AC calculus. Smooth one-sided approximants prove the corner rules; the derived identity D_i u=0 a.e. on {u=0} handles clipping level sets even on infinite-measure domains. The B radial power uses the sharp condition p(a+1)<n and a cutoff error O(ε^(n−1−a)); the piecewise trace claim is restricted to a flat coordinate hyperplane with matching C¹ traces.

Countable Choice is declared where the published regular-distribution injection, Lp and product-measure interfaces require it. Full AC is declared and directly depended on for the Banach and Hilbert conclusions, ACL construction, its one-dimensional consequence, chain/truncation calculus, and the truncation example; those strategies identify the particular choice-bearing interfaces. Purely algebraic/distributional definitions do not silently import AC. No choice-free or incompatible-axiom branch was changed. I found no defective published *actual prerequisite* that requires a canonical-ledger repair entry. The unrelated published `extcheck` warnings do not block this new supplier.

## Sources and dispositions

I fetched the complete PDFs, inspected the relevant full arguments, and stamped all five per-page source entries with `source-fetch-check --stamp`:

- [Kinnunen, *Sobolev Spaces* (2026)](https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf), Chapter 1 §§1.1–1.4 and Chapter 2 §§2.1–2.2, 2.6, especially Definitions 1.2 and 1.8, Theorem 1.15, and Theorem 2.36 (printed pp. 1–13, 27–31, 54–59); 168-page full PDF.
- [Hunter, *Notes on Partial Differential Equations* (2014)](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), Chapter 3 §§3.1–3.2 and 3.4–3.5, especially Propositions 3.16–3.17, Theorems 3.19–3.20 and Definition 3.23 (printed pp. 47–59); 242-page full PDF.
- [Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations* (2011)](https://www.math.utoronto.ca/almut/Brezis.pdf), Chapter 8 §8.2, Proposition 8.1, Lemmas 8.1–8.2 and Theorem 8.2 (printed pp. 202–206); 614-page full textbook.

Kinnunen and Hunter are independent full lecture-note treatments, and Brezis is a separate book treatment. The coverage file now records exact supported item IDs and dispositions for 39 canonical items plus 48 harvested rows, 87 total, with zero checklist errors or warnings. No source retrieval failed, so no recovery, drop, or source escalation was used. During first-pass inspection I corrected the Kinnunen locator: Example 1.7 is a continuous piecewise corner; Hunter Example 3.4 and Brezis §8.2 Examples (ii) support the step obstruction. The owner additionally inspected Kinnunen Remarks 2.2, Theorem 2.36, Examples 2.35 and Examples 1.11–1.12 for the overlay chain, ACL, Cantor and point-evaluation rows. The original source history and genuine fetch stamps remain in coverage.

## Cross-batch consumer finding

This A/B pair consumes only published out-of-batch suppliers; its owned consumer-batch input `research/frontier-36-complete-batch-30.cross-batch-dependencies.json` is `[]`, and the unified dependency ledger was refreshed according to `briefs/tasks/frontier-dependency-ledger.md`. The existing batch-13 page edge `fourier-multipliers-and-sobolev-characterisations` → `weak-derivatives-and-sobolev-spaces` is open and correctly places the PDE-11 supplier at 458.019 before the Fourier A page at 458.02601. Its evidence text still says the batch-30 manifest is empty; batch 13 owns that input.

The batch-13 draft `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` explicitly names four PDE-11 claims in its proof strategy but omits them from `deps`: `def-sobolev-space-wkp-and-its-norm`, `lem-weak-derivative-is-independent-of-lp-representatives`, `lem-weak-derivatives-are-unique-almost-everywhere`, and `lem-sobolev-norm-is-well-defined-and-definite`. The required chain is: Lp a.e. representatives and regular distributions → unique weak derivatives → W^(k,2) equivalence-class definition and definite norm → batch-13 polynomial Fourier-multiplier lemma plus Plancherel and the batch-12 weighted-tempered-distribution characterization → integer-order norm comparison. Kinnunen §§1.1–1.4, Hunter §§3.1–3.5 and Brezis §8.2 support the supplier; batch 13 lists Dyatlov §12.1.1 and Melrose Chapter 3 §4 for the Fourier comparison. The batch-13 owner should add these exact item edges to its consumer manifest/input and update the stale page-row evidence when reconciling. Its owner-held Step 1 escalation must remain in force until the supplier is authored and mathematically reviewed. This finding does not require a new selected pair or a change to the separate Bessel-completion page.

## Checks and unresolved run state

- Owned coverage after the overlay: 2 pages, 87 canonical/harvested results, 0 errors, 0 warnings. Owned source check: 5/5 full-text fetch verified and resolved, 0 drops.
- Whole-run manifest dependencies: pass (621 items in the final concurrent snapshot, zero errors); manifest-only content policy: pass (621 scoped items, zero errors or warnings).
- Plan validator: exit 0, declared page order and populated item lists consistent; 379 other planned pages still lack item lists. External-reference check: exit 0, with 43 pre-existing published Recorded-reliance warning consumers outside this pair's proof closure.
- `item-dependency-levels.mjs check --run frontier-36-complete`: exit 1 because 12 inventories in other batches were empty at that snapshot; it reported no incorrect label or cycle. The assigned two-page recomputation passes.
- Whole-run `step1-decisions.mjs check`: exit 1; the latest concurrent snapshot had 621 current items, 607 ready, and 26 work entries including 12 empty page inventories and the owner-held Fourier escalation. No batch-30 item appears in its work list.

The owner/operator must reconcile the run, and Step 3 supplies independent mathematical review. No published content, shared plan, engine state, or verdict was authored for this batch.
