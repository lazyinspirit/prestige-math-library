---
id: lem-chebyshev-constant-is-submultiplicative-root-limit
kind: lemma
title: "The Chebyshev constant is the root limit of monic extremal norms"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-chebyshev-constant-compact-set
  - thm-polynomial-degree-of-a-product-over-a-domain
  - lem-complex-conjugation-and-modulus-laws
  - lem-inf-epsilon
  - thm-nth-roots-exist
  - lem-power-monotone
  - def-limsup-liminf
  - thm-convergence-iff-limsup-equals-liminf
  - lem-limsup-monotone-comparison
  - lem-nth-root-of-constant-tends-to-one
  - lem-finite-set-has-max
  - def-max-min
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, the polynomial extremal problem, printed pp. 175–176"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K\subseteq\mathbb C$ be nonempty and compact, with $t_n(K)$ and
$\operatorname{cheb}(K)$ as in [[def-chebyshev-constant-compact-set]]. Then

$$t_{m+n}(K)\le t_m(K)\,t_n(K)\qquad(m,n\ge1),$$

and consequently the sequence of nonnegative $n$-th roots converges with

$$\lim_{n\to\infty}t_n(K)^{1/n}=\inf_{n\ge1}t_n(K)^{1/n}=\operatorname{cheb}(K).$$

No choice principle is used.

## Facts & Assumptions

**Given:** a nonempty compact $K\subseteq\mathbb C$, the quantities $t_n(K)$ and
$\operatorname{cheb}(K)$ of [[def-chebyshev-constant-compact-set]], and the
standing convention that all polynomials are monic of the stated degree when
said so.

[F1] By definition $t_n(K)=\inf\{\|p\|_K:p\text{ monic of degree }n\}$, with
$\|p\|_K=\sup_{z\in K}|p(z)|$ and $0\le t_n(K)<\infty$; and
$\operatorname{cheb}(K)=\inf_{n\ge1}t_n(K)^{1/n}$
([[def-chebyshev-constant-compact-set]]).

