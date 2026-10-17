---
id: pthm-emg-weak-slow-test-motion
kind: physics-theorem
title: Finite-time weak/slow charged probe correspondence
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - post-emg-background-maxwell-test
  - thm-emg-weak-slow-test-lorentz-limit
  - lem-emg-local-potential-construction
  - pthm-rpm-external-charge-action-equivalence
dependency_roles:
  post-emg-background-maxwell-test: physical-assumption
  thm-emg-weak-slow-test-lorentz-limit: mathematical-premise
  lem-emg-local-potential-construction: mathematical-premise
  pthm-rpm-external-charge-action-equivalence: physical-result
physical_scope: "Finite-time comparison for a massive charged test probe on a stationary weak metric with the exact C2 remainder bounds and prescribed electric/magnetic scalings of the mathematical supplier, with a smooth closed background two-form and the adopted action on short local-potential curve segments. It requires alpha nonzero, a sufficiently small parameter cutoff fixed by the uniform bounds, uniformly small speed, existing trajectories, common compact containment and finite scaled duration. It imposes neither the inhomogeneous Maxwell equation nor Einstein equations and constructs no fully coupled background family."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, complete 125-page notes, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.9)–(6.10), PDF pp. 61–63, give the curved-background Lorentz equation; equations (6.12)–(6.14), PDF pp. 63–64, give the leading null-ray calculation. The finite weak/slow trajectory bound follows from the exact mathematical supplier, not from this source's leading-order discussion."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "§4.1, equations (4.8)–(4.21), PDF pp. 112–114, derives the static weak-field slow-motion geodesic term from the metric. The charged force and its uniform error estimate are supplied by the exact items, not inferred from Carroll's neutral-particle limit."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), complete 162-page review"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "§18.1, equations (18.3)–(18.10), PDF pp. 96–98, gives the curved test-particle Lorentz equation and warns that the particle's own point-charge field is singular. The present result assumes only a separately prescribed smooth external field."
verification:
  precheck: pass
---

## Statement

Use the charged-probe action sector of the fixed-background model of [[post-emg-background-maxwell-test]] and let $\alpha=q/m\ne0$, with constant $m>0$, constant charge $q$, length scale $L>0$, and speed constant $c>0$. When the Lorentz-force form is obtained from the adopted action, the inherited $\mathrm{AC}_\omega$ hypothesis of that exact action-equivalence theorem is assumed; no stronger choice axiom is used. In SI, $[\alpha]=\mathrm{C\,kg^{-1}}$, $[L]=\mathrm m$, and $[c]=\mathrm{m\,s^{-1}}$; $\epsilon$, $X$, $\phi$, $\mathbf e$, and $\mathbf b$ are dimensionless. Choose a cutoff $0<\epsilon_*\le1$ sufficiently small in terms of the displayed uniform bounds below, as required by [[thm-emg-weak-slow-test-lorentz-limit]], and fix $0<\epsilon\le\epsilon_*$. On an open $\Omega\subseteq\mathbb R^3$, let $\mathcal K\Subset\Omega$ be compact and convex, use length coordinates $x^0=ct$, $x^i=LX^i$, and suppose the prescribed metric is smooth, stationary and Lorentzian on a neighborhood of $\mathbb R_{x^0}\times L\mathcal K$, with $\partial_0$ future timelike. For a smooth dimensionless $\phi$ and some fixed finite $C_g$, assume for every spatial multi-index $\beta$ with $|\beta|\le2$ that

$$|\partial_X^\beta r_{00}^{(\epsilon)}|+\max_{i,j}|\partial_X^\beta r_{ij}^{(\epsilon)}|\le C_g\epsilon^2,\qquad \max_i|\partial_X^\beta r_{0i}^{(\epsilon)}|\le C_g\epsilon^{3/2},$$

