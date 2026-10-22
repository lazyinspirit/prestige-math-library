# Batch 47 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-47`. Work in routed dependency order; engine stamping and gates are not performed here.

## Completed lower levels

- `def-nrqmx-smooth-projector-bundle`: reader finite-regularity differential and Hermitian-connection definitions are mathematically sound. Checked exact smooth-manifold, Cr-map, componentwise-form, Countable Choice and finite-gapped-supplier interfaces. No Alpha interface edit.
- `lem-nrqmx-c1-stokes-compact-surface`: accepted endpoint extension and orientation clarification; complete risk review recorded in owning contract. Exact FTC applies on nondegenerate intervals with integrable continuous derivatives, and common chart refinement preserves the integral.
- `lem-nrqmx-projector-bundle-kato-well-definedness`: accepted explicit C2-bundle/connection interface. Verified finite frames, Picard existence/uniqueness, zero/full rank, endpoint derivatives, unitarity and intertwining. Complete risk review recorded.
- `thm-nrqmx-berry-projector-curvature`: accepted C2-section correction; checked all matrix identities and diagram typing/commutativity. Complete risk review recorded.

## Level 3: Chern integrality

`refuter:47:1` is confirmed nonfatal: the observed/current pre-repair Proof 1.2 used a real supremum over an allowed empty surface. Proof 1.1 now handles the empty integral and zero fundamental class first, then assumes a nonempty surface. The claim is unchanged. Independently checked all approximation, resolvent, rank, isomorphism, sign, component and limiting arguments; complete risk review is in the contract. Repair confidence: 1. The proof and boundary worksheet are synchronized.

## Further completed carriers

- `thm-nrqmx-adiabatic-geometric-phase-bound`: accepted the reader energy-trace and endpoint clarification. Read the exact finite-gapped supplier and its full proof: the commutator solution is Hermitian and C1, the estimate applies with tau=T/hbar, and differentiation proves the rank-one dynamic/geometric factorization. Units give C in inverse joules and dimensionless leakage.
- `lem-nrqmx-spin-half-solid-angle-period`: accepted outward metric/area convention; checked the explicit collar flattening, signed double, C2 seam jets and -1/(4pi) integrality coefficient. Complete risk review recorded.
- `thm-nrqmx-rank-one-chern-holonomy`: `refuter:47:2` confirmed nonfatal. Added scalar ODE uniqueness, Pv prime=0 for Kato vectors and the converse v prime=[P prime,P]v for parallel sections, plus explicit terminal frame transition and valid refinement argument. Chern/clutching sign and componentwise integer winding checked. Statement unchanged; confidence 1. Complete risk review recorded.

## Remaining carriers and final dispositions

`cex-nrqmx-gap-closing-adiabatic` has endpoint leakage exactly one for every duration: its diagonal propagator has exponent proportional to s²-s and hence equals the identity at s=1. The upper branch changes between orthogonal endpoint eigenspaces; its spectral projection at the crossing has rank two. The invariant down-line is correctly distinguished from that degenerate spectral eigenspace. No correction is needed.

`ex-nrqmx-spin-half-monopole` has scalar eigenline curvature iω/2, Chern number -1 and north-to-south transition exp(-iφ), whose winding is -1 with the north-boundary orientation. The finite grid-cell construction meets the compactness, Lebesgue-number and C1 Stokes hypotheses; opposite internal edge transports cancel. The resulting exp(-iΩ/2) is invariant under a 4π change of filling. Complete risk review is recorded; no correction is needed.

