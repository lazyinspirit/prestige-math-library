# Batch 65 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-65`.

Review proceeds in the dispatched dependency order. No agents were dispatched; no judgments, stamps, or stage transitions are performed.

## Level 1 — def-yangian-gl-n-rtt-presentation

`refuter:65:1`: confirmed_fatal, repaired with confidence 1. The exact current pre-edit carrier agrees with the refuter observation: it imports zero-based matrix units but uses E_NN without a reindexing. The published supplier `def-matrix-units`, Definition, and `def-matrix-space`, Definition (Both indices start at 0), establish the mismatch. The correction explicitly identifies E_ij with the supplier unit at (i−1,j−1) and e_s with coordinate s−1. This preserves the finite rank N≥2, flip, RTT relation, formal-series convention, and Hopf proposals. All indices are now in the supplier domain, including N=2 and i=j=N. No choice is used. Statement provenance becomes ai-altered.

## Level 2 — def-yangian-evaluation-module

`refuter:65:2`: confirmed_fatal, repaired with confidence 1. The old Definition independently claimed its 1-based E_ij came directly from the zero-based supplier. It now explicitly imports the reindexed convention and states the coordinate shift. The action, all complex shifts, formal expansion at infinity, and dual-basis labels remain intact; the rational pole is not assigned an operator value. Statement provenance becomes ai-altered. Consumer uses will be recorded below; no new lemma is required.

## Level 3 — lem-yangian-gl2-one-root-bethe-cancellation

`touched:65:lem-yangian-gl2-one-root-bethe-cancellation`: reviewed_no_defect, change_kind metadata. The reader only narrowed Isaev's locator to the periodic RTT/trace construction. Independently, the component identity yields AB with coefficients (x−i)/x and i/x and DB with (x+i)/x and −i/x. Applying the vacuum identities leaves the unwanted coefficient i(a(v)−d(v))/x. The hypotheses expressly exclude x=0 and zero Bethe vectors, and require actual regular operator values; formal series are not silently evaluated. No condition C(u)Ω=0 is needed for this one-root calculation. Faddeev (67)–(69), (88)–(97) confirms the exchange signs and cancellation; Isaev (5.1.5)–(5.1.8) concerns only RTT and trace, as the revised locator says. No proof edit.

## Level 3 — thm-yangian-evaluation-module-well-defined

`refuter:65:3`: confirmed_fatal, repaired with confidence 1; touched carrier: amended_repair. F3 now states the actual shifted convention from the corrected presentation instead of silently widening the published matrix-unit domain. Steps 1.1–3.1 were checked in full: matrix-unit multiplication and the dual bracket agree on every basis vector; the evaluation RTT substitution cancels quadratic terms in the same order and matches the linear terms; quotient descent follows because all defining coefficients vanish. The formal Laurent denominator, zero module, a=0, and N≥2 cases are sound. The auxiliary action on the identified dual basis is the flip. The HIGH risk review is complete in the owning contract before proceeding to level 4. No judge record exists to invalidate. The reader's narrowed Faddeev source description is retained.

## Level 4 — lem-yangian-fundamental-evaluation-intertwiner

Touched carrier: reviewed_no_defect, change_kind metadata. The reader's narrowed Molev locator is justified: the specialized intertwiner equation is proved locally by YBE, not claimed as a quote. The two coproduct orders and the written intertwiner direction match. The substitution (u,a,b) gives exactly the ordered triple identity; cancelling the scalar Laurent unit (u−a)(u−b) is valid even when a=b. No inverse of R is used at ±i. The exceptional kernels are the two flip eigenspaces and both are nonzero for N≥2. HIGH risk review is complete in the contract before proceeding.

## Level 4 — cex-yangian-one-root-bethe-equation-does-not-guarantee-completeness

Touched carrier: reviewed_no_defect, change_kind metadata. The reader correctly narrows the sources to Bethe formulas and periodic transfer matrices, without attributing this counterexample to them. Independently, the two counit summands give A=D=I and B=C=0 on the entire complex spectral domain. All nonempty root products vanish; the empty product spans only the fixed e_0 line, not e_1. Thus the scalar equation alone fails to ensure completeness. It does not refute the cancellation lemma, whose nonzero-vector condition fails here. The Hopf counit proof was checked as prerequisite context, including RTT preservation, finite coefficients and inverse antipode identities. No change to the counterexample.

