---
id: thm-local-valuation-ring-compact-open
kind: theorem
title: "The valuation ring and valuation neighborhoods are compact open"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - lem-finite-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Proposition 7.46 and Corollary 7.47"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I, Fall 2021, Lecture 9, Proposition 9.6"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification: {}
---

## Statement

Let $K$ be a nonarchimedean local field
with normalized valuation $v_K$, valuation ring
$\mathcal O_K=\{x:v_K(x)\ge0\}$, maximal ideal
$\mathfrak m_K=(\pi_K)$, uniformizer $\pi_K$, and finite residue field
$k_K=\mathcal O_K/\mathfrak m_K$. Then $\mathcal O_K$, every ideal power
$\mathfrak m_K^n$, the unit group $\mathcal O_K^\times$, and every principal
unit neighborhood $1+\mathfrak m_K^n$ are compact and open in $K$ for
$n\ge1$.

## Statement references

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Proposition 7.46 and Corollary 7.47](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Andrew V. Sutherland, MIT 18.785, Fall 2021, Lecture 9, Proposition 9.6](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf)

## Facts & Assumptions

**Given:** The local-field data in the Statement.

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: $K$ is
complete and nonarchimedean, $\mathfrak m_K=\pi_K\mathcal O_K$, and
$k_K$ is finite. Put $q_K=|k_K|$; then $|\pi_K|_K=q_K^{-1}<1$.

[F2] [[lem-finite-choice]]: A natural-number-indexed finite list of nonempty
sets has a choice function in ZF. In particular, after fixing one enumeration
of the finite field $k_K$, its residue classes admit a finite ordered list of
representatives.

## Proof

**Given:** $K$, $v_K$, $\mathcal O_K$, $\mathfrak m_K$, $\pi_K$, $k_K$,
and $q_K$ as above.

1.1 Fix an enumeration of the finite field $k_K$ with zero first. By [F2] choose one representative in $\mathcal O_K$ of each listed residue class, with representative zero for zero, giving an ordered finite alphabet $R$. For a word $s=(r_0,\ldots,r_{n-1})$ in $R$, put $a_s=\sum_{i<n}r_i\pi_K^i$ and $C_s=a_s+\pi_K^n\mathcal O_K$. Each $C_s$ is the disjoint union of its finitely many children $C_{sr}$, $r\in R$: subtract $a_s$, divide by $\pi_K^n$, and take the uniquely specified residue representative. Starting with $C_\varnothing=\mathcal O_K$, this also gives every element its unique digit at each finite stage. [F1, F2, given, choose, construct]

2.1 For every infinite digit sequence $(r_i)$ in $R$, the partial sums $a_n=\sum_{i<n}r_i\pi_K^i$ satisfy $|a_m-a_n|_K\le q_K^{-n}$ for $m\ge n$. Completeness gives a unique limit $x$. The set $\mathcal O_K$ and its cosets modulo $\pi_K^n\mathcal O_K$ are closed by the ultrametric inequality, so $x\in C_{(r_0,\ldots,r_{n-1})}$ for every $n$. These cylinders are balls of radius tending to zero and hence form a neighborhood basis at $x$. [F1, step 1.1, construct]

3.1 Let $\mathcal U$ be any open cover of $\mathcal O_K$. Call a word bad when its cylinder has no finite subcover from $\mathcal U$. If a word is bad, at least one child is bad: otherwise the finitely many finite subcovers of its children, selected by [F2], have finite union covering its cylinder. If the empty word were bad, recursively take the least bad child in the fixed order on $R$. This is a uniquely defined recursion, not a sequence of arbitrary choices. Step 2.1 supplies the resulting point $x$. Some $U\in\mathcal U$ contains $x$, and openness puts a sufficiently small prefix cylinder inside $U$, contrary to that prefix being bad. Thus $\mathcal O_K$ has a finite subcover and is compact. Only one finite alphabet was selected; neither Countable Choice nor a general product compactness theorem is used. [F2, step 1.1, step 2.1, construct]

4.1 The set $\mathfrak m_K=\{x:|x|_K<1\}$ is open, and each $x+\mathfrak m_K$ with $x\in\mathcal O_K$ is contained in $\mathcal O_K$, so $\mathcal O_K$ is open. For every $n\ge1$, multiplication by $\pi_K^n$ is a homeomorphism from $\mathcal O_K$ onto $\mathfrak m_K^n$; hence these ideals are compact and open. They are also closed: for a point outside such a valuation ball, a sufficiently small ball about that point stays outside by the ultrametric inequality. [F1, step 3.1, algebra]

5.1 Since $\mathfrak m_K$ is open and closed, $\mathcal O_K^\times=\mathcal O_K\setminus\mathfrak m_K$ is closed in the compact set $\mathcal O_K$ and open in $K$. A closed subset of a compact space is compact, by adjoining its open complement to any open cover. Thus the unit group is compact and open. [step 3.1, step 4.1]

6.1 Translation by $1$ is a homeomorphism, so every $1+\mathfrak m_K^n$ is compact and open. These are all the asserted sets. [step 4.1, algebra] ∎