where $g_{00}^{(\epsilon)}=-(1+2\epsilon\phi)+r_{00}^{(\epsilon)}$, $g_{ij}^{(\epsilon)}=(1-2\epsilon\phi)\delta_{ij}+r_{ij}^{(\epsilon)}$, and $g_{0i}^{(\epsilon)}=r_{0i}^{(\epsilon)}$. Prescribe smooth stationary dimensionless fields $\mathbf e,\mathbf b$ with values and first derivatives bounded on $\mathcal K$, and a smooth real closed two-form $F^{(\epsilon)}$ on the same background neighborhood, with $dF^{(\epsilon)}=0$ and SI components $F_{0i}^{(\epsilon)}=-E_i^{(\epsilon)}/c$, $F_{ij}^{(\epsilon)}=\epsilon_{ijk}B_k^{(\epsilon)}$ and

$$\alpha\mathbf E^{(\epsilon)}=\frac{\epsilon c^2}{L}\mathbf e,\qquad \alpha\mathbf B^{(\epsilon)}=\frac{\sqrt\epsilon c}{L}\mathbf b.$$

Closure $dF^{(\epsilon)}=0$ ensures local potentials, not a global potential: in each sufficiently small open coordinate ball $D$ about a curve point, use the smooth radial primitive of [[lem-emg-local-potential-construction]] as the supplied $A_D$ with $dA_D=F^{(\epsilon)}|_D$. Adopt fixed-endpoint action stationarity only on sufficiently short finite curve segments contained in such a ball, as in [[post-emg-background-maxwell-test]] and [[pthm-rpm-external-charge-action-equivalence]]. There is no assumption that the whole trajectory lies in a single potential domain, that $F^{(\epsilon)}$ is globally exact, or that the local potentials are stationary. No inhomogeneous Maxwell or Einstein equation is imposed on this prescribed background. The dimensionless comparison trajectory satisfies $\mathbf X_N'=\mathbf W_N$, $\mathbf W_N'=-\nabla_X\phi(\mathbf X_N)+\mathbf e(\mathbf X_N)+\mathbf W_N\times\mathbf b(\mathbf X_N)$ on $[0,S_*]$, where primes denote $S$ derivatives, $S_*>0$, and $S=\sqrt\epsilon ct/L$. Write $\| (\mathbf X,\mathbf W)\|_1$ for the sum of the absolute values of the six components and $\|Df\|_{1\to1}$ for its induced operator norm, as in [[thm-emg-weak-slow-test-lorentz-limit]]. Let the six-component comparison vector field $f$ have derivative norm at most $L_f<\infty$ on a compact convex state set containing both trajectories.

Suppose a $C^2$ future-directed proper-time worldline exists through this finite interval, obeys this local action model (equivalently the external Lorentz law on each such segment), has coordinate speed $|\mathbf w|\le C_v\sqrt\epsilon c$, remains in that common state set, and has the same initial scaled data as the comparison trajectory. Set $\mathbf X_\epsilon=\mathbf x/L$ and $\mathbf W_\epsilon=\mathbf w/(\sqrt\epsilon c)$. Then for some finite $C_r$ depending only on the displayed uniform bounds, the exact scaled motion obeys

$$\mathbf X_\epsilon'=\mathbf W_\epsilon,\qquad \mathbf W_\epsilon'=-\nabla_X\phi(\mathbf X_\epsilon)+\mathbf e(\mathbf X_\epsilon)+\mathbf W_\epsilon\times\mathbf b(\mathbf X_\epsilon)+\mathbf r_\epsilon(S),\qquad \|\mathbf r_\epsilon(S)\|_1\le C_r\epsilon,$$

and consequently

$$\sup_{0\le S\le S_*}\bigl(\|\mathbf X_\epsilon-\mathbf X_N\|_1+\|\mathbf W_\epsilon-\mathbf W_N\|_1\bigr)\le C_r\epsilon S_*e^{L_fS_*}.$$

This is a finite-duration conditional model prediction. It does not construct the trajectories, prove common compact containment, solve Maxwell's equations for the prescribed field, or establish a coupled Einstein–Maxwell family. The magnetic scaling may violate a coupled stress hierarchy unless additional matter scales are supplied.

## Facts & Assumptions

