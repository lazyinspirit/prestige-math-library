---
id: ex-ip-logarithmic-index-bregman-rate
kind: example
title: Logarithmic index functions give log-rate Bregman convergence
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-ip-index-function-young-conjugate-bound
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
  - thm-ip-vsc-nonlinear-regularization-rate
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, equation (2.25b)"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equations (1.31)–(1.32b)"
      url: "https://arxiv.org/pdf/2403.18704"
---

## Example

Let $X,Y$ be real Banach spaces, $D(F)\subseteq X$, $F:D(F)\to Y$, and let $R:X\to(-\infty,+\infty]$ be proper and convex. Choose $x^\dagger\in D(F)\cap\operatorname{dom}R$, set $y=F(x^\dagger)$, and choose $\xi^\dagger\in\partial R(x^\dagger)$. Fix $1\le p<\infty$, $\nu>0$, $0<t_0<e^{-(\nu+1)}$, $0\le\beta<1$, and $R_0>R(x^\dagger)$. Define $\psi(0)=0$, $\psi(t)=(-\log t)^{-\nu}$ for $0<t<t_0$, and $\psi(t)=(-\log t_0)^{-\nu}$ for $t\ge t_0$. Suppose

$$-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}\le\beta D_R^{\xi^\dagger}(x,x^\dagger)+\psi\!\left(\|F(x)-F(x^\dagger)\|_Y^p\right)\qquad\left(x\in L_{R_0}:=\{x\in D(F):R(x)\le R_0\}\right),$$

where $D_R^{\xi^\dagger}(x,x^\dagger):=R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}$. For data $y^\delta\in Y$ with $\|y^\delta-y\|_Y\le\delta$, let $0\le\varepsilon_\delta\le C_\varepsilon\delta^p$ and suppose $x_\alpha^{\delta,\varepsilon}\in D(F)$ satisfies

$$J_\alpha^\delta(x_\alpha^{\delta,\varepsilon})\le\inf_{z\in D(F)}J_\alpha^\delta(z)+\varepsilon_\delta,\qquad J_\alpha^\delta(x):=p^{-1}\|F(x)-y^\delta\|_Y^p+\alpha R(x).$$

Choose $\alpha(\delta)=\delta^p(\log(1/\delta))^\nu$ for sufficiently small $0<\delta<1$, and write $c_p=2^{1-p}/p$. For $H(q):=\sup_{s\ge0}(\psi(s)-qs)$, one has $H(q)\sim(\log q)^{-\nu}$ as $q\to\infty$, so $\rho_\delta:=H(c_p/\alpha(\delta))\asymp(\log(1/\delta))^{-\nu}$ and $\alpha(\delta)\rho_\delta\asymp\delta^p$. The variational source rate theorem therefore gives

$$D_R^{\xi^\dagger}(x_\alpha^{\delta,\varepsilon},x^\dagger)=O((\log(1/\delta))^{-\nu}),\qquad \|F(x_\alpha^{\delta,\varepsilon})-y^\delta\|_Y=O(\delta),\qquad |R(x_\alpha^{\delta,\varepsilon})-R(x^\dagger)|=O((\log(1/\delta))^{-\nu}).$$

If also $D_R^{\xi^\dagger}(x,x^\dagger)\ge c_R\|x-x^\dagger\|_X^s$ on $L_{R_0}$ for constants $c_R,s>0$, then $\|x_\alpha^{\delta,\varepsilon}-x^\dagger\|_X=O((\log(1/\delta))^{-\nu/s})$. The parameter coupling here is derived from $\alpha H(c_p/\alpha)\asymp\delta^p$.

## Example references

[[def-ip-variational-source-condition|Variational source condition hypotheses]]

[[lem-ip-index-function-young-conjugate-bound|Conjugate error bound]]

