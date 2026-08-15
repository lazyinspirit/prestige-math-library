---
id: lem-four-spaces-for-a-fixed-linear-recurrence
kind: lemma
title: "The initial-value, recurrence-sequence, numerator and fixed-denominator rational-series spaces all have dimension $d$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-linear-recurrence-and-recurrence-characteristic-polynomial, def-rational-formal-power-series-and-reduced-denominator, prop-coefficient-extraction-linearity-and-extensionality, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.1.1"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slides 5-18"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $d\ge1$, let $c_1,\ldots,c_d\in K$ with $c_d\ne0$, and put $Q(x)=1+c_1x+\cdots+c_dx^d$. The following four $K$-vector spaces are naturally linearly isomorphic:

1. the initial-value space $K^d$;
2. the space of sequences satisfying $a_{n+d}+c_1a_{n+d-1}+\cdots+c_da_n=0$ for every $n\ge0$;
3. the space of polynomials $P$ with $P=0$ or $\deg P<d$;
4. the space of formal series $P/Q$ with $P=0$ or $\deg P<d$.

Each space has dimension $d$.

## Facts & Assumptions

**Given:** A field $K$, a positive order $d$, coefficients $c_1,\ldots,c_d$ with $c_d\ne0$, and $Q(x)=1+c_1x+\cdots+c_dx^d$.

[L1] An order-$d$ recurrence from the start is $a_{n+d}+c_1a_{n+d-1}+\cdots+c_da_n=0$ for every $n\ge0$ ([[def-linear-recurrence-and-recurrence-characteristic-polynomial]]).

[L2] A proper fixed-denominator series has the form $P/Q$ with $Q(0)=1$ and either $P=0$ or $\deg P<\deg Q$ ([[def-rational-formal-power-series-and-reduced-denominator]]).

[L3] Formal series are equal exactly when all their coefficients agree, and $[x^n](QF)=\sum_{i=0}^{n}[x^i]Q[x^{n-i}]F$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L4] The standard unit vectors form a basis of $K^d$, so $\dim_KK^d=d$, including the zero-dimensional boundary ([[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** direct.

1.1 Given $(u_0,\ldots,u_{d-1})\in K^d$, set $a_i=u_i$ for $i<d$ and recursively define $a_{n+d}=-(c_1a_{n+d-1}+\cdots+c_da_n)$; this produces exactly one recurrence sequence with those initial values. [given, L1, construct]

1.2 For a recurrence sequence with $F=\sum_{n\ge0}a_nx^n$, [L3] gives $[x^m](QF)=a_m+c_1a_{m-1}+\cdots+c_da_{m-d}$ for $m\ge d$, so every such coefficient is zero by [L1] and $P:=QF$ has degree below $d$ or is zero. [L1, L3]

1.3 Because $Q(0)=1$, division by $Q$ is defined formally, and $P\mapsto P/Q$ is a linear bijection from the numerator space to the proper fixed-denominator series space. [L2]

2.1 Initial-value extraction is linear, and step 1.1 is its linear inverse; hence the initial-value and recurrence-sequence spaces are linearly isomorphic. [step 1.1, algebra]

2.2 Conversely, if $P=QF$ has no nonzero coefficient in degrees $m\ge d$, the same coefficient identity read backwards gives the recurrence for every $n=m-d\ge0$; thus $F\mapsto QF$ is a linear bijection from the recurrence-sequence space to the degree-$<d$ numerator space. [step 1.2, L3]

3.1 Coefficient extraction identifies the numerator space with $K^d$, and [L4] gives its dimension $d$; the linear isomorphisms in steps 2.1, 2.2 and 1.3 therefore give dimension $d$ for all four spaces. [step 2.1, step 2.2, step 1.3, L4] ∎
