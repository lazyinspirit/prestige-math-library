---
id: thm-maximal-function-characterisations-of-real-hardy-spaces
kind: theorem
title: "Maximal-function characterisations of real Hardy spaces"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-grand-maximal-test-class-of-order-n, def-real-hardy-space-by-a-radial-maximal-function, def-countable-choice, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions, lem-tangential-maximal-function-norm-bound, lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function, lem-truncated-maximal-function-estimates, cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, thm-holder-inequality-for-integrals, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-monotone-convergence-for-the-integral]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "David Cruz-Uribe SFO, Li-An Daniel Wang, Variable Hardy Spaces, arXiv:1211.6505 (2012)"
      url: "https://arxiv.org/pdf/1211.6505"
      locator: "sections 3.1-3.2, printed pp. 8-15 (PDF pp. 9-16): complete proof of the implication (1)$\\Rightarrow$(2) and the truncation argument; Theorem 3.1 states the classical special case"
    - title: "Marcin Bownik, Anisotropic Hardy Spaces and Wavelets, Memoirs of the American Mathematical Society 164 (2003), no. 781"
      url: "https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf"
      locator: "Chapter 1, Section 7, Theorem 7.1 and Lemmas 7.2-7.6, printed pp. 41-49: the radial, nontangential and grand maximal functions define the same space"
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "Proposition 1, printed p. 60 (PDF p. 2): $\\|f\\|_{H^p}\\sim\\|M^*_{\\varphi,a}f\\|_{L^p}\\sim\\|M_Nf\\|_{L^p}$ for $N\\ge\\lfloor n/p\\rfloor+1$"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: $M_\\varphi f\\in L^p$ iff $Mf\\in L^p$ with equivalent norms"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Theorem 1.1, printed p. 4: the three equivalent conditions of Fefferman-Stein and Stein"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p<\infty$ and let $\varphi\in\mathcal S(\mathbb R^n)$ with
$\int\varphi\ne0$. Then there is $N_0(n,p,\varphi)<\infty$, depending only on
$n$, $p$ and the fixed kernel $\varphi$, such that for every
$N\ge N_0(n,p,\varphi)$ and every $f\in\mathcal S'(\mathbb R^n)$
the following assertions are equivalent:

1. $M^0_\varphi f\in L^p(\mathbb R^n)$;
2. $M^{*,a}_\varphi f\in L^p(\mathbb R^n)$ for some $a\ge1$ (equivalently, for every $a\ge1$);
3. $M_Nf\in L^p(\mathbb R^n)$.

Here $M^0_\varphi f$, $M^{*,a}_\varphi f$ are the maximal functions of
[[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]]
and $M_N$ is the grand maximal function of
[[def-grand-maximal-test-class-of-order-n]]. Moreover the extended quantities
$\|M^0_\varphi f\|_{L^p}$, $\|M^{*,a}_\varphi f\|_{L^p}$ and
$\|M_Nf\|_{L^p}$ are finite exactly on the common set of $f$ satisfying 1-3,
and on that set they are equivalent:
$$\|M^0_\varphi f\|_{L^p}\le\|M^{*,a}_\varphi f\|_{L^p}\le(1+a)^NP_N(\varphi)\|M_Nf\|_{L^p},\qquad \|M_Nf\|_{L^p}\le C\|M^0_\varphi f\|_{L^p},$$
with $C=C(n,p,N,\varphi)<\infty$ depending only on $n,p,N$ and finitely many
Schwartz seminorms of $\varphi$ together with quantitative nonvanishing data for $\widehat\varphi$ near zero (as used in the deconvolution lemma). Consequently the space $H^p(\mathbb R^n)$ of
[[def-real-hardy-space-by-a-radial-maximal-function]] does not depend on the
choice of admissible $\varphi$, and for each admissible $\varphi$ the grand
maximal function may be used to define the same space with an equivalent
quasi-norm for every order $N\ge N_0(n,p,\varphi)$; for two admissible kernels
$\varphi,\psi$ the two radial definitions agree because both are equivalent to
$M_N$ for every $N\ge\max(N_0(n,p,\varphi),N_0(n,p,\psi))$. The recorded
admissible thresholds of the sources are $N\ge\lfloor n/p\rfloor+1$ for the
nontangential class $\mathcal F_N$ with derivatives through $N+1$ [DKKP],
$N>1+n/p$ for the radial class $B_N$ with derivatives through $N$
[MSV, section 1, p. 16, for $0<p\le1$], and $N>n/p+n+1$ [CUW], stated there for the grand maximal functions normalised
by the test classes of those papers; the proof below uses an unspecified finite
$N_0(n,p,\varphi)$ that is at least as large as the order thresholds consumed
by the finitely many comparison estimates for the fixed kernel $\varphi$
(the deconvolution constants of the comparison lemmas depend on the kernel, so
the order threshold asserted here depends on $\varphi$ as well as on $n$ and
$p$), and the existence of such a finite threshold is what is asserted.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p<\infty$, $\varphi\in\mathcal S$ with $\int\varphi\ne0$, $f\in\mathcal S'$, and a fixed order $N$.

