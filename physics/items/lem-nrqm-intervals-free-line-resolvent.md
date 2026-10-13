---
id: lem-nrqm-intervals-free-line-resolvent
aliases: [nrqm-intervals-and-contacts-free-line-resolvent]
kind: lemma
domain: mathematics
title: "The free-line resolvent kernel and its inverse operator"
status: published
origin: pipeline
dependency_level: 4
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-integration-by-parts, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-complex-translation-and-approximate-identity-interfaces, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-complex-exponential, thm-termwise-differentiation-of-complex-power-series, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-termwise-differentiation-of-complex-power-series: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.2, Lemma 9.7, equations (9.27)-(9.28) pp. 188-189 (Green-kernel background; the full-line exponential kernel and both inverse identities are proved locally)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (American Mathematical Society, Graduate Studies in Mathematics 140), Chapter 3 pp. 55-74 (linear systems, variation of constants and exponential decay estimates)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Statement

Assume the Axioms of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $z\in\mathbb C\setminus[0,\infty)$ and let
$k\in\mathbb C$ be the unique complex number with $k^2=-z$ and $\operatorname{Re}k>0$.
Put
$G_z(t):=\frac{1}{2k}e^{-k|t|}\qquad(t\in\mathbb R),$
and let $A_0$ be the free one-dimensional operator of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b) with $d=1$, $c=4\pi^2$ and $b=0$: $D(A_0)=H^2(\mathbb R)$ and
$A_0u=-D^2u$ for every $u\in H^2(\mathbb R)$, where $D^2$ is the second weak
derivative of [[def-nrqm-intervals-hilbert-sobolev-spaces]]. Write
$\sigma:=\operatorname{Re}k>0$. Then:

(a) $G_z\in H^1(\mathbb R)\cap L^1(\mathbb R)\cap L^2(\mathbb R)$, its weak
derivative is the class of $t\mapsto-\tfrac12\operatorname{sgn}(t)e^{-k|t|}$,
and
$\|G_z\|_{L^1}=\frac{1}{|k|\sigma},\qquad
\|G_z\|_{L^2}=\frac{1}{2|k|\sqrt{\sigma}},\qquad
\|DG_z\|_{L^1}=\frac{1}{\sigma};$

(b) for every $f\in L^2(\mathbb R)$ the convolution
$u:=G_z*f$, $u(x)=\int_{\mathbb R}G_z(x-y)f(y)dy$, lies in $H^2(\mathbb R)$
with
$\|u\|_{L^2}\le\|G_z\|_{L^1}\|f\|_{L^2},\qquad
\|u\|_{L^\infty}\le\frac{1}{2|k|\sqrt\sigma}\|f\|_{L^2},$
and $A_0u-zu=f$;

(c) the linear map $R_0(z):L^2(\mathbb R)\to L^2(\mathbb R)$, $f\mapsto G_z*f$
is bounded with range exactly $H^2(\mathbb R)$, and
$(A_0-z)R_0(z)=I_{L^2},\qquad R_0(z)(A_0-z)=I_{H^2};$
in particular $R_0(z)=(A_0-z)^{-1}$ and $A_0-z$ is a bijection from $H^2(\mathbb R)$
onto $L^2(\mathbb R)$;

(d) $(-\tfrac{d^2}{dx^2}-z)G_z=\delta_0$ in the sense of distributions: for
every $\varphi\in C_c^\infty(\mathbb R)$,
$\int_{\mathbb R}G_z(x)\bigl(-\varphi''(x)-z\varphi(x)\bigr)dx=\varphi(0).$

## Facts & Assumptions

**Given:** $z\notin[0,\infty)$, the root $k$ with $k^2=-z$, $\operatorname{Re}k=\sigma>0$, and the kernel $G_z$.

[F1] $A_0$ of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (b) with $(d,c,b)=(1,4\pi^2,0)$ is self-adjoint with domain $D(A_0)=H^2(\mathbb R)=W^{2,2}(\mathbb R;\mathbb C)$ of [[def-nrqm-intervals-hilbert-sobolev-spaces]], and $A_0f=-f''$ for Schwartz $f$. For $u\in H^2(\mathbb R)$ one has $A_0u=-D^2u$: for every Schwartz $\varphi$, $\langle A_0u,\varphi\rangle=\langle u,A_0\varphi\rangle=-\langle u,\varphi''\rangle=\langle -D^2u,\varphi\rangle$ by [[lem-nrqm-intervals-integration-by-parts]] clause (d) applied twice, and Schwartz functions are dense in $L^2$.

