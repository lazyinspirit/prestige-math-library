---
id: lem-ideal-gas-entropy-conservative-flux-properties
kind: lemma
title: Properties of the explicit entropy-conservative flux
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps:
  - def-ideal-gas-entropy-conservative-pair-flux
  - lem-compressible-ideal-gas-entropy-pair-and-variables
  - lem-compressible-admissible-state-set-open-convex
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Printed pp. 482–483, Section 4.6: entropy-potential jump identity and symmetric entropy-conservative system fluxes."
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–9, printed pp. 5417–5418: entropy variables; Appendix A, equation (66), PDF p. 25, printed p. 5434: entropy-conservative flux identity. The present correction formula is verified locally."
---

## Statement

The flux in [[def-ideal-gas-entropy-conservative-pair-flux]] is well-defined for every pair in $\mathcal G\times\mathcal G$, symmetric in its two states, and consistent in the sense that $F_j^{\mathrm{ec}}(U,U)=F_j(U)$. It satisfies

$$(v(U_R)-v(U_L))^TF_j^{\mathrm{ec}}(U_L,U_R)=\psi_j(U_R)-\psi_j(U_L).$$

The flux is locally Lipschitz on $\mathcal G\times\mathcal G$.

## Facts & Assumptions

**Given:** $d\ge1$ and two states $U_L,U_R\in\mathcal G$.

[F1] [[def-ideal-gas-entropy-conservative-pair-flux]]: with $\bar U=(U_L+U_R)/2$, $\Delta v=v(U_R)-v(U_L)$, and $\Delta\psi_j=\psi_j(U_R)-\psi_j(U_L)$, use $F_j(U_L)$ when $\Delta v=0$ and otherwise use $F_j(\bar U)+(\Delta\psi_j-\Delta v^TF_j(\bar U))\Delta v/\|\Delta v\|^2$.

[F2] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $D_Uv=D_U^2\eta$ is positive definite on $\mathcal G$, $\nabla_U\psi_j=(D_Uv)^TF_j$, and $\psi_j=v^TF_j-q_j$.

[F3] [[lem-compressible-admissible-state-set-open-convex]]: $\mathcal G$ is open and convex.

## Proof


1.1 If $U_L=U_R$, then $\Delta v=0$ and [F1] gives $F_j^{\mathrm{ec}}(U_L,U_R)=F_j(U_L)$. If $U_L\ne U_R$, convexity [F3] keeps the segment $U(t)=U_L+t(U_R-U_L)$ in $\mathcal G$, and $\Delta v^T(U_R-U_L)=\int_0^1 (U_R-U_L)^TD_U^2\eta(U(t))(U_R-U_L)\,dt>0$ by [F2]. Hence $\Delta v\ne0$, so the denominator in [F1] is nonzero; also $\bar U\in\mathcal G$. This proves well-definedness and consistency. [F1, F2, F3, algebra]

1.2 Exchanging $U_L$ and $U_R$ leaves $\bar U$ fixed and changes the signs of both $\Delta v$ and $\Delta\psi_j$. Thus the scalar correction coefficient in [F1] changes sign while its vector factor changes sign, leaving the flux unchanged. The diagonal branch is also symmetric. [F1, algebra]

1.3 Fix a state $X\in\mathcal G$ and write $U_R=X+h/2$, $U_L=X-h/2$ for small $h$. The entropy compatibility in [F2] implies $D_U\psi_j(X)=F_j(X)^TD_Uv(X)$. Symmetric Taylor expansions therefore give $\Delta v=D_Uv(X)h+O(|h|^3)$ and $\Delta\psi_j=F_j(X)^TD_Uv(X)h+O(|h|^3)$, so $N:=\Delta\psi_j-\Delta v^TF_j(X)=O(|h|^3)$. Positive definiteness of $D_Uv(X)$ implies $|\Delta v|\ge c|h|$ in a sufficiently small neighborhood of $h=0$. [F2, algebra]

2.1 When $\Delta v\ne0$, dotting [F1] with $\Delta v$ cancels its denominator and gives $\Delta v^TF_j(\bar U)+\Delta\psi_j-\Delta v^TF_j(\bar U)=\Delta\psi_j$. When $\Delta v=0$, step 1.1 gives $U_L=U_R$, so both sides are zero. [F1, step 1.1, algebra]

3.1 On that neighborhood, the correction $N\Delta v/|\Delta v|^2$ is $O(|h|^2)$ and tends to zero on the diagonal. Differentiating the symmetric Taylor remainders gives $\partial_hN=O(|h|^2)$, $\partial_XN=O(|h|^3)$, $\partial_h\Delta v=O(1)$, and $\partial_X\Delta v=O(|h|)$. The quotient rule then shows that the correction derivatives are bounded and tend to zero as $h\to0$; its diagonal extension is $C^1$. Away from the diagonal the denominator is nonzero by step 1.1 and the formula is smooth. Thus the flux is locally Lipschitz everywhere on $\mathcal G\times\mathcal G$. [F1, F2, step 1.1, step 1.3, algebra] ∎
