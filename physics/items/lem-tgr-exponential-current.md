---
id: lem-tgr-exponential-current
kind: lemma
title: Positive chiral current and exponential test-coordinate model
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - lem-qft-segal-weyl-domain
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - thm-integration-by-parts
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - cor-exponential-is-a-bijection-onto-positive-reals
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-exponential-reciprocal-and-positivity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - lem-tgr-positive-damping-boundary
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  lem-tgr-positive-damping-boundary: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert M. Wald, The Thermodynamics of Black Holes
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: Section 3, PDF pp. 11–16; reviewed here for the collapse, exponential redshift, and free-field thermal context only.
    - title: Crispino, Higuchi, and Matsas, The Unruh effect and its applications
      url: https://arxiv.org/pdf/0710.5373
      locator: Section III.A.1–2, PDF pp. 19–22, equations 3.4–3.28 and surrounding assumptions; detector-rate calculations are context, not this lemma's proof.
    - title: Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect
      url: https://arxiv.org/pdf/gr-qc/0308048
      locator: Section 6.2.1–6.2.3, PDF pp. 32–39; reviewed for the exponential near-horizon relation and thermal mode context only.
verification:
  precheck: pass
---

## Definitions and conventions

Use $\mathcal D(\mathbb R;\mathbb C)=C_c^\infty(\mathbb R;\mathbb C)$ with the
fixed-support Fr\'echet seminorms and locally convex inductive-limit topology
defined in [[lem-tgr-positive-damping-boundary]]. A distribution is a
continuous complex-linear functional on this test space, paired bilinearly.
Write $\mathcal D_{\rm fin}$ for the algebraic direct sum of the symmetric
$n$-particle sectors in [[def-qft-fock-and-test-spaces]]; it is dense and
invariant under the creation and annihilation maps by
[[lem-qft-fock-ccr-car]]. A linear map $T$ from compact smooth tests to operators
on $\mathcal D_{\rm fin}$ is an operator-valued distribution on this domain
when, for every fixed $\Psi,\Xi\in\mathcal D_{\rm fin}$, the coefficient
$f\mapsto\langle\Psi,T(f)\Xi\rangle_2$ is a distribution in the preceding
sense. The same Fock definition gives
$$\mathcal F_s(\mathcal H)=\{(\Psi_n)_{n\ge0}:\Psi_n\in\mathcal H_s^{(n)},\ \sum_{n\ge0}\|\Psi_n\|^2<\infty\}$$
and vacuum $\Omega=(1,0,0,\ldots)$. The closed Segal field of
[[lem-qft-segal-weyl-domain]] is the closure of
$\phi_0(h)=2^{-1/2}(a^\dagger(h)+a(h))$ on $\mathcal D_{\rm fin}$, and that
supplier proves the Weyl group $t\mapsto W(th)$ has generator $i\Phi(h)$.

For $f,g\in\mathcal D(\mathbb R;\mathbb C)$ set
$$\varphi_{f,g}(s):=\int_{\mathbb R}\overline{f(x+s)}g(x)\,dx.$$
A distribution $T$ is of positive type in this translation-invariant
two-point convention when $\langle T,\varphi_{f,f}\rangle\in[0,\infty)$ for
every such $f$. This is positivity of the tested covariance form, not positivity
of an operator.

For the current, the vacuum two-point form means
$$W(f,g):=\langle\Omega,J(\overline f)J(g)\Omega\rangle_2;$$
a distribution $C$ is its covariance kernel in the convention above when
$W(f,g)=\langle C,\varphi_{f,g}\rangle$ for all compact smooth $f,g$.

