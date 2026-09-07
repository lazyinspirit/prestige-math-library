---
id: cor-weak-minimum-principle-for-the-laplacian
kind: corollary
title: "Weak minimum principle for the laplacian"
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
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.3.1 p.28"
---

## Statement

For $n\ge2$, a bounded nonempty open $\Omega\subseteq\mathbb R^n$ and $u\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u\le0$ satisfy $\min_{\overline\Omega}u=\min_{\partial\Omega}u$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] On a bounded nonempty open set, a subharmonic $C^2$ function continuous on the closure has its closure maximum on the boundary. ([[thm-weak-maximum-principle-for-the-laplacian]]).

## Proof

**Proof technique:** direct.

1.1 Put $v=-u$. It has the same regularity and $\Delta v=-\Delta u\ge0$. [given, algebra]

2.1 Apply the weak maximum principle to $v$ and multiply its equality by $-1$. Maxima of $-u$ are negatives of minima of $u$, which proves the claimed equality. [F1, step 1.1, algebra] ∎
