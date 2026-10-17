---
id: alg-rational-polynomial-root-isolation
kind: algorithm
title: Exact dyadic Sturm isolation of all real roots of a rational polynomial
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - lem-polynomial-squarefree-decomposition-and-multiplicity
  - thm-sturm-sign-variation-counts-distinct-roots
  - lem-squarefree-integer-polynomial-root-separation-bound
justified_by:
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
verification:
  precheck: n/a
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "Marc Moreno Maza, Tutorial on real root isolation of polynomial systems, §§10–14"
      url: "https://www.csd.uwo.ca/~mmorenom/Publications/RS-SAV-Tutorial.pdf"
---

## Definition

Input a rational polynomial $p\in\mathbb Q[x]$. Arithmetic on coefficients and endpoints is exact.

1. If $p=0$, return status "identically zero"; it has no finite list of isolated roots. If $p$ is a nonzero constant, return status "complete" with an empty list.

2. Clear denominators and divide out the integer content, choosing the sign so the resulting primitive integer polynomial $P$ has positive leading coefficient. Apply [[lem-polynomial-squarefree-decomposition-and-multiplicity]] to the monic rational polynomial $P/\operatorname{lc}(P)$. For each nonconstant squarefree factor $q_k$ in that decomposition, let $Q_k$ be its primitive integer normalization with positive leading coefficient; take $Q_k=1$ when $q_k=1$. Then $P=c\prod_{k=1}^d Q_k^k$ for a nonzero rational $c$, and the factors label roots by multiplicity. Let $S$ be the primitive integer normalization with positive leading coefficient of $\prod_{k: \deg Q_k>0}Q_k$. Its roots are the distinct roots of $p$.

3. Put $B=H(S)+2$, where $H(S)$ is the maximum absolute coefficient of $S$. If $\deg S\ge2$, compute $\sigma(S)$ from [[lem-squarefree-integer-polynomial-root-separation-bound]]; if $\deg S=1$, no separation value is needed. Initialize a queue with the open interval $(-B,B)$ and retain the active squarefree factors $Q_k$.

4. Remove exact dyadic rational roots at a queue interval endpoint or bisection midpoint before counting on the adjacent intervals. If $r$ is such a root, test the factors $Q_k(r)$ exactly; the unique factor vanishing at $r$ gives its multiplicity $k$. Record the singleton $\{r\}$, divide that factor by $x-r$, and remove the same factor from the active product $S$.

5. For a queued open interval $(a,b)$ whose endpoints are not roots of the active $S$, form its Sturm sequence and set $N=V(a)-V(b)$ using [[thm-sturm-sign-variation-counts-distinct-roots]]. If $N=0$, discard the interval. If $N=1$, compute the Sturm count for each nonconstant active $Q_k$ (a constant factor has count $0$) and output $(a,b,k)$ for the unique factor whose count is $1$. If $N\ge2$, compare its width with $\sigma(S_0)/4$, where $S_0$ is the initial squarefree primitive polynomial. A count $N\ge2$ below that threshold is an internal inconsistency; otherwise bisect at $m=(a+b)/2$. If $S(m)=0$, record and remove that exact root as in step 4. Enqueue the open halves $(a,m)$ and $(m,b)$.

6. Return status "complete" when the queue is empty, with all singleton exact roots and open isolating intervals labelled by multiplicity. A nonzero constant active product has no remaining roots and requires no Sturm sequence.

The procedure uses no floating-point comparisons. Exact polynomial division, gcd, endpoint evaluation, sign variation, and width comparison are over rational numbers. Open intervals ensure that a root found exactly at a split point is represented only by its singleton record and not by either adjacent interval.

