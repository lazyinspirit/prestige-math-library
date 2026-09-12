---
id: "thm-integration-descends-to-compactly-supported-top-de-rham-cohomology"
kind: "theorem"
title: "Integration descends to compactly supported top de Rham cohomology"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-compactly-supported-de-rham-cochain-complex-and-cohomology","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold","cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero","lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form","def-countable-choice"]
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

On an oriented smooth boundaryless $n$-manifold $M$, the finite-localization integral induces a linear map
$$\operatorname{Int}_M:H_c^n(M)\longrightarrow\mathbb R,\qquad [\omega]\longmapsto\mathcal I_M(\omega).$$
This is choice-free and includes $n=0$, where the integral is the signed sum over the finite support. Whenever the earlier global partition integral is formed under $\mathrm{AC}_\omega$, it equals $\mathcal I_M$, so this map is also the map induced by that integral. In the ensuing boundaryless compact-support statements, $\int_M$ denotes this finite-localization integral. The primitive in any exactness assertion is required to have compact support.

## Facts & Assumptions

[F1] [[def-compactly-supported-de-rham-cochain-complex-and-cohomology]] gives the compact-support quotient, zero negative degrees and zero derivative out of top degree.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] gives the independent linear finite-localization integral, signed chart agreement, and zero integral of the derivative of a compactly supported primitive, without choice.

[F3] [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]] defines the earlier global partition integral under countable choice.

[F4] [[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]] gives its zero-exact-integral conclusion under the same assumption, with $n\ge1$ and compact support on the primitive.

[F5] [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]] reduces a supplied global locally finite partition to finitely many nonzero products near a compact support.

[F6] [[def-countable-choice]] is the assumption required only for the comparison with [F3] and [F4].

## Proof

**Given:** $M$ as stated and a compactly supported top form $\omega$. The main construction assumes no choice axiom.

1.1 Every top form is closed by [F1]. If $n\ge1$ and another representative is $\omega+d\eta$ with $\eta\in\Omega_c^{n-1}(M)$, linearity and compact Stokes in [F2] give $$\mathcal I_M(\omega+d\eta)-\mathcal I_M(\omega)=\mathcal I_M(d\eta)=0.$$ Thus the displayed rule is independent of representatives in exactly the quotient [F1]. For $n=0$, the denominator is zero, so no negative-degree Stokes statement or primitive is needed. [F1, F2, given]

2.1 For classes $[\omega],[\zeta]$ and scalars $a,b$, their quotient linear combination is represented by $a\omega+b\zeta$ by [F1]. By [F2], its value is $a\mathcal I_M(\omega)+b\mathcal I_M(\zeta)$. Hence $\operatorname{Int}_M$ is linear. It is defined by the common value of all representatives, not by choosing a representative for each class. [F1, F2, step 1.1]

3.1 To compare with the earlier definition, now additionally assume [F6] and let $(\rho_i,\phi_i)$ be a global partition and charts allowed by [F3]. By [F5], only finitely many $\rho_i\omega$ are nonzero, and $\omega=\sum_i\rho_i\omega$ as a finite equality. Each summand has compact support contained in its chart. The chart-agreement and linearity clauses of [F2] therefore give $$\mathcal I_M(\omega)=\sum_i\mathcal I_M(\rho_i\omega)=\sum_i I_{\phi_i}(\rho_i\omega)=\int_M\omega\quad\text{in the sense of [F3].}$$ For $n=0$ both definitions are the same finite signed point sum. Thus the comparison does not rely on a choice-free existence claim for a global partition. In this conditional setting, step 1.1 also agrees with the vanishing supplied by [F4]. [F2, F3, F4, F5, F6, step 1.1, step 2.1]

4.1 Empty manifolds and zero forms give value zero. At $n=0$ the map acts on compactly supported functions with no quotient by negative forms; at $n=1$ the exactness comparison uses compactly supported function primitives and their zero endpoint differences. At every top degree the support requirement is on $\eta$, not just $d\eta$. The main quotient and linearity arguments use only [F1] and [F2] and are choice-free; countable choice is confined to the expressly conditional comparison in step 3.1. No assertion of injectivity or surjectivity has yet been made. [F1, F2, F4, F6, step 1.1, step 2.1, step 3.1] ∎
