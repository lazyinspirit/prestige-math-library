---
id: def-it-reliability-function
kind: definition
title: Average and maximal error reliability exponents
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-fixed-length-channel-code-errors]
justified_by: []
aliases: []
axiom_use: No choice axiom is used; each blocklength has a finite set of deterministic codes.
provenance:
  statement: literature-derived
  proof: not-applicable
proof_obligations:
  - Fix the code-size rounding, average and maximal criteria, and liminf/limsup conventions.
  - Define the error exponent separately from the success exponent, including zero error.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.4*"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.4*, printed pp. 431–434; finite-DMC reliability functions and the low-rate caveat.
    - title: MIT 6.441 Information Theory, Lecture 12, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/107335d1797be9009a90467e27d1fd7a_MIT6_441S10_lec12.pdf
      locator: PDF pp. 1–4; error exponent definition, expurgation, and positivity below capacity.
---

## Definition

For a finite DMC $W$, $R>0$, and $n\ge1$, set $M_n=\lceil e^{nR}\rceil$. Let $P_k^*(n,M_n)$ be the minimum error probability among length-$n$ deterministic codes of that size under criterion $k\in\{\mathrm{av},\mathrm{max}\}$, where the two errors are those of [[def-fixed-length-channel-code-errors]]. This minimum exists because the encoder and decoder range over finite sets. Define
$$E_k^-(R):=\liminf_{n\to\infty}-\frac1n\ln P_k^*(n,M_n),\qquad E_k^+(R):=\limsup_{n\to\infty}-\frac1n\ln P_k^*(n,M_n),$$
with $-\ln0=+\infty$. An error-exponent limit $E_k(R)$ is used only when the liminf and limsup agree in the extended reals. These are exponents of error probability; the exponent of success probability is a different quantity. No general exact formula for the finite-DMC reliability function is part of this definition.
