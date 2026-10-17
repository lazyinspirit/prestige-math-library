---
id: ex-hermitian-eigenvalue-bisection-by-verified-inertia
kind: example
title: Ordered eigenvalue bisection by exact inertia queries
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps: [alg-ordered-hermitian-eigenvalue-bisection, thm-ordered-hermitian-eigenvalue-bisection-soundness, thm-interval-hermitian-ldl-inertia-certifier-soundness, thm-inertia-guided-bisection-loop-soundness]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint2015.103"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
      locator: "§5.6: inertia and eigenvalue bisection. The finite ordered-eigenvalue example and certified/unresolved-query branches are checked locally."
---

## Example

For the singleton Hermitian family $A=\operatorname{diag}(-1,2)$, a valid outward Frobenius upper bound $M=3$, tolerance $\varepsilon=3/8$, query budget $B=8$, and the scalar pivot plan with threshold $1$, exact inertia queries return the ordered eigenvalue brackets
$$
\lambda_1(A)\in[-9/8,-3/4],\qquad \lambda_2(A)\in[15/8,9/4].
$$

## Facts & Assumptions

**Given:** The singleton matrix family, initial bracket $[-3,3]$, tolerance, budget and fixed pivot plan above.

[F1] A successful bisection loop preserves each ordered eigenvalue bracket after every exact count below a nonsingular shift ([[thm-inertia-guided-bisection-loop-soundness]]).

[F2] The interval inertia certifier reports the exact inertia on success ([[thm-interval-hermitian-ldl-inertia-certifier-soundness]]).

[F3] The finite bisection procedure uses the initial uniform Frobenius bracket and updates the least unfinished index at each query ([[alg-ordered-hermitian-eigenvalue-bisection]]).

[F4] A successful run's returned intervals enclose the corresponding eigenvalues ([[thm-ordered-hermitian-eigenvalue-bisection-soundness]]).

## Verification

1.1 The Frobenius norm of $A$ is $\sqrt5<3$, so the stated initial bracket is valid. On each queried shift, the shifted matrix remains diagonal with nonzero scalar pivots; the exact midpoint factorization succeeds, and its interval pivots are degenerate intervals with the same nonzero signs. Thus [F2] certifies the counts shown below. [given, F2, algebra]

2.1 For $k=1$, the successive shifts $0,-3/2,-3/4,-9/8$ have respectively $1,0,1,0$ negative eigenvalues of $A-\tau I$. The update rule gives brackets $[-3,0]$, $[-3/2,0]$, $[-3/2,-3/4]$, and $[-9/8,-3/4]$. For $k=2$, shifts $0,3/2,9/4,15/8$ have respectively $1,1,2,1$ negative eigenvalues, giving brackets $[0,3]$, $[3/2,3]$, $[3/2,9/4]$, and $[15/8,9/4]$. These are eight successful queries, and both final widths are $3/8$. [F1, F3, step 1.1, algebra]

3.1 The exact increasing eigenvalues are $-1$ and $2$, which lie in the displayed final intervals. More generally, the interval conclusions follow from [F4] applied to the certified run; no failed-pivot case occurs here. [F1, F2, F4, step 2.1, algebra] ∎

