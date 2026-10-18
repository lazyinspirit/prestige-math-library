---
id: lem-unstable-orientations-induce-trajectory-moduli-orientations
kind: lemma
title: "Unstable orientations induce orientations of the trajectory moduli spaces"
status: published
origin: pipeline
deps: [def-orientation-line-of-a-morse-critical-point, def-parametrized-morse-trajectory-space, def-transverse-smooth-maps, thm-transverse-fibre-product-theorem, prop-parametrized-morse-trajectory-space-is-a-manifold, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-product-orientation, def-oriented-smooth-manifold-and-oriented-chart, prop-pointwise-orientation-sign-of-a-local-diffeomorphism, lem-stable-and-unstable-manifolds-are-flow-invariant, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-fundamental-theorem-on-flows, def-downward-gradient-like-vector-field, lem-time-translation-acts-freely-on-nonconstant-trajectories, thm-unparametrized-trajectory-space-is-a-smooth-manifold, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, def-morse-smale-pair, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Sec. 2.8, printed pp. 69-70 (oriented unstable manifold co-orients the stable manifold; canonical orientation of transverse intersections; the comparison sign $\\epsilon(W)$)"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Remark 2.5.3(a), printed pp. 65-66 (exact sequence $0\\to T(X\\cap Y)\\to TX\\to N_MY\\to 0$; flow orientation comparison)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3, printed pp. 70-71 (oriented moduli spaces from orientations of the stable/unstable manifolds)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 7, printed pp. 55-68 (determinant-line orientations and their compatibility)"
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(f,X)$ be Morse--Smale on a manifold $M$, with $X$ downward gradient-like in the normalized Morse-coordinate sense, and choose an orientation $or_s$ of $W^u(s)$ for every critical point $s$ ([[def-orientation-line-of-a-morse-critical-point]]). Then:
1. for every $y$, a local extension of $or_y$ followed by flow transport orients a chosen unstable complement in a flow-invariant splitting $TM|_{W^s(y)}=TW^s(y)\oplus E^u$, hence to a co-orientation of $W^s(y)$ independent of the chosen complement;
2. for all distinct critical points $x,y$ with $W^u(x)\pitchfork W^s(y)$, the transverse intersection $W^u(x)\cap W^s(y)$ carries the canonical orientation induced by $or_x$ and the co-orientation of $W^s(y)$ ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]), which orients the parametrized moduli space $\widetilde{\mathcal M}(x,y)$ under the published identification ([[def-parametrized-morse-trajectory-space]], [[prop-parametrized-morse-trajectory-space-is-a-manifold]]);
3. if $\lambda(x)-\lambda(y)=1$, each connected component $\gamma$ of $\widetilde{\mathcal M}(x,y)$ is a flow line, and the comparison sign
$$\epsilon(\gamma):=\begin{cases}+1,&\text{the intersection orientation agrees with the positive flow orientation of }\gamma,\\ -1,&\text{otherwise}\end{cases}$$
is therefore well defined ([[prop-pointwise-orientation-sign-of-a-local-diffeomorphism]]);
4. the unparametrized moduli space $\mathcal M(x,y)$, of dimension $\lambda(x)-\lambda(y)-1$, is oriented by the flow-first convention on $T_\gamma\widetilde{\mathcal M}(x,y)=\mathbb R\cdot\dot\gamma\oplus T_\gamma\mathcal M(x,y)$ ([[def-product-orientation]]), the line $\mathbb R\cdot\dot\gamma$ carrying the positive flow orientation.
Replacing $or_x$ by its opposite reverses the orientation in (2)-(4); replacing $or_y$ by its opposite reverses the co-orientation in (1) and again reverses the induced orientations.

## Facts & Assumptions

**Given:** A Morse--Smale pair $(f,X)$ on an $n$-manifold $M$, a critical point $y$ of index $\lambda(y)$, and a choice of orientation $or_s$ of $W^u(s)$ for every critical point $s$; the Axiom of Countable Choice is assumed for the orientation transport used in step 4.1.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice function. It is spent only in step 4.1, through [F4] ([[def-countable-choice]]).

