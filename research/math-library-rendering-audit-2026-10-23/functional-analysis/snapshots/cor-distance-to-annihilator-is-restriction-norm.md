---
id: cor-distance-to-annihilator-is-restriction-norm
kind: corollary
title: "Distance to an annihilator is the restriction norm"
status: published
origin: pipeline
deps: [def-axiom-of-choice, "thm-dual-of-a-closed-subspace-is-a-dual-quotient"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 2.58, (2.33), p.85"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Unpack the quotient norm in the restriction isometry."
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

Assume the Axiom of Choice. Let $\mathbb K=\mathbb R$ or $\mathbb C$. If $M$ is a closed linear subspace of a normed $X$ and $f\in X^*$, then $$\operatorname{dist}(f,M^\perp)=\|f|_M\|.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[A1] AC is used through the restriction isometry [F1] in step 2.1.

[F1] From [[thm-dual-of-a-closed-subspace-is-a-dual-quotient]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed and $M\le X$ closed. Restriction $R:X^*\to M^*$ induces a linear isometric bijection $\widetilde R:X^*/M^\perp\longrightarrow M^*,\qquad f+M^\perp\longmapsto f|_M.$ Also $\|R\|\le1$; its norm is $1$ when $M\ne\{0\}$ and $0$ when $M=\{0\}$.

## Proof

1.1 The quotient norm is $\|f+M^\perp\|=\inf_{a\in M^\perp}\|f+a\|=\operatorname{dist}(f,M^\perp)$, since $M^\perp$ is a linear subspace. [given, algebra]

2.1 The restriction isometry identifies this quotient norm with $\|f|_M\|$. For $f=0$ both sides vanish; $M=0$ gives zero and $M=X$ gives $\|f\|$. [F1, step 1.1] ∎
