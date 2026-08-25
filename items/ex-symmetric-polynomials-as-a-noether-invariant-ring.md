---
id: ex-symmetric-polynomials-as-a-noether-invariant-ring
kind: example
title: "The symmetric polynomials as the invariant ring of the symmetric group, seen through Noether's finiteness theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-noether-finiteness-theorem-for-invariants, def-invariant-subring-of-a-group-of-ring-automorphisms, lem-orbit-polynomial-has-invariant-coefficients, def-symmetric-polynomial, thm-fundamental-theorem-of-symmetric-polynomials, def-elementary-symmetric-polynomials, thm-vieta-expansion-in-elementary-symmetric-polynomials, def-finite-type-and-module-finite-algebras, thm-universal-property-of-a-polynomial-ring, def-multivariate-polynomial-ring-by-iteration, def-group, def-group-action, ex-noetherian-integers-and-fields]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.22)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Theorem 5.8"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field, let $n\ge1$ and let $\operatorname{Sym}_n$ act on
$C=k[x_1,\ldots,x_n]$ by permuting the indeterminates
([[def-symmetric-polynomial]]). This is an action by $k$-algebra automorphisms,
and its invariant subring
([[def-invariant-subring-of-a-group-of-ring-automorphisms]]) is the ring
$k[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$ of symmetric polynomials.

Noether's finiteness theorem
([[thm-noether-finiteness-theorem-for-invariants]]) says that this ring is of
finite type over $k$. It names no generators.
[[thm-fundamental-theorem-of-symmetric-polynomials]] says strictly more: the
substitution $T_j\mapsto e_j$ is a $k$-algebra **isomorphism**
$k[T_1,\ldots,T_n]\to k[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$, so the
elementary symmetric polynomials generate, there are $n$ of them, and the
expression of a symmetric polynomial in them is unique.

The orbit polynomial of [[lem-orbit-polynomial-has-invariant-coefficients]] at
$x_1$ is

$$P_{x_1}(T)=\prod_{\sigma\in\operatorname{Sym}_n}\big(T-x_{\sigma(1)}\big) =\Big(\prod_{i=1}^{n}(T-x_i)\Big)^{q},\qquad q=\frac{|\operatorname{Sym}_n|}{n},$$

and the coefficients of $\prod_{i=1}^n(T-x_i)$ are the elementary symmetric
polynomials in $x_1,\ldots,x_n$ up to sign.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\ge1$, the iterated polynomial ring $C=k[x_1,\ldots,x_n]$ ([[def-multivariate-polynomial-ring-by-iteration]]) with $k$ identified with the subring of constants, and the group $\operatorname{Sym}_n$ of permutations of $\{1,\ldots,n\}$.

[L1] Every permutation $\sigma\in\operatorname{Sym}(\{1,\ldots,n\})$ acts on $R[x_1,\ldots,x_n]$ by $\sigma\cdot f(x_1,\ldots,x_n)=f(x_{\sigma(1)},\ldots,x_{\sigma(n)})$, a polynomial is **symmetric** when $\sigma\cdot f=f$ for every $\sigma$, and the symmetric polynomials form the fixed subset $R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$ ([[def-symmetric-polynomial]]).

[L2] For an action of a group $G$ on a commutative ring $C$ by ring automorphisms, $C^{G}=\{c\in C:g\cdot c=c$ for every $g\in G\}$ is a subring of $C$; when $C$ is an $A$-algebra and every $g$ fixes the image of $A$ pointwise, the action is by $A$-algebra automorphisms and $A\subseteq C^{G}\subseteq C$ ([[def-invariant-subring-of-a-group-of-ring-automorphisms]]).

[L3] A left action satisfies $e\cdot c=c$ and $(gh)\cdot c=g\cdot(h\cdot c)$ ([[def-group-action]]).

[L4] In a group every element has a two-sided inverse and the operation is associative ([[def-group]]).

[L5] For commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$ and $s\in S$, there is a unique unital ring homomorphism $R[x]\to S$ extending $\varphi$ on constants and sending $x$ to $s$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L6] Every field is a Noetherian ring ([[ex-noetherian-integers-and-fields]]).

[L7] An algebra is **of finite type** over $R$ when it equals $R[a_1,\ldots,a_m]$ for a finite list ([[def-finite-type-and-module-finite-algebras]]).

[L8] For $A$ Noetherian, $C$ a commutative $A$-algebra of finite type with $A$ a subring of $C$, and $G$ a finite group acting on $C$ by $A$-algebra automorphisms, the invariant subring $C^{G}$ is of finite type over $A$ ([[thm-noether-finiteness-theorem-for-invariants]]).

[L9] For every commutative ring $R$ and every $n\in\mathbb N$, substitution $T_k\mapsto e_k$ is an $R$-algebra isomorphism $R[T_1,\ldots,T_n]\to R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$; equivalently, every symmetric polynomial has a unique expression $Q(e_1,\ldots,e_n)$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[L10] For $0\le k\le n$ the $k$-th elementary symmetric polynomial is $e_k(x_1,\ldots,x_n)=\sum_{1\le i_1<\cdots<i_k\le n}x_{i_1}\cdots x_{i_k}$, with $e_0=1$ ([[def-elementary-symmetric-polynomials]]).

[L11] In $R[x_1,\ldots,x_n,t]$ one has $\prod_{i=1}^n(t-x_i)=\sum_{k=0}^n(-1)^k e_k(x_1,\ldots,x_n)t^{n-k}$ ([[thm-vieta-expansion-in-elementary-symmetric-polynomials]]).

[L12] For a finite group $G$ acting by ring automorphisms on a nonzero commutative ring $C$ and $x\in C$, the polynomial $\prod_{g\in G}(T-g\cdot x)$ is monic of degree $|G|$ with all coefficients in $C^{G}$, and $C$ is integral over $C^{G}$ ([[lem-orbit-polynomial-has-invariant-coefficients]]).

## Verification

**Proof technique:** direct.

1.1 The permutation action is by $k$-algebra automorphisms. For $\sigma\in\operatorname{Sym}_n$ the map $\Phi_\sigma$ sending $x_j$ to $x_{\sigma(j)}$ and fixing $k$ is a unital ring homomorphism, obtained by iterating the universal property of a polynomial ring along the tower defining $C$; composing, $\Phi_\sigma\Phi_\tau$ sends $x_j$ to $x_{\sigma(\tau(j))}$, so $\Phi_\sigma\Phi_\tau=\Phi_{\sigma\tau}$ and $\Phi_\sigma$ is bijective with inverse $\Phi_{\sigma^{-1}}$. Each $\Phi_\sigma$ fixes the constants, so the action is by $k$-algebra automorphisms, and the invariant subring $C^{\operatorname{Sym}_n}$ is by definition the set of $f$ with $\sigma\cdot f=f$ for all $\sigma$, which is the ring of symmetric polynomials. [L1, L2, L3, L4, L5, given]

2.1 Noether's theorem applies. The ring $k$ is Noetherian, $C=k[x_1,\ldots,x_n]$ is of finite type over $k$ with the indeterminates as generators, $k$ is a subring of $C$, and $\operatorname{Sym}_n$ is a finite group acting on $C$ by $k$-algebra automorphisms. So $C^{\operatorname{Sym}_n}$ is of finite type over $k$: some finite list of symmetric polynomials generates it as a $k$-algebra. The theorem exhibits no such list. [L6, L7, L8, step 1.1]

3.1 The classical theorem gives strictly more, and the two agree where they overlap. Substitution $T_j\mapsto e_j$ is a $k$-algebra isomorphism onto $C^{\operatorname{Sym}_n}$, so $C^{\operatorname{Sym}_n}=k[e_1,\ldots,e_n]$, which in particular is a finite generating list and so reproves finite type. The extra content is twofold: the generators are named, and the isomorphism is injective, so the expression of a symmetric polynomial as a polynomial in $e_1,\ldots,e_n$ is unique. Nothing in Noether's theorem gives either. [L7, L9, L10, step 2.1]

4.1 The orbit polynomial at $x_1$ is a power of the Vieta product. By the action formula $\sigma\cdot x_1=x_{\sigma(1)}$, so $P_{x_1}(T)=\prod_{\sigma}(T-x_{\sigma(1)})$, in which the factor $T-x_i$ occurs once for each $\sigma$ with $\sigma(1)=i$. For indices $i\ne i'$, composing with the transposition exchanging $i$ and $i'$ is a bijection between the permutations with $\sigma(1)=i$ and those with $\sigma(1)=i'$, so all these counts are equal, say to $q$; summing over $i$ gives $nq=|\operatorname{Sym}_n|$. Hence $P_{x_1}(T)=\big(\prod_{i=1}^{n}(T-x_i)\big)^{q}$, and the coefficients of $\prod_{i=1}^n(T-x_i)$ are the elementary symmetric polynomials in $x_1,\ldots,x_n$ up to sign, the coefficient of $T^{n-k}$ being $(-1)^ke_k$. Every coefficient of $P_{x_1}$ is therefore a polynomial in $e_1,\ldots,e_n$, consistent with the general statement that the coefficients lie in the invariant subring. [L4, L10, L11, L12, step 1.1, step 3.1] ∎

## Remarks

- **Noether's theorem is much weaker here, and that is the point of comparing them.** Its proof runs through integrality and the Artin–Tate lemma and applies to any finite group acting on any finite-type algebra over any Noetherian ring; the fundamental theorem is special to the symmetric group acting on a polynomial ring by permutations, and pays for that with an exact description.

- **The exponent $q$ is not an artefact.** The orbit polynomial is a product over the group, not over the set of distinct values $\sigma\cdot x_1$, so the repetition is built into [[lem-orbit-polynomial-has-invariant-coefficients]]; the smaller polynomial $\prod_{i=1}^{n}(T-x_i)$ is also monic with invariant coefficients, and it is the one Vieta's expansion describes.
