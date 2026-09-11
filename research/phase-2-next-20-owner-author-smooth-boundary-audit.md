# Smooth author: prescribed boundary faces obstruction

Read-only mathematical support for the delegated smooth author. No canonical items, shared manifests, coverage, contracts, decisions, engine state, or publication ledger were changed. The sole written file is this note.

## Finding and exact scope

**Confirmed counterexample, complete elementary proof below:** arbitrary compatible smooth faces of a 3-simplex mapping to a manifold with boundary need not admit a smooth filling, even if their union has a continuous filling and the prescribed face homotopies are constant. They also need not admit a target-valued smooth neighbourhood extension near their union. No AC is used.

The target in the counterexample is the standard manifold with boundary `[0,infinity)`. Each prescribed face extends smoothly INTO that target on its entire affine plane, so the obstruction respects the strong smooth-simplex convention.

The current fragment entry `lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension`, at `research/phase-2-next-20-owner-author-smooth.pages.json:448`, explicitly states “For a boundaryless target”. This counterexample does **not** refute that stated boundaryless result. It refutes its contemplated boundary-target variant and the unrestricted boundary-target interpretation of `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces` (same fragment, entry beginning at line 465). The latter statement is still a strategy sentence, and its proof plan explicitly says boundary targets remain held. Thus this is an exact mathematical reason for maintaining that owner-held branch, not a newly discovered false published theorem.

## 1. A globally compatible family of strictly smooth faces

Write the standard affine tetrahedron as

`D = {(x,y,z) in R^3 : x,y,z >= 0, x+y+z <= 1}`.

Let `sigma` be the standard smooth step function, and put

`rho(s) = 1 - sigma(4s-1)`.

Then rho is smooth on R, rho=1 for s<=1/4, and rho=0 for s>=1/2. The fully read definition `items/def-the-standard-smooth-step-function.md`, Definition and Remarks, supplies exactly smoothness and those endpoint properties of sigma. Its supplier `items/thm-the-standard-flat-function-is-smooth-and-flat-at-zero.md` was also read in full. Equivalently any smooth function with these explicit plateau properties works.

On the four faces set

* `g_z(x,y,0) = (x-y)^2 rho(x+y)^2`;
* `g_y(x,0,z) = (x-z)^2 rho(x+z)^2`;
* `g_x(0,y,z) = (y-z)^2 rho(y+z)^2`;
* `g_0(x,y,z) = 0` on `x+y+z=1`.

Every displayed map is smooth and nonnegative on the WHOLE affine plane of its face: it is a product of squares, or zero. Thus every face is a smooth singular 2-simplex into `[0,infinity)` in the required extension-into-target sense.

Two coordinate faces intersect in an axis edge. On the x-axis edge, for instance, both restrictions are `x^2 rho(x)^2`; the other two axes are identical computations with y and z. A coordinate face meets the fourth face where its two remaining coordinates sum to 1. There rho(1)=0, so its restriction is zero, exactly g_0. These six checks establish every pairwise compatibility; further vertex compatibility follows by restriction. In particular this is global face compatibility, not merely compatible germs at one vertex.

## 2. The faces admit an explicit continuous filling

Put

`q(x,y,z) = x^2+y^2+z^2-2xy-2xz-2yz`,

and define on D

`F(x,y,z) = max(q(x,y,z),0) rho(x+y+z)^2`.

This is continuous and nonnegative. On z=0 one has q=(x-y)^2>=0, giving precisely g_z; on the other two coordinate faces the same calculation gives g_y and g_x. On the fourth face rho(1)=0, giving g_0. Thus F is a continuous singular 3-simplex with these exact smooth restrictions.

If the relative smoothing formulation asks for prescribed compatible homotopies of the original faces, take `H_i(u,t)=g_i(u)` for every t in [0,1]. These are constant compatible homotopies from the restrictions of F to the prescribed smooth maps. They are even smooth in the strict extension sense, since the face extensions above may be made independent of t on the whole real time axis. Consequently adding compatible prescribed homotopies does not remove this obstruction.

## 3. No smooth filling exists

Suppose a smooth filling G existed. Its extension to a neighbourhood of D, composed with the standard target coordinate, would be a smooth real function h with h|D=G and with the given face restrictions. In fact the following contradiction only needs a C^2 real extension and nonnegativity on D; it does not need target-valuedness outside D.

