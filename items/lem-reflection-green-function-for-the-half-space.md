---
id: lem-reflection-green-function-for-the-half-space
kind: lemma
title: Reflection Green kernel for the half-space
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-dirac-delta-and-its-derivatives, def-distributional-harmonicity-and-poisson-equation-in-rn, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, lem-laplace-fundamental-kernel-is-locally-integrable, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, thm-minus-laplacian-of-the-fundamental-solution-is-dirac]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.4, printed pp. 28–32, reflection of the fundamental solution for the half-space"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, Poisson kernel on the half-space"
---

## Statement

Assume Countable Choice and $n\ge3$. Use one-based coordinate labels $x_j:=x_{j-1}^{\mathrm{can}}$ and $y_j:=y_{j-1}^{\mathrm{can}}$ for $1\le j\le n$. For $H=\{x\in\mathbb R^n:x_n>0\}$, $y\in H$ and $y^\dagger=(y',-y_n)$, define $$G_H(x,y)=\Phi(x-y)-\Phi(x-y^\dagger)\qquad(x\in H\setminus\{y\}),$$ with $\Phi$ the fundamental solution normalized by $-\Delta\Phi=\delta_0$. The kernel is symmetric off the diagonal and strictly positive for distinct $x,y\in H$. For fixed $y$, it is locally integrable on $H$, smooth and harmonic in $x$ off $y$, satisfies $-\Delta_xG_H(\cdot,y)=\delta_y$ distributionally on $H$, and extends continuously to the boundary with zero trace. Its diagonal is the Green pole. It is a Green kernel for this unbounded half-space; the published bounded-domain definition is not being applied to $H$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a pole $y\in H=\{x\in\mathbb R^n:x_n>0\}$ and $y^\dagger=(y',-y_n)$.

