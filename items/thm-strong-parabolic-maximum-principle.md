---
id: thm-strong-parabolic-maximum-principle
kind: theorem
title: Strong parabolic maximum principle
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-countable-choice
  - def-parabolic-cylinder-and-parabolic-boundary
  - def-heat-ball-and-its-slices
  - lem-submean-inequality-for-heat-subsolutions
  - lem-heat-ball-representation-formula
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-polar-surface-measure-on-the-unit-sphere
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - lem-heat-ball-chains-reach-earlier-points
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - def-connected-space
  - thm-heine-cantor-metric
  - def-metric-uniform-continuity
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-compactness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed pp. 157–158, mean value formula (Theorem 6.13, Corollary 6.14) and Theorem 6.15 (strong maximum principle) with its complete proof"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1 (Gaussian kernel and heat-ball geometry used in the chaining)"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2 (parabolic maximum principle for classical subsolutions)"
---

## Statement

Assume Countable Choice. Let $Q=\Omega\times(0,T]$ be a parabolic cylinder
with $\Omega$ bounded, let $u\in C^{2,1}(\overline Q)$ satisfy
$u_t-\Delta u\le0$ in $Q$, and suppose the maximum $M:=\max_{\overline Q}u$ is
attained at a point $(x_0,t_0)$ with $x_0\in\Omega$ and $0<t_0\le T$. Let
$\Omega_0$ be the connected component of $\Omega$ containing $x_0$. Then
$$u=M\quad\text{on }\Omega_0\times(0,t_0].$$

## Facts & Assumptions

**Given:** Countable Choice, a parabolic cylinder $Q=\Omega\times(0,T]$ with $\Omega$ bounded, $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u\le0$ in $Q$, and a point $(x_0,t_0)$ with $x_0\in\Omega$, $0<t_0\le T$ and $u(x_0,t_0)=M:=\max_{\overline Q}u$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Submean inequality: if $u$ is $C^{2,1}$ on a neighbourhood of a closed
heat ball $E_\eta(P)$ and $u_t-\Delta u\le0$ there, then
$$u(P)\le\frac1{2\eta^n}\int_{t_P-\eta^2/4\pi}^{t_P}\frac{\rho_n(t_P-s)}{t_P-s}\int_{|y-x_P|=\rho_n(t_P-s)}u(y,s)\,dS(y)\,ds,$$
and $u(P)\le M$ whenever $u\le M$ on $E_\eta(P)$
([[lem-submean-inequality-for-heat-subsolutions]]).

[F2] Time slices of heat balls: for $0<\tau<r^2/(4\pi)$ the time slice of $E_r(t,x)$ is the closed ball of radius $\rho_n(\tau)=\sqrt{2n\tau\log\frac{r^2}{4\pi\tau}}$; the slice at $\tau=r^2/(4\pi)$ is the single point $\{x\}$ and the slice is empty for $\tau>r^2/(4\pi)$, so $E_r(t,x)\subseteq Q$ forces $t-r^2/(4\pi)>0$; the spatial projection of $E_r(t,x)$ then lies compactly inside the open set $\Omega$ ([[def-heat-ball-and-its-slices]]).

[F3] The level set $L_r(P):=\{(y,s):s<t_P,\ \Gamma(x_P-y,t_P-s)=r^{-n}\}$ is the lateral part of $\partial E_r(P)$, it is a $C^\infty$ hypersurface on which $\nabla\Gamma\ne0$, and the top point $P$ is the only point of $\partial E_r(P)$ outside it ([[def-heat-ball-and-its-slices]]).

[F4] Representation formula: for $u$ of class $C^{2,1}$ near the closed heat
ball $E_r(P)$,
$$u(P)=\iint_E\bigl(\Gamma(x_P-y,t_P-s)-r^{-n}\bigr)(u_t-\Delta u)+\Lambda_r(P)[u],$$
where
$$\Lambda_r(P)[g]:=\frac1{2r^n}\int_0^{r^2/4\pi}\frac{\rho_n(\tau)}{\tau}\int_{|y-x_P|=\rho_n(\tau)}g(y,t_P-\tau)\,dS(y)\,d\tau$$
for continuous $g$; applied to the constant function $1$, whose forcing
vanishes, it gives $\Lambda_r(P)[1]=1$
([[lem-heat-ball-representation-formula]]).

[F5] The lateral functional is a positive measure with density $R(\tau)^n/(2r^n\tau)$ in the sphere-time parametrization for $0<\tau<r^2/(4\pi)$, as computed in [[lem-heat-ball-representation-formula]]. Its total mass is one by [F4]. Every nonempty open piece of this parameter domain has positive measure: for $n\ge2$, a regular sphere chart has strictly positive Gram density, and a small coordinate box has positive Lebesgue measure; for $n=1$ each of the two sphere points has counting mass one. Thus a continuous nonnegative function with zero lateral integral vanishes on the parametrized part of $L_r(P)$. It also vanishes at the lower tip by continuity, since that tip is a limit of lateral points. The lateral level itself is not compact (it omits the top); no compactness assertion or mass at a tip is needed ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F6] Chaining: for open $\Omega$, times $0<t_1<t_0\le T<\infty$ and a Lipschitz path $\gamma:[0,1]\to\Omega$ with compact image $K$, there is $\rho>0$ with $E_\rho(P)\subseteq\Omega\times(0,T]$ for every $P\in K\times[t_1,t_0]$, and for every $s\in[t_1,t_0)$ there is a chain $P_0=(\gamma(0),t_0),\dots,P_N=(\gamma(1),s)$, all lying in $K\times[t_1,t_0]$, with $P_{j+1}\in E_\rho(P_j)$ ([[lem-heat-ball-chains-reach-earlier-points]]).

