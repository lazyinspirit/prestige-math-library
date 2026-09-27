---
id: ex-normalization-nodal-coordinate-domain
kind: example
title: "Normalization of a nodal affine plane curve"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-polynomial-algebras-over-fields-are-integrally-closed, def-integral-closure-and-integrally-closed-domain, def-integral-element-and-algebraic-integer, cor-integral-elements-form-a-subring, thm-transitivity-of-integrality, def-field-of-fractions, cor-polynomial-ring-over-a-domain-is-a-domain, def-zero-divisor-and-integral-domain, thm-quotient-ring-universal-property, def-quotient-ring, def-polynomial-evaluation-and-root, thm-monic-polynomial-division, def-polynomial-degree-leading-coefficient-and-monic, prop-polynomial-degree-laws-over-a-commutative-ring, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Example 8.6(b)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "§8, Example 8.6(b) (node)"
    - title: "Stacks Project, Lemma 10.161.13 (polynomial N-2)"
      url: "https://stacks.math.columbia.edu/tag/032O"
      locator: "Lemma 10.161.13"
---

## Statement

Let $k$ be a field of characteristic different from $2$. Then the quotient
$A:=k[x,y]/(y^{2}-x^{2}(x+1))$ is an integral domain, the substitution
$x\mapsto t^{2}-1$, $y\mapsto t(t^{2}-1)$ induces an injective $k$-algebra
homomorphism $A\hookrightarrow k[t]$, and the integral closure of $A$ in
$\operatorname{Frac}(A)=k(t)$ is exactly $k[t]=A+At$, a finite $A$-module.
Under the resulting parametrisation the origin $(0,0)$ has exactly the two
preimages $t=1$ and $t=-1$.

## Facts & Assumptions

**Given:** a field $k$ with $\operatorname{char}k\ne2$, the polynomial ring $k[x,y]$, the ideal $P=(y^{2}-x^{2}(x+1))$, the quotient $A=k[x,y]/P$, and the substitution $\sigma:k[x,y]\to k[t]$, $\sigma(x)=t^{2}-1$, $\sigma(y)=t(t^{2}-1)$.

[L1] A ring homomorphism whose kernel contains a two-sided ideal factors uniquely through the quotient ring, so a homomorphism killing $P$ induces a unique homomorphism out of $A$ ([[thm-quotient-ring-universal-property]], [[def-quotient-ring]], [[def-polynomial-evaluation-and-root]]).

