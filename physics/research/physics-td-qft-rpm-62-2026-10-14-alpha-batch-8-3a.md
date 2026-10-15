# Batch 8 Step 3a adjudication

Run: physics-td-qft-rpm-62-2026-10-14; group: batch-8; scope: batch 8 only.

## Dependency-ordered review

### Level 5: cex-td-tagged-scaling-not-fixed-type-homogeneity

Verdict: reviewed_no_defect; change_kind: audit_enrichment. Pre/post item hashes agree (fa41ecaa…); the contract summaries were aligned by the reader. Independent check of steps 1.1–3.1: on the positive orthant, affine S_tau=a hat U+b hat V+q tau has positive energy derivative and is concave; composition and positive tagged scaling preserve the domain and entropy. Fixed-tag scaling at 2 differs by -q tau, strictly nonzero. Supplier interfaces: def-td-equilibrium-state-domain, def-td-si-quantities, post-td-bulk-additivity and post-td-concave-fundamental-entropy, current Postulate/Definition sections. No empirical claim or choice. Alpha risk review is complete. Corrected the contract finite-check input units to a=1 J K^-1 with dimensionless hat U, matching the already sound carrier. No item edit.

Next: level 6 piston coupling and concave-stability review.

### Level 6: post-td-mechanical-conjugate-identification

Verdict: accepted_repair; repair_confidence: 1. The reader replaced undefined regime labels by compact-interval coordinatewise C1 paths, fixed-area geometry V=V_*+A ell, signed normal force/area, zero tangential force and zero net normal force. All six actual formulation suppliers were read. Compression work has the correct sign when pressure is positive; the oriented convention does not falsely require all entropic pressures positive. Source checked: Tong S1 §1.2.4, equations (1.15)–(1.16), and S4 §4.2, quasi-static discussion. Direct consumers pthm-td-interior-exchange-equilibrium, ex-td-retained-volume-thermal-equilibrium and batch-9 ex-td-nonzero-isothermal-work-loop retain explicitly conditional uses; the cycle has admissible smooth legs and a tracking load. No consumer repair required. Alpha risk review complete.

### Level 6: pthm-td-concave-stability

Verdict: accepted_repair; repair_confidence: 1. The added difference quotient in Proof 2.1 correctly differentiates DS(x)[x], yielding D2S(x)[h,x]+DS(x)[h], then cancels the latter term. The complete draft lem-tdmath-concave-affine-maximizer-and-hessian supplies the support inequality and Hessian sign with all hypotheses satisfied. Strict concavity alone supplies uniqueness; no strict-stability claim is inferred from semidefiniteness. The common-law postulate supplies coordinate-preserving entropy transport on a positive cone; the general tagged model does not. Positive volume excludes radial x=0. No public-interface change and no choice. Alpha risk review complete.

Next: finish local-energy risk review, then level 7 exchange and response chart.

### Level 6: pthm-td-local-energy-representation

No routed decision (untouched). Complete independent risk review of Proof 1.1–3.1 and thm-tdmath-local-implicit-rank: G=S-s is C1, the U minor is strictly positive and the scalar q<n graph case applies. The proof correctly supplies its own C2 upgrade via C1 entropy partials, composition, multiplication and the explicit reciprocal derivative. Local uniqueness and conjugate signs follow; no global inverse or phase-boundary claim is made. Published chain-rule, Ck and Ck-algebra supplier statements and proofs were inspected, not re-certified. Alpha risk review complete.

### Level 7: pthm-td-interior-exchange-equilibrium

Local verdict: amended_repair; repair_confidence: 1 for the completed proof-only correction. Proof 1.1 now chooses nonzero h explicitly. A2 now faithfully separates the quasistatic equilibrium-path condition from mechanical force balance and includes V=V_*+A ell. All exchange derivatives follow from the two-sided local-maximum difference quotients and the stated bilateral feasibility, with equal finite positive temperatures used only in the further equality branches. Statement and physical scope unchanged. Risk review remains OPEN for the separately escalated batch-2 tagged-protocol prerequisite below.

### Level 7: ex-td-local-response-chart

Verdict: accepted_repair; repair_confidence: 1. Removing unjustified convexity of an arbitrary open slice is sound; none of the response derivatives needs it. Explicit positive-quadrant inverses make both natural-coordinate maps smooth charts upon restriction to the actual open slice. Derivatives give CV=a, Cp=a+b, kappaT=1/p, alphap=1/T with their displayed units. Logarithm domain and derivative supplier fully inspected. Alpha risk review complete.

Next: level 8 retained-volume repair, then supplier alert dispositions and final checks.

### Level 8: ex-td-retained-volume-thermal-equilibrium

Verdict: amended_repair; repair_confidence: 1 for the completed local repair. Retain the reader's positive-energy slice restriction and global-maximum calculation. Additional current defect: post-td-entropy-maximum asserts stable equilibrium implies attained maximum, not the converse used to label this example. The constructed model now explicitly admits exactly all positive fixed-volume energy splits and separately designates the equal-energy split stable. Proof 1.1 verifies compatibility with the necessary criterion; no inference from the converse remains. The derivative signs and pB=pA/2 calculation are sound and retain the example's intended conclusion. Current direct dependency/reference consumers were searched in items, library and run manifests: there are no item consumers; the B-page summary remains accurate. Owning manifest and derivations synchronized. Alpha risk review complete, while the upstream thermal-contact alert remains open.

