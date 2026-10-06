---
id: lem-plane-syzygy-truncation-injectivity
kind: lemma
title: The truncated multiplication map is injective exactly when the tangent cones are coprime
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraically-closed-field, def-axiom-of-choice, def-dimension, def-embedding-dimension-and-regular-local-ring, def-homogeneous-polynomial-and-homogeneous-ideal, def-irreducible-and-prime-elements-in-a-domain, def-local-ring, def-module-homomorphism-kernel-image-and-cokernel, def-multiplicity-plane-curve-point, def-tangent-lines-plane-curve-point, def-vector-space, lem-finite-variable-polynomial-rings-over-fields-are-ufds, lem-tangent-cone-ideal-containment, lem-truncated-plane-local-length, thm-associated-graded-ring-of-a-regular-local-ring, thm-polynomial-degree-of-a-product-over-a-domain, thm-rank-nullity]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $O$ be the local ring of $\mathbf A^2$ at the origin over an algebraically closed field $k$, let $f,g\in\mathfrak m$ have orders $m,n\ge1$, and define

$$ \bar\psi:O/\mathfrak m^{n}\times O/\mathfrak m^{m}\longrightarrow O/\mathfrak m^{m+n},\qquad \bar\psi(A,B)=Af+Bg,$$

on representatives (the truncation of the $f$-coefficient is by the order of $g$, and conversely, so that changes of representatives change both products by elements of $\mathfrak m^{m+n}$). Then $\bar\psi$ is well defined and $k$-linear, and it is injective if and only if the lowest-degree forms $f^*$ and $g^*$ have no common factor in $k[x,y]$. If $f^*,g^*$ share a factor, the kernel is nonzero. In particular

$$ \dim_k\operatorname{im}\bar\psi=\dim_k(O/\mathfrak m^{n})+\dim_k(O/\mathfrak m^{m}) $$

exactly when the tangent cones are coprime.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$, the local ring $O$ of $\mathbf A^2$ at the origin, $\mathfrak m=(x,y)$, elements $f,g\in\mathfrak m$ of orders $m,n\ge1$, and their lowest-degree forms $f^*,g^*$.

[F1] $O$ is a two-dimensional regular local ring and $\operatorname{gr}_{\mathfrak m}O\cong k[X,Y]$ is a domain, so initial forms multiply and the order of a product is the sum of the orders [[thm-associated-graded-ring-of-a-regular-local-ring]], [[def-embedding-dimension-and-regular-local-ring]], [[def-local-ring]], [[def-multiplicity-plane-curve-point]].

[F2] $k[x,y]$ is a unique factorisation domain; the classes of the monomials of degree $<n$ form a $k$-basis of $k[x,y]/\mathfrak m^n$, so every class has a unique representative of degree $\le n-1$, and $\dim_k(O/\mathfrak m^n)=\binom{n+1}{2}$ [[lem-truncated-plane-local-length]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-dimension]]. Over the algebraically closed field $k$ a nonzero binary form of positive degree is a product of linear forms, so any common factor of positive degree of two such forms has a linear factor common to both [[def-tangent-lines-plane-curve-point]] (Remarks, binary-form factorisation).

[F3] The product of nonzero homogeneous forms of degrees $a,b$ is nonzero in the polynomial domain and homogeneous of degree $a+b$ [[def-homogeneous-polynomial-and-homogeneous-ideal]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]. The kernel and image of a $k$-linear map between finite-dimensional $k$-vector spaces satisfy $\dim\ker+\dim\operatorname{im}=\dim(\text{domain})$ [[thm-rank-nullity]], [[def-module-homomorphism-kernel-image-and-cokernel]], [[def-vector-space]], [[def-dimension]].

## Proof

1.1 The map is well defined: if $A'\equiv A$ modulo $\mathfrak m^{n}$, then $(A'-A)f\in\mathfrak m^{n}\mathfrak m^{m}\subseteq\mathfrak m^{m+n}$, and if $B'\equiv B$ modulo $\mathfrak m^{m}$, then $(B'-B)g\in\mathfrak m^{m+n}$; so the class of $Af+Bg$ in $O/\mathfrak m^{m+n}$ depends only on the classes of $A$ and $B$. Additivity and $k$-linearity are immediate from the ring operations. [F1, algebra]

1.2 Suppose $f^{*}$ and $g^{*}$ have no common factor, and let $(A,B)$ with $A\in O/\mathfrak m^{n}$, $B\in O/\mathfrak m^{m}$ satisfy $Af+Bg\in\mathfrak m^{m+n}$. Choose representatives with $A=0$ or $r=\operatorname{ord}(A)\le n-1$, and $B=0$ or $s=\operatorname{ord}(B)\le m-1$. If $A=0$ then $Bg\in\mathfrak m^{m+n}$ forces $s+n\ge m+n$, so $s\ge m$ and $B=0$; symmetrically for $B=0$. If both are nonzero, the lowest terms of $Af$ and $Bg$ have orders $r+m\le m+n-1$ and $s+n\le m+n-1$. Since the sum lies in $\mathfrak m^{m+n}$, these two lowest terms must cancel: $r+m=s+n$ and $A^{*}f^{*}=-B^{*}g^{*}$. Coprimality forces $g^{*}\mid A^{*}$ and $f^{*}\mid B^{*}$, so $r\ge n$ and $s\ge m$, contradicting $r\le n-1$, $s\le m-1$. Hence $(A,B)=(0,0)$ and $\bar\psi$ is injective. [F1, F3, algebra]

1.3 Suppose $f^{*},g^{*}$ have a common factor. By [F2] they have a common linear factor $L$, so $f^{*}=Lf'$, $g^{*}=Lg'$ with nonzero forms $f'$ of degree $m-1$ and $g'$ of degree $n-1$. Then $g'f-f'g=g'f_{>m}-f'g_{>n}$, a sum of products each of order at least $m+n$, so its class in $O/\mathfrak m^{m+n}$ is zero; the pair $(g',-f')$ is nonzero in $O/\mathfrak m^{n}\times O/\mathfrak m^{m}$ because $\deg g'=n-1<n$ and $\deg f'=m-1<m$. Thus the kernel is nonzero and $\bar\psi$ is not injective. [F1, F2, F3, algebra]

2.1 By step 1.2 injectivity holds when the initial forms are coprime and fails by step 1.3 when they are not, proving the equivalence and the nonzero-kernel assertion; and by [F3] the displayed dimension formula holds exactly in the injective case, i.e. exactly when the tangent cones are coprime. [step 1.2, step 1.3, F3] ∎ 