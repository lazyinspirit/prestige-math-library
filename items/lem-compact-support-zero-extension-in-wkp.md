---
id: lem-compact-support-zero-extension-in-wkp
kind: lemma
title: Compactly supported Sobolev functions extend by zero in every integer order
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, lem-weak-derivative-is-independent-of-lp-representatives, lem-test-function-cutoffs-and-euclidean-localization, def-complex-lp-and-euclidean-test-function-conventions, def-integral-over-a-measurable-set, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Lemma 1.14(4)–(5)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.3, Lemma 1.14 and its proof, printed pp. 9–11
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), §3.4
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3, Propositions 3.17–3.18, printed pp. 54–55
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, let $k\in\mathbb N_0$, $1\le p\le\infty$ and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Suppose
$u\in W^{k,p}(\Omega;\mathbb K)$ vanishes almost everywhere outside a compact
set $K_0\subset\Omega$. Let $E_0u$ denote the extension of a representative of
$u$ by zero to $\mathbb R^n$, and for $|\alpha|\le k$ let
$E_0(D^\alpha u)$ denote the extension by zero of the corresponding
derivative representative. Then
$$E_0u\in W^{k,p}(\mathbb R^n;\mathbb K),\qquad D^\alpha(E_0u)=E_0(D^\alpha u)\quad\text{almost everywhere, }|\alpha|\le k,$$
and every $L^p$ component norm is preserved:
$$\|E_0(D^\alpha u)\|_{L^p(\mathbb R^n)}=\|D^\alpha u\|_{L^p(\Omega)},\qquad \|E_0u\|_{L^p(\mathbb R^n)}=\|u\|_{L^p(\Omega)},$$
so that $\|E_0u\|_{W^{k,p}(\mathbb R^n)}=\|u\|_{W^{k,p}(\Omega)}$. The case
$k=0$ is included, and complex scalars are handled by the same bilinear
pairing.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; $k\in\mathbb N_0$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $u\in W^{k,p}(\Omega;\mathbb K)$ with a representative that vanishes almost everywhere outside a compact $K_0\subset\Omega$; a multi-index $\alpha$ with $|\alpha|\le k$; and a test function $\varphi\in C_c^\infty(\mathbb R^n)$.