[F2] For a class $g\in H^1(\mathbb R)$, the translate $g_y:=g(\cdot-y)$ has weak derivative $Dg(\cdot-y)$: the defining test identity is invariant under the change of variables $x\mapsto x+y$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]]).

[F3] Complex convolution with $K\in L^1(\mathbb R)$ satisfies $\|K*f\|_{L^2}\le\|K\|_{L^1}\|f\|_{L^2}$, and $K*f$ is defined a.e.; the integral $\int_{\mathbb R}|K(x-y)||f(y)|dy$ is finite for almost every $x$ ([[lem-complex-translation-and-approximate-identity-interfaces]]). Also $|u(x)|\le\|G_z\|_{L^2}\|f\|_{L^2}$ by Cauchy-Schwarz ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F4] The complex exponential is differentiable with $\exp'(z)=\exp z$ at every $z\in\mathbb C$, by termwise differentiation of its infinite-radius power series ([[thm-termwise-differentiation-of-complex-power-series]], [[def-complex-exponential]]). For fixed $k\ne0$ and real $t$, taking the increment $-kh$ in the defining complex difference quotient gives $\frac{d}{dt}e^{-kt}=-k e^{-kt}$; the same quotient argument applies to $e^{kt}$.

[F5] For real $x,y$, $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]); hence $|e^{-k|t|}|=e^{-\sigma|t|}$ when $\sigma=\operatorname{Re}k$.

[F6] For $\sigma>0$ and $\lambda\in\mathbb C$ with $\operatorname{Re}\lambda>0$, [F4] and the fundamental theorem of calculus give $\int_0^R e^{-\lambda t}dt=(1-e^{-\lambda R})/\lambda$ for finite $R$; letting $R\to\infty$ gives $\int_0^\infty e^{-\lambda t}dt=\lambda^{-1}$ because [F5] gives $|e^{-\lambda R}|=e^{-R\operatorname{Re}\lambda}\to0$. Taking $\lambda=2\sigma$ gives $\int_0^\infty e^{-2\sigma t}dt=(2\sigma)^{-1}$.

## Proof

1.1 [Elementary properties of $G_z$] Since $z\notin[0,\infty)$, $k\ne0$. By [F5], $t\mapsto e^{-k|t|}$ is differentiable on each half-line, continuous at $0$, and locally absolutely continuous, with a.e. derivative $-k\operatorname{sgn}(t)e^{-k|t|}$. This derivative is in $L^1\cap L^\infty$ by [F6], so $G_z\in H^1(\mathbb R)$ and $DG_z(t)=-\tfrac12\operatorname{sgn}(t)e^{-k|t|}$; also $DG_z\in L^1\cap L^\infty$. Using [F4] and [F6], $\|G_z\|_{L^1}=\frac{1}{2|k|}\int_{\mathbb R}e^{-\sigma|t|}dt =\frac{1}{|k|\sigma},\qquad \|G_z\|_{L^2}^2=\frac{1}{4|k|^2}\int_{\mathbb R}e^{-2\sigma|t|}dt =\frac{1}{4|k|^2\sigma},$ and $\|DG_z\|_{L^1}=\frac12\int_{\mathbb R}e^{-\sigma|t|}dt=\sigma^{-1}$. This is (a). [F4, F5, F6, given, algebra]

2.1 [$G_z*f$ solves the resolvent equation] Let $f\in L^2(\mathbb R)$ and $u:=G_z*f$. By [F3], $u\in L^2$ with $\|u\|_{L^2}\le\|G_z\|_{L^1}\|f\|_{L^2}$ and $\|u\|_\infty\le\|G_z\|_{L^2}\|f\|_{L^2}$. We show that $u$ has weak first derivative $w:=DG_z*f$: for a test function $\varphi$, Fubini for the absolutely integrable integrand $|G_z(x-y)f(y)\varphi'(x)|$ (its integral is at most $\|G_z\|_{L^1}\|f\|_{L^2}\|\varphi'\|_{L^2}$) gives $\int_{\mathbb R}u(x)\varphi'(x)dx =\int_{\mathbb R}f(y)\Bigl(\int_{\mathbb R}G_z(x-y)\varphi'(x)dx\Bigr)dy .$ For fixed $y$, the inner integral equals $-\int_{\mathbb R}DG_z(x-y)\varphi(x)dx$ by [F2] and the integration by parts identity [[lem-nrqm-intervals-integration-by-parts]] clause (d) applied to the $H^1$ classes $G_z(\cdot-y)$ and $\varphi$. Substituting and applying Fubini again gives $\int u\varphi'=-\int w\varphi$ for every test $\varphi$, so $w=Du$ is the weak first derivative of $u$. [step 1.1, F2, F3, given, algebra]

