---
id: cor-distance-to-subspace-by-annihilating-functionals
kind: corollary
title: "Distance to a closed subspace via unit annihilators"
status: published
origin: pipeline
deps: [def-axiom-of-choice, "thm-dual-of-a-quotient-is-the-annihilator", "thm-canonical-bidual-map-is-an-isometry"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 2.69, p.88"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Apply bidual norm equality in X/M and identify its dual by Q. The unit-ball supremum covers M=X without an empty supremum convention."
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

Assume the Axiom of Choice. Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a closed linear subspace $M$ of a normed $X$ and $x\in X$, $$\operatorname{dist}(x,M)=\sup\{|f(x)|:f\in M^\perp,\ \|f\|\le1\}.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[A1] AC is used through bidual norm equality [F2] in step 1.1.

[F1] From [[thm-dual-of-a-quotient-is-the-annihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed and $M\le X$ closed. With quotient norm $\|x+M\|=\inf_{m\in M}\|x+m\|$ and $q(x)=x+M$, the map $Q:(X/M)^*\longrightarrow M^\perp,\qquad Qh=h\circ q$ is a linear isometric bijection.

[F2] From [[thm-canonical-bidual-map-is-an-isometry]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For every normed $X$, the map $J_X:X\to X^{**}$ is linear and $\|J_Xx\|=\|x\|$ for every $x\in X$. In particular it is injective.

## Proof

1.1 In the normed quotient $Z=X/M$, the bidual isometry gives $\|x+M\|=\sup_{h\in Z^*,\|h\|\le1}|h(x+M)|$. The quotient norm on the left is $\operatorname{dist}(x,M)$. [F2]

2.1 The quotient-dual isometry sends its unit ball onto the unit ball of $M^\perp$, with $f(x)=h(x+M)$. Substitution proves the formula. The unit balls always contain zero; if $x\in M$ or $M=X$ both sides are zero, and $M=0$ recovers the dual norm formula. [F1, step 1.1] ∎
