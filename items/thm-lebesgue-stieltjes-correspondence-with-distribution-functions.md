---
id: thm-lebesgue-stieltjes-correspondence-with-distribution-functions
kind: theorem
title: "Assuming countable choice, finite-on-compacts Borel measures on $\\mathbb{R}$ correspond to nondecreasing right-continuous functions modulo constants"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distribution-function-of-a-borel-measure-on-r, thm-continuity-from-above-for-measures, thm-continuity-from-below-for-measures, thm-existence-of-the-lebesgue-stieltjes-measure, thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 1.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 2.34"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu$ be a Borel measure on
$\mathbb{R}$ finite on compact sets, and let
$F_\mu$ be its normalized distribution function from
[[def-distribution-function-of-a-borel-measure-on-r]]. Then:

1. $F_\mu$ is nondecreasing and right-continuous;
2. for every $a < b$,

   $$F_\mu(b) - F_\mu(a) = \mu((a,b]);$$

3. the Lebesgue-Stieltjes measure attached to $F_\mu$ is exactly $\mu$.

Conversely, if $F,G : \mathbb{R} \to \mathbb{R}$ are nondecreasing and
right-continuous, then $\mu_F = \mu_G$ if and only if $F-G$ is constant on
$\mathbb{R}$.

## Facts & Assumptions

**Given:** Countable choice, a Borel measure $\mu$ on $\mathbb{R}$ finite on compact sets, its distribution function $F_\mu$, and two nondecreasing right-continuous functions $F,G : \mathbb{R} \to \mathbb{R}$.

[L1] Measures are continuous from above when one set in the decreasing chain has finite measure. ([[thm-continuity-from-above-for-measures]])

[L3] Assuming countable choice, every nondecreasing right-continuous function defines a Borel measure on $\mathbb{R}$ with the prescribed values on half-open intervals. ([[thm-existence-of-the-lebesgue-stieltjes-measure]])

[L4] A Borel measure finite on compact sets is uniquely determined by its values on half-open intervals $(a,b]$. ([[thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]])

## Proof

**Proof technique:** direct.

1.1 The function $F_\mu$ is nondecreasing. [given, algebra]

If $0 \le x < y$, then $(0,x] \subseteq (0,y]$, so $F_\mu(x) \le F_\mu(y)$. If $x < y \le 0$, then $(y,0] \subseteq (x,0]$, so $-\mu((x,0]) \le -\mu((y,0])$, again giving $F_\mu(x) \le F_\mu(y)$. If $x < 0 \le y$, then $F_\mu(y) - F_\mu(x) = \mu((0,y]) + \mu((x,0]) = \mu((x,y]) \ge 0$. [given, algebra]

1.2 Suppose first that $\mu_F = \mu_G$. Then for every $a < b$, [L3, algebra]

$$0 = \mu_F((a,b]) - \mu_G((a,b]) = \big(F(b) - G(b)\big) - \big(F(a) - G(a)\big).$$

So $F(b) - G(b) = F(a) - G(a)$ for all $a < b$, and therefore $F-G$ is constant. [algebra]

1.3 Conversely, if $F-G$ is constant, then $F(b) - F(a) = G(b) - G(a)$ for every $a < b$. [algebra]

2.1 For every $a < b$ one has $F_\mu(b) - F_\mu(a) = \mu((a,b])$. [step 1.1, given, algebra]

In the three sign cases:

$$\mu((0,b]) - \mu((0,a]) = \mu((a,b]) \quad (0 \le a < b),$$

$$-\mu((b,0]) + \mu((a,0]) = \mu((a,b]) \quad (a < b \le 0),$$

and

$$\mu((0,b]) + \mu((a,0]) = \mu((a,b]) \quad (a < 0 \le b).$$

So the displayed interval formula always holds. [step 1.1, given, algebra]

3.1 The function $F_\mu$ is right-continuous. Fix $x \in \mathbb{R}$ and let $h_n \downarrow 0$ with $h_n > 0$. [step 2.1, L1]

For all large $n$ one has $x + h_n < 0$ when $x < 0$, while for $x \ge 0$ no sign change occurs. In either case, step 2.1 gives

$$F_\mu(x+h_n) - F_\mu(x) = \mu((x,x+h_n]).$$

The sets $(x,x+h_n]$ decrease to $\varnothing$, and the first one has finite measure because it is contained in a compact interval. Therefore [L1] gives $\mu((x,x+h_n]) \to 0$, so $F_\mu(x+h_n) \to F_\mu(x)$. [step 2.1, L1]

4.1 By [L3], the function $F_\mu$ determines a Lebesgue-Stieltjes measure $\mu_{F_\mu}$. [step 2.1, step 3.1, L3]

Step 2.1 says that $\mu_{F_\mu}$ and $\mu$ agree on every half-open interval, so [L4] gives $\mu_{F_\mu} = \mu$. [step 2.1, step 3.1, L3, L4]

The interval values of $\mu_F$ and $\mu_G$ therefore agree by [L3], and [L4] yields $\mu_F = \mu_G$. Together with steps 1.1, 1.2, 1.3, 2.1, and 3.1 this proves the theorem. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, L3, L4] ∎