[F7] $\Omega_0$ is open and connected, hence polygonally connected: any two of its points are joined by a polygonal, hence Lipschitz, path with compact image ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]], [[def-connected-space]]).

[F8] Continuous maps on compact metric spaces are uniformly continuous ([[thm-heine-cantor-metric]], [[def-metric-uniform-continuity]]); $\overline Q$ is compact ([[thm-heine-borel-rn]], [[def-metric-compactness]]) and $u\in C(\overline Q)$.

## Proof

**Given:** Countable Choice, a bounded parabolic cylinder $Q$, a subsolution $u\in C^{2,1}(\overline Q)$ with maximum $M=u(x_0,t_0)$ at $x_0\in\Omega$, $0<t_0\le T$.

1.1 Fix $P\in Q$ with $u(P)=M$ and $\eta>0$ with $E_\eta(P)\subseteq Q$. Then $u=M$ on the lateral boundary $L_\eta(P)$. If $t_P<T$, the spatial projection of $E_\eta(P)$ is compactly contained in $\Omega$ and its times lie in $[t_P-\eta^2/4\pi,t_P]$ with both endpoints strictly inside $(0,T)$, so $u$ is $C^{2,1}$ on a neighbourhood of the closed heat ball and [F1] and [F4] apply: $M=u(P)\le\Lambda_\eta(P)[u]\le M\,\Lambda_\eta(P)[1]=M$, since $u\le M$ on $Q$; hence $\Lambda_\eta(P)[M-u]=0$ and [F5] gives $M-u\equiv0$ on $L_\eta(P)$. If $t_P=T$, put $P^\delta:=(x_P,T-\delta)$ for $0<\delta<\frac12(T-\eta^2/4\pi)$, so that $E_\eta(P^\delta)\subseteq\Omega\times(0,T)$ and $u$ is $C^{2,1}$ on a neighbourhood of it; substituting $s'=s-\delta$ in the slice formula of [F1] turns $\Lambda_\eta(P^\delta)[u]$ into $\Lambda_\eta(P)[u(\cdot,\cdot-\delta)]$, so $u(P^\delta)\le\Lambda_\eta(P)[u(\cdot,\cdot-\delta)]\le M$ by [F1] and [F4]; as $\delta\downarrow0$ one has $u(P^\delta)\to u(P)=M$, while $\sup_{L_\eta(P)}|u(y,s-\delta)-u(y,s)|\to0$ by [F8] because all the points $(y,s-\delta)$ and $(y,s)$ lie in the compact $\overline Q$; therefore $M\le\Lambda_\eta(P)[u]\le M$ and again $\Lambda_\eta(P)[M-u]=0$, so [F5] gives $M-u\equiv0$ on $L_\eta(P)$. [A1, F1, F2, F3, F4, F5, F8, given]

2.1 If $P\in Q$ has $u(P)=M$ and $E_\eta(P)\subseteq Q$, then $E_\eta(P)\subseteq S:=\{R\in Q:u(R)=M\}$: the top point $P$ lies in $S$, and for $Q^*\in E_\eta(P)$ with $Q^*\ne P$ put $\eta^*:=\Gamma(x_P-y^*,t_P-s^*)^{-1/n}$, which is well defined and positive because $s^*<t_P$; then $\eta^*\le\eta$, so $E_{\eta^*}(P)\subseteq E_\eta(P)\subseteq Q$ and $Q^*\in L_{\eta^*}(P)$, and step 1.1 applied with radius $\eta^*$ gives $u(Q^*)=M$. [step 1.1, F2, F3, given]

3.1 Fix $y\in\Omega_0$ and $s\in(0,t_0)$. By [F7] choose a polygonal, hence Lipschitz, path $\gamma:[0,1]\to\Omega_0$ from $x_0$ to $y$, with compact image $K$, and put $t_1:=s/2$, so that $0<t_1<t_0\le T$ and $s\in[t_1,t_0)$. By [F6] there are $\rho>0$ with $E_\rho(R)\subseteq Q$ for every $R\in K\times[t_1,t_0]$, and a chain $P_0=(x_0,t_0),P_1,\dots,P_N=(y,s)$ inside $K\times[t_1,t_0]$ with $P_{j+1}\in E_\rho(P_j)$ for all $j<N$. Since $u(x_0,t_0)=M$, induction on $j$ using step 2.1 gives $P_j\in S$ for every $j$, and in particular $u(y,s)=M$. [step 2.1, F6, F7, given]

4.1 Since $y\in\Omega_0$ and $s\in(0,t_0)$ were arbitrary, step 3.1 gives $u=M$ on $\Omega_0\times(0,t_0)$, and continuity of $u$ on $\overline Q$ extends this to the closed time level $\Omega_0\times(0,t_0]$, which is the claim. The only selections made are finitely many real parameters and one integer $N$; Countable Choice is used only through the measure, integration and compactness suppliers named in [F1]–[F8]. [step 3.1, given] ∎
