---
id: thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
kind: theorem
title: "The recursion defines a unique monic $\\Phi_n\\in\\mathbb Z[t]$, of degree $\\varphi(n)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cyclotomic-polynomial, thm-monic-polynomial-division, thm-sum-of-totients-over-divisors, def-unit-group-modulo-n-and-euler-totient, thm-polynomial-degree-of-a-product-over-a-domain, cor-polynomial-ring-over-a-domain-is-a-domain, def-sum-over-a-finite-index-set, thm-splitting-fields-exist-for-nonzero-polynomials, def-polynomials-that-split-and-splitting-fields, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, def-roots-of-unity-in-a-field, lem-order-characterisation, def-order-in-a-group, def-repeated-root-and-separable-polynomial, thm-rat-ordered-field, def-ring-characteristic, def-divides-in-z, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 5.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Proposition 9.6"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

The recursion of [[def-cyclotomic-polynomial]] is well posed: for every $n\ge1$
the division defining $\Phi_n$ is exact, $\Phi_n$ is a monic element of
$\mathbb Z[t]$,

$$\prod_{d\mid n}\Phi_d=t^{n}-1,$$

the product being over the positive divisors of $n$, and

$$\deg\Phi_n=\varphi(n)$$

([[def-unit-group-modulo-n-and-euler-totient]]). Moreover $(\Phi_n)_{n\ge1}$ is
the only family of monic polynomials in $\mathbb Z[t]$ satisfying the displayed
product identity for every $n\ge1$.

## Facts & Assumptions

**Given:** The recursion of [[def-cyclotomic-polynomial]]; the field $\mathbb Q$, which is an ordered field ([[thm-rat-ordered-field]]), so that $m\cdot1>0$ and in particular $m\cdot1\ne0$ for every $m\ge1$, whence $\operatorname{char}\mathbb Q=0$ ([[def-ring-characteristic]]) and $\operatorname{char}\mathbb Q$ divides no $n\ge1$ ([[def-divides-in-z]]).

[L1] Let $R$ be a commutative ring and $g\in R[x]$ monic. For every $f\in R[x]$ there are unique $q,r\in R[x]$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$ ([[thm-monic-polynomial-division]]).

[L2] $t^{n}-1$ is separable over $K$ exactly when $\operatorname{char}K\nmid n$; and then a splitting field $E$ has $\mu_n(E)$ cyclic of order $n$ ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]], [[def-roots-of-unity-in-a-field]], [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]).

[L3] Every nonzero $f\in K[x]$ has a splitting field over $K$ ([[thm-splitting-fields-exist-for-nonzero-polynomials]]); $f$ monic of degree $m$ splits over $E$ when $f=\prod_{j=1}^{m}(t-\alpha_j)$ with $\alpha_j\in E$, repetitions allowed ([[def-polynomials-that-split-and-splitting-fields]]).

[L4] $f$ is separable over $K$ when it has no repeated root in any extension field, a repeated root of $f$ in $E$ being an $a$ with $(t-a)^{2}$ dividing the image of $f$ in $E[t]$ ([[def-repeated-root-and-separable-polynomial]]).

[L5] For an element $x$ of finite order $m$ in a group, $x^{k}=e$ if and only if $m\mid k$ ([[lem-order-characterisation]], [[def-order-in-a-group]]).

[L6] $\sum_{d\mid n,\,d>0}\varphi(d)=n$ for every positive integer $n$ ([[thm-sum-of-totients-over-divisors]], [[def-sum-over-a-finite-index-set]]).

