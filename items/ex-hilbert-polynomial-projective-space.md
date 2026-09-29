---
id: ex-hilbert-polynomial-projective-space
kind: example
title: "Hilbert polynomial of projective space"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-compositions-with-k-parts-are-counted-by-binomial-coefficients
  - def-axiom-of-choice
  - def-binomial-coefficient
  - def-coherent-module-scheme
  - def-euler-characteristic-coherent-sheaf
  - def-factorial-and-falling-factorial
  - def-field
  - def-graded-ring-and-graded-module
  - def-hilbert-function-sheaf-projective
  - def-invertible-sheaf
  - def-monomials-multidegree-and-total-degree
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-twisting-sheaf-proj
  - thm-binomial-closed-formula
  - thm-cohomology-projective-space-twisting-sheaves
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the cohomology and counting
suppliers ([[def-axiom-of-choice]]).

Let $k$ be a field ([[def-field]]), let $n\ge0$, and let
$X=\mathbb P^n_k$ carry its standard embedding
$i=\operatorname{id}:X\hookrightarrow\mathbb P^n_k$ in the convention of
[[def-hilbert-function-sheaf-projective]], with twisting sheaves
$\mathcal O_X(d)$ ([[def-relative-projective-space-standard-charts]],
[[def-twisting-sheaf-proj]]) and twists
$\mathcal G(m)=\mathcal G\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$
([[def-invertible-sheaf]]). Define the **binomial polynomial**
$$\binom{t+n}{n}:=\frac{(t+n)(t+n-1)\cdots(t+1)}{n!}\;\in\;\mathbb Q[t],$$
the empty product being $1$ when $n=0$
([[def-factorial-and-falling-factorial]]). Then for the structure sheaf
$\mathcal O_X$, with $h_{\mathcal O_X}(m)=\dim_kH^0(X,\mathcal O_X(m))$ and
$P_{\mathcal O_X}(m)=\chi(X,\mathcal O_X(m))$
([[def-sheaf-cohomology-derived-global-sections]],
[[def-euler-characteristic-coherent-sheaf]]):

1. $P_{\mathcal O_X}(m)=\chi(X,\mathcal O_X(m))=\binom{m+n}{n}$ for **every**
   $m\in\mathbb Z$, where the right-hand side is the value of the displayed
   polynomial; that is, $\binom{t+n}{n}$ is the Hilbert polynomial of the
   structure sheaf;
2. $h_{\mathcal O_X}(m)=\binom{m+n}{n}$ for every $m\ge0$, and
   when $n\ge1$, $h_{\mathcal O_X}(m)=0$ for $-n\le m\le-1$; when
   $n\ge1$ and $m\le-n-1$ one has $h_{\mathcal O_X}(m)=0$ while
   $P_{\mathcal O_X}(m)=(-1)^n\binom{-m-1}{n}$.

The field $k$ is arbitrary (including $\mathbb F_2$); $n=0$ gives
$\mathbb P^0_k=\operatorname{Spec}k$ with $P_{\mathcal O_X}\equiv1$; the
values $m=0$ and $m=-n$ are included; the natural number
$\binom{m+n}{n}$ of [[def-binomial-coefficient]] agrees with the polynomial
value at every $m\ge0$ by the closed formula [[thm-binomial-closed-formula]].

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a field $k$, an integer $n\ge0$, the projective space $X=\mathbb P^n_k$ with its standard embedding and twisting sheaves $\mathcal O_X(d)$.

[F1] Conventions: with the standard embedding of the statement the twisting sheaf $\mathcal O_X(1)$ is invertible, every twist $\mathcal G(m)=\mathcal G\otimes\mathcal O_X(1)^{\otimes m}$ of a coherent $\mathcal G$ is coherent, and $h_{\mathcal G}(m)=\dim_kH^0(X,\mathcal G(m))$ and $P_{\mathcal G}(m)=\chi(X,\mathcal G(m))$ are defined for every $m\in\mathbb Z$. ([[def-hilbert-function-sheaf-projective]], [[def-relative-projective-space-standard-charts]], [[def-twisting-sheaf-proj]], [[def-invertible-sheaf]], [[def-coherent-module-scheme]], [[def-sheaf-cohomology-derived-global-sections]], [[def-euler-characteristic-coherent-sheaf]])

