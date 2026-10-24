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
  repair: research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-zero-domain/thm-algebra-of-total-derivatives/application/repair.json
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

[L1] The total-derivative definition supplies the normwise remainder estimate for every $\varepsilon>0$; in positive source dimension this is equivalently the normalized remainder tending to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

[L2] A norm satisfies the triangle inequality and $\|cw\|=|c|\,\|w\|$ ([[def-norm-and-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 If the source dimension is zero, each derivative is the unique map from the zero space and the remainder condition holds on its sole increment. If $n=0$, both functions and all candidate derivatives take only the zero value. In either case the displayed sum and scalar-multiple identities hold for these unique zero linear maps. For the remainder assume that both source and target dimensions are positive. [given, L1, L2, algebra]

1.2 Add the two expansions and multiply the first by $c$ to obtain remainders $r_f+r_g$ for $f+g$ and $cr_f$ for $cf$, with the displayed candidate linear maps. [L1, L2]

2.1 By [L2], $\|r_f(h)+r_g(h)\|_2/\|h\|_2$ is bounded by the sum of two quantities tending to zero, and $\|cr_f(h)\|_2/\|h\|_2=|c|\,\|r_f(h)\|_2/\|h\|_2$ tends to zero (also when $c=0$). [step 1.2, L2, algebra]

3.1 Sums and scalar multiples of linear maps are linear, so step 2.1 verifies the definition with exactly the two stated derivatives. [step 1.2, step 2.1] ∎
