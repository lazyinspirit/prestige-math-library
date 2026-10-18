---
id: def-coefficientwise-weighted-backward-error-for-matrix-polynomial
kind: definition
title: "Coefficientwise weighted Frobenius backward error for a polynomial eigenpair"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-matrix-polynomial-and-homogeneous-eigenpairs
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Michael Berhanu, The Polynomial Eigenvalue Problem, Chapter 3, §3.2"
      url: "https://eprints.maths.manchester.ac.uk/582/1/mberhanu05.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §4.2"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Definition

Let $P(\lambda)=\sum_{j=0}^{m}A_j\lambda^j$ be regular of grade $m$, let $[\alpha:\beta]$ be a projective parameter, let $x\in\mathbb C^n\setminus\{0\}$, and choose positive weights $\omega_0,\ldots,\omega_m$. Write $r:=P_h(\alpha,\beta)x$. The **coefficientwise weighted Frobenius backward error** is the infimum
$$\eta_F(P,[\alpha:\beta],x;\omega):=\inf\left\{\left(\sum_{j=0}^{m}\frac{\|\Delta A_j\|_F^2}{\omega_j^2}\right)^{1/2}:\ \sum_{j=0}^{m}(A_j+\Delta A_j)\alpha^j\beta^{m-j}x=0,\quad \Delta A_j\in\mathbb C^{n\times n}\right\}.$$
The perturbations of distinct coefficients are unrestricted and measured in the displayed weighted product norm; no symmetry or other coefficient structure is imposed. Replacing $(\alpha,\beta)$ by $(c\alpha,c\beta)$ for $c\ne0$ multiplies the constraint by $c^m$ and leaves its zero set unchanged, so the infimum depends only on $[\alpha:\beta]$. The infimum is defined for finite and infinite projective parameters. The next theorem proves that it is attained and gives its exact value.
