---
id: lem-commuting-laurent-and-plus-maps-give-bottom-degree-inequalities
kind: lemma
title: "Commuting Laurent and plus maps compare their bottom degrees"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-graded-laurent-images-with-proper-kernel-are-plus-towers
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section9.2, correction-term cobordism comparison; the exact graded-module argument and all its hypotheses are supplied here."
---

## Statement

Put $R=\mathbb F_2[U]$, with $\deg U=-2$. For $i=1,2$ let $\Lambda_i=\mathbb F_2[U,U^{-1}]$ with $\deg_i U^n=a_i-2n$, $a_i\in\mathbb Q$, and let $\pi_i:\Lambda_i\to M_i$ be degree-zero $R$-linear maps to graded $R$-modules with nonzero proper kernels. Let $d_i$ be the least degree of a nonzero homogeneous element of $\operatorname{im}\pi_i$.

Suppose $F:\Lambda_1\to\Lambda_2$ is an $R$-linear isomorphism homogeneous of degree $\Delta\in\mathbb Q$, and $G:M_1\to M_2$ is an $R$-linear map of that same degree such that $G\pi_1=\pi_2F$. Then
$$d_2\ge d_1+\Delta.$$
If there are also maps in the reverse direction of degree $-\Delta$ satisfying the same hypotheses and commuting with $\pi_1,\pi_2$, then $d_2=d_1+\Delta$; those reverse maps need not be inverses of $F,G$. In particular, commuting comparisons in both directions with degree zero force equal bottom degrees. These are choice-free algebraic statements; no Floer map, Laurent-tower hypothesis or geometric degree formula is supplied by this lemma.

## Statement references

[[lem-graded-laurent-images-with-proper-kernel-are-plus-towers|The actual proper-kernel tower computation]]

## Facts & Assumptions

**Given:** The graded modules, actual maps, kernel assumptions and commuting square in the statement. The reverse maps are assumed only for its second assertion.

[F1] [[lem-graded-laurent-images-with-proper-kernel-are-plus-towers]] proves that $\ker\pi_i=U^{N_i}R$ for a unique integer $N_i$, and that its image has bottom degree $d_i=a_i-2N_i+2$. Both assertions hold without a choice axiom; the image is locally $U$-torsion and infinitely $U$-divisible, so the bottom is selected by nonzero homogeneous elements rather than by $U$-nontorsion.

## Proof

1.1 Since $F$ is homogeneous, $F(1)$ lies in the one-dimensional homogeneous component of $\Lambda_2$ of degree $a_1+\Delta$. It is nonzero by injectivity, so $F(1)=U^k$ for one integer $k$, and $a_2-2k=a_1+\Delta$. $R$-linearity gives $F(U^n)=U^{n+k}$ for $n\ge0$. For negative $n$, apply the same equation after multiplying by the invertible power $U^{-n}$ in both Laurent modules; injectivity of multiplication by that power gives the same formula. Thus the actual isomorphism is this monomial shift for every integer exponent. [given, construct, algebra]

2.1 If $x\in\ker\pi_1$, the commuting equation gives $\pi_2F(x)=G\pi_1(x)=0$. Therefore $F(U^{N_1}R)\subseteq U^{N_2}R$ by [F1]. Step 1.1 makes this the containment $U^{N_1+k}R\subseteq U^{N_2}R$, equivalent to $N_1+k\ge N_2$. Substitute the bottom formulas of [F1] and the degree equation of step 1.1: $$d_2-d_1=(a_2-a_1)-2(N_2-N_1)=\Delta+2(N_1+k-N_2)\ge\Delta.$$ No nonvanishing of the plus map on its bottom was assumed; the kernel containment is the actual implication needed. [F1, step 1.1, construct, algebra]

3.1 Apply step 2.1 to a reverse commuting pair of degree $-\Delta$ when it is supplied. It yields $d_1\ge d_2-\Delta$, which together with the forward inequality gives equality. The proof does not use a composition identity between the forward and reverse maps. For degree zero it says $d_1=d_2$. Negative, zero and positive shifts, vanishing values of a plus map on some inputs, and all integer kernel thresholds are included by the same exponent comparison. The zero and whole kernels were explicitly excluded; no bottom is asserted in those cases. Every operation was finite graded algebra, with no choice or analytic assertion. [given, F1, step 2.1, algebra] ∎
