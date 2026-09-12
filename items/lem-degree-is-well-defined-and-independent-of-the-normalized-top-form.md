---
id: "lem-degree-is-well-defined-and-independent-of-the-normalized-top-form"
kind: "lemma"
title: "Degree is well defined and independent of the normalized top form"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-proper-smooth-map-by-compact-support-cohomology","thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology","prop-proper-smooth-maps-pull-back-compactly-supported-forms","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes"]
verification:
  audited: 2026-09-13
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

For a proper smooth map $F:M^n\to N^n$ between nonempty connected oriented smooth boundaryless manifolds, the scalar in the degree definition exists uniquely. Every $\nu\in\Omega_c^n(N)$ with $\int_N\nu=1$ satisfies $\deg(F)=\int_MF^*\nu$. This value is independent of the normalized form, and for every compactly supported top form $\omega$ it satisfies $\int_MF^*\omega=\deg(F)\int_N\omega$. All assertions are choice-free.

## Facts & Assumptions

[F1] [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] fixes the scalar as the value at one of the composite of the two integration identifications and compact-support pullback.

[F2] [[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]] supplies a normalized form and a compact primitive for every zero-integral top form on the target.

[F3] [[prop-proper-smooth-maps-pull-back-compactly-supported-forms]] proves compact support of the pulled-back form and of any supplied compact primitive.

[F4] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives pullback linearity and $F^*d=dF^*$.

[F5] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] gives finite-integral linearity and zero integral of a compactly supported derivative.

## Proof

**Given:** The map and manifolds as stated. Choose one compactly supported $\nu$ on $N$ with integral one using [F2].

1.1 Put $d=\int_MF^*\nu$, which is defined because [F3] preserves its compact support. For another compactly supported top form $\omega$, let $a=\int_N\omega$. By [F5], $\omega-a\nu$ has integral zero; by [F2] it equals $d\eta$ with $\eta$ compactly supported in degree $n-1$. Therefore [F4] gives $$F^*\omega-aF^*\nu=d(F^*\eta).$$ By [F3], the primitive on the right is compactly supported, so [F5] and linearity give $\int_MF^*\omega=ad$. This calculation uses compact support on $\eta$, not merely on its derivative. For $n=0$, [F2] instead says $\omega-a\nu=0$ and the same equation follows with the zero negative-degree primitive. [F2, F3, F4, F5, given]

2.1 If $\nu'$ is any other normalized form, substitute $\omega=\nu'$ and $a=1$ in step 1.1 to obtain $\int_MF^*\nu'=d$. If a scalar $d'$ satisfies the asserted identity for every $\omega$, substitution of the originally chosen $\nu$ gives $d'=\int_MF^*\nu=d$. Thus the identity defines a unique scalar independent of normalization. On the class $[\nu]=\operatorname{Int}_N^{-1}(1)$, the composite used in [F1] has exactly the value $d$, so it agrees with the already named degree. This argument derives existence and uniqueness from [F2]–[F5]; [F1] is used only to identify the notation. [F1, F2, F3, F4, F5, step 1.1]

3.1 Zero $\omega$ gives $a=0$ and no division by $a$; a degree-zero map presents no exception. At $n=0$, [F1] computes the two point orientation signs, and step 1.1 treats the zero negative-degree space directly. At $n=1$, $\eta$ is a compactly supported function, and [F3] is precisely what makes its pullback an admissible function primitive for compact Stokes. There are no boundary endpoints because both manifolds are boundaryless. Nonemptiness is needed for the normalized form. Only one such form and one primitive for the input difference were selected, not a family of them; [F2]–[F5] require no AC. [F1, F2, F3, F4, F5, step 1.1, step 2.1] ∎