[[thm-ip-vsc-nonlinear-regularization-rate|Banach VSC rate theorem]]

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, equation (2.25b)](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equations (1.31)–(1.32b)](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The conditions in the Example hold for sufficiently small $0<\delta<1$.

[F1] [[def-ip-variational-source-condition]]: the VSC uses a continuous, nondecreasing, concave index function vanishing at zero and a coefficient $0\le\beta<1$ on the stated regularizer sublevel.

[F2] [[lem-ip-index-function-young-conjugate-bound]]: $H(q)=\sup_{s\ge0}(\psi(s)-qs)$ is the conjugate quantity used to bound Bregman and residual errors.

[F3] [[thm-ip-vsc-nonlinear-regularization-rate]]: if $\alpha H(c_p/\alpha)\asymp\delta^p$ and $H(c_p/(2\alpha))=O(H(c_p/\alpha))$, then the theorem yields Bregman error $O(H(c_p/\alpha))$ and noisy-data residual $O(\delta)$; it also yields the penalty rate when $\psi(C_0\delta^p)=O(H(c_p/\alpha))$.

[A1] $\nu>0$ and $0<t_0<e^{-(\nu+1)}$ are fixed, and $\alpha(\delta)=\delta^p(\log(1/\delta))^\nu$.

## Verification


1.1 For $0<t<t_0$, put $L=-\log t$. Differentiation gives $\psi'(t)=\nu/(tL^{\nu+1})$ and $\psi''(t)=\nu((\nu+1)-L)/(t^2L^{\nu+2})<0$, since $L\ge-\log t_0>\nu+1$. Thus $\psi'$ decreases on $(0,t_0)$ and has positive left limit at $t_0$; after $t_0$ the function is constant, so its derivative drops to zero and remains nonincreasing. Also $\psi(t)\to0$ as $t\downarrow0$. Therefore its continuous extension at zero is nondecreasing, concave on $[0,\infty)$, vanishes at zero and is positive for $t>0$, as required by [F1]. [A1, F1, algebra]

2.1 For $q>\psi'(t_0-)$, the derivative of $s\mapsto\psi(s)-qs$ decreases from $+\infty$ to a negative value on $(0,t_0)$ and is $-q<0$ for $s>t_0$. Hence the unique global maximizer is $s_q\in(0,t_0)$ satisfying $q=\nu/(s_qL_q^{\nu+1})$, where $L_q=-\log s_q$. This equation gives $\log q=L_q-(\nu+1)\log L_q+\log\nu$, so $L_q\to\infty$ and $L_q/\log q\to1$. At the maximizer, $qs_q=\nu L_q^{-\nu-1}$; consequently $H(q)=L_q^{-\nu}(1-\nu/L_q)\sim(\log q)^{-\nu}$. [A1, step 1.1, algebra]

3.1 Set $\ell_\delta=\log(1/\delta)$. Then $\alpha(\delta)\to0$ and $q_\delta=c_p/\alpha(\delta)\to\infty$, while $\log q_\delta=p\ell_\delta-\nu\log\ell_\delta+\log c_p\sim p\ell_\delta$. By step 2.1, $\rho_\delta=H(q_\delta)\asymp\ell_\delta^{-\nu}$ and $\alpha\rho_\delta\asymp\delta^p$. Replacing $q_\delta$ by $q_\delta/2$ changes its logarithm by only $-\log2$, so $H(c_p/(2\alpha))\asymp\rho_\delta$. For any fixed $C_0>0$, eventually $C_0\delta^p<t_0$, and $\psi(C_0\delta^p)=(-\log(C_0\delta^p))^{-\nu}\asymp\ell_\delta^{-\nu}\asymp\rho_\delta$. Thus all coupling and penalty-index hypotheses in [F3] hold; applying [F3] gives the three asserted rates. If the additional Bregman lower bound holds, its combination with the Bregman rate gives $\|x_\alpha^{\delta,\varepsilon}-x^\dagger\|_X^s=O(\ell_\delta^{-\nu})$, and taking the positive $s$-th root proves the stated norm rate. [A1, F2, F3, step 2.1, algebra] ∎
