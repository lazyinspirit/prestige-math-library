---
id: lem-gr-quotient-by-isometric-free-proper-action
kind: lemma
title: "Quotients of Lorentzian manifolds by free proper isometric discrete actions"
status: published
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-free-proper-action-quotient-manifold, def-free-and-proper-lie-group-actions, thm-smooth-inverse-function-theorem-on-manifolds, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-differential-of-a-smooth-map, def-smooth-manifold]
dependency_roles:
  thm-free-proper-action-quotient-manifold: mathematical-premise
  def-free-and-proper-lie-group-actions: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-smooth-manifold: mathematical-premise
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed.: quotients by free proper actions, Proposition 21.4 and Theorem 21.10, printed pp. 543-547"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: closed timelike curves, vicious spacetimes and the causal ladder, Proposition 4.18 and Definition 4.19 printed p. 113; sections 4.2 printed pp. 111-118"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(\hat M,\hat g)$ be a smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-smooth-covariant-two-tensor-field]]), let $\Gamma$ be a discrete
group equipped with its discrete smooth structure (a zero-dimensional Lie
group, so that a **smooth action** is one for which every map
$p\mapsto\gamma\cdot p$, $\gamma\in\Gamma$, is smooth), and let $\Gamma$ act
on $\hat M$ smoothly, freely and properly in the sense of
[[def-free-and-proper-lie-group-actions]]; write $\gamma\cdot p$ for the
action and $d\gamma_p$ for the differential of $p\mapsto\gamma\cdot p$
([[def-differential-of-a-smooth-map]]). Suppose that every $\gamma\in\Gamma$
**preserves $\hat g$**, that is
$$\hat g_{\gamma\cdot p}\bigl(d\gamma_p V,d\gamma_p W\bigr)=\hat g_p(V,W)$$
for all $p\in\hat M$, $V,W\in T_p\hat M$ and $\gamma\in\Gamma$. Let
$q:\hat M\to M:=\hat M/\Gamma$ be the orbit map. Then:

**(a)** $M$ is a Hausdorff second-countable smooth four-manifold, $q$ is a
smooth surjective submersion, and $q$ is a local diffeomorphism at every
point of $\hat M$.

**(b)** There is a unique smooth Lorentzian metric $g$ of signature
$(-,+,+,+)$ on $M$ with $q^*g=\hat g$; equivalently
$g_{q(p)}(dq_pV,dq_pW)=\hat g_p(V,W)$ for all $p,V,W$.

**(c)** If $\hat N$ is a smooth vector field on $\hat M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]) which is
$\Gamma$-invariant, $\hat N_{\gamma\cdot p}=d\gamma_p(\hat N_p)$, and
satisfies $\hat g(\hat N,\hat N)<0$, then the prescription
$N_{q(p)}:=dq_p(\hat N_p)$ defines a smooth vector field $N$ on $M$ with
$g(N,N)<0$ for all points. In particular, a $\Gamma$-invariant time
orientation of $(\hat M,\hat g)$ descends to one of $(M,g)$.

## Facts & Assumptions

**Given:** A smooth Lorentzian four-manifold $(\hat M,\hat g)$, a discrete group $\Gamma$ acting smoothly, freely, properly and preserving $\hat g$, and the orbit map $q$.

[L1] The quotient $M=\hat M/\Gamma$ of a smooth free proper action of a Lie group is a Hausdorff second-countable smooth manifold, and $q$ is a smooth surjective submersion ([[thm-free-proper-action-quotient-manifold]], [[def-free-and-proper-lie-group-actions]]).

[L2] The discrete group $\Gamma$ is zero-dimensional, so the dimension statement of [L1] gives $\dim M=\dim\hat M-0=4$.

[L3] A smooth map between smooth manifolds whose differential is invertible at every point is a local diffeomorphism: around every point it restricts to a diffeomorphism onto an open image, with a smooth inverse ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L4] The orbit map satisfies $q\circ\gamma=q$ for every $\gamma\in\Gamma$, hence $dq_{\gamma\cdot p}\circ d\gamma_p=dq_p$ wherever the differentials are formed ([[def-differential-of-a-smooth-map]]).

[L5] A smooth cocycle identity such as $\hat g_{\gamma\cdot p}(d\gamma_pV,d\gamma_pW)=\hat g_p(V,W)$ for all $p$ uses only the differentials; it implies the same identity for all smooth vector fields along the orbit ([[def-differential-of-a-smooth-map]], [[def-gr-smooth-covariant-two-tensor-field]]).

## Proof

**Proof technique:** direct.

