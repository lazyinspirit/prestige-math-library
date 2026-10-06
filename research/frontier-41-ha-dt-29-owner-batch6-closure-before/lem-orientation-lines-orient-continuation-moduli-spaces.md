---
id: lem-orientation-lines-orient-continuation-moduli-spaces
kind: lemma
title: "Orientation lines orient the continuation moduli spaces compatibly with gluing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-continuation-datum-between-morse-smale-pairs, lem-gluing-continuation-solutions-gives-collar-ends, thm-continuation-trajectories-are-compact-up-to-breaking, def-axiom-of-choice, def-orientation-line-of-a-morse-critical-point, lem-unstable-orientations-induce-trajectory-moduli-orientations, lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, def-morse-smale-pair, def-parametrized-morse-trajectory-space, def-signed-morse-differential-over-the-integers, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-induced-boundary-orientation, def-product-orientation, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, prop-pointwise-orientation-sign-of-a-local-diffeomorphism, lem-continuation-solutions-have-critical-limits, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points, lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]
justified_by: []
dependency_level: 7
proof_strategy: direct
sources:
  references:
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 7, Definition 7.7 and Theorems 7.5-7.7 (coherent orientations, gluing compatibility, canonical orientations and characteristic signs) and Ch. 8, Definition 8.1, pp. 55-69"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3 (orientation of W^s(c), co-orientation of W^u(c), orientation of L(a,b) and the integral count N_X(a,b)) and Sec. 3.4 (the integral count Phi^F), printed pp. 70-75, PDF pp. 80-85"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Remark 2.5.3(a) (orientation lines without orienting M) and Sec. 4.5 (the sign defined by comparing the connector orientation with the flow), read at PDF pp. 74-75 and 204-206"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a closed manifold
$M$ ([[def-regular-continuation-datum-between-morse-smale-pairs]]), and fix
orientations $or_p$ of $W^u(p)$ for all
$p\in\operatorname{Crit}(f^-)\cup\operatorname{Crit}(f^+)$
([[def-orientation-line-of-a-morse-critical-point]],
[[def-morse-smale-pair]]).

1. For every pair $(p,q)$ the determinant line of the linearized continuation
   operator along $u\in\mathcal C(p,q)$ is canonically trivialized by the
   orientation lines of $p$ and $q$ together with the canonical orientation of
   the $s$-dependent Fredholm operator; hence the moduli space
   $\mathcal C(p,q)$ carries an induced orientation that is compatible with
   the orientations of the end moduli spaces, and in the zero-dimensional case
   every $u\in\mathcal C(p,q)$ carries a sign
   $\tau(u)\in\{\pm1\}$
   ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]],
   [[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]],
   [[lem-continuation-solutions-have-critical-limits]]).
2. Reversing $or_p$ (respectively $or_q$) reverses $\tau(u)$ for every $u$
   with that end
   ([[prop-pointwise-orientation-sign-of-a-local-diffeomorphism]]).
3. **Gluing compatibility.** Let $\operatorname{ind}(p)-\operatorname{ind}(q)=1$
   and let $\beta=(\gamma^-,v)$ or $\beta=(v,\gamma^+)$ be a once-broken
   boundary point with the collar chart of
   [[lem-gluing-continuation-solutions-gives-collar-ends]]; orient
   $\overline{\mathcal C}(p,q)$ so that it restricts to the induced
   orientation of $\mathcal C(p,q)$ and give the boundary the
   outward-normal-first orientation
   ([[def-induced-boundary-orientation]], [[def-product-orientation]]). Then
   the sign of $\beta$ as an oriented boundary point is the product of the
   signs of its two pieces, with the two breaking patterns weighted by
   opposite relative signs fixed by the orientation of the collar interval:
   $$\operatorname{sign}_{\partial}(\gamma^-,v)=\tau(\gamma^-)\,\tau(v),\qquad \operatorname{sign}_{\partial}(v,\gamma^+)=-\,\tau(v)\,\tau(\gamma^+),$$
   where the signs of the tail pieces are those of
   [[lem-unstable-orientations-induce-trajectory-moduli-orientations]] and
   the sign of the middle piece is that of item 1, with the relative sign
   between the two patterns the same as the one already fixed in
   [[lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli]]
   for the Morse end ([[def-parametrized-morse-trajectory-space]],
   [[def-signed-morse-differential-over-the-integers]]). The relative sign is
   exactly the order-of-the-two-ends convention for the boundary of the
   interval $[0,1]$ parametrizing the neck, and it is the convention under
   which the boundary count of the compactified continuation space gives the
   chain-map identity $\Phi\circ\partial^-=\partial^+\circ\Phi$ rather than
   its negative. Over $\mathbb Z/2$ the assertion is vacuous.

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular continuation datum, and orientation rays at its critical endpoints.

[F1] Evaluation at $-S$ identifies the solution space with the transverse fibre product of $W^u_-(p)$ and $W^s_+(q)$ under the evolution diffeomorphism $\Psi=\Psi_{S,-S}$. Evaluation identifies its tangent space with the decaying whole-line kernel ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]]).

[F2] For the actual metric-gradient ends, the stable and unstable disks are graphs over the Hessian spectral subspaces, with derivative zero at the critical point; finite-time flow transports their tangent spaces. Smoothness follows by the differentiated contraction argument in the datum definition ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]], [[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F3] In an ordered exact sequence $0\to K\to U\to N\to0$, the rule $\det U=\det K\otimes\det N$ defines the kernel orientation from the orientations of $U$ and $N$: wedge an oriented basis of $K$ before any lifts of an oriented basis of $N$. Changing the lifts does not change this wedge. This is the transverse-normal convention ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]], [[def-product-orientation]]).

