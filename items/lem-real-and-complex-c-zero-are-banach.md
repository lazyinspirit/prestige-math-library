---
id: lem-real-and-complex-c-zero-are-banach
kind: lemma
title: Real and complex $c_0$ are Banach
status: draft
origin: pipeline
deps: [def-c-zero-and-ell-infinity, thm-reals-cauchy-complete,
       thm-complex-plane-is-complete, def-axiom-schema-of-replacement,
       def-banach-space]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Problem 4.17(i), printed p. 118"
---

## Statement

For either scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, the space
$c_0(\mathbb K)$ with the supremum norm is a Banach space.  No choice
principle is used.

## Facts & Assumptions

**Given:** A scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$ and a supremum-norm Cauchy sequence $(x^{(m)})_{m\in\mathbb N}$ in $c_0(\mathbb K)$.

[F1] The space $c_0(\mathbb K)$ consists of the bounded scalar sequences which tend to zero and carries the supremum norm ([[def-c-zero-and-ell-infinity]]).

[F2] Every real Cauchy sequence converges in $\mathbb R$, without choice ([[thm-reals-cauchy-complete]]), and every complex Cauchy sequence converges in $\mathbb C$ ([[thm-complex-plane-is-complete]]).

[F3] A uniquely specified image of a set is a set by Replacement ([[def-axiom-schema-of-replacement]]).

[F4] A normed space is Banach exactly when every norm-Cauchy sequence converges to a point of the space ([[def-banach-space]]).

## Proof

**Proof technique:** Take unique coordinatewise limits, prove that convergence is uniform, and then preserve the null-sequence condition.

1.1 Fix $n\in\mathbb N$.  Since $$ |x^{(m)}_n-x^{(k)}_n| \le \|x^{(m)}-x^{(k)}\|_\infty, $$ the scalar sequence $(x^{(m)}_n)_m$ is Cauchy.  By [F2] it has a unique limit, say $x_n\in\mathbb K$.  The formula sending $n$ to the ordered pair $(n,x_n)$ is single-valued, so [F3] collects these pairs into the graph of one scalar sequence $x=(x_n)_{n\in\mathbb N}$.  This uses uniqueness and Replacement, not a choice of one limit from each of many non-singleton sets. [F2, F3, given]

2.1 The sequence $x$ is bounded.  Choose $M$ so that $\|x^{(m)}-x^{(M)}\|_\infty<1$ whenever $m\ge M$.  For every coordinate $n$, letting $m$ tend to infinity in $|x^{(m)}_n-x^{(M)}_n|<1$ gives $|x_n-x^{(M)}_n|\le1$.  Therefore $$ |x_n|\le 1+\|x^{(M)}\|_\infty $$ for every $n$. [step 1.1, F1, given]

3.1 In fact $x^{(m)}\to x$ in the supremum norm.  Given $\eta>0$, choose $M$ so that $\|x^{(m)}-x^{(k)}\|_\infty<\eta/2$ for all $m,k\ge M$.  Fix $m\ge M$ and $n$.  Passing to the coordinatewise limit as $k\to\infty$ yields $|x^{(m)}_n-x_n|\le\eta/2$.  Taking the supremum over $n$ gives $$ \|x^{(m)}-x\|_\infty\le\eta/2<\eta. $$ [step 1.1, step 2.1, F1, given]

4.1 The uniform limit $x$ still tends to zero.  Given $\varepsilon>0$, use step 3.1 with tolerance $\varepsilon/2$ to fix an $m$ with $\|x-x^{(m)}\|_\infty<\varepsilon/2$.  Since $x^{(m)}\in c_0$, [F1] gives $N$ such that $|x^{(m)}_n|<\varepsilon/2$ for all $n\ge N$.  Hence $$ |x_n|\le |x_n-x^{(m)}_n|+|x^{(m)}_n|<\varepsilon \qquad(n\ge N). $$ Together with boundedness from step 2.1, this says $x\in c_0(\mathbb K)$. [step 2.1, step 3.1, F1]

5.1 Thus every supremum-norm Cauchy sequence in real or complex $c_0$ converges in that norm to an element of $c_0$.  By [F4], both spaces are Banach.  The construction in step 1.1 used the unique scalar limits and Replacement, and no choice principle entered any step. [step 1.1, step 4.1, F4] ∎

## Remarks

This A-page lemma is the direct completeness supplier needed by the companion reflexivity examples.  The already published proof that $c_0$ is Banach occurs on another examples page; it cannot be used here because companion B pages are leaves in the page-dependency plan.
