---
id: thm-na-best-weighted-rational-approximation-exists
kind: theorem
title: "Best weighted rational approximants exist"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-weighted-rational-minimax-family
  - def-complete-ordered-field
  - def-continuity-real
  - lem-na-reduced-rational-representation-unique
  - lem-na-polynomial-coefficient-bound-from-fixed-nodes
  - lem-real-polynomial-factor-at-a-root
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-intermediate-value
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-polynomial-degree-of-a-product-over-a-domain
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
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 205–206, rational best-approximation existence argument."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §6.1"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 43–44, Theorem 6.1 and denominator-zero cancellation."
---

## Statement

For $I=[a,b]$ with $a<b$, $m,n\ge0$, $f\in C(I,\mathbb R)$, and a strictly
positive continuous weight $w$, there is $r_*\in\mathcal R_{m,n}^+(I)$ such
that
$$\|w(f-r_*)\|_{\infty,I}=E_{m,n}(f,w;I).$$

## Facts & Assumptions

**Given:** A nondegenerate compact interval $I=[a,b]$, integers $m,n\ge0$, $f,w\in C(I,\mathbb R)$, and $w>0$ on $I$.

[F1] [[def-na-weighted-rational-minimax-family]]: candidates have reduced degrees at most $(m,n)$, a denominator $q>0$ normalized by coefficient Euclidean norm $1$, and error $\|w(f-p/q)\|_{\infty,I}$.

[F2] [[lem-na-reduced-rational-representation-unique]]: for a nonempty interval, two reduced representations of the same rational function with denominators positive on $I$ and coefficient norm $1$ are equal.

[F3] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous functions on nonempty compact intervals attain extrema; closed bounded subsets of finite-dimensional Euclidean space are compact and continuous functions on them attain minima.

[F4] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero polynomial has finitely many roots in $I$.

[F5] [[lem-real-polynomial-factor-at-a-root]]: if a polynomial vanishes at $c$, it is divisible by $x-c$.

[F6] [[thm-algebra-of-continuous-functions]] and [[def-continuity-real]]: polynomial functions and products of continuous functions are continuous.

[F7] [[lem-na-polynomial-coefficient-bound-from-fixed-nodes]]: for fixed distinct nodes, bounded polynomial values give a fixed bound on all coefficients.

[F8] [[thm-polynomial-degree-of-a-product-over-a-domain]]: degrees add for products of nonzero real polynomials.

[F9] [[thm-intermediate-value]]: a continuous real function on an interval takes every value between its endpoint values.

## Proof

1.1 Let $\gamma:=\min_{x\in I}w(x)>0$ and $M:=\|wf\|_{\infty,I}$. Positivity of $\gamma$ follows because the continuous positive function $w$ attains its minimum on compact $I$ by [F3]. In the coefficient space for pairs $(p,q)$ of degrees at most $(m,n)$ and an extra scalar $t$, define $K$ by $\|q\|_{\mathrm{coef},2}=1$, $q(x)\ge0$ on $I$, $0\le t\le M$, and $|w(x)(f(x)q(x)-p(x))|\le t q(x)$ for every $x\in I$. The triple $(0,1,M)$ lies in $K$, so $K$ is nonempty. [F1, F3, F6, given, construct]

2.1 The coefficient norm equation, the interval for $t$, and each pointwise inequality defining $K$ are closed conditions on the finite coefficient vector, so $K$ is closed. Its denominator coefficients have norm $1$, and for every $(p,q,t)\in K$, $|p(x)|\le(|f(x)|+M/\gamma)q(x)$ on $I$. The coefficient norm bound gives $\|q\|_{\infty,I}\le\sum_{j=0}^n\max(|a|,|b|)^j$, hence $\|p\|_{\infty,I}$ is uniformly bounded. For $m=0$, evaluation at one node bounds the sole coefficient of $p$. For $m\ge1$, evaluate at the $m+1$ distinct nodes $\tau_j=a+j(b-a)/m$; each value is bounded by $\|p\|_{\infty,I}$, so [F7] bounds every coefficient. Thus $K$ is bounded. [F1, F3, F7, step 1.1, algebra]

