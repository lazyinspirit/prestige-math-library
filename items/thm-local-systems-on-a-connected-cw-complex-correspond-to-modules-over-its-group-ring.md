---
id: thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring
kind: theorem
title: Local systems correspond to group-ring modules
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-local-system-of-r-modules-and-its-pullback, prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group, thm-group-actions-and-group-ring-modules-correspond, def-cw-complex-with-closure-finiteness-and-weak-topology, def-axiom-of-choice]
proof_strategy: constructive
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §§1,3, pp.95–97, 103–107
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Assume AC. Let $X$ be a nonempty connected CW complex, choose $x\in X$, and
let $R$ be a commutative unital ring. Evaluation at $x$, with left action
$$[\alpha]\cdot m=T_{\bar\alpha}(m),$$
is an equivalence from the category of left $R$-module local systems on $X$
to the category of left $R[\pi_1(X,x)]$-modules. A family of paths from $x$
constructs a quasi-inverse. The equivalence is canonical up to natural
isomorphism, not a literal equality independent of those paths.

## Facts & Assumptions

**Given:** $X,x,R$ as in the statement and the Axiom of Choice.

[F1] [[def-local-system-of-r-modules-and-its-pullback]] defines transports,
coefficient morphisms, and the displayed left monodromy convention.

[F2] [[prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group]] identifies the published loop group with the categorical
vertex group by reversal.

[F3] [[thm-group-actions-and-group-ring-modules-correspond]] identifies
$R$-linear left actions of a group with left modules over its group ring,
including equivariant maps.

[F4] [[def-axiom-of-choice]] permits a simultaneous selection from the
nonempty sets of paths from $x$ to the other points of $X$.

[F5] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] supplies
characteristic disks whose images are the closed cells and the weak-topology
test against every closed cell.

## Proof

**Proof technique:** constructive.

1.1 A connected CW complex is path connected. The image of each characteristic disk is path connected, so it lies in one path component. Hence every path component $P$ intersects each closed cell either in the whole cell or not at all. Both $P$ and its complement therefore have closed intersection with every closed cell, and the weak-topology test in [F5] makes both sets closed. Thus $P$ is also open; connectedness leaves only one path component. Consequently the set of paths $x\to y$ is nonempty for every $y\in X$. Use [F4] once to choose such a path $p_y$, taking $p_x=c_x$. [F4, F5, given, choose]

1.2 For a local system $\mathcal L$, give $\mathcal L_x$ the action in the statement. If $a,b$ are loop classes, covariance gives $T_{ab}=T_bT_a$ and hence $T_{\overline{ab}}=T_{\bar a}T_{\bar b}$; therefore $(ab)m=a(bm)$. Constants act identically and reversals act inversely. The operators are $R$-linear, so [F3] extends this action uniquely to an $R[\pi_1(X,x)]$-module. Naturality makes the component $\eta_x$ of every coefficient morphism equivariant. This defines the evaluation functor $E$. [F1, F2, F3]

2.1 Conversely let $M$ be a left $R[\pi_1(X,x)]$-module. Define a local system $Q(M)$ with every fiber equal to the underlying $R$-module $M$. For a path $\gamma:y\to z$, put $\ell_\gamma=[p_y*\gamma*\bar p_z]\in\pi_1(X,x)$ and $Q(M)([\gamma])(m)=\ell_\gamma^{-1}\cdot m$. Endpoint-fixed homotopies do not change $\ell_\gamma$. Constants give the identity. If $\gamma:y\to z$ and $\delta:z\to w$, cancellation of $\bar p_z*p_z$ gives $\ell_{\gamma*\delta}=\ell_\gamma\ell_\delta$, so $Q(M)(\gamma*\delta)=(\ell_\gamma\ell_\delta)^{-1}\cdot-=\ell_\delta^{-1}\cdot(\ell_\gamma^{-1}\cdot-)=Q(M)(\delta)Q(M)(\gamma)$. Thus $Q(M)$ is a covariant functor. A module map, used on every fiber, is a natural transformation by equivariance; hence $Q$ is a functor. [F1, F3, step 1.1, construct]

3.1 Since $p_x$ is constant, for a loop $a$ at $x$ the action obtained by evaluating $Q(M)$ is $a\cdot m=Q(M)(\bar a)m=a\cdot m$. Hence $EQ$ is literally the identity on modules and their maps. For a local system $\mathcal L$, define $\varepsilon_y:Q(E\mathcal L)_y=\mathcal L_x\to\mathcal L_y$ by $\varepsilon_y=T_{p_y}$. The action on $E\mathcal L$ and the definition of $Q$ give $Q(E\mathcal L)(\gamma)=T_{p_y*\gamma*\bar p_z}$. Therefore $T_{p_z}Q(E\mathcal L)(\gamma)=T_\gamma T_{p_y}$, so $\varepsilon$ is a natural isomorphism $QE\mathcal L\to\mathcal L$. It is natural in $\mathcal L$ because coefficient morphisms commute with every $T_{p_y}$. [F1, step 1.2, step 2.1]

4.1 Steps 1.2–3.1 exhibit the required equivalence. A second chosen path family produces another $Q'$ and the component $[p_y*\bar p'_y]^{-1}$ acting on $M$ gives the natural isomorphism $Q(M)_y\to Q'(M)_y$; the same cancellation as in step 2.1 proves naturality. Thus path choices affect the displayed model but not its natural-isomorphism class. The only AC use was the point-indexed family in step 1.1; for a one-point space only the constant path is needed, while the empty case is excluded by the chosen basepoint. [F4, F5, step 1.1, step 2.1, step 3.1, discharge-construct] ∎
