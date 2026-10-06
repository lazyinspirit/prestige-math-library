---
id: thm-poincare-inequality-on-a-ball
kind: theorem
title: "Poincare inequality on a ball"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [cor-poincare-wirtinger-on-convex-domains, def-ball-average-operator-on-r-n, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.3, Lemma 5.22, Remark 5.23 and Theorem 5.25, printed pp. 133-136."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Exercise 3.25, printed p. 79."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, $B=B(x_0,r)\subseteq\mathbb R^n$ with $r>0$, $1\le p<\infty$, and $u\in W^{1,p}(B;\mathbb K)$ with ball average $u_B=|B|^{-1}\int_Bu$. Then $\|u-u_B\|_{L^p(B)}\le C(n,p)\,r\,\|Du\|_{L^p(B)}$.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; a ball $B=B(x_0,r)\subseteq\mathbb R^n$ with $r>0$; an exponent $1\le p<\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(B;\mathbb K)$.

[F1] The convex-domain Poincare-Wirtinger estimate: for every open bounded convex nonempty $\Omega$ and every $v\in W^{1,p}(\Omega;\mathbb K)$, $\|v-v_\Omega\|_{L^p(\Omega)}\le C(n)\operatorname{diam}(\Omega)\|Dv\|_{L^p(\Omega)}$ with $C(n)=2(2^n-1)/n$, where $v_\Omega=|\Omega|^{-1}\int_\Omega v$ ([[cor-poincare-wirtinger-on-convex-domains]]).

[F2] The ball average $u_B=|B|^{-1}\int_Bu$ is the mean of $u$ over $B$; it is defined because every ball has positive finite Lebesgue measure ([[def-ball-average-operator-on-r-n]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F3] $W^{1,p}(B;\mathbb K)$ consists of the $L^p$ classes with weak first derivatives in $L^p$, and $L^p$ consists of almost-everywhere classes ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 The ball is admissible for [F1]. The ball $B=B(x_0,r)$ is open, bounded, convex and nonempty, and its diameter is $\operatorname{diam}(B)=2r$; the class $u$ lies in $W^{1,p}(B;\mathbb K)$ by hypothesis. Its mean over $B$ as a convex set is exactly the ball average $u_B=|B|^{-1}\int_Bu$ of [F2], because both are $|B|^{-1}\int_Bu$; the value is a finite element of $\mathbb K$ by [F2] and [F3]. [F2, F3, given, algebra]

2.1 Applying the convex-domain estimate. By [F1] applied to $\Omega=B$ and $v=u$, $\|u-u_B\|_{L^p(B)}\le C(n)\operatorname{diam}(B)\|Du\|_{L^p(B)}=2C(n)\,r\,\|Du\|_{L^p(B)}$. Hence the asserted inequality holds with the dimension-and-exponent constant $C(n,p):=2C(n)=4(2^n-1)/n$, which depends only on $n$ and $p$. [F1, step 1.1, algebra] ∎

## Source notes

Kinnunen proves the ball case by the pointwise potential estimate and the maximal-function bound; Laugesen records it as an exercise with a constant linear in $r$. The proof above derives the ball statement from the more general convex-domain Poincare-Wirtinger corollary proved earlier on this page, with the explicit constant $4(2^n-1)/n$, which is not sharp but is dimension-only and linear in $r$ as asserted.