## Outside-scope supplier alert and preserved observations

reader:8:1 and refuter:8:1: escalated. Current def-td-thermal-contact-constraints (Definition paragraphs 1–2), its batch-2 contract and manifest retain the exact raw hash 345c8d83782d0226a6c6df634225a476d0cc3b6783aa92a50e384ac67a9fe931. The family consists of tagged pairs, but the coordinate-based compound protocol is not explicitly supplied their coordinate projection. Required owner repair: bind the two tags and coordinate tuples, specify the admitted protocol and endpoint-coordinate use, and resolve actual consumer uses in batch 2 and downstream. Consumer-local feasible curves close the derivative calculation but cannot repair the producer Definition. No substantial missing analytical result is claimed. Current state/process definitions and Tong S4 §4.1 were consulted. Producer files remain untouched. Both decisions retain the original consumer, producer, dependency path, pre-reader snapshot, split carrier and observed fingerprint; observation_basis is current, so no unbound historical disposition is invented. One OPEN ledger row represents this duplicate observation. No closed row or confidence-1 repair is claimed for the outside supplier.

## Sources and limitations

Read current source/dependency sections, not only review scaffolds. Tong S1 §1.2.4 equations (1.15)–(1.16), §1.4.3 scaling paragraph, and S4 §§4.1–4.2 were fetched from the author-hosted HTML. These support the adopted terminology and sign conventions; they do not prove physical applicability. Arovas source-CH02.pdf in the current run's td8-tagged-homogeneity owner evidence was extracted locally and read at §2.6.4 equations (2.103)–(2.112), §2.9.1 equations (2.207)–(2.212), the homogeneity/null-direction discussion of §2.9.2, and §2.10.5 response definitions (2.254)–(2.256). The source's strict-curvature discussion does not supply stronger assumptions than the local lemmas. No direct fresh Arovas web retrieval or empirical source audit is claimed. Published mathematical supplier Statements and relevant proofs were checked for their actual uses; no complete audit of every transitive published proof is claimed. No defective published mathematical carrier was identified, so the published ledger is unchanged.

Before Alpha edits all nine owned current raw hashes matched the frozen post-reader snapshot; the counterexample raw hash also matched pre. The pre/post snapshots show precisely the six routed item-or-contract changes. Reader descriptions and current mathematics substantiate the retained repairs. A matching raw pre-reader concave-stability carrier was located in current-run owner evidence at td8-tagged-homogeneity/final-batch9-preimages-round-2/items/pthm-td-concave-stability.md. Other pre-reader raw carriers were not recovered; no claim to have read those absent byte sequences is made. No snapshot or reader/refuter artifact was rewritten.

## Checks and handoff blockers

- Initial risk-report: exit 0, nine contracts routed, seven HIGH/CRITICAL items.
- Reflow of the two Alpha-edited items: exit 0, both unchanged.
- Scoped precheck of those two items: both PASS, zero failures.
- Scoped rendercheck of those two items: OK; YAML and all math spans parse.
- Required final batched proof-layout of both changed items: exit 1, renderer ERR_MODULE_NOT_FOUND for @/components imported by external ItemBody.tsx. No layout pass claimed; tooling outside workspace was not edited and no mathematical defect row was created for this mechanical failure.
- risk-report --require-reviewed: exit 1, exactly the intentionally OPEN critical exchange-theorem risk review. All other HIGH/CRITICAL reviews contain specific Alpha evidence.
- Frontier-dependency ledger refresh: exit 0. The thermal-contact and dependent exchange-theorem uses remain OPEN; availability-only historical evidence is preserved.

Report and decisions contain exactly eight routed obligations. Local completed repairs have confidence 1 and fixed ledger rows. Engine owns hashes, gate battery and transitions. Owner action remains necessary for the batch-2 producer interface and the proof-layout environment; no gate, stamp, judge or self-certification was performed.

Final artifact consistency check: exactly eight distinct owed obligations, every referenced ledger subject and open/fixed disposition agrees, and the producer raw hash still matches the immutable routed observation. Both Alpha-edited carriers have no judge record. Exact recovered concave-stability preimage comparison shows only the reader's L2 citation-scope correction and expanded Proof 2.1 difference quotient. Manifest source/provenance/public-interface fields are synchronized with current carriers.

Source locations: [Tong S1](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html), §§1.2.4 and 1.4.3; [Tong S4](https://davidtong.org/teaching/statistical-physics/statmechhtml/S4), §§4.1–4.2. Arovas local source path: `research/physics-td-qft-rpm-62-2026-10-14-owner-escalations/td8-tagged-homogeneity/source-CH02.pdf`, relevant printed pages 31–32, 44–46 and 51–52. Its cited source URL is https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf; local extraction was used, not a claimed new successful fetch.
