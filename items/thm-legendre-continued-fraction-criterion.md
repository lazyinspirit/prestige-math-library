---
id: thm-legendre-continued-fraction-criterion
kind: theorem
title: "Legendre's criterion for convergents"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergents-of-regular-continued-fraction, def-continued-fraction-complete-quotients, lem-continued-fraction-error-bound, thm-continued-fraction-convergents-are-best-approximations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Approximation by Rational Numbers"
      url: "https://sites.millersville.edu/bikenaga/number-theory/approximation-by-rationals/approximation-by-rationals.html"
pipeline_run: null
---

## Statement

Let $\alpha$ be an irrational real number. If $r,s\in\mathbb{Z}$ satisfy
$s>0$, $\gcd(r,s)=1$, and
$$\left|\alpha-\frac{r}{s}\right|<\frac1{2s^2},$$
then $r/s$ is a convergent of $\alpha$.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$ with convergents $p_n/q_n$, and a
reduced rational number $r/s$ with $s>0$.

[F1] The convergent denominators satisfy $q_0=1$, $q_1=a_1\ge1$, and
$q_{n+1}=a_{n+1}q_n+q_{n-1}$ with $a_{n+1}\ge1$. Hence they are strictly
increasing from $q_1$ onward. Moreover
$q_{n+2}\ge q_{n+1}+q_n\ge q_n+1$, so they are unbounded
([[def-convergents-of-regular-continued-fraction]]).

[F2] For $n\ge1$, the contrapositive of the best-approximation theorem says
that if $s<q_{n+1}$, then
$$|s\alpha-r|\ge |q_n\alpha-p_n|.$$
([[thm-continued-fraction-convergents-are-best-approximations]]).

[F3] For an irrational $\alpha$, the first complete quotient is defined and
$$\alpha=a_0+\frac1{\alpha_1},\qquad \alpha_1>a_1=q_1.$$
([[def-continued-fraction-complete-quotients]]).

## Proof

**Proof technique:** direct.

1.1 First suppose $s<q_1$. By [F3]. [F3, given, algebra]
$$0<\alpha-a_0=\frac1{\alpha_1}<\frac1{q_1}\le\frac12.$$
If $r/s\ne a_0$, then $|r-sa_0|\ge1$. Since the integers satisfy
$q_1\ge s+1$, the reverse triangle inequality gives
$$\left|\alpha-\frac rs\right|\ge \left|\frac rs-a_0\right|-|\alpha-a_0|>\frac1s-\frac1{q_1}\ge\frac1s-\frac1{s+1}=\frac1{s(s+1)}\ge\frac1{2s^2},$$
contrary to the hypothesis. Hence $r/s=a_0=p_0/q_0$ is the zeroth convergent.
[F3, given, algebra]

1.2 It remains to suppose $q_1\le s$. Since the denominators are unbounded. [F1, given]
and strictly increase from $q_1$ onward, [F1] gives an index $n\ge1$ with
$$q_n\le s<q_{n+1}.$$ [F1, given]

2.1 Assume $r/s\ne p_n/q_n$. Since $s<q_{n+1}$, [F2] and the hypothesis give. [step 1.2, F2, given, algebra]
$$|q_n\alpha-p_n|\le |s\alpha-r|<\frac1{2s}.$$ [step 1.2, F2, given, algebra]

3.1 Since $rq_n-sp_n$ is a nonzero integer when $r/s\ne p_n/q_n$, one has. [step 2.1, given, algebra]
$$1\le |rq_n-sp_n| = sq_n\left|\frac{r}{s}-\frac{p_n}{q_n}\right|.$$
Using the triangle inequality and step 2.1,
$$|rq_n-sp_n|\le q_n|r-s\alpha|+s|q_n\alpha-p_n|\le(q_n+s)|s\alpha-r|<\frac{q_n+s}{2s}\le1,$$
a contradiction. Therefore $r/s=p_n/q_n$, so $r/s$ is a convergent. [step 2.1, given, algebra] ∎
