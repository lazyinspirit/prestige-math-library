---
id: thm-qa-32-simon-classical-randomized-query-lower-bound
kind: theorem
title: Classical randomized Simon decision requires square-root-many queries
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 16
deps:
  - def-qa-32-simon-decision-oracle-promise
  - def-finite-probability-space-and-event
  - lem-finite-probability-basic-laws
justified_by: []
proof_strategy: direct
axiom_use: "None; the oracle families and randomized decision trees are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Section 3.3.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Watrous, Quantum Computational Complexity, Sections I and V"
      url: "https://arxiv.org/pdf/0804.3401"
---

## Statement

Let $N=2^n$ with $n\ge4$. A classical randomized adaptive algorithm that, given only classical query access $x\mapsto f(x)$ to the Simon decision promise of [[def-qa-32-simon-decision-oracle-promise]], must decide injective versus nonzero-mask two-to-one with worst-case error at most $1/3$ requires $\Omega(\sqrt N)=\Omega(2^{n/2})$ queries. Ordinary classical computation between queries is unrestricted.

## Facts & Assumptions

**Given:** $N=2^n$, the Simon promise, a query budget $T\le\sqrt N/8$, and the equal mixture of a uniformly random YES permutation and a uniformly random valid NO Simon function. Prove that no such $T$-query algorithm has average success $2/3$ under this mixture.

[F1] [[def-qa-32-simon-decision-oracle-promise]]: YES functions are injections on $N$ points; every NO function has fibers equal to the pairs $\{x,x\oplus s\}$ for one unique nonzero $s$.

[F2] [[def-finite-probability-space-and-event]]: the finite sets of promised functions, masks, output-label assignments, and deterministic query trees can be assigned finite uniform or mixed probability weights.

[F3] [[lem-finite-probability-basic-laws]]: event probabilities are sums of weights, are monotone, and obey finite arithmetic.

## Proof

1.1 Consider the finite input distribution that chooses YES or NO with probability $1/2$. In the YES case choose a uniform permutation of $V_n$. In the NO case choose a uniform nonzero mask $s$, then a uniform injection from the $N/2$ cosets $\{x,x\oplus s\}$ into the $N$ output labels. Every valid NO function has a unique mask, and each mask has the same number of such injections, so this is uniform over valid NO functions. [given, F1, F2, construct]

1.2 It suffices to bound every deterministic query strategy: any randomized strategy has finitely many possible histories and actions up to depth $T$, so its conditional action choices can be represented as a finite distribution over deterministic decision trees. Repeated queries can be removed by caching their earlier answer, so assume every queried address is fresh. [given, F2, F3, algebra]

2.1 Fix a deterministic strategy and a query index $k\le T$. Since $N\ge16$, the premise $T\le\sqrt N/8$ implies $k\le N/2$. Suppose its first $k-1$ distinct query addresses $x_1,\ldots,x_{k-1}$ have produced distinct outputs. Under a NO mask, this transcript is possible exactly when $s\ne x_i\oplus x_j$ for every $i<j<k$. Thus at most $\binom{k-1}{2}$ of the $N-1$ nonzero masks are excluded. For every remaining mask, the queried addresses lie in distinct cosets; the number of injective assignments of output labels to the unqueried cosets is $\frac{(N-k+1)!}{(N/2)!},$ independent of the mask. Hence, conditioned on this transcript, the mask is uniform among at least $N-1-\binom{k-1}{2}$ candidates. [F1, step 1.1, F2, algebra]

3.1 The next address $x_k$ is determined by the transcript. At most $k-1$ candidate masks, namely $x_k\oplus x_j$ for $j<k$, make its output collide with a previous output. Therefore $\Pr[\text{first collision at query }k\mid\text{no earlier collision}] \le \frac{k-1}{N-1-\binom{k-1}{2}}.$ If there is no collision, $x_k$ belongs to a new coset whose output label is uniform among the $N-k+1$ unused labels, exactly as the next output of a uniformly random permutation. Couple the two oracle transcripts to use the same unused label until a Simon collision occurs; the adaptive address choices then also agree up to that time. [F1, step 2.1, F2, algebra]

4.1 For $T\le\sqrt N/8$ and $N\ge16$, each denominator in step 3.1 is at least $N-1-T^2/2>N/2$. Summing the conditional first-collision bounds gives $\Pr_{\mathrm{NO}}[\text{a collision by query }T] \le \sum_{k=2}^T\frac{2(k-1)}N =\frac{T(T-1)}N\le\frac1{64}<\frac13.$ This also bounds the probability that the coupled transcripts differ. [step 3.1, algebra]

5.1 Let $D$ be the deterministic decision bit, with $1$ meaning YES. Under the coupling, its outputs in the two cases differ with probability at most $1/64$, so $\Pr_{\mathrm{YES}}[D=1]-\Pr_{\mathrm{NO}}[D=1]\le\frac1{64}.$ Its average success under the equal mixture is $\frac12\bigl(\Pr_{\mathrm{YES}}[D=1]+\Pr_{\mathrm{NO}}[D=0]\bigr) =\frac12\left(1+\Pr_{\mathrm{YES}}[D=1]-\Pr_{\mathrm{NO}}[D=1]\right) \le\frac{1+1/64}{2}<\frac23.$ By step 1.2 the same bound holds for every randomized algorithm. A worst-case error bound of $1/3$ would imply average success at least $2/3$, a contradiction. Therefore at least $\sqrt N/8$ queries are required for all sufficiently large $n$, which is $\Omega(2^{n/2})$. [F2, F3, step 1.2, step 4.1, algebra] ∎