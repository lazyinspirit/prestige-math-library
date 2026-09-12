---
id: "thm-first-variation-formula-for-length"
kind: "theorem"
title: "First variation formula for length"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-smooth-variation-and-variation-field-of-a-curve","thm-first-variation-formula-for-energy","def-riemannian-speed-and-length","thm-fundamental-theorem-of-riemannian-geometry","def-levi-civita-connection","def-metric-compatible-connection-on-a-riemannian-vector-bundle","def-covariant-derivative-along-a-curve","prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames","thm-differentiation-under-the-integral-sign-on-a-compact-rectangle","thm-newton-leibniz-with-interior-derivative","thm-heine-borel-rn","thm-heine-cantor-metric","thm-extreme-value-r"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 16.3.1 and length calculation, pp.123--124
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $\alpha:(-\varepsilon,\varepsilon)\times[a,b]\to M$ be a piecewise smooth variation with common subdivision $a=t_0<\cdots<t_m=b$ and regular central curve $\gamma=\alpha(0,\cdot)$, meaning that each one-sided velocity $T=\dot\gamma$ on each closed smooth piece is nonzero. Put $U=T/|T|_g$ on each piece and $V=\partial_s\alpha(0,\cdot)$. Then
$$\left.\frac d{ds}\right|_{s=0}L(\gamma_s)=g(V(b),U(b^-))-g(V(a),U(a^+))-\sum_{j=1}^{m-1}g\bigl(V(t_j),U(t_j^+)-U(t_j^-)\bigr)-\sum_{j=1}^{m}\int_{t_{j-1}}^{t_j}g(V,D_tU)\,dt.$$
For a smooth regular curve the corner sum is empty. Fixed endpoints remove the two outer boundary terms.

## Facts & Assumptions

**Given:** The variation and regular central curve in the statement, with $a<b$.

[F1] [[def-smooth-variation-and-variation-field-of-a-curve]] supplies stripwise smoothness and a continuous variation field, while [[def-riemannian-speed-and-length]] expresses length as the finite sum of speed integrals.

[F2] [[thm-fundamental-theorem-of-riemannian-geometry]] supplies the unique Levi--Civita connection. Its metric compatibility is the product rule in [[def-levi-civita-connection]] and [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]], and its torsion freeness is the coordinate symmetry in [[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]]. [[def-covariant-derivative-along-a-curve]] fixes the stripwise and one-sided meanings of $D_t$.

[F3] [[thm-heine-borel-rn]], [[thm-heine-cantor-metric]], and [[thm-extreme-value-r]] give compactness, uniform continuity, and extrema on the finitely many parameter strips. [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] passes the speed derivative through each integral, and [[thm-newton-leibniz-with-interior-derivative]] integrates scalar derivatives on the closed pieces.

[F4] [[thm-first-variation-formula-for-energy]] gives the corresponding half-energy formula, including its endpoint and corner signs.

## Proof

**Proof technique:** direct.

1.1 On each closed central piece, $|T|_g$ is continuous and positive, so [F3] gives a positive minimum. Continuity of $g(\partial_t\alpha,\partial_t\alpha)$ on a small compact parameter rectangle and uniform continuity in [F3] then give a common $\delta>0$ such that $\partial_t\alpha(s,t)\ne0$ on every strip whenever $|s|\le\delta$. Thus the speed is smooth there and differentiation under its integral is legitimate. [F1, F3, given]

2.1 Metric compatibility and the derivative of the positive square root give $$\left.\partial_s\right|_0|\partial_t\alpha|_g=\frac{g(D_s\partial_t\alpha,T)}{|T|_g}=g(D_s\partial_t\alpha,U).$$ In local coordinates, equality of mixed partials and the symmetric lower Christoffel indices in [F2] give $D_s\partial_t\alpha=D_t\partial_s\alpha$. Hence [F3] yields $$\left.\frac d{ds}\right|_0L(\gamma_s)=\sum_{j=1}^m\int_{t_{j-1}}^{t_j}g(D_tV,U)\,dt.$$ [F1, F2, F3, step 1.1]

3.1 On each smooth piece, metric compatibility says $$g(D_tV,U)=\frac d{dt}g(V,U)-g(V,D_tU).$$ Newton--Leibniz from [F3] therefore turns step 2.1 into the sum of $g(V(t_j),U(t_j^-))-g(V(t_{j-1}),U(t_{j-1}^+))$ minus the displayed integrals of $g(V,D_tU)$. [F1, F2, F3, step 2.1]

4.1 Continuity of $V$ telescopes the interior boundary values to $-g(V(t_j),U(t_j^+)-U(t_j^-))$, while the two surviving outer terms have the signs stated. If $m=1$ the corner sum is empty; if endpoints are fixed, [F1] gives $V(a)=V(b)=0$. When $|T|_g=1$ on every piece, $U=T$, so this formula agrees term by term with [F4]. [F1, F4, step 3.1]

5.1 Regularity excludes a constant or zero-length central curve on $a<b$ and excludes all such curves in dimension zero; those are genuinely outside the theorem rather than hidden divisions by zero. A zero variation field makes the derivative and all terms zero. Dimension one is unchanged. An empty target admits no given curve. One-sided endpoint and corner velocities are explicit in the statement, and compactness is used only over finitely many supplied strips. The Levi--Civita connection is unique and every compactness argument in [F3] is choice-free, so no choice axiom is used. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1] ∎