| Obligation | Verdict | Disposition |
|---|---|---|
| touched:47:def-nrqmx-smooth-projector-bundle | amended_repair | Reader finite-regularity repair retained; manifest synchronized. |
| touched:47:lem-nrqmx-c1-stokes-compact-surface | amended_repair | Reader endpoint extension retained; manifest synchronized. |
| touched:47:lem-nrqmx-projector-bundle-kato-well-definedness | reviewed_no_defect | Explicit-definition/audit enrichment; existing proof establishes every clarified clause. |
| touched:47:thm-nrqmx-berry-projector-curvature | amended_repair | Reader C2-section repair retained; manifest synchronized. |
| touched:47:lem-nrqmx-c2-projector-chern-integrality | reviewed_no_defect | Original reader contract enrichment only; distinct refuter repair recorded below. |
| touched:47:thm-nrqmx-adiabatic-geometric-phase-bound | reviewed_no_defect | Closed-interval regularity and unique energy-trace clarification/audit enrichment. |
| touched:47:lem-nrqmx-spin-half-solid-angle-period | reviewed_no_defect | Explicit expansion of the intended outward unit-sphere area convention; audit enrichment. |
| touched:47:thm-nrqmx-rank-one-chern-holonomy | reviewed_no_defect | Original reader contract enrichment only; distinct refuter repair recorded below. |
| touched:47:cex-nrqmx-gap-closing-adiabatic | reviewed_no_defect | Sound witness; original contract enrichment. |
| touched:47:ex-nrqmx-spin-half-monopole | reviewed_no_defect | Sound verification; original contract enrichment. |
| refuter:47:1 | confirmed_nonfatal | Empty-surface proof case repaired, confidence 1. |
| refuter:47:2 | confirmed_nonfatal | Parallel/Kato identification repaired, confidence 1. |

The exact twelve decisions are in the companion JSON. Five distinct closed defect rows were appended to `research/defect-ledger.jsonl`, all caught at `3a-adjudicate`: finite-regularity-differential, corner-endpoint-ift, curvature-section-regularity, empty-surface-supremum, and parallel-kato-identification (each prefixed by this run and `-3a-batch-47-`). The three touched repairs each own their row; each flagged decision owns exactly one separate row. The two reviewed contract-only touched obligations do not close their separately routed refuter defects. Clarifications that merely make already determined objects explicit are not fabricated additional mathematical defects.

## Historical comparison and current carriers

Compared both frozen pre/post snapshots and every current carrier. Five reader-changed raw preimages are present, with exact pre-hash matches, in `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-nrqm47-c2-integrality/current/items/`: the projector definition, Kato lemma, curvature theorem, adiabatic theorem and solid-angle lemma. Their current bodies match the frozen reader post hashes; the displayed source deltas were read in full.

For C1 Stokes, that archive predates an intervening numbering normalization. Replacing only current Proof 1.1 with its archived old paragraph reconstructs raw SHA256 `95b34ac5d0503d09c2260b0ee8678666fd557339959804f84bb90a2291d5c174`, exactly the frozen preimage. Thus the endpoint-IFT comparison is authenticated rather than inferred from a report. The reader post body is retained.

The integrality, holonomy, monopole and gap-closing item hashes are identical between frozen pre and post; their routed touched changes are contract enrichment. Reversing exactly the new empty-case clause and its two added justification tags reconstructs the integrality pre/post raw hash `233379c6d3835c92b103d4d80d074bf3d4779dc63d45278ff9ffb71f16680bf7`. The archived holonomy file matches its frozen pre/post raw hash `f58c83159cf26d611047a43cdfde2c7f181b215cce74cd277e2c82f4e60c22d9`. Both refuter observations concern those actual earlier proofs, not the corrected current bytes. No unbound historical observation or owner-resolution exception is used.

Alpha edited only the two refuter-target item proofs. Their Statements, prerequisites, scope and provenance remain unchanged, and neither had a judge record to invalidate. Updated their derivation claims, the integrality citation-use mappings and empty boundary record, and all seven required risk reviews. Six stale manifest Statement/Definition mirrors now exactly match current carriers, without altering inventory, page identities, supplier IDs, dependency roles or levels. This mirror synchronization makes the three substantive reader repair decisions `amended_repair`; their item bodies remain the accepted reader bodies.

## Consumer and frontier review

A current exact-ID dependency/reference scan of all item and page carriers found these actual uses of reader-changed interfaces:

- Projector definition: owned Kato, curvature, C2 integrality and holonomy carriers, plus outside `def-nrqmx-determinant-line-projector`. Each uses the same C2 constant-rank family and projected connection; the outside definition explicitly supplies these hypotheses.
- Kato lemma: its defining item's justified_by edge and the owned curvature theorem. Its local frame and transport uses match the clarified C2-bundle/connection statement.
- Curvature theorem: owned integrality, phase, solid-angle, holonomy and monopole carriers, plus outside `lem-nrqmx-determinant-curvature-is-trace`. The latter's supplied frame is explicitly C2, so A is C1 and dA and the trace cancellation are defined. Its proof uses precisely the unchanged frame curvature identity. Also read its determinant-projector well-definedness supplier as relevant context; polynomial minors preserve C2.
- Adiabatic phase: the owned gap-closing counterexample cites the gap/coherence restriction, which remains unchanged.
- Solid-angle lemma: the owned monopole example uses exactly the two C2 disk fillings, outward area and 4π ambiguity now made explicit.

