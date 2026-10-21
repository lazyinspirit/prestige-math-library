---
id: thm-ip-vsc-nonlinear-regularization-rate
kind: theorem
title: Variational source conditions yield nonlinear regularization rates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - lem-ip-index-function-young-conjugate-bound
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
  - def-ip-nonlinear-forward-map
  - def-ip-x0-minimum-norm-solution
  - def-ip-nonlinear-tikhonov-functional
  - def-norm-and-normed-space
  - def-real-and-complex-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 10.7"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Theorem 2.20"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Lemma 2 and Theorem 3"
      url: "https://arxiv.org/pdf/2403.18704"
---

## Statement

Let $X,Y$ be real Banach spaces, $D(F)\subseteq X$, and $F:D(F)\to Y$. Let $R:X\to(-\infty,+\infty]$ be proper and convex, let $x^\dagger\in D(F)\cap\operatorname{dom}R$, set $y=F(x^\dagger)$, and choose $\xi^\dagger\in\partial R(x^\dagger)$. Fix $1\le p<\infty$, $0\le\beta<1$, and a level $R_0>R(x^\dagger)$. Let $\psi:[0,\infty)\to[0,\infty)$ be continuous, nondecreasing and concave, with $\psi(0)=0$ and $\psi(t)>0$ for $t>0$, and assume the variational source inequality

$$-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}\le\beta D_R^{\xi^\dagger}(x,x^\dagger)+\psi\!\left(\|F(x)-F(x^\dagger)\|_Y^p\right)\qquad\left(x\in L_{R_0}:=\{x\in D(F):R(x)\le R_0\}\right),$$

where $D_R^{\xi^\dagger}(x,x^\dagger):=R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}$. Extend $-\psi$ by $+\infty$ on negative arguments and write $H(q):=(-\psi)^*(-q)=\sup_{s\ge0}(\psi(s)-qs)$; assume $H(q)$ is finite for sufficiently large $q$ and $H(q)\to0$ as $q\to\infty$. For sufficiently small noise levels $\delta>0$ and data $y^\delta\in Y$ with $\|y^\delta-y\|_Y\le\delta$, define $J_\alpha^\delta(x):=p^{-1}\|F(x)-y^\delta\|_Y^p+\alpha R(x)$. Suppose $\alpha=\alpha(\delta)>0$ tends to zero, $0\le\varepsilon_\delta\le C_\varepsilon\delta^p$, and $x_\alpha^{\delta,\varepsilon}\in D(F)$ is an $\varepsilon_\delta$-minimizer, meaning $J_\alpha^\delta(x_\alpha^{\delta,\varepsilon})\le\inf_{z\in D(F)}J_\alpha^\delta(z)+\varepsilon_\delta$. Set $c_p:=2^{1-p}/p$ and $\rho_\delta:=H(c_p/\alpha(\delta))$. Assume that for constants $c_-,c_+,C_H>0$ independent of $\delta$,

$$c_-\delta^p\le\alpha(\delta)\rho_\delta\le c_+\delta^p,\qquad H(c_p/(2\alpha(\delta)))\le C_H\rho_\delta$$

for all sufficiently small $\delta$. Then for all sufficiently small $\delta$, $x_\alpha^{\delta,\varepsilon}\in L_{R_0}$ and

$$D_R^{\xi^\dagger}(x_\alpha^{\delta,\varepsilon},x^\dagger)=O(\rho_\delta),\qquad \|F(x_\alpha^{\delta,\varepsilon})-y^\delta\|_Y=O(\delta).$$

If, in addition, $\psi(C_0\delta^p)=O(\rho_\delta)$ for a fixed $C_0$ such that $T_\delta:=\|F(x_\alpha^{\delta,\varepsilon})-F(x^\dagger)\|_Y^p\le C_0\delta^p$ for all sufficiently small $\delta$, then $|R(x_\alpha^{\delta,\varepsilon})-R(x^\dagger)|=O(\rho_\delta)$. If also $D_R^{\xi^\dagger}(x,x^\dagger)\ge c_R\|x-x^\dagger\|_X^s$ on $L_{R_0}$ for constants $c_R,s>0$, then $\|x_\alpha^{\delta,\varepsilon}-x^\dagger\|_X^s=O(\rho_\delta)$.

In the Hilbert special case, set $p=2$ and suppose $X,Y$ are real Hilbert spaces, $F:U\to Y$ has the real open-domain interface of a nonlinear forward map, $x^\dagger$ is an $x_0$-minimum-norm exact solution, $R(x)=\frac12\|x-x_0\|_X^2$, and the source inequality on a regularizer sublevel contained in $U$ is

$$\langle x^\dagger-x_0,x^\dagger-x\rangle_X\le\beta_1\frac12\|x-x^\dagger\|_X^2+\beta_2\|F(x)-F(x^\dagger)\|_Y$$

