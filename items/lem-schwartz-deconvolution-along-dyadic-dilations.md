---
id: lem-schwartz-deconvolution-along-dyadic-dilations
kind: lemma
title: "Deconvolution of a Schwartz function along the dyadic dilates of a fixed kernel"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, lem-schwartz-dilations-preserve-schwartz-space, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, cor-schwartz-convolution-and-product-transform-laws, def-the-standard-smooth-step-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Marcin Bownik, Anisotropic Hardy Spaces and Wavelets, Memoirs of the American Mathematical Society 164 (2003), no. 781"
      url: "https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf"
      locator: "Chapter 1, Section 7, Lemma 7.3 and its proof, printed pp. 41-44 (the decomposition $\\psi=\\sum_{j\\ge0}\\eta^j*\\varphi_{-j}$ with the estimate $\\|\\eta^j\\|_{S_N}\\le Cb^{-jL}\\|\\psi\\|_{S_M}$); isotropic case $A=2I$, $b=2^n$"
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 2, printed p. 62: the discrete telescoping identity built from the flat kernel, equation (5)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. Let $n\ge1$ and let $\varphi\in\mathcal S(\mathbb R^n)$ satisfy
$\int_{\mathbb R^n}\varphi\ne0$. Then there is a constant $s_0>0$
(depending only on $\varphi$ and $n$) such that for all integers $L,N>0$
there exist $C>0$ and $M>0$ (depending on $\varphi,n,L,N$ but not on the input
function) with the following property: for every $\psi\in\mathcal S$ there are
$\eta^j\in\mathcal S$, $j\ge0$, such that
$$\psi=\sum_{j=0}^\infty \eta^j*\varphi_{s_02^{-j}}\quad\text{in }\mathcal S(\mathbb R^n),$$
and
$$\|\eta^j\|_{S_N}\le C\,2^{-jnL}\,\|\psi\|_{S_M}\qquad(j\ge0),$$
where $\varphi_t(x)=t^{-n}\varphi(x/t)$ and
$$\|h\|_{S_N}:=\sup_{x\in\mathbb R^n}\max(1,|x|)^N\max_{|\alpha|\le N}|\partial^\alpha h(x)|.$$
Any smaller positive value of $s_0$ also works, with the same conclusion and
constants depending on the chosen value. The point of the estimate is that the
coefficients $\eta^j$ become rapidly small in the strong Schwartz norm as
$j\to\infty$, uniformly in $\psi$: this is what makes the deconvolution usable
inside maximal-function estimates. Countable Choice is used through the
Fourier automorphism, differentiation identities, and Schwartz convolution
laws cited below.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $\varphi\in\mathcal S$ with $\int\varphi\ne0$, and the seminorms and topology of [[def-schwartz-space-and-its-seminorms]], [[def-schwartz-topology-and-convergence]], [[def-ck-and-multi-index-notation-in-several-variables]].

[F1] Fourier transformation is a topological automorphism of $\mathcal S(\mathbb R^n)$, with $\widehat{\varphi_t}(\xi)=\widehat\varphi(t\xi)$ for $t>0$ ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]). In particular, the inverse transform of a compactly supported smooth function is Schwartz, and $\mathcal F(f*g)=\widehat f\widehat g$ for Schwartz $f,g$ ([[cor-schwartz-convolution-and-product-transform-laws]]).

