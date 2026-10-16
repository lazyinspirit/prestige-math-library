---
id: thm-qc-planar-surface-code-iid-z-memory-bound
kind: theorem
title: "Planar Surface-Code Memory Bound Under IID Z Noise"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-qc-square-planar-surface-code
  - def-qc-stabilizer-syndrome-and-logical-operators
  - def-independent-families-of-event-classes
  - def-finite-probability-space-and-event
  - thm-qc-square-planar-surface-code-distance-and-path-count
  - lem-qc-planar-mw-recovery-failure-yields-half-error-path
  - thm-finite-union-bound
dependency_level: 19
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

For each integer $d\ge2$, use the relative $d\times d$ square patch, which has $n=2d^2$ data qubits. On a finite probability space, let each data edge independently carry a $Z$ error with probability $\epsilon\in[0,1]$. For each syndrome, choose any minimum-cardinality correction; the bound below holds for every such choice. Under one perfect syndrome round, the logical-memory failure probability satisfies
$$
P_{\mathrm{logical}}\le (d+1)\sum_{\ell=d}^{n}(36\epsilon)^{\ell/2}.
$$
Consequently $P_{\mathrm{logical}}$ decays exponentially in $d$, up to a polynomial prefactor, for $\epsilon<1/36$. This is an ideal-syndrome memory theorem; it is not a faulty-gate circuit threshold.

## Facts & Assumptions


**Given:** An integer $d\ge2$, the finite relative square patch with data-edge count $n=2d^2$, a finite family of mutually independent Bernoulli $Z$-error indicators each of rate $\epsilon\in[0,1]$, one perfect syndrome round, minimum-cardinality recovery, and the geometric path interface in [F3].

[F1] [[def-finite-probability-space-and-event]]: A finite probability space is a pair $(\Omega,w)$ consisting of a finite set and nonnegative weights summing to one; event probabilities are sums of outcome weights.

[F2] [[lem-qc-planar-mw-recovery-failure-yields-half-error-path]]: On logical failure, a minimum-cardinality correction with the same perfect syndrome yields a self-avoiding left-to-right path of length $d\le\ell\le n$ containing at least $\lceil\ell/2\rceil$ actual error edges.

[F3] [[thm-qc-square-planar-surface-code-distance-and-path-count]]: For each $\ell\ge1$, the number of self-avoiding rough-to-rough paths of length $\ell$ is at most $(d+1)3^\ell$.

[F4] [[def-independent-families-of-event-classes]]: The family $(\mathcal C_i)_{i\in I}$ is **independent** when for every natural number $n\ge1$, every choice of distinct indices $i_0,\ldots,i_{n-1}$, and every choice of events $A_k\in\mathcal C_{i_k}$, one has $\mathbb P(\bigcap_{k<n}A_k)=\prod_{k<n}\mathbb P(A_k)$.

[F5] [[thm-finite-union-bound]]: For every finite family of events $A_0,\ldots,A_{n-1}$, $$\mathbb P\!\left(\bigcup_{i<n}A_i\right)\le\sum_{i<n}\mathbb P(A_i).$$

## Proof

1.1 Fix a candidate path $P$ of length $\ell$. A logical failure witness on it requires at least $k=\lceil\ell/2\rceil$ actual errors by [F2]. If at least $k$ of its $\ell$ edges are faulty, some $k$-subset is entirely faulty. There are at most $\binom\ell k\le2^\ell$ such subsets; by [F4] each has probability $\epsilon^k\le\epsilon^{\ell/2}$ for $\epsilon\in[0,1]$. The union bound [F5] gives $\mathbb P(P\text{ is a failure witness})\le2^\ell\epsilon^{\ell/2}$. [given, F1, F2, F4, F5, algebra]

2.1 There are at most $(d+1)3^\ell$ candidate paths of length $\ell$ by [F3]. By [F2], every logical failure lies in the union of witness events for paths with $d\le\ell\le n$. The finite union bound [F5] and step 1.1 therefore give $P_{\mathrm{logical}}\le\sum_{\ell=d}^{n}(d+1)3^\ell 2^\ell\epsilon^{\ell/2}=(d+1)\sum_{\ell=d}^{n}(36\epsilon)^{\ell/2}$. [F2, F3, F5, step 1.1, algebra]

3.1 If $\epsilon<1/36$, set $r=6\sqrt{\epsilon}<1$. The finite sum is at most $\sum_{\ell=d}^{\infty}r^\ell=r^d/(1-r)$, so $P_{\mathrm{logical}}\le\frac{d+1}{1-6\sqrt{\epsilon}}(6\sqrt{\epsilon})^d$. The denominator is a fixed positive constant for fixed $\epsilon<1/36$, while $d+1$ is polynomial in $d$; hence the bound decays exponentially up to a polynomial prefactor. [step 2.1, algebra] ∎

## Remarks

The geometric inputs are the relative-cycle crossing property and the finite path count in [F2] and [F3]. The probability argument uses their stated directions only; it needs no enumeration of all logical operators and no assumption about independence of recovery choices. Perfect syndrome and iid $Z$-noise are essential hypotheses. No circuit-level gate threshold follows.

