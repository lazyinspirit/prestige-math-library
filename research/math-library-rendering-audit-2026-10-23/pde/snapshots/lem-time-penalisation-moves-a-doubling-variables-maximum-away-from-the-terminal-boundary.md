---
id: lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary
kind: lemma
title: "Time penalisation moves a doubling-variables maximum away from the terminal boundary"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-viscosity-subsolution-and-supersolution, def-hamilton-jacobi-cauchy-problem, def-total-derivative-in-euclidean-space, def-semicontinuity-on-euclidean-subsets, def-extended-reals, thm-heine-borel-rn, thm-compact-iff-finite-intersection-property]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)"
      url: "https://arxiv.org/pdf/math/9207212"
      locator: "Proof of Theorem 8.2, the modification $\\tilde u=u-\\eta/(T-t)$ and its dual, printed p. 51"
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 1 Section 6, the time penalisation in the comparison proof, printed pp. 26--28"
verification:
  precheck: pass
---

## Statement

Let $T>0$, $Z=\mathbb R^n\times(0,T)$, and let
$H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous. Suppose
$u,v:\mathbb R^n\times[0,T)\to\mathbb R$, where $u$ is upper semicontinuous
and bounded above, $v$ is lower semicontinuous and bounded below, and their
restrictions to $Z$ are respectively a viscosity subsolution and a viscosity
supersolution of $u_t+H(x,t,Du)=0$. For $\eta,\eta'>0$ put
$\tilde u_\eta(x,t)=u(x,t)-\eta/(T-t)$ and
$\tilde v_{\eta'}(x,t)=v(x,t)+\eta'/(T-t)$ for $t<T$. Then:
(1) every $C^1$ upper contact $\phi$ for $\tilde u_\eta$ at
$z_0=(x_0,t_0)\in Z$ satisfies
$$\phi_t(z_0)+H(x_0,t_0,D\phi(z_0))\le-\frac{\eta}{(T-t_0)^2}<0 ;$$
(2) every $C^1$ lower contact $\phi$ for $\tilde v_{\eta'}$ at $z_0\in Z$
satisfies
$$\phi_t(z_0)+H(x_0,t_0,D\phi(z_0))\ge\frac{\eta'}{(T-t_0)^2}>0 ;$$
moreover $\tilde u_\eta\to-\infty$ and $\tilde v_{\eta'}\to+\infty$ uniformly
in $x$ as $t\uparrow T$; (3) for every $\alpha,\rho>0$, define on
$\mathbb R^n\times\mathbb R^n\times[0,T]^2$
$$\Phi_{\alpha,\rho}(x,y,t,s)=\tilde u_\eta(x,t)-\tilde v_{\eta'}(y,s)-\frac{\alpha}{2}|x-y|^2-\frac{\alpha}{2}|t-s|^2-\rho(|x|^2+|y|^2)$$
when $t,s<T$, and set $\Phi_{\alpha,\rho}=-\infty$ when $t=T$ or $s=T$. Then
$\Phi_{\alpha,\rho}$ attains a finite maximum, and every maximiser has
$t,s<T$. A maximum may occur on an initial face (that is, with $t=0$ or
$s=0$). No choice principle is used.

## Facts & Assumptions

**Given:** $T>0$, continuous $H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$, an upper semicontinuous function $u:\mathbb R^n\times[0,T)\to\mathbb R$ bounded above, a lower semicontinuous $v$ bounded below, whose restrictions to $Z=\mathbb R^n\times(0,T)$ are a viscosity subsolution and supersolution of $u_t+H(x,t,Du)=0$, the functions $\tilde u_\eta=u-\eta/(T-t)$, $\tilde v_{\eta'}=v+\eta'/(T-t)$ for $\eta,\eta'>0$, and the functions $\Phi_{\alpha,\rho}$ of the statement, read in $\overline{\mathbb R}$ ([[def-extended-reals]]).

[F1] A viscosity subsolution $w$ of $u_t+H(x,t,Du)=0$ in $Z$ satisfies $\psi_t(z_0)+H(z_0,D\psi(z_0))\le0$ at every local maximum $z_0\in Z$ of $w-\psi$ with $\psi\in C^1(Z)$; a viscosity supersolution satisfies the reverse inequality $\ge0$ at every local minimum of $w-\psi$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] The function $t\mapsto\eta/(T-t)$ is $C^1$ on $(-\infty,T)$ with derivative $\eta/(T-t)^2$; sums of $C^1$ functions are $C^1$ with the sum of the total derivatives ([[def-total-derivative-in-euclidean-space]]), and a local maximum of $\tilde u_\eta-\phi$ is a local maximum of $u-(\phi+\eta/(T-t))$ because the two differences are the same function.

[F3] Upper semicontinuity of $u$ and lower semicontinuity of $v$ are the relative notions on the Euclidean set $\mathbb R^n\times[0,T)$ ([[def-semicontinuity-on-euclidean-subsets]]); $w$ is upper semicontinuous exactly when every superlevel set $\{w\ge c\}$ is closed.

[F4] A subset of $\mathbb R^n$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[F5] A metric space is compact if and only if every family of closed subsets with the finite intersection property has nonempty intersection; no choice principle is used ([[thm-compact-iff-finite-intersection-property]]).

## Proof

**Proof technique:** add the two explicit time-boundary penalties, then use spatial coercivity and compact superlevel sets.

1.1 The subsolution penalty. Let $\phi\in C^1(Z)$ and suppose $\tilde u_\eta-\phi$ has a local maximum at $z_0=(x_0,t_0)\in Z$. Then $u-\psi$ has a local maximum at $z_0$ for $\psi(z):=\phi(z)+\eta/(T-t)$, which is $C^1$ on $Z$ with $\psi_t=\phi_t+\eta/(T-t)^2$ and $D\psi=D\phi$ by [F2]; the subsolution inequality [F1] gives $\phi_t(z_0)+\eta/(T-t_0)^2+H(x_0,t_0,D\phi(z_0))\le0$, that is $\phi_t+H(x_0,t_0,D\phi(z_0))\le-\eta/(T-t_0)^2<0$. [F1, F2, algebra]

1.2 The supersolution penalty and the uniform terminal limits. If $\tilde v_{\eta'}-\phi$ has a local minimum at $z_0\in Z$, then $v-\psi$ has a local minimum at $z_0$ for $\psi:=\phi-\eta'/(T-t)$, $C^1$ with $\psi_t=\phi_t-\eta'/(T-t)^2$; the supersolution inequality [F1] gives $\phi_t+H(x_0,t_0,D\phi(z_0))\ge\eta'/(T-t_0)^2>0$. For the terminal limits, $\tilde u_\eta(x,t)\le\sup u-\eta/(T-t)$ and $\tilde v_{\eta'}(x,t)\ge\inf v+\eta'/(T-t)$ for every $x$, and the right-hand sides are independent of $x$ and tend to $-\infty$, respectively $+\infty$, as $t\uparrow T$. [F1, F2, algebra]

1.3 Existence and finiteness of the maximum of $\Phi_{\alpha,\rho}$. On the product space $\mathbb R^n\times\mathbb R^n\times[0,T]^2$ the function $\Phi_{\alpha,\rho}$ is upper semicontinuous: it is built from the upper semicontinuous $\tilde u_\eta$, the function $-\tilde v_{\eta'}$, which is upper semicontinuous because $v$ is lower semicontinuous, and continuous terms, and at a sequence with $t\to T$ or $s\to T$ it tends to $-\infty$ uniformly, since $\tilde u_\eta(x,t)\le\sup u-\eta/(T-t)$ and $-\tilde v_{\eta'}(y,s)\le-\inf v-\eta'/(T-s)$; hence it takes the value $-\infty$ on the terminal faces in the upper-semicontinuous sense fixed in [F3]. It is bounded above by $\sup u-\inf v<\infty$, and its value at any diagonal point $(0,0,\tau,\tau)$ with $0<\tau<T$ is finite, so $M:=\sup\Phi_{\alpha,\rho}\in\mathbb R$. For each $k\ge1$ the set $A_k:=\{(\text{x,y,t,s}):\Phi_{\alpha,\rho}\ge M-1/k\}$ is nonempty by the definition of $M$, closed by upper semicontinuity [F3], bounded because $\rho(|x|^2+|y|^2)\le\sup u-\inf v-M+1/k\le\sup u-\inf v-M+1$ on $A_k$, and disjoint from the terminal faces because $M-1/k$ is finite there; hence each $A_k$ is a compact subset of $A_1$ by [F4]. The family $\{A_k\}_{k\ge1}$ is nested, so it has the finite intersection property, and [F5] applied in the compact set $A_1$ gives a point of $\bigcap_kA_k$, at which $\Phi_{\alpha,\rho}\ge M-1/k$ for every $k$, hence $\Phi_{\alpha,\rho}\ge M$; since $M$ is an upper bound, $\Phi_{\alpha,\rho}=M$ there. Thus the maximum is attained and equals the finite number $M$, and every maximiser has $t,s<T$ because the terminal faces carry the value $-\infty$. [F3, F4, F5, algebra]

2.1 Conclusion. Parts (1) and (2) of the statement are steps 1.1 and 1.2, and part (3) is step 1.3, whose construction nowhere selects a sequence or a point: the maximiser is obtained from the finite intersection property, which the cited lemma proves choice-free. Nothing in the argument rules out a maximiser with $t=0$ or $s=0$, since only the terminal faces $t=T$, $s=T$ carry the value $-\infty$. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **Why the penalties are the right shape.** Each penalty is continuous on
  $[0,T)$ with derivative diverging at $T$, so it produces the exact interior
  residual shift $\eta/(T-t)^2$, whose magnitude is at least $\eta/T^2$
  (and similarly for $\eta'$), and pushes every doubling maximum off the
  terminal face. The initial faces carry finite values and are deliberately allowed:
  the comparison theorem treats them separately with the pointwise initial
  inequality.
- **Choice.** The only compactness input is the finite-intersection
  characterisation [F5], which is choice-free.
