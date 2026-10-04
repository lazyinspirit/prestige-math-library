---
id: lem-nonaffine-affine-group-faithful-representation
kind: lemma
title: "Affine finite-type group schemes have faithful finite-dimensional representations"
status: published
origin: pipeline
deps: [def-abelian-variety-over-a-field]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Propositions 4.7/4.8 and Theorem 4.9, pp.86–87"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Let $G$ be an affine finite-type group scheme over an arbitrary field $k$. Every right comodule over its coordinate Hopf algebra $A=k[G]$ is the filtered union of its finite-dimensional subcomodules. The right regular representation of $G$ on $A$ contains a finite-dimensional subrepresentation $V$ such that $G\to\operatorname{GL}(V)$ is a closed immersion. These assertions allow nonreduced $G$.

## Facts & Assumptions

[F1] A group scheme has multiplication, identity and inversion morphisms; for affine $G$ their comorphisms are the coproduct $\Delta:A\to A\otimes_kA$, counit $\epsilon:A\to k$ and antipode. The group identities become the Hopf identities. ([[def-abelian-variety-over-a-field]])

## Proof

**Given:** $G$, $A$, and a right $A$-comodule $\rho:M\to M\otimes_kA$, meaning $(\rho\otimes1)\rho=(1\otimes\Delta)\rho$ and $(1\otimes\epsilon)\rho=1$.

1.1 Fix $v\in M$ and write $\rho(v)=\sum_{i=1}^r v_i\otimes a_i$ with the $a_i$ linearly independent. Let $C\subset A$ be the finite-dimensional space containing the $a_i$ and every second-factor coefficient of the finitely many $\Delta(a_i)$. Choose linear functionals $\lambda_j:C\to k$ with $\lambda_j(a_i)=\delta_{ij}$ by extending this finite independent list to a basis of $C$. Apply $1\otimes1\otimes\lambda_j$ to coassociativity. It gives $\rho(v_j)=\sum_i v_i\otimes(1\otimes\lambda_j)\Delta(a_i)$. Thus $W=\operatorname{span}_k\{v_1,\ldots,v_r\}$ is a finite-dimensional subcomodule. The counit gives $v=\sum_i\epsilon(a_i)v_i\in W$. Finite sums of subcomodules are subcomodules, proving the filtered-union assertion. Both sides lie in $M\otimes A\otimes C$, so all these contractions are defined on finite coefficient spaces and require only finite choices. [given, F1, construct, algebra]

2.1 Apply step 1.1 to the comodule $(A,\Delta)$ and to a finite algebra-generating list for $A$. Taking the sum gives a finite-dimensional subcomodule $V$ containing that list. In a basis $e_1,\ldots,e_n$ of $V$, write $\Delta(e_j)=\sum_i e_i\otimes a_{ij}$. Coassociativity and counit give $\Delta(a_{ij})=\sum_l a_{il}\otimes a_{lj}$ and $\epsilon(a_{ij})=\delta_{ij}$. The antipode gives an inverse for the matrix $(a_{ij})$. Hence these entries define a homomorphism $G\to\operatorname{GL}(V)$: for any $k$-algebra $R$ and point $g:A\to R$, its matrix is $(g(a_{ij}))$. This is the right regular action $(g f)(x)=f(xg)$, formulated on all algebras. [F1, step 1.1, construct, algebra]

3.1 The image of $k[\operatorname{GL}(V)]\to A$ contains every $a_{ij}$. Applying $\epsilon\otimes1$ to $\Delta(e_j)$ gives $e_j=\sum_i\epsilon(e_i)a_{ij}$, so that image contains $V$, hence the algebra generators of $A$. The ring map is onto and therefore the group morphism is a closed immersion. In particular it is injective on $R$-points for every $R$, including nonreduced algebras. [F1, step 2.1, algebra] ∎
