---
id: thm-dahlquist-equivalence-for-linear-multistep-methods
kind: theorem
title: "Dahlquist equivalence for a consistent linear multistep method"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-linear-multistep-order-conditions-from-taylor
  - lem-companion-powers-bounded-under-root-condition
  - def-first-order-ode-initial-value-problem-and-solution
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.8"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.8"
      url: "https://fncbook.com/zerostability/"
dependency_level: 2
---

## Statement

Fix a constant-step $k$-step method from [[def-linear-multistep-method-consistency-order-and-root-condition]] on $[0,T]$. Convergence means that for every admitted first-order IVP and every sequence of starting values whose errors at $t_0,\ldots,t_{k-1}$ tend to zero as $h=T/N\to0$, the maximum grid error tends to zero. For exact solutions with two continuous derivatives, choose a compact state set $K\subset\mathbb R^d$ with the exact trajectory in its interior and suppose $f$ is Lipschitz in the state on $[0,T]\times K$. For an implicit method, require a unique selected root in $K$ for every history in $K$. The method converges for every such IVP if and only if it is consistent and satisfies the root condition. More precisely, if its order is at least $p\ge1$, the exact solution has $p+1$ continuous derivatives, and the starting errors are $O(h^p)$, then its global error is $O(h^p)$.

For the sufficiency and order estimates, the branch assumption means that a unique selected root exists in $K$ for every history in $K$; the error proof then keeps the computed histories there. Convergence is tested on defined runs. In the necessity tests $y'=0$ and $y'=1$, the implicit equation has a unique root in all of $\mathbb R^d$ at every step because $\alpha_k\ne0$ and the right-hand side is independent of the new state, so those tests remain defined even if an unstable mode leaves the sufficiency tube. The global estimate does not assert existence of an implicit root for arbitrary IVPs or step sizes.

## Facts & Assumptions

**Given:** The method, exact solution, constant grid $h=T/N$, starting values, and the branch and Lipschitz hypotheses in the statement.

[F1] [[def-linear-multistep-method-consistency-order-and-root-condition]] defines the local residual $\tau_n$, order, consistency, root condition, and zero-stability.

[F2] [[lem-linear-multistep-order-conditions-from-taylor]] says order at least $p$ is equivalent to the vanishing moments $\mu_0,\ldots,\mu_p$.

[F3] [[lem-companion-powers-bounded-under-root-condition]] says the companion powers are uniformly bounded exactly under the root condition.

[F4] [[def-first-order-ode-initial-value-problem-and-solution]] defines the first-order IVP and its solution on an interval.

[A1] For every $t\in[0,T]$ and $u,v\in K$, $\|f(t,u)-f(t,v)\|_\infty\le L\|u-v\|_\infty$ for one constant $L$.

[A2] (Sufficiency hypothesis.) For each sufficiently small step and each history in $K$, the implicit equation has exactly one root in $K$; this root defines the selected one-step map. The error estimate is asserted only while the iterated histories remain in $K$.

## Proof

1.1 Assume consistency and the root condition. Let $C$ be the companion matrix of $\rho/\alpha_k$. By [F3], $\sup_{m\ge0}\|C^m\|_\infty\le M$. For a $d$-vector IVP, lift $C$ to the block companion $\mathcal C=C\otimes I_d$; its induced max row-sum norm is the same as that of $C$. Define $\|U\|_*:=\sup_{m\ge0}\|\mathcal C^mU\|_\infty$. Then $\|U\|_\infty\le\|U\|_*\le M\|U\|_\infty$ and $\|\mathcal CU\|_*\le\|U\|_*$. [F1, F3, construct]

1.2 Apply one step to the exact history. Its residual is $O(h^2)$ for the consistency implication, by [F1] and [F2] with $p=1$; when the method has order at least $p$, the same argument gives $O(h^{p+1})$. In the implicit case, subtracting the exact value from the selected root equation and using [A1] bounds the endpoint displacement by the residual divided by $|\alpha_k|-h|\beta_k|L$; this denominator is at least $|\alpha_k|/2$ for small $h$. Thus the one-step displacement from the exact next state has the same order as the residual. [F1, F2, A1, A2]

