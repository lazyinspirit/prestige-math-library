---
id: thm-superlinear-sde-global-existence-and-moments
kind: theorem
title: "Global existence and finite-horizon moments for one-sided Lipschitz SDEs"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-local-sde-existence-and-uniqueness-until-exit
  - lem-brownian-ito-integral-bdg-moment-bound
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-gronwall-integral-inequality
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-holder-inequality-for-integrals
  - thm-fatou-lemma
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, §1"
      url: "https://arxiv.org/pdf/1010.3756"
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, §3"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Assume AC. Let $d,m\ge1$ be finite, $T>0$, and let $W$ and $\xi$ satisfy
the filtered Brownian hypotheses in
[[def-locally-lipschitz-ito-sde-and-maximal-solution]] with $U=\mathbb R^d$.
Consider the autonomous SDE
$$dX_t=b(X_t)\,dt+\sigma(X_t)\,dW_t,\qquad X_0=\xi,$$
where $b\in C^1(\mathbb R^d;\mathbb R^d)$, $\sigma:\mathbb R^d\to
\mathbb R^{d\times m}$ is globally Lipschitz, and for constants $L,C<\infty$
and an integer $q\ge1$,
$$\langle x-y,b(x)-b(y)\rangle\le L|x-y|^2, \qquad \|Db(x)\|\le C(1+|x|^q).$$
Suppose $\mathbb E|\xi|^p<\infty$ for every finite $p\ge1$. Then the
maximal local strong solution is global on $[0,T]$, is unique up to
indistinguishability, and for every finite $p\ge1$,
$$\mathbb E\sup_{0\le t\le T}|X_t|^p<\infty.$$
The bound may depend on $p,T$, the coefficient constants, and the initial
moments. No global Lipschitz condition on the drift is assumed.

## Facts & Assumptions

**Given:** AC; the locally Lipschitz SDE data, one-sided Lipschitz drift, polynomial derivative bound, globally Lipschitz diffusion, and all finite initial moments in the Statement.

[F1] The stopped local strong solution exists uniquely up to exit from compact subsets of the open state domain; if its lifetime is finite, the exhaustion $K_n$ records exit from every compact subset. [[thm-local-sde-existence-and-uniqueness-until-exit]]

[F2] For $V\in C^{1,2}$ and a continuous Brownian Itô process, Itô's formula has drift $\partial_tV+\nabla V\cdot b+\tfrac12(\sigma\sigma^{\mathsf T}):D^2V$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]

[F3] For a predictable matrix integrand $G$ and $p\ge2$, $\mathbb E\sup_{t\le T}|\int_0^tG_s\,dW_s|^p\le C_{p,d}\mathbb E(\int_0^T\|G_s\|_F^2ds)^{p/2}$. [[lem-brownian-ito-integral-bdg-moment-bound]]

[F4] A finite-energy Itô integral has mean zero and its second moment equals the expected coefficient energy. [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F5] Euclidean Cauchy--Schwarz gives $|\langle x,y\rangle|\le|x||y|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F6] Hölder's integral inequality gives $\left(\int_0^T f(s)ds\right)^p\le T^{p-1}\int_0^T f(s)^pds$ for nonnegative measurable $f$ and $p\ge1$. [[thm-holder-inequality-for-integrals]]

[F7] Fatou's lemma passes uniform stopped nonnegative moment bounds to an almost sure limit. [[thm-fatou-lemma]]

[F8] If $u(t)\le A+\int_0^tBu(s)ds$ with nonnegative continuous $u$ and constants $A,B\ge0$, then $u(t)\le Ae^{Bt}$. [[thm-gronwall-integral-inequality]]

[F9] Dominated convergence gives continuity of $u_R(t)=\mathbb EV_p(X_{t\wedge\tau_R})$: the stopped paths are continuous and $V_p(X_{t\wedge\tau_R})\le V_p(\xi)+(1+R^2)^{p/2}$. [[thm-dominated-convergence]]

[F10] Tonelli's theorem interchanges expectation and time integration for the nonnegative measurable function $V_p(X_{s\wedge\tau_R})$. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] AC is inherited through the local Brownian and Itô interfaces; no choice is used to stop, localize, or pass to limits. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions and suppliers in the Statement and Facts.

