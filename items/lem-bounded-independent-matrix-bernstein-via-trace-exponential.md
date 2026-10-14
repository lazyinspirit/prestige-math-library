---
id: lem-bounded-independent-matrix-bernstein-via-trace-exponential
kind: lemma
title: Bounded independent matrix Bernstein bound from the trace exponential
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - lem-finite-dimensional-golden-thompson-trace-inequality
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-trace-of-a-square-matrix
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-markov-inequality-for-random-variables
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Only finite-dimensional spectral constructions and finite products of probability laws are used; no choice axiom is required.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Joel A. Tropp, An Introduction to Matrix Concentration Inequalities, §§3.2–3.3 and §§6.6–6.7, especially Lemma 6.6.2"
      url: "https://arxiv.org/pdf/1501.01571"
proof_strategy: direct
---

## Statement

Let $B_1,\ldots,B_m$ be independent centered random Hermitian $q\times q$ matrices, $q,m\ge1$. Suppose $R>0$, $v\ge0$, and
$$\|B_i\|_{\rm op}\le R\quad\text{almost surely},\qquad\|\mathbb E B_i^2\|_{\rm op}\le v\quad(1\le i\le m).$$
Writing $Y=\sum_{i=1}^m B_i$, for $0<s<3/R$ one has
$$\mathbb E\operatorname{tr}\exp(sY)\le q\exp\left(\frac{ms^2v}{2(1-sR/3)}\right).$$
Consequently, for $u>0$ when $v>0$,
$$\mathbb P\{\lambda_{\max}(Y)\ge u\}\le q\exp\left(-\frac{u^2}{2(mv+Ru/3)}\right).$$
For every $b>0$, the following convenient forms also hold:
$$\mathbb P\left\{\lambda_{\max}(Y)>\sqrt{2mvb}+\frac{2Rb}{3}\right\}\le qe^{-b},\qquad\mathbb P\left\{\|Y\|_{\rm op}>\sqrt{2mvb}+\frac{2Rb}{3}\right\}\le2qe^{-b}.$$
If $v=0$, all $B_i$ and $Y$ vanish almost surely, so the displayed positive-threshold conclusions remain valid.

## Facts & Assumptions

**Given:** The matrices, constants and independent laws of the statement, with expectation as in [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. Matrix expectation is taken entrywise. The uniform bound makes all entries and all exponential series integrable.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] supplies the Hermitian spectral calculus. The semidefinite order $A\preceq C$ means $x^*(C-A)x\ge0$ for every vector $x$. Expectation preserves this order, by taking the expectation of each quadratic form.

[F2] [[lem-finite-dimensional-golden-thompson-trace-inequality]] gives $\operatorname{tr}\exp(H+K)\le\operatorname{tr}(\exp(H)\exp(K))$ for Hermitian matrices. Trace is as in [[def-trace-of-a-square-matrix]].

[F3] Independence is in the sense of [[def-independent-random-elements]]. By [[thm-independent-random-elements-have-product-joint-law]], integration of a bounded measurable function of these matrices can be performed successively over their product law.

[F4] The scalar Markov bound for a nonnegative random variable is [[cor-markov-inequality-for-random-variables]].

## Proof

**Proof technique:** direct.

1.1 Fix $0<s<3/R$. If $|x|\le R$ and $k\ge2$ is an integer, then $x^k\le R^{k-2}x^2$, including odd $k$ and negative $x$. Applying the spectral calculus and taking expectations gives $\mathbb E B_i^k\preceq R^{k-2}\mathbb E B_i^2$. Since $k!\ge2\cdot3^{k-2}$ for every $k\ge2$ (start at $k=2$ and multiply by $k+1\ge3$), the exponential series and $\mathbb EB_i=0$ yield $\mathbb E\exp(sB_i)\preceq I+g(s)\mathbb EB_i^2\preceq e^{g(s)v}I$, where $g(s)=s^2/[2(1-sR/3)]$. The first inequality is the sum of the convergent geometric majorant $\sum_{k\ge2}s^kR^{k-2}/k!\le g(s)$, and the second uses $0\preceq\mathbb EB_i^2\preceq vI$ and the scalar inequality $1+a\le e^a$. Termwise expectation is justified by the uniform norm majorant $\sum_k(sR)^k/k!$. [given, F1, algebra]

2.1 Let $Y_j=\sum_{i=1}^jB_i$, with $Y_0=0$. For each fixed value of $Y_{j-1}$, [F2] and integration over the independent $B_j$ give $\mathbb E_{B_j}\operatorname{tr}\exp(sY_{j-1}+sB_j)\le\operatorname{tr}(\exp(sY_{j-1})\mathbb E\exp(sB_j))\le e^{g(s)v}\operatorname{tr}\exp(sY_{j-1})$. The last implication follows because $P\succeq0$ and $Q\preceq cI$ imply $\operatorname{tr}(PQ)\le c\operatorname{tr}P$: diagonalize $P$ and sum its nonnegative eigenvalues times the bounded diagonal quadratic forms of $Q$. Successive integration using [F3] and iteration from $\operatorname{tr}I=q$ prove $\mathbb E\operatorname{tr}\exp(sY)\le qe^{mg(s)v}$. [F1, F2, F3, step 1.1, algebra]

3.1 By [F1], $\operatorname{tr}\exp(sY)\ge\exp(s\lambda_{\max}(Y))$. Markov's inequality [F4] and step 2.1 therefore give $\mathbb P\{\lambda_{\max}(Y)\ge u\}\le q\exp(-su+mg(s)v)$ for every $u>0$ and $0<s<3/R$. If $v>0$, choose $s=u/(mv+Ru/3)$, which belongs to that interval. Substitution gives $-su+mg(s)v=-u^2/[2(mv+Ru/3)]$, proving the stated tail bound. The same fixed-parameter bound with $>$ in place of $\ge$ will also be used below. [F1, F4, step 2.1, choose, algebra]

4.1 For $b>0$ set $u=\sqrt{2mvb}+2Rb/3$. Expanding its square shows $u^2\ge2b(mv+Ru/3)$: with $a=\sqrt{2mvb}$ and $c=2Rb/3$, the two sides are respectively $a^2+2ac+c^2$ and $a^2+ac+c^2$. Thus step 3.1 bounds the one-sided failure by $qe^{-b}$. Applying the same argument to $-B_i$ and taking the union of the two failures bounds the norm failure by $2qe^{-b}$, since the norm of a Hermitian matrix is the larger of its maximum eigenvalue and the maximum eigenvalue of its negative. [F1, step 3.1, algebra]

5.1 Finally, if $v=0$, then for each coordinate vector $e_j$, $\mathbb E\|B_i e_j\|_2^2=e_j^*(\mathbb EB_i^2)e_j=0$. A nonnegative random variable with zero expectation vanishes almost surely: otherwise one of the events where it exceeds $1/n$ would have positive probability and positive contribution to the expectation. Intersecting the finitely many full-probability coordinate events gives $B_i=0$ almost surely; a further finite intersection covers all $i$. The trace mgf is then $q$ and both strict positive-threshold events are empty. This covers the remaining case and completes all conclusions. [given, F1, step 2.1, step 4.1, algebra] ∎
