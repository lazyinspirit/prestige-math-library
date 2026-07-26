---
id: lem-mct-implies-lub
kind: lemma
title: "The monotone convergence property plus the Archimedean property imply the least-upper-bound property"
status: published
origin: session
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-complete-ordered-field, def-upper-bound, thm-recursion, thm-induction-principle, thm-nat-linear-order, def-integer-power, lem-bernoulli-inequality, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-abs-value, lem-of-triangle-inequality, lem-of-sequence-basics, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with the
monotone convergence property (MCT) of [[def-completeness-properties]]. Then $F$
has the least-upper-bound property (LUB), that is, $F$ is a complete ordered
field ([[def-complete-ordered-field]]).

The Archimedean hypothesis is stated for symmetry with the other implications on
this page and is in fact redundant here: (MCT) implies it on its own
([[lem-mct-implies-archimedean]]).

The supremum is produced by bisection between an upper bound and a non-upper
bound, and it is identified as a limit of both bracketing sequences.

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (MCT), a nonempty $S \subseteq F$ bounded above by some $B \in F$, and an element $s_0 \in S$.

[L1] The properties (MCT) and (LUB), and least upper bounds: $u$ is an upper bound of $S$ when $s \le u$ for all $s \in S$, and a least upper bound when moreover $u \le v$ for every upper bound $v$; (LUB) says every nonempty subset bounded above has one ([[def-completeness-properties]], [[def-complete-ordered-field]], [[def-upper-bound]]).

[L2] Sequences in an ordered field: nondecreasing, nonincreasing, bounded above, and convergence in $F$ ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $z \in F$ there is a natural $n \ge 1$ with $z < n \cdot 1_F$ ([[def-archimedean-field]]); the canonical naturals are positive for $n \ge 1$ and satisfy $n \cdot 1_F \le m \cdot 1_F$ for $n \le m$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]), induction principle ([[thm-induction-principle]]), and totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]).

[L5] Powers and Bernoulli: $a^0 = 1$, $a^{n+1} = a^n a$ ([[def-integer-power]]); $(1_F + x)^n \ge 1_F + n \cdot x$ for $x \ge -1_F$ ([[lem-bernoulli-inequality]]).

[L6] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-ordered-field]]).

[L7] Absolute value: $|u| \ge 0$, $|u| = |-u|$, $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); and $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L8] Limits in an ordered field preserve non-strict inequalities (clause 2 of [[lem-of-sequence-basics]]).

## Proof

**Proof technique:** constructive.

1.1 Put $u_0 := B$ and $l_0 := s_0 - 1_F$; then $u_0$ is an upper bound of $S$, $l_0$ is not one because $s_0 \in S$ and $l_0 < s_0$, and $l_0 < s_0 \le u_0$. [L1, L6, construct]

1.2 Writing $m(l,u) := (l + u)\,(2 \cdot 1_F)^{-1}$, define $f : F \times F \to F \times F$ by $f(l,u) := (l, m(l,u))$ when $m(l,u)$ is an upper bound of $S$ and $f(l,u) := (m(l,u), u)$ otherwise; the recursion theorem applied to $F \times F$, the element $(l_0, u_0)$ and $f$ gives a unique $g : \mathbb{N} \to F \times F$ with $g(0) = (l_0,u_0)$ and $g(n+1) = f(g(n))$, and we write $g(n) = (l_n, u_n)$. [L4, L6, construct]

1.3 A constant sequence in $F$ converges to its value, since $|a - a| = 0 < \varepsilon$ for every $\varepsilon > 0$. [L2, L7]

2.1 By induction on $n$: $u_n$ is an upper bound of $S$; $l_n$ is not an upper bound of $S$; $l_n \le l_{n+1} \le u_{n+1} \le u_n$; and $u_n - l_n = (u_0 - l_0)\,((2 \cdot 1_F)^n)^{-1}$. The base case is step 1.1 together with $(2 \cdot 1_F)^0 = 1_F$; for the step, $m := m(l_n,u_n)$ satisfies $l_n \le m \le u_n$ and $m - l_n = u_n - m = (u_n - l_n)(2 \cdot 1_F)^{-1}$, and whichever of the two clauses of $f$ applies, the retained pair again brackets $S$ in the stated sense with half the previous length. [step 1.1, step 1.2, L1, L5, L6]

3.1 The lengths tend to $0$ in $F$: given $\varepsilon > 0$, the element $(u_0 - l_0)\varepsilon^{-1}$ is positive, so [L3] supplies $n \ge 1$ with $(u_0-l_0)\varepsilon^{-1} < n \cdot 1_F$, and for every $p \ge n$ Bernoulli at $x = 1_F$ gives $(2 \cdot 1_F)^p \ge 1_F + p \cdot 1_F > p \cdot 1_F \ge n \cdot 1_F > (u_0-l_0)\varepsilon^{-1} > 0$, whence $u_p - l_p = (u_0-l_0)((2 \cdot 1_F)^p)^{-1} < \varepsilon$. [step 2.1, L3, L5, L6]

3.2 The sequence $(-u_n)$ is nondecreasing and is bounded above by $-l_0$, since $l_0 \le l_n \le u_n$ for every $n$; so (MCT) gives $w \in F$ with $-u_n \to w$, and putting $c := -w$ one has $|u_n - c| = |{-}((-u_n) - w)| = |(-u_n) - w|$, so $u_n \to c$ in $F$. [step 2.1, L1, L2, L6, L7]

4.1 $l_n \to c$ in $F$: given $\varepsilon > 0$, step 3.1 supplies $N_1$ with $u_n - l_n < \varepsilon/2$ for $n \ge N_1$ and step 3.2 supplies $N_2$ with $|u_n - c| < \varepsilon/2$ for $n \ge N_2$, and for $n$ beyond both, $|l_n - c| \le |l_n - u_n| + |u_n - c| = (u_n - l_n) + |u_n - c| < \varepsilon$. [step 3.1, step 3.2, L2, L4, L6, L7]

4.2 $c$ is an upper bound of $S$: for $s \in S$ one has $s \le u_n$ for every $n$ by step 2.1, and the constant sequence with value $s$ converges to $s$ while $u_n \to c$, so $s \le c$ by [L8]. [step 1.3, step 2.1, step 3.2, L1, L8]

5.1 $c$ is the least upper bound: let $v$ be any upper bound of $S$; for each $n$ the element $l_n$ is not an upper bound, so some $s \in S$ has $l_n < s \le v$ and hence $l_n \le v$; since $l_n \to c$ and the constant sequence with value $v$ converges to $v$, [L8] gives $c \le v$. [step 1.3, step 2.1, step 4.1, L1, L6, L8]

6.1 So $c = \sup S$ exists in $F$; as $S$ was an arbitrary nonempty subset bounded above, $F$ has (LUB) and is a complete ordered field. [step 4.2, step 5.1, L1, discharge-construct] ∎

## Remarks

- **Both bracketing sequences are needed.** The upper endpoints give the
  upper-bound half of the conclusion and the lower endpoints give minimality;
  the shrinking lengths are what force the two to have the same limit, and that
  is the only place the Archimedean property is used.

- **Nonincreasing sequences are handled by reflection**, as announced in
  [[def-completeness-properties]]: (MCT) is stated only for nondecreasing
  sequences, and step 3.2 applies it to $(-u_n)$ rather than assuming a second
  form of the property.

- **No choice is used.** The bisection rule keeps the left half exactly when the
  midpoint is an upper bound of $S$, which is a definite condition, so $f$ is a
  function and [[thm-recursion]] applies.