[F1] The orientation line of $s$ is $o_s=\det T_sW^u(s)$; an orientation of $s$ is a ray in $o_s$, equivalently an orientation of the disk $W^u(s)$ ([[def-orientation-line-of-a-morse-critical-point]]).

[F2] $W^u(s)$ and $W^s(s)$ are immersed submanifolds diffeomorphic to $\mathbb R^{\lambda(s)}$ and $\mathbb R^{n-\lambda(s)}$; they are invariant under every flow diffeomorphism $\Phi_t$, and the unstable manifold is tangent to the flow ([[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]], [[lem-stable-and-unstable-manifolds-are-flow-invariant]], [[thm-fundamental-theorem-on-flows]]).

[F3] At each critical point $y$ there are Morse coordinates $(u,v)$ centred at $y$ in which $f=f(y)-|u|^2+|v|^2$ and $X=2u\partial_u-2v\partial_v$; the local stable and unstable disks are $\{u=0\}$ and $\{v=0\}$, and tangent vectors to the unstable manifold decay exponentially backward along orbits converging to a critical point ([[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]], [[def-downward-gradient-like-vector-field]]).

[F4] Under $\mathrm{AC}_\omega$, for an embedded submanifold any two of the orientations of ambient tangent bundle, tangent bundle and transverse normal bundle determine the third, through $\det(TM|_S)\cong\det(TS)\otimes\det(\nu S)$ ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]], [A1]).

[F5] Product orientations: the ordered determinant isomorphism $\det(V\oplus W)\cong\det V\otimes\det W$ multiplies rays, so orienting two of $V$, $W$, $V\oplus W$ determines the third ([[def-product-orientation]]).

[F6] Evaluation at $0$ is a bijection of $\widetilde{\mathcal M}(x,y)$ onto $W^u(x)\cap W^s(y)$; the parametrized space is a smooth manifold of dimension $\lambda(x)-\lambda(y)$ with the intersection smooth structure, the transverse fibre product is an embedded submanifold, and $\operatorname{ev}_0(t\cdot\gamma)=\Phi_t(\operatorname{ev}_0(\gamma))$ ([[def-parametrized-morse-trajectory-space]], [[prop-parametrized-morse-trajectory-space-is-a-manifold]], [[thm-transverse-fibre-product-theorem]]).

[F7] On oriented manifolds the sign comparing two orientations at a point is locally constant, and an orientation is a smooth ray field ([[prop-pointwise-orientation-sign-of-a-local-diffeomorphism]], [[def-oriented-smooth-manifold-and-oriented-chart]]).

[F8] For $f(y)<c<f(x)$ a regular value, evaluation identifies $\mathcal M(x,y)$ with $\widetilde{\mathcal M}(x,y)\cap f^{-1}(c)$, a smooth manifold of dimension $\lambda(x)-\lambda(y)-1$, and at a trajectory $\gamma$ the tangent space of the parametrized space splits as $T_\gamma\widetilde{\mathcal M}(x,y)=\mathbb R\cdot\dot\gamma\oplus T_\gamma\mathcal M(x,y)$, the first line generated by the nonzero flow vector $\dot\gamma$ ([[thm-unparametrized-trajectory-space-is-a-smooth-manifold]], [[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]]).

[F9] The time-translation action on $\widetilde{\mathcal M}(x,y)$ is free for $x\ne y$, so the orbit map $t\mapsto t\cdot\gamma$ is injective ([[lem-time-translation-acts-freely-on-nonconstant-trajectories]]).

## Proof

**Proof technique:** direct.

