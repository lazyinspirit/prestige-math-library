---
id: lem-it-finite-pinsker-euclidean-bound
kind: lemma
title: Finite Pinsker inequality in Euclidean norm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [lem-it-finite-log-sum-inequality, def-finite-kullback-leibler-divergence, def-finite-probability-vector, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-logarithm-slower-than-every-positive-power]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the argument involves finite sums and one-dimensional calculus.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Reduce finite KL by log-sum to the binary partition where p exceeds q.
  - Prove the scalar binary lower bound, including endpoint support cases.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 7, §7.4, Theorem 7.10; full finite Pinsker reduction to the Bernoulli case and its scalar integral proof.
---

## Statement

Let $P=(p_i)$ and $Q=(q_i)$ be probability vectors on a finite nonempty set. With natural logarithms and $D(P\|Q)=+\infty$ when $P\not\ll Q$, one has
$$D(P\|Q)\ge \tfrac12\|P-Q\|_1^2\ge\tfrac12\|P-Q\|_2^2.$$

## Facts & Assumptions

**Given:** Finite probability vectors $P,Q$ and the finite KL convention in the Statement.

[F1] [[lem-it-finite-log-sum-inequality]]: grouping coordinates into two classes cannot increase the finite KL divergence; the grouped divergence is at most the original divergence, including the stated support conventions.

[F2] [[def-finite-kullback-leibler-divergence]]: $D(P\|Q)$ is the sum of $p_i\ln(p_i/q_i)$ over positive $p_i$, and equals $+\infty$ if a positive $p_i$ lies over $q_i=0$.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: logarithmic differentiation and the product rule apply on positive coordinates.

[F4] [[thm-logarithm-slower-than-every-positive-power]]: $t\ln t\to0$ as $t\downarrow0$.

## Proof

1.1 If $P\not\ll Q$, the first inequality is immediate because its left side is $+\infty$. Otherwise let $A=\{i:p_i>q_i\}$ and $d=P(A)-Q(A)$. Since $\sum_i(p_i-q_i)=0$, the positive and negative coordinate differences have equal total magnitude, so $\|P-Q\|_1=2d$. If $A$ is empty, then $P=Q$ and the claim holds. [F2, given, cases, algebra]

2.1 For $A$ and its complement, [F1] gives $D(P\|Q)\ge p\ln(p/q)+(1-p)\ln((1-p)/(1-q))$, where $p=P(A)$ and $q=Q(A)$, with endpoint terms interpreted by the same support convention. [F1, F2, step 1.1, algebra]

3.1 If $q\in\{0,1\}$, finite divergence and $P\ll Q$ force $p=q$, so the binary divergence is zero and $d=0$. For $0<q<1$, define $g(p)=p\ln(p/q)+(1-p)\ln((1-p)/(1-q))-2(p-q)^2$. On $0<p<1$, [F3] and the product rule give $g(q)=g'(q)=0$ and $g''(p)=1/[p(1-p)]-4\ge0$. Thus $g$ is convex and minimized at $q$; continuity of $t\ln t$ at zero from [F4] extends $g(p)\ge0$ to $p=0,1$. [F3, F4, step 2.1, given]

4.1 Therefore $D(P\|Q)\ge2d^2=\tfrac12\|P-Q\|_1^2$. Since $\|v\|_2\le\|v\|_1$ for every finite vector $v$, the Euclidean bound follows. [step 1.1, step 2.1, step 3.1, algebra] ∎