All actual uses remain valid without consumer edits; no outside carrier requires repair, and no further propagation hop is triggered. No published defect, withdrawal or unresolved prerequisite was identified. Imported and published carriers were left unchanged. The owning cross-batch input retains its supplier uses, with three obsolete direct-edge rows marked removed: Kato→Countable Choice, curvature→Countable Choice, and local C1 Stokes→smooth general Stokes. The current proofs do not use those direct edges. The local Stokes proof uses direct coordinate integration, not the stale historical mollification description. Refreshed the derived frontier ledger by its supported command; did not hand-edit it.

## Source evidence and limits

Read every assigned carrier and all its direct cited dependency statements/definitions at the exact current physics copies. The batch contracts retain the exact supplier excerpts and hypotheses. Read the complete proofs of the finite-gapped adiabatic supplier and the first-Chern-form/topological-line comparison because these carry the main analytic and sign conventions. This is scoped supplier-use review, not a re-audit of every transitive mathematical proof. Checked the 29 direct supplier snapshots listed in `research/math-imports.json` against their pinned SHA256 values: all match. The local finite-gapped supplier is additional actual context, not relabelled as an imported pin.

- [Tong, Applications of Quantum Mechanics](https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf), §§6.3.4–6.3.5, printed pp. 172–177, read from the retained local PDF (zero-based pages 179–184) after the web fetch timed out. Checked connection/phase, gauge, spin and filling discussion. Its nearby displayed signs and polar-curvature normalization are not substituted for the local calculations; the assigned convention is A=u*du.
- [Avron–Seiler–Yaffe (1987)](https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf), introduction and §2 through Lemma 2.3, printed pp. 34, 36–39: inspected the phase-removal motivation, adiabatic generator, common-domain regularity, gap hypothesis and intertwining argument. The exact finite-dimensional constant is justified by the local proved supplier, not attributed to the article's general operator setting.
- [Lee, Introduction to Smooth Manifolds, second edition](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf), Theorem 16.11 and complete proof, pp. 411–414, and Theorem 16.25 and proof, p. 419: checked orientation, half-space calculation, localization and corner calculation. These statements require smooth forms. The assigned finite-regularity extension and reentrant local case are proved by its own coordinate argument, not claimed as Lee's exact theorem.

The only assigned TikZ diagram is the curvature theorem's local-frame square. Its objects, arrow directions and regularity agree with step 2.1; both composites give da+Aa. It is explanatory and no proof depends on it. All items here are mathematical conditional constructions; no measurements, empirical confidence or proof of a physical framework is asserted.

## Local checks and handoff

- `risk-report.mjs` on the owned contract, first without and then with `--require-reviewed`: seven HIGH/CRITICAL reviews complete; final 0 errors, nine proof-bearing items routed.
- `proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-47.proof-contracts.json --strict`: 9/9 checked, 0 errors and 0 warnings. An initial missing F6-to-1.1 citation-use mapping was corrected before the successful check.
- Reflow on the two edited items completed; final precheck via `tsx-run.mjs` passed both. Direct `.mts` invocation was initially rejected by Node's loader; the documented wrapper was then used. An initial help lookup used the nonexistent plural `proof-contracts.mjs`; validation used the actual singular tool. These were invocation failures, not mathematical defects.
- Scoped `rendercheck.mjs` passed both edited items with no YAML or KaTeX errors.
- Final required command `node tools/physics-support/proof-layout.mjs items/lem-nrqmx-c2-projector-chern-integrality.md items/thm-nrqmx-rank-one-chern-holonomy.md`: 2 items, 8 steps, 0 defects, after all item edits and reflow.
- Exact obligation inventory check: twelve expected and twelve distinct decisions, with equal sets. Ledger append validated and added five rows and refreshed its generated view. Frontier refresh completed.

No unresolved blocker remains in this dispatch. No judge, source acceptance stamp, decision-hash stamp, transition, publication, commit or gate battery was initiated; those remain engine/owner work.