[L7] If $R$ is an integral domain then so is $R[x]$ ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), and for nonzero $f,g$ one has $\deg(fg)=\deg f+\deg g$ and $\operatorname{lc}(fg)=\operatorname{lc}(f)\operatorname{lc}(g)$ ([[thm-polynomial-degree-of-a-product-over-a-domain]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

## Proof

**Proof technique:** induction.

1.1 The assertion to be proved by strong induction on $n$ is: the division defining $\Phi_n$ is exact, $\Phi_n\in\mathbb Z[t]$ is monic, $\prod_{d\mid n}\Phi_d=t^{n}-1$, and $\deg\Phi_n=\varphi(n)$. At $n=1$ the recursion sets $\Phi_1=t-1$ outright, the only positive divisor of $1$ is $1$ so the product is $\Phi_1=t-1$, and $\deg\Phi_1=1=\varphi(1)$. [base, given]

1.2 Inductive hypothesis: fix $n\ge2$ and assume the assertion for every $m$ with $1\le m<n$. [ih]

1.3 Since $\operatorname{char}\mathbb Q=0$ does not divide $n$, [L2] and [L3] supply a splitting field $E$ of $t^{n}-1$ over $\mathbb Q$ in which $t^{n}-1$ is separable and $\mu_n(E)$ is cyclic of order $n$. For a positive divisor $d$ of $n$ put $S_d:=\{\zeta\in\mu_n(E):\operatorname{ord}(\zeta)=d\}$ and $\Psi_d:=\prod_{\zeta\in S_d}(t-\zeta)\in E[t]$, a monic polynomial of degree $|S_d|$. [L2, L3, given]

2.1 For every positive divisor $m$ of $n$ one has $t^{m}-1=\prod_{\zeta\in\mu_m(E)}(t-\zeta)$ with $\bigl|\mu_m(E)\bigr|=m$: the polynomial $t^{m}-1$ divides $t^{n}-1$ in $\mathbb Z[t]$, since $t^{n}-1=(t^{m}-1)(t^{n-m}+t^{n-2m}+\dots+1)$ when $m\mid n$, so it splits over $E$ by [L3], and a repeated root of $t^{m}-1$ in an extension would be a repeated root of $t^{n}-1$ there, which [L4] excludes; hence its $m$ roots are distinct and they are by definition the elements of $\mu_m(E)$. [step 1.3, L3, L4, algebra]

3.1 For every positive divisor $m$ of $n$, $\mu_m(E)$ is the disjoint union of the $S_d$ over positive divisors $d$ of $m$: an element $\zeta\in\mu_n(E)$ has finite order dividing $n$, and $\zeta^{m}=1$ holds exactly when $\operatorname{ord}(\zeta)\mid m$ by [L5]. Hence $\prod_{d\mid m}\Psi_d=\prod_{\zeta\in\mu_m(E)}(t-\zeta)=t^{m}-1$ by step 2.1. [step 1.3, step 2.1, L5]

4.1 For every positive divisor $d$ of $n$ with $d<n$ one has $\Phi_d=\Psi_d$, by induction on $d$ through the divisors of $n$: at $d=1$ both equal $t-1$, since $S_1=\{1\}$; and if $\Phi_e=\Psi_e$ for every positive divisor $e$ of $d$ with $e<d$, then step 1.2 and step 3.1 give $\bigl(\prod_{e\mid d,\,e<d}\Psi_e\bigr)\Phi_d=t^{d}-1=\bigl(\prod_{e\mid d,\,e<d}\Psi_e\bigr)\Psi_d$, and cancelling the nonzero left factor in the integral domain $E[t]$ ([L7]) yields $\Phi_d=\Psi_d$. [step 1.2, step 3.1, L7]

5.1 Write $P:=\prod_{d\mid n,\,d<n}\Phi_d$, monic in $\mathbb Z[t]$ by step 1.2 and [L7]. By step 4.1 and step 3.1 applied with $m=n$, in $E[t]$ one has $t^{n}-1=\bigl(\prod_{d\mid n,\,d<n}\Psi_d\bigr)\Psi_n=P\,\Psi_n$. [step 1.2, step 3.1, step 4.1, L7]

6.1 The division of $t^{n}-1$ by $P$ in $\mathbb Z[t]$ is exact and its quotient is $\Psi_n$: by [L1] over $\mathbb Z$ there are unique $q,r\in\mathbb Z[t]$ with $t^{n}-1=qP+r$ and $r=0$ or $\deg r<\deg P$; this is also a division by the monic $P$ in $E[t]$, where step 5.1 exhibits the division with quotient $\Psi_n$ and remainder $0$, so the uniqueness clause of [L1] over $E$ forces $q=\Psi_n$ and $r=0$. Hence $\Phi_n=q=\Psi_n$ is monic in $\mathbb Z[t]$ and $\prod_{d\mid n}\Phi_d=P\Phi_n=t^{n}-1$. [step 5.1, L1, L7]

7.1 Degrees: taking degrees in $t^{n}-1=P\Phi_n$ with [L7] gives $n=\deg P+\deg\Phi_n$, and $\deg P=\sum_{d\mid n,\,d<n}\deg\Phi_d=\sum_{d\mid n,\,d<n}\varphi(d)$ by step 1.2 and [L7]; so $\deg\Phi_n=n-\sum_{d\mid n,\,d<n}\varphi(d)=\varphi(n)$ by [L6]. [step 1.2, step 6.1, L6, L7]

8.1 This is the assertion at $n$, so the strong induction is complete and the assertion holds for every $n\ge1$. Uniqueness of the family follows by the same induction: if $(\Phi'_m)_{m\ge1}$ is monic in $\mathbb Z[t]$ with $\prod_{d\mid m}\Phi'_d=t^{m}-1$ for all $m$, then $\Phi'_1=t-1=\Phi_1$, and if $\Phi'_m=\Phi_m$ for all $m<n$ then $P\Phi'_n=t^{n}-1=P\Phi_n$ with $P\ne0$ in the integral domain $\mathbb Z[t]$ ([L7]), so $\Phi'_n=\Phi_n$. [step 6.1, step 7.1, L7, discharge-induction] ∎

## Remarks

- **Why a splitting field over $\mathbb Q$ appears in a statement about $\mathbb Z[t]$.** The exactness of the division is an identity between integer polynomials, but the only cheap reason for it is that the roots of $t^{n}-1$ partition by order. The passage to $E$ produces that partition; the passage back is the uniqueness clause of monic division, which holds over $\mathbb Z$ and over $E$ and pins the two computations to the same quotient.

- **The degree computation is where $\varphi$ enters.** Nothing before step 7.1 mentions Euler's totient; it appears only through [[thm-sum-of-totients-over-divisors]], and the same identity is what makes the count of primitive $n$-th roots of unity match $\deg\Phi_n$ in [[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]].
