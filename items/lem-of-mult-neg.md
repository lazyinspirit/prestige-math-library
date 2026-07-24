---
id: lem-of-mult-neg
kind: lemma
title: "Sign rules for products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$"
status: published
origin: session
deps: [def-field, lem-of-zero-mult]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Calculus_(Spivak)"
pipeline_run: null
---

## Statement

In any field $F$ ([[def-field]]), for all $a, b \in F$ we have $(-a)b = -(ab)$ and $(-a)(-b) = ab$.

## Facts & Assumptions

**Given:** A field $F$ and elements $a, b \in F$.

[L1] Field axioms ([[def-field]]): multiplication distributes over addition and is commutative; $x + (-x) = 0$ for every $x$; the additive inverse of an element is unique, so if $u + v = 0$ then $v = -u$; and $-(-x) = x$.

[L2] For every $x \in F$, $0 \cdot x = 0$ and $x \cdot 0 = 0$ ([[lem-of-zero-mult]], using commutativity).

## Proof

**Proof technique:** direct.

1.1 By distributivity, $ab + (-a)b = (a + (-a)) \cdot b$. [L1]

1.2 Since $a + (-a) = 0$, we have $(a + (-a)) \cdot b = 0 \cdot b$. [L1]

1.3 $0 \cdot b = 0$. [L2]

1.4 By distributivity, $ab + a(-b) = a \cdot (b + (-b))$. [L1]

1.5 Since $b + (-b) = 0$, we have $a \cdot (b + (-b)) = a \cdot 0$. [L1]

1.6 $a \cdot 0 = 0$. [L2]

1.7 By distributivity, $(-a)(-b) + a(-b) = ((-a) + a) \cdot (-b)$. [L1]

1.8 Since $(-a) + a = 0$, we have $((-a) + a) \cdot (-b) = 0 \cdot (-b)$. [L1]

1.9 $0 \cdot (-b) = 0$. [L2]

2.1 Chaining steps 1.1, 1.2, 1.3 gives $ab + (-a)b = 0$. [step 1.1, step 1.2, step 1.3]

2.2 Chaining steps 1.4, 1.5, 1.6 gives $ab + a(-b) = 0$. [step 1.4, step 1.5, step 1.6]

2.3 Chaining steps 1.7, 1.8, 1.9 gives $(-a)(-b) + a(-b) = 0$. [step 1.7, step 1.8, step 1.9]

3.1 Since $ab + (-a)b = 0$, the inverse uniqueness axiom gives $(-a)b = -(ab)$. [step 2.1, L1]

3.2 Since $ab + a(-b) = 0$, the inverse uniqueness axiom gives $a(-b) = -(ab)$. [step 2.2, L1]

3.3 Since $(-a)(-b) + a(-b) = 0$, the inverse uniqueness axiom gives $(-a)(-b) = -(a(-b))$. [step 2.3, L1]

4.1 Substituting $a(-b) = -(ab)$ into $(-a)(-b) = -(a(-b))$ gives $(-a)(-b) = -(-(ab)) = ab$. [step 3.2, step 3.3, L1] ∎
