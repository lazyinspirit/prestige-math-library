---
id: ex-na-remez-zero-degree-equioscillation-certificate
kind: example
title: "A two-node degree-zero Remez certificate"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-na-minimax-approximation-and-remez-algorithms
  - lem-na-polynomial-remez-system-invertible
  - thm-na-polynomial-equioscillation-certificate
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Ricardo Pachón and Lloyd N. Trefethen, Barycentric-Remez Algorithms for Best Polynomial Approximation in the Chebfun System, §2"
      url: "https://people.maths.ox.ac.uk/trefethen/remez_new2.pdf"
      locator: "Printed pp. 5–7, the trial reference equations and extremum exchange."
---

## Example

For $f(x)=|x|$ on $[-1,1]$, degree $n=0$, and initial nodes $x_0=0,x_1=1$,
the Remez linear system returns $p(x)=1/2$ and signed level $\lambda=-1/2$.
An exact global-extrema oracle returns error $1/2$, so the current reference is
an optimality certificate.

## Verification

**Given:** $I=[-1,1]$, $f(x)=|x|$, $n=0$, reference $X=(0,1)$, and an exact extrema oracle as in [[alg-na-minimax-approximation-and-remez-algorithms]] that returns maximum$(1/2,0)$ on the first candidate $p=1/2$.

[F1] [[lem-na-polynomial-remez-system-invertible]]: at two distinct nodes the degree-zero alternation equations have a unique solution $(p,\lambda)$.

[F2] [[alg-na-minimax-approximation-and-remez-algorithms]]: with equations $p(x_i)+(-1)^i\lambda=f(x_i)$, a maximum$(E,y)$ response with $E=|\lambda|>0$ returns certified$(p,E,X)$ using the current reference.

[F3] [[thm-na-polynomial-equioscillation-certificate]]: exact global equioscillation at $n+2$ ordered nodes certifies best approximation.

1.1 The equations at $x_0=0,x_1=1$ are $p+\lambda=0$ and $p-\lambda=1$. Adding them gives $2p=1$, so $p=1/2$ and then $\lambda=-1/2$, in agreement with the unique solve [F1]. [given, F1, algebra]

2.1 For every $x\in[-1,1]$, $|x|\in[0,1]$, so $-|1/2|\le |x|-1/2\le1/2$ and the absolute error is at most $1/2$. It equals $1/2$ at $x=0$ and at $x=1$ (also at $x=-1$), so the stipulated response maximum$(1/2,0)$ is valid and has $E=1/2=|\lambda|$. The residuals at $(0,1)$ are $-1/2,1/2$, hence with this maximum response the procedure returns certified$(p,1/2,X)$ by [F2], and [F3] makes $p$ best. [F2, F3, step 1.1, given, algebra] ∎
