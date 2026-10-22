---
id: thm-ip-frozen-newton-rate-under-range-invariance
kind: theorem
title: Frozen Newton rates under differential range invariance
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-differential-range-invariance
  - def-ip-relaxed-range-invariance-objective
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
  - lem-ip-index-function-young-conjugate-bound
  - lem-ip-frozen-newton-one-step-error-recursion
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility
  - lem-ip-logarithmic-index-conjugate-and-parameter-rates
  - lem-ip-geometric-logarithmic-frozen-stopping-schedule
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Theorem 7, equations (2.31)–(2.41)"
      url: "https://arxiv.org/pdf/2403.18704"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Theorem 2.20"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 10.7"
      url: "https://arxiv.org/pdf/2001.00617v2"
---

## Statement

Assume the structural hypotheses of the frozen Newton one-step error lemma hold with fixed constants and notation. Let the initial pair be $(\widehat r_0,x_0)\in\widetilde U\times U$, where $x_0$ is the basepoint from the range-invariance factorization. At step $n\ge1$, freeze the objective at the previous iterate $x_{n-1}$, use parameters $\alpha_n$ and $\beta_n=c_{\beta\alpha}\alpha_n$, and let $(\widehat r_n,x_n)$ satisfy the resulting approximate-minimum inequality. Let $E_n$ and $S_n$ be the error and residual quantities from the one-step lemma for this step, with its input iterate relabeled $x_{n-1}$ and output iterate relabeled $x_n$. Define $E_0:=\frac{c_{\beta\alpha}}{C_\psi}\bigl(\lambda\|\widehat r_0-r(x^\dagger)\|_Z^p+t\|r(x_0)-r(x^\dagger)\|_Z^p\bigr)$. The parameter sequence $(\alpha_n)_{n\ge1}$ and the associated $h_n,\rho_n$ are fixed independently of $\delta$. Write

$$H(q):=\sup_{s\ge0}(\psi(s)-qs),\quad h_n:=H\!\left(\frac{1}{2\overline C\alpha_n}\right),\quad \rho_n:=\alpha_n h_n,\quad q:=\frac{v}{t},$$

where $t,v,\overline C$ are as in that lemma. Let $\alpha_n>0$ decrease strictly to zero, suppose $h_n$ is finite and positive, $\rho_n$ decreases strictly to zero, and assume for some $C_H\ge1$ that

$$h_n\le C_Hh_{n+1}\quad(n\ge1),\qquad qC_H<1.$$

Assume each step through $N$ satisfies the one-step lemma, has tolerance $\eta_n\le C_\eta\rho_n$, and the initial error $E_0$ is finite. Assume also that for every sufficiently small $\delta>0$ there is an index $N=N(\delta)\ge2$ such that

$$\rho_N\ge\tau\delta^p,\qquad \rho_N\le M\tau\delta^p,\qquad \rho_n\ge\tau\delta^p\quad(1\le n\le N),$$

for constants $\tau,M>0$ independent of $\delta$. This bounded crossing condition is satisfied, for example, if $N$ is the last index with $\rho_N\ge\tau\delta^p$ and $\rho_n/\rho_{n+1}\le M$ for all $n$.

Then the stopping iterate $(\widehat r_N,x_N)$ satisfies

$$E_N=O(h_N),\qquad S_N=O(\delta^p),$$

and therefore

$$\|\widehat r_N-r(x^\dagger)\|_Z^p+\|r(x_N)-r(x^\dagger)\|_Z^p=O(h_N),$$

$$\|K(\widehat r_N-r(x^\dagger))\|_Y=O(\delta),\qquad \|Px_N\|_X=O(\delta),\qquad \|K\widehat r_N+F(x_0)-y^\delta\|_Y=O(\delta).$$

If $\Phi(a):=aH(1/(2\overline C a))$ has a strictly increasing inverse $\phi$ on the relevant range, then

$$h_N\le H\!\left(\frac{1}{2\overline C\,\phi(M\tau\delta^p)}\right),$$

which gives the corresponding source-index rate for the range-variable and nonlinear-range errors.

For the following three-dimensional EIT specialization, assume the Axiom of Choice, Countable Choice and Dependent Choice. Let $\Omega=B_1\subset\mathbb R^3$, let the known conductivity be $1$ outside $B_\rho\Subset B_1$, impose fixed positive upper and lower conductivity bounds, use the exact intrinsic quadratic $H^{s_1}(\Omega)$ penalty with $s_1\in(5/2,7/2)$, and assume $\sigma^\dagger\in B^{s_2}_{2,\infty}(\Omega)$ for $s_2\in(s_1,2s_1-1)$. Use the centered mean-zero Neumann voltage map in $Y=\ell^2(L^2(S^2))$ and the explicit observation augmentation, admitted neighborhood $U$, penalty $R_P$, and linked-parameter constants in the EIT compatibility lemma. Choose the initial conductivity sufficiently close to the truth that its radius condition $LR<c_{\rm tcr}<1/\sqrt{20}$ holds, and choose a fixed initial range variable in $r(U)$, independently of noise. Put

