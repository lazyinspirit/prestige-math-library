---
id: lem-gr-data-fixing-immersion-is-embedding
kind: lemma
title: "A data-fixing isometric immersion of developments is injective, hence a development embedding; uniqueness of data-fixing embeddings"
status: draft
origin: session
domain: mathematics
dependency_level: 28
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, lem-gr-isometric-immersion-rigidity, thm-gr-local-geodesics-and-exponential-map, lem-gr-maximal-geodesics-and-extension, lem-gr-parallel-transport-and-geodesic-speed, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-lorentz-form-and-inertia, thm-smooth-inverse-function-theorem-on-manifolds, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma 3.3 with proof (an isometric immersion whose restriction to the Cauchy surface is a diffeomorphism is an isometric embedding) and the remark following it, printed pp. 13-14"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: maximal geodesics and the exponential map, Theorems 2.4-2.6 printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same
data in the sense of [[def-gr-development-and-data-fixing-isometry]] clause
(a), with $\Sigma:=j(\Sigma)$ and $\Sigma':=j'(\Sigma)$. Let
$\varphi:M\to M'$ be a smooth map with $\varphi^*(g')=g$, with
$d\varphi_p(N_p)=N'_{\varphi(p)}$ for every $p\in M$ and with
$\varphi\circ j=j'$ (so $\varphi$ is an isometric immersion fixing the data).
Then:

**(a)** $d\varphi_p:T_pM\to T_{\varphi(p)}M'$ is an isomorphism for every
$p\in M$;

**(b)** $\varphi$ is injective, hence a diffeomorphism onto the open subset
$\varphi(M)\subseteq M'$ and therefore a development embedding in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (c);

**(c)** if $M$ is connected and $\psi_1,\psi_2:M\to M'$ are two such
data-fixing isometric immersions, then $\psi_1=\psi_2$; in particular every
data-fixing self-isometry of a connected development is the identity of $M$.

## Facts & Assumptions

**Given:** developments $(M,g,N,j,\psi)$, $(M',g',N',j',\psi')$ of the same data and a data-fixing isometric immersion $\varphi:M\to M'$ as in the statement.

[L1] Cauchy data: $\Sigma$ is a Cauchy set of $M$ and $\Sigma'$ a Cauchy set of $M'$; $\varphi|_\Sigma:\Sigma\to\Sigma'$ is the diffeomorphism $j'\circ j^{-1}$; every maximal geodesic of $M$ with nonzero causal initial data is a causal curve that is inextendible in $M$, and it meets $\Sigma$ in exactly one parameter value ([[def-gr-development-and-data-fixing-isometry]] clause (a), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c), [[lem-gr-maximal-geodesics-and-extension]] clause (b), [[def-gr-causal-curves-and-reachability]] clause (d)).

[L2] Metric nondegeneracy and dimension: $g_p$ and $g'_q$ are nondegenerate symmetric bilinear forms of signature $(-,+,+,+)$ on four-dimensional tangent spaces; if $v\in T_pM$ satisfies $d\varphi_pv=0$ then $g_p(v,w)=g'_{\varphi(p)}(0,d\varphi_pw)=0$ for every $w\in T_pM$, so $v=0$ by nondegeneracy ([[def-lorentz-form-and-inertia]], [[def-gr-smooth-lorentzian-objects]] clause (a)); consequently $d\varphi_p$ is injective, and it is an isomorphism because both tangent spaces have dimension $4$.

[L3] Isometric immersions map geodesics to geodesics with velocity $d\varphi(\gamma')$, so the images of the maximal geodesics through $p$ and through $q=\gamma(0)$ have the same velocity data after transport by $\varphi$; the maximal geodesic of $M'$ with given initial data is unique and its restriction to any subinterval is the unique geodesic with those data ([[lem-gr-isometric-immersion-rigidity]] clause (a), [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d)).

[L4] Rigidity of data-fixing isometric immersions: for a data-fixing isometric immersion the differential at every point is a linear isomorphism; and if two data-fixing isometric immersions $\psi_1,\psi_2:M\to M'$ satisfy $\psi_1=\psi_2$ and $d\psi_1=d\psi_2$ on $j(\Sigma)$, then $\psi_1=\psi_2$ on every connected component of $M$ ([[lem-gr-isometric-immersion-rigidity]] clause (a) and its step 1.1).

[L5] Inverse function theorem on manifolds: a smooth map between smooth manifolds whose differential is invertible at a point restricts to a diffeomorphism from an open neighbourhood of that point onto an open neighbourhood of its image ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Reduction to injectivity at two points.) Let $p,q\in M$ with $\varphi(p)=\varphi(q)=:z$. We show $p=q$. By [L2] the differential $d\varphi_p$ is an isomorphism, so $\varphi$ restricts to a diffeomorphism of some open neighbourhood $V$ of $p$ onto an open neighbourhood of $z$. [L2, algebra]

