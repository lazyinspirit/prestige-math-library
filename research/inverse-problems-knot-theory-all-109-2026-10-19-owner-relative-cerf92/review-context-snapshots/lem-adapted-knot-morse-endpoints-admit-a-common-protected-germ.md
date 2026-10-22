---
id: lem-adapted-knot-morse-endpoints-admit-a-common-protected-germ
kind: lemma
title: "Adapted knot Morse endpoints admit a common protected germ"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-cyclically-marked-knot-tubes-admit-protected-morse-data
  - lem-knot-function-germs-with-matched-critical-models-are-relatively-isotopic
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
  - def-downward-gradient-like-vector-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $M$ be a compact closed oriented smooth three-manifold with a specified smooth Riemannian metric. Let an oriented embedded circle $K$ have the cyclic ordered marks $w_i,z_i$ and a supplied tubular product as in the protected knot-tube lemma. For $j=0,1$ suppose $g_j:M\to\mathbb R$ is Morse and $Y_j$ is an adapted descending field tangent to $K$. Suppose $g_j=1/2$ at the marks, its only critical points on $K$ are one minimum of value zero on each oriented arc $w_i\to z_i$ and one maximum of value one on each arc $z_i\to w_{i-1}$, and these extrema have ambient indices zero and three, respectively.

There exist orientation-preserving ambient diffeomorphisms $T_j$, isotopic to the identity, preserving the oriented $K$ and fixing every mark, such that $g_j\circ T_j$ agree with ONE protected function $F$ on a common smaller tubular neighborhood of $K$. Moreover the transported fields can be modified within that neighborhood, away from all other critical points, to adapted descending fields for $g_j\circ T_j$ that agree there on a still smaller neighborhood with ONE protected field $X$ tangent to $K$. The pair $(F,X)$ has exactly the local models and marked normal-disk levels of the protected knot-tube lemma. All other critical points and the endpoint functions up to ambient transport are retained.

This normalizes already supplied global endpoint functions and fields. It does not supply those endpoints, a relative generic path, index grouping or a diagram-move theorem.

## Statement references

[[lem-cyclically-marked-knot-tubes-admit-protected-morse-data]]

[[lem-knot-function-germs-with-matched-critical-models-are-relatively-isotopic]]

## Facts & Assumptions

**Given:** The supplied metric, tubular product, marks and two global adapted endpoint pairs.

[F1] There is an explicit common tubular pair $(F,X)$ with restriction $f$ on $K$, quadratic extrema and exactly the marked normal disks as its level $1/2$. ([[lem-cyclically-marked-knot-tubes-admit-protected-morse-data]])

[F2] Two given function germs with the same restriction to $K$ and equality near its finite tangential critical set are related by a supported ambient isotopy fixing $K$ pointwise and stationary near that set. ([[lem-knot-function-germs-with-matched-critical-models-are-relatively-isotopic]])

[F3] Smooth local inverses exist, with parameters by adjoining the parameter coordinate; compact-set cutoffs exist, and compactly supported smooth time-dependent fields have smooth global evolution. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]])

[F4] In exact adapted Morse coordinates a minimum field is $-2x$ and a maximum field is $2x$. Strict descent holds at every other point. ([[def-downward-gradient-like-vector-field]])

[A1] Countable Choice is assumed; all additional constructions and selections below are finite. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Choose $(F,X)$ from [F1] and put $f=F|_K$. The restriction of $g_j$ has no critical point on $K$ other than the stated extrema: elsewhere $Y_j$ is nonzero and tangent to $K$, and $dg_j(Y_j)<0$ by [F4]. Near an extremum choose its adapted Morse chart. Its zero-section arc consists locally of two opposite radial rays. Indeed in that chart the field is $\mp2x$, so each invariant connected arc branch is a ray; smooth embeddedness through the origin forces the two rays to have the same tangent line and opposite directions. After an orthogonal coordinate change the arc is the first coordinate axis. Thus $g_j|_K$ has an ordinary nondegenerate one-variable extremum, with signed coordinate $q_j$ given by the oriented signed square root of $g_j$ or $1-g_j$. It is strictly monotone on every segment between a mark and its adjacent extremum. [F1, F4, given, construct, algebra]

