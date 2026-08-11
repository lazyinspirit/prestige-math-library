---
id: thm-jordan-decomposition-for-bv-functions
kind: theorem
title: "Jordan decomposition for functions of bounded variation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-variation-function-and-jordan-identities,
       def-bounded-variation-and-total-variation, def-monotone-function,
       def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: true
short: "Jordan decomposition"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

A real function $f$ on $[a,b]$ has bounded variation if and only if it is a
difference of two nondecreasing functions. If $f(a)=0$, the canonical normalized
decomposition is $f=P_f-N_f$. More generally $f=f(a)+P_f-N_f$.

It is minimal: if $f=f(a)+g-h$ with nondecreasing $g,h$ and $g(a)=h(a)=0$, then
$P_f(x)\le g(x)$ and $N_f(x)\le h(x)$ for every $x$.

## Facts & Assumptions

**Given:** A function $f:[a,b]\to\mathbb R$.

[L1] For BV $f$, $P_f,N_f$ are nondecreasing, normalized at $a$, and $f=f(a)+P_f-N_f$ ([[lem-variation-function-and-jordan-identities]]).

[L2] Total variation is the supremum of sums of absolute increments ([[def-bounded-variation-and-total-variation]]).

[L3] Nondecreasing means that each forward increment is nonnegative ([[def-monotone-function]]).

[L4] A partition is a finite increasing point list ([[def-partition-and-refinement]]).

[L5] Finite sums telescope and distribute over addition ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] $|u-v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is BV, [L1] immediately supplies the stated difference of nondecreasing functions, with the asserted normalization. [L1]

1.2 Conversely suppose $f=f(a)+g-h$ with $g,h$ nondecreasing. For a partition $P=(n,t)$, every forward increment of $g$ and $h$ is nonnegative, so $|f(t_{i+1})-f(t_i)|\le(g(t_{i+1})-g(t_i))+(h(t_{i+1})-h(t_i))$. Summing and telescoping gives $V(f,P)\le g(b)-g(a)+h(b)-h(a)$, independent of $P$; hence $f$ is BV. [L2, L3, L4, L5, L6]

2.1 Now assume the decomposition is normalized. On $[a,x]$, step 1.2 gives $V_f(x)\le g(x)+h(x)$, while $f(x)-f(a)=g(x)-h(x)$. Adding these inequalities and dividing by $2$ yields $P_f(x)\le g(x)$; subtracting the increment identity from the variation inequality yields $N_f(x)\le h(x)$. [step 1.2, L1, L2, algebra] ∎
