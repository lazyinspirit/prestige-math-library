---
id: prop-gr-fx-s1-loop-noncontractible
kind: proposition
title: The once-around circle path is not thin-contractible
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-thin-path-groupoid
  - def-gr-fx-thin-paths
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - def-smooth-differential-k-form
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-gr-fx-thin-path-groupoid: mathematical-premise
  def-gr-fx-thin-paths: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, §2.1"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "PDF pp. 6–7, fixed-endpoint thin homotopies and the thin path groupoid; the circle obstruction below is proved locally by Stokes."
verification:
  precheck: pass
---

## Statement

Let $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ with its regular-level-set smooth structure. For $\gamma(t)=(\cos(2\pi t),\sin(2\pi t))$, $0\le t\le1$, the morphism $[\gamma]$ in $\Pi^{\mathrm{thin}}_1(S^1)$ is not the identity morphism at $(1,0)$.

## Statement references

[[def-gr-fx-thin-path-groupoid]]

[[def-gr-fx-thin-paths]]

[[thm-a-regular-level-set-is-an-embedded-submanifold]]

[[def-smooth-differential-k-form]]

[[def-exterior-derivative-by-the-invariant-vector-field-formula]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** The unit circle $S^1$, the smooth based loop $\gamma$ above, and the thin-homotopy definition of [[def-gr-fx-thin-paths]].

[F1] [[def-gr-fx-thin-path-groupoid]]: the identity morphism at a point is the class of its constant path.

[F2] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: the nonempty regular level set $x^2+y^2=1$ is a smooth one-dimensional submanifold of $\mathbb R^2$.

[F3] [[def-smooth-differential-k-form]]: a smooth one-form is a smooth section of the cotangent bundle, so restriction of $x\,dy-y\,dx$ is a smooth one-form on $S^1$.

[F4] [[def-exterior-derivative-by-the-invariant-vector-field-formula]]: for a one-form $\alpha$, $d\alpha(X,Y)=X(\alpha(Y))-Y(\alpha(X))-\alpha([X,Y])$.

[F5] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a smooth differential form $\alpha$ and a finite smooth singular chain $c$, $\int_c d\alpha=\int_{\partial c}\alpha$.

## Proof

**Proof technique:** direct.

1.1 The map $f(x,y)=x^2+y^2$ has derivative $(2x,2y)$, which is nonzero on $f^{-1}(1)$; thus $1$ is a regular value and [F2] makes $S^1$ a smooth one-dimensional submanifold. Define the smooth one-form $\alpha=x\,dy-y\,dx$ using [F3]. For the ambient coordinate vector fields, [F4] gives $d\alpha(\partial_x,\partial_y)=\partial_x(\alpha(\partial_y))-\partial_y(\alpha(\partial_x))-\alpha([\partial_x,\partial_y])=1-(-1)-0=2$, hence $d\alpha=2\,dx\wedge dy$. Every alternating two-form on a one-dimensional tangent space vanishes, so the restriction has $d\alpha=0$ on $S^1$. Along $\gamma$, $x=\cos(2\pi t)$ and $y=\sin(2\pi t)$ give $\alpha(\dot\gamma(t))=2\pi$ and $\int_\gamma\alpha=2\pi$; the constant loop has integral zero. [given, F2, F3, F4, algebra]

2.1 Suppose a thin homotopy $H:[0,1]^2\to S^1$ joined $\gamma$ to the constant loop while fixing the basepoint at the path endpoints. Apply [F5] to each smooth curvilinear triangle of a finite subdivision and sum; internal oriented edges cancel. Since [F4] and step 1.1 give $d\alpha=0$, Stokes gives $\int_{\partial[0,1]^2}H^*\alpha=0$. The two path edges have signed integral $2\pi$ or $-2\pi$ because one is $\gamma$ and the other is constant; the endpoint edges are constant and contribute zero. The nonzero boundary integral contradicts Stokes. Thus $[\gamma]$ is not the identity class. [given, F1, F5, step 1.1, assume-contra, discharge-contradiction] ∎