---
id: lem-affine-algebraic-group-faithful-rational-representation
kind: lemma
title: A finite-type affine algebraic group has a faithful rational representation
status: draft
origin: pipeline
landmark: false
deps:
  - thm-affine-scheme-ring-anti-equivalence
  - thm-affine-closed-immersions-quotient-rings
  - thm-first-isomorphism-theorem-rings
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (2022)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "§4(c) Proposition 4.7, Corollary 4.8, §4(d) Theorem 4.9 and Corollary 4.10; printed pp. 86-87"
proof_strategy: coefficient space of the regular comodule
---

## Statement

Let $A$ be a finitely generated commutative Hopf algebra over $\mathbb C$ with
comultiplication $\Delta:A\to A\otimes_{\mathbb C}A$, counit
$\varepsilon:A\to\mathbb C$ and antipode $S:A\to A$, subject to the Hopf
algebra identities
$$(\Delta\otimes\operatorname{id})\Delta=(\operatorname{id}\otimes\Delta)\Delta,\qquad (\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}=(\operatorname{id}\otimes\varepsilon)\Delta,$$
$$m(S\otimes\operatorname{id})\Delta=\varepsilon\cdot 1=m(\operatorname{id}\otimes S)\Delta.$$
where $m$ is the multiplication of $A$. Put $G=\operatorname{Spec}A$, a
finite-type affine group scheme over $\mathbb C$; in the classical language
$G$ is a complex affine algebraic group.

A **finite-dimensional rational representation of $G$** is a finite-dimensional
$\mathbb C$-vector space $V$ together with a $\mathbb C$-linear coaction
$\rho:V\to A\otimes_{\mathbb C}V$ satisfying
$(\Delta\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\rho)\rho$ and
$(\varepsilon\otimes\operatorname{id})\rho=\operatorname{id}_V$; equivalently
it is a homomorphism of group functors $G\to GL(V)$.

Then $G$ admits a finite-dimensional rational representation $\rho$ on some
$V\neq 0$ whose associated comorphism of coordinate rings
$\Phi:\mathcal O(GL(V))\to A$, $\Phi(t_{ij})=a_{ij}$, is surjective; the induced
morphism of affine schemes $G\to GL(V)$ is then a closed immersion in the sense
of [[def-closed-immersion-schemes]], so $G$ is isomorphic to a closed subgroup
scheme of $GL(V)$.

Nothing here uses the Axiom of Choice: only the finite-dimensional linear
algebra of the coefficient spaces $V_a$ below and finitely many selections of
algebra generators are made.

## Facts & Assumptions

**Given:** a finitely generated commutative $\mathbb C$-Hopf algebra $A$ as in the statement, $G=\operatorname{Spec}A$, and the Hopf algebra identities displayed in the statement; all choices made below are finite.

[F1] A finitely generated $\mathbb C$-algebra has a finite generating set: $A=\mathbb C[g_1,\dots,g_m]$ for some finite family of elements. [given]

[F2] The assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ is a natural bijection $\operatorname{Hom}_{\mathrm{CRing}}(A,B)\cong\operatorname{Hom}_{\mathrm{LRS}}(\operatorname{Spec}B,\operatorname{Spec}A)$, so affine schemes are contravariantly equivalent to commutative rings. ([[thm-affine-scheme-ring-anti-equivalence]])

[F3] For every ring $B$, the closed immersions $Z\to\operatorname{Spec}B$ are, up to unique isomorphism over $\operatorname{Spec}B$, exactly the morphisms $\operatorname{Spec}(B/I)\to\operatorname{Spec}B$ induced by quotient maps $B\twoheadrightarrow B/I$. ([[thm-affine-closed-immersions-quotient-rings]])

[F4] If $\Phi:B\to A$ is a surjective homomorphism of commutative rings, then $A\cong B/\ker\Phi$; in particular $G=\operatorname{Spec}A\to\operatorname{Spec}B$ is, under this isomorphism, the morphism induced by the quotient map $B\twoheadrightarrow B/\ker\Phi$. ([[thm-first-isomorphism-theorem-rings]])


