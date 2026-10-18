---
id: thm-orthogonal-fv-compressible-viscous-entropy-dissipation
kind: theorem
title: Entropy dissipation of the orthogonal finite-volume viscous scheme
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-orthogonal-fv-compressible-viscous-scheme
  - lem-compressible-viscous-flux-entropy-variable-factorization
  - lem-compressible-ideal-gas-entropy-pair-and-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, January 2019 updated author text, complete manuscript"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.2, printed pp. 37–39: conservative cell-face flux balances and orthogonal diffusion flux conventions."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014, complete preprint"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§§1.1–1.2 and 2.1–2.2, PDF pp. 3–10: finite-volume face balance, shared flux cancellation, and diffusion energy identities. The present matrix entropy identity is proved locally."
---

## Statement

Every differentiable solution of [[def-orthogonal-fv-compressible-viscous-scheme]] with $U_i(t)\in\mathcal G$ satisfies

$$\frac{d}{dt}\sum_{i=1}^N h\eta(U_i) =-\sum_{i=1}^{N-1}\frac{(v_{i+1}-v_i)^TK_{i+1/2}(v_{i+1}-v_i)}{h}\le0, \qquad \frac{d}{dt}\sum_{i=1}^N hU_i=0.$$

The endpoint viscous fluxes vanish by definition, and the face quadratic forms use the state block $K_{i+1/2}=K_{11}((U_i+U_{i+1})/2)$.

## Facts & Assumptions

**Given:** $L>0$, an integer $N\ge1$, $h=L/N$, differentiable cell states $U_i(t)\in\mathcal G$, and the finite-volume viscous ODE in [[def-orthogonal-fv-compressible-viscous-scheme]].

[F1] [[def-orthogonal-fv-compressible-viscous-scheme]]: $\dot U_i=(G_{i+1/2}-G_{i-1/2})/h$, $G_{i+1/2}=K_{i+1/2}(v_{i+1}-v_i)/h$, and $G_{1/2}=G_{N+1/2}=0$.

[F2] [[lem-compressible-viscous-flux-entropy-variable-factorization]]: each one-direction state block $K_{11}(U)$ is symmetric positive semidefinite.

[F3] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $v(U)=\nabla_U\eta(U)$ on $\mathcal G$.

## Proof


1.1 For the total conservative state, substitute [F1] and telescope the finite sum: $\frac{d}{dt}\sum_{i=1}^NhU_i=\sum_{i=1}^N(G_{i+1/2}-G_{i-1/2})=G_{N+1/2}-G_{1/2}=0$. [F1, algebra]

1.2 Since $v_i=\nabla_U\eta(U_i)$ by [F3], the chain rule gives $\frac{d}{dt}\sum_i h\eta(U_i)=\sum_i h v_i^T\dot U_i$. Substituting [F1] cancels the factors $h$ and gives $\sum_i v_i^T(G_{i+1/2}-G_{i-1/2})$. [F1, F3, given, algebra]

2.1 At each interior face $i+1/2$, the two adjacent cells contribute $v_i^TG_{i+1/2}-v_{i+1}^TG_{i+1/2}=-(v_{i+1}-v_i)^TG_{i+1/2}$. The boundary terms vanish by [F1]. Substituting the face flux gives the exact negative sum in the Statement. [F1, step 1.2, algebra]

3.1 Each midpoint state is admissible by the convexity built into [F1], and its matrix block is positive semidefinite by [F2]. Thus every face term $(v_{i+1}-v_i)^TK_{i+1/2}(v_{i+1}-v_i)/h$ is nonnegative because $h>0$. This proves the entropy inequality, including the case $N=1$ when the face sum is empty. [F1, F2, step 2.1, algebra] ∎
