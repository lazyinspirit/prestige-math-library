---
id: thm-conjugates-over-a-finite-field-are-the-frobenius-powers
kind: theorem
title: "A monic irreducible of degree $d$ over $\\mathbb F_q$ has the $d$ distinct roots $\\alpha,\\alpha^{q},\\dots,\\alpha^{q^{d-1}}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group, lem-order-of-the-relative-frobenius, def-relative-frobenius-of-a-finite-field-extension, def-conjugate-elements-over-a-field, cor-element-algebraic-iff-simple-extension-finite, thm-evaluation-kernel-and-minimal-polynomial, cor-factor-theorem-over-a-commutative-ring, thm-root-bound-for-polynomials-over-a-domain, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, def-polynomials-that-split-and-splitting-fields, def-polynomial-degree-leading-coefficient-and-monic, def-extension-degree-and-finite-extension, def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields (expository blurb), Theorem 5.5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "K. Conrad, Roots and Irreducibles (expository blurb), Theorem 5.4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/rootirred.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$, let $\pi\in\mathbb F_q[t]$ be
monic irreducible of degree $d\ge1$, and let $\alpha$ be a root of $\pi$ in some
extension field of $\mathbb F_q$. Then $\mathbb F_q(\alpha)$ is a finite field of
order $q^{d}$, the $d$ elements

$$\alpha,\ \alpha^{q},\ \alpha^{q^{2}},\ \dots,\ \alpha^{q^{d-1}}$$

are pairwise distinct roots of $\pi$ lying in $\mathbb F_q(\alpha)$,

$$\pi=\prod_{i=0}^{d-1}\bigl(t-\alpha^{q^{i}}\bigr)\quad\text{in }\mathbb F_q(\alpha)[t],$$

and $\mathbb F_q(\alpha)$ is a splitting field of $\pi$ over $\mathbb F_q$
([[def-polynomials-that-split-and-splitting-fields]]), of degree $d$ over
$\mathbb F_q$ ([[def-extension-degree-and-finite-extension]]). In particular these $d$
elements are pairwise conjugate over $\mathbb F_q$
([[def-conjugate-elements-over-a-field]]) and form a single orbit of the relative
Frobenius. The list starts at $i=0$, so its first member is $\alpha$ itself, and
at $d=1$ it is the single element $\alpha\in\mathbb F_q$.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of order $q\ge2$, a monic irreducible $\pi\in\mathbb F_q[t]$ of degree $d\ge1$ ([[def-polynomial-degree-leading-coefficient-and-monic]]), a root $\alpha$ of $\pi$ in an extension field, and the field $K:=\mathbb F_q(\alpha)$.

[L1] If $K/F$ is a field extension and $a\in K$ is algebraic, there is a unique monic irreducible $m_a\in F[x]$ with $\ker(\operatorname{ev}_a)=(m_a)$, and for every $f\in F[x]$ one has $f(a)=0$ if and only if $m_a\mid f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L2] If $a$ is algebraic over $F$ with minimal polynomial of degree $n$, then $[F(a):F]=n$ ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L3] If $[L:\mathbb F_q]=m$, then $L$ has an ordered $\mathbb F_q$-basis of length $m$, and every element of $L$ has a unique coordinate list in that basis ([[def-extension-degree-and-finite-extension]], [[def-linear-basis]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L4] An extension $E/\mathbb F_q$ of finite fields of degree $m$ is Galois with $\operatorname{Gal}(E/\mathbb F_q)=\langle\sigma_q\rangle$ cyclic of order $m$, where $\sigma_q(x)=x^{q}$ ([[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]], [[def-relative-frobenius-of-a-finite-field-extension]]).

[L5] Let $R$ be a commutative ring, $a\in R$ and $f\in R[x]$. Then $f(a)=0$ if and only if $x-a$ divides $f$ in $R[x]$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[L6] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L7] If $F$ is a field with $q$ elements, then every $a\in F$ satisfies $a^{q}=a$ ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

