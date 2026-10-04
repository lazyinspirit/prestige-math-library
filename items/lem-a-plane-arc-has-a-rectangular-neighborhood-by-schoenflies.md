---
id: lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies
kind: lemma
title: "Plane arc extension and rectangular neighborhoods"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 0
deps: [lem-jordan-schoenflies-extension-for-plane-curves, thm-singular-homology-satisfies-homotopy-exactness-and-excision, cor-homology-of-spheres, thm-banach-fixed-point, thm-euclidean-space-complete, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Carsten Thomassen, The Jordan–Schönflies Theorem and the Classification of Surfaces, Theorem 3.1, printed pp. 123–125; the arc form is derived here by a branched double cover"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
---

## Statement

Assume AC. If $a:[0,1]\hookrightarrow\mathbb R^2$ is an embedding, there is a
plane homeomorphism $G$ with $G(a(t))=(t,0)$ for every $t\in[0,1]$.
Consequently the arc has a rectangular neighborhood along its interior and
half-rectangle sector neighborhoods at its endpoints, obtained by transporting
those neighborhoods of the straight interval.

## Facts & Assumptions

**Given:** AC and the embedded arc $a$, with distinct endpoints $A=a(0)$ and
$B=a(1)$.

[F1] Under AC, any prescribed homeomorphism between Jordan curves extends
across their disk regions and to the plane
([[lem-jordan-schoenflies-extension-for-plane-curves]],
[[def-axiom-of-choice]]). The spherical version follows by stereographic
coordinates with poles off the curves; a plane homeomorphism extends at infinity
because its inverse takes compact sets to compact sets.

[F2] Singular homology is homotopy invariant, has natural exact pair sequences,
and satisfies CW excision
([[thm-singular-homology-satisfies-homotopy-exactness-and-excision]]).
The integral top homology of $S^1$ and $S^2$ is $\mathbb Z$, by
[[cor-homology-of-spheres]].

[F3] A contraction on the complete Euclidean plane has a unique fixed point
([[thm-banach-fixed-point]], [[thm-euclidean-space-complete]]).

## Proof

1.1 *The normalized arc and its double lift.* Identify the plane with $\mathbb C$ and its compactification with the sphere. The Möbius homeomorphism $M(z)=(z-A)/(z-B)$ takes the endpoints to $0,\infty$. Its value at the original plane-infinity is $1$, which is not on the normalized arc $b=M\circ a$. For $0<t<1$, $b(t)$ lies in $\mathbb C^*$. Lift its argument continuously on that interval and set $c(t)=|b(t)|^{1/2}\exp(\mathrm{i}\arg(b(t))/2)$. Such an argument is obtained by continuing the elementary local argument on successive compact subintervals. Then $c(t)^2=b(t)$, and $c$ is injective since $b$ is. Extend $c$ at the endpoints by $c(0)=0,c(1)=\infty$: convergence of its modulus proves continuity even if its angle has no endpoint limit. The two arcs $c$ and $-c$ have disjoint interiors; equality $c(t)=-c(u)$ would give $b(t)=b(u)$, hence $t=u$ and $c(t)=0$, impossible in the interior. Their union $J$ is a Jordan curve on the sphere. The involution $\tau(z)=-z$ fixes $0,\infty$ and exchanges these two arcs. [given, construct]

2.1 *Why the involution exchanges the complementary disks.* By [F1], the two closed complementary regions of $J$ are disks. Parametrize $J$ by $c(t)$ on one semicircle and $-c(t)$ on the other, with equal $t$ at reflected circle parameters. Its restriction $\tau|_J$ is therefore circle reflection and acts as $-1$ on $H_1(J;\mathbb Z)$ (reverse the oriented circle cycle). In contrast $\tau$ is a sphere rotation homotopic to the identity through $z\mapsto e^{\mathrm{i}\pi u}z$, so its action on $H_2(S^2;\mathbb Z)$ is $+1$. If it preserved one complementary disk $U$, it would preserve the other disk $V$. Give the sphere its two-disk CW structure using [F1]. The pair sequence gives an isomorphism $H_2(S^2)\to H_2(S^2,\overline V)$ since $\overline V$ is contractible. CW excision identifies this relative group with $H_2(\overline U,J)$, and its boundary map to $H_1(J)$ is an isomorphism since $\overline U$ is a disk. Naturality [F2] would then force the action of $\tau$ on $H_1(J)$ to be $+1$, a contradiction. Hence $\tau$ exchanges the two complementary disks. [F1, F2, step 1.1]

3.1 *An equivariant relative extension.* Set $r(t)=t/(1-t)$, with $r(0)=0,r(1)=\infty$, and prescribe $f(c(t))=r(t)$ and $f(-c(t))=-r(t)$. This is a homeomorphism $J\to\mathbb R\cup\{\infty\}$ commuting with $\tau$. Choose one source disk $U$ and extend $f$ from its boundary to the closed upper hemisphere by [F1]: take the stereographic pole in the other source disk and a target pole in the lower hemisphere, so both relevant regions are bounded Jordan disks in their plane charts. Call this extension $F_+$. On the other source disk define $F_- =\tau\circ F_+\circ\tau$. Step 2.1 ensures this definition has the right domain and maps it to the lower hemisphere. On $J$ it agrees with $F_+$ because $f\tau=\tau f$. Pasting the two maps and their inverses gives a sphere homeomorphism $F$ commuting with $\tau$ and fixing $0,\infty$. [F1, step 1.1, step 2.1, construct]

4.1 *Descending and restoring the plane point.* The quotient of the sphere by $\tau$ is the sphere through the map $p(z)=z^2$, with $p(\infty)=\infty$. Its fibers are exactly $\{z,-z\}$, and compactness makes $p$ a quotient map. Therefore $F$ and $F^{-1}$ descend to inverse sphere homeomorphisms $g$ with $g(b(t))=r(t)^2$. The point $v=g(1)$ lies outside the positive real ray $[0,\infty]$, because $1\notin b([0,1])$. Move $v$ to $-1$ by a homeomorphism $L$ fixing that ray pointwise. Here is an explicit existence construction: the ray complement is the slit plane with polar angle in $(0,2\pi)$. Rotate the polar angle of $v$ within this interval to $\pi$, then change its radius along the negative real axis to reach $-1$. Approximate this compact path by a finite polygonal path inside the open slit plane. Choose $\delta>0$ less than one third of the distance from this compact polygonal path to the closed positive ray. Subdivide its finitely many segments so each displacement $w$ has length below $\delta/4$. At the current path vertex $x_0$, use $\eta(x)=\max(0,1-\lVert x-x_0\rVert/\delta)$ and the map $x\mapsto x+w\eta(x)$. It moves $x_0$ to the next vertex, is supported in the closed $\delta$-ball about $x_0$, and $\lVert w\rVert\operatorname{Lip}(\eta)<1/4$. The finitely many supports form a compact subset of the ray complement. They are injective by this bound and surjective by [F3] applied to the contraction equation $x=y-w\eta(x)$, Their inverses are Lipschitz with constant at most $1/(1-\lVert w\rVert\operatorname{Lip}(\eta))$, by the same lower distance bound. Thus finite small translations move the point along the path and fix its complement. This constructs $L$ supported away from the ray. Define the Möbius homeomorphism $T(z)=z/(1+z)$, with $T(-1)=\infty$ and $T(\infty)=1$. Now $T L g M$ fixes the original sphere-infinity, since its successive images are $1,v,-1,\infty$, hence restricts to a plane homeomorphism, and takes $a(t)$ to $r(t)^2/(1+r(t)^2)$. [F3, step 1.1, step 3.1, construct]

5.1 *The prescribed parameter and neighborhoods.* The increasing homeomorphism $\lambda(t)=r(t)^2/(1+r(t)^2)$ of $[0,1]$ has fixed endpoints. Extend $\lambda^{-1}$ to an increasing homeomorphism $\Lambda$ of $\mathbb R$ equal to the identity outside $[0,1]$. Postcompose step 4.1 with $(x,y)\mapsto(\Lambda(x),y)$ to obtain $G(a(t))=(t,0)$. Transport straight rectangular and endpoint-sector neighborhoods by $G^{-1}$. This proves the conclusion, with AC used precisely in the relative Jordan–Schönflies extensions of steps 2.1 and 3.1. No collar was inferred merely from connectivity of an arc complement. [F1, step 4.1, construct] ∎
