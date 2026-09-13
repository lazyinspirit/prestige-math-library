---
id: thm-symplectic-neighborhood-theorem
kind: theorem
title: Symplectic neighborhood theorem
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-symplectic-normal-bundle-of-a-symplectic-submanifold", "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold", "lem-relative-poincare-primitive-near-a-submanifold", "lem-moser-pullback-differentiation-equation", "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Theorem 5.12 and Definition 5.16--Example 5.17(c), pp. 62--64
verification:
  precheck: pass
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For $j=0,1$, let $S_j$ be a closed embedded
symplectic submanifold of $(M_j,\omega_j)$. Suppose
$f:(S_0,\omega_0|_{S_0})\to(S_1,\omega_1|_{S_1})$ is a
symplectomorphism and
$F:N^{\omega_0}S_0\to N^{\omega_1}S_1$ is a symplectic vector-bundle
isomorphism over $f$. Then $f$ extends to a symplectomorphism between
neighbourhoods of $S_0$ and $S_1$, inducing $F$ on the symplectic normal
bundles.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the closed submanifolds, map, and normal
bundle isomorphism in the statement.

[F1] The symplectic normal gives the splitting
$TM_j|_{S_j}=TS_j\oplus N^{\omega_j}S_j$.
[[def-symplectic-normal-bundle-of-a-symplectic-submanifold]].

[F2] Under $\mathrm{AC}_\omega$, closed embedded submanifolds have tubular
neighbourhoods. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]].

[F3] A closed form vanishing as a tensor along a closed submanifold has a
relative primitive whose first jet vanishes there.
[[lem-relative-poincare-primitive-near-a-submanifold]].

[F4] The Moser equation makes the evolving pullback constant, and smooth
time-dependent fields have unique local smooth evolutions.
[[lem-moser-pullback-differentiation-equation]],
[[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $df\oplus F:TM_0|_{S_0}\to TM_1|_{S_1}$ is a symplectic vector-bundle isomorphism: the two summands are symplectically orthogonal and each summand map is symplectic. We need tubular maps with a specified vertical derivative, not merely the existence clause of [F2]. Rerun its explicit proof using the smooth direct-sum complement $C_j=N^{\omega_j}S_j$ in place of the metric-orthogonal complement. In the proof's Euclidean-retraction construction, the map on $C_j$ has the form $(p,v)\mapsto j_j^{-1}R_j(j_j(i_j(p))+dj_j(v))$; its differential at $(p,0)$ is $(u,v)\mapsto di_j(u)+v$. The local-frame topology, inverse-function argument, and continuous variable-radius shrinking there use only injectivity of $dj_j|_{C_j}$ and $TM_j|_{S_j}=TS_j\oplus C_j$, so they apply to this complement unchanged. Write the resulting tubular maps as $\Psi_j$ on neighbourhoods in $C_j$. Then $h=\Psi_1\circ F\circ\Psi_0^{-1}$ is a diffeomorphism of neighbourhoods extending $f$, and its differential along $S_0$ is exactly $df\oplus F$. [F1, F2, given, construct]

2.1 Consequently $h^*\omega_1$ and $\omega_0$ agree as bilinear forms on all of $TM_0|_{S_0}$. Their convex interpolation $\Omega_t=(1-t)\omega_0+t h^*\omega_1$ is symplectic near $S_0$ after shrinking, because it equals $\omega_0$ on $S_0$ for every parameter and nondegeneracy is open. Put $\alpha=h^*\omega_1-\omega_0$. By [F3], $\alpha=d\sigma$ for a one-form $\sigma$ whose first jet vanishes on $S_0$. Solve $\iota_{X_t}\Omega_t=-\sigma$. The inverse bundle maps $\Omega_t^{-\flat}$ are smooth, so $X_t$ also has vanishing first jet on $S_0$. [F3, step 1.1, algebra]

3.1 The affine formula $\Omega_t=(1-t)\omega_0+t h^*\omega_1$ is smooth for all real $t$ and equals $\omega_0$ as a full tensor at each point of $S_0$ for every $t$. For each $p\in S_0$, compactness of $[0,1]$ and openness of nondegeneracy give a spatial neighbourhood $U_p$ and an open time interval $I_p\supset[0,1]$ on which $\Omega_t$ is nondegenerate. Thus $X_t=-\Omega_t^{-\flat}\sigma$ is genuinely defined on an open time domain near $( [0,1],p)$, as required by the local-evolution supplier in [F4]. Since $X_t$ and its first derivative vanish along $S_0$, the constant solutions and variational equation give a time-one evolution $g$ on some neighbourhood of each $p$, fixing $S_0$ with $dg|_{TM_0|_{S_0}}=I$. Uniqueness glues these local evolutions after shrinking their spatial domains; no uniform time collar is needed when $S_0$ is noncompact. The pullback differentiation equation in [F4] gives $g^*h^*\omega_1=\omega_0$. Thus $h\circ g$ is the required symplectomorphism and induces the prescribed $F$ on symplectic normal bundles. For empty $S_0$, take empty neighbourhoods and the empty map. [F4, step 1.1, step 2.1, construct] ∎
