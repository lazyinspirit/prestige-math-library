---
id: ex-reflection-extension-on-the-half-line
kind: example
title: Even reflection on the half-line
status: published
origin: pipeline
deps: [thm-wkp-extension-from-a-half-space, def-sobolev-space-wkp-and-its-norm, thm-linear-change-of-variables-for-lebesgue-measure, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Example 2.39
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 2, Example 2.39, printed p. 59
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Corollary 3.13
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, Corollary 3.13, printed p. 62
---

## Example

Assume the Axiom of Choice. Let $u\in W^{1,p}(0,\infty)$, $1\le p\le\infty$,
and define the even reflection $Eu(x):=u(|x|)$ for almost every $x\in\mathbb R$.
Then $Eu\in W^{1,p}(\mathbb R)$, with weak derivative
$$(Eu)'(x)=u'(x)\ \ (x>0),\qquad (Eu)'(x)=-u'(-x)\ \ (x<0),$$
and the norms satisfy
$$\|Eu\|_{W^{1,p}(\mathbb R)}=2^{1/p}\|u\|_{W^{1,p}(0,\infty)}\ \ (1\le p<\infty),\qquad \|Eu\|_{W^{1,\infty}(\mathbb R)}=\|u\|_{W^{1,\infty}(0,\infty)}.$$
The finite-$p$ factor is $2^{1/p}$ and not $2$: the printed factor two in the
source's Example 2.39 is a typographical slip for $p>1$, while the $p=\infty$
normalisation genuinely has factor one.

## Facts & Assumptions

**Given:** the Axiom of Choice; a class $u\in W^{1,p}(0,\infty)$ with $1\le p\le\infty$; and the even reflection $Eu(x)=u(|x|)$.

[L1] Under the assumed Axiom of Choice, half-space extension for $n=1$ gives a bounded linear operator $W^{k,p}(0,\infty)\to W^{k,p}(\mathbb R)$ for every $k\ge0$ and $1\le p\le\infty$, equal to $u$ on $(0,\infty)$. For $k\ge1$, its value at $t<0$ is $\sum_{j=1}^k a_j u(-jt)$, where $\sum_{j=1}^k a_j(-j)^m=1$ for $m=0,\ldots,k-1$; for $k=0$ it is even reflection ([[thm-wkp-extension-from-a-half-space]]).

[L2] Norm conventions: $\|w\|_{W^{1,p}(0,\infty)}=(\|w\|_{L^p}^p+\|w'\|_{L^p}^p)^{1/p}$ for $1\le p<\infty$ and $\|w\|_{W^{1,\infty}(0,\infty)}=\max\{\|w\|_\infty,\|w'\|_\infty\}$, and likewise on $\mathbb R$ ([[def-sobolev-space-wkp-and-its-norm]]).

[L3] Linear change of variables: for the reflection $x\mapsto-x$ and nonnegative measurable $f$, $\int_{-\infty}^0f(x)\,dx=\int_0^\infty f(-y)\,dy$, and $\int_{\mathbb R}|w(|x|)|^p\,dx=2\int_0^\infty|w(y)|^p\,dy$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

## Verification

**Proof technique:** direct.

1.1 Take $k=1$ in [L1]. The moment system for $k=1$ is the single equation $\sum_{j=1}^1a_j(-j)^0=1$, so $a_1=1$ is the unique coefficient, and the extension operator of [L1] is $E_{1,p}u(x)=u(x)$ for $x>0$ and $E_{1,p}u(x)=a_1u(-x)=u(-x)$ for $x<0$; this is the even reflection $Eu(x)=u(|x|)$. Hence $Eu\in W^{1,p}(\mathbb R)$ for every $1\le p\le\infty$, and its weak derivative satisfies $(Eu)'=u'$ on $(0,\infty)$ and $(Eu)'(x)=-u'(-x)$ on $(-\infty,0)$, as the $k=1$ instance of the reflection formula. [L1, given]

2.1 Finite $p$. By [L3] and step 1.1, $\|Eu\|_{L^p(\mathbb R)}^p=2\|u\|_{L^p(0,\infty)}^p$ and $\|(Eu)'\|_{L^p(\mathbb R)}^p=\int_0^\infty|u'(x)|^pdx+\int_{-\infty}^0|u'(-x)|^pdx=2\|u'\|_{L^p(0,\infty)}^p$; adding the two components and using [L2] gives $\|Eu\|_{W^{1,p}(\mathbb R)}^p=2\|u\|_{W^{1,p}(0,\infty)}^p$, that is, $\|Eu\|_{W^{1,p}(\mathbb R)}=2^{1/p}\|u\|_{W^{1,p}(0,\infty)}$. [L2, L3, step 1.1]

3.1 Case $p=\infty$ and the source comparison. Both $x\mapsto|Eu(x)|$ and $x\mapsto|(Eu)'(x)|$ are even and agree on $(0,\infty)$ with $|u|$, respectively $|u'|$, so their essential suprema coincide with those of $u$ and $u'$; by [L2] the maximum norm is unchanged: $\|Eu\|_{W^{1,\infty}(\mathbb R)}=\|u\|_{W^{1,\infty}(0,\infty)}$. The displayed identity in the cited reflection example, which prints factor $2$ for $1\le p<\infty$ and factor $1$ for $p=\infty$, agrees with the computation at $p=1$ and $p=\infty$; the correct finite-$p$ factor is the $2^{1/p}$ of step 2.1. [L2, step 2.1] ∎
