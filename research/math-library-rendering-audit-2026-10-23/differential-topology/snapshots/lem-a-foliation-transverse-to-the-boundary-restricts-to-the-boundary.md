---
id: lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary
kind: lemma
title: "Restriction of a foliation transverse to the boundary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-embedded-submanifold-and-slice-chart, def-a-smooth-map-transverse-to-an-embedded-submanifold, def-regular-foliation-atlas, def-leaf-of-a-regular-foliation, cor-codimension-one-frobenius-criterion, thm-the-exterior-derivative-commutes-with-pullback, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, thm-regular-foliations-and-integrable-distributions-correspond, lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.3, printed pp. 145-146"
---

## Statement

Let $W$ be a smooth $(n+1)$-manifold with boundary and let $F$ be a
codimension-one regular foliation of $W$ transverse to $\partial W$, i.e.
$T_p(\partial W)+T_pF=T_pW$ for every $p\in\partial W$. Let $\omega$ be a
nowhere-vanishing smooth defining $1$-form for $F$. Then: (i) $T_p(\partial
W)\cap T_pF$ has dimension $n-1$ for every $p\in\partial W$, and these subspaces
form a codimension-one regular foliation $F|_{\partial W}$ of the smooth
$n$-manifold $\partial W$; (ii) the restriction $\omega|_{\partial W}$ is nowhere
vanishing and defines $F|_{\partial W}$, with $\omega|_{\partial W}\wedge
d(\omega|_{\partial W})=0$; (iii) every leaf of $F|_{\partial W}$ is a connected
component of $L\cap\partial W$ for a leaf $L$ of $F$, with the intersection taken in the intrinsic leaf topology; (iv) if $F$ is
transversely oriented by $\omega$, then $F|_{\partial W}$ is transversely
oriented by $\omega|_{\partial W}$; (v) if $\eta$ is a $1$-form on $W$ with
$d\omega=\eta\wedge\omega$, then the pullback of $\eta$ to $\partial W$
satisfies $d(\omega|_{\partial W})=(\eta|_{\partial W})\wedge(\omega|_{\partial
W})$.

## Facts & Assumptions

**Given:** A smooth $(n+1)$-manifold $W$ with boundary, a codimension-one regular foliation $F$ of $W$ transverse to $\partial W$, and a nowhere-vanishing smooth defining one-form $\omega$ for $F$.

[F1] For a smooth map of manifolds, pullback sends smooth forms to smooth forms, is functorial, and satisfies $F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta$ ([[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]], and for boundary manifolds [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

[F2] For every smooth map $F$ and every form $\omega$ on the target, $d(F^*\omega)=F^*(d\omega)$ ([[thm-the-exterior-derivative-commutes-with-pullback]], and for boundary manifolds [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

[F3] For a nowhere-zero one-form $\alpha$, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$ ([[cor-codimension-one-frobenius-criterion]]).

[F4] For $p\in\partial M$ of a manifold with boundary and the inclusion $i:\partial M\hookrightarrow M$, the differential $di_p$ identifies $T_p\partial M$ with the hyperplane of boundary-tangent vectors in $T_pM$ ([[prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]]).

[F5] On a manifold, an integrable rank-$k$ distribution defines a regular foliation atlas whose leaves are its maximal connected integral manifolds ([[thm-regular-foliations-and-integrable-distributions-correspond]]).

## Proof

**Proof technique:** direct.

1.1 Write $i:\partial W\hookrightarrow W$ for the inclusion and fix $p\in\partial W$. By [F4] the subspace $T_p\partial W$ sits inside $T_pW$ as a hyperplane, and the transversality hypothesis reads $T_p\partial W+T_pF=T_pW$; since $\omega$ defines $F$, moreover $T_pF=\ker\omega_p$. [given, F4]

2.1 If $\omega_p$ vanished on all of $T_p\partial W$, then $T_p\partial W\subseteq\ker\omega_p=T_pF$, so the sum $T_p\partial W+T_pF=T_pF$ would have dimension $n$ instead of $n+1$; hence $\omega|_{\partial W}$ is nowhere vanishing, the restricted one-form has $\ker(\omega|_{\partial W})_p=T_p\partial W\cap T_pF$ as its kernel, and the dimension formula for two hyperplanes with sum $T_pW$ gives $\dim(T_p\partial W\cap T_pF)=n-1$, which is the dimension count of (i) and the kernel description of (ii). [step 1.1]

3.1 Pulling back $\omega\wedge d\omega=0$ along $i$ with [F1] and [F2] gives $(\omega|_{\partial W})\wedge d(\omega|_{\partial W})=0$; since $\omega|_{\partial W}$ is nowhere vanishing by step 2.1, [F3] makes its kernel an integrable hyperplane distribution on the smooth $n$-manifold $\partial W$, and [F5] turns that distribution into a codimension-one regular foliation $F|_{\partial W}$ defined by $\omega|_{\partial W}$, completing (i) and (ii). [F1, F2, F3, F5, step 2.1]

3.2 A defining form that orients $F$ transversely restricts to the nowhere vanishing form $\omega|_{\partial W}$ of step 2.1, whose kernel is the restricted distribution, so the restricted foliation is transversely oriented by $\omega|_{\partial W}$; this is (iv). [step 2.1]

4.1 Fix a leaf $L'$ of $F|_{\partial W}$ and $p\in L'$. As a connected manifold tangent to $TF$ and contained in $\partial W$, the leaf $L'$ lies in a leaf $L$ of $F$ and, being connected, in the intrinsic component $C$ of $L\cap\partial W$ containing $p$. Conversely, at a point $q$ of $C$ a boundary chart with $\partial W=\{t=0\}$ and a foliation chart for $F$ present $L$ locally as a level set $\{y=y_0\}$, and because $T_qL=T_qF$ and $T_q\partial W$ are transverse the functions $y$ and $t$ have independent differentials at $q$; hence $L\cap\partial W$ is near $q$ an integral manifold of $\ker(\omega|_{\partial W})$ of dimension $n-1$, that is, a plaque of the restricted foliation, and $C$ is covered by such plaques. The set of points of $C$ lying in the leaf $L'$ is then both open and closed in $C$ and nonempty, so it equals $C$; therefore $L'=C$, which is (iii). [step 2.1, step 3.1]

5.1 Finally, pulling back the identity $d\omega=\eta\wedge\omega$ along $i$ and applying [F1] and [F2] gives $d(\omega|_{\partial W})=i^*(d\omega)=(i^*\eta)\wedge(i^*\omega)=(\eta|_{\partial W})\wedge(\omega|_{\partial W})$, which is (v); together with steps 2.1, 3.1, 3.2 and 4.1 this proves all five assertions. [F1, F2, step 3.1, step 4.1] ∎
