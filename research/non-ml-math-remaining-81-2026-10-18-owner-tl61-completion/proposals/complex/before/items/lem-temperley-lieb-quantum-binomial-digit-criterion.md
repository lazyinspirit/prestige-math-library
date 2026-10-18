---
id: lem-temperley-lieb-quantum-binomial-digit-criterion
kind: lemma
title: "Nonvanishing of an entire quantum-binomial row and the characteristic digits"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - thm-binomial-theorem-over-a-commutative-ring
  - lem-prime-divides-intermediate-binomial-coefficients
  - thm-irreducible-quotient-adjoins-a-root
  - thm-characteristic-of-a-field-is-zero-or-prime
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§2.5, Theorem 2.7 and Corollary 2.8, PDF p. 9: quantum Lucas nonvanishing and the full-row digit criterion. Only the zero pattern is used; scalar unit factors are retained in the local proof."
---

## Statement

For $0\le k\le n$, let $G_{n,k}(Q)$ be the polynomial $\sum_w Q^{\operatorname{inv}(w)}$, summed over binary words with $k$ ones and $n-k$ zeros, where $\operatorname{inv}(w)$ counts pairs with a one to the left of a zero. There is a unique polynomial $B_{n,k}(T)\in\mathbb Z[T]$ such that

$$B_{n,k}(q+q^{-1})=q^{-k(n-k)}G_{n,k}(q^2).$$

It agrees as a rational-function identity with $[n]!/([k]![n-k]!)$; its value at a specialized loop parameter is the polynomial value, without division by vanishing factorials.

For a field $K$, $\delta\in K$, recurrence quantum characteristic $\ell$, and $p=\operatorname{char}K$, every $B_{n,k}(\delta)$ for $0\le k\le n$ is nonzero exactly as follows: if $\ell=\infty$, at every finite $n$; if $\ell<\infty$ and $p>0$, when $n<\ell$ or $n=a\ell p^{i-1}-1$ with $i\ge1$ and $1\le a<p$; if $\ell<\infty$ and $p=0$, when $n<\ell$ or $n=a\ell-1$ for a positive integer $a$.

## Facts & Assumptions

**Given:** The quantum-integer recurrence, a field and its loop parameter.

[F1] Quantum integers and the recurrence quantum characteristic are defined without inverting any specialized value ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F2] The binomial theorem holds over every commutative ring, and a prime $p$ divides $\binom pj$ for $0<j<p$ ([[thm-binomial-theorem-over-a-commutative-ring]], [[lem-prime-divides-intermediate-binomial-coefficients]]).

[F3] A monic irreducible polynomial can be given a root in a field extension by taking its polynomial quotient ([[thm-irreducible-quotient-adjoins-a-root]]).

[F4] A field has characteristic zero or prime characteristic ([[thm-characteristic-of-a-field-is-zero-or-prime]]).

## Proof

**Given:** The parameters and polynomials in the Statement.

1.1 Reversing a binary word changes its inversion count from $v$ to $k(n-k)-v$, so $q^{-k(n-k)}G_{n,k}(q^2)$ is unchanged by $q\mapsto q^{-1}$. A symmetric integer Laurent polynomial is an integer combination of $1$ and $q^j+q^{-j}$: pair its opposite coefficients. Each $q^j+q^{-j}$ is a polynomial in $T=q+q^{-1}$ by the recurrence $s_{j+1}=Ts_j-s_{j-1}$ with $s_0=2,s_1=T$. This proves existence of $B_{n,k}$. The highest Laurent power of a nonzero polynomial in $q+q^{-1}$ is its degree, with its leading coefficient unchanged, so substitution is injective and proves uniqueness. [given, construct, algebra]

2.1 Splitting words by their final letter gives $G_{n,k}=G_{n-1,k-1}+Q^kG_{n-1,k}$, with boundary values $G_{n,0}=G_{n,n}=1$. The rational product $\prod_{j=1}^k(1-Q^{n-k+j})/(1-Q^j)$ has these same values and recurrence, as putting the two terms over their common denominator verifies. Induction therefore identifies it with $G_{n,k}$. The recurrence [F1] gives $[j]_q=q^{1-j}(1-q^{2j})/(1-q^2)$ as an identity of rational functions, so canceling those factors gives $B_{n,k}=[n]!/([k]![n-k]!)$ before specialization. [F1, step 1.1, algebra]

