---
id: thm-determinantal-form-of-a-specht-character
kind: theorem
title: "The determinantal form of a Specht character"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [thm-jacobi-trudi-and-dual-jacobi-trudi-identities,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions,
       thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism,
       lem-frobenius-characteristic-preserves-outer-products,
       def-outer-induction-product-for-symmetric-group-characters,
       def-graded-ordinary-representation-ring-of-symmetric-groups,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       def-frobenius-characteristic-map,
       thm-complex-specht-modules-are-irreducible,
       def-determinant-of-a-square-matrix,
       def-inversions-inversion-number-and-sign]
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
    date: 2026-10-11
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§19, printed pp. 74–76, Theorem 19.2 with Examples 19.3–19.4: the determinantal form [λ]=det([λ_i−i+j]) with the conventions [m]=0 for m<0 and [0] the multiplicative identity, products outer induction"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, (7.4)–(7.5), printed pp. 113–114: X^λ=det(η_{λ_i−i+j}) is a virtual character of S_n with ch(X^λ)=s_λ, an independent determinantal treatment"
---

## Statement

Let $R_S=\bigoplus_{m\ge0}R(S_m)$ be the graded ordinary representation ring of
the symmetric groups, whose multiplication is the outer induction product
$\circ$ and whose unit is the trivial character of $S_0$
([[def-graded-ordinary-representation-ring-of-symmetric-groups]],
[[def-outer-induction-product-for-symmetric-group-characters]]). For $m\ge0$
let $[m]\in R(S_m)$ denote the trivial character of $S_m$ (so $[0]$ is the unit
of $R_S$), and set $[m]:=0\in R_S$ for $m<0$; the Frobenius characteristic
$\operatorname{ch}$ is the degree-preserving ring isomorphism of
[[thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism]]
normed by $\operatorname{ch}(\chi^\nu)=s_\nu$
([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]],
[[def-frobenius-characteristic-map]]).

Then for every partition $\lambda=(\lambda_1\ge\cdots\ge\lambda_k>0)$ of $n$,
with $\chi^\lambda\in R(S_n)$ the character of the complex Specht module
$S^\lambda$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[thm-complex-specht-modules-are-irreducible]]),
$$\chi^\lambda=\det\bigl([\lambda_i-i+j]\bigr)_{1\le i,j\le k}\qquad\text{in }R_S,$$
where the determinant is the Leibniz expansion
$$\det\bigl([\lambda_i-i+j]\bigr)=\sum_{w}\operatorname{sgn}(w)\,[\lambda_1-1+w(1)]\circ[\lambda_2-2+w(2)]\circ\cdots\circ[\lambda_k-k+w(k)]$$
over the bijections $w$ of $\{1,\dots,k\}$, with $\operatorname{sgn}$ the sign
of the corresponding permutation
([[def-determinant-of-a-square-matrix]],
[[def-inversions-inversion-number-and-sign]]). For every such $w$ the degrees
add up to $\sum_{i=1}^k(\lambda_i-i+w(i))=\sum_i\lambda_i=n$, so every nonzero
monomial is homogeneous of degree $n$ and the determinant is a well-defined
element of $R(S_n)$. For $n=0$ use $\lambda=\varnothing$, $k=0$, and the empty determinant and empty product equal to $[0]$. The convention $[0]=1$ (the multiplicative identity of
$R_S$) must be distinguished from the zero element $0$. No choice principle is
used.

## Facts & Assumptions

**Given:** A partition $\lambda=(\lambda_1\ge\cdots\ge\lambda_k>0)$ of $n$, the graded ring $R_S=\bigoplus_{m\ge0}R(S_m)$ with the outer product $\circ$ and unit the trivial character of $S_0$, the elements $[m]\in R(S_m)$ for $m\ge0$ and $[m]:=0$ for $m<0$, and the characteristic map $\operatorname{ch}$.

[F1] $R(S_m)$ is the $\mathbb Z$-span of the irreducible characters of $S_m$; $R_S$ is the direct sum with degree-$m$ components, and under the outer product it is a commutative graded $\mathbb Z$-algebra with unit the trivial character of $S_0$ ([[def-graded-ordinary-representation-ring-of-symmetric-groups]], [[def-outer-induction-product-for-symmetric-group-characters]], [[thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism]]). The outer product of elements of degrees $a_1,\dots,a_k\ge0$ is homogeneous of degree $a_1+\cdots+a_k$, and if some degree is negative the corresponding entry is $0$ by the convention on $[m]$.

[F2] $\operatorname{ch}:R_S\to\Lambda$ is a degree-preserving $\mathbb Z$-module isomorphism, carries the outer product to the product in $\Lambda$ and the unit to $1$, and is therefore injective ([[thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism]], [[lem-frobenius-characteristic-preserves-outer-products]]).

[F3] $\operatorname{ch}(\chi^\nu)=s_\nu$ for every $n\ge0$ and every partition $\nu\vdash n$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]); for $m\ge1$ the one-row Specht module is trivial, since its tabloid space has one basis vector and its column stabilizer is trivial ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]). Thus $\operatorname{ch}([m])=s_{(m)}$ for $m\ge1$; for $m=0$ use the empty partition and $\operatorname{ch}([0])=1$.

