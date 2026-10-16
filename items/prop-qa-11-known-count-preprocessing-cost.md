---
id: prop-qa-11-known-count-preprocessing-cost
kind: proposition
title: Bit cost of exact known-count iteration selection
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
proof_strategy: direct
deps:
  - alg-qa-11-known-count-grover-search
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-principal-inverse-sine-and-cosine
  - def-qa-classical-bit-cost
  - lem-ceiling-and-least-positive-integer-threshold
  - lem-of-square-monotone
  - thm-double-angle-and-power-reduction-identities
  - thm-of-square-roots
  - thm-sine-and-cosine-addition-formulas
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

For $t>0$, put $K=\lceil\sqrt{N/t}\rceil$ and $q=1-2t/N$. The exact selection procedure in [[alg-qa-11-known-count-grover-search]] computes the recurrence $T_0=1,T_1=q,T_{m+1}=2qT_m-T_{m-1}$ through $m=2K+1$ and compares $p_k=(1-T_{2k+1}(q))/2$ for $0\le k\le K$. If $n\ge1$, the recurrence numerators and denominators have $O(Kn)$ bits and schoolbook arithmetic selects the least maximizing $k$ in $O(K^2n^2)$ classical bit operations. For $n=0$, necessarily $N=t=1$ and the selection costs $O(1)$. Since $K=\Theta(\sqrt N)$ when $t=1$, the preprocessing can be exponential in $n$; this query bound supplies no end-to-end polynomial-time claim.

## Facts & Assumptions

**Given:** $N=2^n$, exact $t$ with $1\le t\le N$, and the recurrence and finite candidate list in the known-count algorithm.

[F1] [[alg-qa-11-known-count-grover-search]]: the algorithm finds $K$ by doubling and binary search for the least positive integer with $tK^2\ge N$, forms $q=1-2t/N$, computes $T_m(q)$ through $m=2K+1$, and selects the least maximizer of $p_k=(1-T_{2k+1}(q))/2$ for $0\le k\le K$.

[F2] [[thm-of-square-roots]]: nonnegative reals have unique nonnegative square roots.

[F3] [[lem-ceiling-and-least-positive-integer-threshold]]: $\lceil x\rceil$ is the least integer at least $x$, and is monotone in the threshold.

[F4] [[def-principal-inverse-sine-and-cosine]]: $\sin(\arcsin y)=y$ on $[-1,1]$.

[F5] [[thm-double-angle-and-power-reduction-identities]]: $\cos(2\theta)=1-2\sin^2\theta$.

[F6] [[thm-sine-and-cosine-addition-formulas]]: $\cos(u+v)=\cos u\cos v-\sin u\sin v$ for real $u,v$.

[F7] [[def-qa-classical-bit-cost]]: classical bit cost counts the transitions used for arithmetic, comparisons, reading and writing bits; oracle calls are a separate coordinate.

[F8] [[cor-trigonometric-parity-and-pythagorean-identity]]: $|\cos x|\le1$ for every real $x$.

[F9] [[lem-of-square-monotone]]: squaring preserves order on nonnegative reals, so $m\mapsto tm^2$ is nondecreasing for integers $m\ge0$ when $t>0$.

## Proof

1.1 For $t>0$, $P(m):tm^2\ge N$ is monotone on nonnegative integers by [F9], and its least positive true index is $K=\lceil\sqrt{N/t}\rceil$ by [F2]–[F3]. The doubling loop starts with false endpoint $\mathrm{lo}=0$ and doubles $\mathrm{hi}$ until $P(\mathrm{hi})$ is true; it terminates because powers of two are unbounded. If $K=1$ it stops immediately. If $K>1$, the first true power of two satisfies $K\le\mathrm{hi}<2K$, and the preceding power $\mathrm{lo}=\mathrm{hi}/2$ is false. Upper-midpoint binary search preserves the false/true invariant and reduces each interval of width $d>1$ to width at most $\lceil d/2\rceil$, so it reaches width one after $O(\log(K+1))$ evaluations and returns the least positive true index $K$. Since $K\le\lceil\sqrt N\rceil$, the endpoints have $O(n)$ bits for $n\ge1$. [given, F1, F2, F3, F9, algebra]

1.2 Put $a=t/N$ and $\theta=\arcsin\sqrt a$. Then $q=1-2a=\cos(2\theta)$ by [F4]–[F5]. The recurrence has base values $T_0=\cos0=1$ and $T_1=\cos(2\theta)=q$. By [F6], $$\cos(2(m+1)\theta)+\cos(2(m-1)\theta)=2\cos(2\theta)\cos(2m\theta),$$ so induction in the recurrence gives $T_m(q)=\cos(2m\theta)$ for every computed index. Therefore $p_k=(1-\cos((4k+2)\theta))/2=\sin^2((2k+1)\theta)$, and the rational list in [F1] is the actual integer-iterate success list. [given, F1, F2, F4, F5, F6, induction, algebra]

2.1 Write $u=N-2t$, so $q=u/N$, and define $A_m=N^mT_m(q)$. Then $A_0=1$, $A_1=u$, and the recurrence gives $$A_{m+1}=2uA_m-N^2A_{m-1},$$ so each $A_m$ is an integer. By step 1.2 and [F8], $|A_m|\le N^m$. Thus for $n\ge1$ and $m\le2K+1$, both numerator $A_m$ and denominator $N^m$ have $O(Kn)$ bits. For $n=0$, $N=t=1$, $K=1$, and all recurrence values have constant bit length. [step 1.2, F1, F8, algebra]

3.1 At recurrence index $m$, multiplying the $O(mn)$-bit integer $A_m$ by the $O(n)$-bit integer $u$ costs $O(mn^2)$ schoolbook bit operations; multiplication by $N^2$ is a binary shift, and addition costs $O(mn)$. Summing over $m\le2K$ gives $O(K^2n^2)$. Each predicate evaluation in step 1.1 uses $O(n)$-bit operands and schoolbook arithmetic, hence $O(n^2)$ bit operations; the $O(\log(K+1))$ evaluations cost $O(n^2\log(K+1))\subseteq O(K^2n^2)$. [F7, step 1.1, step 2.1, algebra]

4.1 For odd $m=2k+1$, write $p_k=(N^m-A_m)/(2N^m)$. Advancing from $k-1$ to $k$ scales the previous running-best numerator by $N^2$ to put it over the new denominator, then compares the two integers and updates only on strict increase. Each comparison costs $O(Kn)$ bit operations by step 2.1, and there are $K+1$ candidates, so all comparisons cost $O(K^2n)$, within step 3.1's bound. Strict updates retain the least $k$ in a tie. [F1, step 2.1, step 3.1, F7, algebra]

5.1 If $t=1$, then $\sqrt N\le K=\lceil\sqrt N\rceil\le\sqrt N+1\le2\sqrt N$, so $K=\Theta(2^{n/2})$. The preprocessing bound can therefore be exponential in $n$, and it supplies no polynomial-time conclusion from the query bound. [F2, F3, step 3.1, step 4.1, algebra]

6.1 If $n=0$, necessarily $N=t=1$, so $K=1$ and the direct selection branch and finite recurrence take constant work, as stated. [given, F1, step 2.1, step 3.1, step 4.1, algebra] ∎
