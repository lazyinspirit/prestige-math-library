---
id: rem-real-hp-is-quasi-banach-below-one
kind: remark
title: "For $0<p<1$ the $H^p$ functional is a quasi-norm, and $H^p$ is a quasi-Banach space"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-real-hardy-space-by-a-radial-maximal-function, def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions, def-schwartz-space-and-its-seminorms, lem-schwartz-functions-and-all-derivatives-are-integrable, cor-c-one-change-of-variables-for-l-one-functions, lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions, thm-atomic-characterisation-of-real-hp, lem-an-hp-atom-has-uniform-hp-quasinorm, def-countable-choice, def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, thm-newton-leibniz-with-interior-derivative, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-fatou-lemma]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, pp. 15-16: 'for $0<p<1$ this is only a quasinorm' and 'If $p=1$, this quasinorm is a norm, otherwise not'"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "ch. I, section 1.1.1, printed pp. 4-5: the quasi-norm and its equivalence with the atomic quasi-norm"
    - title: "Martin Hiserote, A Characterization of Anisotropic H^1(R^N) by Smooth Homogeneous Multipliers (PhD dissertation, University of Oregon, 2019)"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/2549164c-324f-46dc-9a42-07e76fc68fc0/content"
      locator: "the paragraph after Theorem 5, printed p. 5: the quasi-norm definition $\\|f\\|_{H^p}=\\|M_\\varphi f\\|_p$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. Fix $n\ge1$, $0<p<1$ and an admissible kernel
$\varphi\in\mathcal S(\mathbb R^n)$ with $\int\varphi\ne0$ as in
[[def-real-hardy-space-by-a-radial-maximal-function]]. Its functional is
$p$-subadditive,
$$\|f+g\|_{H^p}^p\le\|f\|_{H^p}^p+\|g\|_{H^p}^p,$$
and fails the ordinary triangle inequality for a pair of elements of this
same $H^p$. It also satisfies
$$\|f+g\|_{H^p}\le2^{1/p-1}\bigl(\|f\|_{H^p}+\|g\|_{H^p}\bigr).$$
Consequently
$d(f,g)=\|f-g\|_{H^p}^p$ is a translation-invariant metric on $H^p$ under
which $H^p$ is complete. Thus $H^p$ is a quasi-Banach space. No statement is
made identifying $H^p$ with the dual of, or a dual of, a Banach space when
$p<1$, and no Banach-space duality theorem is applied to $H^p$ below $p=1$ on
this page; the only duality statement here is $H^p=L^p$ for $p>1$.

## Remarks

The maximal operator is pointwise sublinear:
$M^0_\varphi(f+g)\le M^0_\varphi f+M^0_\varphi g$. Since
$(u+v)^p\le u^p+v^p$ for $u,v\ge0$ and $0<p<1$, integration gives the stated
$p$-subadditivity. The displayed quasi-triangle inequality follows as well
because concavity of $r\mapsto r^p$ gives
$a^p+b^p\le2^{1-p}(a+b)^p$ for $a,b\ge0$; take $p$-th roots after
$\|f+g\|_{H^p}^p\le\|f\|_{H^p}^p+\|g\|_{H^p}^p$.

Here is an $H^p$-specific witness that the ordinary triangle inequality fails;
the proof does not use the later uniform atom estimate. Put
$s=\lfloor n(1/p-1)\rfloor$ and
$$\theta(u)=\begin{cases}e^{-1/(1-u^2)},&|u|<1,\\0,&|u|\ge1,\end{cases}\qquad \rho(x)=\prod_{j=1}^n\theta(x_j),\qquad a=\partial_1^{s+1}\rho.$$
Here $\theta(u)=\beta(1-u^2)$ for the standard flat function of [[def-the-standard-flat-function]]; [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]] establishes smoothness through the endpoints. Thus $a$ is a smooth function on $\mathbb R^n$ supported in $[-1,1]^n$. It is nonzero: otherwise each one-variable section of $\rho$ would have $(s+1)$st derivative zero, hence would be a polynomial of degree at most $s$ by repeated Newton-Leibniz, impossible for its nonzero compact support. Repeated one-variable integration by parts (obtained from the product rule and [[thm-newton-leibniz-with-interior-derivative]]) has no boundary terms and gives
$\int x^\alpha a(x)\,dx=0$ for every multi-index $|\alpha|\le s$: indeed
$\alpha_1\le s$, so $\partial_1^{s+1}x^\alpha=0$. Let
$m=M^0_\varphi a$. For every $x$, the convolution estimate gives
$m(x)\le\|a\|_\infty\|\varphi\|_1$. For $|x|>2\sqrt n$, Taylor's formula
in the variable $y$, with the cancellation moments through order $s$ removed,
gives for every $t>0$
$$|(a*\varphi_t)(x)|\le C_{n,s}\int|a(y)||y|^{s+1} \max_{|\alpha|=s+1}\sup_{0\le\tau\le1} |\partial^\alpha\varphi_t(x-\tau y)|\,dy.$$
Writing $q=n+s+1$, Schwartz decay says for any $r_0>q$ and
$|\alpha|=s+1$,
$$|\partial^\alpha\varphi_t(w)|\le C_{r_0,\alpha} t^{-q}(1+|w|/t)^{-r_0}\le C'_{r_0,\alpha}|w|^{-q}\quad(w\ne0,t>0).$$
Since $|y|\le\sqrt n$ on the support of $a$, this proves
$m(x)\le C|x|^{-q}$ for $|x|>2\sqrt n$. The choice of $s$ gives
$pq=p(n+s+1)>n$, so $m\in L^p$ and $a\in H^p$.

