---
id: thm-structure-theorem-for-artinian-rings
kind: theorem
title: "An Artinian ring is canonically the finite product of its localizations at its maximal ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-artinian-ring-primes-are-maximal, thm-artinian-ring-has-finitely-many-maximal-ideals, thm-nilradical-of-artinian-ring-is-nilpotent, cor-nilradical-as-intersection-of-primes, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-prime-spectrum-of-a-quotient-bijection, thm-universal-property-of-localisation, thm-quotient-ring-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 16.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative Artinian ring. If $R=0$, then it has no maximal ideals. Otherwise let $\mathfrak m_1,\ldots,\mathfrak m_r$ be its maximal ideals. Then the canonical localization map
$$
R\longrightarrow \prod_{i=1}^r R_{\mathfrak m_i}
$$
is an isomorphism. If $N=\operatorname{Nil}(R)$ and $N^n=0$, then also
$$
R\cong\prod_{i=1}^r R/\mathfrak m_i^n.
$$
The quotient-by-powers description depends on the chosen exponent $n$, but the product of localizations is canonical.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$ and the Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 If $R=0$, then the theorem has no further content. Assume from now on that $R\ne0$. Let $\mathfrak m_1,\ldots,\mathfrak m_r$ be the maximal ideals of $R$, finite by [[thm-artinian-ring-has-finitely-many-maximal-ideals]], and put $N=\operatorname{Nil}(R)$. By [[cor-nilradical-as-intersection-of-primes]] and [[thm-artinian-ring-primes-are-maximal]], one has $N=\mathfrak m_1\cap\cdots\cap\mathfrak m_r$. Choose $n\ge1$ with $N^n=0$ by [[thm-nilradical-of-artinian-ring-is-nilpotent]]. Distinct maximal ideals are comaximal, and if $i\ne j$ then choosing $a\in\mathfrak m_i$ and $b\in\mathfrak m_j$ with $a+b=1$ gives, from the binomial expansion of $(a+b)^{2n-1}$, the inclusion $1\in\mathfrak m_i^n+\mathfrak m_j^n$. So the ideals $\mathfrak m_i^n$ are pairwise comaximal. Also $\prod_{i=1}^r\mathfrak m_i^n=\left(\prod_{i=1}^r\mathfrak m_i\right)^n\subseteq N^n=0$. Hence [[thm-chinese-remainder-theorem-for-comaximal-ideals]] yields $R\cong\prod_{i=1}^rR/\mathfrak m_i^n$. [given, cases, choose, algebra]

2.1 For each $i$, set $A_i=R/\mathfrak m_i^n$. This quotient is local. Indeed [[thm-prime-spectrum-of-a-quotient-bijection]] identifies prime ideals of $A_i$ with prime ideals $\mathfrak p$ of $R$ containing $\mathfrak m_i^n$. Since $N^n=0\subseteq\mathfrak m_i^n\subseteq\mathfrak p$, the prime $\mathfrak p$ contains $N$ and therefore equals one of the maximal ideals $\mathfrak m_j$. If $j\ne i$, choose $a\in\mathfrak m_i$ and $b\in\mathfrak m_j$ with $a+b=1$; the same binomial argument as in step 1.1 gives $1\in\mathfrak m_i^n+\mathfrak m_j$. So $\mathfrak m_i^n\nsubseteq\mathfrak m_j$, a contradiction. Thus $\mathfrak p=\mathfrak m_i$, and $A_i$ has the unique maximal ideal $\mathfrak m_i/\mathfrak m_i^n$. [step 1.1, given, choose, algebra]

3.1 Let $\lambda_i:R\to R_{\mathfrak m_i}$ be localization and $q_i:R\to A_i$ the quotient map. Since $A_i$ is local with maximal ideal $\mathfrak m_i/\mathfrak m_i^n$, every $s\notin\mathfrak m_i$ maps to a unit of $A_i$, so [[thm-universal-property-of-localisation]] gives a unique homomorphism $\psi_i:R_{\mathfrak m_i}\to A_i$ with $q_i=\psi_i\lambda_i$. Conversely, for each $j\ne i$ choose $u_j\in\mathfrak m_j\setminus\mathfrak m_i$ and put $u=\prod_{j\ne i}u_j^n$. Then $u$ becomes a unit in $R_{\mathfrak m_i}$, while $u\,\mathfrak m_i^n\subseteq\prod_{j=1}^r\mathfrak m_j^n=0$ by step 1.1. Hence $\lambda_i$ kills $\mathfrak m_i^n$, and [[thm-quotient-ring-universal-property]] gives a unique homomorphism $\overline\lambda_i:A_i\to R_{\mathfrak m_i}$ with $\lambda_i=\overline\lambda_i q_i$. Both composites $\psi_i\overline\lambda_i$ and $\overline\lambda_i\psi_i$ agree with the identity after precomposing with the relevant universal map, so uniqueness in the same two universal properties forces them to be identities. Therefore $A_i\cong R_{\mathfrak m_i}$. [step 1.1, step 2.1, given, choose, algebra]

4.1 Combining steps 1.1 and 3.1 gives $R\cong\prod_{i=1}^rR_{\mathfrak m_i}$ canonically, and also $R\cong\prod_{i=1}^rR/\mathfrak m_i^n$. The second form depends on the chosen nilpotence exponent $n$, while the first is the canonical product of localizations. [step 1.1, step 3.1] ∎
