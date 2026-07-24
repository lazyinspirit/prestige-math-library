---
id: lem-cut-reciprocal
kind: lemma
title: "For a positive cut $A$, the reciprocal $A^{-1}$ satisfies $A \\cdot A^{-1} = 1^{*}$"
status: published
origin: session
deps: [def-cut-multiplication, def-dedekind-cut, def-cut-order, lem-rat-archimedean, thm-rat-field]
aliases: []
landmark: false
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

For $A > 0^{*}$, the reciprocal $A^{-1}$ ([[def-cut-multiplication]]) is a
Dedekind cut with $A^{-1} > 0^{*}$, and $A \cdot A^{-1} = 1^{*}$.

## Facts & Assumptions

**Given:** A cut $A$ with $A > 0^{*}$, and the multiplicative identity $1^{*} = \{ r \in \mathbb{Q} : r < 1 \}$.

[L1] Nonnegative product: for $A, B > 0^{*}$, $A \cdot B = \{q \le 0\} \cup \{ab : a \in A,\, b \in B,\, a > 0,\, b > 0\}$ ([[def-cut-multiplication]]).

[L2] Reciprocal: for $A > 0^{*}$, $A^{-1} = \{p \le 0\} \cup \{\, p > 0 : \exists\, s \in \mathbb{Q},\ s > 0,\ s \notin A,\ p < 1/s \,\}$ ([[def-cut-multiplication]]).

[L3] $A > 0^{*}$ means $A$ contains a positive rational; and every cut is a proper, downward-closed set of rationals with no greatest element ([[def-cut-order]], [[def-dedekind-cut]]).

[L4] $\mathbb{Q}$ is a field: rational addition and multiplication are commutative and associative, multiplication distributes over addition, the order is compatible with the arithmetic, and every nonzero rational is invertible ([[thm-rat-field]]).

[L6] Well-ordering of $\mathbb{N}$: every nonempty set of natural numbers has a least element (a foundational property of $\mathbb{N}$, the assumed base of the construction).

[L5] Rational power growth: for a rational $y > 1$ one has $y^{n} \ge 1 + n(y-1)$ for every natural $n \ge 1$ (Bernoulli, by induction from $\mathbb{Q}$ arithmetic), and by the Archimedean property every rational is exceeded by some such power; since a cut is proper it omits a rational upper bound, so for any $a_{0} > 0$ some $a_{0} y^{n} \notin A$ ([[lem-rat-archimedean]], [[def-dedekind-cut]]).

## Proof

**Proof technique:** direct.

1.1 $A^{-1}$ is a cut with $A^{-1} > 0^{*}$: since $A > 0^{*}$ contains $0$ and hence, by downward closure, all rationals $\le 0$, every $s \notin A$ is positive; fix $a_{0} \in A$ with $a_{0} > 0$, so any positive $p \in A^{-1}$ has $p < 1/s < 1/a_{0}$ (its witness $s \notin A$ satisfies $s > a_{0}$), making $A^{-1}$ proper; it is nonempty (it contains $0$) and downward closed: a $q \le 0$ lies in the $\{p \le 0\}$ clause, and if $0 < q < p$ with $p \in A^{-1}$ carrying witness $s$ ($p < 1/s$) then $q < p < 1/s$, so $q \in A^{-1}$ with the same witness $s$; it contains a positive $p$ (take any $s \notin A$ and $0 < p < 1/s$), and has no greatest element: a $p \le 0$ is exceeded by the positive element just exhibited, while any positive $p \in A^{-1}$ carries a witness $s > 0$, $s \notin A$ with $p < 1/s$, and the rational $p' = (p + 1/s)/2$ satisfies $p < p' < 1/s$, so $p'$ lies in $A^{-1}$ with the same witness $s$ yet $p' > p$. [L2, L3, L4]

1.2 Inclusion $A \cdot A^{-1} \subseteq 1^{*}$: any $q \le 0$ in $A \cdot A^{-1}$ lies in $1^{*}$, and if $a \in A$, $p \in A^{-1}$ with $a, p > 0$, choose $s \notin A$, $s > 0$, $p < 1/s$, so $a < s$ (as $a \in A$, $s \notin A$) and $ap < s \cdot (1/s) = 1$, giving $ap \in 1^{*}$. [L1, L2, L3, L4]

1.3 For the reverse inclusion fix a target $x$ with $0 < x < 1$: pick a rational $t$ with $x < t < 1$ (betweenness in $\mathbb{Q}$) and set $y := 1/t$, so $y > 1$; choose $a_{0} \in A$ with $a_{0} > 0$ (as $A > 0^{*}$); by rational power growth some power $a_{0} y^{n} \notin A$, so $\{\, n \ge 1 : a_{0} y^{n} \notin A \,\}$ is a nonempty set of naturals. [L3, L4, L5]

2.1 Let $n \ge 1$ be the least natural with $a_{0} y^{n} \notin A$ (nonempty by step 1.3; $n \ge 1$ since $a_{0} y^{0} = a_{0} \in A$); by minimality $a := a_{0} y^{n-1} \in A$ with $a > 0$, while $s := a_{0} y^{n} = a \cdot y \notin A$ with $s > 0$. [L4, L6, step 1.3, choose]

3.1 Set $p := x/a > 0$; since $x < t = 1/y$ gives $1/x > y$, we get $1/p = a/x > a \cdot y = s$, so $p < 1/s$ with $s > 0$, $s \notin A$, whence $p \in A^{-1}$ by the reciprocal's definition; then $x = a \cdot p$ with $a \in A$, $p \in A^{-1}$, $a, p > 0$, so $x \in A \cdot A^{-1}$, and with the $\{q \le 0\}$ clause this yields $1^{*} \subseteq A \cdot A^{-1}$. [L1, L2, L4, step 1.1, step 1.3, step 2.1, algebra]

4.1 Combining the two inclusions gives $A \cdot A^{-1} = 1^{*}$, and by step 1.1 the reciprocal $A^{-1}$ is a Dedekind cut with $A^{-1} > 0^{*}$. [step 1.1, step 1.2, step 3.1] ∎
