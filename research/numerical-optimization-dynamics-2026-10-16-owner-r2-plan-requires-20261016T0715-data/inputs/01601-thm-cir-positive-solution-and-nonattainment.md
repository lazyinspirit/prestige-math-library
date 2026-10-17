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
  - def-standard-normal-and-normal-laws
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

[F7] Brownian increments over disjoint deterministic intervals are independent, and a nondegenerate normal law assigns positive probability to every nonempty open interval. [[def-d-dimensional-brownian-motion]] [[def-standard-normal-and-normal-laws]]

[A1] AC is inherited from the local Brownian and Itô interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and suppliers in the Statement and Facts.

1.1 By [F1]–[F2], the transformed equation has a unique local strong solution on $(0,\infty)$, with drift $q(z)=a/z-\kappa z/2$ and constant diffusion $c=\sigma/2$. Apply the local theorem on successive finite horizons; its uniqueness makes the solutions agree on overlaps, so they define one maximal local path up to its lifetime. Put $$\delta=\frac{8a}{\sigma^2}=\frac{4\kappa\theta}{\sigma^2}-1.$$ The Feller inequality gives $\delta\ge1$. [F1, F2, given, algebra]

1.2 Define a scale function on $(0,\infty)$ by $$s(z)=\int_1^z u^{-\delta}\exp\!\left(\frac{2\kappa u^2}{\sigma^2}\right)du.$$ Its derivative satisfies $s''(z)/s'(z)=-\delta/z+4\kappa z/\sigma^2$. Substituting in [F3] gives $$\mathcal Ls(z)=s'(z)\left(\frac a z-\frac\kappa2z +\frac{\sigma^2}{8}\left(-\frac\delta z+ \frac{4\kappa z}{\sigma^2}\right)\right)=0.$$ For fixed $0<\varepsilon<z_0<R$, the drift is bounded on $[\varepsilon,R]$. Choose a time length $r>0$ and a Brownian increment threshold $B_*>0$ so that $cB_*-\|q\|_{[\varepsilon,R]}r>R-\varepsilon$. If the path stays in this interval during a length-$r$ block, an increment $W_{t+r}-W_t>B_*$ would force its endpoint displacement to exceed the interval width, because the drift can oppose that increment by at most $\|q\|_{[\varepsilon,R]}r$. This is impossible. By [F7], this increment event has a fixed positive probability independent of the past. Repeating over deterministic blocks bounds the probability of remaining in $[\varepsilon,R]$ for $k$ blocks by $(1-p_*)^k$. Thus the exit time $\tau_{\varepsilon,R}$ is finite almost surely. [F3, F5, F7, given, construct]

2.1 Stop at $\tau_{\varepsilon,R}$. The process $s(Z_{t\wedge\tau})$ is bounded, and its stochastic integrand $c s'(Z)$ is bounded on $[\varepsilon,R]$. Itô's formula [F3], $\mathcal Ls=0$ from step 1.2, and [F4] therefore give $\mathbb E s(Z_{t\wedge\tau})=s(z_0)$. Dominated convergence as $t\to\infty$ gives $$\mathbb P_{z_0}(\tau_\varepsilon<\tau_R) =\frac{s(R)-s(z_0)}{s(R)-s(\varepsilon)}.$$ Near zero, $s'(z)=z^{-\delta}\exp(2\kappa z^2/\sigma^2)$ and $\delta\ge1$, so $s(\varepsilon)\to-\infty$ as $\varepsilon\downarrow0$. The displayed probability tends to zero; hence zero cannot be hit before any fixed upper level. Taking a countable union over integer upper levels shows that the local solution does not hit zero before its lifetime. [F3, F4, step 1.2, given, algebra]

3.1 For $V(z)=z^2$, [F3] gives $$\mathcal LV(z)=2zq(z)+c^2=\kappa\theta-\kappa z^2 \le\kappa\theta.$$ Localize first at both $\varepsilon$ and $R$. The stopped Itô integral has mean zero by [F4], so $\mathbb E Z_{T\wedge\tau_{\varepsilon,R}}^2\le z_0^2+\kappa\theta T$. On the event of hitting $R$ before $\varepsilon$ by time $T$ the stopped value is $R$, giving $$R^2\mathbb P(\tau_R\le T,\ \tau_R<\tau_\varepsilon) \le z_0^2+\kappa\theta T.$$ Let $\varepsilon\downarrow0$ and use step 2.1, then let $R\to\infty$. This rules out explosion on $[0,T]$. Together with nonattainment of zero, the local solution stays in $(0,\infty)$ for the entire finite horizon. [F3, F4, step 2.1, given, algebra]

4.1 For any $p\ge1$, apply [F3] to $V_p(z)=z^{2p}$ stopped on $[\varepsilon,R]$. Its generator is $$\mathcal LV_p(z)= \left(2pa+\frac{p(2p-1)\sigma^2}{4}\right)z^{2p-2} -p\kappa z^{2p} \le C_p(1+z^{2p}).$$ The stopped stochastic integral has mean zero by [F4]. Gronwall [F6] gives $\sup_{\varepsilon,R}\sup_{t\le T}\mathbb E V_p(Z_{t\wedge\tau_{\varepsilon,R}})\le C_{p,T}(1+z_0^{2p})$. Steps 2.1–2.2 show the stopping times exhaust $[0,T]$ almost surely as $\varepsilon\downarrow0$ and $R\to\infty$; Fatou's lemma gives $\sup_{t\le T}\mathbb E Z_t^{2p}<\infty$. The process $X=Z^2$ solves the original CIR equation by Itô's formula, and uniqueness follows from local uniqueness before the exits. AC is exactly [A1]. [A1, F1, F3, F4, F6, step 2.1, step 3.1, given, algebra] ∎
