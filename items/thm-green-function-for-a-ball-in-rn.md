---
id: thm-green-function-for-a-ball-in-rn
kind: theorem
title: Dirichlet Green function of a Euclidean ball
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-dirac-delta-and-its-derivatives, def-dirichlet-green-function-for-minus-laplacian, def-distributional-harmonicity-and-poisson-equation-in-rn, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, lem-euclidean-balls-are-bounded-c-one-domains, lem-kelvin-inversion-and-the-laplace-operator, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, thm-green-function-symmetry, thm-minus-laplacian-of-the-fundamental-solution-is-dirac, cor-second-green-identity-on-a-bounded-c-one-domain]
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
      locator: "§2.8, printed pp. 44–49"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34; §§8.1–8.3, pp. 139–146"
---

## Statement

Assume Countable Choice and $n\ge3$. For $B_R(a)$, put $y^*=a+R^2(y-a)/|y-a|^2$ when $y\ne a$. With $-\Delta\Phi=\delta_0$, $G(x,y)=\Phi(x-y)-(R/|y-a|)^{n-2}\Phi(x-y^*)$ for $y\ne a$, and $G(x,a)=\Phi(x-a)-\Phi(R)$. For $x,y\in B_R(a)$, $x\ne y$, this is the positive, symmetric Dirichlet Green function: it is harmonic in $x$ off $y$, has the correct point singularity, vanishes continuously on the boundary, and its corrector is $C^2$ on the closed ball.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$ and the ball $\Omega:=B_R(a)$.

[F1] With $\omega_{n-1}=|S^{n-1}|>0$, the fundamental solution is $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $x\ne0$ and $n\ge3$, extended as a locally integrable function at the pole ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] $\Phi$ is smooth on $\mathbb R^n\setminus\{0\}$ with $\Delta\Phi=0$ there, and for every pole $z$ the translate $x\mapsto\Phi(x-z)$ is harmonic on $\mathbb R^n\setminus\{z\}$ ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F3] A Dirichlet Green function for $-\Delta$ on a bounded domain $\Omega$ is a map $G_\Omega$ on $\{(x,y)\in\Omega\times\Omega:x\ne y\}$ such that for each pole $y$ there is a harmonic $H_y\in C^2(\Omega)\cap C(\overline\Omega)$ with $H_y=\Phi(\cdot-y)$ on $\partial\Omega$ and $G_\Omega(x,y)=\Phi(x-y)-H_y(x)$; for fixed $y$ the function $G_\Omega(\cdot,y)$ is harmonic away from $y$, extends continuously to $\overline\Omega\setminus\{y\}$ with zero boundary trace, and its locally integrable representative satisfies $-\Delta_xT_{G_\Omega(\cdot,y)}=\delta_y$ in $\mathcal D'(\Omega)$ ([[def-dirichlet-green-function-for-minus-laplacian]]).

[F4] The regular distribution of $x\mapsto\Phi(x-z)$ satisfies $-\Delta_xT_{\Phi(\cdot-z)}=\delta_z$ on $\mathbb R^n$ for every pole $z$ ([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F5] For $x\ne a$ the inversion $I_R(x)=a+R^2(x-a)/|x-a|^2$ is smooth, and it is an involution exchanging the punctured ball $B_R(a)\setminus\{a\}$ with the exterior $\{x:|x-a|>R\}$ ([[lem-kelvin-inversion-and-the-laplace-operator]]).

[F6] $B_R(a)$ is a bounded $C^1$ domain with outward unit normal $\nu(y)=(y-a)/R$ at each $y\in\partial B_R(a)$ ([[lem-euclidean-balls-are-bounded-c-one-domains]]).

[F7] If $\Omega$ is a bounded $C^1$ domain carrying a Dirichlet Green function whose designated correctors satisfy $H_y\in C^2(\overline\Omega)$ for every $y$, then $G_\Omega(x,y)=G_\Omega(y,x)$ for all distinct $x,y\in\Omega$ ([[thm-green-function-symmetry]]).

[F8] On a bounded $C^1$ domain $\Omega$ and real $u,v\in C^2(\overline\Omega)$, $\int_\Omega(v\Delta u-u\Delta v)\,dx=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)\,dS$ ([[cor-second-green-identity-on-a-bounded-c-one-domain]]).

