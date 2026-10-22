---
id: lem-simple-function-births-admit-geometrically-cancelling-gradient-data
kind: lemma
title: "Simple function births admit geometrically cancelling gradient data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-compact-relative-function-paths-have-finitely-many-simple-births
  - lem-one-variable-completion-of-the-square-with-a-smooth-parameter
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-fundamental-theorem-on-flows
  - def-downward-gradient-like-vector-field
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - prop-morse-cancellation-criterion-via-a-unique-connecting-orbit
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Section5, Theorem5.4 with Hypothesis5.5 and Theorem5.6, printed48–66; the simple-fold product field and compact crossing spheres are constructed here"
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Section4.7, printed115–116, cubic corank-one calculation; Section5.4, printed146–147, geometric cancellation"
---

## Statement

Assume Countable Choice. At a simple spatial critical-point birth of a function path as in the compact relative simple-birth lemma, let the two nearby occupied-side critical points have indices $\lambda$ and $\lambda+1$. For every sufficiently close occupied-side parameter there is a downward gradient-like field on a neighborhood of the birth, with the exact adapted Morse form near both critical points, such that the full unstable sphere of the upper critical point and full stable sphere of the lower one, in a regular level strictly between their critical values, lie in that neighborhood and meet transversely in exactly one point.

This field can replace any given global downward gradient-like field for that parameter, leaving it fixed outside a slightly larger birth neighborhood. The two spheres and their single intersection are unchanged by this extension. If a compact regular-ended slab about these two critical values contains no other critical point, its two handles geometrically cancel, relative to its lower level, by the unique-transverse-orbit cancellation criterion. In dimension three this applies to each local index pair $(0,1),(1,2),(2,3)$. No genericity assertion for a global one-parameter family of fields, and no marked-diagram translation, is asserted here.

## Statement references

[[lem-compact-relative-function-paths-have-finitely-many-simple-births]]

[[prop-morse-cancellation-criterion-via-a-unique-connecting-orbit]]

## Facts & Assumptions

**Given:** A simple fold, with nonzero mixed parameter derivative and nonzero third derivative along its one-dimensional Hessian kernel, and, for extension, a given global adapted descending field.

[F1] [[lem-compact-relative-function-paths-have-finitely-many-simple-births]] gives the simple-fold derivatives and the two occupied-side critical points.

[F2] A nonzero second derivative splits off one signed square with all other variables retained as smooth parameters ([[lem-one-variable-completion-of-the-square-with-a-smooth-parameter]]); implicit equations with parameters have smooth solutions ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

[F3] Smooth vector fields have unique smooth local flows ([[thm-fundamental-theorem-on-flows]]). The exact adapted condition is [[def-downward-gradient-like-vector-field]]. Supported bump functions exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F4] A consecutive-index pair in a compact slab with exactly one transverse unstable/stable sphere intersection cancels under Countable Choice ([[prop-morse-cancellation-criterion-via-a-unique-connecting-orbit]]).

## Proof

1.1 Keep the kernel coordinate $u$ and parameter $t$ fixed. In complementary variables the Hessian is invertible. Diagonalize it at the event by a fixed linear change and apply the signed-square construction [F2] successively to these variables, treating $u,t$ and the remaining variables as parameters. At each stage the residual Hessian is its invertible Schur complement, so every remaining pivot stays nonzero after shrinking the neighborhood. This gives smooth parameter-dependent coordinates with $$f_t=g(u,t)-|z_-|^2+|z_+|^2,$$ where $z_-\in\mathbb R^\lambda$, $z_+\in\mathbb R^{n-\lambda-1}$. At the origin $g_u=g_{uu}=0$, $g_{ut}=a\ne0$ and $g_{uuu}=b\ne0$: solving the complementary critical equations and differentiating gives these equalities exactly as in [F1]. Reflect $u$ if necessary to have $b>0$. On the occupied side put $s=\sqrt{-2at/b}$. Taylor expansion and the simple-root implicit theorem after scaling $u=sv$ give the two roots $$u_-=-s+O(s^2),\qquad u_+=s+O(s^2),$$ with $g_{uu}(u_-,t)<0$ and $g_{uu}(u_+,t)>0$. Thus $q=(u_-,0,0)$ is the upper, index-$\lambda+1$ point and $p=(u_+,0,0)$ is the lower, index-$\lambda$ point. [F1, F2, given, construct, algebra]

2.1 Put $v=(g(u_-,t)+g(u_+,t))/2$. For all sufficiently small occupied parameters the equation $g(u,t)=v$ has three local solutions $$u_L<u_-<u_M<u_+<u_R,$$ all $O(s)$. To check existence and uniqueness, the scaled height difference divided by $s^3$ converges in every fixed compact $v$-coordinate interval to the cubic $b(v^3/6-v/2)$, up to an additive constant independent of $v$. Its intermediate-height equation has three simple roots in the three indicated intervals. The implicit theorem preserves them, while the sign of $g_u$, with its only two local zeros, excludes any further roots. On the intervals $[u_L,u_M]$ and $[u_M,u_R]$ the quantities $g(u,t)-v$ and $v-g(u,t)$, respectively, are nonnegative and bounded by $Cs^3$. These intervals and quadratic coordinates of size $Cs^{3/2}$ therefore lie in an arbitrarily small fixed birth chart when $t$ is sufficiently close to zero. [F1, F2, step 1.1, construct, algebra]

