---
id: thm-dahlquist-equivalence-for-linear-multistep-methods
kind: theorem
title: "Dahlquist equivalence for a consistent linear multistep method"
status: published
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

Fix a constant-step $k$-step method from [[def-linear-multistep-method-consistency-order-and-root-condition]] on $[0,T]$, with $N\ge k$ and $h=T/N$. For exact solutions with two continuous derivatives, choose a compact state set $K\subset\mathbb R^d$ with the exact trajectory in its interior and suppose $f$ is Lipschitz in the state on $[0,T]\times K$. Convergence means that for every IVP satisfying these conditions and every sequence of starting values whose errors at $t_0,\ldots,t_{k-1}$ tend to zero as $h\to0$, each selected run is defined through $t_N$ and its maximum grid error tends to zero. For the sufficiency assertion and order estimates of an implicit method, assume a uniformly local selected branch near the exact trajectory: there are $\eta,\varepsilon>0$, independent of $N$ and the step index, such that for all sufficiently small $h$ and each $n=0,\ldots,N-k$, whenever the preceding history satisfies $\max_{0\le j<k}\|Y_{n+j}-y(t_{n+j})\|_\infty\le\eta$, the step equation has exactly one root in $\overline B(y(t_{n+k}),\varepsilon)\subset K$, and the method selects that root. Explicit methods need no branch hypothesis. The method converges for every such IVP if and only if it is consistent and satisfies the root condition. More precisely, if its order is at least $p\ge1$, the exact solution has $p+1$ continuous derivatives, and the starting errors are $O(h^p)$, then its global error is $O(h^p)$.

The necessity tests $y'=0$ and $y'=1$ have a unique implicit root in all of $\mathbb R^d$ at every step because $\alpha_k\ne0$ and their right-hand sides are independent of the new state. Those runs therefore remain defined even when an unstable mode leaves the sufficiency tube. The sufficiency estimate establishes existence along the selected local branch by keeping every computed history in its neighborhood; it does not assert an implicit root for arbitrary IVPs or step sizes.

## Facts & Assumptions

**Given:** The method, exact solution, constant grid $h=T/N$, starting values, and the branch and Lipschitz hypotheses in the statement.

[F1] [[def-linear-multistep-method-consistency-order-and-root-condition]] defines the local residual $\tau_n$, order, consistency, root condition, and zero-stability.

[F2] [[lem-linear-multistep-order-conditions-from-taylor]] says order at least $p$ is equivalent to the vanishing moments $\mu_0,\ldots,\mu_p$.

[F3] [[lem-companion-powers-bounded-under-root-condition]] says the companion powers are uniformly bounded exactly under the root condition.

[F4] [[def-first-order-ode-initial-value-problem-and-solution]] defines the first-order IVP and its solution on an interval.

[A1] For every $t\in[0,T]$ and $u,v\in K$, $\|f(t,u)-f(t,v)\|_\infty\le L\|u-v\|_\infty$ for one constant $L$.

[A2] (Sufficiency hypothesis.) For all sufficiently small $h$, each exact history and every preceding history within the radius $\eta$ in the Statement has exactly one root in the local ball about the exact next value; the selected branch is this root, and the balls lie in $K$.

## Proof

1.1 Assume consistency and the root condition. Let $C$ be the companion matrix of $\rho/\alpha_k$. By [F3], $\sup_{m\ge0}\|C^m\|_\infty\le M$. For a $d$-vector IVP, lift $C$ to the block companion $\mathcal C=C\otimes I_d$; its induced max row-sum norm is the same as that of $C$. Define $\|U\|_*:=\sup_{m\ge0}\|\mathcal C^mU\|_\infty$. Then $\|U\|_\infty\le\|U\|_*\le M\|U\|_\infty$ and $\|\mathcal CU\|_*\le\|U\|_*$. [F1, F3, construct]

1.2 Apply one step to the exact history. For an implicit method, [A2] supplies its selected root in $K$; subtracting the exact residual and using [A1] bounds its displacement from $y(t_{n+k})$ by $\|\tau_n\|_\infty/(|\alpha_k|-h|\beta_k|L)$. The denominator is at least $|\alpha_k|/2$ for small $h$. For an explicit method, $\beta_k=0$ and the unique output differs from $y(t_{n+k})$ by $-\tau_n/\alpha_k$, without evaluating $f$ at that output. By [F1] and [F2], $\tau_n=O(h^{p+1})$ for order at least $p$ (take $p=1$ for consistency). In either case the output for the exact history has displacement $O(h^{p+1})$ and lies in $K$ for small $h$, since the compact exact trajectory lies in its interior. [F1, F2, A1, A2, algebra]

1.3 If the root condition fails, choose a violating root $\lambda$ of $\rho$. For $|\lambda|>1$, the homogeneous sequence $u_n=\lambda^n$ gives, on $h=T/N$, starting perturbations $h^{1/2}(u_0,\ldots,u_{k-1})$ that tend to zero, while the terminal complex magnitude is $h^{1/2}|\lambda|^N\to\infty$. For a repeated unit root of multiplicity $m\ge2$, the homogeneous mode $u_n=n^{m-1}\lambda^n$ has bounded initial entries and terminal complex magnitude $N^{m-1}$; scaling its initial entries by $h^{1/2}$ makes them tend to zero but gives terminal complex magnitude $h^{1/2}N^{m-1}=T^{m-1}h^{1/2-(m-1)}\to\infty$. For a repeated root the claimed mode satisfies the recurrence because $(E-\lambda)^m(n^{m-1}\lambda^n)=0$, where $Eu_n=u_{n+1}$: each application reduces the polynomial degree by one, and $\rho(E)$ has this factor. For each $N$, choose $v_n=\operatorname{Re}u_n$ if $|\operatorname{Re}u_N|\ge|\operatorname{Im}u_N|$, and otherwise choose $v_n=\operatorname{Im}u_n$. Both projections solve the real scalar recurrence, and the chosen one has $|v_N|\ge|u_N|/\sqrt2$. Its first $k$ entries remain bounded uniformly in $N$. The real $d$-dimensional run $Y_n=h^{1/2}(v_n,0,\ldots,0)$ therefore has starting errors tending to zero and terminal error diverging for the exact zero solution of $y'=0$, for every fixed $d\ge1$. The projection may depend on $N$, as the definition of convergence permits an arbitrary sequence of starting values. [F1, F4, algebra]

