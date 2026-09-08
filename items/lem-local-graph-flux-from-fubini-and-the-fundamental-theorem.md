---
id: lem-local-graph-flux-from-fubini-and-the-fundamental-theorem
kind: lemma
title: The local graph flux calculation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.12, printed pp. 17–18 (PDF pp. 23–24).
    - title: Sung-Jin Oh, Lecture Notes for Math 222A
      url: https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: Oh §3.9, Proposition 3.23 and its complete local graph and partition proof, printed/PDF pp. 47–48.
      original_url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-surface-integral-is-independent-of-c-one-boundary-charts", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-newton-leibniz-with-interior-derivative", "thm-differentiation-under-the-integral-sign", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-algebra-of-derivatives"]
---

## Statement

Assume $\mathrm{AC}_\omega$. In a graph cylinder $Q\times(a,b)$ with $h\in C^1(Q)$ and $a<h<b$, suppose $\Omega$ locally is $z<h(y)$ and $F\in C^1(\overline\Omega;\mathbb R^n)$ is localized with support compactly contained in the cylinder. Then $\int_\Omega\operatorname{div}F=\int_Q(F_n(y,h(y))-\sum_{i<n}F_i(y,h(y))\partial_i h(y))\,dy$. An interior compactly supported C1 vector field has integral divergence zero.

## Facts & Assumptions

**Given:** The one-sided C1 graph cylinder and compactly localized C1 field with derivatives continuous up to the graph, as specified in the statement; or an interior compactly supported C1 field.

[F1] Absolutely integrable functions on sigma-finite products have equal iterated and product integrals. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F2] FTC holds for a continuous function with a Riemann-integrable extension of its interior derivative. ([[thm-newton-leibniz-with-interior-derivative]]).

[F3] One-variable Riemann and Lebesgue integrals agree for bounded Riemann-integrable functions. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F4] Integrable domination of the parameter derivative permits differentiation under a fixed-domain integral. ([[thm-differentiation-under-the-integral-sign]]).

## Proof

1.1 All integrands are bounded on the compact localized support. Extend by zero across the cylinder sides, where F already vanishes, and multiply interior derivatives by the subgraph indicator. These are integrable functions on bounded boxes. F1–F3 and the zero lower trace give $\int_Q\int_a^{h(y)}\partial_zF_n(y,z)\,dz\,dy=\int_QF_n(y,h(y))\,dy$. The endpoint derivative is not needed: F2 uses only the interior derivative and its continuous trace. [given, F1, F2, F3]

1.2 For i<n first replace the upper endpoint by $h(y)-\varepsilon$ for small positive epsilon on a compact base box containing the support projection. Put $A_i^\varepsilon(y)=\int_a^{h(y)-\varepsilon}F_i(y,z)\,dz$. In a neighborhood of each y the varying interval lies strictly inside Omega. Split its increment into a fixed-interval integral and the short endpoint interval. F4 applies to the former because the spatial derivative is uniformly bounded on a compact subcylinder; continuity gives the latter derivative $F_i(y,h(y)-\varepsilon)\partial_i h(y)$. Hence $\partial_iA_i^\varepsilon=\int_a^{h(y)-\varepsilon}\partial_iF_i\,dz+F_i(y,h(y)-\varepsilon)\partial_i h$. [given, F4]

2.1 A_i^epsilon vanishes near the sides of the base box. F1–F3 along its ith coordinate show $\int_Q\partial_iA_i^\varepsilon=0$. In step 1.2 the integral over the omitted strip is bounded by epsilon times the derivative bound, and the endpoint values converge uniformly by continuity of F on the compact closure; Dh is bounded on the base. Letting epsilon decrease to zero gives $\int_Q\int_a^{h(y)}\partial_iF_i\,dz\,dy=-\int_QF_i(y,h(y))\partial_i h\,dy$. Add this for i<n to step 1.1 to obtain the asserted identity. [step 1.1, step 1.2, F1, F2, F3]

3.1 For an interior compactly supported field extend it by zero to a containing box. This extension is C1, since its support has positive distance from the domain complement. Fubini and FTC integrate each coordinate derivative to the difference of its two zero endpoint values. Summing these zero integrals gives zero total divergence. [F1, F2, F3] ∎

## Source notes

Hunter §1.12, printed pp. 17–18; Oh §3.9, Proposition 3.23 graph calculation, printed/PDF pp. 47–48. The endpoint calculation below uses only classical FTC and Fubini.

