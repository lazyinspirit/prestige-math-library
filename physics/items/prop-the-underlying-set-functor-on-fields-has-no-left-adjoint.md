---
id: prop-the-underlying-set-functor-on-fields-has-no-left-adjoint
kind: proposition
title: 'The underlying-set functor on fields has no left adjoint'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-adjunction-hom-set-bijection-under-local-smallness, def-field, def-field-homomorphism, def-ring-characteristic, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.12'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 6.3.5'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

The underlying-set functor $U:\mathbf{Field}\to\mathbf{Set}$ has no left adjoint, where field homomorphisms preserve $1$.

## Facts & Assumptions

**Given:** The category of fields and unital field homomorphisms.

[F1] A field has $0\ne1$, is an abelian group under addition, has associative commutative multiplication with unit and inverses for nonzero elements, and satisfies distributivity ([[def-field]]).

[F2] A field homomorphism satisfies $\varphi(x+y)=\varphi(x)+\varphi(y)$, $\varphi(xy)=\varphi(x)\varphi(y)$, and $\varphi(1_F)=1_G$, and is automatically injective because its kernel is an ideal of a field and does not contain $1_F$ ([[def-field-homomorphism]]).

[F3] The characteristic of a unital ring is the least positive natural $n$ with $n\cdot1_R=0_R$, if such an $n$ exists, and is $0$ otherwise ([[def-ring-characteristic]]).

[F4] For every prime $p$, $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L1] If $F\dashv U$, then $\mathbf{Field}(F(X),K)\cong\mathbf{Set}(X,U(K))$ naturally ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that a left adjoint $F$ to $U$ exists. [assume-contra]

1.2 Taking $X=\varnothing$ in [L1], the right hom-set is a singleton for every field $K$, so there is exactly one field homomorphism $F(\varnothing)\to K$; hence $F(\varnothing)$ is an initial field. [L1]

1.3 Let $\varphi:K\to L$ be a field homomorphism. By [F2] it sends $n\cdot1_K$ to $n\cdot1_L$ for every natural $n$ and is injective. If $\operatorname{char}K=p>0$ then $p\cdot1_L=\varphi(p\cdot1_K)=\varphi(0)=0$; dividing $p$ by $\operatorname{char}L$ with remainder and using the minimality in [F3] shows $\operatorname{char}L$ divides $p$, and $\operatorname{char}L=1$ is impossible because $0\ne1$ in [F1], so $\operatorname{char}L=p$. If $\operatorname{char}K=0$ then $n\cdot1_K\ne0$ for every $n\ge1$, so injectivity gives $n\cdot1_L\ne0$ and $\operatorname{char}L=0$. Thus a field homomorphism preserves characteristic exactly. [F1, F2, F3]

2.1 In $\mathbb Z/p$ the element $n\cdot1$ is the class of $n$, which vanishes exactly when $p\mid n$, so [F3] and [F4] give $\operatorname{char}\mathbb F_2=2$ and $\operatorname{char}\mathbb F_3=3$. The initial field would have homomorphisms to both, and step 1.3 would force its characteristic to equal $2$ and to equal $3$. [step 1.2, step 1.3, F3, F4]

3.1 The contradiction shows that $U$ has no left adjoint. [step 2.1, discharge-contradiction] ∎
