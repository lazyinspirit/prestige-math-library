---
id: thm-poisson-kernel-for-a-ball-in-rn
kind: theorem
title: Poisson kernel of a Euclidean ball
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-poisson-kernel-from-a-green-function, lem-euclidean-balls-are-bounded-c-one-domains, thm-chain-rule-for-total-derivatives, thm-green-function-for-a-ball-in-rn]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 47–48"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4.1, printed pp. 33–34"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed pp. 71–72, ball Poisson kernel computation and Theorem 4.24"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.6, printed p. 133, formula (5.61)"
---

## Statement

Assume Countable Choice and $n\ge3$. For $x\in B_R(a)$, $y\in\partial B_R(a)$, the negative outward boundary-slot normal derivative of the ball Green function is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$. The formula defines a continuous function of $(x,y)$ on $B_R(a)\times\partial B_R(a)$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, a point $x\in B_R(a)$ and a boundary point $y\in\partial B_R(a)$.

[F1] With $\omega_{n-1}=|S^{n-1}|>0$, the fundamental solution is $\Phi(z)=|z|^{2-n}/((n-2)\omega_{n-1})$ for $z\ne0$ and $n\ge3$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] For a bounded $C^1$ domain $\Omega$ carrying a Dirichlet Green function $G_\Omega$ with correctors $H_p\in C^2(\overline\Omega)$, the boundary-slot normal derivative at $x\in\Omega$, $y\in\partial\Omega$ is $\partial_{\nu_y}G_\Omega(x,y):=D_z\bigl(\Phi(z-x)-H_x(z)\bigr)|_{z=y}\cdot\nu_\Omega(y)$, and the Poisson kernel is $P_\Omega(x,y):=-\partial_{\nu_y}G_\Omega(x,y)$ ([[def-poisson-kernel-from-a-green-function]]).

[F3] For $B_R(a)$ with $n\ge3$ the Dirichlet Green function is $G(x,z)=\Phi(x-z)-(R/|z-a|)^{n-2}\Phi(x-z^*)$ for $z\ne a$, where $z^*=a+R^2(z-a)/|z-a|^2$, and $G(x,a)=\Phi(x-a)-\Phi(R)$; the designated corrector for a pole $p$ is $H_p(z)=(R/|p-a|)^{n-2}\Phi(z-p^*)$ for $p\ne a$ and $H_a(z)=\Phi(R)$, and $G$ is symmetric ([[thm-green-function-for-a-ball-in-rn]]).

[F4] $B_R(a)$ is a bounded $C^1$ domain with outward unit normal $\nu(y)=(y-a)/R$ at every $y\in\partial B_R(a)$ ([[lem-euclidean-balls-are-bounded-c-one-domains]]).

[F5] $D(g\circ f)(p)=Dg(f(p))\circ Df(p)$ when $f$ is totally differentiable at $p$ and $g$ is totally differentiable at $f(p)$ ([[thm-chain-rule-for-total-derivatives]]).

[F6] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F6]. Put $u:=x-a$ and $w:=y-a$, so that $|u|<R$ and $|w|=R$; for $x\ne a$ put $\kappa_x:=(R/|u|)^{n-2}$ and $x^*:=a+R^2u/|u|^2$, the inversion of $x$, while for $x=a$ the corrector is the constant $H_a=\Phi(R)$ by [F3]. By [F3] the corrector for the pole $x$ is $H_x(z)=\kappa_x\Phi(z-x^*)$ when $x\ne a$; its value at $y$ is well defined because $x^*\notin B_R(a)$ and $y\in\partial B_R(a)$ are different points, and $\Phi$ is smooth there by [F1]. Also $D_z\Phi(z-x)|_{z=y}$ is defined because $y\ne x$. [given, F1, F2, F3, F6]

2.1 Magnitude identity. Let $x\ne a$. From $x^*-a=R^2u/|u|^2$ and $y-x^*=(y-a)-R^2u/|u|^2$ we get $|y-x^*|^2=|w|^2-2R^2\langle w,u\rangle/|u|^2+R^4/|u|^2$; multiplying by $|u|^2$ and using $|w|^2=R^2$ gives $|u|^2|y-x^*|^2=R^2|u|^2-2R^2\langle u,w\rangle+R^4=R^2|x-y|^2$, because $|x-y|^2=|u-w|^2=|u|^2-2\langle u,w\rangle+R^2$. Hence $|u||y-x^*|=R|x-y|>0$. [given, step 1.1, algebra]

