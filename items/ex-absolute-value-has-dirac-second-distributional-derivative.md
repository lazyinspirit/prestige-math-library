---
id: ex-absolute-value-has-dirac-second-distributional-derivative
kind: example
title: Absolute value has a Dirac second derivative
status: published
origin: pipeline
deps: [ex-absolute-value-has-a-weak-first-derivative, def-locally-integrable-function-as-a-regular-distribution, def-distributional-derivative, def-dirac-delta-and-its-derivatives, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-test-function-space-d-of-an-open-set, lem-classical-derivatives-are-weak-derivatives, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-locally-integrable-functions-embed-in-distributions, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.1 and Example 1.10, printed pp. 2–7
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.1, printed pp. 47–49
verification:
  precheck: pass
  audited: 2026-09-30
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1 and Example 1.10, printed
  pp. 2–7: the absolute value is the standard example of a first-order weak
  derivative that is not continuous, and its second distributional derivative
  is the Dirac mass $2\delta_0$.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.1,
  printed pp. 47–49: the same computation, split at the corner, with the jump
  of the first derivative contributing the mass.

## Statement

Assume Countable Choice. On $\mathbb R$ the function $u(x)=|x|$ is locally
integrable, and its second distributional derivative is
$$\partial^2T_{|x|}=2\delta_0,$$
that is $\langle\partial^2T_{|x|},\varphi\rangle=2\varphi(0)$ for every test
function $\varphi\in C_c^\infty(\mathbb R)$. Consequently
$|x|\in W^{1,\infty}_{\mathrm{loc}}(\mathbb R)$ but
$|x|\notin W^{2,1}_{\mathrm{loc}}(\mathbb R)$: the distribution $2\delta_0$ is
not the regular distribution of any locally integrable function.

## Facts & Assumptions

**Given:** Countable Choice, the function $u(x)=|x|$ on $\mathbb R$, and a test function $\varphi\in C_c^\infty(\mathbb R)$.

[F1] For $u\in L^1_{\mathrm{loc}}(\Omega)$ the regular distribution is $T_u(\varphi)=\int_\Omega u\varphi$; the resulting map is injective on almost-everywhere classes under Countable Choice ([[def-locally-integrable-function-as-a-regular-distribution]]).

[F2] The distributional derivative satisfies $\langle\partial^\alpha T,\varphi\rangle=(-1)^{|\alpha|}\langle T,\partial^\alpha\varphi\rangle$ ([[def-distributional-derivative]]).

[F3] The Dirac distribution is $\delta_0(\varphi)=\varphi(0)$ ([[def-dirac-delta-and-its-derivatives]]).

[F4] Under Countable Choice, integration by parts on a compact interval gives $\int_a^bu'v=u(b)v(b)-u(a)v(a)-\int_a^buv'$ and $\int_a^bu'=u(b)-u(a)$ for complex $C^1$ functions ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F5] A test function in $C_c^\infty(\mathbb R)$ is smooth with compact support; its zero extension to $\mathbb R$ is smooth with compact support, so outside a sufficiently large $[-R,R]$ the function and all its derivatives vanish ([[def-test-function-space-d-of-an-open-set]]).

[F6] Under Countable Choice, $|x|\in W^{1,p}(I;\mathbb R)$ for every $1\le p\le\infty$ and every bounded open interval $I$ containing $0$, with weak derivative the class of the sign function ([[ex-absolute-value-has-a-weak-first-derivative]]).

[F7] Under Countable Choice, a $C^1$ function on an open set has its classical first partials as weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F8] Membership in $W^{2,1}(U)$ requires a locally integrable weak derivative class for every multi-index $|\alpha|\le2$, and $W^{2,1}_{\mathrm{loc}}(\mathbb R)$ means membership on every relatively compact open subinterval; the weak derivative is characterized by the signed test identity ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F9] Assume Countable Choice. For every open $\Omega\subseteq\mathbb R^n$, the regular-distribution map is injective modulo almost-everywhere equality: if $v\in L^1_{\mathrm{loc}}(\Omega)$ and $\int_\Omega v\varphi=0$ for every test function $\varphi\in C_c^\infty(\Omega)$, then $v=0$ almost everywhere on $\Omega$ ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F10] If $K\subseteq U\subseteq\mathbb R^n$ with $K$ compact and $U$ open, then there is a smooth $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $K$ and $\operatorname{supp}(\rho)\subseteq U$; applied on $\mathbb R$ to the compact set $\{0\}$ inside the open interval $I=(-1,1)$, this provides a test function $\psi\in C_c^\infty(I)$ with $\psi(0)=1$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[F11] The Axiom of Countable Choice is the only choice principle assumed ([[def-countable-choice]]).

## Proof

**Proof technique:** split the pairing at the corner, integrate by parts twice, and read off the jump as a point mass.

