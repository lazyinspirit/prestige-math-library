---
id: lem-finitely-many-number-field-ideals-of-bounded-norm
kind: lemma
title: "Finitely many ideals of bounded norm"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - thm-ring-of-integers-free-of-rank-degree
  - thm-lagrange
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§6.3 Proposition 6.3.6 and §7.1 p.77."
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.4 proof, p.71."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K$ be a number field and let $B\ge1$ be real. Then only finitely many
nonzero integral ideals $\mathfrak a\subseteq\mathcal O_K$ satisfy
$N\mathfrak a\le B$.

## Facts & Assumptions

**Given:** A number field $K$ with ring of integers $\mathcal O_K$, a real
number $B\ge1$, and an integer $n=[K:\mathbb Q]$.

[F1] For every nonzero integral ideal $\mathfrak a\subseteq\mathcal O_K$ the
absolute norm $N\mathfrak a=|\mathcal O_K/\mathfrak a|$ is a finite cardinal
([[def-absolute-norm-of-an-ideal]],
[[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F2] $\mathcal O_K$ is a free $\mathbb Z$-module of rank $n$
([[thm-ring-of-integers-free-of-rank-degree]]).

[F3] If $G$ is a finite group and $H\le G$ then
$|G|=[G:H]\,|H|$ ([[thm-lagrange]]); hence the order of every element of $G$
divides $|G|$, because the cyclic subgroup it generates has that order.

## Proof

1.1 Let $\mathfrak a$ be a nonzero integral ideal with $N\mathfrak a=m$; by [F1] the additive group $\mathcal O_K/\mathfrak a$ has exactly $m$ elements, so by [F3] the order of each of its elements divides $m$, and for $x\in\mathcal O_K$ this gives $m(x+\mathfrak a)=\mathfrak a$, that is $mx\in\mathfrak a$, so $m\mathcal O_K\subseteq\mathfrak a$. [F1, F3, given]

1.2 Fix a $\mathbb Z$-basis $e_1,\dots,e_n$ of $\mathcal O_K$, which exists by [F2]; every class of $\mathcal O_K/m\mathcal O_K$ has exactly one representative $\sum_i a_i e_i$ with $0\le a_i<m$, because subtracting suitable multiples of $m$ from the coordinates gives existence, while $\sum_i b_i e_i\in m\mathcal O_K$ with $|b_i|<m$ for all $i$ forces each $b_i$ to be an integer multiple of $m$, hence $b_i=0$, giving uniqueness; thus $|\mathcal O_K/m\mathcal O_K|=m^n$. [F2, algebra]

2.1 Conversely every nonzero integral ideal $\mathfrak a$ with $m\mathcal O_K\subseteq\mathfrak a$ has image $\mathfrak a/m\mathcal O_K$ an ideal of the quotient ring $\mathcal O_K/m\mathcal O_K$, and distinct ideals $\mathfrak a,\mathfrak b$ containing $m\mathcal O_K$ have distinct images: if $\mathfrak a/m\mathcal O_K=\mathfrak b/m\mathcal O_K$ and $x\in\mathfrak a$, then $x+m\mathcal O_K\in\mathfrak b/m\mathcal O_K$, so $x\in\mathfrak b+m\mathcal O_K\subseteq\mathfrak b$, and interchanging $\mathfrak a$ and $\mathfrak b$ gives equality. [step 1.1, algebra]

3.1 A finite ring has only finitely many ideals, since its underlying set has only finitely many subsets, so for each fixed $m$ there are finitely many nonzero integral ideals with $N\mathfrak a=m$ by steps 2.1 and 1.2. [step 2.1, step 1.2, algebra]

4.1 A nonzero integral ideal of norm $\le B$ has norm equal to one of the positive integers $m\le B$, of which there are only the finitely many values $1\le m\le\lfloor B\rfloor$, and a finite union of finite sets is finite, so only finitely many nonzero integral ideals satisfy $N\mathfrak a\le B$. [step 3.1, algebra] ∎
