---
id: lem-adapted-resolvent-trace-concentration
kind: lemma
title: "Adapted resolvent-trace martingale concentration for independent columns"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - lem-rank-one-resolvent-update-and-trace-bound
  - thm-mcdiarmid-bounded-differences
  - cor-first-borel-cantelli-lemma-for-events
  - def-axiom-of-choice
proof_strategy: direct
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3, §3.3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Chapter 2, §2.1.3"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
---

## Statement

Assume the Axiom of Choice, and let all random vectors below be defined on one common probability space. For each positive integer $n$, let $d_n$ be a positive integer, let $Y_{n,1},\ldots,Y_{n,n}$ be independent random vectors in $\mathbb R^{d_n}$, let $B_n=\sum_{j=1}^{n}Y_{n,j}Y_{n,j}^{\mathsf T}$, and let $z=u+i\eta$ with fixed $u\in\mathbb R$ and $\eta>0$. Define
$$M_n(z):=\frac1{d_n}\operatorname{tr}(B_n-zI)^{-1}.$$
If $d_n/n\to c$ for some $c\in(0,\infty)$, then $M_n(z)-\mathbb E[M_n(z)]\to0$ almost surely. More precisely, for every $t>0$,
$$\Pr\left\{|M_n(z)-\mathbb E M_n(z)|>t\right\} \le4\exp\left(-\frac{t^2d_n^2\eta^2}{4n}\right).$$

## Statement references

Bai and Silverstein, Chapter 3, §3.3, printed pp. 53–55 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Chapter 2, §2.1.3, printed pp. 35–38 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).

## Facts & Assumptions

**Given:** AC, the common probability space, the positive integers $d_n$, the independent column vectors $Y_{n,j}$, and the fixed parameter $z$ with $\operatorname{Im}z=\eta>0$.

[A1] The Axiom of Choice states every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] For a real symmetric non-negative matrix, adding one rank-one matrix $yy^{\mathsf T}$ changes the unnormalized resolvent trace by at most $1/\eta$ ([[lem-rank-one-resolvent-update-and-trace-bound]]).

[F2] For independent random elements and a real measurable function whose change under replacement of coordinate $j$ is at most $c_j$, the two-sided McDiarmid bound is $2\exp(-2t^2/\sum_jc_j^2)$ ([[thm-mcdiarmid-bounded-differences]]).

[F3] If $\sum_n\Pr(E_n)<\infty$, then almost surely only finitely many $E_n$ occur ([[cor-first-borel-cantelli-lemma-for-events]]).

## Proof

**Given:** The hypotheses and notation of the Statement, including AC and the common probability space.

1.1 Fix all vectors except $Y_{n,j}$. Replacing that vector by another vector $Y'_{n,j}$ changes $B_n$ by removing $Y_{n,j}Y_{n,j}^{\mathsf T}$ and adding $Y'_{n,j}(Y'_{n,j})^{\mathsf T}$. Applying [F1] once to remove the first term and once to add the second shows that $\operatorname{tr}(B_n-zI)^{-1}$ changes by at most $2/\eta$. Hence each of the real and imaginary parts of $M_n(z)$ has coordinate oscillation at most $c_j=2/(d_n\eta)$. [given, F1, algebra]

2.1 Apply [F2] separately to $\operatorname{Re}M_n(z)$ and $\operatorname{Im}M_n(z)$. If a complex number has modulus greater than $t$, at least one of its real or imaginary parts has magnitude greater than $t/\sqrt2$. The union bound therefore gives $$\Pr\{|M_n(z)-\mathbb E M_n(z)|>t\} \le4\exp\left(-\frac{t^2d_n^2\eta^2}{4n}\right).$$ This is the stated estimate. [A1, F2, step 1.1, algebra]

3.1 Since $d_n/n\to c>0$, for each fixed $t>0$ the exponent in step 2.1 is at most $-c_tn$ for all sufficiently large $n$, for some $c_t>0$. The probabilities are therefore summable. [given, step 2.1, algebra]

4.1 Apply [F3] to the events in step 3.1 for each $t=1/k$, $k\ge1$, and intersect the resulting countable collection of probability-one events. On that event $M_n(z)-\mathbb E M_n(z)\to0$. [F3, step 3.1, choose] ∎