3.1 First use the product field $$X=-g_u(u,t)\partial_u+2z_-\partial_{z_-}-2z_+\partial_{z_+}.$$ It is strictly descending away from its two zeros, since $$df_t(X)=-g_u^2-4|z_-|^2-4|z_+|^2.$$ Make it exactly adapted near the critical points as follows. The one-dimensional signed-square formula [F2] supplies a smooth increasing coordinate $\nu$ near either root with $g=g(u_\pm,t)\pm\nu^2$. Replace the coefficient of $\partial_u$ by $-c(u)g_u$, where $c>0$ agrees near that root with $(\partial_u\nu)^{-2}$. Choose these prescriptions in disjoint root neighborhoods and interpolate positively to $c=1$ outside them. The field then has $\dot\nu=\mp2\nu$ near the corresponding root and the unchanged signed-square field in $z$. It is exactly adapted in these Morse coordinates. This changes only the positive speed of the $u$ motion, not its trajectories in the $u$ axis or the product stable/unstable sets. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 At level $v$ the entire crossing sphere from $q$ is $$S_q=\{z_+=0,\ |z_-|^2=g(u,t)-v,\ u_L\le u\le u_M\},$$ and the entire crossing sphere into $p$ is $$S_p=\{z_-=0,\ |z_+|^2=v-g(u,t),\ u_M\le u\le u_R\}.$$ Here "entire" can be checked directly, rather than by a global flow-completeness assumption. Any orbit limiting to $q$ in backward time has $z_+=0$, because otherwise $z_+$ grows exponentially in that direction once the orbit is in the product chart. Its $u$ coordinate then lies in the interval with backward limit $u_-$, and its $z_-$ coordinates decay in backward time. Each point of the displayed $S_q$ has precisely these properties; in backward time $u$ moves toward $u_-$ without leaving $[u_L,u_M]$, and $z_-$ decreases in norm. It therefore limits to $q$. Every trajectory leaving a small unstable sphere of $q$ crosses $v$ before exiting the birth chart: while its value is above $v$, the sign of $g_u$ prevents $u$ from passing $u_L$ or $u_M$, and $|z_-|^2\le g(u,t)-v\le Cs^3$. It cannot remain forever above $v$, since its only possible critical limits there would have to be $q$ itself or $p$, neither compatible with strict descent from $q$ above $v$. More explicitly, if any $z_-$ coordinate is nonzero its exponential growth forces a crossing, and if all vanish the scalar $u$ orbit crosses $v$ before reaching its forward limiting root or the outer boundary. This proves the first formula globally up to this first crossing. The time-reversed argument proves the second formula for the full stable crossing sphere of $p$. The formulas describe smooth spheres, including the zero-dimensional cases: each is the two disk graphs over the radial $z$ coordinates joined at the unique extremum $u_-$ or $u_+$, with the two tips smooth because $g_u\ne0$ at the interval endpoints. [F2, F3, step 2.1, step 3.1, construct]

5.1 Their only intersection is $(u_M,0,0)$. Indeed the first formula forces $z_+=0$ and the second $z_-=0$, and their $u$ intervals meet only at $u_M$. At this point $g_u\ne0$, so the tangent space to the level is exactly the space of the $z$ coordinates. The tangent spaces of the two crossing spheres are respectively the $z_-$ and $z_+$ subspaces, which are complementary. Thus the intersection is transverse and unique, with the indicated sphere dimensions $\lambda$ and $n-\lambda-1$. The corresponding orbit is the scalar axis orbit from $u_-$ to $u_+$; it is unique modulo time translation by one-dimensional flow uniqueness. [F3, step 4.1, algebra]

6.1 Choose a compact smaller birth-chart neighborhood containing both critical points and the compact flow pieces used in step4.1. If $Y$ is any given global downward gradient-like field, take a bump $\chi$ equal to one on a neighborhood of this compact set and supported inside the larger birth chart. Replace $Y$ by $\chi X+(1-\chi)Y$. Off the critical points both terms are strictly descending, so their convex combination is strictly descending. Near the two new critical points it equals the adapted $X$, while every other critical-point chart is unchanged. Hence this is a global adapted descending field, equal to the old one outside the chart. All orbit pieces determining $S_q,S_p$ remain within the region $\chi=1$, so the full crossing spheres and single intersection are unchanged. If the stated compact slab contains no other critical point, [F4] now cancels its two handles relative to the lower level. No assertion about the behavior of a varying global field at other parameters was needed. Countable Choice enters through the flow and cancellation suppliers; all additional local constructions and choices were finite. [F3, F4, step 3.1, step 4.1, step 5.1, construct] ∎
