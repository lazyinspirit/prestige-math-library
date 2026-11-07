---
dependency_level: 4
id: lem-choice-free-mobius-harmonic-tails-at-one
kind: lemma
title: "Exact Möbius harmonic sums at one with uniform Abel tails"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-mobius-character-sum-zero-free-log-saving
  - def-number-theoretic-mobius-function
  - cor-mobius-dirichlet-series-reciprocal-zeta
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-logarithm-derivative-and-integral
  - thm-ftc-first-part
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
      locator: "The local Abel normalization is derived from accepted Möbius cancellation and the unqualified right-half-plane zeta provider; no global zeta theorem or external asymptotic is imported."
---

## Statement

With the number-theoretic Möbius function, the conditionally convergent sums satisfy
$$\sum_{n\ge1}\frac{\mu(n)}n=0,\qquad \sum_{n\ge1}\frac{\mu(n)\log n}n=-1.$$
For every real $T>2$, uniformly in real $U\ge2$,
$$\sum_{n>U}\frac{\mu(n)}n=O_T((\log U)^{1-T}),\qquad \sum_{n>U}\frac{\mu(n)\log n}n=O_T((\log U)^{2-T}).$$
More precisely, the two series $\sum\mu(n)n^{-\sigma}$ and $\sum\mu(n)\log(n)n^{-\sigma}$ converge uniformly on $1\le\sigma\le2$, with these same respective tail bounds. In particular
$$\sum_{n\le U}\mu(n)/n=O_T((\log U)^{1-T}),\qquad \sum_{n\le U}\mu(n)\log(n)/n=-1+O_T((\log U)^{2-T}).$$
The constants can be ineffective. No choice hypothesis or global continuation of zeta is assumed, and no absolute convergence at $\sigma=1$ is asserted.

## Facts & Assumptions

**Given:** A fixed $T>2$ and the Möbius function; all integer endpoints in sums are fully weighted.

[F1] [[thm-mobius-character-sum-zero-free-log-saving]] with the principal character modulo one gives $|M(t)|\le C_Tt(\log t)^{-T}$ for every real $t\ge2$, where $M(t)=\sum_{n\le t}\mu(n)$, without a choice assumption.

[F2] [[cor-mobius-dirichlet-series-reciprocal-zeta]] gives $\sum\mu(n)n^{-s}=1/\zeta(s)$ on $\operatorname{Re}s>1$.

[F3] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives $\zeta(s)=s/(s-1)-s\int_1^\infty\{t\}t^{-s-1}dt$ on $\operatorname{Re}s>0$, with holomorphic integral and a residue-one pole at one; its Statement has no choice hypothesis.

[F4] [[thm-logarithm-derivative-and-integral]] gives $\log'(t)=1/t$. [[thm-ftc-first-part]] differentiates a proper integral of a continuous function, including one-sided endpoints.

[F5] [[def-number-theoretic-mobius-function]] gives $|\mu(n)|=\mu(n)^2$, equal to one exactly at squarefree integers.

## Proof

1.1 By [F3] write $\zeta(s)=1/(s-1)+g(s)$ with $g$ holomorphic near one. Continuity makes $g$ bounded on one sufficiently small closed disc; choose its radius smaller if necessary so that $|(s-1)g(s)|<1/2$. The function [F3, given, construct, algebra]
$$H(s)=\frac{s-1}{1+(s-1)g(s)}$$
is therefore holomorphic on that disc, equals $1/\zeta(s)$ off one, and satisfies $H(1)=0$, $H'(1)=1$ by its difference quotient. Only the right-half-plane provider is used; its global countable-choice continuation is unnecessary. [F3, given, construct, algebra]

1.2 For $2\le U<V$ and a continuously differentiable real weight $w$, finite summation by parts gives [F1, F4, given, algebra]
$$\sum_{U<n\le V}\mu(n)w(n)=M(V)w(V)-M(U)w(U)-\int_U^V M(t)w'(t)\,dt.$$
This identity follows by integrating the step function $M$ on intervals between integers; the jumps at integral $U,V$ give exactly the stated half-open sum. At $1\le\sigma\le2$, the weights $w=t^{-\sigma}$ and $w=(\log t)t^{-\sigma}$ have derivatives bounded respectively by $2/t^2$ and $(1+2\log t)/t^2$. For $M$ use [F1]. The boundary terms vanish uniformly as $V\to\infty$, and [F4] evaluates
$$\int_U^\infty\frac{dt}{t(\log t)^T}=\frac{(\log U)^{1-T}}{T-1},\qquad \int_U^\infty\frac{dt}{t(\log t)^{T-1}}=\frac{(\log U)^{2-T}}{T-2}.$$
Together with the boundary terms at $U$, these prove the two uniform tail bounds of the Statement. They also prove convergence by a uniform Cauchy estimate; no interchange of an unbounded unestimated tail is made. [F1, F4, given, algebra]

2.1 Put $P_Y(\sigma)=\sum_{n\le Y}\mu(n)n^{-\sigma}$ and $Q_Y(\sigma)=\sum_{n\le Y}\mu(n)\log(n)n^{-\sigma}$. Step 1.2 shows that these continuous finite sums converge uniformly on $[1,2]$ to functions $P,Q$. The limits are continuous: for any error tolerance first approximate by one finite continuous sum uniformly, then use its continuity. Finite differentiation gives $P_Y'=-Q_Y$; equivalently integrate each exponential $n^{-\sigma}$ to obtain [F4, step 1.2, algebra]
$$P_Y(b)-P_Y(a)=-\int_a^b Q_Y(t)dt\qquad(1\le a\le b\le2).$$
Uniform convergence permits passage through this proper Riemann integral, since its error is at most $(b-a)\sup|Q_Y-Q|$. Hence $P(b)-P(a)=-\int_a^b Q(t)dt$ and [F4] gives the right derivative $P'(1)=-Q(1)$. [F4, step 1.2, algebra]

2.2 To verify the word “conditionally”, let $A(X)=\sum_{n\le X}\mu(n)^2$. Every nonsquarefree positive integer is divisible by $m^2$ for some integer $m\ge2$, by [F5]. A finite union bound gives [F4, F5, step 1.2, algebra]
$$A(X)\ge\lfloor X\rfloor-\sum_{2\le m\le\sqrt X}\lfloor X/m^2\rfloor\ge X/4-1,$$
since $\sum_{m\ge2}m^{-2}\le1/4+\int_2^\infty t^{-2}dt=3/4$. Thus $A(X)\ge X/8$ for $X\ge8$. The same finite telescoping identity as step 1.2, now with this nonnegative counting function and including its term at $n=1$, gives $\sum_{n\le X}\mu(n)^2/n=A(X)/X+\int_1^X A(t)t^{-2}dt\ge(\log(X/8))/8$ for $X\ge8$. Hence the first series is not absolutely convergent. For $n\ge2$, $|\mu(n)|\log(n)/n\ge(\log2)\mu(n)^2/n$, so neither is the second. [F4, F5, step 1.2, algebra]

3.1 For real $\sigma>1$ near one, [F2] and step 1.1 identify $P(\sigma)=H(\sigma)$. Continuity in step 2.1 and $H(1)=0$ imply $P(1)=0$. Their right difference quotients at one also agree, so $-Q(1)=P'(1)=H'(1)=1$. Thus $Q(1)=-1$. Subtracting the uniform tails of step 1.2 proves the truncated identities as well as the complete sum values. The argument includes $\mu(1)=1$ and $\mu(1)\log1=0$ and every real $U\ge2$; the one fixed ineffective constant from [F1] suffices. [F2, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