with $0\le\beta_1<1$ and $\beta_2\ge0$. For exact global minimizers of the nonlinear Tikhonov functional with $\alpha(\delta)\asymp\delta$, the theorem gives $\|x_{\alpha(\delta)}^\delta-x^\dagger\|_X=O(\sqrt\delta)$ and $\|F(x_{\alpha(\delta)}^\delta)-y^\delta\|_Y=O(\delta)$. The assertion is conditional on such a global minimizer being supplied; it does not assert existence or cover local numerical minima.

## Statement references

[Christian Clason, *Regularization of Inverse Problems*, equation (10.17) and Theorem 10.7](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Lemma 2 and Theorem 3](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** All hypotheses in the Statement hold. Write $x_\delta:=x_\alpha^{\delta,\varepsilon}$, $T_\delta:=\|F(x_\delta)-F(x^\dagger)\|_Y^p$, and $r_\delta:=\|F(x_\delta)-y^\delta\|_Y$.

[A1] $\delta>0$, $x_\delta$ is an $\varepsilon_\delta$-minimizer of $J_\alpha^\delta$, and $\|y^\delta-y\|_Y\le\delta$, with $0\le\varepsilon_\delta\le C_\varepsilon\delta^p$.

[A2] The VSC holds on $L_{R_0}$ with the chosen $\xi^\dagger$, $\beta$, and $\psi$.

[A3] $\alpha\rho_\delta\asymp\delta^p$, $H(c_p/(2\alpha))\le C_H\rho_\delta$, $\alpha\to0$, and $\rho_\delta\to0$.

[A4] For the optional penalty conclusion, $\psi(C_0\delta^p)=O(\rho_\delta)$ for a fixed $C_0$ that bounds $T_\delta/\delta^p$ for small $\delta$.

[A5] For the optional norm conclusion, $D_R^{\xi^\dagger}(x,x^\dagger)\ge c_R\|x-x^\dagger\|_X^s$ on $L_{R_0}$ for constants $c_R,s>0$.

[A6] For the Hilbert conclusion, $R(x)=\frac12\|x-x_0\|_X^2$, $\xi^\dagger(h)=\langle x^\dagger-x_0,h\rangle_X$, the displayed $x_0$-minimum-norm VSC holds with $0\le\beta_1<1$ and $\beta_2\ge0$, and $\alpha\asymp\delta$.

[F1] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: for $x\in\operatorname{dom}R$, $\partial R(x):=\{\xi\in X^*:R(z)\ge R(x)+\langle\xi,z-x\rangle_{X^*,X}\text{ for every }z\in X\}$.

[F2] [[def-ip-bregman-distance]]: $D_R^{\xi^\dagger}(x,x^\dagger)=R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}$ and is nonnegative.

[F3] [[def-ip-variational-source-condition]]: $-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}\le\beta D_R^{\xi^\dagger}(x,x^\dagger)+\psi(\|F(x)-F(x^\dagger)\|_Y^p)$ on $L_{R_0}$.

[F4] [[lem-ip-index-function-young-conjugate-bound]]: from $c_1r+c_2\alpha e\le d+\alpha\psi(C_3r)$, the stated conjugate bounds hold for $e$ and $r$.

[F5] [[def-ip-nonlinear-forward-map]]: in the Hilbert specialization $F:U\to Y$ is a real-Hilbert forward map on an open domain.

[F6] [[def-ip-x0-minimum-norm-solution]]: the Hilbert specialization assumes the exact solution globally minimizes distance to $x_0$ over its exact solution set.

[F7] [[def-ip-nonlinear-tikhonov-functional]]: for a datum $y\in Y$, $J_{\alpha,y,x_0}(x)=\frac12\|F(x)-y\|_Y^2+\frac\alpha2\|x-x_0\|_X^2$.

[F8] [[def-norm-and-normed-space]]: each Banach norm satisfies the triangle inequality.

[F9] [[def-real-and-complex-inner-product-space]]: a real Hilbert norm satisfies $\|v\|_X^2=\langle v,v\rangle_X$.

[F10] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle_X|\le\|u\|_X\|v\|_X$.

## Proof


1.1 Comparing the approximate-minimum inequality with the exact solution gives $J_\alpha^\delta(x_\delta)\le\delta^p/p+\alpha R(x^\dagger)+\varepsilon_\delta$. Since the data term is nonnegative, $R(x_\delta)-R(x^\dagger)\le\delta^p/(p\alpha)+\varepsilon_\delta/\alpha=O(\rho_\delta)$ by [A1] and [A3]. As $\rho_\delta\to0$ and $R_0>R(x^\dagger)$, $x_\delta\in L_{R_0}$ for sufficiently small $\delta$. [given, A1, A3, algebra]

