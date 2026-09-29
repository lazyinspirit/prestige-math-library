# frontier-36-complete, batch 23 — Step 1 scaffold notes

The owned pair is `hochschild-homology-and-diagonal-koszul-resolutions` (A,
order 725) and its examples page (B, order 726). The manifest has 14 A items
and four B examples. All 18 have current `ready` records written through
`tools/step1-decisions.mjs`, with examined dependency IDs and source/proof
evidence. Readiness is a scaffold assessment, not independent mathematical
approval or publication. No item files, published content, shared plans,
engine state, or verdicts were edited.

## Instructions and plan reconciliation

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated
batch-23 task, `briefs/beta-scaffold.md`, the binding
`frontier-36-complete-owner-authoring-direction.md`, the complete HA-22 design
section in `research/plan-homological-algebra-track.md` (lines 5175–5221),
the current `research/plan-spec.json` entries, the assigned batch manifest,
the run planning/scope/drift evidence, and the relevant published supplier
statements and proofs before construction. The owner direction does not amend
this pair. The plan and design agree on the A/B IDs, category, title, reciprocal
companions, and page prerequisites; the plan's item arrays were empty as
expected for Step 1. There is **no plan-versus-design conflict** for this pair.

The design's 22.5 row says the Hochschild boundary is justified by the later
22.6 bar comparison. To avoid a forward well-definedness proof, 22.5's
strategy proves the cyclic face identities and `b²=0` directly; 22.6 then
proves the bar-tensor identification. This preserves every designed result.
No extra A claim or B example was needed, and the 100-item A-page cap is not
approached.

## Mathematical and dependency audit

The chosen contract is ordinary Hochschild homology for unital associative
algebras over a **field**. `def-enveloping-algebra-and-bimodule-module-dictionary`
declares the published opposite-ring and tensor-product-algebra suppliers and
checks `(a⊗bᵒᵖ)(c⊗dᵒᵖ)=ac⊗(db)ᵒᵖ`. The right `A^e` action on the bar term is
`z(c⊗dᵒᵖ)=dzc`; the explicit right-free model maps
`(a₁⊗⋯⊗aₙ)⊗(a⊗bᵒᵖ)` to `b⊗a₁⊗⋯⊗aₙ⊗a`. The corresponding bar-tensor map to
Hochschild chains sends `(a₀⊗⋯⊗aₙ₊₁)⊗m` to
`(aₙ₊₁ m a₀)⊗a₁⊗⋯⊗aₙ`. Its balancing and the two end faces are explicit in
the strategies, so neither handedness nor cyclic signs are inferred from page
membership.

The regular-diagonal route uses the published finite Koszul differential,
regular-sequence definition, acyclicity theorem, basic `H₀` computation, and
exterior basis lemma. Successive substitution `x_i=y_i` leaves a polynomial
ring; each next difference is monic in a remaining variable and hence a
non-zero-divisor. The final quotient is `R`, including the empty `n=0` case.
The polynomial coefficient differential is contraction by
`x_i m−m x_i`; the two-variable example verifies its mixed-sign cancellation.
The graded statements use the published shift `M{r}_d=M_{d-r}` and distinguish
homological from internal degree. Graded comparison in 22.13 is an explicit
homogeneous-basis lifting argument, not an inference from the ungraded
comparison theorem alone.

AC is stated in the contracts for the general bar-projectivity theorem
(`thm-two-sided-bar-complex-is-an-enveloping-projective-resolution`), its Tor
identification, coefficient long exact sequence, polynomial comparison and
its diagonal corollary. The first use chooses a basis of the possibly infinite
vector space `A` and invokes projectivity of an arbitrary free `A^e`-module;
the long exact sequence uses a basis to justify exact tensoring over `k`.
The Tor and resolution-comparison steps also need DC, supplied by the
published `thm-choice-implies-dependent-implies-countable-choice` under the
declared AC. The finite free diagonal Koszul resolution and the direct
ground-field calculation do not use AC. No choice-free branch was silently
promoted to an arbitrary-index choice claim.

The published interfaces actually used were inspected, including
`def-opposite-ring`, `thm-tensor-product-of-algebras-over-a-commutative-ring`,
`cor-every-vector-space-has-a-basis`,
`thm-free-modules-are-projective-with-choice-boundary`,
`def-balanced-tor-bifunctor` (which assumes DC and supplied resolutions),
`thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object`,
`thm-chain-homotopic-maps-induce-the-same-map-on-homology`,
`thm-long-exact-sequence-in-homology`,
`thm-naturality-of-the-homology-connecting-morphism`,
`thm-regular-sequences-give-acyclic-koszul-complexes`, and their named
Koszul, tensor and grading definitions. The stated hypotheses and module
directions match each owned use. The final audit added direct dependency IDs
for the enveloping-algebra construction and for homology-map, connecting-map,
and homotopy invariance uses; affected Step 1 records were refreshed after
those edits.

