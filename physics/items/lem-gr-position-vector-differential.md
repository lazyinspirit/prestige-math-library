---
id: lem-gr-position-vector-differential
kind: lemma
title: "The differential of the squared-displacement function and the position vector of the reversed geodesic"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-normal-neighborhoods-and-position-vectors, thm-gr-lorentz-gauss-lemma-and-normal-maximum, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, thm-clairaut-schwarz-mixed-partials, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-chain-rule-for-total-derivatives, def-differential-of-a-smooth-map, thm-smooth-inverse-function-theorem-on-manifolds, def-c-r-and-smooth-maps-between-smooth-manifolds, lem-gr-parallel-transport-and-geodesic-speed, thm-gr-convex-normal-neighborhoods]
dependency_roles:
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-lorentz-gauss-lemma-and-normal-maximum: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Gauss' Lemma, equations (2.5)-(2.7) and the differential of D^2 (Theorem 2.6 printed p. 27)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the position vector and its change under exchanging the arguments, section 2.2 printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]), let $p\in M$ and let $U_p=\exp_p(W_p)$
be a normal neighborhood of $p$ with $W_p$ star-shaped, as in
[[def-gr-normal-neighborhoods-and-position-vectors]] clause (a). Write
$v(q):=\exp_p^{-1}(q)$ for $q\in U_p$, $P(p,q):=d(\exp_p)_{v(q)}(v(q))$, and
$D_p^2(q):=g_p(v(q),v(q))$.

**(a) Differential in the second argument.** $D_p^2$ is smooth on $U_p$ and,
for every $q\in U_p$ and every $w\in T_qM$,
$$d(D_p^2)_q(w)=2\,g_q\bigl(P(p,q),w\bigr).$$

**(b) Reversal.** Let $q\in U_p$ and let $\gamma:[0,1]\to M$,
$\gamma(t)=\exp_p(t\,v(q))$, be the radial geodesic, so that
$\gamma(1)=q$. Then the reversed curve $t\mapsto\gamma(1-t)$ is the maximal
geodesic from $q$ with initial velocity $-P(p,q)$; consequently
$$\exp_q^{-1}(p)=-P(p,q)\quad\text{and}\quad P(q,p)=-\,v(q)=-(\exp_p)^{-1}(q)$$
whenever both sides are defined, and then $D^2(q,p)=D^2(p,q)$ by the Gauss
lemma of [[thm-gr-lorentz-gauss-lemma-and-normal-maximum]].

**(c) Differential on pairs in a strictly convex normal set.** If $C$ is a
strictly convex normal set ([[thm-gr-convex-normal-neighborhoods]]) and
$p,q\in C$, then
$D^2:C\times C\to\mathbb R$ is smooth and for all $u\in T_pM$, $w\in T_qM$,
$$dD^2(p,q)(u,w)=2\,g_p\bigl(P(q,p),u\bigr)+2\,g_q\bigl(P(p,q),w\bigr).$$

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with
metric-selected connection $\nabla$, a point $p\in M$ and a normal
neighborhood $U_p=\exp_p(W_p)$ with $W_p$ star-shaped.

[L1] The map $\exp_p^{-1}:U_p\to W_p$ is a diffeomorphism and the Gauss
lemma holds: for all $v\in W_p$, $w\in T_pM$,
$g_{\exp_pv}(d(\exp_p)_v(v),d(\exp_p)_v(w))=g_p(v,w)$
([[thm-gr-lorentz-gauss-lemma-and-normal-maximum]] clause (a),
[[thm-gr-local-geodesics-and-exponential-map]] clause (d)).

[L2] The velocity of the radial geodesic $s\mapsto\exp_p(sv)$ is
$d(\exp_p)_{sv}(v)$; its radial position vector at parameter $s$ is
$d(\exp_p)_{sv}(sv)$. The velocity is parallel transported along the geodesic and its
direction at $s=1$ agrees with the direction at $s=0^+$, i.e. $P(p,q)$ is
future timelike whenever $v(q)$ is future timelike, and $P(p,q)=0$ if and
only if $v(q)=0$ ([[lem-gr-parallel-transport-and-geodesic-speed]],
[[thm-gr-local-geodesics-and-exponential-map]] clause (c),
[[def-gr-normal-neighborhoods-and-position-vectors]] clause (c)).

[L3] Chain rule and smoothness: $v=\exp_p^{-1}$ is smooth, so
$D_p^2=g_p(v(\cdot),v(\cdot))$ is smooth as a sum of products of smooth
functions with the constant bilinear form $g_p$
([[thm-chain-rule-for-total-derivatives]],
[[def-differential-of-a-smooth-map]]).

