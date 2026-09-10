---
id: thm-conditional-jensen-inequality
kind: theorem
title: "Conditional jensen inequality"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-convex-functions-have-countable-supporting-line-representations, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. If $\phi:\mathbb R\to\mathbb R$ is finite convex and both $X$ and $\phi(X)$ are integrable, then $\phi(E[X\mid\mathcal G])\le E[\phi(X)\mid\mathcal G]$ almost surely; the left side is measurable and integrable.

## Facts & Assumptions

**Given:** AC, finite convex $\phi:\mathbb R\to\mathbb R$, and integrable real X such that $\phi(X)$ is integrable.

[F1] Integrable inputs have conditional classes under AC. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Conditional expectation is linear, fixes constants and preserves order. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Finite convex functions are Borel and are suprema of their rational-contact supporting lines. ([[lem-convex-functions-have-countable-supporting-line-representations]])

## Proof

**Proof technique:** direct.

1.1 Set $U=E[X\mid\mathcal G]$ and $V=E[\phi(X)\mid\mathcal G]$. For each supporting line $\ell_q(t)=m_qt+b_q$ of [F3], the variable $m_qX+b_q$ is integrable and bounded above by $\phi(X)$. Linearity and order give $m_qU+b_q\le V$ almost surely. There are countably many $q$, so remove one measurable null union to make all inequalities hold together. [F1, F2, F3]

2.1 On the resulting conull set take the supremum over $q$. By [F3], $\phi(U)=\sup_q(m_qU+b_q)\le V$. Measurability follows either from that countable supremum or composition with the Borel function $\phi$. The fixed supporting line at $q=0$ also gives $m_0U+b_0\le\phi(U)$. Hence $(\phi(U))^+\le V^+$ and $(\phi(U))^-\le(m_0U+b_0)^-$ almost surely. Both upper bounds are integrable, proving integrability as well as the inequality. [step 1.1, F3] ∎

## Source notes

Durrett Theorem 4.1.10 and following remark, printed p.211; van der Vaart Lemma 1.9(vi), printed p.4. The integrability of the left side is checked using one lower supporting line and the conditional upper bound.
