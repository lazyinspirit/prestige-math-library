---
id: thm-comparison-for-first-order-hamilton-jacobi-equations
kind: theorem
title: Comparison for first-order Hamilton--Jacobi equations
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- lem-doubling-variables-maximum-localisation
- lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary
- lem-viscosity-testing-by-first-order-jets
- def-viscosity-subsolution-and-supersolution
- def-hamilton-jacobi-cauchy-problem
- def-metric-uniform-continuity
- def-semicontinuity-on-euclidean-subsets
- def-metric-compactness
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- thm-compact-iff-finite-intersection-property
- thm-heine-cantor-metric
- lem-sup-epsilon
- thm-euclidean-semicontinuous-extreme-value-theorem
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 6, Theorem 1.19 and its proof, printed pp. 26--29
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Theorem 8.2 and its proof, printed pp. 50--52
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 5, comparison theorems, printed pp. 14--20
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Comparison for first-order Hamilton--Jacobi equations, in the two settings of
the design. **(a) The case $O=\mathbb R^n$.** Let $T>0$ and let
$H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous for which
there is $C>0$ with
$$|H(x,t,p)-H(y,s,p)|\le C(1+|p|)\,(|x-y|+|t-s|),\qquad |H(x,t,p)-H(x,t,q)|\le C|p-q|$$
for all $x,y,p,q\in\mathbb R^n$ and $t,s\in[0,T]$. Let $u$ be a bounded upper
semicontinuous viscosity subsolution and $v$ a bounded lower semicontinuous
viscosity supersolution of the Cauchy problem in $Z=\mathbb R^n\times(0,T)$,
each defined on the closed slab $\mathbb R^n\times[0,T)$ and satisfying the
pointwise initial inequality $u(x,0)\le v(x,0)$ for every $x\in\mathbb R^n$.
Then $u\le v$ on $Z$. **(b) The compact-cylinder case.** Let
$O\subseteq\mathbb R^n$ be bounded and open, $T>0$, and let
$H:\overline O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous and
uniformly continuous in $(x,t)$ uniformly on bounded $p$-sets: there is a
nondecreasing modulus $\omega:[0,\infty)\to[0,\infty)$ with $\omega(0+)=0$ such
that
$$|H(x,t,p)-H(y,s,p)|\le\omega\bigl((1+|p|)\,(|x-y|+|t-s|)\bigr)$$
for all $(x,t),(y,s)\in\overline O\times[0,T]$ and all $p\in\mathbb R^n$. Let
$u,v$ be continuous on $\overline Z=\overline O\times[0,T]$, $u$ a viscosity
subsolution and $v$ a viscosity supersolution of $u_t+H(x,t,Du)=0$ in $Z$,
with $u\le v$ on the parabolic boundary
$\Gamma=(O\times\{0\})\cup(\partial O\times[0,T])$. Then $u\le v$ on
$\overline Z$. No growth hypothesis on $H$ in the momentum variable is imposed
in this case; the modulus condition replaces it. For an $x$-independent
autonomous Hamiltonian $H(p)$, it holds with the zero modulus. No choice
principle is used.

## Facts & Assumptions

**Given:** The two settings of the statement; parameters $\eta,\eta',\rho,\alpha>0$; the time penalties $\tilde u_\eta=u-\eta/(T-t)$ and $\tilde v_{\eta'}=v+\eta'/(T-t)$ (case (a)) or $\tilde v_{\eta'}=v+\eta'/(T-s)$ read at the respective time variable; the doubling functions $\Phi_\alpha(x,y,t,s):=\tilde u_\eta(x,t)-\tilde v_{\eta'}(y,s)-\frac{\alpha}{2}|x-y|^2-\frac{\alpha}{2}|t-s|^2$ in case (b) and the same with the additional weight $-\rho(|x|^2+|y|^2)$ in case (a); their suprema $M_\alpha$.

