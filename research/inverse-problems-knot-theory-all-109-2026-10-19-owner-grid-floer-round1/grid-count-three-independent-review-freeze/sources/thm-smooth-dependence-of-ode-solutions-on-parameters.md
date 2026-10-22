---
id: thm-smooth-dependence-of-ode-solutions-on-parameters
kind: theorem
title: "Smooth dependence of ODE solutions on parameters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smooth-dependence-of-solutions-on-initial-data, thm-picard-lindelof-local-existence-and-uniqueness, cor-uniform-picard-lindelof-for-nearby-initial-values, thm-mean-value-inequality-for-total-derivatives, thm-extreme-value-metric, thm-heine-borel-rn, thm-c1-dependence-of-solutions-on-initial-data, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/frontier-38-owner-30-published-ode-parameters-receipt.json
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Theorem 10.7"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §§4.2–4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
      locator: "Printed pp.13–16: uniform short-time contraction, time/parameter augmentation preserving joint C^p, and smooth flow via the variational/implicit-function argument"
pipeline_run: null
---

## Statement

Let $F(t,x,\lambda)$ be jointly $C^\infty$ in $(t,x,\lambda)$ on an open time-state-parameter
domain. Near any base data $(t_0,x_0,\lambda_0)$ there are a compact time
interval $I$ and a neighbourhood $W$ of $(x_0,\lambda_0)$ such that, for every
$(y,\lambda)\in W$, the solution of

$$x'(t)=F(t,x(t),\lambda),\qquad x(t_0)=y,$$

is defined on $I$, and the resulting solution map is smooth in the pair
$(y,\lambda)$.

## Facts & Assumptions

**Given:** An open domain $D\subseteq\mathbb R\times\mathbb R^n\times\mathbb R^m$, a jointly smooth field $F:D\to\mathbb R^n$, and $(t_0,x_0,\lambda_0)\in D$. Put $d=n+m$, $z=(x,\lambda)$, $z_0=(x_0,\lambda_0)$ and $G(t,z)=(F(t,x,\lambda),0)\in\mathbb R^d$.

[L1] For a smooth system on an established common compact local interval, its solutions depend smoothly on the initial state ([[thm-smooth-dependence-of-solutions-on-initial-data]]). We use this only for a jointly smooth field, so all derivatives entering its variational proof are jointly continuous.

[F1] A bounded total derivative on a convex open set gives a Lipschitz bound; closed bounded Euclidean cylinders are compact, and continuous norms on them are bounded ([[thm-mean-value-inequality-for-total-derivatives]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F2] Picard–Lindelof gives existence and uniqueness on a cylinder with field bound $M$, state-Lipschitz bound $L$, $hM\le r$ and $Lh<1$; nearby initial states share one such time interval and compact graph cylinder ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[cor-uniform-picard-lindelof-for-nearby-initial-values]]).

[F3] A classical solution is equivalent to its Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[F4] On a common compact interval the initial-state derivative exists, is continuous in that state, and solves the variational equation; the proof's difference-quotient and derivative-continuity estimates are uniform in time ([[thm-c1-dependence-of-solutions-on-initial-data]]). With jointly continuous state derivatives, those estimates and the variational equation also give joint continuity in time and initial state.

[F5] A linear matrix ODE with continuous coefficients has a unique solution on its given compact interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]). An affine linear equation is included by adjoining a constant component $1$; finite-dimensional multilinear-map spaces are represented by their coordinate arrays.

## Proof

**Proof technique:** direct.

1.1 The field $G$ is jointly smooth on the open time-state domain $D$. Its last $m$ equations are $\lambda'=0$, so the parameter is constant along each augmented solution. Thus projection to the first $n$ coordinates identifies augmented solutions through $(y,\lambda)$ with solutions of the displayed original IVP, in both directions. [given, construct, F3]

