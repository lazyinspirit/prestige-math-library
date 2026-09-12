---
id: "def-smooth-variation-and-variation-field-of-a-curve"
kind: "definition"
title: "Smooth variation and variation field of a curve"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-smooth-map-between-manifolds-with-boundary","def-vector-field-and-section-along-a-smooth-curve"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definitions 16.2.1--16.2.2, pp.121--122
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Let $a<b$ and let $\gamma:[a,b]\to M$ be smooth. A **smooth variation of $\gamma$** is a smooth map
$$\alpha:(-\varepsilon,\varepsilon)\times[a,b]\longrightarrow M$$
for some $\varepsilon>0$ such that $\alpha(0,t)=\gamma(t)$. Its longitudinal curves are $\gamma_s(t)=\alpha(s,t)$, its transverse curves are $\alpha_t(s)=\alpha(s,t)$, and its **variation field** is
$$V(t)=\left.\partial_s\alpha(s,t)\right|_{s=0}\in T_{\gamma(t)}M.$$
A variation has **fixed endpoints** when $\alpha(s,a)=\gamma(a)$ and $\alpha(s,b)=\gamma(b)$ for every $s$; then $V(a)=V(b)=0$. A general, or moving-endpoint, variation imposes no such condition, and its endpoint velocities remain in the first-variation boundary terms.

For a piecewise smooth central curve, a **piecewise smooth variation** is continuous on the whole rectangle, satisfies $\alpha(0,t)=\gamma(t)$ for every $t$, and is smooth, with smooth local extensions at the boundary, on every strip of one common finite subdivision $a=t_0<\cdots<t_m=b$; its variation field is continuous and piecewise smooth along the central curve.

## Facts & Assumptions

**Given:** A smooth or piecewise smooth curve on a nondegenerate compact interval.

[F1] [[def-smooth-map-between-manifolds-with-boundary]] supplies the smooth-up-to-the-closed-parameter-edge convention.

[F2] [[def-vector-field-and-section-along-a-smooth-curve]] defines a vector field along a curve and its piecewise smooth version on a finite subdivision.

## Verification

1.1 For each $t$, $s\mapsto\alpha(s,t)$ is a smooth transverse curve by [F1], so its derivative at zero lies in $T_{\alpha(0,t)}M=T_{\gamma(t)}M$. In local coordinates it has components $\partial_s\alpha^i(0,t)$, which are smooth in $t$; hence [F2] makes $V$ a vector field along $\gamma$. On a common finite subdivision the same coordinate argument applies stripwise, and agreement of the continuous transverse curves at each seam makes the variation field continuous there under the stated definition. [F1, F2, given]

2.1 Differentiating either constant endpoint curve of a fixed-endpoint variation gives $V(a)=V(b)=0$. For a moving endpoint there is no such conclusion, which is why neither endpoint term may be discarded. If $M$ is empty, no given curve exists. In dimension zero every transverse curve is locally constant and $V=0$; dimension one is literal. The central variation $\alpha(s,t)=\gamma(t)$ has zero field and shows the degenerate case. The interval endpoints use the local-extension convention in [F1], and only finite supplied subdivisions occur. No choice axiom is used. [F1, F2, step 1.1] ∎