1.1 The function $|x|$ is continuous, hence locally integrable, so [F1] defines the regular distribution $T_{|x|}$. Since the second-order multi-index has $|\alpha|=2$, [F2] gives $\langle\partial^2T_{|x|},\varphi\rangle=(-1)^2\langle T_{|x|},\varphi''\rangle=\int_{\mathbb R}|x|\varphi''(x)\,dx$, a finite integral because $\varphi''$ is bounded with compact support. By [F5] fix $R>0$ with $\operatorname{supp}\varphi\subseteq(-R,R)$. [F1, F2, F5, given]
1.2 $|x|\in W^{1,\infty}_{\mathrm{loc}}(\mathbb R)$: let $I$ be a bounded open interval. If $0\notin I$, then $|x|$ is $C^1$ on $I$ with classical derivative $\pm1$, so [F7] makes that constant the weak derivative, and both $|x|$ and its derivative lie in $L^\infty(I)$, giving $|x|\in W^{1,\infty}(I)$. If $0\in I$, [F6] gives $|x|\in W^{1,\infty}(I)$ directly with bounded weak derivative represented by the sign function. As $I$ was arbitrary, $|x|\in W^{1,\infty}_{\mathrm{loc}}(\mathbb R)$. [F6, F7, given]
2.1 On the interval $[0,R]$ apply [F4] with $u(x)=x$ and $v=\varphi'$: $$\int_0^Rx\varphi''(x)\,dx=\big[R\varphi'(R)-0\cdot\varphi'(0)\big]-\big(\varphi(R)-\varphi(0)\big).$$ On $[-R,0]$ apply [F4] with $u(x)=-x$: $$\int_{-R}^0(-x)\varphi''(x)\,dx=\big[(-x)\varphi'(x)\big]_{-R}^0+\int_{-R}^0\varphi'(x)\,dx=-R\varphi'(-R)+\varphi(0)-\varphi(-R).$$ By the choice of $R$ in step 1.1 we have $\varphi(\pm R)=0$ and $\varphi'(\pm R)=0$, so both right-hand sides equal $\varphi(0)$, and adding the two half-line integrals gives $\int_{\mathbb R}|x|\varphi''(x)\,dx=2\varphi(0)$. Hence $\langle\partial^2T_{|x|},\varphi\rangle=2\varphi(0)=2\delta_0(\varphi)$ by [F3], and since $\varphi$ was arbitrary, $\partial^2T_{|x|}=2\delta_0$. [F3, F4, step 1.1, given]
3.1 $|x|\notin W^{2,1}_{\mathrm{loc}}(\mathbb R)$: suppose otherwise and take $I=(-1,1)$. Then $|x|\in W^{2,1}(I)$, so by [F8] there is $v\in L^1(I)$ representing the second weak derivative: $$\int_I|x|\varphi''(x)\,dx=\int_Iv(x)\varphi(x)\,dx\qquad\text{for every test }\varphi\text{ supported in }I.$$ Step 2.1 computes the left side as $2\varphi(0)$ for every test function $\varphi$ on $\mathbb R$, hence for every test function supported in $I$. Let $U_+=(0,1)$ and $U_-=(-1,0)$. If $\varphi$ is a test function supported in $U_+$, then $\varphi(0)=0$, so $\int_{U_+}v\varphi=\int_Iv\varphi=2\varphi(0)=0$; as $\varphi$ was arbitrary, [F9] applied on the open set $U_+$ gives $v=0$ almost everywhere on $U_+$. The same computation on $U_-$ gives $v=0$ almost everywhere on $U_-$, and since $I\setminus(U_+\cup U_-)=\{0\}$ is a singleton, hence null, $v=0$ almost everywhere on $I$. By [F10] applied to the compact set $\{0\}$ inside the open set $I$ there is a test function $\psi\in C_c^\infty(I)$ with $\psi(0)=1$; the weak-derivative identity for this $\psi$ gives $\int_Iv\psi=\int_I|x|\psi''=2\psi(0)=2$, while $v=0$ almost everywhere on $I$ gives $\int_Iv\psi=0$, a contradiction. Hence $|x|\notin W^{2,1}(I)$ for this $I$, and therefore $|x|\notin W^{2,1}_{\mathrm{loc}}(\mathbb R)$. [F8, F9, F10, step 2.1]
4.1 The example is complete: the second distributional derivative of $|x|$ is the point mass $2\delta_0$, which has no locally integrable representative, while the first weak derivative exists and is bounded. The conclusion uses only Countable Choice [F11], used by the regular-distribution injectivity interfaces [F1] and [F9], the Lebesgue integration-by-parts interface [F4], the first-derivative interfaces [F6] and [F7], and the Sobolev interface [F8]. The bump construction [F10] and distributional differentiation [F2] are choice-free. The endpoint value of the sign representative at $0$ is irrelevant, since a point is null. $\square$ [F1, F2, F4, F9, F10, F11, step 2.1, step 1.2, step 3.1]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.1 and Example 1.10: the absolute value has the sign function as its first weak derivative and the mass $2\delta_0$ as its second distributional derivative; it therefore fails to be twice weakly differentiable.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.1: the split integration by parts at the corner, where the jump of the first derivative contributes the boundary term.
