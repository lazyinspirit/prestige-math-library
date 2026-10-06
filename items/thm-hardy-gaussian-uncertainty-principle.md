---
id: thm-hardy-gaussian-uncertainty-principle
kind: theorem
title: "Hardy's Gaussian uncertainty principle in $\\mathbb R^n$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - cor-uniqueness-of-the-l-one-fourier-transform
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - lem-gaussian-decay-gives-an-entire-fourier-laplace-transform
  - lem-hardy-entire-growth-rigidity
  - lem-separately-holomorphic-vanishing-on-a-real-box-is-zero
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Terence Tao, Hardy's uncertainty principle (blog post, 18 February 2009)"
      url: "https://terrytao.wordpress.com/2009/02/18/hardys-uncertainty-principle/"
      locator: "Section 1, the complex-variable proof with the sector Phragmén–Lindelöf tweak"
    - title: "Aingeru Fernández-Bertolín and Eugenia Malinnikova, Dynamical Versions of Hardy's Uncertainty Principle: A Survey (arXiv:2210.03369)"
      url: "https://arxiv.org/pdf/2210.03369"
      locator: "Theorem 1 and the higher-dimensional remark, p. 2"
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§5, Theorem 5.2 and Corollary 5.3, pp. 11–12"
---

## Statement

Assume countable choice. Let $n\ge1$ and $a,b,C>0$ and let $f:\mathbb R^n\to\mathbb C$ be
measurable with $|f(x)|\le Ce^{-\pi a|x|^2}$ for almost every $x$; then
$f\in L^1$ and $\widehat f$ is its continuous $L^1$ transform
([[def-fourier-transform-on-l-one-of-rn]]). Suppose
$|\widehat f(\xi)|\le Ce^{-\pi b|\xi|^2}$ for every $\xi\in\mathbb R^n$. Then:
(i) if $ab>1$, $f=0$ almost everywhere; (ii) if $ab=1$, there is
$c\in\mathbb C$ with $f(x)=ce^{-\pi a|x|^2}$ for almost every $x$; necessarily
$c=\widehat f(0)\,a^{n/2}$ with $\widehat f(0)=\int f$. Equality in (ii) is
asserted almost everywhere only; no continuity of $f$ is assumed.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), reals $a,b,C>0$, and a measurable $f:\mathbb R^n\to\mathbb C$ with $|f(x)|\le Ce^{-\pi a|x|^2}$ for almost every $x$ and $|\widehat f(\xi)|\le Ce^{-\pi b|\xi|^2}$ for every $\xi\in\mathbb R^n$.

[F1] Countable choice is assumed; it is the hypothesis carried by the entire continuation, the Gaussian transform and the uniqueness theorem below ([[def-countable-choice]]).

[F2] Gaussian decay gives an entire continuation: $f\in L^1$, $F(z):=\int_{\mathbb R^n}f(x)e^{-2\pi i\,x\cdot z}dx$ converges absolutely for every $z\in\mathbb C^n$, has entire coordinate slices, satisfies $F(x)=\widehat f(x)$ for real $x$, and $|F(z)|\le Ca^{-n/2}e^{\pi|\operatorname{Im}z|^2/a}$ for every $z\in\mathbb C^n$ ([[lem-gaussian-decay-gives-an-entire-fourier-laplace-transform]]).

[F3] One-variable rigidity: if $a,b>0$, $C_1,C_2\ge0$ and the entire $\varphi:\mathbb C\to\mathbb C$ satisfies $|\varphi(x+iy)|\le C_1e^{\pi y^2/a}$ and $|\varphi(x)|\le C_2e^{-\pi bx^2}$ for all real $x,y$, then $\varphi\equiv0$ when $ab>1$, and $\varphi(z)=\varphi(0)e^{-\pi z^2/a}$ for all $z\in\mathbb C$ when $ab=1$ ([[lem-hardy-entire-growth-rigidity]]).

[F4] A separately holomorphic $G:\mathbb C^n\to\mathbb C$ vanishing on a nondegenerate real box is identically zero ([[lem-separately-holomorphic-vanishing-on-a-real-box-is-zero]]).

[F5] For every $t>0$ the Gaussian $e^{-\pi t|x|^2}$ is absolutely integrable with $L^1$ transform $t^{-n/2}e^{-\pi|\xi|^2/t}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F6] The $L^1$ transform is defined by $\widehat g(\xi)=\int g(x)e^{-2\pi ix\cdot\xi}dx$, so $\widehat g(0)=\int g$; if $g,h\in L^1$ have equal transforms then $g=h$ almost everywhere; a scalar multiple has the correspondingly scaled transform ([[def-fourier-transform-on-l-one-of-rn]], [[cor-uniqueness-of-the-l-one-fourier-transform]]).

## Proof

**Proof technique:** apply one-variable rigidity on coordinate slices, then iterate the critical factors.

1.1 Entire continuation. By [F1, F2], $f\in L^1$ and its continuation $F$ has entire coordinate slices, $F(x)=\widehat f(x)$ for real $x$, and $$|F(z)|\le Ca^{-n/2}e^{\pi|\operatorname{Im}z|^2/a},\qquad |F(x)|\le Ce^{-\pi b|x|^2}.$$ [F1, F2, given]

2.1 Coordinate rigidity. Fix $j$ and real coordinates $y_k$ for $k\ne j$. The entire slice $\varphi(w)=F(y_1,\ldots,y_{j-1},w,y_{j+1},\ldots,y_n)$ satisfies $$|\varphi(u+iv)|\le Ca^{-n/2}e^{\pi v^2/a},\qquad |\varphi(u)|\le Ce^{-\pi b\sum_{k\ne j}y_k^2}e^{-\pi bu^2}.$$ Thus [F3] applies with $C_1=Ca^{-n/2}$ and $C_2=Ce^{-\pi b\sum_{k\ne j}y_k^2}$. If $ab>1$, every such slice is zero, so $F=0$ on $\mathbb R^n$. If $ab=1$, every such slice satisfies $\varphi(w)=\varphi(0)e^{-\pi w^2/a}$. [F3, step 1.1]

3.1 Critical factorization. If $ab=1$, apply the slice identity in step 2.1 successively to coordinates $1,\ldots,n$ of a real point $x$, leaving the other coordinates real at each application. This gives $$F(x)=F(0)\prod_{j=1}^ne^{-\pi x_j^2/a}=F(0)e^{-\pi|x|^2/a}.$$ In fact the same formula holds for complex $z$: the difference $F(z)-F(0)e^{-\pi\sum_jz_j^2/a}$ has entire coordinate slices and vanishes on $[0,1]^n$, so [F4] makes it identically zero. This includes $n=1$. [F4, step 2.1]

4.1 Fourier uniqueness and the constant. If $ab>1$, step 2.1 gives $\widehat f=0$ and [F6] yields $f=0$ almost everywhere. If $ab=1$, [F5] says $g(x)=F(0)a^{n/2}e^{-\pi a|x|^2}$ is integrable with transform $F(0)e^{-\pi|\xi|^2/a}$, equal to $\widehat f$ by step 3.1. By [F6], $f=g$ almost everywhere. Hence the scalar is $c=F(0)a^{n/2}=\widehat f(0)a^{n/2}$, and $\widehat f(0)=\int f$. [F2, F5, F6, step 2.1, step 3.1] ∎
