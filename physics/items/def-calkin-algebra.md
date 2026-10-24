---
id: def-calkin-algebra
kind: definition
title: Calkin algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-unital-banach-algebra", "thm-quotient-of-banach-by-closed-subspace-is-banach", "thm-norm-limit-of-compact-operators-is-compact", "lem-compositions-with-a-compact-operator-are-compact", "lem-linear-combinations-of-compact-operators-are-compact", "thm-bounded-operator-space-is-banach", "cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact", "def-countable-choice", "def-compact-linear-operator", "def-operator-norm", "lem-finite-rank-operators-are-compact"]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.1 (Banach algebras) used only for the quotient algebra conventions of this definition"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $X$ be an
infinite-dimensional complex Banach space and let $\mathcal B(X)$ be the Banach
algebra of bounded operators ([[thm-bounded-operator-space-is-banach]],
[[def-operator-norm]]). Let $\mathcal K(X) \subseteq \mathcal B(X)$ be the set
of compact operators ([[def-compact-linear-operator]]). Then:

* $\mathcal K(X)$ is a linear subspace of $\mathcal B(X)$
  ([[lem-linear-combinations-of-compact-operators-are-compact]]);
* it is a two-sided ideal: if $K$ is compact and $A,B$ are bounded then $AK$
  and $KB$ are compact
  ([[lem-compositions-with-a-compact-operator-are-compact]]);
* it is closed in the operator norm: a norm limit of compact operators is
  compact ([[thm-norm-limit-of-compact-operators-is-compact]], which is stated
  under Countable Choice and requires the target to be Banach, as here). More explicitly, if $T$ lies in the norm closure, Countable Choice selects $K_n\in\mathcal K(X)$ with $\|K_n-T\|<1/n$ for $n\ge1$; the theorem makes $T$ compact;
* and it is proper: the identity $I_X$ is not compact precisely because $X$ is
  infinite-dimensional
  ([[cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact]]).

The **Calkin algebra of $X$** is the quotient algebra

$$\mathcal C(X) \;:=\; \mathcal B(X)/\mathcal K(X),$$

with the quotient vector-space structure, the quotient norm
$\|A + \mathcal K(X)\| := \inf\{\|A - K\| : K \in \mathcal K(X)\}$, and the
multiplication
$(A+\mathcal K)(B+\mathcal K) := AB + \mathcal K$. Multiplication is
well-defined because $\mathcal K(X)$ is a two-sided ideal, and it is
submultiplicative: for $K_1,K_2 \in \mathcal K$ and representatives $A,B$,
$(A+K_1)(B+K_2) = AB + (AK_2 + K_1B + K_1K_2)$ with the bracket in
$\mathcal K$, so taking infima gives
$\|(A+\mathcal K)(B+\mathcal K)\| \le \|A+\mathcal K\|\,\|B+\mathcal K\|$.
The quotient is complete for the quotient norm by
[[thm-quotient-of-banach-by-closed-subspace-is-banach]]. Its unit is
$1 := I_X + \mathcal K(X)$.

## Remarks

- **The unit has norm one and is nonzero.** The quotient norm satisfies
  $\|I_X+\mathcal K\|\le\|I_X\|=1$. The quotient norm is definite because
  $\mathcal K$ is closed, and $I_X\notin\mathcal K$, so $c=\|I_X+\mathcal K\|>0$.
  The unit is idempotent and the quotient norm is submultiplicative, giving
  $c\le c^2$. Division by $c$ yields $c\ge1$, hence $c=1$.

- **Finite-dimensional $X$ is excluded, not normalized away.** If $\dim X <
  \infty$ then every bounded operator has finite-dimensional range and is compact
  ([[lem-finite-rank-operators-are-compact]]), $\mathcal K(X) = \mathcal B(X)$ and
  the quotient is the zero algebra, which carries no unit in the sense of
  [[def-unital-banach-algebra]]. The definition therefore restricts to
  infinite-dimensional $X$; the finite-dimensional case is the zero quotient and
  is not called a Calkin algebra here.

- **Where Countable Choice is spent.** It is used in the norm-limit
  compactness theorem, in selecting the approximating sequence above to turn
  sequential closure into norm closure, and in quotient completeness.
  The ideal formulas, identity noncompactness and the unit-norm argument
  introduce no further choice beyond those supplied closed-quotient facts.

- **The Calkin algebra forgets compact perturbations.** Two operators have the
  same coset exactly when they differ by
  a compact operator, so $\mathcal C(X)$ records the "Fredholm part" of
  $\mathcal B(X)$; this is what makes the Atkinson theorem a statement about
  invertibility in $\mathcal C(X)$
  ([[cor-atkinson-in-calkin-algebra-language]]).