1.3 If the root condition fails, choose a violating root $\lambda$ of $\rho$. For $|\lambda|>1$, the homogeneous sequence $u_n=\lambda^n$ gives, on $h=T/N$, starting perturbations $h^{1/2}(u_0,\ldots,u_{k-1})$ that tend to zero, while the terminal complex magnitude is $h^{1/2}|\lambda|^N\to\infty$. For a repeated unit root of multiplicity $m\ge2$, the homogeneous mode $u_n=n^{m-1}\lambda^n$ has bounded initial entries and terminal complex magnitude $N^{m-1}$; scaling its initial entries by $h^{1/2}$ makes them tend to zero but gives terminal complex magnitude $h^{1/2}N^{m-1}=T^{m-1}h^{1/2-(m-1)}\to\infty$. If $\lambda$ is nonreal, use the real two-vector $(\operatorname{Re}u_n,\operatorname{Im}u_n)$; because the recurrence coefficients are real, it is a real vector-valued homogeneous solution and its max norm is at least $|u_n|/\sqrt2$. Thus in all cases the real run's maximum error diverges for the exact zero solution of $y'=0$, although its starting errors tend to zero. [F1, F4, algebra]

1.4 If $\rho(1)\ne0$, apply the recurrence to $y'=0$, $y\equiv1$, with exact starting values. At the first generated value $Y_k-1=-\rho(1)/\alpha_k\ne0$, so the maximum grid error does not tend to zero. Thus convergence requires $\rho(1)=0$. [F1, F4, algebra]

2.1 Write the $k$ most recent values as $U_n=(Y_n,\ldots,Y_{n+k-1})^T$. The update is $U_{n+1}=CU_n+h e_kR_n(U_n,(U_{n+1})_k)$, where $e_k$ inserts the new value in the last state slot and $R_n$ is the finite sum of derivative terms. For histories $U,V$, [A1] and norm equivalence bound old-state derivative differences by $K\|U-V\|_*$; the new endpoint derivative difference is at most $L\|U_{n+1}-V_{n+1}\|_*$. Thus $\|U_{n+1}-V_{n+1}\|_*\le\|U-V\|_*+hK(\|U-V\|_*+\|U_{n+1}-V_{n+1}\|_*)$. For $hK\le1/2$, move the last term to the left to obtain $\|U_{n+1}-V_{n+1}\|_*\le(1+Ch)\|U-V\|_*$. [A1, A2, step 1.1, algebra]

2.2 Suppose $\rho(1)=0$ but $\rho'(1)\ne\sigma(1)$. If the root condition already fails, step 1.3 applies; otherwise the root at $1$ is simple and $\rho'(1)\ne0$. Put $\delta=\rho'(1)-\sigma(1)$ and test $y'=1$, $y(t)=t$, with exact starts. The numerical error satisfies $\sum_j\alpha_je_{n+j}=-h\delta$. The sequence $p_n=-\delta nh/\rho'(1)$ is a particular solution because $\sum_j\alpha_j=0$ and $\sum_jj\alpha_j=\rho'(1)$. The difference $e_n-p_n$ is homogeneous and has starting size $O(h)$, so [F3] bounds it by $O(h)$ uniformly. At $n=N$, $p_N=-\delta T/\rho'(1)\ne0$, contradicting convergence. Hence $\rho'(1)=\sigma(1)$ is necessary. [F1, F3, F4, step 1.3, algebra]

2.3 The state vector after $n$ homogeneous steps is $C^n$ times the initial state. A uniform bound on these powers therefore gives the zero-stability estimate for every $T$ and $N$. Conversely, if the powers are unbounded, choose an exponent $n$ and unit initial state with arbitrarily large amplification, then take $T=1$ and $N\ge n$; this contradicts the zero-stability bound. By [F3] and the companion construction in step 1.1, the powers are uniformly bounded exactly under the root condition. [F1, F3, step 1.1]

3.1 Let $E_n=\|U_n-U_n^*\|_*$, where $U_n^*$ is the exact history state. Steps 2.1 and 1.2 give $E_{n+1}\le(1+Ch)E_n+Ch^{p+1}$. Iterating for $n\le N$ yields $E_n\le e^{CT}(E_0+CT h^p)$, since $(1+Ch)^N\le e^{CT}$ and $Nh=T$. Equivalent finite-dimensional norms transfer this bound to each grid value. Therefore $E_n\to0$ for starting errors tending to zero, and $E_n=O(h^p)$ for starters of order $p$. [step 2.1, step 1.2, algebra]

4.1 Steps 1.2, 2.1, and 3.1 prove sufficiency and its order-$p$ estimate; steps 1.3, 1.4, and 2.2 prove necessity of the root condition and both consistency identities. Together with [F1] and step 2.3, these are exactly consistency and zero-stability, which proves the Dahlquist equivalence. [F1, step 1.2, step 2.1, step 3.1, step 1.3, step 1.4, step 2.2, step 2.3] ∎
