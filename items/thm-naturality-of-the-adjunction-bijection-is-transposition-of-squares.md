---
id: thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares
kind: theorem
title: 'A square commutes if and only if its transposed square commutes'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-adjunction-hom-set-bijection-under-local-smallness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.1.3'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 2.2'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $F\dashv G$ be an adjunction between locally small categories. Suppose

$$u:Fc\to d,\quad u':Fc'\to d',\quad a:c\to c',\quad b:d\to d'.$$

Then

$$ b\circ u=u'\circ F(a)\quad\Longleftrightarrow\quad G(b)\circ u^\flat=(u')^\flat\circ a. $$

The analogous equivalence holds after applying inverse transposition to a square between morphisms $c\to Gd$.

## Facts & Assumptions

**Given:** The adjunction and the four typed morphisms in the Statement.

[L1] Transposition is a bijection natural in both variables: for $a:c\to c'$, $b:d\to d'$ and $v:Fc'\to d$, one has $\Phi_{c,d'}(b\circ v\circ F(a))=G(b)\circ\Phi_{c',d}(v)\circ a$ ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 If $b\circ u=u'\circ F(a)$, apply transposition. By [L1], the transpose of the left side is $G(b)\circ u^\flat$, while the transpose of the right side is $(u')^\flat\circ a$, so the transposed square commutes. [L1]

1.2 Conversely, if the transposed square commutes, apply the inverse bijection to its two sides. The two inverse images are $b\circ u$ and $u'\circ F(a)$ by [L1], so the original square commutes. [L1]

2.1 Repeating steps 1.1 and 1.2 with the inverse bijections proves the analogous assertion for inverse transposition. [step 1.1, step 1.2, L1] ∎
