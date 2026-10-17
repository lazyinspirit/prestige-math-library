---
id: pthm-tgr-finite-stationary-response
kind: physics-theorem
title: Conditional finite stationary response
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
deps:
  - post-tgr-selected-gibbs-kms-preparation
  - thm-tgr-finite-cell-gibbs-factorization
  - thm-tgr-finite-response-redshift
  - def-countable-choice
dependency_roles:
  post-tgr-selected-gibbs-kms-preparation: physical-assumption
  thm-tgr-finite-cell-gibbs-factorization: mathematical-premise
  thm-tgr-finite-response-redshift: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Exact finite-time and spectral predictions for neutral bounded observables and controls in one actually constructed independent finite cell; no observation, infinite-time relaxation, dc transport coefficient, or response law for arbitrary interacting reduced states."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2"
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
      locator: "Complete 17-page scanned PDF; response kernel and causal convolution, printed pp. 572–575."
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.5"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
      locator: "Complete 11-page lecture note; interaction-picture response, retarded kernel, spectral representation, and detailed-balance/FDT discussion."
---

## Statement

Fix one cell $i$ of the preparation in [[post-tgr-selected-gibbs-kms-preparation]] at its assigned event $p_i\in O$, with $N_i=N_\xi(p_i)$, $T_i=T(p_i)$, and $\mu_i=\mu(p_i)$. Let $H_i=H_i^*$ be its proper Hamiltonian in joules, $Q_i$ its dimensionless number matrix, $G_i:=H_i-\mu_iQ_i$, and $\sigma:=\rho_i$ its constructed density. Put $\beta_K:=(k_BT_K)^{-1}>0$ in joules$^{-1}$ and $\beta_{\mathrm{loc},i}:=N_i\beta_K=(k_BT_i)^{-1}$. Take Hermitian matrices $A,B\in\mathcal B(\mathcal H_i)$ with $[A,Q_i]=[B,Q_i]=0$. Let $h:[0,S]\to\mathbb R$ be continuous for $S>0$ seconds, let $\epsilon\in\mathbb R$ be dimensionless, and require $h(\tau)B$ to have units of joules. Define the local and Killing-time dynamics by

$$\alpha^{\mathrm{loc}}_\tau(C)=e^{iG_i\tau/\hbar}Ce^{-iG_i\tau/\hbar},\qquad \alpha^K_t(C)=e^{iN_iG_it/\hbar}Ce^{-iN_iG_it/\hbar}.$$

Let $H_{K,i}:=N_iH_i+q\Phi_iQ_i$ be the cell's physical Killing-energy operator, where $q$ is the common charge in coulombs and $\Phi_i=\Phi_\xi(p_i)$ is in volts as in the preparation. Let $U_{\mathrm{loc}}:[0,S]\to\mathcal B(\mathcal H_i)$ and $U_K:[0,S/N_i]\to\mathcal B(\mathcal H_i)$ be the unique solutions of
$$i\hbar\,\frac{d}{d\tau}U_{\mathrm{loc}}(\tau)=\bigl(H_i-\epsilon h(\tau)B\bigr)U_{\mathrm{loc}}(\tau),\qquad U_{\mathrm{loc}}(0)=I_{\mathcal H_i},$$
$$i\hbar\,\frac{d}{dt}U_K(t)=\bigl(H_{K,i}-\epsilon N_i h(N_it)B\bigr)U_K(t),\qquad U_K(0)=I_{\mathcal H_i}.$$
They are unitary propagators. Define the model expectations by
$$E_{\mathrm{loc}}(\tau):=\operatorname{Tr}\!\left(\sigma U_{\mathrm{loc}}(\tau)^*A U_{\mathrm{loc}}(\tau)\right),\qquad E_K(t):=\operatorname{Tr}\!\left(\sigma U_K(t)^*A U_K(t)\right).$$
Because $A$ and $B$ commute with $Q_i$, the second expectation is unchanged if $H_{K,i}$ is replaced by $N_iH_i$; that is the neutral-sector version of the Killing control. The exact finite-cell predictions are

