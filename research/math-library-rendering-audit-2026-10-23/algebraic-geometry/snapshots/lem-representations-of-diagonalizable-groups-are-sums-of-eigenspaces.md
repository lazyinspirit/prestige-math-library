---
id: lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces
kind: lemma
title: Representations of diagonalizable groups split into character eigenspaces
dependency_level: 4
deps:
  - def-axiom-of-choice
  - cor-every-vector-space-has-a-basis
  - def-diagonalizable-group-and-character-module
  - def-linear-subspace
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - lem-representations-of-affine-group-schemes-are-comodules
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem 12.12 and its proof, printed pp. 234-235
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 2.2, Proposition 45, pp. 20-21
---
## Statement

Let $k$ be a field and let $G$ be a diagonalizable group over $k$, so that $O(G)=k[M]$ for an abelian group $M$ with group-like basis $(e_m)_{m\in M}$ ([[def-diagonalizable-group-and-character-module]]). Then every rational representation $(V,\rho)$ of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]) decomposes as
$$V=\bigoplus_{\chi\in M}V_\chi,\qquad V_\chi=\{v\in V:\rho(v)=v\otimes e_\chi\},$$
a direct sum over the characters $\chi\in X(G)=M$ of $G$ of the corresponding eigenspaces. The eigenspaces may have arbitrary multiplicities. The decomposition is choice-free and is inherited by subrepresentations, quotients and the middle terms of extensions. In finite dimension, choosing finite bases of the nonzero eigenspaces expresses a representation as a finite direct sum of one-dimensional character representations; in particular $G$ is linearly reductive. Assuming the Axiom of Choice ([[def-axiom-of-choice]]), the same character-line decomposition holds in arbitrary dimension by [[cor-every-vector-space-has-a-basis]]; only this last assertion uses arbitrary choice.

## Facts & Assumptions
**Given:** A field $k$, a diagonalizable group $G$ with $O(G)=k[M]$, and a rational representation $(V,\rho)$ of $G$.

