---
id: cex-not-every-open-set-is-a-w-one-p-extension-domain
kind: counterexample
title: An inward cusp blocks W^{1,3/2} extension
status: published
origin: pipeline
deps: [def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, thm-acl-characterisation-of-w-one-p, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-holder-inequality-for-integrals, thm-polar-coordinates-formula-for-lebesgue-measure, lem-classical-derivatives-are-weak-derivatives, thm-chain-rule-for-total-derivatives, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Definition 3.42 and Theorem 1.25
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 3 §3.6, Definition 3.42, printed p. 84, and Chapter 1 §1.6, Theorem 1.25, printed pp. 22–23
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorem 3.12
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, Theorem 3.12, printed pp. 60–62
---

## Statement refuted

Not every bounded connected open set is a Sobolev extension domain. In
$\mathbb R^2$ let
$$C=\{(x,y):x\ge0,\ |y|\le x^2\},\qquad \Omega=B(0,1)\setminus C .$$
Then $\Omega$ is a bounded connected open set with an inward cusp at the
origin, and the branch $u=\arg(x+iy)/(2\pi)$, $0<\arg<2\pi$, of the argument on
$\Omega$ lies in $W^{1,3/2}(\Omega)$ but admits no extension to a class in
$W^{1,3/2}(\mathbb R^2)$. Consequently $\Omega$ is not a
$W^{1,3/2}$-extension domain in the sense of
[[def-sobolev-extension-domain-and-extension-operator]]. The obstruction is
the exact $L^{3/2}$ summability threshold: the gradient of the argument has
size $1/(2\pi r)$, which is integrable to the power $3/2$ on $\Omega$ but
forces any extension to spend more than $c/x$ of vertical $L^{3/2}$ derivative energy on the
gap of width $2x^2$ at distance $x$ from the tip.

## Facts & Assumptions

**Given:** the Axiom of Choice; the set $C=\{(x,y)\in\mathbb R^2:x\ge0,\ |y|\le x^2\}$; the open set $\Omega=B(0,1)\setminus C$; the branch $u=\arg(x+iy)/(2\pi)$ with $0<\arg<2\pi$; and $p=3/2$.

[F1] Under the assumed Axiom of Choice, ACL characterisation, $1\le p<\infty$: $w\in W^{1,p}(\Omega)$ if and only if $w\in L^p(\Omega)$ and $w$ has a measurable ACL representative $w^*$ whose classical coordinate derivatives exist almost everywhere, are measurable, and lie in $L^p(\Omega)$; in that case $\partial_iw^*$ represents $D_iw$ ([[thm-acl-characterisation-of-w-one-p]]).

[F2] Polar coordinates: for Borel measurable $f\ge0$, $\int_{\mathbb R^2}f\,d\lambda_2=\int_0^\infty\int_{S^1}f(r\omega)r\,d\sigma(\omega)dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] Tonelli–Fubini for the identification of $\lambda_2$ with the completion of the product of the two Lebesgue measures ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F4] Hölder's inequality on an interval of length $2x^2$: for $1<r<\infty$ and $f\in L^r$, $\int_{a}^{b}|f|\le(b-a)^{1/r'}\|f\|_{L^r(a,b)}$ with $r'$ the conjugate exponent ([[thm-holder-inequality-for-integrals]]).

[F5] A $C^1$ function on an open set has its classical partial derivatives as weak derivatives there ([[lem-classical-derivatives-are-weak-derivatives]]), and the chain rule for the polar coordinate function $(x,y)\mapsto\arg(x+iy)$ gives $\nabla u=(-y,x)/(2\pi(x^2+y^2))$ ([[thm-chain-rule-for-total-derivatives]]).

[F6] $W^{1,3/2}$-extension domain: $\Omega$ is one exactly when there is a bounded linear operator $E:W^{1,3/2}(\Omega)\to W^{1,3/2}(\mathbb R^2)$ with $(Eu)|_\Omega=u$ almost everywhere for every class $u$ ([[def-sobolev-extension-domain-and-extension-operator]]).

[F7] For $1\le p<\infty$, the norm is $\|w\|_{W^{1,p}(\Omega)}=(\|w\|_{L^p(\Omega)}^p+\|\partial_xw\|_{L^p(\Omega)}^p+\|\partial_yw\|_{L^p(\Omega)}^p)^{1/p}$; at $p=\infty$ it is $\max\{\|w\|_{L^\infty(\Omega)},\|\partial_xw\|_{L^\infty(\Omega)},\|\partial_yw\|_{L^\infty(\Omega)}\}$ ([[def-sobolev-space-wkp-and-its-norm]]).

