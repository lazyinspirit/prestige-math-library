---
id: "thm-two-out-of-three-for-quasi-isomorphisms"
kind: "theorem"
title: "Two out of three for quasi isomorphisms"
deps: ["prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For composable complex maps $f:X\to Y$ and $g:Y\to Z$, if any two of $f,g,gf$ are quasi-isomorphisms, then so is the third.

## Facts & Assumptions

**Given:** For composable complex maps $f:X\to Y$ and $g:Y\to Z$, if any two of $f,g,gf$ are quasi-isomorphisms, then so is the third.

[F1] Identities and composites of quasi-isomorphisms are quasi-isomorphisms ([[prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition]]).

## Proof

1.1 Fix any degree $n$ and write $a=H^n(f)$ and $b=H^n(g)$. Functoriality gives $H^n(gf)=ba$. If $a,b$ are invertible then $ba$ is invertible, also when any cohomology object is zero. [F1, algebra]

2.1 If $a,ba$ are invertible, then $b=(ba)a^{-1}$ is invertible. If $b,ba$ are invertible, then $a=b^{-1}(ba)$ is invertible. These are the other two possible pairs, and the argument holds in every degree. [step 1.1, algebra] ∎
