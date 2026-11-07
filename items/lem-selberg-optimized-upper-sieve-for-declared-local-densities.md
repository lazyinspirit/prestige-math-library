---
id: lem-selberg-optimized-upper-sieve-for-declared-local-densities
kind: lemma
title: Selberg's exact upper sieve for arbitrary declared local densities
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [def-number-theoretic-mobius-function]
justified_by: []
proof_strategy: direct
axiom_use: Finite sums, products and exact algebra; no choice or measure hypothesis.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Kiran Kedlaya, Notes on Analytic Number Theory, Chapter13
      url: https://kskedlaya.org/ant/chap-selberg.html
      locator: Sections13.1–13.2, Theorem13.1 and the following vanLint–Richert coefficient bound; zero-density extension locally proved.
---

## Statement

Let $\mathcal P$ be a finite set of primes, possibly empty, $P=\prod_{p\in\mathcal P}p$, and let $a(n)\ge0$ have finite support on positive integers. Let $X>0$, let $g$ be multiplicative on squarefree divisors of $P$ with $g(1)=1$ and $0\le g(p)<1$, and write
$$A_d:=\sum_{d\mid n}a(n)=Xg(d)+r_d\quad(d\mid P),\qquad S=\sum_{(n,P)=1}a(n).$$
No relation between $g(p)$ and a cardinality of residue classes is assumed. Fix $Z>1$, define $h(p)=g(p)/(1-g(p))$ multiplicatively with $h(1)=1$, and put
$$H=\sum_{d\mid P,\ d<Z}h(d)\ge1.$$
For $d\mid P$, $d<Z$, $g(d)>0$ set
$$\rho(d)=\frac{\mu(d)h(d)}{g(d)H}\sum_{\substack{m\mid P\\(m,d)=1\\dm<Z}}h(m),$$
and set $\rho(d)=0$ for every other $d$. Put
$$\lambda(q)=\sum_{[d,e]=q}\rho(d)\rho(e).$$
Then $\rho(1)=1$, $0\le\mu(d)\rho(d)\le1$, and $\lambda(q)=0$ unless $q\mid P$, $q<Z^2$. For squarefree $q$ one has $|\lambda(q)|\le3^{\omega(q)}$, including $q=1$. The upper bound is
$$S\le\frac XH+\sum_{q\mid P,\ q<Z^2}\lambda(q)r_q\le\frac XH+\sum_{q\mid P,\ q<Z^2}3^{\omega(q)}|r_q|.$$
Moreover, among every real array $t(d)$ supported on $d\mid P,d<Z$ with $t(1)=1$, the quadratic main factor $\sum_{d,e}t(d)t(e)g([d,e])$ has minimum exactly $1/H$, attained by $t=\rho$. Thus this supplies the exact optimized sieve for the declared model, not only for literal residue proportions.

## Facts & Assumptions

**Given:** The finite data and definitions in the Statement. Here $[d,e]$ is the least common multiple and $\omega(q)$ is the number of distinct prime factors of $q$.

[F1] [[def-number-theoretic-mobius-function]] gives $\mu(d)=(-1)^{\omega(d)}$ on squarefree integers, $\mu(1)=1$, and multiplicativity on coprime factors.

## Proof

1.1 Let $P_+$ be the product of the primes of $\mathcal P$ with $g(p)>0$. The value $h(d)$ is zero when $d$ contains a prime outside $P_+$; consequently $H=\sum_{d\mid P_+,d<Z}h(d)\ge h(1)=1$. The displayed formula defines $\rho$ on this positive subset and sets it zero on the other divisors, with no division by zero. At $d=1$ its numerator sum is $H$, so $\rho(1)=1$. All sums below range over the finite divisor-closed set $\mathcal D=\{d\mid P_+:d<Z\}$. [F1, given, construct, algebra]

2.1 First let $t$ be any real array on $\mathcal D$. Define $k(p)=(1-g(p))/g(p)>0$ on the prime divisors of $P_+$ and extend it multiplicatively, so $k(d)=1/h(d)$. For squarefree $d,e\mid P_+$, the prime-by-prime identities are [step 1.1, algebra]
$$g([d,e])=g(d)g(e)/g((d,e)),\qquad 1/g((d,e))=\sum_{r\mid(d,e)}k(r).$$
The latter follows by expanding $\prod_{p\mid(d,e)}(1+k(p))=\prod_{p\mid(d,e)}1/g(p)$. Reindexing the finite sums gives the exact diagonalization [step 1.1, algebra]
$$Q(t):=\sum_{d,e\in\mathcal D}t(d)t(e)g([d,e])=\sum_{r\in\mathcal D}k(r)Y_r^2,\qquad Y_r=\sum_{d\in\mathcal D,\ r\mid d}g(d)t(d).$$
This identity follows term by term in the finite double sum. [step 1.1, algebra]

