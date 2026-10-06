---
id: thm-comparison-for-autonomous-convex-superlinear-hamiltonians
kind: theorem
title: Comparison for autonomous convex superlinear Hamiltonians
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-metric-uniform-continuity
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- thm-heine-cantor-metric
- thm-euclidean-semicontinuous-extreme-value-theorem
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 8, Theorem 8.2 and terminal-time penalisation in its proof, printed pp. 50--52 (bounded-domain comparison background). The whole-space bounded-gradient argument is proved here.
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 6 and Chapter 2 around equation (2.18), printed pp. 26--29 and 66--68
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 5, comparison, printed pp. 14--20
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$ and let $H:\mathbb R^n\to\mathbb R$ be finite-valued, continuous,
convex and superlinear. Let $T>0$. Suppose $u$ and $v$ are bounded uniformly
continuous on $\mathbb R^n\times[0,T]$, their restrictions to
$Z=\mathbb R^n\times(0,T)$ are respectively a viscosity subsolution and a
viscosity supersolution of $u_t+H(Du)=0$, and their continuous initial traces
satisfy $u(x,0)\le v(x,0)$ for every $x\in\mathbb R^n$. Then $u\le v$ on $Z$.
No choice principle is used.

## Facts & Assumptions

**Given:** A finite continuous convex superlinear $H:\mathbb R^n\to\mathbb R$, $T>0$, bounded uniformly continuous $u,v$ on $\mathbb R^n\times[0,T]$ whose restrictions to $Z$ are a viscosity subsolution and supersolution of $u_t+H(Du)=0$ with $u(\cdot,0)\le v(\cdot,0)$, and positive parameters $\eta,\eta',\rho,\alpha,P,\varepsilon,\delta$.

[F1] At every local maximum of $w-\phi$ with $\phi\in C^1(Z)$ a viscosity subsolution $w$ satisfies $\phi_t+H(D\phi)\le0$, and at every local minimum a viscosity supersolution satisfies $\phi_t+H(D\phi)\ge0$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] Uniform continuity of a map on a metric space means: for every $\sigma>0$ there is $\tau>0$ such that $|f(p)-f(q)|<\sigma$ whenever $d(p,q)<\tau$; hence $u$ and $v$ admit bounded time moduli $\omega_u,\omega_v$ and their two initial traces admit a bounded common spatial modulus $\omega_0$, with $|u(x,t)-u(x,t\prime)|\le\omega_u(|t-t\prime|)$, $|v(y,s)-v(y,s\prime)|\le\omega_v(|s-s\prime|)$, and both $|u(x,0)-u(y,0)|,|v(x,0)-v(y,0)|\le\omega_0(|x-y|)$ ([[def-metric-uniform-continuity]]).

[F3] A nonempty subset of $\mathbb R^n$ is compact exactly when it is closed and bounded, and a continuous real-valued function on such a set attains its maximum and minimum ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F4] A continuous function on a compact metric space is uniformly continuous there ([[thm-heine-cantor-metric]]).

[F5] Every upper semicontinuous real-valued function on a nonempty compact subset of $\mathbb R^n$ is bounded above and attains a maximum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

## Proof

**Proof technique:** strict time penalties, a bounded-gradient radial spatial penalty with a vanishing coercive weight, and control of the initial faces by the ordered traces and their moduli.

