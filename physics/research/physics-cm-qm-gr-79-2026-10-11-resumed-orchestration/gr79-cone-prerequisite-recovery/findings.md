# Native 79 cone prerequisite recovery — cycle 1, cap 2

Research-only complete candidate for `lem-gr-dominating-cone-bounds`. Production content, production metadata, imports, readiness, engine state and active authors were not changed. The parent owns full supplier/consumer review and integration. Pending verification metadata remains in `candidate.md`; the local receipts are not an acceptance stamp.

## Frozen raw context

`archive/` holds 20 raw source/context files. `frozen-context.json` records the exact source paths, raw SHA-256 hashes and git HEAD `753c7941ab3974e7827f151085d6547469b90b66`, preserving cycle 1 and cap 2. `currentguard.json` binds the complete candidate's raw hash and compares every current source and archive against those frozen bytes. At guard generation all 20 archives and all 20 current sources matched. This is an observation, not a writer lock; the parent must recheck before integration.

## Exact confirmed failure and uniform repair

The old clause (e) is false. `counterexample.md` supplies the explicit global Minkowski chart z0=t-F(x), z1=x, F=x-x^3/3 and the relatively compact region 0<x<1/2 with bounded other chart coordinates. The gradient is past timelike at every point of that open region because its squared norm is -2x^2+x^4<0. For the fixed future null vector partial_t+partial_x, v0=x^2 and v1=1, so the normalized ratio is x^(-2), unbounded at the boundary x=0. Euclidean-coordinate unit normalization preserves the ratio. Exact Fraction-arithmetic values along x_n=2^(-n) are recorded in `counterexample-values.json`; the analytic ratio 4^n supplies the divergence, independently of the finite numerical list.

The replacement preserves the richest sound uniform statement: every compact base set K inside the past-timelike locus of a chart has a uniform cone bound, including full Euclidean coordinate norm and full spatial norm. In particular it holds over every relatively compact open region whose whole closure is still strictly temporal. Merely pointwise temporal regions retain local estimates at every point and uniform estimates on every compact subset. No claim of a uniform bound at a null boundary is made.

The compact normalized future cone is taken only over such a K. It is closed using the weak orientation inequality together with nonzero unit normalization; causal vectors cannot be orthogonal to the timelike orientation field. The time component is exactly g(grad z0,v)=-lambda g(m,v)>0. Thus its minimum beta is strictly positive on the actual compact temporal cone. The former proof extended its base set to a closure on which temporalness was not assumed, then asserted this positivity anyway; that extension is the source of the false uniform bound.

## Preserved and repaired adapted-chart construction

All of (a)-(d) are retained, with their full observer-adapted identity n=partial_x0, constant g00=-1, orthonormal center, uniform outer cone, causal graph and constant c=16 minorant cone.

The projection T(w)=w+g(w,n)n annihilates n and fixes n-perp, rather than fixing the normal line. Its restriction to the original spatial complement is an isomorphism to n-perp. Orthogonalize its projected spatial basis w_k and write v_i=sum_k C^k_i w_k. The correct inverse coordinate transformation is the full shear

ysp=C xsp, y0=x0+sum_i a_i xi, a_i=sum_k C^k_i g(e_k,n).

Then partial_x0=n throughout the chart and partial_xi=v_i at the center. A spatial-only transformation preserving the old time coordinate cannot add these needed normal components. The source proof's attempted zeroth row of an inverse spatial matrix is not an admissible spatial coordinate change.

A closed ball wholly inside the new coordinate temporal locus permits the repaired compact-cone argument. Simultaneously choose its metric perturbation operator norm from eta below1/4. On unit eta16-causal directions, eta(e,e)<=-15/17; hence the same ball makes every such direction strictly g-timelike. Its straight coordinate segments stay inside the convex ball, and their time sign determines the future/past chronological direction.

The graph bound is written for the actual Euclidean spatial norm, so it yields a K-Lipschitz R^3-valued graph with the same K, as well as all componentwise inequalities. A componentwise estimate alone would only give sqrt(3)K in the Euclidean vector norm. The candidate obtains the stronger same-K vector bound directly from beta and integrates it.

## Choice refinement and exact source use

At the parent's request, Countable Choice and Dependent Choice are stated explicitly **only for general absolutely continuous curve clause (c)**. Its actual causal-curve calculus and fundamental-theorem suppliers state both assumptions. The candidate uses their full chain-rule/integration conclusions there; it does not claim a choice-free proof of that general curve clause.

Clauses (a),(b),(d),(e) take the given smooth observer structure and pointwise adapted-chart supplier, finite-dimensional linear algebra and compact normalized cone. They are not uniformly strengthened merely because (c) uses AC calculus. The smooth coordinate straight segment in (d) has affine coordinate components, hence direct absolute continuity; finite subdivision and bounded smooth transition derivatives verify the same in other charts. Thus (d) does not invoke the stronger general integration theorem.

The candidate retains every old dependency and role and adds the two explicitly used choice IDs plus `lem-gr-observer-projection-decomposition`, whose actual projection identities and positivity proof establish the rest-space facts. No source, import or production dependency was rewritten.

One separate exact context defect was found in that projection supplier: its step3.2 says h(f0)=0 for a generic orthonormal timelike f0, although only h(n)=0 is automatic. Its kernel/image identities and the positivity calculation in step2.3 are sound independently of that sentence. The cone candidate uses those clauses and derives the needed basis directly from the projection restricted to the spatial complement; it does not use the flawed f0-span calculation. The parent was notified and owns any surgical supplier repair. No new unproved geometry fallback is needed for this cone candidate.

## Owning-consumer integration pointers

The public change to (e) requires the parent's direct/indirect consumer pass. Uses over compact causal cylinders remain supported after checking that their entire compact closures lie inside the temporal locus. A consumer that only assumed temporalness on a relatively compact open set must either exhibit a closure-temporal smaller set or localize to compact interior sets; the counterexample prevents certifying its old uniform assertion unchanged. (a)-(d) keep their local adapted chart scope and constants. Consumers of general curve clause (c) must carry the actual Countable and Dependent Choice assumptions or supply an independent finite/smooth curve argument. This worker made no consumer integration edits.

## Actual checks

A valid canonical phase proposal was adopted, including its step-reference renumbering. After the final choice refinement and explicit smooth-segment argument:

- `node tools/tsx-run.mjs tools/precheck.mts physics/research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-cone-prerequisite-recovery/candidate.md --json`: exit0, one file/proof, zero failures; `precheck-final.json`.
- `node tools/rendercheck.mjs physics/research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-cone-prerequisite-recovery/candidate.md --json`: exit0, one file, zero errors/warnings; `render-final.json`.
- `node tools/proof-layout.mjs physics/research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-cone-prerequisite-recovery/candidate.md`: exit0, one item, seven steps, zero defects; `proof-layout-final.txt`.

These are actual syntax/render/layout checks, not independent mathematical acceptance or a gate attempt. No external full text was newly retrieved/read; references retain the archived source carrier's provenance. The actual local suppliers listed above were read directly.
