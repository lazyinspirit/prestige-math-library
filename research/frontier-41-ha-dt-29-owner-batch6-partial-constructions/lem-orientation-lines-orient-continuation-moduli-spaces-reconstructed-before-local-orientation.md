---
id: lem-orientation-lines-orient-continuation-moduli-spaces
kind: lemma
title: "Orientation lines orient the continuation moduli spaces compatibly with gluing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-continuation-datum-between-morse-smale-pairs, lem-gluing-continuation-solutions-gives-collar-ends, thm-continuation-trajectories-are-compact-up-to-breaking, def-axiom-of-choice, def-orientation-line-of-a-morse-critical-point, lem-unstable-orientations-induce-trajectory-moduli-orientations, lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, def-morse-smale-pair, def-parametrized-morse-trajectory-space, def-signed-morse-differential-over-the-integers, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-induced-boundary-orientation, def-product-orientation, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, prop-pointwise-orientation-sign-of-a-local-diffeomorphism, lem-continuation-solutions-have-critical-limits]
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

**Given:** The Axiom of Choice, a regular continuation datum, orientation lines of both end pairs, and the continuation moduli spaces.

[F1] The orientation line of a critical point orients the unstable manifold $W^u(p)$ and, through the flow-invariant splitting of the tangent bundle along the stable manifold, co-orients $W^s(p)$; the determinant-line comparison along a transverse intersection orients the unparametrized trajectory moduli space $\mathcal M(p,q)$, and the resulting signs are the Morse coefficients of the integral differential ([[def-orientation-line-of-a-morse-critical-point]], [[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[def-signed-morse-differential-over-the-integers]], [[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]).

[F2] The linearization of the continuation equation at a solution $u$ is a Fredholm operator whose index is $\operatorname{ind}(p)-\operatorname{ind}(q)$ and whose determinant line is canonically identified with $\det(or_p)\otimes\det(or_q)^{\vee}$ up to a fixed sign: on the two half-lines the operator is the time-independent trajectory operator, and the $s$-dependent term is a compactly supported perturbation in the window $[-S,S]$. Regularity gives the surjectivity making the determinant line a trivializable line and the moduli space oriented ([[def-regular-continuation-datum-between-morse-smale-pairs]], [[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]], [[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]], [[lem-continuation-solutions-have-critical-limits]]).

[F3] At an index-drop-one boundary point the collar chart of [[lem-gluing-continuation-solutions-gives-collar-ends]] exhibits the compactification near $\beta$ as a half-open interval times the broken configuration, and the gluing isomorphism of determinant lines identifies the determinant line of the glued operator with the tensor product of the determinant lines of the two pieces; the boundary orientation convention is the outward-normal-first one ([[def-induced-boundary-orientation]], [[def-product-orientation]]).

[F4] The comparison sign between the outward-normal-first boundary orientation and the product orientation of a broken Morse configuration is the same local model computation in the continuation case and in the time-independent case: at the intermediate critical point both compare the normal direction of the attaching sphere with the flow direction, which is independent of $s$, so the sign coincides with the global convention fixed in [[lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli]] ([[def-parametrized-morse-trajectory-space]]).

## Proof

**Proof technique:** direct.

1.1 At a solution $u\in\mathcal C(p,q)$ the determinant line of the linearized continuation operator is, by [F2], canonically identified with $\det(or_p)\otimes\det(or_q)^{\vee}$; a trivialization of this line orients the moduli space near $u$ through the regular-value structure of the Fredholm section, and the identification is natural in $u$ because the asymptotic trivializations at the two ends vary smoothly with the trajectory. Hence $\mathcal C(p,q)$ carries an induced orientation; in the zero-dimensional case this orientation is a sign $\tau(u)$ for each point. [F2, given]

2.1 At the two ends the identification of step 1.1 restricts to the determinant-line comparison of [F1], so the induced orientation is compatible with the orientations of the end moduli spaces. If $or_p$ is replaced by its opposite, the first tensor factor changes sign while the second does not, so the trivialization of the determinant line changes sign and every $\tau(u)$ with that end is reversed; the same argument applies at $q$. This proves items 1 and 2. [F1, F2, step 1.1]

3.1 Now let $\beta=(\gamma^-,v)$ be a once-broken boundary point with $\operatorname{ind}(p)-\operatorname{ind}(q)=1$ and let $\psi:[0,\delta)\to\overline{\mathcal C}(p,q)$ be its collar chart. By [F3] the determinant line of the glued operator splits as the tensor product of the determinant lines of $\gamma^-$ and $v$, so the orientation of the one-dimensional compactification restricts to the product of the two orientations; giving the boundary the outward-normal-first orientation and comparing with the product orientation introduces exactly the dimension-dependent comparison sign of [F4], which is the same global sign as in the time-independent boundary-orientation lemma, and the orientation of the collar interval carries the two breaking patterns into the two opposite orientations of the boundary. [F3, F4, step 2.1]

4.1 Since the collar chart parametrizes the compactification by the neck length and the product of the two broken pieces, the sign of $\beta$ as an oriented boundary point is the product $\tau(\gamma^-)\tau(v)$ up to that single global sign; the case $\beta=(v,\gamma^+)$ has the same product with the opposite relative sign, because the outward-normal-first orientation of the interval reverses the sign of the second end, giving $-\tau(v)\tau(\gamma^+)$. Over $\mathbb Z/2$ the two counting signs have the same reduction, so unsigned counts require no choice of a ray or trivialization of these real determinant lines. This proves item 3. [F3, F4, step 3.1] ∎