$$E_K(t)=E_{\mathrm{loc}}(N_it)\qquad(0\le t\le S/N_i),$$

and

$$E_{\mathrm{loc}}(\tau)=\operatorname{Tr}(\sigma\alpha^{\mathrm{loc}}_\tau(A))+\epsilon\int_0^\tau h(s)R_{\mathrm{loc}}(\tau-s)\,ds+r(\tau),$$

where

$$R_{\mathrm{loc}}(u)=\frac{i}{\hbar}\operatorname{Tr}\!\left(\sigma[\alpha^{\mathrm{loc}}_u(A),B]\right),\qquad C_S=\frac{2}{\hbar}\int_0^S|h(s)|\,\|B\|\,ds,\qquad |r(\tau)|\le\|A\|\frac{(|\epsilon|C_S)^2e^{|\epsilon|C_S}}2.$$

Here $C_S$ is dimensionless and $R_{\mathrm{loc}}$ has units $[A][B]/(\mathrm{J\,s})$. For the equilibrium correlations $C_{\mathrm{loc}}(u)=\operatorname{Tr}(\sigma\alpha^{\mathrm{loc}}_u(A)A)$ and $C_K(t)=\operatorname{Tr}(\sigma\alpha^K_t(A)A)$, let $S_{\mathrm{loc}}$ and $S_K$ be their Fourier measures in the distributional convention $S(\omega)=\int_{\mathbb R}e^{i\omega t}C(t)\,dt$, where $\omega$ is in seconds$^{-1}$. Set $D_{N_i}(\omega)=N_i\omega$. Then

$$S_K=(D_{N_i})_*S_{\mathrm{loc}},\qquad S_K(\omega)=N_i^{-1}S_{\mathrm{loc}}(\omega/N_i),$$

the detailed-balance factor is unchanged because $\beta_K\hbar(N_i\omega)=\beta_{\mathrm{loc},i}\hbar\omega$, and any zero-frequency atom remains at zero and is kept separate from the $\coth$ formula. Finally, for the separately re-prepared finite Gibbs family $\sigma_\lambda\propto e^{-\beta_{\mathrm{loc},i}(G_i-\lambda B)}$, where $\lambda B$ has units of joules,

$$\left.\frac{d}{d\lambda}\operatorname{Tr}(\sigma_\lambda B)\right|_{\lambda=0}=\beta_{\mathrm{loc},i}\operatorname{Cov}_{\mathrm{KM},\sigma}(B,B)\ge0,$$

with $\operatorname{Cov}_{\mathrm{KM},\sigma}(B,B)=\int_0^1\operatorname{Tr}(\sigma^{1-u}\delta B\,\sigma^u\delta B)\,du$ and $\delta B=B-\operatorname{Tr}(\sigma B)I$. It equals the ordinary variance when $[B,G_i]=0$; otherwise no such reduction is asserted. These are conditional model predictions, not reported observations or a theorem of relaxation.

## Facts & Assumptions

**Given:** One selected finite-cell state, its proper and Killing grand generators, neutral Hermitian observables, a continuous finite-duration control, and the units stated above.

[F1] [[post-tgr-selected-gibbs-kms-preparation]] assigns $p_i\in O$ to each cell and defines $N_i=N_\xi(p_i)$, $T_i=T(p_i)$, $\mu_i=\mu(p_i)$, and $\Phi_i=\Phi_\xi(p_i)$. Its finite density is $\sigma=Z_i^{-1}e^{-\beta_i(H_i-\mu_iQ_i)}$, with $\beta_K=(k_BT_K)^{-1}$ and $\beta_{\mathrm{loc},i}=N_i\beta_K$; it is conditional on $\mathrm{AC}_\omega$ and is not an empirical premise.

