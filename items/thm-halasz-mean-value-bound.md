---
dependency_level: 5
id: thm-halasz-mean-value-bound
kind: theorem
title: "Halász mean-value bound for 1-bounded multiplicative functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-multiplicative-arithmetic-function
  - def-halasz-minimal-pretentious-distance
  - lem-halasz-minimal-distance-is-well-defined
  - lem-halasz-completely-multiplicative-mean-bound
  - lem-halasz-multiplicative-reduction-to-completely-multiplicative-case
  - thm-fundamental-theorem-of-arithmetic
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
    - title: "Andrew Granville, Adam J. Harper, and K. Soundararajan, A New Proof of Halász’s Theorem, and Its Consequences"
      url: "https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf"
---

## Statement

Let $f:\mathbb Z_{>0}\to\mathbb C$ satisfy $f(1)=1$,
$f(mn)=f(m)f(n)$ whenever $m,n$ are coprime positive integers, and
$|f(n)|\le1$ for every $n\ge1$. For real $x\ge3$ and $T\ge1$, define

$$ M(f;x,T):=\min_{|t|\le T}\sum_{p\le x}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p},\qquad p^{-it}:=\exp(-it\log p). $$

There is an absolute constant $C$ such that

$$ \frac1x\left|\sum_{n\le x}f(n)\right|\le C\left((1+M(f;x,T))e^{-M(f;x,T)}+\frac1T+\frac{\log\log x}{\log x}\right). $$

## Statement references

[[def-multiplicative-arithmetic-function]]

[[def-halasz-minimal-pretentious-distance]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §6.1–§6.5, PDF pp. 38–44](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

[Granville, Harper, and Soundararajan, “A New Proof of Halász’s Theorem,” Theorem 1.1 and §2.3, PDF pp. 2, 11–12](https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf)


## Facts & Assumptions

**Given:** $f,x,T$ satisfying all hypotheses in the Statement.

[F1] Unique prime factorization holds ([[thm-fundamental-theorem-of-arithmetic]]).

[F2] The completely multiplicative estimate holds uniformly for every real $y\ge3,U\ge1$, with an absolute constant ([[lem-halasz-completely-multiplicative-mean-bound]]).

[F3] A bounded multiplicative function inherits that uniform estimate from the completely multiplicative function agreeing with it on primes, for $x\ge9$, with a constant depending only on the complete-case constant ([[lem-halasz-multiplicative-reduction-to-completely-multiplicative-case]]).

[F4] The attained minimum is the finite prime sum in the Statement ([[def-halasz-minimal-pretentious-distance]], [[lem-halasz-minimal-distance-is-well-defined]]).

## Proof

1.1 Define $g(1)=1$ and $g(n)=\prod_{p\mid n}f(p)^{v_p(n)}$, where $v_p(n)$ is the exponent of $p$ in $n$. By [F1], this is well-defined and completely multiplicative. Since $|f(p)|\le1$, $|g(n)|\le1$, and $g(p)=f(p)$ for every prime. Thus [F4] gives $M(g;y,U)=M(f;y,U)$ for every $y,U$ in their domains. [given, F1, F4, construct, algebra]

2.1 Apply [F2] to this fixed $g$ for all $y\ge3,U\ge1$. Its absolute constant is independent of $g$, so the full uniform hypothesis of [F3] holds with a single constant. Therefore [F3] proves the Statement for every $x\ge9,T\ge1$, with an absolute resulting constant. [F2, F3, step 1.1]

2.2 For $3\le x\le9$, the left side is at most $1$. The continuous function $\log\log x/\log x$ is positive on this closed interval and has a positive lower bound (for instance $\log\log3/\log9$). Enlarging the absolute constant absorbs this bounded range. Combining with step 2.1 proves all asserted ranges. [given, step 2.1, algebra] ∎
