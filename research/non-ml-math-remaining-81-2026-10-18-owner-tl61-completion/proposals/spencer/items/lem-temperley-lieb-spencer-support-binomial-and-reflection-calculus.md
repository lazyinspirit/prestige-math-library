---
id: lem-temperley-lieb-spencer-support-binomial-and-reflection-calculus
kind: lemma
title: "Spencer support signs, wall reflections, and nonzero composition scalars"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-spencer-digit-support
  - lem-temperley-lieb-quantum-binomial-digit-criterion
  - thm-binomial-theorem-over-a-commutative-ring
  - lem-prime-divides-intermediate-binomial-coefficients
  - thm-irreducible-quotient-adjoins-a-root
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§2.5 and §8, especially Lemma 8.2 and the scalar in equation (8.4)."
---

## Statement

Use the digits and place values in [[def-temperley-lieb-spencer-digit-support]], and write $N+1=\sum_{j=0}^r n_js_j$ with $n_r>0$. When $\ell<\infty$, each signed expression $\sum_j\varepsilon_jn_js_j-1$ with $\varepsilon_r=1$ lies in $[0,N]$, has parity $N$, and determines its signs at every nonzero digit uniquely. Thus the support has $2^h$ elements, where $h$ is the number of nonzero digits below $r$.

For $0\le v\le u$, the specialized quantum binomial $B_{u,v}(\delta)$ is nonzero exactly when each mixed-radix digit of $v$ is at most the corresponding digit of $u$. In characteristic zero this uses the two digits with places $1,\ell$; if $\ell=\infty$, every such binomial is nonzero.

For any $0<k\le r$, changing all signs at indices less than $k$ reflects the corresponding support element about the wall $H-1$, where $H=\sum_{j\ge k}\varepsilon_jn_js_j$ is a positive multiple of $s_k$. In particular, writing $L=\sum_{j<k}\varepsilon_jn_js_j$ gives the pair $H+L-1,H-L-1$ and $|L|<s_k$.

Let $a,b,c$ belong to this support, and suppose their sets of negative nonzero digits satisfy $A\subseteq B\subseteq C$. Then $a\ge b\ge c$ and the specialized quantum binomial
$$B_{(a-c)/2,(a-b)/2}(\delta)$$
is nonzero. Here $B$ denotes the polynomial quantum binomial of [[lem-temperley-lieb-quantum-binomial-digit-criterion]]. If $\ell=\infty$, the same last assertion holds for the only triple $a=b=c=N$.

## Facts & Assumptions

**Given:** A field, its loop parameter, recurrence quantum characteristic, and the digit data in the Statement.

[F1] The support uses digits of $N+1$, with highest sign fixed positive and the place values and digit bounds stated in [[def-temperley-lieb-spencer-digit-support]].

[F2] The polynomials $B_{u,v}$ satisfy $B_{u,v}(q+q^{-1})=q^{-v(u-v)}G_{u,v}(q^2)$, where $G$ is the binary-word inversion polynomial ([[lem-temperley-lieb-quantum-binomial-digit-criterion]]).

[F3] The binomial theorem and the vanishing of intermediate prime binomial coefficients hold over a field of prime characteristic ([[thm-binomial-theorem-over-a-commutative-ring]], [[lem-prime-divides-intermediate-binomial-coefficients]]).

[F4] An irreducible polynomial has a root in its quotient field extension ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 The digit bounds give $\sum_{j<k}n_js_j\le s_k-1$ for every available $k\ge1$: for $k=1$ this is $n_0\le\ell-1$, and adjoining a digit at place $s_k$ increases the maximum from $s_k-1$ to $(p-1)s_k+s_k-1=s_{k+1}-1$. In characteristic zero there is only the first such bound to check. Therefore the signed sum with positive highest digit is at least $n_rs_r-(s_r-1)-1\ge0$ and at most $N$. Flipping signs changes $N$ by an even integer. For $r=0$, the only support element is $N$, so the same assertions hold. [F1, given, algebra]

