---
id: def-drinfeld-module-over-an-a-field
kind: definition
title: "Drinfeld A-module over an A-field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-function-field-coefficient-ring
  - def-global-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §§3.1–3.2"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §2.1, Remark 2.1"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(A,\infty)$ be a function-field coefficient datum with constant field $\mathbb F_q$. An **A-field** is a field $L$ equipped with a unital ring homomorphism $\gamma:A\to L$; its **A-characteristic** is the prime ideal $\operatorname{char}_A(L)=\ker\gamma$. The twisted polynomial ring $L\{\tau\}$ consists of finite sums $\sum_i c_i\tau^i$ with coefficients $c_i\in L$, addition coefficientwise, and multiplication determined by $\tau c=c^q\tau$ for $c\in L$; on the additive group, $\tau$ acts as $x\mapsto x^q$. Define $\partial(\sum_i c_i\tau^i)=c_0$. A **Drinfeld A-module over $L$** is an injective unital $\mathbb F_q$-algebra homomorphism $\phi:A\to L\{\tau\}$ satisfying $\partial\circ\phi=\gamma$. For $a\in A$, the corresponding additive polynomial is $\phi_a(X)=\sum_i c_iX^{q^i}$ when $\phi_a=\sum_i c_i\tau^i$.

## Definition references

[[def-function-field-coefficient-ring]]

[[def-global-field]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §§3.1–3.2: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §2.1 and Remark 2.1: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf
