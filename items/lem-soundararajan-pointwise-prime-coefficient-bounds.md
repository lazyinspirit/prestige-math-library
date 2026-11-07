---
id: lem-soundararajan-pointwise-prime-coefficient-bounds
kind: lemma
title: "Pointwise prime bounds for a Hecke-multiplicative sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-hecke-multiplicative-maass-eigenvalue-sequence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§3, Lemma 3.1 and its proof, printed pp. 5–6."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, discussion of Hecke eigenvalues and arithmetic quantum limits, pp. 11–13."
---

## Statement

Let $f:\mathbb N\to\mathbb C$ be Hecke-multiplicative, let $x\ge1$, put
$S_x=\sum_{n\le x}|f(n)|^2$, and define
$F_x(t)=S_x^{-1}\sum_{n\le x/t}|f(n)|^2$ for $1\le t\le x$ and $F_x(t)=0$ for $t>x$.
For every prime $p\le x$ with $F_x(p)>0$,
$$|f(p)|\le\frac2{\sqrt{F_x(p)}}.$$
For every prime $p\le\sqrt x$ with $F_x(p^2)>0$,
$$|f(p)|\le\frac2{F_x(p^2)^{1/4}}.$$

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §3, Lemma 3.1, printed pp. 5–6.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 11–13.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A Hecke-multiplicative sequence $f$, a real $x\ge1$, and the functions $S_x,F_x$ in the Statement.

[F1] $f(1)=1$ and $f(m)f(n)=\sum_{d\mid\gcd(m,n)}f(mn/d^2)$ for all positive $m,n$ ([[def-hecke-multiplicative-maass-eigenvalue-sequence]]).

## Proof

1.1 If $p$ is prime, [F1] gives
$$f(p)f(n)=f(pn)+\mathbf1_{p\mid n}f(n/p),$$
where the second term is zero when $p\nmid n$. Thus
$$|f(p)|^2\sum_{n\le x/p}|f(n)|^2
=\sum_{n\le x/p}|f(p)f(n)|^2
\le2\sum_{n\le x/p}\bigl(|f(pn)|^2+\mathbf1_{p\mid n}|f(n/p)|^2\bigr)
\le4S_x.$$
The first sum on the right is over distinct integers $pn\le x$; in the second, writing $n=pm$ gives distinct $m\le x/p^2$. Dividing by $S_x$ proves the first bound. [F1, given, algebra]

1.2 The same relation at $p^2$ gives
$$f(p^2)f(n)=f(p^2n)+\mathbf1_{p\mid n}f(n)+\mathbf1_{p^2\mid n}f(n/p^2).$$
For $p\le\sqrt x$, square the triangle inequality and sum over $n\le x/p^2$ to obtain
$$|f(p^2)|^2\sum_{n\le x/p^2}|f(n)|^2\le9S_x,$$
because each of the three index maps contributes a sub-sum of $S_x$. Hence
$|f(p^2)|\le3F_x(p^2)^{-1/2}$. The Hecke identity gives $f(p^2)=f(p)^2-1$, so
$$|f(p)|^2\le |f(p^2)|+1\le4F_x(p^2)^{-1/2},$$
using $0<F_x(p^2)\le1$. Taking square roots proves the second bound. [F1, given, algebra] ∎
