---
id: def-markov-trace-on-the-type-a-hecke-tower
kind: definition
title: "The Markov trace on the type-A Hecke tower"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       def-algebra-over-a-commutative-ring, def-polynomial-ring-over-a-commutative-ring,
       def-the-laurent-polynomial-ring, def-ring-homomorphism, def-symmetric-group,
       def-restriction-and-extension-of-scalars, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
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
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 printed pp. 47-49 (Ocneanu's trace theorem and the Markov trace on the Hecke tower)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Sections 1-3 (the Ocneanu trace on the Hecke tower)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
---

## Definition

Let $A=\mathbb Z[v^{\pm1}]$ be the Laurent polynomial ring and let
$\Lambda:=A[z]=\mathbb Z[v^{\pm1},z]$ be the polynomial ring over $A$ in one
indeterminate ([[def-the-laurent-polynomial-ring]],
[[def-polynomial-ring-over-a-commutative-ring]]). For $n\ge1$ let
$H(n):=\Lambda\otimes_AH_v(n)$ be the scalar extension of the generic type-A
Hecke algebra of [[def-generic-type-a-hecke-algebra]]
([[def-algebra-over-a-commutative-ring]]), so that $H(n)$ is the unital
$\Lambda$-algebra with generators $T_1,\dots,T_{n-1}$ subject to
$$T_i^2=(v-1)T_i+v,\qquad T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1},\qquad T_iT_j=T_jT_i\quad(|i-j|>1),$$
and $H(1)=\Lambda$. The $\Lambda$-algebra $H(n)$ is free with basis
$\{T_w:w\in S_n\}$, where $T_w$ is the product of the generators along a reduced
word ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]],
[[def-symmetric-group]]).

The generators induce a $\Lambda$-algebra homomorphism
$\iota_n:H(n)\to H(n+1)$, $T_i\mapsto T_i$; it is injective, so we identify
$H(n)$ with its image, a $\Lambda$-subalgebra of $H(n+1)$.

A **Markov trace on the type-A Hecke tower** is a family of $\Lambda$-linear
maps $\operatorname{tr}_n:H(n)\to\Lambda$, $n\ge1$, such that

- (M1) $\operatorname{tr}_n(1)=1$ for one (equivalently, by (M2), every) $n$;
- (M2) $\operatorname{tr}_{n+1}\circ\iota_n=\operatorname{tr}_n$ for all $n\ge1$;
- (M3) $\operatorname{tr}_n(xy)=\operatorname{tr}_n(yx)$ for all $x,y\in H(n)$;
- (M4) $\operatorname{tr}_{n+1}(x\,T_n)=z\,\operatorname{tr}_n(x)$ for all $n\ge1$
  and $x\in H(n)$.

Here $z\in\Lambda$ is a formal parameter, distinct from the Hecke parameter $v$;
no value of $z$ is fixed or inverted by this definition, and the trace takes
values in $\Lambda$, not in a field.

**Caveats.** This is a family over the whole tower, not a single functional; the
conditions (M1)--(M4) are a definition, so no trace is asserted to exist here
(existence and uniqueness is
[[thm-the-ocneanu-markov-trace-exists-and-is-unique]]). By (M3), (M4) is
equivalent to $\operatorname{tr}_{n+1}(u\,T_n\,v)=z\operatorname{tr}_n(uv)$ for
all $u,v\in H(n)$: applied to $uT_nv$ one gets
$\operatorname{tr}_{n+1}(uT_nv)=\operatorname{tr}_{n+1}(T_nvu)=z\operatorname{tr}_n(vu)=z\operatorname{tr}_n(uv)$,
and conversely take $v=1$.

## Facts & Assumptions

**Given:** The Laurent ring $A=\mathbb Z[v^{\pm1}]$, the polynomial ring $\Lambda=A[z]$, the generic Hecke algebras $H_v(n)$ over $A$, and the scalar extensions $H(n)=\Lambda\otimes_AH_v(n)$ for $n\ge1$. No choice principle is used.