[L4] Let $C$ be strictly convex normal and $(q,r)\in C\times C$. The inverse
$v(q,r)=\exp_q^{-1}(r)$ is defined because $\exp_q:W_q\to C$ is a
diffeomorphism. The fiber differential $d(\exp_q)_{v(q,r)}$ is invertible.
In local bundle coordinates the joint exponential map
$\Phi(q,v)=(q,\exp_qv)$ has differential at $(q,v(q,r))$ of block form
$$d\Phi_{(q,v)}=\begin{pmatrix}I&0\\ *&d(\exp_q)_v\end{pmatrix},$$
so $d\Phi_{(q,v)}$ is invertible. By the inverse function theorem, $\Phi$
has a smooth local inverse around $(q,r)$. On its overlap with $C\times C$
this local inverse agrees with $(q',r')\mapsto\exp_{q'}^{-1}(r')$. Indeed,
the geodesic segment for $(q,r)$ has compact image in the open set $C$;
smooth dependence on initial data implies that the local inverse segments
for all sufficiently nearby pairs $(q',r')$ also lie in $C$. Strict
convexity gives a unique geodesic segment in $C$ between each such pair, so
the local inverse segment is the segment selected by $\exp_{q'}^{-1}(r')$.
These local inverses show that the two-point inverse is smooth on all of
$C\times C$. This is a local argument at every pair; the near-diagonal domain in
[[lem-gr-joint-exponential-diffeomorphism]] clause (c) alone would not cover
all of $C\times C$ ([[lem-gr-joint-exponential-diffeomorphism]] clause (a),
[[thm-gr-convex-normal-neighborhoods]] clause (a),
[[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 (Smoothness and the differential in the second argument.) By [L3], $D_p^2$ is smooth on $U_p$. Fix $q\in U_p$, $w\in T_qM$ and a smooth curve $c:(-\varepsilon,\varepsilon)\to U_p$ with $c(0)=q$, $c'(0)=w$; put $u(t):=\exp_p^{-1}(c(t))$, so $u$ is smooth and $u'(0)=d(\exp_p^{-1})_q(w)$. Differentiating $D_p^2(c(t))=g_p(u(t),u(t))$ at $t=0$ gives $d(D_p^2)_q(w)=2g_p(u(0),u'(0))=2g_p(v(q),d(\exp_p^{-1})_q(w))$. Since $d(\exp_p)_{v(q)}\circ d(\exp_p^{-1})_q=\mathrm{id}_{T_qM}$, the Gauss lemma [L1] gives $g_p(v(q),d(\exp_p^{-1})_q(w))=g_q\bigl(d(\exp_p)_{v(q)}(v(q)),w\bigr)=g_q(P(p,q),w)$. This proves (a). [L1, L3, given, algebra]

2.1 (Reversal.) Let $v:=v(q)$ and let $\eta(t):=\gamma(1-t)=\exp_p((1-t)v)$ for $t\in[0,1]$. Since $W_p$ is star-shaped, $(1-t)v\in W_p$ and $\eta(t)=\exp_p((1-t)v)$ for $t\in[0,1]$; as $s\mapsto\exp_p(sv)$ is a geodesic and $s=1-t$ is an affine reparametrization with nonzero derivative, $\eta$ is a geodesic with $\eta(0)=q$ and $\eta'(0)=-\gamma'(1)=-P(p,q)$, where $\gamma'(1)=d(\exp_p)_v(v)$. By uniqueness of the maximal geodesic with given initial data, $\exp_q(-P(p,q))=\eta(1)=p$, and since $\exp_q$ is injective on its star-shaped diffeomorphism domain, $\exp_q^{-1}(p)=-P(p,q)$. The same computation with the roles of $p$ and $q$ exchanged identifies $\eta$ as the maximal geodesic from $q$ to $p$, so the position vector of $p$ with respect to $q$ is $\eta'(1)=-\gamma'(0)=-v(q)$. Finally, by [L1] applied at the base point $p$ with $w=v$, $D^2(q,p)=g_q(\exp_q^{-1}(p),\exp_q^{-1}(p))=g_q(P(p,q),P(p,q))=g_p(v,v)=D^2(p,q)$. This proves (b). [step 1.1, L1, L2, given, algebra]

3.1 (Differential on pairs.) Let $C$ be strictly convex normal and $p,q\in C$. By [L4] the map $(p',q')\mapsto D^2(p',q')$ is smooth on $C\times C$, and by step 2.1 its values are symmetric, $D^2(p',q')=D^2(q',p')$. Fix $u\in T_pM$ and $w\in T_qM$, choose smooth curves $p(s),q(t)$ in $C$ with $p(0)=p$, $p'(0)=u$, $q(0)=q$, $q'(0)=w$, and put $F(s,t):=D^2(p(s),q(t))=D^2(q(t),p(s))$. By part (a) applied with base point $q(t)$, $\partial_sF(0,t)=d(D^2(q(t),\cdot))_p(u)=2g_p(P(q(t),p),u)$; and by part (a) with base point $p$, $\partial_tF(s,0)=2g_q(P(p,q),w)$. The mixed partial derivatives of the smooth function $F$ at $(0,0)$ agree ([[thm-clairaut-schwarz-mixed-partials]]), and $P(q(t),p)\to P(q,p)$ as $t\to0$ by the smoothness of [L4]; hence $dD^2(p,q)(u,w)=\partial_sF(0,0)+\partial_tF(0,0)=2g_p(P(q,p),u)+2g_q(P(p,q),w)$. This proves (c). [step 1.1, step 2.1, L4, algebra]

4.1 Claims (a), (b) and (c) are steps 1.1, 2.1 and 3.1. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Consistency check.** For $q=p$ both sides of (c) vanish because $P(p,p)=0$; the formula is therefore compatible with $D^2(p,p)=0$ and with
  the symmetry $D^2(p,q)=D^2(q,p)$.

- **Scope.** Part (a) is stated on a normal neighborhood; parts (b) and (c)
  use in addition that the two-point inverse tangent map is defined, which
  holds on the stated strictly convex normal set by [[thm-gr-convex-normal-neighborhoods]].
  No completeness and no global injectivity of $\exp$ is used.
