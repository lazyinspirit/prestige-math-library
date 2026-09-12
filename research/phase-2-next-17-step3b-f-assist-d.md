# Step 3b group F supplemental authoring handoff to group D

Run: `phase-2-next-17`  
Dispatch: `step3b-f-cbc645e01ade9bb2`  
Owned batch/page: batch 7, A page `geodesics-the-exponential-map-completeness-and-hopf-rinow`  
Owned item: `lem-local-isometries-send-geodesics-to-geodesics`

This is a bounded authoring checkpoint for the active group-D author. It is not a Step-3 gate pass, independent audit, owner decision, or resolution of any owner-held escalation.

## Ownership and verified starting state

Before writing, both a repository-wide filename search and an exact-path test confirmed that `items/lem-local-isometries-send-geodesics-to-geodesics.md` was absent. The shared batch manifest already contained the scaffold row and the shared proof-contract scope already named the item, but the contract object, item file, and A page were absent. I wrote only the owned item and this handoff note. I did not edit the shared manifest, coverage, proof-contract, scope, decisions, page, plan, group-D report, frontier ledger, or published content.

## Authored claim and argument

The item now states the exact hypotheses: `F:(M,g)->(N,h)` is a local Riemannian isometry between smooth Riemannian manifolds without boundary; the parameter interval has nonempty interior; and the curve and vector field along it are smooth. It proves, locally around every source point, that `F` intertwines the two Levi-Civita connections. It then proves the induced along-curve identity

`D_t^N(dF(W)) = dF(D_t^M W)`

and applies it to `W=gamma'`. Thus every affinely parametrized source geodesic maps to an affinely parametrized target geodesic. Completeness, connectedness, surjectivity, global injectivity, and length minimization are explicitly absent from the hypotheses and proof.

The completed proof proceeds as follows.

1. Restrict the local isometry at one supplied point to a coordinate neighborhood `f:U->V` that is a Riemannian isometry.
2. Transport the target Levi-Civita connection back by `f`, and verify the connection axioms explicitly.
3. Prove bracket naturality by applying both brackets to an arbitrary smooth function; use it to prove the transported connection is torsion free.
4. Differentiate `g(Y,Z)=h(f_*Y,f_*Z) composed with f` and use target metric compatibility to prove source metric compatibility.
5. Apply uniqueness in the fundamental theorem of Riemannian geometry to identify the transported connection with the source Levi-Civita connection.
6. Expand an arbitrary field along a curve in the local coordinate frame to derive the covariant-derivative identity, then substitute the velocity field.
7. Check empty, zero-dimensional, one-dimensional, constant-curve, included-endpoint, and choice cases. No simultaneous family of neighborhoods is selected, so no form of AC is used.

## Source evidence

The source is Ved Datar, *Lectures on Riemannian Geometry*, Chapter 20, Theorem 20.1.1 and its proof, printed pp. 147-149, at `https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf`. The fetched 290-page PDF has SHA-256 `fab4114ca5142b8ee1b7eca52daa559494cf012fcde9318ad87c7c97a7652050`. I read the complete theorem statement, the intervening local-isometry consequences, and the complete proof steps through the covering and target-completeness conclusions.

The exact relevant source sentence on printed p. 148 is “ϕ takes geodesics to geodesics.” The geodesic-lifting paragraph on pp. 148-149 uses that sentence. Datar does not print the local connection-transport calculation at that point, so the item derives it from Levi-Civita uniqueness instead of treating the citation as a proof. The stronger Ambrose covering conclusion remains deferred exactly as the coverage ledger requires, and no minimizing-geodesic preservation is claimed. The phrase “By completeness of N” in the lifting paragraph is an evident notation typo for completeness of the source manifold named in Theorem 20.1.1; it is irrelevant to this local lemma, which assumes no completeness.

## Exact dependencies and uses

- `def-riemannian-isometry-and-local-isometry`: exact source excerpt, “A **local isometry** is a smooth local diffeomorphism with $F^*h=g$.” Used in steps 1.1, 2.1, 3.2, 5.1, and 7.1 for the local diffeomorphism, metric pullback, and pointwise-local argument.
- `thm-fundamental-theorem-of-riemannian-geometry`: exact source excerpt, “Every supplied smooth Riemannian metric on a smooth manifold, including a manifold with boundary, has exactly one Levi-Civita connection. The construction adds no choice assumption.” Used in steps 2.1, 3.1, 3.2, and 4.1 for the affine-connection structure, torsion/metric properties, and uniqueness.
- `def-geodesic-of-an-affine-connection`: exact source excerpt, “A smooth curve $\gamma:I\to M$ is an **affinely parametrized geodesic** when $D_t\gamma'(t)=0$,” followed there by the one-sided endpoint convention. Used in steps 5.1, 6.1, and 7.1 for the along-curve derivative convention, geodesic equation, constant case, and endpoints.

These are exactly the scaffold dependencies and they remain in that order. No Recorded result, forward reference, new item, additional pair, or choice principle is used. The along-curve derivative and affine-connection definitions occur in the transitive closure of `def-geodesic-of-an-affine-connection`; no dependency edge changed.

## Proof-contract payload for canonical integration

The shared proof-contract file already has this ID in `scope` but no entry under `contracts`. Group D should add one entry with the following exact maps.

Citation map:

- `F1 -> def-riemannian-isometry-and-local-isometry`, section `Definition`, using the exact excerpt and step list given above.
- `F2 -> thm-fundamental-theorem-of-riemannian-geometry`, section `Statement`, using the exact excerpt and step list given above.
- `F3 -> def-geodesic-of-an-affine-connection`, section `Definition`, using the exact excerpt and step list given above; include the displayed equation and following endpoint sentence in the stored quote so it is an exact contiguous excerpt.

