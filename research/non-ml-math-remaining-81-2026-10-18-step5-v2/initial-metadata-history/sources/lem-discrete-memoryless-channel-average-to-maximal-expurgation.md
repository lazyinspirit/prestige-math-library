---
id: lem-discrete-memoryless-channel-average-to-maximal-expurgation
kind: lemma
title: "Expurgation converts small average error to small maximal error"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-fixed-length-channel-code, def-fixed-length-channel-code-errors]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the retained message set is finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.4, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

Every length-$n$ code with average error $\varepsilon_{\rm av}$ has a subcode with at least $M/2$ messages and maximal error at most $2\varepsilon_{\rm av}$.

## Facts & Assumptions

**Given:** A length-$n$ code with $M\ge1$ messages and per-message errors $e_1,\ldots,e_M$.

[F1] [[def-fixed-length-channel-code-errors]]: $\varepsilon_{\rm av}=M^{-1}\sum_m e_m$ and $\varepsilon_{\max}=\max_m e_m$.

[F2] [[def-fixed-length-channel-code]]: restricting the encoder to a nonempty subset of messages and mapping decoder outputs to the retained message labels gives another fixed-length code.

## Proof

1.1 Let $S:=\{m:e_m\le2\varepsilon_{\rm av}\}$. If fewer than $M/2$ messages belonged to $S$, then more than $M/2$ messages would each have error greater than $2\varepsilon_{\rm av}$, forcing $\sum_m e_m>M\varepsilon_{\rm av}$, a contradiction. Hence $|S|\ge M/2$. [F1, given, algebra]

2.1 Restrict the encoder to $S$ and relabel its messages. Define the new decoder to keep any old decoded message in $S$ and to output a fixed retained message otherwise. For each transmitted $m\in S$, every output previously decoded correctly as $m$ is still decoded correctly, so its new error is at most $e_m\le2\varepsilon_{\rm av}$. Thus the subcode has maximal error at most $2\varepsilon_{\rm av}$; its rate loss is at most $n^{-1}\ln2$ because $|S|\ge M/2$. [F1, F2, step 1.1, construct, algebra] ∎
