---
id: lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere
kind: lemma
title: "Collapsing a smooth embedded arc preserves the three-sphere"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: a smooth parametrized embedded compact arc is supplied. Its normal chart uses a finite interval cover and finitely many frame interpolations; the collapse and its approximating homeomorphisms are explicit elementary formulas."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; local arc-collapse operation, with the ambient quotient calculation supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Let $\alpha:[-1,1]\hookrightarrow S^3$ be a smooth embedding with nonvanishing derivative, smooth in boundary charts at both endpoints, and let $U$ be an open neighborhood of its image $A$. Then there is a continuous surjection $q:S^3\to S^3$, fixed on $S^3\setminus U$, whose only non-singleton fiber is $A$. In particular the quotient space $S^3/A$, obtained by identifying exactly the points of $A$ to one point, is homeomorphic to $S^3$.

Moreover there is a continuous family $Q:S^3\times[0,1]\to S^3$ with $Q_0=\operatorname{id}$ and $Q_1=q$, fixed on $S^3\setminus U$, such that every $Q_t$ for $0\le t<1$ is a homeomorphism. Every closed parameter interval $[0,t_0]$ with $t_0<1$ therefore gives an ambient topological isotopy. The assertion concerns a topological quotient; it does not assert that the terminal map is a diffeomorphism or that an arbitrary surface containing the arc becomes a surface after collapse.

## Statement references

[[thm-euclidean-inverse-function-theorem]]

## Facts & Assumptions

**Given:** The supplied smooth embedded parametrized compact arc with nonzero derivative, its open neighborhood, and the standard smooth three-sphere in $\mathbb R^4$.

[F1] A smooth coordinate map with invertible derivative has a smooth local inverse. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 Extend the embedding a little past each endpoint inside a smooth endpoint chart; shrink the two added intervals until the extended arc remains embedded and lies in $U$. Compactness separates the two new ends from the original arc outside their endpoint charts, so this is possible. Along the extended interval choose a smooth oriented orthonormal frame $e_1(s),e_2(s)$ perpendicular to the arc tangent inside $TS^3$. This requires only finite constructions: project two appropriate constant coordinate vectors to the normal planes on each small interval, apply Gram–Schmidt there, choose a finite ordered interval subdivision subordinate to these charts, and glue consecutive frames. On an overlap their transition is a smooth plane rotation; its angle has a smooth real lift on a sufficiently short overlapping interval. Rotate the new frame through that lifted angle using a smooth cutoff, agreeing with the old one near the gluing point. Finitely many such interpolations produce the frame on the whole interval. No endpoint frame has been prescribed, so no cyclic compatibility is required. [given, construct]

2.1 For $r=(u^2+v^2)^{1/2}$ the round normal map is $\Psi(s,u,v)=\cos r\,\alpha(s)+(\sin r/r)(u e_1(s)+v e_2(s))$, with its smooth value at $r=0$. Its derivative along the zero section has independent columns $\alpha'(s),e_1(s),e_2(s)$, so [F1] makes it a local diffeomorphism there. It is injective on some uniform short normal tube about a slightly shorter compact extended interval: otherwise collisions at radii tending to zero would, by compactness, limit to two equal arc points; their parameters agree by injectivity of the arc, and a common local inverse then excludes those collisions. Shrink the tube to lie in $U$. Thus in one smooth product chart the original arc is the straight segment $\{(x,0,0):-1\le x\le1\}$. Choose $\varepsilon>0$ so small that the closed ellipsoid $E=\{x^2/(1+\varepsilon^2)+(y^2+z^2)/\varepsilon^2\le1\}$ lies in this chart. Its slight extension beyond the segment fits inside the extended parameter interval. [step 1.1, F1, construct]