[F1] Every $C^1$ upper contact $\phi$ of $\tilde u_\eta$ at an interior point satisfies $\phi_t+H(x,t,D\phi)\le-\eta/(T-t)^2\le-\eta/T^2$, and every $C^1$ lower contact of $\tilde v_{\eta'}$ satisfies the reverse with $\eta'$; moreover $\tilde u_\eta(x,t)\le\sup u-\eta/(T-t)\to-\infty$ and $\tilde v_{\eta'}(x,t)\ge\inf v+\eta'/(T-t)\to+\infty$ uniformly at the terminal time ([[lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary]]).

[F2] At every maximiser of the doubling function, the two test functions displayed in [[lem-doubling-variables-maximum-localisation]] are $C^1$ contacts for $\tilde u_\eta$ and $\tilde v_{\eta'}$ with the jets $p=\alpha(x-y)+2\rho x$ (case (a)) or $p=\alpha(x-y)$ (case (b)), $q=\alpha(x-y)-2\rho y$ or $q=\alpha(x-y)$, and common time derivative $p_0=\alpha(t-s)$; and the weight bound $\frac{\alpha}{2}(|x-y|^2+|t-s|^2)+\rho(|x|^2+|y|^2)\le\sup\tilde u_\eta-\inf\tilde v_{\eta'}-M_\alpha$ holds at every maximiser, a bound that in case (a) restricts every maximiser by $\rho(|x|^2+|y|^2)\le\sup u-\inf v-M_\alpha$ ([[lem-doubling-variables-maximum-localisation]]).

[F3] In case (a), $u$ is upper semicontinuous and $v$ lower semicontinuous on the closed slab, so $u(x,0)-v(y,s)$ and $u(x,t)-v(y,0)$ are upper semicontinuous in their variables. In case (b), $u,v$ are continuous on the compact set $\overline Z$, hence uniformly continuous by Heine--Cantor; choose a common space-time modulus $\varpi$ with $|u(x,t)-u(y,s)|,|v(x,t)-v(y,s)|\le\varpi(|x-y|+|t-s|)$ ([[def-viscosity-subsolution-and-supersolution]], [[def-semicontinuity-on-euclidean-subsets]], [[def-metric-uniform-continuity]], [[thm-heine-cantor-metric]]).

[F4] Closed bounded subsets of finite-dimensional Euclidean space are compact; compactness implies the finite-intersection property for nested nonempty closed subsets ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[def-metric-compactness]], [[thm-compact-iff-finite-intersection-property]]).

[F5] A finite-valued upper semicontinuous function has closed superlevel sets; if $f$ is upper semicontinuous and $g$ lower semicontinuous, then $f-g$ is upper semicontinuous, by applying their local one-sided bounds with half the tolerance ([[def-semicontinuity-on-euclidean-subsets]]).

[F6] An upper semicontinuous real-valued function on a nonempty compact Euclidean set is bounded above and attains a maximum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F7] A continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** doubling with terminal-time penalisation; all localisation estimates are proved for every maximiser, so that no sequence of maximisers and no choice principle is used.

1.1 Case (a): setup and uniform localisation estimates. Assume $\sigma:=\sup_Z(u-v)>0$ and fix $(x_1,t_1)\in Z$ with $u(x_1,t_1)-v(x_1,t_1)>3\sigma/4$. Choose $\eta,\eta'>0$ with $(\eta+\eta')/(T-t_1)<\sigma/4$ and put $B:=\eta+\eta'$; then $\tilde u_\eta(x_1,t_1)-\tilde v_{\eta'}(x_1,t_1)>\sigma/2$. Fix $\rho>0$ with $2\rho|x_1|^2<\sigma/8$; then for the doubling function of case (a) with these penalties, $M_\alpha\ge\Phi_\alpha(x_1,x_1,t_1,t_1)>\sigma/2-\sigma/8=3\sigma/8$ for every $\alpha$. Every maximiser $(x,y,t,s)$ of $\Phi_\alpha$ has $t,s<T$, and by [F2] the weight bound gives $\rho(|x|^2+|y|^2)\le\sup u-\inf v-3\sigma/8=:K_\rho$, so $|x|,|y|\le C_\rho:=\sqrt{K_\rho/\rho}$. Writing $d^2:=|x-y|^2+|t-s|^2$ and evaluating $\Phi_{\alpha/2}$ at any maximiser of $\Phi_\alpha$ (the penalty difference is $\frac{\alpha}{4}d^2$) gives $M_{\alpha/2}\ge M_\alpha+\frac{\alpha}{4}d^2$, hence $d\le\delta_\alpha:=\bigl(4(M_{\alpha/2}-M_\alpha)/\alpha\bigr)^{1/2}$ for every maximiser; since $M_\alpha\downarrow M_\infty$ boundedly as $\alpha\to\infty$, $\delta_\alpha\to0$. With $p=\alpha(x-y)+2\rho x$ as in [F2] we get $|p|\le\alpha d+2\rho C_\rho$ and therefore $(1+|p|)d\le d+\alpha d^2+2\rho C_\rho d\le\delta_\alpha+4(M_{\alpha/2}-M_\alpha)+2\rho C_\rho\delta_\alpha\to0$ and $|q-p|=2\rho|x+y|\le4\rho C_\rho$ uniformly over all maximisers, both limits being as $\alpha\to\infty$ with $\rho$ fixed. [F1, F2, F4, algebra]