[F1] With $\omega_{n-1}=|S^{n-1}|>0$ in the published chart/polar convention, the fundamental solution is $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $x\ne0$ and $n\ge3$, extended as a locally integrable function at the pole ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] $\Phi$ is smooth on $\mathbb R^n\setminus\{0\}$ with $\Delta\Phi=0$ there, and for every pole $z$ the translate $x\mapsto\Phi(x-z)$ is harmonic on $\mathbb R^n\setminus\{z\}$ ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F3] The regular distribution $T_{\Phi(\cdot-z)}$ of $x\mapsto\Phi(x-z)$ satisfies $-\Delta_xT_{\Phi(\cdot-z)}=\delta_z$ on $\mathbb R^n$ for every $z$ ([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F4] On an open set $\Omega$, distributions act on $C_c^\infty(\Omega)$, $(\partial_iT)(\phi)=-T(\partial_i\phi)$ and $\Delta T=\sum_i\partial_i^2T$, while $T_f(\phi)=\int f\phi$ is the regular distribution of $f\in L^1_{\mathrm{loc}}(\Omega)$; and $\delta_a(\phi)=\phi(a)$ for $a\in\Omega$ ([[def-distributional-harmonicity-and-poisson-equation-in-rn]], [[def-dirac-delta-and-its-derivatives]]).

[F5] The kernel $\Phi$ is locally integrable on $\mathbb R^n$ ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

## Proof

**Proof technique:** direct.

1.1 Since $y_n>0$, we have $y^\dagger=(y',-y_n)\notin\overline H$. Thus for $x\in H\setminus\{y\}$ both vectors $x-y$ and $x-y^\dagger$ are nonzero, and the formula defines a real function smooth in $x$ off $y$. By [F1] and [F5] the first term is locally integrable, while the second is continuous on all of $H$ because $|x-y^\dagger|\ge x_n+y_n>0$. Hence the difference is locally integrable on $H$; write $T$ for its regular distribution, which exists by [F4]. [given, F1, F2, F4, F5]

2.1 Symmetry. For distinct $x,y\in H$, the vectors $x-y^\dagger=(x'-y',x_n+y_n)$ and $y-x^\dagger=(y'-x',y_n+x_n)$ have equal Euclidean norms, because their first $n-1$ coordinates differ only by a sign and their last coordinates agree; and $\Phi$ is even, being a function of $|z|$ only. Hence $\Phi(x-y^\dagger)=\Phi(y-x^\dagger)$ and $\Phi(x-y)=\Phi(y-x)$, so $G_H(x,y)=G_H(y,x)$. [given, step 1.1, F1, algebra]

2.2 Strict positivity. For distinct $x,y\in H$ the $n-1$ leading coordinates of $x-y^\dagger$ and $x-y$ agree, so $|x-y^\dagger|^2-|x-y|^2=(x_n+y_n)^2-(x_n-y_n)^2=4x_ny_n>0$; thus $|x-y^\dagger|>|x-y|\ge0$. Since $n\ge3$ gives the negative exponent $2-n<0$ and $r\mapsto r^{2-n}$ is strictly decreasing on $(0,\infty)$ (a quotient of positive powers, verified from $r^{2-n}=1/r^{n-2}$), and since the factor $1/((n-2)\omega_{n-1})$ of [F1] is positive, we get $\Phi(x-y^\dagger)<\Phi(x-y)$, that is $G_H(x,y)>0$. [given, step 1.1, F1, algebra]

2.3 Harmonicity in $x$ off the pole. Fix $y\in H$. By [F2] the translate $x\mapsto\Phi(x-y)$ is smooth and harmonic on $\mathbb R^n\setminus\{y\}$, hence on $H\setminus\{y\}$; and $x\mapsto\Phi(x-y^\dagger)$ is smooth and harmonic on all of $H$, because $H$ is contained in $\mathbb R^n\setminus\{y^\dagger\}$. A difference of harmonic smooth functions is smooth and harmonic, so $x\mapsto G_H(x,y)$ is smooth and harmonic on $H\setminus\{y\}$. [given, step 1.1, F2]

2.4 Zero boundary trace. Let $z\in\partial H=\{x_n=0\}$ and let $x\to z$ with $x\in H$. Then $x-y\to z-y=(z'-y',-y_n)$ and $x-y^\dagger\to z-y^\dagger=(z'-y',y_n)$, and these two limit vectors have equal norms $|z'-y'|^2+y_n^2$, a positive number because $y_n>0$; in particular neither limit is the origin. By continuity of $\Phi$ off the origin, $\lim_{x\to z,x\in H}G_H(x,y)=\Phi(z-y)-\Phi(z-y^\dagger)=0$. As the formula is continuous on the closed set $\{x:x_n\ge0,\ x\ne y\}$, it extends $G_H(\cdot,y)$ continuously to $\overline H\setminus\{y\}$ with value $0$ on $\partial H$. [given, step 1.1, F1, F2, algebra]

2.5 Distributional identity. Let $\phi\in C_c^\infty(H)$ be a test function and let $\psi$ be its extension by zero to $\mathbb R^n$, which is smooth and compactly supported. By the derivative rules of [F4], $(\Delta T)(\phi)=T(\Delta\phi)=\int_HG_H(x,y)\Delta\phi(x)\,dx$, hence $\langle-\Delta T,\phi\rangle=-\int_HG_H(x,y)\Delta\phi(x)\,dx=-\int_{\mathbb R^n}\Phi(x-y)\Delta\psi(x)\,dx+\int_{\mathbb R^n}\Phi(x-y^\dagger)\Delta\psi(x)\,dx$, because $\psi=\phi$ on $H$ and $G_H(x,y)=\Phi(x-y)-\Phi(x-y^\dagger)$ there. By [F3] applied at the poles $y$ and $y^\dagger$, $-\int_{\mathbb R^n}\Phi(x-y)\Delta\psi(x)\,dx=\psi(y)=\phi(y)$, while $+\int_{\mathbb R^n}\Phi(x-y^\dagger)\Delta\psi(x)\,dx=-\psi(y^\dagger)=0$; the last equality holds because $\operatorname{supp}\psi\subseteq H$ avoids $H^c$. Therefore $\langle-\Delta T,\phi\rangle=\phi(y)=\delta_y(\phi)$ for every test function, that is $-\Delta_xT_{G_H(\cdot,y)}=\delta_y$ on $H$ in the sense of [F4]. [given, step 1.1, F3, F4, algebra]

3.1 Steps 2.1, 2.2, 2.3, 2.4 and 2.5 establish that the reflection kernel $G_H(\cdot,y)$ is symmetric, strictly positive at distinct points of $H$, smooth and harmonic in $x$ off $y$, has zero continuous boundary trace, and represents $-\Delta_xG_H(\cdot,y)=\delta_y$ distributionally on $H$; it therefore acts as the Green kernel of this unbounded half-space, and no bounded-domain Green definition is applied to $H$ anywhere above. [given, step 1.1, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5] ∎
