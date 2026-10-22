---
id: lem-nrqmx-minimal-maximal-interval-laplacian-domains
kind: lemma
title: Minimal and maximal domains of the interval Laplacian
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-nrqm-intervals-endpoint-trace-and-half-line-decay
  - lem-nrqm-intervals-integration-by-parts
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - def-weak-derivative-of-a-locally-integrable-function
  - thm-holder-inequality-for-integrals
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - thm-closable-iff-adjoint-domain-is-dense
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-closable-iff-adjoint-domain-is-dense: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 9.1, Lemma 9.4 and regular-endpoint example, printed pp.184–185"
    - title: "Manuel Asorey, Alberto Ibort, and Giuseppe Marmo, Global Theory of Quantum Boundary Conditions and Topology Change"
      url: "https://arxiv.org/pdf/hep-th/0403048"
      locator: "Section 2, printed pp.4–6; Appendix A, printed p.20: interval Laplacian domain and boundary data"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let
$0<L<\infty$, let $H=L^2(0,L;\mathbb C)$, and use the spaces $H^1(0,L)$ and
$H^2(0,L)$ and their continuous endpoint traces defined by the one-dimensional
Sobolev suppliers. Define $T_c f=-D^2f$ on $D(T_c)=C_c^\infty(0,L)$. Then
$T_c$ is densely defined and symmetric, its adjoint is
$T_{\max}f=-D^2f$ on exactly $D(T_{\max})=H^2(0,L)$, and its closure
$T_{\min}=\overline{T_c}=T_c^{**}$ has domain
$$D(T_{\min})=\{f\in H^2(0,L): f(0)=f'(0)=f(L)=f'(L)=0\},$$
with $T_{\min}f=-D^2f$. The trace map
$\gamma:H^2(0,L)\to\mathbb C^4$ defined by
$\gamma(f)=(f(0),f(L),f'(0),f'(L))$ is surjective.

## Statement references

[[def-nrqm-intervals-hilbert-sobolev-spaces]]