## Proof

**Proof technique:** put each element of $A$ inside a finite-dimensional subspace of the regular comodule $(A,\Delta)$, then read the matrix coefficients of a large such subspace off the counit.

1.1 Let $a\in A$ and let $\Delta(a)=\sum_{i=1}^{n}u_i\otimes v_i$ be a finite expression in which $u_1,\dots,u_n$ are linearly independent; such an expression exists because $\Delta(a)$ is a finite sum, and deleting redundant terms (replacing $v_i$ by $v_i+c_iv_n$ when $u_n=\sum_{i<n}c_iu_i$) keeps the sum equal to $\Delta(a)$. Put $V_a=\operatorname{span}(v_1,\dots,v_n)$, a finite-dimensional subspace of $A$ with $a\in V_a$, since $a=(\varepsilon\otimes\operatorname{id})\Delta(a)=\sum_i\varepsilon(u_i)v_i$. [given]

2.1 In the situation of step 1.1 one has $\Delta(V_a)\subseteq A\otimes V_a$: writing $q:A\to A/V_a$ for the quotient map, coassociativity gives $\sum_i\Delta(u_i)\otimes v_i=\sum_iu_i\otimes\Delta(v_i)$, whence  $q$ applied to the third factor yields $\sum_iu_i\otimes(\operatorname{id}\otimes q)\Delta(v_i)=0$, and the linear independence of the $u_i$ forces $(\operatorname{id}\otimes q)\Delta(v_i)=0$ for each $i$, that is $\Delta(v_i)\in A\otimes V_a$. [step 1.1, given]

3.1 Choose a finite generating family $g_1,\dots,g_m$ of $A$ [F1] and, for each $k$, a finite-dimensional subspace $V_{g_k}$ with $g_k\in V_{g_k}$ and $\Delta(V_{g_k})\subseteq A\otimes V_{g_k}$ as in steps 1.1 and 2.1. Set $V=\mathbb C\cdot 1+V_{g_1}+\dots+V_{g_m}$. Then $V$ is finite-dimensional, contains $1$ and every $g_k$, and satisfies $\Delta(V)\subseteq A\otimes V$, because $\Delta(1)=1\otimes 1$ and $\Delta$ is additive. [F1, step 1.1, step 2.1]

4.1 Put $N=V\cap\ker\varepsilon$, so that $V=\mathbb C\cdot 1\oplus N$ because $\varepsilon(1)=1$ makes $\varepsilon|_V:V\to\mathbb C$ surjective. Choose a basis $e_1=1,e_2,\dots,e_n$ of $V$ with $e_i\in N$ for $i\ge 2$. [step 3.1, given]

5.1 Write $\Delta(e_j)=\sum_i b_{ij}\otimes e_i$. These coefficients are unique because $e_i$ is a basis of the second factor. For this left-coaction convention the associated left action evaluates at the inverse: $r_R(g)v=(g\circ S\otimes\operatorname{id})\rho(v)$. Put $a_{ij}=S(b_{ij})$, the matrix coefficients of that action. [step 3.1, step 4.1]

6.1 Applying the two counit identities gives $\varepsilon(b_{ij})=\delta_{ij}$ and $b_{1j}=e_j$. Coassociativity, with all three tensor factors retained, gives $\sum_k\Delta(b_{kj})\otimes e_k=\sum_{i,k}b_{ij}\otimes b_{ki}\otimes e_k$, hence $\Delta(b_{kj})=\sum_i b_{ij}\otimes b_{ki}$. [step 4.1, step 5.1, given]

7.1 The antipode is the comorphism of inversion on $G(R)=\operatorname{Hom}_{\mathbb C\text{-alg}}(A,R)$: the two antipode identities give the inverse under convolution. Thus $(g^{-1})^{-1}=g$ and $(gh)^{-1}=h^{-1}g^{-1}$ imply $S^2=\operatorname{id}$, $\varepsilon S=\varepsilon$ and $\Delta S=\tau(S\otimes S)\Delta$, where $\tau$ switches factors. These are identities of coordinate-ring maps, as can be checked on the universal $A$-point and the two universal $A\otimes A$-points. Applying them to step 6.1 gives $\Delta(a_{kj})=\sum_i a_{ki}\otimes a_{ij}$, $\varepsilon(a_{ij})=\delta_{ij}$ and $a_{1j}=S(e_j)$. [step 6.1, given]

