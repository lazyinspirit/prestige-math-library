---
id: lem-kernel-matching-for-regular-strip-gluing
kind: lemma
title: "Actual kernel matching for regular strip gluing"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-actual-regular-strip-pregluing-and-newton-correction, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces, lem-transverse-linear-strip-cauchy-riemann-isomorphism]
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert Lipshitz, A cylindrical reformulation of Heegaard Floer homology"
      url: "https://arxiv.org/abs/math/0502404"
      locator: "Appendix A linear gluing; explicit kernel matching proof below"
---

## Statement

Assume Countable Choice and the actual regular broken pair, pregluing $u_R$, uniform right inverse $Q_R$, corrected strip $g_R$ and unweighted $H^3\to H^2$ realizations of the actual pregluing-and-correction lemma. Let $D^-,D^+$ be the component operators, $D_R$ the pregluing derivative, and $\widetilde D_R$ the derivative at the corrected zero, written in the same local-addition domain and target charts. Put $K^\pm=\ker D^\pm$.

For large $R$ there are smooth linear isomorphisms
$$\Gamma_R:K^-\oplus K^+\longrightarrow\ker D_R,\qquad \widetilde\Gamma_R:K^-\oplus K^+\longrightarrow\ker\widetilde D_R,$$
with uniformly bounded norms and inverse norms. If $A_R(k^-,k^+)$ is the sum of the two translated kernel sections multiplied by the long cutoffs from the pregluing construction, then
$$\|\Gamma_R k-A_Rk\|_{H^3}+\|\widetilde\Gamma_R k-A_Rk\|_{H^3}\le Ce^{-cR}\|k\|_{H^3\oplus H^3}$$
for uniform $C,c>0$. In particular the actual corrected regular-strip index is the sum of the two actual component indices, before translation quotient. This proves kernel matching, not a collar or exhaustion statement.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual regular strip operators, their unweighted geometric Sobolev spaces and the constructed pregluing/correction data in the statement.

[F1] [[lem-actual-regular-strip-pregluing-and-newton-correction]] supplies exact matching to the component operators on the supports of the long cutoffs, $(\beta_-^R)^2+(\beta_+^R)^2=1$, derivative bounds $O(R^{-k})$, fixed bounded right inverses $Q^\pm:H^2\to H^3$, a smooth uniformly bounded glued right inverse $Q_R$, and an actual correction with $\|\xi_R\|_{H^3}=O(e^{-\pi R/2})$. Its norms and bundle identifications are fixed with a flat metric and connection in the common generator chart.

[F2] [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] gives finite-dimensional component kernels, their equality in every higher Sobolev realization, and $\|k\|_{H^{q+1}}\le C_q\|k\|_{H^1}$ for $k$ in a component kernel.

[F3] The actual real twisted Fourier basis and spectral gap $\pi/2$ on the exact end model are proved in [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]].



## Proof

1.1 Every component kernel section has uniformly controlled exponentially decaying tails. On an exact generator end its coordinates solve $D_0k=0$ with the two product real planes. Expand them in the real basis of [F3]; coefficients satisfy $a'+\lambda a=0$, $\lambda=\pi n-\pi/2$. The $L^2$ condition kills growing modes on the corresponding end. The surviving absolute eigenvalues are at least $\pi/2$. Their coefficients at a fixed end slice have squared sum bounded by $C\|k\|_{H^1}^2$: the slice $L^2$ norm follows from the fundamental theorem for its square on a unit longitudinal neighborhood and Cauchy-Schwarz. Differentiated Fourier sums, bounded by Cauchy-Schwarz and $\sum\lambda^{2q}e^{-2|\lambda|s}$, then give exponential tails in every fixed derivative and Sobolev norm, with constants linear in $\|k\|_{H^1}$. Higher regularity on the compact core is supplied by [F2]. Thus all estimates are uniform over a norm-bounded set of the finite-dimensional kernels. [F2, F3, construct, algebra]

1.2 We record the elementary kernel stability used for the correction. Let two surjective bounded operators $T,U:X\to Y$ have specified right inverses $Q_T,Q_U$, with their norms and the operator norms uniformly bounded. Put $P_T=I-Q_TT$ and $P_U=I-Q_UU$. On $\ker T$, the map $P_U$ differs from the identity in ambient $X$ norm by at most $\|Q_U\|\|U-T\|$; on $\ker U$, $P_T$ differs similarly. Thus $P_TP_U$ on $\ker T$ and $P_UP_T$ on $\ker U$ differ from their identities by at most $C\|U-T\|$. If this is less than one, both have bounded Neumann inverses. It follows that $P_U:\ker T\to\ker U$ is bijective, with inverse supplied by either composition, and has uniformly bounded inverse. This proof uses actual complementary projections and completeness only, not an appeal to dimension equality. [given, construct, algebra]