[F2] Over the integral domain $\mathbb C$, a product of nonzero polynomials has
$\deg(fg)=\deg f+\deg g$ and leading coefficient the product of the leading
coefficients; hence a product of monic polynomials is monic of the summed degree
([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[F3] $|zw|=|z||w|$ for all $z,w\in\mathbb C$, and $|z|\ge0$
([[lem-complex-conjugation-and-modulus-laws]]).

[F4] If $S\subseteq\mathbb R$ is nonempty and bounded below and $\ell$ is a
lower bound of $S$, then $\ell=\inf S$ exactly when for every $\varepsilon>0$
there is $s\in S$ with $s<\ell+\varepsilon$
([[lem-inf-epsilon]]).

[F5] For $a\ge0$ and $n\ge1$ the nonnegative $n$-th root $a^{1/n}$ is the unique
$s\ge0$ with $s^n=a$; for $x,y\ge0$ one has $(xy)^{1/n}=x^{1/n}y^{1/n}$, and for
$0\le x\le y$ one has $x^{1/n}\le y^{1/n}$
([[thm-nth-roots-exist]]).

[F6] On $[0,\infty)$ the map $x\mapsto x^n$ is strictly increasing for $n\ge1$
([[lem-power-monotone]]).

[F7] A nonempty finite set of real numbers has a maximum and a minimum
([[lem-finite-set-has-max]], [[def-max-min]]).

[F8] $\limsup$ and $\liminf$ of a real sequence are elements of
$\overline{\mathbb R}$; a sequence converges to $L\in\mathbb R$ if and only if
$\liminf_k x_k=\limsup_k x_k=L$ ([[def-limsup-liminf]],
[[thm-convergence-iff-limsup-equals-liminf]]).

[F9] If $x_k\le y_k$ eventually, then $\limsup_k x_k\le\limsup_k y_k$ and
$\liminf_k x_k\le\liminf_k y_k$ in $\overline{\mathbb R}$
([[lem-limsup-monotone-comparison]]).

[F10] For $c>0$, $c^{1/n}\to1$ as $n\to\infty$
([[lem-nth-root-of-constant-tends-to-one]]).

## Proof

**Proof technique:** direct.

1.1 Fix $m,n\ge1$ and $\varepsilon>0$. Since $t_m(K)$ and $t_n(K)$ are finite lower bounds of their respective nonempty sets by [F1], [F4] supplies a monic polynomial $p$ of degree $m$ with $\|p\|_K<t_m(K)+\varepsilon$ and a monic polynomial $q$ of degree $n$ with $\|q\|_K<t_n(K)+\varepsilon$. By [F2] the product $pq$ is monic of degree $m+n$, and by [F3] one has $|p(z)q(z)|=|p(z)|\,|q(z)|\le\|p\|_K\|q\|_K$ for every $z\in K$, so $\|pq\|_K\le\|p\|_K\|q\|_K<(t_m(K)+\varepsilon)(t_n(K)+\varepsilon)$. As $t_{m+n}(K)$ is a lower bound for the norms of all monic degree-$(m+n)$ polynomials ([F1]), $t_{m+n}(K)<(t_m(K)+\varepsilon)(t_n(K)+\varepsilon)$ for every $\varepsilon>0$; letting $\varepsilon\downarrow0$ gives $t_{m+n}(K)\le t_m(K)t_n(K)$. [F1, F2, F3, F4, algebra]

2.1 Set $u_n:=t_n(K)$ for $n\ge1$ and $L:=\operatorname{cheb}(K)$. Then $u_n\ge0$ and $u_{m+n}\le u_mu_n$ by step 1.1, and $L=\inf_{n\ge1}u_n^{1/n}$ by [F1]; in particular $L\ge0$ and $L\le u_n^{1/n}$ for every $n$. If $u_k=0$ for some $k\ge1$, then iterating the submultiplicative inequality of step 1.1 in the form $u_{n}\le u_k\,u_{n-k}$ for $n>k$ gives $u_n=0$ for every $n\ge k$, so $u_n^{1/n}=0$ for all $n\ge k$ by [F5], the root sequence converges to $0$, and $L=\inf_{n\ge1}u_n^{1/n}=0$ because $L\ge0$ and $0=u_k^{1/k}$ belongs to the set; in this first case $\lim_nt_n(K)^{1/n}=L=\operatorname{cheb}(K)$. [step 1.1, F1, F4, F5]

2.2 Suppose now that $u_n>0$ for every $n\ge1$, and fix $k\ge1$. Put $a:=u_k^{1/k}>0$, $B:=\max\{1,a^{-k}\}\ge1$ and $C:=\max\{1,u_1,\dots,u_{k-1}\}>0$; both maxima exist by [F7] (for $k=1$ the set whose maximum defines $C$ is $\{1\}$). Write an arbitrary $n\ge k$ as $n=qk+r$ with integers $q\ge1$ and $0\le r<k$. Iterating $u_{j+\ell}\le u_ju_\ell$ of step 1.1 gives $u_n\le u_k^{q}\tilde u_r$, where $\tilde u_r:=1$ for $r=0$ and $\tilde u_r:=u_r$ for $1\le r<k$; hence $u_n\le u_k^qC=a^{kq}C$ because $\tilde u_r\le C$. Since $r<k$ one has $a^{-r}\le B$: for $a\ge1$ this is $a^{-r}\le1\le B$, and for $0<a<1$ the inequality $-r\ge-(k-1)$ gives $a^{-r}\le a^{-(k-1)}\le a^{-k}\le B$. Therefore $a^{kq}C\le a^{kq}a^{r}BC=a^{n}BC$, since $1\le a^{r}B$ is the same inequality, and consequently $u_n^{1/n}\le a\,(BC)^{1/n}$ for every $n\ge k$ by [F5] and [F6]. [step 1.1, F5, F6, F7, algebra]

3.1 In the situation of step 2.2, apply [F9] to the eventual inequality just obtained and use that $n\mapsto a(BC)^{1/n}$ converges to $a$ by [F10] and [F8]; hence $\limsup_nu_n^{1/n}\le a=u_k^{1/k}$. Since $k\ge1$ was arbitrary and $L=\inf_k u_k^{1/k}$ ([F1]), given $\varepsilon>0$ the characterization [F4] of the infimum supplies $k$ with $u_k^{1/k}<L+\varepsilon$, so $\limsup_nu_n^{1/n}\le L+\varepsilon$ for every $\varepsilon>0$, that is, $\limsup_nu_n^{1/n}\le L$. On the other hand $L$ is a lower bound of the root sequence by step 2.1, so $\liminf_nu_n^{1/n}\ge L$ ([[def-limsup-liminf]]); hence $\liminf_nu_n^{1/n}=\limsup_nu_n^{1/n}=L$, which by [F8] is convergence of $(u_n^{1/n})$ to $L$. In this second case therefore $\lim_nt_n(K)^{1/n}=\operatorname{cheb}(K)$ as well. [step 2.1, step 2.2, F1, F4, F8, F9, F10]

4.1 The two cases of steps 2.1 and 3.1 are exhaustive (either some $u_k=0$ or $u_n>0$ for all $n$), and in both the root sequence converges to $L=\operatorname{cheb}(K)$; combining with the submultiplicativity proved in step 1.1 gives $t_{m+n}(K)\le t_m(K)t_n(K)$ for all $m,n\ge1$ and $\lim_{n\to\infty}t_n(K)^{1/n}=\inf_{n\ge1}t_n(K)^{1/n}=\operatorname{cheb}(K)$. [step 1.1, step 2.1, step 3.1, F1] ∎
