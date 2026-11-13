---
title: Unit-speed confinement before an artificial outer boundary
status: draft
research_item: lem-author-062cb22743bb-speed-confinement
dependency_level: 1
sources:
  references: []
---

## Prerequisites

- [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)
- [math:thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions](https://alphabetamath.cc/item/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-absolutely-continuous-function](https://alphabetamath.cc/item/def-absolutely-continuous-function)
- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball)
- [math:lem-extreme-value-theorem-from-compactness](https://alphabetamath.cc/item/lem-extreme-value-theorem-from-compactness)


## Statement

Assume Countable Choice and Dependent Choice. Let $d\ge2$, $0\le T<\infty$, and let $\Omega\subset\mathbb R^d$ be an open set with smooth one-sided boundary charts. For any time-parametrized unit-speed generalized ray with spatial projection $x:[0,T]\to\overline\Omega$, one has $|x(t)-x(s)|\le|t-s|$ for all $s,t\in[0,T]$. Thus, for $R>0$, $|x(0)|\le R$ implies $|x(t)|\le R+t$.

For the truncation conclusion, suppose additionally that $\Theta$ is a smooth compact obstacle, meaning the closure of a nonempty bounded open set with smooth one-sided boundary, that $\Omega=\mathbb R^d\setminus\Theta$, and that $\Theta\subset B_R(0)$, where $B_r(0)=\{y\in\mathbb R^d:|y|<r\}$. If $|x(0)|\le R$ and $L>R+T$, the same segment, with its compressed covectors, is a generalized ray of the smooth bounded open truncation $D=B_L(0)\setminus\Theta$ and never touches its artificial sphere $\partial B_L(0)$. Neither non-trapping nor uniqueness at infinite-order contact is required.

## Facts & Assumptions

[F1] The local ray rules and the continuous compressed projection are those of [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract). Away from isolated reflection parameters the curve follows the interior or glancing Hamilton rule. At a reflection its two interior one-sided phase limits have a common base point. Time normalization gives unit spatial speed in each rule.

[F2] Smooth one-sided boundary charts use [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts) for every finite $k$. This is its local graph convention; the unbounded $\Omega$ is not asserted to be a bounded domain. Euclidean balls and spheres use [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball).

[F3] Scalar absolute continuity is the finite disjoint-interval condition of [math:def-absolutely-continuous-function](https://alphabetamath.cc/item/def-absolutely-continuous-function). The integral representation and almost-everywhere derivative for an absolutely continuous scalar function are supplied by [math:thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions](https://alphabetamath.cc/item/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions), under [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) and [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice). These choice assumptions are retained precisely for that theorem; no necessity claim is made.

[F4] A continuous real function on a closed interval attains a minimum, by [math:lem-extreme-value-theorem-from-compactness](https://alphabetamath.cc/item/lem-extreme-value-theorem-from-compactness).

## Proof

**Given:** A prescribed unit-speed generalized ray on $[0,T]$, and, for truncation, the additional obstacle geometry. **Goal:** The distance estimate, radial confinement, and identification of the segment on $D$.

1.1 The base projection $x$ is continuous by the compressed-ray convention. At a nonreflection time, the time-normalized Hamilton rule gives a spatial derivative of norm one: in the interior this is the Euclidean velocity, and at glancing the characteristic covector is tangent and its tangential Hamilton velocity has norm one. This also applies at infinite-order glancing. At an isolated reflection time, the ray is interior on each adjacent interval; its one-sided phase limits give one-sided unit spatial velocities. Consequently, for each unit vector $e\in\mathbb R^d$, the continuous real function $f_e(t)=e\cdot x(t)$ has a right derivative at every $t<T$, with $|(f_e)'_+(t)|\le1$. The endpoint right derivative uses the same local rule. [given, F1]

1.2 Under the additional obstacle hypotheses, $D=B_L(0)\setminus\Theta$ is open and bounded because $\Theta$ is closed. Its boundary is $\partial\Theta\cup\partial B_L(0)$: near $\partial\Theta$ it agrees with the exterior since $\Theta\subset B_R(0)$ and $R<L$, while near $\partial B_L(0)$ the obstacle is absent. At a point on neither of these boundaries, a sufficiently small neighborhood lies entirely on a fixed side of each set, so no further boundary points occur. The two boundary components are disjoint and smooth; the obstacle charts are the original one-sided charts with the exterior side chosen, and the sphere has smooth one-sided graph charts. Thus $D$ has the required smooth boundary. [given, F2]

2.1 First obtain absolute continuity without assuming that a compact time interval has only finitely many reflections. Fix $0\le a<b\le T$ and put $f=f_e$. If $f(b)-f(a)>2(b-a)$, then the continuous function $g(u)=f(u)-2u$ satisfies $g(b)>g(a)$. Its attained minimum on $[a,b]$ therefore occurs at some $c<b$. All sufficiently small positive right difference quotients of $g$ at $c$ are nonnegative, whereas $g'_+(c)=f'_+(c)-2\le-1$, a contradiction. Apply the same argument to $-f$ to obtain $|f(b)-f(a)|\le2(b-a)$. For any finite family of intervals with disjoint interiors, $\sum_j|f(v_j)-f(u_j)|\le2\sum_j(v_j-u_j)$; choosing $\delta=\varepsilon/2$ proves scalar absolute continuity. On a singleton interval the increments vanish. [F3, F4, step 1.1]

3.1 Apply the absolute-continuity fundamental theorem to $f_e$ on $[s,t]$ when $s<t$. Wherever its ordinary derivative exists, it equals its right derivative, so $|f'_e|\le1$ almost everywhere. Hence $|e\cdot(x(t)-x(s))|\le\int_s^t|f'_e(r)|\,dr\le t-s$. If $x(t)\ne x(s)$ choose $e=(x(t)-x(s))/|x(t)-x(s)|$ to obtain $|x(t)-x(s)|\le t-s$; otherwise the inequality is immediate. Interchanging the endpoints handles $t<s$. The triangle inequality now gives $|x(t)|\le|x(0)|+t\le R+t$. [given, F3, step 1.1, step 2.1]

4.1 By step 3.1, $|x(t)|\le R+t\le R+T<L$. At every point visited by the segment, choose a neighborhood lying inside $B_L(0)$; on this neighborhood $D$ and $\Omega$ agree. The Euclidean wave symbol, the local compression map, and all interior, reflected and glancing rules are therefore identical in these two domains. Keep the original compressed curve in these identical local charts. It satisfies the generalized-ray rules in $D$ on the entire segment and cannot meet $\partial B_L(0)$. This is an identification of a prescribed curve, so neither a global continuation theorem nor uniqueness is used. [given, F1, F2, step 3.1, step 1.2] ∎