2.2 [Injectivity on the free domain] Suppose $v\in H^2(\mathbb R)$ satisfies $A_0v=zv$, i.e. $-D^2v=zv$ by [F1]. Since $v$ is continuous with $D^2v=-zv$ a continuous class, $v$ is a classical $C^2$ solution of $v''=k^2v$. Put $g(x):=v(x)e^{-kx}$; then $g\in C^2$ and $g''+2kg'=(v''-2kv'+k^2v)e^{-kx}+2k(v'-kv)e^{-kx}=0$, so $(g'e^{2kx})'=0$ and hence $g'=Ce^{-2kx}$, $g=C_1+C_2e^{-2kx}$; therefore $v=C_1e^{kx}+C_2e^{-kx}$. By [F5], $|e^{kx}|=e^{\sigma x}\to\infty$ as $x\to+\infty$ and $|e^{-kx}|=e^{-\sigma x}\to\infty$ as $x\to-\infty$; since $v\in L^2$, necessarily $C_1=C_2=0$, so $v=0$. [step 1.1, F1, F4, F5, given, algebra]

3.1 [Second weak derivative] We show that the weak derivative of $w$ is the class $k^2u-f$. Let $\varphi\in C_c^\infty(\mathbb R)$. As in step 2.1, Fubini reduces $\int w\varphi'$ to $\int f(y)I(y)dy$ with $I(y):=\int_{\mathbb R}DG_z(x-y)\varphi'(x)dx$. Split $I(y)=\int_{-\infty}^{y}+\int_{y}^{\infty}$; on each half-line the integrand $x\mapsto DG_z(x-y)$ is $C^1$ with derivative $k^2G_z(x-y)$ (direct differentiation of $-\tfrac12\operatorname{sgn}(t)e^{-k|t|}$ away from $t=0$), and $DG_z(y^+)=-\tfrac12$, $DG_z(y^-)=\tfrac12$. Integration by parts on each half-line (the boundary terms at $\pm\infty$ vanish because $\varphi$ has compact support) gives $I(y)=\bigl(DG_z(y^-)-DG_z(y^+)\bigr)\varphi(y) -\int_{\mathbb R}k^2G_z(x-y)\varphi(x)dx =\varphi(y)-k^2\int_{\mathbb R}G_z(x-y)\varphi(x)dx .$ Hence $\int w\varphi'=\int f\varphi-k^2\int u\varphi =-\int(k^2u-f)\varphi$ for every test $\varphi$, so the weak derivative of $w$ is the $L^2$ class $k^2u-f$. Thus $u\in H^2(\mathbb R)$ with $D^2u=k^2u-f$, and since $k^2=-z$, $-D^2u-zu=-(k^2u-f)-zu=f-(k^2+z)u=f .$ By [F1], $A_0u=-D^2u$, so $A_0u-zu=f$. This proves (b). [step 2.1, F1, given, algebra]

4.1 [The two-sided resolvent identity] Step 3.1 shows $(A_0-z)R_0(z)f=f$ for every $f\in L^2(\mathbb R)$, so $(A_0-z)R_0(z)=I_{L^2}$ and the range of $R_0(z)$ is contained in $D(A_0)=H^2(\mathbb R)$. Conversely let $u\in H^2(\mathbb R)$ and put $f:=A_0u-zu\in L^2$. Step 3.1 applied to $f$ gives $(A_0-z)R_0(z)f=f=(A_0-z)u$, and step 2.2 shows that $A_0-z$ is injective on $H^2(\mathbb R)$; hence $R_0(z)f=u$, so $R_0(z)(A_0-z)=I_{H^2}$ and the range of $R_0(z)$ is exactly $H^2(\mathbb R)$. This is (c). [step 3.1, step 2.2, F1, given]

5.1 [Distributional identity] Let $\varphi\in C_c^\infty(\mathbb R)$. Integrating by parts once ($G_z$ is continuous and $\varphi'$ has compact support, so the boundary terms vanish at both ends) and using the value of $I(0)$ computed in step 3.1, $\int_{\mathbb R}G_z\varphi'' =-\int_{\mathbb R}DG_z\varphi' =-\varphi(0)+k^2\int_{\mathbb R}G_z\varphi =-\varphi(0)-z\int_{\mathbb R}G_z\varphi,$ because $DG_z(0^-)-DG_z(0^+)=\tfrac12-(-\tfrac12)=1$ and $k^2=-z$. Rearranging gives $\int_{\mathbb R}G_z(-\varphi''-z\varphi)=\varphi(0)$, which is (d). [step 3.1, given, algebra] ∎
