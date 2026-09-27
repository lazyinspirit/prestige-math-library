---
id: cor-dense-range-iff-transpose-is-injective
kind: corollary
title: "Dense range is equivalent to injectivity of the transpose"
status: published
origin: pipeline
deps: [def-axiom-of-choice, "lem-elementary-kernel-range-annihilator-identities"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Theorem 4.8(ii), p.174"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Use the third elementary identity and the zero annihilator criterion."
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear map $T:X\to Y$ between normed spaces, $$\overline{\operatorname{ran}T}^{\|\cdot\|}=Y\quad\Longleftrightarrow\quad\ker T^*=\{0\}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[A1] AC is used through the primal annihilator-closure clause of [F1] in step 2.1.

[F1] From [[lem-elementary-kernel-range-annihilator-identities]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $(\operatorname{ran}T)^\perp=\ker T^*,\qquad {}^\perp(\operatorname{ran}T^*)=\ker T,\qquad \overline{\operatorname{ran}T}^{\|\cdot\|}={}^\perp(\ker T^*).$ The closure in the last identity is in $Y$.

## Proof

1.1 If the range is dense and $g\in\ker T^*$, then $g$ vanishes on the range by the elementary identity. Continuity makes it vanish on $Y$, so $g=0$. [F1]

2.1 If $\ker T^*=\{0\}$, the third elementary identity gives $\overline{\operatorname{ran}T}={}^\perp\{0\}=Y$. This also handles $Y=\{0\}$ and the zero operator whenever the criterion holds. [F1] ∎
