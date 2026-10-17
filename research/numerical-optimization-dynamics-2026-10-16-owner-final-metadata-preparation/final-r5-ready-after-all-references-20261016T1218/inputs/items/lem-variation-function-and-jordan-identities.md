---
id: lem-variation-function-and-jordan-identities
kind: lemma
title: "The positive and negative variations are nondecreasing and give the Jordan identities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-variation-function-and-positive-negative-variation,
       lem-variation-additive-on-subintervals,
       lem-basic-properties-of-total-variation, def-monotone-function,
       def-abs-value]
justified_by: []
aliases: []
landmark: true
short: "Jordan identities"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

For a bounded-variation function $f:[a,b]\to\mathbb R$, the functions $P_f$ and
$N_f$ are nondecreasing and

$$f(x)=f(a)+P_f(x)-N_f(x),\qquad V_f(x)=P_f(x)+N_f(x).$$

Both $P_f(a)$ and $N_f(a)$ are $0$.

## Facts & Assumptions

**Given:** A bounded-variation function $f:[a,b]\to\mathbb R$ and its functions $V_f,P_f,N_f$.

[L1] $V_f,P_f,N_f$ are defined by the displayed formulas in [[def-variation-function-and-positive-negative-variation]].

[L2] For $x\le y$, $V_f(y)-V_f(x)=\operatorname{Var}_{[x,y]}(f)$ ([[lem-variation-additive-on-subintervals]]).

[L3] $|f(y)-f(x)|\le\operatorname{Var}_{[x,y]}(f)$ ([[lem-basic-properties-of-total-variation]]).

[L4] A function is nondecreasing when $x\le y$ implies $g(x)\le g(y)$ ([[def-monotone-function]]).

[L5] $|u|\ge u$ and $|u|\ge -u$ ([[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 For $x\le y$, [L2] and [L3] give $V_f(y)-V_f(x)\ge|f(y)-f(x)|$, hence this difference is at least both $f(y)-f(x)$ and $f(x)-f(y)$. Therefore $P_f(y)-P_f(x)\ge0$ and $N_f(y)-N_f(x)\ge0$, so both functions are nondecreasing. [L1, L2, L3, L4, L5]

1.2 Adding and subtracting the defining formulas gives $P_f(x)+N_f(x)=V_f(x)$ and $P_f(x)-N_f(x)=f(x)-f(a)$. At $x=a$, $V_f(a)=0$, so $P_f(a)=N_f(a)=0$. [L1, algebra]

2.1 Rearranging the second identity in step 1.2 gives $f=f(a)+P_f-N_f$, while the first is the asserted variation identity. [step 1.2, algebra] ∎
