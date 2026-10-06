---
id: lem-relative-middle-cup-products-are-symmetric
kind: lemma
title: "Relative degree-four cup products are symmetric"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-singular-cochain-complex, def-relative-cup-product, def-singular-cup-product-on-cochains, lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal, thm-singular-cohomology-is-graded-commutative]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.2, cup products and graded commutativity, printed pp. 206-209; the relative cup product via the quotient by the sum of the two subcomplexes"
    - title: "Glen E. Bredon, Topology and Geometry, Graduate Texts in Mathematics 139, Chapter VI (cohomology and products)"
      url: "https://link.springer.com/book/10.1007/978-1-4757-6848-0"
      locator: "relative cup products and naturality of the Alexander-Whitney diagonal"
---

## Statement

Let $(X,A)$ be a topological pair and let $R$ be a commutative unital ring. Then
the relative cup product of [[def-relative-cup-product]] restricts to a
symmetric pairing in degree four:
$$H^4(X,A;R)\times H^4(X,A;R)\to H^8(X,A;R),\qquad a\smile b=b\smile a .$$

## Facts & Assumptions

**Given:** A topological pair $(X,A)$ and a commutative unital ring $R$.

[L1] Relative singular cochains $C^k(X,A;R)$ are the $R$-linear functions on $C_k(X,A;R)=C_k(X;R)/C_k(A;R)$, identified with the cochains on $X$ vanishing on simplices in $A$; relative cohomology is their cohomology ([[def-relative-singular-cochain-complex]]).

[L2] For $A,B$ open in $U=A\cup B$ the relative cup product is built from the front/back cochain product, which vanishes on $N=C_*(A;R)+C_*(B;R)$, followed by the inverse of the comparison isomorphism $q^*:H^*(X,U;R)\to H^*(\operatorname{Hom}_R(C_*(X;R)/N,R))$; when $A=B$ this comparison is the identity because $N=C_*(A;R)=C_*(U;R)$ ([[def-relative-cup-product]]).

[L3] The singular cup product on cochains is the front/back formula $(\varphi\smile\psi)(\sigma)=\varphi(\sigma[0,\dots,p])\psi(\sigma[p,\dots,p+q])$, extended $R$-linearly, and it is $R$-bilinear ([[def-singular-cup-product-on-cochains]]).

[L4] There is a natural chain homotopy $H=K\Delta_\#$ with $dH+H\partial=WD_X-D_X$, where $D_X=\operatorname{AW}\Delta_\#$ and $W(x\otimes y)=(-1)^{|x||y|}y\otimes x$; in particular $H$ is natural for continuous maps $X\to Y$ ([[lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal]]).

[L5] In the absolute case the same primitive proves $a\smile b=(-1)^{pq}b\smile a$ for $a\in H^p(X;R)$, $b\in H^q(X;R)$ ([[thm-singular-cohomology-is-graded-commutative]]).

## Proof

**Proof technique:** direct.

1.1 Taking $A=B$ in [L2], the two factors are open in $U=A$ and $N=C_*(A;R)=C_*(U;R)$, so the comparison $q$ is the identity and the relative product $H^4(X,A;R)\times H^4(X,A;R)\to H^8(X,A;R)$ is represented by the front/back product of relative cocycle representatives; this is the relative form of the absolute computation of [L5]. [L1, L2, L5, given]

2.1 For relative cocycles $\varphi\in Z^4(X,A;R)$ and $\psi\in Z^4(X,A;R)$, the cochain $\varphi\smile\psi$ vanishes on $C_*(A;R)$: on a simplex $\sigma$ with image in $A$ the front face $\sigma[0,\dots,4]$ also lies in $A$, so $\varphi(\sigma[0,\dots,4])=0$; hence $\varphi\smile\psi$ is a well-defined relative $8$-cochain, and likewise $\psi\smile\varphi$. [step 1.1, L1, L3]

3.1 Let $i:A\to X$ be the inclusion. By naturality in [L4], $H i_\#=(i_\#\otimes i_\#)H$ on $C_*(A;R)$; therefore for every chain $c$ in $C_*(A;R)$ the chain $H(c)$ lies in $C_*(A;R)\otimes_R C_*(A;R)$. [step 2.1, L4]

4.1 Define the tensor functional $J$ on bidegree $(4,4)$ tensors by $J(x\otimes y)=\varphi(x)\psi(y)$. Then $Jd=0$: in bidegree $(5,4)$ it is $\delta\varphi(x)\psi(y)=0$ and in bidegree $(4,5)$ it is $(-1)^4\varphi(x)\delta\psi(y)=0$. Evaluating the homotopy identity of [L4] gives $JWD_X-JD_X=JH\partial=\delta(JH)$, and $JH$ vanishes on $C_*(A;R)$ by step 3.1 because $\varphi$ and $\psi$ do. [step 3.1, L1, L4]

5.1 The functionals $JD_X$ and $JWD_X$ also vanish on $C_*(A;R)$: for a simplex $\sigma$ with image in $A$, the chains $D_X(\sigma)$ and $WD_X(\sigma)$ are combinations of tensors whose two factors are chains in $A$, so every evaluation factor $\varphi(-)$ or $\psi(-)$ vanishes. Hence $JD_X$, $JWD_X$ and $\delta(JH)$ are relative cochains and the identity of step 4.1 holds in $C^8(X,A;R)$. [step 4.1, L1, L4]

6.1 By [L3], $JD_X$ is the cochain $\varphi\smile\psi$; on a simplex $\sigma$ the functional $JWD_X$ takes the value $(-1)^{4\cdot4}\psi(\sigma[0,\dots,4])\varphi(\sigma[4,\dots,8])=\psi(\sigma[0,\dots,4])\varphi(\sigma[4,\dots,8])$, which is $(\psi\smile\varphi)(\sigma)$ because $R$ is commutative, so $JWD_X=\psi\smile\varphi$. [step 5.1, L3]

7.1 Therefore $\psi\smile\varphi-\varphi\smile\psi=\delta(JH)$ is a coboundary in the relative complex, so the two products agree in $H^8(X,A;R)$; the same computation with one vanishing condition dropped gives the corresponding relative/absolute symmetry. [step 6.1, L1]

8.1 Hence the degree-four relative cup product is symmetric on $H^4(X,A;R)$, as asserted; for $A=\varnothing$ this recovers the absolute statement of [L5], for $A=X$ one source group is zero, and for the zero ring all products are zero. [step 7.1, L1, L5] ∎
