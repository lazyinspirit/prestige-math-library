---
id: def-tangent-lines-plane-curve-point
kind: definition
title: Tangent cone and tangent lines at a point
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-factor-theorem-over-a-commutative-ring, def-algebraically-closed-field, def-field, def-homogeneous-polynomial-and-homogeneous-ideal, def-irreducible-and-prime-elements-in-a-domain, def-multiplicity-plane-curve-point, def-plane-projective-curve, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, def-zariski-tangent-space-point, lem-finite-variable-polynomial-rings-over-fields-are-ufds, thm-polynomial-degree-of-a-product-over-a-domain]
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Definition

Let $C=V(F)$ be a plane projective curve over the algebraically closed field $k$, let $p\in C$, and let $m=m_p(C)\ge1$ [[def-plane-projective-curve]], [[def-multiplicity-plane-curve-point]]. Choose a standard chart containing $p$ and affine coordinates $(u,v)$ centred at $p$, and let $f=f_m+f_{m+1}+\cdots+f_d$ be the centred expansion, with $f_m\ne0$ homogeneous of degree $m$ [[def-multiplicity-plane-curve-point]].

The **tangent cone** of $C$ at $p$ is the cone $V(f_m)$ inside the tangent plane at $p$, where the tangent plane is identified with $k^2$ through $(u,v)$ and the cone is the zero set of the lowest-degree form $f_m$ [[def-zariski-tangent-space-point]], [[def-homogeneous-polynomial-and-homogeneous-ideal]].

A **tangent line** of $C$ at $p$ is a line $L$ through $p$ whose defining linear form $\ell$ divides $f_m$ in $k[u,v]$. Since $k[u,v]$ is a unique factorisation domain in which the irreducible elements are prime, $f_m$ has a factorisation

$$ f_m=c\prod_{L}\ell_L^{\,r_L},\qquad c\in k^\times,$$

into pairwise nonproportional linear forms $\ell_L$, and the **multiplicity** of the tangent line $L$ is the exponent $r_L\ge1$; the factorization is unique up to the order of the factors and the choice of the scalars $\ell_L$. In particular

$$ \sum_L r_L=m_p(C):$$

the tangent lines of $C$ at $p$, counted with multiplicity, number $m_p(C)$. When $m_p(C)=1$ there is exactly one tangent line, of multiplicity one.

## Remarks

- **Existence of the factorization.** Every nonzero binary form $f$ of degree $n\ge1$ over the algebraically closed field $k$ is a product of linear forms: if $u\mid f$ write $f=u\cdot f'$ and use induction on $n$; otherwise $f(1,T)\in k[T]$ is a polynomial of degree exactly $n$, which by the factor theorem and the root property of algebraically closed fields is $c\prod_{j}(T-\lambda_j)$ for $c\in k^\times$ and $\lambda_j\in k$, whence $f(u,v)=c\prod_j(v-\lambda_ju)$ after comparing the two homogeneous polynomials of degree $n$ on the line $u=1$ [[cor-factor-theorem-over-a-commutative-ring]], [[def-polynomial-evaluation-and-root]], [[def-algebraically-closed-field]]. Distinct tangent lines correspond to distinct roots of $f(1,T)$ up to the factor $u^s$ removed, so the linear forms are pairwise nonproportional. Unique factorisation determines the geometric lines and their exponents $r_L$ up to order; $c$ is determined only after the representatives $\ell_L$ are fixed, and replacing $\ell_L$ by $a_L\ell_L$ replaces $c$ by $c\prod_La_L^{-r_L}$ [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-irreducible-and-prime-elements-in-a-domain]], [[def-field]].
- **The count.** Multiplying the factor multiplicities gives $\deg f_m=\sum_L r_L$ because the product of homogeneous forms of degrees $a,b$ is nonzero and homogeneous of degree $a+b$ in the polynomial domain, and $\deg f_m=m$ by definition of the multiplicity, so the tangent lines counted with multiplicity number $m_p(C)$ [[def-homogeneous-polynomial-and-homogeneous-ideal]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]. If $m=1$ then $f_1$ is a nonzero linear form, which has exactly one linear factor up to a unit, so there is exactly one tangent line and its multiplicity is one.
- **Independence of choices.** A change of centred affine coordinates at $p$ acts on $(u,v)$ by an invertible linear substitution, under which a binary form of degree $m$ transforms to another binary form of degree $m$ with the same factorisation transported by the substitution; hence the set of tangent lines through $p$ and their multiplicities is unchanged as a geometric datum in the tangent plane. For a chart transition fixing $p$, write its local coordinates as an invertible linear first-order part plus terms of order at least two; the inverse transition shows that linear part is invertible. Substituting into a local equation of order $m$ changes its lowest-degree form by that linear substitution. Multiplying the local equation by a unit multiplies the initial form only by the nonzero residue of that unit. Thus chart changes transport the tangent factors by the derivative, and rescaling $F$ multiplies them by a nonzero scalar, preserving the geometric lines and exponents. The tangent cone and the tangent line multiplicities are therefore invariants of the pair $(C,p)$.
