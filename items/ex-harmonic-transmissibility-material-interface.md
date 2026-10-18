---
id: ex-harmonic-transmissibility-material-interface
kind: example
title: Harmonic transmissibility across a one-dimensional material interface
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [ def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook
        of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 7 §7.2 and Chapter 11 §11.1, printed pp. 22–24 and 78–81:
        discontinuous diffusion and resistance-weighted harmonic
        transmissibility."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations:
        introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§2, equation (2.4) and Remark 2.1, PDF pp. 8–9: harmonic face
        transmissibility."
verification:
  precheck: pass
---

## Example

Let $\Omega=(0,1)$ with cells $K=(0,1/2)$ and $L=(1/2,1)$, chosen centers $x_K=1/4$ and $x_L=3/4$, cell coefficients $\lambda_K=1$ and $\lambda_L=9$, and boundary values $u(0)=0$, $u(1)=1$. The stationary continuous solution has constant flux across the material interface. Compare the TPFA transmissibility using the two half-cell resistances with the transmissibility obtained by substituting the arithmetic coefficient mean.

## Facts & Assumptions

**Given:** The two interval cells, piecewise-constant coefficient, Dirichlet boundary data, and the face transmissibility formula from [[def-tpfa-harmonic-face-scheme]].

[F1] The centers $x_K=1/4$ and $x_L=3/4$ are the choices specified in this example, permitted by [[def-fv-admissible-cell-face-mesh]]; the shared interface is $x=1/2$.

[F2] [[def-tpfa-harmonic-face-scheme]]: the interface transmissibility is $T_F=|F|/(d_{K,F}/\lambda_K+d_{L,F}/\lambda_L)$, with one shared flux $T_F(u_K-u_L)$ outward from $K$.

## Verification

1.1 The exact solution is piecewise affine. The constant $c$ in $\lambda u'=c$ satisfies $1=c(\tfrac12/1+\tfrac12/9)$, hence $c=9/5$. Thus $u(1/2)=9/10$, $u_K=u(1/4)=9/20$, and $u_L=u(3/4)=19/20$. The outward diffusive flux from $K$ is $-\lambda_Ku'_K=-9/5$ and equals the outward flux from $L$ with the opposite orientation. [given, F1, algebra]

2.1 The half-distances are both $1/4$, so [F2] gives $T_F=1/(1/4+1/36)=18/5$. The TPFA flux is $(18/5)(9/20-19/20)=-9/5$, exactly the continuous interface flux. [F1, F2, step 1.1, algebra]

3.1 The arithmetic mean coefficient is $(1+9)/2=5$ and the center distance is $1/2$, which would give transmissibility $5/(1/2)=10$. Its flux is $10(9/20-19/20)=-5$, not $-9/5$. This finite interface calculation verifies that the resistance-weighted harmonic transmissibility is essential for this discontinuous-coefficient example. [F1, step 1.1, algebra] ∎