1.2 By [F5]–[F7] the special case uses the open-domain Hilbert map, the stipulated global $x_0$-minimum-norm exact solution, and the existing quadratic nonlinear Tikhonov functional. Under [A6], define $\xi^\dagger(h):=\langle x^\dagger-x_0,h\rangle_X$. By [F10] this is a bounded real-linear functional; expansion using [F9] gives $R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}=\frac12\|x-x^\dagger\|_X^2\ge0$, so [F1] gives $\xi^\dagger\in\partial R(x^\dagger)$ and [F2] gives $D_R^{\xi^\dagger}(x,x^\dagger)=\frac12\|x-x^\dagger\|_X^2$. Taking $\psi(s)=(\beta_2+1)\sqrt{s}$, the stated Hilbert source inequality implies the VSC with $p=2$. [A6, F1, F2, F3, F5, F6, F7, F9, F10, algebra]

2.1 By [F8], $T_\delta^{1/p}\le r_\delta+\delta$. For $p=1$, $(u+v)^p=u^p+v^p$; for $p>1$, $t\mapsto t^p$ is continuous at zero and has nonnegative second derivative $p(p-1)t^{p-2}$ on $(0,\infty)$, hence is convex on $[0,\infty)$, and its defining convexity inequality at the midpoint gives $(u+v)^p\le2^{p-1}(u^p+v^p)$. Taking $u=r_\delta$, $v=\delta$ yields $T_\delta\le2^{p-1}(r_\delta^p+\delta^p)$ and thus $r_\delta^p/p\ge c_pT_\delta-\delta^p/p$. Substituting into the comparison inequality from 1.1 gives $c_pT_\delta+\alpha(R(x_\delta)-R(x^\dagger))\le2\delta^p/p+\varepsilon_\delta$. [A1, F8, step 1.1, algebra]

2.2 For $B:=\beta_2+1>0$, the conjugate is $H(q)=\sup_{u\ge0}(Bu-qu^2)=B^2/(4q)$, by completing the square. With $p=2$, $c_p=1/4$, so $\alpha H(c_p/\alpha)=B^2\alpha^2\asymp\delta^2$ and $\rho_\delta=H(c_p/\alpha)=B^2\alpha\asymp\delta$ when $\alpha\asymp\delta$. The scale comparability in [A3] also holds because $H(c_p/(2\alpha))=2H(c_p/\alpha)$. [A3, A6, step 1.2, algebra]

3.1 By [F2] and [F3], $R(x_\delta)-R(x^\dagger)=D_R^{\xi^\dagger}(x_\delta,x^\dagger)+\langle\xi^\dagger,x_\delta-x^\dagger\rangle_{X^*,X}\ge(1-\beta)D_R^{\xi^\dagger}(x_\delta,x^\dagger)-\psi(T_\delta)$. Combining this with the objective comparison in step 2.1 gives $c_pT_\delta+\alpha(1-\beta)D_R^{\xi^\dagger}(x_\delta,x^\dagger)\le d_\delta+\alpha\psi(T_\delta)$, where $d_\delta:=2\delta^p/p+\varepsilon_\delta$. [F2, F3, step 2.1, algebra]

4.1 Apply [F4] with $c_1=c_p$, $c_2=1-\beta$, $C_3=1$, $r=T_\delta$, $e=D_R^{\xi^\dagger}(x_\delta,x^\dagger)$, and $d=d_\delta$. It follows that $D_R^{\xi^\dagger}(x_\delta,x^\dagger)\le\frac1{1-\beta}\left(\frac{d_\delta}{\alpha}+\rho_\delta\right)$ and $T_\delta\le\frac2{c_p}\left(d_\delta+\alpha H(c_p/(2\alpha))\right)$. [F4, step 3.1]

5.1 From [A1] and [A3], $d_\delta=O(\delta^p)$, $d_\delta/\alpha=O(\rho_\delta)$, and $d_\delta+\alpha H(c_p/(2\alpha))=O(\delta^p)$. Thus $D_R^{\xi^\dagger}(x_\delta,x^\dagger)=O(\rho_\delta)$ and $T_\delta=O(\delta^p)$. The triangle inequality gives $r_\delta\le T_\delta^{1/p}+\delta$, so the noisy-data residual is $O(\delta)$. [A1, A3, F8, step 4.1, algebra]

6.1 For the penalty rate, [F2]–[F3] give $R(x_\delta)-R(x^\dagger)\ge-\psi(T_\delta)$, while step 1.1 supplies its upper bound. If [A4] holds for a fixed $C_0$ bounding $T_\delta/\delta^p$, then $|R(x_\delta)-R(x^\dagger)|=O(\rho_\delta)$. If [A5] also holds, the Bregman bound in step 5.1 gives $\|x_\delta-x^\dagger\|_X^s=O(\rho_\delta)$. [A4, A5, F2, F3, step 1.1, step 5.1]

7.1 Applying the Bregman bound from step 5.1 and the exact Bregman identity from step 1.2 gives $\|x_{\alpha(\delta)}^\delta-x^\dagger\|_X^2=O(\delta)$ and $\|F(x_{\alpha(\delta)}^\delta)-y^\delta\|_Y=O(\delta)$, hence the asserted $O(\sqrt\delta)$ solution error and $O(\delta)$ residual. [A6, step 5.1, step 1.2, step 2.2, algebra] ∎
