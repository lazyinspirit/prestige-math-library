---
id: prop-limit-profile-moments-are-central-binomial-coefficients
kind: proposition
title: "The profile moments of $\\Omega$ are central binomial coefficients"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-logan-shepp-vershik-kerov-limit-profile, def-shifted-character-observables-and-profile-moments, thm-monotone-change-of-variable-for-riemann-integrals, thm-integration-by-parts, def-principal-inverse-sine-and-cosine, thm-sine-and-cosine-derivatives, lem-wallis-integrals-recurrence-and-squeeze, def-factorial-and-falling-factorial]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Prop. 5.3 and its proof, printed p. 26 (substitution $x=2\\sin\\theta$ and integration by parts)"
---

## Statement

For the limit profile $\Omega$ of [[def-logan-shepp-vershik-kerov-limit-profile]],
$$\tilde p_{2m}[\Omega]=\frac{(2m)!}{m!\,m!}=\binom{2m}{m}\quad(m\ge1),\qquad \tilde p_k[\Omega]=0\quad(k\ \text{odd}),$$
and $\tilde p_1[\Omega]=0$ by the declaration of [[def-shifted-character-observables-and-profile-moments]].

## Facts & Assumptions

**Given:** the even profile $\Omega$ and its profile moments $\tilde p_k[\omega]=k(k-1)\int_{\mathbb R}x^{k-2}\sigma_\omega(x)\,dx$, $\sigma_\omega=\frac12(\omega-|x|)$ ([[def-logan-shepp-vershik-kerov-limit-profile]], [[def-shifted-character-observables-and-profile-moments]]).

[F1] $\Omega$ is even, $\Omega(x)=|x|$ for $|x|\ge2$, and for $|x|<2$ it is $C^1$ with $\Omega'(x)=\frac2\pi\arcsin\frac x2$ ([[def-logan-shepp-vershik-kerov-limit-profile]]). Hence $\sigma_\Omega=\frac12(\Omega-|x|)$ is even, vanishes outside $[-2,2]$, and is continuous and piecewise $C^1$ on $[-2,0]$ and $[0,2]$, with $\sigma_\Omega(\pm2)=0$; integrating by parts on the two pieces gives, for $k\ge2$, $\int_{\mathbb R}x^{k-1}\sigma_\Omega'(x)\,dx=-(k-1)\int_{\mathbb R}x^{k-2}\sigma_\Omega(x)\,dx$ (all boundary terms vanish: at $\pm2$ because $\sigma_\Omega$ vanishes there, at $0$ because $k-1\ge1$), so $-k\int_{\mathbb R}x^{k-1}\sigma_\Omega'=k(k-1)\int_{\mathbb R}x^{k-2}\sigma_\Omega=\tilde p_k[\Omega]$ ([[def-shifted-character-observables-and-profile-moments]]).

[F2] Monotone change of variables: if $\varphi:[c,d]\to[a,b]$ is a monotone differentiable bijection with integrable derivative and $f$ is Riemann integrable on $[a,b]$, then $\int_a^bf=\int_c^d(f\circ\varphi)\,|\varphi'|$ ([[thm-monotone-change-of-variable-for-riemann-integrals]]).

[F3] Wallis integrals: $I_{2m}=\int_0^{\pi/2}\sin^{2m}\theta\,d\theta=\frac\pi2\prod_{k=1}^m\frac{2k-1}{2k}=\frac\pi2\cdot\frac{(2m-1)!!}{(2m)!!}$ for $m\ge0$ ([[lem-wallis-integrals-recurrence-and-squeeze]]); and $(2m)!=2^mm!\,(2m-1)!!$ ([[def-factorial-and-falling-factorial]]).

[F4] Arcsine: $\arcsin(\sin\theta)=\theta$ for $\theta\in[0,\pi/2]$ ([[def-principal-inverse-sine-and-cosine]]), and $\sin$ and $\cos$ have the usual derivatives ([[thm-sine-and-cosine-derivatives]]).

