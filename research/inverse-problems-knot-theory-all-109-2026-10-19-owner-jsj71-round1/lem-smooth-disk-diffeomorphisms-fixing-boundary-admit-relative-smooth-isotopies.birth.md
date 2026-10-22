---
id: lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies
kind: lemma
title: "Relative smooth isotopies of disk diffeomorphisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-countable-choice, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms, lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit, thm-hopf-turning-tangent-theorem, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from smooth Jordan-disk collar adjustment. The planar flow, turning and fixed-input compact parameter constructions require no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S2 deforms to SO(3) smoothly"
      url: "https://arxiv.org/pdf/0912.2877"
      locator: "Version2, §3, PDF/printed pp.12–16: Proposition1.9/Theorem3.1, Lemma3.2, Theorem3.3 and boundary correction; only the fixed-input relative-square consequence is used and proved here"
---

## Statement

Assume countable choice. Let $f:D^2\to D^2$ be an orientation-preserving smooth diffeomorphism whose restriction to the boundary is the identity. There is a jointly smooth map $F:D^2\times[0,1]\to D^2$ with $F_0=f$, $F_1=\operatorname{id}$, each $F_t$ an orientation-preserving diffeomorphism, and every $F_t$ fixing the boundary pointwise. The family may be stationary near its time endpoints. If $f$ is already the identity on a neighborhood of the boundary, the entire family may fix one common smaller boundary collar.

More generally, the same assertion holds for a compact smooth disk with a supplied disk parametrization. This is a smooth isotopy assertion, not a radial Alexander extension with unverified smoothness at its center.

## Facts & Assumptions

**Given:** Countable choice and the disk diffeomorphism of the Statement.

[A1] Countable choice is [[def-countable-choice]].

[F1] Smooth Jordan disks have disk parameters, prescribed boundary collar maps extend, and the collar comparison is realized by a smooth ambient isotopy fixing the boundary circle ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement and Proof 5.1).

[F2] A smooth ODE has unique local solutions and smooth dependence on initial data and parameters ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F3] A precompact forward planar orbit of a $C^1$ field with no zeros in its compact limit set has a periodic orbit as that limit set ([[lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit]], Statement, the no-equilibrium case).

[F4] A simple regular closed plane curve bounding a disk has total tangent-angle change $2\pi$ or $-2\pi$ according to its orientation ([[thm-hopf-turning-tangent-theorem]], Statement); its smooth disk region is supplied by [F1].

[F5] An invertible differential gives a smooth local inverse, including for equations solved in local open extensions at boundary points ([[thm-euclidean-inverse-function-theorem]], Statement).

## Proof

1.1 First suppose the diffeomorphism is the identity on a boundary neighborhood. Conjugate its restriction to the open disk by a fixed smooth diffeomorphism $\operatorname{Int}D^2\to\mathbb R^2$, for example $x\mapsto x/(1-|x|^2)$. Its support becomes compact. A sufficiently large closed square contains that support in its interior; rescale it to $Q=[0,1]^2$. It suffices to construct a smooth isotopy for an orientation-preserving diffeomorphism $f:Q\to Q$ equal to the identity on a neighborhood of $\partial Q$, keeping one common smaller collar fixed. Extend such $f$ by the identity to the plane. No assertion that a round disk is diffeomorphic as a manifold with corners to a square is being used. [given, construct]

2.1 Put $Y_0=f_*e_1$, where $e_1=(1,0)$, so $Y_0(z)=Df_{f^{-1}(z)}e_1$. This is a smooth nowhere-zero field equal to $e_1$ on a fixed boundary collar. Write $Y_0=e^a(\cos\theta,\sin\theta)$ with $a,\theta$ smooth on $Q$ and zero on that collar. For an explicit angle, the one-form $$\omega=\frac{Y_0^1\,dY_0^2-Y_0^2\,dY_0^1}{|Y_0|^2}$$ is closed by differentiation. Its integral on the straight segment from $(0,0)$ to $z$ defines a primitive $\theta$ on the convex square: differentiating the integral and using the equality of its cross partials gives $d\theta=\omega$. The normalized field and $(\cos\theta,\sin\theta)$ then have the same logarithmic derivative and agree at $(0,0)$, so are equal everywhere. Since the boundary collar is connected and $\omega=0$ there, $\theta=0$ there. Take $a=\log|Y_0|$. Define $$Y_t=e^{(1-t)a}\bigl(\cos((1-t)\theta),\sin((1-t)\theta)\bigr).$$ Extend all these fields by $e_1$ outside $Q$. They are jointly smooth and nonvanishing, equal to $e_1$ on one common boundary collar, and join $f_*e_1$ to $e_1$. [step 1.1, construct]