1.1 Fix a critical point $y$, a Morse chart as in [F3] and write its coordinates as $(u,v)$ with $|u|$ of length $\lambda(y)$. Let $E^u$ be the subbundle of $TM$ over $W^s(y)\cap U$ whose fibre at a point $(0,v)$ is the span of the coordinate fields $\partial_{u_1},\dots,\partial_{u_{\lambda(y)}}$; since $W^s(y)\cap U=\{u=0\}$ in these coordinates, $T_{(0,v)}M=T_{(0,v)}W^s(y)\oplus E^u_{(0,v)}$ is a direct sum, and $E^u$ is a smooth rank-$\lambda(y)$ subbundle. In the same coordinates $\Phi_t(u,v)=(e^{2t}u,e^{-2t}v)$, so $D\Phi_t$ carries $E^u_z$ isomorphically onto $E^u_{\Phi_t(z)}$: the local flow preserves the subbundle. [F2, F3, construct]

2.1 The ray $or_y$ is a ray in $\det E^u_y$ by [F1]. Let $r$ be the ray field on $E^u$ over $W^s(y)\cap U$ that is constant in the coordinates of step 1.1 and equals $or_y$ in the fibre at $y$. Because $D\Phi_t$ acts on that coordinate frame by the positive factor $e^{2t}$, it maps the ray at $z$ to the ray at $\Phi_t(z)$; hence $r$ is a smooth flow-invariant orientation of $E^u$ near $y$, and it co-orients $W^s(y)$ there. [F1, F3, F7, step 1.1]

