---
id: prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices
kind: proposition
title: "Small-time flow fixed point indices and vector field zero indices"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-fixed-point-index, thm-index-of-a-nondegenerate-fixed-point, lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent, def-isolated-zero-and-local-index-of-a-vector-field, def-nondegenerate-zero-of-a-vector-field, lem-vector-field-index-is-independent-of-chart-ball-and-trivialization, lem-negation-scales-the-local-index-by-minus-one-to-the-dimension, def-local-and-global-flow, def-integral-curve-of-a-vector-field, thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves, def-differential-of-a-smooth-map, def-manifold-chart-coordinate-domain-and-coordinate-functions, thm-smooth-inverse-function-theorem-on-manifolds, thm-degree-is-invariant-under-proper-smooth-homotopy, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, thm-index-of-a-nondegenerate-vector-field-zero, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed pp. 134-137 (the Proposition for a family tangent to the field at time zero, which explicitly assumes that for t != 0 the maps have no fixed point other than the zero; the normal-projection family pi(x + t v(x)) is then constructed to satisfy this assumption)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 55 (Examples 157-158: a zero of a vector field gives a fixed point of the flow, connecting to Poincare-Hopf)"
dependency_level: 5
---

## Statement

Assume countable choice ([[def-countable-choice]]) as in the vector-field
index suppliers. Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$, and let $X$ be a
smooth vector field on $M$ with an isolated zero at $p$
([[def-isolated-zero-and-local-index-of-a-vector-field]]).

**(i) Tangent families.** Let $t\mapsto f_t$ be a smooth family of maps defined
on a neighbourhood of $p$ with $f_0=\mathrm{id}$, tangent to $X$ at time zero, i.e.
$\frac{d}{dt}\big|_{t=0}f_t(x)=X(x)$ for every $x$, and suppose that there is a
neighbourhood of $p$ in which, for every sufficiently small $t\neq0$, the point
$p$ is the only fixed point of $f_t$. Then
$$\operatorname{ind}_p(f_t)=(-1)^n\operatorname{ind}_pX\quad(t>0),\qquad \operatorname{ind}_p(f_{-t})=\operatorname{ind}_pX\quad(t>0).$$

**(ii) The flow at a nondegenerate zero.** The local flow $\varphi$ of $X$
([[def-local-and-global-flow]], [[def-integral-curve-of-a-vector-field]]) is such
a family; if the zero $p$ is nondegenerate
([[def-nondegenerate-zero-of-a-vector-field]]), then the isolation hypothesis of
(i) holds for every sufficiently small $t\neq0$, so the two displayed identities
hold for $\varphi_t$: the small-time flow at a nondegenerate zero satisfies
$\operatorname{ind}_p(\varphi_t)=(-1)^n\operatorname{ind}_pX$ for $t>0$ and
$\operatorname{ind}_p(\varphi_{-t})=\operatorname{ind}_pX$ for $t>0$.

The sign $(-1)^n$ is the consistent short-time sign: the displacement
$\mathrm{id}-f_t$ is asymptotic to $-tX$ near a zero, so the two local indices
differ by the sign of $-\mathrm{id}$ on $\mathbb R^n$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ without boundary, $n\ge1$, a smooth vector field $X$ with isolated zero $p$; in (i) a tangent family $f_t$ as in the statement, in (ii) the local flow $\varphi_t$ of $X$.

[F1] On a smooth chart ball $B$ around $p$ on which $X$ vanishes only at $p$, the flow satisfies the integral identity $\varphi_t(x)=x+\int_0^tX(\varphi_s(x))\,ds$ and depends smoothly on $(t,x)$; hence $\widehat\varphi_t(u)=u+t\widetilde X(u)+t^2r(t,u)$ with $r$ smooth near $(0,0)$, where $\widehat\varphi_t$ and $\widetilde X$ are the chart representatives. More generally, a smooth family $t\mapsto f_t$ with $f_0=\mathrm{id}$ and $\frac{d}{dt}\big|_{t=0}f_t(x)=X(x)$ satisfies $\widehat f_t(u)=u+t\widetilde X(u)+t^2r(t,u)$ with $r$ smooth, and then $\widehat f_{-t}(u)=u-t\widetilde X(u)+t^2r_-(t,u)$ with $r_-$ smooth, because $\frac{d}{dt}\big|_{t=0}f_{-t}(x)=-X(x)$; this is the fundamental theorem of calculus applied twice to each coordinate ([[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]], [[def-local-and-global-flow]]).

[F2] The local fixed point index $\operatorname{ind}_p(\varphi_t)$ is the degree of the normalized chart displacement $v\mapsto(u-\widehat\varphi_t(u))(\varepsilon v)/|\cdot|$ on $S^{n-1}$, independent of admissible smooth chart and radius ([[def-local-fixed-point-index]], [[lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent]]); the local index of a smooth vector field with isolated zero is the same degree of its normalized chart representative, independent of smooth chart, ball and admissible trivialization ([[def-isolated-zero-and-local-index-of-a-vector-field]], [[lem-vector-field-index-is-independent-of-chart-ball-and-trivialization]]). Degree, and in dimension zero the reduced degree, is invariant under homotopies of maps of spheres ([[thm-degree-is-invariant-under-proper-smooth-homotopy]], [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]]).