[F2] Cohomology of the twists: for every commutative ring with $1$ in place of $k$ and all $n\ge0$, $d\in\mathbb Z$, $H^q(X,\mathcal O_X(d))=0$ unless $q=0$ or $q=n$; if $n>0$ then $H^0(X,\mathcal O_X(d))\cong k[x_0,\dots,x_n]_d$ for $d\ge0$ and $H^0(X,\mathcal O_X(d))=0$ for $d<0$, where $k[x_0,\dots,x_n]_d$ is the degree-$d$ graded piece ([[def-graded-ring-and-graded-module]], [[def-polynomial-ring-on-a-family-of-indeterminates]]); and $H^n(X,\mathcal O_X(d))$ is the free $k$-module on the Laurent monomials $x_0^{e_0}\cdots x_n^{e_n}$ with $e_i<0$ for all $i$ and $\sum_ie_i=d$, so, for $n>0$ and a nonzero coefficient ring, it is nonzero precisely when $d\le-n-1$. For $n=0$ one has $X=\operatorname{Spec}k$ and $H^0(X,\mathcal O_X(d))\cong k$ for every $d\in\mathbb Z$, with all higher groups zero. ([[thm-cohomology-projective-space-twisting-sheaves]])

[F3] Counting multi-indices: the monomial $k$-basis of the degree-$m$ piece $k[x_0,\dots,x_n]_m$ is indexed by the multi-indices $(e_0,\dots,e_n)\in\mathbb N^{n+1}$ with $\sum_ie_i=m$, the monomials $x_0^{e_0}\cdots x_n^{e_n}$, by the uniqueness of the expansion of a polynomial ([[def-monomials-multidegree-and-total-degree]], [[def-polynomial-ring-on-a-family-of-indeterminates]]). The number of $(n+1)$-tuples of nonnegative integers with sum $N\ge0$ equals the number of compositions of $N+n+1$ into exactly $n+1$ positive parts, via $(f_i)\mapsto(f_i+1)$, and by [[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]] this number is $\binom{N+n}{n}$ (with $\binom{a}{b}$ the count of [[def-binomial-coefficient]], and the value $0$ when $n+1$ parts exceed $N+n+1$). In particular the degree-$m$ piece of $k[x_0,\dots,x_n]$ has dimension $\binom{m+n}{n}$ for every $m\ge0$, and the set $\{e\in\mathbb Z^{n+1}:e_i<0,\ \sum_ie_i=d\}$ has $\binom{-d-1}{n}$ elements for every $d\le-n-1$. (cor-compositions-with-k-parts-are-counted-by-binomial-coefficients)

[F4] The product formula: for integers $0\le b\le a$ the identity $\binom{a}{b}\cdot b!\cdot(a-b)!=a!$ holds in $\mathbb N$, so $\binom{a}{b}=\frac{a(a-1)\cdots(a-b+1)}{b!}$; hence for $m\ge0$ $$\binom{m+n}{n}=\frac{(m+n)(m+n-1)\cdots(m+1)}{n!},$$ which is the value at $t=m$ of the polynomial $\binom{t+n}{n}$ of the statement, and for $m\le-n-1$ $$(-1)^n\binom{-m-1}{n}=(-1)^n\frac{(-m-1)(-m-2)\cdots(-m-n)}{n!}=\frac{(m+n)(m+n-1)\cdots(m+1)}{n!},$$ the last equality because each factor $m+j$ for $1\le j\le n$ is the negative of $-m-j$; if $-n\le m\le-1$ then one of the factors $m+n,\dots,m+1$ is $0$, so the polynomial value vanishes. ([[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]], [[def-binomial-coefficient]])

[F5] The Axiom of Choice is the choice principle named in the statement, inherited from the cohomology computation and the counting corollary cited above. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: compute $\chi(X,\mathcal O_X(m))$ from the complete projective-space cohomology computation, count degree-$m$ monomials and strictly negative Laurent exponent vectors by the composition formula, and compare the resulting values with the polynomial $\binom{t+n}{n}$ in the three ranges of $m$.

1.1 Values of the polynomial. By [F4] the polynomial $\binom{t+n}{n}$ of the statement takes at an integer $m$ the value $\binom{m+n}{n}$ when $m\ge0$, the value $0$ when $-n\le m\le-1$, and the value $(-1)^n\binom{-m-1}{n}$ when $m\le-n-1$; for $n=0$ the middle range is empty and $\binom{t}{0}=1$ for all $t$. [F4]