[[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]

[[lem-nrqm-intervals-integration-by-parts]]

## Facts & Assumptions

**Given:** The interval, Hilbert space, test-function operator, and trace map
of the Statement. Derivatives are weak derivatives until a continuous
representative is identified.

[A1] Countable Choice, the Axiom of Choice, and Dependent Choice are the
explicit hypotheses of the interval integration-by-parts supplier.
[[def-countable-choice]] [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] $H^1(0,L)$ consists of $L^2$ classes with an $L^2$ weak derivative, and
$H^2(0,L)$ consists of those classes whose first and second weak derivatives
lie in $L^2$. Their norms and weak-derivative convention are fixed by
[[def-nrqm-intervals-hilbert-sobolev-spaces]] and
[[def-weak-derivative-of-a-locally-integrable-function]].

[F2] $H^1$ classes have continuous absolutely continuous representatives and
endpoint traces; for $f,g\in H^2(0,L)$,
$$\langle -D^2f,g\rangle-\langle f,-D^2g\rangle=\langle\Gamma_1 f,\Gamma_0 g\rangle-\langle\Gamma_0 f,\Gamma_1 g\rangle,$$
where $\Gamma_0 f=(f(0),f(L))$ and
$\Gamma_1 f=(f'(0),-f'(L))$
([[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]],
[[lem-nrqm-intervals-integration-by-parts]]).

[F3] $C_c^\infty(0,L)$ is dense in $L^2(0,L)$
([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F4] For a densely defined operator, $g\in D(T^*)$ precisely when
$f\mapsto\langle Tf,g\rangle$ is represented by a vector in the second
argument of $\langle f,\cdot\rangle$
([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F5] A densely defined symmetric operator is closable, its closure is its
double adjoint, and $T^*=(\overline T)^*$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[thm-closable-iff-adjoint-domain-is-dense]]).

[F6] On the finite interval $(0,L)$, Holder gives
$\int_0^L|h|\le\sqrt L\,\|h\|_{L^2(0,L)}$ for $h\in L^2(0,L)$
([[thm-holder-inequality-for-integrals]]).

[F7] The Lebesgue fundamental theorem for absolutely continuous functions
states that if $G:[a,b]\to\mathbb R$ is absolutely continuous, then $G'$ is
Lebesgue integrable and $G(b)-G(a)=\int_a^bG'$; apply it to the real and
imaginary parts of a smooth complex test function on each compact interval
([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[F8] Write $\lambda$ for Lebesgue measure on $(0,L)$; it is finite and hence
sigma-finite. Tonelli's theorem for two sigma-finite measure spaces gives,
for a nonnegative
product-measurable $q$, equality of its product integral and either iterated
integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F9] For two sigma-finite measure spaces, a product-measurable complex
function with integrable absolute value on the product has integrable
sections almost everywhere, and its product integral equals either iterated
integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Given:** The hypotheses and objects in the Statement.

1.1 Density follows from [F3]. For $f,g\in C_c^\infty(0,L)$, integration by
parts gives $\langle -f'',g\rangle=\langle f,-g''\rangle$, since both
functions and their derivatives vanish near the endpoints. Thus $T_c$ is
dense and symmetric. [A1, F2, F3]

1.2 Suppose $u\in L^2(0,L)$ has distributional second derivative
$D^2u=h\in L^2(0,L)$. By [F6], $h\in L^1(0,L)$. Define
$v(x)=\int_0^x h(t)\,dt$. Then $|v(x)|\le\|h\|_{L^1}\le\sqrt L\|h\|_2$,
so $v\in L^2(0,L)$. For every $\varphi\in C_c^\infty(0,L)$, choose a
measurable representative of $h$ and define
$$G(t,x):=\mathbf 1_{\{0<t<x<L\}}h(t)\varphi'(x),\qquad (t,x)\in(0,L)^2.$$
The function $q(t,x)=|h(t)||\varphi'(x)|$ is nonnegative and
product-measurable. By [F6], $h\in L^1(0,L)$. The test derivative
$\varphi'$ is continuous with compact support in $(0,L)$, hence belongs to
$L^2(0,L)$; [F6] then gives $\varphi'\in L^1(0,L)$. Tonelli [F8], applied only to
this nonnegative product, gives
$$\int_{(0,L)^2}q\,d(\lambda\times\lambda)=\left(\int_0^L|h(t)|\,dt\right)\left(\int_0^L|\varphi'(x)|\,dx\right)<\infty.$$
Since $|G|\le q$, this establishes $G\in L^1((0,L)^2)$ without using
Fubini to prove its own hypothesis. Its sections are integrable for every
parameter because $h,\varphi'\in L^1(0,L)$. Fubini [F9] therefore gives
$$\int_0^L v(x)\varphi'(x)\,dx=\int_0^L\int_0^x h(t)\varphi'(x)\,dt\,dx=\int_0^Lh(t)\left(\int_t^L\varphi'(x)\,dx\right)dt=-\int_0^Lh(t)\varphi(t)\,dt,$$
where [F7] applied to real and imaginary parts gives
$\int_t^L\varphi'(x)\,dx=\varphi(L)-\varphi(t)=-\varphi(t)$, since
$\varphi$ vanishes near $L$. Hence $Dv=h$ weakly and $v\in H^1$.
The distribution $Du-v$ has derivative zero. For every test function
$\varphi$ of integral zero, its primitive
$\psi(x)=\int_0^x\varphi(t)\,dt$ is compactly supported in $(0,L)$, and hence
$(Du-v)(\varphi)=(Du-v)(D\psi)=-(D(Du-v))(\psi)=0$. Obtain a test
function $\eta$ with integral one as follows. The constant function $1$ lies
in $L^2(0,L)$ with norm $\sqrt L$. By the density in [F3], choose
$\chi\in C_c^\infty(0,L)$ with $\|\chi-1\|_2<\sqrt L/2$; then
$\|\chi\|_2>\sqrt L/2$. Set $\eta=|\chi|^2/\|\chi\|_2^2$. It is a smooth
compactly supported test function and $\int_0^L\eta=1$. For arbitrary
$\varphi$,
$\varphi-(\int_0^L\varphi)\eta$ has integral zero, so
$(Du-v)(\varphi)=(Du-v)(\eta)\int_0^L\varphi$. Therefore $Du-v$ is a constant
distribution, $Du=v+c\in L^2$, and $u\in H^2(0,L)$ by [F1].
[A1, F1, F3, F6, F7, F8, F9]

1.3 The Hermite cubic polynomials
$h_{00}(s)=2s^3-3s^2+1$,
$h_{01}(s)=-2s^3+3s^2$,
$h_{10}(s)=s^3-2s^2+s$, and
$h_{11}(s)=s^3-s^2$ satisfy
the endpoint data
$(h_{00}(0),h_{00}(1),h_{00}'(0),h_{00}'(1))=(1,0,0,0)$,
$(h_{01}(0),h_{01}(1),h_{01}'(0),h_{01}'(1))=(0,1,0,0)$,
$(h_{10}(0),h_{10}(1),h_{10}'(0),h_{10}'(1))=(0,0,1,0)$, and
$(h_{11}(0),h_{11}(1),h_{11}'(0),h_{11}'(1))=(0,0,0,1)$.
Consequently, for arbitrary
$a_0,a_L,d_0,d_L\in\mathbb C$, the polynomial
$p(x)=a_0h_{00}(x/L)+a_Lh_{01}(x/L)
+Ld_0h_{10}(x/L)+Ld_Lh_{11}(x/L)$ has
$p(0)=a_0$, $p(L)=a_L$, $p'(0)=d_0$, and $p'(L)=d_L$. It belongs to
$H^2(0,L)$, proving that $\gamma$ is onto. [F1, construct, algebra]

2.1 If $g\in H^2(0,L)$, [F2] applied with a compactly supported test function
shows $\langle T_cf,g\rangle=\langle f,-D^2g\rangle$; thus
$g\in D(T_c^*)$ and $T_c^*g=-D^2g$. Conversely, if $g\in D(T_c^*)$ and
$h=T_c^*g$, testing the adjoint identity against every
$f\in C_c^\infty(0,L)$ gives distributionally $D^2g=-h\in L^2$. Step 1.2
then gives $g\in H^2(0,L)$. Hence $T_c^*=T_{\max}$ with exactly the claimed
domain. [A1, F1, F2, F4, step 1.2, algebra]

3.1 By [F5] and step 2.1, $T_{\min}=T_c^{**}=T_{\max}^*$. If
$u\in D(T_{\max}^*)$ and $h=T_{\max}^*u$, testing against
$C_c^\infty(0,L)\subset H^2(0,L)$ gives distributionally $D^2u=-h$.
Step 1.2 implies $u\in H^2(0,L)$. The adjoint identity for all
$g\in H^2(0,L)$ and [F2] now reads
$\langle\Gamma_1g,\Gamma_0u\rangle-\langle\Gamma_0g,\Gamma_1u\rangle=0$.
By step 1.3 the two traces of $g$ can be prescribed independently: first set
$\Gamma_0g=0$ and vary $\Gamma_1g$ to obtain $\Gamma_0u=0$; then set
$\Gamma_1g=0$ and vary $\Gamma_0g$ to obtain $\Gamma_1u=0$. Conversely, if
$u\in H^2$ has both traces zero, [F2] gives
$\langle T_{\max}g,u\rangle=\langle g,-D^2u\rangle$ for every
$g\in H^2$, so $u\in D(T_{\max}^*)$. Therefore
$D(T_{\min})=\{u\in H^2:\Gamma_0u=\Gamma_1u=0\}$ and its action is
$-D^2u$. [A1, F2, F5, step 1.2, step 2.1, step 1.3]

4.1 The preceding steps establish density, symmetry, the exact adjoint, the
closure domain, and trace surjectivity as stated. [step 1.1, step 2.1, step 1.3, step 3.1] ∎