**Given:** The fixed prescribed metric and field model of [[post-emg-background-maxwell-test]], the uniform metric and field bounds above, the sufficiently small cutoff required by [F2], $\alpha\ne0$, a proper-time Lorentz-force curve satisfying the speed bound, and both trajectories' existence, compact containment and matched initial data on $[0,S_*]$. The smooth background two-form is closed, so smooth potentials are supplied by the radial formula on short coordinate-ball segments; no global potential is assumed. When the Lorentz-force form is obtained from the adopted action, assume the exact inherited $\mathrm{AC}_\omega$ hypothesis of that action-equivalence result; no stronger choice axiom is used.

[F1] [[post-emg-background-maxwell-test]]: the background metric and external Maxwell field are prescribed independently; the massive probe is governed on each finite local-potential segment by the adopted action and, under its exact equivalence theorem hypotheses including its stated $\mathrm{AC}_\omega$ assumption, by $\nabla_UU=\alpha F^\sharp(U)$. This is countable choice only, not arbitrary-index choice. No inhomogeneous Maxwell or Einstein equation for this background is assumed; the closure needed for local potentials is explicit.

[F2] [[thm-emg-weak-slow-test-lorentz-limit]]: under the exact $C^2$ metric-remainder bounds, field scaling, $\alpha\ne0$, speed bound, Lipschitz bound, and existing common-contained trajectories with matched initial data stated there, the exact coordinate equation has an $O(\epsilon^2c^2/L)$ acceleration remainder and yields the displayed $C_r\epsilon S_*e^{L_fS_*}$ finite-time error bound after $\epsilon_*$ is chosen sufficiently small in terms of its uniform bounds. Its theorem is mathematical and conditional; it does not assert a physical Maxwell/Einstein solution.

[F3] [[lem-emg-local-potential-construction]]: on an open coordinate domain $D\subset\mathbb R^4$ star-shaped about $p$, every smooth real closed two-form $F$ has the smooth primitive $A_b(x)=\int_0^1t(x-p)^aF_{ab}(p+t(x-p))\,dt$, with $dA=F$. This is a local formula and does not require global exactness.

[F4] [[pthm-rpm-external-charge-action-equivalence]]: under $\mathrm{AC}_\omega$, on a finite $C^2$ future-timelike proper-time segment contained in a supplied $C^2$ local potential domain with $F=dA$, stationarity of the adopted fixed-endpoint external charged action is equivalent to $m\nabla_UU=qF^\sharp(U)$. It asserts no global potential or trajectory existence.

[A1] All uniform bounds, proper-time curve hypotheses, and finite-interval existence and containment conditions in the Statement are assumptions. They are not consequences of the test-field postulate.

## Proof

1.1 At each interior point of the proper-time curve, choose a sufficiently small coordinate ball $D$ in the open prescribed-background region, centered at $p$. The form $F^{(\epsilon)}$ is smooth and closed there, so the explicit radial formula [F3] supplies a smooth real $A_D$ with $dA_D=F^{(\epsilon)}|_D$. Continuity of the curve places a sufficiently short finite segment about that point in $D$. Its fixed-endpoint local action variations have the regularity and supplied-potential hypotheses of [F4]; the adopted stationarity in [F1] and the stated $\mathrm{AC}_\omega$ assumption therefore give the Lorentz law at that point. Applying this pointwise proves the force equation along the curve; continuity gives it at its finite interval endpoints. On overlapping potential balls the same equation depends only on $dA_D=F^{(\epsilon)}$, so no global action or potential gluing is used, and no extra choice principle is introduced. No bound or stationarity assumption on the potentials enters the comparison estimate. The metric expansion, stationary prescribed field, SI components, nonzero $\alpha$, speed bound, compact-state derivative bound, and existence/containment assumptions in [A1] match the hypotheses of [F2] exactly; in particular the field is not assumed to satisfy Maxwell or Einstein equations. [given, F1, F2, F3, F4, A1, algebra]

2.1 Applying the complete conditional mathematical result [F2] to these inputs gives the scaled coordinate equation with $\|\mathbf r_\epsilon\|_1\le C_r\epsilon$ and, because the initial data match and both curves remain in the common compact set, the stated finite-time comparison bound. Those conclusions inherit all the existence, containment and prescribed-background qualifications in [A1]; no infinite-duration or coupled-solution claim follows. [F2, A1, step 1.1] ∎
