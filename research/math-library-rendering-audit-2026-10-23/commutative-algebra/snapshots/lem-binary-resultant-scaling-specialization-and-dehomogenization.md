---
id: lem-binary-resultant-scaling-specialization-and-dehomogenization
kind: lemma
title: "Scaling, specialization, and the affine and infinite charts of a binary resultant"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylvester-resultant-of-binary-forms, thm-leibniz-determinant-is-alternating-multilinear-and-normalized, thm-universal-property-of-a-polynomial-ring, def-projective-space-points, def-algebraically-closed-field, def-homogeneous-polynomial-and-homogeneous-ideal]
justified_by: []
aliases: []
landmark: true
short: "scaling, specialization and charts of the resultant"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 7.27, p. 166"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
verification:
  audited: 2026-09-27
---

## Statement

Let $R$ be a commutative ring, let $d,e\ge1$, and let $F\in R[X,Y]_d$ and
$G\in R[X,Y]_e$ be homogeneous of the nominated degrees $d,e$.

1. (Scaling) For all $u,v\in R$,
   $$\operatorname{Res}_{d,e}(uF,vG)=u^ev^d\operatorname{Res}_{d,e}(F,G).$$
2. (Specialization) For every unital ring homomorphism $\varphi\colon R\to R'$
   to a commutative ring $R'$,
   $$\varphi\bigl(\operatorname{Res}_{d,e}(F,G)\bigr) =\operatorname{Res}_{d,e}\bigl(\varphi(F),\varphi(G)\bigr),$$
   where $\varphi$ acts coefficientwise on $F$ and $G$.
3. (Charts) Let $k$ be a field, let $K$ be an algebraically closed extension
   field of $k$ ([[def-algebraically-closed-field]]), and let $F,G\in k[X,Y]$
   be homogeneous of nominated positive degrees $d,e$. Put $f(T)=F(T,1)$ and
   $g(T)=G(T,1)$. Then the common zeros of $F$ and $G$ in $\mathbf P^1(K)$
   ([[def-projective-space-points]]) are exactly the points $[a:1]$ with
   $a\in K$ and $f(a)=g(a)=0$, together with the point $[1:0]$ when the
   coefficient of $X^d$ in $F$ and the coefficient of $X^e$ in $G$ are both
   zero. The description is unchanged when $F$ or $G$ is the zero form, and it
   does not replace the nominated degrees by the actual degrees of $f$ and $g$.

## Facts & Assumptions

**Given:** A commutative ring $R$, degrees $d,e\ge1$, forms $F\in R[X,Y]_d$ and $G\in R[X,Y]_e$, and the ordered monomial bases of the definition.

[L1] $\operatorname{Res}_{d,e}(F,G)$ is the determinant of the map $(A,B)\mapsto AF+BG$ from $R[X,Y]_{e-1}\oplus R[X,Y]_{d-1}$ to $R[X,Y]_{d+e-1}$ in the ordered bases that list the $e$ $F$-block vectors first ([[def-sylvester-resultant-of-binary-forms]]).

[L2] Over every commutative ring the Leibniz determinant is column-multilinear and alternating ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[L3] For commutative rings $R,S$, every unital ring homomorphism $\varphi\colon R\to S$ and every $s\in S$ there is a unique unital ring homomorphism $R[x]\to S$ extending $\varphi$ with $x\mapsto s$, given by $\sum_i a_ix^i\mapsto\sum_i\varphi(a_i)s^i$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L4] $\mathbf P^1(K)=(K^2\setminus\{0\})/\sim$, where $a\sim b$ exactly when $b=\lambda a$ for some $\lambda\in K^\times$, and classes are written $[a_0:a_1]$ ([[def-projective-space-points]]).

[L5] A homogeneous polynomial $H$ of degree $m$ satisfies $H(\lambda X,\lambda Y)=\lambda^mH(X,Y)$ for every $\lambda$, because each occurring monomial has total degree $m$ ([[def-homogeneous-polynomial-and-homogeneous-ideal]]).

## Proof

**Proof technique:** direct.

1.1 The map $\Phi_{uF,vG}$ sends $(A,B)$ to $uAF+vBG$. In the ordered bases of [L1] its matrix is obtained from the matrix of $\Phi_{F,G}$ by multiplying the $e$ columns of the $F$-block by $u$ and the $d$ columns of the $G$-block by $v$. Column multilinearity [L2] therefore gives $$\det\Phi_{uF,vG}=u^ev^d\det\Phi_{F,G},$$ which is the scaling formula. [L1, L2, algebra]

1.2 Let $\varphi\colon R\to R'$ be a unital ring homomorphism to a commutative ring $R'$. By [L3] applied to the polynomial rings $R[X]$, $R[X,Y]$ and to $R'$, there is a unique ring homomorphism $\widetilde\varphi\colon R[X,Y]\to R'[X,Y]$ extending $\varphi$ with $X\mapsto X$ and $Y\mapsto Y$; it sends every basis monomial $X^{m-i}Y^i$ to the corresponding basis monomial and every entry of the matrix of $\Phi_{F,G}$ to the corresponding entry of the matrix of $\Phi_{\varphi(F),\varphi(G)}$. The Leibniz formula exhibits the determinant as a polynomial with integer coefficients in the matrix entries, so it commutes with $\widetilde\varphi$, and $\varphi(\operatorname{Res}_{d,e}(F,G))=\operatorname{Res}_{d,e}(\varphi(F),\varphi(G))$. [L1, L3, algebra]

1.3 By [L4] every point of $\mathbf P^1(K)$ is a class $[a_0:a_1]$ with $(a_0,a_1)\ne(0,0)$. If $a_1\ne0$ then $[a_0:a_1]=[a:1]$ with $a=a_0/a_1\in K$, and if $a_1=0$ then $a_0\ne0$ and $[a_0:0]=[1:0]$. Thus every point is $[a:1]$ for some $a\in K$ or is $[1:0]$, and the two kinds are disjoint. [L4, algebra]

1.4 Fix $a\in K$. The point $[a:1]$ is a common zero of $F$ and $G$ exactly when $F(a,1)=G(a,1)=0$. Indeed a general representative of the class is $(\lambda a,\lambda)$ with $\lambda\in K^\times$, and by [L5] $$F(\lambda a,\lambda)=\lambda^dF(a,1),\qquad G(\lambda a,\lambda)=\lambda^eG(a,1);$$ as $\lambda^d,\lambda^e\ne0$, both vanish exactly when $F(a,1)=G(a,1)=0$. By definition $F(a,1)=f(a)$ and $G(a,1)=g(a)$. [L4, L5, algebra]

1.5 Evaluating the defining linear combinations at $(X,Y)=(1,0)$ shows that $F(1,0)$ is the coefficient of $X^d$ in $F$ (all remaining monomials have a factor $Y$) and $G(1,0)$ is the coefficient of $X^e$ in $G$. Hence the point $[1:0]$ is a common zero of $F$ and $G$ exactly when both of these coefficients vanish. [L5, algebra]

2.1 Steps 1.3, 1.4 and 1.5 describe every point of $\mathbf P^1(K)$ and decide when it is a common zero, so the common zeros are exactly the affine zeros $[a:1]$ with $f(a)=g(a)=0$ together with the possible point $[1:0]$ detected by the two vanishing top coefficients. Nothing in the argument replaces $d$ or $e$ by the actual degrees of $f$ or $g$: the zero forms have all coefficients zero, so they contribute the point $[1:0]$ as claimed, and a form whose top coefficient vanishes contributes no condition beyond the vanishing already recorded. [step 1.3, step 1.4, step 1.5, given] ∎