## Level 5 — lem-yangian-periodic-monodromy-satisfies-rtt

Touched carrier: reviewed_no_defect, change_kind metadata. Loebbert (5.13) is in §5.1 and is the monodromy RTT equation. The proof follows from the local YBE and commuting maps on disjoint auxiliary/site factors; its induction keeps the increasing site order. The m=1 base case and arbitrary complex inhomogeneities are included. The chain excludes m=0. No generic inverse is used, so singular spectral differences cause no exception. No proof edit.

## Level 6 — thm-yangian-periodic-transfer-matrices-commute

Touched carrier: reviewed_no_defect, change_kind metadata. Faddeev (44)–(47) gives monodromy RTT and transfer commutativity; (66)–(78) instead concerns exchange relations. The proof legitimately traces scalar auxiliary conjugation while preserving noncommuting quantum coefficient order. The two independent auxiliary traces produce τ(u)τ(v) in that order. At fixed v, each polynomial entry vanishes at all but two u values, and hence at every u, including u−v=±i. No inhomogeneity genericity or infinite-dimensional trace assumption appears. No proof edit.

## Level 7 — ex-yangian-two-site-periodic-transfer-matrix

Touched carrier: reviewed_no_defect, change_kind metadata. Independently checked the three partial traces, including tr_0(P_01 P_02)=P_12, and obtained τ(u)=(2u²+1/2)I−P_12. At u=i/2, τ=−P_12 is invertible and τ′=2iI; the stated normalization gives H=P_12−I. The two-site periodic normalization agrees with Faddeev (63)–(65), and needs no limiting inverse. The shared C² R family is unchanged. HIGH risk review is complete in the contract.

## Historical carrier comparison

The pre/post snapshots change exactly seven item hashes and no manifest, contract, or page hashes. To verify the reader delta rather than infer it from hashes, I reconstructed pre-reader text by replacing only source locator lines with those in the owner reconciliation archive; for the evaluation theorem, I first undid my F3 repair in memory. No historical file was rewritten. Results:

- `thm-yangian-evaluation-module-well-defined`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.
- `lem-yangian-fundamental-evaluation-intertwiner`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.
- `lem-yangian-periodic-monodromy-satisfies-rtt`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.
- `thm-yangian-periodic-transfer-matrices-commute`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.
- `lem-yangian-gl2-one-root-bethe-cancellation`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.
- `ex-yangian-two-site-periodic-transfer-matrix`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.
- `cex-yangian-one-root-bethe-equation-does-not-guarantee-completeness`: reconstructed pre-reader bytes from current post-reader text using only archived locator lines; pre hash matches: True.

## Supplier and consumer review

The changed Definitions preserve the intended one-based formulas by explicitly transporting the published zero-based family. Direct references were searched in current `items/` and `library/`, rather than inferred from manifest declarations. The RTT Definition's consumers are `def-yangian-evaluation-module`, `lem-yangian-rtt-component-commutator-form`, `prop-yangian-gl-n-rtt-hopf-structure`, `lem-yangian-rtt-spectral-rescaling`, `prop-yangian-rational-r-matrix-yang-baxter-and-invertibility`, `thm-yangian-evaluation-module-well-defined`, `lem-yangian-gl2-one-root-bethe-cancellation`, and the owning A page. The evaluation Definition's direct consumers are the evaluation theorem, spectral-rescaling lemma, fundamental-intertwiner lemma and periodic-chain Definition. Each actual use was checked: component entries, finite index sums, matrix-product coproduct, rescaling, the dual action, and the basis flip are unchanged under the explicit relabeling. Only the theorem's F3 required a surgical repair. Its Statement is unchanged, so no further consumer propagation is required. There are no outside-batch direct reference consumers and no published carrier was edited or found defective. No published-ledger entry, proposed withdrawal, or escalation is needed.

The batch-64 shared R Definition and its complete Yang–Baxter proof were read independently, not accepted on readiness metadata. The latter's basis permutations and expansions prove both stated identities; only its un-checked identity is consumed here. The arbitrary-N proposition was checked separately, including the two complementary flip projectors, exact singular kernels/ranks and inverse. Published `thm-tensor-product-basis-from-bases` supplies the finite explicit tensor bases, including its stated empty-factor convention; no arbitrary basis choice is used. `def-hh-scalar-and-tensor-conventions` fixes complex finite tensor products and rightmost-first composition. No substantial missing prerequisite was found.