1.1 (The quotient and local diffeomorphism property.) By [L1] and [L2], $M$ is a Hausdorff second-countable smooth four-manifold and $q$ is a smooth surjective submersion. Since $\dim M=\dim\hat M$, the differential $dq_p:T_p\hat M\to T_{q(p)}M$ is a linear isomorphism for every $p$: it is onto by the submersion property and the spaces have the same finite dimension. By [L3] every point of $\hat M$ has an open neighborhood $\hat U$ such that $q|_{\hat U}:\hat U\to q(\hat U)$ is a diffeomorphism onto an open set; in particular there are smooth local sections $s:V\to\hat M$ with $q\circ s=\operatorname{id}_V$ over open sets $V\subseteq M$ covering $M$. This proves (a). [given, L1, L2, L3]

2.1 (The metric: well-definedness.) For $r\in M$ and $v,w\in T_rM$ choose $p\in q^{-1}(r)$ and the unique $\hat V,\hat W\in T_p\hat M$ with $dq_p\hat V=v$, $dq_p\hat W=w$, and set $g_r(v,w):=\hat g_p(\hat V,\hat W)$. To see that this is independent of the choice of $p$: if $p'=\gamma\cdot p$, then by [L4] and the injectivity of $dq_{p'}$ the unique preimage of $v$ at $p'$ is $d\gamma_p\hat V$, and similarly for $w$, so the defining cocycle identity of the statement gives $\hat g_{p'}(d\gamma_p\hat V,d\gamma_p\hat W)=\hat g_p(\hat V,\hat W)$. The assignment is symmetric and bilinear in $(v,w)$ at each $r$ because $\hat g_p$ is, and it is nondegenerate with signature $(-,+,+,+)$ because $dq_p$ is a linear isomorphism and $\hat g_p$ is nondegenerate of that signature ([[def-gr-smooth-lorentzian-objects]]). [step 1.1, given, L4, L5]

3.1 (Smoothness and uniqueness.) Let $s:V\to\hat M$ be a smooth local section of $q$ as in step 1.1. For $r\in V$ and $v,w\in T_rM$ one has $dq_{s(r)}\circ ds_r=\operatorname{id}_{T_rM}$, so $g_r(v,w)=\hat g_{s(r)}(ds_rv,ds_rw)$, that is, $g|_V=s^*\hat g$. Both $s$ and $\hat g$ are smooth, so the components of $g$ in any chart contained in $V$ are smooth; since the open sets $V$ cover $M$, $g$ is a smooth covariant $2$-tensor field on $M$ ([[def-gr-smooth-covariant-two-tensor-field]]). If $g'$ were another smooth metric with $q^*g'=\hat g$, then for every $r$, $v,w$ and choice of $p$, $\hat V,\hat W$ as in step 2.1 one would have $g'_r(v,w)=\hat g_p(\hat V,\hat W)=g_r(v,w)$, so $g'=g$. This proves (b). [step 1.1, step 2.1, given]

3.2 (The time orientation.) Let $\hat N$ be $\Gamma$-invariant with $\hat g(\hat N,\hat N)<0$. For $p'=\gamma\cdot p$ the invariance gives $d\gamma_p\hat N_p=\hat N_{p'}$, so $dq_{p'}\hat N_{p'}=dq_{p'}(d\gamma_p\hat N_p)=dq_p\hat N_p$ by [L4]; hence $N_{q(p)}:=dq_p\hat N_p$ is well defined on $M$, and it is smooth because over a local section $s$ it equals $dq_{s(r)}\hat N_{s(r)}=ds_r^{-1}\hat N_{s(r)}$, a smooth expression. Moreover $g(N,N)_{q(p)}=\hat g_p(\hat N_p,\hat N_p)<0$ by the defining formula of step 2.1; so $N$ is a time orientation of $(M,g)$ in the sense of [[def-gr-smooth-lorentzian-objects]] clause (c). [step 1.1, step 2.1, given, L4]

4.1 (Conclusion.) Part (a) is step 1.1, part (b) is steps 2.1 and 3.1, and part (c) is step 3.2; this completes the proof. [step 1.1, step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Hypotheses.** Freeness and properness are used only through the quotient theorem [L1]; discreteness is used only to make the quotient four-dimensional, so that $q$ is a local diffeomorphism. The metric descent itself uses only invariance under the action and the local-diffeomorphism property.
- **Scope.** The result is a construction of a new Lorentzian model from an old one. It asserts nothing about the causal character of either model; whether the quotient is causal depends on the action and is decided by the properties of the closed orbits, as the flat cylinder example on the companion page shows.
