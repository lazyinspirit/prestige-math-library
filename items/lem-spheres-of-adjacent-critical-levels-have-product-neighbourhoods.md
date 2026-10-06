---
id: lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods
kind: lemma
title: "Spheres of adjacent critical levels have product neighbourhoods"
status: published
origin: pipeline
dependency_level: 2
deps: [def-morse-function-adapted-to-a-cobordism, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, lem-gradient-flow-identifies-the-local-and-global-attaching-regions, thm-regular-interval-diffeomorphism, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, def-tubular-neighbourhood-of-an-embedded-submanifold, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "flow transport of local stable and unstable disks to a regular level"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f$ be adapted on a compact triad with adapted
field $X$, let $P$ (value $c$) and $Q$ (value $c'>c$) be consecutive critical
levels, and let $v\in(c,c')$ be regular. Let $D_q$ be the local unstable disk of
$q\in Q$ and $E_p$ the local stable disk of $p\in P$, provided by the local
stable/unstable manifold theorem. Then:

1. for every $q\in Q$ the set of points in which the trajectories through $D_q$
   cross $f^{-1}(v)$ is a compact embedded sphere $A_q$ of dimension
   $\operatorname{ind}(q)-1$, and for every $p\in P$ the crossing set $B_p$ of
   the trajectories through $E_p$ is a compact embedded sphere of dimension
   $n-\operatorname{ind}(p)-1$, with the convention $S^{-1}=\varnothing$, so
   these spheres are empty when the index is $0$, respectively $n$;
2. for $n\ge1$, each $A_q$ and $B_p$ has a product neighbourhood in the
   closed $(n-1)$-manifold $f^{-1}(v)$, transported by the normalized flow
   from the local model; for $n=0$, the regular fibre and all crossing
   sets are empty, their product-neighbourhood maps are the unique empty
   maps, and no manifold of dimension $-1$ is asserted;
3. a trajectory whose limits lie in $Q$ and $P$ crosses $f^{-1}(v)$ exactly
   once, at a point of $A_q\cap B_p$, and every such intersection point lies on
   such a trajectory.

## Facts & Assumptions

[F1] [[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]]: Let $p$ be a critical point of index $\lambda$ of a Morse function on an $n$-manifold, and let $X$ be downward gradient-like. In the Morse coordinates of its definition, the local unstable and stable manifolds are respectively $\{v=0\}\cong\mathbb R^\lambda$ and $\{u=0\}\cong\mathbb R^{n-\lambda}$; after restricting to sufficiently small balls they are embedded disks tangent at $p$ to the negative and positive Hessian eigenspaces.

[F2] [[thm-regular-interval-diffeomorphism]]: Assume $\mathrm{AC}_\omega$. If $a<b$ and the closed band $K=f^{-1}([a,b])$ of a smooth function on a boundaryless manifold is compact and critical-point-free, its normalized flow gives a level-preserving diffeomorphism $T:M_a\times[a,b]\to K$, $T(x,t)=\Phi_{t-a}(x)$.

[F5] [[def-morse-function-adapted-to-a-cobordism]]: An adapted pair $(f,X)$ on a triad has $f$ Morse, $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, constant on the faces, all critical points interior and nondegenerate, and $X$ complete downward gradient-like pointing outward along $M_0$ and inward along $M_1$.

[F7] [[lem-gradient-flow-identifies-the-local-and-global-attaching-regions]]: Assume $\mathrm{AC}_\omega$. Let $f^{-1}([a,b])$ be compact, with regular endpoints and exactly one critical point $p$ of index $k$ and value $c$. For the local Morse attaching embedding on $M_{c-\varepsilon}$, where $a<c-\varepsilon<c$, descending flow transports its entire thickening to $M_a$ as an embedded framed attaching region, provided there is no intervening critical value.

## Proof

**Given:** The adapted pair, the consecutive critical levels $c<c'$, and $c<v<c'$.

1.1 If $n=0$, the compact zero-manifold is finite and every point is critical; regularity therefore gives $f^{-1}(v)=\varnothing$. The field is zero, every trajectory is constant, and all crossing sets are empty, so all three assertions hold with the stated empty-map convention. For the rest of the proof assume $n\ge1$. For each $q\in Q$, choose a sufficiently small Morse chart and $\delta_q>0$ so that its local unstable sphere at level $c'-\delta_q$ is $\{v_q=0,\ |u_q|^2=\delta_q\}$ and $v<c'-\delta_q$. Likewise the local stable sphere at $p\in P$ is $\{u_p=0,\ |v_p|^2=\delta_p\}$ at $c+\delta_p<v$. Their dimensions are $\operatorname{ind}(q)-1$ and $n-\operatorname{ind}(p)-1$. The central point is retained in the local disk; its constant trajectory does not cross the intermediate level. [F1, F5, given, choose]

2.1 The compact bands from $v$ to $c'-\delta_q$ and from $c+\delta_p$ to $v$ have no critical points. Put $Z=X/(-df(X))$, so $df(Z)=-1$; it has the same descending trajectories as $X$. This is the downward version of the regular-product construction in [F2], whose displayed flow increases $f$. On each compact regular band $-df(X)$ has a positive minimum. Consequently $Z$ is smooth on a neighbourhood of the band, and compactness and finite-time continuation give its flow $\Psi$ for every time needed to reach the other endpoint; along it $f(\Psi_t(x))=f(x)-t$. Smooth dependence and reverse flow give mutually inverse smooth level maps, including the endpoints, by the same inverse argument as [F2]. Transport the unstable sphere and its thickening forward by time $c'-\delta_q-v$, and the stable sphere and its thickening backward by time $v-c-\delta_p$. Their images $A_q,B_p$ are embedded compact spheres; a local disk together with its transported spherical collar is still a disk. All local unstable points other than the centre eventually cross the local sphere in forward time, so their crossing set is exactly $A_q$, and the reversed assertion gives $B_p$. [F1, F2, F7, step 1.1, construct]

3.1 The local unstable sphere has an explicit product tube in its regular level: for small $z\in\mathbb R^{n-\operatorname{ind}(q)}$, use $(\omega,z)\mapsto(\sqrt{\delta_q+|z|^2}\,\omega,z)$ in its Morse chart. The $z$ coordinates trivialize its normal bundle. The symmetric formula trivializes the local stable sphere's normal bundle. The regular flow transports these product tubes, proving the product neighbourhood assertion. This uses the displayed trivializations, rather than inferring a trivial normal bundle from the tubular neighbourhood theorem. [F1, F2, step 2.1, construct]

4.1 A nonconstant trajectory with past limit $q$ eventually lies in its Morse chart, where $u(t)=e^{2t}u(0)$ and $v(t)=e^{-2t}v(0)$ force $v=0$ for convergence as $t\to-\infty$. It therefore crosses $A_q$. Convergence to $p$ in forward time similarly forces $u=0$ and crossing of $B_p$. Strict descent makes the intermediate crossing unique. Conversely an intersection belongs to the same unique trajectory through both local disks, so its past and future limits are $q,p$. At index zero the unstable disk is a point and $A_q$ is empty; at index $n$ the stable disk is a point and $B_p$ is empty. [F1, F2, F5, step 2.1, step 3.1, algebra] ∎
