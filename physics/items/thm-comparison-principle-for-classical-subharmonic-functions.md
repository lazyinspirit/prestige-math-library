---
id: thm-comparison-principle-for-classical-subharmonic-functions
kind: theorem
title: "Comparison principle for classical subharmonic functions"
status: published
origin: pipeline
deps: [thm-weak-maximum-principle-for-the-laplacian]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§6 Corollary 10, p.9"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open, and let $u,v\in C^2(\Omega)\cap C(\overline\Omega)$. If $\Delta u\ge\Delta v$ in $\Omega$ and $u\le v$ on $\partial\Omega$, then $u\le v$ on $\overline\Omega$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] The weak maximum principle applies to bounded nonempty open sets and subharmonic $C^2$ functions continuous on their closures. ([[thm-weak-maximum-principle-for-the-laplacian]]).

## Proof

**Proof technique:** direct.

1.1 The function $w=u-v$ is continuous on the closure, belongs to $C^2(\Omega)$, and satisfies $\Delta w\ge0$ and $w\le0$ on the boundary. [given, algebra]

2.1 The weak maximum principle gives $\max_{\overline\Omega}w=\max_{\partial\Omega}w\le0$, exactly the required comparison. [F1, step 1.1] ∎
