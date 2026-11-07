---
dependency_level: 6
id: thm-choice-free-bombieri-vinogradov-and-prime-level
kind: theorem
title: "Unqualified Bombieri–Vinogradov endpoints and levels below one half"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - lem-vaughan-large-conductor-primitive-character-first-moment
  - thm-dirichlet-character-orthogonality
  - thm-dirichlet-character-primitive-induction
  - def-induced-dirichlet-character
  - thm-fundamental-theorem-of-arithmetic
  - thm-euler-totient-product-formula
  - def-number-theoretic-mobius-function
  - def-von-mangoldt-function
  - def-prime-progression-discrepancy
  - def-prime-level-of-distribution
  - thm-logarithm-derivative-and-integral
  - thm-logarithm-slower-than-every-positive-power
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is assumed; explicit finite sums, proper Riemann integrals and proved uniform numerical tails suffice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Green and Tao, The Möbius function is strongly orthogonal to nilsequences"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf"
      locator: "AppendixA PropositionA.1, printed p.565, for the Möbius cancellation interface supplied by the accepted local theorem. No external result imported."
    - title: "Terence Tao, 254A Notes3, The large sieve and the Bombieri–Vinogradov theorem"
      url: "https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/"
      locator: "Theorem17 finite primitive-conductor reduction; the exact9/2weighted primitive moment is supplied by its accepted local lemma. The new SW route replaces the old choice-qualified input without editing that theorem."
---

## Statement

For every real $A>0$ there are $C_A>0$ and $x_A\ge3$ such that for every real $x\ge x_A$,
$$\sum_{1\le q\le x^{1/2}(\log x)^{-2A-6}}\max_{a\in(\mathbb Z/q\mathbb Z)^\times}|E_\psi(x;q,a)|\le C_Ax(\log x)^{-A}.$$
Consequently the primes have level of distribution $\theta$ for every fixed $0<\theta<1/2$ in [[def-prime-level-of-distribution]]. The endpoint discrepancy uses full von Mangoldt weights, includes $q=1$ and takes no maximum over endpoints. The constants can be ineffective. No choice hypothesis is assumed.

## Facts & Assumptions

**Given:** $A>0$, the full endpoint convention and, for the final consequence, a fixed $0<\theta<1/2$.

[F1] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] gives unqualified SW bounds for all fixed logarithmic modulus and saving exponents, including $q=1$, real $x\ge3$ and full endpoints.

[F2] [[lem-vaughan-large-conductor-primitive-character-first-moment]] gives, for $x\ge3$, $2\le R\le Q\le\sqrt x$, $U,V\ge2$ and $UV\le x$,
$$\sum_{R<r\le Q}\frac1{\varphi(r)}\sum_{\xi\bmod r}^{*}|\psi(x,\xi)|\ll\left(\frac xR+Q\sqrt x+\frac x{\sqrt U}+\frac x{\sqrt V}\right)(\log(2x))^{9/2}+UVQ^{3/2}(\log(2x))^2.$$
Its Statement is unqualified and has exactly this retained weight, with no endpoint maximum.

[F3] [[thm-dirichlet-character-orthogonality]] gives both finite orthogonality relations. [[thm-dirichlet-character-primitive-induction]] gives a unique primitive ancestor of conductor dividing the modulus. [[def-induced-dirichlet-character]] specifies agreement on units and zero on nonunits.

[F4] [[thm-fundamental-theorem-of-arithmetic]], [[thm-euler-totient-product-formula]], [[def-number-theoretic-mobius-function]] and [[def-von-mangoldt-function]] give finite factorization, $\varphi(n)=n\prod_{p\mid n}(1-1/p)$, squarefree indicator $\mu^2$, and the prime-power support of $\Lambda$.

[F5] [[thm-logarithm-derivative-and-integral]] gives harmonic integral bounds. [[thm-logarithm-slower-than-every-positive-power]] makes every fixed logarithmic power dominated by every fixed positive power.

[F6] [[def-prime-progression-discrepancy]] defines the full endpoint error; [[def-prime-level-of-distribution]] requires every positive logarithmic saving in the sum over $q\le x^\theta$.

## Proof

1.1 The finite totient formula [F4] gives $\varphi(rs)\ge\varphi(r)\varphi(s)$: a shared prime contributes ratio $(1-1/p)^{-1}\ge1$. The same formula gives [F4, F5, given, algebra]
$$\frac n{\varphi(n)}=\sum_{d\mid n}\frac{\mu(d)^2}{\varphi(d)}.$$
Indeed each prime on the right contributes $1+1/(p-1)=(1-1/p)^{-1}$. Thus for real $Y\ge1$, changing the finite order of summation and using [F5] yields
$$\sum_{s\le Y}\frac1{\varphi(s)}=\sum_{d\le Y}\frac{\mu(d)^2}{d\varphi(d)}\sum_{k\le Y/d}\frac1k \le(1+\log Y)\prod_{p\le Y}\left(1+\frac1{p(p-1)}\right)\le e(1+\log Y).$$
The last bound follows from $1+u\le e^u$ and $\sum_{n\ge2}1/[n(n-1)]=1$. In particular, for $r\le Q\le\sqrt x$,
$$\sum_{s\le Q/r}\frac1{\varphi(rs)}\ll\frac{\log x}{\varphi(r)}.$$
No mean totient estimate is imported. [F4, F5, given, algebra]

