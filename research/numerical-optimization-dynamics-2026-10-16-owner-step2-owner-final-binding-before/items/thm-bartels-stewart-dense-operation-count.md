---
id: thm-bartels-stewart-dense-operation-count
kind: theorem
title: "A linearly budgeted dense Bartels-Stewart solve uses cubic arithmetic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-bartels-stewart-sylvester-equation
  - alg-finite-budget-francis-schur-reduction
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

For square dense inputs of order $n$, fix $c_0>0$ and use $N_A,N_B\le c_0n$ in [[alg-bartels-stewart-sylvester-equation]]. In bounded-controller mode with per-call budget $K$, the total scalar arithmetic/comparison and controller-instruction work, including failure branches, is $O(n^3+Kn^2)$. In particular, for fixed $K$ independent of $n$ and the fixed-cost default sign/representation controllers, it is $O(n^3)$. In arbitrary-terminating-controller mode the corresponding bound is $O(n^3+C_{\rm aux})$, where $C_{\rm aux}$ is the actual total control work. Exact integer/rational operations are counted as scalar operations; this is not a bit-complexity bound.

## Facts & Assumptions

**Given:** Square dense inputs, linearly bounded sweep budgets, and either the per-call controller budget or explicit total controller work from the statement.

[F1] [[alg-bartels-stewart-sylvester-equation]]: Each Schur candidate is obtained by [[alg-finite-budget-francis-schur-reduction]]; the procedure then checks exact Schur identities, forms two dense transforms, traverses block pairs, and solves local systems of dimension at most four.

[F2] [[alg-finite-budget-francis-schur-reduction]]: Its initialization reduces a dense matrix to Hessenberg form with Householder similarities; each active block has at most $\max(n-2,0)+1$ initial/chase bounded-support reflector updates per sweep, with explicit finite sweep caps.

## Proof


1.1 Hessenberg reduction uses at most $\max(n-2,0)$ reflector steps. For $n\ge3$, forming one reflector costs $O(n)$ scalar operations, and applying its two-sided similarity to the remaining dense submatrix costs $O(n^2)$; summing over at most $n$ steps gives $O(n^3)$. For $n=1,2$, there are no such steps. [F2, algebra]

1.2 For an active block of size $r\ge2$, a Francis sweep has at most $\max(r-2,0)+1$ initial/chase reflectors of length two or three. Each acts on a bounded number of rows and columns across at most $n$ entries. The active block sizes sum to at most $n$, so a full sweep and its non-controller deflation/status work cost $O(n^2)$; for $n=1$ there is no active sweep. The linear sweep budgets therefore give $O(n^3)$ matrix work for the two Schur calls. The same bound covers materializing the recorded factor products: initialization contributes $O(n^3)$ and each bounded-support chase factor updates only a bounded number of dense-factor columns, at cost $O(n)$. [F1, F2, given, algebra]


1.3 Each exact Schur-certificate matrix product, the transform $U^*CV$, and the final transform $UYV^*$ cost $O(n^3)$. The block substitution has at most $n^2$ block pairs; each pair sums at most $O(n)$ earlier blocks of bounded size and solves a system of dimension at most four, so all substitution work is $O(n^3)$. [F1, algebra]

1.4 Each sweep checks at most $O(n)$ active blocks, and initialization and final checks add at most $O(n)$ such calls. With $O(n)$ sweeps there are at most $O(n^2)$ sign/representation-controller calls. A bounded call executes at most $K$ instructions, giving $O(Kn^2)$ work; the fixed built-in exact polynomial tree and rational/dyadic recipe are constant-size special cases. In arbitrary-terminating mode their actual total work is precisely the additional $C_{\rm aux}$. [F1, F2, given, algebra]

2.1 The backward-error accumulator starts with one outward Frobenius norm of the input, costing $O(n^2)$ by the declared entrywise evaluator model. Each similarity uses a fixed number of scalar upper-bound calls once its local coefficient is evaluated. The explicit real/complex coefficient formulas require $O(m)$ scalar operations on active dimension $m$: their dimension-dependent powers can be formed by repeated multiplication and a square root for a half-integer exponent. Thus the at most $n$ initialization coefficients cost $O(n^2)$ in total, while each length-two/three chase coefficient costs $O(1)$. There are $O(n^2)$ chase similarities over the linear number of sweeps. Each recorded one-entry deflation has Frobenius norm equal to the modulus of its signed stored value, evaluated from that one-entry list with $O(1)$ scalar work; at most $O(n)$ such writes occur per sweep, hence $O(n^2)$ in total. Each stage then makes a fixed number of recurrence calls. Unavailable coefficient/evaluator results only stop certificate bookkeeping. Consequently this entire ancillary accumulation costs $O(n^2)$ and fits inside the cubic matrix-work bound, including failure branches. [F1, F2, step 1.1, step 1.2, given, algebra]

3.1 The reductions, sweeps, exact certificates, transforms, block sums and fixed-size solves contribute $O(n^3)$, and step 1.4 supplies the complete control contribution. Adding them gives $O(n^3+Kn^2)$ and the fixed-$K$ cubic consequence, or $O(n^3+C_{\rm aux})$ for the richer terminating route. No bound on integer bit length or bit-operation cost is used. [step 1.1, step 1.2, step 2.1, step 1.3, step 1.4, algebra] ∎
