---
id: ex-bounded-operators-form-a-noncommutative-banach-algebra
kind: example
title: Bounded operators form a Banach algebra, noncommutative in dimension at least two
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, thm-bounded-operator-space-is-banach, cor-finite-dimensional-normed-spaces-are-banach, def-bounded-linear-operator, def-operator-norm, cor-finite-dimensional-subspaces-are-complemented, thm-complemented-subspace-iff-range-of-a-bounded-projection, cor-linear-maps-with-finite-dimensional-domain-are-bounded, def-axiom-of-choice]
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a nonzero
complex Banach space and let $\mathcal B(X)$ be the bounded linear operators on
$X$ with the operator norm ([[def-bounded-linear-operator]],
[[def-operator-norm]]). Then $\mathcal B(X)$ is a unital complex Banach algebra
([[def-unital-banach-algebra]]), which is noncommutative as soon as $X$ is at
least two-dimensional: the two-dimensional case is exhibited explicitly below,
and the general case is transferred to $X$ through a bounded projection onto a
two-dimensional subspace, which is the one place where the Axiom of Choice is
used ([[cor-finite-dimensional-subspaces-are-complemented]]). In particular, on
the two-dimensional complex Banach space $\mathbb C^2$ with the maximum norm
the operators

$$U(x,y) := (y,0), \qquad V(x,y) := (0,x)$$

satisfy $UV \ne VU$.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero complex Banach space $X$, and the space $\mathcal B(X)$ of bounded linear operators with the operator norm $\|\cdot\|$.

[L1] Composition of bounded operators is bounded and associative, $1_X$ is bounded, and the operator norm is submultiplicative: $\|ST\| \le \|S\|\,\|T\|$, with $\|1_X\| = 1$ because $X \ne \{0\}$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

[L2] If $Y$ is a Banach space then $\mathcal B(X,Y)$ is Banach for the operator norm ([[thm-bounded-operator-space-is-banach]]).

[L3] Every finite-dimensional normed space is complete, in particular $\mathbb C^2$ with the maximum norm is a Banach space ([[cor-finite-dimensional-normed-spaces-are-banach]]).

[L4] Every finite-dimensional subspace $M$ of a normed space $X$ is complemented, that is, there is a bounded projection $P : X \to X$ whose range is exactly $M$; such a $P$ satisfies $P|_M = \mathrm{id}_M$ ([[cor-finite-dimensional-subspaces-are-complemented]], [[thm-complemented-subspace-iff-range-of-a-bounded-projection]]).

[L5] A linear map with a finite-dimensional normed domain is bounded, so every linear map $M \to M$ on a finite-dimensional normed space $M$ is a bounded operator ([[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]).

[A1] The standing hypothesis is the Axiom of Choice, used exactly once and only through [L4], whose proof extends the coordinate functionals of a finite-dimensional subspace to the whole space by Hahn–Banach ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal B(X)$ is an associative complex algebra under composition and pointwise linear structure, with unit $1_X$; by [L1] the norm is submultiplicative and $\|1_X\| = 1$, and by [L2] with $Y = X$ it is complete; hence it is a unital complex Banach algebra. [L1, L2]

2.1 The space $\mathbb C^2$ with the maximum norm is a nonzero complex Banach space by [L3], so the argument of [step 1.1] applies to it and $\mathcal B(\mathbb C^2)$ is a unital complex Banach algebra; for the explicit operators $U,V$ on that space $\|U(x,y)\| = \|(y,0)\| = |y| \le \|(x,y)\|$ and $\|V(x,y)\| = |x| \le \|(x,y)\|$, so both are bounded, and $UV(x,y) = U(0,x) = (x,0)$ while $VU(x,y) = V(y,0) = (0,y)$, so $UV \ne VU$ although $UV$ and $VU$ are the two coordinate projections. [step 1.1, L1, L3, algebra]

3.1 Now let $\dim X \ge 2$ and choose linearly independent $u,v \in X$; put $M := \operatorname{span}\{u,v\}$, a two-dimensional subspace, and let $P$ be a bounded projection with range $M$ by [L4]. The linear maps $S,T : M \to M$ defined by $S(u) = v$, $S(v) = 0$ and $T(u) = 0$, $T(v) = u$ are bounded by [L5], and they do not commute, since $ST(u) = S(0) = 0$ while $TS(u) = T(v) = u \ne 0$. Then $S \circ P$ and $T \circ P$ are bounded operators on $X$ by [L1], and $P \circ S = S$, $P \circ T = T$ because $S$ and $T$ take values in $M$ while $P$ is the identity on $M$; hence $(S\circ P)(T\circ P) = (S\circ T)\circ P$ and $(T\circ P)(S\circ P) = (T\circ S)\circ P$, and these differ because the first sends $u$ to $(S\circ T)(u) = 0$ while the second sends $u$ to $(T\circ S)(u) = u \ne 0$. So $\mathcal B(X)$ is noncommutative for every $X$ with $\dim X \ge 2$, while [step 2.1] provides the explicit witness on $\mathbb C^2$; by [step 1.1] the algebra is unital and Banach. [step 1.1, step 2.1, L1, L4, L5, A1, algebra] ∎
