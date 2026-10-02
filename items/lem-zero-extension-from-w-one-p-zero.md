---
id: lem-zero-extension-from-w-one-p-zero
kind: lemma
title: Zero extension of W_0^{1,p} has no boundary derivative
status: draft
origin: pipeline
deps: [def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-classical-derivatives-are-weak-derivatives, thm-holder-inequality-for-integrals, lem-weak-derivative-is-independent-of-lp-representatives, lem-weak-derivatives-are-unique-almost-everywhere, def-integral-over-a-measurable-set, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Theorem 1.25
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.6, Theorem 1.25 and its proof, printed pp. 22–23
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorem 3.12
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, proof of Theorem 3.12, printed pp. 60–62
---

## Statement

Assume Countable Choice. For any open $\Omega\subseteq\mathbb R^n$,
$n\ge1$, any $1\le p\le\infty$ and any
$\mathbb K\in\{\mathbb R,\mathbb C\}$, extension by zero
$$E_0u(x)=u(x)\ \ (x\in\Omega),\qquad E_0u(x)=0\ \ (x\notin\Omega),$$
acted on representatives, sends $W_0^{1,p}(\Omega;\mathbb K)$ linearly into
$W^{1,p}(\mathbb R^n;\mathbb K)$. For every $u\in W_0^{1,p}(\Omega;\mathbb K)$
and every coordinate direction $i$, the class $D_i(E_0u)$ is the zero
extension of the class $D_iu$, and every $L^p$ component norm is preserved:
$$\|E_0u\|_{L^p(\mathbb R^n)}=\|u\|_{L^p(\Omega)},\qquad \|D_i(E_0u)\|_{L^p(\mathbb R^n)}=\|D_iu\|_{L^p(\Omega)},$$
so that $\|E_0u\|_{W^{1,p}(\mathbb R^n)}=\|u\|_{W^{1,p}(\Omega)}$.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $u\in W_0^{1,p}(\Omega;\mathbb K)$; and a test function $\varphi\in C_c^\infty(\mathbb R^n)$.

[F1] Membership $u\in W_0^{1,p}(\Omega;\mathbb K)$ means that for every $\delta>0$ there is $\psi\in C_c^\infty(\Omega;\mathbb K)$ with $\|u-\psi\|_{W^{1,p}(\Omega)}<\delta$, and $W_0^{1,p}\subseteq W^{1,p}$; the norm is the Sobolev norm of [[def-sobolev-space-wkp-and-its-norm]] ([[def-wkp-zero-as-a-sobolev-closure]]).

[F2] For $w\in L^p(\Omega;\mathbb K)$ and its zero extension $E_0w$: the extension is measurable, $|E_0w|=|w|$ on $\Omega$ and $E_0w=0$ off $\Omega$, so $\|E_0w\|_{L^p(\mathbb R^n)}=\|w\|_{L^p(\Omega)}$ for $1\le p\le\infty$ because the integral over a measurable set is the integral of the indicator product; the map $E_0$ is linear on classes; and for $v\in C_c^\infty(\Omega;\mathbb K)$ the extension $E_0v$ lies in $C_c^\infty(\mathbb R^n)$ with $\partial_i(E_0v)=E_0(\partial_iv)$ for every $i$ ([[def-integral-over-a-measurable-set]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F3] The defining weak identity on an open set $V$ is $\int_V w\,D^\alpha\psi=(-1)^{|\alpha|}\int_V(D^\alpha w)\psi$ for all $\psi\in C_c^\infty(V;\mathbb K)$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F4] A $C^1$ (indeed $C^\infty$) function on an open set has each of its classical partial derivatives as its weak derivative there ([[lem-classical-derivatives-are-weak-derivatives]]).

[F5] Hölder's inequality: for conjugate exponents $p,q$ and measurable $f,g$, $\int|fg|\le\|f\|_p\|g\|_q$ whenever the norms on the right are finite ([[thm-holder-inequality-for-integrals]]).

[F6] A class in $W^{1,p}(\mathbb R^n;\mathbb K)$ is exactly an $L^p$ class whose coordinate weak derivatives exist as $L^p$ classes, with the norm of [[def-sobolev-space-wkp-and-its-norm]]; weak derivatives are unique up to null sets, and changing representatives does not change the classes ([[lem-weak-derivatives-are-unique-almost-everywhere]], [[lem-weak-derivative-is-independent-of-lp-representatives]]).

**Choice use.** Countable Choice is used once, in step 1.3, to select a single test-function approximant for each precision $1/j$; the rest of the argument is explicit and choice-free.

## Proof

**Proof technique:** direct.

1.1 The zero extension $E_0$ is linear on $L^p$ classes, preserves $L^p$ norms, and sends $C_c^\infty(\Omega;\mathbb K)$ into $C_c^\infty(\mathbb R^n)$ with $\partial_i(E_0v)=E_0(\partial_iv)$; in particular $E_0v_j-E_0v_k=E_0(v_j-v_k)$ and $\|E_0w\|_{L^p(\mathbb R^n)}=\|w\|_{L^p(\Omega)}$ for every $L^p$ class $w$. [F2, given]

1.2 For $v\in C_c^\infty(\Omega;\mathbb K)$ the classical partial derivative $\partial_i(E_0v)$ is the weak $i$-derivative of $E_0v$ on $\mathbb R^n$, so for every test $\varphi\in C_c^\infty(\mathbb R^n)$ one has $$\int_{\mathbb R^n}E_0v\,\partial_i\varphi=-\int_{\mathbb R^n}E_0(\partial_iv)\,\varphi.$$ [F2, F3, F4, given]

1.3 Since $u\in W_0^{1,p}(\Omega;\mathbb K)$, [F1] with $\delta=1/j$ provides for each integer $j\ge1$ some $v_j\in C_c^\infty(\Omega;\mathbb K)$ with $\|u-v_j\|_{W^{1,p}(\Omega)}<1/j$; Countable Choice selects one such sequence $(v_j)_{j\ge1}$. [F1, given]

2.1 The linearity and isometry of $E_0$ give $E_0v_j\to E_0u$ and $E_0(\partial_iv_j)\to E_0(D_iu)$ in $L^p(\mathbb R^n)$ as $j\to\infty$, because $v_j\to u$ and $\partial_iv_j\to D_iu$ in $L^p(\Omega)$ by step 1.3 and the definition of the Sobolev norm. [F1, step 1.1, step 1.3]

3.1 For the fixed test $\varphi$, step 1.2 gives $\int E_0v_j\partial_i\varphi=-\int E_0(\partial_iv_j)\varphi$ for every $j$. Hölder's inequality on the compact support of $\varphi$ turns the $L^p$ convergences of step 2.1 into convergence of both integrals: $\int_{\mathbb R^n}E_0v_j\partial_i\varphi\to\int_{\mathbb R^n}E_0u\,\partial_i\varphi$ and $\int_{\mathbb R^n}E_0(\partial_iv_j)\varphi\to\int_{\mathbb R^n}E_0(D_iu)\varphi$; hence $$\int_{\mathbb R^n}E_0u\,\partial_i\varphi=-\int_{\mathbb R^n}E_0(D_iu)\,\varphi.$$ [F5, step 1.2, step 2.1]

4.1 Since $\varphi$ was an arbitrary test function, step 3.1 exhibits $E_0(D_iu)$ as a weak $i$-derivative of the $L^p$ class $E_0u$ on $\mathbb R^n$; by [F6] therefore $E_0u\in W^{1,p}(\mathbb R^n;\mathbb K)$ with $D_i(E_0u)=E_0(D_iu)$ almost everywhere, the component norms agree by step 1.1, and $u\mapsto E_0u$ is linear because $E_0$ is. Changing representatives on null sets changes no class by [F6], the case $k=0$ does not arise here, and complex scalars are covered by the same bilinear pairing. [F6, step 1.1, step 3.1] ∎
