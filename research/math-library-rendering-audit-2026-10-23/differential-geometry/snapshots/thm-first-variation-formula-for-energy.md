---
id: "thm-first-variation-formula-for-energy"
kind: "theorem"
title: "First variation formula for energy"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-smooth-variation-and-variation-field-of-a-curve","def-energy-of-a-piecewise-smooth-curve","thm-fundamental-theorem-of-riemannian-geometry","def-levi-civita-connection","def-metric-compatible-connection-on-a-riemannian-vector-bundle","def-covariant-derivative-along-a-curve","prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames","thm-differentiation-under-the-integral-sign-on-a-compact-rectangle","thm-newton-leibniz-with-interior-derivative"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 16.3.1 and its proof, pp.123--124
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $\alpha:(-\varepsilon,\varepsilon)\times[a,b]\to M$ be a piecewise smooth variation with common subdivision $a=t_0<\cdots<t_m=b$ of the central curve $\gamma(t)=\alpha(0,t)$, and let $V=\partial_s\alpha(0,\cdot)$ and $T=\dot\gamma$. For the Levi--Civita connection,
$$\left.\frac d{ds}\right|_{s=0}E(\gamma_s)=g(V(b),T(b^-))-g(V(a),T(a^+))-\sum_{j=1}^{m-1}g\bigl(V(t_j),T(t_j^+)-T(t_j^-)\bigr)-\sum_{j=1}^{m}\int_{t_{j-1}}^{t_j}g(V,D_tT)\,dt.$$
For a smooth curve the corner sum is empty and this is
$$\left.\frac d{ds}\right|_{s=0}E(\gamma_s)=g(V,T)\big|_a^b-\int_a^b g(V,D_tT)\,dt.$$

## Facts & Assumptions

**Given:** The variation, common finite subdivision, and notation in the statement, with $a<b$.

[F1] [[def-smooth-variation-and-variation-field-of-a-curve]] gives stripwise smooth longitudinal and transverse derivatives and a continuous piecewise smooth variation field; [[def-energy-of-a-piecewise-smooth-curve]] gives $E(\gamma_s)=\frac12\sum_j\int g(\partial_t\alpha,\partial_t\alpha)\,dt$ on the common subdivision.

[F2] [[thm-fundamental-theorem-of-riemannian-geometry]] supplies the unique Levi--Civita connection. By [[def-levi-civita-connection]] it is metric compatible and torsion free, and [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]] gives the derivative product rule for $g$.

[F3] [[def-covariant-derivative-along-a-curve]] defines $D_t$ stripwise and its one-sided endpoint values. In coordinates, torsion freeness is the lower-index symmetry $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$ by [[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]].

[F4] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] permits a continuous parameter derivative on each compact strip to pass through its Riemann integral; [[thm-newton-leibniz-with-interior-derivative]] integrates the resulting scalar derivative on each closed piece without requiring two-sided endpoint derivatives.

## Proof

**Proof technique:** direct.

1.1 Shrink to a closed parameter interval $[-\delta,\delta]\subset(-\varepsilon,\varepsilon)$. On each compact strip, smoothness and [F4] allow differentiation under the integral. Metric compatibility then gives $$\left.\frac d{ds}\right|_0\frac12\int_{t_{j-1}}^{t_j}g(\partial_t\alpha,\partial_t\alpha)\,dt=\int_{t_{j-1}}^{t_j}g(D_s\partial_t\alpha,T)\,dt.$$ [F1, F2, F4]

1.2 In a coordinate chart along any smooth part of a strip, writing $x^k=x^k\circ\alpha$ gives $$(D_s\partial_t\alpha)^k=\partial_s\partial_t x^k+\Gamma^k{}_{i\ell}\,\partial_sx^i\partial_tx^\ell,$$ while $$(D_t\partial_s\alpha)^k=\partial_t\partial_s x^k+\Gamma^k{}_{\ell i}\,\partial_tx^\ell\partial_sx^i.$$ Equality of mixed partials and the symmetry in [F3] prove $D_s\partial_t\alpha=D_t\partial_s\alpha$; the coordinate identities agree on overlaps, so this holds on every strip. [F2, F3]

2.1 At $s=0$, steps 1.1--1.2 and the metric product rule give $$g(D_tV,T)=\frac d{dt}g(V,T)-g(V,D_tT).$$ Applying [F4] and summing over the finite common subdivision therefore yields $$\left.\frac d{ds}\right|_0E(\gamma_s)=\sum_{j=1}^m\left(g(V(t_j),T(t_j^-))-g(V(t_{j-1}),T(t_{j-1}^+))-\int_{t_{j-1}}^{t_j}g(V,D_tT)\,dt\right).$$ [F1, F2, F3, F4, step 1.1, step 1.2]

3.1 The outer boundary contributions in step 2.1 are $g(V(b),T(b^-))-g(V(a),T(a^+))$. Continuity of $V$ makes the two contributions at an interior $t_j$ equal to $g(V(t_j),T(t_j^-)-T(t_j^+))=-g(V(t_j),T(t_j^+)-T(t_j^-))$. This is the asserted formula. When $m=1$ no corner occurs, giving the smooth formula. [F1, step 2.1]

4.1 If the variation fixes the endpoints then $V(a)=V(b)=0$, but moving endpoints retain both displayed terms. A constant central curve makes $T=D_tT=0$, so every term vanishes. In dimension zero all terms vanish; dimension one uses the same calculation. An empty $M$ admits no such curve. The hypothesis $a<b$ and common finite subdivision exclude an empty interval and infinite summation; one-sided endpoint and corner derivatives are precisely those in [F3]. The Levi--Civita connection is uniquely constructed from the supplied metric by [F2], and every remaining operation is finite or pointwise, so no choice axiom is used. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1] ∎
