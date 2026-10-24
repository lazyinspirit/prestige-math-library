---
id: ex-hp-gll-mass-top-mode-correction
kind: example
title: The degree-two GLL mass matrix changes only its highest Legendre mode
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-legendre-gauss-lobatto-rule-on-affine-boxes
  - thm-hp-gll-top-mode-and-puniform-energy-equivalence
  - lem-legendre-weighted-derivative-orthogonality-and-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Lloyd N. Trefethen, Short note on the mass matrix for Gauss-Lobatto grid points
      url: https://arxiv.org/pdf/1412.2276
      locator: "§§2–3, pp. 2–6: the highest Legendre coefficient gives the rank-one mass correction."
    - title: Lucas Johannes Petrus Timmermans, Analysis of Spectral Element Methods with Application to Incompressible Flow
      url: https://pure.tue.nl/ws/portalfiles/portal/3500485/412687.pdf
      locator: "§2.2.4, PDF pp. 35–37: GLL mass matrix in the nodal basis."
---

## Example

For $p=2$, the one-dimensional Legendre basis $(P_0,P_1,P_2)$ has exact mass matrix $\operatorname{diag}(2,2/3,2/5)$, whereas the GLL quadrature mass matrix is $\operatorname{diag}(2,2/3,1)$. The only change is the top mode, with correction $3/5$.

## Facts & Assumptions

**Given:** $p=2$, $P_0=1$, $P_1=x$, $P_2=(3x^2-1)/2$, and the GLL definition.

[F1] [[def-legendre-gauss-lobatto-rule-on-affine-boxes]]: the $p=2$ nodes are $-1,0,1$ with weights defined by integrating their cardinal polynomials.

[F2] [[thm-hp-gll-top-mode-and-puniform-energy-equivalence]]: for degree $p$, the GLL squared-norm defect is $2(p+1)/(p(2p+1))$ times the squared top Legendre coefficient.

[F3] [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $\int_{-1}^1P_nP_m=2\delta_{nm}/(2n+1)$.

## Verification

1.1 Since $P_2'(x)=3x$, its interior GLL node is $0$, and the two endpoints complete the nodes. The cardinal polynomials are $\ell_{-1}=x(x-1)/2$, $\ell_0=1-x^2$, and $\ell_1=x(x+1)/2$. Integrating them gives weights $1/3,4/3,1/3$. [F1, given, algebra]

2.1 Legendre orthogonality [F3] gives the exact diagonal entries $\int P_0^2=2$, $\int P_1^2=2/3$, and $\int P_2^2=2/5$. The nodes and weights in step 1.1 give $Q_2(P_0^2)=2$, $Q_2(P_1^2)=2/3$, and $Q_2(P_2^2)=1$. Every cross product has degree at most three, so exactness through degree $2p-1=3$ makes the off-diagonal entries zero. The top correction is $1-2/5=3/5$, which agrees with [F2] at $p=2$ and top coefficient $1$. [F2, F3, step 1.1, given, algebra] ∎