Derivation map:

| Contract ID | Actual claim | Inputs |
|---|---|---|
| `step-1-1` | A local-isometry restriction can be shrunk to a coordinate-domain isometry `f:U->V`. | `F1`, `given` |
| `step-2-1` | Pulling the target derivative back through `f` is well defined and satisfies every affine-connection axiom. | `F1`, `F2`, `step 1.1` |
| `step-3-1` | Bracket naturality and target torsion-freeness make the transported connection torsion free. | `F2`, `step 2.1` |
| `step-3-2` | The pullback metric identity and target metric compatibility make the transported connection compatible with `g`. | `F1`, `F2`, `step 1.1`, `step 2.1` |
| `step-4-1` | Levi-Civita uniqueness identifies the transported connection with the source connection and yields the local intertwining formula. | `F2`, `step 2.1`, `step 3.1`, `step 3.2` |
| `step-5-1` | A local-frame calculation transports covariant differentiation of every smooth vector field along the curve. | `F1`, `F3`, `step 1.1`, `step 4.1` |
| `step-6-1` | Substitution of the velocity field proves preservation of the affine geodesic equation and identifies the hypotheses not used. | `F3`, `step 5.1` |
| `step-7-1` | Empty, zero, one, constant, endpoint, choice, and non-minimizing qualifications are discharged. | `F1`, `F3`, `step 1.1`, `step 5.1`, `step 6.1` |

Use `derivations` for all eight rows and `routine_steps: []`. Standard boundaries are:

- `empty`: checked in 7.1; there is no curve when the source is empty.
- `zero`: checked in 7.1; interval-valued curves into a zero-dimensional manifold are locally constant.
- `one`: checked in 7.1; the proof uses no positive-dimensional argument.
- `degenerate`: checked in 7.1; constant velocities and accelerations vanish.
- `endpoints`: checked in 7.1; step 5.1 is interpreted on a one-sided relative interval using `F3`.
- `nonempty-choice`: checked in 7.1; every local neighborhood is instantiated only after fixing one supplied point, and no family selection occurs.
- `iff-forward`: not applicable because the item states one-way geodesic preservation, not an equivalence.
- `iff-reverse`: not applicable for the same item-specific reason.

## Checks actually run

- Explicit-path precheck: pass after adopting its canonical dependency-layer labels `1.1, 2.1, 3.1, 3.2, 4.1, 5.1, 6.1, 7.1`.
- Explicit-path rendercheck: pass; YAML parses, all math parses under KaTeX, and there are no multiline display or delimiter defects.
- Focused citecheck: pass.
- Batch-7 coverage checklist with `--require-destination`: exit 0, zero errors and zero warnings.
- Batch-7 content policy: exit 1 with 17 `scope-item-missing` errors for other concurrent items and no finding naming this item. This is not represented as a batch pass.
- Focused strict proof-contract check: expected exit 1 solely because this ID has no shared contract entry; zero items were checked. The payload above is the required integration repair.
- The same contract payload was then supplied to the strict checker through `/dev/stdin`, without writing a third repository file: 1/1 item checked, zero errors, zero warnings.
- `validate-plan research/plan-spec.json`: exit 1 on the current pre-splice/global worktree, with no diagnostic naming this item. The visible failures are unrelated existing-item `dup-id` diagnostics. This is not represented as a plan pass.

No item decision was recorded, as this dispatch forbids editing decisions. No owner, judge, audit, or Step-3 stamp was added.

## Canonical integration needed from group D

1. Preserve the existing manifest row and direct dependency list. Add the item to the A page after `cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric` and before `cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image`.
2. Add an `included` Datar coverage row for this lemma at “Chapter 20, local-isometry consequences immediately before the proof of Theorem 20.1.1, printed p. 148.” Keep the existing Ambrose covering row deferred; the two rows concern different conclusions.
3. Add the proof-contract entry described above and rerun the focused strict contract check. Then rerun the required batch checks in the integrated state.
4. Record the non-owner Step-3 item decision only after that integration. The unchanged scaffold was fully realized, so `accept`, confidence `1`, with all three direct dependency IDs and the local transport/uniqueness calculation as evidence is the appropriate disposition unless group D makes a further repair.
5. Preserve the batch-7 same-page ordering and the existing page requirement on `connections-levi-civita-and-parallel-transport`; no new frontier dependency edge is needed. `research/plan-spec.json` still has an empty `items` array for this planned page, so Step 4 must splice the canonical batch manifest as usual.

## Published concern for owner reconciliation

Confirmed metadata/certification defect: published item `thm-fundamental-theorem-of-riemannian-geometry` on published page `connections-levi-civita-and-parallel-transport` is a proved-here theorem whose current frontmatter has only `verification.judge`; it has neither `verification.audited` nor `verification.verified`. This violates the published proved-here requirement in `SCHEMA.md` section 2. The complete proof was read for this lemma's use and its existence/uniqueness argument is mathematically sound on that reviewed scope, so this is not a suspected mathematical defect and does not prevent authoring the new local supplier. Before publication closure, the owner should arrange the required owner audit or delegated verification rather than infer it from the judge stamp. No published file or canonical published-consumer ledger was edited here.

## Final checkpoint

Completed ID: `lem-local-isometries-send-geodesics-to-geodesics`. No local suppliers were added. There is no unresolved mathematical or source uncertainty in the owned item. The only open obligations are the group-D canonical page/coverage/contract/decision integration, ordinary Step-4 plan splicing, and owner handling of the published supplier's certification metadata.
