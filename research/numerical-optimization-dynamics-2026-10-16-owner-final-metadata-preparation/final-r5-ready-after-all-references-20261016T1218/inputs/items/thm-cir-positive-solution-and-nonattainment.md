---
id: thm-cir-positive-solution-and-nonattainment
kind: theorem
title: "CIR paths stay positive and do not explode under the Feller condition"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-local-sde-existence-and-uniqueness-until-exit
  - lem-cir-lamperti-transform-and-positive-root
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-gronwall-integral-inequality
  - def-continuous-time-stopping-time
  - lem-rat-embeds-dense
  - def-d-dimensional-brownian-motion
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Aurélien Alfonsi, Strong convergence of some drift implicit Euler scheme. Application to the CIR process, §2 and the Feller boundary discussion"
      url: "https://arxiv.org/pdf/1206.3855"
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, §1"
      url: "https://arxiv.org/pdf/1010.3756"
---

## Statement

Assume AC and the Brownian conventions of
[[def-locally-lipschitz-ito-sde-and-maximal-solution]]. Let
$\kappa,\theta,\sigma>0$, let $x_0>0$ be deterministic, and suppose
$2\kappa\theta\ge\sigma^2$. Then the CIR SDE
$$dX_t=\kappa(\theta-X_t)dt+\sigma\sqrt{X_t}\,dW_t, \qquad X_0=x_0,$$
has a unique global strong solution on every finite horizon. Its paths remain
strictly positive and finite, and for every finite $p\ge1$,
$$\sup_{0\le t\le T}\mathbb E X_t^p<\infty.$$
No negative-moment bound or strong numerical convergence rate is asserted.

## Facts & Assumptions

**Given:** AC; the local SDE definition on $U=(0,\infty)$; positive $\kappa,\theta,\sigma,x_0$ with $2\kappa\theta\ge\sigma^2$; and the Lamperti equation supplier.

[F1] For $Z=\sqrt X$, the local Lamperti equation is $dZ=(a/Z-\kappa Z/2)dt+\sigma dW/2$, where $a=(4\kappa\theta-\sigma^2)/8>0$. [[lem-cir-lamperti-transform-and-positive-root]]

[F2] Locally Lipschitz coefficients on an open domain have a unique local strong solution up to exit from compact subsets. [[thm-local-sde-existence-and-uniqueness-until-exit]]

[F3] Itô's formula gives the generator $\mathcal Lf=qf'+\tfrac12c^2f''$ for $dZ=q(Z)dt+c\,dW$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F4] A stopped finite-energy Itô integral is square-integrable, has mean zero, and satisfies the Itô isometry. [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F5] A continuous adapted process has measurable running suprema, and its first exit time from an open interval is a stopping time. [[lem-rat-embeds-dense]] [[def-continuous-time-stopping-time]]

[F6] If $u(t)\le A+\int_0^tBu(s)ds$ with nonnegative continuous $u$, then $u(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F7] For $0<\varepsilon<R$ and $g\in C^2((0,\infty))$, a smooth cutoff with support in $[\varepsilon/2,2R]\subset(0,\infty)$ and equal to $1$ on $[\varepsilon,R]$ gives a global $C^2$ extension $\widetilde g$ by setting $\widetilde g=\chi g$ on $(0,\infty)$ and $0$ elsewhere. Explicitly, use $\chi(z)=\eta((z-\varepsilon/2)/(\varepsilon/2))\eta((2R-z)/R)$, where $\rho(u)=e^{-1/u}$ for $u>0$, $\rho(u)=0$ for $u\le0$, and $\eta(u)=\rho(u)/(\rho(u)+\rho(1-u))$. On a stopped path in $[\varepsilon,R]$, $\widetilde g$ and its first two derivatives agree with those of $g$.

[A1] AC is inherited from the local Brownian and Itô interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and suppliers in the Statement and Facts.

1.1 Put $z_0=\sqrt{x_0}$ and $q(z)=a/z-\kappa z/2$ on $U=(0,\infty)$, with constant diffusion $c=\sigma/2$. The function $q$ is $C^1$, hence bounded and Lipschitz on every compact subset of $U$; $c$ is constant, and $z_0>0$ is deterministic with finite second moment. Apply [F2] directly to these coefficients and initial value to obtain the unique maximal local solution $Z$ of $dZ=q(Z)dt+c\,dW$. This construction uses the local theorem for the displayed transformed coefficients; it does not reverse [F1], which only transforms a pre-existing CIR solution. Put $$\delta=\frac{8a}{\sigma^2}=\frac{4\kappa\theta}{\sigma^2}-1.$$ The Feller inequality gives $\delta\ge1$. [F1, F2, given, algebra]

