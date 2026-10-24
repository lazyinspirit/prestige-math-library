---
id: lem-zmt-one-variable-integral-correction
kind: lemma
title: One-variable integral correction after leading-coefficient localization
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-integral-element-and-algebraic-integer, def-integral-ring-extension, thm-monic-polynomial-division, thm-transitivity-of-integrality, thm-integrality-commutes-with-localisation, thm-integrality-and-finite-module-equivalences, cor-integral-elements-form-a-subring, def-principal-localisation, prop-localisation-zero-equality-and-kernel-criteria]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Lemmas 10.123.2 and 10.123.3"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, Lemmas 10.123.2 and 10.123.3 with their complete proofs"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a commutative ring, let $\varphi:R[x]\to S$ be a unital ring map of
commutative rings, and let $t\in S$ be integral over the image subring
$\varphi(R[x])\subseteq S$ ([[def-integral-element-and-algebraic-integer]],
[[def-integral-ring-extension]]). Let $p=a_0+a_1x+\cdots+a_kx^k\in R[x]$ be a
polynomial with

$$ t\,\varphi(p)\in\operatorname{Im}(\varphi). $$

1. If $p$ is monic, then there exists $q\in R[x]$ such that $t-\varphi(q)$ is
   integral over $R$.
2. In general there exist $q\in R[x]$ and an integer $n\ge0$ such that
   $\varphi(a_k)^n t-\varphi(q)$ is integral over $R$.

No injectivity of $\varphi$, no regularity of the leading coefficient $a_k$,
and no reducedness or domain hypothesis is imposed: $a_k$ may be $0$, a zero
divisor or a nilpotent, $t$ may be $0$ or a zero divisor, and the polynomial
ring and all localisations are taken over the possibly nonreduced ring $R$.
Part 1 is the monic case of the one-variable integral correction; part 2
obtains it in general by inverting $a_k$.

## Facts & Assumptions

**Given:** A unital ring map $\varphi:R[x]\to S$ of commutative rings, an element $t\in S$ integral over the subring $\varphi(R[x])\subseteq S$, and a polynomial $p=a_0+a_1x+\cdots+a_kx^k\in R[x]$ with $t\,\varphi(p)\in\operatorname{Im}(\varphi)$.

[L1] An element $b$ of a commutative ring $B$ is **integral over** a subring $A$ exactly when it is a root of a monic polynomial in $A[X]$ ([[def-integral-element-and-algebraic-integer]]).

[L2] Let $R$ be a commutative ring and let $g\in R[x]$ be monic. For every $f\in R[x]$ there are unique $q,r\in R[x]$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$ ([[thm-monic-polynomial-division]]).

[L3] Let $A\to B$ be a homomorphism of commutative rings, $S\subseteq A$ multiplicative and $b\in B$. If $b$ is integral over $A$ then $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$; and if $b/1$ is integral over $S^{-1}A$ in $S^{-1}B$ then some $s\in S$ makes $sb$ integral over $A$ ([[thm-integrality-commutes-with-localisation]]).

[L4] If $A\to B$ and $B\to C$ are integral ring maps of commutative rings then the composite $A\to C$ is integral ([[thm-transitivity-of-integrality]]).

[L5] Let $A\subseteq B$ be commutative rings with $A\ne0$ and $b\in B$. Then $b$ is integral over $A$ if and only if $A[b]$ is finitely generated as an $A$-module ([[thm-integrality-and-finite-module-equivalences]]).

[L6] Let $R$ be a commutative ring, $S\subseteq R$ multiplicative, and $r\in R$. Then the image of $r$ in $S^{-1}R$ is zero if and only if $ur=0$ for some $u\in S$; and $S^{-1}R$ is the zero ring if and only if $0\in S$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[L7] For a commutative ring $R$ and $f\in R$ the powers of $f$ form a multiplicative subset and the principal localisation $R_f$ has elements $r/f^n$; $R_0$ is the zero ring ([[def-principal-localisation]]).

[L8] Let $A\subseteq B$ be commutative rings with $A\ne0$. The elements of $B$ integral over $A$ form a subring of $B$ ([[cor-integral-elements-form-a-subring]]).

## Proof

**Proof technique:** direct.

1.1 We first dispose of the degenerate cases. If $R=0$ then $R[x]=0$ and $1_S=\varphi(0)=0$, so $S=0$, $t=0$ and $q=0$ satisfies both claims. If $S=0$ then also $t=0$ and $q=0$ satisfies both claims. If $t$ is nilpotent, say $t^N=0$ with $N\ge1$, then $t$ is a root of the monic polynomial $X^N$, hence integral over $R$ by [L1], so $q=0$ satisfies claim 1 and $(n,q)=(0,0)$ satisfies claim 2. If $a_k$ is nilpotent, say $a_k^N=0$ with $N\ge1$, then $\varphi(a_k)^Nt-\varphi(0)=0$ is integral over $R$ by [L1], so $(n,q)=(N,0)$ satisfies claim 2. We therefore assume $R\ne0$, $S\ne0$, $t$ not nilpotent, and in the treatment of claim 2 the element $a_k$ not nilpotent. [given, L1]

