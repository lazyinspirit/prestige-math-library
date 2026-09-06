---
id: ex-uct-cohomology-of-a-two-term-free-complex
title: "Universal-coefficient cohomology of a two-term free complex"
kind: example
status: draft
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-cohomology-over-a-pid"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For a nonzero integer $m$, let
$C=(0\to\mathbb Z\xrightarrow{m}\mathbb Z\to0)$. With coefficients
$\mathbb Z$, one has $H^0\operatorname{Hom}(C,\mathbb Z)=0$ and
$H^1\operatorname{Hom}(C,\mathbb Z)\cong\mathbb Z/m$.

## Verification

**Given:** the cochain complex $0\leftarrow\mathbb Z\xleftarrow{m}\mathbb Z\leftarrow0$.

1.1 Multiplication by nonzero $m$ on $\mathbb Z$ has kernel $0$ and cokernel $\mathbb Z/m$. [given]

2.1 Thus the cochain calculation has the displayed cohomology; it agrees with $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/m,\mathbb Z)\cong\mathbb Z/m$. [step 1.1] ∎
