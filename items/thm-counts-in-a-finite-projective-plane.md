---
id: thm-counts-in-a-finite-projective-plane
kind: theorem
title: "A finite projective plane of order $n$ has $n^2+n+1$ points and the same number of lines"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-projective-plane,
       lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points,
       def-order-of-a-finite-projective-plane]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Feb. 3"
      url: "https://people.math.harvard.edu/~elkies/M155.09/feb03"
---

## Statement

Let $(P,\mathcal L)$ be a finite projective plane of order $n$. Then $|P|$ and
$|\mathcal L|$ are both equal to $n^2+n+1$.

## Facts & Assumptions

**Given:** A finite projective plane $(P,\mathcal L)$ of order $n$.

[L1] Every line contains exactly $n+1$ points ([[def-order-of-a-finite-projective-plane]]).

[L2] Any two distinct points lie on exactly one line, any two distinct lines meet in exactly one point, and there exist four points no three of which lie on one line ([[def-finite-projective-plane]]).

## Proof

**Proof technique:** direct.

1.1 Choose a line $\ell\in\mathcal L$. Since no line contains three of the four noncollinear points from [L2], some point $p\in P$ lies outside $\ell$. [L2, choose]

2.1 For each point $q\in\ell$, there is a unique line through $p$ and $q$, and distinct points of $\ell$ give distinct lines through $p$. Conversely, any line through $p$ meets $\ell$ in exactly one point by [L2]. Therefore exactly $n+1$ lines pass through $p$. [step 1.1, L1, L2, algebra]

3.1 Each of the $n+1$ lines through $p$ contains exactly $n$ points besides $p$, and the sets of those other points are pairwise disjoint because two distinct lines through $p$ meet only at $p$. Every point distinct from $p$ lies on exactly one of these lines, namely its unique joining line with $p$. Therefore $|P|=1+n(n+1)=n^2+n+1$. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Count incident pairs $(x,\ell')$ with $x\in\ell'$. By [L1], each line contributes $n+1$ such pairs. By step 2.1 and the argument there applied to an arbitrary point, each point also lies on exactly $n+1$ lines. Therefore $|\mathcal L|(n+1)=|P|(n+1)$, and step 3.1 gives $|\mathcal L|=|P|=n^2+n+1$. [step 2.1, step 3.1, L1, algebra] ∎
