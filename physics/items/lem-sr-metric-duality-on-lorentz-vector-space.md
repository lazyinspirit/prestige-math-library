---
id: lem-sr-metric-duality-on-lorentz-vector-space
kind: lemma
title: 'The metric pairing is a linear bijection to the dual, and the raised covector in an orthonormal frame'
status: published
origin: pipeline
domain: mathematics
deps: [def-lorentz-form-and-inertia, def-algebraic-dual-and-linear-functional,
       def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form,
       thm-bilinear-forms-correspond-to-linear-maps-into-the-dual,
       thm-rank-nullity, def-rank-and-nullity,
       thm-dual-family-is-a-basis-in-finite-dimension, def-linear-map,
       def-linear-isomorphism-and-invertible-linear-map,
       lem-lorentz-form-has-orthonormal-basis,
       def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-algebraic-dual-and-linear-functional: mathematical-premise
  def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form: mathematical-premise
  thm-bilinear-forms-correspond-to-linear-maps-into-the-dual: mathematical-premise
  thm-rank-nullity: mathematical-premise
  def-rank-and-nullity: mathematical-premise
  thm-dual-family-is-a-basis-in-finite-dimension: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 6.4 Duality pp. 134-137 (the frequency covector and its dual); signature (+---) converted to (-+++)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, the wave four-vector (6.1)-(6.5) pp. 25-26'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Statement

Let $(V,\eta)$ be a $4$-dimensional Lorentz vector space ([[def-lorentz-form-and-inertia]]): $\eta$ is symmetric and bilinear, nondegenerate in the sense that both radicals are $\{0\}$ ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]), and of inertia $(3,1,0)$. Let $V^*$ be the algebraic dual ([[def-algebraic-dual-and-linear-functional]]). Then:

**(a)** The map $\Phi:V\to V^*$, $\Phi(v)(w):=\eta(v,w)$, is linear, and it is injective: $\Phi(v)=0$ means $\eta(v,w)=0$ for all $w\in V$, that is $v\in\operatorname{rad}_L(\eta)=\{0\}$.

**(b)** $\dim V^*=\dim V=4$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]), so $\Phi$ is a linear bijection; equivalently $\operatorname{nullity}\Phi=0$ and $\operatorname{rank}\Phi=4$ ([[thm-rank-nullity]], [[def-rank-and-nullity]]).

**(c)** Consequently for every covector $k\in V^*$ there is a unique vector $k^\sharp\in V$ with $\eta(k^\sharp,w)=k(w)$ for all $w\in V$; the assignment $\sharp:V^*\to V$, $k\mapsto k^\sharp$, is linear and is the inverse of $\Phi$ ([[def-linear-isomorphism-and-invertible-linear-map]]), so $(v^\flat)^\sharp=v$ for $v^\flat:=\Phi(v)$ and $(k^\sharp)^\flat=k$ for every $k\in V^*$; in particular $k^\sharp=0$ if and only if $k=0$.

**(d)** If $(e_0,e_1,e_2,e_3)$ is an $\eta$-orthonormal ordered basis of $V$ ([[lem-lorentz-form-has-orthonormal-basis]]) and $k_a:=k(e_a)$ are the values of $k$ on that basis, then

$$k^\sharp=-k_0e_0+k_1e_1+k_2e_2+k_3e_3,$$

that is $(k^\sharp)^0=-k_0$ and $(k^\sharp)^i=k_i$ for $i=1,2,3$ in this basis, and

$$\eta(k^\sharp,k^\sharp)=-(k_0)^2+(k_1)^2+(k_2)^2+(k_3)^2.$$

Hence, for $k\neq 0$ the vector $k^\sharp$ is nonzero and, in the sense of ([[def-causal-classification-of-lorentz-vectors]]), it is null exactly when $(k_0)^2=(k_1)^2+(k_2)^2+(k_3)^2$, timelike exactly when $(k_0)^2>(k_1)^2+(k_2)^2+(k_3)^2$ (equivalently $\eta(k^\sharp,k^\sharp)<0$), and spacelike exactly when $(k_0)^2<(k_1)^2+(k_2)^2+(k_3)^2$ (equivalently $\eta(k^\sharp,k^\sharp)>0$); for $k=0$ one has $k^\sharp=0$, which has no causal character.

