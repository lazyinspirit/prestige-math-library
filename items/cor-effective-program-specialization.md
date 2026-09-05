---
id: cor-effective-program-specialization
kind: corollary
title: "Effective program specialization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-smn-parameter-theorem]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lawrence S. Moss, Invitation to Computability and Recursion, The s-m-n Theorem"
      url: "https://lmoss.github.io/onesharp/more_programs/smn.html"
---

## Statement

Fix an acceptable numbering. For every index $e$ of an $(m+n)$-ary program and
every fixed parameter tuple $(a_1,\dots,a_m)$, one can effectively compute an
index for the residual $n$-ary program obtained by hard-wiring those
parameters.

## Facts & Assumptions

**Given:** An acceptable numbering, an index $e$, and fixed parameters $a_1,\dots,a_m$.

[L1] For every $m,n$, the $s$-m-$n$ theorem gives a total computable specialization map $s_m^n$, by [[thm-smn-parameter-theorem]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the chosen pair $(m,n)$. The number $$ e':=s_m^n(e,a_1,\dots,a_m) $$ is effectively computable from the data. [L1, given, construct]

2.1 By the defining property of $s_m^n$, the indexed function $\varphi_{e'}$ agrees on every remaining input tuple with the original program $\varphi_e$ after the first $m$ inputs have been fixed to $a_1,\dots,a_m$. Thus $e'$ is the desired residual-program index. [step 1.1]

3.1 Therefore program specialization is effective. [step 2.1] ∎
