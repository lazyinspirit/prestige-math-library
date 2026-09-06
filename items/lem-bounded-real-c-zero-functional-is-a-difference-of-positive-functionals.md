---
id: lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals
kind: lemma
title: "A bounded real C_0(X) functional is a difference of positive functionals"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-positive-c-zero-functionals-have-finite-regular-representing-measures]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Every bounded real linear functional $L$ on $C_0(X;\mathbb R)$ can be written $L=L^+-L^-$, where $L^+$ and $L^-$ are bounded positive linear functionals and $\|L^\pm\|\le\|L\|$.

## Facts & Assumptions

**Given:** $L:C_0(X;\mathbb R)\to\mathbb R$ is bounded and linear.

## Proof

**Proof technique:** direct.

1.1 For $f\ge0$ define $$L^+(f)=\sup\{L(g):0\le g\le f\}.$$ The supremum is finite because $|L(g)|\le\|L\|\|f\|_\infty$. It is positively homogeneous and monotone. [given]

2.1 If $f,h\ge0$, decompositions $0\le g\le f+h$ satisfy $g=g_1+g_2$ with $g_1=\min(g,f)$ and $g_2=g-g_1$, where $0\le g_1\le f$ and $0\le g_2\le h$. This gives $L^+(f+h)\le L^+(f)+L^+(h)$; the reverse inequality follows by adding independent approximants. Thus $L^+$ is additive on the positive cone. [step 1.1]

3.1 Extend $L^+$ linearly by $L^+(u)=L^+(u^+)-L^+(u^-)$. Cone additivity makes this well defined and positive. Put $L^-=L^+-L$; for $f\ge0$, the competitor $g=f$ in step 1.1 gives $L^+(f)\ge L(f)$, so $L^-$ is positive. The bounds in step 1.1 give $\|L^\pm\|\le\|L\|$, and $L=L^+-L^-$. [step 1.1, step 2.1] ∎
