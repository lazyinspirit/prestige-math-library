---
id: lem-smooth-arc-collapse-can-be-smooth-away-from-the-collapsed-arc
kind: lemma
title: "Smooth-arc collapse can be smooth away from the collapsed arc"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. The arc, its smooth parametrization and its neighborhood are supplied; the straight-arc chart is the finite construction in the choice-free arc-collapse supplier. Only a fixed scalar cutoff and explicit ellipsoid formulas are added."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6; the smooth exterior collapse formula is supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

For a supplied smooth embedded arc $A\subset S^3$ and any neighborhood $U$ of it, there is a continuous surjection $q:S^3\to S^3$, fixed off a smooth closed ball $B\subset U$ and on a neighborhood of $\partial B$, whose only nonsingleton fiber is $A$. It preserves $B$, and its restriction
$$q:S^3\setminus A\longrightarrow S^3\setminus\{q(A)\}$$
is a smooth diffeomorphism. No choice axiom is required.

More explicitly, in any supplied smooth chart with $A=[-1,1]\times\{0,0\}$, take the outer confocal ellipsoid with semiaxes $\sqrt{1+\varepsilon^2},\varepsilon,\varepsilon$ inside that chart. The collapse may be chosen to send its smaller confocal level of parameter $\rho$ to the ellipsoid with semiaxes $f(\rho),\rho,\rho$, where $f(\rho)=a\rho$ near zero, $a>0$, and $f(\rho)=\sqrt{1+\rho^2}$ near $\varepsilon$. Thus its sufficiently small target levels are homothetic, while its formula is the identity near the outer boundary.

## Statement references

[[lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere]]

## Facts & Assumptions

**Given:** The smoothly parametrized embedded arc and its neighborhood, or the supplied straight-arc chart in the explicit clause.

[F1] The choice-free smooth arc-collapse construction supplies a smooth ambient chart straightening the arc to $[-1,1]\times\{0,0\}$ and containing a small confocal ellipsoid in the prescribed neighborhood. In this chart, for $r^2=y^2+z^2$ and off the arc, the unique confocal level parameter satisfies $\rho^2=(x^2+r^2-1+\sqrt{(1-x^2-r^2)^2+4r^2})/2>0$, and $x^2/(1+\rho^2)+r^2/\rho^2=1$. The chart and level formula are the constructive content of that proof. ([[lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere]])

[F2] A smooth scalar equation with nonzero derivative in one variable has a unique smooth local root. Smooth inverse maps follow from the inverse function theorem and differentiation of the inverse identity. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 Choose the straight-arc chart and a strictly interior outer ellipsoid $E_\varepsilon$ by [F1]. Choose a smooth nondecreasing cutoff $\chi:[0,\varepsilon]\to[0,1]$ equal to zero for $\rho\le\varepsilon/3$ and one for $\rho\ge2\varepsilon/3$. Such a function is obtained by integrating and normalizing a fixed nonnegative smooth bump supported between those two values. Set $a=1/(2\varepsilon)$ and $f(\rho)=(1-\chi(\rho))a\rho+\chi(\rho)\sqrt{1+\rho^2}$. For $0<\rho\le\varepsilon$, one has $a\rho\le1/2<\sqrt{1+\rho^2}$. Consequently $f'(\rho)=(1-\chi)a+\chi\rho/\sqrt{1+\rho^2}+\chi'(\sqrt{1+\rho^2}-a\rho)>0$. The function equals $a\rho$ near zero and $\sqrt{1+\rho^2}$ near the outer boundary. [given, F1, construct, algebra]

2.1 For a point off $A$ in $E_\varepsilon$, use its unique parameter $\rho$ from [F1] and define $q(x,y,z)=(f(\rho)x/\sqrt{1+\rho^2},y,z)$. Set $q(A)=0$. On each source ellipsoid boundary this is an invertible linear map onto the ellipsoid with semiaxes $f(\rho),\rho,\rho$. Since $f$ and $\rho$ strictly increase, those target ellipsoids are strictly nested. They fill the outer ellipsoid minus its center: for any nonzero target point $(X,Y,Z)$ therein, the expression $X^2/f(\rho)^2+(Y^2+Z^2)/\rho^2$ is strictly decreasing in positive $\rho$, tends to infinity at zero, and is at most one at $\varepsilon$. Its unique value one recovers $\rho$, and then the linear level map gives the unique preimage. Thus the only nonsingleton fiber is $A$, and the map is onto the outer ellipsoid. [step 1.1, F1, construct, algebra]

3.1 Continuity away from $A$ follows from the smooth level formula; alternatively the source level equation has nonzero $\rho$ derivative at every positive level and [F2] applies. At $A$, convergence of source points implies $\rho\to0$, by the displayed level formula in [F1], while their images satisfy $|X|\le f(\rho)$ and $Y^2+Z^2\le\rho^2$, hence converge to zero. The map is therefore continuous everywhere. Since $f(\rho)=\sqrt{1+\rho^2}$ near the outer boundary, it equals the identity on a whole collar there. Extend it by the identity outside $E_\varepsilon$. It is a global continuous surjection with exactly the asserted fibers and support. [step 1.1, step 2.1, F1, F2, construct]

4.1 The inverse on the punctured target is smooth: its recovered $\rho$ is the local root in step 2.1, whose derivative is $-2X^2f'/f^3-2(Y^2+Z^2)/\rho^3<0$. Apply [F2] and then the smooth inverse linear level formula. The source map is likewise smooth off $A$ by step 3.1. These maps agree smoothly with the identity on the boundary collar, so give a diffeomorphism of the two punctured ambient manifolds. Finally, for $\rho\le\varepsilon/3$ the target semiaxes are exactly $a\rho,\rho,\rho$, so a fixed diagonal rescaling turns all those small target levels into concentric round spheres. This proves the additional explicit clause, with no limiting differentiability asserted at the collapsed arc. [step 1.1, step 2.1, step 3.1, F2, construct] ∎