3.1 For $p=(x,y,z)\in E$ write $r^2=y^2+z^2$ and define $w(p)=(x^2+r^2-1+\sqrt{(1-x^2-r^2)^2+4r^2})/2$. This is continuous, nonnegative, zero exactly on the segment, and at most $\varepsilon^2$ on $E$. For $w>0$ it is the unique positive solution of $x^2/(1+w)+r^2/w=1$: multiplying by $w(1+w)$ gives $w^2+(1-x^2-r^2)w-r^2=0$, whose nonnegative root is the displayed value. The equation's left side is strictly decreasing in $w$ until it reaches one; at $w=\varepsilon^2$ it is at most one on $E$. On the axis outside the segment the root is $x^2-1$, while on the segment it is zero. The level $w=\rho^2>0$ is consequently the ellipsoid $p=(\sqrt{1+\rho^2}\,u_1,\rho u_2,\rho u_3)$, $u_1^2+u_2^2+u_3^2=1$. In particular $w=\varepsilon^2$ is exactly $\partial E$. [step 2.1, construct, algebra]

4.1 For $0\le t\le1$ put $a_t=1-t$ and $b_t^2=(1+\varepsilon^2-a_t^2)/\varepsilon^2>0$. On $E$ define $q_t(x,y,z)=(\sqrt{(a_t^2+b_t^2w(p))/(1+w(p))}\,x,y,z)$. The formula is jointly continuous, including on the segment, where its value is $(a_t x,0,0)$. At $t=0$ it is the identity. On $\partial E$, $w=\varepsilon^2$ and $a_t^2+b_t^2\varepsilon^2=1+\varepsilon^2$, so it fixes the boundary pointwise for every $t$. Off the segment, the level parametrization in step 3.1 shows that its image is $(\sqrt{a_t^2+b_t^2\rho^2}\,u_1,\rho u_2,\rho u_3)$. [step 3.1, construct, algebra]

5.1 If $t<1$, these image ellipsoids are strictly nested for $0<\rho\le\varepsilon$, and fill $E$ minus the shorter segment $[-a_t,a_t]\times\{0,0\}$. To verify uniqueness directly, for a point $(X,Y,Z)$ off that shorter segment solve $X^2/(a_t^2+b_t^2\rho^2)+(Y^2+Z^2)/\rho^2=1$. The left side strictly decreases from a value greater than one to a value at most one at $\rho=\varepsilon$; on the axis with $|X|>a_t$ the same assertion follows directly from the first term. Thus exactly one $\rho$ exists, and the displayed image ellipsoid determines exactly one unit vector $u$. On the shorter segment the map is the bijection $x\mapsto a_t x$ of the original segment. Hence $q_t:E\to E$ is a continuous bijection and is a homeomorphism, because $E$ is compact and Hausdorff. At $t=1$, the image ellipsoids are instead the homothetic copies $(\rho/\varepsilon)\partial E$; they fill $E\setminus\{0\}$ uniquely. The entire original segment and only it maps to zero. Thus $q_1$ is onto and has exactly the asserted fibers. [step 3.1, step 4.1, algebra]

6.1 Transport $q_t$ through the chart in step 2.1 and extend it by the identity outside the image of $E$. The boundary equality in step 4.1 makes the resulting family $Q$ continuous on $S^3\times[0,1]$. Each slice with $t<1$ is a homeomorphism by step 5.1 and the identity gluing; its support lies in $U$. On any compact time interval avoiding one, the inverse is jointly continuous: the map $(p,t)\mapsto(Q_t(p),t)$ is a continuous bijection of the compact Hausdorff space $S^3\times[0,t_0]$ to itself, hence a homeomorphism. The terminal map $q=Q_1$ has only $A$ as a non-singleton fiber by step 5.1. It factors to a continuous bijection $S^3/A\to S^3$ by the definition of the quotient topology. That quotient is compact, and a continuous bijection from a compact space to a Hausdorff space is closed, hence a homeomorphism. This proves the quotient and approximation assertions using the explicit formulas; a surface link at the collapsed point would require separate hypotheses. [step 2.1, step 4.1, step 5.1, construct] ∎
