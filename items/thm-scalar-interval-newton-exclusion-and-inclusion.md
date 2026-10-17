---
id: thm-scalar-interval-newton-exclusion-and-inclusion
kind: theorem
title: Scalar interval Newton exclusion and strict inclusion certificates
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-scalar-interval-newton-certification
  - def-continuity-and-derivative-on-real-interval
  - def-outward-rounded-interval-and-ball-operations
  - lem-real-interval-arithmetic-preserves-enclosure
  - lem-mean-value-theorem-on-closed-interval
  - thm-intermediate-value
verification:
  precheck: pass
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), Theorem 6.2"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, Theorem 2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

Let $f$ be $C^1$ on an open interval containing $X=[a,b]$, with $a<b$. Let $F_m$ enclose $f(m)$, let $D$ enclose $f'(X)$ with $0\notin D$, and let $N=m-F_m/D$ be the finite outward interval Newton image, where $m=(a+b)/2$. Every root of $f$ in $X$ belongs to $N\cap X$. Consequently, $0\notin E_f(X)$ for a valid range enclosure $E_f(X)$, or $N\cap X=\varnothing$, certifies that $X$ has no root. If $N\subset\operatorname{int}X$, then $f$ has exactly one root in $X$. When the finite update budget ends without one of these certificates, the algorithm returns "inconclusive" and proves no absence claim.

## Facts & Assumptions

**Given:** The input enclosures and interval Newton image from [[alg-scalar-interval-newton-certification]], with interval operations as defined in [[def-outward-rounded-interval-and-ball-operations]].

[F1] Every finite real interval operation encloses its exact operation range ([[lem-real-interval-arithmetic-preserves-enclosure]]).

[F2] A continuous function on a closed interval, differentiable in its interior, satisfies the mean value theorem ([[lem-mean-value-theorem-on-closed-interval]]).

[F3] A continuous function takes every intermediate value between its endpoint values ([[thm-intermediate-value]]).

[F4] A real-interval $C^1$ function is continuous on its interval and has the stated continuous derivative ([[def-continuity-and-derivative-on-real-interval]]).

[F5] The scalar procedure preserves the root set when it replaces an interval $I$ by $N(I)\cap I$, returns "unique-root" at a singleton only when its exact range enclosure is $\{0\}$, and returns "inconclusive" on an exhausted update budget ([[alg-scalar-interval-newton-certification]]).

## Proof

1.1 If $r\in X$ is a root and $r=m$, then $0=f(m)\in F_m$, so $m\in N$. If $r\ne m$, the mean value theorem on the segment between $m$ and $r$ gives $\xi\in X$ with $f(m)=f'(\xi)(m-r)$. Since $f'(\xi)\in D$ and $f(m)\in F_m$, interval enclosure [F1] gives $r=m-f(m)/f'(\xi)\in N$. Hence every root in $X$ lies in $N\cap X$, and an empty intersection excludes all roots. [given, F1, F2, algebra]

1.2 If $0\notin E_f(X)$ and the range enclosure is valid, no $x\in X$ can satisfy $f(x)=0$, because $f(X)\subseteq E_f(X)$. [given, F1, algebra]

1.3 Suppose $N\subset\operatorname{int}X$. Since $0\notin D$ and $D$ is an interval, every value of $f'$ on $X$ has one fixed strict sign. Let $\xi_a\in(a,m)$ and $\xi_b\in(m,b)$ be the mean-value points for $[a,m]$ and $[m,b]$, and put $d_a=f'(\xi_a)$ and $d_b=f'(\xi_b)$. The exact Newton points $n_a=m-f(m)/d_a$ and $n_b=m-f(m)/d_b$ lie in $N$, so $a<n_a$ and $n_b<b$. [given, F1, F2, F4, choose]

2.1 At each strict interval update, every root of the current interval belongs to $N\cap I$ by step 1.1, so induction shows that no root of the original box is lost. If the current interval is a singleton $\{x\}$ and the algorithm returns "unique-root", then $E_f(\{x\})=\{0\}$ implies $f(x)=0$; root preservation shows this is the only root of the original box. [given, F1, F5, step 1.1, induction]

2.2 If $d_a,d_b>0$, the inequality $a<n_a$ gives $f(a)=f(m)-d_a(m-a)<0$, and $n_b<b$ gives $f(b)=f(m)+d_b(b-m)>0$. If $d_a,d_b<0$, multiplying the same inequalities by the negative derivatives reverses them and gives $f(a)>0>f(b)$. In either case [F3] supplies a root in $(a,b)$. [step 1.3, F3, algebra]

3.1 For any $x<y$ in $X$, [F2] gives $f(y)-f(x)=f'(\zeta)(y-x)$ for some $\zeta\in(x,y)$. The derivative has the same strict sign throughout $X$, so $f$ is strictly monotone there and has at most one root. Together with step 2.2, the root is unique. [given, F2, step 2.2, F4, algebra]

4.1 If no exclusion or strict-inclusion test succeeds before the update budget ends, the algorithm's final branch returns "inconclusive" by [F5]; this branch supplies no root-absence conclusion. [given, F5] ∎
