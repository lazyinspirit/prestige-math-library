---
id: lem-exterior-multiplication-koszul-sign-rule
kind: lemma
title: "Exterior Multiplication Koszul Sign Rule"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-algebra-of-a-finite-free-module, lem-exterior-algebra-basis-monomials]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

If $i$ is distinct from $i_1<\cdots<i_p$, then $e_i\wedge e_I=(-1)^{\#\{i_j<i\}}e_{\operatorname{sort}(\{i\}\cup I)}$, while $e_i\wedge e_I=0$ when $i\in I$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-exterior-algebra-of-a-finite-free-module]], [[lem-exterior-algebra-basis-monomials]].

## Proof

**Proof technique:** direct.

1.1 Move $e_i$ across precisely the factors indexed below $i$; each adjacent swap contributes $-1$. [given, algebra]

2.1 If $i$ already occurs, the wedge contains a square and is zero; this remains true in characteristic $2$. [step 1.1, algebra] ∎