Exact owned contract quotes were refreshed after the Definition changes. F3 records both the reindexing Definition and the underlying matrix-unit Definition, and its two exact source quotations. The manifest records the two altered Definition provenances, explicit reindexing strategies and current source locators. Existing source references, mathematical claims, dependencies, item IDs, pages and proof statements are retained. Owned cross-batch item rows gained the current independent review; the frontier ledger input was refreshed with its supported command.

## Sources consulted

- [Molev–Nazarov–Olshanski](https://arxiv.org/pdf/hep-th/9409025), §1.1 (one-based generators), §§1.4–1.8 (permutation R/RTT), §1.16 (evaluation and its Yang–Baxter verification), and §1.18 (matrix-unit bracket interpretation). The standard evaluation is converted by the local spectral rescaling; no direct attribution of the dual-action formula is made.
- [Faddeev](https://arxiv.org/pdf/hep-th/9605187), §3, (31)–(39) (fundamental Lax/permutation RLL), (41)–(47) (monodromy and commuting traces), (63)–(65) (Hamiltonian normalization), §4, (67)–(69), (88)–(97) (exchange, eigenvalue and cancellation). The general counit counterexample is proved locally.
- [Isaev](https://arxiv.org/pdf/2206.08902), (3.9.16)–(3.9.18) (rational RTT limit and coproduct), (3.13.56)–(3.13.57) (spectral RTT Yangian), and §5.1, (5.1.5)–(5.1.8) (periodic monodromy, trace and logarithmic derivative). Its conventions are compared through the local formulas, not silently identified.
- [Loebbert](https://arxiv.org/pdf/1606.02947), §5.1, (5.10)–(5.13) (Lax/monodromy) and §5.3, (5.31)–(5.37) (periodic trace, commutation and charges). The corrected §5.1 locator is exact.

## Defect dispositions and output coverage

`non-ml-math-remaining-81-2026-10-18-3a-batch-65-D001`, `D002`, and `D003` (same full prefix) are closed `fixed` rows at `3a-adjudicate`, one for each refuter finding. All completed repairs have `repair_confidence: 1`. There are exactly ten decisions: three confirmed-fatal refuter findings, one amended touched carrier, and six reviewed-no-defect metadata changes. There are no reader findings or page-only obligations. The theorem's touched decision shares its exact refuter defect row; it does not invent a second defect.

## Local checks and handoff

- Live `.autopilot` status and current Git log were inspected: this is the active Step 3 run, not a historical RESUME claim. No state transition or scheduling action was taken.
- Reflow: three locally edited items unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the three edited paths with `--json`: one proof pass, two definitions not applicable, zero failures.
- `node tools/rendercheck.mjs` on those same paths with `--quiet`: all three parse and render successfully.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-65.proof-contracts.json --strict`: final result 0 errors, 0 warnings, 11/11 checked. An initial local check identified the missing second F3 source contract after the citation repair; that exact quotation was added before the successful rerun.
- `node tools/citation-fidelity.mjs` on that contract: 27 citations over 11 items; no missing quote or widening candidates.
- `node tools/risk-report.mjs` on that contract, first without and then with `--require-reviewed`: 0 errors. The repaired evaluation theorem now scores CRITICAL because the explicit zero-based convention adds a boundary-language signal; its complete review covers the same mathematics. The intertwiner and example remain HIGH and have complete specific reviews.
- `node tools/frontier-dependency-ledger.mjs refresh --run non-ml-math-remaining-81-2026-10-18`: refreshed and deduplicated.
- `node tools/defect-ledger.mjs append --file /tmp/batch65-alpha-defects.json`: appended exactly three rows and refreshed the generated view.
- Local JSON consistency check: exactly all ten routed obligations, with matching closed subject rows for every defect reference.
- Final post-edit/post-reflow command: `node tools/proof-layout.mjs items/def-yangian-gl-n-rtt-presentation.md items/def-yangian-evaluation-module.md items/thm-yangian-evaluation-module-well-defined.md`: 3 items, 3 steps, 0 defects. No item edit followed it.

No unresolved mathematical uncertainty, open risk review or blocker remains in this dispatch. Local checks are not judgments or engine certification; decision stamping and the stage gate battery remain engine-owned.
