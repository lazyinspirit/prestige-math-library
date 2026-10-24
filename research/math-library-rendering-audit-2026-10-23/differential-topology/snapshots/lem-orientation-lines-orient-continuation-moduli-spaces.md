---
id: lem-orientation-lines-orient-continuation-moduli-spaces
kind: lemma
title: "Orientation lines orient the continuation moduli spaces compatibly with gluing"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-regular-continuation-datum-between-morse-smale-pairs", "lem-gluing-continuation-solutions-gives-collar-ends", "thm-continuation-trajectories-are-compact-up-to-breaking", "def-axiom-of-choice", "def-orientation-line-of-a-morse-critical-point", "lem-unstable-orientations-induce-trajectory-moduli-orientations", "def-morse-smale-pair", "def-parametrized-morse-trajectory-space", "def-signed-morse-differential-over-the-integers", "def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space", "prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold", "def-induced-boundary-orientation", "def-product-orientation", "prop-pointwise-orientation-sign-of-a-local-diffeomorphism", "lem-continuation-solutions-have-critical-limits", "thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points", "lem-first-order-asymptotically-hyperbolic-operator-is-fredholm", "lem-metric-end-flow-matching-gives-local-broken-charts", "lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds", "def-two-parameter-continuation-homotopy", "def-fredholm-maps-and-regular-values-on-countable-banach-manifolds"]

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
   operator along $u\in\mathcal C(p,q)$ has a canonical orientation ray induced
   by the chosen endpoint orientations through the ordered transverse
   endpoint exact sequence. No preferred nonzero vector is specified. Hence the moduli space
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
   the sign of the middle piece is that of item 1, with the relative signs determined by the ordered endpoint sequences and the
   fixed-anchor passage calculation below. They give the chain-map identity
   $\Phi\circ\partial^-=\partial^+\circ\Phi$. Over $\mathbb Z/2$ the assertion is vacuous.

For an augmented-regular one-parameter family as in
[[def-two-parameter-continuation-homotopy]], orient its kernel by the
parameter-first endpoint sequence, with the positive parameter ray first.
At a zero-dimensional augmented solution of vertical index $-1$, define its
counting sign $\tau(\lambda,u)$ to be the negative of that kernel orientation
sign. With this convention the two parameter-end boundary copies have signs
$-\tau(u^0)$ and $+\tau(u^1)$, and both types of once-broken boundary point
have the positive product of the Morse-tail sign and this augmented counting
sign. These are the signs used in the chain-homotopy count.

The construction also supplies the actual metric stable normal co-orientations from the unstable critical rays and the resulting ordered transverse intersection and flow-first orbit orientations of the autonomous ends. Its finite passage normal maps $b\mapsto\alpha_T(a,b)$ at fixed $a$ and $a\mapsto\zeta_T(a,b)$ at fixed $b$ have positive derivative determinants. These local interfaces require no ambient orientation and no normalized end-field assumption.

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular continuation datum, and orientation rays at its critical endpoints.

[F1] Evaluation at $-S$ identifies the solution space with the transverse fibre product of $W^u_-(p)$ and $W^s_+(q)$ under the evolution diffeomorphism $\Psi=\Psi_{S,-S}$. Evaluation identifies its tangent space with the decaying whole-line kernel ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]]).

[F2] For the actual metric-gradient ends, the stable and unstable disks are graphs over the Hessian spectral subspaces, with derivative zero at the critical point; finite-time flow transports their tangent spaces. Smoothness follows by the differentiated contraction argument in the datum definition ([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]], [[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F3] In an ordered exact sequence $0\to K\to U\to N\to0$, the rule $\det U=\det K\otimes\det N$ defines the kernel orientation from the orientations of $U$ and $N$: wedge an oriented basis of $K$ before any lifts of an oriented basis of $N$. Changing the lifts does not change this wedge. This is the transverse-normal convention ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]], [[def-product-orientation]]).

[F4] The exact local matching equations use an incoming transverse graph and a fixed-time continuation endpoint graph, with a mixed-boundary passage between them. The middle is unshifted and constant connectors are included ([[lem-metric-end-flow-matching-gives-local-broken-charts]], [[lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds]]).

