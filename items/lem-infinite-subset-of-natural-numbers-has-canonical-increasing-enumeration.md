---
id: lem-infinite-subset-of-natural-numbers-has-canonical-increasing-enumeration
kind: lemma
title: "An infinite subset of the natural numbers has a canonical increasing enumeration"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-natural-numbers
  - def-nat-order
  - def-nat-addition
  - lem-nat-order-is-membership
  - def-countable
  - def-finite-cardinality
  - def-injection-surjection-bijection
  - thm-subset-of-a-finite-set
  - thm-well-ordering-principle
  - thm-recursion
  - thm-induction-principle
  - lem-nat-discrete
  - lem-nat-order-add-compatible
  - lem-nat-nonzero-is-successor
  - thm-nat-linear-order
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Terence Tao, Analysis I, 3rd ed., §8.1, Proposition 8.1.5 and Exercise 8.1.3"
      url: "https://turan-edu.uz/media/books/2024/05/28/1664976801.pdf"
      locator: "PDF pp. 183–184. The text gives the increasing-enumeration proposition and a proof sketch with gaps; this item supplies each missing existence, unboundedness, surjectivity and uniqueness argument from its declared suppliers."
    - title: "Countability — MPI lessons and worked exercises, Proposition: Infinite subsets of N"
      url: "https://commeunjeu.org/cours/fr-mpi-countability/?lang=en"
      locator: "Lines 60–69. Complete least-successor construction, the induction bound a_n≥n, and surjectivity argument."
---

## Statement

Let $S\subseteq\mathbb N$ have no one-to-one and onto function to any natural-number initial segment (so $S$ is infinite), where $0\in\mathbb N$. Define $s_0=\min S$ and recursively define
$$s_{n+1}=\min\{s\in S:s_n<s\}.$$
Every minimum in this definition exists, and the resulting unique sequence $s:\mathbb N\to S$ has distinct terms at distinct indices, contains every $q\in S$ as some $s_n$, and satisfies $s_n<s_m$ whenever $n<m$.

## Facts & Assumptions

**Given:** An infinite set $S\subseteq\mathbb N$ and the natural-number order.

[F1] Every nonempty subset of $\mathbb N$ has a least element. ([[thm-well-ordering-principle]])

[F2] A prescribed initial value and total successor function determine a unique recursively defined sequence on $\mathbb N$. ([[thm-recursion]])

[F3] If $m<n$, then $\sigma(m)\le n$; adding the same natural to both sides preserves order; and $\sigma(m)=m+1$. ([[lem-nat-discrete]], [[lem-nat-order-add-compatible]], [[def-nat-addition]])

[F4] The natural-number order is transitive and linear, is defined by $m\le n$ iff $m+k=n$ for some $k$, and satisfies $m<\sigma(m)$. ([[thm-nat-linear-order]], [[def-nat-order]], [[lem-nat-discrete]])

[F5] Every nonzero natural number is a successor. ([[lem-nat-nonzero-is-successor]])

[F6] Induction on $\mathbb N$ is valid. ([[thm-induction-principle]])

[F7] On von Neumann naturals, $n<m$ iff $n\in m$ and $\sigma(m)=m\cup\{m\}$; since $n\le m$ means $n<m$ or $n=m$, this gives $\{n:n\le m\}=\sigma(m)$, which is finite because every natural number is finite. ([[def-natural-numbers]], [[def-nat-order]], [[lem-nat-order-is-membership]], [[def-finite-cardinality]])

[F8] A finite set is bijective with some natural-number initial segment, so “infinite” means no such bijection exists; a bijection is a function that is both one-to-one and onto. ([[def-countable]], [[def-injection-surjection-bijection]])

[F9] Every subset of a finite set is finite. ([[thm-subset-of-a-finite-set]])

## Proof

**Proof technique:** least-element recursion and induction.

1.1 Fix $m\in S$. If no member of $S$ exceeds $m$, then $S\subseteq\{n:n\le m\}$; this initial segment is finite by [F7], so [F9] makes $S$ finite, contradicting [F8]. Hence $\{s\in S:m<s\}$ is nonempty; [F1] gives it a unique least element. [given, F1, F7, F8, F9, choose]

2.1 Since $S$ is nonempty, [F1] gives $s_0=\min S$. Step 1.1 defines a total successor function $f:S\to S$ by $f(m)=\min\{s\in S:m<s\}$. Applying [F2] to $s_0$ and $f$ gives a unique sequence $s:\mathbb N\to S$ with $s(0)=s_0$ and $s(\sigma(n))=f(s(n))$. In particular, $s_n<s_{n+1}$ for every $n$. [given, step 1.1, F1, F2, algebra]

3.1 We prove $n\le s_n$ by induction. At $n=0$ this follows from $0\le s_0$. If $n\le s_n$, [F3] applied with the added term $1$ gives $\sigma(n)\le\sigma(s_n)$; step 2.1 and [F3] give $\sigma(s_n)\le s_{n+1}$. Transitivity yields $\sigma(n)\le s_{n+1}$, the successor case. Thus $n\le s_n$ for every $n$. [step 2.1, F3, F4, F6, induction]

3.2 Fix $i<j$. By [F4], $i+k=j$ for some $k\ne0$, and [F5] writes $k=\sigma(r)$. By induction on $r$, $s_{i+\sigma(r)}>s_i$: for $r=0$, $i+\sigma(0)=\sigma(i)$ and step 2.1 gives the strict inequality; from the assertion for $r$, the recursion identity $i+\sigma(\sigma(r))=\sigma(i+\sigma(r))$ and step 2.1 give $s_{i+\sigma(\sigma(r))}>s_{i+\sigma(r)}>s_i$, using transitivity in [F4]. Thus $s_j>s_i$. [step 2.1, F4, F5, F6, induction]

4.1 Fix $q\in S$ and take $n=\sigma(q)$. By [F4], $q<n$, while step 3.1 gives $n\le s_n$; transitivity yields $q<s_n$. Therefore the set of indices $\{n:s_n>q\}$ is nonempty. [given, step 3.1, F4, choose]

5.1 Let $m$ be the least index with $s_m>q$, using [F1] and step 4.1. Since $s_0=\min S\le q$, $m\ne0$; [F5] gives $m=\sigma(k)$ for some $k$. Minimality gives $s_k\le q$. If $q$ were absent from the sequence, linearity in [F4] would give $s_k<q$. Then $q$ belongs to the set whose least element is $s_{k+1}=s_m$, so $s_m\le q$, contradicting $s_m>q$. Hence every $q\in S$ occurs in the sequence. [step 2.1, step 4.1, F1, F4, F5, discharge-contradiction]

6.1 Step 3.2 proves injectivity, while step 5.1 proves surjectivity and step 2.1 puts every term in $S$. By [F8], these facts make the sequence a bijection onto $S$. Its uniqueness follows from the uniqueness clause of [F2] for the specified initial value and least-element successor rule. [step 2.1, step 5.1, step 3.2, F2, F8, algebra] ∎

## Proof references

[[def-natural-numbers]]

[[def-nat-order]]

[[def-nat-addition]]

[[lem-nat-order-is-membership]]

[[def-countable]]

[[def-finite-cardinality]]

[[def-injection-surjection-bijection]]

[[thm-subset-of-a-finite-set]]

[[thm-well-ordering-principle]]

[[thm-recursion]]

[[thm-induction-principle]]

[[lem-nat-discrete]]

[[lem-nat-order-add-compatible]]

[[lem-nat-nonzero-is-successor]]

[[thm-nat-linear-order]]
