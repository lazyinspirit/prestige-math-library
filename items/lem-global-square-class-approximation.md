---
id: lem-global-square-class-approximation
kind: lemma
title: "Global approximation of finitely many square classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-weak-approximation-for-rational-places, thm-dirichlet-primes-arithmetic-progressions]
justified_by: []
proof_strategy: constructive
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Theorem 11.14"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.7"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $S$ be a finite set of places of $\mathbb Q$, and for each $v\in S$ let
$\xi_v\in Q_v^\times/(Q_v^\times)^2$ be a prescribed square class. Then there
exists $t\in\mathbb Q^\times$ whose image in $Q_v^\times/(Q_v^\times)^2$ is
$\xi_v$ for every $v\in S$, and whose valuation is even at every prime
$p\notin S$ except possibly one extra odd prime.

## Facts & Assumptions

**Given:** A finite set of places $S$ and prescribed local square classes $\xi_v$ for $v\in S$.

[L1] Weak approximation simultaneously approximates finitely many rational places ([[thm-weak-approximation-for-rational-places]]).

[L2] Dirichlet's theorem provides infinitely many primes in any reduced arithmetic progression ([[thm-dirichlet-primes-arithmetic-progressions]]).

## Proof

**Proof technique:** constructive.

1.1 Choose representatives $x_v\in Q_v^\times$ of the classes $\xi_v$. By [L1], there exists $r\in\mathbb Q^\times$ sufficiently close to every $x_v$ that $r/x_v$ is a square in $Q_v^\times$ for each $v\in S$. Thus $r$ already has the required local square classes on $S$. [L1, given, construct]

2.1 Only finitely many primes outside $S$ occur to odd valuation in $r$; let $P$ be that set and put $M:=\prod_{p\in P}p$, with $M:=1$ when $P=\varnothing$. Choose an odd prime $\ell\notin S\cup P$ such that $M/\ell$ is a square in every completion $Q_v$ with $v\in S$. This is a finite list of sign and congruence conditions, so [L2] supplies such a prime. Now set $$ t:=r\frac{M}{\ell}. $$ For each $v\in S$, the factor $M/\ell$ is a local square, so $t$ and $r$ define the same square class in $Q_v^\times/(Q_v^\times)^2$. For $p\in P$, the extra factor $M$ changes the odd valuation of $r$ to an even one; for $p\notin S\cup P\cup\{\ell\}$ the valuation was already even and stays even; and at $\ell$ the new valuation is $v_\ell(r)-1$, which is odd because $\ell\notin P$. Thus $t$ has the prescribed local square classes on $S$ and has even valuation at every prime outside $S$ except possibly the one extra odd prime $\ell$. [L1, L2, step 1.1, discharge-construct] ∎
