---
id: lem-orbit-polynomial-has-invariant-coefficients
kind: lemma
title: "For a finite group of ring automorphisms the orbit polynomial is monic over the invariant subring, so the ring is integral over its invariants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-subring-of-a-group-of-ring-automorphisms, def-polynomial-ring-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, prop-polynomial-degree-laws-over-a-commutative-ring, thm-universal-property-of-a-polynomial-ring, def-polynomial-evaluation-and-root, def-integral-element-and-algebraic-integer, def-group, def-group-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Theorem 5.8"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.22)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a **finite** group acting by ring automorphisms on a **nonzero**
commutative ring $C$, and let $C^{G}$ be the invariant subring
([[def-invariant-subring-of-a-group-of-ring-automorphisms]]). Extend the action
to the polynomial ring $C[T]$ coefficientwise, fixing $T$. For $x\in C$ put

$$P_x(T)\;:=\;\prod_{g\in G}\big(T-g\cdot x\big)\in C[T].$$

Then $P_x$ is monic of degree $|G|$, every coefficient of $P_x$ lies in $C^{G}$,
and $P_x(x)=0$. Consequently every element of $C$ is integral over $C^{G}$
([[def-integral-element-and-algebraic-integer]]).

Finiteness of $G$ is a hypothesis, not a convenience: the product is over the
index set $G$ and is a polynomial only because that set is finite. The
hypothesis $C\neq0$ is what makes $1_C\neq0_C$, so that a monic polynomial
exists at all.

## Facts & Assumptions

**Given:** A finite group $G$ acting by ring automorphisms on a nonzero commutative ring $C$, an element $x\in C$, and the polynomial ring $C[T]$.

[L1] For an action of a group $G$ on a commutative ring $C$ by ring automorphisms, $C^{G}=\{c\in C: g\cdot c=c$ for every $g\in G\}$ is a subring of $C$, and each $g$ acts as a ring automorphism, so $g\cdot1_C=1_C$ ([[def-invariant-subring-of-a-group-of-ring-automorphisms]]).

[L2] In a group every element $h$ has a two-sided inverse $h^{-1}$, and multiplication is associative ([[def-group]]).

[L3] A left action satisfies $e\cdot c=c$ and $(gh)\cdot c=g\cdot(h\cdot c)$ for all $g,h\in G$ and $c\in C$ ([[def-group-action]]).

[L4] $C[T]$ is the set of finitely supported functions $\mathbb N\to C$ with $(a+b)_i=a_i+b_i$ and $(ab)_i=\sum_{j+k=i}a_jb_k$; the constant $c$ is supported at $0$ and $T$ has coefficient $1_C$ at index $1$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L5] For $0\ne f\in C[T]$ the degree is the largest index carrying a nonzero coefficient, the leading coefficient is the coefficient there, and $f$ is **monic** when that coefficient is $1_C$ ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L6] For nonzero $f,g\in C[T]$: the coefficient of $T^{\deg f+\deg g}$ in $fg$ is $\operatorname{lc}(f)\operatorname{lc}(g)$, and if $fg\ne0$ then $\deg(fg)\le\deg f+\deg g$ ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L7] For commutative rings $C,S$, a unital ring homomorphism $\varphi\colon C\to S$ and $s\in S$, there is a unique unital ring homomorphism $C[T]\to S$ extending $\varphi$ on constants and sending $T$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L8] The value of $f=\sum_ia_iT^i$ at $s$ along $\varphi$ is $f_\varphi(s)=\sum_i\varphi(a_i)s^i$, and $s$ is a **root** of $f$ when that value is $0$ ([[def-polynomial-evaluation-and-root]]).

[L9] For a homomorphism of commutative rings $A\to B$, an element $b\in B$ is **integral over $A$** when it is a root of a monic polynomial in $A[X]$ ([[def-integral-element-and-algebraic-integer]]).

[L10] For a commutative ring $C$, the polynomial ring $C[T]$ is a commutative ring ([[thm-polynomial-ring-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 For $g\in G$ let $g$ act on $C[T]$ by $g\cdot\sum_ia_iT^i:=\sum_i(g\cdot a_i)T^i$. This is additive because addition of polynomials is coefficientwise, multiplicative because $g\cdot\sum_{j+k=i}a_jb_k=\sum_{j+k=i}(g\cdot a_j)(g\cdot b_k)$ by the ring-homomorphism property of $g$ on $C$, and it sends $1$ to $1$ and $T$ to $T$; the action axioms are inherited coefficientwise, so this is again an action of $G$ by ring automorphisms, restricting to the given one on constants. [L1, L2, L3, L4, given]

2.1 $P_x=\prod_{g\in G}(T-g\cdot x)$ is monic of degree $|G|$. Each factor $T-g\cdot x$ is nonzero of degree $1$ with leading coefficient $1_C\ne0_C$, because $C\ne0$. Multiplying the factors one at a time: if $f$ is monic of degree $d$ then the coefficient of $T^{d+1}$ in $f\cdot(T-g\cdot x)$ is $1_C\cdot1_C=1_C\ne0_C$, so that product is nonzero, its degree is at most $d+1$, and the nonvanishing coefficient at $T^{d+1}$ forces the degree to be exactly $d+1$ with leading coefficient $1_C$. Since $G$ is finite and nonempty, the product over all of $G$ is monic of degree $|G|$. [L4, L5, L6, step 1.1]

2.2 $P_x$ is fixed by the action. For $h\in G$, applying $h$ coefficientwise to a product is applying it to each factor, so $h\cdot P_x=\prod_{g\in G}\big(T-(hg)\cdot x\big)$; the map $g\mapsto hg$ is a bijection of $G$ onto itself, with inverse $g\mapsto h^{-1}g$, so it merely permutes the factors of a product in the commutative ring $C[T]$ and $h\cdot P_x=P_x$. Since the action on $C[T]$ is coefficientwise, every coefficient of $P_x$ is fixed by every $h\in G$, that is, lies in $C^{G}$. [L1, L2, L3, L10, step 1.1]

3.1 $P_x(x)=0$. Evaluation at $x$ along the identity of $C$ is the unique unital ring homomorphism $C[T]\to C$ fixing constants and sending $T$ to $x$, so it carries the product $\prod_{g}(T-g\cdot x)$ to $\prod_{g}(x-g\cdot x)$. The factor indexed by the identity $e$ of $G$ is $x-e\cdot x=x-x=0$, and a product in a commutative ring with a zero factor is zero. [L3, L7, L8, step 2.1]

4.1 By step 2.2 all coefficients of $P_x$ lie in the subring $C^{G}$, so $P_x$ is a polynomial in $C^{G}[T]$; its leading coefficient is $1_C=1_{C^{G}}$, so it is monic there as well, and by step 3.1 the element $x$ is a root of it. Hence $x$ is integral over $C^{G}$, and since $x\in C$ was arbitrary, $C$ is integral over $C^{G}$. [L1, L5, L9, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The product is over the whole group, not over the orbit.** Repeated factors are tolerated and are what keeps the degree equal to $|G|$ independently of the stabiliser of $x$; taking the product over the orbit would give a polynomial of varying degree and would need the orbit to be a set of distinct elements.

- **Nothing is said about $C^{G}$ being large.** For a faithful action with many invariants the polynomial $P_x$ is informative; for the trivial group it is $(T-x)^{1}$ and the statement is the tautology that every element of $C$ is integral over $C$.

- **Infinite $G$ gives nothing here.** The construction produces no polynomial at all, since an infinite product of linear factors is not an element of $C[T]$, and the conclusion can fail.
