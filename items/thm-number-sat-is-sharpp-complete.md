---
id: thm-number-sat-is-sharpp-complete
kind: theorem
title: "NumberSAT is Sharp-P-complete under parsimonious reductions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharpp-and-gap-p-functions, def-number-sat, def-parsimonious-reduction, prop-number-sat-is-in-sharpp, lem-cook-levin-can-be-made-parsimonious]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\mathrm{NumberSAT}$ is $\#\mathrm P$-complete under parsimonious reductions.

## Facts & Assumptions

**Given:** an arbitrary function $f\in\#\mathrm P$.

[L1] Such an $f$ is the accepting-path count of a fixed polynomial-time nondeterministic machine, by [[def-sharpp-and-gap-p-functions]].

[L2] $\mathrm{NumberSAT}\in\#\mathrm P$, by [[prop-number-sat-is-in-sharpp]].

[L3] The Cook--Levin construction can preserve accepting paths in a bijection with satisfying assignments, by [[lem-cook-levin-can-be-made-parsimonious]].

[L4] Parsimony means exact count equality under a polynomial-time map, by [[def-parsimonious-reduction]].

## Proof

**Proof technique:** direct.

1.1 Choose a machine $N$ with $f(x)=\#\operatorname{acc}_N(x)$ as supplied by [L1]. Apply [L3] to compute the formula $r(x)=\varphi_{N,x}$ in polynomial time. [L1, L3, given, construct]

2.1 For every input $x$, the bijection in [L3] gives the exact chain $$ f(x)=\#\operatorname{acc}_N(x) =\#\operatorname{sat}(\varphi_{N,x}) =\mathrm{NumberSAT}(r(x)). $$ Thus $r$ is a parsimonious reduction by [L4]. [L3, L4, step 1.1]

3.1 Since $f$ was arbitrary, step 2.1 proves $\#\mathrm P$-hardness, and [L2] proves membership. [L2, step 2.1] ∎
