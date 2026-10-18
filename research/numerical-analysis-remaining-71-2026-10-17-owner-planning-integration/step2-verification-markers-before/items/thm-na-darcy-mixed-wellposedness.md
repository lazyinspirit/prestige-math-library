---
id: thm-na-darcy-mixed-wellposedness
kind: theorem
title: Continuous mixed Darcy well-posedness with pressure gauge
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-na-neumann-darcy-mixed-problem, lem-na-hdiv-is-hilbert-and-h0div-closed, lem-na-l2-zero-mean-hilbert, lem-na-h0div-div-zero-mean, lem-na-h1-zero-boundary-is-zero-normal-hdiv, thm-na-babuska-brezzi-kernel-coercivity, thm-na-bounded-lipschitz-domain-divergence-right-inverse, lem-na-homogeneous-dirichlet-poincare, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 49: Well-posedness for PDEs in mixed form"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "Complete chapter, §§49.1–49.4: mixed variational formulation and Babuška–Brezzi well-posedness."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 5 Theorem 5.2.2 and Chapter 7 mixed Darcy formulation."
---

## Statement

Assume Countable Choice and the hypotheses in [[def-na-neumann-darcy-mixed-problem]] on a bounded connected Lipschitz domain in dimension two or three. For every $F\in V'$ and $f\in Q$, there is a unique $(u,p)\in V\times Q$ solving
$$a(u,v)+b(v,p)=F(v),\qquad b(u,q)=-\int_Dfq$$
for all $v\in V,q\in Q$. The graph norm on the flux and zero-mean pressure norm make these equations well-posed; the mean-zero pressure convention fixes the Neumann gauge.

## Facts & Assumptions

**Given:** Countable Choice, $D,K,V,Q,a,b,F,f$ as in the no-flow Darcy definition.

[A1] Countable Choice is inherited from the right-inverse and Babuška–Brezzi suppliers. ([[def-countable-choice]])

[F1] $V=H_0(\operatorname{div};D)$ and $Q=L^2_0(D)$ are real Hilbert spaces in their graph and integral norms. ([[lem-na-hdiv-is-hilbert-and-h0div-closed]], [[lem-na-l2-zero-mean-hilbert]])

[F2] Every $v\in V$ has $\int_D\operatorname{div}v=0$, hence $\operatorname{div}v\in Q$. ([[lem-na-h0div-div-zero-mean]])

[F3] The divergence has a bounded right inverse $B_D:Q\to H^1_0(D;\mathbb R^d)$ with $\operatorname{div}B_Dq=q$ and $\|\nabla B_Dq\|_2\le C_{\rm div}\|q\|_2$. ([[thm-na-bounded-lipschitz-domain-divergence-right-inverse]])

[F4] For a bounded domain in a coordinate slab of width $L$, $\|w\|_2\le L\|\nabla w\|_2$ for $w\in H^1_0(D)$. ([[lem-na-homogeneous-dirichlet-poincare]])

[F5] Bounded forms with positive inf-sup and coercivity on the closed constraint kernel give a unique mixed solution under Countable Choice. ([[thm-na-babuska-brezzi-kernel-coercivity]])

[F6] The real $L^2$ Cauchy–Schwarz inequality bounds the data functional and the bilinear form pairings. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F7] Every H1-zero vector field belongs to the zero-normal H(div) space. ([[lem-na-h1-zero-boundary-is-zero-normal-hdiv]])

## Proof

1.1 The form bounds follow from the permeability eigenvalue bounds: $|a(u,v)|\le\kappa_{\min}^{-1}\|u\|_{L^2}\|v\|_{L^2}\le\kappa_{\min}^{-1}\|u\|_V\|v\|_V$, and $|b(v,q)|\le\|\operatorname{div}v\|_2\|q\|_2\le\|v\|_V\|q\|_Q$. Thus $M_a\le\kappa_{\min}^{-1}$ and $M_b\le1$. [given, F1, algebra]

1.2 For $q\in Q$, the right inverse [F3] gives $B_Dq\in H^1_0(D;\mathbb R^d)$, so [F7] places $B_Dq$ in $V$. Its graph norm is finite. [A1, F3, F7, construct]

1.3 Define $B:V\to Q$ by $(Bv,q)_Q=b(v,q)$. Since $b(v,q)=-\int_Dq\operatorname{div}v$ and [F2] places the divergence in $Q$, $Bv=-\operatorname{div}v$. Hence $Z=\ker B=\{v\in V:\operatorname{div}v=0\}$; it is closed because divergence is continuous in the graph norm. For $v\in Z$, the graph norm equals $\|v\|_2$, and $a(v,v)\ge\kappa_{\max}^{-1}\|v\|_2^2=\kappa_{\max}^{-1}\|v\|_V^2$. [F1, F2, given, algebra]

2.1 For nonzero $q\in Q$, choose $v=-B_Dq$. Then $b(v,q)=\|q\|_2^2$ by [F3]. The Poincare bound [F4] gives $\|B_Dq\|_V^2=\|B_Dq\|_2^2+\|q\|_2^2\le(1+L^2C_{\rm div}^2)\|q\|_2^2$. Therefore the inf-sup constant for $b$ on $V\times Q$ is at least $(1+L^2C_{\rm div}^2)^{-1/2}>0$. [F3, F4, step 1.2, algebra]

3.1 If $Q=\{0\}$, [F2] makes $Z=V$, so the Countable Choice Lax–Milgram branch of [F5] applies using coercivity from step 1.3. If $Q\ne\{0\}$, [F3] supplies a nonzero $q$; then $B_Dq\in V$ by step 1.2 and is nonzero since its divergence is $q$. The positive inf-sup from step 2.1 and the nonzero Hilbert spaces [F1] allow the mixed branch of [F5]. In both cases boundedness from step 1.1, closedness and coercivity from step 1.3, and data functionals $F$ and $G(q)=-\int_Dfq$ satisfy [F5]; [F6] makes $G$ bounded. The theorem gives the asserted unique pair, and the pressure mean-zero condition removes the additive constant. [A1, F1, F2, F3, F5, F6, step 1.1, step 1.2, step 1.3, step 2.1, algebra, cases] ∎