[F4] Jacobi–Trudi: for $r\ge\ell(\lambda)$, $s_\lambda=\det(h_{\lambda_i-i+j})_{1\le i,j\le r}$, where $h_q$ is the stable complete homogeneous function, $h_0=1$, and $h_q=0$ for $q<0$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]). In particular $s_{(m)}=h_m$ for every $m\ge1$ by the case $r=1$; for the empty partition $s_\varnothing=h_0=1$, and $h_m=0$ for $m<0$.

[F5] The determinant over a commutative ring is the Leibniz sum $\det(A)=\sum_{\sigma}\operatorname{sgn}(\sigma)\prod_i a_{\sigma(i),i}$ of the entries ([[def-determinant-of-a-square-matrix]], [[def-inversions-inversion-number-and-sign]]); the equivalent row-indexed sum uses $w=\sigma^{-1}$. Their signs agree: $(i,j)\mapsto(\sigma(j),\sigma(i))$ bijects the inversions of $\sigma$ with those of $\sigma^{-1}$. A unital ring homomorphism $\varphi$ sends the finite sums and products defining the determinant of $A$ to those defining the determinant of the entrywise image $\varphi(A)$.

## Proof

**Proof technique:** direct.

1.1 For every integer $m$ one has $\operatorname{ch}([m])=h_m$. For $m\ge1$ this is $\operatorname{ch}([m])=\operatorname{ch}(\chi^{(m)})=s_{(m)}=h_m$ by [F3] and the case $r=1$ of [F4]; for $m=0$ both sides are $1$ by [F3] and [F4]; for $m<0$ both sides are $0$, since $[m]:=0$ and $\operatorname{ch}$ is additive with $\operatorname{ch}(0)=0$, while $h_m=0$ by the convention of [F4]. [F3, F4, given]

1.2 Every bijection $w$ of $\{1,\dots,k\}$ satisfies $\sum_i(\lambda_i-i+w(i))=\sum_i\lambda_i=n$, because $\sum_i i=\sum_i w(i)$. Hence the Leibniz term $[\lambda_1-1+w(1)]\circ\cdots\circ[\lambda_k-k+w(k)]$ is a product of $k$ homogeneous elements whose degrees sum to $n$: if every $\lambda_i-i+w(i)\ge0$ it lies in the degree-$n$ component $R(S_n)$ of $R_S$, and if some $\lambda_i-i+w(i)<0$ then the corresponding factor is the zero element, so the term is $0$ by [F1]. For $k=0$ the sole empty term is $[0]$. The determinant $\det H$ is the finite sum of these $k!$ terms, hence is a well-defined element of the degree-$n$ component $R(S_n)$ of $R_S$. [F1, F5, algebra]

2.1 Let $H$ be the $k\times k$ matrix with entries $h_{ij}:=[\lambda_i-i+j]\in R_S$ over the commutative ring $R_S$ of [F1]. Applying the unital ring homomorphism $\operatorname{ch}$ entrywise to $H$ gives the matrix with entries $\operatorname{ch}(h_{ij})=h_{\lambda_i-i+j}$ by step 1.1. Since $\operatorname{ch}$ preserves finite sums and products, it commutes with the Leibniz determinant [F5], so
$$\operatorname{ch}(\det H)=\det\bigl(h_{\lambda_i-i+j}\bigr)=s_\lambda=\operatorname{ch}(\chi^\lambda),$$
where the middle equality is Jacobi–Trudi at $r=k\ge\ell(\lambda)$ and the last is [F3]. [step 1.1, F1, F2, F3, F4, F5, algebra]

3.1 Since $\operatorname{ch}$ is injective by [F2], the equality $\operatorname{ch}(\det H)=\operatorname{ch}(\chi^\lambda)$ of step 2.1 gives $\det H=\chi^\lambda$ in $R_S$, which is the asserted determinant identity. Finally $[0]\in R(S_0)$ is the trivial character of the trivial group and the identity of $R_S$, with $\operatorname{ch}([0])=h_0=1$, whereas the zero element $0\in R_S$ satisfies $\operatorname{ch}(0)=0$; since $1\ne0$ in $\Lambda$ and $\operatorname{ch}$ is injective on the degree-$0$ component, $[0]\ne0$, so the two conventions are distinct. [step 2.1, step 1.2, F1, F2, F3, F4, algebra] ∎

## Remarks

- **Where the two determinant conventions enter.** The entries $[\lambda_i-i+j]$ are zero as soon as the index $\lambda_i-i+j$ is negative, so very few of the $k!$ Leibniz terms survive; the terms that do survive all lie in the same degree-$n$ component. The identity $\sum_i(\lambda_i-i+w(i))=n$ is the reason the determinant is an element of the homogeneous piece $R(S_n)$ rather than of the whole graded ring.

- **The Jacobi–Trudi route.** The proof transports the Jacobi–Trudi determinant for Schur functions through the characteristic isomorphism, which is the reason the statement is an identity in $R_S$ rather than a numerical formula: the theorem is the character-theoretic mirror of $s_\lambda=\det(h_{\lambda_i-i+j})$. James's §19 expansion of the same determinant is an independent combinatorial proof of the identical identity and is the source recorded for the statement.