No orientation, time orientation or affine structure is used, and no choice principle is used.

## Facts & Assumptions

**Given:** A $4$-dimensional real vector space $V$, a Lorentz form $\eta$ on $V$, and the map $\Phi(v):=\eta(v,\cdot)$.

[L1] $V$ is $4$-dimensional, and $\eta$ is symmetric and bilinear with $\operatorname{rad}_L(\eta)=\operatorname{rad}_R(\eta)=\{0\}$ and inertia $(3,1,0)$ ([[def-lorentz-form-and-inertia]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[L2] $V^*=\mathcal L(V,\mathbb R)$ is the algebraic dual of $V$, and the assignment $B\mapsto B^\flat$ with $B^\flat(v)(w)=B(v,w)$ is a linear bijection from the bilinear forms on $V$ onto $\mathcal L(V,V^*)$; in particular $B^\flat$ is a linear map for every bilinear form $B$ ([[def-algebraic-dual-and-linear-functional]], [[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]], [[def-linear-map]]).

[L3] If $B=(b_1,\dots,b_n)$ is a basis of a finite-dimensional $F$-vector space, then its dual family is a basis of the dual space; consequently $\dim V^*=\dim V$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L4] There is an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $V$, that is, $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for all $a,b$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L5] For a linear map $T$ with finite-dimensional domain, $\dim V=\operatorname{nullity}T+\operatorname{rank}T$, where $\operatorname{nullity}T=\dim(\ker T)$ and $\operatorname{rank}T=\dim(\operatorname{im}T)$ ([[thm-rank-nullity]], [[def-rank-and-nullity]]).

[L6] A linear map $T$ is invertible, equivalently a linear isomorphism, when there is a linear map $S$ with $S\circ T=\operatorname{id}$ and $T\circ S=\operatorname{id}$; such an $S$ is unique and written $T^{-1}$, and $T$ is bijective ([[def-linear-isomorphism-and-invertible-linear-map]]).

[L7] A vector $v\in V$ is timelike, null or spacelike according as $\eta(v,v)<0$, $\eta(v,v)=0$ with $v\neq 0$, or $\eta(v,v)>0$; the zero vector has none of these characters, and every nonzero vector has exactly one ([[def-causal-classification-of-lorentz-vectors]]).

## Proof

**Proof technique:** direct.

1.1 The map $\Phi$ is linear, and $\ker\Phi=\{0\}$. Since $\eta$ is a bilinear form on $V$, its associated map $\eta^\flat$ lies in $\mathcal L(V,V^*)$ and $\eta^\flat(v)(w)=\eta(v,w)=\Phi(v)(w)$ for all $v,w$, so $\Phi=\eta^\flat$ is linear by [L2]. If $\Phi(v)=0$, then $\eta(v,w)=0$ for every $w\in V$, so $v$ lies in the left radical of $\eta$, which is $\{0\}$ by [L1]; conversely $\Phi(0)=0$ by linearity (equivalently $\eta(0,\cdot)=0$), so $\ker\Phi=\{0\}$. [L1, L2, given]

1.2 The map $\Phi$ is surjective. Fix an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ [L4], with dual family $(e^0,e^1,e^2,e^3)$, a basis of $V^*$ by [L3]. For all $a,b$ one has $\Phi(e_a)(e_b)=\eta(e_a,e_b)=\eta_{aa}\delta_{ab}$ with $\eta_{aa}\in\{-1,1\}$, by [L4], and the functional $\eta_{aa}e^a$ takes the same values on the basis $(e_b)$; two linear functionals that agree on a basis agree on every vector, so $\Phi(e_a)=\eta_{aa}e^a$, which exhibits $e^a=\eta_{aa}\Phi(e_a)$ as a scalar multiple of $\Phi(e_a)$ (here $\eta_{aa}^{-1}=\eta_{aa}$). Hence every element of the basis $(e^a)$ of $V^*$ lies in the linear span of $\Phi(e_0),\dots,\Phi(e_3)$, so that span is all of $V^*$; therefore $\Phi$ is surjective. [L3, L4, algebra]

