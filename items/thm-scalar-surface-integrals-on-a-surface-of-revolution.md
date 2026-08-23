---
id: thm-scalar-surface-integrals-on-a-surface-of-revolution
kind: theorem
title: 'Scalar surface integrals on a surface of revolution'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-surface-area-density-is-cross-product-norm, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-algebra-of-derivatives, thm-jordan-fubini-by-sections]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Exercise 17'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

Let $a<b$, and let $r:[a,b]\to[0,\infty)$ be $C^1$ on a neighbourhood of $[a,b]$, positive on $(a,b)$, and allowed to vanish only at the endpoints. Put
$$\varphi(s,t)=(s,r(s)\cos t,r(s)\sin t),\qquad (s,t)\in[a,b]\times[0,2\pi].$$
For every continuous real-valued function $q$ on $\varphi([a,b]\times[0,2\pi])$, the scalar surface integral is
$$\int_S q\,dS=\int_0^{2\pi}\int_a^b q(\varphi(s,t))r(s)\sqrt{1+r'(s)^2}\,ds\,dt,$$
where $S$ is the patch with its displayed parametrization.

## Facts & Assumptions

**Given:** The nondegenerate interval, radius function, parametrization, and continuous scalar field $q$.

[L1] The sine and cosine derivative formulas and derivative algebra compute the parameter tangents, and $\sin^2t+\cos^2t=1$ ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] A parametrization with nonzero cross product in the parameter interior and no interior parameter point sharing its image with another point of the region is a regular patch; its scalar integral uses the cross-product norm as density, and Jordan-Fubini identifies the rectangle integral with the stated iterated integral ([[def-admissible-regular-parametrized-surface-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-jordan-fubini-by-sections]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\varphi_s=(1,r'\cos t,r'\sin t)$ and $\varphi_t=(0,-r\sin t,r\cos t)$, and direct expansion gives $\|\varphi_s\times\varphi_t\|_2=r(s)\sqrt{1+r'(s)^2}$. [given, L1, algebra]

2.1 In the rectangle interior, $r(s)>0$, so the cross product is nonzero. The first coordinate determines $s$, and the angle determines the point on the positive-radius circle for $0<t<2\pi$; only the angular seam and possible endpoint-axis collapses lie on the boundary. Thus [L2] makes $\varphi$ a regular patch. [given, step 1.1, L2]

3.1 Substitute the density from step 1.1 into the scalar surface-integral definition and use the Jordan-Fubini clause in [L2] to obtain the stated iterated form. [step 1.1, step 2.1, L2]

4.1 Endpoint zeros and the $t=0,2\pi$ seam occur only on the content-zero parameter boundary, so they do not add terms or change the integral. [step 2.1, step 3.1] ∎
