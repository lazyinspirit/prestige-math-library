---
id: def-logan-shepp-vershik-kerov-limit-profile
kind: definition
title: "The Logan-Shepp-Vershik-Kerov limit profile $\\Omega$"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram, def-principal-inverse-sine-and-cosine, def-derivative, thm-derivative-of-an-inverse, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, cor-mean-value-theorem, lem-of-abs-value]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§5, printed pp. 25-26 (definition (0.2)/(5.1) of $\\Omega$ and its displayed derivatives); the profile is attributed to Logan-Shepp and Vershik-Kerov"
---

## Definition

Define the function $\Omega:\mathbb R\to\mathbb R$ by
$$\Omega(x)=\frac2\pi\Bigl(x\arcsin\frac x2+\sqrt{4-x^2}\Bigr)\quad(|x|\le2),\qquad\Omega(x)=|x|\quad(|x|\ge2),$$
with the principal arcsine of [[def-principal-inverse-sine-and-cosine]]. Its elementary properties, all used below, are as follows.

**(a) Evenness.** The functions $x\mapsto x\arcsin(x/2)$, $x\mapsto\sqrt{4-x^2}$ and $x\mapsto|x|$ are even, so $\Omega$ is even.

**(b) Values and continuity at the junctions.** At $x=\pm2$ the first formula gives $\frac2\pi(\pm2\arcsin(\pm1)+0)=2$ because $\arcsin(\pm1)=\pm\pi/2$, agreeing with $|x|=2$; the arcsine branch and $|x|$ are continuous on their closed domains, and the two branches agree at the two junction points, so $\Omega$ is continuous on all of $\mathbb R$.

**(c) First derivative.** For $|x|<2$ differentiability of $\arcsin$ on $(-1,1)$ ([[def-principal-inverse-sine-and-cosine]], [[thm-derivative-of-an-inverse]], [[thm-sine-and-cosine-derivatives]]) and the chain and product rules ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]) applied to $x\mapsto\frac2\pi(x\arcsin\frac x2+\sqrt{4-x^2})$ give
$$\Omega'(x)=\frac2\pi\Bigl(\arcsin\frac x2+\frac{x}{2}\bigl(1-\tfrac{x^2}4\bigr)^{-1/2}-\frac x2\bigl(1-\tfrac{x^2}4\bigr)^{-1/2}\Bigr)=\frac2\pi\arcsin\frac x2 .$$
For $|x|>2$ the derivative of the restriction is $\Omega'(x)=\operatorname{sgn}x$. As $x\to2^-$ the formula tends to $\frac2\pi\cdot\frac\pi2=1=\operatorname{sgn}x$ for $x>2$, and as $x\to-2^+$ it tends to $-1=\operatorname{sgn}x$ for $x<-2$; hence $\Omega$ is differentiable at every real point with
$$\Omega'(x)=\frac2\pi\arcsin\frac x2\ (|x|<2),\qquad\Omega'(x)=\operatorname{sgn}x\ (|x|>2),$$
and the one-sided derivatives at $x=\pm2$ both equal $\pm1$ (they are the limits of $\Omega'$ from within $(-2,2)$ and from outside).

**(d) Lipschitz bound and smoothness.** Since $|\arcsin y|<\pi/2$ for $|y|<1$, one has $|\Omega'(x)|<1$ for $|x|<2$, while $|\Omega'(x)|=1$ for $|x|>2$. On each of the intervals $(-\infty,-2]$, $[-2,2]$, $[2,\infty)$ the function is continuous and differentiable on the interior, so the mean value theorem ([[cor-mean-value-theorem]]) gives $|\Omega(x)-\Omega(y)|\le|x-y|$ for $x,y$ in the same interval, and the continuity at $\pm2$ gives the same bound across the junctions; thus $\Omega$ is $1$-Lipschitz. On $(-2,2)$ the arcsine branch is $C^\infty$ with
$$\Omega''(x)=\frac2\pi\bigl(4-x^2\bigr)^{-1/2}>0,$$
so $\Omega$ is $C^\infty$ there with $\Omega'$ strictly increasing. Since $|\Omega(x)-\Omega(y)|\le|x-y|$ for all $x,y$ and $\Omega(x)=|x|$ for $|x|\ge2$, we have $\Omega\in D_0$ in the sense of [[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]], with $\sigma_\Omega=\frac12(\Omega-|x|)$ supported in $[-2,2]$ and $\sigma_\Omega(0)=2/\pi>0$. No choice principle is used.
