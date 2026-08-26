---
id: cor-residue-contour-integral-formula
kind: corollary
title: "The residue is the normalized small-circle integral"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-residue-isolated-singularity, thm-laurent-coefficient-formula-and-uniqueness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Statement

Let $f$ have an isolated singularity at $a$, and suppose $f$ is holomorphic on
$0<|z-a|<R$. For every $r$ with $0<r<R$,

$$\operatorname{Res}(f,a)=\frac{1}{2\pi i}\int_{|\zeta-a|=r}f(\zeta)\,d\zeta.$$

## Facts & Assumptions

**Given:** An isolated singularity of $f$ at $a$ and a circle $|\zeta-a|=r$ inside the punctured neighbourhood.

[L1] The residue is the coefficient $c_{-1}$ in the Laurent expansion ([[def-residue-isolated-singularity]]).

[L2] Laurent coefficients are given by the contour integrals $(2\pi i)^{-1}\int f(\zeta)(\zeta-a)^{-n-1}\,d\zeta$ ([[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L2] with $n=-1$ gives the coefficient formula $$c_{-1}=\frac{1}{2\pi i}\int_{|\zeta-a|=r}f(\zeta)(\zeta-a)^0\,d\zeta=\frac{1}{2\pi i}\int_{|\zeta-a|=r}f(\zeta)\,d\zeta.$$ [L2, algebra]

2.1 By [L1], the coefficient $c_{-1}$ is exactly $\operatorname{Res}(f,a)$. [step 1.1, L1] ∎