2.1 Define an orientation-preserving diffeomorphism $h_j:K\to K$, fixing all the marks, by $g_j(h_j(s))=f(s)$ on each monotone segment. Away from the extrema this is the unique inverse of the corresponding monotone branch. At an extremum the formula is $h_j=q_j^{-1}\circ q$, where $q$ is the oriented signed square root for $f$; these smooth coordinates have nonzero derivative. At a mark the two definitions use the SAME local monotone inverse across that mark, so their germs agree there. Hence $h_j$ is globally smooth with positive derivative. Choose an oriented real lift fixing one marked lift. It fixes all marked lifts, and $h_{j,t}(s)=(1-t)s+th_j(s)$ has positive derivative for every $t$. This descends to an isotopy of $K$ fixing every mark. In the supplied tubular product extend it by $(s,z)\mapsto(h_{j,t\chi(|z|^2)}(s),z)$, where $\chi=1$ near zero and vanishes near the tube edge. For each $z$ the longitudinal map is a circle diffeomorphism; the derivative is block triangular with positive longitudinal entry and identity normal block, so these are ambient diffeomorphisms, extended by the identity outside the tube. Pull back $(g_j,Y_j)$ by the time-one maps. We may now write $g_j|_K=f$ with all extrema at the same points. [F3, step 1.1, construct, algebra]

3.1 At each such critical point choose an orientation-preserving adapted chart for the pulled-back pair with its first axis equal to the oriented $K$. This is possible by step1.1 and an orthogonal rotation; a reflection in one normal coordinate corrects a chart orientation if needed without changing its quadratic function or radial field. The first coordinate on $K$ is exactly the same signed square root $q$ as for $(F,X)$. Comparing with [F1]'s chart gives an orientation-preserving local diffeomorphism $\psi$ FIXING $K$ pointwise, with $g_j\circ\psi=F$ and $\psi^*Y_j=X$ near the critical point. These local comparisons have disjoint domains, contain no mark and contain no other critical point. We next extend them without losing the pointwise fixing condition. [F1, F4, step 1.1, step 2.1, construct]

4.1 In local coordinates where $K$ is the first axis, a germ $\psi$ fixing that axis pointwise has derivative $L(s,z)=(s+bz,Az)$ with $\det A>0$. Join $L$ to the identity through matrices fixing the axis: remove $b$, and use the two-dimensional Gram–Schmidt factorization $A=QR$, with $Q$ a plane rotation and $R$ upper triangular with positive diagonal, to join $A$ to the identity. Every associated velocity vanishes on the axis. The scaled germs $\psi_t(x)=t^{-1}\psi(tx)$, extended by $\psi_0=L$, also fix the axis pointwise. They are smooth jointly in $t,x$ by $\psi_t(x)=\int_0^1D\psi(utx)x\,du$. On one sufficiently small ball their derivatives are uniformly close to $L$, so the line-segment estimate and the contraction proof of [F3]'s inverse theorem give smooth inverses on a common smaller image ball for all $t$. The velocity $(\partial_t\psi_t)\circ\psi_t^{-1}$ is smooth there and vanishes on the axis. Multiply it by a bump equal to one near the origin and supported inside the comparison chart; [F3] gives an ambient isotopy fixing $K$ pointwise and realizing the germ $\psi L^{-1}$. The same construction for the linear path realizes $L$. Compactness of the time interval ensures agreement on a sufficiently small neighborhood throughout, and their composition realizes $\psi$. Performing this finitely at the disjoint critical charts yields a global diffeomorphism fixing $K$, all marks and all other critical neighborhoods. After pulling back, the endpoint pairs agree with $(F,X)$ on neighborhoods of all critical points on $K$, and their restrictions still equal $f$. [F3, step 3.1, construct, algebra]

5.1 Apply [F2] to each now-matched function $g_j$ and $F$ on a small common tubular neighborhood, using the identity near the critical points just obtained. It gives a further ambient diffeomorphism fixing $K$ pointwise and stationary near those critical points, so that after its pullback $g_j=F$ on a neighborhood of $K$. Composition with steps2.1 and4.1 defines $T_j$. These maps preserve orientation because they are obtained by ambient isotopies from the identity. Both endpoint fields remain exactly $X$ near the critical points on $K$ and remain tangent to $K$ after transport. Shrink the common neighborhood so that it contains no other critical point of either endpoint function; their finitely many other critical points are separated from compact $K$. [F2, F3, step 2.1, step 4.1, construct]

6.1 On this common neighborhood both transported fields $Z_j$ and the fixed $X$ strictly decrease the SAME function $F$ off its critical set. Choose a smooth cutoff $\alpha$ supported there and equal to one on a smaller neighborhood of $K$, and replace $Z_j$ by $\alpha X+(1-\alpha)Z_j$. This convex combination strictly decreases $F$, equals the same $X$ near $K$, agrees with $Z_j$ outside the chosen neighborhood, and is unchanged in every critical chart: on the protected critical charts both fields already agree, while all other critical charts are disjoint from its support. It is therefore an adapted descending field for $g_j\circ T_j$. The functions, extrema, other critical points and all diagram data have changed only by the stated explicit ambient transport. Restricting to a common smaller positive tube proves all clauses. [F1, F3, F4, step 4.1, step 5.1, construct, algebra] ∎