An item-level traversal from all 18 roots reaches 497 IDs: 18 owned and 479
published. It found zero missing IDs, cycles, nonpublished external suppliers,
or `proved_here: false` / Recorded results. All 30 distinct direct external
IDs have published homes before order 725. The 24 reached `justified_by`
backlinks resolve to published items that depend back on their definitions;
none creates a missing well-definedness supplier. The B examples are local
leaves. No cross-batch item or page edge arises from this pair, so the owned
consumer-batch input is `[]`; a read-only `collect` of the dependency ledger
found zero batch-23 edges. The shared unified ledger was not rewritten because
this dispatch permits writes only to consumer-batch inputs.

No defect was found in the directly used published statements or proofs examined for this
pair. Thus there is no published-defect entry to route to the canonical ledger.
No new prerequisite pair, page split, or cross-batch amendment is requested.

## Full-text sources and harvested scope

Both source URLs were retrieved with `source-fetch-check --stamp`; the bytes
match the locally inspected complete PDFs in
`scratchpad/source-cache/homological-algebra-enrichment/`. The coverage file
retains one successful retrieval attempt per URL and no source drop.

| Source | Exact inspected range and use |
|---|---|
| [Weibel, *An Introduction to Homological Algebra*, Ch. 9](https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf) | §9.1.1–9.1.6 and Exercises 9.1.1–9.1.4, printed pp.300–304 / PDF pp.1–5. The Hochschild faces, bar/Tor comparison, coefficient sequence and polynomial regular-diagonal exercise support 22.1–22.14. The exercise's missing polynomial proof is supplied explicitly in 22.11–22.13. Full PDF SHA-256 begins `5bf5c0971806b0ba`. |
| [Khovanov, *Triply-graded link homology and Hochschild homology of Soergel bimodules*](https://arxiv.org/pdf/math/0510265) | “Hochschild homology,” article/PDF pp.1–3, ending before “Soergel bimodules.” Independent coinvariant/Tor and polynomial Koszul coefficient/sign treatment; supports 22.7–22.14 and the B calculations. Its bar and Koszul assertions are checked against the local proofs rather than adopted as proof of exactness. Full PDF SHA-256 begins `548a0eece08bd967`. |

Coverage records 18 canonical included claims and 21 source-heading dispositions:
ten included, four inline, seven out of scope with item-specific reasons.
Those out-of-scope headings are Hochschild cohomology, group-ring homology,
the general tensor-algebra and truncated-polynomial resolutions; none supplies
an owned claim. No harvested result was silently dropped or deferred to a
nonexistent page.

## Checks and remaining run state

| Check | Actual result |
|---|---|
| Owned coverage checklist with `--require-destination` | Exit 0; one A page, 39 rows, zero errors/warnings. |
| Source fetch/check | Exit 0; 2/2 complete PDFs stamped and verified, zero drops. |
| Whole-run manifest dependencies | Exit 0 on final rerun; 438 items, no missing `deps`. Other workers were adding inventories concurrently. |
| Whole-run content policy, manifest-only | Exit 0 on final rerun; 438 scoped items, zero errors/warnings. |
| Plan validator | Exit 0; declared page order acyclic and no item-level unresolved ID in the currently populated plan pages. Empty future page inventories remain a stated plan limitation. |
| External-reference checker | Exit 0 with 43 warnings concerning unrelated published Recorded-result references; no owned dependency reaches one. |
| Run scope integrity | Exit 0; all 58 owed pages present. |
| Owned dependency levels | 18 items, maximum level 8, no missing/stale labels or cycles. |
| Whole-run dependency-level check | Exit 1 solely because 24 other A/B page inventories were still empty at final rerun; no batch-23 label error appeared. Rerun after the other suppliers are scaffolded. |
| Owned Step 1 currency | 18/18 current `ready` records, zero open owned items. |

The live run's `1-drift` gate also remained owner-held on the separate
scheme-theory findings recorded in `frontier-36-complete-step1-blockers.json`.
Neither that gate nor the later Step 3 mathematical review is cleared by this
batch's worker exit or readiness records.
