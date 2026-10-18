---
id: lem-leibniz-determinant-forward-error-bound
kind: lemma
title: A left-to-right Leibniz determinant has an explicit forward error bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-certified-geometric-predicate-determinants, def-standard-relative-floating-point-model-and-unit-roundoff, lem-of-abs-value, lem-of-triangle-inequality]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§4.2–4.4"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 2nd ed., §1.2"
      url: "https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf"
---

## Statement

Let $M$ be an $s\times s$ matrix, $s\ge2$, whose entries are exactly represented in a
selected floating-point system. Compute its Leibniz determinant by forming each
product left-to-right, applying each permutation sign by an exact sign-bit
change, and summing the $s!$ signed terms left-to-right. If every
rounded operation is zero or has a normal-range exact result, every operation
satisfies the standard relative model with unit roundoff $u$, and
$qu<1$ for $q=s+s!-2$, then
$$|\widehat D-\det M|\le \gamma_q S,\qquad \gamma_q=\frac{qu}{1-qu},\qquad S=\sum_{\pi\in S_s}\prod_{i=0}^{s-1}|M_{i,\pi(i)}|.$$

## Facts & Assumptions

**Given:** For the real entries of $M$, write $\det M=\sum_{\pi\in S_s}\operatorname{sgn}(\pi)\prod_{i=0}^{s-1}M_{i,\pi(i)}$, using the permutation and sign conventions of [[def-certified-geometric-predicate-determinants]]. This finite polynomial defines the determinant for arbitrary real entries and agrees with that item's definition on dyadic matrices; representability here does not require dyadic entries. Use the operationwise model in [[def-standard-relative-floating-point-model-and-unit-roundoff]], lexicographic permutation order, left-to-right products and summation, and an exact sign change after each product when its permutation is odd. Set $\gamma_0=0$.

[F1] [[def-standard-relative-floating-point-model-and-unit-roundoff]]: for each addition or multiplication whose exact result is zero or normal-range, $\operatorname{fl}(x\circ y)=(x\circ y)(1+\delta)$ with $|\delta|\le u$.

[F2] [[lem-of-abs-value]] and [[lem-of-triangle-inequality]]: $|xy|=|x||y|$, $-|x|\le x\le|x|$, and $|x+y|\le|x|+|y|$.

[A1] Every rounded operation in this computation has exact result zero or in the normal range; no overflow, underflow, or invalid operation occurs; $qu<1$; and each permutation sign is applied by an exact sign-bit change after its product, with no rounded arithmetic operation.

## Proof

1.1 For an integer $n\ge0$ with $nu<1$, the binomial theorem and $\binom nk\le n^k$ give $(1+u)^n\le\sum_{k\ge0}(nu)^k=1/(1-nu)$. Therefore $(1+u)^n-1\le\gamma_n$. [given, F1, algebra]

2.1 Put $a=s-1$ and let $t_\pi$ be one exact signed Leibniz product. Its $a$ rounded multiplications introduce factors $(1+\delta_k)$ by [F1] and [A1]. The identity $\prod_k(1+\delta_k)-1=\sum_k\delta_k\prod_{j<k}(1+\delta_j)$, the triangle inequality [F2], and $|1+\delta_j|\le1+u$ show $|\widehat t_\pi-t_\pi|\le((1+u)^a-1)|t_\pi|\le\gamma_a|t_\pi|$ by [step 1.1]. The same product bound gives $|\widehat t_\pi|\le(1+\gamma_a)|t_\pi|$; an exact zero term remains zero. [given, F1, F2, A1, step 1.1, algebra]

3.1 There are $s!$ terms and hence $b=s!-1$ rounded additions after the first term is placed in the accumulator. If the successive addition errors are $\eta_1,\ldots,\eta_b$, induction in the accumulator recurrence writes $\widehat D=\sum_{j=1}^{s!}\widehat t_jP_j$, where each $P_j$ is a product of at most $b$ factors $(1+\eta_k)$. The telescoping identity in [step 2.1] gives $|P_j-1|\le\gamma_b$. Thus $|\widehat D-\sum_j\widehat t_j|=|\sum_j\widehat t_j(P_j-1)|$ is at most $\gamma_b\sum_j|\widehat t_j|$ by [F2]. [given, F1, F2, A1, step 1.1, step 2.1, induction, algebra]

4.1 Apply [F2], [step 2.1], and [step 3.1] to the exact signed sum. With $S=\sum_\pi|t_\pi|$ this gives $|\widehat D-\det M|\le(\gamma_a+\gamma_b+\gamma_a\gamma_b)S$. [given, F2, step 2.1, step 3.1, algebra]

5.1 Since $q=a+b$ and $qu<1$, $(1-au)(1-bu)=1-qu+ab u^2\ge1-qu>0$. Therefore $(1+\gamma_a)(1+\gamma_b)-1\le\gamma_q$, so the coefficient in [step 4.1] is at most $\gamma_q$. This proves the stated bound. [given, A1, step 4.1, algebra] ∎

