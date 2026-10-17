---
id: ex-stationary-splitting-with-an-initial-error-missing-an-unstable-eigenspace
kind: example
title: "A stationary split converges from an error missing its unstable eigenspace"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-stationary-iteration-from-a-matrix-splitting
  - thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one
dependency_level: 0
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.2.1"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 115–116: all-start convergence depends on the full spectrum and a particular initial error may miss a dominant eigenspace."
---

## Example

Take $A=I_2$, $b=0$, $M=\operatorname{diag}(-1,2)$, and
$N=M-A=\operatorname{diag}(-2,1)$. This is a stationary splitting with
iteration matrix $G=M^{-1}N=\operatorname{diag}(2,1/2)$ and $\rho(G)=2$.
Starting from $x^{(0)}=(0,1)^T$ gives $x^{(k)}=(0,2^{-k})^T\to0$; starting
from $(1,0)^T$ gives $x^{(k)}=(2^k,0)^T$, which diverges. Thus one start
converges because its error has no component in the unstable eigenspace, even
though the splitting does not converge for every start.

## Facts & Assumptions

**Given:** The displayed splitting of $Ax=b$ with $A=I_2$ and $b=0$.

[F1] If $A=M-N$ with invertible $M$, its stationary iteration is
$x^{(k+1)}=M^{-1}Nx^{(k)}+M^{-1}b$ and its iteration matrix is $M^{-1}N$
([[def-stationary-iteration-from-a-matrix-splitting]]).

[L1] A stationary splitting converges to the unique solution for every $b$
and every start exactly when its iteration matrix has spectral radius below
$1$ ([[thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one]]).

## Verification


1.1 The matrices satisfy $M-N=I_2=A$ and $M$ is invertible. By [F1], $G=M^{-1}N=\operatorname{diag}(2,1/2)$, whose spectral radius is $2$. The unique solution for $b=0$ is $0$. [given, F1, algebra]

2.1 The recurrence is diagonal, so from $x^{(0)}=(0,1)^T$ it gives $x^{(k)}=(0,2^{-k})^T\to0$, while from $(1,0)^T$ it gives $x^{(k)}=(2^k,0)^T$ and does not converge. This directly exhibits both the missing-unstable-eigenspace case and the failure of the all-start condition [L1] because $\rho(G)=2$. [given, F1, L1, step 1.1, algebra] ∎
