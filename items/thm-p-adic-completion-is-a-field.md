---
id: thm-p-adic-completion-is-a-field
kind: theorem
title: "The p-adic completion is a complete valued field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field-of-p-adic-numbers, thm-metric-completion-exists, thm-p-adic-absolute-value-is-nonarchimedean]
proof_strategy: constructive
verification:
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

Let $\mathbb Q_p$ be the completion of [[def-field-of-p-adic-numbers]]. Then
termwise addition and multiplication of rational Cauchy sequences descend to
well-defined operations on $\mathbb Q_p$, the absolute value extends to a
nonarchimedean absolute value on $\mathbb Q_p$, every nonzero element has an
inverse, and the resulting valued field is complete.

## Facts & Assumptions

**Given:** A prime $p$ and $\mathbb Q_p$ as the completion of $(\mathbb Q,d_p)$.

[L1] Every metric space has a completion built from equivalence classes of
Cauchy sequences, and that completion is complete
([[thm-metric-completion-exists]]).

[L2] The rational $p$-adic absolute value is multiplicative and nonarchimedean ([[thm-p-adic-absolute-value-is-nonarchimedean]]).

[L3] $\mathbb Q_p$ is the Cauchy-sequence completion of $(\mathbb Q,d_p)$
selected in [[def-field-of-p-adic-numbers]].

## Proof

**Proof technique:** constructive.

1.1 By the specific construction fixed in [L3] and supplied by [L1], an element of $\mathbb Q_p$ is represented by a $d_p$-Cauchy sequence $(x_n)$ in $\mathbb Q$, and the distance between classes is $$\widehat d_p([x],[y]) = \lim_n |x_n-y_n|_p.$$ Define $$[x] + [y] := [x_n+y_n],\qquad [x][y] := [x_n y_n],\qquad |[x]|_p := \lim_n |x_n|_p.$$ [L1, L3, construct]

2.1 The nonarchimedean inequality in [L2] shows that sums and differences of Cauchy sequences are Cauchy. A Cauchy sequence in a nonarchimedean metric is bounded, so products of Cauchy sequences are again Cauchy, and equivalent representatives give equivalent sums and products because $$x_n y_n - x_n' y_n' = x_n(y_n-y_n') + y_n'(x_n-x_n').$$ Passing to the limit through [L2] proves representative independence of the extended absolute value as well. [L1, L2, step 1.1, algebra]

3.1 Let $[x] \in \mathbb Q_p$ be nonzero. Then $|[x]|_p > 0$, and step 1.1 says $|x_n|_p \to |[x]|_p$ in $\mathbb R$. So there are a real constant $c>0$ and an index $N$ with $|x_n|_p \ge c$ for all $n \ge N$. In particular $x_n \ne 0$ eventually. For $n,m \ge N$, $$|x_n^{-1} - x_m^{-1}|_p = \frac{|x_n-x_m|_p}{|x_n|_p |x_m|_p} \le c^{-2}|x_n-x_m|_p,$$ and the right-hand side tends to $0$ because $(x_n)$ is Cauchy. Thus $(x_n^{-1})$ is eventually defined and Cauchy, so every nonzero class has an inverse. [step 1.1, step 2.1, algebra]

4.1 Multiplicativity and the strong triangle inequality on $\mathbb Q_p$ follow by taking limits of the corresponding rational identities from [L2]. Completeness is already part of [L1]. Thus $\mathbb Q_p$ is a complete nonarchimedean valued field. [L1, L2, step 2.1, step 3.1, discharge-construct] ∎
