---
id: fs-the-cotangent-lift-moment-map-has-a-plus-sign-under-the-library-fundamental-field-convention
kind: false-statement
title: The cotangent-lift moment map has a plus sign under the library fundamental-field convention
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, def-tautological-one-form-on-a-cotangent-bundle, def-fundamental-vector-field-of-a-left-action, def-hamiltonian-vector-field-and-hamiltonian-function, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.1, $H=-\iota_{Y^{T^*}}\theta$ and local formula, printed page 86
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.4, cotangent-lift example, printed pages 137--139
proof_strategy: direct
---

## Statement

For the cotangent-lifted action on $T^*Q$ and the library fundamental-field
convention $\xi_M=\frac d{dt}\big|_0\exp(-t\xi)\cdot p$, the moment map
component is $+p(\xi_Q(q))$ rather than $-p(\xi_Q(q))$. **This is false.**

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the manifold $Q=\mathbb R$ with the translation action of $G=\mathbb R$, the lifted action on $T^*Q$ with canonical coordinates $(q,p)$, and the two candidate component functions $p(\xi_Q(q))$ and $-p(\xi_Q(q))$ for $\xi=1$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] The library fundamental field of the lifted action is $\xi_{T^*Q}=\left.\frac d{dt}\right|_0\widehat{a_{\exp(-t\xi)}}$. [[def-fundamental-vector-field-of-a-left-action]].

[F2] For the translation action on $\mathbb R$ the fundamental field of $\xi=1$ is the constant vector field $\xi_Q=-\partial_q$; the lifted action satisfies $\widehat t(q,p)=(q+t,p)$, so its fundamental field is $\xi_{T^*Q}=-\partial_q$ as well. [[def-fundamental-vector-field-of-a-left-action]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] The canonical form is $\omega_{\mathrm{can}}=dq\wedge dp$ in cotangent coordinates, and the component equation of the library convention is $d\mu^\xi=-\iota_{\xi_{T^*Q}}\omega_{\mathrm{can}}$. [[def-tautological-one-form-on-a-cotangent-bundle]], [[def-hamiltonian-vector-field-and-hamiltonian-function]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F4] The tautological moment map of [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]] is $\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))$. [given]



## Refutation

**Proof technique:** direct.

1.1 With the coordinates and conventions of [F1], [F2] and [F3], $\iota_{\xi_{T^*Q}}\omega_{\mathrm{can}}=\iota_{-\partial_q}(dq\wedge dp)=-dp$, so the required component function must satisfy $d\mu^1=dp$. [F2, F3]

2.1 Distinguish the fibre coordinate $p$ from evaluation of the covector $p$ on a tangent vector. Since $\xi_Q(q)=-1$ for $\xi=1$, the tautological candidate is $-p(\xi_Q(q))=+p$, whose differential is $dp$ as required. By contrast, $+p(\xi_Q(q))=-p$ has differential $-dp$. [step 1.1, F2, F3, F4]

3.1 Thus the asserted plus-sign candidate $+p(\xi_Q(q))$ fails the component moment equation, while the library's minus-sign candidate $-p(\xi_Q(q))$ satisfies it. This refutes the false statement. [step 2.1, F3, F4, A1] ∎