[F3] Negation multiplies the local index of a vector field by $(-1)^n$ ([[lem-negation-scales-the-local-index-by-minus-one-to-the-dimension]]), and for a nondegenerate zero the index is $\operatorname{sign}\det DX_p$ ([[def-nondegenerate-zero-of-a-vector-field]], [[thm-index-of-a-nondegenerate-vector-field-zero]]).

[F4] The inverse function theorem: a smooth map of Euclidean open sets with invertible differential at a point is a local diffeomorphism there, and the manifold form applies in charts ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof

1.1 The expansion. Work in a smooth chart $(\varphi,U)$ at $p$ with $\varphi(p)=0$, write $\widetilde X$ for the chart representative of $X$ and $\widehat f_t$ for the chart representative of a family as in (i) or of the flow. By [F1], $\widehat f_t(u)=u+t\widetilde X(u)+t^2r(t,u)$ and $\widehat f_{-t}(u)=u-t\widetilde X(u)+t^2r_-(t,u)$ with $r,r_-$ smooth near $(0,0)$; for the flow, $\widehat\varphi_t(0)=0$ for all $t$, so the expansion gives $t^2r(t,0)=0$ and hence $r(t,0)=0$ near $t=0$. Choose $\varepsilon>0$ with $\widetilde X\neq0$ on $0<|u|\le\varepsilon$; then $c:=\min_{|u|=\varepsilon}|\widetilde X(u)|>0$. [given, F1, F2]

2.1 The index identities for a tangent family. Let the family of (i) satisfy its isolation hypothesis on a neighbourhood containing the closed ball $|u|\le\varepsilon$. For small $t>0$ the normalized displacement $v\mapsto(u-\widehat f_t(u))(\varepsilon v)/|(u-\widehat f_t(u))(\varepsilon v)|$ is defined, and by step 1.1 it equals $(-\widetilde X(\varepsilon v)-tr(t,\varepsilon v))/|-\widetilde X(\varepsilon v)-tr(t,\varepsilon v)|$. Since $|\widetilde X|\ge c$ on the sphere and $r$ is bounded there, for $|t|$ small every vector $-\widetilde X(\varepsilon v)-str(t,\varepsilon v)$, $s\in[0,1]$, has norm at least $c/2>0$; hence the straight-line homotopy in $s$ is one of nowhere-zero maps of $S^{n-1}$, and [F2] gives $\operatorname{ind}_p(f_t)=\deg\bigl(v\mapsto-\widetilde X(\varepsilon v)/|\widetilde X(\varepsilon v)|\bigr)=(-1)^n\operatorname{ind}_pX$ by [F3]. The same computation with $\widehat f_{-t}$ gives $\operatorname{ind}_p(f_{-t})=\deg(\widetilde X/|\widetilde X|)=\operatorname{ind}_pX$, again by [F2] and [F3]. [step 1.1, F2, F3]

3.1 The flow at a nondegenerate zero. The flow is tangent to $X$ at time zero and fixes $p$, so it satisfies all hypotheses of (i) except possibly the isolation one. Suppose $p$ is nondegenerate, so that $D\widetilde X_0$ is invertible, and consider $G(t,u):=(t,\widetilde X(u)+tr(t,u))$ near $(0,0)$; its differential at $(0,0)$ is block triangular with diagonal blocks $1$ and $D\widetilde X_0$, hence invertible. By [F4] $G$ is a local diffeomorphism at $(0,0)$, so there are $\alpha,\beta>0$ such that for $|t|<\alpha$ every solution of $\widetilde X(u)+tr(t,u)=0$ with $|u|<\beta$ is unique; the fixed points of $\varphi_t$ in the chart are exactly these solutions, and $u=0$ is one of them because $r(t,0)=0$ by step 1.1. Therefore for every $0<|t|<\alpha$ the point $p$ is the only fixed point of $\varphi_t$ in the ball $|u|<\beta$, the isolation hypothesis of (i) holds, and step 2.1 applied to $\varphi_t$ gives $\operatorname{ind}_p(\varphi_t)=(-1)^n\operatorname{ind}_pX$ and $\operatorname{ind}_p(\varphi_{-t})=\operatorname{ind}_pX$. No orientation of $M$ is used, and no further choice is used after the vector-field index suppliers. [step 1.1, step 2.1, F1, F2, F4] ∎

**The common isolating neighbourhood in (i) must be checked for a tangent family.** For $X(u)=u^3$ on $\mathbb R$ and $f_t(u)=u+tu^3-t^2u$, one has $f_0=\mathrm{id}$ and $\partial_t f_t|_{t=0}=X$, but for $t>0$ the fixed points are $0,\sqrt t,-\sqrt t$. They approach the isolated zero $0$, so no common isolating neighbourhood works for all small positive $t$. Part (ii) establishes the required common neighbourhood for the stated nondegenerate flow case. The normal-projection family in the Poincare–Hopf remark supplies it directly for arbitrary isolated zeros.
