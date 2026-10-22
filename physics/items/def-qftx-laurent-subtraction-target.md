---
id: def-qftx-laurent-subtraction-target
kind: definition
title: Laurent-series target and pole projection for subtraction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps: []
justified_by: []
dependency_roles: {}
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Dominique Manchon, Hopf algebras, from basics to applications to renormalization, full lecture notes, arXiv:math/0408405v2
      url: https://arxiv.org/pdf/math/0408405
      locator: "Section II.5, printed p. 35: the Laurent-series target, its splitting into negative and nonnegative powers, and projection onto the negative part."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $K$ be a commutative unital $\mathbb Q$-algebra and let $\epsilon$ be a formal indeterminate. The Laurent-series algebra $A=K((\epsilon))$ consists of series $\sum_{n\ge N}a_n\epsilon^n$ for some integer $N$, with coefficients in $K$. Put $A_-=\epsilon^{-1}K[\epsilon^{-1}]$ (finite sums of strictly negative powers) and $A_+=\{\sum_{n\ge0}a_n\epsilon^n:a_n\in K\}$ (formal series of nonnegative powers). Then $A=A_-\oplus A_+$ as a $K$-module, and both summands are subalgebras, with $1\in A_+$. Define $R:A\to A_-$ by retaining exactly the strictly negative powers; $1-R$ is the projection onto $A_+$. The parameter $\epsilon$ is formal and carries no physical or empirical interpretation in this definition.
