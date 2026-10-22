---
id: ex-gr-fx03-1
kind: example
title: "A small diffeomorphism changes metric components but preserves proper time"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-fixed-gauge-data-topology
  - thm-gr-fx-finite-slab-stability
  - prop-gr-fx-geometric-observable-continuity
  - def-gr-fx-metric-pullback-comparison
  - def-gr-periodic-torus-and-sobolev-spaces
  - def-gr-smooth-lorentzian-objects
  - thm-smooth-inverse-function-theorem-on-manifolds
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-gr-timelike-worldline-and-proper-time
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - cor-mean-value-theorem
  - thm-intermediate-value
dependency_roles:
  def-gr-fx-fixed-gauge-data-topology: mathematical-premise
  thm-gr-fx-finite-slab-stability: mathematical-premise
  prop-gr-fx-geometric-observable-continuity: mathematical-premise
  def-gr-fx-metric-pullback-comparison: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-diffeomorphism-and-local-diffeomorphism-of-manifolds: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), Section 5.3: Cauchy stability and the role of coordinate gauge"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations, UC Davis lecture notes, revised 18 June 2014, Chapter 8, Sections 8.1 and 8.3: finite-interval symmetric-system estimates"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification, arXiv:1309.7591v3 (2015), Section 2, Definition 2.1 and Remark 2.5: induced metrics and diffeomorphism invariance"
      url: "https://arxiv.org/pdf/1309.7591"
verification:
  precheck: pending
---

## Statement

Let $M=\mathbb R\times\mathbb T^3_{2\pi}$ have coordinates $(x^0,x^1,x^2,x^3)$, with $x^0$ measured in metres and the angular $x^i$ dimensionless, and time orientation $N=\partial_0$. For lengths $L,\ell>0$, the flat Lorentzian metric
$$g=-(dx^0)^2+L^2\bigl((dx^1)^2+(dx^2)^2+(dx^3)^2\bigr)$$
has $g_{00}=-1$ dimensionless and spatial components with units of square metres. Let $0<|\epsilon|<1$ and define the smooth spatial diffeomorphism
$$\Phi_\epsilon(x^0,x^1,x^2,x^3)=(x^0,x^1+\epsilon\sin x^1,x^2,x^3),$$
where the periodic lift of its second component descends to the circle. Its pullback metric has
$$(\Phi_\epsilon^*g)_{11}=L^2(1+\epsilon\cos x^1)^2\ne L^2$$
at, for example, $x^1=0$, so the coordinate components change. Yet for the time-axis curve $\gamma(\lambda)=(\lambda,x_*)$, $0\le\lambda\le\ell$, the proper time computed from $\Phi_\epsilon^*g$ along $\gamma$ equals the proper time computed from $g$ along $\Phi_\epsilon\circ\gamma$; both are $\ell/c$. This is an exact diffeomorphism comparison. The fixed-gauge Sobolev estimate concerns coordinate fields in one gauge and does not itself identify arbitrary coordinate representatives.

```tikzcd
\begin{tikzcd}
[0,\ell] \arrow[r,"\gamma"] \arrow[dr,"\Phi_\epsilon\circ\gamma"'] & (M,\Phi_\epsilon^*g) \arrow[d,"\Phi_\epsilon"] \\
& (M,g)
\end{tikzcd}
```
The diagram commutes because its two paths send $\lambda$ to $\Phi_\epsilon(\gamma(\lambda))$. The vertical arrow is an isometry by the pullback definition; this diagram records the comparison and is not used as a proof.

## Statement references

[[def-gr-fx-fixed-gauge-data-topology]]

[[thm-gr-fx-finite-slab-stability]]

[[prop-gr-fx-geometric-observable-continuity]]

[[def-gr-fx-metric-pullback-comparison]]

[[def-gr-periodic-torus-and-sobolev-spaces]]

[[def-gr-smooth-lorentzian-objects]]

[[thm-smooth-inverse-function-theorem-on-manifolds]]

[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]

[[def-gr-timelike-worldline-and-proper-time]]

[[thm-sine-and-cosine-derivatives]]

[[cor-trigonometric-parity-and-pythagorean-identity]]

[[thm-sine-cosine-zero-sets-and-fundamental-period]]

[[cor-mean-value-theorem]]

[[thm-intermediate-value]]

## Facts & Assumptions

**Given:** $L,\ell>0$, $0<|\epsilon|<1$, the flat metric and map of the Statement, and the fixed proper-time constant $c>0$.

[F1] The Sobolev norm in the fixed-gauge context compares coordinate fields in one gauge and does not identify arbitrary coordinate representatives by a diffeomorphism ([[def-gr-fx-fixed-gauge-data-topology]]).

[F2] The stability theorem is a fixed-gauge estimate on a specified finite slab; its hypotheses keep the same coefficient family, chart grid and gauge ([[thm-gr-fx-finite-slab-stability]]).

