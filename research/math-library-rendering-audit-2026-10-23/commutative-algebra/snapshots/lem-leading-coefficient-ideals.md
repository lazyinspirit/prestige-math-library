---
id: lem-leading-coefficient-ideals
kind: lemma
title: "The leading coefficients of the degree-$n$ elements of an ideal of $R[x]$, together with $0$, form an ideal of $R$, and these ideals ascend with $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-polynomial-ring-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, lem-ideal-criterion-and-intersections, prop-polynomial-degree-laws-over-a-commutative-ring, def-left-right-and-two-sided-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3 Theorem 3.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "B. Totaro, Commutative Algebra (Michaelmas 2011), notes by Z. Norwood, §8 Theorem 8.3"
      url: "https://pi.math.cornell.edu/~zbnorwood/partiii/files/commalgnotes.pdf"
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Theorem 5.6"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $\mathfrak a$ be an ideal of the polynomial
ring $R[x]$ ([[def-polynomial-ring-over-a-commutative-ring]]), and for
$n\in\mathbb N$ set

$$\mathfrak a_n\;:=\;\{0\}\cup\{\operatorname{lc}(f)\;:\;f\in\mathfrak a,\ f\neq0,\ \deg f=n\}\subseteq R .$$

Then $\mathfrak a_n$ is an ideal of $R$ for every $n\in\mathbb N$, and

$$\mathfrak a_0\subseteq\mathfrak a_1\subseteq\mathfrak a_2\subseteq\cdots .$$

The index runs over $\mathbb N$, so the chain begins at $\mathfrak a_0$, whose
members are $0$ together with the nonzero constant polynomials that lie in
$\mathfrak a$.

Adjoining $0$ is not cosmetic. The zero polynomial has no degree and no leading
coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]), so it
contributes no element, and without the adjunction the set would be empty
whenever $\mathfrak a$ contains no element of degree exactly $n$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $\mathfrak a$ of $R[x]$, and $n\in\mathbb N$. A nonzero $f\in\mathfrak a$ of degree $n$ with $\operatorname{lc}(f)=c$ is said to realise $c$ at stage $n$.

[L1] $R[x]$ is the set of finitely supported functions $a\colon\mathbb N\to R$, with $(a+b)_i=a_i+b_i$ and $(ab)_i=\sum_{j+k=i}a_jb_k$; the constant $r$ is the sequence supported at $0$ with value $r$, and $x$ is the sequence with coefficient $1_R$ at index $1$ and zero elsewhere ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] For $0\ne f=\sum_i a_ix^i\in R[x]$ the degree is $\deg f=\max\{i\in\mathbb N:a_i\ne0\}$ and the leading coefficient is $\operatorname{lc}(f)=a_{\deg f}$; the zero polynomial has no degree and no leading coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L3] A nonempty subset $I\subseteq R$ is a two-sided ideal exactly when it is closed under $x-y$ and under $rx,xr$ for all $r\in R$, $x,y\in I$ ([[lem-ideal-criterion-and-intersections]]).

