---
id: thm-qa-12-unknown-amplitude-query-cost
kind: theorem
title: "Expected cost of unknown-amplitude search"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-12-unknown-amplitude-search
  - thm-qa-12-unknown-amplitude-success
  - def-qa-quantum-query-algorithm
  - def-qa-quantum-query-complexity
  - def-qa-expected-query-cost
  - def-qc-circuit-cost-model
  - thm-qa-12-amplification-rotation-correctness
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-sine-and-cosine-are-one-lipschitz
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-addition-formulas
justified_by: []
proof_strategy: direct
axiom_use: "None; every expected cost is defined from finite execution-prefix probabilities."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

For $a>0$, the expected total number of calls made by [[alg-qa-12-unknown-amplitude-search]] to $A$, $A^\dagger$, the good and zero-input phase operations, and any one-call verifier is $\Theta(a^{-1/2})$. The lower bound is for this specified schedule; no general optimality statement is made outside an explicit black-box search model. For $a=0$, the expected query cost is infinite.

## Facts & Assumptions

**Given:** The round schedule, fresh-register semantics, and access model of the unknown-amplitude procedure.

[F1] [[alg-qa-12-unknown-amplitude-search]]: $M_\ell=\lceil(3/2)^\ell\rceil$; each round uses one direct sample and, if it fails, one fresh preparation, uniform $j\in\{1,\ldots,M_\ell\}$, and $j$ standard iterates.

[F2] [[thm-qa-12-unknown-amplitude-success]]: for uniform $j=1,\ldots,M$, the amplification-attempt success probability is at least $1/2-1/(2M|\sin2\theta|)$; all returned outputs are good and $a>0$ halts almost surely.

[F3] [[thm-qa-12-amplification-rotation-correctness]]: after $j$ iterates the good probability is $\sin^2((2j+1)\theta)$.

[F4] [[def-qa-expected-query-cost]]: expected query cost is the supremum of expectations over finite execution prefixes; no expectation on an infinite-history space is presumed.

[F5] [[def-qa-quantum-query-complexity]] and [[def-qc-circuit-cost-model]]: oracle calls, gates, and classical work are separate resource coordinates.

[F6] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]]: sine and cosine addition identities; $|\cos x|\le1$ follows from [[cor-trigonometric-parity-and-pythagorean-identity]].

[F7] [[cor-sine-and-cosine-are-one-lipschitz]]: $\sin x\le x$ for $x\ge0$.

## Proof

1.1 For $0<a<3/4$, write $s=\sin(2\theta)=2\sqrt{a(1-a)}\ge\sqrt a$. Once $M_\ell\ge8/s$, [F2] gives amplification-attempt success at least $7/16$, so the conditional probability of reaching the next round is at most $(1-a)(9/16)\le9/16$. If $M_\ell\ge8$, then
$
M_{\ell+1}\le\frac32M_\ell+1\le\frac{13}{8}M_\ell,
$
and the survival-weighted cost ratio of later rounds is at most $(9/16)(13/8)=117/128<1$. [given, F1, F2, algebra]

2.1 Let $q=3/2$. For every $\ell\ge1$, $q^\ell\ge\ell$: it holds directly for $\ell=1,2$, and if it holds for $\ell\ge2$, then $q^{\ell+1}\ge(3/2)\ell\ge\ell+1$. Thus $M_\ell\ge\ell$. With $N=\lceil8/s\rceil$, we have $M_N\ge N\ge8/s$, so the first threshold index $L$ is at most $N=O(1/s)$. If $L\ge2$, then $M_{L-1}<8/s$ and $M_L=\lceil q^L\rceil\le qM_{L-1}+1<12/s+1\le13/s$; the same bound holds when $L=1$. Before that threshold the $M_\ell$ grow geometrically, so their sum is $O(1/s)$; the $L$ direct preparations and fixed-cost verifications also cost $O(1/s)$. A round that reaches its amplification attempt makes at most four named calls per iterate, at most one extra preparation call, and at most one verifier call for each of its two samples; including the first direct sample, its total is at most $4M_\ell+4$. After the threshold, [F1], step 1.1, and $M_{\ell+1}\le(13/8)M_\ell$ make the survival-weighted worst-case round costs contract by at most $(9/16)(13/8)=117/128<1$. Since $s\ge\sqrt a$, the total is $O(a^{-1/2})$. If $a\ge3/4$, each direct sample succeeds with probability at least $3/4$, and $M_{\ell+1}\le2M_\ell$ for $M_\ell\ge2$; worst-case round costs grow by at most a factor $2$, so survival-weighted costs contract by at most $1/2$, giving $O(1)=O(a^{-1/2})$. Each bound applies to every finite prefix, and taking the supremum in [F4] proves the upper bound without an infinite-history expectation. [given, F1, F4, F5, F7, step 1.1, algebra, induction]

3.1 For a lower bound at small $a$, fix $u=1/100$ and let $L$ be the first round with $M_L\ge u/\sqrt a$. For every integer $n\ge1$, induction with [F6] gives $|\sin(n\theta)|\le n\sin\theta$: the base case is equality, and the addition formula bounds the next value by $|\sin(n\theta)|+|\sin\theta|$. Therefore the success probability before round $L$ is at most $a+9aM_\ell^2$, accounting for the direct sample and $a(2M_\ell+1)^2\le9aM_\ell^2$ for the amplified sample. As proved in step 2.1, $M_\ell\ge\ell$; therefore $L\le\lceil u/\sqrt a\rceil$. For sufficiently small $a$, $L\ge2$, $M_{L-1}<u/\sqrt a$, and $M_\ell\le(3/2)^\ell+1$; geometric summation gives [given, F1, F3, F6, step 2.1, algebra]
$
\sum_{\ell<L}M_\ell^2
\le \frac{(3/2)^2}{(3/2)^2-1}\frac{u^2}{a}
+\frac{2(3/2)}{(3/2)-1}\frac{u}{\sqrt a}+L
=\frac{1.8u^2}{a}+\frac{6u}{\sqrt a}+L.
$
Hence the chance of any earlier success is at most $16.2u^2+54u\sqrt a+10aL\le16.2u^2+64u\sqrt a+10a$, which tends to $16.2u^2<1/4$. For all sufficiently small $a$, round $L$ is reached with probability at least $1/2$. [given, F1, F3, F6, step 2.1, algebra]

4.1 At round $L$, the direct sample fails with probability at least $1/2$ for sufficiently small $a$. Conditional on its fresh amplification attempt, $j$ is uniform on $\{1,\ldots,M_L\}$, so [given, F1, F4, step 3.1, algebra]
$
\mathbb E[j]=\frac1{M_L}\sum_{j=1}^{M_L}j=\frac{M_L+1}{2}\ge\frac{u}{2\sqrt a}.
$
The probability of reaching and entering this attempt is at least $1/4$, so this round alone contributes $\Omega(a^{-1/2})$ total access calls. For $a$ bounded away from zero, the first direct sample always makes one $A$-call while $a^{-1/2}$ is bounded, giving the same aggregate lower bound with a smaller constant. [given, F1, F4, step 3.1, algebra]

5.1 If $a=0$, every round executes its direct preparation and the process never halts by [F2]. Finite-prefix expected query counts therefore grow without bound with the number of completed rounds, so their supremum in [F4] is $+\infty$. Gate and classical costs remain separate as required by [F5]. [given, F2, F4, F5] ∎