[F9] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis under which the Green, distributional and surface-measure statements used here are formulated ([[def-countable-choice]]); the distributional vocabulary is that of [[def-distributional-harmonicity-and-poisson-equation-in-rn]] with $\delta_y(\phi)=\phi(y)$ for $y$ in the open set ([[def-dirac-delta-and-its-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Work under the standing hypothesis [F9]. Let $n\ge3$, $a\in\mathbb R^n$, $R>0$ and $\Omega=B_R(a)$; let $\Phi$ be the kernel of [F1]. For $y\in\Omega$ with $y\ne a$ put $y^*:=I_R(y)=a+R^2(y-a)/|y-a|^2$ and $\kappa_y:=(R/|y-a|)^{n-2}$; by [F5], $|y^*-a|=R^2/|y-a|>R$, so $y^*\notin\overline\Omega$. Define $G(x,y):=\Phi(x-y)-\kappa_y\Phi(x-y^*)$ for $x\in\Omega\setminus\{y\}$ when $y\ne a$, and $G(x,a):=\Phi(x-a)-\Phi(R)$ for $x\in\Omega\setminus\{a\}$. Now put $u:=x-a$ and $v:=y-a\ne0$, so that $x-y^*=(x-a)-R^2v/|v|^2=u-R^2v/|v|^2$ and $x-y=u-v$: expanding the square $|u-R^2v/|v|^2|^2=|u|^2-2R^2\langle u,v\rangle/|v|^2+R^4/|v|^2$ and multiplying by $|v|^2$ gives $|y-a|^2|x-y^*|^2=|x-a|^2|y-a|^2-2R^2\langle u,v\rangle+R^4$, while $R^2|x-y|^2=R^2|x-a|^2-2R^2\langle u,v\rangle+R^2|y-a|^2$; subtracting yields the first algebraic identity below, and the same expansion with the roles of $x$ and $y$ exchanged yields the second, since $|v|^2|u|^2=|u|^2|v|^2$, $|x^*-a|=R^2/|x-a|$ and $x^*,y^*$ are defined symmetrically. $$|y-a|^2|x-y^*|^2-R^2|x-y|^2=(R^2-|x-a|^2)(R^2-|y-a|^2),\qquad |y-a|^2|x-y^*|^2=|x-a|^2|y-x^*|^2 .$$ [given, F1, F5, F9, algebra]

2.1 Correctors. Fix $y\in\Omega$ with $y\ne a$. Since $y^*\notin\overline\Omega$, the translate $x\mapsto\Phi(x-y^*)$ is smooth with vanishing Laplacian on a neighbourhood of the closed ball $\overline\Omega$ by [F2], so $H_y:=\kappa_y\Phi(\cdot-y^*)$ lies in $C^2(\overline\Omega)$ and is harmonic on $\Omega$; by construction $G(x,y)=\Phi(x-y)-H_y(x)$ for $x\in\Omega\setminus\{y\}$. For the centre put $H_a:=\Phi(R)$, the constant corrector: it is $C^2$ on $\overline\Omega$, harmonic, and $G(x,a)=\Phi(x-a)-H_a(x)$ by definition. [step 1.1, F2, F3]

2.2 Boundary values of the correctors. If $y\ne a$ and $|x-a|=R$, the first identity of step 1.1 gives $|y-a|^2|x-y^*|^2=R^2|x-y|^2$, hence $|x-y^*|=(R/|y-a|)|x-y|$; with the formula of [F1] this yields $\kappa_y\Phi(x-y^*)=R^{n-2}\bigl(|y-a||x-y^*|\bigr)^{2-n}/((n-2)\omega_{n-1})=R^{n-2}\bigl(R|x-y|\bigr)^{2-n}/((n-2)\omega_{n-1})=|x-y|^{2-n}/((n-2)\omega_{n-1})=\Phi(x-y)$. For $y=a$ and $|x-a|=R$ we have $H_a(x)=\Phi(R)=\Phi(x-a)$ by [F1]. So $H_y=\Phi(\cdot-y)$ on $\partial\Omega$ in both cases. [step 1.1, F1, algebra]

2.3 Positivity. Let $x,y\in\Omega$ be distinct. If $y\ne a$, then $|x-y|>0$, and the first identity of step 1.1 together with $R^2-|x-a|^2>0$, $R^2-|y-a|^2>0$ gives $|y-a|^2|x-y^*|^2=R^2|x-y|^2+(R^2-|x-a|^2)(R^2-|y-a|^2)>R^2|x-y|^2$, so $|y-a||x-y^*|>R|x-y|>0$; because $n\ge3$ makes the exponent $2-n$ negative and $r\mapsto r^{2-n}$ strictly decreasing, $\kappa_y\Phi(x-y^*)=R^{n-2}\bigl(|y-a||x-y^*|\bigr)^{2-n}/((n-2)\omega_{n-1})<R^{n-2}\bigl(R|x-y|\bigr)^{2-n}/((n-2)\omega_{n-1})=\Phi(x-y)$, that is $G(x,y)>0$. If $y=a$, then $0<|x-a|<R$ and strict decrease of $r\mapsto r^{2-n}$ gives $G(x,a)=\Phi(x-a)-\Phi(R)>0$. [step 1.1, F1, algebra]

2.4 Symmetry. Let $x,y\in\Omega\setminus\{a\}$. The second identity of step 1.1 gives $|y-a||x-y^*|=|x-a||y-x^*|$, so $\kappa_y\Phi(x-y^*)=R^{n-2}\bigl(|y-a||x-y^*|\bigr)^{2-n}/((n-2)\omega_{n-1})=R^{n-2}\bigl(|x-a||y-x^*|\bigr)^{2-n}/((n-2)\omega_{n-1})=\kappa_x\Phi(y-x^*)$; since $\Phi$ depends only on the norm, $\Phi(x-y)=\Phi(y-x)$, hence $G(x,y)=G(y,x)$. For the case of the centre, $x\in\Omega\setminus\{a\}$: $G(a,x)=\Phi(a-x)-\kappa_x\Phi(a-x^*)$ and $|x^*-a|=R^2/|x-a|>R$ gives $\kappa_x\Phi(a-x^*)=(R/|x-a|)^{n-2}\bigl(R^2/|x-a|\bigr)^{2-n}/((n-2)\omega_{n-1})=R^{2-n}/((n-2)\omega_{n-1})=\Phi(R)$, whence $G(a,x)=\Phi(a-x)-\Phi(R)=\Phi(x-a)-\Phi(R)=G(x,a)$. [step 1.1, F1, algebra]

3.1 Harmonicity, continuity and zero trace. If $y\ne a$, [F2] makes $x\mapsto\Phi(x-y)$ smooth and harmonic on $\mathbb R^n\setminus\{y\}\supseteq\Omega\setminus\{y\}$, and $H_y$ is smooth harmonic on $\Omega$ by step 2.1; hence $G(\cdot,y)=\Phi(\cdot-y)-H_y$ is smooth and harmonic on $\Omega\setminus\{y\}$, and the same holds for $y=a$ with the constant $H_a$. For the continuous extension: fix $y$ and let $x\to z\in\partial\Omega$ with $x\in\Omega$. By [F1] and continuity of $\Phi$ off the origin, $\Phi(x-y)\to\Phi(z-y)$ and $\kappa_y\Phi(x-y^*)\to\kappa_y\Phi(z-y^*)=\Phi(z-y)$ by step 2.2 applied at the boundary point $z$; for $y=a$, $\Phi(x-a)\to\Phi(z-a)=\Phi(R)$ because $|z-a|=R$. Hence $G(x,y)\to0$ for every $z\in\partial\Omega$, and $G(\cdot,y)$ extends continuously to $\overline\Omega\setminus\{y\}$ with zero boundary trace. [step 2.1, step 2.2, F1, F2, algebra]

3.2 Distributional identity. Let $\phi\in C_c^\infty(\Omega)$ and let $\psi\in C_c^\infty(\mathbb R^n)$ be its extension by zero. By the definitions of [F9], $(\Delta T_{G(\cdot,y)})(\phi)=T_{G(\cdot,y)}(\Delta\phi)=\int_\Omega G(x,y)\Delta\phi(x)\,dx$, so $\langle-\Delta T_{G(\cdot,y)},\phi\rangle=-\int_{\mathbb R^n}\Phi(x-y)\Delta\psi(x)\,dx+\int_\Omega H_y(x)\Delta\phi(x)\,dx$. The first term equals $\psi(y)=\phi(y)$ by [F4], since $-\Delta_xT_{\Phi(\cdot-y)}=\delta_y$ on $\mathbb R^n$. For the second term: $H_y\in C^2(\overline\Omega)$ is harmonic and $\phi$ vanishes on a neighbourhood of $\partial\Omega$, so the second Green identity [F8] with $u=\phi$, $v=H_y$ gives $\int_\Omega H_y\Delta\phi\,dx=\int_\Omega\phi\Delta H_y\,dx+\int_{\partial\Omega}(H_y\partial_\nu\phi-\phi\partial_\nu H_y)\,dS=0$, both boundary terms vanishing because $\phi$ and its first derivatives are zero near $\partial\Omega$. Hence $\langle-\Delta T_{G(\cdot,y)},\phi\rangle=\phi(y)=\delta_y(\phi)$ for every test function $\phi$, that is $-\Delta_xT_{G(\cdot,y)}=\delta_y$ in $\mathcal D'(\Omega)$. [step 1.1, step 2.1, F1, F4, F8, F9, algebra]

4.1 Steps 2.1, 2.2 and 3.1 verify the corrector clause and the zero-trace clause of the Dirichlet Green definition [F3] for the ball $\Omega=B_R(a)$ and the kernel $G$ of step 1.1, step 3.2 verifies its distributional clause, and step 2.3 gives strict positivity while step 2.4 gives symmetry; so $G$ is the positive symmetric Dirichlet Green function of $B_R(a)$. Symmetry also follows independently from the published theorem [F7], whose hypotheses hold because $\Omega$ is a bounded $C^1$ domain by [F6] and the correctors $H_y$ of step 2.1 lie in $C^2(\overline\Omega)$. [step 1.1, step 2.1, step 2.2, step 3.1, step 2.3, step 2.4, step 3.2, F3, F6, F7] ∎