[L4] For nonzero $f,g\in R[x]$ over a commutative ring: if $f+g\ne0$ then $\deg(f+g)\le\max\{\deg f,\deg g\}$; the coefficient of $x^{\deg f+\deg g}$ in $fg$ is $\operatorname{lc}(f)\operatorname{lc}(g)$, and if $fg\ne0$ then $\deg(fg)\le\deg f+\deg g$ ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L5] An additive subgroup $I\le(R,+)$ is a left ideal when $ri\in I$ for every $r\in R$ and $i\in I$, and in a commutative ring the left, right and two-sided notions agree ([[def-left-right-and-two-sided-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n\in\mathbb N$ and read the displayed definition: $\mathfrak a_n$ consists of $0$ together with the leading coefficients of those elements of $\mathfrak a$ that are nonzero of degree exactly $n$. In particular $0\in\mathfrak a_n$, so $\mathfrak a_n$ is a nonempty subset of $R$; and no element of $\mathfrak a_n$ other than the adjoined $0$ is $0$, since a leading coefficient is nonzero by definition. [L1, L2, given]

2.1 $\mathfrak a_n$ is closed under differences. Let $c,c'\in\mathfrak a_n$. If $c'=0$ then $c-c'=c\in\mathfrak a_n$. If $c=0$ and $c'\ne0$, take $g\in\mathfrak a$ realising $c'$ at stage $n$; negation is coefficientwise, so $-g\in\mathfrak a$ is nonzero of degree $n$ with $\operatorname{lc}(-g)=-c'$, and $c-c'=-c'\in\mathfrak a_n$. If both are nonzero, take realisers $f,g\in\mathfrak a$ at stage $n$; then $-g$ is nonzero of degree $n$, the coefficient of $x^n$ in $f-g$ is $c-c'$, and the coefficients of $f-g$ above index $n$ all vanish. Should $c-c'=0$, the difference lies in $\mathfrak a_n$ as the adjoined element; otherwise $f-g\ne0$, the degree law gives $\deg(f-g)\le\max\{n,n\}=n$, and the nonvanishing coefficient at $x^n$ forces $\deg(f-g)=n$ with $\operatorname{lc}(f-g)=c-c'$, so $c-c'\in\mathfrak a_n$. [L1, L2, L4, step 1.1, algebra]

2.2 $\mathfrak a_n$ is closed under multiplication by elements of $R$. Let $c\in\mathfrak a_n$ and $r\in R$. If $rc=0$ the product lies in $\mathfrak a_n$ as the adjoined element, and this covers $c=0$ and $r=0$. Otherwise $c\ne0$ and $r\ne0$; take $f\in\mathfrak a$ realising $c$ at stage $n$ and read $r$ as a constant polynomial, which is nonzero of degree $0$ with leading coefficient $r$. The coefficient of $x^{0+n}$ in the product $rf$ is $rc\ne0$, so $rf\ne0$; the degree law then gives $\deg(rf)\le 0+n$, and the nonvanishing coefficient at $x^n$ forces $\deg(rf)=n$ with $\operatorname{lc}(rf)=rc$. Since $\mathfrak a$ is an ideal of $R[x]$ we have $rf\in\mathfrak a$, so $rc\in\mathfrak a_n$. [L1, L2, L4, step 1.1, algebra]

2.3 The stages ascend. Let $c\in\mathfrak a_n$ with $c\ne0$ and let $f\in\mathfrak a$ realise it at stage $n$. Multiplying by $x$ shifts coefficients: by the convolution rule the coefficient of $x^i$ in $xf$ is the coefficient of $x^{i-1}$ in $f$ for $i\ge1$ and is $0$ at $i=0$. So $xf$ has zero coefficients above index $n+1$ and coefficient $c\neq0$ at index $n+1$, whence $xf$ is a nonzero element of $\mathfrak a$ of degree $n+1$ with $\operatorname{lc}(xf)=c$. Thus $c\in\mathfrak a_{n+1}$, and $0\in\mathfrak a_{n+1}$ as well, so $\mathfrak a_n\subseteq\mathfrak a_{n+1}$. [L1, L2, step 1.1]

3.1 By the ideal criterion, a nonempty subset of a commutative ring closed under differences and under multiplication by arbitrary ring elements is an ideal; steps 2.1 and 2.2 supply exactly those closures, so $\mathfrak a_n$ is an ideal of $R$. [L3, L5, step 2.1, step 2.2]

4.1 Step 3.1 holds for every $n\in\mathbb N$ and step 2.3 gives $\mathfrak a_n\subseteq\mathfrak a_{n+1}$ for every $n\in\mathbb N$, so the stages form an ascending chain of ideals of $R$ indexed by $\mathbb N$ and beginning at $\mathfrak a_0$. A nonzero element of $\mathfrak a$ has degree $0$ exactly when it is a nonzero constant, and its leading coefficient is then that constant, so $\mathfrak a_0$ is the set of constants lying in $\mathfrak a$, the zero constant included. [step 2.3, step 3.1] ∎

## Remarks

- **Exact degree, not degree at most $n$.** Defining the stage by "degree at most $n$" gives the same ideals, but then the ideal property itself needs the shifting argument of step 2.3 rather than only the ascent. With exact degree the two facts separate cleanly, which is what the Hilbert basis argument uses: it needs a generator of a prescribed degree, not merely of bounded degree.

- **The chain need not be strictly increasing, and it need not stabilise.** Nothing above assumes $R$ Noetherian. Stabilisation is exactly what the Noetherian hypothesis will buy, and it is not available here.

- **Why $\mathfrak a_n$ is closed under multiplication even where degrees drop.** Over a ring with zero divisors $rf$ can have degree below $n$, and then $rc=0$; step 2.2 records that case separately and sends it to the adjoined $0$ rather than pretending the degree is preserved.