3.1 Let $p\in W^s(y)$; then $\Phi_t(p)\to y$ as $t\to\infty$ by [F2], so for all sufficiently large $t$ the points $\Phi_t(p)$ lie in $W^s(y)\cap U$ and the flow segments joining them stay in $U$, by the explicit local model of [F3]. For any such $t$ put $E^u_p:=D\Phi_{-t}\bigl(E^u_{\Phi_t(p)}\bigr)$ and $r_p:=D\Phi_{-t}\bigl(r_{\Phi_t(p)}\bigr)$. If $t\le t'$ are both large enough, then flow-invariance within the chart gives $D\Phi_{-(t'-t)}(E^u_{\Phi_{t'}(p)})=E^u_{\Phi_t(p)}$ and $D\Phi_{-(t'-t)}(r_{\Phi_{t'}(p)})=r_{\Phi_t(p)}$, so $D\Phi_{-t'}=D\Phi_{-t}\circ D\Phi_{-(t'-t)}$ shows that the pair $(E^u_p,r_p)$ does not depend on $t$. Since $D\Phi_{-t}$ is a linear isomorphism it preserves direct sums, so $T_pM=T_pW^s(y)\oplus E^u_p$ for every $p\in W^s(y)$; the choice of $t$ can be made locally constant in $p$ by continuity of the flow, so $E^u$ is a smooth subbundle of $TM|_{W^s(y)}$ and $r$ a smooth ray field on it, i.e. a co-orientation of $W^s(y)$. The complement may depend on the Morse chart, but its orientation induces an orientation of the canonical normal quotient $TM|_{W^s(y)}/TW^s(y)$. Any other chart gives a continuous orientation of this same quotient agreeing with it at $y$; the sign comparing them is locally constant on the connected manifold $W^s(y)$, so they agree everywhere. Thus the co-orientation, rather than the complement subbundle, is canonical. [F2, F3, F7, step 1.1, step 2.1]

4.1 Let $x,y$ be critical points with $W^u(x)\pitchfork W^s(y)$ and let $p\in W^u(x)\cap W^s(y)$. The co-orientation of step 3.1 orients the normal bundle $\nu:=TM|_{W^s(y)}/TW^s(y)\cong E^u$ of $W^s(y)$, and the orientation $or_x$ of [F1] orients $T_pW^u(x)$. The composition $T_pW^u(x)\to T_pM\to\nu_p$ is onto with kernel $T_p(W^u(x)\cap W^s(y))$, because transversality says $T_pW^u(x)+T_pW^s(y)=T_pM$; thus $$0\to T_p(W^u(x)\cap W^s(y))\to T_pW^u(x)\to\nu_p\to0$$ is exact. By the two-of-three determinant-line rule of [F4], applied through the ordered splitting of [F5], the orientation of the middle term together with the orientation of the quotient determines a ray in the determinant line of the kernel, i.e. an orientation of $T_p(W^u(x)\cap W^s(y))$; both inputs are smooth in $p$, and the pointwise comparison of two local constructions is locally constant by [F7], so these rays form a smooth orientation of $W^u(x)\cap W^s(y)$, canonical in the given data. Under the identification $\operatorname{ev}_0$ of [F6] this orients $\widetilde{\mathcal M}(x,y)$. [A1, F4, F5, F6, F7, step 3.1]

5.1 Now assume $\lambda(x)-\lambda(y)=1$. By [F6] the identification with the transverse intersection gives $\dim\widetilde{\mathcal M}(x,y)=\lambda(x)+(n-\lambda(y))-n=1$, and no point of $W^u(x)\cap W^s(y)$ is critical, so the flow vector $X$ is nowhere zero on the one-manifold $\widetilde{\mathcal M}(x,y)$. Let $L$ be an orbit of the flow. The orbit map $t\mapsto t\cdot\gamma$ is injective by [F9], so $L$ is the injective continuous image of $\mathbb R$; it is open in $\widetilde{\mathcal M}(x,y)$, since near any of its points a flow box for the nowhere-zero field $X$ (existence and uniqueness for the flow, [F2]) exhibits the local orbits as the connected components of a small chart; and it is closed, because a limit point in $\widetilde{\mathcal M}(x,y)$ of points of $L$ lies on the same local orbit as they do, hence in $L$. A nonempty subset of a manifold that is open, closed and connected is a connected component, so each component of $\widetilde{\mathcal M}(x,y)$ is exactly one flow line. Its tangent space at any point is the line $\mathbb R\cdot X$, and the comparison of the orientation of step 4.1 with the positive flow ray $\mathbb R_{>0}\cdot X$ is locally constant by [F7]; on the connected component this comparison is therefore a constant sign $\epsilon(\gamma)\in\{+1,-1\}$, which is the asserted comparison sign. [F2, F6, F7, F9, step 4.1]

5.2 It remains to orient the quotient $\mathcal M(x,y)$ of dimension $\lambda(x)-\lambda(y)-1$. For a trajectory $\gamma$, choose a regular value $c$ with $f(y)<c<f(x)$; by [F8] the tangent space of the parametrized space splits canonically as $T_\gamma\widetilde{\mathcal M}(x,y)=\mathbb R\cdot\dot\gamma\oplus T_\gamma\mathcal M(x,y)$ with $\dot\gamma=X(\gamma(0))$ nonzero, and the orientation of the first summand is the positive flow orientation. By the ordered product isomorphism of [F5] the orientation of $T_\gamma\widetilde{\mathcal M}(x,y)$ from step 4.1 determines a unique ray in $\det T_\gamma\mathcal M(x,y)$, namely the ray whose tensor product with the positive flow ray is the intersection orientation. This ray varies smoothly with $\gamma$ because the splitting and both given orientations do, so it is an orientation of $\mathcal M(x,y)$; the flow-first convention names this choice, and it does not depend on the auxiliary regular value $c$, since the quotient tangent space is the same for every level representative. [F5, F8, step 4.1]

6.1 Finally, replacing $or_x$ by its opposite reverses the ray in $\det T_pW^u(x)$ and leaves the co-orientation of $W^s(y)$ unchanged, so the kernel orientation of step 4.1 is reversed by the same determinant-line rule; replacing $or_y$ by its opposite reverses the ray $or_y$ of step 2.1 and hence the co-orientation of step 3.1, and by the same rule reverses the kernel orientation again; in both cases the orientations of steps 5.1 and 5.2, being determined by the intersection orientation, are reversed as asserted. [F1, F5, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2] ∎
