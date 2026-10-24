---
id: lem-uniformly-convergent-sequences-form-equicontinuous-families
kind: lemma
title: "A uniformly convergent sequence of continuous functions, together with its limit, is equicontinuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicontinuity-and-boundedness-in-ck, thm-uniform-limit-continuous-real-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

If $f_n\to f$ uniformly on a compact metric space and every $f_n$ is continuous, then $\{f\}\cup\{f_n:n\in\mathbb N\}$ is equicontinuous.

## Facts & Assumptions

**Given:** $a\in K$ and $\varepsilon>0$.

[L1] A uniform limit of continuous real-valued functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L2] Equicontinuity is the common-radius condition for a family of functions ([[def-equicontinuity-and-boundedness-in-ck]]).

## Proof

**Proof technique:** direct.

1.1 Choose $N$ such that $|f_n(x)-f(x)|<\varepsilon/3$ for every $n\ge N$ and $x\in K$. [given, choose]

1.2 By [L1], choose a neighbourhood of $a$ on which $|f(x)-f(a)|<\varepsilon/3$; by continuity of the finitely many $f_n$ with $n<N$, shrink it so the same inequality with $\varepsilon$ holds for all of them. [L1, choose]

2.1 On that neighbourhood, the triangle inequality gives $|f_n(x)-f_n(a)|<\varepsilon$ for $n\ge N$, while step 1.2 covers $f$ and $n<N$. [step 1.1, step 1.2, algebra]

3.1 Thus the displayed family is equicontinuous at arbitrary $a$, hence equicontinuous. [step 2.1, L2] ∎
