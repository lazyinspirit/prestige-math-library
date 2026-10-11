---
id: thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras
kind: theorem
title: "Cyclotomic Hecke central sectors are isomorphic to type-A cyclotomic KLR algebras"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 15
deps: [def-cyclotomic-hecke-central-content-sector-notation,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       lem-hecke-intertwiners-produce-local-klr-generators,
       lem-cyclotomic-klr-block-satisfies-the-hecke-relations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Actual retrieved v4, pp. 1–27 and 31–32 read; local source-interface calculations are reproduced in the strategy. No reading of pp. 28–30 is claimed."
---

## Statement

Over any field $F$ in the charged finite-$e$ conventions, the explicit maps
$$\rho\colon R^\Lambda_\alpha\to H^\Lambda_\alpha,\qquad \sigma\colon H^\Lambda_\alpha\to R^\Lambda_\alpha$$
from [[lem-hecke-intertwiners-produce-local-klr-generators]] and
[[lem-cyclotomic-klr-block-satisfies-the-hecke-relations]] are mutually
inverse, for every content $\alpha$, including zero sectors. Here
$H^\Lambda_\alpha$ is only the central CRT content sector; no primitivity is
assumed. Thus $H^\Lambda_\alpha=0$ if and only if $R^\Lambda_\alpha=0$, and
summing over the finite height-$d$ contents gives
$$H^\Lambda_d\cong\bigoplus_\alpha R^\Lambda_\alpha .$$
On idempotents the maps are the literal identity, and the dot image is
$x_r-i_r$ in the degenerate branch and $1-q_H^{-i_r}X_r$ in the nondegenerate
branch. This result precedes the late dimension, basis and primitive-block
theorems, and no algebraic-closure hypothesis is required.

## Facts & Assumptions

**Given:** The cyclotomic Hecke algebra $H^\Lambda_d$ with its central content
sectors ([def-cyclotomic-hecke-central-content-sector-notation]), the
specialized cyclotomic KLR algebra $R^\Lambda_\alpha$
([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]), and the two
maps constructed by the preceding lemmas
([[lem-hecke-intertwiners-produce-local-klr-generators]],
[[lem-cyclotomic-klr-block-satisfies-the-hecke-relations]]).

[F1] $\sigma$ carries $e(i)$ to $e(i)$ for $i\in I_\alpha$ and kills the
idempotents of other contents; it restricts to a unital homomorphism
$H^\Lambda_\alpha\to R^\Lambda_\alpha$
([[lem-cyclotomic-klr-block-satisfies-the-hecke-relations]]).

[F2] $\rho$ carries $e(i)$ to $e(i)$, $y_r$ to $y_r$ and $\psi_r$ to the
intertwiner quotient $\psi_r$, and is the unique homomorphism with these
values ([[lem-hecke-intertwiners-produce-local-klr-generators]]).

[F3] The content sectors $e_\alpha$ are central orthogonal idempotents summing
to $1$ ([[def-cyclotomic-hecke-central-content-sector-notation]]).

## Proof

**Proof technique:** direct.

**Given:** The maps $\rho,\sigma$ of [F1]–[F2] over the actual field $F$.

1.1 The forward composite on dots and crossings. On each KLR word the map $\sigma$ kills all idempotents outside content $\alpha$; in particular, since the inverse polynomial generators of $R$ have exactly the eigenword projectors $e(\nu)$ (the nilpotent dots shift distinct scalar eigenvalues), $\sigma(e_\alpha)=1_R$ and $\sigma$ annihilates every other central sector. The composite $\sigma\rho$ fixes $y_r$ by [F2], and on a crossing $\sigma\bigl(\Phi_rQ_r(i)^{-1}e(i)\bigr) =\bigl(\psi_rQ_r(i)-P_r(i)+P_r(i)\bigr)Q_r(i)^{-1}e(i)=\psi_re(i),$ using the definitions of the local generating elements in [[lem-hecke-intertwiners-produce-local-klr-generators]]; the degenerate case is the same computation with $\varphi_r,p_r,q_r$ in place of $\Phi_r,P_r,Q_r$. These are literal ordered expressions, not a commutation of $\psi_r$ with its coefficient. Hence $\sigma\rho$ fixes every presentation generator of $R^\Lambda_\alpha$. [F1, F2, algebra]

1.2 The reverse composite on generators. By [F2] the composite $\rho\sigma$ fixes the idempotents and dots; on a word, $\rho\bigl(\psi_rQ_r(i)-P_r(i)\bigr)e(i) =\Phi_rQ_r(i)^{-1}Q_r(i)e(i)-P_r(i)e(i) =T_re(i)$ in the nondegenerate case, and the same with $s_r$ in the degenerate case. Again the evaluation is a finite expression in the nilpotent variables. For the polynomial generators the computations are $\rho\sigma(x_re_\alpha)=\sum_i((x_r-i_r)+i_r)e(i)=x_re_\alpha$ in DG and $\rho\sigma(X_re_\alpha)=\sum_iq^{i_r}(1-(1-q^{-i_r}X_r))e(i)=X_re_\alpha$ in NG; their inverses are fixed because homomorphisms preserve inverses. Conversely $\sigma\rho(y_re(i))=(\sigma(x_r)-i_r)e(i)=y_re(i)$ in DG and $(1-q^{-i_r}\sigma(X_r))e(i)=y_re(i)$ in NG. Along with the projector identities of [F1], these verify every presentation generator of both algebras, including the correct inverse NG substitution. Hence $\rho\sigma$ fixes every presentation generator of $H^\Lambda_\alpha$. [F2, algebra]

2.1 Mutual inverses and the zero-sector statement. Both composites fix all generators of their source algebras, so $\rho\sigma=\operatorname{id}$ and $\sigma\rho=\operatorname{id}$; in particular the maps are algebra isomorphisms, and on idempotents they are the literal identity. If $H^\Lambda_\alpha=0$ then the already constructed $\sigma$ would satisfy $\sigma(e_\alpha)=1_R$ with $e_\alpha=0$, forcing $1_R=0$; conversely the forward identities force $H^\Lambda_\alpha=0$ if $R^\Lambda_\alpha=0$. Zero rings and rank zero are therefore included without any nonzero-block premise. [step 1.1, step 1.2, algebra]

3.1 Conclusion. Summing the isomorphisms over the finite set of height-$d$ contents and using that the $e_\alpha$ are central orthogonal idempotents summing to $1$ by [F3] gives $H^\Lambda_d\cong\bigoplus_\alpha R^\Lambda_\alpha$. Neither exact dimension nor primitive terminology has entered the proof; the full colour-case verifications, affine six-coefficient calculation and equal-colour divided-difference computation reside in the normalization supplier and the two preceding local relation lemmas. No choice principle and no algebraic closure are used. [F3, step 1.1, step 2.1] ∎

## Remarks

This is the sector-level isomorphism $H^\Lambda_\alpha\cong R^\Lambda_\alpha$
for every content, proved before any dimension or primitivity input; it is the
algebraic engine of the blockwise bridge. The zero-sector case is handled by
the identity $\sigma(e_\alpha)=1_R$ rather than by a nonzero-block hypothesis.
