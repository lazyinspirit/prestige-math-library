---
id: lem-crt-bounded-sum-concentration
kind: lemma
title: "CRT concentration for bounded prime-residue sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chinese-remainder-theorem, def-prime]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Tao"
      url: https://arxiv.org/pdf/1509.05422v4
      locator: "Lemma 3.5, PDF pp. 24\u201325; finite complex version"
---

## Statement

Let $\mathcal P$ be a finite set of distinct primes, $P=\prod_{p\in\mathcal P}p$, and let $Y$ be uniform on $\mathbb Z/P\mathbb Z$. For functions $F_p:\mathbb Z/p\mathbb Z\to\mathbb C$ with $|F_p|\le b_p$ put $F(Y)=\sum_pF_p(Y\bmod p)$ and $V=\sum_pb_p^2$. If $V>0$ and $u>0$, then
$$\mathbb P(|F-\mathbb EF|\ge u)\le4\exp(-u^2/(4V)).$$
For the graph specialization, let $a,H$ be positive integers, $\varepsilon>0$ real, and $h,b$ integers. Let $c_p$ for $p\in\mathcal P$ and $x_{i,j}$ for $i\in\{1,2\}$ and integers $1\le j\le H$ be complex numbers of modulus at most one. Suppose $\mathcal P\subseteq[\varepsilon^2H/2,\varepsilon^2H]$ and $p\nmid a$ for every $p\in\mathcal P$. Then the graph sum $F_p(y)=c_p\sum_{j:j,j+ph\in[1,H]}1_{ay+j\equiv pb\ ({\rm mod}\ ap)}x_{1,j}x_{2,j+ph}$ satisfies $|F_p(y)|\le1+2/\varepsilon^2$ for every $y\in\mathbb Z/p\mathbb Z$, so one may take $b_p=1+2/\varepsilon^2$.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

[F1] [[thm-chinese-remainder-theorem]] gives a bijection from residues modulo the product of a finite pairwise-coprime list of positive moduli to its residue vectors, including the empty list.

[F2] [[def-prime]] says a prime is greater than one and has only itself and one as positive divisors.

## Proof

1.1 The prime moduli are pairwise coprime: a positive common divisor of distinct primes $p,q$ must be either $1$ or $p$, and either $1$ or $q$, by [F2]; the alternative to $1$ would force $p=q$. Enumerate the finite prime set and apply [F1]. Its bijection sends the uniform residue modulo $P$ to the uniform law on the finite product of residue sets. Each coordinate vector has probability $1/P=\prod_{p\in\mathcal P}1/p$, so the coordinates are independent and uniform. Each real or imaginary part of $F_p$ lies in $[-b_p,b_p]$. [F1, F2, given, algebra]

2.1 For a real variable $Z$ in $[A,B]$, convexity bounds its exponential by the chord between endpoints. This gives $\mathbb E e^{t(Z-\mathbb EZ)}\le e^{t^2(B-A)^2/8}$: after scaling to $[0,1]$, the logarithm of the chord expectation minus its linear term has value and derivative zero at $t=0$, and second derivative at most $1/4$, the variance of a Bernoulli variable. Integrate that derivative bound twice. Independence and exponential Markov then give $\mathbb P(|\Re(F-\mathbb EF)|\ge v)\le2e^{-v^2/(2V)}$, optimizing at $t=v/V$; the imaginary part obeys the same bound. [step 1.1, algebra]

3.1 A complex number of modulus at least $u$ has a real or imaginary part of absolute value at least $u/\sqrt2$. The union bound proves the first claim. In the graph sum the congruence implies $j\equiv-ay\pmod p$, so there are at most $1+H/p\le1+2/\varepsilon^2$ contributing $j$. The simultaneous congruence modulo $a$ can only decrease their number. [step 2.1, given, algebra] ∎