1.2 Assume that $p$ is monic, so that claim 1 is at stake. Since $t\varphi(p)\in\operatorname{Im}(\varphi)$, choose $r\in R[x]$ with $t\varphi(p)=\varphi(r)$. By [L2] applied to the monic divisor $p$ there are $q,r'\in R[x]$ with $r=qp+r'$ and $r'=0$ or $\deg r'<\deg p$. Set $t'=t-\varphi(q)\in S$. Then $t'\varphi(p)=t\varphi(p)-\varphi(q)\varphi(p)=\varphi(r)-\varphi(qp)=\varphi(r')$. If $t'$ is nilpotent, say $t'^N=0$ for some $N\ge1$, then $t'$ is integral over $R$ by the monic equation $X^N=0$, proving claim 1; below assume $t'$ is not nilpotent. [given, L1, L2, construct]

2.1 The element $t'=t-\varphi(q)$ is integral over $\varphi(R[x])$: the given element $t$ is integral over $\varphi(R[x])$ and $\varphi(q)\in\varphi(R[x])$, while $1_S\ne0$ makes the subring $\varphi(R[x])\subseteq S$ nonzero, so [L8] applies. [step 1.2, L8, algebra]

2.2 Write $p=x^d+p_{d-1}x^{d-1}+\cdots+p_0$ with $d\ge0$ (a monic constant is the case $d=0$) and write $r'=r'_{d-1}x^{d-1}+\cdots+r'_0$ with $r'_i=0$ for $i\ge\deg r'$. In the principal localisation $S_{t'}$ of [L7] the identity $t'\varphi(p)=\varphi(r')$ of step 1.2 becomes $\varphi(p)=t'^{-1}\varphi(r')$, that is, the identity $\varphi(x)^d+\sum_{i=0}^{d-1}\bigl(\varphi(p_i)-t'^{-1}\varphi(r'_i)\bigr)\varphi(x)^i=0$ in $S_{t'}$. Its coefficients $\varphi(p_i)-t'^{-1}\varphi(r'_i)$ lie in the subring $\varphi(R)[1/t']\subseteq S_{t'}$ and its leading coefficient is $1$; by [L1] the element $\varphi(x)$ is integral over $\varphi(R)[1/t']$. [step 1.2, L1, L7, algebra]

3.1 By [L5] applied to the nonzero ring $\varphi(R)[1/t']$ and the integral element $\varphi(x)$ of step 2.2, the subalgebra $\varphi(R)[1/t'][\varphi(x)]$ is a finitely generated $\varphi(R)[1/t']$-module, so every one of its elements is integral over $\varphi(R)[1/t']$ by [L8]; equivalently the ring map $\varphi(R)[1/t']\to\varphi(R)[1/t'][\varphi(x)]$ is integral. [step 2.2, L5, L8, algebra]

4.1 Put $A=\varphi(R)[1/t']$ and $B=A[\varphi(x)]$ inside $S_{t'}$. The element $t'$ is integral over $B$: its monic equation over $\varphi(R[x])$ from step 2.1 remains a monic equation over the larger subring $B$. By step 3.1, $A\to B$ is integral. Since the integral elements over $B$ form a subring by [L8], the ring $B[t']$ is integral over $B$; transitivity [L4] makes $A\to B[t']$ integral. Therefore $t'\in B[t']$ is integral over $A$ by [L1]. [step 2.1, step 3.1, L1, L4, L8]

5.1 By [L1] there are an integer $e\ge1$ and coefficients $c_0,\ldots,c_{e-1}\in A=\varphi(R)[1/t']$ with $t'^e+\sum_{i=0}^{e-1}c_it'^i=0$. Each $c_i$ is a finite sum $\sum_{j=1}^{m_i}\varphi(b_{ij})/t'^{\ell_{ij}}$ with $b_{ij}\in R$ and $\ell_{ij}\ge0$, since $A$ is generated as a subring by $\varphi(R)$ and $t'^{-1}$. Choose $N\ge0$ at least every exponent $\ell_{ij}$ (take $N=0$ if there are no summands). Multiplying the relation by $t'^N$ in $S_{t'}$ gives $$t'^{e+N}+\sum_{i=0}^{e-1}\sum_{j=1}^{m_i}\varphi(b_{ij})t'^{\,i+N-\ell_{ij}}=0,$$ where every exponent $i+N-\ell_{ij}$ is nonnegative. [step 4.1, L1, L7, algebra]

6.1 The identity of step 5.1 holds in $S_{t'}$, so by the kernel criterion [L6] applied to the localisation map $S\to S_{t'}$ and the element $$b=t'^{e+N}+\sum_{i=0}^{e-1}\sum_{j=1}^{m_i}\varphi(b_{ij})t'^{\,i+N-\ell_{ij}}\in S$$ there is $M\ge0$ with $t'^Mb=0$ in $S$. Hence $$t'^{e+N+M}+\sum_{i=0}^{e-1}\sum_{j=1}^{m_i}\varphi(b_{ij})t'^{\,i+N-\ell_{ij}+M}=0$$ in $S$: a monic polynomial relation for $t'=t-\varphi(q)$ with coefficients in $\varphi(R)\subseteq S$. By [L1] the element $t-\varphi(q)$ is integral over $R$, which is claim 1. [step 5.1, L1, L6, algebra]

7.1 Now let $p=\sum_{i=0}^{k}a_ix^i$ be arbitrary with $t\varphi(p)\in\operatorname{Im}(\varphi)$, and assume first that $a_k$ is not nilpotent. Then the principal localisation $R'=R_{a_k}$ of [L7] is nonzero by [L6], since its multiplicative set contains $1=a_k^0$ while no power of $a_k$ is $0$; and $p'=a_k^{-1}p=x^k+\sum_{i=0}^{k-1}(a_i/a_k)x^i\in R'[x]$ is monic. Let $S'=S_{a_k}$, let $\varphi':R'[x]\to S'$ be the localisation of $\varphi$, and let $t'\in S'$ be the image of $t$, so that $R'[x]=R[x]_{a_k}=R_{a_k}[x]$. The element $t'$ is integral over $\varphi'(R'[x])$, because the monic equation for $t$ over $\varphi(R[x])$ transports along the ring map induced by $\varphi$; and $t'\varphi'(p')=t\varphi(p)/a_k$ lies in $\operatorname{Im}(\varphi')$, because $t\varphi(p)=\varphi(r)$ for some $r\in R[x]$ gives $t'\varphi'(p')=\varphi'(r/a_k)$. Applying claim 1, already proved in steps 1.2-6.1 for the data $(R',S',\varphi',t',p')$, yields $q'\in R'[x]$ with $t'-\varphi'(q')$ integral over $R'$. [step 6.1, L1, L6, L7, algebra]

8.1 Write $q'$ as a finite sum of terms $c/a_k^m$ with $c\in R[x]$ and $m\ge0$, and let $n$ be the maximum of the finitely many exponents $m$ occurring, with $n=0$ when $q'=0$. Then $a_k^nq'$ is the image of some $q\in R[x]$ under $R[x]\to R'[x]$, namely $q=\sum_j c_ja_k^{\,n-m_j}$ for the finitely many summands $c_j/a_k^{m_j}$ of $q'$. With this $n$ and $q$, the image in $S'$ of $\varphi(a_k)^nt-\varphi(q)$ is $a_k^nt'-a_k^n\varphi'(q')=a_k^n\bigl(t'-\varphi'(q')\bigr)$, and this is integral over $R'$ because $t'-\varphi'(q')$ is (step 7.1) and $a_k^n\in R'$. [step 7.1, L1, L7, construct]

9.1 Apply clause 2 of [L3] to the ring map $R\to S$, the multiplicative subset $\{a_k^m:m\ge0\}\subseteq R$ and the element $b=\varphi(a_k)^nt-\varphi(q)\in S$: its image in $S_{a_k}=S'$ is integral over $R_{a_k}=R'$ by step 8.1, so there exists $m\ge0$ such that $a_k^mb$ is integral over $R$. With $n'=m+n\ge0$ and $q''=a_k^mq\in R[x]$ one has $\varphi(a_k)^{n'}t-\varphi(q'')=a_k^m\bigl(\varphi(a_k)^nt-\varphi(q)\bigr)$, which is integral over $R$. This is claim 2 for arbitrary $p$ with $t\varphi(p)\in\operatorname{Im}(\varphi)$. [step 8.1, L3, algebra]

10.1 Together, step 1.1 (the degenerate cases, including nilpotent $a_k$ and nilpotent $t$), step 6.1 (claim 1) and step 9.1 (claim 2) prove both assertions of the statement for every commutative ring $R$, every unital $\varphi$, every $t$ integral over $\varphi(R[x])$ and every $p$ with $t\varphi(p)\in\operatorname{Im}(\varphi)$; this includes $p=0$, monic constants $p$, the zero element $t=0$, and zero divisors or nilpotents among the $a_i$. ∎ [step 1.1, step 6.1, step 9.1, given]
