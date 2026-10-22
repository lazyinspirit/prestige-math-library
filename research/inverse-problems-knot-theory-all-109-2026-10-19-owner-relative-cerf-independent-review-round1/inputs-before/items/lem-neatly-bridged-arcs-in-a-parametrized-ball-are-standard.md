---
id: lem-neatly-bridged-arcs-in-a-parametrized-ball-are-standard
kind: lemma
title: "Neatly bridged arcs in a parametrized ball are standard"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-supported-neat-proper-isotopies-extend-boundary-preservingly
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $B$ be an oriented smooth three-ball with a supplied orientation-preserving diffeomorphism $b:B\to D^3$. Write $H=\{(u,v):u^2+v^2\le1,\ v\ge0\}$. Suppose a supplied smooth embedded bridge half-disk $\gamma:H\to B$ maps the bottom edge into $\partial B$, maps its remaining points into $\operatorname{Int}B$, is transverse to $\partial B$ along the bottom edge, and is smooth as a map of manifolds with corners at the two endpoints. Its semicircular edge is a smooth neat proper arc $a$ in $B$. Then an orientation-preserving diffeomorphism of $B$ carries $a$ to $b^{-1}(\{(s,0,0):-1\le s\le1\})$. Either order of its two endpoints can be prescribed. In fact this diffeomorphism is isotopic to the identity through diffeomorphisms preserving $\partial B$ setwise.

All other specified data in the ball, including finitely many disk faces, may be transported by that diffeomorphism. They are not asserted to be fixed. The neat bridge parametrization is part of the input; this lemma does not infer it from an unparametrized or nonneat topological bridge disk.

## Facts & Assumptions

**Given:** The ball parametrization and neat bridge half-disk in the Statement.

[F1] A compact-source neat proper isotopy extends to a boundary-preserving ambient isotopy under Countable Choice. ([[lem-supported-neat-proper-isotopies-extend-boundary-preservingly]])

[F2] A smooth Euclidean map with invertible derivative has a smooth local inverse, without a choice assumption. Applying it to $(t,x)\mapsto(t,h_t(x))$ gives the local inverse with parameter. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

[F3] Compact-set bumps exist; compactly supported smooth time-dependent fields have global smooth evolution on a compact time interval. A field tangent to the boundary preserves it: in a boundary chart its normal component has the form $rA$, so $r(t)=r(0)\exp(\int A)$ stays nonnegative in both time directions. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]])

[A1] Countable Choice is permitted; all geometric selections and chart refinements in the proof are finite. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 For $0<\epsilon<1$ choose a smooth decreasing scalar $\lambda_t$ from one to $\epsilon$, and parametrize the semicircle by any smooth regular parametrization $c:[0,1]\to H$. The arcs $a_t(s)=\gamma(\lambda_t c(s))$ form a smooth isotopy of neat proper embeddings. Indeed scalar contraction is injective; interior points have positive $v$ and map into the interior of $B$, while its two endpoints remain on the bottom edge and map into $\partial B$. Their inward tangent has positive $v$ component, so the assumed transversality of $\gamma$ makes the arcs transverse to $\partial B$. By [F1] this isotopy extends to a boundary-preserving ambient isotopy $A_t$ of $B$. The final arc is the semicircle of radius $\epsilon$ in the bridge coordinates, lying in an arbitrarily small neighborhood of $\gamma(0,0)$. Its endpoints are allowed to move; no fixed-mark assertion is being used. [F1, given, construct]

1.2 We record explicitly that any orientation-preserving germ of boundary charts extends to a boundary-preserving ambient diffeomorphism of $B$ isotopic to the identity, allowing their centers to differ. First move the center along a smooth path in $\partial B$ by finitely many chart-supported tangential fields. Such a path exists explicitly after the supplied identification of $\partial B$ with $S^2$: join by great-circle segments and smooth their parameter joins. In each sufficiently small boundary chart a short coordinate segment is followed by a constant tangential field times a bump equal to one on that segment. Extend these boundary fields through a collar in the chart and cut them off before its inner edge; [F3] gives the desired finite sequence of boundary-preserving flows. It remains to extend a germ $h$ fixing a boundary-chart origin. It preserves the halfspace and has positive determinant. Its derivative has block form $L(x,r)=(Ax+vr,cr)$ with $c>0$ and $\det A>0$. These matrices admit a path from the identity: remove $v$, move $c$ positively to one, and join $A$ to the identity. For the last step Gram–Schmidt gives $A=QR$ with $Q\in SO(2)$ and $R$ upper triangular with positive diagonal; join $R$ linearly to the identity and $Q$ by its plane rotation. The associated linear isotopy of halfspace germs extends by integrating its velocity times a bump equal to one near the origin. All these velocities are tangent to $r=0$. Compactness of the parameter interval ensures that a sufficiently small initial neighborhood stays where the bump is one, so the resulting map has exactly the germ $L$. [F3, given, construct, algebra]

