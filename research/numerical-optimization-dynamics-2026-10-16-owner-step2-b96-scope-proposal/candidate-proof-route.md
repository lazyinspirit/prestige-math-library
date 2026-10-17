# Candidate construction for the original96 owner to prove and instantiate

This is a concrete proposed proof route, not a claim that a new lemma is already proved, published, applied or independently reviewed. No external paper was newly read by the intake preparer. Preserve the existing same-weight conditional gradient perturbation result and its column conventions exactly; add the missing method-to-error bridge within the existing pair. Do not replace or weaken the approved T12 tangent/gradient promise.

The actual controlling plan-numerical-optimization-track.md DIF3 scope and T12 amendment (lines1206–1276 at intake) promise augmented smoothness and stable order-p integration, with an augmented-system local/global-error proof. Merely assuming the desired joint global state/adjoint error leaves that bridge unbuilt. It is legitimate to state explicit local consistency/stability hypotheses; they must be actual augmented/local hypotheses with a proved global conclusion and a concrete matching numerical-method instantiation, not renamed global adjoint accuracy.

## Proposed smallest local bridge

For each exact interval define the exact state map Phi_n(x,theta) and exact running-cost increment K_n(x,theta)=integral of ell along that exact trajectory. Let Psi_n and L_n be the actual C1 numerical state map and actual numerical running-cost increment. On a fixed common controlled tube assume uniform order-p *local C1 consistency*: values and x/parameter first derivatives of Psi_n−Phi_n and L_n−K_n are bounded by C h^(p+1). Assume their state Jacobians have norm <=1+Lh; their increment derivatives and derivative-Lipschitz constants relevant to comparing two states are O(h), uniformly. State initial/tangent and terminal derivative data allowances explicitly. These are sufficient local derivative hypotheses; ordinary state order by itself is not one of these hypotheses.

Prove the state error e^x_(n+1)<=(1+Lh)e^x_n+C h^(p+1) and obtain max e^x_n=O(h^p) with the existing one-step global-error supplier. Let S_n be the derivative of the ACTUAL finite composition. Chain rule gives S_(n+1)=A_n S_n+B_n. Compare with exact interval derivatives at the exact state: bounded exact tangents, local C1 consistency and O(h) derivative-Lipschitz bounds yield
E^S_(n+1)<=(1+Lh)E^S_n+C h e^x_n+C h^(p+1).
Unroll the finite recurrence to prove max E^S_n=O(h^p), rather than assume it.

For the actual discrete adjoint, p^h_n=D_x L_n(x_n,theta)^T+D_x Psi_n(x_n,theta)^T p^h_(n+1). The continuous adjoint satisfies the exact interval identity
p(t_n)=D_x K_n(u(t_n),theta)^T+D_x Phi_n(u(t_n),theta)^T p(t_(n+1)),
by chain rule for the interval objective or the existing tangent/adjoint pairing identity. Bound the exact adjoint uniformly by its linear terminal ODE. With terminal derivative error O(h^p), subtract the identities to get
E^p_n<=(1+Lh)E^p_(n+1)+C h e^x_n+C h^(p+1).
Backward unrolling gives max E^p_n=O(h^p). This is the omitted global discrete-adjoint estimate from local hypotheses. It is a statement about nodal transpose-Jacobian adjoints of the ACTUAL method/objective, not arbitrary independently selected adjoint stages.

Finally use the exact discrete adjoint gradient formula: direct parameter cost derivatives and B_n^T p_(n+1) are O(h) per step. Their differences are O(h^(p+1)) after the preceding estimates. Sum N=T/h terms and add the initial/terminal derivative allowances to obtain the O(h^p) exact finite-graph gradient discrepancy. Alternatively derive the same gradient from the proved tangent and cost-tangent equations and use the exact discrete-adjoint telescoping identity. In either route the method bridge must connect to the actual discrete objective, not an unproved weighted q_n representation.

## Concrete matching RK instantiation

Use the selected finite RK tableau with the *same stages and weights* for state and running cost L_n=h sum_i b_i ell(t_n+c_i h,Y_i,theta). Differentiate the actual finite stage recurrences to prove exactly that the state tangent and the running-cost tangent are RK applied to the augmented system
u'=f, S'=f_u S+f_theta, c'=ell, G'=ell_u S+ell_theta
(with row/column types spelled out). Include initial and terminal terms. Apply the existing defect/stability/global-error theorem to this augmented system, under its own required smoothness, common augmented tube and derivative bounds. For explicit RK p<=4, inspect the actual prop-explicit-rk-order-conditions-through-four and sufficient smoothness of the AUGMENTED field (e.g. one extra derivative of f/ell may be needed); ordinary f in C4 cannot silently supply augmented C4. Generic p needs the explicitly assumed/proved matching method-specific augmented local order, not an assertion that the p<=4 supplier proves every p.

The same differentiated-stage argument, with arbitrary initial-state/parameter directions on the local interval and controlled derivatives, can establish the local C1 assumptions above. Prove the needed O(h) derivative increments/Lipschitz bounds by the finite stage formulas and bounded second derivatives. If invoking an implicit method, use its admitted exact stage branch and its separately verified local/derivative-order hypotheses; do not transfer explicit-RK order conditions automatically.

Avoid unnecessary nonzero-weight restrictions: the actual step-map reverse recursion can be used even when a transformed-stage adjoint formula would divide by a zero RK weight. Do not impose nonnegative RK weights on the NEW generic method theorem merely because the EXISTING weighted perturbation theorem uses nonnegative quadrature weights. Retain that existing conditional estimate, with its exact same-weight representation, as a separate richer quantitative result.

Original owner must determine the smallest exact lemma statements/IDs and prove every displayed recurrence and numerical-method connection, with real source dependencies. Existing main theorem can retain the weighted bound and gain the proved sufficient-method bridge, using one or two local intermediates rather than a new pair. Do not label established missing authoring an open problem.

## Three source-local fixes

- Implicit RK nonsingularity: retain the Statement's derivative bound only on the closed invariant convex ball. For Y,W in that ball the segment lies in the ball and F is C1 on its open surrounding neighborhood. Integrate DF along that segment (or prove scalar MVT directional bounds) to get ||F(Y)−F(W)||<=L||Y−W||. Thus no extra global-open-neighborhood derivative bound is needed; remove only stronger proof A1, replacing it with the actual segment argument. Nonsingularity proof remains the norm contraction plus rank-nullity. Verify the exact available vector-integral or mean-value supplier before citing.
- Multiple shooting: for u'=theta u, differentiation of e^(−theta t)u(t) proves any solution has u(t)=e^(theta t)s; use actual exponential/chain/product suppliers. Fix bounded neighborhoods |theta−theta0|<delta and |s−s0|<epsilon, extend the finite time interval slightly, and choose a bounded convex open time/state/parameter box with compact closure in D containing all trajectories (bound |u| by (|s0|+epsilon)exp((|theta0|+delta)T_ext)). This instantiates the common-tube lemma without narrowing arbitrary finite theta0,s0,tau. Keep the block Jacobian and gradient values.
- 4DVAR: name the two observation maps H_1=H_2=id, background x_b=0 and B=1, observations y_1=y_2=0 and R_1=R_2=1 (scalar covariance/precision identity), with model maps2x and3x. Then the published objective is exactly the displayed sum; gradient41theta is unchanged.

No source text is authorized to change by this proposal package. Original reviewer returns exact complete proposed local proof texts and dependencies first; root decides the final guarded repair and invalidates/rebases metadata bindings.
