---
id: lem-daha-a1-polynomial-operators-satisfy-presentation
kind: lemma
title: "The rank-one DAHA difference-reflection operators satisfy the presentation"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-daha-a1-double-affine-hecke-algebra, def-daha-a1-root-datum-and-parameter-conventions, lem-daha-a1-bernstein-quotients-are-laurent, def-daha-a1-polynomial-representation, lem-hh-free-associative-ring-and-relations-descent]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 4, Theorem 4.3 and its type-A1 calculation, PDF pp. 22–23."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf"
      locator: "§§7.11–7.13, PDF pp. 56–59: the DAHA defining relations and type-A1 specialization."
---

## Statement

Let $\mathcal P=K[z,z^{-1}]$. Define operators on $\mathcal P$ by

$$
(\Pi f)(z)=f(q^{-1}z^{-1}),\quad (\sigma_1f)(z)=f(z^{-1}),\quad (\sigma_0f)(z)=f(q^{-2}z^{-1}),
$$

$$
(\mathsf T_i f)(z)=t(\sigma_i f)(z)+(t-t^{-1})\frac{(\sigma_i f)(z)-f(z)}{u_i(z)-1},\qquad u_1(z)=z^{-2},\quad u_0(z)=q^2z^2.
$$

Then $Z\mapsto M_z$, $Z^{-1}\mapsto M_{z^{-1}}$, $\pi\mapsto\Pi$, and $T_i\mapsto\mathsf T_i$ satisfy every defining relation of [[def-daha-a1-double-affine-hecke-algebra]]. Consequently they define a unital representation of $\mathcal H_{q,t}(A_1)$ on $\mathcal P$.

## Facts & Assumptions

**Given:** $K=\mathbb Q(q,t)$, the rank-one substitutions and Bernstein polynomials, and the DAHA quotient presentation.

[F1] [[def-daha-a1-root-datum-and-parameter-conventions]]: $s_1(z^m)=z^{-m}$, $s_0(z^m)=q^{-2m}z^{-m}$, $\pi(z^m)=q^{-m}z^{-m}$, and $u_1=z^{-2}$, $u_0=q^2z^2$.

[F2] [[def-daha-a1-double-affine-hecke-algebra]]: the required relations are the Laurent inverse, the $\pi$-relations, the quadratic relations, and the Bernstein cross-relations for all $m\in\mathbb Z$.

[F3] [[lem-daha-a1-bernstein-quotients-are-laurent]]: $(z^m-s_i(z^m))/(1-u_i(z))=B_{i,m}(z)\in K[z,z^{-1}]$ for both affine simple roots and every integer $m$.

[F4] [[lem-hh-free-associative-ring-and-relations-descent]]: an assignment of the free generators to an associative $K$-algebra that kills all defining relators descends uniquely to a homomorphism from the presented quotient.

[F5] [[def-daha-a1-polynomial-representation]]: the candidate generator assignment sends $Z$ to $M_z$, $Z^{-1}$ to $M_{z^{-1}}$, $\pi$ to the stated substitution, and $T_i$ to the displayed difference-reflection operators; the relation checks below establish that it is an algebra action.

## Proof

1.1 Multiplication by $z$ and $z^{-1}$ are inverse operators, so the Laurent-inverse relator holds. Direct substitution gives $\Pi^2=1$ and $\Pi M_z\Pi=M_{q^{-1}z^{-1}}$, which is the $\pi Z\pi$ relation. It also gives $\Pi\sigma_0\Pi=\sigma_1$ and $\Pi M_{u_0}\Pi=M_{u_1}$; since both Hecke formulas use the same $t$, conjugating the formula for $\mathsf T_0$ yields $\Pi\mathsf T_0\Pi=\mathsf T_1$. [F1, F2, given, algebra]

1.2 Put $c=t-t^{-1}$, $a_i=(tu_i-t^{-1})/(u_i-1)$, and $b_i=-c/(u_i-1)$. Since $\sigma_i(u_i)=u_i^{-1}$, one has $\mathsf T_i=a_i\sigma_i+b_i$, $\sigma_i(a_i)=(t^{-1}u_i-t)/(u_i-1)$, and $\sigma_i(b_i)=cu_i/(u_i-1)$. Multiplication in the crossed-product operator algebra gives $a_i\sigma_i(b_i)+b_i a_i=ca_i$ and $a_i\sigma_i(a_i)+b_i^2=1+cb_i$, so $\mathsf T_i^2=c\mathsf T_i+1$, equivalent to $(\mathsf T_i-t)(\mathsf T_i+t^{-1})=0$. [F1, F2, algebra]

1.3 For multiplication $M_f$ by a Laurent polynomial, direct expansion of $\mathsf T_iM_f-M_{s_i(f)}\mathsf T_i$ gives multiplication by $c(f-s_i(f))/(1-u_i)$. With $f=z^m$, [F3] identifies this Laurent polynomial with $cB_{i,m}$, which is exactly each Bernstein relation in [F2]. The finite-sum formulas in [F3] also show that $\mathsf T_i$ preserves $\mathcal P$. [F2, F3, algebra]

2.1 The assignments in [F5], checked in steps 1.1, 1.2, and 1.3, satisfy all relators of the free-algebra quotient. By [F4] they descend to a unital $K$-algebra homomorphism $\mathcal H_{q,t}(A_1)\to\operatorname{End}_K(\mathcal P)$. [step 1.1, step 1.2, step 1.3, F2, F4, F5, algebra] ∎