1.2 We prove the quantum-binomial zero test needed below, retaining scalar units. Using [F4] when necessary, adjoin a root $q\ne0$ of $X^2-\delta X+1$ if necessary and put $Q=q^2$. If $Q\ne1$, the recurrence gives $[t]_\delta=q^{1-t}(1-Q^t)/(1-Q)$, so finite $\ell$ is the exact order of $Q$. If $Q=1$, the recurrence gives $[t]_\delta=tq^{t-1}$, so finite $\ell$ equals the field characteristic. The extension does not change which elements of the original field vanish. Expanding by subsets gives $\prod_{i=0}^{u-1}(1+Q^iX)=\sum_vQ^{v(v-1)/2}G_{u,v}(Q)X^v$. In the first case, the length-$\ell$ factor is $1-(-X)^\ell$ by the distinct roots of $Y^\ell-1$; in the second it has this same value by [F3]. [F1, F2, F3, F4, algebra, construct]

2.1 If two sign choices differ at a nonzero digit, let $j$ be their largest differing index. Their signed sums differ by a term of absolute value $2n_js_j\ge2s_j$, whereas all smaller terms have combined absolute value at most $2(s_j-1)$ by step 1.1. Thus their sums differ. Each of the $h$ nonzero lower digits consequently gives an independent choice, proving the count. [F1, step 1.1, algebra]

2.2 If $\ell=\infty$, every quantum factorial is nonzero and [F2] proves the asserted nonvanishing directly. Suppose $\ell<\infty$ and write $u=U\ell+u_0$ and $v=V\ell+v_0$ with remainders in $[0,\ell-1]$. Step 1.2 factors its product into $(1-(-X)^\ell)^U\prod_{i=0}^{u_0-1}(1+Q^iX)$. Comparing the coefficient of $X^v$, and using [F2], shows $B_{u,v}(\delta)\ne0$ precisely when $v_0\le u_0$ and $\binom UV\ne0$ in the field: the omitted factors are powers of $Q$ and $-1$, and $G_{u_0,v_0}$ is nonzero because every quantum factorial index is less than $\ell$. In positive characteristic, expand $(1+X)^U=\prod_i(1+X^{p^i})^{u_i}$ using [F3]. The coefficient at $V$ is nonzero exactly when its base-$p$ digits are at most the corresponding digits of $U$, since then it is a product of nonzero binomials with factorial indices less than $p$. In characteristic zero $\binom UV$ is nonzero whenever $0\le V\le U$. Consequently the quantum binomial is nonzero exactly when every mixed-radix digit of $v$ is at most that of $u$. [F1, F2, F3, step 1.2, algebra]

3.1 For a fixed split index $k$, the higher contribution $H$ is divisible by $s_k$ and satisfies $H\ge n_rs_r-\sum_{k\le j<r}n_js_j\ge s_k>0$ by the same place-value bound. Step 1.1 gives $|L|<s_k$. Negating exactly the lower signs replaces $H+L-1$ by $H-L-1=2(H-1)-(H+L-1)$, retains the highest positive sign, and hence stays in the support. This proves the reflection assertion, including the case $L=0$. [F1, step 1.1, step 2.1, algebra]

4.1 For the nested sets in the Statement, subtracting the signed sums gives $(a-c)/2=\sum_{j\in C\setminus A}n_js_j$ and $(a-b)/2=\sum_{j\in B\setminus A}n_js_j$. These are their actual mixed-radix expansions, because each digit is either $0$ or the original allowed digit and no position is added twice. Since $B\setminus A\subseteq C\setminus A$, the second expansion is digitwise bounded by the first. Step 2.2 proves the nonzero scalar, including repeated labels and zero digits. If $\ell=\infty$ then the singleton support gives $B_{0,0}=1$ directly from [F2]. [F1, F2, step 2.1, step 2.2, algebra] ∎

## Remarks

This is a combinatorial supplier. It neither constructs the candidate module maps nor asserts that support labels are composition factors. Those require separate proofs.