1.2 Case (b): setup and uniform localisation estimates. Let $\sigma:=\max_{\overline Z}(u-v)>0$; the maximum is attained by compactness and continuity, and if it were attained on $\Gamma$ it would be $\le0$, then continuity supplies a point $(x_1,t_1)\in Z$ with $u(x_1,t_1)-v(x_1,t_1)>3\sigma/4$, even if the maximum occurs at $t=T$. Choose $\eta,\eta'>0$ with $B:=\eta+\eta'<\sigma(T-t_1)/4$; then $\tilde u_\eta(x_1,t_1)-\tilde v_{\eta'}(x_1,t_1)>\sigma/2$, and the doubling function of case (b) satisfies $M_\alpha\ge\sigma/2$ for every $\alpha$. It is upper semicontinuous on the compact box $\overline O\times\overline O\times[0,T]^2$ (the penalties tend to $-\infty$ at the terminal faces, where the value is declared $-\infty$); a nonempty compact superlevel set and [F6] give a finite attained maximum, and every maximiser has $t,s<T$. Evaluating $\Phi_{\alpha/2}$ at a maximiser of $\Phi_\alpha$ again gives $\frac{\alpha}{4}d^2\le M_{\alpha/2}-M_\alpha$, hence $d\le\delta_\alpha\to0$ uniformly over maximisers, and with $p=q=\alpha(x-y)$ in case (b) one has $(1+|p|)d\le d+\alpha d^2\le\delta_\alpha+4(M_{\alpha/2}-M_\alpha)\to0$. Since $|x-y|+|t-s|\le2d$, it follows that $(1+|p|)(|x-y|+|t-s|)\le2\delta_\alpha+8(M_{\alpha/2}-M_\alpha)\to0$. [F1, F2, F4, F6, algebra]

2.1 Case (b): exclusion of the parabolic boundary and the contradiction. Let $\alpha$ be large enough that $\varpi(2\delta_\alpha)<B/T$. If a maximiser had $t=0$, then $(x,0)\in\Gamma$ gives $u(x,0)\le v(x,0)$ and $|x-y|+s\le2d\le2\delta_\alpha$, so $$\Phi_\alpha\le u(x,0)-v(y,s)-\frac{B}{T}\le\varpi(2\delta_\alpha)-\frac{B}{T}<0,$$ contradicting $M_\alpha\ge\sigma/2$. If $x\in\partial O$ with $t,s>0$, then $(x,t)\in\Gamma$ gives $u(x,t)\le v(x,t)$ and $|x-y|+|t-s|\le2d\le2\delta_\alpha$, so $\Phi_\alpha\le\varpi(2\delta_\alpha)-B/T<0$; the case $y\in\partial O$ is symmetric, as is $s=0$ using the initial inequality at $(y,0)$ and the modulus of $u$. Thus all maximisers for large $\alpha$ have $0<t,s<T$ and $x,y\in O$. At such a maximiser the penalty inequalities of [F1] hold at the jets $p=q$, $p_0$ of case (b), and subtracting them gives $$\frac{B}{T^2}\le H(y,s,p)-H(x,t,p)\le\omega\bigl((1+|p|)(|x-y|+|t-s|)\bigr)\le\omega(2\delta_\alpha+8(M_{\alpha/2}-M_\alpha)),$$ which tends to $0$ as $\alpha\to\infty$ by step 1.2 and $\omega(0+)=0$; this contradicts $B/T^2>0$. Hence $\sigma\le0$, that is $u\le v$ on $\overline Z$. [step 1.2, F1, F2, F3, F6, F7, algebra]

2.2 Case (a): exclusion of the initial faces and the contradiction. Fix the $\rho$ of step 1.1 and let $K$ be the closed ball containing every spatial coordinate of every maximiser. On the compact set $K\times K\times[0,T/2]$, the functions $f_0(x,y,s):=u(x,0)-v(y,s)$ and $f_1(x,y,t):=u(x,t)-v(y,0)$ are upper semicontinuous by [F3, F5], and both are nonpositive on the diagonal sets $(z,z,0)$ by the initial inequality. There is $\delta_0>0$ such that $f_0(x,y,s)<3\sigma/8$ whenever $|x-y|+s<\delta_0$, and likewise $\delta_1>0$ for $f_1$ whenever $|x-y|+t<\delta_1$: otherwise the closed superlevel sets $\{f_i\ge3\sigma/8\}$ intersected with the nested closed sets where the corresponding distance is at most $1/m$ would be nonempty compact sets with the finite-intersection property, so [F4] would give a point $(z,z,0)$ in the superlevel set, a contradiction. For $\alpha$ large enough that $2\delta_\alpha<\min\{\delta_0,\delta_1,T/2\}$, if a maximiser had $t=0$, then $\Phi_\alpha\le f_0(x,y,s)$ because all remaining penalties are nonpositive, while $|x-y|+s\le2d\le2\delta_\alpha$; this contradicts $\Phi_\alpha=M_\alpha\ge3\sigma/8$. If $s=0$, similarly $\Phi_\alpha\le f_1(x,y,t)$ and $|x-y|+t\le2\delta_\alpha$, again a contradiction. Hence for all sufficiently large $\alpha$ every maximiser has $0<t,s<T$. At such a maximiser the contact inequalities of [F1] apply at the jets $p,q,p_0$ of [F2]: $p_0+H(x,t,p)\le-\eta/T^2$ and $p_0+H(y,s,q)\ge\eta'/T^2$. Subtracting and using the two Lipschitz conditions of case (a) gives $B/T^2\le H(y,s,q)-H(x,t,p)\le C|q-p|+C(1+|p|)(|x-y|+|t-s|)$, and by step 1.1 the right-hand side is at most $4\rho CC_\rho+2C(\delta_\alpha+4(M_{\alpha/2}-M_\alpha)+2\rho C_\rho\delta_\alpha)$, using $|x-y|+|t-s|\le2d$ for every maximiser with $\alpha$ large. Letting $\alpha\to\infty$ gives $B/T^2\le4\rho CC_\rho=4C\bigl(\rho(\sup u-\inf v-3\sigma/8)\bigr)^{1/2}$, and then letting $\rho\downarrow0$ gives $B/T^2\le0$, a contradiction. Thus $\sigma\le0$ and $u\le v$ on $Z$. [step 1.1, F1, F2, F3, F4, F5, F6, algebra]

3.1 Conclusion. Case (a) is step 2.2 and case (b) is step 2.1; in both cases the contradiction is obtained by uniform estimates over the maximiser sets, so no maximiser, subsequence or index is selected and no choice principle is used. [step 2.1, step 2.2] ∎

## Remarks

- **Autonomy.** In case (b) an $x$-independent autonomous Hamiltonian $H(p)$ satisfies the modulus condition with $\omega\equiv0$. A general autonomous $H(x,p)$ still needs the stated spatial modulus condition; in case (a) the two Lipschitz conditions are exactly what the subtracted inequality consumes.
- **What each hypothesis is for.** The terminal-time penalties give the strict margin $B/T^2$; the localisation $\alpha d^2\to0$ makes the momentum gap $q-p=2\rho(x+y)$ and the space-time displacement disappear after $\alpha\to\infty$ and $\rho\downarrow0$; the pointwise initial inequality (case (a)) or the boundary inequality (case (b)) excludes the initial and lateral faces.
