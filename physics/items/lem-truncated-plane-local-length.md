---
id: lem-truncated-plane-local-length
kind: lemma
title: Lengths of truncated plane local rings
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-length-is-additive-in-short-exact-sequences, def-binomial-coefficient, def-composition-series-and-length-of-a-module, def-dimension, def-field, def-local-ring, def-localisation-at-a-prime-ideal, def-monomials-multidegree-and-total-degree, def-multivariate-polynomial-ring-by-iteration, def-polynomial-ring-over-a-commutative-ring, def-quotient-ring, def-vector-space, lem-evaluation-ideal-is-maximal, lem-ring-units-form-a-group, prop-iterated-localisation, thm-localisation-at-a-prime-is-local, thm-localisation-commutes-with-quotients, thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Statement

Let $k$ be a field, $R=k[x,y]$, $\mathfrak m=(x,y)$ and $O=R_{\mathfrak m}$. For every integer $t\ge0$ the natural map $R/\mathfrak m^t\to O/\mathfrak m^tO$ is an isomorphism, and

$$ \ell_O(O/\mathfrak m^tO)=\dim_k(O/\mathfrak m^tO)=\binom{t+1}{2}=\frac{t(t+1)}{2}.$$

The ring $O/\mathfrak m^tO$ has a composition series whose factors are the one-dimensional $k$-vector spaces spanned by the monomials $x^iy^j$ with $i+j=t-1,t-2,\dots,0$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $R=k[x,y]$ [[def-polynomial-ring-over-a-commutative-ring]], [[def-multivariate-polynomial-ring-by-iteration]], the maximal ideal $\mathfrak m=(x,y)$ [[lem-evaluation-ideal-is-maximal]], the local ring $O=R_{\mathfrak m}$ [[def-localisation-at-a-prime-ideal]], [[thm-localisation-at-a-prime-is-local]], and an integer $t\ge0$.

[F1] Every polynomial in $R$ has a unique finite expansion $\sum c_{ij}x^iy^j$; total degree is the largest $i+j$ with $c_{ij}\ne0$ [[def-monomials-multidegree-and-total-degree]]. Evaluation at $(0,0)$ is the map $f\mapsto f(0,0)$ and its kernel is $\mathfrak m$, so $\mathfrak m$ consists of the polynomials with zero constant term and $R/\mathfrak m\cong k$ [[lem-evaluation-ideal-is-maximal]], [[def-quotient-ring]].

[F2] $O$ is the localisation of $R$ at the prime $\mathfrak m$, its denominators are the elements outside $\mathfrak m$, and it is a local ring with maximal ideal $\mathfrak m O$ [[def-localisation-at-a-prime-ideal]], [[thm-localisation-at-a-prime-is-local]], [[def-local-ring]].

[F3] For an ideal $I$ and a multiplicative set $S$ there is a canonical isomorphism $(S^{-1}R)/(S^{-1}I)\cong\bar S^{-1}(R/I)$ [[thm-localisation-commutes-with-quotients]].

[F4] Length of a module is the number of factors in any composition series, and it is additive in short exact sequences [[def-composition-series-and-length-of-a-module]], [[cor-length-is-additive-in-short-exact-sequences]].

[F5] The class of a unit is a unit; a proper ideal contains no unit; and in a commutative ring $1+u$ is invertible with inverse $\sum_{i=0}^{n-1}(-u)^i$ whenever $u^n=0$ [[lem-ring-units-form-a-group]]. A one-dimensional $k$-vector space is a simple module over $k$ [[def-vector-space]], [[def-composition-series-and-length-of-a-module]].

[F6] $\binom{t+1}{2}$ is the number of $2$-element subsets of $\{0,\ldots,t\}$ [[def-binomial-coefficient]]. The bijection $(i,j)\mapsto\{i,i+j+1\}$ identifies the pairs $i,j\ge0$, $i+j<t$ with these subsets; the inverse for $a<b$ is $(a,b-a-1)$. There are $d+1$ pairs of total degree $d$, and induction on $t$ gives $\sum_{d=0}^{t-1}(d+1)=t(t+1)/2$, with empty sum zero. This proves the binomial formula for all $t\ge0$, including $t=0$. Dimension of a $k$-vector space is the common size of its finite bases [[def-dimension]].

## Proof