For $w\in\mathbb C$, define
$$\sinh w:=\frac{e^w-e^{-w}}2,\qquad \cosh w:=\frac{e^w+e^{-w}}2,$$
using the complex exponential of [[def-complex-exponential]], which extends
the real exponential by [[thm-complex-exponential-addition-and-real-extension]],
and define
$\operatorname{csch}w:=1/\sinh w$ where $\sinh w\ne0$. Their derivatives are
$\sinh' w=\cosh w$ and $\cosh' w=\sinh w$ by
[[thm-complex-exponential-is-entire-with-derivative-itself]] and the chain
rule. For real $x$, $\cosh x>0$ by positivity of the real exponential
([[cor-exponential-reciprocal-and-positivity]]). In this
item, for $b>0$ with units of inverse length and a length variable $s$, set
$$Y_b(s):=\frac{\sinh(bs)}b.$$
This is a smooth increasing diffeomorphism of $\mathbb R$: the real exponential
series [[def-real-exponential-function-and-e]] gives $e^t\ge1+t$ for $t\ge0$,
and reciprocal positivity [[cor-exponential-reciprocal-and-positivity]] gives
$e^{-t}\le1$ there. Thus $\sinh t\ge t/2$ for $t\ge0$, while
$\sinh(-t)=-\sinh t$; in particular $\sinh t>0$ for $t>0$ and
$\sinh t\to\pm\infty$ as $t\to\pm\infty$. Also,
$$\sinh v-\sinh u=2\cosh\!\left(\frac{u+v}2\right)\sinh\!\left(\frac{v-u}2\right)>0\quad(v>u).$$
Continuity and the intermediate-value property for real continuous functions
(also used in the proof of [[cor-exponential-is-a-bijection-onto-positive-reals]])
give its range as $\mathbb R$. If $H_b=Y_b^{-1}$, monotonicity gives continuity
of $H_b$, and the difference quotient at $y=Y_b(s)$ gives
$$H_b'(y)=\frac1{Y_b'(H_b(y))}=\frac1{\cosh(bH_b(y))}.$$
The right-hand side is smooth; induction with the chain rule shows $H_b$ is
$C^\infty$, which is the inverse regularity used in the test-coordinate
pullback below.

The real logarithm is also $C^\infty$ on $(0,\infty)$: its supplied derivative
is $1/x$ [[thm-logarithm-derivative-and-integral]], and direct algebra gives
$$\lim_{h\to0}\frac{(x+h)^{-n}-x^{-n}}h=-n x^{-n-1}\quad(x>0,\ n\ge1).$$
Induction therefore differentiates $\log'(x)=x^{-1}$ to every order. Hence
$U_\kappa$ and $u_\kappa$ in the Statement are smooth inverse coordinates.

The one-dimensional chiral model here is exactly the single positive-frequency
sector $k\in(0,\infty)$ in $\mathcal H=L^2((0,\infty),dk;\mathbb C)$, with no
negative-frequency sector; $k$ is Fourier-dual to the length coordinate $U$.
With dimensionless compact tests, $j_\kappa$ is a model density per unit
length, $C_\kappa$ has units of inverse length squared, and its Fourier
spectrum has units of inverse length; these are mathematical model units, not
empirical assignments.

## Statement

Assume Countable Choice. Let
$$\mathcal H=L^2((0,\infty),dk;\mathbb C),\qquad \langle h,q\rangle_2=\int_0^\infty\overline{h(k)}q(k)\,dk,$$
using the second-variable-linear convention. For
$f\in\mathcal D(\mathbb R;\mathbb C)=C_c^\infty(\mathbb R;\mathbb C)$ define
$$h_f(k)=\sqrt{\frac{k}{4\pi}}\int_{\mathbb R}f(U)e^{ikU}\,dU\quad(k>0).$$
Then $h_f,h_{\bar f}\in\mathcal H$, and $f\mapsto h_f$ is continuous on each fixed-compact-support test space. With the bosonic Fock conventions of [[def-qft-fock-and-test-spaces]], define on its finite-particle domain
$$J(f)=a(h_{\bar f})+a^\dagger(h_f).$$
This is a complex-linear operator-valued distribution on that invariant domain. For real $f$, its closure is $\overline{J(f)}=\sqrt2\,\Phi(h_f)$, where $\Phi(h_f)$ is the closed Segal field of [[lem-qft-segal-weyl-domain]]; the corresponding Weyl one-parameter group has generator $i\Phi(h_f)$. The vacuum two-point form is positive type and has boundary kernel
$$C(s)=-\frac{1}{4\pi(s-i0)^2},$$
where $s-i0$ means the distributional limit from $s-i\epsilon$, $\epsilon\downarrow0$.

