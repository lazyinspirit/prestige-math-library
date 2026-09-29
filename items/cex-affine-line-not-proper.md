---
id: cex-affine-line-not-proper
kind: counterexample
title: The affine line is not proper
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - def-universally-closed-morphism
  - def-affine-scheme-spectrum
  - lem-zariski-closed-set-axioms
  - thm-localisation-at-a-prime-is-local
  - prop-localisation-zero-equality-and-kernel-criteria
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - thm-affine-fibre-product-tensor-ring
  - def-base-change-morphism-schemes
  - def-scheme-over-base
  - def-polynomial-ring-over-a-commutative-ring
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: counterexample
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.41 and Example 29.42.7"
      url: https://stacks.math.columbia.edu/tag/01W0
    - title: "Vakil, The Rising Sea, §11.3.1 and Exercise 11.3.A"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement refuted

For every field $k$, the structure morphism
$\mathbf A^1_k=\operatorname{Spec}k[x]\to\operatorname{Spec}k$ is proper.

## Facts & Assumptions

**Given:** A field $k$, the multiplicative subset $S=k[t]\setminus(t)\subseteq k[t]$, the localisation $R=k[t]_{(t)}=S^{-1}k[t]$ with fraction field $K=k(t)$, and the morphism $\operatorname{Spec}R\to\operatorname{Spec}k$ induced by $k\hookrightarrow R$.

[F1] A morphism of schemes is **proper** if and only if it is separated, of finite type, and universally closed. ([[def-proper-morphism]])

[F2] A morphism $f:X\to S$ is **universally closed** if for every $S$-scheme $T$ the base-changed projection $f_T:X\times_S T\to T$ is a closed map; explicitly the image of every closed subset of $|X_T|$ is closed in $|T|$. ([[def-universally-closed-morphism]])

[F3] For a commutative ring $A$, the points of $\operatorname{Spec}A$ are the prime ideals, $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ is a basic open, and the sets $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$ are the closed sets. ([[def-affine-scheme-spectrum]], [[lem-zariski-closed-set-axioms]])

[F4] For a prime ideal $\mathfrak p$ of a commutative ring $A$, the localisation $A_{\mathfrak p}$ is a nonzero local ring whose unique maximal ideal is $\mathfrak pA_{\mathfrak p}$ and whose units are exactly the fractions $r/s$ with $r\notin\mathfrak p$. ([[thm-localisation-at-a-prime-is-local]])

[F5] In a localisation, $r/1=0$ if and only if $sr=0$ for some $s$ in the multiplicative set. ([[prop-localisation-zero-equality-and-kernel-criteria]])

[F6] If $A$ is an integral domain then so is $A[x]$; in particular $k[t]$ is a domain for a field $k$. ([[cor-polynomial-ring-over-a-domain-is-a-domain]], [[def-polynomial-ring-over-a-commutative-ring]])

[F7] For ring maps $A\to B$ and $A\to C$ there is a canonical isomorphism $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C \cong\operatorname{Spec}(B\otimes_A C)$ over $\operatorname{Spec}A$. ([[thm-affine-fibre-product-tensor-ring]])

[F8] For $h:S'\to S$ and an $S$-scheme $X$, the **base change** is $X_{S'}=X\times_S S'$ with structure map the second projection ([[def-base-change-morphism-schemes]]).

[F9] For a base scheme $S$ the relative affine space $\mathbf A^1_S$ has $\mathbf A^1_{\operatorname{Spec}A}=\operatorname{Spec}A[x]$ over $\operatorname{Spec}A$; in particular $\mathbf A^1_k=\operatorname{Spec}k[x]$ with structure morphism induced by $k\hookrightarrow k[x]$. ([[def-scheme-over-base]])

## Counterexample

