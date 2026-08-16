---
id: ex-the-list-monad-on-a-two-element-set
kind: example
title: "The list monad on a two-element set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "Finite word enumeration can omit the empty word or confuse an empty inner word with an empty outer list."
  counterexample_search: "Enumerated every word through length two and separately evaluated empty outer and inner lists under flattening; all samples match the list-monad formulas."
deps: [thm-the-free-monoid-monad-and-its-algebras-are-monoids]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $X=\{a,b\}$, the list monad gives

$$T(X)=\{[],[a],[b],[a,a],[a,b],[b,a],[b,b],\ldots\}.$$

The unit inserts a letter as a one-letter word, and multiplication removes one level of list brackets by concatenation.

## Facts & Assumptions

**Given:** The set $X=\{a,b\}$.

[L1] The free-monoid monad sends a set to its finite words, has singleton-word unit, and has concatenation multiplication ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

## Verification

**Proof technique:** direct.

1.1 The displayed beginning contains the empty word, the words $[a],[b]$, and the words $[a,a],[a,b],[b,a],[b,b]$; $T(X)$ continues with all finite words in $a$ and $b$. [L1]

2.1 One has $\eta_X(a)=[a]$, $\eta_X(b)=[b]$, $\mu_X([\,[a,b],[],[b],])=[a,b,b]$, $\mu_X([])=[]$, and $\mu_X([\,[]\,])=[]$. [L1, step 1.1]

3.1 The unit samples flatten $[\,[a],]$ to $[a]$ and the list of singleton words to the original word; nested concatenation gives the same word under either bracketing. Thus the displayed calculations agree with the general monad equations. [L1, step 2.1] ∎