For $\kappa>0$ with units of inverse length, let $u,U$ have units of length and set
$$U_\kappa(u)=-\kappa^{-1}e^{-\kappa u},\qquad u_\kappa(U)=-\kappa^{-1}\log(-\kappa U)\quad(U<0).$$
For $g\in\mathcal D(\mathbb R;\mathbb C)$ put $f_g(U)=g(u_\kappa(U))$ for $U<0$ and $f_g(U)=0$ for $U\ge0$, and define $j_\kappa(g)=J(f_g)$. The zero extension is smooth and compactly supported. Its vacuum covariance is the positive-type distribution
$$C_\kappa(s)=-\frac{\kappa^2}{16\pi}\,\operatorname{csch}^2\!\left(\frac{\kappa}{2}(s-i0)\right).$$
Here the notation is fixed as follows: for $b=\kappa/2$, set $Y_b(s)=\sinh(bs)/b$. Since $Y_b'(s)=\cosh(bs)>0$ and $Y_b(s)\to\pm\infty$ as $s\to\pm\infty$, it is a smooth increasing diffeomorphism. Define $\operatorname{csch}^2(b(s-i0)):=b^{-2}Y_b^*((y-i0)^{-2})$, where
$$\langle Y_b^*T,\varphi\rangle:=\left\langle T,\varphi(Y_b^{-1}(y))(Y_b^{-1})'(y)\right\rangle.$$
This is a one-dimensional chiral test-coordinate model. It asserts no restriction of a four-dimensional field to a null curve.

## Facts & Assumptions

**Given:** Countable Choice; the Lebesgue measure on $(0,\infty)$; complex compactly supported smooth tests; $\kappa>0$; and length-coordinate variables $u,U,s$ with inverse-length Fourier variable $k$.

[A1] Countable Choice is assumed for the $L^2$ and Fock constructions. [[def-countable-choice]]

[F1] [[def-qft-fock-and-test-spaces]] fixes $\mathcal D(\mathbb R;\mathbb C)$, the second-variable-linear pairing, symmetric Fock sectors, the vacuum $\Omega$, the finite-particle domain, and the sector creation and annihilation formulas.

[F2] [[lem-qft-fock-ccr-car]] gives the CCR on the finite-particle domain, invariance of that domain, and sector operator bounds $\|a_n(h)\|\le\sqrt n\|h\|$ and $\|a_n^\dagger(h)\|\le\sqrt{n+1}\|h\|$.

[F3] [[lem-qft-segal-weyl-domain]] states that for separable complex Hilbert $\mathcal H$, $2^{-1/2}(a^\dagger(h)+a(h))$ is essentially self-adjoint on the finite-particle domain, and the Weyl group $t\mapsto W(th)$ has generator $i\Phi(h)$.

[F4] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] gives completeness of complex $L^2$ under Countable Choice with pairing $\int f\overline q$; conjugating that pairing preserves the norm and completeness and gives the stated second-variable-linear convention.

[F5] [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]] gives a countable dense real rational box-step family $D$ in real $L^2(\mathbb R)$. The countable family $D+iD$ is dense in complex $L^2(\mathbb R;\mathbb C)$ by approximating real and imaginary parts separately; zero extension and restriction then give separability of $\mathcal H$, as detailed in step 1.1.

[F6] [[thm-integration-by-parts]] applies to the real and imaginary parts of compactly supported $C^1$ functions on bounded intervals; [[thm-complex-exponential-is-entire-with-derivative-itself]] and [[thm-chain-rule-for-total-derivatives]] give $\frac{d}{dU}e^{ikU}=ik e^{ikU}$.

[F7] [[thm-dominated-convergence]] passes limits through the test-paired spectral integrals whenever the rapid-decay majorant displayed in the proof is integrable.

[F8] Absolutely integrable functions on sigma-finite product spaces can be integrated in either order. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F9] [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[cor-exponential-is-a-bijection-onto-positive-reals]], [[def-natural-logarithm]], and [[thm-logarithm-derivative-and-integral]] give the stated smooth diffeomorphism $U_\kappa:\mathbb R\to(-\infty,0)$ and its inverse.

[F10] [[cor-c-one-change-of-variables-for-l-one-functions]] gives the Lebesgue change-of-variables formula for the smooth diffeomorphisms used in the test-coordinate calculation.

[F11] For vectors in a complex inner-product space, $|\langle\Psi,\Xi\rangle|\le\|\Psi\|\,\|\Xi\|$. Conjugating the second-variable-linear Fock pairing in [F1] gives a first-variable-linear pairing with the same norm, so the published statement applies. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F12] For smooth real $d_\epsilon$ uniformly positive and bounded with bounded first and second $s$-derivatives on compact parameter sets, the tested kernels $-(s-i\epsilon d_\epsilon(v,s))^{-2}$ converge to the lower boundary $-(s-i0)^{-2}$, uniformly on compact parameter supports. [[lem-tgr-positive-damping-boundary]]

## Proof