[F5] Integration by parts on a closed interval: if $u,v$ are differentiable on $[a,b]$ with integrable derivatives then $\int_a^buv'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$ ([[thm-integration-by-parts]]).

## Proof
**Proof technique:** direct.

1.1 Odd moments vanish: $\sigma_\Omega$ is even and supported in $[-2,2]$ by [F1], so for odd $k\ge3$ the integrand $x^{k-2}\sigma_\Omega(x)$ is odd and its integral over the symmetric interval vanishes; hence $\tilde p_k[\Omega]=0$ for odd $k$ by the definition, and $\tilde p_1[\Omega]=0$ by the convention. [given, F1, algebra]

1.2 Reduction for even moments: fix $m\ge1$ and put $k=2m$. By [F1] and the integration-by-parts form of the profile moment, $\tilde p_{2m}[\Omega]=-2m\int_{\mathbb R}x^{2m-1}\sigma_\Omega'(x)\,dx=-m\int_{-2}^{2}x^{2m-1}\Bigl(\frac2\pi\arcsin\frac x2-\operatorname{sgn}x\Bigr)dx .$ The integrand is even (odd factor times the odd function $\frac2\pi\arcsin(x/2)-\operatorname{sgn}x$), so the integral equals $2m\int_0^2x^{2m-1}\bigl(1-\frac2\pi\arcsin\frac x2\bigr)dx=\int_0^2\bigl(1-\frac2\pi\arcsin\frac x2\bigr)d(x^{2m})$. [given, F1, algebra]

2.1 Substitution $x=2\sin\theta$: by [F2] applied to the increasing bijection $\theta\mapsto2\sin\theta$ from $[0,\pi/2]$ onto $[0,2]$ (with $2\cos\theta\ge0$ and $\arcsin(\sin\theta)=\theta$ by [F4]), the integral of step 1.2 equals $\int_0^{\pi/2}\Bigl(1-\frac2\pi\theta\Bigr)\cdot4m\,2^{2m-1}\sin^{2m-1}\theta\cos\theta\,d\theta .$ [given, F2, F4, step 1.2, algebra]

3.1 Integration by parts and Wallis: on $[0,\pi/2]$ put $u(\theta):=1-\frac2\pi\theta$ and $v(\theta):=\frac{\sin^{2m}\theta}{2m}$; both are differentiable with continuous derivatives $u'\equiv-\frac2\pi$ and $v'=\sin^{2m-1}\theta\cos\theta$, so [F5] gives $\int_0^{\pi/2}uv'=\bigl[uv\bigr]_0^{\pi/2}-\int_0^{\pi/2}u'v=\frac{2}{\pi}\cdot\frac{1}{2m}\int_0^{\pi/2}\sin^{2m}\theta\,d\theta=\frac{I_{2m}}{\pi m},$ because $u(\pi/2)=0$ and $u(0)=1$ while $v(0)=\sin 0=0$. Multiplying by $4m\,2^{2m-1}$ and using [F3], $\tilde p_{2m}[\Omega]=\frac{2^{2m+1}}{\pi}I_{2m}=\frac{2^{2m+1}}{\pi}\cdot\frac\pi2\cdot\frac{(2m-1)!!}{(2m)!!}=2^{2m}\frac{(2m-1)!!}{2^mm!}=\frac{(2m)!}{m!\,m!}$, where the last equality is $(2m)!=2^mm!(2m-1)!!$ of [F3]. [given, F3, step 2.1, algebra]

4.1 Conclusion: step 1.1 gives the vanishing for odd $k$ (including $\tilde p_1=0$ by convention) and steps 1.2, 2.1, 3.1 give $\tilde p_{2m}[\Omega]=\binom{2m}{m}$ for every $m\ge1$. [given, step 1.1, step 3.1] ∎ 