[F1] $H_v(n)$ is the unital $A$-algebra presented by $T_1,\dots,T_{n-1}$ with $T_i^2=(v-1)T_i+v$, the braid relations and the distant commutations; $H_v(n)=A$ for $n\le1$ ([[def-generic-type-a-hecke-algebra]]).

[F2] $\{T_w:w\in S_n\}$ is a $\Lambda$-basis of $H(n)$ for $n\ge2$, and $H(1)=\Lambda$; the reduced word $T_w$ is well defined ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]], [[def-generic-type-a-hecke-algebra]]).

[F3] Scalar extension along $A\to\Lambda$ presents $H(n)$ by the same generators and relations over $\Lambda$, and $\Lambda=A[z]$ is the polynomial $A$-algebra in one indeterminate ([[def-algebra-over-a-commutative-ring]], [[def-restriction-and-extension-of-scalars]], [[thm-universal-property-of-module-tensor-products]], [[def-polynomial-ring-over-a-commutative-ring]]); $\Lambda$ is commutative with unit and $v$ is a unit of it ([[def-the-laurent-polynomial-ring]]).

[F4] A $\Lambda$-algebra homomorphism is a ring homomorphism that is $\Lambda$-linear ([[def-ring-homomorphism]], [[def-algebra-over-a-commutative-ring]]); the universal property of a presented algebra yields a homomorphism from the presented algebra whenever the prescribed images satisfy the defining relations.

## Proof

Step 1.1 establishes the well-formedness of the ambient tower and step 2.1 the injectivity and the stated equivalence of (M1); the four conditions are a definition and require no existence proof.

1.1 **The tower is well formed.** On the tensor product in [F3], define $(\lambda\otimes h)(\mu\otimes k)=\lambda\mu\otimes hk$: balancing over the central ring $A$ makes this bilinear product well defined, and associativity and the unit $1\otimes1$ follow from those of $H_v(n)$. It has the asserted presentation over $\Lambda$. Indeed the generators $1\otimes T_i$ satisfy the relators, giving a map from that presented algebra to the tensor product. Conversely the presented $\Lambda$-algebra receives an $A$-algebra map from $H_v(n)$ by [F1], and the balanced map $(\lambda,h)\mapsto\lambda h$ extends to the tensor product by [F3]. The two maps are inverse on elementary tensors and generators. By [F2] each $H(n)$ is a free $\Lambda$-module with the stated basis, so $H(n)$ is a unital $\Lambda$-algebra and $H(1)=\Lambda$. Since the defining relators of $H(n)$ are literally among the relators of $H(n+1)$ under $T_i\mapsto T_i$, [F4] applies to the assignment on generators and gives a $\Lambda$-algebra homomorphism $\iota_n:H(n)\to H(n+1)$ with $\iota_n(T_i)=T_i$. [F1, F2, F3, F4, given]

2.1 **Injectivity and the equivalence in (M1).** Under $\iota_n$ the basis element $T_w$, $w\in S_n$, is carried to the element of $H(n+1)$ given by the same reduced word, which is the standard basis element $T_w$ for $w$ regarded in $S_{n+1}$ (fixing $n+1$); these elements are pairwise distinct members of the $\Lambda$-basis of $H(n+1)$ by [F2], hence are linearly independent and $\iota_n$ is injective. For the parenthetical in (M1): if $\operatorname{tr}_m(1)=1$ for some $m$, then for $k\ge1$ condition (M2) gives $\operatorname{tr}_k(1)=\operatorname{tr}_{k+1}(\iota_k(1))=\operatorname{tr}_{k+1}(1)$, so $\operatorname{tr}_n(1)=\operatorname{tr}_m(1)=1$ for every $n$; (M2) applies in both directions because $\iota_k(1)=1$. The equivalence of the two forms of (M4) follows from (M3) as displayed in the caveats. [F2, step 1.1, algebra] ∎