[L8] Two elements algebraic over $F$ are conjugate over $F$ when they have the same minimal polynomial over $F$ ([[def-conjugate-elements-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 $\pi$ is the minimal polynomial of $\alpha$ over $\mathbb F_q$: since $\pi(\alpha)=0$, [L1] gives $m_\alpha\mid\pi$, and $\pi$ is irreducible while $m_\alpha$ is monic of degree at least one, so $\pi=m_\alpha$. Hence $[K:\mathbb F_q]=d$ by [L2]. [L1, L2, given]

2.1 Fix the length-$d$ basis supplied by [L3]. Unique coordinates give a bijection $\mathbb F_q^d\to K$, so $|K|=q^d$ and $K$ is a finite field. Now [L4] applies: $K/\mathbb F_q$ is Galois with $\operatorname{Gal}(K/\mathbb F_q)=\langle\sigma_q\rangle$ cyclic of order $d$, where $\sigma_q(x)=x^q$. [step 1.1, L3, L4, algebra]

3.1 Each $\sigma_q^{\,i}$ fixes the coefficients of $\pi$, which lie in $\mathbb F_q$, so applying the field homomorphism $\sigma_q^{\,i}$ to the equation $\pi(\alpha)=0$ gives $\pi(\alpha^{q^{i}})=0$: every $\alpha^{q^{i}}$ is a root of $\pi$ lying in $K$. [step 2.1, L4, given]

4.1 The elements $\alpha,\alpha^{q},\dots,\alpha^{q^{d-1}}$ are pairwise distinct. Suppose $\alpha^{q^{i}}=\alpha^{q^{j}}$ with $0\le i<j\le d-1$ and apply the automorphism $\sigma_q^{\,d-j}$: since $x^{q^{d}}=x$ for every $x\in K$ by [L7] and step 2.1, this yields $\alpha^{q^{r}}=\alpha$ with $r:=i+d-j$ and $1\le r\le d-1$. The set $S:=\{\,x\in K:x^{q^{r}}=x\,\}$ is the fixed set of the automorphism $\sigma_q^{\,r}$, hence a subfield of $K$; it contains $\mathbb F_q$ by [L7] and contains $\alpha$, so $K=\mathbb F_q(\alpha)\subseteq S$. But $S$ is the root set in $K$ of the nonzero polynomial $t^{q^{r}}-t$, so $|S|\le q^{r}$ by [L6], giving $q^{d}=|K|\le q^{r}<q^{d}$ because $q\ge2$ and $r<d$. This is impossible. [step 2.1, step 3.1, L6, L7, algebra]

5.1 The product $P:=\prod_{i=0}^{d-1}(t-\alpha^{q^{i}})$ divides $\pi$ in $K[t]$. Indeed, listing the distinct roots as $r_0,\dots,r_{d-1}$, [L5] writes $\pi=(t-r_0)g_0$; for $j\ge1$ the equation $0=\pi(r_j)=(r_j-r_0)g_0(r_j)$ and $r_j\ne r_0$ in the field $K$ give $g_0(r_j)=0$, so the same step applies to $g_0$ with the remaining $d-1$ distinct roots, and after $d$ such steps $\pi=P\,h$ for some $h\in K[t]$. [step 3.1, step 4.1, L5]

6.1 Both $\pi$ and $P$ are monic of degree $d$, so $h$ is monic of degree $0$, that is $h=1$ and $\pi=P$. [step 5.1, given, algebra]

7.1 Consequently $\pi$ splits over $K$, and $K=\mathbb F_q(\alpha)$ is generated over $\mathbb F_q$ by the root $\alpha$; since the subfield of $K$ generated over $\mathbb F_q$ by all the roots of $\pi$ contains $\alpha$, it contains and hence equals $K$, so $K$ is a splitting field of $\pi$ over $\mathbb F_q$. All $d$ roots share the minimal polynomial $\pi$ by step 1.1 and [L1], so they are pairwise conjugate over $\mathbb F_q$ by [L8], and step 3.1 exhibits them as one orbit of $\sigma_q$. [step 1.1, step 3.1, step 4.1, step 6.1, L1, L8] ∎

## Remarks

- **The index starts at zero.** The orbit is $\alpha^{q^{0}}=\alpha,\alpha^{q},\dots,\alpha^{q^{d-1}}$, so the factor $t-\alpha$ is present in the product; dropping the term $i=0$ would leave a polynomial of degree $d-1$ that is not $\pi$.

- **Where irreducibility is used.** It enters twice: to identify $\pi$ with the minimal polynomial of $\alpha$ in step 1.1, and through that identification to force $[K:\mathbb F_q]=d$, which is what makes the count in step 4.1 tight. For a reducible $\pi$ the conclusion fails outright, as $t^{2}-1$ over $\mathbb F_3$ shows: its roots $1$ and $-1$ are not a Frobenius orbit.
