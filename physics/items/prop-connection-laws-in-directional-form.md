---
id: prop-connection-laws-in-directional-form
kind: proposition
title: Connection laws in directional form
status: published
origin: pipeline
deps: [def-covariant-derivative-of-a-section-in-a-vector-field-direction, def-connection-on-a-smooth-vector-bundle, lem-chart-bump-at-a-point-with-prescribed-support, lem-euclidean-bump-for-a-compact-set-inside-an-open-set]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, section 4.1
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

The directional operator of a connection obeys
$$\nabla_{fX+gY}s=f\nabla_Xs+g\nabla_Ys,\qquad \nabla_X(as+bt)=a\nabla_Xs+b\nabla_Xt,$$
$$\nabla_X(fs)=X(f)s+f\nabla_Xs$$
for smooth functions $f,g$, real numbers $a,b$, vector fields $X,Y$ and sections $s,t$. Conversely, a map $D:\Gamma(TM)\times\Gamma(E)\to\Gamma(E)$ with these three laws comes from a unique connection by evaluation. This includes manifolds with boundary.

## Facts & Assumptions

**Given:** The displayed objects; for the converse a smooth-section-valued map $D$ satisfying the three displayed laws.

[F1] A connection is a real-linear Hom-bundle-section-valued operator satisfying the one-form Leibniz identity ([[def-connection-on-a-smooth-vector-bundle]]).

[F2] The directional derivative evaluates that Hom section on $X$ ([[def-covariant-derivative-of-a-section-in-a-vector-field-direction]]).

[F3] Chart bumps with support in a prescribed open neighbourhood exist ([[lem-chart-bump-at-a-point-with-prescribed-support]]).

[F4] A compact subset of a Euclidean open set admits a smooth bump equal to one on that subset ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

1.1 Fibrewise linearity of $(\nabla s)_p$ gives the first identity by evaluating at $f(p)X(p)+g(p)Y(p)$. Real linearity of $\nabla$ gives the second. Evaluating $\nabla(fs)=df\otimes s+f\nabla s$ on $X$ gives the third because $df(X)=X(f)$. [F1, F2]

1.2 We will use a cutoff $\chi$ supported in a prescribed neighbourhood and equal to one on a smaller neighbourhood of a chosen point. On an interior chart this is precisely the construction in the proof of [F3]: apply [F4] to two nested balls about the coordinate point and extend by zero. For a boundary chart with image relatively open in a closed half-space $H$, choose radii $0<r<R$ such that $\overline B_R(a)\cap H$ lies in the chart image. Restrict a Euclidean bump equal to one on $\overline B_r(a)$ and supported in $B_R(a)$ to $H$, then pull back and extend by zero. Its support lies in the compact chart preimage of $\overline B_R(a)\cap H$, hence is closed in the Hausdorff manifold and contained in the chart; zero extension is smooth. In dimension zero use the indicator of the open-and-closed singleton. Each construction is at a fixed point, requiring only finitely many choices. [F3, F4, construct]

2.1 Fix $s$ and write $L(X)=D_Xs$. If $X$ vanishes near $p$, take a cutoff supported there with $\chi(p)=1$. Then $\chi X=0$ and $0=L(\chi X)(p)=L(X)(p)$. Thus $L(X)(p)$ depends only on the germ of $X$. Local fields may now be multiplied by a cutoff equal to one near $p$ and extended by zero; applying $L$ and evaluating at $p$ is independent of that extension. On a neighbourhood where one fixed cutoff is one, the result is the restriction of a smooth global output, so these local values are smooth. [given, step 1.2]

3.1 In a coordinate neighbourhood write $X=\sum_i X^i\partial_i$. The extended local operator satisfies $L(X)(p)=\sum_i X^i(p)L(\partial_i)(p)$: extend all fields and coefficient functions using a common cutoff equal to one near $p$ and apply global function-linearity, then use step 2.1. Hence $L(X)(p)$ depends only on $X(p)$. Define $\eta_s(p)(v)=\sum_i v^iL(\partial_i)(p)$. Germ independence shows this definition is independent of coordinates, and the smoothness in step 2.1 shows $\eta_s$ is a smooth Hom section. Every vector at $p$ has a local constant-coordinate extension and then a cutoff global extension, so its value is uniquely forced by $D$. [given, step 1.2, step 2.1]

4.1 Real linearity in $s$ gives real linearity of $s\mapsto\eta_s$. Testing on a tangent vector using a global field with that value, the third law gives $\eta_{fs}(p)(v)=df_p(v)s(p)+f(p)\eta_s(p)(v)$. Thus $\nabla s=\eta_s$ is the unique connection inducing $D$. If $M$ is empty there are no pointwise tests and both operators are unique zero maps; if $\dim M=0$ the coordinate sum is empty. Rank zero gives zero outputs, while in rank one the same finite calculation has one output component. No simultaneous family of cutoff choices was made: uniqueness defines the global section from locally proved values. [F1, given, step 3.1] ∎
