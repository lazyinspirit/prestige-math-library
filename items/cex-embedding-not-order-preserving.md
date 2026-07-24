---
id: cex-embedding-not-order-preserving
kind: counterexample
title: "A field homomorphism of ordered fields need not preserve order"
status: published
origin: session
deps: [def-field-homomorphism, def-ordered-field, thm-of-square-roots, lem-of-hom-order-preserving, fs-sqrt2-rational]
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every field homomorphism $\varphi : F \to G$ between ordered
fields is order-preserving, that is, $a < b$ in $F$ implies $\varphi(a) < \varphi(b)$
in $G$.

The witness is the conjugation map on $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} : a, b \in \mathbb{Q}\} \subseteq \mathbb{R}$,
which is a field homomorphism from an ordered field to itself yet sends the
positive element $\sqrt{2}$ to the negative element $-\sqrt{2}$.

## Facts & Assumptions

**Given:** The reals $\mathbb{R}$, a complete ordered field, with the positive square root $\sqrt{2}$ of $2$.

[L1] In $\mathbb{R}$ the element $2 = 1 + 1$ has a positive square root $\sqrt{2}$ with $(\sqrt{2})^2 = 2$ and $\sqrt{2} > 0$ ([[thm-of-square-roots]]).

[L2] No rational number squares to $2$, so $\sqrt{2}$ is irrational ([[fs-sqrt2-rational]]).

[L3] A field homomorphism $\varphi$ satisfies $\varphi(x + y) = \varphi(x) + \varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$, and $\varphi(1) = 1$ ([[def-field-homomorphism]]).

[L4] In an ordered field, $x > 0$ means $x$ lies in the positive cone, and $a < b$ means $b - a > 0$; exactly one of $x > 0$, $x = 0$, $x < 0$ holds ([[def-ordered-field]]).

[L5] A field homomorphism from a complete ordered field into an ordered field is order-preserving ([[lem-of-hom-order-preserving]]).

## Counterexample

**Proof technique:** direct.

1.1 Working inside $\mathbb{R}$, let $K = \{a + b\sqrt{2} : a, b \in \mathbb{Q}\}$; then $(a + b\sqrt{2}) + (c + d\sqrt{2}) = (a + c) + (b + d)\sqrt{2}$ and $(a + b\sqrt{2})(c + d\sqrt{2}) = (ac + 2bd) + (ad + bc)\sqrt{2}$ both lie in $K$, so $K$ is closed under addition and multiplication. [L1, algebra]

1.2 Each nonzero $a + b\sqrt{2} \in K$ is invertible in $K$, with $(a + b\sqrt{2})^{-1} = \frac{a - b\sqrt{2}}{a^2 - 2b^2}$, where $a^2 - 2b^2 \ne 0$ since otherwise $(a, b) \ne (0, 0)$ forces $b \ne 0$ and the rational $(a/b)^2 = 2$, contradicting [L2]. [L2, algebra]

1.3 The representation of an element of $K$ as $a + b\sqrt{2}$ with $a, b \in \mathbb{Q}$ is unique, for $a + b\sqrt{2} = a' + b'\sqrt{2}$ with $b \ne b'$ would give $\sqrt{2} = (a' - a)/(b - b') \in \mathbb{Q}$. [L2, algebra]

1.4 In $K$ the element $\sqrt{2} = 0 + 1 \cdot \sqrt{2}$ satisfies $\sqrt{2} > 0$. [L1, L4]

2.1 By steps 1.1 and 1.2, $K$ is a subfield of $\mathbb{R}$, hence an ordered field under the positive cone inherited from $\mathbb{R}$. [step 1.1, step 1.2, L4]

2.2 By the uniqueness in step 1.3, the map $\sigma : K \to K$ given by $\sigma(a + b\sqrt{2}) = a - b\sqrt{2}$ is well defined. [step 1.3]

2.3 The real number $2^{1/4} = \sqrt{\sqrt{2}}$ is not in $K$, for $2^{1/4} = a + b\sqrt{2}$ would square to $\sqrt{2} = (a^2 + 2b^2) + 2ab\sqrt{2}$, whence step 1.3 forces $a^2 + 2b^2 = 0$ and $2ab = 1$, impossible for real $a, b$. [step 1.3, algebra]

3.1 $\sigma$ is additive: $\sigma((a + b\sqrt{2}) + (c + d\sqrt{2})) = (a + c) - (b + d)\sqrt{2} = (a - b\sqrt{2}) + (c - d\sqrt{2}) = \sigma(a + b\sqrt{2}) + \sigma(c + d\sqrt{2})$. [step 2.2, algebra]

3.2 $\sigma$ is multiplicative: $\sigma((a + b\sqrt{2})(c + d\sqrt{2})) = (ac + 2bd) - (ad + bc)\sqrt{2} = (a - b\sqrt{2})(c - d\sqrt{2}) = \sigma(a + b\sqrt{2})\,\sigma(c + d\sqrt{2})$. [step 2.2, algebra]

3.3 $\sigma$ fixes the identity: $\sigma(1) = \sigma(1 + 0 \cdot \sqrt{2}) = 1$. [step 2.2]

3.4 $\sigma(\sqrt{2}) = \sigma(0 + 1 \cdot \sqrt{2}) = -\sqrt{2}$, and $-\sqrt{2} < 0$ in $K$ by step 1.4. [step 2.2, step 1.4, L4]

4.1 By steps 3.1, 3.2, and 3.3, $\sigma$ satisfies the three homomorphism identities, so $\sigma : K \to K$ is a field homomorphism between ordered fields. [step 3.1, step 3.2, step 3.3, L3]

5.1 Steps 2.1 and 4.1 exhibit a field homomorphism $\sigma$ between ordered fields with $\sqrt{2} > 0$ in the domain yet $\sigma(\sqrt{2}) = -\sqrt{2} < 0$ by step 3.4, so $\sigma$ is not order-preserving, refuting the claim that every field homomorphism between ordered fields is order-preserving. [step 2.1, step 4.1, step 3.4, L4]

6.1 There is no conflict with [L5], whose hypothesis fails here: since $K$ contains the dense subfield $\mathbb{Q}$, the bounded set $\{r \in K : r > 0, r^2 < \sqrt{2}\}$ has least upper bound $2^{1/4}$ in $\mathbb{R}$ but, by step 2.3, no least upper bound in $K$, so $K$ is not complete. [step 2.3, step 5.1, L5] ∎
