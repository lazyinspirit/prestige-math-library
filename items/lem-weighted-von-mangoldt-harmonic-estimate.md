---
id: lem-weighted-von-mangoldt-harmonic-estimate
kind: lemma
title: "The von Mangoldt harmonic sum is log x plus O(1)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-von-mangoldt-function,
       thm-von-mangoldt-divisor-sum-identity,
       lem-summatory-logarithm-asymptotic,
       def-chebyshev-psi-function,
       lem-chebyshev-psi-prime-power-expansion,
       lem-chebyshev-functions-prime-power-comparison,
       thm-chebyshev-theta-linear-bounds]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leo Goldmakher, A Quick Proof of Mertens' Theorem"
      url: "https://web.williams.edu/Mathematics/lg5/mertens.pdf"
    - title: "MIT 18.785 Number Theory I, Fall 2021, Problem Set 9"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_pset9.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge2$,

$$
\sum_{n\le x}\frac{\Lambda(n)}{n}=\log x+O(1).
$$

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[L1] The von Mangoldt divisor identity is
$$
\log m=\sum_{\substack{d\mid m\\ d>0}}\Lambda(d)
$$
for every integer $m\ge1$ ([[thm-von-mangoldt-divisor-sum-identity]],
[[def-von-mangoldt-function]]).

[L2] The summatory logarithm satisfies
$$
\sum_{m\le x}\log m=x\log x-x+O(\log x)
$$
([[lem-summatory-logarithm-asymptotic]]).

[L3] The prime-power expansion of $\psi$ together with the comparison lemma and
Chebyshev's theta bounds imply
$$
\sum_{d\le x}\Lambda(d)=\psi(x)=O(x)
$$
([[def-chebyshev-psi-function]], [[lem-chebyshev-psi-prime-power-expansion]],
[[lem-chebyshev-functions-prime-power-comparison]],
[[thm-chebyshev-theta-linear-bounds]]).

## Proof

**Proof technique:** direct.

1.1 Summing [L1] over the positive integers $1\le m\le x$ and reversing the finite order of summation gives $ \sum_{1\le m\le x}\log m =\sum_{1\le d\le x}\Lambda(d)\left\lfloor\frac{x}{d}\right\rfloor. $ Write $ S(x):=\sum_{1\le d\le x}\frac{\Lambda(d)}{d}. $ Since $\lfloor x/d\rfloor=x/d+O(1)$, we obtain $ \sum_{1\le m\le x}\log m=xS(x)+O\!\left(\sum_{1\le d\le x}\Lambda(d)\right). $ [L1, given, construct, algebra]

2.1 By [L3], the error term in step 1.1 is $O(x)$. Therefore $ \sum_{1\le m\le x}\log m=xS(x)+O(x). $ [L3, step 1.1, algebra]

3.1 Substitute the asymptotic from [L2] into step 2.1: $ x\log x-x+O(\log x)=xS(x)+O(x). $ After moving the $O(x)$ term to the left and dividing by $x$, this becomes $ S(x)=\log x+O(1). $ That is exactly the claimed estimate $ \sum_{n\le x}\frac{\Lambda(n)}{n}=\log x+O(1). $ [L2, step 2.1, algebra] ∎