1.4 If $\rho(1)\ne0$, apply the recurrence to $y'=0$, $y\equiv1$, with exact starting values. At the first generated value $Y_k-1=-\rho(1)/\alpha_k\ne0$, so the maximum grid error does not tend to zero. Thus convergence requires $\rho(1)=0$. [F1, F4, algebra]

2.1 Choose $\delta>0$ so that every max-norm ball of radius $\delta$ about the exact trajectory lies in $K$. For an explicit method put $B=|\alpha_k|^{-1}\sum_{j<k}|\alpha_j|$ and $D=|\alpha_k|^{-1}L\sum_{j<k}|\beta_j|$. If a history has error at most $\eta_0<\delta$, subtraction of its explicit formula from the formula for the exact history bounds the output difference by $(B+hD)\eta_0$. Choose $\eta_0>0$ so that $(B+1)\eta_0<\delta/2$ and take $h$ small; step 1.2 then puts every such output in $K$. For an implicit method take $\eta_0\le\eta$ small enough that all history values lie in $K$; [A2] puts its selected outputs in $K$. Write the history as $U_n=(Y_n,\ldots,Y_{n+k-1})^T$. Its update is $U_{n+1}=\mathcal C U_n+h e_kR_n(U_n,(U_{n+1})_k)$, where $e_k$ inserts a vector in the last state slot and $R_n$ is the derivative sum divided by $\alpha_k$. For any two histories in this neighborhood, [A1], step 1.1 and the finite coefficients give $\|U_{n+1}-V_{n+1}\|_*\le\|U_n-V_n\|_*+hK_0(\|U_n-V_n\|_*+\|U_{n+1}-V_{n+1}\|_*)$. For explicit methods the endpoint term is absent. Absorbing it when $hK_0\le1/2$ gives $\|U_{n+1}-V_{n+1}\|_*\le(1+Ch)\|U_n-V_n\|_*$. [A1, A2, step 1.1, step 1.2, algebra]

2.2 Suppose $\rho(1)=0$ but $\rho'(1)\ne\sigma(1)$. If the root condition already fails, step 1.3 applies; otherwise the root at $1$ is simple and $\rho'(1)\ne0$. Put $\delta=\rho'(1)-\sigma(1)$ and test $y'=1$, $y(t)=t$, with exact starts. The numerical error satisfies $\sum_j\alpha_je_{n+j}=-h\delta$. The sequence $p_n=-\delta nh/\rho'(1)$ is a particular solution because $\sum_j\alpha_j=0$ and $\sum_jj\alpha_j=\rho'(1)$. The difference $e_n-p_n$ is homogeneous and has starting size $O(h)$, so [F3] bounds it by $O(h)$ uniformly. At $n=N$, $p_N=-\delta T/\rho'(1)\ne0$, contradicting convergence. Hence $\rho'(1)=\sigma(1)$ is necessary. [F1, F3, F4, step 1.3, algebra]

2.3 The state vector after $n$ homogeneous steps is $C^n$ times the initial state. A uniform bound on these powers therefore gives the zero-stability estimate for every $T$ and $N$. Conversely, if the powers are unbounded, choose an exponent $n$ and unit initial state with arbitrarily large amplification, then take $T=1$ and $N\ge n+k-1$ so the entire amplified history lies on the grid; this contradicts the zero-stability bound. By [F3] and the companion construction in step 1.1, the powers are uniformly bounded exactly under the root condition. [F1, F3, step 1.1]

3.1 Let $E_n=\|U_n-U_n^*\|_*$, where $U_n^*$ is the exact history state. As long as the preceding history remains within the radius $\eta_0$ of step 2.1, steps 2.1 and 1.2 give $E_{n+1}\le(1+Ch)E_n+Ch^{p+1}$. Iterating through any first possible exit from that neighborhood yields $E_n\le e^{CT}(E_0+CT h^p)$, since $(1+Ch)^N\le e^{CT}$ and $Nh=T$. Starting errors tending to zero make the right side tend to zero; starters of order $p$ make it $O(h^p)$. Since $\|U_n-U_n^*\|_\infty\le E_n$, for sufficiently small $h$ these bounds are strictly below $\eta_0$, so a first exit is impossible. The updates therefore exist through $t_N$, and the same estimate gives the asserted convergence and order. [A2, step 2.1, step 1.2, algebra]

4.1 Steps 1.2, 2.1, and 3.1 prove sufficiency and its order-$p$ estimate; steps 1.3, 1.4, and 2.2 prove necessity of the root condition and both consistency identities. Together with [F1] and step 2.3, these are exactly consistency and zero-stability, which proves the Dahlquist equivalence. [F1, step 1.2, step 2.1, step 3.1, step 1.3, step 1.4, step 2.2, step 2.3] ∎
