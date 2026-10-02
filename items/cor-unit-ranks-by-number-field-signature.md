---
id: cor-unit-ranks-by-number-field-signature
kind: corollary
title: Unit ranks by signature
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-roots-of-unity-in-a-field
  - cor-rational-algebraic-integers-are-integers
  - lem-of-sign-rules
  - lem-power-monotone
  - lem-units-of-z
  - prop-extension-degree-one-iff-equal-fields
  - thm-dirichlet-unit-theorem
  - cor-element-algebraic-iff-simple-extension-finite
  - cor-intermediate-field-degrees-divide
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Thm. 5.1 and Example 5.3 pp.85-86."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Example 15.15 p.8 (quadratic cases)."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "p.147 (rank-zero and rank-one signature analysis)."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. The unit rank $r_1+r_2-1$ is $0$ exactly for
$K=\mathbb Q$ and for imaginary quadratic fields, and it is $1$ for every real
quadratic field; in general it equals $r_1+r_2-1$. The rank-$0$ cases have
$\mathcal O_K^\times=\mu(K)$ finite and the rank-$1$ real quadratic case has
$\mathcal O_K^\times\cong\mu(K)\times\mathbb Z$ with $\mu(K)=\{\pm1\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$ of signature $(r_1,r_2)$ ([[def-number-field]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F1] The signature satisfies $r_1+2r_2=[K:\mathbb Q]$, with $r_1$ the number of real embeddings and $r_2$ the number of complex conjugate pairs ([[def-archimedean-embeddings-and-number-field-signature]]).

[F2] $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}$; the rank of $\mathcal O_K^\times$ is $r_1+r_2-1$, and when $r_1+r_2-1=0$ one has $\mathcal O_K^\times=\mu(K)$ ([[thm-dirichlet-unit-theorem]]).

[F3] For a finite field extension $K/\mathbb Q$ one has $[K:\mathbb Q]=1$ if and only if $K=\mathbb Q$ ([[prop-extension-degree-one-iff-equal-fields]]). Moreover $\mathcal O_{\mathbb Q}$, the integral closure of $\mathbb Z$ in $\mathbb Q$ ([[def-ring-of-integers-of-a-number-field]]), equals $\mathbb Z$: a rational number integral over $\mathbb Z$ is an integer ([[cor-rational-algebraic-integers-are-integers]]), and every integer $n$ is a root of the monic polynomial $X-n$, so $\mathcal O_{\mathbb Q}=\mathbb Z$ with unit group $\mathcal O_{\mathbb Q}^\times=\mathbb Z^\times=\{\pm1\}$ ([[lem-units-of-z]]).

[F4] If $x\in\mathbb R$ and $x^n=1$ for some integer $n\ge1$, then $x=\pm1$: the inequalities $x>1$, $0<x<1$ are preserved by taking $n$-th powers, and $x<0$ with $x^n=1$ forces $n$ even and $(-x)^n=1$, so $-x=1$ ([[lem-power-monotone]], [[lem-of-sign-rules]], [[def-roots-of-unity-in-a-field]]).

[F5] For a nonzero squarefree integer $d\ne1$, $d$ is not a rational square by unique prime factorisation ([[thm-fundamental-theorem-of-arithmetic]]), so $X^2-d$ is irreducible over $\mathbb Q$ and $\mathbb Q(\sqrt d)$ has degree $2$ ([[thm-evaluation-kernel-and-minimal-polynomial]], [[cor-element-algebraic-iff-simple-extension-finite]]). Its embeddings correspond exactly to the two roots $\pm\sqrt d$ ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]): if $d>0$ both embeddings are real, and if $d<0$ neither is real and they are complex conjugates. The signatures are therefore $(2,0)$ and $(0,1)$ respectively ([[def-archimedean-embeddings-and-number-field-signature]]).

