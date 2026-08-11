---
id: thm-universal-property-of-a-polynomial-ring
kind: theorem
title: 'Universal property of R[x]: a coefficient homomorphism and the image of x determine a unique ring homomorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-evaluation-and-root, thm-polynomial-ring-is-a-commutative-ring, prop-polynomial-coefficient-sequences-and-trimmed-lists-agree, def-ring-homomorphism, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'James McKernan, MIT 18.703 Lecture 21, Lemma 21.3'
      url: 'https://opencw.aprende.org/courses/mathematics/18-703-modern-algebra-spring-2013/lecture-notes/MIT18_703S13_pra_l_21.pdf'
pipeline_run: null
---

## Statement

Let $R,S$ be commutative rings, let $\varphi\colon R\to S$ be a unital ring homomorphism, and let $s\in S$. There is a unique unital ring homomorphism

$$ \operatorname{ev}_{\varphi,s}\colon R[x]\to S $$

that extends $\varphi$ on constant polynomials and sends $x$ to $s$. It is given by $\operatorname{ev}_{\varphi,s}(\sum_i a_i x^i)=\sum_i\varphi(a_i)s^i$.

## Facts & Assumptions

**Given:** Commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$, and an element $s\in S$.

[L1] Evaluation is the finite sum $f_\varphi(s)=\sum_i\varphi(a_i)s^i$ ([[def-polynomial-evaluation-and-root]]).

[L2] Polynomial convolution makes $R[x]$ a commutative ring with constant embedding $c\colon R\to R[x]$ ([[thm-polynomial-ring-is-a-commutative-ring]]).

[L3] Finitely supported sequences and trimmed coefficient lists have the same coefficients and operations ([[prop-polynomial-coefficient-sequences-and-trimmed-lists-agree]]).

[L4] A ring homomorphism preserves addition, multiplication, and one ([[def-ring-homomorphism]]).

[L5] Finite sums may be reindexed and iterated over finite products ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 The formula in [L1] preserves sums term by term, sends $1$ to $1$, and sends a convolution product to $\sum_{i,j}\varphi(a_i)\varphi(b_j)s^{i+j}=(\sum_i\varphi(a_i)s^i)(\sum_j\varphi(b_j)s^j)$ by [L5]; thus [L4] makes it a unital ring homomorphism, and [L2] shows that it extends $\varphi$ and sends $x$ to $s$. [given, L1, L2, L4, L5, algebra]

2.1 If $\psi\colon R[x]\to S$ is another such homomorphism, [L3] writes every polynomial as a finite sum $\sum_i c(a_i)x^i$, so [L4] forces $\psi(f)=\sum_i\varphi(a_i)s^i$; hence $\psi=\operatorname{ev}_{\varphi,s}$ and uniqueness holds. [step 1.1, L2, L3, L4] ∎
