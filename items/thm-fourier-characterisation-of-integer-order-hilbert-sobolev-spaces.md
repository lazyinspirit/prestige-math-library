---
id: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
kind: theorem
title: "Integer-order W^{k,2} and H^k agree with equivalent norms"
status: draft
origin: pipeline
deps:
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-derivative-of-a-locally-integrable-function
  - lem-weak-derivative-is-independent-of-lp-representatives
  - lem-weak-derivatives-are-unique-almost-everywhere
  - lem-sobolev-norm-is-well-defined-and-definite
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - def-real-order-bessel-potential-sobolev-space
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation
  - thm-plancherel
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-polynomial-growth-functions-define-tempered-distributions
  - thm-locally-integrable-functions-embed-in-distributions
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-exponential-beats-every-polynomial
  - def-ck-and-multi-index-notation-in-several-variables
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.1, Proposition 12.1 and proof; §12.1.2 property (3), printed pp. 139-141"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3: Distributions"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "§4, Lemma 4.4 and proof, printed p. 67; the sentence before Lemma 4.4 carries a sign typo, and the positive weight is used here"
---

## Statement

Assume Countable Choice, let $n\ge1$ and $k\in\mathbb N_0$, and use complex
scalars. Write $W^{k,2}=W^{k,2}(\mathbb R^n;\mathbb C)$ for the weak-derivative
Sobolev space of [[def-sobolev-space-wkp-and-its-norm]], whose classes carry
the weak derivatives $D^\alpha f\in L^2(\mathbb R^n;\mathbb C)$ for
$|\alpha|\le k$ and the norm
$$\|f\|_{W^{k,2}}=\Bigl(\sum_{|\alpha|\le k}\|D^\alpha f\|_2^2\Bigr)^{1/2},$$
and let $H^k=H^k(\mathbb R^n)$ be the real-order Bessel-potential completion
of [[def-real-order-bessel-potential-sobolev-space]] with its canonical
embedding $E_k:H^k\to\mathcal S'(\mathbb R^n)$
([[thm-bessel-potential-completions-embed-in-tempered-distributions]]). Let
$u_f\in\mathcal S'(\mathbb R^n)$ denote the regular tempered distribution of
an $L^2$ class $f$. Then:

1. $E_k[H^k]=\{u_f:f\in W^{k,2}\}$, and
   $\Phi(f):=E_k^{-1}(u_f)$ is a bijection
   $\Phi:W^{k,2}\to H^k$. Thus, under the regular-distribution embedding,
   $W^{k,2}$ and $H^k$ are the same subspace of $\mathcal S'(\mathbb R^n)$.
2. There are constants $0<c_k\le C_k<\infty$, depending only on $n$ and $k$,
   with
$$c_k^{1/2}\,\|\langle\xi\rangle^k\mathcal F_2f\|_2\le\|f\|_{W^{k,2}} \le C_k^{1/2}\,\|\langle\xi\rangle^k\mathcal F_2f\|_2,$$
   and $\|\langle\xi\rangle^k\mathcal F_2f\|_2=\|\Phi(f)\|_{H^k}$. Hence the
   weak-derivative norm and the bracket-weighted $L^2$ norm are equivalent,
   and the latter is also equivalent to
   $\|(1+4\pi^2|\xi|^2)^{k/2}\mathcal F_2f\|_2$, by
$$\|\langle\xi\rangle^k h\|_2\le\|(1+4\pi^2|\xi|^2)^{k/2}h\|_2 \le(2\pi)^k\|\langle\xi\rangle^k h\|_2,\qquad h\in L^2 .$$
3. The three norm expressions are **not** identical in general: the
   bracket-weighted norm differs from both the weak-derivative norm and the
   Laplacian-weighted norm, as the Gaussian computation in the proof shows.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $k\in\mathbb N_0$, an $L^2$ class $f$,
and the multi-index conventions of
[[def-ck-and-multi-index-notation-in-several-variables]] for
$\alpha\in\mathbb N_0^n$.