$$\nu=\frac{(s_2-s_1)(2s_1-3)}{s_2-1},\qquad L_\delta=\log(1/\delta).$$

Take a fixed geometric parameter sequence, starting sufficiently far down its tail that the conjugate growth condition above holds, set $\beta_n=c_{\beta\alpha}\alpha_n$, and use admitted approximate steps with $\eta_n\le C_\eta\rho_n$. For a positive target $w_\delta$, stop at the last index $N$ with $\rho_N\ge\tau w_\delta$. If the actual squared data noise is $O(w_\delta)$, then

$$\|\sigma_N-\sigma^\dagger\|_{H^{s_1}(\Omega)}=O(L_\delta^{-\nu/2}),\qquad \|z_N\|_Y=O(\sqrt{w_\delta}),\qquad \|K\widehat r_N+F(x_0)-y^\delta\|_Y=O(\sqrt{w_\delta})$$

in each of the following regimes: $w_\delta=\delta^2$ for the balanced choice $\alpha_N\asymp\delta^2L_\delta^\nu$ and ordinary noise bounded by $\delta$; $w_\delta=\delta^kL_\delta^{-\nu}$ for every $0<k<2$, giving $\alpha_N\asymp\delta^k$ under the same ordinary noise bound; and $w_\delta=\delta^2L_\delta^{-\nu}$ for the nominal endpoint $\alpha_N\asymp\delta^2$, under the explicit stronger actual-noise condition $\|y^\delta-y\|_Y^2=O(\delta^2L_\delta^{-\nu})$. All tolerances remain bounded by $C_\eta\rho_n$ through the stopping index. Thus the total conductivity and artificial-voltage norm error has logarithmic exponent $\nu/2$ in every stated regime.

## Statement references

[[lem-ip-frozen-newton-one-step-error-recursion|Frozen-step error and residual inequality]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Theorem 7 and equations (2.31)–(2.41)](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Christian Clason, *Regularization of Inverse Problems*, Theorem 10.7](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility]]

[[lem-ip-logarithmic-index-conjugate-and-parameter-rates]]

[[lem-ip-geometric-logarithmic-frozen-stopping-schedule]]

## Facts & Assumptions

**Given:** For the generic assertion, every $n\le N$ satisfies the stated one-step and stopping hypotheses. For the EIT regimes, use their own stated actual-noise upper bound in those same hypotheses, with fixed structural constants and a fixed parameter sequence.

[A1] $\rho_n=\alpha_nh_n\ge\tau\delta^p$ for $1\le n\le N$ and $\rho_N\le M\tau\delta^p$.

[A2] The tolerances satisfy $\eta_n\le C_\eta\alpha_nh_n$.

[A3] $h_n\le C_Hh_{n+1}$ and $qC_H<1$.

[A4] $E_0<\infty$ is independent of $\delta$.

[F1] [[lem-ip-frozen-newton-one-step-error-recursion]]: $E_n\le d_n/\alpha_n+H(1/(\overline C\alpha_n))$ and $S_n\le2(d_n+\alpha_nh_n)$, where $d_n=(c_{\beta\alpha}/C_\psi)\alpha_nv\|r(x_{n-1})-r(x^\dagger)\|^p+(2\delta^p+\eta_n)/C_\psi$.

[A5] The EIT clauses use the Axiom of Choice, Countable Choice and Dependent Choice at their actual elliptic, trace, Fourier and Hilbert suppliers only.

[F2] [[lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility]] verifies the full EIT frozen structural hypotheses with $p=2$, $C_\psi=1$, $\overline C=4$, the exact intrinsic Sobolev quadratic penalty, $q<1$ and source exponent $\nu$.

[F3] [[lem-ip-logarithmic-index-conjugate-and-parameter-rates]] gives the logarithmic conjugate asymptotic.

[F4] [[lem-ip-geometric-logarithmic-frozen-stopping-schedule]] verifies the fixed geometric schedule, growth, bounded crossing and parameter-index asymptotics.

## Proof

1.1 Since $S_n\ge0$ and $H$ is nonincreasing in its positive argument, [F1] and the definitions of $h_n$ and $\overline C$ give $E_n\le d_n/\alpha_n+h_n$. The first term in $d_n/\alpha_n$ that contains the previous nonlinear-range error is at most $qE_{n-1}$, because $E_{n-1}$ contains $(c_{\beta\alpha}/C_\psi)t\|r(x_{n-1})-r(x^\dagger)\|^p$ and $q=v/t$. Also, $\delta^p/\alpha_n\le h_n/\tau$ follows from [A1], and $\eta_n/\alpha_n\le C_\eta h_n$ follows from [A2]. Therefore $E_n\le qE_{n-1}+\widehat C h_n$, where $\widehat C=2/(\tau C_\psi)+C_\eta/C_\psi+1$. [A1, A2, F1, given, algebra]

