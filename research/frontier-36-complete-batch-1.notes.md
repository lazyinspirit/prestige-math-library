# Frontier 36 complete — batch 1 Step 1 notes

**Owner:** beta, batch 1. **Pair:** `fredholm-determinants-and-the-lidskii-trace-formula` / `fredholm-determinants-and-the-lidskii-trace-formula-examples` at 288.0801 / 288.0802. This file records scaffold decisions and evidence, not Step 3 mathematical approval.

## Scope, plan, and design

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the design at `research/plan-functional-analysis-track.md` §14.5 (lines 3297–3340), the current `research/plan-spec.json`, and the owner authoring direction before construction. The owner direction concerns scheme-theory and algebraic-geometry batches and does not change this pair. The plan's order, title, category, companion, and four A-page prerequisites agree with the design; its A/B item lists are empty pending this scaffold. There is no metadata conflict.

There is an **item-placement conflict in the design's step 10**: it directs an upgrade of the already published `thm-lidskii-for-trace-class-operators` inside this A-page construction, while the current plan retains that stable item on the published `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` page. Step 1 may write only the assigned scaffold and cannot edit that published item. I therefore scaffolded local suppliers and record the exact owner repair below; I did not duplicate the determinant definition or Lidskii theorem.

The design names Kostenko's exterior-power, determinant, zero, and Lidskii route. Its final Hadamard factorization step would require `thm-hadamard-factorization-for-finite-order-entire-functions` on the published `infinite-products-and-weierstrass-factorisation` page at order 337, forward of this pair at 288.0801. The local route keeps the exterior-power, Weyl, determinant, growth, multiplicativity, and zero analysis, then proves the needed zero-free minimal-type conclusion by an elementary entire-log disk estimate. It obtains Lidskii from the invariant quotient and determinant spectral product from trace powers. This route avoids that forward proof dependency and the invalid assertion that an arbitrary invariant span reduces an operator. The owner should examine this deliberate factorization-step substitution during Step 3.

## Inventory and mathematical dependency audit

The A scaffold contains 12 items, in prerequisite order: `def-algebraic-multiplicity-for-compact-operators`, `lem-finite-rank-compressions-converge-in-trace-norm`, `def-hilbert-exterior-power-and-induced-operator`, `lem-trace-norm-of-hilbert-exterior-powers`, `lem-weyl-eigenvalue-singular-value-inequalities`, `lem-separable-trace-class-determinant-construction`, `lem-fredholm-determinant-trace-norm-continuity-and-growth`, `lem-fredholm-determinant-logarithmic-derivative`, `lem-fredholm-determinant-zeros-and-algebraic-multiplicities`, `lem-quasinilpotent-trace-class-operator-has-zero-trace`, `lem-generalized-eigenspace-trace-decomposition`, and `lem-fredholm-determinant-spectral-product-from-power-traces`. The B scaffold contains the four designed examples/counterexample IDs. Every manifest item has an explicit `deps` array and `dependency_level`; levels range from 0 to 8 and count only in-run predecessors. Each item received a Step 1 decision before the next item was built. Later proof clarifications were rerecorded in dependency order. There are 15 current `ready` decisions and one `escalated` decision, specified below.

The local proof chain is: finite-rank trace-norm approximation and exterior-power trace bounds construct the separable determinant; Weyl's inequality gives absolute eigenvalue summability; trace-norm continuity identifies the exterior series with the approximation-independent finite-rank limit; multiplicativity, the logarithmic derivative, and the Riesz spectral splitting give zeros with exact algebraic multiplicity. A zero-free determinant of minimal exponential type has constant entire logarithm by the disk real-part estimate, so a quasinilpotent trace-class operator has zero trace. For the closed span `M` of nonzero generalized eigenspaces, `M` is invariant but need not be reducing. Riesz–Schauder splitting and the compact Fredholm alternative show that the induced operator on `H/M`, represented by the compression to `M⊥`, is quasinilpotent. Trace diagonal sums along adapted finite-dimensional invariant flags yield the eigenvalue sum on `M`; the quotient/compression trace is zero. Finally, the logarithmic derivative and the trace formula for every power `T^n` identify the determinant with its absolutely convergent eigenvalue product near zero and then everywhere by the identity theorem. The zero-space and empty-list cases are stated in the relevant items.