3.1 By [F4], positive characteristic $p$ is prime. Extend $K$, if necessary, to a field containing a root $q$ of $X^2-\delta X+1$, using [F3] if this polynomial is irreducible. Its constant term makes $q\ne0$ and $\delta=q+q^{-1}$. Put $Q=q^2$. If $Q\ne1$, the formula in step 2.1 shows that $[r]_\delta=0$ exactly when $Q^r=1$. Thus finite $\ell$ is the order of $Q$. In positive characteristic this order is prime to $p$: if $\ell=ph$, then $(Q^h-1)^p=Q^\ell-1=0$ by [F2], contradicting minimality in a field. If $Q=1$, recurrence gives $[r]_\delta=rq^{r-1}$, so $\ell=p$ in positive characteristic and $\ell=\infty$ in characteristic zero. Nonvanishing of the original $K$-values is unchanged by this field extension. [F1, F2, F3, F4, step 2.1, construct, algebra]

3.2 If $\ell=\infty$, every quantum factorial is nonzero in the field, so step 2.1 makes every $B_{n,k}(\delta)$ nonzero. Suppose henceforth that $\ell<\infty$. Expanding a product over the subsets of $\{0,\ldots,n-1\}$ gives
$$\prod_{j=0}^{n-1}(1+Q^jX)=\sum_{k=0}^n Q^{k(k-1)/2}G_{n,k}(Q)X^k.$$
Indeed, if the one positions of a word are $r_1<\cdots<r_k$, the selected subset $\{n-r_1,\ldots,n-r_k\}$ has sum $\operatorname{inv}(w)+k(k-1)/2$. This proves the identity including both endpoint coefficients. [F1, step 1.1, step 2.1, step 3.1, algebra]

4.1 The length-$\ell$ factor is $\prod_{j=0}^{\ell-1}(1+Q^jX)=1-(-X)^\ell$. When $Q\ne1$, its powers are the distinct $\ell$th roots of unity, so this follows by factoring $Y^\ell-1$ and comparing constant terms. When $Q=1$, step 3.1 gives $\ell=p$, and [F2] gives $(1+X)^p=1+X^p=1-(-X)^p$. Writing $n=A\ell+b$ with $0\le b<\ell$ and using $Q^\ell=1$, the product in step 3.2 is therefore
$$(1-(-X)^\ell)^A\prod_{j=0}^{b-1}(1+Q^jX).$$
This is an equality in the polynomial ring over the extended field. [F2, step 3.1, step 3.2, algebra]

5.1 Write $k=C\ell+d$ with $0\le d<\ell$ and $0\le k\le n$. The coefficient of $X^k$ in step 4.1 is zero when $d>b$; otherwise it is $\binom AC$ times $G_{b,d}(Q)$ and powers of the units $Q$ and $-1$. There is only one such term, since the last product has degree $b<\ell$. Every $G_{b,d}(Q)$ with $d\le b$ is nonzero by step 2.1, since all factorial indices are below $\ell$. Consequently $B_{n,k}(\delta)\ne0$ exactly when $d\le b$ and $\binom AC$ is nonzero in $K$. This conclusion keeps all scalar unit factors and asserts only their exact zero pattern. [F1, step 1.1, step 2.1, step 3.2, step 4.1, algebra]

6.1 If $n<\ell$, step 5.1 already proves full-row nonvanishing. If $n\ge\ell$ and $b<\ell-1$, choosing $k=b+1\le n$ gives a zero. If $b=\ell-1$, step 5.1 says the entire row is nonzero exactly when every ordinary $\binom AC$, $0\le C\le A$, is nonzero. In characteristic zero this always holds, giving precisely $n=(A+1)\ell-1$. [F1, step 5.1, choose, algebra]

7.1 In characteristic $p>0$, write $A=\sum_j a_jp^j$. Repeated use of [F2] gives $(1+X)^A=\prod_j(1+X^{p^j})^{a_j}$. Uniqueness of base-$p$ digits makes the coefficient $\binom AC$ nonzero exactly when every digit $c_j$ of $C$ satisfies $c_j\le a_j$: the coefficient is $\prod_j\binom{a_j}{c_j}$, whose factors are nonzero because their factorial indices are below $p$. Thus the full ordinary row is nonzero exactly when every digit below the highest nonzero digit of $A$ is $p-1$. If a lower digit $a_j<p-1$, choose $C=(a_j+1)p^j\le A$ to get a zero; conversely the asserted full lower digits make every $C\le A$ digitwise admissible. This also includes $A=0$. Equivalently, $A+1=a p^s$ for some $s\ge0$ and $1\le a<p$, absorbing a leading carry into $s$ if necessary. Substitution in step 6.1 gives $n=a\ell p^s-1$, or $n=a p(i)-1$ with $i=s+1$. Together with steps 3.2 and 6.1 this proves every asserted branch. [F2, F4, step 3.2, step 6.1, construct, algebra] ∎
