---
id: alg-short-step-self-concordant-path-following
kind: algorithm
title: "Short-step self-concordant path following with finite failure statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-self-concordant-log-homogeneous-barrier
  - def-barrier-central-path-and-newton-residuals
  - lem-self-concordant-local-newton-calculus
  - lem-loghom-barrier-gradient-is-dual
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.5, short-step self-concordant path-following complexity."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, Proposition 15.1, short-step parameter update, and Theorem 15.1."
---

## Definition

Let $K$ be a proper cone, $F$ a $\nu$-log-homogeneous self-concordant barrier on $\operatorname{int}K$, and consider $\min c^Tx$ subject to $Ax=b$, $s=h-Gx\in K$. Require the barrier Hessian restricted to $\ker A$ to be positive definite, so the affine restriction has a local norm. The local calculus lemma proves that each barrier subproblem has an attained unique center whenever its Newton decrement is below one.

For a strict feasible $x$ with $Ax=b$, define the restricted local norm by $\|d\|_{t,x}=\sqrt{D^2\Phi_t(x)[d,d]}$ for $d\in\ker A$. The decrement used below is the restricted dual norm
$$\lambda_t(x)=\sup\{|D\Phi_t(x)[d]|:d\in\ker A,\ \|d\|_{t,x}\le1\}.$$
Thus $\lambda_t(x)$ is induced by the barrier Hessian restricted to the feasible tangent space.

**Inputs:** $t_0>0$, target $\varepsilon>0$, a strictly feasible $x_0$ with restricted decrement $\lambda_{t_0}(x_0)\le1/4$, integer caps $N_{out}\ge0$ and $N_{in}\ge2$, and an exact linear-system solver for the equality-constrained Newton equations. **Output:** a record with a status and optional iterate fields. `gap-tolerance` returns the feasible iterate $x$, current $t$, and certified gap bound $(\nu+\sqrt\nu/2)/t$. `outer-cap`, `centering-cap`, and `newton-solve-failure` return the last feasible iterate and current $t$ with no gap certificate. `invalid-start` returns no iterate and no gap certificate.

1. Verify $Ax_0=b$, $h-Gx_0\in\operatorname{int}K$, the stated initial decrement, and all cap/parameter conditions; otherwise return `invalid-start`. Set $x=x_0$, $t=t_0$, and both counters to zero.
2. While $(\nu+\sqrt\nu/2)/t>\varepsilon$, first return `outer-cap` if the outer counter equals $N_{out}$. Set $\alpha=1+1/(8\sqrt\nu)$ and $t^+=\alpha t$.
3. At the current $x$, compute $\lambda=\lambda_{t^+}(x)$. While $\lambda>1/4$ and the inner counter is below $N_{in}$, solve the restricted Newton equation $D^2\Phi_{t^+}(x)[d,\cdot]=-D\Phi_{t^+}(x)[\cdot]$ on $\ker A$. If the solve fails, return `newton-solve-failure`. Otherwise set $x\leftarrow x+d/(1+\lambda)$, increment the inner counter, and recompute $\lambda$.
4. If $\lambda>1/4$ after the inner loop, return `centering-cap`. Otherwise accept $t\leftarrow t^+$, increment the outer counter, reset the inner counter, and repeat step 2.
5. When the loop condition is false, return `gap-tolerance` with $x$, $t$, and bound $(\nu+\sqrt\nu/2)/t$.

The cap counts Newton corrections, not factorization operations. This definition does not construct a strict feasible start; a Phase-I certificate is a separate input obligation.