I inspected the statements and proofs of the published suppliers actually used, including `thm-riesz-schauder-spectrum-of-a-compact-operator`, `lem-riesz-schauder-ascent-and-descent-stabilize`, `thm-riesz-spectral-projection-properties`, `thm-fredholm-alternative-for-identity-minus-compact`, `prop-induced-quotient-operator-is-well-defined`, `thm-singular-value-decomposition-for-compact-operators`, `lem-nuclear-series-characterizes-trace-norm`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent`, `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`, and the Hilbert–Schmidt product/kernel and Euclidean `L²` density suppliers. The manifest's direct dependencies include the needed well-definedness, compactness, spectral-splitting, trace, analytic, separability, and determinant inputs. The local ready items do not use `rem-external-separable-trace-class-fredholm-determinant-theorem` or the published Lidskii theorem in their proof paths. AC or Countable Choice is declared item by item where inherited from Riesz–Schauder, SVD, trace-class, basis, or separable-support arguments; the finite matrix counterexample remains choice-free. No new prerequisite pair or cross-batch consumer edge was needed; the owned consumer-batch input is `[]`, and the frontier dependency ledger was mechanically refreshed.

## Source evidence and dispositions

All three source bodies were fetched and inspected as full PDFs, then stamped by `source-fetch-check --stamp` on 2026-09-27. Each succeeded on its first attempt; there was no source drop or retry sequence. The coverage file records all 34 harvested results with included/inline item IDs or specific out-of-scope reasons.

| Treatment | Exact inspected locator | Main supported items | Full-text stamp |
| --- | --- | --- | --- |
| [Kostenko, *Trace Ideals with Applications*](https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf) | §3.4.1–3.4.4, printed pp. 34–41, PDF pp. 43–50 | Exterior powers, Weyl inequalities, determinant continuity/growth, zero multiplicity, Lidskii route | PDF, 88 pages, 707149 bytes, SHA-256 prefix `4b15703cd83c0f2a` |
| [van Neerven, *Functional Analysis*](https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf) | §14.5.a, Theorems 14.33–14.43, printed pp. 583–591, PDF pp. 595–603 | Determinant construction, finite-rank reduction, continuity, invertibility, spectral product | PDF, 810 pages, 8628336 bytes, SHA-256 prefix `2095f24459613e59` |
| [Dyatlov–Zworski, *Mathematical Theory of Scattering Resonances*](https://math.mit.edu/~dyatlov/res/res_final.pdf) | Appendix B §§B.5–B.6, printed/PDF pp. 505–513 | Weyl majorization, determinant logarithmic derivative, continuity, product, zero order | PDF, 640 pages, 12229547 bytes, SHA-256 prefix `694d0542c6e2ce66` |

These are independent lecture-note, book, and monograph treatments. Their Hadamard factorization inputs were inspected but are not consumed by this scaffold; the replacement local argument and its dependency chain are spelled out in the manifest. No source outage or mathematical coverage waiver was claimed.

## Published proof debt for the canonical ledger

| Exact published item | Evidence and publication state | Planned supplier and repair |
| --- | --- | --- |
| `rem-external-separable-trace-class-fredholm-determinant-theorem` | `status: published`, `proved_here: false`, `proof: not-supplied`; its statement records the separable determinant theorem externally rather than proving it. | The 12 local A items supply its separable construction, growth, zero, product, and Lidskii ingredients. Keep the recorded remark as history unless the owner explicitly retires/reclassifies it. |
| `def-fredholm-determinant` | `status: published`; `deps` directly contains the recorded remark. Its Definition sets `det_H(I+zT):=D_S(z)` from that remark, and the last Well-definedness paragraph invokes the external product formula for support independence. | After local A proofs are authored and verified, relink its separable `D_S` to `lem-separable-trace-class-determinant-construction`, the trace-norm limit in `lem-fredholm-determinant-trace-norm-continuity-and-growth`, and `lem-fredholm-determinant-spectral-product-from-power-traces`; then reprove support independence with the same nonzero algebraic eigenvalue data. Preserve the stable ID, AC hypothesis, arbitrary-Hilbert and zero-space conventions. |
| `prop-fredholm-determinant-properties-for-trace-class-operators` | `status: published`; `deps` directly contains the recorded remark. Fact F2 and proof steps 1.1, 1.2, and 2.1 transfer its entire, growth, continuity, multiplicative, zero, and derivative claims. | Replace F2 and each use with the corresponding local Weyl, construction, continuity/growth, logarithmic-derivative, zero, and spectral-product lemmas; keep the common separable reducing-support argument for arbitrary Hilbert spaces. |
| `thm-lidskii-for-trace-class-operators` | `status: published`; its F2 and proof step 2.1 use the preceding proposition's spectral product and derivative, so the recorded remark is a transitive proof dependency. | Retain the stable theorem and its full AC, algebraic-multiplicity, absolute-summability, arbitrary-Hilbert, separable-support, and empty-list claims. Replace the transitive external route by `lem-generalized-eigenspace-trace-decomposition` on the reducing support, using local Weyl summability; the repaired proposition can provide the product proof as a second check. |

The published page summary `library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md` also describes the determinant block as externally proved. Its wording should be updated with the owner repair. This is existing publication debt, not a proof prerequisite for the new local separable A suppliers.

`ex-fredholm-determinant-of-a-finite-rank-operator` is **escalated**. Its designed statement uses the existing arbitrary-space `det_H`, so `def-fredholm-determinant` is an actual prerequisite and still reaches the recorded result. The local separable calculation is complete, but Step 1 cannot repair the published definition. The owner can make this example ready after the definition and property repairs above; the escalation receipt must not be overwritten by a worker. The other three B items use the local separable determinant or elementary matrix calculation and have ready decisions.

## Checks and outstanding findings

Checks after the final local edits on 2026-09-27 UTC:

- `coverage-checklist --require-destination`: 1 page, 34 harvested results, **0 errors, 0 warnings**.
- Whole-run `manifest-deps`: 466 scaffold items at the final check snapshot, **0 errors**. Whole-run manifest-only `content-policy`: 466 items, **0 errors, 0 warnings**.
- `validate-plan research/plan-spec.json`: exit 0; no listed-page item cycles, forward references, B-page dependencies, or unresolved IDs among 1240 pages with item lists. It reports 379 planned pages without item lists and pre-existing redundant page-prerequisite notices.
- `extcheck`: exit 0; it still warns that the exact published determinant definition/proposition/Lidskii chain inherits unproved recorded material, along with unrelated published external-reference warnings.
- `source-fetch-check` without restamping: **3/3 fetch-verified, 3/3 resolved**.
- A direct filesystem traversal of published item frontmatter and all 15 ready local dependency closures found **no missing, unpublished, or `proved_here: false` prerequisite**. The intentionally escalated arbitrary-space example was excluded from that ready-only assertion.
- `item-dependency-levels.mjs check --run frontier-36-complete`: exit 1 solely because other batches still have empty A/B scaffold inventories in this live whole-run snapshot; it reported no incorrect level for this batch. Recheck after those suppliers are scaffolded.
- `step1-decisions.mjs check --run frontier-36-complete`: exit 1 for live whole-run work. Within this batch, the only remaining work entry is the intentional finite-rank-example escalation; the other 15 receipts are current. Other batches also have empty or changing inventories.

Step 3 and owner/operator reconciliation remain required for mathematical approval and the full engine gate.

## Owner correction after the Beta dispatch

The original Beta evidence above is preserved as written. The owner added
`lem-arbitrary-hilbert-fredholm-determinant-from-separable-support` as the
thirteenth A item. It constructs the arbitrary-Hilbert determinant from a
separable reducing nuclear support and the A page's local separable determinant
and spectral-product proofs. The finite-rank example now depends on that
theorem rather than the published `def-fredholm-determinant`, so it no longer
uses the recorded external theorem as a proof premise. Both changed items
have current owner Step-1 readiness records; the other 15 item records remain
current. This is scaffold readiness, not approval of their eventual proofs.

The published definition and Lidskii theorem still require a later corpus
repair after the local A proofs have been authored and audited. The stable IDs,
arbitrary-Hilbert scope, AC assumption, zero-space convention and spectral
product must be preserved. The Step-3 author and auditor must not count the
recorded external theorem as a proof.