**Choice use.** The Axiom of Choice licenses the ACL interface [F1] and its Countable-Choice and Dependent-Choice prerequisites. Its countable instance also licenses the polar-coordinate and completed-product interfaces [F2]–[F3] and the Sobolev conventions. The vertical-section argument makes no further selections.

## Counterexample

1.1 On $\Omega$ the branch $u$ is real-valued with $0<u<1$, the function $u$ is $C^\infty$, and by [F5] $$|\nabla u(x,y)|=\frac{1}{2\pi\sqrt{x^2+y^2}}=\frac{1}{2\pi r}$$ at every point of $\Omega$; $\Omega$ is open and bounded. It is path connected: on every circle $|z|=r<1$, the removed cusp occupies an arc around the positive real axis, while either complementary arc from a point of $\Omega$ to $(-r,0)$ stays in $\Omega$; the negative real segment then joins $(-r,0)$ to $(-1/2,0)$. [F5, given]

2.1 Integrability. Since $|u|\le1$ and $\Omega\subseteq B(0,1)$ has finite area, $\int_\Omega|u|^{3/2}<\infty$; and [F2] gives $$\int_\Omega|\nabla u|^{3/2}\,dx\,dy\le(2\pi)^{-3/2}\int_0^1r^{-3/2}\,2\pi r\,dr=(2\pi)^{-1/2}\int_0^1r^{-1/2}\,dr=2(2\pi)^{-1/2}<\infty.$$ [F2, step 1.1]

3.1 Consequently $u\in W^{1,3/2}(\Omega)$: the $C^\infty$ representative of step 1.1 is ACL with classical derivatives $\partial_xu,\partial_yu$, which are measurable and, by step 2.1, lie in $L^{3/2}(\Omega)$, and $u\in L^{3/2}(\Omega)$; the implication of [F1] applies. [F1, step 1.1, step 2.1]

4.1 Suppose $U\in W^{1,3/2}(\mathbb R^2)$ satisfies $U|_\Omega=u$ almost everywhere, and take its ACL representative $U^*$ from [F1]. For almost every $x\in(0,1/2)$: the vertical section $U^*(x,\cdot)$ is absolutely continuous on the compact interval $[-\sqrt{1-x^2},\sqrt{1-x^2}]$; since $U^*=u$ almost everywhere on $\Omega$ while $u$ is continuous on each of the two open pieces of the section, $U^*$ agrees on each piece with the continuous function $y\mapsto u(x,y)$, so the values at the two ends of the gap are $$\textstyle U^*(x,x^2)=\frac{\arctan x}{2\pi},\qquad U^*(x,-x^2)=1-\frac{\arctan x}{2\pi}.$$ [F1, F3, step 3.1]

5.1 Gap energy. For those $x$ the difference of the two values of step 4.1 is $1-\arctan(x)/\pi>1/2$, so by the fundamental theorem for the absolutely continuous section and [F4] $$\frac12<\Bigl|\int_{-x^2}^{x^2}\partial_yU^*(x,y)\,dy\Bigr|\le(2x^2)^{1/3}\Bigl(\int_{-x^2}^{x^2}|\partial_yU^*|^{3/2}dy\Bigr)^{2/3},$$ hence $$\int_{-x^2}^{x^2}|\partial_yU^*(x,y)|^{3/2}dy\ge(1/2)^{3/2}(2x^2)^{-1/2}=\tfrac14\,x^{-1}.$$ [F4, step 4.1]

6.1 Integrating the lower bound of step 5.1 over $x\in(0,1/2)$ gives $+\infty$, while Tonelli's theorem bounds the same double integral by $\int_{\mathbb R^2}|\partial_yU|^{3/2}<\infty$, since $\partial_yU^*$ represents the $L^{3/2}$ class $\partial_yU$ by [F1]; this contradiction shows that no such $U$ exists. [F1, F3, step 5.1]

7.1 Therefore $\Omega$ is not a $W^{1,3/2}$-extension domain: if a bounded linear extension operator existed, [F6] applied to the class $u\in W^{1,3/2}(\Omega)$ of step 3.1 would produce exactly the extension $U$ excluded in step 6.1, with the norm bound of [F7] playing no role in the contradiction because the obstruction already lies in the membership. [F6, F7, step 3.1, step 6.1] ∎
