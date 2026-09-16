---
id: ex-bounded-operators-form-a-noncommutative-banach-algebra
kind: example
title: Bounded operators form a noncommutative Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, thm-bounded-operator-space-is-banach, cor-finite-dimensional-normed-spaces-are-banach, def-bounded-linear-operator, def-operator-norm]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1.1 examples, printed pp. 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Let $X$ be a nonzero complex Banach space and let $\mathcal B(X)$ be the
bounded linear operators on $X$ with the operator norm
([[def-bounded-linear-operator]], [[def-operator-norm]]). Then $\mathcal B(X)$
is a unital complex Banach algebra ([[def-unital-banach-algebra]]), which is
noncommutative as soon as $X$ is at least two-dimensional. In particular, on
the two-dimensional complex Banach space $\mathbb C^2$ with the maximum norm
the operators

$$U(x,y) := (y,0), \qquad V(x,y) := (0,x)$$

satisfy $UV \ne VU$.

## Facts & Assumptions

**Given:** A nonzero complex Banach space $X$; the space $\mathcal B(X)$ of bounded linear operators with the operator norm $\|\cdot\|$.

[L1] Composition of bounded operators is bounded and associative, $1_X$ is bounded, and the operator norm is submultiplicative: $\|ST\| \le \|S\|\,\|T\|$, with $\|1_X\| = 1$ because $X \ne \{0\}$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[L2] If $Y$ is a Banach space then $\mathcal B(X,Y)$ is Banach for the operator norm ([[thm-bounded-operator-space-is-banach]]).

[L3] Every finite-dimensional normed space is complete, in particular $\mathbb C^2$ with the maximum norm is a Banach space ([[cor-finite-dimensional-normed-spaces-are-banach]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal B(X)$ is an associative complex algebra under composition and pointwise linear structure, with unit $1_X$; by [L1] the norm is submultiplicative and $\|1_X\| = 1$, and by [L2] with $Y = X$ it is complete; hence it is a unital complex Banach algebra. [L1, L2]

2.1 The space $\mathbb C^2$ with the maximum norm is a nonzero complex Banach space by [L3], so the argument of [step 1.1] applies to it and $\mathcal B(\mathbb C^2)$ is a unital complex Banach algebra; for the explicit operators $U,V$ on that space $\|U(x,y)\| = \|(y,0)\| = |y| \le \|(x,y)\|$ and $\|V(x,y)\| = |x| \le \|(x,y)\|$, so both are bounded, and $UV(x,y) = U(0,x) = (x,0)$ while $VU(x,y) = V(y,0) = (0,y)$, so $UV \ne VU$ although $UV$ and $VU$ are the two coordinate projections. [step 1.1, L1, L3, algebra]

3.1 By [L3] the space $\mathbb C^2$ is a nonzero complex Banach space, so [step 1.1] applies to it, and [step 2.1] exhibits two elements of $\mathcal B(\mathbb C^2)$ that do not commute; hence $\mathcal B(\mathbb C^2)$, and therefore $\mathcal B(X)$ for every $X$ of dimension at least two, is a noncommutative unital Banach algebra. [step 1.1, step 2.1, L3] ∎
