---
id: lem-of-hom-order-preserving
kind: lemma
title: "Homomorphisms out of a complete ordered field are order-preserving"
status: published
origin: session
deps: [def-field-homomorphism, thm-of-square-roots, lem-of-square-positive, def-ordered-field]
aliases: []
landmark: false
short: "homs from complete are monotone"
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
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Calculus_(Spivak)"
pipeline_run: null
---

## Statement

Let $F$ be a **complete** ordered field and $G$ an ordered field, and let
$\varphi : F \to G$ be a field homomorphism ([[def-field-homomorphism]]). Then
$\varphi$ is **injective** and **order-preserving**: $x > 0$ in $F$ implies
$\varphi(x) > 0$ in $G$, and consequently $a < b$ implies $\varphi(a) < \varphi(b)$.

## Facts & Assumptions

**Given:** A complete ordered field $F$, an ordered field $G$, and a field homomorphism $\varphi : F \to G$.

[L1] $\varphi(1_F) = 1_G$, $\varphi(x + y) = \varphi(x) + \varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$, $\varphi(-x) = -\varphi(x)$; and every field homomorphism is injective, its kernel being an ideal of the field $F$ with $\varphi(1_F) = 1_G \ne 0_G$ ([[def-field-homomorphism]]).

[L2] In a complete ordered field every $a \ge 0$ is a square $a = y^2$; the positive elements are exactly the nonzero squares ([[thm-of-square-roots]]).

[L3] In any ordered field a nonzero square is positive: $y \ne 0 \Rightarrow y^2 > 0$ ([[lem-of-square-positive]]).

[L4] Order via the positive cone: $x > 0$ means $x \in P$, $a < b$ means $b - a \in P$; trichotomy holds ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $\varphi$ is injective: by [L1] its kernel is an ideal of the field $F$, and since $\varphi(1_F) = 1_G \ne 0_G$ the kernel is $\{0_F\}$. [L1]

1.2 Fix $x \in F$ with $x > 0$; then $x \ge 0$, so by [L2] there is $y \in F$ with $x = y^2$, and $y \ne 0$ since $y = 0$ would give $x = 0$, against $x > 0$ by [L4]. [L2, L4]

2.1 Applying $\varphi$, $\varphi(x) = \varphi(y^2) = \varphi(y)^2$, and $\varphi(y) \ne 0_G$ because $y \ne 0$ and $\varphi$ is injective. [step 1.1, step 1.2, L1]

3.1 By [L3] in $G$, the nonzero square $\varphi(y)^2$ is positive, so $\varphi(x) = \varphi(y)^2 > 0$; as $x > 0$ was arbitrary, $x > 0 \Rightarrow \varphi(x) > 0$ for all $x \in F$. [step 2.1, L3]

4.1 If $a < b$ then $b - a > 0$, so $\varphi(b - a) > 0$; since $\varphi(b - a) = \varphi(b) - \varphi(a)$ by [L1], we get $\varphi(b) - \varphi(a) > 0$, i.e. $\varphi(a) < \varphi(b)$. [step 3.1, L1, L4]

5.1 Hence $\varphi$ is an injective, order-preserving field homomorphism. [step 1.1, step 4.1] ∎