1. The axis restrictions near 0 are h(t,0,0)=t^2, h(0,t,0)=t^2, and h(0,0,t)=t^2 for small t>=0. Hence h(0)=0, Dh(0)=0, and the three diagonal second partial derivatives at 0 equal 2. These conclusions use ordinary one-sided restrictions of a C^2 function, whose one-sided derivatives agree with its derivatives.
2. On the z=0 face, h(t,t,0)=0 for small t>=0. Differentiating this one-variable restriction twice at 0 gives `h_xx(0)+2h_xy(0)+h_yy(0)=0`, so h_xy(0)=-2. The corresponding restrictions h(t,0,t)=0 and h(0,t,t)=0 give h_xz(0)=h_yz(0)=-2.
3. The Hessian is therefore `[[2,-2,-2],[-2,2,-2],[-2,-2,2]]`. Its value on v=(1,1,1) is v^T Hess(h)(0) v=-6. Second-order Taylor expansion along the single line tv gives `h(t,t,t)=-3t^2+o(t^2)` as t tends to 0 from above.
4. For sufficiently small positive t with 3t<=1, (t,t,t) belongs to D but the last expression is negative. This contradicts G(D) being contained in `[0,infinity)`.

The same argument refutes a smooth neighbourhood extension of the union of the faces: such an extension is defined at 0 on an ambient open neighbourhood, hence at (t,t,t) for all sufficiently small t, and target-valuedness again implies nonnegativity there. A relative open neighbourhood within D with an ambient-smooth scalar extension is equally impossible.

There are no degenerate, zero-dimensional, endpoint, or choice exceptions needed to assert this counterexample: it is the one explicit dimension-3 witness, and every face/time endpoint was checked above. It makes no claim about the validity or invalidity of analogous extension results in dimensions 1 or 2.

## 4. Existing Whitney supplier and inward-push candidate

`items/thm-relative-whitney-approximation-for-manifold-valued-maps.md` was read in full. Its Statement requires that F be “smooth on an open neighbourhood of A”; its Facts [L1] uses an embedding and “an open U containing S, and a smooth retraction R:U to S.” Facewise smoothness is not that neighbourhood hypothesis. The counterexample shows the missing hypothesis cannot always be manufactured when the target has boundary.

A retraction from an open real neighbourhood of 0 onto `[0,infinity)` that fixes `[0,infinity)` cannot be smooth: its right derivative at 0 would be 1, while its nonnegative values and value 0 at the interior source point 0 force its derivative to be 0. Thus the boundaryless tubular-retraction argument cannot simply be reused with this target. This is a limitation on extrapolation, not an allegation that the published supplier itself claims that generality.

`research/phase-2-next-20-topology-owner-boundary-interior-push.md` was read in full. Its opening expressly says “This does not claim to prove the more demanding prescribed-face smoothing theorem into a boundary target.” Its finite-chart push changes boundary face values, so it avoids the obstruction rather than resolving it. The candidate remains a viable strategy for the homology comparison `thm-smooth-singular-chains-compute-singular-homology`, subject to the main author's full supplier audit and authoring. This note has not audited its complete prerequisite closure.

## 5. Proposed owner action and evidence limits

Keep and prove the existing boundaryless neighbourhood-extension statement. Escalate any promised unrestricted boundary-target prescribed-face clause as **false with this witness**. The owner may authorize replacing that branch by a boundaryless relative-smoothing statement plus a separately proved finite inward-push supplier for homology comparison. Another mathematically valid restriction is requiring that the prescribed faces already admit a target-valued smooth neighbourhood extension; this is strictly stronger than mere compatibility and requires an appropriate approximation proof. No statement/inventory change is made here and no owner-held decision is overridden.

Published concern classification: **no confirmed published defect established in this audit**. The exact failed extrapolation targets are the two draft IDs above, with the boundaryless scope qualification retained. The relative Whitney supplier's full dependency closure and the collar theorem are outside this bounded audit; no ledger classification change is warranted from this note alone. The canonical serial ledger writer should deduplicate any wider supplier concerns separately.

Source record: the repo passages listed above were read completely; no external source was fetched, quoted, or represented as checked. The counterexample and contradiction are derived explicitly here from elementary smooth calculus, without uncertain external theorem use. No failed source retrieval or retry was performed; existing retry histories were not changed. No rendering/precheck/contracts command was run because this is solely an authorized research note, not a canonical authored item or proof contract. No independent review stamp or item decision was added.