[F1] Pointwise domination by the grand maximal function: $M^0_\varphi f\le M^{*,1}_\varphi f\le2^NP_N(\varphi)M_Nf$ and $M^{*,a}_\varphi f\le(1+a)^NP_N(\varphi)M_Nf$ for every $a\ge1$, provided $N$ is the order of the grand maximal function ([[lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions]]).

[F2] Tangential comparison: for $0<q<p$ and $T=n/q$, $\|M_{\varphi,T}f\|_{L^p}\le C_{n,p,q}\|M^{*,1}_\varphi f\|_{L^p}$ ([[lem-tangential-maximal-function-norm-bound]]).

[F3] Grand dominated by tangential: for every $T>0$ there are $N_2(n,\varphi,T)$ and $C_0$ with $M_Nf\le C_0M_{\varphi,T}f$ whenever $N\ge N_2$ ([[lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function]]).

[F4] Good-set estimates: assertion 5 of [[lem-truncated-maximal-function-estimates]] uses the extended centered average $\widetilde M$ of that item for general nonnegative Borel inputs. When $M^0_\varphi f\in L^p$ and $q_0=p/2$, the input $(M^0_\varphi f)^{q_0}$ belongs to $L^2\subset L^1_{\mathrm{loc}}$, so $\widetilde M=M$ and the standard maximal operator can be used. Assertions 1-4 of the same lemma provide the truncated functions $M^{\epsilon,L}_{\varphi,j}$ and their finiteness, grand/tangential comparison, tangential/aperture-one comparison and good-set bound.

[F5] Hardy-Littlewood boundedness: $\|Mg\|_{L^r}\le C_{n,r}\|g\|_{L^r}$ for $1<r<\infty$ ([[cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded]]).

[F6] The maximal functions are Borel measurable, so all $L^p$ expressions are meaningful with values in $[0,\infty]$ ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]).