[A1] Countable Choice is the hypothesis carried by every cited Sobolev,
Fourier and regular-distribution interface below
([[def-countable-choice]]).

[F1] $W^{k,p}(\Omega;\mathbb K)$ consists of $L^p$ classes $u$ such that for
every $|\alpha|\le k$ there is an $L^p$ class $D^\alpha u$ whose locally
integrable representative satisfies
$\int u\,D^\alpha\varphi=(-1)^{|\alpha|}\int D^\alpha u\,\varphi$ for all
$\varphi\in C_c^\infty(\Omega)$; $D^0u=u$; the norm is the displayed
finite-$p$ sum, and for $p=2$, $k=0$ one has $W^{0,2}=L^2$
([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The weak-derivative test identity is equivalent to
$\partial^\alpha T_u=T_v$ in the sense of distributions; it is unchanged by
almost-everywhere changes of $u$ and $v$
([[def-weak-derivative-of-a-locally-integrable-function]],
[[lem-weak-derivative-is-independent-of-lp-representatives]]), and a weak
derivative is unique as an almost-everywhere class
([[lem-weak-derivatives-are-unique-almost-everywhere]]). The displayed
$W^{k,p}$ formula is a genuine norm on classes
([[lem-sobolev-norm-is-well-defined-and-definite]]).

[F3] The completion $H^s$ carries the norm
$\|U\|_{H^s}=\lim_j\|\langle\xi\rangle^s\widehat u_j\|_2$ of Cauchy sequences,
and $E_sU=\mathcal F^{-1}(u_{w_{-s}J_sU})$ is a linear injection
([[def-real-order-bessel-potential-sobolev-space]],
[[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

[F4] For $s\in\mathbb R$ let
$M_s=\{u\in\mathcal S':w_s\mathcal Fu=u_g\text{ for some }g\in L^2\}$, where
$w_s(\xi)=\langle\xi\rangle^s$ and $w_s\mathcal Fu$ is distribution
multiplication. Then $E_s:H^s\to M_s$ is a bijection, $g$ is unique, and
$\|E_s^{-1}(u)\|_{H^s}=\|g\|_2$
([[thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation]]).

[F5] For $L^2$ classes $f,h$ with $u_f=u$ and $u_h=\partial^\alpha u$, the
Plancherel transforms satisfy
$\mathcal F_2h=(2\pi i\xi)^\alpha\mathcal F_2f$ almost everywhere
([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F6] $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ in
$\mathcal S'(\mathbb R^n)$
([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F7] Plancherel $\mathcal F_2$ is a surjective complex-linear isometry of
$L^2(\mathbb R^n;\mathbb C)$ extending the Schwartz transform, so
$\|\mathcal F_2h\|_2=\|h\|_2$
([[thm-plancherel]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F8] For $h\in L^1$, $\mathcal Fu_h=u_{\widehat h}$ with the integral
Fourier transform, and for $h\in L^2$,
$\mathcal Fu_h=u_{\mathcal F_2h}$; every $L^2$ class defines a regular
tempered distribution, and the regular-distribution map is injective after
almost-everywhere identification. Hence the integral and Plancherel
transforms agree almost everywhere for $h\in L^1\cap L^2$
([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]],
[[thm-polynomial-growth-functions-define-tempered-distributions]],
[[thm-locally-integrable-functions-embed-in-distributions]]).

[F9] Multiplication of a tempered distribution by a smooth polynomially
bounded symbol $a$ is $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$;
with the regular distribution
$\langle u_h,\varphi\rangle=\int h\varphi$ of a locally integrable $h$
([[def-regular-distribution-from-a-locally-integrable-function]]) the same
display with $u=u_h$ gives $a\,u_h=u_{ah}$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

[F10] Fourier transformation is a topological automorphism of
$\mathcal S'(\mathbb R^n)$, in particular injective
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F11] For $n\ge1$ and $t>0$,
$\mathcal F(e^{-\pi t|x|^2})(\xi)=t^{-n/2}e^{-\pi|\xi|^2/t}$, and every
polynomial multiple of a positive Gaussian is absolutely integrable
([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F12] For every integer $m\ge1$ and $a>0$, $r^m e^{-ar}\to0$ as
$r\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

## Proof

**Proof technique:** compare the derivative-sum weight with the bracket weight and transfer the weighted tempered-distribution characterization. Throughout, $P_k(\xi)=\sum_{|\alpha|\le k}(2\pi)^{2|\alpha|}|\xi^\alpha|^2$ and $w_k(\xi)=\langle\xi\rangle^k$.

1.1 Let $f\in W^{k,2}$ and $|\alpha|\le k$. By [F1] the class $D^\alpha f$ lies in $L^2$, and by [F2] the weak-derivative test identity for $(f,D^\alpha f)$ is equivalent to $\partial^\alpha u_f=u_{D^\alpha f}$; applying [F5] to the pair $(f,D^\alpha f)$ gives $\mathcal F_2(D^\alpha f)=(2\pi i\xi)^\alpha\mathcal F_2f$ almost everywhere, and [F7] gives $\|D^\alpha f\|_2=\|(2\pi i\xi)^\alpha\mathcal F_2f\|_2<\infty$. At $k=0$ this is $D^0f=f$ and the Plancherel identity. [F1, F2, F5, F7]

1.2 The polynomial comparison. For $|\alpha|\le k$ one has $(2\pi)^{2|\alpha|}\le(2\pi)^{2k}$ and $|\xi^\alpha|^2\le\langle\xi\rangle^{2k}$; indeed $|\xi^\alpha|^2=\prod_j|\xi_j|^{2\alpha_j}\le\max(1,|\xi|)^{2|\alpha|}$, which is $1\le(1+|\xi|^2)^k$ when $|\xi|<1$ and at most $|\xi|^{2k}\le(1+|\xi|^2)^k$ when $|\xi|\ge1$. For the lower bound, if $|\xi|\le1$ the $\alpha=0$ term equals $1$ while $\langle\xi\rangle^{2k}\le2^k$; if $|\xi|\ge1$, some coordinate satisfies $|\xi_j|=\max_l|\xi_l|\ge n^{-1/2}|\xi|$, so the term $\alpha=ke_j$ gives $P_k(\xi)\ge(2\pi)^{2k}|\xi_j|^{2k}\ge\frac{(2\pi)^{2k}}{n^k}|\xi|^{2k}\ge\frac{(2\pi)^{2k}}{(2n)^k}\langle\xi\rangle^{2k}$, because $\langle\xi\rangle^{2k}=(1+|\xi|^2)^k\le2^k|\xi|^{2k}$. Hence $c_k\langle\xi\rangle^{2k}\le P_k(\xi)\le C_k\langle\xi\rangle^{2k}$ with $N_k:=\#\{\alpha\in\mathbb N_0^n:|\alpha|\le k\}$, $c_k:=\min\bigl(2^{-k},\frac{(2\pi)^{2k}}{(2n)^k}\bigr)>0$ and $C_k:=N_k(2\pi)^{2k}$; at $k=0$ both bounds equal $1$. [algebra]

1.3 Conversely, let $u\in M_k$ and let $g\in L^2$ satisfy $w_k\mathcal Fu=u_g$ as in [F4], so $g$ exists and is unique. Put $\widehat f:=w_k^{-1}g\in L^2$ and $f:=\mathcal F_2^{-1}\widehat f\in L^2$. First, $w_k^{-1}(w_k\mathcal Fu)=\mathcal Fu$ and $w_k^{-1}u_g=u_{\widehat f}$ by applying [F9] to the smooth polynomially bounded symbols $w_k^{\pm1}$, so $\mathcal Fu=u_{\widehat f}=u_{\mathcal F_2f}=\mathcal F(u_f)$ by [F8], and injectivity of $\mathcal F$ [F10] gives $u=u_f$. Second, for each $|\alpha|\le k$ put $v_\alpha:=\mathcal F_2^{-1}\bigl((2\pi i\xi)^\alpha\widehat f\bigr)\in L^2$, well defined since $|(2\pi i\xi)^\alpha\widehat f|\le(2\pi)^k|g|$ by $|\xi^\alpha|\le\langle\xi\rangle^{|\alpha|}$. Then $\mathcal F(u_{v_\alpha})=u_{(2\pi i\xi)^\alpha\widehat f}$ by [F8], while $\mathcal F(\partial^\alpha u_f)=(2\pi i\xi)^\alpha\mathcal Fu_f=u_{(2\pi i\xi)^\alpha\widehat f}$ by [F6], [F8] and [F9]; injectivity [F10] gives $\partial^\alpha u_f=u_{v_\alpha}$, so by [F2] the class $v_\alpha$ is a weak $\alpha$-derivative of $f$ and equals $D^\alpha f$ by uniqueness. Thus $f\in W^{k,2}$ with $D^\alpha f=v_\alpha$ and $u=u_f$. [F2, F4, F6, F8, F9, F10]

1.4 The second norm equivalence. For $h\in L^2$ and $k\ge0$ the elementary estimates $1+|\xi|^2\le1+4\pi^2|\xi|^2\le4\pi^2(1+|\xi|^2)$ raise to the $k$-th power to give $\langle\xi\rangle^{2k}\le(1+4\pi^2|\xi|^2)^k\le(2\pi)^{2k}\langle\xi\rangle^{2k}$; multiplying by $|h|^2$ and integrating yields $\|\langle\xi\rangle^kh\|_2\le\|(1+4\pi^2|\xi|^2)^{k/2}h\|_2\le(2\pi)^k\|\langle\xi\rangle^kh\|_2$. Applied to $h=\mathcal F_2f$ this makes the bracket-weighted and Laplacian-weighted norms of the statement equivalent. [F7, algebra]

1.5 Non-identity of the norms. Take $n=1$, $k=1$ and $f(x)=e^{-\pi x^2}$. By [F11] at $t=1$, $f\in L^1$, while [F11] at $t=2$ makes $f^2$ and $x^2f^2$ integrable, so $f,xf\in L^2$. Its ordinary derivative $f'=-2\pi xf$ is therefore in $L^2$; integration by parts against each compactly supported smooth test and [F2] show that $f\in W^{1,2}$ with weak derivative $Df=f'$. The integral Fourier transform of $f$ equals $f$ by [F11], and the $L^1$ and $L^2$ distributional transform identities of [F8], followed by regular-distribution injectivity, give $\mathcal F_2f=f$ almost everywhere. At frequency zero, [F11] with $t=2$ gives $m:=\|f\|_2^2=\int_{\mathbb R}e^{-2\pi x^2}dx=1/\sqrt2$. Integrating $(x e^{-2\pi x^2})'=e^{-2\pi x^2}-4\pi x^2e^{-2\pi x^2}$ over $[-R,R]$ and letting $R\to\infty$ gives $\int_{\mathbb R}x^2e^{-2\pi x^2}dx=m/(4\pi)$: the boundary term $2R e^{-2\pi R^2}$ tends to zero by [F12], and both integrals converge by [F11]. Thus $\|f'\|_2^2=4\pi^2\cdot m/(4\pi)=\pi m$, while [F5], [F7] give $\||\xi|\widehat f\|_2^2=\|f'\|_2^2/(4\pi^2)=m/(4\pi)$. Hence $\|f\|_{W^{1,2}}^2=m+\pi m=(1+\pi)m$, $\|\langle\xi\rangle\widehat f\|_2^2=m+m/(4\pi)=(1+1/(4\pi))m$ and $\|(1+4\pi^2\xi^2)^{1/2}\widehat f\|_2^2=m+4\pi^2m/(4\pi)=(1+\pi)m$; the bracket value differs from both the weak-derivative value and the Laplacian-weighted value. [F2, F5, F7, F8, F11, F12, algebra]

2.1 Let $f\in W^{k,2}$. Steps 1.1 and 1.2 give $\|f\|_{W^{k,2}}^2=\sum_{|\alpha|\le k}\int_{\mathbb R^n}(2\pi)^{2|\alpha|}|\xi^\alpha|^2|\mathcal F_2f(\xi)|^2\,d\xi=\int_{\mathbb R^n}P_k(\xi)|\mathcal F_2f(\xi)|^2\,d\xi$, a finite sum of finite integrals, and therefore $c_k\|\langle\xi\rangle^k\mathcal F_2f\|_2^2\le\|f\|_{W^{k,2}}^2\le C_k\|\langle\xi\rangle^k\mathcal F_2f\|_2^2$; in particular $\langle\xi\rangle^k\mathcal F_2f\in L^2$ with $\|\langle\xi\rangle^k\mathcal F_2f\|_2\le c_k^{-1/2}\|f\|_{W^{k,2}}$. [F1, F7, step 1.1, step 1.2]

3.1 Let $f\in W^{k,2}$. Step 2.1 makes $w_k\mathcal F_2f\in L^2$, so [F8] gives $\mathcal F(u_f)=u_{\mathcal F_2f}$ and [F9] gives $w_k\mathcal F(u_f)=u_{w_k\mathcal F_2f}$; hence $u_f\in M_k$ in the notation of [F4]. Therefore $U:=\Phi(f)=E_k^{-1}(u_f)\in H^k$ is defined, using the injection $E_k$ of [F3], and [F4] with $g=w_k\mathcal F_2f$ gives $\|U\|_{H^k}=\|\langle\xi\rangle^k\mathcal F_2f\|_2$. [F3, F4, F8, F9, step 2.1]

4.1 The identification. Step 3.1 shows $\{u_f:f\in W^{k,2}\}\subseteq M_k$ and step 1.3 shows $M_k\subseteq\{u_f:f\in W^{k,2}\}$; since [F4] gives $M_k=E_k[H^k]$, the two sets are equal. The map $\Phi(f)=E_k^{-1}(u_f)$ is defined on all of $W^{k,2}$ and injective, because $u_f=u_h$ forces $f=h$ almost everywhere by the regular-distribution injection [F8]; it is surjective, because every $U\in H^k$ has $E_kU\in M_k=u_f$ for some $f\in W^{k,2}$ by step 1.3, so $\Phi(f)=U$. Hence $\Phi$ is a bijection and $E_k[H^k]=\{u_f:f\in W^{k,2}\}$. [F3, F4, F8, step 1.3, step 3.1]

4.2 The first norm equivalence. For $f\in W^{k,2}$, step 2.1 gives $\|f\|_{W^{k,2}}\le C_k^{1/2}\|\langle\xi\rangle^k\mathcal F_2f\|_2$ and $c_k^{1/2}\|\langle\xi\rangle^k\mathcal F_2f\|_2\le\|f\|_{W^{k,2}}$, while step 3.1 identifies $\|\langle\xi\rangle^k\mathcal F_2f\|_2=\|\Phi(f)\|_{H^k}$; at $k=0$, $c_0=C_0=1$ and this is the Plancherel identity. [F7, step 2.1, step 3.1]

5.1 Steps 4.1 (bijection and equality of subspaces), 4.2 (weak-derivative and bracket norms equivalent with constants $c_k^{1/2},C_k^{1/2}$), 1.4 (bracket and Laplacian-weighted norms equivalent with constants $1,(2\pi)^k$) and 1.5 (not identical in general) prove statements 1-3, including the cases $k=0$ and $n=1$ handled above; Countable Choice is used only through the cited interfaces. [A1, step 1.4, step 1.5, step 4.1, step 4.2] ∎
