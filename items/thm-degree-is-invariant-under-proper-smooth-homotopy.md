---
id: "thm-degree-is-invariant-under-proper-smooth-homotopy"
kind: "theorem"
title: "Degree is invariant under proper smooth homotopy"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-proper-smooth-map-by-compact-support-cohomology","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","thm-de-rham-homotopy-formula-for-a-smooth-homotopy"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M^n,N^n$ be nonempty connected oriented smooth manifolds without boundary. If $H:M\times[0,1]\to N$ is a proper smooth homotopy with endpoint maps $F_0,F_1$, then
$$\deg(F_0)=\deg(F_1).$$
Properness is required of the combined map $H$; proper endpoint maps alone do not imply it. The proof is choice-free.

## Facts & Assumptions

[F1] [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] characterizes the degree of each proper endpoint map by integration.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] makes the integral of $d\eta$ zero for every compactly supported $(n-1)$-form on a boundaryless $n$-manifold, without a choice axiom.

[F3] [[thm-de-rham-homotopy-formula-for-a-smooth-homotopy]] supplies $F_1^*-F_0^*=dKH^*+KH^*d$.

## Proof

**Given:** The proper combined homotopy $H$ in the statement.

1.1 Each $F_t$ is proper: for compact $K\subset N$, the closed slice $H^{-1}(K)\cap(M\times\{t\})$ is compact and projects homeomorphically onto $F_t^{-1}(K)$. Let $\omega\in\Omega_c^n(N)$. Since $d\omega=0$ in dimension $n$, [F3] gives $$F_1^*\omega-F_0^*\omega=d(KH^*\omega).$$ If $C=H^{-1}(\operatorname{supp}\omega)$, then $C$ is compact. The form $KH^*\omega$ vanishes outside the compact projection $\operatorname{pr}_M(C)$, because its defining time integral has zero integrand there. Thus the displayed primitive has compact support. [F3, given]

2.1 For $n\ge1$, [F2] applied to this compactly supported primitive yields $\int_MF_1^*\omega=\int_MF_0^*\omega$. The defining identity [F1], applied to an integral-one top class, therefore gives $\deg(F_1)=\deg(F_0)$. If $n=0$, connected $M$ and $N$ are points, so $F_0=F_1$ and the equality is immediate. Empty manifolds are excluded, the two endpoints are both checked, and all compactness operations use the one supplied compact set $C$; no family is selected and no AC is used. [F1, F2, step 1.1] ∎
