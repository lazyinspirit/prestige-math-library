---
id: fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple
kind: false-statement
title: "False statement: every finite-dimensional algebra over a field is semisimple"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-z-mod-p-is-a-field, cor-dimension-of-a-finite-group-algebra, cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Proposition 3.2"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every finite-dimensional algebra over a field is semisimple.

## Facts & Assumptions

**Given:** A prime $p$ and the group algebra $A=(\mathbb Z/p)[C_p]$.

[L1] For every prime $p$, the ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L2] If $G$ is finite, then $\dim_k k[G]=|G|$ ([[cor-dimension-of-a-finite-group-algebra]]).

[L3] If $\operatorname{char} k \mid |G|$, then $k[G]$ is not semisimple ([[cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the coefficient ring $\mathbb Z/p$ is a field, so $A$ is a finite-dimensional algebra over a field. By [L2], $$\dim_{\mathbb Z/p} A=|C_p|=p.$$ [L1, L2, given, algebra]

2.1 The field $\mathbb Z/p$ has characteristic $p$, and $|C_p|=p$, so [L3] applies and shows that $A$ is not semisimple. Therefore a finite-dimensional algebra over a field need not be semisimple. [L3, step 1.1, given, algebra] ∎