Also $m$ is positive on a nonempty open set. To see this, normalize
$\Phi=\varphi/(\int\varphi)$. By
[[lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions]],
$\Phi_t*a\to a$ in $\mathcal S'$, so some $t_0>0$ has
$a*\varphi_{t_0}\not\equiv0$; otherwise the distributional limit would be
zero. This convolution is continuous, so its absolute value, and hence $m$,
is positive on a nonempty open set. Thus
$A:=\int_{\mathbb R^n}m(x)^p\,dx=\|a\|_{H^p}^p$ is finite and positive.

For $y\in\mathbb R^n$ put $a_y(x)=a(x-y)$ and $m_y(x)=m(x-y)$. Translation
invariance of the convolution and Lebesgue measure gives
$M^0_\varphi a_y=m_y$ and $\|a_y\|_{H^p}=\|a\|_{H^p}$. Pointwise sublinearity
gives $M^0_\varphi(a+a_y)\le m+m_y$, so $a+a_y\in H^p$; the reverse triangle
inequality for this sublinear maximal operator gives
$$M^0_\varphi(a+a_y)(x)\ge|m(x)-m_y(x)|.$$
For $Q_R=[-R,R]^n$, choose $R$ with
$\int_{Q_R}m^p>2^{p-1}A$, possible since $2^{p-1}<1$ and $m^p\in L^1$.
Take $y=Te_1$ with $T>2R$; then $Q_R$ and $Q_R+y$ are disjoint. The scalar
inequality $|u-v|^p\ge u^p-v^p$ for $u,v\ge0$, applied with the local copy
as $u$ on each cube, gives
$$\int_{\mathbb R^n}|m-m_y|^p\,dx\ge 2\int_{Q_R}m^p\,dx-\int_{Q_R}m_y^p\,dx-\int_{Q_R+y}m^p\,dx.$$
As $y\to\infty$ along a coordinate ray, the last two integrals tend to zero
because $m^p\in L^1$. The first term is strictly larger than $2^pA$. Therefore
for all sufficiently large such $y$,
$$\|a+a_y\|_{H^p}^p\ge\int|m-m_y|^p>2^pA =\bigl(\|a\|_{H^p}+\|a_y\|_{H^p}\bigr)^p,$$
which contradicts the ordinary triangle inequality. This proves the claimed
failure within the radial-maximal definition of $H^p$.

Completeness: a complete argument is sketched here for the record. Let $(f_k)$
be Cauchy for $d$. Passing to a subsequence, assume
$\|f_{k+1}-f_k\|_{H^p}^p\le2^{-k}$, and set
$g_k=f_{k+1}-f_k$. By [[thm-atomic-characterisation-of-real-hp]] each $g_k$
has an atomic representation $g_k=\sum_j\lambda_{k,j}a_{k,j}$ with
$\sum_j|\lambda_{k,j}|\le C\|g_k\|_{H^p}\le C2^{-k/p}$; the pairing bound for
atoms [[lem-an-hp-atom-has-uniform-hp-quasinorm]] then gives, for every
$\psi\in\mathcal S$, $|\langle g_k,\psi\rangle|\le C(\psi)\sum_j|\lambda_{k,j}|
\le C'(\psi)2^{-k/p}$, so $\sum_k g_k$ defines a continuous linear functional $h$ bounded by a fixed Schwartz seminorm times $\sum_k2^{-k/p}$, and converges to $h$ in $\mathcal S'$;
put $f=f_0+h$. The same bound applied to the tails shows that $f_k\to f$ in
$\mathcal S'$. For fixed $\varphi$ and $(t,x)$, the convolutions
$(f_k*\varphi_t)(x)$ converge to $(f*\varphi_t)(x)$; taking the supremum after pointwise convergence of each convolution gives $M^0_\varphi(f-f_l)\le\liminf_k M^0_\varphi(f_k-f_l)$. Hence [[thm-fatou-lemma]] applied to
the measurable functions $|M^0_\varphi(f_k-f_l)|^p$ gives
$\|f-f_l\|_{H^p}^p\le\liminf_k\|f_k-f_l\|_{H^p}^p$, which tends to $0$ as
$l\to\infty$; hence $f_l\to f$ in $H^p$ and $f\in H^p$. The metric $d$ is
translation invariant because $M^0_\varphi((f+h)-(g+h))=M^0_\varphi(f-g)$. No Banach duality is used in this argument, and
the completion obtained is the space $H^p$ itself.
