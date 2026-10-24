---
id: cor-separable-infinite-dimensional-hilbert-space-is-ell-two
kind: corollary
title: A separable infinite-dimensional Hilbert space is $\ell^2$
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, def-separable-space, lem-countable-iff-surjection-from-n, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, def-square-summable-family-on-an-arbitrary-index-set, lem-finite-bessel-inequality, lem-pythagorean-theorem-and-finite-orthogonal-sums, def-hilbert-space, thm-monotone-convergence, thm-metric-closure-characterisation, lem-subset-of-countable, def-countable, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-linear-subspace, thm-cauchy-schwarz-in-an-inner-product-space, def-dense-top]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.52, Theorem 2.6"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, printed pp.72–80"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
verification:
  audited: 2026-09-22
---

## Statement

**In ZF**, every separable infinite-dimensional real or complex Hilbert space
$H$ ([[def-separable-space]], [[def-hilbert-space]]) is linearly isometric to
$\ell^2(\mathbb N,\mathbb F)$
([[def-square-summable-family-on-an-arbitrary-index-set]]): there is a linear
bijection $\Phi:H\to\ell^2(\mathbb N,\mathbb F)$ with
$\|\Phi(x)\|_2=\|x\|$ and
$\langle\Phi(x),\Phi(y)\rangle_{\ell^2}=\langle x,y\rangle$ for all $x,y\in H$.

Here **infinite-dimensional** means what is used below and nothing more: $H$ is
not the linear span of any finite set of vectors. No choice principle is used:
one existential dense set and one enumeration witness are instantiated,
Gram–Schmidt is deterministic, and only the canonical initial partial sums of
the resulting sequence occur.

## Facts & Assumptions

[A1] Separability supplies an at most countable dense subset $D\subseteq H$, and a nonempty at most countable set is a surjective image of $\mathbb N$ ([[def-separable-space]], [[lem-countable-iff-surjection-from-n]]).

[A2] Gram–Schmidt applied to a sequence with dense range produces an orthonormal set $L$ with closed linear span $H$, enumerated canonically by the stages of the recursion; the enumeration is a bijection of an infinite subset of $\mathbb N$, hence a bijection onto $\mathbb N$ when $L$ is infinite ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[lem-subset-of-countable]]).

[A3] If $S=\{e_0,\dots,e_{m-1}\}$ is a finite orthonormal set whose closed linear span is $H$, fix $x\in H$, put $p=\sum_{j<m}\langle x,e_j\rangle e_j\in\operatorname{span}S$, and set $w=x-p$. Finite orthonormal expansion makes $w\perp S$, hence $w\perp\operatorname{span}S$. If $w\ne0$, then for every $y\in\operatorname{span}S$, Cauchy–Schwarz gives $\|x-y\|\,\|w\|\ge|\langle x-y,w\rangle|=\|w\|^2$, so the ball of radius $\|w\|/2$ about $x$ misses $\operatorname{span}S$, contradicting $x\in\overline{\operatorname{span}S}=H$. Thus $w=0$, so $x=p\in\operatorname{span}S$ and $H$ is spanned by finitely many vectors. This closure argument chooses no approximating sequence ([[lem-finite-bessel-inequality]], [[lem-pythagorean-theorem-and-finite-orthogonal-sums]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A4] For an orthonormal sequence $(e_k)_{k\in\mathbb N}$ with closed linear span $H$ and $x\in H$, the partial sums $s_n=\sum_{k<n}\langle x,e_k\rangle e_k$ satisfy $\|x-s_n\|^2=\|x\|^2-t_n$ with $t_n=\sum_{k<n}|\langle x,e_k\rangle|^2$, and $\|x-s_n\|$ is the distance from $x$ to $\operatorname{span}\{e_0,\dots,e_{n-1}\}$; these subspaces increase to the span of the whole sequence, whose distance from $x$ is $0$ because that span is dense ([[lem-finite-bessel-inequality]], [[thm-metric-closure-characterisation]], [[def-dense-top]]).

[A5] Every nonincreasing sequence of reals bounded below converges to its infimum, and every nondecreasing sequence of reals bounded above converges to its supremum ([[thm-monotone-convergence]]).

[A6] For every finite pairwise orthogonal family $z_1,\dots,z_r$, $\|\sum_{j=1}^r z_j\|^2=\sum_{j=1}^r\|z_j\|^2$; a vector of $\ell^2(\mathbb N,\mathbb F)$ has finite square sum $T=\sum_{k\in\mathbb N}|a_k|^2=\sup_nt_n$ with $t_n=\sum_{k<n}|a_k|^2$, and $H$ is complete for its norm, so a Cauchy sequence in $H$ converges ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-hilbert-space]]).