[F7] $L^2(\mathbb R^n)\subset L^1_{\mathrm{loc}}(\mathbb R^n)$: on each compact $K$, Holder gives $\int_K|g|\le\lambda(K)^{1/2}\|g\|_2$, and compact sets have finite measure because they are bounded ([[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F8] If nonnegative measurable functions $h_m$ increase pointwise to $h$, then their integrals increase to $\int h$ by the monotone convergence theorem ([[thm-monotone-convergence-for-the-integral]]).



**Proof technique:** a priori good-set argument, then removal of the a priori finiteness by truncation, then the pointwise domination for the converse.

## Proof

**Proof technique:** direct.

1.1 A priori estimate. Assume $M^{*,1}_\varphi f\in L^p$ and let $q_0=p/2$, $T=2n/p$, so that $T=n/q_0$ and $q_0<p$. Let $N_2=N_2(n,\varphi,T)$ and $C_0=C_0(n,\varphi,T)$ be the constants of [F3], let $C_T=C_{n,p,q_0}$ be the norm constant from [F2], and let $C_H=C_{n,2}^{1/q_0}$ be the powered Hardy-Littlewood constant from [F5] at $r=2$. Put $C_1=C_0C_T$ and $\lambda=2^{1/p}C_1$, so that $\|M_Nf\|_{L^p}\le C_1\|M^{*,1}_\varphi f\|_{L^p}$ by [F2], [F3] for every $N\ge N_2$. Let $N_3=N_3(n,\varphi,q_0,\lambda)$ be the threshold of [F4, assertion 5]; fix $N\ge\max(N_2,N_3)$ and let $C_4=C_4(n,\varphi,q_0,\lambda,N)$ be the constant of [F4, assertion 5] at this order. Set $F=\{x:M_Nf(x)\le\lambda M^{*,1}_\varphi f(x)\}$. On $F^c$ one has $M^{*,1}_\varphi f\le\lambda^{-1}M_Nf$ pointwise, hence $\|M^{*,1}_\varphi f\,\chi_{F^c}\|_{L^p}^p\le\lambda^{-p}\|M_Nf\|_{L^p}^p\le(C_1/\lambda)^p\|M^{*,1}_\varphi f\|_{L^p}^p=\tfrac12\|M^{*,1}_\varphi f\|_{L^p}^p$. On $F$, [F4, assertion 5] gives $M^{*,1}_\varphi f\le C_4\widetilde M((M^0_\varphi f)^{q_0})^{1/q_0}$ at every point at which $M^{*,1}_\varphi f$ is finite, hence almost everywhere. Since [F1] gives $M^0_\varphi f\le M^{*,1}_\varphi f$, we have $(M^0_\varphi f)^{q_0}\in L^2$; [F7] gives its local integrability and hence $\widetilde M=M$ on this input. Integrating, $$\|M^{*,1}_\varphi f\,\chi_F\|_{L^p}\le C_4\|M((M^0_\varphi f)^{q_0})^{1/q_0}\|_{L^p}=C_4\|M((M^0_\varphi f)^{q_0})\|_{L^{p/q_0}}^{1/q_0}\le C_4C_H\|(M^0_\varphi f)^{q_0}\|_{L^{p/q_0}}^{1/q_0}=C_4C_H\|M^0_\varphi f\|_{L^p}$$ by [F5] with $r=p/q_0=2>1$. Combining the two pieces, $\|M^{*,1}_\varphi f\|_{L^p}^p\le(C_4C_H)^p\|M^0_\varphi f\|_{L^p}^p+\tfrac12\|M^{*,1}_\varphi f\|_{L^p}^p$, so $\|M^{*,1}_\varphi f\|_{L^p}\le2^{1/p}C_4C_H\|M^0_\varphi f\|_{L^p}$; this is the a priori estimate, with a constant independent of $f$ at each fixed order $N\ge\max(N_2,N_3)$. [F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 Finiteness of $M^{*,1}_\varphi f$ when $M^0_\varphi f\in L^p$. Let $f$ be arbitrary with $M^0_\varphi f\in L^p$. Choose $L\ge L_0(f,n,\varphi,p)$ as in assertion 1 of [F4] for the fixed exponent $p$ of the theorem and then $N'=N'(n,\varphi,T,L)$ as in assertions 2-4 of [F4], where $T=2n/p$ and $q_0=p/2$ are as above (note that $N'$ may be much larger than the theorem's fixed $N$; it is used only to prove finiteness). With $0<\epsilon\le1/2$ set $M_1=M^{\epsilon,L}_{\varphi,1}f$, $M_0=M^{\epsilon,L}_{\varphi,0}f$, $M_T=M^{\epsilon,L}_{\varphi,T}f$, $M_G=M^{\epsilon,L}_{N'}f$ and $F_\epsilon=\{x:M_G(x)<\lambda M_1(x)\}$ with $\lambda=2^{1/p}C_1'$, $C_1'=C_1'(n,\varphi,T,L)$ the product of the constants in assertions 2 and 3 of [F4]. Assertion 1 of [F4] gives $\|M_1\|_{L^p}<\infty$. On $F_\epsilon^c$ one has $M_1\le\lambda^{-1}M_G$, so $\|M_1\chi_{F_\epsilon^c}\|_{L^p}^p\le\lambda^{-p}\|M_G\|_{L^p}^p\le(C_1'/\lambda)^p\|M_1\|_{L^p}^p=\tfrac12\|M_1\|_{L^p}^p$. On $F_\epsilon$, assertion 4 of [F4] gives $M_1\le C_3\widetilde M((M^0_\varphi f)^{q_0})^{1/q_0}$ with $C_3=C_3(n,\varphi,q_0,T,L,\lambda,N')$. Since $(M^0_\varphi f)^{q_0}\in L^2$, [F7] gives $\widetilde M=M$ on this input; integrating as in step 1.1 and using [F5] gives $\|M_1\chi_{F_\epsilon}\|_{L^p}\le C''\|M^0_\varphi f\|_{L^p}$ with $C''$ independent of $\epsilon$ (but depending on the fixed $L$ and hence on $f$). Hence $\|M^{\epsilon,L}_{\varphi,1}f\|_{L^p}\le2^{1/p}C''\|M^0_\varphi f\|_{L^p}$ for every $0<\epsilon\le1/2$. Take $\epsilon_m=1/(m+2)$ for $m\ge0$. Then the weights $t^L/(t+\epsilon_m+\epsilon_m|y|)^L$ increase pointwise to $1$ and the ranges $0<t<1/\epsilon_m$ increase to $(0,\infty)$. For each fixed witness $(t,y)$, eventually $t<1/\epsilon_m$ and its weight tends to $1$, so $M^{\epsilon_m,L}_{\varphi,1}f\nearrow M^{*,1}_\varphi f$ pointwise. By [F8], monotone convergence gives $\|M^{*,1}_\varphi f\|_{L^p}\le2^{1/p}C''\|M^0_\varphi f\|_{L^p}<\infty$. [F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 The implication 1$\Rightarrow$3 and the norm bound. Let $f$ satisfy 1. By step 2.1, $M^{*,1}_\varphi f\in L^p$, so the a priori estimate of step 1.1 applies at every order $N\ge N_0(n,p,\varphi):=\max(N_2(n,\varphi,2n/p),\,N_3(n,\varphi,p/2,2^{1/p}C_1))$ and gives $\|M^{*,1}_\varphi f\|_{L^p}\le C\|M^0_\varphi f\|_{L^p}$ with $C=2^{1/p}C_4(n,\varphi,p/2,2^{1/p}C_1,N)C_H$ independent of $f$, where $C_H=C_{n,2}^{1/q_0}$ is the constant from [F5] at $r=2$; then [F2], [F3] give $\|M_Nf\|_{L^p}\le C_1\|M^{*,1}_\varphi f\|_{L^p}\le C_1C\|M^0_\varphi f\|_{L^p}$ for the same orders $N\ge N_0(n,p,\varphi)$, since the estimates of steps 1.1 and 2.1 hold with the stated constants for every such $N$. Thus 1 implies 3 for every $N\ge N_0(n,p,\varphi)$, with the stated norm bound. [step 1.1, step 2.1, F2, F3, F5, algebra]

4.1 The remaining implications. If 3 holds, then [F1] gives $M^0_\varphi f\le2^NP_N(\varphi)M_Nf\in L^p$ and $M^{*,a}_\varphi f\le(1+a)^NP_N(\varphi)M_Nf\in L^p$ for every $a\ge1$, so 3 implies 1 and 2 for every aperture, with the displayed bounds (the first inequality $\|M^0\|\le\|M^{*,a}\|$ is pointwise since $M^0_\varphi f\le M^{*,a}_\varphi f$). If 2 holds for some $a$, then $M^0_\varphi f\le M^{*,a}_\varphi f\in L^p$ pointwise, so 2 implies 1. Hence all three assertions are equivalent, the quantities are finite exactly on the common set, and the displayed equivalence of extended norms holds with constants depending only on $n,p,N$ and the kernel data used in the deconvolution comparison and in $P_N(\varphi)$. The last sentence about the kernel-independence of $H^p$ follows by applying the equivalence to two admissible kernels $\varphi,\psi$ and a common order $N\ge\max(N_0(n,p,\varphi),N_0(n,p,\psi))$. This proves the theorem. [step 3.1, F1, F6] ∎
