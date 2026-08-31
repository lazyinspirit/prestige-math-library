---
id: ex-restarted-gmres-versus-full-gmres-on-the-same-system
kind: example
title: "Restarted GMRES can need more cycles than unrestarted GMRES on the same system"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 14: Krylov subspace methods (continued); Practical variants: restarting and truncating; Hermitian case: The Lanczos algorithm; Conjugate gradients"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN14.pdf"
---

## Example

For the system

$$A=\begin{pmatrix}0&2\\1&1\end{pmatrix},\qquad b=e_1,\qquad x_0=0,$$

full GMRES solves exactly in at most two steps because the matrix is
$2\times2$, but restarted GMRES$(1)$ stagnates immediately: every one-step
cycle returns the same iterate $x=0$.

## Facts & Assumptions

**Given:** The system from the previous counterexample.

[L1] Restarted GMRES keeps cyclewise minimization but need not inherit the full
unrestarted termination guarantee
([[prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination]]).

## Verification
**Proof technique:** direct.

1.1 The previous calculation gives the one-step GMRES minimizer $x_1=0$, so a GMRES$(1)$ cycle starting from $x_0=0$ ends where it started. Restarting therefore reproduces the same residual $r_0=e_1$ and the same one-step problem, so every cycle returns $0$ again. [L1, algebra]

2.1 By contrast, unrestarted GMRES on an invertible $2\times2$ system reaches the exact solution by step $2$. Thus restart length $1$ preserves the cyclewise minimization promised by [L1] but discards the information needed for the full method's finite termination. [L1, step 1.1, algebra] ∎