1.2 (Two geodesics through $q$ and through $p$.) Choose a future-directed timelike vector $u\in T_qM$. By [L1] and [L3] there is a maximal geodesic $\gamma:I_\gamma\to M$ of $M$ with $\gamma(0)=q$, $\gamma'(0)=u$, which is a timelike curve, is inextendible in $M$, and meets $\Sigma$ in exactly one parameter value $\tau_0$. Its image $\varphi\circ\gamma$ is a geodesic of $M'$ with $(\varphi\circ\gamma)(0)=z$ and velocity $d\varphi_q(\gamma'(0))$; since $d\varphi_q$ is an isomorphism, define $w:=(d\varphi_p)^{-1}\bigl(d\varphi_q(\gamma'(0))\bigr)\in T_pM$, a timelike vector, and let $\sigma:I_\sigma\to M$ be the maximal geodesic of $M$ with $\sigma(0)=p$, $\sigma'(0)=w$; it is timelike, inextendible in $M$, and meets $\Sigma$ in exactly one parameter value $\tau_1$. [L1, L2, L3, choose]

1.3 (The two image geodesics are the same maximal geodesic of $M'$.) By [L3] both $\varphi\circ\sigma$ and $\varphi\circ\gamma$ are geodesics of $M'$; at parameter $0$ both have value $z$ and velocity $d\varphi_p(w)=d\varphi_q(\gamma'(0))$. Let $\zeta:I_\zeta\to M'$ be the maximal geodesic of $M'$ with $\zeta(0)=z$, $\zeta'(0)=d\varphi_q(\gamma'(0))$ ([L3]). By uniqueness of maximal geodesics, $I_\sigma\subseteq I_\zeta$, $I_\gamma\subseteq I_\zeta$, $\varphi\circ\sigma=\zeta|_{I_\sigma}$ and $\varphi\circ\gamma=\zeta|_{I_\gamma}$. [L3, algebra]

2.1 (The initial-surface crossing parameters coincide.) By step 1.3 and [L1], $\varphi(\sigma(\tau_1))=\zeta(\tau_1)\in\Sigma'$ and $\varphi(\gamma(\tau_0))=\zeta(\tau_0)\in\Sigma'$, with $\tau_1\in I_\sigma\subseteq I_\zeta$ and $\tau_0\in I_\gamma\subseteq I_\zeta$. The geodesic $\zeta$ has timelike velocity, hence is a causal curve, and by [L3] it is inextendible in $M'$; since $\Sigma'$ is a Cauchy set of $M'$ ([L1]), the parameter set $\zeta^{-1}[\Sigma']$ has exactly one element. Hence $\tau_0=\tau_1$ and $\zeta(\tau_0)=\zeta(\tau_1)$. [step 1.3, L1, L3, algebra]

3.1 (Equal points and velocities on $\Sigma$.) By step 2.1, $\varphi(\sigma(\tau_0))=\varphi(\gamma(\tau_0))$ with both arguments in $\Sigma$; since $\varphi|_\Sigma=j'\circ j^{-1}$ is injective ([L1]), $\sigma(\tau_0)=\gamma(\tau_0)=:x$. Differentiating $\varphi\circ\sigma=\zeta=\varphi\circ\gamma$ at $\tau_0$ gives $d\varphi_x(\sigma'(\tau_0))=d\varphi_x(\gamma'(\tau_0))$, and $d\varphi_x$ is injective by [L2], so $\sigma'(\tau_0)=\gamma'(\tau_0)$. Hence $\sigma$ and $\gamma$ are maximal geodesics with the same value and velocity at $\tau_0$; by uniqueness [L3] they agree on the intersection of their intervals, which contains $0$, so $p=\sigma(0)=\gamma(0)=q$. [step 2.1, L2, L3, algebra]

4.1 (Clauses (a) and (b).) Clause (a) is [L2]. For clause (b): step 3.1 shows that $\varphi$ is injective; by clause (a) and the inverse function theorem on manifolds, $\varphi$ is a local diffeomorphism, hence an open map, so $\varphi(M)$ is open in $M'$ and $\varphi:M\to\varphi(M)$ is a bijective local diffeomorphism, hence a diffeomorphism; it satisfies the remaining clauses of a development embedding by hypothesis. [step 1.1, step 3.1, L2, L5, algebra]

5.1 (Clause (c).) Let $\psi_1,\psi_2:M\to M'$ be data-fixing isometric immersions and let $M$ be connected. On every point $x\in\Sigma$ the two maps have the same value $j'$ and, by [[lem-gr-isometric-immersion-rigidity]] clause (b), the same differential; hence by rigidity (clause (a) of that lemma) $\psi_1=\psi_2$ on $M$. Taking $\psi_2=\mathrm{id}_M:M\to M$ (which is data-fixing by [[def-gr-development-and-data-fixing-isometry]] clause (b)) gives the self-isometry statement. [step 4.1, L4, algebra] ∎

## Remarks

Clause (b) shows that in the definition of an extension of a development one need not require the map to be an embedding: a data-fixing isometric immersion is automatically one. Clause (c) is the uniqueness used at the end of [[thm-gr-smooth-maximal-globally-hyperbolic-development]]; its connectedness hypothesis is the one of [[lem-gr-isometric-immersion-rigidity]] clause (a).