[F1] For any abelian group $M$, $A=k[M]$ has basis $(e_m)_{m\in M}$, $\Delta(e_m)=e_m\otimes e_m$, $\varepsilon(e_m)=1$, and $S(e_m)=e_{-m}$. For arbitrary $M$, use the same rational-representation convention as in the finite-type case: a natural family of group homomorphisms $r_R:G(R)\to\operatorname{Aut}_R(V\otimes_kR)$. A coaction is a linear map $\rho:V\to V\otimes_kA$ satisfying the counit and coassociativity identities. The correspondence in this generality is proved in step 1.1 below, rather than assumed from the finite-type suppliers. ([[def-diagonalizable-group-and-character-module]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F2] For each $m$, the explicit coordinate functional $c_m:A\to k$ sends $e_n$ to $\delta_{mn}$. Applying $\operatorname{id}_V\otimes c_m$ extracts the coefficient of $e_m$ uniquely, without choosing a basis of $V$. The sets $V_m=\{v:\rho(v)=v\otimes e_m\}$ are linear subspaces. ([[def-linear-subspace]])

[F3] The cited representation/comodule correspondence is stated for finite-type affine group schemes. The coefficient and universal-point argument below establishes the needed extension to $D_k(M)$ with no finiteness restriction on $M$. In a coaction, the counit identity gives $v=\sum_mv_m$ whenever $\rho(v)=\sum_mv_m\otimes e_m$. ([[lem-representations-of-affine-group-schemes-are-comodules]])

[F4] Assuming AC, every vector space has a basis ([[def-axiom-of-choice]], [[cor-every-vector-space-has-a-basis]]). Finite-dimensional spaces have finite bases without arbitrary choice.

## Proof

**Given:** A field $k$, a diagonalizable group $G$ with character group $M$, and a comodule $(V,\rho)$.

1.1 The correspondence holds for arbitrary $M$. Given a natural action $r$, evaluate it at the universal point $u=\operatorname{id}_A\in G(A)$ and put $\rho(v)=r_A(u)(v\otimes1)$. Naturality along $g:A\to R$ gives $r_R(g)(v\otimes1)=(\operatorname{id}_V\otimes g)\rho(v)$. At $g=\varepsilon$ the identity action yields the counit identity. In $G(A\otimes A)$ the two points $p_1(a)=a\otimes1$ and $p_2(a)=1\otimes a$ have product $\Delta$; evaluating $r(p_1)r(p_2)=r(\Delta)$ at $v\otimes1$ yields $(\rho\otimes\operatorname{id})\rho(v)=(\operatorname{id}\otimes\Delta)\rho(v)$. Conversely this coassociativity identity makes the displayed formula for $r_R(g)$ multiplicative; the counit gives the identity and $g^{-1}$ gives its inverse. These constructions are inverse by evaluation at $u$, and a subspace is stable under all $r_R(g)$ exactly when it is a subcomodule, by the same evaluation. No finite-type hypothesis or basis of $V$ is used. Finally, the group-like elements of $A$ are exactly $e_m$: if $a=\sum_m a_me_m$ is group-like, comparing coefficients in $\Delta(a)=a\otimes a$ gives $a_m^2=a_m$ and $a_ma_n=0$ for $m\ne n$, while $\varepsilon(a)=1$ gives $\sum_m a_m=1$; over a field exactly one coefficient is $1$. Thus $X(G)=M$. [F1, F2, F3, algebra]

1.2 For $v\in V$ write $\rho(v)=\sum_{m\in M}v_m\otimes e_m$ with $v_m\in V$, a finite sum by [F1]. Applying $(\operatorname{id}\otimes\Delta)$ and $(\rho\otimes\operatorname{id})$ to this expression and using coassociativity gives $(\rho\otimes\operatorname{id})\rho(v)=\sum_m\rho(v_m)\otimes e_m$ and $(\operatorname{id}\otimes\Delta)\rho(v)=\sum_mv_m\otimes e_m\otimes e_m$, so comparing the coefficients of the basis elements $e_n\otimes e_m$ of $k[M]\otimes k[M]$ in these two expressions gives $\rho(v_m)=v_m\otimes e_m$ for every $m$: indeed the coefficient of $e_n\otimes e_m$ with $n\ne m$ vanishes on the right and equals the $e_n$-component of $\rho(v_m)$ on the left, and the remaining coefficient identifies the $e_m$-component of $\rho(v_m)$ with $v_m$. [F1, F3, algebra]

2.1 The counit identity of [F3] applied to the expansion of [step 1.2] gives $v=\sum_mv_m$ with each $v_m\in V_m=\{w:\rho(w)=w\otimes e_m\}$. Hence $V=\sum_{m\in M}V_m$. If $\sum_m w_m=0$ is a finite relation with $w_m\in V_m$, applying $\rho$ gives $\sum_m w_m\otimes e_m=0$; extraction by $\operatorname{id}_V\otimes c_n$ gives $w_n=0$ for every $n$. Thus the sum is direct. [F1, F2, step 1.2]

3.1 If $W\subseteq V$ is a subrepresentation, coefficient extraction in $\rho(W)\subseteq W\otimes k[M]$ gives $W=\bigoplus_m(W\cap V_m)$. An equivariant linear map preserves every weight, so a quotient has its corresponding weight decomposition; the middle term of any extension has the decomposition of step 2.1. No eigenspace is asserted to have dimension one. If $V$ is finite-dimensional, there are finitely many nonzero eigenspaces and choosing their finite bases expresses $V$ as a finite direct sum of character lines. Thus finite-dimensional representations are semisimple and $G$ is linearly reductive. [F1, F3, step 2.1]

4.1 For an arbitrary-dimensional $V$, assume AC and choose a basis of each nonzero $V_m$ simultaneously by [F4]. Their union is a basis of $V$ by the direct sum decomposition, and its one-dimensional spans are character representations. This proves the additional arbitrary-dimensional character-line assertion, with AC spent only in these basis choices. [F4, step 2.1, step 3.1, choose] ∎

