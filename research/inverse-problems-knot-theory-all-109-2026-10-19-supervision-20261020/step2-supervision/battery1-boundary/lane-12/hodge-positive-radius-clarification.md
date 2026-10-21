# Minimal positive-radius clarification packet

Research-only proposal by `/root/top_stable_normal_bundle`, owner-focused FIRST. No canonical body, provider proof, hash or contract has been changed.

## Actual domain and relevant estimate

`items/lem-normal-boundary-hodge-estimate-on-four-dimensional-balls.md`, Statement, introduces `B_r=B_r(0)` and the term `r^{-1}||a||_p` without repeating an explicit inequality on r. Its proof6.1 pulls back by `y↦ry` and divides by `r^{2-4/p}`. These operations require **r>0**, and neither the proof nor the boundary-normal approximation class defines a zero-radius ball estimate.

The actual Definition in `items/def-euclidean-spheres-and-closed-balls.md` introduces its Euclidean closed ball and sphere **for r>0**. Thus the natural ball/sphere convention already supplies positivity; spelling it out in the Hodge Statement removes a real domain ambiguity rather than proving or adding a new r=0 case. Proposed minimal insertion: “... `2≤p<∞`, **let r>0**, and `B_r=B_r(0)⊂R4` ...”. Preserve all estimates and every proof paragraph verbatim. Root decides and applies the clarification.

## Direct consumers checked at their actual use

Only the following two other canonical items directly cite the Hodge result. Their Statements and relevant supplier application passages were read; no wider analytic audit was performed.

- `lem-neumann-coulomb-gauge-correction-by-contraction`: its Statement explicitly works on the **closed Euclidean unit ball**. There is no radius-zero application.
- `lem-small-critical-curvature-coulomb-gauges-on-four-balls`: Fact F1 explicitly applies the Hodge estimate **on B1** for p=2,3. Its later proof8.1 separately rescales the general ball by `A_r(y)=rA(ry)` and `g(x)=g_r(x/r)`. This last rescaling also presupposes a positive radius; its Statement uses the same closed Euclidean ball terminology. If root chooses to repeat r>0 in that consumer's domain wording, that is a matching positive-radius clarification, not a new proof or additional estimate. Its Hodge invocation itself is already at r=1.

No empty-ball extension, generic Hodge reconstruction, changes to local-body exceptions, or analytic strengthening is proposed. All actual Hodge invocations inspected have positive radius.

## Root application

Root confirmed the explicit `r>0` Statement insertion is applied, recorded in `root-hodge-adoption.json`, with the original retained in `root-hodge-before.md`. The final lane proposal row therefore treats positivity as CURRENT wording, not an outstanding proposal. The exact original `before_row` is unchanged. No lane-author canonical edit or Hodge proof change was made.