1.2 Define $$s(z)=\int_1^z u^{-\delta}\exp\!\left(\frac{2\kappa u^2}{\sigma^2}\right)du,\qquad z>0.$$ Then $s''(z)/s'(z)=-\delta/z+4\kappa z/\sigma^2$, and direct substitution gives $$\mathcal Ls(z)=s'(z)\left(\frac a z-\frac\kappa2z+\frac{\sigma^2}{8}\left(-\frac\delta z+\frac{4\kappa z}{\sigma^2}\right)\right)=0.$$ Fix $0<\varepsilon<z_0<R$, define $\tau_\varepsilon=\inf\{t<\zeta:Z_t\le\varepsilon\}$ and $\tau_R=\inf\{t<\zeta:Z_t\ge R\}$ (with $\inf\emptyset=\infty$), and set $\tau_{\varepsilon,R}=\tau_\varepsilon\wedge\tau_R\wedge T$. By [F5], these are stopping times. Extend $s$ globally by [F7] and apply [F3] to the stopped process. The stopped stochastic integrand is bounded and has finite energy, so [F4] gives $\mathbb E s(Z_{T\wedge\tau_{\varepsilon,R}})=s(z_0)$. On $A_{\varepsilon,R}=\{\tau_\varepsilon\le T,\ \tau_\varepsilon<\tau_R\}$ the stopped value is $s(\varepsilon)$; on its complement it is at most $s(R)$. Therefore $$\mathbb P(A_{\varepsilon,R})\le\frac{s(R)-s(z_0)}{s(R)-s(\varepsilon)}.$$ Since $s'(z)=z^{-\delta}\exp(2\kappa z^2/\sigma^2)$ and $\delta\ge1$, $s(\varepsilon)\to-\infty$ as $\varepsilon\downarrow0$. Thus the probability of reaching arbitrarily small positive levels before $R$ by time $T$ is zero. Taking a countable union over integers $R>z_0$ rules out hitting zero or terminating at the lower boundary before time $T$. [F3, F4, F5, F7, given, algebra]

2.1 For $V(z)=z^2$, the global Itô formula gives $$\mathcal LV(z)=2zq(z)+c^2=\kappa\theta-\kappa z^2\le\kappa\theta.$$ For $0<\varepsilon<z_0<R$, stop at $\tau_{\varepsilon,R}$ as above. The stopped stochastic integral has mean zero, so $$\mathbb E Z_{T\wedge\tau_{\varepsilon,R}}^2\le z_0^2+\kappa\theta T.$$ On the event of hitting $R$ before $\varepsilon$ by time $T$, the stopped value is $R$, hence $$R^2\mathbb P(\tau_R\le T,\ \tau_R<\tau_\varepsilon)\le z_0^2+\kappa\theta T.$$ For fixed $R$, as $\varepsilon\downarrow0$ these upper-exit events increase to $\{\tau_R\le T\}$: on every path that reaches $R$ by $T$, the positive continuous path up to its first hit has a positive minimum. Thus $\mathbb P(\tau_R\le T)\le(z_0^2+\kappa\theta T)/R^2$, and letting $R\to\infty$ rules out explosion by time $T$. A local solution cannot terminate while remaining in a compact subset of $(0,\infty)$, by [F2]. Together with step 1.2 this proves that $Z$ is global and strictly positive on $[0,T]$. [F2, F3, F4, step 1.2, given, algebra]

3.1 Set $X=Z^2$. Applying [F3] to the global $C^2$ function $z\mapsto z^2$ gives $$dX_t=(2Z_tq(Z_t)+c^2)dt+2cZ_t\,dW_t=\kappa(\theta-X_t)dt+\sigma\sqrt{X_t}\,dW_t,$$ since $2a+c^2=\kappa\theta$ and $2c=\sigma$. Thus the CIR equation has a global positive strong solution. If $\widetilde X$ is any other positive local strong CIR solution with initial value $x_0$, [F1] makes $\sqrt{\widetilde X}$ a local solution of the same $q,c$ equation; local uniqueness in [F2] makes it equal to $Z$ up to every compact exit, so $\widetilde X=X$. [F1, F2, F3, step 2.1, given, algebra]

4.1 For any $p\ge1$, let $V_p(z)=z^{2p}$ on $(0,\infty)$. For each $0<\varepsilon<z_0<R$, use [F7] to extend $V_p$ to a global $C^2$ function agreeing on $[\varepsilon,R]$, and apply [F3] to the stopped process. Its generator on the stopped path is $$\mathcal LV_p(z)=\left(2pa+\frac{p(2p-1)\sigma^2}{4}\right)z^{2p-2}-p\kappa z^{2p}\le C_p(1+z^{2p}).$$ The stopped stochastic integral has mean zero by [F4]. Gronwall [F6] gives $$\sup_{0<\varepsilon<z_0<R}\sup_{t\le T}\mathbb E V_p(Z_{t\wedge\tau_{\varepsilon,R}})\le C_{p,T}(1+z_0^{2p}).$$ Since $Z$ is global, continuous and strictly positive on $[0,T]$, these stopping times equal $T$ eventually along any sequence $\varepsilon\downarrow0$, $R\uparrow\infty$ on almost every path. Fatou's lemma then yields $\sup_{t\le T}\mathbb E Z_t^{2p}<\infty$, and $X=Z^2$ gives the claimed CIR moment bound. AC is exactly [A1]. [A1, F3, F4, F6, F7, step 2.1, step 3.1, given, algebra] ∎