[F6] In a finite tower, the intermediate degree divides the total degree ([[cor-intermediate-field-degrees-divide]]). For an algebraic element $\alpha$, $[\mathbb Q(\alpha):\mathbb Q]$ is the degree of its monic irreducible minimal polynomial ([[cor-element-algebraic-iff-simple-extension-finite]], [[thm-evaluation-kernel-and-minimal-polynomial]]).

[F7] Every positive integer has a unique prime factorisation ([[thm-fundamental-theorem-of-arithmetic]]); consequently every nonzero rational $\Delta$ can be written as $q^2d$ with $q\in\mathbb Q^\times$ and $d$ a nonzero squarefree integer, by writing each prime exponent of $\Delta$ as $2k+e$ with $e\in\{0,1\}$ and retaining the sign in $d$.

[A1] The Axiom of Choice is assumed; it is used only through the AC-qualified unit theorem [F2] ([[def-axiom-of-choice]]).



## Proof

**Proof technique:** read the rank $r_1+r_2-1$ off $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}$, enumerate the signatures with $r_1+r_2=1$ to identify the rank-zero fields, and compute the real quadratic torsion from the real roots of unity.

1.1 By [F2] the rank of $\mathcal O_K^\times$ equals $r_1+r_2-1$; in particular rank $0$ means $\mathcal O_K^\times=\mu(K)$, and a real quadratic field has signature $(2,0)$ and rank $1$. [F1, F2, F5]

1.2 $\mathbb Q$ has signature $(1,0)$, so its unit rank is $0$; by [F3] its ring of integers is $\mathbb Z$ with unit group $\{\pm1\}=\mu(\mathbb Q)$, a finite group. [F1, F2, F3]

1.3 An imaginary quadratic field has signature $(0,1)$, so its unit rank is $0$ and hence $\mathcal O_K^\times=\mu(K)$, a finite group. [F1, F2, F5]

1.4 Conversely, rank $0$ gives $r_1+r_2=1$. If $r_2=0$, then $[K:\mathbb Q]=1$ and $K=\mathbb Q$. Otherwise $(r_1,r_2)=(0,1)$ and $[K:\mathbb Q]=2$. Choose $\alpha\in K\setminus\mathbb Q$. The degree $[\mathbb Q(\alpha):\mathbb Q]$ divides $2$ and is not $1$, so $K=\mathbb Q(\alpha)$ and the monic minimal polynomial is $X^2+bX+c$ with $b,c\in\mathbb Q$. Thus $\beta:=2\alpha+b$ satisfies $\beta^2=\Delta:=b^2-4c$, where $\Delta\ne0$ is not a rational square, since otherwise $\alpha$ would be rational. Factoring the numerator and denominator of $\Delta$ into primes and removing even exponents gives $\Delta=q^2d$ with $q\in\mathbb Q^\times$ and $d\ne1$ a nonzero squarefree integer. Hence $K=\mathbb Q(\beta/q)=\mathbb Q(\sqrt d)$. Since $K$ has no real embedding, [F5] forces $d<0$, so $K$ is imaginary quadratic. [F1, F3, F5, F6, F7, algebra]

1.5 For a real quadratic field, signature $(2,0)$ gives rank $1$ and $\mathcal O_K^\times\cong\mu(K)\times\mathbb Z$; moreover every $\zeta\in\mu(K)$ lies in the image of one of the two real embeddings, so $\zeta$ is a real root of unity and hence $\zeta=\pm1$ by [F4]; thus $\mu(K)=\{\pm1\}$ and $\mathcal O_K^\times\cong\{\pm1\}\times\mathbb Z$. [F1, F2, F4, F5]

1.6 The rank formula $r_1+r_2-1$ applies to every signature; a field of signature $(1,1)$, such as a complex cubic field, also has rank $1$, so the real quadratic case is a computed example of rank one rather than a characterisation of it. [F1, F2]

2.1 Choice accounting: the corollary uses only the AC-qualified unit theorem [F2]; the signature enumeration and the real-roots-of-unity computation are choice-free. [A1, F2] ∎
