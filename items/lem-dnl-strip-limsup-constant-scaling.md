---
dependency_level: 1
id: lem-dnl-strip-limsup-constant-scaling
kind: lemma
title: "Constant scaling of thin integer strip limsup sets"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-limsup-subsets-of-shrinking-balls-have-same-measure
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
sources:
  references:
    - title: "Dani, Laurent and Nogueira, Multi-dimensional metric approximation by primitive points, §3, Proposition3.1"
      url: "https://arxiv.org/pdf/1310.5535v2"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, let $O\subseteq\mathbb Z^m\times(\mathbb Z^n\setminus\{0\})$ be arbitrary, let $y\in\mathbb R^m$, let $\Phi\in\mathrm{GL}_m(\mathbb R)$, and let $\psi:\mathbb N\to[0,\infty)$ satisfy $\psi(h)/h\to0$. For $c>0$, let $E_c$ consist of those $\Theta\in\operatorname{Mat}_{m,n}(\mathbb R)$ for which $\|\Theta q+\Phi p-y\|_\infty\le c\psi(\|q\|_\infty)$ holds for infinitely many $(p,q)\in O$. Then $E_c\mathbin\triangle E_1$ is Lebesgue null for every $c>0$. The conclusion remains true in the product with a variable target $y$.

## Statement references

[Dani–Laurent–Nogueira, §3, Proposition 3.1](https://arxiv.org/pdf/1310.5535v2)

## Facts & Assumptions

**Given:** Countable Choice and the subset, dimensions, invertible matrix, target, function and constant in the Statement.

[A1] Countable Choice supports product integration and countable null unions. ([[def-countable-choice]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F1] For shrinking Euclidean balls, measurable subsets occupying a fixed positive fraction of each ball have the same limsup measure as the balls. Balls in dimension $m$ have positive finite volume. ([[lem-limsup-subsets-of-shrinking-balls-have-same-measure]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

## Proof

1.1 By interchanging $c\psi$ and $\psi$ if needed, it is enough to compare $E_1\subseteq E_c$ with $c\ge1$. Partition $O$ into finitely many subsets according to the least index $j$ with $|q_j|=\|q\|_\infty$. An infinite sequence in $O$ has an infinite subsequence in one of these subsets. Fix such a $j$ and fix the other $n-1$ columns of $\Theta$; write $\xi\in\mathbb R^m$ for its $j$th column. Each inequality is now a cube in $\xi$ with center $(y-\Phi p-\sum_{i\ne j}q_i\Theta_i)/q_j$ and radius $c\psi(\|q\|)/\|q\|$ in the sup norm. The center is independent of $c$; the sign of $q_j$ is retained in its denominator. [given, algebra]

2.1 Fix a compact ball $B$ in this $\xi$ space. The assumption $\psi(h)/h\to0$ implies $\sup_h\psi(h)/h<\infty$. If one of the radius-$c\psi(\|q\|)/\|q\|$ cubes meets $B$, invertibility of $\Phi$ gives $\|p\|\le C_B\|q\|$, by moving all other terms to the opposite side and bounding $\xi$ on $B$. There are only finitely many such integer pairs with bounded $\|q\|$. Enumerate all pairs with this linear bound in increasing norm; in an infinite enumeration their $\|q\|$ tend to infinity, so their cube radii tend to zero. Pairs for which $\psi(\|q\|)=0$ contribute only singleton centers; their countable union is null and may be discarded. [given, step 1.1, A1, algebra]

3.1 For each remaining pair, let $U_i$ be its radius-$\psi(\|q\|)/\|q\|$ cube, $V_i$ its radius-$c\psi(\|q\|)/\|q\|$ cube, and $B_i$ the Euclidean ball about their common center of radius $\sqrt m\,c\psi(\|q\|)/\|q\|$. Then $U_i\subseteq V_i\subseteq B_i$, the balls shrink, and $|U_i|/|B_i|$ is a fixed positive constant depending only on $m,c$. By [F1], $\limsup U_i$ and $\limsup B_i$ have equal measure, so the measurable intermediate limsup $\limsup V_i$ differs from them by a null set. To avoid subtracting infinite measures, apply the density-point proof of [F1] on bounded sets, or intersect its null-difference conclusion with the fixed compact ball $B$. All relevant cubes meeting $B$ occur in the enumeration in step 2.1. Thus the two original fiber limsup sets agree almost everywhere on $B$. Exhausting by countably many compact balls proves their equality almost everywhere in the whole fiber. [step 2.1, A1, F1, algebra]

4.1 Apply Fubini over the other columns and then take the finite union over $j$. This proves $E_c\mathbin\triangle E_1$ null. The same proof holds for every fixed target $y$; all the sets are measurable countable intersections and unions of closed strips, so a final Fubini application proves the product-target conclusion. The reciprocal comparison at the start handles $0<c<1$ as well. [step 1.1, step 3.1, A1, algebra] ∎