3.1 By [F3], $K$ is compact, so its coordinate function $(p,q,t)\mapsto t$ has a minimum $t_*$ at some $(p_*,q_*,t_*)\in K$. For every admissible rational $r=p/q$ with error at most $M$, [F1] supplies a normalized positive reduced representing pair, unique by [F2]; with $t=\|w(f-r)\|_{\infty,I}$ this triple belongs to $K$. Candidates with larger error exceed $M\ge t_*$. Therefore $t_*\le E_{m,n}(f,w;I)$. [F1, F2, F3, step 1.1, step 2.1, construct]

3.2 For the minimizing pair, $q_*$ is a nonzero nonnegative polynomial because its coefficient norm is $1$. Its zero set in $I$ is finite by [F4]. The defining inequality of $K$ and $w\ge\gamma$ give $|p_*(x)|\le(\|f\|_{\infty,I}+M/\gamma)q_*(x)$ for every $x\in I$. At any zero $c$ of $q_*$, repeated use of [F5] writes $q_*(x)=(x-c)^s u(x)$ with $u(c)\ne0$ and, if $p_*\ne0$, writes $p_*(x)=(x-c)^r v(x)$ with $v(c)\ne0$. If $p_*\ne0$ and $r<s$, then [F8] and [F4] give $q_*(x)>0$ on a punctured one-sided neighborhood of $c$ inside $I$. By continuity in [F6] and $u(c)v(c)\ne0$, $|v(x)|/|u(x)|$ is bounded below by a positive constant on a sufficiently small such neighborhood, so $|p_*(x)|/q_*(x)=|x-c|^{r-s}|v(x)|/|u(x)|$ is unbounded as $x\to c$ from within $I$, contradicting the displayed bound. Hence $p_*$ is divisible by the factor of $q_*$ at every interval zero; this is automatic if $p_*=0$. Thus every interval zero of $q_*$ cancels from the quotient. [F1, F4, F5, F6, F8, step 2.1, algebra]

4.1 For each interior zero $c$ of $q_*$, its multiplicity is even: an odd multiplicity would make $q_*$ change sign across $c$, contradicting $q_*\ge0$ on $I$. Form $H$ from the factors $(x-c)^s$ at interior zeros (where $s$ is even), $(x-a)^{s_a}$ at $a$ if it is a zero, and $(b-x)^{s_b}$ at $b$ if it is a zero. Then $H\ge0$ on $I$ and $H>0$ off the finite zero set of $q_*$. Step 3.2 shows that $H$ divides both $p_*$ and $q_*$. Write $p_*=H\bar p$ and $q_*=H\bar q$. The exact multiplicities included in $H$ make $\bar q$ nonzero at every zero of $q_*$; elsewhere, $q_*>0$ and $H>0$, so $\bar q>0$. Since $\bar q$ is continuous by [F6], positivity off the finite zero set makes it nonnegative at each removed zero; its nonvanishing there makes it positive on all of $I$. At every point outside those zeros, divide the defining inequality $|w(fq_*-p_*)|\le t_*q_*$ by $H$ to obtain $|w(f\bar q-\bar p)|\le t_*\bar q$. Thus $|w(f-\bar p/\bar q)|\le t_*$ there. The quotient $\bar p/\bar q$ and $w(f-\cdot)$ are continuous on $I$ by [F6], so the same bound holds at the cancelled zeros by continuity. Reduce $(\bar p,\bar q)$ using [F2]. The reduced denominator still has no zero on $I$ because it divides $\bar q$; it is continuous by [F6] and has constant sign by [F9] (otherwise the intermediate value theorem would give a zero). A common sign change makes it positive, and a further positive scaling gives coefficient norm $1$. The resulting pair is admissible and represents the same quotient, hence has error at most $t_*$. Therefore $E_{m,n}(f,w;I)\le t_*$. Together with step 3.1, equality holds and the infimum is attained. [F1, F2, F6, F9, step 3.1, step 3.2, algebra] ∎
