---
id: thm-ring-of-integers-free-of-rank-degree
kind: theorem
title: "The ring of integers has rank the degree"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ring-of-integers-of-a-number-field, def-number-field, thm-finite-integral-closure-in-a-finite-separable-extension, cor-submodules-of-finite-free-pid-modules-are-free, thm-clearing-denominators-for-an-algebraic-number]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Proposition 2.29"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

$\mathcal O_K$ is a free $\mathbb Z$-module of rank $[K:\mathbb Q]$.

## Facts & Assumptions

**Given:** A number field $K$.

[F1] Its integral closure is finite over $\mathbb Z$ ([[thm-finite-integral-closure-in-a-finite-separable-extension]]).

[F2] A submodule of finite free module over a PID is free ([[cor-submodules-of-finite-free-pid-modules-are-free]]).

[F3] Every element of $K$ has a positive integer multiple in $\mathcal O_K$, so $K=\operatorname{Frac}(\mathcal O_K)$ ([[thm-clearing-denominators-for-an-algebraic-number]]).

## Proof

**Proof technique:** direct.

1.1 Fact [F1] makes $\mathcal O_K$ finitely generated; it is torsion-free because it is contained in the characteristic-zero field $K$. [F1, given]

2.1 The PID structure theorem, equivalently [F2] after embedding in a finite free module, makes it free. Fact [F3] gives $\mathcal O_K\otimes_{\mathbb Z}\mathbb Q\cong K$, so its rank is $[K:\mathbb Q]$. [F2, F3, step 1.1] ∎
