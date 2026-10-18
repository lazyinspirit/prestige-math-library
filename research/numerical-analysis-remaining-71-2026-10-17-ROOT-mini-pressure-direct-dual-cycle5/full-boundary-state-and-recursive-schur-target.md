# Full boundary state and the actual global recurrence target

Research-only owner synthesis, 2026-10-18. This specifies the exact assembly required for the unfinished branching argument. It does not assert a cone, a small exterior pressure block, or an original pressure counterexample.

## 1. State and scaling

Use the seven boundary vertices of the fixed container in the polylogarithmic lift note. At scale r retain the fourteen nodal velocity components and seven potential values. Quotient the one-dimensional constant-potential gauge, for a twenty-dimensional boundary state. A convenient representative is

    s=(a_v, [phi(v)-phi(o)]/r : v on the boundary).

The root velocity a_o is part of this state. It is shared with the parent and must not be replaced by a new independent source at every generation. Both base-corner velocities and all inherited pressure differences remain in s.

For the mass mixed form (u,v)+(grad phi,v)+(u,grad q), dimensionless velocity and potential phi=r p give an overall factor r² in two dimensions. Let D_M be the normalized boundary Schur matrix after eliminating ONLY the interior of a depth-M container. It is symmetric and indefinite; the pressure gauge is its expected null direction before quotienting. Its input is the full state above and its output consists of the full boundary reactions, with the same gauge quotient. Zero-cell-mean velocity lifts bound selected reaction entries but do not delete other entries.

## 2. Exact recursion, including forcing

Fix one actual finite triangulated parent annulus, all child holes, and their vertex identifications. Let t denote ALL parent-annulus nodal velocity and pressure variables, including its external boundary and every child-hole boundary. The local bubble variables can be eliminated exactly. Let A be this finite mixed matrix. For a child c of relative radius rho_c, let E_c t be its dimensionless boundary state. In particular its pressure component is

    rho_c^(-1)[p(v)-p(o_c)],

not merely the unscaled restriction of p. Set

    H_M = A + sum_c rho_c² E_c^T D_(M-1,c) E_c.             (1)

Identifications are performed before the sum; a shared root or base endpoint is ONE variable. Split t=(t_I,s) into actual annulus interior/interface variables I and the parent exterior state s. Assuming the gauge-fixed block is invertible, the exact recurrence is

    D_M = H_BB - H_BI H_II^(-1) H_IB.                       (2)

For a genuine source vector F=(F_I,F_B), the condensed boundary source is

    g_M = F_B - H_BI H_II^(-1) F_I.                         (3)

If descendants themselves carry condensed sources g_c, first replace F by F + sum_c rho_c² E_c^T g_c with consistent physical source scaling. In the intended original-data construction the fixed smooth source is supported in one unchanged coarse triangle: there are NO independent descendant sources. Actual source propagation is therefore recovery through H_II^(-1), not repeated insertion of the root load. The nonzero bubble source and its induced pressure right-hand side must be included before (3).

Equations (1)–(3) are finite block Gaussian elimination identities. They apply to any explicitly triangulated fixed template, and do not require a limiting or ideal transfer matrix.

## 3. Why area estimates alone do not give the missing perturbation

In (1), the pressure part of E_c contains rho_c^(-1). Thus the pressure-pressure contribution has the exact scaling rho_c² rho_c^(-2)=1. A claim that every child mixed block is O(rho_c²) in an unscaled parent coefficient norm is false as a scaling argument. Smallness can follow only on a specified trace subspace with pressure differences O(rho_c), or from an explicitly proved weighted norm estimate. The polylogarithmic lift provides a bound on such differences when supplied; it does not prove that the actual solution trace belongs to that subspace.

Likewise, after fixing the current fan root velocity a and inherited exterior data b, the free fan equation has the form

    (L_fan + J_ff) x = f_fan(a) - J_f0 a - J_fb b + g_f.     (4)

For a reference state x_ref(a,b), its residual is the ENTIRE right side minus (L_fan+J_ff)x_ref. Neither J_f0 a nor J_fb b can be discarded. A parent's star around a child's shared root is not bounded by the child's area; that star is retained in the parent's A block. Only the interior of the child is eliminated into its D matrix.

Geometric separation required for a fan-local estimate is precise: any free fan vertex other than its root must meet no ancestor triangle. Its exterior incident triangles must lie in the current annulus or designated child containers. If a base-corner vertex is also an ancestor vertex, retain it as part of b instead of calling it a free fan vertex. A guarded background annulus can control the current annulus elimination only after proving its actual mixed Schur estimate; velocity-only graph decay does not bound pressure crossloads.

## 4. Exact affine-background quotient

For every actual local MINI triangulation, constant velocity u=a and affine potential phi=-a dot x solve every homogeneous interior mass momentum equation. They also solve every zero-boundary pressure equation, since the integral of grad q is zero. Their nonzero boundary pressure reactions are physical fluxes and cancel on assembly. Thus the boundary family

    a_v=a,    p(v)=-a dot (x_v-x_o)/r                      (5)

is an exact two-dimensional background family of the normalized local response. Restriction to a similar child gives the same constant a and the correctly transformed affine potential. The full recursion must preserve this family; it cannot be declared a small exterior perturbation of the isolated zero-cell-mean fan state.

A useful recurrence target is therefore a quotient or a tracked splitting into (5) and its complement, with inherited base pressure slope retained. The isolated fan state outer velocity -5a/31 and potential slope 3a/31 is an exact isolated block response, but its survival after the full matrices in (1) is an additional theorem.

## 5. Exact remaining target

A complete branching construction must supply one actual fixed triangulated template and either:

* a uniform invariant state set for (1)–(4), with a positive fraction of descendants retaining a quantitatively pressure-observed non-background component, including actual source and observation recovery; or
* a direct lower bound on the actual resolvent source-to-observation entry, avoiding pointwise transfer claims.

The required entry is (u_*, W_lambda q-W_h q), with fixed smooth exactly solenoidal u_*, ||q||_2<=1, and actual bounded divergence-load norm. A strict power lower bound lambda^(-gamma), gamma<1/4, along a fixed-shape family is sufficient by the completed finite-amplitude nonlinear realization note. An arbitrary discrete gradient source, Kq as initial data, or an isolated nonzero mode does not meet this target.

No such lower bound or invariant state set is proved in this note. The outstanding step is the actual global mixed recurrence with its inherited forcing, followed by the physical source-to-pressure observation.
