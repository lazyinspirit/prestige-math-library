---
id: lem-mackey-support-for-homs-between-finite-principal-series
kind: lemma
title: "Mackey support of Homs between finite principal series"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-principal-series-module-for-finite-gl-n
  - thm-harish-chandra-adjunction-for-finite-gl-n
  - thm-parabolic-mackey-formula-for-finite-gl-n
  - def-conjugate-representation-and-conjugate-character
  - thm-character-inner-product-computes-intertwiner-dimension
  - def-diagonal-torus-characters-and-weyl-action
  - thm-bruhat-decomposition-of-gl-n-over-a-finite-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - the Mackey computation in the proofs of Propositions 2.7-2.8 (the direct sum of Hom_T terms indexed by B\\G/B), printed pp. 10-13"
      url: "https://masaooi.github.io/DL.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 5 (Harish-Chandra restriction and double-coset decompositions), printed pp. 42-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.3 (Mackey formula for a split torus), printed pp. 47-49"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with Borel $B=T\ltimes U$ and diagonal torus $T$, and let
$\chi,\chi'\in\widehat T$ with associated principal series modules $I(\chi)$,
$I(\chi')$ ([[def-principal-series-module-for-finite-gl-n]]). For $w\in S_n$
let ${}^w\chi'$ be the conjugate character
$t\mapsto\chi'(\dot w^{-1}t\dot w)=(w\cdot\chi')(t)$
([[def-conjugate-representation-and-conjugate-character]],
[[def-diagonal-torus-characters-and-weyl-action]]). Then the
Harish-Chandra adjunction for the Borel combined with the parabolic Mackey
formula gives an isomorphism of $\mathbb C$-vector spaces
$$\operatorname{Hom}_G\bigl(I(\chi),I(\chi')\bigr)\;\cong\;\bigoplus_{w\in S_n}\operatorname{Hom}_T\bigl(\chi,{}^w\chi'\bigr),$$
each summand is one-dimensional when $\chi=w\cdot\chi'$ and zero otherwise, and
therefore
$$\dim_{\mathbb C}\operatorname{Hom}_G\bigl(I(\chi),I(\chi')\bigr)=\#\{\,w\in S_n:\chi=w\cdot\chi'\,\}.$$
In particular $\operatorname{Hom}_G(I(\chi),I(\chi'))\ne0$ precisely when
$\chi'$ lies in the $S_n$-orbit of $\chi$. The Mackey decomposition exhibits
$\operatorname{Hom}_G(I(\chi),I(\chi'))$ as a direct sum of one-dimensional
subspaces indexed by the set $\{\,w\in S_n:\chi=w\cdot\chi'\,\}$, so its nonzero
elements in a single summand each span a basis of that summand; the resulting
basis is well defined up to multiplication of each element by a nonzero scalar.
No choice principle is used, all direct sums being finite.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B=T\ltimes U$,
characters $\chi,\chi'\in\widehat T$, the modules $I(\chi)=R_T^G(\chi)$ and
$I(\chi')=R_T^G(\chi')$, and the set $\{\,w\in S_n:\chi=w\cdot\chi'\,\}$.

[F1] Harish-Chandra adjunction: $R_L^G$ is left adjoint to ${}^*\!R_L^G$
([[thm-harish-chandra-adjunction-for-finite-gl-n]]); for $L=T$ and the Borel
$B$ the induction $R_T^G(\chi)$ is the principal series module $I(\chi)$
([[def-principal-series-module-for-finite-gl-n]]).

[F2] Parabolic Mackey formula for $G$ with respect to standard parabolics: for
$P_\alpha=L\ltimes U$, $Q=M\ltimes V$ and a set $\mathcal R$ of representatives
of the $(W_\alpha,W_\beta)$-double cosets, ${}^*\!R_L^G(R_M^GX)\cong\bigoplus_{\rho\in\mathcal R}R_{C_\rho}^L(({}^\rho X)^{D_\rho})$
with $C_\rho=L\cap M_\rho$, $D_\rho=U\cap M_\rho$
([[thm-parabolic-mackey-formula-for-finite-gl-n]]). The $B$-$B$ double cosets
are the cells $BP_\sigma B$, one for each $\sigma\in S_n$, by the Bruhat
decomposition ([[thm-bruhat-decomposition-of-gl-n-over-a-finite-field]]). The
conjugate character is ${}^w\chi'(t)=\chi'(\dot w^{-1}t\dot w)$
([[def-conjugate-representation-and-conjugate-character]]).

[F3] For finite-dimensional complex $G$-modules $V,W$ the dimension of
$\operatorname{Hom}_G(W,V)$ equals the character inner product; applied to the
finite abelian group $T$ and one-dimensional characters, the space
$\operatorname{Hom}_T(\chi,{}^w\chi')$ is one-dimensional when the characters
coincide and zero otherwise
([[thm-character-inner-product-computes-intertwiner-dimension]]).

## Proof

**Proof technique:** direct.

1.1 Harish-Chandra adjunction with $L=T$, $P=B$, $V=\chi$ and $X=I(\chi')=R_T^G(\chi')$ gives a $\mathbb C$-linear isomorphism $\operatorname{Hom}_G(I(\chi),I(\chi'))\cong\operatorname{Hom}_T(\chi,{}^*\!R_T^G(I(\chi')))$. [F1]

1.2 Specialize the Mackey formula of [F2] to $\alpha=\beta=(1^n)$ and $X=\chi'$: here $L=M=T$, and for the representative $\dot w=P_w$ of a double coset one has $M_w=\dot wT\dot w^{-1}=T$ and $V_w=\dot wU\dot w^{-1}$, so $C_w=T$, $A_w=T\cap V_w=\{1\}$ because unipotent elements are conjugate to unipotent ones and the only diagonal unipotent matrix is the identity, and $D_w=U\cap T=\{1\}$; hence $R_{C_w}^{L}$ is the identity functor and $({}^w\chi')^{D_w}={}^w\chi'$. As the double cosets $B\backslash G/B$ are indexed by $S_n$ with representatives $\dot w$ by [F2], this gives an isomorphism of $T$-modules $${}^*\!R_T^G\bigl(R_T^G(\chi')\bigr)\cong\bigoplus_{w\in S_n}{}^w\chi'.$$ [F2, construct]

2.1 Substituting step 1.2 into step 1.1 and distributing the finite direct sum over $\operatorname{Hom}_T(\chi,-)$ gives $\operatorname{Hom}_G(I(\chi),I(\chi'))\cong\bigoplus_{w\in S_n}\operatorname{Hom}_T(\chi,{}^w\chi')$. By [F3] each summand is a $\mathbb C$-vector space of dimension $1$ when $\chi=w\cdot\chi'$, and dimension $0$ otherwise, because a nonzero homomorphism between the one-dimensional characters $\chi$ and ${}^w\chi'$ exists exactly when they are equal; here ${}^w\chi'=w\cdot\chi'$ by [F2]. [F3, step 1.1, step 1.2, algebra]

3.1 Taking dimensions in step 2.1 gives $\dim_{\mathbb C}\operatorname{Hom}_G(I(\chi),I(\chi'))=\#\{w\in S_n:\chi=w\cdot\chi'\}$, and this number is nonzero precisely when $\chi'$ lies in the $S_n$-orbit of $\chi$, since $w\cdot\chi'=\chi$ for some $w$ is exactly the statement that $\chi'$ and $\chi$ lie in one orbit. The same decomposition exhibits $\operatorname{Hom}_G(I(\chi),I(\chi'))$ as the direct sum of the one-dimensional subspaces carried by the indices $w$ with $\chi=w\cdot\chi'$; picking any nonzero element in each of these subspaces gives a basis indexed by that set, and any two such choices differ by nonzero scalars. [step 2.1, algebra]

4.1 Steps 1.1 and 1.2 produce the isomorphism, step 2.1 identifies its summands, and step 3.1 records the dimension count, the nonvanishing criterion and the basis statement; all sums are finite over the finite group $S_n$, and every map used is a given adjunction or Mackey isomorphism, so no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1] ∎ 