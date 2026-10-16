---
id: thm-qc-cyclotomic-norm-equation-decision
kind: theorem
title: Constructive decision of the dyadic cyclotomic norm equation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-cyclotomic-euclidean-factorization-and-units
  - def-qc-cyclotomic-bullet-automorphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Theorem 6.2 and Appendix C
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 3
---

## Statement

For every $\xi\in\mathbb Z[\sqrt2,1/2]$ there is a terminating exact
algorithm deciding whether $t^\dagger t=\xi$ has a solution
$t\in D=\mathbb Z[\omega,1/2]$, and returning such a solution when one
exists. A supplied prime factorization of the numerator of
$\xi^\bullet\xi$ is permissible but unnecessary for the finite-search
version below. No polynomial runtime bound is asserted.

More explicitly, reject a negative real embedding; handle $\xi=0$ by
$t=0$. Otherwise choose $r\ge0$ with $\eta=4^r\xi\in\mathbb Z[\sqrt2]$
and factor $\eta$ into primes of $O=\mathbb Z[\omega]$. Group the prime
associate classes into orbits of complex conjugation. There is a solution
exactly when every conjugation-fixed class has even exponent. The
conjugation-paired classes have equal exponents automatically. Allocate half
of each fixed exponent, and the whole exponent to one representative of each
pair, to form $s$. Recover a real unit $v$ with
$v^2=\eta/(s^\dagger s)$; then $t=vs/2^r$ is an exact solution.

## Facts & Assumptions

**Given:** The automorphisms $\bullet$ and $\dagger$ commute, and the two
real embeddings are the identity and $\bullet$ on
$\mathbb Q(\sqrt2)$.

[F1] [[lem-qc-cyclotomic-euclidean-factorization-and-units]] proves unique
factorization and a terminating factor algorithm in $O$, identifies
$O\cap\mathbb R=\mathbb Z[\sqrt2]$, and gives effective square roots of
real units positive at both embeddings.

## Proof


1.1 For any $t\in D$, both $t^\dagger t=|t|^2$ and $(t^\dagger t)^\bullet=|t^\bullet|^2$ are nonnegative. If either real embedding of $\xi$ is negative, reject. The signs are decidable by rational arithmetic and squaring the rational coefficients of $a+b\sqrt2$ after checking their signs. If either embedding is zero, injectivity of that embedding implies $\xi=0$, and the output $t=0$ suffices. Thus the remaining case has both embeddings strictly positive. Choose $r$ by clearing the powers of two in the two coefficients of $\xi$; multiplication by the positive rational square $4^r$ preserves their signs. [given, algebra, construct]

1.2 Put $\delta=1+\omega$ and $\lambda=1+\sqrt2$. Direct multiplication gives $N_O(\delta)=2$, $\delta^\dagger=\omega^{-1}\delta$, and $\delta^4=2i\lambda^2$. Norm two makes $\delta$ irreducible, hence prime by [F1]. As $i$ and $\lambda$ are units, the last identity shows that $2$ has just the prime associate class of $\delta$, with multiplicity four. Every element $w\in D$ has a unique-factorization valuation $v_\pi(w)\in\mathbb Z$ at each prime associate class of $O$, obtained from its integral numerator minus the valuations of its power-of-two denominator; only $v_\delta(w)$ can be negative. Conjugation acts on these valuations by permuting the prime classes, since it is a ring automorphism. In particular, for a fixed class, $v_\pi(w^\dagger w)=2v_\pi(w)$. [F1, given, algebra]

2.1 If $w^\dagger w=\eta\in O$ for $w\in D$, then $2v_\delta(w)=v_\delta(\eta)\ge0$, so all valuations of $w$ are nonnegative and $w\in O$. To see the last implication without any assumption on units of $D$, write $w=a/2^m$ with $a\in O$; its only possible denominator class is $\delta$, and the valuation inequality says $\delta^{4m}\mid a$, hence $2^m\mid a$. Consequently a solution to $t^\dagger t=\xi$ gives an integral solution $w=2^r t$ to $w^\dagger w=\eta$. Every conjugation-fixed prime exponent of $\eta$ must therefore be even. Conversely an integral solution for $\eta$ gives a solution for $\xi$ by division by $2^r$. This proves both necessity of the parity test and completeness of the denominator-clearing reduction. [step 1.1, step 1.2, algebra]

3.1 Factor nonzero $\eta$ by the finite algorithm of [F1]. Determine conjugation orbits by conjugating each factor and testing associates; $\eta^\dagger=\eta$ and uniqueness of prime factorization imply that both classes in every two-element orbit occur with the same exponent. This is also an effective prime splitting test: each factor is assigned either to a fixed class or to a pair of distinct conjugate classes; no unproved classification by rational primes modulo eight is required. If a fixed exponent is odd, reject as justified in step 2.1. Otherwise, for each fixed class of exponent $2h$ choose its displayed prime to power $h$, and for each pair of exponent $m$ choose one displayed prime to power $m$. Let $s$ be the product of these choices, with empty product one. Then $s^\dagger s$ and $\eta$ have exactly the same prime-class exponents. [F1, step 2.1, algebra, construct]

4.1 Their quotient $e=\eta/(s^\dagger s)$ is a unit of $O$ by unique factorization, and is real. Its inverse is real too, so it is a unit of $R=\mathbb Z[\sqrt2]$ by [F1]. Both embeddings of $s^\dagger s$ are strictly positive, as are those of $\eta$, so both embeddings of $e$ are positive. The unit-square construction of [F1] therefore returns $v\in R$ with $v^2=e$. Because $v^\dagger=v$, $(vs)^\dagger(vs)=e s^\dagger s=\eta$, and division by $2^r$ gives the claimed $t$. All loops terminate: denominator clearing is finite, factorization terminates, associate tests are exact, the factor list is finite, and square-root recovery terminates for a positive real unit. Together with the rejection cases and necessity this proves the entire decision and construction claim. [F1, step 1.1, step 3.1, algebra, construct] ∎

## Remarks

The proof supplies a complete terminating mode. Ross–Selinger Appendix C uses
rational-prime splitting and modular square-root algorithms for a faster mode.
Its expected polynomial runtime is a separate complexity assertion; it does
not follow from the finite-search construction here.
