---
id: lem-closed-ideal-quotient-is-a-banach-algebra
kind: lemma
title: Closed ideal quotient is a Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, thm-quotient-of-banach-by-closed-subspace-is-banach, lem-neumann-series, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Proposition 3.1.4, printed pp. 54–57"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.58 and §5.5.1, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $A$ be a
unital complex Banach algebra ([[def-unital-banach-algebra]]) and let
$I \subseteq A$ be a **proper** two-sided ideal which is closed in the norm of
$A$. Then the quotient $A/I$, with the quotient norm and coset multiplication,
is a nonzero unital complex Banach algebra with unit $1 + I$ of norm one, and
the quotient map $A \to A/I$ is a unital algebra homomorphism of norm one.

The hypothesis of Countable Choice is inherited from the completeness of the
quotient ([[thm-quotient-of-banach-by-closed-subspace-is-banach]]) and is spent
nowhere else; the algebraic verification is a theorem of ZF.

## Facts & Assumptions

**Given:** A proper closed two-sided ideal $I$ of a unital complex Banach algebra $A$, and the quotient vector space $A/I$ with quotient norm $\|a+I\| = \inf\{\|a-x\| : x \in I\}$.

[L1] $A$ is a complex vector space with an associative bilinear multiplication, a complete submultiplicative norm, a unit $1$ with $1a = a1 = a$ and $\|1\| = 1$, and $0 \ne 1$ ([[def-unital-banach-algebra]]).

[L2] $I$ is a linear subspace of $A$ with $ax \in I$ and $xa \in I$ for all $a \in A$, $x \in I$ (two-sided ideal).

[L3] Under Countable Choice, for a Banach space $X$ and a closed linear subspace $M \le X$ the quotient $X/M$ is Banach for the quotient norm ([[thm-quotient-of-banach-by-closed-subspace-is-banach]], [[def-countable-choice]]).

[L4] If $\|y\| < 1$ then $1 - y$ is invertible in $A$, with two-sided inverse $\sum_{n\ge0}y^n$ ([[lem-neumann-series]]).

## Proof

**Proof technique:** direct.

1.1 Coset multiplication $(a+I)(b+I) := ab+I$ is well defined: if $a' = a+x$ and $b' = b+y$ with $x,y \in I$, then $a'b' = ab + ay + xb + xy$, and $ay, xb, xy \in I$ because $I$ is a two-sided ideal; hence $a'b' - ab \in I$ and $a'b'+I = ab+I$. [L2, algebra]

1.2 $A/I$ is a complex vector space with the quotient norm $\|a+I\| = \inf_{x\in I}\|a-x\|$, and it is complete, hence a Banach space, by [L3] applied to the closed subspace $I \le A$ under Countable Choice. [L2, L3]

1.3 $A/I$ is nonzero: were $1+I = 0+I$ then $1 \in I$, and then $a = a\cdot 1 \in I$ for every $a$, so $I = A$, contradicting that $I$ is proper. [L1, L2]

2.1 Coset multiplication is complex-bilinear: it is the composition of the bilinear product on $A$ with the linear quotient map, so $(\lambda a + \mu a')b + I = \lambda(ab+I) + \mu(a'b+I)$ and similarly in the second variable. [step 1.1, L1]

2.2 **Submultiplicativity.** For $a,b \in A$ and $x,y \in I$ one has $ab - (a-x)(b-y) = ay + xb - xy \in I$, so $(a-x)(b-y) \in ab+I$ and hence $\|ab+I\| \le \|(a-x)(b-y)\| \le \|a-x\|\,\|b-y\|$; given $\varepsilon>0$ choose $x,y \in I$ with $\|a-x\| \le \|a+I\|+\varepsilon$ and $\|b-y\| \le \|b+I\|+\varepsilon$ (the two infima are approximated independently), which gives $\|ab+I\| \le (\|a+I\|+\varepsilon)(\|b+I\|+\varepsilon)$ and hence $\|(a+I)(b+I)\| \le \|a+I\|\,\|b+I\|$ after $\varepsilon \downarrow 0$. [step 1.1, step 1.2, L1, L2, algebra]

2.3 **The quotient unit is normalized.** The coset $1+I$ satisfies $(1+I)(a+I) = a+I = (a+I)(1+I)$ by [L1], so it is a two-sided identity, and $\|1+I\| \le \|1-0\| = 1$ since $0 \in I$; conversely if $\|1+I\| < 1$ there is $x \in I$ with $\|1-x\| < 1$, so $x = 1 - (1-x)$ is invertible by [L4], whence $1 = x^{-1}x \in I$ and $I = A$ by [step 1.3], a contradiction. Hence $\|1+I\| = 1$. [step 1.3, L1, L2, L4, algebra]

3.1 By [step 1.2] $A/I$ is a Banach space, by [step 2.1] and [step 1.1] its multiplication is an associative complex-bilinear product (associativity descends from $A$ cosetwise), by [step 2.2] the quotient norm is submultiplicative, and by [step 2.3] the coset $1+I$ is an identity of norm one; together with [step 1.3] this says that $A/I$ is a nonzero unital complex Banach algebra. The quotient map $q(a) = a+I$ is linear, multiplicative, unital and satisfies $\|q\| \le 1$ with $\|q(1)\| = 1$, so $\|q\| = 1$. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Why the ideal must be closed.** Completeness of the quotient is exactly what fails for a non-closed ideal; the argument above uses closedness only through [L3].
- **Countable Choice is genuinely used.** The completeness of the quotient is inherited from the published quotient theorem, which assumes $\mathrm{AC}_\omega$; no other step selects from infinitely many nonempty sets, and the two near-minimizing representatives in step 2.2 are chosen for a single pair $(a,b)$ at each fixed $\varepsilon$.
- **Properness is used twice.** It gives $1 \notin I$ (nonzero quotient) and the distance bound $\|1+I\| \ge 1$ through the Neumann series.
