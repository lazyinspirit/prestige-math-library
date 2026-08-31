---
id: prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination
kind: proposition
title: "Restarted GMRES preserves cyclewise residual minimization but loses the unrestarted finite-termination guarantee"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-restarted-gmres-m,
       cor-gmres-minimizes-the-residual-over-the-affine-krylov-space,
       thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 14: Krylov subspace methods (continued); Practical variants: restarting and truncating; Hermitian case: The Lanczos algorithm; Conjugate gradients"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN14.pdf"
---

## Statement

In restarted GMRES$(m)$, each cycle output $x^{(j+1)}$ minimizes the residual
norm over the current affine space
$x^{(j)}+K_m(A,r^{(j)})$. However, after restarting one no longer minimizes over
the full unrestarted space $x_0+K_k(A,r_0)$ for large $k$, so the unrestarted
finite-termination theorem does not carry over automatically.

## Facts & Assumptions

**Given:** A restarted GMRES$(m)$ cycle from $x^{(j)}$ with residual
$r^{(j)}=b-Ax^{(j)}$.

[F1] Restarted GMRES$(m)$ is defined by running ordinary GMRES for $m$ steps
from the current iterate and then restarting from the cycle output
([[def-restarted-gmres-m]]).

[L1] Ordinary GMRES minimizes the residual norm over its affine Krylov space
([[cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]]).

[L2] Unrestarted finite termination uses the fact that the exact solution lies
in one large affine Krylov space built from the original residual
([[thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], the $(j+1)$st restarted iterate is obtained by applying ordinary GMRES to the system with initial guess $x^{(j)}$ and initial residual $r^{(j)}$. Therefore [L1] gives $$\|b-Ax^{(j+1)}\|_2 =\min_{x\in x^{(j)}+K_m(A,r^{(j)})}\|b-Ax\|_2.$$ [F1, L1]

2.1 The unrestarted theorem [L2] uses the single expanding family $x_0+K_k(A,r_0)$. After a restart, [F1] replaces that space by the new cycle space $x^{(j)}+K_m(A,r^{(j)})$, which need not contain the exact solution even when some larger unrestarted space would. Hence cyclewise minimization remains true, but the unrestarted finite-termination guarantee is no longer a formal consequence after restart. [F1, L2, step 1.1] ∎