# Step 3b — pair `cat-comparison-link-criteria-and-local-globalization` (dispatch report)

- Run: `frontier-42-coxeter-32`
- Dispatch label: `step3b-pair-cat-comparison-link-criteria-and-local-globalization-4006e617aebf9ad3`
- Role: alpha-high scaffold auditor and item author
- A page: `cat-comparison-link-criteria-and-local-globalization` (order 1738, `coxeter-groups`, 8 items)
- B page: `cat-comparison-link-criteria-and-local-globalization-examples` (order 1739, 4 items)
- Batch: 11 (this batch contains no sibling pair; only this pair's two pages and twelve items)
- Output report: this file. Proof contracts: `research/frontier-42-coxeter-32-batch-11.proof-contracts.json`.
- Entry state: a previous, superseded dispatch of this same pair (`…-7d391f7624bbc1ab`) left
  `items/def-cg-cat-zero-cat-one-and-local-geodesic.md` and
  `items/lem-cg-comparison-convexity-and-model-spaces.md` on disk and a partial report; both
  files are untracked at entry. This dispatch re-audited both against their suppliers, current
  manifests and sources, then authored the remaining ten items and closed the batch artifacts.

## Owned IDs and open obligations (entry)

| level | item | page | open obligation at entry |
|---|---|---|---|
| 8 | `def-cg-cat-zero-cat-one-and-local-geodesic` | A | exists (prior dispatch); audit definition/naming consistency and justifier delegation |
| 9 | `lem-cg-comparison-convexity-and-model-spaces` | A | exists (prior dispatch); audit the recorded clause-(v) scaffold repair and all six clauses |
| 10 | `lem-cg-alexandrov-comparison-triangle-gluing` | A | author lemma; in-run suppliers batch 6 authored, batch 8 authored at entry |
| 10 | `lem-cg-local-geodesic-endpoint-stability` | A | author lemma; batch-6 length supplier authored at entry |
| 10 | `ex-cg-intervals-and-metric-trees-are-cat-zero` | B | author example; batch-6 chain-metric/properness/geodesic suppliers authored at entry |
| 10 | `ex-cg-short-circle-fails-cat-one` | B | author example from this pair's comparison lemma |
| 10 | `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one` | B | author example from this pair's comparison lemma |
| 11 | `lem-cg-local-geodesic-continuation-and-path-space-covering` | A | author lemma; consumes the level-10 endpoint-stability lemma of this pair |
| 11 | `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` | A | author theorem; consumes batch-6 and batch-8 cone/link suppliers |
| 12 | `thm-cg-compact-local-cat-one-short-circle-criterion` | A | author theorem; declares the Axiom of Choice once (Ascoli subsequence) |
| 12 | `thm-cg-complete-simply-connected-local-cat-zero-globalization` | A | author theorem; consumes the level-11 path-space covering lemma |
| 13 | `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group` | B | author example; consumes the level-12 globalization theorem |

## Open obligations carried from Step 3a, Step 1 and the prior dispatch

1. **In-run suppliers.** At entry every batch-6 and batch-8 item this pair consumes
   already has an authored `items/<id>.md` on disk (authored by the sibling dispatches still
   in flight): `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`,
   `lem-cg-polyhedral-face-coherence-and-uniform-star-radius`,
   `thm-cg-polyhedral-chain-metric-topology-and-properness`,
   `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`,
   `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`,
   `def-cg-spherical-gram-simplex-and-angular-link`,
   `lem-cg-spherical-simplex-existence-and-link-gram-formula`,
   `def-cg-euclidean-cone-and-spherical-join-metrics`,
   `thm-cg-cone-join-metric-and-local-product-chart`. Their exact statements and proof steps
   used here are re-checked at each consumer; any item whose supplier bytes change after this
   audit is re-checked before handoff, and its decision is escalated if the actual use is not
   reconciled (see the supplier reconciliation section at the end).
2. **`research/frontier-42-coxeter-32-batch-11.proof-contracts.json`** is written by this
   dispatch: exact citation quotes, per-step contracts, and the eight boundary dispositions for
   the eleven proof-bearing items (the definition carries an empty contract).
3. **Non-blocking Step-3a observation (plan declaration, not a missing prerequisite).**
   `def-principal-inverse-sine-and-cosine` (home `further-trigonometric-identities-and-inverses`)
   and `def-real-and-complex-inner-product-space`, `cor-inner-product-induces-a-norm`,
   `thm-cauchy-schwarz-in-an-inner-product-space` (home `hilbert-space-geometry-and-riesz-representation`)
   are published but lie outside this page's declared `requires` closure; the same pattern is
   already recorded for batch 8. Reported for Step-4 plan reconciliation; no plan file is edited
   here.
4. **Recorded local repair carried by this dispatch (A2 clause (v)).**
   `lem-cg-comparison-convexity-and-model-spaces` clause (v) is stated with the CAT(1)
   admissibility hypothesis `d(x,y)+d(y,z)+d(z,x)<2π` made explicit. The manifest strategy's
   justification "the perimeter d(x,y)+d(y,z)+d(z,x)<3r<2π is admissible" is not implied by
   r<π/2 (a triple in B(p,r) has perimeter <6r only), so the item states the hypothesis the
   proof and every actual consumer use. The manifest row is not edited (it belongs to the
   Step-3a-approved scope; the amendment is reported for Step 4). Consumers in this run use the
   estimate only in admissible configurations: batch 15
   `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` step 1.1 has perimeter
   b+d+c ≤ 2r < 2π, and batch 22 uses only the convexity clause.
5. **B page is a dependency leaf** (no run item outside the pair references any B item); the
   four B examples are authored on the B page only.

## Checkpoint log

- **`def-cg-cat-zero-cat-one-and-local-geodesic`** (level 8, definition). Claim: comparison
  triangles in $\mathbb E^2$/$S^2$, the CAT(0)/CAT(1) tests with the $D_1=\pi$ and
  perimeter $<2\pi$ conventions, local CAT, local geodesics, length, round circles
  $S^1_\ell$ and isometrically embedded circles. Sources: BH I.1.1–I.1.3, I.1.10, I.2.1–I.2.3,
  I.2.10–I.2.17, I.3.1, II.1.1–II.1.2, II.4.15; Davis Appendix I.2/I.3. Dependencies:
  the batch-8 link/cone items and the batch-6 gluing/length items plus published metric items.
  Decision: **accept** (no proving clause; the justifier is `lem-cg-comparison-convexity-and-model-spaces`).
  Checks: precheck not-applicable (definition), proof-layout clean, rendercheck no hits.
  Open gaps: none. Next: nothing owned here.
- **`lem-cg-comparison-convexity-and-model-spaces`** (level 9). Claim: Euclidean and spherical
  comparison triangles (i)–(iii), CAT(0) consequences (iv), the CAT(1) short-geodesic
  estimate (v) and the round-circle criterion (vi) with the explicit $\ell<2\pi$ violation.
  Sources: BH I.2.1–I.2.3, I.2.13–I.2.16, II.1.4, II.1.7, II.1.9, I.3.17; Davis App. I.2.
  Decision: **repaired** — step 3.5 rewritten as the vertex-test reduction (the prior
  different-sides argument was invalid) and an endpoint-continuity step (4.1) added; clause (v)
  states the admissibility hypothesis $d(x,y)+d(y,z)+d(z,x)<2\pi$ (scaffold's $r<\pi/2$ does
  not imply it: a ball triple has perimeter $<6r$ only). Checks: precheck PASS (25 steps),
  proof-layout 0 defects, contract complete. Open gaps: none; the manifest strategy row still
  carries the scaffold text, so the clause-(v) amendment is reported for Step 4.
- **`lem-cg-alexandrov-comparison-triangle-gluing`** (level 10). Claim: Alexandrov's lemma (i)
  with the equality characterisation, the gluing lemma (ii), patchwork (iii). Sources: BH
  I.2.10–I.2.16, II.4.9–II.4.11; Davis App. I.2 (hinged inequality). Checks: precheck PASS
  (13 steps), proof-layout 0 defects, contract complete. **Decision: escalate** for two recorded
  obligations: (a) clause (i) needs $d(C,B)+d(C,B')<D_\kappa$, not the scaffold's four-distance
  sum (numerically verified necessary), and the item states the hypothesis it uses; (b) clause
  (2)'s assertion $\bar\alpha\ge\alpha+\alpha'$ is proved for $\kappa=0$ and for $\kappa=1$ only
  when $\alpha+\alpha'\le\pi$ — the spherical case $\alpha+\alpha'>\pi$ is **not proved** and is
  used by no item of this page. Next action (owner): supply the spherical case or narrow the
  clause with the owner's authority.
- **`lem-cg-local-geodesic-endpoint-stability`** (level 10). Claim: a uniform radius with
  complete convex balls, unique perturbed local geodesics with convex separation, the length
  bound and continuity in the endpoints. Sources: BH II.4.3–II.4.5; Davis App. I.2 (local
  geodesics). Checks: precheck PASS (8 steps), proof-layout 0 defects, contract complete.
  **Decision: escalate**: step 3.2's alternating-thirds extension $P(A)\Rightarrow P(3A/2)$
  (the two sequences, the geometric-series contraction and the overlap identification) is
  outlined only; steps 4.1–7.1 depend on it. Dependency addition recorded: the item now declares
  `thm-continuous-image-of-a-compact-space-is-compact` (used in step 2.1; item frontmatter and
  manifest row updated together; level unchanged at 10).
- **`ex-cg-intervals-and-metric-trees-are-cat-zero`** (level 10, B). Claim: intervals with the
  subspace metric are CAT(0), and so is a finite tree with positive edge lengths under the chain
  metric (unique reduced-path geodesics, median splitting, explicit hinged expansion). Sources:
  the batch-6 gluing/properness/geodesic suppliers, the published tree characterisation. Checks:
  precheck PASS (6 steps), proof-layout 0 defects, contract complete. **Decision: accept.**
  Open gaps: none.
- **`ex-cg-short-circle-fails-cat-one`** (level 10, B). Claim: $S^1_\ell$ with $\ell<2\pi$ is not
  CAT(1) (explicit equilateral witness via the midpoint identity) and no ambient metric space
  containing such a circle is CAT(1) (subspace test, step 3.1). Source: BH I.2.1–I.2.3, II.4.15;
  Davis App. I.2. Checks: precheck PASS (4 steps), proof-layout 0 defects, contract complete.
  **Decision: accept.**
- **`ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one`** (level 10, B). Claim: the
  unit circle is CAT(1): every tested triangle lies in an arc of length below the threshold and
  realizes its comparison isometrically; the perimeter-$2\pi$ triple is not tested. Checks:
  precheck PASS (4 steps), proof-layout 0 defects, contract complete. **Decision: accept.**
- **`lem-cg-local-geodesic-continuation-and-path-space-covering`** (level 11). Claim:
  completeness/contractibility of the local-geodesic path space, the endpoint evaluation is a
  local isometry, the induced length metric is complete, and a local isometry from a complete
  connected space onto a connected locally uniquely geodesic space is a covering (clause (iv)).
  Sources: BH II.4.5–II.4.6; Davis App. I.2. Checks: precheck PASS (6 steps), proof-layout 0
  defects, contract complete. **Decision: escalate**: steps 2.1 and 3.1 (the distance equality
  in the sup metric and the local identification of the induced metric) are outlined; the
  covering criterion of step 1.3 is argued in full.
- **`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`** (level 11). Claim:
  Berestovskii's cone criterion (i) and the polyhedral link criterion (ii) with the local chart
  and the vertex reduction. Sources: BH II.3.14–II.3.17 (printed pp. 188–191), II.1.7
  (printed pp. 161–162), I.5.6–I.5.16, I.7.39/I.7.55–I.7.59, II.5.1–II.5.5; Davis App. I.2/I.3.
  Checks: precheck PASS (10 steps; the scaffold's single case step was split into the case
  analysis with `[assume-case …]`/`[cases-exhaustive]`), proof-layout 0 defects, contract
  complete. **Decision: escalate**: the forward implication is complete (steps 1.1–1.2, the
  chordal reading of the cone formula) and case (a) of the reverse implication is complete
  (step 2.2), but cases (b) and (c) (steps 2.3–2.4) name their constructions without the cosine
  computations. Locator correction recorded: the scaffold's "I.3.14–I.3.17" is chapter I.3
  (Length Spaces) and must read "II.3.14–II.3.17"; the manifest row keeps the old prefix
  (Step-4 amendment).
- **`thm-cg-compact-local-cat-one-short-circle-criterion`** (level 12). Claim: a compact geodesic
  locally CAT(1) space is CAT(1) iff it contains no isometrically embedded circle of length
  $<2\pi$, with the minimum-digon construction of clause (ii). Sources: BH II.4.12, II.4.15–II.4.17;
  Davis App. I.2 (Theorem I.2.8). Checks: precheck PASS (5 steps), proof-layout 0 defects
  (an unbalanced `$` in the Statement was found by rendercheck and repaired), content policy
  PASS (a YAML escape in a source locator was repaired), contract complete. **Decision:
  escalate**: steps 1.4 and 2.1 state the thin-digon degenerate-comparison forcing without the
  perimeter computations, and the compact-uniqueness criterion is consumed through
  [F2]/[F3] without its own statement. The single Axiom-of-Choice use is the Arzelà–Ascoli
  subsequence of step 1.3 (declared in `axiom_use`).
- **`thm-cg-complete-simply-connected-local-cat-zero-globalization`** (level 12). Claim: a
  connected complete simply connected locally CAT(0) length space is CAT(0) (i)–(ii) with the
  geodesic contraction (iii). Sources: BH II.4.1, II.4.7–II.4.12; Davis App. I.2. Checks:
  precheck PASS (7 steps), proof-layout 0 defects, contract complete. **Decision: escalate**:
  steps 3.1 (minimization by mesh refinement) and 5.1 (patchwork and the CAT(κ)-ball check) are
  outlined; conclusions (i)–(iii) are provisional.
- **`ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group`** (level 13, B,
  newly written this dispatch). Claim: $S^1_\ell$ is complete, locally CAT(0) and not simply
  connected (the generator loop is not nullhomotopic; the covering argument), but it is not
  CAT(0) (explicit equilateral triple, altitude $\ell\sqrt3/6<\ell/2$) and not contractible, so
  simple connectivity cannot be dropped from the globalization theorem. Sources: the pair's own
  comparison lemma clause (vi), BH II.3.14/II.3.17, II.4.1; Davis App. I.2. Checks: precheck
  PASS (10 steps), proof-layout 0 defects, contract complete. **Decision: escalate** (clause (iv)
  consumes the escalated globalization theorem; clauses (i)–(iii) are complete and depend only on
  the comparison lemma).

## Handoff

**Completed IDs (12/12 authored on disk):**
`def-cg-cat-zero-cat-one-and-local-geodesic`,
`lem-cg-comparison-convexity-and-model-spaces`,
`lem-cg-alexandrov-comparison-triangle-gluing`,
`lem-cg-local-geodesic-endpoint-stability`,
`ex-cg-intervals-and-metric-trees-are-cat-zero`,
`ex-cg-short-circle-fails-cat-one`,
`ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one`,
`lem-cg-local-geodesic-continuation-and-path-space-covering`,
`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`,
`thm-cg-compact-local-cat-one-short-circle-criterion`,
`thm-cg-complete-simply-connected-local-cat-zero-globalization`,
`ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group`.
Pages `library/coxeter-groups/cat-comparison-link-criteria-and-local-globalization.md`
(`items:` 8 A ids in manifest order) and
`…-examples.md` (`examples:` 4 B ids) are updated with their prose corrected to match the
authored drafts.

**Checks actually run (final state):**
`precheck` on all 12 item paths — 11 PASS, 1 not-applicable (definition), 0 failing;
`proof-layout` on all 12 paths — 12 items, 98 steps, 0 defects;
`content-policy` on the manifest — 12 scoped items, 0 errors;
`manifest-deps` — 12 items, 0 errors;
`proof-contract --strict` — 12/12 items, 0 errors, 0 warnings;
`item-dependency-levels check` — the only error is the sibling
`ex-cg-reducible-semidefinite-forms-are-factorwise` (batch 27) level 15 vs computed 16; no
batch-11 id is named;
`validate-plan --pages-file` (this pair's two page ids) — page order acyclic and consistent;
items vacuous pending the Step-4 splice;
`frontier-item-gate --tool rendercheck` (whole run) — no error names a batch-11 item (the
remaining errors are sibling/missing-file findings);
`frontier-item-gate --tool depcheck` — no error or warning names a batch-11 item;
`coverage-checklist --require-destination` — 1 page, 34 harvested results, 0 errors;
`source-fetch-check` — 2/2 sources fetch-verified and resolved;
`frontier-dependency-ledger refresh` — exit 0, refreshed and deduplicated;
`step3-decisions record-item` × 12 — 5 accept/repaired, 7 escalate (see below).

**Added suppliers.** One recorded dependency addition inside the pair:
`thm-continuous-image-of-a-compact-space-is-compact` (published) added to
`lem-cg-local-geodesic-endpoint-stability` in both the item frontmatter and the manifest row,
declared in Facts [F3] and used in step 2.1 (compactness of $c([0,1])$), because the contract
gate requires every cited item to be declared; the level stays 10. No other item or page was
added, and no new pair was created.

**Open obligations / escalations (owner resolution required).**
1. `lem-cg-alexandrov-comparison-triangle-gluing` — spherical case $\alpha+\alpha'>\pi$ of
   clause (2) unproved (used by no item); plus the recorded hypothesis repair
   $d(C,B)+d(C,B')<D_\kappa$.
2. `lem-cg-local-geodesic-endpoint-stability` — step 3.2 alternating-thirds construction
   outlined; steps 4.1–7.1 of the same item depend on it, as does (transitively) the path-space
   lemma and the globalization theorem.
3. `lem-cg-local-geodesic-continuation-and-path-space-covering` — steps 2.1, 3.1 outlined.
4. `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` — Berestovskii cases (b), (c)
   outlined; also the Step-4 locator correction (I.3.14–I.3.17 → II.3.14–II.3.17).
5. `thm-cg-complete-simply-connected-local-cat-zero-globalization` — steps 3.1, 5.1 outlined.
6. `thm-cg-compact-local-cat-one-short-circle-criterion` — steps 1.4, 2.1 outlined; the
   compact-uniqueness criterion is not stated as a separate fact.
7. `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group` — clause (iv)
   consumes item 5 above; clauses (i)–(iii) stand on the comparison lemma alone.

**Step-4 amendments to the scaffold text (not applied to the manifest rows).**
(a) `lem-cg-comparison-convexity-and-model-spaces` clause (v) carries the explicit admissibility
hypothesis (see above); (b) `lem-cg-alexandrov-comparison-triangle-gluing` clause (i) states
$d(C,B)+d(C,B')<D_\kappa$ instead of the four-distance sum, and clause (2) adds the assertion
$\bar\alpha\ge\alpha+\alpha'$; (c) the cone criterion's BH locator prefix is corrected to II.3;
(d) the four published items `def-principal-inverse-sine-and-cosine` and
`def-real-and-complex-inner-product-space`/`cor-inner-product-induces-a-norm`/
`thm-cauchy-schwarz-in-an-inner-product-space` are now inside the plan-spec `requires` list, so
the earlier Step-3a tension is closed.
(e) **Item-versus-manifest dependency-list residue.** Three item frontmatter deps lists were
written by the earlier dispatches slightly differently from their manifest rows; the ledger and
the decision hash take the union, so no edge is lost and no level changes, but the Step-4 splice
should reconcile them: `lem-cg-alexandrov-comparison-triangle-gluing` and
`thm-cg-complete-simply-connected-local-cat-zero-globalization` cite the published
`def-cg-comparison-angle-and-alexandrov-angle` (used in Facts/proof, absent from their manifest
rows); `thm-cg-compact-local-cat-one-short-circle-criterion` declares the in-run
`lem-cg-local-geodesic-endpoint-stability`, which is cited nowhere in its body (same-batch, so
it raises no ledger edge). These rows were not edited after the decisions were recorded because
editing an item's bytes or its manifest row invalidates the recorded decision hash, and
escalated decisions may only be re-recorded by the owner. A fourth such residue, the
declared-but-unused in-run dep `thm-cg-polyhedral-chain-metric-topology-and-properness` on
`ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one`, created an unreviewed
cross-batch edge; it was withdrawn by removing the declaration from the item frontmatter and
the item's accept decision was re-recorded, so the batch-11 ledger now has 19 verified and 6
removed rows with no unreviewed edge.

**Sibling/published concerns routed (not edited; the serial reconciler owns the shared ledger).**
- `lem-cg-ordered-root-pairings-and-simple-systems` (batch 19) carries two editing artifacts in
  its proof: the tail of step 1.4 ends with the word "hmm" and step 1.5 consists only of "hmm" —
  probe, confidence high (direct read).
- `lem-cg-spherical-simplex-existence-and-link-gram-formula` (batch 8) cites
  `def-cg-euclidean-cone-and-spherical-join-metrics` in Statement/Facts without a deps entry
  (depcheck warning).
- `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` (batch 30) cites `def-metric-space`
  without a deps entry (depcheck warning).
- `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` (batch 15) cites
  `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` in Statement/Facts without a deps
  entry (depcheck warning).
- `ex-cg-reducible-semidefinite-forms-are-factorwise` (batch 27) declares dependency level 15
  against computed 16 (`item-dependency-levels`).
- Supplier-byte caveat: the batch-6/8 items consumed here were authored by sibling dispatches
  still in flight (last writes 21:25–21:34); the strict contract quotes above were verified
  against those bytes. If a supplier is edited again, the affected consumer decisions must be
  re-recorded.