[F3] The pullback is defined by $(\Phi^*g)_p(X,Y)=g_{\Phi(p)}(d\Phi_pX,d\Phi_pY)$ ([[def-gr-fx-metric-pullback-comparison]]).

[F4] A smooth map with invertible differential at a point is a local diffeomorphism ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F5] The Lorentzian metric has one negative and three positive directions, and a timelike vector has negative squared norm ([[def-gr-smooth-lorentzian-objects]]).

[F6] Proper time along a future timelike curve is $c^{-1}\int\sqrt{-g(\dot\gamma,\dot\gamma)}\,d\lambda$ ([[def-gr-timelike-worldline-and-proper-time]]).

[F7] On a fixed finite interval, proper-time integrals of uniformly timelike converging metric-curve pairs converge under the hypotheses of the observable proposition ([[prop-gr-fx-geometric-observable-continuity]]).

[F8] Sine and cosine are differentiable with derivatives $\cos$ and $-\sin$, respectively, and the standard values at zero hold ([[thm-sine-and-cosine-derivatives]]).

[F9] Sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F10] $|\sin x|\le1$ for every real $x$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F11] If a differentiable real function has positive derivative throughout an interval, the mean-value theorem makes it strictly increasing there ([[cor-mean-value-theorem]]).

[F12] A continuous function on a closed interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[F13] A diffeomorphism is a bijective smooth map whose inverse is smooth ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F14] The spatial domain is $\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$ and smooth periodic maps descend to the quotient ([[def-gr-periodic-torus-and-sobolev-spaces]]).

**Proof technique:** direct coordinate calculation.

## Proof

1.1 Lift the circle map to $F_\epsilon(x)=x+\epsilon\sin x$ on $\mathbb R$. By [F8], repeated differentiation makes $\sin$ smooth, and its first derivative gives $F_\epsilon'(x)=1+\epsilon\cos x\ge1-|\epsilon|>0$. The mean-value theorem [F11] makes $F_\epsilon$ strictly increasing. Periodicity [F9] gives $F_\epsilon(x+2\pi)=F_\epsilon(x)+2\pi$, and boundedness [F10] gives $F_\epsilon(x)-x$ bounded; hence its limits at the two ends of $\mathbb R$ are $\pm\infty$. For any real target, choose endpoints with the target between their images and apply [F12]; strict increase gives uniqueness of the preimage. Thus $F_\epsilon$ is bijective. Its derivative never vanishes, so [F4] makes the inverse smooth locally at every point, hence globally smooth. The translation identity makes the map and inverse descend to smooth inverse maps on the circle in [F14]; extending by the identity in the other coordinates gives a bijective smooth map with smooth inverse, hence the diffeomorphism $\Phi_\epsilon$ by [F13]. [given, F4, F8, F9, F10, F11, F12, F13, F14, algebra]

1.2 In these coordinates $d\Phi_\epsilon$ is diagonal with entries $1$, $1+\epsilon\cos x^1$, $1$, $1$. Applying [F3] to the diagonal bilinear form gives $$(\Phi_\epsilon^*g)=-(dx^0)^2+L^2\bigl((1+\epsilon\cos x^1)^2(dx^1)^2+(dx^2)^2+(dx^3)^2\bigr).$$ At $x^1=0$, $(1+\epsilon)^2\ne1$ because $0<|\epsilon|<1$, so the component arrays differ. Since $1+\epsilon\cos x^1\ge1-|\epsilon|>0$, the displayed diagonal matrix has one negative and three positive entries and is Lorentzian by [F5]. [step 1.1, F3, F5, algebra]

2.1 The curve $\gamma(\lambda)=(\lambda,x_*)$ has tangent $\partial_0$ and is future timelike for $g$ with $g(\dot\gamma,\dot\gamma)=-1$. Since $\Phi_\epsilon$ fixes $x^0$ and acts only on spatial coordinates, $\Phi_\epsilon\circ\gamma$ is also a unit-coordinate-time axis and $g((\Phi_\epsilon\circ\gamma)',(\Phi_\epsilon\circ\gamma)')=-1$. By [F3], $(\Phi_\epsilon^*g)(\dot\gamma,\dot\gamma)=g((\Phi_\epsilon\circ\gamma)',(\Phi_\epsilon\circ\gamma)')=-1$. Formula [F6] therefore gives proper time $c^{-1}\int_0^\ell1\,d\lambda=\ell/c$ on both curves. [step 1.2, F3, F5, F6, algebra]

2.2 The proper-time value is one of the finite-domain geometric observables treated in [F7]; here its equality is exact. The metric component change in step 1.2 is compatible with that equality because [F1] and [F2] define the analytic estimate in one fixed gauge, whereas [F3] compares the pulled-back geometric field. Thus the coordinate component difference alone is not a difference of the corresponding proper-time observable. [step 1.2, step 2.1, F1, F2, F7, algebra] ∎ 