[F2] [[thm-tgr-finite-response-redshift]]: for a finite independent cell with that Gibbs density, neutral Hermitian $A,B$, continuous finite-time $h$, and the stated physical/grand-generator relation, the grand-generator propagators solve $i\hbar V'_{\mathrm{loc}}=(G_i-\epsilon hB)V_{\mathrm{loc}}$ and $i\hbar V'_K=(N_iG_i-\epsilon N_i h(N_it)B)V_K$, both with identity initial data. For neutral $A,B$, their trace expectations equal those under the physical controls above. This supplier proves the displayed finite-time commutator expansion and quadratic remainder, the spectral pushforward $\omega\mapsto N_i\omega$, retention of zero-frequency atoms, and the nonnegative Kubo–Mori derivative for the separately re-prepared family.

[F3] [[def-countable-choice]]: the finite-cell construction carries $\mathrm{AC}_\omega$ through its smooth charged-stationarity supplier; no stronger choice axiom is invoked.

## Proof

1.1 The postulated preparation [F1] supplies a finite-dimensional cell density $\sigma$ and $[H_i,Q_i]=0$. The Hamiltonian matrices in the two displayed control equations are continuous and Hermitian on their compact time intervals. For either equation write it as $U'(s)=K(s)U(s)$ with continuous matrix $K$ and $M:=\sup_s\|K(s)\|<\infty$. The ordered-integral series $I+\sum_{n\ge1}\int_{0\le s_n\le\cdots\le s_1\le s}K(s_1)\cdots K(s_n)\,ds_n\cdots ds_1$ converges uniformly, since its $n$th term has norm at most $(Ms)^n/n!$, and solves the integral equation by termwise integration. If $U,V$ were two solutions, their difference $D:=U-V$ would satisfy the homogeneous integral equation; iterating it bounds $\|D(s)\|$ by $\sup_s\|D(s)\|(Ms)^n/n!$ for every $n$, so $D=0$. Differentiating $U^*U$ and using Hermiticity of each controlled Hamiltonian gives $(U^*U)'=0$; the identity initial value therefore makes each solution unitary. [given, F1, construct, algebra]

2.1 Define $V(t):=e^{-iq\Phi_iQ_it/\hbar}U_{\mathrm{loc}}(N_it)$. Since $[Q_i,H_i]=[Q_i,B]=0$, differentiating and using the chain rule gives $i\hbar V'(t)=[H_{K,i}-\epsilon N_i h(N_it)B]V(t)$, with $V(0)=I_{\mathcal H_i}$. By uniqueness from step 1.1, $V=U_K$. The factor $e^{-iq\Phi_iQ_it/\hbar}$ commutes with $A$, so the trace definition gives $E_K(t)=E_{\mathrm{loc}}(N_it)$. [given, F1, step 1.1, algebra]

3.1 Retain the inherited smooth-geometry premise [F3] when using the charged-stationarity relation $N_i\mu_i+q\Phi_i=\mu_K$ supplied by the prepared-cell data [F1]. Put $\widehat U_{\mathrm{loc}}$ and $\widehat U_K$ for the propagators of the grand-generator controls stated in [F2]. The identities $H_i=G_i+\mu_iQ_i$ and $H_{K,i}=N_iG_i+\mu_KQ_i$, where $N_i\mu_i+q\Phi_i=\mu_K$, imply $U_{\mathrm{loc}}(\tau)=e^{-i\mu_iQ_i\tau/\hbar}\widehat U_{\mathrm{loc}}(\tau)$ and $U_K(t)=e^{-i\mu_KQ_it/\hbar}\widehat U_K(t)$. These relations follow by differentiating each right-hand side and using $[G_i,Q_i]=[B,Q_i]=0$. Since $[A,Q_i]=0$, the trace expectations under the physical and grand-generator propagators agree. Therefore [F2] applies to the explicitly defined expectations. [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Apply [F2] to the same fixed initial density for the finite-time response, to its spectral statement for the equilibrium correlations, and to its separately re-prepared Gibbs family for the static derivative. The first preparation remains $\sigma$ throughout the finite-time controls; $\sigma_\lambda$ is a distinct re-preparation, and none of these deductions is an observed measurement or an infinite-time limit. [given, F2, step 3.1, algebra] ∎