[F2] For every $m\in\mathbb N$ there is $C_m$ with
$\|\widehat h\|_{S_m}\le C_m\|h\|_{S_{m+n+1}}$ for all $h\in\mathcal S$: for
multi-indices $|\alpha|,|\beta|\le m$ the identity
$$(2\pi i)^{|\beta|}\xi^\beta\partial^\alpha\widehat h(\xi) =(-2\pi i)^{|\alpha|}\int_{\mathbb R^n} e^{-2\pi i x\cdot\xi}\,\partial^\beta(x^\alpha h(x))\,dx$$
combined with the higher product rule and
$\int(1+|x|)^{-n-1}\,dx<\infty$ bounds $|\xi^\beta\partial^\alpha\widehat h(\xi)|$
by a finite sum of $S_{m+n+1}$ seminorms of $h$
([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]],
[[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

[F3] Dilations act on $\mathcal S$ with $p_{\alpha\beta}(\varphi_t)=t^{|\alpha|-|\beta|-n}p_{\alpha\beta}(\varphi)$, so $\varphi_t\in\mathcal S$ for every $t>0$ ([[lem-schwartz-dilations-preserve-schwartz-space]]).



**Proof technique:** Fourier-side construction of a smooth dyadic partition and inversion of the symbol $\widehat\varphi$ on the annuli where it does not vanish.

## Proof

**Proof technique:** constructive.

1.1 Normalisation and scaling of the kernel. The construction below is uniform in the scale: for a fixed parameter $s_0>0$ the annuli $\{|\xi|\asymp s_0^{-1}2^j\}$ play the role of the annuli $\{|\xi|\asymp2^j\}$ at $s_0=1$, and every estimate keeps the same form with constants depending on $s_0$; in particular the same argument run at a smaller parameter gives the statement for every smaller scale, the constants changing by a fixed factor. Since $\widehat\varphi(0)=\int\varphi\ne0$ and $\widehat\varphi$ is continuous, after multiplying $\varphi$ by the nonzero complex multiple $(1/\int\varphi)$ and then replacing it by a suitable positive dilation $\delta^n\varphi(\delta\,\cdot)=\varphi_{1/\delta}$, we may assume $$\int_{\mathbb R^n}\varphi=1,\qquad |\widehat\varphi(\xi)|\ge\tfrac12 \quad\text{for }|\xi|\le2 .$$ We prove the lemma in this normalisation with $s_0=1$; undoing the dilation replaces the scale $1$ by the fixed positive number $1/\delta$ and does not change the form of the estimates. [given, F1, construct]

2.1 A smooth dyadic partition of unity. With the smooth step $\sigma$ of [[def-the-standard-smooth-step-function]], take $\zeta(\xi)=\sigma((9/4-|\xi|^2)/(5/4))$; it equals one on $B(0,1)$ and its support is contained in the closed ball of radius $3/2$, hence in $B(0,2)$, and put $\zeta_0=\zeta$ and $\zeta_j(\xi)=\zeta(2^{-j}\xi)-\zeta(2^{-j+1}\xi)$ for $j\ge1$. Then for every $J\ge0$, $$\sum_{j=0}^{J}\zeta_j(\xi)=\zeta(2^{-J}\xi),$$ so $\sum_{j\ge0}\zeta_j(\xi)=1$ for every $\xi$: at $\xi=0$ both sides equal one because $\zeta(0)=1$, and for $\xi\ne0$ the limit $\zeta(2^{-J}\xi)\to\zeta(0)=1$ as $J\to\infty$ gives the identity. If $\zeta_j(\xi)\ne0$, then $2^{-j}\xi\in\operatorname{supp}\zeta$ or $2^{-j+1}\xi\in\operatorname{supp}\zeta$, so $|2^{-j}\xi|\le2$ in either case; by step 1.1, $|\widehat\varphi(2^{-j}\xi)|\ge\tfrac12$ on $\operatorname{supp}\zeta_j$. [step 1.1, given, algebra]

3.1 The deconvolution coefficients and convergence. For $\psi\in\mathcal S$ and $j\ge0$ define the compactly supported smooth function $$\widehat{\eta^j}(\xi)=\frac{\zeta_j(\xi)}{\widehat\varphi(2^{-j}\xi)}\, \widehat\psi(\xi).$$ The quotient is well defined and smooth on a neighbourhood of $\operatorname{supp}\zeta_j$ by step 2.1, and $\widehat{\eta^j}\in C_c^\infty(\mathbb R^n)\subseteq\mathcal S$; hence $\eta^j:=\mathcal F^{-1}\widehat{\eta^j}\in\mathcal S$ by [F1]. On the Fourier side, for every $J\ge0$, $$\mathcal F\Bigl(\sum_{j=0}^{J}\eta^j*\varphi_{2^{-j}}\Bigr)(\xi) =\widehat\psi(\xi)\sum_{j=0}^{J}\zeta_j(\xi) =\widehat\psi(\xi)\,\zeta(2^{-J}\xi),$$ where we used $\widehat{\varphi_{2^{-j}}}(\xi)=\widehat\varphi(2^{-j}\xi)$ from [F1]. To prove convergence in $\mathcal S$, put $\chi_J(\xi)=\zeta(2^{-J}\xi)-1$. The multiplier $\chi_J$ itself is not Schwartz and does not converge to zero in $\mathcal S$; instead we prove $\widehat\psi\chi_J\to0$ in every Schwartz seminorm. Fix multi-indices $\alpha,\beta$. Leibniz's rule writes $\partial^\beta(\widehat\psi\chi_J)$ as a finite sum of terms $C_{\gamma,\beta}(\partial^\gamma\widehat\psi)(\partial^{\beta-\gamma}\chi_J)$, $\gamma\le\beta$. For the term with $\gamma=\beta$, the cutoff is undifferentiated: $\chi_J=0$ on $|\xi|\le2^J$ because $\zeta=1$ on $B(0,1)$, and $|\chi_J|\le1+\|\zeta\|_\infty$ everywhere. Thus its $p_{\alpha\beta}$ contribution is bounded by $(1+\|\zeta\|_\infty)\sup_{|\xi|\ge2^J}|\xi^\alpha\partial^\beta\widehat\psi(\xi)|$, which tends to zero by Schwartz decay. For every term with $\gamma<\beta$, let $\delta=\beta-\gamma\ne0$. The chain rule gives $\partial^\delta\chi_J(\xi)=2^{-J|\delta|}(\partial^\delta\zeta)(2^{-J}\xi)$, supported in the annulus $2^J\le|\xi|\le2^{J+1}$ since $\zeta$ is constant on $B(0,1)$ and vanishes outside $B(0,2)$. Its contribution is therefore bounded by $C_\delta 2^{-J|\delta|}\sup_{|\xi|\ge2^J}|\xi^\alpha\partial^\gamma\widehat\psi(\xi)|$, which also tends to zero. There are only finitely many terms for each $\alpha,\beta$, so $p_{\alpha\beta}(\widehat\psi\chi_J)\to0$. This proves $\widehat\psi\zeta(2^{-J}\cdot)\to\widehat\psi$ in $\mathcal S$. Since Fourier transformation is a homeomorphism of $\mathcal S$ [F1], the partial sums converge to $\psi$ in $\mathcal S$, and (with $\sum_{j\ge0}$ denoting that limit) $\psi=\sum_{j\ge0}\eta^j*\varphi_{2^{-j}}$. [F1, F3, step 2.1, given, algebra]

4.1 The rapid norm decay. Fix $L,N>0$; all constants below depend on $\varphi,n,L,N$ only. For $j\ge1$, on $\operatorname{supp}\zeta_j$ one has $(1+|\xi|)\asymp2^{j}$: if $\zeta_j(\xi)\ne0$ then $2^{-j}|\xi|\le2$, while $2^{-j+1}|\xi|\ge1$ because otherwise both $\zeta(2^{-j}\xi)$ and $\zeta(2^{-j+1}\xi)$ would equal one, so $\tfrac12\cdot2^{j}\le1+|\xi|\le3\cdot2^{j}$. For $j=0$, the support lies in a fixed ball and all the following estimates hold by enlarging the constant, since the target factor is $2^{-0nL}=1$. The quotient $\xi\mapsto\zeta_j(\xi)/\widehat\varphi(2^{-j}\xi)$ is smooth on the neighbourhood $\{|\xi|<2^{j+1}\}$ of $\operatorname{supp}\zeta_j$, and its derivatives of order at most $N+n+1$ are bounded by a constant $C_0=C_0(n,N,\varphi)$ independent of $j$: the chain rule contributes the factors $2^{-j|\beta|}\le1$ to the derivatives both of $\zeta_j$ and of the composition of $1/\widehat\varphi$ with $\xi\mapsto2^{-j}\xi$, and $1/\widehat\varphi$ is smooth with bounded derivatives on the fixed ball $|z|\le2$, where $|\widehat\varphi|\ge\tfrac12$ by step 1.1. Multiplying by $\widehat\psi$ with the higher product rule, $$|\partial^\alpha\widehat{\eta^j}(\xi)|\le C_1\max_{|\beta|\le N+n+1}|\partial^\beta\widehat\psi(\xi)|,\qquad |\alpha|\le N+n+1,\ \xi\in\operatorname{supp}\zeta_j .$$ Multiplying by $(1+|\xi|)^{N+n+1}$ and using the definition of the $S_M$ norm with $M\ge N+n+1$ together with the lower bound just proved, $$\|\widehat{\eta^j}\|_{S_{N+n+1}}\le C_1\sup_{\xi\in\operatorname{supp}\zeta_j}(1+|\xi|)^{N+n+1-M}\|\widehat\psi\|_{S_M}\le C_2\,2^{-j(M-N-n-1)}\|\widehat\psi\|_{S_M},$$ so with $M\ge N+n+1+nL$ the right-hand side is at most $C_2\,2^{-jnL}\|\widehat\psi\|_{S_M}$. Finally [F2] applied with the roles of a function and its transform interchanged gives $\|\eta^j\|_{S_N}\le C_3\|\widehat{\eta^j}\|_{S_{N+n+1}}$ (the Fourier transform of $\widehat{\eta^j}$ is $\eta^j(-\cdot)$, which has the same seminorms), and [F2] gives $\|\widehat\psi\|_{S_M}\le C_M\|\psi\|_{S_{M+n+1}}$. Hence $$\|\eta^j\|_{S_N}\le C\,2^{-jnL}\|\psi\|_{S_{M+n+1}}$$ with $C=C_2C_3C_M$ independent of $\psi$ and $j$, so the statement holds with $M$ replaced by $M+n+1$. [step 2.1, step 3.1, F1, F2, algebra]

5.1 Conclusion. Steps 2.1 and 3.1 construct $\eta^j\in\mathcal S$ with $\psi=\sum_{j\ge0}\eta^j*\varphi_{2^{-j}}$ in $\mathcal S$, and step 4.1 gives the estimate $\|\eta^j\|_{S_N}\le C2^{-jnL}\|\psi\|_{S_M}$ with constants independent of $\psi$. Undoing the normalisation of step 1.1 replaces the scale family $2^{-j}$ by $s_02^{-j}$ with the fixed $s_0=1/\delta$ and does not affect the convergence or the estimates, and the same construction run at a smaller parameter gives the statement there. This proves the lemma. [step 1.1, step 2.1, step 3.1, step 4.1, discharge-construct] ∎