1.1 For $p\ge2$ define $V_p(x)=(1+|x|^2)^{p/2}$. Direct differentiation gives $\nabla V_p=p(1+|x|^2)^{p/2-1}x$ and $$D^2V_p=p(1+|x|^2)^{p/2-1}I +p(p-2)(1+|x|^2)^{p/2-2}xx^{\mathsf T}.$$ Thus $\|D^2V_p(x)\|\le C_p(1+|x|^2)^{p/2-1}$. The one-sided Lipschitz condition with $y=0$ and [F5] imply $\langle x,b(x)\rangle\le L|x|^2+|b(0)||x|\le C_0(1+|x|^2)$. Global Lipschitz continuity gives $\|\sigma(x)\|_F^2\le C_1(1+|x|^2)$. Substitution into the generator formula [F2] yields $$\nabla V_p(x)\cdot b(x)+\tfrac12(\sigma\sigma^{\mathsf T}):D^2V_p(x) \le C_p V_p(x).$$ [F2, F5, given, algebra]

2.1 For integer $R\ge1$, stop the maximal solution at its first exit $\tau_R$ from $\{|x|<R\}$, or at its lifetime if earlier; for $U=\mathbb R^d$ these are the compact-exhaustion stops. If $|\xi|\ge R$, then $\tau_R=0$ and the stopped integrands vanish. Otherwise all active states lie in $\overline B_R$, so the coefficients, derivatives of $V_p$, and Itô integrand are bounded and the stochastic integral in [F2] has mean zero by the Itô isometry. The integrable bound in [F9] makes $u_R(t)=\mathbb E V_p(X_{t\wedge\tau_R})$ continuous, as required by [F8]. Taking expectations in Itô's formula, using step 1.1 and Tonelli [F10], gives $$u_R(t)\le\mathbb E V_p(\xi)+C_p\int_0^t u_R(s)\,ds.$$ Applying [F8] gives $\sup_{R}\sup_{t\le T}\mathbb E V_p(X_{t\wedge\tau_R}) \le\mathbb E V_p(\xi)e^{C_pT}<\infty$. [F2, F4, F8, F9, F10, step 1.1, given]

3.1 Set $E_R=\{\sup_{t\le T}|X_{t\wedge\tau_R}|\ge R\}$. On $E_R$, either $|\xi|\ge R$ and $\tau_R=0$, or the continuous path reaches radius $R$ and is stopped there; hence $|X_{T\wedge\tau_R}|\ge R$. Step 2.1 therefore gives $$R^p\,\mathbb P(E_R)\le\mathbb E V_p(X_{T\wedge\tau_R})\le\mathbb E V_p(\xi)e^{C_pT}.$$ If a maximal path fails to extend as a solution through $T$, it must reach every radius by $T$: otherwise it agrees with a globally defined truncation whose cutoff is one on a larger ball containing that path, giving an extension by local uniqueness. Thus the failure event is contained in every $E_R$ and has probability zero as $R\to\infty$. The solution extends globally through $T$, and Fatou's lemma [F7] applied at each time to the stopped bounds gives $\sup_{t\le T}\mathbb E V_p(X_t)<\infty$. [F1, F7, step 2.1, given]

4.1 The derivative bound and the fundamental theorem of calculus on the segment from $0$ to $x$ give $|b(x)|\le C_2(1+|x|^{q+1})$; global Lipschitz continuity gives $\|\sigma(x)\|_F\le C_3(1+|x|)$. For each $p\ge2$, applying step 3.1 at moments $p(q+1)$ and $p$ therefore implies $$\mathbb E\left(\int_0^T|b(X_s)|ds\right)^p<\infty, \qquad \mathbb E\left(\int_0^T\|\sigma(X_s)\|_F^2ds\right)^{p/2}<\infty,$$ by Hölder's integral inequality [F6]. The integral equation gives $$\sup_{t\le T}|X_t|^p\le 3^{p-1}\left(|\xi|^p+ \left(\int_0^T|b(X_s)|ds\right)^p+ \sup_{t\le T}\left|\int_0^t\sigma(X_s)dW_s\right|^p\right).$$ The first two expectations are finite by the hypothesis and the preceding bound; [F3] bounds the last by the diffusion-energy moment already shown finite. For $1\le p<2$, Hölder's inequality [F6] on the probability space gives $\mathbb E\sup_{t\le T}|X_t|^p\le (\mathbb E\sup_{t\le T}|X_t|^2)^{p/2}$. Uniqueness is the local uniqueness in [F1], and AC is exactly [A1]. [A1, F1, F3, F6, F7, step 3.1, given, algebra] ∎