2.1 Define $A_R(k^-,k^+)$ by translating, identifying and multiplying these two sections by the outer cutoffs $\beta_-^R,\beta_+^R$ exactly as in [F1]. It is a uniformly bounded map $K^-\oplus K^+\to H^3$. Exact operator matching gives $$D_RA_Rk=(\partial_s\beta_-^R)k^-_{\rm shifted}+(\partial_s\beta_+^R)k^+_{\rm shifted}.$$ On their transition the component end coordinates are at distance at least $3R/4$ along the respective tails. Step 1.1 and the cutoff derivative bounds therefore give $\|D_RA_Rk\|_{H^2}\le Ce^{-cR}\|k\|$ for some fixed $c>0$. Set $P_R=I-Q_RD_R$ and $\Gamma_R=P_RA_R$. Since $D_RQ_R=I$, this takes values in $\ker D_R$ and differs from $A_R$ by at most $Ce^{-cR}\|k\|$ in $H^3$. All these maps depend smoothly on $R$: on the finite-dimensional kernels translations differentiate fixed smooth exponentially decaying functions, and the remaining operators are the smooth families in [F1]. [F1, step 1.1, construct, algebra]

3.1 Define a uniformly bounded map $S_R:H^3(u_R^*TX)\to K^-\oplus K^+$ as follows. Cut a section by $\beta_-^R$, identify and translate it to the left component and extend by zero as in [F1], then apply $\Pi^-=I-Q^-D^-$; do the corresponding right operation with $\Pi^+$. Each $\Pi^\pm$ is a bounded projection onto its component kernel. When applied to $A_Rk$, the main component is the kernel vector multiplied by the squared corresponding cutoff; the lost far tail is exponentially small by step 1.1. The other component contributes only in the long cutoff overlap, where that component kernel is exponentially small. Thus $$\|S_RA_R-I_{K^-\oplus K^+}\|\le Ce^{-cR}.$$ Since $S_R$, $Q_R$ are uniformly bounded and $D_RA_R$ is exponentially small, also $\|S_R\Gamma_R-I\|\le Ce^{-cR}$. For large $R$ this is less than one, so its Neumann inverse is bounded. Hence $\Gamma_R$ is injective and has a uniform lower norm bound. [F1, step 1.1, step 2.1, construct, algebra]

4.1 To prove surjectivity, let $\eta\in\ker D_R$ and cut it into component sections $\eta^\pm$ with one cutoff each, exactly as in step 3.1. Exact matching now gives $D^\pm\eta^\pm=(\partial_s\beta_\pm^R)\eta$ in the matching coordinates. Consequently $$\|\eta^\pm-\Pi^\pm\eta^\pm\|_{H^3}=\|Q^\pm D^\pm\eta^\pm\|_{H^3}\le C R^{-1}\|\eta\|_{H^3}.$$ On translating back and multiplying by the outer cutoffs, their squared sum is exactly one, so $$\|\eta-A_RS_R\eta\|_{H^3}\le C R^{-1}\|\eta\|_{H^3}.$$ The operators $P_R$ have a uniform norm, because $Q_R$ and the coefficients of $D_R$ do. Applying $P_R$ and using $P_R\eta=\eta$ yields $\|\eta-\Gamma_RS_R\eta\|\le C R^{-1}\|\eta\|$. The closed Hilbert space $\ker D_R$ is complete; thus $\Gamma_RS_R$ is invertible there by its actual Neumann series for large $R$. Every vector of that kernel is therefore in the image of $\Gamma_R$. Along with step 3.1 this proves the first isomorphism with uniform inverse bound. No index-additivity theorem was assumed. [F1, step 2.1, step 3.1, construct, algebra]

5.1 Apply step 1.2 with $T=D_R$ and $U=\widetilde D_R$. In the fixed pregluing charts the nonlinear derivative estimate in [F1] gives $\|\widetilde D_R-D_R\|\le C\|\xi_R\|_{H^3}\le Ce^{-\pi R/2}$. The corrected Newton right inverse from [F1] is smooth and uniformly bounded. Hence $\widetilde P_R=I-\widetilde Q_R\widetilde D_R$ restricts to an isomorphism $\ker D_R\to\ker\widetilde D_R$, differing from the identity there by $O(e^{-\pi R/2})$. Define $\widetilde\Gamma_R=\widetilde P_R\Gamma_R$. This is the claimed second smooth isomorphism, has uniform norm and inverse bounds, and its difference from $A_R$ obeys the stated exponential estimate by step 2.1. At the corrected smooth solution the local-addition tangent identification is the actual geometric linearization identification proved in [F1], so this is a result about that operator, not only a chart derivative. [F1, step 2.1, step 4.1, step 1.2, construct, algebra]

6.1 The actual component and corrected operators are surjective Fredholm operators by [F1] and [F2]. Their indices are consequently their kernel dimensions. The isomorphism in step 5.1 gives $$\operatorname{ind}\widetilde D_R=\dim K^-+\dim K^+=\operatorname{ind}D^-+\operatorname{ind}D^+.$$ All indices are before any quotient by longitudinal translation. The construction gives actual kernel matching and a small perturbation comparison; it does not yet identify a nonlinear collar or prove that every solution near the broken pair has the prescribed correction form. [F1, F2, step 5.1, algebra] ∎
