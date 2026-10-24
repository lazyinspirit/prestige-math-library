---
id: lem-qa-shor-perfect-power-precheck
kind: lemma
title: "Even and perfect-power preprocessing returns a proper factor"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-shor-factoring
  - def-divides-in-z
  - def-natural-numbers
  - def-nat-order
  - lem-nat-embeds-int
  - def-group-power
  - thm-int-comm-ring
  - thm-int-ordered-ring
  - def-qa-shor-cost-accounting
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, “Quantum Fourier transforms,” and §5, “Prime factorization” (order-finding and the factor reduction)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.4, “Factoring,” “Reduction from factoring to period-finding,” “Shor’s period-finding algorithm,” and “Continued fractions.”"
---
## Statement

For a promised composite $N\ge4$, the even branch and the finite integer-root precheck in [[alg-qa-shor-factoring]] return a proper factor whenever they return. If $N$ is even, the even branch returns $2$. If $N=b^e$ for integers $b\ge2$ and $e\ge2$ and $N$ is odd, the root-search branch is reached, detects an exact-power representation $N=c^f$ with $c\ge2$ and $f\ge2$, and returns its base $c$ as a proper factor. Writing $n=\lceil\log_2N\rceil$, its schoolbook bit cost is $O(n^5)$.

## Facts & Assumptions

**Given:** A composite integer $N\ge4$, $n=\lceil\log_2N\rceil$, and the even/perfect-power preprocessing instructions in [[alg-qa-shor-factoring]].

[F1] Divisibility means $d\mid N$ exactly when $N=dq$ for an integer $q$ ([[def-divides-in-z]]); integer powers are natural monoid powers with $b^0=1$ and $b^{e+1}=b^e b$ ([[def-group-power]]).

[F2] Integer order is translation invariant, products of positive integers are positive, and the natural embedding preserves order ([[thm-int-ordered-ring]], [[thm-int-comm-ring]], [[lem-nat-embeds-int]]).

[F3] The binary search and exponent range are those in [[alg-qa-shor-factoring]]; its capped repeated-squaring powers use integers at most $N+1$. Schoolbook multiplication of two $n$-bit integers costs $O(n^2)$ bit operations ([[def-qa-shor-cost-accounting]]).

## Proof


1.1 If $N$ is even, $2\mid N$. Since $N\ge4$, $1<2<N$, so the returned integer is a proper factor. [given, F1, F2, algebra]

1.2 Suppose the precheck finds $N=b^e$ with $2\le b\le N$ and $e\ge2$. Then $N=b\,b^{e-1}$, so $b\mid N$ by [F1]. The power $b^{e-1}\ge2$, so $N=b\,b^{e-1}\ge2b>b$; hence $1<b<N$ and its explicit divisibility verification returns a proper factor. [given, F1, F2, algebra]

2.1 Conversely, suppose $N=b^e$ with $b\ge2$ and $e\ge2$. If $N$ is even, step 1.1 shows that the earlier even branch returns $2$, so the root search is not reached. Now suppose $N$ is odd. Then the root-search branch is reached, and $2^e\le b^e=N\le2^n$, so $e\le n$ and the loop includes this exponent. If the algorithm has not already returned on an earlier exact-power match in this root search, then for this fixed $e$, if $2\le x<y$, $$y^e-x^e=(y-x)\sum_{j=0}^{e-1}y^{e-1-j}x^j>0,$$ because the factor and every summand are positive by [F2]. Hence $x\mapsto x^e$ is strictly increasing, so binary search on $[2,N]$ finds $b$; capping values above $N$ at $N+1$ preserves each comparison with $N$. If the algorithm already returned on an earlier root-search match, that match was itself an exact-power representation of $N$, and step 1.2 shows that its returned base is a proper factor. Thus the odd perfect-power input returns a proper factor through the root search, while the even case is handled by step 1.1. [given, F1, F2, algebra]

3.1 There are at most $n$ exponents and at most $n$ binary-search comparisons per exponent because $N\le2^n$. Each comparison uses at most $O(\log n)$ capped multiplications of $O(n)$-bit integers, hence $O(n^2\log n)$ bit operations by [F3]. The total is $O(n^4\log n)=O(n^5)$ for $n\ge2$, proving the claimed bound. [given, F3, algebra] ∎