[L2] Division by a monic polynomial over a commutative ring $R$: for monic $g\in R[s]$ and any $f\in R[s]$ there are unique $q,r$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$ ([[thm-monic-polynomial-division]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L3] The polynomial ring $k[t]$ over a field is an integral domain with fraction field $k(t)$ ([[cor-polynomial-ring-over-a-domain-is-a-domain]], [[def-zero-divisor-and-integral-domain]], [[def-field-of-fractions]]); the polynomial ring in finitely many indeterminates over a domain is a domain ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[L4] For a field $F$ and $d\ge0$ the ring $F[y_1,\ldots,y_d]$ is an integrally closed domain ([[lem-polynomial-algebras-over-fields-are-integrally-closed]], [[def-integral-closure-and-integrally-closed-domain]]).

[L5] Over a nonzero commutative ring, for nonzero polynomials $f,g$, the coefficient of $s^{\deg f+\deg g}$ in $fg$ is the product of the leading coefficients, and $s^{m}$ has leading coefficient $1$ with degree $m$ ([[prop-polynomial-degree-laws-over-a-commutative-ring]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L6] Integrality means being a root of a monic polynomial over the base; integrality is transitive along domain inclusions; integral elements form a subring; an integrally closed domain contains the integral elements of its fraction field ([[def-integral-element-and-algebraic-integer]], [[thm-transitivity-of-integrality]], [[cor-integral-elements-form-a-subring]], [[def-integral-closure-and-integrally-closed-domain]]).



## Proof

**Proof technique:** direct.

1.1 The substitution $\sigma$ kills $P$: $\sigma(y)^{2}-\sigma(x)^{2}(\sigma(x)+1)=t^{2}(t^{2}-1)^{2}-(t^{2}-1)^{2}t^{2}=0$, because $\sigma(x)+1=t^{2}$ and $\sigma(y)=t(t^{2}-1)$. By [L1] it therefore induces a unique $k$-algebra homomorphism $\varphi:A\to k[t]$ with $\varphi(\bar x)=t^{2}-1$ and $\varphi(\bar y)=t(t^{2}-1)$, where $\bar x,\bar y$ are the classes of $x,y$. [L1, given]

1.2 $\varphi$ is injective. By [L2], applied in the polynomial ring $(k[x])[y]$ to the monic polynomial $y^{2}-x^{2}(x+1)$ of degree $2$, every element of $A$ has a unique representative $a(x)+b(x)y$ with $a,b\in k[x]$; hence it suffices to show that $\varphi(a+by)=a(t^{2}-1)+t(t^{2}-1)b(t^{2}-1)=0$ forces $a=b=0$. The first summand is a polynomial in $t^{2}$ and the second is $t$ times a polynomial in $t^{2}$, so comparing the coefficients of $t^{2m}$ and of $t^{2m+1}$ in the sum gives $a(t^{2}-1)=0$ and $(t^{2}-1)b(t^{2}-1)=0$ separately. For a polynomial $c=\sum_{m\le M}c_ms^{m}$ with $c_M\ne0$, the value $c(t^{2}-1)=\sum_mc_m(t^{2}-1)^{m}$ has coefficient $c_M$ at $t^{2M}$ by [L5], since $(t^{2}-1)^{m}$ is monic of degree $2m$ and all lower terms have degrees $<2M$; hence $c(t^{2}-1)\ne0$. Applying this to $c=a$ gives $a=0$. Since $k[t]$ is a domain by [L3] and $t^{2}-1\ne0$ (it is monic of degree $2$), $(t^{2}-1)b(t^{2}-1)=0$ forces $b(t^{2}-1)=0$, and the same argument gives $b=0$. So $\varphi$ is injective, and $A$ is a domain, a $k$-subalgebra of $k[t]$. [L2, L3, L5, given]

2.1 In $\operatorname{Frac}(A)$ one has $\varphi(\bar y)=t\,\varphi(\bar x)$ with $\varphi(\bar x)=t^{2}-1\ne0$, so $t=\bar y/\bar x\in\operatorname{Frac}(A)$; hence $k[t]\subseteq\operatorname{Frac}(A)$ and $k(t)=\operatorname{Frac}(k[t])\subseteq\operatorname{Frac}(A)$ by [L3], while $A\subseteq k[t]$ gives the reverse inclusion, so $\operatorname{Frac}(A)=k(t)$. Moreover $\varphi(\bar x)+1=t^{2}$, so $t$ is a root of the monic polynomial $T^{2}-(\bar x+1)\in A[T]$ and is integral over $A$ by [L6]; and $k[t]=A+At$, because $t^{2}=\bar x+1\in A$ reduces all exponents modulo $2$, so $k[t]$ is a finite $A$-module and every element of $k[t]$ is integral over $A$. [L3, L6, step 1.2]

3.1 If $z\in k(t)=\operatorname{Frac}(A)$ is integral over $A$, then a monic equation for $z$ over $A$ has coefficients in $A\subseteq k[t]$, so $z$ is integral over $k[t]$; since $k[t]$ is integrally closed in $k(t)$ by [L4] and [L3], $z\in k[t]$. With step 2.1 this identifies the integral closure of $A$ in $\operatorname{Frac}(A)$ with $k[t]=A+At$, a finite $A$-module. [L3, L4, L6, step 2.1]

4.1 The parametrisation: a point of the curve with $\bar x=0$ has $\bar y^{2}=0$, so $\bar y=0$ in the field $k$; thus the origin is the unique point with both coordinates zero. Under the parametrisation $x=t^{2}-1$, $y=t(t^{2}-1)$ the condition $x=0$ is $t^{2}=1$, that is $t^{2}-1=(t-1)(t+1)=0$, so $t=1$ or $t=-1$ by [L3] (a product of two elements of the field $k$ vanishes only if one factor does); these two values are distinct because $\operatorname{char}k\ne2$ gives $1\ne-1$, and both give $y=t(t^{2}-1)=0$. Hence the origin has exactly the two preimages $t=1$ and $t=-1$; the hypothesis $\operatorname{char}k\ne2$ is used here, since in characteristic $2$ the two values coincide. [L3, step 1.2, given] ∎
