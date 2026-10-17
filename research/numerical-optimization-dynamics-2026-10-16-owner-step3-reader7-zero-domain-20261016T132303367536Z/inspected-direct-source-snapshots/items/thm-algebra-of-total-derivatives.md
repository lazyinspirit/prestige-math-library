---
id: thm-algebra-of-total-derivatives
kind: theorem
title: "Sums and scalar multiples of totally differentiable maps are totally differentiable with the expected derivatives"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-total-derivative-in-euclidean-space, def-euclidean-linear-map, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

If $f,g:U\to\mathbb R^n$ are totally differentiable at $a$ and $c\in\mathbb R$, then $f+g$ and $cf$ are totally differentiable at $a$, with

$$D(f+g)(a)=Df(a)+Dg(a),\qquad D(cf)(a)=cDf(a).$$

## Facts & Assumptions

**Given:** Total first-order expansions for $f$ and $g$ at $a$.

[L1] In the total-derivative definition, the normalized remainder tends to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

[L2] A norm satisfies the triangle inequality and $\|cw\|=|c|\,\|w\|$ ([[def-norm-and-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 Add the two expansions and multiply the first by $c$ to obtain remainders $r_f+r_g$ for $f+g$ and $cr_f$ for $cf$, with the displayed candidate linear maps. [L1, L2]

2.1 By [L2], $\|r_f(h)+r_g(h)\|_2/\|h\|_2$ is bounded by the sum of two quantities tending to zero, and $\|cr_f(h)\|_2/\|h\|_2=|c|\,\|r_f(h)\|_2/\|h\|_2$ tends to zero (also when $c=0$). [step 1.1, L2, algebra]

3.1 Sums and scalar multiples of linear maps are linear, so step 2.1 verifies the definition with exactly the two stated derivatives. [step 1.1, step 2.1] ∎
