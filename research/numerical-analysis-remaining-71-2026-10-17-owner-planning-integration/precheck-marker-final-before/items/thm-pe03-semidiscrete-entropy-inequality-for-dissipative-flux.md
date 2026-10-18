---
id: thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux
kind: theorem
title: Semidiscrete cell entropy inequality for Tadmor-dissipative fluxes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-pe03-system-entropy-pair-and-potential, def-pe03-tadmor-entropy-conservative-flux, def-pe03-entropy-stable-dissipative-flux]
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.1–4.3, entropy variables, jump condition, and semidiscrete entropy balance, PDF pp. 11–13; complete chapter read"
    - title: "R. Bürger, P. E. Méndez, and C. Parés, On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models"
      url: "https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf"
      locator: "§2.2, semidiscrete entropy balance from the jump identity, PDF pp. 6–8; complete preprint read"
---

## Statement

Let $(\eta,q)$ be a convex entropy pair on an open set $\mathcal A$, with
entropy variable $v$ and potential $\psi$ as in
[[def-pe03-system-entropy-pair-and-potential]]. On a periodic mesh of $N\ge2$
cells of width $\Delta x>0$, let differentiable states $U_i(t)\in\mathcal A$
satisfy
$$\dot U_i=-\frac{F^{es}_{i+1/2}-F^{es}_{i-1/2}}{\Delta x},$$
where every face flux is the entropy-stable dissipative flux of
[[def-pe03-entropy-stable-dissipative-flux]]. Define
$$\widehat q_{i+1/2}:=\left(\frac{v_i+v_{i+1}}2\right)^T F^{es}_{i+1/2}-\frac{\psi_i+\psi_{i+1}}2.$$
Then each cell satisfies
$$\frac{d}{dt}\eta(U_i)+\frac{\widehat q_{i+1/2}-\widehat q_{i-1/2}}{\Delta x}\le0.$$
Summing over the periodic mesh gives nonincrease of total discrete entropy.
This is a semidiscrete result; it asserts no entropy inequality for a chosen
fully discrete time integrator.

## Facts & Assumptions

**Given:** A periodic semidiscrete finite-volume system, states in $\mathcal A$, a convex entropy pair, and the dissipative flux definition. Prove the local cell entropy inequality.

[F1] [[def-pe03-system-entropy-pair-and-potential]]: $v=\nabla\eta$ and $\psi=v^TF-q$.

[F2] [[def-pe03-tadmor-entropy-conservative-flux]]: $[v]^TF^{ec}=[\psi]$ at every face.

[F3] [[def-pe03-entropy-stable-dissipative-flux]]: $F^{es}=F^{ec}-\tfrac12D[v]$ with $D=D^T$ and $z^TDz\ge0$.

## Proof

1.1 At a face, [F2]–[F3] give $[v]^TF^{es}=[\psi]-\tfrac12[v]^TD[v]\le[\psi]$, since $[v]^TD[v]\ge0$. This uses only positive semidefiniteness, including the case where the jump or dissipation vanishes. [given, F2, F3, algebra]

2.1 Write $[v]_{i+1/2}=v_{i+1}-v_i$ and $[\psi]_{i+1/2}=\psi_{i+1}-\psi_i$, and use the arithmetic means in the definition of $\widehat q$. Then $-v_i^TF^{es}_{i+1/2}+\widehat q_{i+1/2}=\tfrac12[v]_{i+1/2}^TF^{es}_{i+1/2}-\tfrac12(\psi_i+\psi_{i+1})$ and $v_i^TF^{es}_{i-1/2}-\widehat q_{i-1/2}=\tfrac12[v]_{i-1/2}^TF^{es}_{i-1/2}+\tfrac12(\psi_{i-1}+\psi_i)$. At equal states the same formula gives $\widehat q=q$ by [F1] and the consistency in [F2], so this is a consistent numerical entropy flux. The right and left interface terms now combine with the entropy-jump defects from step 1.1. [given, F1, F2, F3, step 1.1, algebra]

3.1 By the chain rule and the semidiscrete update, $\Delta x\dot\eta(U_i)=-v_i^TF^{es}_{i+1/2}+v_i^TF^{es}_{i-1/2}$. Add $\widehat q_{i+1/2}-\widehat q_{i-1/2}$ and use step 2.1. The potential terms combine as $-\tfrac12(\psi_i+\psi_{i+1})+\tfrac12(\psi_{i-1}+\psi_i)=-\tfrac12([\psi]_{i+1/2}+[\psi]_{i-1/2})$. Hence $\Delta x$ times the cell residual equals $\tfrac12([v]_{i+1/2}^TF^{es}_{i+1/2}-[\psi]_{i+1/2})+\tfrac12([v]_{i-1/2}^TF^{es}_{i-1/2}-[\psi]_{i-1/2})$, which is nonpositive by step 1.1. This proves the local cell inequality; summing it on the periodic mesh cancels all numerical entropy fluxes. No time discretization was used. [given, F1, step 1.1, step 2.1, algebra] ∎

