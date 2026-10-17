# Unapplied scientific containment repair proposal

Run: `physics-remaining-80-2026-10-17`. Scientific owner: `/root/step5_containment_science`. Subject: `pthm-emg-weak-slow-test-motion`. Review/repair cycle: 1, diagnosis and proposal only. No canonical source, contract, manifest, ledger, snapshot, native output or state was edited. No production gate, judge, certification, or post-repair review was performed. This is no acceptance stamp.

The exact distinct fatal referral in native `step5-v2-initial-r1-u19.json` is confirmed. The mathematical supplier requires a compact convex state set `Q subset K x R3` containing both scaled trajectories. The physical theorem supplies only an unspecified compact convex state set. Its proof 1.1 consequently cannot assert an exact hypothesis match, and proof 2.1 cannot import the uniform remainder and comparison bound. Uniform coefficient bounds on K do not control trajectories outside K. This is a missing spatial-containment hypothesis, distinct from the original rejected Maxwell-sector objection.

The smallest repair is to name the existing common state set as Q and require `Q subset K x R3`, carrying that condition through the worldline hypothesis, Given, F2, A1 and the two existing proof steps. The proposed physical-scope wording says the same thing. Preserve the original force equation, both quantitative conclusions, speed and parameter regimes, local potential construction, action sector, AC_omega qualification, and absence of any inhomogeneous Maxwell or Einstein equation. No new prerequisite or source-field restriction is needed. Keep all three original u19 false-positive decisions, reasons, model/context tuples and reviews exactly as native history; the full original file is archived.

## Actual source and proof evidence

`archive/` preserves genuine raw bytes copied from the workspace, with source paths and SHA-256 values in `read-bindings-initial.json`. I read the complete current claim, facts and proof of the subject and its four direct suppliers:

- `thm-emg-weak-slow-test-lorentz-limit`: Statement's compact convex Q condition, full proof 1.1–6.1. Its inverse-metric, proper-time, Christoffel and raised-field estimates require bounds at the relativistic position. Its integral comparison uses convex Q and the derivative bound along the segment between the two states. Requiring Q's spatial projection to lie in K supplies precisely these missing spatial-domain uses.
- `post-emg-background-maxwell-test`: complete Postulate. The massive charged-probe local action in paragraph 2 is separately adopted; the final paragraph explicitly says that Maxwell and probe assumptions are not deductions from one another. The subject expressly selects that action sector. It does not need paragraph 1's source-free or prescribed-source Maxwell branch.
- `lem-emg-local-potential-construction`: complete Statement and proof 1.1–4.1. The smooth radial primitive on a star-shaped coordinate ball follows by differentiating its compact-interval integral and using closure. No global exactness or stationary potential is needed.
- Published `pthm-rpm-external-charge-action-equivalence`: complete Statement and proof 1.1–4.1. Its finite C2 future-timelike proper-time segment, supplied C2 local potential, fixed-endpoint local variations and AC_omega are retained. Pointwise use of local potentials and endpoint continuity require no selection of a global potential atlas.

The physical theorem's current Statement line 52 says only “on a compact convex state set containing both trajectories”; line 54 says “remains in that common state set”. The mathematical supplier's Statement line 75 instead says “a compact convex state set $\mathcal Q\subseteq\mathcal K\times\mathbb R^3$, containing both trajectories”. The subject's F2 omits that inclusion and proof 1.1 says its assumptions match exactly. These exact full carriers are archived, so the evidence is more than a paraphrase or an inferred snapshot.

The displayed metric estimates in the physical item are the supplier's K-local estimates (its field bounds explicitly refer to K); the proposal makes the missing trajectory-domain link explicit. A stronger global-bounds interpretation would add an unstated hypothesis and would not preserve the intended exact supplier interface. The counterexample below is for the K-local hypotheses identified by the native referral and the exact mathematical supplier.

No external full-text retrieval or reading is claimed by this outside review. Literature references remain contextual; the defect and repair are checked from the actual local conditional proof. `research/math-imports.json` was inspected for these identifiers: none of the subject or its four direct suppliers is an imported mathematical snapshot. Published RPM content and all imported/root mathematics remain untouched.

## Independently verified smooth counterexample

Use SI numerical values c=L=alpha=m=q=1, Omega=R3, K the closed unit ball about 0, phi=0, e=e1, b=0. Put X*=10 e1. For an explicit smooth positive lapse, define h(u)=exp(-1/u) when u>0 and h(u)=0 when u<=0, let

`chi(s)=h(4-s)/(h(4-s)+h(s-1))`, and `a(X)=1+chi(|X-X*|^2)`.

The denominator is positive for every real s. Thus a is smooth, 2 on the closed unit ball about X*, and 1 outside the radius-2 ball about X*. In particular it is 1 on an open neighborhood of K. Prescribe g=-a(X)^2 (dx0)^2+sum_i(dxi)^2, and F=-epsilon dx0 wedge dx1. This is a global smooth stationary Lorentzian background with future-timelike partial_0, and the global smooth A=epsilon x1 dx0 gives dA=F. The metric remainders and all their derivatives vanish near K; the e/b bounds there are fixed and finite. No inhomogeneous Maxwell equation is required by the selected action sector.

Start both scaled states at (X*,0), and take S*=1/4. In the constant-lapse-2 patch, set u=epsilon tau/2 and define

`x0(tau)=sinh(u)/epsilon`, `x1(tau)=10+2(cosh(u)-1)/epsilon`, `x2=x3=0`.

