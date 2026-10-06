---
id: def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram
kind: definition
title: "Continual diagrams, Russian profiles, and the $\\sqrt n$-scaling of a Young diagram"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-plancherel-measure-on-partitions, def-partition-young-diagram-and-conjugate-partition, def-derivative, lem-of-abs-value, def-darboux-integral, thm-change-of-variables-for-compact-jordan-sets, lem-of-triangle-inequality]
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
      locator: "Defs. 2.1 and 2.3 and the introduction (coordinates $x=s-r$, $y=r+s$, area $2n$), printed pp. 2, 9-10; the scaling $\\omega_s(x)=s^{-1}\\omega(sx)$ and Prop. 2.11, printed pp. 13-14"
---

## Definition

A **continual diagram** is a function $\omega:\mathbb R\to\mathbb R$ such that $|\omega(x)-\omega(y)|\le|x-y|$ for all real $x,y$ (the Lipschitz condition) and $\omega(x)=|x|$ for all sufficiently large $|x|$; the set of continual diagrams is denoted $D_0$. For $\omega\in D_0$ set
$$\sigma_\omega(x):=\tfrac12\bigl(\omega(x)-|x|\bigr).$$
Since $\omega$ agrees with $|\cdot|$ outside a compact set, $\sigma_\omega$ is compactly supported; and $\sigma_\omega$ is 1-Lipschitz, because $|\sigma_\omega(x)-\sigma_\omega(y)|=\tfrac12|\omega(x)-\omega(y)-(|x|-|y|)|\le\tfrac12(|x-y|+|x-y|)$ by the Lipschitz bound and $\bigl||x|-|y|\bigr|\le|x-y|$: the latter follows by applying [[lem-of-triangle-inequality]] to $x=(x-y)+y$ and to $y=(y-x)+x$, with [[lem-of-abs-value]]. For $s>0$ define the **$s$-scaling** $\omega_s(x):=s^{-1}\omega(sx)$. Then $\omega_s\in D_0$, and
$$\sigma_{\omega_s}(x)=s^{-1}\sigma_\omega(sx),\qquad x\in\mathbb R,$$
directly from the definition, so scaling preserves the Lipschitz constant.

The empty partition has profile $\varnothing(x):=|x|$. Every nonempty $\lambda\vdash n$ determines a continual diagram $\lambda(\cdot)\in D_0$ ([[def-partition-young-diagram-and-conjugate-partition]]). Regard the boxes of $[\lambda]$ as the unit squares $[i-1,i]\times[j-1,j]$, $1\le i\le k$, $1\le j\le\lambda_i$, in the plane with coordinates $(r,s)$, and rotate by $x=s-r$, $y=r+s$. The outer staircase of the image, extended by the two axis rays, is the graph of a continuous piecewise linear function $y=\lambda(x)$, with $\lambda'(x)=\pm1$ at every point where the derivative exists ([[def-derivative]]): each horizontal or vertical unit step of the boundary staircase becomes a unit step of slope $\mp1$ under the linear map $(r,s)\mapsto(s-r,r+s)$, and the graph is read from the outer corner at $x=-\lambda'_1$ to the corner at $x=\lambda_1$. Outside these corners the boundary follows the axis strip, so
$$\lambda(x)=|x|\quad\text{for }x\ge\lambda_1\quad\text{and for }x\le-\lambda'_1,$$
the extreme corners being the end of the first row and the bottom of the first column. Hence $\lambda(\cdot)\in D_0$ and the support of $\sigma_\lambda$ is contained in $[-\lambda'_1,\lambda_1]$. The **area identity**, also valid for the empty profile, holds:
$$\tfrac12\int_{\mathbb R}\bigl(\lambda(x)-|x|\bigr)dx=n,$$
because the compact region $\{(x,y):-\lambda\prime_1\le x\le\lambda_1,\ |x|\le y\le\lambda(x)\}$ is exactly the image under the invertible linear map $T(r,s):=(s-r,r+s)$, of determinant $-2$, of the union $[\lambda]$ of the $n$ unit squares, and the image of a Jordan-measurable compact set of area $n$ has area $|\det T|\cdot n=2n$ ([[thm-change-of-variables-for-compact-jordan-sets]], applied with $f\equiv1$); the region is the area under the continuous piecewise linear function $\lambda(x)-|x|\ge0$ over the compact interval $[-\lambda'_1,\lambda_1]$, which is its Riemann-Darboux integral ([[def-darboux-integral]]).

The **$\sqrt n$-scaled profile** of $\lambda\vdash n$, $n\ge1$, is
$$\bar\lambda(x):=n^{-1/2}\lambda\bigl(n^{1/2}x\bigr)=\lambda_{n^{1/2}}(x),\qquad x\in\mathbb R,$$
the $\sqrt n$-scaling of the preceding paragraph. Thus $\bar\lambda\in D_0$, $\bar\lambda(x)=|x|$ for $|x|\ge\max(\lambda_1,\lambda'_1)/\sqrt n$, and $\sigma_{\bar\lambda}(x)=n^{-1/2}\sigma_\lambda(n^{1/2}x)$; the area identity scales to $\tfrac12\int_{\mathbb R}(\bar\lambda(x)-|x|)dx=1$. The probability distribution with which $\lambda$ is drawn in this batch is the Plancherel measure of [[def-plancherel-measure-on-partitions]]. No choice principle is used.