3.1 None of the fields $Y_t$ has a periodic orbit. A regular periodic trajectory has a least positive period by its local flow box and uniqueness, and that period parametrizes a simple regular closed curve. Its unit tangent is the field direction. The globally defined angle $(1-t)\theta$, extended by zero off $Q$, would have zero total change on this curve. But [F1] supplies its disk region and [F4] makes the total tangent-angle change $\pm2\pi$, a contradiction. The fields have global flows: they and their first derivatives are bounded since their perturbations of $e_1$ have compact support, so a finite-time orbit cannot escape to infinity and [F2] extends it at every finite endpoint. An orbit starting at $(0,y)$ enters the square and must exit on the right. Indeed an interior orbit cannot meet the invariant horizontal boundary lines by uniqueness, cannot exit left where the field is $e_1$, and, if it never exited, it would stay in the compact square. Then [F3] would give the impossible periodic orbit. The same argument for backward time shows that every point in the square reaches its left edge backwards. At $y=0,1$ the trajectories are just horizontal straight lines. [A1, F1, F2, F3, F4, step 2.1, construct]

4.1 Let $\Gamma_t(s,y)$ denote this flow starting at $(0,y)$ at time zero, and let $r(t,y)>0$ be its first time at the right edge. It is smooth in $(t,y)$: near the exit solve $\Gamma_t^1(s,y)=1$ by [F5], whose $s$ derivative is $Y_t^1=1$ there. The analogous backward hitting-time equation gives smooth inverse flow coordinates for every point. Uniqueness prevents distinct starting labels from meeting and prevents a trajectory from meeting itself, by step 3.1. Thus $(s,y)\mapsto\Gamma_t(s,y)$ is a diffeomorphism from the variable strip $0\le s\le r(t,y)$ onto $Q$. Smooth dependence including boundary parameters follows from [F2] and [F5] using the extended fields. Compactness of $(t,y)\in[0,1]^2$ gives finite constants $0<m\le r(t,y)\le M$. The right-edge map $g_t(y)=\Gamma_t^2(r(t,y),y)$ is an increasing smooth interval diffeomorphism, and is the identity near the two endpoints: the field is exactly horizontal on fixed strips near the horizontal edges. [F2, F5, step 3.1, construct]

5.1 Choose a smooth function $\rho:[0,1]\to[0,1]$ equal to one near both endpoints, supported in sufficiently short end intervals, with $A=\int_0^1\rho<\min(m,1)/2$. Choose these intervals shorter also than the fixed straight-flow collar width. For $r\in[m,M]$ define $$v_r(x)=\rho(x)+\frac{r-A}{1-A}(1-\rho(x)),\qquad \chi(x,r)=\int_0^x v_r(u)\,du.$$ These functions are smooth, $v_r>0$, $\chi(0,r)=0$, $\chi(1,r)=r$, and $\chi(x,1)=x$. Near the left endpoint $\chi=x$, and near the right endpoint $\chi=r+x-1$, on fixed intervals independent of $r$. Therefore $$E_t(x,y)=\Gamma_t(\chi(x,r(t,y)),y)$$ is a jointly smooth diffeomorphism of $Q$. It equals $(x,y)$ near the left and horizontal edges and equals $(x,g_t(y))$ near the right edge. At $t=0$ uniqueness gives $\Gamma_0(s,y)=f(s,y)$, so $r(0,y)=1$ and $E_0=f$. At $t=1$ the field is $e_1$, so $r(1,y)=1$ and $E_1=\operatorname{id}$. [F2, step 4.1, construct]

6.1 Correct the moving right edge. Let $\beta:[0,1]\to[0,1]$ be smooth, equal to one near zero and zero near one. Define $$\Psi_t(x,y)=\bigl(x,\beta(x)y+(1-\beta(x))g_t^{-1}(y)\bigr).$$ Its second-coordinate derivative is positive; its endpoints in $y$ are $0,1$, so it is a diffeomorphism with jointly smooth inverse by [F5]. Near the left edge it is the identity, and near the right it is $(x,g_t^{-1}(y))$. Since $g_t$ is the identity on fixed end neighborhoods, it is also the identity near the horizontal edges. Hence $K_t=\Psi_t\circ E_t$ is the identity on one common collar of every edge. At $t=0,1$ the right-edge map is the identity, so $K_0=f$ and $K_1=\operatorname{id}$. All maps are orientation-preserving, starting so and having everywhere nonzero determinant. This proves the square assertion with joint smoothness, not just continuous dependence of its slices. [F5, step 4.1, step 5.1, construct]

7.1 Extend $K_t$ by the identity outside the square and undo step 1.1's conjugation. A fixed compact subset of the open disk contains all supports, so this is a jointly smooth disk isotopy fixing a common boundary collar. For a diffeomorphism fixing only the boundary pointwise, compare the collar $f\circ c$ with a chosen collar $c$. The explicit collar interpolation and ambient extension in [F1], Proof 5.1, give a smooth isotopy $k_t$ fixing the boundary circle such that $k_1\circ f$ is the identity on a smaller collar. Concatenate $k_t\circ f$ with the just constructed collar-fixed isotopy for $k_1\circ f$. Reparametrize the two time intervals by smooth functions constant near their endpoints and joins. This makes the total family jointly smooth up to and across its time endpoints and stationary there. If the original $f$ already fixed a collar, the preliminary correction is unnecessary. Conjugation by a supplied smooth disk parameter proves the final assertion. Every free selection was finite; [A1] is used only through [F1]. [A1, F1, step 1.1, step 6.1, construct] ∎
