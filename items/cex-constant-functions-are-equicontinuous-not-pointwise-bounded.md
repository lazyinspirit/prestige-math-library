---
id: cex-constant-functions-are-equicontinuous-not-pointwise-bounded
kind: counterexample
title: "All constant functions form an equicontinuous family that is not pointwise bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicontinuity-and-boundedness-in-ck]
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

## Statement refuted

Refuted: equicontinuity alone implies pointwise boundedness.

## Facts & Assumptions

**Given:** $\mathcal F=\{f_c:c\in\mathbb R\}$ on a nonempty metric space, where $f_c(x)=c$.

[L1] Equicontinuity and pointwise boundedness have the meanings of [[def-equicontinuity-and-boundedness-in-ck]].

## Counterexample

## Proof

**Proof technique:** direct.

1.1 For every $c$ and all $x,y$, $|f_c(x)-f_c(y)|=0$, so any positive $\delta$ works simultaneously for every member of $\mathcal F$. [given, L1, algebra]

1.2 At each fixed point $a$, $\{f_c(a):c\in\mathbb R\}=\mathbb R$, which is unbounded. [given, L1, algebra]

2.1 Hence this family is equicontinuous but not pointwise bounded. [step 1.1, step 1.2, algebra] ∎
