---
id: prop-sat-is-in-np
kind: proposition
title: "SAT lies in NP"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boolean-formula-cnf-and-sat, def-np-by-verifiers, def-polynomially-balanced-verifier]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf"
---

## Statement

The satisfiability language $SAT$ belongs to $NP$.

## Facts & Assumptions

**Given:** A Boolean formula $\varphi$ with variables among $x_1,\dots,x_n$.

[L1] The language $SAT$ consists exactly of the encodings of satisfiable Boolean formulas, by [[def-boolean-formula-cnf-and-sat]].

[L2] A language lies in $NP$ when membership can be verified in polynomial time from a polynomially bounded certificate, by [[def-np-by-verifiers]] and [[def-polynomially-balanced-verifier]].

## Proof

**Proof technique:** direct.

1.1 Use as certificate a truth assignment $a\in\{0,1\}^n$ for the variables of $\varphi$. Its length is $n$, so it is linearly bounded by the input size of $\ulcorner\varphi\urcorner$. [L2, given, construct]

2.1 A deterministic verifier can evaluate $\varphi$ under $a$ by traversing the parse tree of $\varphi$ once. That takes time polynomial in $|\ulcorner\varphi\urcorner|$, and by [L1] it accepts exactly when $\varphi$ is satisfiable. Therefore [L2] gives $SAT\in NP$. [L1, L2, step 1.1] ∎

