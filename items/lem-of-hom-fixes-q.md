---
id: lem-of-hom-fixes-q
kind: lemma
title: "Field homomorphisms between ordered fields fix $\\mathbb{Q}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-field-homomorphism, lem-of-q-embeds, lem-of-naturals-positive]
aliases: []
landmark: false
short: "homs fix ℚ"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Statement

Let $F$ and $G$ be ordered fields with canonical rational embeddings
$\iota_F : \mathbb{Q} \to F$ and $\iota_G : \mathbb{Q} \to G$
([[lem-of-q-embeds]]). Then every field homomorphism $\varphi : F \to G$
([[def-field-homomorphism]]) **fixes $\mathbb{Q}$**, meaning
$$\varphi \circ \iota_F = \iota_G, \qquad \text{i.e. } \varphi(\iota_F(q)) = \iota_G(q) \text{ for all } q \in \mathbb{Q}.$$

## Facts & Assumptions

**Given:** Ordered fields $F, G$, a field homomorphism $\varphi : F \to G$, and the canonical embeddings $\iota_F, \iota_G$.

[L1] The canonical embedding $\iota : \mathbb{Q} \to F$ acts on $\mathbb{Z}$ by $n \mapsto n \cdot 1_F$ and on $\mathbb{Q}$ by $p/q \mapsto (p \cdot 1_F)(q \cdot 1_F)^{-1}$ (likewise for $\iota_G$) ([[lem-of-q-embeds]]).

[L2] The canonical natural $n \cdot 1$ is the $n$-fold sum $1 + \dots + 1$; the integers embed with $q \cdot 1 \ne 0$ for $q \ne 0$ ([[lem-of-naturals-positive]]).

[L3] $\varphi$ is a field homomorphism: $\varphi(1_F) = 1_G$, $\varphi(x + y) = \varphi(x) + \varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$, $\varphi(0_F) = 0_G$, $\varphi(-x) = -\varphi(x)$, and $\varphi(x^{-1}) = \varphi(x)^{-1}$ for $x \ne 0$ ([[def-field-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $\varphi(1_F) = 1_G$ and $\varphi$ preserves sums, products, negation, and inversion of nonzero elements. [L3]

1.2 By [L1], $\iota_F$ and $\iota_G$ send each $n \in \mathbb{Z}$ to $n \cdot 1_F$ and $n \cdot 1_G$, and each $p/q \in \mathbb{Q}$ to $(p \cdot 1)(q \cdot 1)^{-1}$ in the respective field. [L1]

1.3 Because $n \cdot 1_F$ is the $n$-fold sum of $1_F$ ([L2]) and $\varphi$ is additive with $\varphi(1_F) = 1_G$, we get $\varphi(n \cdot 1_F) = n \cdot 1_G$ for every canonical natural $n$. [L2, L3]

2.1 For each integer $n$ this extends by sign: $\varphi(\iota_F(0)) = \varphi(0_F) = 0_G = \iota_G(0)$ and $\varphi(\iota_F(-n)) = \varphi(-(n \cdot 1_F)) = -(n \cdot 1_G) = \iota_G(-n)$, so $\varphi(\iota_F(m)) = \iota_G(m)$ for all $m \in \mathbb{Z}$. [step 1.2, step 1.3, L3]

3.1 For a rational $p/q$ with integers $p, q \ne 0$, $\iota_F(p/q) = (p \cdot 1_F)(q \cdot 1_F)^{-1}$, so $\varphi(\iota_F(p/q)) = \varphi(p \cdot 1_F)\,\varphi(q \cdot 1_F)^{-1} = (p \cdot 1_G)(q \cdot 1_G)^{-1} = \iota_G(p/q)$. [step 1.2, step 2.1, L3]

4.1 Since $\varphi \circ \iota_F$ and $\iota_G$ agree on every rational, $\varphi \circ \iota_F = \iota_G$: the homomorphism $\varphi$ fixes $\mathbb{Q}$. [step 3.1] ∎
