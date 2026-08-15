---
id: cex-lex-leading-term-not-found-by-unbalanced-substitution
kind: counterexample
title: "A fixed unbalanced one-variable substitution need not preserve lexicographic leading terms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lexicographic-order-and-polynomial-multidegree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement refuted

A fixed substitution $x_1=t^{w_1},\ldots,x_n=t^{w_n}$ with positive weights always turns the lexicographically leading monomial of a polynomial into its highest power of $t$.

## Facts & Assumptions

**Given:** Lexicographic order on exponent pairs and the substitution $x=t$, $y=t^{100}$.

[L1] In lexicographic order, exponent tuples are compared at the first coordinate where they differ ([[def-lexicographic-order-and-polynomial-multidegree]]).

## Counterexample

**Proof technique:** direct.

1.1 For $f(x,y)=x^2+xy^{100}$, the tuple $(2,0)$ is lexicographically larger than $(1,100)$, so $x^2$ is the leading monomial. [given, L1]

2.1 Under $x=t$ and $y=t^{100}$, the polynomial becomes $t^2+t^{10001}$, whose highest power comes from $xy^{100}$, not from $x^2$. [step 1.1, algebra]

3.1 Thus the fixed weighted substitution reverses these two terms and does not detect the lexicographic leader. Degree-dependent separated weights can encode any one finite support, but this fixed choice cannot replace lexicographic descent. [step 2.1] ∎
