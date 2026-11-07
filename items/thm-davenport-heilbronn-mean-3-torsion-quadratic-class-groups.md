---
id: thm-davenport-heilbronn-mean-3-torsion-quadratic-class-groups
kind: theorem
title: "Davenport–Heilbronn mean 3-torsion in quadratic class groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps: [thm-davenport-heilbronn-cubic-field-count, thm-davenport-heilbronn-3-torsion-class-field-counting-identity, thm-fundamental-discriminants-have-density, def-number-field, def-ring-of-integers-of-a-number-field, def-ideal-class-group-of-a-domain, thm-number-field-ideal-class-group-finite-in-zf, def-axiom-of-choice, def-countable-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the CFT counting identity.
  The arithmetic averaging step adds no choice use.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, Theorem 2 and §8.5"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "Theorem 2 and printed §8.5"
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, Theorem 3.2"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. As real quadratic fields $K$ are ordered by $0<D_K<X$ and imaginary quadratic fields by $-X<D_K<0$, with $D_K$ their fundamental discriminants, the average number of elements of order dividing $3$ in their ideal class groups has the limits
$$\lim_{X\to\infty}\frac{\sum_{K\text{ real quadratic},\ 0<D_K<X}|\operatorname{Cl}(K)[3]|}{\#\{K\text{ real quadratic}:0<D_K<X\}}=\frac43,$$
$$\lim_{X\to\infty}\frac{\sum_{K\text{ imaginary quadratic},\ -X<D_K<0}|\operatorname{Cl}(K)[3]|}{\#\{K\text{ imaginary quadratic}:-X<D_K<0\}}=2.$$
The identity element is included in each $3$-torsion subgroup.

## Statement references

[[thm-davenport-heilbronn-3-torsion-class-field-counting-identity]]

[[thm-fundamental-discriminants-have-density]]

[Bhargava, Shankar, and Tsimerman, Theorem 2 and §8.5](https://arxiv.org/pdf/1005.0672)

[A. Landesman, *Distributions of Class Groups of Global Fields*, Lecture 3](https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the real and imaginary quadratic fields, and the cutoff $X>0$.

[F1] For either discriminant sign, the class-field identity equates the sum of $|\operatorname{Cl}(K)[3]|-1$ to twice the number of nowhere-totally-ramified cubic fields with the corresponding discriminant bound. [[thm-davenport-heilbronn-3-torsion-class-field-counting-identity]]

[F2] Each sign has $3X/\pi^2+O(\sqrt X)$ fundamental quadratic discriminants of absolute value less than $X$. [[thm-fundamental-discriminants-have-density]]

[F3] The positive and negative nowhere-totally-ramified cubic-field counts divided by $X$ tend to $1/(2\pi^2)$ and $3/(2\pi^2)$, respectively. [[thm-davenport-heilbronn-cubic-field-count]]

[A1] AC, Countable Choice and DC are assumed as in [F1]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 For real quadratic fields, [F1] gives $\sum_{0<D_K<X}|\operatorname{Cl}(K)[3]|=\#\{K:0<D_K<X\}+2|\mathcal C_+(X)|$. Dividing by $X$, [F2] and [F3] give the limit $3/\pi^2+1/\pi^2=4/\pi^2$ for the numerator, and $3/\pi^2$ for the denominator. Their ratio tends to $4/3$. [A1, F1, F2, F3, algebra]

2.1 For imaginary quadratic fields, the same identity gives $\sum_{-X<D_K<0}|\operatorname{Cl}(K)[3]|=\#\{K:-X<D_K<0\}+2|\mathcal C_-(X)|$. The numerator divided by $X$ tends to $3/\pi^2+3/\pi^2=6/\pi^2$, and the denominator divided by $X$ tends to $3/\pi^2$. Their ratio tends to $2$, proving the Statement. [A1, F1, F2, F3, algebra] ∎
