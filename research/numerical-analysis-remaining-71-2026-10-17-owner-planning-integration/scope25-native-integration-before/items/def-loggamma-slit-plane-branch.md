---
id: def-loggamma-slit-plane-branch
kind: definition
title: Log-Gamma branch on the slit plane
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-loggamma-right-halfplane-branch]
justified_by: [lem-loggamma-shift-independent]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §5.8, analytic continuation and Weierstrass product
      url: https://dlmf.nist.gov/5.8
    - title: DLMF, §§5.8 and 5.11
      url: https://dlmf.nist.gov/5.11
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Definition

Let $\Omega=\mathbb C\setminus(-\infty,0]$. For $z\in\Omega$, choose any
integer $m\ge0$ with $\operatorname{Re}(z+m)>0$ and set

$$\ell(z)=\ell_+(z+m)-\sum_{j=0}^{m-1}\operatorname{Log}(z+j),$$

where the sum is empty if $m=0$ and $\ell_+$ and $\operatorname{Log}$ are
defined in [[def-loggamma-right-halfplane-branch]]. The next lemma proves that
this value is independent of the admissible $m$ and that $e^{\ell(z)}=\Gamma(z)$.
This is a continued branch of log-Gamma, not a separate principal
$\operatorname{Log}(\Gamma(z))$.