2.2 Vector identity. Let $x\ne a$. Adding and subtracting $u$ and using $x^*-a=R^2u/|u|^2$ gives $(x-y)+\frac{|u|^2}{R^2}(y-x^*)=(u-w)+\frac{|u|^2}{R^2}\bigl(w-\frac{R^2u}{|u|^2}\bigr)=u-w+\frac{|u|^2w}{R^2}-u=-\Bigl(1-\frac{|u|^2}{R^2}\Bigr)(y-a)=-\frac{R^2-|x-a|^2}{R^2}(y-a).$ [given, step 1.1, algebra]

3.1 The gradient of each term of [F2] at $z=y$. By [F5] and [F1], the gradient of $\Phi$ is $\nabla\Phi(\zeta)=-|\zeta|^{-n}\zeta/\omega_{n-1}$ for $\zeta\ne0$, since $\nabla|\zeta|^{2-n}=(2-n)|\zeta|^{-n}\zeta$ and the prefactor is $1/((n-2)\omega_{n-1})$; hence $D_z\Phi(z-x)|_{z=y}=-\bigl(|y-x|^{-n}(y-x)\bigr)/\omega_{n-1}=|x-y|^{-n}(x-y)/\omega_{n-1}$, and $D_z\bigl[\kappa_x\Phi(z-x^*)\bigr]|_{z=y}=-\kappa_x|y-x^*|^{-n}(y-x^*)/\omega_{n-1}$. By step 2.1, $\kappa_x|y-x^*|^{-n}=(R/|u|)^{n-2}(|u|/R)^n|x-y|^{-n}=(|u|^2/R^2)|x-y|^{-n}$. [step 2.1, F1, F5, algebra]

4.1 The boundary-slot derivative. Subtracting the two expressions of step 3.1 and using step 2.2, $D_z\bigl(\Phi(z-x)-H_x(z)\bigr)|_{z=y}=\frac{1}{\omega_{n-1}}|x-y|^{-n}\Bigl[(x-y)+\frac{|u|^2}{R^2}(y-x^*)\Bigr]=-\frac{R^2-|x-a|^2}{\omega_{n-1}R^2|x-y|^n}(y-a)$ for $x\ne a$. [step 2.2, step 3.1, algebra]

4.2 The case of the centre. For $x=a$ the corrector is the constant $H_a=\Phi(R)$ of [F3], so $D_z(\Phi(z-a)-H_a)|_{z=y}=\nabla\Phi(y-a)=-R^{-n}(y-a)/\omega_{n-1}$ by the gradient computation of step 3.1; dotting with $\nu(y)=(y-a)/R$ gives $\partial_{\nu_y}G(a,y)=-R^{-n}\cdot R/\omega_{n-1}=-R^{1-n}/\omega_{n-1}$ and $P_{R,a}(a,y)=R^{1-n}/\omega_{n-1}$, which is exactly the formula $(R^2-|a-a|^2)/(R\omega_{n-1}|a-y|^n)=R^2/(R\omega_{n-1}R^n)$. [step 3.1, F1, F2, F3, F4, algebra]

5.1 The Poisson kernel. Dotting step 4.1 with $\nu(y)=(y-a)/R$ from [F4] gives $\partial_{\nu_y}G(x,y)=-\frac{(R^2-|x-a|^2)(y-a)\cdot(y-a)}{\omega_{n-1}R^3|x-y|^n}=-\frac{R^2-|x-a|^2}{R\omega_{n-1}|x-y|^n}$, because $(y-a)\cdot(y-a)=R^2$; hence by [F2], $P_{R,a}(x,y)=-\partial_{\nu_y}G(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$ for $x\ne a$. [step 4.1, F2, F4, algebra]

6.1 Steps 5.1 and 4.2 give $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$ for every $x\in B_R(a)$ and $y\in\partial B_R(a)$. This explicit expression is continuous on $B_R(a)\times\partial B_R(a)$: numerator and denominator are continuous there and the denominator $R\omega_{n-1}|x-y|^n$ is nonzero at every point of the product because an interior point $x$ and a boundary point $y$ are never equal, so $|x-y|>0$. Hence the negative boundary-slot normal derivative of the ball Green function is the continuous function displayed in the statement. [step 5.1, step 4.2, F2, algebra] ∎
