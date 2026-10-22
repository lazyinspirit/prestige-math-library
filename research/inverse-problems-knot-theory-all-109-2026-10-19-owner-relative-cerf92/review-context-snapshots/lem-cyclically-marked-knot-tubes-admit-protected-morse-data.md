---
id: lem-cyclically-marked-knot-tubes-admit-protected-morse-data
kind: lemma
title: "Cyclically marked knot tubes admit protected Morse data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - def-downward-gradient-like-vector-field
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let an oriented smooth circle $K$ have distinct ordered marks $w_i,z_i$, $1\le i\le k$, in the cyclic order prescribed by the balanced one-knot convention: its oriented successive arcs are $w_i\to z_i$ and $z_i\to w_{i-1}$, with indices modulo $k$. Suppose a smooth tubular product $\tau:K\times D^2_{r_0}\to N$ has been supplied, with zero section $K$. There are $0<r<r_0$, a smooth function $F:K\times D^2_r\to[0,1]$ and a smooth downward gradient-like field $X$ for $F$ with the following properties. There is exactly one critical point in the interior of each $w_i\to z_i$ zero-section arc, a minimum of value zero, and exactly one in each $z_i\to w_{i-1}$ zero-section arc, a maximum of value one. These $2k$ points are all its critical points. The field is tangent to the zero section; there its forward flow points toward the minima and away from the maxima. The level $F^{-1}(1/2)$ consists exactly of the $2k$ normal disks over the marks. In a neighborhood of each such disk $F$ depends only on the oriented circle coordinate and has nonzero derivative in that coordinate. Near every critical point the function and field have the exact Euclidean quadratic and negative-gradient forms. The restrictions to smaller tubes have all the same properties.

This supplies a protected tubular germ for marked-knot Morse data. It does not assert extension over either handlebody, realization of its compression disks, or any global generic path or diagram-move theorem.

## Statement references

[[def-admissible-pointed-heegaard-floer-data|The ordered marks and oriented alpha/beta arc convention.]]

[[def-downward-gradient-like-vector-field|The exact adapted condition at a critical point.]]

## Facts & Assumptions

**Given:** The oriented circle, finite marked set, and the specified smooth tubular product. The product is part of the input; no existence theorem for a tubular neighborhood is needed here.

[F1] A compact subset of an open subset of a smooth manifold has a smooth bump equal to one near that compact subset and supported in the open subset. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[F2] The downward gradient-like condition is strict descent away from critical points and the exact negative Euclidean gradient in quadratic Morse coordinates near each critical point. ([[def-downward-gradient-like-vector-field]])

[A1] Only finitely many auxiliary intervals and bump functions are selected. The construction is therefore compatible with Countable Choice and uses no stronger choice assumption. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Choose an oriented circle coordinate $s\in\mathbb R/L\mathbb Z$ and lift the marks in their cyclic order to the real line. There are $2k$ consecutive marked intervals of positive lengths $\ell_j$. Choose $\epsilon>0$ with $\epsilon\ell_j<\pi$ for all of them. On the interior of each interval choose a nonnegative smooth bump of integral one, supported away from its endpoints; [F1] supplies a nonzero bump, which can be normalized by its positive integral. Put $v(s)=\epsilon+\sum_j(\pi-\epsilon\ell_j)b_j(s)$. This is a positive smooth periodic function, and its integral on EACH marked interval is $\pi$. Its integral over the circle is $2\pi k$. Hence integration gives an orientation-preserving coordinate $\theta:K\to\mathbb R/(2\pi k\mathbb Z)$ with derivative $v>0$. Choose its additive constant so $\theta(w_i)=-\pi/2$ modulo $2\pi$; then $\theta(z_i)=\pi/2$ modulo $2\pi$, and the next $w$ has coordinate $3\pi/2$ modulo $2\pi$. Set $f(s)=(1-\cos\theta(s))/2$. It is $1/2$ exactly at the marks, has exactly one minimum of value zero on every alpha arc and one maximum of value one on every beta arc, and has no other critical point. [A1, F1, given, construct, algebra]

