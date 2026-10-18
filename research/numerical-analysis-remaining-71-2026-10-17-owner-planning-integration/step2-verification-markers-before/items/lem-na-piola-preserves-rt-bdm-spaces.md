---
id: lem-na-piola-preserves-rt-bdm-spaces
kind: lemma
title: Piola maps RT and BDM polynomial families onto the physical cell
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-contravariant-piola-map, def-na-simplicial-mesh-rt-bdm-spaces]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.4: affine contravariant Piola map preserves RT and BDM spaces."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.2, affine transformation formulas for RT and BDM elements."
---

## Statement

Let $F(\widehat x)=A\widehat x+b$ be an orientation-preserving affine bijection between nondegenerate $d$-simplices, with $J=\det A>0$, and use the contravariant Piola map of [[def-na-contravariant-piola-map]]. For every $k\ge0$, it maps $\operatorname{RT}_k(\widehat K)$ bijectively onto $\operatorname{RT}_k(K)$, and for every $k\ge1$ it maps $\operatorname{BDM}_k(\widehat K)$ bijectively onto $\operatorname{BDM}_k(K)$.

## Facts & Assumptions

**Given:** The affine map $F$, its matrix $A$, determinant $J>0$, and the polynomial families in [[def-na-simplicial-mesh-rt-bdm-spaces]].

[F1] The Piola push-forward is $(\mathcal P\widehat v)(x)=J^{-1}A\widehat v(A^{-1}(x-b))$, and its inverse is $\widehat v(\widehat x)=JA^{-1}v(A\widehat x+b)$. ([[def-na-contravariant-piola-map]])

[F2] $\operatorname{RT}_k=\mathbb P_k^d+x\widetilde{\mathbb P}_k$ and $\operatorname{BDM}_k=\mathbb P_k^d$. ([[def-na-simplicial-mesh-rt-bdm-spaces]])

## Proof

1.1 For BDM, if $\widehat v\in\mathbb P_k(\widehat K)^d$, then $\widehat v\circ F^{-1}$ is a vector polynomial of degree at most $k$ in $x$ because $F^{-1}$ is affine. Multiplication by the constant matrix $J^{-1}A$ preserves this degree, so [F1] maps BDM into BDM. Applying the same argument to the inverse affine map proves onto-ness. [F1, F2, algebra]

1.2 Write an RT field as $\widehat v(\widehat x)=\widehat p(\widehat x)+\widehat x\widehat q(\widehat x)$ with $\widehat p\in\mathbb P_k^d$ and homogeneous $\widehat q$ of degree $k$. The push-forward of the first term is in $\mathbb P_k^d$. For the second term, use $\widehat x=A^{-1}(x-b)$: its image is $J^{-1}(x-b)\widehat q(A^{-1}(x-b))$. The scalar polynomial $\widehat q(A^{-1}(x-b))$ has highest homogeneous part $q_k(x):=\widehat q(A^{-1}x)$ of degree $k$, with remainder of degree at most $k-1$. Thus $(x-b)\widehat q(A^{-1}(x-b))=xq_k(x)+p_k(x)$ for some vector polynomial $p_k$ of degree at most $k$: all terms from $x$ times the remainder and from $b$ times the full scalar polynomial have degree at most $k$. Therefore the image lies in $\operatorname{RT}_k(K)$. [F1, F2, algebra]

2.1 The inverse Piola map is the contravariant Piola map for the orientation-preserving affine bijection $F^{-1}$, up to the displayed inverse formula in [F1]. The same polynomial decomposition from step 1.2 applied to $F^{-1}$ maps $\operatorname{RT}_k(K)$ into $\operatorname{RT}_k(\widehat K)$. Hence the forward inclusion is onto. [F1, step 1.2, algebra] ∎