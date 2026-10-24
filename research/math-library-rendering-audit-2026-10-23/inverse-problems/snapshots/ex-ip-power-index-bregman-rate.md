---
id: ex-ip-power-index-bregman-rate
kind: example
title: Power index functions give polynomial Bregman rates
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
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, equation (2.25a)"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equation (1.32a)"
      url: "https://arxiv.org/pdf/2403.18704"
---

## Example

Let $X,Y$ be real Banach spaces, $D(F)\subseteq X$, $F:D(F)\to Y$, and let $R:X\to(-\infty,+\infty]$ be proper and convex. Fix $x^\dagger\in D(F)\cap\operatorname{dom}R$, $y=F(x^\dagger)$, $\xi^\dagger\in\partial R(x^\dagger)$, $1\le p<\infty$, $A>0$, $0<\mu<1$, $0\le\beta<1$, and $R_0>R(x^\dagger)$. Write $D_R^{\xi^\dagger}(x,x^\dagger):=R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}$, and suppose

$$-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}\le\beta D_R^{\xi^\dagger}(x,x^\dagger)+A\|F(x)-F(x^\dagger)\|_Y^{p\mu}\qquad(x\in D(F),\ R(x)\le R_0).$$

For data $y^\delta$ with $\|y^\delta-y\|_Y\le\delta$, suppose $0\le\varepsilon_\delta\le C_\varepsilon\delta^p$ and $x_\alpha^{\delta,\varepsilon}\in D(F)$ satisfies $J_\alpha^\delta(x_\alpha^{\delta,\varepsilon})\le\inf_{z\in D(F)}J_\alpha^\delta(z)+\varepsilon_\delta$, where $J_\alpha^\delta(x):=p^{-1}\|F(x)-y^\delta\|_Y^p+\alpha R(x)$. Set $c_p=2^{1-p}/p$, $H(q):=\sup_{s\ge0}(As^\mu-qs)$, and choose $\alpha(\delta)\asymp\delta^{p(1-\mu)}$. Then $H(c_p/\alpha)\asymp\delta^{p\mu}$ and $\alpha H(c_p/\alpha)\asymp\delta^p$. The fixed-scale conjugate and penalty-index conditions hold. Hence $D_R^{\xi^\dagger}(x_\alpha^{\delta,\varepsilon},x^\dagger)=O(\delta^{p\mu})$ and $\|F(x_\alpha^{\delta,\varepsilon})-y^\delta\|_Y=O(\delta)$; if $D_R^{\xi^\dagger}(x,x^\dagger)\ge c_R\|x-x^\dagger\|_X^s$ on $L_{R_0}$ for constants $c_R,s>0$, then $\|x_\alpha^{\delta,\varepsilon}-x^\dagger\|_X=O(\delta^{p\mu/s})$.

## Example references

[[def-ip-variational-source-condition|Variational source condition hypotheses]]

[[lem-ip-index-function-young-conjugate-bound|Conjugate error bound]]

[[thm-ip-vsc-nonlinear-regularization-rate|Banach VSC rate theorem]]

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, equation (2.25a)](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equation (1.32a)](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The conditions in the Example hold, with $\alpha(\delta)\asymp\delta^{p(1-\mu)}$.

[F1] [[thm-ip-vsc-nonlinear-regularization-rate]]: under the VSC, approximate-minimizer tolerance, and conjugate parameter coupling, the Bregman distance is $O(H(c_p/\alpha))$ and the residual is $O(\delta)$.

[F2] [[lem-ip-index-function-young-conjugate-bound]]: $H(q)=\sup_{s\ge0}(\psi(s)-qs)$ is the conjugate term in the residual/Bregman bound.

[A1] $A>0$, $0<\mu<1$, and $p\ge1$ are fixed, independent of $\delta$.

## Verification


1.1 For $q>0$, the function $s\mapsto As^\mu-qs$ has derivative $A\mu s^{\mu-1}-q$, which decreases from $+\infty$ to $-q$ and vanishes only at $s_q=(A\mu/q)^{1/(1-\mu)}$. The function is increasing before $s_q$ and decreasing after it, with value $0$ at $s=0$ and limit $-\infty$ as $s\to\infty$, so this point is its global maximizer. Substitution gives $H(q)=(1-\mu)A^{1/(1-\mu)}\mu^{\mu/(1-\mu)}q^{-\mu/(1-\mu)}$. [A1, algebra]

2.1 With $q=c_p/\alpha$ this gives $H(c_p/\alpha)=C_{p,A,\mu}\alpha^{\mu/(1-\mu)}$, so the chosen $\alpha$ yields $H(c_p/\alpha)\asymp\delta^{p\mu}$ and $\alpha H(c_p/\alpha)\asymp\delta^p$. Also $H(c_p/(2\alpha))=2^{\mu/(1-\mu)}H(c_p/\alpha)$, while $\psi(C_0\delta^p)=A C_0^\mu\delta^{p\mu}=O(H(c_p/\alpha))$ for every fixed $C_0>0$. Thus the parameter and penalty conditions in [F1] hold, and [F1] gives the stated Bregman and residual rates. Under the additional lower bound with $c_R,s>0$, division by $c_R$ gives $\|x_\alpha^{\delta,\varepsilon}-x^\dagger\|_X^s=O(\delta^{p\mu})$; taking the positive $s$-th root gives the norm rate. [A1, F1, F2, step 1.1, algebra] ∎