2.1 Choose $a,r>0$ so $[t_0-a,t_0+a]\times\overline B(z_0,2r)\subseteq D$. By [F1], $G$ and $D_zG$ have bounds $M\ge1$ and $L\ge1$ on this cylinder, and the mean-value inequality on each open state ball gives the same state-Lipschitz bound $L$. Choose $H>0$ with $H<a$, $HM<r$ and $HL<1$. For every initial state $z\in B(z_0,r)$, the radius-$r$ cylinder centred at $z$ lies in the larger cylinder. Hence [F2] gives a unique augmented solution $Z(t,z)$ on $J=[t_0-H,t_0+H]$, all of whose graphs lie in that one compact cylinder. This establishes the common interval needed below. [F1, F2, step 1.1, choose]

3.1 Now [L1] applies to the jointly smooth field $G$ on the common interval $J$ of step 2.1, and gives smooth dependence of $Z(t,z)$ on $z$ near $z_0$. We record why this dependence has the joint regularity needed for time derivatives. At first order, [F4] gives $X_1=D_zZ$ and $X_1'=D_zG(t,Z)X_1$, $X_1(t_0)=I_d$. The coefficient is jointly continuous; the uniform-in-time estimates in [F4], combined with continuity of the solution of this linear equation in time, make $X_1$ jointly continuous. The solution $Z$ itself is jointly continuous by the same initial-data estimates and its continuity in time. [L1, F4, F5, step 2.1]

4.1 The higher-order argument does not require a new existence assumption. For $r\ge1$, use the finite-dimensional jet variables $X_0,\ldots,X_r$, where $X_j$ is a $j$-linear map and $X_0\in\mathbb R^d$. Repeated chain rules in [F3] give $X_0'=G(t,X_0)$ and $X_j'=D_zG(t,X_0)X_j+P_j(t,X_0,\ldots,X_{j-1})$ for $j\ge1$, with $P_1=0$. Here $P_j$ is the finite sum over partitions of the $j$ differentiation directions into at least two nonempty blocks, applying the corresponding higher derivative of $G$ to the lower jets indexed by those blocks. Initial values are $X_0(t_0)=z$, $X_1(t_0)=I_d$ and $X_j(t_0)=0$ for $j\ge2$. This jet field is jointly smooth. For nearby full jet initial values, $X_0$ exists on $J$ by step 2.1; successively each higher component is affine linear with bounded continuous coefficients and forcing on $J$, so [F5] gives its evolution there. The same linear integral estimates bound each component uniformly for nearby initial values, giving a common compact jet cylinder for each finite order. Thus [F4] legitimately applies to this enlarged system on $J$. Starting with its first-order variational equation, differentiation of the Volterra identities and uniqueness in [F5] identify the prescribed jet with $(Z,D_zZ,\ldots,D_z^rZ)$. Its highest component is $C^1$ in the initial state, so these identities upgrade $C^r$ to $C^{r+1}$; this uses the highest component, not merely the first one. Induction, with the uniform estimates of [F4], gives joint continuity of all state derivatives. [F3, F4, F5, step 2.1, step 3.1, algebra]

5.1 The equation $\partial_tZ=G(t,Z)$ now supplies all mixed derivatives: differentiating it in state variables gives the chain-rule expressions in the jointly continuous state jets, and their displayed jet equations permit subsequent time differentiation. Induction on the time order, using joint smoothness of $G$, proves joint smoothness on the open time interval $(t_0-H,t_0+H)$ and the initial-state neighbourhood. Put $I=[t_0-H/2,t_0+H/2]$; the solution map on $I$ therefore extends smoothly to an open time neighbourhood. Projection as in step 1.1 gives the claimed common local solutions and smooth dependence on $(y,\lambda)$, including the endpoints of $I$. All solutions and all jet evolutions are uniquely determined by their IVPs; the Picard sequences use prescribed iteration and the argument makes no family selection or additional Choice assumption. [given, step 1.1, step 2.1, step 3.1, step 4.1] ∎