1.1 By [F4], $\mathcal H$ is a complex Hilbert space; the change from its first-variable-linear inner product to $\langle h,q\rangle_2=\int\bar hq$ is conjugation and preserves its norm. Let $D$ be the countable dense real rational box-step family in real $L^2(\mathbb R)$ from [F5]. The family $D+iD=\{d_1+id_2:d_1,d_2\in D\}$ is countable. Given $h\in\mathcal H$ and $\delta>0$, extend $h$ by zero to $\tilde h\in L^2(\mathbb R;\mathbb C)$. Its real and imaginary parts lie in real $L^2(\mathbb R)$; choose $d_1,d_2\in D$ with $\|\operatorname{Re}\tilde h-d_1\|_2<\delta/2$ and $\|\operatorname{Im}\tilde h-d_2\|_2<\delta/2$. Pointwise $|a+ic|^2=a^2+c^2$ for real $a,c$, so $\|\tilde h-(d_1+id_2)\|_2^2<\delta^2/2$. Restriction to $(0,\infty)$ cannot increase this norm; hence the restricted countable family is dense in $\mathcal H$. Thus $\mathcal H$ is separable and [F3] applies. [A1, F4, F5, construct, algebra]

1.2 Fix $f$ supported in a compact interval $K$ and write $F_f(k)=\int_K f(U)e^{ikU}\,dU$. For $0<k\le1$, $|F_f(k)|\le\|f\|_1$. For $k\ge1$, two integrations by parts with vanishing endpoint terms give $|F_f(k)|\le k^{-2}\|f''\|_1$. Therefore
$$\|h_f\|_2^2=\frac1{4\pi}\int_0^\infty k|F_f(k)|^2\,dk\le\frac{\|f\|_1^2+\|f''\|_1^2}{8\pi}<\infty.$$
The same estimate holds for $\bar f$; on fixed $K$, each $L^1$ norm is bounded by $|K|$ times the corresponding supremum seminorm. This proves both membership in $\mathcal H$ and continuity on each fixed-support test space. [F1, F6, algebra]

2.1 Since $f\mapsto h_f$ is linear, $f\mapsto h_{\bar f}$ is conjugate-linear, annihilation is conjugate-linear in its one-particle argument, and creation is linear, $J$ is linear. Its two summands preserve the finite-particle domain by [F1]–[F2]. For fixed finite-particle vectors $\Psi,\Xi$, only finitely many sectors occur; Cauchy--Schwarz [F11] and the sector bounds [F2] bound $|\langle\Psi,J(f)\Xi\rangle_2|$ by a finite constant depending on $\Psi,\Xi$ times $\|h_f\|_2+\|h_{\bar f}\|_2$; hence each matrix coefficient is a continuous test distribution. If $f$ is real, $J(f)=a(h_f)+a^\dagger(h_f)=\sqrt2\,\phi_0(h_f)$, so [F3] gives $\overline{J(f)}=\sqrt2\Phi(h_f)$. Finally $J(g)\Omega=a^\dagger(h_g)\Omega$, and the sector formulas in [F1] give
$$\langle\Omega,J(\bar f)J(g)\Omega\rangle_2=\langle h_f,h_g\rangle_2.$$
In particular the form at $g=f$ is $\|h_f\|_2^2\ge0$. [F1, F2, F3, F11, step 1.1, step 1.2, algebra]

3.1 For $\epsilon>0$ and real $s$, direct integration with $\operatorname{Re}(\epsilon+is)>0$ gives
$$C_\epsilon(s):=\frac1{4\pi}\int_0^\infty k e^{-\epsilon k}e^{-iks}\,dk=-\frac1{4\pi(s-i\epsilon)^2}.$$
For $f,g\in C_c^\infty(\mathbb R)$, $\varphi_{f,g}(s)=\int_{\mathbb R}\overline{f(x+s)}g(x)\,dx$ is a compact smooth test, and Fubini [F8] gives $\widehat\varphi_{f,g}(k)=\overline{F_f(k)}F_g(k)$. Hence
$$\langle C_\epsilon,\varphi_{f,g}\rangle=\frac1{4\pi}\int_0^\infty k e^{-\epsilon k}\overline{F_f(k)}F_g(k)\,dk,$$
the damped vacuum covariance of step 2.1. For a general test $\varphi\in C_c^\infty(\mathbb R)$, its Fourier transform $\widehat\varphi(k)=\int\varphi(s)e^{-iks}\,ds$ satisfies $|\widehat\varphi(k)|\le k^{-3}\|\varphi^{(3)}\|_1$ for $k\ge1$ by [F6]. Thus $k|\widehat\varphi(k)|$ is integrable on $(0,\infty)$, and [F7] shows $\langle C_\epsilon,\varphi\rangle\to(4\pi)^{-1}\int_0^\infty k\widehat\varphi(k)\,dk$. This defines the boundary distribution $C(s)=-(4\pi)^{-1}(s-i0)^{-2}$ and, by the same domination on $\varphi_{f,g}$, its pairing is exactly the covariance in step 2.1. [F6, F7, F8, step 2.1, algebra]

