---
id: prop-cantor-measure-is-a-singular-atomless-probability-measure
kind: proposition
title: "The Cantor measure is a singular atomless probability measure concentrated on the Cantor set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-cantor-function-is-continuous, cor-cantor-set-is-an-uncountable-lebesgue-null-set, def-cantor-measure, thm-cantor-function-properties, thm-continuity-from-below-for-measures, thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.37"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu_c$ be the Cantor measure of
[[def-cantor-measure]] and let
$C \subseteq [0,1]$ be the Cantor set. Then:

1. $\mu_c([0,1]) = 1$, so $\mu_c$ is a probability measure;
2. $\mu_c(\{x\}) = 0$ for every $x \in \mathbb{R}$, so $\mu_c$ is atomless;
3. $\mu_c(\mathbb{R} \setminus C) = 0$, so $\mu_c$ is concentrated on the Cantor
   set;
4. since $\lambda(C) = 0$, the measure $\mu_c$ is singular with respect to
   Lebesgue measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the Cantor function $c$, its extension $F_c$, the Cantor measure
$\mu_c = \mu_{F_c}$, and the Cantor set $C$.

[L1] The Cantor function is continuous, nondecreasing, satisfies $c(0)=0$ and
$c(1)=1$, and is constant on every complementary gap of $C$.
([[cor-cantor-function-is-continuous]], [[thm-cantor-function-properties]])

[L2] The interval and singleton formulas hold for every Lebesgue-Stieltjes
measure. ([[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]])

[L3] Assuming Countable Choice, the Cantor set has Lebesgue measure zero.
([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]])

[L4] Measures are continuous from below.
([[thm-continuity-from-below-for-measures]])

## Proof

**Proof technique:** direct.

1.1 By [L2], [L1, L2]

$$\mu_c([0,1]) = F_c(1) - F_c(0^-) = 1 - 0 = 1.$$

Likewise, for every $n \ge 1$,
$\mu_c((1,n]) = F_c(n) - F_c(1) = 0$ and
$\mu_c((-n,0)) = F_c(0^-) - F_c(-n) = 0$. So all mass lies in $[0,1]$, and
$\mu_c$ is a probability measure. [L1, L2]

2.1 If $x \in (0,1]$, then [L1] makes $F_c(x^-) = F_c(x)$, so [L2] gives [step 1.1, L1, L2]
$\mu_c(\{x\}) = 0$. The same holds for $x < 0$ and $x > 1$ because $F_c$ is
constant on $(-\infty,0)$ and on $(1,\infty)$, and it holds at $x=0$ because
$F_c(0)=F_c(0^-)=0$. Hence $\mu_c$ is atomless. [step 1.1, L1, L2]

3.1 Every point of $[0,1] \setminus C$ lies in a complementary gap $(u,v)$ of [step 2.1, L1, L2, L4, algebra]
$C$, and [L1] makes $c$ constant on $[u,v]$. Therefore [L2] gives

$$\mu_c((u,v)) = F_c(v^-) - F_c(u) = c(v) - c(u) = 0.$$

Because $[0,1] \setminus C$ is the countable union of those disjoint gaps,
countable additivity gives $\mu_c([0,1] \setminus C) = 0$. Together with
step 1.1 this yields $\mu_c(\mathbb{R} \setminus C)=0$. [step 2.1, L1, L2, L4, algebra]

4.1 By [L3], $\lambda(C)=0$, while step 3.1 shows that $\mu_c$ is concentrated [step 1.1, step 2.1, step 3.1, L3]
on $C$. That is exactly the statement that $\mu_c$ is singular with respect to
Lebesgue measure. [step 1.1, step 2.1, step 3.1, L3]

5.1 Steps 1.1 through 4.1 prove the probability, atomless, concentration, and [step 1.1, step 2.1, step 3.1, step 4.1]
singularity claims. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
