---
id: ex-a-kleisli-composite-computed
kind: example
title: "A Kleisli composite for the list monad computed by substitution and concatenation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "A list-valued composite could use the wrong substitution order or flattening order."
  counterexample_search: "Computed both displayed bracketings entrywise for every stated finite input; they agree, and the empty-list input remains empty."
deps: [def-kleisli-category, thm-the-free-monoid-monad-and-its-algebras-are-monoids]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For the list monad, let $X=\{0,1,2\}$ and define

$$f(0)=[a,b,a],\qquad f(1)=[],\qquad f(2)=[b],$$

$$g(a)=[p],\qquad g(b)=[q,p].$$

Then the Kleisli composite substitutes the $g$-word for every letter of the $f$-word and concatenates.

## Facts & Assumptions

**Given:** The displayed list-valued functions $f:X\to\{a,b\}^*$ and $g:\{a,b\}\to\{p,q\}^*$.

[L1] A Kleisli arrow $A\to B$ for the list monad is a function $A\to B^*$, and Kleisli composition uses the monad multiplication ([[def-kleisli-category]]; [[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

[L2] The multiplication of the list monad concatenates a list of lists ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

## Verification

**Proof technique:** direct.

1.1 The data include an input with empty output, and all displayed values are finite words of the required types. [given]

2.1 Substitution and concatenation give $(g\star f)(0)=[p,q,p,p]$, $(g\star f)(1)=[]$, and $(g\star f)(2)=[q,p]$. [L1, L2, step 1.1]

3.1 Define $h(p)=[r]$ and $h(q)=[s,r]$. Then $(h\star(g\star f))(0)=[r,s,r,r,r]$, while $(h\star g)(a)=[r]$ and $(h\star g)(b)=[s,r,r]$, so $((h\star g)\star f)(0)$ is the same word. [L1, L2, step 2.1] ∎
