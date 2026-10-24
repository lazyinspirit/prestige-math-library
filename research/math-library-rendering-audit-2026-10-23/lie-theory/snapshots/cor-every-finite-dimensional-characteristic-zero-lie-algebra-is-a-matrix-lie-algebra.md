---
id: cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra
kind: corollary
title: Every finite-dimensional characteristic-zero Lie algebra is a matrix Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-ado-faithful-representation-with-nilpotent-nilradical-action, prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Theorem B.8"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Appendix B §3, Theorem B.8, printed p. 663"
---

## Statement

Every finite-dimensional Lie algebra over a characteristic-zero field is
isomorphic to a Lie subalgebra of $\mathfrak{gl}_n(k)$ for some finite
$n\geq0$.

## Facts & Assumptions

**Given:** Such a Lie algebra $\mathfrak g$.

[L1] Ado supplies a faithful finite-dimensional representation ([[thm-ado-faithful-representation-with-nilpotent-nilradical-action]]).

[L2] Faithfulness is injectivity, and a representation kernel is an ideal ([[prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity]]).

## Proof

**Proof technique:** identify the algebra with its image.

1.1 Choose the representation $\rho:\mathfrak g\to\mathfrak{gl}(V)$ from [L1] and put $n=\dim V$. By [L2], $\rho$ is injective. [L1, L2]

2.1 Since $\rho$ preserves brackets, it is an isomorphism from $\mathfrak g$ to the Lie subalgebra $\rho(\mathfrak g)\subseteq\mathfrak{gl}_n(k)$. If $\mathfrak g=0$, Ado allows $V=0$ and $n=0$; one may instead take the zero subalgebra of $\mathfrak{gl}_1(k)$ if positive matrix size is preferred. [step 1.1, algebra] ∎