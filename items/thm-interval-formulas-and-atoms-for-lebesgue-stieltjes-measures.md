---
id: thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures
kind: theorem
title: "Interval formulas and atoms for a Lebesgue-Stieltjes measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-atom-of-a-measure-on-r, def-one-sided-limits, thm-continuity-from-above-for-measures, thm-continuity-from-below-for-measures, thm-lebesgue-stieltjes-correspondence-with-distribution-functions, cor-bv-discontinuities-are-countable-and-of-first-kind, thm-countable-union-of-countable, prop-measure-of-a-set-difference]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Section 2.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let
$F : \mathbb{R} \to \mathbb{R}$ be nondecreasing and right-continuous, and let
$\mu_F$ be its Lebesgue-Stieltjes measure. Then for every $a < b$,

$$\mu_F((a,b)) = F(b^-) - F(a),$$

$$\mu_F([a,b]) = F(b) - F(a^-),$$

$$\mu_F([a,b)) = F(b^-) - F(a^-),$$

and

$$\mu_F(\{a\}) = F(a) - F(a^-).$$

Consequently $a$ is an atom of $\mu_F$ in the sense of
[[def-atom-of-a-measure-on-r]] if and only if $F(a) > F(a^-)$, and the set of
atoms of $\mu_F$ is at most countable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a nondecreasing right-continuous
function $F : \mathbb{R} \to \mathbb{R}$, its Lebesgue-Stieltjes measure
$\mu_F$, and real numbers $a < b$.

[L1] Assuming Countable Choice, the measure $\mu_F$ satisfies
$\mu_F((u,v]) = F(v) - F(u)$ for all $u < v$.
([[thm-lebesgue-stieltjes-correspondence-with-distribution-functions]])

[L2] Measures are continuous from below along increasing set limits; they are
continuous from above along decreasing set limits when one set has finite
measure ([[thm-continuity-from-below-for-measures]],
[[thm-continuity-from-above-for-measures]]).

[L3] For a bounded-variation function on a compact interval, every well-posed
one-sided limit exists, every discontinuity is of the first kind, and there are
at most countably many discontinuities
([[cor-bv-discontinuities-are-countable-and-of-first-kind]]).

[L4] Assuming Countable Choice, a countable union of at most countable sets is
at most countable ([[thm-countable-union-of-countable]]).

[L5] A point $x$ is an atom of a Borel measure $\mu$ exactly when
$\mu(\{x\})>0$ ([[def-atom-of-a-measure-on-r]]).

[L6] If $A\subseteq B$ are measurable and $\mu(B)<+\infty$, then
$\mu(B\setminus A)=\mu(B)-\mu(A)$
([[prop-measure-of-a-set-difference]]).

## Proof

**Proof technique:** direct.

1.1 Put $t_n := b - (b-a)/(n+2)$. Then $a < t_n < b$ for every $n$ and $t_n \uparrow b$. [L1, L2, L3, algebra]

Because $(a,b) = \bigcup_n (a,t_n]$, continuity from below and [L1] give

$$\mu_F((a,b)) = \lim_n \mu_F((a,t_n]) = \lim_n \big(F(t_n) - F(a)\big) = F(b^-) - F(a).$$

Here $F|_{[a,b]}$ has bounded variation because it is nondecreasing, so [L3]
ensures that the displayed left limit exists. [L1, L2, L3, algebra]

2.1 Put $s_n := a - 1/(n+1)$. Then $s_n < a$ and $s_n \uparrow a$, while the intervals $(s_n,b]$ decrease to $[a,b]$. [step 1.1, L1, L2, L3]

The first interval has finite measure because $F$ is real-valued, so continuity from above and [L1] give

$$\mu_F([a,b]) = \lim_n \mu_F((s_n,b]) = \lim_n \big(F(b) - F(s_n)\big) = F(b) - F(a^-).$$

The restriction $F|_{[a-1,a]}$ has bounded variation because it is
nondecreasing, so [L3] ensures that the displayed left limit exists.
[L1, L2, L3, algebra]

3.1 The intervals $(s_n,a]$ decrease to $\{a\}$, and continuity from above gives $\mu_F(\{a\})=F(a)-F(a^-)$. [step 2.1, L1, L2, L3]

Indeed, $(s_0,a]$ has finite measure and
$$\mu_F(\{a\})=\lim_n\mu_F((s_n,a])=\lim_n\big(F(a)-F(s_n)\big)=F(a)-F(a^-).$$
[step 2.1, L1, L2, L3]

The same argument gives $\mu_F(\{b\})=F(b)-F(b^-)$. Therefore

$$\mu_F([a,b)) = \mu_F([a,b]) - \mu_F(\{b\}) = F(b^-) - F(a^-).$$

Together with step 1.1, this proves all four interval formulas. [step 1.1, step 2.1, step 3.1, L1, L6, algebra]

4.1 By step 3.1 and [L5], the point $a$ is an atom of $\mu_F$ exactly when $\mu_F(\{a\}) = F(a) - F(a^-) > 0$, which is exactly the jump condition $F(a) > F(a^-)$. [step 3.1, L5]

5.1 Fix $m \ge 1$. The restriction $F|_{[-m,m]}$ is nondecreasing, hence of bounded variation on $[-m,m]$. [step 4.1, L3]

So [L3] makes its discontinuity set at most countable. Every atom of $\mu_F$
in $(-m,m)$ is an interior jump point by step 4.1, hence lies in that countable
discontinuity set. Therefore the atoms in $(-m,m)$ are at most countable. By
[L4], their union over $m\ge1$ is at most countable, and this union contains
every atom of $\mu_F$. [given, step 4.1, L3, L4]

6.1 Steps 1.1 through 5.1 prove the claimed interval formulas, the atom criterion, and the countability of the atom set. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1]

[step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
