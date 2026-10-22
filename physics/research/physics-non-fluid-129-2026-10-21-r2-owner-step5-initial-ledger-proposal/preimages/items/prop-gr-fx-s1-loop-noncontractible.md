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
  - lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear
  - def-pullback-of-a-differential-form
  - prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
  - def-smooth-singular-simplex
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-gr-fx-thin-path-groupoid: mathematical-premise
  def-gr-fx-thin-paths: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges: mathematical-premise
  def-smooth-singular-simplex: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
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

[[def-pullback-of-a-differential-form]]

[[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]

[[def-smooth-singular-simplex]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** The unit circle $S^1$, the smooth based loop $\gamma$ above, and the thin-homotopy definition of [[def-gr-fx-thin-paths]].

[F1] [[def-gr-fx-thin-path-groupoid]]: the identity morphism at a point is the class of its constant path.

[F2] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: the nonempty regular level set $x^2+y^2=1$ is a smooth one-dimensional submanifold of $\mathbb R^2$.

[F3] [[def-smooth-differential-k-form]]: a smooth one-form is a smooth section of the cotangent bundle, so restriction of $x\,dy-y\,dx$ is a smooth one-form on $S^1$.

[F4] [[def-exterior-derivative-by-the-invariant-vector-field-formula]]: for a one-form $\alpha$, $d\alpha(X,Y)=X(\alpha(Y))-Y(\alpha(X))-\alpha([X,Y])$.

[F5] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a smooth differential form $\alpha$ and a finite smooth singular chain $c$, $\int_c d\alpha=\int_{\partial c}\alpha$.

[F6] [[def-integral-of-a-form-over-a-smooth-singular-simplex]]: on a smooth singular $1$-simplex $\sigma:[0,1]\to S^1$, $\int_\sigma\alpha=\int_0^1\alpha_{\sigma(t)}(\dot\sigma(t))\,dt$.

[F7] [[def-smooth-singular-simplex]]: a map from the standard simplex is a smooth singular simplex when it has a smooth extension to an open neighborhood of that simplex in its affine span.

[F8] [[def-pullback-of-a-differential-form]]: for a smooth map $\iota$, its pullback of a form is obtained by evaluating the form on the images of tangent vectors under $d\iota$.

[F9] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: pullback sends smooth forms to smooth forms.

[F10] [[lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear]]: the invariant formula is alternating and $C^\infty(M)$-multilinear, hence defines a smooth $(k+1)$-form. In degree one, its values on a tangent frame determine the resulting two-form.

## Proof

**Proof technique:** direct.

1.1 The map $f(x,y)=x^2+y^2$ has derivative $(2x,2y)$, which is nonzero on $f^{-1}(1)$; thus $1$ is a regular value and [F2] makes $S^1$ a smooth one-dimensional submanifold. Let $\widetilde\alpha=x\,dy-y\,dx$ be the ambient one-form on $\mathbb R^2$, let $\iota:S^1\hookrightarrow\mathbb R^2$ be inclusion, and put $\alpha=\iota^*\widetilde\alpha$, which is defined by [F8] and smooth by [F9]. The global tangent field $X=(-y,x)|_{S^1}$ spans each tangent line and satisfies $\alpha(X)=x^2+y^2=1$. By [F10], $d\alpha$ is a smooth two-form. By [F4], $d\alpha(X,X)=X(\alpha(X))-X(\alpha(X))-\alpha([X,X])=0$; since $X$ spans each one-dimensional tangent space, this gives $d\alpha=0$ intrinsically on $S^1$. Along $\gamma$, $\dot\gamma(t)=2\pi X_{\gamma(t)}$, so [F6] gives $\int_\gamma\alpha=\int_0^1 2\pi\,dt=2\pi$; the constant loop has integral zero. [given, F2, F3, F8, F9, F4, F6, F10, algebra]

2.1 Suppose a thin homotopy $H:[0,1]^2\to S^1$ joined $\gamma$ to the constant loop while fixing the basepoint at the path endpoints. Parametrize every curvilinear triangle in its finite subdivision by the specified smooth map from the standard two-simplex and compose that parametrization with $H$. By the smooth-up-to-boundary convention of [[def-gr-fx-thin-paths]], each composition has a smooth extension to a neighborhood of the standard simplex, so it is a smooth singular simplex by [F7]. Orient these finitely many simplices compatibly with the square and apply [F5] to each, then add the formulas. Each shared geometric edge occurs twice with opposite orientations. Choose one smooth reference parametrization $\sigma$ for such an edge; the two oriented face restrictions are $\sigma\circ\phi$ and the reverse of $\sigma\circ\psi$, for increasing smooth reparametrizations $\phi,\psi:[0,1]\to[0,1]$. By [F6] and one-variable substitution, their oriented integrals are $\int_\sigma\alpha$ and $-\int_\sigma\alpha$, so they cancel. The remaining terms are exactly the oriented square boundary under $H$. Step 1.1 gives $d\alpha=0$, hence Stokes gives zero for the total boundary integral. The two path edges have signed integral $2\pi$ or $-2\pi$ because one is $\gamma$ and the other is constant; the endpoint edges are constant and contribute zero. Thus the boundary integral is $\pm2\pi\ne0$, a contradiction. Therefore $[\gamma]$ is not the identity class. [given, F1, F5, F6, F7, step 1.1, assume-contra, discharge-contradiction] ∎
