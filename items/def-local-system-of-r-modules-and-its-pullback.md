---
id: def-local-system-of-r-modules-and-its-pullback
kind: definition
title: Local systems and pullback
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-fundamental-groupoid-of-a-space, def-functor-and-contravariant-functor, def-natural-transformation, prop-modules-and-homomorphisms-form-category-rmod]
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §3, pp.103–107
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Fix a commutative unital ring $R$. A **left $R$-module local system** on a
space $X$ is a covariant functor
$$\mathcal L:\Pi_1(X)\longrightarrow R\text{-}\mathbf{Mod},$$
where the source is [[def-fundamental-groupoid-of-a-space]], functor means
[[def-functor-and-contravariant-functor]], and the target is the category in
[[prop-modules-and-homomorphisms-form-category-rmod]]. Write
$\mathcal L_x$ for its value at $x$ and
$$T_\gamma=\mathcal L([\gamma]):\mathcal L_x\longrightarrow\mathcal L_y$$
for transport along a path $\gamma:x\to y$. Every arrow of the source has a
reversed inverse, so functoriality makes every $T_\gamma$ an isomorphism, with
$T_{\bar\gamma}=T_\gamma^{-1}$ and
$T_{\alpha*\beta}=T_\beta T_\alpha$.

A **morphism of local systems** $\eta:\mathcal L\to\mathcal K$ is a natural
transformation ([[def-natural-transformation]]): it is a family of
$R$-linear maps $\eta_x:\mathcal L_x\to\mathcal K_x$ satisfying
$$\eta_yT^\mathcal L_\gamma=T^\mathcal K_\gamma\eta_x$$
for every path $\gamma:x\to y$. Isomorphisms of local systems are natural
isomorphisms.

A continuous map $f:X\to Y$ induces a functor
$\Pi_1(f):\Pi_1(X)\to\Pi_1(Y)$ by $x\mapsto f(x)$ and
$[\gamma]\mapsto[f\gamma]$. Postcomposition preserves constants, reversals,
and concatenation, so this is well defined. The **pullback local system** is
$$f^*\mathcal K=\mathcal K\circ\Pi_1(f),\qquad (f^*\mathcal K)_x=\mathcal K_{f(x)},\qquad T^{f^*\mathcal K}_\gamma=T^\mathcal K_{f\gamma}.$$
Pullback of a coefficient morphism is defined componentwise. Thus
$(gf)^*=f^*g^*$ and $1_X^*$ are literal equalities of functors with these
conventions.

All definitions work independently on every path component. The empty space
has the unique empty local system. No basepoint, universal cover, common fiber,
or choice principle is required.

For later comparison with group rings, if $x$ is fixed and
$g=[\alpha]\in\pi_1(X,x)$, the base fiber is given the **left monodromy
convention**
$$g\cdot m:=T_{\bar\alpha}(m).$$
The reversal is essential: covariance and first-path-first multiplication give
$T_{\alpha*\beta}=T_\beta T_\alpha$, so
$T_{\overline{\alpha*\beta}}=T_{\bar\alpha}T_{\bar\beta}$, exactly the left
action law $(gh)m=g(hm)$.