2.1 The bridge coordinates extend to an ambient boundary chart near $\gamma(0,0)$. To verify this without an extension assumption, take an ambient chart with normal coordinate $r\ge0$. In it write $\gamma(u,v)=(g(u,v),v\alpha(u,v))$, where $g$ has two tangential components and $\alpha>0$ near zero; the factorization follows from its zero normal coordinate on $v=0$ and its positive normal derivative. Choose a tangential vector $e$ independent of $\partial_u g(0,0)$ and set $C(u,v,z)=(g(u,v)+ze,v\alpha(u,v))$. Its derivative at zero is invertible. By [F2] it is an ambient chart after shrinking, preserves the boundary $v=0$, and agrees with $\gamma$ when $z=0$. The sign of $e$ can be chosen to orient this chart as prescribed. Thus the final arc of step1.1 is an exact standard little semicircle in a boundary chart, not merely a close approximation. [F2, step 1.1, construct, algebra]

2.2 To extend the nonlinear part, use $h_t(x)=t^{-1}h(tx)$ for $t>0$ and $h_0(x)=Lx$. Smoothness at $t=0$ follows from $h_t(x)=\int_0^1 Dh(stx)x\,ds$. For all sufficiently small $x$ and all $t\in[0,1]$, $Dh_t(x)=Dh(tx)$ is uniformly close to the invertible $L$. The line-segment integral therefore gives $|h_t(x)-h_t(y)|\ge c_0|x-y|$ on a fixed small half-ball, and [F2] gives smooth inverses on the images, with parameter. These images contain one common smaller half-ball: the usual contraction proof of [F2], with the same derivative bound for all $t$, gives a uniform image radius. Boundary preservation is also uniform, since $h^r(x,r)=r\beta(x,r)$ with $\beta>0$, whence $h_t^r(x,r)=r\beta(tx,tr)$. On that common smaller image neighborhood the velocity $(\partial_t h_t)\circ h_t^{-1}$ is smooth and tangent to the boundary. Multiply by a supported bump equal to one near zero and integrate by [F3]. The maps $h_t h_0^{-1}$ are then exactly its local evolution near zero, by uniqueness and by shrinking the initial neighborhood uniformly over the compact time interval. This realizes the germ $hL^{-1}$. Compose with the linear-germ extension of step1.2 to realize $h$. This proves the chart-germ extension used here, with compact support in finitely many boundary charts and no global disk-extension theorem. [F2, F3, step 1.2, construct, algebra]

3.1 The standard diameter in $D^3$ has a bridge half-disk of exactly the required kind. In the complex plane set $$T(z)=\frac{(i-1)+(i+1)\overline z}{(i+1)+(i-1)\overline z},\qquad z=u+iv\in H,$$ and put $\gamma_*(u,v)=(\operatorname{Re}T(z),\operatorname{Im}T(z),0)$. Its denominator vanishes only at $z=-i$, outside $H$. It is a smooth diffeomorphism of the half-disk onto itself, interchanging the bottom edge and semicircle: the map $w=(1+z)/(1-z)$ identifies their interiors with the two rays of the first quadrant, and $w\mapsto i\overline w$ interchanges them. The displayed rational formula also proves smooth nondegeneracy at $z=\pm1$, where that quadrant expression uses infinity. Thus the bottom edge of $H$ maps to the upper semicircle in $\partial D^3$, its semicircular edge maps to the diameter, and it is transverse to the boundary along the bottom edge. Pull back by $b$ to obtain a bridge disk $\gamma_0$ for the desired target arc in $B$. Apply steps1.1–2.1 to it, giving a contraction isotopy $A^0_t$ and an adapted boundary chart. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Choose the two contraction radii equal and sufficiently small that both final little semicircles lie in their adapted charts. The map from one adapted chart to the other carrying equal coordinates is an orientation-preserving boundary-chart germ, by choosing their transverse-coordinate signs consistently. Steps1.2 and2.2 extend it to an ambient diffeomorphism $G$ isotopic to the identity; shrink the common radius further so its final semicircle lies in the neighborhood where this germ is realized exactly. Therefore $(A^0_1)^{-1}GA_1$ takes the original arc to the prescribed diameter. Changing the bridge coordinate $u$ to $-u$ in one chart and reversing its transverse coordinate simultaneously preserves ambient orientation and exchanges the endpoint correspondence, so either order is attainable. Each factor is isotopic to the identity through boundary-preserving diffeomorphisms, so is their composite. Transport of any additional data is simply its image under this diffeomorphism; pointwise preservation of those data was never claimed. [step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, construct] ∎
