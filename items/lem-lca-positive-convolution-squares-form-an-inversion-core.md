---
id: lem-lca-positive-convolution-squares-form-an-inversion-core
kind: lemma
title: Positive convolution squares form a dense inversion core
dependency_level: 3
deps:
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- lem-lca-translations-and-normalised-local-approximate-identities
- def-positive-definite-function-on-an-abelian-group
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- def-left-haar-integral-and-left-haar-measure
- thm-c-c-is-dense-in-l-p-for-radon-measures
- lem-translations-preserve-compactly-supported-continuous-functions
- thm-minkowski-integral-inequality
- thm-compactness-under-continuous-maps
- thm-finite-products-of-compact-spaces
- def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "T. W. Koerner, Topological Groups (author PDF, Internet Archive snapshot of the dpmms.cam.ac.uk Topg.pdf file)"
    url: "https://web.archive.org/web/2024id_/https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]).
Let $G$ be a locally compact Hausdorff abelian group with Haar measure $m_G$.
For $g\in C_c(G;\mathbb C)$ put $\widetilde g(x):=\overline{g(-x)}$. Then
$g*\widetilde g\in C_c(G;\mathbb C)$ (it is continuous with compact support), it is
positive definite, and
$$(g*\widetilde g)(0)=\int_G|g(x)|^2\,dm_G(x)\ \ge\ 0 .$$
The complex span $E$ of $\{g*\widetilde g:g\in C_c(G;\mathbb C)\}$ is dense in
$L^1(G,m_G)$ and dense in $L^2(G,m_G)$. This is the inversion core of the
page. The claim that the dual integral becomes absolutely controlled for this
core after a compatible scaling of the dual Haar measure is not made here; it
belongs to the compatible dual Haar normalisation theorem, and no proof that
precedes that normalisation may use it.

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ written additively with Haar measure $m_G$, the convolution product and involution of $A=L^1(G,m_G)$ ([[lem-lca-lone-convolution-is-a-commutative-banach-star-algebra]]), and the approximate identity of [[lem-lca-translations-and-normalised-local-approximate-identities]].

[F1] For $u,v\in C_c(G;\mathbb C)$ the convolution $(u*v)(x)=\int_Gu(y)v(x-y)\,dm_G(y)$ is continuous with $\operatorname{supp}(u*v)\subseteq\operatorname{supp}u+\operatorname{supp}v$, a compact set; the same holds after replacing $v$ by its conjugate reflection ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[lem-translations-preserve-compactly-supported-continuous-functions]], [[thm-compactness-under-continuous-maps]], [[thm-finite-products-of-compact-spaces]]).

[F2] Positive definiteness of a function $\phi$ on $G$ means $\sum_{j,k}c_j\overline{c_k}\phi(x_j-x_k)\ge0$ for all finite families and coefficients; the integral is translation invariant ([[def-positive-definite-function-on-an-abelian-group]], [[def-left-haar-integral-and-left-haar-measure]]).

[F3] Real $C_c(G)$ is dense in real $L^p$ under Dependent Choice. Approximating real and imaginary parts separately gives $a,b\in C_c(G)$ with $\|f-(a+ib)\|_p\le\|\operatorname{Re}f-a\|_p+\|\operatorname{Im}f-b\|_p$ arbitrarily small; thus $C_c(G;\mathbb C)$ is dense in $L^p(G,m_G)$ for $1\le p<\infty$ and translations are norm-continuous in $L^p$, with $\|u*f-f\|_p\to0$ along all admissible pairs $(U,u)$ for every $f\in L^p$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[lem-lca-translations-and-normalised-local-approximate-identities]], [[def-dependent-choice]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** direct.

1.1 ($g*\widetilde g$ is a compactly supported continuous function.) For $g\in C_c(G;\mathbb C)$ the conjugate reflection $\widetilde g$ is continuous with compact support $-\operatorname{supp}g$. For $u,v\in C_c(G;\mathbb C)$, the defining integral converges everywhere and $|(u*v)(x+z)-(u*v)(x)|\le\|u\|_\infty\|T_zv-v\|_1\to0$ by translation continuity [F3]. Thus the convolution $g*\widetilde g$ is continuous, and its support lies in the compact set $\operatorname{supp}g-\operatorname{supp}g$, so $g*\widetilde g\in C_c(G;\mathbb C)$. [F1, F3]

1.2 (Positive definiteness and the value at $0$.) Since $\widetilde g(z-y)=\overline{g(y-z)}$, the convolution can be written $(g*\widetilde g)(z)=\int_Gg(y)\overline{g(y-z)}\,dm_G(y)$; at $z=0$ this is $\int_G|g(y)|^2\,dm_G(y)\ge0$. For a finite family $x_1,\dots,x_n$ and coefficients $c_1,\dots,c_n$, translation invariance of $m_G$ ([F2]) and the finite sum rule give $$\sum_{j,k}c_j\overline{c_k}(g*\widetilde g)(x_j-x_k)=\int_G\sum_{j,k}c_j\overline{c_k}\,g(y)\overline{g(y-x_j+x_k)}\,dm_G(y)=\int_G\Bigl|\sum_{j=1}^{n}c_jg(y+x_j)\Bigr|^2dm_G(y)\ge0,$$ the second equality by substituting $y\mapsto y+x_j$ term by term (a translation) and expanding the square. Hence $g*\widetilde g$ is positive definite by [F2]. [F2]

1.3 (The span contains every $f*\widetilde h$.) Let $f,h\in C_c(G;\mathbb C)$. Writing $Q(v)=v*\widetilde v$, direct expansion gives
$$f*\widetilde h=\frac14\bigl(Q(f+h)-Q(f-h)+iQ(f+ih)-iQ(f-ih)\bigr).$$
Each square lies in $E$ and $E$ is a complex vector space, so $f*\widetilde h\in E$. Hence $E$ contains the complex span $E'$ of $\{f*\widetilde h:f,h\in C_c(G;\mathbb C)\}$. [F1]

2.1 (Density.) Let $p\in\{1,2\}$, let $f\in L^p(G,m_G)$ and let $\varepsilon>0$. By [F3] choose $h\in C_c(G;\mathbb C)$ with $\|f-h\|_p<\varepsilon/3$, and then, applying the approximate identity of [F3] to $h$, choose $u\in C_c(G;\mathbb C)$ with $\|u*h-h\|_p<\varepsilon/3$. By step 1.3 the function $u*h=u*(\widetilde{\widetilde h})$ lies in $E$, and $$\|u*h-f\|_p\le\|u*h-h\|_p+\|h-f\|_p<2\varepsilon/3<\varepsilon .$$ Therefore $E$ is dense in $L^p(G,m_G)$ for $p=1$ and $p=2$. [F3, step 1.3]

3.1 Steps 1.1, 1.2 and 2.1 establish that every $g*\widetilde g$ with $g\in C_c(G;\mathbb C)$ is a compactly supported continuous positive definite function with $(g*\widetilde g)(0)=\int_G|g|^2\,dm_G\ge0$, and that the complex span of these squares is dense in $L^1(G,m_G)$ and in $L^2(G,m_G)$. [step 1.1, step 1.2, step 2.1] ∎ 
