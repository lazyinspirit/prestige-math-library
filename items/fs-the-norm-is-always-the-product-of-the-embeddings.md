---
id: fs-the-norm-is-always-the-product-of-the-embeddings
kind: false-statement
title: "FALSE: for every finite extension, the norm is just the product over the embeddings"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-field-norm-and-trace-by-embeddings, ex-trace-vanishes-on-a-purely-inseparable-extension]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Theorems 2.3 and 3.2"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Remark 5.47"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every finite field extension $K/F$ and every $a\in K$,
the norm $N_{K/F}(a)$ is just the product of the distinct $F$-embeddings of
$a$.

## Facts & Assumptions

**Given:** The purely inseparable extension $\mathbb F_p(t)/\mathbb F_p(t^p)$ and the element $t$.

[L1] In a finite extension, the norm is the product over embeddings raised to the inseparable degree ([[thm-field-norm-and-trace-by-embeddings]]).

[L2] The extension $\mathbb F_p(t)/\mathbb F_p(t^p)$ is purely inseparable of degree $p$ and has only the inclusion embedding ([[ex-trace-vanishes-on-a-purely-inseparable-extension]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], the product over the distinct embeddings of $t$ is just $t$ itself. [L2]

2.1 But [L1] and [L2] give $$N_{\mathbb F_p(t)/\mathbb F_p(t^p)}(t)=t^p,$$ and $t^p\ne t$ in the rational function field. Therefore the displayed claim is false. [step 1.1, L1, L2, algebra] ∎