1.2 Put $L=\log x$, $Q=x^{1/2}L^{-2A-6}$, $R=L^{A+7}$ and $U=V=L^{2A+14}$. For fixed $E,\delta>0$, [F5] at exponent $\delta/E$ gives $(\log x)^E/x^\delta\to0$ by taking $E$th powers. For sufficiently large $x$ depending only on $A$, this implies $2\le R\le Q\le\sqrt x$, $U,V\ge2$ and $UV\le x$. Thus these real cutoffs meet every parameter requirement of [F2]. All modulus and character sums below are finite, over integer moduli. [F5, given, construct, algebra]

2.1 By [F3] and [F6], [F1, F3, F4, F6, step 1.1, step 1.2, algebra]
$$\max_{(a,q)=1}|E_\psi(x;q,a)|\le\frac{|\psi(x,\chi_0)-x|}{\varphi(q)}+\frac1{\varphi(q)}\sum_{\chi\ne\chi_0}|\psi(x,\chi)|.$$
If $\xi$ is the primitive ancestor of $\chi$, the only removed nonzero weights are powers of primes dividing $q$. Their total absolute weight is at most $\omega(q)\log x\ll\log(2q)L$ by [F4]. Summing these induction errors after division by $\varphi(q)$ costs $O(QL^2)$, since orthogonality at unit $1$ counts exactly $\varphi(q)$ characters. In particular $\psi(x,\chi_0)=\psi(x)+O(\log(2q)L)$. Apply [F1] at modulus one with saving $A+2$ and use step 1.1: the principal total is $O_A(xL^{-A-1})+O(QL^2)$. This includes $q=1$, which has no nonprincipal characters. [F1, F3, F4, F6, step 1.1, step 1.2, algebra]

3.1 For each primitive $\xi$ of conductor $r$, its induced character at a multiple $q$ is unique by the explicit unit pullback in [F3]. A nonprincipal character cannot have the principal conductor-one ancestor, since that pullback is principal. Thus, after the errors in step 2.1, the remaining discrepancy is bounded by [F3, step 1.1, step 1.2, step 2.1, algebra]
$$CL\sum_{r\le Q}\frac1{\varphi(r)}\sum_{\substack{\xi\bmod r\ \mathrm{primitive}\\\xi\ \mathrm{nonprincipal}}}|\psi(x,\xi)|.$$
This follows by summing over the multiples $q=rs$ and applying the last bound of step 1.1. It uses finite unique induction, not selection of an infinite family. No maximum over endpoints is introduced. [F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 For $r\le R$ use [F1] with modulus exponent $D=A+7$ and saving $K=3A+18$. Expanding $\psi(x,\xi)$ over reduced classes, the nonprincipal class sum of $\xi$ is zero by [F3], so its main term cancels and [F1, F3, F4, step 1.2, step 3.1, algebra]
$$|\psi(x,\xi)|\ll_A\varphi(r)xL^{-K}.$$
There are at most $\varphi(r)\le r$ primitive characters. Their entire contribution to step 3.1 is therefore
$$\ll_A LR^2xL^{-K}=xL^{-A-3}.$$
Every small nonprincipal conductor is included, with no exceptional character discarded. [F1, F3, F4, step 1.2, step 3.1, algebra]

4.2 For $R<r\le Q$ apply exactly [F2], then multiply by the single lifting factor $L$ in step 3.1. Each of $x/R$, $x/\sqrt U$ and $x/\sqrt V$, with its factor $(\log(2x))^{9/2}L$, is $O_A(xL^{-A-3/2})$. Its $Q\sqrt x$ term becomes $O_A(xL^{-2A-1/2})$, bounded by $O_A(xL^{-A})$ since $A>0$. The Type-I term is [F2, F5, step 1.2, step 2.1, step 3.1, algebra]
$$LUVQ^{3/2}(\log(2x))^2\ll_A x^{3/4}L^{A+22}=o_A(xL^{-A})$$
by [F5]. The earlier induction error $QL^2=x^{1/2}L^{-2A-4}$ is also $o_A(xL^{-A})$. The $9/2$ exponent and the weight $1/\varphi(r)$ are precisely those in [F2]; no weakening or unproved strengthening of a public large sieve is used. [F2, F5, step 1.2, step 2.1, step 3.1, algebra]

5.1 Add the estimates in steps 2.1, 4.1 and 4.2 to obtain the stated endpoint bound for all $x$ beyond one threshold $x_0(A)\ge3$. A bounded initial interval causes no problem: for $3\le x\le x_0$, the modulus count is at most $\sqrt{x_0}$ since $\log x>1$, and each error is at most $x\log x+x$ by [F4] and [F6]. Enlarging the constant by $\sqrt{x_0}(1+\log x_0)(\log x_0)^A$ covers this interval uniformly as well; in particular one can select constants and an $x_A\ge3$ as in the Statement. The estimate is ineffective only through [F1]. The old qualified SW/BV theorem is not an input to this deduction. [F4, F6, step 2.1, step 4.1, step 4.2, given, algebra]

6.1 Fix $0<\theta<1/2$ and any saving exponent $A>0$. Put $\delta=1/2-\theta>0$. By [F5], $x^\delta/(\log x)^{2A+6}\to\infty$, so $x^\theta\le x^{1/2}(\log x)^{-2A-6}$ for all sufficiently large $x$ depending on $\theta,A$. Restrict the nonnegative endpoint sum of step 5.1 to $q\le x^\theta$. Its bound is exactly the full-weight level estimate of [F6], with the same reduced-class maximum, $q=1$, and every fixed $A>0$. This proves the level consequence without invoking the old choice-qualified cutoff corollary. [F5, F6, step 5.1, given, algebra] ∎