[F1] A class $u$ lies in $W^{k,p}(\Omega;\mathbb K)$ exactly when $u\in L^p(\Omega;\mathbb K)$ and, for every $|\alpha|\le k$, there is a class $D^\alpha u\in L^p(\Omega;\mathbb K)$ with a locally integrable representative satisfying the weak test identity on $\Omega$; the norm is the derivative sum for finite $p$ and the maximum of the essential bounds for $p=\infty$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The defining weak identity reads $\int_\Omega u\,D^\alpha\psi=(-1)^{|\alpha|}\int_\Omega (D^\alpha u)\psi$ for every $\psi\in C_c^\infty(\Omega;\mathbb K)$, with a bilinear pairing and no conjugation; any two locally integrable weak $\alpha$-derivatives agree almost everywhere ([[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F3] If $V\subseteq\Omega$ is open and $v=D^\alpha u$ weakly on $\Omega$, then $v|_V=D^\alpha(u|_V)$ weakly on $V$; consequently, if $u=0$ almost everywhere on an open $V\subseteq\Omega$, then $D^\alpha u=0$ almost everywhere on $V$ ([[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F4] For compact $K_0\subseteq\Omega$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on an open neighbourhood $U$ of $K_0$; this cutoff exists in ZF ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] If a $C^\infty$ function vanishes identically on an open set, then all of its partial derivatives vanish there: along each coordinate direction the function is constant on a small interval, and induction on the order of differentiation gives the assertion.

[F6] The integral over a measurable set is the integral of the product with its indicator, and a function that vanishes off $\Omega$ has the same integral over $\mathbb R^n$ as over $\Omega$; this applies to $|u|^p$ and to $|D^\alpha u|^p$ for finite $p$ ([[def-integral-over-a-measurable-set]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F7] Changing a locally integrable representative on a null set does not change a weak derivative class or an $L^p$ class ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

**Choice use.** The declared principle is Countable Choice, used through the locality and uniqueness interfaces of [F2]–[F3] and through the Sobolev well-definedness recorded in [F1]; the cutoff of [F4] is choice-free, and the computation below is otherwise explicit.

## Proof

**Proof technique:** direct.

1.1 Fix $\alpha$ with $|\alpha|\le k$ and $\varphi\in C_c^\infty(\mathbb R^n)$, and choose $\chi$ as in [F4], with $\chi=1$ on a neighbourhood $U\supseteq K_0$. Since $\Omega\setminus K_0$ is open and $u=0$ almost everywhere on it, [F3] gives $D^\alpha u=0$ almost everywhere on $\Omega\setminus K_0$; in particular $u$ and $D^\alpha u$ vanish almost everywhere off $K_0$. [F3, F4, given]

2.1 The function $\chi\varphi$ lies in $C_c^\infty(\Omega;\mathbb K)$, so the weak identity of [F2] on $\Omega$ applies to it: $$\int_\Omega u\,D^\alpha(\chi\varphi)=(-1)^{|\alpha|}\int_\Omega (D^\alpha u)\,\chi\varphi.$$ [F1, F2, step 1.1]

3.1 Compare the left side of step 2.1 with $\int_\Omega u\,D^\alpha\varphi$. The difference is $\int_\Omega u\,D^\alpha((\chi-1)\varphi)$; the smooth function $(\chi-1)\varphi$ vanishes identically on the open set $U$, so by [F5] all its partial derivatives vanish on $U\supseteq K_0$, while off $K_0$ the factor $u$ vanishes almost everywhere. Hence the integrand vanishes almost everywhere on $\Omega$ and $$\int_\Omega u\,D^\alpha(\chi\varphi)=\int_\Omega u\,D^\alpha\varphi=\int_{\mathbb R^n}(E_0u)\,D^\alpha\varphi.$$ [F5, step 1.1, step 2.1]

3.2 Compare the right side of step 2.1 with $(-1)^{|\alpha|}\int_\Omega (D^\alpha u)\varphi$. The difference is $(-1)^{|\alpha|}\int_\Omega (D^\alpha u)(\chi-1)\varphi$; here $(\chi-1)\varphi$ vanishes on $U$ and $D^\alpha u$ vanishes almost everywhere off $K_0$, so the integrand vanishes almost everywhere. Therefore $$\int_\Omega (D^\alpha u)\,\chi\varphi=\int_\Omega (D^\alpha u)\,\varphi=\int_{\mathbb R^n}E_0(D^\alpha u)\,\varphi.$$ [F3, step 1.1, step 2.1]

4.1 Steps 3.1 and 3.2 together with step 2.1 give $$\int_{\mathbb R^n}(E_0u)\,D^\alpha\varphi=(-1)^{|\alpha|}\int_{\mathbb R^n}E_0(D^\alpha u)\,\varphi$$ for the arbitrary test $\varphi\in C_c^\infty(\mathbb R^n)$ fixed in step 1.1. Since $\varphi$ was arbitrary, $E_0(D^\alpha u)$ is a weak $\alpha$-derivative of $E_0u$ on $\mathbb R^n$, and it is the unique locally integrable class by [F2]. [F2, step 3.1, step 3.2]

5.1 Membership and norms. The extension $E_0u$ is measurable with $|E_0u|=|u|$ on $\Omega$ and $E_0u=0$ off $\Omega$; by [F6], for finite $p$, $$\int_{\mathbb R^n}|E_0u|^p=\int_\Omega|u|^p<\infty,$$ while for $p=\infty$ the two essential suprema agree because the two functions agree almost everywhere on $\Omega$ and the extension vanishes off $\Omega$. Thus $E_0u\in L^p(\mathbb R^n;\mathbb K)$ with equal norm, and the same computation applied to each $E_0(D^\alpha u)$, $|\alpha|\le k$, gives $E_0(D^\alpha u)\in L^p(\mathbb R^n;\mathbb K)$ with $\|E_0(D^\alpha u)\|_{L^p(\mathbb R^n)}=\|D^\alpha u\|_{L^p(\Omega)}$. [F6, step 4.1]

6.1 By step 4.1 and step 5.1 the class $E_0u$ has, for every $|\alpha|\le k$, an $L^p$ weak $\alpha$-derivative on $\mathbb R^n$; [F1] therefore gives $E_0u\in W^{k,p}(\mathbb R^n;\mathbb K)$ with $D^\alpha(E_0u)=E_0(D^\alpha u)$ almost everywhere, and the norm formula of [F1] together with the component equalities of step 5.1 gives $\|E_0u\|_{W^{k,p}(\mathbb R^n)}=\|u\|_{W^{k,p}(\Omega)}$. Changing representatives on null sets changes nothing by [F7]; $k=0$ is the case of the single multi-index $\alpha=0$; complex scalars use the same bilinear pairing componentwise. [F1, F7, step 4.1, step 5.1] ∎