1.2 Use [F2] for the EIT clauses. Its exact convex regularizer agrees with the physical quadratic penalty on all admitted coefficients, and its local neighborhood verifies every Taylor, compatibility and projection requirement of [F1]. Since $q<1$, [F4] supplies a fixed tail of any geometric sequence and a constant $C_H>1$ with $qC_H<1$. The initial pair is fixed and lies in the bounded admitted set, so $E_0$ is finite and independent of noise. [A5, F1, F2, F4, given, algebra]

2.1 Iterating the recurrence from step 1.1 gives $E_N\le q^NE_0+\widehat C\sum_{j=1}^{N}q^{N-j}h_j$. For $1\le j\le N$, repeated use of [A3] yields $h_j\le C_H^{N-j}h_N$, so the sum is at most $h_N\sum_{k=0}^{N-1}(qC_H)^k\le h_N/(1-qC_H)$. Also $h_1\le C_H^{N-1}h_N$, so $q^NE_0\le(E_0/h_1)C_H^{-1}(qC_H)^Nh_N=O(h_N)$, with constant independent of $\delta$. The same estimate holds with $N$ replaced by any $k\le N$, so $E_k=O(h_k)$ throughout the stopped segment. Thus $E_N=O(h_N)$. [A3, A4, step 1.1, algebra]

3.1 The definition of $d_N$, the inequality $(c_{\beta\alpha}/C_\psi)v\|r(x_{N-1})-r(x^\dagger)\|^p\le qE_{N-1}$, and step 2.1 with $k=N-1$ show that $d_N=O(\alpha_Nh_{N-1}+\delta^p+\eta_N)$. By [A3], $h_{N-1}\le C_Hh_N$; by [A1]–[A2], $\alpha_Nh_N=\rho_N\le M\tau\delta^p$ and $\eta_N\le C_\eta\rho_N=O(\delta^p)$. Therefore $d_N=O(\delta^p)$, and the residual estimate in [F1] gives $S_N=O(\delta^p)$. [A1, A2, A3, F1, step 2.1, algebra]


4.1 Since $E_N$ is a positive constant multiple of $\lambda\|\widehat r_N-r(x^\dagger)\|^p+t\|r(x_N)-r(x^\dagger)\|^p$, its bound controls both displayed range errors. The definition in [F1] gives $C_\psi S_N=2^{1-p}\|K(\widehat r_N-r(x^\dagger))\|_Y^p+\|Px_N\|_X^p$. Each nonnegative summand is at most $C_\psi S_N$, and $C_\psi$ is fixed, giving the two $O(\delta)$ estimates. Finally, $K\widehat r_N+F(x_0)-y^\delta=K(\widehat r_N-r(x^\dagger))+(F(x^\dagger)-y^\delta)$, so the data residual is $O(\delta)$. If $\Phi$ is strictly increasing, $\rho_N=\Phi(\alpha_N)\le M\tau\delta^p$ gives $\alpha_N\le\phi(M\tau\delta^p)$; monotonicity of $H$ then gives the stated index bound for $h_N$. [F1, given, step 2.1, step 3.1]

4.2 In each displayed regime, $w_\delta\to0$ and $\log(1/w_\delta)\asymp L_\delta$. By [F3]–[F4], the selected last-crossing index satisfies $\rho_N\asymp w_\delta$, $h_N\asymp L_\delta^{-\nu}$, and $\alpha_N\asymp w_\delta L_\delta^\nu$. This gives exactly the three displayed parameter scales. For $0<k<2$, the ordinary squared noise $\delta^2$ is $O(w_\delta)$ because $\delta^{2-k}L_\delta^\nu\to0$. The same bound is immediate in the balanced regime and is the explicit additional assumption at the endpoint. Hence a fixed positive multiple of $\sqrt{w_\delta}$ is a valid noise upper bound; with this bound, [F4] supplies the original stopping bracket, and the tolerance condition is already the required one. Applying steps 1.1–3.1 at that upper-bound scale gives $E_N=O(L_\delta^{-\nu})$ and $S_N=O(w_\delta)$. [F2, F3, F4, step 1.1, step 2.1, step 3.1, step 1.2, algebra]

5.1 The first component of $r(\sigma_N-\sigma_0,z_N)-r(\sigma^\dagger-\sigma_0,0)$ is $\sigma_N-\sigma^\dagger$. Its norm is therefore bounded by the controlled range norm in $E_N$, so $p=2$ gives the stated conductivity error after taking square roots. The projection norm is exactly $\|z_N\|_Y$, and the residual argument in step 4.1 uses the actual noise upper bound $O(\sqrt{w_\delta})$, giving both remaining estimates. Since every positive power of $\delta$ times a fixed power of its logarithm tends to zero, $\sqrt{w_\delta}=O(L_\delta^{-\nu/2})$ in all three regimes, proving the total norm-rate assertion. [F1, F2, step 4.1, step 4.2, algebra] ∎
