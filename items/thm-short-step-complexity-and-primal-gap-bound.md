---
id: thm-short-step-complexity-and-primal-gap-bound
kind: theorem
title: "Short-step path following takes $O(\\sqrt{\\nu}\\log(\\nu/(\\varepsilon t_0)))$ Newton steps"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-short-step-self-concordant-path-following
  - thm-central-path-barrier-gap-and-dual-certificate
  - lem-self-concordant-local-newton-calculus
  - def-self-concordant-log-homogeneous-barrier
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 11 §11.5, especially the self-concordant short-step complexity argument."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 14: Self-concordant functions"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture14.pdf"
      locator: "Full lecture, Theorem 14.1 (full-step Newton decrement); the damped estimate used here is proved in lem-self-concordant-local-newton-calculus."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 15: Path-following methods"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture15.pdf"
      locator: "Full lecture, Proposition 15.1, Theorem 15.1, and path-following complexity analysis."
---

## Statement

Assume the inputs of [[alg-short-step-self-concordant-path-following]], with a positive-definite restricted barrier Hessian, and assume the primal value $p^*$ is finite. The initial decrement and the update rule imply existence of the exact center at each path parameter. If the finite caps permit each path update, then after $k$ path updates the returned iterate satisfies
$$c^Tx-p^*\le\frac{\nu+\sqrt\nu/2}{t_k}\le\frac{3\nu}{2t_k},\qquad t_k=t_0\left(1+\frac1{8\sqrt\nu}\right)^k.$$
Consequently, for $R=3\nu/(2\varepsilon t_0)>1$, at most
$$k=\left\lceil\frac{\log R}{\log(1+1/(8\sqrt\nu))}\right\rceil\le 1+9\sqrt\nu\log R$$
path updates suffice, with at most two damped Newton corrections per update. Uniformly for $R>1$, this is $O(1+\sqrt\nu\log R)$ Newton corrections. As $\nu/(\varepsilon t_0)\to\infty$, it is $O(\sqrt\nu\log(\nu/(\varepsilon t_0)))$ Newton corrections. If an input cap is smaller than the required number, the algorithm returns its named failure status and makes no successful-complexity claim.

## Facts & Assumptions

**Given:** A strict feasible start with decrement at most $1/4$, attained barrier centers, and the short-step algorithm and local self-concordant calculus.

[F1] $\lambda_F(x)\le\sqrt\nu$ and $F(\alpha x)=F(x)-\nu\log\alpha$ for $\alpha>0$ ([[def-self-concordant-log-homogeneous-barrier]]).

[F2] A damped Newton correction has decrement at most $2\lambda^2$ and $\|x-x_*\|_x\le\lambda/(1-\lambda)$ when $\lambda<1$ ([[lem-self-concordant-local-newton-calculus]]).

[F3] An exact central point has gap at most $\nu/t$ ([[thm-central-path-barrier-gap-and-dual-certificate]]).

[F4] Any self-concordant barrier point with decrement below one has a unique attained global minimizer, and its local distance to that minimizer is bounded ([[lem-self-concordant-local-newton-calculus]]).

## Proof

1.1 Log homogeneity gives $DF(x)[x]=-\nu$, $D^2F(x)[x,x]=\nu$, and $D^3F(x)[x,x,x]=-2\nu$. The self-concordance inequality in [F1] therefore implies $2\nu\le2\nu^{3/2}$, hence $\nu\ge1$. [F1, algebra]

1.2 At an iterate with $\lambda_t(x)\le1/4$, set $\alpha=1+1/(8\sqrt\nu)$ and $B(x)=F(h-Gx)$. On $\ker A$, $D^2B(x)[d,d]=D^2F(s)[Gd,Gd]$, so the restricted dual norm of $DB(x)$ is at most the ambient dual norm of $DF(s)$, hence at most $\sqrt\nu$ by [F1]. Since $D\Phi_{\alpha t}=\alpha D\Phi_t+(1-\alpha)DB$, the triangle inequality gives $\lambda_{\alpha t}(x)\le\alpha\lambda_t(x)+(\alpha-1)\sqrt\nu\le3/8+1/(32\sqrt\nu)\le13/32$. [F1, given, algebra]

2.1 Adding the linear term $t^+c^Tx$ does not change the barrier Hessian, local norms, or third derivatives, so [F2] applies to $\Phi_{t^+}$. The starting decrement is at most $13/32<1$, so [F4] gives a unique attained center for that subproblem. After the first damped correction the decrement is at most $2(13/32)^2=338/1024$. Applying [F2] once more gives at most $2(338/1024)^2<1/4$. Dikin inclusion keeps both corrections in the cone interior. Thus each path update is recentered in at most two corrections. [F2, F4, step 1.2, algebra]

3.1 Let $x_*(t)$ be the exact center at the new $t$ and let $x$ be the accepted iterate with $\lambda_t(x)\le1/4$. By [F2], $r=\|x-x_*(t)\|_x\le1/3$. Applying its local Hessian comparison to this segment gives $\|x-x_*(t)\|_{x_*(t)}\le r/(1-r)\le1/2$. For $h=x-x_*(t)$, the restricted barrier norm is $\|G h\|_{s_*(t)}=\|h\|_{x_*(t)}$. Stationarity of $x_*(t)$ along the feasible affine space gives $t c^Th=-DF(s_*(t))[s(x)-s_*(t)]$. The restricted barrier dual norm of this functional is at most the ambient $\sqrt\nu$ from [F1], because restricting the unit-vector supremum can only decrease it. Hence $|c^Th|\le\sqrt\nu/(2t)$. Combining this with [F3] yields $c^Tx-p^*\le(\nu+\sqrt\nu/2)/t\le3\nu/(2t)$, since $\nu\ge1$. [F1, F2, F3, step 2.1, algebra]

4.1 Each path update multiplies $t$ by $\alpha$, so $t_k=t_0\alpha^k$. The bound in step 3.1 is at most $\varepsilon$ once $t_k\ge3\nu/(2\varepsilon)$, which gives the displayed ceiling. For $u=1/(8\sqrt\nu)\le1/8$, $\log(1+u)\ge u/(1+u)\ge1/(9\sqrt\nu)$; hence $k\le1+9\sqrt\nu\log R$. Step 2.1 bounds corrections by $2k\le2+18\sqrt\nu\log R$, giving the uniform bound. As $\nu/(\varepsilon t_0)\to\infty$, $\log R=\log(\nu/(\varepsilon t_0))+\log(3/2)$ gives the asserted asymptotic bound. [step 2.1, step 3.1, algebra] ∎