Then U0=(1/2)cosh(u), U1=sinh(u), so g(U,U)=-cosh(u)^2+sinh(u)^2=-1. The curve is smooth future timelike and tau is proper time. Christoffel symbols vanish in this patch. Raising F gives F^0_1=epsilon/4 and F^1_0=epsilon, and direct differentiation yields dU0/dtau=(epsilon/4)U1 and dU1/dtau=epsilon U0. It therefore solves the exact Lorentz law, and the retained action-equivalence premise gives local stationarity as required.

Since t=x0 and S=sqrt(epsilon)t, its scaled trajectory is exactly

`W_epsilon(S)=2S e1/sqrt(1+epsilon S^2)`,

`X_epsilon(S)=X*+[2(sqrt(1+epsilon S^2)-1)/epsilon] e1`.

The comparison is W_N=S e1 and X_N=X*+(S^2/2)e1. For 0<epsilon<=1 and 0<=S<=1/4, |W_epsilon|<=1/2 and |X_epsilon-X*|<=S^2<=1/16, while |W_N|<=1/4 and |X_N-X*|<=1/32. Thus both states lie in Q=closed_ball(X*,1) x closed_ball(0,1), compact and convex, and the exact coordinate speed is at most (1/2)sqrt(epsilon). The relativistic curve stays entirely in the constant-lapse patch. The comparison field f=(W,e1) has l1 derivative norm 1 on Q. This Q lies outside K; that is the missing hypothesis.

Differentiating the exact velocity gives W_epsilon'=2(1+epsilon S^2)^(-3/2)e1. At S=0 the scaled residual against f is exactly e1, whose l1 norm is 1 for every epsilon. No fixed finite C_r can bound this by C_r epsilon as epsilon tends to zero. At S*=1/4 the velocity error tends to 1/4, so the finite-time conclusion also fails. This independently verifies both the force solution and the contradiction in the native witness.

## Actual affected-use closure

`closure-initial.json` records a current full-item metadata scan resolving aliases and traversing deps, justified_by, forward_refs and external_refs. The only strict downstream item is `ex-emg-ml-b08`, through deps. There are no aliases to the subject or this consumer, no justified_by consumers, no further indirect consumers, and no additional linked item mentions outside that closure. A separate literal search over item/page bodies found only the subject, this example and their A/B home pages. `historical-interfaces.json` checks the retained old source preimages and all available same-run historical page manifests containing this subject. Their same sole supplier-to-consumer edge is retained. Step-3 pre/post/post-3a hash snapshots are archived as historical hash evidence; no absent old source is reconstructed from a hash. Current run manifest dependencies and source dependencies agree.

I read the full Example, assumptions and Verification 1.1–3.1 of `ex-emg-ml-b08`. Its explicit orthogonal exponential flows preserve |W|=|W_N|=|W0| and give both position displacements <=S*|W0|. Choose K=closed_ball(X0,1+S*|W0|) in Omega=R3, and Q=K x closed_ball(0,|W0|). Both are compact convex, Q subset K x R3, both scaled trajectories stay in Q, and f=(W,W cross b0 ez) has a finite constant derivative bound. Minkowski remainders vanish globally and the constant field is bounded on this K. Zero W0 gives a singleton velocity factor and still works. Thus the repaired hypothesis is satisfied. The Example's full displayed epsilon range remains established by its independent direct rotation/integral calculation; its relation to the general theorem remains limited to sufficiently small epsilon as already stated. No consumer source edit is necessary.

There is a metadata consequence: this Example's owning contract citations F1 and F2 each quote the subject's entire old Statement. Those quotes must follow the repaired Statement even though the Example's claim and proof are unchanged. The exact two field replacements are supplied separately with consumer-owner scope. They require fresh native affected-use checking, not an outside acceptance stamp.

The A-page `emg-mp03.md` says the weak/slow result requires its explicit hypotheses, including common compact containment. It summarizes the conditional theorem and introduces no stronger independent estimate. With the repaired theorem this still reads correctly; no page edit is necessary. Its B-page `emg-mp03-examples.md` describes the exact constant-magnetic comparison and introduces no new supplier application. The separate mathematical example `ex-emgmath-ml-b08` uses the mathematical theorem directly, not the changed physical theorem, and is outside the affected closure.

## Proposal and native handoff conditions

`unapplied-source.diff` is the complete source diff, and `proposed-source.md` is its full preview. `unapplied-contract-fields.json` supplies guarded exact before/after values for the theorem's F2 citation and both derivation claims, plus the two consumer quotation fields. It identifies the theorem's stale “No defect found” risk review for replacement by the actual native owner after review; no new reviewer identity, complete status or acceptance is invented here. `unapplied-manifest-fields.json` supplies the exact owning page-manifest Statement and physical_scope replacements. Dependency edges, roles, identity, inventory, source references and levels do not change.

Before applying anything, Root/native intake must require drained writers, exact current-source guards against the preserved preimages, the separate canonical distinct fatal finding, and the original unchanged u19 tuple history. The fresh authorized native Sol-high owner must review current suppliers and both theorem proof steps, apply the containment correction, reconcile the owning contract/manifest, and report affected uses. The later consumer owner must refresh the two full-statement contract quotes and record the actual affected-use check. If any bound source or contract/manifest field has evolved, rebuild the proposal against actual current inputs rather than overwrite another writer.

This outside scientific owner has supplied diagnosis and unapplied proposals only. Root retains routing, canonical ledger closure, recertification and native transition authority. No claim of post-repair review or gate readiness is made.
