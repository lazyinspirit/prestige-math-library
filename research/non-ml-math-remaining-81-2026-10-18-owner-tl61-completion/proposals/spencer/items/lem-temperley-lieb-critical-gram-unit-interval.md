---
id: lem-temperley-lieb-critical-gram-unit-interval
kind: lemma
title: "Critical Temperley–Lieb Gram determinants in a digit unit interval"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-temperley-lieb-link-state-gram-determinant
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - thm-irreducible-quotient-adjoins-a-root
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§4, Gram determinant and critical-label unit intervals. The present interval uses the divided label (m+1)/ell and proves the specialization directly in formal Laurent series."
---

## Statement

The polynomial Gram-determinant identity of [[lem-temperley-lieb-link-state-gram-determinant]] holds over every field, with polynomial continuation at zeros of displayed denominators. Let $\ell<\infty$, let $n+1=A\ell$ and $m+1=B\ell$ with $0<B\le A$ and $n-m$ even. In characteristic zero, $W_{n,m}$ is simple. In characteristic $p>0$, write $B=p^v b'$ with $p\nmid b'$ and let $b\in\{1,\ldots,p-1\}$ be the residue of $b'$ modulo $p$. If
$$\left\lfloor\frac{A-B}{2}\right\rfloor<p^v(p-b),$$
then $W_{n,m}$ is simple. If $\ell=\infty$, every $W_{n,m}$ is simple. Also $W_{n,n-2}$ is simple whenever $[n]_\delta\ne0$.

## Facts & Assumptions

**Given:** A field, a loop parameter, its recurrence quantum characteristic, and the allowed labels in the Statement.

[F1] The complex Gram determinant is $\prod_{j=1}^{(n-m)/2}([m+1+j]/[j])^{\dim W_{n,m+2j}}$, with polynomial continuation ([[lem-temperley-lieb-link-state-gram-determinant]]).

[F2] Nondegeneracy of a cell form makes its module simple ([[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

[F3] The recurrence quantum characteristic and quantum integers are defined over every field ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]), and a root of $X^2-\delta X+1$ may be adjoined to the field ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Each Gram entry is a monomial in the loop parameter with integer coefficient, so its determinant is a polynomial $D(T)\in\mathbb Z[T]$. Clear the quantum-integer denominators in [F1], obtaining an equality between integer polynomials for every complex loop parameter. Every complex number has the form $q+q^{-1}$ for a nonzero $q$, and a polynomial with infinitely many distinct complex zeros is zero. Thus this is an integer polynomial identity, which reduces to an identity over every field. No division after specialization is involved in this conclusion. [F1, given, algebra]

2.1 Adjoin $q_0\ne0$ with $q_0+q_0^{-1}=\delta$ using [F3], and work in formal Laurent series over that extension. Set $q(t)=q_0(1+t)$ and $\delta(t)=q(t)+q(t)^{-1}$. This is a nonconstant series: even if its linear coefficient vanishes, its first nonconstant coefficient in degree two is nonzero. Hence substituting $\delta(t)$ in a nonzero polynomial gives a nonzero series, since otherwise the nonconstant series $\delta(t)$ would satisfy a polynomial over a field and therefore be constant in the algebraic closure of that field. Equivalently, factor the polynomial over an algebraic closure and note that each factor $\delta(t)-a$ is nonzero. Every quantum integer $[j]_{\delta(t)}$ is nonzero by its Laurent expression $q(t)^{1-j}(1-q(t)^{2j})/(1-q(t)^2)$, interpreted as a rational identity. We may consequently use the product in [F1] in the Laurent-series field. Its constant coefficient is $D(\delta)$. [F1, F3, step 1.1, construct, algebra]

3.1 Suppose the characteristic is $p>0$ and put $c=1$ for odd $p$ and $c=2$ for $p=2$. For every positive integer $j$, the order of $1-(1+t)^{2j}$ is $c p^{\nu_p(j)}$: factor $2j=p^h u$ with $p\nmid u$, use $(1+t)^{p^h}=1+t^{p^h}$, and the coefficient of $t^{p^h}$ is the nonzero residue of $u$. If $q_0^2\ne1$, finite $\ell$ is the order of $q_0^2$, and it is prime to $p$ because a field has no nonidentity element of order $p$. Thus $[j]_{\delta(t)}$ has order zero for $\ell\nmid j$ and order $c p^{\nu_p(j/\ell)}$ for $\ell\mid j$. If $q_0^2=1$, the recurrence gives $[j]_\delta=j q_0^{j-1}$ and $\ell=p$; the denominator $1-q(t)^2$ has order $c$, so the order of $[j]_{\delta(t)}$ is $c(p^{\nu_p(j)}-1)$. These statements hold also in characteristic two. [F3, step 2.1, algebra]

4.1 For a critical label $m+1=B\ell$, the numerator and denominator of a factor in [F1] both have order zero when $\ell\nmid j$. If $j=j'\ell$, step 3.1 shows that their orders agree whenever $\nu_p(B+j')=\nu_p(j')$, in both of its cases, including $\ell=p$. Write $B=p^v b'$ as in the Statement and suppose $0<j'<p^v(p-b)$. If $p^v\nmid j'$, then $\nu_p(j')<v$ and adding $B$ preserves that valuation. Otherwise $j'=p^v h$ with $1\le h<p-b<p$, so both $h$ and $b'+h$ are nonzero modulo $p$ and both valuations equal $v$. Thus the equality holds for every $j'\le\lfloor(A-B)/2\rfloor$ under the stated bound. Every factor in the determinant product is consequently a Laurent-series unit with nonzero constant term. Their product has nonzero constant term, proving $D(\delta)\ne0$. This nonvanishing descends to the original field, so [F2] proves simplicity. [F1, F2, step 2.1, step 3.1, algebra]

5.1 In characteristic zero with finite $\ell$, one has $q_0^2\ne1$. Each quantum integer whose index is a multiple of $\ell$ has a simple zero along $q(t)$, because differentiating $1-q(t)^{2j}$ gives nonzero coefficient $-2j$ at $t=0$. All other indices give units. Therefore each numerator and denominator in the critical determinant product has the same order, either zero or one, and its quotient has nonzero constant term. The same argument as in step 4.1 proves simplicity. If $\ell=\infty$, every specialized numerator and denominator in [F1] is nonzero, so the determinant is nonzero directly. Finally, when $m=n-2$, the product consists solely of $[n]_\delta$ to exponent one. Thus $[n]_\delta\ne0$ implies the last simplicity assertion. [F1, F2, F3, step 1.1, step 2.1, step 4.1, algebra] ∎