3.1 The finite divisor transform in step2.1 has the inverse [F1, step 2.1, algebra]
$$g(d)t(d)=\sum_{r\in\mathcal D,\ d\mid r}\mu(r/d)Y_r.$$
Indeed substitution makes the coefficient of $g(e)t(e)$ equal to $\sum_{d\mid r\mid e}\mu(r/d)$, which is1 for $e=d$ and0 otherwise: for $e/d>1$ it is the expansion of $\prod_{p\mid e/d}(1-1)$. In particular $t(1)=1$ is equivalent to $\sum_r\mu(r)Y_r=1$. The support set is divisor-closed, so every intermediate divisor required by this cancellation belongs to $\mathcal D$. [F1, step 2.1, algebra]

4.1 Under this constraint, completing the finite squares gives [F1, step 1.1, step 2.1, step 3.1, algebra]
$$Q(t)-\frac1H=\sum_{r\in\mathcal D}k(r)\left(Y_r-\frac{\mu(r)h(r)}H\right)^2\ge0.$$
The cross term uses $\sum_r\mu(r)Y_r=1$, and the constant term is $H^{-2}\sum_rh(r)=1/H$. Equality is attained at $Y_r=\mu(r)h(r)/H$. Insert this in step3.1 and write $r=dm$; squarefreeness forces $(m,d)=1$ and $\mu(m)\mu(dm)=\mu(d)$. This gives exactly the displayed formula $t(d)=\rho(d)$. Hence $Q(\rho)=1/H$ and the minimum is achieved. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 For an arbitrary array on all $d\mid P,d<Z$, a term of its quadratic main factor vanishes whenever $g(d)g(e)=0$, because $g([d,e])=0$ there. Its main factor therefore depends only on its restriction to $\mathcal D$, with the same constraint at1. Step4.1 proves the same minimum over the full allowed set. Thus zero-density primes have been handled without silently deleting them from the asserted sifted sum or restricting the model. Nonuniqueness on those zero variables does not affect the stated minimum. [step 1.1, step 4.1, algebra]

6.1 To prove the coefficient bound, fix $d\in\mathcal D$. For each $m\mid P_+$ coprime to $d$ with $dm<Z$, and each divisor $e\mid d$, the product $em$ lies in $\mathcal D$. The pairs $(e,m)$ have distinct products, since $e=(em,d)$ recovers the first factor. Therefore [step 1.1, step 4.1, step 5.1, algebra]
$$H\ge\left(\sum_{e\mid d}h(e)\right)\sum_{\substack{m\mid P_+\\(m,d)=1\\dm<Z}}h(m)=\frac{h(d)}{g(d)}\sum_{\substack{m\mid P_+\\(m,d)=1\\dm<Z}}h(m).$$
Here $\sum_{e\mid d}h(e)=\prod_{p\mid d}(1+h(p))=\prod_{p\mid d}(1-g(p))^{-1}=h(d)/g(d)$. Dividing by $H$ proves $0\le\mu(d)\rho(d)\le1$. On the other integers $\rho=0$, so the same assertion holds. In particular $|\rho|\le1$. [F1, step 1.1, step 4.1, step 5.1, algebra]

7.1 If $n$ is sifted, its only supported divisor for $\rho$ is1, so $\sum_{d\mid n}\rho(d)=1$; for every other $n$ its square is nonnegative. Thus [step 1.1, step 6.1, algebra]
$$1_{(n,P)=1}\le\left(\sum_{d\mid n}\rho(d)\right)^2.$$
Expanding gives $\sum_{q\mid n}\lambda(q)$. A nonzero term has $q=[d,e]\mid P$ and $q\le de<Z^2$. At a squarefree $q$, each prime must be in $d$ only, $e$ only, or both, giving exactly $3^{\omega(q)}$ possible ordered pairs before the cutoff; $|\rho|\le1$ bounds the absolute coefficient by this number. At $q=1$ there is one pair $(1,1)$, consistent with $\lambda(1)=1$. [step 1.1, step 6.1, algebra]

8.1 Multiply the inequality of step7.1 by $a(n)\ge0$ and sum over its finite support. Interchanging these finite sums and inserting the DECLARED model gives [step 4.1, step 5.1, step 7.1, algebra]
$$S\le\sum_q\lambda(q)A_q=X\sum_q\lambda(q)g(q)+\sum_q\lambda(q)r_q=\frac XH+\sum_q\lambda(q)r_q.$$
The last equality is $Q(\rho)=1/H$. The support and coefficient bound in step7.1 then give the final weighted-remainder estimate. Empty prime sets, zero coefficients, and cutoffs $Z$ admitting only1 all give the same formulas with $H=1$; no exceptional branch or limiting argument is required. This proves every assertion. [step 1.1, step 4.1, step 5.1, step 7.1, algebra] ∎

## Source notes

**Statement adaptation:** Kedlaya's complete Chapter13 derivation already uses a declared multiplicative $g$, independent of literal residue proportions. The positive-density quadratic optimizer is reconstructed above by a finite diagonalization and square completion. The vanLint–Richert coefficient bound stated as an exercise there is fully proved by the injection in step6.1, and zero-density primes are handled explicitly. No external sieve theorem is an input. The existing narrower residue-class Selberg theorem is retained unchanged; its proof is not re-audited. This supplier alone does not prove Chen's specialized switched estimate, its distribution hypotheses or numerical constant.