1.1 The classes of the monomials $x^iy^j$ with $i+j\le t-1$ form a $k$-basis of $R/\mathfrak m^t$. Indeed every monomial of total degree $\ge t$ is a product of $t$ or more linear forms and so lies in $\mathfrak m^t$, and every element of $\mathfrak m^t$, expanded as a sum of products of elements of $\mathfrak m$, is a sum of monomials of degree $\ge t$; hence $\mathfrak m^t$ is exactly the $k$-span of the monomials of degree $\ge t$ and the displayed classes are a basis of the quotient. Consequently $R/\mathfrak m^t$ is nonzero for $t\ge1$ with $\dim_k(R/\mathfrak m^t)=\#\{(i,j):i+j\le t-1\}=\sum_{d=0}^{t-1}(d+1)=\binom{t+1}{2}$, while $R/\mathfrak m^0=R/R=0$. [F1, F6, given, algebra]

1.2 For $t\ge1$ the ring $R/\mathfrak m^t$ is local with unique maximal ideal $\mathfrak m/\mathfrak m^t$. Let $f\in R\setminus\mathfrak m$; writing $f=c+g$ with $c=f(0,0)\in k^\times$ and $g\in\mathfrak m$, the class of $g$ has $g^t\in\mathfrak m^t$, so the class of $f$ is $c$ times the class of $1+g/c$, which is a unit with inverse the finite geometric sum $\sum_{i=0}^{t-1}(-g/c)^i$. Thus every element outside $\mathfrak m/\mathfrak m^t$ is a unit; since a proper ideal contains no unit, every proper ideal of $R/\mathfrak m^t$ is contained in $\mathfrak m/\mathfrak m^t$, which is therefore the unique maximal ideal. [F1, F5, given, algebra]

2.1 For $t\ge1$ the localisation map $\lambda:R/\mathfrak m^t\to(R/\mathfrak m^t)_{\mathfrak m/\mathfrak m^t}$ is an isomorphism. It is surjective because a denominator outside $\mathfrak m/\mathfrak m^t$ is a unit by step 1.2, so $a/s=a\,s^{-1}$; it is injective because $\lambda(a)=0$ means $ua=0$ for some $u\notin\mathfrak m/\mathfrak m^t$, and $u$ is a unit, whence $a=0$. [step 1.2, F2, algebra]

3.1 For $t\ge1$, by [F3] applied to $R$, the ideal $\mathfrak m^t$ and the multiplicative set $R\setminus\mathfrak m$, there is a canonical isomorphism $(R/\mathfrak m^t)_{\mathfrak m/\mathfrak m^t}\cong O/\mathfrak m^tO$. Composing with step 2.1 gives the required isomorphism $R/\mathfrak m^t\to O/\mathfrak m^tO$ for $t\ge1$. For $t=0$, $R/\mathfrak m^0=R/R=0$ and $O/\mathfrak m^0O=O/O=0$, so the natural map is directly an isomorphism of zero rings. [step 2.1, F2, F3, construct]

4.1 Order the monomials of degree $\le t-1$ by decreasing total degree and let $M_j\subseteq R/\mathfrak m^t$ be the $k$-span of the classes of the first $j$ monomials, so that $0=M_0<M_1<\cdots<M_N=R/\mathfrak m^t$ with $N=\binom{t+1}{2}$. Multiplication by any element of $\mathfrak m$ raises total degree, hence sends each $M_j$ into $M_{j-1}$; therefore $\mathfrak m$ acts as $0$ on every quotient $M_j/M_{j-1}$, and each quotient is a one-dimensional $k$-vector space, spanned by one monomial class of some degree $i+j=t-1,t-2,\dots,0$. Transporting this chain through the ring isomorphism of step 3.1 gives a chain of $O$-submodules of $O/\mathfrak m^tO$ whose successive quotients are one-dimensional $k$-vector spaces. [step 1.1, step 3.1, F5, F6, construct, algebra]

5.1 Each successive quotient in step 4.1 is annihilated by $\mathfrak m$ and is a one-dimensional $k$-vector space, hence simple as an $O$-module: an $O$-submodule would be a $k$-subspace, and there is no proper nonzero one. Therefore the transported chain is a composition series of $O/\mathfrak m^tO$ over $O$ with $N=\binom{t+1}{2}$ factors, so $\ell_O(O/\mathfrak m^tO)=N$; since the same chain exhibits a $k$-basis, $\dim_k(O/\mathfrak m^tO)=N$ as well, and the displayed factors are the one-dimensional spaces spanned by the monomials $x^iy^j$ with $i+j=t-1,\dots,0$. [step 4.1, F4, F5, F6, given] ∎

## Remarks

- **The case $t=0$.** Here $\mathfrak m^0=R$ and both sides of the isomorphism are the zero ring, of length $0=\binom{1}{2}$; the composition series is empty. The statement includes $t=0$ so that the truncation maps of the later proofs are defined without a separate convention.
- **Choice.** The argument is choice-free: it uses only the explicit monomial basis, the finite geometric sum, and the universal property of localisation. No maximal ideals are selected and no proper-ideal-into-maximal-ideal principle is invoked.