1.1 The multiplicative set $S$ contains no zero divisors of $k[t]$, and $k[t]$ is a domain by [F6], so [F5] shows that the localisation map $k[t]\to R$ is injective; hence $R$ is a domain and $(0)$ is a prime of $R$. Since $(t)\subseteq k[t]$ is a prime disjoint from $S$, [F4] shows that $R$ is a local ring with unique maximal ideal $\mathfrak m=tR$, and $t\in \mathfrak m$ is therefore not a unit of $R$. In particular $\operatorname{Spec}R$ contains the two points $(0)$ and $\mathfrak m$. [F4, F5, F6]

1.2 By [F9], $\mathbf A^1_k=\operatorname{Spec}k[x]$ over $S_0=\operatorname{Spec}k$, and $\operatorname{Spec}R\to S_0$ is the morphism induced by the field map $k\to R$. The canonical map $k[x]\otimes_kR\to R[x]$, $x^i\otimes r\mapsto rx^i$, is an isomorphism of $R$-algebras because $k[x]$ is the free $k$-module with basis $x^i$; hence [F7] identifies the base change $\mathbf A^1_k\times_{S_0}\operatorname{Spec}R$ with $\operatorname{Spec}R[x]$, with projection $q:\operatorname{Spec}R[x]\to\operatorname{Spec}R$ induced by $R\hookrightarrow R[x]$. By [F8] this $q$ is exactly the base change of $\mathbf A^1_k\to\operatorname{Spec}k$ along $\operatorname{Spec}R\to \operatorname{Spec}k$. [F7, F8, F9]

2.1 Let $Z=V(tx-1)\subseteq\operatorname{Spec}R[x]$ be the closed subset defined by the element $tx-1$. We compute its image. If $P\in Z$ is a prime containing $tx-1$ and if $t\in P\cap R$, then $tx-(tx-1)=1\in P$, a contradiction; so $t\notin P\cap R$ and $P\cap R\in D(t)$. Conversely, let $\mathfrak q\in D(t)$ be a prime of $R$ and let $\psi:R[x]\to\operatorname{Frac}(R/\mathfrak q)$ be the $R$-algebra map sending $x$ to the inverse of the image of $t$, which is legitimate because $t\notin \mathfrak q$. Its kernel $P$ is prime, contains $tx-1$, and satisfies $P\cap R=\mathfrak q$ because the composite $R\to\operatorname{Frac}(R/ \mathfrak q)$ has kernel $\mathfrak q$. Hence the image of $Z$ under the base-changed projection $q$ of step 1.2 is exactly the basic open $D(t)\subseteq\operatorname{Spec}R$. [F3, step 1.2]

3.1 The subset $D(t)$ is open but not closed. It is nonempty because $(0)\in D(t)$ by step 1.1, and it is not all of $\operatorname{Spec}R$ because the maximal ideal $\mathfrak m=tR$ contains $t$ and so lies outside $D(t)$. If $D(t)$ were closed, then by [F3] it would equal $V(I)$ for the radical ideal $I$; from $(0)\in V(I)$ we get $I\subseteq(0)$, hence $I=0$, hence $V(I)=\operatorname{Spec}R\neq D(t)$, a contradiction. Therefore $q$, whose image of the closed subset $Z$ is $D(t)$ by step 2.1, is not a closed map. [F3, step 1.1, step 2.1]

4.1 By [F2] and step 1.2, a nonclosed base-changed projection exhibits a failure of universal closedness of $\mathbf A^1_k\to\operatorname{Spec}k$, so that morphism is not universally closed and hence not proper by [F1]. The morphism is nevertheless of finite type and separated, being affine, so the failure is exactly in universal closedness. No choice principle is used: the prime witnessing nonclosedness is the maximal ideal $tR$, and the prime making $D(t)$ nonempty is $(0)$. Equivalently, the point $x=1/t\in K$ has no $R$-lift, since a compatible $R$-point would give a $k$-algebra map $k[x]\to R$ with $x\mapsto1/t$ while $1/t\notin R$ because $t$ is not a unit of $R$ by step 1.1. [F1, F2, step 1.1, step 1.2, step 3.1] ∎
