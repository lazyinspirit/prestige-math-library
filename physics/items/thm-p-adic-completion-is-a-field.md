---
id: thm-p-adic-completion-is-a-field
kind: theorem
title: "The p-adic completion is a complete valued field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field-of-p-adic-numbers, thm-metric-completion-exists,
       thm-p-adic-absolute-value-is-nonarchimedean,
       thm-rationals-countable, thm-well-ordering-principle,
       def-metric-interior-closure-boundary, def-metric-ball,
       def-cauchy-in-metric, def-metric-convergence,
       lem-geometric-sequence-null, lem-limit-preserves-order]
proof_strategy: constructive
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 8, Theorem 8.1"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb Q_p$ be the Cauchy-sequence quotient of
[[def-field-of-p-adic-numbers]]. Then termwise addition and multiplication of
rational Cauchy sequences descend to well-defined operations on $\mathbb Q_p$,
the absolute value extends to a nonarchimedean absolute value on
$\mathbb Q_p$, every nonzero element has an inverse, and the resulting valued
field is complete.

## Facts & Assumptions

**Given:** A prime $p$ and $\mathbb Q_p$ as the Cauchy-sequence quotient of $(\mathbb Q,d_p)$.

[L1] Assertions 1--4 of the Cauchy-sequence construction give a metric on the quotient, an isometric embedding of the original space, and density of its image; these assertions do not use Countable Choice ([[thm-metric-completion-exists]]).

[L2] The rational $p$-adic absolute value is multiplicative and nonarchimedean ([[thm-p-adic-absolute-value-is-nonarchimedean]]).

[L3] $\mathbb Q_p$ is the Cauchy-sequence quotient of $(\mathbb Q,d_p)$ selected in [[def-field-of-p-adic-numbers]].

[L4] There is a bijection $e:\mathbb N\to\mathbb Q$, obtained without any choice principle ([[thm-rationals-countable]]).

[L5] Density means that every positive-radius ball about a point meets the dense image; every nonempty subset of $\mathbb N$ has a least element ([[def-metric-interior-closure-boundary]], [[def-metric-ball]], [[thm-well-ordering-principle]]).

[L6] The real sequence $(2^{-n})_n$ tends to $0$ ([[lem-geometric-sequence-null]]).

[L7] A real limit preserves an eventual non-strict upper bound ([[lem-limit-preserves-order]]).

[L8] Cauchyness and convergence in a metric space are tested by positive real tolerances ([[def-cauchy-in-metric]], [[def-metric-convergence]]).

## Proof

**Proof technique:** constructive.

1.1 By the specific construction fixed in [L3] and supplied by [L1], an element of $\mathbb Q_p$ is represented by a $d_p$-Cauchy sequence $(x_n)$ in $\mathbb Q$, and the distance between classes is $$\widehat d_p([x],[y]) = \lim_n |x_n-y_n|_p.$$ Define $$[x] + [y] := [x_n+y_n],\qquad [x][y] := [x_n y_n],\qquad |[x]|_p := \lim_n |x_n|_p.$$ [L1, L3, construct]

2.1 The nonarchimedean inequality in [L2] shows that sums and differences of Cauchy sequences are Cauchy. A Cauchy sequence in a nonarchimedean metric is bounded, so products of Cauchy sequences are again Cauchy, and equivalent representatives give equivalent sums and products because $$x_n y_n - x_n' y_n' = x_n(y_n-y_n') + y_n'(x_n-x_n').$$ Passing to the limit through [L2] proves representative independence of the extended absolute value as well. [L1, L2, step 1.1, algebra]

3.1 Let $[x] \in \mathbb Q_p$ be nonzero. Then $|[x]|_p > 0$, and step 1.1 says $|x_n|_p \to |[x]|_p$ in $\mathbb R$. So there are a real constant $c>0$ and an index $N$ with $|x_n|_p \ge c$ for all $n \ge N$. In particular $x_n \ne 0$ eventually. For $n,m \ge N$, $$|x_n^{-1} - x_m^{-1}|_p = \frac{|x_n-x_m|_p}{|x_n|_p |x_m|_p} \le c^{-2}|x_n-x_m|_p,$$ and the right-hand side tends to $0$ because $(x_n)$ is Cauchy. Thus $(x_n^{-1})$ is eventually defined and Cauchy, so every nonzero class has an inverse. [step 1.1, step 2.1, algebra]

4.1 Multiplicativity and the strong triangle inequality on $\mathbb Q_p$ follow by taking limits of the corresponding rational identities from [L2]. [L2, step 2.1, step 3.1]

5.1 With the valued-field structure established in step 4.1, it remains to prove completeness without invoking assertion 5 of the general completion theorem. Fix once and for all a bijection $e:\mathbb N\to\mathbb Q$ from [L4]; fixing this single supplied bijection is ordinary existential instantiation, not a family of choices. Let $(\xi_n)$ be a Cauchy sequence in $\mathbb Q_p$. By density in [L1], each set $$S_n:=\{k\in\mathbb N:\widehat d_p(\iota(e(k)),\xi_n)<2^{-n}\}$$ is nonempty. Define $k_n:=\min S_n$ and $q_n:=e(k_n)$. The least-index rule in [L5] determines the whole sequence $(q_n)$ and makes no choice. [step 4.1, L1, L4, L5, L6, construct]

6.1 The rational sequence $(q_n)$ is $d_p$-Cauchy. Indeed, given $\varepsilon>0$, use [L6] and Cauchyness of $(\xi_n)$ to choose $N$ such that $2^{-n}<\varepsilon/3$ for $n\ge N$ and $\widehat d_p(\xi_m,\xi_n)<\varepsilon/3$ for $m,n\ge N$. Since $\iota$ is isometric by [L1], for such $m,n$ the triangle inequality gives $$d_p(q_m,q_n)=\widehat d_p(\iota(q_m),\iota(q_n))<\varepsilon.$$ Thus $x:=[(q_n)]$ is a point of $\mathbb Q_p$. [step 5.1, L1, L6, L8, algebra]

7.1 The embedded sequence $\iota(q_n)$ converges to $x$. For fixed $n$, the quotient metric of [L1] gives $$\widehat d_p(\iota(q_n),x)=\lim_{m\to\infty}d_p(q_n,q_m).$$ Given $\varepsilon>0$, Cauchyness of $(q_n)$ supplies $N$ such that $d_p(q_n,q_m)<\varepsilon/2$ whenever $m,n\ge N$. Hence for every fixed $n\ge N$ the displayed real sequence is eventually bounded above by $\varepsilon/2$, so [L7] gives $\widehat d_p(\iota(q_n),x)\le\varepsilon/2<\varepsilon$. This is convergence to $x$. [step 6.1, L1, L7, L8]

8.1 Finally, step 5.1 and the triangle inequality give $$\widehat d_p(\xi_n,x)\le\widehat d_p(\xi_n,\iota(q_n))+\widehat d_p(\iota(q_n),x)<2^{-n}+\widehat d_p(\iota(q_n),x).$$ Given $\varepsilon>0$, [L6] and step 7.1 make the two terms on the right smaller than $\varepsilon/2$ for all sufficiently large $n$, so $\widehat d_p(\xi_n,x)<\varepsilon$. Thus every Cauchy sequence in $\mathbb Q_p$ converges, so $\mathbb Q_p$ is complete. Together with steps 1.1--4.1, it is a complete nonarchimedean valued field, with no choice principle used. [step 5.1, step 7.1, L6, L8, discharge-construct] ∎