2.1 Near a minimum choose the increasing local coordinate $q=\sin((\theta-2\pi j)/2)$; then $f=q^2$. Near a maximum choose $q=\sin((\theta-(2j+1)\pi)/2)$; then $f=1-q^2$. These are smooth coordinates because their derivatives in $s$ are positive at the critical point. Choose disjoint small neighborhoods of all critical points and marks. By finite bump patching [F1] choose a smooth real function $a(s)$ equal to $+1$ near every minimum, $-1$ near every maximum, and zero near every mark. Also choose a positive smooth function $c(s)$ equal to $(dq/ds)^{-2}$ on smaller critical neighborhoods: patch these positive local prescriptions with the constant one by bumps having disjoint supports inside the coordinate neighborhoods. Define, for $\rho^2=x^2+y^2$, $$F(s,x,y)=f(s)+a(s)\rho^2,\qquad X=-c(s)f'(s)\partial_s-2a(s)(x\partial_x+y\partial_y).$$ Both are smooth on the supplied product. [F1, step 1.1, construct]

3.1 On the chosen smaller critical neighborhoods $a$ is constant. At a minimum, the coordinates $(q,x,y)$ therefore give $F=q^2+x^2+y^2$ and $X=-2q\partial_q-2x\partial_x-2y\partial_y$; indeed $c f'(dq/ds)=2q$. At a maximum they give $F=1-q^2-x^2-y^2$ and the negative Euclidean gradient $X=2q\partial_q+2x\partial_x+2y\partial_y$. Off these neighborhoods, compactness of the remaining circle gives $|f'|\ge\mu>0$, while $|a'|\le A$. Choose $r$ small enough that $Ar^2<\mu/2$ when $A>0$. Then $\partial_sF=f'+a'\rho^2$ cannot vanish there. Thus there are exactly the stated critical points. Moreover $$dF(X)=-c(f')^2-c f'a'\rho^2-4a^2\rho^2.$$ Off the critical neighborhoods, $|f'a'\rho^2|\le(f')^2/2$, so this is strictly negative. Within those neighborhoods it is strictly negative except at their critical centers by the displayed exact models. This proves [F2], including its exact local requirement. [F2, step 1.1, step 2.1, choose, algebra]

4.1 Shrink $r$ again if necessary. On smaller critical neighborhoods the exact expressions in step3.1 lie in $[0,1]$ for sufficiently small $r$ and neighborhood size. On their compact complement $f$ is bounded away from zero and one, so $|a|r^2$ smaller than this margin gives $0<F<1$. Choose disjoint closed neighborhoods of the marks inside the regions where $a=0$, small enough that each contains no other zero of $f-1/2$ and $f'$ never vanishes there. On the complement of their interiors, $|f-1/2|$ has a positive minimum. Taking $\|a\|_\infty r^2$ smaller than that minimum excludes every other point of the level $1/2$. Within the marked neighborhoods $F=f(s)$, so that level is precisely the normal disk over each mark, with the required product height and nonzero axial derivative. All shrinkings are finite and preserve the earlier inequalities. [step 1.1, step 2.1, step 3.1, choose, algebra]

5.1 On the zero section the field is $-c(s)f'(s)\partial_s$, with $c>0$. Its sign on each interval between a mark and its adjacent extremum therefore points toward a minimum or away from a maximum as stated. The radial components vanish there, so the zero section is invariant by uniqueness of solutions, or directly by the radial equations $\dot x=-2a(s)x$ and $\dot y=-2a(s)y$, whose solutions starting at zero remain zero. The formulas and every bound above restrict unchanged to every smaller positive radius. Transporting the constructed function and field by the given product map $\tau$ gives the claimed protected knot germ in $N$. No construction outside this tube has been used. [step 2.1, step 3.1, step 4.1, algebra] ∎