[A7] The span of a set of vectors is a linear subspace, and an inner product is linear in its first argument ([[def-linear-subspace]], [[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** A separable infinite-dimensional Hilbert space $H$ over $\mathbb F$.

1.1 Choose an at most countable dense set $D\subseteq H$. Since $H$ is infinite-dimensional it is not spanned by the empty set, so $H\ne\{0\}$ and $D\ne\varnothing$; by [A1] there is a surjection $s:\mathbb N\to D$, and the sequence $x_n:=s(n)$ has dense range. [A1, A7]

2.1 Apply Gram–Schmidt to $(x_n)$: the resulting orthonormal set $L$ has closed linear span $H$. The set $L$ must be infinite: otherwise $L$ is finite and [A3] would exhibit $H$ as the span of finitely many vectors, contradicting infinite-dimensionality. Hence the canonical stage enumeration is a bijection of an infinite subset of $\mathbb N$ onto $L$, giving an orthonormal sequence $(e_k)_{k\in\mathbb N}$ whose closed linear span is $H$. [step 1.1, A2, A3]

3.1 For $x\in H$ put $t_n:=\sum_{k<n}|\langle x,e_k\rangle|^2$ and consider $d_n:=\|x-\sum_{k<n}\langle x,e_k\rangle e_k\|$. Each $d_n$ equals the distance from $x$ to $\operatorname{span}\{e_0,\dots,e_{n-1}\}$, these subspaces increase with $n$, and their union is the span of the sequence, which is dense; hence $\inf_nd_n=0$. The sequence $(d_n)$ is nonincreasing and bounded below, so by [A5] it converges to $0$; since $d_n^2=\|x\|^2-t_n$, the sequence $t_n$ converges to $\|x\|^2$, that is $\sum_{k\in\mathbb N}|\langle x,e_k\rangle|^2=\|x\|^2$ and $\sum_{k<n}\langle x,e_k\rangle e_k\to x$. [step 2.1, A4, A5]

3.2 Conversely let $a=(a_k)_{k\in\mathbb N}\in\ell^2(\mathbb N,\mathbb F)$ and put $\sigma_n:=\sum_{k<n}a_ke_k$ and $t_n:=\sum_{k<n}|a_k|^2$. For $m\ge n$ Pythagoras gives $\|\sigma_m-\sigma_n\|^2=t_m-t_n\le T-t_n$ where $T=\sup_nt_n$ is finite; by [A5] the nondecreasing bounded sequence $(t_n)$ converges to $T$, so the tails $T-t_n$ tend to $0$ and $(\sigma_n)$ is Cauchy; by completeness it converges to some $S\in H$. Then $\langle S,e_j\rangle=a_j$ for every $j$, by continuity of the pairing, and $\|S\|^2=\sum_{k\in\mathbb N}|a_k|^2$. [step 2.1, A6, A7]

4.1 Define $\Phi(x):=(\langle x,e_k\rangle)_{k\in\mathbb N}$. By step 3.1 it takes values in $\ell^2(\mathbb N,\mathbb F)$ and $\|\Phi(x)\|_2=\|x\|$; it is linear by [A7] and injective because $\Phi(x)=0$ forces $\|x\|=0$; by step 3.2 it is surjective, its inverse sending $a$ to the limit $S$ of the partial sums. Inner products are preserved because for finite $n$ one has $\langle\sum_{k<n}\langle x,e_k\rangle e_k,\sum_{k<n}\langle y,e_k\rangle e_k\rangle=\sum_{k<n}\langle x,e_k\rangle\overline{\langle y,e_k\rangle}$ and both sides converge along $n$ to $\langle x,y\rangle$ and to the $\ell^2$ pairing of $\Phi(x),\Phi(y)$. [step 3.1, step 3.2, A7]

5.1 Therefore $\Phi$ is a linear bijection preserving norms and inner products, so the separable infinite-dimensional Hilbert space $H$ is linearly isometric to $\ell^2(\mathbb N,\mathbb F)$ in ZF. [step 4.1] ∎