[F5] Boundary orientation is outward-normal-first; product and exact-sequence orientations retain their displayed order. Augmented regularity is transversality of the parameter-included endpoint fibre product ([[def-induced-boundary-orientation]], [[def-product-orientation]], [[def-two-parameter-continuation-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 Near $q$, express the stable disk as the graph over the positive Hessian subspace supplied by [F2]. Its normal quotient is identified, by projection along that graph, with the negative Hessian subspace $T_qW^u_+(q)$; orient that quotient using $or_q$. Extend this co-orientation to the whole stable manifold by backward flow transport. This is well defined: for any point converging to $q$, all sufficiently late points lie in the same local stable disk. The derivative of a sufficiently short local flow interval induces an isomorphism of normal quotients whose determinant sign is positive, because it varies continuously from the identity at time zero; subdividing any finite interval in the local disk proves positivity for that interval. Thus different sufficiently late transport times give the same ray. The same construction orients the global unstable manifold using $or_p$, with reversed time. It works for the actual metric disks and does not require normalized Morse-coordinate vector fields or an orientation of $M$. [F2, given, construct]

1.2 Record the orientation of the finite passage blocks. At fixed stable initial value $a$, the mixed-boundary initial map $b\mapsto\alpha_T(a,b)$ is inverse to the final unstable-coordinate map of the flow starting at $(a,u_0)$: their composition is $b\mapsto b$, by uniqueness in [F4]. Differentiating proves both derivatives are invertible. The same cut-off mixed-boundary integral contraction has norm at most $2\varepsilon/\lambda<1$ uniformly for every $T\ge0$; at $T=0$ both integrals vanish. It therefore extends the inverse blocks continuously to the identity at $T=0$. At $T=0$ the map is the identity; its derivative determinant stays positive for all $T$ on the small boundary-data ball by smooth dependence and nonvanishing. The time-reversed argument proves positivity of $a\mapsto\zeta_T(a,b)$ for fixed $b$. Thus these finite passage normal blocks introduce no orientation sign, irrespective of unequal hyperbolic rates. Graph-dependent stable/unstable terms are eliminated by elementary block row operations, which have determinant one. [F3, F4, F5, construct, algebra]

2.1 At a solution let $x=u(-S)$, $y=\Psi(x)=u(S)$, $U=T_xW^u_-(p)$ and $N=T_yM/T_yW^s_+(q)$. Transversality gives the exact sequence $0\to T_u\mathcal C(p,q)\to U\xrightarrow{[d\Psi]}N\to0$. By [F3], the ray of $U$ from $or_p$ and the ray of $N$ from $or_q$ give a ray in $\det T_u\mathcal C(p,q)$. In local immersion charts all these bundles and maps are smooth. Any two choices of lifts differ by kernel vectors, so the rays agree on overlapping charts. Enlarging the constant-end window transports $U$ and $N$ by the corresponding autonomous flow derivatives, which preserve their rays by step 1.1; therefore the construction is independent of that window. [F1, F3, step 1.1, construct]

3.1 Since $D_u$ is onto, its determinant line is $\det\ker D_u$, and evaluation identifies this kernel with the tangent space in step 2.1. This gives the endpoint-induced orientation ray of the determinant line, rather than a preferred nonzero vector in it. Reversing either endpoint ray reverses the kernel ray by the ordered exact sequence. In dimension zero it reverses the sign relative to the canonical orientation of $\det\{0\}=\mathbb R$. For identical constant data, $x=y=p$, the map $U\to N$ is the identity at $p$ under the Hessian splitting; if the two endpoint rays agree, its determinant comparison gives sign $+1$. These establish the unbroken-space orientation, endpoint reversal and constant-connector calibration. [F1, F3, step 2.1, algebra]

4.1 At a negative break $(\gamma^-,v)$, the incoming unstable sheet has the ordered ray $or_p=\epsilon(\gamma^-)[X^-,or_a]$ at its entry section, where $or_a$ denotes the transported unstable normal ray. This is exactly the transverse-normal and flow-first definition of the trajectory sign. At the fixed middle anchor the zero-dimensional endpoint map $T W^u_-(a)\to N_q$ has determinant sign $\tau(v)$ by steps 2.1–3.1. Use its normal lifts and the mixed-boundary $b$ coordinates to form the quotient lifts for the glued endpoint sequence. Their passage block is positive by step 1.2. Its remaining kernel direction is $\partial_T$: differentiating $x(T)=\phi_{T+\tau(T)}z(T)$ and pulling back by the finite flow gives $(1+\tau'(T))X(z(T))+z'(T)$. Here $z(T)$ is on the fixed incoming section and $\tau$ is any finite exterior travel time to the fixed anchor. The stable component of $z'$ comes only from the derivative of the incoming graph at its exponentially small unstable endpoint, hence tends to zero; $\tau'$ also tends to zero by the flat endpoint estimates. Projection modulo the unstable normal lifts therefore compares this vector positively with the incoming $X$ for large $T$, whose stable component at the fixed entry section is nonzero. This argument still holds for a constant connector, when $b=0$; no exit section was imposed there. The ordered endpoint sequence consequently orients $\partial_T$ by $\epsilon(\gamma^-)\tau(v)$. Since $\rho=1/T$, the outward direction $-\partial_\rho$ is a positive multiple of $\partial_T$. The negative-break boundary sign is the stated positive product. [F1, F3, F4, F5, step 2.1, step 3.1, step 1.2, algebra]

5.1 At a positive break $(v,\gamma^+)$, the unbroken connector endpoint sequence identifies its oriented unstable input with the unstable normal at the intermediate point with sign $\tau(v)$. In the time-reversed fixed-anchor matching, increasing $T$ moves the anchored initial point backwards along the outgoing flow: its unstable component is $-X^+$ modulo the transverse quotient lifts, with positive coefficient. Equivalently differentiate the backwards evolution from the fixed outgoing section; the term is $-X$, and graph and finite exterior-time derivatives tend to zero by the same estimates as in step 4.1. The stable passage block is positive by step 1.2. The outgoing flow-first sequence then gives the orientation of $\partial_T$ as $-\tau(v)\epsilon(\gamma^+)$. Again $-\partial_\rho$ is a positive multiple of $\partial_T$, proving the displayed positive-break boundary sign. These calculations use two anchored local sequences and do not identify unrelated collars with opposite ends of a common interval. They prove the ordinary gluing assertion and endpoint calibration in the retained statement. [F1, F3, F4, F5, step 1.2, step 4.1, algebra]

6.1 For an augmented-regular family replace $U$ of step 2.1 by $\mathbb R\partial_\lambda\oplus T W^u_-(p)$, with the parameter ray first, and use its full endpoint derivative to $N_q$. Its kernel is oriented by the same exact-sequence rule even when the vertical derivative is not onto. At the parameter ends, where the datum is constant as a parameter family, this ray is $[\partial_\lambda,or\,\mathcal C]$; outward-normal-first gives the two signs $-\tau(u^0)$ and $+\tau(u^1)$. Let $\kappa$ be the raw augmented zero-dimensional kernel sign and put the counting sign $\tau(\lambda,u)=-\kappa$. At a negative break the input order is $[\partial_\lambda,X^-,or_a]$. Moving $X^-$ to the first position introduces one minus sign, so the ordinary calculation of step 4.1 gives the boundary sign $-\epsilon(\gamma^-)\kappa=\epsilon(\gamma^-)\tau(\lambda,u)$. At a positive break step 5.1 already gives $-\kappa\epsilon(\gamma^+)=\tau(\lambda,u)\epsilon(\gamma^+)$. Both boundary products thus have the claimed positive signs. This is the convention for which zero signed boundary count reads $\Phi^1-\Phi^0+\partial^+K+K\partial^-=0$. Reducing these formulas modulo two discards all signs. [F3, F4, F5, step 2.1, step 4.1, step 5.1, algebra] ∎