2.1 The map $\Phi$ is a linear bijection, $\dim V^*=\dim V=4$, and the inverse assignment $\sharp$ exists with the stated properties. By step 1.1 $\Phi$ is injective and by step 1.2 it is surjective, hence bijective; by [L3] and [L1], $\dim V^*=\dim V=4$; and [L5] applied to the linear map $\Phi$ gives the same picture independently, $\operatorname{nullity}\Phi=\dim\ker\Phi=0$ and $\operatorname{rank}\Phi=4=\dim V^*$, with $\operatorname{rank}\Phi=\dim\operatorname{im}\Phi$ and $\operatorname{im}\Phi=V^*$ by step 1.2. By [L6] the inverse $\Phi^{-1}:V^*\to V$ is a well-defined linear map, unique, and satisfies $\Phi^{-1}\circ\Phi=\operatorname{id}_V$ and $\Phi\circ\Phi^{-1}=\operatorname{id}_{V^*}$. Writing $k^\sharp:=\Phi^{-1}(k)$ for $k\in V^*$, we get $\eta(k^\sharp,w)=\Phi(k^\sharp)(w)=k(w)$ for every $w\in V$; any $c$ with $\eta(c,w)=k(w)$ for all $w$ satisfies $\Phi(c)=k$, hence $c=k^\sharp$ by injectivity of $\Phi$, which is the asserted uniqueness. The two inverse equations are exactly $(v^\flat)^\sharp=v$ for $v^\flat=\Phi(v)$ and $(k^\sharp)^\flat=k$, and $k^\sharp=0$ holds if and only if $k=\Phi(k^\sharp)=\Phi(0)=0$. This proves (a), (b) and (c). [step 1.1, step 1.2, L1, L3, L5, L6]

3.1 Component formula. Let $k\in V^*$ and keep the orthonormal basis $(e_a)$ of step 1.2; put $c^0:=-k_0$ and $c^i:=k_i$ for $i=1,2,3$, where $k_a=k(e_a)$, and set $c:=c^0e_0+c^1e_1+c^2e_2+c^3e_3$. For every basis vector $e_b$, bilinearity and orthonormality [L1, L4] give $\eta(c,e_b)=\sum_a c^a\eta(e_a,e_b)=c^b\eta_{bb}$; hence $\eta(c,e_0)=-c^0=k_0=k(e_0)$ and $\eta(c,e_i)=c^i=k_i=k(e_i)$ for $i=1,2,3$. The functionals $w\mapsto\eta(c,w)$ (linear in its second argument by [L1]) and $k$ agree on the basis $(e_b)$, hence on all of $V$; therefore $\Phi(c)=k$, and uniqueness in step 2.1 yields $c=k^\sharp=-k_0e_0+k_1e_1+k_2e_2+k_3e_3$. [step 1.2, step 2.1, L1, L4, algebra]

4.1 Quadratic form and causal trichotomy. With $k^\sharp=\sum_a c^ae_a$ from step 3.1, bilinearity and orthonormality give $\eta(k^\sharp,k^\sharp)=\sum_{a,b}c^ac^b\eta(e_a,e_b)=\sum_a(c^a)^2\eta_{aa}=-(c^0)^2+(c^1)^2+(c^2)^2+(c^3)^2=-(k_0)^2+(k_1)^2+(k_2)^2+(k_3)^2$, because $(c^0)^2=(k_0)^2$ and $c^i=k_i$. If $k\neq 0$ then $k^\sharp\neq 0$ by step 2.1, so [L7] applies: $k^\sharp$ is null exactly when this value is $0$, that is when $(k_0)^2=(k_1)^2+(k_2)^2+(k_3)^2$; timelike exactly when it is negative, that is when $(k_0)^2>(k_1)^2+(k_2)^2+(k_3)^2$; and spacelike exactly when it is positive, that is when $(k_0)^2<(k_1)^2+(k_2)^2+(k_3)^2$. If $k=0$ then $k^\sharp=0$ by step 2.1 and the zero vector has no causal character by [L7]. No orientation, time orientation or affine structure was used, and no choice principle was used. [step 2.1, step 3.1, L4, L7] ∎
