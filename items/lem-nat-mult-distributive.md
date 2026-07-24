---
id: lem-nat-mult-distributive
kind: lemma
title: "Distributivity and the successor law for multiplication"
status: published
origin: session
deps: [def-nat-multiplication, def-nat-addition, lem-nat-add-associative, lem-nat-add-commutative, thm-induction-principle]
aliases: []
landmark: false
short: "$a(b+c)=ab+ac$, $\\sigma(a)n=an+n$"
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
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $a, b, c, n \in \mathbb{N}$: (left distributivity) $a \cdot (b + c) = a \cdot b + a \cdot c$; and (successor-left law) $\sigma(a) \cdot n = a \cdot n + n$.

## Facts & Assumptions

**Given:** multiplication $m \cdot 0 = 0$, $m \cdot \sigma(n) = m \cdot n + m$ and addition $m + 0 = m$, $m + \sigma(k) = \sigma(m + k)$ ([[def-nat-multiplication]], [[def-nat-addition]]); in particular the addition recursion $a + \sigma(k) = \sigma(a + k)$ is available.

[L1] Addition is associative ([[lem-nat-add-associative]]) and commutative ([[lem-nat-add-commutative]]).

[L2] The induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $c$ for distributivity, with a second induction on $n$ for the successor law.

1.1 Base $c = 0$: $a \cdot (b + 0) = a \cdot b = a \cdot b + 0 = a \cdot b + a \cdot 0$, using $b + 0 = b$ and $a \cdot 0 = 0$. [base]

1.2 Inductive hypothesis: $a \cdot (b + c) = a \cdot b + a \cdot c$. [ih]

1.3 Successor-left law $\sigma(a) \cdot n = a \cdot n + n$, by a second induction on $n$: base $n = 0$ gives $\sigma(a) \cdot 0 = 0 = a \cdot 0 + 0$; assuming $\sigma(a) \cdot n = a \cdot n + n$, the step gives $\sigma(a) \cdot \sigma(n) = \sigma(a) \cdot n + \sigma(a) = (a \cdot n + n) + \sigma(a) = a \cdot n + (n + \sigma(a)) = a \cdot n + \sigma(n + a) = a \cdot n + \sigma(a + n) = a \cdot n + (a + \sigma(n)) = (a \cdot n + a) + \sigma(n) = a \cdot \sigma(n) + \sigma(n)$, using associativity and commutativity [L1] and $a + \sigma(k) = \sigma(a + k)$. [L1, given]

2.1 Step: $a \cdot (b + \sigma(c)) = a \cdot \sigma(b + c) = a \cdot (b + c) + a = (a \cdot b + a \cdot c) + a = a \cdot b + (a \cdot c + a) = a \cdot b + a \cdot \sigma(c)$, using $b + \sigma(c) = \sigma(b + c)$, the multiplication recursion, the hypothesis, associativity [L1], and $a \cdot \sigma(c) = a \cdot c + a$. [step 1.2, L1]

3.1 By induction [L2], $a \cdot (b + c) = a \cdot b + a \cdot c$ for all $c$ (hence all $a, b, c$) and $\sigma(a) \cdot n = a \cdot n + n$ for all $a, n$. [step 2.1, step 1.3, discharge-induction] ∎
