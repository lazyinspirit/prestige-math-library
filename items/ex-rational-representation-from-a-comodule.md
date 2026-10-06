---
id: ex-rational-representation-from-a-comodule
kind: example
title: A rational representation of the multiplicative group from a graded comodule
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-coordinate-hopf-algebra-of-affine-group-scheme
  - def-linear-basis
  - def-linear-map
  - def-linear-subspace
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-vector-space
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-representations-of-affine-group-schemes-are-comodules
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 4 §4(a) and §4(e), printed pp. 83-85 and 88-89 (PDF 94-96 and 99-100)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 22nd and 27th lectures, Definitions 103-108 and Lemma 109, printed pp. 26-28."
proof_strategy: direct
---

## Example

Assume the Axiom of Choice for the finite-type construction of $\mathbf G_m$. Let $k$ be a field, let $G=\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$ and let $V$ be a finite-dimensional $k$-vector space with a direct-sum decomposition $V=\bigoplus_{m\in\mathbb Z}V_m$ into weight spaces (all but finitely many zero). Then
$$\rho\colon V\to V\otimes_kk[t,t^{-1}],\qquad\rho(v)=\sum_mv_m\otimes t^m\quad\text{for }v=\sum_mv_m,\ v_m\in V_m,$$
is a comodule structure on $V$ over the coordinate Hopf algebra ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]), and the corresponding rational representation ([[lem-representations-of-affine-group-schemes-are-comodules]]) is the homomorphism $r_R\colon R^\times\to\operatorname{GL}_R(V\otimes_kR)$ whose action on $V_m\otimes_kR$ is multiplication by the scalar $g^m$. Conversely, every comodule structure on $V$ arises in this way: putting $V_m=\{v:\rho(v)=v\otimes t^m\}$ gives $\rho(V_m)\subseteq V_m\otimes k[t,t^{-1}]$ and $V=\bigoplus_mV_m$. If $e_1,\dots,e_n$ is a basis of weight vectors, the associated comorphism $\mathcal O(\operatorname{GL}_n)\to k[t,t^{-1}]$ sends $x_{ij}$ to $\delta_{ij}t^{m_i}$, and the matrix coefficients satisfy the identities of [[lem-representations-of-affine-group-schemes-are-comodules]].

## Verification

**Given:** AC for the finite-type construction of $\mathbf G_m$, a field $k$, the group $G=\mathbf G_m$ with coordinate Hopf algebra $k[t,t^{-1}]$, a finite-dimensional $k$-vector space $V$ with weight decomposition $V=\bigoplus_{m\in\mathbb Z}V_m$, and the coaction $\rho(v)=\sum_mv_m\otimes t^m$.

[F1] The comultiplication, counit and antipode of $k[t,t^{-1}]$ are determined by $\Delta(t^m)=t^m\otimes t^m$, $\varepsilon(t^m)=1$ and $S(t^m)=t^{-m}$ for all $m\in\mathbb Z$, and the points of $\mathbf G_m$ over a $k$-algebra $R$ are the units $g\in R^\times$, acting by $g\cdot t^m=g^m$. ([[lem-general-linear-group-scheme-and-its-coordinate-ring]])

[F2] A rational representation corresponds to a comodule structure by $r_R(g)(v\otimes1)=(\operatorname{id}_V\otimes g)\rho(v)$, and for a finite-dimensional comodule with coefficients $\rho(e_j)=\sum_ie_i\otimes a_{ij}$ the identities $\Delta(a_{ij})=\sum_la_{il}\otimes a_{lj}$, $\varepsilon(a_{ij})=\delta_{ij}$ hold and the associated comorphism sends $x_{ij}\mapsto a_{ij}$. ([[lem-representations-of-affine-group-schemes-are-comodules]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F3] The Laurent polynomial ring has unique finite monomial expansions. For each integer $m$, the coefficient map $c_m\colon k[t,t^{-1}]\to k$ is therefore linear, and $\operatorname{id}_X\otimes c_m$ takes $\sum_ny_n\otimes t^n$ to $y_m$. Hence a zero tensor expression has all $y_m=0$. ([[def-linear-basis]], [[def-tensor-product-of-modules-by-generators-and-relations]], [[def-linear-subspace]])

1.1 The map $\rho$ is a comodule structure: by [F1], $(\rho\otimes\operatorname{id})\rho(v)=\sum_mv_m\otimes t^m\otimes t^m=(\operatorname{id}\otimes\Delta)\rho(v)$ and $(\operatorname{id}\otimes\varepsilon)\rho(v)=\sum_mv_m\otimes1=v$. [F1, F2, algebra]

1.2 Conversely, let $\rho$ be any comodule structure on the finite-dimensional space $V$. Writing $\rho(v)=\sum_mv_m\otimes t^m$ with finitely many nonzero terms, coassociativity and [F1] give $\sum_m\rho(v_m)\otimes t^m=\sum_mv_m\otimes t^m\otimes t^m$, so $\sum_m(\rho(v_m)-v_m\otimes t^m)\otimes t^m=0$; by [F3] each $\rho(v_m)=v_m\otimes t^m$, so $v_m\in V_m$ with $V_m=\{v:\rho(v)=v\otimes t^m\}$. The counit identity gives $v=\sum_mv_m$, so the $V_m$ span $V$, and a relation $\sum_mu_m=0$ with $u_m\in V_m$ gives $\sum_mu_m\otimes t^m=0$ and hence $u_m=0$ by [F3]; thus $V=\bigoplus_mV_m$. Applying the construction to a finite basis of $V$, the union of the finitely many supports of its coaction expressions spans $V$ by weight vectors; hence all other $V_m$ vanish. Each $V_m$ is a linear subspace because its defining condition is linear. [F1, F3, algebra]

2.1 By [F2] the associated representation is $r_R(g)(v\otimes1)=(\operatorname{id}\otimes g)\rho(v)=\sum_mv_m\otimes g^m$ for $g\in R^\times$; since $(v\otimes r)$ is mapped to $r\cdot\sum_mv_m\otimes g^m$, the action on each $V_m\otimes_kR$ is multiplication by the scalar $g^m$, and $r_R$ is a group homomorphism because $g\mapsto g^m$ is multiplicative; hence $\rho$ defines the stated rational representation. [F1, F2, step 1.1, algebra]

3.1 Let $e_1,\dots,e_n$ be a basis of weight vectors with $e_i\in V_{m_i}$, so that $a_{ij}=\delta_{ij}t^{m_i}$; by [F2] the matrix coefficients satisfy $\Delta(a_{ij})=\sum_la_{il}\otimes a_{lj}$ and $\varepsilon(a_{ij})=\delta_{ij}$, and the associated comorphism sends $x_{ij}$ to $\delta_{ij}t^{m_i}$. For $V=0$, use $\operatorname{GL}_0=\operatorname{Spec}k$ with comorphism $k\to k[t,t^{-1}]$ and no matrix entries. Together with steps 1.2 and 2.1 this proves both directions of the stated dictionary, using only the explicit monomial basis of $k[t,t^{-1}]$ and finitely many weight spaces. [F1, F2, step 1.2, step 2.1] ∎
