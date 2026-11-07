---
dependency_level: 3
id: lem-prime-supported-halasz-montgomery-from-selberg-weights
kind: lemma
title: Prime-supported Halász–Montgomery bound from Selberg weights
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-short-interval-prime-sum-calculus
- thm-selberg-sieve-upper-bound-with-remainders
- lem-real-cutoff-tent-dirichlet-kernel-main-term
- thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Matomäki–Radziwiłł, Multiplicative Functions in Short Intervals, Lemmas8,11,13; elementary local alternative arguments and refined kernel calculation
    url: https://arxiv.org/pdf/1501.04585v4
  - title: Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals, Lemma2.5; local Selberg/tent-kernel alternative
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Let $P\ge10$, $T\ge2$, let $a_p$ be arbitrary complex coefficients for primes $P\le p\le2P$, and let $\mathcal E\subset[-T,T]$ be a finite $1$-separated set of cardinality $R$. Then

$$\sum_{t\in\mathcal E}\left|\sum_{P\le p\le2P}a_pp^{-it}\right|^2\ll\left(\frac P{\log P}+R P^{1/25}\sqrt T\log(2T)\right)\sum_{P\le p\le2P}|a_p|^2,$$

with an absolute implied constant.

## Statement references

[[lem-short-interval-prime-sum-calculus]]

[[thm-selberg-sieve-upper-bound-with-remainders]]

[[lem-real-cutoff-tent-dirichlet-kernel-main-term]]

[[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The local supplier [[lem-short-interval-prime-sum-calculus]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-selberg-sieve-upper-bound-with-remainders]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[lem-real-cutoff-tent-dirichlet-kernel-main-term]] gives its stated result under its stated hypotheses.

[F4] The local supplier [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives its stated result under its stated hypotheses.

## Proof

1.1 For sufficiently large $P$, take $D=P^{1/100}$ and $z=P^{1/100000}$. Apply the explicit local Selberg optimization [F2] with $g(p)=1/p$ for all primes $p\le z$, divisor support $d<D$, and $H=\sum_{d<D}\prod_{p\mid d}(p-1)^{-1}$. The full Euler product is $Z=\prod_{p\le z}(1-1/p)^{-1}\asymp\log z$ by [F1]. Its logarithmic divisor moment is $Z\sum_{p\le z}(\log p)/p\le Z(\log z+C)$. As $\log D=1000\log z$, Markov's elementary inequality for this finite weighted sum gives $H\ge Z/2$ for sufficiently large $P$. Thus $H\gg\log P$. The Selberg weights have $\rho(1)=1$, $|\rho(d)|\le\prod_{p\mid d}(1-1/p)^{-1}\le d$, and $\sum_{d,e<D}\rho(d)\rho(e)/[d,e]=1/H$, by the proved optimization identity. [given, F1, F2, F3, F4, algebra]

2.1 Put $v(n)=(\sum_{d\mid n,d<D}\rho(d))^2\ge0$ and $W(n)=(1-n/(4P))_+$. For $P\le p\le2P$, no sieving prime divides $p$, so $v(p)=1$, while $W(p)\ge1/2$. Consequently $\sum_{P\le p\le2P}|\sum_t\eta_tp^{it}|^2\le2\sum_{n\le4P}v(n)W(n)|\sum_t\eta_tn^{it}|^2$ for arbitrary complex $\eta_t$. The kernel of the right-hand quadratic form is $B(u)=\sum_{d,e<D}\rho(d)\rho(e)[d,e]^{-iu}K_{4P/[d,e]}(u)$. Here $4P/[d,e]\ge4P/D^2\ge1$, so [F3] applies. Its principal term cancels the phases of $[d,e]$, giving $B(u)=(4P)^{1-iu}/((1-iu)(2-iu)H)+O(P^{1/25}\sqrt{1+|u|}\log(2+|u|))$, since $(\sum_{d<D}|\rho(d)|)^2\le(\sum_{d<D}d)^2\ll D^4=P^{1/25}$. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 For fixed $t\in\mathcal E$, separation implies $\sum_{t'\in\mathcal E}(1+|t-t'|^2)^{-1}\ll1$. Since $|t-t'|\le2T$, the absolute row sums of $B(t-t')$ are at most $C(P/\log P+R P^{1/25}\sqrt T\log(2T))$. Expand the square from step 2.1 and use $2|\eta_t\eta_{t'}|\le|\eta_t|^2+|\eta_{t'}|^2$ and the symmetry $|B(-u)|=|B(u)|$. This bounds the quadratic form by that row-sum bound times $\sum_t|\eta_t|^2$. Finite complex matrix duality now gives the asserted inequality: for a matrix $A$, complex Cauchy–Schwarz gives $\|A\|=\sup_{\|x\|=\|y\|=1}|\langle Ax,y\rangle|=\|A^*\|$; apply this to $A_{t,p}=p^{-it}$. Complex Cauchy–Schwarz follows from the real Euclidean version [F4] by realification and rotating one vector to make its pairing real. [given, F1, F2, F3, F4, step 2.1, algebra]

4.1 For the bounded initial range of $P$ omitted in step 1.1, Cauchy–Schwarz gives each sampled square at most the number of supported primes times $\sum|a_p|^2$. That number is uniformly bounded in this range, whereas $P^{1/25}\sqrt T\log(2T)$ has a positive lower bound for $P\ge10,T\ge2$. Increasing the absolute constant therefore covers all the omitted values as well. The empty sample set is immediate. [given, F1, F2, F3, F4, step 3.1, algebra] ∎
