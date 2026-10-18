---
id: lem-na-reduced-rational-representation-unique
kind: lemma
title: "Reduced real rational representations are unique up to scale"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-bezout-identity-for-polynomials
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §6.2"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 43–44, reduced rational representations in Lemma 6.2."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 199–200, rational functions in lowest terms and defect."
---

## Statement

Call a pair $(p,q)$ of real polynomials reduced when $q\ne0$ and no
nonconstant polynomial divides both entries. We identify $p/q$ and $p'/q'$ as
the same rational function exactly when $pq'=p'q$. Every quotient with
nonzero denominator has a reduced representation, and any two reduced
representations of the same nonzero rational function differ by a common
nonzero real scalar. The zero rational function has reduced pair $(0,1)$ up to
a nonzero scalar. For $q(x)=\sum_{j=0}^{d}q_jx^j$, define
$\|q\|_{\mathrm{coef},2}:=(\sum_{j=0}^{d}q_j^2)^{1/2}$, unchanged by
appending zero coefficients. If $I$ is a nonempty interval, two reduced
representations of the same rational function with denominators strictly
positive on $I$ and coefficient norm $1$ are equal.

## Facts & Assumptions

**Given:** Real polynomials $p,q$ with $q\ne0$.

[F1] [[thm-bezout-identity-for-polynomials]]: polynomial division over $\mathbb R$ gives a monic gcd $d$ and polynomials $A,B$ with $Ap+Bq=d$; $d$ divides both inputs, and every common divisor divides $d$.

## Proof

1.1 For a nonzero quotient, let $d=\gcd(p,q)$ from [F1] and put $p_0=p/d$, $q_0=q/d$. Then $Ap+Bq=d$ implies $Ap_0+Bq_0=1$, so no nonconstant polynomial divides both $p_0$ and $q_0$. For the zero quotient, $p=0$ and division by the monic $\gcd(0,q)$ gives $(0,\operatorname{lc}(q))$; scaling by $1/\operatorname{lc}(q)$ gives $(0,1)$. Any reduced pair representing zero has zero numerator and a nonzero constant denominator. [given, F1, construct, algebra]

2.1 Suppose $p_0/q_0=p_1/q_1$ are nonzero reduced representations. By the stated equality convention, $p_0q_1=p_1q_0$. The Bézout identity $Ap_0+Bq_0=1$ from step 1.1, multiplied by $p_1$, shows $p_0$ divides $p_1$; multiplying the same identity by $q_1$ shows $q_0\mid q_1$. Write $p_1=h p_0$ and $q_1=k q_0$. The nonzero real leading coefficients of $p_0$ and $q_0$ have nonzero product, so $p_0q_0\ne0$; cross-multiplication then gives $(h-k)p_0q_0=0$ and hence $h=k$. If $h$ were nonconstant, it would divide both $p_1$ and $q_1$, contradicting reduction. Thus $h=k$ is a nonzero real constant. The zero case is the reduced pair already identified in step 1.1. [F1, step 1.1, algebra]

3.1 Since $I$ is nonempty, choose $x\in I$. If the common scalar from step 2.1 is $c$, then $q_1(x)=c q_0(x)$ and both denominators are positive, so $c>0$. Homogeneity of the coefficient norm and $\|q_0\|_{\mathrm{coef},2}=\|q_1\|_{\mathrm{coef},2}=1$ give $c=1$, so the numerators agree as well. [given, step 2.1, algebra] ∎