[F4] At an index-drop-one boundary point the collar chart of [[lem-gluing-continuation-solutions-gives-collar-ends]] exhibits the compactification near $\beta$ as a half-open interval times the broken configuration, and the gluing isomorphism of determinant lines identifies the determinant line of the glued operator with the tensor product of the determinant lines of the two pieces; the boundary orientation convention is the outward-normal-first one ([[def-induced-boundary-orientation]], [[def-product-orientation]]).

[F5] The comparison sign between the outward-normal-first boundary orientation and the product orientation of a broken Morse configuration is the same local model computation in the continuation case and in the time-independent case: at the intermediate critical point both compare the normal direction of the attaching sphere with the flow direction, which is independent of $s$, so the sign coincides with the global convention fixed in [[lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli]] ([[def-parametrized-morse-trajectory-space]]).

## Proof

**Proof technique:** direct.

1.1 Near $q$, express the stable disk as the graph over the positive Hessian subspace supplied by [F2]. Its normal quotient is identified, by projection along that graph, with the negative Hessian subspace $T_qW^u_+(q)$; orient that quotient using $or_q$. Extend this co-orientation to the whole stable manifold by backward flow transport. This is well defined: for any point converging to $q$, all sufficiently late points lie in the same local stable disk. The derivative of a sufficiently short local flow interval induces an isomorphism of normal quotients whose determinant sign is positive, because it varies continuously from the identity at time zero; subdividing any finite interval in the local disk proves positivity for that interval. Thus different sufficiently late transport times give the same ray. The same construction orients the global unstable manifold using $or_p$, with reversed time. It works for the actual metric disks and does not require normalized Morse-coordinate vector fields or an orientation of $M$. [F2, given, construct]

2.1 At a solution let $x=u(-S)$, $y=\Psi(x)=u(S)$, $U=T_xW^u_-(p)$ and $N=T_yM/T_yW^s_+(q)$. Transversality gives the exact sequence $0\to T_u\mathcal C(p,q)\to U\xrightarrow{[d\Psi]}N\to0$. By [F3], the ray of $U$ from $or_p$ and the ray of $N$ from $or_q$ give a ray in $\det T_u\mathcal C(p,q)$. In local immersion charts all these bundles and maps are smooth. Any two choices of lifts differ by kernel vectors, so the rays agree on overlapping charts. Enlarging the constant-end window transports $U$ and $N$ by the corresponding autonomous flow derivatives, which preserve their rays by step 1.1; therefore the construction is independent of that window. [F1, F3, step 1.1, construct]

3.1 Since $D_u$ is onto, its determinant line is $\det\ker D_u$, and evaluation identifies this kernel with the tangent space in step 2.1. This gives the endpoint-induced orientation ray of the determinant line, rather than a preferred nonzero vector in it. Reversing either endpoint ray reverses the kernel ray by the ordered exact sequence. In dimension zero it reverses the sign relative to the canonical orientation of $\det\{0\}=\mathbb R$. For identical constant data, $x=y=p$, the map $U\to N$ is the identity at $p$ under the Hessian splitting; if the two endpoint rays agree, its determinant comparison gives sign $+1$. These establish the unbroken-space orientation, endpoint reversal and constant-connector calibration. [F1, F3, step 2.1, algebra]

4.1 Now let $\beta=(\gamma^-,v)$ be a once-broken boundary point with $\operatorname{ind}(p)-\operatorname{ind}(q)=1$ and let $\psi:[0,\delta)\to\overline{\mathcal C}(p,q)$ be its collar chart. By [F4] the determinant line of the glued operator splits as the tensor product of the determinant lines of $\gamma^-$ and $v$, so the orientation of the one-dimensional compactification restricts to the product of the two orientations; giving the boundary the outward-normal-first orientation and comparing with the product orientation introduces exactly the dimension-dependent comparison sign of [F5], which is the same global sign as in the time-independent boundary-orientation lemma, and the orientation of the collar interval carries the two breaking patterns into the two opposite orientations of the boundary. [F4, F5, step 3.1]

5.1 Since the collar chart parametrizes the compactification by the neck length and the product of the two broken pieces, the sign of $\beta$ as an oriented boundary point is the product $\tau(\gamma^-)\tau(v)$ up to that single global sign; the case $\beta=(v,\gamma^+)$ has the same product with the opposite relative sign, because the outward-normal-first orientation of the interval reverses the sign of the second end, giving $-\tau(v)\tau(\gamma^+)$. Over $\mathbb Z/2$ the two counting signs have the same reduction, so unsigned counts require no choice of a ray or trivialization of these real determinant lines. This proves item 3. [F4, F5, step 4.1] ∎

## Remarks

The finite-window construction above supplies the orientation of unbroken spaces and the constant connector calibration. The actual metric-end gluing determinant comparison used in [F4]–[F5] and the retained boundary steps remains an open proof obligation, recorded in research/frontier-41-ha-dt-29-owner-batch6-partial-constructions/lem-orientation-lines-orient-continuation-moduli-spaces.md. Those assertions are retained for owner adjudication; this local construction does not close them.
