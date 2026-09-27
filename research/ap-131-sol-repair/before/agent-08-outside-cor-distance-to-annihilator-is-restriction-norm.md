---
id: cor-distance-to-annihilator-is-restriction-norm
kind: corollary
title: "Distance to an annihilator is the restriction norm"
status: published
origin: pipeline
deps: ["thm-dual-of-a-closed-subspace-is-a-dual-quotient"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 2.58, (2.33), p.85"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Unpack the quotient norm in the restriction isometry."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. If $M$ is a closed linear subspace of a normed $X$ and $f\in X^*$, then $$\operatorname{dist}(f,M^\perp)=\|f|_M\|.$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[thm-dual-of-a-closed-subspace-is-a-dual-quotient]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed and $M\le X$ closed. Restriction $R:X^*\to M^*$ induces a linear isometric bijection $\widetilde R:X^*/M^\perp\longrightarrow M^*,\qquad f+M^\perp\longmapsto f|_M.$ Also $\|R\|\le1$; its norm is $1$ when $M\ne\{0\}$ and $0$ when $M=\{0\}$.

## Proof

1.1 The quotient norm is $\|f+M^\perp\|=\inf_{a\in M^\perp}\|f+a\|=\operatorname{dist}(f,M^\perp)$, since $M^\perp$ is a linear subspace. [given, algebra]

2.1 The restriction isometry identifies this quotient norm with $\|f|_M\|$. For $f=0$ both sides vanish; $M=0$ gives zero and $M=X$ gives $\|f\|$. [F1, step 1.1] ∎