4.1 By [F9], $U_\kappa$ is a smooth increasing diffeomorphism onto $(-\infty,0)$. If $g$ is supported in $[a,b]$, then $f_g$ is supported in the compact interval $[U_\kappa(a),U_\kappa(b)]\subset(-\infty,0)$, separated from $0$; its zero extension is smooth. The chain rule on this compact interval bounds every fixed-support derivative seminorm of $f_g$ by finitely many such seminorms of $g$, so [F1]–[F2] show $j_\kappa(g)=J(f_g)$ is well-defined and continuous. In the two-point test pairing the smooth change of variable contributes $U_\kappa'(u)U_\kappa'(u')$, where $U_\kappa'(u)=e^{-\kappa u}$. Put $v=(u+u')/2$, $s=u-u'$, and $b=\kappa/2$. Direct algebra gives
$$U_\kappa(u)-U_\kappa(u')=b^{-1}e^{-\kappa v}\sinh(bs),\qquad U_\kappa'(u)U_\kappa'(u')=e^{-2\kappa v}.$$
Applying [F10] to the damped kernel $C_\epsilon(U_\kappa(u)-U_\kappa(u'))U_\kappa'(u)U_\kappa'(u')$ yields
$$-\frac1{4\pi}\left(Y_b(s)-i\epsilon e^{\kappa v}\right)^{-2},\qquad Y_b(s)=\frac{\sinh(bs)}b.$$
The linear change $(u,u')\mapsto(v,s)$ has determinant $-1$, hence absolute Jacobian $1$. Now change variables $y=Y_b(s)$, which is the smooth increasing diffeomorphism defined in the Statement. In each test pairing this replaces $\psi(v,s)$ by the compact smooth test $\widetilde\psi(v,y)=\psi(v,Y_b^{-1}(y))(Y_b^{-1})'(y)$. The positive smooth damping $e^{\kappa v}$ is bounded above and below on each compact test support, so [F12] in the $y$-coordinate gives the boundary $-(4\pi)^{-1}Y_b^*((y-i0)^{-2})$. Since $b=\kappa/2$, this is exactly $C_\kappa(s)$ as defined in the Statement. For $0<\epsilon<\pi/(2b)$, one has $0<b\epsilon<\pi/2$, hence $\cos(b\epsilon)>0$ and $\tan(b\epsilon)>0$; the analytic regularization satisfies
$$\frac{\sinh(b(s-i\epsilon))}{b}=\cos(b\epsilon)\left(Y_b(s)-i\epsilon d_\epsilon(s)\right),\qquad d_\epsilon(s)=\frac{\cosh(bs)\tan(b\epsilon)}{b\epsilon}.$$
After the change of variable $y=Y_b(s)$, the damping is $\widetilde d_\epsilon(y)=d_\epsilon(Y_b^{-1}(y))$. On every compact support this family is smooth, bounded above and below positively, and converges smoothly to $\cosh(bY_b^{-1}(y))>0$, so it meets [F12] with $m=0$. Thus [F12] gives the same boundary for $\sinh(b(s-i\epsilon))^{-2}$; the scalar factor $\cos(b\epsilon)^{-2}$ tends to $1$. This identifies $C_\kappa$ with the lower boundary of $-\kappa^2(16\pi)^{-1}\operatorname{csch}^2(bz)$. [F1, F8, F9, F10, F12, step 3.1, algebra]

5.1 The notation $i0$ in the Statement is therefore the lower-half-plane boundary induced by the positive orientation $U_\kappa'(u)>0$; it is a distributional two-point covariance, not an ordinary value at $s=0$. The construction uses only smooth compact tests in one coordinate and makes no four-dimensional null pullback. [step 3.1, step 4.1] ∎
## Remarks

“Positive” refers to positive type of the vacuum covariance, as proved by $\langle h_f,h_f\rangle_2\ge0$; it does not assert that $J(f)$ is a positive operator. The cited curved-spacetime literature motivates the exponential coordinate model but is not a supplier for this Fock construction or its local distributional pullback. No collapse geometry, detector probability, experiment, or physical postulate is part of the lemma.