1.1 Penalisation. Put $\tilde u_\eta(x,t)=u(x,t)-\eta/(T-t)$ and $\tilde v_{\eta'}(y,s)=v(y,s)+\eta'/(T-s)$ for $t,s<T$. If $\phi$ is a $C^1$ upper test for $\tilde u_\eta$ at an interior point $z_0$, then $\phi+\eta/(T-t)$ is a $C^1$ upper test for $u$, so $u_t$ evaluation and [F1] give $\phi_t(z_0)+\eta/(T-t_0)^2+H(D\phi(z_0))\le0$, that is $\phi_t+H(D\phi)\le-\eta/(T-t_0)^2\le-\eta/T^2$; dually every $C^1$ lower test $\phi$ for $\tilde v_{\eta'}$ satisfies $\phi_t+H(D\phi)\ge\eta'/(T-s_0)^2\ge\eta'/T^2$. Moreover $\tilde u_\eta(x,t)\le\sup u-\eta/(T-t)\to-\infty$ and $\tilde v_{\eta'}(y,s)\ge\inf v+\eta'/(T-s)\to+\infty$ as $t\uparrow T$, respectively $s\uparrow T$, uniformly in the space variable. [F1, algebra]

1.2 The doubling function and the initial-face bound. Assume for contradiction that $u(x_0,t_0)>v(x_0,t_0)$ for some $0<t_0<T$ and put $\delta:=\tfrac14\bigl(u(x_0,t_0)-v(x_0,t_0)\bigr)>0$. Fix $\eta,\eta'>0$ with $\tilde u_\eta(x_0,t_0)-\tilde v_{\eta'}(x_0,t_0)>3\delta$ and put $B:=\eta+\eta'>0$. Choose $a>0$ so small that $\omega_0(a)<B/(8T)$, and then $P>0$ with $Pa>\sup_{r\ge0}\omega_0(r)$; this gives $\sup_{r\ge0}(\omega_0(r)-Pr)<B/(8T)$ by splitting at $a$. then $\varepsilon>0$ with $P\varepsilon<B/(8T)$, and $\psi(r):=P(\sqrt{r^2+\varepsilon^2}-\varepsilon)$, so that $|P(x-y)/\sqrt{|x-y|^2+\varepsilon^2}|\le P$, $\psi(r)\ge Pr-P\varepsilon$ and $\psi(0)=0$; put $\chi(x):=\sqrt{1+|x|^2}$. Choose $\rho>0$ with $\rho\le1$, $2\rho\chi(x_0)<\delta$, and such that $|H(p)-H(q)|<B/T^2$ whenever $|p-q|\le2\rho$ and $|p|,|q|\le P+1$: the last requirement is possible because $H$ is uniformly continuous on the compact set $\{|p|\le P+1\}$ by [F3] and [F4]. For $\alpha>0$ define $\Phi_\alpha(x,y,t,s):=\tilde u_\eta(x,t)-\tilde v_{\eta'}(y,s)-\psi(|x-y|)-\frac{\alpha}{2}|t-s|^2-\rho(\chi(x)+\chi(y))$ for $0\le t,s<T$, and set $\Phi_\alpha:=-\infty$ if $t=T$ or $s=T$. At the diagonal point $(x_0,x_0,t_0,t_0)$ we have $\Phi_\alpha=\tilde u_\eta(x_0,t_0)-\tilde v_{\eta'}(x_0,t_0)-2\rho\chi(x_0)>3\delta-\delta=2\delta$ for every $\alpha$, while $\Phi_\alpha\le\sup u-\inf v<\infty$. The penalty $-\rho(\chi(x)+\chi(y))$ makes the superlevel set $S_\alpha:=\{\Phi_\alpha\ge2\delta\}$ bounded, and $S_\alpha$ is closed because $\Phi_\alpha$ is upper semicontinuous (it is continuous where $t,s<T$, and tends to $-\infty$ at the terminal faces, where it is $-\infty$) and $2\delta>-\infty$; by [F3] $S_\alpha$ is compact and it is nonempty by the diagonal estimate. On $S_\alpha$ the function $\Phi_\alpha$ is real-valued, and it is upper semicontinuous as a restriction of an upper semicontinuous function, so it attains on $S_\alpha$ a maximum $M_\alpha\ge2\delta$ by [F5], and by [F3] the value $M_\alpha$ is finite; a maximum on $S_\alpha$ is a global maximum of $\Phi_\alpha$ because every point outside $S_\alpha$ has value $<2\delta\le M_\alpha$, and every maximiser lies in $S_\alpha$, hence has $t_\alpha,s_\alpha<T$. So for every $\alpha$ there is a maximiser $(x_\alpha,y_\alpha,t_\alpha,s_\alpha)$ with $\Phi_\alpha(x_\alpha,y_\alpha,t_\alpha,s_\alpha)\ge2\delta$ and $t_\alpha,s_\alpha<T$. [assume-contra, F2, F3, F4, F5, algebra]

2.1 Initial faces are excluded for large $\alpha$. Since $\tilde u_\eta-\tilde v_{\eta'}\le\sup u-\inf v$, the inequality $\Phi_\alpha\ge2\delta$ gives $\frac{\alpha}{2}|t_\alpha-s_\alpha|^2\le\sup u-\inf v-2\delta$, so $|t_\alpha-s_\alpha|\to0$ as $\alpha\to\infty$. If $t_\alpha=0$, then using $u(x_\alpha,0)\le v(x_\alpha,0)$, the initial modulus $\omega_0$, the time modulus $\omega_v$ and $\psi(r)\ge Pr-P\varepsilon$ we get $\Phi_\alpha\le\omega_0(|x_\alpha-y_\alpha|)-P|x_\alpha-y_\alpha|+P\varepsilon+\omega_v(s_\alpha)-\frac{B}{T}\le\frac{B}{8T}+\frac{B}{8T}-\frac{B}{T}+\omega_v(s_\alpha)<0$ for all large $\alpha$, because $s_\alpha\to0$ by $|t_\alpha-s_\alpha|\to0$; this contradicts $\Phi_\alpha\ge2\delta$. The case $s_\alpha=0$ is identical with $\omega_u$ in place of $\omega_v$. Hence for all sufficiently large $\alpha$ every maximiser has $0<t_\alpha,s_\alpha<T$. [step 1.2, F2, algebra]

3.1 Contact inequalities and the contradiction. Fix $\alpha$ large enough that step 2.1 applies and $|t_\alpha-s_\alpha|<T$. At the maximiser, fixing $(y_\alpha,s_\alpha)$ shows that $\phi^U(x,t):=\psi(|x-y_\alpha|)+\rho\chi(x)+\frac{\alpha}{2}|t-s_\alpha|^2$ is a $C^1$ upper test for $\tilde u_\eta$ at $(x_\alpha,t_\alpha)$, and fixing $(x_\alpha,t_\alpha)$ shows that $\phi^V(y,s):=-\psi(|x_\alpha-y|)-\rho\chi(y)-\frac{\alpha}{2}|t_\alpha-s|^2$ is a $C^1$ lower test for $\tilde v_{\eta'}$ at $(y_\alpha,s_\alpha)$. Their derivatives are $p:=\frac{P(x_\alpha-y_\alpha)}{\sqrt{|x_\alpha-y_\alpha|^2+\varepsilon^2}}+\frac{\rho x_\alpha}{\chi(x_\alpha)}$, $q:=\frac{P(x_\alpha-y_\alpha)}{\sqrt{|x_\alpha-y_\alpha|^2+\varepsilon^2}}-\frac{\rho y_\alpha}{\chi(y_\alpha)}$ and $a:=\alpha(t_\alpha-s_\alpha)$, with $|p|,|q|\le P+\rho\le P+1$ and $|p-q|=\rho|\frac{x_\alpha}{\chi(x_\alpha)}+\frac{y_\alpha}{\chi(y_\alpha)}|\le2\rho$ because $|z|/\chi(z)\le1$ for every $z$. Step 1.1 applied to the two tests gives $a+H(p)\le-\eta/T^2$ and $a+H(q)\ge\eta'/T^2$, hence $B/T^2=\frac{\eta+\eta'}{T^2}\le H(q)-H(p)$. But $|p-q|\le2\rho$ and $|p|,|q|\le P+1$, so the choice of $\rho$ in step 1.2 gives $|H(q)-H(p)|<B/T^2$, a contradiction. Therefore no point with $u>v$ exists in $Z$, that is $u\le v$ on $Z$. [step 1.1, step 1.2, step 2.1, algebra, discharge-contradiction] ∎

## Remarks

- **Why the radial penalty has bounded gradient.** With $\psi(r)=P(\sqrt{r^2+\varepsilon^2}-\varepsilon)$ one has $0\le\psi'(r)<P$, so the spatial doubling contributes gradients of modulus at most $P$ and the difference $p-q$ contains exactly the term $\rho(\cdot)$ of the weight. The vanishing of $\varepsilon$ is not used as a limit: the estimates hold for a fixed positive $\varepsilon$.
- **Role of each face.** The time penalties give the strict margin $B/T^2$ and remove the terminal faces; the weight $\rho(\chi(x)+\chi(y))$ makes the superlevel sets compact; the initial faces are handled by the pointwise order of the traces and their moduli, so no value-function or semijet machinery beyond the stated hypotheses is needed. The Hilbert-space semijet theorem is not required, which is why $H(p)=|p|^2/2$ is covered.
