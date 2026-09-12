---
id: thm-excision-for-singular-cohomology
kind: theorem
title: Excision for singular cohomology
status: published
verification:
  audited: 2026-09-12
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-relative-singular-cochain-complex, thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, def-cover-small-singular-chain-subcomplex, def-singular-cochain-complex-with-coefficients, thm-naturality-of-the-singular-cohomology-pair-sequence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, section 3.1, Excision, printed pages 201–202
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

If $Z\subseteq A\subseteq X$ and $\overline Z\subseteq\operatorname{int}_X A$, inclusion induces an isomorphism
$$H^n(X,A;G)\xrightarrow{\sim}H^n(X\setminus Z,A\setminus Z;G)$$
for every integer $n$ and every abelian coefficient group $G$.

## Facts & Assumptions

[F1] [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]] proves the chain homotopy equivalence using the explicit integral operators in its proof, with least subdivision depths, $D\sigma=D_{m(\sigma)}\sigma$, $R=1-\partial D-D\partial$, and $D_q=\sum_{i<q}TS^i$. In that construction every already-small simplex has $m=0$, and $R$ lands in small chains.

[F2] [[def-cover-small-singular-chain-subcomplex]] defines small chains for families whose interiors cover the space.

[F3] [[def-relative-singular-cochain-complex]] gives quotient integer chains and their dual relative cochains; [[def-singular-cochain-complex-with-coefficients]] fixes the positive dual differential.

[F4] [[thm-naturality-of-the-singular-cohomology-pair-sequence]] identifies the map of relative cohomology induced by a pair inclusion as precomposition on these cochains.

## Proof

**Given:** The subsets and coefficients of the statement. Put $Y=X\setminus Z$, $C=C_*(X;\mathbb Z)$ and $C_A=C_*(A;\mathbb Z)$.

1.1 The interiors of $A$ and $Y$ cover $X$: a point outside $\operatorname{int}A$ lies outside $\overline Z$, hence in the open set $X\setminus\overline Z\subseteq Y$. Use this two-member family in [F2]. Its small subcomplex is $M=C_A+C_*(Y;\mathbb Z)$, since its generators are precisely simplices whose image lies in one of the two members. The simplex subsets intersect exactly in those with image in $A\cap Y=A\setminus Z$, so the finite formal-chain model gives $C_A\cap C_*(Y)=C_*(A\setminus Z)$. [F2, F3]

2.1 Use [F1]'s constructed maps $R:C\to M$ and $D:C_n\to C_{n+1}$. Here every simplex in $A$, and every simplex in $Y$, is already small. For such a simplex the least-depth recursion gives $m=0$, so $D\sigma=D_0\sigma=0$. Its faces are also small; hence $R\sigma=\sigma$ from the explicit formula. Consequently $D|_M=0$, $R|_M=1$, and in particular both maps preserve $C_A$. With inclusion $i:M\to C$ the identities are $Ri=1$ and $1-iR=\partial D+D\partial$. These are the actual operators of the supplier proof, not an inference that an arbitrary homotopy inverse preserves subspaces. [F1, step 1.1]

3.1 Quotienting the identities in step 2.1 by $C_A$ yields maps $\bar i:M/C_A\to C/C_A$ and $\bar R$ in reverse, with $\bar R\bar i=1$ and $1-\bar i\bar R=\bar\partial\bar D+\bar D\bar\partial$. Step 1.1 identifies $M/C_A$ with $C_*(Y)/C_*(A\setminus Z)$: send a $Y$ chain to its class modulo $C_A$. This is onto since every element of $M$ is a sum of an $A$ chain and a $Y$ chain, and its kernel is exactly the displayed intersection. The isomorphism commutes with boundaries, since all maps are induced by chain inclusions and quotients. Thus $\bar i$ is the actual relative-chain inclusion for excision. [F3, step 1.1, step 2.1]

4.1 Precompose with $\bar i$ and $\bar R$ to obtain cochain maps $\bar i^\sharp$ and $\bar R^\sharp$. The identity $\bar R\bar i=1$ gives $\bar i^\sharp\bar R^\sharp=1$. On a degree-$n$ cochain $\varphi$ on $C/C_A$, put $K^n\varphi=\varphi\bar D_{n-1}$, with $K^0=0$. The other identity in step 3.1 gives $$\varphi-\bar R^\sharp\bar i^\sharp\varphi=\delta K^n\varphi+K^{n+1}\delta\varphi.$$ For a cocycle the right side is a coboundary; therefore both induced composites are identities on cohomology. This proves bijectivity, with inverse induced by $\bar R^\sharp$, for arbitrary $G$; no exactness property of the Hom functor has been assumed. [F3, step 3.1]

5.1 By [F4] and step 3.1 the map just proved invertible is precisely the claimed restriction map, proving the theorem. If $Z=\varnothing$ it is the identity; if $A=X$, both relative complexes are zero; if $A=\varnothing$, the hypothesis forces $Z=\varnothing$. Empty spaces, a point, zero coefficients and negative degrees are included. Degree zero in step 4.1 uses $D_{-1}=0$, so the homotopy formula has its correct zero first summand. The least-depth construction in [F1] and all quotient/dual formulas are specified without any choice of bases or representatives; no AC, flatness or coefficient injectivity is used. [F1, F3, F4, step 3.1, step 4.1] ∎