8.1 Applying $m(S\otimes\operatorname{id})$ and $m(\operatorname{id}\otimes S)$ to the identity of step 7.1 and using the Hopf algebra identities gives, for all $k,j$, $\sum_iS(a_{ki})a_{ij}=\varepsilon(a_{kj})=\delta_{kj}$ and $\sum_ia_{ki}S(a_{ij})=\varepsilon(a_{kj})=\delta_{kj}$; hence the matrix $(a_{ij})$ over the commutative ring $A$ is invertible with two-sided inverse $(S(a_{ij}))$, and $\det(a_{ij})$ is a unit of $A$. [step 6.1, step 7.1, given]

9.1 Let $B=\mathcal O(GL(V))=\mathbb C[t_{ij}:1\le i,j\le n][\det(t_{ij})^{-1}]$ with comultiplication $\Delta_B(t_{kj})=\sum_it_{ki}\otimes t_{ij}$ and counit $\varepsilon_B(t_{ij})=\delta_{ij}$. The assignments $t_{ij}\mapsto a_{ij}$ and $\det(t_{ij})^{-1}\mapsto\det(a_{ij})^{-1}$ define a $\mathbb C$-algebra homomorphism $\Phi:B\to A$ by step 8.1, and $\Phi$ is a coalgebra homomorphism by step 7.1 and step 6.1; hence $\Phi$ is a homomorphism of Hopf algebras and $\operatorname{Spec}(\Phi):G\to GL(V)$ is a homomorphism of affine group schemes. [step 6.1, step 7.1, step 8.1]

10.1 The image of $\Phi$ contains $a_{1j}=S(e_j)$ for every $j$ by step 7.1, hence contains $S(V)$ and therefore $S(g_1),\dots,S(g_m)$. Since $S$ is an involutive algebra automorphism, these also generate $A$; since the image of a ring homomorphism is a subring, $\operatorname{im}\Phi=A$, so $\Phi$ is surjective. [step 3.1, step 6.1, step 9.1]

11.1 By step 10.1 and [F4], $A\cong B/\ker\Phi$ and the morphism $\operatorname{Spec}(\Phi)$ is, under this isomorphism, the morphism $\operatorname{Spec}(B/\ker\Phi)\to\operatorname{Spec}B$ induced by the quotient map; by [F3] that morphism is a closed immersion, and by [F2] the morphism of affine schemes attached to $\Phi$ is $\operatorname{Spec}(\Phi)$ up to this isomorphism. Hence $G\to GL(V)$ is a closed immersion. [step 10.1, F2, F3, F4]

12.1 The coaction $\rho=\Delta|_V:V\to A\otimes V$ is a finite-dimensional rational representation in the sense of the statement: its target lies in $A\otimes V$ by step 3.1, coassociativity of $\Delta$ gives $(\Delta\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\rho)\rho$, and $(\varepsilon\otimes\operatorname{id})\rho=\operatorname{id}_V$. Under inverse evaluation for a left coaction, the matrix of $r_R(g)$ is $(g(a_{ij}))$, so the comorphism attached to $\rho$ is $\Phi$, so the representation is faithful (a closed immersion is in particular a monomorphism of group functors) and $V\neq 0$ because $1\in V$. [step 3.1, step 6.1, step 9.1, step 11.1]

13.1 Finally, the argument is choice-free: steps 1.1, 4.1 and 5.1 make finitely many finite-dimensional selections, and the only infinite-dimensional linear algebra used is the identification of the second tensor factor with a finite direct sum via the basis $e_1,\dots,e_n$ of $V$, together with the quotient $A/V_a$ of step 3.1. No basis of $A$ or of any infinite-dimensional space is chosen. [step 1.1, step 3.1, step 4.1, step 5.1] ∎