1.2 Zero-dimensional projective space and nonnegative twists. If $n=0$, then for every integer $m$ the twist $\mathcal O_X(m)$ is trivial on $X=\mathbb P^0_k=\operatorname{Spec}k$ by [F2], so $h_{\mathcal O_X}(m)=\chi(X,\mathcal O_X(m))=1=\binom{m}{0}$; this handles all negative twists when $n=0$. Now assume $n\ge1$ and let $m\ge0$. By [F3] the degree-$m$ piece of $k[x_0,\dots,x_n]$ has a basis indexed by the multi-indices with sum $m$, hence has dimension $\binom{m+n}{n}$; [F2] gives $H^0(X,\mathcal O_X(m))\cong k[x_0,\dots,x_n]_m$ and the vanishing of all higher cohomology of $\mathcal O_X(m)$. Therefore $h_{\mathcal O_X}(m)=\binom{m+n}{n}$ and the Euler characteristic, an alternating sum with a single nonzero term, equals the same number; by 1.1 this is the value of $\binom{t+n}{n}$ at $t=m$; the definitions of $h_{\mathcal O_X}$ and of the Euler characteristic, and the coherence of the twists, are those of [F1]. [F1, F2, F3, 1.1]

1.3 Negative twists. Let $m<0$ and first suppose $-n\le m\le-1$, which forces $n\ge1$. By [F2] one has $H^0(X,\mathcal O_X(m))=0$ because $m<0$, and $H^n(X,\mathcal O_X(m))=0$ because $m>-n-1$; all other groups vanish, so $\chi(X,\mathcal O_X(m))=0$, the value of the polynomial at $t=m$ by 1.1, and also $h_{\mathcal O_X}(m)=0$. [F2, 1.1]

2.1 Deeply negative twists. Assume $n\ge1$ and let $m\le-n-1$. Again $H^0(X,\mathcal O_X(m))=0$ because $m<0$; the only other possibly nonzero group is $H^n(X,\mathcal O_X(m))$, which by [F2] is free on the vectors $e\in\mathbb Z^{n+1}$ with $e_i<0$ and $\sum_ie_i=m$, a set whose cardinality is $\binom{-m-1}{n}$ by [F3]. Hence $h_{\mathcal O_X}(m)=0$ and $\chi(X,\mathcal O_X(m))=(-1)^n\binom{-m-1}{n}$, which by 1.1 is again the value of the polynomial; the case $n=0$ for every integer $m$ was handled in step 1.2. [F2, F3, 1.1]

2.2 Conclusion. For $n=0$, step 1.2 covers every integer $m$. For $n\ge1$, combining 1.2, 1.3 and 2.1, every integer $m$ falls into exactly one of the ranges $m\ge0$, $-n\le m\le-1$ and $m\le-n-1$, and in each case $\chi(X,\mathcal O_X(m))=\binom{m+n}{n}$, the value of the polynomial $\binom{t+n}{n}$. This proves statement 1. For $n\ge1$, the values of $h_{\mathcal O_X}$ asserted in statement 2 are exactly those computed in 1.2, 1.3 and 2.1: $\binom{m+n}{n}$ for $m\ge0$, and $0$ for negative $m$; for $n=0$, step 1.2 gives $h=1$ for all integers $m$. [1.2, 1.3, 2.1]

3.1 Boundaries and choice. The field $k$ is arbitrary, including $k=\mathbb F_2$ where binomial coefficients are still natural-number counts; the case $n=0$ is $\mathbb P^0_k=\operatorname{Spec}k$ with $\mathcal O_X(d)\cong\mathcal O_X$ for every $d$, one cohomology group in degree $0$, of dimension $1$ and $\binom{t+0}{0}=1$, in agreement with 1.2; the value $m=0$ lies in the range of 1.2 and gives $\binom{n}{n}=1$, and $m=-n$ lies at the endpoint of the middle range of 1.3 and gives $0$ for $n\ge1$. The polynomial has rational coefficients by construction and is not claimed to be integral-valued outside the ranges computed. The Axiom of Choice is inherited through [F5] and the suppliers of [F2] and [F3]; no further selection is made. [F2, F3, F5, 1.1, 1.2, 1.3, 2.2] ∎
